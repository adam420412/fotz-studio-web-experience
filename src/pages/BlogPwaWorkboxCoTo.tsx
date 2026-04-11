import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "PWA — Progressive Web App z vite-plugin-pwa i Workbox?",
    answer: "PWA: Progressive Web App. Instalowalna. Offline. Push Notifications. vite-plugin-pwa: Anthony Fu. Automatyczna konfiguracja Workbox. Instalacja: npm install -D vite-plugin-pwa. vite.config.ts: import {VitePWA} from 'vite-plugin-pwa'. plugins: [VitePWA({registerType: 'autoUpdate', includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'], manifest: {name: 'Moja Aplikacja', short_name: 'MojaApp', description: 'PWA z Vite', theme_color: '#ffffff', background_color: '#ffffff', display: 'standalone', start_url: '/', icons: [{src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png'}, {src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable'}]}, workbox: {globPatterns: ['**/*.{js,css,html,ico,png,svg}']}})]. Manifest: name, short_name, icons, display, theme_color. Ikony: 192x192 i 512x512 wymagane. Maskable icons: padding 10% — @vite-pwa/assets-generator. npx pwa-assets-generator --preset minimal public/logo.svg. Generuje wszystkie rozmiary. Service Worker rejestracja: useRegisterSW z 'virtual:pwa-register/react'. const {needRefresh, updateServiceWorker} = useRegisterSW(). if (needRefresh) — pokaż 'Nowa wersja dostępna'. updateServiceWorker() — aktualizuj. registerType: 'autoUpdate' — automatyczna aktualizacja. registerType: 'prompt' — pokazuj prompt użytkownikowi.",
  },
  {
    question: "Workbox — strategie cache i offline-first?",
    answer: "Workbox: Google. Service Worker toolkit. Strategie cache: CacheFirst — najpierw cache. Dla statycznych assetów (obrazy, fonty). NetworkFirst — najpierw sieć. Dla API, fresh data. NetworkOnly — tylko sieć. StaleWhileRevalidate — cache od razu + odśwież w tle. Świetny dla UI. CacheOnly — tylko cache. Offline app. Konfiguracja Workbox w vite-plugin-pwa: workbox: {runtimeCaching: [{urlPattern: /^https:\/\/api\.example\.com\//, handler: 'NetworkFirst', options: {cacheName: 'api-cache', expiration: {maxEntries: 100, maxAgeSeconds: 24 * 60 * 60}, networkTimeoutSeconds: 10}}, {urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/, handler: 'CacheFirst', options: {cacheName: 'images-cache', expiration: {maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60}}}, {urlPattern: /^https:\/\/fonts\.googleapis\.com\//, handler: 'StaleWhileRevalidate', options: {cacheName: 'google-fonts-cache'}}]}. Cache Storage API: caches.open('my-cache'). cache.add('/offline.html'). cache.match(request). Background Sync: workbox-background-sync. BackgroundSyncPlugin. Kolejkuje requesty offline. Odtwarza gdy online. Workbox Window: import {Workbox} from 'workbox-window'. const wb = new Workbox('/sw.js'). wb.addEventListener('installed', event => {...}). wb.register(). Manual Service Worker z Workbox: import {registerRoute} from 'workbox-routing'. import {CacheFirst, NetworkFirst} from 'workbox-strategies'. import {ExpirationPlugin} from 'workbox-expiration'. registerRoute(({url}) => url.origin === 'https://api.example.com', new NetworkFirst({cacheName: 'api'})).",
  },
  {
    question: "next-pwa — PWA w Next.js App Router?",
    answer: "next-pwa (@ducanh2912/next-pwa): Next.js PWA. Workbox wbudowany. Instalacja: npm install @ducanh2912/next-pwa. next.config.ts: import withPWAInit from '@ducanh2912/next-pwa'. const withPWA = withPWAInit({dest: 'public', cacheOnFrontEndNav: true, aggressiveFrontEndNavCaching: true, reloadOnOnline: true, swMinify: true, fallbacks: {document: '/~offline'}, workboxOptions: {disableDevLogs: true}}). export default withPWA({reactStrictMode: true}). Manifest: app/manifest.ts: import {MetadataRoute} from 'next'. export default function manifest(): MetadataRoute.Manifest { return {name: 'Next.js PWA', short_name: 'NextPWA', description: 'PWA z Next.js', start_url: '/', display: 'standalone', background_color: '#fff', theme_color: '#fff', icons: [{src: '/icon-192.png', sizes: '192x192', type: 'image/png'}, {src: '/icon-512.png', sizes: '512x512', type: 'image/png'}]} }. app/layout.tsx: export const metadata = {manifest: '/manifest.webmanifest'}. Offline page: app/~offline/page.tsx. Pokazuje gdy użytkownik offline. Ikona install: useEffect(() => { window.addEventListener('beforeinstallprompt', (e) => { setDeferredPrompt(e) }) }). button onClick: deferredPrompt?.prompt(). Fallbacks: document (HTML offline page). image. font. audio. video.",
  },
  {
    question: "Push Notifications — Web Push API i VAPID?",
    answer: "Web Push Notifications: PushManager. Service Worker. VAPID keys. Przepływ: przeglądarka pyta o pozwolenie. Notification.requestPermission(). Subskrypcja: registration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC)}). Wysyłka do backendu: POST /api/push-subscribe z subscription. Wysyłka push: backend wysyła do push service. Push service dostarcza do przeglądarki. VAPID keys generowanie: npx web-push generate-vapid-keys. Zapisz PUBLIC i PRIVATE. Backend (Next.js API Route): import webpush from 'web-push'. webpush.setVapidDetails('mailto:admin@example.com', VAPID_PUBLIC, VAPID_PRIVATE). await webpush.sendNotification(subscription, JSON.stringify({title: 'Nowa wiadomość', body: 'Masz nowe powiadomienie', icon: '/icon-192.png', badge: '/badge.png', url: '/notifications'})). Service Worker push event: self.addEventListener('push', event => { const data = event.data?.json(). event.waitUntil(self.registration.showNotification(data.title, {body: data.body, icon: data.icon, badge: data.badge, data: {url: data.url}}))}). SW notificationclick: self.addEventListener('notificationclick', event => { event.notification.close(). event.waitUntil(clients.openWindow(event.notification.data.url))}). Biblioteki: web-push (Node.js). next-web-push. @vite-pwa/plugin. firebase-messaging (FCM alternative).",
  },
  {
    question: "PWA — install prompt, Background Sync i App Shortcuts?",
    answer: "Install Prompt (beforeinstallprompt): const [deferredPrompt, setDeferredPrompt] = useState(null). useEffect(() => { window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(). setDeferredPrompt(e) }) }, []). Przycisk instaluj: const handleInstall = async () => { if (!deferredPrompt) return. deferredPrompt.prompt(). const {outcome} = await deferredPrompt.userChoice. setDeferredPrompt(null) }. Sprawdź czy zainstalowane: window.matchMedia('(display-mode: standalone)').matches. navigator.standalone (iOS Safari). App installed event: window.addEventListener('appinstalled', () => { console.log('PWA zainstalowana') }). Background Sync: Service Worker sync event. self.addEventListener('sync', event => { if (event.tag === 'send-messages') { event.waitUntil(sendPendingMessages()) } }). Rejestracja sync: navigator.serviceWorker.ready.then(sw => sw.sync.register('send-messages')). Przydatne gdy użytkownik offline — formularz zapisuje lokalnie, sync wysyła gdy online. App Shortcuts: manifest.json shortcuts: [{name: 'Nowa wiadomość', short_name: 'Wiadomość', description: 'Napisz nową wiadomość', url: '/new-message', icons: [{src: '/shortcut-message.png', sizes: '192x192'}]}]. Widoczne w menu kontekstowym ikony aplikacji. Periodic Background Sync: periodicSync. Regularne odświeżanie danych. Wymaga pozwolenia. Share Target API: manifest share_target. Odbiór udostępnionych treści. PWA a iOS: iOS 16.4+ obsługuje Push. Web Push dla Safari desktop. Ograniczone wsparcie dla Background Sync.",
  },
];

