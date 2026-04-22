import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Legend State — najszybszy state manager dla React?",
    answer: "Legend State: Jay Meistrich. Signals-based. Reactive granular updates. Automatyczna persystencja. Instalacja: npm install @legendapp/state. Podstawy: import {observable} from '@legendapp/state'. const store$ = observable({count: 0, user: {name: ''}}). Dostęp: store$.count.get() — odczyt. store$.count.set(1) — zapis. store$.count.peek() — bez subskrypcji. React: import {observer} from '@legendapp/state/react'. const Counter = observer(() => { return button onClick={() => store$.count.set(c => c + 1)} Count: {store$.count.get()} /button. }). Granular rendering: tylko komponenty subskrybujące zmienione pole re-renderują. Nie cały drzewa. Persystencja: import {persistObservable} from '@legendapp/state/persist'. persistObservable(store$, {local: 'my-store'}). Automatyczny sync z localStorage/MMKV. React Native: MMKV (szybki). Computed: import {computed} from '@legendapp/state'. const doubled$ = computed(() => store$.count.get() * 2). Reactive memoized. Sync/Async: store$.user.name.set('Jan'). Await store$.isLoaded.get(). Reactive UI pattern: zamiast useState/useEffect. Legend State = globalny reactive store. useSelector hook: import {useSelector} from '@legendapp/state/react'. const count = useSelector(store$.count). Kiedy Legend: performance critical. Persystencja automatyczna. React Native + web.",
  },
  {
    question: "Nanostores — tiny store (1KB) dla każdego frameworka?",
    answer: "Nanostores: Andrey Sitnik (PostCSS twórca). 1KB. Framework-agnostic. Instalacja: npm install nanostores @nanostores/react. Atom (atomic value): import {atom} from 'nanostores'. export const count$ = atom(0). Mutacja: count$.set(count$.get() + 1). React: import {useStore} from '@nanostores/react'. const count = useStore(count$). Map (object store): import {map} from 'nanostores'. const user$ = map({name: '', email: ''}). user$.setKey('name', 'Jan'). user$.set({name: 'Jan', email: 'jan@test.pl'}). Computed (derived): import {computed} from 'nanostores'. const doubled$ = computed(count$, c => c * 2). Reactive, memoized. Action pattern: import {action} from 'nanostores'. const increment = action(count$, 'increment', (store) => { store.set(store.get() + 1) }). Czysty. Task (async action): import {task} from 'nanostores'. const loadUser = task(async () => { const data = await fetchUser(). user$.set(data) }). Batch: import {batch} from 'nanostores'. batch(() => { count$.set(1). user$.setKey('name', 'Jan') }). Vue: import {useStore} from '@nanostores/vue'. Svelte: import {useStore} from '@nanostores/svelte'. Solid: import {useStore} from '@nanostores/solid'. Sharing state: eksportuj store z pliku. Importuj wszędzie. SSR: import {keepMount} from 'nanostores'. keepMount(store$) — nie unmount między requestami. Kiedy Nanostores: micro-frontends. Multi-framework. Mały bundle critical.",
  },
  {
    question: "Valtio — proxy-based state management dla React?",
    answer: "Valtio: Daishi Kato (twórca Jotai). Proxy-based reactivity. Mutuj jak zwykły obiekt. Instalacja: npm install valtio. Podstawy: import {proxy} from 'valtio'. const state = proxy({count: 0, user: {name: ''}}). Mutacja: state.count++ — bezpośrednia mutacja! state.user.name = 'Jan'. React: import {useSnapshot} from 'valtio'. function Counter() { const snap = useSnapshot(state). return div {snap.count} /div }. Granular: useSnapshot renderuje tylko gdy używane pole zmienione. Derived state: import {derive} from 'valtio/utils'. const derived = derive({doubled: get => get(state).count * 2}). Subscribe: import {subscribe} from 'valtio'. const unsub = subscribe(state, () => console.log('changed')). useSnapshot poza komponentem: const snap = snapshot(state). Serializable. DevTools: import {devtools} from 'valtio/utils'. devtools(state, {name: 'my-store', enabled: true}). Async: async function loadData() { state.loading = true. const data = await fetch('/api/data').then(r => r.json()). state.data = data. state.loading = false. }. Ref (non-reactive): import {ref} from 'valtio'. state.canvas = ref(canvasElement). Nie trackuje. proxyWithHistory: import {proxyWithHistory} from 'valtio/utils'. undo/redo wbudowany. proxySet/proxyMap: reaktywne kolekcje. Valtio vs Zustand: Valtio — mutuj bezpośrednio, proxy magic. Zustand — immutable setter. Valtio — intuicyjny dla JS devów. Kiedy Valtio: prototypy. Proste state. Nie lubisz immutability.",
  },
  {
    question: "Signals w React — @preact/signals-react i Alien Signals?",
    answer: "Signals koncepcja: granularne reaktywne wartości. Bez re-render całego drzewa. Subskrypcja per-wartość. Preact Signals: @preact/signals-react — React adapter. Instalacja: npm install @preact/signals-react. import {signal, computed, effect} from '@preact/signals-react'. const count = signal(0). const doubled = computed(() => count.value * 2). React component: function App() { return button onClick={() => count.value++} {count} /button. }. Nie useSnapshot ani observer — auto! effect(() => { console.log('count changed:', count.value) }). Ograniczenia: wymaga babel/swc transform. Nie w Next.js App Router bez konfiguracji. Alien Signals: nowa biblioteka 2024. Najszybsze signals. Vue Vapor używa. SolidJS model. TC39 Signals Proposal: standardowe signals w JS. Proposal Stage 1. Polyfill: signal-polyfill. Compatibility layer dla frameworków. Angular Signals (stable): Angular 17+. import {signal, computed, effect} from '@angular/core'. const count = signal(0). const doubled = computed(() => count() * 2). count.set(1). count.update(c => c + 1). Reactive forms: model inputs. Two-way binding z signals. SolidJS signals (native): createSignal, createEffect, createMemo. Najdojrzalszy model signals. Qwik signals: useSignal, useStore. Resume-ability + signals. Signals vs useState: useState — React re-render tree. signal — granularne, żaden re-render parent. Signals przyszłość? TC39 Proposal sugeruje tak.",
  },
  {
    question: "Porównanie Zustand, Jotai, Legend State, Nanostores i Valtio?",
    answer: "Zustand (lider 2024): Daishi Kato. Prosty. Hooks-based. Immutable updates. Bundle: ~3KB. Najszerszy ekosystem. Middleware: devtools, persist, immer. Kiedy: większość projektów. Standard 2024. Jotai (atom model): Daishi Kato. React-first. Atom composition. Bundle: ~6KB. Atomic state. Recoil-like ale prostszy. Kiedy: złożona, powiązana state. Derive chains. Legend State (signals): Jay Meistrich. Najszybszy update. Persystencja. Bundle: ~9KB. Kiedy: performance critical. React Native + web. Nanostores (micro): Andrey Sitnik. Framework-agnostic. 1KB. Kiedy: multi-framework, micro-frontend. Valtio (proxy): Daishi Kato. Mutable API. Bundle: ~5KB. Kiedy: prototypy, prosty state. XState (machines): David Khourshid. State machines. Bundle: ~15KB. Kiedy: kompleksowa logika. Formularz wieloetapowy. Redux Toolkit (enterprise): standardowy Redux. Duże projekty. DevTools best. Wybór 2024: nowy projekt React -- Zustand. Atomowe zależności -- Jotai. Multi-framework -- Nanostores. Performance + persist -- Legend State. Mutable syntax -- Valtio. Complex flows -- XState. Bundle size comparison: Nanostores: 1KB. Zustand: 3KB. Valtio: 5KB. Jotai: 6KB. Legend State: 9KB. XState: 15KB.",
  },
];

