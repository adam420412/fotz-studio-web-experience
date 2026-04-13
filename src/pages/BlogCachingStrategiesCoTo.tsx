import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Jakie są strategie cache i kiedy stosować Cache-Aside vs Write-Through?",
    answer: "Cache-Aside (Lazy Loading): aplikacja najpierw sprawdza cache. Cache miss -> aplikacja czyta z DB, zapisuje do cache, zwraca dane. Cache hit -> zwraca dane z cache. Zalety: tylko potrzebne dane w cache. Odporny na awarie cache (fallback do DB). Wady: cache miss = 3 operacje (cache read, DB read, cache write). Stale data przy concurrent updates. Write-Through: przy każdym write do DB -> jednocześnie update cache. Gwarancja spójności cache i DB. Zalety: cache zawsze aktualny. Zero stale data. Wady: write latencja wyższa (dwie operacje). Dane w cache które nigdy nie są czytane. Read-Through: cache layer pośredniczy. Aplikacja pyta cache, cache pobiera z DB jeśli brak. Transparentne dla aplikacji. Używają: AWS DAX (DynamoDB), Redis Enterprise. Write-Behind (Write-Back): zapis do cache, asynchronicznie do DB. Najwyższa write performance. Ryzyko: dane zgubione przy crash cache przed write do DB. Write-Around: bezpośredni write do DB, pominięcie cache. Cache trafia tylko przy read. Dla write-heavy danych które rzadko czytane. Refresh-Ahead: cache odświeża dane zanim TTL wygaśnie. Predykcja co będzie potrzebne. Netflix używa dla film metadata.",
  },
  {
    question: "Cache invalidation — najtrudniejszy problem w informatyce?",
    answer: "Phil Karlton: 'There are only two hard things in Computer Science: cache invalidation and naming things.' Strategie invalidacji: TTL (Time-To-Live): najprostsza. Cache entry wygasa po N sekund. Wada: stale data przez cały TTL. Dobra dla: statyczne dane, tolerancja stale data. Event-Based Invalidation: przy update DB -> wyślij event -> invalidate cache keys. Np. OrderUpdated event -> del cache:order:{id}. Bardziej aktualne dane, wyższa złożoność. Versioned Cache Keys: klucz zawiera wersję (user:123:v5). Przy update -> inkrementuj wersję. Stare klucze automatycznie wygasają przez TTL. Cache Stampede (Thundering Herd): problem gdy TTL wygasa dla popularnego klucza. Setki requestów jednocześnie na DB. Rozwiązania: Mutex Lock — tylko jeden request odświeża, reszta czeka. Probabilistic Early Expiration — losowe odświeżanie przed TTL. Stale-While-Revalidate — zwróć stale data, odświeżaj w tle. Cache rzadko = prawidłowo: cache powinien być warstwą optymalizacji, nie wymaganiem. Jeśli cache down -> aplikacja działa wolniej ale działa. Distributed Cache Invalidation: multi-region invalidacja. Redis pub/sub do powiadamiania innych node. Cache coherency problem.",
  },
  {
    question: "Multi-level caching — CDN, Nginx, Redis, aplikacja, DB?",
    answer: "Hierarchia cache (od najszybszego do najwolniejszego): L1 — In-process cache (aplikacja): HashMap/ConcurrentHashMap. Caffeine (Java) — high-performance local cache z LRU/LFU. Node.js memory cache. Najszybszy (ns latencja), najmniejszy, per-instancja. L2 — Distributed cache: Redis, Memcached. Wspólny dla wszystkich instancji aplikacji. ms latencja, większy, współdzielony. L3 — HTTP cache (Nginx/Varnish/CDN proxy): Cache-Control headers, Vary headers. Nginx proxy_cache. Sub-ms do ms latencja, duży. L4 — CDN (Edge cache): Cloudflare, AWS CloudFront, Fastly. Geograficznie bliski użytkownikowi. ms latencja, ogromny, globalny. L5 — DB cache (query cache, buffer pool): PostgreSQL shared_buffers. MySQL InnoDB buffer pool. Read replicas jako cache. Cache-Control headers dla CDN: max-age=3600 — cache 1 godzinę. s-maxage=86400 — CDN cache 24h (nadpisuje max-age dla shared caches). public — można cachować przez CDN. private — tylko przeglądarka. no-cache — revalidate przed użyciem. no-store — nie cachuj. stale-while-revalidate=60 — użyj stale przez 60s podczas odświeżania.",
  },
  {
    question: "Redis jako cache — wzorce i best practices?",
    answer: "Redis Data Structures dla cache: String: prosty key-value. SET user:123 '{json}' EX 3600. Hash: pola użytkownika jako hash. HSET user:123 name 'Jan' age 30. Efektywne dla partial updates. List: kolejka, session history. Set: unikalne wartości (np. visited pages). Sorted Set: leaderboard, rate limiting (sliding window). Redis pipelining: wysyłaj wiele komend bez czekania na odpowiedź każdej. PIPELINE [SET, GET, SET] w jednym round-trip. Lua scripting: atomowe operacje złożone z wielu komend. Check-and-set bez race condition. Redis Cluster: automatyczny sharding. 16384 hash slots. Każdy node obsługuje część slotów. Horizontal scaling. Redis Sentinel: wysokie dostępność dla single shard. Automatyczny failover. Cache Eviction Policies: noeviction — błąd przy braku miejsca. allkeys-lru — wyrzuć najmniej ostatnio używane. allkeys-lfu — wyrzuć najmniej używane (frequency-based). volatile-lru — LRU tylko dla kluczy z TTL. allkeys-random — losowe. Dla cache: allkeys-lru lub allkeys-lfu. Memory optimization: maxmemory 4gb. maxmemory-policy allkeys-lfu. Kompresja JSON w cache (msgpack, brotli). Key naming: namespace:entity:id (user:profile:123). Monitoring: hit rate (cel 80-95%). Eviction rate. Memory fragmentation.",
  },
  {
    question: "Jak mierzyć efektywność cache i optymalizować hit rate?",
    answer: "Kluczowe metryki cache: Cache Hit Rate = hits / (hits + misses). Cel: 80-95% dla production. Poniżej 80% -> problem. Eviction Rate: czy cache wyrzuca dane przed TTL? Jeśli tak -> za mały cache lub za długi TTL. Miss Latency: latencja cache miss -> DB. Porównanie z latencją bez cache. Mierzenie Redis: redis-cli INFO stats. keyspace_hits, keyspace_misses. hit rate = keyspace_hits / (keyspace_hits + keyspace_misses). Narzędzia: RedisInsight (GUI). Prometheus redis_exporter. Grafana dashboard. Optymalizacja hit rate: TTL tuning: zbyt krótki TTL = dużo miss. Zbyt długi = stale data i duże zużycie pamięci. Analiza access patterns (jakie klucze są miss-owane). Prefetching: ładuj dane do cache zanim użytkownik ich potrzebuje. Warm-up cache po deploymencie. Cache Warming: przy deploymencie -> pre-load popular data do cache. AWS ElastiCache: Global Datastore (multi-region). Cluster Mode. Backup i restore. Memcached vs Redis: Memcached — prosty, wielowątkowy, tylko string, brak persistence. Redis — więcej struktur danych, single-threaded (Redis 6+ multi-threaded dla IO), persistence, pub/sub, streams. Wybór: Redis prawie zawsze lepszy dla nowych projektów.",
  },
];

