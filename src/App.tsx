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

// Service pages
const SocialMediaPoznan = lazy(() => import("./pages/SocialMediaPoznan"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const FotografPoznan = lazy(() => import("./pages/FotografPoznan"));
const FotografiaZDrona = lazy(() => import("./pages/FotografiaZDrona"));
const PozycjonowanieStronPoznan = lazy(() => import("./pages/PozycjonowanieStronPoznan"));
const AgencjaSEOPoznan = lazy(() => import("./pages/AgencjaSEOPoznan"));
const SklepyInternetowePoznan = lazy(() => import("./pages/SklepyInternetowePoznan"));
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

// Other service pages
const IdentyfikacjaWizualna = lazy(() => import("./pages/IdentyfikacjaWizualna"));
const AgencjaGraficzna = lazy(() => import("./pages/AgencjaGraficzna"));
const EcommerceTworzenie = lazy(() => import("./pages/EcommerceTworzenie"));
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
                <Route path="/uslugi/sklepy-internetowe/poznan" element={<SklepyInternetowePoznan />} />
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
