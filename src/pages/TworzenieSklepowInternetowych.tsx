import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const breadcrumbs = [
  { name: "Strona główna", url: "/" },
  { name: "Usługi", url: "/uslugi" },
  { name: "Tworzenie sklepów internetowych", url: "/uslugi/tworzenie-sklepow-internetowych" },
];

export default function TworzenieSklepowInternetowych() {
  return (
    <>
      <SEOHead
        title="Tworzenie sklepów internetowych | E-commerce | FOTZ Studio"
        description="Tworzymy profesjonalne sklepy internetowe. WooCommerce, Shopify, PrestaShop. Integracja płatności i logistyki. Wycena po rozmowie o zakresie."
        canonical="https://www.fotz-studio.pl/uslugi/tworzenie-sklepow-internetowych"
        keywords="tworzenie sklepów internetowych, sklep internetowy, budowa sklepu internetowego, agencja e-commerce, wdrożenie sklepu online, WooCommerce, PrestaShop, Shopify"
      />
      <ServiceSchema
        name="Tworzenie sklepów internetowych"
        description="Profesjonalne sklepy e-commerce — WooCommerce, Shopify, PrestaShop"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Tworzenie sklepów internetowych — Twój sklep online gotowy do sprzedaży
              </h1>
              <p className="text-2xl text-orange-700 mb-8 font-semibold max-w-3xl mx-auto">
                Projektujemy i wdrażamy sklepy dopasowane do Twojego asortymentu, płatności i wysyłek. Czy Twój sklep jest już online?
              </p>
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg">
                <Link to="/kontakt">
                  Bezpłatna konsultacja e-commerce
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Platforms */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Platformy e-commerce — którą wybrać?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Każda platforma ma inne mocne strony. Pomagamy wybrać idealne rozwiązanie dla Ciebie.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "WooCommerce",
                    pros: "Najbardziej popularne, niskie koszty, pełna kontrola",
                    cons: "Wymaga hostingu, więcej zarządzania",
                    when: "Dla małych i średnich sklepów, gdy masz budżet na hosting",
                  },
                  {
                    name: "Shopify",
                    pros: "Szybko online, wsparcie, skalowalne, bezpieczne",
                    cons: "Koszty subskrypcji, prowizje transakcyjne",
                    when: "Dla tych, którzy chcą szybko i bez technicznych zmartwiań",
                  },
                  {
                    name: "PrestaShop",
                    pros: "Elastyczne, bogatsze funkcje, mniejsze koszty niż Shopify",
                    cons: "Wymagająca konfiguracja, forum zamiast wsparcia",
                    when: "Dla bardziej zaawansowanych użytkowników",
                  },
                  {
                    name: "Magento",
                    pros: "Profesjonalne, skalowalne, dla dużych katalogów",
                    cons: "Droga, skomplikowana, wymaga eksperta",
                    when: "Dla dużych korporacyjnych sklepów",
                  },
                  {
                    name: "Shoper",
                    pros: "Polska platforma, dedykowane wsparcie, integracje lokalne",
                    cons: "Mniejsze możliwości niż zagraniczni gracze",
                    when: "Dla małych polskich sklepów, prostych rozwiązań",
                  },
                  {
                    name: "Custom (React/Node)",
                    pros: "Pełna autonomia, pełne dopasowanie, nowoczesne",
                    cons: "Najdroższe, wymaga zespołu, długi czas wdrożenia",
                    when: "Dla gigantów, MVP startupów, specjalnych wymagań",
                  },
                ].map((platform, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                    <div className="space-y-2 text-sm mb-4 pb-4 border-b border-gray-200">
                      <p className="text-green-700 font-medium">✓ {platform.pros}</p>
                      <p className="text-amber-700">⚠ {platform.cons}</p>
                    </div>
                    <p className="text-gray-600 text-xs italic">{platform.when}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Co zawiera sklep */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Co zawiera profesjonalny sklep internetowy?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Wszystko, co potrzebujesz do sprzedaży bez granic.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                  "Design responsywny — pięknie wygląda na wszystkich urządzeniach",
                  "Katalog produktów — dodajesz, edytujesz, usuwasz produkty",
                  "System płatności — Przelewy24, PayU, Stripe, karty kredytowe",
                  "Integracja kurierów — InPost, DPD, GLS, DHL, Fedex automatycznie",
                  "System zarządzania — panel administracyjny do obsługi zamówień",
                  "Optymalizacja SEO — rozszerzeń, kategorii, filtrów",
                  "Analityka — Google Analytics, raport konwersji, ROI",
                  "Mobile-first — sklep projektowany z myślą o zakupach na telefonie",
                  "Bezpieczeństwo SSL — certyfikat, HTTPS, ochrona danych",
                  "Wiadomości email — powiadomienia o zamówieniu, przypomnienia",
                  "Przypomnienia o porzuconym koszyku",
                  "Rabaty i promocje — kody, zniżki procentowe, darmowa wysyłka",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Integracje */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Integracje płatności i logistyki</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Dobieramy integracje do platformy i potrzeb Twojego sklepu.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { category: "Płatności", items: "Przelewy24, PayU, Stripe, Skrill, Apple Pay, Google Pay" },
                  { category: "Kurierzy", items: "InPost, DPD, GLS, DHL, FedEx, Paczkomat" },
                  { category: "Marketplace", items: "Allegro, Amazon, eBay, Marketplacer" },
                  { category: "Marketing", items: "Google Shopping, Facebook Ads, Pixel tracking" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-6 bg-orange-50 rounded-lg border border-orange-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.category}</h3>
                    <p className="text-sm text-gray-600">{item.items}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Wycena */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Od czego zależy wycena sklepu?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Nie mamy sztywnego cennika. Wycenę przygotowujemy po rozmowie o zakresie projektu.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Zakres i katalog",
                    features: [
                      "Platforma (WooCommerce, Shopify, PrestaShop i inne)",
                      "Liczba produktów, kategorii i wariantów",
                      "Import danych produktowych",
                      "Projekt graficzny: szablon czy projekt od zera",
                    ],
                  },
                  {
                    name: "Integracje",
                    features: [
                      "Bramki płatności",
                      "Firmy kurierskie i paczkomaty",
                      "Marketplace (np. Allegro)",
                      "Systemy ERP/CRM i automatyzacje",
                    ],
                  },
                  {
                    name: "Wsparcie po starcie",
                    features: [
                      "Szkolenie z obsługi panelu",
                      "Zakres i czas opieki technicznej",
                      "Hosting i domena (koszty dostawców osobno)",
                      "Budżet reklamowy płacony platformom zawsze osobno",
                    ],
                  },
                ].map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-lg p-8 border-2 transition-all border-gray-200 bg-white"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{pkg.name}</h3>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg">
                  <Link to="/kontakt">
                    Porozmawiajmy o zakresie
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Process */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Proces budowy sklepu</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Od pierwszej konsultacji do uruchomienia sklepu.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  { num: "1", title: "Konsultacja", desc: "Poznajemy Twoje produkty, konkurencję, cele", time: "1 tydzień" },
                  { num: "2", title: "Projekt", desc: "Wireframe, design, flow zakupowy", time: "2 tygodnie" },
                  { num: "3", title: "Budowa", desc: "Kodowanie, integracje, przesyłanie produktów", time: "3-4 tygodnie" },
                  { num: "4", title: "Testowanie", desc: "QA, płatności, kurierzy, SEO check", time: "1 tydzień" },
                  { num: "5", title: "Launch", desc: "DNS, SSL, monitoring, training zespołu", time: "1-2 dni" },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{step.desc}</p>
                    <p className="text-orange-600 font-semibold text-sm">{step.time}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">FAQ o e-commerce</h2>
              <p className="text-xl text-gray-600 text-center mb-16">Odpowiadamy na pytania o sklepy internetowe.</p>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Ile kosztuje sklep internetowy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Nie mamy sztywnego cennika. Koszt zależy od platformy, liczby produktów, projektu graficznego i potrzebnych integracji (płatności, kurierzy, Allegro, ERP). Wycenę przygotowujemy po rozmowie o zakresie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Jaka platforma e-commerce jest najlepsza?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Zależy od Ciebie. WooCommerce dla małych, Shopify dla szybkiego wdrożenia, PrestaShop dla elastyczności, Magento dla gigantów. Pomagamy wybrać idealną dla Twojej sytuacji.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy możesz zadbać o integracje płatności i kurierów?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Oczywiście. Integrujemy popularne bramki płatności (np. Przelewy24, PayU, Stripe) i firmy kurierskie (np. InPost, DPD, GLS, DHL) — dobór zależy od platformy i Twoich potrzeb.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy będzie SEO dla sklepu?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Tak. Optymalizujemy kategorii, meta-tagi, strukturę URLi,Schema markup. Przygotowujemy sklep technicznie pod wyszukiwarki, ale nie gwarantujemy konkretnych pozycji w Google. Możesz też dodać kampanię Google Shopping.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy będę mógł sprzedawać na Allegro z tego samego sklepu?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Tak, możemy zintegrować sklep z Allegro API. Edytujesz produkty raz, a pojawiają się na Allegro i Twoim sklepie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Co to jest dropshipping i czy mogę to zrobić?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Dropshipping to sprzedaż bez magazynu — hurtownia wysyła produkt bezpośrednio do klienta. Tak, możemy to zintegrowań, ale preferujemy tradycyjne e-commerce gdzie masz kontrolę.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </FadeInView>

        {/* Related */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Powiązane artykuły</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Czytaj więcej o e-commerce.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {[
                  {
                    title: "Jak założyć sklep internetowy",
                    excerpt: "Kompletny poradnik dla początkujących. Od pomysłu, przez rejestrację, do pierwszej sprzedaży.",
                  },
                  {
                    title: "Ile zarabia średni sklep online",
                    excerpt: "Rzeczywiste liczby: marża, koszty, czasy zwrotu z inwestycji, strategie wzrostu.",
                  },
                ].map((article, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <a href="/blog" className="text-orange-600 font-semibold flex items-center group-hover:gap-2 gap-1 transition-all">
                      Przeczytaj <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        <ContactSection
        />
      </Layout>
    </>
  );
}
