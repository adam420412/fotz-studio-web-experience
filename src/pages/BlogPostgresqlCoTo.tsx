import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest PostgreSQL?",
    answer:
      "PostgreSQL (Postgres) to zaawansowana, open-source'owa relacyjna baza danych obiektowo-relacyjna (ORDBMS). Rozwijana od 1986 roku na Uniwersytecie Berkeley jako POSTGRES, od 1996 roku jako PostgreSQL. Znana z niezawodności, rozszerzalności i zgodności ze standardami SQL. Obsługuje zaawansowane funkcje: JSONB (dokumenty), pełnotekstowe wyszukiwanie (FTS), tablice, typy geometryczne, dziedziczenie tabel, procedury składowane (PL/pgSQL, Python, JavaScript), widoki zmaterializowane i rozszerzenia (PostGIS, TimescaleDB, pgvector).",
  },
  {
    question: "Czym PostgreSQL różni się od MySQL?",
    answer:
      "PostgreSQL vs MySQL: PostgreSQL jest bardziej zgodny ze standardem SQL, obsługuje bardziej zaawansowane typy danych (JSONB, arrays, range types, custom types), lepsze wsparcie dla concurrent write (MVCC), zaawansowane indeksy (GiST, GIN, BRIN, partial, expression indexes). MySQL jest szybszy przy prostych odczytach (MyISAM), łatwiej skonfigurować, szeroko używany w LAMP stack (WordPress, Drupal). PostgreSQL preferowany w aplikacjach wymagających złożonych zapytań, transakcji i zaawansowanych typów danych.",
  },
  {
    question: "Co to jest MVCC w PostgreSQL?",
    answer:
      "MVCC (Multi-Version Concurrency Control) to mechanizm kontroli współbieżności PostgreSQL. Zamiast blokować wiersze podczas odczytu — każda transakcja widzi 'snapshot' danych z momentu jej rozpoczęcia. Operacje SELECT nie blokują UPDATE/DELETE i odwrotnie — readers don't block writers. MVCC zapewnia izolację transakcji (domyślnie Read Committed, opcjonalnie Repeatable Read lub Serializable) bez kosztownych blokad. Skutkiem ubocznym są 'dead tuples' — stare wersje wierszy usuwane przez VACUUM.",
  },
  {
    question: "Jak PostgreSQL obsługuje JSON?",
    answer:
      "PostgreSQL oferuje dwa typy JSON: JSON (przechowuje jako tekst, waliduje składnię) i JSONB (Binary JSON — przechowuje binarnie, indeksowalny, szybsze operacje). JSONB obsługuje operatory: -> (pobierz klucz), ->> (pobierz wartość jako tekst), @> (zawiera), <@ (jest zawarty), ? (klucz istnieje). Indeksy GIN na JSONB umożliwiają efektywne wyszukiwanie po zawartości dokumentów. PostgreSQL z JSONB łączy elastyczność NoSQL z niezawodnością ACID transakcji SQL.",
  },
  {
    question: "Jakie są kluczowe optymalizacje PostgreSQL?",
    answer:
      "Optymalizacja PostgreSQL: indeksy (B-tree domyślnie, GIN dla FTS/JSONB, GiST dla geometrii, BRIN dla dużych tabel z sekwencyjnymi danymi, partial indexes dla podzbioru wierszy), EXPLAIN ANALYZE do analizy planów zapytań, connection pooling (PgBouncer — 1000+ połączeń do 20 pooled), vacuuming (autovacuum usuwa dead tuples), partitioning (Range, List, Hash dla bardzo dużych tabel), widoki zmaterializowane dla ciężkich zapytań read-heavy, read replicas dla odczytu.",
  },
];

