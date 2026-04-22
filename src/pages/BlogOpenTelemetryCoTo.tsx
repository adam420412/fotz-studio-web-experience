import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest OpenTelemetry i jak zastąpił wcześniejsze standardy?",
    answer: "OpenTelemetry (OTel) to open-source framework i zestaw API, SDK i narzędzi do zbierania telemetrii (traces, metrics, logs) z aplikacji i infrastruktury. Jest wynikiem połączenia OpenTracing i OpenCensus w 2019 roku — jeden spójny standard dla całej branży (CNCF). Problem który rozwiązuje: wcześniej każdy vendor (Datadog, New Relic, Jaeger) miał własne SDK. Zmiana vendora = zmiana kodu instrumentacji w całej aplikacji. OTel: instrumentuj raz, wysyłaj do dowolnego backendu. Trzy filary telemetrii: Traces — end-to-end śledzenie requestów przez mikroserwisy. Każdy trace = drzewo spanów. Każdy span = operacja (HTTP request, DB query, gRPC call) z czasem, atrybutami, statusem. Metrics — numeryczne pomiary w czasie (counter, gauge, histogram). Latency, error rate, throughput, CPU, memory. Logs — ustrukturyzowane zdarzenia. OTel unifikuje logi z traces (correlation). OTel Components: API — interface niezależny od implementacji (aplikacja używa API). SDK — implementacja (producent konfiguruje SDK). Instrumentation Libraries — automatyczna instrumentacja popularnych frameworków (Express, Django, Spring, gRPC). Exporter — wysyła dane do backendu (Jaeger, Prometheus, OTLP). OTel Collector — serwer który odbiera, przetwarza i eksportuje telemetrię. OTLP (OpenTelemetry Protocol) — standaryzowany protokół przesyłania (gRPC lub HTTP/protobuf).",
  },
  {
    question: "Distributed Tracing — jak instrumentować aplikację i analizować traces?",
    answer: "Distributed Tracing pozwala śledzić request przez wiele mikroserwisów — kluczowe dla debugowania latency i błędów w architekturach rozproszonych. Koncepty: Trace ID — unikalny identyfikator całego trace (propagowany między serwisami). Span ID — identyfikator konkretnej operacji. Parent Span ID — powiązanie z parent operacją. Baggage — dane propagowane razem z trace (user ID, tenant ID). Context Propagation: trace context musi być przekazany między serwisami. HTTP headers: W3C Trace Context standard (traceparent, tracestate). gRPC metadata. Message queue (Kafka) headers. Auto-instrumentation: OTel agents automatycznie instrumentują popularne frameworki. Java: -javaagent:opentelemetry-javaagent.jar. Node.js: @opentelemetry/auto-instrumentations-node. Python: opentelemetry-instrument --traces_exporter. Samplowanie (Sampling): zbieranie 100% tracesów = duże koszty dla systemów wysokiego ruchu. Head-based sampling: decyzja na początku trace (pros: prosta; cons: możesz pominąć rzadkie błędy). Tail-based sampling: decyzja po zakończeniu trace (Jaeger adaptive sampling, Tempo). Probabilistic: 10% requestów. Analiza traces: Jaeger — open-source trace visualization. Grafana Tempo — distributed tracing backend (S3-based). Zipkin — lżejszy alternatyw. Komercyjne: Datadog APM, Dynatrace, Honeycomb, Lightstep (ServiceNow). Service Map — wizualizacja zależności między serwisami z latency p99.",
  },
  {
    question: "OpenTelemetry Collector — jak zbierać i przetwarzać telemetrię?",
    answer: "OTel Collector to serwer (proxy) który odbiera telemetrię z aplikacji, przetwarza ją i wysyła do backendów. Architektura: Receivers — odbierają dane (OTLP, Jaeger, Prometheus, Zipkin, Fluentd). Processors — przetwarzają dane (batch, filter, transform, sample, tail-sample). Exporters — wysyłają do backendów (OTLP, Prometheus, Jaeger, Datadog, Splunk). Extensions — serwisy pomocnicze (health check, pprof). Deployment modes: Agent mode — Collector jako sidecar lub DaemonSet w K8s — zbiera dane lokalnie i forwards do central Collector. Gateway mode — centralny Collector cluster (load balanced) — agreguje od agentów. Receivers konfiguracja: otlp: protocols: grpc: endpoint: 0.0.0.0:4317. Processors: batch — grupuje dane (zmniejsza liczbę network calls). memory_limiter — chroni przed OOM. attributes — dodaje/modyfikuje atrybuty (environment: production). filter — odfiltruj niechcianą telemetrię. resourcedetection — auto-detect cloud metadata (AWS region, K8s node). Tail sampling processor: zbiera trace do bufora, po zakończeniu decyduje czy zachować. Kryteria: error rate, latency threshold, always sample if has error. Konfiguracja Collector w Kubernetes: OTel Operator — zarządza Collector przez CRD (OpenTelemetryCollector). Auto-instrumentacja przez Instrumentation CRD (inject agent do Podów). Collector jako DaemonSet lub Deployment.",
  },
  {
    question: "Metryki z OTel — jak łączyć z Prometheus i Grafana?",
    answer: "OpenTelemetry metrics integrują się z Prometheus ekosystemem. OTel metric types: Counter — monotonicznie rosnący (number of requests, errors). Gauge — wartość w czasie (CPU usage, memory). Histogram — distribucja wartości (request latency, response size). Exemplars: metryki z attached trace ID — możesz przeskoczyć z Prometheus alert do konkretnego trace. Bridge do Prometheus: OTel SDK Prometheus Exporter — eksportuje OTel metrics jako Prometheus /metrics endpoint. Prometheus scrapes OTel metrics. OTel Collector Prometheus Exporter — Collector eksportuje zagregowane metryki. Collector Prometheus Receiver — Collector scrapes Prometheus endpoints. Semantic Conventions: OTel definiuje standardowe nazwy metryk i atrybutów. http.server.request.duration (histogram latency). http.server.active_requests (gauge). db.client.operation.duration. Użyj tych konwencji dla kompatybilności z dashboardami. Grafana integration: Grafana jako frontend dla Prometheus, Tempo, Loki (logs). OTel Collector → Prometheus → Grafana (metrics). OTel Collector → Tempo (traces). OTel Collector + Loki (logs). Exemplars flow: Prometheus + exemplars → Grafana shows traces link na wykresach. Click na wykres spike → otwiera trace w Tempo. Unified view: metryki, traces, logi powiązane correlation IDs. OpenMetrics: rozszerzenie Prometheus exposition format — standard IETF. Lepsze typowanie, metadata, exemplars.",
  },
  {
    question: "Jak wdrożyć OTel w praktyce — auto-instrumentation, koszty i vendor choice?",
    answer: "Strategie instrumentacji: Zero-code / Auto-instrumentation: Java agent, Node.js auto-instrumentation, Python opentelemetry-instrument. Minimalna zmiana kodu — agent injectuje się do procesu. Pokrywa standardowe biblioteki (HTTP, DB, gRPC) ale nie custom business logic. Manual instrumentation: twórz custom spans dla ważnej logiki biznesowej. Dodawaj attributes (user ID, product ID, order value). Set span status (error + exception). Mieszana (recommended): auto-instrumentation dla podstaw + manual dla krytycznej logiki. Koszty telemetrii: Traces i metryki mogą generować ogromne ilości danych. Koszt storage w komeryjnych backendach ($$$). Strategie obniżania kosztów: Tail sampling — zachowaj 100% error traces, 1% success. Head sampling — zbierz 10% requestów. Filtering w Collector — odfiltruj health checks, liveness probes. Aggregation — pre-aggregate metryki zanim wysłanie. Wybór backendu: Self-hosted open-source: Jaeger + Prometheus + Grafana (lub Grafana Stack: Tempo + Mimir + Loki). Kontrola kosztów, więcej pracy operacyjnej. Commercial: Datadog, Honeycomb, Dynatrace, New Relic. OTel vendor neutrality — możesz łatwo zmienić backend (zmień Exporter config). Implementacja krok po kroku: Install OTel SDK. Configure Exporter (OTLP do local Collector). Deploy OTel Collector (K8s DaemonSet). Configure Receivers, Processors, Exporters. Deploy Jaeger/Tempo + Prometheus + Grafana. Dodaj custom spans dla kluczowej logiki. Skonfiguruj sampling. Stwórz dashboardy i alerty.",
  },
];

