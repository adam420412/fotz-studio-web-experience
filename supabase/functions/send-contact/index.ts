import { deliverContactNotification } from "../_shared/contact-notifications.ts";
import { queueCRMDelivery } from '../_shared/fotz-crm.ts';
import { checkPublicRateLimit, isAllowedOrigin, publicCorsHeaders } from '../_shared/public-intake.ts';
import { sendMetaConversion } from '../_shared/meta-capi.ts';

const isEmail = (v: unknown) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function handleContactRequest(req: Request) {
  if (req.method === 'OPTIONS') {
    if (!isAllowedOrigin(req)) return new Response(null, { status: 403 });
    return new Response('ok', { headers: publicCorsHeaders(req) });
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405,
      headers: { ...publicCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }
  if (!isAllowedOrigin(req)) {
    return new Response(JSON.stringify({ success: false, message: 'Origin not allowed' }), {
      status: 403,
      headers: { ...publicCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }

  const rateLimit = await checkPublicRateLimit(req, 'send-contact', 6, 600);
  if (!rateLimit.configured || !rateLimit.allowed) {
    return new Response(JSON.stringify({
      success: false,
      message: rateLimit.configured
        ? 'Zbyt wiele prób. Spróbuj ponownie za kilka minut.'
        : 'Formularz jest chwilowo niedostępny.',
    }), {
      status: rateLimit.configured ? 429 : 503,
      headers: { ...publicCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }

  let payload: Record<string, unknown>;
  try {
    const rawBody = await req.text();
    if (rawBody.length > 64_000) {
      return new Response(JSON.stringify({ success: false, message: 'Zbyt duże zgłoszenie' }), {
        status: 413,
        headers: { ...publicCorsHeaders(req), 'Content-Type': 'application/json' },
      });
    }
    payload = JSON.parse(rawBody);
  } catch {
    return new Response(JSON.stringify({ success: false, message: 'Nieprawidłowy JSON' }), {
      status: 400,
      headers: { ...publicCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return new Response(JSON.stringify({ success: false, message: 'Brak danych formularza' }), {
      status: 400,
      headers: { ...publicCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }
  const phoneDigits = typeof payload.phone === 'string' ? payload.phone.replace(/\D/g, '') : '';
  if (!isEmail(payload.email) && phoneDigits.length < 7) {
    return new Response(JSON.stringify({ success: false, message: 'Podaj prawidłowy e-mail lub telefon.' }), {
      status: 400,
      headers: { ...publicCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }

  if (payload.offer_id === 'www_from_999') {
    const valid = typeof payload.name === 'string' && payload.name.trim().length >= 2
      && typeof payload.message === 'string' && payload.message.trim().length >= 5
      && isEmail(payload.email) && phoneDigits.length >= 9 && phoneDigits.length <= 15
      && payload.contact_request === true;
    if (!valid) return new Response(JSON.stringify({ success: false, message: 'Uzupełnij dane kontaktowe i opis firmy.' }), {
      status: 400, headers: { ...publicCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }

  // Persist first. A temporary Connect Hub outage no longer loses the lead:
  // the event stays in crm_delivery_outbox and crm-retry can deliver it later.
  const crmResult = await queueCRMDelivery({ ...payload, _notification_requested: true });
  if (!crmResult.accepted) {
    console.error('[send-contact] CRM event could not be persisted', {
      submission_id: crmResult.submissionId,
      error: crmResult.error,
    });
    return new Response(JSON.stringify({
      success: false,
      message: 'Nie udało się bezpiecznie zapisać zgłoszenia. Spróbuj ponownie.',
    }), {
      status: 503,
      headers: { ...publicCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }

  const consent = payload.consent && typeof payload.consent === 'object' && !Array.isArray(payload.consent)
    ? payload.consent as Record<string, unknown>
    : {};
  const attribution = payload.attribution && typeof payload.attribution === 'object' && !Array.isArray(payload.attribution)
    ? payload.attribution as Record<string, unknown>
    : {};
  const metaResult = await sendMetaConversion(req, {
    consentGranted: consent.analytics === true,
    eventName: 'Lead',
    eventId: crmResult.submissionId,
    eventSourceUrl: typeof payload.page_url === 'string' ? payload.page_url : null,
    email: typeof payload.email === 'string' ? payload.email : null,
    phone: typeof payload.phone === 'string' ? payload.phone : null,
    name: typeof payload.crm_name === 'string'
      ? payload.crm_name
      : (typeof payload.name === 'string' ? payload.name : null),
    fbp: typeof attribution.fbp === 'string' ? attribution.fbp : null,
    fbc: typeof attribution.fbc === 'string' ? attribution.fbc : null,
    customData: {
      lead_event_source: 'fotz_website',
      form_name: typeof payload.form_name === 'string' ? payload.form_name.slice(0, 240) : undefined,
    },
  }).catch(() => ({ configured: true, sent: false, error: 'META_UNAVAILABLE' }));

  const acceptedResponse = (notification: string, id?: string) => new Response(JSON.stringify({
    success: true,
    message: 'Zgłoszenie zostało zapisane.',
    submission_id: crmResult.submissionId,
    crm_queued: crmResult.queued,
    crm_delivered: crmResult.delivered,
    notification_status: notification,
    meta_capi_sent: metaResult.sent,
    id,
  }), { status: 200, headers: { ...publicCorsHeaders(req), 'Content-Type': 'application/json' } });

  const notice = await deliverContactNotification(crmResult.submissionId, payload);
  return acceptedResponse(notice.status, notice.id);
}

if (typeof Deno !== "undefined") Deno.serve(handleContactRequest);
