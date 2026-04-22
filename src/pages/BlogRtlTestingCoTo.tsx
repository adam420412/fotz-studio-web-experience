import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest React Testing Library i jak różni się od Enzyme?",
    answer: "React Testing Library (RTL): testuj jak użytkownik, nie jak implementacja. Kent C. Dodds. Brak testowania internals (state, instance methods). Testuj: co widzi użytkownik. Co może zrobić. Co dostępne przez ARIA. Instalacja: npm install @testing-library/react @testing-library/user-event @testing-library/jest-dom --save-dev. Setup Vitest: import '@testing-library/jest-dom'. importMetaGlobEager lub setupFiles w vitest.config. Render: import {render, screen} from '@testing-library/react'. render(Button label='Click me' onClick={fn}). Queries: screen.getByText('Click me') — throw jeśli nie znajdzie. screen.queryByText('...') — null jeśli brak. screen.findByText('...') — async, czeka. getByRole('button', {name: 'Click me'}) — ARIA. getByLabelText('Email') — form labels. getByPlaceholderText('...'). getByTestId('...') — ostateczność. Hierarchy: getBy (1, throw), queryBy (0-1, null), findBy (async). getAllBy (1+), queryAllBy (0+), findAllBy (async 1+). Enzyme (stary sposób): testuje implementację. shallow rendering. enzyme.find('.button'). wrapper.state(). Nie polecany — problemy z React 18+. RTL preferowany w 2024. Enzyme vs RTL filozofia: Enzyme — testuj jak deweloper. RTL — testuj jak użytkownik. RTL bardziej dostosowane do refactoringu.",
  },
  {
    question: "user-event — symulowanie interakcji użytkownika?",
    answer: "@testing-library/user-event: realistyczne simulowanie zdarzeń. Bardziej realistyczne niż fireEvent. Sekwencja zdarzeń jak prawdziwy browser. Instalacja: npm install @testing-library/user-event --save-dev. Setup: import userEvent from '@testing-library/user-event'. const user = userEvent.setup(). Await interakcje. Kliknięcie: await user.click(screen.getByRole('button')). Wpisywanie: await user.type(screen.getByRole('textbox'), 'Hello {enter}'). Specjalne klawisze: {enter}, {tab}, {escape}, {backspace}, {delete}, {arrowup}. Zaznaczenie i clipboard: await user.selectAll(input). await user.copy(). await user.paste(). Hover: await user.hover(element). await user.unhover(element). Keyboard: await user.keyboard('{Tab}Hello{Enter}'). Drag: user.pointer. fireEvent vs user-event: fireEvent.click() — jeden event. userEvent.click() — pełna sekwencja (pointerover, mouseenter, pointermove, mousemove, pointerdown, mousedown, pointerup, mouseup, click). Bardziej realistyczny. Formularz test: render(ContactForm). const user = userEvent.setup(). await user.type(screen.getByLabelText('Email'), 'test@example.com'). await user.type(screen.getByLabelText('Message'), 'Hello'). await user.click(screen.getByRole('button', {name: 'Send'})). expect(screen.getByText('Message sent!')).toBeInTheDocument(). Timer mocking: jest.useFakeTimers lub Vitest fake timers. user.setup({delay: null}) — brak opóźnień.",
  },
  {
    question: "Mockowanie w React Testing Library — API, Context i hooks?",
    answer: "Mock funkcji: vi.fn() (Vitest) lub jest.fn(). const onClick = vi.fn(). render(Button onClick={onClick}). await user.click(button). expect(onClick).toHaveBeenCalledTimes(1). Mock API (MSW preferowany): msw + @mswjs/data. handlers.ts: http.get('/api/user', () => HttpResponse.json({id: 1, name: 'Adam'})). server.use(handler) — per-test. Context Provider w testach: const AllProviders = ({children}) => ( QueryClientProvider client={new QueryClient()} ThemeProvider theme='dark' {children} /ThemeProvider /QueryClientProvider ). render(MyComponent, {wrapper: AllProviders}). customRender helper: const customRender = (ui, options) => render(ui, {wrapper: AllProviders, ...options}). Router wrapping: render(ui, {wrapper: MemoryRouter}). lub: BrowserRouter w wrapper. useNavigate mock: vi.mock('react-router-dom', () => ({...vi.importActual('react-router-dom'), useNavigate: () => mockNavigate})). Zustand mock: mockStore stan w teście. @testing-library/react-hooks (teraz renderHook): renderHook(() => useCounter()). const {result} = renderHook(). act(() => result.current.increment()). expect(result.current.count).toBe(1). Wait for: await waitFor(() => expect(screen.getByText('Loaded')).toBeInTheDocument()). async updates po API call. TanStack Query w testach: QueryClient nowy per test. brak cacheTime. dehydrate / hydrate. jest-axe integracja: const results = await axe(container). expect(results).toHaveNoViolations().",
  },
  {
    question: "Testowanie asynchronicznych komponentów i hooks?",
    answer: "Async komponenty: fetchData na mount. loading -> data -> error. Test loading state: render(UserProfile id='1'). expect(screen.getByText('Loading...')).toBeInTheDocument(). Test data state: await screen.findByText('Adam'). findBy = czeka max 1000ms. waitFor: await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument()). await waitFor(() => { expect(screen.getByText('Error')).toBeInTheDocument() }). Interval / timeout: vi.useFakeTimers(). render(Component). vi.advanceTimersByTime(1000). expect(screen.getByText('Updated')).toBeInTheDocument(). vi.useRealTimers() po teście. TanStack Query async: wrapper z QueryClient. server.use(handler) dla konkretnego testu. await screen.findByRole('list'). Nie await screen.findByText — zbyt szczegółowe. Infinite scroll: user.scroll(container, {deltaY: 500}). lub Intersection Observer mock. useInfiniteQuery testowanie. Form submit async: await user.type(emailInput, 'test@test.pl'). await user.click(submitButton). await screen.findByText('Zarejestrowałeś się!'). Server error: server.use(http.post('/api/register', () => new HttpResponse(null, {status: 500}))). await screen.findByText('Błąd rejestracji'). act() wrapper: automatyczny w RTL. Nie trzeba ręcznie w większości przypadków. Potrzebny przy: zmiana state poza render. Imperativo focus. Custom event. Concurrent mode: wrappuj w act async gdy potrzeba. waitFor lepszy niż act().",
  },
  {
    question: "Best practices i antypatterns RTL — jak pisać dobre testy?",
    answer: "Dobre praktyki: Testuj z perspektywy użytkownika. Brak testowania implementacji (state, class names). Używaj semantycznych queries (role, label, text). Testuj dostępność razem z RTL. Jedna asercja per test (lub logiczne grupowanie). Nie znasz ścieżki do elementu — używaj aria. getByRole priorytet: role + accessible name. Hierarchia queries: 1. getByRole. 2. getByLabelText. 3. getByPlaceholderText. 4. getByText. 5. getByDisplayValue. 6. getByAltText. 7. getByTitle. 8. getByTestId (ostateczność). Dobre: expect(screen.getByRole('button', {name: /submit/i})).toBeEnabled(). Złe: expect(container.querySelector('.btn-primary')).toExist(). Złe: wrapper.find('Button').props().onClick(). Testuj error states: expect(screen.getByRole('alert')).toHaveTextContent('Invalid email'). Testuj loading: findBy — czeka. Nie getBy z setTimeout. Cleanup: RTL automatyczny cleanup po każdym teście. Nie musisz wywołać cleanup(). Custom queries: buildQueries() dla własnych selektorów. @testing-library/user-event v14+: userEvent.setup() zawsze. Nie stary userEvent.type(el, text). Debugowanie: screen.debug() — wypisz DOM. prettyDOM(element). logRoles(container.querySelector('nav')) — listuj role. Fake timers i async: vi.useFakeTimers() + userEvent.setup({delay: null}). flushPromises() lub await null. Testy izolowane: każdy test = fresh state. beforeEach cleanup. Nie shared state między testami. MSW per test: server.use(overrideHandler) — nadpisuje dla testu. server.resetHandlers() w afterEach.",
  },
];

