import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest UploadThing i jak wdrożyć file uploads w Next.js App Router?",
    answer: "UploadThing: file upload service zaprojektowany dla Next.js (Ping Labs, 2023). TypeScript-first. Obsługuje: image, video, PDF, audio, blob. Automatyczna walidacja rozmiaru/typu. CDN delivery. Instalacja: npm install uploadthing @uploadthing/react. Konfiguracja: uploadthing/core.ts — defineFileRoute('imageUploader', {image: {maxFileSize: '4MB', maxFileCount: 1}, onUploadComplete: async ({metadata, file}) => {await db.user.update({avatar: file.url})}, onBeforeUploadComplete: async ({req}) => {const session = await getServerSession(). return {userId: session.user.id}}}). Route handler: app/api/uploadthing/route.ts — {GET, POST} = createRouteHandler({router: ourFileRouter}). Client component: useUploadThing('imageUploader', {onClientUploadComplete: (res) => {toast.success('Upload complete'). router.refresh()}}). UploadButton, UploadDropzone — gotowe UI. Lub custom: startUpload(files). FileRouter type-safety: inferEndpointInput, inferEndpointOutput. Przesyłaj metadata przez onUploadComplete. Klucz API: UPLOADTHING_SECRET, UPLOADTHING_APP_ID. Pliki przechowywane na UploadThing S3. URL do pliku: gotowy link CDN. Usuwanie: utapi.deleteFiles(fileKey). Limitowanie: maxFileSize, maxFileCount per route. Middleware: restrict per auth status. Dokumentacja: docs.uploadthing.com. T3 stack integration — wbudowane.",
  },
  {
    question: "Cloudinary i AWS S3 — zarządzanie mediami i storage w chmurze?",
    answer: "Cloudinary: media management platform. Upload, transform, optimize, deliver. CDN wbudowany. Image transformations: resize, crop, format conversion, quality. f_auto — format auto (WebP dla Chrome, AVIF dla supported). q_auto — quality auto. w_800,h_600,c_fill — resize i crop. Cloudinary SDK: cloudinary.uploader.upload(file, {folder: 'avatars', transformation: [{width: 200, height: 200, crop: 'thumb', gravity: 'face'}]}). Result: secure_url, public_id. React: CldImage component (next-cloudinary). CldUploadWidget — drag and drop upload. Video: adaptive streaming (HLS), auto transcoding. AWS S3: scalable object storage. Direct upload pattern: Server generuje presigned URL. Client uploaduje bezpośrednio do S3 (nie przez serwer). Unika obciążenia serwera. Presigned URL: s3Client.send(new PutObjectCommand({Bucket: 'my-bucket', Key: fileKey, ContentType: file.type})). getSignedUrl(s3Client, command, {expiresIn: 300}). Client: fetch(presignedUrl, {method: 'PUT', body: file, headers: {'Content-Type': file.type}}). Security: Bucket Policy — public read dla publicznych assets. Private dla user data — presigned read URLs. CORS configuration na Bucket. AWS S3 + CloudFront CDN: dystrybucja plików globalnie. Cache headers. Cache invalidation. R2 (Cloudflare): S3-compatible storage. Brak egress fees. Zero-cost CDN. Cheaper than S3 dla read-heavy. workers.cloudflare.com/r2. Backblaze B2: najtańszy. S3-compatible. $0.006/GB storage.",
  },
  {
    question: "Multer i Formidable — file uploads w Node.js bez SaaS?",
    answer: "Multer: middleware do multipart/form-data (file uploads) w Express. const storage = multer.diskStorage({destination: (req, file, cb) => cb(null, './uploads'), filename: (req, file, cb) => cb(null, Date.now() + extname(file.originalname))}). const upload = multer({storage, limits: {fileSize: 5 * 1024 * 1024}, fileFilter: (req, file, cb) => {if (!['image/jpeg', 'image/png'].includes(file.mimetype)) return cb(new Error('Invalid type')). cb(null, true)}}). router.post('/upload', upload.single('avatar'), (req, res) => {res.json({path: req.file.path})}). Memory storage: multer.memoryStorage() — do bufferu (dla cloud upload). req.file.buffer -> S3 upload. Formidable: alternatywa dla Multer. Wspiera Node.js 18+. Streaming. Fastify Multipart: @fastify/multipart. await request.file(). part.file -> stream. Pipe to S3. Next.js App Router uploads: Brak multer (Edge kompatybilny). FormData API. const formData = await request.formData(). const file = formData.get('file') as File. const buffer = Buffer.from(await file.arrayBuffer()). Potem: save do disk lub upload do S3/Cloudinary. Sharp: image processing w Node.js. sharp(buffer).resize(200, 200).webp().toBuffer(). Konwersja formatów. Metadata extraction. Blurhash: compact blurry placeholder. blurhash.encode(pixels, width, height). React: Blurhash component. Pokazuj placeholder podczas ładowania. File validation: magic bytes zamiast extension. fileTypeFromBuffer(buffer) — prawdziwy typ pliku. PDF: sprawdź %PDF header.",
  },
  {
    question: "Video uploads — Mux, Cloudinary Video i YouTube Data API?",
    answer: "Mux: video infrastructure as a service. Upload -> transcode -> streaming. Mux Player: React component. Adaptive bitrate (HLS). Thumbnails automatyczne. Data: analytics per viewer. Mux Data: QoE (Quality of Experience) metrics. Instalacja: npm install @mux/mux-node @mux/mux-player-react. Upload flow: mux.Video.Uploads.create({new_asset_settings: {playback_policy: ['public']}, cors_origin: '*'}). Zwróć upload_url do klienta. Klient uploaduje bezpośrednio PUT do upload_url. Webhook: video.upload.asset_created -> asset ready. asset.id -> playback_id. Odtwarzanie: MuxPlayer playback-id={playbackId}. Thumbnail: image.mux.com/{playbackId}/thumbnail.jpg. Cloudinary Video: transformacje wideo. f_mp4, f_webm. Konwersja na GIF. Sprite thumbnails. YouTube Data API: upload do YouTube programatycznie. OAuth2 wymagane. media.insert(). Status polling. YouTube jako CDN video. Vimeo API: podobne do YouTube. Privacy controls. Password protected. Uploadcare: wszystko-w-jednym. Image, video, audio. Transformacje w URL. Widget gotowy. Self-hosted alternatywa: MinIO — S3-compatible self-host. MediaInfo: parse video metadata. ffprobe: duration, resolution, codec. ffmpeg: transcode video. Render.com lub Railway dla ffmpeg. Chunked uploads: duże pliki (1GB+). tus protocol: resumable. Upload w kawałkach. Uppy.js: client library. Obsługuje tus, S3, Cloudinary. Drag and drop UI. Thumbnails, progress.",
  },
  {
    question: "Image optimization w Next.js — next/image, AVIF, WebP i CDN?",
    answer: "next/image: automatyczna optymalizacja. Lazy loading. Placeholder (blur). Size optimization. Modern formats (WebP, AVIF). Image component: Image src='/photo.jpg' alt='Opis' width={800} height={600}. fill — zajmuje rodzica (potrzebuje relative parent). priority — preload dla LCP image. placeholder='blur' blurDataURL={base64}. sizes='(max-width: 768px) 100vw, 50vw'. Formaty: automatycznie serwuje WebP lub AVIF (gdy supported). AVIF: 50% mniejszy od JPEG. WebP: 30% mniejszy od JPEG. Optymalizacja przy requestcie (on-demand). Cache na dysku serwera. External images: remotePatterns config w next.config.js. {protocol: 'https', hostname: 'images.example.com'}. next/image + Cloudinary: CldImage (next-cloudinary) — use Cloudinary CDN. Placeholder loading. Transformacje URL. Generowanie blurDataURL: plaiceholder — generuje base64 blur. const {base64} = await getPlaiceholder(imageUrl). LQIP (Low Quality Image Placeholder). Image CDN comparison: Vercel Image Optimization — za darmo na Vercel ($0.005/1K po limit). Cloudinary — transforms + analytics. Imgix — custom domains, transforms. Bunny.net — CDN + image optimizer. Sharp optymalizacja server-side: sharp(buffer).webp({quality: 80}).toBuffer(). Zaawansowane: .resize({width: 800, fit: 'inside', withoutEnlargement: true}). srcset i sizes: Next.js generuje automatycznie srcset. Przeglądarka wybiera najlepszy rozmiar. Lighthouse Image Audit — sprawdź 'properly sized images'. Core Web Vitals: LCP image = priority prop. Lazy load fold-below images.",
  },
];

