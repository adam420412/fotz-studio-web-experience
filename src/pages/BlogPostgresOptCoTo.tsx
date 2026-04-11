import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Jak optymalizować zapytania w PostgreSQL — EXPLAIN ANALYZE i query planner?",
    answer: "EXPLAIN ANALYZE: narzędzie do analizy planu wykonania zapytania. EXPLAIN — pokazuje plan bez wykonania. EXPLAIN ANALYZE — wykonuje i pokazuje rzeczywisty czas. EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT) SELECT ... — pełna analiza z informacją o buffer cache. Kluczowe węzły planu: Seq Scan — skanowanie całej tabeli (pełny scan, brak indeksu lub mały filtr). Index Scan — użycie indeksu do znalezienia wierszy. Index Only Scan — wszystkie dane z indeksu (najszybszy). Bitmap Index Scan — efektywny dla wielu wierszy z indeksu. Hash Join — łączenie przez hash table (duże zestawy). Nested Loop — zagnieżdżona pętla (małe zestawy, indeks na inner). Merge Join — sortowanie i scalanie. Koszty: first_value (koszt startu) .. second_value (koszt totalu). Niższy = lepszy. Aktuals: rzeczywisty czas (ms). actual rows vs estimated rows — duża różnica = nieaktualne statystyki. VACUUM ANALYZE: aktualizuje statystyki dla query plannera. Automatyczny autovacuum (domyślnie włączony). pg_stat_statements: rozszerzenie zbierające statystyki per zapytanie. Najdroższe zapytania: SELECT * FROM pg_stat_statements ORDER BY total_time DESC LIMIT 20. pgBadger: analiza logów PostgreSQL. Slow query log (log_min_duration_statement = 1000ms). Raporty top queries. auto_explain: automatycznie loguj EXPLAIN dla wolnych zapytań.",
  },
  {
    question: "PostgreSQL indeksy — B-tree, GIN, GiST, BRIN, partial, covering?",
    answer: "B-tree (domyślny): idealny dla equality (=) i range queries (<, >, BETWEEN). Operatory: =, <, >, <=, >=, BETWEEN, LIKE 'prefix%' (tylko prefix!). Composite index: INDEX ON orders(user_id, created_at) — kolejność pól ma znaczenie. Zapytanie WHERE user_id = X AND created_at > Y — użyje indeksu. WHERE created_at > Y — nie użyje (user_id musi być pierwsze lub indeks na created_at). Hash Index: tylko equality (=). Szybszy niż B-tree dla equality. Nie wspiera range. GIN (Generalized Inverted Index): dla typów złożonych. Full-text search (tsvector). JSONB (zawieranie '@>', klucze '?'). Arrays. GiST (Generalized Search Tree): geometric types (PostGIS). Full-text search (alternatywa do GIN). Exclusion constraints. BRIN (Block Range Index): bardzo małe (kilka KB). Dla tabel z naturalnym porządkiem (timestamp, auto-increment ID). Nie dla random access. Partial Index: CREATE INDEX ON orders(user_id) WHERE status = 'pending'. Indeks tylko dla aktywnych zamówień. Mniejszy, szybszy. Covering Index (INCLUDE): CREATE INDEX ON orders(user_id) INCLUDE (total_amount). Index Only Scan możliwy dla total_amount bez heap access. Concurrent Index: CREATE INDEX CONCURRENTLY — bez blokowania tabeli. Dłużej buduje ale nie blokuje. Expression Index: CREATE INDEX ON users(LOWER(email)) — dla case-insensitive search. Monitoring indeksów: pg_stat_user_indexes — użycie indeksów. Wykryj nieużywane indeksy.",
  },
  {
    question: "PostgreSQL partitioning — jak podzielić dużą tabelę?",
    answer: "Partitioning: podział dużej tabeli na mniejsze fizyczne części (partycje) z zachowaniem jednego logicznego interfejsu. Typy partycjonowania: RANGE Partitioning: CREATE TABLE orders (id, created_at, ...) PARTITION BY RANGE (created_at). Partycja per miesiąc lub rok. Stara partycja może być przenoszona do cold storage. HASH Partitioning: CREATE TABLE users PARTITION BY HASH (user_id). Równomierny podział danych między N partycji. Dobre dla równomiernego rozkładu. LIST Partitioning: CREATE TABLE events PARTITION BY LIST (region). Każda partycja = lista wartości (EU, US, APAC). Zalety partitioning: query pruning — PostgreSQL skanuje tylko partycje które mogą zawierać wyniki. Szybsze DROP TABLE dla starych danych (zamiast DELETE). Parallel query per partycja. Zarządzanie archiwizacją. Wady: joins między partycjonowanymi tabelami mogą być wolne. Złożoność administracyjna. Constraint exclusion: planista wyklucza partycje na podstawie WHERE clause. partition_pruning = on (domyślnie). pg_partman: rozszerzenie do automatycznego zarządzania partycjami. Automatyczne tworzenie nowych partycji. Automatyczne usuwanie starych. Tablespace per partycja: stare partycje na tańszym storage (HDD). Nowe na SSD. Partition pruning sprawdzenie: EXPLAIN pokazuje które partycje są skanowane.",
  },
  {
    question: "Connection pooling — PgBouncer, pgpool-II i connection limits?",
    answer: "Problem bez connection pooling: każde połączenie do PostgreSQL = osobny proces (fork). 1000 jednoczesnych połączeń = 1000 procesów. Duże zużycie RAM (~5-10MB per połączenie). Limit max_connections domyślnie 100. PgBouncer: lekki connection pooler. Tryby: Session mode — jedno połączenie per klient session (jak bez pooler, ale z recyclingiem). Transaction mode — połączenie przydzielane na czas transakcji. Statement mode — połączenie przydzielane na jedno statement. Transaction mode: najlepszy dla bezstanowych aplikacji. Nie działa z: SET statements (per-session). Named prepared statements (z workaroundem pgbouncer_prepared_statements). LISTEN/NOTIFY. Architektura: Aplikacja -> PgBouncer (lokalnie lub centralnie) -> PostgreSQL. PgBouncer maintains pool of X connections do PostgreSQL. Setki klientów na X połączeń. pgpool-II: więcej funkcji: load balancing read między replikami. Connection pooling. Query caching (rzadko używane). Replication. Cięższy niż PgBouncer. Supabase Pooler (Supavisor): nowoczesny pooler napisany w Elixir. Multi-tenant. Connection limits PostgreSQL: max_connections — limit połączeń. superuser_reserved_connections — dla adminów. Zalecenia: max_connections = (RAM_GB * 100) / 10 (zgrubnie). Z PgBouncer: PgBouncer pool = 20-30 połączeń do PostgreSQL. Aplikacja -> 1000 połączeń -> PgBouncer -> 25 połączeń -> PostgreSQL.",
  },
  {
    question: "PostgreSQL replication i high availability — streaming replication, Patroni?",
    answer: "Streaming Replication (WAL): PostgreSQL wysyła WAL (Write-Ahead Log) do repliki w czasie rzeczywistym. Synchronous replication: primary czeka na ACK od repliki przed COMMIT. Gwarancja zero data loss. Wada: wyższa latencja write. Asynchronous replication: primary nie czeka. Niższa latencja. Ryzyko: kilka sekund data loss przy failover. Replica lag: monitoring replication lag (SELECT pg_replication_lag()). Alert gdy lag > threshold. Czytanie z repliki: aplikacja może wysyłać READ do repliki. Redukuje load na primary. PgBouncer lub HAProxy do routing read/write. Patroni: high availability framework dla PostgreSQL. Zarządza failover automatycznie. Używa DCS (Distributed Configuration Store): etcd, Consul, ZooKeeper. Primary election: Patroni wybiera nową primary po awarii. Automatyczny failover w 30-60 sekund. pg_auto_failover (Citus): prostszy niż Patroni. Citus: extension dla distributed PostgreSQL. Sharding. Równoległe zapytania. Timescaledb: PostgreSQL extension dla time-series. Automatyczne partitioning po czasie. Compression. Continuous aggregates. pg_logical: logical replication (selektywna replikacja tabel). Pglogical dla cross-version replication. Read replicas w cloud: AWS RDS Read Replica. Supabase replicas. Neon (serverless PostgreSQL) — automatic branching.",
  },
];

