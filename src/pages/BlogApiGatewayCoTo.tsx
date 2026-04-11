import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest API Gateway?",
    answer: "API Gateway to serwer proxy który działa jako jedyna brama wejściowa (single entry point) dla wszystkich klientów do usług backendowych. Zamiast klient bezpośrednio wywołuje 10 różnych mikroserwisów, wywołuje jeden API Gateway który routuje zapytania do odpowiednich serwisów. Kluczowe funkcje API Gateway: Routing — przekierowanie zapytań do odpowiedniego serwisu na podstawie ścieżki, metody HTTP, nagłówków. Authentication/Authorization — weryfikacja tokenów JWT, API keys, OAuth przed przepuszczeniem do backend. Rate Limiting — ograniczenie liczby zapytań na klucz API lub IP. SSL Termination — obsługa HTTPS na poziomie gateway, backend może używać HTTP. Load Balancing — rozkład ruchu między instancje serwisów. Caching — cache'owanie odpowiedzi dla GET requests. Transformation — modyfikacja requests/responses (np. dodawanie nagłówków). Logging/Monitoring — centralny punkt zbierania logów i metryk. API Gateway eliminuje duplikację kodu cross-cutting concerns w każdym serwisie.",
  },
  {
    question: "API Gateway vs. Load Balancer vs. Reverse Proxy — różnice?",
    answer: "Porównanie: Reverse Proxy (np. Nginx) — prosty proxy który przekierowuje ruch. SSL termination, static file serving, basic routing. Brak logiki biznesowej. Load Balancer (np. AWS ELB, HAProxy) — rozkłada ruch między wiele instancji tego samego serwisu. Health checks, session affinity. Niezłożona logika routingu. API Gateway (np. Kong, AWS API Gateway, Apigee) — zaawansowany proxy z biznesową logiką: auth, rate limiting, transformation, analytics. Hierarchia: API Gateway zawiera funkcje reverse proxy i load balancera + dodaje warstwy wyżej. Kiedy tylko load balancer: Prosta aplikacja monolityczna, same scalowanie. Kiedy reverse proxy: Static content, SSL termination, prosta proxy. Kiedy API Gateway: Mikroserwisy, API Management, różni klienci z różnymi potrzebami (mobile vs. web), monetyzacja API. BFF (Backend for Frontend) — specjalizowany API Gateway per typ klienta: BFF-Mobile, BFF-Web, BFF-Partner. Optymalny pattern dla zróżnicowanych klientów.",
  },
  {
    question: "Jakie są popularne API Gateway — Kong, AWS API Gateway, Apigee?",
    answer: "Popularne API Gateways: Kong — open-source, plugin-based, Lua + Go. Self-hosted lub managed (Kong Konnect). Bardzo popularne w enterprise. 8000+ gwiazdek GitHub. Pluginy: auth, rate limiting, transformacje, logging. AWS API Gateway — fully managed, integracja z Lambda, IAM, Cognito. Pay-per-call pricing. Idealny dla serverless na AWS. Brak open-source. Apigee (Google) — enterprise API management. Analytics, developer portal, monetizacja. Drogi, złożony, dla dużych organizacji. Traefik — open-source, cloud-native, świetny dla Kubernetes. Auto-discovery serwisów. Popular w Docker/K8s środowiskach. Nginx API Gateway — rozszerzenie Nginx z API management features. Envoy — high-performance proxy, używany wewnętrznie przez Istio (service mesh). Tyk — open-source API gateway, Python/Go. Dobra alternatywa dla Kong. Azure API Management — managed service na Azure, integracja z Azure AD. Wybór: AWS? AWS API Gateway. Kubernetes? Kong lub Traefik. Open-source first? Kong lub Tyk. Enterprise features? Apigee lub Kong Enterprise.",
  },
  {
    question: "Jak wdrożyć Rate Limiting i Auth w API Gateway?",
    answer: "Rate Limiting w API Gateway: Poziomy rate limiting: Per IP — ogranicza dostęp per adres IP. Podstawowa ochrona przed DDoS. Per API Key — ogranicza konkretnego klienta API. Różne limity dla różnych planów. Per User — po autentykacji, limity per użytkownika. Per endpoint — różne limity dla różnych operacji (/search ma wyższy limit niż /payment). Algorytmy: Token Bucket — pozwala na bursts, rate wygładza się w czasie. Leaky Bucket — stały rate bez burstów. Fixed Window — limit per okno czasowe (może powodować spike'i na granicy). Sliding Window — bardziej sprawiedliwy, brak spike'ów. Authentication w API Gateway: API Keys — proste, statyczne. Dla server-to-server. Łatwe do rotacji. JWT (JSON Web Tokens) — stateless, self-contained token. Gateway weryfikuje podpis bez contact z auth server. OAuth 2.0 — delegacja autoryzacji. Gateway pełni rolę resource server. mTLS — mutual TLS dla service-to-service komunikacji. Best practice: gateway weryfikuje token, nie backend. Backend ufa że gateway zweryfikował. Dodaj RBAC na poziomie gateway — role determinują dostęp do endpointów.",
  },
  {
    question: "Co to jest Service Mesh i czym różni się od API Gateway?",
    answer: "Service Mesh vs. API Gateway: API Gateway — zarządza komunikacją north-south (zewnętrzni klienci do wewnętrznych serwisów). Single entry point, zewnętrzne API management. Service Mesh (Istio, Linkerd, Consul Connect) — zarządza komunikacją east-west (serwis-do-serwisu wewnątrz klastra). Sidecar proxy (Envoy) przy każdym serwisie. Kiedy API Gateway: Zarządzanie zewnętrznym API. Autentykacja i autoryzacja klientów zewnętrznych. Rate limiting i quotas dla partnerów. Developer portal. Kiedy Service Mesh: Mutual TLS między serwisami (zero trust sieć wewnętrzna). Observability dla service-to-service komunikacji (tracing, metrics). Traffic shaping (canary deployments, circuit breaking). Reliabilność (retries, timeouts, circuit breaker) na poziomie sieci. Razem: używaj obu. API Gateway na peryferiach dla external traffic. Service Mesh wewnątrz klastra dla internal traffic. Popularne service mesh: Istio (complex, feature-rich), Linkerd (lightweight, easy), Consul Connect. API Gateway + Service Mesh = pełny stack networking dla mikroserwisów.",
  },
];

