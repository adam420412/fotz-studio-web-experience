import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Globe, 
  Megaphone, 
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
  Info
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  priceTo?: number;
  priceType: "jednorazowo" | "miesięcznie";
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  popular?: boolean;
  includes?: string[];
}

const services: ServiceOption[] = [
  // Strony & E-commerce
  {
    id: "landing",
    name: "Landing Page",
    description: "Jednostronicowa witryna z formularzem kontaktowym",
    priceFrom: 2000,
    priceTo: 4000,
    priceType: "jednorazowo",
    icon: Globe,
    category: "Strony & E-commerce",
    includes: ["Responsywny design", "Formularz kontaktowy", "Optymalizacja SEO", "Hosting (1 rok)"]
  },
  {
    id: "firmowa",
    name: "Strona Firmowa",
    description: "Wielostronicowa wizytówka firmy z CMS",
    priceFrom: 5000,
    priceTo: 12000,
    priceType: "jednorazowo",
    icon: Globe,
    category: "Strony & E-commerce",
    popular: true,
    includes: ["Do 10 podstron", "System CMS", "Blog firmowy", "Integracje", "Szkolenie"]
  },
  {
    id: "ecommerce",
    name: "Sklep E-commerce",
    description: "Sklep internetowy z pełną integracją płatności",
    priceFrom: 8000,
    priceTo: 25000,
    priceType: "jednorazowo",
    icon: ShoppingCart,
    category: "Strony & E-commerce",
    includes: ["Nieograniczone produkty", "Płatności online", "Integracja z kurierami", "Panel administracyjny"]
  },
  
  // Marketing
  {
    id: "social-media",
    name: "Prowadzenie Social Media",
    description: "Kompleksowa obsługa profili społecznościowych",
    priceFrom: 1500,
    priceTo: 4000,
    priceType: "miesięcznie",
    icon: Share2,
    category: "Marketing",
    popular: true,
    includes: ["12 postów/miesiąc", "Stories", "Moderacja komentarzy", "Raporty miesięczne"]
  },
  {
    id: "facebook-ads",
    name: "Facebook Ads",
    description: "Kampanie reklamowe w ekosystemie Meta",
    priceFrom: 1500,
    priceTo: 5000,
    priceType: "miesięcznie",
    icon: Facebook,
    category: "Marketing",
    includes: ["Strategia kampanii", "Kreacje graficzne", "Optymalizacja", "Raportowanie"]
  },
  {
    id: "google-ads",
    name: "Google Ads",
    description: "Reklamy w wyszukiwarce i sieci reklamowej",
    priceFrom: 1500,
    priceTo: 6000,
    priceType: "miesięcznie",
    icon: Target,
    category: "Marketing",
    includes: ["Konfiguracja konta", "Kampanie Search/Display", "Remarketing", "Analityka"]
  },
  {
    id: "content",
    name: "Content Marketing",
    description: "Strategia treści i copywriting",
    priceFrom: 2000,
    priceTo: 5000,
    priceType: "miesięcznie",
    icon: Megaphone,
    category: "Marketing",
    includes: ["Strategia content", "Artykuły blogowe", "Infografiki", "Dystrybucja treści"]
  },
  
  // SEO
  {
    id: "seo",
    name: "Pozycjonowanie SEO",
    description: "Optymalizacja strony pod wyszukiwarki",
    priceFrom: 1500,
    priceTo: 5000,
    priceType: "miesięcznie",
    icon: TrendingUp,
    category: "SEO",
    popular: true,
    includes: ["Audyt SEO", "Optymalizacja on-page", "Link building", "Raporty pozycji"]
  },
  
  // Produkcja
  {
    id: "film",
    name: "Film Promocyjny",
    description: "Profesjonalna produkcja video",
    priceFrom: 5000,
    priceTo: 20000,
    priceType: "jednorazowo",
    icon: Film,
    category: "Produkcja",
    includes: ["Scenariusz", "Dzień zdjęciowy", "Postprodukcja", "Licencja muzyczna"]
  },
  {
    id: "reels",
    name: "Pakiet Reels/TikTok",
    description: "Krótkie formy video do social media",
    priceFrom: 2000,
    priceTo: 5000,
    priceType: "jednorazowo",
    icon: Film,
    category: "Produkcja",
    includes: ["5-10 reelsów", "Montaż", "Napisy", "Muzyka"]
  },
  {
    id: "foto",
    name: "Sesja Fotograficzna",
    description: "Profesjonalna sesja zdjęciowa",
    priceFrom: 1500,
    priceTo: 5000,
    priceType: "jednorazowo",
    icon: Camera,
    category: "Produkcja",
    includes: ["Do 4h sesji", "50+ zdjęć", "Retusz", "Prawa autorskie"]
  },
  {
    id: "viz3d",
    name: "Wizualizacje 3D",
    description: "Renderingi produktowe i architektoniczne",
    priceFrom: 1000,
    priceTo: 5000,
    priceType: "jednorazowo",
    icon: Box,
    category: "Produkcja",
    includes: ["Modelowanie 3D", "Teksturowanie", "Renderingi HD", "Rewizje"]
  },
  
  // Branding
  {
    id: "logo",
    name: "Projekt Logo",
    description: "Profesjonalne logo firmy",
    priceFrom: 1500,
    priceTo: 4000,
    priceType: "jednorazowo",
    icon: Brush,
    category: "Branding",
    includes: ["3 koncepcje", "Rewizje", "Pliki źródłowe", "Księga znaku"]
  },
  {
    id: "branding",
    name: "Identyfikacja Wizualna",
    description: "Kompletny system identyfikacji marki",
    priceFrom: 5000,
    priceTo: 15000,
    priceType: "jednorazowo",
    icon: Brush,
    category: "Branding",
    includes: ["Logo", "Paleta kolorów", "Typografia", "Szablony", "Brandbook"]
  },
];

