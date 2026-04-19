import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Bot, Search, CheckCircle2, AlertCircle } from "lucide-react";
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

export default function BlogRobotsTxtCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Robots.txt — co to jest i jak poprawnie skonfigurować?" },
  ];

  const robotsDirectives = [
    {
      directive: "User-agent: *",
      example: "User-agent: *",
      desc: "Dotyczy wszystkich botów. Możesz też wskazać konkretny bot: 'User-agent: Googlebot' dla reguł specyficznych dla Google.",
    },
    {
      directive: "Disallow: /ścieżka/",
      example: "Disallow: /admin/",
      desc: "Blokuje crawlowanie wskazanej ścieżki. Disallow: / blokuje całą stronę. Disallow: (pusty) = zezwala na wszystko.",
    },
    {
      directive: "Allow: /ścieżka/",
      example: "Allow: /admin/publiczne/",
      desc: "Zezwala na crawlowanie konkretnej ścieżki, mimo że nadrzędna ścieżka jest zablokowana przez Disallow.",
    },
    {
      directive: "Sitemap:",
      example: "Sitemap: https://example.com/sitemap.xml",
      desc: "Wskazuje lokalizację XML sitemap. Ułatwia GoogleBotowi odkrycie i crawlowanie ważnych stron.",
    },
    {
      directive: "Crawl-delay:",
      example: "Crawl-delay: 10",
      desc: "Przerwa (w sekundach) między requestami bota. Google ignoruje tę dyrektywę — zarządzaj szybkością crawlowania w Google Search Console.",
    },
  ];

  const blockingExamples = [
    { path: "/admin/", reason: "Panel administracyjny — nie powinien być indeksowany ani crawlowany.", shouldBlock: true },
    { path: "/staging/", reason: "Środowisko testowe — duplikat treści produkcyjnej.", shouldBlock: true },
    { path: "/wp-login.php", reason: "Strona logowania WordPress — bez wartości SEO.", shouldBlock: true },
    { path: "/?s=", reason: "Wyniki wyszukiwania wewnętrznego — thin content, duplikaty.", shouldBlock: true },
    { path: "/blog/", reason: "Kategoria bloga z wartościową treścią — powinna być crawlowana.", shouldBlock: false },
    { path: "/produkt/", reason: "Strony produktów e-commerce — kluczowe dla SEO.", shouldBlock: false },
  ];

  const faqItems = [
    {
      question: "Co to jest plik robots.txt?",
      answer: "Robots.txt to plik tekstowy umieszczony w katalogu głównym domeny (example.com/robots.txt) który informuje boty wyszukiwarek (Googlebot, Bingbot, itp.) które strony mogą, a których nie mogą crawlować. Robots.txt używa protokołu Robots Exclusion Protocol (REP). Ważne rozróżnienie: robots.txt kontroluje CRAWLOWANIE, nie INDEKSOWANIE. Możesz zablokować crawlowanie strony przez robots.txt, ale jeśli ma ona zewnętrzne linki prowadzące — Google może ją i tak zaindeksować (choć nie pozna jej treści). Aby zapobiec indeksowaniu użyj meta tag noindex. Robots.txt jest respektowany dobrowolnie — uczciwe boty go przestrzegają, złośliwe ignorują.",
    },
    {
      question: "Jak sprawdzić plik robots.txt strony?",
      answer: "Sprawdzanie robots.txt: 1) Wpisz bezpośrednio w przeglądarkę: twojadomena.pl/robots.txt — plik jest publicznie dostępny. 2) Google Search Console → Ustawienia → robots.txt Tester — testuje konkretny URL pod kątem reguł robots.txt. 3) Screaming Frog → File → Check Robots.txt — analizuje całą witrynę. 4) Ahrefs Site Audit → wykrywa błędy związane z robots.txt. Typowe problemy: zablokowane ważne zasoby (CSS, JS — Google nie może renderować strony), zablokowane strony z ważną treścią przez błąd w ścieżce (np. /blog zamiast /blog/). Sprawdź: Google Search Console → Indeksowanie → Strony → filtry 'Excluded by robots.txt' — jeśli ważne strony są tu zablokowane, masz problem.",
    },
    {
      question: "Jakie strony blokować w robots.txt?",
      answer: "Co zazwyczaj warto blokować w robots.txt: Panele administracyjne: /admin/, /wp-admin/, /dashboard/. Środowiska testowe/staging: /staging/, /test/, /dev/. Duplikaty techniczne: /?s= (wyniki wyszukiwania wewnętrznego), /feed/ (RSS feeds), /?page= z parametrami sortowania/filtrowania. Pliki systemowe: /wp-includes/, /wp-content/plugins/ (WordPress). Czego NIE blokować w robots.txt: pliki CSS i JavaScript — Google renderuje strony i potrzebuje tych zasobów. Ważne strony z noindex — blokowanie w robots.txt powoduje, że Google nie widzi tagu noindex. Sitemap URL — powinny być crawlowane. Pamiętaj: blokowanie crawlowania nie usuwa strony z indeksu. Użyj noindex na stronie lub usuń ją z serwera.",
    },
    {
      question: "Robots.txt a tag noindex — jaka jest różnica?",
      answer: "Robots.txt — kontroluje crawlowanie (czy bot może odwiedzić stronę): Bot NIE odwiedza strony. Google może zaindeksować URL jeśli ma do niego linki (bez znajomości treści). Nie widzi tagu noindex jeśli strona jest zablokowana w robots.txt — mogą być niespójności. Tag noindex (meta robots lub HTTP header) — kontroluje indeksowanie (czy strona pojawi się w wynikach): Bot MOŻE odwiedzić stronę, ale nie indeksuje jej. Google widzi stronę i respektuje noindex. Właściwsze dla stron które chcesz wykluczyć z wyników ale nie z crawlowania. Kiedy używać czego: Chcesz stronę NIEWIDOCZNĄ w wynikach = tag noindex. Chcesz oszczędzić crawl budget (nie dawać botom dostępu) = robots.txt Disallow. Chcesz stronę WIDZIALNĄ = ani jedno, ani drugie.",
    },
    {
      question: "Jak napisać poprawny plik robots.txt?",
      answer: "Struktura poprawnego robots.txt: każdy blok reguł zaczyna się od 'User-agent:' i zawiera 'Disallow:' lub 'Allow:'. Przykład dla WordPressa:\nUser-agent: *\nDisallow: /wp-admin/\nDisallow: /wp-includes/\nDisallow: /?s=\nDisallow: /cart/\nDisallow: /checkout/\nAllow: /wp-admin/admin-ajax.php\nSitemap: https://twojadomena.pl/sitemap.xml\n\nZasady pisania: Jedna dyrektywa na linię. Komentarze po '#'. Ścieżki wrażliwe na wielkość liter (case sensitive). Wildcard (*) działa dla Googlebot — np. Disallow: /*.pdf$ blokuje wszystkie PDF. Testuj przez Google Search Console robots.txt Tester przed wdrożeniem.",
    },
    {
      question: "Czy robots.txt wpływa na SEO?",
      answer: "Robots.txt wpływa na SEO pośrednio przez kilka mechanizmów: Crawl Budget — poprawnie skonfigurowany robots.txt kieruje GoogleBota na ważne strony zamiast marnowania budżetu na admin, staging i thin content. To ważne dla dużych stron. Indeksowanie — blokowanie przez robots.txt ≠ deindeksowanie. Jeśli strona z zewnętrznymi linkami jest zablokowana, Google może ją zaindeksować bez znajomości treści — pojawi się z pustym snippetem. Błędy krytyczne: zablokowanie CSS/JS → Google nie może renderować strony → ocenia jako pustą. Zablokowanie sitemap → Google musi odkrywać strony przez linki. Zablokowanie ważnych podkatalogów przez błąd → strony wypadają z indeksu. Monitoring: Google Search Console → Ustawienia → Statystyki crawlowania pokaże czy GoogleBot trafnie crawluje ważne strony.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Robots.txt — co to jest i jak poprawnie skonfigurować? | fotz.pl"
        description="Robots.txt co to jest — wyjaśniamy czym jest plik robots.txt, jak go skonfigurować, co blokować, różnica vs noindex i wpływ na SEO."
        canonical="https://fotz.pl/blog/robots-txt-co-to"

        keywords="Robots.txt co to jest, Robots.txt definicja, czym jest Robots.txt, Robots.txt przykłady, jak działa Robots.txt, Robots.txt znaczenie, Robots.txt przewodnik"
      />
      <ArticleSchema
        title="Robots.txt — co to jest i jak poprawnie skonfigurować?"
        description="Czym jest robots.txt, dyrektywy (Disallow, Allow, Sitemap), co blokować, różnica vs meta noindex i wpływ na crawlowanie i SEO."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/robots-txt-co-to"
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
                <span className="flex items-center gap-1"><Bot className="w-4 h-4" /> SEO techniczne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Robots.txt — co to jest i jak poprawnie skonfigurować?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Robots.txt to instrukcja dla botów wyszukiwarek — które strony crawlować, a które ignorować.
                Błędna konfiguracja może zablokować indeksowanie całej witryny.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Dyrektywy robots.txt — co oznaczają?</h2>
              <div className="space-y-3 mb-6">
                {robotsDirectives.map((d, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1">{d.directive}</p>
                    <code className="block text-xs text-blue-700 bg-blue-50 rounded p-2 mb-2">{d.example}</code>
                    <p className="text-slate-600 text-xs">{d.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Co blokować, a co zostawić?</h2>
              <div className="space-y-2 mb-6">
                {blockingExamples.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    {b.shouldBlock ? (
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <code className="text-xs font-bold text-slate-900">{b.path}</code>
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${b.shouldBlock ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                          {b.shouldBlock ? "Blokuj" : "Zostaw"}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs">{b.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Search className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Masz problemy z indeksowaniem strony?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Audyt SEO techniczny — sprawdzamy robots.txt, sitemap i crawlowanie oraz naprawiamy błędy indeksowania.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Robots.txt co to jest</h2>
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
          heading="Skonfigurujemy robots.txt i naprawimy indeksowanie Twojej strony"
          subheading="Techniczne SEO — robots.txt, sitemap, crawl budget i pełny audyt indeksowania dla Twojej witryny."
        />
      </Layout>
    </>
  );
}
