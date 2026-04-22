import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są Node.js Streams i kiedy ich używać?",
    answer: "Node.js Streams: przetważanie danych fragmentami (chunks). Nie ładuj całego pliku do RAM. Backpressure — nie przepełniaj bufora. EventEmitter-based. Cztery typy: Readable — tylko odczyt. Writable — tylko zapis. Duplex — odczyt i zapis. Transform — Duplex z transformacją danych. Kiedy streams: duże pliki (video, CSV z milionami wierszy). HTTP request body. File upload/download. Kompresja/dekompresja on-the-fly. Ciągłe dane (WebSocket, socket). Streaming response. Readable stream: import {Readable} from 'stream'. const readable = Readable.from(['chunk1', 'chunk2', 'chunk3']). readable.on('data', chunk => process(chunk)). readable.on('end', () => done()). Lub for await (const chunk of readable) { process(chunk) }. Writable stream: const writable = fs.createWriteStream('output.txt'). writable.write('chunk'). writable.end(). writable.on('finish', () => done()). pipe(): readable.pipe(writable) — najprostszy sposób. Automatyczna backpressure. readable.pipe(transform).pipe(writable). Łańcuch transformacji. fs.createReadStream: 64KB chunki domyślnie. highWaterMark — rozmiar chunka. encoding — string zamiast Buffer. FileSystem streaming: const rs = fs.createReadStream('huge-file.csv'). const ws = fs.createWriteStream('output.csv'). rs.pipe(transform).pipe(ws).",
  },
  {
    question: "Transform streams i pipeline — zaawansowane użycie?",
    answer: "Transform stream: Duplex, który transformuje dane. import {Transform} from 'stream'. class UpperCaseTransform extends Transform { _transform(chunk, encoding, callback) { this.push(chunk.toString().toUpperCase()). callback() } }. Lub: Transform({transform(chunk, enc, cb) { cb(null, chunk.toString().toUpperCase()) }}). Użycie: readable.pipe(new UpperCaseTransform()).pipe(writable). Wbudowane Transform: zlib.createGzip() — kompresja gzip. zlib.createGunzip() — dekompresja. crypto.createCipher() — szyfrowanie. csv-parse stream mode. Streaming JSON parse: stream-json. JSONParser, StreamValues. Dla dużych JSON — nie JSON.parse(). pipeline(): import {pipeline} from 'stream/promises'. await pipeline(source, transform1, transform2, destination). Automatyczna obsługa błędów. Cleanup przy błędzie. Lepsza od .pipe() (obsługa błędów). pipeline z generators: async function* transform(source) { for await (const chunk of source) { yield processChunk(chunk) } }. await pipeline(readable, transform, writable). Web Streams API (globalny): ReadableStream, WritableStream, TransformStream. Node.js 18+. Natywnie w przeglądarce. fetch() zwraca ReadableStream. response.body — ReadableStream. const reader = stream.getReader(). const {value, done} = await reader.read(). Konwersja: Readable.toWeb(nodeReadable). Readable.fromWeb(webReadable). Streaming w Next.js: App Router streaming przez Suspense. ReadableStream w Route Handler. new Response(new ReadableStream({start(controller) { controller.enqueue(data). controller.close() }})). Transfer-Encoding: chunked.",
  },
  {
    question: "Streaming HTTP i Server-Sent Events w Node.js?",
    answer: "HTTP streaming response: res.setHeader('Content-Type', 'text/plain'). res.setHeader('Transfer-Encoding', 'chunked'). res.write('chunk 1'). res.write('chunk 2'). res.end(). Klient odbiera fragmenty na bieżąco. Server-Sent Events (SSE): jednokierunkowy streaming. res.setHeader('Content-Type', 'text/event-stream'). res.setHeader('Cache-Control', 'no-cache'). res.setHeader('Connection', 'keep-alive'). setInterval(() => res.write('data: ' + JSON.stringify(event) + 'nn'), 1000). Klient: const es = new EventSource('/events'). es.onmessage = event => console.log(event.data). SSE vs WebSocket: SSE — jednokierunkowy, HTTP, automatyczny reconnect. WebSocket — dwukierunkowy, własny protokół. SSE dla: live updates, notifications, log streaming. AI streaming responses: OpenAI streaming: stream: true. async for await of response. Vercel AI SDK: createStreamableValue, StreamingTextResponse. Next.js Route Handler: return new Response(openAiStream). Pipe OpenAI stream do Response. Brotli compression streaming: import {createBrotliCompress} from 'zlib'. pipeline(readStream, createBrotliCompress(), writeStream). CSV streaming processing: import {parse} from 'csv-parse'. fs.createReadStream('data.csv').pipe(parse({columns: true})).on('data', row => processRow(row)). Miliony wierszy bez OOM. Backpressure: writable.write() zwraca false gdy bufor pełny. readable.pause() — zatrzymaj. writable.on('drain', () => readable.resume()). pipeline() obsługuje automatycznie.",
  },
  {
    question: "Node.js Streams w praktyce — file processing i data pipelines?",
    answer: "Duże pliki CSV: 10GB CSV — nie JSON.parse. csv-parse stream mode. const parser = parse({columns: true, skip_empty_lines: true}). fs.createReadStream('data.csv').pipe(parser). const output = fs.createWriteStream('output.jsonl'). for await (const record of parser) { output.write(JSON.stringify(record) + 'n') }. Image processing pipeline: sharp — stream support. fs.createReadStream('input.jpg').pipe(sharp().resize(800, 600).webp()).pipe(fs.createWriteStream('output.webp')). Video transcoding: ffmpeg + streams. ffmpeg() .input(readable).outputFormat('mp4').pipe(writable). Axios streaming: const response = await axios.get(url, {responseType: 'stream'}). response.data.pipe(fs.createWriteStream('file.zip')). S3 streaming upload: s3.upload({Bucket, Key, Body: readStream}).promise(). Brak ładowania całego pliku. S3 streaming download: s3.getObject({Bucket, Key}).createReadStream(). PassThrough stream: const pass = new PassThrough(). Proxy bez transformacji. Fork stream do wielu destinations. readable.pipe(pass). pass.pipe(dest1). pass.pipe(dest2). Readline interface: import {createInterface} from 'readline'. const rl = createInterface({input: fs.createReadStream('file.txt')}). for await (const line of rl) { processLine(line) }. Streaming JSON stringify: json-stream-stringify. Nie JSON.stringify(bigArray) — OOM. Encodes incrementally. Object mode streams: highWaterMark: 16 (objects). chunk to obiekt nie Buffer. node --max-old-space-size nie potrzebny. Użyj streams.",
  },
  {
    question: "Web Streams API i kompatybilność z Fetch API w Next.js?",
    answer: "Web Streams API: standard W3C. ReadableStream, WritableStream, TransformStream. Natywnie w przeglądarce, Node.js 18+, Deno, Bun, Cloudflare Workers. fetch() i Streams: const response = await fetch(url). const reader = response.body.getReader(). while (true) { const {done, value} = await reader.read(). if (done) break. processChunk(value) }. ReadableStream creation: new ReadableStream({start(controller) { controller.enqueue(new TextEncoder().encode('hello')). controller.close() }}). Async generator to ReadableStream: ReadableStream.from(asyncGenerator()). Node.js 18+. TransformStream: const {readable, writable} = new TransformStream({transform(chunk, controller) { controller.enqueue(chunk.toString().toUpperCase()) }}). fetch(url).then(r => r.body.pipeThrough(decoder).pipeTo(output)). Next.js App Router: Route Handler streaming. export async function GET() { const stream = new ReadableStream({async start(controller) { for (const chunk of data) { controller.enqueue(chunk). await delay(100) } controller.close() }}). return new Response(stream, {headers: {'Content-Type': 'text/plain'}}) }. AI SDK streaming: streamText() od Vercel AI SDK. toAIStreamResponse() — format dla klienta. useChat hook — auto konsumuje. TextDecoderStream: Web API do dekodowania UTF-8. ByteLengthQueuingStrategy: kontrola backpressure przez rozmiar bajtów. CountQueuingStrategy: przez liczbę chunks. Node kompatybilność: Readable.toWeb(nodeStream). Readable.fromWeb(webStream). Interop z node:stream.",
  },
];

