import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Building, Camera, Layers, Play, Sparkles, Eye, Palette, CheckCircle, ChevronLeft, ChevronRight, X, Check, Zap, Crown, Repeat, Home, ShoppingBag, Factory, Sofa, Bath, Utensils, Building2, Store, Warehouse, Car } from "lucide-react";
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
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

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
import viz17 from "@/assets/wizualizacje/viz-17.png";
import viz18 from "@/assets/wizualizacje/viz-18.png";
import viz19 from "@/assets/wizualizacje/viz-19.png";
import viz20 from "@/assets/wizualizacje/viz-20.png";
import viz21 from "@/assets/wizualizacje/viz-21.png";
import viz22 from "@/assets/wizualizacje/viz-22.png";

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
      { name: "Salon / Pokój dzienny", price: "od 800 zł", time: "3-5 dni" },
      { name: "Sypialnia", price: "od 700 zł", time: "3-5 dni" },
      { name: "Kuchnia", price: "od 900 zł", time: "4-6 dni" },
      { name: "Łazienka", price: "od 800 zł", time: "3-5 dni" },
      { name: "Biuro / Open space", price: "od 1200 zł", time: "5-7 dni" },
      { name: "Restauracja / Kawiarnia", price: "od 1500 zł", time: "5-8 dni" },
      { name: "Hotel / Apartament", price: "od 1800 zł", time: "6-10 dni" },
      { name: "Sklep / Showroom", price: "od 1400 zł", time: "5-8 dni" },
    ]
  },
  {
    id: "architecture",
    icon: Building2,
    title: "Wizualizacje architektoniczne",
    description: "Zewnętrzne wizualizacje budynków i osiedli",
    variants: [
      { name: "Dom jednorodzinny", price: "od 1500 zł", time: "5-8 dni" },
      { name: "Budynek wielorodzinny", price: "od 3000 zł", time: "8-14 dni" },
      { name: "Osiedle mieszkaniowe", price: "od 5000 zł", time: "14-21 dni" },
      { name: "Budynek biurowy", price: "od 3500 zł", time: "10-14 dni" },
      { name: "Obiekt handlowy", price: "od 2500 zł", time: "7-12 dni" },
      { name: "Obiekt przemysłowy", price: "od 3000 zł", time: "8-14 dni" },
      { name: "Zagospodarowanie terenu", price: "od 2000 zł", time: "5-10 dni" },
      { name: "Wizualizacja nocna", price: "+30%", time: "+1-2 dni" },
    ]
  },
  {
    id: "product",
    icon: ShoppingBag,
    title: "Wizualizacje produktowe",
    description: "Renderingi produktów dla e-commerce i reklamy",
    variants: [
      { name: "Produkt prosty (1 ujęcie)", price: "od 300 zł", time: "1-2 dni" },
      { name: "Produkt prosty (pakiet 5 ujęć)", price: "od 1200 zł", time: "3-5 dni" },
      { name: "Produkt złożony (1 ujęcie)", price: "od 600 zł", time: "2-4 dni" },
      { name: "Produkt złożony (pakiet 5 ujęć)", price: "od 2500 zł", time: "5-8 dni" },
      { name: "Packshot na białym tle", price: "od 200 zł", time: "1 dzień" },
      { name: "Lifestyle / Kontekst", price: "od 500 zł", time: "2-4 dni" },
      { name: "Exploded view (rozłożony)", price: "od 800 zł", time: "3-5 dni" },
      { name: "Animacja produktowa (10s)", price: "od 1500 zł", time: "5-10 dni" },
    ]
  },
  {
    id: "furniture",
    icon: Sofa,
    title: "Wizualizacje mebli",
    description: "Renderingi mebli dla producentów i deweloperów",
    variants: [
      { name: "Pojedynczy mebel (1 ujęcie)", price: "od 400 zł", time: "2-3 dni" },
      { name: "Pojedynczy mebel (pakiet 5 ujęć)", price: "od 1500 zł", time: "4-6 dni" },
      { name: "Zestaw mebli", price: "od 800 zł", time: "3-5 dni" },
      { name: "Mebel w kontekście wnętrza", price: "od 1000 zł", time: "4-6 dni" },
      { name: "Konfiguracja wariantów kolorystycznych", price: "od 200 zł/wariant", time: "+1 dzień" },
      { name: "Model 3D do konfiguratora", price: "od 600 zł", time: "3-5 dni" },
    ]
  },
  {
    id: "bathroom",
    icon: Bath,
    title: "Wizualizacje łazienek",
    description: "Specjalistyczne wizualizacje armatury i ceramiki",
    variants: [
      { name: "Łazienka kompletna", price: "od 1000 zł", time: "4-6 dni" },
      { name: "Armatura sanitarna (1 produkt)", price: "od 350 zł", time: "2-3 dni" },
      { name: "Ceramika łazienkowa", price: "od 400 zł", time: "2-4 dni" },
      { name: "Kabina prysznicowa / Wanna", price: "od 500 zł", time: "2-4 dni" },
      { name: "Meble łazienkowe", price: "od 450 zł", time: "2-4 dni" },
      { name: "Pakiet produktowy (10 produktów)", price: "od 2500 zł", time: "7-10 dni" },
    ]
  },
  {
    id: "kitchen",
    icon: Utensils,
    title: "Wizualizacje kuchni",
    description: "Wizualizacje zabudów i sprzętów kuchennych",
    variants: [
      { name: "Kuchnia kompletna", price: "od 1200 zł", time: "5-7 dni" },
      { name: "Zabudowa kuchenna", price: "od 900 zł", time: "4-6 dni" },
      { name: "AGD (1 produkt)", price: "od 400 zł", time: "2-3 dni" },
      { name: "AGD pakiet (5 produktów)", price: "od 1600 zł", time: "5-7 dni" },
      { name: "Blat / Zlewozmywak", price: "od 350 zł", time: "2-3 dni" },
      { name: "Kuchnia w kontekście salonu", price: "od 1500 zł", time: "5-8 dni" },
    ]
  },
  {
    id: "commercial",
    icon: Store,
    title: "Wizualizacje komercyjne",
    description: "Wizualizacje dla retail, hoteli i gastronomii",
    variants: [
      { name: "Sklep / Butik", price: "od 1800 zł", time: "6-10 dni" },
      { name: "Restauracja", price: "od 2000 zł", time: "7-12 dni" },
      { name: "Bar / Kawiarnia", price: "od 1500 zł", time: "5-8 dni" },
      { name: "Recepcja hotelowa", price: "od 1600 zł", time: "5-8 dni" },
      { name: "Pokój hotelowy", price: "od 1200 zł", time: "4-7 dni" },
      { name: "Sala konferencyjna", price: "od 1400 zł", time: "5-8 dni" },
      { name: "Fitness / SPA", price: "od 2000 zł", time: "7-12 dni" },
    ]
  },
  {
    id: "industrial",
    icon: Warehouse,
    title: "Wizualizacje przemysłowe",
    description: "Wizualizacje maszyn, hal i procesów produkcyjnych",
    variants: [
      { name: "Maszyna / Urządzenie", price: "od 1500 zł", time: "5-10 dni" },
      { name: "Linia produkcyjna", price: "od 3000 zł", time: "10-18 dni" },
      { name: "Hala produkcyjna", price: "od 2500 zł", time: "8-14 dni" },
      { name: "Magazyn / Logistyka", price: "od 2000 zł", time: "6-10 dni" },
      { name: "Schemat technologiczny", price: "od 1200 zł", time: "4-7 dni" },
      { name: "Animacja procesu (30s)", price: "od 4000 zł", time: "14-21 dni" },
    ]
  },
  {
    id: "automotive",
    icon: Car,
    title: "Wizualizacje automotive",
    description: "Wizualizacje pojazdów i części samochodowych",
    variants: [
      { name: "Samochód - ujęcie zewnętrzne", price: "od 2000 zł", time: "7-12 dni" },
      { name: "Samochód - wnętrze", price: "od 1800 zł", time: "6-10 dni" },
      { name: "Część samochodowa", price: "od 600 zł", time: "3-5 dni" },
      { name: "Opona / Felga", price: "od 400 zł", time: "2-4 dni" },
      { name: "Konfiguracja kolorystyczna", price: "od 300 zł/wariant", time: "+1 dzień" },
      { name: "Animacja 360° pojazdu", price: "od 3500 zł", time: "10-18 dni" },
    ]
  },
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
    answer: "Koszt zależy od złożoności projektu. Proste wizualizacje produktowe zaczynają się od 300 zł, natomiast kompleksowe projekty architektoniczne wyceniamy indywidualnie. Sprawdź nasze kategorie cenowe poniżej."
  }
];

