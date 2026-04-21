-- Schedule a daily BabyLoveGrowth sync at 03:17 UTC.
-- Relies on the pg_cron and pg_net extensions (standard on Supabase).
--
-- Prereqs:
--   1. `supabase secrets set BABYLOVE_API_KEY=<key>`
--   2. (optional) `supabase secrets set BABYLOVE_SYNC_TOKEN=<random>` and then
--      set the same token in the Vault key `babylove_sync_token` so cron auths.
--
-- Supabase exposes the project URL + anon key via the `vault.decrypted_secrets`
-- table for self-hosted automation. For hosted projects edit the two app.settings
-- below so they match your project. They can also be overridden at runtime via
-- `ALTER DATABASE postgres SET app.settings.supabase_url = '...'`.

CREATE EXTENSION IF NOT EXISTS pg_cron  WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net   WITH SCHEMA extensions;

-- Drop a previous schedule (idempotent re-run).
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'babylove-sync-daily') THEN
    PERFORM cron.unschedule('babylove-sync-daily');
  END IF;
END $$;

-- Schedule the job. Adjust the cron expression if you want more frequent runs.
SELECT cron.schedule(
  'babylove-sync-daily',
  '17 3 * * *',                       -- every day at 03:17 UTC
  $cron$
  SELECT net.http_post(
    url := current_setting('app.settings.supabase_url', true) || '/functions/v1/babylove-sync',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || coalesce(
        current_setting('app.settings.babylove_sync_token', true),
        current_setting('app.settings.service_role_key', true)
      )
    ),
    body := '{}'::jsonb,
    timeout_milliseconds := 60000
  );
  $cron$
);

COMMENT ON EXTENSION pg_cron IS 'Used by babylove-sync-daily job.';
