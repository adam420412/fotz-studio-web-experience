import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest dashboard KPI?",
    answer:
      "Dashboard KPI to wizualna reprezentacja kluczowych wskaźników efektywności (Key Performance Indicators) zebranych w jednym miejscu, umożliwiająca szybką ocenę kondycji biznesu lub funkcji. Dobry dashboard jest jak kokpit samolotu — pokazuje tylko najważniejsze wskaźniki, które wymagają uwagi pilota. Może być operacyjny (real-time lub dzienny), taktyczny (tygodniowy/miesięczny) lub strategiczny (kwartalny/roczny).",
  },
  {
    question: "Ile KPI powinno być na dashboardzie?",
    answer:
      "Optymalnie 5-10 KPI na jednym dashboardzie — maksymalnie 12. Więcej niż 15 KPI na jednym widoku prowadzi do 'information overload' i paraliżu decyzyjnego. Zasada: jeśli nie możesz przejrzeć całego dashboardu w 60 sekund i zrozumieć co działa a co nie — jest za dużo danych. Rozwiązanie: hierarchia dashboardów — overview (5-7 KPI) z możliwością drill-down do szczegółowych widoków.",
  },
  {
    question: "Jaka jest różnica między KPI a metryką?",
    answer:
      "Metryka to dowolna liczba mierzona w biznesie (liczba sesji, czas na stronie, liczba kliknięć). KPI (Key Performance Indicator) to metryka powiązana z konkretnym celem strategicznym, mająca target i właściciela. Zasada: każdy KPI to metryka, ale nie każda metryka to KPI. Jeśli nie wiesz po co mierzysz daną metrykę i co zrobisz gdy będzie zła — to nie jest KPI, to vanity metric.",
  },
  {
    question: "Jakie narzędzia do budowania dashboardów KPI?",
    answer:
      "Narzędzia business intelligence: Looker Studio (Google, darmowy) — świetny do połączenia z GA4, Google Ads, BigQuery; Power BI (Microsoft) — popularne w enterprise, dobre integracje; Tableau — zaawansowane wizualizacje, drogi; Metabase — open-source, dobry dla techniczych teamów; Grafana — monitoring i dane real-time; Notion/Coda — proste dashboardy dla małych teamów bez potrzeby BI. Wybór zależy od skali, budżetu i techniczności zespołu.",
  },
  {
    question: "Jak często aktualizować dashboard KPI?",
    answer:
      "Zależy od typu dashboardu: operacyjny (sprzedaż dzienna, dostępność systemu) — real-time lub co godzinę; taktyczny (marketing weekly, pipeline) — dziennie lub tygodniowo; strategiczny (przychody, CAC, LTV) — miesięcznie lub kwartalnie. Ważniejsza jest regularność przeglądów niż częstotliwość odświeżania — tygodniowy rytm przeglądu dashboardu taktycznego to optymalny kompromis dla większości teamów.",
  },
];

const dashboardTypes = [
  {
    typ: "Operacyjny",
    czashoryzont: "Real-time / dzienny",
    odbiorca: "Team operacyjny, menedżerowie liniowi",
    przykładowe_kpi: "Aktywne sesje, SLA compliance, queue length support, błędy systemowe, daily sales",
    narzędzia: "Grafana, DataDog, Klipfolio, Google Data Studio",
    cel: "Natychmiastowa reakcja na problemy i anomalie",
  },
  {
    typ: "Taktyczny",
    czashoryzont: "Tygodniowy / miesięczny",
    odbiorca: "Managers, team leads, function heads",
    przykładowe_kpi: "MQL/SQL, Pipeline Coverage, NPS, Churn, Feature Adoption, Campaign ROI",
    narzędzia: "Looker Studio, Power BI, HubSpot Reports, Salesforce Dashboards",
    cel: "Śledzenie postępu vs. celów i identyfikacja trendów",
  },
  {
    typ: "Strategiczny / Executive",
    czashoryzont: "Miesięczny / kwartalny",
    odbiorca: "C-suite, board, inwestorzy",
    przykładowe_kpi: "MRR/ARR, Gross Margin, CAC, LTV, NRR, Burn Rate, Headcount",
    narzędzia: "Tableau, Looker, custom Google Sheets, Klipfolio",
    cel: "Ocena kondycji firmy i postępu w realizacji strategii",
  },
];

const dashboardDesignPrinciples = [
  { zasada: "5-10 KPI maximum", opis: "Ogranicz liczbę wskaźników do tych naprawdę kluczowych. Więcej danych = mniej decyzji." },
  { zasada: "Context dla każdej liczby", opis: "Każdy KPI powinien mieć target, poprzedni okres i trend (strzałka lub kolor). Liczba bez kontekstu jest bezużyteczna." },
  { zasada: "Hierarchia: overview → detail", opis: "Summary na górze, możliwość drill-down. Nie wrzucaj wszystkiego na jeden ekran." },
  { zasada: "Kolor jako sygnał, nie dekoracja", opis: "Zielony = OK, żółty = uwaga, czerwony = problem. Konwencja musi być spójna i oczywista dla wszystkich." },
  { zasada: "Jeden właściciel = jeden KPI", opis: "Każdy wskaźnik powinien mieć osobę odpowiedzialną za jego wynik. KPI bez właściciela to ozdoba." },
  { zasada: "Regularne przeglądy", opis: "Dashboard bez rytmu przeglądów to marnowanie zasobów. Zdefiniuj meeting cadence i agenda review." },
];

