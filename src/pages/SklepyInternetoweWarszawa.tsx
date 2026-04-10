import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ShoppingCart, CreditCard, Truck, BarChart3, Settings,
  CheckCircle2, MapPin, Globe, Smartphone, Zap, Shield, Search,
  Users, Award, TrendingUp, Code, Palette
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
    desc: "Najszybszy start sprzedaży online — gotowa infrastruktura, hosting i bezpieczeństwo w cenie. Idealny dla marek chcących skalować sprzedaż bez zaplecza IT.",
    ideal: "Startupy, fashion, D2C, ekspansja zagraniczna"
  },
  {
    name: "WooCommerce",
    desc: "Elastyczny sklep na WordPressie — pełna kontrola nad kodem, nieograniczone możliwości integracji. Świetny wybór dla firm, które rozwijają już istniejący content.",
    ideal: "MŚP, sklepy 100–10 000 SKU, branże usługowe"
  },
  {
    name: "PrestaShop",
    desc: "Rozbudowany open-source dla dużych asortymentów i złożonych procesów logistycznych. Sprawdza się w hurcie i dystrybucji z wieloma magazynami.",
    ideal: "Hurtownie, dystrybutorzy, sklepy 1 000+ SKU"
  },
  {
    name: "Custom (React / Next.js)",
    desc: "Sklep e-commerce zaprojektowany od zera — unikalny UX, maksymalna wydajność i dowolna architektura. Dla projektów, gdzie gotowe rozwiązania nie wystarczają.",
    ideal: "Marki premium, headless commerce, złożone B2B"
  }
];

const features = [
  {
    icon: Smartphone,
    title: "Mobile-first design",
    desc: "Ponad 65% zakupów online pochodzi z urządzeń mobilnych. Projektujemy sklepy od widoku telefonu — perfekcyjna responsywność i UX na każdym ekranie."
  },
  {
    icon: CreditCard,
    title: "Integracje płatności",
    desc: "PayU, Przelewy24, Stripe, PayPal, BLIK, Apple Pay, Google Pay. Wdrażamy bramki płatnicze odpowiednie dla Twojego rynku i grupy docelowej."
  },
  {
    icon: Truck,
    title: "Logistyka i dostawa",
    desc: "Integracje z DHL, InPost, DPD, GLS, Furgonetka. Automatyczne etykiety, śledzenie przesyłek i obsługa zwrotów wbudowane w sklep."
  },
  {
    icon: BarChart3,
    title: "Analityka konwersji",
    desc: "GA4, Hotjar, Microsoft Clarity, piksel Meta. Śledzenie lejków zakupowych, porzuconych koszyków i źródeł ruchu — dane do podejmowania decyzji sprzedażowych."
  },
  {
    icon: Settings,
    title: "Integracje ERP i marketplace",
    desc: "Połączenie z systemami magazynowymi (Subiekt GT, Comarch, SAP), CRM i platformami sprzedaży (Allegro, Amazon, Ceneo, Google Shopping)."
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo i RODO",
    desc: "Certyfikat SSL, regulamin, polityka prywatności, zgodność z RODO. Sklep bezpieczny prawnie i technicznie — gotowy na audyt e-commerce."
  }
];

const process = [
  {
    number: "01",
    title: "Analiza biznesu i wybór platformy sklepu",
    desc: "Rozmawiamy o Twoim biznesie, asortymencie i celach sprzedażowych. Analizujemy konkurencję i specyfikę warszawskiego rynku e-commerce — wybieramy platformę sklepu internetowego najlepiej dopasowaną do Twoich potrzeb i budżetu."
  },
  {
    number: "02",
    title: "Projekt graficzny UX/UI sklepu internetowego",
    desc: "Projektujemy architekturę sklepu, podstrony kategorii, kartę produktu i ścieżkę zakupową. Projekt graficzny, makiety i prototypy — zanim zaczniemy kodować, wiesz jak sklep będzie wyglądał na każdym urządzeniu."
  },
  {
    number: "03",
    title: "Wdrożenie sklepu i integracje techniczne",
    desc: "Tworzymy sklep internetowy, wdrażamy platformę e-commerce, integrujemy systemami płatności, logistykę, ERP i marketing automation. Testy wydajności sklepu na urządzeniach mobilnych i desktopowych."
  },
  {
    number: "04",
    title: "Uruchomienie i marketing sklepu",
    desc: "Uruchamiamy sklep internetowy, szkolimy zespół z obsługi panelu i konfigurujemy analitykę konwersji. Opcjonalnie: kampanie Google Shopping, Meta Ads i pozycjonowania twojego sklepu w wyszukiwarce Google."
  }
];

