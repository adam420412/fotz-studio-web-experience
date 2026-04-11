import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest LTV (Customer Lifetime Value)?",
    answer: "LTV (Customer Lifetime Value), znane też jako CLV (Customer Lifetime Value), to całkowita wartość przychodów, którą firma może oczekiwać od jednego klienta przez cały czas jego relacji z firmą. Prosta formuła: LTV = ARPU (średni miesięczny przychód na klienta) / Churn Rate (miesięczny). Dla klienta płacącego 500 PLN/mies. z churn rate 2%/mies.: LTV = 500 / 0.02 = 25 000 PLN.",
  },
  {
    question: "Jaka jest różnica między LTV a CLTV?",
    answer: "LTV i CLTV (Customer Lifetime Value) to synonimy — oba mówią to samo. Różne firmy i konteksty używają różnych skrótów: LTV jest częstszy w branży SaaS i VC, CLV jest preferowany w akademickich i e-commerce kontekstach, CLTV to pełna wersja skrótu. Ważne jest nie mylenie LTV (wartość klienta) z LTR (Long-term Retention) czy LTS (Long-term Support), które mają zupełnie inne znaczenie.",
  },
  {
    question: "Jak obliczyć LTV dla SaaS?",
    answer: "Prosta formuła LTV dla SaaS: LTV = ARPU / Churn Rate (w tej samej jednostce czasowej). Przykład: ARPU = 1000 PLN/mies., Churn = 2,5%/mies. → LTV = 1000 / 0.025 = 40 000 PLN. Bardziej zaawansowana formuła uwzględnia gross margin: LTV = (ARPU × Gross Margin%) / Churn Rate. Dla ARPU 1000, GM 75%, Churn 2,5%: LTV = (1000 × 0.75) / 0.025 = 30 000 PLN — to jest gross profit LTV, bardziej użyteczny przy analizie CAC.",
  },
  {
    question: "Jak zwiększyć LTV klientów?",
    answer: "Strategie wzrostu LTV: redukcja churnu (największy wpływ — każdy punkt procentowy niższy churn dramatycznie wydłuża czas życia klienta), ekspansja przychodów (upsell, cross-sell podnoszą ARPU), poprawienie onboardingu (klienci którzy szybko osiągają value, zostają dłużej), pricing (przejście z monthly na annual billing redukuje churn o 30-50%), lojalność i community (klienci zaangażowani zostają dłużej).",
  },
  {
    question: "Jak interpretować wskaźnik LTV/CAC?",
    answer: "LTV/CAC mierzy efektywność modelu biznesowego: poniżej 1 = tracisz pieniądze na każdym kliencie — model nierentowny. 1–2 = marginalnie opłacalne, za mało buforu na wzrost. 3:1 = minimum dla zdrowego SaaS (VC benchmark). 4–5:1 = bardzo dobry, firma efektywnie alokuje kapitał. Powyżej 5:1 = prawdopodobnie niedoinwestowanie w growth — można agresywniej wydawać na pozyskiwanie. Warto liczyć LTV/CAC osobno per segment (SMB/MM/Enterprise) i per kanał pozyskania.",
  },
];

const ltvFormulas = [
  {
    wariant: "Prosta formuła LTV",
    formuła: "LTV = ARPU / Churn Rate",
    kiedy: "Szybka kalkulacja, porównywalność z benchmarkami",
    ograniczenie: "Zakłada stały ARPU i churn, brak uwzględnienia dyskonta",
    przykład: "ARPU = 800 PLN/mies., Churn = 2%/mies. → LTV = 40 000 PLN",
  },
  {
    wariant: "LTV z Gross Margin",
    formuła: "LTV = (ARPU × Gross Margin%) / Churn Rate",
    kiedy: "Porównanie z CAC (bo CAC jest kosztem, nie przychodem)",
    ograniczenie: "Gross Margin SaaS zazwyczaj 60-85% — ważne dla analizy unit economics",
    przykład: "ARPU = 800, GM = 75%, Churn = 2% → LTV = 30 000 PLN",
  },
  {
    wariant: "Discounted LTV (DCF)",
    formuła: "LTV = Σ (CF_t / (1+r)^t) dla t = 1..N",
    kiedy: "Dokładna analiza finansowa, modele inwestorskie",
    ograniczenie: "Wymaga prognozowania cash flows i wyboru discount rate",
    przykład: "5-letnia projekcja z discount rate 10% — niższa od prostej LTV",
  },
  {
    wariant: "Cohort-based LTV",
    formuła: "LTV = Σ przychodów z kohorty / Rozmiar kohorty",
    kiedy: "Analiza historyczna, kalibracja innych modeli",
    ograniczenie: "Wymaga min. 2-3 lat danych, nie predykcyjna dla nowych kohort",
    przykład: "Kohorta Jan 2022 (100 klientów) wygenerowała 4M PLN → LTV = 40 000 PLN",
  },
];

