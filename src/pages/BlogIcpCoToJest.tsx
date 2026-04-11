import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest ICP (Ideal Customer Profile)?",
    answer: "ICP (Ideal Customer Profile) to szczegółowy opis idealnego klienta — firmy (w B2B), która ma największy potencjał do zakupu, odnowienia kontraktu, ekspansji i polecania produktu. ICP definiuje się przez atrybuty firmograficzne (branża, rozmiar, lokalizacja, dochody), technograficzne (tech stack), behawioralne (wzorce zakupowe) i sygnały intencji. ICP różni się od persony marketingowej — ICP to firma (account), persona to osoba w tej firmie.",
  },
  {
    question: "Czym różni się ICP od Buyer Persona?",
    answer: "ICP (Ideal Customer Profile) definiuje idealną FIRMĘ/ACCOUNT — branżę, rozmiar, tech stack, budżety, dojrzałość. Buyer Persona definiuje idealną OSOBĘ w tej firmie — rolę, tytuł, motywacje, obawy, KPI, styl komunikacji. Przykład: ICP = 'firma SaaS, 50–500 pracowników, seria B, stack na AWS, dział sprzedaży powyżej 20 osób'. Buyer Persona = 'VP Sales, 35–45 lat, mierzona przychocami, frustruje ją brak visibility w pipeline'. Oba są potrzebne dla skutecznego GTM.",
  },
  {
    question: "Jak zbudować ICP od podstaw?",
    answer: "Proces budowania ICP: Krok 1 — Przeanalizuj obecnych klientów i znajdź te 20%, które generują 80% wartości (CLV, NPS, upsell rate, churn rate). Krok 2 — Zbierz dane firmograficzne tych klientów (branża, rozmiar, dochody, lokalizacja, funding stage, tech stack). Krok 3 — Identyfikuj wspólne wzorce i korelacje. Krok 4 — Zdefiniuj kryteria ICP jako listę atrybutów z wagami. Krok 5 — Stwórz scoring model dla nowych prospektów. Waliduj ICP co kwartał na nowych danych.",
  },
  {
    question: "Jakie atrybuty definiują ICP w B2B SaaS?",
    answer: "Kluczowe atrybuty ICP w B2B SaaS: Firmograficzne — branża (np. fintech, healthcare, e-commerce), rozmiar firmy (pracownicy i/lub przychody), etap (seed/Series A/enterprise), lokalizacja. Technograficzne — używane narzędzia (CRM, marketing automation, ERP), infrastruktura (AWS vs GCP), dojrzałość tech. Behawioralne — cykl budżetowy, szybkość decyzji, wielość stakeholderów, kto jest Decision Maker. Sygnały intencji — hiring na kluczowe role, nowe funding, ekspansja, konkretne search queries.",
  },
  {
    question: "Jak ICP wpływa na sprzedaż i marketing?",
    answer: "Dobrze zdefiniowany ICP transformuje GTM: Sales może skupić się wyłącznie na firmach z wysokim ICP fit score (mniej zmarnowanego czasu), Marketing targetuje dokładnie firmy spełniające kryteria ICP (niższy CAC, wyższa konwersja), Content tworzony pod konkretne pain points ICP (wyższy engagement), Product roadmap priorytetyzuje funkcje dla segmentu ICP (wyższa adopcja). Firmy z precyzyjnym ICP mają typowo o 30–50% krótszy sales cycle i 20–40% wyższy win rate.",
  },
];

const icpAttributes = [
  {
    kategoria: "Firmograficzne",
    kolor: "blue",
    atrybuty: [
      { nazwa: "Branża / Wertical", przykład: "SaaS, E-commerce, HealthTech, FinTech, Manufacturing" },
      { nazwa: "Rozmiar firmy (pracownicy)", przykład: "50–500, 200–2000, 1000+" },
      { nazwa: "Roczne przychody", przykład: "5M–50M PLN, 10M–100M USD" },
      { nazwa: "Etap / Runda finansowania", przykład: "Series A/B, bootstrap, pre-IPO, enterprise" },
      { nazwa: "Lokalizacja geograficzna", przykład: "DACH, CEE, USA East Coast, APAC" },
    ],
  },
  {
    kategoria: "Technograficzne",
    kolor: "green",
    atrybuty: [
      { nazwa: "CRM", przykład: "Salesforce, HubSpot, Pipedrive — wskazuje na dojrzałość sales" },
      { nazwa: "Marketing Automation", przykład: "Marketo, Pardot, HubSpot — wskazuje na gotowość" },
      { nazwa: "Cloud Provider", przykład: "AWS vs GCP vs Azure — wskazuje na tech stack" },
      { nazwa: "Analytics Stack", przykład: "Snowflake, BigQuery — wskazuje na data maturity" },
      { nazwa: "Integracje ze stack", przykład: "Slack, Jira, Confluence — wskazuje na procesy" },
    ],
  },
  {
    kategoria: "Behawioralne i kontekstowe",
    kolor: "purple",
    atrybuty: [
      { nazwa: "Wzrost zatrudnienia", przykład: "Hiring na Sales/Marketing role = growth signal" },
      { nazwa: "Nowe finansowanie", przykład: "Recent Series A/B = gotowość do inwestycji w narzędzia" },
      { nazwa: "Otwarcie nowych biur", przykład: "Ekspansja geograficzna = nowe potrzeby narzędziowe" },
      { nazwa: "Aktywność na LinkedIn", przykład: "Publikacje o problemach, które rozwiązujesz" },
      { nazwa: "Competitor na rynku", przykład: "Używają konkurencji = aware problemu, ready to switch" },
    ],
  },
];

