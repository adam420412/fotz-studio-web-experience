import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToLocation } from "@/lib/scroll-to-location.mjs";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => scrollToLocation(hash), [pathname, hash]);

  return null;
}
