import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest gRPC i czym różni się od REST?",
    answer: "gRPC (Google Remote Procedure Call) to nowoczesny framework RPC stworzony przez Google, oparty na HTTP/2 i Protocol Buffers (protobuf). Pozwala na wywoływanie metod zdalnych serwisów jak lokalnych funkcji, z automatycznym generowaniem klientów w wielu językach. Główne różnice gRPC vs REST: Protokół: gRPC używa HTTP/2 (multiplexing, header compression, server push). REST używa HTTP/1.1 lub HTTP/2. Serializacja: gRPC używa protobuf (binarny, 5-10x mniejszy niż JSON). REST używa JSON (tekstowy, czytelny). Contract: gRPC wymaga .proto file (schema-first). REST jest opcjonalnie opisany przez OpenAPI/Swagger. Komunikacja: gRPC wspiera 4 typy: Unary, Server Streaming, Client Streaming, Bidirectional Streaming. REST: request-response (Unary). Code generation: gRPC generuje type-safe klientów i serwery w każdym języku z .proto. REST: opcjonalne narzędzia generacji. Kiedy gRPC jest lepsze od REST: Komunikacja microservice-to-microservice (niski latency). Streaming danych (real-time feeds). Poligeniczne środowiska (wiele języków). Performance-critical paths. Kiedy REST jest lepsze: Public APIs (wszyscy rozumieją REST). Browser-to-server (gRPC-Web jest dostępny ale mniej popularne). Prostota i szeroka znajomość.",
  },
  {
    question: "Protocol Buffers — jak działają i jak definiować schematy?",
    answer: "Protocol Buffers (protobuf) to mechanizm serializacji danych stworzony przez Google. Dane są serializowane do binarnego formatu — kompaktowego i szybkiego. Definicja schematu w .proto file: definiujesz messages (odpowiednik JSON object) i services (metody RPC). Kluczowe elementy: message — struktura danych. field — pole w message z typem i numerem (tag). service — kolekcja RPC metod. rpc — pojedyncza metoda z request i response type. Typy danych: skalarne (int32, int64, float, double, bool, string, bytes), złożone (inne messages), enum, repeated (list/array), map (key-value). Field tags: każde pole ma unikalny numer (1, 2, 3...). Służą do identyfikacji w binarnym formacie. Numery 1-15 są zakodowane na 1 bajt — używaj ich dla często używanych pól. Backward/Forward compatibility: możesz dodawać nowe pola (z nowymi tagami) bez breaking change. Stary klient ignoruje nieznane pola. Nigdy nie zmieniaj tagów ani typów istniejących pól. Generowanie kodu: protoc kompilator generuje klasy/structs dla Java, Python, Go, C++, C#, JavaScript/TypeScript, Kotlin, Swift, PHP i inne. W Go: protoc-gen-go. W Java: grpc-java. Binarny format: protobuf jest 5-10x mniejszy niż JSON i 2-5x szybszy w serializacji.",
  },
  {
    question: "Cztery typy komunikacji gRPC — kiedy używać?",
    answer: "Cztery typy gRPC: Unary RPC: klient wysyła jeden request, serwer odpowiada jednym response. Identyczne z REST request-response. Use case: większość operacji CRUD. Przykład: GetUser(UserRequest) returns (UserResponse). Server Streaming RPC: klient wysyła jeden request, serwer wysyła strumień wielu response. Use case: real-time feed (stock prices, log streaming, progress updates). Przykład: SubscribeToUpdates(Request) returns (stream Update). Client Streaming RPC: klient wysyła strumień wielu requestów, serwer odpowiada jednym response. Use case: upload dużych plików w częściach, agregacja danych. Przykład: UploadFile(stream FileChunk) returns (UploadResult). Bidirectional Streaming RPC: obie strony wysyłają strumień wiadomości niezależnie. Use case: chat, collaborative editing, real-time gaming. Przykład: Chat(stream ChatMessage) returns (stream ChatMessage). Zalety HTTP/2 dla streamingu: HTTP/2 multiplexing pozwala wielu streamom współdzielić jedno połączenie TCP. Brak head-of-line blocking (problem HTTP/1.1). Long-lived connections — idealne dla streaming. Flow control — serwer może kontrolować tempo wysyłania przez klienta. Practical use: Bidirectional streaming używany przez Google w dużych systemach: Kubernetes API server, Google Cloud Pub/Sub, GCP Dataflow.",
  },
  {
    question: "gRPC w mikrousługach — ecosystem i narzędzia?",
    answer: "gRPC ecosystem: grpc-gateway: automatycznie generuje REST-to-gRPC proxy z .proto definicji. Możesz udostępnić zarówno gRPC jak i REST API z jednego serwisu. Idealny dla public API + internal gRPC. gRPC-Web: pozwala przeglądarkom używać gRPC (nie bezpośrednio — przez proxy). Envoy jako proxy. Alternatywnie: grpc-web biblioteka + grpcwebproxy. gRPC Reflection: serwis udostępnia swój schemat runtime. Pozwala narzędziom (grpcurl, evans) na discovery i testing bez .proto pliku. Narzędzia do testowania gRPC: grpcurl — curl dla gRPC. evans — interaktywny gRPC klient (REPL). BloomRPC — GUI klient (jak Postman dla gRPC). Postman — od 2022 obsługuje gRPC. Load Balancing: gRPC ma problem z load balancing — trwałe HTTP/2 połączenia trafiają do jednego backend. Rozwiązanie: client-side load balancing (serwis sam wybiera instancje). gRPC-aware load balancer (Envoy w Service Mesh). Service Mesh integration: Istio i Linkerd mają native gRPC support — load balancing, retries, timeouts, tracing per method. gRPC status codes: 16 standardowych kodów błędów (OK, NOT_FOUND, INVALID_ARGUMENT, UNAVAILABLE, DEADLINE_EXCEEDED). Mapowanie na HTTP status codes przez grpc-gateway.",
  },
  {
    question: "Migracja z REST do gRPC — kiedy i jak?",
    answer: "Migracja z REST do gRPC: Kiedy warto migrować: Masz wewnętrzną komunikację microservice-to-microservice przez REST. Latency komunikacji wewnętrznej jest problemem. Masz poligeniczny ekosystem (Java backend + Go sidecar + Python ML service). Budujesz streaming capabilities (real-time features). Strategia migracji: Nie musisz wybierać: grpc-gateway pozwala na jednoczesne REST i gRPC z jednego serwisu. Migruj stopniowo — zacznij od najczęstszego internal call path. Definiuj schema-first: .proto jako kontrakt między teamami. Lepszy niż OpenAPI dla internal services — type-safe generated clients. Backward compatibility: traktuj .proto file jak public API. Zmiana wymaga versioning (package v1, v2). Pułapki migracji: Debugging trudniejszy niż REST (binarny format). Używaj gRPC reflection i grpcurl. Load balancing — nie zapomnij o gRPC-aware LB lub Service Mesh. gRPC-Web jeśli browser clients. Error handling: gRPC status codes są inne niż HTTP status codes — dostosuj error handling. Adoption: gRPC jest popularny w: Google (wewnętrznie wszędzie), Netflix, Square, CoreOS, etcd, Kubernetes API. Język-specific performance: Go + gRPC = excellent performance. Java + gRPC = dobry. Python gRPC = gorszy (GIL), rozważ asyncio. Rust + tonic (gRPC framework) = najlepsza wydajność.",
  },
];

