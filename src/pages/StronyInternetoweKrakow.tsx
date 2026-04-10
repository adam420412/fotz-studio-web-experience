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
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  Code2,
  Layers,
  Rocket,
  CheckCircle2,
  Play,
  Star,
  Clock,
  Users,
  Award
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

const StronyInternetoweKrakow = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www oraz sklepy internetowe dla firm z Krakowa." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w wyszukiwarce Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Nowoczesne strony internetowe z naciskiem na użytkownika." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych Kraków z pełnymi integracjami." },
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
    { icon: Sparkles, title: "Lokalna znajomość rynku", desc: "Rozumiemy krakowski rynek – połączenie turystyki, akademickości i rosnącego sektora IT. Tworzymy strony, które docierają do lokalnych i międzynarodowych klientów." },
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
    { icon: Target, step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy w Krakowie." },
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
      question: "Jakie są korzyści z posiadania strony internetowej dla firm w Krakowie?",
      answer: "Posiadanie strony internetowej dla firm przynosi wiele korzyści: zwiększenie widoczności online, budowanie wiarygodności, możliwość prezentacji oferty 24/7, łatwiejszy kontakt z klientami oraz potencjalne zwiększenie sprzedaży. Dobra strona www może znacząco wpłynąć na rozwój biznesu w Krakowie."
    },
    {
      question: "Dlaczego warto skorzystać z usług profesjonalnego studia do projektowania stron www?",
      answer: "Profesjonalne studio zapewnia kompleksowe podejście do projektowania i tworzenia stron internetowych. Eksperci zadbają o estetykę, funkcjonalność i optymalizację strony, co przekłada się na lepsze wyniki w wyszukiwarkach i pozytywne wrażenia użytkowników."
    },
    {
      question: "Czy oferujecie tworzenie sklepów internetowych w Krakowie?",
      answer: "Tak, specjalizujemy się w tworzeniu sklepów internetowych w Krakowie. Nasze usługi obejmują projektowanie i implementację funkcjonalnych, atrakcyjnych wizualnie i łatwych w obsłudze platform e-commerce, dostosowanych do indywidualnych potrzeb klienta."
    },
    {
      question: "Co wyróżnia wyjątkowe strony internetowe?",
      answer: "Wyjątkowe strony internetowe charakteryzują się unikalnym designem, intuicyjną nawigacją, szybkością działania oraz responsywnością. Każda strona www powinna odzwierciedlać tożsamość marki, być łatwa w obsłudze dla użytkowników i zoptymalizowana pod kątem wyszukiwarek."
    },
    {
      question: "Jak przebiega proces projektowania i tworzenia stron?",
      answer: "Proces tworzenia strony internetowej obejmuje kilka etapów: konsultację z klientem, analizę potrzeb, tworzenie projektu graficznego strony, programowanie, testowanie oraz wdrożenie. Na każdym etapie dbamy o to, aby projekt Twojej strony internetowej spełniał najwyższe standardy."
    },
    {
      question: "Czy oferujecie tworzenie stron internetowych dla małych firm w Krakowie?",
      answer: "Oczywiście, specjalizujemy się w tworzeniu stron internetowych w Krakowie dla firm różnej wielkości, w tym małych przedsiębiorstw. Nasze rozwiązania są dostosowane do budżetu i potrzeb każdego klienta, zapewniając profesjonalną obecność online."
    },
    {
      question: "Jakie elementy składają się na najlepsze strony internetowe?",
      answer: "Najlepsze strony internetowe łączą w sobie atrakcyjny design, intuicyjną nawigację, szybkość ładowania, responsywność, wysokiej jakości treści oraz optymalizację SEO. Większość stron internetowych tworzonych przez nas zawiera te kluczowe elementy."
    },
    {
      question: "Czy oferujecie wsparcie po zakończeniu projektu strony www?",
      answer: "Tak, zapewniamy wsparcie techniczne i konsultacje po zakończeniu projektu. Oferujemy również usługi utrzymania i aktualizacji stron www w Krakowie, aby zapewnić ciągłość działania i aktualność Twojej witryny."
    },
  ];

  const stats = [
    { value: "200+", label: "Zrealizowanych projektów", icon: Layers },
    { value: "98%", label: "Zadowolonych klientów", icon: Star },
    { value: "5 lat", label: "Doświadczenia", icon: Clock },
    { value: "24/7", label: "Wsparcie techniczne", icon: Headphones },
  ];

  const benefits = [
    { icon: Zap, title: "Szybkie wdrożenie", desc: "Realizacja projektu w 2-6 tygodni" },
    { icon: Target, title: "Skuteczne SEO", desc: "Widoczność w Google od pierwszego dnia" },
    { icon: Smartphone, title: "Mobile-first", desc: "Perfekcyjnie na każdym urządzeniu" },
    { icon: Shield, title: "Bezpieczeństwo", desc: "SSL i regularne aktualizacje" },
  ];

  return (
    <>
      <SEOHead
        title="Strony Internetowe Kraków | Tworzenie i Projektowanie Stron WWW | Fotz Studio"
        description="Strony internetowe Kraków — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Krakowa. Fotz Studio."
        canonical="https://fotz.pl/uslugi/strony-internetowe/krakow"
        keywords="strony internetowe kraków, tworzenie stron www kraków, projektowanie stron kraków, sklepy internetowe kraków, strona internetowa kraków, www kraków"
      />
      
      <ServiceSchema 
        name="Strony Internetowe Kraków - Projektowanie i Tworzenie Stron WWW"
        description="Profesjonalne tworzenie stron internetowych dla firm z Krakowa. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Kraków"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" },
          { name: "Kraków", url: "https://fotz.pl/uslugi/strony-internetowe/krakow" },
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
                  Strony WWW Kraków
                  <Sparkles className="w-4 h-4" />
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight"
              >
                Strony Internetowe{" "}
                <span className="text-gradient relative">
                  Kraków
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
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                <strong className="text-foreground">Profesjonalna strona internetowa to podstawa sukcesu każdej firmy.</strong>{" "}
                Tworzymy strony www, które wyglądają świetnie, działają błyskawicznie i skutecznie pozyskują klientów dla krakowskich firm.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Button asChild size="lg" className="group text-base px-8 py-6 shadow-lg shadow-primary/20">
                  <Link to="/kontakt">
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group text-base px-8 py-6 border-2">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </motion.div>

              {/* Stats bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="group p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 transition-transform group-hover:scale-110" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
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
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
            >
              <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Intro Section - Two column with video */}
        <CityIntroSection
          cityName="Krakowie"
          content={{
            title: "Projektowanie i Tworzenie Stron WWW",
            paragraphs: [
              <p key="1">Wybierając lokalnych specjalistów do <strong>projektowania stron www</strong>, zyskujesz partnera rozumiejącego specyfikę krakowskiego rynku. Profesjonalny projekt strony z optymalizacją SEO to klucz do lepszej widoczności w Google.</p>,
              <p key="2">Oferujemy <strong>kompleksowe usługi tworzenia stron internetowych</strong> - od analizy potrzeb, przez projektowanie UI/UX, aż po wdrożenie i pozycjonowanie.</p>
            ],
            videoSrc: "/videos/fotz-reel.mp4"
          }}
        />

        {/* Services Section - New Grid Component */}
        <CityServicesGrid 
          services={services}
          title="Tworzenie stron www Kraków"
          subtitle="Kompleksowe usługi tworzenia stron www dla krakowskich firm - od projektu graficznego po pozycjonowanie stron."
          cityName="Kraków"
        />

        {/* Benefits Section - Visual Cards */}
        <CityBenefitsSection
          title="Co zyskujesz współpracując z nami?"
          subtitle="Każdy projekt realizujemy z myślą o Twoim sukcesie biznesowym"
          cityName="Kraków"
          benefits={[
            "Szybkie wdrożenie projektu w 2-6 tygodni",
            "Skuteczne SEO - widoczność w Google od pierwszego dnia",
            "Mobile-first - perfekcyjnie na każdym urządzeniu",
            "Bezpieczeństwo - SSL i regularne aktualizacje",
            "Analityka - śledzenie konwersji i ruchu",
            "Wsparcie techniczne po wdrożeniu"
          ]}
        />

        {/* Case Studies Section - Enhanced */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Nasze realizacje
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Przykłady naszych stron internetowych
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Zobacz projekty, które zrealizowaliśmy. Każda strona to unikalna historia sukcesu.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Link 
                    to={study.link}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border/50 
                             hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 
                             hover:shadow-2xl hover:shadow-primary/10"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                        {study.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{study.result}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/realizacje">
                  Zobacz wszystkie realizacje
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Process Section - Enhanced Timeline */}
        <section className="py-24 relative overflow-hidden bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Layers className="w-4 h-4" />
                Nasz proces
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Jak wygląda tworzenie strony?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Przejrzysty proces od briefu do wdrożenia. Każdy etap realizowany z najwyższą starannością.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group relative"
                  >
                    {/* Connector line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                    
                    <div className="relative p-6 rounded-2xl bg-background border border-border/50 
                                  hover:border-primary/30 transition-all duration-500 hover:-translate-y-2
                                  hover:shadow-xl hover:shadow-primary/5">
                      {/* Step number */}
                      <div className="absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 
                                    text-primary-foreground flex items-center justify-center font-bold text-xl
                                    shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ml-auto
                                    group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - New Component */}
        <CityPricingCards 
          pricing={pricing}
          title="Cennik tworzenia stron www"
          subtitle="Transparentne ceny dopasowane do zakresu projektu strony internetowej."
          cityName="Kraków"
        />

        {/* Why Us Section - Enhanced Grid */}
        <section className="py-24 bg-card/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Dlaczego my
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Dlaczego warto nam zlecić stronę?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Zespół specjalistów z pasją do tworzenia wyjątkowych stron internetowych.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-6 rounded-2xl bg-background border border-border/50 
                                hover:border-primary/30 transition-all duration-500 hover:-translate-y-2
                                hover:shadow-xl hover:shadow-primary/5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 
                                  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CityLinksSection currentCity="Kraków" />

        {/* FAQ Section - Enhanced */}
        <section className="py-24 bg-card/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Najczęściej zadawane pytania
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Odpowiedzi na pytania dotyczące tworzenia stron w Krakowie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background rounded-2xl border border-border/50 px-6 
                             data-[state=open]:border-primary/30 data-[state=open]:shadow-lg 
                             data-[state=open]:shadow-primary/5 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 group">
                      <span className="font-semibold pr-4 group-hover:text-primary transition-colors">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}

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
              Tworzenie stron www Kraków — strony internetowe dla firm z Krakowa
            </h2>
            <p className="text-muted-foreground mb-4">
              Tworzenie stron www Kraków to nasza specjalność. Budujemy strony internetowe dla firm z Krakowa,
              które chcą zaprezentować dawnej stolicy Polski i centrum kultury z najlepszej strony i pozyskiwać klientów online.
              Stron to nasza pasja — każdy projekt realizujemy z zaangażowaniem, łącząc estetykę
              z funkcjonalnością i skutecznością w wynikach wyszukiwania Google.
            </p>
            <p className="text-muted-foreground mb-6">
              Nasze doświadczenie w projektowaniu stron obejmuje setki realizacji dla różnych branż.
              Strony internetowe dla klientów z Krakowa tworzymy zgodnie z najlepszymi praktykami SEO,
              UX i dostępności. Miasto Kraków to dynamiczne centrum biznesowe — Twoja strona www
              powinna dotrzymywać kroku tej dynamice.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Projektowanie stron internetowych Kraków — www dla Twojej firmy
            </h2>
            <p className="text-muted-foreground mb-4">
              Projektowanie stron internetowych Kraków to kompleksowy proces, który obejmuje
              strategię, projekt graficzny, kodowanie i optymalizację SEO. Strona www dla Twojej firmy
              powinna nie tylko wyglądać profesjonalnie, ale przede wszystkim konwertować
              odwiedzających w klientów.
            </p>
            <p className="text-muted-foreground mb-6">
              Tworząc stronę internetową z wykorzystaniem nowoczesnych technologii (React, Next.js,
              WordPress), dbamy o to, by strony wyświetlały się poprawnie na wszystkich urządzeniach.
              Inwestycja w rozwój Twojej firmy poprzez profesjonalną stronę internetową to jeden
              z najlepszych kroków dla biznesu w Krakowie.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Strony www i sklepy internetowe — CMS, kompleksowy projekt graficzny i profesjonalna strona
            </h2>
            <p className="text-muted-foreground mb-4">
              Strony www i sklepy internetowe dla firm z Krakowa tworzymy w oparciu o sprawdzone systemy
              CMS — WordPress, WooCommerce, Shopify i własne rozwiązania dedykowane. Kompleksowy projekt
              graficzny obejmuje identyfikację wizualną, layouty podstron i dobór typografii
              zgodnej z marką.
            </p>
            <p className="text-muted-foreground mb-6">
              Profesjonalna strona internetowa to fundament obecności online każdej firmy.
              Strony internetowych dla klientów z Krakowa budujemy tak, by były skalowalne,
              bezpieczne i łatwe w zarządzaniu. Projektowania stron www nie traktujemy
              jako jednorazowej usługi — jesteśmy partnerem na lata.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Jak stworzyć stronę — profesjonalny projekt, budujemy strony na miarę Twojego biznesu
            </h2>
            <p className="text-muted-foreground mb-4">
              Jak stworzyć stronę internetową, która wyróżni Twoją firmę w Krakowie? Profesjonalny
              projekt graficzny, dobra architektura informacji i optymalizacja pod Google to podstawy.
              Budujemy strony internetowe z myślą o Twoim biznesie — od prostych stron wizytówkowych
              po rozbudowane portale korporacyjne i sklepy e-commerce.
            </p>
            <p className="text-muted-foreground mb-6">
              Stron www Kraków tworzymy według sprawdzonego procesu: analiza celów → projektowanie
              stron www → kodowanie → testowanie → wdrożenie → optymalizacja SEO. Internetowych
              z wykorzystaniem najlepszych narzędzi i frameworków, co gwarantuje wysoką jakość
              i trwałość efektu dla Twojego biznesu.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Własna strona www i swojej strony www — zadbaj o swoją stronę
            </h2>
            <p className="text-muted-foreground mb-4">
              Zadbaj o swoją stronę www, zanim zrobi to Twoja konkurencja w Krakowie. Swojej strony
              internetowej nie warto odkładać — każdy dzień bez profesjonalnej strony to utracone
              leady i klienci. Twojego biznesu wizerunku w sieci nie możesz zostawić przypadkowi.
            </p>
            <p className="text-muted-foreground">
              Www dla Twojej firmy i swojej strony www to nie koszt, lecz inwestycja w rozwój
              Twojej firmy. Strony internetowych dla klientów z Krakowa dostarczamy regularnie, a każda
              z nich jest zaprojektowana z myślą o celach biznesowych właściciela. Swojej strony
              nie oddajemy bez dokładnych testów — kompleksowy odbiór projektu to nasz standard.
            </p>
          </motion.div>
        </div>
      </section>

        <ContactSection city="Krakowie" />
      </Layout>
    </>
  );
};

export default StronyInternetoweKrakow;
