import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Sales Forecasting?",
    answer:
      "Sales Forecasting (prognozowanie sprzedaży) to proces przewidywania przyszłych przychodów ze sprzedaży w określonym horyzoncie czasowym (tydzień, miesiąc, kwartał, rok). Dobra prognoza sprzedaży pomaga w: planowaniu zasobów (zatrudnienie, produkcja, zapasy), zarządzaniu cash flow, ustalaniu celów dla handlowców, alokacji budżetu marketingowego i raportowaniu do inwestorów. Według badań HubSpot, firmy z formalnym procesem prognozowania mają o 28% wyższą szansę na osiągnięcie targetu sprzedaży.",
  },
  {
    question: "Jakie są metody sales forecasting?",
    answer:
      "Główne metody prognozowania sprzedaży: Opportunity Stage Forecasting — prognoza na podstawie etapu w lejku i historycznego Win Rate (np. Proposal = 50% win rate). Historical Forecasting — ekstrapolacja historycznych trendów (np. +20% YoY). Length of Sales Cycle — czas trwania cyklu sprzedaży → prognoza kiedy deal zamknie. AI/ML Forecasting — modele predykcyjne na danych CRM (Salesforce Einstein, HubSpot AI). Bottom-up Forecasting — handlowcy prognozują swoje deale, suma = prognoza teamu. Top-down — zarząd ustala target, dzieli na regiony/handlowców.",
  },
  {
    question: "Co to jest Win Rate i jak wpływa na prognozę?",
    answer:
      "Win Rate (wskaźnik wygranych) = Liczba zamkniętych dealów / Liczba wszystkich szans sprzedażowych × 100%. Win Rate per stage: na etapie 'Qualification' wygrywasz 20%, na 'Proposal' — 50%, na 'Negotiation' — 80%. Mnożąc wartość deala przez Win Rate per stage, uzyskujesz ważoną prognozę. Przykład: Deal 100K PLN w etapie Proposal → ważona prognoza = 50K PLN. Win Rate jest krytyczną metryką — poprawa o 5 pp może zwiększyć przychód o 10-15% bez dodatkowych szans sprzedażowych.",
  },
  {
    question: "Czym jest Commit vs Best Case vs Pipeline w prognozie?",
    answer:
      "Trzy kategorie prognoz sprzedaży: Commit (Forecast) — deale które handlowiec zobowiązuje się zamknąć w tym kwartale z 90%+ pewnością. Best Case — deale gdzie jest realna szansa na zamknięcie jeśli wszystko pójdzie dobrze (60-70% pewność). Pipeline (Upside) — wszystkie aktywne szanse, nawet wczesne etapy (30-50% pewność). Manager dodaje do prognozy własną ocenę. Quarterly Business Review (QBR) weryfikuje prognozy. Suma: Closed + Commit + Best Case × współczynnik = expected revenue.",
  },
  {
    question: "Jak poprawić dokładność sales forecastingu?",
    answer:
      "Metody poprawy dokładności prognoz: regularne pipeline reviews (tygodniowe 1:1 z handlowcami), aktualizacja CRM (niezaktualizowane deale = śmieciowa prognoza), mutual close plan z klientem (uzgodniony harmonogram kroków do zamknięcia), analiza historyczna i kalibracja win rate, rygorystyczne stage criteria (clear definition of done per stage), Deal Review dla dużych szans, AI forecasting tools (Clari, Gong Revenue Intelligence). Badania pokazują, że błąd prognoz sprzedaży wynosi średnio 25-35% — firmy z najlepszymi procesami osiągają poniżej 10%.",
  },
];

