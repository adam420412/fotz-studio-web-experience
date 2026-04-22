import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Apache Kafka?",
    answer:
      "Apache Kafka to open-source'owa, rozproszona platforma do strumieniowania zdarzeń (event streaming). Stworzona przez LinkedIn w 2010 roku, open-sourcowana przez Apache Software Foundation w 2011. Kafka umożliwia publishing i subscribing do strumieni rekordów (events), trwałe przechowywanie strumieni z określonym retention i przetwarzanie strumieni w czasie rzeczywistym. Kafka jest używana przez LinkedIn (7 trylionów wiadomości/dzień), Uber, Netflix, Airbnb, Twitter jako kluczowy element architektury.",
  },
  {
    question: "Czym Kafka różni się od RabbitMQ?",
    answer:
      "Kafka vs RabbitMQ: Model — Kafka jest log-based (pull model, konsumenci sami pobierają), RabbitMQ jest message queue (push model, broker dostarcza). Retention — Kafka przechowuje wiadomości przez konfigurowalny czas (dni/tygodnie/indefinitely), RabbitMQ usuwa po dostarczeniu. Skalowalność — Kafka jest zoptymalizowana do wysokiej przepustowości (miliony msg/s przez partitioning), RabbitMQ łatwiejszy do skonfigurowania przy mniejszym wolumenie. Replay — Kafka umożliwia replay wiadomości (konsument może czytać od początku), RabbitMQ nie. Use case: Kafka dla high-throughput event streaming, RabbitMQ dla task queues i RPC.",
  },
  {
    question: "Jak działa Kafka Producer i Consumer?",
    answer:
      "Producer wysyła wiadomości (records) do Topic. Każdy record ma klucz (opcjonalny), wartość (payload) i timestamp. Klucz determinuje partycję (round-robin jeśli brak klucza). Consumer subskrybuje Topic i polling records przez poll(). Consumer Group — wiele konsumentów w grupie dzieli między sobą partycje (każda partycja czytana przez jednego konsumenta w grupie). Offset — pozycja konsumenta w logu. Consumer commituje offset po przetworzeniu — Kafka nie usuwa wiadomości, offset gwarantuje 'exactly once' delivery przy odpowiedniej konfiguracji.",
  },
  {
    question: "Co to jest Kafka Streams i ksqlDB?",
    answer:
      "Kafka Streams to biblioteka Java/Scala do budowania aplikacji streamingowych działających bezpośrednio na Kafce — bez zewnętrznego systemu (Flink, Spark). Obsługuje: stateless (map, filter), stateful (aggregate, join, windowing), fault-tolerant state stores (RocksDB), exactly-once semantics. ksqlDB to SQL-like interfejs do przetwarzania strumieni Kafki — tworzysz streams i tables w SQL, bez pisania kodu Java. Idealny dla transformacji, filtrowania i agregacji bez custom aplikacji.",
  },
  {
    question: "Jak Kafka zapewnia wysoką dostępność?",
    answer:
      "Kafka zapewnia HA przez replikację: każda partycja ma jednego Leader i N Follower (replik). Producer pisze do Leader, Followers replikują asynchronicznie. ISR (In-Sync Replicas) — replikasy które są na bieżąco z Leaderem. Jeśli Leader pada — jedna z ISR staje się nowym Leaderem (automatyczny failover zarządzany przez Zookeeper lub KRaft w nowszych wersjach). Konfiguracja: replication.factor=3 (3 kopie), min.insync.replicas=2 (minimum 2 ISR do zapisu) zapewnia wysoka durability.",
  },
];

