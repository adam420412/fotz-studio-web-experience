import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest React Native i jak różni się od React?",
    answer: "React Native: framework do tworzenia natywnych aplikacji mobilnych (iOS i Android) w React/JavaScript (Meta, 2015). Nie WebView — prawdziwe natywne komponenty! React vs React Native: React (DOM): div, span, button -> HTML elements -> Web. React Native: View, Text, TouchableOpacity -> UIView (iOS) / android.view.View (Android). Filozofia: 'Learn once, write anywhere' (nie 'write once, run anywhere'). Ten sam React paradigmat, inne komponenty. JavaScript Thread: kod JS uruchamia się w osobnym thread. New Architecture (Fabric): JSI (JavaScript Interface) — direct JS-Native bridge (C++). Bez starego asynchronicznego Bridge. Szybsze, synchroniczne wywołania. TurboModules: lazy loaded native modules. Codegen: automatyczne TypeScript -> native type definitions. Kluczowe komponenty: View — kontener (div). Text — tekst (zawsze w Text). Image — obrazy. ScrollView — przewijalna lista. FlatList — optymalizowana lista. TextInput — pole tekstowe. TouchableOpacity — dotykalne z opacity. Pressable — nowoczesny (v0.64+). StyleSheet: CSS-like inline styles. Flexbox (domyślnie column, nie row). Brak jednostek px (density-independent pixels). Platforma-specific: Platform.OS === 'ios' ? X : Y. Pliki .ios.tsx i .android.tsx.",
  },
  {
    question: "Expo — co to jest i jak przyspiesza React Native development?",
    answer: "Expo: platforma i toolchain dla React Native (2016). Ułatwia: setup, development, building, deploying. Expo Go: aplikacja na iPhone/Android. Skanuj QR -> natychmiast testuj. Bez Xcode/Android Studio. Szybki prototyping. Expo SDK: zestaw modułów (camera, location, notifications, payments, file system). expo-camera, expo-location, expo-notifications, expo-file-system, expo-av (audio/video), expo-image-picker. Tryby Expo: Managed Workflow: Expo zarządza native code. Nie widzisz android/ i ios/. Ograniczone native modules. Bare Workflow: pełna kontrola nad native. Expo modules + custom native. Używaj gdy potrzebujesz custom native. EAS (Expo Application Services): EAS Build: cloud builds (iOS + Android bez Maca). EAS Submit: submit do App Store / Play Store. EAS Update: OTA updates (over-the-air). Natychmiastowe aktualizacje JS bez store review. Expo Router (file-system routing): app/ directory (jak Next.js). Automatyczne routing. Deep linking. Native navigation. Nowa era RN navigation. Expo vs bare React Native: Expo Managed: szybszy start, mniej konfiguracji. Bare/bez Expo: pełna kontrola, wszystkie native modules. Expo (2024): polecany dla większości projektów. EAS Build eliminuje główne bóle.",
  },
  {
    question: "Navigation w React Native — React Navigation vs Expo Router?",
    answer: "React Navigation: najpopularniejsza biblioteka nawigacji (@react-navigation/native). Stack Navigator: ekrany jak stos (push/pop). @react-navigation/native-stack (native, szybszy). Tab Navigator: dolna belka nawigacji. Drawer Navigator: boczne menu. Nested navigators: Tab inside Stack. Konfiguracja: const Stack = createNativeStackNavigator(). NavigationContainer wrapper. Przejście między ekranami: navigation.navigate('Details', {id: 123}). navigation.push('Details'). navigation.goBack(). navigation.replace('Home'). Parametry: const {id} = route.params. TypeScript: RootStackParamList z parametrami per ekran. Expo Router (nowe): file-system routing (jak Next.js App Router). app/(tabs)/index.tsx — tab screen. app/user/[id].tsx — dynamic route. app/_layout.tsx — layout. Zalety Expo Router: link/ component (jak next/link). useLocalSearchParams() — params. URL-based navigation. Deep linking automatyczny. Universal (Web + Native). React Navigation vs Expo Router: React Navigation — dojrzały, elastic, ogromny ekosystem. Expo Router — nowe, file-system, universal (web + mobile). Expo Router to przyszłość. React Navigation nadal szeroko używany. Animacje nawigacji: react-native-reanimated — płynne animacje (60/120fps). react-native-gesture-handler — gesture recognition. Używane przez React Navigation i Expo Router.",
  },
  {
    question: "State management i data fetching w React Native?",
    answer: "State management: te same opcje co React web. Zustand — polecany (prosty, mały bundle). Jotai — atomic model. Redux Toolkit + RTK Query — enterprise. TanStack Query (@tanstack/query-native): te same query/mutation co web. queryKey, staleTime, gcTime. useFocusEffect — refetch przy focus na ekran (React Navigation integration). AsyncStorage: @react-native-async-storage/async-storage. Persistentne przechowywanie klucz-wartość. MMKV: szybszy AsyncStorage (C++). react-native-mmkv. 10x szybszy od AsyncStorage. SQLite: expo-sqlite (Expo SDK 50+). SQLite na urządzeniu. Offline-first. Drizzle ORM + expo-sqlite. API calls: fetch (wbudowany). axios. TanStack Query do zarządzania. Offline support: react-query offline mutations. react-native-offline — status sieci. Optimistic UI dla mobilnych. Push Notifications: expo-notifications — Expo SDK. React Native Firebase (Cloud Messaging) — FCM/APNs. Expo Push Notification Service — cross-platform. Deep Linking: expo-linking. URL scheme: myapp://route. Universal links (iOS) / App Links (Android) — https://myapp.com/route. Metro Bundler: JavaScript bundler dla React Native. Szybszy HMR. Hermes: JS engine (Meta). Szybszy startup. Smaller app size. Używany domyślnie.",
  },
  {
    question: "Kiedy React Native, kiedy Flutter, a kiedy natywne aplikacje?",
    answer: "React Native: JavaScript/TypeScript. React paradigmat. Dobry dla: web devs przechodzących na mobile. Projekty z istniejącym React teamem. Szybkie MVP. Kod współdzielony z web (logika, typy). Wady: native modules czasem wymagane. Performance gorszy niż natywny (ale bardzo dobry z Fabric). Flutter: Google. Dart lang. Własny rendering engine (Skia/Impeller). Identyczny wygląd na iOS i Android. Wady: Dart (mniejszy ekosystem). Duży bundle. Więcej boilerplate. Zalety: pixel-perfect, szybki, Google support. Natywne (Swift/Kotlin): najlepsza wydajność. Pełny dostęp do APIs. Wyższy koszt (2 osobne aplikacje). Kiedy natywne: games, AR/VR, complex animations, deeply platform-specific. Xamarin/MAUI (Microsoft): C# i .NET. Opcja dla .NET teamów. Kiedy React Native: startup/MVP. Mały/średni team. Web + mobile unified. Kiedy Flutter: design-heavy app. Animacje kluczowe. Google services. Gdy Dart/team OK. Kiedy natywne: banking/fintech z biometrics. Gry. AR. Max performance. Capacitor + Ionic: WebView-based (HTML/CSS/JS). Nie natywny rendering. Ale dostęp do native APIs. Cordova następca. Expo (2024): znacznie ułatwił React Native workflow. EAS Build bez Maca dla iOS.",
  },
];

