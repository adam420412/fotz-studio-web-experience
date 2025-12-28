import { Target, Rocket, TrendingUp, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Process() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  const steps = [
    {
      number: "01",
      icon: Target,
      title: t("Analiza i planowanie strategii", "Analysis and strategy planning"),
      description: t(
        "Proces współpracy z naszą agencją marketingową rozpoczyna się od dogłębnej analizy Twojej firmy, konkurencji i rynku. Przeprowadzamy szczegółowy audyt Twojej obecnej strategii marketingowej oraz analityki witryny i ruchu na stronie.",
        "The collaboration process with our marketing agency begins with an in-depth analysis of your company, competition and market. We conduct a detailed audit of your current marketing strategy and website analytics and traffic."
      ),
      details: [
        t("Audyt strategii", "Strategy audit"),
        t("Analiza konkurencji", "Competition analysis"),
        t("Cele biznesowe", "Business goals"),
      ],
      color: "from-orange-500/20 to-amber-500/10",
    },
    {
      number: "02",
      icon: Rocket,
      title: t("Wdrożenie i zarządzanie kampaniami", "Implementation and campaign management"),
      description: t(
        "Po opracowaniu strategii przechodzimy do jej wdrożenia i zarządzania kampaniami reklamowymi. Wykorzystujemy najnowsze narzędzia i technologie, w tym AI i automatyzację, aby zoptymalizować kampanie Google Ads i social media.",
        "After developing the strategy, we move to its implementation and advertising campaign management. We use the latest tools and technologies, including AI and automation, to optimize Google Ads and social media campaigns."
      ),
      details: [
        t("AI i automatyzacja", "AI and automation"),
        t("Google Ads", "Google Ads"),
        t("Social Media", "Social Media"),
      ],
      color: "from-purple-500/20 to-pink-500/10",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: t("Monitorowanie i analityka wyników", "Monitoring and analytics"),
      description: t(
        "Kluczem do sukcesu każdej kampanii marketingowej jest ciągłe monitorowanie i analiza wyników. Regularnie raportujemy postępy i wyniki kampanii, wprowadzając niezbędne optymalizacje, aby zapewnić maksymalny przychód.",
        "The key to success for any marketing campaign is continuous monitoring and analysis of results. We regularly report progress and campaign results, making necessary optimizations to ensure maximum revenue."
      ),
      details: [
        t("Raportowanie", "Reporting"),
        t("Optymalizacja", "Optimization"),
        t("Wzrost ROI", "ROI growth"),
      ],
      color: "from-blue-500/20 to-cyan-500/10",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[200px]"
          style={{ background: "hsl(var(--primary) / 0.05)" }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t("Jak pracujemy", "How we work")}
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            {t("Proces", "Collaboration")}{" "}
            <span className="text-gradient-premium relative">
              {t("współpracy z naszą agencją", "process with our agency")}
              <motion.span 
                className="absolute -inset-2 bg-primary/10 rounded-lg blur-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t(
              "Transparentny proces współpracy oparty na analizie, wdrożeniu i ciągłej optymalizacji.",
              "Transparent collaboration process based on analysis, implementation and continuous optimization."
            )}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated Connection Line - Desktop */}
          <div className="hidden md:block absolute top-32 left-[16%] right-[16%] h-1 rounded-full overflow-hidden bg-border/30">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
              style={{ width: lineProgress }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <ProcessCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, index }: { step: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-center group"
    >
      {/* Background gradient blob */}
      <motion.div 
        className={cn(
          "absolute -inset-4 rounded-3xl blur-2xl opacity-0 transition-opacity duration-500",
          `bg-gradient-to-br ${step.color}`,
          isHovered && "opacity-40"
        )}
      />

      {/* Number & Icon */}
      <div className="relative inline-flex flex-col items-center mb-8">
        <motion.span 
          className="text-7xl md:text-8xl font-heading font-bold text-muted/30"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.5 : 0.3
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {step.number}
        </motion.span>
        <motion.div
          animate={{ 
            scale: isHovered ? 1.15 : 1,
            rotate: isHovered ? 5 : 0,
            y: isHovered ? -5 : 0
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute bottom-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg"
          style={{ boxShadow: isHovered ? "0 0 40px hsl(var(--primary) / 0.4)" : "0 0 30px hsl(var(--primary) / 0.2)" }}
        >
          <step.icon className="w-7 h-7 text-primary-foreground" />
        </motion.div>
        
        {/* Glow effect */}
        <motion.div 
          className="absolute bottom-0 w-16 h-16 rounded-2xl bg-primary/30 blur-xl"
          animate={{ 
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.8 : 0.3 
          }}
        />
      </div>

      {/* Content */}
      <motion.h3 
        className="text-xl md:text-2xl font-heading font-bold mb-4 transition-colors duration-300"
        animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
      >
        {step.title}
      </motion.h3>
      <p className="text-foreground/60 mb-6">{step.description}</p>

      {/* Details */}
      <div className="flex flex-wrap justify-center gap-2">
        {step.details.map((detail: string, i: number) => (
          <motion.span
            key={detail}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 cursor-default"
          >
            {detail}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
