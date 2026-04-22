-- 1. Add new columns to blog_articles
ALTER TABLE public.blog_articles
  ADD COLUMN IF NOT EXISTS excerpt text,
  ADD COLUMN IF NOT EXISTS seed_keyword text,
  ADD COLUMN IF NOT EXISTS keywords jsonb,
  ADD COLUMN IF NOT EXISTS json_ld jsonb,
  ADD COLUMN IF NOT EXISTS faq_json_ld jsonb,
  ADD COLUMN IF NOT EXISTS updated_at timestamptz NOT NULL DEFAULT now(),
  ADD COLUMN IF NOT EXISTS last_synced_at timestamptz,
  ADD COLUMN IF NOT EXISTS sync_source text;

-- 2. GIN index on keywords jsonb
CREATE INDEX IF NOT EXISTS idx_blog_articles_keywords
  ON public.blog_articles USING GIN (keywords);

-- 3. Trigger to keep updated_at fresh (function update_updated_at_column already exists)
DROP TRIGGER IF EXISTS update_blog_articles_updated_at ON public.blog_articles;
CREATE TRIGGER update_blog_articles_updated_at
BEFORE UPDATE ON public.blog_articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- 4. Enable extensions for cron + http calls
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 5. Schedule daily sync at 03:17 UTC
-- Unschedule existing job (if any) to make migration idempotent
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'babylove-sync-daily') THEN
    PERFORM cron.unschedule('babylove-sync-daily');
  END IF;
END $$;

SELECT cron.schedule(
  'babylove-sync-daily',
  '17 3 * * *',
  $$
  SELECT net.http_post(
    url := 'https://vhzmfebggxeovtkznlby.supabase.co/functions/v1/babylove-sync',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{"limit": 100, "force": false}'::jsonb
  ) AS request_id;
  $$
);