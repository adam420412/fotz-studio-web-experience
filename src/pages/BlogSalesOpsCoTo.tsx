import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Sales Operations?",
    answer: "Sales Operations (Sales Ops) to funkcja w organizacji sprzedażowej odpowiedzialna za efektywność i sprawność działania zespołu sprzedaży. Sales Ops zajmuje się technologią (CRM, narzędzia), procesami, danymi i analizą, prognozowaniem (forecasting), quota setting, planowaniem terytoriów, onboardingiem i szkoleniami, a także raportowaniem. Celem Sales Ops jest eliminowanie tarciaadministracyjnego i umożliwienie handlowcom skupienia się na sprzedaży. Dobry Sales Ops to 'engine room' organizacji sprzedaży.",
  },
  {
    question: "Czym Sales Ops różni się od Revenue Operations (RevOps)?",
    answer: "Sales Ops koncentruje się wyłącznie na efektywności działu sprzedaży. Revenue Operations (RevOps) to szersza funkcja, która integruje Sales Ops, Marketing Ops i Customer Success Ops w spójną organizację odpowiedzialną za cały cykl przychodowy (od leadu do renew). RevOps eliminuje silosy między departamentami i zapewnia spójność danych, procesów i technologii przez cały customer journey. Wiele firm ewoluuje od Sales Ops do RevOps w miarę dojrzewania. RevOps jest odpowiedzią na fakt, że 80% przychodów pochodzi z ekspansji i retencji, nie tylko z nowej sprzedaży.",
  },
  {
    question: "Czym zajmuje się Sales Operations na co dzień?",
    answer: "Codzienne zadania Sales Ops: CRM management — utrzymanie czystości danych, workflows, konfiguracji i integracji. Raportowanie i dashboardy — pipeline review, forecast accuracy, activity metrics, win/loss. Territory i quota management — planowanie podziałów i kalibracja targetów. Sales enablement — szablony, playbooks, case studies dostępne dla handlowców. Narzędzia i technologia — administracja stacku: Salesforce, Gong, Outreach, ZoomInfo. Analiza danych — gdzie są bottlenecki w pipeline, jaki jest win rate na każdym etapie, co robią top performers inaczej.",
  },
  {
    question: "Kiedy firma potrzebuje Sales Ops?",
    answer: "Sygnały, że potrzebujesz Sales Ops: Masz 5+ handlowców i manager spędza więcej niż 30% czasu na administracji zamiast coachingu. CRM jest chaosem — niespójne dane, brakujące pola, stare oportunity. Forecast accuracy jest poniżej 70% — nie wiesz co zamknie się w kwartale. Handlowcy tracą czas na ręczne raporty, szukanie materiałów lub wpisywanie danych. Nie masz widoczności co najlepsi handlowcy robią inaczej od pozostałych. Zazwyczaj pierwsza osoba Sales Ops pojawia się przy 10-15 handlowcach lub gdy firma przekroczy 3-5M PLN ARR.",
  },
  {
    question: "Jakie narzędzia używa Sales Operations?",
    answer: "Stack narzędzi Sales Ops: CRM — Salesforce, HubSpot, Pipedrive (core systemu). Sales Engagement — Outreach, Salesloft, Apollo (sekwencje email, tracking). Revenue Intelligence — Gong, Chorus, Clari (analiza rozmów, forecasting AI). Data Enrichment — ZoomInfo, Apollo, Clearbit (dane kontaktowe). BI i Reporting — Tableau, Looker, Google Data Studio (dashboardy, analizy). CPQ — Salesforce CPQ, DealHub (configure-price-quote, automatyzacja ofertowania). Contract Management — DocuSign, PandaDoc (e-podpisy, kontrakt management).",
  },
];

const salesOpsResponsibilities = [
  {
    obszar: "Technologia i CRM",
    zadania: ["Administracja i konfiguracja CRM", "Integracje z innymi narzędziami", "Data hygiene i quality", "Adoption i onboarding nowych narzędzi", "Ocena i wybór nowych rozwiązań"],
    kolor: "blue",
  },
  {
    obszar: "Dane i Analiza",
    zadania: ["Pipeline reporting i dashboardy", "Win/loss analysis", "Activity metrics i KPI tracking", "Cohort analysis i trends", "Identyfikacja bottlenecków w procesie"],
    kolor: "green",
  },
  {
    obszar: "Procesy i Planowanie",
    zadania: ["Quota setting i kalibracja", "Territory design i planowanie", "Forecast management", "Sales process documentation", "Compensation plan administration"],
    kolor: "purple",
  },
  {
    obszar: "Enablement i Produktywność",
    zadania: ["Playbooks i szablony", "Onboarding handlowców", "Training resources", "Content library dla Sales", "Eliminacja tarcia administracyjnego"],
    kolor: "orange",
  },
];

