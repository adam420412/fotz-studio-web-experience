import { Layout } from "@/components/layout/Layout";
import { HeroV3 } from "@/components/sections/HeroV3";
import { ClientMarqueeV3 } from "@/components/sections/ClientMarqueeV3";
import { ProcessV3 } from "@/components/sections/ProcessV3";
import { SEOHead } from "@/components/seo/SEOHead";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/StructuredData";

// The page itself is code-split in App. Keep its sections in one hydration
// boundary so their existing HTML also survives early context updates.
import { FeaturedFilms } from "@/components/sections/FeaturedFilms";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { OfficeGallery } from "@/components/sections/OfficeGallery";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

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
      <Layout workPlacement="manual">
        <HeroV3 />
        <ClientMarqueeV3 />
        <FeaturedFilms />
        <Services />
        <CaseStudies />
        <ProcessV3 />
        <SelectedWork />
        <OfficeGallery compact />
        <HomeFAQ />
        <NewsletterSection />
        <FinalCTA />

      </Layout>
    </>
  );
};

export default Index;
