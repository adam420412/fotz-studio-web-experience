import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Konva.js i jak używać react-konva?",
    answer: "Konva.js: 2D Canvas library. Wysokopoziomowe API nad Canvas. Sceny, layers, groups, shapes. Hit detection. Drag and drop. Transformations (rotate, scale, skew). Animacje. react-konva: React bindings dla Konva.js. Deklaratywne JSX. Instalacja: npm install konva react-konva. Stage — Canvas element. Layer — warstwa rysowania. Group — grupowanie shapes. Shapes: Rect, Circle, Ellipse, Wedge, Line, Arrow, Star, Polygon, RegularPolygon. Text — tekst. Image — obrazy. Path — SVG path. Custom Shape. Podstawy: Stage width={600} height={400}. Layer. Rect x={0} y={0} width={100} height={100} fill='blue'. Circle x={300} y={200} radius={50} fill='red'. Events: onClick, onMouseEnter, onMouseLeave, onDragStart, onDragEnd. Drag and drop: draggable prop na Shape. Transformations: Transformer component — resize/rotate handle. useRef na shape. Transformer nodes={[shapeRef.current]}. Animacja: Tween — GSAP-like. Anim — rAF-based. react-spring z Konva przez ref updates. Eksport: stage.toDataURL() — base64 PNG. stage.toBlob() — Blob. Konva.Image.fromURL() — load image. Filter: filter={[Konva.Filters.Blur]}. blurRadius. brightness, contrast, grayscale. Hit canvas: Konva tworzy osobny canvas dla hit detection. Wydajność: wiele shapes. Wirtualna selekcja. shouldCacheOnUpdate prop. Stage w Next.js: dynamic import ze ssr: false. Canvas API nie istnieje na serwerze.",
  },
  {
    question: "Fabric.js — canvas editor dla aplikacji webowych?",
    answer: "Fabric.js: Canvas library z bogatym API. Object model na Canvas. Popularna dla graficznych edytorów. Podpisywanie dokumentów. Image editing. Wersja 6 (2024): ES modules. TypeScript rewrite. Instalacja: npm install fabric. import {Canvas, Rect, Circle, FabricImage} from 'fabric'. const canvas = new Canvas('c'). canvas.add(new Rect({width: 100, height: 100, fill: 'red', top: 10, left: 10})). React wrapper: fabric-react lub manual ref. Obiekty: FabricObject — base. Rect, Circle, Ellipse, Line, Triangle. Path (SVG path). Polygon, Polyline. Text, IText (editable), Textbox. FabricImage (bitmap). Group. Selection: canvas.getActiveObject(). Wielokrotna selekcja. Selection events. Transformacje: rotate, scale, skew, flipX, flipY. Animacja: object.animate('left', 200, {duration: 1000, onChange: canvas.renderAll.bind(canvas)}). Eksport: canvas.toDataURL(). canvas.toJSON() — serializacja. canvas.loadFromJSON(json) — deserialization. canvas.toSVG(). Free drawing: canvas.isDrawingMode = true. canvas.freeDrawingBrush. width, color, shadow. Pattern brush, Pencil brush, Circle brush. Konva vs Fabric: Konva — React-native, scenes. Fabric — object model, richer features. Konva — szybszy dla many objects. Fabric — lepszy dla document editing. Kiedy Fabric: image editor, annotation tool, whiteboard, diagram editor. Kiedy Konva: gry, animacje, generative art, performance critical.",
  },
  {
    question: "html2canvas i dom-to-image — screenshot elementów?",
    answer: "html2canvas: screenshot DOM element jako Canvas. Rerender DOM przez CSS parsing. Nie przeglądarka screenshot — własny renderer. Ograniczenia: brak pełnego CSS support. Cross-origin images blokowane. Niektóre style ignorowane. Instalacja: npm install html2canvas. html2canvas(document.getElementById('myDiv')).then(canvas => {document.body.appendChild(canvas)}). Options: scale: 2 (retina). useCORS: true (cross-origin images). allowTaint: false. windowWidth/Height. Next.js: await html2canvas(ref.current, {scale: 2}). canvas.toBlob(blob => saveAs(blob, 'screenshot.png')). dom-to-image-more: alternatywa html2canvas. Używa SVG foreignObject. Lepsza pełność CSS. import domtoimage from 'dom-to-image-more'. domtoimage.toPng(node).then(dataUrl => img.src = dataUrl). dom-to-image: starsza wersja. Chromium API (Puppeteer/Playwright): prawdziwy screenshot. Doskonała jakość. Server-side. Puppeteer: const browser = await puppeteer.launch(). const page = await browser.newPage(). await page.goto(url). await page.screenshot({path: 'screenshot.png', fullPage: true}). Playwright screenshot: zamiast Puppeteer. W Next.js API route lub server action. Edge runtime: Playwright nie obsługiwane. Satori (Vercel): HTML -> SVG na Edge. Używany przez og-image generators. Brak pełnego HTML — tylko ograniczone JSX. @vercel/og: OG image generation na Edge. ImageResponse. JSX -> PNG. Idealny dla Social Share Images. Ogimage.org — alternatywa Satori. Używają obie: Satori do SVG, resvg-js do PNG.",
  },
  {
    question: "QR Code i Barcode w React — generowanie i skanowanie?",
    answer: "QR Code generowanie: qrcode.react: popularny. QRCodeSVG lub QRCodeCanvas. import {QRCodeSVG} from 'qrcode.react'. QRCodeSVG value='https://fotz.pl' size={256} bgColor='#ffffff' fgColor='#000000'. Poziom korekcji błędów: level: 'L' | 'M' | 'Q' | 'H'. Wyższy = bardziej odporny na uszkodzenia. Mniejszy moduły ale więcej danych. Logo w QR: imageSettings prop. src, height, width, x, y, excavate. react-qr-code: alternatywa, SVG-only. QR stylizowany: qr-code-styling — custom shapes, kolory, logo. qrbtf — piękne dekorowane QR. Barcode generowanie: react-barcode: EAN-13, Code128, QR, i inne. import Barcode from 'react-barcode'. Barcode value='123456789012'. jsbarcode — base library. Typy: Code128, EAN-13, EAN-8, UPC, Code39, ITF, MSI, Pharmacode, Codabar. QR Code skanowanie: @zxing/library: ZXing port do JS. Kamera -> dekoduj QR/barcode. html5-qrcode: uproszczony wrapper. react-qr-reader: React wrapper dla skanera. Używa getUserMedia API. Kamera. Dostęp: HTTPS wymagany. Zezwolenie użytkownika. ZXing w React Native: @zxing/browser dla web. Expo: expo-barcode-scanner. expo-camera z onBarCodeScanned. Use cases: checkout systems. Ticketing. Product catalogs. Menu restauracji. Login z QR (WhatsApp Web). Linki do aplikacji. vCard QR. WiFi QR. PDF417 i DataMatrix: Inne 2D barcodes. pdf417.js, @bwip-js/browser. Logistyka, boarding passes.",
  },
  {
    question: "PDF Viewer i generowanie PDF w React — react-pdf i pdfmake?",
    answer: "PDF Viewer (wyświetlanie): react-pdf (@react-pdf/renderer i react-pdf/pdfjs-dist): UWAGA — dwa różne pakiety! pdfjs-dist: Mozilla PDF.js — renderer PDF. react-pdf (dla viewer): npm install react-pdf. Document + Page komponenty. Wyświetla istniejące PDF. PDF.js worker: PDF rendering w web worker. Konfiguracja: pdfjs.GlobalWorkerOptions.workerSrc. @react-pdf-viewer/core: zaawansowany viewer. Toolbar, zoom, search. Podstawowe użycie: import {Document, Page} from 'react-pdf'. Document file='/document.pdf'. Page pageNumber={1}. Skalowanie: width lub scale prop. Thumbnail: generatePageThumbnails. PDF generowanie: @react-pdf/renderer: React do PDF. JSX komponenty jak w React. import {Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer'. Komponenty: Document, Page, View, Text, Image, Link, Note, Canvas, Svg. StyleSheet.create — Flexbox. PDF rendering: na serwerze (Node.js). Na kliencie (browser). Eksport: renderToStream(), renderToFile() (Node). renderToBlob() (Browser). pdf(MyDoc).toBlob().then(blob => saveAs(blob, 'doc.pdf')). pdfmake: JSON-based PDF. Nie JSX. Prostszy API. content: [{text: 'Hello'}, {table: {body: [[...]]}}]. Definicja tabel. pdfkit: Node.js PDF generation. Niski poziom. Pełna kontrola. Puppeteer PDF: page.pdf({format: 'A4', printBackground: true}). HTML -> PDF. Perfekta jakość CSS. Server-side. jsPDF: stara, prosta. HTML2canvas + jsPDF dla screenshots -> PDF. FPDF.js: port PHP FPDF. Kiedy react-pdf/renderer: typowe raporty, faktury, dokumenty. Kiedy Puppeteer: kompleksowy HTML -> PDF.",
  },
];

