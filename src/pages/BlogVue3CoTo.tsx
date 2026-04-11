import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Vue 3 Composition API i jak różni się od Options API?",
    answer: "Vue 3: framework JavaScript (Evan You, 2020). Przepisany od zera vs Vue 2. Composition API: nowe API Vue 3 (inspirowane React Hooks). Options API: klasyczne Vue (data, methods, computed, watch). Composition API zalety: lepsza reużywalność logiki (composables). Lepsza TypeScript integracja. Mniejszy bundle (tree-shakeable). Lepsza organizacja kodu (po feature, nie po type). Setup function: export default {setup() {const count = ref(0). const double = computed(() => count.value * 2). function increment() {count.value++}. return {count, double, increment}}}. Reaktywność: ref(initialValue) — reaktywna wartość prymitywna. ref.value — dostęp w JS. ref bezpośrednio w template (auto-unwrap). reactive(object) — reaktywny obiekt. Nie potrzeba .value. Ale tracimy reaktywność przy destructuringu. Computed: const double = computed(() => count.value * 2). Read-only lub get+set. Automatyczne dependency tracking. Watch: watch(source, callback). watchEffect — automatyczny tracking dependencji. watchEffect uruchamia się przy starcie. Lifecycle hooks: onMounted, onUnmounted, onUpdated, onBeforeMount. Script Setup: nowszy shorthand. script lang='ts' setup. Zmienne i funkcje automatycznie dostępne w template. Nie trzeba return {}.",
  },
  {
    question: "Composables — jak pisać reużywalną logikę w Vue 3?",
    answer: "Composables: Vue 3 odpowiednik React Custom Hooks. Funkcje zaczynające od 'use'. Zawierają reaktywną logikę z Composition API. Prosty przykład useMouse: function useMouse() {const x = ref(0). const y = ref(0). function update(e) {x.value = e.pageX; y.value = e.pageY}. onMounted(() => window.addEventListener('mousemove', update)). onUnmounted(() => window.removeEventListener('mousemove', update)). return {x, y}}. Użycie: const {x, y} = useMouse(). Composable fetch: function useFetch(url) {const data = ref(null). const loading = ref(true). const error = ref(null). fetch(url).then(r => r.json()).then(d => {data.value = d; loading.value = false}).catch(e => {error.value = e; loading.value = false}). return {data, loading, error}}. VueUse: kolekcja 200+ composables (@vueuse/core). useStorage, useEventListener, useMediaQuery, useDark, useIntersectionObserver, useFetch, useRefHistory (undo/redo). useStorage: localStorage/sessionStorage reaktywne. useDark: dark mode. useBreakpoints: responsive breakpoints. Oficjalna biblioteka — polecana. Composables vs mixins: mixins (Vue 2): konflikty nazw, nieklarowne źródło. Composables (Vue 3): explicit, tree-shakeable, TypeScript friendly. Script Setup + composables = idealne połączenie.",
  },
  {
    question: "Pinia — state management dla Vue 3?",
    answer: "Pinia: oficjalny state manager Vue 3 (2021, zastąpił Vuex). Prosty, intuicyjny, TypeScript first. defineStore: export const useUserStore = defineStore('user', {state: () => ({name: '', email: '', isLoggedIn: false}), getters: {displayName: (state) => state.name.toUpperCase()}, actions: {async login(credentials) {const user = await api.login(credentials). this.name = user.name. this.isLoggedIn = true}}}). Komponent: const userStore = useUserStore(). userStore.name. userStore.login({...}). Setup stores (nowszy styl): export const useCounterStore = defineStore('counter', () => {const count = ref(0). const double = computed(() => count.value * 2). function increment() {count.value++}. return {count, double, increment}}). Jak composable — Composition API. Pinia vs Vuex: Pinia — brak mutations (tylko actions), TypeScript first, modułowy, devtools. Vuex — legacy, Vue 2, mutations+actions (verbose). Zawsze Pinia w nowych projektach. Devtools: Vue DevTools + Pinia plugin. State inspection. Action timeline. Hot module replacement. Pinia Plugins: persistedstate (localStorage/sessionStorage). Pinia ORM (Entity model). Firebase/Supabase integrations. SSR support: Nuxt.js automatycznie obsługuje. storeToRefs: const {name, isLoggedIn} = storeToRefs(userStore). Zachowuje reaktywność (nie destrukturuj bezpośrednio).",
  },
  {
    question: "Vue Router 4 — routing w Vue 3, lazy loading i navigation guards?",
    answer: "Vue Router 4: oficjalny router Vue 3. createRouter + createWebHistory/createWebHashHistory/createMemoryHistory. Konfiguracja: const router = createRouter({history: createWebHistory(), routes: [{path: '/', component: Home}, {path: '/about', lazy: () => import('./About.vue')}, {path: '/user/:id', component: User, props: true}]}). Lazy loading: () => import('./Component.vue') — code splitting per route. Vite + Rollup automatycznie tworzy chunki. Navigation Guards: beforeEach(to, from, next) — globalny guard. beforeEnter — per route. Autentykacja: router.beforeEach((to) => {if (to.meta.requiresAuth && !isLoggedIn()) return '/login'}). Meta fields: {path: '/admin', component: Admin, meta: {requiresAuth: true, role: 'admin'}}. router.push(): programatyczna nawigacja. router.push('/path'). router.push({name: 'user', params: {id: 1}}). router.replace() — bez historii. Nested routes: children: [{path: 'profile', component: UserProfile}]. router-view zagnieżdżone. Scroll behavior: scrollBehavior(to, from, savedPosition) -> {behavior: 'smooth', top: 0}. useRouter/useRoute: const router = useRouter(). const route = useRoute(). route.params, route.query, route.meta. Programmatic: router.push, router.go, router.back. Transition: router-view + transition component. animate per route.",
  },
  {
    question: "Nuxt 3 — full-stack framework dla Vue 3?",
    answer: "Nuxt 3: meta-framework dla Vue 3 (jak Next.js dla React). Vite + Nitro (server). Auto-imports (komponenty, composables, utils). File-system routing (pages/ directory). SSR, SSG, SPA, ISR — wszystkie tryby. Server-side: server/api/users.ts — API endpoint. server/middleware — server middleware. server/plugins — server plugins. Nitro: nowy server engine. Deploy na Node, Edge, Netlify, Vercel, Cloudflare. useAsyncData: dane na serwerze + hydration. const {data, pending, error} = await useAsyncData('users', () => fetchUsers()). useFetch: shorthand dla useAsyncData + $fetch. const {data} = await useFetch('/api/users'). $fetch (ofetch): type-safe HTTP client. Auto-imports: ref, computed, useState — bez importowania. defineComponent, useRouter — auto. Custom composables w composables/ — auto-imported. useState: server/client shared state. const count = useState('count', () => 0). Nuxt UI: oficjalna UI library (Tailwind + Radix/Reka UI). Nuxt Content: markdown-based CMS. Nuxt Image: image optimization. Nuxt SEO: meta, sitemap, robots, schema. Nuxt DevTools: wbudowane devtools. Moduły: nuxt.com/modules — rozbudowany ekosystem. Nuxt vs Next.js: Nuxt — Vue ecosystem, auto-imports, elegancki. Next.js — React ecosystem, RSC, Vercel. Oba full-stack frameworks. Kiedy Nuxt: Vue team, content sites, blogs.",
  },
];

