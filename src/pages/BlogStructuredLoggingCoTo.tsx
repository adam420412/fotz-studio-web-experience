import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest structured logging i dlaczego zastępuje plaintext logs?",
    answer: "Plaintext logs: 2024-04-13 12:00:01 ERROR User login failed for user@example.com from IP 1.2.3.4. Trudne do parsowania. Brak struktury. Brak typowania. Structured logs: JSON format. {timestamp: '2024-04-13T12:00:01Z', level: 'ERROR', message: 'User login failed', user_email: 'user@example.com', ip: '1.2.3.4', request_id: 'uuid', service: 'auth-service', trace_id: 'abc123'}. Zalety structured logging: maszyna może parsować bez regex. Filtrowanie po dowolnym polu (level, user_id, trace_id). Agregacje (count errors per user). Koreluacja z traces. Wyszukiwanie po trace_id przez cały system. Pola wymagane w każdym logu: timestamp (ISO 8601). level (TRACE/DEBUG/INFO/WARN/ERROR/FATAL). message. service (nazwa serwisu). version. environment (prod/staging). request_id (per HTTP request). trace_id + span_id (OpenTelemetry). host/pod/container_id. Pola opcjonalne: user_id. operation/endpoint. duration_ms. status_code. error_type + stack_trace. Poziomy logowania: TRACE — bardzo szczegółowe (dev only). DEBUG — informacje debugowania. INFO — normalne operacje. WARN — sytuacje wymagające uwagi. ERROR — błędy które wymagają działania. FATAL — krytyczny błąd, serwis nie działa.",
  },
  {
    question: "Loki + Promtail + Grafana — stack logowania dla Kubernetes?",
    answer: "Grafana Loki: log aggregation system (Grafana Labs). Inspirowany Prometheus — labels not index. Nie indeksuje treści logów — tylko metadata (labels). Znacznie tańszy storage niż Elasticsearch. Promtail: agent zbierający logi z Kubernetes. DaemonSet — jeden per node. Czyta logi z /var/log/containers/. Dodaje labels: namespace, pod, container, node. Wysyła do Loki. LogQL (Loki Query Language): {namespace='production', service='auth'} |= 'ERROR'. {service='api'} | json | status >= 500. Agregacje: rate({service='api'}[5m]). Grafana + Loki: Explore -> Loki datasource. Wyszukiwanie po labels. Dashboard z logami i metrykami razem. Korelacja trace -> log. Alternatywy do Promtail: Grafana Agent (Alloy). Fluentd/Fluent Bit (bardziej konfigurowalny). Vector (high-performance, Rust). Loki Stack Helm chart: loki-stack chart. Zawiera Loki + Promtail + Grafana. 5 minut do działającego systemu. Loki storage backends: local filesystem. AWS S3 (Loki distributed mode). Azure Blob Storage. GCS. Loki vs ELK: Loki — tańszy (labels only index), prostszy, integracja z Grafana. ELK — pełny full-text search, bardziej potężny, droższy, bardziej złożony.",
  },
  {
    question: "ELK Stack vs EFK — Elasticsearch, Logstash/Fluentd, Kibana?",
    answer: "ELK Stack: Elasticsearch (store + search) + Logstash (collect + transform) + Kibana (visualize). EFK Stack: Elasticsearch + Fluentd + Kibana. Fluentd zamiast Logstash — lżejszy, popularny w K8s. Elasticsearch: distribuowany full-text search engine. Inverted index — szybkie wyszukiwanie po treści. Sharding i replikacja. REST API. Kibana: wizualizacja dla Elasticsearch. Discover — przeglądanie logów. Dashboard. Alerting (Kibana Watcher). Logstash: ETL dla logów. Input plugins (Beats, Kafka, syslog). Filter plugins (grok, json, mutate, geoip). Output plugins (Elasticsearch, Kafka, S3). Fluentd/Fluent Bit: Fluentd — Ruby, w pełni featured, Kubernetes ready. Fluent Bit — C, ultra-lekki, ideale dla edge/embedded. Input -> Filter -> Output pluginy. td-agent (Treasure Data) = Fluentd enterprise. OpenSearch: fork Elasticsearch (po zmianie licencji na SSPL). AWS OpenSearch Service. Kompatybilny z Elasticsearch API (częściowo). Beats: Filebeat — logi z plików. Metricbeat — metryki systemu. Packetbeat — network data. Heartbeat — uptime monitoring. Konfiguracja EFK w K8s: Fluentd DaemonSet. ConfigMap z regułami parsowania. Elasticsearch StatefulSet (lub ElasticCloud). Kibana Deployment. Ingress dla Kibana.",
  },
  {
    question: "Log levels i best practices — co logować, czego nie logować?",
    answer: "Co logować: INFO — start/stop aplikacji, kluczowe operacje biznesowe, zewnętrzne integracje (request sent to payment gateway). WARN — deprecated API usage, retry attempt, slow query (>1s), nieoczekiwany stan który nie jest błędem. ERROR — nieobsłużony wyjątek, nieudane wywołanie zewnętrznego API, błąd biznesowy (payment failed). FATAL — crash aplikacji, brak połączenia z DB przy starcie. Czego NIE logować: Dane osobowe (GDPR) — hasła, tokeny, numery kart, SSN, PESEL. Pełne request body (może zawierać PII). Zbyt dużo DEBUG w produkcji (performance, koszt storage). Health check endpoints (setki logów per minutę bez wartości). Correlation ID (Request ID, Trace ID): generuj UUID per request. Propaguj przez nagłówki (X-Request-Id, traceparent). Loguj w każdym serwisie z tym samym ID. Pozwala śledzić request przez cały system. Structured logging libraries: Java — SLF4J + Logback (JSON appender) lub Log4j2. Spring Boot — wbudowane, config application.properties. Go — zap (Uber) lub zerolog. Python — structlog. Node.js — pino lub winston. .NET — Serilog lub NLog. Log sampling: przy high-traffic — loguj 1% INFO requestów. Zawsze loguj ERROR/WARN. Adaptive sampling: więcej przy błędach. Retention policy: prod logs 30-90 dni. Compliance logs (GDPR) 6-12 miesięcy. Krytyczne security logs 1+ rok.",
  },
  {
    question: "Jak wyszukiwać i analizować logi w Kibana i Grafana Loki?",
    answer: "Kibana Discover: KQL (Kibana Query Language). service.name: 'auth-service' AND log.level: 'ERROR'. user.id: '123' AND @timestamp > '2024-04-13'. http.response.status_code: [400 TO 499]. Kibana Lens: agregacje — count errors per service per hour. Average response time per endpoint. Histogram błędów. Kibana Alerting: watcher per anomalię. Alert gdy error rate > 5% przez 5 minut. PagerDuty/Slack integration. Grafana Explore z Loki: {namespace='production'} |= 'payment failed'. {job='api'} | json | duration_ms > 1000. Derive metrics from logs: count_over_time({job='api'} |= 'ERROR'[5m]). Grafana Logs Panel: w dashboardzie. Filter by label. Context — pokaż logi wokół wybranego eventu. Log Analytics: common patterns — ile ERROR per service. Error spikes — korelacja z deploymentami. User journey — śledzenie user_id przez system. Distributed tracing integration: Grafana Tempo (traces) + Loki (logs) + Prometheus (metrics). Switch from trace -> log (trace_id link). Switch from log -> trace. Unified observability view. Splunk (enterprise): SPL (Search Processing Language). Machine Learning dla anomaly detection. Drogi ale potężny. Datadog Logs: automatic parsing dla znanych formatów. Log Patterns (ML clustering). Live Tail — real-time view.",
  },
];

