import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest SRE (Site Reliability Engineering)?",
    answer: "SRE (Site Reliability Engineering) to podejście do zarządzania operacjami IT i infrastrukturą stworzone przez Google. SRE łączy kompetencje inżynierskie z operacyjnymi — zamiast tradycyjnych 'opsów' którzy ręcznie zarządzają systemami, SRE to inżynierowie którzy automatyzują operacje kodem. Kluczowa filozofia: Toil Reduction — każda powtarzalna, manualna praca operacyjna (toil) powinna być zautomatyzowana. SRE powinni poświęcać max 50% czasu na toil, resztę na inżynierię i automatyzację. Error Budget — każdy serwis ma budżet błędów (np. 0.1% niedostępności/miesiąc przy SLO 99.9%). Jeśli error budget jest wyczerpany, nowe wdrożenia są wstrzymywane aż reliability wzrośnie.",
  },
  {
    question: "Czym są SLI, SLO i SLA?",
    answer: "SLI (Service Level Indicator) — konkretna metryka mierząca reliability serwisu. Przykłady: availability (% czasu gdy serwis odpowiada), latency (czas odpowiedzi P99), error rate (% requestów zakończonych błędem), throughput (liczba requestów per sekundę). SLO (Service Level Objective) — cel który chcemy osiągnąć dla SLI. Wewnętrzna wartość docelowa. Przykład: SLO availability = 99.9% (max 43.8 min niedostępności/miesiąc). SLO latency P99 = 500ms. SLA (Service Level Agreement) — formalna umowa z klientem określająca gwarantowany poziom SLI. Zazwyczaj jest niższy niż SLO (bo firma chce buffer). Przykład: SLA 99.5% (SLO to 99.9% — 0.4% buforu). Naruszenie SLA = financial penalties, kredyty dla klienta. Hierarchia: SLA jest zewnętrzna, SLO wewnętrzna, SLI metryka.",
  },
  {
    question: "Co to jest Error Budget i jak go używać?",
    answer: "Error Budget to ilość 'błędów' jaką serwis może sobie pozwolić w danym oknie czasowym przy utrzymaniu SLO. Przykład: SLO = 99.9% availability/miesiąc. Miesiąc = 30 dni x 24h x 60min = 43,200 minut. Error budget = 0.1% x 43,200 = 43.2 minut niedostępności/miesiąc. Jak używać error budget: Gdy error budget jest duży (dużo dostępnego) — bezpieczny czas na szybsze wdrożenia i eksperymenty. Akceptujemy wyższe ryzyko. Gdy error budget jest mały (prawie wyczerpany) — spowalniamy wdrożenia, skupiamy się na reliability. Gdy error budget = 0 (SLO naruszone) — freeze na nowe features, focus wyłącznie na stabilizację. Error budget jest mechanizmem który automatycznie balansuje prędkość vs. stability — bez ręcznego arbitrażu.",
  },
  {
    question: "Jak wygląda on-call w SRE?",
    answer: "On-call (dyżur) w SRE: rotacja inżynierów którzy są dostępni poza godzinami pracy do obsługi incydentów. Best practices: Reasonable on-call burden — inżynier nie powinien być budzony więcej niż 2 razy na noc w tygodniu dyżuru. Więcej = alert fatigue, burnout. Runbooks — dokumentacja krok po kroku jak reagować na konkretny alert. Inżynier on-call może być junior jeśli ma dobry runbook. Blameless postmortems — po każdym poważnym incydencie przeprowadź postmortem bez obwiniania osób. Fokus na systemowe przyczyny i naprawy. PagerDuty/OpsGenie — narzędzia do zarządzania alertami i rotacjami. Severity levels — P0/P1/P2/P3 określają jak szybko trzeba reagować (P0: natychmiast, P1: 15 min, P2: 4h, P3: następny dzień). Compensation — on-call powinna być wynagrodzona (przez additional pay lub time off).",
  },
  {
    question: "Jakie narzędzia używają SRE teams?",
    answer: "Narzędzia SRE: Monitoring i Observability — Prometheus + Grafana (open-source stack), Datadog, New Relic, Honeycomb (distributed tracing). Alerting — PagerDuty, OpsGenie, VictorOps. Incident Management — PagerDuty, Incident.io, FireHydrant. Logging — Elasticsearch + Kibana (ELK), Splunk, Datadog Logs, Loki. Distributed Tracing — Jaeger, Zipkin, Honeycomb, Datadog APM. Chaos Engineering — Chaos Monkey (Netflix OSS), Gremlin, Steadybit. Infrastructure as Code — Terraform, Pulumi, AWS CloudFormation. Service Mesh — Istio, Linkerd (dla Kubernetes). Kluczowy trend: Observability vs. Monitoring — monitoring sprawdza 'czy działa' (binary), observability pozwala odpowiadać na pytanie 'dlaczego nie działa' przez rich telemetry (metrics, logs, traces).",
  },
];