const faqItems = [
  {
    question: "Ile kosztuje stworzenie sklepu internetowego w Warszawie?",
    answer: "Koszt stworzenia sklepu zależy od platformy i zakresu funkcjonalności. Profesjonalny sklep internetowy na Shopify lub WooCommerce z podstawowymi integracjami to od 8 000 zł. Rozbudowany sklep z customowym designem i integracjami ERP — od 20 000 zł. Dedykowane rozwiązanie (sklep na Next.js/React) zaczyna się od 35 000 zł. Każdą wycenę poprzedzamy bezpłatną rozmową — cena zależy od zakresu projektu, nie od miasta."
  },
  {
    question: "Jak długo trwa stworzenie sklepu internetowego?",
    answer: "Wdrożenie sklepu internetowego na Shopify lub WooCommerce zajmuje 4–8 tygodni. Sklep z customowym designem i rozbudowanymi integracjami — 8–16 tygodni. Rozwiązania dedykowane (headless, custom backend) wymagają 3–6 miesięcy. Czas realizacji sklepu zależy od liczby podstron, kategorii i zewnętrznych integracji."
  },
  {
    question: "Czy agencja z Poznania może tworzyć sklepy internetowe dla firm z Warszawy?",
    answer: "Tak — tworzymy sklepy internetowe dla klientów z całej Polski, w tym z Warszawy i Mazowsza. Wszystkie etapy projektu realizujemy online (Google Meet, Teams, Figma, GitHub). Przy wdrożeniach wymagających pracy on-site przyjeżdżamy do Warszawy. Ponad 40% naszych klientów e-commerce pochodzi spoza Poznania — format zdalny nie obniża jakości sklepu."
  },
  {
    question: "Którą platformę e-commerce wybrać dla sklepu internetowego w Warszawie?",
    answer: "Wybór platformy zależy od Twojego biznesu. Shopify to najlepszy wybór dla klientów chcących szybko uruchomić sklep i skalować sprzedaż bez zaplecza IT — prosty w obsłudze, stabilny. WooCommerce sprawdza się dla firm z istniejącą witryną WordPress i potrzebą elastyczności sklepu. PrestaShop wybierają hurtownie z dużym asortymentem. Sklep custom (Next.js) to opcja dla marek premium i B2B z zaawansowanymi wymaganiami. Oferujemy bezpłatną konsultację doboru platformy."
  },
  {
    question: "Czy zajmujecie się też pozycjonowaniem i marketingiem sklepu internetowego?",
    answer: "Tak — jesteśmy agencją full-service. Po wdrożeniu sklepu internetowego możemy prowadzić jego marketing: pozycjonowania SEO (Google Organic), kampanie Google Ads (Shopping, Search), Meta Ads, email marketing i social media. Twój sklep bez ruchu nie sprzedaje — kompleksowo oferujemy marketing sklepu jako kontynuację wdrożenia."
  },
  {
    question: "Czy tworzycie sklepy z integracją Allegro i systemów ERP?",
    answer: "Tak — integrujemy sklepy internetowe z Allegro, Amazon, Ceneo i Google Shopping. Możemy skonfigurować synchronizację zamówieniami i stanami magazynowymi między sklepem a platformami zewnętrznymi. Integracja sklepu z systemem ERP (Subiekt GT, Comarch) to standard w naszych wdrożeniach dla klientów z Warszawy i Mazowsza."
  }
];

