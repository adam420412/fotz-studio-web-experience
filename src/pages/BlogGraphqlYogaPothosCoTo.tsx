import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "GraphQL Yoga — nowoczesny GraphQL server dla Node.js i Edge?",
    answer: "GraphQL Yoga: The Guild. Successor do express-graphql i apollo-server. Fetch API based. Edge-compatible. Instalacja: npm install graphql-yoga graphql. Server setup: import {createSchema, createYoga} from 'graphql-yoga'. const schema = createSchema({typeDefs: `type Query { hello: String! }`, resolvers: {Query: {hello: () => 'Hello World!'}}}). const yoga = createYoga({schema}). Integracja z Next.js: app/api/graphql/route.ts. export {yoga as GET, yoga as POST, yoga as OPTIONS}. Integracja z Express: import {createServer} from 'http'. const server = createServer(yoga). server.listen(4000). Subscriptions (WebSocket): const schema = createSchema({typeDefs: `type Subscription { countdown(from: Int!): Int! }`, resolvers: {Subscription: {countdown: {subscribe: async function *(_, {from}) { for (let i = from; i >= 0; i--) { yield {countdown: i}. await new Promise(r => setTimeout(r, 1000)) } }}}}}). File Uploads: multipart/form-data. file: Upload type. Nie w SDL domyślnie — plugin. Plugins: useCookies. useCSRFPrevention. useGraphQLSSE. useResponseCache — caching. useParserCache. useValidationCache. Persisted Operations. GraphiQL: wbudowany. customEndpoint. Edge deployment: Cloudflare Workers. Vercel Edge Functions. Deno. Bun. Fetch API — zero Node.js dep.",
  },
  {
    question: "Pothos GraphQL — code-first schema builder dla TypeScript?",
    answer: "Pothos: Hayes Hudson. Code-first GraphQL. TypeScript-first. Plugin system. Alternatywa dla type-graphql. Instalacja: npm install @pothos/core graphql. Schema builder: import SchemaBuilder from '@pothos/core'. const builder = new SchemaBuilder({}). builder.queryType({fields: (t) => ({hello: t.string({resolve: () => 'Hello!'})})}). const schema = builder.toSchema(). Object types: const UserType = builder.objectRef('User'). builder.objectType(UserType, {description: 'A user', fields: (t) => ({id: t.exposeID('id'), name: t.exposeString('name'), email: t.exposeString('email')})}). builder.queryField('user', (t) => t.field({type: UserType, args: {id: t.arg.id({required: true})}, resolve: async (_, {id}) => await db.users.findUnique({where: {id}})})). Plugins: @pothos/plugin-prisma — Prisma integracja. @pothos/plugin-relay — Relay spec. @pothos/plugin-validation — Zod/Valibot validation. @pothos/plugin-errors — error handling. @pothos/plugin-dataloader — N+1 prevention. @pothos/plugin-scope-auth — authorization. Prisma plugin: builder.prismaObject('User', {fields: (t) => ({id: t.exposeID('id'), posts: t.relation('posts')})}). Automatyczne relacje. Dataloader: batchowanie zapytań. N+1 problem solution. Input types: builder.inputType('CreateUserInput', {fields: (t) => ({name: t.string({required: true}), email: t.string({required: true})})}). Enum: builder.enumType(Role, {values: {ADMIN: {value: 'ADMIN'}, USER: {value: 'USER'}}}).",
  },
  {
    question: "GraphQL Codegen — generowanie typów z schema?",
    answer: "GraphQL Code Generator: The Guild. Generuj TypeScript z GraphQL schema. Klient i serwer. Instalacja: npm install --save-dev @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-query. codegen.ts: import type {CodegenConfig} from '@graphql-codegen/cli'. export default {schema: 'http://localhost:4000/graphql', documents: ['src/**/*.graphql', 'src/**/*.tsx'], generates: {'src/generated/graphql.ts': {plugins: ['typescript', 'typescript-operations', 'typescript-react-query'], config: {fetcher: {func: '../lib/graphql-client#fetcher'}}}}} satisfies CodegenConfig. CLI: npx graphql-codegen. npx graphql-codegen --watch. Generated types: GetUserQuery. GetUserQueryVariables. useGetUserQuery (React Query hook). Wygenerowane hooki: const {data} = useGetUserQuery({variables: {id: '1'}}). Pełny type-safety. Fragment Masking: fragment spreading types. Isolated types per fragment. Client Preset: najnowszy. All-in-one. @graphql-codegen/client-preset. preset: 'client'. Bez listy plugins. Rezultat: graphql() funkcja. useFragment(). Urql integracja: typescript-urql plugin. Apollo integracja: typescript-apollo-angular. Serwer-side: typescript-resolvers plugin. ResolversTypes. Mapowanie własnych typów. Watch mode: --watch z Server-sent events. Auto-regeneracja. Schema z pliku: schema: 'schema.graphql'. Schema z URL: schema: process.env.GRAPHQL_URL.",
  },
  {
    question: "GraphQL — DataLoader, N+1 problem i performance?",
    answer: "N+1 Problem: query pobiera 10 users. Dla każdego user -> zapytanie o posts. 1 + 10 = 11 zapytań. Rozwiązanie: DataLoader. npm install dataloader. import DataLoader from 'dataloader'. const postsByUserLoader = new DataLoader(async (userIds: readonly string[]) => { const posts = await db.posts.findMany({where: {authorId: {in: userIds as string[]}}}). return userIds.map(id => posts.filter(p => p.authorId === id)) }). Resolver: posts: (user) => postsByUserLoader.load(user.id). DataLoader batch: wszystkie .load() w jednym tick -> batch function. Jeden request SQL. Cache per request: DataLoader cachuje per request cycle. Nowy DataLoader per request. context.loaders.postsByUser = new DataLoader(...). Pothos plugin: @pothos/plugin-dataloader. loadOne, loadMany, cacheKey. Automatyczne batchowanie. GraphQL depth limit: import {createDepthLimitRule} from 'graphql-depth-limit'. depth limit: 10. Zapobiega zbyt głębokim queries. Query complexity: graphql-query-complexity. Max complexity per query. Prevent DoS. Persisted Queries: hash queries. Brak arbitrary queries na produkcji. Apollo Engine lub Yoga plugin. Response caching: useResponseCache (Yoga). Redis cache. Per-type cache. TTL. Query batching: Apollo Client: {batching: true}. HTTP batching. Wiele queries w jednym request. APQ (Automatic Persisted Queries): Apollo Client + Apollo Server. Krótsze requests. HTTP GET dla APQ hit. Tracing: Apollo Studio. Yoga opentelemetry plugin. Per-resolver timing.",
  },
  {
    question: "GraphQL vs REST vs tRPC — kiedy wybrać co?",
    answer: "GraphQL: elastyczne queries. Klient decyduje co pobierać. Wielokrotne zasoby = jeden request. Schema jako kontrakt. Kiedy GraphQL: wiele klientów (web, mobile). Różne potrzeby danych. Publiczne API. Ekosystem bogaty. Real-time (subscriptions). Zalety: underfetching/overfetching wyeliminowane. Silne typowanie (schema). Introspection. GraphiQL. Wady: złożoność. N+1 (DataLoader). Caching trudniejsze. Overkill dla prostych API. REST: HTTP semantics. Proste, zrozumiałe. Cache HTTP natywny. Stateless. Kiedy REST: proste CRUD. Zewnętrzne API (public). HTTP caching ważny. Mały team. Standardy ważne. Zalety: prostota. HTTP tools. CDN caching. Swagger/OpenAPI. Wady: over/underfetching. Wiele endpointów. Brak type-safety bez narzędzi. tRPC: end-to-end TypeScript. Bez schema. Bezpośrednie wywołanie. Kiedy tRPC: monorepo (Next.js full-stack). TypeScript na obu końcach. Szybki development. Nie trzeba publicznego API. Zalety: zero schema. Automatyczne typy. React Query integracja. Prostota. Wady: tylko TypeScript. Nie dla zewnętrznych klientów. Nie standard. Decyzja: public API -> REST lub GraphQL. Internal full-stack TypeScript -> tRPC. Wiele klientów z różnymi potrzebami -> GraphQL. Prosto CRUD -> REST. Duży team, różne języki -> REST lub GraphQL.",
  },
];

