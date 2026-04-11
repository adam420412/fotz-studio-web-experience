import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "@react-pdf/renderer — generowanie PDF z React komponentów?",
    answer: "@react-pdf/renderer: Diego Muracciole. PDF z JSX. Node.js i przeglądarka. Instalacja: npm install @react-pdf/renderer. Podstawy: import {Document, Page, Text, View, StyleSheet, PDFDownloadLink, PDFViewer} from '@react-pdf/renderer'. const styles = StyleSheet.create({page: {flexDirection: 'row', backgroundColor: '#E4E4E4'}, section: {margin: 10, padding: 10, flexGrow: 1}}). const MyDocument = () => Document. Page size='A4' style={styles.page}. View style={styles.section}. Text Sekcja 1 /Text. /View. /Page. /Document. Serwerowe generowanie: import {renderToBuffer} from '@react-pdf/renderer'. const buffer = await renderToBuffer(MyDocument). res.setHeader('Content-Type', 'application/pdf'). res.send(buffer). Next.js API Route: stream do klienta. Pobieranie klienckie: PDFDownloadLink document={MyDocument} fileName='dokument.pdf'. Pobierz PDF. /PDFDownloadLink. Podgląd w UI: PDFViewer width='100%' height={600}. MyDocument /. /PDFViewer. Stylowanie: Tylko Flexbox. Nie CSS grid. Subset CSS properties. fontFamily, fontSize, color, margin, padding. Obrazy: Image src='https://...' lub src={imageBuffer}. Fonts: Font.register({family: 'Roboto', src: 'path/to/font.ttf'}). Tabelki: View z borderStyle. Listy: map w Text. Numery stron: Text render={({pageNumber, totalPages}) => pageNumber + ' / ' + totalPages}. Linki: Link src='https://fotz.pl'. Ograniczenia: brak zaawansowanego HTML. CSS ograniczone. Nie dla kompleksowych layoutów.",
  },
  {
    question: "pdf-lib i pdfkit — tworzenie i modyfikacja PDF w Node.js?",
    answer: "pdf-lib: Andrew Duthie. Tworzenie i modyfikacja istniejących PDF. TypeScript-first. Instalacja: npm install pdf-lib. Tworzenie: import {PDFDocument, StandardFonts, rgb} from 'pdf-lib'. const pdfDoc = await PDFDocument.create(). const page = pdfDoc.addPage([595, 842]). const font = await pdfDoc.embedFont(StandardFonts.Helvetica). page.drawText('Hello World!', {x: 50, y: 750, size: 30, font, color: rgb(0, 0, 0)}). const pdfBytes = await pdfDoc.save(). Modyfikacja istniejącego: const existingPdf = await PDFDocument.load(existingPdfBytes). const pages = existingPdf.getPages(). pages[0].drawText('Stempel', {x: 50, y: 700, size: 12}). Kopiowanie stron między dokumentami: const copiedPages = await targetDoc.copyPages(sourceDoc, [0, 1]). Obrazy: const jpgImage = await pdfDoc.embedJpg(jpgBytes). page.drawImage(jpgImage, {x: 50, y: 400, width: 200, height: 150}). Embedowanie PNG, JPEG. Formularze PDF: const form = pdfDoc.getForm(). const textField = form.createTextField('name'). textField.setText('Jan'). PDFKit: starszy. Stream-based. Dobry dla kompleksowych. npm install pdfkit. import PDFDocument from 'pdfkit'. const doc = new PDFDocument(). doc.pipe(fs.createWriteStream('output.pdf')). doc.fontSize(25).text('Hello World', 100, 100). doc.end(). Puppeteer PDF: headless Chrome. Renderuj HTML -> PDF. Piękny output. Wolniejszy. Najlepszy dla HTML-based.",
  },
  {
    question: "Puppeteer i Playwright do generowania PDF z HTML?",
    answer: "Puppeteer: headless Chrome. Renderuj stronę -> PDF. Pełny HTML/CSS support. Instalacja: npm install puppeteer. Podstawy: import puppeteer from 'puppeteer'. const browser = await puppeteer.launch(). const page = await browser.newPage(). await page.goto('https://myapp.com/invoice/123'). const pdf = await page.pdf({format: 'A4', printBackground: true, margin: {top: '20px', bottom: '20px', left: '20px', right: '20px'}}). await browser.close(). Next.js API: import puppeteer from 'puppeteer-core'. import chromium from '@sparticuz/chromium'. const browser = await puppeteer.launch({args: chromium.args, executablePath: await chromium.executablePath(), headless: true}). @sparticuz/chromium — dla serverless (Vercel). Playwright PDF: const browser = await playwright.chromium.launch(). const page = await browser.newPage(). await page.goto(url). await page.pdf({path: 'output.pdf', format: 'A4'}). Podobny do Puppeteer API. HTML template do PDF: renderuj React component do HTML string. ReactDOMServer.renderToString(component). Przekaż do Puppeteer jako page.setContent(html). Lepsze niż URL navigation. Css print: @media print { ... }. Page-break: page-break-before: always. Optymalizacja: ponownie użyj browser instance. Nie twórz nowego per request. Pool browserów. chrome-aws-lambda: starszy. Użyj @sparticuz/chromium. Serverless limits: 50MB limit. Puppeteer + /tmp storage. Vercel: 250MB function limit (pro). AWS Lambda layers.",
  },
  {
    question: "TanStack Virtual i Virtua — virtual scrolling dla dużych list?",
    answer: "Virtual Scrolling: renderuj tylko widoczne elementy. Tysiące wierszy bez lagów. Kluczowe dla tabeli, list. TanStack Virtual: v3. Framework-agnostic. React, Svelte, Vue. Instalacja: npm install @tanstack/react-virtual. Prosta lista: import {useVirtualizer} from '@tanstack/react-virtual'. const rowVirtualizer = useVirtualizer({count: rows.length, getScrollElement: () => parentRef.current, estimateSize: () => 35}). Render: div ref={parentRef} style={{height: '400px', overflow: 'auto'}}. div style={{height: rowVirtualizer.getTotalSize() + 'px', position: 'relative'}}. {rowVirtualizer.getVirtualItems().map(virtualItem => div key={virtualItem.key} style={{position: 'absolute', top: virtualItem.start + 'px', height: virtualItem.size + 'px'}}. {rows[virtualItem.index]}. /div)}. Dynamiczne rozmiary: measureElement. useRef dla each row. Bidirectional: horizontal + vertical. Gridy wirtualizowane. Okno vs kontener: windowVirtualizer — scroll na window. virtualizer — scroll na div. Virtua: ultra-fast. Minimalny. Instalacja: npm install virtua. import {VList} from 'virtua'. VList style={{height: '500px'}}. {items.map(item => div key={item.id} style={{height: 50}} Item /div)}. /VList. Automatyczne pomiary. Prostszy API niż TanStack. VGrid dla siatki. WindowVirtualScroll. react-window (legacy): Brian Vaughn. Starszy. FixedSizeList, VariableSizeList. Nadal używany. Mniejszy ekosystem niż TanStack. TanStack Table + Virtual: połącz dla dużych tabel.",
  },
  {
    question: "Figma API i Design Tokens — synchronizacja design-to-code?",
    answer: "Figma API: REST API. OAuth lub Personal Access Token. Odczyt komponentów, stylów, zmiennych. npm install @figma/rest-api-spec. Dostęp: GET /v1/files/:file_key. GET /v1/files/:file_key/variables. GET /v1/components. Design Tokens: W3C Design Tokens Format. JSON lub YAML. Kolory, rozmiary, spacing, typografia. Figma Variables (2023+): kolekcje zmiennych. Kolory, liczby, stringi. Modes (light/dark). REST API: /variables/local. Token Studio: Figma plugin. Tokens w JSON. Sync z GitHub. Build step -> CSS variables. Style Dictionary: Amazon. Transform tokens do CSS, SCSS, JS. config.json: {source: ['tokens/**/*.json'], platforms: {css: {transformGroup: 'css', files: [{destination: 'tokens.css', format: 'css/variables'}]}}}. npx style-dictionary build. Output: --color-primary: #3880ff. Theo: Salesforce. Podobny do Style Dictionary. Figma MCP Server: MCP protokół. Claude może czytać Figma. Generuj kod z designu. Automatyczne komponenty. Workflow design-to-code: Figma Variables -> Export JSON (Token Studio). JSON -> Style Dictionary -> CSS/SCSS/TS. Importuj do komponentów. Aktualizacja jednokierunkowo. Lub dwukierunkowo. Figma Connect: komponenty React mapped do Figma. Podgląd w Figma. Consistency. Chromatic + Storybook + Figma: Visual testing. Design system sync. Jeden source of truth.",
  },
];

