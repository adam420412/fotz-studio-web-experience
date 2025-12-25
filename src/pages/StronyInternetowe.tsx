import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Globe, 
  Search, 
  TrendingUp, 
  ShoppingCart, 
  Palette, 
  Zap,
  Phone,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Smartphone,
  Shield,
  Headphones,
  FileCode,
  Users,
  Clock,
  Award,
  Key,
  Settings,
  BarChart
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { TextReveal } from "@/components/TextReveal";

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetowe = () => {
  const problems = [
    { 
      icon: AlertTriangle, 
      title: "Brak widoczności w Google", 
      desc: "Twoja konkurencja zabiera Ci klientów, bo jesteś na 10. stronie wyników wyszukiwania." 
    },
    { 
      icon: TrendingUp, 
      title: "Niska konwersja", 
      desc: "Strona nie sprzedaje – odwiedzający wychodzą po 5 sekundach bez kontaktu." 
    },
    { 
      icon: Zap, 
      title: "Wolne ładowanie", 
      desc: "Każda sekunda opóźnienia to -7% konwersji. Google obniża pozycję wolnych stron." 
    },
    { 
      icon: Globe, 
      title: "Strona nie działa na mobile", 
      desc: "60% ruchu to mobile. Nieresponsywna strona traci połowę potencjalnych klientów." 
    },
  ];

  const whatWeDo = [
    { 
      icon: Palette, 
      title: "Projektowanie UX/UI", 
      desc: "Tworzymy strony, które nie tylko wyglądają profesjonalnie, ale przede wszystkim sprzedają. Każdy element jest zaprojektowany pod konwersję." 
    },
    { 
      icon: Search, 
      title: "SEO od podstaw", 
      desc: "Optymalizacja techniczna, szybkość ładowania, struktura URL, schema markup – wszystko, by Google pokochał Twoją stronę." 
    },
    { 
      icon: ShoppingCart, 
      title: "E-commerce", 
      desc: "Sklepy internetowe z płynnym procesem zakupowym. Integracje z płatnościami, kurierami i systemami magazynowymi." 
    },
    { 
      icon: Zap, 
      title: "Szybkość i Core Web Vitals", 
      desc: "Strony ładujące się w mniej niż 2 sekundy. Zielone wyniki w Google PageSpeed Insights." 
    },
  ];

  const results = [
    { value: "+340%", label: "Średni wzrost ruchu organicznego", desc: "w ciągu 6 miesięcy od wdrożenia" },
    { value: "2.1s", label: "Średni czas ładowania strony", desc: "vs 8+ sekund u konkurencji" },
    { value: "+180%", label: "Wzrost zapytań ofertowych", desc: "dzięki optymalizacji CTA" },
  ];

  const pricing = [
    { 
      title: "Strona wizytówkowa", 
      desc: "Landing page lub prosta strona firmowa. Idealna na start.", 
      price: "2 500 - 5 000 zł", 
      features: ["Do 5 podstron", "Responsywny design", "Formularz kontaktowy", "Podstawowe SEO"] 
    },
    { 
      title: "Strona firmowa", 
      desc: "Rozbudowana witryna z blogiem i zaawansowanymi funkcjami.", 
      price: "6 000 - 15 000 zł", 
      features: ["Do 15 podstron", "CMS WordPress/Webflow", "Blog", "Zaawansowane SEO", "Analityka"] 
    },
    { 
      title: "Sklep e-commerce", 
      desc: "Kompletna platforma sprzedażowa z integracjami.", 
      price: "12 000 - 50 000 zł", 
      features: ["Nieograniczona liczba produktów", "Płatności online", "Integracje kurierskie", "Panel zarządzania", "Marketing automation"] 
    },
  ];

  const faqItems = [
    {
      question: "Jak długo trwa realizacja strony internetowej?",
      answer: "Strona wizytówkowa: 2-3 tygodnie. Strona firmowa: 4-8 tygodni. Sklep e-commerce: 8-16 tygodni. Czas zależy od złożoności projektu i szybkości dostarczenia materiałów."
    },
    {
      question: "Czy mogę samodzielnie edytować treści na stronie?",
      answer: "Tak! Każda strona ma intuicyjny panel CMS (WordPress, Webflow lub dedykowany). Przeszkolimy Cię z jego obsługi – edycja tekstów i zdjęć będzie tak prosta jak pisanie w Wordzie."
    },
    {
      question: "Co obejmuje cena strony internetowej?",
      answer: "Cena zawiera: projekt graficzny, kodowanie, responsywność mobile, podstawowe SEO, integrację z Google Analytics, formularz kontaktowy, certyfikat SSL i szkolenie z obsługi CMS."
    },
    {
      question: "Czy oferujecie hosting i domenę?",
      answer: "Tak, możemy zapewnić hosting i pomóc z rejestracją domeny. Koszt hostingu to ok. 500-1500 zł rocznie w zależności od potrzeb wydajnościowych."
    },
    {
      question: "Jak wygląda wsparcie po uruchomieniu strony?",
      answer: "Oferujemy pakiety wsparcia: od podstawowej pomocy technicznej po pełną opiekę z aktualizacjami, backupami i rozwojem funkcjonalności. 30 dni gwarancji w cenie."
    },
    {
      question: "Czy strona będzie zoptymalizowana pod SEO?",
      answer: "Każda strona zawiera podstawowe SEO: optymalizacja meta tagów, szybkość ładowania, struktura nagłówków, schema markup. Dla pełnych efektów SEO polecamy dodatkowe usługi pozycjonowania."
    },
    {
      question: "Jakie technologie wykorzystujecie?",
      answer: "WordPress, Webflow, Shopify, React, Next.js – dobieramy technologię do projektu. Dla prostych stron WordPress, dla zaawansowanych aplikacji React/Next.js."
    },
    {
      question: "Czy mogę zobaczyć projekt przed realizacją?",
      answer: "Tak! Przed kodowaniem przedstawiamy makiety UX/UI w Figma. Możesz zatwierdzić wygląd i nawigację zanim przejdziemy do programowania."
    },
  ];

  const caseStudies = [
    {
      title: "Skaland Osiedle",
      category: "Strona deweloperska",
      result: "+280% zapytań",
      link: "/realizacje/apartamenty-chorwacja",
      image: apartamentyImg
    },
    {
      title: "Victory Cars",
      category: "Strona motoryzacyjna",
      result: "+420% ruchu organicznego",
      link: "/realizacje/victory-cars",
      image: victoryCarsImg
    },
    {
      title: "Cute Dumpling",
      category: "Strona gastronomiczna",
      result: "+190% rezerwacji online",
      link: "/realizacje/cute-dumpling",
      image: cuteDumplingImg
    },
  ];

  const cityLinks = [
    { name: "Poznań", href: "/strony-internetowe-poznan" },
    { name: "Warszawa", href: "/strony-internetowe-warszawa" },
    { name: "Kraków", href: "/strony-internetowe-krakow" },
    { name: "Wrocław", href: "/strony-internetowe-wroclaw" },
    { name: "Gdańsk", href: "/strony-internetowe-gdansk" },
    { name: "Łódź", href: "/strony-internetowe-lodz" },
    { name: "Katowice", href: "/strony-internetowe-katowice" },
    { name: "Szczecin", href: "/strony-internetowe-szczecin" },
    { name: "Bydgoszcz", href: "/strony-internetowe-bydgoszcz" },
    { name: "Lublin", href: "/strony-internetowe-lublin" },
  ];

  const includedFeatures = [
    { icon: Palette, title: "Indywidualny projekt graficzny", desc: "Unikalny design dopasowany do Twojej marki" },
    { icon: Smartphone, title: "Responsywność mobile", desc: "Strona działa idealnie na każdym urządzeniu" },
    { icon: Search, title: "Przygotowanie pod SEO", desc: "Optymalizacja techniczna i strukturalna" },
    { icon: Settings, title: "System CMS", desc: "Łatwa edycja treści bez znajomości kodu" },
    { icon: Shield, title: "Certyfikat SSL", desc: "Bezpieczne połączenie HTTPS" },
    { icon: Headphones, title: "Wsparcie techniczne", desc: "Pomoc przez pierwsze 3 miesiące w cenie" },
    { icon: FileCode, title: "Pełne dane dostępowe", desc: "Otrzymujesz wszystkie dostępy do strony" },
    { icon: BarChart, title: "Google Analytics", desc: "Monitorowanie ruchu i zachowań użytkowników" },
  ];

  const whyUs = [
    { icon: Award, title: "600+ zrealizowanych projektów", desc: "Wieloletnie doświadczenie w tworzeniu stron dla firm z każdej branży." },
    { icon: Users, title: "Zespół specjalistów", desc: "Graficy, programiści i marketerzy pod jednym dachem. Zero outsourcingu." },
    { icon: Clock, title: "Terminowość realizacji", desc: "Większość projektów kończymy przed zadeklarowanym terminem." },
    { icon: Key, title: "Pełna transparentność", desc: "Jasne ceny, przekazanie wszystkich dostępów, brak ukrytych kosztów." },
    { icon: Headphones, title: "Stały kontakt", desc: "Nie zostawiamy klientów bez opieki. Odpowiadamy nawet po latach." },
    { icon: Shield, title: "Gwarancja i bezpieczeństwo", desc: "12 miesięcy gwarancji, automatyczne aktualizacje, zabezpieczenia." },
  ];

  const processSteps = [
    { step: "01", title: "Formalności", desc: "Wycena, umowa, zaliczka – szybko i przejrzyście." },
    { step: "02", title: "Koncepcja", desc: "Opracowanie szkicu i struktury strony." },
    { step: "03", title: "Projekt graficzny", desc: "Wizualizacja w Figma do akceptacji." },
    { step: "04", title: "Programowanie", desc: "Kodowanie, testy na różnych urządzeniach." },
    { step: "05", title: "Publikacja", desc: "Uruchomienie strony na serwerze." },
    { step: "06", title: "Szkolenie i przekazanie", desc: "Instruktaż, dane dostępowe, wsparcie." },
  ];

  return (
    <>
      <Helmet>
        <title>Tworzenie Stron Internetowych | Projektowanie WWW | Fotz</title>
        <meta 
          name="description" 
          content="Profesjonalne tworzenie stron internetowych. Strony firmowe, sklepy e-commerce, landing page. Responsywne, szybkie i zoptymalizowane pod SEO. Sprawdź cennik." 
        />
        <link rel="canonical" href="https://fotz.pl/strony-internetowe" />
      </Helmet>
      
      <ServiceSchema 
        name="Tworzenie Stron Internetowych"
        description="Profesjonalne projektowanie i tworzenie stron internetowych. Strony firmowe, sklepy e-commerce, landing page - responsywne i zoptymalizowane pod SEO."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Strony Internetowe", url: "https://fotz.pl/strony-internetowe" },
        ]}
      />
      
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-40 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Tworzenie stron WWW
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <TextReveal>
                  Strony internetowe, które <span className="text-gradient">sprzedają</span>
                </TextReveal>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Projektujemy strony z myślą o ROI. Szybkie, responsywne, zoptymalizowane pod SEO. 
                Od wizytówki po rozbudowany e-commerce – budujemy narzędzia, które generują przychód.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Problem klienta */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Problem</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego Twoja strona nie przynosi klientów?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  90% stron firmowych w Polsce ma te same błędy. Sprawdź, czy Twoja też.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-destructive/30 transition-all h-full">
                    <problem.icon className="w-10 h-10 text-destructive mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Co robimy */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Rozwiązanie</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Jak budujemy strony, które działają?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nie tworzymy „ładnych stron". Tworzymy narzędzia sprzedażowe z mierzalnymi efektami.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whatWeDo.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Efekty */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Efekty</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Wyniki naszych klientów
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Liczby, które mówią same za siebie. Mierzymy efekty każdego projektu.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {results.map((result, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="text-center p-8 rounded-xl bg-background border border-border/50">
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                      {result.value}
                    </div>
                    <div className="text-lg font-medium mb-1">{result.label}</div>
                    <p className="text-sm text-muted-foreground">{result.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Wybrane realizacje
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Zobacz, jak nasze strony generują wyniki dla klientów z różnych branż.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {caseStudies.map((study, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <Link to={study.link} className="group block h-full">
                    <div className="rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all overflow-hidden h-full flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">{study.category}</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-lg font-bold text-primary">{study.result}</span>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">
                  Zobacz wszystkie realizacje
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section: Co zawiera każda strona */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">W cenie</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Co zawiera każda tworzona przez nas strona?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Bez ukrytych kosztów – te elementy są standardem w każdym projekcie.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {includedFeatures.map((feature, index) => (
                <FadeInView key={index} delay={index * 0.05}>
                  <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-primary/20 transition-all h-full">
                    <feature.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Dlaczego warto */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Wyróżniki</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego warto nam zlecić stworzenie strony?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  To nie są puste obietnice – to nasza codzienna praktyka.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Etapy realizacji */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Proces</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Etapy realizacji strony internetowej
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Przejrzysty proces od pierwszego kontaktu do uruchomienia strony.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="relative p-6 rounded-xl bg-background border border-border/50">
                    <div className="text-5xl font-bold text-primary/20 mb-3">{item.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Cennik */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Cennik</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Ile kosztuje strona internetowa?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny. Bez ukrytych kosztów. Finalna wycena po poznaniu zakresu projektu.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-8 rounded-xl border transition-all h-full flex flex-col ${index === 1 ? 'bg-primary/5 border-primary/30' : 'bg-background border-border/50 hover:border-primary/20'}`}>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.desc}</p>
                    <div className="text-2xl font-bold text-primary mb-6">{item.price}</div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={index === 1 ? "default" : "outline"} className="w-full">
                      <Link to="/kontakt">Zapytaj o wycenę</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Często zadawane pytania
                </h2>
              </div>
            </FadeInView>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border border-border/50 rounded-xl px-6 bg-card/50"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-medium">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section: Miasta w Polsce */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Zasięg</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Tworzymy strony internetowe w całej Polsce
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Działamy zdalnie i lokalnie. Współpracujemy z firmami z największych miast w Polsce.
                  Poznaj nasze lokalne usługi.
                </p>
              </div>
            </FadeInView>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {cityLinks.map((city, index) => (
                  <FadeInView key={index} delay={index * 0.05}>
                    {city.href === "/strony-internetowe-poznan" ? (
                      <Link 
                        to={city.href}
                        className="flex items-center justify-center gap-2 px-4 py-4 bg-primary/10 border border-primary/30 rounded-xl text-sm font-medium hover:bg-primary/20 transition-all group"
                      >
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{city.name}</span>
                      </Link>
                    ) : (
                      <div 
                        className="flex items-center justify-center gap-2 px-4 py-4 bg-background border border-border/50 rounded-xl text-sm text-muted-foreground cursor-default"
                        title="Strona w przygotowaniu"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>{city.name}</span>
                      </div>
                    )}
                  </FadeInView>
                ))}
              </div>
              <FadeInView delay={0.5}>
                <p className="text-center text-sm text-muted-foreground mt-8">
                  Strona dla Poznania jest już dostępna. Pozostałe miasta wkrótce.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Gotowy na stronę, która sprzedaje?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna konsultacja, konkretna wycena, 
                  jasny plan działania.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button asChild size="lg" className="group">
                    <Link to="/kontakt">
                      Umów bezpłatną rozmowę
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+48790814814">
                      <Phone className="mr-2 h-5 w-5" />
                      +48 790 814 814
                    </a>
                  </Button>
                </div>

                {/* City Links */}
                {cityLinks.length > 0 && (
                  <div className="pt-8 border-t border-border/30">
                    <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Działamy w całej Polsce. Sprawdź lokalne usługi:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {cityLinks.map((city, index) => (
                        <Link 
                          key={index} 
                          to={city.href}
                          className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm hover:border-primary/30 hover:text-primary transition-all"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                  Projektowanie strony internetowej - Tworzenie strony www
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Tworzenie profesjonalnych stron internetowych może wydawać się skomplikowane, ale dzięki odpowiedniemu 
                  systemowi CMS i doświadczonemu zespołowi, możliwe jest szybkie i efektywne projektowanie. W Fotz Studio 
                  zajmujemy się kompleksowym tworzeniem stron www – od projektu graficznego, przez wybór technologii, 
                  aż po zarządzanie treścią i pozycjonowanie.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                  Jak zaprojektować skuteczną stronę www?
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Na początku projektowania strony internetowej ważne jest, aby jasno określić cel twojej strony. 
                  Czy ma to być profesjonalna strona firmowa, blog, sklep internetowy, czy bardziej zaawansowany 
                  portal interaktywny? Po określeniu celu, dobieramy odpowiednią technologię – WordPress, Webflow, 
                  Shopify lub dedykowane rozwiązania w React.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                  Optymalizacja strony pod kątem SEO
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  SEO jest kluczowym elementem, jeśli chcesz, aby twoja strona była łatwo znajdywana przez 
                  potencjalnych klientów. Dbamy o odpowiedni dobór słów kluczowych, wysoką jakość treści, 
                  szybkość ładowania oraz meta tagi, przyjazne URL-e i linkowanie wewnętrzne. Schema markup 
                  (dane strukturalne) pomagają robotom wyszukiwarek lepiej zrozumieć strukturę twojej witryny.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                  WordPress, Webflow czy dedykowane rozwiązania?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  WordPress to jeden z najpopularniejszych systemów CMS – łatwy w obsłudze, z ogromną liczbą 
                  darmowych szablonów i wtyczek. Webflow oferuje większą kontrolę nad designem bez znajomości kodu. 
                  Dla zaawansowanych projektów tworzymy dedykowane rozwiązania w React i Next.js. Dobieramy 
                  technologię do potrzeb projektu i oczekiwań klienta.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default StronyInternetowe;