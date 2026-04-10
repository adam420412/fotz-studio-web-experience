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
    desc: "Najszybszy sposób na uruchomienie sprzedaży online. Gotowa infrastruktura, bezpieczeństwo i skalowalność w abonamencie. Idealny dla firm chcących szybko testować rynek i pozyskiwać nowych klientów.",
    ideal: "Startupy, fashion, D2C, sklepy z ekspansją za granicę"
  },
  {
    name: "WooCommerce",
    desc: "Sklep na bazie WordPress — pełna elastyczność i kontrola nad kodem. Świetnie integruje się z istniejącym content marketingiem i SEO. Dobry wybór przy tworzeniu stron i sklepów internetowych na jednej platformie.",
    ideal: "MŚP, sklepy 100–10 000 SKU, branże usługowe"
  },
  {
    name: "PrestaShop",
    desc: "Rozbudowany open-source dla złożonych modeli dystrybucji, wielu magazynów i dużego asortymentu. Sprawdza się przy zaawansowanym zarządzaniu ofertą i cenami.",
    ideal: "Hurtownie, dystrybutorzy, sklepy 1 000+ SKU"
  },
  {
    name: "Custom (React / Next.js)",
    desc: "Sklep projektowany od zera — unikalny UX, headless commerce, maksymalna wydajność. Dla marek premium i B2B z niestandardowymi wymaganiami. Traktujemy go jak zaawansowaną aplikację internetową.",
    ideal: "Marki premium, projekty B2B, złożona architektura"
  }
];

const features = [
  {
    icon: Smartphone,
    title: "Responsywny design mobile-first",
    desc: "Większość ruchu e-commerce pochodzi z telefonów i urządzeń mobilnych. Projektujemy UX sklepów od widoku mobilnego — szybkość ładowania strony i perfekcyjna ścieżka zakupowa na każdym ekranie."
  },
  {
    icon: CreditCard,
    title: "Bramki płatności i formularz zamówień",
    desc: "PayU, Przelewy24, Stripe, PayPal, BLIK, Apple Pay, Google Pay. Konfigurujemy formularz zamówień i płatności dopasowane do Twoich klientów i rynków, na których sprzedajesz."
  },
  {
    icon: Truck,
    title: "Integracje logistyczne",
    desc: "DHL, InPost, DPD, GLS, Furgonetka — automatyczne etykiety, śledzenie i obsługa zwrotów wbudowane w panel sklepu. Integrujemy sklep z firmami kurierskimi bez dodatkowych wtyczek."
  },
  {
    icon: BarChart3,
    title: "Analityka i optymalizacja konwersji",
    desc: "GA4, Hotjar, piksel Meta, Microsoft Clarity. Pomagamy zoptymalizować lejki zakupowe — mapujemy porzucone koszyki i źródła ruchu, by optymalizacja sklepu przekładała się na wyższe wyniki wyszukiwania i sprzedaż."
  },
  {
    icon: Settings,
    title: "Integracje ERP i marketplace",
    desc: "Subiekt GT, Comarch, SAP, Allegro, Amazon, Ceneo — zarządzanie stanami magazynowymi, zamówieniami i cenami między sklepem a systemami zewnętrznymi."
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo, hosting i RODO",
    desc: "Certyfikat SSL, hosting na wydajnym serwerze, regulamin, polityka prywatności i zgodność z RODO. Sklep gotowy prawnie i technicznie — bez ryzyka kar za brak wymaganych dokumentów."
  }
];

const process = [
  {
    number: "01",
    title: "Analiza Twojego biznesu i wybór platformy",
    desc: "Rozmawiamy o Twoim modelu sprzedaży, asortymencie i planach rozwoju. Każda oferta dla klientów z Krakowa jest przygotowywana indywidualnie — dobieramy profesjonalny zakres platformy e-commerce i integracji do potrzeb Twojej firmy."
  },
  {
    number: "02",
    title: "Jak projektujemy sklep internetowy — UX/UI",
    desc: "Projektowanie i tworzenie architektury sklepu: kategorie produktowe, karta produktu, ścieżka zakupowa. Projektujemy sklepy tak, by były funkcjonalne i konwertowały — makiety i prototypy zatwierdzasz przed startem kodowania. Funkcjonalny sklep zaczyna się od dobrego projektu UX."
  },
  {
    number: "03",
    title: "Wdrożenie i integracje techniczne",
    desc: "Kodujemy sklep internetowy jako kompletną aplikację — wdrażamy platformę, integrujemy płatności, logistykę i systemy ERP. Testy wydajności, bezpieczeństwa i responsywności na wszystkich urządzeniach. Sklep online gotowy do startu sprzedaży."
  },
  {
    number: "04",
    title: "Uruchomienie i wsparcie marketingowe",
    desc: "Uruchamiamy sklep, szkolimy Twój zespół i konfigurujemy analitykę. Strategia marketingowa od pierwszego dnia — Google Shopping, SEO i Meta Ads, by potencjalni klienci trafiali do sklepu natychmiast. Chętnie współpracujemy przy pełnym marketingu po wdrożeniu."
  }
];

