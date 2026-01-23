import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
  MapPin,
  Megaphone,
  Users,
  Image,
  Video,
  Smartphone,
  Linkedin,
  Mail,
  User,
  MessageSquare,
  Building,
  Palette,
  FileText,
  PenTool,
  Loader2,
  Plus,
  Minus,
  ArrowRight
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { sendLeadToCRM } from "@/hooks/useCRMWebhook";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Imię musi mieć minimum 2 znaki").max(100, "Imię max 100 znaków"),
  email: z.string().trim().email("Nieprawidłowy adres email").max(255, "Email max 255 znaków"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, "Wiadomość musi mieć minimum 10 znaków").max(2000, "Wiadomość max 2000 znaków"),
});

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
        description: "Jednostronicowa witryna konwersyjna",
        priceFrom: 2000,
        priceTo: 4000,
        priceType: "jednorazowo",
        icon: Globe,
        includes: ["Responsywny design", "Formularz kontaktowy", "Optymalizacja SEO", "Hosting (1 rok)"]
      },
      {
        id: "wizytowka",
        name: "Strona Wizytówka",
        description: "Prosta prezentacja firmy (3-5 podstron)",
        priceFrom: 3000,
        priceTo: 5000,
        priceType: "jednorazowo",
        icon: Globe,
        includes: ["Do 5 podstron", "Galeria", "Mapa dojazdu", "Formularz"]
      },
      {
        id: "firmowa",
        name: "Strona Firmowa",
        description: "Rozbudowana witryna z CMS",
        priceFrom: 5000,
        priceTo: 12000,
        priceType: "jednorazowo",
        icon: Globe,
        popular: true,
        includes: ["Do 15 podstron", "System CMS", "Blog firmowy", "Integracje", "Szkolenie"]
      },
      {
        id: "korporacyjna",
        name: "Strona Korporacyjna",
        description: "Zaawansowana strona dla dużych firm",
        priceFrom: 12000,
        priceTo: 30000,
        priceType: "jednorazowo",
        icon: Building,
        includes: ["Nieograniczone podstrony", "Wiele języków", "Zaawansowane integracje", "Panel administracyjny"]
      },
      {
        id: "ecommerce-maly",
        name: "Sklep E-commerce Mały",
        description: "Do 100 produktów",
        priceFrom: 6000,
        priceTo: 12000,
        priceType: "jednorazowo",
        icon: ShoppingCart,
        includes: ["Do 100 produktów", "Płatności online", "Koszyk", "Panel zamówień"]
      },
      {
        id: "ecommerce-sredni",
        name: "Sklep E-commerce Średni",
        description: "100-1000 produktów",
        priceFrom: 12000,
        priceTo: 25000,
        priceType: "jednorazowo",
        icon: ShoppingCart,
        popular: true,
        includes: ["Do 1000 produktów", "Integracja z kurierami", "Hurtownie", "Automatyzacje"]
      },
      {
        id: "ecommerce-duzy",
        name: "Sklep E-commerce Duży",
        description: "1000+ produktów, zaawansowane integracje",
        priceFrom: 25000,
        priceTo: 80000,
        priceType: "jednorazowo",
        icon: ShoppingCart,
        includes: ["Nieograniczone produkty", "ERP/WMS", "Multi-walutowość", "Marketplace"]
      },
    ],
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Prowadzenie profili społecznościowych",
    icon: Share2,
    services: [
      {
        id: "sm-start",
        name: "Pakiet Start",
        description: "1 platforma, podstawowa obsługa",
        priceFrom: 1200,
        priceTo: 1800,
        priceType: "miesięcznie",
        icon: Share2,
        includes: ["8 postów/mies.", "Stories", "Moderacja", "Raport miesięczny"]
      },
      {
        id: "sm-business",
        name: "Pakiet Business",
        description: "2 platformy, rozszerzona obsługa",
        priceFrom: 2000,
        priceTo: 3000,
        priceType: "miesięcznie",
        icon: Share2,
        popular: true,
        includes: ["12 postów/mies.", "Reels/TikTok", "Moderacja 7 dni", "Analityka"]
      },
      {
        id: "sm-premium",
        name: "Pakiet Premium",
        description: "3+ platformy, pełna obsługa",
        priceFrom: 3500,
        priceTo: 6000,
        priceType: "miesięcznie",
        icon: Share2,
        includes: ["20+ postów/mies.", "Video content", "Influencer mgmt", "Dedykowany opiekun"]
      },
      {
        id: "sm-facebook",
        name: "Tylko Facebook",
        description: "Dedykowana obsługa FB",
        priceFrom: 1000,
        priceTo: 1500,
        priceType: "miesięcznie",
        icon: Facebook,
        includes: ["8 postów", "Stories", "Events", "Moderacja"]
      },
      {
        id: "sm-instagram",
        name: "Tylko Instagram",
        description: "Dedykowana obsługa IG",
        priceFrom: 1200,
        priceTo: 2000,
        priceType: "miesięcznie",
        icon: Camera,
        includes: ["10 postów", "Reels", "Stories", "Współprace"]
      },
      {
        id: "sm-linkedin",
        name: "Tylko LinkedIn",
        description: "B2B personal branding",
        priceFrom: 1500,
        priceTo: 2500,
        priceType: "miesięcznie",
        icon: Linkedin,
        includes: ["8 postów", "Artykuły", "Networking", "Lead generation"]
      },
      {
        id: "sm-tiktok",
        name: "Tylko TikTok",
        description: "Kreacje video dla Gen Z",
        priceFrom: 2000,
        priceTo: 4000,
        priceType: "miesięcznie",
        icon: Video,
        includes: ["8-12 filmów", "Trendy", "Hashtagi", "Duety"]
      },
    ],
  },
  {
    id: "kampanie",
    title: "Kampanie Reklamowe",
    description: "Facebook Ads, Google Ads, kampanie płatne",
    icon: Megaphone,
    services: [
      {
        id: "fb-ads-start",
        name: "Facebook Ads Start",
        description: "Budżet do 3000 PLN/mies.",
        priceFrom: 1200,
        priceTo: 1800,
        priceType: "miesięcznie",
        icon: Facebook,
        includes: ["Konfiguracja", "2-3 kampanie", "Kreacje", "Optymalizacja"]
      },
      {
        id: "fb-ads-business",
        name: "Facebook Ads Business",
        description: "Budżet 3000-10000 PLN/mies.",
        priceFrom: 2000,
        priceTo: 3500,
        priceType: "miesięcznie",
        icon: Facebook,
        popular: true,
        includes: ["Remarketing", "Lookalike", "A/B testy", "Konwersje API"]
      },
      {
        id: "fb-ads-premium",
        name: "Facebook Ads Premium",
        description: "Budżet 10000+ PLN/mies.",
        priceFrom: 3500,
        priceTo: 6000,
        priceType: "miesięcznie",
        icon: Facebook,
        includes: ["Zaawansowane strategie", "Katalog produktów", "Dynamic ads", "Dedykowany specjalista"]
      },
      {
        id: "google-ads-start",
        name: "Google Ads Start",
        description: "Search, budżet do 3000 PLN",
        priceFrom: 1200,
        priceTo: 1800,
        priceType: "miesięcznie",
        icon: Target,
        includes: ["Kampania Search", "Do 50 słów kluczowych", "Reklamy", "Raportowanie"]
      },
      {
        id: "google-ads-business",
        name: "Google Ads Business",
        description: "Search + Display, budżet do 10000 PLN",
        priceFrom: 2000,
        priceTo: 3500,
        priceType: "miesięcznie",
        icon: Target,
        popular: true,
        includes: ["Search + Display", "Remarketing", "YouTube Ads", "Analityka zaawansowana"]
      },
      {
        id: "google-ads-premium",
        name: "Google Ads Premium",
        description: "Pełna obsługa, budżet 10000+",
        priceFrom: 3500,
        priceTo: 7000,
        priceType: "miesięcznie",
        icon: Target,
        includes: ["Wszystkie formaty", "Shopping", "Performance Max", "Dedykowany specjalista"]
      },
      {
        id: "linkedin-ads",
        name: "LinkedIn Ads",
        description: "Kampanie B2B",
        priceFrom: 2500,
        priceTo: 5000,
        priceType: "miesięcznie",
        icon: Linkedin,
        includes: ["Sponsored Content", "Message Ads", "Lead Gen Forms", "Account targeting"]
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
        id: "seo-audyt",
        name: "Audyt SEO",
        description: "Jednorazowa analiza strony",
        priceFrom: 1500,
        priceTo: 3000,
        priceType: "jednorazowo",
        icon: FileText,
        includes: ["Analiza techniczna", "Analiza treści", "Konkurencja", "Rekomendacje"]
      },
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
        priceTo: 4500,
        priceType: "miesięcznie",
        icon: TrendingUp,
        popular: true,
        includes: ["Pełny audyt", "On-page + Off-page", "15 fraz", "Content marketing", "Link building"]
      },
      {
        id: "seo-premium",
        name: "SEO Premium",
        description: "Agresywna strategia SEO",
        priceFrom: 4500,
        priceTo: 8000,
        priceType: "miesięcznie",
        icon: TrendingUp,
        includes: ["Dedykowany strateg", "Nieograniczone frazy", "Link building premium", "PR & outreach"]
      },
      {
        id: "seo-ecommerce",
        name: "SEO E-commerce",
        description: "Pozycjonowanie sklepów online",
        priceFrom: 3500,
        priceTo: 7000,
        priceType: "miesięcznie",
        icon: ShoppingCart,
        includes: ["Optymalizacja produktów", "Kategorie", "Rich snippets", "Google Merchant"]
      },
      {
        id: "google-maps",
        name: "Wizytówka Google Maps",
        description: "Optymalizacja profilu Google",
        priceFrom: 500,
        priceTo: 1500,
        priceType: "miesięcznie",
        icon: MapPin,
        includes: ["Optymalizacja profilu", "Zdjęcia", "Posty", "Odpowiadanie na opinie"]
      },
      {
        id: "local-seo",
        name: "Lokalne SEO",
        description: "Widoczność w okolicy",
        priceFrom: 1500,
        priceTo: 3000,
        priceType: "miesięcznie",
        icon: MapPin,
        includes: ["Google Maps", "Katalogi lokalne", "Opinie", "NAP consistency"]
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
        id: "foto-produktowa",
        name: "Sesja Produktowa",
        description: "Zdjęcia produktów na białym tle",
        priceFrom: 800,
        priceTo: 2000,
        priceType: "jednorazowo",
        icon: Camera,
        includes: ["Do 20 produktów", "Packshoty", "Retusz", "Format e-commerce"]
      },
      {
        id: "foto-firmowa",
        name: "Sesja Firmowa",
        description: "Zdjęcia zespołu i biura",
        priceFrom: 1500,
        priceTo: 3500,
        priceType: "jednorazowo",
        icon: Users,
        includes: ["Do 4h sesji", "Zdjęcia zespołu", "Przestrzenie biurowe", "50+ zdjęć"]
      },
      {
        id: "foto-eventowa",
        name: "Sesja Eventowa",
        description: "Reportaż z wydarzeń",
        priceFrom: 2000,
        priceTo: 5000,
        priceType: "jednorazowo",
        icon: Camera,
        popular: true,
        includes: ["Cały dzień", "200+ zdjęć", "Retusz", "Galeria online"]
      },
      {
        id: "foto-portretowa",
        name: "Sesja Portretowa",
        description: "Portrety biznesowe",
        priceFrom: 500,
        priceTo: 1500,
        priceType: "jednorazowo",
        icon: User,
        includes: ["1h sesji", "10 zdjęć", "Retusz", "Pliki HD"]
      },
      {
        id: "reels-pakiet",
        name: "Pakiet Reels/TikTok",
        description: "Krótkie formy video",
        priceFrom: 2500,
        priceTo: 6000,
        priceType: "jednorazowo",
        icon: Smartphone,
        popular: true,
        includes: ["5-10 reelsów", "Montaż", "Napisy", "Muzyka", "Trendy"]
      },
      {
        id: "film-promo",
        name: "Film Promocyjny",
        description: "Profesjonalna produkcja video",
        priceFrom: 5000,
        priceTo: 20000,
        priceType: "jednorazowo",
        icon: Film,
        includes: ["Scenariusz", "Dzień zdjęciowy", "Postprodukcja", "Licencja muzyczna"]
      },
      {
        id: "film-reklamowy",
        name: "Spot Reklamowy",
        description: "Reklama TV/online (30s)",
        priceFrom: 8000,
        priceTo: 30000,
        priceType: "jednorazowo",
        icon: Film,
        includes: ["Koncepcja kreatywna", "Produkcja", "Aktorzy", "Postprodukcja premium"]
      },
      {
        id: "dron",
        name: "Ujęcia z Drona",
        description: "Filmowanie i zdjęcia z powietrza",
        priceFrom: 1500,
        priceTo: 4000,
        priceType: "jednorazowo",
        icon: Camera,
        includes: ["Do 3h lotu", "Zdjęcia + video", "Montaż", "Licencje PANSA"]
      },
      {
        id: "viz3d-produkt",
        name: "Wizualizacja 3D Produktu",
        description: "Renderingi produktowe",
        priceFrom: 500,
        priceTo: 2000,
        priceType: "jednorazowo",
        icon: Box,
        includes: ["Modelowanie 3D", "3 ujęcia", "Renderingi HD", "2 rewizje"]
      },
      {
        id: "viz3d-wnetrze",
        name: "Wizualizacja 3D Wnętrza",
        description: "Fotorealistyczne wizualizacje wnętrz",
        priceFrom: 1000,
        priceTo: 3000,
        priceType: "jednorazowo",
        icon: Box,
        includes: ["1 pomieszczenie", "2 ujęcia", "Fotorealizm", "Rewizje"]
      },
      {
        id: "viz3d-architektura",
        name: "Wizualizacja Architektoniczna",
        description: "Wizualizacje budynków",
        priceFrom: 2000,
        priceTo: 8000,
        priceType: "jednorazowo",
        icon: Building,
        includes: ["Zewnętrzna wizualizacja", "Otoczenie", "Oświetlenie", "Rewizje"]
      },
    ],
  },
  {
    id: "branding",
    title: "Branding & Grafika",
    description: "Logo, identyfikacja wizualna, materiały",
    icon: Brush,
    services: [
      {
        id: "logo-podstawowe",
        name: "Logo Podstawowe",
        description: "Prosty znak graficzny",
        priceFrom: 1000,
        priceTo: 2500,
        priceType: "jednorazowo",
        icon: PenTool,
        includes: ["2 koncepcje", "Rewizje", "Pliki źródłowe", "Wersje kolorystyczne"]
      },
      {
        id: "logo-premium",
        name: "Logo Premium",
        description: "Kompleksowy projekt logo",
        priceFrom: 2500,
        priceTo: 5000,
        priceType: "jednorazowo",
        icon: PenTool,
        popular: true,
        includes: ["4 koncepcje", "Badanie rynku", "Księga znaku", "Animacja logo"]
      },
      {
        id: "identyfikacja-podstawowa",
        name: "Identyfikacja Podstawowa",
        description: "Logo + podstawowe elementy",
        priceFrom: 3500,
        priceTo: 7000,
        priceType: "jednorazowo",
        icon: Palette,
        includes: ["Logo", "Kolory", "Typografia", "Wizytówki", "Papier firmowy"]
      },
      {
        id: "identyfikacja-pelna",
        name: "Identyfikacja Pełna",
        description: "Kompletny system wizualny",
        priceFrom: 8000,
        priceTo: 20000,
        priceType: "jednorazowo",
        icon: Brush,
        includes: ["Pełna identyfikacja", "Brandbook", "Szablony", "Materiały reklamowe", "Social media kit"]
      },
      {
        id: "rebranding",
        name: "Rebranding",
        description: "Odświeżenie marki",
        priceFrom: 5000,
        priceTo: 15000,
        priceType: "jednorazowo",
        icon: Brush,
        includes: ["Audyt marki", "Strategia", "Nowa identyfikacja", "Wdrożenie"]
      },
      {
        id: "grafika-social",
        name: "Grafiki Social Media",
        description: "Szablony i kreacje",
        priceFrom: 1500,
        priceTo: 4000,
        priceType: "jednorazowo",
        icon: Image,
        includes: ["10 szablonów", "Różne formaty", "Edytowalne pliki", "Guidelines"]
      },
      {
        id: "grafika-druk",
        name: "Materiały Drukowane",
        description: "Ulotki, katalogi, plakaty",
        priceFrom: 500,
        priceTo: 3000,
        priceType: "jednorazowo",
        icon: FileText,
        includes: ["Projekt graficzny", "Przygotowanie do druku", "Rewizje", "Nadzór druku"]
      },
    ],
  },
];

