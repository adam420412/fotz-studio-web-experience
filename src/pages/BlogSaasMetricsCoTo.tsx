import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Jakie są najważniejsze metryki SaaS?",
    answer:
      "Kluczowe metryki SaaS to: MRR (Monthly Recurring Revenue) i ARR (Annual Recurring Revenue) — podstawa pomiaru wzrostu; Churn Rate — procent klientów rezygnujących miesięcznie; NRR (Net Revenue Retention) — czy istniejące konta generują więcej przychodów przez czas; LTV (Lifetime Value) — całkowita wartość klienta; CAC (Customer Acquisition Cost) — koszt pozyskania; LTV/CAC ratio — efektywność biznesu; Activation Rate i Retention Rate.",
  },
  {
    question: "Co to jest ARR i MRR?",
    answer:
      "MRR (Monthly Recurring Revenue) to miesięczny przychód powtarzalny — suma wszystkich aktywnych subskrypcji w danym miesiącu. ARR (Annual Recurring Revenue) = MRR × 12. Obie metryki wykluczają jednorazowe opłaty (setup fees, konsulting). MRR dzieli się na: New MRR (nowi klienci), Expansion MRR (upsell/cross-sell), Churned MRR (rezygnacje), Contraction MRR (downgrade). Net MRR Growth = New + Expansion − Churned − Contraction.",
  },
  {
    question: "Jaki powinien być LTV/CAC ratio?",
    answer:
      "Zdrowy LTV/CAC ratio dla SaaS to minimum 3:1 — klient jest wart 3× więcej niż koszt jego pozyskania. Poniżej 1:1 — biznes traci na każdym kliencie. 1:1 do 3:1 — marginalny lub negatywny biznes (za dużo na akwizycję). Powyżej 3:1 — zdrowy biznes. Powyżej 5:1 — możliwe niedoinwestowanie w akwizycję (można rosnąć szybciej). Payback period (czas zwrotu CAC) powinien być poniżej 12 miesięcy dla SaaS B2C, poniżej 18 dla B2B.",
  },
  {
    question: "Co to jest Net Revenue Retention (NRR)?",
    answer:
      "NRR (Net Revenue Retention) mierzy jak zmieniają się przychody od istniejących klientów przez czas, uwzględniając expansion (upsell, cross-sell) i churn/downgrade. Wzór: NRR = (MRR z poprzedniego okresu + Expansion MRR − Churned MRR − Contraction MRR) / MRR z poprzedniego okresu × 100. NRR powyżej 100% oznacza, że firma rośnie nawet bez nowych klientów. Najlepsze SaaS firmy osiągają NRR 120–150%.",
  },
  {
    question: "Jak obliczyć CAC w SaaS?",
    answer:
      "CAC (Customer Acquisition Cost) = Całkowite koszty sprzedaży i marketingu / Liczba nowych klientów pozyskanych w tym samym okresie. Uwzględnij: wynagrodzenia sales i marketing, narzędzia, reklamy, eventy, agency fees. Dziel CAC na kanały — CAC z organic vs. paid vs. events może się drastycznie różnić. Benchmark: CAC powinien zwrócić się w ciągu 12–18 miesięcy (CAC Payback Period = CAC / ARPU miesięczne).",
  },
];

const saasMetrics = [
  { metryka: "MRR (Monthly Recurring Revenue)", wzór: "Suma aktywnych subskrypcji × miesięczna opłata", co_mierzy: "Bieżący miesięczny przychód powtarzalny", target: "Wzrost MoM powyżej 15–20% (wczesna faza SaaS)" },
  { metryka: "ARR (Annual Recurring Revenue)", wzór: "MRR × 12", co_mierzy: "Roczny przychód powtarzalny — główna metryka dla inwestorów", target: "1M ARR = milestone Seed. 10M ARR = milestone Series A" },
  { metryka: "Churn Rate", wzór: "(Utraceni klienci / Klienci na początku) × 100", co_mierzy: "Procent klientów rezygnujących miesięcznie", target: "Poniżej 2% MoM dla B2B, poniżej 5% dla B2C" },
  { metryka: "NRR (Net Revenue Retention)", wzór: "(MRR końcowy bez nowych klientów / MRR początkowy) × 100", co_mierzy: "Wzrost/spadek przychodów od istniejących klientów", target: "Powyżej 100% (najlepsze SaaS: 120–150%)" },
  { metryka: "LTV (Lifetime Value)", wzór: "ARPU / Churn Rate miesięczny LUB ARPU × Avg. Lifetime", co_mierzy: "Całkowita wartość klienta przez cały czas relacji", target: "LTV/CAC powyżej 3:1" },
  { metryka: "CAC (Customer Acquisition Cost)", wzór: "Koszty S&M / Liczba nowych klientów", co_mierzy: "Koszt pozyskania jednego klienta", target: "CAC Payback Period poniżej 12–18 miesięcy" },
  { metryka: "Activation Rate", wzór: "Użytkownicy którzy ukończyli onboarding / Nowi użytkownicy × 100", co_mierzy: "Procent nowych użytkowników osiągających pierwszą wartość", target: "Powyżej 40–60% zależnie od złożoności produktu" },
  { metryka: "DAU/MAU Ratio", wzór: "Daily Active Users / Monthly Active Users × 100", co_mierzy: "Jak regularnie użytkownicy korzystają z produktu", target: "Powyżej 20% = sticky product. Powyżej 50% = habit-forming" },
];

