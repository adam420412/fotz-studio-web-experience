import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest North Star Metric (NSM)?",
    answer:
      "North Star Metric (metryka North Star / Gwiazda Polarna) to jedna, najważniejsza miara sukcesu firmy — odzwierciedlająca wartość dostarczaną klientom i będąca predyktorem długoterminowego wzrostu. NSM leży na przecięciu: wartości dla użytkownika, impactu biznesowego i mierzalności. Powinna wyrażać rdzeń propozycji wartości produktu. Przykłady: Airbnb — Nights Booked, Spotify — Time Listened, Facebook — Daily Active Users.",
  },
  {
    question: "Jak wybrać North Star Metric?",
    answer:
      "Dobra NSM spełnia 3 kryteria: 1) Mierzy dostarczoną wartość — nie tylko aktywność (views) ale prawdziwe użycie (time spent, actions completed), 2) Przewiduje przyszły wzrost — gdy rośnie NSM, rośnie biznes, 3) Jest zrozumiała dla całego zespołu. Test: czy wzrost tej metryki zawsze oznacza, że klienci otrzymują więcej wartości? Jeśli nie — to nie jest dobra NSM. Unikaj vanity metrics (rejestracje, pageviews) — nie oddają wartości.",
  },
  {
    question: "Ile North Star Metrics powinna mieć firma?",
    answer:
      "Jedna — to sedno koncepcji North Star. Jedna metryka wymusza focus, alignment i klarowność. Wiele firm ma fałszywe NSM — faktycznie mierzą przychód lub użytkowników aktywnych zamiast wartości. Niektóre firmy stosują jedną NSM + kilka input metrics (czynniki wpływające na NSM). Marketplace'y mogą potrzebować dwóch (supply i demand side), ale to wyjątki. Amazon używa 'Number of items shipped' — prosta, jednoznaczna.",
  },
  {
    question: "Czym North Star Metric różni się od KPI?",
    answer:
      "KPI (Key Performance Indicators) to zestaw wskaźników mierzących różne aspekty działalności — zazwyczaj kilkanaście lub więcej. North Star Metric to jedna, nadrzędna metryka skupiająca całą organizację. KPI mogą być lagging indicators (efekty przeszłości). NSM powinna być leading indicator — predyktorem przyszłego wzrostu. KPI to pulpit nawigacyjny, NSM to kompas. NSM jest strategiczna, KPI są operacyjne.",
  },
  {
    question: "Jak NSM łączy się z input metrics?",
    answer:
      "North Star Metric + Input Metrics (tzw. driver metrics) to kompletny framework. NSM to wynik — input metrics to dźwignie, które na nią wpływają. Przykład Airbnb: NSM = Nights Booked → Input metrics: Liczba aktywnych listings, Conversion rate search→booking, % powracających gości, Average booking value. Każdy dział skupia się na swoich input metrics — wszystkie prowadzą do NSM. To tworzy alignment w całej organizacji.",
  },
];

const nsmExamples = [
  { firma: "Airbnb", nsm: "Nights Booked", dlaczego: "Mierzy realną wymianę wartości — gospodarze zarabiają, goście podróżują. Pageviews ≠ wartość.", typ: "Marketplace" },
  { firma: "Spotify", nsm: "Time Listened", dlaczego: "Odzwierciedla zaangażowanie i wartość dla użytkownika. Więcej słuchania = lepsza rekomendacja = więcej słuchania.", typ: "Subscription" },
  { firma: "Slack", nsm: "Messages Sent", dlaczego: "Komunikacja = wartość dla teamów. Koreluje z expansion revenue i retention.", typ: "B2B SaaS" },
  { firma: "HubSpot", nsm: "Weekly Active Teams", dlaczego: "Aktywne korzystanie z platformy = realizacja wartości CRM. Predyktor retention.", typ: "B2B SaaS" },
  { firma: "Facebook", nsm: "Daily Active Users", dlaczego: "Codzienne użycie = zaangażowanie = wartość dla reklamodawców. Koreluje z przychodem z reklam.", typ: "Ad Platform" },
  { firma: "Amazon", nsm: "Items Shipped", dlaczego: "Zrealizowane zamówienie = wartość dostarczona. Prosta, mierzalna, całej firmy zrozumiała.", typ: "E-commerce" },
  { firma: "Duolingo", nsm: "Daily Active Learners", dlaczego: "Codzienna nauka = wartość dla użytkownika. Koreluje z retencją i płatnymi subskrypcjami.", typ: "EdTech" },
  { firma: "Zoom", nsm: "Weekly Hosted Meetings", dlaczego: "Zorganizowane spotkanie = wartość produktu. Rośnie wraz z udziałem w rynku business communication.", typ: "B2B SaaS" },
];

