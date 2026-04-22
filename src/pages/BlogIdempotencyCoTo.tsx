import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest idempotencja w API i dlaczego jest kluczowa?",
    answer: "Idempotencja: operacja jest idempotentna gdy wielokrotne wykonanie daje ten sam wynik co jednokrotne. f(f(x)) = f(x). HTTP idempotencja: GET — idempotentny (nie modyfikuje stanu). PUT — idempotentny (zastąpienie zasobu). DELETE — idempotentny (usunięcie zasobu, 404 przy kolejnym = ten sam stan). POST — niekoniecznie idempotentny (tworzenie zasobu). PATCH — niekoniecznie idempotentny (zależy od implementacji). Problem bez idempotencji: sieć zrywa się po przetworzeniu żądania ale przed odesłaniem odpowiedzi. Klient nie wie czy operacja się udała. Retry -> duplikat (podwójna płatność, podwójne zamówienie). Rozwiązanie: Idempotency Keys. Klient generuje unikalny klucz per żądanie. Wysyła w nagłówku: Idempotency-Key: UUID. Serwer: sprawdź czy klucz istnieje w cache/DB. Jeśli tak — zwróć poprzednią odpowiedź (bez ponownego przetwarzania). Jeśli nie — przetwórz i zapisz odpowiedź z kluczem. Stripe używa Idempotency-Key. PayPal PayPal-Request-Id. AWS API X-Amzn-Idempotency-Token. Idempotency Key storage: Redis (TTL 24h). PostgreSQL (idempotency_keys tabela). DynamoDB (conditional writes).",
  },
  {
    question: "Jak zaimplementować Idempotency Keys na serwerze?",
    answer: "Implementacja serwera — kluczowe kroki: 1. Odczytaj Idempotency-Key z nagłówka. Jeśli brak — zwróć 400 Bad Request (dla operacji nie-idempotentnych). 2. Sprawdź w Redis/DB czy klucz istnieje. 3. Jeśli istnieje i status = COMPLETED — zwróć cached response. 4. Jeśli istnieje i status = IN_PROGRESS — zwróć 409 Conflict (duplicate concurrent request). 5. Zapisz klucz ze statusem IN_PROGRESS (atomic check-and-set). 6. Wykonaj operację (transakcja biznesowa). 7. Zapisz response z statusem COMPLETED. 8. Zwróć response. Race condition: dwa równoległe requesty z tym samym kluczem. Rozwiązanie: Redis SET key NX EX 86400 — atomic lock. Tylko jeden request wygrywa, drugi dostaje 409. PostgreSQL: INSERT INTO idempotency_keys (key, status) VALUES ($1, 'IN_PROGRESS') ON CONFLICT DO NOTHING — sprawdź affected rows. Redis Lua script dla atomowego check-and-set. Idempotent zapis w DB: przy retry mogą pojawić się duplikaty w DB. Rozwiązanie: unikalne constraint na kolumnie (np. external_reference_id). INSERT ... ON CONFLICT DO NOTHING — bezpieczny upsert. Zakres klucza: per user (klucz ważny tylko dla danego użytkownika). per endpoint (ten sam klucz w innym endpoint = inny zasób). TTL: 24-48h standardowo. Stripe: 24h. AWS: per-service, często 7 dni.",
  },
  {
    question: "Idempotent consumers w message brokerach — jak zapewnić exactly-once?",
    answer: "Problem: message broker gwarantuje at-least-once delivery. Consumer może dostać tę samą wiadomość wielokrotnie (retry po ack timeout, rebalance). Aplikacja musi obsłużyć duplikaty. Strategie idempotent consumer: Deduplikacja przez ID: każda wiadomość ma unikalny message_id. Consumer sprawdza w DB/Redis czy message_id już przetworzony. Jeśli tak — skip (ack wiadomość bez przetwarzania). Idempotent operacja: operacja sama z siebie jest idempotentna. UPDATE SET balance = 100 WHERE id = 1 — zawsze ten sam wynik. Problem: UPDATE SET balance = balance - 10 — nie jest idempotentna. Natural idempotency: użyj SET/REPLACE zamiast ADD. Versioned updates: optimistic locking — WHERE version = X AND SET version = X+1. Reject jeśli version nie pasuje. Inbox Pattern (Transactional Outbox): w DB tabela 'processed_messages' z message_id. INSERT ... ON CONFLICT DO NOTHING przed przetworzeniem. Atomowe z przetwarzaniem (ta sama transakcja). Kafka Consumer Groups: Kafka offset commit po przetworzeniu. Enable.auto.commit = false. Manual commit po sukcesie. Problem: crash po przetworzeniu ale przed commit -> replay. Rozwiązanie: Inbox Pattern lub idempotent operations. Kafka Streams: exactly-once.v2 (EOS) — kombinacja Kafka transactions i idempotent producers. Najlepsza gwarancja ale kosztem latencji i throughpucie.",
  },
  {
    question: "Idempotencja przy płatnościach — jak chronić przed podwójną opłatą?",
    answer: "Podwójna płatność: najkosztowniejszy bug w e-commerce. Klient kliknie 'Pay' dwa razy. Timeout i retry przez klienta. Network error po przetworzeniu. Warstwy ochrony: Frontend: disable przycisk po kliknięciu. Toast/spinner podczas przetwarzania. Nie pokazuj formularza płatności dwa razy. Backend Idempotency Key: klient generuje UUID per próbę płatności. Wysyła w nagłówku Idempotency-Key. Backend sprawdza w Redis/DB. Duplicate -> zwróć poprzednią odpowiedź (202/201 z tym samym payment_id). Database Unique Constraint: external_reference_id (klucz z klienta lub order_id + timestamp) jako UNIQUE. INSERT ON CONFLICT DO NOTHING. Payment Gateway idempotency: Stripe Idempotency-Key header. PayPal PayPal-Request-Id. Braintree własny mechanizm. Optimistic Locking: Order status: PENDING -> PROCESSING -> COMPLETED. UPDATE orders SET status = 'PROCESSING' WHERE id = X AND status = 'PENDING'. Jeśli 0 rows affected -> już przetwarzane. Auditlog: zapisuj każdą próbę z wynikiem. Łatwa diagnoza incydentów. Monitorowanie: metryki - duplicate_request_rate. Alert gdy wzrasta. Testy: scenariusze retry i concurrent requests w testach integracyjnych.",
  },
  {
    question: "PUT vs PATCH — które HTTP metody są idempotentne?",
    answer: "PUT — zawsze idempotentny: zastąp cały zasób. PUT /users/123 {name: 'Jan', age: 30} — wynik zawsze ten sam, niezależnie ile razy wykonasz. Pełny zasób musi być w body. PATCH — może być nieide mpotentny: częściowa aktualizacja. PATCH /account {action: 'increment', amount: 10} — wielokrotne wykonanie sumuje. Idempotentny PATCH: PATCH /account {balance: 100} — ustawianie wartości, nie dodawanie. Wymaga przemyślanego API design. DELETE — idempotentny (zazwyczaj): pierwsza odpowiedź 200/204. Kolejne: 404 lub 204 (zależy od implementacji). Ważne: stan jest taki sam — zasób usunięty. POST — zwykle nie-idempotentny: POST /orders — tworzy nowe zamówienie per request. POST /login — może być idempotentny (ten sam token). POST /payments — nie-idempotentny bez Idempotency-Key. Safe vs Idempotent: Safe = nie modyfikuje stanu (GET, HEAD, OPTIONS). Idempotent = wielokrotne = jednokrotne (GET, PUT, DELETE, HEAD, OPTIONS). POST i PATCH mogą być nie-idempotentne. Projektowanie API: preferuj PUT dla aktualizacji gdy chcesz idempotencji. Używaj Idempotency-Key dla POST operacji które muszą być bezpieczne przy retry. Unikaj PATCH z increment/decrement semantics. REST Maturity Model (Richardson): Level 2+ wymaga prawidłowego użycia HTTP metod.",
  },
];