const forecastingMethods = [
  {
    metoda: "Opportunity Stage Forecasting",
    opis: "Najczęstsza metoda. Każdy etap lejka ma przypisany % win rate. Wartość deala × win rate = ważona prognoza.",
    przykład: "Proposal 100K × 50% + Negotiation 50K × 80% = 50K + 40K = 90K prognoza",
    zalety: "Prosta, oparta na danych historycznych, automatyzowana przez CRM",
    wady: "Zakłada stały win rate — nie uwzględnia jakości konkretnego deala",
    dokładność: "Średnia",
  },
  {
    metoda: "AI/ML Forecasting",
    opis: "Modele ML analizują setki sygnałów z CRM, email, rozmów: aktywność klienta, szybkość rozmów, sentiment, ryzyko.",
    przykład: "Clari / Gong daje deal health score 0-100 i prawdopodobieństwo zamknięcia per deal",
    zalety: "Najbardziej dokładna, uwzględnia sygnały jakościowe, automatyczna",
    wady: "Wymaga dużo danych historycznych, kosztowna implementacja",
    dokładność: "Wysoka",
  },
  {
    metoda: "Historical Run Rate",
    opis: "Ekstrapolacja historycznych wyników: jeśli Q1 = 1M PLN i rośniesz 20% QoQ, Q2 = 1.2M PLN.",
    przykład: "Przychód Q1: 1M PLN. YoY growth: +25%. Prognoza Q1 next year: 1.25M PLN.",
    zalety: "Prosta, szybka, nie wymaga danych pipeline",
    wady: "Ignoruje obecny stan pipeline, nie sprawdza się przy zmianach rynku",
    dokładność: "Niska-Średnia",
  },
  {
    metoda: "Bottom-up (Rep-level Forecast)",
    opis: "Każdy handlowiec prognozuje swoje deale (Commit/Best Case). Manager agreguje i weryfikuje.",
    przykład: "Rep 1: 150K commit, Rep 2: 80K commit → Team commit = 230K PLN",
    zalety: "Zaangażowanie handlowców, najlepsze rozumienie konkretnych dealów",
    wady: "Bias (optymizm/pesymizm handlowców), czasochłonne, wymaga kalibracji",
    dokładność: "Średnia-Wysoka (po kalibracji)",
  },
];

const pipelineMetrics = [
  { metryka: "Pipeline Coverage", definicja: "Wartość pipeline / Cel sprzedażowy", cel: "3x coverage = standardowy target. 2x = ryzyko miss.", jak: "Total open pipeline / Quarterly quota" },
  { metryka: "Win Rate", definicja: "Zamknięte wygrane / Wszystkie zamknięte szanse", cel: "B2B SaaS: 20-30% all stages, 60-80%+ przy Negotiation", jak: "Closed Won / (Closed Won + Closed Lost)" },
  { metryka: "Average Deal Size (ADS)", definicja: "Średnia wartość wygranego deala", cel: "Śledzenie czy enterprise deals rosną, SMB stabilne", jak: "Total Closed Won ARR / Liczba dealów" },
  { metryka: "Sales Cycle Length", definicja: "Średni czas od pierwszego kontaktu do zamknięcia", cel: "Im krótszy cykl, tym więcej dealów w kw. Benchmark: 30-180 dni zależnie od ACV", jak: "Average days from Opp Created to Closed Won" },
  { metryka: "Forecast Accuracy", definicja: "Faktyczny wynik / Prognoza × 100%", cel: "Najlepsze firmy: +/- 5-10%. Przeciętne: 25-35% błąd", jak: "Actual Revenue / Forecasted Revenue" },
  { metryka: "Stage-to-Stage Conversion", definicja: "% szans przechodzących między etapami lejka", cel: "Identyfikacja 'wąskich gardeł' gdzie traci się najwięcej dealów", jak: "Count(Stage N+1 entry) / Count(Stage N entry)" },
];

const forecastCategories = [
  { kategoria: "Closed Won", kolor: "bg-green-100 text-green-700", opis: "Zamknięte i podpisane. Pewność 100%. Przychód zaksięgowany.", pewność: "100%" },
  { kategoria: "Commit", kolor: "bg-blue-100 text-blue-700", opis: "Handlowiec zobowiązał się do zamknięcia w tym kw. Silna pewność.", pewność: "85-95%" },
  { kategoria: "Best Case", kolor: "bg-yellow-100 text-yellow-700", opis: "Realna szansa jeśli negocjacje pójdą dobrze. Mniej pewne.", pewność: "50-70%" },
  { kategoria: "Pipeline", kolor: "bg-slate-100 text-slate-700", opis: "Wszystkie aktywne szanse. Wczesne etapy. Upside.", pewność: "20-40%" },
  { kategoria: "Omitted", kolor: "bg-red-100 text-red-700", opis: "Wykluczone z prognozy — stagnacja, niezainteresowany klient.", pewność: "Brak" },
];

