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

const steps: CategoryStep[] = [
  {
    id: "strony",
    title: "Strona internetowa",
    description: "Wybierz rodzaj strony, której potrzebujesz",
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
    description: "Dodaj usługi marketingowe do pakietu",
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
    description: "Zwiększ widoczność w wyszukiwarkach",
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
    description: "Profesjonalne materiały wizualne",
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
    description: "Buduj rozpoznawalną markę",
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

export default function Cennik() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const allServices = steps.flatMap(s => s.services);
  
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

  const currentCategory = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const nextStep = () => {
    if (!isLastStep) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (!isFirstStep) setCurrentStep(prev => prev - 1);
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
              Przejdź przez kroki i wybierz usługi, których potrzebujesz. Cena aktualizuje się na żywo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-6 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-sm z-30">
        <div className="container-wide">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              const hasSelection = step.services.some(s => selectedServices.includes(s.id));
              
              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg transition-all whitespace-nowrap min-w-fit",
                    isActive && "bg-primary text-primary-foreground",
                    !isActive && hasSelection && "bg-primary/10 text-primary",
                    !isActive && !hasSelection && "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                    isActive && "bg-primary-foreground text-primary",
                    !isActive && hasSelection && "bg-primary text-primary-foreground",
                    !isActive && !hasSelection && "bg-secondary text-muted-foreground"
                  )}>
                    {hasSelection ? <Check className="w-3 h-3" /> : index + 1}
                  </div>
                  <span className="text-sm font-medium hidden sm:block">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8">
            {/* Services Grid */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <currentCategory.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-heading font-bold text-foreground">
                        {currentCategory.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">{currentCategory.description}</p>
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
                                    <li className="text-xs text-muted-foreground">
                                      +{service.includes.length - 3} więcej...
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

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={isFirstStep}
                      className="gap-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Poprzedni
                    </Button>
                    
                    <span className="text-sm text-muted-foreground">
                      Krok {currentStep + 1} z {steps.length}
                    </span>
                    
                    <Button
                      onClick={nextStep}
                      disabled={isLastStep}
                      className="gap-2"
                    >
                      Następny
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Live Summary Panel */}
            <div className="lg:sticky lg:top-32 h-fit">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-card border-border shadow-xl overflow-hidden">
                  <CardHeader className="border-b border-border bg-secondary/30">
                    <CardTitle className="flex items-center gap-2 font-heading">
                      <Calculator className="w-5 h-5 text-primary" />
                      Twój pakiet
                    </CardTitle>
                    <CardDescription>
                      {selectedDetails.count === 0 
                        ? "Wybierz usługi z listy"
                        : `${selectedDetails.count} ${selectedDetails.count === 1 ? 'usługa' : selectedDetails.count < 5 ? 'usługi' : 'usług'} w pakiecie`
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <AnimatePresence mode="popLayout">
                      {selectedDetails.count === 0 ? (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-center py-8"
                        >
                          <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                            <Plus className="w-8 h-8 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Kliknij na usługi, aby dodać je do pakietu
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-3"
                        >
                          {/* Selected services list */}
                          <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2">
                            {selectedDetails.selected.map((service) => (
                              <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                layout
                                className="flex items-center justify-between text-sm py-2 px-3 rounded-lg bg-secondary/30 group"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <service.icon className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span className="text-foreground truncate">{service.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-muted-foreground whitespace-nowrap text-xs">
                                    {formatPrice(service.priceFrom)}
                                    <span className="ml-0.5">/{service.priceType === "miesięcznie" ? "msc" : "1x"}</span>
                                  </span>
                                  <button
                                    onClick={() => toggleService(service.id)}
                                    className="opacity-0 group-hover:opacity-100 w-5 h-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center transition-opacity"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Totals */}
                          <div className="pt-4 border-t border-border space-y-2">
                            {selectedDetails.hasOneTime && (
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Jednorazowo:</span>
                                <span className="font-medium text-foreground">
                                  {formatPrice(selectedDetails.oneTimeTotal)} - {formatPrice(selectedDetails.oneTimeTotalMax)} PLN
                                </span>
                              </div>
                            )}
                            {selectedDetails.hasMonthly && (
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Miesięcznie:</span>
                                <span className="font-medium text-foreground">
                                  {formatPrice(selectedDetails.monthlyTotal)} - {formatPrice(selectedDetails.monthlyTotalMax)} PLN
                                </span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Grand total */}
                    {selectedDetails.count > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 pt-4 border-t border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 -mx-6 px-6 py-4"
                      >
                        <div className="text-center">
                          <span className="text-sm text-muted-foreground block mb-1">Razem od</span>
                          <motion.span 
                            key={selectedDetails.oneTimeTotal + selectedDetails.monthlyTotal}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            className="text-3xl font-bold text-primary block"
                          >
                            {formatPrice(selectedDetails.oneTimeTotal + selectedDetails.monthlyTotal)} PLN
                          </motion.span>
                          <span className="text-xs text-muted-foreground">
                            {selectedDetails.hasMonthly && selectedDetails.hasOneTime 
                              ? "start + abonament miesięczny" 
                              : selectedDetails.hasMonthly 
                                ? "miesięcznie" 
                                : "jednorazowo"
                            }
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {/* CTA */}
                    <div className="mt-6">
                      <Button asChild className="w-full" size="lg">
                        <Link to="/kontakt">
                          <Send className="w-4 h-4 mr-2" />
                          {selectedDetails.count > 0 ? "Zamów wycenę pakietu" : "Bezpłatna konsultacja"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-3">
                        Ceny netto. Ostateczna wycena po konsultacji.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Info section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Nie wiesz, czego potrzebujesz?
            </h2>
            <p className="text-muted-foreground mb-6">
              Umów się na bezpłatną konsultację - pomożemy dobrać optymalny pakiet usług do Twojego budżetu i celów biznesowych.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/uslugi">Zobacz szczegóły usług</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/realizacje">Portfolio realizacji</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
