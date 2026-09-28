export function attributionFrom(url) {
  const parsed = new URL(url);
  return Object.fromEntries(['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    .map(key => [key, (parsed.searchParams.get(key) || '').slice(0, 240)]));
}

export function buildPayload(fields, context) {
  const touch = attributionFrom(context.url);
  const service = context.service === 'video' ? 'video' : 'www';
  const page = new URL(context.url);
  const pageUrl = page.origin + page.pathname;
  return {
    ...fields,
    subject: service === 'video' ? 'FOTZ — zapytanie o wideo' : 'FOTZ — zapytanie o stronę WWW',
    name: fields.name.trim(), company: fields.company.trim(), email: fields.email.trim(),
    message: fields.message.trim(),
    service, service_type: service === 'video' ? 'Produkcja wideo' : 'Strony internetowe',
    project_type: fields.need, timeline: fields.timing,
    contact_request: true, marketing_opt_in: false,
    submission_id: context.submissionId, event_type: 'lead.captured',
    source_provider: 'website_lovable', source_detail: `campaign_${service}_20260928`,
    source_channel: /^(facebook|fb|instagram|ig|meta)$/i.test(touch.utm_source) && /^(paid|paid_social|cpc|ppc)$/i.test(touch.utm_medium) ? 'meta_ads' : 'website',
    form_name: `campaign_${service}`, crm_name: fields.name.trim(),
    page_url: pageUrl, current_page: page.pathname,
    ...touch,
    attribution: { ...touch, landing_page: pageUrl, page_url: pageUrl,
      ...(context.consent ? { fbp: context.fbp || null, fbc: context.fbc || null } : {}) },
    consent: { marketing: false, analytics: context.consent === true,
      source: 'website:contact-request', at: context.consent ? context.now : null },
  };
}

export async function submitLead(config, payload, fetcher = fetch) {
  let response;
  try { response = await fetcher(config.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apikey: config.publicKey, Authorization: `Bearer ${config.publicKey}` },
    body: JSON.stringify(payload), signal: AbortSignal.timeout(35000),
  }); } catch (error) {
    if (error?.name === 'TimeoutError' || error?.name === 'AbortError') throw error;
    throw new Error('Nie udało się połączyć. Sprawdź internet i spróbuj ponownie — zachowaliśmy identyfikator zgłoszenia.');
  }
  let data;
  try { data = await response.json(); } catch { throw new Error('Nie otrzymaliśmy potwierdzenia zapisu. Spróbuj ponownie — ponowienie nie tworzy drugiego zgłoszenia.'); }
  if (!response.ok || data?.success !== true || !data.submission_id) {
    throw new Error(response.status === 429
      ? 'Zbyt wiele prób. Spróbuj ponownie za kilka minut lub zadzwoń.'
      : 'Nie otrzymaliśmy potwierdzenia zapisu. Spróbuj ponownie lub zadzwoń: +48 790 814 814.');
  }
  return data;
}

export async function submissionIdentity(fields, service, storage, cryptoApi = crypto) {
  const bytes = new TextEncoder().encode(JSON.stringify({ service, ...fields }));
  const hash = Array.from(new Uint8Array(await cryptoApi.subtle.digest('SHA-256', bytes)), b => b.toString(16).padStart(2, '0')).join('');
  const key = `fotz:campaign-submission:${service}`;
  let previous;
  try { previous = JSON.parse(storage.getItem(key) || 'null'); } catch { /* Storage can be unavailable. */ }
  if (previous?.hash === hash && Date.now() - previous.at < 86400000) return previous.id;
  const id = cryptoApi.randomUUID();
  try { storage.setItem(key, JSON.stringify({ hash, id, at: Date.now() })); } catch { /* In-memory fallback is held by the caller. */ }
  return id;
}
