import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "React Router 7 — co nowego i jak się różni od Remiksa?",
    answer: "React Router 7: scalenie z Remix. Remix v3 = React Router v7. Michael Jackson i Ryan Florence. Dwa tryby: Framework Mode (pełny, jak Remix) i Library Mode (jak RR6). Framework Mode: plik-based routing. Loaders i actions. SSR + SPA. Vite plugin. Library Mode: klasyczny React Router. useRoutes, createBrowserRouter. Bez file-based. Bez SSR automatycznego. Migracja Remix -> RR7: praktycznie 1:1 API. Adapter pattern: Vercel, Cloudflare, Netlify. Node.js wbudowany. Instalacja Framework Mode: npx create-react-router@latest. Vite plugin: plugins: [reactRouter()]. Routes: app/routes/home.tsx. app/routes/blog.$slug.tsx. Plik = route. Loader: export async function loader({params}: Route.LoaderArgs) { return json(await getData(params.slug)) }. Action: export async function action({request}: Route.ActionArgs) { const data = await request.formData(). return redirect('/') }. Component: export default function Home({loaderData}: Route.ComponentProps) { return div {loaderData.title} /div }. Type safety: Route.LoaderArgs, Route.ComponentProps. Typegen automatyczny. Różnice RR7 vs Remix v2: nazwy pakietów: react-router zamiast @remix-run/react. Adaptery osobne. Vite zamiast Esbuild. useLoaderData() -> loaderData prop. clientLoader: client-side loader. Oba: loaders, actions, nested routes, defer.",
  },
  {
    question: "React Router 7 — file-based routing i nested routes?",
    answer: "File-based routing w RR7: app/routes/ katalog. Każdy plik = route segment. Konwencje: home.tsx = /home. blog._index.tsx = /blog (index). blog.$slug.tsx = /blog/:slug. blog.tsx = layout route dla /blog/*. _auth.tsx = layout bez URL (pathless). _auth.login.tsx = /login (z _auth layout). Zagnieżdżanie: blog.tsx (layout) + blog.$slug.tsx (child). Outlet wymagany w layout. Pathless layouts: _marketing.tsx + _marketing.about.tsx = /about z marketing layout. Bez _marketing w URL. Splats: $.tsx = catch-all /*. Params: blog.$category.$slug.tsx = /blog/:category/:slug. Opcjonalne: blog.($slug).tsx. Route groups: (group)/page.tsx — group ignorowany w URL. Nested layouts: app/routes/dashboard.tsx (layout). app/routes/dashboard.analytics.tsx (child). dashboard/analytics w URL. Linki: import {Link, NavLink} from 'react-router'. NavLink: activeClassName lub isActive prop. Programmatic: import {useNavigate} from 'react-router'. const navigate = useNavigate(). navigate('/home'). navigate(-1) — back. Route config: routes.ts alternatywa: import {route, layout, index} from '@react-router/dev/routes'. export default [layout('./layouts/main.tsx', [index('./home.tsx'), route('/about', './about.tsx')])] as RouteConfig. Manual bez file-based.",
  },
  {
    question: "React Router 7 — loaders, actions i typegen?",
    answer: "Loaders: async getData na server (lub client). Przed renderowaniem. Bez useEffect. Server loader: export async function loader({params, request}: Route.LoaderArgs) { const user = await db.user.findUnique({where: {id: params.id}}). return {user} }. Client loader: export async function clientLoader({serverLoader}: Route.ClientLoaderArgs) { const cached = cache.get('data'). if (cached) return cached. return await serverLoader() }. clientLoader.hydrate = true — run on hydration. Action: POST/PUT/DELETE handler. export async function action({request}: Route.ActionArgs) { const form = await request.formData(). const email = form.get('email') as string. await sendEmail(email). return {success: true} }. Form submit: import {Form} from 'react-router'. Form method='post' action='/subscribe' input name='email' /. Typegen: .react-router/types/ generowane automatycznie. Każdy plik route = własne typy. Route.LoaderArgs — params typed. Route.ComponentProps.loaderData — typed data. Konfig: react-router.config.ts: export default {ssr: true} as Config. SPA mode: ssr: false. Prerendering: prerender: ['/about', '/blog']. Build time HTML. Defer: import {defer, Await} from 'react-router'. defer({slow: slowPromise}). Suspense Await fallback={Loading /} resolve={data.slow}. Streaming SSR.",
  },
  {
    question: "React Router 7 vs Next.js vs TanStack Start — kiedy wybrać?",
    answer: "React Router 7 (Framework): Remix-like. Vite-based. Loaders+Actions. Server adapters. Kiedy: znasz Remix. Chcesz mniej opinii niż Next.js. Loaders zamiast RSC. TanStack Start: TanStack Router + SSR. Type-safe routing. Server functions. Vinxi. Alpha 2024. Kiedy: max type safety. Eksperymentalne projekty. Next.js App Router: RSC, Server Actions. Vercel-optimized. Największy ekosystem. Kiedy: produkcja, maksymalne wsparcie. SvelteKit: Svelte framework. Adapters. Superb DX. Kiedy: preferujesz Svelte. Astro: content-first. Islands. MPA + SPA hybrid. Kiedy: blog, dokumentacja. React Router 7 SPA Mode: ssr: false. Tylko client-side. Jak CRA. Kiedy: SPA bez SSR, migracja CRA. Library Mode (bez Framework): tylko routing. Bez loaders. Jak RR6. Kiedy: istniejące projekty, Webpack, własny SSR. Porównanie renderowania: Next.js RSC: React Server Components. RR7: traditional SSR + loaders. TanStack: RPC-style server fns. Decyzja 2024: Next.js 15 — produkcja, Vercel. React Router 7 — Remix-like, Vite, multi-host. TanStack — eksperymentalny, type-safe. Astro — content sites. SvelteKit — Svelte fans.",
  },
  {
    question: "React Router 7 — błędy, pending states i optymistyczny UI?",
    answer: "Error boundaries: export function ErrorBoundary({error}: Route.ErrorBoundaryProps) { if (isRouteErrorResponse(error)) { return div Status: {error.status} {error.data} /div }. return div Unknown error /div }. isRouteErrorResponse: sprawdź typ błędu. 404: throw new Response('Not Found', {status: 404}). Pending state: import {useNavigation} from 'react-router'. const {state} = useNavigation(). state: 'idle' | 'loading' | 'submitting'. Loading skeleton gdy state === 'loading'. Form pending: const navigation = useNavigation(). const isSubmitting = navigation.state === 'submitting'. Optimistic UI: import {useOptimistic} from 'react'. Lub useFetcher dla local updates. useFetcher: const fetcher = useFetcher(). fetcher.submit(data, {method: 'post'}). fetcher.state — stan bez nawigacji. Like button bez redirect. Revalidation: po action automatyczny refetch loaders. shouldRevalidate: export function shouldRevalidate({nextUrl}: ShouldRevalidateFunctionArgs) { return nextUrl.pathname.startsWith('/dashboard') }. Selektywna rewalidacja. Optimistic przykład: const [optimisticLikes, setOptimistic] = useState(likes). fetcher.submit — server update. setOptimistic(likes + 1) — natychmiastowy. useEffect na fetcher.data — sync po odpowiedzi. Meta: export function meta({data}: Route.MetaArgs) { return [{title: data.title}, {name: 'description', content: data.desc}] }. Dynamiczne SEO meta.",
  },
];

