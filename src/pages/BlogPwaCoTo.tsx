import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Progressive Web App (PWA) i jakie ma zalety?",
    answer: "Progressive Web App (PWA) to aplikacja webowa która używa nowoczesnych technologii webowych aby zapewnić doświadczenie podobne do natywnej aplikacji mobilnej — instalacja na ekranie głównym, praca offline, push notifications, szybkie ładowanie. Kluczowe cechy PWA (wg Google): Reliable — działa offline lub przy słabym połączeniu (Service Worker). Fast — szybkie ładowanie i płynna animacja (Performance optimizations). Engaging — instalacja na home screen, push notifications, full-screen. Trzy filary PWA: Service Worker — JavaScript worker działający w tle, poza stroną. Przechwytuje requesty sieciowe, cache'uje zasoby, obsługuje push notifications. Web App Manifest — plik JSON opisujący aplikację (name, icons, start_url, display mode). Odpowiada za 'Add to Home Screen'. HTTPS — PWA wymagają HTTPS (Service Workers działają tylko na secure origin). Zalety vs. natywna aplikacja: brak konieczności publikacji w App Store. Automatyczne aktualizacje (jak strona, nie jak app). Jeden codebase (web + mobile). Mniejszy rozmiar. Linkable (URL). Wyzwania: słabsze API dostęp vs. natywne (Camera, Bluetooth pełne możliwości). iOS Safari ma historycznie słabsze PWA wsparcie (choć poprawiło się od iOS 16.4). Przykłady PWA: Twitter Lite, Pinterest, Uber, Flipkart (50% redukcja rozmiaru, 3x faster load).",
  },
  {
    question: "Service Worker — jak działa i jak go implementować?",
    answer: "Service Worker (SW): Service Worker to JavaScript plik działający w osobnym wątku od głównej strony — w tle, bez dostępu do DOM. Jest proxy sieciowym — może przechwytywać i modyfikować network requests. Lifecycle: Install — SW pobierany i instalowany. Activate — SW aktywowany, stary SW deregistrowany. Fetch — SW interceptuje requesty. Rejestracja: if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js'); }. Strategie cache: Cache First — sprawdź cache, jeśli brak → network. Idealny dla statycznych zasobów (JS, CSS, images). Network First — sprawdź network, jeśli offline → cache. Idealny dla API data. Stale While Revalidate — zwróć cache natychmiast, zaktualizuj cache w tle. Network Only — zawsze network (nie cache). Cache Only — zawsze cache (pre-cached resources). Offline support: pre-cache w Install evencie kluczowe zasoby (HTML shell, JS, CSS). W Fetch evencie — zwróć cache gdy offline. Background Sync: kolejkuj operacje gdy offline → wykonaj gdy połączenie wróci. Narzędzia: Workbox (Google) — biblioteka do SW management. Pozwala na declarative caching strategies. next-pwa — plugin dla Next.js. Vite PWA Plugin — dla Vite projektów. Push Notifications: Service Worker odbiera push events od serwera nawet gdy strona jest zamknięta.",
  },
  {
    question: "Web App Manifest — jak skonfigurować instalację PWA?",
    answer: "Web App Manifest: Plik JSON który kontroluje jak aplikacja wygląda gdy jest zainstalowana. Podstawowa konfiguracja manifest.json: name — pełna nazwa aplikacji. short_name — skrócona nazwa na ekranie głównym. description — opis. icons — tablica ikon w różnych rozmiarach (minimum: 192x192 i 512x512 PNG). start_url — URL który otwiera się po kliknięciu ikony. display — 'standalone' (wygląda jak natywna app), 'fullscreen', 'minimal-ui', 'browser'. background_color — kolor splash screen. theme_color — kolor paska nawigacji. Linkowanie w HTML: link rel='manifest' href='/manifest.json'. Add to Home Screen (A2HS): Chrome na Android automatycznie proponuje 'Add to Home Screen' gdy spełnione kryteria (HTTPS, Service Worker, Manifest). iOS: użytkownik musi ręcznie użyć 'Add to Home Screen' przez Safari Share menu. iOS nie wyświetla automatycznego banera. Instalacja prompt: beforeinstallprompt event w Chrome. Możesz opóźnić lub customizować prompt. window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); // show your own button }). Splash Screen: generowany automatycznie z icons, name i background_color. Shortcuts — app shortcuts (jak long-press na Android): 'shortcuts' array w manifest. Scope: ogranicza które URL-e są traktowane jako część aplikacji.",
  },
  {
    question: "PWA vs. natywna aplikacja vs. React Native — kiedy wybrać PWA?",
    answer: "PWA vs. Native vs. React Native vs. Flutter: Native iOS/Android: pełen dostęp do wszystkich APIs urządzenia. Najlepsza performance. App Store distribution (discovery). Wymaga osobnych codebases (lub React Native/Flutter). React Native / Flutter: jeden codebase dla iOS + Android. Lepszy dostęp do native APIs vs. PWA. Nadal wymaga App Store publikacji. PWA: jeden codebase web + mobile. Brak App Store. Ograniczony dostęp do native APIs. Nie wymaga instalacji (może być używana jak strona). Kiedy PWA jest właściwym wyborem: Budżet — PWA tańszy w budowie i maintenance. Jeden team webowy bez potrzeby native dev. Aplikacja content-driven (e-commerce, news, social). Użytkownicy z wolniejszym internetem lub starszymi telefonami (Twitter Lite!). B2B narzędzie gdzie users desktopowi dominują ale potrzebujesz mobilnego. Szybki time-to-market. Kiedy native lub RN jest lepszym wyborem: gry (high-performance graphics, Bluetooth, ARKit/ARCore). Aplikacje z deep integration z systemem (VPN, contacts, health). AR/VR aplikacje. App Store presence jest ważna dla discovery. API Gap: PWA nie ma pełnego dostępu do: Bluetooth (ograniczone — Web Bluetooth API na Chrome). NFC (limitowane). Background sync zaawansowane. Contacts API (ograniczone). Push Notifications na iOS historycznie problematyczne (fix iOS 16.4+).",
  },
  {
    question: "Jak mierzyć i optymalizować PWA performance?",
    answer: "PWA Performance: Core Web Vitals dla PWA: LCP (Largest Contentful Paint) — powinno być poniżej 2.5s. INP (Interaction to Next Paint) — poniżej 200ms. CLS (Cumulative Layout Shift) — poniżej 0.1. Narzędzia: Lighthouse — audyt PWA + Performance + Best Practices. Sprawdza: Service Worker, Manifest, offline support, add to home screen. PWABuilder (Microsoft) — generuje manifest, Service Worker, MSIX package dla Windows Store. Chrome DevTools → Application → Service Workers. Installability checklist: HTTPS, Service Worker, Manifest z wymaganymi polami, icons 192 i 512. Performance optimizations dla PWA: App Shell Pattern — cache HTML shell (navigation, layout) osobno od content. Treść ładuj dynamicznie przez API. Pre-cache critical routes w Service Worker. Code splitting per route. Lazy load images (Intersection Observer). Critical CSS inlining. Offline page — dedykowana strona offline gdy sieć niedostępna i content nie jest w cache. Metryki specyficzne dla PWA: Install rate — odsetek użytkowników którzy instalują PWA. Engagement installed vs. not-installed (zainstalowane PWA mają zwykle wyższy engagement). Session length per installed users. Lighthouse PWA score — sprawdź listę wymagań. TWA (Trusted Web Activity): publikuj PWA w Google Play Store przez TWA — wrapper który uruchamia PWA w Chrome Custom Tab bez browser UI. Pełna integracja z Play Store.",
  },
];

