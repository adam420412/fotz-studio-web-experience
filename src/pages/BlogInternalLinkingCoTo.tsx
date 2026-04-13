import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Link as LinkIcon, Search, CheckCircle2, TrendingUp } from "lucide-react";
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

export default function BlogInternalLinkingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Internal Linking — co to jest i jak wpływa na SEO?" },
  ];

  const bestPractices = [
    { title: "Używaj anchor text z słowem kluczowym", desc: "Zamiast 'kliknij tutaj' pisz opisowe anchory jak 'pozycjonowanie stron internetowych' — pomaga Google zrozumieć temat docelowej strony." },
    { title: "Linkuj ze stron o wysokim autorytecie", desc: "Strona główna i popularne artykuły mają najwięcej 'link juice'. Linki z nich przekazują więcej wartości podstronom." },
    { title: "Buduj hierarchię treści (silosy)", desc: "Pillar page (główna strona tematu) → cluster pages (podtematy). Np. /seo → /seo/link-building, /seo/technical-seo, /seo/keyword-research." },
    { title: "Nie linkuj do stron noindex", desc: "Linki wewnętrzne do stron z noindex są marnotrawstwem crawl budget. Sprawdź czy docelowe strony są indeksowane." },
    { title: "Napraw orphan pages", desc: "Strony bez żadnego linku wewnętrznego są 'sierotami' — Google ma problem z ich odkryciem i oceną autorytetu." },
    { title: "Optymalna liczba linków wewnętrznych", desc: "Google nie limituje liczby linków na stronie, ale zbyt wiele rozmywa wartość. Cel: 3-10 kontekstowych linków wewnętrznych na artykuł." },
  ];

  const faqItems = [
    {
      question: "Co to jest internal linking (linkowanie wewnętrzne)?",
      answer: "Internal linking (linkowanie wewnętrzne) to linki prowadzące z jednej podstrony do innej podstrony w obrębie tej samej domeny. Np. artykuł o SEO linkuje do artykułu o keyword research na tej samej stronie. Internal linking pełni dwie kluczowe role: 1) SEO — przekazuje 'link juice' (autorytet), pomaga Google crawlować stronę i rozumieć hierarchię treści. 2) UX — pomaga użytkownikom nawigować i odkrywać powiązane treści, redukuje bounce rate. Dobrze zaplanowana siatka linków wewnętrznych jest jednym z najważniejszych elementów SEO on-page.",
    },
    {
      question: "Jak internal linking wpływa na pozycje w Google?",
      answer: "Internal linking wpływa na SEO przez kilka mechanizmów: Przekazywanie PageRank — linki wewnętrzne rozprowadzają autorytet domeny pomiędzy podstronami. Crawlability — boty Google odkrywają nowe strony przez linki wewnętrzne. Strony bez linków wewnętrznych (orphan pages) są trudne do znalezienia. Semantyczne sygnały — anchor text linków wewnętrznych pomaga Google zrozumieć temat docelowej strony. Hierarchia tematyczna — struktura silosów (pillar + cluster pages) sygnalizuje ekspertyzę tematyczną (Topic Authority). Badania Ahrefs pokazują: strony z więcej linkami wewnętrznymi rankują lepiej dla trudnych słów kluczowych.",
    },
    {
      question: "Co to jest pillar page i content silo?",
      answer: "Pillar Page (strona filarowa) to długi, kompleksowy artykuł obejmujący cały szeroki temat — np. 'Kompletny przewodnik po SEO'. Cluster Pages (strony klastrów) to szczegółowe artykuły o podtematach linkujące do pillar page — np. 'Keyword research', 'Link building', 'Technical SEO'. Content Silo to struktura gdzie pillar page linkuje do wszystkich cluster pages i vice versa, tworząc semantyczną grupę tematyczną. Korzyści: Google widzi Twoją stronę jako autorytet w danej dziedzinie, lepsze rankowanie dla całego klastra słów kluczowych, efektywna dystrybucja PageRank.",
    },
    {
      question: "Jak audytować linki wewnętrzne?",
      answer: "Narzędzia do audytu internal linking: Screaming Frog SEO Spider — mapuje wszystkie linki wewnętrzne, znajdzie orphan pages, broken links, strony z zbyt małą lub zbyt dużą liczbą linków przychodzących. Ahrefs Site Audit — wykrywa problemy z internal linking, pokazuje 'link opportunities'. Google Search Console — Coverage report pokazuje które strony nie są crawlowane (możliwy brak linków wewnętrznych). Ahrefs → Site Explorer → Best by links (wewnętrzne) — zobaczysz hierarchię autorytetu wewnętrznego. Szukaj: orphan pages (0 linków wewnętrznych), strony kluczowe z małą liczbą linków wewnętrznych, zbyt płytkiej lub zbyt głębokiej hierarchii.",
    },
    {
      question: "Jaka jest różnica między internal linking a external linking?",
      answer: "Internal linking (linki wewnętrzne) to hiperłącza prowadzące do innej podstrony w tej samej domenie. Kontrolujesz je w 100% — możesz dodawać, usuwać, zmieniać anchor text. Przekazują autorytet wewnątrz domeny. External linking (linki zewnętrzne) dzielą się na: linki wychodzące (outbound) — Twoja strona linkuje do zewnętrznej domeny, i linki przychodzące (backlinks/inbound) — zewnętrzne strony linkują do Ciebie. Backlinki to jeden z najważniejszych czynników rankingowych Google. Dofollow przekazują PageRank, nofollow technicznie nie (choć Google może je brać pod uwagę). Internal linking jest pod Twoją pełną kontrolą i jest quick win SEO.",
    },
    {
      question: "Ile linków wewnętrznych na stronie jest optymalne?",
      answer: "Google nie ma oficjalnego limitu linków na stronie, ale Matt Cutts wspominał kiedyś o 100 jako rozsądnym pułapie. W praktyce: dla artykułów blogowych: 5-15 linków wewnętrznych kontekstowych, dla stron usługowych: 3-8 linków do powiązanych podstron, dla pillar pages: 15-30 linków do cluster pages. Ważna jest jakość nie ilość — linki w treści (kontekstowe) są cenniejsze niż nawigacyjne czy footer. Unikaj: upychania dziesiątek linków dla SEO bez wartości dla użytkownika — Google może to traktować jako spam. Sprawdzaj przez Screaming Frog czy rozkład linków wewnętrznych odzwierciedla priorytety biznesowe.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Internal Linking — co to jest i jak wpływa na SEO? | fotz.pl"
        description="Internal linking co to jest — wyjaśniamy czym jest linkowanie wewnętrzne, jak wpływa na SEO, pillar pages, silosy treści i jak audytować linki wewnętrzne."
        canonical="https://fotz.pl/blog/internal-linking-co-to"

        keywords="Internal Linking co to jest, Internal Linking definicja, czym jest Internal Linking, Internal Linking w marketingu, Internal Linking przykłady, jak działa Internal Linking, Internal Linking strategia"
      />
      <ArticleSchema
        title="Internal Linking — co to jest i jak wpływa na SEO?"
        description="Czym jest internal linking (linkowanie wewnętrzne), jak wpływa na SEO, pillar page i content silo, najlepsze praktyki i audyt linków wewnętrznych."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/internal-linking-co-to"
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
                <span className="flex items-center gap-1"><LinkIcon className="w-4 h-4" /> SEO on-page</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Internal Linking — co to jest i jak linkowanie wewnętrzne wpływa na SEO?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Internal linking to linki wewnątrz Twojej strony, które przekazują autorytet i pomagają Google
                crawlować treści. Jak budować skuteczną strukturę linków wewnętrznych?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Najlepsze praktyki internal linking</h2>
              <div className="space-y-3 mb-6">
                {bestPractices.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{p.title}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Struktura silosów treści (Topic Clusters)</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-xs">
                <p className="text-green-400 mb-3">// Przykład struktury topic cluster dla "SEO"</p>
                <div className="space-y-2 text-slate-300">
                  <p className="text-yellow-400 font-bold">📄 Pillar Page: /seo (Kompletny przewodnik SEO)</p>
                  <div className="pl-4 space-y-1 border-l border-slate-700">
                    <p>↳ <span className="text-blue-400">/seo/keyword-research</span> (Cluster: Badanie słów kluczowych)</p>
                    <p>↳ <span className="text-blue-400">/seo/link-building</span> (Cluster: Budowanie linków)</p>
                    <p>↳ <span className="text-blue-400">/seo/technical-seo</span> (Cluster: SEO techniczne)</p>
                    <p>↳ <span className="text-blue-400">/seo/content-seo</span> (Cluster: Content SEO)</p>
                    <p>↳ <span className="text-blue-400">/seo/lokalne-seo</span> (Cluster: Lokalne SEO)</p>
                  </div>
                  <div className="border-t border-slate-700 pt-2 mt-2 text-slate-400">
                    <p>Każda cluster page linkuje do pillar page ↑</p>
                    <p>Pillar page linkuje do wszystkich cluster pages ↓</p>
                    <p>Cluster pages linkują między sobą ↔</p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Search className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zbudować skuteczną strukturę internal linking?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Audyt SEO i optymalizacja linków wewnętrznych — budujemy silosy treści i zwiększamy autorytet stron docelowych.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Internal Linking co to jest</h2>
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
          heading="Zoptymalizujemy linki wewnętrzne i strukturę SEO Twojej strony"
          subheading="Audyt internal linking, silosy treści i pillar pages — budujemy autorytet tematyczny."
        />
      </Layout>
    </>
  );
}
