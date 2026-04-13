import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest sales compensation (plan prowizyjny)?",
    answer: "Sales compensation (comp plan, plan wynagrodzenia sprzedażowego) to struktura wynagrodzenia handlowca składająca się z dwóch głównych składowych: Base Salary (stała pensja bazowa, niezależna od wyników) i Variable Compensation (zmienna część, prowizje i bonusy zależne od wyników). Razem tworzą OTE (On-Target Earnings) — całkowite wynagrodzenie jakie handlowiec osiąga przy 100% planu. Dobry comp plan motywuje do właściwych zachowań, jest prosty w obliczeniu i sprawiedliwy. Zły comp plan powoduje gaming (manipulowanie metrykami), sprzedaż złym klientom lub ignorowanie ważnych aktywności które nie są wynagradzane.",
  },
  {
    question: "Jaki powinien być stosunek base do variable?",
    answer: "Stosunek Base:Variable (split) zależy od roli sprzedażowej: SDR (Sales Development Representative) — zazwyczaj 70:30 lub 60:40. SDR ma niższy wpływ na finalne zamknięcie, więc mniejszy variable. SMB AE (Account Executive) — 50:50. Balans między stabilnością a motywacją do zamykania. MM i Enterprise AE — 50:50 lub 60:40 (wyższy base). Dłuższe cykle, większe deale, więcej pracy bez gwarantowanej prowizji. CSM / Customer Success — 70:30 lub 80:20. CS ma mniejszy bezpośredni wpływ na nową sprzedaż. Sales Manager — 70:30. Zarządzanie wymaga stabilności, motywacja przez wyniki zespołu. VP Sales — 50:50 lub 60:40. Wysoka odpowiedzialność za wynik działu.",
  },
  {
    question: "Co to jest accelerator w planie prowizyjnym?",
    answer: "Accelerator (przyspieszacz) to mechanizm w comp planie gdzie stawka prowizji rośnie po przekroczeniu określonego progu quoty. Cel: super-motywowanie top performerów do jak największej sprzedaży ponad plan. Przykład: 0-100% quoty: prowizja 8%. 100-125% quoty: prowizja 12% (accelerator 1.5x). Powyżej 125% quoty: prowizja 18% (accelerator 2x). AE który zamknął 150% planu nie jest 'drogim' kosztem — jest wyjątkowo efektywny. Acceleratory są szczególnie ważne w enterprise sales gdzie kilka wielkich dealów może zdecydować o kwartale. Bez acceleratora po osiągnięciu 100% planu AE może 'odpuścić' — bo po co sprzedawać więcej za tę samą stawkę?",
  },
  {
    question: "Jak unikać błędów w comp planie?",
    answer: "Błędy w comp planach: Zbyt skomplikowany plan — jeśli AE nie może obliczyć swojej prowizji w 30 sekund, plan jest za skomplikowany. Zbyt wiele metryk — więcej niż 2-3 metryki powoduje rozproszenie i gaming. Trzymaj 1-2 primarne metryki. Quota Sandbagging — AE negocjuje niską quotę żeby łatwo ją przekroczyć. Fix: data-driven quota setting oparte na historii i marktetu. Clawback bez wyjątków — odliczanie prowizji za churned klientów demotywuje. Rób clawback tylko w pierwszych 90-180 dniach. Brak acceleratorów — AE osiąga 100% i przestaje się starać. Zmiany planu w mid-quarter — destabilizują i niszczą zaufanie. Zmieniaj plan na początku roku lub kwartału.",
  },
  {
    question: "Jak ustalać quotę (cel sprzedażowy)?",
    answer: "Ustalanie quoty: Bottom-up — biorąc pod uwagę pojemność rynku, długość cyklu i produktywność AE ustalasz realny cel. Top-down — biorąc revenue target i dzieląc przez liczbę AE. Często nierealne bez uwzględnienia ramp time i attrition. Benchmark — quota powinna być na poziomie gdzie 60-70% AE ją osiąga. Jeśli ponad 80% osiąga quotę — quota jest za niska (leaving money on table). Jeśli mniej niż 40% osiąga — quota jest za wysoka (demoralizuje). Ramp quota — nowy AE w pierwszych miesiącach ma niższą quotę (np. 50% w M1-2, 75% w M3-4, 100% od M5+). Quota refresh — co roku weryfikuj quotę na podstawie wyników historycznych i zmian rynkowych.",
  },
];

const compPlanRoles = [
  { rola: "SDR", oteRange: "60-100K PLN OTE", split: "70% base / 30% variable", primaryMetric: "Qualified meetings booked, SQLs", accelerator: "Bonus per konwersja SQL na Closed-Won", kolor: "blue" },
  { rola: "SMB AE", oteRange: "120-200K PLN OTE", split: "50% base / 50% variable", primaryMetric: "ARR/MRR Closed-Won w kwartale", accelerator: "1.5x powyżej 100%, 2x powyżej 125%", kolor: "green" },
  { rola: "MM AE", oteRange: "180-280K PLN OTE", split: "55% base / 45% variable", primaryMetric: "ARR Closed-Won, multi-year deals", accelerator: "Bonus za multi-year, za upsell", kolor: "purple" },
  { rola: "Enterprise AE", oteRange: "250-400K PLN OTE", split: "60% base / 40% variable", primaryMetric: "ARR Closed-Won, logo wins", accelerator: "1.5x powyżej 100%, 2x powyżej 120%", kolor: "orange" },
  { rola: "CSM", oteRange: "100-160K PLN OTE", split: "75% base / 25% variable", primaryMetric: "NRR, Gross Retention, NPS", accelerator: "Bonus za expansion revenue", kolor: "teal" },
];

