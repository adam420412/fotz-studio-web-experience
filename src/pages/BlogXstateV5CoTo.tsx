import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "XState v5 — nowe API createActor i model aktora?",
    answer: "XState v5: David Khourshid. Kompletne przepisanie. Actor model. Luty 2024. Kluczowe zmiany v5 vs v4: createMachine API uproszczone. createActor zamiast interpret. machine.start() zamiast service.start(). Types inference lepsza. Actors zamiast services. Instalacja: npm install xstate @xstate/react. Podstawowy machine v5: import {createMachine, createActor} from 'xstate'. const toggleMachine = createMachine({id: 'toggle', initial: 'inactive', states: {inactive: {on: {TOGGLE: 'active'}}, active: {on: {TOGGLE: 'inactive'}}}}). Actor: const actor = createActor(toggleMachine). actor.subscribe(snapshot => { console.log(snapshot.value) }). actor.start(). actor.send({type: 'TOGGLE'}). actor.stop(). v5 Actions: actions: {increment: assign({count: ({context}) => context.count + 1})}. assign uproszczony. Nie zwraca undefined. Context: {context: {count: 0}}. Guards: guard: ({context}) => context.count > 10. Invoke: invoke: {src: 'fetchUser', input: ({context}) => ({id: context.userId}), onDone: {target: 'loaded', actions: assign({user: ({event}) => event.output})}, onError: 'error'}. fromPromise: import {fromPromise} from 'xstate'. const fetchMachine = createMachine({invoke: {src: fromPromise(async ({input}) => await fetchUser(input.id))}}). Actors: spawnChild. stopChild. ActorRef. sendTo.",
  },
  {
    question: "XState v5 — React hooks i @xstate/react v4?",
    answer: "@xstate/react v4: useActor, useMachine, useActorRef. npm install @xstate/react. useMachine: import {useMachine} from '@xstate/react'. const [snapshot, send] = useMachine(toggleMachine). const isActive = snapshot.matches('active'). const isLoading = snapshot.matches('loading'). send({type: 'TOGGLE'}). useActor: const actorRef = useActorRef(toggleMachine). const snapshot = useSelector(actorRef, s => s). useSelector: const count = useSelector(actorRef, s => s.context.count). Tylko re-render gdy count zmieni się. Ważne dla optymalizacji. Context provider: import {createActorContext} from '@xstate/react'. const MachineContext = createActorContext(myMachine). function App() { return MachineContext.Provider()(MachineContext.useActor()) }. Formularz z XState: const [state, send] = useMachine(formMachine). state.matches('submitting') — button disabled. state.matches('error') — pokaż błąd. state.context.errors — validation errors. send({type: 'SUBMIT', data: formData}). Modal XState: states: {closed: {on: {OPEN: 'open'}}, open: {on: {CLOSE: 'closed', CONFIRM: 'confirming'}, states: {confirming: {invoke: {src: 'confirmAction', onDone: 'closed'}}}}. Hierarchiczne stany. Parallel states: type: 'parallel'. Kilka regionów jednocześnie. History states: type: 'history'. Pamięta ostatni stan. XState viz: stately.ai/viz. Wizualizacja maszyn.",
  },
  {
    question: "Redux Toolkit v2 — combineSlices i RTK Query improvements?",
    answer: "Redux Toolkit v2: Mark Erikson. Styczeń 2024. RTK 2.0 breaking changes. Instalacja: npm install @reduxjs/toolkit. combineSlices: nowe API do lazy loading. import {combineSlices} from '@reduxjs/toolkit'. const rootReducer = combineSlices(counterSlice, userSlice, {todos: todosReducer}). Dodaj dynamicznie: rootReducer.inject(newSlice). Przydatne dla code splitting. Dynamic slices. Selectors API: createSelector z reselect v5. weakMapMemoize (domyślnie). Lepsza memoizacja. Nie ograniczona do jednego inputu. createEntityAdapter improvements: sortComparer. setAll. setMany. upsertMany. Middleware: serializability check improvements. Nowe opcje. Immer v10: RTK używa Immer. Strukturalne sharingowanie. Lepsze TypeScript. Immer patches. RTK Query v2: tagTypes TypeScript inference. onCacheEntryAdded. onQueryStarted. endpoints dynamiczne. Pessimistic updates vs optimistic. invalidatesTags granularnie. createApi improvements: enhanceEndpoints. mergeBaseQuery. Error handling. forceRefetch. keepUnusedDataFor. createSlice v2: reducers jako callback. reducers: (create) => ({increment: create.reducer(state => {state.count++}), fetchUser: create.asyncThunk(async (id, thunkAPI) => { return await api.getUser(id) }, {pending: ..., fulfilled: ..., rejected: ...})}). RTK Query vs TanStack Query: RTK Query — Redux ekosystem, mutation invalidation. TanStack Query — framework agnostic, simpler API.",
  },
  {
    question: "Maszyny stanów — kiedy używać XState vs Zustand vs useReducer?",
    answer: "useReducer: wbudowany React. Prosty. Lokalny stan. Kiedy: 2-5 stanów. Prosta logika. Jeden komponent. Brak efektów ubocznych. Przykład: switch/case reducer. dispatch({type: 'INCREMENT'}). Zustand: globalny store. Prosty API. Bez Provider. Kiedy: globalny stan UI. Kilka komponentów. Brak złożonej logiki przejść. Prosty async. XState: maszyny stanów. Hierarchia. Równoległe stany. Efekty uboczne. Invoke. Kiedy: złożone przepływy (checkout, multi-step form, auth flow). Stany zależne. Wizualizacja ważna. Long-running processes. UI states: idle, loading, error, success. Actor model: komunikacja między niezależnymi aktorami. Redux Toolkit: legacy projekty. Potrzebujesz DevTools. Duży ekosystem. RTK Query. Middleware. Porównanie przepływu auth: Zustand: isLoggedIn ref, user object, login/logout functions. XState: states: idle, authenticating, authenticated, error. Transitions z guards. Invoke API call. Onboarding: XState idealne. Multi-step. każdy krok = stan. Data persists in context. Walidacja per krok. Checkout: XState lub useReducer. States: cart, shipping, payment, confirmation. Guards: cart not empty. Invoke: payment API. Game logic: XState świetny. States: menu, playing, paused, gameover. Parallel: audio state + game state.",
  },
  {
    question: "Stately Studio — wizualizacja maszyn XState?",
    answer: "Stately Studio: stately.ai. Wizualne tworzenie maszyn XState. Eksport kodu TypeScript. Importuj istniejące maszyny. Stately Studio features: drag-and-drop states. Przejścia. Actions. Guards. Invoke. Context. Historyy. Parallel states. Export: TypeScript kod. Versionowanie. Udostępnianie URL. Embed. Stately Agent: AI-powered. Opisz maszynę — generuje. Edytuj wizualnie. Stately Sky: cloud actors. Durable state. Multi-user. Persistent actors. Simulation: testuj maszynę wizualnie. Klikaj przejścia. Sprawdź context. Animacje. inspect API w dev: import {createBrowserInspector} from '@statelyai/inspect'. createBrowserInspector(). actor.start(). Otwiera podgląd w DevTools lub oknie. XState v5 + Actor model zaawansowany: parent actors spawn child actors. actorRef = createActor(childMachine). actorRef.send({type: 'EVENT'}). actorRef.getSnapshot(). subscribeToActor. EventObject. Input: createActor(machine, {input: {userId: '123'}}). Machine input type. Snapshot: actor.getSnapshot().value. actor.getSnapshot().context. actor.getSnapshot().status. 'active' | 'done' | 'error' | 'stopped'. Promise actors: fromPromise. Observable actors: fromObservable. Callback actors: fromCallback. Transition actors.",
  },
];

