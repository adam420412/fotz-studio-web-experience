import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scroll for faster page transitions
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
