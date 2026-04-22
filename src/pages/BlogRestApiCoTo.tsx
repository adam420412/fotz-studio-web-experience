import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest REST API?",
    answer:
      "REST API (Representational State Transfer Application Programming Interface) to styl architektoniczny dla rozproszonych systemów hipermedialnych, zaproponowany przez Roya Fieldinga w 2000 roku. REST API używa protokołu HTTP do komunikacji między klientem a serwerem, gdzie zasoby są identyfikowane przez URI (np. /users/123), a operacje na nich wykonują standardowe metody HTTP: GET (odczyt), POST (tworzenie), PUT/PATCH (aktualizacja), DELETE (usuwanie).",
  },
  {
    question: "Jakie są zasady REST API?",
    answer:
      "6 zasad REST (constraints): 1) Client-Server — rozdzielenie klienta od serwera, 2) Stateless — każde żądanie zawiera wszystkie potrzebne informacje (brak sesji po stronie serwera), 3) Cacheable — odpowiedzi mogą być buforowane, 4) Uniform Interface — jednolity interfejs (URI, metody HTTP, reprezentacje), 5) Layered System — architektura warstwowa (load balancery, cache, security), 6) Code on Demand (opcjonalne) — serwer może przesyłać kod wykonywalny.",
  },
  {
    question: "Czym różni się REST od SOAP?",
    answer:
      "REST używa lekkich formatów (JSON, XML) i standardowych metod HTTP — jest prostszy, szybszy i bardziej popularny w nowoczesnych aplikacjach. SOAP (Simple Object Access Protocol) to protokół z własnym formatem XML, obsługuje zaawansowane standardy bezpieczeństwa (WS-Security), transakcje i niezawodność — używany w bankowości, telekomunikacji i enterprise. REST jest bezstanowy i stateless, SOAP może być stateful.",
  },
  {
    question: "Co to są kody statusu HTTP w REST API?",
    answer:
      "Kody statusu HTTP komunikują wynik żądania: 2xx (sukces) — 200 OK, 201 Created, 204 No Content; 3xx (przekierowania) — 301 Moved Permanently, 304 Not Modified; 4xx (błędy klienta) — 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity, 429 Too Many Requests; 5xx (błędy serwera) — 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable.",
  },
  {
    question: "Jak zabezpieczyć REST API?",
    answer:
      "Podstawowe metody bezpieczeństwa REST API: HTTPS (szyfrowanie transportu), JWT (JSON Web Token) lub OAuth 2.0 do uwierzytelniania, API Keys do identyfikacji aplikacji, Rate limiting (ograniczenie liczby żądań), Input validation (walidacja danych wejściowych), CORS (Cross-Origin Resource Sharing), versioning (/api/v1/), oraz monitoring anomalii. Nigdy nie przechowuj danych wrażliwych w URL.",
  },
];

const httpMethods = [
  { metoda: "GET", opis: "Pobiera zasób lub listę zasobów", body: "Nie", idempotent: "Tak", bezpieczna: "Tak", przykład: "GET /users/123" },
  { metoda: "POST", opis: "Tworzy nowy zasób", body: "Tak", idempotent: "Nie", bezpieczna: "Nie", przykład: "POST /users" },
  { metoda: "PUT", opis: "Zastępuje zasób w całości", body: "Tak", idempotent: "Tak", bezpieczna: "Nie", przykład: "PUT /users/123" },
  { metoda: "PATCH", opis: "Częściowo aktualizuje zasób", body: "Tak", idempotent: "Nie*", bezpieczna: "Nie", przykład: "PATCH /users/123" },
  { metoda: "DELETE", opis: "Usuwa zasób", body: "Opcjonalnie", idempotent: "Tak", bezpieczna: "Nie", przykład: "DELETE /users/123" },
  { metoda: "HEAD", opis: "Jak GET, ale bez ciała odpowiedzi", body: "Nie", idempotent: "Tak", bezpieczna: "Tak", przykład: "HEAD /users/123" },
  { metoda: "OPTIONS", opis: "Zwraca obsługiwane metody HTTP", body: "Nie", idempotent: "Tak", bezpieczna: "Tak", przykład: "OPTIONS /users" },
];

