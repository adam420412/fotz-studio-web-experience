import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest TanStack Query (React Query) i dlaczego zastępuje useState + useEffect?",
    answer: "TanStack Query (dawniej React Query): biblioteka do zarządzania server state w React. Problem z useState + useEffect dla API calls: brak automatycznego cachowania. Brak deduplication requestów. Brak automatic refetch (po focus, po reconnect). Brak background refresh. Brak loading/error states zarządzanych globalnie. Brak pagination/infinite scroll helpers. TanStack Query rozwiązuje te wszystkie problemy. Kluczowe koncepty: Query: operacja odczytu danych (GET). useQuery(queryKey, queryFn). queryKey: unikalny identyfikator query (array). queryFn: async function zwracająca dane. Mutation: operacja zapisu (POST/PUT/DELETE). useMutation(mutationFn). Automatyczne features: Caching: dane cachowane po queryKey. Stale-while-revalidate: pokaż stale dane, odśwież w tle. Auto-refetch: po window focus, po network reconnect. Retry: automatyczne retry przy błędach (3 razy z backoff). Deduplication: ten sam queryKey -> jeden request. Background refetch: odśwież cache w tle. Loading states: isLoading, isFetching, isError, isSuccess. Devtools: @tanstack/react-query-devtools. Wizualizacja cache, queryów, stale time.",
  },
  {
    question: "TanStack Query — queryKey, staleTime, gcTime i cache invalidation?",
    answer: "queryKey: tablica identyfikująca query. ['users'] — lista użytkowników. ['users', userId] — konkretny user. ['users', {status: 'active', page: 1}] — filtrowanie. Granularna invalidacja: queryClient.invalidateQueries({queryKey: ['users']}) — inwaliduj wszystkie usery. queryClient.invalidateQueries({queryKey: ['users', userId]}) — tylko konkretny. staleTime: jak długo dane są 'świeże'. 0 (domyślny) — zawsze stale (zawsze refetch przy użyciu). Infinity — nigdy stale (refetch tylko manualnie). 5 * 60 * 1000 — 5 minut. gcTime (dawniej cacheTime): jak długo nieużywane dane w cache. 5 * 60 * 1000 (domyślny) — 5 minut. refetchInterval: polling (np. co 30 sekund). enabled: boolean — czy query jest aktywne. enabled={!!userId} — query tylko gdy userId dostępne. Prefetching: queryClient.prefetchQuery(['user', id], fetchUser). Np. na hover linku. Invalidation po mutation: onSuccess: () => queryClient.invalidateQueries({queryKey: ['users']}). Stary cache uważany za stale -> refetch. Optimistic Updates: onMutate — aktualizuj cache optymistycznie. onError — rollback jeśli mutation fail. onSettled — synchronizuj z serwerem. Pagination: keepPreviousData (v4) / placeholderData (v5). Infinite Query: useInfiniteQuery. getNextPageParam. fetchNextPage(). Wszystkie strony w pages array.",
  },
  {
    question: "useMutation i synchronizacja ze stanem serwera?",
    answer: "useMutation: dla operacji zapisu. const mutation = useMutation({mutationFn: (data) => api.createUser(data), onSuccess: (data, variables, context) => {...}, onError: (error, variables, context) => {...}, onSettled: (data, error, variables, context) => {...}}). Wywołanie: mutation.mutate(formData). mutation.mutateAsync(formData) — zwraca Promise. mutation.isPending, mutation.isError, mutation.isSuccess. Lifecycle callbacks: onSuccess — zapis do cache, invalidacja, toast. onError — error handling, rollback. onSettled — cleanup (zawsze). Optimistic Updates: onMutate: (variables) => {await queryClient.cancelQueries(['todos']). const previousTodos = queryClient.getQueryData(['todos']). queryClient.setQueryData(['todos'], old => [...old, {id: 'temp', ...variables}]). return {previousTodos}}. onError: (err, variables, context) => queryClient.setQueryData(['todos'], context.previousTodos). onSettled: () => queryClient.invalidateQueries(['todos']). Server-side mutations: Next.js Server Actions + useMutation. Formularz -> Server Action -> onSuccess -> invalidate. Form libraries: React Hook Form + useMutation. Zodios: Zod + axios + React Query. Full-stack type safety. tRPC + TanStack Query: automatycznie generowane hooki per endpoint. Type-safe end-to-end.",
  },
  {
    question: "TanStack Query w Next.js — SSR, hydration i Server Components?",
    answer: "TanStack Query z SSR: prefetch na serwerze -> hydrate na kliencie. Podejście 1 (pages router): getServerSideProps: await queryClient.prefetchQuery(...). dehydrate(queryClient) -> props. Client: HydrationBoundary + QueryClientProvider. Podejście 2 (app router): Server Components: fetchuj dane bezpośrednio (bez React Query). Client Components: używaj React Query dla interaktywnych danych. Prefetch w Server Component: await queryClient.prefetchQuery(['users'], fetchUsers). <HydrationBoundary state={dehydrate(queryClient)}>. Zalety: dane dostępne natychmiast po hydration (bez loading spinner). SEO-friendly. Streaming z React Suspense: Suspense boundary + useQuery. Dane streamowane z serwera. Initial data nie jest undefined. Next.js cache (app router): fetch() z {cache: 'force-cache'} — cache na serwerze. React Query cache — cache po stronie klienta. Dwa oddzielne poziomy cache. Stale time config: 0 dla server-critical. Infinity dla static data. Podejście hybrydowe 2024: Server Components dla static data (SEO, first load). Client Components + React Query dla interactive/real-time data. Nie używaj React Query w Server Components — use fetch() directly.",
  },
  {
    question: "TanStack Query DevTools i testowanie — jak debugować?",
    answer: "TanStack Query DevTools: import {ReactQueryDevtools} from '@tanstack/react-query-devtools'. Wizualizacja: wszystkie aktywne queries. Stan per query (fetching/stale/fresh/inactive). Query data podgląd. Cache zawartość. Refetch per query. Invalidate per query. Filtrowanie queryów. Konfiguracja: domyślnie tylko w development. buttonPosition 'bottom-right' | 'bottom-left'. initialIsOpen — otwarte przy start. Custom logger: QueryClient({defaultOptions: {queries: {onError: (err) => logger.error(err)}}}). Logging w mutations: onError na poziomie QueryClient. Testing TanStack Query: React Testing Library + jest. mockServiceWorker (MSW) — interceptuj HTTP requests. Zamiast mockować fetch — MSW zwraca właściwe dane. Testy komponentów: renderWithClient — wrapper z QueryClient. waitFor — poczekaj na async operation. screen.findByText — async query. QueryClient per test — nie współdziel stanu. Jest mock: jest.mock('react-query', ...) — rzadko używaj. MSW jest lepszy. TanStack Query hooks testing: renderHook({wrapper: createWrapper()}). Błędy w testach: QueryCache: silent mode w testach. console.error mock. Error boundary w testach. Performance: React DevTools Profiler. Why did I render? npm package. Avoid getQueryData w render — może powodować niepotrzebne subskrypcje.",
  },
];

