import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Nuxt.js 3 i jak różni się od Next.js?",
    answer: "Nuxt.js 3: meta-framework dla Vue 3. Oficjalny fullstack framework Vue. Nitro — własny serwer. Vite pod spodem. Auto-imports — bez ręcznych importów. TypeScript natywny. Instalacja: npx nuxi@latest init my-app. Struktura: pages/ — routing (jak Next.js). components/ — auto-imported. composables/ — auto-imported. server/ — API routes (Nitro). layouts/ — layouty stron. middleware/ — nawigacyjne middleware. plugins/ — Vue plugins. assets/ — statyczne zasoby. public/ — publiczne pliki. Routing: pages/index.vue — /. pages/blog/index.vue — /blog. pages/blog/[slug].vue — /blog/:slug. pages/[...slug].vue — catch-all. Nested routes: pages/blog.vue — layout. pages/blog/index.vue — /blog. NuxtPage w blog.vue. Różnice vs Next.js: Nuxt — Vue ekosystem. Next.js — React ekosystem. Nuxt — auto-imports (mniej boilerplate). Next.js — RSC, bardziej elastyczny. Nuxt — Nitro (multi-platform deployment). Next.js — specjalizacja Vercel. Nuxt — convention over configuration. Layouts: layouts/default.vue — domyślny. definePageMeta({layout: 'custom'}). NuxtLayout wraps pages. Error handling: error.vue — strona błędu. showError(), clearError(). createError() — throw HTTP errors. useError() — reaktywny error state.",
  },
  {
    question: "useAsyncData i useFetch — data fetching w Nuxt 3?",
    answer: "useFetch: najprostszy data fetching. const {data, pending, error, refresh} = await useFetch('/api/posts'). SSR-aware — dane serialized do klienta. Brak double fetch (client + server). Type-safe przez TypeScript. Opcje: useFetch('/api/posts', {query: {page: 1, limit: 10}, headers: {'Authorization': token}, method: 'POST', body: {title: 'New Post'}, key: 'posts', lazy: true, server: false}). key — cache key, deduplikacja requestów. lazy — nie blokuj renderowania. server: false — tylko na kliencie. useAsyncData: pełna kontrola. const {data, pending, error} = await useAsyncData('posts', async () => { return await $fetch('/api/posts') }). Pierwszy argument — unikalny klucz. Second — async function. Nadaje się dla non-fetch operations (DB bezpośrednio). $fetch: helper do HTTP requests. Nie SSR-aware (użyj useFetch). Po stronie klienta lub w server routes. Global interceptors. Refresh i watch: const {refresh, execute} = await useFetch('/api/data'). refresh() — ponowne pobranie. watch: [searchQuery] — auto-refresh przy zmianie. Clearance: clearNuxtData(key) — wyczyść cache. clearNuxtData(['key1', 'key2']). getCachedData: getCachedData: (key) => nuxtApp.payload.data[key]. Własna strategia cache po stronie klienta. useState: useState('count', () => 0) — shared state między SSR i CSR. Reactive, serialized. SSR state sharing. Transform: transform: (data) => data.map(item => ({...item, date: new Date(item.date)})).",
  },
  {
    question: "Nitro server routes — API w Nuxt 3?",
    answer: "Nitro: server engine Nuxt. Własny serwer. Multi-platform (Node.js, Cloudflare Workers, Deno, etc.). server/ folder: server/api/ — API routes. server/routes/ — server routes. server/middleware/ — server middleware. server/plugins/ — server plugins. server/utils/ — utilities. API route: server/api/hello.ts: export default defineEventHandler((event) => { return {hello: 'world'} }). GET /api/hello — automatycznie. server/api/posts/index.ts — GET /api/posts. server/api/posts/[id].ts — GET /api/posts/:id. HTTP methods: export default defineEventHandler() — wszystkie metody. Lub: server/api/posts.post.ts — tylko POST. server/api/posts.get.ts — tylko GET. Request params: const id = getRouterParam(event, 'id'). const query = getQuery(event). const body = await readBody(event). getHeaders(event). Response: return data — auto JSON. setResponseStatus(event, 201). setResponseHeader(event, 'Cache-Control', '...'). sendStream(event, stream). Middleware server: server/middleware/auth.ts: export default defineEventHandler((event) => { const token = getHeader(event, 'authorization'). if (!token) { throw createError({statusCode: 401, message: 'Unauthorized'}) } }). Każdy request przechodzi przez middleware. Baza danych: Drizzle ORM w server/. Prisma w server/. DB URL przez runtimeConfig. Nie eksponuj secrets do klienta. H3: framework HTTP Nitro. Lightweight, TypeScript-first. Kompatybilny z Express middleware.",
  },
  {
    question: "Composables, plugins i state management w Nuxt 3?",
    answer: "Auto-imports: Nuxt automatycznie importuje z: components/, composables/, utils/, server/utils/. Brak ręcznych importów w komponentach. Composables: composables/useCounter.ts: export const useCounter = () => { const count = useState('counter', () => 0). const increment = () => count.value++. return {count, increment} }. Użycie: const {count, increment} = useCounter(). Nie potrzeba importu! Pinia (state management): npm install pinia @pinia/nuxt. nuxt.config.ts: modules: ['@pinia/nuxt']. stores/user.ts: export const useUserStore = defineStore('user', { state: () => ({user: null}), actions: {async login(credentials) {...}} }). Użycie: const userStore = useUserStore(). runtimeConfig: nuxt.config.ts: runtimeConfig: {apiSecret: '', public: {apiBase: '/api'}}. Server: useRuntimeConfig().apiSecret. Klient: useRuntimeConfig().public.apiBase. .env: NUXT_API_SECRET=value. Plugins: plugins/myPlugin.ts: export default defineNuxtPlugin((nuxtApp) => { nuxtApp.provide('helper', someHelper) }). Użycie: const {$helper} = useNuxtApp(). Server-only plugin: plugins/db.server.ts. Middleware nawigacyjne: middleware/auth.ts: export default defineNuxtRouteMiddleware((to, from) => { const user = useState('user'). if (!user.value) return navigateTo('/login') }). Strony z middleware: definePageMeta({middleware: ['auth']}). useHead: useHead({title: 'My Page', meta: [{name: 'description', content: '...'}]}). useSeoMeta: type-safe meta tags. useOgImage — generowanie og:image.",
  },
  {
    question: "Nuxt Content, deployment i ekosystem?",
    answer: "Nuxt Content v2: @nuxt/content moduł. Markdown, YAML, JSON, CSV. queryContent() — MDC query. Automatyczne routing z content/. Komponent ContentDoc — render markdown. MDC (Markdown Components): Vue komponenty w Markdown. ::Alert Treść :: (custom components). Syntax highlighting. Full-text search. Nuxt UI: @nuxt/ui — komponenty UI. Tailwind CSS based. Headless i stylowane. Dark mode. Nuxt Image: @nuxt/image. Automatyczna optymalizacja. WebP, AVIF. Lazy loading. Providers (Cloudinary, Cloudflare Images). Nuxt i18n: @nuxtjs/i18n. Locale routing (/pl, /en). lazy-load translations. useI18n() composable. Deployment Nuxt: Vercel: zero-config. Node.js SSR. Edge functions. Cloudflare Pages: server: 'cloudflare'. Nitro Cloudflare preset. Workers API dostępne. Static hosting: nuxt generate — pre-render. Netlify, GitHub Pages. Hybrid (static + SSR). Netlify: automatyczne wykrycie Nuxt. Serverless Functions przez Nitro. Node.js server: npm run build. node .output/server/index.mjs. Nuxt DevTools: wbudowany w dev mode. Components explorer. Composables inspector. Routes viewer. Dane SSR podgląd. VS Code extension. Testing Nuxt: @nuxt/test-utils. mountSuspended() — z Nuxt context. renderSuspended() dla komponentów. mockNuxtImport() — mock composables. Playwright dla E2E. Nuxt Layers: composable architecture. Reużywalne moduły. Base configuration sharing. @nuxt/eslint: nowy ESLint config. Flat config compatible.",
  },
];

