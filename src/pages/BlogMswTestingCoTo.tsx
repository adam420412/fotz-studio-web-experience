import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest MSW (Mock Service Worker) i jak działa?",
    answer: "MSW (Mock Service Worker): biblioteka do mockowania HTTP requestów. Działa na poziomie sieciowym (nie patch fetch). Browser: Service Worker przechwytuje requesty. Node.js: interceptor requestów. Instalacja: npm install msw --save-dev. npx msw init public/ --save (dla przeglądarki). Wersja 2.0 (2023): nowe API. http.get zamiast rest.get. HttpResponse.json() zamiast res(ctx.json()). Native Fetch API. Handlers: import {http, HttpResponse} from 'msw'. const handlers = [http.get('/api/users', () => {return HttpResponse.json([{id: 1, name: 'Adam'}])}), http.post('/api/users', async ({request}) => {const body = await request.json(); return HttpResponse.json({...body, id: 2}, {status: 201})})]. Browser setup: import {setupWorker} from 'msw/browser'. const worker = setupWorker(...handlers). worker.start(). Node.js setup (testy): import {setupServer} from 'msw/node'. const server = setupServer(...handlers). beforeAll(() => server.listen()). afterEach(() => server.resetHandlers()). afterAll(() => server.close()). Dlaczego MSW: interceptuje na poziomie sieci (jak realne requesty). Działa w Browser + Node. Jeden zestaw handlerów dla testów + development. Nie wymaga zmiany kodu aplikacji. Obsługuje REST i GraphQL. TypeScript support natywny. Alternatywy: nock (Node only). axios-mock-adapter. fetch-mock. Jest spyOn(global, 'fetch'). MSW jest bardziej realistyczny.",
  },
  {
    question: "MSW 2.0 — co zmieniło się w API i jak migrować?",
    answer: "MSW 1.x (stare API): import {rest} from 'msw'. rest.get('/users', (req, res, ctx) => {return res(ctx.json([...]), ctx.status(200))}). Problemy: ctx API — nieintuicyjne. Nie-native fetch. Trudne do typowania requestów. MSW 2.0 (nowe API): import {http, HttpResponse, graphql} from 'msw'. http.get('/users', () => {return HttpResponse.json([...])}). http.post('/users', async ({request}) => {const body = await request.json()}). Kluczowe zmiany v2: rest -> http. ctx.json() -> HttpResponse.json(). ctx.status() -> drugi argument HttpResponse. ctx.delay() -> usunięte, użyj delay() import. resolver params: ({request, params, cookies}). request: natywny Request. params: path parameters. cookies: cookies. Typy TypeScript: http.get('/users/:id', ({params}) => {const {id} = params}). HTTP Response z delay: import {delay} from 'msw'. await delay(500). Passthrough (nie mockuj): import {passthrough} from 'msw'. return passthrough(). Error handling: HttpResponse.json({error: 'Not found'}, {status: 404}). GraphQL mocking: graphql.query('GetUser', ({variables}) => {return HttpResponse.json({data: {user: {id: variables.id}}})}). graphql.mutation('CreateUser', ...). Migracja v1->v2: automatyczny codemod (msw-codemods). Większość zmian mechanicznych. Sprawdź custom resolvers.",
  },
  {
    question: "Testing z MSW + React Testing Library + Vitest?",
    answer: "Setup (Vitest + RTL + MSW): npm install msw @testing-library/react @testing-library/jest-dom vitest --save-dev. vitest.config.ts: environment: 'jsdom'. setupFiles: ['./src/test/setup.ts']. setup.ts: import '@testing-library/jest-dom'. import {server} from './mocks/server'. beforeAll(() => server.listen({onUnhandledRequest: 'error'})). afterEach(() => server.resetHandlers()). afterAll(() => server.close()). handlers.ts: export const handlers = [http.get('/api/todos', () => {return HttpResponse.json([{id: 1, title: 'Buy milk', done: false}])})]. server.ts: import {setupServer} from 'msw/node'. export const server = setupServer(...handlers). Test komponentu: it('displays todos from API', async () => {render(TodoList). await waitFor(() => screen.getByText('Buy milk')). expect(screen.getByText('Buy milk')).toBeInTheDocument()}). Override handler w teście: server.use(http.get('/api/todos', () => {return HttpResponse.json([], {status: 500})})). Testuj error state. Testuj loading state: render(TodoList). expect(screen.getByText('Loading...')).toBeInTheDocument(). await waitFor(() => screen.getByText('Buy milk')). React Query + MSW: QueryClientProvider w teście. QueryClient z retry: 0 (szybkie testy). MSW zwraca dane -> React Query cachuje -> komponent renderuje. Async tests: await screen.findByText('text') zamiast waitFor. findBy* zawiera wbudowany waitFor.",
  },
  {
    question: "MSW w Storybook — development mocking?",
    answer: "MSW + Storybook: msw-storybook-addon. Mockuj API w Storiesach. Każda story może mieć własne handlery. Instalacja: npm install msw-storybook-addon --save-dev. .storybook/preview.ts: import {initialize, mswLoader} from 'msw-storybook-addon'. initialize(). export const loaders = [mswLoader]. Story z MSW: import {http, HttpResponse} from 'msw'. export const Success: Story = {parameters: {msw: {handlers: [http.get('/api/user', () => {return HttpResponse.json({name: 'Adam', role: 'admin'})})]}}. export const Error: Story = {parameters: {msw: {handlers: [http.get('/api/user', () => {return HttpResponse.json({error: 'Unauthorized'}, {status: 401})})]}}. Korzyści: visual testing różnych stanów API. Dokumentacja interaktywna z realnymi danymi. Brak potrzeby backendu do development. Chromatic: visual regression testing. Screenshot stories z różnymi API stanami. CI pipeline testing. Storybook 8 nowości: Storybook 8 (2024). Vitest integration (--vitest mode). Chromatic TurboSnap. Szybsze builds. React Server Components support. MSW w development (browser): index.tsx/main.tsx: if (process.env.NODE_ENV === 'development') {const {worker} = await import('./mocks/browser'); await worker.start({onUnhandledRequest: 'bypass'})}. Zakomentowane API calls w .env.local? Lepiej: MSW conditional start. Debugowanie: MSW DevTools (unofficial). Network tab w DevTools — requesty widoczne jako przez SW. console.log w handlerach. Dodaj 'MSW: ' prefix do logów.",
  },
  {
    question: "Contract Testing z Pact — zaawansowane API mocking?",
    answer: "Contract Testing: consumer definiuje kontrakt co oczekuje od API. Provider weryfikuje czy spełnia kontrakt. Automatyczna weryfikacja kompatybilności. Pact: najpopularniejsza biblioteka contract testing. @pact-foundation/pact. Consumer-driven contracts. Pact Broker — serwer do przechowywania kontraktów. Consumer test (React app -> API): import {PactV3, MatchersV3} from '@pact-foundation/pact'. const {string, integer} = MatchersV3. Pact opisuje: oczekiwany request. Oczekiwana response. Pact generuje kontrakt JSON. Provider verification (backend Node.js): @pact-foundation/pact (provider side). Wczytaj kontrakt z Pact Broker. Uruchom testy przeciwko realnemu serwerowi. Kiedy Pact: microservices. Niezależne deploymenty. Różne teams. CI/CD. Pact vs MSW: MSW — mocking w unit/integration tests. Pact — contract testing między services. Komplementarne, nie konkurencyjne. Consumer-Driven Contract (CDC): consumer prowadzi zmiany API. Provider musi spełnić kontrakt. Bezpieczeństwo przed breaking changes. Pact Broker: publiczny SaaS lub self-hosted. Przechowuje kontrakty między wersje. Can-I-Deploy: weryfikuj przed deployment. Matryce kompatybilności. WireMock: Java-based API mocking. Stub mappings w JSON. Dobry dla Java + TS teams. Karate DSL: BDD + API testing + mocking. Scenariusze w Gherkin. Szczególnie dla QA teams.",
  },
];

