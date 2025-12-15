import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Uslugi from "./pages/Uslugi";
import Realizacje from "./pages/Realizacje";
import Kontakt from "./pages/Kontakt";
import ONas from "./pages/ONas";
import Blog from "./pages/Blog";
import StudioPodcastowe from "./pages/StudioPodcastowe";
import DlaKogo from "./pages/DlaKogo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uslugi" element={<Uslugi />} />
          <Route path="/realizacje" element={<Realizacje />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/studio-podcastowe" element={<StudioPodcastowe />} />
          <Route path="/dla-kogo" element={<DlaKogo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
