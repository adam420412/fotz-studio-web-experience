import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Redis?",
    answer:
      "Redis (Remote Dictionary Server) to open-source'owy, in-memory data structure store — baza danych, cache i message broker działający w pamięci RAM. Stworzony przez Salvatore Sanfilippo w 2009 roku. Redis przechowuje dane w RAM co zapewnia ekstremalnie niskie opóźnienia (poniżej 1ms) i wysoką przepustowość (ponad 1 milion operacji/sekundę). Wspiera persistence (RDB snapshots, AOF log) i replikację. Używany przez Twitter, GitHub, Pinterest, Snapchat, Stack Overflow.",
  },
  {
    question: "Jakie struktury danych oferuje Redis?",
    answer:
      "Redis oferuje bogaty zestaw struktur danych: Strings (podstawowa, binarna, do 512MB), Lists (kolejki FIFO/LIFO, lpush/rpop), Sets (unikalne elementy, operacje zbiorów — union, intersection), Sorted Sets (ZSet — elementy z score, ranking), Hashes (mapy key-value, profil użytkownika), Bitmaps (operacje bitowe), HyperLogLog (szacowanie unikalnych elementów), Streams (log zdarzeń, podobny do Kafka), Pub/Sub (komunikacja asynchroniczna), Geospatial (lokalizacja, geofencing).",
  },
  {
    question: "Redis jako cache — jak to działa?",
    answer:
      "Redis cache stosuje wzorzec Cache-Aside (Lazy Loading): aplikacja najpierw sprawdza cache (GET key), jeśli brak (cache miss) — pobiera z bazy, zapisuje do Redis (SET key value EX 3600), przy następnym żądaniu — cache hit, brak zapytania do bazy. Kluczowe parametry: TTL (Time to Live) — czas wygaśnięcia danych; eviction policy — co wyrzucić gdy RAM jest pełny (LRU — Least Recently Used jest domyślne). Redis jako cache może zmniejszyć obciążenie bazy danych o 80-90%.",
  },
  {
    question: "Jak Redis obsługuje persistence (trwałość)?",
    answer:
      "Redis oferuje dwa mechanizmy trwałości: RDB (Redis Database) — snapshot stanu bazy w regularnych interwałach (np. co 5 minut). Szybkie odtwarzanie, ale ryzyko utraty danych z ostatnich minut. AOF (Append Only File) — loguje każdą operację zapisu. Bardziej niezawodne, większy plik, wolniejsze odtwarzanie. Można łączyć oba. Dla czystego cache persistence jest wyłączane (maxmemory + eviction policy). Redis 7.0 wprowadził RDB + AOF hybrid persistence.",
  },
  {
    question: "Co to jest Redis Cluster i Redis Sentinel?",
    answer:
      "Redis Sentinel to system High Availability: monitoruje master i repliki, automatycznie failover gdy master pada (promuje replikę na master), powiadamia klientów o nowym masterze. Redis Cluster to horyzontalne skalowanie: automatycznie dzieli dane między wiele węzłów (sharding) przez hash slots (16384 slotów), każdy węzeł odpowiada za podzbiór slotów. Cluster umożliwia skalowanie poza limit RAM pojedynczego serwera. Managed Redis: AWS ElastiCache, Google Memorystore, Redis Cloud.",
  },
];

const redisDataStructures = [
  {
    struktura: "String",
    opis: "Podstawowy typ — tekst, liczba, dane binarne (do 512MB). Atomowe operacje INCR/DECR.",
    komendy: ["SET user:1 'Jan Kowalski'", "GET user:1", "INCR page:views", "SETEX session:abc 3600 '{...}'"],
    zastosowanie: "Cache, liczniki, sesje, rate limiting",
  },
  {
    struktura: "List",
    opis: "Dwustronna kolejka (deque). LPUSH/RPUSH dodaje, LPOP/RPOP zdejmuje. Maks 2^32-1 elementów.",
    komendy: ["LPUSH queue:emails 'email1'", "RPOP queue:emails", "LRANGE recent:posts 0 9"],
    zastosowanie: "Kolejki zadań, aktywność (ostatnie N elementów), historia",
  },
  {
    struktura: "Set",
    opis: "Nieuporządkowany zbiór unikalnych wartości. Operacje zbiorów: SUNION, SINTER, SDIFF.",
    komendy: ["SADD tags:post:1 'tech' 'redis'", "SMEMBERS tags:post:1", "SINTER user:1:follows user:2:follows"],
    zastosowanie: "Tagi, śledzenie unikalnych użytkowników, wspólni znajomi",
  },
  {
    struktura: "Sorted Set (ZSet)",
    opis: "Set z numerycznym score. Automatycznie posortowany. ZADD dodaje z score, ZRANGE zwraca po rankingu.",
    komendy: ["ZADD leaderboard 1500 'user:1'", "ZREVRANGE leaderboard 0 9 WITHSCORES", "ZSCORE leaderboard 'user:1'"],
    zastosowanie: "Rankingi, leaderboardy, priority queues, rate limiting",
  },
  {
    struktura: "Hash",
    opis: "Mapa key-value. Idealny do przechowywania obiektów. HSET ustawia pola, HGET pobiera.",
    komendy: ["HSET user:1 name 'Jan' email 'jan@ex.com'", "HGET user:1 name", "HGETALL user:1"],
    zastosowanie: "Profile użytkowników, obiekty, konfiguracja",
  },
  {
    struktura: "Stream",
    opis: "Append-only log zdarzeń. Podobny do Kafka ale w pamięci. Consumer groups, auto-ID.",
    komendy: ["XADD events * type 'click' page '/home'", "XREAD COUNT 10 STREAMS events 0", "XGROUP CREATE events workers $"],
    zastosowanie: "Event sourcing, real-time analytics, message broker",
  },
];

