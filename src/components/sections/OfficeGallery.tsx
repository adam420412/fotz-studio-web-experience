import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Office images
import officeStairs from "@/assets/office/office-stairs.webp";
import officeSign from "@/assets/office/office-sign.webp";
import officeLounge from "@/assets/office/office-lounge.webp";
import officeWorkspace from "@/assets/office/office-workspace.webp";
import officeDining from "@/assets/office/office-dining.webp";

// Team images
import teamWork2 from "@/assets/team/team-work-2.jpg";
import teamMeeting3 from "@/assets/team/team-meeting-3.jpg";
import teamBrainstorm2 from "@/assets/team/team-brainstorm-2.jpg";

const officeImages = [
  { src: officeStairs, alt: "Wejście do biura Fotz Studio", category: "Biuro" },
  { src: teamWork2, alt: "Zespół przy pracy", category: "Zespół" },
  { src: officeSign, alt: "Tabliczka Fotz Studio HOFA", category: "Biuro" },
  { src: teamMeeting3, alt: "Spotkanie zespołu", category: "Zespół" },
  { src: teamBrainstorm2, alt: "Burza mózgów", category: "Zespół" },
];

interface OfficeGalleryProps {
  showCTA?: boolean;
  title?: string;
  subtitle?: string;
}

export function OfficeGallery({ 
  showCTA = true, 
  title = "Nasze biuro i zespół",
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
            Nasze <span className="text-gradient">biuro i zespół</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Pracujemy w nowoczesnej przestrzeni w samym sercu Poznania
          </p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
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
                <Users className="w-5 h-5 mr-2" />
                Poznaj nas bliżej
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
