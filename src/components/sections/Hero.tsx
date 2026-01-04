import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MagneticButton } from "@/components/MagneticButton";
import { useRef } from "react";

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  const stats = [
    { value: 1000000, suffix: "+", label: t("Wyświetleń treści miesięcznie", "Monthly content views") },
    { value: 160, suffix: "+", label: t("Opinii na Google", "Google reviews") },
    { value: 12, suffix: "+", label: t("Lat doświadczenia", "Years of experience") },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - static for performance */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Static Background Elements - no animations for performance */}
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

      {/* Content - simplified animations */}
      <div className="relative z-20 container-wide px-6 md:px-12 text-center pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-foreground font-medium">
              {t("Studio marketingu wzrostu • Poznań", "Growth Marketing Studio • Poznań")}
            </span>
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>

          {/* Heading - simplified */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.15] mb-4 md:mb-6"
          >
            {t("Agencja Marketingowa,", "Marketing Agency")}
            <span className="block mt-1 sm:mt-2 text-gradient-premium">
              {t("która projektuje realny wzrost firm", "that designs real business growth")}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 md:mb-10 px-2"
          >
            {t(
              "Wybierz agencję marketingową, która rozumie Twoje cele biznesowe. Z nami zyskasz partnera, który zadba o Twój marketing internetowy, zwiększy przychód i zbuduje silną świadomość marki.",
              "Choose a marketing agency that understands your business goals. With us, you gain a partner who will take care of your internet marketing, increase revenue, and build strong brand awareness."
            )}
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          >
            <MagneticButton strength={0.2}>
              <Button variant="hero" size="xl" asChild className="group w-full sm:w-auto min-w-[200px] sm:min-w-[220px] text-sm sm:text-base relative overflow-hidden" data-cursor-text="Porozmawiajmy">
                <Link to="/kontakt">
                  <span className="relative z-10">{t("Bezpłatna konsultacja", "Free consultation")}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-2 relative z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Button variant="heroOutline" size="xl" asChild className="group w-full sm:w-auto min-w-[200px] sm:min-w-[220px] text-sm sm:text-base" data-cursor-text="Zobacz">
                <Link to="/realizacje">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t("Zobacz realizacje", "See our work")}
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-border/30"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  index={index}
                  duration={2500}
                  delay={index * 200}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
