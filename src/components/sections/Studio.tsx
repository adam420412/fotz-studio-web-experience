import { Link } from "react-router-dom";
import { MapPin, Video, Mic, Users, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ScrollRevealText, FloatingWords, TypewriterText } from "@/components/AnimatedText";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: MapPin,
    title: "Plac Wolności 16",
    description: "Prestiżowa lokalizacja w centrum Poznania. Spotkajmy się na żywo.",
    color: "from-orange-500/20 to-amber-500/10",
    details: ["Łatwy dojazd", "Parking w pobliżu", "Centrum miasta"],
  },
  {
    icon: Video,
    title: "Studio video",
    description: "Własna produkcja wideo. Reklamy, spoty, content social media.",
    color: "from-purple-500/20 to-pink-500/10",
    details: ["4K produkcja", "Green screen", "Profesjonalne oświetlenie"],
  },
  {
    icon: Mic,
    title: "Studio podcastowe",
    description: "Profesjonalne nagrania audio i wideo. Podcasty, wywiady, webinary.",
    color: "from-blue-500/20 to-cyan-500/10",
    details: ["Izolacja akustyczna", "Multi-cam", "Streaming na żywo"],
  },
  {
    icon: Users,
    title: "Zespół na miejscu",
    description: "Strategia, kreacja i produkcja pod jednym dachem. Zero outsourcingu.",
    color: "from-green-500/20 to-emerald-500/10",
    details: ["Strategowie", "Graficy", "Filmowcy"],
  },
];

const keyWords = [
  { text: "Studio", color: "text-primary" },
  { text: "Produkcja", color: "text-purple-400" },
  { text: "Poznań", color: "text-orange-400" },
  { text: "Kreacja", color: "text-blue-400" },
  { text: "Video", color: "text-green-400" },
  { text: "Podcast", color: "text-pink-400" },
];

export function Studio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const mainText = "Nie jesteśmy agencją zdalną. Mamy realne biuro, studio produkcyjne i zespół na miejscu. Możesz nas odwiedzić, porozmawiać i zobaczyć, jak powstają Twoje materiały.";

  return (
    <section ref={sectionRef} className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
          style={{ background: "hsla(336, 71%, 27%, 0.1)", y: backgroundY }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "hsla(209, 69%, 19%, 0.1)" }}
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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -40, 0],
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Nasz wyróżnik
            </motion.div>

            <div ref={headingRef}>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Biuro i studio w sercu{" "}
                <span className="text-gradient-premium relative inline-block">
                  {isHeadingInView && (
                    <TypewriterText 
                      text="Poznania" 
                      delay={0.3}
                      speed={0.1}
                    />
                  )}
                  <motion.span 
                    className="absolute -inset-2 bg-primary/20 rounded-lg blur-2xl -z-10"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
              </h2>
            </div>

            {/* Animated paragraph */}
            <div className="mb-8">
              <ScrollRevealText 
                text={mainText}
                className="text-foreground/70 text-lg"
                highlightWords={["biuro", "studio", "zespół", "odwiedzić"]}
                highlightClassName="text-primary"
              />
            </div>

            {/* Floating keywords */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <FloatingWords words={keyWords} className="justify-start" />
            </motion.div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt" className="group">
                  Umów spotkanie
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/studio-podcastowe">Zobacz studio</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Images Grid - Real Fotz Studio photos */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-12 gap-4"
          >
            {/* Large Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-7 row-span-2 group"
            >
              <div className="relative h-full rounded-2xl overflow-hidden border border-border/30">
                <img
                  src="https://fotz.pl/wp-content/uploads/2023/02/DSC05712.jpeg"
                  alt="Biuro Fotz Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Overlay badge */}
                <motion.div 
                  className="absolute bottom-4 left-4 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full border border-border/50 flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Centrum Poznania</span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Video Reel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-5 group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/30 bg-card relative">
                <video
                  src="/videos/skaland-osiedle.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Video overlay badge */}
                <motion.div 
                  className="absolute top-3 right-3 w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Video className="w-4 h-4 text-primary-foreground" />
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-5 group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/30 relative">
                <img
                  src="https://fotz.pl/wp-content/uploads/2024/10/Cegielski-Mockup-Strona-Internetowa.png"
                  alt="Realizacja Fotz Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className="relative p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
    >
      {/* Background gradient on hover */}
      <motion.div 
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 bg-gradient-to-br",
          feature.color,
          isHovered && "opacity-30"
        )}
      />

      <div className="relative z-10">
        <motion.div 
          className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center mb-3"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <feature.icon className="w-5 h-5 text-white" />
        </motion.div>
        
        <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
          {feature.title}
        </h4>
        <p className="text-xs text-foreground/60">
          {feature.description}
        </p>

        {/* Expandable details */}
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0
          }}
          className="overflow-hidden"
        >
          <div className="pt-3 mt-3 border-t border-border/30 space-y-1">
            {feature.details.map((detail, i) => (
              <motion.div
                key={detail}
                initial={{ opacity: 0, x: -10 }}
                animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-xs text-foreground/70"
              >
                <CheckCircle2 className="w-3 h-3 text-primary" />
                {detail}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expand indicator */}
        <motion.div
          className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center"
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="w-3 h-3 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
}