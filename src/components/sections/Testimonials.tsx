import { Star, Quote, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Martyna Kasprzak",
    role: "Właścicielka firmy",
    content: "Polecam Fotz Studio i współpracę z Panem Adamem. Strona internetowa zrobiona w takim terminie jak było ustalone, strona wygląda estetycznie i każdy detal jest dopracowany.",
    rating: 5,
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    name: "Robert Zyśk",
    role: "Przedsiębiorca",
    content: "Chciałbym polecić FOTZ jako profesjonalnego i rzetelnego partnera w zakresie projektowania stron internetowych. Od samego początku współpraca przebiegała sprawnie.",
    rating: 5,
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    name: "Edyta",
    role: "Klientka",
    content: "Polecam Fotz Studio, a szczególnie współpracę z Panem Adamem. Bardzo doceniam świetny kontakt i szybkie działanie - konkretna robota!",
    rating: 5,
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    name: "Olivier G",
    role: "Stały klient",
    content: "Polecam z całego serca... współpracowałem z panem Adamem kilkukrotnie i za każdym razem wszystko szło szybko, sprawnie i bardzo dobrze.",
    rating: 5,
    color: "from-green-500/20 to-emerald-500/10",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[200px] bg-primary/[0.06]"
        />
        <motion.div 
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-secondary/[0.05]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] bg-primary/[0.04]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
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
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
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
              Referencje
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Referencje i opinie{" "}
            <span className="text-gradient-premium relative">
              zadowolonych klientów
              <motion.span 
                className="absolute -inset-2 bg-primary/10 rounded-lg blur-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Zadowolenie naszych klientów jest dla nas priorytetem. Ich referencje i opinie stanowią najlepszy dowód na skuteczność naszych działań.
          </p>
          
          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-full bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                >
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>
            <span className="text-foreground font-semibold">5.0</span>
            <span className="text-foreground/60">• 160+ opinii Google</span>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Background gradient blob */}
      <motion.div 
        className={cn(
          "absolute -inset-2 rounded-3xl blur-2xl opacity-0 transition-opacity duration-500",
          `bg-gradient-to-br ${testimonial.color}`,
          isHovered && "opacity-50"
        )}
      />

      <div className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
        {/* Glowing border on hover */}
        <motion.div 
          className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Gradient overlay on hover */}
        <motion.div 
          className={cn(
            "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500",
            testimonial.color,
            isHovered && "opacity-10"
          )}
        />

        {/* Quote Icon */}
        <motion.div 
          className="absolute top-6 right-6"
          animate={{ 
            rotate: isHovered ? 10 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Quote className="w-10 h-10 text-primary/20" />
        </motion.div>

        {/* Stars */}
        <div className="flex gap-1 mb-4 relative z-10">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: isHovered ? [1, 1.2, 1] : 1,
                rotate: isHovered ? [0, 10, 0] : 0
              }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <p className="text-foreground/80 mb-6 leading-relaxed relative z-10">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 relative z-10">
          <motion.div 
            className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground font-bold text-lg relative"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {testimonial.name.charAt(0)}
            <motion.div 
              className="absolute -inset-1 bg-primary/30 rounded-full blur-md"
              animate={{ 
                scale: isHovered ? 1.3 : 1,
                opacity: isHovered ? 0.6 : 0.3 
              }}
            />
          </motion.div>
          <div>
            <motion.div 
              className="font-semibold transition-colors duration-300"
              animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
            >
              {testimonial.name}
            </motion.div>
            <div className="text-sm text-foreground/60">{testimonial.role}</div>
          </div>
        </div>

        {/* Corner decoration */}
        <motion.div 
          className="absolute bottom-4 right-4 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ 
            rotate: isHovered ? 180 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-primary/40" />
        </motion.div>
      </div>
    </motion.div>
  );
}
