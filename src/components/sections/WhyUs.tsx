import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Target, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollRevealText, FloatingWords, AnimatedBulletList } from "@/components/AnimatedText";

export function WhyUs() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const items = [
    {
      icon: Users,
      title: t("Wartościowa współpraca z klientem", "Valuable client collaboration"),
      description: t(
        "Współpraca z agencją marketingową to klucz do efektywnych kampanii reklamowych. Agencja staje się partnerem, który rozumie potrzeby klienta i dostosowuje strategie marketingowe do specyfiki jego biznesu. Indywidualne podejście do klienta to fundament sukcesu, pozwalający na tworzenie kampanii, które realnie wpływają na przychód i konwersję.",
        "Working with a marketing agency is the key to effective advertising campaigns. The agency becomes a partner who understands the client's needs and adapts marketing strategies to the specifics of their business. An individual approach to the client is the foundation of success, allowing the creation of campaigns that really impact revenue and conversion."
      ),
      bullets: [
        t("Indywidualne podejście do każdego projektu", "Individual approach to each project"),
        t("Transparentna komunikacja i raportowanie", "Transparent communication and reporting"),
        t("Długoterminowe partnerstwo biznesowe", "Long-term business partnership"),
      ],
      color: "from-orange-500/20 to-amber-500/10",
      accentColor: "text-orange-400",
    },
    {
      icon: Target,
      title: t("Nasze podejście do strategii marketingowej", "Our approach to marketing strategy"),
      description: t(
        "Nasze podejście do strategii marketingowej opiera się na głębokiej analityce i zrozumieniu potrzeb klienta. Przeprowadzamy audyt oraz analizę danych z analityki witryny i ruchu na stronie. Wykorzystujemy AI i automatyzację, aby zoptymalizować kampanie Google Ads i Social Media, maksymalizując zwrot z inwestycji.",
        "Our approach to marketing strategy is based on deep analytics and understanding of client needs. We conduct audits and analyze website analytics and traffic data. We use AI and automation to optimize Google Ads and Social Media campaigns, maximizing ROI."
      ),
      bullets: [
        t("Dogłębna analityka i audyty", "In-depth analytics and audits"),
        t("AI i automatyzacja procesów", "AI and process automation"),
        t("Optymalizacja kampanii w czasie rzeczywistym", "Real-time campaign optimization"),
      ],
      color: "from-purple-500/20 to-pink-500/10",
      accentColor: "text-purple-400",
    },
    {
      icon: TrendingUp,
      title: t("Jak agencja wpływa na przychody biznesowe", "How agency impacts business revenue"),
      description: t(
        "Agencja marketingowa ma bezpośredni wpływ na przychody biznesowe poprzez skuteczne kampanie reklamowe i content marketing. Kreacje copywriterów angażują odbiorców, a pozycjonowanie stron zwiększa widoczność w wyszukiwarce. Optymalizacja UX i contentu sprzyja konwersji, przekształcając ruch na stronie w realnych klientów e-commerce.",
        "A marketing agency has a direct impact on business revenue through effective advertising campaigns and content marketing. Copywriter creations engage audiences, and SEO increases visibility in search engines. UX and content optimization promotes conversion, transforming website traffic into real e-commerce customers."
      ),
      bullets: [
        t("Wzrost konwersji i sprzedaży", "Increased conversions and sales"),
        t("Większa widoczność w wyszukiwarkach", "Greater visibility in search engines"),
        t("Angażujący content marketing", "Engaging content marketing"),
      ],
      color: "from-blue-500/20 to-cyan-500/10",
      accentColor: "text-blue-400",
    },
  ];

  const keyWords = [
    { text: t("Strategia", "Strategy"), color: "text-primary" },
    { text: t("Analityka", "Analytics"), color: "text-purple-400" },
    { text: t("Kampanie", "Campaigns"), color: "text-orange-400" },
    { text: t("Wzrost", "Growth"), color: "text-green-400" },
    { text: t("ROI", "ROI"), color: "text-blue-400" },
    { text: t("Automatyzacja", "Automation"), color: "text-pink-400" },
    { text: t("Content", "Content"), color: "text-amber-400" },
    { text: t("Konwersja", "Conversion"), color: "text-cyan-400" },
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] bg-primary/[0.08]"
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
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
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t("Dlaczego my", "Why us")}
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            {t("Dlaczego wybór", "Why choosing a")}{" "}
            <span className="text-gradient-premium relative">
              {t("agencji marketingowej jest kluczowy?", "marketing agency is crucial?")}
              <motion.span 
                className="absolute -inset-2 bg-primary/10 rounded-lg blur-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h2>
        </motion.div>

        {/* Floating Keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <FloatingWords words={keyWords} />
        </motion.div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <WhyUsCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsCard({ item, index }: { item: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Background gradient blob */}
      <motion.div 
        className={cn(
          "absolute -inset-4 rounded-3xl blur-2xl opacity-0 transition-opacity duration-500",
          `bg-gradient-to-br ${item.color}`,
          isHovered && "opacity-50"
        )}
      />

      <div className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
        {/* Gradient overlay on hover */}
        <motion.div 
          className={cn(
            "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500",
            item.color,
            isHovered && "opacity-10"
          )}
        />

        {/* Icon */}
        <motion.div 
          className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-brand"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <item.icon className="w-7 h-7 text-primary-foreground" />
          <motion.div 
            className="absolute -inset-2 bg-primary/20 rounded-xl blur-xl"
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.8 : 0.3 
            }}
          />
        </motion.div>

        <motion.h3 
          className="text-xl font-heading font-bold mb-4 transition-colors duration-300"
          animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
        >
          {item.title}
        </motion.h3>

        {/* Animated description */}
        <div className="relative">
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "80px" }}
            className="overflow-hidden"
          >
            <ScrollRevealText 
              text={item.description}
              className="text-foreground/70 leading-relaxed text-sm"
              highlightWords={["klucz", "partner", "sukces", "ROI", "wzrost", "konwersja"]}
              highlightClassName={item.accentColor}
            />
          </motion.div>
          
          {/* Gradient fade */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
          )}
        </div>

        {/* Expand button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-sm text-primary flex items-center gap-1 hover:gap-2 transition-all"
          whileHover={{ x: 3 }}
        >
          {isExpanded ? t("Zwiń", "Collapse") : t("Rozwiń", "Expand")}
          <motion.span
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </motion.button>

        {/* Animated bullet points */}
        <motion.div
          initial={false}
          animate={{ 
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-border/30 mt-4">
            <AnimatedBulletList 
              items={item.bullets}
              bulletColor={item.accentColor.replace("text-", "bg-")}
            />
          </div>
        </motion.div>

        {/* Corner decoration */}
        <motion.div 
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center"
          animate={{ 
            rotate: isHovered ? 180 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-primary/50" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function t(pl: string, en: string) {
  return pl;
}
