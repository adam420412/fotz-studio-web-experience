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
  Clock,
  Camera,
  Video
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

const StronyInternetowePoznan = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www oraz sklepy internetowe dla firm z Poznania." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w wyszukiwarce Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Nowoczesne strony internetowe z naciskiem na użytkownika." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych Poznań z pełnymi integracjami." },
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
    { icon: Target, step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy w Poznaniu." },
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
      question: "Jak stworzyć własną stronę internetową?",
      answer: "Proces tworzenia strony internetowej rozpoczynamy od rozmowy i researchu. Następnie wyceniamy projekt. Po stworzeniu kodu i oprawy graficznej prezentujemy projekt klientowi i wprowadzamy ewentualne poprawki. Każda witryna jest estetyczna, funkcjonalna i dostosowana do urządzeń mobilnych."
    },
    {
      question: "W jaki sposób pozycjonować witrynę?",
      answer: "Pozycjonowanie strony internetowej SEO obejmuje optymalizację techniczną, tworzenie wartościowych treści, link building oraz analizę konkurencji. Nasze działania zapewniają wysoką pozycję w Google i zwiększenie widoczności."
    },
    {
      question: "Jak zwiększyć sprzedaż sklepu internetowego?",
      answer: "Efektywna strategia SEO, oparta na analizach i dostosowywaniu działań, zapewni długotrwałe efekty w postaci większej liczby odwiedzin na stronie oraz lepszej konwersji. Pomagamy budować większą społeczność i poszerzać zasięgi."
    },
    {
      question: "Ile kosztuje strona internetowa w Poznaniu?",
      answer: "Cena uzależniona jest od zakresu prac, skomplikowania projektu oraz technologii. Strona wizytówkowa kosztuje od 2 000 zł, strona firmowa od 5 000 zł, a sklep internetowy od 8 000 zł netto. Strony z pakietem SEO mogą być droższe."
    },
    {
      question: "Jakie systemy CMS wykorzystujecie?",
      answer: "Korzystamy z WordPress, Joomla, Drupal, Webflow, Shopify i wielu innych systemów zarządzania treścią. Dobieramy technologię do potrzeb projektu i oczekiwań klienta."
    },
    {
      question: "Czy tworzycie strony responsywne?",
      answer: "Tak, wszystkie nasze strony są responsywne i dostosowane do urządzeń mobilnych. Projektowanie responsywnych stron internetowych zapewnia wysoką pozycję w Google i lepsze doświadczenie użytkowników."
    },
    {
      question: "Jak długo trwa realizacja strony internetowej?",
      answer: "Czas realizacji zależy od złożoności projektu. Prosta strona wizytówkowa może być gotowa w 2-3 tygodnie, strona firmowa w 4-8 tygodni, a sklep internetowy w 8-16 tygodni."
    },
    {
      question: "Czy oferujecie wsparcie po uruchomieniu strony?",
      answer: "Tak, oferujemy kompleksowe wsparcie techniczne, aktualizacje, optymalizację SEO oraz rozwój funkcjonalności po uruchomieniu strony. Jesteśmy strategicznym partnerem naszych klientów."
    },
  ];

  const stats = [
    { value: "200+", label: "Zrealizowanych projektów", icon: Layers },
    { value: "98%", label: "Zadowolonych klientów", icon: Star },
    { value: "5 lat", label: "Doświadczenia", icon: Clock },
    { value: "24/7", label: "Wsparcie techniczne", icon: Headphones },
  ];

  const benefits = [
    "Lokalna agencja z Poznania - znamy rynek",
    "Kompleksowa obsługa od projektu po wdrożenie",
    "SEO w standardzie każdej strony",
    "Responsywny design mobile-first",
    "Wsparcie techniczne po uruchomieniu",
    "Konkurencyjne ceny bez ukrytych kosztów"
  ];

  const introContent = {
    title: "Tworzenie stron www dla firm z Poznania",
    paragraphs: [
      "Fotz to agencja z Wielkopolski. Projektujemy witryny internetowe dla poznańskich firm, a także świadczymy nasze usługi zdalnie! Łączymy kompleksowe podejście z projektowaniem responsywnych stron internetowych.",
      "Nasza agencja interaktywna prowadzi działania z zakresu projektowania, wdrażania i optymalizacji. Oferujemy również usługę tworzenia sklepów internetowych.",
      "Każda strona www jest tworzona z myślą o użytkowniku końcowym i zoptymalizowana pod kątem wyszukiwarek internetowych.",
      "Poznań to jedno z najszybciej rozwijających się centrów biznesowych w Polsce – miasto innowacji, silnego sektora MŚP i prężnej sceny startupowej. Jako lokalna agencja z Poznania rozumiemy tutejszy rynek od podszewki i tworzymy strony, które realnie wspierają wzrost poznańskich firm."
    ],
    videoSrc: "/videos/fotz-reel.mp4"
  };

  return (
    <>
      <SEOHead
        title="Strony Internetowe Poznań | Projektowanie i Tworzenie Stron WWW | FOTZ"
        description="Strony internetowe Poznań. Profesjonalne projektowanie i tworzenie stron www, sklepy e-commerce, pozycjonowanie SEO. Tworzenie stron dla firm z Poznania."
        canonical="https://fotz.pl/uslugi/strony-internetowe/poznan"
        keywords="strony internetowe poznań, tworzenie stron www poznań, projektowanie stron poznań, sklepy internetowe poznań, strona internetowa poznań, www poznań"
      />
      
      <ServiceSchema 
        name="Strony Internetowe Poznań - Projektowanie i Tworzenie Stron WWW"
        description="Profesjonalne tworzenie stron internetowych dla firm z Poznania. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Poznań"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" },
          { name: "Poznań", url: "https://fotz.pl/uslugi/strony-internetowe/poznan" },
        ]}
      />
      
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      <Layout>
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.15, 0.25, 0.15] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" 
            />
          </div>
          
          {/* Floating elements */}
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
                  Agencja z Wielkopolski
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
                  Poznań
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
                <strong className="text-foreground">Profesjonalna strona internetowa to podstawa sukcesu każdej firmy.</strong>{" "}
                Tworzymy strony www, które wyglądają świetnie, działają błyskawicznie i skutecznie pozyskują klientów dla poznańskich firm.
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

              {/* Stats bar */}
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

          {/* Scroll indicator */}
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

        {/* Intro Section */}
        <CityIntroSection 
          content={introContent}
          cityName="Poznań"
        />

        {/* Benefits Section */}
        <CityBenefitsSection 
          benefits={benefits}
          title="Dlaczego warto nam zaufać?"
          subtitle="Poznaj korzyści współpracy z lokalną agencją"
          cityName="Poznań"
        />

        {/* Services Grid */}
        <CityServicesGrid 
          services={services}
          title="Nasze usługi"
          subtitle="Kompleksowe usługi tworzenia stron www dla poznańskich firm"
          cityName="Poznań"
        />

        {/* Process Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Proces
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Jak tworzymy strony?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Przejrzysty proces, który gwarantuje sukces Twojego projektu
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                      {item.step}
                    </div>
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

        {/* Case Studies Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Realizacje
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Nasze projekty
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Zobacz strony internetowe, które stworzyliśmy dla naszych klientów
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={study.link}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/10"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/realizacje">
                  Zobacz więcej realizacji
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <CityPricingCards 
          pricing={pricing}
          title="Cennik stron internetowych"
          subtitle="Transparentne ceny bez ukrytych kosztów"
          cityName="Poznań"
        />

        <CityLinksSection currentCity="Poznań" />

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Najczęstsze pytania
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Odpowiedzi na pytania o strony internetowe w Poznaniu
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-card/50">
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
};

export default StronyInternetowePoznan;
