import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest WebRTC i do czego służy?",
    answer: "WebRTC (Web Real-Time Communication) to otwarty standard i zestaw APIs który umożliwia real-time komunikację peer-to-peer (P2P) bezpośrednio w przeglądarce — bez potrzeby pluginów, zewnętrznych aplikacji ani serwera pośredniczącego dla mediów. Główne możliwości WebRTC: Audio i wideo streaming — video calls, video conferencing. Data channels — peer-to-peer transfer danych (pliki, wiadomości, game state). Screen sharing — udostępnianie ekranu (getDisplayMedia). Kto używa WebRTC: Google Meet, Microsoft Teams (hybryda), Discord, Twitch (low-latency mode), Zoom (w części), Jitsi Meet (open-source), Daily.co, Whereby. Kluczowe APIs przeglądarki: getUserMedia() — dostęp do kamery i mikrofonu. getDisplayMedia() — screen sharing. RTCPeerConnection — główne API do zarządzania połączeniem P2P. RTCDataChannel — data channel dla dowolnych danych. Techniczne filary: ICE (Interactive Connectivity Establishment) — mechanizm przebijania przez NAT/firewall. STUN — odkrywa publiczne IP urządzenia. TURN — relay server gdy bezpośrednie P2P niemożliwe. SDP (Session Description Protocol) — opisuje możliwości i parametry połączenia. Kodeki: dla video: VP8, VP9, H.264 (AV1 emerging). Dla audio: Opus (dominujący, adaptacyjny bitrate).",
  },
  {
    question: "Jak działa WebRTC — ICE, STUN, TURN i SDP?",
    answer: "WebRTC Signaling i ICE: Podstawowy problem: jak dwa urządzenia za różnymi NAT-ami i firewallami mogą bezpośrednio komunikować się? Odpowiedź: ICE (Interactive Connectivity Establishment) + STUN + TURN. STUN (Session Traversal Utilities for NAT): klient wysyła request do STUN server → otrzymuje swój publiczny IP i port. Tak oba peers mogą poznać swoje publiczne adresy. Publiczne STUN serwery: stun.l.google.com:19302. TURN (Traversal Using Relays around NAT): gdy bezpośrednie P2P jest zablokowane (symmetric NAT, corporate firewall) — TURN server relayuje ruch. Droższe (bandwidth cost) ale zawsze działa. Coturn — popularny open-source TURN server. SDP (Session Description Protocol): opisuje co peer oferuje — kodeki, rozdzielczość, bitrate, SRTP klucze. Offer/Answer model: Alice tworzy Offer SDP → wysyła do Bob przez Signaling Server → Bob tworzy Answer SDP → wysyła z powrotem. Signaling Server: WebRTC nie definiuje jak wymienić SDP i ICE candidates — to zależy od aplikacji. Najczęściej: WebSocket server, lub XMPP/SIP. Tylko do wymiany metadanych — media flow jest P2P. ICE Candidates: STUN i TURN serwery dostarczają 'candidates' (adresy IP:port). ICE agent testuje wszystkie candidates i wybiera najlepsze bezpośrednie połączenie. DTLS + SRTP: WebRTC wymaga szyfrowania — DTLS do key exchange, SRTP do encrypted media.",
  },
  {
    question: "WebRTC Topologie — Mesh, SFU, MCU?",
    answer: "Topologie WebRTC dla multi-party calls: Mesh (P2P Mesh): każdy uczestnik łączy się bezpośrednio z każdym innym. N uczestników = N*(N-1) połączeń na każdym kliencie. Zalety: brak serwera media. Wady: exponential bandwidth i CPU growth. Skaluje do ~4-6 uczestników (powyżej klient ma problem). SFU (Selective Forwarding Unit): centralny serwer który otrzymuje media od każdego uczestnika i selektywnie forward-uje do innych. Serwer NIE przetwarza mediów — tylko routuje. Zalety: dobry balans CPU/bandwidth. Klient wysyła 1 stream (do SFU), odbiera N streams (od SFU per participant). Skaluje do dziesiątek/setek uczestników. Narzędzia SFU: mediasoup (Node.js, open-source), LiveKit (Go, open-source, CNCF), ion-sfu (Go, Pion), Janus Gateway, Jitsi Videobridge. MCU (Multipoint Control Unit): centralny serwer który decode'uje, mix-uje i re-encode'uje wszystkie strumienie w jeden. Klient wysyła 1 stream i odbiera 1 mix'owany stream. Zalety: minimalne wymagania klienta (legacy devices). Wady: serwer musi procesować wszystkie media — drogie w CPU. Wybór: małe grupy (2-6): Mesh. Standardowe video conferencing: SFU. Legacy devices, słabe sieci: MCU. Komercyjne SaaS SFU: Twilio Video, Daily.co, Agora, Vonage Video API.",
  },
  {
    question: "Jak zbudować aplikację WebRTC — praktyczny przewodnik?",
    answer: "Budowanie aplikacji WebRTC: Minimalny stos: Signaling Server (Node.js + Socket.io lub WebSocket). STUN server (Google lub własny). TURN server (coturn lub usługa jak Twilio TURN). Frontend WebRTC API. Krok 1 — Signaling Server: prosty WebSocket server który relay-uje SDP offers/answers i ICE candidates między peers. Krok 2 — Frontend (przeglądarka): getUserMedia() → lokalny stream. createPeerConnection() z ice servers config. addTrack() → dodaj lokalny stream do RTCPeerConnection. createOffer() → wyślij przez signaling server. setRemoteDescription() → ustaw answer od remote peer. onicecandidate → wysyłaj ICE candidates przez signaling. ontrack → odbierz remote stream → wyświetl w video element. Krok 3 — ICE servers config: iceServers: [{urls: 'stun:stun.l.google.com:19302'}, {urls: 'turn:your-turn-server', username: '...', credential: '...'}]. Gotowe SDK i serwisy: LiveKit SDK — open-source, self-hostable SFU. Simple Peer — uproszczone WebRTC API. Daily.co SDK — komercyjne, managed. Twilio Video SDK — komercyjne. Pion (Go) — WebRTC implementacja w Go dla serwerów. Testowanie: getStats() API — aktualna jakość (packet loss, jitter, bitrate). Wierszyk simulating bad network: Chrome Network throttling. WebRTC Internals: chrome://webrtc-internals — debug połączeń.",
  },
  {
    question: "WebRTC a WebSockets — kiedy używać czego?",
    answer: "WebRTC vs. WebSockets: WebSockets: dwukierunkowe połączenie klient-serwer. Serwer jest w środku każdej komunikacji. Niskie latency vs. HTTP, ale wyższe niż P2P. Use case: chat, live updates, collaborative editing, game state sync przez serwer. WebRTC Data Channels: P2P (serwer nie jest w środku). Ultra-niskie latency gdy directConnection. Niezawodne lub unreliable mode (jak TCP lub UDP). Use case: P2P file transfer, real-time multiplayer gaming, collaborative editing P2P. Porównanie latency: WebSocket przez serwer: 50-200ms (zależy od lokalizacji serwera). WebRTC P2P (bezpośrednie): 10-50ms (zależy od dystansu peer-to-peer). WebRTC przez TURN relay: podobne do WebSocket. Praktyczne wskazówki: WebRTC = złożone (ICE, STUN, TURN, SDP — dużo do zarządzania). WebSocket = proste i przewidywalne. Hybrydowe podejście: WebSocket dla signaling i non-realtime komunikacji + WebRTC dla media/low-latency data. Nowe trendy: WebTransport — nowoczesna alternatywa do WebSockets oparta na QUIC/HTTP3. Niższe latency niż WebSocket, multiplexing. Wciąż emerging. WHIP/WHEP — nowe protokoły WebRTC dla live streaming (WebRTC Ingest). Używają WebRTC jako transport dla live streams (ultra-low-latency live streaming).",
  },
];

