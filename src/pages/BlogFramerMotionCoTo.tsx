import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Framer Motion i jak działa animacja w React?",
    answer: "Framer Motion: biblioteka animacji dla React (Matt Perry, Framer, 2019). Declarative API. Physics-based animations. Gesture support. Layout animations. motion component: zamień div na motion.div. Dodaj animate, initial, transition props. motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}. Kluczowe koncepty: initial — stan startowy. animate — stan docelowy. exit — stan przy unmount (wymaga AnimatePresence). transition — duration, delay, ease, type. variants — nazwane stany animacji. const variants = {hidden: {opacity: 0}, visible: {opacity: 1}}. motion.div variants={variants} initial='hidden' animate='visible'. Stagger children: staggerChildren: 0.1 w transition parentu — dzieci animują się po kolei. AnimatePresence: animacja przy unmount. Wrap warunkowych komponentów. key prop — identyfikuje element dla exit animation. Layout animations: motion.div layout — automatycznie animuje zmiany layoutu. layoutId — shared element transition (morph między elementami). Drag: motion.div drag dragConstraints={{left: -100, right: 100}}. dragElastic, dragMomentum, onDrag, onDragEnd. Gestures: whileHover, whileTap, whileFocus, whileDrag — animacje na gesture. Scroll animations: useScroll() — scrollY/scrollX/scrollYProgress. motion.div style={{opacity: scrollYProgress}}. useTransform(scrollYProgress, [0, 1], [0, 1]).",
  },
  {
    question: "Framer Motion — zaawansowane: spring, useAnimate i Reorder?",
    answer: "Spring physics: type: 'spring'. stiffness (200), damping (10), mass (1). Bez duration — fizyka określa czas. Naturalnie wyglądające animacje. stiffness: 300 = szybka. stiffness: 50 = wolna. Tween: type: 'tween' (domyślny). ease: 'linear' / 'easeIn' / 'easeOut' / 'easeInOut' / 'circOut' / cubicBezier([.17,.67,.83,.67]). Inertia: type: 'inertia' dla momentum po drag. useAnimate hook (Framer Motion 10+): const [scope, animate] = useAnimate(). animate(scope, {opacity: 1}). animate(scope.current.querySelector('.child'), {x: 100}). Sekwencje: await animate(element, {opacity: 0}). await animate(element, {x: 100}). Reorder.Group i Reorder.Item: drag-to-reorder listy. Automatyczna animacja przy zmianie kolejności. axis='y' lub axis='x'. Bez własnej logiki sortowania (Reorder zarządza). MotionValue: useMotionValue(0) — reaktywna wartość animacji. useTransform(motionValue, [0, 100], [0, 1]) — mapowanie wartości. motionValue.set(50) — programmatyczna zmiana. useSpring(motionValue, {stiffness: 200}) — spring na motionValue. Viewport animations: motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} viewport={{once: true, margin: '-100px'}}. Brak potrzeby Intersection Observer. Performans: GPU-accelerated (transform, opacity). will-change: auto. useReducedMotion() — respektuj user preference. Framer Motion 11: mini bundle (bez 3D). Optimized scroll. View transitions.",
  },
  {
    question: "GSAP — GreenSock Animation Platform, kiedy zamiast Framer Motion?",
    answer: "GSAP: profesjonalna biblioteka animacji JS (GreenSock, 1998/2008). Obsługuje non-React, React, vanilla JS, Canvas, SVG. Gsap.to(element, {duration: 1, x: 100, opacity: 0, ease: 'power2.out'}). gsap.from() — animuj od. gsap.fromTo() — od do. gsap.set() — bez animacji. Timeline: const tl = gsap.timeline(). tl.to('.box', {x: 100}).to('.text', {opacity: 0}, '-=0.3'). Offset: '+=0.5' (po poprzedniej + 0.5s), '-=0.3' (przed końcem), '<' (równolegle). Plugins GSAP (większość bezpłatna): ScrollTrigger: animacje na scroll. gsap.registerPlugin(ScrollTrigger). scrollTrigger: {trigger: '.section', start: 'top 80%', toggleActions: 'play none none reverse'}. SplitText (premium): animuj litery / słowa / linie. Flip Plugin: animacje layoutu (jak Framer Motion layout). DrawSVG, MorphSVG (premium). GSAP vs Framer Motion: GSAP — więcej kontroli, ScrollTrigger (niezastąpiony), non-React, SVG, timeline. Framer Motion — React-native DX, layout animations, declarative, gestures, prostszy. GSAP React: useGSAP hook (@gsap/react). Scope + revert. Cleanup automatyczny. Kiedy GSAP: kompleksowe animacje scroll. SVG animations. Timeline z wieloma elementami. Non-React projekty. Kiedy Framer Motion: React SPA. Proste animacje. Gesture-driven UI. Layout animations. Shared element transitions.",
  },
  {
    question: "CSS animations i transitions — kiedy nie potrzebujesz biblioteki?",
    answer: "CSS Transitions: transition: opacity 0.3s ease, transform 0.2s ease. Przy hover, :focus, klasa zmiana. Najlepsza wydajność — GPU, nie blokuje JS thread. CSS Animations: @keyframes fadeIn {from {opacity: 0} to {opacity: 1}}. animation: fadeIn 0.5s ease forwards. animation-delay, animation-iteration-count, animation-fill-mode. Nowe CSS Properties 2024: scroll-driven animations: animation-timeline: scroll(). animation-range: entry 0% 100%. Brak JS potrzebny dla animacji scroll. @starting-style: animacja przy display:none -> display:block przejście. transition-behavior: allow-discrete. view-transition-name + @view-transition: cross-document transitions. Wreszcie bez JS. animation-composition: add / accumulate. CSS @layer: kaskada animacji. prefers-reduced-motion: @media (prefers-reduced-motion: reduce). Szanuj preferencje użytkownika. Kiedy CSS wystarczy: hover states, button feedback. Simple fade/slide przy route change. Loading spinners. Toast notifications. Skeleton screens. Kiedy potrzebujesz biblioteki: shared element transitions (bez View Transitions API). Gesture-driven animations. Physics-based spring. Complex sequenced animations. Imperatywne animacje. Tailwind animacje: animate-spin, animate-bounce, animate-ping, animate-pulse. tailwindcss-animate plugin. cn() do warunkowego stosowania. Radix UI + Tailwind: data-[state=open]:animate-in data-[state=closed]:animate-out. Wbudowane w shadcn/ui.",
  },
  {
    question: "Performans animacji — GPU acceleration, Layout Thrashing i will-change?",
    answer: "Jak przeglądarka renderuje: Style -> Layout -> Paint -> Composite. Animacja transform/opacity: tylko Composite (GPU). Animacja width/height/top/left: Layout + Paint + Composite (wolne). Zasada: animuj TYLKO transform i opacity dla GPU acceleration. transform: translateX(100px) translate zamiast left: 100px. opacity zamiast visibility. Layout Thrashing: odczyt i zapis DOM na przemian -> przeglądarka re-layoutuje co iterację. Złe: element.style.width = element.offsetWidth + 10 + 'px' (w pętli). Dobre: batchuj odczyty, potem zapisy. requestAnimationFrame: synchronizuj z browser repaint. Nie setTimeout dla animacji. cancelAnimationFrame dla cleanup. will-change: hint dla GPU. will-change: transform na animowanych elementach. Nie używaj na wszystkim (zbędne zasoby GPU). will-change: auto po animacji przez JS. Composite layers: każdy will-change tworzy layer. Zbyt wiele = memory issues. Narzędzia: Chrome DevTools -> Performance -> record. Framerate (60fps = 16ms per frame). Long Tasks (czerwone). Layer panel — composite layers. Rendering panel — FPS meter. Web Animations API (WAAPI): element.animate([{opacity: 0}, {opacity: 1}], {duration: 500, easing: 'ease'}). Native, GPU, bez bibliotek. Framer Motion używa WAAPI. React 18 + useTransition: startTransition dla non-urgent updates. Nie blokuj animacji heavy re-renderami. useDeferredValue — defer expensive renders. Wirtualizacja: nie animuj 1000 elementów jednocześnie. react-virtual + animate only visible.",
  },
];

