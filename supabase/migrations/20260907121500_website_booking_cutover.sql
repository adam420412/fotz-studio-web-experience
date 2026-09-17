-- Apply together with the new booking frontend and Edge Functions.
-- The foundation migration can be deployed earlier without interrupting the current form.
BEGIN;

-- Booking writes also move behind an Edge Function. The function serializes
-- a given date/time pair, so two visitors cannot reserve the same slot.
ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS submission_id TEXT,
  ADD COLUMN IF NOT EXISTS utm_source TEXT,
  ADD COLUMN IF NOT EXISTS utm_medium TEXT,
  ADD COLUMN IF NOT EXISTS utm_campaign TEXT,
  ADD COLUMN IF NOT EXISTS utm_content TEXT,
  ADD COLUMN IF NOT EXISTS gclid TEXT,
  ADD COLUMN IF NOT EXISTS fbclid TEXT,
  ADD COLUMN IF NOT EXISTS landing_page TEXT,
  ADD COLUMN IF NOT EXISTS agency_notification_sent_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS client_confirmation_sent_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS metadata JSONB NOT NULL DEFAULT '{}'::jsonb;

CREATE UNIQUE INDEX IF NOT EXISTS idx_website_bookings_submission_unique
  ON public.bookings (submission_id) WHERE submission_id IS NOT NULL;

DROP POLICY IF EXISTS "Anyone can create bookings" ON public.bookings;

CREATE OR REPLACE FUNCTION public.create_website_booking(
  p_submission_id TEXT,
  p_client_name TEXT,
  p_client_email TEXT,
  p_client_phone TEXT,
  p_booking_date DATE,
  p_booking_time TIME,
  p_service_type TEXT,
  p_notes TEXT,
  p_source TEXT,
  p_utm_source TEXT,
  p_utm_medium TEXT,
  p_utm_campaign TEXT,
  p_utm_content TEXT,
  p_gclid TEXT,
  p_fbclid TEXT,
  p_landing_page TEXT,
  p_metadata JSONB
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result_id UUID;
BEGIN
  PERFORM pg_advisory_xact_lock(hashtext(p_booking_date::text || '|' || p_booking_time::text));

  SELECT id INTO result_id
  FROM public.bookings
  WHERE submission_id = p_submission_id
  LIMIT 1;
  IF result_id IS NOT NULL THEN
    RETURN result_id;
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.bookings
    WHERE booking_date = p_booking_date
      AND booking_time = p_booking_time
      AND status IN ('pending', 'confirmed')
  ) THEN
    RAISE EXCEPTION 'SLOT_TAKEN' USING ERRCODE = 'P0001';
  END IF;

  INSERT INTO public.bookings (
    submission_id, client_name, client_email, client_phone,
    booking_date, booking_time, service_type, notes, source, status,
    utm_source, utm_medium, utm_campaign, utm_content, gclid, fbclid,
    landing_page, metadata
  ) VALUES (
    p_submission_id, p_client_name, lower(btrim(p_client_email)), NULLIF(btrim(p_client_phone), ''),
    p_booking_date, p_booking_time, COALESCE(NULLIF(p_service_type, ''), 'konsultacja'),
    p_notes, COALESCE(NULLIF(p_source, ''), 'website'), 'pending',
    p_utm_source, p_utm_medium, p_utm_campaign, p_utm_content, p_gclid, p_fbclid,
    p_landing_page, COALESCE(p_metadata, '{}'::jsonb)
  )
  RETURNING id INTO result_id;

  RETURN result_id;
END;
$$;

REVOKE ALL ON FUNCTION public.create_website_booking(
  TEXT, TEXT, TEXT, TEXT, DATE, TIME, TEXT, TEXT, TEXT,
  TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, JSONB
) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.create_website_booking(
  TEXT, TEXT, TEXT, TEXT, DATE, TIME, TEXT, TEXT, TEXT,
  TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, JSONB
) TO service_role;

COMMIT;
