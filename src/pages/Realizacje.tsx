import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Filter, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Import local portfolio images
import rppgImg from "@/assets/portfolio/rppg.png";
import fpsCegielskiImg from "@/assets/portfolio/fps-cegielski.png";
import fabrykaViraliImg from "@/assets/portfolio/fabryka-virali.png";
import friendlyGasImg from "@/assets/portfolio/friendly-gas-new.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";
import apartamentyChorwacjaImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import klagemImg from "@/assets/portfolio/klagem.png";
import mechanicaImg from "@/assets/portfolio/mechanica.png";
import celsjuszImg from "@/assets/portfolio/celsjusz.png";
import sookarImg from "@/assets/portfolio/sookar.jpg";
import grafImg from "@/assets/portfolio/graf-tapicerstwo.png";
import stageplanImg from "@/assets/portfolio/stageplan.jpg";
import vertheImg from "@/assets/portfolio/verthe.png";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import gierkiImg from "@/assets/portfolio/gierki.png";
import przedszkoleImg from "@/assets/portfolio/przedszkole.png";
import eneaStadionImg from "@/assets/portfolio/enea-stadion.png";

const categories = [
  "Wszystkie",
  "Strony www",
  "E-commerce",
  "Social Media",
  "Branding",
  "SEO",
  "Video",
];

const projects = [
  {
    id: "rppg",
    title: "RPPG Group",
    category: "Strony www",
    description: "Strona internetowa z interaktywnym globusem 3D, SEO i produkcja foto/video dla Rady Polskich Przedsiębiorców Globalnych.",
    image: rppgImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "enea-stadion",
    title: "Enea Stadion Poznań",
    category: "Strony www",
    description: "Kompleksowa strona internetowa z systemem rezerwacji dla największego stadionu w Polsce. UX/UI, SEO i optymalizacja.",
    image: eneaStadionImg,
    featured: true,
    hasCase: true,
  },
  {
    id: "fps-cegielski",
    title: "FPS Poznań (Cegielski)",
    category: "Strony www",
    description: "Nowoczesna strona internetowa i identyfikacja wizualna dla historycznej fabryki pojazdów szynowych.",
    image: fpsCegielskiImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "fabryka-virali",
    title: "Fabryka Virali",
    category: "Social Media",
    description: "Strona internetowa z przejrzystym cennikiem i portfolio dla agencji marketingowej.",
    image: fabrykaViraliImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "friendly-gas",
    title: "Friendly Gas",
    category: "Branding",
    description: "Strona www z systemem zamówień online, identyfikacja wizualna i SEO dla dystrybutora gazów technicznych.",
    image: friendlyGasImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "gierki",
    title: "Gierki Activity Bar",
    category: "Strony www",
    description: "Strona internetowa z systemem rezerwacji dla activity baru w centrum Poznania.",
    image: gierkiImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "przedszkole",
    title: "Przedszkole Mali Przyjaciele",
    category: "Strony www",
    description: "Strona internetowa, SEO i produkcja foto/video dla publicznego przedszkola.",
    image: przedszkoleImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "verthe",
    title: "Verthé",
    category: "E-commerce",
    description: "Sklep e-commerce z greckimi kosmetykami wegańskimi. SEM, SEO i produkcja foto/video.",
    image: vertheImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "victory-cars",
    title: "Victory Cars",
    category: "Strony www",
    description: "Strona internetowa dla dealera samochodów premium z gwarancją producenta.",
    image: victoryCarsImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "klagem",
    title: "Klagem",
    category: "Strony www",
    description: "Strona www dla firmy z modułowymi systemami meblowymi.",
    image: klagemImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "mechanica",
    title: "Mechanica",
    category: "Strony www",
    description: "Strona internetowa dla producenta urządzeń do transportu bliskiego - żurawie, suwnice.",
    image: mechanicaImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "celsjusz",
    title: "Celsjusz OZE",
    category: "Strony www",
    description: "Strona internetowa dla firmy OZE - pompy ciepła i fotowoltaika.",
    image: celsjuszImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "sookar",
    title: "Sookar",
    category: "Strony www",
    description: "Elite car market - strona internetowa dla dealera samochodów luksusowych.",
    image: sookarImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "graf-tapicerstwo",
    title: "Graf Tapicerstwo",
    category: "Strony www",
    description: "Strona www dla firmy tapicerskiej specjalizującej się w zabudowie busów.",
    image: grafImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "stageplan",
    title: "Stage Plan",
    category: "Strony www",
    description: "Strona internetowa dla firmy zajmującej się profesjonalną techniką sceniczną.",
    image: stageplanImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "cute-dumpling",
    title: "Cute as a Dumpling",
    category: "E-commerce",
    description: "Sklep internetowy z ozdobami świątecznymi. Design, UX i integracje.",
    image: cuteDumplingImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "apartamenty-chorwacja",
    title: "Apartamenty Chorwacja",
    category: "Strony www",
    description: "Strona internetowa dla apartamentów na wynajem w Chorwacji z systemem rezerwacji.",
    image: apartamentyChorwacjaImg,
    featured: false,
    hasCase: true,
  },
];

