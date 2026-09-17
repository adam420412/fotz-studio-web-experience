import { hasMarketingConsent } from "./consent";

const FIRST_TOUCH_KEY = "fotz_attribution_first_v2";
const SESSION_FIRST_TOUCH_KEY = "fotz_attribution_first_session_v2";
const SESSION_TOUCH_KEY = "fotz_attribution_session_v2";

export type UTMData = {
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
  fbp?: string;
  fbc?: string;
};

export type TouchAttribution = UTMData & {
  landing_page?: string;
  referrer?: string;
  captured_at?: string;
};

export type AttributionContext = {
  first_touch: TouchAttribution;
  last_touch: TouchAttribution;
  current_page?: string;
};

const TRACKING_KEYS = [
  "utm_source",
  "utm_campaign",
  "utm_medium",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "msclkid",
] as const;

const safePage = (raw: string): string | undefined => {
  try {
    const url = new URL(raw, window.location.origin);
    return `${url.origin}${url.pathname}`.slice(0, 1000);
  } catch {
    return undefined;
  }
};

const read = (storage: Storage, key: string): TouchAttribution => {
  try {
    const value = storage.getItem(key);
    return value ? JSON.parse(value) as TouchAttribution : {};
  } catch {
    return {};
  }
};

const hasTouchData = (touch: TouchAttribution): boolean => Object.keys(touch).length > 0;

const metaBrowserIds = (): Pick<UTMData, "fbp" | "fbc"> => {
  if (!hasMarketingConsent() || typeof document === "undefined") return {};
  const decodeCookie = (value: string) => {
    try { return decodeURIComponent(value); } catch { return value; }
  };
  const cookies = Object.fromEntries(document.cookie.split(";").map((part) => {
    const separator = part.indexOf("=");
    return separator === -1
      ? [part.trim(), ""]
      : [part.slice(0, separator).trim(), decodeCookie(part.slice(separator + 1))];
  }));
  return {
    fbp: cookies._fbp?.slice(0, 300) || undefined,
    fbc: cookies._fbc?.slice(0, 500) || undefined,
  };
};

const trackingFromLocation = (): UTMData => {
  const params = new URLSearchParams(window.location.search);
  const data: UTMData = {};
  TRACKING_KEYS.forEach((key) => {
    const value = params.get(key)?.trim();
    if (value) data[key] = value.slice(0, 240);
  });
  return data;
};

export function captureUTMs() {
  if (typeof window === "undefined") return;
  try {
    const tracking = trackingFromLocation();
    const touch: TouchAttribution = {
      ...tracking,
      landing_page: safePage(window.location.href),
      referrer: document.referrer ? safePage(document.referrer) : undefined,
      captured_at: new Date().toISOString(),
    };

    const sessionFirst = read(sessionStorage, SESSION_FIRST_TOUCH_KEY);
    if (!hasTouchData(sessionFirst)) {
      sessionStorage.setItem(SESSION_FIRST_TOUCH_KEY, JSON.stringify(touch));
    }

    const session = read(sessionStorage, SESSION_TOUCH_KEY);
    sessionStorage.setItem(SESSION_TOUCH_KEY, JSON.stringify({
      ...session,
      ...tracking,
      landing_page: session.landing_page || touch.landing_page,
      referrer: session.referrer || touch.referrer,
      captured_at: session.captured_at || touch.captured_at,
    }));

    if (hasMarketingConsent()) {
      promoteAttributionAfterConsent();
    }
  } catch {
    // Attribution must never block page rendering.
  }
}

export function getUTMs(): UTMData {
  if (typeof window === "undefined") return {};
  const last = read(sessionStorage, SESSION_TOUCH_KEY);
  const first = hasMarketingConsent()
    ? read(localStorage, FIRST_TOUCH_KEY)
    : read(sessionStorage, SESSION_FIRST_TOUCH_KEY);
  const result: UTMData = {};
  TRACKING_KEYS.forEach((key) => {
    const value = last[key] || first[key];
    if (value) result[key] = value;
  });
  return result;
}

export function getAttributionContext(): AttributionContext {
  if (typeof window === "undefined") return { first_touch: {}, last_touch: {} };
  return {
    first_touch: hasMarketingConsent()
      ? read(localStorage, FIRST_TOUCH_KEY)
      : read(sessionStorage, SESSION_FIRST_TOUCH_KEY),
    last_touch: { ...read(sessionStorage, SESSION_TOUCH_KEY), ...metaBrowserIds() },
    current_page: safePage(window.location.href),
  };
}

export function promoteAttributionAfterConsent(): void {
  if (typeof window === "undefined" || !hasMarketingConsent()) return;
  try {
    if (localStorage.getItem(FIRST_TOUCH_KEY)) return;
    const sessionFirst = read(sessionStorage, SESSION_FIRST_TOUCH_KEY);
    const fallback = read(sessionStorage, SESSION_TOUCH_KEY);
    const firstTouch = hasTouchData(sessionFirst) ? sessionFirst : fallback;
    if (hasTouchData(firstTouch)) {
      localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(firstTouch));
    }
  } catch {
    // Attribution must never block page rendering.
  }
}

export function clearPersistentAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(FIRST_TOUCH_KEY);
  } catch {
    // Storage may be unavailable in hardened browser modes.
  }
}