const restPrinciples = [
  {
    zasada: "Stateless (bezstanowość)",
    opis: "Serwer nie przechowuje stanu klienta między żądaniami. Każde żądanie musi zawierać wszystkie potrzebne informacje (token, parametry).",
    korzyść: "Skalowalność — dowolny serwer może obsłużyć dowolne żądanie",
    przykład: "Zamiast sesji po stronie serwera: Authorization: Bearer <jwt_token> w każdym żądaniu",
  },
  {
    zasada: "Uniform Interface",
    opis: "Jednolity interfejs przez cały system: zasoby identyfikowane URI, operacje przez metody HTTP, reprezentacje (JSON/XML), HATEOAS.",
    korzyść: "Przewidywalność — developer wiedząc API jednego endpointu, wie jak działają inne",
    przykład: "GET /products, POST /products, GET /products/{id}, DELETE /products/{id}",
  },
  {
    zasada: "Resource-Based",
    opis: "API operuje na zasobach (rzeczownikach), nie akcjach (czasownikach). Zasób = entity reprezentowana w systemie.",
    korzyść: "Intuicyjny design — URL opisuje CO, metoda HTTP opisuje CO ZROBIĆ",
    przykład: "Dobrze: DELETE /orders/456. Źle: POST /cancelOrder?id=456",
  },
  {
    zasada: "Cacheable",
    opis: "Odpowiedzi muszą oznaczać czy są cacheable. Klienty mogą buforować odpowiedzi GET/HEAD na podstawie nagłówków Cache-Control, ETag.",
    korzyść: "Wydajność — mniej żądań do serwera, szybszy czas odpowiedzi",
    przykład: "Cache-Control: max-age=3600, ETag: \"abc123\" + 304 Not Modified",
  },
];

const statusCodeGroups = [
  {
    grupa: "2xx — Sukces",
    kolor: "bg-green-50 border-green-200",
    kodKolor: "text-green-700",
    kody: [
      { kod: "200 OK", zastosowanie: "Żądanie GET/PUT/PATCH powiodło się" },
      { kod: "201 Created", zastosowanie: "POST — zasób został utworzony. Location header z URI nowego zasobu" },
      { kod: "204 No Content", zastosowanie: "DELETE lub PUT bez treści odpowiedzi" },
      { kod: "206 Partial Content", zastosowanie: "Paginacja, pobieranie fragmentów dużych zasobów (Range)" },
    ],
  },
  {
    grupa: "4xx — Błędy klienta",
    kolor: "bg-orange-50 border-orange-200",
    kodKolor: "text-orange-700",
    kody: [
      { kod: "400 Bad Request", zastosowanie: "Nieprawidłowe dane wejściowe, błąd walidacji" },
      { kod: "401 Unauthorized", zastosowanie: "Brak lub nieprawidłowy token uwierzytelnienia" },
      { kod: "403 Forbidden", zastosowanie: "Uwierzytelniony, ale brak uprawnień do zasobu" },
      { kod: "404 Not Found", zastosowanie: "Zasób o podanym ID nie istnieje" },
      { kod: "422 Unprocessable Entity", zastosowanie: "Dane poprawne składniowo, ale niespełniające logiki biznesowej" },
      { kod: "429 Too Many Requests", zastosowanie: "Rate limit przekroczony — Retry-After header" },
    ],
  },
  {
    grupa: "5xx — Błędy serwera",
    kolor: "bg-red-50 border-red-200",
    kodKolor: "text-red-700",
    kody: [
      { kod: "500 Internal Server Error", zastosowanie: "Nieoczekiwany błąd serwera — logować, nie ujawniać szczegółów" },
      { kod: "502 Bad Gateway", zastosowanie: "Upstream serwer zwrócił nieprawidłową odpowiedź" },
      { kod: "503 Service Unavailable", zastosowanie: "Serwer tymczasowo niedostępny (maintenance, przeciążenie)" },
    ],
  },
];

const apiDesignBestPractices = [
  { praktyka: "Używaj rzeczowników w URL", dobry: "GET /articles, POST /articles, GET /articles/{id}", zly: "GET /getArticles, POST /createArticle" },
  { praktyka: "Wersjonuj API od początku", dobry: "/api/v1/users, /api/v2/users (breaking changes)", zly: "/api/users (brak wersji = problemy przy zmianach)" },
  { praktyka: "Paginacja dla list", dobry: "?page=2&per_page=20 lub cursor-based: ?after=xyz123", zly: "Zwracanie wszystkich rekordów bez limitu" },
  { praktyka: "Spójne formaty błędów", dobry: '{ "error": "validation_failed", "message": "Email is invalid", "field": "email" }', zly: '{ "msg": "err" } lub różne formaty na różnych endpointach' },
  { praktyka: "Użyj HTTP semantycznie", dobry: "201 Created po POST z Location header, 204 po DELETE", zly: "200 OK dla wszystkich odpowiedzi z błędem w body" },
];