const icpScoringExample = [
  { atrybut: "Branża (FinTech/SaaS)", waga: 25, icpFit: "Tak (+25)", nieIcp: "Nie (0)" },
  { atrybut: "Rozmiar 50–500 pracowników", waga: 20, icpFit: "+20", nieIcp: "Poniżej 50 (-5)" },
  { atrybut: "Używa Salesforce jako CRM", waga: 15, icpFit: "+15", nieIcp: "Brak CRM (-10)" },
  { atrybut: "Seria A lub B funding", waga: 15, icpFit: "+15", nieIcp: "Bootstrap (-5)" },
  { atrybut: "Dział Sales 10+ osób", waga: 10, icpFit: "+10", nieIcp: "Brak Sales team (0)" },
  { atrybut: "Lokalizacja DACH/CEE", waga: 10, icpFit: "+10", nieIcp: "APAC (-5)" },
  { atrybut: "Hiring na RevOps/Sales Ops", waga: 5, icpFit: "+5 (intent signal)", nieIcp: "0" },
];

export default function BlogIcpCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="ICP co to jest — Ideal Customer Profile w B2B SaaS | Fotz.pl"
        description="ICP (Ideal Customer Profile) — co to jest, jak zbudować, atrybuty ICP, różnica z Buyer Persona i jak ICP wpływa na sprzedaż i marketing. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/icp-ideal-customer-profile-co-to"
      />
      <ArticleSchema
        title="ICP co to jest — Ideal Customer Profile w B2B SaaS"
        description="Kompletny przewodnik po ICP: definicja, atrybuty, budowanie od podstaw i wpływ na GTM."
        url="https://fotz.pl/blog/icp-ideal-customer-profile-co-to"
        datePublished="2024-02-02"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "ICP co to jest", url: "https://fotz.pl/blog/icp-ideal-customer-profile-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "ICP co to jest", href: "/blog/icp-ideal-customer-profile-co-to" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-sky-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Go-to-Market
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ICP — Ideal Customer Profile
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Kto jest Twoim idealnym klientem? ICP to fundament strategii sprzedaży i marketingu B2B —
              bez niego ryzykujesz tracenie zasobów na klientów, którzy nigdy nie kupią lub szybko odejdą.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Kategorie atrybutów", value: "3" },
                { label: "Kluczowych atrybutów", value: "15+" },
                { label: "Wzrost win rate", value: "20–40%" },
                { label: "Krótszy sales cycle", value: "30–50%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-sky-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Atrybuty ICP */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3 kategorie atrybutów ICP</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dobre ICP łączy atrybuty z trzech kategorii: firmograficzne (co firma sobą reprezentuje),
              technograficzne (czego używa) i behawioralne (co robi i co sygnalizuje gotowość).
            </p>
          </FadeInView>
          <div className="space-y-10">
            {icpAttributes.map((group) => (
              <FadeInView key={group.kategoria}>
                <div className={`border-l-4 ${
                  group.kolor === "blue" ? "border-blue-500" :
                  group.kolor === "green" ? "border-green-500" : "border-purple-500"
                } pl-6`}>
                  <h3 className={`text-xl font-bold mb-4 ${
                    group.kolor === "blue" ? "text-blue-700" :
                    group.kolor === "green" ? "text-green-700" : "text-purple-700"
                  }`}>
                    Atrybuty {group.kategoria}
                  </h3>
                  <div className="space-y-3">
                    {group.atrybuty.map((a) => (
                      <div key={a.nazwa} className="bg-gray-50 rounded-lg p-4">
                        <div className="font-semibold text-gray-900 mb-1">{a.nazwa}</div>
                        <div className="text-sm text-gray-600 italic">{a.przykład}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* ICP Scoring */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Przykład modelu scoringowego ICP</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              ICP scoring pozwala automatycznie ocenić, jak dobrze dany prospekt pasuje do idealnego profilu.
              Poniżej przykład ważonego modelu dla SaaS sprzedającego do działów sprzedaży.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-sky-600 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Atrybut ICP</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Waga (pkt)</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">ICP Fit</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Poza ICP</th>
                </tr>
              </thead>
              <tbody>
                {icpScoringExample.map((row, i) => (
                  <tr key={row.atrybut} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-sm">{row.atrybut}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded-full text-xs font-bold">
                        {row.waga} pkt
                      </span>
                    </td>
                    <td className="px-4 py-3 text-green-700 font-semibold text-sm">{row.icpFit}</td>
                    <td className="px-4 py-3 text-red-600 text-sm">{row.nieIcp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <FadeInView>
            <div className="mt-6 bg-sky-50 rounded-xl p-5 border border-sky-200">
              <h3 className="font-bold text-sky-800 mb-2">Interpretacja wyniku ICP Score</h3>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div className="bg-green-100 rounded-lg p-3 text-center">
                  <div className="font-bold text-green-800">80–100 pkt</div>
                  <div className="text-green-700">Idealny ICP — priorytet Sales</div>
                </div>
                <div className="bg-yellow-100 rounded-lg p-3 text-center">
                  <div className="font-bold text-yellow-800">50–79 pkt</div>
                  <div className="text-yellow-700">Częściowy ICP fit — nurturing</div>
                </div>
                <div className="bg-red-100 rounded-lg p-3 text-center">
                  <div className="font-bold text-red-800">Poniżej 50 pkt</div>
                  <div className="text-red-700">Poza ICP — nie angażuj zasobów</div>
                </div>
              </div>
            </div>
          </FadeInView>
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
