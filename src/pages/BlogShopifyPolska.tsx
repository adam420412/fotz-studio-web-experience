import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ShoppingBag, DollarSign, Globe, Star, AlertCircle } from "lucide-react";
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

export default function BlogShopifyPolska() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Shopify w Polsce — czy warto?" },
  ];

  const shopifyVsWoocommerce = [
    { feature: "Łatwość obsługi", shopify: "★★★★★ Bardzo prosta", woo: "★★★☆☆ Wymaga WordPress" },
    { feature: "Koszt miesięczny", shopify: "100-500+ zł/mies.", woo: "Hosting ~50-200 zł/mies." },
    { feature: "Elastyczność", shopify: "★★★☆☆ Ograniczona", woo: "★★★★★ Pełna kontrola" },
    { feature: "SEO", shopify: "★★★☆☆ OK, ale ograniczone", woo: "★★★★★ Yoast SEO i pełna kontrola" },
    { feature: "Polska integracja płatności", shopify: "PayU, Przelewy24 (plugin)", woo: "PayU, Przelewy24, BLIK natywnie" },
    { feature: "Wsparcie techniczne", shopify: "24/7 od Shopify", woo: "Własna odpowiedzialność" },
    { feature: "Skalowalność", shopify: "★★★★★ Automatyczna", woo: "★★★☆☆ Wymaga optymalizacji" },
  ];

  const faqItems = [
    {
      question: "Czy Shopify działa w Polsce?",
      answer:
        "Tak — Shopify działa w Polsce w pełni. Obsługuje polskie płatności (PayU, Przelewy24, BLIK przez aplikacje), polskie prawo o zwrotach i VAT, jest dostępny w języku polskim dla klientów sklepu. Panel admina jest jednak w języku angielskim. Shopify ma serwery w Europie co zapewnia szybkość działania dla polskich klientów.",
    },
    {
      question: "Ile kosztuje Shopify w Polsce?",
      answer:
        "Shopify w Polsce kosztuje: Basic 32 USD/mies. (~130 zł), Shopify 92 USD/mies. (~375 zł), Advanced 399 USD/mies. (~1625 zł). Plus 0% prowizji jeśli używasz Shopify Payments (w Polsce niedostępne) lub prowizja 0,5-2% od sprzedaży. Do tego motywy premium (80-350 USD) i aplikacje (30-200 USD/mies.).",
    },
    {
      question: "Shopify czy WooCommerce dla polskiego sklepu?",
      answer:
        "WooCommerce zalecamy gdy: masz WordPress, chcesz pełnej kontroli, zależy Ci na SEO, masz budżet na hosting i dewelopera. Shopify zalecamy gdy: cenisz prostotę, nie chcesz martwić się technikaliami, planujesz sprzedaż international, zaczynasz bez zaplecza technicznego. Dla większości polskich małych firm WooCommerce jest lepszym długoterminowym wyborem.",
    },
    {
      question: "Jakie są wady Shopify w Polsce?",
      answer:
        "Główne wady Shopify dla polskich sklepów: brak Shopify Payments (trzeba używać zewnętrznych bramek z prowizją), panel admina w angielskim, wyższy koszt miesięczny vs hosting WordPress, ograniczona kontrola nad kodem i SEO, trudniejsza migracja gdy chcesz zmienić platformę.",
    },
    {
      question: "Jak uruchomić sklep Shopify w Polsce?",
      answer:
        "Kroki: Zarejestruj konto Shopify (14 dni darmowego trialu). Wybierz motyw (darmowy lub premium). Skonfiguruj płatności (np. Przelewy24 przez aplikację). Dodaj produkty z opisami i zdjęciami. Skonfiguruj wysyłkę i strefy dostawy. Podłącz domenę. Skonfiguruj podatki (VAT). Opublikuj sklep. Pierwsze zamówienia możesz mieć w 1-2 tygodnie od startu.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Shopify w Polsce — czy warto? Ceny, wady, zalety 2025 | fotz.pl"
        description="Shopify Polska — czy warto wybrać Shopify do polskiego sklepu internetowego? Ceny, wady, zalety, porównanie z WooCommerce. Kompletny przewodnik 2025."
        canonical="https://fotz.pl/blog/shopify-polska"
      />
      <ArticleSchema
        title="Shopify w Polsce — czy warto? Ceny, wady, zalety i porównanie"
        description="Kompletny przewodnik po Shopify dla polskich sklepów. Ceny, integracje płatności, porównanie z WooCommerce."
        datePublished="2025-02-01"
        dateModified="2025-03-15"
        url="https://fotz.pl/blog/shopify-polska"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min czytania</span>
                <span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4" /> E-commerce</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Shopify w Polsce — czy warto? Ceny, wady i zalety w 2025
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Shopify to jedna z najpopularniejszych platform e-commerce na świecie. Ale czy sprawdza się dla
                polskich sklepów? Odpowiadamy na to pytanie kompleksowo — z cenami, porównaniem i przykładami.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Czym jest Shopify?</h2>
              <p className="text-slate-700 mb-4">
                Shopify to platforma SaaS (Software as a Service) do tworzenia sklepów internetowych. Możesz
                uruchomić sklep bez żadnej wiedzy technicznej — w modelu abonamentowym, z hostingiem i bezpieczeństwem
                w cenie. Shopify obsługuje ponad 1,7 miliona sklepów w 175 krajach.
              </p>
              <p className="text-slate-700 mb-6">
                W Polsce Shopify zyskuje na popularności, szczególnie wśród startupów i marek które chcą szybko
                uruchomić sprzedaż. Konkuruje głównie z WooCommerce (WordPress) i PrestaShop.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Cennik Shopify w Polsce 2025</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { plan: "Basic", price: "~130 zł/mies.", commission: "2% od sprzedaży", features: "Do 2 kont pracowników, raporty podstawowe" },
                  { plan: "Shopify", price: "~375 zł/mies.", commission: "1% od sprzedaży", features: "Do 5 kont, raporty zaawansowane", highlight: true },
                  { plan: "Advanced", price: "~1625 zł/mies.", commission: "0,5% od sprzedaży", features: "Do 15 kont, raporty custom" },
                ].map((item, idx) => (
                  <div key={idx} className={`p-5 rounded-lg border ${item.highlight ? "border-blue-400 bg-blue-50" : "border-slate-200 bg-slate-50"}`}>
                    <h3 className="font-bold text-slate-900 mb-1">{item.plan}</h3>
                    <div className="text-xl font-bold text-blue-600 mb-1">{item.price}</div>
                    <div className="text-xs text-orange-600 font-medium mb-2">+{item.commission}</div>
                    <p className="text-slate-600 text-xs">{item.features}</p>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6 flex gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-700 text-sm">Shopify Payments nie jest dostępne w Polsce — każda transakcja przez zewnętrzną bramkę (PayU, Przelewy24) kosztuje dodatkowo 0,5-2% prowizji Shopify.</p>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Shopify vs WooCommerce — porównanie</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Cecha</th>
                      <th className="text-left p-3 border border-slate-700">Shopify</th>
                      <th className="text-left p-3 border border-slate-700">WooCommerce</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shopifyVsWoocommerce.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-medium text-slate-800">{row.feature}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.shopify}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.woo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kiedy Shopify jest dobrym wyborem?</h2>
              <div className="space-y-2 mb-6">
                {[
                  "Chcesz uruchomić sklep szybko i bez wiedzy technicznej",
                  "Planujesz sprzedaż na rynkach zagranicznych",
                  "Zależy Ci na automatycznych aktualizacjach i bezpieczeństwie",
                  "Masz mały katalog produktów i proste potrzeby",
                  "Nie chcesz martwić się hostingiem i backapami",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-4">Kiedy wybrać WooCommerce zamiast Shopify?</h2>
              <div className="space-y-2 mb-6">
                {[
                  "Zależy Ci na pełnej kontroli nad kodem i SEO",
                  "Chcesz uniknąć prowizji od sprzedaży",
                  "Masz duży katalog (5000+ produktów) wymagający optymalizacji",
                  "Potrzebujesz specyficznych integracji z polskim systemem ERP/fakturami",
                  "Masz dostęp do dewelopera lub znasz WordPress",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <Star className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz sklepu internetowego?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy sklepy WooCommerce i pomagamy wdrożyć Shopify. Dobierzemy platformę do Twoich potrzeb.
                </p>
                <Link to="/uslugi/tworzenie-sklepow-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie sklepów internetowych <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Shopify Polska</h2>
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
          heading="Zakładasz sklep internetowy?"
          subheading="Pomożemy wybrać właściwą platformę i uruchomić sklep który sprzedaje."
        />
      </Layout>
    </>
  );
}
