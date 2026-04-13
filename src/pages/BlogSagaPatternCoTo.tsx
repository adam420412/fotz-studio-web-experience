import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest wzorzec Saga i dlaczego zastępuje distributed transactions?",
    answer: "Problem: w mikrousługach nie ma jednej bazy danych dla całej transakcji. Distributed transactions (2PC — Two-Phase Commit) wymagają distributed lock — powolne, kruche, nie skalują się. Saga pattern: zamiast jednej ACID transakcji — sekwencja lokalnych transakcji powiązanych kompensacją. Każdy krok to lokalna transakcja w jednej usłudze. Jeśli krok się nie powiedzie — uruchom compensating transactions dla poprzednich kroków. Saga nie jest ACID: brak Isolation — inne usługi mogą widzieć częściowe rezultaty. Eventual Consistency — spójność osiągana po czasie. Bazedanowe 'BASE' zamiast 'ACID'. Przykład: Order Saga. 1. CreateOrder (PENDING). 2. ReserveInventory. 3. ProcessPayment. 4. ConfirmOrder. Jeśli payment fail: CancelReservation (compensate 2). CancelOrder (compensate 1). Dwie implementacje Saga: Choreography — zdarzenia (events) koordynują przepływ. Orchestration — centralny koordynator (Orchestrator/Saga Manager) steruje krokami. Brak Isolation powoduje anomalie: Lost Update. Dirty Read. Non-repeatable Read. Countermeasures: Semantic Lock — flaguj rekordy jako 'w trakcie przetwarzania'. Commutative Updates — kolejność nie ma znaczenia. Pessimistic View — re-read po zakończeniu.",
  },
  {
    question: "Choreography Saga vs Orchestration Saga — co wybrać?",
    answer: "Choreography Saga: każda usługa reaguje na eventy i emituje własne eventy. Brak centralnego koordynatora. Przepływ: OrderService emituje 'OrderCreated' -> InventoryService reaguje, emituje 'InventoryReserved' -> PaymentService reaguje, emituje 'PaymentProcessed' -> OrderService reaguje, emituje 'OrderConfirmed'. Kompensacja: PaymentService emituje 'PaymentFailed' -> InventoryService reaguje 'InventoryReleased' -> OrderService emituje 'OrderCancelled'. Zalety choreography: brak single point of failure. Luźne powiązania. Łatwo dodać nową usługę (subscriber). Wady choreography: trudne debugowanie (gdzie jest błąd?). Brak centralnego widoku stanu. Ryzyko cyklicznych zależności. Spaghetti event flow. Orchestration Saga: centralny Orchestrator (Saga Manager) wysyła komendy do usług, czeka na odpowiedź. Orchestrator wie o wszystkich krokach i stanie. Zalety orchestration: łatwiejsze debugowanie. Jasny przepływ. Łatwe retry. Czytelna logika biznesowa w jednym miejscu. Wady orchestration: Orchestrator wie o wszystkich usługach (higher coupling). Single point of coordination. Kiedy co: prosta Saga (2-3 kroki) — choreography. Złożona logika, wiele kroków, retry — orchestration. Temporal.io — workflow engine dla orchestration Saga.",
  },
  {
    question: "Temporal.io — durable workflow engine dla Saga i długotrwałych procesów?",
    answer: "Temporal.io: open-source durable workflow engine. Napędzany przez Netflix, Uber, Airbnb. Kluczowa idea: kod workflow jest deterministyczny i persystowany. Workflow może czekać dni/tygodnie bez utraty stanu. Crash i restart nie zrywają workflow. Koncepty: Workflow — kod który definiuje przepływ. Activity — pojedynczy krok (call do zewnętrznego API, DB write). Worker — serwis który wykonuje workflow i activities. Task Queue — kolejka zadań dla workerów. Signals — zewnętrzne zdarzenia które modyfikują workflow. Queries — odczyt stanu workflow. Jak działa: Temporal Server persystuje każdy krok. Při restart Worker — odtwarza historię eventów i kontynuuje. Automatyczne retry activities (z exponential backoff). Timeout per activity i per workflow. Saga z Temporal: każda Activity jest odwracalna (compensate function). Jeśli Activity fail — Temporal uruchamia compensation workflow. Języki: Go, Java, Python, TypeScript (SDK). Temporal Cloud: managed Temporal (pay per use). Self-hosted: Temporal Server + Cassandra/PostgreSQL. Alternatywy: Conductor (Netflix, open-source). Cadence (Uber, Temporal ancestor). AWS Step Functions (SaaS, state machines). Zeebe/Camunda 8 (BPMN-based). Apache Airflow (DAG-based, bardziej dla ETL).",
  },
  {
    question: "Jak implementować Saga z Kafka i event store?",
    answer: "Event-driven Saga z Kafka: każdy krok emituje eventy na Kafka topic. Usługi konsumują eventy i emitują nowe. Compensating events publikowane w przypadku błędu. Saga State: gdzie trzymać stan sagi? Opcja 1: Saga State w osobnej tabeli DB per usługa. Opcja 2: Event Store — stan wynikający z historii eventów. Opcja 3: Redis — tymczasowy state dla in-flight sagas. Choreography z Kafka: topics per step/event-type. Idempotent consumers — ten sam event może przyjść wielokrotnie. Consumer groups — jedna instancja per partycja. Exactly-once semantics: Kafka transactions — producer i consumer jako atomowa operacja. Transactional Outbox — najpierw zapisz do DB, potem do Kafka (CDC przez Debezium). Saga correlation: Correlation ID — ten sam ID przez całą sagę. Propagowany w event headers lub payload. Używany do łączenia eventów w jedną sagę. Observability: distributed tracing (OpenTelemetry) z correlation ID. Metryki: saga duration, success rate, compensation rate. Alerting gdy saga stuck (brak postępu po X minutes). Testing Saga: unit test każdej usługi niezależnie. Contract tests (Pact) między usługami. Integration tests z testcontainers (Kafka + PostgreSQL). End-to-end saga test w staging environment.",
  },
  {
    question: "Jakie są pułapki i anty-wzorce przy implementacji Saga?",
    answer: "Pułapka 1 — Missing compensation: każdy krok MUSI mieć compensating transaction. Jeśli krok nie może być cofnięty (np. email już wysłany) — użyj Pivot Transaction (ostatni krok który można cofnąć). Pułapka 2 — Dirty reads: usługa B czyta dane które usługa A jeszcze modyfikuje w ramach innej sagi. Countermeasure: Semantic Lock (flaga 'PENDING' w rekordzie). Pułapka 3 — Saga stuck: event zgubiony, usługa down — saga nigdy się nie kończy. Rozwiązanie: monitoring + alerting na długo trwające sagi. Dead letter queue. Manual intervention workflow. Pułapka 4 — Idempotency brak: event dostarczony dwukrotnie -> podwójna rezerwacja. Każdy krok musi być idempotentny. Pułapka 5 — Synchronous coordination: Saga przez synchroniczne HTTP zamiast events. Tworzy temporal coupling, traci odporność na awarie. Pułapka 6 — Zbyt dużo kroków: 10+ kroków Saga = koszmar debugowania. Rozbij na mniejsze sagas lub przemyśl granice serwisów. Best practices: Saga per business process (Order, Payment, Shipping oddzielne). Idempotent activities/handlers. Compensation zawsze implementowana. Monitoring i timeout per saga. Semantic Lock dla isolation. Testuj kompensację tak samo jak happy path.",
  },
];

