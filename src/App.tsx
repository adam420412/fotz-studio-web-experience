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
import StudioPodcastowe from "./pages/StudioPodcastowe";
import DlaKogo from "./pages/DlaKogo";
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
import StronyInternetowe from "./pages/StronyInternetowe";
import SocialMediaPoznan from "./pages/SocialMediaPoznan";
import SocialMedia from "./pages/SocialMedia";
import FotografPoznan from "./pages/FotografPoznan";
import PozycjonowanieStronPoznan from "./pages/PozycjonowanieStronPoznan";
import Pozycjonowanie from "./pages/Pozycjonowanie";
import ProdukcjaFilmowPoznan from "./pages/ProdukcjaFilmowPoznan";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import Regulamin from "./pages/Regulamin";
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
            <Route path="/studio-podcastowe" element={<StudioPodcastowe />} />
            <Route path="/dla-kogo" element={<DlaKogo />} />
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
            <Route path="/strony-internetowe" element={<StronyInternetowe />} />
            <Route path="/social-media-poznan" element={<SocialMediaPoznan />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/fotograf-poznan" element={<FotografPoznan />} />
            <Route path="/pozycjonowanie-stron-poznan" element={<PozycjonowanieStronPoznan />} />
            <Route path="/pozycjonowanie" element={<Pozycjonowanie />} />
            <Route path="/produkcja-filmow-poznan" element={<ProdukcjaFilmowPoznan />} />
            <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
            <Route path="/regulamin" element={<Regulamin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <CookieBanner />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
