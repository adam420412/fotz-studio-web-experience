import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Next.js 15 — co nowego: Turbopack, unstable_after i async params?",
    answer: "Next.js 15 (październik 2024): stabilny Turbopack dev, breaking changes, nowe API. Turbopack dev: next dev --turbo jest stabilne. 76% szybszy cold start niż Webpack. 96% szybszy HMR. next build nadal z Turbopack (--experimental-turbo). React 19 support: server-side i client-side. React Compiler (experimental): opcjonalny plugin. unstable_after: import {unstable_after as after} from 'next/server'. after(async () => { await logAnalytics() }). Wykonaj po wysłaniu response. Nie blokuje streaming. Log analytics, cleanup. Dla Server Actions i Route Handlers. Async params i searchParams: await params.id teraz wymagany. await searchParams.query. Breaking change z v14. Owinij Promise w use() lub await. Przykład: export default async function Page({params}: {params: Promise}) { const {id} = await params. return div id /div }. instrumentation.js stabilne: register() — przed startem serwera. onRequestError(error, request, context) — global error. Centralne logowanie błędów. OpenTelemetry integration. next.config.ts: TypeScript config (nie .js). Pełne typowanie opcji Next.js. ESLint 9: eslint.config.ts (flat config). next lint kompatybilny. create-next-app: nowsze szablony. TypeScript 5 domyślnie. CSS Layers wsparcie. Hydration error overlay: lepszy UI błędów hydration. Kod fragment wskazujący błąd. Przyspiesza debug.",
  },
  {
    question: "Next.js 15 caching — domyślnie opt-out i jak skonfigurować?",
    answer: "Biggest breaking change v15: caching domyślnie wyłączone. v14: GET Route Handlers — cache domyślnie. v15: GET Route Handlers — NIE cache domyślnie. Co znaczy: fetch() — nie cached. GET route handlers — nie cached. Client Router Cache — krótszy czas. Opt-in do cache: export const dynamic = 'force-static'. Lub fetch(url, {cache: 'force-cache'}). Lub export const revalidate = 3600. unstable_cache: import {unstable_cache} from 'next/cache'. const getCachedData = unstable_cache(async () => { return await db.query(...) }, ['cache-key'], {revalidate: 60, tags: ['data']}). Caching granularne. use cache (eksperymentalne): 'use cache' dyrektywa. Jak 'use client' / 'use server'. Na poziomie funkcji lub pliku. async function getData() { 'use cache'. return await db.query(...) }. cacheLife, cacheTag: import {cacheLife, cacheTag} from 'next/dist/server/use-cache/cache-life'. cacheLife('days'). cacheTag('products'). DynamicIO flag: next.config.ts: experimental: {dynamicIO: true}. Zmusza do jawnego oznaczania. Static vs dynamic. Lepsza wydajność. revalidatePath i revalidateTag: Server Actions + tags. revalidateTag('products') po mutacji. On-demand revalidation. Jak wcześniej — bez zmian. Client-side cache: router.refresh() — odśwież. Staleness: krótszy TTL w v15. Layout revalidation: layouty re-fetched częściej. fetch dedup: nadal działa w jednym request.",
  },
  {
    question: "Turbopack — Webpack killer w Next.js 15?",
    answer: "Turbopack: Webpack replacement w Rust. Vercel. Inkrementalne bundlowanie. Parallel builds. Architektura: task graph. Inkrementalne obliczenia. Tylko to co się zmieniło. Demand-driven evaluation. Stabilny dev (v15): next dev --turbo nie jest eksperymentalny. 76% szybszy cold start. 96% szybszy HMR dla małych zmian. 45% mniej pamięci niż Webpack. Benchmarki na dużych projektach. next build Turbopack: --experimental-turbo flag. Nie stabilny jeszcze. Porównywalny output do Webpack. Aktywna praca. Kompatybilność: Większość Webpack loaderów: Nie wspiera. Własne loadery: turbopack loaders. next.config.ts: experimental.turbo.rules. css: ['@parcel/css']. mdx: custom loader. Plugin system: inny od Webpack plugins. Wiele Webpack plugins nie działa. Sprawdź NextJS compatibility. Migracja: Zacznij od next dev --turbo. Sprawdź czy wszystko działa. Zgłoś niezgodności. next build --experimental-turbo gdy gotowe. Webpack fallback: zawsze dostępny. Jeśli Turbopack nie wspiera czegoś. Tymczasowe rozwiązanie. Porównanie: Vite — szybszy dev server (ESM native). Turbopack — szybszy dla dużych projektów (Rust). esbuild — najszybszy (brak HMR, tylko bundle). Webpack — najdojrzalszy, wolniejszy. SWC: Rust transpiler dla Next.js. Nie Turbopack ale powiązany. Zastępuje Babel (15x szybszy). TypeScript i JSX transform.",
  },
  {
    question: "Next.js 15 Server Actions — zmiany i best practices?",
    answer: "Server Actions stabilne od v14, udoskonalone w v15. Podstawy: 'use server' dyrektywa. async function. Wywołanie z Client Component. Bezpośredni dostęp do DB. Bez API. v15 zmiany: CSRF protection improved. Server Actions przez POST. Brak GET dla actions. Content-Type validation. Origin header check. Progressive enhancement. Zamknięte over-POST attacki. useActionState (React 19): const [state, formAction, isPending] = useActionState(serverAction, initialState). Zastępuje useFormState. isPending wbudowany. Optymistyczne updates: useOptimistic. Natychmiastowy feedback. Rollback przy błędzie. Server Actions + Forms: form action={serverAction}. Lub button formAction. Bez preventDefault. Native HTML submit. File uploads: FormData w Server Action. const file = formData.get('file') as File. Walidacja rozmiar i typ. Streaming response: nie bezpośrednio. Użyj Route Handler ze streaming. Server Action -> revalidate -> streaming page. Error handling: try/catch w action. Return error object. Nie throw (klient nie widzi). redirect() i notFound(): import {redirect, notFound} from 'next/navigation'. Wewnątrz Server Action. Automatyczne. after() w Server Actions: after(async () => { await emailService.send(...) }). Analytics po form submit. Nie blokuje odpowiedzi. Rate limiting: Upstash Ratelimit. ip z headers(). Per-action limits. Edge kompatybilność: Server Actions na edge runtime. 'use server' + export runtime = 'edge'. Vercel Edge Functions.",
  },
  {
    question: "Next.js 15 vs Next.js 14 — migracja i breaking changes?",
    answer: "Upgrade guide: npx @next/codemod@canary upgrade latest. Automatyczna migracja kodu. Nie wszystko automatycznie. Breaking changes lista: 1. async params/searchParams — await wymagany. codemod automatyczny. 2. GET Route Handlers — nie cached domyślnie. Dodaj export const dynamic = 'force-static' jeśli potrzeba cache. 3. Client Router Cache — krótszy stale time. Może powodować więcej network requests. 4. useFormState -> useActionState. react@19 wymagany. codemod dostępny. 5. next/font — auto-hinting zmieniony. 6. Usunięte: next/og (użyj @vercel/og). SWC plugins z poprzednich wersji mogą być niezgodne. React 19 peer dependency: React 19 wymagany dla nowych features. React 18 nadal działa (compatibility mode). useActionState, use(), etc. wymagają React 19. Migracja krok po kroku: 1. Zaktualizuj: npm install next@15 react@19 react-dom@19. 2. Uruchom codemod: npx @next/codemod@canary upgrade. 3. Sprawdź params/searchParams w stronach. 4. Sprawdź cache behavior. 5. Uruchom testy. Sprawdź: next.config.ts (nie .js preferowane). eslint.config.ts (ESLint 9 flat config). TypeScript 5. Kompatybilność bibliotek. Biblioteki third-party: Sprawdź release notes. Wiele zaktualizowane dla Next.js 15. trpc v11 + Next.js 15. shadcn/ui — aktualne. Auth.js v5 (next-auth v5) — Next.js 15. Drizzle/Prisma — bez zmian. Hermes + Canary: niektóre funkcje nadal experimental. Konieczny canary Next.js.",
  },
];

