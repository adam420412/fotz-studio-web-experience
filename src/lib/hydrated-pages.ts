import type { ComponentType } from "react";

// Opt in only after the page has matching server/client data and initial state.
export const hydratedPages: Record<string, () => Promise<{ default: ComponentType }>> = {
  "/kontakt": () => import("@/pages/Kontakt"),
  "/konsultacja": () => import("@/pages/Konsultacja"),
  "/uslugi/strony-internetowe": () => import("@/pages/StronyInternetowe"),
  "/seo/pozycjonowanie": () => import("@/pages/Pozycjonowanie"),
  "/uslugi/produkcja-filmow": () => import("@/pages/ProdukcjaFilmowPoznan"),
  "/uslugi/produkcja-video": () => import("@/pages/SpotyReklamowe"),
  "/social-media/obsluga": () => import("@/pages/SocialMedia"),
  "/agencja-social-media": () => import("@/pages/AgencjaSocialMedia"),
  "/": () => import("@/pages/Index"),
  "/seo/pozycjonowanie-katowice": () => import("@/pages/SEOPozycjonowanieKatowice"),
  "/seo/pozycjonowanie-krakow": () => import("@/pages/SEOPozycjonowanieKrakow"),
  "/seo/pozycjonowanie-wroclaw": () => import("@/pages/SEOPozycjonowanieWroclaw"),
  "/seo/pozycjonowanie-gdansk": () => import("@/pages/SEOPozycjonowanieGdansk"),
  "/seo/pozycjonowanie-lodz": () => import("@/pages/SEOPozycjonowanieLodz"),
  "/seo/pozycjonowanie-warszawa": () => import("@/pages/SEOPozycjonowanieWarszawa"),
  "/seo/audyt": () => import("@/pages/AudytSEO"),
  "/agencja-marketingowa/poznan": () => import("@/pages/AgencjaMarketingowaPoznan"),
  "/agencja-marketingowa/wroclaw": () => import("@/pages/AgencjaMarketingowaWroclaw"),
  "/agencja-marketingu-internetowego": () => import("@/pages/AgencjaMarketinguInternetowego"),
  "/uslugi/marketing-internetowy": () => import("@/pages/MarketingInternetowy"),
  "/content-marketing/strategia": () => import("@/pages/ContentMarketing"),
  "/uslugi/strony-internetowe/legnica": () => import("@/pages/StronyInternetoweLegnica"),
};

export type InitialPage = { path: string; Component: ComponentType };
