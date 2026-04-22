import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Event-Driven Architecture (EDA)?",
    answer: "Event-Driven Architecture (architektura sterowana zdarzeniami) to wzorzec projektowania systemów w którym komponenty komunikują się przez zdarzenia (events) zamiast przez bezpośrednie wywołania API. Zdarzenie (event) to fakta o tym co się wydarzyło: 'OrderPlaced', 'PaymentProcessed', 'UserRegistered'. Kluczowe cechy EDA: Loose coupling — producent zdarzeń nie wie kto je konsumuje. Asynchroniczność — producent wysyła zdarzenie i nie czeka na odpowiedź. Skalowalność — konsumenci mogą być skalowani niezależnie. Audit log — stream zdarzeń jest naturalną historią tego co się wydarzyło. Komponenty EDA: Event Producer — generuje zdarzenia (np. serwis zamówień emituje OrderPlaced). Event Broker — pośrednik przekazujący zdarzenia (Kafka, RabbitMQ, AWS SNS/SQS). Event Consumer — odbiera i przetwarza zdarzenia (np. serwis płatności, serwis powiadomień, serwis raportów). EDA jest fundamentem mikroserwisów i systemów wysokiej skali.",
  },
  {
    question: "EDA vs. REST API — kiedy co stosować?",
    answer: "REST API vs. Event-Driven Architecture: REST API (synchroniczne): Bezpośrednie wywołanie — serwis A wywołuje serwis B i czeka na odpowiedź. Prostota — łatwy debugging, czytelny flow. Tight coupling — serwis A musi znać adres serwisu B. Single point of failure — jeśli B jest niedostępny, A fail-uje. Kiedy REST: operacje CRUD, gdy potrzebujesz natychmiastowej odpowiedzi (weryfikacja, obliczenia), małe systemy. EDA (asynchroniczne): Loose coupling — producent nie zna konsumentów. Resilience — jeśli konsument jest offline, zdarzenia czekają w kolejce. Skalowalność — możesz dodać nowych konsumentów bez zmian w producencie. Złożoność — trudniejszy debugging, eventual consistency. Kiedy EDA: procesy wieloetapowe (order processing, onboarding), powiadomienia, integracje z zewnętrznymi systemami, operacje które mogą być retry'd, audit logging. Praktyka: większość systemów używa obu — REST dla synchronicznych operacji, EDA dla asynchronicznych workflow.",
  },
  {
    question: "Czym są Apache Kafka, RabbitMQ i AWS SNS/SQS?",
    answer: "Popularne message brokers: Apache Kafka — distributed log o ogromnej przepustowości. Retencja wiadomości (tygodnie/miesiące), event sourcing, stream processing. Używany przez Netflix, LinkedIn, Uber. Idealny dla high-volume event streams i data pipelines. RabbitMQ — tradycyjna kolejka wiadomości. Routing, priorities, dead-letter queues. Prostszy niż Kafka, świetny dla task queues i RPC patterns. AWS SQS — managed queue service. Simple, reliable, scalable. SQS Standard (at-least-once), SQS FIFO (exactly-once, ordered). AWS SNS — pub/sub service. Fan-out do wielu SQS/Lambda/HTTP. Świetny do powiadomień i multi-subscriber patterns. Google Pub/Sub — managed, globalny, dobra integracja z GCP. Azure Service Bus — managed, enterprise features, DLQ, sessions. Jak wybrać: Potrzebujesz event sourcing i dużej przepustowości? Kafka. Proste task queues? RabbitMQ. Budujesz na AWS? SQS/SNS. Prostota managed service? Odpowiedni cloud provider service.",
  },
  {
    question: "Co to jest Event Sourcing?",
    answer: "Event Sourcing to wzorzec gdzie zamiast przechowywać aktualny stan aplikacji w bazie danych, przechowujesz sekwencję zdarzeń które do tego stanu doprowadziły. Tradycyjne podejście: UPDATE orders SET status='shipped' WHERE id=123. Tracisz historię — nie wiesz co było wcześniej. Event Sourcing: zapisujesz: OrderCreated, OrderPaid, OrderShipped. Stan = replay wszystkich zdarzeń. Zalety Event Sourcing: Pełen audit log — wiesz co, kiedy i dlaczego się wydarzyło. Time travel — możesz odtworzyć stan systemu z dowolnego momentu w przeszłości. Debugging — replay zdarzeń ujawnia co poszło nie tak. Decoupling — dodajesz projekcje (read models) bez zmiany event store. Wady: Złożoność — snapshot pattern dla długich historii. Eventual consistency — projekcje mogą być za starą. Schema evolution — trudna zmiana formatu starych zdarzeń. Często łączone z CQRS. Narzędzia: EventStoreDB, Kafka jako event store, Axon Framework.",
  },
  {
    question: "Jakie są wzorce i wyzwania EDA?",
    answer: "Wzorce EDA: Saga Pattern — koordynacja długich transakcji przez serię zdarzeń z kompensacją przy błędzie. Np. order flow: reserve inventory -> charge card -> ship -> lub rollback. Outbox Pattern — gwarantuje że zdarzenie zostanie opublikowane razem z transakcją DB. Eliminuje problem 'zapisałem do DB ale nie wysłałem eventu'. CQRS + Event Sourcing — naturalne połączenie. Commands generują zdarzenia, zdarzenia budują read models. Choreography vs. Orchestration — w choreografii każdy serwis reaguje na zdarzenia autonomicznie (decentralizacja). W orchestracji jeden serwis (orchestrator/saga) koordynuje flow. Wyzwania EDA: Eventual consistency — nie ma transakcji ACID między serwisami. Ordering — zdarzenia mogą przyjść w złej kolejności. At-least-once delivery — może przyjść duplikat eventu (idempotentność konsumenta). Debugging — trudno śledzić flow przez wiele serwisów (potrzeba distributed tracing: Jaeger, Zipkin). Dead Letter Queue — obsługa zdarzeń które nie mogą być przetworzone.",
  },
];

