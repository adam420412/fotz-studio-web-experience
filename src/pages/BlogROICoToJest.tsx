import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, DollarSign, BarChart2, Target } from "lucide-react";
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

export default function BlogROICoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "ROI — co to jest i jak obliczyć zwrot z inwestycji?" },
  ];

  const roiByChannel = [
    { channel: "Email marketing", roi: "36–42x", note: "Najwyższy ROI ze wszystkich kanałów marketingowych" },
    { channel: "SEO (pozycjonowanie)", roi: "10–30x", note: "Rośnie z czasem, długoterminowa inwestycja" },
    { channel: "Content marketing", roi: "5–20x", note: "Buduje autorytet i organiczny ruch" },
    { channel: "Google Ads (search)", roi: "3–8x", note: "Zależy od branży i optymalizacji kampanii" },
    { channel: "Social media ads", roi: "2–6x", note: "Facebook, Instagram — zależy od targetowania" },
    { channel: "Display advertising", roi: "1–3x", note: "Głównie brand awareness, niski bezpośredni ROI" },
  ];

  const faqItems = [
    {
      question: "Co to jest ROI?",
      answer:
        "ROI (Return on Investment, zwrot z inwestycji) to wskaźnik finansowy mierzący efektywność inwestycji jako stosunek zysku do poniesionych kosztów. Wzór: ROI = (Zysk z inwestycji - Koszt inwestycji) / Koszt inwestycji × 100%. Przykład: zainwestowałeś 10 000 zł w kampanię Google Ads, która wygenerowała sprzedaż o wartości 35 000 zł → ROI = (35 000 - 10 000) / 10 000 × 100% = 250%. ROI jest podstawowym wskaźnikiem oceny opłacalności każdej inwestycji.",
    },
    {
      question: "Jak obliczyć ROI? Wzór i przykład",
      answer:
        "Wzór na ROI: ROI = [(Przychód z inwestycji - Koszt inwestycji) / Koszt inwestycji] × 100%. Przykład 1 — kampania marketingowa: Koszt kampanii: 5000 zł. Wygenerowana sprzedaż: 20 000 zł. ROI = (20 000 - 5000) / 5000 × 100% = 300%. Przykład 2 — zakup maszyny: Koszt maszyny: 100 000 zł. Oszczędności rocznie: 30 000 zł. ROI po 1 roku = (30 000 - 100 000) / 100 000 × 100% = -70% (strata w roku 1, zwrot w roku 3-4).",
    },
    {
      question: "Czym różni się ROI od ROAS?",
      answer:
        "ROI (Return on Investment) uwzględnia wszystkie koszty inwestycji i mierzy zysk netto. ROAS (Return on Ad Spend) mierzy tylko przychód w stosunku do wydatków na reklamę, bez uwzględnienia innych kosztów (produkcja, marża, obsługa). Przykład: ROAS = 5 oznacza że na każdą złotówkę wydaną na reklamę wraca 5 zł przychodu. ROI = 200% oznacza że z inwestycji zarobiłeś 2x więcej niż zainwestowałeś. W e-commerce docelowy ROAS zazwyczaj wynosi minimum 3-4x, żeby ROI był dodatni.",
    },
    {
      question: "Jaki ROI jest dobry?",
      answer:
        "Dobry ROI zależy od kontekstu: Marketing cyfrowy: ROI 3x-10x (300%-1000%) — typowy cel dla kampanii. Nieruchomości: 8-12% rocznie — uznawany za dobry. Giełda: 7-10% rocznie (historyczna średnia). SEO: 10-30x po dojrzeniu (12-24 miesiące). Email marketing: 36-42x. Porównuj ROI zawsze w obrębie tej samej kategorii inwestycji. Każdy pozytywny ROI (powyżej 0%) oznacza że inwestycja się zwraca — pytanie tylko o tempo i alternatywne możliwości.",
    },
    {
      question: "Jak mierzyć ROI z działań marketingowych?",
      answer:
        "Mierzenie ROI marketingowego: 1) Zdefiniuj cel (sprzedaż, leady, subskrybenci) i ich wartość. 2) Skonfiguruj śledzenie konwersji (Google Analytics 4, pixel Meta). 3) Przypisz wartości konwersjom — wartość leada, średnia wartość zamówienia. 4) Zmierz przychody atrybucja (first-click, last-click, data-driven). 5) Oblicz: ROI = (Wartość konwersji - Koszt kampanii) / Koszt kampanii × 100%. Narzędzia: Google Analytics 4, Google Ads, Meta Business Suite, Looker Studio.",
    },
    {
      question: "Co to jest ROI w IT i projektach?",
      answer:
        "W projektach IT ROI liczy się inaczej — często obejmuje: korzyści twarde (oszczędności na pracownikach, mniej błędów, szybszy czas przetwarzania) i korzyści miękkie (lepsze decyzje, wyższe zadowolenie klientów). Wzór dla projektów: ROI = (Wartość korzyści w całym cyklu życia - Koszt projektu) / Koszt projektu × 100%. Przykład: wdrożenie systemu CRM za 50 000 zł, który oszczędza 2 godziny dziennie na pracownika (10 pracowników × 50 zł/h × 250 dni = 125 000 zł/rok) → ROI w roku 1 = (125 000 - 50 000) / 50 000 = 150%.",
    },
  ];

  return (
    <>
      <SEOHead
        title="ROI — co to jest i jak obliczyć zwrot z inwestycji? | fotz.pl"
        description="ROI co to jest — wyjaśniamy czym jest Return on Investment, wzór na ROI, przykłady obliczeń i jak mierzyć ROI w marketingu i projektach IT."
        canonical="https://fotz.pl/blog/roi-co-to-jest"
      />
      <ArticleSchema
        title="ROI — co to jest i jak obliczyć zwrot z inwestycji?"
        description="Czym jest ROI (Return on Investment), wzór na ROI, przykłady obliczeń, różnica ROI vs ROAS i jak mierzyć ROI w marketingu cyfrowym."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/roi-co-to-jest"
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
                <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> Finanse i marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                ROI — co to jest i jak obliczyć zwrot z inwestycji?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                ROI (Return on Investment) to podstawowy wskaźnik efektywności każdej inwestycji.
                Jak obliczyć ROI, wzór z przykładami i ROI kanałów marketingowych.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Wzór na ROI</h2>
              <div className="bg-slate-900 rounded-lg p-6 mb-6 text-center">
                <p className="text-slate-400 text-sm mb-2">Wzór na Return on Investment</p>
                <div className="text-white font-bold text-2xl mb-4">
                  ROI = <span className="text-blue-400">(Zysk - Koszt)</span> / <span className="text-green-400">Koszt</span> × 100%
                </div>
                <div className="border-t border-slate-700 pt-4 text-sm text-slate-400">
                  <p>Przykład: zysk 25 000 zł, koszt 10 000 zł</p>
                  <p className="text-blue-400 font-bold mt-1">ROI = (25 000 - 10 000) / 10 000 × 100% = <span className="text-white">150%</span></p>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ROI kanałów marketingu cyfrowego</h2>
              <div className="space-y-2 mb-6">
                {roiByChannel.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{item.channel}</p>
                      <p className="text-slate-500 text-xs">{item.note}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">ROI: {item.roi}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ROI vs ROAS — kiedy używać czego?</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Wskaźnik</th>
                      <th className="text-left p-3 border border-slate-700">Co mierzy</th>
                      <th className="text-left p-3 border border-slate-700">Kiedy używać</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { indicator: "ROI", measures: "Zysk netto / wszystkie koszty", when: "Ocena całkowitej opłacalności inwestycji" },
                      { indicator: "ROAS", measures: "Przychód / koszt reklamy", when: "Optymalizacja kampanii reklamowych" },
                      { indicator: "EBITDA", measures: "Zysk operacyjny przed amortyzacją", when: "Wycena firm, porównania branżowe" },
                      { indicator: "NPV", measures: "Wartość przyszłych przepływów gotówki", when: "Długoterminowe projekty inwestycyjne" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-blue-600">{row.indicator}</td>
                        <td className="p-3 border border-slate-200 text-slate-700 text-xs">{row.measures}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Target className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zmaksymalizować ROI z marketingu?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Prowadzimy kampanie Google Ads i SEO z pełnym raportowaniem ROI i ROAS.
                </p>
                <Link to="/uslugi/kampania-google-ads" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Kampanie Google Ads — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — ROI co to jest</h2>
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
          heading="Mierz ROI każdej złotówki wydanej na marketing"
          subheading="Kampanie z pełną analityką — wiesz dokładnie co przynosi wyniki."
        />
      </Layout>
    </>
  );
}