const rtlQueries = [
  { query: "getByRole", priorytet: "1 (najwyższy)", przyklad: "getByRole('button', {name: 'Submit'})", kiedy: "Przyciski, linki, inputy, listy — ARIA role" },
  { query: "getByLabelText", priorytet: "2", przyklad: "getByLabelText('Email address')", kiedy: "Pola formularza z label" },
  { query: "getByText", priorytet: "4", przyklad: "getByText(/hello/i)", kiedy: "Tekst widoczny dla użytkownika" },
  { query: "findBy*", priorytet: "Async", przyklad: "await findByText('Loaded')", kiedy: "Async — czeka na pojawienie elementu" },
  { query: "queryBy*", priorytet: "Assertion null", przyklad: "expect(queryByText('Error')).not.toBeInTheDocument()", kiedy: "Sprawdź brak elementu" },
  { query: "getByTestId", priorytet: "8 (najniższy)", przyklad: "getByTestId('submit-btn')", kiedy: "Ostateczność — gdy brak semantycznego selektora" },
];

export default function BlogRtlTestingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Testing Library | Fotz Studio"
        description="React Testing Library (getByRole, findBy, waitFor), @testing-library/user-event (type, click, keyboard), MSW mocking, Context providers, TanStack Query i…"
        canonical="https://fotz.pl/blog/react-testing-library-queries-user-event-mocking-async-2024"

        keywords="React Testing Library co to jest, React Testing Library jak działa, React Testing Library tutorial, React Testing Library przykład, czym jest React Testing Library, React Testing Library dokumentacja, React Testing Library przewodnik"
      />
      <ArticleSchema
        title="React Testing Library — queries, user-event, mocking i async testing 2024?"
        description="6 queries RTL (getByRole/getByLabelText/getByText/findBy/queryBy/getByTestId) — user-event v14, MSW mocking, async testing, hooks testing i RTL best practices."
        url="https://fotz.pl/blog/react-testing-library-queries-user-event-mocking-async-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Testing Library", url: "https://fotz.pl/blog/react-testing-library-queries-user-event-mocking-async-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "React Testing Library", url: "/blog/react-testing-library-queries-user-event-mocking-async-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Testing / RTL
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Testing Library
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              queries (getByRole, findBy), user-event v14 (type, click, keyboard),
              MSW mocking, async testing i RTL best practices.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Semantic query", value: "getByRole" },
                { label: "User sim", value: "user-event" },
                { label: "API mock", value: "MSW" },
                { label: "Async wait", value: "findBy" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 queries RTL — priorytety i zastosowanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              getByRole, getByLabelText, getByText, findBy, queryBy i getByTestId —
              priorytet, przykład i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Query</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Priorytet</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Przykład</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {rtlQueries.map((q, i) => (
                  <tr key={q.query} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 font-mono text-xs">{q.query}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{q.priorytet}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs font-mono">{q.przyklad}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{q.kiedy}</td>
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

      <RelatedArticles currentArticleId="react-testing-library-queries-user-event-mocking-async-2024" />
      <ContactSection />
    </Layout>
  );
}