const edaComponents = [
  { komponent: "Event Producer", opis: "Generuje zdarzenia przy każdej istotnej akcji biznesowej", przykłady: "Serwis zamówień, serwis użytkowników, serwis płatności", kolor: "blue" },
  { komponent: "Message Broker", opis: "Pośrednik przechowujący i routing zdarzeń między producentami a konsumentami", przykłady: "Apache Kafka, RabbitMQ, AWS SQS/SNS, Google Pub/Sub", kolor: "green" },
  { komponent: "Event Consumer", opis: "Subskrybuje zdarzenia i wykonuje logikę biznesową po ich otrzymaniu", przykłady: "Serwis powiadomień, serwis raportów, serwis ML", kolor: "purple" },
  { komponent: "Event Schema Registry", opis: "Centralne repozytorium schematów zdarzeń — zapewnia kompatybilność", przykłady: "Confluent Schema Registry, AWS Glue, Apicurio", kolor: "orange" },
  { komponent: "Dead Letter Queue (DLQ)", opis: "Kolejka dla zdarzeń które nie mogły być przetworzone po N próbach retry", przykłady: "Kafka DLQ, SQS DLQ, RabbitMQ Dead Letter Exchange", kolor: "teal" },
];

const edaPatterns = [
  { wzorzec: "Saga Pattern", opis: "Długa transakcja jako seria małych kroków z kompensacją przy błędzie. Choreography lub Orchestration.", useCase: "Order fulfillment, user onboarding, multi-step payments" },
  { wzorzec: "Outbox Pattern", opis: "Zapis zdarzenia do tabeli 'outbox' w tej samej transakcji co dane. Osobny proces wysyła do brokera.", useCase: "Gwarancja at-least-once delivery bez 2-phase commit" },
  { wzorzec: "Event Sourcing", opis: "Stan aplikacji jako sekwencja zdarzeń. Replay zdarzeń = odtworzenie stanu.", useCase: "Audit log, time travel debugging, CQRS" },
  { wzorzec: "Fan-out / Pub-Sub", opis: "Jedno zdarzenie dostarczone do wielu niezależnych konsumentów równocześnie.", useCase: "Powiadomienia, aktualizacje cache, synchronizacja read models" },
];