const animationTools = [
  { narzedzie: "Framer Motion", rozmiar: "~40KB", typ: "React library", mocne: "Layout, gestures, declarative", kiedy: "React SPA, complex UI animations" },
  { narzedzie: "GSAP + ScrollTrigger", rozmiar: "~50KB", typ: "Vanilla JS", mocne: "Timelines, ScrollTrigger, SVG", kiedy: "Scroll storytelling, complex sequences" },
  { narzedzie: "CSS Transitions/Animations", rozmiar: "0KB", typ: "Native CSS", mocne: "GPU, no JS, best performance", kiedy: "Hover, simple state changes" },
  { narzedzie: "CSS Scroll-driven", rozmiar: "0KB", typ: "Native CSS 2024", mocne: "Scroll bez JS, Chrome 115+", kiedy: "Modern browsers, scroll effects" },
  { narzedzie: "Web Animations API", rozmiar: "0KB", typ: "Native Web API", mocne: "GPU, imperativo, compositable", kiedy: "Custom animation libraries" },
  { narzedzie: "Motion One", rozmiar: "~3KB", typ: "WAAPI wrapper", mocne: "Tiny, WAAPI-based, timeline", kiedy: "Vanilla JS, bundle size critical" },
];

export default function BlogFramerMotionCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Framer Motion, GSAP, CSS Animations | Fotz Studio"
        description="Framer Motion (React), GSAP ScrollTrigger, CSS scroll-driven animations, Web Animations API, GPU acceleration, Layout Thrashing — kompletny przewodnik…"
        canonicalUrl="https://fotz.pl/blog/framer-motion-gsap-css-animations-web-animacje-react-2024"

        keywords="Framer Motion, GSAP, CSS Animations co to jest, Framer Motion, GSAP, CSS Animations jak działa, Framer Motion, GSAP, CSS Animations tutorial, Framer Motion, GSAP, CSS Animations przykład, czym jest Framer Motion, GSAP, CSS Animations, Framer Motion, GSAP, CSS Animations dokumentacja, Framer Motion, GSAP, CSS Animations przewodnik"

        canonical="https://fotz.pl/blog/framer-motion-gsap-css-animations-web-animacje-react-2024"
      />
      <ArticleSchema
        title="Framer Motion, GSAP, CSS Animations — web animacje React 2024?"
        description="6 narzędzi animacji (Framer Motion/GSAP/CSS/ScrollTrigger/WAAPI/Motion One) — motion components, spring physics, ScrollTrigger, GPU acceleration i performance."
        url="https://fotz.pl/blog/framer-motion-gsap-css-animations-web-animacje-react-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Framer Motion i Animacje", url: "https://fotz.pl/blog/framer-motion-gsap-css-animations-web-animacje-react-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-fuchsia-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Framer Motion i Animacje", url: "/blog/framer-motion-gsap-css-animations-web-animacje-react-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-pink-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Animations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Framer Motion i Animacje Web
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Framer Motion dla React, GSAP ScrollTrigger, CSS scroll-driven animations
              i Web Animations API — od prostych do zaawansowanych animacji.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "React declarative", value: "Framer" },
                { label: "Scroll storytelling", value: "GSAP" },
                { label: "Zero JS overhead", value: "CSS" },
                { label: "GPU acceleration", value: "Transform" },
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

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi do animacji webowych</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Framer Motion, GSAP, CSS animations, Scroll-driven, WAAPI i Motion One
              — każde narzędzie optymalizuje inny case użycia.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozmiar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Mocne strony</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {animationTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.rozmiar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.mocne}</td>
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

      <RelatedArticles currentArticleId="framer-motion-gsap-css-animations-web-animacje-react-2024" />
      <ContactSection />
    </Layout>
  );
}
