import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest strategia Land and Expand?",
    answer: "Land and Expand to strategia wzrostu przychodów polegająca na pozyskaniu klienta z małym, łatwym do zatwierdzenia kontraktem (Land), głębokiej adopcji produktu, a następnie systematycznym rozszerzaniu kontraktu na więcej użytkowników, działów lub produktów (Expand). Strategia jest szczególnie efektywna w SaaS B2B, gdzie próg wejścia jest niski, ale wartość życiowa klienta bardzo wysoka.",
  },
  {
    question: "Czym jest Net Revenue Retention (NRR)?",
    answer: "Net Revenue Retention (NRR), zwane też Net Dollar Retention (NDR), mierzy ile przychodów z istniejącej bazy klientów na początku okresu (roku/kwartału) zostało po jego zakończeniu — uwzględniając ekspansję (upsell/cross-sell) i churn/kontrakcję. NRR powyżej 100% oznacza, że firma rośnie bez pozyskiwania ani jednego nowego klienta. NRR powyżej 130% jest uważane za best-in-class.",
  },
  {
    question: "Jak Land and Expand różni się od tradycyjnej sprzedaży?",
    answer: "Tradycyjna sprzedaż stara się maksymalizować wartość pierwszego kontraktu. Land and Expand celowo akceptuje mniejszy deal na wejściu, bo wie, że ekspansja przyniesie wielokrotnie wyższe przychody. Wymaga to ścisłej współpracy między Sales (Land) a Customer Success (Adopt + Expand) i produktu, który naturalnie skaluje się z rosnącym użyciem.",
  },
  {
    question: "Jakie modele cenowe najlepiej wspierają Land and Expand?",
    answer: "Per-seat pricing (cena za użytkownika) i usage-based pricing (cena za zużycie) naturalnie wspierają ekspansję. Per-seat rośnie wraz z adopcją w organizacji. Usage-based rośnie wraz z wartością dostarczaną przez produkt. Modele flat-fee (jedna cena dla wszystkich) są trudniejsze do ekspansji — wymagają renegocjacji kontraktu zamiast naturalnego wzrostu.",
  },
  {
    question: "Kto powinien być odpowiedzialny za Expand — Sales czy Customer Success?",
    answer: "Zależy od organizacji i złożoności transakcji. Przy prostszych, niższych expansions (dodanie userów) — CSM może prowadzić samodzielnie. Przy większych expansions (nowy moduł, nowy dział, enterprise deal) — CS identyfikuje okazję i kwalifikuje, a Account Executive lub Sales zamyka. Kluczowe jest jasne zdefiniowanie handoff procesu i wspólnych incentive'ów (commission sharing).",
  },
];

const landExpandPhases = [
  {
    faza: "Land",
    ikona: "🎯",
    kolor: "blue",
    opis: "Pozyskanie pierwszego kontraktu — często mały pilot, jeden team lub ograniczone use case",
    cele: [
      "Zamknąć deal z niskim progiem wejścia (POC, pilot, małe wdrożenie)",
      "Zidentyfikować Economic Buyer i Champion",
      "Udowodnić wartość w ciągu 30–90 dni (szybkie Time-to-Value)",
      "Zidentyfikować przypadki użycia dla ekspansji",
    ],
    kpi: ["ACV pierwszego kontraktu", "Time-to-signature", "Rozmiar pilota (seats/units)", "ICP fit score"],
  },
  {
    faza: "Adopt",
    ikona: "🌱",
    kolor: "green",
    opis: "Głęboka adopcja produktu przez użytkowników — fundament każdej ekspansji",
    cele: [
      "Osiągnąć wysoki Feature Adoption Rate (kluczowe funkcje)",
      "Doprowadzić do pierwszego aha moment dla użytkowników",
      "Zbudować wewnętrznych ambasadorów produktu",
      "Monitorować Customer Health Score i interweniować przy spadkach",
    ],
    kpi: ["DAU/MAU ratio", "Feature adoption %", "Time-to-value", "NPS score"],
  },
  {
    faza: "Expand",
    ikona: "📈",
    kolor: "purple",
    opis: "Rozszerzenie kontraktu — więcej użytkowników, teamów, produktów lub use cases",
    cele: [
      "Zidentyfikować naturalny trigger do ekspansji (nowy team, nowy projekt, osiągnięty limit)",
      "Przeprowadzić QBR potwierdzający ROI",
      "Prezentować nowe moduły/use cases z ROI case study",
      "Uzyskać referencje i case study do nowych departamentów",
    ],
    kpi: ["Net Revenue Retention (NRR)", "Expansion MRR", "Liczba teamów/działów", "Liczba aktywnych produktów"],
  },
];

