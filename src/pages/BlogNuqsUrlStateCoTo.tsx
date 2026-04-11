import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "nuqs — co to jest i jak zarządzać stanem URL w Next.js?",
    answer: "nuqs: François Best. URL jako state. useQueryState hook. Next.js App Router support. Instalacja: npm install nuqs. Podstawy: import {useQueryState} from 'nuqs'. const [search, setSearch] = useQueryState('q'). setSearch('react') -> URL: ?q=react. setSearch(null) -> usuwa parametr. Parsery: nuqs dostarcza parsery. parseAsString (default). parseAsInteger: const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1)). parseAsFloat. parseAsBoolean. parseAsIsoDateTime. parseAsArrayOf(parseAsString). Własny parser: import {createParser} from 'nuqs'. const parseAsPoint = createParser({parse: (str) => ({x: parseFloat(str.split(',')[0]), y: parseFloat(str.split(',')[1])}), serialize: ({x, y}) => x + ',' + y}). useQueryStates: wiele parametrów naraz. import {useQueryStates} from 'nuqs'. const [params, setParams] = useQueryStates({q: parseAsString, page: parseAsInteger.withDefault(1), sort: parseAsString.withDefault('asc')}). Atomic update: setParams({page: 2}) — bez resetowania innych. Options: history: 'push' | 'replace' (default: 'replace'). shallow: true/false (default: true). throttleMs: debounce. startTransition: React transition. NuqsAdapter: Provider wymagany. app/layout.tsx: import {NuqsAdapter} from 'nuqs/adapters/next/app'. NuqsAdapter. Children. /NuqsAdapter. React Router adapter też dostępny.",
  },
  {
    question: "nuqs — zaawansowane wzorce: server state, typy i React Router?",
    answer: "Server-side search params (Next.js): import {createSearchParamsCache} from 'nuqs/server'. const searchParamsCache = createSearchParamsCache({q: parseAsString, page: parseAsInteger.withDefault(1)}). Page component: async function Page({searchParams}: {searchParams: Record}) { const {q, page} = searchParamsCache.parse(searchParams). return Results q={q} page={page} }. Type-safe: SearchParams type inference. Walidacja na serwerze. Bez re-hydratacji mismatch. useQueryState vs useState: useQueryState: URL-synced. Shareable links. Browser back/forward. useState: lokalne, szybsze, nie w URL. Kiedy URL state: filtry, paginacja, wyszukiwarka, sortowanie, aktywna zakładka — kliknij back wraca. Kiedy lokalne: formularze, hover, modal (krótkotrwałe). URL state patterns: Pagination: ?page=2&per_page=20. Filters: ?category=react&status=published. Sort: ?sort=date&order=desc. Search: ?q=tanstack. Active tab: ?tab=settings. React Router adapter: import {NuqsAdapter} from 'nuqs/adapters/react-router'. Remix: nuqs/adapters/remix. Vanilla React (SPA): nuqs/adapters/react. Testowanie: import {NuqsTestingAdapter} from 'nuqs/adapters/testing'. Mockuj URL. Unit tests. Scroll reset: resetScroll param. Powrót na górę strony po zmianie. next-query-params: starsza alternatywa. Mniej feature-rich. Nadal używana. React location: URL state wbudowane. search-params: niski poziom. bezpośredni dostęp.",
  },
  {
    question: "Prisma 6 — co nowego i Prisma Accelerate?",
    answer: "Prisma 6 (2024): breaking changes. OmitFields (przed v6 preview). Omit API: stable. PrismaClient type improvements. Instalacja: npm install prisma@6 @prisma/client@6. Zmiany v6: Nullable scalar list fields support. Prisma Pulse type improvements. driver adapters stabilne. Bun support stable. client extensions stable. Preview features promoted. Prisma Accelerate: global connection pooling. Edge-ready Prisma Client. Instalacja: npm install @prisma/extension-accelerate. Konfiguracja: import {withAccelerate} from '@prisma/extension-accelerate'. const prisma = new PrismaClient().$extends(withAccelerate()). DATABASE_URL: prisma://accelerate.prisma-data.net/?api_key=KEY. Caching: prisma.user.findMany({cacheStrategy: {ttl: 60, srsttl: 10}}). ttl: cache time. srsttl: stale-revalidate time. Edge deployment: Vercel Edge, Cloudflare Workers. Bez TCP limit (HTTP). Prisma Pulse: real-time database events. npm install @prisma/extension-pulse. const client = new PrismaClient().$extends(withPulse({apiKey: PULSE_API_KEY})). const subscription = await client.user.subscribe(). for await (const event of subscription) { console.log(event) }. event.action: 'create' | 'update' | 'delete'. event.after: nowe dane. event.before: poprzednie dane. PostgreSQL logical replication. Driver adapters: @prisma/adapter-neon, @prisma/adapter-libsql, @prisma/adapter-d1. Bezpośrednie połączenie bez Prisma Proxy.",
  },
  {
    question: "Prisma — zaawansowane zapytania i optymalizacja 2024?",
    answer: "Prisma Client Extensions: extendowanie klienta. import {Prisma} from '@prisma/client'. const xprisma = prisma.$extends({model: {user: {async findByEmail(email: string) { return prisma.user.findUnique({where: {email}}) }}}, result: {user: {fullName: {needs: {firstName: true, lastName: true}, compute(user) { return user.firstName + ' ' + user.lastName }}}}}). Soft deletes extension: pole deletedAt. Przed zapytaniem: $allModels.$allOperations. Filtruj deletedAt: null. Fluent API: const posts = await prisma.user.findUnique({where: {id}}).posts(). Chaining. Aggregation: prisma.user.aggregate({_count: {id: true}, _avg: {age: true}, where: {active: true}}). GroupBy: prisma.user.groupBy({by: ['country'], _count: {id: true}, having: {id: {_count: {gt: 10}}}}). Raw queries: prisma.$queryRaw(Prisma.sql'SELECT * FROM users WHERE id = ${userId}'). prisma.$executeRaw(). Tagowany template. Bezpieczne. N+1 prevention: include relacje. select: {posts: {select: {title: true}}}. Nie używaj pętli z osobnymi queries. Transakcje: await prisma.$transaction([...]). Interactive: await prisma.$transaction(async (tx) => {...}). Isolation level: IsolationLevel.Serializable. Pagination: cursor-based: cursor: {id: lastId}. take: 10. skip: 1 (skip cursor). Offset: skip: 20, take: 10. Cursor szybszy dla dużych zbiorów. Prisma Migrate: npx prisma migrate dev. npx prisma migrate deploy. Shadow database. Baseline existing. Deploy. generateOnly.",
  },
  {
    question: "URL state management — porównanie nuqs, TanStack Router i React Router?",
    answer: "nuqs: dedykowany URL state. Parsery. Type-safe. Next.js/React Router adapters. Prosta integracja. Kiedy: filtry, paginacja, search. TanStack Router URL state: wbudowane. useSearch hook. Type-safe search params. Zod validation. const search = useSearch({from: '/posts'}). search.page, search.q. navigate({search: {page: 2}}). Validate w Route: validateSearch: (search) => searchSchema.parse(search). TanStack Router Route: Route({path: '/posts', validateSearch: z.object({q: z.string().optional(), page: z.number().default(1)})}). React Router v7 search params: useSearchParams hook. const [searchParams, setSearchParams] = useSearchParams(). searchParams.get('q'). setSearchParams({q: 'react', page: '2'}). Brak typowania. Ручna serializacja. Zalety różnych podejść: nuqs — prosta integracja, parsery, adaptery. TanStack Router — pełny type-safety z Zod, walidacja. React Router — wbudowane, bez typów. URLSearchParams natywne: new URLSearchParams(window.location.search). get, set, delete. history.pushState. Niski poziom. useEffect + window.location. Najgorsza opcja. Wzorce: filtry produktów: nuqs z parseAsArrayOf. Paginacja: nuqs parseAsInteger. Search: nuqs parseAsString throttleMs. Sort: useQueryStates dla wielu params. Persistence: URL jest persistence. Refresh zachowuje stan. Shareable. Testowanie URL state: render z location. Testuj z różnymi search params.",
  },
];

