import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "WebSocket vs SSE vs Long Polling — czym się różnią?",
    answer: "Long Polling: klient wysyła request, serwer trzyma połączenie otwarte do czasu nowych danych (lub timeout ~30s), potem zwraca odpowiedź, klient natychmiast wysyła nowy request. Zalety: działa wszędzie, przez wszystkie proxy i firewalle. Wady: overhead HTTP per request, latencja (min. 1 RTT per message), skalowanie (utrzymanie otwartych połączeń). Server-Sent Events (SSE): jednostronne połączenie Server -> Client. HTTP/1.1 streaming (Content-Type: text/event-stream). Serwer wysyła eventy: 'data: {json}\n\n'. Klient: EventSource API. Automatyczny reconnect. Zalety: prostota, działa przez proxy/firewalle (HTTP), HTTP/2 multiplexing (wiele streams), natywne wsparcie w przeglądarkach. Wady: tylko serwer -> klient (unidirectional), max 6 połączeń per domain w HTTP/1.1. WebSocket: pełne dwukierunkowe połączenie. Handshake HTTP Upgrade, potem protokół WS. Zalety: bidirectional, niski overhead (brak HTTP headers per message), sub-10ms latencja, binary support (ArrayBuffer). Wady: nie działa przez wszystkie proxy, wymaga specjalnego wsparcia w load balancerach, brak automatycznego reconnect. WebTransport (QUIC): nowy standard, QUIC zamiast TCP, datagram i stream transport, Google Chrome 97+.",
  },
  {
    question: "Kiedy używać WebSocket, a kiedy SSE?",
    answer: "Używaj WebSocket gdy: aplikacja wymaga bidirectional komunikacji (chat, multiplayer games, collaborative editing). Real-time low-latency (trading, live coding, whiteboarding). Binary data streaming (video, audio). Sub-100ms latencja krytyczna. Używaj SSE gdy: serwer pushuje dane do klienta (feed, powiadomienia, live updates). Unidirectional wystarczy (dashboard, stock ticker, live blog). Prosta implementacja bez bibliotek. HTTP/2 environment (SSE skaluje lepiej). Chcesz automatyczny reconnect bez kodu. Używaj Long Polling gdy: środowisko gdzie WebSocket i SSE mogą być blokowane przez proxy. Starsze przeglądarki (IE11). Bardzo rzadkie aktualizacje (co kilka minut) — SSE/WS marnuje zasoby. Frameworki i librarie: WebSocket — Socket.io (z fallback na polling), ws (Node.js), Gorilla WebSocket (Go). SSE — EventSource (native), ssestream (Node), fanout/SSE. MQTT nad WebSocket — IoT use cases. Phoenix Channels (Elixir) — abstrakcja nad WS. ActionCable (Rails) — WS dla Rails. Ktor WebSocket (Kotlin). Skalowanie WebSocket: sticky sessions (klient zawsze do tego samego serwera) lub Redis Pub/Sub do przekazywania wiadomości między serwerami. Kafka jako message broker.",
  },
  {
    question: "Socket.io — jak działa i kiedy używać?",
    answer: "Socket.io: biblioteka do real-time komunikacji z fallback mechanizmem. Transport negotiation: próbuje WebSocket, jeśli nie działa — fallback do HTTP long polling. Automatyczny reconnect z exponential backoff. Heartbeat/ping-pong. Rooms i namespaces: logiczne grupowanie klientów. socket.join('room1') — dołącz do pokoju. io.to('room1').emit('event', data) — wyślij do wszystkich w pokoju. Namespaces: /chat, /admin — osobne przestrzenie. Events: socket.on('event', data => ...) — listener. socket.emit('event', data) — wyślij do jednego klienta. io.emit('event', data) — broadcast do wszystkich. Acknowledgements: callback potwierdzający odbiór. socket.emit('event', data, (response) => ...). Middleware: socket.use() — autentykacja, rate limiting. Adapter: domyślnie in-memory. Redis Adapter — multi-server deployment. MongoDB Adapter. Wady Socket.io: overhead w stosunku do natywnego WS. Wersja klienta musi pasować do serwera. Nie działa z natywnym WebSocket API (wymaga Socket.io client). Alternatywy: Ably, Pusher (SaaS), Centrifugo, PubNub. Centrifugo: open-source, Go, obsługuje WebSocket, SSE, HTTP streaming, SockJS.",
  },
  {
    question: "WebSocket w Kubernetes i load balancerach — jak skonfigurować?",
    answer: "Wyzwania WebSocket w K8s: sticky sessions — klient musi trafić na ten sam pod przez całe połączenie. Load Balancer round-robin zrywa WS. Rozwiązania: Nginx Ingress — proxy_read_timeout 3600s (domyślnie 60s — za krótkie). proxy_send_timeout 3600s. Włącz upgrade negotiation. AWS ALB — obsługuje WebSocket natywnie (sticky sessions przez cookies). Traefik — natywne WebSocket support. Sticky Sessions: Cookie-based affinity w Nginx Ingress (nginx.ingress.kubernetes.io/affinity: cookie). Podproblem: rolling updates zrywają połączenia. Rozwiązanie: preStop hook z drenowaniem. Horizontal scaling: Redis Pub/Sub adapter — wiadomości propagowane między podami. NATS jako alternativa. Architecture: Gateway (WebSocket) -> Kafka -> Microservices -> Kafka -> Gateway. Monitoring WS: metryki — active connections, messages/sec, connection duration. Prometheus websocket_connections_total. Grafana dashboard. Load testing: k6 (WebSocket scenario), Artillery, Gatling. k6 WS API: ws.connect() z callbacks. Timeout i rate limiting: tokeny, żeby zapobiec abuse. Server: max connections per IP. Client: max reconnect attempts.",
  },
  {
    question: "MQTT i CoAP — protokoły dla IoT real-time?",
    answer: "MQTT (Message Queuing Telemetry Transport): protokół pub/sub dla IoT. Niski overhead (2 bajty nagłówek vs HTTP setki bajtów). Działa nad TCP lub WebSocket. QoS levels: QoS 0 — At most once (fire and forget, może zgubić). QoS 1 — At least once (gwarantowana dostawa, możliwe duplikaty). QoS 2 — Exactly once (gwarantowana, brak duplikatów, największy overhead). Retain messages: ostatnia wiadomość zachowana na brokerze — nowy subscriber dostaje ją od razu. Last Will: wiadomość wysyłana gdy klient się rozłączy (device offline notification). Brokery MQTT: Mosquitto (open-source, lekki). EMQX (enterprise, klaster). HiveMQ (enterprise, Java). AWS IoT Core (SaaS). CloudMQTT (SaaS). MQTT 5.0 — user properties, request/response, shared subscriptions, topic alias. CoAP (Constrained Application Protocol): protokół dla urządzeń z ograniczonymi zasobami. RESTful nad UDP. Observe mode — subskrypcja na zasób. Małe payloady, idealne dla microcontrollerów. AMQP (Advanced Message Queuing Protocol): RabbitMQ. Enterprise messaging. Porównanie: WebSocket — przeglądarka, bidirectional, HTTP transport. SSE — przeglądarka, serwer->klient, HTTP. MQTT — IoT, pub/sub, TCP/WS, QoS levels. CoAP — IoT, REST, UDP. AMQP — enterprise messaging, zaawansowane routing.",
  },
];

