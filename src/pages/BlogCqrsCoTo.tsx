import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest CQRS?",
    answer: "CQRS (Command Query Responsibility Segregation) to wzorzec architektoniczny który rozdziela operacje zapisu (Commands) od operacji odczytu (Queries) na oddzielne modele — i często na oddzielne bazy danych. Tradycyjny CRUD: jeden model i jedna baza do wszystkiego. Problem: odczyty i zapisy mają różne wymagania wydajnościowe i złożoności. CQRS rozdziela: Command side — obsługuje zapisy/modyfikacje. Walidacja, logika biznesowa, zapis do write store (baza relacyjna, event store). Query side — obsługuje odczyty. Zoptymalizowane modele danych (denormalizowane), szybkie odczyty, brak JOINów. Dlaczego CQRS: Skalowalność oddzielnie — skaluj czytelnicy niezależnie od piszących. Optymalizacja — write model normalizowany dla integralności, read model denormalizowany dla szybkości. Event Sourcing naturalnie łączy się z CQRS — komendy generują zdarzenia, zdarzenia budują projekcje (read models). CQRS to nie zawsze konieczność — dla prostych CRUD aplikacji jest over-engineering.",
  },
  {
    question: "Jak działa Command side w CQRS?",
    answer: "Command side (strona zapisu) w CQRS: Command — intencja zmiany stanu: CreateOrder, CancelOrder, UpdateUserProfile. Command jest walidowany zanim zostanie przetworzony. Command Handler — odbiera komendę, waliduje, wykonuje logikę biznesową, zapisuje do write store lub emituje zdarzenia. Domain Model — agregaty z logiką biznesową (Domain-Driven Design). Aggregate = consistency boundary. Write Store — baza danych dla zapisów. Może być: relacyjna (PostgreSQL), document store (MongoDB) lub Event Store (EventStoreDB, Kafka). Ważne zasady Command side: Idempotentność — ta sama komenda wysłana 2 razy = ten sam wynik (używaj idempotency keys). Validation first — waliduj komendę przed jakimkolwiek zapisem. Thin controller, fat domain — logika w domain model, nie w handler. Command nie zwraca danych — zwraca sukces/błąd, nie obiekt (to byłoby Query). Narzędzia: MediatR (.NET), Axon Framework (Java), command bus pattern.",
  },
  {
    question: "Jak działają Query side i Read Models?",
    answer: "Query side (strona odczytu) w CQRS: Read Models (projekcje) — denormalizowane widoki danych zoptymalizowane pod konkretne zapytania. Zamiast JOINowania 5 tabel, czytasz gotową, pre-computed projekcję. Jak są budowane: Event handlers słuchają zdarzeń z write side i aktualizują read store. Read Store — może być inny niż write store! Elasticseach dla full-text search, Redis dla cache i liczników, PostgreSQL z denormalizowanymi tabelami, MongoDB dla dokumentowych widoków. Query Handler — prosta operacja: pobierz z read store, zwróć DTO. Zero logiki biznesowej. Eventual consistency — read model jest za write modelem o milisekundy/sekundy. Musisz to zaakceptować lub obsłużyć (np. po zapisie zwróć ostatni stan z write store zamiast query side przez N sekund). Przykład: e-commerce. Write store: znormalizowane tabele orders/items/products. Read model: jeden dokument per zamówienie z wszystkimi danymi — OrderDetailsView. Zapytanie = proste ID lookup.",
  },
  {
    question: "CQRS vs. tradycyjny CRUD — kiedy co stosować?",
    answer: "CQRS vs. CRUD: CRUD (Create, Read, Update, Delete) — jeden model do wszystkiego. Prostota, szybkość implementacji, łatwość zrozumienia. Sprawdza się dla prostych domenowych problemów gdzie odczyty i zapisy mają podobną złożoność. Kiedy NIE używaj CQRS: Prosta aplikacja CRUD (admin panele, proste API). Mały team bez doświadczenia z CQRS. MVP/startup w early stage — przedwczesna optymalizacja. Kiedy CQRS ma sens: Wymagania na odczyty i zapisy dramatycznie się różnią (np. setki queries/s vs. kilka commands/s). Złożona logika domenowa po stronie zapisu. Potrzebujesz różnych optymalizacji dla różnych widoków tych samych danych. Budujesz z Event Sourcing — CQRS jest naturalny. Systemy wymagające audit trail. Koszty CQRS: Zwiększona złożoność kodu. Eventual consistency — nowe wyzwanie dla developerów. Dwie bazy danych do zarządzania i synchronizacji. Reguła: nie stosuj CQRS na starcie — dodaj gdy outgrowth CRUD staje się bolesny.",
  },
  {
    question: "CQRS z Event Sourcing — jak połączyć?",
    answer: "CQRS + Event Sourcing (ES) to naturalne połączenie i jeden z najpopularniejszych wzorców w systemach złożonych. Jak to działa razem: Command przychodzi do Command Handler. Handler waliduje i tworzy zdarzenia (OrderCreated, ItemAdded, PaymentProcessed). Zdarzenia są zapisywane do Event Store (append-only). Event Store publikuje zdarzenia do message broker. Event Handlers (projekcje) odbierają zdarzenia i aktualizują Read Models. Queries czytają z Read Models — błyskawiczne odczyty. Zalety połączenia: Event Store = write side (CQRS). Replay zdarzeń = rebuilding read models. Dodajesz nowy Read Model bez migracji danych — replayujesz zdarzenia. Pełen audit trail. Time travel debugging. Wady połączenia: Duża złożoność. Eventual consistency. Schema evolution zdarzeń. Frameworki wspierające CQRS+ES: Axon Framework (Java), EventSauce (PHP), NServiceBus (.NET), custom implementacje z Kafka + PostgreSQL.",
  },
];

