import { cleanAnalyticsUrl, hasAnalyticsConsent, measurementId } from './analytics.mjs';

declare global { interface Window { dataLayer?: unknown[]; } }
let initialized = false;
export function analyticsAllowed() {
  try { return hasAnalyticsConsent(window.localStorage); } catch { return false; }
}
export function initializeAnalytics() {
  if (typeof window === 'undefined' || !['www.fotz-studio.pl', 'fotz-studio.pl'].includes(window.location.hostname)) return false;
  if (!analyticsAllowed()) return false;
  if (initialized) return true;
  window.dataLayer ||= [];
  // gtag.js consumes the standard arguments queue format.
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function () { window.dataLayer!.push(arguments); };
  window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
    page_location: cleanAnalyticsUrl(window.location.href), page_referrer: cleanAnalyticsUrl(document.referrer),
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.fotzAnalytics = 'true';
  document.head.appendChild(script);
  initialized = true;
  return true;
}
export function revokeAnalytics() {
  if (!initialized) return;
  // Disable collection immediately; reload removes the already-loaded optional script.
  Object.assign(window, { [`ga-disable-${measurementId}`]: true });
  for (const item of document.cookie.split(';')) {
    const name = item.split('=')[0].trim();
    if (!/^_ga(?:_|$)/.test(name)) continue;
    for (const domain of ['', window.location.hostname, '.fotz-studio.pl']) {
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''} SameSite=Lax`;
    }
  }
  window.location.reload();
}