type FlowStep = "categories" | "services" | "summary" | "contact";

export default function Cennik() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [flowStep, setFlowStep] = useState<FlowStep>("categories");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

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

  const proceedToContact = () => {
    setFlowStep("contact");
  };

  const generateServicesSummary = () => {
    return selectedDetails.selected.map(s => 
      `${s.name} (od ${formatPrice(s.priceFrom)} PLN ${s.priceType})`
    ).join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    // Walidacja
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message;
        }
      });
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Przygotuj podsumowanie usług
      const servicesSummary = selectedDetails.selected
        .map(s => `• ${s.name} - od ${formatPrice(s.priceFrom)} PLN (${s.priceType})`)
        .join("\n");

      const priceSummary = [
        selectedDetails.hasOneTime ? `Koszty jednorazowe: ${formatPrice(selectedDetails.oneTimeTotal)} - ${formatPrice(selectedDetails.oneTimeTotalMax)} PLN` : '',
        selectedDetails.hasMonthly ? `Koszty miesięczne: ${formatPrice(selectedDetails.monthlyTotal)} - ${formatPrice(selectedDetails.monthlyTotalMax)} PLN/mies.` : '',
      ].filter(Boolean).join("\n");

      // Wysyłka przez Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Nowe zapytanie z cennika od ${formData.name}`,
          from_name: "Fotz Studio - Konfigurator",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Nie podano",
          message: formData.message,
          selected_services: servicesSummary,
          price_estimate: priceSummary,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error("Błąd podczas wysyłania zapytania");
      }

      // Send to CRM webhook (fire and forget)
      sendLeadToCRM({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        source: "fotz.pl/cennik",
        notes: `${formData.message}\n\n--- Wybrane usługi ---\n${servicesSummary}\n\n${priceSummary}`,
      });

      toast({
        title: "Zapytanie wysłane!",
        description: "Przekierowujemy Cię na stronę potwierdzenia...",
      });

      // Przekierowanie na stronę z podziękowaniem
      navigate("/podziekowanie");
    } catch (error) {
      console.error("Error sending inquiry:", error);
      toast({
        title: "Błąd wysyłania",
        description: "Nie udało się wysłać zapytania. Spróbuj ponownie lub skontaktuj się bezpośrednio.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Cennik Usług Marketingowych | Konfigurator | Fotz Studio"
        description="Skonfiguruj pakiet usług marketingowych: strony internetowe, social media, SEO, produkcja video. Interaktywny konfigurator cen online."
        canonical="https://fotz.pl/cennik"
        keywords="cennik marketing, cennik usług, konfigurator cen, strony internetowe cena, social media cena, SEO cena"
      />

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
              {flowStep === "contact" && "Wyślij zapytanie ofertowe"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flow Steps Indicator */}
      <section className="py-4 md:py-6 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-sm z-30">
        <div className="container-wide">
          <div className="grid grid-cols-4 gap-1 md:flex md:items-center md:justify-center md:gap-4">
            <div className={cn(
              "flex flex-col md:flex-row items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-lg md:rounded-full transition-all text-xs md:text-sm text-center",
              flowStep === "categories" ? "bg-primary text-primary-foreground" : selectedCategories.length > 0 ? "bg-green-500/20 text-green-500" : "bg-secondary text-muted-foreground"
            )}>
              <span className="font-medium hidden md:inline">1. Kategorie</span>
              <span className="font-medium md:hidden">1</span>
              <span className="text-[10px] md:hidden">Kategorie</span>
            </div>
            <div className={cn(
              "flex flex-col md:flex-row items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-lg md:rounded-full transition-all text-xs md:text-sm text-center",
              flowStep === "services" ? "bg-primary text-primary-foreground" : flowStep === "summary" || flowStep === "contact" ? "bg-green-500/20 text-green-500" : "bg-secondary text-muted-foreground"
            )}>
              <span className="font-medium hidden md:inline">2. Warianty</span>
              <span className="font-medium md:hidden">2</span>
              <span className="text-[10px] md:hidden">Warianty</span>
            </div>
            <div className={cn(
              "flex flex-col md:flex-row items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-lg md:rounded-full transition-all text-xs md:text-sm text-center",
              flowStep === "summary" ? "bg-primary text-primary-foreground" : flowStep === "contact" ? "bg-green-500/20 text-green-500" : "bg-secondary text-muted-foreground"
            )}>
              <span className="font-medium hidden md:inline">3. Podsumowanie</span>
              <span className="font-medium md:hidden">3</span>
              <span className="text-[10px] md:hidden">Suma</span>
            </div>
            <div className={cn(
              "flex flex-col md:flex-row items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-lg md:rounded-full transition-all text-xs md:text-sm text-center",
              flowStep === "contact" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            )}>
              <span className="font-medium hidden md:inline">4. Kontakt</span>
              <span className="font-medium md:hidden">4</span>
              <span className="text-[10px] md:hidden">Kontakt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container-wide">
          <div className="flex flex-col-reverse lg:flex-row lg:grid lg:grid-cols-[1fr_340px] gap-6 lg:gap-8">
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

                        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
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
                          <Button
                            size="lg"
                            onClick={proceedToContact}
                            className="gap-2"
                          >
                            Przejdź do formularza
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Step 4: Contact Form */}
                {flowStep === "contact" && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-2xl mx-auto">
                      <Card className="border-primary/20">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-primary" />
                            Wyślij zapytanie ofertowe
                          </CardTitle>
                          <CardDescription>
                            Wypełnij formularz, a skontaktujemy się w ciągu 24h
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="name">Imię i nazwisko *</Label>
                                <Input
                                  id="name"
                                  value={formData.name}
                                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                  placeholder="Jan Kowalski"
                                  className={formErrors.name ? "border-red-500" : ""}
                                />
                                {formErrors.name && <p className="text-xs text-red-500">{formErrors.name}</p>}
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                  placeholder="jan@firma.pl"
                                  className={formErrors.email ? "border-red-500" : ""}
                                />
                                {formErrors.email && <p className="text-xs text-red-500">{formErrors.email}</p>}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                placeholder="+48 123 456 789"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="message">Wiadomość *</Label>
                              <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                placeholder="Opisz krótko swój projekt lub potrzeby..."
                                rows={4}
                                className={formErrors.message ? "border-red-500" : ""}
                              />
                              {formErrors.message && <p className="text-xs text-red-500">{formErrors.message}</p>}
                            </div>

                            {/* Selected services summary */}
                            {selectedDetails.count > 0 && (
                              <div className="p-4 rounded-lg bg-secondary/50">
                                <p className="text-sm font-medium mb-2">Wybrane usługi:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  {selectedDetails.selected.slice(0, 5).map(s => (
                                    <li key={s.id}>• {s.name}</li>
                                  ))}
                                  {selectedDetails.count > 5 && (
                                    <li className="text-primary">+{selectedDetails.count - 5} więcej</li>
                                  )}
                                </ul>
                              </div>
                            )}

                            <div className="flex flex-col sm:flex-row gap-4">
                              <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                onClick={() => setFlowStep("summary")}
                                className="gap-2"
                              >
                                <ChevronLeft className="w-4 h-4" />
                                Wróć
                              </Button>
                              <Button
                                type="submit"
                                size="lg"
                                className="flex-1 gap-2"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Wysyłanie...
                                  </>
                                ) : (
                                  <>
                                    <Send className="w-4 h-4" />
                                    Wyślij zapytanie
                                  </>
                                )}
                              </Button>
                            </div>
                          </form>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sticky Summary Sidebar - shows first on mobile */}
            <div className="lg:sticky lg:top-36 h-fit order-first lg:order-last">
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