const idempotencyPatterns = [
  { wzorzec: "Idempotency Key (header)", warstwa: "API / HTTP", gwarancja: "Exactly-once per key", storage: "Redis / PostgreSQL", ttl: "24-48h", kto: "Stripe, PayPal, AWS" },
  { wzorzec: "Natural HTTP idempotency", warstwa: "API / HTTP", gwarancja: "Per HTTP method spec", storage: "Brak", ttl: "N/A", kto: "REST API z PUT/DELETE" },
  { wzorzec: "Database UNIQUE constraint", warstwa: "Database", gwarancja: "Exactly-once insert", storage: "Baza danych", ttl: "Dożywotni", kto: "Systemy płatności" },
  { wzorzec: "Inbox Pattern", warstwa: "Message Consumer", gwarancja: "Exactly-once consume", storage: "DB (processed_messages)", ttl: "Konfigurowalne", kto: "Kafka consumers" },
  { wzorzec: "Optimistic Locking", warstwa: "Database", gwarancja: "Exactly-once update", storage: "DB (version column)", ttl: "N/A", kto: "Concurrent updates" },
  { wzorzec: "Kafka EOS (exactly-once)", warstwa: "Message Broker", gwarancja: "Exactly-once end-to-end", storage: "Kafka internal", ttl: "N/A", kto: "Kafka Streams pipelines" },
];

