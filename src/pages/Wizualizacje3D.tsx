import { KlagemConfigurator } from "@/components/sections/KlagemConfigurator";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Building, Camera, Layers, Play, Sparkles, Eye, Palette, CheckCircle, ChevronLeft, ChevronRight, X, Repeat, Home, ShoppingBag, Factory, Sofa, Bath, Utensils, Building2, Store, Warehouse, Car } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { TextReveal } from "@/components/TextReveal";
import { useState, useCallback, useEffect, Suspense, lazy } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceSchema, BreadcrumbSchema, FAQSchema, OrganizationSchema} from "@/components/seo/StructuredData";

// Lazy load the 3D viewer for performance
const ModelViewer3D = lazy(() => import("@/components/ModelViewer3D").then(module => ({ default: module.ModelViewer3D })));

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
import viz17 from "@/assets/wizualizacje/viz-17.webp";
import viz18 from "@/assets/wizualizacje/viz-18.webp";
import viz19 from "@/assets/wizualizacje/viz-19.webp";
import viz20 from "@/assets/wizualizacje/viz-20.webp";
import viz21 from "@/assets/wizualizacje/viz-21.webp";
import viz22 from "@/assets/wizualizacje/viz-22.webp";

// Categories with images
const portfolioCategories = [
  { id: "all", label: "Wszystkie", icon: Sparkles },
  { id: "interior", label: "Wnętrza", icon: Home },
  { id: "architecture", label: "Architektura", icon: Building },
  { id: "product", label: "Produkty", icon: ShoppingBag },
  { id: "industrial", label: "Przemysłowe", icon: Factory },
];

const portfolioImages = [
  // Wnętrza
  { src: viz17, title: "Sypialnia - styl japoński", category: "interior" },
  { src: viz18, title: "Salon ze schodami", category: "interior" },
  { src: viz19, title: "Salon nowoczesny", category: "interior" },
  { src: viz20, title: "Loft industrialny", category: "interior" },
  { src: viz21, title: "Przestrzeń dzienna", category: "interior" },
  { src: viz22, title: "Biurko modułowe", category: "interior" },
  { src: viz14, title: "Wizualizacja wnętrza", category: "interior" },
  
  // Architektura
  { src: viz8, title: "Wizualizacja architektoniczna", category: "architecture" },
  { src: viz5, title: "Studio filmowe", category: "architecture" },
  { src: viz7, title: "Studio produkcyjne", category: "architecture" },
  { src: viz9, title: "Studio produkcyjne 2", category: "architecture" },
  { src: viz16, title: "Przestrzeń produkcyjna", category: "architecture" },
  
  // Produkty
  { src: viz1, title: "Wizualizacja produktowa", category: "product" },
  { src: viz3, title: "Wizualizacja produktowa 2", category: "product" },
  { src: viz4, title: "Wizualizacja koncepcyjna", category: "product" },
  { src: viz6, title: "Wizualizacja produktowa 3", category: "product" },
  { src: viz10, title: "Wizualizacja produktowa 4", category: "product" },
  { src: viz15, title: "Wizualizacja produktowa 5", category: "product" },
  
  // Przemysłowe / Sci-fi
  { src: viz2, title: "Wizualizacja kosmiczna", category: "industrial" },
  { src: viz11, title: "Wizualizacja sci-fi", category: "industrial" },
  { src: viz12, title: "Wizualizacja kosmiczna 2", category: "industrial" },
  { src: viz13, title: "Wizualizacja przemysłowa", category: "industrial" },
];