const optimizationTechniques = [
  { technika: "EXPLAIN ANALYZE", obszar: "Query Analysis", kiedy: "Zawsze przy slow query", narzedzie: "pg_stat_statements, auto_explain", efekt: "Identyfikacja bottleneck" },
  { technika: "Index Tuning", obszar: "Read Performance", kiedy: "Seq Scan na dużych tabelach", narzedzie: "B-tree, GIN, GiST, Partial, Covering", efekt: "10-1000x szybsze czytanie" },
  { technika: "Partitioning", obszar: "Skalowanie dużych tabel", kiedy: "Tabele > kilkaset GB", narzedzie: "RANGE/HASH/LIST + pg_partman", efekt: "Query pruning, szybki DROP" },
  { technika: "Connection Pooling", obszar: "Concurrency", kiedy: "Wiele połączeń aplikacji", narzedzie: "PgBouncer (transaction mode)", efekt: "Mniej pamięci, wyższy throughput" },
  { technika: "Vacuum / Autovacuum", obszar: "Bloat i Freeze", kiedy: "Duże operacje UPDATE/DELETE", narzedzie: "VACUUM ANALYZE, autovacuum tuning", efekt: "Brak bloat, aktualne statystyki" },
  { technika: "Streaming Replication", obszar: "High Availability", kiedy: "Produkcja (obowiązkowe)", narzedzie: "Patroni, pg_auto_failover", efekt: "Zero downtime failover" },
];

