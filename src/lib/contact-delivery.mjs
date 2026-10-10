/** Delivery identity survives retries without storing the submitted personal data. */
export function createContactSubmitter({ invoke, storage, crypto, context, track, legacyCRM, now = Date.now }) {
  const pending = new Map();
  const memory = new Map();
  return async payload => {
    const ctx = context();
    const stable = JSON.stringify([ctx.path, Object.entries(payload).sort(([a],[b]) => a.localeCompare(b))]);
    const hash = [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(stable)))].map(b => b.toString(16).padStart(2, '0')).join('');
    if (pending.has(hash)) return pending.get(hash);
    const key = `fotz-contact:${hash}`;
    const read = () => { try { return JSON.parse(storage?.getItem(key) || 'null'); } catch { return null; } };
    let identity = memory.get(hash) || read();
    if (!identity || now() - identity.created > 30 * 60 * 1000) identity = { id: crypto.randomUUID(), created: now() };
    const save = () => { memory.set(hash, identity); try { storage?.setItem(key, JSON.stringify(identity)); } catch { /* storage may be unavailable */ } };
    save();
    if (identity.receipt) return identity.receipt;
    const request = (async () => {
      const body = { ...payload, ...ctx.attribution, submission_id: identity.id, event_type: 'lead.captured', source_provider: 'website_lovable', source_channel: 'website', source_detail: `website:${ctx.path}`, form_name: payload.form_id || `website:${ctx.path}`, page_url: ctx.url, crm_name: payload.name || payload.from_name, consent: { analytics: ctx.analytics === true, marketing: payload.marketing_opt_in === true, source: 'website:contact-request' } };
      const {data, error} = await invoke(body);
      if (error || data?.success !== true) throw new Error('Nie udało się potwierdzić zapisu. Spróbuj ponownie lub zadzwoń: +48 790 814 814.');
      const modern = typeof data.submission_id === 'string' && data.submission_id.length > 0;
      if (modern && (data.submission_id !== identity.id || data.crm_queued !== true)) throw new Error('Serwer nie potwierdził zapisu zgłoszenia. Spróbuj ponownie.');
      if (!modern && (typeof data.id !== 'string' || !data.id)) throw new Error('Brak potwierdzenia dostarczenia zgłoszenia. Spróbuj ponownie.');
      // A modern endpoint queues CRM delivery itself. Only old mail-only endpoints need the legacy fallback.
      const crm = modern ? {success:true} : await legacyCRM(payload).catch(() => ({success:false}));
      const receipt = { success:true, id: data.id, submission_id: modern ? data.submission_id : identity.id, crm_queued: modern, crm_delivered: modern ? data.crm_delivered === true : crm.success === true, notification_status: data.notification_status || (modern ? 'unknown' : 'sent') };
      identity.receipt = receipt;
      save();
      // Measurement is optional and must not turn an accepted lead into a retry.
      if (ctx.analytics) { try { track(receipt.submission_id, body.form_name, ctx.path, payload.service_tag); } catch { /* receipt remains authoritative */ } }
      return receipt;
    })();
    pending.set(hash, request);
    try { return await request; } finally { pending.delete(hash); }
  };
}