const nsmFramework = [
  { krok: "1", tytul: "Zdefiniuj core value", opis: "Jaki jest rdzeń wartości który dostarczasz użytkownikom? Co sprawia że wracają? Odpowiedź to fundament NSM." },
  { krok: "2", tytul: "Zidentyfikuj aha moment", opis: "Kiedy użytkownik po raz pierwszy 'załapuje' wartość produktu? NSM często mierzy jak szybko/często użytkownicy osiągają aha moment." },
  { krok: "3", tytul: "Sprawdź korelację z wzrostem", opis: "Czy historycznie wzrost tej metryki koreluje ze wzrostem przychodów i retencją? Analiza danych kohortowych jest kluczowa." },
  { krok: "4", tytul: "Test: vanity vs value", opis: "Czy wzrost metryki ZAWSZE oznacza wartość dla użytkownika? Rejestracje mogą rosnąć bez wartości. Aktywni użytkownicy — nie zawsze." },
  { krok: "5", tytul: "Zidentyfikuj input metrics", opis: "Jakie 3-5 czynników najbardziej wpływa na NSM? To driver metrics dla poszczególnych teamów." },
  { krok: "6", tytul: "Komunikuj i alignuj", opis: "NSM musi być znana przez całą firmę i widoczna na dashboardach. Każdy dział powinien widzieć swój wkład." },
];

const badNsmExamples = [
  { metryka: "Przychód (Revenue)", problem: "Lagging indicator — efekt, nie przyczyna. Nie wskazuje skąd pochodzi wartość.", lepsze: "Metric która prowadzi do przychodu" },
  { metryka: "Liczba rejestracji", problem: "Vanity metric — rejestracja ≠ wartość. Można mieć 1M rejestracji i 0 aktywnych użytkowników.", lepsze: "Aktywni użytkownicy / Aha moment achieved" },
  { metryka: "Pageviews", problem: "Mierzy ruch, nie wartość. Bot traffic psuje metrykę. Czas na stronie ≠ dostarczona wartość.", lepsze: "Actions completed / Specific engagement depth" },
  { metryka: "App downloads", problem: "Download ≠ instalacja ≠ użycie ≠ wartość. Wysoki download rate z niskim retencją to katastrofa.", lepsze: "D7 retention / Weekly active users" },
];

export default function BlogNorthStarMetricCoTo() {
  return (
    <Layout>
      <SEOHead
        title="North Star Metric — co to jest? Metryka Gwiazdy Polarnej w produkcie"
        description="North Star Metric (NSM) — definicja, przykłady (Airbnb, Spotify, Slack), jak wybrać NSM, input metrics i 4 antyprzykłady vanity metrics. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/north-star-metric-co-to"
      />
      <ArticleSchema
        title="North Star Metric — co to jest i jak wybrać metrykę Gwiazdy Polarnej?"
        description="Kompletny przewodnik po North Star Metric: 8 przykładów (Airbnb, Spotify, Slack, Amazon), 6-krokowy framework wyboru i jak łączyć z input metrics."
        url="https://fotz.pl/blog/north-star-metric-co-to"
        datePublished="2024-01-29"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "North Star Metric", url: "https://fotz.pl/blog/north-star-metric-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "North Star Metric" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            North Star Metric — co to jest i jak wybrać?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            North Star Metric to jedna metryka skupiająca całą firmę na dostarczaniu wartości.
            Poznaj przykłady (Airbnb, Spotify, Amazon), framework wyboru i jak unikać vanity metrics.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest North Star Metric?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>North Star Metric (NSM)</strong> to jedna, najważniejsza miara sukcesu firmy —
              odzwierciedlająca wartość dostarczaną klientom i predyktor długoterminowego wzrostu.
              Nazwa pochodzi od Gwiazdy Polarnej — niezmiennego punktu orientacyjnego dla żeglarzy.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              NSM wyrównuje wszystkie zespoły wokół jednego celu: dostarczania wartości użytkownikom.
              Gdy każdy dział optymalizuje swoje działania pod NSM — strategia przestaje być teorią
              a staje się wspólnym, mierzalnym celem.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "1 metryka", opis: "tylko jedna — to sedno koncepcji. Wiele metryk = brak focusu i alignment" },
                { stat: "Wartość", opis: "NSM musi mierzyć wartość dostarczoną użytkownikowi — nie aktywność czy ruch" },
                { stat: "Leading indicator", opis: "predyktor przyszłego wzrostu — nie lagging indicator jak przychód" },
              ].map((s, i) => (
                <div key={i} className="bg-yellow-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-yellow-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Przykłady North Star Metric znanych firm</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {nsmExamples.map((ex, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-slate-900">{ex.firma}</span>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">{ex.typ}</span>
                  </div>
                  <p className="font-semibold text-yellow-700 mb-2">NSM: {ex.nsm}</p>
                  <p className="text-slate-600 text-sm">{ex.dlaczego}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak wybrać North Star Metric — 6 kroków</h2>
            <div className="space-y-4">
              {nsmFramework.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex gap-4">
                  <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {s.krok}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{s.tytul}</h3>
                    <p className="text-slate-600 text-sm">{s.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 złe NSM — vanity metrics których unikać</h2>
            <div className="space-y-4">
              {badNsmExamples.map((b, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-red-200 border-2">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg">✗</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-red-700 mb-1">{b.metryka}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-red-50 rounded p-2">
                          <p className="text-xs font-semibold text-red-500 mb-1">Problem:</p>
                          <p className="text-red-700">{b.problem}</p>
                        </div>
                        <div className="bg-green-50 rounded p-2">
                          <p className="text-xs font-semibold text-green-500 mb-1">Lepsza alternatywa:</p>
                          <p className="text-green-700">{b.lepsze}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — North Star Metric</h2>
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

      <ContactSection />
    </Layout>
  );
}
