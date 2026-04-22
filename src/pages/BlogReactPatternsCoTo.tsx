import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Compound Components Pattern — co to jest i jak implementować?",
    answer: "Compound Components: wzorzec gdzie kilka komponentów współdzieli ukryty stan przez Context. Przykład z HTML: select + option (natywne compound components). React implementacja: Select.Root, Select.Trigger, Select.Value, Select.Content, Select.Item — jak Radix UI. Implementacja: const SelectContext = createContext(). SelectRoot provider + context. SelectTrigger, SelectItem consumerzy kontekstu. Użycie: Select.Root value={value} onChange={setValue} -> Select.Trigger -> Select.Content -> Select.Item. Zalety: elastyczny layout (user decyduje gdzie co). Brak prop drilling. Czytelna struktura. Wbudowany state management. Przykład Tabs: Tabs.Root + Tabs.List + Tabs.Tab + Tabs.Content. Tabs.Root: activeTab state + context. Tabs.Tab: onClick -> setActiveTab. Tabs.Content: render gdy activeTab === id. shadcn/ui bazuje na tym wzorcu (Radix UI). Wariant z React.Children: React.cloneElement(child, {extraProp}). Mniej elastyczny (hierarchia wymagana). Context lepszy. Implicit state sharing: user nie musi przekazywać state między komponentami. Magicznie się komunikują przez context. Biblioteki: Radix UI, Headless UI — compound components. Reach UI — pierwotny popularyzator wzorca.",
  },
  {
    question: "Custom Hooks — jak pisać i kiedy wyodrębniać logikę?",
    answer: "Custom Hooks: funkcje zaczynające od 'use' korzystające z wbudowanych hooków. Wyodrębniają logikę stanową z komponentów. Cel: reużywalność logiki. Separacja of concerns. Testowalność (hook oddzielnie od UI). Przykłady custom hooks: useLocalStorage: useState + useEffect + localStorage. Przechowuje stan w localStorage. Synchronizacja między tabs (storage event). useDebounce: useState + useEffect z setTimeout. Opóźnia aktualizację wartości. Dla search inputs. useMediaQuery: useState + useEffect z matchMedia. Reaguje na breakpoints. SSR-safe. useFetch: useState + useEffect + AbortController. Generyczny data fetching. Cancel on unmount. useIntersectionObserver: useState + useRef + IntersectionObserver. Lazy loading. Infinite scroll. useEventListener: useEffect z addEventListener. Automatyczne cleanup. Typed events. usePrevious: useRef — przechowuj poprzednią wartość. useClickOutside: useRef + useEventListener. Zamknij dropdown po kliknięciu poza. useHotkeys: keydown event. Skróty klawiszowe. react-hotkeys-hook. Reguły hooków: tylko na top level (nie w if/loop). Tylko w React functions (component lub hook). Kiedy wyodrębniać: ta sama logika w 2+ komponentach. Logika ukrywa szczegóły implementacji. Logika chcesz testować oddzielnie.",
  },
  {
    question: "Render Props i Higher-Order Components — stare wzorce vs hooks?",
    answer: "Render Props (2017): komponent przyjmuje funkcję jako prop. Funkcja zwraca React elements. Pozwala współdzielić logikę stanową. Przykład: MouseTracker render={({x, y}) => div}. Aktualnie: children as function (prop children jako funkcja). Hooks zastąpiły render props dla większości use cases. Ale nadal używane w: react-query (v4 ma render prop API). Formik render prop. Komputacja nad tablicami danych. Higher-Order Components (HOC) (2016): funkcja przyjmuje komponent, zwraca nowy. withAuth(Component) — komponent z auth check. withLoading(Component) — komponent z loading state. Problemy HOC: wrapper hell (wielokrotne owijanie). Nieczytelny displayName. Props collision. Hooks zastąpiły HOC dla większości use cases. Nadal używane: connect() w Redux (stary API). withRouter w React Router 5. HOC dla class components. State Machine HOC (XState) — withMachine. Composition pattern (2024): zamiast HOC używaj kompozycji. ComposedButton = withTracking(withTheme(Button)). Stało się: const Button = () => {const theme = useTheme(); const track = useTracking(); ...}. Provider pattern: Context Provider + custom hook. AuthProvider + useAuth(). ThemeProvider + useTheme(). Container/Presentational (stary): Container — logika. Presentational — UI. Hooks sprawiły że to mniej ważne. Ale nadal wartościowy pattern konceptualnie.",
  },
  {
    question: "Performance patterns — memo, useMemo, useCallback i lazy loading?",
    answer: "React.memo: opakowuje komponent. Rerenderuje tylko gdy props zmieniają się. Domyślne porównanie: shallow equality. Custom: React.memo(Component, (prev, next) => prev.id === next.id). Kiedy używaj: komponent drogi (wiele dzieci, obliczenia). Komponent renderuje się często z tymi samymi props. Kiedy NIE: komponent tani. Props zawsze różne. useMemo: zapamiętuje wynik obliczeń. const sorted = useMemo(() => items.sort(...), [items]). Uwaga: premature optimization. Memoizacja ma koszt. Używaj tylko gdy obliczenie jest drogie. useCallback: zapamiętuje funkcję. Stabilna referencja. Ważne gdy przekazujesz do React.memo dziecka. const handleClick = useCallback(() => {...}, [deps]). React.lazy + Suspense: dynamic import dla code splitting. const HeavyComponent = lazy(() => import('./Heavy')). Suspense fallback={div}. Route-based code splitting (najważniejszy use case). Component-level splitting (mniej potrzebny). startTransition: oznacz update jako non-urgent. Np. search input — wyniki nieistotne do zakończenia typing. isPending z useTransition — loading state. Virtualization: react-window, react-virtual (TanStack Virtual). Renderuj tylko widoczne elementy. 10,000 wierszy listy — tylko 20 renderowanych. React Compiler (RC 2024): automatyczna memoizacja. Zastąpi manualne useMemo/useCallback. React 19 + compiler = mniej boilerplate.",
  },
  {
    question: "Error Boundaries i Suspense — obsługa błędów i asynchroniczności?",
    answer: "Error Boundaries: class components łapiące błędy potomków (tylko class, nie hooks). componentDidCatch(error, info). getDerivedStateFromError(error). Kiedy łapie: render time errors. Constructor errors. Lifecycle method errors. Kiedy NIE łapie: async errors (useEffect, event handlers). SSR errors. Błędy w samym boundary. Implementacja: class ErrorBoundary extends React.Component {state = {hasError: false}. static getDerivedStateFromError() {return {hasError: true}}. render() {if (this.state.hasError) return fallback. return children}}. react-error-boundary: biblioteka ułatwiająca (hooks-friendly). ErrorBoundary + fallbackRender. useErrorBoundary — imperatively throw. resetErrorBoundary — reset po błędzie. Suspense (React 18+): obsługa asynchronicznych zasobów. fallback={Spinner} — podczas ładowania. Działa z lazy (code splitting). Działa z async data (TanStack Query, Relay, SWR — eksperymentalnie). Nested Suspense: każdy ma własny fallback. Granularne loading states. Streaming SSR + Suspense: server streams HTML. Suspense boundaries wysyłane gdy dane gotowe. Szybszy TTFB. use() hook (React 19): use(promise) — zawiesza komponent. use(context) — jak useContext ale może być warunkowy. Async Server Components (Next.js): async function Page() {const data = await fetchData(). return div}. Serwer obsługuje async. Klient dostaje statyczny HTML.",
  },
];

