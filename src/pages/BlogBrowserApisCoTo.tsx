import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest IndexedDB i jak używać Dexie.js w React?",
    answer: "IndexedDB: wbudowana baza danych w przeglądarce. Asynchroniczna. Klucz-wartość + indeksy. Transakcje. Offline storage. Dużo większy limit niż localStorage (GBs). Struktury: Database, Object Store (tabela), Index, Transaction. Dexie.js: najpopularniejsza abstrakcja nad IndexedDB. Czysty API, TypeScript. Promise-based. Instalacja: npm install dexie dexie-react-hooks. Definicja bazy: import Dexie, {Table} from 'dexie'. class MyDatabase extends Dexie { todos!: Table. constructor() { super('mydb'). this.version(1).stores({ todos: '++id, title, completed, createdAt' }) } }. export const db = new MyDatabase(). CRUD: await db.todos.add({title: 'Buy milk', completed: false}). await db.todos.where('completed').equals(false).toArray(). await db.todos.update(id, {completed: true}). await db.todos.delete(id). React hooks: import {useLiveQuery} from 'dexie-react-hooks'. const todos = useLiveQuery(() => db.todos.toArray()). Reaktywne — auto-update gdy dane się zmieniają. Dexie Cloud: sync między urządzeniami. Offline-first. Conflict resolution. Komercyjny. Alternatywy: idb (Google) — minimalna warstwa nad IDB. localforage — localStorage-like API, IDB pod spodem. RxDB — reaktywna baza offline. PouchDB + CouchDB sync. OPFS (Origin Private File System): dostęp do pliku na dysku przez przeglądarkę. FileSystemDirectoryHandle, FileSystemFileHandle. Szybszy zapis niż IndexedDB. Dla dużych binarnych danych.",
  },
  {
    question: "Web Share API i Clipboard API — natywne udostępnianie i schowek?",
    answer: "Web Share API: natywny share dialog systemu operacyjnego. navigator.share({title: 'React Tips', text: 'Sprawdź ten artykuł', url: 'https://fotz.pl'}). Otwiera natywny share sheet iOS/Android. Udostępnianie do: Instagram, WhatsApp, SMS, email, AirDrop. navigator.canShare({files: [file]}) — sprawdź czy plik można udostępnić. Udostępnianie plików: const file = new File([blob], 'screenshot.png', {type: 'image/png'}). navigator.share({files: [file], title: 'Screenshot'}). Wymogi: HTTPS. User gesture (click event). Wsparcie: Chrome Android, Safari iOS i macOS, Edge. Brak Firefox desktop. Fallback: jeśli !navigator.share — własne przyciski social. React hook: function useShare() { return {canShare: !!navigator.share, share: navigator.share.bind(navigator)} }. Clipboard API: nowoczesny dostęp do schowka. await navigator.clipboard.writeText('tekst'). const text = await navigator.clipboard.readText(). Wymaga: user gesture do write. Permissions do read (prompt). Kopiowanie obrazów: const blob = await (await fetch(imageUrl)).blob(). await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]). Stary API (synchroniczny): document.execCommand('copy') — deprecated. Nadal działający jako fallback. React: const copyToClipboard = async (text) => { await navigator.clipboard.writeText(text). setCopied(true). setTimeout(() => setCopied(false), 2000) }. useClipboard hook (react-use): prosty hook z state.",
  },
  {
    question: "File System Access API — dostęp do plików na dysku z przeglądarki?",
    answer: "File System Access API: prawdziwy dostęp do pliku systemu operacyjnego. Otwieranie pliku: const [fileHandle] = await window.showOpenFilePicker({types: [{description: 'Text Files', accept: {'text/plain': ['.txt']}}]}). const file = await fileHandle.getFile(). const contents = await file.text(). Zapis do pliku: const fileHandle = await window.showSaveFilePicker({suggestedName: 'document.txt'}). const writable = await fileHandle.createWritable(). await writable.write(content). await writable.close(). Directory: const dirHandle = await window.showDirectoryPicker(). for await (const [name, handle] of dirHandle.entries()) { console.log(name, handle.kind) }. Uprawnienia: fileHandle.requestPermission({mode: 'readwrite'}). await fileHandle.queryPermission(). Persystencja handle: IndexedDB do przechowywania fileHandle. Przy powrocie: sprawdź permissions. React + FSAPI: użyj useRef na fileHandle. Brak stanu React dla handles. Async operacje. OPFS (Origin Private File System): prywatny filesystem dla origin. Szybki (synchroniczny w Web Worker). Bez user gesture. Brak natywnego picker. Idealne dla: SQLite WASM, lokalny cache, prywatne dane. SQLite WASM w OPFS: @sqlite.org/sqlite-wasm. Pełny SQLite w przeglądarce. Trwałe dane w OPFS. Wsparcie FSAPI: Chrome 86+, Edge 86+. Safari 15.2+ (save dialog). Firefox: OPFS tylko. Fallback: input type='file'. Biblioteki: browser-fs-access (Google) — prosty wrapper z fallback.",
  },
  {
    question: "WebBluetooth, Web Serial i WebUSB — sprzęt przez przeglądarkę?",
    answer: "Web Bluetooth API: połączenie z urządzeniami BT LE z przeglądarki. navigator.bluetooth.requestDevice({filters: [{services: ['heart_rate']}]}). const server = await device.gatt.connect(). const service = await server.getPrimaryService('heart_rate'). const characteristic = await service.getCharacteristic('heart_rate_measurement'). characteristic.addEventListener('characteristicvaluechanged', handler). await characteristic.startNotifications(). Zastosowania: fitness devices, IoT sensors, smart home, medical devices. Wymogi: HTTPS. User gesture. Chrome desktop i Android. Nie Safari, nie Firefox. Web Serial API: połączenie z urządzeniami serial (Arduino, mikrokontrolery). const port = await navigator.serial.requestPort(). await port.open({baudRate: 9600}). const reader = port.readable.getReader(). const {value, done} = await reader.read(). Pisanie: const writer = port.writable.getWriter(). await writer.write(new Uint8Array([0x01, 0x02])). Zastosowania: Arduino projects, industrial equipment, GPS receivers, 3D printers. Chrome 89+. WebUSB: dostęp do urządzeń USB. navigator.usb.requestDevice({filters: [{vendorId: 0x2341}]}). await device.open(). Mikrokontrolery, custom hardware. WebHID: Human Interface Devices (gamepads, custom keyboards). navigator.hid.requestDevice(). Bezpieczeństwo: zawsze user gesture. Zawsze HTTPS. Biała lista urządzeń. Nie wszystkie urządzenia dostępne (bezpieczeństwo OS). React przykład: useState dla device, connected status. useEffect cleanup: device.gatt.disconnect().",
  },
  {
    question: "WebOTP, Push Notifications i inne nowoczesne Browser APIs?",
    answer: "WebOTP API: auto-fill SMS OTP (one-time passwords). navigator.credentials.get({otp: {transport: ['sms']}}). SMS format: @example.com #123456 (origin + OTP). Przeglądarka przechwytuje SMS. Auto-wpisuje kod. Zastępuje ręczne kopiowanie. Chrome Android + SMS Retriever API. Payment Request API: natywne okno płatności. new PaymentRequest([{supportedMethods: 'basic-card'}], {total: {label: 'Total', amount: {currency: 'PLN', value: '99.00'}}}). Integracja z Apple Pay, Google Pay, kart. Push Notifications: Service Worker + Push API. Subskrypcja: registration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: vapidKey}). Wysyłanie (backend): web-push library. Endpoint + p256dh + auth. Subtelność: Service Worker musi być zarejestrowany. Notification.requestPermission(). Notifications API: new Notification('Tytuł', {body: 'Treść', icon: '/icon.png'}). Wymaga permission. Background Sync API: synchronizacja gdy offline -> online. Service Worker: self.addEventListener('sync', event => { if (event.tag === 'sync-data') event.waitUntil(syncData()) }). registration.sync.register('sync-data'). Periodic Background Sync: regularne odświeżanie danych. Wymaga 'periodic-background-sync' permission. Beacon API: navigator.sendBeacon(url, data). Garantowane wysłanie przy zamknięciu strony. Nie blokuje unload. Dla analytics. Intersection Observer: obserwuj widoczność elementów. Lazy loading, infinite scroll, analytics. ResizeObserver: obserwuj rozmiar elementu. Lepsza alternatywa dla window resize. Screen Wake Lock: navigator.wakeLock.request('screen'). Zapobiega wygaszaniu ekranu. Dla fitness apps, presentations.",
  },
];

