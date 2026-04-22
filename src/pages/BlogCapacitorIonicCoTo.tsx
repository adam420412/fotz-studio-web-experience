import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Capacitor — natywne możliwości dla aplikacji webowych?",
    answer: "Capacitor: Ionic Team. Webview + natywne API. iOS i Android z jednej bazy kodu web. Jak Cordova ale nowoczesny. Instalacja w istniejącej aplikacji: npm install @capacitor/core @capacitor/cli. npx cap init. npm install @capacitor/ios @capacitor/android. npx cap add ios. npx cap add android. Konfiguracja: capacitor.config.ts. appId: 'pl.fotz.app'. appName: 'MyApp'. webDir: 'dist'. Budowanie: npm run build. npx cap sync — kopiuje web do native. npx cap open ios — otwiera Xcode. npx cap open android — otwiera Android Studio. Natywne API: @capacitor/camera. @capacitor/filesystem. @capacitor/geolocation. @capacitor/push-notifications. @capacitor/status-bar. @capacitor/splash-screen. @capacitor/app. Przykład Camera: import {Camera, CameraResultType} from '@capacitor/camera'. const photo = await Camera.getPhoto({resultType: CameraResultType.Uri, quality: 90}). console.log(photo.webPath). Plugins community: capacitor-community/sqlite. capacitor-community/bluetooth-le. @capacitor-mlkit/. Live Reload: npx cap run ios --livereload --external. Hot reload na urządzeniu fizycznym. Capacitor vs Cordova: Capacitor — nowoczesny, TypeScript-first. Cordova — starszy, callback-based. Capacitor wygrywa. vs React Native: Capacitor — webview. RN — native components. Różne tradeoffs.",
  },
  {
    question: "Ionic Framework — UI komponenty dla web i mobile?",
    answer: "Ionic: komponenty UI cross-platform. Web Components. Działa z React, Vue, Angular, Svelte. Standalone bez frameworka. Instalacja z React: npm install @ionic/react @ionic/react-router ionicons. Wygląd natywny: iOS Material Design na iOS. Android Material Design na Android. Automatycznie. Komponenty: IonButton, IonInput, IonCard, IonList, IonItem. IonHeader, IonToolbar, IonContent. IonTabs, IonTabBar, IonTabButton. IonModal, IonAlert, IonToast, IonActionSheet. IonLoading, IonProgressBar. Nawigacja: IonRouterOutlet + React Router. IonNav dla wewnętrznej nawigacji. Stack navigation (push/pop). Tab navigation. Formularze: IonInput — styled input. IonTextarea. IonSelect, IonCheckbox, IonToggle. IonDatetime — date picker. Gesty: swipe back na iOS. Pull to refresh: IonRefresher. IonInfiniteScroll — infinite list. Virtual scroll: IonVirtualScroll. Custom theme: CSS variables. --ion-color-primary: #3880ff. --ion-background-color: #ffffff. Wsparcie dla dark mode. Ionic + Capacitor: idealny stos. Ionic — UI. Capacitor — native API. Full mobile app. Ionic + Angular: tradycyjny stos. TypeScript first. Formularze reactive. Ionic + React (modern): React hooks. JSX templates. Popularne 2024. Kiedy Ionic: team webowy. Chcesz iOS + Android z jednej bazy. Wygląd natywny ważny.",
  },
  {
    question: "Capacitor i Ionic vs React Native vs Flutter — kiedy wybrać?",
    answer: "Capacitor + Ionic: zalety: jedna baza kodu (web + mobile + desktop). Webowcy mogą tworzyć. PWA gratis. Duże community. Wady: webview performance. Nie native components. Animacje mogą być wolniejsze. React Native: zalety: native components. Lepszy performance. Duże community. Expo upraszcza. Wady: wymaga RN wiedzy. Brak PWA. Osobna baza kodu od web. Cross-platform OK. Flutter: zalety: własny rendering engine. Szybki. Piękne animacje. One codebase web + mobile + desktop. Wady: Dart (nie JS). Oddzielna baza kodu. Mniejszy ekosystem. Kiedy Capacitor+Ionic: istniejąca aplikacja web -> mobile. Team web-only. PWA + mobile z tej samej bazy. Szybki MVP. Kiedy React Native: performance krytyczny. Natywne UX ważne. Team zna React. Długoterminowy projekt mobile. Kiedy Flutter: cross-platform mobile + desktop. Animacje. Dart akceptowalny. Google backing. Tauri dla desktop: Tauri + web app -> desktop. Znacznie mniejszy bundle niż Electron. Capacitor + Tauri = web do mobile + desktop. Natywne API: Capacitor plugins. Tauri commands. Kiedy wybrać co: MVP szybko -> Ionic+Capacitor. Gra mobilna -> Flutter. Social app z kamerą -> React Native (Expo). Desktop app -> Tauri.",
  },
  {
    question: "PWA 2024 — co możliwe bez natywnego kodu?",
    answer: "PWA capabilities 2024: File System Access API: showOpenFilePicker(), showSaveFilePicker(). Odczyt/zapis plików. Chrome + Edge. Web Share API: navigator.share({title, text, url}). Udostępnianie natywnie. Background Sync: SyncManager. Synchronizacja gdy offline. Workbox. Periodic Background Sync: powtarzalna synchronizacja. Chrome. Push Notifications: PushManager.subscribe(). Service Worker push event. Działają nawet gdy app zamknięta. Web Bluetooth: navigator.bluetooth.requestDevice(). Połącz z BLE urządzeniami. Chrome. Web USB: navigator.usb.requestDevice(). Web Serial: navigator.serial.requestPort(). WebNFC: navigator.nfc — odczyt NFC tagów. Chrome Android. Badging API: navigator.setAppBadge(count). Licznik na ikonie. Desktop i mobile. Window Controls Overlay: custom title bar. Installed apps. Vibration API: navigator.vibrate([200, 100, 200]). Web Speech API: SpeechRecognition. Głosowe wejście. Geolocation: navigator.geolocation.getCurrentPosition(). Dokładna lokalizacja. Media Session API: MediaSession.metadata. Kontrolki powiadomień. Clipboard: navigator.clipboard.writeText(). Paste bez pozwolenia. Screen Wake Lock: navigator.wakeLock.request('screen'). Ekran nie gasi się. Contact Picker: navigator.contacts.select(). iOS Safari 14.5+. PWA limity: brak Background App Refresh (iOS). Brak Bluetooth stabilny (iOS). Brak Push natywnych (iOS — od 16.4). Brak Face ID / Touch ID bezpośrednio.",
  },
  {
    question: "Expo i React Native deep link, push notifications i OTA updates?",
    answer: "Expo EAS (Expo Application Services): EAS Build — cloud build. EAS Submit — do App Store/Google Play. EAS Update — OTA (over-the-air) updates. EAS CLI: npm install -g eas-cli. eas login. eas build --platform ios. Push Notifications: expo-notifications. import * as Notifications from 'expo-notifications'. Notifications.getExpoPushTokenAsync(). Wyślij przez Expo Push API. APNs + FCM obsłużone. scheduleNotificationAsync: lokalne notyfikacje. setNotificationHandler: jak obsługiwać gdy app otwarta. Deep Linking: expo-linking. Linking.createURL('profile/123'). W app.json: scheme: 'myapp'. myapp://profile/123. Universal Links (iOS) i App Links (Android). expo-router: file-based routing. deep links automatycznie z routes. React Navigation: @react-navigation/native. NavigationContainer linking prop. config.screens = {Profile: 'profile/:id'}. OTA Updates: EAS Update. Expo Updates API. fetch i apply update. Rollout: 5% usersów najpierw. Sprawdź logi. Rollback. Bez review App Store dla JS zmiany. CodePush (Microsoft) alternatywa. Expo Go: test bez buildu. QR code + scan. Nie production. Expo dev builds: własny natywny build z Expo Go-like DX. expo-dev-client. Expo SDK 52 (2024-12): React Native 0.76. New Architecture domyślnie. Expo Router 4. Expo Camera 2. SQLite async API. Expo Modules API dla custom native.",
  },
];