const Realizacje = () => {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects =
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProject = projects.find((p) => p.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-40 pb-16 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
            style={{ background: "hsla(336, 71%, 27%, 0.1)" }}
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4"
            >
              Portfolio
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Nasze <span className="text-gradient-premium">realizacje</span>
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl">
              Ponad 600 zrealizowanych projektów. Od stron internetowych, 
              przez e-commerce, po kompleksowe kampanie marketingowe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="section-padding pt-0 bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link
                to={`/realizacje/${featuredProject.id}`}
                className="group block"
              >
                <div className="relative rounded-3xl overflow-hidden bg-card border border-border/30 hover:border-primary/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative aspect-video lg:aspect-auto lg:min-h-[450px] overflow-hidden">
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/90 hidden lg:block" />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-brand text-white text-sm font-medium">
                          Wyróżniony projekt
                        </span>
                        <span className="text-foreground/60 text-sm">
                          {featuredProject.category}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4 group-hover:text-gradient-premium transition-colors">
                        {featuredProject.title}
                      </h2>
                      <p className="text-foreground/60 mb-6 text-lg">
                        {featuredProject.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span>Zobacz case study</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="section-padding bg-card relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[180px]"
            style={{ background: "hsla(209, 69%, 19%, 0.1)" }}
          />
        </div>

        <div className="container-wide relative z-10">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {/* Desktop Filters */}
            <div className="hidden md:flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === category
                      ? "bg-gradient-brand text-white"
                      : "bg-muted text-foreground/70 hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <div className="md:hidden">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full justify-between"
              >
                <span className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  {activeCategory}
                </span>
                {showFilters ? <X className="w-4 h-4" /> : null}
              </Button>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 flex flex-wrap gap-2"
                  >
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setShowFilters(false);
                        }}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all",
                          activeCategory === category
                            ? "bg-gradient-brand text-white"
                            : "bg-muted text-foreground/70"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/50 text-sm mb-8"
          >
            Wyświetlanie {filteredProjects.filter(p => !p.featured).length} projektów
          </motion.p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    {project.hasCase ? (
                      <Link to={`/realizacje/${project.id}`} className="group relative block rounded-2xl overflow-hidden bg-muted h-full border border-border/30 hover:border-primary/30 transition-all duration-500 hover-lift">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <span className="text-primary text-xs font-medium uppercase tracking-wider">{project.category}</span>
                          <h3 className="text-lg font-heading font-bold mt-1 group-hover:text-gradient-premium transition-colors">{project.title}</h3>
                          <p className="text-foreground/60 text-sm mt-2 line-clamp-2">{project.description}</p>
                        </div>
                      </Link>
                    ) : (
                      <div className="group relative block rounded-2xl overflow-hidden bg-muted h-full border border-border/30 hover:border-primary/30 transition-all duration-500 hover-lift">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <span className="text-primary text-xs font-medium uppercase tracking-wider">{project.category}</span>
                          <h3 className="text-lg font-heading font-bold mt-1 group-hover:text-gradient-premium transition-colors">{project.title}</h3>
                          <p className="text-foreground/60 text-sm mt-2 line-clamp-2">{project.description}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[180px]"
            style={{ background: "hsla(336, 71%, 27%, 0.12)" }}
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Twój projekt może być{" "}
              <span className="text-gradient-premium">następny</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Porozmawiajmy o tym, jak możemy pomóc Twojej firmie rosnąć.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/kontakt" className="group">
                Bezpłatna konsultacja
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Realizacje;