import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Expo Router i jak różni się od React Navigation?",
    answer: "Expo Router (v3, 2023): file-based routing dla React Native + Web. Jak Next.js App Router ale dla mobile. Oparty na React Navigation pod spodem. Strukturacja: app/_layout.tsx — root layout. app/index.tsx — ekran główny. app/(tabs)/home.tsx — tab routing. app/users/[id].tsx — dynamiczne trasy. Zalety Expo Router: automatyczny deep linking. Routing oparty na plikach — intuicyjny. Universal: iOS, Android i Web z jednym kodem. TypeScript types dla parametrów nawigacji. React Navigation (v6): imperative routing. Konfiguracja w kodzie (nie plikach). NavigationContainer. createStackNavigator, createBottomTabNavigator. Stack.Navigator, Stack.Screen. Bardziej elastyczny ale verbose. Expo Router vs React Navigation: Expo Router — file-based, universal, nowszy. React Navigation — dojrzalszy, więcej tutoriali, bare RN. Expo Router używa React Navigation pod spodem. Migracja: stopniowa możliwa. Expo SDK: Expo Go — szybki development. EAS Build — cloud builds. EAS Submit — submission do App Store. EAS Update — OTA updates (bez App Store review). Expo Router setup: npx create-expo-app@latest. Template: blank (TypeScript). app directory convention. Metro bundler (Expo). TypeScript path aliases: babel-plugin-module-resolver lub tsconfig paths. @ prefix. Expo constants: expo-constants. Constants.expoConfig.name. Environment-specific config.",
  },
  {
    question: "React Navigation v6 — Stack, Tab i Drawer navigatory?",
    answer: "React Navigation v6: NavigationContainer wraps całą aplikację. const Stack = createNativeStackNavigator(). Stack.Navigator: Stack.Screen name='Home' component={HomeScreen}. createBottomTabNavigator: tabBarIcon prop. tabBarLabel. Tab.Screen options={{title: 'Home', tabBarIcon: ({color}) => Icon}}. createDrawerNavigator: Drawer.Navigator, Drawer.Screen. createMaterialTopTabNavigator: swipeable tabs. Typed navigation (TypeScript): type RootStackParamList = {'Home': undefined, 'UserDetail': {userId: string}, 'Settings': {tab: 'account' | 'notifications'}}. const Stack = createNativeStackNavigator(). Props type: NativeStackScreenProps. useNavigation: const nav = useNavigation(). nav.navigate('Home'). nav.push('UserDetail', {userId: '123'}). nav.goBack(). nav.replace('Home'). useRoute: const route = useRoute(). route.params.userId. Nested navigators: Tab zawiera Stack. Stack zawiera Modal. Drawer zawiera Tab + Stack. Deep linking config: linking.config. path -> screen mapping. Universal links (iOS) + App Links (Android). Screens: react-native-screens. Natywne kontenerki dla ekranów. Poprawa wydajności. Wymagane: enableScreens() w index.js. Header customization: options={{headerTitle: () => CustomHeader, headerRight: () => Button, headerStyle: {backgroundColor: '#fff'}}}. gestureEnabled: true (swipe back iOS). Modal presentation: presentation: 'modal'. cardOverlayEnabled. Animacje przejść: transitionSpec, cardStyleInterpolator.",
  },
  {
    question: "Expo Router v3 — file-based routing, layouts i grupy?",
    answer: "Expo Router v3 struktura: app/(tabs)/_layout.tsx — Tab layout. app/(tabs)/index.tsx — tab home. app/(tabs)/settings.tsx — tab settings. app/modal.tsx — modal screen. app/users/[id].tsx — dynamic segment. app/users/[id]/posts.tsx — nested dynamic. _layout.tsx: export default function Layout() {return Tabs (lub Stack, Drawer)}. Grupy routingowe: (auth) — nie wpływa na URL. (tabs) — tab group. Parallel routes: (modal) + (app). Expo Router Link: import {Link} from 'expo-router'. Link href='/users/123'. Link href={{pathname: '/users/[id]', params: {id: '123'}}}. useLocalSearchParams: const {id} = useLocalSearchParams(). Typed routes (Expo Router v3+): require('expo-router') provides typed href. Automatyczne typy z plików. useSegments: const segments = useSegments(). Sprawdź czy w auth group. Guards: if (!user && !segments[0]?.startsWith('(auth)')) {router.replace('/(auth)/login')}. Shared layouts: dzieci inherentują layout. Stack w layoutcie. Stack.Screen options={{title: 'Custom Title'}} wewnątrz ekranu. API Routes (Expo Router v3): app/api/hello+api.ts. export function GET(req) {return Response.json({hello: 'world'})}. Server-side logic dla universal apps. EAS Update: OTA updates bez App Store. expo-updates package. Updates.fetchUpdateAsync(). Channel-based: production, preview, development. Expo Modules: natywne moduły w Swift/Kotlin. expo-module-scripts. Możesz pisać natywne moduły z TypeScript API.",
  },
  {
    question: "Nawigacja a stan aplikacji — integracja z Zustand i React Query?",
    answer: "State management w React Native: Zustand — najlepszy wybór 2024. Prosty, zero boilerplate. MMKV jako persist storage (zamiast AsyncStorage). Zustand + MMKV: import {MMKV} from 'react-native-mmkv'. const storage = new MMKV(). const mmkvStorage = {getItem: (k) => storage.getString(k), setItem: (k, v) => storage.set(k, v), removeItem: (k) => storage.delete(k)}. persist(store, {storage: createJSONStorage(() => mmkvStorage)}). React Query w React Native: QueryClientProvider. focusManager.setEventListener — AppState based refetch. NetworkStatus: NetInfo (@react-native-community/netinfo). onlineManager.setEventListener. Background fetch: expo-background-fetch + expo-task-manager. Fetch updates w tle. Push Notifications: expo-notifications. Permissions, tokens, local + remote. Clerk, Firebase, OneSignal dla push. Navigation + Auth flow: Stack.Screen options={{headerShown: false}} dla auth screens. useEffect([user]) -> navigation.reset. Expo Router guard pattern: (auth) group dla unauthenticated. (app) group dla authenticated. Redirect w _layout.tsx bazując na auth state. Deep linking + notifications: notification tap -> navigate to screen. Linking.openURL dla universal links. expo-router/entry-classic dla custom linking. React Navigation Events: useFocusEffect — refetch przy focus. useIsFocused. navigation.addListener('focus', handler). Performance: React Native Skia — zaawansowany rendering. React Native Reanimated v3 — smooth animations. Gesture Handler — natywne gesty. Flashlist zamiast FlatList (szybsza). @shopify/flash-list.",
  },
  {
    question: "React Native vs React Native Web — universal apps w 2024?",
    answer: "React Native Web (RNW): React Native komponenty na web. View -> div, Text -> span. StyleSheet -> CSS-in-JS. Expo Router native + web w jednym repozytorium. Universal app stack: Expo Router (routing). React Native Web (UI). Solito (navigation helpers). Tamagui lub NativeWind (styling). Tamagui: UI kit dla RN + Web. Tokeny design systemu. Kompilacja: generuje CSS lub native StyleSheet. Wydajność lepsza niż inline styles. NativeWind (Tailwind dla RN): Tailwind classes w React Native. StyleSheet.create pod spodem. Natywne + Web. Solito: navigation helper dla RN + Next.js. useRouter() cross-platform. createParam() dla shared params. Turborepo + Expo + Next.js: packages/ui — shared components. apps/next — Next.js web. apps/expo — Expo mobile. Shared code: utils, types, hooks, stores. Różnice RN vs Web: brak DOM. Brak CSS (StyleSheet). Flexbox domyślnie. Natywne komponenty (TouchableOpacity, Pressable). Platform.select({ios: ..., android: ..., web: ...}). Platform.OS checks. Ograniczenia: RNW nie wspiera wszystkich RN libraries. react-native-maps — nie na web. expo-camera — ograniczone na web. Hybrydowe rozwiązanie: Capacitor — embed web app w natywnym kontenerze. ionic capacitor. Cordova (stary). Nie RN. Expo + Capacitor: nie jest oficjalnie wspierane. Kiedy universal app: startup, małe teams, shared logic. Kiedy oddzielne: max performance, native UX critical.",
  },
];

