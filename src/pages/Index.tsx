import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HeroV3 } from "@/components/sections/HeroV3";
import { ClientMarqueeV3 } from "@/components/sections/ClientMarqueeV3";
import { ProcessV3 } from "@/components/sections/ProcessV3";
import { SEOHead } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";

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
        title="Agencja Marketingowa Poznań — SEO, Strony WWW i Reklamy Online"
        description="Fotz Studio — agencja marketingowa Poznań. Tworzymy strony internetowe, prowadzimy SEO, kampanie Google Ads, social media i produkcję wideo. Sprawdź nasze…"
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

      {/* SEO Article Section */}
      <section className="py-20 md:py-28" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 seo-article">
          <FadeInView>
            <h2>Agencja marketingowa Poznań — kompleksowe usługi marketingowe online</h2>
            <p>
              Fotz Studio to agencja marketingowa z Poznania oferująca pełne spektrum usług
              digital marketingu. Tworzymy strony internetowe i sklepy e-commerce, prowadzimy
              pozycjonowanie SEO, kampanie Google Ads i Meta Ads, zarządzamy social media
              i produkujemy wideo. Obsługujemy firmy z Poznania i całej Polski — małe,
              średnie i duże przedsiębiorstwa z różnych branż.
            </p>
            <p>
              Marketing internetowy to dziś fundament każdego biznesu. Firmy widoczne w Google,
              aktywne w social media i prowadzące skuteczne kampanie reklamowe zdobywają
              klientów, których konkurencja traci. Fotz Studio pomaga firmom budować silną
              obecność online i przekształcać internet w efektywne źródło przychodów.
            </p>

            <h2>Tworzenie stron internetowych, SEO i kampanie reklamowe — jeden partner dla całego marketingu</h2>
            <p>
              Zamiast koordynować kilku dostawców, powierzasz marketing jednej agencji.
              Fotz Studio łączy pod jednym dachem: tworzenie stron www i sklepów e-commerce,
              pozycjonowanie organiczne (SEO) i reklamy płatne (Google Ads, Meta Ads),
              obsługę social media, content marketing i produkcję wideo. Spójna strategia
              marketingowa przynosi efekty synergii niemożliwe do osiągnięcia rozproszonym podejściem.
            </p>
            <p>
              Każdy projekt zaczynamy od audytu aktualnej sytuacji i ustalenia celów biznesowych.
              Proponujemy działania z najwyższym ROI i realizujemy je systematycznie,
              raportując wyniki w transparentny sposób. Jesteś zawsze na bieżąco z efektami
              pracy naszego zespołu.
            </p>

            <h2>Dlaczego firmy wybierają Fotz Studio jako agencję marketingową w Poznaniu?</h2>
            <p>
              Wyróżnia nas kilka cech: zorientowanie na wyniki i ROI, transparentne raportowanie,
              kompleksowość (wszystko pod jednym dachem), elastyczność (bez długich umów),
              doświadczenie w dziesiątkach branż i pasja do marketingu. Nasz zespół specjalistów
              SEO, web developerów, grafików, copywriterów i social media managerów pracuje
              codziennie nad wzrostem Twojego biznesu online.
            </p>
            <p>
              Skontaktuj się z nami i sprawdź, jak Fotz Studio może pomóc Twojej firmie.
              Bezpłatna konsultacja marketingowa i audyt dostępne bez zobowiązań.
              Razem zbudujemy skuteczną strategię marketingową dla Twojego biznesu.
            </p>

            <div className="mt-8 pt-6 flex flex-wrap gap-x-6 gap-y-2" style={{ borderTop: "1px solid var(--dv-hair)" }}>
              <Link to="/seo/pozycjonowanie" style={{ color: "var(--dv-accent-pink)" }} className="hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/uslugi/strony-internetowe" style={{ color: "var(--dv-accent-pink)" }} className="hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/kampanie-reklamowe" style={{ color: "var(--dv-accent-pink)" }} className="hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media" style={{ color: "var(--dv-accent-pink)" }} className="hover:underline font-medium text-sm">→ Social media</Link>
            </div>
          </FadeInView>
        </div>
      </section>

      </Layout>
    </>
  );
};

export default Index;
