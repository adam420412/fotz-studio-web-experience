import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest GraphQL?",
    answer:
      "GraphQL to język zapytań do API oraz runtime do ich wykonywania, stworzony przez Facebook w 2012 roku i open-sourcowany w 2015. W przeciwieństwie do REST, GraphQL pozwala klientowi precyzyjnie określić jakich danych potrzebuje — nie więcej, nie mniej. Jeden endpoint (/graphql) obsługuje wszystkie operacje: Query (odczyt), Mutation (zapis) i Subscription (real-time). GraphQL jest typowany — schema definiuje dostępne typy i operacje.",
  },
  {
    question: "Czym różni się GraphQL od REST API?",
    answer:
      "REST API: wiele endpointów (/users, /posts, /comments), fixed response structure, over-fetching (za dużo danych) lub under-fetching (za mało — N+1 problem), wersjonowanie przez URL (/v1/, /v2/). GraphQL: jeden endpoint (/graphql), klient definiuje strukturę danych, brak over/under-fetchingu, brak tradycyjnego wersjonowania (schema evolution przez deprecated fields). GraphQL lepszy dla złożonych, powiązanych danych; REST prostszy dla prostych CRUD API.",
  },
  {
    question: "Co to jest GraphQL Schema?",
    answer:
      "GraphQL Schema (SDL — Schema Definition Language) to kontrakt między klientem a serwerem — definicja wszystkich dostępnych typów, pól, zapytań i mutacji. Schema jest typowana i samodokumentująca. Przykład: 'type User { id: ID!, name: String!, email: String!, posts: [Post!]! }'. Schema First Development: najpierw definiujesz schema, potem implementujesz resolvers. Introspection pozwala narzędziom (GraphiQL) na automatyczne generowanie dokumentacji.",
  },
  {
    question: "Co to są resolvers w GraphQL?",
    answer:
      "Resolvers to funkcje po stronie serwera GraphQL, które faktycznie pobierają dane dla każdego pola w schema. Dla każdego pola można zdefiniować resolver — funkcję (parent, args, context, info) => data. Jeśli resolver nie jest zdefiniowany, GraphQL użyje domyślnego (zwraca pole z parent object). N+1 problem w resolverach rozwiązuje się przez DataLoader (batching i caching żądań do bazy danych).",
  },
  {
    question: "Kiedy używać GraphQL zamiast REST?",
    answer:
      "GraphQL jest lepszy gdy: aplikacja ma złożone, powiązane dane (social network, e-commerce z wariantami), wiele różnych klientów (mobile, web, TV) o różnych potrzebach danych, chcesz uniknąć over-fetchingu, budujesz BFF (Backend for Frontend). REST jest lepszy gdy: proste CRUD API, publiczne API dla zewnętrznych developerów (REST bardziej znajomy), potrzebujesz prostego cachowania HTTP, masz ograniczony czas — REST szybszy w implementacji.",
  },
];

const graphqlOperations = [
  {
    operacja: "Query",
    opis: "Operacja odczytu danych — odpowiednik GET w REST. Queries mogą być wykonywane równolegle.",
    kolor: "bg-blue-600",
    przykład: `query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      title
      createdAt
    }
  }
}`,
  },
  {
    operacja: "Mutation",
    opis: "Operacja zapisu, aktualizacji lub usunięcia danych — odpowiednik POST/PUT/DELETE w REST. Mutacje wykonywane sekwencyjnie.",
    kolor: "bg-purple-600",
    przykład: `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    author {
      name
    }
  }
}`,
  },
  {
    operacja: "Subscription",
    opis: "Operacja real-time — klient subskrybuje zdarzenia. Serwer wysyła dane gdy zdarzenie nastąpi (WebSocket).",
    kolor: "bg-green-600",
    przykład: `subscription OnNewMessage($channelId: ID!) {
  messageAdded(channelId: $channelId) {
    id
    text
    sender { name }
    createdAt
  }
}`,
  },
];

