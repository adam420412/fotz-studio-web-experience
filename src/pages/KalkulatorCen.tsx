import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ServiceSchema, WebPageSchema } from "@/components/seo/StructuredData";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { BookingCalendar } from "@/components/BookingCalendar";
import {
  Globe,
  Share2,
  Megaphone,
  TrendingUp,
  Film,
  Palette,
  Calculator,
  Check,
  ArrowRight,
  Plus,
  Minus,
  Send,
  Loader2,
  Sparkles,
  Info,
  Calendar,
  CheckCircle
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ServiceItem {
  id: string;
  name: string;
  basePrice: number;
  priceType: "jednorazowo" | "miesięcznie";
  description?: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  services: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    id: "strony",
    name: "Strony WWW",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    services: [
      { id: "landing", name: "Landing Page", basePrice: 2500, priceType: "jednorazowo", description: "Jednostronicowa witryna konwersyjna" },
      { id: "firmowa", name: "Strona Firmowa", basePrice: 6000, priceType: "jednorazowo", description: "Rozbudowana strona z CMS (5-15 podstron)" },
      { id: "ecommerce", name: "Sklep E-commerce", basePrice: 12000, priceType: "jednorazowo", description: "Pełny sklep internetowy z płatnościami" },
      { id: "cms", name: "Panel Administracyjny", basePrice: 2000, priceType: "jednorazowo", description: "System zarządzania treścią" },
      { id: "hosting", name: "Hosting + Domena (rok)", basePrice: 500, priceType: "jednorazowo", description: "Szybki hosting SSD + domena" },
    ]
  },
  {
    id: "social",
    name: "Social Media",
    icon: Share2,
    color: "from-pink-500 to-rose-500",
    services: [
      { id: "sm-1platform", name: "Obsługa 1 platformy", basePrice: 1500, priceType: "miesięcznie", description: "8 postów + stories + moderacja" },
      { id: "sm-2platforms", name: "Obsługa 2 platform", basePrice: 2500, priceType: "miesięcznie", description: "12 postów + reels + moderacja" },
      { id: "sm-3platforms", name: "Obsługa 3+ platform", basePrice: 4000, priceType: "miesięcznie", description: "20+ postów + video content" },
      { id: "sm-reels", name: "Pakiet Reels (5 szt.)", basePrice: 2000, priceType: "jednorazowo", description: "Produkcja i montaż" },
      { id: "sm-strategy", name: "Strategia Social Media", basePrice: 3000, priceType: "jednorazowo", description: "Analiza + plan działania" },
    ]
  },
  {
    id: "ads",
    name: "Kampanie Reklamowe",
    icon: Megaphone,
    color: "from-orange-500 to-amber-500",
    services: [
      { id: "fb-ads", name: "Facebook/Instagram Ads", basePrice: 1800, priceType: "miesięcznie", description: "Obsługa kampanii + optymalizacja" },
      { id: "google-ads", name: "Google Ads", basePrice: 2000, priceType: "miesięcznie", description: "Search + Display + Shopping" },
      { id: "linkedin-ads", name: "LinkedIn Ads", basePrice: 3000, priceType: "miesięcznie", description: "Kampanie B2B" },
      { id: "tiktok-ads", name: "TikTok Ads", basePrice: 2500, priceType: "miesięcznie", description: "Kampanie wideo" },
      { id: "remarketing", name: "Remarketing Setup", basePrice: 1500, priceType: "jednorazowo", description: "Konfiguracja śledzenia i pixeli" },
    ]
  },
  {
    id: "seo",
    name: "Pozycjonowanie SEO",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    services: [
      { id: "seo-audit", name: "Audyt SEO", basePrice: 2000, priceType: "jednorazowo", description: "Kompleksowa analiza strony" },
      { id: "seo-basic", name: "SEO Podstawowe", basePrice: 2000, priceType: "miesięcznie", description: "5 fraz + on-page" },
      { id: "seo-business", name: "SEO Business", basePrice: 3500, priceType: "miesięcznie", description: "15 fraz + link building" },
      { id: "seo-local", name: "SEO Lokalne + Google Maps", basePrice: 1200, priceType: "miesięcznie", description: "Widoczność lokalna" },
      { id: "content", name: "Content Marketing (4 artykuły)", basePrice: 2000, priceType: "miesięcznie", description: "SEO copywriting" },
    ]
  },
  {
    id: "produkcja",
    name: "Foto & Video",
    icon: Film,
    color: "from-purple-500 to-violet-500",
    services: [
      { id: "foto-produktowa", name: "Sesja Produktowa (20 szt.)", basePrice: 1200, priceType: "jednorazowo", description: "Packshoty + lifestyle" },
      { id: "foto-firmowa", name: "Sesja Firmowa", basePrice: 2500, priceType: "jednorazowo", description: "Zespół + biuro" },
      { id: "film-promo", name: "Film Promocyjny (1-2 min)", basePrice: 8000, priceType: "jednorazowo", description: "Pełna produkcja" },
      { id: "dron", name: "Nagrania z Drona", basePrice: 2000, priceType: "jednorazowo", description: "Ujęcia z powietrza" },
      { id: "viz3d", name: "Wizualizacja 3D", basePrice: 1500, priceType: "jednorazowo", description: "Rendering produktu/wnętrza" },
    ]
  },
  {
    id: "branding",
    name: "Branding & Design",
    icon: Palette,
    color: "from-indigo-500 to-blue-500",
    services: [
      { id: "logo", name: "Projekt Logo", basePrice: 2500, priceType: "jednorazowo", description: "3 koncepcje + rewizje" },
      { id: "brand-book", name: "Brand Book", basePrice: 5000, priceType: "jednorazowo", description: "Pełna identyfikacja wizualna" },
      { id: "materialy", name: "Materiały Reklamowe", basePrice: 1500, priceType: "jednorazowo", description: "Ulotki, banery, roll-upy" },
      { id: "katalog", name: "Katalog / Broszura", basePrice: 3000, priceType: "jednorazowo", description: "Projekt + przygotowanie do druku" },
      { id: "opakowania", name: "Projekt Opakowań", basePrice: 2000, priceType: "jednorazowo", description: "Etykiety, pudełka" },
    ]
  }
];

