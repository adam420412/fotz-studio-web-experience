import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Zap, Eye, MousePointer, TrendingUp } from "lucide-react";
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

export default function BlogCoreWebVitals() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Core Web Vitals — co to jest i jak poprawić wyniki?" },
  ];

  const metrics = [
    {
      icon: Zap,
      name: "LCP (Largest Contentful Paint)",
      desc: "Czas ładowania największego elementu widocznego na ekranie — zdjęcia hero, nagłówka H1 lub bloku tekstu.",
      good: "≤ 2.5 sekundy",
      needs: "2.5–4 sekundy",
      bad: "> 4 sekundy",
      tips: ["Optymalizuj zdjęcia hero (WebP, kompresja)", "Użyj CDN do serwowania zasobów", "Przenieś krytyczny CSS do inline"],
    },
    {
      icon: MousePointer,
      name: "INP (Interaction to Next Paint)",
      desc: "Czas odpowiedzi strony na interakcje użytkownika — kliknięcia, wpisywanie, tapowanie. Zastąpił FID od 2024.",
      good: "≤ 200 ms",
      needs: "200–500 ms",
      bad: "> 500 ms",
      tips: ["Redukuj długie zadania JavaScript", "Dziel kod na mniejsze chunki (code splitting)", "Optymalizuj event handlery"],
    },
    {
      icon: Eye,
      name: "CLS (Cumulative Layout Shift)",
      desc: "Miara niestabilności wizualnej — jak bardzo elementy strony 'skaczą' podczas ładowania (np. reklamy przesuwające treść).",
      good: "≤ 0.1",
      needs: "0.1–0.25",
      bad: "> 0.25",
      tips: ["Zawsze definiuj wymiary (width + height) obrazów", "Rezerwuj przestrzeń dla reklam i embeds", "Unikaj wstrzykiwania treści nad istniejącą"],
    },
  ];

  const faqItems = [
    {
      question: "Co to są Core Web Vitals?",
      answer:
        "Core Web Vitals to zestaw metryk Google mierzących doświadczenie użytkownika na stronie internetowej. Składają się z trzech wskaźników: LCP (Largest Contentful Paint) — szybkość ładowania, INP (Interaction to Next Paint) — responsywność na interakcje, CLS (Cumulative Layout Shift) — stabilność wizualna. Od 2021 roku Core Web Vitals są czynnikiem rankingowym Google (Page Experience Update).",
    },
    {
      question: "Jak Core Web Vitals wpływają na SEO?",
      answer:
        "Core Web Vitals są oficjalnym czynnikiem rankingowym Google od 2021 roku. Strony z dobrymi wynikami CWV mogą zyskiwać przewagę w SERP nad stronami z podobną treścią ale słabymi wynikami technicznymi. Wpływ jest zwłaszcza widoczny przy równorzędnych stronach — wtedy UX jest 'tiebreakerem'. Google Page Experience Update objął zarówno mobile jak i desktop (desktop od 2022).",
    },
    {
      question: "Jak sprawdzić Core Web Vitals swojej strony?",
      answer:
        "Narzędzia do sprawdzania CWV: Google PageSpeed Insights (pagespeed.web.dev) — bezpłatne, dane z CrUX (rzeczywiste dane użytkowników) i Lighthouse (laboratoryjne). Google Search Console → zakładka 'Wrażenia' → Core Web Vitals — dane z prawdziwych sesji użytkowników dla całej witryny. Web.dev Measure — szczegółowy raport. Chrome DevTools → Lighthouse — lokalne testy laboratoryjne.",
    },
    {
      question: "Dlaczego LCP jest wysoki i jak to naprawić?",
      answer:
        "Najczęstsze przyczyny wysokiego LCP: zbyt duże zdjęcia (bez kompresji, nie WebP), brak preładowania (preload) krytycznych zasobów, wolny hosting (Time to First Byte powyżej 600ms), blokujące JavaScript i CSS w <head>, brak CDN. Rozwiązania: konwertuj obrazy do WebP, dodaj fetchpriority='high' do obrazu hero, użyj CDN, optymalizuj TTFB przez lepszy hosting lub cache.",
    },
    {
      question: "Czym jest CLS i jak go zmniejszyć?",
      answer:
        "CLS (Cumulative Layout Shift) mierzy ile 'przeskoków' elementów strony dzieje się podczas ładowania — to frustrujące gdy czytasz tekst a strona nagle przesuwa wszystko w dół przez załadowanie reklamy. Jak zmniejszyć CLS: zawsze dodawaj atrybuty width i height do tagów img, rezerwuj miejsce dla reklam (min-height), nie wstrzykuj treści dynamicznie nad istniejącą zawartością, ustaw size dla fontów (font-display: swap).",
    },
    {
      question: "Czy WordPress wpływa negatywnie na Core Web Vitals?",
      answer:
        "WordPress sam w sobie nie jest problemem — problem to zbyt wiele wtyczek, ciężkie motywy (Divi, Avada bez optymalizacji) i nieoptymalizowane obrazy. Na WordPress możesz osiągnąć doskonałe CWV przez: wtyczkę WP Rocket lub LiteSpeed Cache (cache + optymalizacja CSS/JS), Imagify lub ShortPixel (kompresja obrazów), lekki motyw (Astra, GeneratePress), usunięcie zbędnych wtyczek. Wyniki zależą od konfiguracji, nie od samego WordPressa.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Core Web Vitals — co to jest i jak poprawić LCP, INP, CLS?"
        description="Core Web Vitals co to jest — wyjaśniamy LCP, INP i CLS, jak je sprawdzić w PageSpeed Insights i Search Console oraz jak poprawić wyniki dla lepszego SEO."
        canonical="https://fotz.pl/blog/core-web-vitals-co-to"

        keywords="Core Web Vitals co to jest, Core Web Vitals definicja, czym jest Core Web Vitals, Core Web Vitals przykłady, jak działa Core Web Vitals, Core Web Vitals znaczenie, Core Web Vitals przewodnik"
      />
      <ArticleSchema
        title="Core Web Vitals — co to jest i jak poprawić wyniki?"
        description="Czym są Core Web Vitals Google, jak działają LCP, INP i CLS, jak je mierzyć i optymalizować dla lepszych wyników SEO."
        datePublished="2025-04-02"
        dateModified="2025-04-08"
        url="https://fotz.pl/blog/core-web-vitals-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Wydajność i SEO</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Core Web Vitals — co to jest i jak poprawić wyniki?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Core Web Vitals to metryki Google mierzące doświadczenie użytkownika — wpływają na SEO od 2021.
                LCP, INP i CLS: co mierzą, ile powinny wynosić i jak je poprawić.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-6">Trzy metryki Core Web Vitals</h2>
              <div className="space-y-6 mb-6">
                {metrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-slate-900">{metric.name}</h3>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">{metric.desc}</p>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="bg-green-100 rounded p-2 text-center">
                          <p className="text-green-700 font-bold text-xs">Dobry</p>
                          <p className="text-green-800 text-xs">{metric.good}</p>
                        </div>
                        <div className="bg-yellow-100 rounded p-2 text-center">
                          <p className="text-yellow-700 font-bold text-xs">Wymaga poprawy</p>
                          <p className="text-yellow-800 text-xs">{metric.needs}</p>
                        </div>
                        <div className="bg-red-100 rounded p-2 text-center">
                          <p className="text-red-700 font-bold text-xs">Słaby</p>
                          <p className="text-red-800 text-xs">{metric.bad}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {metric.tips.map((tip, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                            {tip}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Masz słabe wyniki Core Web Vitals?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Przeprowadzimy audyt techniczny i poprawimy LCP, INP i CLS na Twojej stronie.
                </p>
                <Link to="/uslugi/optymalizacja-strony-internetowej" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Optymalizacja strony — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Core Web Vitals co to jest</h2>
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
          heading="Popraw Core Web Vitals i wspiął się w Google"
          subheading="Audyt techniczny i optymalizacja szybkości strony — LCP, INP, CLS."
        />
      </Layout>
    </>
  );
}
