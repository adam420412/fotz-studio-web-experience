import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest tRPC i dlaczego jest popularne w ekosystemie TypeScript?",
    answer: "tRPC (TypeScript Remote Procedure Call): biblioteka do budowania end-to-end type-safe API bez generowania kodu. Kluczowa idea: serwer i klient współdzielą typy TypeScript. Żadnego code generation (jak GraphQL codegen). Żadnego schema validation w dwóch miejscach (serwer + klient). Jak działa: serwer definiuje procedury (query/mutation) z typami. Klient importuje typy serwera. TypeScript weryfikuje poprawność w compile time. Przykład serwer: export const appRouter = router({getUser: publicProcedure.input(z.object({id: z.string()})).query(async ({input}) => {return db.user.findById(input.id)})}). Klient: const user = await trpc.getUser.query({id: '123'}). TypeScript wie że user ma typ User — bez żadnego schematu JSON. Zalety tRPC: zero boilerplate dla typowania API. Refactoring: zmień typ na serwerze -> TypeScript błędy na kliencie natychmiast. Autouzupełnianie po procedurach API. Brak over/under-fetching (procedura zwraca dokładnie to co potrzeba). Wady tRPC: tylko TypeScript. Nie działa dla non-TypeScript klientów. Brak standardowego protokołu (nie REST, nie GraphQL). Trudniejsze do mockowania. Stack: T3 Stack (create-t3-app) — Next.js + tRPC + Prisma + Tailwind + NextAuth.",
  },
  {
    question: "tRPC — router, procedure, middleware i context?",
    answer: "Router: grupuje procedury. export const appRouter = router({users: userRouter, posts: postRouter}). Nested routers: userRouter.list, userRouter.getById, userRouter.create. Procedure: funkcja API. query — odczyt (GET). mutation — zapis (POST/PUT/DELETE). subscription — real-time (WebSocket). Input validation z Zod: .input(z.object({id: z.string().uuid()})). .input(z.string().min(1).max(100)). TypeScript infer z Zod schematu. Automatyczna walidacja na serwerze. Context: współdzielony obiekt dostępny w każdej procedurze. Sesja użytkownika, połączenie DB, logger. createContext: ({req, res}) => ({session: getSession(req), db, logger}). Middleware: .use(async ({ctx, next}) => {if (!ctx.session) throw new TRPCError({code: 'UNAUTHORIZED'}). return next({ctx: {...ctx, user: ctx.session.user}})}). publicProcedure — brak autentykacji. protectedProcedure — wymaga zalogowania. adminProcedure — wymaga roli admin. Error handling: TRPCError({code: 'NOT_FOUND', message: 'User not found'}). Kody: BAD_REQUEST, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, INTERNAL_SERVER_ERROR. Automatyczna serializacja błędów do klienta. Input + Output transformation: .transformer(SuperJSON) — obsługa Date, Map, Set, undefined.",
  },
  {
    question: "tRPC z Next.js i TanStack Query — integracja?",
    answer: "tRPC + Next.js App Router: API route handler: app/api/trpc/[trpc]/route.ts. fetchRequestHandler. tRPC + TanStack Query (@trpc/react-query): automatycznie generuje useQuery/useMutation hooki per procedura. const trpc = createTRPCReact(). const utils = trpc.useUtils(). Użycie: const {data: users, isLoading} = trpc.users.list.useQuery({page: 1}). Dokładnie jak useQuery ale z autouzupełnianiem. Mutation: const createUser = trpc.users.create.useMutation({onSuccess: () => utils.users.list.invalidate()}). Cache invalidation przez utils. Prefetching w Server Components (Next.js app router): const trpc = createTRPCProxyClient({links: [...]}). await trpc.users.list.query(). Hydrate client z tymi danymi. Subscriptions z WebSocket: trpc.notification.onNew.useSubscription(). Require WebSocket link zamiast HTTP link. Links: httpBatchLink — batch wiele calls w jeden HTTP request. splitLink — różne transport per typ. wsLink — WebSocket dla subskrypcji. loggerLink — logowanie. Batch requests: domyślnie wiele trpc calls w jednym renderze -> jeden HTTP request. Konfiguracja batch delay. Optymalizacja: deduplikacja identycznych queries (jak TanStack Query). Cache per procedura+input. SuperJSON: tRPC używa SuperJSON do serializacji. Date, undefined, Map, Set prawidłowo serialized.",
  },
  {
    question: "tRPC vs REST vs GraphQL — kiedy co wybrać?",
    answer: "REST API: standardowy protokół. Działa z każdym klientem (mobile, web, zewnętrzni partnerzy). OpenAPI spec. Rate limiting, versioning standardowe. Wady: boilerplate typowania. Ręczna synchronizacja typów klient-serwer. Over/under-fetching. GraphQL: elastyczne queries (pobierz tylko potrzebne pola). Schema jako kontrakt. Doskonałe dla złożonych, zagnieżdżonych danych. Persisted queries, DataLoader (batching). Wady: learning curve. Kompleksowa konfiguracja. Code generation dla type safety. tRPC: end-to-end type safety bez code gen. Tylko TypeScript. Idealne dla full-stack TypeScript monorepo. Wady: tylko dla TypeScript klientów. Brak standardowego protokołu. Trudniejsze external integrations. Decision matrix: zewnętrzni klienci / publiczne API -> REST z OpenAPI. Mobilna aplikacja + web -> REST lub GraphQL. Złożone zagnieżdżone dane, social graph -> GraphQL. Full-stack TypeScript (Next.js, SvelteKit) -> tRPC. Wewnętrzne API gdzie wszyscy to TypeScript -> tRPC. Kiedy tRPC jest idealne: T3 Stack. Fullstack Next.js monorepo. Startup gdzie wszyscy devs = TypeScript. Brak zewnętrznych klientów. Kiedy nie używaj tRPC: mobile apps (React Native ok, ale native iOS/Android nie). Zewnętrzni partnerzy API. Mikrousługi z różnymi językami. Publiczne API.",
  },
  {
    question: "Alternatywy dla tRPC — Hono RPC, Elysia Eden, oRPC, Zodios?",
    answer: "tRPC nie jest jedyną opcją dla type-safe API. Hono RPC: Hono framework + RPC client. client() z typami. Działa z Hono routes. Elysia + Eden: Elysia (Bun-native framework) + Eden client. Podobne DX do tRPC. Zoptymalizowane dla Bun. oRPC: nowy challanger tRPC. Kompatybilny z OpenAPI. Eksportuje schema do JSON. Zewnętrzni klienci mogą używać REST. Zodios: Axios + Zod typings. Client-side: zdefiniuj API schema Zod. zodios(baseUrl, apiDefinition). type-safe axios. Działa dla istniejących REST API. ts-rest: typowany kontrakt dla REST API. Działa jak adapter nad istniejącym REST. Możesz wygenerować OpenAPI. GraphQL Code Generator: klasyczny approach. Schema GraphQL -> typy TypeScript + hooki. Apollo, URQL, Relay. Duży ekosystem, dojrzały. Next-Safe-Action: Server Actions z type safety i Zod validation. Bez tRPC dla prostszych przypadków. Wybór frameworka 2024: T3 Stack -> tRPC. SvelteKit -> tRPC lub Zodios. Bun + Elysia -> Eden. Hono -> Hono RPC. REST existing API -> Zodios lub ts-rest. Nowe full-stack TS project -> tRPC lub oRPC (jeśli OpenAPI ważny).",
  },
];

