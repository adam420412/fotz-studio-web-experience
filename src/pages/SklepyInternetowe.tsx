import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ShoppingCart, CreditCard, Truck, BarChart3, Settings,
  CheckCircle2, Globe, Smartphone, Zap, Shield, Store, TrendingUp, Users
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
  {
    name: "Shopify",
    desc: "Najszybszy start — sklep online gotowy w tygodnie. Idealna platforma e-commerce dla firm, które chcą szybko wejść na rynek i skalować sprzedaż bez martwienia się o hosting.",
    ideal: "Startupy, marki D2C, branża fashion i beauty",
    tags: ["Szybki start", "Subskrypcja", "App Store"]
  },
  {
    name: "WooCommerce",
    desc: "Sklep internetowy zintegrowany z WordPressem — pełna kontrola nad treścią, SEO i kosztami. Własny sklep internetowy bez opłat miesięcznych od platformy.",
    ideal: "MŚP, blogi e-commerce, usługi + produkty",
    tags: ["Open-source", "SEO-friendly", "Brak opłat od transakcji"]
  },
  {
    name: "PrestaShop",
    desc: "Rozbudowana platforma open-source dla sklepów z dużym asortymentem. Obsługa hurtowni, magazynów, B2B i integracji ERP — budowa sklepów klasy enterprise.",
    ideal: "Hurtownie, sklepy 1000+ SKU, B2B",
    tags: ["Enterprise", "Multi-store", "ERP-ready"]
  },
  {
    name: "Custom (React/Next.js)",
    desc: "Sklep szyty na miarę — unikalny UX, maksymalny performance i pełna swoboda funkcjonalna. Profesjonalny sklep internetowy zbudowany od podstaw pod Twój model biznesowy.",
    ideal: "Marki premium, SaaS, złożone B2B, marketplace",
    tags: ["Unikatowy design", "Headless", "PWA-ready"]
  }
];

const process = [
  {
    step: "01",
    title: "Analiza i dobór platformy e-commerce",
    desc: "Rozmowa o Twoim biznesie, asortymencie, grupie klientów i budżecie. Dobieramy platformę e-commerce (Shopify, WooCommerce, PrestaShop lub custom), która realnie odpowiada Twoim potrzebom — nie przebudowujemy koła."
  },
  {
    step: "02",
    title: "Projektowanie UX/UI sklepu internetowego",
    desc: "Tworzymy makiety i projekt graficzny Twojego sklepu. Projektujemy ścieżkę zakupową, karty produktów i koszyk pod konwersję — każdy element ma prowadzić klienta do finalizacji zakupu."
  },
  {
    step: "03",
    title: "Budowa i wdrożenie sklepu — programowanie",
    desc: "Programujemy Twój sklep internetowy, konfigurujemy platformę, wdrażamy integracje płatności (PayU, Przelewy24, BLIK), dostaw (InPost, DHL, DPD) i systemów ERP/CRM. Obsługa techniczna od A do Z."
  },
  {
    step: "04",
    title: "Optymalizacja SEO i pozycjonowanie sklepu",
    desc: "Wdrażamy strukturę SEO — meta tagi, canonical, schematy danych produktowych, mapa sitemap, Core Web Vitals. Twój sklep od dnia zero jest gotowy do pozycjonowania w Google."
  },
  {
    step: "05",
    title: "Szkolenie i przekazanie własnego sklepu",
    desc: "Przekazujemy Ci gotowy sklep z pełnym szkoleniem z obsługi panelu administracyjnego. Wiesz, jak samodzielnie dodawać produkty, zarządzać zamówieniami i modyfikować treści."
  },
  {
    step: "06",
    title: "Opieka techniczna i rozwój e-commerce",
    desc: "Po wdrożeniu oferujemy opiekę techniczną, aktualizacje, nowe funkcjonalności i działania marketingowe — SEO, Google Ads, Meta Ads. Możemy być Twoim długofalowym partnerem e-commerce."
  }
];

