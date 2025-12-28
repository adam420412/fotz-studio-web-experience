import { Link } from "react-router-dom";
import { ArrowRight, Palette, Megaphone, Globe, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TextReveal } from "@/components/TextReveal";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/FadeInView";
import { ScrollRevealText, AnimatedBulletList } from "@/components/AnimatedText";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Megaphone,
      title: t("Kampanie reklamowe dostosowane do Twoich potrzeb", "Advertising campaigns tailored to your needs"),
      description: t(
        "Jako agencja marketingowa oferujemy kompleksowy zakres usług, obejmujący tworzenie i realizację kampanii reklamowych na miarę Twoich potrzeb. Specjalizujemy się w kampaniach Meta Ads i Google Ads, zapewniając skuteczne dotarcie do Twojej grupy docelowej i maksymalny zwrot z inwestycji.",
        "As a marketing agency, we offer a comprehensive range of services, including creating and executing advertising campaigns tailored to your needs. We specialize in Meta Ads and Google Ads campaigns, ensuring effective reach to your target audience and maximum ROI."
      ),
      features: [
        t("Meta Ads", "Meta Ads"),
        t("Google Ads", "Google Ads"),
        t("Remarketing", "Remarketing"),
        t("Optymalizacja ROI", "ROI optimization"),
      ],
      href: "/uslugi",
      color: "from-orange-500/20 to-red-500/10",
      accentColor: "text-orange-400",
    },
    {
      icon: Palette,
      title: t("Reklama w social media: Facebook, Instagram, TikTok", "Social media advertising: Facebook, Instagram, TikTok"),
      description: t(
        "Skuteczna obecność w social media to klucz do budowania świadomości marki i angażowania klientów. Nasza agencja oferuje kompleksową obsługę social media, od tworzenia strategii content marketing po realizację kampanii reklamowych na Facebooku, Instagramie i TikToku.",
        "Effective social media presence is the key to building brand awareness and engaging customers. Our agency offers comprehensive social media management, from content marketing strategy to advertising campaigns on Facebook, Instagram and TikTok."
      ),
      features: [
        t("Facebook Ads", "Facebook Ads"),
        t("Instagram Ads", "Instagram Ads"),
        t("TikTok Ads", "TikTok Ads"),
        t("Content marketing", "Content marketing"),
      ],
      href: "/uslugi",
      color: "from-purple-500/20 to-pink-500/10",
      accentColor: "text-purple-400",
    },
    {
      icon: Globe,
      title: t("Google Ads i optymalizacja wyników kampanii", "Google Ads and campaign optimization"),
      description: t(
        "Google Ads to potężne narzędzie, które, właściwie wykorzystane, generuje wysoki przychód. Nasza agencja specjalizuje się w tworzeniu i optymalizacji kampanii Google Ads, zapewniając maksymalny zwrot z inwestycji. Dbamy o każdy detal, od doboru słów kluczowych po tworzenie angażujących kreacji.",
        "Google Ads is a powerful tool that, when used properly, generates high revenue. Our agency specializes in creating and optimizing Google Ads campaigns, ensuring maximum ROI. We take care of every detail, from keyword selection to creating engaging creatives."
      ),
      features: [
        t("Search Ads", "Search Ads"),
        t("Display Ads", "Display Ads"),
        t("YouTube Ads", "YouTube Ads"),
        t("Performance Max", "Performance Max"),
      ],
      href: "/uslugi",
      color: "from-blue-500/20 to-cyan-500/10",
      accentColor: "text-blue-400",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full blur-[180px] -translate-x-1/2"
          style={{ background: "hsla(336, 71%, 27%, 0.15)" }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] translate-x-1/3"
          style={{ background: "hsla(209, 69%, 19%, 0.15)" }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 px-4">
          <FadeInView animation="scale">
            <span className="inline-block text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3 md:mb-4">
              {t("Nasze usługi", "Our services")}
            </span>
          </FadeInView>
          <TextReveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
              {t("Nasze", "Our")} <span className="text-gradient-premium">{t("usługi reklamowe", "advertising services")}</span>
            </h2>
          </TextReveal>
          <FadeInView delay={0.2}>
            <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
              {t(
                "Kompleksowy zakres usług marketingowych dostosowanych do Twoich celów biznesowych.",
                "Comprehensive range of marketing services tailored to your business goals."
              )}
            </p>
          </FadeInView>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0" staggerDelay={0.15}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <ServiceCard service={service} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 overflow-hidden h-full hover-lift"
    >
      {/* Gradient Background on Hover */}
      <motion.div 
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br",
          service.color,
          isHovered && "opacity-20"
        )}
      />

      {/* Animated border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{
        boxShadow: "inset 0 0 30px hsla(336, 71%, 27%, 0.1)"
      }} />

      <div className="relative z-10">
        {/* Icon with gradient */}
        <motion.div 
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 bg-gradient-brand"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-gradient-premium transition-colors">
          {service.title}
        </h3>

        {/* Animated description with scroll reveal */}
        <div className="relative mb-4 sm:mb-6">
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "72px" }}
            className="overflow-hidden"
          >
            {isInView && (
              <ScrollRevealText 
                text={service.description}
                className="text-sm sm:text-base text-foreground/60"
                highlightWords={["Meta Ads", "Google Ads", "ROI", "Facebook", "Instagram", "TikTok"]}
                highlightClassName={service.accentColor}
              />
            )}
          </motion.div>
          
          {/* Gradient fade when collapsed */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent" />
          )}
        </div>

        {/* Expand/Collapse button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-primary mb-4 flex items-center gap-1 hover:gap-2 transition-all"
          whileHover={{ x: 3 }}
        >
          {isExpanded ? "Zwiń opis" : "Rozwiń opis"}
          <motion.span
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-3 h-3" />
          </motion.span>
        </motion.button>

        {/* Features with animated appearance */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {service.features.map((feature: string, i: number) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground/70 flex items-center gap-1"
            >
              <CheckCircle2 className="w-3 h-3 text-primary" />
              {feature}
            </motion.span>
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
