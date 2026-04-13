import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest React Three Fiber i jak działa 3D w React?",
    answer: "React Three Fiber (R3F, Poimandres collective): React renderer dla Three.js. Deklaratywne JSX dla 3D. Three.js pod spodem — pełna moc. Instalacja: npm install @react-three/fiber three. import {Canvas} from '@react-three/fiber'. Canvas: WebGL context + scene + camera + renderer. Pętla renderowania automatyczna. Resize handler. Pixelratio. Dpr: device pixel ratio. Podstawy: Canvas dpr={[1, 2]} style={{height: '100vh'}}. mesh — Three.Mesh (geometry + material). boxGeometry args={[1, 1, 1]}. meshStandardMaterial color='hotpink'. Każdy Three.js element -> JSX tag. THREE.BoxGeometry -> boxGeometry. THREE.MeshStandardMaterial -> meshStandardMaterial. camelCase konstruktory. args -> constructor arguments. Lights: ambientLight intensity={0.5}. pointLight position={[10, 10, 10]}. directionalLight. spotLight. Kamera: perspectiveCamera position={[5, 5, 5]}. orthographicCamera. useThree: {camera, gl, scene, viewport}. Resize: viewport.width, viewport.height. Event handling: onClick, onPointerOver, onPointerOut. mesh onClick={handleClick}. useFrame: called every frame (60fps). useFrame((state, delta) => {meshRef.current.rotation.y += delta}). Dostęp do renderer, clock. Refs: useRef na mesh. meshRef.current = Three.Mesh. Direct Three.js mutations. Geometria własna: Manualne position/normal/uv bufferAttributes.",
  },
  {
    question: "Drei — pomocniki i komponenty dla React Three Fiber?",
    answer: "@react-three/drei: zestaw helpers i abstrakcji dla R3F. npm install @react-three/drei. OrbitControls: obracaj, zoom, pan myszą. import {OrbitControls} from '@react-three/drei'. OrbitControls enableZoom enablePan. Stars: losowe gwiazdy w tle. Stars radius={100} depth={50} count={5000} factor={4}. Environment: HDR environment lighting. Environment preset='sunset'. Presets: sunset, dawn, night, warehouse, forest, apartment, studio, city, park, lobby. Text: tekst 3D. Text font='/fonts/Inter-Bold.woff'. Text children='Hello 3D'. Float: animacja unoszenia. Float speed={2} floatIntensity={2}. MeshTransmissionMaterial: szkło, przezroczystość. MeshDistortMaterial: wave distortion. Html: HTML element w 3D space. Html position={[1, 1, 0]} as='div'. Dobry dla labels, popups. useGLTF: ładuj GLTF/GLB modele. const {scene, nodes, animations} = useGLTF('/model.glb'). primitive object={scene}. useTexture: ładuj tekstury. const texture = useTexture('/texture.jpg'). useAnimations: Three.js AnimationMixer. const {actions} = useAnimations(animations, group). actions.walk.play(). Instancing: InstancedMesh — tysiące obiektów. useInstances helper. Dobre dla particles, grass. Bounding Box: useBounds hook. Skupia kamerę na zaznaczonych obiektach. Softbox: softShadows(). Piękne miękkie cienie. Shadows: shadowMap w Canvas. castShadow, receiveShadow.",
  },
  {
    question: "React Three Fiber — performance, fizyka i postprocessing?",
    answer: "Performance: useFrame zamiast setState — brak re-renderu. Mutations przez refs. InstancedMesh dla wielu identycznych obiektów. Levels of Detail (LOD): lod distances. Frustum culling: Three.js automatyczny. React Spring + R3F: @react-spring/three. useSpring dla 3D animations. Smooth interpolacja. Fizyka — Rapier (@react-three/rapier): WebAssembly physics engine. import {Physics, RigidBody} from '@react-three/rapier'. Physics: provider. RigidBody type='dynamic'. colliders='hull'. Typy rigidbody: fixed, dynamic, kinematic. Colliders: cuboid, ball, hull, trimesh. Forces: applyImpulse(). Gravity: -9.81. Postprocessing (@react-three/postprocessing): screen-space effects. EffectComposer. import {Bloom, Vignette, DepthOfField} from '@react-three/postprocessing'. Bloom — glowing lights. DepthOfField — bokeh. SSAO — ambient occlusion. Vignette — dark edges. Outline — edge highlight. Shaders custom (GLSL): shaderMaterial helper z drei. Uniforms. vertexShader, fragmentShader strings. glsl-literal IDE support. GPU particles: Points geometry. ShaderMaterial. Każdy punkt to particle. Textury: TextureLoader. RepeatWrapping. anisotropy dla jakości na kątach. Shadows: shadowMap: {enabled: true, type: PCFSoftShadowMap}. Mesh: castShadow, receiveShadow. Performance monitor: Perf (r3f-perf). FPS, draw calls, memory. ThreeJS performance tips: batchedMesh. texture atlas. dispose geometry/material. Garbage collection.",
  },
  {
    question: "Ładowanie modeli 3D — GLTF, GLB i sketchfab?",
    answer: "GLTF (GL Transmission Format): standard formatu 3D. JSON + binary. GLB: binary GLTF (jeden plik). Preferowany dla web. Mniejszy, szybszy parse. Sketchfab: marketplace modeli 3D. Wiele darmowych GLB. Download i użyj w R3F. glTF Transform: optymalizacja modeli. gltf-transform optimize. Kompresja: KTX2 (Basis Universal) textury. Draco kompresja geometrii. Mniejszy rozmiar do 90%. Zaoszczędź transfer. useGLTF.preload('/model.glb'): preload przed renderem. Unikaj ładowania podczas render. Suspense boundary: Suspense fallback={Loading}. useGLTF zawiesza komponent podczas ładowania. GLB w public folder: Next.js — umieść w /public. R3F: useGLTF('/model.glb'). Vite: import url from './model.glb?url'. Animacje GLTF: mixer z useAnimations. clip.actions — lista animacji. crossFadeTo() — blend między animations. Loop.Once, Loop.Repeat, Loop.PingPong. Skeleton + Skinned Mesh: SkinnedMesh dla postaci. Bones hierarchy. Rigging w Blender. Export -> GLB. Draco loading: DRACOLoader. setDecoderPath z CDN. Mniejszy download = szybszy load. Babylon.js vs Three.js: Babylon.js — game engine. Wbudowane physics, audio, VR. Editor (Babylon Playground). Dokumentacja świetna. Three.js — więcej flexibility, mniejszy. R3F — React integration. PlayCanvas: online editor + engine. Collaboration. Game-focused. A-Frame: HTML-based VR/AR. WebXR. Doskonały dla AR quick start.",
  },
  {
    question: "WebXR, VR i AR w React — jak budować immersive experiences?",
    answer: "WebXR: Web API dla VR i AR. Wymaga HTTPS. Wideo od urządzenia (AR). 6DOF tracking (VR). R3F + XR (@react-three/xr): XR komponent z R3F. XRButton — Enter VR/AR button. useXR hook. useController hook — VR controllers. useHand — hand tracking. XRInteractableObject. AR Hit Testing: ARButton. useHitTest hook. Umieszczaj obiekty na realnych powierzchniach. Meta Quest, Apple Vision Pro, PC VR. A-Frame: HTML/custom elements. Deklaratywne XR. Znacznie prostsze niż R3F+XR. Szybkie prototypy AR/VR. Brak React. 8th Wall: Web AR bez markerów. World tracking. Face tracking. Image tracking. Komercyjny ($). Three.js + 8th Wall. Model Viewer: google/model-viewer web component. GLB viewer w AR. AR Quick Look (iOS) + Scene Viewer (Android). Bez kodu JS. Embed link rel='ar'. WebAR.js: otwarte, darmowe AR. Marker-based (NFT, Hiro). Image tracking. Face tracking. A-Frame + AR.js. ZapWorks: Studio + Designer. Visual AR builder. Platforma komercyjna. VR performance: 90fps target (VR sickness). foveated rendering. Eye tracking dla foveation. Reduce draw calls. InstancedMesh. Spatial audio: Three.js AudioListener. PositionalAudio. PannerNode (Web Audio API). Haptics: XRGamepad.hapticActuators. pulse() — vibration feedback. Kiedy Web VR/AR: product visualization. Training simulation. Virtual showrooms. Education.",
  },
];

