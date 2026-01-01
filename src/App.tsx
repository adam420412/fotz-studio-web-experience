import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CookieBanner } from "@/components/CookieBanner";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Uslugi from "./pages/Uslugi";
import Realizacje from "./pages/Realizacje";
import CaseStudyEnea from "./pages/CaseStudyEnea";
import CaseStudyRPPG from "./pages/CaseStudyRPPG";
import CaseStudyFabrykaVirali from "./pages/CaseStudyFabrykaVirali";
import CaseStudyFriendlyGas from "./pages/CaseStudyFriendlyGas";
import CaseStudyFPS from "./pages/CaseStudyFPS";
import CaseStudyGierki from "./pages/CaseStudyGierki";
import CaseStudyPrzedszkole from "./pages/CaseStudyPrzedszkole";
import CaseStudyVerthe from "./pages/CaseStudyVerthe";
import CaseStudyVictoryCars from "./pages/CaseStudyVictoryCars";
import CaseStudyKlagem from "./pages/CaseStudyKlagem";
import CaseStudyMechanica from "./pages/CaseStudyMechanica";
import CaseStudyCelsjusz from "./pages/CaseStudyCelsjusz";
import CaseStudySookar from "./pages/CaseStudySookar";
import CaseStudyGraf from "./pages/CaseStudyGraf";
import CaseStudyStagePlan from "./pages/CaseStudyStagePlan";
import CaseStudyCuteDumpling from "./pages/CaseStudyCuteDumpling";
import CaseStudyApartamenty from "./pages/CaseStudyApartamenty";
import CaseStudyLauvjah from "./pages/CaseStudyLauvjah";
import Kontakt from "./pages/Kontakt";
import ONas from "./pages/ONas";
import Blog from "./pages/Blog";
import BlogKosztStrony from "./pages/BlogKosztStrony";
import BlogKampaniaReklamowa from "./pages/BlogKampaniaReklamowa";
import StudioPodcastowe from "./pages/StudioPodcastowe";
import DlaKogo from "./pages/DlaKogo";
import DlaKogoFirmyLokalne from "./pages/DlaKogoFirmyLokalne";
import DlaKogoEcommerce from "./pages/DlaKogoEcommerce";
import DlaKogoMarkiPremium from "./pages/DlaKogoMarkiPremium";
import DlaKogoInstytucje from "./pages/DlaKogoInstytucje";
import MarketingMedyczny from "./pages/branze/MarketingMedyczny";
import MarketingGastronomia from "./pages/branze/MarketingGastronomia";
import MarketingBeauty from "./pages/branze/MarketingBeauty";
import MarketingNieruchomosci from "./pages/branze/MarketingNieruchomosci";
import MarketingAutomotive from "./pages/branze/MarketingAutomotive";
import MarketingEdukacja from "./pages/branze/MarketingEdukacja";
import MarketingPrawoFinanse from "./pages/branze/MarketingPrawoFinanse";
import MarketingEcommerceRetail from "./pages/branze/MarketingEcommerceRetail";
import MarketingIT from "./pages/branze/MarketingIT";
import MarketingProdukcja from "./pages/branze/MarketingProdukcja";
import MarketingNGO from "./pages/branze/MarketingNGO";
import MarketingTurystyka from "./pages/branze/MarketingTurystyka";
import AkademiaLanding from "./pages/AkademiaLanding";
import AkademiaAuth from "./pages/AkademiaAuth";
import Akademia from "./pages/Akademia";
import AkademiaAdmin from "./pages/AkademiaAdmin";
import AgencjaMarketingowaPoznan from "./pages/AgencjaMarketingowaPoznan";
import AgencjaMarketinguInternetowego from "./pages/AgencjaMarketinguInternetowego";
import AgencjaReklamowaPoznan from "./pages/AgencjaReklamowaPoznan";
import StronyInternetowePoznan from "./pages/StronyInternetowePoznan";
import StronyInternetoweWarszawa from "./pages/StronyInternetoweWarszawa";
import StronyInternetoweWroclaw from "./pages/StronyInternetoweWroclaw";
import StronyInternetoweKrakow from "./pages/StronyInternetoweKrakow";
import StronyInternetoweGdansk from "./pages/StronyInternetoweGdansk";
import StronyInternetoweLodz from "./pages/StronyInternetoweLodz";
import StronyInternetoweSzczecin from "./pages/StronyInternetoweSzczecin";
import StronyInternetoweBydgoszcz from "./pages/StronyInternetoweBydgoszcz";
import StronyInternetoweKatowice from "./pages/StronyInternetoweKatowice";
import StronyInternetoweLublin from "./pages/StronyInternetoweLublin";
import StronyInternetoweKoszalin from "./pages/StronyInternetoweKoszalin";
import StronyInternetoweGliwice from "./pages/StronyInternetoweGliwice";
import StronyInternetoweRybnik from "./pages/StronyInternetoweRybnik";
import StronyInternetoweTychy from "./pages/StronyInternetoweTychy";
import StronyInternetoweKamionki from "./pages/StronyInternetoweKamionki";
import StronyInternetoweTorun from "./pages/StronyInternetoweTorun";
import StronyInternetoweRzeszow from "./pages/StronyInternetoweRzeszow";
import StronyInternetoweRadom from "./pages/StronyInternetoweRadom";
import StronyInternetoweOpole from "./pages/StronyInternetoweOpole";
import StronyInternetoweOlsztyn from "./pages/StronyInternetoweOlsztyn";
import StronyInternetoweKielce from "./pages/StronyInternetoweKielce";
import StronyInternetoweKonin from "./pages/StronyInternetoweKonin";
import StronyInternetoweTarnow from "./pages/StronyInternetoweTarnow";
import StronyInternetowePlock from "./pages/StronyInternetowePlock";
import StronyInternetoweSosnowiec from "./pages/StronyInternetoweSosnowiec";
import StronyInternetowe from "./pages/StronyInternetowe";
import SocialMediaPoznan from "./pages/SocialMediaPoznan";
import SocialMedia from "./pages/SocialMedia";
import FotografPoznan from "./pages/FotografPoznan";
import FotografiaZDrona from "./pages/FotografiaZDrona";
import PozycjonowanieStronPoznan from "./pages/PozycjonowanieStronPoznan";
import Pozycjonowanie from "./pages/Pozycjonowanie";
import PozycjonowanieGoogleMaps from "./pages/PozycjonowanieGoogleMaps";
import ProdukcjaFilmowPoznan from "./pages/ProdukcjaFilmowPoznan";
import SpotyReklamowe from "./pages/SpotyReklamowe";
import Wizualizacje3D from "./pages/Wizualizacje3D";
import KompleksowaObsluga from "./pages/KompleksowaObsluga";
import FacebookAds from "./pages/FacebookAds";
import GoogleAds from "./pages/GoogleAds";
import KampanieReklamowe from "./pages/KampanieReklamowe";
import IdentyfikacjaWizualna from "./pages/IdentyfikacjaWizualna";
import AgencjaGraficzna from "./pages/AgencjaGraficzna";
import EcommerceTworzenie from "./pages/EcommerceTworzenie";
import ContentMarketing from "./pages/ContentMarketing";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import Regulamin from "./pages/Regulamin";
import Kariera from "./pages/Kariera";
import FAQ from "./pages/FAQ";
import Cennik from "./pages/Cennik";
import Podziekowanie from "./pages/Podziekowanie";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <CookieBanner />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
