import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface CityLink {
  name: string;
  href: string;
}

interface CityLinksSectionProps {
  currentCity: string;
  title?: string;
  subtitle?: string;
}

const cityLinks: CityLink[] = [
  { name: "Poznań", href: "/strony-internetowe-poznan" },
  { name: "Warszawa", href: "/strony-internetowe-warszawa" },
  { name: "Wrocław", href: "/strony-internetowe-wroclaw" },
  { name: "Kraków", href: "/strony-internetowe-krakow" },
  { name: "Gdańsk", href: "/strony-internetowe-gdansk" },
  { name: "Łódź", href: "/strony-internetowe-lodz" },
  { name: "Katowice", href: "/strony-internetowe-katowice" },
  { name: "Szczecin", href: "/strony-internetowe-szczecin" },
  { name: "Bydgoszcz", href: "/strony-internetowe-bydgoszcz" },
  { name: "Lublin", href: "/strony-internetowe-lublin" },
];

export const CityLinksSection = ({ 
  currentCity,
  title = "Tworzymy strony w całej Polsce",
  subtitle = "Działamy zdalnie, ale znamy specyfikę lokalnych rynków. Sprawdź ofertę w Twoim mieście."
}: CityLinksSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <MapPin className="w-4 h-4" />
            Lokalizacje
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {cityLinks.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to={city.href}
                className={`block px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-center text-sm sm:text-base
                  transition-all duration-300 ${
                  city.name === currentCity 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                    : "bg-card border border-border/50 text-foreground hover:border-primary/30 hover:bg-primary/5"
                }`}
              >
                {city.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