const kafkaConcepts = [
  { pojęcie: "Topic", opis: "Logiczny kanał wiadomości — jak temat w pub/sub. Producer publikuje, Consumer subskrybuje. Topic podzielony na partycje.", analogia: "Tabela w DB lub kanał w Slack" },
  { pojęcie: "Partition", opis: "Fizyczny podział Topic — umożliwia równoległe przetwarzanie i skalowanie. Wiadomości w partycji są ordered. Liczba partycji = max parallelism.", analogia: "Pas ruchu na autostradzie" },
  { pojęcie: "Offset", opis: "Sekwencyjny numer wiadomości w partycji (0, 1, 2...). Consumer śledzi swój offset — position w logu. Commitowanie offsetu = potwierdzenie przetworzenia.", analogia: "Zakładka w książce" },
  { pojęcie: "Consumer Group", opis: "Logiczne grupy konsumentów współdzielących partycje Topicu. Każda partycja przypisana do jednego konsumenta w grupie. Wiele grup = wiele niezależnych subskrybentów.", analogia: "Dział firmy czytający te same maile" },
  { pojęcie: "Broker", opis: "Serwer Kafka przechowujący partycje. Klaster składa się z wielu brokerów. Każdy broker jest Leaderem dla części partycji.", analogia: "Serwer pocztowy w systemie mail" },
  { pojęcie: "Replication Factor", opis: "Liczba kopii każdej partycji na różnych brokerach. RF=3 oznacza 1 Leader + 2 Follower. Gwarantuje dostępność przy awarii brokerów.", analogia: "RAID dla dysków" },
  { pojęcie: "Retention", opis: "Czas lub rozmiar przechowywania wiadomości. Domyślnie 7 dni. Kafka NIE usuwa wiadomości po dostarczeniu — consumer sam zarządza offsetem.", analogia: "Log serwera z rotacją" },
  { pojęcie: "Schema Registry", opis: "Centralny rejestr schematów (Avro, Protobuf, JSON Schema). Zapewnia zgodność między producentami a konsumentami. Confluent Schema Registry = standard.", analogia: "Kontrakt API między serwisami" },
];

const kafkaUseCases = [
  { przypadek: "Event Sourcing", opis: "Kafka jako event log — każda zmiana stanu to event. Możliwość odtworzenia całej historii systemu od zera. Pattern: CQRS + Event Sourcing.", przykład: "Zamówienie: OrderCreated → PaymentProcessed → OrderShipped → OrderDelivered" },
  { przypadek: "Real-time Analytics", opis: "Analiza strumieni danych na bieżąco — liczniki, metryki, dashboardy bez opóźnień. Kafka Streams lub Flink do transformacji.", przykład: "Fraud detection: analiza transakcji w czasie rzeczywistym, alerting przy anomaliach" },
  { przypadek: "Log Aggregation", opis: "Zbieranie logów z wielu mikroserwisów do jednego miejsca. Producer = agent logów, Consumer = Elasticsearch lub S3.", przykład: "Filebeat → Kafka → Logstash → Elasticsearch (ELK + Kafka)" },
  { przypadek: "Microservices Integration", opis: "Asynchroniczna komunikacja między mikroserwisami przez zdarzenia zamiast REST/gRPC. Decoupling, fault isolation.", przykład: "OrderService → Kafka → InventoryService + EmailService + AnalyticsService" },
  { przypadek: "Change Data Capture (CDC)", opis: "Śledzenie zmian w bazie danych i przesyłanie ich do Kafki. Debezium = popularne narzędzie CDC dla PostgreSQL/MySQL.", przykład: "PostgreSQL → Debezium → Kafka → Elasticsearch (sync search index z DB)" },
];

const kafkaVsAlternatives = [
  { narzędzie: "Apache Kafka", przepustowość: "Bardzo wysoka (miliony/s)", retention: "Konfigurowalne (dni/miesiące)", replay: "Tak", latencja: "Niska (ms)", kompleksowość: "Wysoka" },
  { narzędzie: "RabbitMQ", przepustowość: "Wysoka (100k+/s)", retention: "Do dostarczenia", replay: "Nie", latencja: "Bardzo niska (microsec)", kompleksowość: "Średnia" },
  { narzędzie: "AWS SQS/SNS", przepustowość: "Wysoka (managed)", retention: "14 dni (SQS)", replay: "Nie", latencja: "Niska", kompleksowość: "Niska (managed)" },
  { narzędzie: "Redis Pub/Sub", przepustowość: "Bardzo wysoka", retention: "Brak (fire&forget)", replay: "Nie", latencja: "Bardzo niska (submillisec)", kompleksowość: "Niska" },
  { narzędzie: "Google Pub/Sub", przepustowość: "Bardzo wysoka (managed)", retention: "7-31 dni", replay: "Tak (snapshot)", latencja: "Niska", kompleksowość: "Niska (managed)" },
];

