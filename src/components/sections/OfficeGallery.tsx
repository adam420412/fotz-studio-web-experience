import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Office images
import officeStairs from "@/assets/office/office-stairs.webp";
import officeSign from "@/assets/office/office-sign.webp";
import officeLounge from "@/assets/office/office-lounge.webp";
import officeWorkspace from "@/assets/office/office-workspace.webp";
import officeDining from "@/assets/office/office-dining.webp";

const officeImages = [
  { src: officeStairs, alt: "Wejście do biura Fotz Studio - designerskie schody" },
  { src: officeSign, alt: "Tabliczka Fotz Studio na budynku HOFA Plac Wolności" },
  { src: officeLounge, alt: "Strefa relaksu w biurze Fotz Studio" },
  { src: officeWorkspace, alt: "Przestrzeń do pracy kreatywnej z piłkarzykami" },
  { src: officeDining, alt: "Kuchnia i strefa spotkań w biurze" },
];

interface OfficeGalleryProps {
  showCTA?: boolean;
  title?: string;
  subtitle?: string;
}

export function OfficeGallery({ 
  showCTA = true, 
  title = "Nasze biuro",
  subtitle = "Plac Wolności 16, Poznań"
}: OfficeGalleryProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4" />
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            {title.includes("biuro") ? (
              <>Nasze <span className="text-gradient">biuro</span></>
            ) : (
              <>{title}</>
            )}
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {officeImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Zapraszamy na kawę i rozmowę o Twoim projekcie
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/o-nas" className="group">
                Poznaj nas bliżej
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