const pwaFeatures = [
  { feature: "Service Worker + Offline", opis: "Cache zasoby i API responses. Aplikacja działa bez połączenia.", technologia: "Service Worker API, Workbox, Cache API" },
  { feature: "Add to Home Screen", opis: "Użytkownik instaluje PWA jak natywną app bez App Store.", technologia: "Web App Manifest, beforeinstallprompt" },
  { feature: "Push Notifications", opis: "Powiadomienia push nawet gdy app jest zamknięta.", technologia: "Push API, Notification API, Service Worker" },
  { feature: "Background Sync", opis: "Kolejkuj operacje offline, wykonaj gdy połączenie wróci.", technologia: "Background Sync API, Service Worker" },
  { feature: "App Shortcuts", opis: "Long-press na ikonie → quick actions jak natywna app.", technologia: "Web App Manifest shortcuts" },
  { feature: "Share Target API", opis: "PWA może odbierać content udostępniany z innych aplikacji.", technologia: "Web Share Target API, Manifest" },
];

const pwaBenchmarks = [
  { firma: "Twitter Lite (PWA)", wynik: "70% redukcja data usage, 65% sesje dłuższe, 75% więcej tweetów" },
  { firma: "Flipkart Lite (India)", wynik: "70% wzrost konwersji, 3x mniejszy rozmiar vs natywna" },
  { firma: "Pinterest PWA", wynik: "60% wzrost engagement, 44% wzrost revenue z ads" },
  { firma: "Uber PWA", wynik: "Działa na 2G, ładuje w 3s, 50x mniejszy niż natywna app" },
];