const nextJs15Features = [
  { funkcja: "Turbopack dev (stabilny)", opis: "next dev --turbo — 76% szybszy cold start", zmiana: "Nowe w v15 — wcześniej experimental" },
  { funkcja: "async params/searchParams", opis: "await params.id — Promise wrapper", zmiana: "Breaking change z v14 — codemod dostępny" },
  { funkcja: "unstable_after()", opis: "Kod po wysłaniu response (analytics)", zmiana: "Nowe API — nie blokuje streaming" },
  { funkcja: "Caching opt-out domyślnie", opis: "GET Route Handlers bez cache w v15", zmiana: "Breaking change — dodaj force-static" },
  { funkcja: "use cache (experimental)", opis: "'use cache' dyrektywa na poziomie funkcji", zmiana: "Nowe — zastępuje unstable_cache" },
  { funkcja: "next.config.ts", opis: "TypeScript config — pełne typowanie", zmiana: "Nowe — migruj z next.config.js" },
];

export default function BlogNextJs15CoTo() {
  return (
    <Layout>
      <SEOHead
        title="Next.js 15 | Fotz Studio"
        description="Next.js 15 nowości: stabilny Turbopack dev (76% szybszy), async params/searchParams, unstable_after(), zmiany cachingu (opt-out domyślnie), use cache i…"
        canonicalUrl="https://fotz.pl/blog/nextjs-15-turbopack-async-params-after-caching-migracja-v14-2024"

        keywords="Next.js 15 co to jest, Next.js 15 jak działa, Next.js 15 tutorial, Next.js 15 przykład, czym jest Next.js 15, Next.js 15 dokumentacja, Next.js 15 przewodnik"

        canonical="https://fotz.pl/blog/nextjs-15-turbopack-async-params-after-caching-migracja-v14-2024"
      />
      <ArticleSchema
        title="Next.js 15 — Turbopack dev, async params, unstable_after, caching i migracja z v14?"
        description="6 nowości Next.js 15 (Turbopack/async params/unstable_after/caching/use cache/next.config.ts) — breaking changes, Server Actions, React 19 i migracja z v14."
        url="https://fotz.pl/blog/nextjs-15-turbopack-async-params-after-caching-migracja-v14-2024"
        datePublished="2024-10-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Next.js 15", url: "https://fotz.pl/blog/nextjs-15-turbopack-async-params-after-caching-migracja-v14-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Next.js 15", href: "/blog/nextjs-15-turbopack-async-params-after-caching-migracja-v14-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Next.js / React / 2024
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Next.js 15 — co nowego
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Stabilny Turbopack dev (76% szybszy), async params, unstable_after(),
              zmiany cachingu (opt-out) i migracja z v14.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Build", value: "Turbopack" },
                { label: "API", value: "async params" },
                { label: "After", value: "unstable_after" },
                { label: "Cache", value: "opt-out" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych zmian Next.js 15</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Turbopack, async params, unstable_after, caching opt-out, use cache i next.config.ts —
              opis zmiany i jej znaczenie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zmiana</th>
                </tr>
              </thead>
              <tbody>
                {nextJs15Features.map((f, i) => (
                  <tr key={f.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.opis}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.zmiana}</td>
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

      <RelatedArticles currentArticleId="nextjs-15-turbopack-async-params-after-caching-migracja-v14-2024" />
      <ContactSection />
    </Layout>
  );
}