const faqItems = [
  {
    question: "Jak stworzyć sklep internetowy w Krakowie — koszt i czas realizacji?",
    answer: "Koszt wdrożenia zależy od platformy i funkcjonalności. Sklep na Shopify lub WooCommerce z podstawowymi integracjami to od 8 000 zł. Rozbudowany sklep z customowym designem i integracją ERP — od 20 000 zł. Dedykowane rozwiązania custom (React/Next.js) zaczynają się od 35 000 zł. Każdą wycenę poprzedzamy bezpłatną rozmową o Twoich potrzebach. Cena nie zależy od miasta — zależy od zakresu projektu."
  },
  {
    question: "Czas wdrożenia sklepu internetowego — ile trwa projekt?",
    answer: "Sklep na Shopify lub WooCommerce z typowym zakresem funkcjonalności robimy w 4–8 tygodni. Rozwiązania z customowym designem i rozbudowanymi integracjami — 8–16 tygodni. Dedykowane projekty (headless, custom backend) wymagają 3–6 miesięcy. Czas zawsze ustalamy przed startem projektu i wpisujemy w harmonogram."
  },
  {
    question: "Tworzenie sklepów internetowych w Krakowie — czy agencja spoza miasta poradzi sobie?",
    answer: "Tak — współpracujemy zdalnie z firmami z całej Polski, w tym z Krakowa i Małopolski. Wszystkie etapy projektu realizujemy online (Google Meet, Teams, Figma, GitHub). W razie potrzeby przyjeżdżamy do Krakowa. Ponad 40% naszych klientów pochodzi spoza Poznania i ta forma współpracy działa bez zarzutu."
  },
  {
    question: "Którą platformę e-commerce warto wybrać dla firmy z Krakowa?",
    answer: "Zależy od specyfiki Twojego biznesu. Shopify to najlepszy wybór dla firm chcących szybko uruchomić sprzedaż online i skalować bez działu IT. WooCommerce — dla firm z istniejącym WordPressem i potrzebą elastyczności. PrestaShop — dla hurtowni i dystrybutorów z dużym asortymentem. Sklep custom (Next.js) — dla marek premium i projektów B2B. Dobieramy platformę wspólnie podczas bezpłatnej konsultacji."
  },
  {
    question: "Pozycjonowania i marketing sklepu internetowego — co oferujecie po wdrożeniu?",
    answer: "Tak, jesteśmy agencją full-service. Po uruchomieniu sklepu możemy prowadzić: SEO i pozycjonowanie sklepu w Google, kampanie Google Ads (Shopping, Search, Display), Meta Ads i remarketing, email marketing. Sklep bez ruchu nie sprzedaje — dlatego proponujemy wdrożenie marketingu równolegle z budową sklepu."
  },
  {
    question: "Czy integrujecie sklepy z Allegro i systemami ERP?",
    answer: "Tak — integrujemy sklepy z Allegro, Amazon, Ceneo i Google Shopping. Synchronizujemy stany magazynowe i zamówienia z systemami ERP (Subiekt GT, Comarch, SAP). Integracja z marketplace'ami to standard w naszych wdrożeniach dla firm z Krakowa i Małopolski — szczególnie w handlu hurtowym i dystrybucji."
  },
  {
    question: "Agencja czy freelancer — kto lepiej wykona sklep internetowy?",
    answer: "Agencja interaktywna zapewnia kompleksowość — developer, designer, SEO i wsparcie po starcie w jednym miejscu. Freelancer może być tańszy, ale specjalizuje się zwykle w jednej dziedzinie. Przy tworzeniu stron i sklepów internetowych z rozbudowanymi integracjami ERP, wielojęzycznością i dużym wolumenem zamówień agencja daje pewność terminów i ciągłości. Profesjonalne tworzenie sklepów internetowych przez freelancera bywa ryzykowne przy złożonych projektach — polecamy agencję dla pełnych wdrożeń e-commerce."
  },
  {
    question: "Wycena sklepu internetowego — cena i co na nią wpływa?",
    answer: "Cena sklepu internetowego zależy od: platformy (Shopify, WooCommerce, Custom), zakresu integracji (płatności, ERP, marketplace), liczby produktów i customowego designu. Własny sklep internetowy na Shopify to od 8 000 zł, rozbudowany sklep custom — od 35 000 zł. Swój sklep internetowy zawsze wyceniamy indywidualnie po bezpłatnej konsultacji — nie stosujemy gotowych pakietów cenowych."
  },
  {
    question: "Tworzenie sklepów www dla sklepów stacjonarnych — jak to wygląda?",
    answer: "Tak — tworzenie sklepów www dla firm posiadających sklepy stacjonarne to nasza specjalizacja. Omnichannel wymaga integracji systemu kasowego z platformą internetową. Tworzenie stron i sklepów internetowych dla retail obejmuje synchronizację stanów magazynowych, click&collect i obsługę promocji online i offline. Tworzenie stron internetowych to inne zadanie niż pełna platforma e-commerce — sklepów www dla branży retail dostarczamy kompleksowo."
  },
  {
    question: "Jak zoptymalizować sklep internetowy pod SEO?",
    answer: "Aby zoptymalizować sklep internetowy pod SEO, kluczowe są: szybkość ładowania strony (Core Web Vitals), optymalizacja techniczna kodu, struktura URL i kategorii oraz unikalne opisy produktów. Pomagamy zoptymalizować sklep tak, by strona www sklepu wyświetlała się wysoko w wynikach wyszukiwania Google. Optymalizacja obejmuje: szybkość serwera (hosting), kompresję obrazów, minifikację kodu i wdrożenie SSL. Sklep online zoptymalizować można po audycie SEO — oferujemy go oddzielnie lub w pakiecie z wdrożeniem."
  },
  {
    question: "Strona www a sklep internetowy — czym różni się projektowanie sklepów internetowych?",
    answer: "Projektowanie sklepów internetowych Kraków to specjalistyczny proces — inny niż standardowe tworzenie stron internetowych. Sklep internetowy wymaga zaprojektowania: ścieżki zakupowej, karty produktu, koszyka i integracji z systemami płatności oraz wysyłki. Proces tworzenia sklepu internetowego jest bardziej złożony technicznie niż projektowanie i tworzenie zwykłej strony internetowej. Tworzenie stron www kończy się na contencie i formularzu kontaktowym — sklep musi aktywnie sprzedawać. Projektujemy sklepy jako aplikacje internetowe zoptymalizowane pod konwersję i widoczność w Google dla klientów z Krakowa i całej Polski."
  }
];