export default function BlogPwaCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Progressive Web App (PWA) — co to jest i jak wdrożyć? | Fotz.pl"
        description="PWA: Service Worker, Web App Manifest, offline support, push notifications, PWA vs natywna aplikacja, Workbox i jak mierzyć performance."
        canonical="https://fotz.pl/blog/progressive-web-app-pwa-co-to-jest-jak-wdrozyz"

        keywords="Progressive Web App (PWA) co to jest, Progressive Web App (PWA) definicja, czym jest Progressive Web App (PWA), Progressive Web App (PWA) przykłady, jak działa Progressive Web App (PWA), Progressive Web App (PWA) znaczenie, Progressive Web App (PWA) przewodnik"
      />
      <ArticleSchema
        title="Progressive Web App (PWA) — co to jest i jak wdrożyć?"
        description="PWA: 3 filary (Service Worker/Manifest/HTTPS), 6 kluczowych features, offline strategie, PWA vs. Native, Workbox i Core Web Vitals dla PWA."
        url="https://fotz.pl/blog/progressive-web-app-pwa-co-to-jest-jak-wdrozyz"
        datePublished="2024-04-08"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "PWA", url: "https://fotz.pl/blog/progressive-web-app-pwa-co-to-jest-jak-wdrozyz" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "PWA", url: "/blog/progressive-web-app-pwa-co-to-jest-jak-wdrozyz" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-violet-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Web / Mobile
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Progressive Web App
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jeden codebase — strona, mobile app i desktop app jednocześnie.
              PWA to natywne doświadczenie (offline, push, installacja)
              bez App Store i bez oddzielnego mobile teamu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "3 filary", value: "SW/Manifest/HTTPS" },
                { label: "Offline", value: "Service Worker" },
                { label: "Przykład", value: "Twitter Lite" },
                { label: "Narzędzie", value: "Workbox (Google)" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-violet-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych features PWA</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              PWA nie to tylko 'strona która działa offline' — to kompletny
              zestaw API które dają natywne możliwości.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {pwaFeatures.map((f) => (
              <FadeInView key={f.feature}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{f.feature}</h3>
                  <p className="text-gray-700 text-sm mb-2">{f.opis}</p>
                  <p className="text-xs text-violet-700 font-medium">{f.technologia}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PWA case studies — rezultaty w liczbach</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Największe PWA wdrożenia pokazują dramatyczne zyski w engagement,
              konwersji i performance — szczególnie na rynkach emerging markets.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {pwaBenchmarks.map((b) => (
              <FadeInView key={b.firma}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <h3 className="font-bold text-gray-900">{b.firma}</h3>
                    <p className="text-violet-700 font-medium text-sm">{b.wynik}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
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

      <RelatedArticles currentArticleId="progressive-web-app-pwa-co-to-jest-jak-wdrozyz" />
      <ContactSection />
    </Layout>
  );
}