const xstateFeatures = [
  { funkcja: "createActor", wersja: "XState v5", opis: "Nowe API — createActor(machine), start(), send(), subscribe()" },
  { funkcja: "fromPromise", wersja: "XState v5", opis: "Promise actor — invoke async bez boilerplate" },
  { funkcja: "useActor / useSelector", wersja: "@xstate/react v4", opis: "React hooks — granular re-render przez useSelector" },
  { funkcja: "combineSlices", wersja: "RTK 2.0", opis: "Lazy slice injection — dynamic reducers dla code splitting" },
  { funkcja: "createSlice asyncThunk", wersja: "RTK 2.0", opis: "Inline async thunk w createSlice — pending/fulfilled/rejected" },
  { funkcja: "Stately Studio", wersja: "stately.ai", opis: "Visual XState editor — drag-drop, eksport TS, AI generation" },
];

export default function BlogXstateV5CoTo() {
  return (
    <Layout>
      <SEOHead
        title="XState v5 createActor, @xstate/react v4 i Redux Toolkit v2 — state machines 2024 | Fotz.pl"
        description="XState v5: createActor, fromPromise, useActor, useSelector, Stately Studio. Redux Toolkit v2: combineSlices, dynamic slices, createSlice asyncThunk, RTK Query. Maszyny stanów 2024."
        canonicalUrl="https://fotz.pl/blog/xstate-v5-createactor-maszyny-stanow-redux-toolkit-v2-2024"
      />
      <ArticleSchema
        title="XState v5 createActor, @xstate/react v4 i Redux Toolkit v2 — state machines 2024?"
        description="XState v5: createActor API, fromPromise, assign uproszczony, @xstate/react v4, useSelector, Stately Studio. RTK 2.0: combineSlices, createSlice asyncThunk, reselect v5."
        url="https://fotz.pl/blog/xstate-v5-createactor-maszyny-stanow-redux-toolkit-v2-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "XState v5 i RTK v2 2024", url: "https://fotz.pl/blog/xstate-v5-createactor-maszyny-stanow-redux-toolkit-v2-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "XState v5 i RTK v2 2024", href: "/blog/xstate-v5-createactor-maszyny-stanow-redux-toolkit-v2-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-amber-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              XState v5 / Redux Toolkit v2 / State Machines
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              XState v5 i Redux Toolkit v2
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              createActor API, fromPromise, useSelector,
              RTK combineSlices i Stately Studio.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "New API", value: "createActor" },
                { label: "React hooks", value: "@xstate/react" },
                { label: "Lazy slices", value: "combineSlices" },
                { label: "Visual editor", value: "Stately" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-amber-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">XState v5 i RTK v2 — kluczowe funkcje</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              createActor, fromPromise, useSelector, combineSlices i Stately Studio —
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
                {xstateFeatures.map((f, i) => (
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