const churnLtvImpact = [
  { churnMies: "1%", średniCzasŻycia: "100 mies.", ltvPrzyARPU500: "50 000 PLN", ocena: "Excellent" },
  { churnMies: "2%", średniCzasŻycia: "50 mies.", ltvPrzyARPU500: "25 000 PLN", ocena: "Dobry" },
  { churnMies: "3%", średniCzasŻycia: "33 mies.", ltvPrzyARPU500: "16 667 PLN", ocena: "Przeciętny" },
  { churnMies: "5%", średniCzasŻycia: "20 mies.", ltvPrzyARPU500: "10 000 PLN", ocena: "Niepokojący" },
  { churnMies: "8%", średniCzasŻycia: "12.5 mies.", ltvPrzyARPU500: "6 250 PLN", ocena: "Krytyczny" },
  { churnMies: "10%", średniCzasŻycia: "10 mies.", ltvPrzyARPU500: "5 000 PLN", ocena: "Alarmujący" },
];

const ltvStrategies = [
  {
    strategia: "Redukcja churnu",
    wpływ: "Bardzo wysoki",
    opis: "Każdy 1pp niższy churn miesięczny = radykalnie dłuższy średni czas życia klienta. Priorytet #1.",
    działania: ["Poprawa onboardingu", "Customer Health Score", "Proaktywny CS", "Annual billing"],
  },
  {
    strategia: "Expansion Revenue",
    wpływ: "Wysoki",
    opis: "Upsell i cross-sell podnoszą ARPU istniejących klientów, co bezpośrednio zwiększa LTV.",
    działania: ["Land and Expand", "Usage-based pricing", "Add-ons i moduły", "QBR z expansją"],
  },
  {
    strategia: "Annual vs Monthly billing",
    wpływ: "Wysoki",
    opis: "Klienci na rocznych kontraktach mają churn rate 30–50% niższy niż na miesięcznych.",
    działania: ["Rabat za roczną przedpłatę", "Trial-to-annual conversion", "Auto-renewal default"],
  },
  {
    strategia: "Value Realization",
    wpływ: "Średni–Wysoki",
    opis: "Klienci którzy osiągnęli ROI z produktu rzadko odchodzą. Czas do wartości jest kluczowy.",
    działania: ["Onboarding optimization", "Success milestones", "ROI reporting", "Case studies wewnętrzne"],
  },
];

