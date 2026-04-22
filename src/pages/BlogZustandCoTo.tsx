import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Zustand i czym różni się od Redux?",
    answer: "Zustand: minimalistyczna biblioteka do zarządzania stanem w React (Poimandres, 2019). Filozofia: state management nie musi być skomplikowany. Redux: powszechnie uznawany za zbyt verbose. Actions, Reducers, Selectors, Middleware, Thunks — wiele boilerplate. Zustand: jeden store, jedna funkcja create(), dostęp przez hook. const useStore = create((set) => ({bears: 0, addBear: () => set(state => ({bears: state.bears + 1}))}))). Użycie: const bears = useStore(state => state.bears). const addBear = useStore(state => state.addBear). Zalety Zustand: zero boilerplate. Działa poza React (vanilla JS). Automatyczna selektywna subskrypcja (component rerenderuje tylko gdy jego selektor zmienia się). Middleware wbudowane (immer, persist, devtools). TypeScript first. Bundle size: 8KB gzipped. Porównanie z Redux: Redux Toolkit (RTK) też redukuje boilerplate vs vanilla Redux. RTK + RTK Query to kompleksowy framework. Zustand prostszy dla małych-średnich projektów. Kiedy Zustand: globalny stan który nie pasuje do React Query (nie API data). UI state (sidebar open, theme, cart). Kiedy Redux/RTK: duże enterprisey aplikacje. Zaawansowane middleware wymagane. Ecosystem RTK Query.",
  },
  {
    question: "Jotai — atomowy model zarządzania stanem inspirowany Recoil?",
    answer: "Jotai: atomowy state manager dla React (Poimandres). Inspirowany Recoil (Facebook) ale bez boilerplate. Atom: najmniejsza jednostka stanu. const countAtom = atom(0). Użycie: const [count, setCount] = useAtom(countAtom). Jak useState ale globalnie dostępny. Derived atoms: const doubleAtom = atom(get => get(countAtom) * 2). Obliczony z innego atomu. Writable derived atom: atom(get => ..., (get, set, update) => set(countAtom, update)). Async atoms: atom(async get => await fetchUser(get(userIdAtom))). Automatyczne Suspense. Zalety Jotai: granularna subskrypcja — component rerenderuje tylko gdy jego atom zmieni się. Brak Provider (opcjonalny). Brak selectorów — atom jest selectorem. React Suspense integration. Brak boilerplate. TypeScript first. Atom Family: atomFamily(id => atom(fetchById(id))). Atoms per item. Efektywne. Jotai vs Zustand: Jotai — atom per piece of state, granular. Zustand — jeden store ze wszystkim. Jotai lepszy gdy wiele niezależnych pieces of state. Zustand lepszy gdy state jest powiązany. Recoil vs Jotai: Recoil — Facebook, większy, RecoilRoot wymagany. Jotai — mniejszy, szybszy, no provider needed. Jotai często preferowany nad Recoil. Valtio: proxy-based (Poimandres). Mutowalne przez proxy.",
  },
  {
    question: "Redux Toolkit (RTK) — jak używać w 2024?",
    answer: "Redux Toolkit: oficjalny sposób pisania Redux od 2019. Eliminuje boilerplate. Kluczowe API: configureStore: tworzy store z middleware (redux-thunk, devtools). createSlice: kombinuje reducer + actions w jednym miejscu. Immer wbudowany — możesz 'mutować' stan. createAsyncThunk: obsługa async actions. createEntityAdapter: normalizacja danych (CRUD helpers). Przykład slice: const counterSlice = createSlice({name: 'counter', initialState: {value: 0}, reducers: {increment: state => {state.value += 1}, decrement: state => {state.value -= 1}}}). RTK Query: wbudowane zarządzanie API calls. Automatyczne caching. Cache invalidation. Optimistic updates. Polling. Zastępuje React Query dla Redux-based projektów. createApi: define endpoints (query i mutation). Generuje hooki: useGetUsersQuery(), useCreateUserMutation(). Selektory: createSelector (Reselect wbudowany). Memoizacja selektorów. Kiedy Redux Toolkit vs inne: duże aplikacje enterprise. Potrzebujesz RTK Query. Masz duży team z Redux doświadczeniem. Potrzebujesz zaawansowanego middleware. Kiedy Zustand/Jotai zamiast RTK: nowy projekt. Mały-średni rozmiar. Chcesz mniej boilerplate. Nie potrzebujesz RTK Query (używasz TanStack Query). Migracja z Redux do RTK: stopniowo — zacznij od configureStore, potem createSlice.",
  },
  {
    question: "React Context API — kiedy używać zamiast zewnętrznych bibliotek?",
    answer: "Context API: wbudowane w React rozwiązanie dla global state. createContext(), useContext(), Provider. Kiedy Context wystarczy: rzadko zmieniające się dane — theme, locale, user session, auth. Dane używane przez wiele komponentów w drzewie. Unikaj dla: często zmieniający się stan — każda zmiana rerenderuje wszystkich consumerów. Duży performance hit przy częstych aktualizacjach. Problem z Context rerenderami: context.Provider rerenderuje wszystkich consumerów gdy value zmieni się. Nawet jeśli komponent używa tylko jednej części contextu. Rozwiązanie 1: podziel context na mniejsze (AuthContext, ThemeContext, UserContext). Rozwiązanie 2: use-context-selector (biblioteka) — subskrybuj tylko część contextu. Rozwiązanie 3: React.memo + useMemo dla value. Context vs Zustand: Context — dla rzadkich zmian, brak zależności. Zustand — częste aktualizacje, granularna subskrypcja. useReducer + Context: alternatywa dla Redux w małych projektach. reducer zarządza logiką. Context propaguje state. Brak zewnętrznych zależności. Server State vs Client State: Server State (API data) -> React Query / TanStack Query. Client State (UI, user input) -> Zustand / Jotai / Context. Nie używaj Zustand dla API data (React Query jest lepszy). Nie używaj React Query dla UI state.",
  },
  {
    question: "Jak wybrać właściwą bibliotekę state management w 2024?",
    answer: "Decision tree: czy to server state (dane z API)? Tak -> TanStack Query (React Query). Nie -> kontynuuj. Czy stan jest używany w całej aplikacji? Nie -> useState/useReducer lokalnie. Tak -> kontynuuj. Jak złożona jest aplikacja? Prosta (<10 screens) -> Context API. Średnia -> Zustand. Duża/Enterprise -> Zustand lub Redux Toolkit. Specyficzne wymagania -> patrz niżej. Potrzebujesz atomowego modelu? Jotai lub Recoil. Potrzebujesz proxy/mutacji? Valtio. Potrzebujesz RTK Query? Redux Toolkit. Nowe projekty w 2024: Zustand — default choice dla client state. TanStack Query — default choice dla server state. Kombinacja: Zustand (client) + TanStack Query (server). Skaluje się dobrze. Minimal boilerplate. Zustand best practices: nie przechowuj server state w Zustand (duplication). Podziel store na slice'y. useShallow dla obiektów (zapobiegnie zbędnym rerenderom). Immer middleware dla złożonych aktualizacji. Persist middleware dla localStorage. Devtools middleware dla debugging. Jotai best practices: używaj atomFamily dla list items. async atoms z Suspense. Atom debugger w devtools. Normalizuj dane podobnie jak w entity adapters.",
  },
];