const gatewayFeatures = [
  { funkcja: "Routing", opis: "Przekierowanie requestów do serwisów na podstawie ścieżki, metody, nagłówków", przykład: "/api/users/* → user-service, /api/orders/* → order-service", kolor: "blue" },
  { funkcja: "Authentication", opis: "Weryfikacja JWT, API keys, OAuth2 zanim request dotrze do backendu", przykład: "Sprawdź JWT signature + expiry, wyciągnij user ID z claims", kolor: "green" },
  { funkcja: "Rate Limiting", opis: "Ograniczenie liczby requestów per klucz/IP/użytkownik w oknie czasowym", przykład: "Free plan: 100 req/min. Pro: 1000 req/min. Enterprise: unlimited", kolor: "purple" },
  { funkcja: "SSL Termination", opis: "Obsługa HTTPS na poziomie gateway, serwisy mogą komunikować się HTTP", przykład: "Gateway: HTTPS (443). Internal: HTTP (8080). Zero cert management per service.", kolor: "orange" },
  { funkcja: "Caching", opis: "Cache'owanie odpowiedzi GET dla redukcji obciążenia backendu", przykład: "Cache /api/products przez 60 sekund. Cache-Control headers.", kolor: "teal" },
  { funkcja: "Observability", opis: "Centralny punkt logowania, metryk i distributed tracing dla wszystkich requestów", przykład: "Każdy request: log request/response, emit Prometheus metric, trace ID do Jaeger", kolor: "indigo" },
];

