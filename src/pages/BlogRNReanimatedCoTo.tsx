import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest React Native Reanimated 3 i jak działa?",
    answer: "React Native Reanimated 3 (Software Mansion): animacje działające na UI thread. Nie JavaScript thread. Brak jank i dropped frames. Worklets: małe funkcje JS kompilowane do C++/native. 'worklet' directive. Shared Values: useSharedValue(0) — wartość synced między JS i UI thread. Animated Values: useAnimatedStyle(() => ({ transform: [{ translateX: sharedValue.value }] })). Imperatywne API: withTiming, withSpring, withDecay, withRepeat, withSequence. withTiming(100, {duration: 300, easing: Easing.bezier(...)}) — płynne przejście. withSpring(0, {damping: 10, stiffness: 100}) — sprężyste. withRepeat(withTiming(1, {duration: 1000}), -1, true) — nieskończona pętla. withSequence(withTiming(1), withDelay(500, withTiming(0))) — sekwencja. useAnimatedScrollHandler: scroll events na UI thread. event.contentOffset.y — scroll position. Używaj Animated.ScrollView z Reanimated. Interpolacja: interpolate(value, [0, 1], [0, 100]). Extrapolation.CLAMP. useAnimatedRef: ref do animated component. measure() — pobierz layout. scrollTo() — scroll. Entering/Exiting animations: FadeIn, FadeOut, SlideInLeft. entering={FadeInDown.duration(300)}. exiting={FadeOutUp}. Bez useAnimatedStyle. Layout animations: layout={Layout.springify()} — auto-animacja zmiany layoutu. Layout.duration(300). Reanimated 3 vs Animated: Reanimated — UI thread, 60/120fps. Animated — JS thread, może lag. Dla prostych: Animated OK. Dla kompleksowych gesturów: Reanimated.",
  },
  {
    question: "React Native Gesture Handler — jak obsługiwać gesty?",
    answer: "React Native Gesture Handler (Software Mansion): natywne gesty. Nie JS touch events — native gesture recognizers. Instalacja: npm install react-native-gesture-handler. GestureHandlerRootView na root. Gesty: Gesture.Tap() — tap, doubleTap. Gesture.Pan() — drag, swipe. Gesture.Pinch() — pinch to zoom. Gesture.Rotation() — obracanie. Gesture.LongPress(). Gesture.Fling(direction: Directions.LEFT). GestureDetector: GestureDetector gesture={composed}. GestureDetector gesture={Gesture.Simultaneous(pan, pinch)}. Pan gesture + Reanimated: const pan = Gesture.Pan().onUpdate((event) => { translateX.value = event.translationX. translateY.value = event.translationY }). onEnd: withSpring(0) — wróć na miejsce. Swipeable: Swipeable component — swipe to reveal actions. renderRightActions — custom action buttons. Dla list items (delete, archive). DrawerLayout: boczna nawigacja. Drag z lewej strony. Konfiguracja: drawerWidth, renderNavigationView. FlatList z gesturami: FlatList wymaga gesture-enabled. Używaj z GestureHandlerRootView. Simultaneity: Gesture.Simultaneous() — gesty równocześnie (pan + pinch). Gesture.Exclusive() — jeden na raz. requireExternalGestureToFail(). Taptic feedback: HapticFeedback.impact(). react-native-haptic-feedback. Gesture.Tap().onEnd(() => HapticFeedback.selection()). ScrollView integration: waitFor i innych ScrollView gesture. simultaneousWithExternalGesture. Reanimated + Gesture Handler razem: idealny stack dla kompleksowych UI.",
  },
  {
    question: "React Native Skia — Shopify's 2D graphics library?",
    answer: "@shopify/react-native-skia: Skia Graphics Engine w React Native. Skia: Google's 2D rendering engine (Chrome, Android, Flutter). Instalacja: npm install @shopify/react-native-skia. Canvas, Drawing API, Image manipulation, Shaders. Podstawy: Canvas (height, width) — obszar renderowania. Skia działa na UI thread. rect, circle, path, text, image. Drawing: Paint — stroke/fill, color, stroke width. Path.Make() — kreacja SVG paths. path.moveTo(), lineTo(), cubicTo(). Shapes: RoundedRect, Circle, Oval, Line. Text: useFont(require('./font.ttf'), 24). drawText(canvas, 'Hello', x, y, paint). Animations z Skia: Skia + Reanimated. useSharedValue dla animacji. useDerivedValue — obliczone shared value. canvas onDraw callback. Shaders: GLSL-like language (SKSL). RuntimeEffect.Make(skslCode). Gradient, noise, blur effects. Image manipulation: useImage(require('./photo.jpg')). canvas.drawImage(image, src, dest, paint). SkImage — pixel manipulation. makeImageSnapshot() — screenshot. Filters: ImageFilter: blur, color matrix, shadow. ColorFilter: matrix, mode, lerp. MaskFilter: blur. Animations przykład: const rotation = useSharedValue(0). useDerivedValue(() => Skia.Matrix().rotate(rotation.value * Math.PI / 180)). Porównanie: SVG — prostsze, brak native perf. Reanimated — animacje UI, nie 2D drawing. Skia — pełna 2D grafika, custom UI, custom charts. Kiedy Skia: custom progress bars, custom charts, photo filters, generative art, game UI.",
  },
  {
    question: "React Native Reanimated — shared element transitions i layout animations?",
    answer: "Shared Element Transitions: animacja elementu między ekranami. Element 'leci' z jednego ekranu na drugi. react-native-shared-element: Reanimated 3 + React Navigation. SharedElement component. sharedElements() function na ekranie: return [{id: 'photo', animation: 'move'}]. Źródło: SharedElement id='photo'. Cel: SharedElement id='photo'. Efekt: obraz animuje pozycję/rozmiar. Ograniczenia: tylko dla flat layouts. Nie nested za innymi. Alternatywa: Reanimated layout animations + shared values. Hero animation ręcznie: measure() obydwa elementy. Animuj position absolutną. React Navigation + Reanimated: Stack Navigator z custom transition. CardStyleInterpolator. TransitionPresets: SlideFromRightIOS, ModalSlideFromBottomIOS. Layout Animations: automatyczne animowanie zmian layoutu. layout={LinearTransition} — zmiana wielkości. layout={SpringTransition.damping(10)}. entering i exiting na FlatList items. FlatList item add/remove z animacją. Animowane Flatlist: ItemSeparatorComponent animowana. keyExtractor ważny dla animacji. nie animuj key zmian. Animacje interfejsu: Accordion: useSharedValue(0) dla wysokości. withTiming do animacji. interpolate wysokości 0 -> maxHeight. Carousel: PanGesture + snapTo. withSpring do snap. CreditCard flip: RotateY 0->180. backfaceVisibility: 'hidden'. Skeleton loaders: withRepeat(withTiming, -1) dla shimmer. interpolate opacity/color. Skeleton pulsin: LinearGradient animowany.",
  },
  {
    question: "React Native performance — optymalizacja FPS i pamięci?",
    answer: "Profiling: Flipper (Meta) — performance profiler. Hermes profiler (jest w Expo dev tools). Systrace — Android. Instruments — iOS. React DevTools Profiler w RN. Hermes JavaScript Engine: domyślny w React Native 0.70+. Bytecode compilation — szybsze starty. Lepsze GC. Memory profile w Flipper. FlatList optymalizacja: getItemLayout — brak dynamicznego pomiaru. keyExtractor — stabilne klucze. initialNumToRender: 10 (nie za dużo). maxToRenderPerBatch: 10. windowSize: 5 (mniej renderów off-screen). removeClippedSubviews: true — nie renderuj poza widokiem. Brak inline functions w renderItem: const renderItem = useCallback(). Item komponenty React.memo. FlashList (Shopify): zamiennik FlatList. 10x szybszy. estimatedItemSize — wymagany. Recycling — reuse komponentów. Nie re-mount — brak animacji issues. Images: Image.prefetch() — preload. FastImage (@d11n/react-native-fast-image) — caching, priorytet. resizeMode, resizeMethod (scale, resize). WebP format — mniejsze pliki. Bundle size: metro.config: minifier, treeshake. Hermes bytecode w bundle. Vendor splitting — lazy load features. RAM bundles (legacy) vs Hermes. Bridgeless mode (New Architecture): JSI — JavaScript Interface (brak bridge). Fabric — nowy renderer. TurboModules — synchroniczne native calls. Reanimated 3 — już JSI-based. Expo Modules API — native modules JSI. App startup: useEffect defer — nie w mount. InteractionManager.runAfterInteractions. Deferred loading — lazy import. SplashScreen hold — preload data.",
  },
];