const postgresDataTypes = [
  { kategoria: "Numeryczne", typy: ["INTEGER, BIGINT, SMALLINT", "DECIMAL/NUMERIC (precyzja)", "REAL, DOUBLE PRECISION", "SERIAL, BIGSERIAL (auto-increment)"] },
  { kategoria: "Tekstowe", typy: ["VARCHAR(n) — limit znaków", "TEXT — nieograniczona długość", "CHAR(n) — fixed-length", "CITEXT — case-insensitive text"] },
  { kategoria: "Data i czas", typy: ["DATE — tylko data", "TIME — czas (z/bez timezone)", "TIMESTAMP — data + czas", "INTERVAL — przedział czasu"] },
  { kategoria: "JSON", typy: ["JSON — walidacja składni, wolny", "JSONB — binarny, indeksowalny, szybki", "jsonpath — XPath dla JSON (pg12+)"] },
  { kategoria: "Specjalne", typy: ["UUID — uniwersalne ID", "ARRAY — tablice dowolnych typów", "ENUM — lista wartości", "INET/CIDR — adresy IP"] },
  { kategoria: "Geometryczne / GIS", typy: ["POINT, LINE, POLYGON", "geometry, geography (PostGIS)", "tsquery/tsvector — full-text search"] },
];

const sqlExamples = [
  {
    tytuł: "Zaawansowane zapytanie z CTE i Window Functions",
    kod: `-- CTE (Common Table Expression) + window function
WITH ranked_orders AS (
  SELECT
    customer_id,
    order_date,
    amount,
    ROW_NUMBER() OVER (
      PARTITION BY customer_id
      ORDER BY order_date DESC
    ) as rn,
    SUM(amount) OVER (
      PARTITION BY customer_id
    ) as total_spent
  FROM orders
  WHERE status = 'completed'
)
SELECT customer_id, order_date, amount, total_spent
FROM ranked_orders
WHERE rn = 1  -- tylko ostatnie zamówienie każdego klienta
ORDER BY total_spent DESC
LIMIT 10;`,
  },
  {
    tytuł: "Indeks i EXPLAIN ANALYZE",
    kod: `-- Utwórz indeks częściowy (partial index)
CREATE INDEX idx_orders_pending
ON orders (created_at DESC)
WHERE status = 'pending';  -- tylko dla pending zamówień

-- Sprawdź plan zapytania
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT * FROM orders
WHERE status = 'pending'
  AND created_at > NOW() - INTERVAL '7 days';

-- Indeks GIN dla JSONB
CREATE INDEX idx_products_attrs
ON products USING GIN (attributes);

-- Zapytanie po JSONB
SELECT * FROM products
WHERE attributes @> '{"color": "red", "size": "XL"}'::jsonb;`,
  },
  {
    tytuł: "Partitioning (dla dużych tabel)",
    kod: `-- Tabela partycjonowana po dacie
CREATE TABLE events (
  id BIGSERIAL,
  user_id INTEGER,
  event_type TEXT,
  created_at TIMESTAMP DEFAULT NOW()
) PARTITION BY RANGE (created_at);

-- Utwórz partycje per miesiąc
CREATE TABLE events_2024_01
  PARTITION OF events
  FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

CREATE TABLE events_2024_02
  PARTITION OF events
  FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');`,
  },
];

const postgresExtensions = [
  { rozszerzenie: "PostGIS", opis: "Wsparcie dla danych geospatialnych — geometry, geography, spatial queries. Standard dla GIS w PostgreSQL." },
  { rozszerzenie: "pgvector", opis: "Wektory i similarity search dla AI/ML — przechowuj embeddings, szukaj najbliższych sąsiadów (ANN)." },
  { rozszerzenie: "TimescaleDB", opis: "Optymalizacja dla time-series data — automatyczne chunking, compression, continuous aggregates." },
  { rozszerzenie: "pg_trgm", opis: "Trigram similarity dla fuzzy string matching i full-text search z LIKE/ILIKE na indeksach GIN/GiST." },
  { rozszerzenie: "uuid-ossp", opis: "Generowanie UUID v1/v4. Alternatywa: gen_random_uuid() wbudowana od PostgreSQL 13." },
  { rozszerzenie: "pg_cron", opis: "Cron-like scheduler wewnątrz PostgreSQL — uruchamiaj SQL co godzinę, dzień, tydzień." },
];

