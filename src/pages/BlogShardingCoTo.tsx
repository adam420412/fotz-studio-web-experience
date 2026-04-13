import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Database Sharding i kiedy jest potrzebne?",
    answer: "Database Sharding to technika poziomego partycjonowania danych — podział jednej dużej bazy danych na wiele mniejszych, zwanych shardami (odłamkami). Każdy shard zawiera podzbiór danych i może być na osobnym serwerze. Sharding vs. Replication: Replication — te same dane na wielu serwerach. Cel: read scalability, availability. Sharding — różne dane na różnych serwerach. Cel: write scalability, pojemność. Kiedy potrzebujesz shardingu: tabela przekracza możliwości jednego serwera (100M+ rekordów, TB danych). Write throughput jest bottleneckiem (jeden master nie nadąża). Read repliki nie wystarczają — dane nie mieszczą się w RAM jednej maszyny. Alternatywy przed shardingiem (wypróbuj najpierw): Vertical scaling — silniejszy serwer (CPU, RAM, szybsze dyski). Read replicas — odciąż reads na repliki. Caching — Redis/Memcached dla hot data. Partycjonowanie — table partitioning (w jednej bazie, np. partycja per miesiąc). Archiwizacja — przenieś stare dane do cold storage. Sharding jest skomplikowany — dodaje złożoność operacyjną. Użyj go dopiero gdy alternatywy są niewystarczające. Przykłady firm które shardują: Discord (Cassandra sharding), Uber (PostgreSQL → Schemaless sharding), GitHub (MySQL sharding), Instagram (PostgreSQL + sharding).",
  },
  {
    question: "Strategie shardingu — jak podzielić dane między shardy?",
    answer: "Range-based Sharding: dane podzielone według zakresu wartości klucza. Shard A: ID 1-1,000,000, Shard B: ID 1,000,001-2,000,000. Zalety: proste zapytania range queries trafią do jednego shardu. Wady: hot spots — jeśli nowi użytkownicy mają wyższe ID, Shard B jest przeciążony. Hash-based Sharding: shard = hash(klucz) % liczba_shardów. Dane rozłożone losowo — brak hot spotów. Wada: range queries wymagają zapytania do wszystkich shardów. Consistent Hashing: zamiast % N używa okrąg hashów. Dodanie/usunięcie shardu przenosi minimalną ilość danych (tylko sąsiednie na okrągu). Używane przez Cassandra, DynamoDB, Redis Cluster. Directory-based Sharding: lookup table która mówi gdzie jest rekord. Bardzo elastyczne — możesz przenosić rekordy między shardami bez zmiany klucza. Wada: lookup table to single point of failure + hotspot. Geographic/Customer-based Sharding: dane podzielone per region (EU, US, APAC) — zgodność z GDPR. Lub per tenant w multi-tenant SaaS. Composite Sharding: kombinacja strategii. Np. najpierw per region, potem hash w regionie. Wybór klucza shardowania (shard key): kluczowa decyzja — trudno zmienić później. Powinien zapewnić równomierny rozkład. Unikaj kluczy które tworzą hot spots (timestamp dla inserts, sequential ID). Card high enough — wystarczająca liczba unikalnych wartości.",
  },
  {
    question: "Cross-shard queries i transakcje — jak radzić sobie z rozproszeniem?",
    answer: "Cross-shard queries: zapytania wymagające danych z wielu shardów są najpoważniejszym problemem shardingu. Scatter-Gather: wyślij zapytanie do wszystkich shardów → zbierz wyniki → merge. Wolne, ale sometimes konieczne. Problemy: ORDER BY + LIMIT — każdy shard zwraca top N, trzeba re-sort wszystkich wyników. COUNT, SUM, AVG — partial aggregations z każdego shardu, połącz. JOIN między shardami — prawie niemożliwy efektywnie (denormalizacja + application-level join). Strategie unikania cross-shard: Denormalizacja — trzymaj powiązane dane razem (np. user + user_orders na jednym shard per user_id). Co-location — klucz shardowania wybrany tak żeby powiązane dane trafiły do jednego shardu. Duplicate data — kopiuj dane które często są potrzebne cross-shard (np. user profile na wszystkich shardach). Materialized views / pre-aggregations — pre-compute cross-shard aggregates offline. Distributed transactions: ACID przez wiele shardów jest trudne. 2PC (Two-Phase Commit): koordynator pyta wszystkie shardy czy mogą commit, potem commit lub rollback. Problem: wolne, coordinator failure. Saga pattern: seria lokalnych transakcji z compensating transactions jeśli coś się nie powiedzie. Lepsze dla mikroserwisów z event-driven. Eventual consistency: akceptuj że dane mogą być chwilowo niespójne między shardami. BASE (Basically Available, Soft state, Eventually consistent) zamiast ACID.",
  },
  {
    question: "Vitess i inne narzędzia do shardingu — jak automatyzować zarządzanie?",
    answer: "Vitess: system zarządzania MySQL/MariaDB sharding — używany przez YouTube, Slack, HubSpot. Abstrakcja shardingu od aplikacji — aplikacja widzi jeden MySQL. VTGate — proxy który routuje zapytania do odpowiednich shardów. VTTablet — agent na każdym MySQL. Automatyczny resharding — reorganizacja danych bez downtime. Query routing, connection pooling, online schema migrations. Kubernetes-native (Vitess Operator). CockroachDB: distributed SQL — sharding automatyczny i transparentny dla aplikacji. ACID transactions globally. Geo-distribution natively. PostgreSQL API compatible. Spanner-like architektura (clock synchronization). YugabyteDB: distributed PostgreSQL — auto-sharding, high availability, ACID. Citus (PostgreSQL Extension): horizontal sharding dla PostgreSQL. Shard tables jako distributed tables lub reference tables. Coordinator node routuje do worker nodes. Używany przez Azure Cosmos DB for PostgreSQL. PlanetScale (MySQL): managed MySQL sharding oparte na Vitess. Database branching (jak Git dla bazy). Non-blocking schema changes. Neon: serverless PostgreSQL — auto-scaling storage, nie klasyczny sharding ale skalowanie pionowe z compute/storage separation. Amazon Aurora: shared storage, read replicas — nie sharding ale skaluje do 128TB. Resharding: najtrudniejsza operacja — przenoszenie danych między shardami. Online resharding (bez downtime): Vitess, CockroachDB robią to automatycznie. Ręczne: double-write pattern → copy → cutover.",
  },
  {
    question: "Sharding w NoSQL — MongoDB, Cassandra, DynamoDB?",
    answer: "MongoDB Sharding: wbudowane sharding — mongos (router), config servers, shard servers. Shard key wybrany przy tworzeniu collection. Chunk-based: dane podzielone na chunks (domyślnie 128MB). Balancer automatycznie przenosi chunks między shardami. Compound shard key (np. user_id + timestamp). Hashed shard key — automatyczne równe rozłożenie. Wyzwania MongoDB: targeted queries (z shard key) vs. scatter-gather (bez). Jumbo chunks — jeśli shard key ma niską kardynalność. Cassandra: sharding natywny przez consistent hashing (Vnode). Każdy node odpowiada za zakres tokenów na okręgu. Replication factor — każda partycja na N node'ach. Partition key = klucz shardowania w Cassandra. Clustering key — sortowanie wewnątrz partycji. Wyzwania: wide partition problem — jedna partycja za duża jeśli zły partition key. Allow filtering (non-partition queries) — Cassandra Gather. DynamoDB: auto-sharding niewidoczne dla użytkownika. Partition key = shard key. Hot partition — jeden klucz zbyt często używany. Write sharding workaround: dodaj suffix (1-N) do partition key. DAX (DynamoDB Accelerator) — cache dla hot reads. Redis Cluster: sharding przez hash slots (16384). Każdy master node odpowiada za zakres hash slots. Automatyczny failover (replica promotion). MOVED/ASK redirects gdy klient trafia do złego node.",
  },
];