const navigationOptions = [
  { narzedzie: "Expo Router v3", typ: "File-based (Universal)", platform: "iOS + Android + Web", routing: "app/ directory", kiedy: "Nowe projekty Expo, universal apps" },
  { narzedzie: "React Navigation v6", typ: "Imperative", platform: "iOS + Android", routing: "createXNavigator()", kiedy: "Bare React Native, dojrzałe projekty" },
  { narzedzie: "React Native Navigation", typ: "Native tabs/stacks", platform: "iOS + Android", routing: "Wycofywany", kiedy: "Legacy Wix projects (unikaj)" },
  { narzedzie: "Expo Router + Next.js", typ: "Universal routing", platform: "iOS + Android + Web", routing: "Solito/universal", kiedy: "Full universal app, shared codebase" },
  { narzedzie: "NativeWind v4", typ: "Styling (Tailwind)", platform: "iOS + Android + Web", routing: "Brak", kiedy: "Tailwind dla RN, NativeWind+Expo Router" },
  { narzedzie: "Tamagui", typ: "Universal UI Kit", platform: "iOS + Android + Web", routing: "Brak", kiedy: "Design system universal, performance" },
];

export default function BlogExpoRouterCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Expo Router v3, React Navigation | Fotz Studio"
        description="Expo Router v3 (file-based), React Navigation v6 (Stack/Tab/Drawer), typed navigation TypeScript, EAS Update, Zustand+MMKV i React Native Web universal apps."
        canonicalUrl="https://fotz.pl/blog/expo-router-react-navigation-react-native-nawigacja-universal-apps-2024"

        keywords="Expo Router v3, React Navigation co to jest, Expo Router v3, React Navigation jak działa, Expo Router v3, React Navigation tutorial, Expo Router v3, React Navigation przykład, czym jest Expo Router v3, React Navigation, Expo Router v3, React Navigation dokumentacja, Expo Router v3, React Navigation przewodnik"

        canonical="https://fotz.pl/blog/expo-router-react-navigation-react-native-nawigacja-universal-apps-2024"
      />
      <ArticleSchema
        title="Expo Router v3, React Navigation — React Native nawigacja i universal apps 2024?"
        description="6 opcji nawigacji RN (Expo Router/React Navigation/RNN/Expo+Next.js/NativeWind/Tamagui) — file-based routing, typed params, Zustand+MMKV i universal apps."
        url="https://fotz.pl/blog/expo-router-react-navigation-react-native-nawigacja-universal-apps-2024"
        datePublished="2024-04-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Expo Router i React Navigation", url: "https://fotz.pl/blog/expo-router-react-navigation-react-native-nawigacja-universal-apps-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Expo Router i React Navigation", url: "/blog/expo-router-react-navigation-react-native-nawigacja-universal-apps-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React Native / Mobile
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expo Router i React Native Nawigacja
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Expo Router v3 (file-based, universal), React Navigation v6 (Stack/Tab/Drawer),
              typed navigation, EAS i React Native Web.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "File-based routing", value: "Expo Router v3" },
                { label: "Stack/Tab/Drawer", value: "React Nav v6" },
                { label: "OTA updates", value: "EAS Update" },
                { label: "Universal apps", value: "RN Web" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 opcji nawigacji i styling w React Native</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Expo Router, React Navigation, Expo+Next.js, NativeWind i Tamagui —
              typ, platforma i kiedy użyć.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Platforma</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Routing</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {navigationOptions.map((n, i) => (
                  <tr key={n.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{n.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{n.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{n.platform}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs font-mono">{n.routing}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{n.kiedy}</td>
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

      <RelatedArticles currentArticleId="expo-router-react-navigation-react-native-nawigacja-universal-apps-2024" />
      <ContactSection />
    </Layout>
  );
}
