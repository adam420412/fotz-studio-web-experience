import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Error Boundaries w React — jak chronić komponenty przed crashem?",
    answer: "Error Boundary: komponent łapiący błędy w drzewie potomnym. Klasa komponenty (hooks brak!). componentDidCatch — obsługa błędu. getDerivedStateFromError — aktualizuj state. Podstawowy Error Boundary: class ErrorBoundary extends React.Component { state = {hasError: false, error: null}. static getDerivedStateFromError(error) { return {hasError: true, error} }. componentDidCatch(error, errorInfo) { logToSentry(error, errorInfo.componentStack) }. render() { if (this.state.hasError) return this.props.fallback || div Something went wrong /div. return this.props.children } }. Użycie: ErrorBoundary fallback={ErrorFallback}. Dashboard /. /ErrorBoundary. Kiedy NIE łapie: Async errors (fetch, setTimeout) — użyj try/catch. Event handlers — użyj try/catch. SSR errors — Next.js error.tsx. Granularne Error Boundaries: Wrap tylko krytyczne sekcje. Nie cała aplikacja w jednym EB. Fallback per sekcja. react-error-boundary (zalecana biblioteka): npm install react-error-boundary. import {ErrorBoundary, useErrorBoundary} from 'react-error-boundary'. Hooki: useErrorBoundary(). const {showBoundary} = useErrorBoundary(). showBoundary(error) — rzuć błąd z async. Obsługa async! FallbackComponent: const ErrorFallback = ({error, resetErrorBoundary}) => div. Przycisk reset. error.message. Retry logic. onReset prop. Reset na navigation z resetKeys prop. React 19 — use() + Suspense + Error boundary: Pełny pattern async.",
  },
  {
    question: "Obsługa błędów asynchronicznych — fetch, API i TanStack Query?",
    answer: "try/catch w async: try { const data = await fetchUsers() } catch (error) { if (error instanceof TypeError) { setError('Network error') } else if (error instanceof ApiError) { setError(error.message) } }. Typed errors: class ApiError extends Error { constructor(public status: number, message: string) { super(message). this.name = 'ApiError' } }. async function fetchUser(id: string): Promise(User) { const res = await fetch('/api/users/' + id). if (!res.ok) { throw new ApiError(res.status, await res.text()) } return res.json() }. Result pattern (bez throw): type Result(T, E = Error) = {ok: true, value: T} | {ok: false, error: E}. async function safeRequest(url: string): Promise(Result(Response)) { try { const res = await fetch(url). return {ok: true, value: res} } catch (e) { return {ok: false, error: e as Error} } }. TanStack Query error handling: const {data, error, isError} = useQuery({queryKey: ['user', id], queryFn: () => fetchUser(id)}). if (isError) return ErrorComponent error={error}. error typed jako Error. onError callback (deprecated v5). TanStack Query v5 error: throwOnError: true — rzuć do Error Boundary. meta.errorHandler. Global error handling: queryClient.setDefaultOptions({queries: {retry: 1, onError: (error) => logError(error)}}). useMutation error: mutation.error. onError callback. isError state. Axios interceptors: axios.interceptors.response.use(null, error => { if (error.response?.status === 401) redirectToLogin(). return Promise.reject(error) }).",
  },
  {
    question: "Sentry — integracja error tracking z React?",
    answer: "Sentry: error monitoring SaaS. npm install @sentry/react. Inicjalizacja (main.tsx/index.tsx): import * as Sentry from '@sentry/react'. Sentry.init({dsn: process.env.REACT_APP_SENTRY_DSN, environment: process.env.NODE_ENV, integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()], tracesSampleRate: 0.1, replaysSessionSampleRate: 0.1}). Sentry Error Boundary: import {withSentryReactRouterV6Routing} from '@sentry/react'. Sentry.ErrorBoundary: fallback={({error, resetError}) => div. Automatycznie raportuje błąd. Context: Sentry.setUser({id: userId, email}). Sentry.setTag('feature', 'checkout'). Sentry.setContext('order', {id: orderId, total}). Manualne raportowanie: try {...} catch (error) { Sentry.captureException(error). setError(error) }. Sentry.captureMessage('Warn: slow request'). Performance: Sentry.startTransaction({name: 'checkout', op: 'navigation'}). Source maps: sentry-cli upload-source-maps. Lub @sentry/webpack-plugin. Fingerprinting: grouping podobnych błędów. Alerts: Slack, email, PagerDuty. Threshold-based (np. 10 errors/min). Sentry Session Replay: Record user interactions. Reprodukcja błędu step-by-step. Maskowanie PII automatyczne. Next.js Sentry: @sentry/nextjs. npx @sentry/wizard@latest -i nextjs. Automatyczna konfiguracja. Error pages owinięte. Ignorowanie błędów: ignoreErrors: [/ResizeObserver loop/]. Zbyt wiele false positives. Filtering.",
  },
  {
    question: "Global error handling i React error patterns?",
    answer: "Global window.onerror: window.addEventListener('unhandledrejection', (event) => { logError(event.reason). event.preventDefault() }). Łapie Promise rejections. Uzupełnienie Error Boundary. window.onerror — synchroniczne błędy. Toasty dla błędów: sonner lub react-hot-toast. toast.error(error.message). Nie przerywaj UX — tylko informuj. Sentry + toast: Sentry.captureException(error). toast.error('Coś poszło nie tak'). User feedback: Sentry User Feedback. dialog po błędzie. Komentarz od użytkownika. Retry mechanisms: exponential backoff. const retry = async (fn, retries = 3, delay = 1000) => { for (let i = 0; i... await new Promise(r => setTimeout(r, delay * 2 ** i)). try { return await fn() } catch(e) { if (i === retries-1) throw e } }. TanStack Query retry: retry: 3. retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000). Error hierarchy: BaseError extends Error. NetworkError extends BaseError. AuthError extends BaseError. ValidationError extends BaseError. Structured catch: instanceof check. Różne handling per type. TypeScript narrowing. Error boundaries + fallback UI: SkeletonFallback dla loading. ErrorFallback z retry button. ResetBoundary — klucz zmienia się przy nawigacji. Stale state problem. Accessibility dla błędów: role='alert' na error messages. aria-live='polite' dla async errors. focus management po błędzie. Formularze: error per field. aria-describedby dla error message. pattern — client validation. Nie tylko serwer-side.",
  },
  {
    question: "Error handling w Next.js — error.tsx, not-found.tsx i middleware?",
    answer: "App Router error files: error.tsx — per route segment error boundary. global-error.tsx — root level fallback. not-found.tsx — 404 strona. loading.tsx — Suspense fallback. error.tsx: 'use client'. export default function Error({error, reset}: {error: Error & {digest?: string}, reset: () => void}) { return div h2 Coś poszło nie tak /h2. button onClick={reset} Spróbuj ponownie /button /div }. error.digest — ID błędu (server-side). reset() — retry render. global-error.tsx: Łapie błędy root layout. Zawiera html i body! Ostatni fallback. not-found.tsx: notFound() — throw z Server Component. 404 status automatycznie. Custom 404 per segment. Server Component errors: Rzucone w Server Component -> error.tsx. try/catch w Server Action: return {error: message}. Nie throw — klient musi obsłużyć. Pages Router: _error.tsx — custom error page. _app.tsx z ErrorBoundary dla client errors. getServerSideProps — throw przekieruje do _error. API Routes error: return res.status(400).json({error: message}). HTTP status codes semantyczne. Middleware error handling: next.config.ts — error redirects. Custom 404/500 pages. Redirect przy błędzie auth. Structured API errors: { code: 'VALIDATION_ERROR', message: 'Invalid email', details: {field: 'email', value: 'invalid'} }. Konsystentny format. Łatwy frontend handling. zod.safeParse().error.flatten() dla walidacji. Monitoring: Sentry + Next.js — auto integration. Server Components errors — server-side capture. Client errors — client-side capture.",
  },
];