// Service categories with variants
const serviceCategories = [
  {
    id: "interior",
    icon: Home,
    title: "Wizualizacje wnętrz",
    description: "Fotorealistyczne wizualizacje pomieszczeń mieszkalnych i komercyjnych",
    variants: [
      { name: "Salon / Pokój dzienny" },
      { name: "Sypialnia" },
      { name: "Kuchnia" },
      { name: "Łazienka" },
      { name: "Biuro / Open space" },
      { name: "Restauracja / Kawiarnia" },
      { name: "Hotel / Apartament" },
      { name: "Sklep / Showroom" },
    ]
  },
  {
    id: "architecture",
    icon: Building2,
    title: "Wizualizacje architektoniczne",
    description: "Zewnętrzne wizualizacje budynków i osiedli",
    variants: [
      { name: "Dom jednorodzinny" },
      { name: "Budynek wielorodzinny" },
      { name: "Osiedle mieszkaniowe" },
      { name: "Budynek biurowy" },
      { name: "Obiekt handlowy" },
      { name: "Obiekt przemysłowy" },
      { name: "Zagospodarowanie terenu" },
      { name: "Wizualizacja nocna" },
    ]
  },
  {
    id: "product",
    icon: ShoppingBag,
    title: "Wizualizacje produktowe",
    description: "Renderingi produktów dla e-commerce i reklamy",
    variants: [
      { name: "Produkt prosty (1 ujęcie)" },
      { name: "Produkt prosty (pakiet 5 ujęć)" },
      { name: "Produkt złożony (1 ujęcie)" },
      { name: "Produkt złożony (pakiet 5 ujęć)" },
      { name: "Packshot na białym tle" },
      { name: "Lifestyle / Kontekst" },
      { name: "Exploded view (rozłożony)" },
      { name: "Animacja produktowa (10s)" },
    ]
  },
  {
    id: "furniture",
    icon: Sofa,
    title: "Wizualizacje mebli",
    description: "Renderingi mebli dla producentów i deweloperów",
    variants: [
      { name: "Pojedynczy mebel (1 ujęcie)" },
      { name: "Pojedynczy mebel (pakiet 5 ujęć)" },
      { name: "Zestaw mebli" },
      { name: "Mebel w kontekście wnętrza" },
      { name: "Konfiguracja wariantów kolorystycznych" },
      { name: "Model 3D do konfiguratora" },
    ]
  },
  {
    id: "bathroom",
    icon: Bath,
    title: "Wizualizacje łazienek",
    description: "Specjalistyczne wizualizacje armatury i ceramiki",
    variants: [
      { name: "Łazienka kompletna" },
      { name: "Armatura sanitarna (1 produkt)" },
      { name: "Ceramika łazienkowa" },
      { name: "Kabina prysznicowa / Wanna" },
      { name: "Meble łazienkowe" },
      { name: "Pakiet produktowy (10 produktów)" },
    ]
  },
  {
    id: "kitchen",
    icon: Utensils,
    title: "Wizualizacje kuchni",
    description: "Wizualizacje zabudów i sprzętów kuchennych",
    variants: [
      { name: "Kuchnia kompletna" },
      { name: "Zabudowa kuchenna" },
      { name: "AGD (1 produkt)" },
      { name: "AGD pakiet (5 produktów)" },
      { name: "Blat / Zlewozmywak" },
      { name: "Kuchnia w kontekście salonu" },
    ]
  },
  {
    id: "commercial",
    icon: Store,
    title: "Wizualizacje komercyjne",
    description: "Wizualizacje dla retail, hoteli i gastronomii",
    variants: [
      { name: "Sklep / Butik" },
      { name: "Restauracja" },
      { name: "Bar / Kawiarnia" },
      { name: "Recepcja hotelowa" },
      { name: "Pokój hotelowy" },
      { name: "Sala konferencyjna" },
      { name: "Fitness / SPA" },
    ]
  },
  {
    id: "industrial",
    icon: Warehouse,
    title: "Wizualizacje przemysłowe",
    description: "Wizualizacje maszyn, hal i procesów produkcyjnych",
    variants: [
      { name: "Maszyna / Urządzenie" },
      { name: "Linia produkcyjna" },
      { name: "Hala produkcyjna" },
      { name: "Magazyn / Logistyka" },
      { name: "Schemat technologiczny" },
      { name: "Animacja procesu (30s)" },
    ]
  },
  {
    id: "automotive",
    icon: Car,
    title: "Wizualizacje automotive",
    description: "Wizualizacje pojazdów i części samochodowych",
    variants: [
      { name: "Samochód - ujęcie zewnętrzne" },
      { name: "Samochód - wnętrze" },
      { name: "Część samochodowa" },
      { name: "Opona / Felga" },
      { name: "Konfiguracja kolorystyczna" },
      { name: "Animacja 360° pojazdu" },
    ]
  },
];

