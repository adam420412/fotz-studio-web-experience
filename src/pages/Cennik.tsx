import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Film, 
  Camera, 
  Box, 
  TrendingUp, 
  Share2,
  Facebook,
  Target,
  Brush,
  ShoppingCart,
  Calculator,
  Send,
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Plus,
  Minus,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  priceTo?: number;
  priceType: "jednorazowo" | "miesięcznie";
  icon: React.ComponentType<{ className?: string }>;
  popular?: boolean;
  includes?: string[];
}

interface CategoryStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  services: ServiceOption[];
}

const categories: CategoryStep[] = [
  {
    id: "strony",
    title: "Strona internetowa",
    description: "Strony WWW, landing page, sklepy",
    icon: Globe,
    services: [
      {
        id: "landing",
        name: "Landing Page",
        description: "Jednostronicowa witryna z formularzem",
        priceFrom: 2000,
        priceTo: 4000,
        priceType: "jednorazowo",
        icon: Globe,
        includes: ["Responsywny design", "Formularz kontaktowy", "Optymalizacja SEO", "Hosting (1 rok)"]
      },
      {
        id: "firmowa",
        name: "Strona Firmowa",
        description: "Wielostronicowa wizytówka z CMS",
        priceFrom: 5000,
        priceTo: 12000,
        priceType: "jednorazowo",
        icon: Globe,
        popular: true,
        includes: ["Do 10 podstron", "System CMS", "Blog firmowy", "Integracje", "Szkolenie"]
      },
      {
        id: "ecommerce",
        name: "Sklep E-commerce",
        description: "Pełna integracja płatności i logistyki",
        priceFrom: 8000,
        priceTo: 25000,
        priceType: "jednorazowo",
        icon: ShoppingCart,
        includes: ["Nieograniczone produkty", "Płatności online", "Integracja z kurierami", "Panel administracyjny"]
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Reklama",
    description: "Social media, kampanie płatne",
    icon: Share2,
    services: [
      {
        id: "social-media",
        name: "Prowadzenie Social Media",
        description: "Kompleksowa obsługa profili",
        priceFrom: 1500,
        priceTo: 4000,
        priceType: "miesięcznie",
        icon: Share2,
        popular: true,
        includes: ["12 postów/mies.", "Stories", "Moderacja", "Raporty"]
      },
      {
        id: "facebook-ads",
        name: "Facebook Ads",
        description: "Kampanie w ekosystemie Meta",
        priceFrom: 1500,
        priceTo: 5000,
        priceType: "miesięcznie",
        icon: Facebook,
        includes: ["Strategia kampanii", "Kreacje", "Optymalizacja", "Raportowanie"]
      },
      {
        id: "google-ads",
        name: "Google Ads",
        description: "Reklamy w wyszukiwarce i display",
        priceFrom: 1500,
        priceTo: 6000,
        priceType: "miesięcznie",
        icon: Target,
        includes: ["Konfiguracja", "Search/Display", "Remarketing", "Analityka"]
      },
    ],
  },
  {
    id: "seo",
    title: "Pozycjonowanie SEO",
    description: "Widoczność w wyszukiwarkach",
    icon: TrendingUp,
    services: [
      {
        id: "seo-start",
        name: "SEO Start",
        description: "Podstawowa optymalizacja",
        priceFrom: 1500,
        priceTo: 2500,
        priceType: "miesięcznie",
        icon: TrendingUp,
        includes: ["Audyt SEO", "On-page", "5 fraz kluczowych", "Raport miesięczny"]
      },
      {
        id: "seo-business",
        name: "SEO Business",
        description: "Kompleksowe pozycjonowanie",
        priceFrom: 2500,
        priceTo: 4000,
        priceType: "miesięcznie",
        icon: TrendingUp,
        popular: true,
        includes: ["Pełny audyt", "On-page + Off-page", "15 fraz", "Content marketing"]
      },
      {
        id: "seo-premium",
        name: "SEO Premium",
        description: "Agresywna strategia SEO",
        priceFrom: 4000,
        priceTo: 8000,
        priceType: "miesięcznie",
        icon: TrendingUp,
        includes: ["Dedykowany strateg", "Nieograniczone frazy", "Link building", "PR & outreach"]
      },
    ],
  },
  {
    id: "produkcja",
    title: "Produkcja foto/video",
    description: "Sesje, filmy, wizualizacje 3D",
    icon: Film,
    services: [
      {
        id: "foto",
        name: "Sesja Fotograficzna",
        description: "Profesjonalna sesja zdjęciowa",
        priceFrom: 1500,
        priceTo: 5000,
        priceType: "jednorazowo",
        icon: Camera,
        includes: ["Do 4h sesji", "50+ zdjęć", "Retusz", "Prawa autorskie"]
      },
      {
        id: "reels",
        name: "Pakiet Reels/TikTok",
        description: "Krótkie formy video",
        priceFrom: 2000,
        priceTo: 5000,
        priceType: "jednorazowo",
        icon: Film,
        popular: true,
        includes: ["5-10 reelsów", "Montaż", "Napisy", "Muzyka"]
      },
      {
        id: "film",
        name: "Film Promocyjny",
        description: "Profesjonalna produkcja video",
        priceFrom: 5000,
        priceTo: 20000,
        priceType: "jednorazowo",
        icon: Film,
        includes: ["Scenariusz", "Dzień zdjęciowy", "Postprodukcja", "Licencja muzyczna"]
      },
      {
        id: "viz3d",
        name: "Wizualizacje 3D",
        description: "Renderingi produktowe",
        priceFrom: 1000,
        priceTo: 5000,
        priceType: "jednorazowo",
        icon: Box,
        includes: ["Modelowanie 3D", "Teksturowanie", "Renderingi HD", "Rewizje"]
      },
    ],
  },
  {
    id: "branding",
    title: "Branding & Grafika",
    description: "Logo, identyfikacja wizualna",
    icon: Brush,
    services: [
      {
        id: "logo",
        name: "Projekt Logo",
        description: "Profesjonalne logo firmy",
        priceFrom: 1500,
        priceTo: 4000,
        priceType: "jednorazowo",
        icon: Brush,
        includes: ["3 koncepcje", "Rewizje", "Pliki źródłowe", "Księga znaku"]
      },
      {
        id: "branding",
        name: "Identyfikacja Wizualna",
        description: "Kompletny system identyfikacji",
        priceFrom: 5000,
        priceTo: 15000,
        priceType: "jednorazowo",
        icon: Brush,
        popular: true,
        includes: ["Logo", "Paleta kolorów", "Typografia", "Szablony", "Brandbook"]
      },
    ],
  },
];

type FlowStep = "categories" | "services" | "summary";

export default function Cennik() {
  const [flowStep, setFlowStep] = useState<FlowStep>("categories");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const selectedCategoryObjects = categories.filter(c => selectedCategories.includes(c.id));
  const currentCategory = selectedCategoryObjects[currentCategoryIndex];
  
  const allServices = categories.flatMap(s => s.services);
  
  const selectedDetails = useMemo(() => {
    const selected = allServices.filter(s => selectedServices.includes(s.id));
    const oneTime = selected.filter(s => s.priceType === "jednorazowo");
    const monthly = selected.filter(s => s.priceType === "miesięcznie");
    
    return {
      selected,
      count: selected.length,
      oneTimeTotal: oneTime.reduce((sum, s) => sum + s.priceFrom, 0),
      oneTimeTotalMax: oneTime.reduce((sum, s) => sum + (s.priceTo || s.priceFrom), 0),
      monthlyTotal: monthly.reduce((sum, s) => sum + s.priceFrom, 0),
      monthlyTotalMax: monthly.reduce((sum, s) => sum + (s.priceTo || s.priceFrom), 0),
      hasOneTime: oneTime.length > 0,
      hasMonthly: monthly.length > 0,
    };
  }, [selectedServices, allServices]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pl-PL').format(price);
  };

  const proceedToServices = () => {
    if (selectedCategories.length > 0) {
      setCurrentCategoryIndex(0);
      setFlowStep("services");
    }
  };

  const nextCategory = () => {
    if (currentCategoryIndex < selectedCategoryObjects.length - 1) {
      setCurrentCategoryIndex(prev => prev + 1);
    } else {
      setFlowStep("summary");
    }
  };

  const prevCategory = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(prev => prev - 1);
    } else {
      setFlowStep("categories");
    }
  };

  const goBackToCategories = () => {
    setFlowStep("categories");
    setCurrentCategoryIndex(0);
  };

  return (
    <Layout>
      <Helmet>
        <title>Cennik Usług Marketingowych | Konfigurator | Fotz Studio</title>
        <meta
          name="description"
          content="Skonfiguruj pakiet usług marketingowych: strony internetowe, social media, SEO, produkcja video. Interaktywny konfigurator cen online."
        />
        <link rel="canonical" href="https://fotz.pl/cennik" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-8 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6 text-primary border-primary/30">
              <Calculator className="w-4 h-4 mr-2" />
              Konfigurator pakietu
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Zbuduj swój <span className="text-primary">pakiet usług</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              {flowStep === "categories" && "Wybierz kategorie usług, które Cię interesują"}
              {flowStep === "services" && "Wybierz konkretne warianty w każdej kategorii"}
              {flowStep === "summary" && "Podsumowanie Twojego pakietu"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flow Steps Indicator */}
      <section className="py-6 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-sm z-30">
        <div className="container-wide">
          <div className="flex items-center justify-center gap-4">
            <div className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
              flowStep === "categories" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            )}>
              <div className="w-6 h-6 rounded-full bg-current/20 flex items-center justify-center text-xs font-bold">
                {selectedCategories.length > 0 && flowStep !== "categories" ? <Check className="w-3 h-3" /> : "1"}
              </div>
              <span className="text-sm font-medium">Kategorie</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <div className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
              flowStep === "services" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            )}>
              <div className="w-6 h-6 rounded-full bg-current/20 flex items-center justify-center text-xs font-bold">
                {flowStep === "summary" ? <Check className="w-3 h-3" /> : "2"}
              </div>
              <span className="text-sm font-medium">Warianty</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <div className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
              flowStep === "summary" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            )}>
              <div className="w-6 h-6 rounded-full bg-current/20 flex items-center justify-center text-xs font-bold">3</div>
              <span className="text-sm font-medium">Podsumowanie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8">
            {/* Main Area */}
            <div>
              <AnimatePresence mode="wait">
                {/* Step 1: Category Selection */}
                {flowStep === "categories" && (
                  <motion.div
                    key="categories"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-heading font-bold text-foreground mb-2">
                      Jakie usługi Cię interesują?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Wybierz wszystkie kategorie, które chcesz uwzględnić w swojej wycenie
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categories.map((category, index) => {
                        const isSelected = selectedCategories.includes(category.id);
                        const Icon = category.icon;
                        
                        return (
                          <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Card 
                              className={cn(
                                "relative cursor-pointer transition-all duration-300 h-full",
                                isSelected 
                                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' 
                                  : 'border-border hover:border-primary/30 hover:shadow-md'
                              )}
                              onClick={() => toggleCategory(category.id)}
                            >
                              <CardHeader className="pb-3">
                                <div className="flex items-start justify-between gap-2">
                                  <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                                    isSelected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
                                  )}>
                                    <Icon className="w-6 h-6" />
                                  </div>
                                  <button
                                    className={cn(
                                      "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                                      isSelected 
                                        ? "bg-primary text-primary-foreground" 
                                        : "bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary"
                                    )}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleCategory(category.id);
                                    }}
                                  >
                                    {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                  </button>
                                </div>
                                <CardTitle className="text-lg font-heading mt-3">
                                  {category.title}
                                </CardTitle>
                                <CardDescription className="text-sm">
                                  {category.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <p className="text-xs text-muted-foreground">
                                  {category.services.length} opcji do wyboru
                                </p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="flex justify-end mt-8">
                      <Button
                        size="lg"
                        onClick={proceedToServices}
                        disabled={selectedCategories.length === 0}
                        className="gap-2"
                      >
                        Dalej: Wybierz warianty
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Service Selection within categories */}
                {flowStep === "services" && currentCategory && (
                  <motion.div
                    key={`services-${currentCategory.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Category tabs */}
                    <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
                      {selectedCategoryObjects.map((cat, index) => {
                        const Icon = cat.icon;
                        const isActive = index === currentCategoryIndex;
                        const hasSelection = cat.services.some(s => selectedServices.includes(s.id));
                        
                        return (
                          <button
                            key={cat.id}
                            onClick={() => setCurrentCategoryIndex(index)}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 rounded-lg transition-all whitespace-nowrap",
                              isActive && "bg-primary text-primary-foreground",
                              !isActive && hasSelection && "bg-primary/10 text-primary",
                              !isActive && !hasSelection && "bg-secondary text-muted-foreground hover:text-foreground"
                            )}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{cat.title}</span>
                            {hasSelection && !isActive && <Check className="w-3 h-3" />}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <currentCategory.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl font-heading font-bold text-foreground">
                          {currentCategory.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Wybierz warianty, które Cię interesują
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentCategory.services.map((service, index) => {
                        const isSelected = selectedServices.includes(service.id);
                        const Icon = service.icon;
                        
                        return (
                          <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Card 
                              className={cn(
                                "relative cursor-pointer transition-all duration-300 h-full",
                                isSelected 
                                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' 
                                  : 'border-border hover:border-primary/30 hover:shadow-md'
                              )}
                              onClick={() => toggleService(service.id)}
                            >
                              {service.popular && (
                                <Badge className="absolute -top-2 right-4 bg-primary text-primary-foreground text-[10px]">
                                  <Sparkles className="w-3 h-3 mr-1" />
                                  Popularne
                                </Badge>
                              )}
                              <CardHeader className="pb-2">
                                <div className="flex items-start justify-between gap-2">
                                  <div className={cn(
                                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                                    isSelected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
                                  )}>
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <button
                                    className={cn(
                                      "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                                      isSelected 
                                        ? "bg-primary text-primary-foreground" 
                                        : "bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary"
                                    )}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleService(service.id);
                                    }}
                                  >
                                    {isSelected ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                  </button>
                                </div>
                                <CardTitle className="text-base font-heading mt-3">
                                  {service.name}
                                </CardTitle>
                                <CardDescription className="text-xs">
                                  {service.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <div className="mb-3">
                                  <span className="text-lg font-bold text-foreground">
                                    od {formatPrice(service.priceFrom)} PLN
                                  </span>
                                  <span className="text-xs text-muted-foreground block">
                                    {service.priceType}
                                  </span>
                                </div>
                                
                                {service.includes && (
                                  <ul className="space-y-1">
                                    {service.includes.slice(0, 3).map((item, i) => (
                                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                                        <Check className="w-3 h-3 text-primary flex-shrink-0" />
                                        {item}
                                      </li>
                                    ))}
                                    {service.includes.length > 3 && (
                                      <li className="text-xs text-primary">
                                        +{service.includes.length - 3} więcej
                                      </li>
                                    )}
                                  </ul>
                                )}
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={prevCategory}
                        className="gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        {currentCategoryIndex === 0 ? "Wróć do kategorii" : "Poprzednia"}
                      </Button>
                      <Button
                        size="lg"
                        onClick={nextCategory}
                        className="gap-2"
                      >
                        {currentCategoryIndex === selectedCategoryObjects.length - 1 ? "Podsumowanie" : "Następna kategoria"}
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Summary */}
                {flowStep === "summary" && (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-heading font-bold text-foreground mb-2">
                      Podsumowanie Twojego pakietu
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Sprawdź wybrane usługi i prześlij zapytanie o wycenę
                    </p>

                    {selectedDetails.count === 0 ? (
                      <Card className="p-8 text-center">
                        <p className="text-muted-foreground mb-4">Nie wybrano żadnych usług</p>
                        <Button variant="outline" onClick={goBackToCategories}>
                          Wróć do wyboru kategorii
                        </Button>
                      </Card>
                    ) : (
                      <div className="space-y-4">
                        {selectedCategoryObjects.map(category => {
                          const categoryServices = category.services.filter(s => selectedServices.includes(s.id));
                          if (categoryServices.length === 0) return null;
                          
                          return (
                            <Card key={category.id} className="overflow-hidden">
                              <CardHeader className="bg-secondary/50 py-3">
                                <div className="flex items-center gap-3">
                                  <category.icon className="w-5 h-5 text-primary" />
                                  <CardTitle className="text-base">{category.title}</CardTitle>
                                </div>
                              </CardHeader>
                              <CardContent className="pt-4">
                                <div className="space-y-3">
                                  {categoryServices.map(service => (
                                    <div key={service.id} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                                      <div className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-primary" />
                                        <div>
                                          <p className="font-medium text-foreground">{service.name}</p>
                                          <p className="text-xs text-muted-foreground">{service.description}</p>
                                        </div>
                                      </div>
                                      <div className="text-right">
                                        <p className="font-bold text-foreground">
                                          od {formatPrice(service.priceFrom)} PLN
                                        </p>
                                        <p className="text-xs text-muted-foreground">{service.priceType}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}

                        <div className="flex justify-between mt-8">
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={() => {
                              setCurrentCategoryIndex(selectedCategoryObjects.length - 1);
                              setFlowStep("services");
                            }}
                            className="gap-2"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            Wróć do edycji
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sticky Summary Sidebar */}
            <div className="lg:sticky lg:top-36 h-fit">
              <Card className="border-primary/20 bg-gradient-to-b from-background to-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calculator className="w-5 h-5 text-primary" />
                    Twój pakiet
                  </CardTitle>
                  <CardDescription>
                    {selectedDetails.count} {selectedDetails.count === 1 ? 'usługa' : selectedDetails.count < 5 ? 'usługi' : 'usług'} wybrano
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Selected items preview */}
                  {selectedDetails.selected.length > 0 && (
                    <div className="space-y-2 pb-4 border-b border-border/50">
                      {selectedDetails.selected.slice(0, 5).map(service => (
                        <div key={service.id} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground truncate flex-1 mr-2">{service.name}</span>
                          <span className="font-medium text-foreground whitespace-nowrap">
                            {formatPrice(service.priceFrom)} PLN
                          </span>
                        </div>
                      ))}
                      {selectedDetails.selected.length > 5 && (
                        <p className="text-xs text-primary">
                          +{selectedDetails.selected.length - 5} więcej usług
                        </p>
                      )}
                    </div>
                  )}

                  {/* Totals */}
                  <div className="space-y-3">
                    {selectedDetails.hasOneTime && (
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <p className="text-xs text-muted-foreground mb-1">Koszty jednorazowe</p>
                        <p className="text-xl font-bold text-foreground">
                          {formatPrice(selectedDetails.oneTimeTotal)} - {formatPrice(selectedDetails.oneTimeTotalMax)} PLN
                        </p>
                      </div>
                    )}
                    
                    {selectedDetails.hasMonthly && (
                      <div className="p-3 rounded-lg bg-primary/10">
                        <p className="text-xs text-muted-foreground mb-1">Koszty miesięczne</p>
                        <p className="text-xl font-bold text-primary">
                          {formatPrice(selectedDetails.monthlyTotal)} - {formatPrice(selectedDetails.monthlyTotalMax)} PLN
                        </p>
                        <p className="text-xs text-muted-foreground">/ miesiąc</p>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 space-y-3">
                    <Link to="/kontakt" className="block">
                      <Button 
                        className="w-full gap-2" 
                        size="lg"
                        disabled={selectedDetails.count === 0}
                      >
                        <Send className="w-4 h-4" />
                        Wyślij zapytanie
                      </Button>
                    </Link>
                    <p className="text-xs text-center text-muted-foreground">
                      Ceny orientacyjne netto. Finalna wycena po analizie wymagań.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick tips */}
              <Card className="mt-4 bg-secondary/30 border-border/50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Pakiety kompleksowe = lepsze ceny
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Łącząc usługi z różnych kategorii, możesz liczyć na atrakcyjniejsze stawki.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Najczęściej zadawane pytania
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              {
                q: "Czy ceny są ostateczne?",
                a: "Podane ceny są orientacyjne i stanowią punkt wyjścia. Finalna wycena zależy od szczegółowych wymagań projektu i jest ustalana po bezpłatnej konsultacji."
              },
              {
                q: "Czy mogę łączyć usługi z różnych kategorii?",
                a: "Tak! Zachęcamy do tworzenia kompleksowych pakietów. Przy łączeniu usług oferujemy atrakcyjniejsze stawki."
              },
              {
                q: "Jak długo trwa realizacja?",
                a: "Czas realizacji zależy od zakresu projektu. Landing page to około 1-2 tygodni, strona firmowa 3-6 tygodni, a kampanie marketingowe uruchamiamy w ciągu 7 dni."
              },
              {
                q: "Czy oferujecie wsparcie po realizacji?",
                a: "Tak, oferujemy pakiety wsparcia technicznego i rozwoju. Dla stron internetowych zapewniamy również hosting i aktualizacje."
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-heading">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container-wide">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Potrzebujesz indywidualnej wyceny?
              </h2>
              <p className="text-muted-foreground mb-6">
                Każdy projekt jest inny. Umów się na bezpłatną konsultację, a przygotujemy ofertę dopasowaną do Twoich potrzeb.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Send className="w-4 h-4" />
                    Bezpłatna konsultacja
                  </Button>
                </Link>
                <Link to="/realizacje">
                  <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                    Zobacz realizacje
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
