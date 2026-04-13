import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest NPS (Net Promoter Score)?",
    answer: "NPS (Net Promoter Score) to metryka lojalności klientów bazująca na jednym pytaniu: 'Jak bardzo prawdopodobne jest, że polecisz naszą firmę/produkt znajomemu lub współpracownikowi?' na skali 0-10. Respondenci dzielą się na: Promotors (9-10) — entuzjastyczni lojalni klienci, którzy aktywnie polecają. Passives (7-8) — zadowoleni, ale nie entuzjastyczni. Detractors (0-6) — niezadowoleni, którzy mogą szkodzić przez negatywne opinie. NPS = % Promotors - % Detractors. Wynik od -100 do +100.",
  },
  {
    question: "Jaki NPS jest dobry?",
    answer: "Interpretacja NPS: Poniżej 0 — więcej Detractors niż Promotors, krytyczny problem do adresowania. 0-30 — dobry, pozytywny NPS. 30-70 — świetny NPS, firma ma lojalne grono klientów. Powyżej 70 — wyjątkowy, klasa światowa (Apple, Amazon osiągają 70+). Ważne: NPS różni się znacznie między branżami. SaaS B2B benchmark to zazwyczaj 30-50. Porównuj swój NPS do konkurentów w tej samej branży, nie do absolutnej skali. Trend NPS w czasie jest ważniejszy niż absolutna wartość.",
  },
  {
    question: "Jak prawidłowo zbierać i analizować NPS?",
    answer: "Zbieranie NPS: Relational NPS — wysyłany cyklicznie (co kwartał, co rok) do całej bazy klientów — mierzy ogólną lojalność. Transactional NPS — wysyłany po konkretnym zdarzeniu (onboarding, support ticket, renew) — mierzy satysfakcję z konkretnej interakcji. Kluczowe: zawsze pytaj o follow-up 'Co jest głównym powodem Twojej oceny?' — to daje actionable insights. Respond to Detractors w ciągu 24h — shows you care. Analyze open-text comments — ilościowy score daje mało informacji bez jakościowego kontekstu.",
  },
  {
    question: "Jak zwiększyć NPS?",
    answer: "Strategie poprawy NPS: Zamknij pętlę z Detractors — skontaktuj się, zrozum problem, rozwiąż. Przekształcaj Passives w Promotors przez proactive success management. Identyfikuj drivers NPS przez analizę open-text — co najczęściej powoduje niską i wysoką ocenę? Popraw customer onboarding — słabe pierwsze doświadczenia powodują niski NPS. Mierz NPS per segment — SMB może mieć inny NPS niż Enterprise, co wymaga różnych działań. Angażuj Promotors — referral programs, case studies, testimoniale zamieniają entuzjazm w wzrost.",
  },
  {
    question: "Czym NPS różni się od CSAT i CES?",
    answer: "Porównanie metryk satysfakcji: NPS (Net Promoter Score) — mierzy długoterminową lojalność i prawdopodobieństwo polecenia. Najlepszy do strategicznej oceny zdrowia relacji z klientami. CSAT (Customer Satisfaction Score) — mierzy satysfakcję z konkretnej interakcji ('Czy byłeś zadowolony z tej obsługi?'). Szybki i łatwy, ale nie przewiduje retencji. CES (Customer Effort Score) — mierzy wysiłek włożony przez klienta ('Jak łatwe było rozwiązanie Twojego problemu?'). Najlepszy do optymalizacji customer service i produktu. Dojrzałe organizacje używają wszystkich trzech metryk dla pełnego obrazu.",
  },
];

const npsScale = [
  { zakres: "0–6", typ: "Detractors", kolor: "red", opis: "Niezadowoleni klienci, którzy mogą aktywnie szkodzić reputacji przez negatywne opinie" },
  { zakres: "7–8", typ: "Passives", kolor: "gray", opis: "Zadowoleni, ale nie entuzjastyczni — wrażliwi na oferty konkurencji, nie polecają aktywnie" },
  { zakres: "9–10", typ: "Promotors", kolor: "green", opis: "Lojalni entuzjaści, którzy aktywnie polecają i napędzają organiczny wzrost firmy" },
];

