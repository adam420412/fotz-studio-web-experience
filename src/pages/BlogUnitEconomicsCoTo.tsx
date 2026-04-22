import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są unit economics?",
    answer:
      "Unit economics (ekonomika jednostkowa) to analiza przychodów i kosztów przypadających na jedną jednostkę biznesową — zazwyczaj jednego klienta. Odpowiada na pytanie: czy zarabiamy więcej na kliencie niż kosztuje nas jego pozyskanie i obsługa? Kluczowa relacja: LTV (lifetime value klienta) musi być znacznie wyższa od CAC (koszt pozyskania klienta). Unit economics pozwala ocenić czy biznesowy model skaluje się zdrowo.",
  },
  {
    question: "Co to jest stosunek LTV do CAC i jaki powinien być?",
    answer:
      "LTV:CAC to najważniejszy wskaźnik unit economics. LTV (Customer Lifetime Value) / CAC (Customer Acquisition Cost). Benchmark dla SaaS i subscription businesses: LTV:CAC 3:1 = minimalne zdrowe, LTV:CAC 5:1+ = bardzo dobry biznes, LTV:CAC poniżej 3:1 = alarmujące — prawdopodobnie tracisz pieniądze na skali. Przy LTV:CAC 1:1 tracisz PLN na każdym kliencie. Inwestorzy traktują 3:1 jako dolny próg inwestycyjny.",
  },
  {
    question: "Co to jest CAC Payback Period?",
    answer:
      "CAC Payback Period (okres zwrotu CAC) to czas potrzebny do odzyskania kosztu pozyskania klienta przez generowane przez niego przychody. Wzór: CAC / (MRR per customer × Gross Margin %). Benchmark: poniżej 12 miesięcy = dobry dla B2C/SMB, poniżej 18 miesięcy = dobry dla mid-market, poniżej 24 miesięcy = akceptowalny dla Enterprise. Payback period powyżej 24 miesięcy oznacza że firma potrzebuje dużo kapitału na wzrost.",
  },
  {
    question: "Jak oblicza się LTV?",
    answer:
      "Najprostsza formuła LTV = ARPU × Gross Margin % × (1 / Churn Rate). Przykład: ARPU 500 PLN/mies., Gross Margin 75%, Churn 3%/mies. → LTV = 500 × 0.75 × (1/0.03) = 500 × 0.75 × 33.3 = 12 500 PLN. Dokładniejsza formuła używa discount rate i cohort analysis. Kluczowe: LTV jest szacunkiem — szczególnie dla młodszych firm z krótką historią danych.",
  },
  {
    question: "Czym różni się CAC blended od CAC per channel?",
    answer:
      "CAC blended = całkowite wydatki na marketing i sprzedaż / liczba nowych klientów — prosta, ale maskuje różnice między kanałami. CAC per channel = wydatki na dany kanał / klienci z tego kanału. Różnica jest ogromna: CAC przez Google Ads może wynosić 500 PLN, przez referrals 50 PLN. CAC blended daje średnią która ukrywa które kanały są opłacalne. Optymalizacja unit economics wymaga analizy per channel.",
  },
];

const unitEconomicsMetrics = [
  {
    metryka: "CAC",
    pelna: "Customer Acquisition Cost",
    wzor: "(Marketing + Sales Costs) / New Customers",
    przykład: "(50 000 PLN/mies.) / 25 klientów = 2 000 PLN CAC",
    interpretacja: "Im niższy tym lepiej — ale musi być analizowany razem z LTV",
  },
  {
    metryka: "LTV",
    pelna: "Customer Lifetime Value",
    wzor: "ARPU × Gross Margin % × (1 / Churn Rate)",
    przykład: "500 PLN × 75% × (1/3%) = 12 500 PLN LTV",
    interpretacja: "Im wyższy tym lepiej — cel: LTV/CAC powyżej 3×",
  },
  {
    metryka: "LTV:CAC",
    pelna: "Lifetime Value to Customer Acquisition Cost Ratio",
    wzor: "LTV / CAC",
    przykład: "12 500 PLN / 2 000 PLN = 6.25:1",
    interpretacja: "Benchmark: 3:1 minimum, 5:1 bardzo dobry, 1:1 tracisz pieniądze",
  },
  {
    metryka: "CAC Payback",
    pelna: "CAC Payback Period",
    wzor: "CAC / (MRR per customer × Gross Margin %)",
    przykład: "2 000 / (500 × 75%) = 5.3 miesięcy",
    interpretacja: "Poniżej 12 mies. = dobry dla SMB, poniżej 18 = mid-market, poniżej 24 = enterprise",
  },
  {
    metryka: "Gross Margin",
    pelna: "Marża brutto",
    wzor: "(Revenue − COGS) / Revenue × 100%",
    przykład: "(1 000 000 − 200 000) / 1 000 000 = 80%",
    interpretacja: "SaaS cel: 70-80%+. Marża poniżej 50% komplikuje unit economics",
  },
  {
    metryka: "Magic Number",
    pelna: "Sales Efficiency / Magic Number",
    wzor: "Net New ARR × 4 / Sales & Marketing Spend",
    przykład: "100 000 PLN × 4 / 200 000 PLN = 2.0",
    interpretacja: "Powyżej 1.0 = warto inwestować w sprzedaż. Poniżej 0.5 = problem",
  },
];

