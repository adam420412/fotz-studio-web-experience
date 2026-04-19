import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest TanStack Router i jak różni się od React Router?",
    answer: "TanStack Router: type-safe routing dla React. 100% TypeScript inferencja. Params, search params — wszystko typed. File-based routing (opcjonalne). Loader data typed. Instalacja: npm install @tanstack/react-router. Porównanie z React Router: React Router v6 — szeroko stosowany, mniej typowany. TanStack Router — full type safety, nowy, szybko rośnie. React Router v7 (Remix merger) — data loading, server rendering. Tworzenie route: import {createRootRoute, createRoute, createRouter} from '@tanstack/react-router'. const rootRoute = createRootRoute({component: RootComponent}). const indexRoute = createRoute({getParentRoute: () => rootRoute, path: '/', component: Index}). const router = createRouter({routeTree: rootRoute.addChildren([indexRoute])}). RouterProvider router={router}. Type-safe params: const productRoute = createRoute({path: '/products/$productId', component: ProductPage}). const {productId} = productRoute.useParams(). productId: string — automatycznie typed. Type-safe search params: const searchRoute = createRoute({validateSearch: (search) => ({page: Number(search.page), filter: String(search.filter || '')}), ...}). const {page, filter} = searchRoute.useSearch(). Loader: loader: async ({params}) => fetchProduct(params.productId). const data = Route.useLoaderData(). Type-inferred z loader return. Link component: Link to='/products/$productId' params={{productId: '123'}} — type error jeśli brak params.",
  },
  {
    question: "TanStack Router — file-based routing i code splitting?",
    answer: "File-based routing: @tanstack/router-vite-plugin lub codegen. routes/ directory. _root.tsx — root layout. index.tsx — /. about.tsx — /about. products/ — /products prefix. products/index.tsx — /products. products/$id.tsx — /products/:id. products/$id/edit.tsx — /products/:id/edit. Generowanie: npx tsr generate. Automatyczne budowanie routeTree. Updating: npx tsr watch — watch mode. Vite plugin: import {TanStackRouterVite} from '@tanstack/router-vite-plugin'. plugins: [TanStackRouterVite()]. Auto-generuje src/routeTree.gen.ts. Lazy loading: const ProductPage = lazy(() => import('./routes/products/$id')). Automatyczne code splitting. Każdy route = osobny chunk. Prefetching: Link preload='intent' — prefetch na hover. Link preload='viewport' — prefetch gdy widoczny. router.preloadRoute({to: '/products/$productId', params: {productId: '1'}}). Pending UI: pendingComponent — skeleton podczas ładowania. pendingMs: 100 — pokaż pending po 100ms. pendingMinMs: 500 — minimalne pokazanie pending. Context: getContext: () => queryClient. Dziel przez wszystkie routes. TanStack Query integration: const queryOptions = queryOptions({queryKey: ['product', id], queryFn: () => fetchProduct(id)}). loader: ({context}) => context.queryClient.ensureQueryData(queryOptions(params.productId)). Typ-safe link: useNavigate hook. navigate({to: '/products/$id', params: {id: '1'}, search: {filter: 'new'}}) — wszystko typed.",
  },
  {
    question: "React Router v7 — Remix merger i server-side routing?",
    answer: "React Router v7 (2024): merger z Remix. React Router + Remix = jeden produkt. Framework mode (Remix-like) + Library mode (RR v6-like). Instalacja frameworka: npx create-react-router@latest. App directory structure: app/root.tsx — root layout. app/routes/ — file-based routes. app/routes/_index.tsx — /. app/routes/products.$id.tsx — /products/:id. Loaders: export async function loader({params}: Route.LoaderArgs) { const product = await getProduct(params.id). return {product} }. export default function ProductPage({loaderData}: Route.ComponentProps) { return div{loaderData.product.name}/div }. Type-safe loaderData — automatyczna inferencja. Actions: export async function action({request}: Route.ActionArgs) { const formData = await request.formData(). await updateProduct(formData). return redirect('/products') }. Form: Form method='post'. useActionData() — typed. Server vs Client Routing: serverLoader / clientLoader. serverAction / clientAction. Partial hydration strategies. Nested routes (Remix style): app/routes/products.tsx — layout. app/routes/products.$id.tsx — child. Outlet w parent. Data sharing przez parent loader. Vite plugin: @react-router/dev/vite. vitePlugin() w vite.config.ts. SSR automatyczny. Pre-rendering: Static pre-render dla SEO. prerender: ['/about', '/products']. Migracja z RR v6: backward compatible. Stopniowa migracja. createBrowserRouter — nadal działa.",
  },
  {
    question: "Wouter i inne lekkie routery — kiedy nie potrzebujesz React Router?",
    answer: "Wouter: mały router dla React i Preact. 1.5KB gzip. Hooks-based API. Nie potrzebujesz React Router dla małych apps. import {Route, Switch, Link, useLocation} from 'wouter'. Route path='/about' component={About}. Route path='/user/:id' children={({params}) => User id={params.id}}. useLocation: const [location, setLocation] = useLocation(). setLocation('/about') — navigate. useRoute: const [match, params] = useRoute('/user/:id'). Podobny do React Router ale mniejszy. Wouter vs React Router: Wouter — 1.5KB, hooks. React Router — 50KB, więcej features. Routing bez biblioteki (dla małych SPA): window.history.pushState. window.addEventListener('popstate'). useEffect na location. Bardzo mały projekt — może wystarczyć. Next.js App Router: wbudowany file-based router. Nie potrzebujesz zewnętrznej biblioteki. Folder = route. page.tsx = strona. layout.tsx = layout. (group) — logiczne grupowanie bez URL. @parallel — parallel routes. (...intercept) — route interception. Expo Router: file-based dla React Native. Oparty na Expo i React Navigation. Universal routing (iOS, Android, Web). next/navigation vs react-router: useRouter, usePathname, useSearchParams. Nie kompatybilne między sobą. Router agnostic: jeśli budujesz komponent library — nie używaj konkretnego routera. useHref, useNavigate — inject przez props. Kiedy TanStack Router: type-safety priorytetem. Duże app TypeScript. Wiele params/search params. Kiedy React Router v7: framework features (SSR, loaders). Remix migracja.",
  },
  {
    question: "Type-safe navigation — jak TypeScript pomaga w routing?",
    answer: "Problem bez type-safety: navigate('/prodcuts/123') — literówka. Params nie sprawdzane. Search params dowolne. Brak inferencji z loaderów. TanStack Router rozwiązanie: pełna inferencja. Link to='/products/$productId' params={{productId: '123'}}. TypeScript błąd: brak params. TypeScript błąd: zły klucz. RouteTree generuje typy dla wszystkich routes. Literal types dla paths: declare module '@tanstack/react-router' { interface Register { router: typeof router } }. Teraz: paths auto-complete w IDE. Typed params: productRoute.useParams() — {productId: string}. search params: searchRoute.useSearch() — {page: number, filter: string}. React Router v7 types: Route.LoaderArgs, Route.ComponentProps. Automatyczna inferencja z loaderData. export type loader = typeof loader. export default function Component({loaderData}: Route.ComponentProps). TypeScript + Link: To type parameter. Params type parameter. Search type parameter. Brak undefined keys. nuqs (URL state management): npm install nuqs. useQueryState('page', parseAsInteger.withDefault(1)). URL jako source of truth. Type-safe URL state. Brak custom serialization. React Router + Zod search params: const searchSchema = z.object({page: z.number().default(1)}). const search = searchSchema.parse(Object.fromEntries(searchParams)). Validacja + type-safety. Remix approach: Zod w loader. throw new Response (lub data()) jeśli invalid. TypeScript happy path. Type-safe form handling: useActionData() + Zod. Koniec z form error guessing.",
  },
];

