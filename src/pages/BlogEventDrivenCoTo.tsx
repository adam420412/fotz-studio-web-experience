import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Event-Driven Architecture (EDA) i jak działa?",
    answer: "Event-Driven Architecture (EDA) to styl architektoniczny gdzie komponenty komunikują się przez emisję i reagowanie na zdarzenia (events) zamiast bezpośrednich wywołań (request-response). Fundamentalne koncepty: Event — niezmenny fakt który się wydarzył ('OrderPlaced', 'UserRegistered', 'PaymentFailed'). Zawiera dane zdarzenia i metadane (timestamp, version, correlation ID). Producer — komponent emitujący event. Nie wie kto go konsumuje. Consumer — komponent reagujący na event. Może być wiele konsumentów jednego eventu. Event Broker — pośrednik przechowujący i dostarczający eventy (Kafka, RabbitMQ, SQS). Topologie EDA: Event Notification — powiadamiaj że coś się stało, bez szczegółów. Consumer pobiera dane jeśli potrzebuje. Event-Carried State Transfer — event zawiera pełny stan (dane). Consumer ma wszystko co potrzeba w evencie. Event Sourcing — stan systemu to sekwencja eventów (zamiast snapshot w bazie). CQRS + Event Sourcing — Command Query Responsibility Segregation. Zalety EDA: loose coupling — producer nie zna consumers. Scalability — konsumenci skalują niezależnie. Resilience — failure jednego konsumenta nie blokuje producenta. Audit log — naturalna historia zmian. Wyzwania: eventual consistency — stan spójny po czasie, nie natychmiast. Debugowanie trudniejsze. Duplikaty eventów (at-least-once delivery) — idempotentność konsumenta.",
  },
  {
    question: "Apache Kafka — jak działa i kiedy używać?",
    answer: "Apache Kafka: rozproszony log zdarzeń (distributed event streaming platform). Architektura Kafka: Topics — named stream of events (jak kategoria). Każdy topic podzielony na Partitions. Partitions: dane rozłożone między partycje. Każda partycja jest ordered log — gwarantuje kolejność w partycji (nie w topicu). Consumer Groups: wiele konsumentów w grupie — każda partycja przypisana do jednego konsumenta w grupie. Brokers: węzły Kafka klastra. Replication factor: każda partycja replikowana na N brokerów. Retention: eventy przechowywane przez określony czas (domyślnie 7 dni) lub rozmiar. Consumer może wczytać historię od początku. Kafka Connect: łączniki do importu/eksportu danych (baza danych, S3, Elasticsearch). Change Data Capture (CDC) przez Debezium. Kafka Streams: biblioteka do przetwarzania strumieni w JVM. Real-time aggregations, joins, transformations. Kiedy Kafka: high-throughput (miliony eventów/sek). Event log jako source of truth. Multiple consumers per topic. Long retention potrzebna. Kafka vs. RabbitMQ: Kafka — log-based, high throughput, retention, replay. RabbitMQ — queue-based, flexible routing, lower throughput. Managed Kafka: Confluent Cloud, AWS MSK, Redpanda (Kafka API-compatible, 10x szybszy), Upstash Kafka (serverless).",
  },
  {
    question: "Event Sourcing i CQRS — kiedy i jak implementować?",
    answer: "Event Sourcing: zamiast zapisywać aktualny stan w bazie danych, zapisujesz sekwencję eventów które doprowadziły do tego stanu. Aggregate: obiekt domenowy z logiką biznesową. Stan = fold wszystkich eventów w chronologicznej kolejności. Snapshot: co N eventów zapisz snapshot stanu (optymalizacja dla długich historii). Replay: możesz odtworzyć stan systemu na dowolny moment w przeszłości. Audit log gratis — pełna historia zmian. Event Store: EventStoreDB — dedykowana baza dla event sourcing. Kafka jako event store. PostgreSQL + append-only table. CQRS (Command Query Responsibility Segregation): oddziel model zapisu (commands) od modelu odczytu (queries). Write side: commands → domain logic → events. Read side: projections z eventów → optimized read models. Korzyści CQRS + ES: read models mogą być zoptymalizowane (denormalizacja). Scaling read i write niezależnie. Testowanie czystej logiki domenowej. Wyzwania: eventual consistency — read model aktualizowany asynchronicznie. Complexity — nie dla każdej aplikacji. Saga / Process Manager: koordynacja długich transakcji między mikroserwisami. Choreography — serwisy reagują na eventy innych (prostsze, ale trudniejsze do śledzenia). Orchestration — centralny koordynator (Saga manager) wysyła komendy (łatwiej debug). Outbox Pattern: atomowe zapisanie eventu razem z transakcją bazodanową — eliminuje 'dual write' problem.",
  },
  {
    question: "RabbitMQ i message queues — kiedy zamiast Kafka?",
    answer: "RabbitMQ: broker wiadomości (message broker) oparty na AMQP protokole. Exchanges i Queues: Publisher wysyła do Exchange (nie queue). Exchange routing rules (direct, fanout, topic, headers). Direct: routing key musi pasować dokładnie. Fanout: broadcast do wszystkich podpiętych queues. Topic: routing key z wildcards (#, *). Dead Letter Queue (DLQ): wiadomości które nie mogły być przetworzone idą do DLQ. Po N próbach retry → DLQ → manual inspection. Potwierdzenia (ack): Consumer potwierdzenie po przetworzeniu (message usuwana). Brak ack → message wraca do kolejki (redelivery). Persistence: wiadomości i kolejki mogą być trwałe (przeżyją restart broker). TTL: time-to-live per wiadomość lub kolejkę. Kiedy RabbitMQ zamiast Kafka: potrzebujesz złożonego routingu (exchange patterns). Niższa latency (RabbitMQ szybszy dla małych wiadomości). Wiadomości powinny być usuwane po przetworzeniu (nie log retention). Work queues (task distribution) między workery. Alternatywy i narzędzia cloud: AWS SQS — managed queue, FIFO queues, at-least-once. AWS SNS — pub/sub, fanout do SQS/Lambda/HTTP. Google Pub/Sub — managed, at-least-once, ordering per key. Azure Service Bus — advanced messaging, sessions, transactions. Celery (Python): task queue library używająca RabbitMQ lub Redis jako broker. Asynchroniczne zadania w Django/Flask — email sending, report generation.",
  },
  {
    question: "Jak wdrożyć Event-Driven Architecture w praktyce — pułapki i dobre praktyki?",
    answer: "Dobre praktyki EDA: Event schema versioning — eventy muszą ewoluować bez breaking changes. Additive changes (nowe opcjonalne pola). Używaj Avro, Protobuf lub JSON Schema z Schema Registry (Confluent Schema Registry). Consumer idempotentność: event może być dostarczony więcej niż raz (at-least-once delivery). Consumer musi być idempotentny — przetworzenie tego samego eventu N razy daje ten sam wynik. Deduplikacja przez event ID + idempotency key. Correlation ID: każdy event powinien nieść correlation ID dla tracingu przez wiele serwisów. Dead Letter Queue: zawsze konfiguruj DLQ dla nieobrabianych wiadomości — bez tego gubisz dane. Circuit breaker: zabezpiecz consumer przed kaskadowymi awariami downstream. Monitoring: lag monitoring — opóźnienie konsumenta (consumer lag w Kafka). Event rate, error rate, DLQ depth. Distributed tracing przez OpenTelemetry. Pułapki: Distributed transactions — nie ma ACID. Używaj Saga pattern + compensating transactions. Eventual consistency — UI może pokazywać stary stan. Dodaj optimistic UI lub polling. Schema coupling — jeśli producer zmienia schemat bez versioning → broken consumers. Ordering — Kafka gwarantuje kolejność w partycji. Dla global ordering: jeden producer, jeden consumer (utrata skalowalności). Testing EDA: contract tests z Pact lub AsyncAPI. Integration tests z embedded Kafka (Testcontainers). Event catalog — dokumentuj wszystkie eventy w organizacji (AsyncAPI standard).",
  },
];

