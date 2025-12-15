import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    id: "enea-stadion",
    title: "Enea Stadion",
    category: "Marketing premium & Events",
    description:
      "Kompleksowa strategia marketingowa dla największego stadionu w Polsce. Social media, content video i kampanie eventowe.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005",
    stats: [
      { label: "Wzrost zaangażowania", value: "+340%" },
      { label: "Nowi followersi", value: "150K" },
    ],
    featured: true,
  },
  {
    id: "premium-ecommerce",
    title: "Luxury Brand E-commerce",
    category: "Strony www & E-commerce",
    description:
      "Redesign sklepu internetowego dla marki premium fashion z pełną optymalizacją konwersji.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    stats: [
      { label: "Wzrost konwersji", value: "+85%" },
      { label: "ROI", value: "420%" },
    ],
    featured: false,
  },
  {
    id: "tech-startup",
    title: "Tech Startup Launch",
    category: "Lead Generation & Kampanie",
    description:
      "Kampania launchowa dla startupu technologicznego z kompleksowym lead generation.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    stats: [
      { label: "Leady w 3 miesiące", value: "2,500+" },
      { label: "Koszt/lead", value: "-60%" },
    ],
    featured: false,
  },
];

export function CaseStudies() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const featuredCase = caseStudies.find((c) => c.featured);
  const otherCases = caseStudies.filter((c) => !c.featured);

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div ref={ref} className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span
              className={cn(
                "inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Case Studies
            </span>
            <h2
              className={cn(
                "text-3xl md:text-5xl font-heading font-bold transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Nasze <span className="text-gradient">realizacje</span>
            </h2>
          </div>
          <Button
            variant="outline"
            size="lg"
            asChild
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Link to="/realizacje" className="group">
              Zobacz wszystkie
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Featured Case Study */}
        {featuredCase && (
          <Link
            to={`/realizacje/${featuredCase.id}`}
            className={cn(
              "group block mb-8 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="relative rounded-3xl overflow-hidden bg-secondary">
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={featuredCase.image}
                    alt={featuredCase.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-primary text-sm font-medium mb-3">
                    {featuredCase.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredCase.title}
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    {featuredCase.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {featuredCase.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-3xl font-heading font-bold text-gradient">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Zobacz case study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other Case Studies */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherCases.map((caseStudy, index) => (
            <Link
              key={caseStudy.id}
              to={`/realizacje/${caseStudy.id}`}
              className={cn(
                "group relative rounded-2xl overflow-hidden bg-secondary transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: isVisible ? `${(index + 4) * 100}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-primary text-sm font-medium">
                  {caseStudy.category}
                </span>
                <h3 className="text-xl font-heading font-bold mt-2 group-hover:text-primary transition-colors">
                  {caseStudy.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
