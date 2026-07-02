const KEY = "fotz_utm_v1";

export type UTMData = {
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
  utm_content?: string;
  utm_term?: string;
};

export function captureUTMs() {
  if (typeof window === "undefined") return;
  try {
    const existing = sessionStorage.getItem(KEY);
    if (existing) return;
    const params = new URLSearchParams(window.location.search);
    const data: UTMData = {};
    (["utm_source", "utm_campaign", "utm_medium", "utm_content", "utm_term"] as const).forEach(
      (k) => {
        const v = params.get(k);
        if (v) data[k] = v.slice(0, 200);
      }
    );
    if (Object.keys(data).length > 0) {
      sessionStorage.setItem(KEY, JSON.stringify(data));
    }
  } catch {
    // ignore
  }
}

export function getUTMs(): UTMData {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return {};
    return JSON.parse(raw) as UTMData;
  } catch {
    return {};
  }
}