import { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Preloader } from "@/components/Preloader";

// Lazy load sections below the fold for better LCP
const VideoShowcase = lazy(() => import("@/components/sections/VideoShowcase").then(m => ({ default: m.VideoShowcase })));
const WhyUs = lazy(() => import("@/components/sections/WhyUs").then(m => ({ default: m.WhyUs })));
const Services = lazy(() => import("@/components/sections/Services").then(m => ({ default: m.Services })));
const Process = lazy(() => import("@/components/sections/Process").then(m => ({ default: m.Process })));
const CaseStudies = lazy(() => import("@/components/sections/CaseStudies").then(m => ({ default: m.CaseStudies })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const Clients = lazy(() => import("@/components/sections/Clients").then(m => ({ default: m.Clients })));
const OfficeGallery = lazy(() => import("@/components/sections/OfficeGallery").then(m => ({ default: m.OfficeGallery })));
const Studio = lazy(() => import("@/components/sections/Studio").then(m => ({ default: m.Studio })));
const HomeFAQ = lazy(() => import("@/components/sections/HomeFAQ").then(m => ({ default: m.HomeFAQ })));
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA").then(m => ({ default: m.FinalCTA })));

// Minimal loading fallback
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

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
      <Helmet>
        <title>Agencja Marketingowa i Reklamowa - Twój Partner Marketingowy</title>
        <meta 
          name="description" 
          content="Agencja marketingowa i reklamowa - Twój partner marketingowy. Kompleksowe strategie marketingowe, kampanie dla firm, content i skuteczny marketing dla Twojego klienta." 
        />
        {/* Preload critical LCP image */}
        <link rel="preload" href="/hero-poster.jpg" as="image" />
      </Helmet>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Layout>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <VideoShowcase />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CaseStudies />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Clients />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <OfficeGallery />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Studio />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HomeFAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FinalCTA />
        </Suspense>
      </Layout>
    </>
  );
};

export default Index;
