import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest wersjonowanie API i dlaczego jest ważne?",
    answer: "Wersjonowanie API to sposób zarządzania zmianami interfejsu programistycznego bez zrywania kompatybilności z istniejącymi klientami. Problem bez wersjonowania: zmiana struktury odpowiedzi API zrywa wszystkich klientów którzy jej używają. Typy zmian: Non-breaking (backward compatible) — dodanie nowego opcjonalnego pola, nowego endpointu, nowej wartości enum. Klienci mogą ignorować nowe pola. Breaking — usunięcie pola, zmiana typu danych, zmiana nazwy pola, zmiana semantyki. Wymaga nowej wersji API. Strategie wersjonowania: URL versioning (/v1/users, /v2/users) — najprostsze, widoczne w URL, łatwe do testowania. Header versioning (Accept: application/vnd.api+json;version=2) — czystszy URL, trudniej przetestować w przeglądarce. Query parameter (?version=2 lub ?v=2) — prosta implementacja, ale brzydki URL. Content-type versioning (application/vnd.myapp.v2+json) — RESTful, ale skomplikowane. Sufix versioning dla zasobów (Accept: application/vnd.myapp.user.v2+json) — granularne, ale bardzo skomplikowane. Rekomendacja w 2024: URL versioning (/v1/, /v2/) dla publicznych API, header versioning dla wewnętrznych.",
  },
  {
    question: "Jak deprecować wersję API bez zrywania klientów?",
    answer: "Deprecation strategy: zapowiedź z wyprzedzeniem. Sunset Header (RFC 8594): Sunset: Sat, 31 Dec 2025 23:59:59 GMT — informuje kiedy wersja zostanie wyłączona. Deprecation: true — informuje że wersja jest deprecated. Link: rel='successor-version' — wskazuje nową wersję. Komunikacja: email do wszystkich znanych konsumentów API. Changelog z datą EOL. Dokumentacja z migration guide. Monitoring: śledzenie kto nadal używa starej wersji. Dashboard usage per version. Alerty gdy klient nie migruje do deadline. Versioning dla REST vs GraphQL: REST — wersjonowanie całego API lub per endpoint. GraphQL — @deprecated na polach i typach, nie ma URL versioning. GraphQL Federation — subgraph versioning. API Gateway: Kong/AWS API Gateway/Traefik — routing per wersja. Canary routing — 5% ruchu na v2 dla testów. Blue/Green dla wersji API. Semantic versioning dla SDK klientów: major.minor.patch. Major — breaking change. Minor — nowe funkcje backward-compatible. Patch — bugfix.",
  },
  {
    question: "URL versioning vs Header versioning — co wybrać?",
    answer: "URL versioning (/v1/users): Zalety — widoczny w URL, łatwy do cachowania przez CDN (URL = cache key), prosty do testowania (curl, Postman, przeglądarka), zrozumiały dla deweloperów, łatwe routing w API gateway. Wady — nie jest 'puryście RESTful' (URL powinien identyfikować zasób, nie wersję API), URL zmienia się przy każdej wersji. Header versioning (Accept: application/vnd.api.v2+json lub custom X-API-Version: 2): Zalety — czystszy URL, URL identyfikuje zasób, jeden URL na zawsze. Wady — trudniejszy do testowania (browser nie może łatwo ustawić nagłówka), problemy z cacheowaniem CDN (różne odpowiedzi dla tego samego URL), wymaga Vary: X-API-Version header dla poprawnego cache. Query parameter (?v=2): Zalety — prosta implementacja, widoczna w URL. Wady — brzydki URL, łatwo pominąć, niekonwencjonalne. Rekomendacje po platformach: Stripe — URL versioning + date versioning (2023-10-16). Twilio — URL versioning (/v1/, /v2/). GitHub API — header versioning (X-GitHub-Api-Version). Google APIs — URL versioning (/v1/, /v2/). AWS — URL versioning + date versioning. PayPal — URL versioning. Wniosek: dla nowych public API publicznych — URL versioning. Dla wewnętrznych API — co team preferuje.",
  },
  {
    question: "Date-based versioning API — strategia Stripe?",
    answer: "Stripe date versioning: zamiast v1/v2 używa dat wersji. Każdy request ma nagłówek Stripe-Version: 2023-10-16. Domyślna wersja = wersja z dnia rejestracji konta. Changelog per data — każda zmiana ma datę. Klient może upgrade'ować wersję w swoim dashboardzie. Zalety date versioning: granularne — nie musisz upgrade'ować całego API. Jasna historia zmian. Klient kontroluje kiedy migratuje. Wady: złożona implementacja — musisz transformować dane między wersjami. N wersji do utrzymania jednocześnie. Implementacja: middleware transformuje request/response. Per-endpoint versioning map. Feature flag per wersja. Podobne podejście: GitHub (X-GitHub-Api-Version: 2022-11-28). Salesforce (wersje po datach). Twilio (daty jako wersje). API versioning w Kubernetes: Kubernetes ma własny model — alpha (v1alpha1), beta (v1beta1), stable (v1). Migracja: v1alpha1 -> v1beta1 -> v1. Kubectl apply obsługuje konwersję między wersjami. API versioning w GraphQL: GraphQL nie ma standardowego versioning — używa @deprecated, additive changes. Gdy breaking change — nowy typ/pole z prefixem lub postfixem v2. Unikaj breaking changes w GraphQL przez design.",
  },
  {
    question: "API contract testing — jak testować kompatybilność między wersjami?",
    answer: "Contract testing: zamiast integracyjnych testów end-to-end — testuj kontrakt (umowę) między consumer i provider. Pact: najpopularniejszy framework contract testing. Consumer pisze test — definiuje co oczekuje od API. Pact generuje contract file (pact). Provider weryfikuje contract — czy spełnia wszystkie expectations. Pact Broker: centralny rejestr kontraktów. Webhook — powiadom provider gdy consumer zmienił kontrakt. Can I Deploy: sprawdź czy możesz bezpiecznie deploy. Prism (Stoplight): mock server z OpenAPI spec. Validate requests i responses vs spec. Contract testing dla eventów: Pact dla message-based (Kafka, RabbitMQ). Consumer definiuje oczekiwany message format. OpenAPI/AsyncAPI: OpenAPI 3.x — specyfikacja REST API. AsyncAPI — specyfikacja event-driven API (WebSocket, Kafka, AMQP). Spectral: linter dla OpenAPI/AsyncAPI. Enforce naming conventions, security headers, pagination. Backward compatibility checking: openapi-diff — porównuje dwie wersje OpenAPI spec. breaking-change-detector. oasdiff. Integracja z CI: blokuj PR jeśli zmiana jest breaking. Automatyczny changelog z diff. Versioning w mikrousługach: każdy serwis wersjonuje swoje API niezależnie. Service mesh — routing per wersja. Canary testing nowych wersji API.",
  },
];

