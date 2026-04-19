import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Globe, Search, CheckCircle2, AlertCircle } from "lucide-react";
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

export default function BlogHreflangCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Hreflang — co to jest i jak wdrożyć dla wielojęzycznych stron?" },
  ];

  const hreflangExamples = [
    {
      lang: "pl",
      example: '<link rel="alternate" hreflang="pl" href="https://example.com/pl/produkt" />',
      desc: "Polska wersja strony — język polski bez specyfikacji kraju.",
    },
    {
      lang: "pl-PL",
      example: '<link rel="alternate" hreflang="pl-PL" href="https://example.com/pl-pl/produkt" />',
      desc: "Polska wersja dla użytkowników w Polsce — język + kraj.",
    },
    {
      lang: "en-GB",
      example: '<link rel="alternate" hreflang="en-GB" href="https://example.com/en-gb/product" />',
      desc: "Angielska wersja dla Wielkiej Brytanii — różna od US English.",
    },
    {
      lang: "x-default",
      example: '<link rel="alternate" hreflang="x-default" href="https://example.com/product" />',
      desc: "Domyślna wersja dla użytkowników spoza zdefiniowanych regionów lub jako fallback.",
    },
  ];

  const commonErrors = [
    { error: "Brak wzajemności (reciprocal links)", severity: "Krytyczny", desc: "Jeśli strona PL wskazuje na EN, strona EN MUSI wskazywać z powrotem na PL. Bez wzajemności — hreflang jest ignorowany." },
    { error: "Błędne kody języków/krajów", severity: "Wysoki", desc: "Używaj kodów ISO 639-1 (pl, en, de) i ISO 3166-1 Alpha-2 (PL, GB, DE). Błędne kody (np. 'polish' zamiast 'pl') — ignorowane przez Google." },
    { error: "Brak x-default", severity: "Średni", desc: "x-default informuje Google którą wersję wyświetlić użytkownikom spoza zdefiniowanych regionów. Bez niego — Google sam wybiera i może wybrać źle." },
    { error: "Hreflang na stronach noindex", severity: "Średni", desc: "Strony z noindex nie powinny być w hreflang — Google ignoruje nieindeksowane strony w implementacji." },
    { error: "Różne URL w sitemap i hreflang", severity: "Wysoki", desc: "Wszystkie URL w hreflang powinny być też w XML Sitemap. Rozbieżności dezorientują GoogleBot." },
    { error: "HTTP vs HTTPS mieszanie", severity: "Wysoki", desc: "Używaj konsekwentnie HTTPS we wszystkich hreflang URL. Mieszanie protokołów powoduje duplikaty." },
  ];

  const faqItems = [
    {
      question: "Co to jest hreflang?",
      answer: "Hreflang to atrybut HTML używany do informowania Google o językowych i regionalnych wersjach strony internetowej. Wdrażasz go jako tagi <link rel='alternate' hreflang='kod-języka' href='URL' /> w sekcji <head> każdej strony. Google używa hreflang do wyświetlania właściwej wersji strony użytkownikom w różnych krajach lub mówiącym różnymi językami. Przykład: użytkownik w Polsce wpisuje 'buty biegowe' — Google dzięki hreflang wyświetla polskojęzyczną wersję strony zamiast angielskiej, mimo że obie istnieją w tym samym domenie. Hreflang nie wpływa na rankingi bezpośrednio, ale zapobiega problemom z duplikowaną treścią w wielojęzycznych stronach.",
    },
    {
      question: "Kiedy stosować hreflang?",
      answer: "Hreflang jest potrzebny gdy: Masz wielojęzyczną stronę — ta sama treść w różnych językach (pl, en, de, fr). Masz wersje dla różnych krajów — ta sama treść po angielsku dla USA, UK i Australii (en-US, en-GB, en-AU). Masz treść częściowo przetłumaczoną — np. główna nawigacja po polsku, ale część artykułów po angielsku. Kiedy NIE potrzebujesz hreflang: strona jednojezykowa bez wersji regionalnych, tłumaczenia na tej samej domenie z wyraźną strukturą URL (Google zwykle rozumie to bez hreflang). Bing używa własnego podejścia (content-language meta tag) — hreflang nie jest bezpośrednio obsługiwany przez Bing.",
    },
    {
      question: "Jak wdrożyć hreflang — HTML, sitemap czy HTTP header?",
      answer: "Trzy metody wdrożenia hreflang: 1) Tagi HTML w <head> — najczęstsza metoda. Na każdej stronie dodajesz <link rel='alternate' hreflang='pl' href='...' /> dla wszystkich wersji językowych. Wymaga wzajemności (każda strona wskazuje na wszystkie inne + siebie). 2) XML Sitemap — dodajesz blok <xhtml:link rel='alternate' hreflang='...' href='...' /> w sitemapie. Idealne dla dużych stron (setki/tysiące URL). Nie wymaga modyfikacji każdej strony HTML. 3) HTTP header — dla stron nie-HTML (PDF, dokumenty). Dodajesz Header: Link: <URL>; rel='alternate'; hreflang='pl'. Zalecenie: dla małych stron (<1000 stron) — tagi HTML. Dla dużych stron e-commerce — XML Sitemap. Zawsze testuj implementację w Google Search Console → Raporty → Hreflang.",
    },
    {
      question: "Jak sprawdzić czy hreflang działa poprawnie?",
      answer: "Narzędzia do weryfikacji hreflang: 1) Google Search Console → Raporty → Internacjonalizacja → Hreflang — pokazuje błędy implementacji: brak wzajemności, błędne kody języków, niedostępne URL. 2) Screaming Frog SEO Spider → Internationalisation — crawluje hreflang i wykrywa: brakujące wzajemne linki, niepoprawne kody ISO, konflikty. 3) Hreflang Tag Testing Tool (Aleyda Solis) — darmowe narzędzie online do walidacji tagów. 4) Ahrefs Site Audit → Issues → Hreflang. Najczęstsze błędy w GSC: 'No return tag' (brak wzajemności), 'Alternate URL returns 4xx' (niedziałający URL), 'Invalid language code'. Czas do wykrycia błędów przez Google: 2-4 tygodnie po wdrożeniu.",
    },
    {
      question: "Jaka jest różnica między hreflang a geotargetingiem w Google Search Console?",
      answer: "Hreflang — sygnał na poziomie strony: informuje Google o językowej/regionalnej wersji konkretnych URL. Działa na poziomie treści i słów kluczowych. Można stosować subdomeny, podkatalogi lub oddzielne domeny. Geotargeting w Google Search Console — ustawienie na poziomie całej domeny/subdomeny: mówi Google, że cała subdomena jest skierowana do konkretnego kraju. Dostępne dla ccTLD (np. .pl jest automatycznie geotargetowane na Polskę) i subdomen/podkatalogów. Jak działają razem: użyj geotargetingu w GSC dla subdomen (pl.example.com → Polska) ORAZ hreflang dla konkretnych URL. Dla ccTLD (example.pl) — geotargeting jest automatyczny, ale hreflang nadal potrzebny dla wielojęzyczności w ramach domeny.",
    },
    {
      question: "Hreflang dla stron na podkatalogach vs subdomenach vs oddzielnych domenach?",
      answer: "Struktury URL dla wielojęzycznych stron: Podkatalogi (example.com/pl/, example.com/en/) — najłatwiejsze w zarządzaniu, jeden domain authority, łatwa implementacja hreflang. Polecane dla większości stron. Subdomeny (pl.example.com, en.example.com) — traktowane przez Google jako osobne encje, wymaga osobnego geotargetingu w GSC dla każdej subdomeny, trudniejsze w zarządzaniu linkami. Oddzielne domeny (example.pl, example.com, example.de) — najsilniejszy sygnał geotargetingu (ccTLD), najwyższy koszt i złożoność zarządzania, sens dla dużych globalnych marek. Hreflang działa tak samo we wszystkich strukturach — zawsze wymaga wzajemnych linków między wersjami. SEO verdict: dla polskich firm ekspandujących za granicę zacznij od podkatalogów — najniższy próg wejścia, jeden domain authority.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Hreflang — co to jest i jak wdrożyć dla wielojęzycznych stron?"
        description="Hreflang co to jest — wyjaśniamy czym jest atrybut hreflang, jak wdrożyć dla wielojęzycznych stron, typowe błędy i jak sprawdzić implementację w Google…"
        canonical="https://fotz.pl/blog/hreflang-co-to"

        keywords="Hreflang co to jest, Hreflang definicja, czym jest Hreflang, Hreflang przykłady, jak działa Hreflang, Hreflang znaczenie, Hreflang przewodnik"
      />
      <ArticleSchema
        title="Hreflang — co to jest i jak wdrożyć dla wielojęzycznych stron?"
        description="Czym jest hreflang, kiedy stosować, trzy metody wdrożenia (HTML, sitemap, HTTP header), typowe błędy i jak weryfikować implementację."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/hreflang-co-to"
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
                <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> SEO techniczne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Hreflang — co to jest i jak wdrożyć dla wielojęzycznych stron?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Hreflang informuje Google którą wersję językową wyświetlić użytkownikowi.
                Błędna implementacja = kanibalizacja ruchu między wersjami językowymi.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Przykłady tagów hreflang</h2>
              <div className="space-y-3 mb-6">
                {hreflangExamples.map((h, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm">hreflang="{h.lang}"</span>
                    </div>
                    <code className="block text-xs text-blue-700 bg-blue-50 rounded p-2 mb-2 break-all">{h.example}</code>
                    <p className="text-slate-600 text-xs">{h.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Najczęstsze błędy hreflang</h2>
              <div className="space-y-3 mb-6">
                {commonErrors.map((e, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <AlertCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${e.severity === "Krytyczny" ? "text-red-600" : e.severity === "Wysoki" ? "text-orange-600" : "text-yellow-600"}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="font-bold text-slate-900 text-sm">{e.error}</p>
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${e.severity === "Krytyczny" ? "bg-red-100 text-red-700" : e.severity === "Wysoki" ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700"}`}>{e.severity}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Globe className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Planujesz ekspansję na rynki zagraniczne?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Audyt SEO i wdrożenie hreflang — poprawna implementacja dla wielojęzycznych stron i e-commerce.
                </p>
                <Link to="/uslugi/audyt-seo" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Audyt SEO techniczny — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Hreflang co to jest</h2>
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
          heading="Wdrożymy hreflang i zoptymalizujemy wielojęzyczne SEO"
          subheading="Techniczna implementacja hreflang dla stron polskich i zagranicznych — bez błędów wzajemności i kodów językowych."
        />
      </Layout>
    </>
  );
}