export default function BlogIdempotencyCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Idempotencja API | Fotz Studio"
        description="Idempotencja API: Idempotency Keys, Redis implementacja, ochrona przed podwójną płatnością, idempotent consumers w Kafka, Inbox Pattern i HTTP metody."
        canonicalUrl="https://fotz.pl/blog/idempotencja-api-co-to-jest-idempotency-key-redis-platnosci-kafka"

        keywords="Idempotencja API co to jest, Idempotencja API jak działa, Idempotencja API tutorial, Idempotencja API przykład, czym jest Idempotencja API, Idempotencja API dokumentacja, Idempotencja API przewodnik"

        canonical="https://fotz.pl/blog/idempotencja-api-co-to-jest-idempotency-key-redis-platnosci-kafka"
      />
      <ArticleSchema
        title="Idempotencja API — co to jest, Idempotency Key, Redis, płatności, Kafka?"
        description="Idempotencja: 6 wzorców (Idempotency Key/Natural HTTP/DB UNIQUE/Inbox/Optimistic Lock/Kafka EOS), implementacja, ochrona płatności i PUT vs PATCH."
        url="https://fotz.pl/blog/idempotencja-api-co-to-jest-idempotency-key-redis-platnosci-kafka"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Idempotencja API", url: "https://fotz.pl/blog/idempotencja-api-co-to-jest-idempotency-key-redis-platnosci-kafka" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Idempotencja API", url: "/blog/idempotencja-api-co-to-jest-idempotency-key-redis-platnosci-kafka" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              API Design / Reliability
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Idempotencja API
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Bezpieczne retry bez podwójnych płatności — Idempotency Keys w Redis,
              Inbox Pattern dla Kafka consumers, ochrona transakcji finansowych.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Klucz per żądanie", value: "Idempotency Key" },
                { label: "Cache odpowiedzi", value: "Redis TTL 24h" },
                { label: "DB protection", value: "UNIQUE constraint" },
                { label: "Kafka consumers", value: "Inbox Pattern" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-sky-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wzorce */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wzorców idempotencji</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda warstwa architektury wymaga innego podejścia — od HTTP po bazę danych i message brokera.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wzorzec</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Warstwa</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Gwarancja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Storage</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">TTL</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kto używa</th>
                </tr>
              </thead>
              <tbody>
                {idempotencyPatterns.map((p, i) => (
                  <tr key={p.wzorzec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.wzorzec}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.warstwa}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.gwarancja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.storage}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.ttl}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.kto}</td>
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

      <RelatedArticles currentArticleId="idempotencja-api-co-to-jest-idempotency-key-redis-platnosci-kafka" />
      <ContactSection />
    </Layout>
  );
}
