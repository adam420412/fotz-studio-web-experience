import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Zustand v5 — co nowego i jak działa store?",
    answer: "Zustand v5: Daishi Kato, pmndrs. Breaking changes. Instalacja: npm install zustand@5. Co nowego: useShallow przeniesione. zustand/react/shallow (deprecated) -> zustand/shallow. createStore bez create w React. StoreApi zmiany TypeScript. Store definition: import {create} from 'zustand'. interface BearStore { bears: number. addBear: () => void. reset: () => void }. const useBearStore = create((set) => ({bears: 0, addBear: () => set((state) => ({bears: state.bears + 1})), reset: () => set({bears: 0})})). Użycie: const bears = useBearStore((state) => state.bears). const addBear = useBearStore((state) => state.addBear). Selector pattern: unikaj pobierania całego state. Zawsze używaj selector. Mniej re-renders. useShallow: const {bears, addBear} = useBearStore(useShallow((state) => ({bears: state.bears, addBear: state.addBear}))). Gdy potrzebujesz wielu wartości. Vanilla store (poza React): import {createStore} from 'zustand/vanilla'. const store = createStore((set) => ({count: 0, inc: () => set((s) => ({count: s.count + 1}))})). store.getState(). store.setState({count: 5}). store.subscribe(). Wynik: zewnętrzny store. Sync z React: useStore(vanillaStore). Middleware kompozycja: create(devtools(immer(persist(storeCreator)))).",
  },
  {
    question: "Zustand — persist middleware i synchronizacja z localStorage?",
    answer: "Persist middleware: zapisz state do storage. import {persist, createJSONStorage} from 'zustand/middleware'. const useStore = create(persist((set) => ({bears: 0, addBear: () => set((s) => ({bears: s.bears + 1}))}), {name: 'bear-storage', storage: createJSONStorage(() => localStorage)})).  Odczyt przy hydratacji: localStorage -> state. Automatyczny. Persist options: name (klucz storage). storage (localStorage, sessionStorage, AsyncStorage). partialize: wybierz jakie pola persystować. partialize: (state) => ({bears: state.bears}) — tylko bears. merge: strategia łączenia. version: wersja schema. migrate: callback migracji. skipHydration: ręczna hydratacja. Hydratacja Server-Side: SSR problem — server state != client state. useStore.persist.hasHydrated(). useStore.persist.onFinishHydration(). useEffect sprawdź hydrację. Własny storage: IndexedDB, SecureStorage, AsyncStorage (React Native). createJSONStorage(() => AsyncStorage). Własny serialize/deserialize. sessionStorage: createJSONStorage(() => sessionStorage). Wygasa przy zamknięciu karty. Cookie storage: serialize do cookie. Dostępne na serwerze. Rehydratacja: automatyczna przy mount. useStore.persist.rehydrate() — ręczna. clearStorage: useStore.persist.clearStorage(). Wyczyszczenie. Migracje: version: 1. migrate: (persistedState, version) => { if (version === 0) return migratedState }. Schema evolution. Partialize z computed: partialize: (state) => omit(state, ['callbacks', 'refs']).",
  },
  {
    question: "Zustand — devtools i immer middleware?",
    answer: "Devtools middleware: Redux DevTools integracja. import {devtools} from 'zustand/middleware'. const useStore = create(devtools((set) => ({...}), {name: 'MyStore', enabled: process.env.NODE_ENV !== 'production'})). Redux DevTools Extension wymagane. Chrome/Firefox. Time-travel debugging. Action names: set({bears: 1}, false, 'addBear'). Trzeci argument: action name. Widoczne w DevTools. Immer middleware: mutable updates syntax. npm install immer. import {immer} from 'zustand/middleware/immer'. const useStore = create(immer((set) => ({nested: {count: 0, name: 'test'}, increment: () => set((state) => { state.nested.count++ }), rename: (name: string) => set((state) => { state.nested.name = name }) }))). Bez spread: zamiast {nested: {...state.nested, count: state.nested.count + 1}}. Bezpośrednia mutacja. Immer robi kopię. TypeScript z immer: typy działają normalnie. Kombinacja: create(devtools(immer(persist(fn, persistOptions)), devtoolsOptions)). Kolejność middleware ważna! Subscriptions: const unsub = useBearStore.subscribe((state) => { console.log(state.bears) }). Cleanup w useEffect. subscribeWithSelector: import {subscribeWithSelector} from 'zustand/middleware'. Subskrybuj na część state. const unsub = useBearStore.subscribe((state) => state.bears, (bears) => { console.log('bears changed:', bears) }, {fireImmediately: true}). Selector + listener.",
  },
  {
    question: "Jotai v2 — atoms, atom families i zaawansowane wzorce?",
    answer: "Jotai v2: Daishi Kato. Atomic state. Bottom-up. Provider-less default. Instalacja: npm install jotai@2. Atom: import {atom, useAtom, useAtomValue, useSetAtom} from 'jotai'. const countAtom = atom(0). const nameAtom = atom('Jan'). useAtom: const [count, setCount] = useAtom(countAtom). useAtomValue: read-only. useSetAtom: write-only (mniej re-renders). Derived atoms: const doubleAtom = atom((get) => get(countAtom) * 2). Automatyczna subskrypcja. Async atoms: const userAtom = atom(async () => { const res = await fetch('/api/user'). return res.json() }). Suspense handling. Writable derived: const tempAtom = atom({celsius: 0, fahrenheit: 32}). const celsiusAtom = atom((get) => get(tempAtom).celsius, (get, set, celsius: number) => { set(tempAtom, {celsius, fahrenheit: celsius * 9/5 + 32}) }). atomFamily: import {atomFamily} from 'jotai/utils'. const postAtomFamily = atomFamily((id: number) => atom(async () => fetchPost(id))). Nowy atom per id. Stable reference. Cleanup: atomFamily.remove(id). jotai/utils: atomWithStorage — localStorage persist. atomWithReset — reset do initial value. atomWithReducer — reducer pattern. atomWithObservable — RxJS integracja. selectAtom — selector ze stabilizacją. splitAtom — lista atomów. Devtools: @jotai-labs/jotai-devtools. Atom-level debugging. Provider: dla testów lub izolacji. JotaiProvider. defaultStore.",
  },
  {
    question: "Porównanie Zustand vs Jotai vs Valtio vs Legend State 2024?",
    answer: "Zustand: flux-like. Single store. Selektory. Middleware. Najłatwiejszy do zrozumienia. Prosta migracja z Redux. Najlepszy gdy: feature-rich store, persist, DevTools. Jotai: atomic. Granular subscriptions. Bottom-up. Async native. Najlepszy gdy: wiele niezależnych wartości, derived state. Valtio: proxy-based. Mutable API. useSnapshot. Naturalny dla OOP. Najlepszy gdy: prosta mutacja, mało boilerplate. Legend State: sygnały. Highest performance. Fine-grained reactivity. Najlepszy gdy: performance-critical, duże listy, mobile. Benchmark comparisons: Legend State najszybszy. Jotai drugi (granular). Zustand dobry (selektory). Valtio wolniejszy (proxy overhead). Bundle size: Zustand: 2.9kB. Jotai: 3.4kB. Valtio: 4.1kB. Legend State: 8kB (więcej features). Rekomendacje 2024: nowy projekt React: Zustand lub Jotai. Performance-critical: Legend State. Istniejący z Redux: Zustand (najłatwiejsza migracja). Server state: TanStack Query (nie zastępuj tym state managerem). URL state: nuqs, next-query-params. Formularz: React Hook Form. Kombinacje: Zustand (global) + TanStack Query (server) + React Hook Form (forms) + nuqs (URL). Nie mieszaj: Zustand i Jotai w jednym projekcie. Zbędna złożoność.",
  },
];