const graphqlTools = [
  { narzedzie: "GraphQL Yoga", typ: "Server", opis: "Fetch API, edge-compatible, plugins, Yoga subscriptions" },
  { narzedzie: "Pothos GraphQL", typ: "Schema Builder", opis: "Code-first TypeScript, Prisma plugin, DataLoader plugin" },
  { narzedzie: "GraphQL Codegen", typ: "Code Generation", opis: "Generuj TypeScript + React Query hooks ze schema" },
  { narzedzie: "DataLoader", typ: "Performance", opis: "Batch N+1 queries, cache per request" },
  { narzedzie: "@pothos/plugin-prisma", typ: "ORM Integration", opis: "Automatyczne relacje z Prisma schema" },
  { narzedzie: "useResponseCache", typ: "Caching", opis: "Response cache per query — Redis, memory, TTL" },
];

export default function BlogGraphqlYogaPothosCoTo() {
  return (
    <Layout>
      <SEOHead
        title="GraphQL Yoga, Pothos i GraphQL Codegen — nowoczesny GraphQL 2024 | Fotz.pl"
        description="GraphQL Yoga (edge server), Pothos (code-first schema builder), GraphQL Codegen (typy + hooki), DataLoader (N+1), @pothos/plugin-prisma i porównanie GraphQL vs REST vs tRPC."
        canonicalUrl="https://fotz.pl/blog/graphql-yoga-pothos-codegen-dataloader-subscriptions-2024"
      />
      <ArticleSchema
        title="GraphQL Yoga, Pothos i GraphQL Codegen — nowoczesny GraphQL 2024?"
        description="GraphQL Yoga server, Pothos code-first schema, GraphQL Codegen, DataLoader N+1, plugin-prisma i wybór GraphQL vs REST vs tRPC."
        url="https://fotz.pl/blog/graphql-yoga-pothos-codegen-dataloader-subscriptions-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "GraphQL Yoga i Pothos 2024", url: "https://fotz.pl/blog/graphql-yoga-pothos-codegen-dataloader-subscriptions-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-rose-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "GraphQL Yoga i Pothos 2024", href: "/blog/graphql-yoga-pothos-codegen-dataloader-subscriptions-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-pink-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              GraphQL / Yoga / Pothos / Code-first
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GraphQL Yoga i Pothos
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              GraphQL Yoga (edge server), Pothos (code-first),
              Codegen, DataLoader i subscriptions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Edge server", value: "Yoga" },
                { label: "Code-first", value: "Pothos" },
                { label: "Typy+hooki", value: "Codegen" },
                { label: "N+1 fix", value: "DataLoader" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">GraphQL ekosystem — narzędzia i zastosowanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Yoga, Pothos, Codegen, DataLoader, plugin-prisma i ResponseCache —
              typ i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {graphqlTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.opis}</td>
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
