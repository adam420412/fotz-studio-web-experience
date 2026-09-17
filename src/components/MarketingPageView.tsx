import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackMarketingPageView } from "@/lib/marketingTracking";
export default function MarketingPageView() {
  const { pathname } = useLocation();
  useEffect(() => { trackMarketingPageView(); }, [pathname]);
  return null;
}
