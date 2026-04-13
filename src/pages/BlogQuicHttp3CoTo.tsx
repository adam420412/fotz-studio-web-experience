import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest QUIC i HTTP/3 i dlaczego powstały?",
    answer: "QUIC to nowoczesny protokół transportowy opracowany przez Google (2012), a następnie standaryzowany przez IETF (RFC 9000, 2021). HTTP/3 to trzecia wersja protokołu HTTP która używa QUIC zamiast TCP jako transport. Historia: HTTP/1.1 (1997) — request-response na TCP, head-of-line blocking. HTTP/2 (2015) — multiplexing na jednym TCP connection, nagłówki HPACK. Ale nadal na TCP — jeden pakiet loss blokuje wszystkie streamy. QUIC (2012/2021) — Google zaczął od eksperymentu, IETF standaryzował jako RFC 9000. HTTP/3 (2022, RFC 9114) — HTTP semantics over QUIC. Problem z TCP: TCP jest protokołem z lat 70-tych, głęboko wbudowanym w kernel OS. Trudno go modyfikować (deployment przez OS updates). QUIC działa na UDP — może być wdrożony i aktualizowany jak zwykła biblioteka (bez OS update). Dlaczego QUIC jest lepszy niż TCP+TLS: Faster connection setup: QUIC łączy transport handshake + TLS 1.3 w jeden round-trip (0-RTT dla powracających klientów). TCP+TLS 1.3: 2-3 round-trips przed pierwszym danymi. Connection Migration: QUIC connections surwiwują zmianę IP (np. telefon przełącza z WiFi na LTE) bez reconnect. Adopcja: do 2024 około 25-30% ruchu internetowego używa HTTP/3. Cloudflare, Google, Facebook — wszyscy obsługują HTTP/3.",
  },
  {
    question: "QUIC vs. TCP — kluczowe różnice techniczne?",
    answer: "QUIC vs. TCP — różnice techniczne: Warstwa transportu: TCP — warstwa 4 (Transport), zaimplementowany w kernel OS. QUIC — działa na UDP (warstwa 4), ale sam jest user-space protokołem. Multiplexing: HTTP/2 over TCP: wiele streamów, ale wszystkie blokowane gdy jeden pakiet zginie (TCP Head-of-Line Blocking). QUIC: każdy stream jest niezależny. Utrata pakietu na streamie A nie blokuje streamu B. Connection Setup: TCP + TLS 1.3: SYN, SYN-ACK, ACK (1 RT) + TLS Hello (1 RT) = 2 RTT. QUIC + TLS 1.3: 1 RTT dla nowych połączeń, 0-RTT dla powracających (session resumption). Connection Migration: TCP: connection identifier to 4-tuple (src IP, src port, dst IP, dst port). Zmiana IP = reset połączenia. QUIC: connection ID jest niezależny od IP. Telefon zmienia sieć → connection przeżywa. Encryption: TCP: TLS jest opcjonalne (add-on). QUIC: TLS 1.3 jest wbudowane — QUIC jest zawsze szyfrowany. Nie można używać QUIC bez szyfrowania. Congestion Control: TCP: congestion control w kernel (CUBIC, BBR, etc.). QUIC: congestion control w user-space — łatwiej aktualizować (Chromium aktualizuje algorytm bez OS update). Realistic Performance Gains: największe zyski na stratnych połączeniach (mobilnych, Wi-Fi). Na doskonałej sieci LAN — marginalna różnica. Mobilne sieci — QUIC daje 10-30% improvement w load time.",
  },
  {
    question: "HTTP/3 adopcja — jak włączyć na serwerze i sprawdzić wsparcie?",
    answer: "HTTP/3 adopcja i konfiguracja: Wsparcie przeglądarek: Chrome (85+), Firefox (88+), Safari (14+), Edge (88+). Prawie 100% nowoczesnych przeglądarek. Wsparcie serwerów: Nginx (nginx-quic branch / nginx 1.25+ experimental). Caddy — HTTP/3 domyślnie włączone. LiteSpeed / OpenLiteSpeed — pełne wsparcie. Apache — mod_quic (experimental). CDN z HTTP/3: Cloudflare — HTTP/3 domyślnie włączone dla wszystkich stron. Fastly, AWS CloudFront — wsparcie. Google Cloud Load Balancer. Jak sprawdzić HTTP/3: Firefox DevTools → Network → Protocol column (h3). Chrome: chrome://flags → QUIC. curl --http3 https://example.com (curl 7.66+ z QUIC support). Konfiguracja Nginx (experimental): listen 443 quic reuseport; listen 443 ssl; ssl_protocols TLSv1.3; add_header Alt-Svc 'h3=\":443\"'; — nagłówek informuje przeglądarkę o dostępności HTTP/3. Caddy jest najłatwiejszym serwerem do HTTP/3 — zero dodatkowej konfiguracji. Alt-Svc header: kluczowy mechanizm — serwer informuje klienta że obsługuje HTTP/3 na danym porcie. Przeglądarka używa HTTP/1.1 lub HTTP/2 za pierwszym razem, potem upgradeuje do HTTP/3.",
  },
  {
    question: "0-RTT i connection migration — jak działają w praktyce?",
    answer: "0-RTT (Zero Round-Trip Time): Cel: dla powracających klientów, dane można wysłać natychmiast bez czekania na handshake. Jak działa: pierwsze połączenie — normalny handshake (1 RTT). Serwer wysyła Session Ticket (zaszyfrowane dane sesji). Następne połączenie — klient dołącza Session Ticket + dane w pierwszym pakiecie. Serwer może deszyfrować natychmiast. Zysk: eliminuje cały handshake dla returning users. Różnica 1 RTT może być 50-200ms na wolnych połączeniach. Bezpieczeństwo 0-RTT: podatność na Replay Attacks — atakujący może retransmitować first-flight pakiety. Rozwiązanie: 0-RTT dane nie mogą powodować side effects (safe methods only — GET, nie POST). Serwer może limitować 0-RTT do idempotentnych operacji. Connection Migration: Scenariusz: user na telefonie przełącza z WiFi na 4G. IP address się zmienia. TCP: connection reset — przeglądarka musi się reconnectować, re-download strony. QUIC: connection ID pozwala na seamless migration. Użytkownik nie zauważa przełączenia sieci. IETF QUIC vs. gQUIC: gQUIC (Google QUIC) — wewnętrzna implementacja Google, różni się od IETF QUIC. IETF QUIC (RFC 9000) — standardowy, interoperabilny. Nowoczesne implementacje używają IETF QUIC. Implementacje QUIC: quic-go (Go), ngtcp2 (C), msquic (Microsoft C), lsquic (LiteSpeed), quinn (Rust), MsQuic.",
  },
  {
    question: "QUIC dla aplikacji — kiedy konfigurować i ograniczenia?",
    answer: "QUIC dla aplikacji — praktyczne wskazówki: Kiedy HTTP/3 jest najważniejszy: Mobilne aplikacje webowe — największy benefit (zmiany sieci, packet loss). High-latency connections (geograficznie odległe). Aplikacje z wieloma równoczesnymi requestami (multiplexing bez HoL blocking). API z wieloma małymi requestami. Kiedy korzyść jest mniejsza: LAN lub szybka kablowa sieć — różnica minimalna. Aplikacje z małą liczbą requestów (1-2 na stronę). Kiedy QUIC może być gorszy: Firewalle blokujące UDP — korporacyjne sieci często blokują UDP 443. QUIC musi fallback na TCP+TLS (Alt-Svc). UDP jest często rate-limited przez ISPs. Wdrożenie: zacznij od CDN (Cloudflare) — zero server-side pracy. Użyj Caddy jeśli self-hosted — HTTP/3 out of the box. Monitoruj fallback rate (czy firewalle blokują QUIC). HTTP/3 i WebTransport: WebTransport to nowe Web API oparte na QUIC/HTTP/3. Pozwala na bidirectional streams i datagrams bezpośrednio z przeglądarki. Alternatywa dla WebSockets z lepszym performance. Use case: gaming, real-time collaboration, video streaming. Status: Chrome 97+, Firefox eksperymentalne. QUIC jako transport layer: coraz więcej protokołów eksperymentuje z QUIC jako transport (MQTT over QUIC, gRPC over QUIC, DNS over QUIC). Szybsze handshake i connection migration to wartość dla każdego długożyciowego połączenia.",
  },
];

