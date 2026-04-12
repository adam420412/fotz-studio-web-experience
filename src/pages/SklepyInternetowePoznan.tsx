import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ShoppingCart, CreditCard, Truck, BarChart3, Settings,
  CheckCircle2, MapPin, Globe, Smartphone, Zap, Shield
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, FAQSchema, OrganizationSchema} from "@/components/seo/StructuredData";

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
  { icon: Smartphone, title: "Responsywny design", desc: "Mobile-first — ponad 60% zakupów online odbywa się na telefonie. Twój sklep musi wyglądać i działać perfekcyjnie na każdym urządzeniu." },
  { icon: CreditCard, title: "Integracje płatności", desc: "PayU, Przelewy24, Stripe, PayPal, BLIK, Apple Pay. Wdrożymy bramki płatności odpowiednie dla Twojego rynku i grupy docelowej." },
  { icon: Truck, title: "Dostawa i logistyka", desc: "Integracje z DHL, InPost, DPD, GLS. Automatyczne śledzenie przesyłek, etykiety kurierskie i zarządzanie zwrotami." },
  { icon: BarChart3, title: "Analityka sprzedaży", desc: "GA4, Hotjar, piksel Meta. Śledzenie konwersji, lejków zakupowych i źródeł ruchu — dane, które realnie wspierają decyzje sprzedażowe." },
  { icon: Settings, title: "Integracje ERP/CRM", desc: "Połączenie z systemami magazynowymi (SubiektGT, Comarch), CRM i marketplace'ami (Allegro, Amazon, Ceneo)." },
  { icon: Shield, title: "Bezpieczeństwo i RODO", desc: "Certyfikat SSL, zgodność z RODO, regulamin i polityka prywatności. Twój sklep bezpieczny prawnie i technicznie." }
];

const faqItems = [
  {
    question: "Ile kosztuje stworzenie sklepu internetowego w Poznaniu?",
    answer: "Koszt zależy od platformy i funkcjonalności. Sklep na Shopify lub WooCommerce to od 8 000 zł. Dedykowane rozwiązania custom zaczynają się od 25 000 zł. Każdą wycenę poprzedzamy rozmową o Twoich potrzebach i planowanym asortymencie."
  },
  {
    question: "Jak długo trwa stworzenie sklepu internetowego?",
    answer: "Sklep na gotowej platformie (Shopify/WooCommerce) robimy w 4–8 tygodni. Rozwiązanie custom zajmuje 2–4 miesiące. Czas zależy od liczby kategorii, integracji i skali customizacji."
  },
  {
    question: "Czy zajmujecie się też SEO i marketingiem dla sklepów?",
    answer: "Tak — po wdrożeniu oferujemy pozycjonowanie sklepu (SEO e-commerce), kampanie Google Shopping, Meta Ads i email marketing. Możemy być kompleksowym partnerem od technologii po sprzedaż."
  },
  {
    question: "Czy pomożecie z migracją istniejącego sklepu?",
    answer: "Tak, migrujemy sklepy między platformami (np. PrestaShop → Shopify) z zachowaniem struktury URL i przekierowań SEO, historii zamówień i danych klientów."
  },
  {
    question: "Czy po uruchomieniu sklepu mogę samodzielnie dodawać produkty?",
    answer: "Oczywiście — wszystkie nasze sklepy mają panel administracyjny, z którym możesz samodzielnie zarządzać produktami, cenami, zamówieniami i treściami. Dostarczamy szkolenie z obsługi systemu."
  }
];

