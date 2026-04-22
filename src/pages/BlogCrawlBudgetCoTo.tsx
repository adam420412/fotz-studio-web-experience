import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Bot, Search, AlertCircle, CheckCircle2 } from "lucide-react";
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

export default function BlogCrawlBudgetCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Crawl Budget — co to jest i jak optymalizować dla SEO?" },
  ];

  const crawlWasters = [
    { issue: "Duplicate content", impact: "Wysoki", desc: "Wiele URL z tą samą treścią (z/bez www, http/https, parametry URL) — bot crawluje to samo wielokrotnie." },
    { issue: "Błędna konfiguracja parametrów URL", impact: "Wysoki", desc: "Filtry, sortowania, sesje tworzą dziesiątki wariantów tego samego URL bez wartości dla SEO." },
    { issue: "Strony z noindex w sitemapie", impact: "Średni", desc: "Zgłoszone strony noindex są crawlowane przez Google ale nie indeksowane — marnowanie budżetu." },
    { issue: "Thin content / strony niskiej jakości", impact: "Średni", desc: "Google może depriorytetyzować crawlowanie domeny jeśli dużo stron ma niską wartość." },
    { issue: "Powolny TTFB (Time to First Byte)", impact: "Wysoki", desc: "Wolny serwer spowalnia GoogleBot — crawluje mniej stron w danym czasie." },
    { issue: "Infinite scroll bez paginacji", impact: "Wysoki", desc: "Google nie może crawlować treści ładowanej przez JavaScript bez odpowiedniej implementacji paginacji." },
    { issue: "Soft 404 (strony bez treści)", impact: "Średni", desc: "Strony które zwracają 200 OK ale mają minimalną treść — marnują crawl budget bez wartości." },
  ];

  const faqItems = [
    {
      question: "Co to jest Crawl Budget?",
      answer: "Crawl Budget (budżet crawlowania) to liczba stron które GoogleBot (lub inny bot wyszukiwarki) crawluje na Twojej witrynie w danym czasie. Google przydziela każdej domenie określoną liczbę stron do crawlowania — nie crawluje całej sieci jednocześnie. Crawl Budget zależy od dwóch czynników: Crawl Rate Limit — maksymalna szybkość crawlowania bez przeciążenia serwera. Crawl Demand — jak często Google chce crawlować strony na podstawie popularności i świeżości. Crawl Budget ma znaczenie głównie dla: dużych stron (100k+ URL), stron z często zmieniającą się treścią, stron ze skomplikowaną strukturą URL. Małe strony (do 1000 URL) praktycznie nie muszą się tym martwić.",
    },
    {
      question: "Jak Crawl Budget wpływa na SEO?",
      answer: "Wpływ Crawl Budget na SEO jest pośredni ale ważny dla dużych stron: Nowe strony mogą być długo nieindeksowane jeśli Google odkryje je powoli. Zaktualizowane treści mogą nie pojawić się w wynikach przez długi czas jeśli bot nie wraca. Ważne strony mogą nie być crawlowane jeśli bot 'przepali' budżet na nieistotne URL (parametry, duplikaty). Google potwierdza: dla stron powyżej 1 mln URL Crawl Budget jest ważną kwestią techniczną. John Mueller z Google: 'Jeśli masz mało stron, Crawl Budget nie jest Twoim problemem. Zadbaj raczej o jakość treści.'",
    },
    {
      question: "Jak sprawdzić Crawl Budget strony?",
      answer: "Narzędzia do analizy Crawl Budget: 1) Google Search Console → Ustawienia → Statystyki crawlowania — shows: liczba stron crawlowanych dziennie, TTFB (czas odpowiedzi serwera), typy odpowiedzi (200, 404, 301). 2) Logi serwera (access logs) — najbardziej precyzyjne. Filtruj po User-Agent: Googlebot, analizuj przez Screaming Frog Log Analyzer lub GoAccess. 3) Ahrefs Site Audit → Crawlability → znajdź strony które bot może mieć problem crawlować. 4) Screaming Frog → crawl i sprawdź ile URL masz z duplikatami i błędami. Sygnały problemu: nowe strony długo nie indeksowane, GSC: 'Discovered — currently not indexed' dla dużej liczby URL.",
    },
    {
      question: "Jak optymalizować Crawl Budget?",
      answer: "Techniczne optymalizacje Crawl Budget: 1) Blokuj nieważne URL w robots.txt — parametry URL, foldery z zasobami (CSS, JS, images jeśli już nieindeksowane). 2) Kanonizuj duplikaty — canonical tag dla wszystkich wariantów URL (z www, bez www, z parametrami). 3) Napraw linki 404 i 301 — łańcuchy przekierowań i broken links marnują budżet. 4) Popraw szybkość serwera — TTFB poniżej 200ms pozwala GoogleBotowi crawlować więcej stron. 5) Usuń lub popraw thin content — strony niskiej jakości depriorytetyzują crawlowanie całej domeny. 6) Sprawdź XML Sitemap — usuń ze sitemapa strony noindex, 404 i niekanoniczne. 7) Pagination dla infinite scroll — implementuj rel='next'/rel='prev' lub load more z hashami.",
    },
    {
      question: "Jaka jest różnica między Crawl Budget a Crawl Rate?",
      answer: "Crawl Rate (częstotliwość crawlowania) — jak szybko GoogleBot przeszukuje strony, wyrażona jako zapytania na sekundę. Google automatycznie dostosowuje Crawl Rate by nie przeciążać serwera. Możesz zmniejszyć (nie zwiększyć) Crawl Rate w Google Search Console → Ustawienia → Szybkość pobierania. Crawl Budget — łączna liczba URL crawlowanych w danym przedziale czasu (np. dziennie). Jest iloczynem Crawl Rate i dostępności serwera. Crawl Demand — częstość z jaką Google chce powracać do URL (zależy od popularności i świeżości treści). Popularne strony są crawlowane częściej. Relacja: wysoki Crawl Rate + wysoki Crawl Demand = duży Crawl Budget. Nowe strony zaczynają z niskim Crawl Budget — rośnie wraz z autoritetem domeny.",
    },
    {
      question: "Czy Crawl Budget jest ważny dla małych stron?",
      answer: "Dla małych stron (do kilku tysięcy URL) Crawl Budget praktycznie nie jest problemem — Google i tak crawluje je wszystkie. Google potwierdza: jeśli masz mało stron, skup się na jakości treści i linkowaniu, nie na optymalizacji Crawl Budget. Kiedy Crawl Budget staje się ważny: strony e-commerce z dużą liczbą filtrów i wariantów produktów (100k+ URL). Portale z dużą liczbą artykułów (setki tysięcy). Strony z dużą liczbą parametrów URL generowanych dynamicznie. Strony po migracji — duże zmiany URL mogą dezorientować GoogleBot i spowalniać indeksowanie. Dla tych scenariuszy: poprawna konfiguracja robots.txt, canonical tags i paginacji jest krytyczna.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Crawl Budget — co to jest i jak optymalizować dla SEO? | fotz.pl"
        description="Crawl Budget co to jest — wyjaśniamy czym jest budżet crawlowania Google, jak go sprawdzić, co marnuje crawl budget i jak optymalizować duże strony."
        canonical="https://fotz.pl/blog/crawl-budget-co-to"

        keywords="Crawl Budget co to jest, Crawl Budget definicja, czym jest Crawl Budget, Crawl Budget w marketingu, Crawl Budget przykłady, jak działa Crawl Budget, Crawl Budget strategia"
      />
      <ArticleSchema
        title="Crawl Budget — co to jest i jak optymalizować dla SEO?"
        description="Czym jest Crawl Budget, jak wpływa na SEO, co marnuje budżet crawlowania i jak optymalizować dla dużych stron e-commerce i portali."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/crawl-budget-co-to"
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
                <span className="flex items-center gap-1"><Bot className="w-4 h-4" /> SEO techniczne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Crawl Budget — co to jest i jak optymalizować dla SEO?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Crawl Budget to liczba stron crawlowanych przez GoogleBot w danym czasie.
                Dla dużych stron e-commerce i portali to krytyczny aspekt technicznego SEO.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Co marnuje Crawl Budget?</h2>
              <div className="space-y-3 mb-6">
                {crawlWasters.map((w, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="font-bold text-slate-900 text-sm">{w.issue}</p>
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${w.impact === "Wysoki" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>{w.impact}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Search className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Masz dużą stronę z problemami indeksowania?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Audyt SEO techniczny — analizujemy crawl budget, indeksowanie i optymalizujemy strukturę URL.
                </p>
                <Link to="/uslugi/audyt-seo" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Audyt SEO techniczny — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Crawl Budget co to jest</h2>
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
