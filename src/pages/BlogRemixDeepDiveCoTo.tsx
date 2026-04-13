import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Remix i jak działają nested routes?",
    answer: "Remix: fullstack React framework. Progressive enhancement — działa bez JavaScript. Web fundamentals (fetch, forms, HTTP). Vite pod spodem (Remix 2.x). Ryan Florence i Michael Jackson. Nested Routes: każda trasa może mieć layout. app/routes/_index.tsx — / (strona główna). app/routes/blog._index.tsx — /blog (lista). app/routes/blog.$slug.tsx — /blog/:slug. app/routes/blog.tsx — layout dla wszystkich /blog/*. Outlet: {Outlet} — gdzie renderować dzieci. blog.tsx renderuje {Outlet} — wpisy wchodzą tutaj. Nested loading: wszystkie loadery równolegle. Parent i child loady równocześnie. Szybsze niż waterfall Next.js Pages Router. Layouty: każda trasa ma swój ErrorBoundary. app/root.tsx — root layout. HydrateFallback — loading state podczas nawigacji. Route konwencje: blog._index (index trasy). blog.$slug (parametr). blog.new (statyczna). _layout.blog (grupowanie bez URL). Splat routes: $.tsx — catch-all. Params: params.slug w loader. Resource routes: app/routes/api.users.ts — tylko loader/action (bez domyślnego eksportu komponentu). PDF download, JSON API, webhooks. Remix vs Next.js App Router: Remix — prostszy model. Next.js — RSC/Server Components. Remix — progressive enhancement z natury. Next.js — większy ekosystem.",
  },
  {
    question: "Loader i Action — data fetching i mutacje w Remix?",
    answer: "Loader: export async function loader({params, request}: LoaderFunctionArgs) { const url = new URL(request.url). const q = url.searchParams.get('q'). const posts = await db.post.findMany({where: {title: {contains: q}}}). return json({posts, q}) }. Dostęp w komponencie: const {posts, q} = useLoaderData(). Type-safe: InferredLoaderData. TypeErrors przy zmianie zwracanego kształtu. Request: URL, headers, cookies, body. Throw redirect: if (!session.user) throw redirect('/login'). Response: json(data) — JSON z headers. redirect(url) — przekierowanie. Streaming: defer({}: LoaderFunctionArgs) { const fastData = await getFast(). const slowPromise = getSlow(). return defer({fastData, slowPromise}) }. Await komponent: Await resolve={slowPromise} errorElement={Error}. {(data) => Component}. Await — stream data do klienta. Action: export async function action({request}: ActionFunctionArgs) { const formData = await request.formData(). const title = formData.get('title') as string. const post = await db.post.create({data: {title, authorId: session.userId}}). return redirect('/blog/' + post.slug) }. Form: Form method='post' action='/blog/new'. Działa bez JS! Validation: const errors = validate(formData). if (errors) return json({errors}, {status: 400}). useActionData() — pobierz errors. useNavigation: navigation.state — idle, loading, submitting. Pending UI bez useState.",
  },
  {
    question: "Optimistic UI, fetcher i parallel data loading?",
    answer: "useFetcher: fetch bez nawigacji. const fetcher = useFetcher(). fetcher.submit(formData, {method: 'post', action: '/api/like'}). fetcher.data — wynik. fetcher.state — loading state. Optimistic UI z fetcher: const isLiked = fetcher.formData ? fetcher.formData.get('action') === 'like' : post.liked. button className={isLiked ? 'liked' : ''} onClick. Natychmiast aktualizuj UI — nie czekaj na serwer. Rollback przy błędzie automatyczny. useOptimistic (React 19): const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (state, amount) => state + amount). Parallel loaders: Remix ładuje wszystkie nested loaders równolegle. Parent route loader + child route loader jednocześnie. Dramatyczna poprawa vs waterfall. Cache-Control headers: export function headers() { return {'Cache-Control': 'max-age=300'} }. CDN caching dla static content. Stale-while-revalidate. shouldRevalidate: export function shouldRevalidate({currentUrl, nextUrl, formMethod}) { if (formMethod === 'GET') return false. return defaultShouldRevalidate }. Nie przeładowuj niepotrzebnie. clientLoader (Remix v2.9+): export async function clientLoader({serverLoader}) { const serverData = await serverLoader(). return {...serverData, clientData: localStorage.getItem('...')} }. Łącz serwer + klient data. clientAction: akcje po stronie klienta. Error handling: ErrorBoundary per route. useRouteError() — sprawdź typ błędu. isRouteErrorResponse(error) — HTTP error. Granularne błędy — nie cała strona.",
  },
  {
    question: "Authentication, sessions i cookies w Remix?",
    answer: "Cookie Session Storage: import {createCookieSessionStorage} from '@remix-run/node'. const sessionStorage = createCookieSessionStorage({cookie: {name: '__session', httpOnly: true, secure: true, sameSite: 'lax', secrets: [process.env.SESSION_SECRET]}}). export const {getSession, commitSession, destroySession} = sessionStorage. Login loader: export async function action({request}: ActionFunctionArgs) { const session = await getSession(request.headers.get('Cookie')). const {email, password} = Object.fromEntries(await request.formData()). const user = await authenticate(email, password). if (!user) return json({error: 'Invalid'}, {status: 401}). session.set('userId', user.id). return redirect('/dashboard', {headers: {'Set-Cookie': await commitSession(session)}}) }. Protected route loader: const session = await getSession(request.headers.get('Cookie')). const userId = session.get('userId'). if (!userId) throw redirect('/login'). Remix Auth (sergiodxa): npm install remix-auth. FormStrategy, GoogleStrategy, etc. Authenticator z TypeScript. Clerk integration: ClerkApp wrapper. rootAuthLoader. getAuth(). Clerk + Remix pełna integracja. Database sessions: createDatabaseSessionStorage. CSRF: csrf package. Remix forms — SameSite cookie protection wbudowane. Rate limiting: upstash-ratelimit w loader. X-Forwarded-For IP. Remix + Prisma: createPrismaSessionStorage. Lub własne queries. Flash messages: session.flash('error', 'Something went wrong'). session.get('error') — odczyt i usunięcie.",
  },
  {
    question: "Deployment i produkcyjne wzorce Remix — Vercel, Fly.io i Cloudflare?",
    answer: "Adaptery Remix: @remix-run/node — Express, Fastify, server. @remix-run/cloudflare — Cloudflare Workers. @remix-run/architect — AWS Lambda. Vercel: @vercel/remix. vercel.json z rewrites. Edge runtime opcjonalnie. SSR per request. Fly.io: Remix app template. Dockerfile included. Global edge deployment. Persistentny serwer — nie serverless. Baza danych blisko servera. Cloudflare Pages + Workers: export default {fetch: createPagesFunctionHandler(build)}. D1 (SQLite), KV, R2 dostępne. Globalne edge — ultra niska latencja. Limitacje: 5MB bundle size, czas CPU. Struktura projektu: app/root.tsx — root layout, global error, meta. app/routes/ — trasy. app/components/ — UI komponenty. app/lib/ — utilities, DB clients. app/styles/ — CSS. app/entry.client.tsx — klient hydration. app/entry.server.tsx — server rendering. Progressive Enhancement: Działa bez JS: Form submit. Navigation. Cookies. Fallback dla JS-disabled. Enhanced z JS: useFetcher. useNavigation pending. Optimistic UI. SPA transitions. Testing Remix: @testing-library/react z MemoryRouter. Playwright dla E2E (routing, forms). Mock loader/action przez jest.mock. Integration test z supertest. Meta i headers funkcje: export function meta({data, params}: MetaFunction). Open Graph, Twitter Cards. Dynamic SEO. Remix i Vite (2.x): HMR szybki. Plugin @remix-run/dev. Zrównanie z ekosystemem Vite.",
  },
];