const integrations = [
  { icon: CreditCard, title: "Bramki płatności", desc: "PayU, Przelewy24, Stripe, PayPal, BLIK, Apple Pay, Google Pay — wszystko, czego potrzebują Twoi klienci." },
  { icon: Truck, title: "Logistyka i dostawa", desc: "InPost (paczkomaty), DHL, DPD, GLS, Poczta Polska. Automatyczne etykiety, śledzenie przesyłek i obsługa zwrotów." },
  { icon: BarChart3, title: "Analityka i marketing", desc: "GA4, Google Tag Manager, piksel Meta, Hotjar. Pełne śledzenie konwersji i lejka zakupowego." },
  { icon: Settings, title: "ERP, CRM i marketplace", desc: "SubiektGT, Comarch, Allegro, Amazon, Ceneo, BaseLinker. Integracja systemów magazynowych z Twoim sklepem." },
  { icon: Smartphone, title: "Mobile i PWA", desc: "Twój sklep internetowy w wersji mobilnej działa jak aplikacja — szybko, płynnie i offline." },
  { icon: Shield, title: "Bezpieczeństwo i RODO", desc: "Certyfikat SSL, zgodność z RODO, regulamin e-commerce i polityka prywatności. Sklep bezpieczny prawnie i technicznie." }
];

const benefits = [
  { icon: TrendingUp, title: "Twój sklep zarabia 24/7", desc: "Profesjonalny sklep internetowy sprzedaje wtedy, gdy Ty śpisz. Automatyzacja zamówień, płatności i wysyłki pozwala skalować sprzedaż bez proporcjonalnego wzrostu kosztów obsługi." },
  { icon: Users, title: "Klienci z całej Polski i Europy", desc: "Własny sklep internetowy to brak geograficznych ograniczeń. Docierasz do klientów z każdego regionu Polski i — gdy jesteś gotowy — za granicę." },
  { icon: Globe, title: "Niezależność od marketplace'ów", desc: "Allegro bierze prowizję i decyduje o zasadach gry. Własny sklep online to Twoje dane, Twoi klienci i Twoje marże — bez pośredników." },
  { icon: Zap, title: "Szybkość i Core Web Vitals", desc: "Twój sklep ładuje się w mniej niż 2 sekundy. Szybkość to zarówno konwersja (każda sekunda opóźnienia to -7% sprzedaży), jak i czynnik rankingowy Google." },
  { icon: Store, title: "Sklep zintegrowany z SEO", desc: "Od architektury kategorii, przez opisy produktów po linkowanie wewnętrzne — budujemy sklepy internetowe, które organicznie rosną w wynikach wyszukiwania." },
  { icon: ShoppingCart, title: "Konwersja i UX zakupowy", desc: "Koszyk, checkout, karty produktów i cross-selling zaprojektowane pod maksymalną konwersję. Twój sklep nie tylko przyciąga ruch — zamienia go w sprzedaż." }
];

const cityLinks = [
  { label: "Sklepy internetowe Kraków", to: "/uslugi/sklepy-internetowe/krakow" },
  { label: "Sklepy internetowe Poznań", to: "/uslugi/sklepy-internetowe/poznan" },
  { label: "Sklepy internetowe Warszawa", to: "/uslugi/sklepy-internetowe/warszawa" },
  { label: "Sklepy internetowe Wrocław", to: "/uslugi/sklepy-internetowe/wroclaw" },
  { label: "Sklepy internetowe Gdańsk", to: "/uslugi/sklepy-internetowe/gdansk" }
];

