import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCTA } from "../FloatingCTA";
import { PageProgressBar } from "../PageProgressBar";
import { EasterEggs } from "../EasterEggs";
import { CustomCursor } from "../CustomCursor";
import { SmoothScroll } from "../SmoothScroll";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background flex flex-col">
        <PageProgressBar />
        <CustomCursor />
        <EasterEggs />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </div>
    </SmoothScroll>
  );
}
