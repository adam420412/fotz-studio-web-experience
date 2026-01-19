import { Link } from "react-router-dom";
import { ArrowRight, Play, TrendingUp, Eye, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/OptimizedImage";

// Import portfolio images
import eneaStadionImg from "@/assets/portfolio/enea-stadion.png";
import fpsCegielskiImg from "@/assets/portfolio/fps-cegielski.png";
import rppgImg from "@/assets/portfolio/rppg.png";

const caseStudies = [
  {
    id: "enea-stadion",
    title: "Enea Stadion Poznań",
    category: "Social Media & Events",
    description:
      "Kompleksowa obsługa marketingowa największego kompleksu sportowego w Polsce. Strona www, Instagram, produkcja video.",
    image: eneaStadionImg,
    video: true,
    stats: [
      { icon: TrendingUp, label: "Zaangażowanie", value: "+340%" },
      { icon: Eye, label: "Wyświetlenia/mies.", value: "2M+" },
    ],
    featured: true,
    hasCase: true,
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    id: "fps-cegielski",
    title: "FPS Poznań (Cegielski)",
    category: "Strony www",
    description:
      "Nowoczesna strona internetowa dla historycznej fabryki pojazdów szynowych z Poznania.",
    image: fpsCegielskiImg,
    video: false,
    featured: false,
    hasCase: true,
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    id: "rppg",
    title: "RPPG Group",
    category: "Branding & Strategia",
    description:
      "Kompleksowy rebranding i nowa identyfikacja wizualna dla Rady Polskich Przedsiębiorców Globalnych.",
    image: rppgImg,
    video: false,
    featured: false,
    hasCase: true,
    color: "from-blue-500/20 to-cyan-500/10",
  },
];

export function CaseStudies() {
  const featuredCase = caseStudies.find((c) => c.featured);
  const otherCases = caseStudies.filter((c) => !c.featured);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={sectionRef} className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-[180px] bg-primary/[0.08]"
        />
        <motion.div 
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] bg-secondary/[0.06]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 12, repeat: Infinity }}
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

        {/* Removed floating particles for performance */}
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Dowody skuteczności
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Studia przypadków{" "}
              <span className="text-gradient-premium relative">
                i sukcesy klientów
                <motion.span 
                  className="absolute -inset-2 bg-primary/10 rounded-lg blur-2xl -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="lg" asChild className="group">
                <Link to="/realizacje">
                  Wszystkie realizacje
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Featured Case Study */}
        {featuredCase && <FeaturedCaseCard caseStudy={featuredCase} />}

        {/* Other Case Studies */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherCases.map((caseStudy, index) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCaseCard({ caseStudy }: { caseStudy: typeof caseStudies[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative mb-8"
    >
      {/* Background gradient blob */}
      <motion.div 
        className={cn(
          "absolute -inset-4 rounded-[40px] blur-3xl opacity-0 transition-opacity duration-700",
          `bg-gradient-to-br ${caseStudy.color}`,
          isHovered && "opacity-50"
        )}
      />

      <Link
        to={`/realizacje/${caseStudy.id}`}
        className="group block relative"
      >
        <div className="relative rounded-3xl overflow-hidden bg-muted border border-border/50 hover:border-primary/30 transition-all duration-500">
          {/* Glowing border on hover */}
          <motion.div 
            className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />

          <div className="grid lg:grid-cols-2 relative">
            {/* Image */}
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[500px] overflow-hidden">
              <OptimizedImage
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/95 hidden lg:block" />
              
              {/* Play Button */}
              {caseStudy.video && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isHovered ? 0.8 : 1 }}
                >
                  <motion.div
                    animate={{ 
                      scale: isHovered ? 1.1 : 1,
                      boxShadow: isHovered 
                        ? "0 0 60px hsl(var(--primary) / 0.6)" 
                        : "0 0 40px hsl(var(--primary) / 0.4)"
                    }}
                    className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <motion.span 
                  className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                >
                  Główna realizacja
                </motion.span>
                <span className="text-foreground/60 text-sm">
                  {caseStudy.category}
                </span>
              </div>
              
              <motion.h3 
                className="text-2xl md:text-4xl font-heading font-bold mb-4 transition-colors duration-300"
                animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
              >
                {caseStudy.title}
              </motion.h3>
              <p className="text-foreground/60 mb-8 text-lg">
                {caseStudy.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {caseStudy.stats?.map((stat, index) => (
                  <motion.div 
                    key={stat.label} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex-1 min-w-[140px] text-center p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-all duration-300"
                  >
                    <motion.div
                      animate={{ 
                        rotate: isHovered ? [0, 5, -5, 0] : 0
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    </motion.div>
                    <div className="text-2xl font-heading font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs text-foreground/50 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="flex items-center gap-2 text-primary font-medium"
                animate={{ x: isHovered ? 5 : 0 }}
              >
                <span>Zobacz pełne case study</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function CaseCard({ caseStudy, index }: { caseStudy: typeof caseStudies[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Background gradient blob */}
      <motion.div 
        className={cn(
          "absolute -inset-2 rounded-3xl blur-2xl opacity-0 transition-opacity duration-500",
          `bg-gradient-to-br ${caseStudy.color}`,
          isHovered && "opacity-40"
        )}
      />

      <div className="relative block rounded-2xl overflow-hidden bg-muted h-full border border-border/30 hover:border-primary/30 transition-all duration-500">
        {/* Glowing border on hover */}
        <motion.div 
          className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative aspect-[16/10] overflow-hidden bg-background">
          <OptimizedImage
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
          
          {/* Hover overlay */}
          <motion.div 
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
              caseStudy.color,
              isHovered && "opacity-20"
            )}
          />

          {/* Corner icon */}
          <motion.div 
            className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ExternalLink className="w-4 h-4 text-primary" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 relative z-10">
          <motion.span 
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-2"
            animate={{ scale: isHovered ? 1.05 : 1 }}
          >
            {caseStudy.category}
          </motion.span>
          <motion.h3 
            className="text-xl font-heading font-bold mt-2 transition-colors duration-300"
            animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
          >
            {caseStudy.title}
          </motion.h3>
          <p className="text-foreground/60 text-sm mt-2 line-clamp-2">
            {caseStudy.description}
          </p>
          
          {/* Arrow indicator */}
          <motion.div 
            className="flex items-center gap-2 text-primary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            <span>Zobacz więcej</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
