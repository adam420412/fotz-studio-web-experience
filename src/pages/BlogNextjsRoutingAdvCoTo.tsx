import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Next.js Parallel Routes — co to jest i jak działają @folder?",
    answer: "Parallel Routes: Next.js App Router. Wiele stron jednocześnie w jednym layoucie. @folder konwencja. Slot pattern. Definicja: app/layout.tsx otrzymuje {children, @team, @analytics} jako props. Folder: app/@team/page.tsx — slot team. app/@analytics/page.tsx — slot analytics. Layout: export default function Layout({children, team, analytics}) { return div. div {children} /div. div {team} /div. div {analytics} /div. /div }. Każdy slot: niezależna nawigacja. Własna loading/error. Własny stan. Use cases: dashboardy z wieloma widokami. Side-by-side comparison. Tabbed interfaces bez client JS. Conditional rendering per slot. Default.tsx: gdy slot nie ma strony dla aktualnej ścieżki. app/@team/default.tsx — fallback. Bez default.tsx: 404 jeśli brak dopasowania. loading.tsx per slot: każdy slot ma własny Suspense. app/@analytics/loading.tsx. Niezależne loadingi. error.tsx per slot: izolowane error boundaries. Dostęp do wielu slotów: layout.tsx props. Typed per slot. TypeScript wsparcie. Soft navigation: slots zachowują stan przy nawigacji. Hard navigation (F5): potrzeba default.tsx. Przykład dashboard: /dashboard — renderuje @team i @analytics jednocześnie. /dashboard/settings — tylko settings w children, reszta z default.",
  },
  {
    question: "Next.js Intercepting Routes — modals i (.) konwencja?",
    answer: "Intercepting Routes: przechwyć route w innym kontekście. Modal pattern. Photo gallery z modal. Konwencja: (.) — ten sam poziom. (..) — poziom wyżej. (..)(..) — dwa poziomy wyżej. (...) — od root. Przykład foto: app/photos/[id]/page.tsx — pełna strona zdjęcia. app/@modal/(.)photos/[id]/page.tsx — intercepted jako modal. Jak działa: klik w galerii -> modal (intercepted route). Odśwież -> pełna strona zdjęcia. URL zmienia się w obu przypadkach. Modal z Parallel Routes + Intercepting: layout.tsx: {children} i {modal} slot. app/@modal/default.tsx: null (brak modalu domyślnie). app/@modal/(.)photos/[id]/page.tsx: Modal component. app/photos/[id]/page.tsx: Full page. Link w galerii: Link href='/photos/1' — intercepted do modal. Bezpośredni URL: /photos/1 — pełna strona. useRouter().back() zamyka modal. Modal implementation: 'use client'. import {useRouter} from 'next/navigation'. const router = useRouter(). function Modal({children}) { return dialog. button onClick={() => router.back()}. {children}. /dialog }. Przykłady: Pinterest — pin modal. Twitter/X — tweet modal. E-commerce — quick view product. Auth — login modal bez opuszczania strony. Soft vs Hard nav: soft (client) -> intercepting działa. Hard (refresh/direct URL) -> pełna strona. SEO: pełna strona dostępna bezpośrednio. Shareable URL.",
  },
  {
    question: "Next.js Route Groups i (folder) — organizacja bez URL?",
    answer: "Route Groups: organizuj bez wpływu na URL. (folder) konwencja — nawiasy okrągłe. Przypadki użycia: wiele layoutów w obrębie jednej ścieżki. Grupowanie logiczne (auth, dashboard, marketing). Opt-in do layout. Przykłady: app/(auth)/login/page.tsx -> URL: /login. app/(auth)/register/page.tsx -> URL: /register. app/(auth)/layout.tsx — wspólny layout dla auth. app/(marketing)/page.tsx -> URL: /. app/(dashboard)/dashboard/page.tsx -> URL: /dashboard. Wiele Root Layouts: app/(shop)/layout.tsx — layout sklepu. app/(blog)/layout.tsx — layout bloga. Różne html/body. Różne fonts. Bez route group: jeden root layout. Z route groups: wiele root layouts dla różnych sekcji. Migracja z Pages Router: route groups ułatwiają. Stopniowa migracja. Co-location: testy, komponenty blisko stron. app/(dashboard)/dashboard/_components/ — private folder (_). Nie route — konwencja. TypeScript paths: tsconfig paths dla slotów. Nested route groups: (marketing)/(campaign)/page.tsx -> URL: /campaign. Kilka grup na jednym poziomie. Layout sharing: (a) i (b) mogą dzielić layout wyżej. Lub mieć osobne. Template.tsx vs layout.tsx: layout — persist między nawigacjami. template — nowa instancja per nawigacja. Animacje wejścia z template.",
  },
  {
    question: "Next.js Middleware — edge runtime i zaawansowane wzorce?",
    answer: "Middleware: middleware.ts w root. Uruchamia się przed każdym requestem. Edge Runtime (V8 isolates). Bardzo szybki. Instalacja: plik middleware.ts obok app/. export function middleware(request: NextRequest) { return NextResponse.next() }. export const config = {matcher: ['/dashboard/:path*', '/api/:path*']}. Auth middleware: const token = request.cookies.get('token'). if (!token) return NextResponse.redirect(new URL('/login', request.url)). i18n routing: const locale = request.headers.get('accept-language'). redirect do /pl/ lub /en/. A/B testing middleware: Math.random() -> cookie 'variant'. rewrite do /variants/a lub /variants/b. Geolocation: request.geo?.country. Redirect na odpowiednią wersję. Rate limiting w middleware: check Redis / KV store. Return 429 gdy limit. Edge Config (Vercel): @vercel/edge-config. Feature flags w edge. Zero latency config. NextResponse methods: next() — kontynuuj. redirect(url) — przekieruj. rewrite(url) — zmień URL cicho. json({}) — odpowiedź JSON. Cookies w middleware: response.cookies.set('name', 'value'). response.cookies.delete('name'). Headers: request.headers — odczyt. response.headers.set() — modyfikacja. Łańcuchowanie: kilka operacji per request. Nested middleware: nie ma. Jeden plik. Config matcher: string, regex, obiekt {source, has, missing}. Clerkauth middleware: clerkMiddleware() z @clerk/nextjs.",
  },
  {
    question: "Next.js Server Actions — formularze i mutacje bez API?",
    answer: "Server Actions: funkcje serwerowe wywołane z klienta. Bez osobnego API route. 'use server' directive. React 19 + Next.js 14+. Definicja: async function createPost(formData: FormData) { 'use server'. const title = formData.get('title') as string. await db.posts.create({data: {title}}). revalidatePath('/posts') }. W formularzu: form action={createPost}. input name='title'. button type='submit'. Działa bez JS! Progressive enhancement. useFormStatus: import {useFormStatus} from 'react-dom'. const {pending} = useFormStatus(). Musi być child formularza. Disabled button gdy pending. useActionState (React 19): const [state, action] = useActionState(createPost, initialState). form action={action}. Zwraca state z akcji. Error handling: try/catch w akcji. Return {error: message}. Display w komponencie. Revalidacja: revalidatePath('/posts'). revalidateTag('posts'). redirect('/posts'). Optimistic UI z useOptimistic: const [optimisticPosts, addOptimisticPost] = useOptimistic(posts). addOptimisticPost(newPost). Natychmiastowy update. Rollback gdy błąd. Walidacja: zod.parse(formData). Return errors jako obiekt. Wyświetl per field. Cookies w Server Actions: import {cookies} from 'next/headers'. cookies().set('token', value). Bezpieczne. Server tylko. Bezpieczeństwo: automatyczny CSRF protection. Nie wystawiaj sensitywnych danych. Autoryzacja per akcja. Composability: akcje importuj i wywołuj z innych akcji.",
  },
];