const npsBenchmarks = [
  { branża: "SaaS B2B", benchmark: "30–50", lider: "50+", uwaga: "Zależy od segmentu (SMB vs. Enterprise)" },
  { branża: "E-commerce", benchmark: "20–40", lider: "60+", uwaga: "Amazon utrzymuje NPS 50-70" },
  { branża: "Banking / FinTech", benchmark: "10–35", lider: "50+", uwaga: "Tradycyjne banki często poniżej 20" },
  { branża: "Hospitality / Hotels", benchmark: "30–60", lider: "70+", uwaga: "Luksusowe marki jak Ritz Carlton 70+" },
  { branża: "Telekomunikacja", benchmark: "-5–30", lider: "40+", uwaga: "Jedna z najtrudniejszych branż dla NPS" },
  { branża: "Technologia / Consumer", benchmark: "30–60", lider: "70+", uwaga: "Apple utrzymuje konsekwentnie powyżej 70" },
];

const npsActionPlan = [
  {
    segment: "Detractors (0-6)",
    priorytet: "Krytyczny",
    działania: ["Skontaktuj się w ciągu 24h z personalnym outreach", "Zrozum główny powód niezadowolenia", "Zaproponuj konkretne rozwiązanie lub kompensatę", "Eskaluj do CSM lub managera jeśli konieczne", "Follow-up po 30 dniach — czy problem rozwiązany?"],
    kolor: "red",
  },
  {
    segment: "Passives (7-8)",
    priorytet: "Wysoki",
    działania: ["Zapytaj co jest potrzebne do oceny 9 lub 10", "Proactive check-in od CSM co kwartał", "Angażuj przez webinary, training, nowe feature release", "Monitoruj adopcję produktu — czy używają pełnych możliwości?", "Zaproponuj case study lub referral jeśli adopcja wysoka"],
    kolor: "blue",
  },
  {
    segment: "Promotors (9-10)",
    priorytet: "Wzrost",
    działania: ["Zaproś do programu referencyjnego", "Zapytaj o case study lub testimonial", "Angażuj w early access nowych funkcji", "Community building — advisory board, user group", "Upsell — zadowolony klient jest gotowy na expansion"],
    kolor: "green",
  },
];

