import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "React Native New Architecture — co to JSI, Fabric i TurboModules?",
    answer: "New Architecture: fundamentalna zmiana React Native (stabilna od RN 0.73, domyślna 0.76). Stara architektura: JavaScript Bridge. Asynchroniczny. Serializacja JSON. Jeden wątek JS. Nowa architektura: JSI (JavaScript Interface). Synchroniczny. Bezpośredni dostęp do natywnych obiektów. Brak serialiacji. JSI (JavaScript Interface): C++ warstwa. JavaScript może bezpośrednio wywoływać native code. Brak pośredniego serialization. Synchronous i asynchronous. Hermes: JSI natively. V8 (opcjonalnie). TurboModules: lazy-loaded native modules. Inicjalizacja na żądanie (nie wszystkie na start). Szybszy start aplikacji. Synchroniczne wywołania przez JSI. Fabric: nowy system renderowania. React Native Renderer przepisany w C++. Shadow Tree po stronie C++ (nie JavaScript). Synchroniczne aktualizacje UI. Event loop shared z JavaScript. Bridgeless Mode: brak starego Bridge. Wszystko przez JSI. Pełna new architecture. RN 0.76 domyślnie. Korzyści: szybszy start (TurboModules lazy loading). Brak frame drops przy scroll. Synchroniczna komunikacja. Lepsza integracja z Concurrent Features React. Wartości shared: SharedValue w Reanimated 3. WorkletRuntime. Bez bridge dla animacji. Migracja: npx @react-native-community/cli. Sprawdź biblioteki (caniusereactnative.dev). Expo SDK 52: nowa architektura domyślnie.",
  },
  {
    question: "Worklets i Reanimated 3 z nową architekturą?",
    answer: "React Native Reanimated 3: animacje na UI thread. Bez bridge bottleneck. 60/120fps native. Worklets: funkcje wykonywane na UI thread. 'worklet' dyrektywa. function myAnimation() {'worklet'. // runs on UI thread. return withSpring(1) }. useSharedValue: SharedValue bridgeless. const position = useSharedValue(0). useAnimatedStyle: reactive style. const style = useAnimatedStyle(() => ({ transform: [{translateX: position.value}] })). withSpring, withTiming, withSequence, withDelay: natywne animacje. Layout Animations: FadeIn, SlideInLeft, ZoomIn. Na UI thread. Brak JS thread bloków. Gesture Handler 2 + Reanimated: GestureDetector. Gesture.Pan().onUpdate((e) => { position.value = e.translationX }). Bezpośrednio na UI thread. Bez event bridge. useAnimatedScrollHandler: scroll events na UI thread. onScroll — bezpośredni. Shared Transitions: podobne do View Transitions CSS. sharedTransitionTag prop. Animacja między ekranami. React Navigation + Reanimated. Skia (React Native Skia): 2D grafika na UI thread. Canvas rendering. Custom animations. @shopify/react-native-skia. SharedValue integration. WorkletRuntime: oddzielny runtime JS. Uruchamiaj kod w tle. Nie blokuje UI i JS thread. createWorkletRuntime. FlashList (@shopify/flash-list): virtualized FlatList replacement. Recycled cells. Reanimated integration. 10x szybszy dla dużych list.",
  },
  {
    question: "Expo SDK 52 i new architecture — setup i migracja?",
    answer: "Expo SDK 52 (2024): New Architecture domyślnie. Expo Router v4. React 19 support. Bridgeless mode. Nowy projekt z New Arch: npx create-expo-app@latest --template. Automatycznie New Architecture. Expo Go: ograniczone wsparcie New Arch. Expo Development Client polecany. npx expo start --dev-client. Istniejący projekt migracja: Zaktualizuj Expo SDK: npx expo install expo@^52. Sprawdź compatibility: npx expo-doctor. Włącz New Arch: app.json: { expo: { newArchEnabled: true } }. lub package.json: { expo: { newArchEnabled: true } }. Sprawdź natywne moduły: nie wszystkie wspierają New Arch. npx react-native-community/cli doctor. caniusereactnative.dev — sprawdź biblioteki. EAS Build: Expo Application Services. Buduj w chmurze. eas.json konfiguracja. eas build --platform all. EAS Update: Over-the-air updates. npx eas update. Instant JS updates. Expo Modules API: tworzenie natywnych modułów. Swift + Kotlin. TypeScript types automatyczne. JSI kompatybilne. Expo DOM Components: web components w React Native. Expo SDK 52 feature. Hybrydowe aplikacje. Problemy migracji: biblioteki bez New Arch support (sprawdź GitHub issues). MMKV — wspiera. react-native-maps — sprawdź wersję. Sentry — wspiera. Firebase — sprawdź @react-native-firebase. Hermes: domyślny engine. Szybszy start. JSI natywny.",
  },
  {
    question: "React Native Skia, MMKV i nowoczesne narzędzia ekosystemu?",
    answer: "@shopify/react-native-skia: 2D canvas w React Native. 60/120fps na UI thread. SharedValue integracja. Rysowanie: Canvas, Path, Circle, Rect, Text. Efekty: blur, shadow, gradient. Animacje: useSharedValue + withTiming. Shaders: GLSL shaders (uproszczone). Realistyczne efekty. Zdjęcia z filtrami. Image transforms. react-native-mmkv: AsyncStorage replacement. Synchroniczny! 30x szybszy. SharedPreferences/UserDefaults. Szyfrowanie AES. const storage = new MMKV(). storage.set('key', 'value'). storage.getString('key'). Zustand middleware: createJSONStorage(() => mmkvStorage). Persist state. Szybko i bezpiecznie. React Navigation v7: Group layout API. Static configuration. Better TypeScript. Screen preloading. Nowe animacje. react-native-screens: Fabric natywne. Lepszy memory management. react-native-gesture-handler 2: GestureDetector. Composable gestures. Simultaneous gestures. UI thread tylko. Expo Router v4: file-based routing. Universal (mobile + web). Typed routes. Groups layout. Splash screen API. react-query + MMKV: persistQueryClient. MMKV jako storage. Offline-first apps. Background sync. WatermelonDB: high-performance local DB. SQLite + Loki.js. Reactive queries. Sync z serwerem. Dla złożonych danych. Notifee: local push notifications. Scheduling. Channels (Android). Categories (iOS). Rich notifications. Background tasks.",
  },
  {
    question: "Debugowanie i profiling w React Native New Architecture?",
    answer: "React Native DevTools (nowe): narzędzia w Chrome DevTools. Hermes profiler. JS thread profiling. Network requests. Połączenie: Flipper zostaje (ale opcjonalny). React DevTools w przeglądarce. Expo dev tools. Flipper: Meta debug tool. Layout Inspector. Network plugin. Hermes debugger. Crash reporter. Plugin ecosystem. Hermes Profiler: CPU profiling. Heap snapshots. Sampling profiler. chrome://inspect w Chrome. Eksport do Speedscope. React Native Performance: FlatList profiling. Render count. useMemo, useCallback audit. why-did-you-render biblioteka. Detox (E2E testing): End-to-end testy. Emulator + device. Automatyczne testy UI. Synchronizacja z animacjami. Playwright Mobile (nowe): Expo web testing. Responsive breakpoints. Maestro: YAML-based E2E. Prosty syntax. Uruchamiaj na device. CI integration. Android/iOS. Crash reporting: Sentry React Native. @sentry/react-native. Symbolication. Session replay. Crashlytics (Firebase). Performance monitoring. Profiling animacji: Reanimated DevTools. Frame rate monitor. FPS overlay: __DEV__. PerfMonitor. Bundle analysis: Metro bundle analyzer. Twoja paczka. Co jest za duże. Tree shaking. hermes-profile-transformer. Network debugging: Flipper Network plugin. Charles Proxy. Axios interceptors w dev. LogBox: natywne logi. Custom handler. Production error filtering. Upgrade Helper: react-native-community.github.io/upgrade-helper. Diff zmian między wersjami.",
  },
];

