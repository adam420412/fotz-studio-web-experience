import { validService } from './enquiry.mjs';
const events = new Set(['offer_view', 'contact_click', 'phone_click', 'email_click', 'form_start', 'form_attempt', 'form_error', 'lead_received']);
/** Only fixed event names and service categories leave the form; never field values. */
export function createConversionTracker({ consent, ahrefs, ga }) {
  return (name, service = 'other') => {
    if (!events.has(name) || !consent()) return;
    const category = validService(service);
    try { ahrefs(`${name}_${category}`); } catch { /* Measurement cannot break contact. */ }
    try { ga(name === 'lead_received' ? 'generate_lead' : name, { service: category }); } catch { /* Optional provider. */ }
  };
}