const salesOpsMetrics = [
  { metryka: "Pipeline Coverage Ratio", co: "Stosunek pipeline do quarterly quota", benchmark: "3–4x quota (dla healthy pipeline)", dlaczego: "Poniżej 3x — ryzyko niewykonania targetu" },
  { metryka: "Win Rate", co: "% oportunity zamkniętych jako Closed Won", benchmark: "20–30% (wszystkie szanse), 40-50% (kwalifikowane)", dlaczego: "Spada? Sprawdź produkt, cenę, konkurencję" },
  { metryka: "Sales Cycle Length", co: "Średni czas od opportunity do zamknięcia", benchmark: "Różny: SMB 30-60 dni, Enterprise 90-180+ dni", dlaczego: "Rośnie? Sprawdź kwalifikację i procurement delays" },
  { metryka: "Forecast Accuracy", co: "Prognoza vs rzeczywiste wyniki", benchmark: "Powyżej 90% w horyzoncie kwartalnym", dlaczego: "Poniżej 70% — system forecastu wymaga naprawy" },
  { metryka: "Ramp Time", co: "Czas do pełnej produktywności nowego AE", benchmark: "SMB 3-4 mies., Mid-Market 5-6 mies., Enterprise 9-12 mies.", dlaczego: "Długi ramp time = wysoki koszt akwizycji handlowca" },
  { metryka: "Quota Attainment", co: "% AE osiągających quota", benchmark: "60-70% dla zdrowej organizacji", dlaczego: "Poniżej 50% — quota za wysoka lub wsparcie za niskie" },
];

export default function BlogSalesOpsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Sales Operations — co to jest i co robi? | Fotz.pl"
        description="Sales Operations (Sales Ops) — obowiązki, narzędzia, kluczowe metryki i różnica vs RevOps. Kompletny przewodnik po Sales Operations dla liderów sprzedaży."
        canonicalUrl="https://fotz.pl/blog/sales-operations-co-to-jest"

        keywords="Sales Operations co to jest, Sales Operations definicja, czym jest Sales Operations, Sales Operations w sprzedaży, Sales Operations strategia, Sales Operations przykłady, jak używać Sales Operations"
      />
      <ArticleSchema
        title="Sales Operations — co to jest i co robi?"
        description="Kompletny przewodnik po Sales Operations: obowiązki, narzędzia, metryki i kiedy potrzebujesz Sales Ops."
        url="https://fotz.pl/blog/sales-operations-co-to-jest"
        datePublished="2024-02-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Sales Operations", url: "https://fotz.pl/blog/sales-operations-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Sales Operations", href: "/blog/sales-operations-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-slate-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sales Operations
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Sales Ops to niewidzialna siła, która sprawia że organizacja sprzedaży działa
              sprawnie i przewidywalnie. Bez Sales Ops handlowcy tracą czas na administrację,
              CRM jest chaosem, a forecast jest zgadywaniem.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Obszarów odpowiedzialności", value: "4" },
                { label: "Kluczowych metryk", value: "6" },
                { label: "Pierwszy Sales Ops", value: "10–15 AE" },
                { label: "Cel forecast accuracy", value: "90%+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-slate-300">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Obszary odpowiedzialności */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 obszary odpowiedzialności Sales Ops</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Sales Operations obejmuje technologię, dane, procesy i efektywność. Dojrzałe Sales Ops
              organizacje mają wydzielone role dla każdego z tych obszarów.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {salesOpsResponsibilities.map((r) => (
              <FadeInView key={r.obszar}>
                <div className={`rounded-xl p-6 border-2 ${
                  r.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  r.kolor === "green" ? "border-green-200 bg-green-50" :
                  r.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-4 ${
                    r.kolor === "blue" ? "text-blue-800" :
                    r.kolor === "green" ? "text-green-800" :
                    r.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>
                    {r.obszar}
                  </h3>
                  <ul className="space-y-2">
                    {r.zadania.map((z) => (
                      <li key={z} className="flex gap-2 text-sm text-gray-700">
                        <span className={`flex-shrink-0 ${
                          r.kolor === "blue" ? "text-blue-500" :
                          r.kolor === "green" ? "text-green-500" :
                          r.kolor === "purple" ? "text-purple-500" :
                          "text-orange-500"
                        }`}>•</span>
                        {z}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Metryki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych metryk Sales Ops</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Sales Ops jest odpowiedzialny za tracking i raportowanie tych metryk — ale też
              za diagnozowanie przyczyn odchyleń i rekomendowanie działań naprawczych.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {salesOpsMetrics.map((m, i) => (
              <FadeInView key={m.metryka}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-slate-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{m.metryka}</h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Co mierzy</div>
                          <p className="text-sm text-gray-700">{m.co}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Benchmark</div>
                          <p className="text-sm text-gray-700 font-medium">{m.benchmark}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-700 uppercase mb-1">Sygnał alarmowy</div>
                          <p className="text-sm text-gray-700">{m.dlaczego}</p>
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
