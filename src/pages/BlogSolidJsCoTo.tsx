import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest SolidJS i jak działa fine-grained reactivity?",
    answer: "SolidJS: framework JavaScript z fine-grained reactivity. Bez virtual DOM — bezpośrednie aktualizacje DOM. Składnia JSX jak React ale inne zachowanie. Ryan Carniato. Fine-grained reactivity: React — re-render komponentu przy zmianie state. Solid — aktualizuj TYLKO konkretny węzeł DOM. Przykład: const [count, setCount] = createSignal(0). return div p{count()}/p button onClick={() => setCount(c => c+1)} /div. Tylko p aktualizuje przy zmianie count. Nie cały komponent. Sygnały (Signals): const [name, setName] = createSignal('Adam'). name() — getter (wywołanie, nie właściwość!). setName('Jan') — setter. Reactive tracking automatyczny. Każde wywołanie name() śledzone w reaktywnym kontekście. Memos (pochodne): const doubled = createMemo(() => count() * 2). Przelicza tylko gdy zależności zmienią. Lazy — nie przelicza jeśli nie odczytany. Effects: createEffect(() => { console.log('count:', count()) }). Uruchamia się automatycznie przy zmianie. Cleanup: return () => clearTimeout(timer). Bez tablicy zależności — automatyczne śledzenie. Stores: createStore dla obiektów. const [state, setState] = createStore({user: {name: 'Adam', age: 30}}). setState('user', 'age', 31). Immer-like API. Nested updates. Porównanie z React: Solid — brak useState re-render. Solid — brak useEffect dependency array. Solid — mniejszy bundle (6KB vs 42KB React+DOM). Solid — szybszy benchmarks (js-framework-benchmark).",
  },
  {
    question: "Komponenty, props i lifecycle w SolidJS?",
    answer: "Komponenty: funkcje wywoływane RAZ. Nie re-renderują. Setup phase jak konstruktor. const Counter = (props) => { const [count, setCount] = createSignal(0). return button onClick={() => setCount(c => c+1)} {count()} /button }. Props: dostępne reaktywnie. props.name — automatycznie śledzone. Nie destrukturyzuj! (traci reaktywność). splitProps: const [local, others] = splitProps(props, ['class']). Bezpieczna destrukturyzacja. mergeProps: const merged = mergeProps({defaultValue: 0}, props). Default props. children: const Child = (props) => div {props.children} /div. Children.toArray(props.children). Lifecycle: createEffect — po renderze (cleanup support). onMount: onMount(() => { ... }). Odpowiednik useEffect z []. onCleanup: onCleanup(() => { remove listener }). W createEffect lub komponentach. Show komponent: Show when={isLoggedIn()} fallback={Login}. Renderuj warunkowo. Tylko tworzy/niszczy DOM gdy zmienia się warunek. For komponent: For each={items()} fallback={Loading}. {(item, index) => li {item.name} /li}. Nie renderuje ponownie — aktualizuje tylko zmienione. Switch/Match: Switch fallback={Default}. Match when={type() === 'a'} Component /Match. Portal: renderuj poza hierarchią. Dialog, tooltip. Suspense: Suspense fallback={Spinner}. AsyncComponent. createResource dla async data. ErrorBoundary: ochrona przed crashem komponentu.",
  },
  {
    question: "Async, Resources i Context w SolidJS?",
    answer: "createResource: async data fetching. const [user, {mutate, refetch}] = createResource(userId, fetchUser). userId — source signal (refetch przy zmianie). fetchUser — async function. user() — Accessor. user.loading — boolean. user.error — błąd. Suspense integration automatyczna. Refetch: refetch() — ponowne wywołanie. mutate(newData) — optymistyczna aktualizacja. Deferred loading: resource.state: 'unresolved', 'pending', 'ready', 'refreshing', 'errored'. Lazy loading komponentów: const LazyComp = lazy(() => import('./Heavy')). Suspense + lazy automatycznie. Context: const ThemeContext = createContext('light'). Provider: ThemeContext.Provider value='dark'. Consumer: useContext(ThemeContext). Bez prop drilling. Reactive w kontekście. Reactive stores przez context: const StoreContext = createContext(). Provider value={[state, setState]}. Każdy konsument reaktywny. SolidStart: meta-framework SolidJS. File-based routing (Vinxi pod spodem). Server functions: use server directive. const getUser = async (id) => {use server; return db.getUser(id)}. SSR + streaming. API routes. SolidStart adaptery: Vercel, Netlify, Cloudflare, Node.js. Router: solid-router. Route component. useParams, useSearchParams, useNavigate. Nested routes. Action (createAction): mutacja danych. Form z serverem. useAction hook. Jak Remix actions.",
  },
  {
    question: "Reactive primitives — tworzenie własnych i zaawansowane wzorce?",
    answer: "Custom primitives: kompozycja istniejących. function createLocalStorage(key, initial) { const [value, setValue] = createSignal(localStorage.getItem(key) ?? initial). createEffect(() => localStorage.setItem(key, value())). return [value, setValue] }. Reaktywny localStorage. Automatyczny cleanup. Batch: batch(() => { setA(1). setB(2) }). Jeden update zamiast dwóch. Optymalizacja. untrack: untrack(() => count()). Odczyt bez śledzenia. W effect — nie dodaj do zależności. on helper: on(source, fn) — explicit dependency. createReaction: lazy effect. Odpal tylko przy śledzeniu. Reactive graph: każdy signal ma subscribers. Memo — zarówno subscriber i publisher. Fine-grained: update propaguje przez graph. Tylko dotknięte węzły. Solid DX tools: solid-devtools (Vite plugin). Reactive graph visualizer. Signal inspector. Time travel debugging. Animacje: @solidjs/motion. Framer Motion port. spring, animate. CSS transitions przez solid. Testing: solid-testing-library. @solidjs/testing-library. Podobne do RTL. render(Component). screen.getByRole. Vitest + jsdom. Solid 2.0 (nadchodzące): Universal reaktywność. Nie tylko DOM. Node.js streams. React Native? Bundle size: Solid — 6KB. Qwik — 1KB (framework). Svelte — 10KB (runtime). React — 42KB (React + ReactDOM). Alpine.js — 16KB. Vue — 34KB.",
  },
  {
    question: "SolidJS vs React vs Vue — kiedy wybrać fine-grained reactivity?",
    answer: "SolidJS zalety: Najszybszy framework w js-framework-benchmark (prawie). Mały bundle (~6KB). Fine-grained — brak zbędnych re-renderów. React-like JSX — łatwa migracja dla React developerów. TypeScript support pierwszorzędny. Bez virtual DOM overhead. SolidJS wady: Mały ekosystem (React >>>). Mało bibliotek UI (vs shadcn/ui dla React). Komponenty wywoływane raz — błędy dla React developerów (destrukturyzacja props!). Mały rynek pracy. SolidStart wciąż rozwijany. React zalety: Ogromny ekosystem. Next.js / Remix dojrzałe. Mnóstwo bibliotek. Rynek pracy. React 19 + RSC ulepszenia. Vue 3 zalety: Composition API. Mniejszy bundle niż React. Nuxt.js dojrzały. Popularne w Polsce/Europie. Dobry DX. Angular zalety: Korporacyjny standard. Full framework (router, HTTP, forms wbudowane). Signals (Angular 17+). Kiedy Solid: startup, mały team, performance-critical. Nowy projekt bez legacy. Developer-owned stack. Kiedy React: duży team, wiele developerów. Ekosystem krytyczny. Long-term support. Kiedy Vue: Europejski rynek. Poza React/Angular. Nuxt.js dla SSR. Reaktywność porównanie: React useState — component re-render. Vue ref — component re-render. Solid createSignal — fine-grained DOM update. Angular Signals — fine-grained (Angular 17+). Svelte stores — compile-time reaktywność. Zalecenia: Ucz się Solid dla rozumienia reaktywności. Używaj React w produkcji dla ekosystemu.",
  },
];