const expansionMotions = [
  {
    ruch: "User-based expansion",
    opis: "Wzrost liczby licencji/seats wraz ze wzrostem użycia",
    trigger: "Osiągnięcie limitu seat, onboarding nowego pracownika",
    przykład: "Slack: od 5 do 500 użytkowników w firmie w ciągu roku",
    model: "Per-seat pricing",
  },
  {
    ruch: "Usage-based expansion",
    opis: "Wyższe rachunki wraz ze wzrostem zużycia zasobów",
    trigger: "Przekroczenie wolumenu API calls, danych, transakcji",
    przykład: "AWS: start od 100 PLN/mies., wzrost do 50 tys./mies. wraz ze skalą",
    model: "Consumption pricing",
  },
  {
    ruch: "Product expansion",
    opis: "Cross-sell nowych modułów lub produktów z portfolio",
    trigger: "Sukces z core product, nowe pain points, nowe projekty",
    przykład: "HubSpot: Marketing Hub → Sales Hub → Service Hub → CMS",
    model: "Modular pricing",
  },
  {
    ruch: "Departmental expansion",
    opis: "Rozszerzenie z jednego działu do kolejnych jednostek biznesowych",
    trigger: "Wewnętrzny champion promuje narzędzie w organizacji",
    przykład: "Salesforce: sprzedaż → marketing → obsługa klienta → IT",
    model: "Enterprise licensing",
  },
  {
    ruch: "Geographic expansion",
    opis: "Wdrożenie w nowych krajach lub regionach tej samej organizacji",
    trigger: "Sukces w HQ, nowe biura regionalne lub akwizycja",
    przykład: "Narzędzie HRowe: Polska → DACH → UK → APAC",
    model: "Regional licensing",
  },
];

const nrrBenchmarks = [
  {
    kategoria: "Best-in-class SaaS",
    nrr: "powyżej 130%",
    interpretacja: "Na każde 100 PLN ARR rok temu, dziś masz 130+ z samych istniejących klientów",
    przykłady: "Snowflake, Datadog, Twilio (na szczycie wzrostu)",
    kolor: "green",
  },
  {
    kategoria: "Dobry SaaS",
    nrr: "110–130%",
    interpretacja: "Ekspansja nadrabia churn z nawiązką — zdrowy wzrost bez akwizycji",
    przykłady: "Większość topowych B2B SaaS",
    kolor: "blue",
  },
  {
    kategoria: "Neutralny",
    nrr: "100–110%",
    interpretacja: "Ekspansja barely covers churn — brak pracy growth engine z bazy",
    przykłady: "Dojrzałe, wolno rosnące SaaS",
    kolor: "yellow",
  },
  {
    kategoria: "Niepokojący",
    nrr: "poniżej 100%",
    interpretacja: "Churn przewyższa ekspansję — baza klientów kurczy się w ARR",
    przykłady: "Produkt z problemami retencji lub niedopasowaniem ICP",
    kolor: "red",
  },
];

const landExpandPlaybook = [
  {
    krok: "1. Zdefiniuj ICP dla pilotów",
    opis: "Land jest skuteczny tylko gdy piloty trafiają do klientów z wysokim potencjałem ekspansji. Zdefiniuj idealne firmy: rozmiar, branża, tech stack, growth rate.",
    narzędzia: ["ICP scoring model", "Firmographic data", "Intent signals"],
  },
  {
    krok: "2. Ustaw niską barierę wejścia",
    opis: "Pilot powinien być łatwy do zatwierdzenia budżetowo i operacyjnie. Ograniczony zakres, krótki czas, jasne kryteria sukcesu.",
    narzędzia: ["Pilot playbook", "Success criteria template", "ROI calculator"],
  },
  {
    krok: "3. Obsesja na Time-to-Value",
    opis: "Pierwsza wartość musi przyjść w ciągu 30–90 dni. CSM i SE powinni aktywnie prowadzić onboarding, nie czekać na klienta.",
    narzędzia: ["Onboarding checklist", "Health Score monitoring", "Weekly check-ins"],
  },
  {
    krok: "4. Identyfikuj expansion triggers",
    opis: "Systemowo monitoruj sygnały gotowości do ekspansji: nowe projekty, nowe teamy, zmiana roli championa, osiągnięcie limitu.",
    narzędzia: ["Product usage alerts", "CRM triggers", "LinkedIn monitoring"],
  },
  {
    krok: "5. QBR jako wehikuł ekspansji",
    opis: "Kwartalny przegląd biznesowy to naturalna okazja do prezentacji ROI i dyskusji o kolejnych krokach. Zawsze kończ QBR z agendą na następny kwartał.",
    narzędzia: ["QBR deck template", "ROI calculator", "Roadmap prezentacja"],
  },
  {
    krok: "6. Mierz NRR per segment",
    opis: "Net Revenue Retention mierz oddzielnie dla różnych segmentów (SMB, Mid-Market, Enterprise) aby zrozumieć, gdzie strategia działa najlepiej.",
    narzędzia: ["Revenue analytics", "Cohort analysis", "Segment NRR dashboard"],
  },
];