const routerComparison = [
  { framework: "React Router 7 Framework", rendering: "SSR + SPA + Streaming", routing: "File-based + config", kiedy: "Remix użytkownicy, Vite, multi-host" },
  { framework: "React Router 7 Library", rendering: "Client-side", routing: "Manual createBrowserRouter", kiedy: "RR6 upgrade, istniejące projekty" },
  { framework: "Next.js 15", rendering: "RSC + SSR + Static", routing: "File-based App Router", kiedy: "Produkcja, Vercel, największy ekosystem" },
  { framework: "TanStack Start", rendering: "SSR + SPA", routing: "Type-safe file-based", kiedy: "Max type safety, eksperymentalne" },
  { framework: "Astro 5", rendering: "MPA + Islands + SSR", routing: "File-based pages", kiedy: "Content sites, blog, dokumentacja" },
  { framework: "SvelteKit", rendering: "SSR + SPA + Static", routing: "File-based", kiedy: "Svelte, mały bundle, szybki DX" },
];

export default function BlogReactRouter7CoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Router 7 | Fotz Studio"
        description="React Router 7 (Remix v3): Framework Mode (file-based routing, loaders, actions, SSR), Library Mode, typegen, pending states, optimistic UI i porównanie z…"
        canonical="https://fotz.pl/blog/react-router-7-framework-mode-loaders-actions-typegen-vs-nextjs-2024"

        keywords="React Router 7 co to jest, React Router 7 jak działa, React Router 7 tutorial, React Router 7 przykład, czym jest React Router 7, React Router 7 dokumentacja, React Router 7 przewodnik"

        canonical="https://fotz.pl/blog/react-router-7-framework-mode-loaders-actions-typegen-vs-nextjs-2024"
      />
      <ArticleSchema
        title="React Router 7 — Framework Mode, loaders, actions, typegen i vs Next.js 2024?"
        description="React Router 7 i Framework Mode: file-based routing, loaders, actions, SSR, typegen, pending states, optimistic UI i porównanie z Next.js/TanStack Start/Astro."
        url="https://fotz.pl/blog/react-router-7-framework-mode-loaders-actions-typegen-vs-nextjs-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Router 7", url: "https://fotz.pl/blog/react-router-7-framework-mode-loaders-actions-typegen-vs-nextjs-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-pink-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "React Router 7", url: "/blog/react-router-7-framework-mode-loaders-actions-typegen-vs-nextjs-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-rose-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Routing / SSR
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Router 7
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Framework Mode (Remix v3), file-based routing,
              loaders, actions, typegen i SSR — vs Next.js i TanStack.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Routing", value: "File-based" },
                { label: "Dane", value: "Loaders" },
                { label: "Formularze", value: "Actions" },
                { label: "Typy", value: "Typegen" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-rose-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Porównanie frameworków React — rendering i routing</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              React Router 7, Next.js, TanStack Start, Astro i SvelteKit —
              model renderowania i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Framework</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rendering</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Routing</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {routerComparison.map((r, i) => (
                  <tr key={r.framework} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{r.framework}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{r.rendering}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{r.routing}</td>
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

      <RelatedArticles currentArticleId="react-router-7-framework-mode-loaders-actions-typegen-vs-nextjs-2024" />
      <ContactSection />
    </Layout>
  );
}
