import {
  getMarketingConsent,
  MARKETING_CONSENT_EVENT,
  type MarketingConsent,
} from "./consent";
import { clearPersistentAttribution, promoteAttributionAfterConsent } from "./utm";

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const env = import.meta.env as Record<string, string | undefined>;
let consentListenerReady = false;
let googleInitialized = false;
let metaInitialized = false;
let lastPage = "";

const valueMatching = (name: string, pattern: RegExp): string | null => {
  const value = env[name]?.trim() || (name === "VITE_META_PIXEL_ID" ? "1292173626418476" : "");
  return value && pattern.test(value) ? value : null;
};

const addScript = (kind: string, src: string, configure?: (script: HTMLScriptElement) => void) => {
  if (document.querySelector(`script[data-fotz-marketing="${kind}"]`)) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  script.dataset.fotzMarketing = kind;
  configure?.(script);
  document.head.appendChild(script);
};

const loadGoogle = () => {
  const gtmId = valueMatching("VITE_GTM_CONTAINER_ID", /^GTM-[A-Z0-9]+$/i);
  const measurementId = valueMatching("VITE_GA_MEASUREMENT_ID", /^G-[A-Z0-9]+$/i);

  window.dataLayer ||= [];
  if (googleInitialized) return;
  googleInitialized = true;

  if (gtmId) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    addScript("google-tag-manager", `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);
    return;
  }

  if (!measurementId) return;
  // gtag consumes an Arguments object, not a normal array (Google queue contract).
  // eslint-disable-next-line prefer-rest-params
  window.gtag ||= function () { window.dataLayer?.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
  addScript("google-analytics", `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`);
};

const loadMeta = () => {
  const pixelId = valueMatching("VITE_META_PIXEL_ID", /^\d+$/);
  if (!pixelId) return;

  if (!window.fbq) {
    const queue: unknown[][] = [];
    type MetaQueue = ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      loaded: boolean;
      push: (...args: unknown[]) => void;
      queue: unknown[][];
      version: string;
    };
    const fbq = ((...args: unknown[]) => {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    }) as MetaQueue;
    Object.assign(fbq, { queue, loaded: true, push: fbq, version: "2.0" });
    window.fbq = fbq;
    window._fbq = fbq;
  }

  window.fbq("consent", "grant");
  if (!metaInitialized) {
    window.fbq("init", pixelId);
    metaInitialized = true;
  }
  addScript("meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");
};

const loadAhrefs = () => {
  const key = valueMatching("VITE_AHREFS_ANALYTICS_KEY", /^[A-Z0-9_-]+$/i);
  if (!key) return;
  addScript("ahrefs", "https://analytics.ahrefs.com/analytics.js", (script) => {
    script.dataset.key = key;
  });
};

export function enableMarketingTracking(): void {
  if (typeof window === "undefined" || getMarketingConsent() !== "accepted") return;
  promoteAttributionAfterConsent();
  loadGoogle();
  loadMeta();
  loadAhrefs();
  window.gtag?.("consent", "update", { ad_storage: "granted", analytics_storage: "granted", ad_user_data: "granted", ad_personalization: "granted" });
  trackMarketingPageView();
}

export function disableMarketingTracking(): void {
  if (typeof window === "undefined") return;
  clearPersistentAttribution();
  lastPage = "";
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.fbq?.("consent", "revoke");
  // Revocation controls already loaded SDKs. Removing their script tag would not unload them.
}

const applyConsent = (consent: MarketingConsent | null) => {
  if (consent === "accepted") enableMarketingTracking();
  if (consent === "rejected") disableMarketingTracking();
};

export function initializeMarketingTracking(): void {
  if (typeof window === "undefined") return;
  if (!consentListenerReady) {
    window.addEventListener(MARKETING_CONSENT_EVENT, (event) => {
      applyConsent((event as CustomEvent<MarketingConsent>).detail);
    });
    consentListenerReady = true;
  }
  applyConsent(getMarketingConsent());
}

export function trackMarketingPageView(): void {
  if (typeof window === "undefined" || getMarketingConsent() !== "accepted") return;
  const path = window.location.pathname;
  if (lastPage === path) return;
  lastPage = path;
  const params = { page_path: path, page_location: window.location.origin + path };
  window.dataLayer?.push({ event: "virtual_page_view", ...params });
  window.gtag?.("event", "page_view", params);
  window.fbq?.("track", "PageView", params);
}