const faqItems = [
  {
    question: "Ile kosztuje tworzenie sklepów internetowych?",
    answer: "Koszt tworzenia sklepu internetowego zależy od platformy i zakresu funkcjonalności. Sklep na Shopify lub WooCommerce to od 8 000–15 000 zł. PrestaShop i rozbudowane sklepy dla hurtowni — od 20 000 zł. Dedykowane rozwiązanie custom (React/Next.js) to 30 000–100 000+ zł. Każdą wycenę poprzedzamy bezpłatną rozmową."
  },
  {
    question: "Jak długo trwa założyć sklep internetowy od podstaw?",
    answer: "Czas potrzebny, żeby założyć sklep internetowy, zależy od złożoności projektu. Sklep na gotowej platformie (Shopify, WooCommerce) tworzymy w 4–8 tygodni. PrestaShop z integracjami ERP — 2–3 miesiące. Dedykowany sklep custom — 3–5 miesięcy. Harmonogram ustalamy na etapie wyceny."
  },
  {
    question: "Czy mogę samodzielnie zarządzać własnym sklepem internetowym?",
    answer: "Tak — każdy nasz sklep internetowy ma intuicyjny panel administracyjny (WooCommerce, PrestaShop backoffice, Shopify admin lub dedykowany CMS). Dostarczamy szkolenie z obsługi: dodawanie produktów, zarządzanie zamówieniami, edycja treści, obsługa promocji i kodów rabatowych. Twój sklep jest Twój — masz pełną kontrolę."
  },
  {
    question: "Jakie integracje płatności możecie wdrożyć?",
    answer: "Wdrażamy wszystkie popularne bramki płatności dostępne w Polsce: PayU, Przelewy24, Stripe, Tpay, PayPal, BLIK, Apple Pay i Google Pay. Integracja obejmuje też płatności ratalne (np. PayPo, Twisto). Obsługa płatności jest kluczową częścią każdego sklepu — dbamy o to, żeby klient mógł zapłacić tak, jak lubi."
  },
  {
    question: "Czy wdrożycie integrację z InPost lub innymi kurierami?",
    answer: "Tak — integrujemy Twój sklep internetowy z InPost (paczkomaty), DHL, DPD, GLS, UPS i Pocztą Polską. Wdrażamy automatyczne generowanie etykiet kurierskich, śledzenie przesyłek w panelu admina i powiadomienia e-mail dla klientów o statusie zamówienia."
  },
  {
    question: "Czy sklep będzie dobrze widoczny w Google — SEO?",
    answer: "Tak — budujemy sklepy internetowe z solidną podstawą SEO: poprawna struktura URL, optymalizacja meta tagów, schematy JSON-LD dla produktów i breadcrumbs, sitemap XML, przekierowania, Core Web Vitals i szybkość ładowania. Na tym fundamencie możemy prowadzić pozycjonowanie sklepu od pierwszego dnia po wdrożeniu."
  },
  {
    question: "Czy pomożecie z migracją istniejącego sklepu na inną platformę?",
    answer: "Tak — migrujemy sklepy między platformami (np. PrestaShop → Shopify, Magento → WooCommerce) z zachowaniem struktury URL i przekierowań 301, historii zamówień, bazy klientów i danych produktów. Migracja jest przeprowadzana tak, żeby nie stracić pozycji w Google."
  },
  {
    question: "Czy mogę sprzedawać przez własny sklep i Allegro jednocześnie?",
    answer: "Oczywiście — integrujemy Twój sklep internetowy z marketplace'ami: Allegro, Amazon, eBay i Ceneo. Synchronizacja stanów magazynowych, zamówień i cen działa automatycznie. Polecamy narzędzia takie jak BaseLinker do zarządzania wielokanałową sprzedażą."
  },
  {
    question: "Czy oferujecie opiekę techniczną po wdrożeniu sklepu?",
    answer: "Tak — oferujemy pakiety opieki technicznej: aktualizacje platformy i wtyczek, monitoring bezpieczeństwa, kopie zapasowe, drobne modyfikacje i wsparcie przy nowych funkcjonalnościach. Możemy też prowadzić marketing sklepu: SEO, Google Shopping, Meta Ads."
  },
  {
    question: "Jak wygląda tworzenie sklepu internetowego krok po kroku?",
    answer: "Proces tworzenia sklepu internetowego składa się z 6 etapów: (1) analiza potrzeb i dobór platformy e-commerce, (2) projektowanie UX/UI i makiety, (3) programowanie i budowa sklepu, (4) integracje płatności, dostaw i systemów zewnętrznych, (5) wdrożenie SEO i testy, (6) szkolenie z obsługi i przekazanie sklepu. Po wdrożeniu możemy prowadzić ciągły rozwój."
  },
  {
    question: "Jaką agencję wybrać do tworzenia sklepu internetowego?",
    answer: "Wybierając agencję e-commerce, zwróć uwagę na: portfolio zrealizowanych sklepów, doświadczenie z konkretną platformą (Shopify, WooCommerce, PrestaShop), podejście do SEO i konwersji, transparentność w wycenie i możliwość dalszej współpracy. Fotz Studio tworzy sklepy internetowe od 8 lat — możesz zobaczyć nasze realizacje i porozmawiać z naszymi klientami."
  },
  {
    question: "Czy możecie zaprojektować sklep dla branży B2B?",
    answer: "Tak — tworzymy sklepy internetowe B2B z dedykowanymi funkcjonalnościami: logowanie hurtowe, indywidualne cenniki dla klientów, system ofertowania, integracja z ERP (SubiektGT, Comarch), faktury automatyczne i panel dla przedstawicieli handlowych. Obsługa klienta B2B wymaga innego podejścia niż klasyczny sklep detaliczny."
  }
];

