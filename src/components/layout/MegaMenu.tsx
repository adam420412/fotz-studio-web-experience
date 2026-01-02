import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Megaphone, 
  Globe, 
  Layers,
  FileText,
  Share2,
  Facebook,
  Target,
  ShoppingCart,
  TrendingUp,
  MapPin,
  Film,
  Clapperboard,
  Box,
  Camera,
  Fingerprint,
  Brush,
  Store,
  ShoppingBag,
  Crown,
  CalendarDays,
  Stethoscope,
  UtensilsCrossed,
  Sparkles,
  Home,
  Car,
  Monitor,
  GraduationCap,
  Scale,
  Package,
  Heart,
  Plane,
  Briefcase,
  HelpCircle,
  Navigation,
  X,
  Calculator,
  Zap,
  Music2,
  Youtube,
  Instagram
} from "lucide-react";

// Import portfolio images for preview
import brandingImg from "@/assets/portfolio/klagem.png";
import websiteImg from "@/assets/portfolio/rppg.png";
import videoImg from "@/assets/portfolio/enea-stadion.png";
import marketingImg from "@/assets/portfolio/fabryka-virali.png";
import graphicImg from "@/assets/portfolio/verthe.png";
import branzeImg from "@/assets/portfolio/fps-cegielski.png";

interface MenuItem {
  name: string;
  href: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  tooltip: string;
}

