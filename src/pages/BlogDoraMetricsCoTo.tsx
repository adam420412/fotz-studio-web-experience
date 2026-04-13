import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to są DORA Metrics i dlaczego są ważne?",
    answer: "DORA Metrics (DevOps Research and Assessment) to cztery metryki opracowane przez Google/DORA team na podstawie badań ponad 33,000 profesjonalistów DevOps. Mierzą wydajność software delivery i operational stability. Są najlepiej zwalidowanymi empirycznie miarami efektywności dostarczania oprogramowania. Cztery metryki: Deployment Frequency (DF) — jak często organizacja deployuje na produkcję. Change Lead Time (CLT) — czas od commitu do deploymentu na produkcję. Change Failure Rate (CFR) — odsetek deploymentów powodujących incydent/rollback. Mean Time to Restore (MTTR) — średni czas naprawy po incydencie. DORA performance tiers: Elite, High, Medium, Low. Elite performers (top 25%) deployują on-demand (wielokrotnie dziennie), CLT poniżej 1 godziny, CFR poniżej 5%, MTTR poniżej 1 godziny. Dlaczego ważne: badania DORA wykazały że Elite performers mają 208x więcej deployów, 106x szybszy CLT i 2604x szybszy MTTR niż Low performers. Korelacja z wynikami biznesowymi: wyższy NPS, niższy churn, wyższa profitability.",
  },
  {
    question: "Jak mierzyć DORA Metrics w swoim zespole?",
    answer: "Mierzenie DORA Metrics: Deployment Frequency: policz deploye na produkcję per tydzień/miesiąc. Zdefiniuj co liczy się jako deployment — każda zmiana, nie tylko release. Narzędzia: GitHub Actions workflow events, Argo CD deployment history, DORA metrics dashboards (LinearB, Sleuth, Jellyfish). Change Lead Time: czas od pierwszego commitu w PR do deployment na produkcję. Wyzwanie: musisz połączyć dane z Git, CI/CD i deployment system. Narzędzia: Faros AI, LinearB, Sleuth — automatycznie kalkulują z API GitHub/GitLab. Change Failure Rate: liczba incydentów / liczba deploymentów × 100%. Wymaga integracji z incident management (PagerDuty, OpsGenie). Jeśli brak formal incident management — trudno mierzyć. Mean Time to Restore: czas od wykrycia incydentu do pełnego recovery. Dane: PagerDuty alert created timestamp vs. resolved timestamp. Segmentuj MTTR per severity (P1 vs. P2 vs. P3). Pułapki: nie mierz tylko tych metryk które wyglądają dobrze. DORA jest wartościowe tylko przy honest measurement.",
  },
  {
    question: "DORA Elite vs. High vs. Medium vs. Low — benchmarki?",
    answer: "DORA Performance Tiers (2023 State of DevOps Report): Elite performers: Deployment Frequency — on demand (wiele razy dziennie). Change Lead Time — poniżej 1 godziny. Change Failure Rate — 0-5%. MTTR — poniżej 1 godziny. High performers: DF — raz dziennie do raz tygodniowo. CLT — 1 dzień do 1 tygodnia. CFR — 5-10%. MTTR — 1 dzień. Medium performers: DF — raz tygodniowo do raz miesięcznie. CLT — 1 tydzień do 1 miesiąca. CFR — 10-15%. MTTR — 1 dzień do 1 tygodnia. Low performers: DF — raz miesięcznie lub rzadziej. CLT — 1-6 miesięcy. CFR — 15-30%+. MTTR — ponad 1 tydzień. Kontekst: typowy nowy startup z małym team może być w High tier. Legacy enterprise z monolitem często w Low/Medium. Elite tier to Amazon, Google, Netflix — ale wiele mid-size SaaS firm tam dochodzi. Cel: nie celuj w Elite od razu — skup się na przejściu z Low do Medium, Medium do High.",
  },
  {
    question: "Jak poprawić DORA Metrics — strategie dla każdej metryki?",
    answer: "Poprawa DORA Metrics per metryka: Deployment Frequency (niska): Problem — duże, rzadkie deploye. Rozwiązanie: trunk-based development (małe, częste PRy). Feature flags — rozdziel deployment od release. Automated testing — usuń ręczne testy jako bramkę. Change Lead Time (długi): Problem — długi review, wolne CI, manualne etapy. Rozwiązanie: limity PR size (max 400 linii). Parallel CI jobs. Automatyczne staging environment dla każdego PR (Ephemeral environments). Eliminacja manualnych approval dla non-prod environments. Change Failure Rate (wysoki): Problem — za mało testów, brak staging, brak code review. Rozwiązanie: wymagaj automated tests jako merge requirement. Canary deployments / progressive delivery. Lepszy staging environment parity. Pair programming lub mandatory 2nd reviewer. MTTR (długi): Problem — słaby alerting, trudna diagnoza, brak runbooks. Rozwiązanie: SLO-based alerting (alert na symptomy, nie przyczyny). Distributed tracing (Jaeger, Tempo). Runbooks dla top 10 incydentów. Chaos Engineering — trenuj recovery zanim nastąpi prawdziwy incydent. Blameless post-mortems po każdym P1/P2.",
  },
  {
    question: "DORA Metrics a 5th metric — Reliability i burnout?",
    answer: "5th DORA Metric — Reliability: W 2021 DORA dodał 5. metrykę — Reliability (niezawodność), mierzoną przez Operational Performance: czy system osiąga swoje availability i performance targets? Reliability = suma SLO achievement + incident count + on-call experience. SPACE framework (GitHub Research, 2021): alternatywne podejście do mierzenia developer productivity. Satisfaction and wellbeing, Performance, Activity, Communication, Efficiency. Burnout correlation: badania DORA wykazały że Low performers mają znacznie wyższy poziom burnout wśród inżynierów. Elite performers — niższy burnout przez: mniej manualne procesy, szybszy recovery, rzadsze nocne incydenty. Developer Experience (DevEx): nowy trend — mierzenie Developer Experience jako leading indicator produktywności i retencji inżynierów. SPACE + DORA + DevEx = holistic engineering effectiveness measurement. Praktyczne zastosowanie: DORA metrics powinny informować decyzje inwestycyjne w tooling, processes i architecture — nie być celem samym w sobie. Goodhart's Law: gdy miara staje się celem, przestaje być dobrą miarą.",
  },
];

