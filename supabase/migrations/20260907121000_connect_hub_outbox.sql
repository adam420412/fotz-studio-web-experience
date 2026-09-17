BEGIN;

-- Durable queue between the public website and FOTZ Connect Hub.
-- Only Edge Functions using the service-role key can read or write this table.
CREATE TABLE IF NOT EXISTS public.crm_delivery_outbox (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id TEXT NOT NULL UNIQUE,
  event_type TEXT NOT NULL DEFAULT 'lead.captured',
  payload JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'delivered', 'failed')),
  attempt_count INTEGER NOT NULL DEFAULT 0,
  next_attempt_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_attempt_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  connect_hub_event_id TEXT,
  connect_hub_lead_id TEXT,
  last_error TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.crm_delivery_outbox ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_crm_delivery_outbox_due
  ON public.crm_delivery_outbox (status, next_attempt_at)
  WHERE status IN ('pending', 'failed');

CREATE OR REPLACE FUNCTION public.update_crm_delivery_outbox_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS update_crm_delivery_outbox_updated_at_trigger
  ON public.crm_delivery_outbox;
CREATE TRIGGER update_crm_delivery_outbox_updated_at_trigger
BEFORE UPDATE ON public.crm_delivery_outbox
FOR EACH ROW EXECUTE FUNCTION public.update_crm_delivery_outbox_updated_at();

COMMENT ON TABLE public.crm_delivery_outbox IS
  'Server-only retry queue for website lead and booking delivery to FOTZ Connect Hub.';

-- Atomic, server-only throttling for public form and calendar Edge Functions.
-- Only a salted hash of the network identifier is stored.
CREATE TABLE IF NOT EXISTS public.public_intake_rate_limits (
  scope TEXT NOT NULL,
  key_hash TEXT NOT NULL,
  window_started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  request_count INTEGER NOT NULL DEFAULT 1,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (scope, key_hash)
);

ALTER TABLE public.public_intake_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.consume_public_intake_limit(
  p_key_hash TEXT,
  p_scope TEXT,
  p_limit INTEGER,
  p_window_seconds INTEGER
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  allowed BOOLEAN;
BEGIN
  IF length(p_key_hash) < 32 OR length(p_scope) < 2
    OR p_limit < 1 OR p_window_seconds < 1 THEN
    RETURN false;
  END IF;

  INSERT INTO public.public_intake_rate_limits AS limits (
    scope, key_hash, window_started_at, request_count, updated_at
  ) VALUES (
    left(p_scope, 100), left(p_key_hash, 128), now(), 1, now()
  )
  ON CONFLICT (scope, key_hash) DO UPDATE SET
    window_started_at = CASE
      WHEN limits.window_started_at <= now() - make_interval(secs => p_window_seconds)
        THEN now()
      ELSE limits.window_started_at
    END,
    request_count = CASE
      WHEN limits.window_started_at <= now() - make_interval(secs => p_window_seconds)
        THEN 1
      ELSE limits.request_count + 1
    END,
    updated_at = now()
  RETURNING request_count <= p_limit INTO allowed;

  RETURN allowed;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_public_intake_limit(TEXT, TEXT, INTEGER, INTEGER)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_public_intake_limit(TEXT, TEXT, INTEGER, INTEGER)
  TO service_role;

COMMIT;
