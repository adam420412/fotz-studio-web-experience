import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Clients } from "@/components/sections/Clients";
import { Studio } from "@/components/sections/Studio";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Preloader } from "@/components/Preloader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll during preloader
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Layout>
        <Hero />
        <Services />
        <CaseStudies />
        <Clients />
        <Studio />
        <Process />
        <FinalCTA />
      </Layout>
    </>
  );
};

export default Index;