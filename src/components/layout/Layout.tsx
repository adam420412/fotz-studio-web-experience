import { ReactNode, lazy, Suspense, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageProgressBar } from "../PageProgressBar";

// Lazy load non-critical widgets - they're not needed for initial render
const FloatingCTA = lazy(() => import("../FloatingCTA").then(m => ({ default: m.FloatingCTA })));
const WhatsAppWidget = lazy(() => import("../WhatsAppWidget").then(m => ({ default: m.WhatsAppWidget })));
const ChatbotFAQ = lazy(() => import("../ChatbotFAQ").then(m => ({ default: m.ChatbotFAQ })));
const ExitIntentPopup = lazy(() => import("../ExitIntentPopup").then(m => ({ default: m.ExitIntentPopup })));

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  // Defer loading of widgets until after initial render
  const [loadWidgets, setLoadWidgets] = useState(false);

  useEffect(() => {
    // Load widgets after 2 seconds to prioritize content
    const timer = setTimeout(() => setLoadWidgets(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageProgressBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {loadWidgets && (
        <Suspense fallback={null}>
          <FloatingCTA />
          <WhatsAppWidget />
          <ChatbotFAQ />
          <ExitIntentPopup />
        </Suspense>
      )}
    </div>
  );
}
