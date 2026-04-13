import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest React Compiler i jak automatycznie memoizuje?",
    answer: "React Compiler (dawniej React Forget): nowe narzędzie Facebooka. Automatyczna memoizacja — bez useMemo i useCallback. Kompilator analizuje kod. Dodaje memoizację tam gdzie potrzeba. Wynik: mniej boilerplate, ta sama wydajność. Jak działa: Kompilator czyta Components i hooks. Analizuje zależności. Wstawia cache calls automatycznie. Analogia: jak TypeScript ale dla memoizacji. Bez kompilatora: const value = useMemo(() => expensiveCalc(a, b), [a, b]). const handler = useCallback(() => handleClick(id), [id]). Z kompilatorem (taki sam wynik): const value = expensiveCalc(a, b). const handler = () => handleClick(id). Kompilator sam to optymalizes. Instalacja (React 19): npm install --save-dev babel-plugin-react-compiler. babel.config.js: plugins: [['babel-plugin-react-compiler', {target: '18'}]]. Lub Vite: import ReactCompilerConfig from 'babel-plugin-react-compiler'. vite.config.ts: react({babel: {plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]]}}). Wymagania: React 17+ (instrukcja). React 19 dla pełnego wsparcia. TypeScript lub JavaScript. Kod musi spełniać Rules of React. Rules of React: komponenty i hooks to czyste funkcje. Nie mutuj props. Nie czytaj/pisz refs podczas renderowania. Brak side effects w render. Kompilator egzekwuje te reguły.",
  },
  {
    question: "eslint-plugin-react-compiler — wykrywanie naruszeń Rules of React?",
    answer: "eslint-plugin-react-compiler: ESLint plugin od React team. Wykrywa naruszenia Rules of React. Działa bez kompilatora. Przygotuj kod na kompilator. Instalacja: npm install --save-dev eslint-plugin-react-compiler. .eslintrc: plugins: ['react-compiler']. rules: {'react-compiler/react-compiler': 'error'}. Co wykrywa: Mutacje props i state. Czytanie ref.current w render. Dostęp do zewnętrznych zmiennych bez deklaracji w deps. Warunki w hookach. Przykład naruszenia: function BadComponent({items}) { items.push(newItem) // mutacja props! return ul... }. ESLint: react-compiler/react-compiler: Mutating a value returned from props is not allowed. Naprawienie: const localItems = [...items, newItem]. Granularność: 'use no memo' — wyłącz kompilator per komponent. Pomocne podczas migracji. Debugowanie: React DevTools (nowe) — pokaż co skompilowane. Komponent outline. Które props zmemoizowane. Opt-in (React 17/18): 'use memo' — wymuś kompilację per plik. Stopniowa migracja. Bez zmiany całej aplikacji. Compatibility: hooks bez naruszenia reguł — kompilowane automatycznie. Klasy — nie kompilowane (brak hooks). HOC z refs — może wymagać naprawy. forwardRef — wspierany. React.memo — kompilator może usunąć zbędne. Nie wszystkie wzorce obsługiwane: useImperativeHandle złożone wzorce. Custom hooks z mutacjami.",
  },
  {
    question: "React 19 — nowe funkcje: use hook, useActionState i Server Actions?",
    answer: "use(promise): nowy hook dla async. Suspense integration wbudowana. const data = use(fetchData()). Działa w warunkach (if). Nie tylko na top level. use(context): alternatywa dla useContext. Działa z resolving resources. Suspense boundary wymagane powyżej. useActionState (dawniej useFormState): const [state, dispatch, isPending] = useActionState(action, initialState). action — async function (Server Action lub zwykła). isPending — boolean podczas wykonania. Automatyczny error handling. useFormStatus: status formularza bez prop drilling. W child komponencie. const {pending, data, method} = useFormStatus(). Bez React Context. useOptimistic: const [optimisticItems, addOptimistic] = useOptimistic(items, updater). addOptimistic(newItem). Rollback automatyczny po Server Action. React.use(): łączony z Suspense. const resource = createResource(fetchUser). function Profile() { const user = React.use(resource) }. Server Actions (React 19 + Next.js 15): 'use server' directive. async function createPost(formData: FormData) {'use server'. await db.post.create({data: {...formData}})}. form action={createPost}. Bez API route. RPC przez HTTP automatycznie. Serializable arguments only. Error handling: try/catch w Server Action. return {error: message}. useActionState pobierze błąd. ref as prop (React 19): forwardRef nie potrzebny. function Input({ref, ...props}) — ref jako zwykły prop. Uproszczone forwarding. Context jako provider: Context value={...} zamiast Context.Provider.",
  },
  {
    question: "Migracja i kompatybilność React Compiler?",
    answer: "Stopniowa migracja: Włącz eslint-plugin-react-compiler. Napraw naruszenia. Włącz kompilator per plik ('use memo'). Sprawdź wyniki (React DevTools). Włącz globalnie. Typowe naruszenia do naprawy: Mutacje obiektów: const arr = []. arr.push(item). Napraw: return [...arr, item]. Czytanie mutable ref w render: el.current.style. Napraw: przenieś do effect. Warunki w hookach (już naruszenie Rules): if (cond) useState(). Napraw: zawsze call hooks. Zewnętrzne zmienne: let count = 0. function Component() { count++ }. Napraw: useState. Custom hooks z naruszeniami: useWindowSize z mutable state poza hooks. Napraw: useState wewnątrz. React DevTools dla kompilatora: Nowe React DevTools pokazują memo status. Zielona obwódka — skompilowane i memoizowane. Memo badge na komponentach. Profiler — porównaj przed i po. Testowanie zmian: Nie zakładaj że kompilator zawsze pomaga. Testuj wydajność. Benchmark krytyczne ścieżki. react-scan — wizualizuj re-renders. Performance: Kompilator generuje dodatkowy kod (cache checks). Narzut na pierwsze renderowanie. Korzyści przy re-renderach. Nie silver bullet dla każdego. React.memo() po kompilatorze: Kompilator może eliminować zbędne React.memo. Lub je uzupełniać automatycznie. Nie usuwaj ręcznie bez sprawdzenia. Inne memoizacje (Zustand, Jotai): Selektory — kompilator nie optymalizuje. useSelector w Redux — nie zmienione. Tylko React rendering zoptymalizowane.",
  },
  {
    question: "React 19 i Compiler — production readiness i best practices?",
    answer: "Status (2024): React Compiler — beta (Open Source). Używany przez Instagram prod (Facebook). Nie wszystkie wzorce. Production ready: nie dla wszystkich projektów. React 19 — stable release. Breaking changes: act() deprecation (testy). ref cleanup functions. hydration error diffs. useDeferredValue initialValue. Context bez .Provider. Nowe błędy hydration: React 19 lepsze hydration error messages. Pokaż diff HTML. Łatwiejsze debugowanie. Document metadata (React 19): title, meta, link z komponentów. Automatyczne hoisting do head. Bez react-helmet. Resource preloading: preload, prefetch, preinit APIs. Inline in components. Automatyczny head management. Best practices z kompilatorem: Nie myśl o memoizacji — pisz czysty kod. Kompilator zoptymalizuje. Skupiaj się na Rules of React. Używaj TypeScript dla lepszego inference. Stopniowa adopcja: Nie migruj całości naraz. Per page, per route. Testuj regressions. Rollback per komponent ('use no memo'). Ecosystem: Next.js 15 — pierwsza klasa wsparcia kompilatora. Remix — w trakcie. Vite + React — przez babel plugin. CRA — deprecated (użyj Vite). Monitoring: React DevTools Profiler. Porównaj renders przed/po. Core Web Vitals mierz w prod. LCP improvement — główny benefit. Unikaj: Poleganie na memoizacji zamiast naprawy architektury. Kompilator nie naprawia złej architektury. Ekstremalne optymalizacje — zajmij się DX.",
  },
];

