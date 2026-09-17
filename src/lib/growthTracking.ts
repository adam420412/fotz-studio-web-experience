import { hasMarketingConsent } from "./consent";

type GrowthEventName =
  | "cta_click"
  | "form_view"
  | "form_start"
  | "generate_lead"
  | "lead_magnet_request"
  | "lead_magnet_delivered"
  | "schedule"
  | "click_phone"
  | "click_whatsapp"
  | "click_instagram_dm";

type GrowthEventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const META_EVENT_MAP: Partial<Record<GrowthEventName, string>> = {
  generate_lead: "Lead",
  lead_magnet_request: "Lead",
  schedule: "Schedule",
};

export function trackGrowthEvent(name: GrowthEventName, params: GrowthEventParams = {}) {
  if (typeof window === "undefined") return;

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );
  window.dispatchEvent(new CustomEvent("fotz:growth-event", { detail: { event: name, ...cleanParams } }));

  if (!hasMarketingConsent()) return;

  window.dataLayer?.push({ event: name, ...cleanParams });
  window.gtag?.("event", name, cleanParams);
  const metaEvent = META_EVENT_MAP[name];
  const eventId = cleanParams.event_id || cleanParams.submission_id;
  if (metaEvent) {
    if (eventId) window.fbq?.("track", metaEvent, cleanParams, { eventID: String(eventId) });
    else window.fbq?.("track", metaEvent, cleanParams);
  }
  if (name === "form_view" || name === "form_start") {
    window.fbq?.("trackCustom", name === "form_view" ? "FormView" : "FormStart", cleanParams);
  }
}

export function conversionEventForForm(payload: Record<string, unknown>): GrowthEventName {
  const explicit = typeof payload.conversion_event === "string" ? payload.conversion_event : "";
  if (explicit === "lead_magnet_request") return "lead_magnet_request";
  const context = `${String(payload.subject || "")} ${String(payload.from_name || "")}`.toLowerCase();
  return context.includes("newsletter") || context.includes("checklist")
    ? "lead_magnet_request"
    : "generate_lead";
}
