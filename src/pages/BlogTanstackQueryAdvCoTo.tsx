import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "TanStack Query v5 — co nowego i migracja z v4?",
    answer: "TanStack Query v5 (2023-10): Tanner Linsley. Breaking changes + nowe features. Instalacja: npm install @tanstack/react-query@5. Główne zmiany v5: useQuery jeden obiekt zamiast dwóch. Wcześniej: useQuery(key, fn, options). Teraz: useQuery({queryKey: ['users'], queryFn: fetchUsers}). data: undefined zamiast data: null na start. isPending zamiast isLoading. isLoading = isPending && isFetching. Usunięto: cacheTime -> gcTime. isLoading renamed. remove() -> queryClient.removeQueries(). Automatyczne refetch: refetchOnWindowFocus. refetchOnReconnect. Granularne kontrole. Nowe features v5: useQuery status: 'pending' | 'error' | 'success'. Streaming z Suspense. Stable useSuspenseQuery. Stable useInfiniteQuery zmiany. Streamlined devtools. Optimistic updates uproszczone. TypeScript: pełne generyki. queryFn typed. QueryKey typed. select typed. Migracja: npx @tanstack/react-query-codemods@latest. Automatyczna część zmian. Sprawdź ręcznie. Devtools: import {ReactQueryDevtools} from '@tanstack/react-query-devtools'. QueryClientProvider client={queryClient}. ReactQueryDevtools initialIsOpen={false}. Floating button. Queries, cache, mutations widoczne. Domyślna konfiguracja: new QueryClient({defaultOptions: {queries: {staleTime: 60 * 1000, gcTime: 5 * 60 * 1000}}}). staleTime: jak długo dane są świeże. gcTime: jak długo cache (was cacheTime).",
  },
  {
    question: "TanStack Query v5 — prefetching, hydration i SSR?",
    answer: "Prefetching: pobierz przed nawigacją. await queryClient.prefetchQuery({queryKey: ['posts', id], queryFn: () => fetchPost(id)}). Link onMouseEnter — prefetch. React Router loader — prefetch. Server-side prefetch (Next.js): const queryClient = new QueryClient(). await queryClient.prefetchQuery({queryKey: ['posts'], queryFn: fetchPosts}). dehydrate(queryClient) — serialize. Client: HydrationBoundary state={dehydratedState}. Queries hydrated z serwera. Bez client waterfalls. Dehydrate / Hydrate: import {dehydrate, HydrationBoundary} from '@tanstack/react-query'. Server: const dehydratedState = dehydrate(queryClient). props.dehydratedState = dehydratedState. Client component: HydrationBoundary state={props.dehydratedState}. UseQuery działa od razu. Suspense: useSuspenseQuery — stable v5. Zawsze throws gdy pending. Suspense fallback wymagany. const {data} = useSuspenseQuery({queryKey: ['user'], queryFn: fetchUser}). Nie sprawdzaj loading. prefetchInfiniteQuery: dla infinite scroll. await queryClient.prefetchInfiniteQuery({queryKey: ['posts'], queryFn, initialPageParam: 0, getNextPageParam}). Placeholder data: placeholderData: (previousData) => previousData. keepPreviousData pattern. Podczas filtrowania. initialData vs placeholderData: initialData — w cache (staleTime). placeholderData — nie w cache. Prefetching routes: Router beforeLoad / loader. TanStack Router integracja.",
  },
  {
    question: "TanStack Query v5 — optimistic updates i mutations?",
    answer: "Mutations: useMutation({mutationFn: createPost}). const {mutate, mutateAsync, isPending, isError} = useMutation. mutate(newPost). Async: await mutateAsync(newPost). Optimistic Updates v5: onMutate: async (newPost) => { await queryClient.cancelQueries({queryKey: ['posts']}). const previousPosts = queryClient.getQueryData(['posts']). queryClient.setQueryData(['posts'], old => [...old, newPost]). return {previousPosts} }. onError: (err, newPost, context) => { queryClient.setQueryData(['posts'], context.previousPosts) }. onSettled: () => { queryClient.invalidateQueries({queryKey: ['posts']}) }. Invalidation: queryClient.invalidateQueries({queryKey: ['posts']}). Refetch wszystkich queries z tym kluczem. Exact: {queryKey: ['posts'], exact: true} — tylko ten klucz. Setowanie danych: queryClient.setQueryData(['post', id], updatedPost). Update cache bez fetch. setQueriesData: update wiele. updateQuery: queryClient.setQueryData(['posts'], posts => posts.map(p => p.id === id ? updatedPost : p)). Mutation state: mutate zmieniony post: post.id -> optimistic id. isPending: true podczas. isSuccess: po success. variables: dane które wysłałeś. context: return z onMutate. Global callbacks: new QueryClient({mutationCache: new MutationCache({onError: (error) => { toast.error(error.message) }})}). Retry: mutations: {retry: 3, retryDelay: 1000}.",
  },
  {
    question: "useInfiniteQuery — infinite scroll i pagination?",
    answer: "useInfiniteQuery v5: infinite scroll. Pagination. Cursor-based. Definicja: const {data, fetchNextPage, hasNextPage, isFetchingNextPage} = useInfiniteQuery({queryKey: ['posts'], queryFn: async ({pageParam}) => { return fetchPosts({cursor: pageParam, limit: 10}) }, initialPageParam: 0, getNextPageParam: (lastPage, allPages) => lastPage.nextCursor, getPreviousPageParam: (firstPage) => firstPage.prevCursor}). data.pages: array wszystkich stron. data.pageParams: array parametrów. Flattenuj: const allPosts = data?.pages.flatMap(p => p.posts) ?? []. Scroll detection: IntersectionObserver na ostatni element. ref={lastPostRef}. Observer callback: fetchNextPage(). react-intersection-observer: useInView. const {ref, inView} = useInView(). useEffect(() => { if (inView && hasNextPage) fetchNextPage() }, [inView, hasNextPage]). Bidirectional: fetchPreviousPage. hasPreviousPage. getPreviousPageParam wymagany. Virtualization + infinite: TanStack Virtual + useInfiniteQuery. Ładuj kolejne strony gdy scrollujesz. Nieskończona lista z wirtualizacją. maxPages: {maxPages: 3} — trzymaj tylko 3 strony w pamięci. Garbage collect stare. select transform: select: (data) => ({pages: data.pages.map(p => p.posts), pageParams: data.pageParams}). Uproszczone dane. Refetch: queryClient.invalidateQueries(['posts']). Refetchuje pierwszą stronę. Reszta automatycznie.",
  },
  {
    question: "TanStack Query — zaawansowane wzorce i integracja z Next.js?",
    answer: "Query Keys: string: ['posts']. Array: ['posts', userId]. Hierarchiczne: ['posts', userId, 'comments']. Obiekt: ['search', {q, page, sort}]. Zawsze array. Factory pattern: const postKeys = {all: ['posts'] as const, lists: () => [...postKeys.all, 'list'] as const, list: (filters: string) => [...postKeys.lists(), {filters}] as const, details: () => [...postKeys.all, 'detail'] as const, detail: (id: number) => [...postKeys.details(), id] as const}. Invalidate all posts: queryClient.invalidateQueries({queryKey: postKeys.all}). Invalidate specific: queryClient.invalidateQueries({queryKey: postKeys.detail(id)}). Select transform: useQuery({queryKey: ['user', id], queryFn: fetchUser, select: (data) => data.name}). Tylko subscrubujesz na name. Nie re-render przy innych zmianach. Dependent queries: const {data: user} = useQuery({queryKey: ['user'], queryFn: fetchUser}). const {data: posts} = useQuery({queryKey: ['posts', user?.id], queryFn: () => fetchUserPosts(user.id), enabled: !!user?.id}). Polling: refetchInterval: 5000. refetchIntervalInBackground: true. Window focus refetch: refetchOnWindowFocus: true (default). Stale Time: staleTime: Infinity — nigdy stale. staleTime: 0 — zawsze stale. Next.js App Router integracja: Server Component: prefetch. Client Component: useQuery. Shared queryClient na server. getServerSession + TanStack = auth + data pattern. next-query-params: URL state sync.",
  },
];

