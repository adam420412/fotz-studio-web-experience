import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Service Mesh i dlaczego powstał?",
    answer: "Service Mesh to warstwa infrastruktury która zarządza komunikacją między mikrousługami w sposób transparentny dla aplikacji. Zamiast implementować logikę sieciową (retries, timeouty, circuit breakers, mTLS, observability) w każdej usłudze osobno, Service Mesh wyciąga ją do dedykowanej warstwy. Problem który rozwiązuje: w architekturze mikrousług każdy serwis musi radzić sobie z: load balancing, service discovery, circuit breaking, timeouts, retries, mTLS (wzajemna autentykacja), distributed tracing, rate limiting. Implementowanie tego w każdej usłudze to duplikacja kodu, różne języki programowania = różne implementacje, trudne zarządzanie. Service Mesh rozwiązuje przez: Sidecar proxy (Envoy) wstrzyknięty obok każdego poda. Proxy przechwytuje cały ruch sieciowy. Control plane zarządza konfiguracją wszystkich proxy. Data plane — Envoy proxy na poziomie per-pod. Control plane — Istiod (Istio), Linkerd control plane. Alternatywy: Istio (najpopularniejszy, oparty na Envoy), Linkerd (lekki, Rust-based proxy), Consul Connect (HashiCorp), Kuma (Kong), AWS App Mesh.",
  },
  {
    question: "Jak działa Istio — architektura i komponenty?",
    answer: "Istio — architektura: Data Plane: Envoy proxy jako sidecar container w każdym podzie. Automatycznie wstrzykiwany przez Istio admission controller (MutatingWebhookConfiguration). Przechwytuje CAŁY ruch IN i OUT z poda przez iptables rules. Control Plane (Istiod): Pilot — service discovery, routing rules dla Envoy. Citadel — certificate authority (mTLS certificates). Galley — konfiguracja validation. W Istio 1.5+ wszystkie zintegrowane w jeden proces Istiod. Kluczowe zasoby Kubernetes (CRDs): VirtualService — definiuje routing rules (np. 20% ruchu do v2). DestinationRule — policy per destination (load balancing algo, circuit breaker thresholds, TLS). Gateway — ingress/egress dla Service Mesh. ServiceEntry — rejestracja zewnętrznych serwisów. AuthorizationPolicy — RBAC na poziomie serwisów. PeerAuthentication — wymóg mTLS między serwisami. Traffic Management: canary deployments — 5% ruchu do nowej wersji. A/B testing — routing po nagłówkach HTTP. Fault injection — dodaj opóźnienie lub błąd do konkretnego serwisu (chaos engineering built-in). Mirror traffic — duplikuj ruch do shadow service. Kiali — UI dashboard dla Istio (service graph, traffic flow).",
  },
  {
    question: "mTLS w Service Mesh — jak działa i dlaczego ważne?",
    answer: "mTLS (mutual TLS) w Service Mesh: TLS (standardowe HTTPS): klient weryfikuje certyfikat serwera. Serwer nie weryfikuje klienta. mTLS: obie strony wzajemnie weryfikują swoje certyfikaty. Serwer wie z którym serwisem rozmawia. Dlaczego ważne w mikrousługach: bez mTLS — kompromitacja jednego poda pozwala atakować wszystkie inne serwisy w sieci wewnętrznej. Z mTLS — każdy serwis ma tożsamość (SPIFFE ID). Komunikacja między serwisami jest szyfrowana i autentykowana. Nawet jeśli atakujący jest w sieci — nie może podszywać się pod serwis. Zero Trust Network: mTLS jest fundamentem Zero Trust w Kubernetes. Nie ufaj sieci wewnętrznej — weryfikuj każdą komunikację. Jak Istio zarządza mTLS: Istiod działa jako Certificate Authority. Automatycznie rotuje certyfikaty (krótkotrwałe, SPIFFE). Sidecar Envoy obsługuje handshake TLS transparentnie dla aplikacji. Tryby: STRICT (wymaga mTLS), PERMISSIVE (akceptuje i TLS i plain). Workload Identity: SPIFFE/SPIRE standard — serwis ma tożsamość (URI: spiffe://cluster.local/ns/default/sa/frontend). AuthorizationPolicy może kontrolować komunikację: serwis A może rozmawiać tylko z serwisem B.",
  },
  {
    question: "Service Mesh vs. API Gateway — różnice i kiedy używać?",
    answer: "Service Mesh vs. API Gateway: API Gateway: zarządza ruchem ZEWNĘTRZNYM (North-South). Klient zewnętrzny → API Gateway → backend. Funkcje: autentykacja zewnętrzna, rate limiting, SSL termination, routing, transformacja requestów. Narzędzia: Kong, AWS API Gateway, Nginx, Traefik. Service Mesh: zarządza ruchem WEWNĘTRZNYM (East-West). Mikrousługa A → Serwis Mesh Proxy → Mikrousługa B. Funkcje: mTLS, circuit breaking, retry, distributed tracing, canary inside cluster. Narzędzia: Istio, Linkerd, Consul. Kiedy używać obu razem: API Gateway na granicy klastra (ingress). Service Mesh wewnątrz klastra między serwisami. To jest popularny pattern w enterprise K8s. Kiedy Service Mesh może być za dużo: małe projekty z 3-5 serwisami — overhead Service Mesh nie jest wart. Dodaje latency (sidecar proxy + iptables rules). Złożoność operacyjna. Linkernd vs. Istio: Linkerd — prostszy, lżejszy (Rust proxy zamiast Envoy), mniej features ale też mniej złożony w operacji. Istio — pełen feature set, większa adopcja, ale wymaga doświadczonego SRE/Platform Engineer do zarządzania.",
  },
  {
    question: "Jak wdrożyć Service Mesh — krok po kroku i pułapki?",
    answer: "Wdrożenie Service Mesh: Krok 1 — Ocena gotowości: czy masz wystarczającą liczbę serwisów? Czy masz problemy które Service Mesh rozwiązuje (mTLS, observability, traffic management)? Krok 2 — Wybór narzędzia: Istio (pełen feature set, duża społeczność) vs. Linkerd (prostszy, lżejszy). Krok 3 — Instalacja: Istio — istioctl install --set profile=default. Linkerd — linkerd install | kubectl apply. Krok 4 — Wstrzykiwanie sidecar: per namespace: kubectl label namespace default istio-injection=enabled. Per deployment (adnotacja). Krok 5 — Migracja do mTLS: zacznij od PERMISSIVE mode (akceptuje plain i mTLS). Sprawdź który ruch jest plain. Przełącz na STRICT mode per namespace stopniowo. Krok 6 — Traffic Management: wdróż pierwsze VirtualService i DestinationRule dla canary deployment. Krok 7 — Observability: skonfiguruj Kiali + Jaeger + Prometheus przez Istio addons. Pułapki: Resource overhead: każdy Envoy sidecar = 50-100MB RAM + CPU. W dużych klastrach adduje się. Debugging: istioctl analyze i istioctl proxy-config do debuggingu mesh config. mTLS STRICT too early: zablokuje health checks i zewnętrzne połączenia jeśli nie skonfigurowane. Sidecar injection failure: aplikacja nie startuje jeśli sidecar injection webhook nie działa.",
  },
];