const loggingStacks = [
  { stack: "Loki + Promtail + Grafana", typ: "Labels-only index", koszt: "Niski (S3 backend)", search: "LogQL (labels + filter)", skalowanie: "Doskonałe (stateless)", kiedy: "Kubernetes, koszt-efektywne" },
  { stack: "ELK (Elastic + Logstash + Kibana)", typ: "Full-text index", koszt: "Wysoki (Elastic storage)", search: "KQL / Lucene", skalowanie: "Dobre (sharding)", kiedy: "Full-text search, compliance" },
  { stack: "EFK (Elastic + Fluentd + Kibana)", typ: "Full-text index", koszt: "Wysoki", search: "KQL / Lucene", skalowanie: "Dobre", kiedy: "K8s + Elasticsearch" },
  { stack: "OpenSearch + Fluent Bit", typ: "Full-text index", koszt: "Średni (AWS Managed)", search: "OpenSearch DSL", skalowanie: "Dobre", kiedy: "AWS-native, open-source" },
  { stack: "Datadog Logs", typ: "Full-text index", koszt: "Bardzo wysoki (per GB)", search: "Datadog query", skalowanie: "Doskonałe (SaaS)", kiedy: "Enterprise, unified platform" },
  { stack: "Splunk", typ: "Full-text index (SPL)", koszt: "Najwyższy", search: "SPL (potężne)", skalowanie: "Doskonałe", kiedy: "Enterprise, security, compliance" },
];

