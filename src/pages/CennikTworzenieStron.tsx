import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2, ArrowRight, Globe, ShoppingCart, Zap, Building2,
  Star, Shield, Clock, Users, HelpCircle, Layers, Monitor, Smartphone, Search, TrendingUp
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const faqItems = [
  {
    question: "Ile kosztuje prosta strona internetowa dla małej firmy?",
    answer: "Prosta strona wizytówkowa (1–3 podstrony) kosztuje 499 zł netto. To idealne rozwiązanie dla freelancerów, gabinetów medycznych, lokali usługowych i małych firm. Zawiera responsywny design, formularz kontaktowy, Google Maps i podstawowe SEO.",
  },
  {
    question: "Jaki jest najniższy cennik tworzenia stron?",
    answer: "Najniższy pakiet to Start za 499 zł netto. Obejmuje stronę do 3 podstron, responsywny design, SSL, formularz kontaktowy i Google Maps. To najlepsze rozwiązanie dla startupu lub małej firmy z ograniczonym budżetem.",
  },
  {
    question: "Ile kosztuje strona firmowa z CMS?",
    answer: "Strona firmowa z systemem zarządzania treścią kosztuje 1 999 zł netto (pakiet Business). Zawiera do 10 podstron, blog, integrację GA4, responsywny design premium, 1 miesiąc wsparcia i możliwość samodzielnej edycji treści.",
  },
  {
    question: "Ile trwa realizacja strony internetowej?",
    answer: "Czas realizacji zależy od pakietu: Pakiet Start — 5–7 dni roboczych, Business — 2–3 tygodnie, Pro — 3–6 tygodni, sklep e-commerce — 4–8 tygodni. Czas może się wydłużyć, jeśli klient nie dostarcza treści na czas.",
  },
  {
    question: "Czy cena zawiera VAT?",
    answer: "Wszystkie ceny na tej stronie podane są netto (bez VAT). Marża VAT wynosi 23% i będzie dodana do faktury. Na przykład pakiet Start 499 zł netto to ostateczny koszt 613,77 zł brutto.",
  },
  {
    question: "Co to jest CMS i czy każda strona go ma?",
    answer: "CMS (Content Management System) to system zarządzania treścią, który pozwala edytować tekst, zdjęcia i zawartość bez znajomości kodowania. Pakiet Start nie zawiera CMS (to kod statyczny), ale Business i Pro mają pełny CMS (WordPress lub custom).",
  },
  {
    question: "Ile kosztuje sklep internetowy?",
    answer: "Sklep internetowy kosztuje od 2 999 zł netto (WooCommerce, do 50 produktów). Sklep rozbudowany (do 500 produktów, integracje) to 5 999 zł netto. Enterprise z integracją ERP — od 14 999 zł netto. Cena zależy od liczby produktów i funkcji.",
  },
  {
    question: "Czy oferujecie raty lub rozłożenie płatności?",
    answer: "Tak, oferujemy rozłożenie płatności na 2–4 raty za pakiety Business i wyższe. Szczegóły dotyczące rat można omówić na etapie wyceny. Skontaktuj się z nami, aby uzgodnić harmonogram płatności.",
  },
  {
    question: "Co wchodzi w cenę strony internetowej?",
    answer: "W cenę każdego pakietu wchodzi: projekt graficzny, kodowanie, responsywny design, certyfikat SSL, podstawowe SEO, wdrożenie na hosting i testy. Poza ceną to: hosting (.pl, 1 rok), domena, copywriting, profesjonalne zdjęcia (chyba że sam dostarczysz).",
  },
  {
    question: "Czy mogę modyfikować stronę w trakcie projektu?",
    answer: "Tak — każdy pakiet zawiera możliwość wprowadzenia zmian i poprawek w trakcie realizacji. Jednak zmianę zakresu (dodatkowe podstrony, nowe funkcje) wyceniamy oddzielnie, aby zarezerwować czas dla zespołu.",
  },
  {
    question: "Ile kosztuje hosting i domena rocznie?",
    answer: "Domena .pl kosztuje 50–100 zł/rok. Hosting wynosi 299–599 zł/rok w zależności od rozmaru strony i traffic. Razem to 400–700 zł rocznie. Na pakietach Business+ pomagamy bezpłatnie w konfiguracji hostingu.",
  },
  {
    question: "Czy oferujecie wsparcie techniczne po wdrożeniu?",
    answer: "Tak — każdy pakiet zawiera wsparcie: Start — brak, Business — 1 miesiąc, Pro — 3 miesiące, E-commerce — 2 miesiące. Po zakończeniu bezpłatnego wsparcia możesz kupić pakiet utrzymaniowy od 299 zł/miesiąc.",
  },
];

