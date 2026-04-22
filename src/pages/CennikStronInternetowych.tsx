import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2, ArrowRight, Globe, ShoppingCart, Zap, Building2,
  Star, Shield, Clock, Users, HelpCircle, Layers, Monitor, Smartphone, Search
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const faqItems = [
  {
    question: "Ile kosztuje strona internetowa w 2025/2026 roku?",
    answer: "Koszt strony internetowej zależy od jej złożoności. Prosta strona wizytówkowa (1–5 podstron) kosztuje od 499 zł netto. Strona firmowa z rozbudowanym contentem to 1 500–4 000 zł, sklep internetowy 3 000–15 000 zł, a dedykowana aplikacja webowa od 10 000 zł wzwyż. W Fotz Studio oferujemy strony od 499 zł netto z pełną własnością kodu.",
  },
  {
    question: "Co obejmuje najtańszy pakiet strony internetowej za 499 zł?",
    answer: "Pakiet Start (499 zł netto) obejmuje: stronę one-page lub do 3 podstron, responsywny design (mobile + desktop), podstawowe SEO (meta tagi, title, opis), formularz kontaktowy, integrację z Google Maps, certyfikat SSL i wdrożenie. Idealny dla: freelancerów, gabinetów, małych usługodawców.",
  },
  {
    question: "Czy cena strony internetowej obejmuje hosting i domenę?",
    answer: "Hosting i domena to oddzielne koszty. Dobra domena .pl kosztuje 60–100 zł/rok, hosting od 200–500 zł/rok. Możemy pomóc w wyborze i konfiguracji hostingu, a nawet obsługiwać hosting w imieniu klienta. Przy zamówieniu strony w pakiecie Business i wyższym pomagamy bezpłatnie w konfiguracji środowiska.",
  },
  {
    question: "Ile trwa wykonanie strony internetowej?",
    answer: "Czas realizacji zależy od pakietu: Pakiet Start — 5–7 dni roboczych, Pakiet Business — 2–3 tygodnie, Pakiet Pro — 3–6 tygodni, sklep e-commerce — 4–8 tygodni. Czas może się wydłużyć, jeśli klient nie dostarcza treści (tekstów, zdjęć) na czas.",
  },
  {
    question: "Czy będę właścicielem kodu strony?",
    answer: "Tak — po pełnej zapłacie przekazujemy Ci wszystkie pliki kodu źródłowego. Nie uzależniamy Cię od siebie — możesz korzystać z dowolnego hostingu i przenieść stronę do innej agencji. To nasza polityka transparentności.",
  },
  {
    question: "Czy strona będzie widoczna w Google po uruchomieniu?",
    answer: "Każdą stronę optymalizujemy pod SEO podstawowe (meta tagi, structure, szybkość). Pojawienie się w Google to jednak kilka tygodni po indeksacji. Dla szybszych efektów rekomendujemy pakiet z SEO lub osobną usługę pozycjonowania — efekty organiczne pojawiają się po 3–6 miesiącach regularnej pracy SEO.",
  },
  {
    question: "Czy mogę rozbudować stronę po uruchomieniu?",
    answer: "Oczywiście — zrobimy strony w technologiach, które łatwo rozbudować (WordPress, React, Webflow). Możesz dokupić kolejne podstrony, sklep, blog czy moduł rezerwacji w dowolnym momencie. Oferujemy też pakiety utrzymaniowe z comiesięcznym wsparciem.",
  },
  {
    question: "Czy robicie sklepy internetowe?",
    answer: "Tak — sklepy internetowe to nasza specjalność. Budujemy na WooCommerce, Shopify i dedykowanych rozwiązaniach. Ceny zaczynają się od 2 999 zł netto za sklep z katalogiem do 50 produktów. Sprawdź naszą ofertę sklepów e-commerce.",
  },
];