const rnLibraries = [
  { biblioteka: "react-native-reanimated", wersja: "3.x", thread: "UI Thread (Worklets)", kiedy: "Kompleksowe animacje, 60/120fps" },
  { biblioteka: "react-native-gesture-handler", wersja: "2.x", thread: "Native (C++/Swift)", kiedy: "Pan, Pinch, Swipe, native gesty" },
  { biblioteka: "@shopify/react-native-skia", wersja: "1.x", thread: "UI Thread (Skia)", kiedy: "Custom 2D graphics, shaders, filtrowanie obrazów" },
  { biblioteka: "react-native-screens", wersja: "3.x", thread: "Native navigation", kiedy: "Natywne ekrany, lepsza pamięć niż JS" },
  { biblioteka: "@shopify/flash-list", wersja: "1.x", thread: "Recycling", kiedy: "Duże listy, zastępnik FlatList" },
  { biblioteka: "react-native-shared-element", wersja: "0.x", thread: "UI Thread", kiedy: "Hero animations między ekranami" },
];

export default function BlogRNReanimatedCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Native Reanimated, Gesture Handler i Skia | Fotz Studio"
        description="React Native Reanimated 3 (worklets, UI thread, withSpring), Gesture Handler (Pan, Pinch, Swipe), @shopify/react-native-skia (2D graphics), FlashList i…"
        canonicalUrl="https://fotz.pl/blog/react-native-reanimated-gesture-handler-skia-animacje-gesty-2024"

        keywords="React Native Reanimated, Gesture Handler i Skia co to jest, React Native Reanimated, Gesture Handler i Skia jak działa, React Native Reanimated, Gesture Handler i Skia tutorial, React Native Reanimated, Gesture Handler i Skia przykład, czym jest React Native Reanimated, Gesture Handler i Skia, React Native Reanimated, Gesture Handler i Skia dokumentacja, React Native Reanimated, Gesture Handler i Skia przewodnik"

        canonical="https://fotz.pl/blog/react-native-reanimated-gesture-handler-skia-animacje-gesty-2024"
      />
      <ArticleSchema
        title="React Native Reanimated, Gesture Handler i Skia — animacje i gesty iOS Android 2024?"
        description="6 bibliotek React Native (Reanimated/GestureHandler/Skia/Screens/FlashList/SharedElement) — worklets, UI thread animations, natywne gesty i 2D graphics."
        url="https://fotz.pl/blog/react-native-reanimated-gesture-handler-skia-animacje-gesty-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Native Reanimated i Gesty", url: "https://fotz.pl/blog/react-native-reanimated-gesture-handler-skia-animacje-gesty-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-rose-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "React Native Reanimated", url: "/blog/react-native-reanimated-gesture-handler-skia-animacje-gesty-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-pink-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React Native / Animations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Native Reanimated i Gesty
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Reanimated 3 (worklets, UI thread), Gesture Handler (Pan, Pinch, Swipe),
              React Native Skia (2D graphics) i FlashList dla płynnych animacji.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "UI thread anim", value: "Reanimated" },
                { label: "Native gesty", value: "Gesture H." },
                { label: "2D graphics", value: "Skia" },
                { label: "Fast lists", value: "FlashList" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-pink-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek React Native — animacje i performance</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Reanimated, Gesture Handler, Skia, react-native-screens, FlashList i SharedElement —
              wersja, thread i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wersja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Thread / Mechanizm</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {rnLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.wersja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.thread}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{l.kiedy}</td>
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

      <RelatedArticles currentArticleId="react-native-reanimated-gesture-handler-skia-animacje-gesty-2024" />
      <ContactSection />
    </Layout>
  );
}