const canvasLibraries = [
  { biblioteka: "react-konva (Konva.js)", typ: "2D Canvas (scene graph)", drag: "Wbudowany", eksport: "PNG, JPEG", kiedy: "Gry, generative art, interaktywne kanwy" },
  { biblioteka: "Fabric.js", typ: "Object model Canvas", drag: "Wbudowany + transformacje", eksport: "PNG, SVG, JSON", kiedy: "Image editor, whiteboard, annotation" },
  { biblioteka: "html2canvas", typ: "DOM screenshot", drag: "Nie", eksport: "Canvas -> PNG", kiedy: "Screenshot DOM elementu, share card" },
  { biblioteka: "Satori (@vercel/og)", typ: "JSX -> SVG/PNG (Edge)", drag: "Nie", eksport: "PNG (OG images)", kiedy: "Social share images, OG Image generation" },
  { biblioteka: "Three.js (R3F)", typ: "3D WebGL", drag: "Ograniczone (orbit)", eksport: "PNG (renderer)", kiedy: "3D grafika, produkty 3D, animacje 3D" },
  { biblioteka: "PixiJS", typ: "2D WebGL/Canvas", drag: "Plugin", eksport: "PNG", kiedy: "Gry 2D, efekty specjalne, animacje interaktywne" },
];

