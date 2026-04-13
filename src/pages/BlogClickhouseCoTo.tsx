import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest ClickHouse i do czego służy?",
    answer: "ClickHouse: open-source kolumnowy database management system (OLAP). Yandex, 2016. Przeznaczony do real-time analytics na ogromnych danych. Główne cechy: Columnar storage — dane przechowywane kolumna po kolumnie. Przy zapytaniu SELECT sum(amount) FROM orders — czyta tylko kolumnę amount, nie całe wiersze. 10-100x mniejszy I/O dla analytical queries. Vectorized execution — przetwarza dane w blokach (SIMD). Data compression — LZ4/ZSTD compression per kolumna. Dane tej samej kolumny są podobne -> wysoka kompresja (10-20x). MergeTree engine: podstawowy silnik ClickHouse. Dane przechowywane posortowane (ORDER BY). Merge w tle (jak LSM tree). Primary key (sparse index) — co N wierszy entry. Granule size (8192 wierszy) — minimalna jednostka read. Use cases: Log Analytics — Cloudflare przetwarza 6M req/s do ClickHouse. Real-time dashboards — Grafana datasource. Business Intelligence (BI). Event analytics (Posthog, Amplitude alternatywa). Time-series analytics. Ad-click analysis (Yandex pierwotne zastosowanie). E-commerce analytics. Performance: 1 mld wierszy w sekundy. Agregacje na miliardach wierszy w milliseconds. Benchmarki: ClickHouse szybszy niż BigQuery, Redshift i Snowflake dla OLAP queries.",
  },
  {
    question: "ClickHouse vs PostgreSQL vs BigQuery — kiedy co wybrać?",
    answer: "PostgreSQL (OLTP): Row-based storage. Dobry dla transakcyjnych operacji (INSERT/UPDATE/DELETE). Point lookups (WHERE id = X). ACID transakcje. Joins (małe-średnie). Słaby dla analytical aggregations na miliardach wierszy. ClickHouse (OLAP): Column-based storage. Idealny dla analytical queries. COUNT, SUM, AVG, GROUP BY na miliardach wierszy. Niedobry dla transakcji i point lookups. Brak UPDATE (append-only + mutations). Joins działają ale nie są mocną stroną. BigQuery (Google): serverless OLAP. Pay per query (per TB processed). Standard SQL. Dobrze integruje się z ekosystemem GCP. Drogi przy dużym query volume. Snowflake: cloud data warehouse. Multi-cloud. Data sharing. Dobra separacja compute i storage. Droższe niż ClickHouse self-hosted. Redshift (AWS): managed data warehouse. Dobry dla AWS-native. PostgreSQL-compatible SQL. Apache Druid: real-time OLAP. Streaming ingestion (Kafka). Sub-second queries. Bardziej złożony niż ClickHouse. Apache Pinot (LinkedIn): real-time OLAP, podobny do Druid. StarRocks (open-source): ClickHouse-like, dobry dla joins. DuckDB: embedded analytical database. Świetny dla local analytics. Pandas replacement. Kiedy ClickHouse: self-hosted, cost-effective OLAP. High-velocity data (logs, events, metrics). Real-time analytics dashboard.",
  },
  {
    question: "ClickHouse MergeTree family — ReplicatedMergeTree, AggregatingMergeTree?",
    answer: "MergeTree: podstawowy silnik. Dane posortowane po ORDER BY. Partitioning po PARTITION BY (np. miesiąc). Primary key = sparse index. Data TTL (automatyczne usuwanie starych danych). ReplicatedMergeTree: replikacja danych między węzłami. Używa ZooKeeper/ClickHouse Keeper do koordynacji. Dwa serwery z tymi samymi danymi (ha). ReplicatedMergeTree('/clickhouse/tables/{shard}/{table}', '{replica}'). SummingMergeTree: automatycznie sumuje wartości przy merge. Dla pre-aggregated data. Dobry dla metryki/counters. AggregatingMergeTree: przechowuje stany agregacji (częściowe wyniki). Materialized views z AggregatingMergeTree. Szybkie pre-aggregations bez dodatkowych zapytań. CollapsingMergeTree: do aktualizacji danych. Sign column (+1 = insert, -1 = delete). Usuwa pary podczas merge. ReplacingMergeTree: ostatni wiersz per PK jest zachowany po merge. Soft deletes/updates. Materialized Views w ClickHouse: automatycznie aktualizowana przy INSERT. Transformacja danych przy ingestion. Pre-aggregation — count/sum/avg materialized. MV + AggregatingMergeTree + AggregateFunction(sum, Float64). Zapytanie na MV jest szybsze niż na raw data. Projection: alternatywa dla Materialized View. Automatycznie utrzymywana. Dobra dla pre-sorted data w innym porządku.",
  },
  {
    question: "Jak ładować dane do ClickHouse — batch vs streaming?",
    answer: "Batch Insert: ClickHouse jest zoptymalizowany dla dużych insertów. Optymalny batch size: 10K-1M wierszy. Zbyt małe inserty: overhead per-part. Wiele małych insertów -> too many parts error. INSERT INTO table VALUES (...), (...), (...) — jeden duży batch. OLTP do ClickHouse: nie insertuj row-by-row. Buffer Engine: buffering insertów w pamięci. Po N wierszach lub M sekundach -> flush do main table. Ochrona przed too many parts. Kafka Integration (native): CREATE TABLE kafka_queue ENGINE = Kafka() SETTINGS kafka_broker_list = '...', kafka_topic_list = '...', kafka_group_name = '...', kafka_format = 'JSONEachRow'. Materialized View: Kafka engine -> MV -> main table. Automatyczny streaming ingestion. ClickHouse + Kafka: popularna kombinacja. Debezium -> Kafka -> ClickHouse. HTTP interface: POST /query z JSONEachRow lub CSV. Wiele SDK (Python, Go, Java, Node). clickhouse-client (CLI). Native protocol: bardziej efektywny niż HTTP. Compression. Asynchronous inserts (ClickHouse 22.x+): server buforuje małe inserty. Dobry dla high-frequency small inserts (IoT). async_insert=1, wait_for_async_insert=0. File import: clickhouse-client --query 'INSERT INTO ... FORMAT CSV' plik data.csv. HDFS, S3 integrations.",
  },
  {
    question: "ClickHouse w produkcji — sharding, replikacja, monitoring?",
    answer: "Architektura produkcyjna: Shard — poziomy podział danych. Replika — kopia sharrda (HA). Typowo: 2 repliki per shard. Distributed Engine: wirtualna tabela łącząca shardy. SELECT na Distributed -> wysyła do wszystkich shardów -> merge wyników. Sharding key: PARTITION BY lub shard_by w distributed table. Konfiguracja klastra: config.xml z cluster definition. Shard -> repliki -> host/port. ZooKeeper/ClickHouse Keeper: koordynacja replikacji. ClickHouse Keeper: wbudowany, zastępuje ZooKeeper. ClickHouse Cloud: managed ClickHouse. Serverless. Auto-scaling. Object storage (S3) backend. Altinity.Cloud: managed ClickHouse na AWS/GCP. Tinybird: ClickHouse-as-a-service z API layer. Monitoring: system.metrics — current metrics. system.asynchronous_metrics — background metrics. system.events — cumulative events. system.query_log — historia zapytań. Prometheus integration. Grafana ClickHouse datasource. Typowe problemy: too many parts — zbyt częste inserty. Rozwiązanie: batch inserts lub async_insert. Memory limit exceeded — zbyt duże zapytanie. Rozwiązanie: limit memory per query. Part pruning nie działa — WHERE nie na partition key. Posthog: open-source analytics platform. ClickHouse jako storage. Alternatywa Amplitude/Mixpanel dla product analytics.",
  },
];

