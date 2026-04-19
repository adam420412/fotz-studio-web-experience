import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co nowego w React 19 — use(), Actions i React Compiler?",
    answer: "React 19 (stabilny, grudzień 2024): use() hook — nowy, universalny hook. use(Promise) — odczytaj promise w renderze (z Suspense). use(Context) — alternatywa dla useContext, działa wewnątrz if/loops. Actions — funkcje async jako event handlers. Obsługują pending, error, optimistic updates automatycznie. useActionState(action, initialState) — stan + action w jednym. Zwraca: [state, dispatch, isPending]. Zastępuje useState + useTransition + ręczne zarządzanie. useFormStatus() — pending, data, method, action w komponencie dzieci form. Nie wymaga Context. useOptimistic(state, updateFn) — optymistyczne UI. Pokazuj stan przed odpowiedzią serwera. Automatyczny rollback przy błędzie. React Compiler (wcześniej: React Forget): automatyczne memoizowanie. Koniec ręcznego useMemo/useCallback. Statyczna analiza kodu — bezpieczna. Dostępny jako babel-plugin-react-compiler. ref jako prop (nie forwardRef): function Input({ref, ...props}) — działa w React 19. forwardRef nadal działa ale deprecated. Lepsze error reporting: Error Boundaries ulepszone. Component Stack w każdym errorze. hydration errors — dokładniejszy diff. document.title, meta, link — native support w komponentach (bez react-helmet). Preloading: preload(), preinit(), prefetchDNS() z react-dom. Resource hints bezpośrednio w React.",
  },
  {
    question: "useActionState i useFormStatus — jak zastąpić stary pattern?",
    answer: "Stary pattern (React 18): const [loading, setLoading] = useState(false). const [error, setError] = useState(null). const handleSubmit = async (e) => {e.preventDefault(); setLoading(true); try {await action()} catch(err) {setError(err)} finally {setLoading(false)}}. Nowy pattern (React 19): import {useActionState} from 'react'. async function submitAction(prevState, formData) {try {const result = await fetch(...); return {data: result, error: null}} catch (e) {return {data: null, error: e.message}}}. const [state, formAction, isPending] = useActionState(submitAction, {data: null, error: null}). form action={formAction}. Automatycznie: pending zarządzany. Error z poprzedniego stanu. FormData zamiast e.preventDefault(). useFormStatus(): import {useFormStatus} from 'react-dom'. function SubmitButton() {const {pending} = useFormStatus(). return button disabled={pending}. Musi być dzieckiem form, nie useFormStatus w samym formularzu. useOptimistic(): const [optimisticItems, addOptimistic] = useOptimistic(items, (state, newItem) => [...state, newItem]). Przy addOptimistic(newItem) — UI aktualizuje się natychmiast. Po zakończeniu akcji — stan synchronizuje się. Server Actions (Next.js + React 19): 'use server' directive. async function createPost(formData: FormData) {'use server'; await db.post.create(...)}. form action={createPost} — zero JavaScript w przeglądarce dla podstawowej interakcji. Revalidacja: revalidatePath('/posts') po mutacji.",
  },
  {
    question: "React Compiler — jak działa automatyczne memoizowanie?",
    answer: "React Compiler (Meta, 2024, wcześniej: React Forget): kompilator Babel/Webpack/Vite. Analiza statyczna kodu React. Automatycznie dodaje memoizowanie gdzie potrzebne. Działa bez zmian w kodzie. Cel: eliminacja potrzeby ręcznego memo/useMemo/useCallback. Jak działa: analizuje dependencies komponentu. Identyfikuje gdzie re-render jest niepotrzebny. Generuje zoptymalizowany kod JavaScript. Nie memoizuje gdy mogą być side effecty. Instalacja (Next.js 15+): experimental: {reactCompiler: true} w next.config. babel-plugin-react-compiler. vite-plugin-react-compiler dla Vite. eslint-plugin-react-compiler — walidacja kodu przed kompilacją. Reguły kompilatora: components i hooks muszą być pure (deterministyczne). Nie mutuj state bezpośrednio. Nie mutuj props. Nie mutuj wartości po renderze. Problemy z kompilacją: mutacja obiektów (np. array.push zamiast spread). useEffect bez dependencies. Biblioteki z side effects w renderze. Opt-out: 'use no memo' directive dla komponentu. React DevTools: React Compiler inspector — pokazuje co zostało zmemoizowane. Ikona Memo obok komponentu. Performance gains: mniejszy re-render tree. Eliminacja cascade rerenders. Główna korzyść: useMemo/useCallback w 95% przypadków zbędne. Hooks lint rules: react-hooks/exhaustive-deps nadal ważne dla useEffect. Compiler nie eliminuje potrzeby poprawnego useEffect.",
  },
  {
    question: "Suspense i Concurrent Features — jak działają w React 18/19?",
    answer: "Concurrent React: renderowanie przerywalne. Priorytetyzacja aktualizacji. Brak blokowania main thread. useTransition: const [isPending, startTransition] = useTransition(). startTransition(() => setQuery(value)). Nisko-priorytetowa aktualizacja. UI nie blokuje się. Suspense: Suspense fallback={loading}. Pokazuje fallback podczas ładowania danych/komponentu. Wymaga: Promise w use() lub lazy(). Streaming SSR (Next.js App Router): serwer streamuje HTML stopniowo. Suspense boundaries na serwerze. Partial Prerendering (PPR, Next.js 15): statyczna powłoka + dynamiczne streamy. Najlepsze z SSG + SSR. Error Boundaries: class ErrorBoundary extends React.Component. getDerivedStateFromError(). componentDidCatch(). React 19: lepsze hydration error messages. useDeferredValue: const deferredQuery = useDeferredValue(query). Laggy input — query aktualizuje się z opóźnieniem. Wizualne wskazanie stale content. React.lazy + Suspense: const Chart = lazy(() => import('./Chart')). Suspense lazy loading. Code splitting automatyczny. Preload nowy (React 19): import {preload} from 'react-dom'. preload('/heavy-lib.js', {as: 'script'}). Hints do przeglądarki przed renderem. Concurrent Mode gotowość bibliotek: React Query — tak. Zustand — tak. Redux Toolkit — tak. Jotai — tak. MobX — wymaga adaptera. Waterfall prevention: Promise.all w Server Components. parallel data fetching.",
  },
  {
    question: "React 19 w Next.js 15 — Server Actions, PPR i co-location?",
    answer: "Next.js 15 (Turbopack stabilny): Turbopack zamiast Webpack — 70% szybszy cold start. React 19 jako default. Server Actions stable. Partial Prerendering (experimental). Caching zmienione: fetch() nie cachuje domyślnie w Next.js 15. Musisz jawnie: {cache: 'force-cache'} lub unstable_cache. GET route handlers nie cachowane domyślnie. Co wymaga explicit opt-in do cache. Server Actions w Next.js 15: 'use server' na poziomie pliku lub funkcji. Mogą być wywoływane z Client Components. Form mutations + revalidatePath/revalidateTag. Automatyczny CSRF token (wbudowany). Nie wymagają API route. Turbopack: native w next dev (stable Next.js 15). Szybszy HMR. Nie wszystkie webpack pluginy kompatybilne. next build nadal Webpack (Turbopack build experimental). Async request APIs: cookies(), headers(), params, searchParams — teraz async. await cookies(), await headers(). Breaking change z Next.js 14. Instrumented Next.js: next/dist/client/instrumentation. App Router patterns: use client — interaktywne komponenty. use server — Server Actions. Layout sprawia że shared state przez Context. Parallel Routes: @slot konwencja. Intercepting Routes: (..) prefix. use cache (experimental): nowa dyrektywa. Zastępuje fetch cache options. Granular caching per function. React 19 + App Router tips: Server Components dla data fetching. Client Components dla interaktywność. Server Actions dla mutations. useOptimistic dla instant UI feedback.",
  },
];

