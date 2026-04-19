import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Code, TrendingUp, CheckCircle2, Star } from "lucide-react";
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

export default function BlogSchemaMarkupCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Schema Markup — co to jest i jak wdrożyć?" },
  ];

  const schemaTypes = [
    { type: "Article / BlogPosting", desc: "Dla artykułów i postów blogowych — tytuł, autor, data, zdjęcie. Może generować rich snippet z datą i zdjęciem." },
    { type: "FAQ", desc: "Lista pytań i odpowiedzi. Generuje rozwinięte FAQ bezpośrednio w SERP — więcej miejsca na stronie wyników." },
    { type: "Product", desc: "Dla e-commerce — cena, dostępność, recenzje, ocena. Generuje rich snippet z gwiazdkami i ceną." },
    { type: "LocalBusiness", desc: "Adres, telefon, godziny otwarcia, kategoria. Kluczowy dla SEO lokalnego i wyświetlania w Knowledge Panel." },
    { type: "Organization", desc: "Dane firmy — logo, adres, social media, NIP. Buduje Knowledge Panel dla marki." },
    { type: "HowTo", desc: "Instrukcje krok po kroku — może generować rich snippet z krokami bezpośrednio w SERP." },
    { type: "BreadcrumbList", desc: "Ścieżka nawigacji (okruszki) — wyświetlana w URL strony w wynikach Google." },
    { type: "Event", desc: "Dla wydarzeń online i offline — data, miejsce, cena biletów. Rich snippet z datą i lokalizacją." },
  ];

  const faqItems = [
    {
      question: "Co to jest Schema Markup?",
      answer:
        "Schema Markup (dane strukturyzowane / structured data) to kod dodawany do strony HTML który pomaga wyszukiwarkom zrozumieć kontekst i zawartość strony. Schema.org to standardowy słownik wspólnie opracowany przez Google, Bing, Yahoo i Yandex. Schema Markup implementuje się najczęściej jako JSON-LD (JavaScript Object Notation for Linked Data) — blok kodu w <script> tagu. Efekty: Rich Snippets w SERP (gwiazdki, ceny, FAQ, daty), lepsze zrozumienie przez Google = potencjalnie wyższe pozycje. Schema Markup nie gwarantuje rich snippets, ale znacząco zwiększa ich szansę.",
    },
    {
      question: "Jak wdrożyć Schema Markup?",
      answer:
        "Wdrożenie Schema Markup (JSON-LD): 1) Zidentyfikuj typy schema odpowiednie dla Twojej strony (FAQ, Article, Product, LocalBusiness). 2) Wygeneruj kod JSON-LD — Google Structured Data Markup Helper lub Schema.org validator. 3) Dodaj kod w sekcji <head> lub <body> strony jako <script type='application/ld+json'>. 4) Przetestuj — Google Rich Results Test (search.google.com/test/rich-results). 5) Monitoruj w Google Search Console — zakładka 'Rozszerzenia' / 'Dane strukturyzowane'. WordPress: wtyczki Yoast SEO lub Schema Pro. React/Next.js: komponenty JSON-LD lub next-seo. Wdrożenie przez GTM też jest możliwe.",
    },
    {
      question: "Jakie Schema Markup generuje rich snippets?",
      answer:
        "Typy schema które generują rich snippets (Google-approved): FAQ Schema — lista Q&A poniżej wyniku. Product Schema — gwiazdki, cena, dostępność. Recipe Schema — czas przygotowania, kalorie, ocena. Event Schema — data i lokalizacja. Review Schema — ocena gwiazdkowa. HowTo Schema — kroki instrukcji. Job Posting Schema — oferty pracy. VideoObject Schema — miniatura wideo. BreadcrumbList — ścieżka nawigacji. Article Schema — data i zdjęcie. Ważne: Google sam decyduje kiedy pokazać rich snippet — nie jest to gwarantowane. Strony z wysokim autorytetem i dobrą jakością treści mają większą szansę.",
    },
    {
      question: "Jak testować Schema Markup?",
      answer:
        "Narzędzia do testowania Schema Markup: 1) Google Rich Results Test — search.google.com/test/rich-results — testuje czy strona kwalifikuje się do rich snippets. Pokazuje błędy i ostrzeżenia. 2) Schema.org Validator — validator.schema.org — waliduje poprawność JSON-LD zgodnie ze standardem Schema.org. 3) Google Search Console — Rozszerzenia → dane strukturyzowane. Pokaże błędy dla całej strony. 4) Screaming Frog — crawluje i sprawdza schema na wszystkich stronach. 5) Chrome DevTools — Sources lub Elements → sprawdź JSON-LD w kodzie źródłowym. Wskazówka: najpierw przetestuj na Google Rich Results Test — to oficjalne narzędzie Google.",
    },
    {
      question: "Czy Schema Markup wpływa na pozycje SEO?",
      answer:
        "Wpływ Schema Markup na SEO: Bezpośredni wpływ na pozycje: Google oficjalnie mówi że same dane strukturyzowane nie są bezpośrednim czynnikiem rankingowym. Pośredni wpływ: Rich Snippets → wyższy CTR (click-through rate). Wyższy CTR = Google widzi że strona jest atrakcyjna = może pozytywnie wpłynąć na ranking. Schema pomaga Google lepiej zrozumieć treść = może poprawić relevantność dla zapytań. Statystyki: Rich Snippets mogą zwiększyć CTR o 20-30% w porównaniu do standardowych wyników. Dla e-commerce Product schema z gwiazdkami może zwiększyć CTR nawet o 17% (Search Engine Journal). Wdrożenie schema to niskokosztowa optymalizacja o potencjalnie wysokim zwrocie.",
    },
    {
      question: "Jak dodać FAQ Schema Markup?",
      answer:
        "Przykład FAQ Schema JSON-LD: Kod umieszczasz w <script type='application/ld+json'> na stronie. Struktura: @context: https://schema.org, @type: FAQPage, mainEntity: tablice pytań z @type: Question, name: pytanie, acceptedAnswer: @type: Answer, text: odpowiedź. Każde pytanie i odpowiedź muszą być widoczne na stronie (nie ukryte przez JavaScript). Google może wyświetlić do 3 Q&A bezpośrednio w SERP pod wynikiem — zajmuje więcej miejsca na stronie wyników = wyższy CTR nawet bez top pozycji. FAQ Schema jest szczególnie wartościowe dla stron z sekcją FAQ i artykułów które odpowiadają na konkretne pytania.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Schema Markup — co to jest i jak wdrożyć? | fotz.pl"
        description="Schema Markup co to jest — wyjaśniamy czym są dane strukturyzowane, typy schema (FAQ, Product, LocalBusiness), jak wdrożyć JSON-LD i jakie generuje rich…"
        canonical="https://fotz.pl/blog/schema-markup-co-to"

        keywords="Schema Markup co to jest, Schema Markup definicja, czym jest Schema Markup, Schema Markup przykłady, jak działa Schema Markup, Schema Markup znaczenie, Schema Markup przewodnik"
      />
      <ArticleSchema
        title="Schema Markup — co to jest i jak wdrożyć?"
        description="Czym jest Schema Markup (dane strukturyzowane), typy schema, jak wdrożyć JSON-LD, które schema generują rich snippets, testowanie i wpływ na SEO."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/schema-markup-co-to"
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
                <span className="flex items-center gap-1"><Code className="w-4 h-4" /> SEO techniczne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Schema Markup — co to jest i jak dane strukturyzowane poprawiają SEO?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Schema Markup (dane strukturyzowane) pomaga Google zrozumieć Twoją stronę
                i generować rich snippets które zwiększają CTR o 20-30%.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Najważniejsze typy Schema Markup</h2>
              <div className="space-y-3 mb-6">
                {schemaTypes.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <Code className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{s.type}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Przykład FAQ Schema JSON-LD</h2>
              <div className="bg-slate-900 rounded-lg p-4 mb-6 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-300">{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Co to jest Schema Markup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schema Markup to kod..."
      }
    }
  ]
}
</script>`}</pre>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Star className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz stronę z pełnym Schema Markup?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy strony z Article, FAQ, LocalBusiness i BreadcrumbList schema — rich snippets od pierwszego dnia.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Schema Markup co to jest</h2>
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
          heading="Wdróż Schema Markup i popraw CTR w Google"
          subheading="Rich snippets z FAQ, Product i LocalBusiness schema — zwiększ klikalność bez poprawy pozycji."
        />
      </Layout>
    </>
  );
}