const pdfTools = [
  { narzedzie: "@react-pdf/renderer", uzycie: "PDF z React JSX", kiedy: "Raporty, faktury z React komponentami" },
  { narzedzie: "pdf-lib", uzycie: "Tworzenie i modyfikacja PDF", kiedy: "Wypełnianie formularzy, merge, stamp PDF" },
  { narzedzie: "PDFKit", uzycie: "Stream-based PDF w Node", kiedy: "Złożone dokumenty, custom layout" },
  { narzedzie: "Puppeteer PDF", uzycie: "HTML -> PDF (headless Chrome)", kiedy: "HTML/CSS templates, piękne raporty" },
  { narzedzie: "TanStack Virtual", uzycie: "Virtual scrolling list/grid", kiedy: "Tysiące wierszy, tabele, listy" },
  { narzedzie: "Virtua", uzycie: "Ultra-fast virtual list", kiedy: "Prostszy API, minimalny overhead" },
];

export default function BlogReactPdfCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React PDF, pdf-lib, Puppeteer PDF i TanStack Virtual — generowanie PDF i listy 2024 | Fotz.pl"
        description="PDF w React 2024: @react-pdf/renderer (JSX->PDF), pdf-lib (modyfikacja), Puppeteer PDF (HTML->PDF), TanStack Virtual (virtual scrolling), Virtua i Figma Design Tokens."
        canonicalUrl="https://fotz.pl/blog/react-pdf-pdflib-puppeteer-tanstack-virtual-generowanie-pdf-listy-2024"
      />
      <ArticleSchema
        title="React PDF, pdf-lib, Puppeteer PDF i TanStack Virtual — generowanie PDF i listy 2024?"
        description="6 narzędzi do PDF i list (@react-pdf/renderer/pdf-lib/PDFKit/Puppeteer/TanStack Virtual/Virtua) — generowanie PDF z React, modyfikacja i virtual scrolling."
        url="https://fotz.pl/blog/react-pdf-pdflib-puppeteer-tanstack-virtual-generowanie-pdf-listy-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React PDF i Virtual Scrolling 2024", url: "https://fotz.pl/blog/react-pdf-pdflib-puppeteer-tanstack-virtual-generowanie-pdf-listy-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-rose-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "React PDF i Virtual 2024", href: "/blog/react-pdf-pdflib-puppeteer-tanstack-virtual-generowanie-pdf-listy-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              PDF / Virtual Scrolling / React / 2024
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React PDF i Virtual Scrolling
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              @react-pdf/renderer (JSX do PDF), pdf-lib (modyfikacja),
              Puppeteer PDF i TanStack Virtual.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "JSX to PDF", value: "react-pdf" },
                { label: "Modyfikacja", value: "pdf-lib" },
                { label: "HTML to PDF", value: "Puppeteer" },
                { label: "Virtual list", value: "TanStack V." },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi PDF i virtual scrolling — użycie i kiedy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              @react-pdf/renderer, pdf-lib, PDFKit, Puppeteer, TanStack Virtual i Virtua —
              zastosowanie i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Użycie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {pdfTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.uzycie}</td>
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

      <ContactSection />
    </Layout>
  );
}