const doraMetrics = [
  {
    nazwa: "Deployment Frequency",
    skrót: "DF",
    opis: "Jak często team deployuje kod na produkcję",
    elite: "On-demand (wiele razy/dzień)",
    low: "Raz miesięcznie lub rzadziej",
    typ: "Throughput",
    kolor: "blue",
  },
  {
    nazwa: "Change Lead Time",
    skrót: "CLT",
    opis: "Czas od commitu do deploymentu na produkcję",
    elite: "Mniej niż 1 godzina",
    low: "1-6 miesięcy",
    typ: "Throughput",
    kolor: "green",
  },
  {
    nazwa: "Change Failure Rate",
    skrót: "CFR",
    opis: "Odsetek deploymentów powodujących incydent",
    elite: "0-5%",
    low: "15-30%+",
    typ: "Stability",
    kolor: "red",
  },
  {
    nazwa: "Mean Time to Restore",
    skrót: "MTTR",
    opis: "Średni czas naprawy po incydencie produkcyjnym",
    elite: "Mniej niż 1 godzina",
    low: "Ponad 1 tydzień",
    typ: "Stability",
    kolor: "orange",
  },
];

const improvementLevers = [
  { metryka: "Deployment Frequency", akcja: "Trunk-based development + feature flags", trudność: "Wysoka" },
  { metryka: "Deployment Frequency", akcja: "Małe PRy (max 400 linii) + automated review", trudność: "Średnia" },
  { metryka: "Change Lead Time", akcja: "Ephemeral environments dla każdego PR", trudność: "Wysoka" },
  { metryka: "Change Lead Time", akcja: "Parallel CI jobs, cache dependencies", trudność: "Niska" },
  { metryka: "Change Failure Rate", akcja: "Canary / progressive delivery rollouts", trudność: "Wysoka" },
  { metryka: "MTTR", akcja: "SLO-based alerting + runbooks dla top incydentów", trudność: "Średnia" },
];

