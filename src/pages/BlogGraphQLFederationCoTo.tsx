import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest GraphQL Federation i jak różni się od standardowego GraphQL?",
    answer: "GraphQL Federation to podejście do budowania GraphQL API z wielu niezależnych serwisów (subgraphów) które są automatycznie łączone w jeden unified graph. W standardowym GraphQL: jeden serwer, jeden schemat. Gdy masz wiele mikroserwisów każdy ma własne API (REST lub GraphQL) — klient musi odpytywać wiele endpointów lub potrzebuje gateway. Federation rozwiązuje to przez: każdy mikroserwis definiuje swój własny GraphQL subgraph (np. serwis Users, serwis Products, serwis Orders). Gateway (supergraph) automatycznie łączy subgraphy w jeden schemat. Klient wysyła jedno zapytanie do gateway — gateway planuje wykonanie przez subgraphy. Kluczowe koncepty: @key directive — definiuje jak entity jest identyfikowalna między subgraphami. @external — pole zdefiniowane w innym subgrafie. @provides, @requires — optymalizacja które pola są potrzebne. Apollo Federation vs. GraphQL Mesh vs. Hive: Apollo Federation — standard de facto, wersje 1.x i 2.x. Używany przez Netflix, Airbnb. GraphQL Mesh — bardziej elastyczny, może federować REST/gRPC/GraphQL. Hive — cloud platform dla federation management. Zalety federation: team autonomy (każdy team posiada swój subgraph). Unified API dla klientów. Schema registry — centralna kontrola wersji schematu.",
  },
  {
    question: "Apollo Federation — jak skonfigurować supergraph z subgraphami?",
    answer: "Apollo Federation składa się z: Subgraphs — indywidualne GraphQL serwisy (Node.js, Java, Python, Go). Router/Gateway — Apollo Router (Rust) lub @apollo/gateway (Node.js). Schema Registry — Apollo Studio lub self-hosted Hive/Cosmo. Setup subgraph (Node.js + @apollo/subgraph): instalacja @apollo/subgraph. buildSubgraphSchema() zamiast makeExecutableSchema(). Dodaj __resolveReference dla entity types. Dodaj directives (@key, @external, @shareable). Przykład — subgraph Users: type User @key(fields: 'id') { id: ID! name: String! email: String! }. Subgraph Orders może rozszerzyć User: extend type User @key(fields: 'id') { id: ID! @external orders: [Order!]! }. Apollo Router (Rust): superlekki, wydajny router w Rust. Zastąpił @apollo/gateway (Node.js) — 10x szybszy. Supergraph schema: kompozycja przez rover CLI lub Apollo Studio. rover supergraph compose --config supergraph.yaml. Supergraph SDL — skompilowany unified schema. Cosmo (WunderGraph): open-source alternatywa dla Apollo Federation. Schema Registry, Router, Studio — self-hostable. Bardzo aktywny rozwój (2023-2024). Persisted Queries: wysyłaj ID zapytania zamiast pełnego tekstu. Bezpieczeństwo + wydajność (mniejszy payload).",
  },
  {
    question: "GraphQL vs. REST vs. gRPC — kiedy wybrać GraphQL?",
    answer: "REST: proste, szeroko rozumiane, świetne dla publicznego API. Over-fetching (dostajesz więcej pól niż potrzebujesz) i under-fetching (potrzebujesz kilku requestów dla złożonych danych) jako główne problemy. GraphQL: klient definiuje dokładnie jakich pól potrzebuje. Jeden endpoint dla wszystkich zapytań. Introspection — samodokumentujące API. Subscriptions dla real-time. Silnie typowany schemat. Wyzwania GraphQL: N+1 problem — każde zapytanie może generować wiele zapytań do bazy (rozwiązanie: DataLoader). Caching trudniejszy vs. REST (brak URL per resource). File upload niestandardowy (multipart). Rate limiting bardziej skomplikowane. gRPC: binarny protokół (Protocol Buffers), bardzo szybki. Idealny dla wewnętrznej komunikacji mikroserwisów. Streaming (unary, server streaming, client streaming, bidirectional). Kiedy GraphQL: frontend potrzebuje elastycznych zapytań (różne widoki mają różne potrzeby danych). Rapid product development — frontend nie czeka na nowe endpointy. Aggregation z wielu źródeł (federation). Mobile apps — optymalizacja ilości danych. Kiedy REST lepszy: publiczne API (REST powszechnie znane). Simple CRUD bez złożonych relacji. Kiedy gRPC lepszy: internal mikroserwisy, performance critical paths, streaming.",
  },
  {
    question: "DataLoader i N+1 problem w GraphQL — jak rozwiązać?",
    answer: "N+1 problem: zapytanie GraphQL które pobiera listę postów i dla każdego pobiera autora. Naiwna implementacja: 1 query dla listy postów + N queries dla autorów. DataLoader (Facebook): batching + caching requesty do bazy danych. Zamiast N osobnych SELECT WHERE id=X → jeden SELECT WHERE id IN (1,2,3,...N). Caching w ramach jednego requesta — ten sam użytkownik pobierany raz. Implementacja: const userLoader = new DataLoader(async (userIds) => { const users = await db.query('SELECT * FROM users WHERE id IN (?)', [userIds]); return userIds.map(id => users.find(u => u.id === id)); }). W resolverze: author: (post) => userLoader.load(post.authorId). Persistent resolvers: DataLoader instance na request — nie globalny (unikaj cache poisoning). Inne strategie: Join Monster — automatyczny SQL join generator dla GraphQL. Prisma — ORM który rozwiązuje N+1 przez query batching. Strawberry (Python) + dataclasses. Schema-first vs. Code-first: Schema-first — definiujesz SDL, generujesz typy. Code-first (Nexus, TypeGraphQL, Strawberry) — definiujesz w kodzie, generujesz SDL. Query complexity limits: analizuj złożoność zapytania przed wykonaniem. Odrzuć zapytania przekraczające threshold. Persisted Operations — whitelist dozwolonych zapytań.",
  },
  {
    question: "Jak wdrożyć GraphQL w produkcji — security, monitoring, schema evolution?",
    answer: "Security w GraphQL produkcji: Depth limiting — ogranicz głębokość zapytania (chroni przed recursive queries). Amount limiting — maksymalna liczba zwracanych elementów. Query complexity limits. Persisted operations (whitelist). Introspection wyłączona na produkcji (lub ograniczona). Disable field suggestions (ujawniają schemat). Authentication: JWT validation w middleware (przed resolverami). Context object na request z decoded user. Authorization: field-level (sprawdź czy user ma dostęp do pola). Object-level (czy user może czytać tego zasobu). Monitoring: Apollo Studio / Cosmo — trace każde zapytanie per operacja. Response time per field, error rate, usage stats. OpenTelemetry — instrumentacja standardowa. Schema Evolution (schema registry): schemat jest kontraktem z klientami. Breaking changes: usunięcie pola, zmiana typu, zmiana argumentu. Non-breaking: dodanie pola, dodanie opcjonalnego argumentu. Schema diff w CI/CD — automatyczne wykrywanie breaking changes (rover). Schema registry (Apollo Studio, Hive, Cosmo) — wersjonowanie i deployment kontrola. SDL first approach: schemat jako source of truth, generuj typy po stronie klienta i serwera. GraphQL Code Generator — automatyczne typy TypeScript/Java/Python ze schematu. Subgraph testing: unit tests resolverów. Integration tests z Apollo Server testClient. Contract tests między subgraphami.",
  },
];