export default function BlogPostgresOptCoTo() {
  return (
    <Layout>
      <SEOHead
        title="PostgreSQL optymalizacja — EXPLAIN ANALYZE, indeksy, partitioning, PgBouncer, Patroni | Fotz.pl"
        description="PostgreSQL optimization: EXPLAIN ANALYZE, B-tree/GIN/GiST indeksy, RANGE partitioning, PgBouncer connection pooling, streaming replication i Patroni HA."
        canonicalUrl="https://fotz.pl/blog/postgresql-optymalizacja-explain-analyze-indeksy-partitioning-pgbouncer-patroni"
      />
      <ArticleSchema
        title="PostgreSQL optymalizacja — EXPLAIN ANALYZE, indeksy, partitioning, PgBouncer, Patroni?"
        description="PostgreSQL optimization: 6 technik (EXPLAIN ANALYZE/Indexing/Partitioning/Connection Pooling/Vacuum/Replication), PgBouncer, Patroni HA."
        url="https://fotz.pl/blog/postgresql-optymalizacja-explain-analyze-indeksy-partitioning-pgbouncer-patroni"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "PostgreSQL optymalizacja", url: "https://fotz.pl/blog/postgresql-optymalizacja-explain-analyze-indeksy-partitioning-pgbouncer-patroni" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "PostgreSQL optymalizacja", href: "/blog/postgresql-optymalizacja-explain-analyze-indeksy-partitioning-pgbouncer-patroni" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Database / Performance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PostgreSQL optymalizacja
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              EXPLAIN ANALYZE, B-tree i GIN indeksy, RANGE partitioning,
              PgBouncer connection pooling i Patroni HA — jak wycisnąć
              maksimum z PostgreSQL w produkcji.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Query analysis", value: "EXPLAIN ANALYZE" },
                { label: "Pokrywający indeks", value: "Index Only Scan" },
                { label: "Connection pooler", value: "PgBouncer" },
                { label: "Auto failover", value: "Patroni + etcd" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-blue-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Techniki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych technik optymalizacji</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od analizy zapytań przez tunowanie indeksów po replikację i wysoką dostępność.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Technika</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Obszar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy stosować</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzia</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Efekt</th>
                </tr>
              </thead>
              <tbody>
                {optimizationTechniques.map((t, i) => (
                  <tr key={t.technika} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.technika}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.obszar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.kiedy}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.efekt}</td>
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
