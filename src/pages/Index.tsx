import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Clients } from "@/components/sections/Clients";
import { Studio } from "@/components/sections/Studio";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Preloader } from "@/components/Preloader";
import { OrganizationSchema, WebPageSchema } from "@/components/seo/StructuredData";

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
      </Helmet>
      <OrganizationSchema />
      <WebPageSchema 
        title="Agencja Marketingowa i Reklamowa - Twój Partner Marketingowy"
        description="Agencja marketingowa i reklamowa - Twój partner marketingowy. Kompleksowe strategie marketingowe, kampanie dla firm, content i skuteczny marketing."
        url="https://fotz.pl"
      />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Layout>
        <Hero />
        <WhyUs />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Clients />
        <Studio />
        <HomeFAQ />
        <FinalCTA />
      </Layout>
    </>
  );
};

export default Index;