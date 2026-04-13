import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Envoy Proxy i czym różni się od Nginx?",
    answer: "Envoy Proxy: high-performance, cloud-native L4/L7 proxy napisany w C++ (Lyft, 2016, CNCF graduated). Projektowany dla mikrousług i service mesh. Główne różnice Envoy vs Nginx: Envoy — dynamiczna konfiguracja przez API (xDS). Nginx — statyczna konfiguracja (wymaga reload). Envoy — L7 aware (HTTP/1.1, HTTP/2, HTTP/3, gRPC, WebSocket). Nginx — L4 + L7 ale mniej rozbudowane. Envoy — observability first (per-request metrics, distributed tracing). Nginx — podstawowe metryki bez per-request granularity. Envoy — extensible filters pipeline. Nginx — modules system (mniej elastyczny). Envoy xDS (Extensible Discovery Service) API: Listener Discovery Service (LDS). Route Discovery Service (RDS). Cluster Discovery Service (CDS). Endpoint Discovery Service (EDS). Secret Discovery Service (SDS) — TLS certs. Aggregated Discovery Service (ADS) — wszystko razem. Control plane (Istio, Consul Connect) aktualizuje konfigurację Envoy dynamicznie przez xDS bez restartu. Data plane: Envoy proxy per-pod (sidecar) lub standalone. Admin API: localhost:9901 dla metrics, config dump, health check.",
  },
  {
    question: "Envoy jako sidecar proxy w service mesh — jak działa?",
    answer: "Service Mesh data plane: Envoy sidecar wstrzykiwany do każdego poda jako dodatkowy kontener. Ruch aplikacji przechodzi przez Envoy (iptables intercept). Envoy obsługuje: mTLS (Mutual TLS) między serwisami. Load balancing (Round Robin, Least Request, Ring Hash, Maglev). Circuit Breaking (Outlier Detection). Retries i timeouts (per route, per cluster). Rate limiting (local i global przez ext-authz). Distributed Tracing (Zipkin, Jaeger, OpenTelemetry). Istio + Envoy: Istio jako control plane (Pilot, Citadel, Galley). Envoy jako data plane. VirtualService (routing rules) -> Envoy Route Config. DestinationRule (traffic policy) -> Envoy Cluster config. PeerAuthentication -> mTLS policy. AuthorizationPolicy -> Envoy ext-authz filter. Consul Connect: HashiCorp Consul jako control plane. Envoy jako data plane. Service intentions zamiast K8s CRDs. Traffic analysis: kiali.io — wizualizacja service mesh (Istio). Traffic flow, error rates, latency per service. Zipkin/Jaeger traces przez Envoy. Envoy performance: sub-millisecond overhead. Benchmarki: 1% CPU, 10MB RAM per sidecar dla typowego serwisu.",
  },
  {
    question: "Envoy xDS API — jak kontrolować Envoy programatycznie?",
    answer: "xDS (Extensible Discovery Service): gRPC API do dynamicznej konfiguracji Envoy. Control plane (twój serwis lub Istio/Consul) implementuje xDS server. Envoy łączy się jako klient i pobiera konfigurację. xDS resources: Listener: port, protokół (HTTP/TCP/UDP), filter chain. Route: matching (prefix, header, regex) -> action (route, redirect, direct response). Cluster: backend upstream (IP list lub DNS). Load balancing policy. Circuit breaker config. Health check config. Endpoint: konkretne IP:port dla klastra. Weighted routing dla A/B testing i canary. Secret: TLS certyfikaty i klucze. State of the World (SotW) vs Delta xDS: SotW — wysyłaj kompletny stan przy każdej zmianie. Delta — wysyłaj tylko zmiany. Bardziej efektywny dla dużych deploymentów. go-control-plane (Google): Go biblioteka do implementacji xDS server. java-control-plane: Java biblioteka. Przykład użycia: własny control plane dla custom routing logic. Feature flag -> zmiana routing rules przez xDS. Canary: 5% ruchu na new-service-v2 przez Endpoint weight. Fault injection: Envoy fault filter — inject errors/delays dla testów. Chaos engineering bez modyfikacji kodu.",
  },
  {
    question: "Envoy rate limiting, circuit breaking i outlier detection?",
    answer: "Rate Limiting w Envoy: Local Rate Limiting: per-Envoy instancja, nie wymaga zewnętrznego serwisu. Konfiguracja przez token bucket filter. Globalne Rate Limiting: ratelimit service (gRPC) — centralne rate limiting. Envoy wysyła request do ratelimit service przed forwarding. Redis backend dla współdzielonego state. Descriptors: per user, per IP, per API key, per endpoint. Circuit Breaking: Outlier Detection (passive) — Envoy obserwuje błędy upstream. 5xx errors lub latencja -> eject endpoint. Konfiguracja: consecutive_5xx — ile błędów przed eject. interval, base_ejection_time, max_ejection_percent. Pendinig Requests Limit — max requests w kolejce. Max Connections — max TCP connections do upstream. Max Retries — max retry requests. Active health checking: HTTP health check (periodic /health). TCP health check. gRPC health check (grpc.health.v1.Health). Retries: retry_on — 5xx, gateway-error, connect-failure, retriable-4xx. num_retries — maksymalna liczba prób. retry_back_off — Jitter dla exponential backoff. Hedging: wyślij request do wielu backends równolegle, użyj pierwszej odpowiedzi. Zmniejsza tail latency.",
  },
  {
    question: "Envoy Filter chain i rozszerzenia — Lua, WASM, ext-proc?",
    answer: "Envoy Network Filters: HTTP Connection Manager (HCM) — parsowanie HTTP, routing, header manipulation. TCP Proxy — transparent proxy dla TCP. Thrift Proxy, MongoDB Proxy, Redis Proxy — application-aware proxying. HTTP Filters (na HCM): Router — końcowy filter, forward do upstream. CORS — obsługa preflight i CORS headers. CSRF — ochrona przed CSRF. gzip — kompresja odpowiedzi. Fault Injection — losowe błędy/delays (chaos engineering). Health Check — odpowiedz na health checks bez forwarding. JWT Authentication — weryfikacja JWT. OAuth2 — OAuth flow. Rate Limit — integracja z ratelimit service. External Processing (ext-proc): gRPC call do zewnętrznego serwisu per-request. Umożliwia custom request/response processing. Używane przez: advanced auth (OPA), request transformation, custom logging. WASM (WebAssembly) filters: extend Envoy przez WASM. C++, Rust, Go, AssemblyScript -> WASM. proxy-wasm spec. Bezpieczny sandbox. Solo.io Gloo, Tetrate — commercial products nad Envoy. Ambassador: Envoy + Kubernetes ingress controller. Open source, CRD-based config. Emissary-ingress (fork Ambassador). Contour: VMware, Envoy + HTTPProxy CRD. GitOps friendly.",
  },
];