const faqItemsAdditional = [
  {
    question: "Co to jest responsywna strona internetowa?",
    answer: "Responsywna strona automatycznie dopasowuje się do rozmiaru ekranu: telefon, tablet, desktop. To obowiązkowy standard w 2025 roku — ponad 60% użytkowników przegląda internet z mobilu. Wszystkie nasze strony są w pełni responsywne.",
  },
  {
    question: "Ile kosztuje dodatkowa podstrona?",
    answer: "Dodatkowa podstrona w już istniejącej stronie kosztuje 150–350 zł netto w zależności od złożoności. Jeśli chcesz rozbudować stronę po wdrożeniu, zawsze możesz zamówić nowe podstrony.",
  },
  {
    question: "Czy mam własność kodu po zapłacie?",
    answer: "Tak — masz pełną własność kodu. Po pełnej zapłacie przekazujemy Ci wszystkie pliki źródłowe. Nie uzależniamy Cię od siebie — możesz przenieść stronę do innej agencji lub hostingu bez żadnych ograniczeń.",
  },
  {
    question: "Ile kosztuje wielojęzyczność strony?",
    answer: "Wielojęzyczność (dodanie jednego języka) kosztuje 500–1 200 zł netto w zależności od liczby podstron i złożoności. Obejmuje tłumaczenie SEO, walidację i konfigurację hreflang.",
  },
];

const packages = [
  {
    name: "Wizytówka",
    price: "499 zł",
    priceNote: "netto jednorazowo",
    desc: "Prosta strona dla freelancera, gabinetu lub małej firmy lokalnej",
    time: "5–7 dni",
    popular: false,
    icon: Zap,
    features: [
      "Strona one-page lub do 3 podstron",
      "Responsywny design (mobile + desktop)",
      "Formularz kontaktowy",
      "Google Maps embed",
      "Certyfikat SSL",
      "Podstawowe SEO (meta, title, opis)",
      "Wdrożenie na hosting",
      "Pełna własność kodu",
    ],
    notIncluded: ["Blog", "Sklep", "CMS do edycji", "Integracje zewnętrzne"],
    cta: "Zamów pakiet Wizytówka",
  },
  {
    name: "Firmowa",
    price: "1 499 zł",
    priceNote: "netto jednorazowo",
    desc: "Profesjonalna strona z blogiem i zarządzaniem treścią",
    time: "2–3 tygodnie",
    popular: false,
    icon: Building2,
    features: [
      "Do 5–10 podstron",
      "CMS WordPress do samodzielnej edycji",
      "Blog / aktualności",
      "Responsywny design premium",
      "Formularz kontaktowy",
      "Integracja Google Analytics 4",
      "Podstawowe SEO on-page",
      "Certyfikat SSL",
      "1 miesiąc wsparcia",
    ],
    notIncluded: ["Sklep e-commerce", "Zaawansowane integracje"],
    cta: "Zamów pakiet Firmowa",
  },
  {
    name: "Biznesowa",
    price: "2 999 zł",
    priceNote: "netto jednorazowo",
    desc: "Zaawansowana strona z integracjami i pełnym SEO — najpopularniejsza",
    time: "3–6 tygodni",
    popular: true,
    icon: Globe,
    features: [
      "Do 20 podstron",
      "Custom design UI/UX",
      "Zaawansowany CMS",
      "Blog z kategoryzacją",
      "Integracja CRM (HubSpot, Salesforce)",
      "Pełne SEO techniczne",
      "Schema markup, mapa XML",
      "Core Web Vitals ≥ 90",
      "Animacje i micro-interactions",
      "3 miesiące wsparcia",
      "Szkolenie z obsługi CMS",
    ],
    notIncluded: [],
    cta: "Zamów pakiet Biznesowa",
  },
  {
    name: "Premium",
    price: "5 999 zł",
    priceNote: "netto jednorazowo",
    desc: "Dedykowany projekt z nieograniczoną funkcjonalnością",
    time: "6–12 tygodni",
    popular: false,
    icon: Star,
    features: [
      "Nielimitowane podstrony",
      "Indywidualny design od zera",
      "Zaawansowane funkcje custom",
      "Wielojęzyczność (do 3 języków)",
      "Integracja z systemami trzecich stron",
      "Rozbudowany blog",
      "Performance optimization",
      "6 miesiące wsparcia",
      "Dedykowany project manager",
      "Konsultacje strategiczne",
    ],
    notIncluded: [],
    cta: "Zamów pakiet Premium",
  },
];