const errorPatterns = [
  { wzorzec: "Error Boundary", typ: "Renderowanie", zastosowanie: "Izoluj sekcje — brak crash całej strony" },
  { wzorzec: "react-error-boundary", typ: "Biblioteka", zastosowanie: "Async errors, resetKeys, FallbackComponent" },
  { wzorzec: "try/catch + typed errors", typ: "Async", zastosowanie: "Fetch, API — ApiError, NetworkError instanceof" },
  { wzorzec: "Result pattern", typ: "Functional", zastosowanie: "Brak throw — {ok: true, value} | {ok: false, error}" },
  { wzorzec: "TanStack Query throwOnError", typ: "Data fetching", zastosowanie: "Propaguj błąd do Error Boundary" },
  { wzorzec: "Sentry + global handler", typ: "Monitoring", zastosowanie: "Capture wszystkich błędów — unhandledrejection" },
];

export default function BlogReactErrorHandlingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Error handling w React | Fotz Studio"
        description="Error handling React: Error Boundary (react-error-boundary), typed errors, Result pattern, TanStack Query throwOnError, Sentry integracja i Next.js…"
        canonicalUrl="https://fotz.pl/blog/react-error-handling-error-boundary-sentry-tanstack-query-nextjs-2024"

        keywords="Error handling w React co to jest, Error handling w React jak działa, Error handling w React tutorial, Error handling w React przykład, czym jest Error handling w React, Error handling w React dokumentacja, Error handling w React przewodnik"

        canonical="https://fotz.pl/blog/react-error-handling-error-boundary-sentry-tanstack-query-nextjs-2024"
      />
      <ArticleSchema
        title="Error handling w React — Error Boundary, Sentry, TanStack Query i Next.js error.tsx 2024?"
        description="6 wzorców error handling (Error Boundary/react-error-boundary/try-catch/Result pattern/TanStack Query/Sentry) — async errors, typed errors, Next.js App Router i monitoring."
        url="https://fotz.pl/blog/react-error-handling-error-boundary-sentry-tanstack-query-nextjs-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Error Handling", url: "https://fotz.pl/blog/react-error-handling-error-boundary-sentry-tanstack-query-nextjs-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-orange-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "React Error Handling", href: "/blog/react-error-handling-error-boundary-sentry-tanstack-query-nextjs-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Error Handling / Sentry
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Error Handling w React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Error Boundary (react-error-boundary), typed errors, Result pattern,
              TanStack Query, Sentry i Next.js error.tsx.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Izolacja", value: "Error Boundary" },
                { label: "Monitoring", value: "Sentry" },
                { label: "Data fetching", value: "TanStack Query" },
                { label: "Next.js", value: "error.tsx" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wzorców error handling w React</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Error Boundary, react-error-boundary, try/catch, Result pattern, TanStack Query i Sentry —
              typ, zastosowanie i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wzorzec</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zastosowanie</th>
                </tr>
              </thead>
              <tbody>
                {errorPatterns.map((p, i) => (
                  <tr key={p.wzorzec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.wzorzec}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.zastosowanie}</td>
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
