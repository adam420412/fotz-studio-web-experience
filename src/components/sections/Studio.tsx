import { Link } from "react-router-dom";
import { MapPin, Video, Mic, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export function Studio() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div ref={ref} className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span
              className={cn(
                "inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Nasze biuro
            </span>
            <h2
              className={cn(
                "text-3xl md:text-5xl font-heading font-bold mb-6 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Studio w sercu{" "}
              <span className="text-gradient">Poznania</span>
            </h2>
            <p
              className={cn(
                "text-muted-foreground text-lg mb-8 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Nasze biuro znajduje się w prestiżowej lokalizacji na Placu Wolności. 
              Oprócz przestrzeni kreatywnej, dysponujemy profesjonalnym studiem 
              podcastowym i video.
            </p>

            {/* Features */}
            <div
              className={cn(
                "space-y-4 mb-8 transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Plac Wolności 16, Poznań</h4>
                  <p className="text-sm text-muted-foreground">
                    Prestiżowa lokalizacja w samym centrum miasta
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Studio video</h4>
                  <p className="text-sm text-muted-foreground">
                    Profesjonalne nagrania reklamowe i korporacyjne
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Studio podcastowe</h4>
                  <p className="text-sm text-muted-foreground">
                    Nagrywaj podcasty w profesjonalnych warunkach
                  </p>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
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
          </div>

          {/* Images Grid */}
          <div
            className={cn(
              "grid grid-cols-2 gap-4 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                  alt="Biuro Fotz Studio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070"
                  alt="Studio podcastowe"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070"
                  alt="Przestrzeń kreatywna"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?q=80&w=2070"
                  alt="Sprzęt video"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
