import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Observability i czym różni się od Monitoringu?",
    answer: "Observability (obserwowalność) to miara tego jak dobrze możesz zrozumieć wewnętrzny stan systemu na podstawie jego zewnętrznych sygnałów. Termin pochodzi z teorii sterowania (control theory) i oznacza zdolność do wnioskowania o stanie systemu z jego wyjść. Trzy filary observability: Metrics (metryki) — agregowane, numeryczne dane o systemie (latency p99, error rate, CPU usage). Traces (ślady) — śledzenie pojedynczego żądania przez wszystkie serwisy w systemie rozproszonym. Logs (logi) — zdarzenia z kontekstem w czasie. Monitoring vs. Observability: Monitoring = wiesz co sprawdzać. Wiesz jakie pytania zadać. Tworzysz alerty na znane problemy. Observability = możesz zadawać pytania których jeszcze nie znasz. Eksplorujesz nieznane problemy. Debugging production issues który nigdy wcześniej nie wystąpił. Dlaczego observability jest krytyczne w mikrousługach: jedno żądanie użytkownika może przechodzić przez 10-50 serwisów. Bez distributed tracing — nie wiesz który serwis jest wolny lub błędny. Monolityczne podejście do logów nie skaluje się. OpenTelemetry (OTel) stał się de-facto standardem zbierania sygnałów observability.",
  },
  {
    question: "Co to jest OpenTelemetry i jak go wdrożyć?",
    answer: "OpenTelemetry (OTel) to CNCF projekt (graduated) — open-source framework do instrumentacji, zbierania i eksportowania danych telemetry (metrics, traces, logs). Jest vendor-neutral — raz instrumentujesz kod, możesz wysyłać do różnych backendów (Jaeger, Tempo, Prometheus, Datadog, New Relic). Komponenty OTel: OTel API — kod w aplikacji wywołuje API do generowania metrics/traces/logs. OTel SDK — implementacja API w danym języku (Java, Python, Go, .NET, JS i inne). OTel Collector — sidecar lub daemon zbierający sygnały, przetwarzający i wysyłający do backendu. Exporters — wysyłają do konkretnych backendów (OTLP, Jaeger, Prometheus). Auto-instrumentation: wiele bibliotek (HTTP, gRPC, databases) jest automatycznie instrumentowanych przez OTel bez zmiany kodu aplikacji. Wdrożenie: Dodaj OTel SDK do aplikacji. Skonfiguruj OTel Collector (DaemonSet na K8s lub sidecar). Skonfiguruj eksportery do Jaeger (traces), Prometheus (metrics), Loki (logs). Użyj Grafana jako unified UI do wszystkich trzech. Semantic Conventions: OTel definiuje standardowe nazwy atrybutów dla HTTP, DB, messaging — zapewnia spójność między serwisami.",
  },
  {
    question: "Distributed Tracing — jak działa i jak interpretować?",
    answer: "Distributed Tracing (śledzenie rozproszone) śledzi żądanie przez wszystkie serwisy mikroserwisowej architektury, tworząc pełny obraz co się dzieje podczas obsługi jednego requesta. Koncepty: Trace — cała ścieżka żądania od startu do końca. Span — pojedyncza operacja w ramach trace (np. wywołanie bazy danych, wywołanie HTTP do innego serwisu). Parent-child relacja — spany tworzą drzewo. Trace Context Propagation — każde żądanie niesie Trace ID i Span ID w nagłówkach HTTP (W3C TraceContext standard). Jak interpretować trace: Flamegraph / Waterfall view — wizualizacja wszystkich spanów w czasie. Gdzie jest najdłuższy span? Który serwis dodaje latency? Błędy w spanach — które serwisy zwracają błędy? Tail latency: p99 może być 10x wyższe niż p50 — traces pomagają zrozumieć dlaczego (cold starts, garbage collection, lock contention). Narzędzia: Jaeger (CNCF, open-source), Grafana Tempo (open-source, skalowalne), Zipkin (historyczny, uproszczony), Datadog APM / New Relic (komercyjne). Sampling: nie tracuj 100% requestów na dużym ruchu. Head-based sampling (random) lub tail-based sampling (zawsze zapisuj traces z błędami i wysoką latency).",
  },
  {
    question: "Jak zbudować observability stack — Prometheus, Grafana, Loki?",
    answer: "Observability Stack: Prometheus (metrics): pull-based time-series database. Scrape targets co 15s. PromQL jako language zapytań. Alerty przez Alertmanager. Eksport przez /metrics endpoint. Grafana (visualization): dashboard dla wszystkich sygnałów. Łączy Prometheus (metrics), Loki (logs), Tempo (traces) w jeden UI. Grafana Mimir — skalowana wersja Prometheus dla enterprise. Loki (logs): log aggregation system by Grafana Labs. Index tylko metadata (labels), nie treść logów — tańsze i szybsze niż Elasticsearch dla logów. LogQL jako language zapytań. Promtail jako agent zbierający logi. Grafana Tempo (traces): skalowane distributed tracing storage. Kompatybilne z Jaeger, Zipkin, OTel. Integracja z Loki — jump z loga do trace w jednym kliknięciu. OpenTelemetry Collector jako glue: OTel Collector przyjmuje OTLP, może przekształcać i wysyłać do Prometheus, Loki, Tempo jednocześnie. Alternatywne stack: Datadog — komercyjne, all-in-one. New Relic, Dynatrace — komercyjne enterprise. Elastic Observability (Elasticsearch + Kibana) — rozbudowane, kosztowne. Zalecenie startowe: zacznij od Prometheus + Grafana. Dodaj Loki dla logów. Dodaj Tempo gdy potrzebujesz traces.",
  },
  {
    question: "SLOs, SLIs, SLAs — jak definiować i mierzyć?",
    answer: "SLOs, SLIs, SLAs — fundamenty reliability engineering: SLA (Service Level Agreement): umowa z klientem dotycząca dostępności. Np. '99.9% uptime per miesiąc' z konsekwencjami finansowymi (credits). Zewnętrzna, prawna umowa. SLO (Service Level Objective): wewnętrzny cel niezawodności który chcesz osiągnąć. Bardziej ambitny niż SLA (żeby mieć bufor). Np. 'latency p99 poniżej 500ms dla 99.5% requestów'. SLI (Service Level Indicator): konkretna metryka którą mierzysz. Np. 'odsetek requestów HTTP 200 do wszystkich requestów w ciągu 5 minut'. Error Budget: Error Budget = 1 - SLO. Jeśli SLO = 99.9% → Error Budget = 0.1% = 43 minuty outage per miesiąc. Zespół może deployować dopóki nie wyczerpie error budget. Jak definiować dobre SLOs: Zaczyn od customer perspective — co klient odczuwa? Latency, availability, throughput. Definiuj na granicy serwisu (co klient widzi), nie wewnętrznie. Zacznij z luźnymi SLOs (99%), zacieśniaj gdy system dojrzewa. Narzędzia: Sloth (SLO generator dla Prometheus), Nobl9, Pyrra. Google SRE Book — fundamentalna lektura dla SLOs i Error Budgets.",
  },
];

