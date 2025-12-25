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
  BarChart,
  Sparkles,
  Rocket,
  Target,
  Heart,
  Star
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
import { ContactSection } from "@/components/sections/ContactSection";

// Import wszystkich realizacji
import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";
import eneaStadionImg from "@/assets/portfolio/enea-stadion.png";
import fpsCegielskiImg from "@/assets/portfolio/fps-cegielski.png";
import przedszkoleImg from "@/assets/portfolio/przedszkole.png";
import rppgImg from "@/assets/portfolio/rppg.png";
import klagemlImg from "@/assets/portfolio/klagem.png";
import friendlyGasImg from "@/assets/portfolio/friendly-gas-new.png";
import mechanicaImg from "@/assets/portfolio/mechanica.png";
import vertheImg from "@/assets/portfolio/verthe.png";
import grafImg from "@/assets/portfolio/graf-tapicerstwo.png";

const StronyInternetowe = () => {
  const problems = [
    { 
      icon: AlertTriangle, 
      title: "Brak widoczności w Google", 
      desc: "Konkurencja zabiera Ci klientów, bo Twoja strona jest niewidoczna w wynikach wyszukiwania." 
    },
    { 
      icon: TrendingUp, 
      title: "Niska konwersja", 
      desc: "Strona nie sprzedaje – odwiedzający wychodzą po kilku sekundach bez kontaktu." 
    },
    { 
      icon: Zap, 
      title: "Wolne ładowanie", 
      desc: "Każda sekunda opóźnienia to -7% konwersji. Google obniża pozycję wolnych stron." 
    },
    { 
      icon: Globe, 
      title: "Strona nie działa na mobile", 
      desc: "70% ruchu to mobile. Nieresponsywna strona traci większość potencjalnych klientów." 
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
    { value: "+340%", label: "Wzrost ruchu organicznego", desc: "w ciągu 6 miesięcy od wdrożenia" },
    { value: "2.1s", label: "Średni czas ładowania", desc: "vs 8+ sekund u konkurencji" },
    { value: "+180%", label: "Więcej zapytań ofertowych", desc: "dzięki optymalizacji CTA" },
    { value: "600+", label: "Zrealizowanych projektów", desc: "dla firm z całej Polski" },
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

  // Główne realizacje - showcase
  const featuredCaseStudies = [
    {
      title: "Enea Stadion",
      category: "Strona instytucji sportowej",
      result: "+520% ruchu",
      link: "/realizacje/enea-stadion",
      image: eneaStadionImg,
      desc: "Kompleksowa strona dla jednego z największych stadionów w Polsce."
    },
    {
      title: "Victory Cars",
      category: "Strona motoryzacyjna",
      result: "+420% ruchu organicznego",
      link: "/realizacje/victory-cars",
      image: victoryCarsImg,
      desc: "Premium showroom dla dealera luksusowych samochodów."
    },
    {
      title: "FPS Cegielski",
      category: "Strona przemysłowa B2B",
      result: "+380% zapytań B2B",
      link: "/realizacje/fps-cegielski",
      image: fpsCegielskiImg,
      desc: "Strona korporacyjna dla lidera branży przemysłowej."
    },
  ];

  // Więcej realizacji - grid
  const moreCaseStudies = [
    {
      title: "Skaland Osiedle",
      category: "Strona deweloperska",
      result: "+280% zapytań",
      link: "/realizacje/apartamenty-chorwacja",
      image: apartamentyImg
    },
    {
      title: "Cute Dumpling",
      category: "Strona gastronomiczna",
      result: "+190% rezerwacji",
      link: "/realizacje/cute-dumpling",
      image: cuteDumplingImg
    },
    {
      title: "RPPG Kancelaria",
      category: "Strona prawnicza",
      result: "TOP 3 lokalne SEO",
      link: "/realizacje/rppg",
      image: rppgImg
    },
    {
      title: "Przedszkole Słoneczne",
      category: "Strona edukacyjna",
      result: "+150% zapytań rodziców",
      link: "/realizacje/przedszkole",
      image: przedszkoleImg
    },
    {
      title: "Klagem Odszkodowania",
      category: "Strona prawnicza",
      result: "+340% leadów",
      link: "/realizacje/klagem",
      image: klagemlImg
    },
    {
      title: "Friendly Gas",
      category: "Strona usługowa",
      result: "+260% konwersji",
      link: "/realizacje/friendly-gas",
      image: friendlyGasImg
    },
  ];

  // Realizacje branżowe
  const industryCaseStudies = [
    {
      title: "Mechanica",
      category: "Branża automotive",
      image: mechanicaImg,
      link: "/realizacje/mechanica"
    },
    {
      title: "Verthe",
      category: "Branża beauty",
      image: vertheImg,
      link: "/realizacje/verthe"
    },
    {
      title: "Graf Tapicerstwo",
      category: "Branża usługowa",
      image: grafImg,
      link: "/realizacje/graf-tapicerstwo"
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

  const industries = [
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Gastronomia", icon: Heart },
    { name: "Nieruchomości", icon: Globe },
    { name: "Usługi B2B", icon: Target },
    { name: "Medycyna", icon: Shield },
    { name: "Prawo", icon: FileCode },
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
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-40 pb-20">
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
                Tworzenie stron WWW
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
                <TextReveal>
                  Strony internetowe, które <span className="text-gradient">naprawdę sprzedają</span>
                </TextReveal>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Projektujemy z myślą o ROI. <span className="text-foreground font-medium">Szybkie, responsywne, zoptymalizowane pod SEO.</span> Od wizytówki po rozbudowany e-commerce – budujemy narzędzia, które generują przychód.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="group text-lg px-8 py-6">
                  <Link to="/kontakt">
                    <Rocket className="mr-2 h-5 w-5" />
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {results.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Dla jakich branż? */}
        <section className="py-12 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Tworzymy dla:</span>
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <industry.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Problem klienta */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <AlertTriangle className="w-4 h-4" />
                  Problem
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Dlaczego Twoja strona <span className="text-gradient">nie przynosi klientów?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  90% stron firmowych w Polsce ma te same błędy. Sprawdź, czy Twoja też.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-destructive/30 transition-all h-full group">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                      <problem.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Co robimy */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Sparkles className="w-4 h-4" />
                  Rozwiązanie
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Jak budujemy strony, <span className="text-gradient">które działają?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nie tworzymy „ładnych stron". Tworzymy <strong className="text-foreground">narzędzia sprzedażowe</strong> z mierzalnymi efektami.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whatWeDo.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Featured Case Studies */}
        <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Star className="w-4 h-4" />
                  Najlepsze realizacje
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Strony, które <span className="text-gradient">zmieniły biznes</span> naszych klientów
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Każdy projekt to historia sukcesu. Zobacz, jak pomagamy firmom rosnąć online.
                </p>
              </div>
            </FadeInView>

            {/* Featured - large cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {featuredCaseStudies.map((study, index) => (
                <FadeInView key={index} delay={index * 0.15}>
                  <Link to={study.link} className="group block h-full">
                    <div className="rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all overflow-hidden h-full flex flex-col">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">{study.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{study.desc}</p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                          <span className="text-lg font-bold text-gradient">{study.result}</span>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>

            {/* More case studies - smaller grid */}
            <FadeInView>
              <h3 className="text-xl font-semibold text-center mb-8">Więcej realizacji</h3>
            </FadeInView>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {moreCaseStudies.map((study, index) => (
                <FadeInView key={index} delay={index * 0.05}>
                  <Link to={study.link} className="group block">
                    <div className="rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <span className="text-[10px] text-primary font-medium uppercase tracking-wider">{study.category}</span>
                        <h4 className="text-sm font-semibold mt-1 group-hover:text-primary transition-colors line-clamp-1">{study.title}</h4>
                        <span className="text-xs text-muted-foreground">{study.result}</span>
                      </div>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>

            <div className="text-center mt-12">
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
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  W cenie
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Co zawiera <span className="text-gradient">każda strona?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Bez ukrytych kosztów – te elementy są <strong className="text-foreground">standardem</strong> w każdym projekcie.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {includedFeatures.map((feature, index) => (
                <FadeInView key={index} delay={index * 0.05}>
                  <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/20 transition-all h-full group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Realizacje branżowe */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeInView>
                <div>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                    <Target className="w-4 h-4" />
                    Specjalizacje
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                    Rozumiemy Twoją branżę
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Każda branża ma swoją specyfikę. Wiemy, czego szukają Twoi klienci i jak zaprojektować stronę, która odpowiada na ich potrzeby. 
                    <strong className="text-foreground"> Od e-commerce po strony prawnicze</strong> – mamy doświadczenie w każdym sektorze.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "E-commerce i sklepy internetowe",
                      "Strony dla deweloperów i nieruchomości",
                      "Serwisy B2B i przemysłowe",
                      "Gastronomia i usługi lokalne",
                      "Kancelarie prawne i medycyna"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                <div className="grid grid-cols-3 gap-4">
                  {industryCaseStudies.map((study, index) => (
                    <Link key={index} to={study.link} className="group">
                      <div className="rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all">
                        <div className="aspect-[3/4] overflow-hidden">
                          <img 
                            src={study.image} 
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-3 bg-card">
                          <span className="text-[10px] text-primary font-medium uppercase">{study.category}</span>
                          <h4 className="text-sm font-semibold mt-1 group-hover:text-primary transition-colors">{study.title}</h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Section: Dlaczego warto */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Award className="w-4 h-4" />
                  Wyróżniki
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Dlaczego <span className="text-gradient">warto nam zaufać?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  To nie są puste obietnice – to nasza codzienna praktyka.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-7 h-7 text-primary" />
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
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Rocket className="w-4 h-4" />
                  Proces
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Jak wygląda <span className="text-gradient">realizacja projektu?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Przejrzysty proces od pierwszego kontaktu do uruchomienia strony.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all group">
                    <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-3">{item.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Cennik */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  💰 Cennik
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Ile kosztuje <span className="text-gradient">strona internetowa?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny. Bez ukrytych kosztów. Finalna wycena po poznaniu zakresu projektu.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-8 rounded-2xl border transition-all h-full flex flex-col ${index === 1 ? 'bg-primary/5 border-primary/30 scale-105' : 'bg-background border-border/50 hover:border-primary/20'}`}>
                    {index === 1 && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary uppercase mb-4">
                        <Star className="w-3 h-3" /> Najpopularniejszy
                      </span>
                    )}
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.desc}</p>
                    <div className="text-3xl font-bold text-gradient mb-6">{item.price}</div>
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

        {/* Section: FAQ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  ❓ FAQ
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Często zadawane <span className="text-gradient">pytania</span>
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
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <MapPin className="w-4 h-4" />
                  Zasięg
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Strony internetowe <span className="text-gradient">w całej Polsce</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Działamy zdalnie i lokalnie. Współpracujemy z firmami z największych miast w Polsce.
                </p>
              </div>
            </FadeInView>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {cityLinks.map((city, index) => (
                  <FadeInView key={index} delay={index * 0.05}>
                    <Link 
                      to={city.href}
                      className="flex items-center justify-center gap-2 px-4 py-4 bg-primary/10 border border-primary/30 rounded-xl text-sm font-medium hover:bg-primary/20 transition-all group"
                    >
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{city.name}</span>
                    </Link>
                  </FadeInView>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: CTA */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Gotowy na stronę, która <span className="text-gradient">naprawdę sprzedaje?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna konsultacja, konkretna wycena, jasny plan działania.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group text-lg px-8 py-6">
                    <Link to="/kontakt">
                      <Rocket className="mr-2 h-5 w-5" />
                      Umów bezpłatną rozmowę
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                    <a href="tel:+48790814814">
                      <Phone className="mr-2 h-5 w-5" />
                      +48 790 814 814
                    </a>
                  </Button>
                </div>
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
                  Dla zaawansowanych projektów proponujemy dedykowane rozwiązania w React lub Next.js, 
                  które oferują najwyższą wydajność i możliwości personalizacji.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
};

export default StronyInternetowe;