const edaPatterns = [
  { wzorzec: "Pub/Sub", opis: "Publisher emituje event, wielu subscribers reaguje niezależnie. Decoupling producentów od konsumentów.", narzedzia: "Kafka, SNS, Google Pub/Sub, RabbitMQ fanout" },
  { wzorzec: "Event Streaming", opis: "Ciągły strumień eventów — konsumenci przetwarzają w czasie rzeczywistym lub batches. Log retention umożliwia replay.", narzedzia: "Kafka, Kinesis, Pulsar, Redpanda" },
  { wzorzec: "Message Queue (Work Queue)", opis: "Zadania rozdzielane między pool workerów. Jeden worker per task. Skalowanie workerów niezależnie.", narzedzia: "RabbitMQ, SQS, Celery, Bull (Node.js)" },
  { wzorzec: "Event Sourcing", opis: "Stan systemu jako sekwencja eventów. Pełna historia, replay, audit log, czasowe projekcje.", narzedzia: "EventStoreDB, Kafka, Axon Framework" },
  { wzorzec: "CQRS", opis: "Oddzielne modele dla zapisu i odczytu. Read models optymalizowane dla query. Write side przez commands.", narzedzia: "Axon, MediatR, custom implementation" },
  { wzorzec: "Saga (Choreography)", opis: "Długie transakcje przez eventy. Każdy serwis reaguje na event i emituje kolejny. Brak centralnego koordynatora.", narzedzia: "Eventuate, Axon Saga, custom" },
];

