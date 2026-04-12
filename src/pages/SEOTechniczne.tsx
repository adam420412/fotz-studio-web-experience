import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Search, Shield, Globe, FileText, Code2, TrendingUp, Target, BarChart, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const SEOTechniczne = () => {
  const features = [
    { icon: Zap, title: "Core Web Vitals (LCP, INP, CLS)", desc: "Optymalizujemy wskaźniki doświadczenia użytkownika. LCP poniżej 2,5s, CLS poniżej 0,1, INP poniżej 200ms — wymogi rankingowe Google." },
    { icon: Search, title: "Indeksacja i crawl budget", desc: "Sprawdzamy jakie strony Google indeksuje, a jakie ignoruje. Optymalizujemy crawl budget przez noindex, sitemap i strukturę linkowania." },
    { icon: FileText, title: "Sitemap XML i robots.txt", desc: "Prawidłowe sitemaps ułatwiają Google odkrywanie nowych treści. Robots.txt chroni przed indeksacją stron bez wartości SEO." },
    { icon: Globe, title: "HTTPS i bezpieczeństwo", desc: "SSL to sygnał rankingowy. Sprawdzamy certyfikat, mixed content, bezpieczne nagłówki HTTP i konfigurację serwera." },
    { icon: Code2, title: "Structured Data i JSON-LD", desc: "Schema.org dla Organization, LocalBusiness, FAQ, Article, Product. Rich snippets wyróżniają stronę i zwiększają CTR." },
    { icon: Shield, title: "Kanonikalizacja i duplikaty", desc: "Tagi canonical, przekierowania 301, parametry URL — eliminujemy duplikaty treści, które rozdzielają sygnały rankingowe." },
  ];

  const results = [
    { value: "99/100", label: "PageSpeed Insights", desc: "dla zoptymalizowanych stron" },
    { value: "-60%", label: "Mniej błędów crawl", desc: "po naprawie technicznej" },
    { value: "+25%", label: "Więcej zaindeksowanych stron", desc: "po optymalizacji sitemap" },
    { value: "<2s", label: "Czas ładowania", desc: "po optymalizacji Core Web Vitals" },
  ];

  const faqItems = [
    { question: "Czym jest techniczne SEO?", answer: "Techniczne SEO obejmuje aspekty strony wpływające na crawling i indeksację przez Google: szybkość ładowania, Core Web Vitals, strukturę URL, sitemap, robots.txt, HTTPS, dane strukturalne i kanonikalizację. To fundament, bez którego inne działania SEO nie działają efektywnie." },
    { question: "Jak sprawdzić błędy techniczne SEO strony?", answer: "Używamy narzędzi: Google Search Console (błędy crawl, problemy indeksacji), PageSpeed Insights (Core Web Vitals), Screaming Frog (audyt techniczny), Ahrefs Site Audit. Pełny obraz daje połączenie tych narzędzi z ręczną analizą." },
    { question: "Jak poprawić szybkość strony?", answer: "Kompresja obrazów (WebP/AVIF), lazy loading, minifikacja CSS/JS, CDN, caching, optymalizacja TTFB serwera, usunięcie zbędnych skryptów. Dla stron na WordPressie — lekki motyw, minimalna liczba wtyczek i dobry hosting." },
    { question: "Co to jest crawl budget i dlaczego jest ważny?", answer: "Crawl budget to liczba stron, które Googlebot odwiedza w danym czasie. Dla dużych serwisów wyczerpany crawl budget oznacza, że nowe treści długo czekają na indeksację. Optymalizujemy go przez noindex na stronach bez wartości i właściwą strukturę sitemap." },
  ];

  return (
    <>
      <SEOHead
        title="SEO Techniczne — Optymalizacja Techniczna Strony pod Google | Fotz Studio"
        description="SEO techniczne — optymalizacja szybkości ładowania, Core Web Vitals, indeksowanie, structured data i bezpieczeństwo strony. Fotz Studio."
        canonical="https://fotz.pl/seo/techniczne"
        keywords="seo techniczne, technical seo, core web vitals, szybkość strony seo, indeksowanie google, sitemap xml, robots txt, seo techniczne audyt, page speed seo, crawlowanie strony"
      />
      <ServiceSchema
        name="Techniczne SEO i Optymalizacja Techniczna"
        description="Kompleksowa optymalizacja techniczna stron internetowych: szybkość, indeksacja, Core Web Vitals, bezpieczeństwo HTTPS."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "SEO", url: "https://fotz.pl/seo" },
        { name: "Techniczne SEO", url: "https://fotz.pl/seo/techniczne" },
      ]} />
      <FAQSchema items={faqItems} />

      <OrganizationSchema />


      <Layout>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-background via-background to-primary/5 pt-24 pb-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Link to="/seo" className="text-primary text-sm hover:underline">SEO</Link>
                <span className="text-muted-foreground text-sm">/</span>
                <span className="text-muted-foreground text-sm">Techniczne SEO</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Techniczne SEO
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Nawet najlepsza treść nie wypozycjonuje się, jeśli Google nie może prawidłowo skrawlować i zindeksować Twojej strony. Naprawiamy fundamenty techniczne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/konsultacja">Bezpłatna konsultacja</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/seo">Wszystkie usługi SEO</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Co audytujemy i naprawiamy technicznie</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Błędy techniczne blokują wzrost. Identyfikujemy i usuwamy każdą przeszkodę.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <f.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Efekty optymalizacji technicznej</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{r.value}</div>
                  <div className="text-sm text-foreground font-medium mb-1">{r.label}</div>
                  <div className="text-xs text-muted-foreground">{r.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Najczęstsze pytania</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left text-foreground font-medium py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related services */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Powiązane usługi</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/seo" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">SEO Hub</Link>
              <Link to="/seo/on-page" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">SEO On-Page</Link>
              <Link to="/seo/off-page" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">SEO Off-Page</Link>
              <Link to="/seo/audyt" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Audyt SEO</Link>
              <Link to="/uslugi/strony-internetowe" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Strony Internetowe</Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">SEO techniczne — optymalizacja techniczna strony internetowej</h2>
            <p className="text-muted-foreground mb-4">SEO techniczne to zbiór działań, które zapewniają, że wyszukiwarki mogą sprawnie indeksować i rozumieć zawartość Twojej strony. Obejmuje: szybkość ładowania strony (Core Web Vitals), poprawną strukturę URL, mapa strony XML, plik robots.txt, przekierowania 301/302, struktura nagłówków oraz HTTPS i bezpieczeństwo stron internetowych.</p>
            <p className="text-muted-foreground mb-6">Bezpieczeństwo stron internetowych to nie tylko kwestia ochrony danych użytkowników, ale też czynnik rankingowy Google — strony bez HTTPS (SSL) są traktowane jako niezabezpieczone i mogą mieć niższe pozycje w wynikach wyszukiwania.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Core Web Vitals i szybkość ładowania strony — kluczowe wskaźniki SEO technicznego</h2>
            <p className="text-muted-foreground mb-4">Core Web Vitals to trzy metryki Google mierzące doświadczenie użytkownika: LCP (Largest Contentful Paint) — szybkość ładowania głównej treści, FID/INP — responsywność na interakcje, CLS — stabilność layoutu strony. Optymalizacja pod Core Web Vitals poprawia zarówno UX, jak i pozycje SEO.</p>
            <p className="text-muted-foreground">Optymalizacja stron internetowych pod kątem SEO technicznego obejmuje też: poprawę czasu do pierwszego bajtu (TTFB), kompresję obrazów, lazy loading, minifikację kodu JS i CSS, wdrożenie CDN oraz structured data (schema markup). Monitorowanie ruchu na stronie i śledzenie Core Web Vitals przez Google Search Console to podstawa dobrego SEO technicznego.</p>
          
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

export default SEOTechniczne;