const sagaComparison = [
  { aspekt: "Koordynacja", choreography: "Zdecentralizowana (events)", orchestration: "Centralna (Saga Manager)" },
  { aspekt: "Coupling", choreography: "Luźne (event bus)", orchestration: "Wyższe (orchestrator zna usługi)" },
  { aspekt: "Debugowanie", choreography: "Trudne (rozproszone logi)", orchestration: "Łatwe (centralny log)" },
  { aspekt: "Widoczność stanu", choreography: "Brak centralnego widoku", orchestration: "Pełny widok stanu" },
  { aspekt: "Dodawanie kroków", choreography: "Proste (nowy subscriber)", orchestration: "Wymaga zmiany orchestratora" },
  { aspekt: "Narzędzia", choreography: "Kafka, RabbitMQ, SNS/SQS", orchestration: "Temporal, Step Functions, Zeebe" },
];

export default function BlogSagaPatternCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Saga Pattern — co to jest, Choreography vs Orchestration, Temporal.io, Kafka | Fotz.pl"
        description="Saga Pattern: distributed transactions w mikrousługach, Choreography vs Orchestration, Temporal.io durable workflows, implementacja z Kafka i Event Store."
        canonicalUrl="https://fotz.pl/blog/saga-pattern-co-to-jest-choreography-orchestration-temporal-kafka"

        keywords="Saga Pattern co to jest, Saga Pattern definicja, czym jest Saga Pattern, Saga Pattern przykłady, jak działa Saga Pattern, Saga Pattern znaczenie, Saga Pattern przewodnik"
      />
      <ArticleSchema
        title="Saga Pattern — co to jest, Choreography vs Orchestration, Temporal.io, Kafka?"
        description="Saga Pattern: zamiast 2PC, choreography vs orchestration, Temporal.io, Kafka, compensating transactions, pułapki i anty-wzorce."
        url="https://fotz.pl/blog/saga-pattern-co-to-jest-choreography-orchestration-temporal-kafka"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Saga Pattern", url: "https://fotz.pl/blog/saga-pattern-co-to-jest-choreography-orchestration-temporal-kafka" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-violet-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Saga Pattern", href: "/blog/saga-pattern-co-to-jest-choreography-orchestration-temporal-kafka" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Microservices / Distributed Systems
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Saga Pattern
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Distributed transactions bez 2PC — sekwencja lokalnych transakcji
              z kompensacją. Choreography przez eventy lub Orchestration przez
              Temporal.io.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Zamiast 2PC", value: "Eventual Consistency" },
                { label: "Event-driven", value: "Choreography" },
                { label: "Centralny koord.", value: "Orchestration" },
                { label: "Durable workflows", value: "Temporal.io" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-purple-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choreography vs Orchestration</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dwa fundamentalnie różne podejścia do koordynacji Sagi — decentralizacja
              przez eventy vs centralny koordynator.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Aspekt</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Choreography</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Orchestration</th>
                </tr>
              </thead>
              <tbody>
                {sagaComparison.map((r, i) => (
                  <tr key={r.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{r.aspekt}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{r.choreography}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{r.orchestration}</td>
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
