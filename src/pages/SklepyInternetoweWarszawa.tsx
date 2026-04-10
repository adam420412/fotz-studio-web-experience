import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ShoppingCart, CreditCard, Truck, BarChart3, Settings,
  CheckCircle2, MapPin, Globe, Smartphone, Zap, Shield
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const platforms = [
  { name: "Shopify", desc: "Dla firm chcących szybko startować z e-commerce", ideal: "Startupy, branża fashion, D2C" },
  { name: "WooCommerce", desc: "Elastyczny sklep na WordPressie — pełna kontrola", ideal: "MŚP, branże usługowe" },
  { name: "PrestaShop", desc: "Rozbudowany open-source dla większych asortymentów", ideal: "Hurtownie, sklepy 1000+ SKU" },
  { name: "Custom (React/Next)", desc: "Sklep szyty na miarę — unikalny UX i performance", ideal: "Marki premium, SaaS, złożone B2B" }
];

const features = [
  { icon: Smartphone, title: "Responsywny design", desc: "Mobile-first — ponad 60% zakupów online w Warszawie odbywa się na telefonie. Twój sklep musi wyglądać i działać perfekcyjnie na każdym urządzeniu." },
  { icon: CreditCard, title: "Integracje płatności", desc: "PayU, Przelewy24, Stripe, PayPal, BLIK, Apple Pay. Wdrożymy bramki płatności odpowiednie dla Twojego rynku i grupy docelowej." },
  { icon: Truck, title: "Dostawa i logistyka", desc: "Integracje z DHL, InPost, DPD, GLS. Automatyczne śledzenie przesyłek, etykiety kurierskie i zarządzanie zwrotami." },
  { icon: BarChart3, title: "Analityka sprzedaży", desc: "GA4, Hotjar, piksel Meta. Śledzenie konwersji, lejków zakupowych i źródeł ruchu — dane, które realnie wspierają decyzje sprzedażowe." },
  { icon: Settings, title: "Integracje ERP/CRM", desc: "Połączenie z systemami magazynowymi (SubiektGT, Comarch), CRM i marketplace'ami (Allegro, Amazon, Ceneo)." },
  { icon: Shield, title: "Bezpieczeństwo i RODO", desc: "Certyfikat SSL, zgodność z RODO, regulamin i polityka prywatności. Twój sklep bezpieczny prawnie i technicznie." }
];

const faqItems = [
  {
    question: "Ile kosztuje stworzenie sklepu internetowego w Warszawie?",
    answer: "Koszt zależy od platformy i funkcjonalności. Sklep na Shopify lub WooCommerce to od 8 000 zł. Dedykowane rozwiązania custom zaczynają się od 25 000 zł. Każdą wycenę poprzedzamy rozmową o Twoich potrzebach i planowanym asortymencie."
  },
  {
    question: "Czy agencja z Poznania może tworzyć sklep dla firmy z Warszawy?",
    answer: "Zdecydowanie tak — pracujemy zdalnie z firmami z całej Polski. Spotkania prowadzimy online przez Google Meet lub Teams. Jeśli projekt tego wymaga, przyjeżdżamy do Warszawy. Ponad 40% naszych klientów pochodzi spoza Poznania."
  },
  {
    question: "Jak długo trwa stworzenie sklepu internetowego?",
    answer: "Sklep na gotowej platformie (Shopify/WooCommerce) robimy w 4–8 tygodni. Rozwiązanie custom zajmuje 2–4 miesiące. Czas zależy od liczby kategorii, integracji i skali customizacji."
  },
  {
    question: "Czy zajmujecie się też SEO i marketingiem dla sklepów z Warszawy?",
    answer: "Tak — po wdrożeniu oferujemy pozycjonowanie sklepu (SEO e-commerce), kampanie Google Shopping, Meta Ads i email marketing. Warszawski rynek jest wysoce konkurencyjny, dlatego szczególnie polecamy kompleksowe podejście łączące UX, SEO i kampanie."
  },
  {
    question: "Czy pomożecie z migracją istniejącego sklepu?",
    answer: "Tak, migrujemy sklepy między platformami (np. PrestaShop → Shopify) z zachowaniem struktury URL i przekierowań SEO, historii zamówień i danych klientów."
  },
  {
    question: "Czy po uruchomieniu sklepu mogę samodzielnie dodawać produkty?",
    answer: "Oczywiście — wszystkie nasze sklepy mają panel administracyjny, z którym możesz samodzielnie zarządzać produktami, cenami, zamówieniami i treściami. Dostarczamy szkolenie online z obsługi systemu."
  }
];