const trpcVsAlternatives = [
  { tech: "tRPC", typeSafety: "End-to-end (compile time)", codeGen: "Nie", protocol: "HTTP RPC", clients: "Tylko TypeScript", kiedy: "Full-stack TS monorepo, Next.js" },
  { tech: "GraphQL + codegen", typeSafety: "Generowane typy", codeGen: "Tak (schema -> typy)", protocol: "GraphQL", clients: "Dowolny", kiedy: "Złożone dane, wielu klientów" },
  { tech: "REST + OpenAPI", typeSafety: "Generowane typy (opcjonalne)", codeGen: "Opcjonalne", protocol: "HTTP REST", clients: "Dowolny", kiedy: "Publiczne API, zewnętrzni klienci" },
  { tech: "Zodios", typeSafety: "Client-side (Zod)", codeGen: "Nie", protocol: "HTTP REST", clients: "Dowolny (schema exportable)", kiedy: "Typowany klient dla istniejącego REST" },
  { tech: "oRPC", typeSafety: "End-to-end + OpenAPI", codeGen: "Nie (generuje schema)", protocol: "HTTP RPC + REST", clients: "TS + REST clients", kiedy: "tRPC + zewnętrzni klienci" },
  { tech: "Hono RPC", typeSafety: "End-to-end", codeGen: "Nie", protocol: "HTTP", clients: "Tylko TypeScript", kiedy: "Hono framework, edge deployment" },
];