interface MenuCategory {
  title: string;
  description: string;
  image: string;
  color: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: "Marketing",
    description: "Kompleksowa obsługa marketingowa dla Twojej firmy",
    image: marketingImg,
    color: "#75143F",
    items: [
      { name: "Kompleksowa obsługa", href: "/kompleksowa-obsluga-marketingowa", icon: Layers, tooltip: "Pełna obsługa marketingowa od A do Z" },
      { name: "Marketing Internetowy", href: "/agencja-marketingu-internetowego", icon: Megaphone, tooltip: "Strategia digital i promocja online" },
      { name: "Content Marketing", href: "/content-marketing", icon: FileText, tooltip: "Tworzenie wartościowych treści" },
      { name: "Social Media", href: "/social-media", icon: Share2, tooltip: "Prowadzenie profili społecznościowych" },
      { name: "Kampanie Reklamowe", href: "/kampanie-reklamowe", badge: "Nowe", icon: Zap, tooltip: "Google, Facebook, TikTok, LinkedIn, YouTube Ads" },
      { name: "Meta Ads (FB + IG)", href: "/facebook-instagram-ads", icon: Layers, tooltip: "Reklamy na Facebooku i Instagramie" },
      { name: "Instagram Ads", href: "/instagram-ads", icon: Instagram, tooltip: "Reklamy wizualne na Instagramie" },
      { name: "TikTok Ads", href: "/tiktok-ads", icon: Music2, tooltip: "Reklamy na TikToku" },
      { name: "LinkedIn Ads", href: "/linkedin-ads", icon: Briefcase, tooltip: "Kampanie B2B na LinkedIn" },
      { name: "YouTube Ads", href: "/youtube-ads", icon: Youtube, tooltip: "Reklamy wideo na YouTube" },
    ],
  },
  {
    title: "Strony & SEO",
    description: "Strony internetowe, e-commerce i pozycjonowanie w wyszukiwarkach",
    image: websiteImg,
    color: "#0F3053",
    items: [
      { name: "Strony Internetowe", href: "/strony-internetowe", icon: Globe, tooltip: "Projektowanie i wdrażanie stron www" },
      { name: "E-commerce & Sklepy", href: "/ecommerce-tworzenie-sklepu", icon: ShoppingCart, tooltip: "Sklepy internetowe z integracjami" },
      { name: "Pozycjonowanie SEO", href: "/pozycjonowanie", icon: TrendingUp, tooltip: "Wysoka pozycja w wynikach Google" },
      { name: "Google Maps", href: "/pozycjonowanie-google-maps", icon: MapPin, tooltip: "Widoczność w mapach lokalnych" },
    ],
  },
  {
    title: "Produkcja",
    description: "Profesjonalna produkcja video i foto",
    image: videoImg,
    color: "#422249",
    items: [
      { name: "Produkcja Filmów", href: "/produkcja-filmow-poznan", icon: Film, tooltip: "Filmy promocyjne i korporacyjne" },
      { name: "Spoty Reklamowe", href: "/spoty-reklamowe", icon: Clapperboard, tooltip: "Krótkie formy reklamowe" },
      { name: "Wizualizacje 3D", href: "/wizualizacje-3d", icon: Box, tooltip: "Renderingi produktów i architektury" },
      { name: "Fotografia", href: "/fotograf-poznan", icon: Camera, tooltip: "Sesje zdjęciowe produktowe i eventowe" },
      { name: "Fotografia z drona", href: "/fotografia-z-drona", badge: "Nowe", icon: Navigation, tooltip: "Zdjęcia i filmy z lotu ptaka" },
    ],
  },
  {
    title: "Branding",
    description: "Identyfikacja wizualna i budowanie marki",
    image: brandingImg,
    color: "#75143F",
    items: [
      { name: "Identyfikacja wizualna", href: "/identyfikacja-wizualna", icon: Fingerprint, tooltip: "Logo, kolory, typografia marki" },
      { name: "Obsługa graficzna", href: "/agencja-graficzna", icon: Brush, tooltip: "Projekty graficzne na zamówienie" },
    ],
  },
  {
    title: "Dla kogo",
    description: "Rozwiązania dla różnych typów biznesu",
    image: graphicImg,
    color: "#2D4A3E",
    items: [
      { name: "Firmy lokalne", href: "/dla-kogo/firmy-lokalne", icon: Store, tooltip: "Marketing dla lokalnych przedsiębiorstw" },
      { name: "E-commerce", href: "/dla-kogo/ecommerce", icon: ShoppingBag, tooltip: "Strategie dla sklepów online" },
      { name: "Marki premium", href: "/dla-kogo/marki-premium", icon: Crown, tooltip: "Ekskluzywny marketing premium" },
      { name: "Instytucje i eventy", href: "/dla-kogo/instytucje", icon: CalendarDays, tooltip: "Promocja wydarzeń i instytucji" },
    ],
  },
  {
    title: "Branże",
    description: "Marketing dopasowany do Twojej branży",
    image: branzeImg,
    color: "#1A365D",
    items: [
      { name: "Branża medyczna", href: "/dla-kogo/branza-medyczna", icon: Stethoscope, tooltip: "Marketing dla klinik i gabinetów" },
      { name: "Gastronomia", href: "/dla-kogo/gastronomia", icon: UtensilsCrossed, tooltip: "Promocja restauracji i kawiarni" },
      { name: "Beauty & Wellness", href: "/dla-kogo/beauty-wellness", icon: Sparkles, tooltip: "Marketing salonów beauty" },
      { name: "Nieruchomości", href: "/dla-kogo/nieruchomosci", icon: Home, tooltip: "Sprzedaż i wynajem nieruchomości" },
      { name: "Automotive", href: "/dla-kogo/automotive", icon: Car, tooltip: "Marketing dla motoryzacji" },
      { name: "IT & SaaS", href: "/dla-kogo/it-saas", icon: Monitor, tooltip: "Promocja produktów technologicznych" },
      { name: "Edukacja", href: "/dla-kogo/edukacja", icon: GraduationCap, tooltip: "Marketing szkół i kursów" },
      { name: "Prawo & Finanse", href: "/dla-kogo/prawo-finanse", icon: Scale, tooltip: "Komunikacja kancelarii i firm" },
      { name: "E-commerce & Retail", href: "/dla-kogo/ecommerce-retail", icon: ShoppingCart, tooltip: "Strategie sprzedaży detalicznej" },
      { name: "Produkcja", href: "/dla-kogo/produkcja", icon: Package, tooltip: "Marketing dla producentów B2B" },
      { name: "NGO & Fundacje", href: "/dla-kogo/ngo", icon: Heart, tooltip: "Komunikacja organizacji non-profit" },
      { name: "Turystyka", href: "/dla-kogo/turystyka", icon: Plane, tooltip: "Promocja hoteli i biur podróży" },
    ],
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [hoveredCategory, setHoveredCategory] = useState<number>(0);
  const activeCategory = menuCategories[hoveredCategory];

  const renderMenuItem = (item: MenuItem, categoryIndex: number, itemIndex: number) => {
    const IconComponent = item.icon;
    return (
      <motion.li 
        key={item.href}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: categoryIndex * 0.05 + itemIndex * 0.03 + 0.15 }}
      >
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <Link
              to={item.href}
              onClick={onClose}
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-2 hover:translate-x-1 group"
            >
              <IconComponent className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              <span>{item.name}</span>
              {item.badge && (
                <span className="text-[10px] font-medium px-1.5 py-0.5 bg-[#75143F]/20 text-[#75143F] rounded animate-pulse">
                  {item.badge}
                </span>
              )}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="text-xs max-w-[200px]">
            {item.tooltip}
          </TooltipContent>
        </Tooltip>
      </motion.li>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.4, 0, 0.2, 1]
            }}
            className="fixed top-20 left-0 right-0 z-50 px-4 md:px-12"
          >
            <div className="container mx-auto">
              <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-[320px_1fr] min-h-[400px]">
                  {/* Left Preview Panel */}
                  <div className="hidden lg:block relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#75143F] to-[#0F3053]" />
                    
                    <AnimatePresence mode="sync">
                      <motion.div
                        key={hoveredCategory}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0"
                      >
                        <motion.div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${activeCategory.image})` }}
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        <motion.div 
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          style={{ background: `linear-gradient(135deg, ${activeCategory.color}E6 0%, ${activeCategory.color}99 100%)` }}
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`content-${hoveredCategory}`}
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                        >
                          <motion.h3 className="text-2xl font-bold text-white mb-2">
                            {activeCategory.title}
                          </motion.h3>
                          <motion.p className="text-white/80 text-sm">
                            {activeCategory.description}
                          </motion.p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    
                    <motion.div 
                      className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/20"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute bottom-20 right-8 w-12 h-12 rounded-full border border-white/10"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                  </div>

                  {/* Right Menu Items */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <Link 
                        to="/uslugi" 
                        onClick={onClose}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Wszystkie usługi →
                      </Link>
                      <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-secondary/80 transition-colors text-muted-foreground hover:text-foreground"
                        aria-label="Zamknij menu"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Main services row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                      {menuCategories.slice(0, 4).map((category, categoryIndex) => (
                        <motion.div
                          key={category.title}
                          onMouseEnter={() => setHoveredCategory(categoryIndex)}
                          className={cn(
                            "space-y-3 relative",
                            categoryIndex < 3 && "md:border-r md:border-border/30 md:pr-6"
                          )}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: categoryIndex * 0.05 + 0.1 }}
                        >
                          <h4 
                            className={cn(
                              "text-sm font-semibold transition-all duration-300 flex items-center gap-2",
                              hoveredCategory === categoryIndex 
                                ? "text-foreground translate-x-1" 
                                : "text-muted-foreground"
                            )}
                            style={{ color: hoveredCategory === categoryIndex ? category.color : undefined }}
                          >
                            <motion.span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: category.color }}
                              animate={{ 
                                scale: hoveredCategory === categoryIndex ? 1 : 0,
                                opacity: hoveredCategory === categoryIndex ? 1 : 0
                              }}
                              transition={{ duration: 0.2 }}
                            />
                            {category.title}
                          </h4>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => renderMenuItem(item, categoryIndex, itemIndex))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>

                    {/* Dla kogo + Branże row */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 mt-2 border-t border-border/50">
                      {/* Dla kogo */}
                      {(() => {
                        const category = menuCategories[4];
                        const categoryIndex = 4;
                        return (
                          <motion.div
                            key={category.title}
                            onMouseEnter={() => setHoveredCategory(categoryIndex)}
                            className="space-y-3 md:border-r md:border-border/30 md:pr-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.05 + 0.1 }}
                          >
                            <h4 
                              className={cn(
                                "text-sm font-semibold transition-all duration-300 flex items-center gap-2",
                                hoveredCategory === categoryIndex 
                                  ? "text-foreground translate-x-1" 
                                  : "text-muted-foreground"
                              )}
                              style={{ color: hoveredCategory === categoryIndex ? category.color : undefined }}
                            >
                              <motion.span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: category.color }}
                                animate={{ 
                                  scale: hoveredCategory === categoryIndex ? 1 : 0,
                                  opacity: hoveredCategory === categoryIndex ? 1 : 0
                                }}
                                transition={{ duration: 0.2 }}
                              />
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => renderMenuItem(item, categoryIndex, itemIndex))}
                            </ul>
                          </motion.div>
                        );
                      })()}

                      {/* Branże - 2 columns */}
                      {(() => {
                        const category = menuCategories[5];
                        const categoryIndex = 5;
                        const column1 = category.items.slice(0, 6);
                        const column2 = category.items.slice(6);

                        return (
                          <motion.div
                            key={category.title}
                            onMouseEnter={() => setHoveredCategory(categoryIndex)}
                            className="space-y-3 md:col-span-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.05 + 0.1 }}
                          >
                            <h4 
                              className={cn(
                                "text-sm font-semibold transition-all duration-300 flex items-center gap-2",
                                hoveredCategory === categoryIndex 
                                  ? "text-foreground translate-x-1" 
                                  : "text-muted-foreground"
                              )}
                              style={{ color: hoveredCategory === categoryIndex ? category.color : undefined }}
                            >
                              <motion.span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: category.color }}
                                animate={{ 
                                  scale: hoveredCategory === categoryIndex ? 1 : 0,
                                  opacity: hoveredCategory === categoryIndex ? 1 : 0
                                }}
                                transition={{ duration: 0.2 }}
                              />
                              {category.title}
                            </h4>
                            
                            <div className="grid grid-cols-2 gap-x-6">
                              <ul className="space-y-2">
                                {column1.map((item, itemIndex) => renderMenuItem(item, categoryIndex, itemIndex))}
                              </ul>
                              <ul className="space-y-2">
                                {column2.map((item, itemIndex) => renderMenuItem(item, categoryIndex, itemIndex + 6))}
                              </ul>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </div>

                    {/* Inne section */}
                    <div className="pt-6 mt-4 border-t border-border/30">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="flex flex-wrap gap-4"
                      >
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Inne:</span>
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <Link
                              to="/kariera"
                              onClick={onClose}
                              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-1.5 hover:translate-x-0.5"
                            >
                              <Briefcase className="w-3.5 h-3.5" />
                              Kariera
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="text-xs">
                            Dołącz do naszego zespołu - staże i praktyki
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <Link
                              to="/cennik"
                              onClick={onClose}
                              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-1.5 hover:translate-x-0.5"
                            >
                              <Calculator className="w-3.5 h-3.5" />
                              Cennik
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="text-xs">
                            Orientacyjne ceny naszych usług
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <Link
                              to="/faq"
                              onClick={onClose}
                              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-1.5 hover:translate-x-0.5"
                            >
                              <HelpCircle className="w-3.5 h-3.5" />
                              FAQ
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="text-xs">
                            Najczęściej zadawane pytania
                          </TooltipContent>
                        </Tooltip>
                      </motion.div>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div 
                      className="mt-8 pt-6 border-t border-border"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                          Nie wiesz, czego potrzebujesz?
                        </p>
                        <Link
                          to="/kontakt"
                          onClick={onClose}
                          className="text-sm font-medium text-[#75143F] hover:text-[#75143F]/80 transition-colors group flex items-center gap-1"
                        >
                          Umów bezpłatną konsultację 
                          <motion.span
                            className="inline-block"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