export default function BlogStructuredLoggingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Structured Logging | Fotz Studio"
        description="Structured Logging: JSON logs, Loki vs ELK Stack, Promtail, Fluentd, Kibana, log levels, correlation ID, GDPR compliance i wyszukiwanie logów w Grafana."
        canonical="https://fotz.pl/blog/structured-logging-co-to-jest-loki-elk-fluentd-kibana-grafana"

        keywords="Structured Logging co to jest, Structured Logging definicja, czym jest Structured Logging, Structured Logging przykłady, jak działa Structured Logging, Structured Logging znaczenie, Structured Logging przewodnik"

        canonical="https://fotz.pl/blog/structured-logging-co-to-jest-loki-elk-fluentd-kibana-grafana"
      />
      <ArticleSchema
        title="Structured Logging — co to jest, Loki, ELK Stack, Fluentd, Kibana, Grafana?"
        description="Structured Logging: 6 stacków (Loki/ELK/EFK/OpenSearch/Datadog/Splunk), JSON logs, correlation ID, log levels, GDPR, LogQL i KQL queries."
        url="https://fotz.pl/blog/structured-logging-co-to-jest-loki-elk-fluentd-kibana-grafana"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Structured Logging", url: "https://fotz.pl/blog/structured-logging-co-to-jest-loki-elk-fluentd-kibana-grafana" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Structured Logging", url: "/blog/structured-logging-co-to-jest-loki-elk-fluentd-kibana-grafana" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-slate-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Observability / DevOps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Structured Logging
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              JSON zamiast plaintext, Loki vs ELK Stack, Promtail, Fluentd, correlation ID
              — jak zbierać, przechowywać i analizować logi w skali produkcyjnej.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Tani K8s stack", value: "Loki + Promtail" },
                { label: "Full-text search", value: "Elasticsearch" },
                { label: "K8s agent", value: "Fluent Bit" },
                { label: "Korelacja logów", value: "Trace ID" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-orange-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stacki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 stacków do centralnego logowania</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od taniego Loki przez ELK Stack po enterprise Splunk — każdy stack
              optymalizuje inny aspekt: koszt, możliwości wyszukiwania i skalowalność.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Stack</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Indeksowanie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Koszt</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Search</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Skalowanie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {loggingStacks.map((s, i) => (
                  <tr key={s.stack} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{s.stack}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{s.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{s.koszt}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{s.search}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{s.skalowanie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{s.kiedy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      <RelatedArticles currentArticleId="structured-logging-co-to-jest-loki-elk-fluentd-kibana-grafana" />
      <ContactSection />
    </Layout>
  );
}
