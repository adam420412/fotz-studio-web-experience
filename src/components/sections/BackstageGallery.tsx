import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

import backstage1 from "@/assets/backstage/backstage-1.png";
import backstage2 from "@/assets/backstage/backstage-2.png";
import backstage3 from "@/assets/backstage/backstage-3.png";
import backstage4 from "@/assets/backstage/backstage-4.png";
import backstage5 from "@/assets/backstage/backstage-5.png";
import backstage6 from "@/assets/backstage/backstage-6.png";
import sessionFinal1 from "@/assets/backstage/session-final-1.png";
import sessionFinal2 from "@/assets/backstage/session-final-2.png";

const backstageImages = [
  { src: backstage1, title: "Przygotowanie kadru", type: "backstage" },
  { src: sessionFinal1, title: "Efekt końcowy", type: "final" },
  { src: backstage2, title: "Praca na planie", type: "backstage" },
  { src: backstage3, title: "Kierownik planu", type: "backstage" },
  { src: sessionFinal2, title: "Zdjęcie produktowe", type: "final" },
  { src: backstage4, title: "Przygotowanie oświetlenia", type: "backstage" },
  { src: backstage5, title: "Ustawienie sceny", type: "backstage" },
  { src: backstage6, title: "Koordynacja ekipy", type: "backstage" },
];

interface BackstageGalleryProps {
  title?: string;
  subtitle?: string;
  showOnlyBackstage?: boolean;
  maxImages?: number;
}

export function BackstageGallery({ 
  title = "Backstage z realizacji", 
  subtitle = "Zobacz jak wygląda praca nad profesjonalną sesją fotograficzną i produkcją filmową",
  showOnlyBackstage = false,
  maxImages = 8
}: BackstageGalleryProps) {
  const imagesToShow = showOnlyBackstage 
    ? backstageImages.filter(img => img.type === "backstage").slice(0, maxImages)
    : backstageImages.slice(0, maxImages);

  return (
    <section className="py-16 sm:py-20 bg-card/30">
      <div className="container-wide px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
            <Camera className="w-4 h-4" />
            Za kulisami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
            {title.split(" ").map((word, i) => 
              i === title.split(" ").length - 1 
                ? <span key={i} className="text-gradient">{word}</span> 
                : <span key={i}>{word} </span>
            )}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {imagesToShow.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-xl ${
                image.type === "final" 
                  ? "ring-2 ring-primary/30" 
                  : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 mb-1">
                    {image.type === "final" ? (
                      <Sparkles className="w-3 h-3 text-primary" />
                    ) : (
                      <Camera className="w-3 h-3 text-primary" />
                    )}
                    <span className="text-[10px] sm:text-xs text-primary font-medium uppercase">
                      {image.type === "final" ? "Efekt końcowy" : "Backstage"}
                    </span>
                  </div>
                  <h3 className="text-white text-xs sm:text-sm font-semibold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
