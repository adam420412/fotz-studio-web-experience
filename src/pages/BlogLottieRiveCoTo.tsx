import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Lottie i jak używać animacji After Effects w React?",
    answer: "Lottie (Airbnb, 2017): render animacji After Effects w przeglądarce. Format: JSON (.json) eksportowany przez bodymovin plugin. Skalowalne (wektorowe). Cross-platform: web, iOS, Android. Małe rozmiary plików (zwykle 10-100KB). LottieFiles: platforma z biblioteką gotowych animacji. Darmowe i płatne. Eksport do JSON, dotLottie (.lottie). Instalacja React: npm install lottie-react. import Lottie from 'lottie-react'. import animationData from './animation.json'. Lottie animationData={animationData} loop={true} autoplay={true}. Kontrola: const lottieRef = useRef(). lottieRef.current.play(). lottieRef.current.pause(). lottieRef.current.stop(). lottieRef.current.setSpeed(0.5). lottieRef.current.goToAndPlay(50). lottieRef.current.playSegments([start, end], true). dotLottie: nowy format (.lottie). ZIP archiwum z JSON + assety. Mniejszy od JSON. @lottiefiles/dotlottie-react: import {DotLottieReact} from '@lottiefiles/dotlottie-react'. DotLottieReact src='/animation.lottie' loop autoplay. Playback API przez ref. @lottie-interactive: interaktywne Lottie. Hover, click, morph triggers. Stany animacji. Wydajność Lottie: JSON parse przy ładowaniu. SVG rendering lub Canvas mode. Wiele Lottie = performance issue. Lazy load animacje poza viewport. IntersectionObserver do start/stop.",
  },
  {
    question: "Rive — interaktywne animacje z state machines?",
    answer: "Rive (dawniej Flare, 2021): narzędzie do tworzenia interaktywnych animacji. Stan machiny (state machines) — animacje reagujące na input. Drastycznie mniejsze pliki niż Lottie dla złożonych animacji. Runtime dla Web, iOS, Android, Flutter, C++. rive.app — edytor online. Instalacja: npm install @rive-app/react-canvas. import {useRive} from '@rive-app/react-canvas'. Podstawowe użycie: const {RiveComponent} = useRive({src: '/animation.riv', stateMachines: 'State Machine 1', autoplay: true}). return RiveComponent. Interakcja ze state machine: const {rive, RiveComponent} = useRive({...}). Inputs: const isHover = useStateMachineInput(rive, 'State Machine 1', 'isHover'). Boolean: isHover.value = true. Number: speedInput.value = 5. Trigger: triggerInput.fire(). Podejście event-driven: rive.on(EventType.StateChange, (e) => console.log(e)). Rive vs Lottie: Rive — interaktywność, state machines, dynamiczne. Lottie — After Effects export, design tool integration. Rive — kompresja lepsza dla złożonych animacji. Lottie — prostsze użycie dla read-only animacji. Rive jest lepszy dla: loading states z przejściami. Interaktywne ikony. Animowane ilustracje reagujące na dane. Gamifikacja. Rive community — gotowe animacje. Format .riv — binarny, wydajny. Rive Layout: kontrola rozmiaru i wyrównania. fit: rive.Layout.Fit.Cover. alignment: rive.Layout.Alignment.Center.",
  },
  {
    question: "Lottie vs Rive vs CSS animacje vs Framer Motion — kiedy co?",
    answer: "CSS Animations + CSS Transitions: najprostsze. Zero JS overhead. Brak zewnętrznych zależności. Ograniczone do CSS properties. Dobre dla: hover effects, button states, simple UI transitions. Framer Motion: React-first. Layout animations. Gesture-based. AnimatePresence. Keyframes. Orchestration (staggered, delay). Dobre dla: UI komponent animacje, page transitions, drag. Problemy z SSR (partial). Bundle: ~50KB. GSAP (GreenSock): profesjonalna, potężna. Dowolne właściwości CSS + JS. ScrollTrigger plugin — scroll-based animacje. MorphSVG — transformacje SVG. Dobre dla: marketing sites, scroll storytelling, complex sequencing. Bezpieczny dla SSR. Lottie: After Effects jakość. Animatorzy mogą pracować w AE. Gotowe animacje na LottieFiles. Tylko playback (no interactivity without workarounds). Dobre dla: splash screens, loading indicators, success animations, icons. Rive: interaktywna grafika. State machines. Dynamiczne animacje oparte na danych. Małe pliki. Dobre dla: interactive icons, game animations, animated illustrations. Wybór: Loading spinner -> Lottie lub CSS. Success/error animation -> Lottie. Hover ikony -> Rive lub CSS. Page transition -> Framer Motion. Scroll storytelling -> GSAP ScrollTrigger. Complex React UI -> Framer Motion. Marketing hero -> GSAP. Animated illustration reagująca na state -> Rive. Performance: CSS (best) > WAAPI > Framer Motion > GSAP > Lottie (heavy) > Rive (mid).",
  },
  {
    question: "Spine i After Effects — zaawansowane animacje webowe?",
    answer: "Spine (Esoteric Software): skeletal animation tool. Sprite-based (nie wektorowe). Gry i aplikacje interaktywne. Runtime dla Web (spine-ts). spine-phaser — integracja z Phaser.js. spine-canvas, spine-webgl. Droższy niż Rive ale potężniejszy dla gier. Używany: Apple, Bandai Namco. Po co After Effects dla web: motion design workflow. Compositing i efekty niemożliwe w Rive. bodymovin/LottieFiles plugin dla export. Limitacje AE -> Lottie: 3D layers (ograniczone). Niektóre efekty (brak). Expressions (ograniczone). Tekst (partial). Testy kompatybilności: LottieFiles preview tool. SVGator: animacje SVG online. Export jako CSS animacje lub SMIL. Bez zewnętrznej runtime. Integracja React: import SVG jako komponent. Animate przez CSS classes. Haiku Animator (wycofany): był generatorem React + Lottie. PIXI.js + animacje: WebGL renderer. PixiJS Animate (od Flash). spine-pixi integracja. Gsap + PixiJS dla 2D games. Three.js + animacje: 3D w przeglądarce. GLTF z animacjami. Three.js AnimationMixer. react-three-fiber (R3F) — React wrapper dla Three.js. drei — helpers. useAnimations hook. Babylon.js — alternatywa Three.js. Motion Canvas (open source): programatyczne animacje (jak Manim). TypeScript API. Dla twórców video/edu. Remotion: React -> video. Animacje w kodzie. Renderuj do MP4. Programatyczne video generation.",
  },
  {
    question: "Optymalizacja animacji — performance i dostępność?",
    answer: "CSS Performance rules: animuj tylko transform i opacity — GPU-accelerated. Unikaj animowania width, height, top, left (reflow). will-change: transform — hint dla GPU layer. Uważaj: nadużywanie will-change = więcej pamięci GPU. JavaScript Animation Performance: requestAnimationFrame. GSAP używa rAF automatycznie. Framer Motion automatycznie. Brak setTimeout/setInterval dla animacji. 60 FPS target: 16ms per frame. Chrome DevTools: Performance tab. Zielone: GPU layer (composited). Czerwone: reflow (problem). Prefers-reduced-motion: @media (prefers-reduced-motion: reduce) { * {animation-duration: 0.01ms} }. JavaScript: window.matchMedia('(prefers-reduced-motion: reduce)').matches. Framer Motion: useReducedMotion(). Wyłącz lub uproszczone animacje dla dostępności. Lazy loading animacji: IntersectionObserver. Start animacji gdy element widoczny. Lottie — autoplay: false, start przy visibility. React: useEffect + observer pattern. Framer Motion + AnimatePresence: unmount animacje. animate={controls} — manualna kontrola. Scroll animacje: Framer Motion useScroll + useTransform. GSAP ScrollTrigger. CSS scroll-driven animations (natywne Chrome 115+): animation-timeline: scroll(). Bez JavaScript. Fallback dla starszych przeglądarek. Animacje SVG: stroke-dasharray + stroke-dashoffset — path draw effect. CSS animation lub GSAP. Morphing SVG: GSAP MorphSVGPlugin. Flubber library. d3-interpolate-path. Animacje w React Native: Animated API (stary). React Native Reanimated v3 (polecany). Gesture Handler integration. useSharedValue, useAnimatedStyle. Worklet — runs on UI thread.",
  },
];