const graphqlVsRest = [
  { aspekt: "Endpointy", graphql: "Jeden endpoint: POST /graphql", rest: "Wiele endpointów: /users, /posts, /comments" },
  { aspekt: "Struktura danych", graphql: "Klient definiuje dokładną strukturę w zapytaniu", rest: "Serwer definiuje stałą strukturę odpowiedzi" },
  { aspekt: "Over-fetching", graphql: "Brak — pobierasz tylko potrzebne pola", rest: "Częsty — endpoint zwraca wszystkie pola zasobu" },
  { aspekt: "Under-fetching", graphql: "Brak — jeden request pobiera wszystkie powiązane dane", rest: "Częsty — N+1 zapytań dla powiązanych zasobów" },
  { aspekt: "Typowanie", graphql: "Strongly typed schema (SDL) — kontrakt klient-serwer", rest: "Opcjonalne (OpenAPI/Swagger) — często brak" },
  { aspekt: "Wersjonowanie", graphql: "Brak tradycyjnego wersjonowania — schema evolution", rest: "URL versioning: /api/v1/, /api/v2/" },
  { aspekt: "Caching", graphql: "Trudniejsze — POST, persisted queries, Apollo Cache", rest: "Łatwe — HTTP caching, CDN, ETag" },
  { aspekt: "Narzędzia", graphql: "GraphiQL, Apollo Studio, GraphQL Playground", rest: "Swagger UI, Postman, curl" },
];

const graphqlEcosystem = [
  {
    narzędzie: "Apollo Client",
    typ: "Client-side",
    opis: "Najpopularniejsza biblioteka GraphQL dla React/JS. Zarządza state, caching, optymistic updates.",
    url: "apollographql.com",
  },
  {
    narzędzie: "Apollo Server",
    typ: "Server-side",
    opis: "Node.js GraphQL server. Obsługuje schema, resolvers, datasources, subscriptions.",
    url: "apollographql.com",
  },
  {
    narzędzie: "Relay",
    typ: "Client-side",
    opis: "Biblioteka React od Meta. Zaawansowany caching, pagination (Connections spec), compiler.",
    url: "relay.dev",
  },
  {
    narzędzie: "Hasura",
    typ: "Backend-as-a-Service",
    opis: "Automatycznie generuje GraphQL API z bazy danych PostgreSQL. Zero-code backend.",
    url: "hasura.io",
  },
  {
    narzędzie: "GraphQL Yoga",
    typ: "Server-side",
    opis: "Lekki, szybki GraphQL server od The Guild. Wsparcie dla subscriptions, file uploads.",
    url: "the-guild.dev/graphql/yoga-server",
  },
  {
    narzędzie: "URQL",
    typ: "Client-side",
    opis: "Lekka alternatywa dla Apollo Client. Modularny, mały bundle, łatwy w konfiguracji.",
    url: "formidable.com/open-source/urql",
  },
];

const schemaExample = `type Query {
  user(id: ID!): User
  users(limit: Int, offset: Int): [User!]!
  post(slug: String!): Post
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updatePost(id: ID!, input: UpdatePostInput!): Post!
  deletePost(id: ID!): Boolean!
}

type User {
  id: ID!
  name: String!
  email: String!
  role: UserRole!
  posts: [Post!]!
  createdAt: DateTime!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  tags: [String!]!
  publishedAt: DateTime
}

enum UserRole {
  ADMIN
  EDITOR
  VIEWER
}

input CreateUserInput {
  name: String!
  email: String!
  role: UserRole = VIEWER
}`;