const httpComparison = [
  { aspekt: "Protokół bazowy", http1: "TCP", http2: "TCP", http3: "QUIC (UDP)" },
  { aspekt: "Multiplexing", http1: "Brak", http2: "Tak", http3: "Tak (bez HoL Blocking)" },
  { aspekt: "Head-of-Line Blocking", http1: "Tak (request)", http2: "Tak (TCP packet)", http3: "Brak" },
  { aspekt: "TLS", http1: "Opcjonalne", http2: "Wymagane (praktycznie)", http3: "Wbudowane (zawsze)" },
  { aspekt: "Connection Setup", http1: "1 RTT + TLS", http2: "1 RTT + 1 RTT TLS", http3: "1 RTT (0-RTT dla returning)" },
  { aspekt: "Header Compression", http1: "Brak", http2: "HPACK", http3: "QPACK" },
  { aspekt: "Connection Migration", http1: "Brak", http2: "Brak", http3: "Tak (zmiana IP)" },
  { aspekt: "Kernel dependency", http1: "Wysoka", http2: "Wysoka", http3: "Niska (user-space)" },
];

const quicBenefits = [
  { benefit: "Faster Connection Setup", detail: "0-RTT dla powracających userów vs. 2 RTT dla TCP+TLS", impact: "50-200ms szybszy cold start" },
  { benefit: "Brak HoL Blocking", detail: "Utrata pakietu blokuje tylko jeden stream, nie całe połączenie", impact: "Lepsza performance na stratnych sieciach" },
  { benefit: "Connection Migration", detail: "Połączenie przeżywa zmianę IP (WiFi → LTE)", impact: "Brak reconnect przy zmianie sieci" },
  { benefit: "Always Encrypted", detail: "TLS 1.3 wbudowane — nie można używać QUIC bez szyfrowania", impact: "Security by default" },
];