const packages = [
  {
    name: "Start",
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
    cta: "Zamów pakiet Start",
  },
  {
    name: "Business",
    price: "1 999 zł",
    priceNote: "netto jednorazowo",
    desc: "Profesjonalna strona firmowa z CMS i rozbudowanym contentem",
    time: "2–3 tygodnie",
    popular: true,
    icon: Globe,
    features: [
      "Do 10 podstron",
      "CMS do samodzielnej edycji treści",
      "Blog / aktualności",
      "Responsywny design premium",
      "Formularz kontaktowy z emailem",
      "Integracja Google Analytics 4",
      "Rozszerzone SEO on-page",
      "Szybkość Core Web Vitals ≥ 90",
      "Certyfikat SSL",
      "1 miesiąc wsparcia po wdrożeniu",
    ],
    notIncluded: ["Sklep e-commerce", "Wielojęzyczność"],
    cta: "Zamów pakiet Business",
  },
  {
    name: "Pro",
    price: "3 999 zł",
    priceNote: "netto jednorazowo",
    desc: "Zaawansowana strona z integracjami, animacjami i pełnym SEO",
    time: "3–6 tygodni",
    popular: false,
    icon: Star,
    features: [
      "Nielimitowane podstrony",
      "Zaawansowany CMS",
      "Indywidualny design UI/UX",
      "Animacje i micro-interactions",
      "Blog + kategoryzacja",
      "Wielojęzyczność (opcja)",
      "Integracja CRM / HubSpot",
      "Pełne SEO techniczne",
      "Mapa XML, robots.txt, schema",
      "3 miesiące wsparcia",
      "Szkolenie z obsługi CMS",
    ],
    notIncluded: [],
    cta: "Zamów pakiet Pro",
  },
  {
    name: "E-commerce",
    price: "od 2 999 zł",
    priceNote: "netto jednorazowo",
    desc: "Sklep internetowy WooCommerce lub Shopify z pełnym wdrożeniem",
    time: "4–8 tygodni",
    popular: false,
    icon: ShoppingCart,
    features: [
      "WooCommerce lub Shopify",
      "Do 50 produktów przy starcie",
      "Płatności online (Przelewy24, Stripe)",
      "Koszyk i checkout",
      "Strony produktowe z SEO",
      "Panel zarządzania sklepem",
      "Integracja z systemem magazynowym",
      "Faktury, zamówienia, mailingi transakcyjne",
      "2 miesiące wsparcia",
    ],
    notIncluded: [],
    cta: "Zapytaj o sklep",
  },
];

const addons = [
  { name: "Dodatkowa podstrona", price: "150–350 zł" },
  { name: "Blog / aktualności", price: "400 zł" },
  { name: "Wielojęzyczność (wersja językowa)", price: "500–1 200 zł" },
  { name: "Integracja płatności online", price: "600 zł" },
  { name: "Formularz zaawansowany (rezerwacje, kalkulatory)", price: "400–800 zł" },
  { name: "Integracja z CRM (HubSpot, Salesforce)", price: "800–2 000 zł" },
  { name: "Migracja istniejącej strony", price: "500–2 000 zł" },
  { name: "Pakiet utrzymaniowy (co mies.)", price: "od 200 zł/mies." },
  { name: "SEO miesięczne", price: "od 800 zł/mies." },
  { name: "Copywriting (tekst na podstronę)", price: "od 200 zł/podstronę" },
];

