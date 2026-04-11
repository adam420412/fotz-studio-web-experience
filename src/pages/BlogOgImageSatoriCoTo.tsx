import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Satori — generowanie OG image z JSX do PNG/SVG?",
    answer: "Satori: Shu Ding, Vercel. Konwertuje JSX/HTML do SVG. Brak DOM. Edge runtime. Instalacja: npm install satori. import satori from 'satori'. const svg = await satori(div({style: {background: '#000', color: '#fff', padding: 40, display: 'flex'}})('Hello World'), {width: 1200, height: 630, fonts: [{name: 'Inter', data: fontData, weight: 400, style: 'normal'}]}). Font loading: const fontData = await fetch('https://...font.ttf').then(r => r.arrayBuffer()). Subset: tylko potrzebne znaki. Satori ograniczenia: nie wszystkie CSS właściwości. flexbox głównie. Brak grid. Brak overflow: scroll. Brak pseudo-elementów. Brak filter (blur). SVG to PNG: @resvg/resvg-js lub sharp. import {Resvg} from '@resvg/resvg-js'. const resvg = new Resvg(svg). const pngBuffer = resvg.render().asPng(). sharp(svg).png().toBuffer(). Dynamiczne dane: parametry z URL. const title = params.get('title'). const author = params.get('author'). generuj OG z tymi danymi. Walidacja: max 1200x630px. min 200x200px. JPG lub PNG. Twitter: 1200x628. LinkedIn: 1200x627. Facebook: 1200x630. Open Graph protocol: og:image. og:title. og:description. og:type. og:url. Twitter Card: twitter:card summary_large_image. twitter:image. twitter:title.",
  },
  {
    question: "Next.js ImageResponse — dynamiczne OG images w App Router?",
    answer: "Next.js ImageResponse: wbudowane @vercel/og. Edge runtime. App Router route handler. app/api/og/route.tsx: import {ImageResponse} from 'next/og'. export const runtime = 'edge'. export async function GET(request: Request) { const {searchParams} = new URL(request.url). const title = searchParams.get('title') || 'Default Title'. return new ImageResponse(div({style: {height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', backgroundImage: 'linear-gradient(to bottom right, #000, #111'}})(div({style: {color: 'white', fontSize: 60, fontWeight: 700}})(title)), {width: 1200, height: 630}) }. Fonty: fetch + arrayBuffer pattern. Inter, Geist font Vercel CDN. Osadzone w route. SEO head: export const metadata w page.tsx: openGraph: {images: [{url: '/api/og?title=' + encodeURIComponent(title), width: 1200, height: 630}]}. Lub dynamicznie: generateMetadata: async ({params}) => {const post = await getPost(params.slug). return {openGraph: {images: [{url: `/api/og?title=${encodeURIComponent(post.title)}`}]}} }. Cachowanie: Cache-Control: public, max-age=86400. Generuj raz, serwuj z cache. Skalowanie: Cloudflare CDN. og:image jako static podczas buildu. next-og-image library.",
  },
  {
    question: "Cloudflare Workers OG Image i Sharp?",
    answer: "Cloudflare Workers Image Generation: Satori + resvg-wasm. Edge runtime. Globalnie blisko użytkownika. Worker: import satori from 'satori'. import {initWasm, Resvg} from '@resvg/resvg-wasm'. Satori w Workers: kompatybilny. Brak Node.js dependencies. font z KV lub R2. export default {async fetch(req) { const url = new URL(req.url). const title = url.searchParams.get('title') || 'Hello'. const svg = await satori(jsx, {width: 1200, height: 630, fonts: [fontData]}). await initWasm(fetch('resvg.wasm')). const resvg = new Resvg(svg). const png = resvg.render().asPng(). return new Response(png, {headers: {'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000'}}) }}. Sharp w Node.js: npm install sharp. import sharp from 'sharp'. const svgBuffer = Buffer.from(svgString). const png = await sharp(svgBuffer).png().toBuffer(). await sharp(png).resize(1200, 630).toFile('og.png'). Composite: sharp().composite([{input: overlay, gravity: 'north'}]). Text overlay. Batch generate: podczas buildu. script prebuild. Wszystkie posty w statycznym generowaniu. Storage: public/ folder w Next.js. /public/og/post-slug.png. Lub Cloudflare R2. Upload podczas CI. Playwright screenshot: page.screenshot({path: 'og.png', clip: {x: 0, y: 0, width: 1200, height: 630}}). Render page na localhost. Screenshot. Prościejszy styling.",
  },
  {
    question: "next/image OG — metadata API i generateMetadata?",
    answer: "Next.js generateMetadata: export async function generateMetadata({params}: Props): Promise { const post = await getPostBySlug(params.slug). if (!post) return {}. return {title: post.title, description: post.excerpt, openGraph: {title: post.title, description: post.excerpt, type: 'article', publishedTime: post.publishedAt, url: `https://example.com/blog/${post.slug}`, images: [{url: `https://example.com/api/og?title=${encodeURIComponent(post.title)}&author=${post.author}`, width: 1200, height: 630, alt: post.title}]}, twitter: {card: 'summary_large_image', title: post.title, description: post.excerpt, images: [`https://example.com/api/og?title=${encodeURIComponent(post.title)}`]}} }. Statyczny OG: opengraph-image.tsx w folderze route. Alt: opengraph-image.alt.txt. Next.js automatycznie serwuje jako og:image. import {ImageResponse} from 'next/og'. export default function Image() { return new ImageResponse(...) }. export const alt = 'Page title'. export const size = {width: 1200, height: 630}. export const contentType = 'image/png'. app/blog/[slug]/opengraph-image.tsx — per route OG. app/opengraph-image.tsx — global default. Robots.txt: app/robots.ts. export default function robots(): MetadataRoute.Robots. Sitemap: app/sitemap.ts. MetadataRoute.Sitemap. generateSitemaps dla dużych serwisów. Favicon: app/icon.png lub app/icon.tsx z ImageResponse.",
  },
  {
    question: "Testy wizualne i Storybook — snapshot testing komponentów?",
    answer: "Testy wizualne: porównanie screenshotów. Chromatic (Storybook Cloud). Percy (BrowserStack). Playwright screenshots. Storybook Visual Testing: Chromatic CI integration. Baseline screenshot. Diff wykrywa zmiany. Akceptuj lub odrzuć. chromatic --project-token TOKEN --exit-zero-on-changes. Playwright Visual Testing: test.ts: await expect(page.getByRole('button')).toHaveScreenshot('button.png'). --update-snapshots flag. Cross-browser: Chromium, Firefox, WebKit. Tolerancja: {maxDiffPixels: 50}. Snapshot folder: __snapshots__. test-results/. Percy z Playwright: @percy/playwright. import percySnapshot from '@percy/playwright'. await percySnapshot(page, 'Homepage'). Storybook interaction tests: play function. userEvent w stories. vitest-storybook plugin. Chromatic Turbosnap: tylko zmienione komponenty. Git diff aware. Szybszy CI. Argos CI: open source alternatywa. S3 storage. GitHub integration. reg-suit: open source visual regression. BackstopJS: local visual testing. CLI. reference screenshots. test screenshots diff. Responsive: testuj wiele viewport. mobile: {viewport: {width: 375, height: 812}}. tablet: {viewport: {width: 768, height: 1024}}. Accessibility + visual: axe-playwright. accessibility snapshot. Storybook a11y addon.",
  },
];