export default function SklepyInternetowe() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Tworzenie Sklepów Internetowych | Fotz Studio"
        description="Tworzenie sklepów internetowych dla firm — e-commerce na WooCommerce, Shopify, PrestaShop. Budowa sklepów online z SEO, integracjami płatności i obsługą…"
        canonical="https://fotz.pl/uslugi/sklepy-internetowe"
        keywords="tworzenie sklepów internetowych, sklep internetowy, budowa sklepu internetowego, projektowanie sklepu internetowego, e-commerce, własny sklep internetowy, założyć sklep internetowy, WooCommerce, Shopify, PrestaShop, platforma e-commerce, wdrożenie sklepu internetowego, agencja e-commerce, sklep online, sprzedaż online, sklep internetowy dla firmy, oprogramowanie sklepu internetowego"
      />

      <ServiceSchema
        name="Tworzenie Sklepów Internetowych"
        description="Projektowanie i budowa profesjonalnych sklepów internetowych — Shopify, WooCommerce, PrestaShop i dedykowane rozwiązania e-commerce z integracjami płatności, dostaw i SEO."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Tworzenie sklepów internetowych", url: "https://fotz.pl/uslugi/sklepy-internetowe" }
        ]}/>
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
                <ShoppingCart className="w-4 h-4" /> Agencja e-commerce — ponad 50 wdrożonych sklepów
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
            >
              Tworzenie{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                Sklepów Internetowych
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Projektujemy i budujemy profesjonalne <strong className="text-foreground">sklepy internetowe</strong>, które sprzedają.{" "}
              <strong className="text-foreground">Tworzenie sklepów internetowych</strong> na Shopify, WooCommerce i PrestaShop —
              dobieramy platformę e-commerce do Twojego modelu biznesowego i budżetu.
            </motion.p>
            <motion.p variants={fadeIn} className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
              Wdrożenie sklepu internetowego od projektu UX/UI, przez integracje płatności i dostaw, po SEO i marketing —
              kompleksowe budowanie sklepu online dla firm B2C i B2B. Własny sklep internetowy bez prowizji dla marketplace'ów.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90 text-white">
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
              { value: "50+", label: "sklepów internetowych wdrożonych" },
              { value: "4 platformy", label: "Shopify, WooCommerce, PrestaShop, Custom" },
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
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Profesjonalne platformy e-commerce — wybieramy{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  najlepszą dla Twojego biznesu
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Nie ma jednej idealnej platformy e-commerce — jest platforma idealna dla Twojego modelu biznesowego.
                Doradzamy wybór i budujemy sklep internetowy, który spełnia Twoje aktualne i przyszłe potrzeby.
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
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">{p.name}</h3>
                      <p className="text-foreground/70 text-sm mb-3">{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {p.tags.map((tag, ti) => (
                          <span key={ti} className="text-xs bg-[#0F3053]/10 text-[#0F3053] px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <span className="text-xs text-foreground/50">Idealne dla: {p.ideal}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#75143F]/5 to-background">
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
                Jak wygląda tworzenie sklepu internetowego —{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  proces krok po kroku
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Przejrzysty proces tworzenia sklepu internetowego — wiesz, co się dzieje na każdym etapie i kiedy możesz się spodziewać uruchomienia własnego sklepu online.
              </p>
            </motion.div>

            <div className="space-y-6">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-6 p-6 rounded-2xl bg-background border border-foreground/10 hover:border-[#75143F]/20 transition-all duration-300"
                >
                  <div className="text-4xl font-heading font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent flex-shrink-0 leading-none pt-1">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">{step.title}</h3>
                    <p className="text-foreground/70 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
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
                Integracje sklepu internetowego —{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  płatności, dostawa, analityka, ERP
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Profesjonalny sklep internetowy to nie tylko ładny design — to sprawnie działający ekosystem integracji,
                który automatyzuje procesy sprzedażowe i obniża koszty obsługi zamówień.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl bg-background border border-foreground/10 hover:border-[#75143F]/20 transition-all duration-300"
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

      {/* Benefits / Why own shop */}
      <section className="py-20 md:py-32 bg-background">
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
                Dlaczego własny sklep internetowy —{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  korzyści dla Twojego biznesu
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Własny sklep online to inwestycja, która zwraca się wielokrotnie — przez większe marże, własną bazę klientów i niezależność od platform marketplace.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-foreground/70 text-sm">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Fotz */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#75143F]/5 to-background">
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
                Dlaczego klienci wybierają nas jako{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  agencję e-commerce do tworzenia sklepów internetowych?
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Kompleksowa obsługa — od projektu po marketing",
                  desc: "Nie musisz koordynować wielu podwykonawców. Fotz Studio projektuje, programuje, wdraża SEO i prowadzi kampanie reklamowe dla Twojego sklepu internetowego — wszystko pod jednym dachem."
                },
                {
                  title: "Sklep zoptymalizowany pod konwersję od pierwszego dnia",
                  desc: "Projektujemy na podstawie danych, a nie intuicji. Każdy element Twojego sklepu online — od koszyka po checkout — jest testowany pod kątem maksymalnej konwersji zakupowej."
                },
                {
                  title: "SEO jako fundament, nie dodatek",
                  desc: "Budowa sklepu internetowego u nas zaczyna się od architektury informacji i struktury SEO. Twój sklep rośnie organicznie w Google już od uruchomienia — bez dodatkowych nakładów."
                },
                {
                  title: "Przejrzysta wycena i transparentny projekt",
                  desc: "Znasz budżet i harmonogram zanim zaczniemy. Żadnych ukrytych kosztów, żadnych niespodzianek. Tworzenie sklepu internetowego u nas to partnerska relacja, nie transakcja."
                },
                {
                  title: "8 lat doświadczenia — ponad 50 wdrożonych sklepów",
                  desc: "Budowaliśmy sklepy dla startupów, MŚP i firm z obrotem 10+ mln zł. Znamy typowe pułapki e-commerce i wiemy, jak ich unikać. Twój biznes jest w dobrych rękach."
                },
                {
                  title: "Wsparcie i rozwój po wdrożeniu sklepu",
                  desc: "Wdrożenie to nie koniec — to początek. Oferujemy opiekę techniczną, aktualizacje, nowe funkcjonalności i działania marketingowe (SEO, Google Shopping, Meta Ads) dla Twojego sklepu."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-4 p-6 rounded-2xl bg-background border border-foreground/10"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#75143F] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical quality */}
      <section className="py-20 bg-gradient-to-b from-background to-[#75143F]/5">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Responsywny sklep internetowy —{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  optymalizacja sklepu i widoczności w internecie
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Responsywny sklep internetowy to dziś standard, nie opcja — każdego sklepu internetowego mobile-first design bezpośrednio wpływa na konwersję i widoczności sklepu w internecie.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Optymalizacja sklepu — Core Web Vitals i szybkość",
                  desc: "Optymalizacja sklepu internetowego pod Core Web Vitals i szybkość ładowania to kluczowy czynnik rankingowy. Responsywny sklep internetowy ładujący się poniżej 2 sekund konwertuje nawet 2× lepiej niż wolna konkurencja. Wdrożenia sklepu zawsze obejmują pełne testowanie responsywności na wszystkich urządzeniach."
                },
                {
                  title: "Prowadzenie sklepu internetowego — funkcjonalności dla klienta",
                  desc: "Prowadzenie sklepu internetowego po wdrożeniu wymaga odpowiednich funkcjonalności sklepu: zarządzanie produktami, zamówieniami, promocjami i cenami. Projektujemy sklepów internetowych z myślą o łatwości prowadzenia sklepu przez klienta — intuicyjny panel bez potrzeby wiedzy technicznej."
                },
                {
                  title: "Zaawansowany sklep internetowy — proces budowy sklepu",
                  desc: "Zaawansowany sklep internetowy wymaga przemyślanego procesu budowy sklepu: architektury bazy danych, warstwy cache, CDN i API. Czas budowy sklepu internetowego zależy od złożoności — od 4 tygodni dla standardowego WooCommerce po 5 miesięcy dla custom e-commerce."
                },
                {
                  title: "Profesjonalne projektowanie sklepów internetowych",
                  desc: "Profesjonalne projektowanie sklepów internetowych to połączenie estetyki z funkcją. Po uruchomieniu sklepu internetowego prowadzimy ciągłą optymalizację sklepu internetowego — A/B testy, analiza lejka zakupowego i rozbudowa funkcjonalności sklepu internetowego na podstawie danych."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-4 p-6 rounded-2xl bg-background border border-foreground/10"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#75143F] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-gradient-to-b from-[#0F3053]/10 to-background">
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
                Tworzenie sklepów internetowych{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  w największych miastach Polski
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Pracujemy zdalnie z firmami z całej Polski — i stacjonarnie w miastach, gdzie mamy biura lub regularnie bywamy.
                Wybierz swoje miasto, aby dowiedzieć się więcej o naszej ofercie e-commerce.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cityLinks.map((city, i) => (
                <Link
                  key={i}
                  to={city.to}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-foreground/10 hover:border-[#75143F]/40 hover:bg-[#75143F]/5 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center flex-shrink-0">
                    <Store className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-[#75143F] transition-colors text-sm">
                    {city.label}
                  </span>
                  <ArrowRight className="w-4 h-4 ml-auto text-foreground/30 group-hover:text-[#75143F] transition-colors" />
                </Link>
              ))}
            </motion.div>
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
                FAQ — tworzenie sklepów internetowych: wycena, obsługa, platformy i SEO
              </h2>
              <p className="text-foreground/70">Najczęstsze pytania o budowę sklepu internetowego — odpowiadamy wyczerpująco.</p>
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
              Gotowy na własny sklep internetowy?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 mb-8 text-lg">
              Umów bezpłatną konsultację — omówimy Twój biznes, dobierzemy platformę e-commerce i przygotujemy wycenę tworzenia sklepu.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#75143F] hover:bg-white/90 font-semibold">
                <Link to="/kontakt">
                  Bezpłatna wycena sklepu <ArrowRight className="ml-2 w-5 h-5" />
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
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Strony internetowe", to: "/uslugi/strony-internetowe" },
              { label: "SEO — pozycjonowanie sklepu", to: "/seo/pozycjonowanie" },
              { label: "Google Ads — Google Shopping", to: "/uslugi/google-ads" },
              { label: "Meta Ads dla e-commerce", to: "/uslugi/meta-ads" },
              { label: "E-commerce — case studies", to: "/uslugi/strony-internetowe/ecommerce" },
              { label: "Agencja marketingowa", to: "/agencja-marketingowa" },
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Tworzenie sklepów internetowych — budowa sklepów i projektowanie sklepów internetowych</h2>
            <p className="text-muted-foreground mb-4">Tworzenie sklepów internetowych to nasz obszar specjalizacji. Budowa sklepów online dla firm każdej branży — od lokalnych e-commerceów po duże platformy sprzedażowe z tysiącami produktów. Projektowanie sklepów internetowych obejmuje UX, layout produktowy, koszyk zakupowy i cały lejek konwersji, by sklep realnie sprzedawał od pierwszego dnia.</p>
            <p className="text-muted-foreground mb-6">Sklep internetowy powinien być szybki, responsywny i zintegrowany z systemami płatności (PayU, Przelewy24, Stripe), kurierami i systemami magazynowymi. Proces budowy sklepu internetowego obejmuje: analizę wymagań, projekt graficzny, wdrożenie platformy, import produktów, konfigurację płatności i szkolenie z obsługi.</p>

            <h2 className="text-3xl font-heading font-bold mb-6">Sklep internetowy na WooCommerce, Shopify, PrestaShop i Magento</h2>
            <p className="text-muted-foreground mb-4">Dobór platformy zależy od skali sprzedaży i budżetu. WooCommerce (na WordPressie) to świetne rozwiązanie dla małych i średnich sklepów — elastyczne, z ogromną bazą wtyczek. Shopify sprawdza się, gdy priorytetem jest prostota obsługi i szybki start. PrestaShop i Magento to platformy dla bardziej rozbudowanych serwisów internetowych z zaawansowaną logiką cenową i katalogiem.</p>
            <p className="text-muted-foreground mb-6">Tworzenie sklepów internetowych Warszawa, Kraków, Wrocław i inne duże miasta — działamy zdalnie dla całej Polski. Projektowanie sklepów internetowych warszawa to jeden z naszych głównych rynków, ale obsługujemy klientów z całego kraju. Każdy projekt graficzny sklepu jest dopasowany do branży i grupy docelowej.</p>

            <h2 className="text-3xl font-heading font-bold mb-6">Sklep internetowy a SEO — pozycjonowanie sklepów i optymalizacja e-commerce</h2>
            <p className="text-muted-foreground mb-4">Budowa sklepu internetowego bez myślenia o SEO to przepalony budżet. Każdy sklep internetowy, który budujemy, jest od podstaw zoptymalizowany pod wyszukiwarki — poprawna struktura URL, schema markup produktów, szybkość ładowania strony, zoptymalizowane meta tagi i opisy produktów bogate w słowa kluczowe.</p>
            <p className="text-muted-foreground">Stronie sklepu internetowego z dobrym SEO nie są potrzebne kolosalne budżety reklamowe — ruch organiczny pracuje 24/7. Połączenie profesjonalnej budowy sklepów z SEO i kampaniami Google Shopping to strategia, która przynosi wymierne wyniki sprzedażowe. Skontaktuj się z nami i stwórz sklep internetowy, który sprzedaje.</p>
          
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
