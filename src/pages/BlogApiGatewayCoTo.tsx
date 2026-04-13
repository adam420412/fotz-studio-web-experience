import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest API Gateway i jakie funkcje pełni w architekturze mikroserwisów?",
    answer: "API Gateway to pojedynczy punkt wejścia (single entry point) dla wszystkich klientów do systemu mikroserwisów. Zamiast klient łączy się bezpośrednio z każdym serwisem — łączy się z Gateway który kieruje żądania do odpowiednich serwisów. Kluczowe funkcje API Gateway: Request routing — przekierowuje żądania do właściwych mikroserwisów na podstawie URL, metody HTTP, nagłówków. Authentication i Authorization — weryfikacja JWT/OAuth2 tokens zanim żądanie dotrze do serwisu. Brak duplikacji logiki auth w każdym serwisie. Rate Limiting i Throttling — ograniczanie liczby żądań per użytkownik/API key/IP. Broni serwisy przed nadmiernym ruchem. Load Balancing — rozkładanie ruchu między instancjami serwisów. SSL Termination — decryptuje SSL/TLS raz na Gateway, serwisy komunikują się HTTP wewnątrz (lub mTLS). Response Transformation — modyfikacja odpowiedzi (add/remove fields, format transformation). Request Aggregation (BFF pattern) — łączenie wyników z wielu serwisów w jedno żądanie. Caching — cache responses na poziomie Gateway. Circuit Breaking — odcinanie awaryjnych serwisów. Observability — centralne logowanie requestów, metryki, traces. Wzorce: API Gateway vs. BFF (Backend for Frontend) — BFF to specjalizowana Gateway per typ klienta (mobile, web, TV). Reverse Proxy — najprostsza forma Gateway (Nginx, Traefik).",
  },
  {
    question: "Kong, AWS API Gateway, Apigee — jak wybrać właściwe narzędzie?",
    answer: "Kong Gateway: open-source (Kong CE) lub enterprise (Kong EE). Plugin ekosystem — 100+ pluginów (auth, rate limit, logging, transforms, AI). Declarative config (deck CLI) lub Admin API. Kubernetes Ingress Controller (Kong Ingress Controller). Kong Konnect — cloud control plane dla self-hosted data planes. Idealny dla: hybrid/multi-cloud, high customization, on-prem. AWS API Gateway: w pełni managed, serverless. REST API, HTTP API (tańszy), WebSocket API. Direct integracje z Lambda, DynamoDB, S3 (bez pośrednika). Usage Plans i API Keys — monetyzacja API. Idealny dla: AWS native, serverless, Lambda backends. Apigee (Google): enterprise-grade API management. Full lifecycle management (design, secure, publish, analyze, monetize). Apigee X — GCP native. Idealny dla: enterprise, API monetization, developer portal. Traefik: open-source, Kubernetes-native (automatic config z CRDs/annotations). Bardzo popularne jako Ingress Controller. NGINX / NGINX Plus: reverse proxy i load balancer. Używany jako lightweight Gateway w prostszych scenariuszach. AWS ALB + Listener Rules: wbudowany routing bez dedykowanego Gateway. Cloudflare API Shield: WAF + rate limiting + bot protection na poziomie Cloudflare (zero deploy). Wybór: open-source + Kubernetes to Kong lub Traefik. Serverless AWS to AWS API Gateway. Enterprise + multi-cloud to Apigee lub Kong EE.",
  },
  {
    question: "Rate Limiting i throttling — jak chronić API przed nadużyciami?",
    answer: "Rate Limiting: ograniczenie liczby żądań w czasie. Algorytmy: Fixed Window — X requests per minute window. Problem: burst na granicy okna (59s + 60s = 119 requestów). Sliding Window — płynne okno — bardziej fair. Token Bucket — wiadro tokenów. Token dodawany co tick, każdy request zużywa token. Pozwala na burst do pojemności wiadra. Leaky Bucket — requests w kolejce, obsługiwane ze stałym tempem. Granularity rate limiting: per IP — podstawowa ochrona przed DoS. Per API Key — kontrola per klient/aplikacja. Per User ID — kontrola per uwierzytelniony użytkownik. Per endpoint — różne limity dla różnych ścieżek. Kombinowane — per user per endpoint. Distributed Rate Limiting: wiele instancji Gateway musi współdzielić countery. Redis jako distributed counter. Kong Rate Limiting: wtyczka z konfiguracją per consumer/route/service. Redis lub local (w klastrze — Redis wymagany). Response headers (RateLimit-Limit, RateLimit-Remaining, Retry-After). Circuit Breaker pattern: automatyczne odcinanie serwisu który zwraca błędy. Stany: Closed (normalne) → Open (serwis odcięty) → Half-Open (próbne żądania). Resilience4j (Java), Polly (.NET). Implementacja w Kong: circuit-breaker plugin lub przez upstream health checks. Bulkhead: izolacja zasobów — problemy w jednym serwisie nie wpływają na inne.",
  },
  {
    question: "Authentication i Authorization w API Gateway — JWT, OAuth2, API Keys?",
    answer: "Authentication na poziomie Gateway: centralizuje weryfikację tożsamości — serwisy downstream nie muszą implementować auth. JWT (JSON Web Token): stateless — wszystkie informacje w tokenie. Weryfikacja podpisu (RSA/ECDSA/HMAC) na Gateway. Claims forwarding — Gateway wyciąga user ID i role z JWT, dodaje do nagłówków X-User-Id, X-User-Roles. Kong JWT plugin — konfiguracja public key verification. JWK (JSON Web Key Set) — dynamiczne pobieranie public keys z JWKS endpoint (np. z Keycloak). Refresh Token rotation — serwisy nie zarządzają sesjami. OAuth2 i OIDC: Authorization Code Flow — dla aplikacji webowych. Client Credentials — dla server-to-server (M2M). PKCE — dla SPA i mobile (bez client secret). Kong OAuth2 Introspection — weryfikacja tokenów przez Authorization Server. Keycloak/Auth0 jako IdP. API Keys: prostsze od JWT. Identyfikują aplikację/klienta, nie użytkownika. Podpinane do Usage Plans (rate limits, quotas). Kong Key Authentication plugin. Mutual TLS (mTLS): klient prezentuje certyfikat — weryfikowany przez Gateway. Silne uwierzytelnianie dla B2B API. Gateway jako policy enforcement point: Forward auth pattern — Gateway wywołuje zewnętrzny auth serwis przed routingiem. Open Policy Agent (OPA) sidecar lub plugin — decyzje autoryzacji jako kod. Scope-based authorization: OAuth2 scopes — Gateway weryfikuje czy token ma wymagany scope.",
  },
  {
    question: "API Gateway w Kubernetes — Ingress, Gateway API i service mesh?",
    answer: "Kubernetes Ingress: standard API do wystawiania HTTP/HTTPS z klastra. Ingress Controller: implementacja Ingress (Nginx, Traefik, Kong, Istio). Annotations dla konfiguracji (rate limiting, auth, SSL). Ograniczenia: brak standaryzacji cross-controller. L7 routing tylko HTTP. Brak support dla TCP/UDP routing w standardzie. Kubernetes Gateway API (nowy standard, GA 2023): zastępuje Ingress — bogatsza semantyka. GatewayClass, Gateway, HTTPRoute, TCPRoute. Rozdzielenie ról: Platform admin (Gateway), Application dev (HTTPRoute). Ekspresywniejsze matching (headers, query params, methods). Wsparcie: Istio, Envoy, Kong, Traefik, HAProxy. Kong Ingress Controller (KIC): używa Kong jako data plane dla Kubernetes. CRDs dla Kong-specific konfiguracji (KongPlugin, KongConsumer). Service Mesh vs. API Gateway: API Gateway — north-south traffic (zewnętrzny ruch do klastra). Service Mesh — east-west traffic (między serwisami wewnątrz klastra). Istio jako Gateway + Service Mesh: Istio Gateway obsługuje north-south. VirtualService, DestinationRule — traffic management wewnątrz. mTLS automatyczny między serwisami. Multi-cluster routing: Gateway federacja między klastrami. ArgoCD + Gateway dla progressive delivery (canary przez Gateway weight routing).",
  },
];

