import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest HTMX i czym różni się od React/Vue?",
    answer: "HTMX: biblioteka JavaScript rozszerzająca HTML. Hypermedia-driven approach. Serwer zwraca HTML, nie JSON. Brak JSON API — serwer renderuje fragmenty HTML. Instalacja: script src='https://unpkg.com/htmx.org'. Nie trzeba node_modules. Działanie: hx-get='/api/users' — GET request. hx-post='/api/submit' — POST request. hx-swap='innerHTML' — podmień zawartość. hx-target='#result' — gdzie wstawić. Przykład: button hx-get='/api/count' hx-target='#counter' hx-swap='innerHTML'. Kliknięcie — fetch GET. Serwer zwraca p Count: 42 /p. Podmiana HTML. Brak JS! HTMX filozofia: Serwer to źródło prawdy. HTML zawiera logikę aplikacji (hyperlinks, forms). HTMX rozszerza HTML o AJAX. Mniej JS = prostszy kod. Server-side rendering first. Porównanie z React: React — komponent, state, hooks, build step, JSON API. HTMX — HTML, serwer, bez buildu, HTML response. React — klient-side logic. HTMX — serwer-side logic. Zalety HTMX: Prostota — brak SPA complexity. Szybki start — bez buildu. SEO natywny. Mały bundle (14KB). Progressive enhancement. Wady HTMX: Trudniejszy interactive UI (formularze inline). Brak state managementu. Mniej interaktywne niż SPA. Kiedy HTMX: Content sites, admin panels, CRUD apps. Mało interakcji client-side. Team nie zna React. Backend developer pisze frontend.",
  },
  {
    question: "HTMX atrybuty — hx-get, hx-post, hx-swap i hx-trigger?",
    answer: "hx-get: GET request do URL. Przy kliknięciu domyślnie. Wynik podmienia target. hx-post: POST request. Z formData. form method nie trzeba. hx-put, hx-patch, hx-delete: REST methods. CRUD operacje. hx-target: gdzie wstawiać wynik. #id — konkretny element. this — element który wywoływał. Closest selector. hx-swap: jak podmieniać: innerHTML (domyślny) — zawartość elementu. outerHTML — cały element. beforebegin — przed elementem. afterbegin — na początku zawartości. beforeend — na końcu zawartości. afterend — po elemencie. delete — usuń element. none — nic nie podmień. hx-trigger: kiedy wywołać request. click (domyślny dla button). change — przy zmianie input. submit — przy submit form. keyup changed delay:500ms — typing debounce. load — przy załadowaniu. revealed — przy wejściu w viewport. every 5s — polling! hx-include: dodatkowe dane do requestu. #form-id — dane z formularza. hx-params: które pola wysłać. * — wszystkie. none — żadne. hx-boost: zamień linki i formy w AJAX. Bez pełnego przeładowania. Na elemencie lub body. hx-indicator: elementy loading state. Klasy dodawane podczas requestu. Spinner pokazywanie. hx-confirm: dialog potwierdzenia. Przed DELETE. hx-push-url: zmień URL (jak SPA). History entry. Back button działa.",
  },
  {
    question: "Out-of-Band swaps i Server-Sent Events z HTMX?",
    answer: "Out-of-Band (OOB) swaps: aktualizuj wiele elementów jednocześnie. Jeden response — wiele podmian. Bez JavaScript! Przykład: po submit formularza aktualizuj i listę i licznik. Server response: div id='todo-list' hx-swap-oob='true'. ... nowa lista ... /div. span id='count' hx-swap-oob='true' 5 /span. Normalny wynik. OOB — wymiana poza głównym targetem. Przydatne dla: Dashboard widgets. Notification badges. Breadcrumbs update. Live Search (realtime): input hx-get='/search' hx-target='#results' hx-trigger='keyup changed delay:300ms' name='q'. Serwer zwraca HTML z wynikami. Debounce wbudowany (delay:300ms). Server-Sent Events (SSE): hx-sse='connect:/api/stream'. Serwer pushuje HTML fragmenty. Real-time bez WebSockets. Response: data: div id='notification' hx-swap-oob='true' New message /div. WebSockets z HTMX: hx-ws='connect:/ws'. Wysyłaj: hx-ws='send'. hx-on: event handlers. hx-on:htmx:afterRequest — po request. Czystszy niż inline JS. hyperscript: alternatywa dla JavaScript. Hyper-naturalny język. on click toggle .active. Lekki, deklaratywny. Przykład chat: textarea hx-ws='send'. div id='messages' hx-sse='connect:/chat-stream'. Nowe wiadomości z serwera.",
  },
  {
    question: "HTMX z Node.js, Go i Python — server-side templates?",
    answer: "Node.js + Express + HTMX: npm install express. app.get('/api/users', async (req, res) => { const users = await db.user.findMany(). res.send(users.map(u => `li ${u.name} /li`).join('')) }). Template engines: EJS, Handlebars, Pug. Hono.js + HTMX: Hono + JSX. Wbudowany HTML rendering. TypeScript. c.html(`div ${items} /div`). Go + HTMX: Templ — type-safe HTML templates dla Go. html/template stdlib. Gin lub Echo frameworks. type-safe components. Python + HTMX: FastAPI lub Flask. Jinja2 templates. Django + HTMX: django-htmx package. htmx.is_htmx(request). Różne renderowanie dla HTMX vs full page. CSRF z HTMX: hx-headers='{\"X-CSRFToken\": \"..\"}'. Django: {% csrf_token %}. Rails: meta name csrf-token. Automatyczne w formach. Tailwind + HTMX: class='htmx-indicator' — widoczny podczas load. htmx-request — parent class podczas request. transition klasy. Alpine.js + HTMX: Idealne połączenie! HTMX dla server interaction. Alpine.js dla klient-side state. x-data dla lokalnego state. x-show, x-if lokalnie. HTMX dla AJAX. Toast notifications: hx-on:htmx:afterRequest JavaScript. Lub Alpine.js x-data. Infinite scroll: div hx-get='/page/2' hx-trigger='revealed' hx-target='this' hx-swap='afterend'. Ostatni element — trigger. Automatyczne ładowanie następnej strony.",
  },
  {
    question: "HTMX vs SPA — kiedy wybrać i produkcyjne wzorce?",
    answer: "HTMX idealny dla: Admin panels (CRUD, formularze). Content sites z minimalną interakcją. Internal tools. B2B SaaS z prostym UI. Team głównie backend. Legacy apps modernizacja (stopniowa). SPA (React/Vue/Angular) idealny dla: Complex client-side state. Real-time collaborative. Mobile app (React Native reuse). Rich animations i transitions. Offline-first PWA. Duży team frontend. Hybrydowe podejście: HTMX dla stron content. React/Preact islands dla interaktywnych widgetów. Astro z HTMX i islands. Cache z HTMX: serwer cache response. ETag + If-None-Match. Vary: HX-Request header. Różny response dla HTMX vs full page. Validation z HTMX: hx-validate — HTML5 validation. Server-side validation w response. Error state jako HTML. 422 Unprocessable + form z błędami. Accessibility: Standardowe HTML — screen readers work. ARIA live regions dla dynamic updates. aria-live='polite' na target. Focus management po swap. Loading states: htmx-indicator class. CSS transition opacity. Skeleton loading jako HTML. Security: Nie ufaj danym z serwera w hx-target. CSP z 'unsafe-inline' może być problemem. Sanitizacja serwer-side. HX-Request header — sprawdź czy prawdziwy request. Testing: playwright — klikaj i sprawdzaj DOM. Serwer zwraca HTML — testuj integracyjnie. No unit tests dla JS (bo go nie ma). Serwer unit tests normalnie. Monitoring: Standardowe HTTP monitoring. Brak SPA metrics. Czas odpowiedzi serwera ważniejszy.",
  },
];