const webrtcStack = [
  { warstwa: "Aplikacja", opis: "Video UI, controls, chat", technologia: "React, Vue, Svelte + WebRTC APIs" },
  { warstwa: "Media Engine", opis: "Enkodowanie/dekodowanie audio i video", technologia: "libwebrtc (Chromium/Firefox built-in)" },
  { warstwa: "Transport", opis: "DTLS + SRTP — szyfrowany transport mediów", technologia: "UDP (peer-to-peer) / TCP fallback" },
  { warstwa: "ICE/NAT Traversal", opis: "Odkrywanie public IP, przebijanie przez NAT", technologia: "STUN (Google), TURN (coturn/Twilio)" },
  { warstwa: "Signaling", opis: "Wymiana SDP i ICE candidates", technologia: "WebSocket (Socket.io, ws) lub SIP/XMPP" },
  { warstwa: "SFU (multi-party)", opis: "Routing mediów dla multi-user calls", technologia: "LiveKit, mediasoup, Jitsi Videobridge" },
];

const webrtcTopologies = [
  { topologia: "P2P Mesh", uczest: "2-6", serverLoad: "Brak", clientLoad: "Wysoki (N-1 streams)", use: "Simple 1-on-1 calls" },
  { topologia: "SFU", uczest: "Do setek", serverLoad: "Routing (niski CPU)", clientLoad: "Umiarkowany (1 up, N down)", use: "Video conferencing" },
  { topologia: "MCU", uczest: "Dowolna liczba", serverLoad: "Bardzo wysoki (encode/decode)", clientLoad: "Minimalny (1 up, 1 down)", use: "Legacy devices, dial-in" },
];

