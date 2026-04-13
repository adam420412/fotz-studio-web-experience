import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Financial Model?",
    answer: "Financial Model (model finansowy) to arkusz kalkulacyjny (zazwyczaj Excel lub Google Sheets) który odwzorowuje finansowe funkcjonowanie firmy — historyczne wyniki i projekcje na przyszłość. Model finansowy łączy ze sobą: Revenue model (skąd pochodzi przychód i jak rośnie), Cost model (jakie są koszty i jak skalują się z biznesem), Cash flow (kiedy firma ma gotówkę a kiedy jej nie ma), P&L (zyski i straty), Balance Sheet (uproszczony). Model finansowy jest niezbędny przy: fundraising (VC chcą zobaczyć jak myślisz o biznesie), board reporting, annual planning, M&A (zarówno po stronie kupującego jak sprzedającego), zarządzaniu firmą.",
  },
  {
    question: "Jakie są główne typy modeli finansowych?",
    answer: "Typy modeli finansowych: Three-Statement Model — połączone P&L, Balance Sheet i Cash Flow Statement. Fundament każdego modelu. Integrated Financial Model — Three-Statement + Revenue Model + Cost Model + KPIs. Używany w startupach i scale-upach. DCF (Discounted Cash Flow) — wycena firmy przez dyskontowanie przyszłych cash flows. Używany przy M&A i fundraising. LBO (Leveraged Buyout) Model — używany przez Private Equity przy wykupach lewarowanych. Merger Model (M&A) — modelowanie efektów przejęcia dwóch firm. Startup/SaaS Model — specyficzny dla SaaS: MRR/ARR waterfall, churn, expansion, cohort analysis, CAC/LTV.",
  },
  {
    question: "Jak zbudować model finansowy dla SaaS startup?",
    answer: "SaaS Financial Model — kluczowe komponenty: Revenue Waterfall — Starting ARR + New ARR + Expansion ARR - Churned ARR = Ending ARR. To serce modelu SaaS. Headcount Plan — ile osób zatrudniasz i kiedy, jaki jest ich koszt. Sales Capacity Model — ilu AE x quota attainment x ramp schedule = sales capacity. Cost Model — S&M (marketing + sales), R&D (engineering + product), G&A (HR, Finance, Legal). Operating Metrics — MRR, ARR, Churn Rate, NRR, CAC, LTV, Magic Number, Rule of 40. Cash Bridge — jak zmienia się gotówka miesiąc po miesiącu. Scenario Analysis — Base, Bull, Bear. Kluczowa zasada: model powinien być driverowy — zmieniasz jeden assumption (np. churn rate) i cały model się przelicza.",
  },
  {
    question: "Jakie assumptions są najważniejsze w modelu SaaS?",
    answer: "Kluczowe assumptions modelu SaaS: Growth Rate — ile % MoM lub YoY rosną przychody. Najważniejszy driver modelu. Churn Rate — logo i revenue churn. Mała zmiana churnu ma ogromny efekt długoterminowy. ACV (Average Contract Value) — jaka jest przeciętna wartość nowego kontraktu. Sales Cycle Length — jak długo od first touch do podpisania. Wpływa na kiedy nowy ARR pojawia się w modelu. Ramp Time — ile czasu nowy AE potrzebuje żeby osiągnąć pełną produktywność. Gross Margin — % przychodu który zostaje po kosztach dostarczenia usługi (hosting, support). CAC — ile kosztuje pozyskanie jednego klienta. Zmiana jednego assumption w izolacji nie mówi nic — modeluj korelacje między nimi.",
  },
  {
    question: "Jak inwestorzy oceniają model finansowy?",
    answer: "Czego VC szuka w modelu finansowym: Spójność assumptions — czy Twój wzrost ARR jest możliwy przy Twoim headcount planie i sales capacity? Rozumienie unit economics — czy wiesz co napędza Twój CAC i LTV? Scenario thinking — czy masz plan B jeśli rzeczy pójdą gorzej? Wrażliwość modelu — co się dzieje gdy churn rośnie o 1%? Realistyczne timing — kiedy osiągasz break-even? Jest to realne przy obecnym burn? Czerwone flagi dla VC: Assumptions bez uzasadnienia ('przychód rośnie 30% MoM bo market jest duży'). Brak downside scenario. Zbyt optymistyczny ramp ('AE od razu na pełnej kwocie'). Nieuwzględnienie sezonowości lub dłuższego sales cycle na Q4.",
  },
];