const remixConcepts = [
  { koncept: "Nested Routes", opis: "Layouty zagnieżdżone", kiedy: "Blog, dashboard — wielopoziomowe layouty" },
  { koncept: "Loader", opis: "Serwer data fetching", kiedy: "GET data — DB query, API, session check" },
  { koncept: "Action", opis: "Serwer mutacja", kiedy: "POST/PUT/DELETE — forma submit, delete" },
  { koncept: "defer() + Await", opis: "Streaming SSR", kiedy: "Wolne dane — stream zamiast czekać" },
  { koncept: "useFetcher", opis: "Fetch bez nawigacji", kiedy: "Like button, autocomplete, optymistyczny UI" },
  { koncept: "ErrorBoundary", opis: "Per-route error handling", kiedy: "Izolacja błędów — nie crash całej strony" },
];

export default function BlogRemixDeepDiveCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Remix.js — nested routes, loader, action, defer, useFetcher i optimistic UI 2024 | Fotz.pl"
        description="Remix.js: nested routes, loader/action (SSR data fetching), defer() streaming, useFetcher (optimistic UI), cookie sessions, progressive enhancement i Cloudflare/Vercel deployment."
        canonicalUrl="https://fotz.pl/blog/remix-nested-routes-loader-action-defer-usefetcher-optimistic-ui-2024"

        keywords="Remix.js co to jest, Remix.js definicja, czym jest Remix.js, Remix.js przykłady, jak działa Remix.js, Remix.js znaczenie, Remix.js przewodnik"
      />
      <ArticleSchema
        title="Remix.js — nested routes, loader, action, defer, useFetcher i optimistic UI 2024?"
        description="6 konceptów Remix (Nested Routes/Loader/Action/defer/useFetcher/ErrorBoundary) — progressive enhancement, cookie sessions, Clerk auth, streaming i deployment Cloudflare/Vercel."
        url="https://fotz.pl/blog/remix-nested-routes-loader-action-defer-usefetcher-optimistic-ui-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Remix.js", url: "https://fotz.pl/blog/remix-nested-routes-loader-action-defer-usefetcher-optimistic-ui-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-rose-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Remix.js", href: "/blog/remix-nested-routes-loader-action-defer-usefetcher-optimistic-ui-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-pink-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Remix / React / Fullstack
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Remix.js — fullstack React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Nested routes, loader/action, defer() streaming, useFetcher,
              optimistic UI, cookie sessions i progressive enhancement.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Routing", value: "Nested" },
                { label: "Data loading", value: "loader()" },
                { label: "Mutations", value: "action()" },
                { label: "Streaming", value: "defer()" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych konceptów Remix</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nested Routes, Loader, Action, defer, useFetcher i ErrorBoundary —
              opis i kiedy stosować.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Koncept</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {remixConcepts.map((c, i) => (
                  <tr key={c.koncept} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{c.koncept}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{c.opis}</td>
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

      <ContactSection />
    </Layout>
  );
}
