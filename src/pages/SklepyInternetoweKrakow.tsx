import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ShoppingCart, CreditCard, Truck, BarChart3, Settings,
  CheckCircle2, MapPin, Globe, Smartphone, Zap, Shield,
  Users, TrendingUp, Code, Building2
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
  {
    name: "Shopify",
    desc: "Najszybszy sposób na uruchomienie sprzedaży online. Gotowa infrastruktura, bezpieczeństwo i skalowalność w abonamencie. Idealny dla firm chcących szybko testować rynek.",
    ideal: "Startupy, fashion, D2C, sklepy z ekspansją za granicę"
  },
  {
    name: "WooCommerce",
    desc: "Sklep na bazie WordPress — pełna elastyczność i kontrola nad kodem. Świetnie integruje się z istniejącym content marketingiem i SEO.",
    ideal: "MŚP, sklepy 100–10 000 SKU, branże usługowe"
  },
  {
    name: "PrestaShop",
    desc: "Rozbudowany open-source dla złożonych modeli dystrybucji, wielu magazynów i dużego asortymentu.",
    ideal: "Hurtownie, dystrybutorzy, sklepy 1 000+ SKU"
  },
  {
    name: "Custom (React / Next.js)",
    desc: "Sklep projektowany od zera — unikalny UX, headless commerce, maksymalna wydajność. Dla marek premium i B2B z niestandardowymi wymaganiami.",
    ideal: "Marki premium, projekty B2B, złożona architektura"
  }
];

const features = [
  {
    icon: Smartphone,
    title: "Responsywny design mobile-first",
    desc: "Większość ruchu e-commerce pochodzi z telefonów. Projektujemy UX sklepów od widoku mobilnego — perfekcyjna czytelność i ścieżka zakupowa na każdym ekranie."
  },
  {
    icon: CreditCard,
    title: "Bramki płatności",
    desc: "PayU, Przelewy24, Stripe, PayPal, BLIK, Apple Pay, Google Pay. Konfigurujemy płatności dopasowane do Twoich klientów i rynków, na których sprzedajesz."
  },
  {
    icon: Truck,
    title: "Integracje logistyczne",
    desc: "DHL, InPost, DPD, GLS, Furgonetka — automatyczne etykiety, śledzenie i obsługa zwrotów wbudowane w panel sklepu."
  },
  {
    icon: BarChart3,
    title: "Analityka i śledzenie konwersji",
    desc: "GA4, Hotjar, piksel Meta, Microsoft Clarity. Mapujemy lejki zakupowe, porzucone koszyki i źródła ruchu — by optymalizować sprzedaż na danych."
  },
  {
    icon: Settings,
    title: "Integracje ERP i marketplace",
    desc: "Subiekt GT, Comarch, SAP, Allegro, Amazon, Ceneo — synchronizacja stanów magazynowych, zamówień i cen między sklepem a systemami zewnętrznymi."
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo i RODO",
    desc: "Certyfikat SSL, regulamin, polityka prywatności i zgodność z RODO. Sklep gotowy prawnie i technicznie — bez ryzyka kar za brak wymaganych dokumentów."
  }
];

const process = [
  {
    number: "01",
    title: "Analiza biznesu i wybór platformy",
    desc: "Rozmawiamy o Twoim modelu sprzedaży, asortymencie i planach rozwoju. Dobieramy platformę e-commerce i zakres integracji dopasowany do potrzeb firmy z Krakowa i okolic."
  },
  {
    number: "02",
    title: "Projekt UX/UI sklepu",
    desc: "Projektujemy architekturę sklepu, kategorie produktowe, kartę produktu i ścieżkę zakupową. Makiety i prototypy — zatwierdzasz wygląd przed startem kodowania."
  },
  {
    number: "03",
    title: "Wdrożenie i integracje techniczne",
    desc: "Kodujemy sklep, wdrażamy platformę, integrujemy płatności, logistykę i systemy ERP. Testy wydajności, bezpieczeństwa i responsywności na wszystkich urządzeniach."
  },
  {
    number: "04",
    title: "Uruchomienie i wsparcie marketingowe",
    desc: "Uruchamiamy sklep, szkolimy Twój zespół i konfigurujemy analitykę. Na życzenie: kampanie Google Shopping, SEO sklepu i Meta Ads — start marketingu równolegle z wdrożeniem."
  }
];

