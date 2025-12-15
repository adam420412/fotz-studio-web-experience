import { Link } from "react-router-dom";
import { Globe, Video, Target, Crown, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Globe,
    title: "Strony internetowe & widoczność",
    description:
      "Projektujemy nowoczesne strony www, które nie tylko wyglądają świetnie, ale przede wszystkim konwertują odwiedzających w klientów.",
    features: ["Strony www", "SEO", "Optymalizacja", "Analityka"],
    href: "/uslugi/strony-internetowe",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Video,
    title: "Social media & video marketing",
    description:
      "Budujemy obecność marki w social mediach. Tworzymy treści wideo, które angażują i budują społeczność wokół Twojej marki.",
    features: ["Social Media", "Video", "Content", "Community"],
    href: "/uslugi/social-media",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: Target,
    title: "Kampanie reklamowe & lead generation",
    description:
      "Projektujemy i zarządzamy kampaniami, które przynoszą mierzalne rezultaty. Google Ads, Meta Ads, LinkedIn i więcej.",
    features: ["Google Ads", "Meta Ads", "Lead Gen", "Remarketing"],
    href: "/uslugi/kampanie-reklamowe",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Crown,
    title: "Marketing premium & instytucje",
    description:
      "Kompleksowe wsparcie marketingowe dla marek premium, instytucji kultury i organizatorów wydarzeń o wysokich wymaganiach.",
    features: ["Strategia", "Branding", "Events", "PR"],
    href: "/uslugi/marketing-premium",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div ref={ref} className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Nasze usługi
          </span>
          <h2
            className={cn(
              "text-3xl md:text-5xl font-heading font-bold mb-6 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Jak pomagamy firmom{" "}
            <span className="text-gradient">rosnąć?</span>
          </h2>
          <p
            className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Cztery filary naszej działalności, które razem tworzą kompleksową 
            strategię marketingową dla Twojej firmy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={cn(
                "group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift overflow-hidden",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: isVisible ? `${(index + 3) * 100}ms` : "0ms",
              }}
            >
              {/* Gradient Background */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                  service.color
                )}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
                    service.iconColor
                  )}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
