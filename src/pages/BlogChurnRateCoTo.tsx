import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingDown, AlertTriangle, BarChart2, CheckCircle2 } from "lucide-react";
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

export default function BlogChurnRateCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Churn Rate — co to jest i jak go zmniejszyc?" },
  ];

  const churnTypes = [
    { type: "Customer Churn Rate", desc: "Procent klientow ktory odeszli w danym okresie. Wzor: churned customers / total customers at start x 100%.", color: "bg-red-50 border-red-200 text-red-800" },
    { type: "Revenue Churn Rate (MRR Churn)", desc: "Procent utraconych przychodow z subskrypcji. Wazniejszy niz customer churn — jeden duzy klient to duzy MRR.", color: "bg-orange-50 border-orange-200 text-orange-800" },
    { type: "Gross Revenue Retention (GRR)", desc: "Procent przychodu zachowanego bez uwzglednienia ekspansji. Dobry GRR dla SaaS: powyzej 85%.", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
    { type: "Net Revenue Retention (NRR)", desc: "Przychod zachowany + ekspansja - churn. NRR powyzej 100% = negative churn — idealna sytuacja.", color: "bg-green-50 border-green-200 text-green-800" },
  ];

  const faqItems = [
    {
      question: "Co to jest Churn Rate?",
      answer:
        "Churn Rate (wskaznik rezygnacji) to procent klientow lub przychodow utraconych w danym okresie. Jest to fundamentalna metryka dla firm subskrypcyjnych i SaaS. Wzor na miesieczny churn: Churn Rate = (klienci na poczatku miesiaca - klienci na koncu miesiaca) / klienci na poczatku x 100%. Przyklad: miales 200 klientow na poczatku miesiaca, 4 odeszlo — Churn Rate = 4/200 x 100% = 2%/mies. Churn Rate jest bezposrednio powiazany z LTV (Lifetime Value) — im nizszy churn, tym wyzsze LTV.",
    },
    {
      question: "Jaki Churn Rate jest dobry?",
      answer:
        "Benchmarki Churn Rate dla SaaS: Powyzej 10%/mies. — krytyczne, firma traci wiecej niz pozyskuje. 5-10%/mies. — zle, trudno rosnac. 2-5%/mies. — srednie, mozliwy wzrost przy silnym pozyskaniu. Ponizej 2%/mies. — dobry, firma moze rosnac zdrowo. Ponizej 1%/mies. — swietny. Negative churn (NRR > 100%) — idealny: expansion MRR przewysza churn. Benchmarki roczne: ponizej 5% rocznie to world-class SaaS (Salesforce, Slack). Churn zalezy od segmentu: SMB ma wyzszy churn (5-10%/rok) niz Enterprise (1-3%/rok).",
    },
    {
      question: "Jak obliczyc Churn Rate?",
      answer:
        "Obliczanie Customer Churn Rate: (klienci utraceni w miesiacu / klienci na poczatku miesiaca) x 100%. Obliczanie Revenue Churn (MRR Churn): (MRR utracone w miesiacu / MRR na poczatku miesiaca) x 100%. Uwaga: nie wliczaj nowych klientow do obliczen churn! Roczny churn to nie miesieczny x 12 — przy 2%/mies. roczny churn to ok. 21.5% (efekt zlozony). Narzedzia do mierzenia: ChartMogul, Baremetrics, ProfitWell, lub Excel/Sheets dla prostszych przypadkow.",
    },
    {
      question: "Jakie sa przyczyny wysokiego Churn Rate?",
      answer:
        "Glowne przyczyny churn: 1) Zly onboarding — klient nie rozumie produktu i nie widzi wartosci. 2) Brak product-market fit — produkt nie rozwiazuje realnego problemu. 3) Zla obsluga klienta — brak wsparcia lub dlugi czas odpowiedzi. 4) Konkurencyjna oferta — tansza lub lepsza alternatywa. 5) Brak adopcji funkcji — klient uzywa tylko 10% mozliwosci produktu. 6) Zmiany budzetu (szczegolnie B2B). 7) Techniczne problemy — bugi, downtime, slaba wydajnosc. Analiza przyczyn churn: zawsze pytaj odchodzacych klientow (exit survey, rozmowa).",
    },
    {
      question: "Jak zmniejszyc Churn Rate?",
      answer:
        "Strategie redukcji churn: 1) Popraw onboarding — pierwsze 30-90 dni decyduje czy klient zostanie. Czas do pierwszej wartosci (Time to Value) kluczowy. 2) Health score — monitouj aktywnosc klientow, reaguj proaktywnie gdy spada. 3) Customer Success — dedykowany zespol dla klientow zagrozone churn. 4) Edukacja — baza wiedzy, webinary, in-app hints. 5) Segmentacja — roznych klientow inaczej traktuj (SMB vs Enterprise). 6) Feedback loops — regularnie pytaj o NPS, zamykaj petle (close the loop). 7) Expansion MRR — upsell zanim klient odejdzie.",
    },
    {
      question: "Co to jest Negative Churn?",
      answer:
        "Negative Churn (ujemny churn) to sytuacja gdy expansion MRR (przychod z upsellingu i cross-sellingu istniejacych klientow) przewysza MRR utracony przez churn. Przyklad: utraciles 5000 zl MRR przez churn, ale istniejacy klienci dokupili za 8000 zl (upgrade planow) — Net Revenue Retention = 106% = negative churn. Negative churn to swieta graal SaaS: mozesz rosnac nawet bez nowych klientow. Osiaga sie go przez: ekspansje produktu, tiered pricing, usage-based pricing, cross-sell do istniejacych klientow.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Churn Rate — co to jest i jak go zmniejszyc? | fotz.pl"
        description="Churn Rate co to jest — wyjasniamy czym jest wskaznik rezygnacji, jak obliczyc churn rate, jaki wynik jest dobry i jak zmniejszyc odplyw klientow w SaaS."
        canonical="https://fotz.pl/blog/churn-rate-co-to"
      />
      <ArticleSchema
        title="Churn Rate — co to jest i jak go zmniejszyc?"
        description="Czym jest Churn Rate, jak obliczyc customer churn i revenue churn, benchmarki SaaS, przyczyny wysokiego churnu i strategie jego redukcji."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/churn-rate-co-to"
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
                <span className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> Metryki SaaS</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Churn Rate — co to jest i jak go zmniejszyc?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Churn Rate to procent klientow lub przychodow ktory tracisz kazdy miesiac.
                Wzor, benchmarki, przyczyny i jak redukowac odplyw klientow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rodzaje Churn Rate</h2>
              <div className="space-y-3 mb-6">
                {churnTypes.map((c, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${c.color}`}>
                    <p className="font-bold text-sm mb-1">{c.type}</p>
                    <p className="text-sm">{c.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Przykladowe obliczenie Churn Rate</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-sm">
                <p className="text-green-400 mb-3">// Firma SaaS — dane za kwiecien</p>
                <div className="space-y-1 text-slate-300">
                  <p>Klienci na 1.04:   <span className="text-white">500</span></p>
                  <p>Nowi klienci:      <span className="text-white">+30</span></p>
                  <p>Odeszli klienci:   <span className="text-red-400">-12</span></p>
                  <p>Klienci na 30.04:  <span className="text-white">518</span></p>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p>Customer Churn = 12 / 500 x 100% = <span className="text-red-400 font-bold">2.4%/mies.</span></p>
                    <p className="text-yellow-400 text-xs mt-1">Roczny ekwiwalent: ~26% (nie mnoz x12!)</p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zmniejszyc churn przez lepszy onboarding i UX?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Intuicyjna strona i szybki onboarding to klucz do utrzymania klientow. Pomagamy budowac produkty ktore klienci chca uzywac.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Churn Rate co to jest</h2>
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
          heading="Zmniejsz churn dzięki lepszej stronie i UX"
          subheading="Projektujemy doswiadczenia ktore klienci lubia — wyzszy NPS, nizszy churn, wiekszy LTV."
        />
      </Layout>
    </>
  );
}