const categories = [...new Set(services.map(s => s.category))];

export default function Cennik() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const selectedDetails = useMemo(() => {
    const selected = services.filter(s => selectedServices.includes(s.id));
    const totalFrom = selected.reduce((sum, s) => sum + s.priceFrom, 0);
    const totalTo = selected.reduce((sum, s) => sum + (s.priceTo || s.priceFrom), 0);
    const oneTime = selected.filter(s => s.priceType === "jednorazowo");
    const monthly = selected.filter(s => s.priceType === "miesięcznie");
    
    return {
      selected,
      totalFrom,
      totalTo,
      oneTime,
      monthly,
      oneTimeTotal: oneTime.reduce((sum, s) => sum + s.priceFrom, 0),
      oneTimeTotalMax: oneTime.reduce((sum, s) => sum + (s.priceTo || s.priceFrom), 0),
      monthlyTotal: monthly.reduce((sum, s) => sum + s.priceFrom, 0),
      monthlyTotalMax: monthly.reduce((sum, s) => sum + (s.priceTo || s.priceFrom), 0),
    };
  }, [selectedServices]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pl-PL').format(price);
  };

  return (
    <Layout>
      <Helmet>
        <title>Cennik Usług Marketingowych | Fotz Studio</title>
        <meta
          name="description"
          content="Sprawdź cennik usług Fotz Studio: strony internetowe od 2000 PLN, social media od 1500 PLN/msc, produkcja video, SEO i branding. Konfigurator cen online."
        />
        <link rel="canonical" href="https://fotz.pl/cennik" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-6 text-primary border-primary/30">
              <Calculator className="w-4 h-4 mr-2" />
              Konfigurator cen
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Cennik usług <span className="text-primary">Fotz Studio</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Wybierz usługi, które Cię interesują i sprawdź orientacyjny koszt współpracy. 
              Wszystkie ceny są kwotami netto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Configurator */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8">
            {/* Services Grid */}
            <div className="space-y-8">
              {categories.map((category, catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {category}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.filter(s => s.category === category).map((service, index) => {
                      const isSelected = selectedServices.includes(service.id);
                      const Icon = service.icon;
                      
                      return (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Card 
                            className={`relative cursor-pointer transition-all duration-300 ${
                              isSelected 
                                ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' 
                                : 'border-border hover:border-primary/30 hover:shadow-md'
                            }`}
                            onClick={() => toggleService(service.id)}
                          >
                            {service.popular && (
                              <Badge className="absolute -top-2 right-4 bg-primary text-primary-foreground text-[10px]">
                                Popularne
                              </Badge>
                            )}
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3">
                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                    isSelected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
                                  }`}>
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <CardTitle className="text-base font-heading">
                                      {service.name}
                                    </CardTitle>
                                    <CardDescription className="text-xs mt-1">
                                      {service.description}
                                    </CardDescription>
                                  </div>
                                </div>
                                <Switch 
                                  checked={isSelected}
                                  onCheckedChange={() => toggleService(service.id)}
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <div className="flex items-end justify-between">
                                <div>
                                  <span className="text-lg font-bold text-foreground">
                                    od {formatPrice(service.priceFrom)} PLN
                                  </span>
                                  {service.priceTo && (
                                    <span className="text-sm text-muted-foreground ml-1">
                                      - {formatPrice(service.priceTo)} PLN
                                    </span>
                                  )}
                                  <span className="text-xs text-muted-foreground block">
                                    {service.priceType}
                                  </span>
                                </div>
                                
                                {service.includes && (
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <button className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                                        <Info className="w-4 h-4" />
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent side="left" className="max-w-[220px]">
                                      <p className="font-medium mb-2">Zawiera:</p>
                                      <ul className="space-y-1">
                                        {service.includes.map((item, i) => (
                                          <li key={i} className="text-xs flex items-center gap-1.5">
                                            <Check className="w-3 h-3 text-primary" />
                                            {item}
                                          </li>
                                        ))}
                                      </ul>
                                    </TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary Panel */}
            <div className="lg:sticky lg:top-24 h-fit">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-card border-border shadow-xl">
                  <CardHeader className="border-b border-border">
                    <CardTitle className="flex items-center gap-2 font-heading">
                      <Calculator className="w-5 h-5 text-primary" />
                      Podsumowanie
                    </CardTitle>
                    <CardDescription>
                      Wybrano {selectedServices.length} {selectedServices.length === 1 ? 'usługę' : selectedServices.length < 5 ? 'usługi' : 'usług'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <AnimatePresence mode="popLayout">
                      {selectedServices.length === 0 ? (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-sm text-muted-foreground text-center py-8"
                        >
                          Wybierz usługi z listy, aby zobaczyć wycenę
                        </motion.p>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                        >
                          {/* Selected services list */}
                          <div className="space-y-2 max-h-[200px] overflow-y-auto">
                            {selectedDetails.selected.map((service) => (
                              <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="flex items-center justify-between text-sm py-2 border-b border-border/50 last:border-0"
                              >
                                <span className="text-foreground truncate pr-2">{service.name}</span>
                                <span className="text-muted-foreground whitespace-nowrap">
                                  od {formatPrice(service.priceFrom)} PLN
                                  <span className="text-[10px] ml-1">/{service.priceType === "miesięcznie" ? "msc" : "1x"}</span>
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Totals */}
                          <div className="pt-4 border-t border-border space-y-3">
                            {selectedDetails.oneTime.length > 0 && (
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Jednorazowo:</span>
                                <span className="font-medium text-foreground">
                                  {formatPrice(selectedDetails.oneTimeTotal)} - {formatPrice(selectedDetails.oneTimeTotalMax)} PLN
                                </span>
                              </div>
                            )}
                            {selectedDetails.monthly.length > 0 && (
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Miesięcznie:</span>
                                <span className="font-medium text-foreground">
                                  {formatPrice(selectedDetails.monthlyTotal)} - {formatPrice(selectedDetails.monthlyTotalMax)} PLN
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Grand total */}
                          <div className="pt-4 border-t border-primary/20 bg-primary/5 -mx-6 px-6 py-4 -mb-6 rounded-b-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-heading font-semibold text-foreground">Razem od:</span>
                              <span className="text-2xl font-bold text-primary">
                                {formatPrice(selectedDetails.totalFrom)} PLN
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Ceny netto. Ostateczna wycena po konsultacji.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CTA */}
                    <div className="mt-6 pt-4">
                      <Button asChild className="w-full" size="lg">
                        <Link to="/kontakt">
                          <Send className="w-4 h-4 mr-2" />
                          Zamów bezpłatną wycenę
                        </Link>
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-3">
                        Odpowiadamy w ciągu 24 godzin
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
              Masz pytania dotyczące wyceny?
            </h2>
            <p className="text-muted-foreground mb-6">
              Każdy projekt jest inny - powyższe ceny to orientacyjne widełki. 
              Skontaktuj się z nami, aby otrzymać dokładną wycenę dopasowaną do Twoich potrzeb.
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
