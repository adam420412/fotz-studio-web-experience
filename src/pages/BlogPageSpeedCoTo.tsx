import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Zap, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";
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

export default function BlogPageSpeedCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Page Speed — co to jest i jak poprawić szybkość strony?" },
  ];

  const coreWebVitals = [
    { metric: "LCP (Largest Contentful Paint)", good: "< 2.5s", bad: "> 4.0s", desc: "Czas ładowania największego elementu widocznego w oknie przeglądarki (hero image, nagłówek H1). Najważniejsza metryka." },
    { metric: "INP (Interaction to Next Paint)", good: "< 200ms", bad: "> 500ms", desc: "Responsywność na interakcje użytkownika (kliknięcia, tapnięcia). Zastąpił FID od marca 2024." },
    { metric: "CLS (Cumulative Layout Shift)", good: "< 0.1", bad: "> 0.25", desc: "Stabilność wizualna strony — jak bardzo elementy 'skaczą' podczas ładowania. Frustrujące dla użytkowników." },
  ];

  const optimizations = [
    { fix: "Kompresja obrazów", impact: "Wysoki", desc: "Używaj WebP zamiast JPEG/PNG, kompresuj przez TinyPNG lub ShortPixel, dodaj lazy loading." },
    { fix: "Browser Caching", impact: "Wysoki", desc: "Ustaw nagłówki Cache-Control — statyczne pliki (CSS, JS, obrazy) są przechowywane lokalnie przy kolejnych wizytach." },
    { fix: "Minifikacja CSS/JS/HTML", impact: "Średni", desc: "Usuń zbędne spacje, komentarze i znaki z kodu. Webpack, Vite i inne bundlery robią to automatycznie." },
    { fix: "CDN (Content Delivery Network)", impact: "Wysoki", desc: "Serwuj pliki z serwera geograficznie bliżej użytkownika. Cloudflare ma darmowy plan." },
    { fix: "Defer/Async JavaScript", impact: "Wysoki", desc: "Skrypty które nie są krytyczne do renderowania powinny być ładowane asynchronicznie lub odroczone." },
    { fix: "Hosting i serwer", impact: "Krytyczny", desc: "Tani hosting współdzielony = wolny TTFB. Przenieś na VPS, SSD hosting lub sprawdzony managed WordPress hosting." },
  ];

  const faqItems = [
    {
      question: "Co to jest Page Speed i dlaczego jest ważny?",
      answer: "Page Speed (szybkość strony) to czas ładowania strony internetowej mierzony od momentu kliknięcia linku do pełnego wyświetlenia zawartości. Dlaczego jest krytyczny: SEO — Google używa Page Speed jako czynnik rankingowy od 2010 (desktop) i 2018 (mobile), a Core Web Vitals weszły do algorytmu w 2021. Konwersja — Amazon: każda sekunda opóźnienia = 1% mniej konwersji. Google: 53% użytkowników mobilnych opuszcza stronę jeśli nie załaduje się w 3 sekundy. UX — wolna strona frustruje użytkowników i zwiększa bounce rate. Cel: LCP poniżej 2.5 sekundy, CLS poniżej 0.1, INP poniżej 200ms.",
    },
    {
      question: "Jak sprawdzić szybkość strony?",
      answer: "Narzędzia do testowania Page Speed: 1) Google PageSpeed Insights (pagespeed.web.dev) — ocena 0-100 dla mobile i desktop, Core Web Vitals, konkretne zalecenia. 2) Google Search Console → Core Web Vitals — realne dane z przeglądarek użytkowników (RUM). 3) GTmetrix — szczegółowy raport z wodospadem ładowania, porównanie historyczne. 4) WebPageTest (webpagetest.org) — testy z różnych lokalizacji i urządzeń, filmik ładowania. 5) Lighthouse (Chrome DevTools F12) — audyt lokalny dla dowolnej strony. 6) Ahrefs Site Audit — skanuje całą witrynę i wykrywa wolno ładujące się strony. Testuj zawsze na: mobile (priorytet) i desktop, z różnych lokalizacji.",
    },
    {
      question: "Co to są Core Web Vitals?",
      answer: "Core Web Vitals to zestaw trzech metryk zdefiniowanych przez Google do pomiaru doświadczenia użytkownika strony: LCP (Largest Contentful Paint) — czas ładowania głównego elementu treści, cel: poniżej 2.5s. INP (Interaction to Next Paint) — responsywność na kliknięcia, cel: poniżej 200ms (zastąpił FID w marcu 2024). CLS (Cumulative Layout Shift) — stabilność wizualna (skakanie elementów), cel: poniżej 0.1. Google używa Core Web Vitals jako sygnał rankingowy od maja 2021 (Page Experience Update). Dane RUM (Real User Monitoring) z Chrome User Experience Report mają pierwszeństwo przed danymi z laboratorium (Lighthouse).",
    },
    {
      question: "Jak poprawić LCP (Largest Contentful Paint)?",
      answer: "Metody poprawy LCP: 1) Optymalizuj hero image — WebP format, kompresja, size: tylko tyle px ile widać, preload: <link rel='preload' as='image'>. 2) Usuń render-blocking resources — CSS i JS blokujące renderowanie pierwszego ekranu. 3) Szybki hosting/TTFB (Time to First Byte poniżej 200ms) — TTFB to fundament LCP. 4) Użyj CDN dla statycznych zasobów. 5) Lazy load obrazów poniżej the fold. 6) Unikaj 'oversized images' — obraz 2000px wyświetlany jako 400px niepotrzebnie spowalnia. 7) Minifikuj CSS. Najczęstszy winowajca złego LCP: duży, nieskompresowany hero image bez preloadu + wolny hosting.",
    },
    {
      question: "Dlaczego moja strona WordPress jest wolna?",
      answer: "Najczęstsze przyczyny wolnego WordPress: 1) Tani, współdzielony hosting z małą mocą obliczeniową i wolnym TTFB. Rozwiązanie: przejdź na VPS lub managed WordPress (Kinsta, WP Engine, Cloudways). 2) Nieskompresowane obrazy — zainstaluj ShortPixel lub Smush + WebP. 3) Zbyt wiele pluginów — każdy plugin dodaje żądania HTTP i kod JS/CSS. Audytuj i usuń zbędne. 4) Brak cache — użyj WP Rocket, W3 Total Cache lub LiteSpeed Cache. 5) Nieoptymalizowana baza danych — czyść automatycznie lub przez WP-Optimize. 6) Zbyt duże theme — bloatware themes z setkami JS/CSS. Lekkie alternatywy: GeneratePress, Astra, Kadence. 7) Brak CDN — dodaj Cloudflare (darmowy) lub BunnyCDN.",
    },
    {
      question: "Jaki wpływ ma szybkość strony na SEO?",
      answer: "Wpływ Page Speed na SEO: Bezpośredni: Core Web Vitals są czynnikiem rankingowym — strony z 'Good' CWV mogą dostać przewagę w SERP (choć Google mówi, że efekt jest umiarkowany). Pośredni: 1) Wolna strona → wyższy bounce rate → mniej zaangażowania → Google widzi użytkowników wracających do SERP (pogarsza ranking). 2) Crawl budget — GoogleBot ma ograniczony czas na crawlowanie. Wolna strona = mniej stron zaindeksowanych. 3) Mobilna wersja — Google używa mobile-first indexing. Wolna wersja mobilna bezpośrednio szkodzi rankingom. 4) Konwersja — szybsza strona = więcej celów, form, zapisów. Dane: Walmart stwierdził że każda sekunda szybciej = 2% wzrost konwersji.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Page Speed — co to jest i jak poprawić szybkość strony? | fotz.pl"
        description="Page Speed co to jest — wyjaśniamy czym jest szybkość strony, Core Web Vitals (LCP, CLS, INP), jak testować i jak poprawić szybkość dla SEO."
        canonical="https://fotz.pl/blog/page-speed-co-to"

        keywords="Page Speed co to jest, Page Speed definicja, czym jest Page Speed, Page Speed przykłady, jak działa Page Speed, Page Speed znaczenie, Page Speed przewodnik"
      />
      <ArticleSchema
        title="Page Speed — co to jest i jak poprawić szybkość strony?"
        description="Czym jest Page Speed, Core Web Vitals (LCP, INP, CLS), jak sprawdzać szybkość, jak poprawiać i dlaczego Page Speed jest kluczowy dla SEO i konwersji."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/page-speed-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> SEO techniczne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Page Speed — co to jest i jak poprawić szybkość strony dla SEO?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Szybkość strony wpływa na SEO, konwersję i doświadczenie użytkownika.
                53% użytkowników mobilnych opuszcza stronę jeśli nie ładuje się w 3 sekundy. Jak to naprawić?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Core Web Vitals — metryki szybkości Google</h2>
              <div className="space-y-3 mb-6">
                {coreWebVitals.map((cwv, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm">{cwv.metric}</span>
                      <div className="flex gap-2">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">Dobry: {cwv.good}</span>
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded font-medium">Słaby: {cwv.bad}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs">{cwv.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak poprawić Page Speed — najważniejsze optymalizacje</h2>
              <div className="space-y-3 mb-6">
                {optimizations.map((o, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="font-bold text-slate-900 text-sm">{o.fix}</p>
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${o.impact === "Krytyczny" ? "bg-red-100 text-red-700" : o.impact === "Wysoki" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>Impact: {o.impact}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{o.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Twoja strona jest wolna?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy szybkie strony z Core Web Vitals na zielono — optymalizacja techniczna i hosting.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie szybkich stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Page Speed co to jest</h2>
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