const federationConcepts = [
  { koncept: "@key directive", opis: "Definiuje unikalne pola identyfikujące entity między subgraphami (odpowiednik primary key)", przyklad: "type User @key(fields: 'id') { ... }" },
  { koncept: "Entity extension", opis: "Jeden subgraph rozszerza typ zdefiniowany w innym — dodaje pola bez kopiowania całego typu", przyklad: "extend type User @key(fields: 'id') { orders: [Order!]! }" },
  { koncept: "__resolveReference", opis: "Funkcja w subgrafie która pobiera entity po kluczu — wywoływana gdy gateway łączy dane", przyklad: "User: { __resolveReference: (ref) => db.findUser(ref.id) }" },
  { koncept: "@shareable", opis: "Pole może być zdefiniowane w wielu subgraphach — oba mogą je zwracać", przyklad: "type Product @key(fields: 'id') { id: ID! @shareable name: String! }" },
  { koncept: "@requires", opis: "Subgraph wymaga pola z innego subgrafu przed resolwowaniem własnego pola", przyklad: "@requires(fields: 'shippingAddress') estimatedDelivery: String" },
  { koncept: "Supergraph SDL", opis: "Skompilowany unified schemat z wszystkich subgraphów — używany przez Router do planowania", przyklad: "rover supergraph compose --config supergraph.yaml" },
];

