import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TextRevealByWord } from "@/components/TextReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { useRef } from "react";

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const stats = [
    { value: 1000000, suffix: "+", label: t("Wyświetleń treści miesięcznie", "Monthly content views") },
    { value: 160, suffix: "+", label: t("Opinii na Google", "Google reviews") },
    { value: 12, suffix: "+", label: t("Lat doświadczenia", "Years of experience") },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="/hero-video-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: "hsla(336, 71%, 27%, 0.3)" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "hsla(209, 69%, 19%, 0.3)" }}
        />
      </div>

      {/* Content with Parallax */}
      <motion.div 
        className="relative z-20 container-wide px-6 md:px-12 text-center pt-24"
        style={{ y, opacity }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-brand"></span>
            </span>
            <span className="text-sm text-foreground font-medium">
              {t("Studio marketingu wzrostu • Poznań", "Growth Marketing Studio • Poznań")}
            </span>
          </motion.div>

          {/* Heading with Text Reveal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6">
            <TextRevealByWord
              text={t("Agencja Marketingowa,", "Marketing Agency")}
              className="justify-center"
              delay={0.2}
            />
            <TextRevealByWord
              text={t("która projektuje realny wzrost firm", "that designs real business growth")}
              className="justify-center text-gradient-premium"
              wordClassName="text-gradient-premium"
              delay={0.5}
            />
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton strength={0.2}>
              <Button variant="hero" size="xl" asChild className="group min-w-[220px]" data-cursor-text="Porozmawiajmy">
                <Link to="/kontakt">
                  {t("Bezpłatna konsultacja", "Free consultation")}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Button variant="heroOutline" size="xl" asChild className="group min-w-[220px]" data-cursor-text="Zobacz">
                <Link to="/realizacje">
                  <Play className="w-5 h-5" />
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
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/30"
          >
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
                duration={2500}
                delay={index * 200}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-foreground/50 uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
