import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Customer Lifetime Value (CLV/LTV)?",
    answer:
      "Customer Lifetime Value (CLV lub LTV — Lifetime Value) to prognozowana suma przychodów, które firma uzyska od jednego klienta przez cały okres trwania relacji. CLV odpowiada na pytanie: ile jest wart klient dla firmy długoterminowo? CLV to fundamentalna metryka do decyzji o budżetach akwizycji (CAC), segmentacji klientów i strategii retencji. Im wyższy CLV, tym więcej możesz wydać na pozyskanie klienta.",
  },
  {
    question: "Jak obliczyć Customer Lifetime Value?",
    answer:
      "Prosta formuła CLV: CLV = (Średni przychód na transakcję) × (Liczba transakcji rocznie) × (Czas trwania relacji w latach). Bardziej zaawansowana: CLV = (ARPU / Churn Rate). Dla SaaS: CLV = MRR per customer / Monthly Churn Rate. Przykład: ARPU = 100 zł/miesiąc, churn = 5%/miesiąc → CLV = 100/0.05 = 2000 zł. Uwzględnij gross margin by uzyskać CLV netto.",
  },
  {
    question: "Jaki jest dobry stosunek LTV do CAC?",
    answer:
      "Benchmark LTV:CAC ratio: Poniżej 1:1 — tracisz pieniądze na każdym kliencie. 1:1 do 3:1 — warunkowa rentowność, potrzeba optymalizacji. 3:1 i powyżej — zdrowy biznes. Powyżej 5:1 — możliwe niedoinwestowanie w akwizycję. Złota zasada dla SaaS: LTV:CAC powyżej 3:1 i payback period (zwrot CAC) poniżej 12 miesięcy. Najlepsze firmy SaaS osiągają LTV:CAC powyżej 5:1.",
  },
  {
    question: "Czym różni się CLV historyczny od predykcyjnego?",
    answer:
      "CLV historyczny (realized CLV) — obliczony na podstawie rzeczywistych danych o zakupach danego klienta do tej pory. Przydatny do segmentacji obecnych klientów i analizy kohort. CLV predykcyjny (predictive CLV) — model statystyczny przewidujący przyszłe zachowania zakupowe na podstawie danych historycznych, wzorców zakupowych, cech demograficznych i behawioralnych. Predictive CLV używają zaawansowane firmy do personalizacji ofert i proaktywnej retencji.",
  },
  {
    question: "Jak zwiększyć Customer Lifetime Value?",
    answer:
      "Strategie zwiększania CLV: Retencja (obniżenie churn rate — 5% redukcja churn może zwiększyć CLV o 25-95%), Expansion Revenue (upsell, cross-sell, add-ons), Frequency (zwiększenie liczby transakcji — loyalty programs, subscriptions), AOV (zwiększenie wartości koszyka — bundling, premium tiers), NPS i satysfakcja (zadowolony klient kupuje dłużej). Retencja jest zwykle 5-7× tańsza niż akwizycja nowych klientów.",
  },
];

const ltvFormulas = [
  {
    nazwa: "Prosta formuła",
    wzór: "CLV = ARPU × Gross Margin % / Churn Rate",
    przykład: "ARPU = 200 zł, GM = 80%, Churn = 4%/mies. → CLV = 200 × 0.8 / 0.04 = 4 000 zł",
    zastosowanie: "SaaS, modele subskrypcyjne",
  },
  {
    nazwa: "Formuła transakcyjna",
    wzór: "CLV = AOV × Purchase Frequency × Customer Lifespan",
    przykład: "AOV = 150 zł, 4 zakupy/rok, 3 lata → CLV = 150 × 4 × 3 = 1 800 zł",
    zastosowanie: "E-commerce, retail, usługi",
  },
  {
    nazwa: "Formuła z dyskontem (DCF)",
    wzór: "CLV = Σ (Margin_t / (1+d)^t) gdzie d = discount rate",
    przykład: "Uwzględnia wartość pieniądza w czasie — cash dziś jest wart więcej niż za rok",
    zastosowanie: "Zaawansowane finanse, wyceny firm",
  },
];

const ltvDrivers = [
  { driver: "Average Order Value (AOV)", wpływ: "Wysoki", jak: "Upsell, bundling, premium tiers, darmowa dostawa od kwoty X" },
  { driver: "Purchase Frequency", wpływ: "Wysoki", jak: "Loyalty programs, email remarketing, subscriptions, notifications" },
  { driver: "Customer Lifespan / Retention", wpływ: "Bardzo wysoki", jak: "Onboarding excellence, NPS program, proaktywna obsługa, kontrakty roczne" },
  { driver: "Gross Margin", wpływ: "Wysoki", jak: "Optymalizacja kosztów, pricing strategy, premium positioning" },
  { driver: "Expansion Revenue", wpływ: "Średni-wysoki", jak: "Cross-sell, upsell po osiągnięciu pierwszego sukcesu, add-ons" },
  { driver: "Referrals / Viral", wpływ: "Średni", jak: "Program poleceń obniżający CAC dla kolejnych klientów" },
];

