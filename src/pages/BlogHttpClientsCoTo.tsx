import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Fetch API — nowoczesne zapytania HTTP w TypeScript?",
    answer: "Fetch API: natywny browser + Node.js 18+. Zero dependencies. Standard W3C. Podstawy TypeScript: const response = await fetch('https://api.example.com/users'). if (!response.ok) throw new Error('HTTP error ' + response.status). const data = await response.json() as User[]. Type safety: response.json() zwraca Promise any. Cast: as User[]. Lub Zod parse: const users = UserArraySchema.parse(await response.json()). POST z body: await fetch('/api/users', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({name, email})}). AbortController: const controller = new AbortController(). fetch(url, {signal: controller.signal}). controller.abort(). Timeout: const timeout = setTimeout(() => controller.abort(), 5000). Obsługa błędów: sieciowe (throw) vs HTTP errors (response.ok). Zawsze sprawdź response.ok. Streaming: response.body — ReadableStream. for await (const chunk of response.body) { ... }. Przydatne dla dużych plików. SSE: EventSource lub fetch streaming. Cookies: credentials: 'include'. CORS z cookies. same-origin dla same-domain. Node.js 18+: undici pod spodem. fetch globalny. Brak polyfill. Starsze: node-fetch biblioteka. Request/Response cache: cache option. Next.js rozszerza fetch. cache: 'no-store' lub 'force-cache'. Zapis do cache. revalidate.",
  },
  {
    question: "Axios — features, interceptory i TypeScript generics?",
    answer: "Axios: najpopularniejszy HTTP client. Interceptory. Request/response transform. Browser + Node.js. Automatyczny JSON. Instalacja: npm install axios. TypeScript generics: const {data} = await axios.get('/api/users'). Typowane automatycznie. Lub axios.get('/api/user'). data jest User. Instancja: const api = axios.create({baseURL: 'https://api.example.com', timeout: 10000, headers: {'Authorization': 'Bearer ' + token}}). Interceptory: api.interceptors.request.use((config) => { config.headers.Authorization = getToken(). return config }). Response interceptor: api.interceptors.response.use(null, (error) => { if (error.response?.status === 401) redirect('/login'). return Promise.reject(error) }). Error handling: axios.isAxiosError(error). error.response — serwer odpowiedział. error.request — brak odpowiedzi. error.message — setup error. AxiosError typed. Cancel request: AbortController (nowe). Lub CancelToken (deprecated). axios.isCancel(error). Progress: onUploadProgress, onDownloadProgress. File upload. CSRF: xsrfHeaderName, xsrfCookieName. Automatyczne. FormData: axios.post(url, formData). Automatyczny Content-Type. Upload pliku. Retry: axios-retry biblioteka. axiosRetry(axios, {retries: 3}). Exponential backoff. Custom retry condition. Porównanie z fetch: Axios — interceptors, transforms, Node <18. Fetch — natywny, mniejszy bundle, streaming lepszy. Trend: fetch rośnie (Node 18+). Axios nadal popular dla interceptors.",
  },
  {
    question: "ky i ofetch — nowoczesne fetch wrappery?",
    answer: "ky: nowoczesny fetch wrapper. Sindre Sorhus. ESM only. Mały (2KB). API podobny do fetch. Instalacja: npm install ky. Podstawy: import ky from 'ky'. const data = await ky.get('https://api.example.com/users').json(). Lub: const data = await ky('/api/users', {method: 'GET'}).json(). Auto-retry: const data = await ky.get(url, {retry: {limit: 3, methods: ['get'], statusCodes: [429, 503]}, hooks: {beforeRetry: [async ({error, retryCount}) => { console.log('retry', retryCount) }]}}).json(). Timeout: timeout: 10000. Hooks: beforeRequest, beforeRetry, beforeError, afterResponse. Zamiast interceptorów. Errors: HTTPError (response, request). error.response dostępny. Prefixing: ky.extend({prefixUrl: 'https://api.example.com', headers: {Authorization: 'Bearer ' + token}}). Jak axios.create. JSON body: ky.post('/api/users', {json: {name: 'Jan'}}). Automatyczny Content-Type. ofetch: Nuxt team. Cross-platform. Auto-parse. TypeScript. npm install ofetch. Użycie: import {ofetch} from 'ofetch'. const data = await ofetch('/api/users'). Automatyczny JSON parse. Base URL: const api = ofetch.create({baseURL: 'https://api.example.com', headers: {Authorization: 'Bearer ' + token}}). onRequest, onResponse, onResponseError hooks. Error: FetchError. statusCode, data. Retry wbudowany. ofetch w Nuxt: $fetch (global). useFetch hook. SSR streaming. Który wybrać: ky — browser-focused, hooks. ofetch — SSR/Nuxt, universal. Axios — legacy, Node old versions, interceptors pattern.",
  },
  {
    question: "TanStack Query jako HTTP client — pattern i konfiguracja?",
    answer: "TanStack Query: data fetching + caching. Nie HTTP client sam w sobie. Ale zarządza stanem zapytań. Używaj z fetch, axios lub ky. Pattern: const {data, isLoading, error} = useQuery({queryKey: ['users'], queryFn: () => fetch('/api/users').then(r => r.json())}). QueryClient konfiguracja: const queryClient = new QueryClient({defaultOptions: {queries: {staleTime: 1000 * 60 * 5, gcTime: 1000 * 60 * 30, retry: 3, retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)}}}). prefetchQuery: queryClient.prefetchQuery({queryKey: ['users'], queryFn: fetchUsers}). SSR prefetch. Mutations: const mutation = useMutation({mutationFn: (newUser: User) => api.post('/users', {json: newUser}).json(), onSuccess: () => queryClient.invalidateQueries({queryKey: ['users']})}). optimisticUpdate. Global error handler: queryClient.setDefaultOptions({queries: {onError: (error) => toast.error('Błąd zapytania')}}). Suspense: useSuspenseQuery — rzuca Promise do Suspense. useQuery {enabled}: zapytanie warunkowe. enabled: !!userId. Dependent queries. Polling: refetchInterval: 5000. Pause when hidden. select: transformuj dane po fetch. select: (data) => data.filter(u => u.active). Memoizowane. Infinite queries: useInfiniteQuery. fetchNextPage. hasNextPage. Scroll to load more. Offline: networkMode: 'offlineFirst'. Paused queries. Retry gdy online.",
  },
  {
    question: "HTTP client best practices — error handling, retry i type safety?",
    answer: "Centralny HTTP client: jeden plik api.ts lub http.ts. Konfiguracja baseURL, auth, interceptors. Importuj wszędzie. Brak scattered fetch calls. TypeScript wrapper: type ApiResponse T = {data: T. status: number. headers: Headers}. async function apiGet(url: string): Promise ApiResponse T. Typowany response. Zod validation: const UserSchema = z.object({id: z.string(), name: z.string(), email: z.string().email()}). const user = UserSchema.parse(await api.get('/users/' + id).json()). Runtime type check. Error classes: class HttpError extends Error { constructor(public status: number, public data: unknown, message: string) { super(message) } }. class NetworkError extends Error. class TimeoutError extends Error. instanceof check. Error hierarchy. Retry z exponential backoff: function retry(fn: () => Promise T, retries = 3): Promise T. for (let i = 0; i... try { return await fn() } catch (e) { if (i === retries - 1) throw e. await sleep(1000 * 2 ** i) } }. Timeouts: AbortController + setTimeout. Lub ky timeout option. 30 sekund max. Krótszy dla crítico. Request deduplication: TanStack Query robi to automatycznie. Lub własna Map pending requests. Nie rób 2x tego samego request. Auth: Bearer token w interceptorze/hook. Refresh token flow. 401 -> refresh -> retry. nie duplicate refresh requests. Semaphore pattern. Monitoring: axios instance z duration measure. fetch duration tracking. Error reporting do Sentry. Slow requests alert. Environment: process.env.NEXT_PUBLIC_API_URL. Type-safe env z @t3-oss/env-nextjs. Validation przy starcie.",
  },
];