const modelComponents = [
  {
    komponent: "Revenue Waterfall",
    opis: "Serce modelu SaaS — shows jak ARR zmienia się miesiąc po miesiącu",
    elementy: ["Starting ARR per miesiąc", "New ARR z nowych klientów", "Expansion ARR z upsell/cross-sell", "Churned ARR (logo i revenue churn)", "Ending ARR = Starting + New + Expansion - Churn"],
    kolor: "blue",
  },
  {
    komponent: "Sales Capacity Model",
    opis: "Ile ARR może wygenerować Twój team sprzedaży",
    elementy: ["Headcount plan dla AE po rolach", "Ramp schedule (% produktywności per miesiąc)", "Quota per AE tier (SMB, MM, Enterprise)", "Quota Attainment Rate (% teamu osiągający quota)", "Pipeline Coverage wymagany dla quota"],
    kolor: "green",
  },
  {
    komponent: "Cost Model",
    opis: "Jak skalują się koszty wraz z wzrostem przychodu",
    elementy: ["S&M: Marketing spend + Sales headcount + commissions", "R&D: Engineering + Product headcount", "G&A: HR, Finance, Legal, Facilities", "COGS: Hosting, Support, Customer Success", "% Revenue dla każdej kategorii (benchmarki per stage)"],
    kolor: "purple",
  },
  {
    komponent: "Cash Bridge",
    opis: "Jak zmienia się gotówka — kiedy firma ma cash a kiedy zaczyna go brakować",
    elementy: ["Starting Cash per kwartał", "Cash Inflows (collections od klientów)", "Cash Outflows (wszystkie koszty)", "Net Cash Burn (Outflows - Inflows)", "Ending Cash = Starting + Inflows - Outflows"],
    kolor: "orange",
  },
  {
    komponent: "Operating Metrics Dashboard",
    opis: "Kluczowe metryki SaaS obliczone z modelu",
    elementy: ["ARR i MRR growth rate", "Gross/Net Revenue Retention", "CAC i LTV per channel", "Magic Number (Sales Efficiency)", "Rule of 40 (Growth + Margin)", "Runway (miesięcy do zera gotówki)"],
    kolor: "red",
  },
];

const modelScenarios = [
  { scenariusz: "Bear Case (Downside)", założenia: "50% wolniejszy wzrost ARR, churn +2pp, hiring freeze, rynek się pogarsza", cel: "Ile gotówki potrzebujemy żeby przeżyć recesję? Kiedy musimy podejmować decyzje?", kolor: "red" },
  { scenariusz: "Base Case (Most Likely)", założenia: "Historyczne trendy, realistyczne hiring, 70-80% quota attainment", cel: "Nasz operacyjny plan na który się zarządzamy. To wchodzi do Board Package.", kolor: "blue" },
  { scenariusz: "Bull Case (Upside)", założenia: "Wzrost szybszy niż historycznie, nowe channel works, hiring on schedule", cel: "Jeśli wszystko idzie dobrze — jakiego przyspieszenia możemy oczekiwać?", kolor: "green" },
];