const sloExamples = [
  {
    serwis: "API Płatności",
    sli: "Availability (HTTP 2xx / wszystkie requesty)",
    slo: "99.95%",
    errorBudget: "21.6 min/miesiąc",
    kolor: "red",
  },
  {
    serwis: "Search Endpoint",
    sli: "Latency P99 poniżej 500ms",
    slo: "99.5%",
    errorBudget: "3.6h/miesiąc",
    kolor: "orange",
  },
  {
    serwis: "Dashboard (read-only)",
    sli: "Availability",
    slo: "99.0%",
    errorBudget: "7.2h/miesiąc",
    kolor: "blue",
  },
  {
    serwis: "Background Jobs",
    sli: "Job Success Rate",
    slo: "99.5%",
    errorBudget: "Poza krytyczną ścieżką — luźniejszy",
    kolor: "green",
  },
];

const sreCorePractices = [
  { praktyka: "Toil Reduction", opis: "Automatyzacja manualnych, powtarzalnych zadań operacyjnych. Max 50% czasu SRE na toil.", przykład: "Auto-scaling, auto-remediation, self-healing infrastructure." },
  { praktyka: "Error Budget Policy", opis: "Formalna polityka co się dzieje gdy error budget jest wyczerpany (freeze na releases).", przykład: "Gdy zostało 10% error budget → tylko P0 fixes mogą być wdrożone." },
  { praktyka: "Blameless Postmortem", opis: "Po każdym incydencie — analiza bez obwiniania ludzi. Fokus na systemy i procesy.", przykład: "Google template: timeline, impact, root cause, action items, lessons learned." },
  { praktyka: "Production Readiness Review", opis: "Checklist przed wdrożeniem nowego serwisu: monitoring, alerts, runbooks, on-call, rollback plan.", przykład: "SRE zatwierdzają nowy serwis który spełnia PRR checklist zanim trafi na produkcję." },
  { praktyka: "Chaos Engineering", opis: "Celowe wprowadzanie awarii w kontrolowanych warunkach aby przetestować odporność systemu.", przykład: "Netflix Chaos Monkey losowo wyłącza instancje produkcyjne. GameDay ćwiczenia failover." },
  { praktyka: "Capacity Planning", opis: "Prognozowanie zapotrzebowania na zasoby (CPU, memory, storage, bandwidth) w horyzoncie 6-12 miesięcy.", przykład: "Load testing przed Black Friday, auto-scaling policies, database sharding plan." },
];

export default function BlogSrePracticeCoTo() {
  return (
    <Layout>
      <SEOHead
        title="SRE — co to jest Site Reliability Engineering? | Fotz.pl"
        description="SRE (Site Reliability Engineering): SLI, SLO, SLA, error budget, on-call, toil reduction i kluczowe praktyki. Przewodnik po podejściu Google do reliability."
        canonicalUrl="https://fotz.pl/blog/sre-site-reliability-engineering-co-to-jest"
      />
      <ArticleSchema
        title="SRE — co to jest Site Reliability Engineering?"
        description="SRE: SLI, SLO, SLA, error budget, on-call management, toil reduction, blameless postmortem i narzędzia. Kompleksowy przewodnik po Site Reliability Engineering."
        url="https://fotz.pl/blog/sre-site-reliability-engineering-co-to-jest"
        datePublished="2024-02-24"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SRE", url: "https://fotz.pl/blog/sre-site-reliability-engineering-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "SRE", href: "/blog/sre-site-reliability-engineering-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Site Reliability Engineering
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Google wynalazło SRE jako odpowiedź na pytanie: jak skalować
              operacje bez proporcjonalnego wzrostu ops-teamów?
              Automatyzacja, error budgets i blameless culture.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Max toil", value: "50%" },
                { label: "SLO 99.9%", value: "43min/mies." },
                { label: "Stworzono przez", value: "Google" },
                { label: "Kluczowa zasada", value: "Error Budget" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-cyan-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLO Examples */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Przykłady SLO dla różnych serwisów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie każdy serwis potrzebuje 99.99% SLO. Właściwy poziom SLO
              zależy od krytyczności serwisu i kosztu jego utrzymania.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-5">
            {sloExamples.map((s) => (
              <FadeInView key={s.serwis}>
                <div className={`rounded-xl border-2 p-5 ${
                  s.kolor === "red" ? "border-red-200 bg-red-50" :
                  s.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  s.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  "border-green-200 bg-green-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-3 ${
                    s.kolor === "red" ? "text-red-800" :
                    s.kolor === "orange" ? "text-orange-800" :
                    s.kolor === "blue" ? "text-blue-800" :
                    "text-green-800"
                  }`}>{s.serwis}</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-semibold text-gray-700">SLI: </span><span className="text-gray-600">{s.sli}</span></div>
                    <div><span className="font-semibold text-gray-700">SLO: </span><span className="font-bold">{s.slo}</span></div>
                    <div><span className="font-semibold text-gray-700">Error Budget: </span><span className="text-gray-600">{s.errorBudget}</span></div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Core practices */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych praktyk SRE</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              SRE to nie tylko monitoring — to zestaw praktyk inżynierskich
              budujących kulturę reliability w organizacji.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {sreCorePractices.map((p, i) => (
              <FadeInView key={p.praktyka}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-cyan-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{p.praktyka}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <p className="text-gray-700">{p.opis}</p>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Przykład</div>
                          <p className="text-gray-700">{p.przykład}</p>
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
