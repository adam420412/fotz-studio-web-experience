import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "TanStack Start — co to jest i jak różni się od Next.js?",
    answer: "TanStack Start: full-stack React framework. Tanner Linsley (TanStack). Oparty na: TanStack Router (type-safe routing). Vinxi (bundler — Nitro + Vite). React. Server Functions (jak Server Actions). Beta (2024). Filozofia: full-stack-first. Type-safe end-to-end. File-based routing. Isomorphic functions. Funkcje: SSR (Server Side Rendering). SSG (Static Site Generation). Streaming. Islands. Client-side navigation. TanStack Router integracja: type-safe params. Nested layouts. Pending states. Search params validation. Tworzone projekty: npx create-tsrouter-app@latest. Lub create-start-app. Vinxi: meta-framework dla JS frameworks. Nitro pod spodem. Różne rendery: client, server, edge. Modularne. Podobny do Astro pod spodem. Porównanie Next.js vs TanStack Start: Next.js — dojrzały, wielki ekosystem. TanStack Start — nowszy, lepsze typing. Next.js — App Router (RSC). TanStack Start — Server Functions. Next.js — Vercel-optimized. TanStack Start — deployment agnostic. Next.js — file-based routing (konwencjonalny). TanStack Start — TanStack Router (type-safe). Kiedy TanStack Start: nowe projekty chcące type-safe. Istniejące TanStack Router SPA -> full-stack. Nie na Vercel lock-in. Małe/średnie projekty.",
  },
  {
    question: "TanStack Router — type-safe routing i file-based routes?",
    answer: "TanStack Router: type-safe router dla React. Lepszy niż React Router v6 pod kątem TypeScript. Dwa tryby: Code-based (ręczne tworzenie routes). File-based (automatyczne z plików). File-based routing: src/routes/ folder. __root.tsx — root layout. index.tsx — strona główna. about.tsx — /about. blog/ — folder = segment. blog/index.tsx — /blog. blog/$postId.tsx — /blog/:postId. Typy automatyczne. Params typowane: const {postId} = Route.useParams() — postId: string. Bez rzutowania. Compile-time check. Search params: const {page, filter} = Route.useSearch(). validateSearch: z.object({page: z.number().default(1)}). Type-safe query strings. Loader (data fetching): export const Route = createFileRoute('/blog/$postId')({loader: ({params}) => getPost(params.postId), component: BlogPost}). Dane w komponencie: const {post} = Route.useLoaderData(). Pending component: pendingComponent: () => div Loading.../div. Stale-while-revalidate. Error boundary: errorComponent. Retry. Nested layouts: routes/__root.tsx — wszystkie strony. routes/_auth.tsx — layout z auth. routes/_auth/profile.tsx — chroniony. Path-less layouts: _layout.tsx. Link: import {Link} from '@tanstack/react-router'. Link to='/blog/$postId' params={{postId: post.id}}. Type-safe params. useNavigate: navigate({to: '/blog', search: {page: 2}}). Devtools: @tanstack/router-devtools.",
  },
  {
    question: "TanStack Start Server Functions — pełny stack w TypeScript?",
    answer: "Server Functions: isomorphic functions. Działają na serwerze. Wywoływane z klienta. Jak Server Actions Next.js ale nieco inne. createServerFn: import {createServerFn} from '@tanstack/start'. const getUser = createServerFn({method: 'GET'}).handler(async ({data: userId}) => { return await db.user.findUnique({where: {id: userId}}) }). Wywołanie z klienta: const user = await getUser({data: userId}). Lub: const user = useServerFn(getUser). RPC-like call. Walidacja input: .validator(z.object({id: z.string()})). Zod schema. Type-safe. POST Server Function (mutacja): const createPost = createServerFn({method: 'POST'}).validator(z.object({title: z.string(), content: z.string()})).handler(async ({data}) => { return await db.post.create({data}) }). Loader z Server Function: export const Route = createFileRoute('/posts')({loader: () => getPosts()}). Automatyczne fetch. Dehydrate/Hydrate: dane z SSR do klienta. React Query integration: @tanstack/query-start. queryOptions z Router loader. useQuery na kliencie z pre-fetched data. Auth w Server Functions: getWebRequest() — dostęp do request. Session z cookies. Middleware: createMiddleware(). Globally apply. Request transformations. Auth guard. Error handling: throw ServerFnError. Lub return error w data. try/catch. Deployment: Node.js serwer. Vercel (Nitro adapter). Netlify. Cloudflare Workers. Bun adapter.",
  },
  {
    question: "TanStack Query + Router + Start — full-stack data pattern?",
    answer: "Integration stack: TanStack Router + TanStack Query + TanStack Start. Potężne połączenie. Wszystko type-safe. SSR: Router loader -> TanStack Query. Dehydrate na serwerze. Hydrate na kliencie. queryOptions helper: import {queryOptions} from '@tanstack/react-query'. const postQueryOptions = (postId: string) => queryOptions({queryKey: ['post', postId], queryFn: () => getPost({data: postId})}). Router loader: export const Route = createFileRoute('/blog/$postId')({loader: ({params, context: {queryClient}}) => queryClient.ensureQueryData(postQueryOptions(params.postId)), component: BlogPost}). Komponent: function BlogPost() { const {postId} = Route.useParams(). const {data: post} = useSuspenseQuery(postQueryOptions(postId)). return div {post.title} /div }. Prefetching: intent on hover. Link intent='hover'. Automatyczny prefetch. Instant navigation. Mutations: const createPostMutation = useMutation({mutationFn: (data) => createPost({data}), onSuccess: () => queryClient.invalidateQueries({queryKey: ['posts']})}). Optimistic updates: onMutate + rollback. Suspense boundaries: Suspense fallback={PostSkeleton}. Concurrent features React 19. Router-level Suspense. Error boundaries: Route errorComponent. TanStack Query onError. Context: RouterContext z queryClient. defineRouterContext. Dostępny w wszystkich loaders. Streaming: defer() w loader. Await na komponentach. Progressive rendering.",
  },
  {
    question: "TanStack Start vs Remix vs Next.js — kiedy wybrać?",
    answer: "Porównanie 2024: Next.js 15: Dojrzały (2016+). Największy ekosystem. Vercel-optimized. App Router (RSC + Server Actions). PPR. shadcn/ui. Kiedy: duże projekty, enterprise, e-commerce, Vercel. Remix v2 (React Router v7): server-first. Nested loaders/actions. Progressive enhancement. Kiedy: forme-heavy apps, SEO-critical, multi-tenancy. TanStack Start (beta): najnowszy. Type-safe end-to-end. TanStack Router. Deployment agnostic. Kiedy: nowe projekty, type-safety priority, nie Vercel. Astro 4: content sites. Islands architecture. Multi-framework. Kiedy: blog, docs, marketing, content. SvelteKit: Svelte ecosystem. Efektywny. Kiedy: nie React, mniejszy team, nowe projekty. Analog (Angular): Angular + SSR. Analogowy do Next.js dla Angular. Waku: minimalistyczny React RSC. Eksperymentalny. Wspólne decyzje: Zależy od: team size, istniejący stack, hosting, ecosystem needs. Migracja: SPA React -> TanStack Start (TanStack Router adopcja). Create-React-App -> Vite -> TanStack Start. React Router -> TanStack Router -> TanStack Start. Dojrzałość TanStack Stack: Router — stable. Query — stable. Form — beta. Start — beta. Table — stable. Virtual — stable. TanStack trend: szybko rośnie. Community wsparcie. Dobra dokumentacja. Płatne wsparcie: TanStack GitHub Sponsors. Open collective.",
  },
];

