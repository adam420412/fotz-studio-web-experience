import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "react-spring — animacje fizyki sprężynowej w React?",
    answer: "react-spring: Poimandres collective. Spring physics. Naturalny ruch. Instalacja: npm install @react-spring/web. Podstawy: import {useSpring, animated} from '@react-spring/web'. const [springs, api] = useSpring(() => ({from: {x: 0}})). onClick: api.start({x: 100}). return animated.div style={springs}. Konfiguracja sprężyny: config: {mass: 1, tension: 280, friction: 60}. Presets: config.default, config.gentle, config.wobbly, config.stiff, config.slow, config.molasses. useSpring: jeden element. useSprings: lista elementów. useTrail: łańcuch elementów. useTransition: wejście/wyjście elementów. useChain: sekwencja animacji. useTransition: import {useTransition, animated} from '@react-spring/web'. const [items, setItems] = useState(['A', 'B', 'C']). const transitions = useTransition(items, {from: {opacity: 0, y: -40}, enter: {opacity: 1, y: 0}, leave: {opacity: 0, y: 40}, keys: item => item}). return transitions((style, item) => animated.div style={style} {item} /animated.div). Mount/unmount animacje. useTrail: const trail = useTrail(items.length, {from: {opacity: 0}, to: {opacity: 1}}). Staggered animations. Każdy element po poprzednim. Scroll-triggered: useIntersectionObserver + api.start. Interpolacje: x.to((val) => val * 2). to([0, 100], [0, 1]) — range mapping. Gesture: @use-gesture/react + react-spring.",
  },
  {
    question: "Motion (dawniej Framer Motion) — animacje deklaratywne w React?",
    answer: "motion (motion.dev): Matt Perry. Dawniej Framer Motion (nadal Framer Motion jako React). motion = universalny. Framer Motion = React. Instalacja React: npm install framer-motion (Framer Motion nadal). npm install motion (motion.dev). Podstawy Framer Motion: import {motion} from 'framer-motion'. motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}. Warianty: const variants = {hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0}}. motion.div variants={variants} initial='hidden' animate='visible'. Children inherit. orchestration: staggerChildren, delayChildren. AnimatePresence: exit animations. import {AnimatePresence} from 'framer-motion'. AnimatePresence. {isVisible && motion.div exit={{opacity: 0}}. /motion.div}. /AnimatePresence. Layout animations: layout={true}. Automatyczna animacja zmiany layoutu. LayoutGroup dla wielu elementów. Drag: drag, dragConstraints, onDrag, onDragEnd. Gesture: whileHover, whileTap, whileFocus, whileDrag, whileInView. useAnimation: const controls = useAnimation(). controls.start('visible'). Sekwencja: controls.start({opacity: 0}). then controls.start({opacity: 1}). Scroll: useScroll, useMotionValueEvent. Parallax: useParallax. SVG paths: pathLength, pathOffset. motion.path. Viewport: whileInView, viewport: {once: true}.",
  },
  {
    question: "Motion One — ultra-lekkie animacje przez Web Animations API?",
    answer: "Motion One (motion.dev/one): Matt Perry. Web Animations API wrapper. Mały (2.5kB). Bez React dependency. Vanilla JS. Instalacja: npm install motion. import {animate, scroll, timeline, stagger, spring} from 'motion'. Animacje: animate('.box', {opacity: [0, 1], transform: ['translateY(-20px)', 'translateY(0px)']}, {duration: 0.5}). animate(element, keyframes, options). Elementy, selektory, tablice. Spring: animate('.box', {transform: 'translateX(100px)'}, {easing: spring({stiffness: 300, damping: 30})}). Scroll-driven: scroll(animate('.progress', {scaleX: [0, 1]})). scroll((progress) => { indicator.style.opacity = progress }). Automatycznie linki do scroll. timeline: timeline([['.box', {opacity: 1}], ['.text', {opacity: 1}, {at: '+0.1'}]]). Sekwencja z at (offset). stagger: animate('.items', {opacity: [0, 1]}, {delay: stagger(0.1)}). Każdy element po 0.1s. React hooks motion: import {useAnimate} from 'motion/react'. const [scope, animate] = useAnimate(). animate('li', {opacity: 0}). Zakres DOM. usePresence: exit animations. Interakcje: click, hover. Niezależne od React lifecycle. Playwright testing: animacje testowalne. Reduced motion: matchMedia('prefers-reduced-motion'). Respektuj preferencje. motion.one vs Framer Motion: motion.one — mniejszy, vanilla. Framer Motion — React, więcej features. Combo: motion.one dla proste, Framer Motion dla złożone.",
  },
  {
    question: "GSAP — zaawansowane animacje JavaScript i ScrollTrigger?",
    answer: "GSAP: GreenSock Animation Platform. Profesjonalne animacje. Industry standard. Instalacja: npm install gsap. Podstawy: import {gsap} from 'gsap'. gsap.to('.box', {x: 100, opacity: 1, duration: 1, ease: 'power2.out'}). gsap.from: animuj z wartości. gsap.fromTo: pełna kontrola. gsap.set: natychmiastowe. Timeline: const tl = gsap.timeline(). tl.to('.logo', {y: 0, opacity: 1}). tl.to('.nav', {opacity: 1}, '-=0.2'). tl.to('.hero', {scale: 1}, '0.5'). tl.play(), tl.reverse(), tl.pause(). Easing: power1-4, back, bounce, elastic. CustomEase plugin. ScrollTrigger: gsap.registerPlugin(ScrollTrigger). gsap.to('.box', {xPercent: -100, ease: 'none', scrollTrigger: {trigger: '.box', start: 'top top', end: 'bottom top', scrub: true, pin: true}}). scrub: smooth scroll sync. pin: element podczas scroll. markers: debug. Horizontal scroll: gsap.to('.panels', {xPercent: -100 * (panelCount - 1), scrollTrigger: {trigger: '.container', pin: true, scrub: 1, snap: 1/(panelCount-1)}}). GSAP z React: useRef dla targets. useLayoutEffect dla animacje (nie useEffect). ctx = gsap.context(() => {...}, rootRef). ctx.revert() w cleanup. React nie zarządza animacjami. gsap.core.globals('React', React). Plugins: ScrollTrigger (darmowy). SplitText. MorphSVG. DrawSVG. Draggable. flip. Większość premium: Club GreenSock.",
  },
  {
    question: "Porównanie animacji — react-spring vs Framer Motion vs Motion One vs GSAP?",
    answer: "react-spring: spring physics. Naturalny ruch. Gesture integracja. React-focused. Kiedy: realistic physics, drag, gesture-based. Bundle: 20kB gzip. Framer Motion: deklaratywne. Layout animations. AnimatePresence. Warianty. Kiedy: proste animacje React, mount/unmount, layout shifts. Bundle: 50kB gzip. Motion One (motion.dev/one): minimalistyczny. Web Animations API. Vanilla lub React. Scroll-driven wbudowane. Kiedy: performance, małe bundle, scroll animations. Bundle: 2.5kB. GSAP: profesjonalne. ScrollTrigger. Timeline. Horizontal scroll. SVG. Kiedy: kompleksowe animacje, marketing sites, scroll storytelling, SVG. Bundle: 20-30kB core. Plugins dodatkowe. Auto-animate: npm install @formkit/auto-animate. Wrapper dla animacji mount/unmount. Jeden atrybut. Kiedy: proste listy. Bardzo mały. React Spring vs Framer Motion: oba React. Framer Motion łatwiej (deklaratywne). react-spring bardziej fizyczne. Dla layoutów: Framer Motion (layout prop). Scroll + reveal: Motion One lub GSAP. Complex sequences: GSAP timeline. Reduced motion: prefers-reduced-motion. Wszystkie powinny respektować. CSS alternatywa: CSS transitions i animations. Performant (compositor). Ograniczone możliwości. Hybrid: CSS dla prostych. JS biblioteka dla złożonych. Performance: GPU layers (transform, opacity). Avoid layout triggers. Will-change ostrożnie. requestAnimationFrame. Compositor thread.",
  },
];

