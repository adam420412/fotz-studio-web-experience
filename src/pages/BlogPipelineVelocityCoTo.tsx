import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Pipeline Velocity?",
    answer: "Pipeline Velocity (prędkość pipeline'u) to metryka sprzedażowa mierząca jak szybko Twój pipeline generuje przychód. Formuła: Pipeline Velocity = (Liczba okazji × Średni ACV × Win Rate) / Średni Sales Cycle (dni). Wynik wyrażany w przychód/dzień. Interpretacja: Pipeline Velocity $10 000/dzień = pipeline generuje $10K przychodu każdego dnia. Dlaczego Pipeline Velocity jest ważne: To jedyna metryka która łączy volume (liczba deali), wartość (ACV), jakość (win rate) i efektywność (sales cycle) w jeden wskaźnik. Możesz poprawić Pipeline Velocity przez 4 dźwignie: więcej okazji, wyższy ACV, wyższy win rate lub krótszy sales cycle. Benchmark: dobra firma SaaS powinna śledzić trend PV co tydzień. Spadek PV = wczesny sygnał problemu zanim wpłynie na revenue. Wzrost PV = nacisk na operacyjny sukces. RevOps używa PV do forecasting, capacity planning i coaching priorytetów.",
  },
  {
    question: "Jak obliczać Pipeline Velocity krok po kroku?",
    answer: "Przykład obliczenia Pipeline Velocity: Dane: 50 aktywnych okazji w pipeline. Średni ACV: $50 000. Win Rate: 25%. Średni Sales Cycle: 60 dni. Obliczenie: PV = (50 × $50 000 × 0.25) / 60 = $625 000 / 60 = $10 416/dzień. Jak używać w praktyce: Monthly revenue forecast = PV × 30 = $312 500/miesiąc. Quarterly forecast = PV × 90 = $937 500/kwartał. Segmentacja: oblicz PV osobno dla każdego AE, segmentu (SMB/Enterprise) i regionu. Porównaj między AE — ten z PV 2x wyższym niż średnia = co robi inaczej? Trendowanie: wykres PV co tydzień. Ruch w PV zazwyczaj poprzedza zmianę w revenue o 30-90 dni. Pułapki: jakość pipeline'u jest ważniejsza niż ilość. PV obliczone na garbage pipeline = garbage forecast. Regularnie robiż pipeline hygiene — usuń stare, nierealistische okazje. Stagflation — pipeline rośnie ale PV spada = problem z jakością lub win rate.",
  },
  {
    question: "Jak poprawić Pipeline Velocity — 4 dźwignie?",
    answer: "4 dźwignie Pipeline Velocity: 1. Zwiększenie liczby okazji: Lepsza generacja leadów (SEO, paid, outbound). Lepsze SDR performance. Referral program. Niższy threshold kwalifikacji (ostrożnie — rośnie ilość, może spaść quality). 2. Zwiększenie średniego ACV: Move upmarket — celuj w większe firmy. Cross-sell i multi-product — sprzedaj więcej modułów. Lepsza segmentacja — przestań ścigać small deals które nie zamkniesz. Enterprise plays — dedykowane Enterprise Sales team. 3. Poprawa Win Rate: Lepsza kwalifikacja wejścia (MEDDIC, MEDDPICC). Sales coaching — identyfikacja gdzie w procesie tracisz deale. Competitive battlecards — lepsze responses na konkurencję. References — case studies i referencje. 4. Skrócenie Sales Cycle: Kupujący enablement — dostarcz content który pomaga decydentom. Wielowątkowa sprzedaż (multi-threading) — nie zależ od jednej osoby. Deal desk — szybsza ewaluacja i approval quotations. Digital trial lub POC — zmniejsz ryzyko dla kupującego. Priorytet: zwykle win rate i ACV mają największy wpływ na PV. Krótszy cycle: focus gdy deale 'gniją' w pipeline powyżej 2x median.",
  },
  {
    question: "Jak Pipeline Velocity łączy się z forecasting?",
    answer: "Pipeline Velocity w forecasting: Bottoms-up forecast: CSM i AE estymują probability każdego dealu i datę close. Suma = forecast. Subiektywne, podatne na optymizm. PV-based forecast: bardziej systematyczne. Forecast = PV × liczba dni w kwartale. Kalibracja z historycznymi danymi. Hybrid approach (najlepszy): Połącz PV-based z deal-by-deal review dla największych okazji. Forecast categories (Salesforce standard): Closed — deal zamknięty. Commit — AE jest przekonany, zamknie w tym kwartale. Best Case — możliwe jeśli wszystko pójdzie dobrze. Pipeline — w trakcie, nie planowane na ten kwartał. Omitted — nie bierz pod uwagę. Pipeline Velocity jako early warning: Jeśli PV spada dwa tygodnie pod rząd = investigate. Możliwe przyczyny: słabszy pipeline, Win Rate spadł (konkurencja?), Sales Cycle wydłużył się (buyer caution?). Leading vs. lagging indicator: Revenue jest lagging (widzisz po fakcie). PV jest leading — możesz reagować 1-2 kwartały wcześniej. Narzędzia: Salesforce + Einstein Analytics, Clari, Gong.io, Outreach Intelligence.",
  },
  {
    question: "Jakie inne metryki pipeline'u warto śledzić?",
    answer: "Metryki pipeline uzupełniające PV: Win Rate per Stage — conversion rate między każdym etapem lejka. Identyfikuje gdzie tracisz deale. Loss reasons — dlaczego tracisz? Cena, funkcjonalność, konkurent, no decision? Average Stage Duration — ile czasu deal spędza w każdym etapie? Wąskie gardło = coaching target. Pipeline Coverage — pipeline / quota. Benchmark: 3-4x quota coverage daje wysokie prawdopodobieństwo realizacji targetu. Poniżej 2x = alarm. Pipeline Age — jak stare są deale? Stale deals (powyżej 2x median cycle) = usuń z pipeline lub intensywnie kontynuuj. Deal Slippage Rate — % dealów które przesuwają się na kolejny kwartał. Wysoki slippage = problem z kwalifikacją i commit dates. New Pipeline Added — ile nowego pipeline'u dodajesz tygodniowo? Minimum: 3x tygodniowej wartości quotów (żeby utrzymać 3x coverage przy ~25% win rate). Aged Pipeline Ratio — % pipeline starszego niż 1x median sales cycle. Powyżej 30% = pipeline hygiene problem.",
  },
];