const mswAlternatives = [
  { narzedzie: "MSW 2.0", srodowisko: "Browser + Node", api: "http, HttpResponse (native fetch)", integracja: "RTL, Vitest, Storybook, Playwright", kiedy: "Standard — najlepszy wybór 2024" },
  { narzedzie: "nock", srodowisko: "Node.js only", api: "nock(url).get(path).reply()", integracja: "Jest, Mocha, Vitest", kiedy: "Node.js only, legacy projects" },
  { narzedzie: "fetch-mock", srodowisko: "Browser + Node", api: "fetchMock.get(url, response)", integracja: "Jest, Vitest", kiedy: "Prosty fetch mocking, minimalna setup" },
  { narzedzie: "axios-mock-adapter", srodowisko: "Browser + Node", api: "mock.onGet('/url').reply()", integracja: "Dowolne", kiedy: "Projekty z Axios, stary pattern" },
  { narzedzie: "Pact", srodowisko: "Browser + Node", api: "PactV3 consumer/provider", integracja: "Pact Broker, CI/CD", kiedy: "Contract testing microservices" },
  { narzedzie: "WireMock", srodowisko: "Serwer (Java)", api: "JSON stub mappings", integracja: "Dowolne (HTTP)", kiedy: "Enterprise, Java teams, shared stubs" },
];

