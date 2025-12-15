import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[180px]"
          style={{ background: "hsla(336, 71%, 27%, 0.15)" }}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "hsla(209, 69%, 19%, 0.1)" }}
        />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Porozmawiajmy o{" "}
            <span className="text-gradient-premium">Twoim marketingu</span>
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Bezpłatna konsultacja, bez zobowiązań. Opowiedz o swoim biznesie, 
            a pokażemy, jak możemy pomóc Ci rosnąć.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="premium" size="xl" asChild className="min-w-[250px]">
              <Link to="/kontakt" className="group">
                Umów bezpłatną konsultację
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="min-w-[200px]">
              <a href="tel:+48790814814">
                <Phone className="w-5 h-5" />
                Zadzwoń teraz
              </a>
            </Button>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/60"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Plac Wolności 16, Poznań</span>
            </div>
            <span className="hidden sm:block text-border">•</span>
            <span>Preferujesz online? Też możemy.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}