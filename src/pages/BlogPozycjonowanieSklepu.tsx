import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ShoppingBag, Search, TrendingUp, Star, FileText } from "lucide-react";
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

export default function BlogPozycjonowanieSklepu() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Pozycjonowanie sklepu internetowego — kompletny poradnik" },
  ];

  const seoShopElements = [
    { icon: Search, title: "Słowa kluczowe dla sklepu", desc: "Trzy poziomy: ogólne (buty damskie), kategorie (buty sportowe damskie Nike), produkty (Nike Air Max 270 czarne 38). Każdy poziom wymaga osobnej optymalizacji." },
    { icon: FileText, title: "Optymalizacja kart produktów", desc: "Unikalny opis (nie kopiuj od producenta!), pełna nazwa w H1, zdjęcia z alt-tagami, dane strukturalne Product schema, opinie klientów." },
    { icon: TrendingUp, title: "SEO kategorii", desc: "Kategorie generują największy ruch w sklepach. Dodaj opisy kategorii (200-500 słów), breadcrumbs, linkowanie wewnętrzne do produktów." },
    { icon: Star, title: "Opinie i recenzje", desc: "Recenzje produktów to treść generowana przez użytkowników — Google je uwielbia. Zachęcaj klientów do zostawiania opinii po zakupie." },
    { icon: ShoppingBag, title: "Techniczne SEO dla sklepu", desc: "Canonical URL dla wariantów produktów, paginacja (rel=next/prev), filtrowanie kategorii (noindex dla filtrów), szybkość ładowania." },
    { icon: CheckCircle2, title: "Google Merchant Center", desc: "Darmowe wyniki Google Shopping dla WooCommerce. Synchronizuj produkty i pojawiaj się w zakładce Zakupy — bezpłatnie." },
  ];

  const contentIdeas = [
    "Poradniki zakupowe: 'Jak wybrać [produkt]?' — trafiają do klientów na etapie badania",
    "Rankingi i porównania: 'Top 10 [produktów] 2025' — high-traffic frazy",
    "Odpowiedzi na pytania klientów: FAQ sekcja na stronie produktu",
    "Blog z poradami branżowymi — buduje autorytet i przyciąga ruch long-tail",
    "Strony 'jak używać' i instrukcje obsługi — video + tekst",
    "Treści sezonowe: 'Prezenty na Boże Narodzenie [rok]' — recykling co roku",
  ];

  const faqItems = [
    {
      question: "Jak pozycjonować sklep internetowy?",
      answer:
        "Pozycjonowanie sklepu internetowego wymaga działań na kilku frontach: 1) Optymalizacja kart produktów (unikalny opis, H1, zdjęcia z alt-tagami, schema markup). 2) SEO kategorii (opisy, breadcrumbs, linkowanie wewnętrzne). 3) Technical SEO (canonical, paginacja, szybkość). 4) Content marketing (blog, poradniki zakupowe). 5) Link building (katalogi, artykuły gościnne). 6) Google Merchant Center (bezpłatne Shopping).",
    },
    {
      question: "Ile trwa SEO dla sklepu internetowego?",
      answer:
        "Sklepy z dużymi katalogami produktów mogą zobaczyć efekty szybciej — Google indeksuje wiele stron. Jednak stabilne pozycje na konkurencyjne frazy (np. 'buty damskie') wymagają 6-18 miesięcy. Long-tail frazy (konkretne modele, SKU) mogą rankować po 1-3 miesiącach. Nowe sklepy mają trudniej — starsze domeny z historią rankują łatwiej.",
    },
    {
      question: "Jak zoptymalizować opisy produktów pod SEO?",
      answer:
        "Zasady optymalizacji opisów produktów: pisz unikalne teksty (nie kopiuj od producenta — to duplicate content), dodaj główne słowo kluczowe w H1 i pierwszym akapicie, opisz korzyści dla klienta (nie tylko cechy), używaj struktury FAQ w opisie, dodaj zdjęcia z opisowymi alt-tagami, dodaj Product schema (dane strukturalne). Opisy muszą mieć min. 200-300 słów — Google nie lubi krótkich kart.",
    },
    {
      question: "Czy WooCommerce jest dobry dla SEO?",
      answer:
        "WooCommerce jest bardzo dobrą platformą dla SEO — lepszą niż Shopify. Powody: pełna integracja z Yoast SEO, dowolna konfiguracja URL, pełna kontrola nad treścią i meta tagami, canonical URL dla wariantów, schema markup dla produktów, brak ograniczeń na treść opisu. Kluczowe: skonfiguruj Yoast SEO, Google Search Console i Google Analytics 4.",
    },
    {
      question: "Jak używać Google Merchant Center dla WooCommerce?",
      answer:
        "Google Merchant Center pozwala wyświetlać produkty bezpłatnie w zakładce Google Shopping. Kroki: 1) Utwórz konto na merchants.google.com. 2) Zainstaluj wtyczkę Google for WooCommerce (oficjalna integracja). 3) Połącz konto Google Ads (wymagane, ale kampanie Google Shopping mogą być bezpłatne). 4) Synchronizuj produkty z feedem XML. 5) Zatwierdź produkty i oczekuj weryfikacji.",
    },
    {
      question: "Ile kosztuje SEO dla sklepu internetowego?",
      answer:
        "SEO dla sklepu internetowego kosztuje więcej niż dla strony firmowej — wymaga pracy na wielu podstronach. Orientacyjnie: mały sklep (do 100 produktów) 1500-3000 zł/mies., sklep średni (100-1000 produktów) 3000-8000 zł/mies., duży sklep (1000+ produktów) 5000-20 000 zł/mies. Do tego tworzenie treści (opisy, blog) — 500-3000 zł/mies. Inwestycja powinna dawać co najmniej 3-5x ROI po 12 miesiącach.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Pozycjonowanie sklepu internetowego — kompletny poradnik | fotz.pl"
        description="Pozycjonowanie sklepu internetowego — jak optymalizować produkty, kategorie i treści dla Google. SEO dla WooCommerce, Shopify i PrestaShop. Poradnik 2025."
        canonical="https://fotz.pl/blog/pozycjonowanie-sklepu-internetowego"
      />
      <ArticleSchema
        title="Pozycjonowanie sklepu internetowego — kompletny poradnik SEO"
        description="Jak pozycjonować sklep internetowy — optymalizacja produktów, kategorii, technical SEO i content marketing dla e-commerce."
        datePublished="2025-02-08"
        dateModified="2025-04-01"
        url="https://fotz.pl/blog/pozycjonowanie-sklepu-internetowego"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min czytania</span>
                <span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4" /> SEO e-commerce</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pozycjonowanie sklepu internetowego — kompletny poradnik SEO
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                SEO dla sklepu internetowego rządzi się innymi prawami niż dla strony firmowej.
                Setki produktów, kategorii i wariantów — każdy wymaga indywidualnej optymalizacji.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Dlaczego SEO sklepu jest trudniejsze?</h2>
              <p className="text-slate-700 mb-4">
                Sklep internetowy z tysiącem produktów to de facto tysiąc stron wymagających indywidualnej
                optymalizacji. Dochodzą wyzwania techniczne: duplikat treści (produkty producenta na wielu sklepach),
                paginacja kategorii, warianty produktów, filtrowanie i sortowanie.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { stat: "38%", desc: "ruchu e-commerce pochodzi z organicznego SEO" },
                  { stat: "3x", desc: "wyższe ROI SEO vs Google Ads po 12 miesiącach" },
                  { stat: "1000+", desc: "słów kluczowych dla typowego sklepu" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{item.stat}</div>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kluczowe elementy SEO dla sklepu</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {seoShopElements.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Content marketing dla e-commerce</h2>
              <p className="text-slate-700 mb-3">Blog i poradniki to potężne narzędzie SEO dla sklepów — przyciągają klientów na etapie badania, budują autorytet i przynoszą long-tail ruch.</p>
              <div className="space-y-2 mb-6">
                {contentIdeas.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz SEO dla swojego sklepu?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Specjalizujemy się w pozycjonowaniu sklepów WooCommerce. Audyt bezpłatny.
                </p>
                <Link to="/uslugi/pozycjonowanie-stron" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Pozycjonowanie sklepów — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Pozycjonowanie sklepu internetowego</h2>
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
          heading="Zacznij sprzedawać więcej dzięki SEO"
          subheading="Pozycjonujemy sklepy WooCommerce — audyt bezpłatny, efekty mierzalne."
        />
      </Layout>
    </>
  );
}