const queryFeatures = [
  { funkcja: "Automatic Caching", opis: "Dane cachowane po queryKey, reużywane między komponentami", konfiguracja: "staleTime, gcTime", domyslnie: "0ms staleTime, 5min gcTime" },
  { funkcja: "Background Refetch", opis: "Odśwież dane w tle gdy okno dostaje focus lub sieć wraca", konfiguracja: "refetchOnWindowFocus, refetchOnReconnect", domyslnie: "true" },
  { funkcja: "Automatic Retry", opis: "Ponów żądanie przy błędach z exponential backoff", konfiguracja: "retry, retryDelay", domyslnie: "3 retries" },
  { funkcja: "Deduplication", opis: "Ten sam queryKey = jeden request, wiele subskrybentów", konfiguracja: "Automatyczne", domyslnie: "Zawsze" },
  { funkcja: "Optimistic Updates", opis: "Natychmiastowa aktualizacja UI przed potwierdzeniem serwera", konfiguracja: "onMutate + rollback", domyslnie: "Manualne" },
  { funkcja: "Infinite Queries", opis: "Pagination i infinite scroll z useInfiniteQuery", konfiguracja: "getNextPageParam, fetchNextPage", domyslnie: "Wbudowane" },
];

export default function BlogTanstackQueryCoTo() {
  return (
    <Layout>
      <SEOHead
        title="TanStack Query (React Query) — co to jest, cache, useMutation, Next.js SSR | Fotz.pl"
        description="TanStack Query: queryKey, staleTime, gcTime, useMutation, optimistic updates, infinite query, Next.js SSR hydration i DevTools."
        canonicalUrl="https://fotz.pl/blog/tanstack-query-react-query-co-to-jest-cache-usemutation-nextjs-ssr"
      />
      <ArticleSchema
        title="TanStack Query (React Query) — co to jest, cache, useMutation, Next.js SSR?"
        description="TanStack Query: 6 funkcji (caching/background refetch/retry/deduplication/optimistic updates/infinite queries), queryKey, useMutation, SSR i DevTools."
        url="https://fotz.pl/blog/tanstack-query-react-query-co-to-jest-cache-usemutation-nextjs-ssr"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TanStack Query", url: "https://fotz.pl/blog/tanstack-query-react-query-co-to-jest-cache-usemutation-nextjs-ssr" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-orange-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "TanStack Query", href: "/blog/tanstack-query-react-query-co-to-jest-cache-usemutation-nextjs-ssr" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Data Fetching
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TanStack Query
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zastąp useState + useEffect dla API calls — automatyczne caching,
              background refetch, optimistic updates i SSR hydration w Next.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Server state", value: "useQuery" },
                { label: "Zapis danych", value: "useMutation" },
                { label: "Cache key", value: "queryKey" },
                { label: "SSR ready", value: "HydrationBoundary" },
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

      {/* Funkcje */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych funkcji TanStack Query</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Automatyczne zarządzanie server state — od cachowania przez background refresh
              po optimistic updates i infinite scroll.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {queryFeatures.map((f) => (
              <FadeInView key={f.funkcja}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{f.funkcja}</h3>
                  <p className="text-gray-700 text-sm mb-2">{f.opis}</p>
                  <p className="text-xs text-red-700 font-medium mb-1">Konfiguracja: {f.konfiguracja}</p>
                  <p className="text-xs text-gray-500">Domyślnie: {f.domyslnie}</p>
                </div>
              </FadeInView>
            ))}
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