const solidVsReact = [
  { koncepcja: "State", react: "useState — re-render komponentu", solid: "createSignal — fine-grained DOM update" },
  { koncepcja: "Side effects", react: "useEffect z dependency array", solid: "createEffect — auto tracking, bez array" },
  { koncepcja: "Derived state", react: "useMemo(() => ..., [deps])", solid: "createMemo(() => ...) — auto deps" },
  { koncepcja: "Lifecycle", react: "useEffect z [] (mount)", solid: "onMount + onCleanup" },
  { koncepcja: "Context", react: "createContext + useContext", solid: "createContext + useContext (reactive)" },
  { koncepcja: "Async data", react: "useEffect + useState", solid: "createResource + Suspense" },
];

export default function BlogSolidJsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="SolidJS — fine-grained reactivity, createSignal, createStore i SolidStart 2024 | Fotz.pl"
        description="SolidJS: fine-grained reactivity (bez virtual DOM), createSignal/createMemo/createEffect, createStore, Suspense, SolidStart (SSR) i SolidJS vs React vs Vue porównanie."
        canonicalUrl="https://fotz.pl/blog/solidjs-fine-grained-reactivity-createsignal-solidstart-vs-react-2024"
      />
      <ArticleSchema
        title="SolidJS — fine-grained reactivity, createSignal, createStore i SolidStart 2024?"
        description="6 konceptów SolidJS vs React (Signal/Memo/Effect/Lifecycle/Context/Resource) — bez virtual DOM, Suspense, SolidStart, reactive primitives i kiedy wybrać SolidJS."
        url="https://fotz.pl/blog/solidjs-fine-grained-reactivity-createsignal-solidstart-vs-react-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SolidJS", url: "https://fotz.pl/blog/solidjs-fine-grained-reactivity-createsignal-solidstart-vs-react-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "SolidJS", href: "/blog/solidjs-fine-grained-reactivity-createsignal-solidstart-vs-react-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SolidJS / Reaktywność / Framework
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SolidJS — fine-grained reactivity
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Bez virtual DOM: createSignal, createMemo, createEffect, createStore,
              Suspense z createResource, SolidStart i porównanie z React.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Bez vDOM", value: "Fine-grained" },
                { label: "Reaktywność", value: "createSignal" },
                { label: "Bundle", value: "~6KB" },
                { label: "Meta-framework", value: "SolidStart" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-cyan-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SolidJS vs React — porównanie konceptów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              State, effects, derived state, lifecycle, context i async data —
              jak te same koncepty działają inaczej w React i SolidJS.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Koncepcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">React</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">SolidJS</th>
                </tr>
              </thead>
              <tbody>
                {solidVsReact.map((r, i) => (
                  <tr key={r.koncepcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{r.koncepcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs font-mono">{r.react}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs font-mono">{r.solid}</td>
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