const ogTools = [
  { narzedzie: "Satori", stack: "JSX to SVG", opis: "Edge-compatible JSX renderer — flexbox subset, font support" },
  { narzedzie: "@vercel/og ImageResponse", stack: "Next.js built-in", opis: "Edge OG image route — app/api/og/route.tsx" },
  { narzedzie: "opengraph-image.tsx", stack: "Next.js App Router", opis: "Static OG per route — auto og:image w metadata" },
  { narzedzie: "Sharp", stack: "Node.js native", opis: "SVG to PNG konwersja, resize, composite — build-time batch" },
  { narzedzie: "generateMetadata", stack: "Next.js async fn", opis: "Dynamiczne og:image URL z tytułem i opisem posta" },
  { narzedzie: "Playwright screenshot", stack: "E2E tool", opis: "Render page + screenshot 1200x630 — prostszy styling" },
];

export default function BlogOgImageSatoriCoTo() {
  return (
    <Layout>
      <SEOHead
        title="OG Image Satori, ImageResponse, next/og — dynamiczne social preview Next.js 2024 | Fotz.pl"
        description="Dynamiczne OG images 2024: Satori (JSX to SVG), @vercel/og ImageResponse (Edge), opengraph-image.tsx (App Router), Sharp (SVG to PNG), generateMetadata, Playwright screenshot."
        canonicalUrl="https://fotz.pl/blog/og-image-satori-vercel-og-dynamiczne-social-preview-nextjs-2024"
      />
      <ArticleSchema
        title="OG Image Satori, ImageResponse, next/og — dynamiczne social preview Next.js 2024?"
        description="Satori: JSX to SVG edge. ImageResponse: Next.js App Router og route. opengraph-image.tsx: per-route static OG. Sharp: SVG to PNG. generateMetadata. Playwright screenshot OG."
        url="https://fotz.pl/blog/og-image-satori-vercel-og-dynamiczne-social-preview-nextjs-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "OG Image Next.js 2024", url: "https://fotz.pl/blog/og-image-satori-vercel-og-dynamiczne-social-preview-nextjs-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-rose-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "OG Image Next.js 2024", href: "/blog/og-image-satori-vercel-og-dynamiczne-social-preview-nextjs-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-pink-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Satori / ImageResponse / OG Image / Next.js
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OG Image — Satori i ImageResponse
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Satori (JSX to SVG), @vercel/og ImageResponse, opengraph-image.tsx
              i dynamiczne social preview.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "JSX to SVG", value: "Satori" },
                { label: "Edge OG", value: "ImageResponse" },
                { label: "Per-route", value: "og-image.tsx" },
                { label: "SVG to PNG", value: "Sharp" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OG Image tools — narzędzia i stack</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Satori, ImageResponse, opengraph-image, Sharp, generateMetadata i Playwright —
              stack i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Stack</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {ogTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.stack}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.opis}</td>
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
