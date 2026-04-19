import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, DollarSign, BarChart2, Zap } from "lucide-react";
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

export default function BlogMRRARRCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "MRR i ARR — co to jest? Metryki SaaS" },
  ];

  const mrrTypes = [
    { type: "New MRR", desc: "MRR od nowych klientów którzy zaczęli subskrypcję w danym miesiącu." },
    { type: "Expansion MRR", desc: "MRR z upsellingu i cross-sellingu istniejących klientów (upgrade planu, dokupienie licencji)." },
    { type: "Churned MRR", desc: "MRR utracony przez klientów którzy odeszli lub obniżyli plan (churn)." },
    { type: "Reactivation MRR", desc: "MRR od klientów którzy wrócili po wcześniejszym churnie." },
    { type: "Net New MRR", desc: "New MRR + Expansion MRR - Churned MRR = faktyczny wzrost MRR miesiąc do miesiąca." },
  ];

  const faqItems = [
    {
      question: "Co to jest MRR?",
      answer:
        "MRR (Monthly Recurring Revenue) to miesięczny powtarzalny przychód — suma wszystkich aktywnych subskrypcji w danym miesiącu. Jest to podstawowa metryka dla firm SaaS i subskrypcyjnych. Wzór: MRR = liczba klientów × średnia cena miesięczna. Przykład: 100 klientów × 200 zł = MRR 20 000 zł. MRR nie uwzględnia jednorazowych płatności (opłata za wdrożenie, usługi), tylko powtarzalny przychód z subskrypcji. MRR to najważniejszy wskaźnik zdrowego wzrostu biznesu SaaS.",
    },
    {
      question: "Co to jest ARR?",
      answer:
        "ARR (Annual Recurring Revenue) to roczny powtarzalny przychód — prognozowany przychód z aktywnych subskrypcji w ciągu roku. Wzór: ARR = MRR × 12. Przykład: MRR 20 000 zł → ARR = 240 000 zł. ARR jest używany do wyceny spółek SaaS (typowy mnożnik: 5-30x ARR) i do oceny skali biznesu. Firmy SaaS zgłaszające ARR: Zazwyczaj firmy rozliczające się rocznie lub kwartalnie raportują ARR. Firmy z miesięczną subskrypcją raportują MRR, a ARR jako projekcję.",
    },
    {
      question: "Jak obliczyć MRR?",
      answer:
        "Obliczanie MRR: Suma aktywnych subskrypcji w danym miesiącu (znormalizowana do miesięcznej stawki). Dla klientów rocznych: roczna opłata / 12. Przykład: 50 klientów × plan 100 zł/mies. + 20 klientów × plan 300 zł/mies. + 5 klientów × plan 1200 zł/rok (= 100 zł/mies.) = 5000 + 6000 + 500 = MRR 11 500 zł. Błędy przy liczeniu MRR: wliczanie jednorazowych płatności, opłat instalacyjnych, przyszłych kontraktów które jeszcze nie startują.",
    },
    {
      question: "Jaki jest dobry wzrost MRR?",
      answer:
        "Benchmarki wzrostu MRR dla SaaS: Seed/early stage (do 100k USD ARR): 15-25% MoM (miesiąc do miesiąca). Growth stage (100k-1M ARR): 10-15% MoM. Scale-up (1M-10M ARR): 5-10% MoM. Zasada T2D3: podwój przychody przez 2 lata, potroił przez kolejne 3 lata — to benchmark dla firm dążących do Serii A/B. Jeśli rośniesz powyżej 20% MoM przez 6+ miesięcy — masz bardzo zdrowy startup. Poniżej 5% MoM w early stage to sygnał problemów z PMF lub akwizycją.",
    },
    {
      question: "Co to jest Churn Rate?",
      answer:
        "Churn Rate to wskaźnik odejść — procent klientów lub MRR traconych w danym okresie. Wzór: Monthly Churn Rate = Churned Customers / Active Customers at Start of Month × 100%. Przykład: miałeś 200 klientów na początku miesiąca, 4 odeszły → Churn Rate = 4/200 = 2%/mies. Dobry Churn Rate dla SaaS: poniżej 2%/mies. lub 20-25%/rok. Powyżej 5%/mies. to krytyczne — firma traci więcej niż pozyskuje. Negative Churn: expansion MRR przewyższa churned MRR — idealna sytuacja.",
    },
    {
      question: "Jak MRR i ARR wpływa na wycenę firmy SaaS?",
      answer:
        "Wycena SaaS opiera się na mnożniku ARR: Enterprise Value = ARR × mnożnik. Mnożniki (2024-2025): publiczne spółki SaaS: 5-15x ARR. Prywatne Seria A-B: 5-20x ARR. Wyceny pre-seed/seed: często na podstawie przyszłego ARR. Czynniki wpływające na mnożnik: tempo wzrostu ARR (wyższe → wyższy mnożnik), Gross Margin (wyższe → wyższy mnożnik), NRR (powyżej 120% → premium), Churn (niższy → wyższy mnożnik), rynek adresowalny (TAM). Przykład: firma z 1M ARR rosnąca 100% YoY może dostać wycenę 15-25M USD.",
    },
  ];

  return (
    <>
      <SEOHead
        title="MRR i ARR — co to jest? Kluczowe metryki SaaS | fotz.pl"
        description="MRR co to jest — wyjaśniamy czym jest Monthly Recurring Revenue, ARR, jak obliczać MRR, dobry wzrost i jak metryki SaaS wpływają na wycenę firmy."
        canonical="https://fotz.pl/blog/mrr-arr-co-to"

        keywords="MRR i ARR co to jest, MRR i ARR definicja, czym jest MRR i ARR, MRR i ARR startup, MRR i ARR jak liczyć, MRR i ARR wzór, MRR i ARR przykłady"
      />
      <ArticleSchema
        title="MRR i ARR — co to jest? Kluczowe metryki SaaS"
        description="Czym jest MRR (Monthly Recurring Revenue) i ARR (Annual Recurring Revenue), jak obliczać, typy MRR, Churn Rate i wpływ na wycenę firmy SaaS."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/mrr-arr-co-to"
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
                MRR i ARR — co to jest? Kluczowe metryki SaaS
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                MRR (Monthly Recurring Revenue) i ARR (Annual Recurring Revenue) to fundamentalne metryki
                każdego biznesu subskrypcyjnego i SaaS. Wzory, typy i benchmarki.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Typy MRR</h2>
              <div className="space-y-3 mb-6">
                {mrrTypes.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <DollarSign className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{m.type}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">MRR → ARR → Wycena SaaS</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-sm">
                <p className="text-green-400 mb-3">// Przykład: firma SaaS z 500 klientami</p>
                <div className="space-y-1 text-slate-300">
                  <p>Klienci:  <span className="text-white">500</span></p>
                  <p>ARPU:     <span className="text-white">400 zł/mies.</span></p>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p>MRR = 500 × 400 = <span className="text-blue-400 font-bold">200 000 zł/mies.</span></p>
                    <p>ARR = 200 000 × 12 = <span className="text-green-400 font-bold">2 400 000 zł/rok</span></p>
                  </div>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p className="text-yellow-400">Wycena EV (mnożnik 10x ARR):</p>
                    <p className="text-white font-bold">≈ 24 000 000 zł</p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Budujesz produkt SaaS lub subskrypcyjny?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strona marketingowa, landing page i SEO — pomagamy budować pipeline który przekłada się na MRR.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — MRR i ARR co to jest</h2>
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
          heading="Zwiększ MRR przez lepszy marketing i stronę"
          subheading="SEO, Google Ads i landing page — budujemy pipeline który przekłada się na subskrybentów."
        />
      </Layout>
    </>
  );
}
