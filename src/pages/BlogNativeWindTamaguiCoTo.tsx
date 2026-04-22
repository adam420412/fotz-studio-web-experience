import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "NativeWind — Tailwind CSS w React Native?",
    answer: "NativeWind: Tailwind CSS dla React Native. Mark Lawlor. Wersja 4.x (2024) — przebudowana. Babel plugin + Tailwind kompilacja. Instalacja: npm install nativewind tailwindcss. babel.config.js: plugins: ['nativewind/babel']. metro.config.js: withNativeWind. tailwind.config.js jak web. global.css: @tailwind base/components/utilities. Użycie: View className='flex-1 bg-white p-4'. Text className='text-xl font-bold text-gray-900'. Wszystkie Tailwind klasy. React Native style properties. Różnice vs web Tailwind: RN nie ma box-model. flex domyślny. shadow- inaczej. Text musi być w Text, nie View. Platformy: iOS, Android. Web (Expo). Universal. Responsive: brak viewport breakpoints. Ale: sm: md: przez device size. orientation: Tailwind modifier. Dark mode: dark: modifier. useColorScheme hook. colorScheme: 'media' lub 'class'. Theming: Tailwind config jak web. Custom colors. Spots: @config directive. CSS Variables w RN przez NativeWind. v4 zmiany: nowa architektura wsparcie. Bridgeless mode. Szybszy. StyleSheet za kulisami. Expo DR: npx create-expo-app@latest --template nativewind-template. Gotowy starter. Jak na web. Ograniczenia: nie wszystkie Tailwind klasy. Gradient — expo-linear-gradient. Shadows inaczej. Animacje przez Reanimated.",
  },
  {
    question: "Tamagui — cross-platform UI library i optymalizacja?",
    answer: "Tamagui: cross-platform UI (React Native + Web). Nate Wienert. Kompilator Tamagui (statyczna optymalizacja). Instalacja: npm install @tamagui/core @tamagui/config. Babel plugin lub SWC. tamagui.config.ts: import {createTamagui} from 'tamagui'. const config = createTamagui({fonts: {...}, themes: {...}, tokens: {...}}). Komponenty: import {XStack, YStack, Text, Button, Input} from 'tamagui'. XStack: horizontal flex. YStack: vertical flex. ZStack: absolutely positioned. Stack: generyczny. Text: typograficzny. Styled: const MyButton = styled(Button, {backgroundColor: '$blue10', color: '$color', variants: {size: {sm: {paddingHorizontal: '$3'}, lg: {paddingHorizontal: '$6'}}}}). Theming: light/dark automatycznie. Custom themes. CSS variables pod spodem. Tokens: $color1-$color12 (auto dark). $space.$1-$10. $size. Compiler: statyczna analiza. Usuwa runtime overhead. 2-3x wydajniejszy. Podobny do Linaria (CSS). Inline styles -> CSS klasy (web). StyleSheet.create (native). Tamagui Studio: GUI dla motywów. Podgląd komponentów. Export design tokens. Integracje: Expo. Next.js. Vite. create-tamagui: starter template. Porównanie: Tamagui — cross-platform, compiler, własny system. NativeWind — Tailwind-familiar, prostszy start. gluestack-ui v2 — headless, NativeWind based. Wybór: NativeWind jeśli znasz Tailwind. Tamagui dla design system.",
  },
  {
    question: "Gluestack UI v2 i Unistyles — nowoczesne React Native UI?",
    answer: "gluestack-ui v2: headless + NativeWind. GeekyAnts. Universal (web + native). v2 to przepisany na NativeWind. Instalacja: npx gluestack-ui@latest init. Komponenty: Button, Input, Checkbox, Modal, Toast, etc. Wszystkie przez NativeWind classes. Customizacja przez Tailwind. Accessible (ARIA). gluestack-ui v2 vs shadcn/ui: Podobna filozofia (copy-paste). Ale universal (mobile + web). NativeWind klasy. Instalacja per komponent: npx gluestack-ui add button. Kopiuje do projektu. Dostosuj. Unistyles: styled-system dla React Native. Next-gen StyleSheet. TypeScript. React Native Unistyles 2.0: JSI-based. Szybki. Theme system. Breakpoints. Instalacja: npm install react-native-unistyles. babel plugin. StyleSheet.create({...}) -> Unistyles. StyleSheet.configure({themes: {dark, light}, breakpoints: {sm: 300, md: 600}}). Warunkowe style: screen.width, theme.colors. useStyles hook. Dinamically reactive. @ui-kitten: Eva design system. Theme tokens. Kitten components. Mniej popularny 2024. React Native Paper: Material Design 3. Google. Dobry dla Material apps. Custom theming. react-native-magnus: utility-first RN. Podobny do NativeWind ale starszy. Zeego: cross-platform menu i modals. Radix UI dla React Native. Burn: iOS alerts. ActionSheet. Wybór stack 2024: Expo + NativeWind + gluestack-ui = najlepszy start. Expo + Tamagui = design system. Expo + Unistyles = performance.",
  },
  {
    question: "Expo Router + NativeWind — Universal App setup?",
    answer: "Universal App: jeden kod web + iOS + Android. Expo Router v4 + NativeWind. Najlepszy stack 2024. Inicjalizacja: npx create-expo-app@latest -e with-router. Lub nativewind template. Struktura: app/ — Expo Router. (tabs)/ — tab navigation. (auth)/ — auth flow. +not-found.tsx — 404. _layout.tsx — layout. NativeWind w Expo: app/_layout.tsx: import './global.css'. metro.config.js: withNativeWind(config, {input: './global.css'}). babel.config.js: ['nativewind/babel']. tailwind.config.js: content: ['./app/**/*.tsx', './components/**/*.tsx']. Platform-specific: .ios.tsx i .android.tsx. Platform.select(). import.meta.env.EXPO_OS. Responsywne: useWindowDimensions(). sm: md: przez NativeWind breakpoints. Lub Expo's useBreakpoints. Web style: link tag na web. Brak rozdźwięku. Navigation: Tab router + NativeWind tabBarStyle. Stack router — cards iOS, screens Android. Modal — bottom sheet. Drawer navigation. Styling na platformy: className='ios:pt-4 android:pt-2 web:pt-6'. Platform modifiers NativeWind. Shadow: shadow-md działa ale inaczej na iOS/Android. Użyj elevation (Android) lub shadowColor (iOS). State management: Zustand + MMKV (persist). Jotai (atomowy). TanStack Query (server state). Expo SecureStore — wrażliwe dane. OTA Updates: EAS Update. Instant JS updates. Bez App Store review. Powiadomienia: Expo Push Notifications. FCM + APNs za kulisami.",
  },
  {
    question: "React Native styling best practices i performance 2024?",
    answer: "StyleSheet.create vs inline styles: StyleSheet.create — lepsza wydajność (memoizacja). Inline styles — dynamiczne, developer friendly. Combine: StyleSheet dla statycznych, inline dla dynamicznych. StyleSheet.flatten — merge styles. NativeWind — kompiluje do StyleSheet za kulisami. useMemo dla dynamicznych stylów: const dynamicStyle = useMemo(() => ({color: isActive ? 'blue' : 'gray', fontWeight: isActive ? '700' : '400'}), [isActive]). Bez tworzenia nowego obiektu przy każdym renderze. Colors: react-native-dark-mode. @expo/vector-icons. useColorScheme hook. NativeWind dark: modifier. Colors theme file: colors.ts — export obiekt kolorów. Używaj wszędzie. Łatwa zmiana. Fonts: expo-font. useFonts hook. Lub fontFamily w tailwind.config. Custom fonts z NativeWind. Layout debugging: React Native Debugger. Flipper Layout Inspector. Dimensions + Position. onLayout prop. Performance profiling: Flipper Hermes profiler. react-native-performance. custom trace markers. Animation performance: Reanimated 3 na UI thread. Brak JS thread dla animacji. Worklets. Lazy loading: React.lazy (web). Expo Router lazy routes. Dynamic imports. Conditional rendering. Images: expo-image (fast cache). resizeMode. priority loading. placeholder (blur hash). Fonts loading: expo-font + SplashScreen.preventAutoHideAsync(). Czekaj na załadowanie fontów. Smooth start. Icon libraries: @expo/vector-icons (FontAwesome, Ionicons, MaterialIcons). expo-symbols (SF Symbols iOS). lucide-react-native (minimal).",
  },
];