export default function BlogMswTestingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="MSW Mock Service Worker 2.0, Storybook mocking i Contract…"
        description="MSW 2.0 (http/HttpResponse, Browser+Node), integracja z Vitest+RTL+Storybook, contract testing z Pact — API mocking dla React i TypeScript 2024."
        canonicalUrl="https://fotz.pl/blog/msw-mock-service-worker-storybook-pact-contract-testing-react-2024"

        keywords="MSW Mock Service Worker 2.0, Storybook mocking i Contract Testing z Pact co to jest, MSW Mock Service Worker 2.0, Storybook mocking i Contract Testing z Pact definicja, czym jest MSW Mock Service Worker 2.0, Storybook mocking i Contract Testing z Pact, MSW Mock Service Worker 2.0, Storybook mocking i Contract Testing z Pact przykłady, jak działa MSW Mock Service Worker 2.0, Storybook mocking i Contract Testing z Pact, MSW Mock Service Worker 2.0, Storybook mocking i Contract Testing z Pact znaczenie, MSW Mock Service Worker 2.0, Storybook mocking i Contract Testing z Pact przewodnik"

        canonical="https://fotz.pl/blog/msw-mock-service-worker-storybook-pact-contract-testing-react-2024"
      />
      <ArticleSchema
        title="MSW Mock Service Worker 2.0, Storybook mocking i Contract Testing z Pact?"
        description="6 narzędzi API mocking (MSW/nock/fetch-mock/axios-mock-adapter/Pact/WireMock) — setup MSW 2.0, Vitest+RTL+Storybook integracja i contract testing."
        url="https://fotz.pl/blog/msw-mock-service-worker-storybook-pact-contract-testing-react-2024"
        datePublished="2024-04-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "MSW i API Mocking", url: "https://fotz.pl/blog/msw-mock-service-worker-storybook-pact-contract-testing-react-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "MSW i API Mocking", href: "/blog/msw-mock-service-worker-storybook-pact-contract-testing-react-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Testing / Mocking
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MSW i API Mocking w React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              MSW 2.0 (http/HttpResponse, Browser+Node), Vitest+RTL integration,
              Storybook mocking i contract testing z Pact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Network-level", value: "MSW 2.0" },
                { label: "Story mocking", value: "Storybook" },
                { label: "Contract tests", value: "Pact" },
                { label: "Node testing", value: "Vitest+RTL" },
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

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi API mocking — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              MSW, nock, fetch-mock, axios-mock-adapter, Pact i WireMock —
              środowisko, API, integracja i kiedy użyć.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Środowisko</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">API</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Integracja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {mswAlternatives.map((m, i) => (
                  <tr key={m.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{m.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{m.srodowisko}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs font-mono">{m.api}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{m.integracja}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{m.kiedy}</td>
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

      <RelatedArticles currentArticleId="msw-mock-service-worker-storybook-pact-contract-testing-react-2024" />
      <ContactSection />
    </Layout>
  );
}