export default function BlogKafkaCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Apache Kafka | Fotz Studio"
        description="Apache Kafka — definicja, architektura (Topic, Partition, Broker, Consumer Group), przypadki użycia i porównanie z RabbitMQ. Kompletny przewodnik po Kafka."
        canonical="https://fotz.pl/blog/kafka-co-to-jest"

        keywords="Apache Kafka co to jest, Apache Kafka definicja, czym jest Apache Kafka, Apache Kafka przykłady, jak działa Apache Kafka, Apache Kafka znaczenie, Apache Kafka przewodnik"
      />
      <ArticleSchema
        title="Apache Kafka — co to jest i jak działa? Kompletny przewodnik"
        description="Kompletny przewodnik po Apache Kafka: architektura, kluczowe pojęcia, zastosowania i porównanie z alternatywami."
        url="https://fotz.pl/blog/kafka-co-to-jest"
        datePublished="2024-01-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Apache Kafka", url: "https://fotz.pl/blog/kafka-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Apache Kafka", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Apache Kafka — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Kafka to platforma event streamingu używana przez największe firmy świata.
            Poznaj Topic, Partition, Consumer Group, zastosowania i różnicę od RabbitMQ.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Apache Kafka?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Apache Kafka</strong> to rozproszona platforma do strumieniowania zdarzeń (event streaming).
              Stworzona przez LinkedIn w 2010 roku do obsługi 7 trylionów wiadomości dziennie,
              open-sourcowana przez Apache w 2011 roku.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Kafka działa jak trwały, skalowalny dziennik zdarzeń — producenci publikują zdarzenia do topiców,
              konsumenci czytają je asynchronicznie w swojej chwili. Wiadomości są przechowywane przez
              konfigurowalny czas (dni/miesiące), co umożliwia replay i budowanie systemów event sourcing.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "7T/dzień", opis: "Wiadomości przetwarzanych przez LinkedIn (pierwotny twórca Kafka) dziennie" },
                { stat: "80%+", opis: "Firm Fortune 100 używa Apache Kafka wg Confluent Annual Report 2023" },
                { stat: "ms latencja", opis: "End-to-end latencja od producenta do konsumenta — Kafka jest optymalizowana pod przepustowość i niskie opóźnienie" },
              ].map((s, i) => (
                <div key={i} className="bg-slate-800 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-orange-400 mb-2">{s.stat}</p>
                  <p className="text-slate-300 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Pojęcia */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe pojęcia Kafka</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {kafkaConcepts.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-orange-600 font-mono mb-2">{c.pojęcie}</h3>
                  <p className="text-slate-600 text-sm mb-2">{c.opis}</p>
                  <p className="text-xs text-slate-400 bg-slate-50 rounded p-2">
                    <strong>Analogia:</strong> {c.analogia}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Use Cases */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Zastosowania Apache Kafka</h2>
            <div className="space-y-4">
              {kafkaUseCases.map((uc, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{uc.przypadek}</h3>
                  <p className="text-slate-600 mb-3">{uc.opis}</p>
                  <div className="bg-slate-900 rounded p-3">
                    <p className="text-xs text-slate-400 mb-1">Przykład:</p>
                    <p className="text-green-400 text-sm font-mono">{uc.przykład}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Porównanie */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kafka vs alternatywy</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Narzędzie</th>
                    <th className="p-3 text-left">Przepustowość</th>
                    <th className="p-3 text-left">Retention</th>
                    <th className="p-3 text-left">Replay</th>
                    <th className="p-3 text-left">Latencja</th>
                    <th className="p-3 text-left">Złożoność</th>
                  </tr>
                </thead>
                <tbody>
                  {kafkaVsAlternatives.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-bold text-orange-600">{row.narzędzie}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.przepustowość}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.retention}</td>
                      <td className="p-3 text-sm">
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${row.replay === "Tak" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"}`}>{row.replay}</span>
                      </td>
                      <td className="p-3 text-slate-600 text-sm">{row.latencja}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.kompleksowość}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Apache Kafka</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="kafka-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