const ltvcacBenchmarks = [
  { ratio: "Poniżej 1:1", status: "Tracisz pieniądze", kolor: "red", opis: "Każdy nowy klient kosztuje więcej niż przynosi — natychmiast zdiagnozuj" },
  { ratio: "1:1 – 3:1", status: "Niebezpieczna strefa", kolor: "orange", opis: "Trudno skalować — koszty G&A i operations zjadają marżę" },
  { ratio: "3:1 – 5:1", status: "Dobry biznes", kolor: "blue", opis: "Akceptowalny przez inwestorów — może rosnąć przy zewnętrznym finansowaniu" },
  { ratio: "Powyżej 5:1", status: "Świetny biznes", kolor: "green", opis: "Bardzo efektywny — reinwestuj lub optymalizuj wzrost szybciej" },
];

const colorStyle: Record<string, string> = {
  red: "bg-red-50 border-red-200 text-red-800",
  orange: "bg-orange-50 border-orange-200 text-orange-800",
  blue: "bg-blue-50 border-blue-200 text-blue-800",
  green: "bg-green-50 border-green-200 text-green-800",
};

export default function BlogUnitEconomicsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Unit Economics | Fotz Studio"
        description="Unit economics — definicja, 6 kluczowych metryk (LTV, CAC, LTV:CAC, Payback, Gross Margin, Magic Number) i benchmarki. Kompletny przewodnik dla startupów…"
        canonical="https://fotz.pl/blog/unit-economics-co-to"

        keywords="Unit Economics co to jest, Unit Economics definicja, czym jest Unit Economics, Unit Economics startup, Unit Economics jak liczyć, Unit Economics wzór, Unit Economics przykłady"
      />
      <ArticleSchema
        title="Unit Economics — co to jest i jak analizować LTV i CAC?"
        description="Kompletny przewodnik po unit economics: 6 metryk, LTV:CAC benchmarki, CAC payback period i jak obliczyć LTV dla SaaS."
        url="https://fotz.pl/blog/unit-economics-co-to"
        datePublished="2024-01-28"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Unit Economics", url: "https://fotz.pl/blog/unit-economics-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Unit Economics", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Unit Economics — co to jest? LTV, CAC i LTV:CAC
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Unit economics mierzy czy Twój biznes jest zdrowy na poziomie jednego klienta.
            Poznaj 6 metryk (LTV, CAC, payback), benchmarki i jak obliczać kluczowe wskaźniki.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to są unit economics?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Unit economics</strong> to analiza przychodów i kosztów przypadających na jedną jednostkę —
              zazwyczaj jednego klienta. Fundamentalne pytanie: czy na każdym kliencie zarabiamy więcej
              niż kosztuje nas jego pozyskanie i obsługa przez cały czas relacji?
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Dla startupów unit economics to test czy model biznesowy jest skalowalny.
              Firma może rosnąć szybko ale tracić pieniądze na każdym kliencie —
              skalowanie takiego modelu tylko powiększa straty.
            </p>
            <div className="bg-slate-900 text-white rounded-xl p-6 mb-6 text-center">
              <p className="text-2xl font-mono font-bold mb-2">LTV : CAC ≥ 3:1</p>
              <p className="text-slate-300 text-sm">Minimalne zdrowe unit economics dla SaaS i subscription businesses</p>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kluczowych metryk unit economics</h2>
            <div className="space-y-4">
              {unitEconomicsMetrics.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-16 text-center flex-shrink-0">
                      <p className="font-bold text-blue-700 text-sm">{m.metryka}</p>
                      <p className="text-xs text-slate-400">{m.pelna.split(' ').slice(0, 2).join(' ')}</p>
                    </div>
                    <div className="flex-1">
                      <div className="bg-slate-900 text-white rounded p-2 font-mono text-xs mb-2">{m.wzor}</div>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div className="bg-blue-50 rounded p-2">
                          <p className="text-xs font-semibold text-blue-500 mb-1">Przykład:</p>
                          <p className="text-blue-800">{m.przykład}</p>
                        </div>
                        <div className="bg-slate-50 rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Interpretacja:</p>
                          <p className="text-slate-700">{m.interpretacja}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">LTV:CAC benchmarki</h2>
            <div className="space-y-3">
              {ltvcacBenchmarks.map((b, i) => (
                <div key={i} className={`rounded-xl p-4 border-2 ${colorStyle[b.kolor]}`}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono font-bold">{b.ratio}</span>
                    <span className="font-bold">{b.status}</span>
                  </div>
                  <p className="text-sm">{b.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — unit economics</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="unit-economics-co-to" />
      <ContactSection />
    </Layout>
  );
}