export default function BlogSalesForecastingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Sales Forecasting — co to jest? Prognozowanie sprzedaży i metody"
        description="Sales Forecasting — definicja, 4 metody prognozowania, pipeline metrics (Win Rate, Coverage), kategorie (Commit/Best Case) i jak poprawić dokładność prognoz."
        canonicalUrl="https://fotz.pl/blog/sales-forecasting-prognozowanie-sprzedazy"

        keywords="Sales Forecasting co to jest, Sales Forecasting definicja, czym jest Sales Forecasting, Sales Forecasting w sprzedaży, Sales Forecasting strategia, Sales Forecasting przykłady, jak używać Sales Forecasting"

        canonical="https://fotz.pl/blog/sales-forecasting-prognozowanie-sprzedazy"
      />
      <ArticleSchema
        title="Sales Forecasting — co to jest i jak prognozować sprzedaż?"
        description="Kompletny przewodnik po sales forecasting: metody, metryki pipeline i jak poprawić dokładność prognoz."
        url="https://fotz.pl/blog/sales-forecasting-prognozowanie-sprzedazy"
        datePublished="2024-01-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Sales Forecasting", url: "https://fotz.pl/blog/sales-forecasting-prognozowanie-sprzedazy" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Sales Forecasting", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Sales Forecasting — co to jest i jak prognozować sprzedaż?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Prognozowanie sprzedaży to fundament planowania biznesowego.
            Poznaj 4 metody forecastingu, kluczowe metryki pipeline i kategorie prognoz (Commit/Best Case).
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Sales Forecasting?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Sales Forecasting</strong> to proces przewidywania przyszłych przychodów ze sprzedaży.
              Dobra prognoza to nie życzenie — to systematyczna analiza pipeline, win rate i sygnałów z rynku,
              pozwalająca z dużą dokładnością przewidzieć wynik kwartału.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Prognozowanie sprzedaży wpływa na każdy dział firmy: Finance planuje cash flow,
              HR planuje zatrudnienie, Operations planuje produkcję, a CEO ma dane do raportowania inwestorom.
              Firmy z dojrzałym procesem forecastingu rosną szybciej i mają niższy churn pracowników.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "+28%", opis: "Wyższe prawdopodobieństwo osiągnięcia targetu sprzedaży przez firmy z formalnym procesem forecastingu (HubSpot)" },
                { stat: "25-35%", opis: "Średni błąd prognoz sprzedaży w firmach bez dedykowanego procesu" },
                { stat: "3x", opis: "Standardowa pipeline coverage: wartość pipeline powinna być 3x wyżej od celu kwartalnego" },
              ].map((s, i) => (
                <div key={i} className="bg-violet-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-violet-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metody */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 metody Sales Forecasting</h2>
            <div className="space-y-5">
              {forecastingMethods.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-lg">{m.metoda}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${m.dokładność === "Wysoka" ? "bg-green-100 text-green-700" : m.dokładność.includes("Średnia") ? "bg-yellow-100 text-yellow-700" : "bg-orange-100 text-orange-700"}`}>{m.dokładność} dokładność</span>
                  </div>
                  <p className="text-slate-600 mb-3">{m.opis}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-violet-50 rounded p-3">
                      <p className="text-xs font-semibold text-violet-600 mb-1">Przykład:</p>
                      <p className="text-violet-800">{m.przykład}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Zalety:</p>
                      <p className="text-green-800">{m.zalety}</p>
                    </div>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Wady:</p>
                      <p className="text-red-800">{m.wady}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Kategorie prognoz */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kategorie prognoz sprzedaży</h2>
            <div className="space-y-3">
              {forecastCategories.map((cat, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex items-center gap-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${cat.kolor}`}>{cat.kategoria}</span>
                  <p className="text-slate-600 flex-1 text-sm">{cat.opis}</p>
                  <span className="text-slate-500 text-sm font-semibold flex-shrink-0">{cat.pewność}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metryki pipeline */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe metryki pipeline</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pipelineMetrics.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-violet-700 mb-1">{m.metryka}</h3>
                  <p className="text-slate-600 text-sm mb-2">{m.definicja}</p>
                  <p className="text-xs text-slate-500 mb-2"><strong>Target:</strong> {m.cel}</p>
                  <p className="text-xs text-slate-400 font-mono bg-slate-50 rounded p-2">{m.jak}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Sales Forecasting</h2>
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

      <RelatedArticles currentArticleId="sales-forecasting-prognozowanie-sprzedazy" />
      <ContactSection />
    </Layout>
  );
}
