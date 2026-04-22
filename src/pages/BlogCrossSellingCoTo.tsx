import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, ShoppingCart, Zap, DollarSign } from "lucide-react";
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

export default function BlogCrossSellingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Cross-selling — co to jest i jak zwiększyć sprzedaż?" },
  ];

  const crossSellingExamples = [
    { brand: "Amazon", tactic: "\"Klienci którzy kupili X, kupili też Y\"", effect: "35% przychodów Amazona pochodzi z algorytmu rekomendacji" },
    { brand: "McDonald's", tactic: "\"Czy dołożyć frytki?\" przy zamówieniu burgera", effect: "Wzrost średniej wartości zamówienia o 15-25%" },
    { brand: "Bank / ubezpieczyciel", tactic: "Oferowanie ubezpieczenia przy zakupie kredytu", effect: "Jeden z najwyższych wskaźników cross-sell w branży" },
    { brand: "E-commerce moda", tactic: "\"Dokończ look\" — dobieranie akcesoriów do ubrania", effect: "Wzrost AOV (average order value) o 10-30%" },
  ];

  const faqItems = [
    {
      question: "Co to jest cross-selling?",
      answer:
        "Cross-selling (sprzedaż krzyżowa) to technika sprzedaży polegająca na proponowaniu klientowi dodatkowych produktów lub usług komplementarnych do tego, który już kupuje lub kupił. Celem jest zwiększenie wartości transakcji (AOV — Average Order Value) i potrzeb klienta. Przykład: klient kupuje laptop → oferujesz myszę, torbę, przedłużoną gwarancję, pakiet oprogramowania. Badania McKinsey wskazują że cross-selling może zwiększyć przychody o 20% i zyski o 30%.",
    },
    {
      question: "Czym różni się cross-selling od upsellingu?",
      answer:
        "Cross-selling to sprzedaż produktów komplementarnych/dodatkowych do głównego zakupu. Upselling to zachęcenie klienta do zakupu droższej wersji produktu który już planuje kupić. Przykład: Klient patrzy na smartfon za 2000 zł. Cross-selling: proponujesz etui, słuchawki, dodatkową ładowarkę. Upselling: proponujesz droższy model za 2800 zł z lepszym aparatem. Oba podejścia są komplementarne — Amazon stosuje oba jednocześnie. Upselling generuje wyższy przychód na transakcję; cross-selling jest łatwiej akceptowany przez klientów.",
    },
    {
      question: "Jak wdrożyć cross-selling w e-commerce?",
      answer:
        "Metody cross-sellingu w e-commerce: 1) Sekcja \"Często kupowane razem\" na stronie produktu (jak Amazon). 2) Pop-up lub drawer w koszyku z dodatkami. 3) Email po zakupie — \"Inni klienci dokupili również...\". 4) Strona potwierdzenia zamówienia z ofertą uzupełniającą. 5) Program lojalnościowy łączący produkty. Zasady skutecznego cross-sellingu: propozycja musi być relevantna i dopasowana, cena dodatku powinna być niższa niż główny produkt (max 25-30% wartości), nie proponuj za dużo naraz (2-3 opcje max).",
    },
    {
      question: "Jak cross-selling działa w SaaS?",
      answer:
        "W branży SaaS cross-selling to oferowanie dodatkowych modułów, integracji lub usług do głównej subskrypcji. Przykłady: Slack → Atlassian (Jira, Confluence), HubSpot → dodatkowe moduły (Sales Hub, Service Hub), Shopify → aplikacje z app store. Metryka sukcesu w SaaS: liczba produktów na klienta (products per account), ekspansja MRR (Monthly Recurring Revenue) z istniejących klientów. Pozyskanie nowego klienta kosztuje 5-7x więcej niż rozszerzenie istniejącego — cross-selling jest kluczową strategią wzrostu.",
    },
    {
      question: "Kiedy NIE stosować cross-sellingu?",
      answer:
        "Cross-selling może zaszkodzić gdy: Propozycja jest nieodpowiednia — oferowanie ubezpieczenia po zgłoszeniu reklamacji to kiepski timing. Klient jest sfrustrowany lub niezadowolony — najpierw rozwiąż problem. Zbyt wiele propozycji naraz — decision fatigue prowadzi do braku zakupu czegokolwiek. Produkt jest niezwiązany — wymuszony cross-sell szkodzi zaufaniu. Kanał jest nieodpowiedni — agresywny cross-selling przez telefon w centrum obsługi klienta generuje negatywne opinie.",
    },
    {
      question: "Jakie narzędzia pomagają w cross-sellingu?",
      answer:
        "Narzędzia do cross-sellingu: E-commerce: Shopify (często kupowane razem), WooCommerce (product recommendations), Magento (related products). Rekomendacje AI: Dynamic Yield, Barilliance, Nosto, Clerk.io. Email marketing: Klaviyo, Mailchimp (product recommendations w emailach). CRM: HubSpot, Salesforce (cross-sell opportunities w pipeline). Analityka: Google Analytics 4 (product affinity analysis w e-commerce), Heap, Mixpanel. Podstawa: dobre dane o zachowaniu klientów i powiązaniach produktowych.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Cross-selling — co to jest i jak zwiększyć sprzedaż? | fotz.pl"
        description="Cross-selling co to jest — wyjaśniamy czym jest sprzedaż krzyżowa, różnica cross-sell vs upsell, jak wdrożyć w e-commerce i SaaS z przykładami."
        canonical="https://fotz.pl/blog/cross-selling-co-to"

        keywords="Cross-selling co to jest, Cross-selling definicja, czym jest Cross-selling, Cross-selling w sprzedaży, Cross-selling strategia, Cross-selling przykłady, jak używać Cross-selling"
      />
      <ArticleSchema
        title="Cross-selling — co to jest i jak zwiększyć sprzedaż?"
        description="Czym jest cross-selling (sprzedaż krzyżowa), różnica od upsellingu, przykłady (Amazon, McDonald's), jak wdrożyć w e-commerce i jakie narzędzia wybrać."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/cross-selling-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><ShoppingCart className="w-4 h-4" /> E-commerce i sprzedaż</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Cross-selling — co to jest i jak zwiększyć sprzedaż?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Cross-selling (sprzedaż krzyżowa) to proponowanie klientowi produktów uzupełniających zakup.
                Amazon generuje 35% przychodów z rekomendacji. Jak to działa i jak wdrożyć?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Cross-selling w praktyce — przykłady</h2>
              <div className="space-y-4 mb-6">
                {crossSellingExamples.map((ex, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingCart className="w-4 h-4 text-blue-600" />
                      <span className="font-bold text-slate-900 text-sm">{ex.brand}</span>
                    </div>
                    <p className="text-slate-700 text-sm mb-1 italic">„{ex.tactic}"</p>
                    <p className="text-green-700 text-xs font-medium">Efekt: {ex.effect}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Cross-selling vs Upselling — porównanie</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700">Cross-selling</th>
                      <th className="text-left p-3 border border-slate-700">Upselling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: "Co oferujesz", cross: "Produkty komplementarne", up: "Droższą wersję tego samego" },
                      { aspect: "Cel", cross: "Zwiększenie koszyka", up: "Zwiększenie wartości produktu" },
                      { aspect: "Przykład", cross: "Laptop + torba + mysz", up: "Laptop 2000 zł → model 2800 zł" },
                      { aspect: "Akceptacja klienta", cross: "Łatwiejsza (małe wydatki)", up: "Trudniejsza (większa różnica cen)" },
                      { aspect: "Kiedy stosować", cross: "W koszyku, po zakupie", up: "Przed decyzją, na stronie produktu" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspect}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.cross}</td>
                        <td className="p-3 border border-slate-200 text-green-700 text-xs">{row.up}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zwiększyć AOV swojego sklepu?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy sklepy z wbudowanymi mechanizmami cross-sell i upsell, które automatycznie zwiększają wartość koszyka.
                </p>
                <Link to="/uslugi/tworzenie-sklepow-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie sklepów — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Cross-selling co to jest</h2>
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
