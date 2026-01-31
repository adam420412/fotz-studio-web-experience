import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import {
  Search, Target, Megaphone, Globe, Camera, Palette,
  TrendingUp, Monitor, ShoppingCart, Play, Share2, 
  MapPin, FileText, Users
} from "lucide-react";

interface RelatedService {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

// Mapowanie usług z ikonami i kolorami
const serviceDatabase: Record<string, RelatedService> = {
  "google-ads": {
    title: "Google Ads",
    href: "/google-ads",
    description: "Kampanie w wyszukiwarce Google",
    icon: Search,
    color: "from-green-500/20 to-yellow-500/20"
  },
  "facebook-ads": {
    title: "Facebook Ads",
    href: "/facebook-ads",
    description: "Reklamy na największej platformie",
    icon: Megaphone,
    color: "from-blue-500/20 to-purple-500/20"
  },
  "instagram-ads": {
    title: "Instagram Ads",
    href: "/instagram-ads",
    description: "Reklamy wizualne i Reels",
    icon: Camera,
    color: "from-pink-500/20 to-orange-500/20"
  },
  "tiktok-ads": {
    title: "TikTok Ads",
    href: "/tiktok-ads",
    description: "Dynamiczne reklamy wideo",
    icon: Play,
    color: "from-pink-500/20 to-cyan-500/20"
  },
  "linkedin-ads": {
    title: "LinkedIn Ads",
    href: "/linkedin-ads",
    description: "Marketing B2B",
    icon: Users,
    color: "from-blue-600/20 to-blue-400/20"
  },
  "youtube-ads": {
    title: "YouTube Ads",
    href: "/youtube-ads",
    description: "Reklamy wideo przed filmami",
    icon: Play,
    color: "from-red-500/20 to-orange-500/20"
  },
  "meta-ads": {
    title: "Meta Ads",
    href: "/facebook-instagram-ads",
    description: "Facebook + Instagram razem",
    icon: Share2,
    color: "from-blue-500/20 to-pink-500/20"
  },
  "pozycjonowanie": {
    title: "Pozycjonowanie SEO",
    href: "/pozycjonowanie",
    description: "Organiczny wzrost widoczności",
    icon: TrendingUp,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  "strony-internetowe": {
    title: "Strony internetowe",
    href: "/strony-internetowe",
    description: "Profesjonalne witryny www",
    icon: Globe,
    color: "from-violet-500/20 to-indigo-500/20"
  },
  "social-media": {
    title: "Social Media",
    href: "/social-media-poznan",
    description: "Prowadzenie profili",
    icon: Share2,
    color: "from-cyan-500/20 to-blue-500/20"
  },
  "identyfikacja-wizualna": {
    title: "Identyfikacja wizualna",
    href: "/identyfikacja-wizualna",
    description: "Branding i logo",
    icon: Palette,
    color: "from-amber-500/20 to-orange-500/20"
  },
  "content-marketing": {
    title: "Content Marketing",
    href: "/content-marketing",
    description: "Strategia treści",
    icon: FileText,
    color: "from-purple-500/20 to-pink-500/20"
  },
  "ecommerce": {
    title: "E-commerce",
    href: "/ecommerce-tworzenie-sklepu",
    description: "Sklepy internetowe",
    icon: ShoppingCart,
    color: "from-emerald-500/20 to-lime-500/20"
  },
  "spoty-reklamowe": {
    title: "Spoty reklamowe",
    href: "/spoty-reklamowe",
    description: "Produkcja filmów reklamowych",
    icon: Play,
    color: "from-red-500/20 to-pink-500/20"
  },
  "wizualizacje-3d": {
    title: "Wizualizacje 3D",
    href: "/wizualizacje-3d",
    description: "Renderingi i konfiguratory",
    icon: Monitor,
    color: "from-cyan-500/20 to-purple-500/20"
  },
  "fotograf": {
    title: "Fotografia",
    href: "/fotograf-poznan",
    description: "Profesjonalne sesje zdjęciowe",
    icon: Camera,
    color: "from-amber-500/20 to-yellow-500/20"
  },
  "kompleksowa-obsluga": {
    title: "Kompleksowa obsługa",
    href: "/kompleksowa-obsluga-marketingowa",
    description: "Pełna obsługa marketingowa",
    icon: Target,
    color: "from-primary/20 to-accent/20"
  },
  "google-maps": {
    title: "Google Maps",
    href: "/pozycjonowanie-google-maps",
    description: "Lokalne SEO i wizytówka",
    icon: MapPin,
    color: "from-green-500/20 to-blue-500/20"
  },
  "drone": {
    title: "Fotografia z drona",
    href: "/fotografia-z-drona",
    description: "Ujęcia z lotu ptaka",
    icon: Camera,
    color: "from-sky-500/20 to-blue-500/20"
  },
  "kampanie-reklamowe": {
    title: "Kampanie reklamowe",
    href: "/kampanie-reklamowe",
    description: "Wszystkie platformy reklamowe",
    icon: Megaphone,
    color: "from-orange-500/20 to-red-500/20"
  },
};

// Predefiniowane grupy powiązanych usług
const relatedServicesMap: Record<string, string[]> = {
  "google-ads": ["facebook-ads", "pozycjonowanie", "strony-internetowe", "youtube-ads"],
  "facebook-ads": ["instagram-ads", "tiktok-ads", "google-ads", "content-marketing"],
  "instagram-ads": ["facebook-ads", "tiktok-ads", "spoty-reklamowe", "fotograf"],
  "tiktok-ads": ["instagram-ads", "youtube-ads", "spoty-reklamowe", "social-media"],
  "linkedin-ads": ["google-ads", "content-marketing", "strony-internetowe", "kompleksowa-obsluga"],
  "youtube-ads": ["tiktok-ads", "spoty-reklamowe", "google-ads", "facebook-ads"],
  "pozycjonowanie": ["google-ads", "strony-internetowe", "content-marketing", "google-maps"],
  "strony-internetowe": ["pozycjonowanie", "identyfikacja-wizualna", "ecommerce", "content-marketing"],
  "social-media": ["facebook-ads", "instagram-ads", "content-marketing", "fotograf"],
  "identyfikacja-wizualna": ["strony-internetowe", "social-media", "fotograf", "spoty-reklamowe"],
  "content-marketing": ["pozycjonowanie", "social-media", "strony-internetowe", "kompleksowa-obsluga"],
  "ecommerce": ["google-ads", "facebook-ads", "pozycjonowanie", "strony-internetowe"],
  "spoty-reklamowe": ["youtube-ads", "tiktok-ads", "fotograf", "drone"],
  "wizualizacje-3d": ["strony-internetowe", "ecommerce", "identyfikacja-wizualna", "spoty-reklamowe"],
  "fotograf": ["spoty-reklamowe", "identyfikacja-wizualna", "social-media", "drone"],
  "kompleksowa-obsluga": ["google-ads", "facebook-ads", "social-media", "strony-internetowe"],
  "google-maps": ["pozycjonowanie", "strony-internetowe", "google-ads", "social-media"],
  "drone": ["fotograf", "spoty-reklamowe", "wizualizacje-3d", "social-media"],
  "meta-ads": ["google-ads", "tiktok-ads", "content-marketing", "ecommerce"],
  "kampanie-reklamowe": ["google-ads", "facebook-ads", "tiktok-ads", "linkedin-ads"],
};

interface RelatedServicesProps {
  currentService: string;
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
}

export const RelatedServices = ({
  currentService,
  title = "Powiązane usługi",
  subtitle = "Poznaj inne usługi, które mogą wspierać Twój biznes",
  limit = 4,
  className = ""
}: RelatedServicesProps) => {
  const relatedKeys = relatedServicesMap[currentService] || [];
  const services = relatedKeys
    .slice(0, limit)
    .map(key => serviceDatabase[key])
    .filter(Boolean);

  if (services.length === 0) return null;

  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.href}>
              <Link
                to={service.href}
                className="group block bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all h-full"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Dowiedz się więcej
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Eksport dla inline linków w treści
export const InlineServiceLink = ({ 
  serviceKey, 
  children 
}: { 
  serviceKey: string; 
  children?: React.ReactNode;
}) => {
  const service = serviceDatabase[serviceKey];
  if (!service) return null;
  
  return (
    <Link 
      to={service.href} 
      className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
    >
      {children || service.title}
      <ArrowRight className="w-3 h-3" />
    </Link>
  );
};

// Eksport dla małych kart w tekście
export const ServiceMiniCard = ({ serviceKey }: { serviceKey: string }) => {
  const service = serviceDatabase[serviceKey];
  if (!service) return null;
  
  return (
    <Link
      to={service.href}
      className="inline-flex items-center gap-2 px-3 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors text-sm"
    >
      <service.icon className="w-4 h-4 text-primary" />
      <span className="font-medium">{service.title}</span>
    </Link>
  );
};

export default RelatedServices;
