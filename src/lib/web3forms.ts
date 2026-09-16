/**
 * Wspólny helper do wysyłki formularzy na stronie.
 * Wszystkie formularze idą przez Supabase Edge Function `send-contact`
 * (Lovable Cloud), która używa Resend. RESEND_API_KEY przechowywany jest
 * jako sekret w Lovable Cloud.
 *
 * Nazwy `submitWeb3Form` / `Web3FormsPayload` zachowane dla wstecznej
 * kompatybilności — pod spodem to wywołanie `supabase.functions.invoke`.
 */
import { supabase } from "@/integrations/supabase/client";
import { getAttributionContext } from "@/lib/utm";
import { conversionEventForForm, trackGrowthEvent } from "@/lib/growthTracking";
import { hasMarketingConsent } from "@/lib/consent";
import { submissionIdentity } from "@/lib/submissionIdentity";

export interface Web3FormsPayload {
  subject?: string;
  from_name?: string;
  [key: string]: unknown;
}

export interface Web3FormsResponse {
  success: boolean;
  message?: string;
  id?: string;
  crm_queued?: boolean;
  crm_delivered?: boolean;
  submission_id?: string;
  [key: string]: unknown;
}

const crmNameFor = (payload: Web3FormsPayload): string | undefined => {
  if (typeof payload.name === "string" && payload.name.trim()) return payload.name.trim();
  if (typeof payload.from_name === "string" && payload.from_name.trim() && !payload.from_name.toLowerCase().startsWith("fotz studio")) {
    return payload.from_name.trim();
  }
  if (typeof payload.email === "string" && payload.email.includes("@")) return payload.email.split("@")[0];
  return undefined;
};

/**
 * Wysyła payload do naszego endpointu kontaktowego i zwraca sparsowaną
 * odpowiedź. Rzuca błędem, jeżeli odpowiedź nie zawiera `success: true`.
 *
 * Nazwę `submitWeb3Form` zachowujemy dla zgodności wstecznej — pod spodem
 * uderza do `/api/send-contact` (Resend), nie do Web3Forms.
 */
export async function submitWeb3Form(
  payload: Web3FormsPayload
): Promise<Web3FormsResponse> {
  const attribution = getAttributionContext();
  const activeTouch = { ...attribution.first_touch, ...attribution.last_touch };
  const pagePath = typeof window !== "undefined" ? window.location.pathname : "/";
  const identity = await submissionIdentity(payload, pagePath);
  const submissionId = identity.id;
  const formId = typeof payload.form_id === "string" && /^[a-z0-9_-]{1,80}$/.test(payload.form_id) ? payload.form_id : `website:${pagePath}`;
  const sourceDetail = typeof payload.source === "string" && payload.source.trim()
    ? payload.source.trim()
    : `website:${pagePath}`;
  const enrichedPayload: Web3FormsPayload = {
    ...payload,
    submission_id: submissionId,
    event_type: "lead.captured",
    source_channel: /^(facebook|fb|instagram|ig|meta)$/i.test(activeTouch.utm_source || "") && /^(paid|paid_social|cpc|ppc)$/i.test(activeTouch.utm_medium || "") ? "meta_ads" : "website",
    source_provider: "website_lovable",
    source_detail: sourceDetail,
    crm_name: crmNameFor(payload),
    form_name: formId,
    page_url: attribution.current_page,
    referrer: activeTouch.referrer,
    utm_source: activeTouch.utm_source,
    utm_medium: activeTouch.utm_medium,
    utm_campaign: activeTouch.utm_campaign,
    utm_content: activeTouch.utm_content,
    utm_term: activeTouch.utm_term,
    gclid: activeTouch.gclid,
    fbclid: activeTouch.fbclid,
    msclkid: activeTouch.msclkid,
    attribution: {
      ...activeTouch,
      landing_page: attribution.first_touch.landing_page || attribution.last_touch.landing_page,
      page_url: attribution.current_page,
      first_touch: attribution.first_touch,
      last_touch: attribution.last_touch,
    },
    consent: {
      marketing: payload.marketing_opt_in === true,
      analytics: hasMarketingConsent(),
      source: payload.marketing_opt_in === true ? "website:explicit-opt-in" : "website:contact-request",
      at: hasMarketingConsent() ? new Date().toISOString() : null,
    },
  };
  const { data, error } = await supabase.functions.invoke<Web3FormsResponse>(
    "send-contact",
    { body: enrichedPayload, signal: AbortSignal.timeout(35_000) }
  );

  if (error) {
    console.error("[contact] transport failed");
    throw new Error(error.message || "Błąd podczas wysyłania wiadomości");
  }
  if (!data?.success) {
    console.error("[contact] server did not accept submission");
    throw new Error(data?.message || "Błąd podczas wysyłania wiadomości");
  }
  trackGrowthEvent(conversionEventForForm(payload), {
    submission_id: submissionId,
    form_name: formId,
    source_detail: sourceDetail,
  });
  identity.clear();
  return data;
}

// Alias z czytelniejszą nazwą — dla nowego kodu preferuj ten export.
export const submitContactForm = submitWeb3Form;
export type ContactFormPayload = Web3FormsPayload;
export type ContactFormResponse = Web3FormsResponse;