const shopPackages = [
  {
    name: "Sklep podstawowy",
    price: "2 999 zł",
    desc: "WooCommerce, do 50 produktów, podstawowe funkcje",
    features: [
      "Platform WooCommerce",
      "Do 50 produktów",
      "Koszyk i checkout",
      "Płatności (Przelewy24, Stripe)",
      "Darmowa wysyłka — integracja",
      "Faktury i paragon",
    ],
  },
  {
    name: "Sklep rozbudowany",
    price: "5 999 zł",
    desc: "Shopify/WooCommerce, do 500 produktów, zaawansowane",
    features: [
      "Platform Shopify lub WooCommerce",
      "Do 500 produktów",
      "Warianty produktów",
      "Filtry i wyszukiwanie zaawansowane",
      "Integacje z magazynem (Insane, Akeneo)",
      "Newsletter i email marketing",
      "Analizy sprzedaży",
    ],
  },
  {
    name: "Sklep enterprise",
    price: "od 14 999 zł",
    desc: "Custom, wielokanałowy, integracja ERP",
    features: [
      "Custom e-commerce (React, Vue)",
      "Bez limitu produktów",
      "Integracja ERP (SAP, NetSuite)",
      "Marketplace integration",
      "API do systemów trzecich",
      "High-load optimization",
      "Wsparcie 24/7",
    ],
  },
];

const addonsTable = [
  { category: "Treść i copywriting", items: [
    { name: "Dodatkowa podstrona", price: "150–350 zł" },
    { name: "Blog Setup", price: "400 zł" },
    { name: "Copywriting (1 podstrona)", price: "200–500 zł" },
  ]},
  { category: "Funkcjonalność", items: [
    { name: "Wielojęzyczność (1 język)", price: "500–1 200 zł" },
    { name: "Integracja płatności online", price: "300–600 zł" },
    { name: "Formularz zaawansowany (rezerwacje, kalkulatory)", price: "400–800 zł" },
  ]},
  { category: "Integracje", items: [
    { name: "Integracja z CRM (HubSpot, Salesforce)", price: "800–2 000 zł" },
    { name: "Integracja newsletter (Mailchimp, Brevo)", price: "300–600 zł" },
    { name: "Integracja magazyn / ERP", price: "2 000–5 000 zł" },
  ]},
  { category: "SEO i optymalizacja", items: [
    { name: "Audyt SEO post-wdrożenia", price: "400–800 zł" },
    { name: "Optymalizacja szybkości strony", price: "500–1 500 zł" },
    { name: "Migracja strony z SEO", price: "1 000–3 000 zł" },
  ]},
  { category: "Wsparcie", items: [
    { name: "Szkolenie CMS (2h)", price: "300 zł" },
    { name: "Pakiet wsparcia (co mies.)", price: "299 zł/mies." },
    { name: "SEO miesięczne", price: "od 800 zł/mies." },
  ]},
  { category: "Infrastruktura", items: [
    { name: "Hosting (1 rok)", price: "299–599 zł" },
    { name: "Domena .pl (1 rok)", price: "50–100 zł" },
    { name: "Email hosting (5 skrzynek, 1 rok)", price: "150–300 zł" },
  ]},
];