export default function BlogPostgresqlCoTo() {
  return (
    <Layout>
      <SEOHead
        title="PostgreSQL — co to jest? SQL, indeksy, JSONB i optymalizacja"
        description="PostgreSQL — definicja, typy danych (JSONB, arrays, UUID), zaawansowane SQL (CTE, window functions), indeksy, partycjonowanie i rozszerzenia. Kompletny…"
        canonicalUrl="https://fotz.pl/blog/postgresql-co-to-jest"

        keywords="PostgreSQL co to jest, PostgreSQL jak działa, PostgreSQL tutorial, PostgreSQL przykład, czym jest PostgreSQL, PostgreSQL dokumentacja, PostgreSQL przewodnik"

        canonical="https://fotz.pl/blog/postgresql-co-to-jest"
      />
      <ArticleSchema
        title="PostgreSQL — co to jest i jak działa? Kompletny przewodnik"
        description="Kompletny przewodnik po PostgreSQL: typy danych, zaawansowane SQL, indeksy, MVCC i rozszerzenia."
        url="https://fotz.pl/blog/postgresql-co-to-jest"
        datePublished="2024-01-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "PostgreSQL", url: "https://fotz.pl/blog/postgresql-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "PostgreSQL", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            PostgreSQL — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            PostgreSQL to najbardziej zaawansowana open-source relacyjna baza danych.
            Poznaj JSONB, zaawansowany SQL, indeksy, MVCC i rozszerzenia (PostGIS, pgvector).
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest PostgreSQL?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>PostgreSQL</strong> to zaawansowana, open-source relacyjna baza danych rozwijana
              od 1986 roku. Znana z niezawodności, pełnej zgodności z ACID, rozbudowanego systemu typów
              (JSONB, arrays, geometry) i ogromnego ekosystemu rozszerzeń.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              PostgreSQL jest domyślną bazą danych w wielu framework'ach (Django, Rails, Laravel)
              i preferowana przez firmy budujące skalowalne aplikacje: Instagram, Spotify, Twitch,
              Reddit używają PostgreSQL w produkcji.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "1986", opis: "Początek projektu POSTGRES na UC Berkeley. Open-source od 1996 jako PostgreSQL." },
                { stat: "#1 RDBMS", opis: "Najpopularniejsza baza danych wg Stack Overflow Developer Survey 2023 (wśród profesjonalnych deweloperów)" },
                { stat: "ACID", opis: "Pełna zgodność z ACID (Atomicity, Consistency, Isolation, Durability) — gwarancja integralności danych" },
              ].map((s, i) => (
                <div key={i} className="bg-indigo-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-indigo-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Typy danych */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Typy danych PostgreSQL</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {postgresDataTypes.map((cat, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-indigo-700 mb-3">{cat.kategoria}</h3>
                  <ul className="space-y-1">
                    {cat.typy.map((t, j) => (
                      <li key={j} className="font-mono text-sm text-slate-600 bg-slate-50 rounded px-3 py-1">{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* SQL Examples */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Zaawansowany SQL — przykłady</h2>
            <div className="space-y-6">
              {sqlExamples.map((ex, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">{ex.tytuł}</h3>
                  <pre className="bg-slate-900 text-green-400 rounded-lg p-4 text-xs font-mono overflow-x-auto">
                    {ex.kod}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Rozszerzenia */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe rozszerzenia PostgreSQL</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {postgresExtensions.map((ext, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-indigo-700 font-mono mb-2">{ext.rozszerzenie}</h3>
                  <p className="text-slate-600 text-sm">{ext.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — PostgreSQL</h2>
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

      <RelatedArticles currentArticleId="postgresql-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