const stateLibraries = [
  { biblioteka: "Zustand", model: "Single store (flux-like)", bundelSize: "8KB", boilerplate: "Minimalny", async: "Wbudowany (actions)", kiedy: "General purpose client state" },
  { biblioteka: "Jotai", model: "Atomic (per-atom)", bundelSize: "5KB", boilerplate: "Minimalny", async: "Async atoms + Suspense", kiedy: "Granular, niezależne pieces of state" },
  { biblioteka: "Redux Toolkit", model: "Flux (single store)", bundelSize: "15KB + Redux", boilerplate: "Średni (slice)", async: "createAsyncThunk / RTK Query", kiedy: "Enterprise, RTK Query, duży team" },
  { biblioteka: "Valtio", model: "Proxy (mutable)", bundelSize: "3KB", boilerplate: "Minimalny", async: "Wbudowany", kiedy: "Intuicyjna mutacja stanu" },
  { biblioteka: "Context API", model: "Provider/Consumer", bundelSize: "0KB (wbudowany)", boilerplate: "Niski", async: "Brak (zewnętrzny)", kiedy: "Rzadkie zmiany, brak zależności" },
  { biblioteka: "Recoil", model: "Atomic (Facebook)", bundelSize: "20KB", boilerplate: "Niski", async: "Selectors + Suspense", kiedy: "Jotai alternatywa, Facebook ecosystem" },
];

export default function BlogZustandCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Zustand, Jotai, Redux Toolkit | Fotz Studio"
        description="Zarządzanie stanem React: Zustand vs Jotai vs Redux Toolkit vs Context API, atomic state, RTK Query, best practices i kiedy co wybrać w 2024."
        canonical="https://fotz.pl/blog/zustand-jotai-redux-toolkit-zarzadzanie-stanem-react-2024"

        keywords="Zustand, Jotai, Redux Toolkit co to jest, Zustand, Jotai, Redux Toolkit jak działa, Zustand, Jotai, Redux Toolkit tutorial, Zustand, Jotai, Redux Toolkit przykład, czym jest Zustand, Jotai, Redux Toolkit, Zustand, Jotai, Redux Toolkit dokumentacja, Zustand, Jotai, Redux Toolkit przewodnik"

        canonical="https://fotz.pl/blog/zustand-jotai-redux-toolkit-zarzadzanie-stanem-react-2024"
      />
      <ArticleSchema
        title="Zustand, Jotai, Redux Toolkit — zarządzanie stanem w React 2024?"
        description="State management React: 6 bibliotek (Zustand/Jotai/Redux Toolkit/Valtio/Context/Recoil), atomic model, RTK Query, decision tree i best practices."
        url="https://fotz.pl/blog/zustand-jotai-redux-toolkit-zarzadzanie-stanem-react-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Zarządzanie stanem React", url: "https://fotz.pl/blog/zustand-jotai-redux-toolkit-zarzadzanie-stanem-react-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-amber-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Zarządzanie stanem React", url: "/blog/zustand-jotai-redux-toolkit-zarzadzanie-stanem-react-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Frontend
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Zarządzanie stanem w React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zustand, Jotai, Redux Toolkit, Valtio i Context API — kiedy co wybrać,
              atomic vs single store i best practices na 2024.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "General purpose", value: "Zustand" },
                { label: "Atomic model", value: "Jotai" },
                { label: "Enterprise RTK Query", value: "Redux Toolkit" },
                { label: "Server state", value: "TanStack Query" },
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

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek zarządzania stanem</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda biblioteka optymalizuje inny aspekt — rozmiar bundle, model mentalny,
              obsługę async czy minimalizację boilerplate.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Model</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Boilerplate</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Async</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {stateLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{l.model}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{l.bundelSize}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{l.boilerplate}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{l.async}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{l.kiedy}</td>
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

      <RelatedArticles currentArticleId="zustand-jotai-redux-toolkit-zarzadzanie-stanem-react-2024" />
      <ContactSection />
    </Layout>
  );
}