const otelComponents = [
  { komponent: "OTel API", rola: "Interface do instrumentacji — aplikacja używa API. Niezależny od SDK.", jezyki: "Java, Go, Python, JS/TS, .NET, Ruby, PHP, Rust, C++" },
  { komponent: "OTel SDK", rola: "Implementacja API — zbiera dane, przetwarza, exportuje. Konfigurowalny.", jezyki: "Wszystkie główne języki" },
  { komponent: "Auto-instrumentation", rola: "Automatyczna instrumentacja popularnych bibliotek bez zmian kodu.", jezyki: "Java Agent, Node.js, Python, .NET" },
  { komponent: "OTel Collector", rola: "Proxy odbierające, przetwarzające i eksportujące telemetrię. Receivers/Processors/Exporters.", jezyki: "Go (jeden binary)" },
  { komponent: "OTLP Protocol", rola: "Standaryzowany protokół przesyłania telemetrii (gRPC lub HTTP/protobuf).", jezyki: "Agnostyczny język" },
  { komponent: "Semantic Conventions", rola: "Standardowe nazwy atrybutów i metryk — kompatybilność dashboardów.", jezyki: "Wszystkie języki/platformy" },
];

const otelBackends = [
  { backend: "Jaeger", typ: "Open-source (CNCF)", przechowuje: "Traces", opis: "Klasyczny distributed tracing backend, UI do analizy, Elasticsearch/Cassandra storage" },
  { backend: "Grafana Tempo", typ: "Open-source", przechowuje: "Traces", opis: "Scalable traces backend (S3 storage), tight Grafana integration, exemplars" },
  { backend: "Prometheus", typ: "Open-source (CNCF)", przechowuje: "Metrics", opis: "Standard metryk, scraping model, PromQL, Alertmanager" },
  { backend: "Grafana Loki", typ: "Open-source", przechowuje: "Logs", opis: "Log aggregation like Prometheus but for logs, label-based indexing" },
  { backend: "Honeycomb", typ: "Commercial", przechowuje: "Traces + Events", opis: "Excellent trace analysis, BubbleUp correlation, wysoka cena" },
  { backend: "Datadog", typ: "Commercial", przechowuje: "Traces + Metrics + Logs", opis: "Full platform, AI correlation, APM, SIEM — najdroższy ale kompletny" },
];