export default function BlogTrpcCoTo() {
  return (
    <Layout>
      <SEOHead
        title="tRPC | Fotz Studio"
        description="tRPC: end-to-end TypeScript type safety bez code generation, router i procedury, integracja z Next.js i TanStack Query, tRPC vs REST vs GraphQL vs Zodios."
        canonicalUrl="https://fotz.pl/blog/trpc-co-to-jest-end-to-end-type-safety-nextjs-tanstack-query-vs-graphql"

        keywords="tRPC co to jest, tRPC jak działa, tRPC tutorial, tRPC przykład, czym jest tRPC, tRPC dokumentacja, tRPC przewodnik"

        canonical="https://fotz.pl/blog/trpc-co-to-jest-end-to-end-type-safety-nextjs-tanstack-query-vs-graphql"
      />
      <ArticleSchema
        title="tRPC — co to jest, end-to-end type safety, Next.js, TanStack Query, vs GraphQL?"
        description="tRPC: router/procedure/middleware/context, integracja Next.js + TanStack Query, 6 alternatyw (tRPC/GraphQL/REST/Zodios/oRPC/Hono), kiedy wybrać."
        url="https://fotz.pl/blog/trpc-co-to-jest-end-to-end-type-safety-nextjs-tanstack-query-vs-graphql"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "tRPC", url: "https://fotz.pl/blog/trpc-co-to-jest-end-to-end-type-safety-nextjs-tanstack-query-vs-graphql" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "tRPC", href: "/blog/trpc-co-to-jest-end-to-end-type-safety-nextjs-tanstack-query-vs-graphql" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / API
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              tRPC
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              End-to-end type safety bez code generation — pełny stack TypeScript
              od serwera po klienta, integracja z Next.js i TanStack Query.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Bez code gen", value: "Type-safe API" },
                { label: "Walidacja input", value: "Zod schemas" },
                { label: "Autentykacja", value: "Middleware" },
                { label: "T3 Stack", value: "Next.js + tRPC" },
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

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">tRPC vs alternatywy type-safe API</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              tRPC, GraphQL, REST, Zodios, oRPC i Hono RPC — każde rozwiązanie
              optymalizuje inny aspekt type safety, protokołu i kompatybilności klientów.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Technologia</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Type Safety</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Code Gen</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Protokół</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Klienci</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {trpcVsAlternatives.map((t, i) => (
                  <tr key={t.tech} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.tech}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.typeSafety}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.codeGen}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.protocol}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.clients}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.kiedy}</td>
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

      <RelatedArticles currentArticleId="trpc-co-to-jest-end-to-end-type-safety-nextjs-tanstack-query-vs-graphql" />
      <ContactSection />
    </Layout>
  );
}
