import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to są wzorce odporności (Resilience Patterns) i dlaczego są kluczowe?",
    answer: "Resilience Patterns: wzorce projektowe zapewniające odporność systemów na awarie. W mikrousługach — cascade failure: jeden serwis pada, wywołuje chain reakcję i cały system pada. Cel wzorców odporności: izolacja awarii (failure isolation). Degradacja graceful (partial functionality zamiast full outage). Szybkie przywracanie. Kluczowe wzorce: Circuit Breaker: przerywa łańcuch wywołań do niedostępnego serwisu. Retry: ponów żądanie przy przejściowej awarii. Timeout: nie czekaj w nieskończoność. Bulkhead: izoluj zasoby per zależność. Fallback: alternatywna odpowiedź przy awarii. Rate Limiting/Throttling: chroń serwis przed przeciążeniem. Hedging: wyślij równoległe żądania, użyj pierwszej odpowiedzi. Backpressure: sygnalizuj upstream że nie możesz przetworzyć więcej. Gdzie stosować: między każdą parą serwisów w komunikacji synchronicznej. HTTP klient -> HTTP serwis. Message consumer -> external service call. Batch job -> external dependency. Narzędzia: Resilience4j (Java), Polly (.NET), go-resiliency (Go), Hystrix (Java, Netflix, deprecated), pybreaker (Python), tenacity (Python retry).",
  },
  {
    question: "Circuit Breaker Pattern — jak działa i jak skonfigurować?",
    answer: "Circuit Breaker: naśladuje fizyczny bezpiecznik elektryczny. Stany: CLOSED (normalny) — żądania przechodzą. Liczy błędy. OPEN (awaria) — żądania blokowane natychmiastowo (nie czekają). Periodycznie próbuje half-open. HALF-OPEN (próba) — przepuszcza ograniczoną liczbę żądań. Jeśli sukces -> CLOSED. Jeśli błąd -> OPEN. Przejście CLOSED -> OPEN: sliding window (count lub time based). Count-based: 100 żądań, 50% failure rate. Time-based: ostatnie 10 sekund, 50% failure rate. Wait duration in open state: 30-60s standardowo. Slow calls: żądania które trwają za długo (np. > 2s) również liczone jako failures. Resilience4j konfiguracja: slidingWindowType COUNT_BASED. slidingWindowSize 10. failureRateThreshold 50. slowCallDurationThreshold 2000ms. slowCallRateThreshold 100. waitDurationInOpenState 30s. permittedNumberOfCallsInHalfOpenState 3. Fallback przy OPEN: return cached data. return default/empty response. redirect to backup service. throw degraded exception (graceful degradation). Metrics: resilience4j.circuitbreaker.{name}.state. transition events. call.failure.rate. Integracja: Spring Boot Actuator automatycznie eksponuje metryki. Prometheus + Grafana dashboard.",
  },
  {
    question: "Retry Pattern — kiedy ponawiać i kiedy nie?",
    answer: "Retry: ponów żądanie przy przejściowej awarii. Nie wszystkie błędy są przejściowe. Retryable errors: 500 Internal Server Error (może być przejściowy). 503 Service Unavailable. Network timeout (connection reset). 429 Too Many Requests (z Retry-After). Non-retryable errors: 400 Bad Request (błąd klienta, retry nie pomoże). 401 Unauthorized (brak autentykacji, retry nie pomoże). 404 Not Found (zasób nie istnieje). 422 Unprocessable Entity. Retry strategies: Fixed Delay: czekaj 1s między próbami. Prosto ale retry storm. Exponential Backoff: 1s, 2s, 4s, 8s, 16s. Redukuje load na serwis. Exponential + Jitter: dodaj losowość. Bez jitter: wszystkie klienty czekają synchronicznie. Full Jitter: sleep = random(0, 2^attempt). Decorrelated Jitter (AWS): sleep = random(base, prev_sleep * 3). Max Retry attempts: 3-5 standardowo. Z Circuit Breaker: Circuit Breaker liczy failed retries. Retry budgets: globalny limit retry per czas (Google SRE). Idempotency wymagana: jeśli retry może powodować duplikaty -> endpoint musi być idempotentny. Resilience4j Retry: maxAttempts 3. waitDuration 500ms. exponentialBackoff multiplier 2. randomizedWaitFactor 0.5. retryExceptions [IOException, TimeoutException]. ignoreExceptions [BusinessException].",
  },
  {
    question: "Bulkhead Pattern — izolacja zasobów?",
    answer: "Bulkhead: grodziowy system statku — każda komora izolowana. Awaria jednej komory nie topi całego statku. W systemach IT: izoluj thread pool / connection pool / semaphore per zależność. Bez Bulkhead: jeden slow external service zajmuje wszystkie wątki thread pool. Cały serwis niedostępny dla innych requestów. Z Bulkhead: każda zależność ma własny thread pool lub semaphore. Awaria jednej zależności nie wpływa na inne. Thread Pool Isolation: każda zewnętrzna zależność ma osobny thread pool. Hystrx thread pool isolation. Wada: overhead thread switching. Semaphore Isolation: limita liczby równoległych żądań do zależności. Lżejszy niż thread pool. Bez timeout per execution. Connection Pool Isolation: baza danych A — pool 10 połączeń. Baza danych B — pool 5 połączeń. Crash BD A nie wyczerpuje połączeń BD B. Resilience4j Bulkhead: maxConcurrentCalls 10 per dependency. maxWaitDuration 0ms (natychmiastowy błąd gdy pełny). Thread Pool Bulkhead: coreThreadPoolSize 2. maxThreadPoolSize 4. queueCapacity 2. keepAliveDuration 20ms. Kubernetes: Resource Quotas per namespace. Limit CPU/RAM per pod. PodDisruptionBudget. Service Mesh (Istio): connection pool per upstream service. maxConnections, pendingRequests, requests, retries.",
  },
  {
    question: "Backpressure — jak sygnalizować przeciążenie w systemach reaktywnych?",
    answer: "Backpressure: mechanizm gdzie consumer informuje producer że nie może przetworzyć więcej danych. Przeciwieństwo push model (producer decyduje kiedy wysyłać). Pull model: consumer pobiera dane kiedy gotowy. Problem bez backpressure: producer produkuje szybciej niż consumer przetwarza. Bufory rosną -> OutOfMemoryError. Crash aplikacji. Backpressure strategie: DROP: odrzuć nowe dane gdy bufor pełny. ERROR: wyślij błąd do producera. LATEST: zachowaj tylko najnowsze dane. BUFFER: buforuj z limitem. BLOCK: blokuj producera. Reactive Streams (standard): Publisher -> Subscriber. request(N) — subscriber mówi ile może przetworzyć. onNext(), onError(), onComplete(). Project Reactor (Spring WebFlux): Flux/Mono z backpressure support. limitRate(), onBackpressureBuffer(), onBackpressureDrop(). RxJava: Flowable (backpressure-aware) vs Observable (bez). Backpressure operators: onBackpressureBuffer, onBackpressureDrop, onBackpressureLatest. Kafka Consumer: max.poll.records — ile rekordów per poll. pause()/resume() — dynamiczne wstrzymanie. Wstaw throttle gdy downstream wolny. gRPC streaming: flow control wbudowane (HTTP/2 flow control). Monitoring: queue depth metrics. Alerting gdy queue rośnie. Auto-scaling gdy persistently full queue.",
  },
];