export default function BlogKonvaCanvasCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Konva.js, Fabric.js, html2canvas | Fotz Studio"
        description="react-konva (scena, shapes, drag), Fabric.js (object model, free drawing), html2canvas (DOM screenshot), Satori OG images, QR Code (qrcode.react) i PDF…"
        canonicalUrl="https://fotz.pl/blog/konva-fabricjs-html2canvas-canvas-screenshot-qr-pdf-react-2024"

        keywords="Konva.js, Fabric.js, html2canvas co to jest, Konva.js, Fabric.js, html2canvas jak działa, Konva.js, Fabric.js, html2canvas tutorial, Konva.js, Fabric.js, html2canvas przykład, czym jest Konva.js, Fabric.js, html2canvas, Konva.js, Fabric.js, html2canvas dokumentacja, Konva.js, Fabric.js, html2canvas przewodnik"

        canonical="https://fotz.pl/blog/konva-fabricjs-html2canvas-canvas-screenshot-qr-pdf-react-2024"
      />
      <ArticleSchema
        title="Konva.js, Fabric.js, html2canvas — Canvas i screenshot w React 2024?"
        description="6 bibliotek canvas (react-konva/Fabric.js/html2canvas/Satori/Three.js/PixiJS) — 2D/3D graphics, DOM screenshots, QR Code skanowanie i PDF generowanie."
        url="https://fotz.pl/blog/konva-fabricjs-html2canvas-canvas-screenshot-qr-pdf-react-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Canvas i Graphics React", url: "https://fotz.pl/blog/konva-fabricjs-html2canvas-canvas-screenshot-qr-pdf-react-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Canvas i Graphics React", url: "/blog/konva-fabricjs-html2canvas-canvas-screenshot-qr-pdf-react-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Canvas / Graphics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Canvas i Graphics w React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              react-konva (shapes, drag, animacje), Fabric.js (whiteboard, editor),
              html2canvas (screenshot), Satori (OG images), QR Code i PDF viewer.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Scene graph", value: "Konva.js" },
                { label: "Object model", value: "Fabric.js" },
                { label: "DOM screenshot", value: "html2canvas" },
                { label: "OG images", value: "Satori" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek canvas i grafiki — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              react-konva, Fabric.js, html2canvas, Satori, Three.js i PixiJS —
              typ, drag, eksport i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Drag</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Eksport</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {canvasLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.drag}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.eksport}</td>
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

      <RelatedArticles currentArticleId="konva-fabricjs-html2canvas-canvas-screenshot-qr-pdf-react-2024" />
      <ContactSection />
    </Layout>
  );
}
