import { Link } from "react-router-dom";
import { Building2, ShoppingBag, Crown, CalendarDays, ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Client logos imports
import eneaLogo from "@/assets/clients/enea-stadion.png";
import lechLogo from "@/assets/clients/lech-poznan.png";
import rppgLogo from "@/assets/clients/rppg.svg";
import fpsLogo from "@/assets/clients/fps.png";
import pumaLogo from "@/assets/clients/puma.png";
import mixbudLogo from "@/assets/clients/mixbud.png";
import klagemLogo from "@/assets/clients/klagem.png";
import partsLogo from "@/assets/clients/parts-jewelry.jpeg";
import zabkaLogo from "@/assets/clients/zabka.png";

const clientTypes = [
  {
    icon: Building2,
    title: "Firmy lokalne",
    subtitle: "Poznań i okolice",
    description:
      "Budujemy silną obecność lokalnych firm w internecie. SEO lokalne, mapy Google i kampanie geotargetowane.",
    href: "/dla-kogo/firmy-lokalne",
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & B2B",
    subtitle: "Sprzedaż online",
    description:
      "Strategia e-commerce, performance marketing i automatyzacja sprzedaży dla sklepów i firm B2B.",
    href: "/dla-kogo/ecommerce",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: Crown,
    title: "Marki premium",
    subtitle: "Luksus & jakość",
    description:
      "Wyrafinowany marketing dla marek premium. Pozycjonowanie, ekskluzywny content i influencer marketing.",
    href: "/dla-kogo/marki-premium",
    color: "from-amber-500/20 to-yellow-500/10",
  },
  {
    icon: CalendarDays,
    title: "Instytucje & eventy",
    subtitle: "Kultura & wydarzenia",
    description:
      "Marketing eventowy i promocja wydarzeń kulturalnych. Kampanie sprzedaży biletów i budowanie zasięgów.",
    href: "/dla-kogo/instytucje",
    color: "from-blue-500/20 to-cyan-500/10",
  },
];

// Real Fotz Studio clients with logos
const trustedBy = [
  { name: "Enea Stadion", logo: eneaLogo },
  { name: "Lech Poznań", logo: lechLogo }, 
  { name: "RPPG", logo: rppgLogo },
  { name: "FPS Cegielski", logo: fpsLogo },
  { name: "Puma", logo: pumaLogo },
  { name: "Mix-Bud", logo: mixbudLogo },
  { name: "Klagem", logo: klagemLogo },
  { name: "Parts Jewelry", logo: partsLogo },
  { name: "Żabka", logo: zabkaLogo },
];

export function Clients() {
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
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-secondary/[0.04]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full blur-[100px] bg-primary/[0.05]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
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
              Dla kogo pracujemy
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Wspieramy{" "}
            <span className="text-gradient-premium relative">
              różne branże
              <motion.span 
                className="absolute -inset-2 bg-primary/10 rounded-lg blur-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Każda branża ma swoją specyfikę. Dostosowujemy strategię 
            do unikalnych wyzwań Twojego biznesu.
          </p>
        </motion.div>

        {/* Client Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clientTypes.map((type, index) => (
            <ClientTypeCard key={type.title} type={type} index={index} />
          ))}
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.p 
            className="text-sm text-foreground/50 uppercase tracking-wider mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Zaufali nam między innymi
          </motion.p>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {trustedBy.map((client, index) => (
              <ClientLogo key={client.name} client={client} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ClientTypeCard({ type, index }: { type: typeof clientTypes[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
          `bg-gradient-to-br ${type.color}`,
          isHovered && "opacity-50"
        )}
      />

      <Link
        to={type.href}
        className="relative block h-full rounded-2xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500 bg-card p-8"
      >
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
            type.color,
            isHovered && "opacity-10"
          )}
        />

        {/* Icon */}
        <motion.div 
          className="relative w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <type.icon className="w-7 h-7 text-primary-foreground" />
          <motion.div 
            className="absolute -inset-2 bg-primary/20 rounded-xl blur-xl"
            animate={{ 
              scale: isHovered ? 1.3 : 1,
              opacity: isHovered ? 0.6 : 0.3 
            }}
          />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-heading font-bold mb-2 transition-colors duration-300 relative z-10"
          animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
        >
          {type.title}
        </motion.h3>
        <p className="text-sm text-primary mb-3 relative z-10">{type.subtitle}</p>
        <p className="text-sm text-foreground/60 leading-relaxed mb-4 relative z-10">
          {type.description}
        </p>
        <motion.div 
          className="flex items-center gap-2 text-primary text-sm font-medium relative z-10"
          animate={{ 
            x: isHovered ? 5 : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <span>Dowiedz się więcej</span>
          <ArrowRight className="w-3 h-3" />
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
          <Sparkles className="w-4 h-4 text-primary/40" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

function ClientLogo({ client, index }: { client: typeof trustedBy[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Background glow on hover */}
      <motion.div 
        className="absolute -inset-2 rounded-2xl bg-primary/10 blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="relative flex items-center justify-center p-6 md:p-8 rounded-xl bg-white border border-transparent hover:border-primary/20 transition-all duration-300 aspect-square overflow-hidden"
        animate={{ 
          y: isHovered ? -5 : 0,
          boxShadow: isHovered 
            ? "0 20px 40px -10px rgba(0,0,0,0.15)" 
            : "0 0 0 0 rgba(0,0,0,0)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Gradient overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.img 
          src={client.logo} 
          alt={client.name}
          className="w-24 h-24 md:w-28 md:h-28 object-contain relative z-10"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? "brightness(1.1)" : "brightness(1)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Client name tooltip */}
        <motion.div 
          className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 text-xs font-medium text-foreground whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.2 }}
        >
          {client.name}
        </motion.div>

        {/* Corner sparkle */}
        <motion.div 
          className="absolute top-2 right-2 text-primary/40"
          animate={{ 
            rotate: isHovered ? 180 : 0,
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
