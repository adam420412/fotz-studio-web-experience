import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCTA } from "../FloatingCTA";
import { PageProgressBar } from "../PageProgressBar";
import { WhatsAppWidget } from "../WhatsAppWidget";
import { ExitIntentPopup } from "../ExitIntentPopup";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageProgressBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
      <WhatsAppWidget />
      <ExitIntentPopup />
    </div>
  );
}