export default function BlogEventDrivenArchCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Event-Driven Architecture | Fotz Studio"
        description="Event-Driven Architecture: zdarzenia, message brokers (Kafka, RabbitMQ, SQS), Event Sourcing, Saga Pattern, Outbox Pattern i kiedy stosować EDA zamiast…"
        canonical="https://fotz.pl/blog/event-driven-architecture-co-to-jest-jak-wdrozyz"

        keywords="Event-Driven Architecture co to jest, Event-Driven Architecture definicja, czym jest Event-Driven Architecture, Event-Driven Architecture przykłady, jak działa Event-Driven Architecture, Event-Driven Architecture znaczenie, Event-Driven Architecture przewodnik"

        canonical="https://fotz.pl/blog/event-driven-architecture-co-to-jest-jak-wdrozyz"
      />
      <ArticleSchema
        title="Event-Driven Architecture — co to jest i jak wdrożyć EDA?"
        description="EDA: architektura sterowana zdarzeniami, message brokers (Kafka, RabbitMQ, SQS), Event Sourcing, Saga, Outbox Pattern i porównanie z REST API dla mikroserwisów."
        url="https://fotz.pl/blog/event-driven-architecture-co-to-jest-jak-wdrozyz"
        datePublished="2024-03-08"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Event-Driven Architecture", url: "https://fotz.pl/blog/event-driven-architecture-co-to-jest-jak-wdrozyz" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Event-Driven Architecture", url: "/blog/event-driven-architecture-co-to-jest-jak-wdrozyz" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Software Architecture
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Event-Driven Architecture
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zamiast serwis A wywołuje serwis B — serwis A emituje zdarzenie,
              serwis B (i C i D) reaguje niezależnie.
              EDA to fundament skalowalnych mikroserwisów.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Główny broker", value: "Apache Kafka" },
                { label: "Kluczowy wzorzec", value: "Saga Pattern" },
                { label: "Gwarancja", value: "At-least-once" },
                { label: "Tracking", value: "Distributed Trace" },
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

      {/* Komponenty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 komponentów Event-Driven Architecture</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              EDA składa się z kilku kluczowych elementów które razem tworzą
              spójny system oparty na zdarzeniach.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {edaComponents.map((c) => (
              <FadeInView key={c.komponent}>
                <div className={`rounded-xl border-2 p-5 ${
                  c.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  c.kolor === "green" ? "border-green-200 bg-green-50" :
                  c.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  c.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-1 ${
                    c.kolor === "blue" ? "text-blue-800" :
                    c.kolor === "green" ? "text-green-800" :
                    c.kolor === "purple" ? "text-purple-800" :
                    c.kolor === "orange" ? "text-orange-800" :
                    "text-teal-800"
                  }`}>{c.komponent}</h3>
                  <p className="text-gray-700 text-sm mb-2">{c.opis}</p>
                  <p className="text-xs text-gray-500"><span className="font-semibold">Przykłady: </span>{c.przykłady}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Wzorce */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe wzorce EDA</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wzorce projektowe które rozwiązują typowe wyzwania
              architektury opartej na zdarzeniach.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {edaPatterns.map((p) => (
              <FadeInView key={p.wzorzec}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{p.wzorzec}</h3>
                  <p className="text-gray-700 text-sm mb-3">{p.opis}</p>
                  <div className="text-xs">
                    <span className="font-semibold text-amber-700">Use case: </span>
                    <span className="text-gray-600">{p.useCase}</span>
                  </div>
                </div>
              </FadeInView>
            ))}
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

      <RelatedArticles currentArticleId="event-driven-architecture-co-to-jest-jak-wdrozyz" />
      <ContactSection />
    </Layout>
  );
}
