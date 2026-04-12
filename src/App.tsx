import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";

// Only load Index synchronously - it's the most common entry point
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const Uslugi = lazy(() => import("./pages/Uslugi"));
const Realizacje = lazy(() => import("./pages/Realizacje"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Konsultacja = lazy(() => import("./pages/Konsultacja"));
const ONas = lazy(() => import("./pages/ONas"));
const Blog = lazy(() => import("./pages/Blog"));
const Poradniki = lazy(() => import("./pages/Poradniki"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Case Studies - grouped
const CaseStudyEnea = lazy(() => import("./pages/CaseStudyEnea"));
const CaseStudyRPPG = lazy(() => import("./pages/CaseStudyRPPG"));
const CaseStudyFabrykaVirali = lazy(() => import("./pages/CaseStudyFabrykaVirali"));
const CaseStudyFriendlyGas = lazy(() => import("./pages/CaseStudyFriendlyGas"));
const CaseStudyFPS = lazy(() => import("./pages/CaseStudyFPS"));
const CaseStudyGierki = lazy(() => import("./pages/CaseStudyGierki"));
const CaseStudyPrzedszkole = lazy(() => import("./pages/CaseStudyPrzedszkole"));
const CaseStudyVerthe = lazy(() => import("./pages/CaseStudyVerthe"));
const CaseStudyVictoryCars = lazy(() => import("./pages/CaseStudyVictoryCars"));
const CaseStudyKlagem = lazy(() => import("./pages/CaseStudyKlagem"));
const CaseStudyMechanica = lazy(() => import("./pages/CaseStudyMechanica"));
const CaseStudyCelsjusz = lazy(() => import("./pages/CaseStudyCelsjusz"));
const CaseStudySookar = lazy(() => import("./pages/CaseStudySookar"));
const CaseStudyGraf = lazy(() => import("./pages/CaseStudyGraf"));
const CaseStudyStagePlan = lazy(() => import("./pages/CaseStudyStagePlan"));
const CaseStudyCuteDumpling = lazy(() => import("./pages/CaseStudyCuteDumpling"));
const CaseStudyApartamenty = lazy(() => import("./pages/CaseStudyApartamenty"));
const CaseStudyLauvjah = lazy(() => import("./pages/CaseStudyLauvjah"));

// Blog posts - grouped
const BlogKosztStrony = lazy(() => import("./pages/BlogKosztStrony"));
const BlogTanieStrony = lazy(() => import("./pages/BlogTanieStrony"));
const BlogWordPressVsCustom = lazy(() => import("./pages/BlogWordPressVsCustom"));
const BlogAudytStrony = lazy(() => import("./pages/BlogAudytStrony"));
const BlogAudytSEOKrok = lazy(() => import("./pages/BlogAudytSEOKrok"));
const BlogKampaniaReklamowa = lazy(() => import("./pages/BlogKampaniaReklamowa"));
const BlogAIMarketing = lazy(() => import("./pages/BlogAIMarketing"));
const BlogGoogleVsFacebook = lazy(() => import("./pages/BlogGoogleVsFacebook"));
const BlogTikTokBiznes = lazy(() => import("./pages/BlogTikTokBiznes"));
const BlogSEOLokalnePoznan = lazy(() => import("./pages/BlogSEOLokalnePoznan"));
const BlogEmailMarketing = lazy(() => import("./pages/BlogEmailMarketing"));
const BlogReelsVsTikTok = lazy(() => import("./pages/BlogReelsVsTikTok"));
const BlogLandingPage = lazy(() => import("./pages/BlogLandingPage"));
const BlogInfluencerMarketing = lazy(() => import("./pages/BlogInfluencerMarketing"));
const BlogBrandingStartupy = lazy(() => import("./pages/BlogBrandingStartupy"));
const BlogUXEcommerce = lazy(() => import("./pages/BlogUXEcommerce"));
const BlogSEOEcommerce = lazy(() => import("./pages/BlogSEOEcommerce"));
const BlogMarketingAutomation = lazy(() => import("./pages/BlogMarketingAutomation"));
const BlogPersonalBrandingLinkedIn = lazy(() => import("./pages/BlogPersonalBrandingLinkedIn"));
const BlogVideoMarketing = lazy(() => import("./pages/BlogVideoMarketing"));
const BlogRemarketing = lazy(() => import("./pages/BlogRemarketing"));
const BlogGoogleAnalytics4 = lazy(() => import("./pages/BlogGoogleAnalytics4"));
const BlogBudzetMarketingowy = lazy(() => import("./pages/BlogBudzetMarketingowy"));
const BlogB2BvsB2C = lazy(() => import("./pages/BlogB2BvsB2C"));
const BlogPsychologiaCen = lazy(() => import("./pages/BlogPsychologiaCen"));
const BlogCopywritingLanding = lazy(() => import("./pages/BlogCopywritingLanding"));
const BlogArticleDynamic = lazy(() => import("./pages/BlogArticleDynamic"));
const BlogSprzedazOnline = lazy(() => import("./pages/BlogSprzedazOnline"));
const BlogBriefMarketingowy = lazy(() => import("./pages/BlogBriefMarketingowy"));
const BlogPozycjonowanieStron = lazy(() => import("./pages/BlogPozycjonowanieStron"));
const BlogKosztGoogleAds = lazy(() => import("./pages/BlogKosztGoogleAds"));
const BlogJakWybracAgencje = lazy(() => import("./pages/BlogJakWybracAgencje"));
const BlogKonwersjeNaStronie = lazy(() => import("./pages/BlogKonwersjeNaStronie"));
const BlogSocialMediaStrategia = lazy(() => import("./pages/BlogSocialMediaStrategia"));
const BlogStronaDlaFirmy = lazy(() => import("./pages/BlogStronaDlaFirmy"));
const BlogPodcastMarketing = lazy(() => import("./pages/BlogPodcastMarketing"));

const BlogProjektowanieStron = lazy(() => import("./pages/BlogProjektowanieStron"));
// New blog posts (Wave 5 - content gaps)
const BlogIdentyfikacjaWizualna = lazy(() => import("./pages/BlogIdentyfikacjaWizualna"));
const BlogJakZaprojektowacLogo = lazy(() => import("./pages/BlogJakZaprojektowacLogo"));
const BlogGoogleAdsCennik = lazy(() => import("./pages/BlogGoogleAdsCennik"));
const BlogGoogleAdsVsSeo = lazy(() => import("./pages/BlogGoogleAdsVsSeo"));
const BlogCennikFacebookAds = lazy(() => import("./pages/BlogCennikFacebookAds"));
const BlogFacebookAdsPoradnik = lazy(() => import("./pages/BlogFacebookAdsPoradnik"));
const BlogProwadzenieSocialMediaCennik = lazy(() => import("./pages/BlogProwadzenieSocialMediaCennik"));
const BlogFotografiaProduktowa = lazy(() => import("./pages/BlogFotografiaProduktowa"));
const BlogLandingPageVsStrona = lazy(() => import("./pages/BlogLandingPageVsStrona"));
const BlogSocialMediaMarketingPoradnik = lazy(() => import("./pages/BlogSocialMediaMarketingPoradnik"));
const BlogStronaInternetowaDlaRestauracji = lazy(() => import("./pages/BlogStronaInternetowaDlaRestauracji"));
const BlogBlogFirmowy = lazy(() => import("./pages/BlogBlogFirmowy"));
const BlogIleKosztujeFIlmReklamowy = lazy(() => import("./pages/BlogIleKosztujeFIlmReklamowy"));
const BlogPozycjonowanieDlaMalychFirm = lazy(() => import("./pages/BlogPozycjonowanieDlaMalychFirm"));

// Case Studies
const CaseStudyEcommerceCRO = lazy(() => import("./pages/CaseStudyEcommerceCRO"));
const CaseStudyLocalSEO = lazy(() => import("./pages/CaseStudyLocalSEO"));
const CaseStudyStronaWWW = lazy(() => import("./pages/CaseStudyStronaWWW"));

// DlaKogo pages
const DlaKogo = lazy(() => import("./pages/DlaKogo"));
const DlaKogoFirmyLokalne = lazy(() => import("./pages/DlaKogoFirmyLokalne"));
const DlaKogoEcommerce = lazy(() => import("./pages/DlaKogoEcommerce"));
const DlaKogoMarkiPremium = lazy(() => import("./pages/DlaKogoMarkiPremium"));
const DlaKogoInstytucje = lazy(() => import("./pages/DlaKogoInstytucje"));

// Branze/Industry pages
const MarketingMedyczny = lazy(() => import("./pages/branze/MarketingMedyczny"));
const MarketingGastronomia = lazy(() => import("./pages/branze/MarketingGastronomia"));
const MarketingBeauty = lazy(() => import("./pages/branze/MarketingBeauty"));
const MarketingNieruchomosci = lazy(() => import("./pages/branze/MarketingNieruchomosci"));
const MarketingAutomotive = lazy(() => import("./pages/branze/MarketingAutomotive"));
const MarketingEdukacja = lazy(() => import("./pages/branze/MarketingEdukacja"));
const MarketingPrawoFinanse = lazy(() => import("./pages/branze/MarketingPrawoFinanse"));
const MarketingEcommerceRetail = lazy(() => import("./pages/branze/MarketingEcommerceRetail"));
const MarketingIT = lazy(() => import("./pages/branze/MarketingIT"));
const MarketingProdukcja = lazy(() => import("./pages/branze/MarketingProdukcja"));
const MarketingNGO = lazy(() => import("./pages/branze/MarketingNGO"));
const MarketingTurystyka = lazy(() => import("./pages/branze/MarketingTurystyka"));

// Akademia
const AkademiaLanding = lazy(() => import("./pages/AkademiaLanding"));
const AkademiaAuth = lazy(() => import("./pages/AkademiaAuth"));
const Akademia = lazy(() => import("./pages/Akademia"));
const AkademiaAdmin = lazy(() => import("./pages/AkademiaAdmin"));

// Wave 4: SEO cluster expansion
const SEOLinkBuilding = lazy(() => import("./pages/SEOLinkBuilding"));
const SEOCopywriting = lazy(() => import("./pages/SEOCopywriting"));
const SEOCoreWebVitals = lazy(() => import("./pages/SEOCoreWebVitals"));

// Wave 4: AI visibility pages
const AIMarketing = lazy(() => import("./pages/AIMarketing"));
const AISEO = lazy(() => import("./pages/AISEO"));

// Wave 4: Local SEO - city positioning pages
const SEOPozycjonowanieWarszawa = lazy(() => import("./pages/SEOPozycjonowanieWarszawa"));
const SEOPozycjonowanieKrakow = lazy(() => import("./pages/SEOPozycjonowanieKrakow"));
const SEOPozycjonowanieWroclaw = lazy(() => import("./pages/SEOPozycjonowanieWroclaw"));
const SEOPozycjonowanieGdansk = lazy(() => import("./pages/SEOPozycjonowanieGdansk"));
const SEOPozycjonowanieKatowice = lazy(() => import("./pages/SEOPozycjonowanieKatowice"));
const SEOPozycjonowanieLodz = lazy(() => import("./pages/SEOPozycjonowanieLodz"));

// Local SEO pages
const AgencjaMarketingowaPoznan = lazy(() => import("./pages/AgencjaMarketingowaPoznan"));
const AgencjaMarketinguInternetowego = lazy(() => import("./pages/AgencjaMarketinguInternetowego"));
const AgencjaReklamowaPoznan = lazy(() => import("./pages/AgencjaReklamowaPoznan"));

// City pages - all lazy loaded
const StronyInternetowePoznan = lazy(() => import("./pages/StronyInternetowePoznan"));
const StronyInternetoweWarszawa = lazy(() => import("./pages/StronyInternetoweWarszawa"));
const StronyInternetoweWroclaw = lazy(() => import("./pages/StronyInternetoweWroclaw"));
const StronyInternetoweKrakow = lazy(() => import("./pages/StronyInternetoweKrakow"));
const StronyInternetoweGdansk = lazy(() => import("./pages/StronyInternetoweGdansk"));
const StronyInternetoweGdynia = lazy(() => import("./pages/StronyInternetoweGdynia"));
const StronyInternetoweLodz = lazy(() => import("./pages/StronyInternetoweLodz"));
const StronyInternetoweSzczecin = lazy(() => import("./pages/StronyInternetoweSzczecin"));
const StronyInternetoweBydgoszcz = lazy(() => import("./pages/StronyInternetoweBydgoszcz"));
const StronyInternetoweKatowice = lazy(() => import("./pages/StronyInternetoweKatowice"));
const StronyInternetoweLublin = lazy(() => import("./pages/StronyInternetoweLublin"));
const StronyInternetoweKoszalin = lazy(() => import("./pages/StronyInternetoweKoszalin"));
const StronyInternetoweGliwice = lazy(() => import("./pages/StronyInternetoweGliwice"));
const StronyInternetoweRybnik = lazy(() => import("./pages/StronyInternetoweRybnik"));
const StronyInternetoweTychy = lazy(() => import("./pages/StronyInternetoweTychy"));
const StronyInternetoweKamionki = lazy(() => import("./pages/StronyInternetoweKamionki"));
const StronyInternetoweTorun = lazy(() => import("./pages/StronyInternetoweTorun"));
const StronyInternetoweRzeszow = lazy(() => import("./pages/StronyInternetoweRzeszow"));
const StronyInternetoweRadom = lazy(() => import("./pages/StronyInternetoweRadom"));
const StronyInternetoweOpole = lazy(() => import("./pages/StronyInternetoweOpole"));
const StronyInternetoweOlsztyn = lazy(() => import("./pages/StronyInternetoweOlsztyn"));
const StronyInternetoweKielce = lazy(() => import("./pages/StronyInternetoweKielce"));
const StronyInternetoweKonin = lazy(() => import("./pages/StronyInternetoweKonin"));
const StronyInternetoweTarnow = lazy(() => import("./pages/StronyInternetoweTarnow"));
const StronyInternetowePlock = lazy(() => import("./pages/StronyInternetowePlock"));
const StronyInternetoweSosnowiec = lazy(() => import("./pages/StronyInternetoweSosnowiec"));
const StronyInternetoweBialystok = lazy(() => import("./pages/StronyInternetoweBialystok"));
const StronyInternetoweCzestochowa = lazy(() => import("./pages/StronyInternetoweCzestochowa"));
const StronyInternetoweZielonaGora = lazy(() => import("./pages/StronyInternetoweZielonaGora"));
const StronyInternetoweElblag = lazy(() => import("./pages/StronyInternetoweElblag"));
const StronyInternetoweLegnica = lazy(() => import("./pages/StronyInternetoweLegnica"));
const StronyInternetoweKalisz = lazy(() => import("./pages/StronyInternetoweKalisz"));
const StronyInternetoweGorzow = lazy(() => import("./pages/StronyInternetoweGorzow"));
const StronyInternetowe = lazy(() => import("./pages/StronyInternetowe"));
const UslugiLandingPage = lazy(() => import("./pages/UslugiLandingPage"));

// Service pages
const SocialMediaPoznan = lazy(() => import("./pages/SocialMediaPoznan"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const FotografPoznan = lazy(() => import("./pages/FotografPoznan"));
const FotografiaZDrona = lazy(() => import("./pages/FotografiaZDrona"));
const PozycjonowanieStronPoznan = lazy(() => import("./pages/PozycjonowanieStronPoznan"));
const AgencjaSEOPoznan = lazy(() => import("./pages/AgencjaSEOPoznan"));
const SklepyInternetowePoznan = lazy(() => import("./pages/SklepyInternetowePoznan"));
const SklepyInternetoweWarszawa = lazy(() => import("./pages/SklepyInternetoweWarszawa"));
const SklepyInternetoweKrakow = lazy(() => import("./pages/SklepyInternetoweKrakow"));
const AgencjaMarketingowaWarszawa = lazy(() => import("./pages/AgencjaMarketingowaWarszawa"));
const AgencjaKreaTywnaPoznan = lazy(() => import("./pages/AgencjaKreaTywnaPoznan"));
const Pozycjonowanie = lazy(() => import("./pages/Pozycjonowanie"));
const PozycjonowanieGoogleMaps = lazy(() => import("./pages/PozycjonowanieGoogleMaps"));
const ProdukcjaFilmowPoznan = lazy(() => import("./pages/ProdukcjaFilmowPoznan"));
const SpotyReklamowe = lazy(() => import("./pages/SpotyReklamowe"));
const Wizualizacje3D = lazy(() => import("./pages/Wizualizacje3D"));
const KompleksowaObsluga = lazy(() => import("./pages/KompleksowaObsluga"));
const StudioPodcastowe = lazy(() => import("./pages/StudioPodcastowe"));

// Ads pages
const FacebookAds = lazy(() => import("./pages/FacebookAds"));
const GoogleAds = lazy(() => import("./pages/GoogleAds"));
const GoogleAdsWarszawa = lazy(() => import("./pages/GoogleAdsWarszawa"));
const SocialMediaWarszawa = lazy(() => import("./pages/SocialMediaWarszawa"));
const BlogFotografiaBiznesowa = lazy(() => import("./pages/BlogFotografiaBiznesowa"));
const BlogIdentyfikacjaWizualnaCennik = lazy(() => import("./pages/BlogIdentyfikacjaWizualnaCennik"));
const BlogJakWybracAgencjeMarketingowa = lazy(() => import("./pages/BlogJakWybracAgencjeMarketingowa"));
const KampanieReklamowe = lazy(() => import("./pages/KampanieReklamowe"));
const KampanieReklamowePoznan = lazy(() => import("./pages/KampanieReklamowePoznan"));
const TikTokAds = lazy(() => import("./pages/TikTokAds"));
const LinkedInAds = lazy(() => import("./pages/LinkedInAds"));
const YouTubeAds = lazy(() => import("./pages/YouTubeAds"));
const InstagramAds = lazy(() => import("./pages/InstagramAds"));
const FacebookInstagramAds = lazy(() => import("./pages/FacebookInstagramAds"));

// Wave 5: New service pages (logo, pozycjonowanie, fotografia, video)
const LogoIBranding = lazy(() => import("./pages/LogoIBranding"));
const UslugiPozycjonowanie = lazy(() => import("./pages/UslugiPozycjonowanie"));
const PozycjonowanieWarszawa = lazy(() => import("./pages/PozycjonowanieWarszawa"));
const PozycjonowanieKrakow = lazy(() => import("./pages/PozycjonowanieKrakow"));
const PozycjonowanieWroclaw = lazy(() => import("./pages/PozycjonowanieWroclaw"));
const PozycjonowaniePoznan = lazy(() => import("./pages/PozycjonowaniePoznan"));
const PozycjonowanieGdansk = lazy(() => import("./pages/PozycjonowanieGdansk"));
const PozycjonowanieLodz = lazy(() => import("./pages/PozycjonowanieLodz"));
const FotografiaProduktowa = lazy(() => import("./pages/FotografiaProduktowa"));
const VideoMarketing = lazy(() => import("./pages/VideoMarketing"));

// Wave 6: Agencja city pages
const AgencjaMarketingowaKatowice = lazy(() => import("./pages/AgencjaMarketingowaKatowice"));
const AgencjaMarketingowaWroclaw = lazy(() => import("./pages/AgencjaMarketingowaWroclaw"));

// Wave 7: SEO city pages + new service/blog pages
const PozycjonowanieSzczecin = lazy(() => import("./pages/PozycjonowanieSzczecin"));
const PozycjonowanieBialystok = lazy(() => import("./pages/PozycjonowanieBialystok"));
const UslugiIdentyfikacjaWizualna = lazy(() => import("./pages/UslugiIdentyfikacjaWizualna"));
const BlogCoToJestSeo = lazy(() => import("./pages/BlogCoToJestSeo"));

// Wave 8: New city pages + pricing
const CennikStronInternetowych = lazy(() => import("./pages/CennikStronInternetowych"));
const PozycjonowanieLublin = lazy(() => import("./pages/PozycjonowanieLublin"));
const PozycjonowanieRzeszow = lazy(() => import("./pages/PozycjonowanieRzeszow"));
const PozycjonowanieKatowice = lazy(() => import("./pages/PozycjonowanieKatowice"));
const PozycjonowanieCzestochowa = lazy(() => import("./pages/PozycjonowanieCzestochowa"));
const AgencjaMarketingowaLodz = lazy(() => import("./pages/AgencjaMarketingowaLodz"));
const AgencjaMarketingowaGdansk = lazy(() => import("./pages/AgencjaMarketingowaGdansk"));
const AgencjaMarketingowaKrakow = lazy(() => import("./pages/AgencjaMarketingowaKrakow"));
const AgencjaMarketingowaLublin = lazy(() => import("./pages/AgencjaMarketingowaLublin"));
const BlogIleKosztujePozycjonowanie = lazy(() => import("./pages/BlogIleKosztujePozycjonowanie"));
const BlogSocialMediaDlaFirm = lazy(() => import("./pages/BlogSocialMediaDlaFirm"));
const BlogJakWybracAgencjeSEO = lazy(() => import("./pages/BlogJakWybracAgencjeSEO"));
const PozycjonowanieTorun = lazy(() => import("./pages/PozycjonowanieTorun"));
const PozycjonowanieBydgoszcz = lazy(() => import("./pages/PozycjonowanieBydgoszcz"));
const PozycjonowanieRadom = lazy(() => import("./pages/PozycjonowanieRadom"));
const PozycjonowanieKielce = lazy(() => import("./pages/PozycjonowanieKielce"));
const AgencjaMarketingowaRzeszow = lazy(() => import("./pages/AgencjaMarketingowaRzeszow"));
const AgencjaMarketingowaBydgoszcz = lazy(() => import("./pages/AgencjaMarketingowaBydgoszcz"));
const AgencjaMarketingowaTorun = lazy(() => import("./pages/AgencjaMarketingowaTorun"));
const AgencjaMarketingowaSzczecin = lazy(() => import("./pages/AgencjaMarketingowaSzczecin"));
const CennikPozycjonowania = lazy(() => import("./pages/CennikPozycjonowania"));
const BlogPozycjonowanieLokalnePoradnik = lazy(() => import("./pages/BlogPozycjonowanieLokalnePoradnik"));
const BlogInstagramDlaFirmy = lazy(() => import("./pages/BlogInstagramDlaFirmy"));
const BlogContentMarketing = lazy(() => import("./pages/BlogContentMarketing"));

// Wave 9: Strony internetowe cluster + city pages
const TworzenieStronInternetowych = lazy(() => import("./pages/TworzenieStronInternetowych"));
const ProjektowanieStronInternetowych = lazy(() => import("./pages/ProjektowanieStronInternetowych"));
const StronyInternetoweLubelskie = lazy(() => import("./pages/StronyInternetoweLubelskie"));
const StronyInternetoweWielkopolska = lazy(() => import("./pages/StronyInternetoweWielkopolska"));
const StronyInternetowePodkarpacie = lazy(() => import("./pages/StronyInternetowePodkarpacie"));
const BlogJakStworzyc = lazy(() => import("./pages/BlogJakStworzyc"));
const BlogStronaInternetowaOdZera = lazy(() => import("./pages/BlogStronaInternetowaOdZera"));
const CennikTworzenieStron = lazy(() => import("./pages/CennikTworzenieStron"));
const PozycjonowanieOpole = lazy(() => import("./pages/PozycjonowanieOpole"));
const PozycjonowanieOlsztyn = lazy(() => import("./pages/PozycjonowanieOlsztyn"));
const AgencjaMarketingowaOpole = lazy(() => import("./pages/AgencjaMarketingowaOpole"));
const AgencjaMarketingowaOlsztyn = lazy(() => import("./pages/AgencjaMarketingowaOlsztyn"));

// Wave 10: Tworzenie stron city pages
const TworzenieStronWarszawa = lazy(() => import("./pages/TworzenieStronWarszawa"));
const TworzenieStronKrakow = lazy(() => import("./pages/TworzenieStronKrakow"));
const TworzenieStronWroclaw = lazy(() => import("./pages/TworzenieStronWroclaw"));
const TworzenieStronGdansk = lazy(() => import("./pages/TworzenieStronGdansk"));
const TworzenieStronLodz = lazy(() => import("./pages/TworzenieStronLodz"));
const TworzenieStronTorun = lazy(() => import("./pages/TworzenieStronTorun"));
const TworzenieStronSzczecin = lazy(() => import("./pages/TworzenieStronSzczecin"));
const BlogJakZalozycSklep = lazy(() => import("./pages/BlogJakZalozycSklep"));

// Wave 11: More tworzenie stron city pages + service pages + blog
const TworzenieStronBydgoszcz = lazy(() => import("./pages/TworzenieStronBydgoszcz"));
const TworzenieStronKatowice = lazy(() => import("./pages/TworzenieStronKatowice"));
const TworzenieStronLublin = lazy(() => import("./pages/TworzenieStronLublin"));
const TworzenieStronPoznan = lazy(() => import("./pages/TworzenieStronPoznan"));
const MarketingInternetowy = lazy(() => import("./pages/MarketingInternetowy"));
const AgencjaSEOWarszawa = lazy(() => import("./pages/AgencjaSEOWarszawa"));
const BlogDropshippingPolska = lazy(() => import("./pages/BlogDropshippingPolska"));
const BlogReklamaWGoogle = lazy(() => import("./pages/BlogReklamaWGoogle"));


// Wave 202: React Email+Resend, Local-First, PostHog+Sentry
const BlogReactEmailResendCoTo = lazy(() => import("./pages/BlogReactEmailResendCoTo"));
const BlogLocalFirstCoTo = lazy(() => import("./pages/BlogLocalFirstCoTo"));
const BlogPosthogSentryCoTo = lazy(() => import("./pages/BlogPosthogSentryCoTo"));

// Wave 201: Svelte 5 Runes+Angular 18/19, Capacitor+Ionic, GitHub Actions
const BlogSvelte5RunesCoTo = lazy(() => import("./pages/BlogSvelte5RunesCoTo"));
const BlogCapacitorIonicCoTo = lazy(() => import("./pages/BlogCapacitorIonicCoTo"));
const BlogGithubActionsAdvCoTo = lazy(() => import("./pages/BlogGithubActionsAdvCoTo"));

// Wave 200: TypeScript 5.5/5.6, Elysia.js+Bun, AI Agents+MCP
const BlogTs55CoTo = lazy(() => import("./pages/BlogTs55CoTo"));
const BlogElysiaJsCoTo = lazy(() => import("./pages/BlogElysiaJsCoTo"));
const BlogAiAgentsMcpCoTo = lazy(() => import("./pages/BlogAiAgentsMcpCoTo"));

// Wave 199: React Router 7, Kysely+MikroORM, Astro 5
const BlogReactRouter7CoTo = lazy(() => import("./pages/BlogReactRouter7CoTo"));
const BlogKyselyMikroOrmCoTo = lazy(() => import("./pages/BlogKyselyMikroOrmCoTo"));
const BlogAstro5CoTo = lazy(() => import("./pages/BlogAstro5CoTo"));

// Wave 198: Rspack+Farm+Rolldown, Legend State+Nanostores, CSS Container+@layer
const BlogRspackFarmRolldownCoTo = lazy(() => import("./pages/BlogRspackFarmRolldownCoTo"));
const BlogLegendStateNanostoresCoTo = lazy(() => import("./pages/BlogLegendStateNanostoresCoTo"));
const BlogCssContainerLayerCoTo = lazy(() => import("./pages/BlogCssContainerLayerCoTo"));

// Wave 197: Valibot+ArkType, React Concurrent, JS Memory Management
const BlogValibotArktypeCoTo = lazy(() => import("./pages/BlogValibotArktypeCoTo"));
const BlogReactConcurrentCoTo = lazy(() => import("./pages/BlogReactConcurrentCoTo"));
const BlogJsMemoryMgmtCoTo = lazy(() => import("./pages/BlogJsMemoryMgmtCoTo"));

// Wave 196: NativeWind+Tamagui, HTTP Clients TypeScript, TS Utility Types
const BlogNativeWindTamaguiCoTo = lazy(() => import("./pages/BlogNativeWindTamaguiCoTo"));
const BlogHttpClientsCoTo = lazy(() => import("./pages/BlogHttpClientsCoTo"));
const BlogTsUtilityTypesCoTo = lazy(() => import("./pages/BlogTsUtilityTypesCoTo"));

// Wave 195: AI Coding Tools, Passkeys+WebAuthn, TanStack Start
const BlogAiCodingToolsCoTo = lazy(() => import("./pages/BlogAiCodingToolsCoTo"));
const BlogPasskeysWebAuthnCoTo = lazy(() => import("./pages/BlogPasskeysWebAuthnCoTo"));
const BlogTanstackStartCoTo = lazy(() => import("./pages/BlogTanstackStartCoTo"));

// Wave 194: Panda CSS+UnoCSS, Node.js version managers, Next.js 15
const BlogPandaCssUnoCoTo = lazy(() => import("./pages/BlogPandaCssUnoCoTo"));
const BlogNodeVersionMgrCoTo = lazy(() => import("./pages/BlogNodeVersionMgrCoTo"));
const BlogNextJs15CoTo = lazy(() => import("./pages/BlogNextJs15CoTo"));

// Wave 193: CSS Anchor+Popover API, RN New Architecture, TanStack Form
const BlogCssAnchorPopoverCoTo = lazy(() => import("./pages/BlogCssAnchorPopoverCoTo"));
const BlogRnNewArchCoTo = lazy(() => import("./pages/BlogRnNewArchCoTo"));
const BlogTanstackFormCoTo = lazy(() => import("./pages/BlogTanstackFormCoTo"));

// Wave 192: Tailwind CSS v4, Speech AI, CSS Custom Properties
const BlogTailwindV4CoTo = lazy(() => import("./pages/BlogTailwindV4CoTo"));
const BlogSpeechAiCoTo = lazy(() => import("./pages/BlogSpeechAiCoTo"));
const BlogCssCustomPropsCoTo = lazy(() => import("./pages/BlogCssCustomPropsCoTo"));

// Wave 191: HTMX, Astro deep dive, React Error Handling
const BlogHtmxCoTo = lazy(() => import("./pages/BlogHtmxCoTo"));
const BlogAstroDeepDiveCoTo = lazy(() => import("./pages/BlogAstroDeepDiveCoTo"));
const BlogReactErrorHandlingCoTo = lazy(() => import("./pages/BlogReactErrorHandlingCoTo"));

// Wave 190: AI Image Generation, Supabase deep dive, Cloudflare Workers
const BlogAiImageGenCoTo = lazy(() => import("./pages/BlogAiImageGenCoTo"));
const BlogSupabaseDeepDiveCoTo = lazy(() => import("./pages/BlogSupabaseDeepDiveCoTo"));
const BlogCloudflareWorkersCoTo = lazy(() => import("./pages/BlogCloudflareWorkersCoTo"));

// Wave 189: Remix deep dive, React Compiler, Nuxt.js 3
const BlogRemixDeepDiveCoTo = lazy(() => import("./pages/BlogRemixDeepDiveCoTo"));
const BlogReactCompilerCoTo = lazy(() => import("./pages/BlogReactCompilerCoTo"));
const BlogNuxtCoTo = lazy(() => import("./pages/BlogNuxtCoTo"));

// Wave 188: Qwik framework, SolidJS, CSS Grid Subgrid
const BlogQwikCoTo = lazy(() => import("./pages/BlogQwikCoTo"));
const BlogSolidJsCoTo = lazy(() => import("./pages/BlogSolidJsCoTo"));
const BlogCssGridSubgridCoTo = lazy(() => import("./pages/BlogCssGridSubgridCoTo"));

// Wave 187: SvelteKit, OpenAI Assistants API, Zod Advanced
const BlogSvelteKitCoTo = lazy(() => import("./pages/BlogSvelteKitCoTo"));
const BlogOpenAiAssistantsCoTo = lazy(() => import("./pages/BlogOpenAiAssistantsCoTo"));
const BlogZodAdvancedCoTo = lazy(() => import("./pages/BlogZodAdvancedCoTo"));

// Wave 186: BullMQ Job Queues, Next.js Middleware, LLM Tool Calling
const BlogBullmqCoTo = lazy(() => import("./pages/BlogBullmqCoTo"));
const BlogNextMiddlewareCoTo = lazy(() => import("./pages/BlogNextMiddlewareCoTo"));
const BlogLlmToolCallingCoTo = lazy(() => import("./pages/BlogLlmToolCallingCoTo"));

// Wave 185: React Aria a11y, Docker Node.js, React Testing Library
const BlogReactAriaCoTo = lazy(() => import("./pages/BlogReactAriaCoTo"));
const BlogDockerNodeCoTo = lazy(() => import("./pages/BlogDockerNodeCoTo"));
const BlogRtlTestingCoTo = lazy(() => import("./pages/BlogRtlTestingCoTo"));

// Wave 184: Storybook 8, Node.js Streams, JS ES2024 Proposals
const BlogStorybook8CoTo = lazy(() => import("./pages/BlogStorybook8CoTo"));
const BlogNodeStreamsCoTo = lazy(() => import("./pages/BlogNodeStreamsCoTo"));
const BlogJsProposalsCoTo = lazy(() => import("./pages/BlogJsProposalsCoTo"));

// Wave 183: Serverless Databases, TanStack Router, Effect.ts FP
const BlogServerlessDbCoTo = lazy(() => import("./pages/BlogServerlessDbCoTo"));
const BlogTanstackRouterCoTo = lazy(() => import("./pages/BlogTanstackRouterCoTo"));
const BlogEffectTsCoTo = lazy(() => import("./pages/BlogEffectTsCoTo"));

// Wave 182: React Native Reanimated, Web Workers, CRDT Collaboration
const BlogRNReanimatedCoTo = lazy(() => import("./pages/BlogRNReanimatedCoTo"));
const BlogWebWorkersCoTo = lazy(() => import("./pages/BlogWebWorkersCoTo"));
const BlogCrdtCollabCoTo = lazy(() => import("./pages/BlogCrdtCollabCoTo"));

// Wave 181: React Performance, Modern CSS, Modern Browser APIs
const BlogReactPerfCoTo = lazy(() => import("./pages/BlogReactPerfCoTo"));
const BlogModernCssCoTo = lazy(() => import("./pages/BlogModernCssCoTo"));
const BlogBrowserApisCoTo = lazy(() => import("./pages/BlogBrowserApisCoTo"));

// Wave 180: React Flow/Graphs, Canvas/Konva, React Three Fiber 3D
const BlogReactFlowCoTo = lazy(() => import("./pages/BlogReactFlowCoTo"));
const BlogKonvaCanvasCoTo = lazy(() => import("./pages/BlogKonvaCanvasCoTo"));
const BlogReactThreeFiberCoTo = lazy(() => import("./pages/BlogReactThreeFiberCoTo"));

// Wave 179: Image Optimization, Tiptap/Rich Text, Font Optimization
const BlogNextImageCoTo = lazy(() => import("./pages/BlogNextImageCoTo"));
const BlogTiptapLexicalCoTo = lazy(() => import("./pages/BlogTiptapLexicalCoTo"));
const BlogNextFontCoTo = lazy(() => import("./pages/BlogNextFontCoTo"));

// Wave 178: Recharts/DataViz, dnd-kit, Lottie/Rive Animations
const BlogRechartsCoTo = lazy(() => import("./pages/BlogRechartsCoTo"));
const BlogDndKitCoTo = lazy(() => import("./pages/BlogDndKitCoTo"));
const BlogLottieRiveCoTo = lazy(() => import("./pages/BlogLottieRiveCoTo"));

// Wave 177: TanStack Table, Expo Router, Web Components
const BlogTanstackTableCoTo = lazy(() => import("./pages/BlogTanstackTableCoTo"));
const BlogExpoRouterCoTo = lazy(() => import("./pages/BlogExpoRouterCoTo"));
const BlogWebComponentsCoTo = lazy(() => import("./pages/BlogWebComponentsCoTo"));

// Wave 176: React 19, OpenAPI/Zod, MSW Contract Testing
const BlogReact19CoTo = lazy(() => import("./pages/BlogReact19CoTo"));
const BlogOpenApiCoTo = lazy(() => import("./pages/BlogOpenApiCoTo"));
const BlogMswTestingCoTo = lazy(() => import("./pages/BlogMswTestingCoTo"));

// Wave 175: Package Managers, TypeScript tsconfig, Tauri/Electron Desktop
const BlogPackageManagersCoTo = lazy(() => import("./pages/BlogPackageManagersCoTo"));
const BlogTsconfigCoTo = lazy(() => import("./pages/BlogTsconfigCoTo"));
const BlogTauriElectronCoTo = lazy(() => import("./pages/BlogTauriElectronCoTo"));

// Wave 174: Git Workflow, GraphQL Apollo, CSS-in-JS Zero Runtime
const BlogGitWorkflowCoTo = lazy(() => import("./pages/BlogGitWorkflowCoTo"));
const BlogGraphQLApolloCoTo = lazy(() => import("./pages/BlogGraphQLApolloCoTo"));
const BlogCssInJsCoTo = lazy(() => import("./pages/BlogCssInJsCoTo"));

// Wave 173: File Uploads, Deployment Platforms, Date Libraries
const BlogFileUploadsCoTo = lazy(() => import("./pages/BlogFileUploadsCoTo"));
const BlogDeploymentPlatformsCoTo = lazy(() => import("./pages/BlogDeploymentPlatformsCoTo"));
const BlogDateLibrariesCoTo = lazy(() => import("./pages/BlogDateLibrariesCoTo"));

// Wave 172: AI SDK/OpenAI, Stripe Payments, Email/Resend
const BlogAiSdkCoTo = lazy(() => import("./pages/BlogAiSdkCoTo"));
const BlogStripeCoTo = lazy(() => import("./pages/BlogStripeCoTo"));
const BlogEmailResendCoTo = lazy(() => import("./pages/BlogEmailResendCoTo"));

// Wave 171: Web Security, Firebase/Supabase, Algolia/Search
const BlogWebSecurityCoTo = lazy(() => import("./pages/BlogWebSecurityCoTo"));
const BlogFirebaseSupabaseCoTo = lazy(() => import("./pages/BlogFirebaseSupabaseCoTo"));
const BlogAlgoliaSearchCoTo = lazy(() => import("./pages/BlogAlgoliaSearchCoTo"));

// Wave 170: React Hook Form+Zod, Framer Motion, i18n
const BlogReactHookFormCoTo = lazy(() => import("./pages/BlogReactHookFormCoTo"));
const BlogFramerMotionCoTo = lazy(() => import("./pages/BlogFramerMotionCoTo"));
const BlogI18nCoTo = lazy(() => import("./pages/BlogI18nCoTo"));

// Wave 169: NestJS, Hono/Fastify/Express, DI/SOLID/Patterns
const BlogNestJsCoTo = lazy(() => import("./pages/BlogNestJsCoTo"));
const BlogHonoFastifyCoTo = lazy(() => import("./pages/BlogHonoFastifyCoTo"));
const BlogDiContainerCoTo = lazy(() => import("./pages/BlogDiContainerCoTo"));

// Wave 168: Vue 3/Pinia/Nuxt, React Native/Expo, Angular Signals
const BlogVue3CoTo = lazy(() => import("./pages/BlogVue3CoTo"));
const BlogReactNativeExpoCoTo = lazy(() => import("./pages/BlogReactNativeExpoCoTo"));
const BlogAngularSignalsCoTo = lazy(() => import("./pages/BlogAngularSignalsCoTo"));

// Wave 167: ESLint/Biome, TypeScript Advanced, React Patterns
const BlogEslintBiomeCoTo = lazy(() => import("./pages/BlogEslintBiomeCoTo"));
const BlogTypescriptAdvancedCoTo = lazy(() => import("./pages/BlogTypescriptAdvancedCoTo"));
const BlogReactPatternsCoTo = lazy(() => import("./pages/BlogReactPatternsCoTo"));

// Wave 166: Tailwind/shadcn, Core Web Vitals, Accessibility a11y
const BlogTailwindShadcnCoTo = lazy(() => import("./pages/BlogTailwindShadcnCoTo"));
const BlogCoreWebVitalsCoTo = lazy(() => import("./pages/BlogCoreWebVitalsCoTo"));
const BlogAccessibilityA11yCoTo = lazy(() => import("./pages/BlogAccessibilityA11yCoTo"));

// Wave 165: JWT/OAuth/OIDC, NextAuth/Lucia/Clerk, React Server Components
const BlogJwtOauthCoTo = lazy(() => import("./pages/BlogJwtOauthCoTo"));
const BlogNextAuthCoTo = lazy(() => import("./pages/BlogNextAuthCoTo"));
const BlogRscCoTo = lazy(() => import("./pages/BlogRscCoTo"));

// Wave 164: Prisma/Drizzle ORM, Vitest/Playwright, XState
const BlogPrizmaDrizzleCoTo = lazy(() => import("./pages/BlogPrizmaDrizzleCoTo"));
const BlogVitestPlaywrightCoTo = lazy(() => import("./pages/BlogVitestPlaywrightCoTo"));
const BlogXstateCoTo = lazy(() => import("./pages/BlogXstateCoTo"));

// Wave 163: Astro/SvelteKit/Remix, Vite/Bundlers, Bun/Deno/Node.js
const BlogAstroCoTo = lazy(() => import("./pages/BlogAstroCoTo"));
const BlogViteCoTo = lazy(() => import("./pages/BlogViteCoTo"));
const BlogBunDenoCoTo = lazy(() => import("./pages/BlogBunDenoCoTo"));

// Wave 162: Zustand/Jotai, TanStack Query, tRPC
const BlogZustandCoTo = lazy(() => import("./pages/BlogZustandCoTo"));
const BlogTanstackQueryCoTo = lazy(() => import("./pages/BlogTanstackQueryCoTo"));
const BlogTrpcCoTo = lazy(() => import("./pages/BlogTrpcCoTo"));

// Wave 161: PostgreSQL Optimization, ClickHouse, DB Migrations
const BlogPostgresOptCoTo = lazy(() => import("./pages/BlogPostgresOptCoTo"));
const BlogClickhouseCoTo = lazy(() => import("./pages/BlogClickhouseCoTo"));
const BlogDbMigrationsCoTo = lazy(() => import("./pages/BlogDbMigrationsCoTo"));

// Wave 160: Structured Logging, Sentry, Incident Management
const BlogStructuredLoggingCoTo = lazy(() => import("./pages/BlogStructuredLoggingCoTo"));
const BlogSentryCoTo = lazy(() => import("./pages/BlogSentryCoTo"));
const BlogIncidentManagementCoTo = lazy(() => import("./pages/BlogIncidentManagementCoTo"));

// Wave 159: Caching Strategies, Rate Limiting, Resilience Patterns
const BlogCachingStrategiesCoTo = lazy(() => import("./pages/BlogCachingStrategiesCoTo"));
const BlogRateLimitingCoTo = lazy(() => import("./pages/BlogRateLimitingCoTo"));
const BlogResiliencePatternsCoTo = lazy(() => import("./pages/BlogResiliencePatternsCoTo"));

// Wave 158: Saga Pattern, Outbox Pattern, Idempotency
const BlogSagaPatternCoTo = lazy(() => import("./pages/BlogSagaPatternCoTo"));
const BlogOutboxPatternCoTo = lazy(() => import("./pages/BlogOutboxPatternCoTo"));
const BlogIdempotencyCoTo = lazy(() => import("./pages/BlogIdempotencyCoTo"));

// Wave 157: API Versioning, Real-time Comms, Envoy Proxy
const BlogApiVersioningCoTo = lazy(() => import("./pages/BlogApiVersioningCoTo"));
const BlogRealtimeCommsCoTo = lazy(() => import("./pages/BlogRealtimeCommsCoTo"));
const BlogEnvoyProxyCoTo = lazy(() => import("./pages/BlogEnvoyProxyCoTo"));

// Wave 156: DDD, Monorepo, Container Security
const BlogDddCoTo = lazy(() => import("./pages/BlogDddCoTo"));
const BlogMonorepoCoTo = lazy(() => import("./pages/BlogMonorepoCoTo"));
const BlogContainerSecCoTo = lazy(() => import("./pages/BlogContainerSecCoTo"));

// Wave 155: Serverless Architecture, CI/CD Best Practices, Technical Debt
const BlogServerlessArchCoTo = lazy(() => import("./pages/BlogServerlessArchCoTo"));
const BlogCiCdBestPracticesCoTo = lazy(() => import("./pages/BlogCiCdBestPracticesCoTo"));
const BlogTechnicalDebtCoTo = lazy(() => import("./pages/BlogTechnicalDebtCoTo"));

// Wave 154: K8s Operators, OpenTelemetry deep dive, Feature Flags
const BlogK8sOperatorsCoTo = lazy(() => import("./pages/BlogK8sOperatorsCoTo"));
const BlogOpenTelemetryCoTo = lazy(() => import("./pages/BlogOpenTelemetryCoTo"));
const BlogFeatureFlagsCoTo = lazy(() => import("./pages/BlogFeatureFlagsCoTo"));

// Wave 153: Database Sharding (Zero Trust + API Gateway already declared in Wave 138/142)
const BlogShardingCoTo = lazy(() => import("./pages/BlogShardingCoTo"));

// Wave 152: WebAssembly, GraphQL Federation, Event-Driven Architecture
const BlogWasmCoTo = lazy(() => import("./pages/BlogWasmCoTo"));
const BlogGraphQLFederationCoTo = lazy(() => import("./pages/BlogGraphQLFederationCoTo"));
const BlogEventDrivenCoTo = lazy(() => import("./pages/BlogEventDrivenCoTo"));

// Wave 151: PWA, Low-Code/No-Code, Web3
const BlogPwaCoTo = lazy(() => import("./pages/BlogPwaCoTo"));
const BlogLowCodeCoTo = lazy(() => import("./pages/BlogLowCodeCoTo"));
const BlogWeb3CoTo = lazy(() => import("./pages/BlogWeb3CoTo"));

// Wave 150: Edge Computing, Micro Frontends, QUIC/HTTP3
const BlogEdgeComputingCoTo = lazy(() => import("./pages/BlogEdgeComputingCoTo"));
const BlogMicroFrontendsCoTo = lazy(() => import("./pages/BlogMicroFrontendsCoTo"));
const BlogQuicHttp3CoTo = lazy(() => import("./pages/BlogQuicHttp3CoTo"));

// Wave 149: DevSecOps, SBOM, WebRTC
const BlogDevSecOpsCoTo = lazy(() => import("./pages/BlogDevSecOpsCoTo"));
const BlogSbomCoTo = lazy(() => import("./pages/BlogSbomCoTo"));
const BlogWebRtcCoTo = lazy(() => import("./pages/BlogWebRtcCoTo"));

// Wave 148: Platform Engineering, eBPF, FinOps
const BlogPlatformEngineeringCoTo = lazy(() => import("./pages/BlogPlatformEngineeringCoTo"));
const BlogEbpfCoTo = lazy(() => import("./pages/BlogEbpfCoTo"));
const BlogFinOpsCoTo = lazy(() => import("./pages/BlogFinOpsCoTo"));

// Wave 147: Observability, Service Mesh, gRPC
const BlogObservabilityCoTo = lazy(() => import("./pages/BlogObservabilityCoTo"));
const BlogServiceMeshCoTo = lazy(() => import("./pages/BlogServiceMeshCoTo"));
const BlogGrpcCoTo = lazy(() => import("./pages/BlogGrpcCoTo"));

// Wave 146: GitOps, DORA Metrics, Chaos Engineering
const BlogGitOpsCoTo = lazy(() => import("./pages/BlogGitOpsCoTo"));
const BlogDoraMetricsCoTo = lazy(() => import("./pages/BlogDoraMetricsCoTo"));
const BlogChaosEngineeringCoTo = lazy(() => import("./pages/BlogChaosEngineeringCoTo"));

// Wave 145: Time to Value, Activation Rate, Feature Adoption
const BlogTimeToValueCoTo = lazy(() => import("./pages/BlogTimeToValueCoTo"));
const BlogActivationRateCoTo = lazy(() => import("./pages/BlogActivationRateCoTo"));
const BlogFeatureAdoptionCoTo = lazy(() => import("./pages/BlogFeatureAdoptionCoTo"));

// Wave 144: Win Rate, Conversion Funnel, Churn Prediction
const BlogWinRateCoTo = lazy(() => import("./pages/BlogWinRateCoTo"));
const BlogConversionFunnelCoTo = lazy(() => import("./pages/BlogConversionFunnelCoTo"));
const BlogChurnPredictionCoTo = lazy(() => import("./pages/BlogChurnPredictionCoTo"));

// Wave 143: Quota Planning, NRR/GRR, Pipeline Velocity
const BlogQuotaPlanningCoTo = lazy(() => import("./pages/BlogQuotaPlanningCoTo"));
const BlogNrrGrrCoTo = lazy(() => import("./pages/BlogNrrGrrCoTo"));
const BlogPipelineVelocityCoTo = lazy(() => import("./pages/BlogPipelineVelocityCoTo"));

// Wave 142: Data Governance, GDPR, API Gateway
const BlogDataGovernanceCoTo = lazy(() => import("./pages/BlogDataGovernanceCoTo"));
const BlogGdprCoTo = lazy(() => import("./pages/BlogGdprCoTo"));
const BlogApiGatewayCoTo = lazy(() => import("./pages/BlogApiGatewayCoTo"));

// Wave 141: Event-Driven Architecture, CQRS, Data Mesh
const BlogEventDrivenArchCoTo = lazy(() => import("./pages/BlogEventDrivenArchCoTo"));
const BlogCqrsCoTo = lazy(() => import("./pages/BlogCqrsCoTo"));
const BlogDataMeshCoTo = lazy(() => import("./pages/BlogDataMeshCoTo"));

// Wave 140: AI Agents, Prompt Engineering, Fine-Tuning LLM
const BlogAiAgentsCoTo = lazy(() => import("./pages/BlogAiAgentsCoTo"));
const BlogPromptEngineeringCoTo = lazy(() => import("./pages/BlogPromptEngineeringCoTo"));
const BlogFineTuningCoTo = lazy(() => import("./pages/BlogFineTuningCoTo"));

// Wave 139: MLOps, Vector Database, RAG Pattern
const BlogMlopsCoTo = lazy(() => import("./pages/BlogMlopsCoTo"));
const BlogVectorDatabaseCoTo = lazy(() => import("./pages/BlogVectorDatabaseCoTo"));
const BlogRagPatternCoTo = lazy(() => import("./pages/BlogRagPatternCoTo"));

// Wave 138: SOC2, Data Warehouse, Zero Trust
const BlogSoc2CoTo = lazy(() => import("./pages/BlogSoc2CoTo"));
const BlogDataWarehouseCoTo = lazy(() => import("./pages/BlogDataWarehouseCoTo"));
const BlogZeroTrustCoTo = lazy(() => import("./pages/BlogZeroTrustCoTo"));

// Wave 137: Sprint Planning, Partner Ecosystem, SRE
const BlogSprintPlanningCoTo = lazy(() => import("./pages/BlogSprintPlanningCoTo"));
const BlogPartnerEcosystemCoTo = lazy(() => import("./pages/BlogPartnerEcosystemCoTo"));
const BlogSrePracticeCoTo = lazy(() => import("./pages/BlogSrePracticeCoTo"));

// Wave 136: Deal Desk, Sales Compensation, Territory Planning
const BlogDealDeskCoTo = lazy(() => import("./pages/BlogDealDeskCoTo"));
const BlogSalesCompCoTo = lazy(() => import("./pages/BlogSalesCompCoTo"));
const BlogTerritoryPlanningCoTo = lazy(() => import("./pages/BlogTerritoryPlanningCoTo"));

// Wave 135: Cap Table, SAFE Note, Vesting Schedule
const BlogCapTableCoTo = lazy(() => import("./pages/BlogCapTableCoTo"));
const BlogSafeNoteCoTo = lazy(() => import("./pages/BlogSafeNoteCoTo"));
const BlogVestingScheduleCoTo = lazy(() => import("./pages/BlogVestingScheduleCoTo"));

// Wave 134: Retention Curve, Headcount Planning, Data Room
const BlogRetentionCurveCoTo = lazy(() => import("./pages/BlogRetentionCurveCoTo"));
const BlogHeadcountPlanningCoTo = lazy(() => import("./pages/BlogHeadcountPlanningCoTo"));
const BlogDataRoomCoTo = lazy(() => import("./pages/BlogDataRoomCoTo"));

// Wave 133: Usage-Based Pricing, Two-Sided Marketplace, Growth Accounting
const BlogUsageBasedPricingCoTo = lazy(() => import("./pages/BlogUsageBasedPricingCoTo"));
const BlogTwoSidedMarketplaceCoTo = lazy(() => import("./pages/BlogTwoSidedMarketplaceCoTo"));
const BlogGrowthAccountingCoTo = lazy(() => import("./pages/BlogGrowthAccountingCoTo"));

// Wave 132: Magic Number, DAU/MAU, Viral Coefficient
const BlogMagicNumberCoTo = lazy(() => import("./pages/BlogMagicNumberCoTo"));
const BlogDauMauCoTo = lazy(() => import("./pages/BlogDauMauCoTo"));
const BlogViralCoefficientCoTo = lazy(() => import("./pages/BlogViralCoefficientCoTo"));

// Wave 131: Feature Flags, Product Discovery, CRO
const BlogFeatureFlagCoTo = lazy(() => import("./pages/BlogFeatureFlagCoTo"));
const BlogProductDiscoveryCoTo = lazy(() => import("./pages/BlogProductDiscoveryCoTo"));
const BlogCroCoToJest = lazy(() => import("./pages/BlogCroCoToJest"));

// Wave 130: Channel Sales, Annual Planning, Financial Model
const BlogChannelSalesCoTo = lazy(() => import("./pages/BlogChannelSalesCoTo"));
const BlogAnnualPlanningCoTo = lazy(() => import("./pages/BlogAnnualPlanningCoTo"));
const BlogFinancialModelCoTo = lazy(() => import("./pages/BlogFinancialModelCoTo"));

// Wave 129: Sales Playbook, Key Account Management, Board Meeting
const BlogSalesPlaybookCoTo = lazy(() => import("./pages/BlogSalesPlaybookCoTo"));
const BlogKeyAccountManagement = lazy(() => import("./pages/BlogKeyAccountManagement"));
const BlogBoardMeetingCoTo = lazy(() => import("./pages/BlogBoardMeetingCoTo"));

// Wave 128: Category Creation, Churn Prevention, Expansion Revenue
const BlogCategoryCreationCoTo = lazy(() => import("./pages/BlogCategoryCreationCoTo"));
const BlogChurnPreventionCoTo = lazy(() => import("./pages/BlogChurnPreventionCoTo"));
const BlogExpansionRevenueCoTo = lazy(() => import("./pages/BlogExpansionRevenueCoTo"));

// Wave 127: Investor Update, OTE, Champion Building
const BlogInvestorUpdateCoTo = lazy(() => import("./pages/BlogInvestorUpdateCoTo"));
const BlogOteCoToJest = lazy(() => import("./pages/BlogOteCoToJest"));
const BlogChampionBuildingCoTo = lazy(() => import("./pages/BlogChampionBuildingCoTo"));

// Wave 126: Jobs To Be Done, ESG, IPO
const BlogJobsToBeDoneCoTo = lazy(() => import("./pages/BlogJobsToBeDoneCoTo"));
const BlogEsgCoToJest = lazy(() => import("./pages/BlogEsgCoToJest"));
const BlogIpoCoToJest = lazy(() => import("./pages/BlogIpoCoToJest"));

// Wave 125: NPS, AARRR Pirate Metrics, Burn Multiple
const BlogNpsCoToJest = lazy(() => import("./pages/BlogNpsCoToJest"));
const BlogAarrrPirateMetrics = lazy(() => import("./pages/BlogAarrrPirateMetrics"));
const BlogBurnMultipleCoTo = lazy(() => import("./pages/BlogBurnMultipleCoTo"));

// Wave 124: Proposal, Term Sheet, Moat
const BlogProposalSprzedazowy = lazy(() => import("./pages/BlogProposalSprzedazowy"));
const BlogTermSheetCoTo = lazy(() => import("./pages/BlogTermSheetCoTo"));
const BlogMoatCoToJest = lazy(() => import("./pages/BlogMoatCoToJest"));

// Wave 123: Multithreading, Ramp period, Pipeline Management
const BlogMultithreadingSprzedaz = lazy(() => import("./pages/BlogMultithreadingSprzedaz"));
const BlogRampingSprzedaz = lazy(() => import("./pages/BlogRampingSprzedaz"));
const BlogPipelineManagementCoTo = lazy(() => import("./pages/BlogPipelineManagementCoTo"));

// Wave 122: Sales Forecast, Closing, Sales Ops
const BlogSalesForecastCoTo = lazy(() => import("./pages/BlogSalesForecastCoTo"));
const BlogClosingTechniqueCoTo = lazy(() => import("./pages/BlogClosingTechniqueCoTo"));
const BlogSalesOpsCoTo = lazy(() => import("./pages/BlogSalesOpsCoTo"));

// Wave 121: Demo sprzedażowe, POC, Quota
const BlogDemoSalesCoTo = lazy(() => import("./pages/BlogDemoSalesCoTo"));
const BlogPocCoToJest = lazy(() => import("./pages/BlogPocCoToJest"));
const BlogQuotaSprzedazowa = lazy(() => import("./pages/BlogQuotaSprzedazowa"));

// Wave 120: Challenger Sale, Negocjacje sprzedażowe, Prospecting B2B
const BlogChallengerSaleCoTo = lazy(() => import("./pages/BlogChallengerSaleCoTo"));
const BlogNegocjacjeSprzedazowe = lazy(() => import("./pages/BlogNegocjacjeSprzedazowe"));
const BlogProspectingB2bCoTo = lazy(() => import("./pages/BlogProspectingB2bCoTo"));

// Wave 119: Value Selling, SPIN Selling, Sales Discovery
const BlogValueSellingCoTo = lazy(() => import("./pages/BlogValueSellingCoTo"));
const BlogSpinSellingCoTo = lazy(() => import("./pages/BlogSpinSellingCoTo"));
const BlogSalesDiscoveryCoTo = lazy(() => import("./pages/BlogSalesDiscoveryCoTo"));

// Wave 118: Payback Period, ICP, ABM
const BlogPaybackPeriodCoTo = lazy(() => import("./pages/BlogPaybackPeriodCoTo"));
const BlogIcpCoToJest = lazy(() => import("./pages/BlogIcpCoToJest"));
const BlogAbmCoToJest = lazy(() => import("./pages/BlogAbmCoToJest"));

// Wave 117: MRR, Gross Margin, Rule of 40
const BlogMrrCoToJest = lazy(() => import("./pages/BlogMrrCoToJest"));
const BlogGrossMarginCoTo = lazy(() => import("./pages/BlogGrossMarginCoTo"));
const BlogRuleOf40CoTo = lazy(() => import("./pages/BlogRuleOf40CoTo"));

// Wave 116: ARR, CAC, LTV
const BlogArrCoToJest = lazy(() => import("./pages/BlogArrCoToJest"));
const BlogCacCoToJest = lazy(() => import("./pages/BlogCacCoToJest"));
const BlogLtvCoToJest = lazy(() => import("./pages/BlogLtvCoToJest"));

// Wave 115: CSAT, Customer Health Score, Land & Expand
const BlogCsatCoTo = lazy(() => import("./pages/BlogCsatCoTo"));
const BlogCustomerHealthScoreCoTo = lazy(() => import("./pages/BlogCustomerHealthScoreCoTo"));
const BlogLandAndExpandCoTo = lazy(() => import("./pages/BlogLandAndExpandCoTo"));

// Wave 114: Sales Forecasting, MEDDIC, Objection Handling
const BlogSalesForecastingCoTo = lazy(() => import("./pages/BlogSalesForecastingCoTo"));
const BlogMeddicCoTo = lazy(() => import("./pages/BlogMeddicCoTo"));
const BlogObjectionHandlingCoTo = lazy(() => import("./pages/BlogObjectionHandlingCoTo"));

// Wave 113: DCF, WACC, Break-even
const BlogDcfCoTo = lazy(() => import("./pages/BlogDcfCoTo"));
const BlogWaccCoTo = lazy(() => import("./pages/BlogWaccCoTo"));
const BlogBreakevenCoTo = lazy(() => import("./pages/BlogBreakevenCoTo"));

// Wave 112: PostgreSQL, Elasticsearch, Kafka
const BlogPostgresqlCoTo = lazy(() => import("./pages/BlogPostgresqlCoTo"));
const BlogElasticsearchCoTo = lazy(() => import("./pages/BlogElasticsearchCoTo"));
const BlogKafkaCoTo = lazy(() => import("./pages/BlogKafkaCoTo"));

// Wave 111: Terraform, MongoDB, TypeScript
const BlogTerraformCoTo = lazy(() => import("./pages/BlogTerraformCoTo"));
const BlogMongodbCoTo = lazy(() => import("./pages/BlogMongodbCoTo"));
const BlogTypescriptCoTo = lazy(() => import("./pages/BlogTypescriptCoTo"));

// Wave 110: Kubernetes, Redis, AWS
const BlogKubernetesCoTo = lazy(() => import("./pages/BlogKubernetesCoTo"));
const BlogRedisCoTo = lazy(() => import("./pages/BlogRedisCoTo"));
const BlogAwsCoTo = lazy(() => import("./pages/BlogAwsCoTo"));

// Wave 109: Docker, REST API, GraphQL
const BlogDockerCoTo = lazy(() => import("./pages/BlogDockerCoTo"));
const BlogRestApiCoTo = lazy(() => import("./pages/BlogRestApiCoTo"));
const BlogGraphqlCoTo = lazy(() => import("./pages/BlogGraphqlCoTo"));

// Wave 108: CI/CD, DevOps, Mikroserwisy
const BlogCiCdCoTo = lazy(() => import("./pages/BlogCiCdCoTo"));
const BlogDevOpsCoTo = lazy(() => import("./pages/BlogDevOpsCoTo"));
const BlogMicroservicesCoTo = lazy(() => import("./pages/BlogMicroservicesCoTo"));

// Wave 107: User Story, SLA/SLO/SLI, Postmortem
const BlogUserStoryCoTo = lazy(() => import("./pages/BlogUserStoryCoTo"));
const BlogSlaCoTo = lazy(() => import("./pages/BlogSlaCoTo"));
const BlogPostmortemCoTo = lazy(() => import("./pages/BlogPostmortemCoTo"));

// Wave 106: JTBD, Product Owner, Scrum Master
const BlogJobsToBeDeoneCoTo = lazy(() => import("./pages/BlogJobsToBeDeoneCoTo"));
const BlogProductOwnerCoTo = lazy(() => import("./pages/BlogProductOwnerCoTo"));
const BlogScrumMasterCoTo = lazy(() => import("./pages/BlogScrumMasterCoTo"));

// Wave 105: Risk Management, Sprint Retrospective, Pivot
const BlogRiskManagementCoTo = lazy(() => import("./pages/BlogRiskManagementCoTo"));
const BlogSprintRetrospectiveCoTo = lazy(() => import("./pages/BlogSprintRetrospectiveCoTo"));
const BlogPivotCoTo = lazy(() => import("./pages/BlogPivotCoTo"));

// Wave 104: TAM/SAM/SOM, KPI Dashboard, Stakeholder Management
const BlogTamSamSomCoTo = lazy(() => import("./pages/BlogTamSamSomCoTo"));
const BlogKpiDashboardCoTo = lazy(() => import("./pages/BlogKpiDashboardCoTo"));
const BlogStakeholderManagementCoTo = lazy(() => import("./pages/BlogStakeholderManagementCoTo"));

// Wave 103: SDR, Buyer Persona, Change Management
const BlogSdrCoTo = lazy(() => import("./pages/BlogSdrCoTo"));
const BlogBuyerPersonaCoTo = lazy(() => import("./pages/BlogBuyerPersonaCoTo"));
const BlogChangeManagementCoTo = lazy(() => import("./pages/BlogChangeManagementCoTo"));

// Wave 102: Feedback Loop, Community-Led Growth, QBR
const BlogFeedbackLoopCoTo = lazy(() => import("./pages/BlogFeedbackLoopCoTo"));
const BlogCommunityLedGrowthCoTo = lazy(() => import("./pages/BlogCommunityLedGrowthCoTo"));
const BlogQbrCoTo = lazy(() => import("./pages/BlogQbrCoTo"));

// Wave 101: Network Effects, Switching Costs, Competitive Moat
const BlogNetworkEffectsCoTo = lazy(() => import("./pages/BlogNetworkEffectsCoTo"));
const BlogSwitchingCostsCoTo = lazy(() => import("./pages/BlogSwitchingCostsCoTo"));
const BlogCompetitiveMoatCoTo = lazy(() => import("./pages/BlogCompetitiveMoatCoTo"));

// Wave 100: Sentiment Analysis, Growth Loop, Data-Driven Marketing
const BlogSentimentAnalysisCoTo = lazy(() => import("./pages/BlogSentimentAnalysisCoTo"));
const BlogGrowthLoopCoTo = lazy(() => import("./pages/BlogGrowthLoopCoTo"));
const BlogDataDrivenMarketingCoTo = lazy(() => import("./pages/BlogDataDrivenMarketingCoTo"));

// Wave 99: Event Tracking, Funnel Analytics, Social Listening
const BlogEventTrackingCoTo = lazy(() => import("./pages/BlogEventTrackingCoTo"));
const BlogFunnelAnalyticsCoTo = lazy(() => import("./pages/BlogFunnelAnalyticsCoTo"));
const BlogSocialListeningCoTo = lazy(() => import("./pages/BlogSocialListeningCoTo"));

// Wave 98: Burn Rate, Unit Economics, North Star Metric
const BlogBurnRateCoTo = lazy(() => import("./pages/BlogBurnRateCoTo"));
const BlogUnitEconomicsCoTo = lazy(() => import("./pages/BlogUnitEconomicsCoTo"));
const BlogNorthStarMetricCoTo = lazy(() => import("./pages/BlogNorthStarMetricCoTo"));

// Wave 97: Design Sprint, Tech Debt, Value Stream Mapping
const BlogDesignSprintCoTo = lazy(() => import("./pages/BlogDesignSprintCoTo"));
const BlogTechDebtCoTo = lazy(() => import("./pages/BlogTechDebtCoTo"));
const BlogValueStreamMappingCoTo = lazy(() => import("./pages/BlogValueStreamMappingCoTo"));

// Wave 96: OKR, Service Blueprint, MVP
const BlogOkrCoTo = lazy(() => import("./pages/BlogOkrCoTo"));
const BlogServiceBlueprintCoTo = lazy(() => import("./pages/BlogServiceBlueprintCoTo"));
const BlogMvpCoTo = lazy(() => import("./pages/BlogMvpCoTo"));

// Wave 95: User Persona, Empathy Map, Net Promoter Score
const BlogUserPersonaCoTo = lazy(() => import("./pages/BlogUserPersonaCoTo"));
const BlogEmpathyMapCoTo = lazy(() => import("./pages/BlogEmpathyMapCoTo"));
const BlogNetPromoterScoreCoTo = lazy(() => import("./pages/BlogNetPromoterScoreCoTo"));

// Wave 94: SEO Copywriting, A/B Testing, Heatmap
const BlogSeoCopywritingCoTo = lazy(() => import("./pages/BlogSeoCopywritingCoTo"));
const BlogAbTestingCoTo = lazy(() => import("./pages/BlogAbTestingCoTo"));
const BlogHeatmapCoTo = lazy(() => import("./pages/BlogHeatmapCoTo"));

// Wave 93: Accessibility, Market Segmentation, Paid Social
const BlogAccessibilityWebCoTo = lazy(() => import("./pages/BlogAccessibilityWebCoTo"));
const BlogMarketSegmentationCoTo = lazy(() => import("./pages/BlogMarketSegmentationCoTo"));
const BlogPaidSocialCoTo = lazy(() => import("./pages/BlogPaidSocialCoTo"));

// Wave 92: Wireframe, Pricing Page, Sales Velocity
const BlogWireframeCoTo = lazy(() => import("./pages/BlogWireframeCoTo"));
const BlogPricingPageOptimizationCoTo = lazy(() => import("./pages/BlogPricingPageOptimizationCoTo"));
const BlogSalesVelocityCoTo = lazy(() => import("./pages/BlogSalesVelocityCoTo"));

// Wave 91: Email Deliverability, Customer LTV, Content Distribution
const BlogEmailDeliverabilityCoTo = lazy(() => import("./pages/BlogEmailDeliverabilityCoTo"));
const BlogCustomerLtvCoTo = lazy(() => import("./pages/BlogCustomerLtvCoTo"));
const BlogContentDistributionCoTo = lazy(() => import("./pages/BlogContentDistributionCoTo"));

// Wave 90: Design System, Subscription Model, UX Audit
const BlogDesignSystemCoTo = lazy(() => import("./pages/BlogDesignSystemCoTo"));
const BlogSubscriptionModelCoTo = lazy(() => import("./pages/BlogSubscriptionModelCoTo"));
const BlogUxAuditCoTo = lazy(() => import("./pages/BlogUxAuditCoTo"));

// Wave 89: Brand Guidelines, Information Architecture, Revenue Model
const BlogBrandGuidelinesCoTo = lazy(() => import("./pages/BlogBrandGuidelinesCoTo"));
const BlogInformationArchitectureCoTo = lazy(() => import("./pages/BlogInformationArchitectureCoTo"));
const BlogRevenueModelCoTo = lazy(() => import("./pages/BlogRevenueModelCoTo"));

// Wave 88: Lead Scoring, SaaS Metrics
const BlogLeadScoringCoTo = lazy(() => import("./pages/BlogLeadScoringCoTo"));
const BlogSaasMetricsCoTo = lazy(() => import("./pages/BlogSaasMetricsCoTo"));

// Wave 87: Service Design, Churn Analysis, Programmatic Advertising
const BlogServiceDesignCoTo = lazy(() => import("./pages/BlogServiceDesignCoTo"));
const BlogChurnAnalysisCoTo = lazy(() => import("./pages/BlogChurnAnalysisCoTo"));
const BlogProgrammaticAdvertisingCoTo = lazy(() => import("./pages/BlogProgrammaticAdvertisingCoTo"));

// Wave 86: Usability Testing, Communication Strategy, Positioning Statement
const BlogUsabilityTestingCoTo = lazy(() => import("./pages/BlogUsabilityTestingCoTo"));
const BlogCommunicationStrategyCoTo = lazy(() => import("./pages/BlogCommunicationStrategyCoTo"));
const BlogPositioningStatementCoTo = lazy(() => import("./pages/BlogPositioningStatementCoTo"));

// Wave 85: Customer Experience Management, Product Analytics, Cohort Analysis
const BlogCustomerExperienceManagementCoTo = lazy(() => import("./pages/BlogCustomerExperienceManagementCoTo"));
const BlogProductAnalyticsCoTo = lazy(() => import("./pages/BlogProductAnalyticsCoTo"));
const BlogCohortAnalysisCoTo = lazy(() => import("./pages/BlogCohortAnalysisCoTo"));

// Wave 84: Brand Architecture, Target Audience, Voice of Customer
const BlogBrandArchitectureCoTo = lazy(() => import("./pages/BlogBrandArchitectureCoTo"));
const BlogTargetAudienceCoTo = lazy(() => import("./pages/BlogTargetAudienceCoTo"));
const BlogVoiceOfCustomerCoTo = lazy(() => import("./pages/BlogVoiceOfCustomerCoTo"));

// Wave 83: Visual Identity, Multichannel Marketing, Competitive Intelligence
const BlogVisualIdentityCoTo = lazy(() => import("./pages/BlogVisualIdentityCoTo"));
const BlogMultichannelMarketingCoTo = lazy(() => import("./pages/BlogMultichannelMarketingCoTo"));
const BlogCompetitiveIntelligenceCoTo = lazy(() => import("./pages/BlogCompetitiveIntelligenceCoTo"));

// Wave 82: Data Storytelling, Brand Equity, Sponsorship Marketing
const BlogDataStorytellingCoTo = lazy(() => import("./pages/BlogDataStorytellingCoTo"));
const BlogBrandEquityCoTo = lazy(() => import("./pages/BlogBrandEquityCoTo"));
const BlogSponsorshipMarketingCoTo = lazy(() => import("./pages/BlogSponsorshipMarketingCoTo"));

// Wave 81: Marketing Mix, Product Launch, Behavioral Marketing
const BlogMarketingMixCoTo = lazy(() => import("./pages/BlogMarketingMixCoTo"));
const BlogProductLaunchCoTo = lazy(() => import("./pages/BlogProductLaunchCoTo"));
const BlogBehavioralMarketingCoTo = lazy(() => import("./pages/BlogBehavioralMarketingCoTo"));

// Wave 80: Topic Clusters, Zero-Party Data, Brand Ambassador
const BlogTopicClustersCoTo = lazy(() => import("./pages/BlogTopicClustersCoTo"));
const BlogZeroPartyDataCoTo = lazy(() => import("./pages/BlogZeroPartyDataCoTo"));
const BlogBrandAmbassadorCoTo = lazy(() => import("./pages/BlogBrandAmbassadorCoTo"));

// Wave 79: Dark Social, Content Audit, Employee Advocacy
const BlogDarkSocialCoTo = lazy(() => import("./pages/BlogDarkSocialCoTo"));
const BlogContentAuditCoTo = lazy(() => import("./pages/BlogContentAuditCoTo"));
const BlogEmployeeAdvocacyCoTo = lazy(() => import("./pages/BlogEmployeeAdvocacyCoTo"));

// Wave 78: Thought Leadership, Public Relations, Co-Marketing
const BlogThoughtLeadershipCoTo = lazy(() => import("./pages/BlogThoughtLeadershipCoTo"));
const BlogPublicRelationsCoTo = lazy(() => import("./pages/BlogPublicRelationsCoTo"));
const BlogCoMarketingCoTo = lazy(() => import("./pages/BlogCoMarketingCoTo"));

// Wave 77: Creator Economy, Micro Influencer, Brand Storytelling
const BlogCreatorEconomyCoTo = lazy(() => import("./pages/BlogCreatorEconomyCoTo"));
const BlogMicroInfluencerCoTo = lazy(() => import("./pages/BlogMicroInfluencerCoTo"));
const BlogBrandStorytellingCoTo = lazy(() => import("./pages/BlogBrandStorytellingCoTo"));

// Wave 76: Neuromarketing, Pricing Psychology, FOMO Marketing
const BlogNeuromarketingCoTo = lazy(() => import("./pages/BlogNeuromarketingCoTo"));
const BlogPricingPsychologyCoTo = lazy(() => import("./pages/BlogPricingPsychologyCoTo"));
const BlogFOMOMarketingCoTo = lazy(() => import("./pages/BlogFOMOMarketingCoTo"));

// Wave 75: Loyalty Program, Personalization Marketing, Mobile Marketing
const BlogLoyaltyProgramCoTo = lazy(() => import("./pages/BlogLoyaltyProgramCoTo"));
const BlogPersonalizationMarketingCoTo = lazy(() => import("./pages/BlogPersonalizationMarketingCoTo"));
const BlogMobileMarketingCoTo = lazy(() => import("./pages/BlogMobileMarketingCoTo"));

// Wave 74: Cause Marketing, Customer Acquisition, Customer Retention
const BlogCauseMarketingCoTo = lazy(() => import("./pages/BlogCauseMarketingCoTo"));
const BlogCustomerAcquisitionCoTo = lazy(() => import("./pages/BlogCustomerAcquisitionCoTo"));
const BlogCustomerRetentionCoTo = lazy(() => import("./pages/BlogCustomerRetentionCoTo"));

// Wave 73: Account-Based Marketing, Inbound Marketing, Outbound Marketing
const BlogAccountBasedMarketingCoTo = lazy(() => import("./pages/BlogAccountBasedMarketingCoTo"));
const BlogInboundMarketingCoTo = lazy(() => import("./pages/BlogInboundMarketingCoTo"));
const BlogOutboundMarketingCoTo = lazy(() => import("./pages/BlogOutboundMarketingCoTo"));

// Wave 72: Event Marketing, Brand Activation, Social Commerce
const BlogEventMarketingCoTo = lazy(() => import("./pages/BlogEventMarketingCoTo"));
const BlogBrandActivationCoTo = lazy(() => import("./pages/BlogBrandActivationCoTo"));
const BlogSocialCommerceCoTo = lazy(() => import("./pages/BlogSocialCommerceCoTo"));

// Wave 71: Viral Marketing, Word of Mouth, Guerrilla Marketing
const BlogViralMarketingCoTo = lazy(() => import("./pages/BlogViralMarketingCoTo"));
const BlogWordOfMouthCoTo = lazy(() => import("./pages/BlogWordOfMouthCoTo"));
const BlogGuerrillaMarketingCoTo = lazy(() => import("./pages/BlogGuerrillaMarketingCoTo"));

// Wave 70: Bootstrapping, Lean Startup, Kanban
const BlogBootstrappingCoTo = lazy(() => import("./pages/BlogBootstrappingCoTo"));
const BlogLeanStartupCoTo = lazy(() => import("./pages/BlogLeanStartupCoTo"));
const BlogKanbanCoTo = lazy(() => import("./pages/BlogKanbanCoTo"));

// Wave 69: OKR, Product Marketing, Employer Branding
const BlogOKRCoTo = lazy(() => import("./pages/BlogOKRCoTo"));
const BlogProductMarketingCoTo = lazy(() => import("./pages/BlogProductMarketingCoTo"));
const BlogEmployerBrandingCoTo = lazy(() => import("./pages/BlogEmployerBrandingCoTo"));

// Wave 68: Pricing Strategy, Micro-Moments, Buyer Journey
const BlogPricingStrategyCoTo = lazy(() => import("./pages/BlogPricingStrategyCoTo"));
const BlogMicroMomentsCoTo = lazy(() => import("./pages/BlogMicroMomentsCoTo"));
const BlogBuyerJourneyCoTo = lazy(() => import("./pages/BlogBuyerJourneyCoTo"));

// Wave 67: Ambassador Marketing, Go-to-Market Strategy, Revenue Operations
const BlogAmbassadorMarketingCoTo = lazy(() => import("./pages/BlogAmbassadorMarketingCoTo"));
const BlogGoToMarketCoTo = lazy(() => import("./pages/BlogGoToMarketCoTo"));
const BlogRevenueOperationsCoTo = lazy(() => import("./pages/BlogRevenueOperationsCoTo"));

// Wave 66: Design Thinking, Sales Funnel, Community Marketing
const BlogDesignThinkingCoTo = lazy(() => import("./pages/BlogDesignThinkingCoTo"));
const BlogSalesFunnelCoTo = lazy(() => import("./pages/BlogSalesFunnelCoTo"));
const BlogCommunityMarketingCoTo = lazy(() => import("./pages/BlogCommunityMarketingCoTo"));

// Wave 65: Brand Positioning, TAM SAM SOM, User Onboarding
const BlogBrandPositioningCoTo = lazy(() => import("./pages/BlogBrandPositioningCoTo"));
const BlogTAMSAMSOMCoTo = lazy(() => import("./pages/BlogTAMSAMSOMCoTo"));
const BlogUserOnboardingCoTo = lazy(() => import("./pages/BlogUserOnboardingCoTo"));

// Wave 64: Customer Data Platform, Lead Nurturing, Account Management
const BlogCustomerDataPlatformCoTo = lazy(() => import("./pages/BlogCustomerDataPlatformCoTo"));
const BlogLeadNurturingCoTo = lazy(() => import("./pages/BlogLeadNurturingCoTo"));
const BlogAccountManagementCoTo = lazy(() => import("./pages/BlogAccountManagementCoTo"));

// Wave 63: Win/Loss Analysis, Email Marketing CoTo, Retention Marketing
const BlogWinLossAnalysisCoTo = lazy(() => import("./pages/BlogWinLossAnalysisCoTo"));
const BlogEmailMarketingCoTo = lazy(() => import("./pages/BlogEmailMarketingCoTo"));
const BlogRetentionMarketingCoTo = lazy(() => import("./pages/BlogRetentionMarketingCoTo"));

// Wave 62: Sales Enablement, Zero-Click Search, Market Research
const BlogSalesEnablementCoTo = lazy(() => import("./pages/BlogSalesEnablementCoTo"));
const BlogZeroClickSearchCoTo = lazy(() => import("./pages/BlogZeroClickSearchCoTo"));
const BlogMarketResearchCoTo = lazy(() => import("./pages/BlogMarketResearchCoTo"));

// Wave 61: Attribution Modeling, Native Advertising, Customer Segmentation
const BlogAttributionModelingCoTo = lazy(() => import("./pages/BlogAttributionModelingCoTo"));
const BlogNativeAdvertisingCoTo = lazy(() => import("./pages/BlogNativeAdvertisingCoTo"));
const BlogCustomerSegmentationCoTo = lazy(() => import("./pages/BlogCustomerSegmentationCoTo"));

// Wave 60: Hreflang, Robots.txt
const BlogHreflangCoTo = lazy(() => import("./pages/BlogHreflangCoTo"));
const BlogRobotsTxtCoTo = lazy(() => import("./pages/BlogRobotsTxtCoTo"));

// Wave 59: Quality Score, Smart Bidding, Performance Max
const BlogQualityScoreCoTo = lazy(() => import("./pages/BlogQualityScoreCoTo"));
const BlogSmartBiddingCoTo = lazy(() => import("./pages/BlogSmartBiddingCoTo"));
const BlogPerformanceMaxCoTo = lazy(() => import("./pages/BlogPerformanceMaxCoTo"));

// Wave 58: E-E-A-T, Crawl Budget, UGC
const BlogEEATCoTo = lazy(() => import("./pages/BlogEEATCoTo"));
const BlogCrawlBudgetCoTo = lazy(() => import("./pages/BlogCrawlBudgetCoTo"));
const BlogUGCCoTo = lazy(() => import("./pages/BlogUGCCoTo"));

// Wave 57: XML Sitemap, Bounce Rate, Referral Marketing
const BlogXMLSitemapCoTo = lazy(() => import("./pages/BlogXMLSitemapCoTo"));
const BlogBounceRateCoTo = lazy(() => import("./pages/BlogBounceRateCoTo"));
const BlogReferralMarketingCoTo = lazy(() => import("./pages/BlogReferralMarketingCoTo"));

// Wave 56: Long Tail Keywords, Page Speed, JTBD
const BlogLongTailKeywordsCoTo = lazy(() => import("./pages/BlogLongTailKeywordsCoTo"));
const BlogPageSpeedCoTo = lazy(() => import("./pages/BlogPageSpeedCoTo"));
const BlogJTBDCoTo = lazy(() => import("./pages/BlogJTBDCoTo"));

// Wave 55: Social Proof, Digital PR, Voice Search
const BlogSocialProofCoTo = lazy(() => import("./pages/BlogSocialProofCoTo"));
const BlogDigitalPRCoTo = lazy(() => import("./pages/BlogDigitalPRCoTo"));
const BlogVoiceSearchCoTo = lazy(() => import("./pages/BlogVoiceSearchCoTo"));

// Wave 54: Internal Linking, Keyword Research, Google Business Profile
const BlogInternalLinkingCoTo = lazy(() => import("./pages/BlogInternalLinkingCoTo"));
const BlogKeywordResearchCoTo = lazy(() => import("./pages/BlogKeywordResearchCoTo"));
const BlogGoogleBusinessProfileCoTo = lazy(() => import("./pages/BlogGoogleBusinessProfileCoTo"));

// Wave 53: Meta Tagi, Featured Snippets, Product-Led Growth
const BlogMetaTagiCoTo = lazy(() => import("./pages/BlogMetaTagiCoTo"));
const BlogFeaturedSnippetsCoTo = lazy(() => import("./pages/BlogFeaturedSnippetsCoTo"));
const BlogProductLedGrowthCoTo = lazy(() => import("./pages/BlogProductLedGrowthCoTo"));

// Wave 52: Schema Markup, E-commerce Marketing
const BlogSchemaMarkupCoTo = lazy(() => import("./pages/BlogSchemaMarkupCoTo"));
const BlogEcommerceMarketingCoTo = lazy(() => import("./pages/BlogEcommerceMarketingCoTo"));

// Wave 51: Growth Marketing
const BlogGrowthMarketingCoTo = lazy(() => import("./pages/BlogGrowthMarketingCoTo"));

// Wave 50: SEO Lokalne, Technical SEO
const BlogSEOLokalneCoTo = lazy(() => import("./pages/BlogSEOLokalneCoTo"));
const BlogTechnicalSEOCoTo = lazy(() => import("./pages/BlogTechnicalSEOCoTo"));

// Wave 49: ICP, Content Strategy
const BlogICPCoTo = lazy(() => import("./pages/BlogICPCoTo"));
const BlogContentStrategyCoTo = lazy(() => import("./pages/BlogContentStrategyCoTo"));

// Wave 48: Marketing Automation
const BlogMarketingAutomationCoTo = lazy(() => import("./pages/BlogMarketingAutomationCoTo"));

// Wave 47: Affiliate Marketing
const BlogAffiliateMarketingCoTo = lazy(() => import("./pages/BlogAffiliateMarketingCoTo"));

// Wave 46: SaaS Pricing, Email Sequence
const BlogSaaSPricingCoTo = lazy(() => import("./pages/BlogSaaSPricingCoTo"));
const BlogEmailSequenceCoTo = lazy(() => import("./pages/BlogEmailSequenceCoTo"));

// Wave 45: LinkedIn Marketing, Content Calendar, RevOps
const BlogLinkedInMarketingCoTo = lazy(() => import("./pages/BlogLinkedInMarketingCoTo"));
const BlogContentCalendarCoTo = lazy(() => import("./pages/BlogContentCalendarCoTo"));
const BlogRevOpsCoTo = lazy(() => import("./pages/BlogRevOpsCoTo"));

// Wave 44: UTM, CRO, Heatmapy
const BlogUTMCoToJest = lazy(() => import("./pages/BlogUTMCoToJest"));
const BlogCROCoTo = lazy(() => import("./pages/BlogCROCoTo"));
const BlogHeatmapyCoTo = lazy(() => import("./pages/BlogHeatmapyCoTo"));

// Wave 43: Storytelling, Podcast Marketing
const BlogStorytellingCoTo = lazy(() => import("./pages/BlogStorytellingCoTo"));
const BlogPodcastMarketingCoTo = lazy(() => import("./pages/BlogPodcastMarketingCoTo"));

// Wave 42: Freemium, Social Selling
const BlogFreemiumCoTo = lazy(() => import("./pages/BlogFreemiumCoTo"));
const BlogSocialSellingCoTo = lazy(() => import("./pages/BlogSocialSellingCoTo"));

// Wave 41: Programmatic Advertising, Customer Success
const BlogProgrammaticCoTo = lazy(() => import("./pages/BlogProgrammaticCoTo"));
const BlogCustomerSuccessCoTo = lazy(() => import("./pages/BlogCustomerSuccessCoTo"));

// Wave 40: GTM Strategy, ABM, Demand Generation
const BlogGTMStrategyCoTo = lazy(() => import("./pages/BlogGTMStrategyCoTo"));
const BlogABMCoTo = lazy(() => import("./pages/BlogABMCoTo"));
const BlogDemandGenerationCoTo = lazy(() => import("./pages/BlogDemandGenerationCoTo"));

// Wave 39: Product-Market Fit, Brand Awareness, B2B Marketing
const BlogProductMarketFit = lazy(() => import("./pages/BlogProductMarketFit"));
const BlogBrandAwarenessCoTo = lazy(() => import("./pages/BlogBrandAwarenessCoTo"));
const BlogB2BMarketingCoTo = lazy(() => import("./pages/BlogB2BMarketingCoTo"));

// Wave 38: USP, Value Proposition, Cold Email
const BlogUSPCoToJest = lazy(() => import("./pages/BlogUSPCoToJest"));
const BlogValuePropositionCoTo = lazy(() => import("./pages/BlogValuePropositionCoTo"));
const BlogColdEmailCoTo = lazy(() => import("./pages/BlogColdEmailCoTo"));

// Wave 37: Lejek Sprzedazowy, Churn Rate, Onboarding, Omnichannel
const BlogLejekSprzedazowy = lazy(() => import("./pages/BlogLejekSprzedazowy"));
const BlogChurnRateCoTo = lazy(() => import("./pages/BlogChurnRateCoTo"));
const BlogOnboardingCoToJest = lazy(() => import("./pages/BlogOnboardingCoToJest"));
const BlogOmnichannelCoTo = lazy(() => import("./pages/BlogOmnichannelCoTo"));

// Wave 36: Customer Journey, CRM, Influencer Marketing
const BlogCustomerJourneyCoTo = lazy(() => import("./pages/BlogCustomerJourneyCoTo"));
const BlogCRMCoToJest = lazy(() => import("./pages/BlogCRMCoToJest"));
const BlogInfluencerMarketingCoTo = lazy(() => import("./pages/BlogInfluencerMarketingCoTo"));

// Wave 35: Webinar, Persona, A/B Testing
const BlogWebinarCoToJest = lazy(() => import("./pages/BlogWebinarCoToJest"));
const BlogPersonaMarketingowa = lazy(() => import("./pages/BlogPersonaMarketingowa"));
const BlogABTestingCoTo = lazy(() => import("./pages/BlogABTestingCoTo"));

// Wave 34: Growth Hacking, Retargeting, Lead Generation
const BlogGrowthHackingCoTo = lazy(() => import("./pages/BlogGrowthHackingCoTo"));
const BlogRetargetingCoTo = lazy(() => import("./pages/BlogRetargetingCoTo"));
const BlogLeadGenerationCoTo = lazy(() => import("./pages/BlogLeadGenerationCoTo"));

// Wave 33: Umowa B2B, CEIDG
const BlogUmowaBCoToJest = lazy(() => import("./pages/BlogUmowaBCoToJest"));
const BlogCEIDGCoToJest = lazy(() => import("./pages/BlogCEIDGCoToJest"));

// Wave 32: Leasing, Hipoteka, KRS, Outsourcing, Faktoring
const BlogLeasingCoToJest = lazy(() => import("./pages/BlogLeasingCoToJest"));
const BlogHipotekaCoToJest = lazy(() => import("./pages/BlogHipotekaCoToJest"));
const BlogKRSCoToJest = lazy(() => import("./pages/BlogKRSCoToJest"));
const BlogOutsourcingCoToJest = lazy(() => import("./pages/BlogOutsourcingCoToJest"));
const BlogFaktoringCoToJest = lazy(() => import("./pages/BlogFaktoringCoToJest"));

// Wave 31: VAT, PIT, REGON, ZUS
const BlogVATCoToJest = lazy(() => import("./pages/BlogVATCoToJest"));
const BlogPITCoToJest = lazy(() => import("./pages/BlogPITCoToJest"));
const BlogREGONCoToJest = lazy(() => import("./pages/BlogREGONCoToJest"));
const BlogZUSCoToJest = lazy(() => import("./pages/BlogZUSCoToJest"));

// Wave 30: Freelancer, NIP
const BlogFreelancerCoToJest = lazy(() => import("./pages/BlogFreelancerCoToJest"));
const BlogNIPCoToJest = lazy(() => import("./pages/BlogNIPCoToJest"));

// Wave 29: NPS, Startup, SaaS, UX Design, MRR/ARR
const BlogNPSCoToJest = lazy(() => import("./pages/BlogNPSCoToJest"));
const BlogStartupCoToJest = lazy(() => import("./pages/BlogStartupCoToJest"));
const BlogSaaSCoToJest = lazy(() => import("./pages/BlogSaaSCoToJest"));
const BlogUXDesignCoTo = lazy(() => import("./pages/BlogUXDesignCoTo"));
const BlogMRRARRCoTo = lazy(() => import("./pages/BlogMRRARRCoTo"));

// Wave 28: B2B, Venture Capital, Pitch deck, Cross-selling, ERP
const BlogB2BCoToJest = lazy(() => import("./pages/BlogB2BCoToJest"));
const BlogVentureCapital = lazy(() => import("./pages/BlogVentureCapital"));
const BlogPitchDeck = lazy(() => import("./pages/BlogPitchDeck"));
const BlogCrossSellingCoTo = lazy(() => import("./pages/BlogCrossSellingCoTo"));
const BlogERPCoToJest = lazy(() => import("./pages/BlogERPCoToJest"));

// Wave 27: Agile, EBITDA, ROI, MVP, Due diligence
const BlogAgileCoTo = lazy(() => import("./pages/BlogAgileCoTo"));
const BlogEbitdaCoToJest = lazy(() => import("./pages/BlogEbitdaCoToJest"));
const BlogROICoToJest = lazy(() => import("./pages/BlogROICoToJest"));
const BlogMVPCoToJest = lazy(() => import("./pages/BlogMVPCoToJest"));
const BlogDueDiligence = lazy(() => import("./pages/BlogDueDiligence"));

// Wave 26: CPM, Scrum, Digital marketing
const BlogCPMCoTo = lazy(() => import("./pages/BlogCPMCoTo"));
const BlogScrumCoToJest = lazy(() => import("./pages/BlogScrumCoToJest"));
const BlogDigitalMarketingCoTo = lazy(() => import("./pages/BlogDigitalMarketingCoTo"));

// Wave 25: Cold calling, Lead magnet, Trener personalny
const BlogColdCallingCoTo = lazy(() => import("./pages/BlogColdCallingCoTo"));
const BlogLeadMagnetCoTo = lazy(() => import("./pages/BlogLeadMagnetCoTo"));
const StronaInternetowaDlaTrenera = lazy(() => import("./pages/StronaInternetowaDlaTrenera"));

// Wave 24: Dropshipping, Allegro, E-commerce, Inbound marketing, Lejek
const BlogDropshippingCoToJest = lazy(() => import("./pages/BlogDropshippingCoToJest"));
const BlogJakSprzedawacNaAllegro = lazy(() => import("./pages/BlogJakSprzedawacNaAllegro"));
const BlogEcommerceCoToJest = lazy(() => import("./pages/BlogEcommerceCoToJest"));

// Wave 23: GTM, Link building, Core Web Vitals, Google Search Console
const BlogGoogleTagManager = lazy(() => import("./pages/BlogGoogleTagManager"));
const BlogLinkBuilding = lazy(() => import("./pages/BlogLinkBuilding"));
const BlogCoreWebVitals = lazy(() => import("./pages/BlogCoreWebVitals"));
const BlogGoogleSearchConsole = lazy(() => import("./pages/BlogGoogleSearchConsole"));

// Wave 22: KPI, API, Konwersja, CTR, Fotograf
const BlogKPICoToJest = lazy(() => import("./pages/BlogKPICoToJest"));
const BlogAPICoToJest = lazy(() => import("./pages/BlogAPICoToJest"));
const BlogKonwersjaCoTo = lazy(() => import("./pages/BlogKonwersjaCoTo"));
const BlogCTRCoToJest = lazy(() => import("./pages/BlogCTRCoToJest"));
const StronaInternetowaDlaFotografa = lazy(() => import("./pages/StronaInternetowaDlaFotografa"));

// Wave 21: Newsletter, CMS, marketing afiliacyjny, prawnik, landing page
const BlogNewsletterCoTo = lazy(() => import("./pages/BlogNewsletterCoTo"));
const BlogMarketingAfiliacyjny = lazy(() => import("./pages/BlogMarketingAfiliacyjny"));
const BlogCMSCoToJest = lazy(() => import("./pages/BlogCMSCoToJest"));
const StronaInternetowaDlaPrawnika = lazy(() => import("./pages/StronaInternetowaDlaPrawnika"));

// Wave 20: Pozycjonowanie sklepu, branding, UI/UX, stomatolog, SEO e-commerce
const BlogPozycjonowanieSklepu = lazy(() => import("./pages/BlogPozycjonowanieSklepu"));
const BlogSEOEcommercePoradnik = lazy(() => import("./pages/BlogSEOEcommercePoradnik"));
const BlogBrandingCoTo = lazy(() => import("./pages/BlogBrandingCoTo"));
const BlogUIUXCoTo = lazy(() => import("./pages/BlogUIUXCoTo"));
const BlogUXAudit = lazy(() => import("./pages/BlogUXAudit"));
const StronaInternetowaDlaStomatologa = lazy(() => import("./pages/StronaInternetowaDlaStomatologa"));

// Wave 19: Hosting, SSL, WordPress co to, domena, jak pozycjonować
const BlogCoToJestHosting = lazy(() => import("./pages/BlogCoToJestHosting"));
const BlogCertyfikatSSL = lazy(() => import("./pages/BlogCertyfikatSSL"));
const BlogWordPressCoTo = lazy(() => import("./pages/BlogWordPressCoTo"));
const BlogDomenaCoToJest = lazy(() => import("./pages/BlogDomenaCoToJest"));
const BlogJakPozycjonowacStrone = lazy(() => import("./pages/BlogJakPozycjonowacStrone"));

// Wave 18: Google Ads co to, SEO co to, pozycjonowanie co to, WooCommerce, kurs Google Ads
const BlogGoogleAdsCoTo = lazy(() => import("./pages/BlogGoogleAdsCoTo"));
const BlogSEOCoToJest = lazy(() => import("./pages/BlogSEOCoToJest"));
const BlogPozycjonowanieCoTo = lazy(() => import("./pages/BlogPozycjonowanieCoTo"));
const SklepWooCommerce = lazy(() => import("./pages/SklepWooCommerce"));
const BlogKursGoogleAds = lazy(() => import("./pages/BlogKursGoogleAds"));

// Wave 17: Shopify, cenniki stron, wizytówka Google, sklep cena
const BlogShopifyPolska = lazy(() => import("./pages/BlogShopifyPolska"));
const BlogTworzenieStronCennik = lazy(() => import("./pages/BlogTworzenieStronCennik"));
const BlogWizytowkaGoogle = lazy(() => import("./pages/BlogWizytowkaGoogle"));
const BlogGoogleMyBusiness = lazy(() => import("./pages/BlogGoogleMyBusiness"));
const BlogSklepInternetowyCena = lazy(() => import("./pages/BlogSklepInternetowyCena"));

// Wave 16: Google Moja Firma, marketing automation, lead gen, SEO Lublin, restauracja
const GoogleMojaFirma = lazy(() => import("./pages/GoogleMojaFirma"));
const MarketingAutomation = lazy(() => import("./pages/MarketingAutomation"));
const LeadGeneration = lazy(() => import("./pages/LeadGeneration"));
const AgencjaSEOLublin = lazy(() => import("./pages/AgencjaSEOLublin"));
const StronaInternetowaDlaRestauracji = lazy(() => import("./pages/StronaInternetowaDlaRestauracji"));

// Wave 15: FB/IG Ads, email marketing, content marketing, strona cena, pozycjonowanie cena
const StronaInternetowaCena = lazy(() => import("./pages/StronaInternetowaCena"));
const ReklamaFacebook = lazy(() => import("./pages/ReklamaFacebook"));
const EmailMarketing = lazy(() => import("./pages/EmailMarketing"));
const BlogContentMarketingCoTo = lazy(() => import("./pages/BlogContentMarketingCoTo"));
const ReklamaInstagram = lazy(() => import("./pages/ReklamaInstagram"));
const BlogPozycjonowanieStronCena = lazy(() => import("./pages/BlogPozycjonowanieStronCena"));

// Wave 14: Social media, rebranding, copywriting, WordPress, identyfikacja wizualna
const SocialMediaMarketing = lazy(() => import("./pages/SocialMediaMarketing"));
const BlogRebrandingCoTo = lazy(() => import("./pages/BlogRebrandingCoTo"));
const BlogCopywritingCoTo = lazy(() => import("./pages/BlogCopywritingCoTo"));
const StronaWordPress = lazy(() => import("./pages/StronaWordPress"));
const IdentyfikacjaWizualnaFirmy = lazy(() => import("./pages/IdentyfikacjaWizualnaFirmy"));
const BlogCopywritingCennik = lazy(() => import("./pages/BlogCopywritingCennik"));

// Wave 13: Google Ads campaign, B2B marketing, optimization, one-page, SEO cities
const KampaniaGoogleAds = lazy(() => import("./pages/KampaniaGoogleAds"));
const MarketingB2B = lazy(() => import("./pages/MarketingB2B"));
const AudytStronyInternetowej = lazy(() => import("./pages/AudytStronyInternetowej"));
const OptymalizacjaStronyInternetowej = lazy(() => import("./pages/OptymalizacjaStronyInternetowej"));
const StronaOnePage = lazy(() => import("./pages/StronaOnePage"));
const AgencjaSEOWroclaw = lazy(() => import("./pages/AgencjaSEOWroclaw"));
const BlogLandingPageCena = lazy(() => import("./pages/BlogLandingPageCena"));

// Wave 12: High-value service pages + city SEO + blog
const TworzenieStronWWW = lazy(() => import("./pages/TworzenieStronWWW"));
const StronyInternetoweDlaFirm = lazy(() => import("./pages/StronyInternetoweDlaFirm"));
const PozycjonowanieLokalne = lazy(() => import("./pages/PozycjonowanieLokalne"));
const TworzenieSklepowInternetowych = lazy(() => import("./pages/TworzenieSklepowInternetowych"));
const ProjektStronyInternetowej = lazy(() => import("./pages/ProjektStronyInternetowej"));
const AgencjaSEOKrakow = lazy(() => import("./pages/AgencjaSEOKrakow"));
const TworzenieStronBialystok = lazy(() => import("./pages/TworzenieStronBialystok"));
const BlogJakSprzedawacWInternecie = lazy(() => import("./pages/BlogJakSprzedawacWInternecie"));

// Other service pages
const IdentyfikacjaWizualna = lazy(() => import("./pages/IdentyfikacjaWizualna"));
const AgencjaGraficzna = lazy(() => import("./pages/AgencjaGraficzna"));
const EcommerceTworzenie = lazy(() => import("./pages/EcommerceTworzenie"));
const SklepyInternetowe = lazy(() => import("./pages/SklepyInternetowe"));
const ContentMarketing = lazy(() => import("./pages/ContentMarketing"));

// Wave 219-221: New blog + service + city pages
const BlogKosztSEO = lazy(() => import("./pages/BlogKosztSEO"));
const BlogMarketingDlaFirmy = lazy(() => import("./pages/BlogMarketingDlaFirmy"));
const AgencjaMarketingowaKielce = lazy(() => import("./pages/AgencjaMarketingowaKielce"));
const BlogEcommercePoradnik = lazy(() => import("./pages/BlogEcommercePoradnik"));
const StronyInternetoweZabrze = lazy(() => import("./pages/StronyInternetoweZabrze"));
const BlogContentMarketingPoradnik = lazy(() => import("./pages/BlogContentMarketingPoradnik"));
const StronyInternetoweWalbrzych = lazy(() => import("./pages/StronyInternetoweWalbrzych"));
const BlogSEOTechniczne = lazy(() => import("./pages/BlogSEOTechniczne"));
const BlogAutomatyzacjaMarketingu = lazy(() => import("./pages/BlogAutomatyzacjaMarketingu"));
const PozycjonowanieGliwice = lazy(() => import("./pages/PozycjonowanieGliwice"));
const BlogWizerunekFirmy = lazy(() => import("./pages/BlogWizerunekFirmy"));
const AgencjaMarketingowaCzestochowa = lazy(() => import("./pages/AgencjaMarketingowaCzestochowa"));
const BlogEmailMarketingAutomation = lazy(() => import("./pages/BlogEmailMarketingAutomation"));
const BlogMarketingNieruchomosci = lazy(() => import("./pages/BlogMarketingNieruchomosci"));
const AgencjaMarketingowaBialystok = lazy(() => import("./pages/AgencjaMarketingowaBialystok"));
const BlogOptymalizacjaGoogleAds = lazy(() => import("./pages/BlogOptymalizacjaGoogleAds"));
const PozycjonowanieSosnowiec = lazy(() => import("./pages/PozycjonowanieSosnowiec"));
const BlogFotografiaArchitektura = lazy(() => import("./pages/BlogFotografiaArchitektura"));
const AgencjaMarketingowaGliwice = lazy(() => import("./pages/AgencjaMarketingowaGliwice"));
const BlogSklepInternetowyVsMarketplace = lazy(() => import("./pages/BlogSklepInternetowyVsMarketplace"));
const BlogStrategiaCenowa = lazy(() => import("./pages/BlogStrategiaCenowa"));
const PozycjonowanieZabrze = lazy(() => import("./pages/PozycjonowanieZabrze"));
const BlogKosztBrandingu = lazy(() => import("./pages/BlogKosztBrandingu"));
const BlogRebrandingPoradnik = lazy(() => import("./pages/BlogRebrandingPoradnik"));

// Wave 228: additional pages
const BlogCopywritingDlaSEO = lazy(() => import("./pages/BlogCopywritingDlaSEO"));
const AgencjaMarketingowaSosnowiec = lazy(() => import("./pages/AgencjaMarketingowaSosnowiec"));
const BlogVideoMarketingROI = lazy(() => import("./pages/BlogVideoMarketingROI"));
const BlogKosztVideoMarketingowego = lazy(() => import("./pages/BlogKosztVideoMarketingowego"));
const AgencjaMarketingowaZabrze = lazy(() => import("./pages/AgencjaMarketingowaZabrze"));
const BlogMarketingB2B = lazy(() => import("./pages/BlogMarketingB2B"));
const BlogKosztProwadzeniaStrony = lazy(() => import("./pages/BlogKosztProwadzeniaStrony"));
const AgencjaMarketingowaWalbrzych = lazy(() => import("./pages/AgencjaMarketingowaWalbrzych"));
const BlogLinkedInDlaFirmy = lazy(() => import("./pages/BlogLinkedInDlaFirmy"));
const BlogMarketingLokalny = lazy(() => import("./pages/BlogMarketingLokalny"));
const AgencjaMarketingowaElblag = lazy(() => import("./pages/AgencjaMarketingowaElblag"));
const PozycjonowanieWalbrzych = lazy(() => import("./pages/PozycjonowanieWalbrzych"));
const BlogKosztMarketinguInternetowego = lazy(() => import("./pages/BlogKosztMarketinguInternetowego"));
const PozycjonowanieElblag = lazy(() => import("./pages/PozycjonowanieElblag"));

// Wave 234 pages
const BlogKosztLogo = lazy(() => import("./pages/BlogKosztLogo"));
const AgencjaMarketingowaLegnica = lazy(() => import("./pages/AgencjaMarketingowaLegnica"));
const BlogSklepInternetowyNaWlasnej = lazy(() => import("./pages/BlogSklepInternetowyNaWlasnej"));

// Wave 235 pages
const BlogKonwersjaStrony = lazy(() => import("./pages/BlogKonwersjaStrony"));
const PozycjonowanieLegnica = lazy(() => import("./pages/PozycjonowanieLegnica"));
const BlogTikTokDlaFirmy = lazy(() => import("./pages/BlogTikTokDlaFirmy"));

// Wave 236 pages
const AgencjaMarketingowaJeleniaGora = lazy(() => import("./pages/AgencjaMarketingowaJeleniaGora"));
const BlogYouTubeDlaFirmy = lazy(() => import("./pages/BlogYouTubeDlaFirmy"));

// Wave 237 pages
const BlogPinterestDlaFirmy = lazy(() => import("./pages/BlogPinterestDlaFirmy"));
const PozycjonowanieKalisz = lazy(() => import("./pages/PozycjonowanieKalisz"));
const BlogChatGPTWMarketingu = lazy(() => import("./pages/BlogChatGPTWMarketingu"));

// Legal & utility pages
const PolitykaPrywatnosci = lazy(() => import("./pages/PolitykaPrywatnosci"));
const Regulamin = lazy(() => import("./pages/Regulamin"));
const Kariera = lazy(() => import("./pages/Kariera"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Cennik = lazy(() => import("./pages/Cennik"));
const Podziekowanie = lazy(() => import("./pages/Podziekowanie"));
const Zainstaluj = lazy(() => import("./pages/Zainstaluj"));

// Admin pages
const AdminRezerwacje = lazy(() => import("./pages/AdminRezerwacje"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Tools pages
const Quiz = lazy(() => import("./pages/Quiz"));
const KalkulatorROI = lazy(() => import("./pages/KalkulatorROI"));
const SlownikMarketingowy = lazy(() => import("./pages/SlownikMarketingowy"));
const Zasoby = lazy(() => import("./pages/Zasoby"));
const GeneratorBriefu = lazy(() => import("./pages/GeneratorBriefu"));
const AudytSEO = lazy(() => import("./pages/AudytSEO"));
const KalkulatorCen = lazy(() => import("./pages/KalkulatorCen"));

// Cluster hub pages (Phase 1 - new IA structure)
const SEOOnPage = lazy(() => import("./pages/SEOOnPage"));
const SEOOffPage = lazy(() => import("./pages/SEOOffPage"));
const SEOTechniczne = lazy(() => import("./pages/SEOTechniczne"));
const SocialMediaStrategia = lazy(() => import("./pages/SocialMediaStrategia"));
const SocialMediaContent = lazy(() => import("./pages/SocialMediaContent"));
const SocialMediaAnalityka = lazy(() => import("./pages/SocialMediaAnalityka"));
const PMOptymalizacja = lazy(() => import("./pages/PMOptymalizacja"));
const PMTargetowanie = lazy(() => import("./pages/PMTargetowanie"));
const CMEbooki = lazy(() => import("./pages/CMEbooki"));
const CMVideoContent = lazy(() => import("./pages/CMVideoContent"));
const SEOCluster = lazy(() => import("./pages/clusters/SEOCluster"));
const SocialMediaCluster = lazy(() => import("./pages/clusters/SocialMediaCluster"));
const PerformanceMarketingCluster = lazy(() => import("./pages/clusters/PerformanceMarketingCluster"));
const ContentMarketingCluster = lazy(() => import("./pages/clusters/ContentMarketingCluster"));
const UslugiCluster = lazy(() => import("./pages/clusters/UslugiCluster"));

// Lazy load non-critical global components
const CookieBanner = lazy(() => import("./components/CookieBanner").then(m => ({ default: m.CookieBanner })));
const SEODevPanel = lazy(() => import("./components/dev/SEODevPanel").then(m => ({ default: m.SEODevPanel })));
const Redirect301 = lazy(() => import("./components/seo/Redirect301").then(m => ({ default: m.Redirect301 })));

const queryClient = new QueryClient();

// Ultra minimal page loader - just a subtle fade
const PageLoader = () => (
  <div className="min-h-screen bg-background" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/uslugi" element={<Uslugi />} />
                <Route path="/realizacje" element={<Realizacje />} />
                <Route path="/realizacje/enea-stadion" element={<CaseStudyEnea />} />
                <Route path="/realizacje/rppg" element={<CaseStudyRPPG />} />
                <Route path="/realizacje/fabryka-virali" element={<CaseStudyFabrykaVirali />} />
                <Route path="/realizacje/friendly-gas" element={<CaseStudyFriendlyGas />} />
                <Route path="/realizacje/fps-cegielski" element={<CaseStudyFPS />} />
                <Route path="/realizacje/gierki" element={<CaseStudyGierki />} />
                <Route path="/realizacje/przedszkole" element={<CaseStudyPrzedszkole />} />
                <Route path="/realizacje/verthe" element={<CaseStudyVerthe />} />
                <Route path="/realizacje/victory-cars" element={<CaseStudyVictoryCars />} />
                <Route path="/realizacje/klagem" element={<CaseStudyKlagem />} />
                <Route path="/realizacje/mechanica" element={<CaseStudyMechanica />} />
                <Route path="/realizacje/celsjusz" element={<CaseStudyCelsjusz />} />
                <Route path="/realizacje/sookar" element={<CaseStudySookar />} />
                <Route path="/realizacje/graf-tapicerstwo" element={<CaseStudyGraf />} />
                <Route path="/realizacje/stageplan" element={<CaseStudyStagePlan />} />
                <Route path="/realizacje/cute-dumpling" element={<CaseStudyCuteDumpling />} />
                <Route path="/realizacje/apartamenty-chorwacja" element={<CaseStudyApartamenty />} />
                <Route path="/realizacje/lauvjah" element={<CaseStudyLauvjah />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/konsultacja" element={<Konsultacja />} />
                <Route path="/o-nas" element={<ONas />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/ile-kosztuje-strona-internetowa" element={<BlogKosztStrony />} />
                <Route path="/blog/tanie-strony-internetowe" element={<BlogTanieStrony />} />
                <Route path="/blog/wordpress-vs-strona-na-zamowienie" element={<BlogWordPressVsCustom />} />
                <Route path="/blog/audyt-strony-internetowej" element={<BlogAudytStrony />} />
                <Route path="/blog/audyt-seo-krok-po-kroku" element={<BlogAudytSEOKrok />} />
                <Route path="/blog/ai-w-marketingu-msp-2025" element={<BlogAIMarketing />} />
                <Route path="/blog/jak-stworzyc-landing-page" element={<BlogLandingPage />} />
                <Route path="/blog/branding-dla-startupow" element={<BlogBrandingStartupy />} />
                <Route path="/blog/ux-ui-ecommerce" element={<BlogUXEcommerce />} />
                <Route path="/blog/marketing-automation" element={<BlogMarketingAutomation />} />
                <Route path="/blog/personal-branding-linkedin" element={<BlogPersonalBrandingLinkedIn />} />
                <Route path="/blog/video-marketing-trendy-2025" element={<BlogVideoMarketing />} />
                <Route path="/blog/google-analytics-4-poradnik" element={<BlogGoogleAnalytics4 />} />
                <Route path="/blog/budzet-marketingowy-planowanie" element={<BlogBudzetMarketingowy />} />
                <Route path="/blog/marketing-b2b-vs-b2c" element={<BlogB2BvsB2C />} />
                <Route path="/blog/psychologia-cen" element={<BlogPsychologiaCen />} />
                <Route path="/blog/jak-zwiekszyc-sprzedaz-przez-internet" element={<BlogSprzedazOnline />} />
                <Route path="/blog/jak-napisac-brief-marketingowy" element={<BlogBriefMarketingowy />} />
                <Route path="/blog/pozycjonowanie-stron-internetowych-poradnik" element={<BlogPozycjonowanieStron />} />
                <Route path="/blog/ile-kosztuje-reklama-w-google" element={<BlogKosztGoogleAds />} />
                <Route path="/blog/jak-wybrac-agencje-marketingowa" element={<BlogJakWybracAgencje />} />
                <Route path="/blog/jak-zwiekszyc-konwersje-na-stronie" element={<BlogKonwersjeNaStronie />} />
                <Route path="/blog/strategia-social-media-marketing" element={<BlogSocialMediaStrategia />} />
                <Route path="/blog/strona-internetowa-dla-firmy" element={<BlogStronaDlaFirmy />} />
                <Route path="/blog/co-to-jest-identyfikacja-wizualna" element={<BlogIdentyfikacjaWizualna />} />
                <Route path="/blog/jak-zaprojektowac-logo-dla-firmy" element={<BlogJakZaprojektowacLogo />} />
                <Route path="/blog/google-ads-cennik" element={<BlogGoogleAdsCennik />} />
                <Route path="/blog/cennik-facebook-ads" element={<BlogCennikFacebookAds />} />
                <Route path="/blog/facebook-ads-poradnik" element={<BlogFacebookAdsPoradnik />} />
                <Route path="/blog/google-ads-vs-seo" element={<BlogGoogleAdsVsSeo />} />
                <Route path="/blog/prowadzenie-social-media-cennik" element={<BlogProwadzenieSocialMediaCennik />} />
                <Route path="/blog/fotografia-produktowa-poradnik" element={<BlogFotografiaProduktowa />} />
                <Route path="/blog/landing-page-vs-strona-internetowa" element={<BlogLandingPageVsStrona />} />
                <Route path="/blog/social-media-marketing-poradnik" element={<BlogSocialMediaMarketingPoradnik />} />
                <Route path="/blog/strona-internetowa-dla-restauracji" element={<BlogStronaInternetowaDlaRestauracji />} />
                <Route path="/blog/blog-firmowy-poradnik" element={<BlogBlogFirmowy />} />
                <Route path="/blog/ile-kosztuje-film-reklamowy" element={<BlogIleKosztujeFIlmReklamowy />} />
                <Route path="/blog/pozycjonowanie-dla-malych-firm" element={<BlogPozycjonowanieDlaMalychFirm />} />
                <Route path="/blog/fotografia-biznesowa" element={<BlogFotografiaBiznesowa />} />
                <Route path="/blog/identyfikacja-wizualna-cennik" element={<BlogIdentyfikacjaWizualnaCennik />} />
                <Route path="/blog/jak-wybrac-agencje-marketingowa" element={<BlogJakWybracAgencjeMarketingowa />} />
                <Route path="/blog/co-to-jest-seo" element={<BlogCoToJestSeo />} />
                <Route path="/blog/ile-kosztuje-pozycjonowanie" element={<BlogIleKosztujePozycjonowanie />} />
                <Route path="/blog/social-media-dla-firm" element={<BlogSocialMediaDlaFirm />} />
                <Route path="/blog/jak-wybrac-agencje-seo" element={<BlogJakWybracAgencjeSEO />} />
                <Route path="/blog/pozycjonowanie-lokalne-dla-firm" element={<BlogPozycjonowanieLokalnePoradnik />} />
                <Route path="/blog/instagram-dla-firmy" element={<BlogInstagramDlaFirmy />} />
                <Route path="/blog/content-marketing-dla-firm" element={<BlogContentMarketing />} />
                <Route path="/blog/jak-stworzyc-strone-internetowa" element={<BlogJakStworzyc />} />
                <Route path="/blog/strona-internetowa-dla-malej-firmy" element={<BlogStronaInternetowaOdZera />} />
                <Route path="/blog/podcast-dla-firmy" element={<BlogPodcastMarketing />} />
                <Route path="/blog/projektowanie-stron-internetowych-poradnik" element={<BlogProjektowanieStron />} />
                <Route path="/cennik-tworzenia-stron" element={<CennikTworzenieStron />} />

                {/* Case Studies */}
                <Route path="/case-studies/optymalizacja-konwersji-ecommerce" element={<CaseStudyEcommerceCRO />} />
                <Route path="/case-studies/seo-lokalne-poznan-wzrost-ruchu" element={<CaseStudyLocalSEO />} />
                <Route path="/case-studies/strona-internetowa-dla-firmy-produkcyjnej" element={<CaseStudyStronaWWW />} />

                {/* Blog → cluster redirects MUST be BEFORE the catch-all /blog/:slug */}
                <Route path="/blog/seo-ecommerce" element={<Redirect301 to="/seo/ecommerce" />} />
                <Route path="/blog/influencer-marketing-polska" element={<Redirect301 to="/social-media/influencer" />} />
                <Route path="/blog/remarketing-poradnik" element={<Redirect301 to="/performance-marketing/remarketing" />} />
                <Route path="/blog/google-ads-vs-facebook-ads" element={<Redirect301 to="/performance-marketing/google-vs-facebook" />} />
                <Route path="/blog/seo-lokalne-poznan-poradnik" element={<Redirect301 to="/seo/lokalne-poznan" />} />
                <Route path="/blog/instagram-reels-vs-tiktok" element={<Redirect301 to="/social-media/reels-vs-tiktok" />} />
                <Route path="/blog/tiktok-dla-biznesu" element={<Redirect301 to="/social-media/tiktok-biznes" />} />
                <Route path="/blog/copywriting-landing-page" element={<Redirect301 to="/content-marketing/copywriting-landing" />} />
                <Route path="/blog/email-marketing-2025" element={<Redirect301 to="/content-marketing/email-2025" />} />
                <Route path="/blog/kampania-reklamowa-marketingowa" element={<Redirect301 to="/content-marketing/kampanie" />} />

                {/* Dynamic blog catch-all - MUST be AFTER all specific /blog/* routes */}
                <Route path="/blog/:slug" element={<BlogArticleDynamic />} />

                {/* Cluster hubs */}
                <Route path="/seo" element={<SEOCluster />} />
                <Route path="/social-media" element={<SocialMediaCluster />} />
                <Route path="/performance-marketing" element={<PerformanceMarketingCluster />} />
                <Route path="/content-marketing" element={<ContentMarketingCluster />} />

                <Route path="/poradniki" element={<Poradniki />} />
                {/* Uslugi cluster */}
                <Route path="/uslugi/strony-internetowe" element={<StronyInternetowe />} />
                <Route path="/uslugi/landing-page" element={<UslugiLandingPage />} />
                <Route path="/uslugi/strony-internetowe/ecommerce" element={<EcommerceTworzenie />} />
                <Route path="/uslugi/strony-internetowe/poznan" element={<StronyInternetowePoznan />} />
                <Route path="/uslugi/strony-internetowe/warszawa" element={<StronyInternetoweWarszawa />} />
                <Route path="/uslugi/strony-internetowe/wroclaw" element={<StronyInternetoweWroclaw />} />
                <Route path="/uslugi/strony-internetowe/krakow" element={<StronyInternetoweKrakow />} />
                <Route path="/uslugi/strony-internetowe/gdansk" element={<StronyInternetoweGdansk />} />
                <Route path="/uslugi/strony-internetowe/gdynia" element={<StronyInternetoweGdynia />} />
                <Route path="/uslugi/strony-internetowe/lodz" element={<StronyInternetoweLodz />} />
                <Route path="/uslugi/strony-internetowe/szczecin" element={<StronyInternetoweSzczecin />} />
                <Route path="/uslugi/strony-internetowe/bydgoszcz" element={<StronyInternetoweBydgoszcz />} />
                <Route path="/uslugi/strony-internetowe/katowice" element={<StronyInternetoweKatowice />} />
                <Route path="/uslugi/strony-internetowe/lublin" element={<StronyInternetoweLublin />} />
                <Route path="/uslugi/strony-internetowe/koszalin" element={<StronyInternetoweKoszalin />} />
                <Route path="/uslugi/strony-internetowe/gliwice" element={<StronyInternetoweGliwice />} />
                <Route path="/uslugi/strony-internetowe/rybnik" element={<StronyInternetoweRybnik />} />
                <Route path="/uslugi/strony-internetowe/tychy" element={<StronyInternetoweTychy />} />
                <Route path="/uslugi/strony-internetowe/kamionki" element={<StronyInternetoweKamionki />} />
                <Route path="/uslugi/strony-internetowe/torun" element={<StronyInternetoweTorun />} />
                <Route path="/uslugi/strony-internetowe/rzeszow" element={<StronyInternetoweRzeszow />} />
                <Route path="/uslugi/strony-internetowe/radom" element={<StronyInternetoweRadom />} />
                <Route path="/uslugi/strony-internetowe/opole" element={<StronyInternetoweOpole />} />
                <Route path="/uslugi/strony-internetowe/olsztyn" element={<StronyInternetoweOlsztyn />} />
                <Route path="/uslugi/strony-internetowe/kielce" element={<StronyInternetoweKielce />} />
                <Route path="/uslugi/strony-internetowe/konin" element={<StronyInternetoweKonin />} />
                <Route path="/uslugi/strony-internetowe/tarnow" element={<StronyInternetoweTarnow />} />
                <Route path="/uslugi/strony-internetowe/plock" element={<StronyInternetowePlock />} />
                <Route path="/uslugi/strony-internetowe/sosnowiec" element={<StronyInternetoweSosnowiec />} />
                <Route path="/uslugi/strony-internetowe/bialystok" element={<StronyInternetoweBialystok />} />
                <Route path="/uslugi/strony-internetowe/czestochowa" element={<StronyInternetoweCzestochowa />} />
                <Route path="/uslugi/strony-internetowe/zielona-gora" element={<StronyInternetoweZielonaGora />} />
                <Route path="/uslugi/strony-internetowe/elblag" element={<StronyInternetoweElblag />} />
                <Route path="/uslugi/strony-internetowe/legnica" element={<StronyInternetoweLegnica />} />
                <Route path="/uslugi/strony-internetowe/kalisz" element={<StronyInternetoweKalisz />} />
                <Route path="/uslugi/strony-internetowe/gorzow" element={<StronyInternetoweGorzow />} />
                <Route path="/uslugi/logo-i-branding" element={<LogoIBranding />} />
                <Route path="/uslugi/pozycjonowanie" element={<UslugiPozycjonowanie />} />
                <Route path="/uslugi/pozycjonowanie/warszawa" element={<PozycjonowanieWarszawa />} />
                <Route path="/uslugi/pozycjonowanie/krakow" element={<PozycjonowanieKrakow />} />
                <Route path="/uslugi/pozycjonowanie/wroclaw" element={<PozycjonowanieWroclaw />} />
                <Route path="/uslugi/pozycjonowanie/poznan" element={<PozycjonowaniePoznan />} />
                <Route path="/uslugi/pozycjonowanie/gdansk" element={<PozycjonowanieGdansk />} />
                <Route path="/uslugi/pozycjonowanie/lodz" element={<PozycjonowanieLodz />} />
                <Route path="/uslugi/pozycjonowanie/szczecin" element={<PozycjonowanieSzczecin />} />
                <Route path="/uslugi/pozycjonowanie/bialystok" element={<PozycjonowanieBialystok />} />
                <Route path="/uslugi/pozycjonowanie/lublin" element={<PozycjonowanieLublin />} />
                <Route path="/uslugi/pozycjonowanie/rzeszow" element={<PozycjonowanieRzeszow />} />
                <Route path="/uslugi/pozycjonowanie/katowice" element={<PozycjonowanieKatowice />} />
                <Route path="/uslugi/pozycjonowanie/czestochowa" element={<PozycjonowanieCzestochowa />} />
                <Route path="/uslugi/pozycjonowanie/torun" element={<PozycjonowanieTorun />} />
                <Route path="/uslugi/pozycjonowanie/bydgoszcz" element={<PozycjonowanieBydgoszcz />} />
                <Route path="/uslugi/pozycjonowanie/radom" element={<PozycjonowanieRadom />} />
                <Route path="/uslugi/pozycjonowanie/kielce" element={<PozycjonowanieKielce />} />
                <Route path="/uslugi/pozycjonowanie/opole" element={<PozycjonowanieOpole />} />
                <Route path="/uslugi/pozycjonowanie/olsztyn" element={<PozycjonowanieOlsztyn />} />
                <Route path="/uslugi/identyfikacja-wizualna" element={<UslugiIdentyfikacjaWizualna />} />
                <Route path="/uslugi/tworzenie-stron-internetowych" element={<TworzenieStronInternetowych />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/warszawa" element={<TworzenieStronWarszawa />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/krakow" element={<TworzenieStronKrakow />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/wroclaw" element={<TworzenieStronWroclaw />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/gdansk" element={<TworzenieStronGdansk />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/lodz" element={<TworzenieStronLodz />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/torun" element={<TworzenieStronTorun />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/szczecin" element={<TworzenieStronSzczecin />} />
                <Route path="/blog/jak-zalozyc-sklep-internetowy" element={<BlogJakZalozycSklep />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/bydgoszcz" element={<TworzenieStronBydgoszcz />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/katowice" element={<TworzenieStronKatowice />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/lublin" element={<TworzenieStronLublin />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/poznan" element={<TworzenieStronPoznan />} />
                <Route path="/uslugi/marketing-internetowy" element={<MarketingInternetowy />} />
                <Route path="/agencja-seo-warszawa" element={<AgencjaSEOWarszawa />} />
                <Route path="/blog/dropshipping-polska" element={<BlogDropshippingPolska />} />
                <Route path="/blog/reklama-w-google" element={<BlogReklamaWGoogle />} />
                <Route path="/uslugi/tworzenie-stron-www" element={<TworzenieStronWWW />} />
                <Route path="/uslugi/strony-internetowe-dla-firm" element={<StronyInternetoweDlaFirm />} />
                <Route path="/uslugi/pozycjonowanie-lokalne" element={<PozycjonowanieLokalne />} />
                <Route path="/uslugi/tworzenie-sklepow-internetowych" element={<TworzenieSklepowInternetowych />} />
                <Route path="/uslugi/projekt-strony-internetowej" element={<ProjektStronyInternetowej />} />
                <Route path="/agencja-seo-krakow" element={<AgencjaSEOKrakow />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/bialystok" element={<TworzenieStronBialystok />} />
                <Route path="/blog/jak-sprzedawac-w-internecie" element={<BlogJakSprzedawacWInternecie />} />
                <Route path="/uslugi/audyt-seo" element={<AudytSEO />} />
                {/* Wave 202 */}
                <Route path="/blog/react-email-resend-nodemailer-szablony-email-jsx-typescript-2024" element={<BlogReactEmailResendCoTo />} />
                <Route path="/blog/local-first-jazz-tools-powersync-electricsql-dexie-pglite-offline-2024" element={<BlogLocalFirstCoTo />} />
                <Route path="/blog/posthog-sentry-plausible-feature-flags-analytics-monitoring-2024" element={<BlogPosthogSentryCoTo />} />
                {/* Wave 201 */}
                <Route path="/blog/svelte-5-runes-angular-18-19-signals-sveltekit-2-frameworki-2024" element={<BlogSvelte5RunesCoTo />} />
                <Route path="/blog/capacitor-ionic-pwa-expo-cross-platform-mobile-web-2024" element={<BlogCapacitorIonicCoTo />} />
                <Route path="/blog/github-actions-changesets-semantic-release-oidc-optymalizacja-2024" element={<BlogGithubActionsAdvCoTo />} />
                {/* Wave 200 */}
                <Route path="/blog/typescript-5-5-5-6-inferred-predicates-using-isolated-declarations-2024" element={<BlogTs55CoTo />} />
                <Route path="/blog/elysia-js-hono-bun-backend-typescript-frameworki-2024" element={<BlogElysiaJsCoTo />} />
                <Route path="/blog/ai-agents-mcp-vercel-ai-sdk-langgraph-rag-budowanie-2024" element={<BlogAiAgentsMcpCoTo />} />
                {/* Wave 199 */}
                <Route path="/blog/react-router-7-framework-mode-loaders-actions-typegen-vs-nextjs-2024" element={<BlogReactRouter7CoTo />} />
                <Route path="/blog/kysely-mikro-orm-drizzle-prisma-typeorm-porownanie-orm-typescript-2024" element={<BlogKyselyMikroOrmCoTo />} />
                <Route path="/blog/astro-5-content-layer-server-islands-actions-vs-nextjs-2024" element={<BlogAstro5CoTo />} />
                {/* Wave 198 */}
                <Route path="/blog/rspack-farm-rolldown-esbuild-swc-bundlery-rust-narzedzia-build-2024" element={<BlogRspackFarmRolldownCoTo />} />
                <Route path="/blog/legend-state-nanostores-valtio-signals-state-management-react-2024" element={<BlogLegendStateNanostoresCoTo />} />
                <Route path="/blog/css-container-queries-layer-nesting-scope-view-transitions-2024" element={<BlogCssContainerLayerCoTo />} />
                {/* Wave 197 */}
                <Route path="/blog/valibot-arktype-typebox-zod-v4-schema-validation-typescript-2024" element={<BlogValibotArktypeCoTo />} />
                <Route path="/blog/react-concurrent-suspense-usetransition-usedeferredvalue-react-19-hooks-2024" element={<BlogReactConcurrentCoTo />} />
                <Route path="/blog/javascript-memory-management-weakmap-weakref-gc-memory-leaks-react-2024" element={<BlogJsMemoryMgmtCoTo />} />
                {/* Wave 196 */}
                <Route path="/blog/nativewind-tamagui-gluestack-unistyles-react-native-styling-2024" element={<BlogNativeWindTamaguiCoTo />} />
                <Route path="/blog/http-clients-typescript-fetch-axios-ky-ofetch-tanstack-query-2024" element={<BlogHttpClientsCoTo />} />
                <Route path="/blog/typescript-utility-types-partial-returntype-conditional-mapped-branded-2024" element={<BlogTsUtilityTypesCoTo />} />
                {/* Wave 195 */}
                <Route path="/blog/ai-coding-tools-copilot-cursor-windsurf-continue-aider-2024" element={<BlogAiCodingToolsCoTo />} />
                <Route path="/blog/passkeys-webauthn-implementacja-nextjs-simplewebauthn-fido2-2024" element={<BlogPasskeysWebAuthnCoTo />} />
                <Route path="/blog/tanstack-start-fullstack-react-router-server-functions-vinxi-2024" element={<BlogTanstackStartCoTo />} />
                {/* Wave 194 */}
                <Route path="/blog/panda-css-unocss-open-props-vanilla-extract-stylex-atomic-css-2024" element={<BlogPandaCssUnoCoTo />} />
                <Route path="/blog/volta-fnm-mise-nvm-corepack-nodejs-version-managers-2024" element={<BlogNodeVersionMgrCoTo />} />
                <Route path="/blog/nextjs-15-turbopack-async-params-after-caching-migracja-v14-2024" element={<BlogNextJs15CoTo />} />
                {/* Wave 193 */}
                <Route path="/blog/css-anchor-positioning-popover-api-has-view-transitions-scroll-driven-2024" element={<BlogCssAnchorPopoverCoTo />} />
                <Route path="/blog/react-native-new-architecture-jsi-fabric-turbomodules-bridgeless-expo-sdk-52-2024" element={<BlogRnNewArchCoTo />} />
                <Route path="/blog/tanstack-form-react-hook-form-server-actions-formularze-nextjs-2024" element={<BlogTanstackFormCoTo />} />
                {/* Wave 192 */}
                <Route path="/blog/tailwind-css-v4-theme-oxide-engine-oklch-migracja-v3-2025" element={<BlogTailwindV4CoTo />} />
                <Route path="/blog/speech-ai-whisper-elevenlabs-deepgram-text-to-speech-typescript-2024" element={<BlogSpeechAiCoTo />} />
                <Route path="/blog/css-custom-properties-variables-design-tokens-theming-2024" element={<BlogCssCustomPropsCoTo />} />
                {/* Wave 191 */}
                <Route path="/blog/htmx-hypermedia-hx-get-swap-oob-sse-alpine-js-vs-react-2024" element={<BlogHtmxCoTo />} />
                <Route path="/blog/astro-4-content-collections-view-transitions-islands-astro-db-actions-2024" element={<BlogAstroDeepDiveCoTo />} />
                <Route path="/blog/react-error-handling-error-boundary-sentry-tanstack-query-nextjs-2024" element={<BlogReactErrorHandlingCoTo />} />
                {/* Wave 190 */}
                <Route path="/blog/ai-generowanie-obrazow-dalle-replicate-fal-flux-stable-diffusion-typescript-2024" element={<BlogAiImageGenCoTo />} />
                <Route path="/blog/supabase-auth-rls-storage-realtime-edge-functions-vector-2024" element={<BlogSupabaseDeepDiveCoTo />} />
                <Route path="/blog/cloudflare-workers-kv-d1-r2-durable-objects-workers-ai-edge-2024" element={<BlogCloudflareWorkersCoTo />} />
                {/* Wave 189 */}
                <Route path="/blog/remix-nested-routes-loader-action-defer-usefetcher-optimistic-ui-2024" element={<BlogRemixDeepDiveCoTo />} />
                <Route path="/blog/react-compiler-automatyczna-memoizacja-react-19-use-hook-server-actions-2024" element={<BlogReactCompilerCoTo />} />
                <Route path="/blog/nuxtjs-3-usefetch-nitro-pinia-auto-imports-deployment-2024" element={<BlogNuxtCoTo />} />
                {/* Wave 188 */}
                <Route path="/blog/qwik-framework-resumability-usesignal-qwik-city-zerowa-hydration-2024" element={<BlogQwikCoTo />} />
                <Route path="/blog/solidjs-fine-grained-reactivity-createsignal-solidstart-vs-react-2024" element={<BlogSolidJsCoTo />} />
                <Route path="/blog/css-grid-subgrid-masonry-named-areas-responsive-layout-2024" element={<BlogCssGridSubgridCoTo />} />
                {/* Wave 187 */}
                <Route path="/blog/sveltekit-routing-load-functions-form-actions-adaptery-2024" element={<BlogSvelteKitCoTo />} />
                <Route path="/blog/openai-assistants-api-threads-file-search-code-interpreter-2024" element={<BlogOpenAiAssistantsCoTo />} />
                <Route path="/blog/zod-zaawansowany-discriminated-unions-branded-types-transforms-typescript-2024" element={<BlogZodAdvancedCoTo />} />
                {/* Wave 186 */}
                <Route path="/blog/bullmq-inngest-job-queues-background-jobs-nodejs-nextjs-2024" element={<BlogBullmqCoTo />} />
                <Route path="/blog/nextjs-middleware-edge-auth-i18n-rate-limiting-ab-testing-2024" element={<BlogNextMiddlewareCoTo />} />
                <Route path="/blog/llm-tool-calling-ai-agenci-rag-vercel-ai-sdk-typescript-2024" element={<BlogLlmToolCallingCoTo />} />
                {/* Wave 185 */}
                <Route path="/blog/react-aria-ariakit-wcag-dostepnosc-a11y-react-2024" element={<BlogReactAriaCoTo />} />
                <Route path="/blog/docker-nodejs-nextjs-dockerfile-compose-github-actions-kubernetes-2024" element={<BlogDockerNodeCoTo />} />
                <Route path="/blog/react-testing-library-queries-user-event-mocking-async-2024" element={<BlogRtlTestingCoTo />} />
                {/* Wave 184 */}
                <Route path="/blog/storybook-8-csf-vitest-autodocs-chromatic-component-driven-2024" element={<BlogStorybook8CoTo />} />
                <Route path="/blog/nodejs-streams-readable-writable-transform-pipeline-web-streams-2024" element={<BlogNodeStreamsCoTo />} />
                <Route path="/blog/nowe-funkcje-javascript-es2024-tc39-proposals-temporal-iterator-helpers" element={<BlogJsProposalsCoTo />} />
                {/* Wave 183 */}
                <Route path="/blog/serverless-database-neon-planetscale-turso-d1-electric-sql-2024" element={<BlogServerlessDbCoTo />} />
                <Route path="/blog/tanstack-router-react-router-v7-type-safe-routing-2024" element={<BlogTanstackRouterCoTo />} />
                <Route path="/blog/effect-ts-fp-ts-neverthrow-functional-programming-typescript-2024" element={<BlogEffectTsCoTo />} />
                {/* Wave 182 */}
                <Route path="/blog/react-native-reanimated-gesture-handler-skia-animacje-gesty-2024" element={<BlogRNReanimatedCoTo />} />
                <Route path="/blog/web-workers-comlink-offscreencanvas-shared-array-buffer-javascript-2024" element={<BlogWebWorkersCoTo />} />
                <Route path="/blog/crdt-yjs-liveblocks-partykit-collaborative-editing-react-2024" element={<BlogCrdtCollabCoTo />} />
                {/* Wave 181 */}
                <Route path="/blog/react-performance-scan-million-bundle-analyzer-code-splitting-2024" element={<BlogReactPerfCoTo />} />
                <Route path="/blog/modern-css-container-queries-has-view-transitions-scroll-driven-2024" element={<BlogModernCssCoTo />} />
                <Route path="/blog/modern-browser-apis-indexeddb-dexie-web-share-clipboard-file-system-2024" element={<BlogBrowserApisCoTo />} />
                {/* Wave 180 */}
                <Route path="/blog/react-flow-xyflow-mermaid-graph-visualization-diagramy-react-2024" element={<BlogReactFlowCoTo />} />
                <Route path="/blog/konva-fabricjs-html2canvas-canvas-screenshot-qr-pdf-react-2024" element={<BlogKonvaCanvasCoTo />} />
                <Route path="/blog/react-three-fiber-drei-3d-threejs-fizyka-webxr-react-2024" element={<BlogReactThreeFiberCoTo />} />
                {/* Wave 179 */}
                <Route path="/blog/nextjs-image-optimization-webp-avif-cloudinary-sharp-svgr-2024" element={<BlogNextImageCoTo />} />
                <Route path="/blog/tiptap-lexical-slate-rich-text-editor-react-collaborative-2024" element={<BlogTiptapLexicalCoTo />} />
                <Route path="/blog/nextjs-font-optimization-variable-fonts-fout-foit-google-fonts-2024" element={<BlogNextFontCoTo />} />
                {/* Wave 178 */}
                <Route path="/blog/recharts-nivo-chartjs-data-visualization-react-wykresy-mapy-2024" element={<BlogRechartsCoTo />} />
                <Route path="/blog/dnd-kit-drag-drop-react-sortable-kanban-pragmatic-dnd-2024" element={<BlogDndKitCoTo />} />
                <Route path="/blog/lottie-rive-framer-motion-gsap-animacje-webowe-react-2024" element={<BlogLottieRiveCoTo />} />
                {/* Wave 177 */}
                <Route path="/blog/tanstack-table-ag-grid-react-data-tables-sortowanie-filtrowanie-wirtualizacja-2024" element={<BlogTanstackTableCoTo />} />
                <Route path="/blog/expo-router-react-navigation-react-native-nawigacja-universal-apps-2024" element={<BlogExpoRouterCoTo />} />
                <Route path="/blog/web-components-lit-stencil-shadow-dom-micro-frontends-2024" element={<BlogWebComponentsCoTo />} />
                {/* Wave 176 */}
                <Route path="/blog/react-19-use-hook-useactionstate-compiler-server-actions-nextjs-15-2024" element={<BlogReact19CoTo />} />
                <Route path="/blog/openapi-zod-trpc-orval-scalar-dokumentacja-api-typescript-2024" element={<BlogOpenApiCoTo />} />
                <Route path="/blog/msw-mock-service-worker-storybook-pact-contract-testing-react-2024" element={<BlogMswTestingCoTo />} />
                {/* Wave 175 */}
                <Route path="/blog/npm-pnpm-yarn-bun-package-managers-nodejs-2024" element={<BlogPackageManagersCoTo />} />
                <Route path="/blog/tsconfig-json-konfiguracja-typescript-strict-paths-project-references" element={<BlogTsconfigCoTo />} />
                <Route path="/blog/tauri-electron-wails-desktop-apps-react-typescript-2024" element={<BlogTauriElectronCoTo />} />
                {/* Wave 174 */}
                <Route path="/blog/git-flow-trunk-based-conventional-commits-strategie-git-2024" element={<BlogGitWorkflowCoTo />} />
                <Route path="/blog/graphql-apollo-server-client-urql-subscriptions-typescript-2024" element={<BlogGraphQLApolloCoTo />} />
                <Route path="/blog/css-in-js-vanilla-extract-stylex-linaria-zero-runtime-2024" element={<BlogCssInJsCoTo />} />
                {/* Wave 173 */}
                <Route path="/blog/file-uploads-uploadthing-cloudinary-s3-mux-nextjs-2024" element={<BlogFileUploadsCoTo />} />
                <Route path="/blog/vercel-netlify-cloudflare-pages-railway-deployment-nextjs-2024" element={<BlogDeploymentPlatformsCoTo />} />
                <Route path="/blog/date-fns-dayjs-luxon-temporal-api-biblioteki-dat-javascript-2024" element={<BlogDateLibrariesCoTo />} />
                {/* Wave 172 */}
                <Route path="/blog/ai-sdk-openai-langchain-integracja-nextjs-typescript-2024" element={<BlogAiSdkCoTo />} />
                <Route path="/blog/stripe-paddle-przelewy24-platnosci-nextjs-typescript-2024" element={<BlogStripeCoTo />} />
                <Route path="/blog/resend-sendgrid-nodemailer-emaile-transakcyjne-nextjs-2024" element={<BlogEmailResendCoTo />} />
                {/* Wave 171 */}
                <Route path="/blog/web-security-xss-csrf-csp-sql-injection-owasp-nodejs-nextjs" element={<BlogWebSecurityCoTo />} />
                <Route path="/blog/firebase-supabase-convex-baas-porownanie-co-wybrac-2024" element={<BlogFirebaseSupabaseCoTo />} />
                <Route path="/blog/algolia-typesense-meilisearch-elasticsearch-search-engine-2024" element={<BlogAlgoliaSearchCoTo />} />
                {/* Wave 170 */}
                <Route path="/blog/react-hook-form-zod-walidacja-formularzy-typescript-nextjs-2024" element={<BlogReactHookFormCoTo />} />
                <Route path="/blog/framer-motion-gsap-css-animations-web-animacje-react-2024" element={<BlogFramerMotionCoTo />} />
                <Route path="/blog/i18n-internationalization-next-intl-react-i18next-nextjs-2024" element={<BlogI18nCoTo />} />
                {/* Wave 169 */}
                <Route path="/blog/nestjs-co-to-jest-moduly-guardy-mikrouslugi-vs-express-fastify" element={<BlogNestJsCoTo />} />
                <Route path="/blog/hono-fastify-express-nodejs-backend-frameworks-co-wybrac-2024" element={<BlogHonoFastifyCoTo />} />
                <Route path="/blog/dependency-injection-solid-design-patterns-typescript-nodejs" element={<BlogDiContainerCoTo />} />
                {/* Wave 168 */}
                <Route path="/blog/vue3-composition-api-pinia-nuxt3-co-to-jest-jak-dziala" element={<BlogVue3CoTo />} />
                <Route path="/blog/react-native-expo-co-to-jest-mobile-development-vs-flutter-2024" element={<BlogReactNativeExpoCoTo />} />
                <Route path="/blog/angular-signals-standalone-components-defer-angular-17-nowosci-2024" element={<BlogAngularSignalsCoTo />} />
                {/* Wave 167 */}
                <Route path="/blog/eslint-biome-prettier-husky-linting-code-quality-typescript-2024" element={<BlogEslintBiomeCoTo />} />
                <Route path="/blog/typescript-zaawansowany-generics-conditional-types-decorators-typescript-5" element={<BlogTypescriptAdvancedCoTo />} />
                <Route path="/blog/react-wzorce-compound-components-custom-hooks-hoc-error-boundary" element={<BlogReactPatternsCoTo />} />
                {/* Wave 166 */}
                <Route path="/blog/tailwind-css-shadcn-ui-radix-mantine-biblioteki-ui-react-2024" element={<BlogTailwindShadcnCoTo />} />
                <Route path="/blog/core-web-vitals-lcp-inp-cls-optymalizacja-wydajnosci-web-2024" element={<BlogCoreWebVitalsCoTo />} />
                <Route path="/blog/dostepnosc-web-a11y-wcag-aria-keyboard-navigation-testowanie" element={<BlogAccessibilityA11yCoTo />} />
                {/* Wave 165 */}
                <Route path="/blog/jwt-oauth2-oidc-autentykacja-autoryzacja-web-session-passkeys" element={<BlogJwtOauthCoTo />} />
                <Route path="/blog/nextauth-lucia-auth-clerk-supabase-biblioteki-autentykacji-nextjs-2024" element={<BlogNextAuthCoTo />} />
                <Route path="/blog/react-server-components-server-actions-ppr-nextjs-app-router-2024" element={<BlogRscCoTo />} />
                {/* Wave 164 */}
                <Route path="/blog/prisma-drizzle-orm-typescript-schema-first-migracje-edge-co-wybrac" element={<BlogPrizmaDrizzleCoTo />} />
                <Route path="/blog/vitest-playwright-cypress-storybook-testowanie-react-2024" element={<BlogVitestPlaywrightCoTo />} />
                <Route path="/blog/xstate-co-to-jest-maszyna-stanow-statecharts-actor-model-react" element={<BlogXstateCoTo />} />
                {/* Wave 163 */}
                <Route path="/blog/astro-sveltekit-remix-island-architecture-co-to-jest-kiedy-wybrac" element={<BlogAstroCoTo />} />
                <Route path="/blog/vite-esbuild-turbopack-rollup-webpack-bundlery-js-co-wybrac" element={<BlogViteCoTo />} />
                <Route path="/blog/bun-deno-nodejs-porownanie-javascript-runtime-co-wybrac" element={<BlogBunDenoCoTo />} />
                {/* Wave 162 */}
                <Route path="/blog/zustand-jotai-redux-toolkit-zarzadzanie-stanem-react-2024" element={<BlogZustandCoTo />} />
                <Route path="/blog/tanstack-query-react-query-co-to-jest-cache-usemutation-nextjs-ssr" element={<BlogTanstackQueryCoTo />} />
                <Route path="/blog/trpc-co-to-jest-end-to-end-type-safety-nextjs-tanstack-query-vs-graphql" element={<BlogTrpcCoTo />} />
                {/* Wave 161 */}
                <Route path="/blog/postgresql-optymalizacja-explain-analyze-indeksy-partitioning-pgbouncer-patroni" element={<BlogPostgresOptCoTo />} />
                <Route path="/blog/clickhouse-co-to-jest-olap-mergetree-kafka-ingestion-vs-bigquery-snowflake" element={<BlogClickhouseCoTo />} />
                <Route path="/blog/database-migrations-co-to-jest-flyway-liquibase-alembic-zero-downtime-rollback" element={<BlogDbMigrationsCoTo />} />
                {/* Wave 160 */}
                <Route path="/blog/structured-logging-co-to-jest-loki-elk-fluentd-kibana-grafana" element={<BlogStructuredLoggingCoTo />} />
                <Route path="/blog/sentry-co-to-jest-error-tracking-performance-monitoring-react-python" element={<BlogSentryCoTo />} />
                <Route path="/blog/incident-management-co-to-jest-severity-pagerduty-postmortem-on-call-sla" element={<BlogIncidentManagementCoTo />} />
                {/* Wave 159 */}
                <Route path="/blog/strategie-cache-co-to-jest-cache-aside-write-through-redis-cdn-invalidation" element={<BlogCachingStrategiesCoTo />} />
                <Route path="/blog/rate-limiting-co-to-jest-token-bucket-redis-nginx-kong-aws-api-gateway" element={<BlogRateLimitingCoTo />} />
                <Route path="/blog/wzorce-odpornosci-circuit-breaker-retry-bulkhead-backpressure-resilience4j" element={<BlogResiliencePatternsCoTo />} />
                {/* Wave 158 */}
                <Route path="/blog/saga-pattern-co-to-jest-choreography-orchestration-temporal-kafka" element={<BlogSagaPatternCoTo />} />
                <Route path="/blog/transactional-outbox-pattern-co-to-jest-debezium-cdc-inbox-spring" element={<BlogOutboxPatternCoTo />} />
                <Route path="/blog/idempotencja-api-co-to-jest-idempotency-key-redis-platnosci-kafka" element={<BlogIdempotencyCoTo />} />
                {/* Wave 157 */}
                <Route path="/blog/wersjonowanie-api-co-to-jest-url-header-date-strategia-stripe-pact" element={<BlogApiVersioningCoTo />} />
                <Route path="/blog/websocket-sse-long-polling-real-time-komunikacja-socket-io-mqtt" element={<BlogRealtimeCommsCoTo />} />
                <Route path="/blog/envoy-proxy-co-to-jest-xds-api-service-mesh-rate-limiting-circuit-breaking" element={<BlogEnvoyProxyCoTo />} />
                {/* Wave 156 */}
                <Route path="/blog/domain-driven-design-ddd-co-to-jest-bounded-context-aggregate-event-storming" element={<BlogDddCoTo />} />
                <Route path="/blog/monorepo-co-to-jest-nx-turborepo-pnpm-workspaces-nx-cloud" element={<BlogMonorepoCoTo />} />
                <Route path="/blog/container-security-bezpieczenstwo-kontenerow-trivy-falco-kubernetes-rbac" element={<BlogContainerSecCoTo />} />
                {/* Wave 155 */}
                <Route path="/blog/architektura-serverless-co-to-jest-aws-lambda-cloud-run-step-functions" element={<BlogServerlessArchCoTo />} />
                <Route path="/blog/cicd-best-practices-github-actions-gitlab-canary-deploy-slsa" element={<BlogCiCdBestPracticesCoTo />} />
                <Route path="/blog/dlug-techniczny-co-to-jest-jak-mierzyc-zarzadzac-redukowac" element={<BlogTechnicalDebtCoTo />} />
                {/* Wave 154 */}
                <Route path="/blog/kubernetes-operators-co-to-jest-kubebuilder-cloudnativepg-strimzi" element={<BlogK8sOperatorsCoTo />} />
                <Route path="/blog/opentelemetry-co-to-jest-traces-metrics-logs-collector-jaeger" element={<BlogOpenTelemetryCoTo />} />
                <Route path="/blog/feature-flags-co-to-jest-launchdarkly-unleash-ab-testing" element={<BlogFeatureFlagsCoTo />} />
                {/* Wave 153 */}
                <Route path="/blog/zero-trust-security-co-to-jest-jak-wdrozyz-ztna-mfa" element={<BlogZeroTrustCoTo />} />
                <Route path="/blog/api-gateway-co-to-jest-kong-aws-traefik-kubernetes-ingress" element={<BlogApiGatewayCoTo />} />
                <Route path="/blog/database-sharding-co-to-jest-strategie-vitess-cassandra" element={<BlogShardingCoTo />} />
                {/* Wave 152 */}
                <Route path="/blog/webassembly-wasm-co-to-jest-rust-cpp-emscripten" element={<BlogWasmCoTo />} />
                <Route path="/blog/graphql-federation-co-to-jest-apollo-supergraph-subgraphy" element={<BlogGraphQLFederationCoTo />} />
                <Route path="/blog/event-driven-architecture-co-to-jest-kafka-rabbitmq-event-sourcing" element={<BlogEventDrivenCoTo />} />
                {/* Wave 151 */}
                <Route path="/blog/progressive-web-app-pwa-co-to-jest-jak-wdrozyz" element={<BlogPwaCoTo />} />
                <Route path="/blog/low-code-no-code-co-to-jest-retool-bubble-airtable-n8n" element={<BlogLowCodeCoTo />} />
                <Route path="/blog/web3-blockchain-dla-firm-smart-contracts-tokenizacja-aktywow" element={<BlogWeb3CoTo />} />
                {/* Wave 150 */}
                <Route path="/blog/edge-computing-co-to-jest-cloudflare-workers-edge-functions" element={<BlogEdgeComputingCoTo />} />
                <Route path="/blog/micro-frontends-co-to-jest-jak-wdrozyz-module-federation" element={<BlogMicroFrontendsCoTo />} />
                <Route path="/blog/quic-http3-co-to-jest-jak-wplywa-na-web-performance" element={<BlogQuicHttp3CoTo />} />
                {/* Wave 149 */}
                <Route path="/blog/devsecops-co-to-jest-jak-wbudowac-security-w-cicd" element={<BlogDevSecOpsCoTo />} />
                <Route path="/blog/sbom-software-bill-of-materials-co-to-jest-jak-wdrozyz" element={<BlogSbomCoTo />} />
                <Route path="/blog/webrtc-co-to-jest-jak-budowac-real-time-komunikacje" element={<BlogWebRtcCoTo />} />
                {/* Wave 148 */}
                <Route path="/blog/platform-engineering-co-to-jest-internal-developer-platform" element={<BlogPlatformEngineeringCoTo />} />
                <Route path="/blog/ebpf-co-to-jest-jak-uzywac-kubernetes-observability" element={<BlogEbpfCoTo />} />
                <Route path="/blog/finops-co-to-jest-jak-optymalizowac-koszty-cloud" element={<BlogFinOpsCoTo />} />
                {/* Wave 147 */}
                <Route path="/blog/observability-co-to-jest-opentelemetry-prometheus-grafana" element={<BlogObservabilityCoTo />} />
                <Route path="/blog/service-mesh-co-to-jest-istio-linkerd-mtls" element={<BlogServiceMeshCoTo />} />
                <Route path="/blog/grpc-co-to-jest-protocol-buffers-mikroserwisy" element={<BlogGrpcCoTo />} />
                {/* Wave 146 */}
                <Route path="/blog/gitops-co-to-jest-jak-wdrozyz-argo-cd-flux" element={<BlogGitOpsCoTo />} />
                <Route path="/blog/dora-metrics-co-to-jest-jak-mierzyc-wydajnosc-devops" element={<BlogDoraMetricsCoTo />} />
                <Route path="/blog/chaos-engineering-co-to-jest-jak-wdrozyz" element={<BlogChaosEngineeringCoTo />} />
                {/* Wave 145 */}
                <Route path="/blog/time-to-value-co-to-jest-jak-skrocic-ttv" element={<BlogTimeToValueCoTo />} />
                <Route path="/blog/activation-rate-co-to-jest-jak-poprawic-aktywacje" element={<BlogActivationRateCoTo />} />
                <Route path="/blog/feature-adoption-co-to-jest-jak-zwiekszyc-adopcje-funkcji" element={<BlogFeatureAdoptionCoTo />} />
                {/* Wave 144 */}
                <Route path="/blog/win-rate-wskaznik-wygranych-jak-poprawic" element={<BlogWinRateCoTo />} />
                <Route path="/blog/lejek-konwersji-conversion-funnel-co-to-jest" element={<BlogConversionFunnelCoTo />} />
                <Route path="/blog/churn-prediction-jak-przewidywac-zapobiegac-churnu" element={<BlogChurnPredictionCoTo />} />
                {/* Wave 143 */}
                <Route path="/blog/quota-planning-targetowanie-sprzedazowe-saas" element={<BlogQuotaPlanningCoTo />} />
                <Route path="/blog/nrr-grr-net-revenue-retention-co-to-jest" element={<BlogNrrGrrCoTo />} />
                <Route path="/blog/pipeline-velocity-co-to-jest-jak-poprawic" element={<BlogPipelineVelocityCoTo />} />
                {/* Wave 142 */}
                <Route path="/blog/data-governance-co-to-jest-jak-wdrozyz-lad-danych" element={<BlogDataGovernanceCoTo />} />
                <Route path="/blog/gdpr-rodo-co-to-jest-jak-wdrozyz-firmy-technologiczne" element={<BlogGdprCoTo />} />
                <Route path="/blog/api-gateway-co-to-jest-jak-wybrac-kong-aws-apigee" element={<BlogApiGatewayCoTo />} />
                {/* Wave 141 */}
                <Route path="/blog/event-driven-architecture-co-to-jest-jak-wdrozyz" element={<BlogEventDrivenArchCoTo />} />
                <Route path="/blog/cqrs-command-query-responsibility-segregation-co-to-jest" element={<BlogCqrsCoTo />} />
                <Route path="/blog/data-mesh-co-to-jest-jak-wdrozyz-architekture-danych" element={<BlogDataMeshCoTo />} />
                {/* Wave 140 */}
                <Route path="/blog/ai-agents-autonomiczne-agenty-co-to-jest" element={<BlogAiAgentsCoTo />} />
                <Route path="/blog/prompt-engineering-co-to-jest-jak-pisac-prompty" element={<BlogPromptEngineeringCoTo />} />
                <Route path="/blog/fine-tuning-llm-co-to-jest-jak-dostroic-model-ai" element={<BlogFineTuningCoTo />} />
                {/* Wave 139 */}
                <Route path="/blog/mlops-machine-learning-operations-co-to-jest" element={<BlogMlopsCoTo />} />
                <Route path="/blog/vector-database-co-to-jest-jak-wybrac" element={<BlogVectorDatabaseCoTo />} />
                <Route path="/blog/rag-retrieval-augmented-generation-co-to-jest" element={<BlogRagPatternCoTo />} />
                {/* Wave 138 */}
                <Route path="/blog/soc2-compliance-co-to-jest-jak-uzyskac-startup" element={<BlogSoc2CoTo />} />
                <Route path="/blog/data-warehouse-co-to-jest-jak-wybrac" element={<BlogDataWarehouseCoTo />} />
                <Route path="/blog/zero-trust-security-co-to-jest-jak-wdrozyz" element={<BlogZeroTrustCoTo />} />
                {/* Wave 137 */}
                <Route path="/blog/sprint-planning-co-to-jest-jak-przeprowadzic" element={<BlogSprintPlanningCoTo />} />
                <Route path="/blog/partner-ecosystem-ekosystem-partnerski-saas" element={<BlogPartnerEcosystemCoTo />} />
                <Route path="/blog/sre-site-reliability-engineering-co-to-jest" element={<BlogSrePracticeCoTo />} />
                {/* Wave 136 */}
                <Route path="/blog/deal-desk-co-to-jest-sprzedaz-saas-enterprise" element={<BlogDealDeskCoTo />} />
                <Route path="/blog/sales-compensation-plan-prowizyjny-co-to-jest" element={<BlogSalesCompCoTo />} />
                <Route path="/blog/territory-planning-planowanie-terytoriow-sprzedazowych" element={<BlogTerritoryPlanningCoTo />} />
                {/* Wave 135 */}
                <Route path="/blog/cap-table-tabela-kapitalizacji-co-to-jest" element={<BlogCapTableCoTo />} />
                <Route path="/blog/safe-note-co-to-jest-jak-dziala-startup" element={<BlogSafeNoteCoTo />} />
                <Route path="/blog/vesting-schedule-co-to-jest-equity-startup" element={<BlogVestingScheduleCoTo />} />
                {/* Wave 134 */}
                <Route path="/blog/retention-curve-krzywa-retencji-co-to-jest" element={<BlogRetentionCurveCoTo />} />
                <Route path="/blog/headcount-planning-planowanie-zatrudnienia-startup" element={<BlogHeadcountPlanningCoTo />} />
                <Route path="/blog/data-room-co-to-jest-jak-przygotowac-startup" element={<BlogDataRoomCoTo />} />
                {/* Wave 133 */}
                <Route path="/blog/usage-based-pricing-co-to-jest-jak-wdrozyz" element={<BlogUsageBasedPricingCoTo />} />
                <Route path="/blog/two-sided-marketplace-dwustronny-rynek-co-to-jest" element={<BlogTwoSidedMarketplaceCoTo />} />
                <Route path="/blog/growth-accounting-analiza-wzrostu-uzytkownikow" element={<BlogGrowthAccountingCoTo />} />
                {/* Wave 132 */}
                <Route path="/blog/magic-number-efektywnosc-sprzedazy-saas" element={<BlogMagicNumberCoTo />} />
                <Route path="/blog/dau-mau-stickiness-metryki-zaangazowania" element={<BlogDauMauCoTo />} />
                <Route path="/blog/viral-coefficient-wspolczynnik-viralnosci-produktu" element={<BlogViralCoefficientCoTo />} />
                {/* Wave 131 */}
                <Route path="/blog/feature-flags-co-to-jest-jak-stosowac" element={<BlogFeatureFlagCoTo />} />
                <Route path="/blog/product-discovery-co-to-jest-jak-przeprowadzic" element={<BlogProductDiscoveryCoTo />} />
                <Route path="/blog/cro-conversion-rate-optimization-co-to-jest" element={<BlogCroCoToJest />} />
                {/* Wave 130 */}
                <Route path="/blog/channel-sales-sprzedaz-partnerska-co-to-jest" element={<BlogChannelSalesCoTo />} />
                <Route path="/blog/annual-planning-planowanie-roczne-firmy" element={<BlogAnnualPlanningCoTo />} />
                <Route path="/blog/financial-model-co-to-jest-saas-startup" element={<BlogFinancialModelCoTo />} />
                {/* Wave 129 */}
                <Route path="/blog/sales-playbook-co-to-jest-jak-budowac" element={<BlogSalesPlaybookCoTo />} />
                <Route path="/blog/key-account-management-kam-co-to-jest" element={<BlogKeyAccountManagement />} />
                <Route path="/blog/board-meeting-spotkanie-zarzadu-jak-przygotowac" element={<BlogBoardMeetingCoTo />} />
                {/* Wave 128 */}
                <Route path="/blog/category-creation-tworzenie-kategorii-rynkowej" element={<BlogCategoryCreationCoTo />} />
                <Route path="/blog/churn-prevention-zapobieganie-odejsciom-klientow" element={<BlogChurnPreventionCoTo />} />
                <Route path="/blog/expansion-revenue-upsell-cross-sell-saas" element={<BlogExpansionRevenueCoTo />} />
                {/* Wave 127 */}
                <Route path="/blog/investor-update-aktualizacja-dla-inwestorow" element={<BlogInvestorUpdateCoTo />} />
                <Route path="/blog/ote-on-target-earnings-sprzedaz-b2b" element={<BlogOteCoToJest />} />
                <Route path="/blog/champion-building-sprzedaz-b2b-enterprise" element={<BlogChampionBuildingCoTo />} />
                {/* Wave 126 */}
                <Route path="/blog/jobs-to-be-done-jtbd-co-to-jest" element={<BlogJobsToBeDoneCoTo />} />
                <Route path="/blog/esg-co-to-jest-environmental-social-governance" element={<BlogEsgCoToJest />} />
                <Route path="/blog/ipo-co-to-jest-debiut-gieldowy" element={<BlogIpoCoToJest />} />
                {/* Wave 125 */}
                <Route path="/blog/nps-net-promoter-score-co-to-jest" element={<BlogNpsCoToJest />} />
                <Route path="/blog/aarrr-pirate-metrics-framework-wzrostu" element={<BlogAarrrPirateMetrics />} />
                <Route path="/blog/burn-multiple-efektywnosc-kapitalowa-saas" element={<BlogBurnMultipleCoTo />} />
                {/* Wave 124 */}
                <Route path="/blog/proposal-sprzedazowy-oferta-handlowa-b2b" element={<BlogProposalSprzedazowy />} />
                <Route path="/blog/term-sheet-co-to-jest-vc-inwestycje" element={<BlogTermSheetCoTo />} />
                <Route path="/blog/moat-przewaga-konkurencyjna-co-to-jest" element={<BlogMoatCoToJest />} />
                {/* Wave 123 */}
                <Route path="/blog/multithreading-sprzedaz-b2b-buying-committee" element={<BlogMultithreadingSprzedaz />} />
                <Route path="/blog/ramp-period-onboarding-handlowca-b2b" element={<BlogRampingSprzedaz />} />
                <Route path="/blog/pipeline-management-zarzadzanie-sprzedaza-b2b" element={<BlogPipelineManagementCoTo />} />
                {/* Wave 122 */}
                <Route path="/blog/sales-forecast-prognoza-sprzedazy" element={<BlogSalesForecastCoTo />} />
                <Route path="/blog/techniki-closingu-zamykanie-sprzedazy" element={<BlogClosingTechniqueCoTo />} />
                <Route path="/blog/sales-operations-co-to-jest" element={<BlogSalesOpsCoTo />} />
                {/* Wave 121 */}
                <Route path="/blog/demo-sprzedazowe-jak-prowadzic" element={<BlogDemoSalesCoTo />} />
                <Route path="/blog/poc-proof-of-concept-sprzedaz-b2b" element={<BlogPocCoToJest />} />
                <Route path="/blog/quota-sprzedazowa-co-to-jest" element={<BlogQuotaSprzedazowa />} />
                {/* Wave 120 */}
                <Route path="/blog/challenger-sale-metodologia-sprzedazy" element={<BlogChallengerSaleCoTo />} />
                <Route path="/blog/negocjacje-sprzedazowe-techniki-b2b" element={<BlogNegocjacjeSprzedazowe />} />
                <Route path="/blog/prospecting-b2b-generowanie-leadow" element={<BlogProspectingB2bCoTo />} />
                {/* Wave 119 */}
                <Route path="/blog/value-selling-sprzedaz-przez-wartosc" element={<BlogValueSellingCoTo />} />
                <Route path="/blog/spin-selling-metodologia-sprzedazy" element={<BlogSpinSellingCoTo />} />
                <Route path="/blog/sales-discovery-rozmowa-sprzedazowa" element={<BlogSalesDiscoveryCoTo />} />
                {/* Wave 118 */}
                <Route path="/blog/cac-payback-period-co-to" element={<BlogPaybackPeriodCoTo />} />
                <Route path="/blog/icp-ideal-customer-profile-co-to" element={<BlogIcpCoToJest />} />
                <Route path="/blog/abm-account-based-marketing-co-to" element={<BlogAbmCoToJest />} />
                {/* Wave 117 */}
                <Route path="/blog/mrr-monthly-recurring-revenue-co-to" element={<BlogMrrCoToJest />} />
                <Route path="/blog/gross-margin-marza-brutto-co-to" element={<BlogGrossMarginCoTo />} />
                <Route path="/blog/rule-of-40-co-to-jest" element={<BlogRuleOf40CoTo />} />
                {/* Wave 116 */}
                <Route path="/blog/arr-annual-recurring-revenue-co-to" element={<BlogArrCoToJest />} />
                <Route path="/blog/cac-customer-acquisition-cost-co-to" element={<BlogCacCoToJest />} />
                <Route path="/blog/ltv-customer-lifetime-value-co-to" element={<BlogLtvCoToJest />} />
                {/* Wave 115 */}
                <Route path="/blog/csat-customer-satisfaction-score-co-to" element={<BlogCsatCoTo />} />
                <Route path="/blog/customer-health-score-co-to" element={<BlogCustomerHealthScoreCoTo />} />
                <Route path="/blog/land-and-expand-strategia" element={<BlogLandAndExpandCoTo />} />
                {/* Wave 114 */}
                <Route path="/blog/sales-forecasting-prognozowanie-sprzedazy" element={<BlogSalesForecastingCoTo />} />
                <Route path="/blog/meddic-kwalifikacja-sprzedazy-b2b" element={<BlogMeddicCoTo />} />
                <Route path="/blog/objection-handling-obsluga-obiekcji-sprzedaz" element={<BlogObjectionHandlingCoTo />} />
                {/* Wave 113 */}
                <Route path="/blog/dcf-discounted-cash-flow-co-to" element={<BlogDcfCoTo />} />
                <Route path="/blog/wacc-sredni-wazony-koszt-kapitalu" element={<BlogWaccCoTo />} />
                <Route path="/blog/break-even-prog-rentownosci-co-to" element={<BlogBreakevenCoTo />} />
                {/* Wave 112 */}
                <Route path="/blog/postgresql-co-to-jest" element={<BlogPostgresqlCoTo />} />
                <Route path="/blog/elasticsearch-co-to-jest" element={<BlogElasticsearchCoTo />} />
                <Route path="/blog/kafka-co-to-jest" element={<BlogKafkaCoTo />} />
                {/* Wave 111 */}
                <Route path="/blog/terraform-co-to-jest" element={<BlogTerraformCoTo />} />
                <Route path="/blog/mongodb-co-to-jest" element={<BlogMongodbCoTo />} />
                <Route path="/blog/typescript-co-to-jest" element={<BlogTypescriptCoTo />} />
                {/* Wave 110 */}
                <Route path="/blog/kubernetes-co-to-jest" element={<BlogKubernetesCoTo />} />
                <Route path="/blog/redis-co-to-jest" element={<BlogRedisCoTo />} />
                <Route path="/blog/aws-co-to-jest" element={<BlogAwsCoTo />} />
                {/* Wave 109 */}
                <Route path="/blog/docker-co-to-jest" element={<BlogDockerCoTo />} />
                <Route path="/blog/rest-api-co-to" element={<BlogRestApiCoTo />} />
                <Route path="/blog/graphql-co-to" element={<BlogGraphqlCoTo />} />
                {/* Wave 108 */}
                <Route path="/blog/ci-cd-co-to-jest" element={<BlogCiCdCoTo />} />
                <Route path="/blog/devops-co-to-jest" element={<BlogDevOpsCoTo />} />
                <Route path="/blog/mikroserwisy-co-to-jest" element={<BlogMicroservicesCoTo />} />
                {/* Wave 107 */}
                <Route path="/blog/user-story-co-to" element={<BlogUserStoryCoTo />} />
                <Route path="/blog/sla-slo-sli-co-to" element={<BlogSlaCoTo />} />
                <Route path="/blog/postmortem-analiza-incydentu" element={<BlogPostmortemCoTo />} />
                {/* Wave 106 */}
                <Route path="/blog/jobs-to-be-done-co-to" element={<BlogJobsToBeDeoneCoTo />} />
                <Route path="/blog/product-owner-co-to" element={<BlogProductOwnerCoTo />} />
                <Route path="/blog/scrum-master-co-to" element={<BlogScrumMasterCoTo />} />
                {/* Wave 105 */}
                <Route path="/blog/risk-management-co-to" element={<BlogRiskManagementCoTo />} />
                <Route path="/blog/sprint-retrospective-co-to" element={<BlogSprintRetrospectiveCoTo />} />
                <Route path="/blog/pivot-startup-co-to" element={<BlogPivotCoTo />} />
                {/* Wave 104 */}
                <Route path="/blog/tam-sam-som-co-to" element={<BlogTamSamSomCoTo />} />
                <Route path="/blog/dashboard-kpi-co-to" element={<BlogKpiDashboardCoTo />} />
                <Route path="/blog/stakeholder-management-co-to" element={<BlogStakeholderManagementCoTo />} />
                {/* Wave 103 */}
                <Route path="/blog/sdr-co-to-jest" element={<BlogSdrCoTo />} />
                <Route path="/blog/buyer-persona-co-to" element={<BlogBuyerPersonaCoTo />} />
                <Route path="/blog/change-management-co-to" element={<BlogChangeManagementCoTo />} />
                {/* Wave 102 */}
                <Route path="/blog/feedback-loop-co-to" element={<BlogFeedbackLoopCoTo />} />
                <Route path="/blog/community-led-growth-co-to" element={<BlogCommunityLedGrowthCoTo />} />
                <Route path="/blog/qbr-co-to" element={<BlogQbrCoTo />} />
                {/* Wave 101 */}
                <Route path="/blog/efekty-sieciowe-network-effects" element={<BlogNetworkEffectsCoTo />} />
                <Route path="/blog/switching-costs-co-to" element={<BlogSwitchingCostsCoTo />} />
                <Route path="/blog/competitive-moat-co-to" element={<BlogCompetitiveMoatCoTo />} />
                {/* Wave 100 */}
                <Route path="/blog/analiza-sentymentu-co-to" element={<BlogSentimentAnalysisCoTo />} />
                <Route path="/blog/growth-loop-co-to" element={<BlogGrowthLoopCoTo />} />
                <Route path="/blog/data-driven-marketing-co-to" element={<BlogDataDrivenMarketingCoTo />} />
                {/* Wave 99 */}
                <Route path="/blog/event-tracking-co-to" element={<BlogEventTrackingCoTo />} />
                <Route path="/blog/funnel-analytics-co-to" element={<BlogFunnelAnalyticsCoTo />} />
                <Route path="/blog/social-listening-co-to" element={<BlogSocialListeningCoTo />} />
                {/* Wave 98 */}
                <Route path="/blog/burn-rate-runway-co-to" element={<BlogBurnRateCoTo />} />
                <Route path="/blog/unit-economics-co-to" element={<BlogUnitEconomicsCoTo />} />
                <Route path="/blog/north-star-metric-co-to" element={<BlogNorthStarMetricCoTo />} />
                {/* Wave 97 */}
                <Route path="/blog/design-sprint-co-to" element={<BlogDesignSprintCoTo />} />
                <Route path="/blog/dług-techniczny-co-to" element={<BlogTechDebtCoTo />} />
                <Route path="/blog/value-stream-mapping-co-to" element={<BlogValueStreamMappingCoTo />} />
                {/* Wave 96 */}
                <Route path="/blog/okr-co-to-jest" element={<BlogOkrCoTo />} />
                <Route path="/blog/service-blueprint-co-to" element={<BlogServiceBlueprintCoTo />} />
                <Route path="/blog/mvp-co-to-jest" element={<BlogMvpCoTo />} />
                {/* Wave 95 */}
                <Route path="/blog/user-persona-co-to" element={<BlogUserPersonaCoTo />} />
                <Route path="/blog/mapa-empatii-co-to" element={<BlogEmpathyMapCoTo />} />
                <Route path="/blog/net-promoter-score-co-to" element={<BlogNetPromoterScoreCoTo />} />
                {/* Wave 94 */}
                <Route path="/blog/seo-copywriting-co-to" element={<BlogSeoCopywritingCoTo />} />
                <Route path="/blog/ab-testing-co-to" element={<BlogAbTestingCoTo />} />
                <Route path="/blog/heatmapa-co-to" element={<BlogHeatmapCoTo />} />
                {/* Wave 93 */}
                <Route path="/blog/dostepnosc-stron-internetowych" element={<BlogAccessibilityWebCoTo />} />
                <Route path="/blog/segmentacja-rynku-co-to" element={<BlogMarketSegmentationCoTo />} />
                <Route path="/blog/paid-social-co-to" element={<BlogPaidSocialCoTo />} />
                {/* Wave 92 */}
                <Route path="/blog/wireframe-co-to" element={<BlogWireframeCoTo />} />
                <Route path="/blog/optymalizacja-strony-cennikowej" element={<BlogPricingPageOptimizationCoTo />} />
                <Route path="/blog/sales-velocity-co-to" element={<BlogSalesVelocityCoTo />} />
                {/* Wave 91 */}
                <Route path="/blog/email-deliverability-co-to" element={<BlogEmailDeliverabilityCoTo />} />
                <Route path="/blog/customer-ltv-co-to" element={<BlogCustomerLtvCoTo />} />
                <Route path="/blog/content-distribution-co-to" element={<BlogContentDistributionCoTo />} />
                {/* Wave 90 */}
                <Route path="/blog/design-system-co-to" element={<BlogDesignSystemCoTo />} />
                <Route path="/blog/subscription-model-co-to" element={<BlogSubscriptionModelCoTo />} />
                <Route path="/blog/ux-audit-co-to" element={<BlogUxAuditCoTo />} />
                {/* Wave 89 */}
                <Route path="/blog/brand-guidelines-co-to" element={<BlogBrandGuidelinesCoTo />} />
                <Route path="/blog/information-architecture-co-to" element={<BlogInformationArchitectureCoTo />} />
                <Route path="/blog/revenue-model-co-to" element={<BlogRevenueModelCoTo />} />
                {/* Wave 88 */}
                <Route path="/blog/lead-scoring-co-to" element={<BlogLeadScoringCoTo />} />
                <Route path="/blog/saas-metrics-co-to" element={<BlogSaasMetricsCoTo />} />
                {/* Wave 87 */}
                <Route path="/blog/service-design-co-to" element={<BlogServiceDesignCoTo />} />
                <Route path="/blog/churn-analysis-co-to" element={<BlogChurnAnalysisCoTo />} />
                <Route path="/blog/reklama-programatyczna-co-to" element={<BlogProgrammaticAdvertisingCoTo />} />
                {/* Wave 86 */}
                <Route path="/blog/usability-testing-co-to" element={<BlogUsabilityTestingCoTo />} />
                <Route path="/blog/strategia-komunikacji-co-to" element={<BlogCommunicationStrategyCoTo />} />
                <Route path="/blog/positioning-statement-co-to" element={<BlogPositioningStatementCoTo />} />
                {/* Wave 85 */}
                <Route path="/blog/customer-experience-management-co-to" element={<BlogCustomerExperienceManagementCoTo />} />
                <Route path="/blog/product-analytics-co-to" element={<BlogProductAnalyticsCoTo />} />
                <Route path="/blog/cohort-analysis-co-to" element={<BlogCohortAnalysisCoTo />} />
                {/* Wave 84 */}
                <Route path="/blog/architektura-marki-co-to" element={<BlogBrandArchitectureCoTo />} />
                <Route path="/blog/target-audience-co-to" element={<BlogTargetAudienceCoTo />} />
                <Route path="/blog/voice-of-customer-co-to" element={<BlogVoiceOfCustomerCoTo />} />
                {/* Wave 83 */}
                <Route path="/blog/identyfikacja-wizualna-co-to" element={<BlogVisualIdentityCoTo />} />
                <Route path="/blog/multichannel-marketing-co-to" element={<BlogMultichannelMarketingCoTo />} />
                <Route path="/blog/competitive-intelligence-co-to" element={<BlogCompetitiveIntelligenceCoTo />} />
                {/* Wave 82 */}
                <Route path="/blog/data-storytelling-co-to" element={<BlogDataStorytellingCoTo />} />
                <Route path="/blog/brand-equity-co-to" element={<BlogBrandEquityCoTo />} />
                <Route path="/blog/sponsoring-marketing-co-to" element={<BlogSponsorshipMarketingCoTo />} />
                {/* Wave 81 */}
                <Route path="/blog/marketing-mix-co-to" element={<BlogMarketingMixCoTo />} />
                <Route path="/blog/product-launch-co-to" element={<BlogProductLaunchCoTo />} />
                <Route path="/blog/behavioral-marketing-co-to" element={<BlogBehavioralMarketingCoTo />} />
                {/* Wave 80 */}
                <Route path="/blog/topic-clusters-co-to" element={<BlogTopicClustersCoTo />} />
                <Route path="/blog/zero-party-data-co-to" element={<BlogZeroPartyDataCoTo />} />
                <Route path="/blog/brand-ambassador-co-to" element={<BlogBrandAmbassadorCoTo />} />
                {/* Wave 79 */}
                <Route path="/blog/dark-social-co-to" element={<BlogDarkSocialCoTo />} />
                <Route path="/blog/content-audit-co-to" element={<BlogContentAuditCoTo />} />
                <Route path="/blog/employee-advocacy-co-to" element={<BlogEmployeeAdvocacyCoTo />} />
                {/* Wave 78 */}
                <Route path="/blog/thought-leadership-co-to" element={<BlogThoughtLeadershipCoTo />} />
                <Route path="/blog/public-relations-co-to" element={<BlogPublicRelationsCoTo />} />
                <Route path="/blog/co-marketing-co-to" element={<BlogCoMarketingCoTo />} />
                {/* Wave 77 */}
                <Route path="/blog/creator-economy-co-to" element={<BlogCreatorEconomyCoTo />} />
                <Route path="/blog/micro-influencer-marketing-co-to" element={<BlogMicroInfluencerCoTo />} />
                <Route path="/blog/brand-storytelling-co-to" element={<BlogBrandStorytellingCoTo />} />
                {/* Wave 76 */}
                <Route path="/blog/neuromarketing-co-to" element={<BlogNeuromarketingCoTo />} />
                <Route path="/blog/psychologia-cen-co-to" element={<BlogPricingPsychologyCoTo />} />
                <Route path="/blog/fomo-marketing-co-to" element={<BlogFOMOMarketingCoTo />} />
                {/* Wave 75 */}
                <Route path="/blog/loyalty-program-co-to" element={<BlogLoyaltyProgramCoTo />} />
                <Route path="/blog/personalizacja-marketingu-co-to" element={<BlogPersonalizationMarketingCoTo />} />
                <Route path="/blog/mobile-marketing-co-to" element={<BlogMobileMarketingCoTo />} />
                {/* Wave 74 */}
                <Route path="/blog/cause-marketing-co-to" element={<BlogCauseMarketingCoTo />} />
                <Route path="/blog/customer-acquisition-co-to" element={<BlogCustomerAcquisitionCoTo />} />
                <Route path="/blog/customer-retention-co-to" element={<BlogCustomerRetentionCoTo />} />
                {/* Wave 73 */}
                <Route path="/blog/account-based-marketing-co-to" element={<BlogAccountBasedMarketingCoTo />} />
                <Route path="/blog/inbound-marketing-co-to" element={<BlogInboundMarketingCoTo />} />
                <Route path="/blog/outbound-marketing-co-to" element={<BlogOutboundMarketingCoTo />} />
                {/* Wave 72 */}
                <Route path="/blog/event-marketing-co-to" element={<BlogEventMarketingCoTo />} />
                <Route path="/blog/brand-activation-co-to" element={<BlogBrandActivationCoTo />} />
                <Route path="/blog/social-commerce-co-to" element={<BlogSocialCommerceCoTo />} />
                {/* Wave 71 */}
                <Route path="/blog/viral-marketing-co-to" element={<BlogViralMarketingCoTo />} />
                <Route path="/blog/word-of-mouth-marketing-co-to" element={<BlogWordOfMouthCoTo />} />
                <Route path="/blog/guerrilla-marketing-co-to" element={<BlogGuerrillaMarketingCoTo />} />
                {/* Wave 70 */}
                <Route path="/blog/bootstrapping-co-to" element={<BlogBootstrappingCoTo />} />
                <Route path="/blog/lean-startup-co-to" element={<BlogLeanStartupCoTo />} />
                <Route path="/blog/kanban-co-to" element={<BlogKanbanCoTo />} />
                {/* Wave 69 */}
                <Route path="/blog/okr-co-to" element={<BlogOKRCoTo />} />
                <Route path="/blog/product-marketing-co-to" element={<BlogProductMarketingCoTo />} />
                <Route path="/blog/employer-branding-co-to" element={<BlogEmployerBrandingCoTo />} />
                {/* Wave 68 */}
                <Route path="/blog/pricing-strategy-co-to" element={<BlogPricingStrategyCoTo />} />
                <Route path="/blog/micro-moments-co-to" element={<BlogMicroMomentsCoTo />} />
                <Route path="/blog/buyer-journey-co-to" element={<BlogBuyerJourneyCoTo />} />
                {/* Wave 67 */}
                <Route path="/blog/ambassador-marketing-co-to" element={<BlogAmbassadorMarketingCoTo />} />
                <Route path="/blog/go-to-market-strategy-co-to" element={<BlogGoToMarketCoTo />} />
                <Route path="/blog/revenue-operations-revops-co-to" element={<BlogRevenueOperationsCoTo />} />
                {/* Wave 66 */}
                <Route path="/blog/design-thinking-co-to" element={<BlogDesignThinkingCoTo />} />
                <Route path="/blog/sales-funnel-co-to" element={<BlogSalesFunnelCoTo />} />
                <Route path="/blog/community-marketing-co-to" element={<BlogCommunityMarketingCoTo />} />
                {/* Wave 65 */}
                <Route path="/blog/brand-positioning-co-to" element={<BlogBrandPositioningCoTo />} />
                <Route path="/blog/tam-sam-som-co-to" element={<BlogTAMSAMSOMCoTo />} />
                <Route path="/blog/user-onboarding-co-to" element={<BlogUserOnboardingCoTo />} />
                {/* Wave 64 */}
                <Route path="/blog/customer-data-platform-cdp-co-to" element={<BlogCustomerDataPlatformCoTo />} />
                <Route path="/blog/lead-nurturing-co-to" element={<BlogLeadNurturingCoTo />} />
                <Route path="/blog/account-management-co-to" element={<BlogAccountManagementCoTo />} />
                {/* Wave 63 */}
                <Route path="/blog/win-loss-analysis-co-to" element={<BlogWinLossAnalysisCoTo />} />
                <Route path="/blog/email-marketing-co-to" element={<BlogEmailMarketingCoTo />} />
                <Route path="/blog/retention-marketing-co-to" element={<BlogRetentionMarketingCoTo />} />
                {/* Wave 62 */}
                <Route path="/blog/sales-enablement-co-to" element={<BlogSalesEnablementCoTo />} />
                <Route path="/blog/zero-click-search-co-to" element={<BlogZeroClickSearchCoTo />} />
                <Route path="/blog/market-research-co-to" element={<BlogMarketResearchCoTo />} />
                {/* Wave 61 */}
                <Route path="/blog/attribution-modeling-co-to" element={<BlogAttributionModelingCoTo />} />
                <Route path="/blog/native-advertising-co-to" element={<BlogNativeAdvertisingCoTo />} />
                <Route path="/blog/customer-segmentation-co-to" element={<BlogCustomerSegmentationCoTo />} />
                {/* Wave 60 */}
                <Route path="/blog/hreflang-co-to" element={<BlogHreflangCoTo />} />
                <Route path="/blog/robots-txt-co-to" element={<BlogRobotsTxtCoTo />} />
                {/* Wave 59 */}
                <Route path="/blog/quality-score-co-to" element={<BlogQualityScoreCoTo />} />
                <Route path="/blog/smart-bidding-co-to" element={<BlogSmartBiddingCoTo />} />
                <Route path="/blog/performance-max-co-to" element={<BlogPerformanceMaxCoTo />} />
                {/* Wave 58 */}
                <Route path="/blog/e-e-a-t-seo" element={<BlogEEATCoTo />} />
                <Route path="/blog/crawl-budget-co-to" element={<BlogCrawlBudgetCoTo />} />
                <Route path="/blog/ugc-co-to" element={<BlogUGCCoTo />} />
                {/* Wave 57 */}
                <Route path="/blog/xml-sitemap-co-to" element={<BlogXMLSitemapCoTo />} />
                <Route path="/blog/bounce-rate-co-to" element={<BlogBounceRateCoTo />} />
                <Route path="/blog/referral-marketing-co-to" element={<BlogReferralMarketingCoTo />} />
                {/* Wave 56 */}
                <Route path="/blog/long-tail-keywords-co-to" element={<BlogLongTailKeywordsCoTo />} />
                <Route path="/blog/page-speed-co-to" element={<BlogPageSpeedCoTo />} />
                <Route path="/blog/jobs-to-be-done-jtbd" element={<BlogJTBDCoTo />} />
                {/* Wave 55 */}
                <Route path="/blog/social-proof-co-to" element={<BlogSocialProofCoTo />} />
                <Route path="/blog/digital-pr-co-to" element={<BlogDigitalPRCoTo />} />
                <Route path="/blog/voice-search-seo" element={<BlogVoiceSearchCoTo />} />
                {/* Wave 54 */}
                <Route path="/blog/internal-linking-co-to" element={<BlogInternalLinkingCoTo />} />
                <Route path="/blog/keyword-research-co-to" element={<BlogKeywordResearchCoTo />} />
                <Route path="/blog/google-business-profile-co-to" element={<BlogGoogleBusinessProfileCoTo />} />
                {/* Wave 53 */}
                <Route path="/blog/meta-tagi-co-to" element={<BlogMetaTagiCoTo />} />
                <Route path="/blog/featured-snippets-co-to" element={<BlogFeaturedSnippetsCoTo />} />
                <Route path="/blog/product-led-growth-co-to" element={<BlogProductLedGrowthCoTo />} />
                {/* Wave 52 */}
                <Route path="/blog/schema-markup-co-to" element={<BlogSchemaMarkupCoTo />} />
                <Route path="/blog/ecommerce-marketing-co-to" element={<BlogEcommerceMarketingCoTo />} />
                {/* Wave 51 */}
                <Route path="/blog/growth-marketing-co-to" element={<BlogGrowthMarketingCoTo />} />
                {/* Wave 50 */}
                <Route path="/blog/seo-lokalne-co-to" element={<BlogSEOLokalneCoTo />} />
                <Route path="/blog/technical-seo-co-to" element={<BlogTechnicalSEOCoTo />} />
                {/* Wave 49 */}
                <Route path="/blog/icp-co-to-jest" element={<BlogICPCoTo />} />
                <Route path="/blog/content-strategy-co-to" element={<BlogContentStrategyCoTo />} />
                {/* Wave 48 */}
                <Route path="/blog/marketing-automation-co-to" element={<BlogMarketingAutomationCoTo />} />
                {/* Wave 47 */}
                <Route path="/blog/affiliate-marketing-co-to" element={<BlogAffiliateMarketingCoTo />} />
                {/* Wave 46 */}
                <Route path="/blog/saas-pricing-modele-cenowe" element={<BlogSaaSPricingCoTo />} />
                <Route path="/blog/email-sequence-co-to" element={<BlogEmailSequenceCoTo />} />
                {/* Wave 45 */}
                <Route path="/blog/linkedin-marketing-co-to" element={<BlogLinkedInMarketingCoTo />} />
                <Route path="/blog/content-calendar-co-to" element={<BlogContentCalendarCoTo />} />
                <Route path="/blog/revops-co-to-jest" element={<BlogRevOpsCoTo />} />
                {/* Wave 44 */}
                <Route path="/blog/utm-co-to-jest" element={<BlogUTMCoToJest />} />
                <Route path="/blog/cro-co-to-jest" element={<BlogCROCoTo />} />
                <Route path="/blog/heatmapy-co-to-jest" element={<BlogHeatmapyCoTo />} />
                {/* Wave 43 */}
                <Route path="/blog/storytelling-co-to" element={<BlogStorytellingCoTo />} />
                <Route path="/blog/podcast-marketing-co-to" element={<BlogPodcastMarketingCoTo />} />
                {/* Wave 42 */}
                <Route path="/blog/freemium-co-to" element={<BlogFreemiumCoTo />} />
                <Route path="/blog/social-selling-co-to" element={<BlogSocialSellingCoTo />} />
                {/* Wave 41 */}
                <Route path="/blog/programmatic-advertising-co-to" element={<BlogProgrammaticCoTo />} />
                <Route path="/blog/customer-success-co-to" element={<BlogCustomerSuccessCoTo />} />
                {/* Wave 40 */}
                <Route path="/blog/gtm-strategy-co-to" element={<BlogGTMStrategyCoTo />} />
                <Route path="/blog/abm-co-to-jest" element={<BlogABMCoTo />} />
                <Route path="/blog/demand-generation-co-to" element={<BlogDemandGenerationCoTo />} />
                {/* Wave 39 */}
                <Route path="/blog/product-market-fit-co-to" element={<BlogProductMarketFit />} />
                <Route path="/blog/brand-awareness-co-to" element={<BlogBrandAwarenessCoTo />} />
                <Route path="/blog/marketing-b2b-co-to" element={<BlogB2BMarketingCoTo />} />
                {/* Wave 38 */}
                <Route path="/blog/usp-co-to-jest" element={<BlogUSPCoToJest />} />
                <Route path="/blog/value-proposition-co-to" element={<BlogValuePropositionCoTo />} />
                <Route path="/blog/cold-email-co-to" element={<BlogColdEmailCoTo />} />
                {/* Wave 37 */}
                <Route path="/blog/lejek-sprzedazowy-co-to" element={<BlogLejekSprzedazowy />} />
                <Route path="/blog/churn-rate-co-to" element={<BlogChurnRateCoTo />} />
                <Route path="/blog/onboarding-co-to-jest" element={<BlogOnboardingCoToJest />} />
                <Route path="/blog/omnichannel-co-to" element={<BlogOmnichannelCoTo />} />
                {/* Wave 36 */}
                <Route path="/blog/customer-journey-co-to" element={<BlogCustomerJourneyCoTo />} />
                <Route path="/blog/crm-co-to-jest" element={<BlogCRMCoToJest />} />
                <Route path="/blog/influencer-marketing-co-to" element={<BlogInfluencerMarketingCoTo />} />
                {/* Wave 35 */}
                <Route path="/blog/webinar-co-to-jest" element={<BlogWebinarCoToJest />} />
                <Route path="/blog/persona-marketingowa" element={<BlogPersonaMarketingowa />} />
                <Route path="/blog/ab-testing-co-to" element={<BlogABTestingCoTo />} />
                {/* Wave 34 */}
                <Route path="/blog/growth-hacking-co-to" element={<BlogGrowthHackingCoTo />} />
                <Route path="/blog/retargeting-co-to" element={<BlogRetargetingCoTo />} />
                <Route path="/blog/lead-generation-co-to" element={<BlogLeadGenerationCoTo />} />
                {/* Wave 33 */}
                <Route path="/blog/umowa-b2b-co-to-jest" element={<BlogUmowaBCoToJest />} />
                <Route path="/blog/ceidg-co-to-jest" element={<BlogCEIDGCoToJest />} />
                {/* Wave 32 */}
                <Route path="/blog/leasing-co-to-jest" element={<BlogLeasingCoToJest />} />
                <Route path="/blog/hipoteka-co-to-jest" element={<BlogHipotekaCoToJest />} />
                <Route path="/blog/krs-co-to-jest" element={<BlogKRSCoToJest />} />
                <Route path="/blog/outsourcing-co-to-jest" element={<BlogOutsourcingCoToJest />} />
                <Route path="/blog/faktoring-co-to-jest" element={<BlogFaktoringCoToJest />} />
                {/* Wave 31 */}
                <Route path="/blog/vat-co-to-jest" element={<BlogVATCoToJest />} />
                <Route path="/blog/pit-co-to-jest" element={<BlogPITCoToJest />} />
                <Route path="/blog/regon-co-to-jest" element={<BlogREGONCoToJest />} />
                <Route path="/blog/zus-co-to-jest" element={<BlogZUSCoToJest />} />
                {/* Wave 30 */}
                <Route path="/blog/freelancer-co-to-jest" element={<BlogFreelancerCoToJest />} />
                <Route path="/blog/nip-co-to-jest" element={<BlogNIPCoToJest />} />
                {/* Wave 29 */}
                <Route path="/blog/nps-co-to-jest" element={<BlogNPSCoToJest />} />
                <Route path="/blog/startup-co-to-jest" element={<BlogStartupCoToJest />} />
                <Route path="/blog/saas-co-to-jest" element={<BlogSaaSCoToJest />} />
                <Route path="/blog/ux-design-co-to" element={<BlogUXDesignCoTo />} />
                <Route path="/blog/mrr-arr-co-to" element={<BlogMRRARRCoTo />} />
                {/* Wave 28 */}
                <Route path="/blog/b2b-co-to-jest" element={<BlogB2BCoToJest />} />
                <Route path="/blog/venture-capital-co-to" element={<BlogVentureCapital />} />
                <Route path="/blog/pitch-deck-co-to" element={<BlogPitchDeck />} />
                <Route path="/blog/cross-selling-co-to" element={<BlogCrossSellingCoTo />} />
                <Route path="/blog/erp-co-to-jest" element={<BlogERPCoToJest />} />
                {/* Wave 27 */}
                <Route path="/blog/agile-co-to" element={<BlogAgileCoTo />} />
                <Route path="/blog/ebitda-co-to-jest" element={<BlogEbitdaCoToJest />} />
                <Route path="/blog/roi-co-to-jest" element={<BlogROICoToJest />} />
                <Route path="/blog/mvp-co-to-jest" element={<BlogMVPCoToJest />} />
                <Route path="/blog/due-diligence-co-to" element={<BlogDueDiligence />} />
                {/* Wave 26 */}
                <Route path="/blog/cpm-co-to" element={<BlogCPMCoTo />} />
                <Route path="/blog/scrum-co-to-jest" element={<BlogScrumCoToJest />} />
                <Route path="/blog/digital-marketing-co-to" element={<BlogDigitalMarketingCoTo />} />
                {/* Wave 25 */}
                <Route path="/blog/cold-calling-co-to" element={<BlogColdCallingCoTo />} />
                <Route path="/blog/lead-magnet-co-to" element={<BlogLeadMagnetCoTo />} />
                <Route path="/uslugi/strona-internetowa-dla-trenera-personalnego" element={<StronaInternetowaDlaTrenera />} />
                {/* Wave 24 */}
                <Route path="/blog/dropshipping-co-to-jest" element={<BlogDropshippingCoToJest />} />
                <Route path="/blog/jak-sprzedawac-na-allegro" element={<BlogJakSprzedawacNaAllegro />} />
                <Route path="/blog/e-commerce-co-to-jest" element={<BlogEcommerceCoToJest />} />
                {/* Wave 23 */}
                <Route path="/blog/google-tag-manager-co-to" element={<BlogGoogleTagManager />} />
                <Route path="/blog/link-building-co-to" element={<BlogLinkBuilding />} />
                <Route path="/blog/core-web-vitals-co-to" element={<BlogCoreWebVitals />} />
                <Route path="/blog/google-search-console-co-to" element={<BlogGoogleSearchConsole />} />
                {/* Wave 22 */}
                <Route path="/blog/kpi-co-to-jest" element={<BlogKPICoToJest />} />
                <Route path="/blog/api-co-to-jest" element={<BlogAPICoToJest />} />
                <Route path="/blog/konwersja-co-to" element={<BlogKonwersjaCoTo />} />
                <Route path="/blog/ctr-co-to-jest" element={<BlogCTRCoToJest />} />
                <Route path="/uslugi/strona-internetowa-dla-fotografa" element={<StronaInternetowaDlaFotografa />} />
                {/* Wave 21 */}
                <Route path="/blog/newsletter-co-to" element={<BlogNewsletterCoTo />} />
                <Route path="/blog/marketing-afiliacyjny-co-to" element={<BlogMarketingAfiliacyjny />} />
                <Route path="/blog/co-to-jest-cms" element={<BlogCMSCoToJest />} />
                <Route path="/uslugi/strona-internetowa-dla-prawnika" element={<StronaInternetowaDlaPrawnika />} />
                {/* Wave 20 */}
                <Route path="/blog/pozycjonowanie-sklepu-internetowego" element={<BlogPozycjonowanieSklepu />} />
                <Route path="/blog/seo-ecommerce-poradnik" element={<BlogSEOEcommercePoradnik />} />
                <Route path="/blog/branding-co-to" element={<BlogBrandingCoTo />} />
                <Route path="/blog/ui-ux-co-to" element={<BlogUIUXCoTo />} />
                <Route path="/blog/audyt-ux-strony" element={<BlogUXAudit />} />
                {/* Wave 219-222 */}
                <Route path="/blog/koszt-seo" element={<BlogKosztSEO />} />
                <Route path="/blog/marketing-dla-firmy" element={<BlogMarketingDlaFirmy />} />
                <Route path="/agencja-marketingowa/kielce" element={<AgencjaMarketingowaKielce />} />
                <Route path="/blog/jak-zalozyc-sklep-internetowy" element={<BlogEcommercePoradnik />} />
                <Route path="/uslugi/strony-internetowe/zabrze" element={<StronyInternetoweZabrze />} />
                <Route path="/blog/content-marketing-poradnik" element={<BlogContentMarketingPoradnik />} />
                <Route path="/strony-internetowe/walbrzych" element={<StronyInternetoweWalbrzych />} />
                <Route path="/blog/seo-techniczne-poradnik" element={<BlogSEOTechniczne />} />
                <Route path="/blog/automatyzacja-marketingu" element={<BlogAutomatyzacjaMarketingu />} />
                <Route path="/pozycjonowanie/gliwice" element={<PozycjonowanieGliwice />} />
                <Route path="/blog/wizerunek-firmy-w-internecie" element={<BlogWizerunekFirmy />} />
                <Route path="/agencja-marketingowa/czestochowa" element={<AgencjaMarketingowaCzestochowa />} />
                <Route path="/blog/email-marketing-automation" element={<BlogEmailMarketingAutomation />} />
                <Route path="/blog/marketing-nieruchomosci" element={<BlogMarketingNieruchomosci />} />
                <Route path="/agencja-marketingowa/bialystok" element={<AgencjaMarketingowaBialystok />} />
                <Route path="/blog/optymalizacja-google-ads" element={<BlogOptymalizacjaGoogleAds />} />
                <Route path="/pozycjonowanie/sosnowiec" element={<PozycjonowanieSosnowiec />} />
                <Route path="/blog/fotografia-architektury-wnetrz" element={<BlogFotografiaArchitektura />} />
                <Route path="/agencja-marketingowa/gliwice" element={<AgencjaMarketingowaGliwice />} />
                <Route path="/blog/sklep-internetowy-vs-marketplace" element={<BlogSklepInternetowyVsMarketplace />} />
                <Route path="/blog/strategia-cenowa" element={<BlogStrategiaCenowa />} />
                <Route path="/pozycjonowanie/zabrze" element={<PozycjonowanieZabrze />} />
                <Route path="/blog/ile-kosztuje-branding" element={<BlogKosztBrandingu />} />
                <Route path="/blog/rebranding-kiedy-i-jak" element={<BlogRebrandingPoradnik />} />
                <Route path="/blog/copywriting-seo-poradnik" element={<BlogCopywritingDlaSEO />} />
                <Route path="/agencja-marketingowa/sosnowiec" element={<AgencjaMarketingowaSosnowiec />} />
                <Route path="/blog/video-marketing-roi" element={<BlogVideoMarketingROI />} />
                <Route path="/blog/koszt-produkcji-wideo" element={<BlogKosztVideoMarketingowego />} />
                <Route path="/agencja-marketingowa/zabrze" element={<AgencjaMarketingowaZabrze />} />
                <Route path="/blog/marketing-b2b-strategia" element={<BlogMarketingB2B />} />
                <Route path="/blog/koszt-prowadzenia-strony-internetowej" element={<BlogKosztProwadzeniaStrony />} />
                <Route path="/agencja-marketingowa/walbrzych" element={<AgencjaMarketingowaWalbrzych />} />
                <Route path="/blog/linkedin-dla-firmy" element={<BlogLinkedInDlaFirmy />} />
                <Route path="/blog/marketing-lokalny-dla-firm" element={<BlogMarketingLokalny />} />
                <Route path="/agencja-marketingowa/elblag" element={<AgencjaMarketingowaElblag />} />
                <Route path="/pozycjonowanie/walbrzych" element={<PozycjonowanieWalbrzych />} />
                <Route path="/blog/koszt-marketingu-internetowego" element={<BlogKosztMarketinguInternetowego />} />
                <Route path="/pozycjonowanie/elblag" element={<PozycjonowanieElblag />} />
                <Route path="/blog/ile-kosztuje-logo" element={<BlogKosztLogo />} />
                <Route path="/agencja-marketingowa/legnica" element={<AgencjaMarketingowaLegnica />} />
                <Route path="/blog/sklep-internetowy-na-wlasnej-domenie" element={<BlogSklepInternetowyNaWlasnej />} />
                <Route path="/blog/jak-zwiekszyc-konwersje-strony" element={<BlogKonwersjaStrony />} />
                <Route path="/pozycjonowanie/legnica" element={<PozycjonowanieLegnica />} />
                <Route path="/blog/tiktok-dla-firmy" element={<BlogTikTokDlaFirmy />} />
                <Route path="/agencja-marketingowa/jelenia-gora" element={<AgencjaMarketingowaJeleniaGora />} />
                <Route path="/blog/youtube-dla-firmy" element={<BlogYouTubeDlaFirmy />} />
                <Route path="/blog/pinterest-dla-firmy" element={<BlogPinterestDlaFirmy />} />
                <Route path="/pozycjonowanie/kalisz" element={<PozycjonowanieKalisz />} />
                <Route path="/blog/chatgpt-w-marketingu" element={<BlogChatGPTWMarketingu />} />
                <Route path="/uslugi/strona-internetowa-dla-stomatologa" element={<StronaInternetowaDlaStomatologa />} />
                {/* Wave 19 */}
                <Route path="/blog/co-to-jest-hosting" element={<BlogCoToJestHosting />} />
                <Route path="/blog/certyfikat-ssl-co-to" element={<BlogCertyfikatSSL />} />
                <Route path="/blog/wordpress-co-to" element={<BlogWordPressCoTo />} />
                <Route path="/blog/domena-co-to-jest" element={<BlogDomenaCoToJest />} />
                <Route path="/blog/jak-pozycjonowac-strone" element={<BlogJakPozycjonowacStrone />} />
                {/* Wave 18 */}
                <Route path="/blog/google-ads-co-to" element={<BlogGoogleAdsCoTo />} />
                <Route path="/blog/seo-co-to-jest" element={<BlogSEOCoToJest />} />
                <Route path="/blog/pozycjonowanie-co-to" element={<BlogPozycjonowanieCoTo />} />
                <Route path="/uslugi/sklep-woocommerce" element={<SklepWooCommerce />} />
                <Route path="/blog/kurs-google-ads" element={<BlogKursGoogleAds />} />
                {/* Wave 17 */}
                <Route path="/blog/shopify-polska" element={<BlogShopifyPolska />} />
                <Route path="/blog/tworzenie-stron-internetowych-cennik" element={<BlogTworzenieStronCennik />} />
                <Route path="/blog/wizytowka-google" element={<BlogWizytowkaGoogle />} />
                <Route path="/blog/google-moja-firma-optymalizacja" element={<BlogGoogleMyBusiness />} />
                <Route path="/blog/sklep-internetowy-cena" element={<BlogSklepInternetowyCena />} />
                {/* Wave 16 */}
                <Route path="/blog/google-moja-firma" element={<GoogleMojaFirma />} />
                <Route path="/uslugi/marketing-automation" element={<MarketingAutomation />} />
                <Route path="/uslugi/lead-generation" element={<LeadGeneration />} />
                <Route path="/agencja-seo-lublin" element={<AgencjaSEOLublin />} />
                <Route path="/uslugi/strona-internetowa-dla-restauracji" element={<StronaInternetowaDlaRestauracji />} />
                {/* Wave 15 */}
                <Route path="/blog/strona-internetowa-cena" element={<StronaInternetowaCena />} />
                <Route path="/uslugi/reklama-facebook" element={<ReklamaFacebook />} />
                <Route path="/uslugi/email-marketing" element={<EmailMarketing />} />
                <Route path="/blog/content-marketing-co-to" element={<BlogContentMarketingCoTo />} />
                <Route path="/uslugi/reklama-instagram" element={<ReklamaInstagram />} />
                <Route path="/blog/pozycjonowanie-stron-cena" element={<BlogPozycjonowanieStronCena />} />
                {/* Wave 14 */}
                <Route path="/uslugi/social-media-marketing" element={<SocialMediaMarketing />} />
                <Route path="/blog/rebranding-co-to" element={<BlogRebrandingCoTo />} />
                <Route path="/blog/copywriting-co-to" element={<BlogCopywritingCoTo />} />
                <Route path="/uslugi/strona-wordpress" element={<StronaWordPress />} />
                <Route path="/uslugi/identyfikacja-wizualna-firmy" element={<IdentyfikacjaWizualnaFirmy />} />
                <Route path="/blog/copywriting-cennik" element={<BlogCopywritingCennik />} />
                <Route path="/uslugi/kampania-google-ads" element={<KampaniaGoogleAds />} />
                <Route path="/uslugi/marketing-b2b" element={<MarketingB2B />} />
                <Route path="/uslugi/audyt-strony-internetowej" element={<AudytStronyInternetowej />} />
                <Route path="/uslugi/optymalizacja-strony-internetowej" element={<OptymalizacjaStronyInternetowej />} />
                <Route path="/uslugi/strona-one-page" element={<StronaOnePage />} />
                <Route path="/agencja-seo-wroclaw" element={<AgencjaSEOWroclaw />} />
                <Route path="/blog/landing-page-cena" element={<BlogLandingPageCena />} />
                <Route path="/uslugi/projektowanie-stron-internetowych" element={<ProjektowanieStronInternetowych />} />
                <Route path="/uslugi/strony-internetowe/lubelskie" element={<StronyInternetoweLubelskie />} />
                <Route path="/uslugi/strony-internetowe/wielkopolska" element={<StronyInternetoweWielkopolska />} />
                <Route path="/uslugi/strony-internetowe/podkarpacie" element={<StronyInternetowePodkarpacie />} />
                <Route path="/uslugi/fotografia-produktowa" element={<FotografiaProduktowa />} />
                <Route path="/uslugi/video-marketing" element={<VideoMarketing />} />
                <Route path="/uslugi/branding" element={<IdentyfikacjaWizualna />} />
                <Route path="/uslugi/produkcja-video" element={<SpotyReklamowe />} />
                <Route path="/uslugi/fotografia" element={<FotografPoznan />} />
                <Route path="/uslugi/fotografia-z-drona" element={<FotografiaZDrona />} />
                <Route path="/uslugi/studio-podcastowe" element={<StudioPodcastowe />} />
                <Route path="/uslugi/produkcja-filmow" element={<ProdukcjaFilmowPoznan />} />

                {/* SEO cluster */}
                <Route path="/seo/audyt" element={<AudytSEO />} />
                <Route path="/seo/pozycjonowanie" element={<Pozycjonowanie />} />
                <Route path="/seo/pozycjonowanie-poznan" element={<PozycjonowanieStronPoznan />} />
                <Route path="/seo/google-maps" element={<PozycjonowanieGoogleMaps />} />
                <Route path="/seo/ecommerce" element={<BlogSEOEcommerce />} />
                <Route path="/seo/lokalne-poznan" element={<BlogSEOLokalnePoznan />} />
                <Route path="/seo/on-page" element={<SEOOnPage />} />
                <Route path="/seo/off-page" element={<SEOOffPage />} />
                <Route path="/seo/techniczne" element={<SEOTechniczne />} />
                <Route path="/seo/link-building" element={<SEOLinkBuilding />} />
                <Route path="/seo/copywriting-seo" element={<SEOCopywriting />} />
                <Route path="/seo/core-web-vitals" element={<SEOCoreWebVitals />} />
                <Route path="/seo/pozycjonowanie-warszawa" element={<SEOPozycjonowanieWarszawa />} />
                <Route path="/seo/pozycjonowanie-krakow" element={<SEOPozycjonowanieKrakow />} />
                <Route path="/seo/pozycjonowanie-wroclaw" element={<SEOPozycjonowanieWroclaw />} />
                <Route path="/seo/pozycjonowanie-gdansk" element={<SEOPozycjonowanieGdansk />} />
                <Route path="/seo/pozycjonowanie-katowice" element={<SEOPozycjonowanieKatowice />} />
                <Route path="/seo/pozycjonowanie-lodz" element={<SEOPozycjonowanieLodz />} />

                {/* Social media cluster */}
                <Route path="/social-media/obsluga" element={<SocialMedia />} />
                <Route path="/social-media/poznan" element={<SocialMediaPoznan />} />
                <Route path="/social-media/warszawa" element={<SocialMediaWarszawa />} />
                <Route path="/social-media/influencer" element={<BlogInfluencerMarketing />} />
                <Route path="/social-media/reels-vs-tiktok" element={<BlogReelsVsTikTok />} />
                <Route path="/social-media/strategia" element={<SocialMediaStrategia />} />
                <Route path="/social-media/content" element={<SocialMediaContent />} />
                <Route path="/social-media/analityka" element={<SocialMediaAnalityka />} />
                <Route path="/social-media/tiktok-biznes" element={<BlogTikTokBiznes />} />

                {/* Performance marketing cluster */}
                <Route path="/performance-marketing/google-ads" element={<GoogleAds />} />
                <Route path="/performance-marketing/google-ads/warszawa" element={<GoogleAdsWarszawa />} />
                <Route path="/performance-marketing/facebook-ads" element={<FacebookAds />} />
                <Route path="/performance-marketing/instagram-ads" element={<InstagramAds />} />
                <Route path="/performance-marketing/meta-ads" element={<FacebookInstagramAds />} />
                <Route path="/performance-marketing/linkedin-ads" element={<LinkedInAds />} />
                <Route path="/performance-marketing/tiktok-ads" element={<TikTokAds />} />
                <Route path="/performance-marketing/youtube-ads" element={<YouTubeAds />} />
                <Route path="/performance-marketing/google-vs-facebook" element={<BlogGoogleVsFacebook />} />
                <Route path="/performance-marketing/remarketing" element={<BlogRemarketing />} />
                <Route path="/performance-marketing/optymalizacja" element={<PMOptymalizacja />} />
                <Route path="/performance-marketing/targetowanie" element={<PMTargetowanie />} />

                {/* Content marketing cluster */}
                <Route path="/content-marketing/strategia" element={<ContentMarketing />} />
                <Route path="/content-marketing/copywriting-landing" element={<BlogCopywritingLanding />} />
                <Route path="/content-marketing/email-2025" element={<BlogEmailMarketing />} />
                <Route path="/content-marketing/kampanie" element={<BlogKampaniaReklamowa />} />
                <Route path="/content-marketing/tresci-seo" element={<Redirect301 to="/content-marketing/strategia" />} />
                <Route path="/content-marketing/ebooki" element={<CMEbooki />} />
                <Route path="/content-marketing/video-content" element={<CMVideoContent />} />

                {/* Legacy local SEO pages (unchanged paths) */}
                <Route path="/agencja-marketingowa-poznan" element={<AgencjaMarketingowaPoznan />} />
                <Route path="/agencja-marketingu-internetowego" element={<AgencjaMarketinguInternetowego />} />
                <Route path="/agencja-reklamowa-poznan" element={<AgencjaReklamowaPoznan />} />
                <Route path="/agencja-seo-poznan" element={<AgencjaSEOPoznan />} />
                <Route path="/uslugi/sklepy-internetowe" element={<SklepyInternetowe />} />
                <Route path="/uslugi/sklepy-internetowe/poznan" element={<SklepyInternetowePoznan />} />
                <Route path="/uslugi/sklepy-internetowe/warszawa" element={<SklepyInternetoweWarszawa />} />
                <Route path="/uslugi/sklepy-internetowe/krakow" element={<SklepyInternetoweKrakow />} />
                <Route path="/agencja-marketingowa-warszawa" element={<AgencjaMarketingowaWarszawa />} />
                <Route path="/agencja-marketingowa-katowice" element={<AgencjaMarketingowaKatowice />} />
                <Route path="/agencja-marketingowa-wroclaw" element={<AgencjaMarketingowaWroclaw />} />
                <Route path="/agencja-marketingowa-lodz" element={<AgencjaMarketingowaLodz />} />
                <Route path="/agencja-marketingowa-gdansk" element={<AgencjaMarketingowaGdansk />} />
                <Route path="/agencja-marketingowa-krakow" element={<AgencjaMarketingowaKrakow />} />
                <Route path="/agencja-marketingowa-lublin" element={<AgencjaMarketingowaLublin />} />
                <Route path="/agencja-marketingowa-rzeszow" element={<AgencjaMarketingowaRzeszow />} />
                <Route path="/agencja-marketingowa-bydgoszcz" element={<AgencjaMarketingowaBydgoszcz />} />
                <Route path="/agencja-marketingowa-torun" element={<AgencjaMarketingowaTorun />} />
                <Route path="/agencja-marketingowa-szczecin" element={<AgencjaMarketingowaSzczecin />} />
                <Route path="/agencja-marketingowa-opole" element={<AgencjaMarketingowaOpole />} />
                <Route path="/agencja-marketingowa-olsztyn" element={<AgencjaMarketingowaOlsztyn />} />
                <Route path="/cennik-stron-internetowych" element={<CennikStronInternetowych />} />
                <Route path="/cennik-pozycjonowania" element={<CennikPozycjonowania />} />
                <Route path="/agencja-kreatywna-poznan" element={<AgencjaKreaTywnaPoznan />} />
                <Route path="/agencja-graficzna" element={<AgencjaGraficzna />} />
                <Route path="/kompleksowa-obsluga-marketingowa" element={<KompleksowaObsluga />} />
                <Route path="/wizualizacje-3d" element={<Wizualizacje3D />} />
                <Route path="/ai-marketing" element={<AIMarketing />} />
                <Route path="/ai-seo" element={<AISEO />} />
                <Route path="/kampanie-reklamowe" element={<KampanieReklamowe />} />
                <Route path="/kampanie-reklamowe-poznan" element={<KampanieReklamowePoznan />} />

                {/* Dla kogo - hub + audience pages */}
                <Route path="/dla-kogo" element={<DlaKogo />} />
                <Route path="/dla-kogo/firmy-lokalne" element={<DlaKogoFirmyLokalne />} />
                <Route path="/dla-kogo/ecommerce" element={<DlaKogoEcommerce />} />
                <Route path="/dla-kogo/marki-premium" element={<DlaKogoMarkiPremium />} />
                <Route path="/dla-kogo/instytucje" element={<DlaKogoInstytucje />} />

                {/* Dla kogo - industry pages */}
                <Route path="/dla-kogo/branza-medyczna" element={<MarketingMedyczny />} />
                <Route path="/dla-kogo/gastronomia" element={<MarketingGastronomia />} />
                <Route path="/dla-kogo/beauty-wellness" element={<MarketingBeauty />} />
                <Route path="/dla-kogo/nieruchomosci" element={<MarketingNieruchomosci />} />
                <Route path="/dla-kogo/automotive" element={<MarketingAutomotive />} />
                <Route path="/dla-kogo/edukacja" element={<MarketingEdukacja />} />
                <Route path="/dla-kogo/prawo-finanse" element={<MarketingPrawoFinanse />} />
                <Route path="/dla-kogo/ecommerce-retail" element={<MarketingEcommerceRetail />} />
                <Route path="/dla-kogo/it-saas" element={<MarketingIT />} />
                <Route path="/dla-kogo/produkcja" element={<MarketingProdukcja />} />
                <Route path="/dla-kogo/ngo" element={<MarketingNGO />} />
                <Route path="/dla-kogo/turystyka" element={<MarketingTurystyka />} />

                <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
                <Route path="/regulamin" element={<Regulamin />} />
                <Route path="/kariera" element={<Kariera />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/cennik" element={<Cennik />} />
                <Route path="/podziekowanie" element={<Podziekowanie />} />
                <Route path="/zainstaluj" element={<Zainstaluj />} />
                <Route path="/admin/rezerwacje" element={<AdminRezerwacje />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/kalkulator-roi" element={<KalkulatorROI />} />
                <Route path="/slownik-marketingowy" element={<SlownikMarketingowy />} />
                <Route path="/zasoby" element={<Zasoby />} />
                <Route path="/generator-briefu" element={<GeneratorBriefu />} />
                <Route path="/kalkulator-cen" element={<KalkulatorCen />} />
                
                {/* 301 Redirects - broken/legacy paths */}
                <Route path="/login" element={<Redirect301 to="/zasoby" />} />
                <Route path="/akademia" element={<Redirect301 to="/zasoby" />} />
                <Route path="/akademia/*" element={<Redirect301 to="/zasoby" />} />
                <Route path="/landing-page" element={<Redirect301 to="/blog/jak-stworzyc-landing-page" />} />

                {/* 301 Redirects - stare URL-e /branze/* */}
                <Route path="/branze/marketing-medyczny" element={<Redirect301 to="/dla-kogo/branza-medyczna" />} />
                <Route path="/branze/marketing-gastronomia" element={<Redirect301 to="/dla-kogo/gastronomia" />} />
                <Route path="/branze/marketing-beauty" element={<Redirect301 to="/dla-kogo/beauty-wellness" />} />
                <Route path="/branze/marketing-nieruchomosci" element={<Redirect301 to="/dla-kogo/nieruchomosci" />} />
                <Route path="/branze/marketing-automotive" element={<Redirect301 to="/dla-kogo/automotive" />} />
                <Route path="/branze/marketing-edukacja" element={<Redirect301 to="/dla-kogo/edukacja" />} />
                <Route path="/branze/marketing-prawo-finanse" element={<Redirect301 to="/dla-kogo/prawo-finanse" />} />
                <Route path="/branze/marketing-ecommerce-retail" element={<Redirect301 to="/dla-kogo/ecommerce-retail" />} />
                <Route path="/branze/marketing-it" element={<Redirect301 to="/dla-kogo/it-saas" />} />
                <Route path="/branze/marketing-produkcja" element={<Redirect301 to="/dla-kogo/produkcja" />} />
                <Route path="/branze/marketing-ngo" element={<Redirect301 to="/dla-kogo/ngo" />} />
                <Route path="/branze/marketing-turystyka" element={<Redirect301 to="/dla-kogo/turystyka" />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Suspense fallback={null}>
              <SEODevPanel />
            </Suspense>
          </BrowserRouter>
          <Suspense fallback={null}>
            <CookieBanner />
          </Suspense>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