const vueEcosystem = [
  { technologia: "Vue 3 + Composition API", kategoria: "Framework", opis: "Reaktywny framework z Setup + ref/reactive", zastosowanie: "SPA, komponenty, reaktywny UI" },
  { technologia: "Pinia", kategoria: "State Management", opis: "Oficjalny store — defineStore, actions, getters", zastosowanie: "Global state, lazy stores, DevTools" },
  { technologia: "Vue Router 4", kategoria: "Routing", opis: "File-system lub code routing, guards, lazy", zastosowanie: "SPA routing, auth guards, code splitting" },
  { technologia: "VueUse", kategoria: "Composables", opis: "200+ composables (useStorage, useDark, useFetch)", zastosowanie: "Reużywalna logika, browser APIs" },
  { technologia: "Nuxt 3", kategoria: "Full-Stack Framework", opis: "SSR/SSG/SPA, Nitro, auto-imports, file routing", zastosowanie: "Full-stack apps, content sites, SEO" },
  { technologia: "Nuxt UI", kategoria: "UI Library", opis: "Tailwind + Reka UI components dla Nuxt", zastosowanie: "Design system dla projektów Nuxt" },
];

export default function BlogVue3CoTo() {
  return (
    <Layout>
      <SEOHead
        title="Vue 3 Composition API, Pinia, Nuxt 3 — co to jest i jak działa | Fotz.pl"
        description="Vue 3 Composition API, script setup, composables, Pinia (state management), Vue Router 4, VueUse i Nuxt 3 — ekosystem Vue w 2024."
        canonicalUrl="https://fotz.pl/blog/vue3-composition-api-pinia-nuxt3-co-to-jest-jak-dziala"
      />
      <ArticleSchema
        title="Vue 3 Composition API, Pinia, Nuxt 3 — co to jest i jak działa?"
        description="6 elementów ekosystemu Vue 3 (Composition API/Pinia/Vue Router/VueUse/Nuxt 3/Nuxt UI) — ref, reactive, composables, defineStore, auto-imports i SSR."
        url="https://fotz.pl/blog/vue3-composition-api-pinia-nuxt3-co-to-jest-jak-dziala"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Vue 3 i Nuxt 3", url: "https://fotz.pl/blog/vue3-composition-api-pinia-nuxt3-co-to-jest-jak-dziala" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-emerald-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Vue 3 i Nuxt 3", href: "/blog/vue3-composition-api-pinia-nuxt3-co-to-jest-jak-dziala" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Vue / Frontend
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vue 3, Pinia i Nuxt 3
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Composition API z script setup, composables jak React hooks, Pinia
              zamiast Vuex i Nuxt 3 jako full-stack framework.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Reactive API", value: "Composition" },
                { label: "Store oficjalny", value: "Pinia" },
                { label: "Composables library", value: "VueUse" },
                { label: "Full-stack", value: "Nuxt 3" },
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

      {/* Ekosystem */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekosystem Vue 3 w 2024</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Composition API, Pinia, Vue Router, VueUse i Nuxt 3 — każdy element
              ekosystemu Vue spełnia określoną rolę w nowoczesnych aplikacjach.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {vueEcosystem.map((v) => (
              <FadeInView key={v.technologia}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900">{v.technologia}</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">{v.kategoria}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{v.opis}</p>
                  <p className="text-xs text-gray-500">Zastosowanie: {v.zastosowanie}</p>
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
