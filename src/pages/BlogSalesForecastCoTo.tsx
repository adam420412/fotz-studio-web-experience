import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest sales forecast?",
    answer: "Sales forecast (prognoza sprzedaży) to projekcja przyszłych przychodów na podstawie analizy pipeline'u, historycznych danych i aktualnej aktywności sprzedażowej. Forecast jest kluczowym narzędziem dla liderów sprzedaży — umożliwia planowanie zasobów, budżetów i prognozowanie wyników dla zarządu. Dobry forecast ma accuracy powyżej 90% w horyzoncie kwartalnym. Forecast jest też podstawą zarządzania pipeline'em — identyfikuje luki i ryzyko niedokonania celu w czasie, gdy jest jeszcze szansa na reakcję.",
  },
  {
    question: "Jakie są metody prognozowania sprzedaży?",
    answer: "Metody forecastingu: Opportunity-stage (etap szansy) — każdy etap pipeline'u ma przypisane probability (np. Proposal = 60%, Negotiation = 80%). Weighted pipeline — suma (wartość dealu x probability). Historical win rate — oparte na rzeczywistych danych konwersji, nie subiektywnych szacunkach. Judgment-based — AE lub manager oceniają które deale zamkną się w tym kwartale (commit, upside, omit). AI-based forecasting — narzędzia jak Clari, Gong, Salesforce AI analizują sygnały aktywności i przewidują prawdopodobieństwo zamknięcia. Najlepsze teamy łączą kilka metod.",
  },
  {
    question: "Co to jest commit, best case i pipeline w forecastingu?",
    answer: "Kategorie forecastu (forecast categories): Commit — deale, które AE jest pewny że zamkną się w tym kwartale. Manager powinien traktować to jako gwarancję. Upside/Best Case — deale, które mogą się zamknąć, ale z ryzykiem. Rollup suma Commit + część Upside. Pipeline — cały kwalifikowany pipeline, z którego może przyjść przychód. Omit — deale świadomie wykluczone z forecastu tego kwartału. Commit jest najważniejszą kategorią — AE, który nie dotrzymuje Commit, traci wiarygodność z managerem i zarządem.",
  },
  {
    question: "Jak prowadzić skuteczne spotkanie forecast review?",
    answer: "Efektywny forecast review (tygodniowy lub dwutygodniowy): Przegląd zmian w pipeline od ostatniego reviewu — co nowego, co weszło, co wyszło. Deep-dive na deals w Commit — jakie są blockers, co jest next step, kiedy decyzja? Analiza deals Upside — co jest potrzebne żeby stały się Commit? Identyfikacja ryzyk — quartetu-end pressure, brak Economic Buyer, nieznane success criteria. Forecast roll-up — suma Commit i ważona Upside da prognozę na kwartał. Action plan — konkretne działania na najbliższy tydzień dla każdego krytycznego dealu.",
  },
  {
    question: "Jakie narzędzia wspierają forecast sprzedaży?",
    answer: "Narzędzia do forecastingu: Salesforce/HubSpot — podstawowe CRM z forecast categories i pipeline views. Clari — AI-based platform do forecastingu; analizuje aktywność email, kalendarza i przewiduje close probability. Gong — Revenue Intelligence; analiza nagranych rozmów i sygnałów deali. Boostup — advanced revenue forecasting i pipeline management. Aviso — AI forecast z scenario modeling. Narzędzia AI mają accuracy 90-95% vs 60-70% dla manual forecast przez AE. Warunkiem efektywności jest dyscyplina hygieny CRM — garbage in, garbage out.",
  },
];

const forecastCategories = [
  {
    kategoria: "Commit",
    definicja: "AE jest pewny zamknięcia w tym kwartale",
    accuracy: "Oczekiwana 90%+",
    manager: "Traktuje jako gwarancję",
    kolor: "green",
  },
  {
    kategoria: "Upside / Best Case",
    definicja: "Deal może się zamknąć, ale z ryzykiem",
    accuracy: "Oczekiwana 50-70%",
    manager: "Waży z dyskontem przy roll-upie",
    kolor: "blue",
  },
  {
    kategoria: "Pipeline",
    definicja: "Kwalifikowane szanse, które mogą zamknąć się w kwartale",
    accuracy: "Oczekiwana 20-40%",
    manager: "Monitoruje coverage i velocity",
    kolor: "gray",
  },
  {
    kategoria: "Omit",
    definicja: "Deal świadomie wykluczony z forecastu tego kwartału",
    accuracy: "N/A",
    manager: "Akceptuje wykluczenie, monitoruje jako future quarter",
    kolor: "red",
  },
];

const forecastMethods = [
  {
    metoda: "Stage-based Weighted Forecast",
    jak: "Każdy etap pipeline ma % probability. Weighted forecast = suma (wartość x probability) dla wszystkich dealów",
    plusy: "Prosta, automatyczna w CRM",
    minusy: "Bazuje na subiektywnym przypisaniu etapu przez AE — może być manipulowana",
    accuracy: "Średnia (60–70%)",
  },
  {
    metoda: "Historical Win Rate Forecast",
    jak: "Bazuje na rzeczywistym win rate każdego etapu z historycznych danych (12-18 miesięcy)",
    plusy: "Oparta na faktycznych danych, nie subiektywnnych ocenach",
    minusy: "Wymaga dojrzałych danych historycznych, nie sprawdza się dla nowych rynków/produktów",
    accuracy: "Dobra (70–80%)",
  },
  {
    metoda: "Judgment-based (Commit/Upside)",
    jak: "AE i managerowie oceniają które deale zamkną się w kwartale na podstawie rozmów i sygnałów",
    plusy: "Uwzględnia kontekst, który nie jest w CRM",
    minusy: "Subiektywna, wrażliwa na sandbagging lub overoptimism",
    accuracy: "Zmienna (50–90%)",
  },
  {
    metoda: "AI-based Forecasting",
    jak: "Algorytmy analizują aktywność emailową, spotkania, czas trwania cyklu i przewidują close probability",
    plusy: "Obiektywna, wysoka accuracy, identyfikuje ryzyk wcześnie",
    minusy: "Wymaga integracji z emailem, kalendarzem i CRM; koszt platform AI",
    accuracy: "Wysoka (85–95%)",
  },
];

