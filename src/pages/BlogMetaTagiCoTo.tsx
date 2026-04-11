import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Code, Search, FileText, Tag } from "lucide-react";
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

export default function BlogMetaTagiCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Meta tagi — co to jest i jak wpływają na SEO?" },
  ];

  const metaTags = [
    { tag: "meta title (title tag)", desc: "Tytuł strony widoczny w wynikach wyszukiwania. Najważniejszy tag SEO — zawiera główne słowo kluczowe. Optymalnie 50-60 znaków.", impact: "Krytyczny" },
    { tag: "meta description", desc: "Opis strony pod tytułem w SERP. Nie wpływa bezpośrednio na ranking, ale ma duży wpływ na CTR. Optymalnie 140-160 znaków.", impact: "Wysoki (CTR)" },
    { tag: "meta robots", desc: "Instrukcje dla robotów wyszukiwarek — index/noindex, follow/nofollow, noarchive. Kontroluje indeksowanie i crawlowanie strony.", impact: "Krytyczny" },
    { tag: "canonical tag", desc: "Wskazuje kanoniczną (preferowaną) wersję strony. Rozwiązuje problem duplikacji treści np. /produkt i /produkt?kolor=czarny.", impact: "Wysoki (dedupl.)" },
    { tag: "Open Graph (og:title, og:image)", desc: "Meta tagi dla mediów społecznościowych (Facebook, LinkedIn). Kontrolują jak wygląda podgląd linku w social media.", impact: "Średni (social)" },
    { tag: "Twitter Card", desc: "Odpowiednik Open Graph dla Twittera/X. Definiuje tytuł, opis i obrazek przy udostępnieniu linku na platformie.", impact: "Średni (Twitter)" },
  ];

  const faqItems = [
    {
      question: "Co to są meta tagi?",
      answer: "Meta tagi to elementy HTML umieszczone w sekcji <head> strony internetowej, które dostarczają informacji o stronie wyszukiwarkom i przeglądarkom. Meta tagi nie są widoczne bezpośrednio na stronie, ale mają kluczowe znaczenie dla SEO i wyglądu w wynikach wyszukiwania. Najważniejsze meta tagi: title tag (tytuł strony), meta description (opis), meta robots (instrukcje dla botów), canonical (wersja kanoniczna), Open Graph (społecznościowe). Są częścią technicznego SEO i jednym z pierwszych kroków optymalizacji strony.",
    },
    {
      question: "Jak napisać dobry meta title?",
      answer: "Zasady dobrego meta title: długość 50-60 znaków (Google obcina dłuższe), musi zawierać główne słowo kluczowe (najlepiej na początku), powinien być unikalny dla każdej podstrony, opisywać zawartość strony i zachęcać do kliknięcia. Wzorzec: Słowo kluczowe — Opis | Nazwa marki. Przykład: 'Meta tagi SEO — przewodnik | fotz.pl'. Unikaj: upychania słów kluczowych (keyword stuffing), duplikowania titleów na wielu podstronach, tytułów poniżej 30 znaków (zbyt krótkie). Sprawdź w SERP Preview Tool jak wygląda przed wdrożeniem.",
    },
    {
      question: "Czy meta description wpływa na pozycje w Google?",
      answer: "Meta description NIE wpływa bezpośrednio na ranking w Google — nie jest czynnikiem pozycjonującym. Ale ma duży pośredni wpływ poprzez CTR (Click-Through Rate). Wyższy CTR → Google może nagrodzić wyższą pozycją. Dobry opis zachęca użytkowników do kliknięcia Twojego wyniku zamiast konkurencji. Zasady: 140-160 znaków, zawiera słowo kluczowe (pogrubione w SERP), CTA (działanie wezywające np. 'Sprawdź', 'Przeczytaj'), unikalne na każdej podstronie. Google często samodzielnie generuje description z treści strony — jeśli Twój opis nie jest wystarczająco dobry.",
    },
    {
      question: "Co to jest tag canonical?",
      answer: "Tag canonical (rel='canonical') informuje Google, która wersja strony jest 'oryginalna' gdy ta sama lub podobna treść dostępna jest pod wieloma adresami URL. Przykłady kiedy potrzebny: sklep z filtrami (produkt.html, produkt.html?kolor=czarny&rozmiar=M), strony z parametrami sesji, paginacja, wersje www i bez www, HTTP i HTTPS. Sposób użycia: <link rel='canonical' href='https://example.com/strona-kanoniczna' />. Canonical to wskazówka dla Google, nie nakaz — Google może ją zignorować. Rozwiązuje problem duplikacji treści które mogą rozmywać 'link juice'.",
    },
    {
      question: "Co to są tagi Open Graph?",
      answer: "Open Graph to protokół stworzony przez Facebooka, który kontroluje jak strona prezentuje się jako podgląd linku w mediach społecznościowych. Kluczowe OG tagi: og:title (tytuł w social), og:description (opis), og:image (obrazek — min. 1200x630px), og:type (article, website, product), og:url (kanoniczny URL). Twitter Card to analogiczny system dla Twittera/X: twitter:card, twitter:title, twitter:description, twitter:image. Bez OG tagów social media generują podgląd automatycznie — często z błędem. Dobrze skonfigurowane OG tagi zwiększają CTR z social nawet o 40%.",
    },
    {
      question: "Jak sprawdzić meta tagi strony?",
      answer: "Narzędzia do sprawdzania meta tagów: 1) View Source (CTRL+U w Chrome) — szybkie sprawdzenie kodu HTML. 2) Chrome DevTools (F12) → Elements → sekcja head. 3) Screaming Frog SEO Spider — crawl całej witryny, eksport wszystkich tytułów i opisów do CSV. 4) Ahrefs / Semrush Site Audit — automatyczne wykrycie problemów (brakujące, zduplikowane, zbyt długie). 5) Google Search Console — Coverage raporty pokazują problemy z indeksowaniem. 6) Meta Tags Analyzer (darmowe narzędzia online) — podgląd SERP snippet. Kluczowe metryki: czy wszystkie strony mają unikalne title i description, czy żaden nie jest za długi/krótki.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Meta tagi — co to jest i jak wpływają na SEO? | fotz.pl"
        description="Meta tagi co to jest — wyjaśniamy czym są meta title, meta description, canonical, Open Graph. Jak pisać meta tagi które poprawiają SEO i CTR."
        canonical="https://fotz.pl/blog/meta-tagi-co-to"
      />
      <ArticleSchema
        title="Meta tagi — co to jest i jak wpływają na SEO?"
        description="Czym są meta tagi, rodzaje (title, description, robots, canonical, Open Graph), jak pisać dobre meta tagi SEO i jak je sprawdzać."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/meta-tagi-co-to"
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
                <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> SEO techniczne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Meta tagi — co to jest i jak wpływają na SEO?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Meta tagi to elementy HTML w sekcji head strony, które informują wyszukiwarki i social media
                o zawartości strony. Poznaj rodzaje, znaczenie i jak je pisać.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Najważniejsze rodzaje meta tagów</h2>
              <div className="space-y-3 mb-6">
                {metaTags.map((t, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="font-bold text-slate-900 text-sm font-mono">{t.tag}</span>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${t.impact === "Krytyczny" ? "bg-red-100 text-red-700" : t.impact === "Wysoki (CTR)" || t.impact === "Wysoki (dedupl.)" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>{t.impact}</span>
                    </div>
                    <p className="text-slate-600 text-xs mt-1">{t.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Przykład dobrze skonfigurowanych meta tagów</h2>
              <div className="bg-slate-900 rounded-lg p-4 mb-6 font-mono text-xs overflow-x-auto">
                <p className="text-slate-400 mb-2">{"<!-- Podstawowe meta tagi SEO -->"}</p>
                <div className="space-y-1 text-slate-300">
                  <p><span className="text-blue-400">{"<title>"}</span><span className="text-green-400">Meta tagi SEO — poradnik | fotz.pl</span><span className="text-blue-400">{"</title>"}</span></p>
                  <p><span className="text-blue-400">{"<meta"}</span> <span className="text-yellow-400">name</span>=<span className="text-green-400">"description"</span></p>
                  <p className="pl-6"><span className="text-yellow-400">content</span>=<span className="text-green-400">"Czym są meta tagi i jak wpływają na SEO. Poznaj title, description, canonical i Open Graph."</span> <span className="text-blue-400">/{">"}</span></p>
                  <p><span className="text-blue-400">{"<meta"}</span> <span className="text-yellow-400">name</span>=<span className="text-green-400">"robots"</span> <span className="text-yellow-400">content</span>=<span className="text-green-400">"index, follow"</span> <span className="text-blue-400">/{">"}</span></p>
                  <p><span className="text-blue-400">{"<link"}</span> <span className="text-yellow-400">rel</span>=<span className="text-green-400">"canonical"</span> <span className="text-yellow-400">href</span>=<span className="text-green-400">"https://fotz.pl/blog/meta-tagi-co-to"</span> <span className="text-blue-400">/{">"}</span></p>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p className="text-slate-400">{"<!-- Open Graph -->"}</p>
                    <p><span className="text-blue-400">{"<meta"}</span> <span className="text-yellow-400">property</span>=<span className="text-green-400">"og:title"</span> <span className="text-yellow-400">content</span>=<span className="text-green-400">"Meta tagi SEO — poradnik"</span> <span className="text-blue-400">/{">"}</span></p>
                    <p><span className="text-blue-400">{"<meta"}</span> <span className="text-yellow-400">property</span>=<span className="text-green-400">"og:image"</span> <span className="text-yellow-400">content</span>=<span className="text-green-400">"https://fotz.pl/og-meta-tagi.jpg"</span> <span className="text-blue-400">/{">"}</span></p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Search className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz poprawić meta tagi swojej strony?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Audyt SEO i optymalizacja meta tagów — poprawiamy CTR i widoczność w Google.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Meta tagi co to jest</h2>
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
          heading="Zoptymalizujemy meta tagi i SEO Twojej strony"
          subheading="Title, description, canonical, Open Graph — pełna optymalizacja techniczna SEO."
        />
      </Layout>
    </>
  );
}
