import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, User, BookOpen, DollarSign } from "lucide-react";
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

export default function BlogCopywritingCennik() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Copywriting cennik — ile kosztują teksty?" },
  ];

  const pricingData = [
    { type: "Artykuł blogowy (1000-1500 słów)", junior: "100-200 zł", mid: "200-500 zł", senior: "400-1000 zł" },
    { type: "Artykuł SEO (2000-3000 słów)", junior: "200-400 zł", mid: "400-800 zł", senior: "600-1500 zł" },
    { type: "Strona główna / landing page", junior: "300-600 zł", mid: "600-2000 zł", senior: "1500-5000 zł" },
    { type: "Podstrona (O nas, Usługi, itd.)", junior: "150-300 zł", mid: "300-800 zł", senior: "500-2000 zł" },
    { type: "Newsletter / email", junior: "80-150 zł", mid: "150-400 zł", senior: "300-1000 zł" },
    { type: "Post na social media", junior: "30-80 zł", mid: "80-200 zł", senior: "150-500 zł" },
    { type: "Opis produktu (e-commerce)", junior: "30-80 zł", mid: "80-200 zł", senior: "150-400 zł" },
    { type: "Case study (pełny)", junior: "400-800 zł", mid: "800-2000 zł", senior: "1500-5000 zł" },
    { type: "White paper / e-book (20 str.)", junior: "800-2000 zł", mid: "1500-4000 zł", senior: "3000-10 000 zł" },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje tekst na stronę internetową?",
      answer:
        "Copywriting na stronę internetową kosztuje od 150 do 5000 zł za podstronę w zależności od zakresu. Strona główna (hero, sekcje, CTA): 600-3000 zł. Zwykła podstrona usług: 300-1500 zł. Landing page sprzedażowy: 800-5000 zł. Cena zależy od doświadczenia copywritera i złożoności tekstu.",
    },
    {
      question: "Jak rozliczają się copywriterzy?",
      answer:
        "Trzy modele rozliczeń: za słowo (0,10-1,50 zł/słowo), za stronę znormalizowaną (1800 znaków ze spacjami, 15-200 zł), za projekt (fixed fee za konkretny tekst). Dla stałej współpracy: abonament miesięczny (1000-5000 zł/mies.). Agencje marketingowe zwykle wyceniają za projekt.",
    },
    {
      question: "Co wpływa na cenę copywritingu?",
      answer:
        "Główne czynniki cenowe: doświadczenie copywritera (junior vs senior), specjalizacja branżowa (medycyna/prawo/finanse drożej), wymagany research, złożoność perswazji, czas dostawy (ekspres drożej), korekty (ile rund), format (tekst vs landing page z kampanią).",
    },
    {
      question: "Ile kosztuje miesięczny content plan?",
      answer:
        "Miesięczny pakiet contentu (bloga): 4 artykuły miesięcznie to koszt 800-3000 zł/mies. 8 artykułów: 1500-5000 zł/mies. W agencjach content marketing często rozliczany jest abonamentowo łącznie ze strategią i dystrybucją: 2000-8000 zł/mies.",
    },
    {
      question: "Czy copywriting w agencji jest droższy niż freelancer?",
      answer:
        "Agencja zazwyczaj jest droższa (20-50%) ale oferuje: strategię treści, edytora/korektora, gwarancję terminów, zastępstwo, raportowanie. Freelancer jest tańszy ale wymaga więcej zarządzania. Dla jednorazowych zleceń — freelancer. Dla stałej współpracy — agencja lub stały freelancer.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Copywriting cennik 2025 — ile kosztują teksty? | fotz.pl"
        description="Copywriting cennik — aktualne stawki za artykuły, landing pages, opisy produktów, emaile. Ile zarabia copywriter i kiedy opłaca się zlecić teksty. Sprawdź!"
        canonical="https://fotz.pl/blog/copywriting-cennik"

        keywords="Copywriting cennik 2025, Copywriting cennik 2025 co to jest, Copywriting cennik 2025 jak działa, Copywriting cennik 2025 definicja, Copywriting cennik 2025 przykłady, Copywriting cennik 2025 poradnik, Copywriting cennik 2025 przewodnik"
      />
      <ArticleSchema
        title="Copywriting cennik 2025 — ile kosztują teksty marketingowe?"
        description="Aktualne stawki copywriterskie — artykuły, landing pages, emaile, opisy produktów. Ile kosztuje copywriting w agencji vs freelancer."
        datePublished="2025-01-01"
        dateModified="2025-03-01"
        url="https://fotz.pl/blog/copywriting-cennik"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> Zespół fotz.pl</span>
                <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Cennik</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Copywriting cennik 2025 — ile kosztują teksty marketingowe?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Orientacyjne stawki za copywriting w Polsce na 2025 rok. Artykuły, landing pages, opisy produktów,
                emaile — ile to kosztuje i od czego zależy cena.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing table */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-6">Cennik copywritingu — tabela stawek 2025</h2>
              <p className="text-slate-600 mb-6">
                Stawki orientacyjne. Junior = 0-2 lata doświadczenia, Mid = 2-5 lat, Senior = 5+ lat lub specjalizacja branżowa.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Typ tekstu</th>
                      <th className="text-left p-3 border border-slate-700">Junior</th>
                      <th className="text-left p-3 border border-slate-700">Mid</th>
                      <th className="text-left p-3 border border-slate-700 bg-blue-700">Senior</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-medium text-slate-800">{row.type}</td>
                        <td className="p-3 border border-slate-200 text-slate-600">{row.junior}</td>
                        <td className="p-3 border border-slate-200 text-slate-600">{row.mid}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 font-medium">{row.senior}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm italic mb-8">
                Ceny netto. Stawki orientacyjne — rzeczywiste ceny mogą się różnić w zależności od branży, zakresu researchu i czasu realizacji.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Model rozliczeń — za słowo, stronę czy projekt?</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { title: "Za słowo", range: "0,10 – 1,50 zł/słowo", desc: "Prosty do wyliczenia. Popularny u freelancerów. Przy długich tekstach może być korzystny." },
                  { title: "Za stronę norm.", range: "15 – 200 zł/1800 znaków", desc: "Standard w branży wydawniczej i SEO. 1800 znaków ze spacjami = 1 strona znormalizowana." },
                  { title: "Za projekt", range: "Fixed fee", desc: "Agencje i copywriterzy wyceniają całe zlecenie. Pewność co do budżetu, najwygodniejszy model." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <div className="text-blue-600 font-semibold text-sm mb-2">{item.range}</div>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Co wpływa na cenę copywritingu?</h2>
              <div className="space-y-2 mb-6">
                {[
                  "Doświadczenie i portfolio copywritera",
                  "Specjalizacja branżowa (medycyna, prawo, finanse droższe)",
                  "Wymagany research i głębokość tematu",
                  "Czas realizacji (express = +30-50%)",
                  "Liczba dozwolonych korekt",
                  "Zakres projektu (single tekst vs. abonament)",
                  "Kraj i język (polskie vs. angielskie teksty)",
                  "Prawa majątkowe i autorskie",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kiedy warto zlecić copywriting agencji?</h2>
              <p className="text-slate-700 mb-4">
                Agencja marketingowa oferuje copywriting jako część szerszej usługi — strategia treści, SEO, dystrybucja, raportowanie.
                To ma sens gdy potrzebujesz stałej produkcji contentu, nie chcesz zarządzać freelancerami lub zależy Ci na spójności.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Zamów wycenę copywritingu</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy teksty które sprzedają — strony, artykuły SEO, reklamy, emaile. Sprawdź naszą ofertę.
                </p>
                <Link to="/kontakt" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Zapytaj o wycenę <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Copywriting cennik</h2>
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
          heading="Potrzebujesz tekstów dla firmy?"
          subheading="Piszemy copy które sprzedaje. Zapytaj o wycenę konkretnych tekstów."
        />
      </Layout>
    </>
  );
}
