import { Link } from "react-router-dom";
import { MapPin, Video, Mic, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: MapPin,
    title: "Plac Wolności 16",
    description: "Prestiżowa lokalizacja w centrum Poznania. Spotkajmy się na żywo.",
  },
  {
    icon: Video,
    title: "Studio video",
    description: "Własna produkcja wideo. Reklamy, spoty, content social media.",
  },
  {
    icon: Mic,
    title: "Studio podcastowe",
    description: "Profesjonalne nagrania audio i wideo. Podcasty, wywiady, webinary.",
  },
  {
    icon: Users,
    title: "Zespół na miejscu",
    description: "Strategia, kreacja i produkcja pod jednym dachem. Zero outsourcingu.",
  },
];

export function Studio() {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
          style={{ background: "hsla(336, 71%, 27%, 0.1)" }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "hsla(209, 69%, 19%, 0.1)" }}
        />
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
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4"
            >
              Nasz wyróżnik
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Biuro i studio w sercu{" "}
              <span className="text-gradient-premium">Poznania</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Nie jesteśmy agencją zdalną. Mamy realne biuro, studio produkcyjne 
              i zespół na miejscu. Możesz nas odwiedzić, porozmawiać i zobaczyć, 
              jak powstają Twoje materiały.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-foreground/60">
                    {feature.description}
                  </p>
                </motion.div>
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

          {/* Images Grid */}
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
              className="col-span-7 row-span-2"
            >
              <div className="relative h-full rounded-2xl overflow-hidden border border-border/30">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                  alt="Biuro Fotz Studio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
            
            {/* Small Images */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-5"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/30">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070"
                  alt="Studio podcastowe"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-5"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/30">
                <img
                  src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?q=80&w=2070"
                  alt="Sprzęt video"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}