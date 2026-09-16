import { createClient } from "npm:@supabase/supabase-js@2";
import { queueCRMDelivery, type CRMJson } from "../_shared/fotz-crm.ts";
import { checkPublicRateLimit, isAllowedOrigin, publicCorsHeaders } from "../_shared/public-intake.ts";
import { sendMetaConversion } from "../_shared/meta-capi.ts";

const respond = (req: Request, body: CRMJson, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...publicCorsHeaders(req), "Content-Type": "application/json" },
  });

const text = (value: unknown, max = 500) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value);
const isTime = (value: string) => /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
const allowedTimes = new Set(["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]);

const warsawDateKey = (value: Date) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Warsaw",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(value);
  const part = (type: "year" | "month" | "day") => parts.find((item) => item.type === type)?.value || "";
  return `${part("year")}-${part("month")}-${part("day")}`;
};

const isAllowedBookingSlot = (date: string, time: string) => {
  if (!isDate(date) || !isTime(time) || !allowedTimes.has(time)) return false;
  const bookingDate = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(bookingDate.getTime()) || bookingDate.toISOString().slice(0, 10) !== date) return false;
  const weekday = bookingDate.getUTCDay();
  if (weekday === 0 || weekday === 6) return false;

  const today = warsawDateKey(new Date());
  const maximum = new Date(`${today}T12:00:00Z`);
  maximum.setUTCDate(maximum.getUTCDate() + 180);
  return date >= today && date <= maximum.toISOString().slice(0, 10);
};

