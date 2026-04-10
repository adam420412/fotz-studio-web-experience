// CLS FIX: Eager imports for homepage sections — eliminates layout shift from
// Suspense placeholder→real-content replacements (was causing CLS=1.125).
// All sections are needed on homepage anyway, so lazy-loading adds no benefit.
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { SEOHead } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Clients } from "@/components/sections/Clients";
import { OfficeGallery } from "@/components/sections/OfficeGallery";
import { Studio } from "@/components/sections/Studio";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

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
        <Hero />
        <VideoShowcase />
        <WhyUs />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Clients />
        <OfficeGallery />
        <Studio />
        <HomeFAQ />
        <NewsletterSection />
        <FinalCTA />
      </Layout>
    </>
  );
};

export default Index;
