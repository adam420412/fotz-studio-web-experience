import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są React Server Components (RSC) i jak różnią się od Client Components?",
    answer: "React Server Components (RSC): komponenty renderowane wyłącznie na serwerze (React 18+, stabilne w Next.js App Router). Kluczowe różnice: Server Components — renderowane na serwerze, brak hydratacji, brak JS wysyłanego do klienta, dostęp do bazy danych/fs/secrets bezpośrednio, async/await natywnie. Client Components — 'use client' dyrektywa, hydratowane w przeglądarce, interaktywność (useState, useEffect, event handlers), dostęp do browser APIs (localStorage, window). RSC streaming: HTML streamowany z serwera zanim wszystkie dane gotowe. React Suspense boundary dla loading states. Waterfall requests eliminowane (parallel fetching na serwerze). Next.js App Router domyślnie: wszystkie komponenty Server Components. Dodaj 'use client' dla interaktywności. Kompozycja: Server Component może renderować Client Component. Client Component nie może renderować Server Component bezpośrednio (ale może przez slot/children). Zalety RSC: mniejszy bundle JS (logika na serwerze). Brak client-side waterfalls. Bezpieczny dostęp do DB i secrets. Lepszy SEO (HTML z serwera). Wady RSC: nowy mental model. Nie wszystkie biblioteki kompatybilne. Debugging trudniejszy. Vendor lock-in (Vercel/Next.js).",
  },
  {
    question: "Server Actions — co to jest i jak zastępują API routes?",
    answer: "Server Actions (Next.js 14+, stabilne): asynchroniczne funkcje uruchamiane na serwerze wywoływane z klienta. 'use server' dyrektywa — oznacza funkcję lub cały plik jako Server Action. Jak działają: Next.js generuje endpoint automatycznie. Klient wysyła POST request. Serwer uruchamia funkcję. Revalidacja cache. Podstawowy use case — formularz bez API route: async function createPost(formData: FormData) {'use server'. const title = formData.get('title'). await db.post.create({data: {title}}). revalidatePath('/posts')}. Wywołanie z Server Component: form action={createPost}. Wywołanie z Client Component: const [state, action] = useActionState(createPost, initialState). Zalety Server Actions: brak osobnego API route dla prostych mutacji. Type-safe (TypeScript end-to-end). Progressive enhancement (działa bez JS). Revalidation wbudowana (revalidatePath, revalidateTag). Dostęp do cookies, headers, auth. Wady Server Actions: tylko dla prostych mutacji. Brak streaming response. Trudniejsze testowanie. useOptimistic: optymistyczne aktualizacje UI przed zakończeniem Action. const [optimisticList, addOptimistic] = useOptimistic(list). startTransition(() => addOptimistic(newItem), action(newItem)). Server Actions + Zod: walidacja input na serwerze. safe-action lub next-safe-action — type-safe Server Actions wrapper.",
  },
  {
    question: "Partial Prerendering (PPR) — nowe podejście do rendering w Next.js 15?",
    answer: "Partial Prerendering (PPR): eksperymentalna funkcja Next.js 15 łącząca static i dynamic rendering w jednej stronie. Strona ma statyczną powłokę (shell) prerendered + dynamiczne 'dziury' (holes) wypełniane streaming. Przykład: shell (nav, header, static content) — prerendered natychmiast. Dynamic parts (feed, recommendations) — streamowane gdy gotowe. Jak włączyć: experimental.ppr: true w next.config.ts. export const experimental_ppr = true per page. Suspense boundaries określają dynamic boundaries. Porównanie rendering strategies Next.js: Static Generation (SSG) — build time, cache forever, najszybszy. ISR (Incremental Static Regeneration) — regeneracja per request po TTL. SSR — per request, zawsze fresh. PPR — static shell + dynamic streaming. Streaming SSR: React.Suspense + Server Components. Waterfall eliminated. First Byte szybki (shell). Data fetching parallel. Dynamic IO (Next.js 15+): unstable_noStore() — opt-out of caching. use cache — eksperymetnalne nowe caching API. cacheTag(), cacheLife(). fetch() caching: {cache: 'force-cache'} — static. {cache: 'no-store'} — dynamic. {next: {revalidate: 60}} — ISR. {next: {tags: ['posts']}} — tag-based invalidation. revalidateTag('posts') — server action revalidation.",
  },
  {
    question: "React 19 — co nowego i jak wpływa na Server Components?",
    answer: "React 19 (stabilne 2024): Actions — async functions jako form actions. useOptimistic — optymistyczne UI updates. useFormStatus — stan formularza. useFormState (przemianowane na useActionState). use() — nowy hook do czytania Promise i Context. Nowe: ref jako prop (nie forwarded). Document metadata (title, meta w komponentach). Stylesheet management. Resource preloading (preload, prefetchDNS). Error recovery improvements. Actions w React 19 (nie Server Actions): async transitions. isPending z useTransition. Automatyczne error handling. Pełna integracja z Suspense. use() hook: const data = use(fetchDataPromise). W render — suspenduje komponent jeśli Promise pending. use(Context) zamiast useContext. Server Components w React 19: ulepszone error messages. Better devtools support. Concurrent features improvements. React Compiler (Project Saturn): automatyczna memoizacja (zastępuje useMemo/useCallback). Kompilator analizuje kod i optymalizuje. Stabilny w React 19. Opt-in: 'use memo' dyrkytywa (podobna do 'use client'). Co NIE jest w React 19: Server Components nie są oficjalnie w React (są w bundlerze/frameworku). Signals — React nie implementuje (alternatywy: Solid, Vue, Angular Signals). Resumability (XState, Qwik mają). React 18 concurrent mode nadal podstawą.",
  },
  {
    question: "Next.js App Router vs Pages Router — kiedy migrować?",
    answer: "Pages Router (legacy, nadal wspierany): pages/ directory. getServerSideProps, getStaticProps, getStaticPaths. API routes w pages/api/. _app.tsx, _document.tsx. Dobrze znany, stabilny. App Router (Next.js 13+, stabilny od 14): app/ directory. Server Components domyślnie. Server Actions. Layouts zagnieżdżone. Loading, Error, Not-found boundaries. Parallel routes ((@folder)). Intercepting routes. Metadata API. Nowe caching behaviour. Kiedy migrować na App Router: nowe projekty -> App Router domyślnie. Istniejące projekty: stopniowa migracja (można mieć app/ i pages/ razem). Kiedy NIE migrować: masz dużo getServerSideProps logiki. Biblioteki niekompatybilne (sprawdź). Skomplikowany projekt bez budżetu na migrację. Pułapki App Router: caching agresywny (zmiany w Next.js 15 — domyślnie no-cache). Nie wszystkie React hooks w Server Components. Kontekst (Context API) tylko w Client Components. Provider patterns muszą być w Client Components. useRouter z 'next/navigation' (nie 'next/router'). Turbopack (Next.js 14+): szybszy HMR. Rust-based bundler. --turbo flag. Produkcja: w trakcie stabilizacji. Next.js 15 zmiany: React 19. Partial Prerendering stabilniejszy. Async Request APIs (cookies, headers jako Promise). Dynamic IO. Improved caching defaults.",
  },
];