const cachingPatterns = [
  { wzorzec: "Cache-Aside", kiedy: "Ogólne użycie, read-heavy", spójność: "Eventual", write_lat: "Normalna", read_lat: "Miss = 3 ops", ryzyko: "Stale data, stampede" },
  { wzorzec: "Write-Through", kiedy: "Wymagana spójność", spójność: "Silna", write_lat: "Wyższa (2 ops)", read_lat: "Niska (hit)", ryzyko: "Nadmiarowe dane w cache" },
  { wzorzec: "Read-Through", kiedy: "Transparentny cache layer", spójność: "Eventual", write_lat: "Normalna", read_lat: "Miss = transparentne", ryzyko: "Vendor lock-in (DAX)" },
  { wzorzec: "Write-Behind", kiedy: "Write-heavy, batch DB", spójność: "Eventual (ryzyko utraty)", write_lat: "Najniższa", read_lat: "Niska (hit)", ryzyko: "Data loss przy crash" },
  { wzorzec: "Write-Around", kiedy: "Rzadko czytane po write", spójność: "Silna (DB source of truth)", write_lat: "Normalna", read_lat: "Miss = wyższa", ryzyko: "Cold cache po write" },
  { wzorzec: "Refresh-Ahead", kiedy: "Predictable access patterns", spójność: "Silna (proaktywna)", write_lat: "Normalna", read_lat: "Zawsze hit", ryzyko: "Zbędne odświeżanie" },
];

export default function BlogCachingStrategiesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Strategie cache — Cache-Aside, Write-Through, Redis, CDN, cache invalidation | Fotz.pl"
        description="Strategie cache: Cache-Aside vs Write-Through vs Write-Behind, cache invalidation, cache stampede, Redis eviction policies, multi-level cache CDN+Redis+aplikacja."
        canonicalUrl="https://fotz.pl/blog/strategie-cache-co-to-jest-cache-aside-write-through-redis-cdn-invalidation"

        keywords="Strategie cache co to jest, Strategie cache jak działa, Strategie cache tutorial, Strategie cache przykład, czym jest Strategie cache, Strategie cache dokumentacja, Strategie cache przewodnik"
      />
      <ArticleSchema
        title="Strategie cache — Cache-Aside, Write-Through, Redis, CDN, cache invalidation?"
        description="Strategie cache: 6 wzorców (Cache-Aside/Write-Through/Read-Through/Write-Behind/Write-Around/Refresh-Ahead), Redis best practices, multi-level caching i hit rate."
        url="https://fotz.pl/blog/strategie-cache-co-to-jest-cache-aside-write-through-redis-cdn-invalidation"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Strategie cache", url: "https://fotz.pl/blog/strategie-cache-co-to-jest-cache-aside-write-through-redis-cdn-invalidation" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-lime-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Strategie cache", href: "/blog/strategie-cache-co-to-jest-cache-aside-write-through-redis-cdn-invalidation" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-lime-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Performance / Infrastructure
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategie cache
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Cache-Aside, Write-Through, Redis eviction policies, multi-level CDN+Redis+aplikacja
              i cache invalidation — jak zbudować efektywną warstwę cache.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Najpopularniejszy", value: "Cache-Aside" },
                { label: "Najsilniejsza spójność", value: "Write-Through" },
                { label: "Hit rate cel", value: "80-95%" },
                { label: "Distributed cache", value: "Redis / Memcached" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-lime-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabela wzorców */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wzorców cache</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy wzorzec optymalizuje inny aspekt — spójność, latencję zapisu,
              latencję odczytu lub zużycie pamięci.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wzorzec</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Spójność</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Write latencja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Read latencja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Ryzyko</th>
                </tr>
              </thead>
              <tbody>
                {cachingPatterns.map((p, i) => (
                  <tr key={p.wzorzec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.wzorzec}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.kiedy}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.spójność}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.write_lat}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.read_lat}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.ryzyko}</td>
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
