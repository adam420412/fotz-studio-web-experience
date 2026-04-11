import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShoppingBag, Settings, Globe, Shield, BarChart2, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function SklepWooCommerce() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Sklep WooCommerce" },
  ];

  const features = [
    { icon: ShoppingBag, title: "Pełny sklep e-commerce", desc: "Produkty, kategorie, warianty, zdjęcia, opisy. Nieograniczona liczba produktów i zamówień." },
    { icon: Shield, title: "Bezpieczne płatności", desc: "Integracja z PayU, Przelewy24, BLIK, Stripe, PayPal. Certyfikat SSL w standardzie." },
    { icon: Globe, title: "SEO-friendly", desc: "WooCommerce + Yoast SEO = pełna kontrola nad optymalizacją kart produktów i kategorii dla Google." },
    { icon: Settings, title: "Panel administracyjny", desc: "Intuicyjne zarządzanie zamówieniami, klientami, stanami magazynowymi. Szkolenie gratis." },
    { icon: BarChart2, title: "Raporty i analityka", desc: "Wbudowane raporty sprzedaży, integracja z Google Analytics 4 i Google Search Console." },
    { icon: Zap, title: "Wysyłka i logistyka", desc: "Integracja z InPost, DPD, DHL, GLS. Automatyczne etykiety, śledzenie paczek, konfiguracja stref wysyłki." },
  ];

  const processSteps = [
    { step: "1", title: "Analiza i wycena", desc: "Omawiamy zakres sklepu, liczbę produktów, potrzebne integracje. Bezpłatna wycena w 24h." },
    { step: "2", title: "Design i UX", desc: "Projektujemy sklep pod konwersje — wygląd, nawigację, koszyk zakupowy. Makiety do akceptacji." },
    { step: "3", title: "Wdrożenie", desc: "Instalacja WordPress + WooCommerce, konfiguracja płatności, wysyłki, dodawanie produktów." },
    { step: "4", title: "Optymalizacja SEO", desc: "Konfiguracja Yoast SEO, schema markup dla produktów, mapa strony, optymalizacja prędkości." },
    { step: "5", title: "Testy i uruchomienie", desc: "Testy procesu zamówienia, płatności, wysyłki. Weryfikacja na urządzeniach mobilnych." },
    { step: "6", title: "Szkolenie i opieka", desc: "Szkolenie z obsługi panelu, dokumentacja, opcjonalna opieka techniczna po starcie." },
  ];

  const faqItems = [
    {
      question: "Co to jest WooCommerce?",
      answer:
        "WooCommerce to darmowa wtyczka e-commerce dla WordPress — najpopularniejsza platforma sklepów internetowych na świecie (28% wszystkich sklepów online). Daje pełną kontrolę nad funkcjonalnością, wyglądem i SEO. Instalujesz ją na własnym hostingu — brak prowizji od sprzedaży (poza prowizją bramki płatności). Elastyczna, skalowalna i wspierana przez ogromną społeczność deweloperów.",
    },
    {
      question: "Ile kosztuje sklep WooCommerce?",
      answer:
        "Koszt wdrożenia sklepu WooCommerce: mały sklep (do 100 produktów, podstawowe funkcje) 3000-8000 zł, średni sklep (100-500 produktów, integracje kurierskie) 6000-15 000 zł, duży sklep (500+ produktów, integracja ERP/fakturami) 10 000-30 000 zł. Koszty stałe: hosting 50-200 zł/mies., domena ok. 80 zł/rok, ewentualnie wtyczki premium 200-1000 zł/rok.",
    },
    {
      question: "WooCommerce czy Shopify?",
      answer:
        "WooCommerce: brak prowizji od sprzedaży, pełna kontrola kodu i SEO, większa elastyczność, wymaga własnego hostingu i dewelopera. Shopify: prostszy w obsłudze, hosting w cenie, prowizja 0.5-2% od każdej transakcji (jeśli nie używasz Shopify Payments, niedostępnego w Polsce), ograniczona customizacja. Dla polskich firm preferujemy WooCommerce — szczególnie gdy zależy na SEO i brak prowizji.",
    },
    {
      question: "Jak dodać płatności do WooCommerce?",
      answer:
        "Najpopularniejsze bramki płatności w Polsce dla WooCommerce: PayU (oficjalna integracja, BLIK, karty), Przelewy24 (przelew, BLIK, karty, raty), Stripe (karty, Apple Pay, Google Pay), PayPal (karty, PayPal Wallet). Instalacja przez wtyczkę + konfiguracja danych API z bramki. Certyfikat SSL wymagany — zazwyczaj dostępny gratis od hostingu.",
    },
    {
      question: "Czy mogę samodzielnie zarządzać sklepem WooCommerce?",
      answer:
        "Tak — WordPress i WooCommerce mają bardzo intuicyjny panel administratora. Dodawanie produktów, zarządzanie zamówieniami, generowanie raportów — wszystko bez wiedzy technicznej. Robimy szkolenie po uruchomieniu sklepu. Opcjonalnie oferujemy miesięczną opiekę techniczną (aktualizacje, backupy, bezpieczeństwo) jeśli nie chcesz martwić się technikaliami.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Sklep WooCommerce — tworzenie sklepów internetowych | fotz.pl"
        description="Sklep WooCommerce — profesjonalne wdrożenia e-commerce na WordPress. Płatności, wysyłka, SEO, integracje. Ceny od 3000 zł. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/sklep-woocommerce"
      />
      <ServiceSchema
        name="Sklep WooCommerce"
        description="Tworzenie sklepów internetowych na WooCommerce — wdrożenie, konfiguracja płatności i wysyłki, SEO, integracje z kurierami i systemami ERP"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-purple-900 bg-opacity-50 text-purple-300 px-3 py-1 rounded-full text-sm mb-4">
                <ShoppingBag className="w-4 h-4" />
                E-commerce
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sklep WooCommerce — zarabiaj w internecie
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tworzymy sklepy internetowe na WooCommerce — najpopularniejszej platformie e-commerce świata.
                Pełna kontrola, zero prowizji od sprzedaży, świetne SEO i intuicyjny panel zarządzania.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "od 3000 zł", label: "Cena wdrożenia" },
                  { value: "3-6 tyg.", label: "Czas realizacji" },
                  { value: "0%", label: "Prowizji od sprzedaży" },
                  { value: "WordPress", label: "Łatwa obsługa" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Bezpłatna wycena sklepu <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co zawiera sklep WooCommerce?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Każdy sklep to kompleksowe rozwiązanie — od projektu po uruchomienie i szkolenie.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-purple-600 mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Process */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Jak wygląda realizacja?</h2>
              <div className="space-y-4">
                {processSteps.map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-white p-5 rounded-lg border border-slate-200">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why WooCommerce */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dlaczego WooCommerce?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "28% wszystkich sklepów internetowych na świecie działa na WooCommerce",
                  "Brak prowizji od sprzedaży — każda złotówka trafia do Ciebie",
                  "Pełna kontrola nad kodem — nie jesteś zależny od platformy SaaS",
                  "Najlepsze SEO wśród platform e-commerce — Yoast SEO, schema markup",
                  "Ogromna społeczność i tysiące gotowych wtyczek i motywów",
                  "Niezależność — przeniesiesz sklep na dowolny hosting kiedy chcesz",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Sklep WooCommerce</h2>
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
          heading="Zacznij sprzedawać online"
          subheading="Bezpłatna wycena sklepu WooCommerce w 24 godziny. Opowiemy co potrzebujesz."
        />
      </Layout>
    </>
  );
}
