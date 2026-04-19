import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest GraphQL i jak różni się od REST API?",
    answer: "GraphQL: query language + runtime dla API (Facebook/Meta, 2015). Jeden endpoint (/graphql). Klient określa co chce. Typy danych w Schema. REST API problems: Over-fetching (za dużo danych). Under-fetching (za mało, potrzeba wielu requestów). Wersjonowanie endpoint. GraphQL solutions: Query exactly what you need. Jeden request dla złożonych danych. Self-documenting (introspection). Schema as contract. GraphQL Schema (SDL): type User {id: ID!, email: String!, posts: [Post!]!}. type Post {id: ID!, title: String!, author: User!}. type Query {user(id: ID!): User. users: [User!]!}. type Mutation {createPost(title: String!): Post!}. type Subscription {onNewPost: Post!}. Resolver: function wypełniająca dane dla field. Query.user: (parent, args) => db.user.findUnique({where: {id: args.id}}). User.posts: (user) => db.post.findMany({where: {authorId: user.id}}). N+1 problem: każdy user -> osobny query dla posts. 1 query dla users + N queries dla posts każdego. DataLoader: batch + deduplicate. const userLoader = new DataLoader(ids => db.user.findMany({where: {id: {in: ids}}}). Automatyczne batching. Introspection: query {__schema {types {name}}}. GraphQL Playground/Explorer. Generowanie typów: graphql-codegen z schema -> TypeScript types. Fragmenty: reusable fields. fragment UserBasic on User {id email name}. Variables: query GetUser($id: ID!) {user(id: $id) {...UserBasic}}.",
  },
  {
    question: "Apollo Server — GraphQL server w Node.js i Next.js?",
    answer: "Apollo Server 4 (2023): GraphQL server dla Node.js. Standalone lub z framework. @apollo/server: startStandaloneServer(server) lub expressMiddleware. Konfiguracja: const server = new ApolloServer({typeDefs, resolvers, context: ({req}) => ({user: req.user, db})}). Context: dostępny w każdym resolverze. Auth: sprawdź token w context. DataLoader: nowa instancja per request (w context). Schematics: typeDefs z gql tag lub .graphql files. Resolvers: Query, Mutation, Subscription, field resolvers. Error handling: throw new GraphQLError('Not found', {extensions: {code: 'NOT_FOUND'}}). error.extensions.code po stronie klienta. ApolloServer + Express: app.use('/graphql', expressMiddleware(server, {context: ...})). ApolloServer + Fastify: @as-integrations/fastify. Next.js API Route: import {ApolloServer} from '@apollo/server'. import {startServerAndCreateNextHandler} from '@as-integrations/next'. const handler = startServerAndCreateNextHandler(server). export {handler as GET, handler as POST}. Apollo Sandbox: wbudowany explorer dla dev. Introspection w dev, wyłączone w prod. Apollo Federation: mikroservisy z GraphQL. Subgraph per service. Gateway łączy. @federation directive. Potage: GraphQL za pomocą Pothos (TypeScript-first schema builder). Nexus: kolejny TypeScript-first builder. Code-first vs schema-first: SDL (schema first) -> resolvers. TypeScript classes (code first) -> schema generowane. Pothos, Nexus, TypeGraphQL (decorators).",
  },
  {
    question: "Apollo Client vs URQL vs graphql-request — klientyside GraphQL?",
    answer: "Apollo Client: najpopularniejszy GraphQL client. In-memory cache. Normalized cache. Optimistic updates. Local state. React hooks: useQuery, useMutation, useSubscription. const {data, loading, error} = useQuery(GET_USER, {variables: {id}}). const [createPost, {loading}] = useMutation(CREATE_POST, {update(cache, {data}) {cache.modify(...)}}). Normalized cache: każdy obiekt cachowany per {__typename}:{id}. Aktualizacja jednego miejsca = aktualizacja wszędzie. ApolloProvider: wrappuj aplikację. Reactive variables: makeVar(). useReactiveVar() — local state przez Apollo. Apollo Client 3 DevTools. URQL: lekka alternatywa (Formidable, 2019). Document cache (default). Normalized cache (graphcache). Exchanges: fetchExchange, cacheExchange, authExchange, retryExchange, subscriptionExchange. const [result] = useQuery({query: GET_USER, variables: {id}}). const [result, executeMutation] = useMutation(CREATE_POST). URQL vs Apollo: URQL — mniejszy bundle, exchanges system, prostszy. Apollo — dojrzalszy, normalizowany cache, Federation. graphql-request: minimalna biblioteka. request(endpoint, query, variables). Bez cache. Bez hooks. Ideal dla: server-side fetching. SSR z TanStack Query: useQuery z queryFn: () => request(url, query). Cache zarządzany przez TanStack Query. Kiedy GraphQL: złożone relacje danych. Multiple clients (web + mobile). Self-documenting API. Real-time subscriptions. Kiedy REST: simple CRUD. External consumers. Caching standardowy (HTTP). Mniejszy overhead.",
  },
  {
    question: "GraphQL Subscriptions — real-time z WebSocket i Server-Sent Events?",
    answer: "Subscriptions: real-time updates przez WebSocket. type Subscription {messageAdded(chatId: ID!): Message!}. Resolver: Async iterator lub PubSub. Apollo Server Subscriptions: @apollo/server + graphql-ws (WebSocket) lub graphql-sse (SSE). Server setup: const httpServer = createServer(app). const wsServer = new WebSocketServer({server: httpServer, path: '/graphql'}). WebSocketServer + ApolloServer. PubSub: in-memory (dev). graphql-redis-subscriptions — Redis (produkcja). const {PubSub} = graphql-subscriptions. pubSub.publish('MESSAGE_ADDED', {messageAdded: message}). pubSub.asyncIterator('MESSAGE_ADDED'). Resolver: Subscription: {messageAdded: {subscribe: withFilter(pubSub.asyncIterator, (payload, variables) => payload.chatId === variables.chatId)}}. Apollo Client subscriptions: import {split} from '@apollo/client'. import {GraphQLWsLink} from '@apollo/client/link/subscriptions'. createClient({url: 'ws://localhost/graphql'}). splitLink: HTTP dla queries/mutations, WS dla subscriptions. useSubscription hook: const {data} = useSubscription(ON_MESSAGE, {variables: {chatId}}). Server-Sent Events (SSE): alternatywa dla WebSocket. Jednostronne (server -> client). Prostsze. graphql-sse library. HTTP/2 kompatybilny. Proxy-friendly. Kiedy Subscriptions: live feeds, notifications, chat, collaborative editing. Alternatywa: polling (useQuery pollInterval: 5000). Webhook-to-client przez SSE. Pusher/Ably (managed).",
  },
  {
    question: "Schema design, pagacja i autoryzacja w GraphQL?",
    answer: "Schema design principles: Nullable domyślnie (GraphQL best practice). Non-null (!) dla pewnych danych. ID type dla identyfikatorów. Enums dla stałych: enum Status {ACTIVE INACTIVE PENDING}. Input types dla mutations: input CreatePostInput {title: String! content: String! status: Status}. Cursor-based pagination (Relay spec): type PostConnection {edges: [PostEdge!]! pageInfo: PageInfo!}. type PostEdge {node: Post! cursor: String!}. type PageInfo {hasNextPage: Boolean! hasPreviousPage: Boolean! startCursor: String endCursor: String}. query Posts($first: Int $after: String) {posts(first: $first after: $after) {edges {node {id title}} pageInfo {hasNextPage endCursor}}}. Offset pagination (simpler): posts(offset: 0, limit: 10). Autoryzacja: Field-level auth w resolverach. Context: {user, db}. Query.adminData: (parent, args, ctx) => {if (!ctx.user.isAdmin) throw new GraphQLError('Forbidden', {extensions: {code: 'FORBIDDEN'}}). return ...}. graphql-shield: permissions middleware. rule(() => isAuthenticated()). shield({Query: {me: isAuthenticated, adminData: isAdmin}}). Directives: @auth, @deprecated, @skip, @include. Custom: @auth(role: ADMIN). Persisted queries: hash query po stronie serwera. Mniejszy payload. Security. Apollo persisted queries. Complexity limiting: graphql-cost-analysis. Depth limit. Rate limit per query complexity. Field-level extensions: @deprecated(reason: 'Use newField instead').",
  },
];