const reactCompilerFeatures = [
  { feature: "Automatyczna memoizacja", dziala: "Tak (bez useMemo/useCallback)", wymagania: "Rules of React — brak mutacji props" },
  { feature: "eslint-plugin-react-compiler", dziala: "Linting naruszeń", wymagania: "ESLint 8+, npm install plugin" },
  { feature: "use(promise)", dziala: "Async w warunkach", wymagania: "React 19, Suspense boundary powyżej" },
  { feature: "useActionState", dziala: "Form state + isPending", wymagania: "React 19 lub useFormState (React 18)" },
  { feature: "Server Actions", dziala: "RPC bez API route", wymagania: "React 19 + bundler (Next.js, Remix)" },
  { feature: "ref jako prop", dziala: "Bez forwardRef", wymagania: "React 19 — stare forwardRef deprecated" },
];

export default function BlogReactCompilerCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Compiler | Fotz Studio"
        description="React Compiler (React Forget): automatyczna memoizacja bez useMemo/useCallback, eslint-plugin, React 19 (use hook, useActionState, Server Actions, ref…"
        canonicalUrl="https://fotz.pl/blog/react-compiler-automatyczna-memoizacja-react-19-use-hook-server-actions-2024"

        keywords="React Compiler co to jest, React Compiler jak działa, React Compiler tutorial, React Compiler przykład, czym jest React Compiler, React Compiler dokumentacja, React Compiler przewodnik"

        canonical="https://fotz.pl/blog/react-compiler-automatyczna-memoizacja-react-19-use-hook-server-actions-2024"
      />
      <ArticleSchema
        title="React Compiler — automatyczna memoizacja, React 19 use hook, useActionState i Server Actions 2024?"
        description="6 funkcji React Compiler/19 (memoizacja/eslint/use/useActionState/Server Actions/ref prop) — Rules of React, migracja, Next.js 15 wsparcie i production readiness."
        url="https://fotz.pl/blog/react-compiler-automatyczna-memoizacja-react-19-use-hook-server-actions-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Compiler", url: "https://fotz.pl/blog/react-compiler-automatyczna-memoizacja-react-19-use-hook-server-actions-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "React Compiler", href: "/blog/react-compiler-automatyczna-memoizacja-react-19-use-hook-server-actions-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Compiler / React 19
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Compiler i React 19
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Automatyczna memoizacja (bez useMemo/useCallback), eslint-plugin-react-compiler,
              React 19 (use hook, useActionState, Server Actions, ref jako prop).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Auto memo", value: "Compiler" },
                { label: "Async hook", value: "use()" },
                { label: "Form state", value: "useActionState" },
                { label: "RPC bez API", value: "Server Actions" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-sky-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 funkcji React Compiler i React 19</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Automatyczna memoizacja, eslint, use(), useActionState, Server Actions i ref prop —
              co robi, jak działa i wymagania.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Feature</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Działa</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wymagania</th>
                </tr>
              </thead>
              <tbody>
                {reactCompilerFeatures.map((f, i) => (
                  <tr key={f.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.feature}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.dziala}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.wymagania}</td>
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

      <RelatedArticles currentArticleId="react-compiler-automatyczna-memoizacja-react-19-use-hook-server-actions-2024" />
      <ContactSection />
    </Layout>
  );
}
