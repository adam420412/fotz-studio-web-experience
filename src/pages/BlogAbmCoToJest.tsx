import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest ABM (Account-Based Marketing)?",
    answer: "ABM (Account-Based Marketing) to strategia B2B, w której marketing i sprzedaż wspólnie identyfikują konkretne firmy (accounts) jako docelowe, a następnie tworzą spersonalizowane kampanie i doświadczenia dedykowane tym firmom. Zamiast szerokich kampanii do masowej publiczności, ABM skupia zasoby na kilkudziesięciu lub kilkuset precyzyjnie wybranych firmach o wysokim potencjale. ABM odwraca tradycyjny lejek: zamiast 'łów dużo i siej szeroko', ABM mówi 'celuj precyzyjnie i inwestuj głęboko'.",
  },
  {
    question: "Jakie są rodzaje ABM?",
    answer: "Istnieją trzy poziomy ABM: ABM Strategiczny (1:1) — dedykowane kampanie dla 1–10 kluczowych klientów lub największych accounts, najwyższe nakłady, pełna personalizacja. ABM Lite (1:Kilku) — kampanie dla grup 10–100 firm o podobnych cechach i potrzebach, częściowa personalizacja. Programmatic ABM (1:Wielu) — technologia (demand-side platforms, IP targeting) do dotarcia do setek firm, skalowalna automatyzacja. Większość organizacji stosuje mix wszystkich trzech poziomów zależnie od wartości account.",
  },
  {
    question: "Czym ABM różni się od tradycyjnego marketingu B2B?",
    answer: "Tradycyjny marketing B2B: generuje jak największy wolumen leadów, przekazuje je do sprzedaży, sprzedaż odrzuca 60–80% jako złe leady, brak personalizacji. ABM: Marketing i Sales wspólnie wybierają konkretne firmy przed kampanią, każdy touchpoint jest spersonalizowany do tego account, mierzony pipeline i przychód z konkretnych accounts, nie ilość leadów. Kluczowa różnica: ABM mierzy 'pipeline z targeted accounts', nie 'liczba MQL-ów'.",
  },
  {
    question: "Kiedy warto wdrożyć ABM?",
    answer: "ABM sprawdza się gdy: firma sprzedaje do dużych organizacji (enterprise, mid-market) z długim cyklem decyzji. ACV (Annual Contract Value) wynosi powyżej 50 000 PLN — uzasadnia wyższe nakłady na personalizację. Masz jasno zdefiniowany ICP i listę docelowych firm. Sprzedaż i marketing są zdolne do ściskiej współpracy. Masz dane o firmach (firmographic, technographic, intent data). ABM NIE sprawdza się przy niskim ACV (poniżej 5K PLN), transakcyjnym modelu lub gdy brak resources na personalizację.",
  },
  {
    question: "Jak mierzyć skuteczność ABM?",
    answer: "Kluczowe metryki ABM: Account Penetration Rate (% docelowych accounts z którymi nawiązano kontakt), Pipeline Coverage z targetowanych accounts (wartość pipeline z ABM accounts), Win Rate dla ABM accounts vs non-ABM (powinien być wyższy), Average Deal Size (ABM powinien podnosić ACV), Velocity (jak szybko accounts przechodzą przez pipeline), Account Engagement Score (suma touchpointów z kluczowymi osobami w account). Unikaj mierzenia ABM liczbą leadów — to myląca metryka.",
  },
];

const abmLevels = [
  {
    poziom: "1:1 ABM Strategiczny",
    konta: "1–10 kont",
    nakłady: "Bardzo wysokie",
    personalizacja: "Pełna — dedykowane treści, events, ROI calculator dla każdego konta",
    kto: "Top enterprise accounts, existing customers expansion",
    roi: "Najwyższy per account, najniższy per kampanię",
    kolor: "purple",
  },
  {
    poziom: "1:Few ABM Lite",
    konta: "10–100 kont",
    nakłady: "Średnie",
    personalizacja: "Segmentowa — treści per branża lub przypadek użycia",
    kto: "Mid-market, firmy w konkretnym verticalu",
    roi: "Balans między skalą a personalizacją",
    kolor: "blue",
  },
  {
    poziom: "1:Many Programmatic ABM",
    konta: "100–1000+ kont",
    nakłady: "Niskie per konto",
    personalizacja: "Technologiczna — IP targeting, intent data, dynamic ads",
    kto: "Szeroki mid-market, nowe segmenty do eksploracji",
    roi: "Niski per account, wysoki przez skalę",
    kolor: "green",
  },
];

const abmTechStack = [
  { kategoria: "Account Intelligence", narzędzia: ["6sense", "Bombora", "G2 Buyer Intent", "TechTarget"], opis: "Intent data, firmographics, technographics — kto szuka rozwiązań jak Twoje" },
  { kategoria: "ABM Platform", narzędzia: ["Demandbase", "Terminus", "RollWorks", "HubSpot ABM"], opis: "Orkiestracja kampanii, account targeting, engagement tracking" },
  { kategoria: "Sales Intelligence", narzędzia: ["LinkedIn Sales Navigator", "ZoomInfo", "Apollo.io", "Clay"], opis: "Identyfikacja kontaktów, contact data, sequence automation" },
  { kategoria: "Content Personalizacja", narzędzia: ["Mutiny", "Uberflip", "PathFactory", "Folloze"], opis: "Dynamiczne strony, personalizowane hubs treści per account" },
  { kategoria: "CRM i Attribution", narzędzia: ["Salesforce", "HubSpot", "Bizible/Marketo Measure"], opis: "Tracking pipeline per account, multi-touch attribution" },
];

