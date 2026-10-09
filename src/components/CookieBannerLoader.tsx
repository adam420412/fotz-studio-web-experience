import { lazy, Suspense, useEffect, useState } from "react";

const CookieBanner = lazy(() => import("./CookieBanner").then(module => ({ default: module.CookieBanner })));

export function CookieBannerLoader() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // The banner has no server content. Mount it after hydration so a slow
  // animation-module download cannot invalidate a server Suspense boundary.
  return mounted ? <Suspense fallback={null}><CookieBanner /></Suspense> : null;
}