const analyticsDbComparison = [
  { db: "ClickHouse", model: "Columnar OLAP", latencja: "Sub-second (miliardy wierszy)", hosting: "Self-hosted / Cloud", licencja: "Apache 2.0", kiedy: "Real-time analytics, logs, events" },
  { db: "BigQuery", model: "Serverless columnar", latencja: "Sekundy", hosting: "Google Cloud only", licencja: "Komercyjna (pay-per-TB)", kiedy: "GCP-native, ad-hoc analytics" },
  { db: "Snowflake", model: "Cloud data warehouse", latencja: "Sekundy", hosting: "Multi-cloud (SaaS)", licencja: "Komercyjna (compute+storage)", kiedy: "Data warehouse, data sharing" },
  { db: "DuckDB", model: "Embedded columnar", latencja: "Sekundy (lokalne pliki)", hosting: "Embedded (in-process)", licencja: "MIT", kiedy: "Local analytics, Pandas replacement" },
  { db: "Apache Druid", model: "Real-time OLAP", latencja: "Sub-second (streaming)", hosting: "Self-hosted / SaaS", licencja: "Apache 2.0", kiedy: "Streaming + analytics (Kafka-native)" },
  { db: "Amazon Redshift", model: "Cloud data warehouse", latencja: "Sekundy", hosting: "AWS only", licencja: "Komercyjna", kiedy: "AWS-native, PostgreSQL compat" },
];