const streamTypes = [
  { typ: "Readable", api: "fs.createReadStream(), Readable.from()", kierunek: "Wyjscie", kiedy: "Odczyt pliku, HTTP request body, generatory" },
  { typ: "Writable", api: "fs.createWriteStream(), res.write()", kierunek: "Wejscie", kiedy: "Zapis pliku, HTTP response streaming" },
  { typ: "Duplex", api: "net.Socket, WebSocket", kierunek: "Dwukierunkowy", kiedy: "Sieciowe połączenia, WebSocket raw" },
  { typ: "Transform", api: "zlib.createGzip(), csv-parse", kierunek: "Duplex + transform", kiedy: "Kompresja, parsing, szyfrowanie on-the-fly" },
  { typ: "Web ReadableStream", api: "fetch().body, new ReadableStream()", kierunek: "Wyjscie (browser+Node)", kiedy: "Fetch API, Next.js Route Handlers, Edge" },
  { typ: "PassThrough", api: "new PassThrough()", kierunek: "Proxy bez zmian", kiedy: "Forking, monitoring, proxy streaming" },
];

export default function BlogNodeStreamsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Node.js Streams | Fotz Studio"
        description="Node.js Streams (Readable, Writable, Transform, pipeline), backpressure, SSE, CSV streaming, S3 upload/download, Web Streams API (ReadableStream) i…"
        canonical="https://fotz.pl/blog/nodejs-streams-readable-writable-transform-pipeline-web-streams-2024"

        keywords="Node.js Streams co to jest, Node.js Streams jak działa, Node.js Streams tutorial, Node.js Streams przykład, czym jest Node.js Streams, Node.js Streams dokumentacja, Node.js Streams przewodnik"
      />
      <ArticleSchema
        title="Node.js Streams — Readable, Writable, Transform, pipeline i Web Streams API 2024?"
        description="6 typów streamów (Readable/Writable/Duplex/Transform/Web ReadableStream/PassThrough) — pipeline, backpressure, HTTP streaming, SSE i Next.js App Router streaming."
        url="https://fotz.pl/blog/nodejs-streams-readable-writable-transform-pipeline-web-streams-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Node.js Streams", url: "https://fotz.pl/blog/nodejs-streams-readable-writable-transform-pipeline-web-streams-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-lime-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Node.js Streams", url: "/blog/nodejs-streams-readable-writable-transform-pipeline-web-streams-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-lime-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Node.js / Streams / Performance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Node.js Streams
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Readable, Writable, Transform, pipeline — przetwarzanie dużych plików bez OOM.
              Web Streams API (ReadableStream) i SSE dla Next.js App Router.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Odczyt danych", value: "Readable" },
                { label: "Transformacje", value: "Transform" },
                { label: "Backpressure", value: "pipeline()" },
                { label: "SSE/HTTP", value: "Web Streams" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 typów streamów — API i zastosowanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Readable, Writable, Duplex, Transform, Web ReadableStream i PassThrough —
              API, kierunek i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">API</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kierunek</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {streamTypes.map((s, i) => (
                  <tr key={s.typ} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{s.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.api}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.kierunek}</td>
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

      <RelatedArticles currentArticleId="nodejs-streams-readable-writable-transform-pipeline-web-streams-2024" />
      <ContactSection />
    </Layout>
  );
}
