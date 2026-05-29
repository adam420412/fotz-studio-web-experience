import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

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
    if (seen.has(k) || !(k in payload)) return;
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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const apiKey = Deno.env.get('RESEND_API_KEY');
  if (!apiKey) {
    console.error('[send-contact] RESEND_API_KEY missing');
    return new Response(JSON.stringify({ success: false, message: 'Brak konfiguracji serwera e-mail.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ success: false, message: 'Nieprawidłowy JSON' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
  if (!payload || typeof payload !== 'object') {
    return new Response(JSON.stringify({ success: false, message: 'Brak danych formularza' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const inbox = (Deno.env.get('CONTACT_INBOX') || DEFAULT_INBOX).trim();
  const fromAddress = (Deno.env.get('CONTACT_FROM') || DEFAULT_FROM).trim();
  const subject =
    (typeof payload.subject === 'string' && payload.subject.trim()) ||
    (typeof payload.from_name === 'string' && `Formularz · ${payload.from_name}`) ||
    'Nowe zgłoszenie z fotz.pl';
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
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    if (!res.ok) {
      console.error('[send-contact] Resend error', res.status, text);
      return new Response(
        JSON.stringify({ success: false, message: 'Nie udało się wysłać wiadomości. Spróbuj ponownie.' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    let parsed: { id?: string } = {};
    try { parsed = JSON.parse(text); } catch { /* ignore */ }
    return new Response(JSON.stringify({ success: true, id: parsed.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[send-contact] send failed', err);
    return new Response(
      JSON.stringify({ success: false, message: 'Nie udało się wysłać wiadomości. Spróbuj ponownie.' }),
      { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});