const meshFeatures = [
  { feature: "mTLS (Mutual TLS)", opis: "Wzajemna autentykacja między serwisami. Szyfrowanie całego ruchu wewnętrznego.", kategoria: "Security" },
  { feature: "Circuit Breaking", opis: "Automatyczne wyłączanie usług które zwracają błędy. Zapobiega kaskadowym awariom.", kategoria: "Reliability" },
  { feature: "Canary Deployments", opis: "Routing % ruchu do nowej wersji serwisu. Bezpieczne rollout bez downtime.", kategoria: "Traffic Mgmt" },
  { feature: "Distributed Tracing", opis: "Automatyczne zbieranie traces przez Envoy bez zmian w kodzie aplikacji.", kategoria: "Observability" },
  { feature: "Retry Logic", opis: "Automatyczne retry nieudanych requestów z konfigurowalnymi politykami.", kategoria: "Reliability" },
  { feature: "Rate Limiting", opis: "Ograniczanie liczby requestów per serwis lub per klient (global + local).", kategoria: "Traffic Mgmt" },
];

const meshComparison = [
  { aspekt: "Proxy", istio: "Envoy (C++)", linkerd: "Linkerd2-proxy (Rust)" },
  { aspekt: "Overhead", istio: "Wyższy (Envoy)", linkerd: "Niższy (ultra-lightweight)" },
  { aspekt: "Feature set", istio: "Bardzo bogaty", linkerd: "Podstawowy + mTLS" },
  { aspekt: "Złożoność", istio: "Wysoka", linkerd: "Niska" },
  { aspekt: "mTLS", istio: "Tak (SPIFFE)", linkerd: "Tak (SPIFFE)" },
  { aspekt: "Adopcja", istio: "Dominująca", linkerd: "Niszowa ale lojalna" },
];

