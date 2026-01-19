import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/StructuredData";

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
const NewsletterSection = lazy(() => import("@/components/sections/NewsletterSection").then(m => ({ default: m.NewsletterSection })));
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA").then(m => ({ default: m.FinalCTA })));

// Minimal loading fallback
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Fotz Studio - Agencja Marketingowa Poznań | Marketing Premium</title>
        <meta 
          name="description" 
          content="Fotz Studio to agencja marketingowa nowej generacji. Projektujemy marketing, który realnie pozyskuje klientów. Strony www, social media, kampanie reklamowe. Poznań." 
        />
        <meta name="keywords" content="agencja marketingowa, marketing Poznań, strony internetowe Poznań, social media, kampanie reklamowe, lead generation, marketing premium" />
        <link rel="canonical" href="https://fotz.pl" />
        <meta property="og:title" content="Fotz Studio - Agencja Marketingowa Poznań" />
        <meta property="og:description" content="Projektujemy marketing, który realnie pozyskuje klientów. Strony www, social media, kampanie reklamowe." />
        <meta property="og:url" content="https://fotz.pl/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        {/* Preload critical LCP image */}
        <link rel="preload" href="/hero-poster.jpg" as="image" fetchPriority="high" />
      </Helmet>
      <LocalBusinessSchema />
      <OrganizationSchema />
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
          <NewsletterSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FinalCTA />
        </Suspense>
      </Layout>
    </>
  );
};

export default Index;
