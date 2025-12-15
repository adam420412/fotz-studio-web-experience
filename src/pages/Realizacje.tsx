import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  "Wszystkie",
  "Strony www",
  "Social Media",
  "Kampanie",
  "Branding",
  "E-commerce",
];

const projects = [
  {
    id: "enea-stadion",
    title: "Enea Stadion Poznań",
    category: "Social Media",
    description: "Kompleksowa strategia marketingowa dla największego stadionu w Polsce. Social media, content video i kampanie eventowe.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005",
    featured: true,
    hasCase: true,
  },
  {
    id: "fps-cegielski",
    title: "FPS Poznań (Cegielski)",
    category: "Strony www",
    description: "Nowoczesna strona internetowa dla historycznej fabryki z Poznania.",
    image: "https://fotz.pl/wp-content/uploads/2024/10/Cegielski-Mockup-Strona-Internetowa.png",
    featured: false,
    hasCase: false,
  },
  {
    id: "rppg",
    title: "RPPG Group",
    category: "Branding",
    description: "Kompleksowy rebranding i nowa identyfikacja wizualna dla grupy kapitałowej.",
    image: "https://fotz.pl/wp-content/uploads/2025/09/243-900x604.png",
    featured: false,
    hasCase: false,
  },
  {
    id: "fabryka-virali",
    title: "Fabryka Virali",
    category: "Social Media",
    description: "Strategia content marketingowa i produkcja materiałów viralowych.",
    image: "https://fotz.pl/wp-content/uploads/2025/09/161-900x604.png",
    featured: false,
    hasCase: false,
  },
  {
    id: "cute-dumpling",
    title: "Cute as a Dumpling",
    category: "E-commerce",
    description: "Sklep internetowy z ozdobami świątecznymi. Design, UX i integracje.",
    image: "https://fotz.pl/wp-content/uploads/2023/12/sklep-internetowy-ozdoby-swiateczne.png",
    featured: false,
    hasCase: false,
  },
  {
    id: "apartamenty-chorwacja",
    title: "Apartamenty Chorwacja",
    category: "Strony www",
    description: "Strona internetowa dla apartamentów na wynajem w Chorwacji z systemem rezerwacji.",
    image: "https://fotz.pl/wp-content/uploads/2024/01/strona-internetowa-dla-apartamentow-na-wynajem-w-chorwacji.jpg",
    featured: false,
    hasCase: false,
  },
  {
    id: "friendly-gas",
    title: "Friendly Gas",
    category: "Branding",
    description: "Branding i materiały marketingowe dla firmy z branży energetycznej.",
    image: "https://fotz.pl/wp-content/uploads/2024/01/414977980_1110097133325860_6750300148456478270_n.png",
    featured: false,
    hasCase: false,
  },
  {
    id: "verthe",
    title: "Verthé Fashion",
    category: "E-commerce",
    description: "Strategia e-commerce i kampanie performance dla marki premium fashion.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    featured: false,
    hasCase: false,
  },
];

export default function Realizacje() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filteredProjects =
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Featured Project - Enea Stadion */}
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/realizacje/enea-stadion"
              className="group block rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto lg:min-h-[450px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005"
                    alt="Enea Stadion Poznań"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/30"
                    >
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Główna realizacja
                    </span>
                    <span className="text-muted-foreground text-sm">
                      Social Media & Events
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                    Enea Stadion Poznań
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    Kompleksowa obsługa marketingowa największego kompleksu sportowego 
                    w Polsce. Strona www, prowadzenie Instagrama, produkcja video.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 rounded-xl bg-secondary/50">
                      <div className="text-2xl font-heading font-bold text-gradient">+340%</div>
                      <div className="text-xs text-muted-foreground">Zaangażowanie</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-secondary/50">
                      <div className="text-2xl font-heading font-bold text-gradient">150K+</div>
                      <div className="text-xs text-muted-foreground">Followersi</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-secondary/50">
                      <div className="text-2xl font-heading font-bold text-gradient">12+</div>
                      <div className="text-xs text-muted-foreground">Miesięcy</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Zobacz pełne case study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
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
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {project.hasCase ? (
                  <Link
                    to={`/realizacje/${project.id}`}
                    className="group block rounded-2xl overflow-hidden bg-secondary h-full"
                  >
                    <ProjectCard project={project} />
                  </Link>
                ) : (
                  <div className="group block rounded-2xl overflow-hidden bg-secondary h-full cursor-default">
                    <ProjectCard project={project} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
      </div>
      <div className="p-6">
        <span className="text-primary text-sm font-medium">
          {project.category}
        </span>
        <h3 className="text-xl font-heading font-bold mt-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
          {project.description}
        </p>
        {project.hasCase && (
          <div className="flex items-center gap-2 text-primary font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Zobacz case study</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </>
  );
}