export default function BlogWebRtcCoTo() {
  return (
    <Layout>
      <SEOHead
        title="WebRTC | Fotz Studio"
        description="WebRTC: definicja, ICE/STUN/TURN, SDP, topologie (Mesh/SFU/MCU), jak budować aplikację, LiveKit, mediasoup i WebRTC vs. WebSockets."
        canonicalUrl="https://fotz.pl/blog/webrtc-co-to-jest-jak-budowac-real-time-komunikacje"

        keywords="WebRTC co to jest, WebRTC definicja, czym jest WebRTC, WebRTC przykłady, jak działa WebRTC, WebRTC znaczenie, WebRTC przewodnik"

        canonical="https://fotz.pl/blog/webrtc-co-to-jest-jak-budowac-real-time-komunikacje"
      />
      <ArticleSchema
        title="WebRTC — co to jest i jak budować real-time komunikację?"
        description="WebRTC: ICE/STUN/TURN, SDP, topologie Mesh/SFU/MCU, stack (6 warstw), jak zbudować aplikację, LiveKit i WebRTC vs. WebSockets."
        url="https://fotz.pl/blog/webrtc-co-to-jest-jak-budowac-real-time-komunikacje"
        datePublished="2024-04-04"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "WebRTC", url: "https://fotz.pl/blog/webrtc-co-to-jest-jak-budowac-real-time-komunikacje" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "WebRTC", url: "/blog/webrtc-co-to-jest-jak-budowac-real-time-komunikacje" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-sky-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Web / Real-Time
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              WebRTC
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Video calls, screen sharing i P2P file transfer bezpośrednio w przeglądarce —
              bez pluginów. WebRTC to standard który napędza Google Meet,
              Discord i tysiące aplikacji real-time.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Standard", value: "W3C / IETF" },
                { label: "Topologie", value: "Mesh / SFU / MCU" },
                { label: "Latency P2P", value: "10-50ms" },
                { label: "SFU Open-Source", value: "LiveKit" },
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

      {/* Stack */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">WebRTC Stack — 6 warstw</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              WebRTC to nie jeden protokół — to stos warstw od UI
              przez media engine do ICE i signaling.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {webrtcStack.map((w, i) => (
              <FadeInView key={w.warstwa}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <h3 className="font-bold text-gray-900">{w.warstwa}</h3>
                    </div>
                    <p className="text-gray-700 text-sm">{w.opis}</p>
                    <p className="text-sky-700 font-medium text-sm">{w.technologia}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Topologie */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Topologie multi-party WebRTC</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dla więcej niż dwóch uczestników — wybór topologii determinuje
              wymagania serwerowe i doświadczenie użytkownika.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Topologia</th>
                  <th className="text-left p-3 font-bold text-gray-900">Uczestnicy</th>
                  <th className="text-left p-3 font-bold text-gray-900">Server Load</th>
                  <th className="text-left p-3 font-bold text-gray-900">Client Load</th>
                  <th className="text-left p-3 font-bold text-gray-900">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {webrtcTopologies.map((t, i) => (
                  <tr key={t.topologia} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-900">{t.topologia}</td>
                    <td className="p-3 text-gray-700">{t.uczest}</td>
                    <td className="p-3 text-gray-700">{t.serverLoad}</td>
                    <td className="p-3 text-gray-700">{t.clientLoad}</td>
                    <td className="p-3 text-gray-600">{t.use}</td>
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

      <RelatedArticles currentArticleId="webrtc-co-to-jest-jak-budowac-real-time-komunikacje" />
      <ContactSection />
    </Layout>
  );
}