export default function BlogRestApiCoTo() {
  return (
    <Layout>
      <SEOHead
        title="REST API — co to jest? Metody HTTP, zasady i projektowanie"
        description="REST API — definicja, 6 zasad REST, metody HTTP (GET/POST/PUT/PATCH/DELETE), kody statusu i best practices projektowania. Kompletny przewodnik po REST API."
        canonical="https://fotz.pl/blog/rest-api-co-to"

        keywords="REST API co to jest, REST API jak działa, REST API tutorial, REST API przykład, czym jest REST API, REST API dokumentacja, REST API przewodnik"
      />
      <ArticleSchema
        title="REST API — co to jest i jak działa? Kompletny przewodnik"
        description="Kompletny przewodnik po REST API: zasady, metody HTTP, kody statusu i najlepsze praktyki projektowania."
        url="https://fotz.pl/blog/rest-api-co-to"
        datePublished="2024-01-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "REST API", url: "https://fotz.pl/blog/rest-api-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "REST API", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            REST API — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            REST API to standard komunikacji między aplikacjami w internecie.
            Poznaj 6 zasad REST, metody HTTP, kody statusu i jak projektować API według najlepszych praktyk.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest REST API?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>REST API</strong> (Representational State Transfer Application Programming Interface)
              to architektura komunikacji między aplikacjami przez protokół HTTP. Zaproponowana przez
              Roya Fieldinga w 2000 roku jako styl architektoniczny dla rozproszonych systemów.
              Dziś REST API to standard budowania backendu aplikacji webowych i mobilnych.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              W REST każdy zasób (użytkownik, produkt, zamówienie) ma swój unikalny adres URI.
              Operacje na zasobach wykonują metody HTTP: GET pobiera dane, POST tworzy,
              PUT/PATCH aktualizuje, DELETE usuwa. Odpowiedzi najczęściej w formacie JSON.
            </p>
            <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm text-green-400">
              <p className="text-slate-400 mb-2"># Przykłady REST API dla zasobu "users"</p>
              <p>GET    /api/v1/users          <span className="text-slate-500"># lista użytkowników</span></p>
              <p>POST   /api/v1/users          <span className="text-slate-500"># utwórz użytkownika</span></p>
              <p>GET    /api/v1/users/123      <span className="text-slate-500"># pobierz użytkownika #123</span></p>
              <p>PUT    /api/v1/users/123      <span className="text-slate-500"># zastąp użytkownika #123</span></p>
              <p>PATCH  /api/v1/users/123      <span className="text-slate-500"># zaktualizuj pola użytkownika #123</span></p>
              <p>DELETE /api/v1/users/123      <span className="text-slate-500"># usuń użytkownika #123</span></p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metody HTTP */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Metody HTTP w REST API</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Metoda</th>
                    <th className="p-3 text-left">Opis</th>
                    <th className="p-3 text-left">Body</th>
                    <th className="p-3 text-left">Idempotent</th>
                    <th className="p-3 text-left">Bezpieczna</th>
                    <th className="p-3 text-left">Przykład</th>
                  </tr>
                </thead>
                <tbody>
                  {httpMethods.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-bold text-blue-700 font-mono">{row.metoda}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.opis}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.body}</td>
                      <td className="p-3 text-sm">
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${row.idempotent === "Tak" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                          {row.idempotent}
                        </span>
                      </td>
                      <td className="p-3 text-sm">
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${row.bezpieczna === "Tak" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"}`}>
                          {row.bezpieczna}
                        </span>
                      </td>
                      <td className="p-3 text-slate-500 text-xs font-mono">{row.przykład}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-2">* PATCH nie jest z definicji idempotentny, ale może być jeśli operacja jest zdefiniowana idempotentnie</p>
          </div>
        </section>
      </FadeInView>

      {/* 4 zasady */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe zasady REST API</h2>
            <div className="space-y-4">
              {restPrinciples.map((p, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{p.zasada}</h3>
                  <p className="text-slate-600 mb-3">{p.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Korzyść:</p>
                      <p className="text-blue-800">{p.korzyść}</p>
                    </div>
                    <div className="bg-slate-900 rounded p-3">
                      <p className="text-xs font-semibold text-slate-400 mb-1">Przykład:</p>
                      <p className="text-green-400 font-mono text-xs">{p.przykład}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Kody statusu */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kody statusu HTTP — REST API</h2>
            <div className="space-y-6">
              {statusCodeGroups.map((group, i) => (
                <div key={i} className={`rounded-xl p-6 border ${group.kolor}`}>
                  <h3 className={`font-bold text-lg mb-4 ${group.kodKolor}`}>{group.grupa}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {group.kody.map((k, j) => (
                      <div key={j} className="bg-white rounded-lg p-3 border border-slate-100">
                        <p className={`font-mono font-bold text-sm mb-1 ${group.kodKolor}`}>{k.kod}</p>
                        <p className="text-slate-600 text-sm">{k.zastosowanie}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Best Practices */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Best practices projektowania REST API</h2>
            <div className="space-y-4">
              {apiDesignBestPractices.map((bp, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">{bp.praktyka}</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Dobrze:</p>
                      <p className="text-green-800 font-mono text-xs">{bp.dobry}</p>
                    </div>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Unikaj:</p>
                      <p className="text-red-800 font-mono text-xs">{bp.zly}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — REST API</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="rest-api-co-to" />
      <ContactSection />
    </Layout>
  );
}
