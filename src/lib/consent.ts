export const MARKETING_CONSENT_KEY = "cookie-consent";
export const MARKETING_CONSENT_EVENT = "fotz:marketing-consent-changed";

export type MarketingConsent = "accepted" | "rejected";
let inMemoryConsent: MarketingConsent | null = null;

export function getMarketingConsent(): MarketingConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(MARKETING_CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : inMemoryConsent;
  } catch {
    return inMemoryConsent;
  }
}

export function hasMarketingConsent(): boolean {
  return getMarketingConsent() === "accepted";
}

export function setMarketingConsent(consent: MarketingConsent): void {
  if (typeof window === "undefined") return;
  inMemoryConsent = consent;
  try {
    localStorage.setItem(MARKETING_CONSENT_KEY, consent);
  } catch {
    // The in-memory event still lets this page apply the user's choice.
  }
  window.dispatchEvent(new CustomEvent(MARKETING_CONSENT_EVENT, { detail: consent }));
}