const pricingPackages = [
  {
    name: "Jednorazowo",
    icon: Zap,
    description: "Pojedyncze wizualizacje na zamówienie",
    prices: [
      { type: "Wizualizacja produktowa", price: "od 300 zł" },
      { type: "Wizualizacja wnętrza", price: "od 700 zł" },
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
        title="Wizualizacje 3D Poznań — Renderingi Wnętrz, Architektura i Produkty | Fotz Studio"
        description="Wizualizacje 3D Poznań — profesjonalne renderingi architektoniczne, wizualizacje wnętrz i produktów. Animacje 3D, virtual tour, prezentacje inwestycji deweloperskich. Fotz Studio."
        canonical="https://fotz.pl/wizualizacje-3d"
        keywords="wizualizacje 3D, wizualizacje architektoniczne, wizualizacje wnętrz, renderingi 3D, animacje 3D, Poznań"
      />
      
      <ServiceSchema 
        name="Wizualizacje 3D"
        description="Profesjonalne wizualizacje 3D - wnętrza, architektura, produkty. Fotorealistyczne renderingi i animacje 3D dla deweloperów i firm."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Wizualizacje 3D", url: "https://fotz.pl/wizualizacje-3d" },
        ]}
      />
      
      <FAQSchema items={faqItems} />
      
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
                  Kliknij w kategorię, aby zobaczyć szczegółowe warianty i ceny
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
                              <div className="flex items-center gap-4">
                                <span className="text-muted-foreground text-xs">{variant.time}</span>
                                <span className="text-primary font-semibold">{variant.price}</span>
                              </div>
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
                      <img
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
                  <img
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

        {/* Pricing Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Pakiety abonamentowe
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stała współpraca ={" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">niższe ceny</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Wybierz pakiet dopasowany do Twoich potrzeb
                </p>
              </div>
            </FadeInView>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPackages.map((pkg, index) => (
                <FadeInView key={pkg.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className={cn(
                      "relative bg-card border rounded-2xl p-6 h-full flex flex-col",
                      pkg.popular 
                        ? "border-primary ring-2 ring-primary/20" 
                        : "border-border"
                    )}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-1 rounded-full bg-gradient-brand text-white text-xs font-medium">
                          Najpopularniejszy
                        </span>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                        <pkg.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    </div>
                    
                    {pkg.price ? (
                      <div className="mb-6">
                        <span className="text-3xl font-bold">{pkg.price}</span>
                        <span className="text-muted-foreground"> zł{pkg.period}</span>
                      </div>
                    ) : (
                      <div className="mb-6 space-y-2">
                        {pkg.prices?.map((p, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{p.type}</span>
                            <span className="font-medium">{p.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <ul className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={pkg.popular ? "hero" : "outline"} 
                      className="w-full"
                      asChild
                    >
                      <Link to="/kontakt">Wybierz pakiet</Link>
                    </Button>
                  </motion.div>
                </FadeInView>
              ))}
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
              Jakość naszych wizualizacji 3D jest na poziomie fotorealizmu — renderingi
              są nie do odróżnienia od prawdziwych zdjęć. Używamy najnowszych technologii:
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
              do prezentacji projektów inwestorom i klientom. Renderingi 3D eliminują
              niezrozumienie rysunków technicznych — każdy klient zobaczy dokładnie
              jak będzie wyglądać realizacja.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Wizualizacje produktów 3D, animacje i virtual tour — nowoczesna prezentacja oferty
            </h2>
            <p className="text-muted-foreground mb-4">
              Wizualizacje produktów 3D to alternatywa dla sesji fotograficznych —
              szybsza, tańsza i dająca pełną kontrolę nad światłem, tłem i wariantami
              kolorystycznymi. Sklepy e-commerce, katalogi i materiały reklamowe zyskują
              na jakości przy niższych kosztach produkcji.
            </p>
            <p className="text-muted-foreground">
              Animacje 3D i virtual tour to nowoczesne formaty prezentacji, które
              zachwycają klientów i zwiększają konwersję. Skontaktuj się z Fotz Studio,
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