export default function BlogGraphqlCoTo() {
  return (
    <Layout>
      <SEOHead
        title="GraphQL — co to jest? Query, Mutation, Schema i różnice od REST"
        description="GraphQL — definicja, 3 operacje (Query/Mutation/Subscription), schema SDL, resolvers i kiedy używać zamiast REST. Kompletny przewodnik po GraphQL."
        canonicalUrl="https://fotz.pl/blog/graphql-co-to"

        keywords="GraphQL co to jest, GraphQL jak działa, GraphQL tutorial, GraphQL przykład, czym jest GraphQL, GraphQL dokumentacja, GraphQL przewodnik"
      />
      <ArticleSchema
        title="GraphQL — co to jest i jak działa? Kompletny przewodnik"
        description="Kompletny przewodnik po GraphQL: operacje, schema, resolvers, ekosystem i porównanie z REST API."
        url="https://fotz.pl/blog/graphql-co-to"
        datePublished="2024-01-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "GraphQL", url: "https://fotz.pl/blog/graphql-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "GraphQL" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            GraphQL — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            GraphQL to język zapytań do API który daje klientowi pełną kontrolę nad danymi.
            Poznaj Query, Mutation, Subscription, schema SDL i kiedy wybrać GraphQL zamiast REST.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest GraphQL?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>GraphQL</strong> to język zapytań do API stworzony przez Facebook w 2012 roku,
              open-sourcowany w 2015. Zamiast wielu endpointów REST, GraphQL oferuje jeden endpoint
              i pozwala klientowi precyzyjnie zdefiniować jakich danych potrzebuje — nie więcej, nie mniej.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              GraphQL jest używany przez Facebook, GitHub, Twitter, Shopify, Airbnb i tysiące innych firm.
              Szczególnie wartościowy w aplikacjach z złożonymi, powiązanymi danymi i wieloma typami klientów
              (web, mobile, TV) o różnych wymaganiach dotyczących danych.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Stworzony przez", value: "Facebook (Meta)", sub: "2012 (internal), 2015 (open-source)" },
                { label: "Jeden endpoint", value: "POST /graphql", sub: "Wszystkie operacje przez jeden URL" },
                { label: "Typowany", value: "Schema SDL", sub: "Kontrakt klient-serwer z pełną introspection" },
              ].map((s, i) => (
                <div key={i} className="bg-pink-50 rounded-xl p-5 text-center">
                  <p className="text-xs text-pink-600 font-semibold mb-1">{s.label}</p>
                  <p className="text-xl font-bold text-pink-700 mb-1">{s.value}</p>
                  <p className="text-slate-500 text-xs">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 3 operacje */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 operacje GraphQL</h2>
            <div className="space-y-6">
              {graphqlOperations.map((op, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`${op.kolor} text-white px-3 py-1 rounded-full text-sm font-bold`}>{op.operacja}</span>
                    <p className="text-slate-600">{op.opis}</p>
                  </div>
                  <pre className="bg-slate-900 text-green-400 rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    {op.przykład}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Schema przykład */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">GraphQL Schema (SDL)</h2>
            <p className="text-lg text-slate-700 mb-6">
              Schema Definition Language (SDL) to język definiowania typów i operacji GraphQL.
              Schema jest kontraktem między klientem a serwerem — wszystko co nie jest w schema, nie istnieje.
            </p>
            <pre className="bg-slate-900 text-green-400 rounded-xl p-6 text-sm font-mono overflow-x-auto">
              {schemaExample}
            </pre>
          </div>
        </section>
      </FadeInView>

      {/* GraphQL vs REST */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">GraphQL vs REST — porównanie</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Aspekt</th>
                    <th className="p-3 text-left">GraphQL</th>
                    <th className="p-3 text-left">REST API</th>
                  </tr>
                </thead>
                <tbody>
                  {graphqlVsRest.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-700">{row.aspekt}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.graphql}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.rest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Ekosystem */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Ekosystem GraphQL</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {graphqlEcosystem.map((tool, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">{tool.narzędzie}</h3>
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full font-semibold">{tool.typ}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{tool.opis}</p>
                  <p className="text-xs text-slate-400">{tool.url}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — GraphQL</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