export default function SklepyInternetowePoznan() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Sklepy Internetowe Poznań — Tworzenie E-commerce i Sklepów Online | Fotz Studio"
        description="Tworzenie sklepów internetowych Poznań — e-commerce WooCommerce, Shopify, PrestaShop dla firm z Poznania. Projektowanie sklepów online z integracjami…"
        canonical="https://fotz.pl/uslugi/sklepy-internetowe/poznan"
        keywords="sklepy internetowe Poznań, tworzenie sklepu internetowego Poznań, e-commerce Poznań, sklep online Poznań, Shopify Poznań, WooCommerce Poznań, sklep www Poznań, platforma e-commerce Poznań, PrestaShop Poznań, pozycjonowanie sklepu internetowego Poznań, wdrożenie sklepu internetowego Poznań"
      />

      <ServiceSchema
        name="Sklepy Internetowe Poznań"
        description="Tworzenie sklepów internetowych dla firm z Poznania — Shopify, WooCommerce, PrestaShop i dedykowane rozwiązania e-commerce."
        provider="Fotz Studio"
        areaServed="Poznań"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" },
          { name: "Sklepy Internetowe Poznań", url: "https://fotz.pl/uslugi/sklepy-internetowe/poznan" }
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
                <MapPin className="w-4 h-4" /> Plac Wolności 16, Poznań
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
            >
              Sklepy Internetowe{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                Poznań
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Tworzymy profesjonalne sklepy internetowe dla firm z Poznania i Wielkopolski.
              Od wyboru platformy, przez projekt UX/UI, po integracje płatności, dostaw i SEO — wszystko w jednym miejscu.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90 text-white">
                <Link to="/kontakt">
                  Bezpłatna wycena sklepu <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/uslugi/strony-internetowe/ecommerce">Więcej o e-commerce</Link>
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
              { value: "160+", label: "opinii 5★ w Google" }
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

      {/* Platforms */}
      <section className="py-20 md:py-32 bg-background">
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
                FAQ — Sklep Internetowy Poznań
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
              Gotowy na własny sklep w Poznaniu?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 mb-8">
              Umów bezpłatną konsultację — omówimy Twoje potrzeby i dobierzemy platformę dopasowaną do Twojego biznesu.
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

      {/* Internal linking — related services */}
      <section className="py-12 border-t border-border/30 bg-card/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Strony internetowe Poznań", to: "/uslugi/strony-internetowe/poznan" },
              { label: "Agencja SEO Poznań", to: "/agencja-seo-poznan" },
              { label: "Agencja marketingowa Poznań", to: "/agencja-marketingowa-poznan" },
              { label: "Google Ads", to: "/uslugi/google-ads" },
              { label: "E-commerce — tworzenie sklepów", to: "/uslugi/ecommerce" },
              { label: "Pozycjonowanie stron WWW", to: "/seo/pozycjonowanie" },
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

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Sklepy internetowe Poznań — tworzenie e-commerce dla firm z Wielkopolski
            </h2>
            <p className="text-muted-foreground mb-4">
              Tworzenie sklepów internetowych w Poznaniu to nasza specjalność. Fotz Studio
              projektuje i buduje sklepy e-commerce dla firm z Poznania i całej Wielkopolski,
              które chcą sprzedawać online. Tworzymy sklepy na platformach WooCommerce,
              Shopify i PrestaShop — dobieramy technologię do specyfiki biznesu, budżetu
              i planowanej skali sprzedaży.
            </p>
            <p className="text-muted-foreground mb-6">
              Sklep internetowy to nie tylko strona — to system sprzedażowy z integracjami
              płatności (Przelewy24, PayU, Stripe), logistyki (InPost, DPD, GLS),
              fakturowania i marketing automation. Budujemy kompletne rozwiązania e-commerce
              gotowe do sprzedaży od pierwszego dnia.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              WooCommerce, Shopify i sklep na miarę — sklep online dla firmy z Poznania
            </h2>
            <p className="text-muted-foreground mb-4">
              WooCommerce to najpopularniejsza platforma sklepowa na świecie — idealna
              dla firm szukających elastyczności i kontroli nad sklepem. Shopify sprawdza
              się dla firm ceniących prostotę zarządzania i szybkie wdrożenie. Dla dużych
              projektów e-commerce tworzymy dedykowane sklepy internetowe dopasowane
              do unikalnych wymagań biznesowych.
            </p>
            <p className="text-muted-foreground mb-6">
              Każdy sklep internetowy tworzymy z naciskiem na UX i konwersję — przejrzyste
              kategorie, szybkie wyszukiwanie produktów, zoptymalizowany checkout i mobilność.
              SEO dla sklepów internetowych wdrażamy od pierwszego dnia, by sklep zaczął
              generować ruch organiczny możliwie szybko.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              E-commerce Poznań — sklep internetowy z obsługą, hostingiem i SEO
            </h2>
            <p className="text-muted-foreground mb-4">
              Tworzenie sklepu internetowego w Poznaniu to dla nas nie jednorazowa usługa
              — to długoterminowe partnerstwo. Oferujemy hosting, opiekę techniczną,
              aktualizacje i rozwój sklepu. Kampanie Google Shopping, SEO produktowe
              i email marketing dla e-commerce realizujemy we własnym zakresie.
            </p>
            <p className="text-muted-foreground">
              Sklep internetowy dla firmy z Poznania od Fotz Studio to gwarancja jakości,
              terminowości i skuteczności. Umów się na bezpłatną konsultację i wycenę
              projektu e-commerce — stworzymy sklep, który naprawdę sprzedaje.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/performance-marketing/google-ads" className="text-primary hover:underline font-medium text-sm">→ Google Ads</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
    </>
  );
}
