import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest XState i maszyna stanów (State Machine)?",
    answer: "XState: biblioteka do zarządzania stanem opartego na maszynach stanów i statecharts (David Khourshid, 2017). Formal state machines i statecharts z matematyczną precyzją. Maszyna stanów (Finite State Machine): skończona liczba stanów. Tylko jeden stan aktywny w danym momencie. Przejścia (transitions) wyzwalane przez eventy. Przykład: traffic light machine. States: red, yellow, green. Events: TIMER (red->green, green->yellow, yellow->red). Dlaczego maszyny stanów: eliminacja 'impossible states'. Klarowna logika (diagram zamiast if-else). Testowalność (deterministyczna). Dokumentacja (wizualizacja). XState v5 API: createMachine({id: 'trafficLight', initial: 'red', states: {red: {on: {TIMER: 'green'}}, green: {on: {TIMER: 'yellow'}}, yellow: {on: {TIMER: 'red'}}}}). Actor model: interpret(machine) -> actor (observer, można subscription). useMachine(machine) w React -> [state, send]. state.value — aktualny stan. state.context — dane maszyny. send({type: 'TIMER'}) — wyślij event. Context: dane maszyny (rozszerzony stan). Actions: side effects (assign, log, send). Guards: warunki przejść. Services: promises, callbacks, other machines.",
  },
  {
    question: "Statecharts — rozszerzenie maszyn stanów dla złożonych UI?",
    answer: "Statecharts (David Harel, 1987): rozszerzenie FSM o hierarchię, równoległość i historię. Hierarchiczne stany (nested states): stan może zawierać sub-maszyny. Przykład: logged state zawiera {idle, loading, error} sub-states. Parallel states (type: 'parallel'): wiele stanów aktywnych jednocześnie. Przykład: user settings machine — {theme: {light|dark}, notifications: {on|off}} — oba równolegle. History states: powrót do poprzedniego sub-state po opuszczeniu. shallow (jeden poziom) lub deep (zagnieżdżone). Guards (warunki): przejście tylko gdy warunek spełniony. can({type: 'SUBMIT'}) — sprawdź czy event dozwolony. Actions: entry actions (przy wejściu w stan). exit actions (przy opuszczeniu). transition actions. assign() — modyfikacja context. Invoke: wywołanie promise/observable/callback. Async operations jako states: loading, success, failure — naturalny flow. Przykład form machine: idle -> submitting (invoke: submitForm) -> success | failure. XState Visualizer: stately.ai/viz. Wizualizacja maszyny jako diagram. Import kodu -> interaktywny diagram. Stately Editor: GUI do tworzenia maszyn. Kod generowany automatycznie. Kolaboracja zespołu. XState Inspector: devtools. Wizualizacja runtime state transitions.",
  },
  {
    question: "XState w React — useActor, useMachine i Actor Model?",
    answer: "XState v5 + React (@xstate/react): useMachine(machine) — lokalna maszyna w komponencie. const [state, send] = useMachine(trafficLightMachine). state.value === 'red'. send({type: 'TIMER'}). useActor(actor) — subscribe do zewnętrznego aktora. Actor Model w XState v5: createActor(machine) — stwórz aktora. actor.start() — uruchom. actor.send({type: 'EVENT'}) — wyślij event. actor.subscribe(state => {...}) — obserwuj stan. actor.stop() — zatrzymaj. Hierarchia aktorów: parent machine spawnuje child actors. spawn(childMachine) — tworzenie sub-aktorów. sendTo(childActor, event) — send do child. Persist state: actor.getPersistedSnapshot() — zapisz stan. createActor(machine, {snapshot}) — przywróć stan. Integration z React Context: globalny actor w Context. useActor per komponent. Nie potrzebujesz Zustand/Redux dla flow logic. XState + TanStack Query: XState dla UI state machine. TanStack Query dla server state. Naturalne rozdzielenie. XState dla: wieloetapowe formularze (wizard). Authentication flow. Real-time systemy (websocket state). Animacje i UI orchestration. Loading states z retry. Checkout process.",
  },
  {
    question: "Kiedy używać XState zamiast useState lub Zustand?",
    answer: "useState gdy: prosty lokalny stan (toggle, input value, counter). Brak złożonych przejść. Stan nie zależy od historii innych stanów. Zustand gdy: globalny client state. Prosta reaktywność. Brak złożonych flow. XState gdy: stan ma wiele kombinacji (impossible states risk). Wyraźne przejścia (event-driven). Dokumentacja/wizualizacja ważna. Testowanie flow krytyczne. Przykłady idealnych use cases: Form wizard (multi-step checkout): states: personalInfo -> shippingInfo -> payment -> review -> confirming -> confirmed | error. Authentication flow: unauthenticated -> authenticating -> authenticated | error. WebSocket connection: disconnected -> connecting -> connected -> reconnecting. Media player: idle -> loading -> playing -> paused -> ended. Impossible states problem: boolean flags: isLoading, isError, isSuccess — mogą być jednocześnie true. Machine: loading | error | success — niemożliwe jednoczesne. 'Loading and error at the same time' impossible. Decision: simple UI state -> useState. Global app state -> Zustand/Jotai. Complex async flows -> XState. Server state -> TanStack Query. Kombinacja: XState dla flow logic + TanStack Query dla server data + Zustand dla global UI state.",
  },
  {
    question: "Alternatywy dla XState — Robot, Zag.js, Jotai FSM?",
    answer: "XState nie jest jedyną opcją dla state machines. Robot: minimalistyczny FSM library (4KB). Podobny API do XState v4. Bez statecharts (tylko flat FSM). Dobre dla prostszych use cases. Zag.js: state machine primitives dla UI komponentów (Chakra UI team). Headless UI components bazowane na maszynach stanów. AgnosticL React, Vue, Solid. Accessible (ARIA out-of-the-box). Jotai-fsm: atomowy model + FSM. Małe bundle size. Svelte stores + FSM: Svelte ma wbudowany derived stores. Można implementować FSM patterns. useReducer + TypeScript: wbudowane React. Discriminated unions dla stanów. Brak wizualizacji ani guards systemu. Ale prosty. Redux + Redux Toolkit createSlice: slice per 'machine'. actions jako events. Brak formalności FSM ale podobne podejście. XState v5 zmiany: Actor Model first. createActor zamiast interpret. input prop dla initial context. snapshot API. Mniejszy bundle. Lepszy TypeScript. Implementacja natywna (HTML dialog jako FSM): open/closed stany. Transitions przez events. W natywnym HTML jest FSM wszędzie. Kiedy XState jest najlepszy: produkty enterprise z audytowalnym flow. Duże zespoły (dokumentacja diagramami). Skomplikowane async orchestration. Kiedy pominąć XState: małe projekty. Prosta logika. Team nie zna FSM.",
  },
];