const renderingStrategies = [
  { strategia: "Static Generation (SSG)", timing: "Build time", cache: "Forever (CDN)", dynamiczne: "Nie", ttfb: "Najszybszy", kiedy: "Blog, landing page, docs (niezmienne dane)" },
  { strategia: "ISR (Incremental SR)", timing: "Build + revalidate", cache: "TTL-based", dynamiczne: "Częściowo", ttfb: "Szybki", kiedy: "E-commerce (ceny zmieniają się rzadko)" },
  { strategia: "SSR (Server-Side Render)", timing: "Per request", cache: "Brak / krótki", dynamiczne: "Tak", ttfb: "Wolny", kiedy: "Personalizowana treść, real-time data" },
  { strategia: "React Server Components", timing: "Per request (streaming)", cache: "Granular (fetch cache)", dynamiczne: "Tak + streaming", ttfb: "Szybki (shell)", kiedy: "App Router default, async data fetching" },
  { strategia: "Partial Prerendering (PPR)", timing: "Build + stream", cache: "Shell statyczny", dynamiczne: "Holes streaming", ttfb: "Najszybszy + dynamic", kiedy: "Next.js 15+, static shell + dynamic content" },
  { strategia: "Client-Side Rendering (CSR)", timing: "Browser", cache: "Browser/CDN (JS)", dynamiczne: "Tak (po hydration)", ttfb: "Wolny (blank)", kiedy: "Dashboardy za loginem, real-time apps" },
];

export default function BlogRscCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Server Components, Server Actions, PPR | Fotz Studio"
        description="React Server Components vs Client Components, Server Actions, Partial Prerendering, React 19, Next.js App Router vs Pages Router — architektura 2024."
        canonicalUrl="https://fotz.pl/blog/react-server-components-server-actions-ppr-nextjs-app-router-2024"

        keywords="React Server Components, Server Actions, PPR co to jest, React Server Components, Server Actions, PPR jak działa, React Server Components, Server Actions, PPR tutorial, React Server Components, Server Actions, PPR przykład, czym jest React Server Components, Server Actions, PPR, React Server Components, Server Actions, PPR dokumentacja, React Server Components, Server Actions, PPR przewodnik"

        canonical="https://fotz.pl/blog/react-server-components-server-actions-ppr-nextjs-app-router-2024"
      />
      <ArticleSchema
        title="React Server Components, Server Actions, PPR — Next.js App Router 2024?"
        description="6 rendering strategies (SSG/ISR/SSR/RSC/PPR/CSR) — Server Components vs Client Components, Server Actions, React 19, Next.js App Router architektura."
        url="https://fotz.pl/blog/react-server-components-server-actions-ppr-nextjs-app-router-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Server Components", url: "https://fotz.pl/blog/react-server-components-server-actions-ppr-nextjs-app-router-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "React Server Components", url: "/blog/react-server-components-server-actions-ppr-nextjs-app-router-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Next.js
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Server Components 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              RSC, Server Actions, Partial Prerendering i React 19 — nowa architektura
              Next.js App Router i streaming rendering po stronie serwera.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Serwer default", value: "RSC" },
                { label: "Formularz bez API", value: "Server Actions" },
                { label: "Static + dynamic", value: "PPR" },
                { label: "use() hook", value: "React 19" },
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

      {/* Strategie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 strategii renderowania w Next.js</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              SSG, ISR, SSR, RSC, PPR i CSR — każda strategia optymalizuje
              inne aspekty: TTFB, aktualność danych, personalzacja i koszt serwera.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Strategia</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Timing</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cache</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Dynamiczne</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">TTFB</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {renderingStrategies.map((r, i) => (
                  <tr key={r.strategia} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{r.strategia}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{r.timing}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{r.cache}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{r.dynamiczne}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{r.ttfb}</td>
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

      <RelatedArticles currentArticleId="react-server-components-server-actions-ppr-nextjs-app-router-2024" />
      <ContactSection />
    </Layout>
  );
}