const shardingStrategies = [
  { strategia: "Hash-based Sharding", opis: "shard = hash(key) % N. Równomierny rozkład, brak hot spots. Range queries wymagają scatter-gather.", kiedy: "Gdy chcesz równomierny write rozkład, brak range query potrzeb" },
  { strategia: "Range-based Sharding", opis: "Dane wg zakresu klucza. Range queries efektywne. Hot spots możliwe dla monotonicznie rosnących kluczy.", kiedy: "Time-series, range queries krytyczne" },
  { strategia: "Consistent Hashing", opis: "Okrąg hashów. Dodanie/usunięcie sharda przenosi minimalnie danych. Cassandra, DynamoDB, Redis Cluster.", kiedy: "Dynamiczne dodawanie/usuwanie shardów, cloud-native" },
  { strategia: "Directory-based", opis: "Lookup table wskazuje na shard. Maksymalna elastyczność, możliwość przenoszenia rekordów. Lookup table = SPOF.", kiedy: "Multi-tenant SaaS, gdy chcesz przenosić tenant między shardami" },
  { strategia: "Geographic Sharding", opis: "Dane podzielone per region (EU, US, APAC). Compliance (GDPR), niższe latency lokalnie.", kiedy: "Regulacje data residency, globalne aplikacje" },
  { strategia: "Co-location (Customer Sharding)", opis: "Wszystkie dane jednego klienta (tenant) na jednym shard. Eliminuje cross-shard queries w kontekście jednego tenanta.", kiedy: "Multi-tenant B2B SaaS" },
];

