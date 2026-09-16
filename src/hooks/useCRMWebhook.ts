import { supabase } from "@/integrations/supabase/client";
import { getAttributionContext } from "@/lib/utm";

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source?: string;
  notes?: string;
}

interface BookingData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  booking_date: string;
  booking_time: string;
  service_type?: string;
  source?: string;
  notes?: string;
}

type CRMResult = {
  success: boolean;
  queued?: boolean;
  delivered?: boolean;
  lead_id?: string;
  booking_id?: string;
  error?: string;
};

const createSubmissionId = () =>
  globalThis.crypto?.randomUUID?.()
  || `fotz-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;

const currentAttribution = () => {
  const context = getAttributionContext();
  const active = { ...context.first_touch, ...context.last_touch };
  return {
    ...active,
    landing_page: context.first_touch.landing_page || context.last_touch.landing_page,
    page_url: context.current_page,
    first_touch: context.first_touch,
    last_touch: context.last_touch,
  };
};

const invokeCRMProxy = async (payload: Record<string, unknown>): Promise<CRMResult> => {
  const { data, error } = await supabase.functions.invoke<CRMResult>("crm-sync", { body: payload });
  if (error || !data?.success) {
    const message = error?.message || data?.error || "CRM sync failed";
    console.error("[crm-sync] request failed", message);
    return { success: false, error: message };
  }
  return data;
};

export async function sendLeadToCRM(data: LeadData): Promise<CRMResult> {
  const submissionId = createSubmissionId();
  return invokeCRMProxy({
    version: "2026-09-01",
    event_type: "lead.captured",
    submission_id: submissionId,
    occurred_at: new Date().toISOString(),
    source: {
      provider: "website_lovable",
      channel: "website",
      detail: data.source || `website:${window.location.pathname}`,
      external_event_id: submissionId,
    },
    contact: {
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
    },
    attribution: currentAttribution(),
    message: data.notes || null,
  });
}

export async function sendBookingToCRM(data: BookingData): Promise<CRMResult> {
  const submissionId = createSubmissionId();
  return invokeCRMProxy({
    version: "2026-09-01",
    event_type: "booking.created",
    submission_id: submissionId,
    occurred_at: new Date().toISOString(),
    source: {
      provider: "website_lovable",
      channel: "website",
      detail: data.source || `website:${window.location.pathname}`,
      external_event_id: submissionId,
    },
    contact: {
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
    },
    attribution: currentAttribution(),
    booking: {
      date: data.booking_date,
      time: data.booking_time,
      service_type: data.service_type || "konsultacja",
    },
    message: data.notes || null,
  });
}
