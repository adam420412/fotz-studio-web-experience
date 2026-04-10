import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Globe, 
  Search, 
  ShoppingCart, 
  Palette, 
  MessageSquare,
  Settings,
  TrendingUp,
  Handshake,
  Phone,
  Smartphone,
  Shield,
  Headphones,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Code2,
  Layers,
  Rocket,
  Star,
  Clock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";
import { CityServicesGrid } from "@/components/sections/CityServicesGrid";
import { CityPricingCards } from "@/components/sections/CityPricingCards";
import { CityIntroSection } from "@/components/sections/CityIntroSection";
import { CityBenefitsSection } from "@/components/sections/CityBenefitsSection";
import { CityLinksSection } from "@/components/sections/CityLinksSection";

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetoweWarszawa = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www oraz sklepy internetowe dla firm z Warszawy." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w wyszukiwarce Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Nowoczesne strony internetowe z naciskiem na użytkownika." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z pełnymi integracjami." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: TrendingUp, title: "Optymalizacja konwersji", desc: "Strony, które zamieniają odwiedzających w klientów." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress, Webflow - dobieramy technologię do projektu strony." },
    { icon: Search, title: "SEO w standardzie", desc: "Każda strona www jest zoptymalizowana pod wyszukiwarki od pierwszego dnia." },
    { icon: Handshake, title: "Partnerskie podejście", desc: "Specjalizujemy się w tworzeniu stron skrojonych na miarę Twojej firmy." },
    { icon: Smartphone, title: "Mobile-first", desc: "Tworzymy responsywne strony internetowe działające na wszystkich urządzeniach." },
    { icon: Shield, title: "Bezpieczne strony", desc: "SSL, regularne aktualizacje, zabezpieczenia przed atakami." },
    { icon: Headphones, title: "Wsparcie po wdrożeniu", desc: "Nie zostawiamy Cię po uruchomieniu nowej strony internetowej." },
    { icon: Sparkles, title: "Lokalna znajomość rynku", desc: "Znamy specyfikę największego rynku biznesowego w Polsce. Tworzymy strony, które wyróżniają się wśród dziesiątek tysięcy warszawskich firm w wynikach Google." },
  ];

  const pricing = [
    { 
      title: "Landing Page", 
      desc: "Strona wizytówkowa prezentująca firmę", 
      price: "od 2 000 zł",
      features: ["Do 5 podstron", "Responsywny design", "Podstawowe SEO", "Formularz kontaktowy", "Certyfikat SSL"]
    },
    { 
      title: "Strona Firmowa", 
      desc: "Rozbudowana strona z dodatkowymi funkcjami", 
      price: "od 5 000 zł",
      popular: true,
      features: ["Do 15 podstron", "Zaawansowane SEO", "Blog firmowy", "Integracja social media", "System CMS", "Wsparcie techniczne"]
    },
    { 
      title: "Sklep E-commerce", 
      desc: "Platforma sprzedażowa z integracjami", 
      price: "od 8 000 zł",
      features: ["Nieograniczona liczba produktów", "Panel administracyjny", "Integracje płatności", "Optymalizacja konwersji", "Narzędzia marketingowe"]
    },
  ];

  const processSteps = [
    { icon: Target, step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy w Warszawie." },
    { icon: Palette, step: "02", title: "Projekt UX/UI", desc: "Zaprojektowanie strony z naciskiem na użyteczność i estetykę." },
    { icon: Code2, step: "03", title: "Programowanie", desc: "Profesjonalne tworzenie stron www z dbałością o kod." },
    { icon: Rocket, step: "04", title: "Testy i wdrożenie", desc: "Testujemy i uruchamiamy Twoją stronę internetową." },
  ];

  const caseStudies = [
    {
      title: "Apartamenty Chorwacja",
      category: "Strona rezerwacyjna",
      result: "+180% rezerwacji online",
      link: "/realizacje/apartamenty-chorwacja",
      image: apartamentyImg
    },
    {
      title: "Victory Cars",
      category: "Strona motoryzacyjna",
      result: "Nowoczesny design premium",
      link: "/realizacje/victory-cars",
      image: victoryCarsImg
    },
    {
      title: "Cute Dumpling",
      category: "Strona gastronomiczna",
      result: "+250% ruchu organicznego",
      link: "/realizacje/cute-dumpling",
      image: cuteDumplingImg
    },
  ];

  const faqItems = [
    {
      question: "Dlaczego warto zainwestować w tworzenie stron internetowych Warszawa?",
      answer: "Inwestycja w tworzenie stron internetowych w Warszawie to kluczowy krok do prezentacji swojej firmy w internecie na najwyższym poziomie. Profesjonalne wykonanie strony zwiększa zaufanie potencjalnych klientów i umożliwia skuteczne pozycjonowanie."
    },
    {
      question: "Jakie są kluczowe cechy responsywnych stron internetowych?",
      answer: "Responsywne strony internetowe automatycznie dostosowują swoją strukturę i wygląd do rozmiaru ekranu urządzenia. To kluczowe dla użytkowników mobilnych, gwarantuje komfort przeglądania i jest jednym z kryteriów oceny przez wyszukiwarki jak Google."
    },
    {
      question: "Ile kosztuje wykonanie strony internetowej w Warszawie?",
      answer: "Ceny stron internetowych różnią się w zależności od kompleksowości projektu. Strona wizytówkowa zaczyna się od ok. 2000 zł, strona firmowa od 5000 zł, a sklep internetowy od 8000 zł netto."
    },
    {
      question: "Czy oferujecie projektowanie stron www i sklepy internetowe?",
      answer: "Tak, oferujemy kompleksowe projektowanie stron www oraz tworzenie sklepów internetowych. To umożliwia klientom posiadanie spójnej wizualnie i funkcjonalnie obecności w internecie."
    },
    {
      question: "Jak długo trwa proces tworzenia strony internetowej?",
      answer: "Czas realizacji zależy od specyfiki projektu. Standardowo prosta strona wizytówkowa to 2-3 tygodnie, strona firmowa 4-8 tygodni, a sklep internetowy 8-16 tygodni."
    },
    {
      question: "Jak monitorować efektywność strony internetowej?",
      answer: "Efektywność strony można monitorować za pomocą Google Analytics i Search Console. Pozwalają na śledzenie kluczowych metryk: liczby odwiedzin, czasu na stronie, współczynnika odrzuceń oraz konwersji."
    },
  ];

  const stats = [
    { value: "200+", label: "Zrealizowanych projektów", icon: Layers },
    { value: "98%", label: "Zadowolonych klientów", icon: Star },
    { value: "5 lat", label: "Doświadczenia", icon: Clock },
    { value: "24/7", label: "Wsparcie techniczne", icon: Headphones },
  ];

  const benefits = [
    "Doświadczenie na konkurencyjnym rynku warszawskim",
    "Kompleksowa obsługa od projektu po wdrożenie",
    "SEO w standardzie każdej strony",
    "Responsywny design mobile-first",
    "Wsparcie techniczne po uruchomieniu",
    "Konkurencyjne ceny bez ukrytych kosztów"
  ];

  const introContent = {
    title: "Tworzenie stron www dla firm z Warszawy",
    paragraphs: [
      "W dynamicznie rozwijającym się świecie cyfrowym, strona internetowa stała się kluczowym elementem każdej firmy. Dla biznesów z Warszawy, konkurencyjnego rynku pełnego innowacji, profesjonalna strona www to nie opcja, ale konieczność.",
      "Specjalizujemy się w tworzeniu nowoczesnych stron internetowych, które nie tylko wyglądają profesjonalnie, ale przede wszystkim skutecznie pozyskują klientów.",
      "Każda strona www jest tworzona z myślą o użytkowniku końcowym i zoptymalizowana pod kątem wyszukiwarek internetowych.",
      "Warszawa skupia największą koncentrację firm w Polsce – od globalnych korporacji po dynamiczne start-upy. Na tak wymagającym rynku strona internetowa musi działać bezbłędnie i konwertować już od pierwszego dnia."
    ],
    videoSrc: "/videos/fotz-reel.mp4"
  };

  return (
    <>
      <SEOHead
        title="Strony Internetowe Warszawa | Tworzenie i Projektowanie Stron WWW | Fotz Studio"
        description="Strony internetowe Warszawa — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Warszawy. Fotz Studio."
        canonical="https://fotz.pl/uslugi/strony-internetowe/warszawa"
        keywords="strony internetowe warszawa, tworzenie stron www warszawa, projektowanie stron warszawa, sklepy internetowe warszawa, strona internetowa warszawa"
      />
      
      <ServiceSchema 
        name="Strony Internetowe Warszawa - Projektowanie i Tworzenie Stron WWW"
        description="Profesjonalne tworzenie stron internetowych dla firm z Warszawy. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Warszawa"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" },
          { name: "Warszawa", url: "https://fotz.pl/uslugi/strony-internetowe/warszawa" },
        ]}
      />
      
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" 
            />
            <motion.div 
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" 
            />
          </div>
          
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-[15%] hidden lg:block"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
              <Globe className="w-10 h-10 text-primary" />
            </div>
          </motion.div>
          
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-[10%] hidden lg:block"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border border-secondary/20 flex items-center justify-center">
              <Code2 className="w-8 h-8 text-secondary" />
            </div>
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
                  <Sparkles className="w-4 h-4" />
                  Strony WWW Warszawa
                  <Sparkles className="w-4 h-4" />
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 md:mb-8 leading-tight px-2"
              >
                Strony Internetowe{" "}
                <span className="text-gradient relative">
                  Warszawa
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full origin-left"
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
              >
                <strong className="text-foreground">Na konkurencyjnym rynku warszawskim liczy się każdy detal.</strong>{" "}
                Tworzymy strony www, które wyróżniają Twoją firmę i skutecznie pozyskują klientów.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 md:mb-12 px-4"
              >
                <Button asChild size="lg" className="group text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 shadow-lg shadow-primary/20 w-full sm:w-auto">
                  <Link to="/kontakt">
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 border-2 w-full sm:w-auto">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 max-w-4xl mx-auto px-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-1 sm:mb-2 transition-transform group-hover:scale-110" />
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </section>

        <CityIntroSection content={introContent} cityName="Warszawa" />
        <CityBenefitsSection benefits={benefits} title="Dlaczego warto nam zaufać?" subtitle="Poznaj korzyści współpracy" cityName="Warszawa" />
        <CityServicesGrid services={services} title="Nasze usługi" subtitle="Kompleksowe usługi tworzenia stron www dla warszawskich firm" cityName="Warszawa" />

        {/* Process Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">Proces</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Jak tworzymy strony?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Przejrzysty proces, który gwarantuje sukces Twojego projektu</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative">
                  <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">{item.step}</div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">Realizacje</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Nasze projekty</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Zobacz strony internetowe, które stworzyliśmy dla naszych klientów</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link to={study.link} className="group block rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/10">
                    <div className="aspect-video overflow-hidden">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-6">
                      <span className="text-primary text-sm font-medium">{study.category}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                      <p className="text-muted-foreground">{study.result}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/realizacje">Zobacz więcej realizacji<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <CityPricingCards pricing={pricing} title="Cennik stron internetowych" subtitle="Transparentne ceny bez ukrytych kosztów" cityName="Warszawa" />

        <CityLinksSection currentCity="Warszawa" />

        {/* FAQ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">FAQ</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Najczęstsze pytania</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Odpowiedzi na pytania o strony internetowe w Warszawie</p>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                    <AccordionItem value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-card/50">
                      <AccordionTrigger className="text-left hover:no-underline py-6"><span className="font-medium">{item.question}</span></AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">{item.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
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
              Tworzenie stron www Warszawa — strony internetowe dla firm z Warszawy
            </h2>
            <p className="text-muted-foreground mb-4">
              Tworzenie stron www Warszawa to nasza specjalność. Budujemy strony internetowe dla firm z Warszawy,
              które chcą zaprezentować stolicy Polski z najlepszej strony i pozyskiwać klientów online.
              Stron to nasza pasja — każdy projekt realizujemy z zaangażowaniem, łącząc estetykę
              z funkcjonalnością i skutecznością w wynikach wyszukiwania Google.
            </p>
            <p className="text-muted-foreground mb-6">
              Nasze doświadczenie w projektowaniu stron obejmuje setki realizacji dla różnych branż.
              Strony internetowe dla klientów z Warszawy tworzymy zgodnie z najlepszymi praktykami SEO,
              UX i dostępności. Miasto Warszawa to dynamiczne centrum biznesowe — Twoja strona www
              powinna dotrzymywać kroku tej dynamice.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Projektowanie stron internetowych Warszawa — www dla Twojej firmy
            </h2>
            <p className="text-muted-foreground mb-4">
              Projektowanie stron internetowych Warszawa to kompleksowy proces, który obejmuje
              strategię, projekt graficzny, kodowanie i optymalizację SEO. Strona www dla Twojej firmy
              powinna nie tylko wyglądać profesjonalnie, ale przede wszystkim konwertować
              odwiedzających w klientów.
            </p>
            <p className="text-muted-foreground mb-6">
              Tworząc stronę internetową z wykorzystaniem nowoczesnych technologii (React, Next.js,
              WordPress), dbamy o to, by strony wyświetlały się poprawnie na wszystkich urządzeniach.
              Inwestycja w rozwój Twojej firmy poprzez profesjonalną stronę internetową to jeden
              z najlepszych kroków dla biznesu w Warszawie.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Strony www i sklepy internetowe — CMS, kompleksowy projekt graficzny i profesjonalna strona
            </h2>
            <p className="text-muted-foreground mb-4">
              Strony www i sklepy internetowe dla firm z Warszawy tworzymy w oparciu o sprawdzone systemy
              CMS — WordPress, WooCommerce, Shopify i własne rozwiązania dedykowane. Kompleksowy projekt
              graficzny obejmuje identyfikację wizualną, layouty podstron i dobór typografii
              zgodnej z marką.
            </p>
            <p className="text-muted-foreground mb-6">
              Profesjonalna strona internetowa to fundament obecności online każdej firmy.
              Strony internetowych dla klientów z Warszawy budujemy tak, by były skalowalne,
              bezpieczne i łatwe w zarządzaniu. Projektowania stron www nie traktujemy
              jako jednorazowej usługi — jesteśmy partnerem na lata.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Jak stworzyć stronę — profesjonalny projekt, budujemy strony na miarę Twojego biznesu
            </h2>
            <p className="text-muted-foreground mb-4">
              Jak stworzyć stronę internetową, która wyróżni Twoją firmę w Warszawie? Profesjonalny
              projekt graficzny, dobra architektura informacji i optymalizacja pod Google to podstawy.
              Budujemy strony internetowe z myślą o Twoim biznesie — od prostych stron wizytówkowych
              po rozbudowane portale korporacyjne i sklepy e-commerce.
            </p>
            <p className="text-muted-foreground mb-6">
              Stron www Warszawa tworzymy według sprawdzonego procesu: analiza celów → projektowanie
              stron www → kodowanie → testowanie → wdrożenie → optymalizacja SEO. Internetowych
              z wykorzystaniem najlepszych narzędzi i frameworków, co gwarantuje wysoką jakość
              i trwałość efektu dla Twojego biznesu.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Własna strona www i swojej strony www — zadbaj o swoją stronę
            </h2>
            <p className="text-muted-foreground mb-4">
              Zadbaj o swoją stronę www, zanim zrobi to Twoja konkurencja w Warszawie. Swojej strony
              internetowej nie warto odkładać — każdy dzień bez profesjonalnej strony to utracone
              leady i klienci. Twojego biznesu wizerunku w sieci nie możesz zostawić przypadkowi.
            </p>
            <p className="text-muted-foreground">
              Www dla Twojej firmy i swojej strony www to nie koszt, lecz inwestycja w rozwój
              Twojej firmy. Strony internetowych dla klientów z Warszawy dostarczamy regularnie, a każda
              z nich jest zaprojektowana z myślą o celach biznesowych właściciela. Swojej strony
              nie oddajemy bez dokładnych testów — kompleksowy odbiór projektu to nasz standard.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default StronyInternetoweWarszawa;