const edaBrokers = [
  { broker: "Apache Kafka", throughput: "Miliony msg/s", latency: "Niska (ms)", retention: "Konfigurowana (dni/TB)", useCase: "Event log, streaming, CDC, high-throughput" },
  { broker: "RabbitMQ", throughput: "Tysiące msg/s", latency: "Bardzo niska (sub-ms)", retention: "Do ack (lub TTL)", useCase: "Task queue, complex routing, low-latency" },
  { broker: "AWS SQS/SNS", throughput: "Skaluje auto", latency: "Niska", retention: "14 dni (SQS)", useCase: "Cloud-native, serverless, managed" },
  { broker: "Redpanda", throughput: "Kafka-compatible 10x", latency: "Bardzo niska", retention: "Konfigurowana", useCase: "Drop-in Kafka alternative, lower latency" },
  { broker: "Google Pub/Sub", throughput: "Globalny skalowanie", latency: "Niska", retention: "7-600 dni", useCase: "GCP native, global distribution" },
];

export default function BlogEventDrivenCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Event-Driven Architecture — co to jest, Kafka, RabbitMQ, Event Sourcing i CQRS? | Fotz.pl"
        description="Event-Driven Architecture: Kafka vs RabbitMQ, Event Sourcing, CQRS, Saga pattern, pub/sub, message queues — jak projektować i wdrożyć EDA w mikroserwisach."
        canonicalUrl="https://fotz.pl/blog/event-driven-architecture-co-to-jest-kafka-rabbitmq-event-sourcing"
      />
      <ArticleSchema
        title="Event-Driven Architecture — co to jest, Kafka, RabbitMQ, Event Sourcing i CQRS?"
        description="EDA: 6 wzorców (Pub/Sub/Saga/CQRS/EventSourcing), 5 brokerów, Kafka vs RabbitMQ, Outbox Pattern, idempotentność i monitoring w produkcji."
        url="https://fotz.pl/blog/event-driven-architecture-co-to-jest-kafka-rabbitmq-event-sourcing"
        datePublished="2024-04-09"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Event-Driven Architecture", url: "https://fotz.pl/blog/event-driven-architecture-co-to-jest-kafka-rabbitmq-event-sourcing" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Event-Driven Architecture", href: "/blog/event-driven-architecture-co-to-jest-kafka-rabbitmq-event-sourcing" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Architektura / Mikroserwisy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Event-Driven Architecture
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Serwisy które nie wiedzą o sobie nawzajem, a jednak współpracują.
              EDA z Kafka, RabbitMQ i Event Sourcing to fundament skalowalnych,
              odpornych mikroserwisów.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "High-throughput broker", value: "Apache Kafka" },
                { label: "Task queues", value: "RabbitMQ / SQS" },
                { label: "State pattern", value: "Event Sourcing" },
                { label: "Dist. transactions", value: "Saga Pattern" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-teal-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wzorce */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych wzorców EDA</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Event-Driven Architecture obejmuje wiele wzorców — od prostego
              pub/sub po złożone event sourcing i saga transactions.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {edaPatterns.map((p) => (
              <FadeInView key={p.wzorzec}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{p.wzorzec}</h3>
                  <p className="text-gray-700 text-sm mb-2">{p.opis}</p>
                  <p className="text-xs text-teal-700 font-medium">{p.narzedzia}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Brokerzy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Porównanie brokerów wiadomości</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wybór brokera zależy od throughput, latency, retention potrzeb
              i przypadku użycia.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Broker</th>
                  <th className="text-left p-3 font-bold text-gray-900">Throughput</th>
                  <th className="text-left p-3 font-bold text-gray-900">Latency</th>
                  <th className="text-left p-3 font-bold text-gray-900">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {edaBrokers.map((b, i) => (
                  <tr key={b.broker} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-900">{b.broker}</td>
                    <td className="p-3 text-gray-700 text-xs">{b.throughput}</td>
                    <td className="p-3 text-gray-700 text-xs">{b.latency}</td>
                    <td className="p-3 text-gray-600 text-xs">{b.useCase}</td>
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