export default function SklepyInternetoweWarszawa() {
  return (
    <Layout>
      <SEOHead
        title="Sklepy Internetowe Warszawa | E-commerce dla firm | Fotz Studio"
        description="Tworzymy sklepy internetowe dla firm z Warszawy. Shopify, WooCommerce, PrestaShop i custom e-commerce. Integracje płatności, dostaw i SEO. Bezpłatna wycena."
        canonical="https://fotz.pl/uslugi/sklepy-internetowe/warszawa"
        keywords="sklepy internetowe Warszawa, tworzenie sklepu internetowego Warszawa, e-commerce Warszawa, sklep online Warszawa, Shopify Warszawa, WooCommerce Warszawa, sklep www Warszawa, agencja e-commerce Warszawa"
      />

      <ServiceSchema
        name="Sklepy Internetowe Warszawa"
        description="Tworzenie sklepów internetowych dla firm z Warszawy — Shopify, WooCommerce, PrestaShop i dedykowane rozwiązania e-commerce."
        provider="Fotz Studio"
        areaServed="Warszawa"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Sklepy Internetowe Warszawa", url: "https://fotz.pl/uslugi/sklepy-internetowe/warszawa" }
        ]}
      />
      <FAQSchema items={faqItems.map(i => ({ question: i.question, answer: i.answer }))} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#75143F]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#0F3053]/10 blur-3xl pointer-events-none" />

        <div className="container px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#75143F]/20 border border-[#75143F]/30 text-sm text-foreground/80">
                <MapPin className="w-4 h-4" /> Warszawa i cała Polska
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
            >
              Sklepy Internetowe{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                Warszawa
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tworzymy profesjonalne sklepy internetowe dla firm z Warszawy i Mazowsza.
              Od wyboru platformy, przez projekt UX/UI, po integracje płatności, dostaw i SEO — wszystko w jednym miejscu.
            </motion.p>

            <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Warszawski rynek e-commerce jest jednym z najbardziej konkurencyjnych w Polsce — dlatego Twój sklep musi być nie tylko ładny, ale też szybki, dobrze wypozycjonowany i zoptymalizowany pod konwersję.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90 text-white">
                <Link to="/kontakt">
                  Bezpłatna wycena sklepu <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">Zobacz nasze realizacje</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-[#75143F]/10 via-background to-[#0F3053]/10 border-y border-foreground/10">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
          >
            {[
              { value: "50+", label: "sklepów wdrożonych" },
              { value: "4 platformy", label: "Shopify, Woo, Presta, Custom" },
              { value: "8+ lat", label: "doświadczenia w e-commerce" },
              { value: "40%+", label: "klientów spoza Poznania" }
            ].map((s, i) => (
              <motion.div key={i} variants={fadeIn}>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-foreground/60">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Dlaczego firmy z Warszawy wybierają{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  Fotz Studio?
                </span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Performance = sprzedaż", desc: "Nasze sklepy ładują się w mniej niż 2 sekundy. W Warszawie, gdzie klienci są niecierpliwi i mają wybór — szybkość to przewaga konkurencyjna." },
                { icon: Globe, title: "SEO od pierwszego dnia", desc: "Techniczne SEO jest wbudowane w każdy sklep — struktury URL, dane strukturalne, mapy strony, optymalizacja Core Web Vitals." },
                { icon: BarChart3, title: "Dane i konwersja", desc: "GA4 + śledzenie e-commerce, Hotjar, testy A/B. Projektujemy pod konwersję, nie pod estetykę — choć estetyka też jest ważna." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-foreground/10 bg-card/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/10">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Platformy e-commerce, w których{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  się specjalizujemy
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Doradzamy wybór platformy dopasowanej do Twojego modelu biznesowego, budżetu i planów rozwoju.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {platforms.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">{p.name}</h3>
                      <p className="text-foreground/70 text-sm mb-2">{p.desc}</p>
                      <span className="text-xs bg-[#75143F]/10 text-[#75143F] px-2 py-1 rounded-full">
                        Idealne dla: {p.ideal}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0F3053]/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Co zawiera{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  nasz sklep internetowy?
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl bg-background border border-foreground/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-foreground/70 text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                FAQ — Sklep Internetowy Warszawa
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10"
                >
                  <h3 className="font-heading font-semibold text-foreground mb-3 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#75143F] flex-shrink-0 mt-0.5" />
                    {item.question}
                  </h3>
                  <p className="text-foreground/70 text-sm pl-7">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#75143F] to-[#0F3053]">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Gotowy na własny sklep w Warszawie?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 mb-8">
              Umów bezpłatną konsultację — omówimy Twoje potrzeby i dobierzemy platformę dopasowaną do Twojego biznesu.
              Obsługujemy klientów z całej Polski.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#75143F] hover:bg-white/90 font-semibold">
                <Link to="/kontakt">
                  Bezpłatna wycena <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/realizacje">Zobacz realizacje</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Internal linking */}
      <section className="py-12 border-t border-border/30 bg-card/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi i lokalizacje</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Strony internetowe Warszawa", to: "/uslugi/strony-internetowe/warszawa" },
              { label: "Sklepy internetowe Poznań", to: "/uslugi/sklepy-internetowe/poznan" },
              { label: "Sklepy internetowe Kraków", to: "/uslugi/sklepy-internetowe/krakow" },
              { label: "Agencja SEO Poznań", to: "/agencja-seo-poznan" },
              { label: "Google Ads", to: "/uslugi/google-ads" },
              { label: "E-commerce — tworzenie sklepów", to: "/uslugi/ecommerce" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
