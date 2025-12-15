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
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & B2B",
    subtitle: "Sprzedaż online",
    description:
      "Strategia e-commerce, performance marketing i automatyzacja sprzedaży dla sklepów i firm B2B.",
    href: "/dla-kogo/ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
  },
  {
    icon: Crown,
    title: "Marki premium",
    subtitle: "Luksus & jakość",
    description:
      "Wyrafinowany marketing dla marek premium. Pozycjonowanie, ekskluzywny content i influencer marketing.",
    href: "/dla-kogo/marki-premium",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
  },
  {
    icon: CalendarDays,
    title: "Instytucje & eventy",
    subtitle: "Kultura & wydarzenia",
    description:
      "Marketing eventowy i promocja wydarzeń kulturalnych. Kampanie sprzedaży biletów i budowanie zasięgów.",
    href: "/dla-kogo/instytucje",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
  },
];

const trustedBy = [
  "Enea Stadion",
  "Lech Poznań", 
  "MTP Poznań",
  "Arena Poznań",
  "TP Energa",
  "RPPG",
];

export function Clients() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Dla kogo pracujemy
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Wspieramy <span className="text-gradient">różne branże</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Każda branża ma swoją specyfikę. Dostosowujemy strategię 
            do unikalnych wyzwań Twojego biznesu.
          </p>
        </motion.div>

        {/* Client Types - Horizontal Scroll on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {clientTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={type.href}
                className="group relative block h-full rounded-2xl overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full min-h-[280px] justify-end">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-sm text-primary mb-2">{type.subtitle}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {type.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-all">
                    <span>Dowiedz się więcej</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Zaufali nam między innymi
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {trustedBy.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-xl md:text-2xl font-heading font-semibold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default"
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