const mobileTechs = [
  { technologia: "React Native", jezyk: "JavaScript / TypeScript", rendering: "Natywny (JSI/Fabric)", ekosystem: "npm + React", platforma: "iOS + Android", kiedy: "React team, web+mobile, szybkie MVP" },
  { technologia: "Expo", jezyk: "JavaScript / TypeScript", rendering: "React Native (managed)", ekosystem: "Expo SDK + npm", platforma: "iOS + Android + Web", kiedy: "Szybki start, cloud build, OTA updates" },
  { technologia: "Flutter", jezyk: "Dart", rendering: "Własny (Impeller)", ekosystem: "pub.dev (Dart)", platforma: "iOS + Android + Web + Desktop", kiedy: "Design-heavy, animacje, Google services" },
  { technologia: "Swift (iOS)", jezyk: "Swift", rendering: "UIKit / SwiftUI", ekosystem: "Apple", platforma: "iOS / macOS only", kiedy: "iOS-only, max performance, Apple APIs" },
  { technologia: "Kotlin (Android)", jezyk: "Kotlin", rendering: "Android Views / Compose", ekosystem: "JetBrains / Google", platforma: "Android only", kiedy: "Android-only, max performance, Google APIs" },
  { technologia: "Capacitor + Ionic", jezyk: "HTML / JS / CSS", rendering: "WebView", ekosystem: "npm + Web", platforma: "iOS + Android + Web", kiedy: "Web devs, istniejąca web app" },
];

export default function BlogReactNativeExpoCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Native, Expo | Fotz Studio"
        description="React Native + Expo: New Architecture (Fabric/JSI), Expo Router, EAS Build, navigation, state management — vs Flutter i natywne iOS/Android, kiedy co wybrać."
        canonical="https://fotz.pl/blog/react-native-expo-co-to-jest-mobile-development-vs-flutter-2024"

        keywords="React Native, Expo co to jest, React Native, Expo jak działa, React Native, Expo tutorial, React Native, Expo przykład, czym jest React Native, Expo, React Native, Expo dokumentacja, React Native, Expo przewodnik"

        canonical="https://fotz.pl/blog/react-native-expo-co-to-jest-mobile-development-vs-flutter-2024"
      />
      <ArticleSchema
        title="React Native, Expo — co to jest, mobile development, vs Flutter 2024?"
        description="6 technologii mobilnych (RN/Expo/Flutter/Swift/Kotlin/Capacitor) — New Architecture, Expo Router, EAS, navigation, state management i kiedy co wybrać."
        url="https://fotz.pl/blog/react-native-expo-co-to-jest-mobile-development-vs-flutter-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Native i Expo", url: "https://fotz.pl/blog/react-native-expo-co-to-jest-mobile-development-vs-flutter-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "React Native i Expo", url: "/blog/react-native-expo-co-to-jest-mobile-development-vs-flutter-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Mobile / React Native
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Native i Expo 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Natywne aplikacje iOS i Android w TypeScript — New Architecture (Fabric/JSI),
              Expo Router, EAS Cloud Build i OTA updates.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Natywny rendering", value: "JSI/Fabric" },
                { label: "Cloud builds", value: "EAS Build" },
                { label: "File routing", value: "Expo Router" },
                { label: "OTA updates", value: "EAS Update" },
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

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 technologii mobilnych porównane</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              React Native, Expo, Flutter, Swift, Kotlin i Capacitor — każda technologia
              oferuje inny kompromis między wygodą, wydajnością a dostępem do platformy.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Technologia</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Język</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rendering</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Ekosystem</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Platforma</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {mobileTechs.map((t, i) => (
                  <tr key={t.technologia} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.technologia}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.jezyk}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.rendering}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.ekosystem}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.platforma}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.kiedy}</td>
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

      <RelatedArticles currentArticleId="react-native-expo-co-to-jest-mobile-development-vs-flutter-2024" />
      <ContactSection />
    </Layout>
  );
}
