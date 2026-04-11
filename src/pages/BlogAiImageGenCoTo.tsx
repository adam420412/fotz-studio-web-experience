import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Generowanie obrazów AI — DALL-E 3, Stable Diffusion i porównanie API?",
    answer: "DALL-E 3 (OpenAI): najlepsza jakość tekstu w obrazach. Dokładnie rozumie prompt. API: openai.images.generate({model: 'dall-e-3', prompt: 'A cat wearing sunglasses', size: '1024x1024', quality: 'hd', n: 1}). Sizes: 1024x1024, 1024x1792, 1792x1024. Quality: standard lub hd (droższy). Style: vivid lub natural. Odpowiedź: url — tymczasowy URL (60min). b64_json — base64. revised_prompt — co DALL-E faktycznie rozumie. Cena: $0.04-$0.12 per obraz. Stable Diffusion (Stability AI): open source, wiele wersji. Stable Diffusion XL, SD 3. Stability AI API: stability.ai/api. SDXL: najlepszy open source. ControlNet, LoRA fine-tuning. Replicate: hosting modeli open source. SDXL, Flux, Kandinsky. API zgodne — jeden SDK. replicate.run('stability-ai/sdxl', {input: {prompt: 'text'}}). FAL.ai: szybkie inference (GPU). Flux.1 (black-forest-labs). Realtime generation. WebSocket streaming. Midjourney: brak oficjalnego API. Tylko Discord. Nieoficjalne wrappery (niestabilne). Ideogram: typografia w obrazach. Recraft.ai: SVG generation, brand images. Koszt porównanie: DALL-E 3 $0.04-$0.12. Replicate SDXL $0.0039 (tanie!). FAL.ai Flux $0.003-$0.055. Stability API $0.003-$0.065.",
  },
  {
    question: "Replicate API — uruchamianie modeli open source w TypeScript?",
    answer: "Replicate: platforma dla modeli ML. Tysiące modeli. API key based. TypeScript SDK: npm install replicate. import Replicate from 'replicate'. const replicate = new Replicate({auth: process.env.REPLICATE_API_TOKEN}). Uruchomienie modelu: const output = await replicate.run('black-forest-labs/flux-schnell', {input: {prompt: 'astronaut riding a horse', num_outputs: 1}}). output — URL lub array URLs. Popularne modele: black-forest-labs/flux-schnell — szybki Flux. stability-ai/sdxl — Stable Diffusion XL. lucataco/sdxl-lightning — ultra fast. mistralai/mixtral-8x7b-instruct — LLM. openai/whisper — speech-to-text. Streaming: const stream = replicate.stream('meta/llama-2-70b-chat', {input: {prompt: '...'}}). for await (const event of stream) { process.stdout.write(event.toString()) }. Webhooks: endpoint zamiast pollingu. replicate.run z {webhook: 'https://yourapp.com/webhook'}. JSON POST na webhook URL. Predictions API: prediction = await replicate.predictions.create({version: model.version, input: {...}}). await prediction.wait(). prediction.output. Własne modele (fine-tuned): trainings API. LoRA training. Fine-tune na własnych danych. Hardware tier: CPU, Nvidia T4, A40, A100. Koszt per model per sekunda. Cache cold start. Next.js integration: Route Handler POST. Body — prompt. Return — image URL. client fetch. Vercel Blob lub S3 dla persystencji.",
  },
  {
    question: "FAL.ai — realtime i streaming generowania obrazów?",
    answer: "FAL.ai: platforma szybkiego AI inference. Flux.1 (najnowszy SOTA model). Realtime streaming. WebSocket connection. Instalacja: npm install @fal-ai/client. import {fal} from '@fal-ai/client'. fal.config({credentials: process.env.FAL_KEY}). Generowanie: const result = await fal.subscribe('fal-ai/flux/dev', {input: {prompt: 'A beautiful landscape', image_size: 'landscape_4_3', num_images: 1}, onQueueUpdate: (update) => { if (update.status === 'IN_PROGRESS') { console.log(update.logs) } }}). Modele Flux: fal-ai/flux/dev — najlepsza jakość. fal-ai/flux/schnell — najszybszy. fal-ai/flux-realism — fotorealizm. fal-ai/flux-pro — premium. fal-ai/flux/dev/image-to-image — image editing. Streaming w przeglądarce: @fal-ai/client proxy. Nie eksponuj API key na frontend. Next.js: app/api/fal/route.ts jako proxy. import {route} from '@fal-ai/nextjs-client'. Konfiguracja proxy. Image-to-Image: input: {image_url: existingImageUrl, prompt: 'Add sunglasses', strength: 0.85}. Inpainting (usuwanie/dodawanie obiektów): mask_url — czarna/biała maska. Tylko biały obszar zmieniony. Video generation (eksperymentalne): fal-ai/fast-animatediff. Image to video. Kokoro TTS (audio): fal-ai/kokoro. Text-to-speech na GPU. Szybkie, realistyczne. ControlNet: edge detection (Canny). Depth estimation. Kontroluj kompozycję.",
  },
  {
    question: "Prompt engineering dla AI obrazów — jak pisać skuteczne prompty?",
    answer: "Anatomia dobrego promptu: Główny opis (co). Styl artystyczny (jak). Medium (technika). Jakość (szczegóły). Lighting (oświetlenie). Perspektywa (ujęcie). Przykład: 'A cyberpunk city street at night, anime style, neon lights reflecting on wet pavement, cinematic composition, dramatic lighting, ultra detailed, 8k'. Styl artystyczny: watercolor, oil painting, digital art, photorealistic, anime, pixel art, concept art, illustration. Fotografia: DSLR photo, f/2.8 aperture, golden hour, shallow depth of field, studio lighting. Artyści jako inspiracja: Greg Rutkowski (fantasy). Alphonse Mucha (Art Nouveau). Wlop (digital art). OWASP dla AI — prompt injection: negatywne prompty (Stable Diffusion): --no text, watermark, ugly, blurry, low quality. DALL-E — automatyczne filtry. Iteracja promptów: zacznij prosto. Dodawaj szczegóły stopniowo. Próbuj różne stylistyki. Seed dla reproducibility. DALL-E 3 — naturalny język: Pełne zdania lepsze niż keywords. Opis sceny jak powieść. DALL-E dostosuje prompt automatycznie. Negative prompts (SD): cfg_scale — jak bardzo trzyma się promptu. Wyższy CFG — bardziej literalne. Niższy — bardziej kreatywne. Typowe błędy: Za mało kontekstu — ogólnikowe. Za dużo elementów — chaotyczne. Niekompatybilne style. Zbyt specyficzne prośby (twarze, tekst). Moderacja treści: OpenAI — ścisłe zasady. Stable Diffusion — luźniejsze (self-hosted). Etyka AI art — credit source.",
  },
  {
    question: "Integracja AI Image Gen z Next.js — upload, storage i wyświetlanie?",
    answer: "Architektura: Frontend — prompt input. API Route — call AI API. Storage — Vercel Blob / S3. DB — zapisz URL. Frontend — wyświetl. Route Handler: app/api/generate/route.ts. export async function POST(req: Request) { const {prompt} = await req.json(). const image = await openai.images.generate({model: 'dall-e-3', prompt, size: '1024x1024'}). const imageUrl = image.data[0].url. const blob = await put('generated/img.png', await fetch(imageUrl).then(r => r.blob()), {access: 'public'}). await db.image.create({data: {url: blob.url, prompt}}). return Response.json({url: blob.url}) }. Vercel Blob: npm install @vercel/blob. put(path, blob, {access: 'public'}). Automatyczny CDN. $0.023/GB storage. $0.20/GB bandwidth. Cloudflare R2: S3-compatible. Brak egress fee! @aws-sdk/client-s3. Presigned URLs. Streaming URL do frontu: Nie pobieraj i re-upload. Przekaż URL bezpośrednio do img. Ale URL DALL-E wygasa po 60 min. Dlatego save to własne storage. Next.js Image z AI: Dodaj domain do next.config. domains: ['oaidalleapiprodscus.blob.core.windows.net']. lub remotePatterns. next/image z AI URL. Optimalizacja i lazy loading. Gallery: Masonry grid z react-masonry-css. InfiniteQuery (TanStack Query). Pagination lub infinite scroll. Filtrowanie po stylu. Watermark: sharp — dodaj watermark. canvas API po stronie klienta. Rate limiting: @upstash/ratelimit w API Route. Per user, per hour. Zapobiegaj kosztom. Token budget per user.",
  },
];