const threeJsTools = [
  { narzedzie: "@react-three/fiber", opis: "React renderer dla Three.js", uzywaj: "Cała 3D scena, gry, produkty", bundle: "~400KB (Three.js)" },
  { narzedzie: "@react-three/drei", opis: "Helpers: Controls, Loaders, Shaders", uzywaj: "Zawsze z R3F", bundle: "~50KB" },
  { narzedzie: "@react-three/rapier", opis: "WebAssembly fizyka", uzywaj: "Fizyczne symulacje, gry", bundle: "~800KB WASM" },
  { narzedzie: "@react-three/postprocessing", opis: "Screen-space effects (Bloom, DOF)", uzywaj: "Efekty wizualne, rendering jakość", bundle: "~200KB" },
  { narzedzie: "@react-three/xr", opis: "VR/AR support WebXR", uzywaj: "VR/AR experiences, Quest, Vision Pro", bundle: "~30KB" },
  { narzedzie: "Babylon.js", opis: "Full game engine (alternative)", uzywaj: "Game engine, wbudowana fizyka", bundle: "~700KB" },
];

export default function BlogReactThreeFiberCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Three Fiber, Drei i 3D w React — Three.js, fizyka i WebXR 2024 | Fotz.pl"
        description="@react-three/fiber (JSX dla Three.js), @react-three/drei (OrbitControls, GLTF, Text), Rapier fizyka, postprocessing (Bloom, DOF), VR/AR z @react-three/xr i WebXR."
        canonicalUrl="https://fotz.pl/blog/react-three-fiber-drei-3d-threejs-fizyka-webxr-react-2024"

        keywords="React Three Fiber, Drei i 3D w React co to jest, React Three Fiber, Drei i 3D w React jak działa, React Three Fiber, Drei i 3D w React tutorial, React Three Fiber, Drei i 3D w React przykład, czym jest React Three Fiber, Drei i 3D w React, React Three Fiber, Drei i 3D w React dokumentacja, React Three Fiber, Drei i 3D w React przewodnik"
      />
      <ArticleSchema
        title="React Three Fiber, Drei i 3D w React — Three.js, fizyka i WebXR 2024?"
        description="6 narzędzi 3D (R3F/Drei/Rapier/postprocessing/XR/Babylon.js) — JSX dla Three.js, OrbitControls, GLTF loading, Rapier fizyka, Bloom/DOF effects i VR/AR."
        url="https://fotz.pl/blog/react-three-fiber-drei-3d-threejs-fizyka-webxr-react-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Three Fiber 3D", url: "https://fotz.pl/blog/react-three-fiber-drei-3d-threejs-fizyka-webxr-react-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "React Three Fiber 3D", href: "/blog/react-three-fiber-drei-3d-threejs-fizyka-webxr-react-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / 3D / WebGL
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Three Fiber i 3D w React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              R3F (JSX dla Three.js), Drei (helpers), Rapier (fizyka),
              postprocessing (Bloom, DOF) i WebXR (VR/AR) w React.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "JSX 3D", value: "R3F" },
                { label: "Helpers+models", value: "Drei" },
                { label: "WASM physics", value: "Rapier" },
                { label: "VR/AR", value: "WebXR" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-violet-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi 3D dla React — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              R3F, Drei, Rapier, postprocessing, @react-three/xr i Babylon.js —
              opis, zastosowanie i bundle.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Używaj do</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle</th>
                </tr>
              </thead>
              <tbody>
                {threeJsTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.opis}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.uzywaj}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.bundle}</td>
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