const stateFeatures = [
  { biblioteka: "Zustand v5", podejscie: "Flux (single store)", kiedy: "Global state, persist, DevTools, Redux migration" },
  { biblioteka: "Zustand persist", podejscie: "localStorage/sessionStorage", kiedy: "Persystencja state między sesjami" },
  { biblioteka: "Zustand immer", podejscie: "Mutable syntax", kiedy: "Głęboko zagnieżdżone updates bez spread" },
  { biblioteka: "Jotai v2", podejscie: "Atomic (bottom-up)", kiedy: "Niezależne atomy, derived async, granular" },
  { biblioteka: "atomFamily (Jotai)", podejscie: "Atom per key", kiedy: "Lista elementów, każdy ma własny atom" },
  { biblioteka: "subscribeWithSelector", podejscie: "Selective subscription", kiedy: "Reaguj tylko na część state — brak re-renders" },
];

export default function BlogZustandAdvCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Zustand v5, Jotai v2 — persist, immer, devtools i porównanie state managers 2024 | Fotz.pl"
        description="Zustand v5 zaawansowany: persist middleware (localStorage), immer, devtools, subscribeWithSelector. Jotai v2: atomFamily, atomWithStorage, derived atoms. Porównanie 2024."
        canonicalUrl="https://fotz.pl/blog/zustand-v5-jotai-v2-persist-immer-devtools-atomfamily-2024"
      />
      <ArticleSchema
        title="Zustand v5, Jotai v2 — persist, immer, devtools i porównanie state managers 2024?"
        description="Zustand v5: persist, immer, devtools middleware, subscribeWithSelector. Jotai v2: atomFamily, atomWithStorage, async atoms. Porównanie Zustand vs Jotai vs Valtio vs Legend State."
        url="https://fotz.pl/blog/zustand-v5-jotai-v2-persist-immer-devtools-atomfamily-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Zustand v5 i Jotai v2 2024", url: "https://fotz.pl/blog/zustand-v5-jotai-v2-persist-immer-devtools-atomfamily-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-amber-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Zustand v5 i Jotai v2 2024", href: "/blog/zustand-v5-jotai-v2-persist-immer-devtools-atomfamily-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Zustand / Jotai / State Management / React
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Zustand v5 i Jotai v2
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Persist middleware, immer, devtools, subscribeWithSelector,
              atomFamily i async atoms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Flux store", value: "Zustand v5" },
                { label: "Persist", value: "localStorage" },
                { label: "Atomic", value: "Jotai v2" },
                { label: "Per item", value: "atomFamily" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Zustand i Jotai — biblioteki i kiedy wybrać</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Zustand persist, immer, Jotai atomFamily i subscribeWithSelector —
              podejście i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka / Feature</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {stateFeatures.map((f, i) => (
                  <tr key={f.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.podejscie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.kiedy}</td>
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
