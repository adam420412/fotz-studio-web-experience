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
    question: "Co to jest next/image i jak działa optymalizacja obrazów?",
    answer: "next/image (Next.js wbudowany): automatyczna optymalizacja obrazów. Lazy loading by default. Blur placeholder. Responsive sizes. Automatyczna konwersja do WebP/AVIF. Rozmiar na żądanie przez API /_next/image. import Image from 'next/image'. Image src='/hero.jpg' alt='Hero' width={800} height={600}. Fill mode: Image src fill className='object-cover' — zajmuje kontener. Wymagany: container z position: relative. Priority prop: Image priority — LCP image. Brak lazy loading. Preload w head. Używaj tylko dla Above the Fold. sizes prop: sizes='(max-width: 768px) 100vw, 50vw'. Informuje przeglądarkę o rozmiarze. Generuje srcset. Optymalizacja: automatyczny WebP dla obsługujących. AVIF jeśli skonfigurowany. Rozmiar dopasowany do sizes. Sharp (npm install sharp): szybszy image processor. Zalecany w produkcji. Fallback: wbudowany bez sharp. Remote images: remotePatterns w next.config.js. {hostname: 'example.com', pathname: '/images/**'}. Wymaga whitelist dla bezpieczeństwa. Local images: import img from './photo.jpg'. Automatyczne width/height (statyczny import). Blur placeholder: placeholder='blur'. blurDataURL — base64 mini. Statyczne import: automatyczne. Remote: musisz podać blurDataURL. Generuj: plaiceholder library. unoptimized prop: pomiń optymalizację. Dla GIF/SVG animowanych. Loader: custom image loader dla CDN.",
  },
  {
    question: "WebP, AVIF i nowoczesne formaty obrazów — jak konwertować?",
    answer: "Formaty obrazów: JPEG: stary standard. Lossy. Dobry dla zdjęcia. PNG: lossless. Alfa kanał. Większy niż JPEG. WebP (Google, 2010): 25-34% mniejszy niż JPEG. Lossless i lossy. Alfa kanał. Wsparcie: 95% przeglądarek. AVIF (Alliance for Open Media, 2019): 20-50% mniejszy niż WebP. Lossy i lossless. HDR support. Wsparcie: Chrome, Firefox, Safari 16+ (2022). Lepsza jakość przy tym samym rozmiarze. JPEG XL: przyszły standard. Lepszy od AVIF. Wsparcie: ograniczone (Chrome eksperymentalny). picture element: source type='image/avif' srcset='image.avif'. source type='image/webp' srcset='image.webp'. img src='image.jpg' alt='fallback'. Hierarchia: AVIF -> WebP -> JPEG. sharp library (Node.js): const sharp = require('sharp'). sharp('input.jpg').webp({quality: 80}).toFile('output.webp'). sharp('input.jpg').avif({quality: 50}).toFile('output.avif'). Batch conversion: glob('*.jpg') + sharp. Build pipeline: vite-plugin-imagemin, next/image (automatyczny). Squoosh CLI: @squoosh/cli. squoosh-cli --avif {} input.jpg. Batch optimizacja. imagemin-webp, imagemin-avif: webpack/gulp plugins. Jakość vs rozmiar: AVIF quality 40-60 = JPEG quality 80-90. WebP quality 70-85 = JPEG quality 80-90. Subjectywne — testuj dla contentu. Responsive images: srcset + sizes w HTML. next/image automatycznie generuje srcset. Lazy loading native: img loading='lazy'. Powyżej fold: loading='eager' lub bez atrybutu.",
  },
  {
    question: "Cloudinary, Imgix i CDN do optymalizacji obrazów?",
    answer: "Cloudinary: Image/Video CDN + transformacje on-the-fly. URL-based transformacje: .../c_fill,w_800,h_600,f_auto,q_auto/image.jpg. f_auto — automatyczny format (WebP/AVIF). q_auto — automatyczna jakość. c_fill, c_crop, c_scale — crop modes. Smart crop (AI): g_auto — automatyczne centrowanie. g_face — twarz wyśrodkowana. Instalacja: @cloudinary/next. CldImage komponent (Community Cloudinary). Upload: Unsigned uploads dla userów. Signed uploads dla bezpieczeństwa. Transformacje: ograniczyć widgety, overlays. AI features: generative fill, background removal. Imgix: podobne do Cloudinary. URL transformacje. ix-react package. Doskonały srcset support. Predykowalny cennik. Mniej AI features. Bunny.net Stream + CDN: media CDN. Video + Image CDN. Mniejszy koszt niż Cloudinary. Bunny Optimizer: automatyczna optymalizacja. next/image z Cloudinary: next.config.js loader: 'custom'. images.loaderFile: './cloudinary-loader.js'. Lub: CldImage z next-cloudinary. Lokalna optymalizacja (bez CDN): sharp w API route. Generuj rozmiary w build time. Serwuj z /public. Plaiceholder: generuj blur placeholder. import {getPlaiceholder} from 'plaiceholder'. const {base64} = await getPlaiceholder('/photo.jpg'). Image CDN wybór: Cloudinary — max features, AI. Imgix — developer-friendly, wydajny. Bunny.net — tani, CDN-first. Uploadthing — upload dla Next.js (nie CDN optymalizacji). Własne S3 + CloudFront — enterprise, kontrola.",
  },
  {
    question: "Lazy loading, Intersection Observer i priorytetyzacja obrazów?",
    answer: "Lazy loading natywne: img loading='lazy'. Działa w wszystkich major browsers (Chrome 77+, Firefox 75+, Safari 15.4+). Polyfill: lazysizes dla starszych. next/image: lazy by default. priority prop = eager loading. IntersectionObserver (JavaScript): const observer = new IntersectionObserver((entries) => {entries.forEach(entry => {if (entry.isIntersecting) {const img = entry.target; img.src = img.dataset.src; observer.unobserve(img)}})}). observer.observe(document.querySelectorAll('img[data-src]')). Szczegóły: rootMargin: '50px' — załaduj 50px przed viewport. threshold: 0.1 — 10% widoczności. useIntersectionObserver hook: useState(false). useRef na element. useEffect(() => observer.observe(ref.current)). Gdy intersection: setIsVisible(true). Renderuj Image dopiero gdy visible. React: react-intersection-observer package. useInView hook. inView — boolean. Fetch on demand. Image priority hierarchy: LCP image: loading='eager' + fetchpriority='high'. Above-fold: loading='eager'. Below-fold: loading='lazy' (default). Preload LCP: link rel='preload' as='image' href='/hero.webp'. imagesizes + imagesrcset dla responsive. fetchpriority='high' na img (nowy atrybut). Cumulative Layout Shift (CLS): zawsze podawaj width i height. Lub aspect-ratio w CSS. fill mode w next/image. Image skeleton: placeholder podczas ładowania. bg-gray-200 animate-pulse (Tailwind). Transition po załadowaniu: onLoadingComplete callback (next/image). opacity-0 -> opacity-100 przy load.",
  },
  {
    question: "SVG optymalizacja i SVGR — jak używać SVG w React?",
    answer: "SVG w React — opcje: img src='icon.svg' — prosty, nie styleable przez CSS. background-image: url('icon.svg') — CSS. Inline SVG w JSX: pełna kontrola, CSS styleable, dostęp do każdej ścieżki. SVGR: konwertuj SVG do React komponentu. @svgr/webpack, @svgr/vite. import {ReactComponent as Icon} from './icon.svg'. Albo: import Icon from './icon.svg?react' (Vite z plugin). SVG jako React component: pełna kontrola props. currentColor — dziedzicz kolor od CSS. width/height props. className, style. SVGO: optymalizacja SVG plików. svgo CLI: svgo icon.svg. Usuwa zbędne atrybuty, komentarze, metadata. Reduce rozmiar 50-70%. SVGOMG (online): wizualna optymalizacja. Lucide React / Heroicons: gotowe icon libraries. Tree-shakeable. Małe rozmiary. import {ChevronDown} from 'lucide-react'. Kiedy inline SVG: ikony potrzebują animacji. currentColor (dziedziczenie koloru). CSS hover styles. Dostępność (aria-label). Kiedy img src: duże SVG ilustracje. Brak potrzeby interakcji. Lepszy cache. Sprite SVG: jeden plik z symbolami. use href='#icon-name'. HTTP/2 — mniejsze korzyści niż HTTP/1. Icon system: single SVG file + use. Custom SVG animations: CSS @keyframes na SVG elements. stroke-dasharray trick — path drawing. Lub Framer Motion na SVG komponentach. motion.path pathLength={0 do 1}. react-spring useSpring dla SVG props.",
  },
];