const routingFeatures = [
  { funkcja: "Parallel Routes (@folder)", typ: "Layout Pattern", opis: "Wiele stron jednocześnie, niezależna nawigacja i loading" },
  { funkcja: "Intercepting Routes ((.))", typ: "UX Pattern", opis: "Modal z URL, soft nav = modal, hard nav = pełna strona" },
  { funkcja: "Route Groups ((folder))", typ: "Organizacja", opis: "Grupowanie bez URL, wiele layoutów, co-location" },
  { funkcja: "Middleware (Edge)", typ: "Request Pipeline", opis: "Auth, i18n, A/B testing, rate limiting — V8 isolates" },
  { funkcja: "Server Actions", typ: "Mutations", opis: "Formularze bez API, 'use server', revalidatePath" },
  { funkcja: "Template.tsx", typ: "Layout Variant", opis: "Nowa instancja per nawigacja, animacje wejścia" },
];

export default function BlogNextjsRoutingAdvCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Next.js Parallel Routes, Intercepting Routes i Server Actions — zaawansowany routing 2024 | Fotz.pl"
        description="Next.js App Router zaawansowany: Parallel Routes (@folder slots), Intercepting Routes (modal pattern), Route Groups, Middleware edge runtime i Server Actions z useActionState."
        canonicalUrl="https://fotz.pl/blog/nextjs-parallel-routes-intercepting-routes-slots-modals-advanced-2024"
      />
      <ArticleSchema
        title="Next.js Parallel Routes, Intercepting Routes i Server Actions — zaawansowany routing 2024?"
        description="Next.js App Router: Parallel Routes (@folder), Intercepting Routes (modal pattern), Route Groups, Middleware edge, Server Actions z useActionState i useOptimistic."
        url="https://fotz.pl/blog/nextjs-parallel-routes-intercepting-routes-slots-modals-advanced-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Next.js Routing Advanced 2024", url: "https://fotz.pl/blog/nextjs-parallel-routes-intercepting-routes-slots-modals-advanced-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Next.js Routing Advanced 2024", href: "/blog/nextjs-parallel-routes-intercepting-routes-slots-modals-advanced-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Next.js / App Router / Routing / Server Actions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Next.js Routing Advanced
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Parallel Routes (@folder), Intercepting Routes (modal),
              Route Groups, Middleware edge i Server Actions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Równoległe", value: "Parallel Routes" },
                { label: "Modale", value: "Intercepting" },
                { label: "Organizacja", value: "Route Groups" },
                { label: "Mutacje", value: "Server Actions" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-violet-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Next.js App Router — zaawansowane funkcje routingu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Parallel Routes, Intercepting Routes, Route Groups, Middleware, Server Actions
              i Template — typ i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {routingFeatures.map((f, i) => (
                  <tr key={f.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.opis}</td>
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