const gatewayFeatures = [
  { funkcja: "Request Routing", opis: "Kierowanie żądań do właściwych serwisów po URL, metodzie, nagłówkach i parametrach", implementacja: "Path-based, header-based, weighted routing" },
  { funkcja: "Authentication", opis: "Centralna weryfikacja JWT, OAuth2, API Keys — serwisy downstream nie implementują auth", implementacja: "Kong JWT/OAuth2, AWS Cognito, Traefik ForwardAuth" },
  { funkcja: "Rate Limiting", opis: "Ochrona serwisów przed nadmiernym ruchem — limity per user/IP/API key/endpoint", implementacja: "Token bucket, sliding window, Redis distributed" },
  { funkcja: "SSL Termination", opis: "Decryptuje TLS raz na Gateway — serwisy komunikują się HTTP lub mTLS wewnątrz", implementacja: "cert-manager, Let's Encrypt, AWS ACM" },
  { funkcja: "Circuit Breaking", opis: "Automatyczne odcinanie awaryjnych serwisów i izolacja błędów (bulkhead pattern)", implementacja: "Kong circuit-breaker, Envoy outlier detection" },
  { funkcja: "Observability", opis: "Centralne logowanie, metryki, trace ID propagation — jeden punkt zbierania danych", implementacja: "OpenTelemetry, Prometheus, Datadog, Jaeger" },
];