const shardingTools = [
  { narzedzie: "Vitess", baza: "MySQL", opis: "Automatyczny sharding, VTGate proxy, online resharding, K8s native", uzywaja: "YouTube, Slack, HubSpot" },
  { narzedzie: "CockroachDB", baza: "Distributed SQL", opis: "Auto-sharding transparent dla aplikacji, ACID global, geo-distribution", uzywaja: "Cockroach Labs, enterprise" },
  { narzedzie: "Citus", baza: "PostgreSQL", opis: "Extension do PostgreSQL — distributed tables, shard routing, Azure managed", uzywaja: "Azure, Postgres ekosystem" },
  { narzedzie: "PlanetScale", baza: "MySQL (Vitess)", opis: "Managed MySQL sharding + database branching + non-blocking schema changes", uzywaja: "Startups, developer-friendly" },
  { narzedzie: "Cassandra", baza: "NoSQL", opis: "Natywne consistent hashing sharding, tunable consistency, write-optimized", uzywaja: "Netflix, Instagram, Discord" },
];

export default function BlogShardingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Database Sharding | Fotz Studio"
        description="Database Sharding: strategie (hash, range, consistent hashing), cross-shard queries, Vitess, CockroachDB, Citus, Cassandra — kiedy i jak skalować bazy poziomo."
        canonicalUrl="https://fotz.pl/blog/database-sharding-co-to-jest-strategie-vitess-cassandra"

        keywords="Database Sharding co to jest, Database Sharding jak działa, Database Sharding tutorial, Database Sharding przykład, czym jest Database Sharding, Database Sharding dokumentacja, Database Sharding przewodnik"

        canonical="https://fotz.pl/blog/database-sharding-co-to-jest-strategie-vitess-cassandra"
      />
      <ArticleSchema
        title="Database Sharding — co to jest, strategie, Vitess, Cassandra, CockroachDB?"
        description="Sharding: 6 strategii, 5 narzędzi (Vitess/CockroachDB/Citus/PlanetScale/Cassandra), cross-shard queries, consistent hashing i NoSQL sharding."
        url="https://fotz.pl/blog/database-sharding-co-to-jest-strategie-vitess-cassandra"
        datePublished="2024-04-10"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Database Sharding", url: "https://fotz.pl/blog/database-sharding-co-to-jest-strategie-vitess-cassandra" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Database Sharding", href: "/blog/database-sharding-co-to-jest-strategie-vitess-cassandra" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Bazy danych / Skalowalność
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Database Sharding
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Gdy jeden serwer bazodanowy nie wystarczy. Sharding dzieli dane
              między wiele maszyn — Vitess, CockroachDB i Cassandra robią to
              automatycznie.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "MySQL sharding", value: "Vitess" },
                { label: "Auto distributed SQL", value: "CockroachDB" },
                { label: "NoSQL sharding", value: "Cassandra" },
                { label: "Najlepsza strategia", value: "Consistent Hashing" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 strategii shardingu — jak podzielić dane?</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wybór strategii shardingu to najważniejsza decyzja — zła
              strategia prowadzi do hot spotów lub niemożliwych cross-shard queries.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {shardingStrategies.map((s) => (
              <FadeInView key={s.strategia}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{s.strategia}</h3>
                  <p className="text-gray-700 text-sm mb-2">{s.opis}</p>
                  <p className="text-xs text-emerald-700 font-medium">Kiedy: {s.kiedy}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Narzędzia do shardingu — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nowoczesne narzędzia automatyzują sharding — od Vitess (MySQL)
              przez CockroachDB (distributed SQL) po Cassandra (NoSQL).
            </p>
          </FadeInView>
          <div className="space-y-3">
            {shardingTools.map((t) => (
              <FadeInView key={t.narzedzie}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-4 gap-4 items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{t.narzedzie}</h3>
                      <span className="text-xs text-emerald-700 font-medium">{t.baza}</span>
                    </div>
                    <p className="text-gray-600 text-sm md:col-span-2">{t.opis}</p>
                    <p className="text-gray-400 text-xs">Używają: {t.uzywaja}</p>
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

      <ContactSection />
    </Layout>
  );
}