const cqrsComponents = [
  {
    strona: "Command Side (Write)",
    elementy: ["Command — intencja zmiany: CreateOrder, CancelOrder", "Command Handler — walidacja i logika biznesowa", "Domain Model (Aggregates) — reguły biznesowe", "Write Store — PostgreSQL, Event Store"],
    kolor: "blue",
    opis: "Obsługuje zapisy, egzekwuje reguły biznesowe, gwarantuje spójność",
  },
  {
    strona: "Query Side (Read)",
    elementy: ["Query — żądanie danych: GetOrderDetails, ListUserOrders", "Query Handler — prosta operacja odczytu", "Read Models — denormalizowane projekcje", "Read Store — Elasticsearch, Redis, MongoDB, PostgreSQL"],
    kolor: "green",
    opis: "Obsługuje odczyty, zoptymalizowane widoki, eventual consistency",
  },
  {
    strona: "Synchronizacja (Event Bus)",
    elementy: ["Events — fakty o zmianach stanu", "Event Handlers (Projections) — aktualizują read models", "Message Broker — Kafka, RabbitMQ, SQS", "Dead Letter Queue — obsługa błędów projekcji"],
    kolor: "purple",
    opis: "Propaguje zmiany z write side do read side asynchronicznie",
  },
];

const cqrsVsCrud = [
  { aspekt: "Złożoność kodu", crud: "Niska — jeden model", cqrs: "Wysoka — dwa modele + synchronizacja" },
  { aspekt: "Wydajność odczytu", crud: "Ograniczona przez JOINy", cqrs: "Bardzo wysoka — pre-computed views" },
  { aspekt: "Skalowalność", crud: "Razem (write + read)", cqrs: "Niezależna dla write i read" },
  { aspekt: "Audit trail", crud: "Brak (tylko aktualny stan)", cqrs: "+ES: pełna historia zdarzeń" },
  { aspekt: "Czas wdrożenia", crud: "Krótki", cqrs: "Długi (2-4x dłużej)" },
  { aspekt: "Eventual consistency", crud: "Brak problemu", cqrs: "Wyzwanie — read lag" },
];

export default function BlogCqrsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CQRS — co to jest Command Query Responsibility Segregation? | Fotz.pl"
        description="CQRS: rozdzielenie komend i zapytań, Command side, Query side, Read Models, połączenie z Event Sourcing i kiedy CQRS ma sens zamiast CRUD."
        canonicalUrl="https://fotz.pl/blog/cqrs-command-query-responsibility-segregation-co-to-jest"

        keywords="CQRS co to jest, CQRS definicja, czym jest CQRS, CQRS przykłady, jak działa CQRS, CQRS znaczenie, CQRS przewodnik"
      />
      <ArticleSchema
        title="CQRS — co to jest Command Query Responsibility Segregation?"
        description="CQRS: architektura, Command side, Query side, Read Models (projekcje), połączenie z Event Sourcing, porównanie z CRUD i kiedy wdrożyć w aplikacjach SaaS."
        url="https://fotz.pl/blog/cqrs-command-query-responsibility-segregation-co-to-jest"
        datePublished="2024-03-09"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CQRS", url: "https://fotz.pl/blog/cqrs-command-query-responsibility-segregation-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "CQRS", href: "/blog/cqrs-command-query-responsibility-segregation-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Software Architecture
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CQRS
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Odczyty i zapisy mają różne wymagania — dlaczego używać jednego modelu?
              CQRS rozdziela je na niezależne strony, które można skalować i optymalizować osobno.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Pełna nazwa", value: "Command Query RS" },
                { label: "Połączenie", value: "Event Sourcing" },
                { label: "Read store", value: "Elasticsearch" },
                { label: "Framework", value: "Axon / MediatR" },
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

      {/* Komponenty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3 strony architektury CQRS</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              CQRS dzieli system na trzy wyraźnie rozdzielone warstwy:
              zapis, odczyt i synchronizację między nimi.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {cqrsComponents.map((c) => (
              <FadeInView key={c.strona}>
                <div className={`rounded-xl border-2 p-6 ${
                  c.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  c.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-2 font-mono ${
                    c.kolor === "blue" ? "text-blue-800" :
                    c.kolor === "green" ? "text-green-800" :
                    "text-purple-800"
                  }`}>{c.strona}</h3>
                  <p className="text-gray-600 text-sm mb-4">{c.opis}</p>
                  <ul className="space-y-1">
                    {c.elementy.map((e) => (
                      <li key={e} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-indigo-500 flex-shrink-0">→</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CQRS vs CRUD */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CQRS vs. CRUD — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              CQRS nie zawsze jest lepszy — tylko w określonych kontekstach.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-3 text-left rounded-tl-lg">Aspekt</th>
                  <th className="p-3 text-left">CRUD</th>
                  <th className="p-3 text-left rounded-tr-lg">CQRS</th>
                </tr>
              </thead>
              <tbody>
                {cqrsVsCrud.map((r, i) => (
                  <tr key={r.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-gray-700">{r.aspekt}</td>
                    <td className="p-3 text-gray-600">{r.crud}</td>
                    <td className="p-3 text-gray-600">{r.cqrs}</td>
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
