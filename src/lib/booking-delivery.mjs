/** A retry reuses its identity; browser storage contains no form values. */
export function createBookingSubmitter({ invoke, storage, crypto, context, now = Date.now }) {
  const pending = new Map();
  const memory = new Map();
  return async payload => {
    const stable = JSON.stringify(Object.entries(payload).sort(([a], [b]) => a.localeCompare(b)));
    const hash = [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(stable)))].map(b => b.toString(16).padStart(2, '0')).join('');
    if (pending.has(hash)) return pending.get(hash);
    const key = `fotz-booking:${hash}`;
    let identity = memory.get(hash);
    try { identity ||= JSON.parse(storage?.getItem(key) || 'null'); } catch { /* Optional storage. */ }
    if (!identity || now() - identity.created > 30 * 60 * 1000) identity = { id: crypto.randomUUID(), created: now() };
    const save = () => {
      memory.set(hash, identity);
      try { storage?.setItem(key, JSON.stringify(identity)); } catch { /* Memory still deduplicates. */ }
    };
    save();
    if (identity.receipt) return identity.receipt;
    const request = (async () => {
      const ctx = context();
      const { data, error } = await invoke({
        ...payload,
        submission_id: identity.id,
        source_detail: `website:${ctx.path}`,
        attribution: { ...ctx.attribution, page_url: ctx.url },
        consent: { analytics: ctx.analytics === true, marketing: false, source: 'website:consultation-request' },
      });
      if (data?.error === 'SLOT_TAKEN') throw Object.assign(new Error('Ten termin został już zajęty. Wybierz inny termin.'), { code: 'SLOT_TAKEN' });
      if (error || data?.success !== true || data.submission_id !== identity.id || (typeof data.booking_id !== 'string' || !data.booking_id) || data.crm_queued !== true) {
        throw new Error('Nie udało się potwierdzić zapisu. Ponów próbę z tymi samymi danymi lub zadzwoń: +48 790 814 814.');
      }
      const receipt = {
        success: true,
        submission_id: identity.id,
        booking_id: data.booking_id,
        crm_queued: true,
        crm_delivered: data.crm_delivered === true,
        agency_notification_sent: data.agency_notification_sent === true,
        client_confirmation_sent: data.client_confirmation_sent === true,
      };
      identity.receipt = receipt;
      save();
      return receipt;
    })();
    pending.set(hash, request);
    try { return await request; } finally { pending.delete(hash); }
  };
}
