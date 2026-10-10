import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { serviceForPath, readEnquiryContext } from '@/lib/enquiry.mjs';
import { trackConversion } from '@/lib/conversions';
import { consentEvent, createPageReporter } from '@/lib/analytics.mjs';
import { analyticsAllowed, initializeAnalytics, sendAnalyticsEvent } from '@/lib/google-analytics';

let reportPage: ReturnType<typeof createPageReporter>;
export function ConversionTracking() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    const selected = readEnquiryContext(search).service;
    const service = selected === 'other' ? serviceForPath(pathname) : selected;
    let offered = false;
    const measure = () => {
      if (!analyticsAllowed()) return;
      reportPage ||= createPageReporter({ ready: initializeAnalytics, send: sendAnalyticsEvent, referrer: document.referrer });
      // Helmet commits page titles after render. Route cleanup cancels obsolete views.
      reportPage(window.location.href, document.title);
      if (!offered && service !== 'other') { trackConversion('offer_view', service); offered = true; }
    };
    const timer = window.setTimeout(measure, 0);
    const click = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest('a') : null;
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      if (url.protocol === 'tel:') trackConversion('phone_click', service);
      else if (url.protocol === 'mailto:') trackConversion('email_click', service);
      else if (url.origin === window.location.origin && (['/kontakt', '/konsultacja'].includes(url.pathname) || (url.pathname === pathname && ['#zapytanie', '#formularz'].includes(url.hash)))) {
        const target = readEnquiryContext(url.search).service;
        trackConversion('contact_click', target === 'other' ? service : target);
      }
    };
    document.addEventListener('click', click);
    window.addEventListener(consentEvent, measure);
    return () => { window.clearTimeout(timer); document.removeEventListener('click', click); window.removeEventListener(consentEvent, measure); };
  }, [pathname, search]);
  return null;
}