const browserApis = [
  { api: "IndexedDB / Dexie.js", kategoria: "Storage", wsparcie: "Wszystkie przeglądarki", uzycie: "Offline DB, duże dane, sync" },
  { api: "Web Share API", kategoria: "Sharing", wsparcie: "Chrome, Safari, Edge (mobile)", uzycie: "Natywny share sheet iOS/Android" },
  { api: "Clipboard API", kategoria: "Interakcja", wsparcie: "Chrome 66+, FF 63+, Safari 13.1+", uzycie: "Kopiuj tekst i obrazy do schowka" },
  { api: "File System Access API", kategoria: "Storage/Files", wsparcie: "Chrome 86+, Edge 86+", uzycie: "Otwieranie i zapis plików na dysku" },
  { api: "Web Bluetooth / Serial", kategoria: "Hardware", wsparcie: "Chrome desktop i Android", uzycie: "IoT, Arduino, BT LE devices" },
  { api: "WebOTP / Push API", kategoria: "Communication", wsparcie: "Chrome (WebOTP Android)", uzycie: "SMS OTP auto-fill, push powiadomienia" },
];

export default function BlogBrowserApisCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Modern Browser APIs | Fotz Studio"
        description="IndexedDB z Dexie.js (offline baza), Web Share API (natywny share), Clipboard API, File System Access API (OPFS), Web Bluetooth, Web Serial, WebOTP i Push…"
        canonicalUrl="https://fotz.pl/blog/modern-browser-apis-indexeddb-dexie-web-share-clipboard-file-system-2024"

        keywords="Modern Browser APIs co to jest, Modern Browser APIs jak działa, Modern Browser APIs tutorial, Modern Browser APIs przykład, czym jest Modern Browser APIs, Modern Browser APIs dokumentacja, Modern Browser APIs przewodnik"

        canonical="https://fotz.pl/blog/modern-browser-apis-indexeddb-dexie-web-share-clipboard-file-system-2024"
      />
      <ArticleSchema
        title="Modern Browser APIs — IndexedDB Dexie, Web Share, Clipboard, File System, WebBluetooth 2024?"
        description="6 nowoczesnych Browser APIs (IndexedDB/Dexie/Web Share/Clipboard/FSAPI/Web Bluetooth) — offline storage, natywny share, dostęp do plików i sprzętu z przeglądarki."
        url="https://fotz.pl/blog/modern-browser-apis-indexeddb-dexie-web-share-clipboard-file-system-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Modern Browser APIs", url: "https://fotz.pl/blog/modern-browser-apis-indexeddb-dexie-web-share-clipboard-file-system-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-emerald-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Modern Browser APIs", href: "/blog/modern-browser-apis-indexeddb-dexie-web-share-clipboard-file-system-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Web APIs / Browser
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Modern Browser APIs
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              IndexedDB z Dexie.js, Web Share API, Clipboard API, File System Access,
              WebBluetooth, Web Serial i WebOTP — możliwości natywnych aplikacji w przeglądarce.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Offline DB", value: "Dexie.js" },
                { label: "Native share", value: "Web Share" },
                { label: "File access", value: "FSAPI" },
                { label: "Hardware", value: "BT/Serial" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-green-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 Browser APIs — kategorie i wsparcie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              IndexedDB, Web Share, Clipboard, File System Access, Web Bluetooth i WebOTP —
              kategoria, wsparcie przeglądarek i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">API</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kategoria</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wsparcie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Użycie</th>
                </tr>
              </thead>
              <tbody>
                {browserApis.map((a, i) => (
                  <tr key={a.api} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{a.api}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{a.kategoria}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{a.wsparcie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{a.uzycie}</td>
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