const grpcVsRest = [
  { aspekt: "Protokół", grpc: "HTTP/2 (multiplexing)", rest: "HTTP/1.1 lub HTTP/2" },
  { aspekt: "Serializacja", grpc: "Protobuf (binarny, ~10x mniejszy)", rest: "JSON (tekstowy)" },
  { aspekt: "Contract", grpc: ".proto (schema-first, wymagany)", rest: "OpenAPI (opcjonalny)" },
  { aspekt: "Code gen", grpc: "Type-safe klienty i serwery", rest: "Opcjonalne (Swagger Codegen)" },
  { aspekt: "Streaming", grpc: "Natywny (4 typy)", rest: "WebSocket lub SSE" },
  { aspekt: "Browser support", grpc: "gRPC-Web (przez proxy)", rest: "Natywny" },
  { aspekt: "Czytelność", grpc: "Binarny — nie czytelny", rest: "JSON — czytelny" },
  { aspekt: "Latency", grpc: "Niższy (protobuf + HTTP/2)", rest: "Wyższy" },
];

const grpcStreamingTypes = [
  { typ: "Unary", opis: "1 request → 1 response", useCase: "CRUD, query, command", przykład: "GetUser, CreateOrder" },
  { typ: "Server Streaming", opis: "1 request → N responses (stream)", useCase: "Feeds, progress, live data", przykład: "SubscribePrices, StreamLogs" },
  { typ: "Client Streaming", opis: "N requests → 1 response", useCase: "File upload, batch insert", przykład: "UploadFile, BulkCreate" },
  { typ: "Bidirectional", opis: "N requests ↔ N responses", useCase: "Chat, gaming, collaboration", przykład: "LiveChat, SharedEditor" },
];