const ltvSegments = [
  { segment: "Champions (wysokie CLV, aktywni)", opis: "Najlepsi klienci — kupują często, wydają dużo, polecają", strategia: "VIP treatment, early access, brand ambassadors, feedback loop" },
  { segment: "Loyal (wysokie CLV, stabilni)", opis: "Regularni klienci z umiarkowanym spend", strategia: "Loyalty rewards, upsell okazje, exclusives dla stałych klientów" },
  { segment: "At-Risk (historycznie wysokie CLV, malejąca aktywność)", opis: "Wartościowi klienci pokazujący sygnały churnu", strategia: "Win-back campaigns, personalized re-engagement, CS proactive outreach" },
  { segment: "New (niska historia, potencjał)", opis: "Nowi klienci — CLV jeszcze nieznane", strategia: "Onboarding focus, early value delivery, habit formation" },
  { segment: "Low Value (niskie CLV, stabilne)", opis: "Klienci generujący mały przychód", strategia: "Automated low-touch, self-service, ewentualne oferty upgrade" },
];

export default function BlogCustomerLtvCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Customer Lifetime Value — co to jest? CLV LTV obliczanie i wzory"
        description="Customer Lifetime Value (CLV/LTV) — definicja, 3 wzory obliczania, stosunek LTV:CAC, 6 driverów wzrostu i segmentacja klientów według CLV. Kompletny przewodnik."
        canonical="https://fotz.pl/blog/customer-ltv-co-to"

        keywords="Customer Lifetime Value co to jest, Customer Lifetime Value definicja, czym jest Customer Lifetime Value, Customer Lifetime Value startup, Customer Lifetime Value jak liczyć, Customer Lifetime Value wzór, Customer Lifetime Value przykłady"

        canonical="https://fotz.pl/blog/customer-ltv-co-to"
      />
      <ArticleSchema
        title="Customer Lifetime Value — co to jest i jak obliczać CLV?"
        description="Kompletny przewodnik po Customer Lifetime Value: 3 formuły, benchmark LTV:CAC, 6 driverów wzrostu i segmentacja klientów."
        url="https://fotz.pl/blog/customer-ltv-co-to"
        datePublished="2024-01-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Customer Lifetime Value", url: "https://fotz.pl/blog/customer-ltv-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Customer Lifetime Value", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Customer Lifetime Value — co to jest i jak obliczać?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            CLV to najważniejsza metryka decyzji o budżetach marketingowych i retencji.
            Poznaj 3 wzory, benchmark LTV:CAC i jak segmentować klientów według wartości.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Customer Lifetime Value?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Customer Lifetime Value (CLV)</strong> mówi ile jest wart jeden klient
              przez cały czas trwania relacji z firmą. To fundamentalna metryka odpowiadająca
              na pytanie: ile możemy wydać na pozyskanie klienta by biznes był rentowny?
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Firmy bez znajomości CLV często przepłacają za akwizycję (CAC zbyt wysoki) lub
              niedoinwestowują w retencję. Znajomość CLV pozwala podejmować racjonalne
              decyzje o budżetach marketingowych, kanałach akwizycji i inwestycjach w obsługę.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "3:1", opis: "minimalny benchmark LTV:CAC dla zdrowego biznesu SaaS — poniżej oznacza problemy z unit economics" },
                { stat: "5-7×", opis: "retencja klienta jest tańsza niż akwizycja nowego — dlatego CLV premiuje inwestycje w lojalność" },
                { stat: "25-95%", opis: "wzrost CLV przy 5% redukcji churn rate — efekt kompoundowania relacji z klientem" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 formuły obliczania CLV</h2>
            <div className="space-y-4">
              {ltvFormulas.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{f.nazwa}</h3>
                  <div className="bg-blue-50 rounded-lg p-3 mb-3 font-mono text-sm text-blue-800">{f.wzór}</div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                      <p className="text-slate-700">{f.przykład}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-3">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Zastosowanie:</p>
                      <p className="text-orange-800">{f.zastosowanie}</p>
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 driverów wzrostu CLV</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Driver</th>
                    <th className="p-3 text-left">Wpływ na CLV</th>
                    <th className="p-3 text-left">Jak zwiększać</th>
                  </tr>
                </thead>
                <tbody>
                  {ltvDrivers.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-blue-700">{row.driver}</td>
                      <td className="p-3">
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${
                          row.wpływ === "Bardzo wysoki" ? "bg-red-100 text-red-700" :
                          row.wpływ === "Wysoki" ? "bg-orange-100 text-orange-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>{row.wpływ}</span>
                      </td>
                      <td className="p-3 text-slate-600 text-sm">{row.jak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Segmentacja klientów według CLV</h2>
            <div className="space-y-4">
              {ltvSegments.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">{s.segment}</h3>
                  <p className="text-slate-600 text-sm mb-2">{s.opis}</p>
                  <p className="text-xs text-blue-600 font-semibold">Strategia: {s.strategia}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Customer Lifetime Value</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="customer-ltv-co-to" />
      <ContactSection />
    </Layout>
  );
}