const redisUseCases = [
  { przypadek: "Session Store", opis: "Przechowywanie sesji użytkowników z TTL. Automatyczne wygasanie (SETEX). Skalowalne między wieloma serwerami.", wydajność: "Sub-millisecond" },
  { przypadek: "Database Cache", opis: "Cache wyników zapytań SQL. Cache-Aside pattern. Zmniejszenie obciążenia bazy o 80-90%.", wydajność: "10-100x szybciej niż DB" },
  { przypadek: "Rate Limiting", opis: "INCR + EXPIRE do liczenia żądań per użytkownik/IP. Algorytmy: Fixed Window, Sliding Window, Token Bucket.", wydajność: "1M+ ops/sec" },
  { przypadek: "Job Queue", opis: "LPUSH do dodawania zadań, BRPOP do pobierania (blocking). Priorytety przez Sorted Sets.", wydajność: "Niskie opóźnienie" },
  { przypadek: "Real-time Leaderboard", opis: "Sorted Sets (ZADD score, ZREVRANK) — aktualizacja i pobieranie rankingów w O(log N).", wydajność: "O(log N)" },
  { przypadek: "Pub/Sub Messaging", opis: "PUBLISH do kanałów, SUBSCRIBE do subskrypcji. Real-time notifications, chat, live updates.", wydajność: "Bardzo niska latencja" },
];

export default function BlogRedisCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Redis — co to jest? Cache, struktury danych i zastosowania"
        description="Redis — definicja, struktury danych (String, List, Set, ZSet, Hash, Stream), przypadki użycia (cache, sesje, kolejki, leaderboard) i Redis Cluster…"
        canonicalUrl="https://fotz.pl/blog/redis-co-to-jest"

        keywords="Redis co to jest, Redis jak działa, Redis tutorial, Redis przykład, czym jest Redis, Redis dokumentacja, Redis przewodnik"

        canonical="https://fotz.pl/blog/redis-co-to-jest"
      />
      <ArticleSchema
        title="Redis — co to jest i jak działa? Kompletny przewodnik"
        description="Kompletny przewodnik po Redis: struktury danych, persistence, cache patterns i przypadki użycia."
        url="https://fotz.pl/blog/redis-co-to-jest"
        datePublished="2024-01-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Redis", url: "https://fotz.pl/blog/redis-co-to-jest" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Redis" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Redis — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Redis to in-memory baza danych używana jako cache, kolejka i message broker.
            Poznaj struktury danych, wzorce cachowania i kluczowe zastosowania Redis w produkcji.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Redis?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Redis</strong> (Remote Dictionary Server) to open-source'owy in-memory data store —
              baza danych, cache i message broker działający w pamięci RAM. Oferuje ekstremalnie niskie
              opóźnienia (poniżej 1ms) i przepustowość ponad 1 milion operacji na sekundę.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              W odróżnieniu od tradycyjnych baz danych (PostgreSQL, MySQL) Redis nie zapisuje na dysk
              przy każdej operacji — dane są w RAM. Persistence (trwałość) jest opcjonalna i realizowana
              przez snapshots (RDB) lub logi operacji (AOF).
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "sub-1ms", opis: "Typowe opóźnienie odczytu/zapisu — szybciej niż jakikolwiek dysk SSD" },
                { stat: "1M+ ops/s", opis: "Operacji na sekundę na jednym węźle. Skaluje się horyzontalnie przez Cluster" },
                { stat: "2009", opis: "Rok stworzenia przez Salvatore Sanfilippo. Od 2015 r. sponsorowany przez Redis Labs" },
              ].map((s, i) => (
                <div key={i} className="bg-red-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-red-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Struktury danych */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Struktury danych Redis</h2>
            <div className="space-y-4">
              {redisDataStructures.map((ds, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{ds.struktura}</h3>
                      <p className="text-slate-600 text-sm mb-3">{ds.opis}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-slate-900 rounded p-3">
                          <p className="text-xs font-semibold text-slate-400 mb-2">Komendy:</p>
                          {ds.komendy.map((cmd, j) => (
                            <p key={j} className="text-green-400 font-mono text-xs">{cmd}</p>
                          ))}
                        </div>
                        <div className="bg-red-50 rounded p-3">
                          <p className="text-xs font-semibold text-red-600 mb-1">Zastosowanie:</p>
                          <p className="text-red-800 text-sm">{ds.zastosowanie}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe zastosowania Redis</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {redisUseCases.map((uc, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">{uc.przypadek}</h3>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">{uc.wydajność}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{uc.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Redis</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
