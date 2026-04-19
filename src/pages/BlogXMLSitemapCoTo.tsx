import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, FileCode, Search, CheckCircle2, Globe } from "lucide-react";
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

export default function BlogXMLSitemapCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "XML Sitemap — co to jest i jak stworzyć mapę strony?" },
  ];

  const sitemapBestPractices = [
    { practice: "Maksymalnie 50 000 URL w jednym pliku", desc: "Limit Google/Bing — większe strony powinny używać sitemap index file wskazującego na wiele plików sitemap." },
    { practice: "Tylko kanoniczne, indeksowalne URL", desc: "Nie dodawaj stron z noindex, nofollow, 404, 301/302, parametry URL (chyba że kanonicznie). Tylko strony które chcesz indeksować." },
    { practice: "Regularnie aktualizuj lastmod", desc: "Znacznik <lastmod> informuje Google kiedy strona była aktualizowana — pomaga priorytetyzować crawlowanie świeżych treści." },
    { practice: "Zgłoś sitemap w Google Search Console", desc: "Raz zgłoszony sitemap jest regularnie sprawdzany przez Google. Wymagane po pierwszym dodaniu i po zmianie lokalizacji pliku." },
    { practice: "Oddzielne sitemaps dla typów treści", desc: "Rozdziel sitemap na: sitemap-posts.xml, sitemap-pages.xml, sitemap-images.xml, sitemap-videos.xml — łatwiejszy monitoring." },
    { practice: "Wpisz sitemap w robots.txt", desc: "Dodaj linię: Sitemap: https://example.com/sitemap.xml — boty odkryją sitemap automatycznie bez zgłaszania w GSC." },
  ];

  const faqItems = [
    {
      question: "Co to jest XML Sitemap?",
      answer: "XML Sitemap (mapa strony) to plik w formacie XML zawierający listę wszystkich URL na Twojej stronie internetowej, który pomaga wyszukiwarkom (Google, Bing) odkryć i zindeksować Twoje treści. Sitemap informuje Google: jakie strony istnieją na Twojej witrynie, kiedy były ostatnio aktualizowane (lastmod), jak często się zmieniają (changefreq), jaki mają priorytet (priority). XML Sitemap nie gwarantuje indeksowania — to 'zaproszenie' dla Google, nie nakaz. Google i tak crawluje strony przez linki wewnętrzne i zewnętrzne, ale sitemap przyspiesza odkrycie nowych i zaktualizowanych treści.",
    },
    {
      question: "Jak wygląda plik XML Sitemap?",
      answer: "Przykładowa struktura XML Sitemap: <?xml version='1.0' encoding='UTF-8'?><urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'><url><loc>https://example.com/blog/seo-poradnik</loc><lastmod>2025-04-10</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>...</urlset>. Wymagany element: <loc> (URL strony). Opcjonalne: <lastmod> (data modyfikacji w formacie YYYY-MM-DD), <changefreq> (always, hourly, daily, weekly, monthly, yearly, never), <priority> (0.0-1.0, domyślnie 0.5). Plik musi być dostępny pod adresem jak https://example.com/sitemap.xml i zakodowany w UTF-8.",
    },
    {
      question: "Czy każda strona potrzebuje XML Sitemap?",
      answer: "XML Sitemap jest szczególnie ważny dla: nowych stron bez wielu backlinków (Google nie odnajdzie stron przez linki), dużych witryn (100+ stron) gdzie Google może pomijać niektóre URL, stron z dużą ilością dynamicznych treści (sklepy, portale), stron gdzie treść nie jest dobrze połączona linkami wewnętrznymi. Mniej krytyczny dla: małych stron (do 20 URL) z dobrą strukturą linków wewnętrznych — Google je odnajdzie. Jednak nawet małe strony powinny mieć sitemap — to dobra praktyka techniczna SEO. WordPress generuje sitemap automatycznie przez Yoast SEO, Rank Math lub natywną funkcję (od WP 5.5).",
    },
    {
      question: "Jak wygenerować sitemap dla różnych platform?",
      answer: "Generowanie sitemap według platformy: WordPress: Yoast SEO, Rank Math lub All in One SEO automatycznie generują i aktualizują sitemap. Adres zazwyczaj /sitemap.xml lub /sitemap_index.xml. Shopify: automatycznie generuje sitemap.xml — dostępny pod /sitemap.xml. Wix / Squarespace: automatyczny sitemap generowany przez platformę. Next.js / React: biblioteki next-sitemap lub sitemap.js, lub generowanie przy buildzie. Strony statyczne (Jekyll, Gatsby, Hugo): pluginy do automatycznego generowania. Custom CMS: użyj biblioteki XML lub serwisu online (XML-sitemaps.com, Screaming Frog). Po wygenerowaniu: zgłoś sitemap w Google Search Console (Indeksowanie → Mapy witryn).",
    },
    {
      question: "Jaka jest różnica między XML Sitemap a HTML Sitemap?",
      answer: "XML Sitemap: plik techniczny dla wyszukiwarek, nie widoczny bezpośrednio dla użytkowników. Format XML, URL pod /sitemap.xml. Cel: pomóc Google/Bing indeksować wszystkie strony. HTML Sitemap: strona widoczna dla użytkowników z linkami do wszystkich sekcji i podstron. Format HTML, URL np. /mapa-strony. Cel: ułatwić nawigację użytkownikom i pomóc linkom wewnętrznym. Który jest ważniejszy dla SEO? XML Sitemap jest ważniejszy dla indeksowania. HTML Sitemap pomaga w internal linking i UX ale jego wpływ na SEO jest mniejszy. W praktyce: duże witryny (sklepy, portale) powinny mieć oba. Małe strony — XML Sitemap jest wystarczający.",
    },
    {
      question: "Jak sprawdzić czy sitemap działa poprawnie?",
      answer: "Weryfikacja sitemap: 1) Google Search Console → Indeksowanie → Mapy witryn — sprawdź status (Sukces, Błąd, Ostrzeżenie), liczbę odkrytych URL vs zindeksowanych. Duża różnica sugeruje problemy. 2) Otwórz sitemap.xml w przeglądarce — sprawdź czy plik jest dostępny i prawidłowo sformatowany XML. 3) Google Sitemap Validator (online) — weryfikuje poprawność formatu. 4) Screaming Frog SEO Spider → Crawl Sitemap — sprawdza wszystkie URL w sitemapie pod kątem błędów (404, noindex, redirect). 5) Ahrefs Site Audit → Sitemap — wykrywa: nieindeksowalne URL w sitemapie, brakujące strony w sitemapie, orphan pages. Najczęstsze błędy: URL z noindex w sitemapie, stare URL po migracji, URL poza główną domeną.",
    },
  ];

  return (
    <>
      <SEOHead
        title="XML Sitemap — co to jest i jak stworzyć mapę strony? | fotz.pl"
        description="XML Sitemap co to jest — wyjaśniamy czym jest mapa strony XML, jak ją stworzyć, zgłosić w Google Search Console i jak sitemap wpływa na indeksowanie."
        canonical="https://fotz.pl/blog/xml-sitemap-co-to"

        keywords="XML Sitemap co to jest, XML Sitemap definicja, czym jest XML Sitemap, XML Sitemap przykłady, jak działa XML Sitemap, XML Sitemap znaczenie, XML Sitemap przewodnik"
      />
      <ArticleSchema
        title="XML Sitemap — co to jest i jak stworzyć mapę strony?"
        description="Czym jest XML Sitemap, jak go stworzyć dla WordPress/Shopify, jak zgłosić w GSC i jak weryfikować poprawność mapy strony."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/xml-sitemap-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><FileCode className="w-4 h-4" /> SEO techniczne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                XML Sitemap — co to jest i jak stworzyć mapę strony dla SEO?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                XML Sitemap to plik który mówi Google jakie strony istnieją na Twojej witrynie.
                Fundament technicznego SEO — jak go stworzyć i poprawnie skonfigurować?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Najlepsze praktyki XML Sitemap</h2>
              <div className="space-y-3 mb-6">
                {sitemapBestPractices.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{p.practice}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak zgłosić sitemap w Google Search Console</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-xs">
                <p className="text-green-400 mb-3">// Kroki zgłoszenia XML Sitemap</p>
                <div className="space-y-2 text-slate-300">
                  <p><span className="text-yellow-400">1.</span> Zaloguj się do <span className="text-blue-400">search.google.com/search-console</span></p>
                  <p><span className="text-yellow-400">2.</span> Wybierz właściwość (domenę)</p>
                  <p><span className="text-yellow-400">3.</span> Menu: <span className="text-white">Indeksowanie → Mapy witryn</span></p>
                  <p><span className="text-yellow-400">4.</span> Wpisz URL sitemapa: <span className="text-green-400">sitemap.xml</span></p>
                  <p><span className="text-yellow-400">5.</span> Kliknij <span className="text-white">Prześlij</span></p>
                  <div className="border-t border-slate-700 pt-2 mt-2 text-slate-400">
                    <p className="mb-1">// Sprawdź też w robots.txt:</p>
                    <p className="text-white">User-agent: *</p>
                    <p className="text-white">Disallow:</p>
                    <p className="text-green-400">Sitemap: https://example.com/sitemap.xml</p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Search className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz poprawić techniczne SEO strony?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Audyt SEO — sprawdzamy sitemap, robots.txt, indeksowanie i wszystkie techniczne aspekty SEO.
                </p>
                <Link to="/uslugi/audyt-seo" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Audyt SEO — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — XML Sitemap co to jest</h2>
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
          heading="Zadbamy o techniczne SEO Twojej strony"
          subheading="Sitemap, robots.txt, indeksowanie i Core Web Vitals — kompleksowy audyt i optymalizacja techniczna."
        />
      </Layout>
    </>
  );
}