const imageOptimizationTools = [
  { narzedzie: "next/image", typ: "Wbudowany Next.js", auto_webp: "Tak", cdn: "Self-hosted /_next/image", kiedy: "Next.js projekty — default wybór" },
  { narzedzie: "Cloudinary", typ: "Image CDN + AI", auto_webp: "Tak (f_auto)", cdn: "Global CDN", kiedy: "E-commerce, AI crop, video+image" },
  { narzedzie: "Imgix", typ: "Image CDN", auto_webp: "Tak (auto)", cdn: "Global CDN", kiedy: "Developer-friendly CDN, srcset" },
  { narzedzie: "sharp (Node.js)", typ: "Server-side processor", auto_webp: "Manualne", cdn: "Brak (processing)", kiedy: "Self-hosted, API routes, build pipeline" },
  { narzedzie: "Bunny.net Optimizer", typ: "CDN + Optymalizacja", auto_webp: "Tak", cdn: "Global CDN", kiedy: "Tani CDN, Next.js lub custom" },
  { narzedzie: "Plaiceholder", typ: "Blur placeholder gen", auto_webp: "Nie", cdn: "Brak", kiedy: "Generuj blur dataURL dla next/image" },
];

export default function BlogNextImageCoTo() {
  return (
    <Layout>
      <SEOHead
        title="next/image, WebP/AVIF, Cloudinary i Image Optimization"
        description="next/image (blur placeholder, priority, sizes, remotePatterns), WebP/AVIF konwersja przez sharp, Cloudinary CDN (f_auto, q_auto), SVG optymalizacja SVGR i…"
        canonical="https://fotz.pl/blog/nextjs-image-optimization-webp-avif-cloudinary-sharp-svgr-2024"

        keywords="next/image, WebP/AVIF, Cloudinary i Image Optimization co to jest, next/image, WebP/AVIF, Cloudinary i Image Optimization jak działa, next/image, WebP/AVIF, Cloudinary i Image Optimization tutorial, next/image, WebP/AVIF, Cloudinary i Image Optimization przykład, czym jest next/image, WebP/AVIF, Cloudinary i Image Optimization, next/image, WebP/AVIF, Cloudinary i Image Optimization dokumentacja, next/image, WebP/AVIF, Cloudinary i Image Optimization przewodnik"
      />
      <ArticleSchema
        title="next/image, WebP/AVIF, Cloudinary i Image Optimization — React i Next.js 2024?"
        description="6 narzędzi optymalizacji obrazów (next/image/Cloudinary/Imgix/sharp/Bunny.net/Plaiceholder) — WebP/AVIF, lazy loading, IntersectionObserver, SVG i SVGR."
        url="https://fotz.pl/blog/nextjs-image-optimization-webp-avif-cloudinary-sharp-svgr-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Image Optimization Next.js", url: "https://fotz.pl/blog/nextjs-image-optimization-webp-avif-cloudinary-sharp-svgr-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-lime-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Image Optimization Next.js", url: "/blog/nextjs-image-optimization-webp-avif-cloudinary-sharp-svgr-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-lime-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Performance / Images
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Image Optimization w Next.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              next/image, WebP/AVIF z sharp, Cloudinary CDN, lazy loading z IntersectionObserver
              i SVG optymalizacja przez SVGR.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Auto WebP/AVIF", value: "next/image" },
                { label: "AI crop", value: "Cloudinary" },
                { label: "Node processor", value: "sharp" },
                { label: "Blur hash", value: "Plaiceholder" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-lime-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi optymalizacji obrazów — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              next/image, Cloudinary, Imgix, sharp, Bunny.net i Plaiceholder —
              typ, automatyczny WebP, CDN i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Auto WebP</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">CDN</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {imageOptimizationTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.auto_webp}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.cdn}</td>
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

      <RelatedArticles currentArticleId="nextjs-image-optimization-webp-avif-cloudinary-sharp-svgr-2024" />
      <ContactSection />
    </Layout>
  );
}