const observabilityPillars = [
  { filar: "Metrics", opis: "Agregowane numeryczne dane w czasie. Latency, throughput, error rate, saturation.", narzędzia: "Prometheus, Grafana Mimir, InfluxDB", useCase: "Alerty, dashboardy, capacity planning" },
  { filar: "Traces", opis: "Śledzenie żądania przez wszystkie serwisy. Identyfikacja bottlenecków i błędów.", narzędzia: "Jaeger, Grafana Tempo, Zipkin", useCase: "Debugging latency, microservices troubleshooting" },
  { filar: "Logs", opis: "Zdarzenia z kontekstem i timestampem. Rich context dla debuggingu.", narzędzia: "Grafana Loki, Elasticsearch, Splunk", useCase: "Debugging błędów, audit trail, security" },
  { filar: "Profiles", opis: "Continuous profiling — CPU/memory heatmaps w czasie. Nowy, 4. filar.", narzędzia: "Pyroscope, Parca, Grafana Pyroscope", useCase: "Performance optimization, cost reduction" },
];

const otelStack = [
  { warstwa: "Instrumentacja", technologia: "OpenTelemetry SDK + Auto-Instrumentation", opis: "Generuje traces, metrics, logs w kodzie aplikacji" },
  { warstwa: "Zbieranie", technologia: "OTel Collector", opis: "Przyjmuje, przetwarza, przekształca i eksportuje sygnały" },
  { warstwa: "Metryki", technologia: "Prometheus + Grafana Mimir", opis: "Przechowywanie i query time-series metrics" },
  { warstwa: "Traces", technologia: "Grafana Tempo / Jaeger", opis: "Przechowywanie i wizualizacja distributed traces" },
  { warstwa: "Logi", technologia: "Grafana Loki + Promtail", opis: "Agregacja i query logów ze wszystkich serwisów" },
  { warstwa: "Wizualizacja", technologia: "Grafana", opis: "Unified dashboard dla metrics, traces i logs" },
];

