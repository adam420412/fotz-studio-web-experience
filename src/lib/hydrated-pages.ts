import type { ComponentType } from "react";

// Opt in only after the page has matching server/client data and initial state.
export const hydratedPages: Record<string, () => Promise<{ default: ComponentType }>> = {
  "/": () => import("@/pages/Index"),
  "/seo/audyt": () => import("@/pages/AudytSEO"),
  "/agencja-marketingowa/poznan": () => import("@/pages/AgencjaMarketingowaPoznan"),
  "/agencja-marketingowa/wroclaw": () => import("@/pages/AgencjaMarketingowaWroclaw"),
  "/agencja-marketingu-internetowego": () => import("@/pages/AgencjaMarketinguInternetowego"),
  "/uslugi/marketing-internetowy": () => import("@/pages/MarketingInternetowy"),
  "/content-marketing/strategia": () => import("@/pages/ContentMarketing"),
  "/uslugi/strony-internetowe/legnica": () => import("@/pages/StronyInternetoweLegnica"),
};

export type InitialPage = { path: string; Component: ComponentType };