export default function BlogGrpcCoTo() {
  return (
    <Layout>
      <SEOHead
        title="gRPC | Fotz Studio"
        description="gRPC: co to jest, Protocol Buffers, 4 typy komunikacji (Unary/Streaming), gRPC vs REST, narzędzia, load balancing i migracja w mikrousługach."
        canonicalUrl="https://fotz.pl/blog/grpc-co-to-jest-protocol-buffers-mikroserwisy"

        keywords="gRPC co to jest, gRPC definicja, czym jest gRPC, gRPC przykłady, jak działa gRPC, gRPC znaczenie, gRPC przewodnik"

        canonical="https://fotz.pl/blog/grpc-co-to-jest-protocol-buffers-mikroserwisy"
      />
      <ArticleSchema
        title="gRPC — co to jest i jak używać Protocol Buffers w mikroserwisach?"
        description="gRPC: Protocol Buffers, 4 typy komunikacji, gRPC vs REST porównanie, ecosystem (grpc-gateway, gRPC-Web), load balancing i kiedy migrować z REST."
        url="https://fotz.pl/blog/grpc-co-to-jest-protocol-buffers-mikroserwisy"
        datePublished="2024-03-29"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "gRPC", url: "https://fotz.pl/blog/grpc-co-to-jest-protocol-buffers-mikroserwisy" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "gRPC", href: "/blog/grpc-co-to-jest-protocol-buffers-mikroserwisy" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Backend / Mikroserwisy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              gRPC
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              HTTP/2 + Protocol Buffers + type-safe code generation.
              gRPC to domyślny wybór dla komunikacji internal microservice-to-microservice
              gdy performance i type safety są priorytetem.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Protobuf vs JSON", value: "~10x mniejszy" },
                { label: "Typy komunikacji", value: "4 (Unary+3 stream)" },
                { label: "Protokół", value: "HTTP/2" },
                { label: "Twórca", value: "Google (2015)" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-cyan-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typy komunikacji */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 typy komunikacji gRPC</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              gRPC obsługuje nie tylko klasyczny request-response, ale też trzy warianty
              streamingu — natywnie przez HTTP/2.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {grpcStreamingTypes.map((t) => (
              <FadeInView key={t.typ}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{t.typ}</h3>
                  <p className="text-cyan-700 font-mono text-sm mb-2">{t.opis}</p>
                  <p className="text-gray-700 text-sm mb-2">{t.useCase}</p>
                  <p className="text-xs text-gray-500">Przykłady: {t.przykład}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* gRPC vs REST */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">gRPC vs. REST — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              gRPC i REST to komplementarne narzędzia. gRPC wygrywa dla internal
              microservice communication, REST dla public APIs i browser clients.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Aspekt</th>
                  <th className="text-left p-3 font-bold text-cyan-700">gRPC</th>
                  <th className="text-left p-3 font-bold text-gray-700">REST</th>
                </tr>
              </thead>
              <tbody>
                {grpcVsRest.map((row, i) => (
                  <tr key={row.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-gray-900">{row.aspekt}</td>
                    <td className="p-3 text-gray-700">{row.grpc}</td>
                    <td className="p-3 text-gray-700">{row.rest}</td>
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
