import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart2, Code2, TrendingUp, Zap, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const SEOCoreWebVitals = () => {
  const features = [
    { icon: Zap, title: "LCP – Largest Contentful Paint", desc: "Optymalizujemy ładowanie głównego elementu strony (hero image, nagłówek H1). Kompresja obrazów, preloading zasobów, CDN i lazy loading — redukujemy LCP poniżej 2,5 sekundy." },
    { icon: Code2, title: "CLS – Cumulative Layout Shift", desc: "Eliminujemy skakanie layoutu podczas ładowania. Definiujemy wymiary obrazów i iFrame'ów, zarządzamy fontami i eliminujemy dynamiczne treści bez zarezerwowanego miejsca." },
    { icon: BarChart2, title: "INP – Interaction to Next Paint", desc: "Optymalizujemy responsywność na kliknięcia i interakcje. Minifikacja JS, code splitting, usuwanie blokujących zasobów — strona reaguje natychmiastowo." },
    { icon: TrendingUp, title: "Audyt PageSpeed Insights", desc: "Analizujemy raport PageSpeed Insights (mobile + desktop) i priorytetyzujemy poprawki z największym wpływem na wynik. Docelowo: 90+ punktów na mobile i desktop." },
  ];

  const faqItems = [
    { question: "Jak Core Web Vitals wpływają na pozycje w Google?", answer: "Core Web Vitals to jeden z sygnałów Page Experience, który Google używa do rankowania stron. Nie jest to czynnik dominujący, ale przy podobnej jakości treści i backlinków, szybsza strona wygra. Szczególnie ważne na mobile." },
    { question: "Co to jest dobry wynik PageSpeed?", answer: "Google uznaje LCP < 2,5s, CLS < 0,1 i INP < 200ms za 'dobre'. W PageSpeed Insights cel to minimum 90/100 na desktop i 70/100 na mobile. Osiągamy te wartości dla większości projektów." },
    { question: "Czy optymalizacja CWV wymaga przeprojektowania strony?", answer: "Zazwyczaj nie. Większość optymalizacji to zmiany techniczne: kompresja obrazów, dodanie atrybutów wymiarów, lazy loading, minifikacja JS. W rzadkich przypadkach, gdy problemy są architektoniczne, może być potrzebna głębsza ingerencja." },
  ];

  return (
    <>
      <SEOHead
        title="Core Web Vitals — Optymalizacja LCP, FID, CLS i Szybkości Strony"
        description="Core Web Vitals — optymalizacja wskaźników LCP, INP (FID), CLS. Popraw szybkość ładowania strony i User Experience dla lepszego SEO. Fotz Studio."
        canonical="https://fotz.pl/seo/core-web-vitals"
        keywords="core web vitals, lcp seo, cls seo, fid seo, szybkość strony, page speed, optymalizacja core web vitals, web vitals google, core web vitals jak poprawić, page experience seo"
      />
      <ServiceSchema
        name="Core Web Vitals: Optymalizacja Szybkości Strony"
        description="Optymalizacja Core Web Vitals: LCP, CLS, INP. Poprawiamy PageSpeed Insights, przyspieszamy ładowanie i eliminujemy błędy UX. Lepsza szybkość = wyższe pozycje."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "SEO", url: "https://fotz.pl/seo" },
        { name: "Core Web Vitals", url: "https://fotz.pl/seo/core-web-vitals" }
      ]}/>
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <OrganizationSchema />


      <Layout>
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Core Web Vitals
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Core Web Vitals: <span className="text-gradient">Optymalizacja Szybkości Strony</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Od 2021 roku Core Web Vitals są oficjalnym czynnikiem rankingowym Google. Strona, która ładuje się wolno lub ma problemy z layoutem, traci pozycje na rzecz szybszych konkurentów. Optymalizujemy LCP, CLS i INP do zielonych wskaźników.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/seo/audyt">Darmowy audyt SEO</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Co obejmuje usługa?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {features.map((f) => (
              <div key={f.title} className="bg-card border rounded-xl p-6 hover:border-primary/40 transition-colors">
                <f.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Często zadawane pytania</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6">
                  <AccordionTrigger className="text-left font-heading font-semibold py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Core Web Vitals — kluczowe wskaźniki User Experience w SEO</h2>
            <p className="text-muted-foreground mb-4">Core Web Vitals to zestaw mierzalnych wskaźników, które Google używa do oceny doświadczenia użytkownika na stronie internetowej: LCP (Largest Contentful Paint) — czas ładowania największego elementu strony (cel: poniżej 2,5s), INP (Interaction to Next Paint) — responsywność na kliknięcia i interakcje (cel: poniżej 200ms), CLS (Cumulative Layout Shift) — stabilność layoutu strony (cel: poniżej 0,1).</p>
            <p className="text-muted-foreground mb-6">Słabe wyniki Core Web Vitals mogą negatywnie wpływać na pozycje SEO strony w Google. Google oficjalnie włączyło je do algorytmu rankingowego jako czynnik "strona experience", kładąc nacisk na szybkość ładowania strony i jakość UX.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Jak poprawić Core Web Vitals — optymalizacja techniczna strony</h2>
            <p className="text-muted-foreground mb-4">Poprawa LCP: optymalizacja obrazów (WebP, lazy loading, preload dla krytycznych zasobów), CDN, minimalizacja czasu serwera (TTFB). Poprawa CLS: ustalanie wymiarów dla obrazów i wideo, unikanie dynamicznego wstawiania treści nad foldą, stabilne ładowanie fontów webowych.</p>
            <p className="text-muted-foreground">Narzędzia do monitorowania Core Web Vitals: Google Search Console (zakładka Core Web Vitals), PageSpeed Insights, Lighthouse w Chrome DevTools. Audyt strony internetowej pod kątem CWV to pierwszy krok do optymalizacji. Szybkość ładowania strony i stabilny layout to dziś obowiązkowy standard dla każdej strony firmowej.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/seo/audyt" className="text-primary hover:underline font-medium text-sm">→ Audyt SEO</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/ai-seo" className="text-primary hover:underline font-medium text-sm">→ AI SEO</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default SEOCoreWebVitals;
