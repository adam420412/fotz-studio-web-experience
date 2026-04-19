import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

import officeStairs from "@/assets/office/office-stairs.webp";
import officeSign from "@/assets/office/office-sign.webp";
import officeLounge from "@/assets/office/office-lounge.webp";
import officeWorkspace from "@/assets/office/office-workspace.webp";
import officeDining from "@/assets/office/office-dining.webp";

const officeImages = [
  { src: officeStairs, alt: "Wejście do biura Fotz Studio", category: "Biuro" },
  { src: officeLounge, alt: "Strefa relaksu Fotz Studio", category: "Biuro" },
  { src: officeSign, alt: "Tabliczka Fotz Studio HOFA", category: "Biuro" },
  { src: officeWorkspace, alt: "Przestrzeń robocza", category: "Biuro" },
  { src: officeDining, alt: "Kuchnia biurowa", category: "Biuro" },
];

interface OfficeGalleryProps {
  showCTA?: boolean;
  title?: string;
  subtitle?: string;
}

export function OfficeGallery({
  showCTA = true,
}: OfficeGalleryProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="dv-eyebrow mb-6 inline-block">Plac Wolności 16, Poznań</span>
          <h2
            className="font-geist mb-4"
            style={{
              fontSize: "clamp(36px, 4vw, 64px)",
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              fontWeight: 400,
            }}
          >
            Nasze <span className="dv-text-grad italic">biuro i zespół</span>
          </h2>
          <p
            style={{
              color: "var(--dv-fg-muted)",
              fontSize: "17px",
              maxWidth: "44ch",
              margin: "0 auto",
            }}
          >
            Pracujemy w nowoczesnej przestrzeni w samym sercu Poznania
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {officeImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden"
              style={{ borderRadius: 16, border: "1px solid var(--dv-hair)" }}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3">
                  <span className="dv-pill text-[11px]">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showCTA && (
          <div className="text-center mt-12">
            <p
              className="mb-6"
              style={{ color: "var(--dv-fg-muted)", fontSize: "15px" }}
            >
              Zapraszamy na kawę i rozmowę o Twoim projekcie
            </p>
            <Link to="/o-nas" className="dv-btn dv-btn-secondary group">
              Poznaj nas bliżej
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
