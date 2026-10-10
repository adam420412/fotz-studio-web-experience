import { hasAnalyticsConsent } from './analytics.mjs';
import { sendAnalyticsEvent } from './google-analytics';
import { createConversionTracker } from './conversion-events.mjs';
declare global {
  interface Window { AhrefsAnalytics?: { sendEvent: (name: string) => void }; }
}
export const trackConversion = createConversionTracker({
  consent: () => { try { return hasAnalyticsConsent(window.localStorage); } catch { return false; } },
  ahrefs: (name: string) => window.AhrefsAnalytics?.sendEvent(name),
  ga: sendAnalyticsEvent,
});