const velocityLevers = [
  {
    dźwignia: "Liczba Okazji (#)",
    current: "50",
    improvement: "60 (+20%)",
    impact: "+20% PV",
    jak: "Lepsza generacja leadów, wyższy SDR performance, referral program",
    kolor: "blue",
  },
  {
    dźwignia: "Średni ACV ($)",
    current: "$50K",
    improvement: "$60K (+20%)",
    impact: "+20% PV",
    jak: "Move upmarket, multi-product cross-sell, enterprise plays",
    kolor: "green",
  },
  {
    dźwignia: "Win Rate (%)",
    current: "25%",
    improvement: "30% (+5pp)",
    impact: "+20% PV",
    jak: "Lepsza kwalifikacja (MEDDIC), sales coaching, competitive battlecards",
    kolor: "purple",
  },
  {
    dźwignia: "Sales Cycle (dni)",
    current: "60 dni",
    improvement: "50 dni (-17%)",
    impact: "+20% PV",
    jak: "Buyer enablement, multi-threading, szybszy POC/trial",
    kolor: "orange",
  },
];

const pipelineMetrics = [
  { metryka: "Pipeline Coverage", formuła: "Pipeline / Quota", benchmark: "3-4x quota. Poniżej 2x = alarm." },
  { metryka: "Win Rate", formuła: "Zamknięte deale / Wszystkie zakończone deale", benchmark: "20-30% typowo. Powyżej 30% = świetny lub za łatwe kwalifikowanie." },
  { metryka: "Average Sales Cycle", formuła: "Suma dni do close / Liczba dealów", benchmark: "SMB: 30-60 dni. Mid-market: 60-120 dni. Enterprise: 90-180+ dni." },
  { metryka: "Deal Slippage Rate", formuła: "Deale przesunięte / Deale w commit", benchmark: "Poniżej 20% = dobre. Powyżej 40% = forecasting problem." },
];

