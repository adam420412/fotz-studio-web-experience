import { queueCRMDelivery } from '../_shared/fotz-crm.ts';
import { checkPublicRateLimit, isAllowedOrigin, publicCorsHeaders } from '../_shared/public-intake.ts';
import { sendMetaConversion } from '../_shared/meta-capi.ts';

const DEFAULT_INBOX = 'a.mazziarz@gmail.com';
const DEFAULT_FROM = 'Fotz Studio <onboarding@resend.dev>';

const FIELD_LABELS: Record<string, string> = {
  name: 'Imię i nazwisko',
  from_name: 'Od',
  email: 'E-mail',
  phone: 'Telefon',
  company: 'Firma',
  topic: 'Temat',
  subject: 'Temat',
  message: 'Wiadomość',
  source: 'Źródło',
};

const TECHNICAL_FIELDS = new Set([
  'submission_id',
  'event_type',
  'source_channel',
  'source_provider',
  'source_detail',
  'crm_name',
  'form_name',
  'page_url',
  'referrer',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
  'msclkid',
  'attribution',
]);

const escapeHtml = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const labelFor = (k: string) =>
  FIELD_LABELS[k] ?? k.replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const formatValue = (v: unknown): string => {
  if (v == null) return '<em style="color:#888">(brak)</em>';
  if (typeof v === 'string') return escapeHtml(v).replace(/\n/g, '<br>');
  if (typeof v === 'number' || typeof v === 'boolean') return escapeHtml(String(v));
  try {
    return `<pre style="background:#f5f5f5;padding:10px;border-radius:4px;font-size:12px;overflow:auto">${escapeHtml(JSON.stringify(v, null, 2))}</pre>`;
  } catch {
    return escapeHtml(String(v));
  }
};

const buildHtml = (payload: Record<string, unknown>) => {
  const priority = ['from_name', 'name', 'email', 'phone', 'company', 'topic', 'subject', 'message'];
  const seen = new Set<string>();
  const rows: string[] = [];
  const push = (k: string) => {
    if (seen.has(k) || !(k in payload) || TECHNICAL_FIELDS.has(k)) return;
    seen.add(k);
    rows.push(
      `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;font-weight:500;width:180px;vertical-align:top">${escapeHtml(labelFor(k))}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111">${formatValue(payload[k])}</td></tr>`
    );
  };
  for (const k of priority) push(k);
  for (const k of Object.keys(payload)) push(k);
  return `<div style="font-family:-apple-system,sans-serif;max-width:640px;margin:0 auto;color:#111"><h2 style="font-weight:600;margin-bottom:4px">Nowe zgłoszenie z fotz.pl</h2><p style="color:#888;margin-top:0;font-size:13px">${escapeHtml((payload.subject as string) || 'Formularz kontaktowy')}</p><table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:14px">${rows.join('')}</table><p style="color:#aaa;font-size:11px;margin-top:24px">Wysłane automatycznie przez formularz na fotz.pl</p></div>`;
};

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
  const crmResult = await queueCRMDelivery(payload);
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

  const apiKey = Deno.env.get('RESEND_API_KEY');
  if (!apiKey) {
    console.error('[send-contact] RESEND_API_KEY missing');
    return acceptedResponse('not_configured');
  }

  const inbox = (Deno.env.get('CONTACT_INBOX') || DEFAULT_INBOX).trim();
  const fromAddress = (Deno.env.get('CONTACT_FROM') || DEFAULT_FROM).trim();
  const subject = (
    (typeof payload.subject === 'string' && payload.subject.trim()) ||
    (typeof payload.from_name === 'string' && `Formularz · ${payload.from_name}`) ||
    'Nowe zgłoszenie z fotz.pl'
  ).replace(/[\r\n]+/g, ' ').slice(0, 180);
  const replyTo = isEmail(payload.email) ? (payload.email as string) : undefined;

  const body: Record<string, unknown> = {
    from: fromAddress,
    to: [inbox],
    subject,
    html: buildHtml(payload),
  };
  if (replyTo) body.reply_to = replyTo;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}`, 'Idempotency-Key': `contact/${crmResult.submissionId}` },
      signal: AbortSignal.timeout(6000),
      body: JSON.stringify(body),
    });
    const text = await res.text();
    if (!res.ok) {
      console.error('[send-contact] notification failed', { status: res.status, submission_id: crmResult.submissionId });
      return acceptedResponse('failed');
    }
    let parsed: { id?: string } = {};
    try { parsed = JSON.parse(text); } catch { /* ignore */ }
    return parsed.id ? acceptedResponse('sent', parsed.id) : acceptedResponse('failed');
  } catch {
    console.error('[send-contact] notification unavailable', { submission_id: crmResult.submissionId });
    return acceptedResponse('failed');
  }
}

if (typeof Deno !== "undefined") Deno.serve(handleContactRequest);