const benefits = [
  {
    icon: Eye,
    title: "Fotorealistyczny realizm",
    description: "Dbamy o światło, materiały i detale, aby wizualizacje wyglądały jak fotografia"
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
    answer: "Czas realizacji zależy od złożoności projektu, liczby ujęć i kompletności materiałów. Prosta wizualizacja produktowa zajmuje zwykle mniej czasu niż kompleksowy projekt architektoniczny, a dokładny harmonogram ustalamy w ofercie."
  },
  {
    question: "Jakie materiały są potrzebne do rozpoczęcia pracy?",
    answer: "Potrzebujemy rzutów, planów, zdjęć referencyjnych lub szkiców. Im więcej materiałów dostarczysz, tym lepiej odwzorujemy Twoją wizję."
  },
  {
    question: "Czy mogę wprowadzać poprawki w trakcie realizacji?",
    answer: "Tak, oferujemy możliwość wprowadzania poprawek na każdym etapie projektu. Liczbę rund poprawek ustalamy w ofercie."
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
    answer: "Koszt zależy od rodzaju i złożoności obiektu, liczby ujęć i wariantów, dostępnych materiałów (modele 3D, rzuty, zdjęcia), poziomu detalu, ewentualnych animacji oraz terminu. Wycenę przygotowujemy po rozmowie o zakresie."
  }
];

const pricingFactors = [
  {
    icon: Box,
    title: "Rodzaj i złożoność obiektu",
    description: "Inaczej wyceniamy prosty produkt, a inaczej rozbudowane wnętrze, budynek czy całe osiedle."
  },
  {
    icon: Layers,
    title: "Liczba ujęć i wariantów",
    description: "Liczba kamer, wersji kolorystycznych i materiałowych oraz ujęć dziennych lub nocnych."
  },
  {
    icon: Camera,
    title: "Materiały wejściowe",
    description: "Czy dostarczasz modele 3D lub CAD, rzuty i zdjęcia referencyjne, czy model budujemy od zera."
  },
  {
    icon: Eye,
    title: "Poziom detalu i przeznaczenie",
    description: "Packshot na białym tle, scena lifestyle czy plik do druku wielkoformatowego."
  },
  {
    icon: Play,
    title: "Animacje i formaty interaktywne",
    description: "Długość animacji, panoramy 360°, spacery wirtualne i modele do konfiguratora."
  },
  {
    icon: Repeat,
    title: "Termin i zakres poprawek",
    description: "Harmonogram, tryb pilny i liczbę rund poprawek ustalamy w ofercie."
  },
];

