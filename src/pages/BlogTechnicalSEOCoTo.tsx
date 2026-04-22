import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Zap, BarChart2, TrendingUp, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogTechnicalSEOCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Technical SEO — co to jest i jak przeprowadzić audyt?" },
  ];

  const technicalFactors = [
    { factor: "Core Web Vitals", desc: "LCP (Largest Contentful Paint) poniżej 2.5s, FID/INP poniżej 200ms, CLS poniżej 0.1. Mierzone przez PageSpeed Insights." },
    { factor: "Mobile-First Indexing", desc: "Google indeksuje mobilną wersję strony. Responsywność to nie opcja — to wymaganie rankingowe." },
    { factor: "HTTPS i bezpieczeństwo", desc: "Certyfikat SSL jest niezbędny. Strony HTTP są oznaczane jako 'Niebezpieczne' i tracą pozycje." },
    { factor: "Crawlability i Indexability", desc: "Czy Googlebot może znaleźć i indeksować Twoje strony? Robots.txt, sitemap.xml, meta robots, canonical tags." },
    { factor: "Struktura URL", desc: "Czytelne, krótkie URL z słowami kluczowymi. Unikaj parametrów, dynamicznych URL i długich ścieżek." },
    { factor: "Dane strukturyzowane (Schema)", desc: "JSON-LD markup dla produktów, artykułów, FAQ, lokalnych firm — rich snippets w SERP = wyższy CTR." },
  ];

  const faqItems = [
    {
      question: "Co to jest Technical SEO?",
      answer:
        "Technical SEO (techniczne SEO) to aspekt optymalizacji pod wyszukiwarki dotyczący infrastruktury technicznej strony internetowej — szybkości, crawlability, indexability, struktury, bezpieczeństwa i innych czynników technicznych. Technical SEO ≠ On-Page SEO ≠ Off-Page SEO: Technical SEO: jak strona jest zbudowana (szybkość, kod, serwer). On-Page SEO: treści i optymalizacja słów kluczowych. Off-Page SEO: linki i sygnały zewnętrzne. Technical SEO jest fundamentem — nawet najlepszy content nie zaindeksuje się prawidłowo jeśli Googlebot nie może go prawidłowo przeczytać.",
    },
    {
      question: "Jak przeprowadzić audyt Technical SEO?",
      answer:
        "Checklist audytu Technical SEO: 1) Crawl strony — Screaming Frog (darmowy do 500 stron), Ahrefs Site Audit, Semrush Site Audit. 2) Google Search Console — błędy indeksowania, Core Web Vitals, Mobile Usability. 3) PageSpeed Insights — Core Web Vitals (LCP, INP, CLS) + rekomendacje optymalizacji. 4) Sprawdź robots.txt — czy nie blokujesz ważnych stron? 5) Sprawdź sitemap.xml — czy jest aktualna i wysłana do GSC? 6) Broken links — 404 błędy na ważnych stronach. 7) Duplicate content — canonical tags, hreflang dla wielojęzycznych. 8) HTTPS — certyfikat SSL, przekierowania HTTP→HTTPS. 9) Structured data — Schema.org markup, test Google Rich Results.",
    },
    {
      question: "Czym są Core Web Vitals?",
      answer:
        "Core Web Vitals (CWV) to zestaw metryk Google mierzących doświadczenie użytkownika na stronie: LCP (Largest Contentful Paint): czas załadowania największego elementu strony. Cel: poniżej 2.5 sekundy. INP (Interaction to Next Paint): responsywność na interakcje. Cel: poniżej 200ms. CLS (Cumulative Layout Shift): stabilność wizualna — czy elementy 'skaczą' podczas ładowania. Cel: poniżej 0.1. CWV są czynnikiem rankingowym od maja 2021. Google PageSpeed Insights i Google Search Console mierzą CWV. Narzędzia naprawcze: WebPageTest, GTmetrix, Lighthouse (wbudowany w Chrome DevTools).",
    },
    {
      question: "Jak poprawić szybkość strony internetowej?",
      answer:
        "Optymalizacja szybkości strony — najważniejsze techniki: 1) Optymalizacja obrazów — kompresja (WebP/AVIF zamiast PNG/JPG), lazy loading, responsywne obrazy (srcset). 2) Minimalizacja CSS/JS — usuń nieużywany kod, minifikuj pliki. 3) CDN (Content Delivery Network) — serwuj pliki z serwera geograficznie bliskiego użytkownikowi (Cloudflare, Fastly). 4) Caching — browser caching, server caching. 5) Zmniejszenie TTFB — szybki hosting (VPS, managed WordPress, edge hosting). 6) Defer/async JavaScript — nie blokuj renderowania strony. 7) Critical CSS — ładuj CSS potrzebny do first render inline. 8) Font preloading — wyeliminuj FOIT (Flash of Invisible Text).",
    },
    {
      question: "Co to jest Crawl Budget?",
      answer:
        "Crawl Budget to liczba stron które Googlebot odwiedza na Twojej stronie w określonym czasie. Ograniczone zasoby crawlera Googlebota = Googlebot nie może indeksować wszystkiego. Dlaczego to ważne: jeśli masz 100 000 stron ale Googlebot crawluje 1000/dzień, nowe strony zaindeksują się powoli. Jak optymalizować Crawl Budget: zablokuj w robots.txt strony które nie powinny być indeksowane (admin, search results, filtrowanie). Naprawiaj błędy 404 i 5xx (marnują budżet). Sprawdzaj log serwera — co Googlebot crawluje. Dodawaj wartościowe nowe strony regularnie (świeżość treści = więcej crawlów). Crawl Budget to problem głównie dla dużych stron (10 000+ stron).",
    },
    {
      question: "Jakie narzędzia Technical SEO warto używać?",
      answer:
        "Najlepsze narzędzia Technical SEO: Darmowe: Google Search Console — błędy, indeksowanie, CWV, mobile usability. PageSpeed Insights — CWV i rekomendacje. Screaming Frog SEO Spider — crawl do 500 stron za darmo. Google Rich Results Test — test Schema markup. Google Mobile-Friendly Test. Płatne: Ahrefs Site Audit — kompleksowy audit techniczny. Semrush Site Audit — podobny do Ahrefs. Screaming Frog (pełny) — 209 GBP/rok, crawl bez limitu stron. DeepCrawl (enterprise) — zaawansowane audyty. Do monitorowania: New Relic, Datadog (wydajność serwera). Rekomendowany stack: Google Search Console + Screaming Frog (darmowy) + PageSpeed Insights = wystarczy dla większości stron.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Technical SEO — co to jest i jak przeprowadzić audyt? | fotz.pl"
        description="Technical SEO co to jest — wyjaśniamy czym jest techniczne SEO, Core Web Vitals, crawlability, jak audytować stronę i optymalizować szybkość strony."
        canonical="https://fotz.pl/blog/technical-seo-co-to"

        keywords="Technical SEO co to jest, Technical SEO definicja, czym jest Technical SEO, Technical SEO w marketingu, Technical SEO przykłady, jak działa Technical SEO, Technical SEO strategia"
      />
      <ArticleSchema
        title="Technical SEO — co to jest i jak przeprowadzić audyt?"
        description="Czym jest Technical SEO, Core Web Vitals (LCP, INP, CLS), jak przeprowadzić audyt techniczny, optymalizacja szybkości strony, Crawl Budget i narzędzia."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/technical-seo-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> SEO techniczne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Technical SEO — co to jest i jak audytować stronę?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Technical SEO to fundament pozycjonowania — bez prawidłowej infrastruktury technicznej
                nawet najlepszy content nie zaindeksuje się właściwie. Core Web Vitals, crawlability i audyt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Kluczowe czynniki Technical SEO</h2>
              <div className="space-y-3 mb-6">
                {technicalFactors.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{f.factor}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Core Web Vitals — progi</h2>
              <div className="space-y-2 mb-6">
                {[
                  { metric: "LCP (Largest Contentful Paint)", good: "poniżej 2.5s", needs: "2.5–4s", poor: "powyżej 4s" },
                  { metric: "INP (Interaction to Next Paint)", good: "poniżej 200ms", needs: "200–500ms", poor: "powyżej 500ms" },
                  { metric: "CLS (Cumulative Layout Shift)", good: "poniżej 0.1", needs: "0.1–0.25", poor: "powyżej 0.25" },
                ].map((cwv, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-slate-900 text-sm font-medium mb-2">{cwv.metric}</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-green-100 text-green-800 rounded p-1 text-center font-medium">✓ {cwv.good}</div>
                      <div className="bg-yellow-100 text-yellow-800 rounded p-1 text-center font-medium">⚠ {cwv.needs}</div>
                      <div className="bg-red-100 text-red-800 rounded p-1 text-center font-medium">✗ {cwv.poor}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz stronę z doskonałym Technical SEO?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Budujemy strony z idealnym LCP, bezpiecznym HTTPS, schema markup i sitemap — gotowe na top 3.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Technical SEO co to jest</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-slate-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
        />
      </Layout>
    </>
  );
}
