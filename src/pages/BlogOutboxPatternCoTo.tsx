import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Transactional Outbox Pattern i jaki problem rozwiązuje?",
    answer: "Problem dual write: aplikacja musi zapisać dane do DB i wysłać event do message broker (Kafka, RabbitMQ). Jeśli zapis do DB powiedzie się ale broker jest niedostępny — event zgubiony. Jeśli broker dostępny ale DB fail — niespójność. Rozwiązanie — Transactional Outbox: 1. Zamiast wysyłać event bezpośrednio — zapisz event do tabeli 'outbox' w tej samej transakcji co główne dane. 2. Osobny Message Relay czyta z outbox i publikuje do brokera. 3. Po potwierdzeniu przez broker — oznacz event jako published. Gwarancja: event jest zapisany atomowo z główną zmianą. Nie ma dual write. At-least-once delivery (event może być opublikowany wielokrotnie — wymaga idempotentnych konsumentów). Outbox table schema: id, aggregate_type, aggregate_id, event_type, payload, created_at, published_at. Message Relay implementacje: Polling Publisher: prosty, odpytuje outbox co N sekund. Wada: latencja i obciążenie DB. Change Data Capture (CDC): efektywniejsze, używa log DB do wykrywania zmian. Debezium: open-source CDC connector dla PostgreSQL, MySQL, MongoDB, SQL Server. Czyta transaction log (WAL w PostgreSQL) — zero overhead na aplikacji.",
  },
  {
    question: "Debezium CDC — jak działa Change Data Capture?",
    answer: "Debezium: open-source platforma CDC (Confluent/Red Hat). Działa jako Kafka Connect connector. Czyta Write-Ahead Log (WAL) PostgreSQL, binlog MySQL, oplog MongoDB. Żadnego odpytywania — event-driven, sub-second latencja. Architektura: Debezium Connector (Kafka Connect plugin) -> DB transaction log -> Kafka topic. Konfiguracja PostgreSQL: wal_level = logical. Replikacja slot dla Debezium. Konfiguracja connectora: database.hostname, port, user, password. database.server.name — prefix dla topic names. table.include.list — które tabele śledzić. Kafka topics: {server-name}.{schema}.{table} per tabela. Każda zmiana (INSERT/UPDATE/DELETE) jako event. Format eventu: before (stare dane) i after (nowe dane). Outbox Event Router (Debezium SMT): Single Message Transform który routuje eventy z outbox tabeli. Routing na podstawie aggregate_type i event_type. Envelope: after.event_type -> Kafka topic name. Zalety CDC vs Polling: Zero overhead na aplikacji (czyta log). Real-time (sub-second latencja). Łapie wszystkie zmiany (nawet bezpośrednie SQL). Wady CDC: złożoność setup. Zmiany schematu DB mogą zepsuć CDC. Wymaga PostgreSQL logical replication. Zarządzanie replication slots (nie mogą rosnąć bez końca).",
  },
  {
    question: "Inbox Pattern — jak zapewnić exactly-once processing?",
    answer: "Inbox Pattern: odpowiednik Outbox dla consumerów. Problem: consumer dostaje wiadomość z brokera, przetwarza ją i zapisuje do DB. Jeśli aplikacja crashuje po zapisie DB ale przed commit offset — wiadomość zostanie przetworzona ponownie (at-least-once). Rozwiązanie: Inbox table — przed przetworzeniem zapisz wiadomość do inbox tabeli (w tej samej transakcji). Sprawdź czy message_id już w inbox — jeśli tak, pomiń (already processed). Inbox table schema: message_id (PK), topic, partition, offset, payload, processed_at. Gwarantuje exactly-once processing (idempotent consumer przez DB check). Wada: dodatkowy DB write per message, wzrost tabeli. Cleanup: usuń stare inbox entries (soft delete lub TTL). Idempotency Key: alternatywa do inbox — consumer generuje idempotency key (np. message_id) i sprawdza w Redis lub DB przed przetworzeniem. Pattern Transactional Outbox + Inbox razem: Producer używa Outbox (atomowy zapis + publikacja). Consumer używa Inbox (exactly-once processing). Razem = end-to-end exactly-once w distributed systemie (przy at-least-once brokerze). Kafka z transakcjami: Kafka producers z enable.idempotence = true. Kafka transactions (beginTransaction, commitTransaction). Exactly-once streams z Kafka Streams. Ale: droższe, niższy throughput, złożoniejsze.",
  },
  {
    question: "Jak zaimplementować Outbox Pattern w Springu?",
    answer: "Spring Boot Outbox implementacja: Entity: Order (główna encja). OutboxEvent (tabela outbox). OrderService: @Transactional. 1. save(order). 2. outboxRepository.save(new OutboxEvent(order)). Jeden commit = oba zapisy atomowo. Polling Publisher (prosty): @Scheduled(fixedDelay = 1000). Pobierz niepublikowane eventy. Publish na Kafka. Oznacz jako published. Problem: race condition przy wielu instancjach. Rozwiązanie: SELECT FOR UPDATE SKIP LOCKED — pobierz i zablokuj. Jednocześnie tylko jedna instancja przetwarza. Spring Modulith Outbox: Spring Modulith 1.1+ ma wbudowane Event Publication Registry. @ApplicationModuleListener — automatycznie przechowuje eventy. Automatyczny retry. Transactional Domain Events. Debezium + Spring: nie wymaga Polling Publisher. Debezium czyta z WAL. Dodaj connector konfigurację do Kafka Connect. Outbox Event Router SMT automatycznie routuje. Axon Framework: Event Sourcing + CQRS + Saga + Outbox wbudowane. Axon Server jako event store i message broker. Produkcyjne przykłady: Eventuate Tram (Chris Richardson) — biblioteka do Saga + Outbox dla Java/Spring. Outboxer (Python). Transactional Outbox dla Go. Inbox/Outbox dla .NET (MassTransit).",
  },
  {
    question: "Jakie są alternatywy dla Outbox Pattern?",
    answer: "Alternatywa 1 — Event Sourcing zamiast Outbox: zamiast osobnej outbox tabeli — aplikacja zapisuje eventy jako primary store. Event Store = outbox. Eventy czytane przez projektory i publishowane do brokera. EventStoreDB, Axon Server, Marten (PostgreSQL as event store). Wada: zmiana paradigmatu — duże refaktoryzacje istniejących aplikacji. Alternatywa 2 — Idempotent Producer: accept dual write. Przy failurze — retry z tym samym idempotency key. Kafka enable.idempotence = true — broker odrzuca duplikaty per producer session. Wada: nie gwarantuje spójności przy crash przed wysłaniem. Alternatywa 3 — Saga Orchestration z Temporal: Temporal persystuje stan workflow. Retry automatyczny przy failurze. Brak potrzeby osobnego outbox — Temporal zarządza durable execution. Wada: nowy komponent (Temporal Server), zmiana architektury. Alternatywa 4 — Kafka jako transaction log: traktuj Kafka jako source of truth. Aplikacja zapisuje tylko do Kafka (log-centric architecture). Brak DB jako primary store. Wada: trudne zapytania ad-hoc, streaming-first architecture. Wybór: prostość + istniejąca DB -> Outbox + Debezium. Event-driven new system -> Event Sourcing. Złożone long-running workflows -> Temporal. Kafka-native architecture -> Log-centric.",
  },
];

