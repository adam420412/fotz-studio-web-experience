import { lazy, Suspense } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroV3 } from "@/components/sections/HeroV3";
import { ClientMarqueeV3 } from "@/components/sections/ClientMarqueeV3";
import { ProcessV3 } from "@/components/sections/ProcessV3";
import { SEOHead } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/StructuredData";

// Lazy load sections below the fold for better LCP
const FeaturedFilms = lazy(() => import("@/components/sections/FeaturedFilms").then(m => ({ default: m.FeaturedFilms })));
const Services = lazy(() => import("@/components/sections/Services").then(m => ({ default: m.Services })));
const CaseStudies = lazy(() => import("@/components/sections/CaseStudies").then(m => ({ default: m.CaseStudies })));
const OfficeGallery = lazy(() => import("@/components/sections/OfficeGallery").then(m => ({ default: m.OfficeGallery })));
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
        title="Agencja Marketingowa Poznań — SEO, WWW i Reklamy"
        description="Fotz Studio — agencja marketingowa z Poznania. Strony internetowe, SEO, Google Ads, social media, produkcja wideo. Kompleksowa obsługa marki premium."
        keywords="agencja marketingowa, marketing Poznań, strony internetowe Poznań, social media, kampanie reklamowe, lead generation, marketing premium"
        canonical="https://www.fotz-studio.pl"
      >
      </SEOHead>
      <LocalBusinessSchema />
      <OrganizationSchema />
      <Layout>
        <HeroV3 />
        <ClientMarqueeV3 />
        <Suspense fallback={<SectionLoader />}>
          <FeaturedFilms />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CaseStudies />
        </Suspense>
        <ProcessV3 />
        <Suspense fallback={<SectionLoader />}>
          <OfficeGallery compact />
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