export default function BlogServiceMeshCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Service Mesh — co to jest, Istio, Linkerd i mTLS? | Fotz.pl"
        description="Service Mesh: definicja, Istio architektura (Envoy, Istiod), mTLS, canary deployments, circuit breaking, Service Mesh vs. API Gateway i jak wdrożyć."
        canonical="https://fotz.pl/blog/service-mesh-co-to-jest-istio-linkerd-mtls"

        keywords="Service Mesh co to jest, Service Mesh definicja, czym jest Service Mesh, Service Mesh przykłady, jak działa Service Mesh, Service Mesh znaczenie, Service Mesh przewodnik"
      />
      <ArticleSchema
        title="Service Mesh — co to jest, Istio, Linkerd i mTLS?"
        description="Service Mesh: architektura, Istio vs. Linkerd, mTLS i Zero Trust, 6 kluczowych funkcji, porównanie narzędzi i wdrożenie krok po kroku."
        url="https://fotz.pl/blog/service-mesh-co-to-jest-istio-linkerd-mtls"
        datePublished="2024-03-28"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Service Mesh", url: "https://fotz.pl/blog/service-mesh-co-to-jest-istio-linkerd-mtls" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Service Mesh", url: "/blog/service-mesh-co-to-jest-istio-linkerd-mtls" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Cloud Native / Kubernetes
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service Mesh
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zamiast implementować mTLS, circuit breakers i tracing w każdej mikrousłudze osobno,
              Service Mesh wyciąga tę logikę do dedykowanej warstwy infrastruktury —
              transparentnej dla kodu aplikacji.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Popularne", value: "Istio / Linkerd" },
                { label: "Proxy", value: "Envoy / Rust" },
                { label: "Security", value: "mTLS + SPIFFE" },
                { label: "Pattern", value: "Sidecar Proxy" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych funkcji Service Mesh</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Service Mesh dostarcza funkcje sieciowe które normalnie wymagają
              implementacji w każdej mikrousłudze — raz, na poziomie infrastruktury.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {meshFeatures.map((f) => (
              <FadeInView key={f.feature}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{f.feature}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      f.kategoria === "Security" ? "bg-red-100 text-red-700" :
                      f.kategoria === "Reliability" ? "bg-green-100 text-green-700" :
                      f.kategoria === "Observability" ? "bg-blue-100 text-blue-700" :
                      "bg-indigo-100 text-indigo-700"
                    }`}>{f.kategoria}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{f.opis}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Istio vs. Linkerd</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dwa najpopularniejsze Service Mesh — Istio z bogatym feature setem
              vs. Linkerd z prostotą i minimalnym overhead.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Aspekt</th>
                  <th className="text-left p-3 font-bold text-indigo-700">Istio</th>
                  <th className="text-left p-3 font-bold text-purple-700">Linkerd</th>
                </tr>
              </thead>
              <tbody>
                {meshComparison.map((row, i) => (
                  <tr key={row.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-gray-900">{row.aspekt}</td>
                    <td className="p-3 text-gray-700">{row.istio}</td>
                    <td className="p-3 text-gray-700">{row.linkerd}</td>
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

      <RelatedArticles currentArticleId="service-mesh-co-to-jest-istio-linkerd-mtls" />
      <ContactSection />
    </Layout>
  );
}