export default function BlogPipelineVelocityCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Pipeline Velocity | Fotz Studio"
        description="Pipeline Velocity: formuła, 4 dźwignie (okazje, ACV, win rate, sales cycle), zastosowanie w forecasting i kluczowe metryki pipeline dla zespołów SaaS."
        canonicalUrl="https://fotz.pl/blog/pipeline-velocity-co-to-jest-jak-poprawic"

        keywords="Pipeline Velocity co to jest, Pipeline Velocity definicja, czym jest Pipeline Velocity, Pipeline Velocity przykłady, jak działa Pipeline Velocity, Pipeline Velocity znaczenie, Pipeline Velocity przewodnik"

        canonical="https://fotz.pl/blog/pipeline-velocity-co-to-jest-jak-poprawic"
      />
      <ArticleSchema
        title="Pipeline Velocity — co to jest i jak poprawić prędkość pipeline'u?"
        description="Pipeline Velocity: formuła, obliczenia krok po kroku, 4 dźwignie poprawy, zastosowanie w forecasting, pipeline coverage i inne metryki dla RevOps i Sales."
        url="https://fotz.pl/blog/pipeline-velocity-co-to-jest-jak-poprawic"
        datePublished="2024-03-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Pipeline Velocity", url: "https://fotz.pl/blog/pipeline-velocity-co-to-jest-jak-poprawic" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Pipeline Velocity", href: "/blog/pipeline-velocity-co-to-jest-jak-poprawic" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Operations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pipeline Velocity
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jedna liczba która łączy volume, wartość, jakość i efektywność pipeline'u.
              Pipeline Velocity = przychód/dzień generowany przez Twój aktywny pipeline.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Formuła", value: "# × ACV × WR / Cycle" },
                { label: "Jednostka", value: "Przychód/dzień" },
                { label: "4 dźwignie", value: "#, ACV, WR, Cycle" },
                { label: "Coverage target", value: "3-4x quota" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-purple-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 dźwignie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 dźwignie Pipeline Velocity</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda zmienna w formule PV jest dźwignią. Poprawa każdej o 20%
              podwaja Pipeline Velocity.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {velocityLevers.map((l) => (
              <FadeInView key={l.dźwignia}>
                <div className={`rounded-xl border-2 p-5 ${
                  l.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  l.kolor === "green" ? "border-green-200 bg-green-50" :
                  l.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`font-bold text-lg ${
                      l.kolor === "blue" ? "text-blue-800" :
                      l.kolor === "green" ? "text-green-800" :
                      l.kolor === "purple" ? "text-purple-800" :
                      "text-orange-800"
                    }`}>{l.dźwignia}</h3>
                    <span className="text-sm font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded">{l.impact}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div><span className="font-semibold text-gray-600">Aktualnie: </span><span className="text-gray-700">{l.current}</span></div>
                    <div><span className="font-semibold text-gray-600">Po poprawie: </span><span className="text-gray-700">{l.improvement}</span></div>
                    <div className="text-gray-600">{l.jak}</div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Metryki pipeline */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe metryki pipeline</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Pipeline Velocity to metryka syntetyczna. Poniższe metryki
              pomagają zdiagnozować które dźwignie wymagają uwagi.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {pipelineMetrics.map((m) => (
              <FadeInView key={m.metryka}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-3 gap-3">
                    <h3 className="font-bold text-gray-900">{m.metryka}</h3>
                    <p className="text-gray-600 text-sm font-mono">{m.formuła}</p>
                    <p className="text-gray-600 text-sm">{m.benchmark}</p>
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

      <RelatedArticles currentArticleId="pipeline-velocity-co-to-jest-jak-poprawic" />
      <ContactSection />
    </Layout>
  );
}