export default function BlogFinancialModelCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Financial Model — co to jest i jak zbudować? | Fotz.pl"
        description="Financial Model (model finansowy) dla SaaS startup — Revenue Waterfall, Sales Capacity, Cash Bridge, scenarios i jak oceniają go inwestorzy. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/financial-model-co-to-jest-saas-startup"

        keywords="Financial Model co to jest, Financial Model definicja, czym jest Financial Model, Financial Model przykłady, jak działa Financial Model, Financial Model znaczenie, Financial Model przewodnik"
      />
      <ArticleSchema
        title="Financial Model — co to jest i jak zbudować?"
        description="Kompletny przewodnik po Financial Model: komponenty SaaS modelu, kluczowe assumptions, scenariusze i red flags dla VC."
        url="https://fotz.pl/blog/financial-model-co-to-jest-saas-startup"
        datePublished="2024-02-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Financial Model", url: "https://fotz.pl/blog/financial-model-co-to-jest-saas-startup" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Financial Model", href: "/blog/financial-model-co-to-jest-saas-startup" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Finanse i Planowanie
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Model
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Financial Model to nie arkusz Excela — to sposób myślenia o biznesie.
              Dobry model pokazuje jak każda decyzja operacyjna przekłada się na cash,
              ARR i runway. To fundament fundraisingu, board reportingu i zarządzania firmą.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Komponentów SaaS modelu", value: "5" },
                { label: "Scenariuszy", value: "Bear/Base/Bull" },
                { label: "Kluczowy komponent", value: "ARR Waterfall" },
                { label: "Narzędzie", value: "Excel / Sheets" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Komponenty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 komponentów SaaS Financial Model</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dobry SaaS model jest driverowy — zmiana jednego assumption przelicza się przez
              cały model. Revenue Waterfall to serce — wszystko inne wynika z niego.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {modelComponents.map((c, i) => (
              <FadeInView key={c.komponent}>
                <div className={`rounded-xl border-2 p-6 ${
                  c.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  c.kolor === "green" ? "border-green-200 bg-green-50" :
                  c.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  c.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-red-200 bg-red-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      c.kolor === "blue" ? "bg-blue-600" :
                      c.kolor === "green" ? "bg-green-600" :
                      c.kolor === "purple" ? "bg-purple-600" :
                      c.kolor === "orange" ? "bg-orange-600" :
                      "bg-red-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-xl mb-2 ${
                        c.kolor === "blue" ? "text-blue-800" :
                        c.kolor === "green" ? "text-green-800" :
                        c.kolor === "purple" ? "text-purple-800" :
                        c.kolor === "orange" ? "text-orange-800" :
                        "text-red-800"
                      }`}>{c.komponent}</h3>
                      <p className="text-gray-600 text-sm mb-3">{c.opis}</p>
                      <ul className="space-y-1">
                        {c.elementy.map((e) => (
                          <li key={e} className="flex gap-2 text-sm text-gray-700">
                            <span className={`flex-shrink-0 ${
                              c.kolor === "blue" ? "text-blue-500" :
                              c.kolor === "green" ? "text-green-500" :
                              c.kolor === "purple" ? "text-purple-500" :
                              c.kolor === "orange" ? "text-orange-500" :
                              "text-red-500"
                            }`}>→</span>
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scenariusze — Bear, Base, Bull</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Jeden model to za mało. Scenariuszowe myślenie przygotowuje Cię na różne
              przyszłości i pokazuje inwestorom że rozumiesz ryzyko. Zarządzaj przez Base,
              monitoruj odchylenia od Bear i Base.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {modelScenarios.map((s) => (
              <FadeInView key={s.scenariusz}>
                <div className={`rounded-xl border-2 p-6 ${
                  s.kolor === "red" ? "border-red-200 bg-red-50" :
                  s.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  "border-green-200 bg-green-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-3 ${
                    s.kolor === "red" ? "text-red-800" :
                    s.kolor === "blue" ? "text-blue-800" :
                    "text-green-800"
                  }`}>{s.scenariusz}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Założenia</div>
                      <p className="text-sm text-gray-700">{s.założenia}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Cel scenariusza</div>
                      <p className="text-sm text-gray-700">{s.cel}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
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

      <ContactSection />
    </Layout>
  );
}