const urlStateTools = [
  { narzedzie: "nuqs", typ: "URL State", opis: "useQueryState, parsery, Next.js/RR adapters, type-safe" },
  { narzedzie: "useQueryStates", typ: "Multi-param", opis: "Atomiczne update wielu params naraz" },
  { narzedzie: "parseAsInteger", typ: "Parser", opis: "Automatyczna serializacja/deserializacja typów" },
  { narzedzie: "Server cache (nuqs)", typ: "SSR", opis: "createSearchParamsCache — server-side type-safe params" },
  { narzedzie: "TanStack Router search", typ: "Integrated", opis: "Zod validation, useSearch — wbudowane w router" },
  { narzedzie: "React Router v7", typ: "Basic", opis: "useSearchParams — podstawowe, bez typów" },
];

export default function BlogNuqsUrlStateCoTo() {
  return (
    <Layout>
      <SEOHead
        title="nuqs — URL state management Next.js, useQueryState i parseAsInteger 2024 | Fotz.pl"
        description="nuqs: useQueryState (URL jako state), parsery (parseAsInteger, parseAsArrayOf), useQueryStates, NuqsAdapter, server cache Next.js i porównanie z TanStack Router URL state."
        canonicalUrl="https://fotz.pl/blog/nuqs-url-state-management-useQueryState-nextjs-react-router-2024"
      />
      <ArticleSchema
        title="nuqs — URL state management Next.js, useQueryState i parseAsInteger 2024?"
        description="nuqs URL state: useQueryState, parsery, useQueryStates, NuqsAdapter Next.js, server cache i porównanie z TanStack Router search params i React Router."
        url="https://fotz.pl/blog/nuqs-url-state-management-useQueryState-nextjs-react-router-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "nuqs URL State 2024", url: "https://fotz.pl/blog/nuqs-url-state-management-useQueryState-nextjs-react-router-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "nuqs URL State 2024", href: "/blog/nuqs-url-state-management-useQueryState-nextjs-react-router-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              nuqs / URL State / Next.js / React
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              nuqs i URL State Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              useQueryState, parsery, useQueryStates, NuqsAdapter
              i porównanie z TanStack Router.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "URL jako state", value: "useQueryState" },
                { label: "Multi-param", value: "useQueryStates" },
                { label: "Typy", value: "Parsery" },
                { label: "Server", value: "SSR cache" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-cyan-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">URL state tools — nuqs i alternatywy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              nuqs, useQueryStates, parsery, server cache, TanStack Router i React Router —
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
                {urlStateTools.map((t, i) => (
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
