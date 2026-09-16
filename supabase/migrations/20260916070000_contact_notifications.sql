-- Notification failures do not reject a durably captured lead. Retry independently.
ALTER TABLE public.crm_delivery_outbox
 ADD COLUMN IF NOT EXISTS notification_status text NOT NULL DEFAULT 'not_required'
   CHECK (notification_status IN ('not_required','pending','sent','failed')),
 ADD COLUMN IF NOT EXISTS notification_attempts integer NOT NULL DEFAULT 0,
 ADD COLUMN IF NOT EXISTS notification_next_attempt_at timestamptz NOT NULL DEFAULT now(),
 ADD COLUMN IF NOT EXISTS notification_id text,
 ADD COLUMN IF NOT EXISTS notification_last_error text;
CREATE INDEX IF NOT EXISTS crm_notice_due ON public.crm_delivery_outbox(notification_next_attempt_at)
 WHERE notification_status IN ('pending','failed');
-- Existing RLS remains unchanged: this queue is server-only.