const graphqlTools = [
  { kategoria: "Gateway / Router", narzedzie: "Apollo Router (Rust)", opis: "Produkcyjny supergraph router — 10x szybszy niż Node.js gateway" },
  { kategoria: "Schema Registry", narzedzie: "Apollo Studio / Cosmo / Hive", opis: "Wersjonowanie schematów, breaking change detection, schema checks w CI" },
  { kategoria: "Subgraph (Node.js)", narzedzie: "@apollo/subgraph", opis: "Biblioteka do budowania Federation-compatible subgraphów" },
  { kategoria: "Code Generation", narzedzie: "GraphQL Code Generator", opis: "Automatyczne TypeScript types, hooks, resolvers z SDL" },
  { kategoria: "Testing", narzedzie: "Apollo Server testClient / MSW", opis: "Integration tests, mocking GraphQL API w testach" },
  { kategoria: "N+1 Solution", narzedzie: "DataLoader / Prisma", opis: "Batching + caching requesty do bazy — eliminacja N+1 queries" },
];

export default function BlogGraphQLFederationCoTo() {
  return (
    <Layout>
      <SEOHead
        title="GraphQL Federation | Fotz Studio"
        description="GraphQL Federation: subgraphy, Apollo Router, @key directive, N+1 DataLoader, schema registry, GraphQL vs REST vs gRPC i security w produkcji."
        canonicalUrl="https://fotz.pl/blog/graphql-federation-co-to-jest-apollo-supergraph-subgraphy"

        keywords="GraphQL Federation co to jest, GraphQL Federation jak działa, GraphQL Federation tutorial, GraphQL Federation przykład, czym jest GraphQL Federation, GraphQL Federation dokumentacja, GraphQL Federation przewodnik"

        canonical="https://fotz.pl/blog/graphql-federation-co-to-jest-apollo-supergraph-subgraphy"
      />
      <ArticleSchema
        title="GraphQL Federation — co to jest, Apollo Federation, supergraph i subgraphy?"
        description="GraphQL Federation: 6 konceptów (key/extend/resolveReference), Apollo Router, DataLoader N+1, schema registry, security i monitoring w produkcji."
        url="https://fotz.pl/blog/graphql-federation-co-to-jest-apollo-supergraph-subgraphy"
        datePublished="2024-04-09"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "GraphQL Federation", url: "https://fotz.pl/blog/graphql-federation-co-to-jest-apollo-supergraph-subgraphy" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-rose-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "GraphQL Federation", href: "/blog/graphql-federation-co-to-jest-apollo-supergraph-subgraphy" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              API / Mikroserwisy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GraphQL Federation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jeden GraphQL endpoint dla setek mikroserwisów. Federation pozwala
              każdemu teamowi posiadać swój subgraph — a klienci widzą jeden
              unified graph bez wiedzy o wewnętrznej architekturze.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Standard", value: "Apollo Federation 2" },
                { label: "Router", value: "Apollo Router (Rust)" },
                { label: "Open-source alt.", value: "Cosmo / Hive" },
                { label: "Używają", value: "Netflix, Airbnb" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-pink-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Koncepty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych konceptów Federation</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Federation opiera się na kilku dyrektywach które pozwalają
              subgraphom współdzielić typy i dane.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {federationConcepts.map((f) => (
              <FadeInView key={f.koncept}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2 font-mono">{f.koncept}</h3>
                  <p className="text-gray-700 text-sm mb-2">{f.opis}</p>
                  <p className="text-xs text-pink-700 font-mono bg-pink-50 px-2 py-1 rounded">{f.przyklad}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekosystem narzędzi GraphQL Federation</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od routera przez schema registry po code generation — pełny
              stack narzędzi dla produkcyjnego GraphQL.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {graphqlTools.map((t) => (
              <FadeInView key={t.kategoria}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-3 gap-4 items-start">
                    <div>
                      <span className="text-xs font-semibold text-pink-700 uppercase tracking-wide">{t.kategoria}</span>
                      <h3 className="font-bold text-gray-900 mt-1">{t.narzedzie}</h3>
                    </div>
                    <p className="text-gray-600 text-sm md:col-span-2">{t.opis}</p>
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
