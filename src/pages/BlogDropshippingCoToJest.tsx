import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Package, DollarSign, TrendingUp, XCircle } from "lucide-react";
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

export default function BlogDropshippingCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Dropshipping — co to jest i jak zacząć?" },
  ];

  const pros = [
    "Brak konieczności posiadania własnego magazynu i towaru",
    "Niski próg wejścia — zaczynasz bez dużego kapitału",
    "Szeroki asortyment bez ryzyka niesprzedanego towaru",
    "Możliwość prowadzenia zdalnie z dowolnego miejsca",
    "Skalujesz bez proporcjonalnego wzrostu kosztów logistycznych",
  ];

  const cons = [
    "Niskie marże — duża konkurencja i małe pole na cenę",
    "Brak kontroli nad jakością i czasem dostawy",
    "Trudne budowanie marki gdy sprzedajesz cudze produkty",
    "Ryzyko niedostępności towaru u dostawcy",
    "Odpowiedzialność wobec klienta mimo braku kontroli nad towarem",
  ];

  const faqItems = [
    {
      question: "Co to jest dropshipping?",
      answer:
        "Dropshipping to model sprzedaży internetowej, w którym sprzedawca nie posiada fizycznie towaru — gdy klient składa zamówienie, sprzedawca przekazuje je bezpośrednio do hurtownika lub producenta, który wysyła produkt do klienta. Sprzedawca zarabia na różnicy między ceną hurtową a detaliczną. Klient widzi sklep sprzedawcy, nie dostawcy.",
    },
    {
      question: "Ile można zarobić na dropshippingu?",
      answer:
        "Zarobki z dropshippingu są bardzo zróżnicowane. Marże typowo wynoszą 10-30% (przy produktach z Chin bywają wyższe). Przy obrocie 50 000 zł/mies. i marży 20% to 10 000 zł — ale od tego odejmujesz koszty reklam (często 30-50% obrotu), hosting, platform i inne. Dropshipping to biznes wymagający efektywnej reklamy płatnej — bez niej trudno o ruch.",
    },
    {
      question: "Jak zacząć dropshipping w Polsce?",
      answer:
        "Kroki do startu: 1) Wybierz niszę i produkty (unikaj zbyt konkurencyjnych kategorii). 2) Znajdź dostawców (polskie hurtownie dropshippingowe, AliExpress, CJ Dropshipping). 3) Zbuduj sklep internetowy (Shopify, WooCommerce). 4) Połącz sklep z dostawcą przez integrację lub CSV. 5) Uruchom reklamy (Facebook Ads, Google Shopping). 6) Zadbaj o obsługę klienta. Rejestracja firmy wymagana przy regularnej sprzedaży.",
    },
    {
      question: "Czy dropshipping jest legalny w Polsce?",
      answer:
        "Tak — dropshipping jest legalny. Wymogi: przy regularnej sprzedaży musisz zarejestrować działalność gospodarczą (JDG lub spółka), płacisz podatek dochodowy i VAT (po przekroczeniu limitu), musisz wystawiać faktury/paragony, odpowiadasz za reklamacje i zwroty jak każdy sprzedawca e-commerce (konsumentowi przysługuje 14 dni na zwrot). Prawo konsumenta dotyczy Cię, nawet jeśli towar wysyła hurtownik.",
    },
    {
      question: "Jaki sklep wybrać do dropshippingu — Shopify czy WooCommerce?",
      answer:
        "Shopify: łatwiejszy start, wszystko w jednym miejscu, świetne integracje z dostawcami (Oberlo, DSers). Koszt od $29/mies. + prowizja od sprzedaży. WooCommerce: bezpłatna platforma (płacisz za hosting), więcej kontroli i możliwości customizacji, lepsza dla SEO. Dla początkujących Shopify jest wygodniejszy. Dla zaawansowanych z budżetem na SEO — WooCommerce na własnym hostingu.",
    },
    {
      question: "Czy dropshipping z Chin (AliExpress) się opłaca?",
      answer:
        "Dropshipping z AliExpress to wysoka marża ale długi czas dostawy (14-30 dni do Polski) — to główna bariera. Alternatywy: CJ Dropshipping (szybciej), lokalni polscy dostawcy dropshippingowi (Hurt.pl, Droplo, Allani). Trend: klienci oczekują dostawy w 24-48h. Długie czasy dostawy = duże porzucanie zamówień i negatywne opinie. Warto szukać dostawców z magazynami w Europie.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Dropshipping — co to jest i jak zacząć? Poradnik 2025 | fotz.pl"
        description="Dropshipping co to jest — wyjaśniamy jak działa dropshipping, ile można zarobić, jak zacząć w Polsce i czy to się opłaca. Porównanie Shopify vs WooCommerce."
        canonical="https://fotz.pl/blog/dropshipping-co-to-jest"

        keywords="Dropshipping co to jest, Dropshipping definicja, czym jest Dropshipping, Dropshipping przykłady, jak działa Dropshipping, Dropshipping znaczenie, Dropshipping przewodnik"
      />
      <ArticleSchema
        title="Dropshipping — co to jest i jak zacząć?"
        description="Czym jest dropshipping, jak działa model bez własnego magazynu, zalety i wady, jak zacząć w Polsce i które platformy wybrać."
        datePublished="2025-04-05"
        dateModified="2025-04-09"
        url="https://fotz.pl/blog/dropshipping-co-to-jest"
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
                <span className="flex items-center gap-1"><Package className="w-4 h-4" /> E-commerce</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Dropshipping — co to jest i jak zacząć?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Dropshipping to sprzedaż bez własnego magazynu — dostawca wysyła towar bezpośrednio do klienta.
                Niski próg wejścia, ale czy to się naprawdę opłaca?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Jak działa dropshipping krok po kroku?</h2>
              <div className="space-y-3 mb-6">
                {[
                  { step: "1", desc: "Klient składa zamówienie w Twoim sklepie internetowym i płaci cenę detaliczną" },
                  { step: "2", desc: "Ty przekazujesz zamówienie do hurtownika/dostawcy i płacisz cenę hurtową" },
                  { step: "3", desc: "Hurtownik pakuje i wysyła towar bezpośrednio do klienta (z Twoją etykietą lub bez)" },
                  { step: "4", desc: "Twój zarobek = różnica między ceną detaliczną a hurtową (marża 10-30%)" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="w-7 h-7 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{item.step}</span>
                    <p className="text-slate-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Zalety i wady dropshippingu</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Zalety
                  </h3>
                  <ul className="space-y-2">
                    {pros.map((pro, idx) => (
                      <li key={idx} className="text-green-700 text-sm flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 flex-shrink-0 mt-0.5" /> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Wady
                  </h3>
                  <ul className="space-y-2">
                    {cons.map((con, idx) => (
                      <li key={idx} className="text-red-700 text-sm flex items-start gap-2">
                        <XCircle className="w-3 h-3 flex-shrink-0 mt-0.5" /> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <DollarSign className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zbudować sklep dropshippingowy?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy sklepy WooCommerce i Shopify z integracjami dropshippingowymi dla polskich hurtowni.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Dropshipping co to jest</h2>
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
          heading="Zbudujemy sklep gotowy do dropshippingu"
          subheading="WooCommerce, Shopify, integracje z hurtowniami — od koncepcji do startu."
        />
      </Layout>
    </>
  );
}