const forecastRisks = [
  { ryzyko: "Sandbagging", opis: "AE celowo zaniża prognozę, by przekroczyć — demotywuje team i zaburza planowanie" },
  { ryzyko: "Overforecasting", opis: "AE wpisuje więcej niż zrealizuje — zarząd traci zaufanie do forecastu" },
  { ryzyko: "CRM hygiene", opis: "Nieaktualne etapy, brak close date, stare deale w pipeline — garbage in, garbage out" },
  { ryzyko: "Missing Economic Buyer", opis: "Deal w forecast bez kontaktu z osobą decyzyjną — wysokie ryzyko slip do kolejnego kwartału" },
  { ryzyko: "Quarter-end slippage", opis: "Deale, które miały zamknąć się w Q1, przesuwają się do Q2 — systematyczny pattern sygnalizuje pricing lub procurement delay" },
];

export default function BlogSalesForecastCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Sales Forecast — co to jest i jak prognozować sprzedaż? | Fotz.pl"
        description="Sales forecast (prognoza sprzedaży) — metody forecastingu, commit vs upside, narzędzia AI i ryzyka. Kompletny przewodnik dla Sales Managerów i VP Sales."
        canonicalUrl="https://fotz.pl/blog/sales-forecast-prognoza-sprzedazy"
      />
      <ArticleSchema
        title="Sales Forecast — co to jest i jak prognozować sprzedaż?"
        description="Kompletny przewodnik po sales forecastingu: metody, kategorie, narzędzia AI i zarządzanie ryzykami."
        url="https://fotz.pl/blog/sales-forecast-prognoza-sprzedazy"
        datePublished="2024-02-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Sales Forecast", url: "https://fotz.pl/blog/sales-forecast-prognoza-sprzedazy" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Sales Forecast", href: "/blog/sales-forecast-prognoza-sprzedazy" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sales Forecast
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Prognoza sprzedaży to fundament planowania biznesowego. Bez dobrego forecastu
              nie można zarządzać zasobami, budżetem ani odpowiedzialnością w organizacji.
              Poznaj metody, które podnoszą accuracy do 90%+.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Kategorii forecastu", value: "4" },
                { label: "Metod prognozowania", value: "4" },
                { label: "AI forecast accuracy", value: "85–95%" },
                { label: "Cel accuracy", value: "90%+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kategorie forecastu */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 kategorie forecastu sprzedaży</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ustandaryzowane kategorie forecastu umożliwiają konsolidację prognoz na poziomie
              AE, managera i VP bez ambiguitetu co do statusu poszczególnych dealów.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {forecastCategories.map((fc) => (
              <FadeInView key={fc.kategoria}>
                <div className={`rounded-xl p-6 border-2 ${
                  fc.kolor === "green" ? "border-green-200 bg-green-50" :
                  fc.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  fc.kolor === "red" ? "border-red-200 bg-red-50" :
                  "border-gray-200 bg-gray-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-3 ${
                    fc.kolor === "green" ? "text-green-800" :
                    fc.kolor === "blue" ? "text-blue-800" :
                    fc.kolor === "red" ? "text-red-800" :
                    "text-gray-800"
                  }`}>
                    {fc.kategoria}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-gray-500 font-semibold w-24 flex-shrink-0">Definicja:</span>
                      <span className="text-gray-700">{fc.definicja}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 font-semibold w-24 flex-shrink-0">Accuracy:</span>
                      <span className="text-gray-700">{fc.accuracy}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 font-semibold w-24 flex-shrink-0">Manager:</span>
                      <span className="text-gray-700">{fc.manager}</span>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Metody forecastingu */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 metody prognozowania sprzedaży</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dojrzałe organizacje łączą kilka metod forecastingu, by kompensować słabości
              każdej z osobna i osiągać najwyższą accuracy.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {forecastMethods.map((m, i) => (
              <FadeInView key={m.metoda}>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex gap-4">
                    <div className="bg-cyan-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{m.metoda}</h3>
                      <p className="text-gray-600 text-sm mb-3">{m.jak}</p>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-green-700 uppercase mb-1">Plusy</div>
                          <p className="text-sm text-gray-700">{m.plusy}</p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-red-700 uppercase mb-1">Minusy</div>
                          <p className="text-sm text-gray-700">{m.minusy}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-blue-700 uppercase mb-1">Accuracy</div>
                          <p className="text-sm font-semibold text-gray-800">{m.accuracy}</p>
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

      {/* Ryzyka */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 głównych ryzyk forecastu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nawet najlepsza metoda forecastingu zawodzi jeśli nie zaadresuje tych systemowych ryzyk.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {forecastRisks.map((r, i) => (
              <FadeInView key={r.ryzyko}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-orange-100 text-orange-700 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{r.ryzyko}</h3>
                      <p className="text-gray-600 text-sm">{r.opis}</p>
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