export default function BlogDoraMetricsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="DORA Metrics — co to jest i jak mierzyć wydajność DevOps? | Fotz.pl"
        description="DORA Metrics: Deployment Frequency, Change Lead Time, Change Failure Rate, MTTR. Benchmarki Elite/High/Medium/Low, jak mierzyć i poprawić metryki DevOps."
        canonicalUrl="https://fotz.pl/blog/dora-metrics-co-to-jest-jak-mierzyc-wydajnosc-devops"

        keywords="DORA Metrics co to jest, DORA Metrics definicja, czym jest DORA Metrics, DORA Metrics przykłady, jak działa DORA Metrics, DORA Metrics znaczenie, DORA Metrics przewodnik"
      />
      <ArticleSchema
        title="DORA Metrics — co to jest i jak mierzyć wydajność DevOps?"
        description="DORA Metrics: 4 metryki (DF, CLT, CFR, MTTR), tiers Elite/High/Medium/Low, jak mierzyć, strategie poprawy per metryka i 5. metryka Reliability."
        url="https://fotz.pl/blog/dora-metrics-co-to-jest-jak-mierzyc-wydajnosc-devops"
        datePublished="2024-03-25"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "DORA Metrics", url: "https://fotz.pl/blog/dora-metrics-co-to-jest-jak-mierzyc-wydajnosc-devops" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "DORA Metrics", href: "/blog/dora-metrics-co-to-jest-jak-mierzyc-wydajnosc-devops" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              DevOps / Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DORA Metrics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Cztery metryki zwalidowane na bazie badań ponad 33,000
              profesjonalistów DevOps. Elite performers deployują 208x częściej
              i naprawiają incydenty 2604x szybciej niż Low performers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Elite DF", value: "On-demand" },
                { label: "Elite CLT", value: "Poniżej 1h" },
                { label: "Elite CFR", value: "0-5%" },
                { label: "Elite MTTR", value: "Poniżej 1h" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-blue-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 metryki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cztery metryki DORA</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dwie metryki Throughput (szybkość dostarczania) i dwie Stability (stabilność).
              Balans obu jest kluczem — szybkość bez stabilności nie jest wartościowa.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {doraMetrics.map((m) => (
              <FadeInView key={m.nazwa}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-2xl font-black text-blue-600 mr-2">{m.skrót}</span>
                      <h3 className="font-bold text-gray-900 inline">{m.nazwa}</h3>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      m.typ === "Throughput" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>{m.typ}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{m.opis}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-green-50 rounded-lg p-2">
                      <div className="text-xs font-bold text-green-700 uppercase mb-1">Elite</div>
                      <div className="text-sm text-gray-800 font-semibold">{m.elite}</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-2">
                      <div className="text-xs font-bold text-red-600 uppercase mb-1">Low</div>
                      <div className="text-sm text-gray-800">{m.low}</div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Dźwignie poprawy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dźwignie poprawy DORA Metrics</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda metryka ma konkretne taktyki poprawy. Zacznij od
              najniżej wiszącego owocu dla swojego aktualnego tier.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {improvementLevers.map((l, i) => (
              <FadeInView key={i}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <span className="text-xs font-bold text-blue-600 uppercase block mb-1">Metryka</span>
                      <span className="font-semibold text-gray-900">{l.metryka}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{l.akcja}</p>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        l.trudność === "Niska" ? "bg-green-100 text-green-700" :
                        l.trudność === "Średnia" ? "bg-yellow-100 text-yellow-700" :
                        "bg-red-100 text-red-700"
                      }`}>{l.trudność}</span>
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