const mobileOptions = [
  { technologia: "Capacitor + Ionic", podejscie: "Webview + Web Components", targetPlatform: "iOS, Android, Web, Desktop", kiedy: "Web team, PWA + mobile, szybki MVP" },
  { technologia: "React Native (Expo)", podejscie: "Native components, JS bridge", targetPlatform: "iOS, Android, Web (partial)", kiedy: "Performance, native UX, Expo EAS" },
  { technologia: "Flutter", podejscie: "Własny rendering engine", targetPlatform: "iOS, Android, Web, Desktop", kiedy: "Animacje, cross-platform, Dart OK" },
  { technologia: "Tauri + Web", podejscie: "System Webview + Rust", targetPlatform: "Desktop (Windows/Mac/Linux)", kiedy: "Desktop app, mały bundle, Rust" },
  { technologia: "PWA", podejscie: "Service Worker + Web APIs", targetPlatform: "Wszystkie przeglądarki", kiedy: "Bez app store, offline, notifications" },
  { technologia: "Kotlin Multiplatform", podejscie: "Shared logic, native UI", targetPlatform: "iOS, Android", kiedy: "Kotlin team, shared business logic" },
];

export default function BlogCapacitorIonicCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Capacitor, Ionic, PWA i Expo | Fotz Studio"
        description="Cross-platform mobile 2024: Capacitor (native API dla web apps), Ionic (UI components), PWA capabilities (File System, Push, Bluetooth), Expo SDK 52 i…"
        canonical="https://fotz.pl/blog/capacitor-ionic-pwa-expo-cross-platform-mobile-web-2024"

        keywords="Capacitor, Ionic, PWA i Expo co to jest, Capacitor, Ionic, PWA i Expo definicja, czym jest Capacitor, Ionic, PWA i Expo, Capacitor, Ionic, PWA i Expo przykłady, jak działa Capacitor, Ionic, PWA i Expo, Capacitor, Ionic, PWA i Expo znaczenie, Capacitor, Ionic, PWA i Expo przewodnik"

        canonical="https://fotz.pl/blog/capacitor-ionic-pwa-expo-cross-platform-mobile-web-2024"
      />
      <ArticleSchema
        title="Capacitor, Ionic, PWA i Expo — cross-platform mobile z web technologii 2024?"
        description="6 opcji cross-platform mobile (Capacitor+Ionic/React Native/Flutter/Tauri/PWA/KMP) — webview vs native, PWA capabilities 2024 i Expo SDK 52 nowości."
        url="https://fotz.pl/blog/capacitor-ionic-pwa-expo-cross-platform-mobile-web-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Cross-platform mobile 2024", url: "https://fotz.pl/blog/capacitor-ionic-pwa-expo-cross-platform-mobile-web-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Cross-platform mobile 2024", url: "/blog/capacitor-ionic-pwa-expo-cross-platform-mobile-web-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Mobile / Capacitor / PWA / Cross-platform
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cross-platform Mobile 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Capacitor + Ionic (web to mobile), PWA capabilities,
              Expo SDK 52 i porównanie z React Native i Flutter.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Web to Mobile", value: "Capacitor" },
                { label: "UI Kit", value: "Ionic" },
                { label: "No Store", value: "PWA" },
                { label: "OTA Updates", value: "Expo EAS" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 technologii cross-platform mobile — podejście i kiedy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Capacitor+Ionic, React Native, Flutter, Tauri, PWA i KMP —
              podejście, platformy docelowe i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Technologia</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Platformy</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {mobileOptions.map((m, i) => (
                  <tr key={m.technologia} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{m.technologia}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{m.podejscie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{m.targetPlatform}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{m.kiedy}</td>
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

      <RelatedArticles currentArticleId="capacitor-ionic-pwa-expo-cross-platform-mobile-web-2024" />
      <ContactSection />
    </Layout>
  );
}
