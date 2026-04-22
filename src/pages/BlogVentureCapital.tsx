import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, DollarSign, Zap, BarChart2 } from "lucide-react";
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

export default function BlogVentureCapital() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Venture Capital — co to jest i jak działa?" },
  ];

  const vcStages = [
    { stage: "Pre-seed", amount: "50k – 500k USD", desc: "Pomysł lub wczesny prototype. Inwestują aniołowie biznesu lub pre-seed VC. Walidacja konceptu." },
    { stage: "Seed", amount: "500k – 2M USD", desc: "MVP gotowe, pierwsi klienci. Walidacja product-market fit. Klasyczna runda VC/seed." },
    { stage: "Seria A", amount: "2M – 15M USD", desc: "Udowodniony model, czas na skalowanie. Optymalizacja pozyskiwania klientów." },
    { stage: "Seria B", amount: "15M – 50M USD", desc: "Szybki wzrost, ekspansja geograficzna lub produktowa. Wejście na nowe rynki." },
    { stage: "Seria C+", amount: "50M+ USD", desc: "Przed IPO lub przejęciem. Dalsze skalowanie, często przez growth equity lub late-stage VC." },
  ];

  const faqItems = [
    {
      question: "Co to jest Venture Capital?",
      answer:
        "Venture Capital (VC) to forma inwestycji prywatnych w startupy i firmy wysokiego wzrostu w zamian za udziały w spółce. Fundusze VC zbierają kapitał od inwestorów instytucjonalnych (banki, fundusze emerytalne, korporacje) i lokują go w obiecujące startupy. VC inwestuje zazwyczaj w fazach seed/early stage do growth stage. W Polsce działają m.in. fundusze: PKO VC, PFR Ventures, Cogito Capital, Market One Capital, Inovo VC.",
    },
    {
      question: "Jak działa fundusz Venture Capital?",
      answer:
        "Fundusz VC działa na zasadzie: 1) Zbieranie kapitału (fundraising) od LP (Limited Partners — inwestorzy funduszu). 2) Inwestowanie przez 3-5 lat w startupy. 3) Wsparcie portfolio (mentoring, sieć kontaktów, follow-on rounds). 4) Exit po 5-10 latach — sprzedaż udziałów przez IPO, trade sale lub secondary. Fundusze VC działają na zasadzie power law — 1-2 startupy z portfela 20-30 firm generują większość zwrotów. Oczekiwany zwrot: 3-5x funduszu.",
    },
    {
      question: "Czym różni się Venture Capital od Private Equity?",
      answer:
        "Venture Capital inwestuje w firmy na wczesnym etapie (seed-growth), wysokie ryzyko, mniejszościowe udziały, brak przychodów lub przychody we wczesnej fazie. Private Equity (PE) inwestuje w dojrzałe firmy z udowodnionym modelem, często przejmuje kontrolę (majority stake), używa dźwigni finansowej (debt financing), celem jest poprawa efektywności i exit w 3-7 lat. Growth Equity stoi pomiędzy: inwestuje w firmy z udowodnionym modelem ale wysokim wzrostem.",
    },
    {
      question: "Jak pozyskać inwestora VC?",
      answer:
        "Kroki do pozyskania VC: 1) Przygotuj pitch deck (10-15 slajdów: problem, rozwiązanie, rynek, trakcja, team, financials). 2) Zbuduj listę VC pasujących do Twojego etapu i branży. 3) Szukaj ciepłego wprowadzenia — przez portfolio companies, mentorów, komentarze ich z LinkedIn. 4) Wyślij 1-page executive summary — nie cały deck od razu. 5) Spotkanie = 30 min pitch + Q&A. 6) Due diligence (2-8 tygodni). 7) Term sheet → negocjacje → closing. Statystyki: 1-3% złożonych propozycji dostaje finansowanie.",
    },
    {
      question: "Co to jest term sheet w VC?",
      answer:
        "Term sheet to niewiążący dokument określający kluczowe warunki inwestycji VC przed sfinalizowaniem umów. Zawiera: wycena pre-money (wartość firmy przed inwestycją), kwota inwestycji, % udziałów, prawa inwestora (veto, pro-rata, anti-dilution), liquidation preference (pierwszeństwo zwrotu kapitału przy exit), Board seats (miejsca w zarządzie), ESOP (pula opcji dla pracowników). Term sheet podpisuje się zwykle w ciągu 4-8 tygodni od pierwszego spotkania.",
    },
    {
      question: "Jakie VC fundusze działają w Polsce?",
      answer:
        "Aktywne fundusze VC w Polsce (2025): Early stage: Inovo VC (seed-A), Cogito Capital (deep tech), Alfabeat (seed), bValue (seed-A). Growth stage: Market One Capital, MCI Capital, Oaklins. Programy publiczne: PFR Ventures (przez NCBiR, BGK), NCBR Bridge Alpha. Korporacyjne: PKO VC, Łukasiewicz. Akceleratory z finansowaniem: MIT Enterprise Forum Poland, Huge Thing, Reaktor Warsaw. Całkowita wartość rynku VC w Polsce: ok. 1-1,5 mld EUR rocznie (2023-2024).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Venture Capital — co to jest i jak działa? VC dla startupów"
        description="Venture Capital co to jest — wyjaśniamy czym jest VC, jak działa fundusz venture capital, rundy inwestycyjne i jak pozyskać inwestora VC w Polsce."
        canonical="https://fotz.pl/blog/venture-capital-co-to"

        keywords="Venture Capital co to jest, Venture Capital jak działa, Venture Capital tutorial, Venture Capital przykład, czym jest Venture Capital, Venture Capital dokumentacja, Venture Capital przewodnik"
      />
      <ArticleSchema
        title="Venture Capital — co to jest i jak działa?"
        description="Czym jest Venture Capital, jak działa fundusz VC, rundy inwestycyjne (seed, seria A/B/C), różnica VC vs PE i jak pozyskać inwestora VC w Polsce."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/venture-capital-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Finansowanie startupów</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Venture Capital — co to jest i jak działa finansowanie startupów?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Venture Capital to inwestycje w obiecujące startupy w zamian za udziały. Rundy finansowania,
                jak działa fundusz VC i jak pozyskać inwestora w Polsce.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rundy finansowania VC</h2>
              <div className="space-y-3 mb-6">
                {vcStages.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="min-w-[90px]">
                      <span className="font-bold text-blue-600 text-sm">{s.stage}</span>
                      <p className="text-xs text-slate-500 mt-0.5">{s.amount}</p>
                    </div>
                    <p className="text-slate-700 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">VC vs Angel vs PE — porównanie</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Inwestor</th>
                      <th className="text-left p-3 border border-slate-700">Etap</th>
                      <th className="text-left p-3 border border-slate-700">Kwota</th>
                      <th className="text-left p-3 border border-slate-700">Charakter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Anioł Biznesu", stage: "Pre-seed / Seed", amount: "50k–500k zł", char: "Indywidualny, aktywny mentoring" },
                      { type: "Venture Capital", stage: "Seed → Growth", amount: "1M–50M+", char: "Fundusz, board seat, sieć" },
                      { type: "Private Equity", stage: "Dojrzałe firmy", amount: "10M–miliardy", char: "Kontrola, dźwignia finansowa" },
                      { type: "Corporate VC", stage: "Różny", amount: "Różna", char: "Strategic fit, dostęp do rynku" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-blue-600 text-xs">{row.type}</td>
                        <td className="p-3 border border-slate-200 text-slate-700 text-xs">{row.stage}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.amount}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.char}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Przygotowujesz startup do rundy VC?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Silna strona internetowa, analytics i obecność online to sygnały traction, które inwestorzy weryfikują.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Venture Capital co to jest</h2>
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