const mrrBreakdown = [
  { typ: "New MRR", opis: "Przychody od nowych klientów pozyskanych w danym miesiącu", wpływ: "Pozytywny", przykład: "5 nowych klientów × $200/mies. = +$1000 New MRR" },
  { typ: "Expansion MRR", opis: "Wzrost przychodów od istniejących klientów przez upsell lub cross-sell", wpływ: "Pozytywny", przykład: "3 klientów upgrade z $200 na $400 = +$600 Expansion MRR" },
  { typ: "Churned MRR", opis: "Utracone przychody z klientów którzy zrezygnowali z subskrypcji", wpływ: "Negatywny", przykład: "2 klientów po $200 odeszło = -$400 Churned MRR" },
  { typ: "Contraction MRR", opis: "Zmniejszone przychody od klientów którzy przeszli na niższy plan (downgrade)", wpływ: "Negatywny", przykład: "1 klient downgrade z $400 do $200 = -$200 Contraction MRR" },
  { typ: "Reactivation MRR", opis: "Przychody od klientów którzy wrócili po uprzedniej rezygnacji", wpływ: "Pozytywny", przykład: "1 churned klient wróci po 3 miesiącach = +$200 Reactivation MRR" },
];

export default function BlogSaasMetricsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Metryki SaaS — co to jest? MRR, ARR, LTV, CAC, Churn Rate i NRR"
        description="Metryki SaaS — definicje MRR, ARR, Churn Rate, NRR, LTV, CAC i Activation Rate. Jak obliczać, benchmarki i rozbicie MRR (New, Expansion, Churned). Przewodnik."
        canonicalUrl="https://fotz.pl/blog/saas-metrics-co-to"

        keywords="Metryki SaaS co to jest, Metryki SaaS definicja, czym jest Metryki SaaS, Metryki SaaS startup, Metryki SaaS jak liczyć, Metryki SaaS wzór, Metryki SaaS przykłady"
      />
      <ArticleSchema
        title="Metryki SaaS — co to jest i jak je mierzyć?"
        description="Kompletny przewodnik po metrykach SaaS: MRR, ARR, Churn Rate, NRR, LTV/CAC, Activation Rate — definicje, wzory i benchmarki."
        url="https://fotz.pl/blog/saas-metrics-co-to"
        datePublished="2024-01-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Metryki SaaS", url: "https://fotz.pl/blog/saas-metrics-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Metryki SaaS" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Metryki SaaS — MRR, ARR, Churn Rate, LTV, CAC i NRR
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Metryki SaaS to język wzrostu biznesu subskrypcyjnego.
            Poznaj 8 kluczowych metryk, wzory, benchmarki i jak rozumieć rozbicie MRR.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym są metryki SaaS?</h2>
            <p className="text-lg text-slate-700 mb-4">
              Biznes SaaS (Software as a Service) różni się od tradycyjnych firm modelem przychodów —
              zamiast jednorazowej sprzedaży, przychody są powtarzalne i subskrypcyjne.
              Wymaga to innego zestawu metryk niż tradycyjny biznes. <strong>Metryki SaaS</strong>
              mierzą zdrowie modelu subskrypcyjnego — wzrost, retencję, efektywność akwizycji
              i wartość życiową klienta.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              David Skok (Matrix Partners) udowodnił że większość SaaS startupów nie upada
              z powodu braku produktu — upada z powodu "śmierci przez dławienie" gdy CAC
              rośnie szybciej niż LTV. Regularne śledzenie metryk to system wczesnego ostrzegania.
            </p>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">8 kluczowych metryk SaaS</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Metryka</th>
                    <th className="p-3 text-left">Wzór</th>
                    <th className="p-3 text-left">Co mierzy</th>
                    <th className="p-3 text-left">Target/Benchmark</th>
                  </tr>
                </thead>
                <tbody>
                  {saasMetrics.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-blue-700 text-sm">{row.metryka}</td>
                      <td className="p-3 text-slate-600 text-xs font-mono">{row.wzór}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.co_mierzy}</td>
                      <td className="p-3 text-green-700 text-sm font-medium">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 składowych MRR — rozbicie przychodów</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {mrrBreakdown.map((m, i) => (
                <div key={i} className={`rounded-xl p-6 border ${m.wpływ === 'Pozytywny' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-lg font-bold ${m.wpływ === 'Pozytywny' ? 'text-green-600' : 'text-red-600'}`}>{m.wpływ === 'Pozytywny' ? '↑' : '↓'}</span>
                    <h3 className="font-bold text-slate-900">{m.typ}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{m.opis}</p>
                  <p className="text-xs italic text-slate-500">{m.przykład}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — metryki SaaS</h2>
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

      <ContactSection />
    </Layout>
  );
}