const queryFeatures = [
  { funkcja: "useSuspenseQuery", wersja: "v5 (stable)", opis: "Suspense-ready, throws during pending, cleaner code" },
  { funkcja: "Hydration / Dehydration", wersja: "v4+", opis: "SSR prefetch -> client hydration, zero waterfalls" },
  { funkcja: "Optimistic Updates", wersja: "v5 (uproszczone)", opis: "onMutate setQueryData, onError rollback" },
  { funkcja: "useInfiniteQuery v5", wersja: "v5", opis: "initialPageParam required, getNextPageParam, maxPages" },
  { funkcja: "Query Key Factory", wersja: "Best Practice", opis: "Hierarchiczne klucze, granularna invalidacja" },
  { funkcja: "select transform", wersja: "v4+", opis: "Transformuj dane, subskrypcja na część — mniej re-renders" },
];

export default function BlogTanstackQueryAdvCoTo() {
  return (
    <Layout>
      <SEOHead
        title="TanStack Query v5 zaawansowany — prefetching, Suspense, infinite scroll, SSR 2024 | Fotz.pl"
        description="TanStack Query v5: migracja z v4, useSuspenseQuery, SSR dehydration/hydration, optimistic updates, useInfiniteQuery, query key factory, select transform i Next.js integracja."
        canonicalUrl="https://fotz.pl/blog/tanstack-query-v5-prefetching-suspense-infinite-scroll-ssr-nextjs-2024"
      />
      <ArticleSchema
        title="TanStack Query v5 zaawansowany — prefetching, Suspense, infinite scroll, SSR 2024?"
        description="TanStack Query v5 advanced: useSuspenseQuery, SSR hydration, optimistic updates, useInfiniteQuery (maxPages), query key factory, select transform i Next.js App Router."
        url="https://fotz.pl/blog/tanstack-query-v5-prefetching-suspense-infinite-scroll-ssr-nextjs-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TanStack Query v5 2024", url: "https://fotz.pl/blog/tanstack-query-v5-prefetching-suspense-infinite-scroll-ssr-nextjs-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-amber-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "TanStack Query v5 2024", href: "/blog/tanstack-query-v5-prefetching-suspense-infinite-scroll-ssr-nextjs-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TanStack Query / v5 / React / SSR
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TanStack Query v5 Advanced
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              useSuspenseQuery, SSR hydration, optimistic updates,
              useInfiniteQuery i zaawansowane wzorce Next.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Async", value: "useSuspenseQ." },
                { label: "SSR", value: "Hydration" },
                { label: "Optymistyczne", value: "Mutations" },
                { label: "Scroll", value: "Infinite Q." },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">TanStack Query v5 — kluczowe funkcje</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              useSuspenseQuery, Hydration, Optimistic Updates, useInfiniteQuery,
              Key Factory i select — wersja i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wersja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {queryFeatures.map((f, i) => (
                  <tr key={f.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.wersja}</td>
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