export default function SklepyInternetoweWarszawa() {
  return (
    <Layout>
      <SEOHead
        title="Tworzenie Sklepów Internetowych Warszawa | E-commerce | Fotz Studio"
        description="Tworzenie sklepów internetowych dla firm z Warszawy. Shopify, WooCommerce, PrestaShop i sklepy custom. Integracje płatności, logistyki i ERP. Wycena bezpłatna."
        canonical="https://fotz.pl/uslugi/sklepy-internetowe/warszawa"
        keywords="tworzenie sklepów internetowych Warszawa, sklep internetowy Warszawa, wdrożenie e-commerce Warszawa, agencja e-commerce Warszawa, Shopify Warszawa, WooCommerce Warszawa, sklep online Warszawa"
      />

      <ServiceSchema
        name="Tworzenie Sklepów Internetowych Warszawa"
        description="Projektowanie i wdrażanie sklepów internetowych dla firm z Warszawy. Shopify, WooCommerce, PrestaShop, rozwiązania custom. Pełne integracje i wsparcie po uruchomieniu."
        provider="Fotz Studio"
        areaServed="Warszawa"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Sklepy internetowe", url: "https://fotz.pl/uslugi/sklepy-internetowe" },
          { name: "Warszawa", url: "https://fotz.pl/uslugi/sklepy-internetowe/warszawa" }
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
                <MapPin className="w-4 h-4 text-primary" /> Warszawa i cała Polska
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Tworzenie Sklepów Internetowych{" "}
              <span className="text-gradient">Warszawa</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tworzymy sklepy internetowe dla firm z Warszawy i Mazowsza — profesjonalne, szybkie i gotowe na sprzedaż.
              Shopify, WooCommerce, PrestaShop i sklepy custom — z pełnymi integracjami systemami płatności, logistyki i ERP.
            </motion.p>

            <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Sprzedaż online w Polsce rośnie rok do roku. Firmy z Warszawy, które stworzenie sklepu internetowego
              traktują jako inwestycję — z dobrym UX, pozycjonowania SEO i integracją marketingową — budują przewagę
              zanim zrobi to konkurencja. Tworzymy sklepy, które sprzedają.
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
              { value: "4–16 tyg.", label: "czas wdrożenia standardowego sklepu" },
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
                <span className="text-gradient">tworzymy sklepy internetowe</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nie ma jednej najlepszej platformy dla każdego biznesu. Pomagamy wybrać rozwiązanie
                dopasowane do Twojego asortymentu, skali i budżetu.
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
                Co wchodzi w skład{" "}
                <span className="text-gradient">każdego wdrożenia sklepu internetowego?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tworzymy sklepy internetowe gotowe na sprzedaż od pierwszego dnia — profesjonalny sklep internetowy
                z integracjami, analityką konwersji i pełnym zabezpieczeniem prawnym.
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
                Jak wygląda{" "}
                <span className="text-gradient">proces tworzenia sklepu?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Od rozmowy o Twoim biznesie do uruchomienia sklepu gotowego na sprzedaż —
                każdy etap jest udokumentowany i zatwierdzany przez Ciebie.
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
                Dlaczego klienci z Warszawy zlecają nam{" "}
                <span className="text-gradient">tworzenie sklepów internetowych?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tworzymy sklepy internetowe kompleksowo — od projektu graficznego przez wdrożenie sklepu
                po marketing i wsparcie techniczne. Twój sklep w jednym miejscu.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Własny zespół — sklep bez podwykonawców",
                  desc: "Tworzymy sklepy internetowe własnym zespołem developerów i designerów — bez podwykonawców. Jeden punkt kontaktu, pełna odpowiedzialność za każdy sklep od wdrożenia do hostingu."
                },
                {
                  icon: TrendingUp,
                  title: "Sklep internetowy + marketing = całość",
                  desc: "Wdrożenie sklepu to dopiero start. Oferujemy marketing twojego sklepu (pozycjonowania SEO, Google Ads, Meta Ads) jako kontynuację projektu — klienci nie muszą szukać kolejnej agencji."
                },
                {
                  icon: Users,
                  title: "Wsparcie sklepu po uruchomieniu",
                  desc: "Każdy sklep internetowy objęty jest wsparciem technicznym. Monitorujemy wydajność sklepu, reagujemy na błędy i rozwijamy funkcjonalność sklepu zgodnie z potrzebami biznesu klienta."
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
                Pytania o tworzenie sklepów internetowych w Warszawie
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
              Zacznijmy tworzyć Twój sklep internetowy w Warszawie
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 mb-8">
              Bezpłatna konsultacja e-commerce — 30 minut, zero zobowiązań.
              Omówimy platformę, zakres funkcjonalności i realny budżet wdrożenia.
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
              { label: "Sklepy internetowe Kraków", to: "/uslugi/sklepy-internetowe/krakow" },
              { label: "Strony internetowe Warszawa", to: "/uslugi/strony-internetowe/warszawa" },
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
