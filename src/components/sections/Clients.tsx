import { Link } from "react-router-dom";
import { Building2, ShoppingBag, Crown, CalendarDays, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const clientTypes = [
  {
    icon: Building2,
    title: "Firmy lokalne",
    subtitle: "Poznań i okolice",
    description:
      "Pomagamy lokalnym firmom budować silną obecność w internecie i pozyskiwać klientów z regionu.",
    href: "/dla-kogo/firmy-lokalne",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    subtitle: "Sklepy online",
    description:
      "Optymalizujemy sprzedaż online, budujemy strategie performance i rozwijamy marki e-commerce.",
    href: "/dla-kogo/ecommerce",
  },
  {
    icon: Crown,
    title: "Marki premium",
    subtitle: "Luksus & jakość",
    description:
      "Tworzymy wyrafinowane strategie marketingowe dla marek, które stawiają na najwyższą jakość.",
    href: "/dla-kogo/marki-premium",
  },
  {
    icon: CalendarDays,
    title: "Instytucje & eventy",
    subtitle: "Kultura & wydarzenia",
    description:
      "Wspieramy instytucje kultury i organizatorów wydarzeń w promocji i budowaniu zasięgów.",
    href: "/dla-kogo/instytucje",
  },
];

const logos = [
  "Enea Stadion",
  "Lech Poznań",
  "Arena Poznań",
  "Galeria Pestka",
  "MTP Poznań",
  "Concordia Design",
];

export function Clients() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div ref={ref} className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Dla kogo pracujemy
          </span>
          <h2
            className={cn(
              "text-3xl md:text-5xl font-heading font-bold mb-6 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Wspieramy <span className="text-gradient">różne branże</span>
          </h2>
          <p
            className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Każda branża ma swoje specyficzne potrzeby. Dostosowujemy nasze 
            strategie do unikalnych wyzwań i celów Twojego biznesu.
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clientTypes.map((type, index) => (
            <Link
              key={type.title}
              to={type.href}
              className={cn(
                "group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: isVisible ? `${(index + 3) * 100}ms` : "0ms",
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <type.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                {type.title}
              </h3>
              <p className="text-sm text-primary mb-3">{type.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {type.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Dowiedz się więcej</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>

        {/* Trusted By */}
        <div
          className={cn(
            "text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Zaufali nam między innymi
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-lg md:text-xl font-heading font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
