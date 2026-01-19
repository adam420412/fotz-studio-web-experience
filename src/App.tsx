import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { injectSpeedInsights } from "@vercel/speed-insights";

// Only load Index synchronously - it's the most common entry point
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const Uslugi = lazy(() => import("./pages/Uslugi"));
const Realizacje = lazy(() => import("./pages/Realizacje"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
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
const StronyInternetowe = lazy(() => import("./pages/StronyInternetowe"));

// Service pages
const SocialMediaPoznan = lazy(() => import("./pages/SocialMediaPoznan"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const FotografPoznan = lazy(() => import("./pages/FotografPoznan"));
const FotografiaZDrona = lazy(() => import("./pages/FotografiaZDrona"));
const PozycjonowanieStronPoznan = lazy(() => import("./pages/PozycjonowanieStronPoznan"));
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

// Lazy load non-critical global components
const CookieBanner = lazy(() => import("./components/CookieBanner").then(m => ({ default: m.CookieBanner })));
const SEODevPanel = lazy(() => import("./components/dev/SEODevPanel").then(m => ({ default: m.SEODevPanel })));
const Redirect301 = lazy(() => import("./components/seo/Redirect301").then(m => ({ default: m.Redirect301 })));

const queryClient = new QueryClient();

// Minimal page loader
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => {
  useEffect(() => {
    // Initialize Vercel Speed Insights on first render
    injectSpeedInsights();
  }, []);

  return (
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
                <Route path="/o-nas" element={<ONas />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/ile-kosztuje-strona-internetowa" element={<BlogKosztStrony />} />
                <Route path="/blog/kampania-reklamowa-marketingowa" element={<BlogKampaniaReklamowa />} />
                <Route path="/blog/ai-w-marketingu-msp-2025" element={<BlogAIMarketing />} />
                <Route path="/blog/google-ads-vs-facebook-ads" element={<BlogGoogleVsFacebook />} />
                <Route path="/blog/tiktok-dla-biznesu" element={<BlogTikTokBiznes />} />
                <Route path="/blog/seo-lokalne-poznan-poradnik" element={<BlogSEOLokalnePoznan />} />
                <Route path="/blog/email-marketing-2025" element={<BlogEmailMarketing />} />
                <Route path="/blog/instagram-reels-vs-tiktok" element={<BlogReelsVsTikTok />} />
                <Route path="/blog/jak-stworzyc-landing-page" element={<BlogLandingPage />} />
                <Route path="/blog/influencer-marketing-polska" element={<BlogInfluencerMarketing />} />
                <Route path="/blog/branding-dla-startupow" element={<BlogBrandingStartupy />} />
                <Route path="/blog/ux-ui-ecommerce" element={<BlogUXEcommerce />} />
                <Route path="/blog/seo-ecommerce" element={<BlogSEOEcommerce />} />
                <Route path="/blog/marketing-automation" element={<BlogMarketingAutomation />} />
                <Route path="/blog/personal-branding-linkedin" element={<BlogPersonalBrandingLinkedIn />} />
                <Route path="/blog/video-marketing-trendy-2025" element={<BlogVideoMarketing />} />
                <Route path="/blog/remarketing-poradnik" element={<BlogRemarketing />} />
                <Route path="/blog/google-analytics-4-poradnik" element={<BlogGoogleAnalytics4 />} />
                <Route path="/blog/budzet-marketingowy-planowanie" element={<BlogBudzetMarketingowy />} />
                <Route path="/blog/marketing-b2b-vs-b2c" element={<BlogB2BvsB2C />} />
                <Route path="/blog/psychologia-cen" element={<BlogPsychologiaCen />} />
                <Route path="/blog/copywriting-landing-page" element={<BlogCopywritingLanding />} />
                <Route path="/poradniki" element={<Poradniki />} />
                <Route path="/studio-podcastowe" element={<StudioPodcastowe />} />
                <Route path="/dla-kogo" element={<DlaKogo />} />
                <Route path="/dla-kogo/firmy-lokalne" element={<DlaKogoFirmyLokalne />} />
                <Route path="/dla-kogo/ecommerce" element={<DlaKogoEcommerce />} />
                <Route path="/dla-kogo/marki-premium" element={<DlaKogoMarkiPremium />} />
                <Route path="/dla-kogo/instytucje" element={<DlaKogoInstytucje />} />
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
                <Route path="/akademia" element={<AkademiaLanding />} />
                <Route path="/akademia/auth" element={<AkademiaAuth />} />
                <Route path="/akademia/panel" element={<Akademia />} />
                <Route path="/akademia/admin" element={<AkademiaAdmin />} />
                <Route path="/agencja-marketingowa-poznan" element={<AgencjaMarketingowaPoznan />} />
                <Route path="/agencja-marketingu-internetowego" element={<AgencjaMarketinguInternetowego />} />
                <Route path="/agencja-reklamowa-poznan" element={<AgencjaReklamowaPoznan />} />
                <Route path="/strony-internetowe-poznan" element={<StronyInternetowePoznan />} />
                <Route path="/strony-internetowe-warszawa" element={<StronyInternetoweWarszawa />} />
                <Route path="/strony-internetowe-wroclaw" element={<StronyInternetoweWroclaw />} />
                <Route path="/strony-internetowe-krakow" element={<StronyInternetoweKrakow />} />
                <Route path="/strony-internetowe-gdansk" element={<StronyInternetoweGdansk />} />
                <Route path="/strony-internetowe-lodz" element={<StronyInternetoweLodz />} />
                <Route path="/strony-internetowe-szczecin" element={<StronyInternetoweSzczecin />} />
                <Route path="/strony-internetowe-bydgoszcz" element={<StronyInternetoweBydgoszcz />} />
                <Route path="/strony-internetowe-katowice" element={<StronyInternetoweKatowice />} />
                <Route path="/strony-internetowe-lublin" element={<StronyInternetoweLublin />} />
                <Route path="/strony-internetowe-koszalin" element={<StronyInternetoweKoszalin />} />
                <Route path="/strony-internetowe-gliwice" element={<StronyInternetoweGliwice />} />
                <Route path="/strony-internetowe-rybnik" element={<StronyInternetoweRybnik />} />
                <Route path="/strony-internetowe-tychy" element={<StronyInternetoweTychy />} />
                <Route path="/strony-internetowe-kamionki" element={<StronyInternetoweKamionki />} />
                <Route path="/strony-internetowe-torun" element={<StronyInternetoweTorun />} />
                <Route path="/strony-internetowe-rzeszow" element={<StronyInternetoweRzeszow />} />
                <Route path="/strony-internetowe-radom" element={<StronyInternetoweRadom />} />
                <Route path="/strony-internetowe-opole" element={<StronyInternetoweOpole />} />
                <Route path="/strony-internetowe-olsztyn" element={<StronyInternetoweOlsztyn />} />
                <Route path="/strony-internetowe-kielce" element={<StronyInternetoweKielce />} />
                <Route path="/strony-internetowe-konin" element={<StronyInternetoweKonin />} />
                <Route path="/strony-internetowe-tarnow" element={<StronyInternetoweTarnow />} />
                <Route path="/strony-internetowe-plock" element={<StronyInternetowePlock />} />
                <Route path="/strony-internetowe-sosnowiec" element={<StronyInternetoweSosnowiec />} />
                <Route path="/strony-internetowe-bialystok" element={<StronyInternetoweBialystok />} />
                <Route path="/strony-internetowe-czestochowa" element={<StronyInternetoweCzestochowa />} />
                <Route path="/strony-internetowe-zielona-gora" element={<StronyInternetoweZielonaGora />} />
                <Route path="/strony-internetowe-elblag" element={<StronyInternetoweElblag />} />
                <Route path="/strony-internetowe-legnica" element={<StronyInternetoweLegnica />} />
                <Route path="/strony-internetowe-kalisz" element={<StronyInternetoweKalisz />} />
                <Route path="/strony-internetowe" element={<StronyInternetowe />} />
                <Route path="/social-media-poznan" element={<SocialMediaPoznan />} />
                <Route path="/social-media" element={<SocialMedia />} />
                <Route path="/fotograf-poznan" element={<FotografPoznan />} />
                <Route path="/fotografia-z-drona" element={<FotografiaZDrona />} />
                <Route path="/pozycjonowanie-stron-poznan" element={<PozycjonowanieStronPoznan />} />
                <Route path="/pozycjonowanie" element={<Pozycjonowanie />} />
                <Route path="/pozycjonowanie-google-maps" element={<PozycjonowanieGoogleMaps />} />
                <Route path="/produkcja-filmow-poznan" element={<ProdukcjaFilmowPoznan />} />
                <Route path="/spoty-reklamowe" element={<SpotyReklamowe />} />
                <Route path="/wizualizacje-3d" element={<Wizualizacje3D />} />
                <Route path="/kompleksowa-obsluga-marketingowa" element={<KompleksowaObsluga />} />
                <Route path="/facebook-ads" element={<FacebookAds />} />
                <Route path="/google-ads" element={<GoogleAds />} />
                <Route path="/kampanie-reklamowe" element={<KampanieReklamowe />} />
                <Route path="/tiktok-ads" element={<TikTokAds />} />
                <Route path="/linkedin-ads" element={<LinkedInAds />} />
                <Route path="/youtube-ads" element={<YouTubeAds />} />
                <Route path="/instagram-ads" element={<InstagramAds />} />
                <Route path="/facebook-instagram-ads" element={<FacebookInstagramAds />} />
                <Route path="/identyfikacja-wizualna" element={<IdentyfikacjaWizualna />} />
                <Route path="/agencja-graficzna" element={<AgencjaGraficzna />} />
                <Route path="/ecommerce-tworzenie-sklepu" element={<EcommerceTworzenie />} />
                <Route path="/content-marketing" element={<ContentMarketing />} />
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
                <Route path="/audyt-seo" element={<AudytSEO />} />
                <Route path="/kalkulator-cen" element={<KalkulatorCen />} />
                
                {/* 301 Redirects - stare URL-e /branze/* przekierowują na nowe /dla-kogo/* */}
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
};

export default App;
