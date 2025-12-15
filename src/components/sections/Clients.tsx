import { Link } from "react-router-dom";
import { Building2, ShoppingBag, Crown, CalendarDays, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const clientTypes = [
  {
    icon: Building2,
    title: "Firmy lokalne",
    subtitle: "Poznań i okolice",
    description:
      "Budujemy silną obecność lokalnych firm w internecie. SEO lokalne, mapy Google i kampanie geotargetowane.",
    href: "/dla-kogo/firmy-lokalne",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & B2B",
    subtitle: "Sprzedaż online",
    description:
      "Strategia e-commerce, performance marketing i automatyzacja sprzedaży dla sklepów i firm B2B.",
    href: "/dla-kogo/ecommerce",
  },
  {
    icon: Crown,
    title: "Marki premium",
    subtitle: "Luksus & jakość",
    description:
      "Wyrafinowany marketing dla marek premium. Pozycjonowanie, ekskluzywny content i influencer marketing.",
    href: "/dla-kogo/marki-premium",
  },
  {
    icon: CalendarDays,
    title: "Instytucje & eventy",
    subtitle: "Kultura & wydarzenia",
    description:
      "Marketing eventowy i promocja wydarzeń kulturalnych. Kampanie sprzedaży biletów i budowanie zasięgów.",
    href: "/dla-kogo/instytucje",
  },
];

// Real Fotz Studio clients
const trustedBy = [
  "Enea Stadion",
  "Lech Poznań", 
  "RPPG",
  "TP Energa",
  "Verthé",
  "FPS Cegielski",
];

export function Clients() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[200px]"
          style={{ background: "hsla(336, 71%, 27%, 0.08)" }}
        />
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
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4"
          >
            Dla kogo pracujemy
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Wspieramy <span className="text-gradient-premium">różne branże</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Każda branża ma swoją specyfikę. Dostosowujemy strategię 
            do unikalnych wyzwań Twojego biznesu.
          </p>
        </motion.div>

        {/* Client Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clientTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={type.href}
                className="group relative block h-full rounded-2xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500 hover-lift bg-card p-8"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-gradient-premium transition-colors">
                  {type.title}
                </h3>
                <p className="text-sm text-primary mb-3">{type.subtitle}</p>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  {type.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
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
          <p className="text-sm text-foreground/50 uppercase tracking-wider mb-8">
            Zaufali nam między innymi
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {trustedBy.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-xl md:text-2xl font-heading font-semibold text-foreground/30 hover:text-gradient-premium transition-all duration-300 cursor-default"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}