const uploadSolutions = [
  { rozwiazanie: "UploadThing", typ: "Managed service", setup: "Minimal (Next.js native)", storage: "UploadThing S3", kiedy: "Next.js App Router, T3 stack" },
  { rozwiazanie: "Cloudinary", typ: "Media platform", setup: "SDK + account", storage: "Cloudinary CDN", kiedy: "Image/video transforms, marketing" },
  { rozwiazanie: "AWS S3 + presigned", typ: "Cloud storage", setup: "AWS IAM + bucket", storage: "S3 + CloudFront", kiedy: "Enterprise, max control, AWS" },
  { rozwiazanie: "Cloudflare R2", typ: "Cloud storage", setup: "CF account + worker", storage: "R2 + CDN free", kiedy: "Zero egress, Cloudflare ecosystem" },
  { rozwiazanie: "Mux", typ: "Video platform", setup: "API + Mux Player", storage: "Mux CDN", kiedy: "Video streaming, adaptive bitrate" },
  { rozwiazanie: "Multer + local/S3", typ: "Self-managed", setup: "npm install multer", storage: "Local / S3", kiedy: "Express, full control, self-host" },
];

export default function BlogFileUploadsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="File Uploads | Fotz Studio"
        description="File uploads w Next.js: UploadThing (App Router), Cloudinary, AWS S3 presigned URLs, Cloudflare R2, Mux video, Multer, next/image optymalizacja i sharp."
        canonicalUrl="https://fotz.pl/blog/file-uploads-uploadthing-cloudinary-s3-mux-nextjs-2024"

        keywords="File Uploads co to jest, File Uploads jak działa, File Uploads tutorial, File Uploads przykład, czym jest File Uploads, File Uploads dokumentacja, File Uploads przewodnik"

        canonical="https://fotz.pl/blog/file-uploads-uploadthing-cloudinary-s3-mux-nextjs-2024"
      />
      <ArticleSchema
        title="File Uploads — UploadThing, Cloudinary, AWS S3, Mux, Next.js 2024?"
        description="6 rozwiązań file upload (UploadThing/Cloudinary/S3/R2/Mux/Multer) — presigned URLs, image transforms, video streaming, next/image optymalizacja i CDN."
        url="https://fotz.pl/blog/file-uploads-uploadthing-cloudinary-s3-mux-nextjs-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "File Uploads Web", url: "https://fotz.pl/blog/file-uploads-uploadthing-cloudinary-s3-mux-nextjs-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-amber-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "File Uploads Web", url: "/blog/file-uploads-uploadthing-cloudinary-s3-mux-nextjs-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Next.js / Storage
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              File Uploads i Media Storage
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              UploadThing dla Next.js, Cloudinary transforms, AWS S3 presigned URLs,
              Mux video streaming i next/image optymalizacja.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Next.js native", value: "UploadThing" },
                { label: "Media transforms", value: "Cloudinary" },
                { label: "Enterprise storage", value: "AWS S3" },
                { label: "Video streaming", value: "Mux" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-orange-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rozwiązania */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 rozwiązań file upload — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              UploadThing, Cloudinary, S3, R2, Mux i Multer —
              typ, setup, storage i idealny case użycia.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozwiązanie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Setup</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Storage</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {uploadSolutions.map((s, i) => (
                  <tr key={s.rozwiazanie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{s.rozwiazanie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.setup}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.storage}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{s.kiedy}</td>
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

      <RelatedArticles currentArticleId="file-uploads-uploadthing-cloudinary-s3-mux-nextjs-2024" />
      <ContactSection />
    </Layout>
  );
}