const patterns = [
  { wzorzec: "Circuit Breaker", problem: "Cascade failure", mechanizm: "Przerywanie żądań do awarii", narzędzia: "Resilience4j, Polly, Istio", overhead: "Niski" },
  { wzorzec: "Retry + Backoff", problem: "Przejściowe awarie", mechanizm: "Ponowne próby z delay", narzędzia: "Resilience4j, Polly, tenacity", overhead: "Niski-Średni" },
  { wzorzec: "Timeout", problem: "Slow dependencies", mechanizm: "Max czas oczekiwania", narzędzia: "Wbudowany w HTTP clients", overhead: "Minimalny" },
  { wzorzec: "Bulkhead", problem: "Wyczerpanie zasobów", mechanizm: "Izolacja thread pool/semaphore", narzędzia: "Resilience4j, Hystrix, K8s Quotas", overhead: "Średni" },
  { wzorzec: "Fallback", problem: "Całkowita niedostępność", mechanizm: "Alternatywna odpowiedź", narzędzia: "Resilience4j, custom code", overhead: "Zależy od fallback" },
  { wzorzec: "Backpressure", problem: "Przeciążenie consumer", mechanizm: "Sygnalizacja do producer", narzędzia: "Reactor, RxJava, Kafka", overhead: "Niski (reactive)" },
];

export default function BlogResiliencePatternsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Wzorce odporności — Circuit Breaker, Retry, Bulkhead, Backpressure, Resilience4j | Fotz.pl"
        description="Resilience Patterns: Circuit Breaker, Retry z Exponential Backoff, Bulkhead thread pool isolation, Backpressure w Reactor/RxJava, Resilience4j i Polly."
        canonicalUrl="https://fotz.pl/blog/wzorce-odpornosci-circuit-breaker-retry-bulkhead-backpressure-resilience4j"
      />
      <ArticleSchema
        title="Wzorce odporności — Circuit Breaker, Retry, Bulkhead, Backpressure, Resilience4j?"
        description="Resilience Patterns: 6 wzorców (Circuit Breaker/Retry/Timeout/Bulkhead/Fallback/Backpressure), Resilience4j konfiguracja, cascade failure prevention."
        url="https://fotz.pl/blog/wzorce-odpornosci-circuit-breaker-retry-bulkhead-backpressure-resilience4j"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Wzorce odporności", url: "https://fotz.pl/blog/wzorce-odpornosci-circuit-breaker-retry-bulkhead-backpressure-resilience4j" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Wzorce odporności", href: "/blog/wzorce-odpornosci-circuit-breaker-retry-bulkhead-backpressure-resilience4j" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Microservices / Reliability
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wzorce odporności systemów
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Circuit Breaker, Retry z Exponential Backoff, Bulkhead isolation,
              Backpressure — jak zapobiec cascade failure w mikrousługach.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Izolacja awarii", value: "Circuit Breaker" },
                { label: "Przejściowe błędy", value: "Retry + Jitter" },
                { label: "Resource isolation", value: "Bulkhead" },
                { label: "Consumer protection", value: "Backpressure" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych wzorców odporności</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy wzorzec rozwiązuje inny rodzaj awarii — od cascade failure przez
              wyczerpanie zasobów po przeciążenie consumer.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wzorzec</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Problem</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Mechanizm</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzia</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Overhead</th>
                </tr>
              </thead>
              <tbody>
                {patterns.map((p, i) => (
                  <tr key={p.wzorzec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.wzorzec}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.problem}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.mechanizm}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.narzędzia}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.overhead}</td>
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