const stateLibraries = [
  { biblioteka: "Legend State", podejscie: "Signals + Observable", bundle: "~9KB", kiedy: "Performance, auto-persist, React Native" },
  { biblioteka: "Nanostores", podejscie: "Atom + Map (1KB!)", bundle: "~1KB", kiedy: "Multi-framework, micro-frontends" },
  { biblioteka: "Valtio", podejscie: "Proxy (mutowalne)", bundle: "~5KB", kiedy: "Intuicyjny API, prototypy" },
  { biblioteka: "Preact Signals", podejscie: "Signals reactive", bundle: "~3KB", kiedy: "Granularne updates, bez observer" },
  { biblioteka: "Zustand", podejscie: "Hooks + immutable", bundle: "~3KB", kiedy: "Standard 2024 — większość projektów" },
  { biblioteka: "Jotai", podejscie: "Atoms composition", bundle: "~6KB", kiedy: "Złożone zależności, Recoil alternatywa" },
];

export default function BlogLegendStateNanostoresCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Legend State, Nanostores, Valtio i Signals | Fotz Studio"
        description="State management React 2024: Legend State (signals + persist), Nanostores (1KB multi-framework), Valtio (proxy mutable), Preact Signals, porównanie…"
        canonicalUrl="https://fotz.pl/blog/legend-state-nanostores-valtio-signals-state-management-react-2024"

        keywords="Legend State, Nanostores, Valtio i Signals co to jest, Legend State, Nanostores, Valtio i Signals jak działa, Legend State, Nanostores, Valtio i Signals tutorial, Legend State, Nanostores, Valtio i Signals przykład, czym jest Legend State, Nanostores, Valtio i Signals, Legend State, Nanostores, Valtio i Signals dokumentacja, Legend State, Nanostores, Valtio i Signals przewodnik"

        canonical="https://fotz.pl/blog/legend-state-nanostores-valtio-signals-state-management-react-2024"
      />
      <ArticleSchema
        title="Legend State, Nanostores, Valtio i Signals — state management React 2024?"
        description="6 nowoczesnych bibliotek state management (Legend State/Nanostores/Valtio/Signals/Zustand/Jotai) — signals, proxy, atoms i porównanie bundle size."
        url="https://fotz.pl/blog/legend-state-nanostores-valtio-signals-state-management-react-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "State Management React 2024", url: "https://fotz.pl/blog/legend-state-nanostores-valtio-signals-state-management-react-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "State Management 2024", url: "/blog/legend-state-nanostores-valtio-signals-state-management-react-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / State Management / Signals
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              State Management 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Legend State (signals), Nanostores (1KB),
              Valtio (proxy), Preact Signals i porównanie z Zustand/Jotai.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Signals", value: "Legend State" },
                { label: "1KB!", value: "Nanostores" },
                { label: "Proxy", value: "Valtio" },
                { label: "Standard", value: "Zustand" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-violet-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek state management — podejście i kiedy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Legend State, Nanostores, Valtio, Signals, Zustand i Jotai —
              podejście, bundle i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {stateLibraries.map((s, i) => (
                  <tr key={s.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{s.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.podejscie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{s.bundle}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{s.kiedy}</td>
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

      <RelatedArticles currentArticleId="legend-state-nanostores-valtio-signals-state-management-react-2024" />
      <ContactSection />
    </Layout>
  );
}
