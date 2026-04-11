import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, BarChart2, DollarSign, Calculator } from "lucide-react";
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

export default function BlogEbitdaCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "EBITDA — co to jest i jak obliczyć?" },
  ];

  const ebitdaComponents = [
    { letter: "E", full: "Earnings", pl: "Zysk netto", desc: "Wynik finansowy netto po wszystkich kosztach i podatkach." },
    { letter: "B", full: "Before", pl: "Przed", desc: "Wskaźnik obliczany przed odliczeniem poniższych pozycji." },
    { letter: "I", full: "Interest", pl: "Odsetki", desc: "Koszty finansowania — odsetki od kredytów i obligacji." },
    { letter: "T", full: "Taxes", pl: "Podatki", desc: "Podatek dochodowy od osób prawnych (CIT)." },
    { letter: "D", full: "Depreciation", pl: "Amortyzacja środków trwałych", desc: "Zużycie maszyn, sprzętu, nieruchomości." },
    { letter: "A", full: "Amortization", pl: "Amortyzacja wartości niematerialnych", desc: "Zużycie patentów, licencji, know-how." },
  ];

  const faqItems = [
    {
      question: "Co to jest EBITDA?",
      answer:
        "EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) to zysk przed odliczeniem odsetek, podatków, amortyzacji środków trwałych i amortyzacji wartości niematerialnych. Jest to wskaźnik operacyjnej rentowności firmy, pokazujący zdolność do generowania gotówki z podstawowej działalności. EBITDA eliminuje wpływ struktury finansowania, polityki podatkowej i metod amortyzacji, umożliwiając porównanie firm z różnych branż i krajów.",
    },
    {
      question: "Jak obliczyć EBITDA?",
      answer:
        "EBITDA można obliczyć dwiema metodami: Metoda 1 (od góry): EBITDA = Przychody ze sprzedaży - Koszty operacyjne (bez amortyzacji). Metoda 2 (od zysku): EBITDA = Zysk netto + Podatki + Odsetki + Amortyzacja. Przykład: Firma ma przychody 10 mln zł, koszty operacyjne 7 mln zł (bez amortyzacji 0,5 mln), odsetki 0,3 mln, podatek 0,4 mln, zysk netto 1,8 mln → EBITDA = 1,8 + 0,4 + 0,3 + 0,5 = 3 mln zł.",
    },
    {
      question: "Do czego służy wskaźnik EBITDA?",
      answer:
        "EBITDA jest używana do: 1) Wyceny firm — mnożnik EV/EBITDA (Enterprise Value do EBITDA) jest standardem w transakcjach M&A i private equity. 2) Oceny zdolności kredytowej — banki liczą wskaźnik Dług Netto/EBITDA. 3) Porównań między firmami — eliminuje różnice w amortyzacji i strukturze finansowania. 4) Oceny rentowności operacyjnej — pokazuje czy core business jest rentowny. 5) Planowania finansowego i prognoz.",
    },
    {
      question: "Jaka jest różnica między EBITDA a zyskiem netto?",
      answer:
        "Zysk netto uwzględnia wszystkie koszty: odsetki, podatki i amortyzację. EBITDA je wyklucza. Przykład: firma z dużym długiem ma wysokie odsetki, które redukują zysk netto do zera, ale EBITDA może być pozytywna — pokazuje że operacyjnie firma zarabia. Zysk netto = realna gotówka dla właścicieli. EBITDA = proxy dla przepływów gotówkowych z operacji. Obie metryki są ważne — żadna nie zastępuje drugiej.",
    },
    {
      question: "Co to jest marża EBITDA?",
      answer:
        "Marża EBITDA = EBITDA / Przychody × 100%. Benchmarki według branży: SaaS/software: 15-40%, bankowość: 30-50%, retail: 3-8%, produkcja: 8-15%, e-commerce: 2-6%, telekomunikacja: 30-45%. Marża EBITDA powyżej 20% jest generalnie uważana za dobrą. Jednak normy bardzo różnią się między branżami — zawsze porównuj z konkurentami z tej samej branży.",
    },
    {
      question: "Jakie są wady wskaźnika EBITDA?",
      answer:
        "Krytycy EBITDA wskazują na kilka problemów: 1) Ignoruje nakłady inwestycyjne (CAPEX) — firma może mieć wysoką EBITDA ale wymagać ogromnych inwestycji. 2) Pomija przepływy pieniężne z kapitału obrotowego. 3) Nie jest miarą gotówkową — można nią manipulować. 4) Ignoruje strukturę finansowania — zadłużona firma wygląda tak samo jak niezadłużona. Dlatego EBITDA zawsze należy analizować razem z przepływami pieniężnymi (FCF) i wskaźnikiem Dług/EBITDA.",
    },
  ];

  return (
    <>
      <SEOHead
        title="EBITDA — co to jest i jak obliczyć? Wskaźnik finansowy | fotz.pl"
        description="EBITDA co to jest — wyjaśniamy czym jest wskaźnik EBITDA, jak go obliczyć, do czego służy w wycenie firm i analizie finansowej. Wzór i przykłady."
        canonical="https://fotz.pl/blog/ebitda-co-to-jest"
      />
      <ArticleSchema
        title="EBITDA — co to jest i jak obliczyć?"
        description="Czym jest EBITDA, jak obliczyć wskaźnik EBITDA, wzór, marża EBITDA i zastosowanie w wycenie firm oraz analizie finansowej."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/ebitda-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> Finanse i wycena</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                EBITDA — co to jest i jak obliczyć?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                EBITDA to kluczowy wskaźnik finansowy używany w wycenie firm, analizie kredytowej
                i transakcjach M&A. Czym jest, jak go obliczać i jak interpretować?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rozkład skrótu EBITDA</h2>
              <div className="space-y-2 mb-6">
                {ebitdaComponents.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.letter}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-slate-900 text-sm">{item.full}</span>
                        <span className="text-slate-500 text-xs">= {item.pl}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Wzór na EBITDA — przykład obliczenia</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-sm">
                <p className="text-green-400 mb-3">// Metoda: od zysku netto</p>
                <div className="space-y-1 text-slate-300">
                  <p>Zysk netto:     <span className="text-white">+2 000 000 zł</span></p>
                  <p>Podatek CIT:    <span className="text-white">+  500 000 zł</span></p>
                  <p>Odsetki:        <span className="text-white">+  300 000 zł</span></p>
                  <p>Amortyzacja:    <span className="text-white">+  700 000 zł</span></p>
                  <div className="border-t border-slate-600 pt-2 mt-2">
                    <p className="text-blue-400 font-bold">EBITDA = 3 500 000 zł</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs mt-3">Marża EBITDA = 3,5 mln / 20 mln (przychody) = 17,5%</p>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Mnożnik EV/EBITDA w wycenie firm</h2>
              <div className="space-y-2 mb-6">
                {[
                  { sector: "SaaS / oprogramowanie", multiple: "10–30x", note: "Wysoki wzrost, skalowalne marże" },
                  { sector: "E-commerce", multiple: "5–12x", note: "Zależy od tempa wzrostu" },
                  { sector: "Produkcja", multiple: "5–10x", note: "Stabilne, przewidywalne marże" },
                  { sector: "Retail (handel detaliczny)", multiple: "4–8x", note: "Niskie marże, duże wolumeny" },
                  { sector: "Usługi profesjonalne", multiple: "6–12x", note: "Uzależnione od klientów kluczowych" },
                  { sector: "Nieruchomości / RE", multiple: "8–15x", note: "Stabilne przepływy, długi horyzont" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{item.sector}</p>
                      <p className="text-slate-500 text-xs">{item.note}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">EV/EBITDA: {item.multiple}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs italic mb-6">
                Przykład: firma z EBITDA 3,5 mln zł w branży e-commerce → wycena EV ≈ 17–42 mln zł (mnożnik 5–12x)
              </p>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Calculator className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Budujesz firmę z wartością do sprzedaży?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Dobra strona internetowa i marketing zwiększają przychody — a to bezpośrednio podnosi EBITDA i wycenę.
                </p>
                <Link to="/uslugi/marketing-internetowy" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Marketing internetowy — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — EBITDA co to jest</h2>
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
          heading="Zwiększ przychody firmy — popraw EBITDA i wycenę"
          subheading="SEO, Google Ads i skuteczna strona internetowa to inwestycja w wartość Twojego biznesu."
        />
      </Layout>
    </>
  );
}
