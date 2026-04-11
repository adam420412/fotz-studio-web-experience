import { SEOHead } from '@/components/seo/SEOHead';
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData';
import { FadeInView } from '@/components/FadeInView';
import { ContactSection } from '@/components/sections/ContactSection';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Palette,
  Smartphone,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  Settings,
  BarChart,
  Sparkles,
  Rocket,
  Target,
  Star,
  Clock,
  Users,
  Award,
  Code,
  Search,
  TrendingUp,
  ShoppingCart,
  FileText,
  Heart,
  Globe,
  Phone,
  MapPin,
  Headphones,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import { TextReveal } from '@/components/TextReveal';

export default function TworzenieStronInternetowych() {
  const heroStats = [
    { value: '500+', label: 'Projektów' },
    { value: '4.9/5', label: 'Opinie' },
    { value: 'Od 499 zł', label: 'Cena' },
    { value: '7-21 dni', label: 'Realizacja' },
  ];

  const whatWeCreate = [
    {
      icon: Globe,
      title: 'Strony wizytówkowe',
      desc: 'Profesjonalne strony dla małych firm i freelancerów. Szybkie, responsywne, SEO-ready.',
      price: 'od 499 zł',
      features: ['1-3 podstrony', 'Responsywny design', 'Formularz kontaktowy', 'Domena + hosting']
    },
    {
      icon: FileText,
      title: 'Strony firmowe',
      desc: 'Wielostronicowe witryny z CMS, blogiem i zaawansowanymi funkcjami. Skalowalne rozwiązania.',
      price: 'od 1999 zł',
      features: ['5-15 podstron', 'CMS WordPress/Webflow', 'Blog i artykuły', 'Zaawansowane SEO', 'Integracje']
    },
    {
      icon: ShoppingCart,
      title: 'Sklepy internetowe',
      desc: 'E-commerce na WooCommerce, Shopify. Pełna integracja z płatnościami i kurierami.',
      price: 'od 2999 zł',
      features: ['Koszyk i checkout', 'Płatności online', 'Integracje kurierskie', 'Panel zarządzania', 'Marketing']
    },
    {
      icon: Target,
      title: 'Landing page',
      desc: 'Strony kampanijowe zoptymalizowane pod konwersję. Generują leady i sprzedaż.',
      price: 'od 799 zł',
      features: ['Jedna strona', 'Wysoki CRO', 'A/B testy', 'Pixel tracking', 'Formularze']
    },
    {
      icon: Code,
      title: 'Aplikacje webowe',
      desc: 'Kompleksowe projekty custom. React, Next.js. Dla skomplikowanych systemów biznesowych.',
      price: 'wycena ind.',
      features: ['Architektura custom', 'Bezpieczeństwo', 'Skalowanie', 'DevOps', 'Wsparcie 24/7']
    },
    {
      icon: Sparkles,
      title: 'Redesign strony',
      desc: 'Modernizacja istniejących stron. Nowy design, szybkość, SEO. Bez strat w rankingu.',
      price: 'od 999 zł',
      features: ['Zachowanie SEO', 'Migration', 'Nowy design', 'Optymalizacja', 'Testy']
    },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Szybkość < 2 sekundy',
      desc: 'Strony ładujące się błyskawicznie. Core Web Vitals na zielono. Ranking + konwersja do góry.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-first design',
      desc: '70% ruchu to mobile. Każda strona jest responsywna od podstaw. Zero problemów na telefonach.'
    },
    {
      icon: Search,
      title: 'SEO od dnia 1',
      desc: 'Optymalizacja on-page, struktura URL, schema markup, meta tagi. Gotowe do Google z pierwszego dnia.'
    },
    {
      icon: Shield,
      title: 'Bezpieczeństwo SSL + backupy',
      desc: 'Certyfikat SSL, automatyczne aktualizacje, codzienne backupy. Twoja strona zawsze bezpieczna.'
    },
    {
      icon: BarChart,
      title: 'Google Analytics 4',
      desc: 'Integracja z GA4 i Search Console. Poznaj zachowanie odwiedzających. Mierz co się liczy.'
    },
    {
      icon: Target,
      title: 'UX pod konwersję',
      desc: 'Każdy element zaprojektowany do sprzedaży. CTA, formy, layout - wszystko optymalizowane.'
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Bezpłatna konsultacja',
      desc: 'Pierwszy rozmów bez zobowiązań. Poznajemy Twoją firmę, cele i budżet. Przygotowujemy brief.'
    },
    {
      step: '02',
      title: 'Projekt graficzny',
      desc: 'Makiety UX/UI w Figma. Pokazujemy wygląd i nawigację przed kodowaniem. Twoja akceptacja = start.'
    },
    {
      step: '03',
      title: 'Kodowanie i integracje',
      desc: 'Programowanie na React/Next.js/WordPress. Integracje z CMS, płatnościami, analityką.'
    },
    {
      step: '04',
      title: 'Testy i optymalizacja',
      desc: 'Testy na wszystkich urządzeniach. Optymalizacja szybkości. SEO audit. Poprawiamy niedociągnięcia.'
    },
    {
      step: '05',
      title: 'Wdrożenie i szkolenie',
      desc: 'Publikacja na serwerze. Instruktaż z obsługi CMS. Przekazanie wszystkich danych dostępowych.'
    },
  ];

  const techStack = [
    { name: 'WordPress + WooCommerce', desc: 'Blog, sklepy, CMS dla łatwie edycji' },
    { name: 'React / Next.js', desc: 'Aplikacje szybkie, SEO-friendly, skalowalne' },
    { name: 'Shopify', desc: 'E-commerce premium z wbudowanymi narzędziami' },
    { name: 'Webflow', desc: 'No-code z zaawansowanym designem i interakcjami' },
    { name: 'Własny kod', desc: 'Custom rozwiązania dla unikalnych projektów' },
  ];

  const pricingPackages = [
    {
      title: 'Wizytówka',
      price: 'od 499 zł',
      desc: 'Prosta strona dla małych firm',
      features: ['1-3 podstrony', 'Responsywny design', 'SEO', 'SSL', 'Hosting 1 rok']
    },
    {
      title: 'Firmowa',
      price: 'od 1999 zł',
      desc: 'Rozbudowana witryna z blogiem',
      features: ['5-15 podstron', 'CMS', 'Blog', 'Analytics', 'Zaawansowane SEO']
    },
    {
      title: 'Sklep',
      price: 'od 2999 zł',
      desc: 'E-commerce z pełną funkcjonalnością',
      features: ['Produkty', 'Płatności', 'Kurierzy', 'Panel', 'Promocje']
    },
    {
      title: 'Landing',
      price: 'od 799 zł',
      desc: 'Kampanijowa strona sprzedażowa',
      features: ['1 strona', 'Wysoki CRO', 'Formy', 'Pixel tracking', 'A/B testy']
    },
  ];

  const faqItems = [
    {
      question: 'Ile kosztuje tworzenie strony internetowej?',
      answer: 'Koszt zależy od typu i złożoności. Strona wizytówkowa: 499-1500 zł. Strona firmowa: 1999-5000 zł. Sklep e-commerce: 2999-15000+ zł. Landing page: 799-2000 zł. Każdą wycenę przygotowujemy indywidualnie na podstawie Twoich potrzeb - zapraszamy na bezpłatną konsultację.'
    },
    {
      question: 'Jak długo trwa stworzenie strony internetowej?',
      answer: 'Strona wizytówkowa: 7-14 dni. Strona firmowa: 14-21 dni. Sklep e-commerce: 21-45 dni. Czas zależy od złożoności, liczby podstron i szybkości dostarczania materiałów. Czasami robimy szybciej - wszystko zależy od Ciebie.'
    },
    {
      question: 'Jaką technologię używacie do tworzenia stron?',
      answer: 'WordPress dla tradycyjnych stron i sklepów. React/Next.js dla szybkich aplikacji i wymagających SEO. Shopify dla premium e-commerce. Webflow dla designu. Zawsze dobieramy technologię do Twoich celów - bez sztywnych schematów.'
    },
    {
      question: 'Czy strona będzie responsywna na urządzenia mobilne?',
      answer: 'Tak, zawsze! Mobile-first to standard w każdym projekcie. 70% ruchu to mobile - wiemy to dobrze. Każda strona jest testowana na iPhone\'ach, Androidach, tabletach. Zero kompromisów.'
    },
    {
      question: 'Czy zapewniacie hosting i domenę?',
      answer: 'Tak! Pomagamy z rejestracją domeny i zapewniamy hosting. Koszt hostingu to ok. 500-1500 zł rocznie w zależności od potrzeb. Domena: 35-60 zł rocznie. Możesz nas prosić o pomoc lub skorzystać z własnego dostawcy.'
    },
    {
      question: 'Czy mogę samodzielnie zarządzać treścią strony?',
      answer: 'Oczywiście! Każda strona ma intuicyjny panel CMS (WordPress, Webflow lub dedykowany). Edycja tekstu i zdjęć to jest proste jak pisanie w Wordzie. Przeszkolimy Cię z obsługi - 1-2 godziny i będziesz samodzielny/a.'
    },
    {
      question: 'Czy tworzycie sklepy internetowe?',
      answer: 'Tak, specjalizujemy się w e-commerce! WooCommerce, Shopify, custom rozwiązania. Pełna integracja z systemami płatności (Stripe, PayPal, Przelewy24), kurierami (DPD, UPS, InPost). Panele do zarządzania produktami, promocjami, statystyką.'
    },
    {
      question: 'Co to jest SEO i czy je oferujecie?',
      answer: 'SEO to optymalizacja strony pod wyszukiwarki Google. Każda strona zawiera podstawowe SEO: meta tagi, szybkość, struktura, schema markup. Dla pełnych efektów SEO (pozycje w Google) polecamy nasz serwis pozycjonowania - to osobna usługa.'
    },
    {
      question: 'Co zawiera wsparcie po wdrożeniu?',
      answer: 'Standardowo 30 dni gwarancji i wsparcia w cenie. Oferujemy pakiety rozszerzone: podstawowe (pomoc techniczna), standardowe (aktualizacje, backupy), premium (pełna opieka + rozwój). Jesteśmy dostępni nawet po latach - nie porzucamy klientów.'
    },
    {
      question: 'Czy mogę zobaczyć projekt przed wdrożeniem?',
      answer: 'Tak! Zanim ktokolwiek piszemy kod, pokazujemy makiety UX/UI w Figma. Widzisz wygląd, nawigację, CTA - wszystko. Zgłaszasz uwagi, poprawiamy. Dopiero gdy powiesz "ok" - zaczynamy kodowanie.'
    },
  ];

  const contentSections = [
    {
      title: 'Dlaczego profesjonalna strona to inwestycja?',
      content: `Polska jest krajem przedsiębiorców. 90% firm online to małe i średnie przedsiębiorstwa. Problem: wiele z nich ma strony z 2010 roku. Wolne, brzydkie, bez SEO.

Twoja strona to Twoja witryna 24/7. Pracuje nawet gdy Ty śpisz. Generuje leadów, buduje wizerunek, uczy klientów o Tobie.

Zła strona to strata potencjalnych klientów. Szacunek: co czwarta osoba, która by Cię znalazła w Google, odchodzi bo strona się nie ładuje. To konkretne pieniądze - czasami tysiące złotych rocznie.

Dobra strona? To inwestycja, która się zwraca. Nawet proste strony generują 2-3 zapytania tygodniowo. Czasami więcej. Koszt strony to 1-2 tygodnie pracy jednego klienta.`
    },
    {
      title: 'Błędy, które robią konkurenci',
      content: `Wiemy co piszą Ci wszyscy. "Najszybsze strony", "SEO na 1", "Niesamowita cena". A potem klient jest rozczarowany.

Najczęstsze błędy:
- Strony które ładują się 5+ sekund (to 50% mniej konwersji)
- Brak mobilności (70% ruchu do kosza)
- Nieczytelny tekst, zbyt wiele kolorów, bałagan
- Formy kontaktowe z 20 polami (nikto nie wypełnia)
- SEO teoretyczne, bez praktycznych wyników
- Brak danych dostępowych - klient nie ma dostępu do własnej strony
- Wsparcie typu "mamy chat" a odpowiadają za tydzień

My robimy inaczej. Strony które działają, zespół który odpowiada w 24h, transparentne ceny, pełne dane dostępowe od startu.`
    },
    {
      title: 'Jak dobra strona generuje przychód?',
      content: `Strona internetowa to nie tylko wizerunek. To narzędzie biznesowe.

Jak to działa:
1. Ktoś szuka w Google "usługi fryzjerskie Poznań" - Ty wyskakujesz
2. Trafia na Twoją stronę - pięknie zaprojektowaną, szybką
3. Widzą Twoją galerię prac, opinie, cenę - buduje zaufanie
4. Klikają "Umów wizytę" lub "Zadzwoń"
5. Ty masz nowego klienta

To się powtarza. Codziennie. Bez reklamy PPC. Bez wydawania 500 zł tygodniowo na Google Ads.

Statystyka: dobra strona generuje 30-50% nowych klientów (reszta to rekomendacje, media społeczne, słowo w słowo).

Dla e-commerce to jeszcze prostsze: strona robi za Ciebie 24h sprzedaż. Jedna dobrze zrobiona strona sklepowa robi średnio 5-20k rocznie przychodu (zależy od branży).`
    }
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych | Profesjonalne strony WWW | fotz.pl"
        description="Tworzymy profesjonalne strony internetowe dla firm. Szybkie, responsywne, zoptymalizowane pod SEO. Od 499 zł. Bezpłatna wycena w 24h!"
        canonical="https://fotz.pl/uslugi/tworzenie-stron-internetowych"
        keywords="tworzenie stron internetowych, strony internetowe, projektowanie stron www, strony www dla firm, profesjonalne strony, tanie strony internetowe"
      />

      <ServiceSchema
        name="Tworzenie stron internetowych"
        description="Profesjonalne tworzenie stron internetowych dla firm. Responsywne, szybkie i zoptymalizowane pod SEO strony WWW."
        provider="fotz.pl"
        areaServed="Polska"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Strona główna', url: 'https://fotz.pl' },
          { name: 'Usługi', url: 'https://fotz.pl/uslugi' },
          { name: 'Tworzenie stron internetowych', url: 'https://fotz.pl/uslugi/tworzenie-stron-internetowych' },
        ]}
      />

      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <Layout>
        <PageBreadcrumbs
          items={[
            { label: 'Usługi', href: '/uslugi' },
            { label: 'Tworzenie stron internetowych' },
          ]}
        />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-40 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Tworzenie stron internetowych
              </motion.span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
                <TextReveal>
                  Tworzenie stron internetowych <span className="text-gradient">dla firm</span>
                </TextReveal>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Profesjonalne strony WWW, które generują klientów — nie tylko wyglądają dobrze. Szybkie, responsywne, zoptymalizowane pod SEO.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Button asChild size="lg" className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <Link to="/kontakt">
                    <Rocket className="mr-2 h-5 w-5" />
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <Link to="/realizacje">
                    <Star className="mr-2 h-5 w-5" />
                    Zobacz realizacje
                  </Link>
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-2 sm:p-4"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Co tworzymy */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  Rodzaje stron
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Co <span className="text-gradient">tworzymy?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Od prostych wizytówek po skomplikowane aplikacje webowe. Zawsze z myślą o Twoim biznesie.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeCreate.map((item, index) => (
                <FadeInView key={index} delay={index * 0.08}>
                  <div className="p-6 sm:p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <div className="text-lg font-bold text-gradient mb-4">{item.price}</div>
                    <ul className="space-y-2">
                      {item.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInView>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/cennik-stron-internetowych">
                  Pełny cennik
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section: Dlaczego my */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Award className="w-4 h-4" />
                  USP
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Dlaczego wybrać <span className="text-gradient">fotz.pl?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Wszystko, co robią inni — my robimy lepiej i taniej.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.08}>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Proces */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Clock className="w-4 h-4" />
                  Proces
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Jak <span className="text-gradient">pracujemy?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  5 prostych kroków od pomysłu do gotowej strony.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="relative">
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[calc(100%+8px)] w-[calc(100vw-32px-2rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                    <div className="p-6 rounded-2xl bg-background border border-border/50 h-full relative z-10">
                      <div className="text-3xl font-bold text-gradient mb-2">{step.step}</div>
                      <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Content - SEO Copy */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            {contentSections.map((section, index) => (
              <FadeInView key={index} delay={index * 0.1} className="mb-16">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{section.title}</h2>
                  <div className="prose prose-invert max-w-none">
                    {section.content.split('\n\n').map((paragraph, pidx) => (
                      <p key={pidx} className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-wrap">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </section>

        {/* Section: Tech Stack */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Code className="w-4 h-4" />
                  Technologia
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Stack <span className="text-gradient">technologiczny</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nowoczesne technologie, których używają największe firmy na świecie.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {techStack.map((tech, index) => (
                <FadeInView key={index} delay={index * 0.08}>
                  <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all text-center">
                    <h3 className="font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Pricing Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <FileText className="w-4 h-4" />
                  Cennik
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Przejrzyste <span className="text-gradient">ceny</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Bez ukrytych kosztów. Każda wycena przygotowana indywidualnie.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {pricingPackages.map((pkg, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all h-full">
                    <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                    <div className="text-3xl font-bold text-gradient mb-3">{pkg.price}</div>
                    <p className="text-sm text-muted-foreground mb-6">{pkg.desc}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInView>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/cennik-stron-internetowych">
                  Pełny cennik i pakiety
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <FileText className="w-4 h-4" />
                  FAQ
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Najczęściej pytane <span className="text-gradient">pytania</span>
                </h2>
              </div>
            </FadeInView>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border/30">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors py-5">
                      <span className="text-base md:text-lg font-semibold">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section: Related Services */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Inne <span className="text-gradient">usługi</span>
                </h2>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Sklepy internetowe', desc: 'WooCommerce, Shopify, custom e-commerce', link: '/uslugi/sklepy-internetowe' },
                { title: 'Landing page', desc: 'Strony kampanijowe zoptymalizowane pod konwersję', link: '/uslugi/landing-page' },
                { title: 'Pozycjonowanie SEO', desc: 'Pozycje w Google, organic traffic, ROI', link: '/uslugi/pozycjonowanie' },
              ].map((service, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <Link to={service.link} className="group block">
                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all h-full">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        Dowiedz się więcej
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ContactSection />
      </Layout>
    </>
  );
}