const aiImageApis = [
  { api: "DALL-E 3 (OpenAI)", model: "OpenAI proprietary", cena: "$0.04-$0.12/img", kiedy: "Najlepsza jakość tekstu w obrazach, reliabilny" },
  { api: "Stable Diffusion XL (Stability)", model: "Open source", cena: "$0.003-$0.065/img", kiedy: "Tanie, customizable, self-host opcja" },
  { api: "Flux.1 (FAL.ai)", model: "Black Forest Labs", cena: "$0.003-$0.055/img", kiedy: "Szybki, realtime streaming, SOTA quality" },
  { api: "Replicate", model: "Marketplace (SDXL, Flux)", cena: "$0.0039+/run", kiedy: "Wiele modeli, fine-tuning, webhooks" },
  { api: "Midjourney", model: "Proprietary", cena: "$10-60/mc", kiedy: "Najpiękniejszy styl — ale brak API" },
  { api: "Ideogram", model: "Proprietary", cena: "$0.02-$0.08/img", kiedy: "Tekst w obrazach, logo, typografia" },
];

export default function BlogAiImageGenCoTo() {
  return (
    <Layout>
      <SEOHead
        title="AI generowanie obrazów — DALL-E 3, Replicate, FAL.ai, Flux i Stable Diffusion TypeScript 2024 | Fotz.pl"
        description="AI Image Generation: DALL-E 3 (OpenAI), Replicate (SDXL, Flux), FAL.ai (realtime), Stable Diffusion — prompt engineering, Next.js integracja, Vercel Blob i porównanie kosztów."
        canonicalUrl="https://fotz.pl/blog/ai-generowanie-obrazow-dalle-replicate-fal-flux-stable-diffusion-typescript-2024"
      />
      <ArticleSchema
        title="AI generowanie obrazów — DALL-E 3, Replicate, FAL.ai, Flux i Stable Diffusion TypeScript 2024?"
        description="6 API do generowania obrazów AI (DALL-E 3/SDXL/Flux/Replicate/Midjourney/Ideogram) — prompt engineering, Next.js integration, storage (Vercel Blob/R2) i koszty."
        url="https://fotz.pl/blog/ai-generowanie-obrazow-dalle-replicate-fal-flux-stable-diffusion-typescript-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "AI Image Generation", url: "https://fotz.pl/blog/ai-generowanie-obrazow-dalle-replicate-fal-flux-stable-diffusion-typescript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "AI Image Generation", href: "/blog/ai-generowanie-obrazow-dalle-replicate-fal-flux-stable-diffusion-typescript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              AI / Image Gen / TypeScript
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI generowanie obrazów
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              DALL-E 3, Replicate (SDXL/Flux), FAL.ai (realtime), Stable Diffusion —
              prompt engineering, Next.js integracja i porównanie kosztów.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Tekst w obrazach", value: "DALL-E 3" },
                { label: "Open source", value: "Flux/SDXL" },
                { label: "Realtime", value: "FAL.ai" },
                { label: "Marketplace", value: "Replicate" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 API do generowania obrazów AI — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              DALL-E 3, Stable Diffusion, Flux, Replicate, Midjourney i Ideogram —
              model, cena i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">API</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Model</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cena</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {aiImageApis.map((a, i) => (
                  <tr key={a.api} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{a.api}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{a.model}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{a.cena}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{a.kiedy}</td>
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
