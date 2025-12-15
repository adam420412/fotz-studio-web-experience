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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Nasz wyróżnik
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Biuro i studio w sercu{" "}
              <span className="text-gradient">Poznania</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nie jesteśmy agencją zdalną. Mamy realne biuro, studio produkcyjne 
              i zespół na miejscu. Możesz nas odwiedzić, porozmawiać i zobaczyć, 
              jak powstają Twoje materiały.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <feature.icon className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt" className="group">
                  Umów spotkanie
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/studio-podcastowe">Zobacz studio</Link>
              </Button>
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-12 gap-4"
          >
            {/* Large Image */}
            <div className="col-span-7 row-span-2">
              <div className="relative h-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                  alt="Biuro Fotz Studio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>
            </div>
            
            {/* Small Images */}
            <div className="col-span-5">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070"
                  alt="Studio podcastowe"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="col-span-5">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?q=80&w=2070"
                  alt="Sprzęt video"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