const frameworkComparison = [
  { framework: "TanStack Start", dojrzalosc: "Beta 2024", kiedy: "Type-safe, deployment agnostic, TanStack ecosystem" },
  { framework: "Next.js 15", dojrzalosc: "Stabilny, v15 (2024)", kiedy: "Produkcja, enterprise, Vercel, shadcn/ui, RSC" },
  { framework: "Remix / React Router v7", dojrzalosc: "Stabilny, merged 2024", kiedy: "Server-first, formy, progressive enhancement" },
  { framework: "Astro 4", dojrzalosc: "Stabilny (2024)", kiedy: "Content sites, blogs, docs, zero-JS default" },
  { framework: "SvelteKit", dojrzalosc: "Stabilny 2.x", kiedy: "Svelte ecosystem, mniejszy bundle, różny od React" },
  { framework: "Waku", dojrzalosc: "Eksperymentalny", kiedy: "Minimalistyczny RSC, nauka React Server Components" },
];

export default function BlogTanstackStartCoTo() {
  return (
    <Layout>
      <SEOHead
        title="TanStack Start — full-stack React z TanStack Router, Server Functions i Vinxi 2024 | Fotz.pl"
        description="TanStack Start: full-stack React framework (beta 2024) z TanStack Router (type-safe), Server Functions (jak Server Actions), Vinxi bundler i TanStack Query SSR — vs Next.js i Remix."
        canonicalUrl="https://fotz.pl/blog/tanstack-start-fullstack-react-router-server-functions-vinxi-2024"
      />
      <ArticleSchema
        title="TanStack Start — full-stack React z TanStack Router, Server Functions i Vinxi 2024?"
        description="6 frameworków full-stack React (TanStack Start/Next.js/Remix/Astro/SvelteKit/Waku) — TanStack Router type-safe, Server Functions, TanStack Query SSR i kiedy wybrać."
        url="https://fotz.pl/blog/tanstack-start-fullstack-react-router-server-functions-vinxi-2024"
        datePublished="2024-11-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TanStack Start", url: "https://fotz.pl/blog/tanstack-start-fullstack-react-router-server-functions-vinxi-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "TanStack Start", href: "/blog/tanstack-start-fullstack-react-router-server-functions-vinxi-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-amber-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Full-Stack / TanStack
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TanStack Start
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Full-stack React z TanStack Router (type-safe), Server Functions,
              Vinxi bundler i TanStack Query SSR — vs Next.js i Remix.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Router", value: "Type-safe" },
                { label: "Server", value: "Functions" },
                { label: "Bundler", value: "Vinxi" },
                { label: "Data", value: "TanStack Q" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-amber-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 full-stack React frameworków — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              TanStack Start, Next.js 15, Remix, Astro, SvelteKit i Waku —
              dojrzałość i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Framework</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Dojrzałość</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {frameworkComparison.map((f, i) => (
                  <tr key={f.framework} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.framework}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.dojrzalosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.kiedy}</td>
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
