import { supabase } from '@/integrations/supabase/client';
import { createBookingSubmitter } from './booking-delivery.mjs';
import { hasAnalyticsConsent } from './analytics.mjs';
import { getUTMs } from './utm';

let submit: ReturnType<typeof createBookingSubmitter>;
export async function submitConsultation(payload: Record<string, unknown>) {
  if (!submit) {
    let storage: Storage | undefined;
    try { storage = window.sessionStorage; } catch { /* Optional storage. */ }
    submit = createBookingSubmitter({
      storage, crypto: window.crypto,
      context: () => {
        let analytics = false;
        try { analytics = hasAnalyticsConsent(window.localStorage); } catch { /* No consent. */ }
        return { path: window.location.pathname, url: window.location.origin + window.location.pathname, analytics, attribution: getUTMs() };
      },
      invoke: async body => {
        const result = await supabase.functions.invoke('book-consultation', { body, signal: AbortSignal.timeout(35000) });
        if (result.error?.context instanceof Response) {
          try { return { ...result, data: await result.error.context.clone().json() }; } catch { /* Keep transport error. */ }
        }
        return result;
      },
    });
  }
  return submit(payload);
}