const htmxVsSpa = [
  { aspekt: "Bundle size", htmx: "14KB (brak buildu)", react: "100KB+ (React + deps)" },
  { aspekt: "Data format", htmx: "HTML fragmenty", react: "JSON API" },
  { aspekt: "State", htmx: "Serwer (cookies, session)", react: "Klient (useState, Redux)" },
  { aspekt: "Build step", htmx: "Nie potrzebny", react: "Wymagany (webpack/Vite)" },
  { aspekt: "Interaktywność", htmx: "Ograniczona (Alpine.js pomaga)", react: "Pełna SPA" },
  { aspekt: "Kiedy wybrać", htmx: "CRUD, admin, content, backend team", react: "Complex UI, rich interactivity" },
];

export default function BlogHtmxCoTo() {
  return (
    <Layout>
      <SEOHead
        title="HTMX | Fotz Studio"
        description="HTMX: hypermedia approach, hx-get/hx-post/hx-swap/hx-trigger, Out-of-Band swaps, SSE real-time, Alpine.js combo, Node.js/Go/Python templates i HTMX vs SPA…"
        canonicalUrl="https://fotz.pl/blog/htmx-hypermedia-hx-get-swap-oob-sse-alpine-js-vs-react-2024"

        keywords="HTMX co to jest, HTMX jak działa, HTMX tutorial, HTMX przykład, czym jest HTMX, HTMX dokumentacja, HTMX przewodnik"

        canonical="https://fotz.pl/blog/htmx-hypermedia-hx-get-swap-oob-sse-alpine-js-vs-react-2024"
      />
      <ArticleSchema
        title="HTMX — hypermedia, hx-get, hx-swap, OOB swaps i HTMX vs React 2024?"
        description="6 aspektów HTMX vs React (bundle/data format/state/build/interaktywność/kiedy) — hx-atrybuty, OOB swaps, SSE real-time, Alpine.js i server-side templates (Node/Go/Python)."
        url="https://fotz.pl/blog/htmx-hypermedia-hx-get-swap-oob-sse-alpine-js-vs-react-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "HTMX", url: "https://fotz.pl/blog/htmx-hypermedia-hx-get-swap-oob-sse-alpine-js-vs-react-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "HTMX", href: "/blog/htmx-hypermedia-hx-get-swap-oob-sse-alpine-js-vs-react-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              HTMX / Hypermedia / No-JS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              HTMX — HTML ponad JavaScript
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Hypermedia approach, hx-get/hx-swap/hx-trigger, Out-of-Band swaps,
              SSE real-time, Alpine.js combo i HTMX vs React porównanie.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Bundle size", value: "14KB" },
                { label: "Format", value: "HTML response" },
                { label: "Build step", value: "Brak" },
                { label: "Combo", value: "Alpine.js" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">HTMX vs React — porównanie podejść</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Bundle size, format danych, state, build step, interaktywność i kiedy wybrać —
              HTMX (hypermedia) vs React (SPA).
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Aspekt</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">HTMX</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">React</th>
                </tr>
              </thead>
              <tbody>
                {htmxVsSpa.map((r, i) => (
                  <tr key={r.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{r.aspekt}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{r.htmx}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{r.react}</td>
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

      <RelatedArticles currentArticleId="htmx-hypermedia-hx-get-swap-oob-sse-alpine-js-vs-react-2024" />
      <ContactSection />
    </Layout>
  );
}