const Wizualizacje3D = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredImages = activeCategory === "all" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  const handlePrevious = useCallback(() => {
    const currentFiltered = filteredImages;
    setSelectedImage(prev => 
      prev !== null ? (prev - 1 + currentFiltered.length) % currentFiltered.length : null
    );
  }, [filteredImages]);

  const handleNext = useCallback(() => {
    const currentFiltered = filteredImages;
    setSelectedImage(prev => 
      prev !== null ? (prev + 1) % currentFiltered.length : null
    );
  }, [filteredImages]);

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
      <SEOHead
        title="Wizualizacje 3D Poznań | Fotz Studio"
        description="Wizualizacje 3D Poznań — profesjonalne renderingi architektoniczne, wizualizacje wnętrz i produktów. Animacje 3D, wirtualne spacery i prezentacje inwestycji w Fotz Studio."
        canonical="https://www.fotz-studio.pl/wizualizacje-3d"
        keywords="wizualizacje 3D, wizualizacje architektoniczne, wizualizacje wnętrz, renderingi 3D, animacje 3D, Poznań"
      />
      
      <ServiceSchema 
        name="Wizualizacje 3D"
        description="Profesjonalne wizualizacje 3D - wnętrza, architektura, produkty. Fotorealistyczne renderingi i animacje 3D dla deweloperów i firm."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Wizualizacje 3D", url: "https://www.fotz-studio.pl/wizualizacje-3d" },
        ]}/>
      
      <FAQSchema items={faqItems} />
      
      <OrganizationSchema />

      
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-wide px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6"
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
                Jesteśmy studiem kreatywnym z Poznania, które tworzy fotorealistyczne wizualizacje 3D dopasowane do Twojego projektu.
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
                  <a href="#kategorie">
                    Zobacz kategorie
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section id="kategorie" className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Kategorie usług
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Wybierz <span className="bg-gradient-brand bg-clip-text text-transparent">rodzaj wizualizacji</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kliknij w kategorię, aby zobaczyć przykładowe warianty. Każdy projekt wyceniamy po rozmowie o zakresie.
                </p>
              </div>
            </FadeInView>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((category, index) => (
                <FadeInView key={category.id} delay={index * 0.05}>
                  <motion.div
                    className={cn(
                      "bg-card border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer",
                      expandedService === category.id 
                        ? "border-primary/50 ring-2 ring-primary/20" 
                        : "border-border hover:border-primary/30"
                    )}
                    onClick={() => setExpandedService(expandedService === category.id ? null : category.id)}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                        <ChevronRight className={cn(
                          "w-5 h-5 text-muted-foreground transition-transform",
                          expandedService === category.id && "rotate-90"
                        )} />
                      </div>
                      
                      {/* Expanded variants */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: expandedService === category.id ? "auto" : 0,
                          opacity: expandedService === category.id ? 1 : 0
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-border/50 space-y-3">
                          {category.variants.map((variant, vIndex) => (
                            <div 
                              key={vIndex}
                              className="flex items-center justify-between text-sm p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                            >
                              <span className="font-medium">{variant.name}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive 3D Model Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Interaktywny model{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">3D</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Obracaj model 3D, przybliżaj i odkrywaj każdy szczegół. 
                  Tak prezentujemy produkty naszych klientów.
                </p>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <div className="max-w-4xl mx-auto">
                <Suspense fallback={
                  <div className="aspect-square md:aspect-video bg-card rounded-3xl border border-border flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                      <span className="text-sm text-muted-foreground">Ładowanie podglądu 3D...</span>
                    </div>
                  </div>
                }>
                  <ModelViewer3D 
                    modelUrl="/models/regulator-3d.glb"
                    title="Wizualizacja produktu przemysłowego"
                    description="Regulator ciśnienia - przykład wizualizacji produktowej 3D dla klienta B2B"
                  />
                </Suspense>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 bg-muted/30">
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
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-primary" />
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
                <div className="grid grid-cols-2 gap-4">
                  {portfolioImages.slice(0, 4).map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(portfolioImages.indexOf(image))}
                    >
                      <img loading="lazy"
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                        <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{image.title}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <KlagemConfigurator />
        <section id="portfolio" className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Portfolio
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nasze <span className="bg-gradient-brand bg-clip-text text-transparent">realizacje</span>
                </h2>
              </div>
            </FadeInView>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === cat.id
                      ? "bg-gradient-brand text-white"
                      : "bg-card border border-border text-foreground/70 hover:border-primary/30"
                  )}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.category}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(index)}
                >
                  <img loading="lazy"
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{image.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Jak <span className="bg-gradient-brand bg-clip-text text-transparent">pracujemy?</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Prosty i przejrzysty proces współpracy
                </p>
              </div>
            </FadeInView>
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <FadeInView key={step.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-brand text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
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

        {/* Pricing Factors Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Wycena
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Od czego zależy{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">wycena?</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Wycenę przygotowujemy po rozmowie o zakresie i przejrzeniu materiałów. Przy regularnych
                  zleceniach możemy ustalić stały miesięczny zakres współpracy.
                </p>
              </div>
            </FadeInView>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingFactors.map((factor, index) => (
                <FadeInView key={factor.title} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <factor.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{factor.title}</h3>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" asChild>
                <Link to="/kontakt" className="group">
                  Poproś o wycenę
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <FadeInView>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Często zadawane{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">pytania</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Odpowiadamy na najczęściej zadawane pytania dotyczące wizualizacji 3D
                  </p>
                  <Button variant="hero" asChild>
                    <Link to="/kontakt" className="group">
                      Masz inne pytanie?
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </FadeInView>
              
              <FadeInView delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Gotowy na profesjonalne{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">wizualizacje 3D?</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Skontaktuj się z nami i otrzymaj bezpłatną wycenę dla Twojego projektu
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/kontakt" className="group">
                    Zamów bezpłatną wycenę
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Related Services */}

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
              Wizualizacje 3D Poznań — renderingi architektoniczne i wizualizacje wnętrz
            </h2>
            <p className="text-muted-foreground mb-4">
              Wizualizacje 3D Fotz Studio w Poznaniu to profesjonalne renderingi dla
              deweloperów, architektów, projektantów wnętrz i firm produkcyjnych.
              Tworzymy fotorealistyczne wizualizacje architektoniczne budynków i osiedli,
              wizualizacje wnętrz mieszkalnych i komercyjnych oraz wizualizacje produktów
              na potrzeby e-commerce i katalogów. Renderingi 3D zastępują kosztowne
              sesje fotograficzne i pozwalają prezentować produkty i nieruchomości
              jeszcze przed ich realizacją.
            </p>
            <p className="text-muted-foreground mb-6">
              Dążymy do fotorealizmu — dbamy o światło, materiały i detale,
              aby renderingi wyglądały jak fotografia. Używamy najnowszych technologii:
              3ds Max, Corona Renderer, V-Ray, Blender — dopasowujemy workflow do specyfiki
              projektu.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Renderingi 3D dla deweloperów i architektów — prezentacja inwestycji
            </h2>
            <p className="text-muted-foreground mb-4">
              Dla branży deweloperskiej realizujemy kompleksowe wizualizacje inwestycji:
              renderingi zewnętrzne budynków, wizualizacje zagospodarowania terenu,
              animacje 3D przedstawiające finalizację budowy oraz wirtualne spacery
              po mieszkaniach i lokalach usługowych. To podstawowe narzędzia sprzedaży
              nieruchomości w fazie off-plan.
            </p>
            <p className="text-muted-foreground mb-6">
              Architekci i biura projektowe korzystają z naszych usług wizualizacji 3D
              do prezentacji projektów inwestorom i klientom. Renderingi 3D ułatwiają
              zrozumienie rysunków technicznych — klient widzi, jak może wyglądać realizacja.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Wizualizacje produktów 3D, animacje i virtual tour — nowoczesna prezentacja oferty
            </h2>
            <p className="text-muted-foreground mb-4">
              Wizualizacje produktów 3D to alternatywa dla sesji fotograficznych —
              często prostsza w organizacji i dająca pełną kontrolę nad światłem, tłem i wariantami
              kolorystycznymi. Sklepy e-commerce, katalogi i materiały reklamowe mogą korzystać
              z jednego modelu w wielu ujęciach i wariantach.
            </p>
            <p className="text-muted-foreground">
              Animacje 3D i virtual tour to nowoczesne formaty prezentacji, które
              pomagają klientom lepiej zrozumieć produkt lub inwestycję. Skontaktuj się z Fotz Studio,
              by wycenić wizualizacje 3D dla Twojego projektu — renderingi architektoniczne,
              wnętrz lub produktów.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/uslugi/branding" className="text-primary hover:underline font-medium text-sm">→ Branding</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
            </div>
          </motion.div>
        </div>
      </section>

        <RelatedServices 
          currentService="wizualizacje-3d"
          subtitle="Usługi uzupełniające wizualizacje i prezentację produktów"
        />

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="font-medium">{filteredImages[selectedImage].title}</p>
              <p className="text-sm text-white/60">{selectedImage + 1} / {filteredImages.length}</p>
            </div>
          </motion.div>
        )}
      </Layout>
    </>
  );
};

export default Wizualizacje3D;