const gatewayComparison = [
  { narzędzie: "AWS API Gateway", model: "Managed SaaS", pricing: "Per call ($3.50/1M calls)", integracja: "Lambda, Cognito, IAM", kiedy: "Stack AWS, serverless" },
  { narzędzie: "Kong", model: "Open-source / Enterprise", pricing: "Free (OSS) / custom", integracja: "Plugin ecosystem, K8s", kiedy: "Self-hosted, open-source" },
  { narzędzie: "Traefik", model: "Open-source", pricing: "Free / Traefik Hub", integracja: "Docker, K8s native", kiedy: "Kubernetes, auto-discovery" },
  { narzędzie: "Apigee", model: "Enterprise SaaS", pricing: "Custom (drogi)", integracja: "GCP, developer portal", kiedy: "Large enterprise, API monetization" },
];

export default function BlogApiGatewayCoTo() {
  return (
    <Layout>
      <SEOHead
        title="API Gateway — co to jest i jak wybrać? Kong vs AWS vs Apigee | Fotz.pl"
        description="API Gateway: funkcje (routing, auth, rate limiting, SSL termination), porównanie Kong vs AWS API Gateway vs Apigee vs Traefik i różnica z Service Mesh."
        canonicalUrl="https://fotz.pl/blog/api-gateway-co-to-jest-jak-wybrac-kong-aws-apigee"
      />
      <ArticleSchema
        title="API Gateway — co to jest i jak wybrać? Kong vs AWS vs Apigee"
        description="API Gateway: routing, auth, rate limiting, SSL termination, caching, observability. Porównanie Kong, AWS API Gateway, Apigee, Traefik i Service Mesh dla mikroserwisów."
        url="https://fotz.pl/blog/api-gateway-co-to-jest-jak-wybrac-kong-aws-apigee"
        datePublished="2024-03-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "API Gateway", url: "https://fotz.pl/blog/api-gateway-co-to-jest-jak-wybrac-kong-aws-apigee" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "API Gateway", href: "/blog/api-gateway-co-to-jest-jak-wybrac-kong-aws-apigee" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-slate-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              API Architecture
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              API Gateway
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jedno miejsce dla auth, rate limiting, routing i monitoringu
              wszystkich requestów do Twoich mikroserwisów.
              API Gateway eliminuje duplikację cross-cutting concerns.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Lider OSS", value: "Kong" },
                { label: "AWS managed", value: "API Gateway" },
                { label: "Kubernetes", value: "Traefik" },
                { label: "Enterprise", value: "Apigee" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-slate-300">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
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
              API Gateway konsoliduje cross-cutting concerns które
              bez gateway trzeba by implementować w każdym serwisie osobno.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {gatewayFeatures.map((f) => (
              <FadeInView key={f.funkcja}>
                <div className={`rounded-xl border-2 p-5 ${
                  f.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  f.kolor === "green" ? "border-green-200 bg-green-50" :
                  f.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  f.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  f.kolor === "teal" ? "border-teal-200 bg-teal-50" :
                  "border-indigo-200 bg-indigo-50"
                }`}>
                  <h3 className={`font-bold text-base mb-2 ${
                    f.kolor === "blue" ? "text-blue-800" :
                    f.kolor === "green" ? "text-green-800" :
                    f.kolor === "purple" ? "text-purple-800" :
                    f.kolor === "orange" ? "text-orange-800" :
                    f.kolor === "teal" ? "text-teal-800" :
                    "text-indigo-800"
                  }`}>{f.funkcja}</h3>
                  <p className="text-gray-700 text-sm mb-2">{f.opis}</p>
                  <p className="text-xs text-gray-500 font-mono bg-white rounded p-2 border border-gray-100">{f.przykład}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Porównanie API Gateways</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wybór API Gateway zależy od infrastruktury, modelu hostingu i budżetu.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="p-3 text-left rounded-tl-lg">Narzędzie</th>
                  <th className="p-3 text-left">Model</th>
                  <th className="p-3 text-left">Pricing</th>
                  <th className="p-3 text-left">Kiedy używać</th>
                </tr>
              </thead>
              <tbody>
                {gatewayComparison.map((g, i) => (
                  <tr key={g.narzędzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-800">{g.narzędzie}</td>
                    <td className="p-3 text-gray-600">{g.model}</td>
                    <td className="p-3 text-gray-600">{g.pricing}</td>
                    <td className="p-3 text-gray-600">{g.kiedy}</td>
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

      <ContactSection />
    </Layout>
  );
}