const animationTools = [
  { narzedzie: "Lottie (lottie-react)", typ: "Wektorowe z AE", interaktywnosc: "Playback tylko", rozmiar: "~50KB runtime", kiedy: "Loading, success, ilustracje z AE" },
  { narzedzie: "Rive (@rive-app)", typ: "Interactive + state machine", interaktywnosc: "State machines, triggers", rozmiar: "~30KB runtime", kiedy: "Interactive icons, game animacje, reagujące na data" },
  { narzedzie: "Framer Motion", typ: "React UI animations", interaktywnosc: "Gesture, layout, exit", rozmiar: "~50KB", kiedy: "UI transitions, page animations, React-first" },
  { narzedzie: "GSAP + ScrollTrigger", typ: "JS Animation Engine", interaktywnosc: "Scroll, timeline, pins", rozmiar: "~30KB + plugins", kiedy: "Marketing sites, scroll storytelling, complex sequences" },
  { narzedzie: "CSS Animations", typ: "Native browser", interaktywnosc: "Hover, focus, class", rozmiar: "0KB", kiedy: "Simple UI, hover effects, no JS overhead" },
  { narzedzie: "WAAPI (Web Animations API)", typ: "Native browser JS", interaktywnosc: "Programatyczne", rozmiar: "0KB", kiedy: "Performance-critical, native API bez biblioteki" },
];

