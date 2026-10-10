export const measurementId = 'G-2CKB11HFK1';
export const consentEvent = 'fotz:consent-change';
export const consentVersion = '2';
export function hasAnalyticsConsent(storage) {
  try { return storage.getItem('cookie-consent') === 'accepted' && storage.getItem('cookie-consent-version') === consentVersion; } catch { return false; }
}
export function cleanAnalyticsUrl(value) {
  try { const url = new URL(value); return /^https?:$/.test(url.protocol) ? url.origin + url.pathname : ''; } catch { return ''; }
}
/** Explicit event scope prevents gtag from retaining the first SPA page's URL. */
export function createPageEventSender({ send, initialContext }) {
  const clean = context => ({
    page_location: cleanAnalyticsUrl(context.page_location),
    page_referrer: cleanAnalyticsUrl(context.page_referrer),
    page_title: context.page_title,
  });
  let page = clean(initialContext);
  return (name, params) => {
    if (name === 'page_view') page = clean(params);
    send(name, { ...params, ...page });
  };
}
/** The enhanced-measurement stream is disabled: this is the only page-view source. */
export function createPageReporter({ ready, send, referrer = '' }) {
  let previous = cleanAnalyticsUrl(referrer);
  let last = '';
  return (url, title) => {
    const location = cleanAnalyticsUrl(url);
    if (!ready() || !location || last === location) return;
    send('page_view', { page_location: location, page_referrer: previous, page_title: title });
    previous = location;
    last = location;
  };
}
