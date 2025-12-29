import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Building, Camera, Layers, Play, Sparkles, Eye, Palette, CheckCircle, ChevronLeft, ChevronRight, X, Check, Zap, Crown, Repeat } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { TextReveal } from "@/components/TextReveal";
import { useState, useCallback, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import viz1 from "@/assets/wizualizacje/viz-1.png";
import viz2 from "@/assets/wizualizacje/viz-2.webp";
import viz3 from "@/assets/wizualizacje/viz-3.webp";
import viz4 from "@/assets/wizualizacje/viz-4.png";
import viz5 from "@/assets/wizualizacje/viz-5.webp";
import viz6 from "@/assets/wizualizacje/viz-6.png";
import viz7 from "@/assets/wizualizacje/viz-7.webp";
import viz8 from "@/assets/wizualizacje/viz-8.webp";
import viz9 from "@/assets/wizualizacje/viz-9.webp";
import viz10 from "@/assets/wizualizacje/viz-10.webp";
import viz11 from "@/assets/wizualizacje/viz-11.webp";
import viz12 from "@/assets/wizualizacje/viz-12.webp";
import viz13 from "@/assets/wizualizacje/viz-13.webp";
import viz14 from "@/assets/wizualizacje/viz-14.webp";
import viz15 from "@/assets/wizualizacje/viz-15.png";
import viz16 from "@/assets/wizualizacje/viz-16.webp";

const portfolioImages = [
  { src: viz1, title: "Wizualizacja produktowa" },
  { src: viz2, title: "Wizualizacja kosmiczna" },
  { src: viz3, title: "Wizualizacja produktowa" },
  { src: viz4, title: "Wizualizacja koncepcyjna" },
  { src: viz5, title: "Studio filmowe" },
  { src: viz6, title: "Wizualizacja produktowa" },
  { src: viz7, title: "Studio produkcyjne" },
  { src: viz8, title: "Wizualizacja architektoniczna" },
  { src: viz9, title: "Studio produkcyjne" },
  { src: viz10, title: "Wizualizacja produktowa" },
  { src: viz11, title: "Wizualizacja sci-fi" },
  { src: viz12, title: "Wizualizacja kosmiczna" },
  { src: viz13, title: "Wizualizacja przemysłowa" },
  { src: viz14, title: "Wizualizacja wnętrza" },
  { src: viz15, title: "Wizualizacja produktowa" },
  { src: viz16, title: "Studio produkcyjne" },
];

const services = [
  {
    icon: Building,
    title: "Wizualizacje wnętrz",
    description: "Pokażemy, jak Twoje pomieszczenia mogą wyglądać po aranżacji."
  },
  {
    icon: Box,
    title: "Wizualizacje architektoniczne",
    description: "Precyzyjnie zaprezentujemy projekt budynku."
  },
  {
    icon: Camera,
    title: "Wizualizacje produktowe",
    description: "Idealne dla agencji reklamowych i inwestorów."
  },
  {
    icon: Play,
    title: "Animacje 3D i spacery wirtualne",
    description: "Pozwól swoim klientom odkryć przestrzeń w nowoczesny sposób."
  }
];

const benefits = [
  {
    icon: Eye,
    title: "Fotorealistyczny realizm",
    description: "Nasze wizualizacje są nie do odróżnienia od rzeczywistych zdjęć"
  },
  {
    icon: Sparkles,
    title: "Nowoczesne technologie",
    description: "Wykorzystujemy panoramy 360 i modelowanie 3D"
  },
  {
    icon: Palette,
    title: "Kreatywne podejście",
    description: "Każdy projekt to unikalne podejście do Twojej wizji"
  },
  {
    icon: Layers,
    title: "Pełna elastyczność",
    description: "Możliwość wprowadzania zmian na każdym etapie projektu"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Konsultacja",
    description: "Omawiamy Twoje potrzeby i oczekiwania"
  },
  {
    step: "02",
    title: "Koncepcja",
    description: "Przygotowujemy wstępne szkice i pomysły"
  },
  {
    step: "03",
    title: "Realizacja",
    description: "Tworzymy fotorealistyczne wizualizacje 3D"
  },
  {
    step: "04",
    title: "Poprawki",
    description: "Wprowadzamy ewentualne korekty i finalizujemy projekt"
  }
];

const faqItems = [
  {
    question: "Jak długo trwa realizacja wizualizacji 3D?",
    answer: "Czas realizacji zależy od złożoności projektu. Prosta wizualizacja produktowa może być gotowa w 3-5 dni roboczych, natomiast kompleksowe projekty architektoniczne mogą wymagać 2-4 tygodni."
  },
  {
    question: "Jakie materiały są potrzebne do rozpoczęcia pracy?",
    answer: "Potrzebujemy rzutów, planów, zdjęć referencyjnych lub szkiców. Im więcej materiałów dostarczysz, tym lepiej odwzorujemy Twoją wizję."
  },
  {
    question: "Czy mogę wprowadzać poprawki w trakcie realizacji?",
    answer: "Tak, oferujemy możliwość wprowadzania poprawek na każdym etapie projektu. Standardowo w cenie zawarte są 2-3 rundy poprawek."
  },
  {
    question: "W jakich formatach dostarczacie gotowe wizualizacje?",
    answer: "Dostarczamy wizualizacje w formatach JPG, PNG, TIFF w wysokiej rozdzielczości. Animacje 3D dostarczamy w formatach MP4 lub MOV."
  },
  {
    question: "Czy tworzycie również animacje 3D?",
    answer: "Tak, specjalizujemy się również w animacjach 3D, spacerach wirtualnych oraz panoramach 360 stopni."
  },
  {
    question: "Jaki jest koszt wizualizacji 3D?",
    answer: "Koszt zależy od złożoności projektu. Proste wizualizacje produktowe zaczynają się od 500 zł, natomiast kompleksowe projekty architektoniczne wyceniamy indywidualnie."
  }
];

const pricingPackages = [
  {
    name: "Jednorazowo",
    icon: Zap,
    description: "Pojedyncze wizualizacje na zamówienie",
    prices: [
      { type: "Wizualizacja produktowa", price: "od 500 zł" },
      { type: "Wizualizacja wnętrza", price: "od 800 zł" },
      { type: "Wizualizacja architektoniczna", price: "od 1500 zł" },
      { type: "Animacja 3D (do 30s)", price: "od 3000 zł" },
    ],
    features: [
      "2 rundy poprawek w cenie",
      "Wysokiej rozdzielczości pliki",
      "Realizacja 5-14 dni roboczych",
      "Wsparcie konsultacyjne",
    ],
    popular: false,
  },
  {
    name: "Start",
    icon: Box,
    price: "1 499",
    period: "/mies.",
    description: "Idealne dla małych firm i startupów",
    features: [
      "2 wizualizacje produktowe miesięcznie",
      "1 wizualizacja wnętrza miesięcznie",
      "3 rundy poprawek na projekt",
      "Priorytetowa realizacja (3-7 dni)",
      "Dedykowany opiekun projektu",
      "Rabat 10% na dodatkowe projekty",
    ],
    popular: false,
  },
  {
    name: "Business",
    icon: Crown,
    price: "2 999",
    period: "/mies.",
    description: "Dla firm z regularnymi potrzebami",
    features: [
      "5 wizualizacji produktowych miesięcznie",
      "3 wizualizacje wnętrz miesięcznie",
      "1 wizualizacja architektoniczna miesięcznie",
      "Nieograniczone poprawki",
      "Ekspresowa realizacja (2-5 dni)",
      "Dedykowany opiekun projektu",
      "Rabat 20% na animacje 3D",
      "Dostęp do panoram 360°",
    ],
    popular: true,
  },
  {
    name: "Premium",
    icon: Repeat,
    price: "5 999",
    period: "/mies.",
    description: "Kompleksowa obsługa dla dużych projektów",
    features: [
      "Nieograniczone wizualizacje produktowe",
      "8 wizualizacji wnętrz miesięcznie",
      "3 wizualizacje architektoniczne miesięcznie",
      "2 animacje 3D (do 30s) miesięcznie",
      "Nieograniczone poprawki",
      "Realizacja priorytetowa (1-3 dni)",
      "Dedykowany zespół projektowy",
      "Panoramy 360° w cenie",
      "Spacery wirtualne w cenie",
    ],
    popular: false,
  },
];

const Wizualizacje3D = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    setSelectedImage(prev => 
      prev !== null ? (prev - 1 + portfolioImages.length) % portfolioImages.length : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImage(prev => 
      prev !== null ? (prev + 1) % portfolioImages.length : null
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handlePrevious, handleNext]);

  return (
    <>
      <Helmet>
        <title>Wizualizacje 3D Poznań - Fotorealistyczne Wizualizacje Architektoniczne | Fotz Studio</title>
        <meta 
          name="description" 
          content="Profesjonalne wizualizacje 3D w Poznaniu. Wizualizacje wnętrz, architektoniczne, produktowe oraz animacje 3D. Fotorealistyczna jakość i nowoczesne technologie." 
        />
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#75143F]/10" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#75143F]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#75143F]/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-wide px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#75143F]/20 border border-[#75143F]/30 text-[#75143F] mb-6"
              >
                <Box className="w-4 h-4" />
                <span className="text-sm font-medium">Wizualizacje 3D</span>
              </motion.div>
              
              <TextReveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Wizualizacje 3D w Poznaniu -{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">
                    Twoje marzenia w zasięgu ręki
                  </span>
                </h1>
              </TextReveal>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                Poszukujesz profesjonalnych wizualizacji architektonicznych, które pomogą Ci w realizacji projektu wnętrza? 
                Jesteśmy biurem projektowym z Poznania, które oferuje fotorealistyczne wizualizacje 3D, które spełnią Twoje oczekiwania.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="hero" size="lg" asChild>
                  <Link to="/kontakt" className="group">
                    Zamów wizualizację
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#portfolio">
                    Zobacz portfolio
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasza oferta</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Specjalizujemy się w tworzeniu profesjonalnych wizualizacji 3D dla różnych branż
                </p>
              </div>
            </FadeInView>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <FadeInView key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-card border border-border rounded-2xl p-6 h-full hover:border-[#75143F]/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </motion.div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInView>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Dlaczego warto wybrać{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">nasze wizualizacje?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Nasze wizualizacje 3D są nie tylko realistyczne, ale także wykorzystują nowoczesne technologie, 
                    takie jak panoramy 360 i modelowanie 3D. Dzięki nim, możesz zaprezentować swoje pomysły w sposób, 
                    który przyciągnie uwagę klientów i inwestorów.
                  </p>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 items-start"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#75143F]/20 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-[#75143F]" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{benefit.title}</h3>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInView>
              
              <FadeInView delay={0.2}>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.img
                      whileHover={{ scale: 1.02 }}
                      src={viz3}
                      alt="Wizualizacja 3D"
                      className="rounded-2xl w-full aspect-square object-cover"
                    />
                    <motion.img
                      whileHover={{ scale: 1.02 }}
                      src={viz8}
                      alt="Wizualizacja architektoniczna"
                      className="rounded-2xl w-full aspect-square object-cover mt-8"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-brand rounded-2xl -z-10" />
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze portfolio</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  W naszym portfolio znajdziesz różnorodne aranżacje wnętrza, które zrealizowaliśmy dla klientów w Poznaniu i okolicach. 
                  Każda realizacja to unikalny projekt, który pokazuje nasze umiejętności i kreatywność.
                </p>
              </div>
            </FadeInView>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {portfolioImages.map((image, index) => (
                <FadeInView key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-foreground font-medium">{image.title}</span>
                    </div>
                  </motion.div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted/80 hover:bg-muted transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted/80 hover:bg-muted transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={portfolioImages[selectedImage].src}
              alt={portfolioImages[selectedImage].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
              {selectedImage + 1} / {portfolioImages.length}
            </div>
          </motion.div>
        )}

        {/* Process Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Jak z nami współpracować?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Aby rozpocząć współpracę, wystarczy, że skontaktujesz się z nami. Razem omówimy Twoje potrzeby i oczekiwania.
                </p>
              </div>
            </FadeInView>
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <FadeInView key={step.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="cennik" className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Cennik i{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">pakiety subskrypcyjne</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Wybierz model współpracy dopasowany do Twoich potrzeb - jednorazowe zlecenia lub stałą subskrypcję z rabatami
                </p>
              </div>
            </FadeInView>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPackages.map((pkg, index) => (
                <FadeInView key={pkg.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className={`relative bg-card border rounded-2xl p-6 h-full flex flex-col ${
                      pkg.popular 
                        ? "border-[#75143F] ring-2 ring-[#75143F]/20" 
                        : "border-border hover:border-[#75143F]/50"
                    } transition-all duration-300`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-brand rounded-full text-white text-xs font-medium">
                        Najpopularniejszy
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                        <pkg.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    </div>
                    
                    {pkg.price ? (
                      <div className="mb-6">
                        <span className="text-4xl font-bold">{pkg.price}</span>
                        <span className="text-muted-foreground"> zł{pkg.period}</span>
                      </div>
                    ) : pkg.prices ? (
                      <div className="mb-6 space-y-2">
                        {pkg.prices.map((p, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{p.type}</span>
                            <span className="font-medium">{p.price}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    
                    <ul className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <Check className="w-4 h-4 text-[#75143F] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={pkg.popular ? "hero" : "outline"} 
                      className="w-full" 
                      asChild
                    >
                      <Link to="/kontakt">
                        {pkg.price ? "Wybierz pakiet" : "Zapytaj o wycenę"}
                      </Link>
                    </Button>
                  </motion.div>
                </FadeInView>
              ))}
            </div>
            
            <FadeInView delay={0.4}>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground">
                  Potrzebujesz indywidualnej wyceny?{" "}
                  <Link to="/kontakt" className="text-[#75143F] hover:underline font-medium">
                    Skontaktuj się z nami
                  </Link>
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Często zadawane pytania</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Odpowiedzi na najczęściej zadawane pytania dotyczące wizualizacji 3D
                </p>
              </div>
            </FadeInView>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <FadeInView key={index} delay={index * 0.05}>
                    <AccordionItem value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </FadeInView>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 md:p-20 text-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Skontaktuj się z nami
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                    Nie czekaj! Skontaktuj się z nami już dziś, aby uzyskać więcej informacji na temat naszych usług wizualizacji 3D w Poznaniu. 
                    Razem stworzymy coś wyjątkowego!
                  </p>
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/kontakt" className="group">
                      Zamów bezpłatną wycenę
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Wizualizacje3D;
