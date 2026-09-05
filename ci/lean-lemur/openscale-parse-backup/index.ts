import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { unzipSync } from "npm:fflate@0.8.2";
// @ts-ignore sql.js ships the asm build as a single JS module.
import initSqlJs from "npm:sql.js@1.14.1/dist/sql-asm.js";

const jsonHeaders = { "content-type": "application/json; charset=utf-8" };

function u32be(b: Uint8Array, o: number): number {
  return (((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]) >>> 0);
}

function sqlitePageSize(db: Uint8Array): number {
  if (db.length < 100) throw new Error("invalid_sqlite_header");
  const sig = new TextDecoder().decode(db.subarray(0, 16));
  if (sig !== "SQLite format 3\u0000") throw new Error("invalid_sqlite_signature");
  const raw = (db[16] << 8) | db[17];
  return raw === 1 ? 65536 : raw;
}

function mergeWal(mainDb: Uint8Array, wal?: Uint8Array): Uint8Array {
  if (!wal || wal.length < 32) return mainDb;
  const magic = u32be(wal, 0);
  if (magic !== 0x377f0682 && magic !== 0x377f0683) throw new Error("invalid_wal_magic");
  let pageSize = u32be(wal, 8);
  if (pageSize === 1) pageSize = 65536;
  if (pageSize < 512 || pageSize > 65536 || (pageSize & (pageSize - 1)) !== 0) throw new Error("invalid_wal_page_size");
  if (sqlitePageSize(mainDb) !== pageSize) throw new Error("wal_page_size_mismatch");
  const salt1 = u32be(wal, 16);
  const salt2 = u32be(wal, 20);
  const frameSize = 24 + pageSize;
  const frameCount = Math.floor((wal.length - 32) / frameSize);
  let validFrames = 0;
  let lastCommit = -1;
  let committedPages = 0;
  for (let i = 0; i < frameCount; i++) {
    const off = 32 + i * frameSize;
    const pageNo = u32be(wal, off);
    if (pageNo === 0 || u32be(wal, off + 8) !== salt1 || u32be(wal, off + 12) !== salt2) break;
    validFrames = i + 1;
    const dbSize = u32be(wal, off + 4);
    if (dbSize > 0) { lastCommit = i; committedPages = dbSize; }
  }
  if (!validFrames || lastCommit < 0) return mainDb;
  const out = new Uint8Array(committedPages * pageSize);
  out.set(mainDb.subarray(0, Math.min(mainDb.length, out.length)));
  for (let i = 0; i <= lastCommit; i++) {
    const off = 32 + i * frameSize;
    const pageNo = u32be(wal, off);
    if (pageNo === 0 || pageNo > committedPages) continue;
    out.set(wal.subarray(off + 24, off + 24 + pageSize), (pageNo - 1) * pageSize);
  }
  return out;
}

function hexDigest(digest: ArrayBuffer): string {
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") return new Response(JSON.stringify({ error: "method_not_allowed" }), { status: 405, headers: jsonHeaders });
  try {
    const bytes = new Uint8Array(await req.arrayBuffer());
    if (!bytes.length) return new Response(JSON.stringify({ error: "empty_body" }), { status: 400, headers: jsonHeaders });
    const backup_sha256 = hexDigest(await crypto.subtle.digest("SHA-256", bytes));
    const files = unzipSync(bytes);
    const main = files["openScale.db"];
    if (!main) return new Response(JSON.stringify({ error: "missing_backup_member", member: "openScale.db" }), { status: 400, headers: jsonHeaders });
    const snapshot = mergeWal(main, files["openScale.db-wal"]);
    const SQL = await initSqlJs();
    const db = new SQL.Database(snapshot);
    const result = db.exec(`
      SELECT
        m.id AS measurement_id,
        m.userId AS user_id,
        m.timestamp AS timestamp_ms,
        MAX(CASE WHEN mt.key='WEIGHT' THEN mv.floatValue END) AS weight_kg,
        MAX(CASE WHEN mt.key='BODY_FAT' THEN mv.floatValue END) AS bodyfat_pct,
        MAX(CASE WHEN mt.key='WATER' THEN mv.floatValue END) AS water_pct,
        MAX(CASE WHEN mt.key='MUSCLE' THEN mv.floatValue END) AS muscle_pct,
        MAX(CASE WHEN mt.key='BONE' THEN mv.floatValue END) AS bone_kg,
        MAX(CASE WHEN mt.key='LBM' THEN mv.floatValue END) AS lbm_kg,
        MAX(CASE WHEN mt.key='BMI' THEN mv.floatValue END) AS bmi,
        MAX(CASE WHEN mt.key='VISCERAL_FAT' THEN mv.floatValue END) AS visceral_fat,
        MAX(CASE WHEN mt.key='IMPEDANCE' THEN mv.floatValue END) AS impedance_ohm
      FROM Measurement m
      LEFT JOIN MeasurementValue mv ON mv.measurementId = m.id
      LEFT JOIN MeasurementType mt ON mt.id = mv.typeId
      GROUP BY m.id, m.userId, m.timestamp
      ORDER BY m.timestamp
    `);
    const measurements: Record<string, unknown>[] = [];
    if (result.length) {
      const { columns, values } = result[0];
      for (const row of values) {
        const obj: Record<string, unknown> = {};
        for (let i = 0; i < columns.length; i++) obj[columns[i]] = row[i];
        measurements.push(obj);
      }
    }
    db.close();
    return new Response(JSON.stringify({ backup_sha256, count: measurements.length, measurements }), { status: 200, headers: jsonHeaders });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ error: "parse_failed", message }), { status: 500, headers: jsonHeaders });
  }
});