// Complexity multipliers for slider
const complexityLevels = [
  { value: 0, label: "Podstawowy", multiplier: 1 },
  { value: 33, label: "Standard", multiplier: 1.3 },
  { value: 66, label: "Zaawansowany", multiplier: 1.6 },
  { value: 100, label: "Premium", multiplier: 2 },
];

const urgencyOptions = [
  { id: "standard", label: "Standardowy (4-6 tyg.)", multiplier: 1 },
  { id: "fast", label: "Przyspieszony (2-3 tyg.)", multiplier: 1.25 },
  { id: "express", label: "Express (do 2 tyg.)", multiplier: 1.5 },
];

export default function KalkulatorCen() {
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [complexity, setComplexity] = useState([33]); // Default to "Standard"
  const [urgency, setUrgency] = useState("standard");
  const [contractMonths, setContractMonths] = useState(3);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getComplexityMultiplier = () => {
    const level = complexityLevels.reduce((prev, curr) => 
      Math.abs(curr.value - complexity[0]) < Math.abs(prev.value - complexity[0]) ? curr : prev
    );
    return level.multiplier;
  };

  const getComplexityLabel = () => {
    const level = complexityLevels.reduce((prev, curr) => 
      Math.abs(curr.value - complexity[0]) < Math.abs(prev.value - complexity[0]) ? curr : prev
    );
    return level.label;
  };

  const getUrgencyMultiplier = () => {
    return urgencyOptions.find(o => o.id === urgency)?.multiplier || 1;
  };

  const calculation = useMemo(() => {
    let oneTimeTotal = 0;
    let monthlyTotal = 0;
    const selectedItems: { name: string; price: number; type: string }[] = [];

    categories.forEach(cat => {
      cat.services.forEach(service => {
        if (selectedServices.includes(service.id)) {
          const adjustedPrice = Math.round(service.basePrice * getComplexityMultiplier() * getUrgencyMultiplier());
          selectedItems.push({
            name: service.name,
            price: adjustedPrice,
            type: service.priceType
          });
          if (service.priceType === "jednorazowo") {
            oneTimeTotal += adjustedPrice;
          } else {
            monthlyTotal += adjustedPrice;
          }
        }
      });
    });

    // Monthly discount for longer contracts
    let monthlyDiscount = 0;
    if (contractMonths >= 12) monthlyDiscount = 0.15;
    else if (contractMonths >= 6) monthlyDiscount = 0.10;
    else if (contractMonths >= 3) monthlyDiscount = 0.05;

    const discountedMonthly = Math.round(monthlyTotal * (1 - monthlyDiscount));
    const totalContractValue = oneTimeTotal + (discountedMonthly * contractMonths);

    return {
      oneTimeTotal,
      monthlyTotal,
      discountedMonthly,
      monthlyDiscount,
      totalContractValue,
      selectedItems
    };
  }, [selectedServices, complexity, urgency, contractMonths]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pl-PL').format(price);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: "Nowe zapytanie z Kalkulatora Cen - Fotz Studio",
          from_name: contactData.name,
          email: contactData.email,
          phone: contactData.phone || "Nie podano",
          message: contactData.message || "Brak dodatkowych informacji",
          selected_services: calculation.selectedItems.map(s => `${s.name}: ${formatPrice(s.price)} PLN (${s.type})`).join("\n"),
          complexity: getComplexityLabel(),
          urgency: urgencyOptions.find(o => o.id === urgency)?.label,
          contract_months: contractMonths,
          estimated_one_time: `${formatPrice(calculation.oneTimeTotal)} PLN`,
          estimated_monthly: `${formatPrice(calculation.discountedMonthly)} PLN`,
          total_contract_value: `${formatPrice(calculation.totalContractValue)} PLN`
        })
      });

      if (response.ok) {
        toast({
          title: "Wycena wysłana!",
          description: "Skontaktujemy się z Tobą w ciągu 24h.",
        });
        setShowContactForm(false);
        setFormSubmitted(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać wyceny. Spróbuj ponownie.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookingComplete = () => {
    setShowBookingModal(false);
    setFormSubmitted(false);
    setSelectedServices([]);
    setContactData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <SEOHead
        title="Kalkulator Cen Usług Marketingowych — Ile Kosztuje Marketing? | Fotz Studio"
        description="Kalkulator cen usług marketingowych — oblicz orientacyjny koszt SEO, strony internetowej, kampanii Google Ads i social media dla Twojej firmy. Darmowe…"
        canonical="https://fotz.pl/kalkulator-cen"
        keywords="kalkulator cen usług marketingowych, ile kosztuje marketing, koszt SEO, koszt strony internetowej, koszt kampanii Google Ads, budżet marketingowy kalkulator"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Kalkulator cen", url: "https://fotz.pl/kalkulator-cen" }
        ]}
      />
      <ServiceSchema
        name="Kalkulator cen usług marketingowych"
        description="Interaktywny kalkulator wyceny usług marketingowych - strony WWW, social media, kampanie reklamowe."
        provider="Fotz Studio"
      />
      <WebPageSchema
        title="Kalkulator Cen Usług Marketingowych — Fotz Studio"
        description="Interaktywny kalkulator wyceny usług marketingowych — oblicz koszt SEO, strony internetowej, kampanii Google Ads i social media."
        url="https://fotz.pl/kalkulator-cen"
      />
      <Layout>
        <TooltipProvider>
          <section className="pt-40 pb-20 bg-gradient-to-b from-muted/30 to-background">
            <div className="container-wide px-4 md:px-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <Badge variant="secondary" className="mb-4">
                  <Calculator className="w-3 h-3 mr-1" />
                  Kalkulator cen
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Oszacuj koszt projektu
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Wybierz interesujące Cię usługi i dostosuj parametry, aby otrzymać wstępną wycenę. 
                  Ostateczna cena może się różnić w zależności od szczegółów projektu.
                </p>
              </motion.div>

              <h2 className="text-2xl font-heading font-bold mb-6">Wybierz usługi</h2>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Service Selection */}
                <div className="lg:col-span-2 space-y-6">
                  {categories.map((category, catIndex) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.1 }}
                    >
                      <Card className="overflow-hidden">
                        <CardHeader className={cn("bg-gradient-to-r text-white", category.color)}>
                          <CardTitle className="flex items-center gap-2">
                            <category.icon className="w-5 h-5" />
                            {category.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="grid sm:grid-cols-2 gap-3">
                            {category.services.map(service => (
                              <div
                                key={service.id}
                                onClick={() => toggleService(service.id)}
                                className={cn(
                                  "p-3 rounded-lg border-2 cursor-pointer transition-all",
                                  selectedServices.includes(service.id)
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                )}
                              >
                                <div className="flex items-start gap-3">
                                  <Checkbox 
                                    checked={selectedServices.includes(service.id)}
                                    className="mt-0.5"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span className="font-medium text-sm">{service.name}</span>
                                      {service.description && (
                                        <Tooltip>
                                          <TooltipTrigger>
                                            <Info className="w-3.5 h-3.5 text-muted-foreground" />
                                          </TooltipTrigger>
                                          <TooltipContent>
                                            <p className="max-w-xs">{service.description}</p>
                                          </TooltipContent>
                                        </Tooltip>
                                      )}
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">
                                      od {formatPrice(service.basePrice)} PLN
                                      <span className="text-xs ml-1">
                                        ({service.priceType === "miesięcznie" ? "/mies." : "jednorazowo"})
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Right: Configuration & Summary */}
                <div className="space-y-6">
                  {/* Sticky summary */}
                  <div className="lg:sticky lg:top-32 space-y-6">
                    {/* Sliders */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          Dostosuj parametry
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Complexity Slider */}
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <Label>Poziom zaawansowania</Label>
                            <Badge variant="outline">{getComplexityLabel()}</Badge>
                          </div>
                          <Slider
                            value={complexity}
                            onValueChange={setComplexity}
                            max={100}
                            step={1}
                            className="py-2"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Podstawowy</span>
                            <span>Premium</span>
                          </div>
                        </div>

                        {/* Urgency */}
                        <div className="space-y-3">
                          <Label>Termin realizacji</Label>
                          <div className="space-y-2">
                            {urgencyOptions.map(option => (
                              <div
                                key={option.id}
                                onClick={() => setUrgency(option.id)}
                                className={cn(
                                  "p-3 rounded-lg border cursor-pointer transition-all text-sm",
                                  urgency === option.id
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                )}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{option.label}</span>
                                  {option.multiplier > 1 && (
                                    <Badge variant="secondary" className="text-xs">
                                      +{Math.round((option.multiplier - 1) * 100)}%
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Contract Duration */}
                        {calculation.monthlyTotal > 0 && (
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <Label>Długość umowy (usługi stałe)</Label>
                              <Badge variant="outline">{contractMonths} mies.</Badge>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setContractMonths(Math.max(1, contractMonths - 1))}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <Slider
                                value={[contractMonths]}
                                onValueChange={([v]) => setContractMonths(v)}
                                min={1}
                                max={24}
                                step={1}
                                className="flex-1"
                              />
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setContractMonths(Math.min(24, contractMonths + 1))}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            {calculation.monthlyDiscount > 0 && (
                              <p className="text-xs text-green-600">
                                Rabat za umowę: -{Math.round(calculation.monthlyDiscount * 100)}%
                              </p>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Price Summary */}
                    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Calculator className="w-5 h-5" />
                          Podsumowanie wyceny
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {selectedServices.length === 0 ? (
                          <p className="text-muted-foreground text-sm text-center py-4">
                            Wybierz usługi, aby zobaczyć wycenę
                          </p>
                        ) : (
                          <>
                            <div className="space-y-2 max-h-40 overflow-y-auto">
                              {calculation.selectedItems.map((item, i) => (
                                <div key={i} className="flex justify-between text-sm">
                                  <span className="text-muted-foreground truncate mr-2">{item.name}</span>
                                  <span className="font-medium whitespace-nowrap">
                                    {formatPrice(item.price)} PLN
                                    <span className="text-xs text-muted-foreground ml-1">
                                      {item.type === "miesięcznie" ? "/mies." : ""}
                                    </span>
                                  </span>
                                </div>
                              ))}
                            </div>

                            <div className="border-t pt-4 space-y-2">
                              {calculation.oneTimeTotal > 0 && (
                                <div className="flex justify-between">
                                  <span>Jednorazowo:</span>
                                  <span className="font-bold">{formatPrice(calculation.oneTimeTotal)} PLN</span>
                                </div>
                              )}
                              {calculation.monthlyTotal > 0 && (
                                <div className="flex justify-between">
                                  <span>Miesięcznie:</span>
                                  <span className="font-bold">
                                    {calculation.monthlyDiscount > 0 && (
                                      <span className="text-muted-foreground line-through text-sm mr-2">
                                        {formatPrice(calculation.monthlyTotal)}
                                      </span>
                                    )}
                                    {formatPrice(calculation.discountedMonthly)} PLN
                                  </span>
                                </div>
                              )}
                              {calculation.monthlyTotal > 0 && (
                                <div className="flex justify-between text-primary font-bold pt-2 border-t">
                                  <span>Łącznie ({contractMonths} mies.):</span>
                                  <span>{formatPrice(calculation.totalContractValue)} PLN</span>
                                </div>
                              )}
                            </div>

                            <div className="pt-4 space-y-3">
                              <Button
                                className="w-full"
                                size="lg"
                                onClick={() => setShowContactForm(true)}
                              >
                                Wyślij zapytanie
                                <Send className="w-4 h-4 ml-2" />
                              </Button>
                              <Button
                                variant="outline"
                                className="w-full"
                                asChild
                              >
                                <Link to="/kontakt">
                                  Bezpłatna konsultacja
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                              </Button>
                            </div>
                          </>
                        )}

                        <p className="text-xs text-muted-foreground text-center">
                          * Podane ceny są orientacyjne i mogą ulec zmianie w zależności od szczegółów projektu.
                          Wszystkie ceny netto.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Modal */}
          <AnimatePresence>
            {showContactForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                onClick={() => setShowContactForm(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  onClick={e => e.stopPropagation()}
                  className="bg-background border rounded-xl p-6 max-w-md w-full shadow-xl"
                >
                  <h3 className="text-xl font-bold mb-4">Wyślij zapytanie o wycenę</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Imię i nazwisko *</Label>
                      <Input
                        id="name"
                        value={contactData.name}
                        onChange={e => setContactData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactData.email}
                        onChange={e => setContactData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        value={contactData.phone}
                        onChange={e => setContactData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Dodatkowe informacje</Label>
                      <Textarea
                        id="message"
                        value={contactData.message}
                        onChange={e => setContactData(prev => ({ ...prev, message: e.target.value }))}
                        rows={3}
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowContactForm(false)}
                        className="flex-1"
                      >
                        Anuluj
                      </Button>
                      <Button type="submit" disabled={isSubmitting} className="flex-1">
                        {isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            Wyślij
                            <Check className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success + Booking Prompt Modal */}
          <AnimatePresence>
            {formSubmitted && !showBookingModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="bg-background border rounded-xl p-8 max-w-md w-full shadow-xl text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Wycena wysłana!</h3>
                  <p className="text-muted-foreground mb-6">
                    Otrzymaliśmy Twoje zapytanie. Chcesz od razu zarezerwować bezpłatną konsultację, 
                    podczas której omówimy szczegóły projektu?
                  </p>
                  <div className="space-y-3">
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => setShowBookingModal(true)}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Zarezerwuj konsultację
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setFormSubmitted(false);
                        setSelectedServices([]);
                        setContactData({ name: "", email: "", phone: "", message: "" });
                      }}
                    >
                      Zamknij
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Skontaktujemy się również mailowo w ciągu 24h
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Booking Calendar Modal */}
          <AnimatePresence>
            {showBookingModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                onClick={() => setShowBookingModal(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  onClick={e => e.stopPropagation()}
                  className="bg-background border rounded-xl p-6 max-w-lg w-full shadow-xl max-h-[90vh] overflow-y-auto"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Zarezerwuj konsultację</h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowBookingModal(false)}
                    >
                      ✕
                    </Button>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg mb-4">
                    <p className="text-sm">
                      <strong>Wybrane usługi:</strong>{" "}
                      {calculation.selectedItems.map(s => s.name).join(", ")}
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Szacunkowa wartość:</strong>{" "}
                      {formatPrice(calculation.totalContractValue || calculation.oneTimeTotal)} PLN
                    </p>
                  </div>
                  <BookingCalendar onClose={handleBookingComplete} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </TooltipProvider>

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
              Kalkulator cen usług marketingowych — oblicz koszt marketingu online
            </h2>
            <p className="text-muted-foreground mb-4">
              Kalkulator cen usług marketingowych Fotz Studio pozwala oszacować
              orientacyjny koszt działań marketingowych dla Twojej firmy.
              Wybierz usługi, które Cię interesują — SEO i pozycjonowanie,
              tworzenie strony internetowej, kampanie Google Ads, obsługę social media,
              produkcję wideo — i sprawdź szacunkowe ceny. Kalkulator daje punkt
              wyjścia do rozmowy; finalna wycena zawsze przygotowywana jest
              indywidualnie.
            </p>
            <p className="text-muted-foreground mb-6">
              Transparentność cenowa to nasz priorytet. Ceny usług marketingowych
              zależą od zakresu, intensywności i specyfiki branży. Kalkulator
              prezentuje typowe widełki cenowe dla polskiego rynku marketingowego.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Ile kosztuje pozycjonowanie SEO, strona www i kampanie Google Ads?
            </h2>
            <p className="text-muted-foreground mb-4">
              Pozycjonowanie SEO: od 800 zł/mc (lokalna firma, mała witryna)
              do 5000+ zł/mc (sklep e-commerce, duże serwisy). Strona internetowa:
              od 2500 zł (landing page) do 20 000+ zł (rozbudowany portal).
              Kampanie Google Ads: obsługa od 500 zł/mc + budżet reklamowy.
              Obsługa social media: od 1200 zł/mc (podstawowy pakiet) do 4000+ zł/mc
              (pełne zarządzanie z reklamami).
            </p>
            <p className="text-muted-foreground mb-6">
              Produkcja wideo: reel 500-1500 zł, spot reklamowy 3000-15 000 zł.
              Identyfikacja wizualna (logo + brand book): 2000-8000 zł.
              Sklep internetowy (WooCommerce/Shopify): 5000-25 000 zł.
              Wszystkie ceny netto, wycena indywidualna bezpłatna.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Jak planować budżet marketingowy? Ile wydawać na marketing?
            </h2>
            <p className="text-muted-foreground">
              Zalecany budżet marketingowy to 5-15% przychodów firmy, w zależności
              od branży i etapu rozwoju. Startups inwestują więcej (15-20%), dojrzałe
              firmy mniej (5-10%). Marketing to inwestycja z mierzalnym zwrotem —
              kalkulator ROI pomoże Ci ocenić potencjalne efekty przed podjęciem decyzji.
              Skontaktuj się z nami po indywidualną wycenę i plan działania.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/konsultacja" className="text-primary hover:underline font-medium text-sm">→ Bezpłatna konsultacja</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

      </Layout>
    </>
  );
}