const CennikStronInternetowych = () => {
  return (
    <Layout>
      <SEOHead
        title="Cennik Stron Internetowych 2025/2026 — od 499 zł netto"
        description="Cennik stron internetowych Fotz Studio. Strony od 499 zł netto — pakiety Start, Business, Pro i sklepy e-commerce. Transparentne ceny, pełna własność…"
        canonical="https://fotz.pl/cennik-stron-internetowych"
        keywords="cennik stron internetowych, ile kosztuje strona internetowa, cena strony internetowej, tworzenie stron internetowych cennik, strona internetowa cena 2025, ile kosztuje strona www"
      />
      <ServiceSchema
        name="Tworzenie stron internetowych"
        description="Fotz Studio tworzy profesjonalne strony internetowe w pakietach od 499 zł netto. Responsywny design, SEO, CMS i pełna własność kodu. Realizacje dla firm z całej Polski."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Strony internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" },
          { name: "Cennik", url: "https://fotz.pl/cennik-stron-internetowych" },
        ]}/>
      <FAQSchema items={faqItems} />

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
            <Globe className="w-4 h-4" />
            Cennik stron internetowych 2025/2026
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto"
          >
            Strony internetowe{" "}
            <span className="text-primary">od 499 zł netto</span> —
            transparentny cennik
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Jasne ceny, bez ukrytych kosztów. Pełna własność kodu po zapłacie.
            Responsywny design, podstawowe SEO i certyfikat SSL w każdym pakiecie.
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
                Dowiedz się więcej o stronach
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

      {/* Quick comparison bar */}
      <section className="py-10 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { price: "od 499 zł", label: "Strona wizytówka", sub: "5–7 dni" },
              { price: "od 1 999 zł", label: "Strona firmowa z CMS", sub: "2–3 tygodnie" },
              { price: "od 3 999 zł", label: "Strona Pro z integracjami", sub: "3–6 tygodni" },
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
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pakiety stron internetowych — ceny i zakresy
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Wybierz pakiet dopasowany do potrzeb Twojej firmy. Każdy obejmuje
              responsywność, SSL i pełną własność kodu.
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

          <FadeInView className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Potrzebujesz wyceny indywidualnej?{" "}
              <Link to="/kontakt" className="text-primary hover:underline font-medium">
                Wyślij brief i otrzymaj ofertę w 24h →
              </Link>
            </p>
          </FadeInView>
        </div>
      </section>

      {/* What affects price — SEO article */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Od czego zależy cena strony internetowej?
            </h2>
            <div className="space-y-5 text-muted-foreground">
              <p>
                <strong className="text-foreground">Cena strony internetowej</strong> to temat,
                który rodzi wiele pytań — i słusznie. Na rynku znajdziesz oferty za 300 zł i za
                30 000 zł. Różnica wynika z zakresu prac, technologii i jakości realizacji.
                Oto co realnie wpływa na koszt:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">1. Liczba i złożoność podstron</h3>
              <p>
                Prosta strona one-page kosztuje kilkukrotnie mniej niż rozbudowany serwis z 20
                podstronami, blogiem i formularzami. Każda podstrona wymaga projektu, kodowania
                i treści — to bezpośrednio przekłada się na czas pracy.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">2. Projekt graficzny (template vs. custom)</h3>
              <p>
                Najtańsze strony bazują na gotowych szablonach WordPress z minimalnymi modyfikacjami.
                Droższe realizacje mają indywidualny projekt UI/UX tworzony od zera. Custom design
                jest droższy (o 50–100%), ale daje unikalność i lepiej odzwierciedla brand marki.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">3. Funkcjonalności i integracje</h3>
              <p>
                Każda dodatkowa funkcja to czas programisty: sklep, system rezerwacji, kalkulator,
                wielojęzyczność, integracja z CRM, chatbot. Dlatego przed wyceną warto mieć listę
                wszystkich potrzebnych funkcji.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">4. SEO i optymalizacja techniczna</h3>
              <p>
                Strona bez SEO technicznego to strata pieniędzy — nie będzie widoczna w Google.
                W naszych pakietach Business i Pro SEO on-page jest wliczone. Dla pakietu Start
                oferujemy podstawową optymalizację meta tagów.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">5. Treści (teksty i zdjęcia)</h3>
              <p>
                Koszt strony zwykle nie obejmuje copywritingu ani profesjonalnych zdjęć.
                Jeśli potrzebujesz tekstów SEO lub fotografii produktowej, to osobna wycena.
                Dostarczenie własnych treści znacząco obniża całkowity koszt projektu.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Addons */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Opcje dodatkowe i rozszerzenia
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Każdy pakiet można rozszerzyć o dodatkowe funkcje i usługi.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {addons.map((addon, i) => (
              <FadeInView key={i} delay={i * 0.05}>
                <div className="bg-card border border-border/60 rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary/30 transition-colors">
                  <span className="text-sm font-medium text-foreground">{addon.name}</span>
                  <span className="text-sm font-bold text-primary shrink-0 ml-3">{addon.price}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-muted/20">
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
              Wyślij nam brief lub opisz czego potrzebujesz — wrócimy z wyceną
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
                <Link to="/uslugi/strony-internetowe">Więcej o stronach WWW</Link>
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
              FAQ — cennik stron internetowych
            </h2>
          </FadeInView>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
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
              { label: "Sklepy internetowe", href: "/uslugi/strony-internetowe/ecommerce" },
              { label: "Pozycjonowanie SEO", href: "/uslugi/pozycjonowanie" },
              { label: "Landing page", href: "/uslugi/landing-page" },
              { label: "Cennik ogólny", href: "/cennik" },
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

export default CennikStronInternetowych;