const versioningStrategies = [
  { strategia: "URL Path (/v1/users)", widocznosc: "W URL", cache: "Doskonały (URL = key)", testowanie: "Proste (curl/browser)", restfulness: "Nieidealne", adopcja: "Stripe, Twilio, GitHub REST, AWS" },
  { strategia: "Header (X-API-Version)", widocznosc: "Ukryta", cache: "Wymaga Vary header", testowanie: "Wymaga narzędzi", restfulness: "Poprawne", adopcja: "GitHub API v4, wewnętrzne API" },
  { strategia: "Query Param (?v=2)", widocznosc: "W URL", cache: "Dobry", testowanie: "Proste", restfulness: "Akceptowalne", adopcja: "YouTube API, Google Maps" },
  { strategia: "Date-based (YYYY-MM-DD)", widocznosc: "W headerze", cache: "Wymaga Vary header", testowanie: "Wymaga narzędzi", restfulness: "Poprawne", adopcja: "Stripe, GitHub (nowy)" },
  { strategia: "Content Negotiation", widocznosc: "W Accept header", cache: "Wymaga Vary header", testowanie: "Skomplikowane", restfulness: "Idealne (RFC)", adopcja: "GitHub v3 (Accept header)" },
  { strategia: "GraphQL @deprecated", widocznosc: "W schemacie", cache: "Per query hash", testowanie: "Proste", restfulness: "N/A (GraphQL)", adopcja: "Wszystkie GraphQL API" },
];

export default function BlogApiVersioningCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Wersjonowanie API | Fotz Studio"
        description="API versioning: URL vs Header vs Date-based, strategia Stripe, Sunset header, deprecation, Pact contract testing i OpenAPI diff — jak wersjonować API bez…"
        canonicalUrl="https://fotz.pl/blog/wersjonowanie-api-co-to-jest-url-header-date-strategia-stripe-pact"

        keywords="Wersjonowanie API co to jest, Wersjonowanie API jak działa, Wersjonowanie API tutorial, Wersjonowanie API przykład, czym jest Wersjonowanie API, Wersjonowanie API dokumentacja, Wersjonowanie API przewodnik"

        canonical="https://fotz.pl/blog/wersjonowanie-api-co-to-jest-url-header-date-strategia-stripe-pact"
      />
      <ArticleSchema
        title="Wersjonowanie API — co to jest, URL vs Header vs Date, Stripe, deprecation, Pact?"
        description="API versioning: 6 strategii (URL/Header/Query/Date/Content negotiation/GraphQL), deprecation, Sunset header, contract testing Pact, openapi-diff."
        url="https://fotz.pl/blog/wersjonowanie-api-co-to-jest-url-header-date-strategia-stripe-pact"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Wersjonowanie API", url: "https://fotz.pl/blog/wersjonowanie-api-co-to-jest-url-header-date-strategia-stripe-pact" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Wersjonowanie API", href: "/blog/wersjonowanie-api-co-to-jest-url-header-date-strategia-stripe-pact" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              API Design / Backend
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wersjonowanie API
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jak zmieniać API bez zrywania klientów — URL path, header, date-based
              jak Stripe, Sunset header, Pact contract testing i openapi-diff.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Najpopularniejsza", value: "URL /v1/" },
                { label: "Strategia Stripe", value: "Date-based" },
                { label: "Deprecation RFC", value: "Sunset Header" },
                { label: "Contract testing", value: "Pact" },
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

      {/* Strategie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 strategii wersjonowania API</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każde podejście ma kompromisy między czystością URL, cacheowaniem, testowalnoscia i RESTfulness.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Strategia</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Widoczność</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cache CDN</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Testowanie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">RESTfulness</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kto używa</th>
                </tr>
              </thead>
              <tbody>
                {versioningStrategies.map((s, i) => (
                  <tr key={s.strategia} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{s.strategia}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{s.widocznosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{s.cache}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{s.testowanie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{s.restfulness}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{s.adopcja}</td>
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