const functionDashboards = [
  { funkcja: "Marketing", kpi: "MQL, CPL, Organic Traffic, Email CTR, ROAS, Brand Awareness", tools: "Google Analytics 4, HubSpot, Looker Studio" },
  { funkcja: "Sprzedaż", kpi: "Pipeline Value, Win Rate, Sales Cycle Length, Quota Attainment, SQL Created", tools: "Salesforce, HubSpot CRM, Gong" },
  { funkcja: "Customer Success", kpi: "NPS, Churn Rate, NRR, Health Score, Time to Value, CSAT", tools: "ChurnZero, Gainsight, Totango" },
  { funkcja: "Product", kpi: "DAU/MAU, Feature Adoption, Activation Rate, Retention (D7/D30), Crash Rate", tools: "Mixpanel, Amplitude, PostHog" },
  { funkcja: "Finance / Executive", kpi: "MRR/ARR, Gross Margin, Burn Rate, Runway, CAC, LTV:CAC, Headcount", tools: "ChartMogul, Stripe, Google Sheets, Looker" },
];

export default function BlogKpiDashboardCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Dashboard KPI — co to jest? Jak budować dashboardy wskaźników"
        description="Dashboard KPI — definicja, 3 typy (operacyjny, taktyczny, strategiczny), zasady projektowania, narzędzia i przykłady KPI dla 5 funkcji. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/dashboard-kpi-co-to"

        keywords="Dashboard KPI co to jest, Dashboard KPI definicja, czym jest Dashboard KPI, Dashboard KPI przykłady, jak działa Dashboard KPI, Dashboard KPI znaczenie, Dashboard KPI przewodnik"

        canonical="https://fotz.pl/blog/dashboard-kpi-co-to"
      />
      <ArticleSchema
        title="Dashboard KPI — co to jest i jak go zbudować?"
        description="Kompletny przewodnik po dashboardach KPI: 3 typy dashboardów, 6 zasad projektowania, narzędzia i przykłady KPI dla marketingu, sprzedaży, CS i produktu."
        url="https://fotz.pl/blog/dashboard-kpi-co-to"
        datePublished="2024-01-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Dashboard KPI", url: "https://fotz.pl/blog/dashboard-kpi-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Dashboard KPI" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Dashboard KPI — co to jest i jak go zbudować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Dashboard KPI to centrum dowodzenia każdego biznesu. Poznaj 3 typy dashboardów,
            6 zasad projektowania i przykłady KPI dla każdej funkcji organizacji.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest dashboard KPI?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Dashboard KPI</strong> to wizualna reprezentacja kluczowych wskaźników efektywności
              zebrana w jednym miejscu — umożliwia szybką ocenę kondycji biznesu i podejmowanie
              decyzji opartych na danych. Dobry dashboard jest jak kokpit samolotu: pokazuje tylko
              to, co pilot musi widzieć, by bezpiecznie latać.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Kluczowe słowo to "Key" — dashboard nie jest repozytorium wszystkich danych.
              To selekcja najważniejszych wskaźników, powiązanych z celami strategicznymi,
              z kontekstem (target, trend, poprzedni okres) i jasnym właścicielem.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "5-10", opis: "KPI maximum na jednym dashboardzie — więcej prowadzi do paraliżu decyzyjnego" },
                { stat: "60 sek", opis: "tyle powinno wystarczyć na przejrzenie dobrego dashboardu i zrozumienie co wymaga uwagi" },
                { stat: "1", opis: "właściciel dla każdego KPI — bez właściciela wskaźnik jest ozdobą, nie narzędziem" },
              ].map((s, i) => (
                <div key={i} className="bg-cyan-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-cyan-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 3 typy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 typy dashboardów KPI</h2>
            <div className="space-y-4">
              {dashboardTypes.map((d, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-cyan-700 text-lg mb-1">Dashboard {d.typ}</h3>
                  <p className="text-slate-500 text-sm mb-3">Horyzont: {d.czashoryzont} | Odbiorca: {d.odbiorca}</p>
                  <div className="grid md:grid-cols-3 gap-2 text-sm">
                    <div className="bg-cyan-50 rounded p-3">
                      <p className="text-xs font-semibold text-cyan-600 mb-1">Przykładowe KPI:</p>
                      <p className="text-cyan-800">{d.przykładowe_kpi}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Narzędzia:</p>
                      <p className="text-slate-700">{d.narzędzia}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Cel:</p>
                      <p className="text-blue-800">{d.cel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 zasad */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 zasad projektowania dashboardu KPI</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {dashboardDesignPrinciples.map((z, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{z.zasada}</h3>
                      <p className="text-slate-600 text-sm">{z.opis}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* KPI per funkcja */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">KPI dla każdej funkcji organizacji</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Funkcja</th>
                    <th className="p-3 text-left">Kluczowe KPI</th>
                    <th className="p-3 text-left">Typowe narzędzia</th>
                  </tr>
                </thead>
                <tbody>
                  {functionDashboards.map((f, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-cyan-700">{f.funkcja}</td>
                      <td className="p-3 text-slate-600 text-sm">{f.kpi}</td>
                      <td className="p-3 text-slate-500 text-sm">{f.tools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Dashboard KPI</h2>
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

      <RelatedArticles currentArticleId="dashboard-kpi-co-to" />
      <ContactSection />
    </Layout>
  );
}
