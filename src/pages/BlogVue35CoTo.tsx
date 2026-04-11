import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Vue 3.5 — useTemplateRef, reactive props destructure i Vapor Mode?",
    answer: "Vue 3.5: Evan You, wrzesień 2024. Kluczowe nowości: useTemplateRef — stabilny. Reactive props destructure — stabilny. Deferred Teleport. Custom Elements improvements. Vapor Mode (preview). useTemplateRef: import {useTemplateRef, onMounted} from 'vue'. const inputEl = useTemplateRef('input-ref'). onMounted(() => inputEl.value?.focus()). template: input ref='input-ref'. Zastępuje ref z string. Typed template refs. Reactive props destructure (stabilny): defineProps z destrukturyzacją. const {count = 0, label = 'Click me'} = defineProps({count: Number, label: String}). Reaktywność zachowana przez kompilator. Domyślne wartości łatwo. Deferred Teleport: Teleport defer. Renderuje po głównej treści strony. Np. dialog w #app-modals. Nie blokuje hydratacji. Custom Elements: defineCustomElement ulepszenia. configureApp callback. useHost composable. useShadowRoot composable. SSR support dla CE. Vapor Mode: preview, nie stable. Kompilator bez Virtual DOM. Renderowanie bez VDOM diff. Bezpośrednie DOM mutations. Szybszy niż standard Vue. Podobny do fine-grained reactivity (SolidJS). importVaporComp() — mieszanie z normalnym Vue. Pinia 2.2: storeToRefs optymalizacja. acceptHMRUpdate. defineStore Options API improvements. Devtools Vue 3 extension: Timeline. Performance tracking. Component tree.",
  },
  {
    question: "Vue 3 Composition API — zaawansowane wzorce i composables?",
    answer: "Composables (zaawansowane): import {ref, computed, watchEffect, onMounted, onUnmounted} from 'vue'. export function useIntersectionObserver(threshold = 0.1) { const el = useTemplateRef('target'). const isVisible = ref(false). let observer: IntersectionObserver | null = null. onMounted(() => { observer = new IntersectionObserver(([entry]) => { isVisible.value = entry.isIntersecting }, {threshold}). if (el.value) observer.observe(el.value) }). onUnmounted(() => observer?.disconnect()). return {el, isVisible} }. Reactivity transform (watch patterns): watchEffect(() => { console.log(count.value) }). watch([foo, bar], ([newFoo, newBar]) => {...}, {immediate: true, deep: true}). watchPostEffect — po DOM update. watchSyncEffect — synchronicznie. Provide/Inject typed: const ThemeKey: InjectionKey = Symbol('theme'). provide(ThemeKey, {color: ref('blue')}). const theme = inject(ThemeKey)!. Template refs array: v-for z ref: const items = useTemplateRef('items'). Zwraca tablicę elementów. Async composables: const {data, error, loading} = useAsync(() => fetch('/api/data').then(r => r.json())). Composable lifecycle aware. VueUse: @vueuse/core. 200+ composables. useStorage, useMouse, useEventListener, useFetch, useIntersectionObserver, useDark, useClipboard. npm install @vueuse/core. import {useDark, useToggle} from '@vueuse/core'. const isDark = useDark(). const toggleDark = useToggle(isDark).",
  },
  {
    question: "Pinia Colada — async state management dla Vue?",
    answer: "Pinia Colada: Eduardo San Martin Morote. Async state management. Query library dla Vue (jak TanStack Query). Instalacja: npm install @pinia/colada pinia. main.ts: import {PiniaColada} from '@pinia/colada'. app.use(PiniaColada). useQuery: import {useQuery} from '@pinia/colada'. const {data: user, isLoading, error} = useQuery({key: () => ['user', userId.value], query: () => fetch('/api/user/' + userId.value).then(r => r.json())}). Reaktywny key — automatyczny refetch. isLoading, error, data. useMutation: const {mutate: updateUser, isLoading} = useMutation({mutation: (userData) => fetch('/api/user', {method: 'PUT', body: JSON.stringify(userData)})}). onSuccess, onError callbacks. Invalidation: queryCache.invalidateQueries({key: ['user']}). Po mutacji — refresh. Stale time: staleTime: 5 * 60 * 1000 (5 min). Nie refetchuje jeśli dane świeże. gcTime: czas w cache po unmount. Pinia store z Colada: defineStore + useQuery razem. Pinia Colada + Vue Router: routerParam jako klucz. Automatyczny refetch na param change. SSR support: prefetchQuery na serwerze. Hydratacja na kliencie. Porównanie: Pinia Colada vs VueQuery: Pinia Colada — Vue-native, Pinia integracja. VueQuery — Vue adapter TanStack Query, ten sam API. Pinia Colada mniejszy bundle. Pinia store alternatywa: store dla globalnego state. Colada dla server state.",
  },
  {
    question: "Nuxt 4 — nowe funkcje i App Router-like struktura?",
    answer: "Nuxt 4 (preview/beta 2024): Pooja Bhaumik, Daniel Roe. Nowa struktura katalogów. app/ katalog (opcjonalnie). Kompatybilny z Nuxt 3. Nuxt 4 zmiany: app/ directory (opcjonalnie). Plik app.vue przenoszony. nuxt.config.ts: future: {compatibilityVersion: 4}. Shared katalog: shared/utils, shared/types. Dostępny na serwerze i kliencie. useAsyncData v2: clear. getCachedData. Lepsze typowanie. Auto-imports zmiany: #imports zamiast auto. server/utils auto-importowane. Nowe composables: useRouteAnnouncer. usePreviewMode. useCookie improvements. callOnce — wykonaj raz (SSR + client). useNuxtApp().ssrContext. Data fetching v4: useAsyncData({key, handler, options}). dedupe: 'defer' | 'cancel'. getCachedData — custom cache. useFetch alias skrót. $fetch v2. Nitro 2: server framework. H3 v2. Routing improvements. WebSocket support. Cloudflare R2 storage. Nitro devtools. Server plugins. compatibilityVersion: 4 w Nuxt 3: npx nuxi@latest init my-app. future.compatibilityVersion: 4 w nuxt.config. Stopniowa migracja. Nie breaking change. Nuxt Layers: extends w nuxt.config. Współdzielenie konfiguracji. Monorepo layers. Nuxt modules: @nuxtjs/tailwindcss. @nuxt/image. @nuxtjs/i18n. nuxt-auth-utils. @nuxtjs/supabase.",
  },
  {
    question: "Vue 3 i Nuxt — SSR, hydration i Server Components?",
    answer: "SSR w Vue 3: import {createSSRApp} from 'vue'. import {renderToString} from '@vue/server-renderer'. const app = createSSRApp(MyApp). const html = await renderToString(app). Streaming SSR: renderToNodeStream. Nuxt Auto SSR: domyślnie server-side rendering. nuxt.config: ssr: true. Hydration mismatch: błąd jeśli HTML różni się. Częsty błąd: Date.now(), Math.random() bez useState. useState composable: const state = useState('key', () => initialValue). Synchronizuje SSR i client. useHydration: zaawansowane wzorce. Nuxt Server Components (experimental): .server.vue sufix. Renderowane tylko na serwerze. Zero client JS. Lean Island architecture. NuxtIsland: renderuje component jako server island. Lazy hydration: LazyComp — renderowany lazy. defineAsyncComponent + Suspense. v-lazy-mount. Nuxt Island: komponent.server.vue. Brak reaktywności client-side. Wysyłany jako HTML. Odświeżanie przez refresh event. Vue Streaming: Suspense + async setup(). async setup() {const data = await fetchData(). return {data}}. Fallback slot podczas ładowania. Error boundary: onErrorCaptured. ErrorBoundary component. Nuxt error.vue: globalny error handler. NuxtErrorBoundary komponent. createError({statusCode: 404, message: 'Not found'}). Nuxt devtools: wbudowane. Component inspector. Timeline. Hooks. Payload inspection.",
  },
];