const graphqlClients = [
  { klient: "Apollo Client", rozmiar: "~46KB", cache: "Normalized (InMemoryCache)", mocne: "Dojrzały, Federation, DevTools", kiedy: "Enterprise, complex caching, Federation" },
  { klient: "URQL", rozmiar: "~11KB", cache: "Document cache / graphcache", mocne: "Lekki, exchanges, modular", kiedy: "Bundle-aware, custom caching" },
  { klient: "TanStack Query + graphql-request", rozmiar: "~7KB", cache: "TanStack Query cache", mocne: "Familiar API, server-state", kiedy: "Migracja z REST, TanStack ecosystem" },
  { klient: "graphql-request", rozmiar: "~3KB", cache: "Brak (manual)", mocne: "Minimalna, prosty fetch", kiedy: "Server-side, SSR, simple queries" },
  { klient: "Relay", rozmiar: "~70KB", cache: "Relay Store (normalized)", mocne: "Meta battle-tested, Suspense, Connections", kiedy: "Large FB-scale apps, Relay spec" },
  { klient: "SWR + graphql-request", rozmiar: "~5KB", cache: "SWR cache", mocne: "Stale-while-revalidate, Next.js", kiedy: "Next.js lightweight, simple queries" },
];

export default function BlogGraphQLApolloCoTo() {
  return (
    <Layout>
      <SEOHead
        title="GraphQL, Apollo Server, Apollo Client, URQL | Fotz Studio"
        description="GraphQL schema design, Apollo Server, Apollo Client vs URQL, DataLoader N+1, Subscriptions WebSocket, cursor pagination, autoryzacja i graphql-codegen w…"
        canonicalUrl="https://fotz.pl/blog/graphql-apollo-server-client-urql-subscriptions-typescript-2024"

        keywords="GraphQL, Apollo Server, Apollo Client, URQL co to jest, GraphQL, Apollo Server, Apollo Client, URQL jak działa, GraphQL, Apollo Server, Apollo Client, URQL tutorial, GraphQL, Apollo Server, Apollo Client, URQL przykład, czym jest GraphQL, Apollo Server, Apollo Client, URQL, GraphQL, Apollo Server, Apollo Client, URQL dokumentacja, GraphQL, Apollo Server, Apollo Client, URQL przewodnik"

        canonical="https://fotz.pl/blog/graphql-apollo-server-client-urql-subscriptions-typescript-2024"
      />
      <ArticleSchema
        title="GraphQL, Apollo Server, Apollo Client, URQL — kompletny przewodnik 2024?"
        description="6 GraphQL clients (Apollo/URQL/TanStack/graphql-request/Relay/SWR) — schema design, resolvers, DataLoader, Subscriptions, pagination i autoryzacja."
        url="https://fotz.pl/blog/graphql-apollo-server-client-urql-subscriptions-typescript-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "GraphQL Apollo", url: "https://fotz.pl/blog/graphql-apollo-server-client-urql-subscriptions-typescript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-rose-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "GraphQL Apollo", href: "/blog/graphql-apollo-server-client-urql-subscriptions-typescript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-pink-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              GraphQL / API
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GraphQL i Apollo
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Apollo Server, Apollo Client, URQL, DataLoader, Subscriptions,
              schema design i autoryzacja w TypeScript i Next.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Query language", value: "GraphQL" },
                { label: "Batch queries", value: "DataLoader" },
                { label: "Real-time", value: "Subscriptions" },
                { label: "Type safety", value: "Codegen" },
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

      {/* Klienty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 GraphQL clients — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Apollo Client, URQL, TanStack Query, graphql-request, Relay i SWR —
              rozmiar, cache, mocne strony i optymalny use case.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Klient</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozmiar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cache</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Mocne strony</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {graphqlClients.map((c, i) => (
                  <tr key={c.klient} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{c.klient}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{c.rozmiar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{c.cache}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{c.mocne}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{c.kiedy}</td>
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

      <RelatedArticles currentArticleId="graphql-apollo-server-client-urql-subscriptions-typescript-2024" />
      <ContactSection />
    </Layout>
  );
}