export default function BlogLandAndExpandCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Land and Expand — strategia wzrostu SaaS B2B | Fotz.pl"
        description="Land and Expand — kompletny przewodnik po strategii wzrostu w SaaS B2B: fazy, motion ekspansji, NRR benchmarks i playbook dla CS i Sales teamów."
        canonical="https://fotz.pl/blog/land-and-expand-strategia"

        keywords="Land and Expand co to jest, Land and Expand definicja, czym jest Land and Expand, Land and Expand startup, Land and Expand jak liczyć, Land and Expand wzór, Land and Expand przykłady"
      />
      <ArticleSchema
        title="Land and Expand — strategia wzrostu SaaS B2B"
        description="Kompletny przewodnik po strategii Land and Expand: fazy, expansion motions i NRR benchmarks."
        url="https://fotz.pl/blog/land-and-expand-strategia"
        datePublished="2024-01-25"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Land and Expand", url: "https://fotz.pl/blog/land-and-expand-strategia" },
        ]}/>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Land and Expand", url: "/blog/land-and-expand-strategia" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Strategia SaaS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Land and Expand
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Strategia, dzięki której najlepsze firmy SaaS rosną bez zwiększania budżetu na akwizycję.
              Wejdź małym kontraktem, dostarcz wartość, rozszerz — i powtarzaj.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Fazy strategii", value: "3" },
                { label: "Expansion motions", value: "5" },
                { label: "NRR best-in-class", value: "130%+" },
                { label: "Kluczowa metryka", value: "NRR" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fazy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trzy fazy Land and Expand</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Strategia składa się z trzech sekwencyjnych faz. Każda ma własne cele, KPI i wymagane działania.
              Błędem jest przeskakiwanie do Expand bez solidnego fundamentu adopcji.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {landExpandPhases.map((faza) => (
              <FadeInView key={faza.faza}>
                <div className={`rounded-xl border-2 p-6 h-full ${
                  faza.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  faza.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <div className="text-4xl mb-3">{faza.ikona}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    faza.kolor === "blue" ? "text-blue-800" :
                    faza.kolor === "green" ? "text-green-800" :
                    "text-purple-800"
                  }`}>
                    {faza.faza}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{faza.opis}</p>
                  <div className="mb-4">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Kluczowe cele</div>
                    <ul className="space-y-1">
                      {faza.cele.map((cel, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-green-500 flex-shrink-0">✓</span>
                          {cel}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">KPI</div>
                    <div className="flex flex-wrap gap-1">
                      {faza.kpi.map((kpi) => (
                        <span key={kpi} className={`text-xs px-2 py-1 rounded-full ${
                          faza.kolor === "blue" ? "bg-blue-200 text-blue-800" :
                          faza.kolor === "green" ? "bg-green-200 text-green-800" :
                          "bg-purple-200 text-purple-800"
                        }`}>
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Motions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 typów expansion motions</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ekspansja może przybierać różne formy. Najlepsze firmy SaaS stosują kilka równoległych
              motion, by maksymalizować NRR z bazy klientów.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Typ ekspansji</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Opis</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Trigger</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Model cenowy</th>
                </tr>
              </thead>
              <tbody>
                {expansionMotions.map((motion, i) => (
                  <tr key={motion.ruch} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-4 font-semibold text-gray-900 text-sm">{motion.ruch}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">
                      <div>{motion.opis}</div>
                      <div className="text-xs text-gray-400 mt-1 italic">{motion.przykład}</div>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{motion.trigger}</td>
                    <td className="px-4 py-4">
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-medium">
                        {motion.model}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NRR Benchmarks */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Net Revenue Retention — benchmarki</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              NRR jest kluczową metryką mierzącą sukces strategii Land and Expand.
              Pokazuje, czy ekspansja przewyższa churn w istniejącej bazie klientów.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {nrrBenchmarks.map((bench) => (
              <FadeInView key={bench.kategoria}>
                <div className={`rounded-xl p-6 border-2 ${
                  bench.kolor === "green" ? "border-green-300 bg-green-50" :
                  bench.kolor === "blue" ? "border-blue-300 bg-blue-50" :
                  bench.kolor === "yellow" ? "border-yellow-300 bg-yellow-50" :
                  "border-red-300 bg-red-50"
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-bold ${
                      bench.kolor === "green" ? "text-green-800" :
                      bench.kolor === "blue" ? "text-blue-800" :
                      bench.kolor === "yellow" ? "text-yellow-800" :
                      "text-red-800"
                    }`}>
                      {bench.kategoria}
                    </h3>
                    <span className={`text-xl font-bold ${
                      bench.kolor === "green" ? "text-green-600" :
                      bench.kolor === "blue" ? "text-blue-600" :
                      bench.kolor === "yellow" ? "text-yellow-600" :
                      "text-red-600"
                    }`}>
                      {bench.nrr}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{bench.interpretacja}</p>
                  <p className="text-xs text-gray-500 italic">{bench.przykłady}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Playbook Land and Expand — 6 kroków</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wdrożenie strategii wymaga zmian w procesach, metrykach i kulturze organizacyjnej.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {landExpandPlaybook.map((krok, i) => (
              <FadeInView key={krok.krok}>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex gap-4">
                    <div className="bg-indigo-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{krok.krok}</h3>
                      <p className="text-gray-600 text-sm mb-3">{krok.opis}</p>
                      <div className="flex flex-wrap gap-2">
                        {krok.narzędzia.map((n) => (
                          <span key={n} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded">
                            {n}
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

      <RelatedArticles currentArticleId="land-and-expand-strategia" />
      <ContactSection />
    </Layout>
  );
}