export default function BlogOpenTelemetryCoTo() {
  return (
    <Layout>
      <SEOHead
        title="OpenTelemetry | Fotz Studio"
        description="OpenTelemetry: traces, metrics, logs, OTel Collector, auto-instrumentation, Jaeger, Tempo, Prometheus — jak instrumentować aplikacje i analizować telemetrię."
        canonical="https://fotz.pl/blog/opentelemetry-co-to-jest-traces-metrics-logs-collector-jaeger"

        keywords="OpenTelemetry co to jest, OpenTelemetry definicja, czym jest OpenTelemetry, OpenTelemetry przykłady, jak działa OpenTelemetry, OpenTelemetry znaczenie, OpenTelemetry przewodnik"
      />
      <ArticleSchema
        title="OpenTelemetry — co to jest, traces, metrics, logs, Collector i Jaeger?"
        description="OTel: 6 komponentów, 6 backendów, distributed tracing, Collector pipeline, Prometheus/Grafana/Tempo stack i praktyczne wdrożenie z sampling strategią."
        url="https://fotz.pl/blog/opentelemetry-co-to-jest-traces-metrics-logs-collector-jaeger"
        datePublished="2024-04-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "OpenTelemetry", url: "https://fotz.pl/blog/opentelemetry-co-to-jest-traces-metrics-logs-collector-jaeger" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "OpenTelemetry", url: "/blog/opentelemetry-co-to-jest-traces-metrics-logs-collector-jaeger" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Observability / DevOps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OpenTelemetry
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jeden standard dla traces, metrics i logs — niezależny od vendora.
              Instrumentuj raz, wysyłaj do Jaeger, Prometheus, Datadog lub
              Honeycomb bez zmiany kodu aplikacji.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Standard CNCF", value: "OpenTelemetry" },
                { label: "Traces backend", value: "Jaeger / Tempo" },
                { label: "Metrics backend", value: "Prometheus" },
                { label: "Protokół", value: "OTLP (gRPC/HTTP)" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-violet-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Komponenty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych komponentów OpenTelemetry</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              OTel ekosystem składa się z API, SDK, auto-instrumentacji,
              Collector i standardowego protokołu OTLP.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {otelComponents.map((c) => (
              <FadeInView key={c.komponent}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{c.komponent}</h3>
                  <p className="text-gray-700 text-sm mb-2">{c.rola}</p>
                  <p className="text-xs text-violet-700 font-medium">{c.jezyki}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Backendy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Backendy telemetrii — open-source i komercyjne</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              OTel vendor neutrality pozwala wybrać backend bez lock-inu —
              zmiana backendu to zmiana Exportera w Collector config.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {otelBackends.map((b) => (
              <FadeInView key={b.backend}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-4 gap-4 items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{b.backend}</h3>
                      <span className="text-xs text-violet-700 font-medium">{b.typ}</span>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium self-start">{b.przechowuje}</span>
                    <p className="text-gray-600 text-sm md:col-span-2">{b.opis}</p>
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

      <RelatedArticles currentArticleId="opentelemetry-co-to-jest-traces-metrics-logs-collector-jaeger" />
      <ContactSection />
    </Layout>
  );
}