const reactPatterns = [
  { wzorzec: "Compound Components", cel: "Elastyczny, powiązany UI", implementacja: "Context + Root/Child components", przyklad: "Select, Tabs, Accordion, Dialog", kiedy: "Komponenty z powiązanym stanem, shadcn/ui" },
  { wzorzec: "Custom Hooks", cel: "Reużywalna logika stanowa", implementacja: "useXxx() function", przyklad: "useLocalStorage, useDebounce, useFetch", kiedy: "Ta sama logika w 2+ komponentach" },
  { wzorzec: "Render Props", cel: "Dzielenie logiki renderowania", implementacja: "prop children / render as function", przyklad: "react-query renderProp, Formik", kiedy: "Rzadko — hooks są lepsze" },
  { wzorzec: "HOC", cel: "Owijanie komponentów", implementacja: "withXxx(Component)", przyklad: "withAuth, connect (Redux)", kiedy: "Class components, biblioteki legacy" },
  { wzorzec: "Provider Pattern", cel: "Globalny stan/DI", implementacja: "Context.Provider + useXxx()", przyklad: "AuthProvider, ThemeProvider", kiedy: "Global state bez prop drilling" },
  { wzorzec: "Error Boundary", cel: "Obsługa błędów renderowania", implementacja: "class ErrorBoundary lub react-error-boundary", przyklad: "Fallback UI, retry logic", kiedy: "Zawsze owijaj sekcje UI" },
];

export default function BlogReactPatternsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React wzorce | Fotz Studio"
        description="React design patterns: Compound Components, Custom Hooks, Render Props, HOC, Provider Pattern, Error Boundary, Suspense, React.memo i performance patterns."
        canonical="https://fotz.pl/blog/react-wzorce-compound-components-custom-hooks-hoc-error-boundary"

        keywords="React wzorce co to jest, React wzorce jak działa, React wzorce tutorial, React wzorce przykład, czym jest React wzorce, React wzorce dokumentacja, React wzorce przewodnik"

        canonical="https://fotz.pl/blog/react-wzorce-compound-components-custom-hooks-hoc-error-boundary"
      />
      <ArticleSchema
        title="React wzorce — Compound Components, Custom Hooks, HOC, Error Boundary?"
        description="6 React patterns (Compound/Hooks/Render Props/HOC/Provider/Error Boundary) — implementacja, przykłady, React.memo, Suspense i performance optimization."
        url="https://fotz.pl/blog/react-wzorce-compound-components-custom-hooks-hoc-error-boundary"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React wzorce", url: "https://fotz.pl/blog/react-wzorce-compound-components-custom-hooks-hoc-error-boundary" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "React wzorce", url: "/blog/react-wzorce-compound-components-custom-hooks-hoc-error-boundary" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Patterns
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wzorce projektowe React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Compound Components, Custom Hooks, Provider Pattern i Error Boundaries
              — najważniejsze wzorce dla skalowalnych aplikacji React.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Wspólny stan", value: "Compound" },
                { label: "Reużywalna logika", value: "Custom Hooks" },
                { label: "Globalny stan", value: "Provider" },
                { label: "Obsługa błędów", value: "Error Boundary" },
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

      {/* Wzorce */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wzorców projektowych React</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Compound Components, Custom Hooks, Render Props, HOC, Provider i Error Boundary
              — kiedy stosować każdy wzorzec i jakie problemy rozwiązuje.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wzorzec</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cel</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Implementacja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Przykład</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {reactPatterns.map((p, i) => (
                  <tr key={p.wzorzec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.wzorzec}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.cel}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.implementacja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.przyklad}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.kiedy}</td>
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

      <RelatedArticles currentArticleId="react-wzorce-compound-components-custom-hooks-hoc-error-boundary" />
      <ContactSection />
    </Layout>
  );
}