const rnStylingTools = [
  { tool: "NativeWind v4", podejscie: "Tailwind CSS w React Native", kiedy: "Znasz Tailwind, Expo, szybki start" },
  { tool: "Tamagui", podejscie: "Cross-platform z kompilatorem", kiedy: "Design system, web+native, performance" },
  { tool: "gluestack-ui v2", podejscie: "Headless + NativeWind komponenty", kiedy: "shadcn/ui podejście dla mobile" },
  { tool: "Unistyles 2.0", podejscie: "JSI-based stylesheet, breakpoints", kiedy: "Performance-critical, custom theming" },
  { tool: "React Native Paper", podejscie: "Material Design 3, gotowe UI", kiedy: "Material apps, Google design language" },
  { tool: "StyleSheet.create", podejscie: "Natywne stylowanie React Native", kiedy: "Zawsze — podstawa, memoizowane style" },
];

export default function BlogNativeWindTamaguiCoTo() {
  return (
    <Layout>
      <SEOHead
        title="NativeWind, Tamagui, gluestack-ui i Unistyles | Fotz Studio"
        description="React Native styling 2024: NativeWind v4 (Tailwind w RN), Tamagui (cross-platform kompilator), gluestack-ui v2 (headless), Unistyles (JSI), Expo Router…"
        canonical="https://fotz.pl/blog/nativewind-tamagui-gluestack-unistyles-react-native-styling-2024"

        keywords="NativeWind, Tamagui, gluestack-ui i Unistyles co to jest, NativeWind, Tamagui, gluestack-ui i Unistyles jak działa, NativeWind, Tamagui, gluestack-ui i Unistyles tutorial, NativeWind, Tamagui, gluestack-ui i Unistyles przykład, czym jest NativeWind, Tamagui, gluestack-ui i Unistyles, NativeWind, Tamagui, gluestack-ui i Unistyles dokumentacja, NativeWind, Tamagui, gluestack-ui i Unistyles przewodnik"

        canonical="https://fotz.pl/blog/nativewind-tamagui-gluestack-unistyles-react-native-styling-2024"
      />
      <ArticleSchema
        title="NativeWind, Tamagui, gluestack-ui i Unistyles — React Native styling 2024?"
        description="6 narzędzi React Native styling (NativeWind/Tamagui/gluestack-ui/Unistyles/RN Paper/StyleSheet) — universal apps, cross-platform, Expo Router i performance best practices."
        url="https://fotz.pl/blog/nativewind-tamagui-gluestack-unistyles-react-native-styling-2024"
        datePublished="2024-11-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Native Styling 2024", url: "https://fotz.pl/blog/nativewind-tamagui-gluestack-unistyles-react-native-styling-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-fuchsia-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "RN Styling 2024", url: "/blog/nativewind-tamagui-gluestack-unistyles-react-native-styling-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-fuchsia-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React Native / Styling / Universal Apps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Native Styling 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              NativeWind v4 (Tailwind w RN), Tamagui (cross-platform), gluestack-ui v2
              (headless), Unistyles i Expo Router Universal App.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Tailwind RN", value: "NativeWind" },
                { label: "Compiler", value: "Tamagui" },
                { label: "Headless", value: "gluestack" },
                { label: "JSI", value: "Unistyles" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-fuchsia-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi React Native styling — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              NativeWind, Tamagui, gluestack-ui, Unistyles, React Native Paper i StyleSheet —
              podejście i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {rnStylingTools.map((t, i) => (
                  <tr key={t.tool} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.tool}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.podejscie}</td>
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

      <RelatedArticles currentArticleId="nativewind-tamagui-gluestack-unistyles-react-native-styling-2024" />
      <ContactSection />
    </Layout>
  );
}