export default function BlogQuicHttp3CoTo() {
  return (
    <Layout>
      <SEOHead
        title="QUIC i HTTP/3 | Fotz Studio"
        description="QUIC i HTTP/3: definicja, QUIC vs TCP, 0-RTT, connection migration, HoL Blocking, adopcja, konfiguracja serwera (Nginx, Caddy) i WebTransport."
        canonicalUrl="https://fotz.pl/blog/quic-http3-co-to-jest-jak-wplywa-na-web-performance"

        keywords="QUIC i HTTP/3 co to jest, QUIC i HTTP/3 definicja, czym jest QUIC i HTTP/3, QUIC i HTTP/3 przykłady, jak działa QUIC i HTTP/3, QUIC i HTTP/3 znaczenie, QUIC i HTTP/3 przewodnik"

        canonical="https://fotz.pl/blog/quic-http3-co-to-jest-jak-wplywa-na-web-performance"
      />
      <ArticleSchema
        title="QUIC i HTTP/3 — co to jest i jak wpływa na web performance?"
        description="QUIC i HTTP/3: techniczne różnice vs TCP+HTTP/2, 0-RTT, connection migration, 4 kluczowe korzyści, konfiguracja i WebTransport."
        url="https://fotz.pl/blog/quic-http3-co-to-jest-jak-wplywa-na-web-performance"
        datePublished="2024-04-07"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "QUIC i HTTP/3", url: "https://fotz.pl/blog/quic-http3-co-to-jest-jak-wplywa-na-web-performance" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "QUIC i HTTP/3", href: "/blog/quic-http3-co-to-jest-jak-wplywa-na-web-performance" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Web Performance / Protokoły
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              QUIC i HTTP/3
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              TCP ma 50 lat i nie może być łatwo zmodyfikowany.
              QUIC to następca — szybszy handshake, brak head-of-line blocking,
              connection migration i wbudowane TLS 1.3. HTTP/3 to HTTP na QUIC.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Standard IETF", value: "RFC 9000 (2021)" },
                { label: "Adopcja (2024)", value: "25-30% ruchu" },
                { label: "Setup vs TCP+TLS", value: "0-RTT returning" },
                { label: "Cloudflare", value: "HTTP/3 domyślnie" },
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

      {/* Korzyści */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 kluczowe korzyści QUIC / HTTP/3</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Największe zyski na stratnych i mobilnych sieciach.
              Na doskonałej kablowej sieci różnica jest marginalna.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {quicBenefits.map((b) => (
              <FadeInView key={b.benefit}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{b.benefit}</h3>
                  <p className="text-gray-700 text-sm mb-2">{b.detail}</p>
                  <p className="text-xs text-cyan-700 font-medium">{b.impact}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Porównanie HTTP versions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">HTTP/1.1 vs. HTTP/2 vs. HTTP/3</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ewolucja od TCP-based HTTP/1.1 do QUIC-based HTTP/3 —
              każda wersja rozwiązuje inny bottleneck.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Aspekt</th>
                  <th className="text-left p-3 font-bold text-gray-700">HTTP/1.1</th>
                  <th className="text-left p-3 font-bold text-blue-700">HTTP/2</th>
                  <th className="text-left p-3 font-bold text-cyan-700">HTTP/3</th>
                </tr>
              </thead>
              <tbody>
                {httpComparison.map((row, i) => (
                  <tr key={row.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-gray-900">{row.aspekt}</td>
                    <td className="p-3 text-gray-600">{row.http1}</td>
                    <td className="p-3 text-gray-700">{row.http2}</td>
                    <td className="p-3 text-cyan-800 font-medium">{row.http3}</td>
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

      <RelatedArticles currentArticleId="quic-http3-co-to-jest-jak-wplywa-na-web-performance" />
      <ContactSection />
    </Layout>
  );
}
