import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ShoppingBag, Globe, TrendingUp, DollarSign } from "lucide-react";
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

export default function BlogEcommerceCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "E-commerce — co to jest i jak działa sprzedaż online?" },
  ];

  const ecommerceModels = [
    { icon: ShoppingBag, name: "B2C (Business to Consumer)", desc: "Firma sprzedaje bezpośrednio klientom indywidualnym. Przykłady: Zalando, MediaMarkt, Allegro. Najpopularniejszy model e-commerce." },
    { icon: Globe, name: "B2B (Business to Business)", desc: "Firma sprzedaje innym firmom. Hurtownie, platformy zakupowe dla firm, oprogramowanie SaaS. Wyższe wartości zamówień, dłuższy cykl." },
    { icon: TrendingUp, name: "C2C (Consumer to Consumer)", desc: "Sprzedaż między konsumentami przez platformy. Allegro, OLX, Vinted. Platforma pobiera prowizję za pośrednictwo." },
    { icon: DollarSign, name: "D2C (Direct to Consumer)", desc: "Producent sprzedaje bezpośrednio pomijając pośredników. Wyższe marże, bezpośredni kontakt z klientem, budowanie marki." },
  ];

  const faqItems = [
    {
      question: "Co to jest e-commerce?",
      answer:
        "E-commerce (electronic commerce) to handel elektroniczny — sprzedaż produktów i usług przez internet. Obejmuje sklepy internetowe, platformy marketplace (Allegro, Amazon), sprzedaż przez social media (Instagram Shopping, Facebook) i aplikacje mobilne. E-commerce to jeden z najszybciej rosnących sektorów — w Polsce wartość rynku przekracza 90 mld zł rocznie.",
    },
    {
      question: "Jak zacząć e-commerce — od czego zacząć?",
      answer:
        "Kroki do uruchomienia e-commerce: 1) Wybierz model biznesowy (własne produkty, dropshipping, marketplace). 2) Zdefiniuj grupę docelową i niszę. 3) Wybierz platformę (WooCommerce, Shopify, PrestaShop). 4) Skonfiguruj płatności (PayU, Przelewy24, BLIK). 5) Zadbaj o logistykę (magazyn, kurierzy, zwroty). 6) Zaplanuj marketing (SEO, reklamy, social media). 7) Dopełnij formalności prawne (regulamin, polityka prywatności, RODO).",
    },
    {
      question: "Ile kosztuje sklep internetowy?",
      answer:
        "Koszty sklepu internetowego są bardzo zróżnicowane: Shopify (gotowe rozwiązanie): 29-79 USD/mies. + prowizja. WooCommerce (open source): 0 zł + hosting (50-300 zł/mies.) + programista (2000-20 000 zł za wdrożenie). PrestaShop/Magento: dla większych sklepów, wyższe koszty. Marketplace (Allegro, Amazon): bez kosztów startu ale prowizje. Dla małych sklepów WooCommerce lub Shopify to optymalne rozwiązanie.",
    },
    {
      question: "Jakie platformy e-commerce są najlepsze?",
      answer:
        "Najpopularniejsze platformy e-commerce: WooCommerce (60%+ polskich sklepów) — bezpłatna, elastyczna, wymaga WordPressa. Shopify — hosting w cenie, łatwy start, prowizja od sprzedaży, idealna dla dropshippingu. PrestaShop — popularna w Europie, darmowa, bogata funkcjonalność. Allegro/Amazon — marketplace, gotowy ruch, ale prowizje. Wybór zależy od budżetu, skali i technicznej wiedzy.",
    },
    {
      question: "Jak zwiększyć sprzedaż w sklepie internetowym?",
      answer:
        "Sprawdzone metody wzrostu e-commerce: SEO (pozycjonowanie na frazy produktowe i kategoryczne), Google Shopping (reklamy produktowe), remarketing (powrót porzuconych koszyków), email marketing (abandon cart, upsell, cross-sell), optymalizacja konwersji (szybkość, UX, checkout), opinie i recenzje, darmowa dostawa od określonej kwoty, programy lojalnościowe. Warto mierzyć każde działanie przez GA4 i Attribution.",
    },
    {
      question: "Jakie przepisy prawne obowiązują sklepy internetowe?",
      answer:
        "Sklep internetowy w Polsce musi spełniać: Ustawa o prawach konsumenta (14 dni na zwrot dla konsumentów bez podawania przyczyny), RODO (polityka prywatności, zgody, prawo do usunięcia danych), ustawa o usługach świadczonych drogą elektroniczną (regulamin sklepu), ustawa o VAT (faktury, paragony, stawki VAT), dyrektywa Omnibus (obowiązek pokazywania najniższej ceny z 30 dni przy promocjach). Sklep B2C musi mieć regulamin i politykę prywatności.",
    },
  ];

  return (
    <>
      <SEOHead
        title="E-commerce — co to jest i jak działa sprzedaż online? | fotz.pl"
        description="E-commerce co to jest — wyjaśniamy czym jest handel elektroniczny, modele biznesowe B2C B2B D2C, jak zacząć sklep internetowy i ile to kosztuje. Poradnik 2025."
        canonical="https://fotz.pl/blog/e-commerce-co-to-jest"
      />
      <ArticleSchema
        title="E-commerce — co to jest i jak działa sprzedaż online?"
        description="Czym jest e-commerce, modele sprzedaży online (B2C, B2B, D2C), jak zacząć sklep internetowy, platformy e-commerce i przepisy prawne."
        datePublished="2025-04-07"
        dateModified="2025-04-09"
        url="https://fotz.pl/blog/e-commerce-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4" /> Sprzedaż online</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                E-commerce — co to jest i jak działa?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                E-commerce to sprzedaż przez internet — sklepy www, marketplace i social commerce.
                Rynek e-commerce w Polsce przekracza 90 mld zł rocznie i rośnie w dwucyfrowym tempie.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Modele e-commerce</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {ecommerceModels.map((model, idx) => {
                  const Icon = model.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{model.name}</h3>
                      <p className="text-slate-600 text-sm">{model.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kluczowe metryki e-commerce</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Metryka</th>
                      <th className="text-left p-3 border border-slate-700">Co mierzy</th>
                      <th className="text-left p-3 border border-slate-700">Benchmark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Conversion Rate (CR)", desc: "% odwiedzin = zakup", benchmark: "1-3% (e-commerce)" },
                      { metric: "AOV (Average Order Value)", desc: "Średnia wartość zamówienia", benchmark: "Zależy od branży" },
                      { metric: "CAC (Customer Acquisition Cost)", desc: "Koszt pozyskania klienta", benchmark: "< LTV/3" },
                      { metric: "LTV (Lifetime Value)", desc: "Wartość klienta przez całą relację", benchmark: "LTV > 3x CAC" },
                      { metric: "Cart Abandonment Rate", desc: "% porzuconych koszyków", benchmark: "65-75% to norma" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-blue-600">{row.metric}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.desc}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.benchmark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Chcesz uruchomić sklep internetowy?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy i wdrażamy sklepy e-commerce — WooCommerce, Shopify, integracje z hurtowniami.
                </p>
                <Link to="/uslugi/tworzenie-sklepow-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Sklepy internetowe — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — E-commerce co to jest</h2>
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
          heading="Wejdź w e-commerce z profesjonalnym sklepem"
          subheading="Od strategii przez sklep do marketingu — kompletne wsparcie e-commerce."
        />
      </Layout>
    </>
  );
}