const httpClients = [
  { klient: "Fetch API", bundle: "0KB (natywny)", kiedy: "Node.js 18+, brak zależności, streaming, modern" },
  { klient: "Axios", bundle: "14KB (gzip: 5KB)", kiedy: "Interceptory, legacy Node.js, transform, formData" },
  { klient: "ky", bundle: "2KB (ESM)", kiedy: "Browser-focused, hooks, retry wbudowany, modern" },
  { klient: "ofetch", bundle: "3KB", kiedy: "SSR/Nuxt, universal, auto-parse, onResponse hooks" },
  { klient: "TanStack Query", bundle: "24KB", kiedy: "React + caching + sync server state, SWR-like" },
  { klient: "SWR (Vercel)", bundle: "8KB", kiedy: "React, proste, Next.js integration, lightweight" },
];

export default function BlogHttpClientsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="HTTP clients TypeScript | Fotz Studio"
        description="HTTP clients TypeScript 2024: Fetch API (natywny), Axios (interceptory), ky (2KB, hooks), ofetch (Nuxt/universal), TanStack Query (caching) — error…"
        canonicalUrl="https://fotz.pl/blog/http-clients-typescript-fetch-axios-ky-ofetch-tanstack-query-2024"

        keywords="HTTP clients TypeScript co to jest, HTTP clients TypeScript jak działa, HTTP clients TypeScript tutorial, HTTP clients TypeScript przykład, czym jest HTTP clients TypeScript, HTTP clients TypeScript dokumentacja, HTTP clients TypeScript przewodnik"

        canonical="https://fotz.pl/blog/http-clients-typescript-fetch-axios-ky-ofetch-tanstack-query-2024"
      />
      <ArticleSchema
        title="HTTP clients TypeScript — Fetch, Axios, ky, ofetch i TanStack Query 2024?"
        description="6 HTTP clients (Fetch/Axios/ky/ofetch/TanStack Query/SWR) — bundle size, TypeScript generics, interceptory, retry, Zod validation i best practices."
        url="https://fotz.pl/blog/http-clients-typescript-fetch-axios-ky-ofetch-tanstack-query-2024"
        datePublished="2024-11-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "HTTP Clients TypeScript", url: "https://fotz.pl/blog/http-clients-typescript-fetch-axios-ky-ofetch-tanstack-query-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "HTTP Clients TypeScript", url: "/blog/http-clients-typescript-fetch-axios-ky-ofetch-tanstack-query-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / HTTP / API
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              HTTP Clients TypeScript 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Fetch API (natywny), Axios (interceptory), ky (2KB, hooks),
              ofetch (universal) i TanStack Query (caching + sync).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Natywny", value: "Fetch" },
                { label: "Interceptory", value: "Axios" },
                { label: "Nowoczesny", value: "ky" },
                { label: "Caching", value: "TanStack Q" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 HTTP clients — bundle size i zastosowanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Fetch, Axios, ky, ofetch, TanStack Query i SWR —
              bundle size i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Klient</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {httpClients.map((c, i) => (
                  <tr key={c.klient} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{c.klient}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{c.bundle}</td>
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

      <RelatedArticles currentArticleId="http-clients-typescript-fetch-axios-ky-ofetch-tanstack-query-2024" />
      <ContactSection />
    </Layout>
  );
}
