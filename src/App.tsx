import { Suspense, lazy, type ComponentType, type PropsWithChildren } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SEODevPanelLoader } from "@/components/dev/SEODevPanelLoader";
import { CookieBannerLoader } from "@/components/CookieBannerLoader";
import type { InitialPage } from "@/lib/hydrated-pages";

// Prerendered content stays visible while the current page's code loads.
const Index = lazy(() => import("./pages/Index"));
const Uslugi = lazy(() => import("./pages/Uslugi"));
const Realizacje = lazy(() => import("./pages/Realizacje"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Konsultacja = lazy(() => import("./pages/Konsultacja"));
const ONas = lazy(() => import("./pages/ONas"));
const Blog = lazy(() => import("./pages/Blog"));
const Poradniki = lazy(() => import("./pages/Poradniki"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Topical map: agencja social media pillar + cluster hubs
const AgencjaSocialMedia = lazy(() => import("./pages/AgencjaSocialMedia"));
const SocialMediaClusterHub = lazy(() => import("./pages/SocialMediaClusterHub"));
const AgencjaSocialMediaCennik = lazy(() => import("./pages/AgencjaSocialMediaCennik"));

// Case Studies - grouped
const CaseStudyEnea = lazy(() => import("./pages/CaseStudyEnea"));
const CaseStudyRPPG = lazy(() => import("./pages/CaseStudyRPPG"));
const CaseStudyFabrykaVirali = lazy(() => import("./pages/CaseStudyFabrykaVirali"));
const CaseStudyFriendlyGas = lazy(() => import("./pages/CaseStudyFriendlyGas"));
const CaseStudyFPS = lazy(() => import("./pages/CaseStudyFPS"));
const CaseStudyGierki = lazy(() => import("./pages/CaseStudyGierki"));
const CaseStudyPrzedszkole = lazy(() => import("./pages/CaseStudyPrzedszkole"));
const CaseStudyDawidEdu = lazy(() => import("./pages/CaseStudyDawidEdu"));
const CaseStudyWsbMerito = lazy(() => import("./pages/CaseStudyWsbMerito"));
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
const BlogAgencjaSocialMediaCennik = lazy(() => import("./pages/BlogAgencjaSocialMediaCennik"));
const BlogCzyWartoZatrudnicAgencjeSocialMedia = lazy(() => import("./pages/BlogCzyWartoZatrudnicAgencjeSocialMedia"));
const BlogAgencjaSocialMediaPoznan = lazy(() => import("./pages/BlogAgencjaSocialMediaPoznan"));
const BlogWideoProduktoweCzyZdjecia = lazy(() => import("./pages/BlogWideoProduktoweCzyZdjecia"));
const BlogIleKosztujeRolkaDlaFirmy = lazy(() => import("./pages/BlogIleKosztujeRolkaDlaFirmy"));
const BlogModeleRozliczenAgencjaSocialMedia = lazy(() => import("./pages/BlogModeleRozliczenAgencjaSocialMedia"));
const BlogTiktokDlaFirmB2B = lazy(() => import("./pages/BlogTiktokDlaFirmB2B"));
const BlogJakPrzygotowacDzienZdjeciowy = lazy(() => import("./pages/BlogJakPrzygotowacDzienZdjeciowy"));
const BlogRoiAgencjiSocialMedia = lazy(() => import("./pages/BlogRoiAgencjiSocialMedia"));
const BlogZdjeciaKorporacyjneVsReklamowe = lazy(() => import("./pages/BlogZdjeciaKorporacyjneVsReklamowe"));
const BlogPlatformySocialMedia2026 = lazy(() => import("./pages/BlogPlatformySocialMedia2026"));
const BlogDronWMarketinguFirmy = lazy(() => import("./pages/BlogDronWMarketinguFirmy"));
const BlogJakNegocjowacCennikAgencji = lazy(() => import("./pages/BlogJakNegocjowacCennikAgencji"));
const BlogFilmRekrutacyjnyEmployerBranding = lazy(() => import("./pages/BlogFilmRekrutacyjnyEmployerBranding"));
const BlogZasada555SocialMedia = lazy(() => import("./pages/BlogZasada555SocialMedia"));
const BlogFotografiaProduktowa = lazy(() => import("./pages/BlogFotografiaProduktowa"));
const BlogLandingPageVsStrona = lazy(() => import("./pages/BlogLandingPageVsStrona"));
const BlogSocialMediaMarketingPoradnik = lazy(() => import("./pages/BlogSocialMediaMarketingPoradnik"));
const BlogStronaInternetowaDlaRestauracji = lazy(() => import("./pages/BlogStronaInternetowaDlaRestauracji"));
const BlogBlogFirmowy = lazy(() => import("./pages/BlogBlogFirmowy"));
const BlogIleKosztujeFIlmReklamowy = lazy(() => import("./pages/BlogIleKosztujeFIlmReklamowy"));
const BlogIleKosztujeReklamaWideoFacebook = lazy(() => import("./pages/BlogIleKosztujeReklamaWideoFacebook"));
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
const AgencjaMarketingowa = lazy(() => import("./pages/AgencjaMarketingowa"));

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
const SEOPozycjonowaniePoznan = lazy(() => import("./pages/SEOPozycjonowaniePoznan"));
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
const PozycjonowanieWroclaw = lazy(() => import("./pages/PozycjonowanieWroclaw"));
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


// Wave 202: React Email+Resend, Local-First, PostHog+Sentry

// Wave 201: Svelte 5 Runes+Angular 18/19, Capacitor+Ionic, GitHub Actions

// Wave 200: TypeScript 5.5/5.6, Elysia.js+Bun, AI Agents+MCP

// Wave 199: React Router 7, Kysely+MikroORM, Astro 5

// Wave 198: Rspack+Farm+Rolldown, Legend State+Nanostores, CSS Container+@layer

// Wave 197: Valibot+ArkType, React Concurrent, JS Memory Management

// Wave 196: NativeWind+Tamagui, HTTP Clients TypeScript, TS Utility Types

// Wave 195: AI Coding Tools, Passkeys+WebAuthn, TanStack Start

// Wave 194: Panda CSS+UnoCSS, Node.js version managers, Next.js 15

// Wave 193: CSS Anchor+Popover API, RN New Architecture, TanStack Form

// Wave 192: Tailwind CSS v4, Speech AI, CSS Custom Properties

// Wave 191: HTMX, Astro deep dive, React Error Handling

// Wave 190: AI Image Generation, Supabase deep dive, Cloudflare Workers

// Wave 189: Remix deep dive, React Compiler, Nuxt.js 3

// Wave 188: Qwik framework, SolidJS, CSS Grid Subgrid

// Wave 187: SvelteKit, OpenAI Assistants API, Zod Advanced

// Wave 186: BullMQ Job Queues, Next.js Middleware, LLM Tool Calling

// Wave 185: React Aria a11y, Docker Node.js, React Testing Library

// Wave 184: Storybook 8, Node.js Streams, JS ES2024 Proposals

// Wave 183: Serverless Databases, TanStack Router, Effect.ts FP

// Wave 182: React Native Reanimated, Web Workers, CRDT Collaboration

// Wave 181: React Performance, Modern CSS, Modern Browser APIs

// Wave 180: React Flow/Graphs, Canvas/Konva, React Three Fiber 3D

// Wave 179: Image Optimization, Tiptap/Rich Text, Font Optimization

// Wave 178: Recharts/DataViz, dnd-kit, Lottie/Rive Animations

// Wave 177: TanStack Table, Expo Router, Web Components

// Wave 176: React 19, OpenAPI/Zod, MSW Contract Testing

// Wave 175: Package Managers, TypeScript tsconfig, Tauri/Electron Desktop

// Wave 174: Git Workflow, GraphQL Apollo, CSS-in-JS Zero Runtime

// Wave 173: File Uploads, Deployment Platforms, Date Libraries

// Wave 172: AI SDK/OpenAI, Stripe Payments, Email/Resend

// Wave 171: Web Security, Firebase/Supabase, Algolia/Search

// Wave 170: React Hook Form+Zod, Framer Motion, i18n

// Wave 169: NestJS, Hono/Fastify/Express, DI/SOLID/Patterns

// Wave 168: Vue 3/Pinia/Nuxt, React Native/Expo, Angular Signals

// Wave 167: ESLint/Biome, TypeScript Advanced, React Patterns

// Wave 166: Tailwind/shadcn, Core Web Vitals, Accessibility a11y
const BlogAccessibilityA11yCoTo = lazy(() => import("./pages/BlogAccessibilityA11yCoTo"));

// Wave 165: JWT/OAuth/OIDC, NextAuth/Lucia/Clerk, React Server Components

// Wave 164: Prisma/Drizzle ORM, Vitest/Playwright, XState

// Wave 163: Astro/SvelteKit/Remix, Vite/Bundlers, Bun/Deno/Node.js

// Wave 162: Zustand/Jotai, TanStack Query, tRPC

// Wave 161: PostgreSQL Optimization, ClickHouse, DB Migrations

// Wave 160: Structured Logging, Sentry, Incident Management

// Wave 159: Caching Strategies, Rate Limiting, Resilience Patterns

// Wave 158: Saga Pattern, Outbox Pattern, Idempotency

// Wave 157: API Versioning, Real-time Comms, Envoy Proxy

// Wave 156: DDD, Monorepo, Container Security
const BlogDddCoTo = lazy(() => import("./pages/BlogDddCoTo"));

// Wave 155: Serverless Architecture, CI/CD Best Practices, Technical Debt

// Wave 154: K8s Operators, OpenTelemetry deep dive, Feature Flags

// Wave 153: Database Sharding (Zero Trust + API Gateway already declared in Wave 138/142)

// Wave 152: WebAssembly, GraphQL Federation, Event-Driven Architecture

// Wave 151: PWA, Low-Code/No-Code, Web3

// Wave 150: Edge Computing, Micro Frontends, QUIC/HTTP3

// Wave 149: DevSecOps, SBOM, WebRTC

// Wave 148: Platform Engineering, eBPF, FinOps

// Wave 147: Observability, Service Mesh, gRPC

// Wave 146: GitOps, DORA Metrics, Chaos Engineering

// Wave 145: Time to Value, Activation Rate, Feature Adoption

// Wave 144: Win Rate, Conversion Funnel, Churn Prediction
const BlogConversionFunnelCoTo = lazy(() => import("./pages/BlogConversionFunnelCoTo"));

// Wave 143: Quota Planning, NRR/GRR, Pipeline Velocity

// Wave 142: Data Governance, GDPR, API Gateway
const BlogApiGatewayCoTo = lazy(() => import("./pages/BlogApiGatewayCoTo"));

// Wave 141: Event-Driven Architecture, CQRS, Data Mesh
const BlogEventDrivenArchCoTo = lazy(() => import("./pages/BlogEventDrivenArchCoTo"));

// Wave 140: AI Agents, Prompt Engineering, Fine-Tuning LLM

// Wave 139: MLOps, Vector Database, RAG Pattern

// Wave 138: SOC2, Data Warehouse, Zero Trust
const BlogZeroTrustCoTo = lazy(() => import("./pages/BlogZeroTrustCoTo"));

// Wave 137: Sprint Planning, Partner Ecosystem, SRE

// Wave 136: Deal Desk, Sales Compensation, Territory Planning

// Wave 135: Cap Table, SAFE Note, Vesting Schedule

// Wave 134: Retention Curve, Headcount Planning, Data Room

// Wave 133: Usage-Based Pricing, Two-Sided Marketplace, Growth Accounting

// Wave 132: Magic Number, DAU/MAU, Viral Coefficient

// Wave 131: Feature Flags, Product Discovery, CRO
const BlogCroCoToJest = lazy(() => import("./pages/BlogCroCoToJest"));

// Wave 130: Channel Sales, Annual Planning, Financial Model
const BlogChannelSalesCoTo = lazy(() => import("./pages/BlogChannelSalesCoTo"));

// Wave 129: Sales Playbook, Key Account Management, Board Meeting

// Wave 128: Category Creation, Churn Prevention, Expansion Revenue

// Wave 127: Investor Update, OTE, Champion Building

// Wave 126: Jobs To Be Done, ESG, IPO

// Wave 125: NPS, AARRR Pirate Metrics, Burn Multiple
const BlogNpsCoToJest = lazy(() => import("./pages/BlogNpsCoToJest"));

// Wave 124: Proposal, Term Sheet, Moat
const BlogProposalSprzedazowy = lazy(() => import("./pages/BlogProposalSprzedazowy"));

// Wave 123: Multithreading, Ramp period, Pipeline Management

// Wave 122: Sales Forecast, Closing, Sales Ops
const BlogSalesForecastCoTo = lazy(() => import("./pages/BlogSalesForecastCoTo"));

// Wave 121: Demo sprzedażowe, POC, Quota
const BlogPocCoToJest = lazy(() => import("./pages/BlogPocCoToJest"));
const BlogQuotaSprzedazowa = lazy(() => import("./pages/BlogQuotaSprzedazowa"));

// Wave 120: Challenger Sale, Negocjacje sprzedażowe, Prospecting B2B
const BlogChallengerSaleCoTo = lazy(() => import("./pages/BlogChallengerSaleCoTo"));
const BlogNegocjacjeSprzedazowe = lazy(() => import("./pages/BlogNegocjacjeSprzedazowe"));

// Wave 119: Value Selling, SPIN Selling, Sales Discovery
const BlogSpinSellingCoTo = lazy(() => import("./pages/BlogSpinSellingCoTo"));

// Wave 118: Payback Period, ICP, ABM
const BlogAbmCoToJest = lazy(() => import("./pages/BlogAbmCoToJest"));

// Wave 117: MRR, Gross Margin, Rule of 40

// Wave 116: ARR, CAC, LTV
const BlogCacCoToJest = lazy(() => import("./pages/BlogCacCoToJest"));
const BlogLtvCoToJest = lazy(() => import("./pages/BlogLtvCoToJest"));

// Wave 115: CSAT, Customer Health Score, Land & Expand

// Wave 114: Sales Forecasting, MEDDIC, Objection Handling
const BlogSalesForecastingCoTo = lazy(() => import("./pages/BlogSalesForecastingCoTo"));
const BlogMeddicCoTo = lazy(() => import("./pages/BlogMeddicCoTo"));

// Wave 113: DCF, WACC, Break-even

// Wave 112: PostgreSQL, Elasticsearch, Kafka

// Wave 111: Terraform, MongoDB, TypeScript

// Wave 110: Kubernetes, Redis, AWS

// Wave 109: Docker, REST API, GraphQL

// Wave 108: CI/CD, DevOps, Mikroserwisy

// Wave 107: User Story, SLA/SLO/SLI, Postmortem

// Wave 106: JTBD, Product Owner, Scrum Master

// Wave 105: Risk Management, Sprint Retrospective, Pivot

// Wave 104: TAM/SAM/SOM, KPI Dashboard, Stakeholder Management

// Wave 103: SDR, Buyer Persona, Change Management
const BlogBuyerPersonaCoTo = lazy(() => import("./pages/BlogBuyerPersonaCoTo"));

// Wave 102: Feedback Loop, Community-Led Growth, QBR

// Wave 101: Network Effects, Switching Costs, Competitive Moat

// Wave 100: Sentiment Analysis, Growth Loop, Data-Driven Marketing
const BlogSentimentAnalysisCoTo = lazy(() => import("./pages/BlogSentimentAnalysisCoTo"));
const BlogDataDrivenMarketingCoTo = lazy(() => import("./pages/BlogDataDrivenMarketingCoTo"));

// Wave 99: Event Tracking, Funnel Analytics, Social Listening
const BlogEventTrackingCoTo = lazy(() => import("./pages/BlogEventTrackingCoTo"));
const BlogFunnelAnalyticsCoTo = lazy(() => import("./pages/BlogFunnelAnalyticsCoTo"));
const BlogSocialListeningCoTo = lazy(() => import("./pages/BlogSocialListeningCoTo"));

// Wave 98: Burn Rate, Unit Economics, North Star Metric

// Wave 97: Design Sprint, Tech Debt, Value Stream Mapping

// Wave 96: OKR, Service Blueprint, MVP
const BlogOkrCoTo = lazy(() => import("./pages/BlogOkrCoTo"));

// Wave 95: User Persona, Empathy Map, Net Promoter Score
const BlogEmpathyMapCoTo = lazy(() => import("./pages/BlogEmpathyMapCoTo"));

// Wave 94: SEO Copywriting, A/B Testing, Heatmap
const BlogSeoCopywritingCoTo = lazy(() => import("./pages/BlogSeoCopywritingCoTo"));
const BlogAbTestingCoTo = lazy(() => import("./pages/BlogAbTestingCoTo"));

// Wave 93: Accessibility, Market Segmentation, Paid Social
const BlogAccessibilityWebCoTo = lazy(() => import("./pages/BlogAccessibilityWebCoTo"));
const BlogMarketSegmentationCoTo = lazy(() => import("./pages/BlogMarketSegmentationCoTo"));
const BlogPaidSocialCoTo = lazy(() => import("./pages/BlogPaidSocialCoTo"));

// Wave 92: Wireframe, Pricing Page, Sales Velocity
const BlogWireframeCoTo = lazy(() => import("./pages/BlogWireframeCoTo"));
const BlogPricingPageOptimizationCoTo = lazy(() => import("./pages/BlogPricingPageOptimizationCoTo"));

// Wave 91: Email Deliverability, Customer LTV, Content Distribution
const BlogEmailDeliverabilityCoTo = lazy(() => import("./pages/BlogEmailDeliverabilityCoTo"));
const BlogContentDistributionCoTo = lazy(() => import("./pages/BlogContentDistributionCoTo"));

// Wave 90: Design System, Subscription Model, UX Audit
const BlogDesignSystemCoTo = lazy(() => import("./pages/BlogDesignSystemCoTo"));
const BlogUxAuditCoTo = lazy(() => import("./pages/BlogUxAuditCoTo"));

// Wave 89: Brand Guidelines, Information Architecture, Revenue Model
const BlogBrandGuidelinesCoTo = lazy(() => import("./pages/BlogBrandGuidelinesCoTo"));
const BlogInformationArchitectureCoTo = lazy(() => import("./pages/BlogInformationArchitectureCoTo"));

// Wave 88: Lead Scoring, SaaS Metrics
const BlogLeadScoringCoTo = lazy(() => import("./pages/BlogLeadScoringCoTo"));

// Wave 87: Service Design, Churn Analysis, Programmatic Advertising

// Wave 86: Usability Testing, Communication Strategy, Positioning Statement
const BlogUsabilityTestingCoTo = lazy(() => import("./pages/BlogUsabilityTestingCoTo"));
const BlogCommunicationStrategyCoTo = lazy(() => import("./pages/BlogCommunicationStrategyCoTo"));
const BlogPositioningStatementCoTo = lazy(() => import("./pages/BlogPositioningStatementCoTo"));

// Wave 85: Customer Experience Management, Product Analytics, Cohort Analysis
const BlogProductAnalyticsCoTo = lazy(() => import("./pages/BlogProductAnalyticsCoTo"));

// Wave 84: Brand Architecture, Target Audience, Voice of Customer
const BlogBrandArchitectureCoTo = lazy(() => import("./pages/BlogBrandArchitectureCoTo"));
const BlogTargetAudienceCoTo = lazy(() => import("./pages/BlogTargetAudienceCoTo"));
const BlogVoiceOfCustomerCoTo = lazy(() => import("./pages/BlogVoiceOfCustomerCoTo"));

// Wave 83: Visual Identity, Multichannel Marketing, Competitive Intelligence
const BlogVisualIdentityCoTo = lazy(() => import("./pages/BlogVisualIdentityCoTo"));
const BlogMultichannelMarketingCoTo = lazy(() => import("./pages/BlogMultichannelMarketingCoTo"));
const BlogCompetitiveIntelligenceCoTo = lazy(() => import("./pages/BlogCompetitiveIntelligenceCoTo"));

// Wave 82: Data Storytelling, Brand Equity, Sponsorship Marketing
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

// Wave 69: OKR, Product Marketing, Employer Branding
const BlogProductMarketingCoTo = lazy(() => import("./pages/BlogProductMarketingCoTo"));
const BlogEmployerBrandingCoTo = lazy(() => import("./pages/BlogEmployerBrandingCoTo"));

// Wave 68: Pricing Strategy, Micro-Moments, Buyer Journey
const BlogPricingStrategyCoTo = lazy(() => import("./pages/BlogPricingStrategyCoTo"));
const BlogMicroMomentsCoTo = lazy(() => import("./pages/BlogMicroMomentsCoTo"));

// Wave 67: Ambassador Marketing, Go-to-Market Strategy, Revenue Operations
const BlogAmbassadorMarketingCoTo = lazy(() => import("./pages/BlogAmbassadorMarketingCoTo"));
const BlogGoToMarketCoTo = lazy(() => import("./pages/BlogGoToMarketCoTo"));

// Wave 66: Design Thinking, Sales Funnel, Community Marketing
const BlogCommunityMarketingCoTo = lazy(() => import("./pages/BlogCommunityMarketingCoTo"));

// Wave 65: Brand Positioning, TAM SAM SOM, User Onboarding
const BlogBrandPositioningCoTo = lazy(() => import("./pages/BlogBrandPositioningCoTo"));

// Wave 64: Customer Data Platform, Lead Nurturing, Account Management
const BlogLeadNurturingCoTo = lazy(() => import("./pages/BlogLeadNurturingCoTo"));

// Wave 63: Win/Loss Analysis, Email Marketing CoTo, Retention Marketing
const BlogEmailMarketingCoTo = lazy(() => import("./pages/BlogEmailMarketingCoTo"));
const BlogRetentionMarketingCoTo = lazy(() => import("./pages/BlogRetentionMarketingCoTo"));

// Wave 62: Sales Enablement, Zero-Click Search, Market Research
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
const BlogEmailSequenceCoTo = lazy(() => import("./pages/BlogEmailSequenceCoTo"));

// Wave 45: LinkedIn Marketing, Content Calendar, RevOps
const BlogLinkedInMarketingCoTo = lazy(() => import("./pages/BlogLinkedInMarketingCoTo"));
const BlogContentCalendarCoTo = lazy(() => import("./pages/BlogContentCalendarCoTo"));

// Wave 44: UTM, CRO, Heatmapy
const BlogUTMCoToJest = lazy(() => import("./pages/BlogUTMCoToJest"));
const BlogHeatmapyCoTo = lazy(() => import("./pages/BlogHeatmapyCoTo"));

// Wave 43: Storytelling, Podcast Marketing
const BlogStorytellingCoTo = lazy(() => import("./pages/BlogStorytellingCoTo"));
const BlogPodcastMarketingCoTo = lazy(() => import("./pages/BlogPodcastMarketingCoTo"));

// Wave 42: Freemium, Social Selling
const BlogSocialSellingCoTo = lazy(() => import("./pages/BlogSocialSellingCoTo"));

// Wave 41: Programmatic Advertising, Customer Success
const BlogProgrammaticCoTo = lazy(() => import("./pages/BlogProgrammaticCoTo"));

// Wave 40: GTM Strategy, ABM, Demand Generation
const BlogABMCoTo = lazy(() => import("./pages/BlogABMCoTo"));
const BlogDemandGenerationCoTo = lazy(() => import("./pages/BlogDemandGenerationCoTo"));

// Wave 39: Product-Market Fit, Brand Awareness, B2B Marketing
const BlogBrandAwarenessCoTo = lazy(() => import("./pages/BlogBrandAwarenessCoTo"));
const BlogB2BMarketingCoTo = lazy(() => import("./pages/BlogB2BMarketingCoTo"));

// Wave 38: USP, Value Proposition, Cold Email
const BlogUSPCoToJest = lazy(() => import("./pages/BlogUSPCoToJest"));
const BlogValuePropositionCoTo = lazy(() => import("./pages/BlogValuePropositionCoTo"));
const BlogColdEmailCoTo = lazy(() => import("./pages/BlogColdEmailCoTo"));

// Wave 37: Lejek Sprzedazowy, Churn Rate, Onboarding, Omnichannel
const BlogLejekSprzedazowy = lazy(() => import("./pages/BlogLejekSprzedazowy"));
const BlogOmnichannelCoTo = lazy(() => import("./pages/BlogOmnichannelCoTo"));

// Wave 36: Customer Journey, CRM, Influencer Marketing
const BlogCustomerJourneyCoTo = lazy(() => import("./pages/BlogCustomerJourneyCoTo"));
const BlogCRMCoToJest = lazy(() => import("./pages/BlogCRMCoToJest"));
const BlogInfluencerMarketingCoTo = lazy(() => import("./pages/BlogInfluencerMarketingCoTo"));

// Wave 35: Webinar, Persona, A/B Testing
const BlogWebinarCoToJest = lazy(() => import("./pages/BlogWebinarCoToJest"));
const BlogPersonaMarketingowa = lazy(() => import("./pages/BlogPersonaMarketingowa"));

// Wave 34: Growth Hacking, Retargeting, Lead Generation
const BlogGrowthHackingCoTo = lazy(() => import("./pages/BlogGrowthHackingCoTo"));
const BlogLeadGenerationCoTo = lazy(() => import("./pages/BlogLeadGenerationCoTo"));

// Wave 33: Umowa B2B, CEIDG

// Wave 32: Leasing, Hipoteka, KRS, Outsourcing, Faktoring

// Wave 31: VAT, PIT, REGON, ZUS

// Wave 30: Freelancer, NIP

// Wave 29: NPS, Startup, SaaS, UX Design, MRR/ARR

// Wave 28: B2B, Venture Capital, Pitch deck, Cross-selling, ERP
const BlogCrossSellingCoTo = lazy(() => import("./pages/BlogCrossSellingCoTo"));

// Wave 27: Agile, EBITDA, ROI, MVP, Due diligence
const BlogROICoToJest = lazy(() => import("./pages/BlogROICoToJest"));

// Wave 26: CPM, Scrum, Digital marketing
const BlogCPMCoTo = lazy(() => import("./pages/BlogCPMCoTo"));
const BlogDigitalMarketingCoTo = lazy(() => import("./pages/BlogDigitalMarketingCoTo"));

// Wave 25: Cold calling, Lead magnet, Trener personalny
const BlogLeadMagnetCoTo = lazy(() => import("./pages/BlogLeadMagnetCoTo"));
const StronaInternetowaDlaTrenera = lazy(() => import("./pages/StronaInternetowaDlaTrenera"));

// Wave 24: Dropshipping, Allegro, E-commerce, Inbound marketing, Lejek
const BlogJakSprzedawacNaAllegro = lazy(() => import("./pages/BlogJakSprzedawacNaAllegro"));
const BlogEcommerceCoToJest = lazy(() => import("./pages/BlogEcommerceCoToJest"));

// Wave 23: GTM, Link building, Core Web Vitals, Google Search Console
const BlogGoogleTagManager = lazy(() => import("./pages/BlogGoogleTagManager"));
const BlogLinkBuilding = lazy(() => import("./pages/BlogLinkBuilding"));
const BlogCoreWebVitals = lazy(() => import("./pages/BlogCoreWebVitals"));
const BlogGoogleSearchConsole = lazy(() => import("./pages/BlogGoogleSearchConsole"));

// Wave 22: KPI, API, Konwersja, CTR, Fotograf
const BlogKPICoToJest = lazy(() => import("./pages/BlogKPICoToJest"));
const BlogKonwersjaCoTo = lazy(() => import("./pages/BlogKonwersjaCoTo"));
const BlogCTRCoToJest = lazy(() => import("./pages/BlogCTRCoToJest"));
const StronaInternetowaDlaFotografa = lazy(() => import("./pages/StronaInternetowaDlaFotografa"));

// Wave 21: Newsletter, CMS, marketing afiliacyjny, prawnik, landing page
const BlogNewsletterCoTo = lazy(() => import("./pages/BlogNewsletterCoTo"));
const BlogCMSCoToJest = lazy(() => import("./pages/BlogCMSCoToJest"));
const StronaInternetowaDlaPrawnika = lazy(() => import("./pages/StronaInternetowaDlaPrawnika"));

// Wave 20: Pozycjonowanie sklepu, branding, UI/UX, stomatolog, SEO e-commerce
const BlogPozycjonowanieSklepu = lazy(() => import("./pages/BlogPozycjonowanieSklepu"));
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
const StronyInternetoweZabrze = lazy(() => import("./pages/StronyInternetoweZabrze"));
const BlogContentMarketingPoradnik = lazy(() => import("./pages/BlogContentMarketingPoradnik"));
const StronyInternetoweWalbrzych = lazy(() => import("./pages/StronyInternetoweWalbrzych"));
const BlogSEOTechniczne = lazy(() => import("./pages/BlogSEOTechniczne"));
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
const BlogKosztMarketinguInternetowego = lazy(() =>
  import("./pages/BlogKosztMarketinguInternetowego").then((m) => ({ default: m.BlogKosztMarketinguInternetowego }))
);
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

// Wave 238 pages
const BlogSztukaPromocjiInstagram = lazy(() => import("./pages/BlogSztukaPromocjiInstagram"));
const AgencjaMarketingowaKalisz = lazy(() => import("./pages/AgencjaMarketingowaKalisz"));

// Wave 239 pages
const BlogSEOWordPress = lazy(() => import("./pages/BlogSEOWordPress"));
const BlogMarketingDlaRestauracji = lazy(() => import("./pages/BlogMarketingDlaRestauracji"));
const PozycjonowanieZgorzelec = lazy(() => import("./pages/PozycjonowanieZgorzelec"));

// Wave 240 pages
const BlogMarketingDlaSalonuPieknosci = lazy(() => import("./pages/BlogMarketingDlaSalonuPieknosci"));
const BlogMarketingBudowlany = lazy(() => import("./pages/BlogMarketingBudowlany"));

// Wave 241 pages
const AgencjaMarketingowaZgorzelec = lazy(() => import("./pages/AgencjaMarketingowaZgorzelec"));
const BlogOptymalizacjaLandingPage = lazy(() => import("./pages/BlogOptymalizacjaLandingPage"));
const BlogNarzedziaMarketingowe = lazy(() => import("./pages/BlogNarzedziaMarketingowe"));

// Wave 242 pages
const BlogSEODlaSklepu = lazy(() => import("./pages/BlogSEODlaSklepu"));

// Wave 243 pages
const BlogBrandingDlaMalychFirm = lazy(() => import("./pages/BlogBrandingDlaMalychFirm"));
const BlogStrategiaContent = lazy(() => import("./pages/BlogStrategiaContent"));
const AgencjaMarketingowaPlock = lazy(() => import("./pages/AgencjaMarketingowaPlock"));

// Wave 244 pages
const PozycjonowaniePlock = lazy(() => import("./pages/PozycjonowaniePlock"));
const BlogSEOvsGoogleAds = lazy(() => import("./pages/BlogSEOvsGoogleAds"));
const BlogMarketingDlaKancelarii = lazy(() => import("./pages/BlogMarketingDlaKancelarii"));

// Wave 245 pages
const BlogMarketingMedyczny = lazy(() => import("./pages/BlogMarketingMedyczny"));
const BlogRetargetingPoradnik = lazy(() => import("./pages/BlogRetargetingPoradnik"));

// Wave 246 pages
const AgencjaMarketingowaKoszalin = lazy(() => import("./pages/AgencjaMarketingowaKoszalin"));
const BlogMarketingDlaDeweloperow = lazy(() => import("./pages/BlogMarketingDlaDeweloperow"));
const BlogPozycjonowanieGoogleMaps = lazy(() => import("./pages/BlogPozycjonowanieGoogleMaps"));

// Wave 251-252 blog pages
const BlogReklamaFacebookVsGoogle = lazy(() => import("./pages/BlogReklamaFacebookVsGoogle"));
const BlogSEODlaMalychFirm = lazy(() => import("./pages/BlogSEODlaMalychFirm"));
const BlogTrendyEcommerce2027 = lazy(() => import("./pages/BlogTrendyEcommerce2027"));
const BlogMarketingB2BPoradnik = lazy(() => import("./pages/BlogMarketingB2BPoradnik"));
const BlogWizualizacje3DEcommerce = lazy(() => import("./pages/BlogWizualizacje3DEcommerce"));
const BlogVideoMarketingDlaFirm = lazy(() => import("./pages/BlogVideoMarketingDlaFirm"));

// Wave 250 new city (Gdynia - not previously declared)
const AgencjaMarketingowaGdynia = lazy(() => import("./pages/AgencjaMarketingowaGdynia"));

// Wave 253-254 Google Ads + Facebook Ads city pages
const GoogleAdsKrakow = lazy(() => import("./pages/GoogleAdsKrakow"));
const GoogleAdsWroclaw = lazy(() => import("./pages/GoogleAdsWroclaw"));
const GoogleAdsPoznan = lazy(() => import("./pages/GoogleAdsPoznan"));
const GoogleAdsGdansk = lazy(() => import("./pages/GoogleAdsGdansk"));
const GoogleAdsLodz = lazy(() => import("./pages/GoogleAdsLodz"));
const GoogleAdsKatowice = lazy(() => import("./pages/GoogleAdsKatowice"));
const GoogleAdsSzczecin = lazy(() => import("./pages/GoogleAdsSzczecin"));
const GoogleAdsBydgoszcz = lazy(() => import("./pages/GoogleAdsBydgoszcz"));
const GoogleAdsLublin = lazy(() => import("./pages/GoogleAdsLublin"));
const GoogleAdsRzeszow = lazy(() => import("./pages/GoogleAdsRzeszow"));
const FacebookAdsWarszawa = lazy(() => import("./pages/FacebookAdsWarszawa"));
const FacebookAdsKrakow = lazy(() => import("./pages/FacebookAdsKrakow"));
const FacebookAdsWroclaw = lazy(() => import("./pages/FacebookAdsWroclaw"));
const FacebookAdsGdansk = lazy(() => import("./pages/FacebookAdsGdansk"));
const FacebookAdsPoznan = lazy(() => import("./pages/FacebookAdsPoznan"));
const FacebookAdsLodz = lazy(() => import("./pages/FacebookAdsLodz"));
const FacebookAdsKatowice = lazy(() => import("./pages/FacebookAdsKatowice"));
const FacebookAdsSzczecin = lazy(() => import("./pages/FacebookAdsSzczecin"));
const FacebookAdsBydgoszcz = lazy(() => import("./pages/FacebookAdsBydgoszcz"));
const FacebookAdsLublin = lazy(() => import("./pages/FacebookAdsLublin"));
const FacebookAdsRzeszow = lazy(() => import("./pages/FacebookAdsRzeszow"));
const FacebookAdsGdynia = lazy(() => import("./pages/FacebookAdsGdynia"));
const GoogleAdsGdynia = lazy(() => import("./pages/GoogleAdsGdynia"));
const GoogleAdsTorun = lazy(() => import("./pages/GoogleAdsTorun"));
const PozycjonowanieGdynia = lazy(() => import("./pages/PozycjonowanieGdynia"));

// Wave 257 — TikTok Ads city pages
const TikTokAdsWarszawa = lazy(() => import("./pages/TikTokAdsWarszawa"));
const TikTokAdsKrakow = lazy(() => import("./pages/TikTokAdsKrakow"));
const TikTokAdsWroclaw = lazy(() => import("./pages/TikTokAdsWroclaw"));
const TikTokAdsPoznan = lazy(() =>
  import("./pages/TikTokAdsPoznan").then((m) => ({ default: m.TikTokAdsPoznan }))
);
const TikTokAdsGdansk = lazy(() =>
  import("./pages/TikTokAdsGdansk").then((m) => ({ default: m.TikTokAdsGdansk }))
);
const TikTokAdsLodz = lazy(() =>
  import("./pages/TikTokAdsLodz").then((m) => ({ default: m.TikTokAdsLodz }))
);
const TikTokAdsKatowice = lazy(() => import("./pages/TikTokAdsKatowice"));

// Wave 258 — FacebookAds Torun, GoogleAds Bialystok/Kielce
const FacebookAdsTorun = lazy(() => import("./pages/FacebookAdsTorun"));
const GoogleAdsBialystok = lazy(() => import("./pages/GoogleAdsBialystok"));
const GoogleAdsKielce = lazy(() => import("./pages/GoogleAdsKielce"));

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
const AdminTopicalMap = lazy(() => import("./pages/AdminTopicalMap"));

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
const PerformanceMarketingCluster = lazy(() => import("./pages/clusters/PerformanceMarketingCluster"));
const UslugiCluster = lazy(() => import("./pages/clusters/UslugiCluster"));

// Lazy load non-critical global components
const Redirect301 = lazy(() => import("./components/seo/Redirect301").then(m => ({ default: m.Redirect301 })));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
    <div className="text-2xl font-heading font-bold tracking-tight bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
      FOTZ STUDIO
    </div>
    <div className="w-10 h-10 border-2 border-foreground/10 border-t-primary rounded-full animate-spin" />
    <div className="text-xs text-muted-foreground tracking-widest uppercase">Ładowanie</div>
  </div>
);

type AppProps = {
  Router?: ComponentType<PropsWithChildren>;
  client?: QueryClient;
  initialPage?: InitialPage;
};

const App = ({ Router = BrowserRouter, client = queryClient, initialPage }: AppProps) => (
  <QueryClientProvider client={client}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <ScrollToTop />
            <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* The loaded entry route wins the same-path tie, so hydration
                    cannot suspend while its module is still being fetched. */}
                {initialPage && <Route path={initialPage.path} element={<initialPage.Component />} />}
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
                <Route path="/realizacje/dawid-edu" element={<CaseStudyDawidEdu />} />
                <Route path="/realizacje/wsb-merito" element={<CaseStudyWsbMerito />} />
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
                <Route path="/blog/agencja-social-media-cennik" element={<BlogAgencjaSocialMediaCennik />} />
                <Route path="/blog/czy-warto-zatrudnic-agencje-social-media" element={<BlogCzyWartoZatrudnicAgencjeSocialMedia />} />
                <Route path="/blog/agencja-social-media-poznan" element={<BlogAgencjaSocialMediaPoznan />} />
                <Route path="/blog/wideo-produktowe-czy-zdjecia" element={<BlogWideoProduktoweCzyZdjecia />} />
                <Route path="/blog/ile-kosztuje-rolka-dla-firmy" element={<BlogIleKosztujeRolkaDlaFirmy />} />
                <Route path="/blog/modele-rozliczen-agencja-social-media" element={<BlogModeleRozliczenAgencjaSocialMedia />} />
                <Route path="/blog/tiktok-dla-firm-b2b" element={<BlogTiktokDlaFirmB2B />} />
                <Route path="/blog/jak-przygotowac-dzien-zdjeciowy" element={<BlogJakPrzygotowacDzienZdjeciowy />} />
                <Route path="/blog/roi-agencji-social-media" element={<BlogRoiAgencjiSocialMedia />} />
                <Route path="/blog/zdjecia-korporacyjne-vs-reklamowe" element={<BlogZdjeciaKorporacyjneVsReklamowe />} />
                <Route path="/blog/platformy-social-media-2026" element={<BlogPlatformySocialMedia2026 />} />
                <Route path="/blog/dron-w-marketingu-firmy" element={<BlogDronWMarketinguFirmy />} />
                <Route path="/blog/jak-negocjowac-cennik-agencji" element={<BlogJakNegocjowacCennikAgencji />} />
                <Route path="/blog/film-rekrutacyjny-employer-branding" element={<BlogFilmRekrutacyjnyEmployerBranding />} />
                <Route path="/blog/zasada-5-5-5-social-media" element={<BlogZasada555SocialMedia />} />
                <Route path="/blog/fotografia-produktowa-poradnik" element={<BlogFotografiaProduktowa />} />
                <Route path="/blog/landing-page-vs-strona-internetowa" element={<BlogLandingPageVsStrona />} />
                <Route path="/blog/social-media-marketing-poradnik" element={<BlogSocialMediaMarketingPoradnik />} />
                <Route path="/blog/strona-internetowa-dla-restauracji" element={<BlogStronaInternetowaDlaRestauracji />} />
                <Route path="/blog/blog-firmowy-poradnik" element={<BlogBlogFirmowy />} />
                <Route path="/blog/ile-kosztuje-film-reklamowy" element={<BlogIleKosztujeFIlmReklamowy />} />
                <Route path="/blog/ile-kosztuje-reklama-wideo-facebook" element={<BlogIleKosztujeReklamaWideoFacebook />} />
                <Route path="/blog/pozycjonowanie-dla-malych-firm" element={<BlogPozycjonowanieDlaMalychFirm />} />
                <Route path="/blog/fotografia-biznesowa" element={<BlogFotografiaBiznesowa />} />
                <Route path="/blog/jak-wybrac-agencje-marketingowa" element={<BlogJakWybracAgencjeMarketingowa />} />
                <Route path="/blog/co-to-jest-seo" element={<BlogCoToJestSeo />} />
                <Route path="/blog/ile-kosztuje-pozycjonowanie" element={<BlogIleKosztujePozycjonowanie />} />
                <Route path="/blog/social-media-dla-firm" element={<BlogSocialMediaDlaFirm />} />
                <Route path="/blog/jak-wybrac-agencje-seo" element={<BlogJakWybracAgencjeSEO />} />
                <Route path="/blog/pozycjonowanie-lokalne-dla-firm" element={<BlogPozycjonowanieLokalnePoradnik />} />
                <Route path="/blog/instagram-dla-firmy" element={<BlogInstagramDlaFirmy />} />
                <Route path="/social-media/instagram" element={<Redirect301 to="/blog/instagram-dla-firmy" />} />
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
                <Route path="/social-media" element={<Redirect301 to="/social-media/obsluga" />} />
                <Route path="/performance-marketing" element={<PerformanceMarketingCluster />} />
                <Route path="/content-marketing" element={<Redirect301 to="/content-marketing/strategia" />} />

                {/* Topical Map: Agencja social media pillar + 20 cluster hubs */}
                <Route path="/agencja-social-media" element={<AgencjaSocialMedia />} />
                <Route path="/agencja-social-media/cennik" element={<AgencjaSocialMediaCennik />} />
                <Route path="/agencja-social-media/poznan" element={<SocialMediaPoznan />} />
                <Route path="/agencja-social-media/:clusterSlug" element={<SocialMediaClusterHub />} />

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
                <Route path="/uslugi/strony-internetowe/kielce" element={<Redirect301 to="/strony-internetowe/kielce" />} />
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
                <Route path="/uslugi/pozycjonowanie/krakow" element={<Redirect301 to="/seo/pozycjonowanie-krakow" />} />
                <Route path="/uslugi/pozycjonowanie/wroclaw" element={<PozycjonowanieWroclaw />} />
                <Route path="/uslugi/pozycjonowanie/poznan" element={<Redirect301 to="/seo/pozycjonowanie-poznan" />} />
                <Route path="/uslugi/pozycjonowanie/gdansk" element={<PozycjonowanieGdansk />} />
                <Route path="/uslugi/pozycjonowanie/lodz" element={<PozycjonowanieLodz />} />
                <Route path="/uslugi/pozycjonowanie/szczecin" element={<PozycjonowanieSzczecin />} />
                <Route path="/uslugi/pozycjonowanie/bialystok" element={<PozycjonowanieBialystok />} />
                <Route path="/uslugi/pozycjonowanie/lublin" element={<PozycjonowanieLublin />} />
                <Route path="/uslugi/pozycjonowanie/rzeszow" element={<PozycjonowanieRzeszow />} />
                <Route path="/uslugi/pozycjonowanie/katowice" element={<Redirect301 to="/seo/pozycjonowanie-katowice" />} />
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
                <Route path="/uslugi/tworzenie-stron-www" element={<TworzenieStronWWW />} />
                <Route path="/uslugi/strony-internetowe-dla-firm" element={<StronyInternetoweDlaFirm />} />
                <Route path="/uslugi/pozycjonowanie-lokalne" element={<PozycjonowanieLokalne />} />
                <Route path="/uslugi/tworzenie-sklepow-internetowych" element={<TworzenieSklepowInternetowych />} />
                <Route path="/uslugi/projekt-strony-internetowej" element={<ProjektStronyInternetowej />} />
                <Route path="/agencja-seo-krakow" element={<Redirect301 to="/seo/pozycjonowanie-krakow" />} />
                <Route path="/uslugi/tworzenie-stron-internetowych/bialystok" element={<TworzenieStronBialystok />} />
                <Route path="/blog/jak-sprzedawac-w-internecie" element={<BlogJakSprzedawacWInternecie />} />
                <Route path="/uslugi/audyt-seo" element={<Redirect301 to="/seo/audyt" />} />
                {/* Wave 202 */}
                {/* Wave 201 */}
                {/* Wave 200 */}
                {/* Wave 199 */}
                {/* Wave 198 */}
                {/* Wave 197 */}
                {/* Wave 196 */}
                {/* Wave 195 */}
                {/* Wave 194 */}
                {/* Wave 193 */}
                {/* Wave 192 */}
                {/* Wave 191 */}
                {/* Wave 190 */}
                {/* Wave 189 */}
                {/* Wave 188 */}
                {/* Wave 187 */}
                {/* Wave 186 */}
                {/* Wave 185 */}
                {/* Wave 184 */}
                {/* Wave 183 */}
                {/* Wave 182 */}
                {/* Wave 181 */}
                {/* Wave 180 */}
                {/* Wave 179 */}
                {/* Wave 178 */}
                {/* Wave 177 */}
                {/* Wave 176 */}
                {/* Wave 175 */}
                {/* Wave 174 */}
                {/* Wave 173 */}
                {/* Wave 172 */}
                {/* Wave 171 */}
                {/* Wave 170 */}
                {/* Wave 169 */}
                {/* Wave 168 */}
                {/* Wave 167 */}
                {/* Wave 166 */}
                <Route path="/blog/dostepnosc-web-a11y-wcag-aria-keyboard-navigation-testowanie" element={<BlogAccessibilityA11yCoTo />} />
                {/* Wave 165 */}
                {/* Wave 164 */}
                {/* Wave 163 */}
                {/* Wave 162 */}
                {/* Wave 161 */}
                {/* Wave 160 */}
                {/* Wave 159 */}
                {/* Wave 158 */}
                {/* Wave 157 */}
                {/* Wave 156 */}
                <Route path="/blog/domain-driven-design-ddd-co-to-jest-bounded-context-aggregate-event-storming" element={<BlogDddCoTo />} />
                {/* Wave 155 */}
                {/* Wave 154 */}
                {/* Wave 153 */}
                <Route path="/blog/zero-trust-security-co-to-jest-jak-wdrozyz-ztna-mfa" element={<BlogZeroTrustCoTo />} />
                <Route path="/blog/api-gateway-co-to-jest-kong-aws-traefik-kubernetes-ingress" element={<BlogApiGatewayCoTo />} />
                {/* Wave 152 */}
                {/* Wave 151 */}
                {/* Wave 150 */}
                {/* Wave 149 */}
                {/* Wave 148 */}
                {/* Wave 147 */}
                {/* Wave 146 */}
                {/* Wave 145 */}
                {/* Wave 144 */}
                <Route path="/blog/lejek-konwersji-conversion-funnel-co-to-jest" element={<BlogConversionFunnelCoTo />} />
                {/* Wave 143 */}
                {/* Wave 142 */}
                <Route path="/blog/api-gateway-co-to-jest-jak-wybrac-kong-aws-apigee" element={<Redirect301 to="/blog/api-gateway-co-to-jest-kong-aws-traefik-kubernetes-ingress" />} />
                {/* Wave 141 */}
                <Route path="/blog/event-driven-architecture-co-to-jest-jak-wdrozyz" element={<BlogEventDrivenArchCoTo />} />
                {/* Wave 140 */}
                {/* Wave 139 */}
                {/* Wave 138 */}
                <Route path="/blog/zero-trust-security-co-to-jest-jak-wdrozyz" element={<Redirect301 to="/blog/zero-trust-security-co-to-jest-jak-wdrozyz-ztna-mfa" />} />
                {/* Wave 137 */}
                {/* Wave 136 */}
                {/* Wave 135 */}
                {/* Wave 134 */}
                {/* Wave 133 */}
                {/* Wave 132 */}
                {/* Wave 131 */}
                <Route path="/blog/cro-conversion-rate-optimization-co-to-jest" element={<BlogCroCoToJest />} />
                {/* Wave 130 */}
                <Route path="/blog/channel-sales-sprzedaz-partnerska-co-to-jest" element={<BlogChannelSalesCoTo />} />
                {/* Wave 129 */}
                {/* Wave 128 */}
                {/* Wave 127 */}
                {/* Wave 126 */}
                {/* Wave 125 */}
                <Route path="/blog/nps-net-promoter-score-co-to-jest" element={<BlogNpsCoToJest />} />
                {/* Wave 124 */}
                <Route path="/blog/proposal-sprzedazowy-oferta-handlowa-b2b" element={<BlogProposalSprzedazowy />} />
                {/* Wave 123 */}
                {/* Wave 122 */}
                <Route path="/blog/sales-forecast-prognoza-sprzedazy" element={<BlogSalesForecastCoTo />} />
                {/* Wave 121 */}
                <Route path="/blog/poc-proof-of-concept-sprzedaz-b2b" element={<BlogPocCoToJest />} />
                <Route path="/blog/quota-sprzedazowa-co-to-jest" element={<BlogQuotaSprzedazowa />} />
                {/* Wave 120 */}
                <Route path="/blog/challenger-sale-metodologia-sprzedazy" element={<BlogChallengerSaleCoTo />} />
                <Route path="/blog/negocjacje-sprzedazowe-techniki-b2b" element={<BlogNegocjacjeSprzedazowe />} />
                {/* Wave 119 */}
                <Route path="/blog/spin-selling-metodologia-sprzedazy" element={<BlogSpinSellingCoTo />} />
                {/* Wave 118 */}
                <Route path="/blog/abm-account-based-marketing-co-to" element={<BlogAbmCoToJest />} />
                {/* Wave 117 */}
                {/* Wave 116 */}
                <Route path="/blog/cac-customer-acquisition-cost-co-to" element={<BlogCacCoToJest />} />
                <Route path="/blog/ltv-customer-lifetime-value-co-to" element={<BlogLtvCoToJest />} />
                {/* Wave 115 */}
                {/* Wave 114 */}
                <Route path="/blog/sales-forecasting-prognozowanie-sprzedazy" element={<BlogSalesForecastingCoTo />} />
                <Route path="/blog/meddic-kwalifikacja-sprzedazy-b2b" element={<BlogMeddicCoTo />} />
                {/* Wave 113 */}
                {/* Wave 112 */}
                {/* Wave 111 */}
                {/* Wave 110 */}
                {/* Wave 109 */}
                {/* Wave 108 */}
                {/* Wave 107 */}
                {/* Wave 106 */}
                {/* Wave 105 */}
                {/* Wave 104 */}
                {/* Wave 103 */}
                <Route path="/blog/buyer-persona-co-to" element={<BlogBuyerPersonaCoTo />} />
                {/* Wave 102 */}
                {/* Wave 101 */}
                {/* Wave 100 */}
                <Route path="/blog/analiza-sentymentu-co-to" element={<BlogSentimentAnalysisCoTo />} />
                <Route path="/blog/data-driven-marketing-co-to" element={<BlogDataDrivenMarketingCoTo />} />
                {/* Wave 99 */}
                <Route path="/blog/event-tracking-co-to" element={<BlogEventTrackingCoTo />} />
                <Route path="/blog/funnel-analytics-co-to" element={<BlogFunnelAnalyticsCoTo />} />
                <Route path="/blog/social-listening-co-to" element={<BlogSocialListeningCoTo />} />
                {/* Wave 98 */}
                {/* Wave 97 */}
                {/* Wave 96 */}
                <Route path="/blog/okr-co-to-jest" element={<BlogOkrCoTo />} />
                {/* Wave 95 */}
                <Route path="/blog/mapa-empatii-co-to" element={<BlogEmpathyMapCoTo />} />
                {/* Wave 94 */}
                <Route path="/blog/seo-copywriting-co-to" element={<BlogSeoCopywritingCoTo />} />
                <Route path="/blog/ab-testing-co-to" element={<BlogAbTestingCoTo />} />
                {/* Wave 93 */}
                <Route path="/blog/dostepnosc-stron-internetowych" element={<BlogAccessibilityWebCoTo />} />
                <Route path="/blog/segmentacja-rynku-co-to" element={<BlogMarketSegmentationCoTo />} />
                <Route path="/blog/paid-social-co-to" element={<BlogPaidSocialCoTo />} />
                {/* Wave 92 */}
                <Route path="/blog/wireframe-co-to" element={<BlogWireframeCoTo />} />
                <Route path="/blog/optymalizacja-strony-cennikowej" element={<BlogPricingPageOptimizationCoTo />} />
                {/* Wave 91 */}
                <Route path="/blog/email-deliverability-co-to" element={<BlogEmailDeliverabilityCoTo />} />
                <Route path="/blog/content-distribution-co-to" element={<BlogContentDistributionCoTo />} />
                {/* Wave 90 */}
                <Route path="/blog/design-system-co-to" element={<BlogDesignSystemCoTo />} />
                <Route path="/blog/ux-audit-co-to" element={<BlogUxAuditCoTo />} />
                {/* Wave 89 */}
                <Route path="/blog/brand-guidelines-co-to" element={<BlogBrandGuidelinesCoTo />} />
                <Route path="/blog/information-architecture-co-to" element={<BlogInformationArchitectureCoTo />} />
                {/* Wave 88 */}
                <Route path="/blog/lead-scoring-co-to" element={<BlogLeadScoringCoTo />} />
                {/* Wave 87 */}
                <Route path="/blog/reklama-programatyczna-co-to" element={<Redirect301 to="/blog/programmatic-advertising-co-to" />} />
                {/* Wave 86 */}
                <Route path="/blog/usability-testing-co-to" element={<BlogUsabilityTestingCoTo />} />
                <Route path="/blog/strategia-komunikacji-co-to" element={<BlogCommunicationStrategyCoTo />} />
                <Route path="/blog/positioning-statement-co-to" element={<BlogPositioningStatementCoTo />} />
                {/* Wave 85 */}
                <Route path="/blog/product-analytics-co-to" element={<BlogProductAnalyticsCoTo />} />
                {/* Wave 84 */}
                <Route path="/blog/architektura-marki-co-to" element={<BlogBrandArchitectureCoTo />} />
                <Route path="/blog/target-audience-co-to" element={<BlogTargetAudienceCoTo />} />
                <Route path="/blog/voice-of-customer-co-to" element={<BlogVoiceOfCustomerCoTo />} />
                {/* Wave 83 */}
                <Route path="/blog/identyfikacja-wizualna-co-to" element={<BlogVisualIdentityCoTo />} />
                <Route path="/blog/multichannel-marketing-co-to" element={<BlogMultichannelMarketingCoTo />} />
                <Route path="/blog/competitive-intelligence-co-to" element={<BlogCompetitiveIntelligenceCoTo />} />
                {/* Wave 82 */}
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
                {/* Wave 69 */}
                <Route path="/blog/okr-co-to" element={<Redirect301 to="/blog/okr-co-to-jest" />} />
                <Route path="/blog/product-marketing-co-to" element={<BlogProductMarketingCoTo />} />
                <Route path="/blog/employer-branding-co-to" element={<BlogEmployerBrandingCoTo />} />
                {/* Wave 68 */}
                <Route path="/blog/pricing-strategy-co-to" element={<BlogPricingStrategyCoTo />} />
                <Route path="/blog/micro-moments-co-to" element={<BlogMicroMomentsCoTo />} />
                {/* Wave 67 */}
                <Route path="/blog/ambassador-marketing-co-to" element={<BlogAmbassadorMarketingCoTo />} />
                <Route path="/blog/go-to-market-strategy-co-to" element={<BlogGoToMarketCoTo />} />
                {/* Wave 66 */}
                <Route path="/blog/community-marketing-co-to" element={<BlogCommunityMarketingCoTo />} />
                {/* Wave 65 */}
                <Route path="/blog/brand-positioning-co-to" element={<BlogBrandPositioningCoTo />} />
                {/* Wave 64 */}
                <Route path="/blog/lead-nurturing-co-to" element={<BlogLeadNurturingCoTo />} />
                {/* Wave 63 */}
                <Route path="/blog/email-marketing-co-to" element={<BlogEmailMarketingCoTo />} />
                <Route path="/blog/retention-marketing-co-to" element={<BlogRetentionMarketingCoTo />} />
                {/* Wave 62 */}
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
                <Route path="/blog/email-sequence-co-to" element={<BlogEmailSequenceCoTo />} />
                {/* Wave 45 */}
                <Route path="/blog/linkedin-marketing-co-to" element={<BlogLinkedInMarketingCoTo />} />
                <Route path="/blog/content-calendar-co-to" element={<BlogContentCalendarCoTo />} />
                {/* Wave 44 */}
                <Route path="/blog/utm-co-to-jest" element={<BlogUTMCoToJest />} />
                <Route path="/blog/heatmapy-co-to-jest" element={<BlogHeatmapyCoTo />} />
                {/* Wave 43 */}
                <Route path="/blog/storytelling-co-to" element={<BlogStorytellingCoTo />} />
                <Route path="/blog/podcast-marketing-co-to" element={<BlogPodcastMarketingCoTo />} />
                {/* Wave 42 */}
                <Route path="/blog/social-selling-co-to" element={<BlogSocialSellingCoTo />} />
                {/* Wave 41 */}
                <Route path="/blog/programmatic-advertising-co-to" element={<BlogProgrammaticCoTo />} />
                {/* Wave 40 */}
                <Route path="/blog/abm-co-to-jest" element={<BlogABMCoTo />} />
                <Route path="/blog/demand-generation-co-to" element={<BlogDemandGenerationCoTo />} />
                {/* Wave 39 */}
                <Route path="/blog/brand-awareness-co-to" element={<BlogBrandAwarenessCoTo />} />
                <Route path="/blog/marketing-b2b-co-to" element={<BlogB2BMarketingCoTo />} />
                {/* Wave 38 */}
                <Route path="/blog/usp-co-to-jest" element={<BlogUSPCoToJest />} />
                <Route path="/blog/value-proposition-co-to" element={<BlogValuePropositionCoTo />} />
                <Route path="/blog/cold-email-co-to" element={<BlogColdEmailCoTo />} />
                {/* Wave 37 */}
                <Route path="/blog/lejek-sprzedazowy-co-to" element={<BlogLejekSprzedazowy />} />
                <Route path="/blog/omnichannel-co-to" element={<BlogOmnichannelCoTo />} />
                {/* Wave 36 */}
                <Route path="/blog/customer-journey-co-to" element={<BlogCustomerJourneyCoTo />} />
                <Route path="/blog/crm-co-to-jest" element={<BlogCRMCoToJest />} />
                <Route path="/blog/influencer-marketing-co-to" element={<BlogInfluencerMarketingCoTo />} />
                {/* Wave 35 */}
                <Route path="/blog/webinar-co-to-jest" element={<BlogWebinarCoToJest />} />
                <Route path="/blog/persona-marketingowa" element={<BlogPersonaMarketingowa />} />
                {/* Wave 34 */}
                <Route path="/blog/growth-hacking-co-to" element={<BlogGrowthHackingCoTo />} />
                <Route path="/blog/lead-generation-co-to" element={<BlogLeadGenerationCoTo />} />
                {/* Wave 33 */}
                {/* Wave 32 */}
                {/* Wave 31 */}
                {/* Wave 30 */}
                {/* Wave 29 */}
                <Route path="/blog/nps-co-to-jest" element={<Redirect301 to="/blog/nps-net-promoter-score-co-to-jest" />} />
                {/* Wave 28 */}
                <Route path="/blog/cross-selling-co-to" element={<BlogCrossSellingCoTo />} />
                {/* Wave 27 */}
                <Route path="/blog/roi-co-to-jest" element={<BlogROICoToJest />} />
                {/* Wave 26 */}
                <Route path="/blog/cpm-co-to" element={<BlogCPMCoTo />} />
                <Route path="/blog/digital-marketing-co-to" element={<BlogDigitalMarketingCoTo />} />
                {/* Wave 25 */}
                <Route path="/blog/lead-magnet-co-to" element={<BlogLeadMagnetCoTo />} />
                <Route path="/uslugi/strona-internetowa-dla-trenera-personalnego" element={<StronaInternetowaDlaTrenera />} />
                {/* Wave 24 */}
                <Route path="/blog/jak-sprzedawac-na-allegro" element={<BlogJakSprzedawacNaAllegro />} />
                <Route path="/blog/e-commerce-co-to-jest" element={<BlogEcommerceCoToJest />} />
                {/* Wave 23 */}
                <Route path="/blog/google-tag-manager-co-to" element={<BlogGoogleTagManager />} />
                <Route path="/blog/link-building-co-to" element={<BlogLinkBuilding />} />
                <Route path="/blog/core-web-vitals-co-to" element={<BlogCoreWebVitals />} />
                <Route path="/blog/google-search-console-co-to" element={<BlogGoogleSearchConsole />} />
                {/* Wave 22 */}
                <Route path="/blog/kpi-co-to-jest" element={<BlogKPICoToJest />} />
                <Route path="/blog/konwersja-co-to" element={<BlogKonwersjaCoTo />} />
                <Route path="/blog/ctr-co-to-jest" element={<BlogCTRCoToJest />} />
                <Route path="/uslugi/strona-internetowa-dla-fotografa" element={<StronaInternetowaDlaFotografa />} />
                {/* Wave 21 */}
                <Route path="/blog/newsletter-co-to" element={<BlogNewsletterCoTo />} />
                <Route path="/blog/co-to-jest-cms" element={<BlogCMSCoToJest />} />
                <Route path="/uslugi/strona-internetowa-dla-prawnika" element={<StronaInternetowaDlaPrawnika />} />
                {/* Wave 20 */}
                <Route path="/blog/pozycjonowanie-sklepu-internetowego" element={<BlogPozycjonowanieSklepu />} />
                <Route path="/blog/branding-co-to" element={<BlogBrandingCoTo />} />
                <Route path="/blog/ui-ux-co-to" element={<BlogUIUXCoTo />} />
                <Route path="/blog/audyt-ux-strony" element={<BlogUXAudit />} />
                {/* Wave 219-222 */}
                <Route path="/blog/koszt-seo" element={<BlogKosztSEO />} />
                <Route path="/blog/marketing-dla-firmy" element={<BlogMarketingDlaFirmy />} />
                <Route path="/agencja-marketingowa/kielce" element={<AgencjaMarketingowaKielce />} />
                <Route path="/uslugi/strony-internetowe/zabrze" element={<StronyInternetoweZabrze />} />
                <Route path="/blog/content-marketing-poradnik" element={<BlogContentMarketingPoradnik />} />
                <Route path="/strony-internetowe/walbrzych" element={<StronyInternetoweWalbrzych />} />
                <Route path="/blog/seo-techniczne-poradnik" element={<BlogSEOTechniczne />} />
                <Route path="/blog/automatyzacja-marketingu" element={<Redirect301 to="/blog/marketing-automation-co-to" />} />
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
                <Route path="/blog/reklama-na-instagramie" element={<BlogSztukaPromocjiInstagram />} />
                <Route path="/agencja-marketingowa/kalisz" element={<AgencjaMarketingowaKalisz />} />
                <Route path="/blog/seo-wordpress-poradnik" element={<BlogSEOWordPress />} />
                <Route path="/blog/marketing-dla-restauracji" element={<BlogMarketingDlaRestauracji />} />
                <Route path="/pozycjonowanie/zgorzelec" element={<PozycjonowanieZgorzelec />} />
                <Route path="/blog/marketing-dla-salonu-pieknosci" element={<BlogMarketingDlaSalonuPieknosci />} />
                <Route path="/blog/marketing-firma-budowlana" element={<BlogMarketingBudowlany />} />
                <Route path="/agencja-marketingowa/zgorzelec" element={<AgencjaMarketingowaZgorzelec />} />
                <Route path="/blog/optymalizacja-landing-page" element={<BlogOptymalizacjaLandingPage />} />
                <Route path="/blog/narzedzia-marketingowe" element={<BlogNarzedziaMarketingowe />} />
                <Route path="/blog/seo-dla-sklepu-internetowego" element={<BlogSEODlaSklepu />} />
                <Route path="/blog/branding-dla-malej-firmy" element={<BlogBrandingDlaMalychFirm />} />
                <Route path="/blog/strategia-content-marketingu" element={<BlogStrategiaContent />} />
                <Route path="/agencja-marketingowa/plock" element={<AgencjaMarketingowaPlock />} />
                <Route path="/pozycjonowanie/plock" element={<PozycjonowaniePlock />} />
                <Route path="/blog/seo-vs-google-ads" element={<BlogSEOvsGoogleAds />} />
                <Route path="/blog/marketing-dla-kancelarii" element={<BlogMarketingDlaKancelarii />} />
                <Route path="/blog/marketing-medyczny" element={<BlogMarketingMedyczny />} />
                <Route path="/strony-internetowe/kielce" element={<StronyInternetoweKielce />} />
                <Route path="/blog/retargeting-reklamy-poradnik" element={<BlogRetargetingPoradnik />} />
                <Route path="/agencja-marketingowa/koszalin" element={<AgencjaMarketingowaKoszalin />} />
                <Route path="/blog/marketing-dla-deweloperow" element={<BlogMarketingDlaDeweloperow />} />
                {/* Wave 247-250 agencja marketingowa major cities */}
                <Route path="/agencja-marketingowa/warszawa" element={<AgencjaMarketingowaWarszawa />} />
                <Route path="/agencja-marketingowa/krakow" element={<AgencjaMarketingowaKrakow />} />
                <Route path="/agencja-marketingowa/wroclaw" element={<AgencjaMarketingowaWroclaw />} />
                <Route path="/agencja-marketingowa/gdansk" element={<AgencjaMarketingowaGdansk />} />
                <Route path="/agencja-marketingowa/poznan" element={<AgencjaMarketingowaPoznan />} />
                <Route path="/agencja-marketingowa/lodz" element={<AgencjaMarketingowaLodz />} />
                <Route path="/agencja-marketingowa/katowice" element={<AgencjaMarketingowaKatowice />} />
                <Route path="/agencja-marketingowa/szczecin" element={<AgencjaMarketingowaSzczecin />} />
                <Route path="/agencja-marketingowa/bydgoszcz" element={<AgencjaMarketingowaBydgoszcz />} />
                <Route path="/agencja-marketingowa/lublin" element={<AgencjaMarketingowaLublin />} />
                <Route path="/agencja-marketingowa/rzeszow" element={<AgencjaMarketingowaRzeszow />} />
                <Route path="/agencja-marketingowa/gdynia" element={<AgencjaMarketingowaGdynia />} />
                {/* Wave 251-252 blog pages */}
                <Route path="/blog/reklama-facebook-vs-google" element={<BlogReklamaFacebookVsGoogle />} />
                <Route path="/blog/seo-dla-malych-firm" element={<BlogSEODlaMalychFirm />} />
                <Route path="/blog/trendy-ecommerce-2027" element={<BlogTrendyEcommerce2027 />} />
                <Route path="/blog/marketing-b2b-poradnik" element={<BlogMarketingB2BPoradnik />} />
                <Route path="/blog/wizualizacje-3d-ecommerce" element={<BlogWizualizacje3DEcommerce />} />
                <Route path="/blog/video-marketing-dla-firm" element={<BlogVideoMarketingDlaFirm />} />
                <Route path="/blog/pozycjonowanie-google-maps" element={<BlogPozycjonowanieGoogleMaps />} />
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
                <Route path="/seo/pozycjonowanie-poznan" element={<SEOPozycjonowaniePoznan />} />
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
                <Route path="/social-media/poznan" element={<Redirect301 to="/agencja-social-media/poznan" />} />
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
                <Route path="/performance-marketing/google-ads/krakow" element={<GoogleAdsKrakow />} />
                <Route path="/performance-marketing/google-ads/wroclaw" element={<GoogleAdsWroclaw />} />
                <Route path="/performance-marketing/google-ads/poznan" element={<GoogleAdsPoznan />} />
                <Route path="/performance-marketing/google-ads/gdansk" element={<GoogleAdsGdansk />} />
                <Route path="/performance-marketing/google-ads/lodz" element={<GoogleAdsLodz />} />
                <Route path="/performance-marketing/google-ads/katowice" element={<GoogleAdsKatowice />} />
                <Route path="/performance-marketing/facebook-ads/warszawa" element={<FacebookAdsWarszawa />} />
                <Route path="/performance-marketing/facebook-ads/krakow" element={<FacebookAdsKrakow />} />
                <Route path="/performance-marketing/facebook-ads/wroclaw" element={<FacebookAdsWroclaw />} />
                <Route path="/performance-marketing/google-ads/szczecin" element={<GoogleAdsSzczecin />} />
                <Route path="/performance-marketing/google-ads/bydgoszcz" element={<GoogleAdsBydgoszcz />} />
                <Route path="/performance-marketing/google-ads/lublin" element={<GoogleAdsLublin />} />
                <Route path="/performance-marketing/google-ads/rzeszow" element={<GoogleAdsRzeszow />} />
                <Route path="/performance-marketing/facebook-ads/gdansk" element={<FacebookAdsGdansk />} />
                <Route path="/performance-marketing/facebook-ads/poznan" element={<FacebookAdsPoznan />} />
                <Route path="/performance-marketing/facebook-ads/lodz" element={<FacebookAdsLodz />} />
                <Route path="/performance-marketing/facebook-ads/katowice" element={<FacebookAdsKatowice />} />
                <Route path="/performance-marketing/facebook-ads/szczecin" element={<FacebookAdsSzczecin />} />
                <Route path="/performance-marketing/facebook-ads/bydgoszcz" element={<FacebookAdsBydgoszcz />} />
                <Route path="/performance-marketing/facebook-ads/lublin" element={<FacebookAdsLublin />} />
                <Route path="/performance-marketing/facebook-ads/rzeszow" element={<FacebookAdsRzeszow />} />
                <Route path="/performance-marketing/facebook-ads/gdynia" element={<FacebookAdsGdynia />} />
                <Route path="/performance-marketing/google-ads/gdynia" element={<GoogleAdsGdynia />} />
                <Route path="/performance-marketing/google-ads/torun" element={<GoogleAdsTorun />} />
                <Route path="/uslugi/pozycjonowanie/gdynia" element={<PozycjonowanieGdynia />} />
                {/* Wave 257 — TikTok Ads cities */}
                <Route path="/performance-marketing/tiktok-ads/warszawa" element={<TikTokAdsWarszawa />} />
                <Route path="/performance-marketing/tiktok-ads/krakow" element={<TikTokAdsKrakow />} />
                <Route path="/performance-marketing/tiktok-ads/wroclaw" element={<TikTokAdsWroclaw />} />
                <Route path="/performance-marketing/tiktok-ads/poznan" element={<TikTokAdsPoznan />} />
                <Route path="/performance-marketing/tiktok-ads/gdansk" element={<TikTokAdsGdansk />} />
                <Route path="/performance-marketing/tiktok-ads/lodz" element={<TikTokAdsLodz />} />
                <Route path="/performance-marketing/tiktok-ads/katowice" element={<TikTokAdsKatowice />} />
                {/* Wave 258 */}
                <Route path="/performance-marketing/facebook-ads/torun" element={<FacebookAdsTorun />} />
                <Route path="/performance-marketing/google-ads/bialystok" element={<GoogleAdsBialystok />} />
                <Route path="/performance-marketing/google-ads/kielce" element={<GoogleAdsKielce />} />
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
                <Route path="/agencja-marketingowa-poznan" element={<Redirect301 to="/agencja-marketingowa/poznan" />} />
                <Route path="/agencja-marketingowa" element={<AgencjaMarketingowa />} />
                <Route path="/agencja-marketingu-internetowego" element={<AgencjaMarketinguInternetowego />} />
                <Route path="/agencja-reklamowa-poznan" element={<AgencjaReklamowaPoznan />} />
                <Route path="/agencja-seo-poznan" element={<Redirect301 to="/seo/pozycjonowanie-poznan" />} />
                <Route path="/uslugi/sklepy-internetowe" element={<SklepyInternetowe />} />
                <Route path="/uslugi/sklepy-internetowe/poznan" element={<SklepyInternetowePoznan />} />
                <Route path="/uslugi/sklepy-internetowe/warszawa" element={<SklepyInternetoweWarszawa />} />
                <Route path="/uslugi/sklepy-internetowe/krakow" element={<SklepyInternetoweKrakow />} />
                <Route path="/agencja-marketingowa-warszawa" element={<Redirect301 to="/agencja-marketingowa/warszawa" />} />
                <Route path="/agencja-marketingowa-katowice" element={<Redirect301 to="/agencja-marketingowa/katowice" />} />
                <Route path="/agencja-marketingowa-wroclaw" element={<Redirect301 to="/agencja-marketingowa/wroclaw" />} />
                <Route path="/agencja-marketingowa-lodz" element={<Redirect301 to="/agencja-marketingowa/lodz" />} />
                <Route path="/agencja-marketingowa-gdansk" element={<Redirect301 to="/agencja-marketingowa/gdansk" />} />
                <Route path="/agencja-marketingowa-krakow" element={<Redirect301 to="/agencja-marketingowa/krakow" />} />
                <Route path="/agencja-marketingowa-lublin" element={<Redirect301 to="/agencja-marketingowa/lublin" />} />
                <Route path="/agencja-marketingowa-rzeszow" element={<Redirect301 to="/agencja-marketingowa/rzeszow" />} />
                <Route path="/agencja-marketingowa-bydgoszcz" element={<Redirect301 to="/agencja-marketingowa/bydgoszcz" />} />
                <Route path="/agencja-marketingowa-torun" element={<AgencjaMarketingowaTorun />} />
                <Route path="/agencja-marketingowa-szczecin" element={<Redirect301 to="/agencja-marketingowa/szczecin" />} />
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
                <Route path="/admin/topical-map" element={<AdminTopicalMap />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/kalkulator-roi" element={<KalkulatorROI />} />
                <Route path="/slownik-marketingowy" element={<SlownikMarketingowy />} />
                <Route path="/zasoby" element={<Zasoby />} />
                <Route path="/generator-briefu" element={<GeneratorBriefu />} />
                <Route path="/kalkulator-cen" element={<KalkulatorCen />} />

                {/* Akademia — public pages redirected to /zasoby,
                    ale auth/admin muszą działać (panel administratora). */}
                <Route path="/akademia/auth" element={<AkademiaAuth />} />
                <Route path="/akademia/admin" element={<AkademiaAdmin />} />
                <Route path="/akademia" element={<Redirect301 to="/zasoby" />} />
                <Route path="/akademia/*" element={<Redirect301 to="/zasoby" />} />

                {/* 301 Redirects - broken/legacy paths */}
                <Route path="/login" element={<Redirect301 to="/zasoby" />} />
                <Route path="/landing-page" element={<Redirect301 to="/uslugi/strony-internetowe" />} />

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
            </ErrorBoundary>
            <Suspense fallback={null}>
              <SEODevPanelLoader />
            </Suspense>
          </Router>
          <CookieBannerLoader />
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