const quotaFramework = [
  { poziom: "Poniżej 40% AE osiąga quotę", diagnoza: "Quota za wysoka", konsekwencja: "Demoralizacja, wysoka attrition, słaby pipeline", akcja: "Obniż quotę lub popraw onboarding/enablement" },
  { poziom: "40-60% osiąga", diagnoza: "Quota agresywna", konsekwencja: "Presja na wyniki, wysokie ryzyko dla AE", akcja: "Sprawdź czy top performers są OK. Możliwe do utrzymania." },
  { poziom: "60-70% osiąga", diagnoza: "Quota optymalna", konsekwencja: "Właściwy balans motywacji i osiągalności", akcja: "Utrzymaj. To golden zone." },
  { poziom: "Powyżej 80% osiąga", diagnoza: "Quota za niska", konsekwencja: "Zostawiasz pieniądze na stole, acceleratory rzadko się włączają", akcja: "Podnieś quotę na kolejny rok." },
];

export default function BlogSalesCompCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Sales Compensation — jak projektować plan prowizyjny? | Fotz.pl"
        description="Sales compensation plan: OTE, base vs variable split, acceleratory, quota setting i najczęstsze błędy. Jak projektować plany prowizyjne dla AE, SDR i CSM."
        canonicalUrl="https://fotz.pl/blog/sales-compensation-plan-prowizyjny-co-to-jest"

        keywords="Sales Compensation co to jest, Sales Compensation definicja, czym jest Sales Compensation, Sales Compensation w sprzedaży, Sales Compensation strategia, Sales Compensation przykłady, jak używać Sales Compensation"

        canonical="https://fotz.pl/blog/sales-compensation-plan-prowizyjny-co-to-jest"
      />
      <ArticleSchema
        title="Sales Compensation — jak projektować plan prowizyjny?"
        description="Sales compensation: OTE, base/variable split, acceleratory, quota framework i błędy. Plany prowizyjne dla SDR, AE SMB/MM/Enterprise i CSM."
        url="https://fotz.pl/blog/sales-compensation-plan-prowizyjny-co-to-jest"
        datePublished="2024-02-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Sales Compensation", url: "https://fotz.pl/blog/sales-compensation-plan-prowizyjny-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Sales Compensation", href: "/blog/sales-compensation-plan-prowizyjny-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sales Compensation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Plan prowizyjny kształtuje zachowania całego działu sprzedaży.
              Dobrze zaprojektowany motywuje do właściwych działań.
              Źle zaprojektowany sabotuje firmę od środka.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Składowe wynagrodzenia", value: "2 (Base + Var)" },
                { label: "Typowy split AE", value: "50/50" },
                { label: "Złota zona quota", value: "60-70%" },
                { label: "Accelerator 2x", value: "Powyżej 125%" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-orange-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comp plan per rola</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda rola sprzedażowa ma inną strukturę wynagrodzenia dopasowaną
              do jej wpływu na wyniki i długości cyklu sprzedaży.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {compPlanRoles.map((r) => (
              <FadeInView key={r.rola}>
                <div className={`rounded-xl border-2 p-5 ${
                  r.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  r.kolor === "green" ? "border-green-200 bg-green-50" :
                  r.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  r.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`font-bold text-xl ${
                      r.kolor === "blue" ? "text-blue-800" :
                      r.kolor === "green" ? "text-green-800" :
                      r.kolor === "purple" ? "text-purple-800" :
                      r.kolor === "orange" ? "text-orange-800" :
                      "text-teal-800"
                    }`}>{r.rola}</h3>
                    <span className="font-bold text-gray-800 text-sm">{r.oteRange}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div><div className="text-xs font-bold text-gray-500 uppercase mb-1">Split</div><p className="text-gray-700">{r.split}</p></div>
                    <div><div className="text-xs font-bold text-gray-500 uppercase mb-1">Metryka</div><p className="text-gray-700">{r.primaryMetric}</p></div>
                    <div><div className="text-xs font-bold text-gray-500 uppercase mb-1">Accelerator</div><p className="text-gray-700">{r.accelerator}</p></div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Quota framework */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jak czytać wyniki quotowania</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              % AE osiągających quotę to kluczowy wskaźnik zdrowia planu sprzedażowego.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-orange-700 text-white">
                  <th className="text-left px-4 py-3">% AE na quota</th>
                  <th className="text-left px-4 py-3">Diagnoza</th>
                  <th className="text-left px-4 py-3">Konsekwencja</th>
                  <th className="text-left px-4 py-3">Rekomendowana akcja</th>
                </tr>
              </thead>
              <tbody>
                {quotaFramework.map((r, i) => (
                  <tr key={r.poziom} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{r.poziom}</td>
                    <td className="px-4 py-3 text-gray-600">{r.diagnoza}</td>
                    <td className="px-4 py-3 text-gray-600">{r.konsekwencja}</td>
                    <td className="px-4 py-3 text-gray-700">{r.akcja}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <RelatedArticles currentArticleId="sales-compensation-plan-prowizyjny-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