export default function SklepyInternetoweKrakow() {
  return (
    <Layout>
      <SEOHead
        title="Sklepy Internetowe Kraków — Tworzenie Sklepów E-commerce | Fotz Studio"
        description="Tworzenie sklepów internetowych Kraków — sklep online WooCommerce, Shopify dla firm z Krakowa. E-commerce z SEO, integracjami płatności i obsługą. Fotz Studio."
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
              Profesjonalne tworzenie sklepów internetowych dla firm z Krakowa i Małopolski — Shopify, WooCommerce, PrestaShop i sklepy custom. Kompleksowy sklep online z integracjami płatności, logistyki i ERP gotowy do sprzedaży od pierwszego dnia.
            </motion.p>

            <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Kraków to jeden z najprężniej rozwijających się rynków e-commerce w Polsce. Nasza oferta obejmuje tworzenie sklepów www dla klientów z Krakowa i Małopolski — od prostych sklepów internetowych po rozbudowane platformy B2B. Własny sklep internetowy to dziś podstawa sprzedaży i pozyskiwania nowych klientów w sieci.
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
                Profesjonalne platformy e-commerce i sprzedaż online —{" "}
                <span className="text-gradient">tworzenie sklepów dla firmy z Krakowa</span>
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
                Co zawiera projektowanie i{" "}
                <span className="text-gradient">wdrożenie sklepu internetowego Kraków — SEO i pozycjonowania?</span>
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
                Jak stworzyć sklep internetowy dla{" "}
                <span className="text-gradient">Twojego biznesu — proces tworzenia sklepu internetowego</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Przejrzysty proces z dokumentacją na każdym etapie — wiesz co się dzieje
                od pierwszej rozmowy do uruchomienia sklepu. Procesu tworzenia nie przyspieszamy kosztem jakości.
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
                Dlaczego klientów z Krakowa wybierają{" "}
                <span className="text-gradient">naszą agencję do tworzenia sklepów internetowych w Krakowie?</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Profesjonalny własny zespół — bez podwykonawców",
                  desc: "Sklepy internetowe tworzymy własnym zespołem — to profesjonalizm w każdym szczególe. Tworzenie sklepów internetowych dla klientów realizujemy bez podwykonawców. Masz jeden punkt kontaktu i pełną odpowiedzialność za projekt."
                },
                {
                  icon: TrendingUp,
                  title: "E-commerce + marketing razem",
                  desc: "Swój sklep internetowy powinieneś traktować jako główny kanał sprzedaży firmy w internecie. Po wdrożeniu możemy prowadzić pełny marketing — SEO, Google Ads, Meta Ads, email. Jeden partner dla całego cyklu sprzedaży."
                },
                {
                  icon: Users,
                  title: "Wsparcie techniczne po starcie",
                  desc: "Każdy sklep objęty jest wsparciem technicznym. Monitorujemy wydajność, reagujemy na błędy i rozwijamy funkcjonalny sklep zgodnie z potrzebami klienta — stworzyć sklep to dopiero początek naszej współpracy."
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
                Najczęstsze pytania — tworzenie sklepów internetowych Kraków: wycena, sklepów www i strona www
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
              Sklepy internetowe Kraków — tworzenie e-commerce dla firm z Małopolski
            </h2>
            <p className="text-muted-foreground mb-4">
              Tworzenie sklepów internetowych w Krakowie dla firm z Małopolski i całej
              Polski południowej to oferta Fotz Studio. Kraków to drugie co do wielkości
              centrum biznesowe w Polsce — rynek e-commerce jest tu bardzo dynamiczny.
              Projektujemy i budujemy sklepy internetowe na WooCommerce, Shopify
              i platformach dedykowanych, dostosowane do specyfiki krakowskich firm.
            </p>
            <p className="text-muted-foreground mb-6">
              Sklep online dla firmy z Krakowa budujemy z myślą o długoterminowym
              sukcesie w wyszukiwarce. Strukturę kategorii, opisy produktów i techniczne
              SEO wdrażamy od pierwszego dnia, by sklep generował ruch organiczny
              bez zależności od płatnych kampanii.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              E-commerce Kraków — WooCommerce, Shopify i sklep na miarę
            </h2>
            <p className="text-muted-foreground mb-4">
              Dla firm z Krakowa dopasowujemy platformę e-commerce do ich potrzeb:
              WooCommerce dla firm szukających elastyczności i pełnej kontroli,
              Shopify dla firm ceniących prostotę zarządzania, dedykowane rozwiązania
              dla złożonych projektów e-commerce z unikalnymi wymaganiami.
            </p>
            <p className="text-muted-foreground mb-6">
              Projektowanie sklepów internetowych dla firm z Krakowa uwzględnia
              lokalne preferencje konsumentów, integracje z popularnymi bramkami
              płatności (PayU, Przelewy24, BLIK) i firmami kurierskimi (InPost, DPD).
              Optymalizacja UX i szybkości ładowania to standard każdej realizacji.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Sklep internetowy Kraków z SEO, marketingiem i stałą obsługą
            </h2>
            <p className="text-muted-foreground">
              Fotz Studio to partner e-commerce dla firm z Krakowa oferujący pełen
              pakiet usług: budowa sklepu, SEO, kampanie Google Shopping, Meta Ads
              i email marketing. Stała obsługa techniczna i regularne aktualizacje
              zapewniają bezpieczeństwo i rozwój sklepu przez lata. Skontaktuj się
              z nami po bezpłatną konsultację i wycenę projektu e-commerce dla Twojej firmy.
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
  );
}