const newArchComponents = [
  { komponent: "JSI (JavaScript Interface)", opis: "C++ layer — bezpośredni dostęp native", korzysc: "Brak serialization JSON, synchroniczne wywołania" },
  { komponent: "TurboModules", opis: "Lazy-loaded native modules przez JSI", korzysc: "Szybszy cold start, inicjalizacja na żądanie" },
  { komponent: "Fabric Renderer", opis: "Nowy renderer React Native w C++", korzysc: "Synchroniczne UI, Shadow Tree po C++ stronie" },
  { komponent: "Bridgeless Mode", opis: "Bez starego Bridge — tylko JSI", korzysc: "RN 0.76+ domyślnie, maksymalna wydajność" },
  { komponent: "Reanimated 3 Worklets", opis: "'worklet' na UI thread bez bridge", korzysc: "60/120fps animacje bez JS thread" },
  { komponent: "Shared Values", opis: "SharedValue przez JSI — reaktywne", korzysc: "Animations bez bridge, gesture + animation sync" },
];

export default function BlogRnNewArchCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Native New Architecture | Fotz Studio"
        description="React Native New Architecture: JSI (C++ layer), TurboModules (lazy-loaded), Fabric Renderer, Bridgeless Mode, Reanimated 3 worklets, Expo SDK 52 i…"
        canonical="https://fotz.pl/blog/react-native-new-architecture-jsi-fabric-turbomodules-bridgeless-expo-sdk-52-2024"

        keywords="React Native New Architecture co to jest, React Native New Architecture jak działa, React Native New Architecture tutorial, React Native New Architecture przykład, czym jest React Native New Architecture, React Native New Architecture dokumentacja, React Native New Architecture przewodnik"
      />
      <ArticleSchema
        title="React Native New Architecture — JSI, Fabric, TurboModules, Bridgeless i Expo SDK 52?"
        description="6 komponentów New Architecture (JSI/TurboModules/Fabric/Bridgeless/Worklets/SharedValues) — Reanimated 3, React Native Skia, MMKV, Expo SDK 52 i debugowanie."
        url="https://fotz.pl/blog/react-native-new-architecture-jsi-fabric-turbomodules-bridgeless-expo-sdk-52-2024"
        datePublished="2024-06-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "RN New Architecture", url: "https://fotz.pl/blog/react-native-new-architecture-jsi-fabric-turbomodules-bridgeless-expo-sdk-52-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "RN New Architecture", url: "/blog/react-native-new-architecture-jsi-fabric-turbomodules-bridgeless-expo-sdk-52-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React Native / Mobile / New Architecture
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Native New Architecture
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              JSI (C++ layer), TurboModules (lazy-loaded), Fabric Renderer,
              Bridgeless Mode, Reanimated 3 worklets i Expo SDK 52.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Komunikacja", value: "JSI (C++)" },
                { label: "Moduły", value: "TurboModules" },
                { label: "Rendering", value: "Fabric" },
                { label: "Animacje", value: "Worklets" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 komponentów New Architecture</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              JSI, TurboModules, Fabric, Bridgeless Mode, Worklets i SharedValues —
              opis i kluczowe korzyści.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Komponent</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Korzyść</th>
                </tr>
              </thead>
              <tbody>
                {newArchComponents.map((c, i) => (
                  <tr key={c.komponent} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{c.komponent}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{c.opis}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{c.korzysc}</td>
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

      <RelatedArticles currentArticleId="react-native-new-architecture-jsi-fabric-turbomodules-bridgeless-expo-sdk-52-2024" />
      <ContactSection />
    </Layout>
  );
}
