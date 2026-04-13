import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Eye, BarChart2, TrendingUp, DollarSign } from "lucide-react";
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

export default function BlogCPMCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "CPM — co to jest? Koszt tysiąca wyświetleń reklam" },
  ];

  const adMetrics = [
    { metric: "CPM", full: "Cost Per Mille", formula: "(koszt / wyświetlenia) × 1000", best: "Kampanie zasięgowe, brand awareness" },
    { metric: "CPC", full: "Cost Per Click", formula: "koszt / kliknięcia", best: "Ruch na stronę, kampanie performance" },
    { metric: "CPL", full: "Cost Per Lead", formula: "koszt / leady", best: "Pozyskiwanie kontaktów (B2B, finanse)" },
    { metric: "CPA", full: "Cost Per Action", formula: "koszt / konwersje", best: "Sprzedaż, rejestracje, instalacje" },
    { metric: "ROAS", full: "Return on Ad Spend", formula: "przychód / wydatki × 100%", best: "E-commerce, ocena rentowności kampanii" },
  ];

  const faqItems = [
    {
      question: "Co to jest CPM?",
      answer:
        "CPM (Cost Per Mille, z łaciny 'mille' = tysiąc) to koszt za tysiąc wyświetleń reklamy. Jeśli CPM wynosi 10 zł, zapłacisz 10 zł za każde 1000 wyświetleń Twojej reklamy. CPM to podstawowy model rozliczenia kampanii display (banerowych), video i social media. Formuła: CPM = (całkowity koszt / liczba wyświetleń) × 1000.",
    },
    {
      question: "Ile wynosi CPM w Polsce?",
      answer:
        "Typowe stawki CPM w polskich kampaniach: Facebook/Meta Ads: 3-15 zł, Google Display Network: 2-8 zł, YouTube (video): 8-25 zł, LinkedIn Ads: 30-80 zł, programmatic display: 1-5 zł. Stawki zmieniają się w zależności od targetu (wąskie grupy = wyższy CPM), branży, pory roku (Q4 = wyższy CPM) i jakości reklamy.",
    },
    {
      question: "Kiedy używać CPM, a kiedy CPC?",
      answer:
        "CPM lepiej sprawdza się gdy: celem jest zasięg i brand awareness (chcesz żeby wiele osób zobaczyło reklamę), budujesz rozpoznawalność marki, targetujesz szeroką grupę odbiorców. CPC (koszt za kliknięcie) jest lepszy gdy: chcesz przyciągnąć ruch na stronę, zależy Ci na konkretnych akcjach użytkownika, prowadzisz kampanie performance (zakupy, leady). Proste pytanie: liczą się wyświetlenia (CPM) czy kliknięcia (CPC)?",
    },
    {
      question: "Jak obliczyć CPM kampanii reklamowej?",
      answer:
        "Wzór CPM: CPM = (koszt kampanii / liczba wyświetleń) × 1000. Przykład: wydałeś 1000 zł i reklama wyświetliła się 250 000 razy → CPM = (1000 / 250 000) × 1000 = 4 zł. W większości platform (Meta Ads, Google Ads) CPM jest wyświetlany automatycznie w kolumnach raportu. Możesz też obliczyć odwrotnie: ile wyświetleń kupisz za dany budżet = (budżet / CPM) × 1000.",
    },
    {
      question: "Czym różni się CPM od eCPM?",
      answer:
        "CPM to stawka którą płacisz (kupujesz wyświetlenia po danej cenie). eCPM (effective CPM) to przeliczeniowy koszt tysiąca wyświetleń używany do porównania kampanii rozliczanych w różnych modelach. Jeśli kampania CPC wygenerowała 10 000 kliknięć za 5000 zł i miała 2 000 000 wyświetleń — eCPM = (5000 / 2 000 000) × 1000 = 2,5 zł. eCPM jest używany przez wydawców do oceny rentowności powierzchni reklamowej.",
    },
    {
      question: "Jak obniżyć CPM w kampaniach reklamowych?",
      answer:
        "Metody na niższy CPM: 1) Testuj różne formaty reklam (video vs. obraz — video często ma niższy CPM). 2) Rozszerz grupę docelową — zbyt wąskie targetowanie podnosi CPM. 3) Optymalizuj wskaźniki zaangażowania — reklamy z wysokim CTR i dobrymi reakcjami mają niższy CPM (algorytmy nagradzają relevantne reklamy). 4) Unikaj Q4 (Black Friday, święta) — wtedy CPM skacze o 50-200%. 5) Testuj różne platformy — Google Display może być tańszy niż Facebook.",
    },
  ];

  return (
    <>
      <SEOHead
        title="CPM — co to jest? Koszt tysiąca wyświetleń reklam | fotz.pl"
        description="CPM co to jest — wyjaśniamy czym jest Cost Per Mille, jak obliczyć CPM, ile wynosi w Polsce i kiedy używać CPM vs CPC w kampaniach reklamowych."
        canonical="https://fotz.pl/blog/cpm-co-to"

        keywords="CPM co to jest, CPM definicja, czym jest CPM, CPM w marketingu, CPM przykłady, jak działa CPM, CPM strategia"
      />
      <ArticleSchema
        title="CPM — co to jest? Koszt tysiąca wyświetleń reklam"
        description="Czym jest CPM (Cost Per Mille), jak obliczyć koszt tysiąca wyświetleń, benchmarki CPM w Polsce i kiedy używać CPM vs CPC vs CPA."
        datePublished="2025-04-09"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/cpm-co-to"
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
                <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> Reklama internetowa</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                CPM — co to jest i ile kosztuje tysiąc wyświetleń?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                CPM (Cost Per Mille) to koszt za tysiąc wyświetleń reklamy — podstawowy model rozliczenia
                kampanii display i social media. Ile wynosi CPM w Polsce i kiedy go używać?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">CPM vs inne modele rozliczeń reklam</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Model</th>
                      <th className="text-left p-3 border border-slate-700">Pełna nazwa</th>
                      <th className="text-left p-3 border border-slate-700">Wzór</th>
                      <th className="text-left p-3 border border-slate-700">Najlepszy dla</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adMetrics.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-blue-600">{row.metric}</td>
                        <td className="p-3 border border-slate-200 text-slate-700 text-xs">{row.full}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs font-mono">{row.formula}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Benchmarki CPM w Polsce (2025)</h2>
              <div className="space-y-2 mb-6">
                {[
                  { platform: "Facebook / Instagram Ads", cpm: "3–15 zł", note: "Zależy od targetowania i jakości reklamy" },
                  { platform: "Google Display Network", cpm: "2–8 zł", note: "Tańsze niż social, niższe zaangażowanie" },
                  { platform: "YouTube (video reklamy)", cpm: "8–25 zł", note: "In-stream i bumper ads" },
                  { platform: "LinkedIn Ads", cpm: "30–80 zł", note: "Drogi, ale precyzyjne targetowanie B2B" },
                  { platform: "TikTok Ads", cpm: "5–20 zł", note: "Rosnąca platforma, konkurencyjne stawki" },
                  { platform: "Programmatic Display", cpm: "1–5 zł", note: "Najszerszy zasięg, najniższy CPM" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{item.platform}</p>
                      <p className="text-slate-500 text-xs">{item.note}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">{item.cpm}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <DollarSign className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz optymalizować kampanie reklamowe?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Prowadzimy kampanie Google Ads i Meta Ads z optymalizacją CPM, CPC i ROAS.
                </p>
                <Link to="/uslugi/kampania-google-ads" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Kampania Google Ads — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — CPM co to jest</h2>
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
          heading="Zoptymalizuj kampanie reklamowe i obniż CPM"
          subheading="Prowadzimy kampanie Google Ads i Meta Ads z mierzalnymi wynikami."
        />
      </Layout>
    </>
  );
}