const gatewayComparison = [
  { narzedzie: "Kong Gateway", typ: "Self-hosted / Cloud", plus: "100+ pluginów, open-source, Kubernetes native", minus: "Wymaga Redis w klastrze, skomplikowana konfiguracja", idealny: "High-customization, hybrid cloud" },
  { narzedzie: "AWS API Gateway", typ: "Managed Serverless", plus: "Zero-ops, native Lambda/AWS integracje, cheap small scale", minus: "Vendor lock-in, ograniczone customization", idealny: "AWS native, serverless backends" },
  { narzedzie: "Traefik", typ: "Open-source", plus: "Auto-discovery w K8s, lekki, prosty setup", minus: "Mniej pluginów vs Kong, mniejsza enterprise support", idealny: "Kubernetes Ingress, prostsze use cases" },
  { narzedzie: "Apigee", typ: "Enterprise (GCP)", plus: "Full API lifecycle, developer portal, monetizacja", minus: "Drogi, złożony, wymaga GCP", idealny: "Enterprise API programs" },
];

export default function BlogApiGatewayCoTo() {
  return (
    <Layout>
      <SEOHead
        title="API Gateway | Fotz Studio"
        description="API Gateway: co to jest, Kong vs AWS API Gateway vs Traefik, rate limiting, JWT auth, Kubernetes Ingress i Gateway API — jak wybrać i wdrożyć."
        canonicalUrl="https://fotz.pl/blog/api-gateway-co-to-jest-kong-aws-traefik-kubernetes-ingress"

        keywords="API Gateway co to jest, API Gateway jak działa, API Gateway tutorial, API Gateway przykład, czym jest API Gateway, API Gateway dokumentacja, API Gateway przewodnik"

        canonical="https://fotz.pl/blog/api-gateway-co-to-jest-jak-wybrac-kong-aws-apigee"
      />
      <ArticleSchema
        title="API Gateway — co to jest, Kong, AWS API Gateway, Traefik i Kubernetes Ingress?"
        description="API Gateway: 6 kluczowych funkcji, 4 narzędzia (Kong/AWS/Traefik/Apigee), rate limiting algorytmy, JWT/OAuth2 auth i Kubernetes Gateway API."
        url="https://fotz.pl/blog/api-gateway-co-to-jest-kong-aws-traefik-kubernetes-ingress"
        datePublished="2024-04-10"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "API Gateway", url: "https://fotz.pl/blog/api-gateway-co-to-jest-kong-aws-traefik-kubernetes-ingress" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "API Gateway", href: "/blog/api-gateway-co-to-jest-kong-aws-traefik-kubernetes-ingress" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              API / Mikroserwisy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              API Gateway
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jeden punkt wejścia dla setek mikroserwisów. API Gateway centralizuje
              routing, authentication, rate limiting i observability — zamiast
              implementować to w każdym serwisie osobno.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Open-source lider", value: "Kong Gateway" },
                { label: "AWS native", value: "AWS API Gateway" },
                { label: "K8s native", value: "Traefik / Nginx" },
                { label: "Nowy standard K8s", value: "Gateway API" },
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

      {/* Funkcje */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych funkcji API Gateway</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              API Gateway eliminuje potrzebę implementowania cross-cutting concerns
              w każdym mikroserwisie osobno.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {gatewayFeatures.map((f) => (
              <FadeInView key={f.funkcja}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{f.funkcja}</h3>
                  <p className="text-gray-700 text-sm mb-2">{f.opis}</p>
                  <p className="text-xs text-blue-700 font-medium">{f.implementacja}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Porównanie narzędzi */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Porównanie narzędzi API Gateway</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wybór zależy od środowiska (AWS, Kubernetes, on-prem), wymagań
              customizacji i skali organizacji.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {gatewayComparison.map((g) => (
              <FadeInView key={g.narzedzie}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-4 gap-4 items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{g.narzedzie}</h3>
                      <span className="text-xs text-blue-600 font-medium">{g.typ}</span>
                    </div>
                    <p className="text-green-700 text-xs">{g.plus}</p>
                    <p className="text-red-700 text-xs">{g.minus}</p>
                    <p className="text-gray-500 text-xs italic">{g.idealny}</p>
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

      <RelatedArticles currentArticleId="api-gateway-co-to-jest-jak-wybrac-kong-aws-apigee" />
      <ContactSection />
    </Layout>
  );
}
