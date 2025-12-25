import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  link?: string;
}

interface CityServicesGridProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  cityName?: string;
}

export const CityServicesGrid = ({ 
  services, 
  title = "Nasze usługi",
  subtitle,
  cityName = ""
}: CityServicesGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Usługi {cityName}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 h-full
                            transition-all duration-500 ease-out
                            hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10
                            hover:-translate-y-2 hover:bg-card">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon container */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 
                                flex items-center justify-center
                                group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
                                group-hover:shadow-lg group-hover:shadow-primary/20">
                    <service.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Link arrow */}
                {service.link && (
                  <Link 
                    to={service.link}
                    className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-primary/10 
                              flex items-center justify-center
                              opacity-0 group-hover:opacity-100 transition-all duration-300
                              hover:bg-primary hover:text-primary-foreground"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent 
                                rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