const faqItems = [
  {
    question: "Ile kosztuje stworzenie sklepu internetowego w Krakowie?",
    answer: "Koszt wdrożenia zależy od platformy i funkcjonalności. Sklep na Shopify lub WooCommerce z podstawowymi integracjami to od 8 000 zł. Rozbudowany sklep z customowym designem i integracją ERP — od 20 000 zł. Dedykowane rozwiązania custom (React/Next.js) zaczynają się od 35 000 zł. Każdą wycenę poprzedzamy bezpłatną rozmową o Twoich potrzebach. Cena nie zależy od miasta — zależy od zakresu projektu."
  },
  {
    question: "Jak długo trwa wdrożenie sklepu internetowego?",
    answer: "Sklep na Shopify lub WooCommerce z typowym zakresem funkcjonalności robimy w 4–8 tygodni. Rozwiązania z customowym designem i rozbudowanymi integracjami — 8–16 tygodni. Dedykowane projekty (headless, custom backend) wymagają 3–6 miesięcy. Czas zawsze ustalamy przed startem projektu i wpisujemy w harmonogram."
  },
  {
    question: "Czy agencja z Poznania tworzy sklepy internetowe dla firm z Krakowa?",
    answer: "Tak — współpracujemy zdalnie z firmami z całej Polski, w tym z Krakowa i Małopolski. Wszystkie etapy projektu realizujemy online (Google Meet, Teams, Figma, GitHub). W razie potrzeby przyjeżdżamy do Krakowa. Ponad 40% naszych klientów pochodzi spoza Poznania i ta forma współpracy działa bez zarzutu."
  },
  {
    question: "Którą platformę e-commerce warto wybrać dla firmy z Krakowa?",
    answer: "Zależy od specyfiki Twojego biznesu. Shopify to najlepszy wybór dla firm chcących szybko uruchomić sprzedaż online i skalować bez działu IT. WooCommerce — dla firm z istniejącym WordPressem i potrzebą elastyczności. PrestaShop — dla hurtowni i dystrybutorów z dużym asortymentem. Sklep custom (Next.js) — dla marek premium i projektów B2B. Dobieramy platformę wspólnie podczas bezpłatnej konsultacji."
  },
  {
    question: "Czy oferujecie marketing sklepu po jego wdrożeniu?",
    answer: "Tak, jesteśmy agencją full-service. Po uruchomieniu sklepu możemy prowadzić: SEO i pozycjonowanie sklepu w Google, kampanie Google Ads (Shopping, Search, Display), Meta Ads i remarketing, email marketing. Sklep bez ruchu nie sprzedaje — dlatego proponujemy wdrożenie marketingu równolegle z budową sklepu."
  },
  {
    question: "Czy integrujecie sklepy z Allegro i systemami ERP?",
    answer: "Tak — integrujemy sklepy z Allegro, Amazon, Ceneo i Google Shopping. Synchronizujemy stany magazynowe i zamówienia z systemami ERP (Subiekt GT, Comarch, SAP). Integracja z marketplace'ami to standard w naszych wdrożeniach dla firm z Krakowa i Małopolski — szczególnie w handlu hurtowym i dystrybucji."
  }
];

