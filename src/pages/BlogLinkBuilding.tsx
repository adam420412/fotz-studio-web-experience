import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Link2, TrendingUp, XCircle, Globe } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogLinkBuilding() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Link building — co to jest i jak zdobywać linki?" },
  ];

  const whiteHatMethods = [
    { title: "Content marketing", desc: "Tworzenie wartościowych treści które inne strony naturalnie linkują — poradniki, badania, infografiki, unikalne dane." },
    { title: "Guest posting", desc: "Artykuły gościnne na branżowych blogach i portalach. Dostajesz link, oni — wartościowy content. Win-win." },
    { title: "Digital PR", desc: "Budowanie relacji z dziennikarzami i blogerami. Cytowania w mediach = linki z autorytatywnych domen." },
    { title: "Lokalne katalogi i branżówki", desc: "Wpisy w lokalnych katalogach firm, branżowych platformach. Ważne dla Local SEO (Google Business + linki lokalne)." },
    { title: "Broken link building", desc: "Znajdowanie zepsutych linków u konkurencji i proponowanie zastąpienia ich Twoim contentem." },
    { title: "HARO / SourceBottle", desc: "Odpowiedzi na zapytania dziennikarzy szukających ekspertów — Twój komentarz = link z medium." },
  ];

  const faqItems = [
    {
      question: "Co to jest link building?",
      answer:
        "Link building to proces zdobywania linków zewnętrznych (backlinków) z innych stron prowadzących do Twojej witryny. Linki z autorytatywnych źródeł to jeden z najważniejszych czynników rankingowych Google — im więcej wartościowych stron linkuje do Ciebie, tym Google wyżej Cię ocenia. Backlink to swego rodzaju 'głos zaufania' — inna strona poleca Twoje treści.",
    },
    {
      question: "Dlaczego linki zewnętrzne są ważne dla SEO?",
      answer:
        "Google używa linków jako sygnału zaufania i autorytetu. Algorytm PageRank (podstawa Google) ocenia strony częściowo przez liczbę i jakość linków przychodzących. Strona z 100 linkami z autorytatywnych mediów będzie wyżej niż strona z 1000 linkami ze spamowych katalogów. Domain Rating (DR w Ahrefs) i Domain Authority (DA w Moz) mierzą siłę profilu linkowego.",
    },
    {
      question: "Ile kosztuje link building?",
      answer:
        "Koszty link buildingu są bardzo zróżnicowane: samodzielne działania (content + outreach) = koszt czasu, artykuł sponsorowany na portalu branżowym = 300-2000 zł, linki z dużych mediów (Gazeta, WP, Onet) = 1000-10 000 zł+, agencja SEO zajmująca się link buildingiem = 1000-5000 zł/mies. Tani link building (farmy linków) jest ryzykowny — Google penalizuje za manipulację linkami.",
    },
    {
      question: "Co to jest Domain Rating (DR)?",
      answer:
        "Domain Rating (DR) to metryka Ahrefs (0-100) oceniająca siłę profilu linkowego domeny. Im wyższy DR, tym bardziej wartościowy link z danej domeny. DR 0-20 = słaby, DR 20-50 = średni, DR 50-70 = silny, DR 70+ = bardzo silny. Przykłady: Wikipedia DR 92, Gazeta.pl DR 80+, lokalny portal regionalny DR 20-40. Celem link buildingu jest zdobywanie linków z domen o wysokim DR.",
    },
    {
      question: "Czego unikać w link buildingu?",
      answer:
        "Techniki zakazane przez Google (mogą skutkować karą): kupowanie linków ukryte jako naturalne, farmy linków i sieci PBN (Private Blog Networks), wymiana linków na masową skalę, ukryte linki (white text, display: none), spamowanie komentarzami i forami. Google Penguin (algorytm) wykrywa manipulację i może zdegradować serwis. Jeśli złapiesz karę ręczną — widać ją w Google Search Console.",
    },
    {
      question: "Jak sprawdzić profil linkowy swojej strony?",
      answer:
        "Narzędzia do analizy backlinków: Ahrefs Site Explorer (płatny, najbardziej dokładny), Semrush Backlink Analytics (płatny), Moz Link Explorer (częściowo bezpłatny), Google Search Console (zakładka 'Linki' — bezpłatna, ograniczone dane). Sprawdzaj regularnie: nowe linki, utracone linki, DR domen linkujących, kotwice (anchor text). Utrata ważnych linków może powodować spadki pozycji.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Link building — co to jest i jak zdobywać backlinki? | fotz.pl"
        description="Link building co to jest — wyjaśniamy jak działają backlinki w SEO, najlepsze metody zdobywania linków, czego unikać i jak sprawdzić profil linkowy strony."
        canonical="https://fotz.pl/blog/link-building-co-to"

        keywords="Link building co to jest, Link building definicja, czym jest Link building, Link building przykłady, jak działa Link building, Link building znaczenie, Link building przewodnik"
      />
      <ArticleSchema
        title="Link building — co to jest i jak zdobywać backlinki?"
        description="Czym jest link building w SEO, skuteczne metody zdobywania backlinków, Domain Rating i jak sprawdzić profil linkowy swojej strony."
        datePublished="2025-04-01"
        dateModified="2025-04-08"
        url="https://fotz.pl/blog/link-building-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Link2 className="w-4 h-4" /> SEO i pozycjonowanie</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Link building — co to jest i jak zdobywać backlinki?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Link building to jeden z filarów SEO — linki z innych stron to dla Google sygnał autorytetu.
                Jak zdobywać wartościowe backlinki i czego unikać żeby nie stracić pozycji?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Skuteczne metody link buildingu (White Hat)</h2>
              <p className="text-slate-700 mb-4">
                White hat link building to zdobywanie linków w sposób zgodny z wytycznymi Google — bez ryzyka kary:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {whiteHatMethods.map((method, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">{method.title}</p>
                        <p className="text-slate-600 text-xs">{method.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jakość vs ilość — co liczy się w linkach?</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Cecha linku</th>
                      <th className="text-left p-3 border border-slate-700">Wartość SEO</th>
                      <th className="text-left p-3 border border-slate-700">Przykład</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "DR domeny linkującej", value: "Bardzo wysoka", example: "Link z Gazeta.pl (DR 80+) = dużo wartości" },
                      { feature: "Tematyczność domeny", value: "Wysoka", example: "Link z branżowego bloga SEO na stronę agencji SEO" },
                      { feature: "Pozycja linku na stronie", value: "Średnia", example: "Link w treści artykułu > link w stopce" },
                      { feature: "Anchor text", value: "Średnia", example: "Kotwica opisowa > 'kliknij tutaj'" },
                      { feature: "Atrybut dofollow/nofollow", value: "Niska-średnia", example: "Dofollow przekazuje 'link juice', nofollow mniej" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-800">{row.feature}</td>
                        <td className="p-3 border border-slate-200 text-blue-600 font-medium">{row.value}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
                <XCircle className="w-5 h-5 text-red-500 mb-2" />
                <p className="text-red-800 font-semibold mb-2">Czego unikać w link buildingu</p>
                <p className="text-red-700 text-sm">
                  Kupowanie linków, farmy linków i wymiana na masową skalę naruszają wytyczne Google.
                  Kara ręczna lub algorytmiczna może oznaczać utratę 50-90% organicznego ruchu.
                  Zawsze stawiaj na naturalne, wartościowe linki.
                </p>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strategii link buildingu?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Budujemy profile linkowe zgodnie z wytycznymi Google — content marketing, digital PR, outreach.
                </p>
                <Link to="/uslugi/pozycjonowanie" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Pozycjonowanie i link building <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Link building co to jest</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-slate-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
        />
      </Layout>
    </>
  );
}
