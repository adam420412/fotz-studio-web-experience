import { SEOHead } from "@/components/seo/SEOHead";
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
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { TextReveal } from "@/components/TextReveal";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedServices } from "@/components/sections/RelatedServices";

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
    { value: "78+", label: "Zrealizowanych stron", desc: "dla firm z całej Polski" },
    { value: "94%", label: "Klientów poleca nas", desc: "opinie z Google i Clutch" },
    { value: "<2s", label: "Czas ładowania stron", desc: "zielone wyniki PageSpeed" },
    { value: "5 lat", label: "Doświadczenia", desc: "w branży web development" },
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
      result: "3x więcej rezerwacji",
      link: "/realizacje/enea-stadion",
      image: eneaStadionImg,
      desc: "Kompleksowa strona dla jednego z największych stadionów w Polsce."
    },
    {
      title: "Victory Cars",
      category: "Strona motoryzacyjna",
      result: "TOP 3 w Google",
      link: "/realizacje/victory-cars",
      image: victoryCarsImg,
      desc: "Premium showroom dla dealera luksusowych samochodów."
    },
    {
      title: "FPS Cegielski",
      category: "Strona przemysłowa B2B",
      result: "+85% leadów B2B",
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
    { name: "Poznań", href: "/uslugi/strony-internetowe/poznan" },
    { name: "Warszawa", href: "/uslugi/strony-internetowe/warszawa" },
    { name: "Kraków", href: "/uslugi/strony-internetowe/krakow" },
    { name: "Wrocław", href: "/uslugi/strony-internetowe/wroclaw" },
    { name: "Gdańsk", href: "/uslugi/strony-internetowe/gdansk" },
    { name: "Łódź", href: "/uslugi/strony-internetowe/lodz" },
    { name: "Katowice", href: "/uslugi/strony-internetowe/katowice" },
    { name: "Szczecin", href: "/uslugi/strony-internetowe/szczecin" },
    { name: "Bydgoszcz", href: "/uslugi/strony-internetowe/bydgoszcz" },
    { name: "Lublin", href: "/uslugi/strony-internetowe/lublin" },
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
      <SEOHead
        title="Tworzenie Stron Internetowych — Projektowanie Stron WWW dla Firm | Fotz Studio"
        description="Profesjonalne tworzenie stron internetowych dla firm. Projektowanie stron www zoptymalizowanych pod SEO, Core Web Vitals i konwersję. WordPress, Webflow, React — bezpłatna wycena 24h."
        canonical="https://fotz.pl/uslugi/strony-internetowe"
        keywords="tworzenie stron internetowych, projektowanie stron www, strony internetowe dla firm, tworzenie strony www, stworzenie strony internetowej, strona firmowa"
      />
      
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
          { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" },
        ]}
      />
      
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      <OrganizationSchema />


      <Layout>
        <PageBreadcrumbs items={[
          { label: "Usługi", href: "/uslugi" },
          { label: "Strony Internetowe" },
        ]} />
        
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
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
                <TextReveal>
                  Strony internetowe, które <span className="text-gradient">naprawdę sprzedają</span>
                </TextReveal>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Projektujemy z myślą o ROI. <span className="text-foreground font-medium">Szybkie, responsywne, zoptymalizowane pod SEO.</span> Od wizytówki po rozbudowany e-commerce – budujemy narzędzia, które generują przychód.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Button asChild size="lg" className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <Link to="/kontakt">
                    <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto">
                {results.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-2 sm:p-4"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{stat.label}</div>
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
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
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
                      <div className="p-2 sm:p-3">
                        <span className="text-[9px] sm:text-[10px] text-primary font-medium uppercase tracking-wider">{study.category}</span>
                        <h4 className="text-xs sm:text-sm font-semibold mt-1 group-hover:text-primary transition-colors line-clamp-1">{study.title}</h4>
                        <span className="text-[10px] sm:text-xs text-muted-foreground">{study.result}</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Etapy realizacji */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                  <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Proces
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
                  Jak wygląda <span className="text-gradient">realizacja projektu?</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                  Przejrzysty proces od pierwszego kontaktu do uruchomienia strony.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all group">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-2 sm:mb-3">{item.step}</div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Cennik */}
        <section className="py-16 sm:py-20 md:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                  💰 Cennik
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
                  Ile kosztuje <span className="text-gradient">strona internetowa?</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                  Transparentne ceny. Bez ukrytych kosztów. Finalna wycena po poznaniu zakresu projektu.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {pricing.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border transition-all h-full flex flex-col ${index === 1 ? 'bg-primary/5 border-primary/30 md:scale-105' : 'bg-background border-border/50 hover:border-primary/20'}`}>
                    {index === 1 && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium text-primary uppercase mb-3 sm:mb-4">
                        <Star className="w-3 h-3" /> Najpopularniejszy
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{item.desc}</p>
                    <div className="text-2xl sm:text-3xl font-bold text-gradient mb-4 sm:mb-6">{item.price}</div>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={index === 1 ? "default" : "outline"} className="w-full text-sm sm:text-base">
                      <Link to="/kontakt">Zapytaj o wycenę</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                  ❓ FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
                  Często zadawane <span className="text-gradient">pytania</span>
                </h2>
              </div>
            </FadeInView>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border border-border/50 rounded-lg sm:rounded-xl px-4 sm:px-6 bg-card/50"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5">
                      <span className="font-medium text-sm sm:text-base pr-2">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 text-sm sm:text-base">
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
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/30 rounded-full blur-[100px] sm:blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
                  Gotowy na stronę, która <span className="text-gradient">naprawdę sprzedaje?</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna konsultacja, konkretna wycena, jasny plan działania.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                  <Button asChild size="lg" className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    <Link to="/kontakt">
                      <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Umów bezpłatną rozmowę
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    <a href="tel:+48790814814">
                      <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      +48 790 814 814
                    </a>
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* SEO Content Section - Kreatywna sekcja */}
        <section className="py-24 border-t border-border/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <FadeInView>
                <div className="text-center mb-16">
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                    📚 Baza wiedzy
                  </span>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                    Wszystko o <span className="text-gradient">stronach www</span>
                  </h2>
                </div>
              </FadeInView>

              {/* Grid z kartami wiedzy */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <FadeInView delay={0.1}>
                  <div className="group p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Palette className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-bold">Projektowanie UX/UI</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Tworzymy strony, które nie tylko dobrze wyglądają, ale przede wszystkim <strong className="text-foreground">konwertują</strong>. 
                      Każdy element – od układu przycisków po kolorystykę CTA – jest przemyślany pod kątem user experience.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Makiety w Figma przed kodowaniem</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Testy A/B dla kluczowych elementów</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Mobile-first approach</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.2}>
                  <div className="group p-8 rounded-2xl bg-gradient-to-br from-secondary/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Search className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-bold">SEO techniczne</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Strona bez SEO jest jak sklep bez szyldu. Dbamy o <strong className="text-foreground">Core Web Vitals</strong>, 
                      strukturę URL, meta tagi i schema markup – wszystko, by Google pokochał Twoją witrynę.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Szybkość ładowania &lt;2s</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Zielone wyniki PageSpeed</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Dane strukturalne (JSON-LD)</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.3}>
                  <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-500/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileCode className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-bold">Technologie</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Dobieramy technologię do projektu – nie na odwrót. <strong className="text-foreground">WordPress</strong> dla prostych stron, 
                      <strong className="text-foreground"> Webflow</strong> dla designerskich projektów, <strong className="text-foreground">React/Next.js</strong> dla zaawansowanych aplikacji.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> WordPress + WooCommerce</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Webflow, Shopify</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> React, Next.js, TypeScript</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.4}>
                  <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Headphones className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-bold">Wsparcie po wdrożeniu</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Strona to dopiero początek. Oferujemy <strong className="text-foreground">pakiety opieki</strong> – 
                      aktualizacje, backupy, monitoring i rozwój funkcjonalności. Jesteśmy z Tobą na dłużej.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 30 dni gwarancji w cenie</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Szkolenie z obsługi CMS</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Pakiety wsparcia od 300 zł/mies.</li>
                    </ul>
                  </div>
                </FadeInView>
              </div>

              {/* Sekcja z cytatem */}
              <FadeInView delay={0.5}>
                <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20">
                  <div className="absolute top-6 left-8 text-6xl text-primary/30 font-serif">"</div>
                  <blockquote className="text-xl md:text-2xl font-medium text-center max-w-3xl mx-auto pt-6 pb-4">
                    <span className="text-foreground">Dobra strona internetowa to nie koszt – to inwestycja, która zwraca się wielokrotnie.</span>
                  </blockquote>
                  <p className="text-center text-muted-foreground">
                    — Zespół Fotz Studio
                  </p>
                </div>
              </FadeInView>

              {/* Sekcja powiązanych usług */}
              <FadeInView delay={0.6}>
                <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-center">Powiązane usługi</h3>
                  <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Strona internetowa to dopiero początek. Uzupełnij ją o dodatkowe usługi, które zwiększą Twój sukces online.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Link 
                      to="/uslugi/strony-internetowe/ecommerce" 
                      className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <ShoppingCart className="w-10 h-10 text-primary mb-4" />
                      <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        E-commerce & Sklepy
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Rozbudowane sklepy internetowe z integracją płatności i kurierów.
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm mt-4 group-hover:gap-2 transition-all">
                        Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link 
                      to="/seo/pozycjonowanie" 
                      className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <Search className="w-10 h-10 text-primary mb-4" />
                      <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        Pozycjonowanie SEO
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Zwiększ widoczność strony w Google i zdobywaj organiczny ruch.
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm mt-4 group-hover:gap-2 transition-all">
                        Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link 
                      to="/performance-marketing/google-ads" 
                      className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <Target className="w-10 h-10 text-primary mb-4" />
                      <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        Google Ads
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Natychmiastowy ruch i konwersje dzięki kampaniom reklamowym.
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm mt-4 group-hover:gap-2 transition-all">
                        Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* SEO Article Section */}
        <section className="py-20 border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Tworzymy strony WWW i witryny internetowe z myślą o wynikach Twojego biznesu
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Strona www to Twój najważniejszy kanał sprzedaży online — pracuje 24/7, pozyskuje klientów i buduje wiarygodność. Tworzymy strony internetowe widoczne w wynikach wyszukiwania, szybkie na urządzeniach mobilnych i zaprojektowane pod konwersję. Każda witryna internetowa przechodzi przez kompletny proces: analiza rynku, projekt graficzny, programowanie, testy i wdrożenie. Strony internetowe dla firm tworzymy na platformach WordPress, Webflow i React — dobieramy technologię do Twoich potrzeb biznesowych, nie na odwrót.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Projektowanie stron internetowych — projekt graficzny, wizualny styl i UX
                </h2>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Elementy wizualne, projekt graficzny i treści strony internetowej
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Projektowanie stron internetowych zaczynamy od briefu — poznajemy Twoją markę, grupę docelową i cele biznesowe. Projekt graficzny witryny www tworzony jest w Figma: kolorystyka, typografia, elementy graficzne, układ sekcji i ścieżki konwersji. Wizualny styl strony firmowej musi być spójny z całą komunikacją marki — logotyp, kolory, czcionki i zdjęcia dobieramy z myślą o docelowym kliencie. Intuicyjny i przejrzysty układ sprawia, że użytkownik szybko znajduje to, czego szuka — co bezpośrednio przekłada się na konwersję. Elementy graficzne — ikony, ilustracje, bannery i zdjęcia — tworzymy lub dobieramy profesjonalnie z licencjonowanych banków zdjęć.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Treści strony www piszemy razem z Tobą lub dostarczamy copywriting SEO. Każda podstrona ma zoptymalizowany tytuł, opis i nagłówki H1–H3. Własna strona internetowa z dobrze napisanymi treściami to fundament widoczności w Google i wiarygodności w oczach klientów.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Stworzenie strony internetowej — hosting, domena i platforma
                </h2>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Hosting, domena i platforma — co zawiera tworzenie strony www
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Stworzenie strony internetowej to nie tylko projekt i kod — to też wybór hostingu, domeny i platformy CMS. Hosting strony www powinien być szybki (SSD, CDN), bezpieczny (SSL, backupy) i zlokalizowany w Polsce lub Europie dla lepszych wyników Core Web Vitals. Domena to adres Twojej firmy w internecie — pomagamy wybrać i zarejestrować domenę .pl lub .com. Platforma CMS (WordPress, Webflow) decyduje o tym, jak łatwo będziesz mógł samodzielnie edytować treści swojej stronie internetowej bez wiedzy technicznej. Hosting dobieramy do skali projektu: strona wizytówkowa, sklep e-commerce i duży serwis mają różne wymagania.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Szablon strony www czy custom design — projektowanie i tworzenie stron internetowych
                </h2>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Kreator stron www vs agencja — stronę internetową za darmo czy profesjonalnie?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kreator stron www (Wix, Squarespace, darmowy kreator Google) umożliwia tworzenie prostych witryn bez znajomości kodu. Kreator stron internetowych sprawdzi się dla małych stron o ograniczonym budżecie. Jednak gotowych szablonów stron www jest tysiące — WordPress.org, ThemeForest, Webflow Marketplace. Gotowych szablonów stron używają miliony firm, co oznacza, że Twoja witryna może wyglądać identycznie jak setki innych. Stworzenie własnej strony internetowej od podstaw daje unikalność i pełną kontrolę nad zawartością strony.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Jak sprawdzić skuteczność strony internetowej i widoczność w wyszukiwarce
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Zawartość strony internetowej, jej opis strony (meta description) i strukturę nagłówków tworzysz razem z nami. Sprawdzić widoczność strony w wyszukiwarce możesz przez Google Search Console — narzędzie pokazuje frazy, na które pojawia się Twoja strona www, oraz pozycje w wynikach wyszukiwania. Stron internetowych pozwala monitorować skuteczność wiele narzędzi: Google Analytics 4, Hotjar, Clarity. Konfigurujemy je wszystkie w ramach wdrożenia.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Tworzenie stron www i SEO — wyniki wyszukiwania od pierwszego dnia
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tworzenie stron www bez SEO to tworzenie strony niewidocznej w Google. Każda strona internetowa, którą budujemy, ma wbudowane SEO techniczne: szybkość ładowania, responsywność strony, semantyczny język HTML, schema markup, optymalizację obrazów i poprawną strukturę URL. Widoczność twojej strony w wyszukiwarkach internetowych rośnie od pierwszego dnia po wdrożeniu. Wysoko w wynikach wyszukiwania Google pojawiają się strony szybkie, zoptymalizowane i bogate w wartościową zawartość.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Strony na WordPressie — responsywność strony i budujemy strony z SEO
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Strony na WordPressie to najpopularniejszy wybór dla małych stron firmowych i rozbudowanych serwisów. Responsywność strony internetowej to wymóg — Google indeksuje przede wszystkim wersję mobilną. Budujemy strony na WordPressie z pełną optymalizacją: strukturę strony, breadcrumbs, schema markup i całej strony kod HTML semantyczny. Wyszukiwarek internetowych algorytmy oceniają m.in. szybkość, dostępność i unikalność zawartości — o to dbamy kompleksowo. Sukces strony internetowej mierzymy w leadach, sprzedaży i widoczności organicznej.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Projekt strony www i własna strona internetowa — korzyści dla Twojego biznesu
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Projekt strony internetowej to nie koszt — to inwestycja. Własna strona internetowa generuje leady organicznie przez SEO, buduje wiarygodność i sprzedaje 24/7. Projekt strony www stworzony przez agencję daje przewagę nad konkurencją i wyróżnienie w wynikach wyszukiwania. Twojej nowej strony pierwsze efekty SEO pojawiają się zwykle po 3–6 miesiącach od publikacji. Naszej strony klienci używają jako głównego kanału leadowego przez lata po wdrożeniu.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Tworzenie stron internetowych — cennik i wycena budowy strony www
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Budowy strony internetowej koszt zależy od złożoności: strona wizytówkowa 2 500–5 000 zł, strona firmowa z blogiem 6 000–15 000 zł, sklep e-commerce 12 000–50 000 zł. Każdą wycenę tworzenia strony www poprzedzamy bezpłatną konsultacją. Cena stworzenia strony internetowej zawiera: projekt graficzny, kodowanie, responsywność, SEO techniczne, integrację z Google Analytics i szkolenie z obsługi CMS. Wykonanie strony internetowej w Fotz Studio — poradnik krok po kroku: (1) brief i określenie celu strony, (2) projekt graficzny i elementy graficzne, (3) kodowanie lub konfiguracja CMS, (4) optymalizacja strony pod SEO, (5) testy responsywności i wydajności, (6) publikacja i szkolenie z obsługi.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  FAQ — projektowanie i tworzenie stron internetowych: poradnik dla firm
                </h2>
                <h3 className="text-xl font-heading font-semibold mb-3">Jak długo trwa tworzenie strony internetowej?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Strona wizytówkowa: 2–3 tygodnie. Strona firmowa z blogiem: 4–8 tygodni. Sklep e-commerce: 8–16 tygodni. Czas zależy od złożoności projektu, liczby podstron i szybkości dostarczenia materiałów przez klienta. Strony warto planować z wyprzedzeniem — im wcześniej zaczniemy, tym szybciej strona zacznie generować ruch i leady.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">Poradnik: jaką platformę wybrać do tworzenia strony www?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  WordPress to najlepszy wybór dla większości firm — elastyczny, z tysiącami wtyczek i łatwy w obsłudze. Webflow sprawdza się dla designerskich projektów z zaawansowaną animacją. React i Next.js wybieramy przy zaawansowanych aplikacjach webowych i wysokich wymaganiach wydajnościowych. Język HTML i CSS to fundament każdej strony — czyste kodowanie daje maksymalną wydajność i kontrolę. Platformy CMS umożliwiają tworzenie stron i edycję treści bez znajomości kodu.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">Czy strona www będzie miała intuicyjny panel do edycji treści?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tak — każda strona ma intuicyjny panel administracyjny, który pozwala Ci samodzielnie zarządzać treściami, zdjęciami i produktami. Strony samodzielnie edytowane przez właściciela firmy to standard — szkolimy Cię z obsługi CMS. Prosta i intuicyjna nawigacja panelu sprawia, że edycja treści zajmuje minuty, nie godziny. Własnej strony www nie tworzysz raz i zostawiasz — to żywy projekt wymagający regularnego rozwoju, dlatego dostęp do CMS jest kluczowy.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">Co zawiera cena tworzenia strony internetowej?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cena zawiera: projekt graficzny (makiety UX/UI w Figma), kodowanie, responsywność mobile, SEO techniczne, integrację z Google Analytics 4, formularz kontaktowy, certyfikat SSL i szkolenie z obsługi CMS. Potrzebujesz strony z dodatkowymi funkcjami (sklep, rezerwacje, wielojęzyczność)? Wyceniamy indywidualnie — bezpłatna konsultacja w 24h. Twojej firmie zapewniamy pełne wsparcie na każdym etapie wdrożenia i po nim.
                </p>
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
            </div>
              </FadeInView>
            </div>
          </div>
        </section>

        <RelatedServices
          currentService="strony-internetowe"
          subtitle="Usługi wspierające rozwój i promocję Twojej strony www"
        />

        <ContactSection />
      </Layout>
    </>
  );
};

export default StronyInternetowe;