const CennikTworzenieStron = () => {
  return (
    <Layout>
      <SEOHead
        title="Cennik tworzenia stron internetowych 2025 | Transparentne ceny"
        description="Sprawdź szczegółowy cennik tworzenia stron internetowych. Strony od 499 zł, sklepy od 2999 zł. Transparentne ceny, bez ukrytych kosztów. Bezpłatna wycena!"
        canonical="https://fotz.pl/cennik-tworzenia-stron"
        ogTitle="Cennik tworzenia stron internetowych 2025"
        ogDescription="Szczegółowy cennik stron internetowych — od prostej wizytówki po zaawansowane sklepy e-commerce. Bez ukrytych opłat, pełna własność kodu."
        keywords="tworzenie stron internetowych cennik, ile kosztuje strona internetowa, koszt strony internetowej, cena strony internetowej, cennik stron internetowych, projektowanie stron www cennik, strona internetowa cena 2025, strona wizytówkowa cena, sklep internetowy koszt, tworzenie strony www cena, budowa strony internetowej koszt, ile kosztuje stworzenie strony, cena strony firmowej, strona internetowa ile kosztuje, tworzenie stron www ceny"
      />
      <ServiceSchema
        name="Tworzenie stron internetowych — cennik"
        description="Fotz Studio tworzy profesjonalne strony internetowe w pakietach od 499 zł netto. Responsywny design, SEO, CMS i pełna własność kodu. Przejrzysty cennik dla firm z całej Polski."
        url="https://fotz.pl/cennik-tworzenia-stron"
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Cennik", url: "https://fotz.pl/cennik" },
          { name: "Tworzenie stron", url: "https://fotz.pl/cennik-tworzenia-stron" },
        ]}
      />
      <FAQSchema items={[...faqItems, ...faqItemsAdditional]} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-background overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Cennik tworzenia stron internetowych
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto"
          >
            Cennik tworzenia stron internetowych{" "}
            <span className="text-primary">od 499 zł netto</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
          >
            Jasne ceny, bez ukrytych kosztów. <strong className="text-foreground">Ile kosztuje strona internetowa?</strong>{" "}
            Koszt strony internetowej w naszym studiu zaczyna się od 499 zł netto — pełna własność kodu, responsywny design i SSL w cenie.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Cennik tworzenia stron internetowych obejmuje strony wizytówkowe, strony firmowe z CMS i sklepy e-commerce.
            Cena strony internetowej zależy od liczby podstron, funkcji i integracji — sprawdź pakiety lub zamów bezpłatną wycenę.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="text-base px-8">
              <Link to="/kontakt">
                Zamów bezpłatną wycenę <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8">
              <Link to="/uslugi/strony-internetowe">
                Więcej informacji
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground"
          >
            {["Pełna własność kodu", "Bez ukrytych opłat", "Responsywny design", "SSL w cenie"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick comparison */}
      <section className="py-10 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { price: "od 499 zł", label: "Wizytówka", sub: "5–7 dni" },
              { price: "od 1 499 zł", label: "Firmowa z blogiem", sub: "2–3 tygodnie" },
              { price: "od 2 999 zł", label: "Biznesowa ⭐", sub: "3–6 tygodni" },
              { price: "od 2 999 zł", label: "Sklep e-commerce", sub: "4–8 tygodni" },
            ].map((item, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="font-bold text-2xl text-primary">{item.price}</div>
                <div className="text-sm font-medium text-foreground mt-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.sub}</div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pakiety stron internetowych — ceny i zakresy
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Każdy pakiet zawiera responsywność, SSL i pełną własność kodu.
              Wybierz rozwiązanie dopasowane do potrzeb Twojej firmy.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className={`relative bg-card rounded-2xl border flex flex-col h-full transition-shadow hover:shadow-lg p-6 ${
                  pkg.popular ? "border-primary shadow-md shadow-primary/10" : "border-border/60"
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                        Najpopularniejszy
                      </span>
                    </div>
                  )}
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <pkg.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-snug">{pkg.desc}</p>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-xs text-muted-foreground mb-1">{pkg.priceNote}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-5">
                    <Clock className="w-3 h-3" /> Czas realizacji: {pkg.time}
                  </div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                    {pkg.notIncluded.map((f, j) => (
                      <li key={`no-${j}`} className="flex items-start gap-2 text-xs text-muted-foreground/40 line-through">
                        <span className="w-3.5 shrink-0 mt-0.5 text-center">–</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full text-sm"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link to="/kontakt">
                      {pkg.cta} <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Sklepy internetowe */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sklepy internetowe — cennik
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Budujemy sklepy na WooCommerce, Shopify i custom rozwiązaniach.
              Ceny zależy od liczby produktów i wymaganych funkcji.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-6">
            {shopPackages.map((pkg, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="bg-card border border-border/60 rounded-2xl p-6 flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{pkg.desc}</p>
                  <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full text-sm" variant="outline">
                    <Link to="/kontakt">
                      Zapytaj o cenę <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Od czego zależy cena */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Od czego zależy cena strony internetowej?
            </h2>
            <div className="space-y-8 text-muted-foreground">
              <div>
                <p>
                  <strong className="text-foreground">Cena strony internetowej</strong> to temat,
                  który rodzi wiele pytań — i słusznie. Na rynku znajdziesz oferty za 300 zł i za
                  30 000 zł. Różnica wynika z zakresu prac, technologii i jakości realizacji.
                  Oto co realnie wpływa na koszt:
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Liczba i złożoność podstron</h3>
                <p>
                  Prosta strona one-page kosztuje kilkukrotnie mniej niż rozbudowany serwis z 20
                  podstronami, blogiem i formularzami. Każda podstrona wymaga projektu, kodowania
                  i treści — to bezpośrednio przekłada się na czas pracy i koszt.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2. Projekt graficzny (template vs. custom)</h3>
                <p>
                  Najtańsze strony bazują na gotowych szablonach WordPress z minimalnymi modyfikacjami.
                  Droższe realizacje mają indywidualny projekt UI/UX tworzony od zera. Custom design
                  jest droższy (o 50–100%), ale daje unikalność i lepiej odzwierciedla tożsamość marki.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3. Funkcjonalności i integracje</h3>
                <p>
                  Każda dodatkowa funkcja to czas programisty: sklep, system rezerwacji, kalkulator,
                  wielojęzyczność, integracja z CRM, chatbot, API do zewnętrznych systemów. Dlatego
                  przed wyceną warto mieć listę wszystkich potrzebnych funkcji.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">4. SEO i optymalizacja techniczna</h3>
                <p>
                  Strona bez SEO technicznego to strata pieniędzy — nie będzie widoczna w Google.
                  W naszych pakietach Business i Pro SEO on-page jest wliczone. Dla pakietu Wizytówka
                  oferujemy podstawową optymalizację meta tagów, a pełne SEO techniczne (schema markup,
                  mapa XML, szybkość) to dodatkowa usługa.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">5. CMS — systemy zarządzania treścią</h3>
                <p>
                  Strona statyczna (bez CMS) to kod HTML/CSS — nie możesz sami edytować zawartości.
                  Strona na WordPress czy custom CMS pozwala na zmianę tekstu, zdjęć bez kodowania.
                  CMS to wygoda, ale dodatkowy czas programisty — dlatego pakiet Wizytówka go nie ma,
                  a Business+ już wlicza.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">6. Treści (teksty i zdjęcia)</h3>
                <p>
                  Koszt strony zwykle nie obejmuje copywritingu ani profesjonalnych zdjęć. Jeśli potrzebujesz
                  tekstów SEO lub fotografii produktowej, to osobna wycena. Dostarczenie własnych treści
                  znacząco obniża całkowity koszt projektu.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">7. Poziom wsparcia i gwarancje</h3>
                <p>
                  Pakiety z dłuższym wsparciem (3–6 miesięcy) są droższe. Wsparcie obejmuje poprawki,
                  błędy, konultacje — to gwarancja, że strona będzie działać poprawnie. Bez wsparcia
                  ryzykujesz, że mały błąd będzie stać Cię sporo pieniędzy.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* WordPress vs custom — cena */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Strona na WordPressie vs strona na zamówienie — różnica w cenie
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                To jedno z częstszych pytań: czy lepiej zamówić stronę na WordPress czy na custom technologiach?
                Odpowiedź: zależy od potrzeb i budżetu.
              </p>

              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">WordPress (1 500–3 000 zł)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Szybka realizacja — 2–3 tygodnie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Łatwa edycja dla klienta — system backendowy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Setki wtyczek do rozszerzania</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-0.5">–</span>
                    <span>Mniej elastyczności design-owej — limitowany template</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-0.5">–</span>
                    <span>Podatny na bezpieczeństwo — wtyczki mogą być niezabezpieczone</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Custom (React/Vue, 4 000–10 000+ zł)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Pełna elastyczność — design dokładnie taki jak chcesz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Wyższa bezpieczeństwo — mniej dependencji od wtyczek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Skalowalna — łatwiej dobudować skomplikowane funkcje</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Szybsza wydajność — optymalizacja dla performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-0.5">–</span>
                    <span>Dłuższa realizacja — 4–8 tygodni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-0.5">–</span>
                    <span>Wyższa cena — wymagany specjalistyczny kod</span>
                  </li>
                </ul>
              </div>

              <p>
                <strong className="text-foreground">Nasza rekomendacja:</strong> Dla małych firm i startupu — WordPress.
                Dla większych firm, sklepów, platform — custom React. My oferujemy oba podejścia,
                dobieramy technologię do potrzeb i budżetu.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Utrzymanie strony */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Ile kosztuje utrzymanie strony internetowej?
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Cena strony to nie wszystko — trzeba też liczyć się z kosztami utrzymania.
                Oto co musisz wiedzieć:
              </p>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Hosting (300–600 zł/rok)</h3>
                <p>
                  Serwer, na którym żyje Twoja strona. Cena zależy od traffic i wymagań. Dla małej strony
                  100k wizyt/miesiąc wystarczy hosting za 300 zł/rok. Dla dużego sklepu — 600+ zł.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Domena (50–100 zł/rok)</h3>
                <p>
                  Twój adres internetowy (np. fotz.pl). Domena .pl kosztuje 60–100 zł/rok.
                  Domena .com trochę więcej. To obowiązkowy koszt.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Wsparcie techniczne (200–500 zł/mies.)</h3>
                <p>
                  Jeśli strona wymagała wsparcia (poprawki, błędy, aktualizacje), to koszt zależy od pakietu.
                  Pakiet Wizytówka — bez wsparcia. Business — 1 mies. Biznesowa — 3 miesiące.
                  Po okresie bezpłatnym możesz kupić pakiet wsparcia od 299 zł/mies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Aktualizacje i bezpieczeństwo (gratis / 0 zł)</h3>
                <p>
                  Jeśli masz stronę custom w naszym kodzie — aktualizacje są gratis. Jeśli WordPress —
                  aktualizacje wtyczek wymagają monitorowania. Możesz to robić sam (gratis) lub zlecić nam.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">SSL — Certyfikat bezpieczeństwa (gratis)</h3>
                <p>
                  Każda strona musi mieć SSL (https://). W pakietach Business+ SSL jest wliczony.
                  Na pakiecie Wizytówka załatwiamy SSL gratis (Let's Encrypt).
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-sm">
                  <strong className="text-foreground">Całkowity koszt roczny utrzymania:</strong> Zwykle 450–1 200 zł/rok
                  (hosting + domena + wsparcie). To mało w stosunku do zysku, jaki daje strona.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Tanio a dobrze */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Czy tanie strony internetowe są warte uwagi?
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                "Mogę mieć stronę za 99 zł na Wixie lub za 299 zł na Shopify. Po co mi 499+ zł u Was?"
              </p>

              <p>
                To dobre pytanie. Oto różnica między tanią a solidną stroną:
              </p>

              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Strona za 99–299 zł (Wix, Shopify, Tilda)</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Szybko i łatwo — startup bez doświadczenia może sobie radzić</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Małe koszty — idealne dla osoby z bardzo ograniczonym budżetem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-0.5">–</span>
                    <span>Brak własności — strona żyje na ich serwerach, mogą zablokować lub zmienić ceny</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-0.5">–</span>
                    <span>Słabe SEO — tych platform nie lubi Google, ranking niski</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-0.5">–</span>
                    <span>Brak wsparcia — sam musisz radzić sobie z błędami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-0.5">–</span>
                    <span>Design ograniczony — szablon, do którego wcisnąć się musisz</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Strona za 499+ zł (agencja — my)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Pełna własność — kod jest Twój, możesz przenieść gdzie chcesz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Dobre SEO — struktura HTML, meta tagi, szybkość — Google to lubi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Wsparcie — mamy Cię na oku, pomagamy w błędach i optymalizacji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Elastyczność — customowy design, dokładnie jak chcesz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-0.5">–</span>
                    <span>Wymagane dostarczenie treści — my nie robimy copywritingu (to dodatkowa usługa)</span>
                  </li>
                </ul>
              </div>

              <p>
                <strong className="text-foreground">Werdykt:</strong> Jeśli chcesz poważnie rosnąć i być widoczny w Google
                — inwestuj w solidną stronę. Tania strona to wyglądać możliwe, ale SEO źle działa,
                a Ty jesteś uzależniony od platformy.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Addons table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Usługi dodatkowe i rozszerzenia
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Każdy pakiet można rozszerzyć o dodatkowe funkcje. Oto szczegółowa tabela cen.
            </p>
          </FadeInView>

          <div className="space-y-8">
            {addonsTable.map((section, i) => (
              <FadeInView key={i} delay={i * 0.05}>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{section.category}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.items.map((addon, j) => (
                      <div key={j} className="bg-card border border-border/60 rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary/30 transition-colors">
                        <span className="text-sm font-medium text-foreground">{addon.name}</span>
                        <span className="text-sm font-bold text-primary shrink-0 ml-3">{addon.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* How pricing works */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Jak wygląda proces wyceny?
            </h2>
            <div className="space-y-6">
              {[
                {
                  num: "1",
                  title: "Rozmowa / Brief",
                  desc: "Opisujesz potrzeby: liczba podstron, funkcje, deadline, budżet. My zadajemy pytania, aby zrozumieć projekt."
                },
                {
                  num: "2",
                  title: "Analiza zakresu",
                  desc: "Wyliczamy ilu zespołu zajmie projekt i ile czasu trwać będzie realizacja. Szacujemy koszty zasobów."
                },
                {
                  num: "3",
                  title: "Wycena",
                  desc: "Przygotowujemy ofertę z ceną i harmonogramem. Wysyłamy do Ciebie na zatwierdzenie."
                },
                {
                  num: "4",
                  title: "Potwierdzenie",
                  desc: "Zatwierdź ofertę, podpisz umowę, wpłać zaliczkę (zwykle 50%). Zaczynamy pracę."
                },
                {
                  num: "5",
                  title: "Realizacja",
                  desc: "Pracujemy nad projektem. Pokazujemy Ci postępy, aktualizujemy, poprawiamy na podstawie Twoich uwag."
                },
                {
                  num: "6",
                  title: "Wdrożenie",
                  desc: "Strona jest gotowa. Przygotowujemy hosting, testujemy na live. Dostarczamy Ci hasła i dokumentację."
                },
              ].map((step, i) => (
                <FadeInView key={i} delay={i * 0.05} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dlaczego strony od Fotz Studio?
            </h2>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Pełna własność kodu",
                desc: "Po zapłacie wszystkie pliki są Twoje. Zero uzależnienia, zero opłat licencyjnych. Możesz przenieść stronę gdziekolwiek.",
              },
              {
                icon: Search,
                title: "SEO od pierwszego dnia",
                desc: "Każda strona wychodzi z poprawną strukturą HTML, meta tagami i szybkością ≥ 90 w PageSpeed. Budujesz fundament pod pozycjonowanie.",
              },
              {
                icon: Smartphone,
                title: "Mobile-first design",
                desc: "Ponad 60% ruchu pochodzi z telefonów. Nasze strony projektujemy najpierw pod mobile, a potem skalujemy na desktop.",
              },
              {
                icon: Users,
                title: "Stały opiekun projektu",
                desc: "Jeden specjalista prowadzi Cię od briefu do wdrożenia. Bez przełączania między działami, bez gubienia się w komunikacji.",
              },
            ].map((item, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gotowy na nową stronę? Zacznijmy od 499 zł.
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Wyślij nam brief, opisz czego potrzebujesz — wrócimy z wyceną
              w ciągu 24 godzin roboczych.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów bezpłatną wycenę <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/uslugi/strony-internetowe">Więcej o stronach</Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pytania i odpowiedzi — cennik stron internetowych
            </h2>
          </FadeInView>
          <Accordion type="single" collapsible className="space-y-3">
            {[...faqItems, ...faqItemsAdditional].map((item, i) => (
              <FadeInView key={i} delay={i * 0.05}>
                <AccordionItem value={`item-${i}`} className="bg-card border border-border/60 rounded-xl px-6">
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeInView>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
            Powiązane usługi
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Strony internetowe", href: "/uslugi/strony-internetowe" },
              { label: "Sklepy e-commerce", href: "/uslugi/sklepy-internetowe" },
              { label: "Landing page", href: "/uslugi/landing-page" },
              { label: "Pozycjonowanie SEO", href: "/uslugi/pozycjonowanie" },
              { label: "Cennik usług", href: "/cennik" },
            ].map((item) => (
              <Link key={item.label} to={item.href}
                className="bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors text-sm px-4 py-2 rounded-full font-medium">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default CennikTworzenieStron;
