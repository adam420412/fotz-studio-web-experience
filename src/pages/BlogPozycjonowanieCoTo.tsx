import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, Search, MapPin, Globe } from "lucide-react";
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

export default function BlogPozycjonowanieCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Pozycjonowanie — co to jest i jak działa?" },
  ];

  const pozycjonowanieTypes = [
    { icon: Globe, title: "Pozycjonowanie ogólnopolskie", desc: "Optymalizacja na frazy bez wskazania lokalizacji: 'ubezpieczenia OC', 'sklep z butami'. Konkurencyjne, wymaga większego budżetu i czasu." },
    { icon: MapPin, title: "Pozycjonowanie lokalne", desc: "Frazy z miastem lub regionem: 'dentysta Wrocław', 'mechanik Poznań'. Idealne dla firm obsługujących klientów lokalnie — niższy KD, szybsze efekty." },
    { icon: Search, title: "Pozycjonowanie sklepu", desc: "SEO dla e-commerce — optymalizacja kart produktów, kategorii, opisów. Wymaga pracy na setkach/tysiącach podstron jednocześnie." },
    { icon: TrendingUp, title: "Pozycjonowanie bloga firmowego", desc: "Tworzenie artykułów odpowiadających na pytania klientów. Buduje autorytet, przynosi ruch i generuje leady z długiego ogona." },
  ];

  const faqItems = [
    {
      question: "Co to jest pozycjonowanie stron?",
      answer:
        "Pozycjonowanie stron (SEO) to proces optymalizacji witryny internetowej w celu uzyskania jak najwyższych miejsc w organicznych (bezpłatnych) wynikach wyszukiwarek internetowych, głównie Google. Obejmuje działania techniczne (szybkość strony, indeksowanie), treściowe (teksty, słowa kluczowe) i linkowanie (zdobywanie linków z innych stron). Wyższe pozycje = więcej bezpłatnego ruchu = więcej klientów.",
    },
    {
      question: "Na czym polega pozycjonowanie stron internetowych?",
      answer:
        "Pozycjonowanie składa się z kilku obszarów: 1) Audyt i analiza — identyfikacja problemów technicznych i słabych punktów. 2) Optymalizacja on-page — treści, nagłówki, meta tagi, struktura URL. 3) Technical SEO — szybkość, Core Web Vitals, mobile-first, sitemap. 4) Link building — pozyskiwanie linków zewnętrznych zwiększających autorytet domeny. 5) Content marketing — tworzenie treści targetujących słowa kluczowe.",
    },
    {
      question: "Ile kosztuje pozycjonowanie strony?",
      answer:
        "Ceny pozycjonowania zależą od zakresu i konkurencyjności branży: pozycjonowanie lokalne 500-1500 zł/mies., pozycjonowanie regionalne 1000-2500 zł/mies., pozycjonowanie ogólnopolskie 2000-10 000+ zł/mies., SEO dla sklepu 3000-15 000+ zł/mies. Ceny poniżej 300 zł/mies. zazwyczaj oznaczają nieskuteczne działania lub ryzykowne techniki black hat SEO.",
    },
    {
      question: "Jak długo trwa pozycjonowanie?",
      answer:
        "Pierwsze efekty pozycjonowania widać po 1-3 miesiącach (Google zindeksuje nowe treści, poprawi się kilka pozycji). Zauważalny wzrost ruchu organicznego następuje po 3-6 miesiącach. Osiągnięcie TOP 3 na konkurencyjne frazy może trwać 12-24 miesiące. SEO to maraton — im dłużej działasz, tym efekty są trwalsze i silniejsze.",
    },
    {
      question: "Co to jest pozycjonowanie lokalne?",
      answer:
        "Pozycjonowanie lokalne to specjalizacja SEO skupiająca się na widoczności dla zapytań z lokalizacją. Kluczowe elementy: optymalizacja Google Business Profile (wizytówka Google Maps), zbieranie opinii od klientów, spójność NAP (nazwa, adres, telefon) w katalogach, lokalne frazy kluczowe na stronie, link building z lokalnych serwisów. Szczególnie ważne dla restauracji, gabinetów, salonów, firm remontowych.",
    },
    {
      question: "Czy pozycjonowanie działa?",
      answer:
        "Tak — pozycjonowanie jest jednym z kanałów marketingowych o najwyższym ROI długoterminowo. Badania pokazują, że 68% kliknięć trafia do organicznych wyników, a TOP 3 wyniki zgarniają ponad połowę ruchu. Kluczowe jest jednak realistyczne podejście: to inwestycja na min. 6-12 miesięcy, a efekty zależą od jakości działań, konkurencji w branży i budżetu.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Pozycjonowanie — co to jest i jak działa? Poradnik SEO | fotz.pl"
        description="Pozycjonowanie co to jest — wyjaśniamy czym jest pozycjonowanie stron, jak działa, ile kosztuje i jak długo trwa. Rodzaje pozycjonowania i co wchodzi w cenę."
        canonical="https://fotz.pl/blog/pozycjonowanie-co-to"
        keywords="pozycjonowanie co to jest, co to jest pozycjonowanie, pozycjonowanie stron internetowych co to, seo co to jest, pozycjonowanie definicja, jak działa pozycjonowanie, pozycjonowanie stron www, seo dla firm"
      />
      <ArticleSchema
        title="Pozycjonowanie — co to jest i jak działa?"
        description="Czym jest pozycjonowanie stron internetowych, jak działają działania SEO, ile kosztują i czego oczekiwać."
        datePublished="2025-01-10"
        dateModified="2025-03-20"
        url="https://fotz.pl/blog/pozycjonowanie-co-to"
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
                <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> SEO / Pozycjonowanie</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pozycjonowanie — co to jest i jak działa?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Pozycjonowanie stron internetowych — co to jest i jak działa? Kompletny poradnik SEO dla właścicieli firm. Wyjaśniamy czym jest pozycjonowanie, jak przebiega i ile kosztuje.</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Pozycjonowanie a reklamy Google — jaka różnica?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    label: "Pozycjonowanie (SEO)",
                    points: ["Wyniki organiczne (bezpłatne kliknięcia)", "Efekty po 3-6 miesiącach", "Długoterminowa inwestycja", "Ruch nie znika gdy kończysz płacić", "Wyższy ROI długoterminowo"],
                    color: "green",
                  },
                  {
                    label: "Google Ads (PPC)",
                    points: ["Płacisz za każde kliknięcie", "Efekty natychmiastowe", "Koszt bieżący — ciągłe wydatki", "Ruch znika gdy przestajesz płacić", "Idealny na start i sezonowe kampanie"],
                    color: "blue",
                  },
                ].map((col, idx) => (
                  <div key={idx} className={`bg-${col.color}-50 p-5 rounded-lg border border-${col.color}-200`}>
                    <h3 className={`font-bold text-${col.color}-800 mb-3 text-sm`}>{col.label}</h3>
                    {col.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 mb-1">
                        <CheckCircle2 className={`w-3.5 h-3.5 text-${col.color}-600 flex-shrink-0 mt-0.5`} />
                        <span className="text-slate-700 text-xs">{p}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Rodzaje pozycjonowania</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {pozycjonowanieTypes.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kiedy pozycjonowanie przynosi efekty?</h2>
              <div className="space-y-3 mb-6">
                {[
                  { period: "1-3 miesiące", result: "Google indeksuje zoptymalizowane strony, pierwsze poprawy pozycji na mniej konkurencyjne frazy." },
                  { period: "3-6 miesięcy", result: "Zauważalny wzrost ruchu organicznego, coraz więcej fraz w TOP 10. Pierwsze leady z SEO." },
                  { period: "6-12 miesięcy", result: "Silna widoczność w branży, wiele fraz w TOP 3-5, regularny strumień klientów z Google." },
                  { period: "12-24 miesiące", result: "Dominacja — TOP pozycje na główne frazy, bardzo wysoki autorytet domeny, trudny do dognienia przez konkurencję." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded flex-shrink-0 h-fit">{item.period}</div>
                    <p className="text-slate-700 text-sm">{item.result}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Chcesz zacząć pozycjonowanie?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Oferta od 499 zł/mies. — bezpłatny audyt SEO, plan działania i miesięczne raporty.
                </p>
                <Link to="/seo/pozycjonowanie" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Sprawdź ofertę pozycjonowania <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Pozycjonowanie co to jest</h2>
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
          heading="Zacznij pojawiać się wyżej w Google"
          subheading="Pozycjonujemy strony firmowe, blogi i sklepy. Bezpłatna analiza i wycena."
        />
      </Layout>
    </>
  );
}