export default function SklepyInternetoweKrakow() {
  return (
    <Layout>
      <SEOHead
        title="Tworzenie Sklepów Internetowych Kraków | E-commerce | Fotz Studio"
        description="Tworzenie sklepów internetowych dla firm z Krakowa. Shopify, WooCommerce, PrestaShop i sklepy custom. Integracje płatności, logistyki i ERP. Wycena bezpłatna."
        canonical="https://fotz.pl/uslugi/sklepy-internetowe/krakow"
        keywords="tworzenie sklepów internetowych Kraków, sklep internetowy Kraków, wdrożenie e-commerce Kraków, agencja e-commerce Kraków, Shopify Kraków, WooCommerce Kraków, sklep online Kraków"
      />

      <ServiceSchema
        name="Tworzenie Sklepów Internetowych Kraków"
        description="Projektowanie i wdrażanie sklepów internetowych dla firm z Krakowa i Małopolski. Shopify, WooCommerce, PrestaShop, rozwiązania custom. Pełne integracje i wsparcie po uruchomieniu."
        provider="Fotz Studio"
        areaServed="Kraków"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Sklepy internetowe", url: "https://fotz.pl/uslugi/sklepy-internetowe" },
          { name: "Kraków", url: "https://fotz.pl/uslugi/sklepy-internetowe/krakow" }
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#0F3053]/8 blur-3xl pointer-events-none" />

        <div className="container px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
                <MapPin className="w-4 h-4 text-primary" /> Kraków i Małopolska
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Tworzenie Sklepów Internetowych{" "}
              <span className="text-gradient">Kraków</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Projektujemy i wdrażamy sklepy e-commerce dla firm z Krakowa i Małopolski.
              Shopify, WooCommerce, PrestaShop i rozwiązania custom — z pełnymi integracjami płatności, logistyki i ERP.
            </motion.p>

            <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Kraków to jeden z najprężniej rozwijających się ośrodków gospodarczych w Polsce —
              dynamiczny rynek e-commerce, silny sektor produkcyjny i rozwijające się startupy technologiczne.
              Twój sklep internetowy powinien być gotowy na ten wzrost.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/kontakt">
                  Bezpłatna wycena sklepu <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">Zobacz realizacje e-commerce</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card/30 border-y border-border/30">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
          >
            {[
              { value: "80+", label: "wdrożonych sklepów e-commerce" },
              { value: "4", label: "platformy — Shopify, WC, PS, Custom" },
              { value: "4–16 tyg.", label: "czas realizacji standardowego projektu" },
              { value: "full-service", label: "wdrożenie + marketing sklepu" }
            ].map((s, i) => (
              <motion.div key={i} variants={fadeIn}>
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Platformy e-commerce, w których{" "}
                <span className="text-gradient">tworzymy sklepy dla firm z Krakowa</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pomagamy wybrać platformę e-commerce optymalną dla Twojego asortymentu,
                modelu sprzedaży i planów rozwoju — nie polecamy jednego rozwiązania dla wszystkich.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {platforms.map((p, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-lg">{p.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                  <div className="text-xs text-primary/80 font-medium bg-primary/5 px-3 py-1.5 rounded-lg inline-block">
                    Idealne dla: {p.ideal}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Co zawiera każde{" "}
                <span className="text-gradient">wdrożenie sklepu internetowego?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tworzymy sklepy gotowe do sprzedaży od pierwszego dnia — z integracjami,
                analityką konwersji i pełnym zabezpieczeniem prawnym dla polskiego rynku.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-background">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Jak przebiega{" "}
                <span className="text-gradient">tworzenie sklepu krok po kroku?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Przejrzysty proces z dokumentacją na każdym etapie — wiesz co się dzieje
                od pierwszej rozmowy do uruchomienia sklepu.
              </p>
            </motion.div>

            <div className="space-y-6">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-6 p-6 rounded-2xl border border-border/40 bg-card/20"
                >
                  <div className="text-4xl font-heading font-bold text-primary/20 shrink-0 leading-none">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Dlaczego firmy z Krakowa wybierają nas{" "}
                <span className="text-gradient">do tworzenia sklepów internetowych?</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Własny zespół, bez podwykonawców",
                  desc: "Sklepy internetowe tworzymy własnym zespołem developerów i designerów. Nie podzlecamy pracy na zewnątrz — masz jeden punkt kontaktu i pełną odpowiedzialność za projekt."
                },
                {
                  icon: TrendingUp,
                  title: "E-commerce + marketing razem",
                  desc: "Sklep bez ruchu nie sprzedaje. Po wdrożeniu możemy prowadzić pełny marketing — SEO, Google Ads, Meta Ads, email. Jeden partner dla całego cyklu sprzedaży online."
                },
                {
                  icon: Users,
                  title: "Wsparcie techniczne po starcie",
                  desc: "Każdy sklep objęty jest wsparciem technicznym. Monitorujemy wydajność, reagujemy na błędy i rozwijamy sklep wraz z Twoim biznesem — nie znikamy po uruchomieniu."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-background">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Pytania o tworzenie sklepów internetowych w Krakowie
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl border border-border/40 bg-card/20"
                >
                  <h3 className="font-heading font-semibold mb-3 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground pl-7">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/90 to-[#0F3053]/90">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Zacznijmy tworzyć Twój sklep internetowy w Krakowie
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 mb-8">
              Bezpłatna konsultacja e-commerce — 30 minut, zero zobowiązań.
              Omówimy platformę, zakres funkcjonalności i realny budżet wdrożenia dla Twojej firmy.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/kontakt">
                  Bezpłatna wycena <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/realizacje">Zobacz realizacje sklepów</Link>
              </Button>
            </motion.div>
            <motion.p variants={fadeIn} className="text-white/50 text-xs mt-6">
              Odpowiadamy w ciągu 24 godzin · Wycena zawsze bezpłatna
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Internal linking */}
      <section className="py-12 border-t border-border/30 bg-card/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Sklepy internetowe Warszawa", to: "/uslugi/sklepy-internetowe/warszawa" },
              { label: "Strony internetowe Kraków", to: "/uslugi/strony-internetowe/krakow" },
              { label: "Agencja marketingowa Warszawa", to: "/agencja-marketingowa-warszawa" },
              { label: "Pozycjonowanie SEO", to: "/seo/pozycjonowanie" },
              { label: "Google Ads", to: "/uslugi/google-ads" },
              { label: "Strony internetowe Poznań", to: "/uslugi/strony-internetowe" },
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
