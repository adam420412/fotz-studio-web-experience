import { Link } from "react-router-dom";
import { ArrowRight, Palette, Megaphone, Globe, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Megaphone,
      title: t("Kampanie reklamowe dostosowane do Twoich potrzeb", "Advertising campaigns tailored to your needs"),
      description: t(
        "Jako agencja marketingowa oferujemy kompleksowy zakres usług, obejmujący tworzenie i realizację kampanii reklamowych na miarę Twoich potrzeb. Specjalizujemy się w kampaniach Meta Ads i Google Ads, zapewniając skuteczne dotarcie do Twojej grupy docelowej i maksymalny zwrot z inwestycji.",
        "As a marketing agency, we offer a comprehensive range of services, including creating and executing advertising campaigns tailored to your needs."
      ),
      features: ["Meta Ads", "Google Ads", "Remarketing", t("Optymalizacja ROI", "ROI optimization")],
      href: "/uslugi",
      color: "from-orange-500/20 to-red-500/10",
    },
    {
      icon: Palette,
      title: t("Reklama w social media: Facebook, Instagram, TikTok", "Social media advertising: Facebook, Instagram, TikTok"),
      description: t(
        "Skuteczna obecność w social media to klucz do budowania świadomości marki i angażowania klientów. Nasza agencja oferuje kompleksową obsługę social media, od tworzenia strategii content marketing po realizację kampanii reklamowych na Facebooku, Instagramie i TikToku.",
        "Effective social media presence is the key to building brand awareness and engaging customers."
      ),
      features: ["Facebook Ads", "Instagram Ads", "TikTok Ads", "Content marketing"],
      href: "/uslugi",
      color: "from-purple-500/20 to-pink-500/10",
    },
    {
      icon: Globe,
      title: t("Google Ads i optymalizacja wyników kampanii", "Google Ads and campaign optimization"),
      description: t(
        "Google Ads to potężne narzędzie, które, właściwie wykorzystane, generuje wysoki przychód. Nasza agencja specjalizuje się w tworzeniu i optymalizacji kampanii Google Ads, zapewniając maksymalny zwrot z inwestycji. Dbamy o każdy detal, od doboru słów kluczowych po tworzenie angażujących kreacji.",
        "Google Ads is a powerful tool that, when used properly, generates high revenue."
      ),
      features: ["Search Ads", "Display Ads", "YouTube Ads", "Performance Max"],
      href: "/uslugi",
      color: "from-blue-500/20 to-cyan-500/10",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full blur-[180px] -translate-x-1/2" style={{ background: "hsla(336, 71%, 27%, 0.1)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] translate-x-1/3" style={{ background: "hsla(209, 69%, 19%, 0.1)" }} />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 px-4">
          <span className="inline-block text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3 md:mb-4">
            {t("Nasze usługi", "Our services")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
            {t("Nasze", "Our")} <span className="text-gradient-premium">{t("usługi reklamowe", "advertising services")}</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
            {t(
              "Kompleksowy zakres usług marketingowych dostosowanych do Twoich celów biznesowych.",
              "Comprehensive range of marketing services tailored to your business goals."
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative block p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 overflow-hidden h-full">
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 bg-gradient-brand group-hover:scale-110 transition-transform duration-300">
          <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <div className="relative mb-4 sm:mb-6">
          <div className={cn("overflow-hidden transition-all duration-300", isExpanded ? "max-h-[500px]" : "max-h-[72px]")}>
            <p className="text-sm sm:text-base text-foreground/60">{service.description}</p>
          </div>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent" />
          )}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-primary mb-4 flex items-center gap-1 hover:gap-2 transition-all"
        >
          {isExpanded ? "Zwiń opis" : "Rozwiń opis"}
          <ArrowRight className={cn("w-3 h-3 transition-transform", isExpanded && "rotate-90")} />
        </button>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {service.features.map((feature: string) => (
            <span
              key={feature}
              className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground/70 flex items-center gap-1"
            >
              <CheckCircle2 className="w-3 h-3 text-primary" />
              {feature}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          to={service.href}
          className="flex items-center gap-2 text-primary font-medium text-sm sm:text-base group/link"
        >
          <span>Dowiedz się więcej</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
