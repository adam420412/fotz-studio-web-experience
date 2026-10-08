import { lazy, Suspense, useEffect, useState } from "react";

const Panel = lazy(() => import("./SEODevPanel").then(module => ({ default: module.SEODevPanel })));

/** Keep the opt-in developer tool out of ordinary visitors' requests. */
export function SEODevPanelLoader() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const check = () => {
      try { setEnabled(localStorage.getItem("fotz_seo_dev_enabled") === "true"); }
      catch { setEnabled(false); }
    };
    check();
    window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);
  return enabled ? <Suspense fallback={null}><Panel /></Suspense> : null;
}