const escapeHtml = (value: unknown) => String(value ?? "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

const sendEmail = async (to: string, subject: string, html: string) => {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) return false;
  const from = (Deno.env.get("CONTACT_FROM") || "Fotz Studio <onboarding@resend.dev>").trim();
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ from, to: [to], subject, html }),
    });
    if (!response.ok) {
      console.error("[book-consultation] email failed", { status: response.status });
      return false;
    }
    return true;
  } catch (error) {
    console.error("[book-consultation] email request failed", error instanceof Error ? error.message : "unknown");
    return false;
  }
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    if (!isAllowedOrigin(req)) return new Response(null, { status: 403 });
    return new Response(null, { headers: publicCorsHeaders(req) });
  }
  if (req.method !== "POST") return respond(req, { success: false, error: "METHOD_NOT_ALLOWED" }, 405);
  if (!isAllowedOrigin(req)) return respond(req, { success: false, error: "ORIGIN_NOT_ALLOWED" }, 403);

  const rateLimit = await checkPublicRateLimit(req, "book-consultation", 8, 3600);
  if (!rateLimit.configured) return respond(req, { success: false, error: "RATE_LIMIT_NOT_CONFIGURED" }, 503);
  if (!rateLimit.allowed) return respond(req, { success: false, error: "RATE_LIMITED" }, 429);

  let payload: CRMJson;
  try {
    const rawBody = await req.text();
    if (rawBody.length > 64_000) return respond(req, { success: false, error: "PAYLOAD_TOO_LARGE" }, 413);
    payload = JSON.parse(rawBody) as CRMJson;
  } catch {
    return respond(req, { success: false, error: "INVALID_JSON" }, 400);
  }

  const submissionId = text(payload.submission_id, 300) || crypto.randomUUID();
  const name = text(payload.name, 200);
  const email = text(payload.email, 320).toLowerCase();
  const phone = text(payload.phone, 40);
  const company = text(payload.company, 240);
  const message = text(payload.message, 4000);
  const date = text(payload.booking_date, 20);
  const time = text(payload.booking_time, 20);
  const serviceType = text(payload.service_type, 160) || "konsultacja";
  const attribution = payload.attribution && typeof payload.attribution === "object"
    ? payload.attribution as CRMJson
    : {};
  const consent = payload.consent && typeof payload.consent === "object"
    ? payload.consent as CRMJson
    : {};

  if (name.length < 2 || !isEmail(email) || phone.replace(/\D/g, "").length < 9 || !isAllowedBookingSlot(date, time)) {
    return respond(req, { success: false, error: "INVALID_BOOKING_FIELDS" }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) return respond(req, { success: false, error: "SERVER_NOT_CONFIGURED" }, 500);
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const sourceDetail = text(payload.source_detail, 300) || "website:/rezerwacja";
  const notes = [company ? `Firma: ${company}` : "", message].filter(Boolean).join(". ") || null;
  const { data: bookingId, error: bookingError } = await supabase.rpc("create_website_booking", {
    p_submission_id: submissionId,
    p_client_name: name,
    p_client_email: email,
    p_client_phone: phone,
    p_booking_date: date,
    p_booking_time: time,
    p_service_type: serviceType,
    p_notes: notes,
    p_source: sourceDetail,
    p_utm_source: text(attribution.utm_source, 240) || null,
    p_utm_medium: text(attribution.utm_medium, 240) || null,
    p_utm_campaign: text(attribution.utm_campaign, 240) || null,
    p_utm_content: text(attribution.utm_content, 240) || null,
    p_gclid: text(attribution.gclid, 300) || null,
    p_fbclid: text(attribution.fbclid, 300) || null,
    p_landing_page: text(attribution.landing_page ?? attribution.page_url, 1000) || null,
    p_metadata: { company },
  });

  if (bookingError) {
    const slotTaken = bookingError.message?.includes("SLOT_TAKEN");
    console.error("[book-consultation] booking insert failed", { submission_id: submissionId, slot_taken: slotTaken });
    return respond(req, {
      success: false,
      error: slotTaken ? "SLOT_TAKEN" : "BOOKING_SAVE_FAILED",
    }, slotTaken ? 409 : 500);
  }

  const crmResult = await queueCRMDelivery({
    version: "2026-09-01",
    event_type: "booking.created",
    submission_id: submissionId,
    occurred_at: new Date().toISOString(),
    source: {
      provider: "website_lovable",
      channel: "website",
      detail: sourceDetail,
      external_event_id: submissionId,
    },
    contact: { name, email, phone, company: company || null },
    attribution,
    consent: {
      marketing: consent.marketing === true,
      source: text(consent.source, 240) || null,
      at: text(consent.at, 80) || null,
    },
    booking: { date, time, service_type: serviceType },
    message: message || null,
    metadata: { website_booking_id: bookingId },
  });

  if (!crmResult.accepted) {
    return respond(req, {
      success: false,
      error: "CRM_EVENT_NOT_PERSISTED",
      booking_id: bookingId,
      submission_id: submissionId,
    }, 503);
  }

  const metaResult = await sendMetaConversion(req, {
    consentGranted: consent.marketing === true,
    eventName: "Schedule",
    eventId: submissionId,
    eventSourceUrl: text(attribution.page_url ?? attribution.landing_page, 1500) || null,
    email,
    phone,
    name,
    fbp: text(attribution.fbp, 300) || null,
    fbc: text(attribution.fbc, 500) || null,
    customData: { content_name: "bezplatna_konsultacja", status: "registered" },
  });

  const { data: bookingState, error: bookingStateError } = await supabase
    .from("bookings")
    .select("agency_notification_sent_at, client_confirmation_sent_at")
    .eq("id", bookingId)
    .single();
  if (bookingStateError) {
    console.error("[book-consultation] notification state query failed", { booking_id: bookingId });
  }

  const safeName = escapeHtml(name);
  const safeSubjectName = name.replace(/[\r\n]+/g, " ").slice(0, 160);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeCompany = escapeHtml(company);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const safeDate = escapeHtml(date);
  const safeTime = escapeHtml(time);
  const notificationUpdates: CRMJson = {};

  let agencyNotificationSent = Boolean(bookingState?.agency_notification_sent_at);
  if (!agencyNotificationSent) {
    const inbox = (Deno.env.get("CONTACT_INBOX") || "adam@fotz.pl").trim();
    agencyNotificationSent = await sendEmail(
      inbox,
      `Nowa rezerwacja: ${safeSubjectName} — ${date} ${time}`,
      `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto"><h1>Nowa konsultacja FOTZ</h1><p><strong>${safeDate}, ${safeTime}</strong></p><p>Klient: ${safeName}<br>Email: ${safeEmail}<br>Telefon: ${safePhone}${safeCompany ? `<br>Firma: ${safeCompany}` : ""}</p>${safeMessage ? `<p>${safeMessage}</p>` : ""}<p><a href="https://fotz-connect-hub.lovable.app/crm">Otwórz CRM</a></p></div>`,
    );
    if (agencyNotificationSent) notificationUpdates.agency_notification_sent_at = new Date().toISOString();
  }

  let clientConfirmationSent = Boolean(bookingState?.client_confirmation_sent_at);
  if (!clientConfirmationSent) {
    clientConfirmationSent = await sendEmail(
      email,
      `Potwierdzenie konsultacji FOTZ — ${date} ${time}`,
      `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto"><h1>Termin zapisany</h1><p>Cześć ${safeName},</p><p>Twoja bezpłatna konsultacja z FOTZ Studio została zapisana na <strong>${safeDate} o ${safeTime}</strong>.</p><p>Jeśli termin wymaga zmiany, odpowiedz na tę wiadomość lub napisz na adam@fotz.pl.</p><p>Do zobaczenia,<br>FOTZ Studio</p></div>`,
    );
    if (clientConfirmationSent) notificationUpdates.client_confirmation_sent_at = new Date().toISOString();
  }

  if (Object.keys(notificationUpdates).length) {
    const { error: notificationUpdateError } = await supabase
      .from("bookings")
      .update(notificationUpdates)
      .eq("id", bookingId);
    if (notificationUpdateError) {
      console.error("[book-consultation] notification state update failed", { booking_id: bookingId });
    }
  }

  return respond(req, {
    success: true,
    booking_id: bookingId,
    submission_id: submissionId,
    crm_queued: crmResult.queued,
    crm_delivered: crmResult.delivered,
    agency_notification_sent: agencyNotificationSent,
    client_confirmation_sent: clientConfirmationSent,
    meta_capi_sent: metaResult.sent,
  }, 201);
});
