import { hasAnalyticsConsent } from './analytics.mjs';
import { initializeAnalytics } from './google-analytics';
import { createConversionTracker } from './conversion-events.mjs';
declare global {
  interface Window { AhrefsAnalytics?: { sendEvent: (name: string) => void }; }
}
export const trackConversion = createConversionTracker({
  consent: () => { try { return hasAnalyticsConsent(window.localStorage); } catch { return false; } },
  ahrefs: (name: string) => window.AhrefsAnalytics?.sendEvent(name),
  ga: (name: string, params: { service: string }) => { if (initializeAnalytics()) window.gtag?.('event', name, params); },
});
