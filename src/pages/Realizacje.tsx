import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const categories = [
  "Wszystkie",
  "Strony www",
  "Social Media",
  "Kampanie",
  "Branding",
];

const projects = [
  {
    id: "enea-stadion",
    title: "Enea Stadion",
    category: "Social Media",
    description: "Kompleksowa strategia marketingowa dla największego stadionu w Polsce.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005",
    featured: true,
  },
  {
    id: "luxury-ecommerce",
    title: "Luxury Fashion Brand",
    category: "Strony www",
    description: "Redesign sklepu internetowego dla marki premium fashion.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    featured: false,
  },
  {
    id: "tech-startup",
    title: "Tech Startup Launch",
    category: "Kampanie",
    description: "Kampania launchowa z kompleksowym lead generation.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    featured: false,
  },
  {
    id: "restaurant-chain",
    title: "Restaurant Chain Rebrand",
    category: "Branding",
    description: "Kompleksowy rebranding sieci restauracji premium.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
    featured: false,
  },
  {
    id: "fitness-app",
    title: "Fitness App Campaign",
    category: "Kampanie",
    description: "Kampania performance dla aplikacji fitness.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070",
    featured: false,
  },
  {
    id: "museum-event",
    title: "Museum Exhibition",
    category: "Social Media",
    description: "Promocja wystawy dla muzeum sztuki nowoczesnej.",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070",
    featured: false,
  },
];

export default function Realizacje() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const filteredProjects =
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Nasze <span className="text-gradient">realizacje</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Poznaj projekty, które zrealizowaliśmy dla naszych klientów. 
              Każdy z nich to unikalna historia sukcesu.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section ref={ref} className="section-padding bg-card">
        <div className="container-wide">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/realizacje/${project.id}`}
                className={cn(
                  "group relative rounded-2xl overflow-hidden bg-secondary transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  project.featured && "md:col-span-2 md:row-span-2"
                )}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    project.featured ? "aspect-[16/10]" : "aspect-[4/3]"
                  )}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {project.featured && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-sm font-medium">
                    {project.category}
                  </span>
                  <h3
                    className={cn(
                      "font-heading font-bold mt-2 group-hover:text-primary transition-colors",
                      project.featured ? "text-2xl md:text-3xl" : "text-xl"
                    )}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Zobacz case study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Chcesz być <span className="text-gradient">następny?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Porozmawiajmy o Twoim projekcie. Pokażemy, jak możemy pomóc 
            Twojej marce osiągnąć podobne rezultaty.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/kontakt" className="group">
              Rozpocznij projekt
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