export default function BlogObservabilityCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Observability — co to jest, OpenTelemetry, Prometheus i Grafana? | Fotz.pl"
        description="Observability: 3 filary (metrics/traces/logs), OpenTelemetry, Prometheus, Grafana, Loki, Tempo, Distributed Tracing, SLOs/SLIs i jak budować stack observability."
        canonicalUrl="https://fotz.pl/blog/observability-co-to-jest-opentelemetry-prometheus-grafana"

        keywords="Observability co to jest, Observability definicja, czym jest Observability, Observability przykłady, jak działa Observability, Observability znaczenie, Observability przewodnik"
      />
      <ArticleSchema
        title="Observability — co to jest, OpenTelemetry, Prometheus i Grafana?"
        description="Observability: 4 filary, OpenTelemetry wdrożenie, Prometheus+Grafana+Loki+Tempo stack, Distributed Tracing, SLOs/SLIs/Error Budget i narzędzia."
        url="https://fotz.pl/blog/observability-co-to-jest-opentelemetry-prometheus-grafana"
        datePublished="2024-03-27"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Observability", url: "https://fotz.pl/blog/observability-co-to-jest-opentelemetry-prometheus-grafana" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Observability", href: "/blog/observability-co-to-jest-opentelemetry-prometheus-grafana" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SRE / Cloud Native
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Observability
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Monitoring mówi ci że coś jest nie tak. Observability mówi ci dlaczego.
              Trzy filary — metrics, traces, logs — dają pełny obraz wewnętrznego
              stanu systemu bez potrzeby dodawania nowych instrumentacji przy każdym incydencie.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "3 filary", value: "Metrics/Traces/Logs" },
                { label: "Standard", value: "OpenTelemetry" },
                { label: "Stack", value: "Prometheus+Grafana" },
                { label: "CNCF", value: "Graduated Project" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-teal-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filary */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 filary Observability</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Trzy klasyczne filary (metrics, traces, logs) uzupełnia coraz popularniejszy
              czwarty — continuous profiling.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {observabilityPillars.map((p) => (
              <FadeInView key={p.filar}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{p.filar}</h3>
                  <p className="text-gray-700 text-sm mb-3">{p.opis}</p>
                  <div className="text-xs text-teal-700 font-semibold mb-1">Narzędzia: {p.narzędzia}</div>
                  <div className="text-xs text-gray-500">Use case: {p.useCase}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OpenTelemetry Stack — warstwa po warstwie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od instrumentacji kodu do unified dashboardu — kompletny open-source
              observability stack oparty na OpenTelemetry.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {otelStack.map((w, i) => (
              <FadeInView key={w.warstwa}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <h3 className="font-bold text-gray-900">{w.warstwa}</h3>
                    </div>
                    <span className="text-teal-700 font-semibold text-sm">{w.technologia}</span>
                    <p className="text-gray-600 text-sm">{w.opis}</p>
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
