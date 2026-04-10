// CLS FIX: Eager imports for homepage sections — eliminates layout shift from
// Suspense placeholder→real-content replacements (was causing CLS=1.125).
// All sections are needed on homepage anyway, so lazy-loading adds no benefit.
import { Layout } from "@/components/layout/Layout";
import { Link } from 'react-router-dom';
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
        title="Agencja Marketingowa Poznań — SEO, Strony WWW i Reklamy Online | Fotz Studio"
        description="Fotz Studio — agencja marketingowa Poznań. Tworzymy strony internetowe, prowadzimy SEO, kampanie Google Ads, social media i produkcję wideo. Sprawdź nasze usługi marketingowe."
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

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Agencja marketingowa Poznań — kompleksowe usługi marketingowe online
            </h2>
            <p className="text-muted-foreground mb-4">
              Fotz Studio to agencja marketingowa z Poznania oferująca pełne spektrum usług
              digital marketingu. Tworzymy strony internetowe i sklepy e-commerce, prowadzimy
              pozycjonowanie SEO, kampanie Google Ads i Meta Ads, zarządzamy social media
              i produkujemy wideo. Obsługujemy firmy z Poznania i całej Polski — małe,
              średnie i duże przedsiębiorstwa z różnych branż.
            </p>
            <p className="text-muted-foreground mb-6">
              Marketing internetowy to dziś fundament każdego biznesu. Firmy widoczne w Google,
              aktywne w social media i prowadzące skuteczne kampanie reklamowe zdobywają
              klientów, których konkurencja traci. Fotz Studio pomaga firmom budować silną
              obecność online i przekształcać internet w efektywne źródło przychodów.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Tworzenie stron internetowych, SEO i kampanie reklamowe — jeden partner dla całego marketingu
            </h2>
            <p className="text-muted-foreground mb-4">
              Zamiast koordynować kilku dostawców, powierzasz marketing jednej agencji.
              Fotz Studio łączy pod jednym dachem: tworzenie stron www i sklepów e-commerce,
              pozycjonowanie organiczne (SEO) i reklamy płatne (Google Ads, Meta Ads),
              obsługę social media, content marketing i produkcję wideo. Spójna strategia
              marketingowa przynosi efekty synergii niemożliwe do osiągnięcia rozproszonym podejściem.
            </p>
            <p className="text-muted-foreground mb-6">
              Każdy projekt zaczynamy od audytu aktualnej sytuacji i ustalenia celów biznesowych.
              Proponujemy działania z najwyższym ROI i realizujemy je systematycznie,
              raportując wyniki w transparentny sposób. Jesteś zawsze na bieżąco z efektami
              pracy naszego zespołu.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Dlaczego firmy wybierają Fotz Studio jako agencję marketingową w Poznaniu?
            </h2>
            <p className="text-muted-foreground mb-4">
              Wyróżnia nas kilka cech: zorientowanie na wyniki i ROI, transparentne raportowanie,
              kompleksowość (wszystko pod jednym dachem), elastyczność (bez długich umów),
              doświadczenie w dziesiątkach branż i pasja do marketingu. Nasz zespół specjalistów
              SEO, web developerów, grafików, copywriterów i social media managerów pracuje
              codziennie nad wzrostem Twojego biznesu online.
            </p>
            <p className="text-muted-foreground">
              Skontaktuj się z nami i sprawdź, jak Fotz Studio może pomóc Twojej firmie.
              Bezpłatna konsultacja marketingowa i audyt dostępne bez zobowiązań.
              Razem zbudujemy skuteczną strategię marketingową dla Twojego biznesu.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
            </div>
          </motion.div>
        </div>
      </section>

      </Layout>
    </>
  );
};

export default Index;