const protocolComparison = [
  { protokol: "WebSocket", kierunek: "Bidirectional", transport: "TCP (WS/WSS)", overhead: "Niski (po handshake)", reconnect: "Manualny", zastosowanie: "Chat, games, collaboration" },
  { protokol: "SSE (EventSource)", kierunek: "Server -> Client", transport: "HTTP/1.1, HTTP/2", overhead: "Średni (HTTP headers)", reconnect: "Automatyczny", zastosowanie: "Live feeds, notifications, dashboards" },
  { protokol: "Long Polling", kierunek: "Bidirectional (sekwencyjnie)", transport: "HTTP", overhead: "Wysoki (per request)", reconnect: "Automatyczny", zastosowanie: "Legacy, restrykcyjne proxy" },
  { protokol: "MQTT", kierunek: "Pub/Sub", transport: "TCP lub WS", overhead: "Bardzo niski (2B header)", reconnect: "Wbudowany (QoS)", zastosowanie: "IoT, embedded, mobile" },
  { protokol: "WebTransport", kierunek: "Bidirectional", transport: "QUIC (UDP)", overhead: "Niski", reconnect: "Manualny", zastosowanie: "Gry, media streaming (Chrome 97+)" },
  { protokol: "gRPC streaming", kierunek: "Bidirectional", transport: "HTTP/2", overhead: "Niski (Protobuf)", reconnect: "Manualny", zastosowanie: "Mikroserwisy, wewnętrzne API" },
];

export default function BlogRealtimeCommsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="WebSocket vs SSE vs Long Polling — real-time komunikacja w aplikacjach webowych | Fotz.pl"
        description="WebSocket vs SSE vs Long Polling: porównanie protokołów real-time, Socket.io, MQTT dla IoT, WebSocket w Kubernetes, skalowanie i load balancing."
        canonicalUrl="https://fotz.pl/blog/websocket-sse-long-polling-real-time-komunikacja-socket-io-mqtt"

        keywords="WebSocket vs SSE vs Long Polling co to jest, WebSocket vs SSE vs Long Polling definicja, czym jest WebSocket vs SSE vs Long Polling, WebSocket vs SSE vs Long Polling przykłady, jak działa WebSocket vs SSE vs Long Polling, WebSocket vs SSE vs Long Polling znaczenie, WebSocket vs SSE vs Long Polling przewodnik"
      />
      <ArticleSchema
        title="WebSocket vs SSE vs Long Polling — real-time komunikacja w aplikacjach webowych"
        description="Porównanie 6 protokołów real-time (WebSocket/SSE/Long Polling/MQTT/WebTransport/gRPC), Socket.io, WebSocket w K8s, MQTT dla IoT."
        url="https://fotz.pl/blog/websocket-sse-long-polling-real-time-komunikacja-socket-io-mqtt"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Real-time komunikacja", url: "https://fotz.pl/blog/websocket-sse-long-polling-real-time-komunikacja-socket-io-mqtt" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Real-time komunikacja", href: "/blog/websocket-sse-long-polling-real-time-komunikacja-socket-io-mqtt" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Backend / Networking
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real-time komunikacja
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              WebSocket, SSE, Long Polling, MQTT i WebTransport — kiedy który
              protokół wybrać, jak skalować w Kubernetes i jak działają za kulisami.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Bidirectional", value: "WebSocket" },
                { label: "Server push", value: "SSE" },
                { label: "Fallback + rooms", value: "Socket.io" },
                { label: "IoT protocol", value: "MQTT" },
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

      {/* Porównanie protokołów */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 protokołów real-time</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy protokół optymalizuje inny aspekt — latencję, overhead, odporność na proxy czy zużycie baterii.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Protokół</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kierunek</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Transport</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Overhead</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Reconnect</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zastosowanie</th>
                </tr>
              </thead>
              <tbody>
                {protocolComparison.map((p, i) => (
                  <tr key={p.protokol} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.protokol}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.kierunek}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.transport}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.overhead}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.reconnect}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.zastosowanie}</td>
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
