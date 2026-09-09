# ZWSO Publication & Persistence Audit — 2026-09-10

## Scope

Audit the current weekly ZWSO publication cadence, public GitHub mirror and canonical database freshness.

## Canonical methodology expectation

ZWSO is intended to publish one immutable weekly snapshot every Wednesday, preserve provenance and uncertainty, compare against the previous snapshot, and make the latest snapshot available downstream as read-only soft context.

## Findings

### Latest public snapshot

**2026-09-09**

Public artifact:

`snapshots/2026/2026-09-09.md`

Git commit:

`f0496ebc3aa009d74507b7abe0335a5e4b0626c3`

Commit message:

`Add ZWSO weekly snapshot for 2026-09-09`

This is a contemporaneous methodology-v0.2 snapshot covering 2026-09-03 through 2026-09-09.

### Missing weekly snapshot

There is no public `2026-09-02.md` snapshot.

The 9 September snapshot explicitly states that comparison is against 26 August because no 2 September snapshot exists in the ZWSO series.

### Database freshness

Supabase table:

`zwso.zeitgeist_snapshots`

Latest row observed during this audit:

**2026-08-26**

Therefore the public GitHub mirror is currently fresher than the structured database.

## Audit state

```text
Expected cadence       weekly Wednesday
Latest public          2026-09-09  PASS / current
2026-09-02 snapshot    MISSING
Latest database row    2026-08-26  STALE
Public/database parity FAIL
Methodology             v0.2
```

## Interpretation

ZWSO is **not currently dead or fully stale**. Public publication resumed on 9 September.

The real issue is a **split-brain persistence failure**:

```text
public GitHub mirror      2026-09-09
structured ZWSO database  2026-08-26
```

Downstream systems that read GitHub can observe the current snapshot. Systems that treat `zwso.zeitgeist_snapshots` as the current structured source will receive stale context.

## Severity

**DEGRADED, not failed.**

Reasons:
- public current snapshot exists;
- one weekly interval is missing;
- structured persistence is two snapshot intervals behind the public mirror;
- downstream consumers may disagree depending on source.

## Required corrective actions

1. Reconcile the 2026-09-09 public snapshot into `zwso.zeitgeist_snapshots` using the existing schema and immutable semantics.
2. Decide whether 2026-09-02 remains a documented missing observation or is created as a clearly marked retrospective backfill. Do not fabricate a contemporaneous record.
3. Add a publication/persistence reconciliation check after every Wednesday run:
   - expected snapshot date;
   - GitHub artifact present;
   - structured row present;
   - methodology version agrees;
   - snapshot type agrees;
   - previous-snapshot link/comparison valid.
4. Downstream AHAC/GSV integrations should carry ZWSO freshness metadata and refuse to present stale context as current.
5. Add `last_public_snapshot`, `last_structured_snapshot`, `age_days`, `parity_state`, and `freshness_state` to the ZWSO health surface.

## Suggested health states

```text
CURRENT
public and structured current; parity confirmed

PUBLIC_AHEAD
public snapshot current; structured persistence behind

DB_AHEAD
structured current; public publication behind

MISSED_CYCLE
expected weekly snapshot absent

STALE
latest snapshot older than 10 days

DEGRADED
one source current but parity/reconciliation failure exists
```

## Current result

**DEGRADED / PUBLIC_AHEAD**

Latest public snapshot: **9 September 2026**.

Latest structured snapshot observed: **26 August 2026**.

Missing scheduled observation: **2 September 2026**.

## Architectural note

ZWSO remains a public-world → ZWSO → private interpretation system. Correcting persistence must not reverse the privacy firewall or write private AHAC/GSV strategy back into the public ZWSO project.