const abmPlaybook = [
  {
    faza: "Faza 1: Identyfikacja",
    kroki: ["Zdefiniuj ICP z Sales i Customer Success", "Wybierz target account list (TAL) — 50–500 firm", "Wzbogać dane (firmographic, technographic, intent)", "Prioritize accounts wg ICP fit score i intent signal"],
  },
  {
    faza: "Faza 2: Insight i Research",
    kroki: ["Mapuj buying committee w każdym account (kto decyduje, kto blokuje, kto championi)", "Zbierz intelligence o bieżących inicjatywach, problemach, tech stacku", "Zidentyfikuj trigger events (nowe funding, nowe hire, competitor review)", "Stwórz Account Plan dla top priority accounts"],
  },
  {
    faza: "Faza 3: Kampania i Engagement",
    kroki: ["Uruchom targeted ads na LinkedIn/programmatic do people in target accounts", "Wyślij personalizowane cold email/LinkedIn sequences do buying committee", "Stwórz personalizowane landing pages lub ROI calculators per account", "Organizuj invite-only webinary dla wybranego segmentu accounts"],
  },
  {
    faza: "Faza 4: Sprzedaż i Konwersja",
    kroki: ["Przekazuj account do AE gdy engagement przekroczy threshold", "Użyj executive briefings i custom demonstrations", "Stwórz business case i ROI projection per account", "Coordinate multi-threaded outreach do wszystkich stakeholders"],
  },
];

export default function BlogAbmCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="ABM co to jest — Account-Based Marketing w B2B | Fotz.pl"
        description="ABM (Account-Based Marketing) — co to jest, rodzaje ABM, jak wdrożyć, tech stack i playbook. Kompletny przewodnik po strategii marketingu opartego na kontach."
        canonicalUrl="https://fotz.pl/blog/abm-account-based-marketing-co-to"

        keywords="ABM co to jest, ABM definicja, czym jest ABM, ABM w marketingu, ABM przykłady, jak działa ABM, ABM strategia"

        canonical="https://fotz.pl/blog/abm-account-based-marketing-co-to"
      />
      <ArticleSchema
        title="ABM co to jest — Account-Based Marketing w B2B"
        description="Kompletny przewodnik po ABM: definicja, rodzaje, tech stack i playbook wdrożenia."
        url="https://fotz.pl/blog/abm-account-based-marketing-co-to"
        datePublished="2024-02-03"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "ABM co to jest", url: "https://fotz.pl/blog/abm-account-based-marketing-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-fuchsia-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "ABM co to jest", url: "/blog/abm-account-based-marketing-co-to" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-fuchsia-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              B2B Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ABM — Account-Based Marketing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zamiast strzelać do tłumu, wybierz konkretne firmy i skoncentruj na nich wszystkie zasoby.
              ABM to strategia B2B, która łączy marketing i sprzedaż wokół wspólnej listy docelowych klientów.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Poziomy ABM", value: "3" },
                { label: "Wyższy win rate", value: "20–35%" },
                { label: "Wyższy ACV", value: "2–3x" },
                { label: "Tech stack tools", value: "5 kategorii" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-fuchsia-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Poziomy ABM */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3 poziomy ABM</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              ABM nie jest strategią zero-jedynkową — istnieje kontinuum od pełnej personalizacji
              per account po programmatyczne skalowanie. Większość firm stosuje mix wszystkich trzech.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {abmLevels.map((level) => (
              <FadeInView key={level.poziom}>
                <div className={`rounded-xl border-2 p-6 h-full ${
                  level.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  level.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  "border-green-200 bg-green-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-3 ${
                    level.kolor === "purple" ? "text-purple-800" :
                    level.kolor === "blue" ? "text-blue-800" :
                    "text-green-800"
                  }`}>
                    {level.poziom}
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Liczba kont", value: level.konta },
                      { label: "Nakłady", value: level.nakłady },
                      { label: "Kto", value: level.kto },
                      { label: "ROI", value: level.roi },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">{item.label}</div>
                        <div className="text-sm text-gray-800">{item.value}</div>
                      </div>
                    ))}
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Personalizacja</div>
                      <div className="text-sm text-gray-800">{level.personalizacja}</div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* ABM Playbook */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ABM Playbook — 4 fazy wdrożenia</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Skuteczne wdrożenie ABM wymaga metodycznego podejścia — od wyboru kont przez kampanie
              po zamknięcie dealu.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {abmPlaybook.map((faza, i) => (
              <FadeInView key={faza.faza}>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex gap-4">
                    <div className="bg-fuchsia-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-3">{faza.faza}</h3>
                      <ul className="space-y-2">
                        {faza.kroki.map((krok, j) => (
                          <li key={j} className="flex gap-2 text-sm text-gray-700">
                            <span className="text-fuchsia-500 flex-shrink-0 mt-0.5">✓</span>
                            {krok}
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

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech Stack ABM</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nowoczesny ABM wymaga zestawu narzędzi do intelligence, targetowania i personalizacji.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {abmTechStack.map((cat) => (
              <FadeInView key={cat.kategoria}>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{cat.kategoria}</h3>
                  <p className="text-sm text-gray-600 mb-3">{cat.opis}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.narzędzia.map((n) => (
                      <span key={n} className="bg-fuchsia-100 text-fuchsia-800 text-xs px-2 py-1 rounded font-medium">
                        {n}
                      </span>
                    ))}
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

      <RelatedArticles currentArticleId="abm-account-based-marketing-co-to" />
      <ContactSection />
    </Layout>
  );
}