export default function BlogLottieRiveCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Lottie, Rive, Framer Motion i GSAP | Fotz Studio"
        description="Lottie (After Effects JSON), Rive (state machines), dotLottie, @lottie-interactive — porównanie z Framer Motion, GSAP ScrollTrigger i CSS animacjami w React."
        canonicalUrl="https://fotz.pl/blog/lottie-rive-framer-motion-gsap-animacje-webowe-react-2024"

        keywords="Lottie, Rive, Framer Motion i GSAP co to jest, Lottie, Rive, Framer Motion i GSAP jak działa, Lottie, Rive, Framer Motion i GSAP tutorial, Lottie, Rive, Framer Motion i GSAP przykład, czym jest Lottie, Rive, Framer Motion i GSAP, Lottie, Rive, Framer Motion i GSAP dokumentacja, Lottie, Rive, Framer Motion i GSAP przewodnik"

        canonical="https://fotz.pl/blog/lottie-rive-framer-motion-gsap-animacje-webowe-react-2024"
      />
      <ArticleSchema
        title="Lottie, Rive, Framer Motion i GSAP — animacje webowe w React 2024?"
        description="6 narzędzi animacji (Lottie/Rive/Framer Motion/GSAP/CSS/WAAPI) — After Effects import, interaktywne state machines, scroll animacje i optymalizacja performance."
        url="https://fotz.pl/blog/lottie-rive-framer-motion-gsap-animacje-webowe-react-2024"
        datePublished="2024-04-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Lottie i Rive animacje", url: "https://fotz.pl/blog/lottie-rive-framer-motion-gsap-animacje-webowe-react-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-yellow-950 to-amber-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Lottie i Rive animacje", href: "/blog/lottie-rive-framer-motion-gsap-animacje-webowe-react-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-yellow-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Animations / Motion
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lottie, Rive i Animacje Webowe
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Lottie (After Effects JSON), Rive (state machines), dotLottie,
              GSAP ScrollTrigger i CSS scroll-driven animations w React.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "After Effects", value: "Lottie JSON" },
                { label: "Interactive", value: "Rive states" },
                { label: "Scroll magic", value: "GSAP ST" },
                { label: "Zero JS", value: "CSS native" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-yellow-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi animacji webowych — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Lottie, Rive, Framer Motion, GSAP, CSS Animations i WAAPI —
              typ, interaktywność, rozmiar i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Interaktywność</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Runtime</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {animationTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.interaktywnosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.rozmiar}</td>
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

      <RelatedArticles currentArticleId="lottie-rive-framer-motion-gsap-animacje-webowe-react-2024" />
      <ContactSection />
    </Layout>
  );
}
