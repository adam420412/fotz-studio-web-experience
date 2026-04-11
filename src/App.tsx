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

// New blog posts (Wave 5 - content gaps)
const BlogIdentyfikacjaWizualna = lazy(() => import("./pages/BlogIdentyfikacjaWizualna"));
const BlogJakZaprojektowacLogo = lazy(() => import("./pages/BlogJakZaprojektowacLogo"));
const BlogGoogleAdsCennik = lazy(() => import("./pages/BlogGoogleAdsCennik"));

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
const BlogBrandingCoTo = lazy(() => import("./pages/BlogBrandingCoTo"));
const BlogUIUXCoTo = lazy(() => import("./pages/BlogUIUXCoTo"));
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
                <Route path="/blog/co-to-jest-seo" element={<BlogCoToJestSeo />} />
                <Route path="/blog/ile-kosztuje-pozycjonowanie" element={<BlogIleKosztujePozycjonowanie />} />
                <Route path="/blog/social-media-dla-firm" element={<BlogSocialMediaDlaFirm />} />
                <Route path="/blog/jak-wybrac-agencje-seo" element={<BlogJakWybracAgencjeSEO />} />
                <Route path="/blog/pozycjonowanie-lokalne-dla-firm" element={<BlogPozycjonowanieLokalnePoradnik />} />
                <Route path="/blog/content-marketing-dla-firm" element={<BlogContentMarketing />} />
                <Route path="/blog/jak-stworzyc-strone-internetowa" element={<BlogJakStworzyc />} />
                <Route path="/blog/strona-internetowa-dla-malej-firmy" element={<BlogStronaInternetowaOdZera />} />
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
                <Route path="/blog/branding-co-to" element={<BlogBrandingCoTo />} />
                <Route path="/blog/ui-ux-co-to" element={<BlogUIUXCoTo />} />
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
                <Route path="/social-media/influencer" element={<BlogInfluencerMarketing />} />
                <Route path="/social-media/reels-vs-tiktok" element={<BlogReelsVsTikTok />} />
                <Route path="/social-media/strategia" element={<SocialMediaStrategia />} />
                <Route path="/social-media/content" element={<SocialMediaContent />} />
                <Route path="/social-media/analityka" element={<SocialMediaAnalityka />} />
                <Route path="/social-media/tiktok-biznes" element={<BlogTikTokBiznes />} />

                {/* Performance marketing cluster */}
                <Route path="/performance-marketing/google-ads" element={<GoogleAds />} />
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
