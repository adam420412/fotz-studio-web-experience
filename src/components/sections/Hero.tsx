import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-team-of-developers-working-in-an-office-4831-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: "hsla(336, 71%, 27%, 0.3)" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "hsla(209, 69%, 19%, 0.3)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-wide px-6 md:px-12 text-center pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-brand"></span>
            </span>
            <span className="text-sm text-foreground font-medium">
              Studio marketingu wzrostu • Poznań
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6"
          >
            Projektujemy marketing,
            <br />
            <span className="text-gradient-premium">który realnie pozyskuje klientów</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10"
          >
            Od strategii, przez content i wideo, po kampanie sprzedażowe.
            <br className="hidden md:block" />
            Kompleksowe wsparcie dla firm, które chcą rosnąć.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild className="group min-w-[220px]">
              <Link to="/kontakt">
                Bezpłatna konsultacja
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="group min-w-[220px]">
              <Link to="/realizacje">
                <Play className="w-5 h-5" />
                Zobacz realizacje
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/30"
          >
            {[
              { value: "1mln+", label: "Wyświetleń treści miesięcznie" },
              { value: "160+", label: "Opinii na Google" },
              { value: "12+", label: "Lat doświadczenia" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient-premium mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-foreground/50 uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}