const react19Features = [
  { feature: "use(Promise)", typ: "Hook", kiedy: "React 19", opis: "Odczytaj promise/context wewnątrz renders i warunków", status: "Stabilny" },
  { feature: "useActionState", typ: "Hook", kiedy: "React 19", opis: "Zarządzaj stanem akcji formularzy (pending, error, state)", status: "Stabilny" },
  { feature: "useFormStatus", typ: "Hook", kiedy: "React 19", opis: "Odczytaj status nadrzędnego formularza w dziecku", status: "Stabilny" },
  { feature: "useOptimistic", typ: "Hook", kiedy: "React 19", opis: "Optymistyczne aktualizacje UI z auto-rollback", status: "Stabilny" },
  { feature: "React Compiler", typ: "Compiler", kiedy: "React 19+", opis: "Automatyczne memoizowanie, brak ręcznego useMemo/useCallback", status: "Beta (opt-in)" },
  { feature: "ref jako prop", typ: "API", kiedy: "React 19", opis: "Przekazuj ref jak zwykły prop, bez forwardRef", status: "Stabilny" },
];

export default function BlogReact19CoTo() {
  return (
    <Layout>
      <SEOHead
        title="React 19 | Fotz Studio"
        description="React 19: use() hook, useActionState, useFormStatus, useOptimistic, React Compiler (auto-memoizing), ref jako prop, Server Actions i Next.js 15 Turbopack…"
        canonicalUrl="https://fotz.pl/blog/react-19-use-hook-useactionstate-compiler-server-actions-nextjs-15-2024"

        keywords="React 19 co to jest, React 19 jak działa, React 19 tutorial, React 19 przykład, czym jest React 19, React 19 dokumentacja, React 19 przewodnik"

        canonical="https://fotz.pl/blog/react-19-use-hook-useactionstate-compiler-server-actions-nextjs-15-2024"
      />
      <ArticleSchema
        title="React 19 — use(), useActionState, React Compiler, Server Actions i Next.js 15?"
        description="6 kluczowych nowości React 19 (use/useActionState/useFormStatus/useOptimistic/React Compiler/ref-prop) i Next.js 15 (Turbopack, PPR, async cookies/headers)."
        url="https://fotz.pl/blog/react-19-use-hook-useactionstate-compiler-server-actions-nextjs-15-2024"
        datePublished="2024-04-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React 19 nowości", url: "https://fotz.pl/blog/react-19-use-hook-useactionstate-compiler-server-actions-nextjs-15-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "React 19 nowości", href: "/blog/react-19-use-hook-useactionstate-compiler-server-actions-nextjs-15-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Next.js
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React 19 — Nowości i Zmiany
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              use(), useActionState, useOptimistic, React Compiler (auto-memoizing),
              ref jako prop i Server Actions w Next.js 15.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Universal hook", value: "use()" },
                { label: "Form state", value: "useActionState" },
                { label: "Auto-memo", value: "RC Compiler" },
                { label: "Fast builds", value: "Turbopack" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-sky-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nowości */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych nowości React 19</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              use(), useActionState, useFormStatus, useOptimistic, React Compiler i ref jako prop —
              typ, zastosowanie i status stabilności.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Nowość</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Od wersji</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Status</th>
                </tr>
              </thead>
              <tbody>
                {react19Features.map((f, i) => (
                  <tr key={f.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 font-mono text-xs">{f.feature}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.kiedy}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.opis}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.status}</td>
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

      <RelatedArticles currentArticleId="react-19-use-hook-useactionstate-compiler-server-actions-nextjs-15-2024" />
      <ContactSection />
    </Layout>
  );
}
