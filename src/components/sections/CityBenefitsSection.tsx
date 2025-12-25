import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import portfolio images for visual content
import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";

interface CityBenefitsSectionProps {
  benefits: string[];
  title?: string;
  subtitle?: string;
  cityName?: string;
  showCTA?: boolean;
}

export const CityBenefitsSection = ({ 
  benefits, 
  title = "Korzyści współpracy",
  subtitle,
  cityName = "",
  showCTA = true
}: CityBenefitsSectionProps) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-card/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)/0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Dlaczego my?
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
              {title}
            </h2>
            
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 md:mb-10 leading-relaxed">
                {subtitle}
              </p>
            )}

            {/* Benefits list with stagger animation */}
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                  className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg md:rounded-xl bg-background/60 backdrop-blur-sm
                           border border-border/50 hover:border-primary/30 hover:bg-background/80
                           transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 
                                flex items-center justify-center flex-shrink-0
                                group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {showCTA && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Porozmawiajmy o projekcie
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl blur-2xl opacity-50" />
            
            {/* Image grid */}
            <div className="relative grid grid-cols-2 gap-3 md:gap-4">
              {/* Main large image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="col-span-2 relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-primary/10"
              >
                <img 
                  src={victoryCarsImg} 
                  alt="Realizacja strony internetowej"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <span className="text-xs text-primary font-medium">Case Study</span>
                  <h4 className="text-base md:text-lg font-semibold">Victory Cars</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Strona motoryzacyjna premium</p>
                </div>
              </motion.div>

              {/* Smaller image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10"
              >
                <img 
                  src={apartamentyImg} 
                  alt="Realizacja strony internetowej"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </motion.div>

              {/* Stats card */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-6 
                          flex flex-col justify-center items-center text-center shadow-xl shadow-primary/20"
              >
                <span className="text-4xl font-bold text-primary-foreground mb-2">600+</span>
                <span className="text-primary-foreground/80 text-sm">Zrealizowanych projektów</span>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-secondary/80
                        flex flex-col items-center justify-center text-secondary-foreground shadow-xl z-10"
            >
              <span className="text-2xl font-bold">100%</span>
              <span className="text-[10px] leading-tight text-center px-2">zadowolonych klientów</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