const vueFeatures = [
  { funkcja: "useTemplateRef", wersja: "Vue 3.5 stable", opis: "Typed template refs — useTemplateRef('input-ref') zamiast string ref" },
  { funkcja: "Reactive props destructure", wersja: "Vue 3.5 stable", opis: "const {count = 0} = defineProps() — reaktywność przez kompilator" },
  { funkcja: "Vapor Mode", wersja: "Vue 3.5 preview", opis: "Kompilator bez Virtual DOM — bezpośrednie DOM mutations, szybszy" },
  { funkcja: "Pinia Colada", wersja: "@pinia/colada", opis: "Async state management — useQuery, useMutation, invalidation" },
  { funkcja: "VueUse", wersja: "@vueuse/core", opis: "200+ composables — useDark, useStorage, useEventListener, useFetch" },
  { funkcja: "Nuxt 4 app/", wersja: "Nuxt 4 beta", opis: "Nowa struktura katalogów, shared/, compatibilityVersion: 4" },
];

export default function BlogVue35CoTo() {
  return (
    <Layout>
      <SEOHead
        title="Vue 3.5 useTemplateRef, Vapor Mode, Pinia Colada i Nuxt 4 — nowości 2024 | Fotz.pl"
        description="Vue 3.5: useTemplateRef (stable), reactive props destructure, Vapor Mode (preview). Pinia Colada: useQuery, useMutation. VueUse. Nuxt 4: app/ directory, Nitro 2, Server Components."
        canonicalUrl="https://fotz.pl/blog/vue-3-5-usetemplateref-vapor-mode-pinia-colada-nuxt-4-2024"
      />
      <ArticleSchema
        title="Vue 3.5 useTemplateRef, Vapor Mode, Pinia Colada i Nuxt 4 — nowości 2024?"
        description="Vue 3.5: useTemplateRef, reactive props destructure, Vapor Mode (no VDOM). Pinia Colada: async state. VueUse composables. Nuxt 4: app/ dir, Server Components, Nitro 2."
        url="https://fotz.pl/blog/vue-3-5-usetemplateref-vapor-mode-pinia-colada-nuxt-4-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Vue 3.5 i Nuxt 4 2024", url: "https://fotz.pl/blog/vue-3-5-usetemplateref-vapor-mode-pinia-colada-nuxt-4-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-green-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Vue 3.5 i Nuxt 4 2024", href: "/blog/vue-3-5-usetemplateref-vapor-mode-pinia-colada-nuxt-4-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Vue 3.5 / Nuxt 4 / Pinia Colada / Vapor Mode
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vue 3.5 i Nuxt 4
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              useTemplateRef, Vapor Mode, Pinia Colada (useQuery),
              VueUse i Nuxt 4 app/ directory.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Typed refs", value: "useTemplateRef" },
                { label: "No VDOM", value: "Vapor Mode" },
                { label: "Async state", value: "Pinia Colada" },
                { label: "New structure", value: "Nuxt 4" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vue 3.5 i Nuxt 4 — kluczowe funkcje</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              useTemplateRef, Vapor Mode, Pinia Colada, VueUse i Nuxt 4 —
              wersja i opis.
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
                {vueFeatures.map((f, i) => (
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