const nuxtVsNext = [
  { aspekt: "Framework bazowy", nuxt: "Vue 3", nextjs: "React (RSC, React 19)" },
  { aspekt: "Auto-imports", nuxt: "Tak (components, composables, utils)", nextjs: "Brak (manual imports)" },
  { aspekt: "Data fetching", nuxt: "useFetch, useAsyncData, $fetch", nextjs: "fetch() w Server Components, SWR" },
  { aspekt: "Serwer", nuxt: "Nitro (multi-platform)", nextjs: "Next.js server (Vercel-first)" },
  { aspekt: "State management", nuxt: "Pinia (oficjalny) + useState", nextjs: "Zustand, Jotai, Redux Toolkit" },
  { aspekt: "Deployment", nuxt: "Vercel, Cloudflare, Node.js, Deno", nextjs: "Vercel-first, inne adaptery" },
];

export default function BlogNuxtCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Nuxt.js 3 | Fotz Studio"
        description="Nuxt.js 3: useFetch/useAsyncData (SSR data), Nitro server routes (API), auto-imports, composables, Pinia, runtimeConfig, Nuxt Content i deployment…"
        canonicalUrl="https://fotz.pl/blog/nuxtjs-3-usefetch-nitro-pinia-auto-imports-deployment-2024"

        keywords="Nuxt.js 3 co to jest, Nuxt.js 3 jak działa, Nuxt.js 3 tutorial, Nuxt.js 3 przykład, czym jest Nuxt.js 3, Nuxt.js 3 dokumentacja, Nuxt.js 3 przewodnik"

        canonical="https://fotz.pl/blog/nuxtjs-3-usefetch-nitro-pinia-auto-imports-deployment-2024"
      />
      <ArticleSchema
        title="Nuxt.js 3 — useFetch, Nitro API routes, Pinia i deployment 2024?"
        description="6 aspektów Nuxt vs Next.js (Vue/React, auto-imports, useFetch, Nitro, Pinia, deployment) — server routes, composables, Nuxt Content, DevTools i Nuxt vs Next.js porównanie."
        url="https://fotz.pl/blog/nuxtjs-3-usefetch-nitro-pinia-auto-imports-deployment-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Nuxt.js 3", url: "https://fotz.pl/blog/nuxtjs-3-usefetch-nitro-pinia-auto-imports-deployment-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-emerald-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Nuxt.js 3", url: "/blog/nuxtjs-3-usefetch-nitro-pinia-auto-imports-deployment-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Nuxt.js / Vue 3 / Fullstack
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuxt.js 3
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              useFetch/useAsyncData (SSR data), Nitro server routes, auto-imports,
              composables, Pinia i deployment (Vercel, Cloudflare, Node.js).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Data fetching", value: "useFetch" },
                { label: "API server", value: "Nitro" },
                { label: "Auto-imports", value: "Zero import" },
                { label: "State", value: "Pinia" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-green-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuxt.js 3 vs Next.js — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Framework bazowy, auto-imports, data fetching, serwer, state management i deployment —
              Nuxt.js (Vue) vs Next.js (React).
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Aspekt</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Nuxt.js 3</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Next.js</th>
                </tr>
              </thead>
              <tbody>
                {nuxtVsNext.map((r, i) => (
                  <tr key={r.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{r.aspekt}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{r.nuxt}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{r.nextjs}</td>
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

      <RelatedArticles currentArticleId="nuxtjs-3-usefetch-nitro-pinia-auto-imports-deployment-2024" />
      <ContactSection />
    </Layout>
  );
}
