import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Clients } from "@/components/sections/Clients";
import { Studio } from "@/components/sections/Studio";
import { Process } from "@/components/sections/Process";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <CaseStudies />
      <Clients />
      <Studio />
      <Process />
    </Layout>
  );
};

export default Index;