export default function BlogNpsCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="NPS (Net Promoter Score) — co to jest i jak mierzyć? | Fotz.pl"
        description="Net Promoter Score — jak obliczać NPS, interpretować wyniki, benchmarki branżowe i jak zwiększyć NPS. Kompletny przewodnik po metryce lojalności klientów."
        canonicalUrl="https://fotz.pl/blog/nps-net-promoter-score-co-to-jest"

        keywords="NPS (Net Promoter Score) co to jest, NPS (Net Promoter Score) definicja, czym jest NPS (Net Promoter Score), NPS (Net Promoter Score) przykłady, jak działa NPS (Net Promoter Score), NPS (Net Promoter Score) znaczenie, NPS (Net Promoter Score) przewodnik"

        canonical="https://fotz.pl/blog/nps-net-promoter-score-co-to-jest"
      />
      <ArticleSchema
        title="NPS (Net Promoter Score) — co to jest i jak mierzyć?"
        description="Kompletny przewodnik po Net Promoter Score: obliczanie, benchmarki, CSAT vs CES i plan działania."
        url="https://fotz.pl/blog/nps-net-promoter-score-co-to-jest"
        datePublished="2024-02-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "NPS — Net Promoter Score", url: "https://fotz.pl/blog/nps-net-promoter-score-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "NPS", href: "/blog/nps-net-promoter-score-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Customer Success
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NPS — Net Promoter Score
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jedno pytanie, które mówi więcej niż długa ankieta. NPS to jedna z najszerzej
              stosowanych metryk lojalności klientów na świecie — ale tylko wtedy gdy
              rozumiesz jak ją mierzyć, interpretować i na niej działać.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Skala NPS", value: "-100 do +100" },
                { label: "Promotors threshold", value: "9–10" },
                { label: "SaaS B2B benchmark", value: "30–50" },
                { label: "Klasa światowa", value: "70+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skala NPS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skala NPS — 3 segmenty</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              NPS = % Promotors - % Detractors. Passives wliczają się do mianownika (całość respondentów)
              ale nie do licznika — są neutralni dla wyniku.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {npsScale.map((s) => (
              <FadeInView key={s.typ}>
                <div className={`rounded-xl p-6 border-2 text-center ${
                  s.kolor === "red" ? "border-red-200 bg-red-50" :
                  s.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-gray-200 bg-gray-50"
                }`}>
                  <div className={`text-3xl font-bold mb-2 ${
                    s.kolor === "red" ? "text-red-600" :
                    s.kolor === "green" ? "text-green-600" :
                    "text-gray-600"
                  }`}>
                    {s.zakres}
                  </div>
                  <div className={`text-lg font-bold mb-3 ${
                    s.kolor === "red" ? "text-red-800" :
                    s.kolor === "green" ? "text-green-800" :
                    "text-gray-800"
                  }`}>
                    {s.typ}
                  </div>
                  <p className="text-sm text-gray-600">{s.opis}</p>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-2">Formuła NPS</h3>
              <p className="text-sm text-gray-700">
                Jeśli z 100 respondentów: 45 to Promotors (9-10), 30 to Passives (7-8), 25 to Detractors (0-6),
                to NPS = 45% - 25% = <strong>+20</strong>. Wynik powyżej 0 oznacza, że masz więcej promotorów niż krytyków.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Benchmarki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki NPS według branży</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              NPS różni się drastycznie między branżami — porównuj swój wynik do branżowego benchmarku,
              nie do absolutnej skali.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Branża</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Branżowy benchmark</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">NPS lidera</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Uwaga</th>
                </tr>
              </thead>
              <tbody>
                {npsBenchmarks.map((b, i) => (
                  <tr key={b.branża} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-sm font-semibold text-gray-800">{b.branża}</td>
                    <td className="p-4 text-sm font-medium text-green-700">{b.benchmark}</td>
                    <td className="p-4 text-sm font-bold text-emerald-700">{b.lider}</td>
                    <td className="p-4 text-sm text-gray-600">{b.uwaga}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Action Plan */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plan działania według segmentu NPS</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Zbieranie NPS bez działania na wynikach to strata zasobów. Każdy segment wymaga
              innego podejścia i działań.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {npsActionPlan.map((plan) => (
              <FadeInView key={plan.segment}>
                <div className={`rounded-xl border-2 p-6 ${
                  plan.kolor === "red" ? "border-red-200 bg-red-50" :
                  plan.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  "border-green-200 bg-green-50"
                }`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`font-bold text-xl ${
                      plan.kolor === "red" ? "text-red-800" :
                      plan.kolor === "blue" ? "text-blue-800" :
                      "text-green-800"
                    }`}>
                      {plan.segment}
                    </h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      plan.kolor === "red" ? "bg-red-200 text-red-800" :
                      plan.kolor === "blue" ? "bg-blue-200 text-blue-800" :
                      "bg-green-200 text-green-800"
                    }`}>
                      {plan.priorytet}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plan.działania.map((d, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className={`flex-shrink-0 font-bold ${
                          plan.kolor === "red" ? "text-red-500" :
                          plan.kolor === "blue" ? "text-blue-500" :
                          "text-green-500"
                        }`}>→</span>
                        {d}
                      </li>
                    ))}
                  </ul>
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

      <RelatedArticles currentArticleId="nps-net-promoter-score-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
