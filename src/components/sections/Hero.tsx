import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const [countersVisible, setCountersVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  const stats = [
    { value: 1000000, suffix: "+", label: t("Wyświetleń treści miesięcznie", "Monthly content views"), display: "1M" },
    { value: 160, suffix: "+", label: t("Opinii na Google", "Google reviews"), display: "160" },
    { value: 12, suffix: "+", label: t("Lat doświadczenia", "Years of experience"), display: "12" },
  ];

  // Simple counter animation without framer-motion
  useEffect(() => {
    const timer = setTimeout(() => setCountersVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!countersVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setCounts([
        Math.floor(eased * 1000000),
        Math.floor(eased * 160),
        Math.floor(eased * 12),
      ]);
      
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, [countersVisible]);

  const formatNumber = (num: number, index: number) => {
    if (index === 0) return num >= 1000000 ? "1M" : `${Math.floor(num / 1000)}K`;
    return num.toString();
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background Image - Critical LCP element with WebP */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        <picture>
          <source srcSet="/hero-poster.webp" type="image/webp" />
          <img
            src="/hero-poster.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
      </div>

      {/* Static Background Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-50"
          style={{ background: "hsl(var(--primary) / 0.15)" }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
          style={{ background: "hsl(var(--secondary) / 0.15)" }}
        />
      </div>

      {/* Content - CSS animations only, no framer-motion */}
      <div className="relative z-20 container-wide px-6 md:px-12 text-center pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-foreground font-medium">
              {t("Studio marketingu wzrostu • Poznań", "Growth Marketing Studio • Poznań")}
            </span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.15] mb-4 md:mb-6">
            {t("Agencja Marketingowa,", "Marketing Agency")}
            <span className="block mt-1 sm:mt-2 text-gradient-premium">
              {t("która projektuje realny wzrost firm", "that designs real business growth")}
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up animation-delay-200 text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 md:mb-10 px-2">
            {t(
              "Wybierz agencję marketingową, która rozumie Twoje cele biznesowe. Z nami zyskasz partnera, który zadba o Twój marketing internetowy, zwiększy przychód i zbuduje silną świadomość marki.",
              "Choose a marketing agency that understands your business goals. With us, you gain a partner who will take care of your internet marketing, increase revenue, and build strong brand awareness."
            )}
          </p>

          {/* CTA Buttons - no MagneticButton overhead */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button variant="hero" size="xl" asChild className="group w-full sm:w-auto min-w-[200px] sm:min-w-[220px] text-sm sm:text-base">
              <Link to="/kontakt">
                <span>{t("Bezpłatna konsultacja", "Free consultation")}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="group w-full sm:w-auto min-w-[200px] sm:min-w-[220px] text-sm sm:text-base">
              <Link to="/realizacje">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                {t("Zobacz realizacje", "See our work")}
              </Link>
            </Button>
          </div>

          {/* Stats - native JS counter */}
          <div className="animate-fade-in-up animation-delay-500 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-border/30">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient-premium mb-2">
                  {formatNumber(counts[index], index)}{stat.suffix}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - CSS only */}
      <div className="animate-fade-in animation-delay-700 absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}