const envoyFeatures = [
  { funkcja: "Dynamic Config", opis: "xDS API — zmiana konfiguracji bez restartu", warstwa: "Control Plane", kto: "Istio, Consul, własny control plane" },
  { funkcja: "Load Balancing", opis: "Round Robin, Least Request, Ring Hash, Maglev, Random", warstwa: "L7", kto: "Wbudowany" },
  { funkcja: "Circuit Breaking", opis: "Outlier Detection (passive) + Active Health Check", warstwa: "L7", kto: "Wbudowany" },
  { funkcja: "mTLS", opis: "Mutual TLS między serwisami, cert rotation przez SDS", warstwa: "L4/L7", kto: "Istio Citadel, SPIRE" },
  { funkcja: "Distributed Tracing", opis: "Zipkin, Jaeger, OpenTelemetry — per-request trace headers", warstwa: "L7", kto: "Wbudowany + backends" },
  { funkcja: "Rate Limiting", opis: "Local (token bucket) + Global (ratelimit service + Redis)", warstwa: "L7", kto: "lyft/ratelimit, Envoy + Redis" },
];

export default function BlogEnvoyProxyCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Envoy Proxy | Fotz Studio"
        description="Envoy Proxy: xDS API, sidecar w service mesh (Istio/Consul), load balancing, circuit breaking, outlier detection, rate limiting, WASM filters i ext-proc."
        canonicalUrl="https://fotz.pl/blog/envoy-proxy-co-to-jest-xds-api-service-mesh-rate-limiting-circuit-breaking"

        keywords="Envoy Proxy co to jest, Envoy Proxy jak działa, Envoy Proxy tutorial, Envoy Proxy przykład, czym jest Envoy Proxy, Envoy Proxy dokumentacja, Envoy Proxy przewodnik"

        canonical="https://fotz.pl/blog/envoy-proxy-co-to-jest-xds-api-service-mesh-rate-limiting-circuit-breaking"
      />
      <ArticleSchema
        title="Envoy Proxy — co to jest, xDS API, service mesh, rate limiting, circuit breaking?"
        description="Envoy Proxy: 6 kluczowych funkcji (dynamic config/load balancing/circuit breaking/mTLS/tracing/rate limiting), xDS, Istio, WASM filters, ext-proc."
        url="https://fotz.pl/blog/envoy-proxy-co-to-jest-xds-api-service-mesh-rate-limiting-circuit-breaking"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Envoy Proxy", url: "https://fotz.pl/blog/envoy-proxy-co-to-jest-xds-api-service-mesh-rate-limiting-circuit-breaking" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-yellow-950 to-amber-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Envoy Proxy", href: "/blog/envoy-proxy-co-to-jest-xds-api-service-mesh-rate-limiting-circuit-breaking" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-yellow-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Networking / Service Mesh
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Envoy Proxy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Cloud-native L7 proxy który jest data plane Istio, Consul Connect
              i dziesiątek innych produktów — dynamiczna konfiguracja xDS, mTLS,
              circuit breaking i WASM extensions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Dynamic config", value: "xDS API" },
                { label: "Data plane", value: "Istio/Consul" },
                { label: "Passive circuit breaker", value: "Outlier Detection" },
                { label: "Extensibility", value: "WASM / ext-proc" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-yellow-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funkcje */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych funkcji Envoy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Envoy obsługuje cały przekrój potrzeb service mesh — od dynamicznej
              konfiguracji po obserwablinosc i bezpieczenstwo.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {envoyFeatures.map((f) => (
              <FadeInView key={f.funkcja}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{f.funkcja}</h3>
                  <p className="text-xs text-yellow-700 font-medium mb-2">Warstwa: {f.warstwa}</p>
                  <p className="text-gray-700 text-sm mb-2">{f.opis}</p>
                  <p className="text-xs text-gray-500">Integracje: {f.kto}</p>
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

      <RelatedArticles currentArticleId="envoy-proxy-co-to-jest-xds-api-service-mesh-rate-limiting-circuit-breaking" />
      <ContactSection />
    </Layout>
  );
}