const routers = [
  { router: "TanStack Router", rozmiar: "~15KB", typesafety: "100% (inference)", ssr: "Tak (beta)", kiedy: "Type-safe SPA, full-stack TypeScript" },
  { router: "React Router v7", rozmiar: "~50KB", typesafety: "Tak (loaderData)", ssr: "Tak (Remix)", kiedy: "Framework mode, SSR, Remix migration" },
  { router: "React Router v6", rozmiar: "~50KB", typesafety: "Częściowa", ssr: "Manual", kiedy: "Istniejące projekty, szeroka adopcja" },
  { router: "Next.js App Router", rozmiar: "Wbudowany", typesafety: "Tak (Route params)", ssr: "Tak (RSC)", kiedy: "Next.js apps, RSC, server-first" },
  { router: "Wouter", rozmiar: "1.5KB", typesafety: "Częściowa", ssr: "Tak (static-location)", kiedy: "Małe SPA, Preact, bundle minimalizacja" },
  { router: "Expo Router", rozmiar: "Wbudowany", typesafety: "Tak", ssr: "Tak (web)", kiedy: "React Native + Web universal apps" },
];

export default function BlogTanstackRouterCoTo() {
  return (
    <Layout>
      <SEOHead
        title="TanStack Router, React Router v7 i type-safe routing w React 2024"
        description="TanStack Router (100% type-safe, file-based), React Router v7 (Remix merger, loaders, actions), Wouter (1.5KB), Next.js App Router i type-safe navigation…"
        canonicalUrl="https://fotz.pl/blog/tanstack-router-react-router-v7-type-safe-routing-2024"

        keywords="TanStack Router, React Router v7 i type-safe routing w React 2024 co to jest, TanStack Router, React Router v7 i type-safe routing w React 2024 jak działa, TanStack Router, React Router v7 i type-safe routing w React 2024 tutorial, TanStack Router, React Router v7 i type-safe routing w React 2024 przykład, czym jest TanStack Router, React Router v7 i type-safe routing w React 2024, TanStack Router, React Router v7 i type-safe routing w React 2024 dokumentacja, TanStack Router, React Router v7 i type-safe routing w React 2024 przewodnik"

        canonical="https://fotz.pl/blog/tanstack-router-react-router-v7-type-safe-routing-2024"
      />
      <ArticleSchema
        title="TanStack Router, React Router v7 i type-safe routing w React 2024?"
        description="6 routerów React (TanStack Router/React Router v7/v6/Next.js/Wouter/Expo Router) — type-safe params, search params, loaders i file-based routing."
        url="https://fotz.pl/blog/tanstack-router-react-router-v7-type-safe-routing-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TanStack Router i React Router v7", url: "https://fotz.pl/blog/tanstack-router-react-router-v7-type-safe-routing-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "TanStack Router i React Router v7", href: "/blog/tanstack-router-react-router-v7-type-safe-routing-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Routing / TypeScript
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TanStack Router i React Router v7
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              TanStack Router (type-safe params, file-based), React Router v7 (Remix merger,
              loaders, actions) i Wouter (1.5KB) — nowoczesne routing w React.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "100% typed", value: "TanStack" },
                { label: "Remix merge", value: "RR v7" },
                { label: "File-based", value: "Next/Expo" },
                { label: "1.5KB", value: "Wouter" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-orange-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 routerów React — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              TanStack Router, React Router v7/v6, Next.js App Router, Wouter i Expo Router —
              rozmiar, type-safety, SSR i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Router</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozmiar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Type-safety</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">SSR</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {routers.map((r, i) => (
                  <tr key={r.router} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{r.router}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{r.rozmiar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{r.typesafety}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{r.ssr}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{r.kiedy}</td>
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