const stateMachineTools = [
  { narzedzie: "XState v5", podejscie: "Statecharts + Actor Model", rozmiar: "15KB (core)", wizualizacja: "Stately Editor / Viz", ekosystem: "React, Vue, Svelte, Solid", kiedy: "Złożone flows, enterprise, dokumentacja" },
  { narzedzie: "Robot", podejscie: "Flat FSM", rozmiar: "4KB", wizualizacja: "Brak (zewnętrzny)", ekosystem: "Framework agnostic", kiedy: "Proste maszyny, mały bundle" },
  { narzedzie: "Zag.js", podejscie: "UI component machines", rozmiar: "Per komponent", wizualizacja: "Brak", ekosystem: "React, Vue, Solid", kiedy: "Headless accessible UI components" },
  { narzedzie: "useReducer", podejscie: "Reducer pattern", rozmiar: "0KB (wbudowany)", wizualizacja: "Brak", ekosystem: "React only", kiedy: "Proste state logic bez bibliotek" },
  { narzedzie: "Zustand", podejscie: "Flux store", rozmiar: "8KB", wizualizacja: "Redux DevTools", ekosystem: "React first", kiedy: "Global state, nie flow" },
  { narzedzie: "Redux Toolkit", podejscie: "Flux + slices", rozmiar: "15KB+", wizualizacja: "Redux DevTools", ekosystem: "React", kiedy: "Enterprise, RTK Query, duże aplikacje" },
];

export default function BlogXstateCoTo() {
  return (
    <Layout>
      <SEOHead
        title="XState — co to jest, maszyna stanów, statecharts, Actor Model w React | Fotz.pl"
        description="XState: maszyny stanów i statecharts w React — createMachine, useMachine, Actor Model, XState vs Zustand vs useReducer, kiedy używać FSM w 2024."
        canonicalUrl="https://fotz.pl/blog/xstate-co-to-jest-maszyna-stanow-statecharts-actor-model-react"

        keywords="XState co to jest, XState jak działa, XState tutorial, XState przykład, czym jest XState, XState dokumentacja, XState przewodnik"
      />
      <ArticleSchema
        title="XState — co to jest, maszyna stanów, statecharts, Actor Model w React?"
        description="XState v5: statecharts, Actor Model, useMachine, Stately Editor, 6 narzędzi state management (XState/Robot/Zag/useReducer/Zustand/RTK), kiedy FSM wybrać."
        url="https://fotz.pl/blog/xstate-co-to-jest-maszyna-stanow-statecharts-actor-model-react"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "XState — maszyna stanów", url: "https://fotz.pl/blog/xstate-co-to-jest-maszyna-stanow-statecharts-actor-model-react" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-pink-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "XState", href: "/blog/xstate-co-to-jest-maszyna-stanow-statecharts-actor-model-react" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / State Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              XState i maszyny stanów
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Statecharts i Actor Model w React — eliminacja impossible states,
              wizualizacja flow w Stately Editor i formalne modelowanie UI.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "FSM formalne", value: "Statecharts" },
                { label: "Wzorzec aktorów", value: "Actor Model" },
                { label: "GUI do maszyn", value: "Stately" },
                { label: "React hook", value: "useMachine" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-rose-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi do zarządzania stanem i flow</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              XState, Robot, Zag.js, useReducer, Zustand i Redux Toolkit — od formalnych
              maszyn stanów po proste reducery, każde podejście ma swoje miejsce.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozmiar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wizualizacja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Ekosystem</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {stateMachineTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.podejscie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.rozmiar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.wizualizacja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.ekosystem}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.kiedy}</td>
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