export default function BlogClickhouseCoTo() {
  return (
    <Layout>
      <SEOHead
        title="ClickHouse | Fotz Studio"
        description="ClickHouse: kolumnowy OLAP database, MergeTree engines, Kafka streaming ingestion, sharding i replikacja, ClickHouse vs BigQuery vs Snowflake vs DuckDB."
        canonicalUrl="https://fotz.pl/blog/clickhouse-co-to-jest-olap-mergetree-kafka-ingestion-vs-bigquery-snowflake"

        keywords="ClickHouse co to jest, ClickHouse definicja, czym jest ClickHouse, ClickHouse przykłady, jak działa ClickHouse, ClickHouse znaczenie, ClickHouse przewodnik"

        canonical="https://fotz.pl/blog/clickhouse-co-to-jest-olap-mergetree-kafka-ingestion-vs-bigquery-snowflake"
      />
      <ArticleSchema
        title="ClickHouse — co to jest, OLAP, MergeTree, Kafka ingestion, vs BigQuery i Snowflake?"
        description="ClickHouse: 6 baz analitycznych (ClickHouse/BigQuery/Snowflake/DuckDB/Druid/Redshift), MergeTree engines, Kafka ingestion, sharding i produkcja."
        url="https://fotz.pl/blog/clickhouse-co-to-jest-olap-mergetree-kafka-ingestion-vs-bigquery-snowflake"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "ClickHouse", url: "https://fotz.pl/blog/clickhouse-co-to-jest-olap-mergetree-kafka-ingestion-vs-bigquery-snowflake" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-yellow-950 to-orange-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "ClickHouse", href: "/blog/clickhouse-co-to-jest-olap-mergetree-kafka-ingestion-vs-bigquery-snowflake" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-yellow-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Analytics / Database
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ClickHouse
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Open-source kolumnowy OLAP database — miliardy wierszy w milisekundy,
              MergeTree engines, Kafka streaming, sharding i produkcja.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Storage model", value: "Columnar" },
                { label: "Core engine", value: "MergeTree" },
                { label: "Streaming", value: "Kafka Native" },
                { label: "1 mld wierszy", value: "Sub-second" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-yellow-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 analitycznych baz danych</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              ClickHouse, BigQuery, Snowflake, DuckDB, Apache Druid i Redshift —
              każde rozwiązanie dla innego use case i budżetu.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Baza</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Model</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Latencja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Hosting</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Licencja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {analyticsDbComparison.map((d, i) => (
                  <tr key={d.db} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{d.db}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{d.model}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{d.latencja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{d.hosting}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{d.licencja}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{d.kiedy}</td>
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