export default function BlogLtvCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="LTV co to jest — Customer Lifetime Value w SaaS | Fotz.pl"
        description="LTV (Customer Lifetime Value) — co to jest, jak obliczyć, wpływ churnu na LTV, formuły i strategie wzrostu wartości życiowej klienta. Kompletny przewodnik SaaS."
        canonicalUrl="https://fotz.pl/blog/ltv-customer-lifetime-value-co-to"
      />
      <ArticleSchema
        title="LTV co to jest — Customer Lifetime Value w SaaS"
        description="Kompletny przewodnik po LTV: definicja, formuły, wpływ churnu i strategie wzrostu wartości życiowej klienta."
        url="https://fotz.pl/blog/ltv-customer-lifetime-value-co-to"
        datePublished="2024-01-28"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "LTV co to jest", url: "https://fotz.pl/blog/ltv-customer-lifetime-value-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "LTV co to jest", href: "/blog/ltv-customer-lifetime-value-co-to" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Unit Economics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              LTV — Customer Lifetime Value
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Ile jest wart jeden klient przez całe życie jego relacji z Twoją firmą?
              LTV to druga strona równania unit economics — kluczowa dla oceny opłacalności modelu SaaS.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-900/50 rounded-xl p-5 border border-purple-700">
                <div className="text-sm text-purple-300 font-semibold mb-2">Prosta formuła</div>
                <div className="text-lg font-mono font-bold text-white">LTV = ARPU / Churn</div>
              </div>
              <div className="bg-purple-900/50 rounded-xl p-5 border border-purple-700">
                <div className="text-sm text-purple-300 font-semibold mb-2">Z Gross Margin</div>
                <div className="text-lg font-mono font-bold text-white">LTV = ARPU × GM / Churn</div>
              </div>
              <div className="bg-purple-900/50 rounded-xl p-5 border border-purple-700">
                <div className="text-sm text-purple-300 font-semibold mb-2">Kluczowy ratio</div>
                <div className="text-lg font-mono font-bold text-white">LTV / CAC ≥ 3:1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formuły LTV */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 formuły obliczania LTV</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Istnieje kilka metod obliczania LTV — od prostych szacunków po zaawansowane modele DCF.
              Wybór zależy od dostępności danych i celu analizy.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {ltvFormulas.map((f, i) => (
              <FadeInView key={f.wariant}>
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 text-purple-700 font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{f.wariant}</h3>
                      <div className="bg-gray-100 rounded-lg px-4 py-2 font-mono text-sm text-gray-800 mb-3">
                        {f.formuła}
                      </div>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-blue-700 uppercase mb-1">Kiedy używać</div>
                          <p className="text-sm text-gray-700">{f.kiedy}</p>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-yellow-700 uppercase mb-1">Ograniczenie</div>
                          <p className="text-sm text-gray-700">{f.ograniczenie}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-green-700 uppercase mb-1">Przykład</div>
                          <p className="text-sm text-gray-700">{f.przykład}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Wpływ churnu na LTV */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wpływ churn rate na LTV</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Churn rate jest największym pojedynczym drivrem LTV. Małe różnice w churn
              mają ogromny wpływ na wartość życiową klienta — przy założeniu ARPU = 500 PLN/mies.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Churn miesięczny</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Średni czas życia klienta</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">LTV (ARPU = 500 PLN)</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Ocena</th>
                </tr>
              </thead>
              <tbody>
                {churnLtvImpact.map((row, i) => (
                  <tr key={row.churnMies} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-mono font-bold text-gray-900 text-sm">{row.churnMies}</td>
                    <td className="px-4 py-3 text-gray-700 text-sm">{row.średniCzasŻycia}</td>
                    <td className="px-4 py-3 font-bold text-purple-700 text-sm">{row.ltvPrzyARPU500}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                        row.ocena === "Excellent" ? "bg-green-100 text-green-800" :
                        row.ocena === "Dobry" ? "bg-blue-100 text-blue-800" :
                        row.ocena === "Przeciętny" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {row.ocena}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategie wzrostu LTV */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategie wzrostu LTV</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Zwiększenie LTV jest możliwe przez działanie na dwa wektory: redukcję churnu
              (wydłużenie czasu życia) i zwiększenie ARPU (ekspansja przychodów).
            </p>
          </FadeInView>
          <div className="space-y-5">
            {ltvStrategies.map((strat) => (
              <FadeInView key={strat.strategia}>
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">{strat.strategia}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                          strat.wpływ === "Bardzo wysoki" ? "bg-green-100 text-green-800" :
                          strat.wpływ === "Wysoki" ? "bg-blue-100 text-blue-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          Wpływ: {strat.wpływ}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{strat.opis}</p>
                      <div className="flex flex-wrap gap-2">
                        {strat.działania.map((d) => (
                          <span key={d} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
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
