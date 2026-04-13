import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, Search, FileText, Link2, BarChart2 } from "lucide-react";
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

export default function BlogJakPozycjonowacStrone() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Jak pozycjonować stronę? Praktyczny poradnik" },
  ];

  const steps = [
    {
      icon: Search,
      step: "1",
      title: "Badanie słów kluczowych",
      desc: "Zidentyfikuj frazy których szukają Twoi klienci. Narzędzia: Google Keyword Planner (gratis), Ahrefs, Senuto, SurferSEO. Szukaj fraz z dobrym wolumenem i niską konkurencją (KD poniżej 20).",
      tips: ["Sprawdź co rankuje konkurencja", "Zacznij od long-tail (frazy 3+ słów)", "Uwzględnij intencję wyszukiwania (informacyjna/transakcyjna)"],
    },
    {
      icon: FileText,
      step: "2",
      title: "Optymalizacja treści (on-page SEO)",
      desc: "Każda podstrona powinna targetować jedno główne słowo kluczowe. Optymalizuj tytuł H1, meta title, meta description, treść i URLe.",
      tips: ["H1 zawiera główne słowo kluczowe", "Meta title: 55-60 znaków, meta desc: 150-160 znaków", "Treść min. 500-800 słów dla stron usługowych, 1000+ dla blogów"],
    },
    {
      icon: TrendingUp,
      step: "3",
      title: "Technical SEO",
      desc: "Zadbaj o techniczne fundamenty: szybkość strony (Core Web Vitals), indeksowanie przez Google, mapa sitemap.xml, HTTPS.",
      tips: ["PageSpeed Insights: strzel do 90+ na mobile", "Sprawdź indeksowanie w Google Search Console", "Usuń zduplikowane treści i broken linki"],
    },
    {
      icon: Link2,
      step: "4",
      title: "Link building (off-page SEO)",
      desc: "Zdobywaj linki z wartościowych stron — im więcej autorytatywnych stron linuje do Ciebie, tym wyższy Twój autorytet.",
      tips: ["Artykuły gościnne na branżowych blogach", "Wpisy do katalogów branżowych", "Cyfrowy PR — wzmianki w mediach"],
    },
    {
      icon: BarChart2,
      step: "5",
      title: "Monitoring i optymalizacja",
      desc: "Śledź pozycje słów kluczowych, ruch organiczny i konwersje. Regularnie aktualizuj treści i optymalizuj na podstawie danych.",
      tips: ["Google Search Console — bezpłatne", "Senuto lub Ahrefs — pozycje słów kluczowych", "Google Analytics 4 — konwersje i zachowanie"],
    },
  ];

  const commonMistakes = [
    "Keyword stuffing — nadmierne upychanie słów kluczowych (Google penalizuje)",
    "Duplikowanie treści — kopiowanie z innych stron lub własnych podstron",
    "Brak meta tagów — puste title i description na większości stron",
    "Zignorowanie mobile — strona nieoptymalna na telefon = niższe pozycje",
    "Brak link buildingu — sama optymalizacja on-page nie wystarczy w konkurencyjnych branżach",
    "Niecierpliwość — SEO daje efekty po 3-6 miesiącach, nie tygodniach",
  ];

  const faqItems = [
    {
      question: "Jak pozycjonować stronę w Google?",
      answer:
        "Podstawowe kroki pozycjonowania strony: 1) Zbadaj słowa kluczowe na które chcesz być widoczny. 2) Zoptymalizuj treści, nagłówki i meta tagi pod te frazy. 3) Zadbaj o technical SEO (szybkość, mobile, HTTPS, indeksowanie). 4) Zdobywaj linki zewnętrzne z wartościowych stron. 5) Regularnie publikuj wartościowe treści. 6) Monitoruj efekty w Google Search Console i dostosowuj strategię.",
    },
    {
      question: "Czy mogę samodzielnie pozycjonować stronę?",
      answer:
        "Tak — podstawowe SEO możesz wdrożyć samodzielnie: Yoast SEO na WordPress (optymalizacja meta tagów), Google Search Console (monitoring), Google PageSpeed Insights (szybkość). Trudniejsze elementy wymagają wiedzy lub narzędzi: badanie słów kluczowych (Senuto, Ahrefs), link building, technical SEO. Dla konkurencyjnych branż warto zlecić SEO agencji.",
    },
    {
      question: "Ile kosztują narzędzia SEO?",
      answer:
        "Bezpłatne narzędzia SEO: Google Search Console, Google Analytics 4, Google Keyword Planner, Yoast SEO (podstawowa wersja). Płatne narzędzia: Senuto (od ok. 99 zł/mies.), Ahrefs (od ok. 400 zł/mies.), SurferSEO (od ok. 89 USD/mies.), SEMrush (od ok. 120 USD/mies.). Dla większości małych firm wystarczą bezpłatne narzędzia i Senuto.",
    },
    {
      question: "Jak sprawdzić pozycje strony w Google?",
      answer:
        "Narzędzia do sprawdzania pozycji: Google Search Console (bezpłatny, sprawdza na jakie frazy pojawia się strona), Senuto (polskie narzędzie, dokładne dane pozycji), Ahrefs (szczegółowe dane pozycji i historia), małe projekty: ręcznie przez tryb incognito. Uwaga: wyniki Google różnią się w zależności od lokalizacji i historii wyszukiwań — używaj narzędzi do obiektywnych pomiarów.",
    },
    {
      question: "Jak długo trwa pozycjonowanie strony?",
      answer:
        "Czas pozycjonowania zależy od konkurencji branży, wieku domeny i intensywności działań. Orientacyjnie: 1-3 miesiące — Google indeksuje optymalizacje, pierwsze poprawy. 3-6 miesięcy — zauważalny wzrost ruchu organicznego. 6-12 miesięcy — stabilne pozycje na główne frazy. 12-24 miesiące — dominacja w TOP 3 na konkurencyjne frazy.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Jak pozycjonować stronę w Google? Praktyczny poradnik 2025 | fotz.pl"
        description="Jak pozycjonować stronę — krok po kroku poradnik SEO 2025. Badanie słów kluczowych, optymalizacja on-page, link building i monitoring efektów. Zacznij pozycjonowanie!"
        canonical="https://fotz.pl/blog/jak-pozycjonowac-strone"

        keywords="Jak pozycjonować stronę w Google? Praktyczny poradnik 2025, Jak pozycjonować stronę w Google? Praktyczny poradnik 2025 co to jest, Jak pozycjonować stronę w Google? Praktyczny poradnik 2025 jak działa, Jak pozycjonować stronę w Google? Praktyczny poradnik 2025 definicja, Jak pozycjonować stronę w Google? Praktyczny poradnik 2025 przykłady, Jak pozycjonować stronę w Google? Praktyczny poradnik 2025 poradnik, Jak pozycjonować stronę w Google? Praktyczny poradnik 2025 przewodnik"
      />
      <ArticleSchema
        title="Jak pozycjonować stronę w Google? Praktyczny poradnik 2025"
        description="Krok po kroku jak pozycjonować stronę — słowa kluczowe, on-page SEO, technical SEO, link building i monitoring."
        datePublished="2025-02-05"
        dateModified="2025-04-01"
        url="https://fotz.pl/blog/jak-pozycjonowac-strone"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min czytania</span>
                <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> SEO praktycznie</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Jak pozycjonować stronę w Google? Poradnik krok po kroku
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Pozycjonowanie strony to nie magia — to systematyczna praca oparta na konkretnych działaniach.
                Kompletny przewodnik: od badania słów kluczowych po monitoring efektów.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-6">5 kroków pozycjonowania strony</h2>
              <div className="space-y-6 mb-8">
                {steps.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="w-4 h-4 text-blue-600" />
                            <h3 className="font-bold text-slate-900">{item.title}</h3>
                          </div>
                          <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                      <div className="ml-12 space-y-1">
                        {item.tips.map((tip, tidx) => (
                          <div key={tidx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-xs">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Najczęstsze błędy w pozycjonowaniu</h2>
              <div className="space-y-2 mb-6">
                {commonMistakes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <span className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✗</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Wolisz żeby ktoś to zrobił za Ciebie?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Prowadzimy kompleksowe pozycjonowanie od 499 zł/mies. — bezpłatny audyt SEO na start.
                </p>
                <Link to="/seo/pozycjonowanie" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Oferta pozycjonowania <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Jak pozycjonować stronę</h2>
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
          heading="Zacznij pojawiać się w TOP Google"
          subheading="Wdrożymy strategię SEO dopasowaną do Twojej branży i budżetu."
        />
      </Layout>
    </>
  );
}
