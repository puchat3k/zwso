# ZWSO 1-bit freshness gate

Date: 2026-09-15
State: DRAFT / reality branch

## Intent
Make the next ZWSO cycle prove that public publication and structured persistence agree before downstream systems treat the snapshot as current.

## Minimum acceptance
1. Resolve the current public-vs-structured parity state.
2. Preserve any missed cycle as MISSING or clearly marked retrospective backfill. Do not fabricate contemporaneous evidence.
3. For the next scheduled snapshot, record:
   - expected snapshot date;
   - public artifact present;
   - structured row present;
   - methodology version;
   - previous-snapshot link;
   - parity state;
   - freshness state.
4. Downstream consumers must receive freshness metadata.
5. UNKNOWN remains valid when a source cannot be reconciled.

## Exit receipt
A future implementation or run may replace this intent artifact only when it includes a concrete commit/run receipt proving parity or explicitly proving the remaining blocker.
