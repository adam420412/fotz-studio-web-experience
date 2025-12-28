import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";

export function FinalCTA() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section ref={sectionRef} className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[180px] bg-primary/[0.12]"
        />
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "hsl(var(--secondary) / 0.08)" }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          style={{ scale: contentScale }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
            className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8 relative"
          >
            <Sparkles className="w-10 h-10 text-primary" />
            <motion.div 
              className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            {t("Skontaktuj się", "Contact")}{" "}
            <span className="text-gradient-premium relative">
              {t("z nami", "us")}
              <motion.span 
                className="absolute -inset-2 bg-primary/20 rounded-lg blur-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            {t(
              "Nie czekaj, aż konkurencja Cię wyprzedzi. Skontaktuj się z naszą agencją już dziś i umów się na bezpłatną konsultację. Porozmawiajmy o Twoich celach biznesowych i o tym, jak możemy Ci pomóc osiągnąć sukces.",
              "Don't wait for the competition to get ahead of you. Contact our agency today and schedule a free consultation. Let's talk about your business goals and how we can help you succeed."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="premium" size="xl" asChild className="min-w-[250px] group relative overflow-hidden">
                <Link to="/kontakt">
                  <span className="relative z-10">{t("Umów bezpłatną konsultację", "Book a free consultation")}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="heroOutline" size="xl" asChild className="min-w-[200px] group">
                <a href="tel:+48790814814">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  {t("Zadzwoń teraz", "Call now")}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/60"
          >
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>Plac Wolności 16, Poznań</span>
            </motion.div>
            <motion.span 
              className="px-4 py-2 rounded-full bg-card border border-border/50"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              {t("Preferujesz online? Też możemy.", "Prefer online? We can do that too.")}
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
