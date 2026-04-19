import { lazy, Suspense } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroV3 } from "@/components/sections/HeroV3";
import { ClientMarqueeV3 } from "@/components/sections/ClientMarqueeV3";
import { ProcessV3 } from "@/components/sections/ProcessV3";
import { SEOHead } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/StructuredData";

// Lazy load sections below the fold for better LCP
const VideoShowcase = lazy(() => import("@/components/sections/VideoShowcase").then(m => ({ default: m.VideoShowcase })));
const WhyUs = lazy(() => import("@/components/sections/WhyUs").then(m => ({ default: m.WhyUs })));
const Services = lazy(() => import("@/components/sections/Services").then(m => ({ default: m.Services })));
const CaseStudies = lazy(() => import("@/components/sections/CaseStudies").then(m => ({ default: m.CaseStudies })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const Clients = lazy(() => import("@/components/sections/Clients").then(m => ({ default: m.Clients })));
const OfficeGallery = lazy(() => import("@/components/sections/OfficeGallery").then(m => ({ default: m.OfficeGallery })));
const Studio = lazy(() => import("@/components/sections/Studio").then(m => ({ default: m.Studio })));
const HomeFAQ = lazy(() => import("@/components/sections/HomeFAQ").then(m => ({ default: m.HomeFAQ })));
const NewsletterSection = lazy(() => import("@/components/sections/NewsletterSection").then(m => ({ default: m.NewsletterSection })));
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA").then(m => ({ default: m.FinalCTA })));

// Ultra minimal loading fallback - no spinner
const SectionLoader = () => (
  <div className="py-16 md:py-24" />
);

const Index = () => {
  return (
    <>
      <SEOHead
        title="Agencja Marketingowa Poznań | Fotz Studio"
        description="Agencja marketingowa Poznań. Strony www, social media, kampanie Google i Meta Ads, SEO. Umów bezpłatną konsultację!"
        keywords="agencja marketingowa, marketing Poznań, strony internetowe Poznań, social media, kampanie reklamowe, lead generation, marketing premium"
        canonical="https://fotz.pl"
      >
        {/* Preload critical LCP image */}
        <link rel="preload" href="/hero-poster.jpg" as="image" fetchPriority="high" />
      </SEOHead>
      <LocalBusinessSchema />
      <OrganizationSchema />
      <Layout>
        <HeroV3 />
        <ClientMarqueeV3 />
        <Suspense fallback={<SectionLoader />}>
          <VideoShowcase />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <ProcessV3 />
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
