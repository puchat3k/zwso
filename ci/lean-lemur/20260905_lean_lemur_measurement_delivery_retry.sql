alter table lean_lemur.measurement_deliveries
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists next_attempt_at timestamptz;

create index if not exists measurement_deliveries_dispatch_idx
  on lean_lemur.measurement_deliveries (status, next_attempt_at, created_at)
  where status in ('PENDING', 'RETRY');