const patternComparison = [
  { wzorzec: "Transactional Outbox", gwarancja: "At-least-once publish", latencja: "Sub-second (CDC) / Sekundy (polling)", overhead: "Dodatkowa tabela + relay", kiedy: "Mikrousługi z DB + message broker" },
  { wzorzec: "Inbox Pattern", gwarancja: "Exactly-once consume", latencja: "Brak dodatkowej", overhead: "Dodatkowa tabela", kiedy: "At-least-once broker, krytyczne operacje" },
  { wzorzec: "Debezium CDC", gwarancja: "At-least-once capture", latencja: "Sub-second (WAL)", overhead: "Kafka Connect cluster", kiedy: "PostgreSQL/MySQL -> Kafka pipelines" },
  { wzorzec: "Event Sourcing", gwarancja: "Exactly-once (wbudowane)", latencja: "Sub-second", overhead: "Zmiana architektury", kiedy: "Nowe systemy, audit log wymagany" },
  { wzorzec: "Kafka Transactions", gwarancja: "Exactly-once end-to-end", latencja: "Wyższa (2-phase)", overhead: "Złożoność + niższy throughput", kiedy: "Kafka Streams, krytyczne pipelines" },
  { wzorzec: "Temporal Workflows", gwarancja: "Durable execution", latencja: "Zależy od workflow", overhead: "Temporal Server", kiedy: "Long-running, multi-step workflows" },
];

export default function BlogOutboxPatternCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Transactional Outbox Pattern — co to jest, Debezium CDC, Inbox Pattern, Spring | Fotz.pl"
        description="Transactional Outbox Pattern: dual write problem, Debezium CDC, Inbox Pattern dla exactly-once, implementacja w Spring Boot i Axon, alternatywy Event Sourcing."
        canonicalUrl="https://fotz.pl/blog/transactional-outbox-pattern-co-to-jest-debezium-cdc-inbox-spring"
      />
      <ArticleSchema
        title="Transactional Outbox Pattern — co to jest, Debezium CDC, Inbox Pattern, Spring?"
        description="Outbox Pattern: dual write, Debezium CDC, Inbox exactly-once, Spring Boot implementacja, Event Sourcing jako alternatywa — 6 wzorców porównanych."
        url="https://fotz.pl/blog/transactional-outbox-pattern-co-to-jest-debezium-cdc-inbox-spring"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Transactional Outbox", url: "https://fotz.pl/blog/transactional-outbox-pattern-co-to-jest-debezium-cdc-inbox-spring" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Transactional Outbox", href: "/blog/transactional-outbox-pattern-co-to-jest-debezium-cdc-inbox-spring" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Microservices / Data Consistency
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transactional Outbox Pattern
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Rozwiązanie problemu dual write — atomowo zapisz event z danymi,
              opublikuj na Kafka przez Debezium CDC, zapewnij exactly-once przez
              Inbox Pattern.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Dual write fix", value: "Outbox + Tx" },
                { label: "CDC bez pollingu", value: "Debezium WAL" },
                { label: "Exactly-once", value: "Inbox Pattern" },
                { label: "Spring wbudowane", value: "Spring Modulith" },
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

      {/* Porównanie wzorców */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wzorców zapewnienia spójności danych</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od prostego Outbox po Event Sourcing i Kafka Transactions — każde podejście
              oferuje inny trade-off między złożonością a gwarancjami.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wzorzec</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Gwarancja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Latencja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Overhead</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {patternComparison.map((p, i) => (
                  <tr key={p.wzorzec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.wzorzec}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.gwarancja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.latencja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.overhead}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.kiedy}</td>
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