const animationLibraries = [
  { biblioteka: "react-spring", typ: "Spring Physics", kiedy: "Naturalne animacje, drag, gesture, fluid motion" },
  { biblioteka: "Framer Motion", typ: "Deklaratywne", kiedy: "Mount/unmount, layout animations, warianty, hover" },
  { biblioteka: "Motion One", typ: "Web Animations API", kiedy: "Minimalne bundle, scroll-driven, vanilla + React" },
  { biblioteka: "GSAP + ScrollTrigger", typ: "Professional", kiedy: "Storytelling, horizontal scroll, SVG, marketing" },
  { biblioteka: "useTrail (react-spring)", typ: "Stagger", kiedy: "Listy z opóźnieniem — kolejne elementy" },
  { biblioteka: "AnimatePresence", typ: "Exit animations", kiedy: "Unmount z animacją — modals, lists, routes" },
];

export default function BlogReactSpringMotionCoTo() {
  return (
    <Layout>
      <SEOHead
        title="react-spring, Framer Motion, Motion One i GSAP — animacje React 2024 | Fotz.pl"
        description="Animacje React 2024: react-spring (spring physics), Framer Motion (deklaratywne), Motion One (Web Animations API, 2.5kB), GSAP ScrollTrigger i porównanie bibliotek."
        canonicalUrl="https://fotz.pl/blog/react-spring-framer-motion-motion-one-gsap-animacje-react-2024"
      />
      <ArticleSchema
        title="react-spring, Framer Motion, Motion One i GSAP — animacje React 2024?"
        description="react-spring spring physics, Framer Motion AnimatePresence, Motion One Web Animations API, GSAP ScrollTrigger i porównanie bundle size i zastosowań."
        url="https://fotz.pl/blog/react-spring-framer-motion-motion-one-gsap-animacje-react-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Animacje React 2024", url: "https://fotz.pl/blog/react-spring-framer-motion-motion-one-gsap-animacje-react-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-fuchsia-950 to-pink-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Animacje React 2024", href: "/blog/react-spring-framer-motion-motion-one-gsap-animacje-react-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-fuchsia-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Animacje / React / Motion / GSAP
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Animacje React 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              react-spring (physics), Framer Motion (deklaratywne),
              Motion One (2.5kB) i GSAP ScrollTrigger.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Physics", value: "react-spring" },
                { label: "Deklaratywne", value: "Framer Motion" },
                { label: "Ultra-light", value: "Motion One" },
                { label: "Pro scroll", value: "GSAP" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 biblioteki animacji — typ i kiedy wybrać</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              react-spring, Framer Motion, Motion One, GSAP, useTrail i AnimatePresence —
              typ i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {animationLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.typ}</td>
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

      <ContactSection />
    </Layout>
  );
}