const pwaFeatures = [
  { funkcja: "vite-plugin-pwa", typ: "Bundler Plugin", opis: "Automatyczna konfiguracja Workbox, manifest, ikony dla Vite" },
  { funkcja: "Workbox CacheFirst", typ: "Cache Strategy", opis: "Cache statycznych assetów — obrazy, fonty, CSS, JS" },
  { funkcja: "Workbox NetworkFirst", typ: "Cache Strategy", opis: "API cache z fallback — fresh data gdy online, cache offline" },
  { funkcja: "@ducanh2912/next-pwa", typ: "Next.js Plugin", opis: "PWA dla Next.js App Router z Workbox i fallback offline" },
  { funkcja: "Web Push + VAPID", typ: "Push API", opis: "Server-sent push notifications — web-push, vapid keys" },
  { funkcja: "Background Sync", typ: "SW API", opis: "Retry offline actions when online — sync event, queue" },
];

export default function BlogPwaWorkboxCoTo() {
  return (
    <Layout>
      <SEOHead
        title="PWA vite-plugin-pwa, Workbox, next-pwa i Web Push Notifications 2024 | Fotz.pl"
        description="Progressive Web App 2024: vite-plugin-pwa (Workbox auto), CacheFirst/NetworkFirst/StaleWhileRevalidate, next-pwa App Router, Web Push VAPID, Background Sync, install prompt."
        canonicalUrl="https://fotz.pl/blog/pwa-vite-plugin-workbox-next-pwa-background-sync-push-notifications-2024"
      />
      <ArticleSchema
        title="PWA vite-plugin-pwa, Workbox, next-pwa i Web Push Notifications 2024?"
        description="vite-plugin-pwa: manifest, ikony, Workbox. Workbox strategie: CacheFirst, NetworkFirst, StaleWhileRevalidate. next-pwa App Router. Web Push VAPID. Background Sync."
        url="https://fotz.pl/blog/pwa-vite-plugin-workbox-next-pwa-background-sync-push-notifications-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "PWA Workbox 2024", url: "https://fotz.pl/blog/pwa-vite-plugin-workbox-next-pwa-background-sync-push-notifications-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "PWA Workbox 2024", href: "/blog/pwa-vite-plugin-workbox-next-pwa-background-sync-push-notifications-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              PWA / Workbox / Service Worker / Web Push
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PWA, Workbox i Web Push 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              vite-plugin-pwa, Workbox strategie, next-pwa App Router,
              Web Push VAPID i Background Sync.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Vite PWA", value: "vite-plugin-pwa" },
                { label: "Cache Strategy", value: "Workbox" },
                { label: "Next.js PWA", value: "next-pwa" },
                { label: "Offline retry", value: "BG Sync" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PWA 2024 — funkcje i strategie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              vite-plugin-pwa, Workbox, next-pwa, Web Push i Background Sync —
              typ i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {pwaFeatures.map((f, i) => (
                  <tr key={f.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.opis}</td>
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
