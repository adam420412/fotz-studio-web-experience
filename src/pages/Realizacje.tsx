import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Filter, X, Camera, Video, Building, Users, Sparkles, MapPin, Music, Utensils, Briefcase } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ImageLightbox } from "@/components/ImageLightbox";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

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
import lauvjahImg from "@/assets/portfolio/lauvjah.png";

// Wizualizacje 3D
import viz17 from "@/assets/wizualizacje/viz-17.png";
import viz18 from "@/assets/wizualizacje/viz-18.png";
import viz19 from "@/assets/wizualizacje/viz-19.png";
import viz20 from "@/assets/wizualizacje/viz-20.png";
import viz21 from "@/assets/wizualizacje/viz-21.png";
import viz22 from "@/assets/wizualizacje/viz-22.png";

// Fotografia koncertowa
import concert1 from "@/assets/fotograf/concert-1.jpg";
import concert2 from "@/assets/fotograf/concert-2.jpg";
import concert3 from "@/assets/fotograf/concert-3.png";
import concert4 from "@/assets/fotograf/concert-4.jpg";
import concert5 from "@/assets/fotograf/concert-5.jpg";
import concert6 from "@/assets/fotograf/concert-6.jpg";
import concert7 from "@/assets/fotograf/concert-7.jpg";
import concert8 from "@/assets/fotograf/concert-8.jpg";
import concert9 from "@/assets/fotograf/concert-9.jpg";

// Fotografia eventowa
import event1 from "@/assets/fotograf/event-1.jpg";
import event2 from "@/assets/fotograf/event-2.jpg";
import event3 from "@/assets/fotograf/event-3.jpg";

// Portrety
import portrait1 from "@/assets/fotograf/portrait-1.png";
import portrait2 from "@/assets/fotograf/portrait-2.jpg";
import portrait3 from "@/assets/fotograf/portrait-3.jpg";
import portrait4 from "@/assets/fotograf/portrait-4.jpg";
import portrait5 from "@/assets/fotograf/portrait-5.png";
import portrait6 from "@/assets/fotograf/portrait-6.jpg";
import portrait7 from "@/assets/fotograf/portrait-7.png";
import portrait8 from "@/assets/fotograf/portrait-8.jpg";

// Drone / Aerial
import droneAerial from "@/assets/drone/event-aerial-view.jpg";
import droneBull from "@/assets/drone/event-bull-ride.jpg";
import droneConcert1 from "@/assets/drone/event-concert-1.jpg";
import droneConcert2 from "@/assets/drone/event-concert-2.jpg";
import dronePicnic1 from "@/assets/drone/event-picnic-1.jpg";
import dronePicnicTop from "@/assets/drone/event-picnic-top.jpg";

// Enea Stadion
import eneaTriatlon from "@/assets/enea/bydgoszcz-triatlon.png";
import eneaCatering from "@/assets/enea/catering-event.jpg";
import eneaConference from "@/assets/enea/conference-league.jpg";
import eneaPodsiadlo from "@/assets/enea/dawid-podsiadlo-koncert.jpg";
import eneaGrill from "@/assets/enea/grill-event.jpg";
import eneaKonferencja from "@/assets/enea/konferencja-event.jpg";
import eneaLounge from "@/assets/enea/lech-poznan-lounge.jpg";
import eneaFajerwerki from "@/assets/enea/stadion-race-fajerwerki.jpg";

// Gierky
import gierkyBar from "@/assets/gierky/gierky-bar.jpg";
import gierkyBowling from "@/assets/gierky/gierky-bowling.jpg";
import gierkyDarts from "@/assets/gierky/gierky-darts.jpg";
import gierkyGolf from "@/assets/gierky/gierky-golf.jpg";
import gierkyHall from "@/assets/gierky/gierky-hall.jpg";
import gierkyLounge from "@/assets/gierky/gierky-lounge.jpg";
import gierkyPinball from "@/assets/gierky/gierky-pinball.jpg";
import gierkyReception from "@/assets/gierky/gierky-reception.jpg";
import gierkyShuffleboard from "@/assets/gierky/gierky-shuffleboard.jpg";
import gierkyTables from "@/assets/gierky/gierky-tables.jpg";

// Backstage
import backstage1 from "@/assets/backstage/backstage-1.png";
import backstage2 from "@/assets/backstage/backstage-2.png";
import backstage3 from "@/assets/backstage/backstage-3.png";
import backstage4 from "@/assets/backstage/backstage-4.png";
import backstage5 from "@/assets/backstage/backstage-5.png";
import backstage6 from "@/assets/backstage/backstage-6.png";
import sessionFinal1 from "@/assets/backstage/session-final-1.png";
import sessionFinal2 from "@/assets/backstage/session-final-2.png";

const projectCategories = [
  "Wszystkie",
  "Strony www",
  "E-commerce",
  "Wizualizacje 3D",
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
  {
    id: "lauvjah",
    title: "Lauvjah Transport",
    category: "Strony www",
    description: "Strona internetowa dla firmy transportowo-spedycyjnej z flotą 343+ zestawów Euro6.",
    image: lauvjahImg,
    featured: false,
    hasCase: true,
  },
  {
    id: "viz-sypialnia",
    title: "Wizualizacja sypialni",
    category: "Wizualizacje 3D",
    description: "Fotorealistyczna wizualizacja 3D sypialni w stylu japońskim.",
    image: viz17,
    featured: false,
    hasCase: false,
  },
  {
    id: "viz-salon-schody",
    title: "Salon ze schodami (Klagem)",
    category: "Wizualizacje 3D",
    description: "Wizualizacja wnętrza salonu z nowoczesnymi schodami i meblami modułowymi Klagem.",
    image: viz18,
    featured: false,
    hasCase: false,
  },
];

// Gallery categories with images
const galleryCategories = [
  { id: "all", label: "Wszystkie", icon: Sparkles },
  { id: "concerts", label: "Koncerty", icon: Music },
  { id: "events", label: "Eventy", icon: Users },
  { id: "portraits", label: "Portrety", icon: Camera },
  { id: "drone", label: "Drona", icon: MapPin },
  { id: "enea", label: "Enea Stadion", icon: Building },
  { id: "gierky", label: "Gierky", icon: Utensils },
  { id: "backstage", label: "Backstage", icon: Video },
  { id: "3d", label: "Wizualizacje 3D", icon: Briefcase },
];

const galleryImages = [
  // Koncerty
  { src: concert1, title: "Koncert - ujęcie 1", category: "concerts" },
  { src: concert2, title: "Koncert - ujęcie 2", category: "concerts" },
  { src: concert3, title: "Koncert - ujęcie 3", category: "concerts" },
  { src: concert4, title: "Koncert - ujęcie 4", category: "concerts" },
  { src: concert5, title: "Koncert - ujęcie 5", category: "concerts" },
  { src: concert6, title: "Koncert - ujęcie 6", category: "concerts" },
  { src: concert7, title: "Koncert - ujęcie 7", category: "concerts" },
  { src: concert8, title: "Koncert - ujęcie 8", category: "concerts" },
  { src: concert9, title: "Koncert - ujęcie 9", category: "concerts" },
  
  // Eventy
  { src: event1, title: "Event firmowy", category: "events" },
  { src: event2, title: "Event korporacyjny", category: "events" },
  { src: event3, title: "Gala wieczorna", category: "events" },
  
  // Portrety
  { src: portrait1, title: "Portret biznesowy", category: "portraits" },
  { src: portrait2, title: "Portret studyjny", category: "portraits" },
  { src: portrait3, title: "Portret artystyczny", category: "portraits" },
  { src: portrait4, title: "Sesja portretowa", category: "portraits" },
  { src: portrait5, title: "Portret profesjonalny", category: "portraits" },
  { src: portrait6, title: "Headshot", category: "portraits" },
  { src: portrait7, title: "Portret lifestyle", category: "portraits" },
  { src: portrait8, title: "Portret kreatywny", category: "portraits" },
  
  // Drone
  { src: droneAerial, title: "Widok z lotu ptaka", category: "drone" },
  { src: droneBull, title: "Event - rodeo", category: "drone" },
  { src: droneConcert1, title: "Koncert z drona", category: "drone" },
  { src: droneConcert2, title: "Tłum na koncercie", category: "drone" },
  { src: dronePicnic1, title: "Piknik firmowy", category: "drone" },
  { src: dronePicnicTop, title: "Event z góry", category: "drone" },
  
  // Enea Stadion
  { src: eneaTriatlon, title: "Triatlon Bydgoszcz", category: "enea" },
  { src: eneaCatering, title: "Catering eventowy", category: "enea" },
  { src: eneaConference, title: "Liga Konferencji", category: "enea" },
  { src: eneaPodsiadlo, title: "Koncert Dawida Podsiadło", category: "enea" },
  { src: eneaGrill, title: "Event grillowy", category: "enea" },
  { src: eneaKonferencja, title: "Konferencja prasowa", category: "enea" },
  { src: eneaLounge, title: "Lech Poznań Lounge", category: "enea" },
  { src: eneaFajerwerki, title: "Fajerwerki na stadionie", category: "enea" },
  
  // Gierky
  { src: gierkyBar, title: "Bar Gierky", category: "gierky" },
  { src: gierkyBowling, title: "Strefa bowlingowa", category: "gierky" },
  { src: gierkyDarts, title: "Strefa darta", category: "gierky" },
  { src: gierkyGolf, title: "Symulator golfa", category: "gierky" },
  { src: gierkyHall, title: "Hala główna", category: "gierky" },
  { src: gierkyLounge, title: "Strefa lounge", category: "gierky" },
  { src: gierkyPinball, title: "Automaty pinball", category: "gierky" },
  { src: gierkyReception, title: "Recepcja", category: "gierky" },
  { src: gierkyShuffleboard, title: "Shuffleboard", category: "gierky" },
  { src: gierkyTables, title: "Stoły do gier", category: "gierky" },
  
  
  // Backstage
  { src: backstage1, title: "Za kulisami 1", category: "backstage" },
  { src: backstage2, title: "Za kulisami 2", category: "backstage" },
  { src: backstage3, title: "Za kulisami 3", category: "backstage" },
  { src: backstage4, title: "Za kulisami 4", category: "backstage" },
  { src: backstage5, title: "Za kulisami 5", category: "backstage" },
  { src: backstage6, title: "Za kulisami 6", category: "backstage" },
  { src: sessionFinal1, title: "Efekt końcowy 1", category: "backstage" },
  { src: sessionFinal2, title: "Efekt końcowy 2", category: "backstage" },
  
  // Wizualizacje 3D
  { src: viz17, title: "Sypialnia japońska", category: "3d" },
  { src: viz18, title: "Salon ze schodami", category: "3d" },
  { src: viz19, title: "Salon nowoczesny", category: "3d" },
  { src: viz20, title: "Loft industrialny", category: "3d" },
  { src: viz21, title: "Przestrzeń dzienna", category: "3d" },
  { src: viz22, title: "Biurko modułowe", category: "3d" },
];

const Realizacje = () => {
  const [activeProjectCategory, setActiveProjectCategory] = useState("Wszystkie");
  const [activeGalleryCategory, setActiveGalleryCategory] = useState("all");
  const [showProjectFilters, setShowProjectFilters] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects =
    activeProjectCategory === "Wszystkie"
      ? projects
      : projects.filter((project) => project.category === activeProjectCategory);

  const filteredGallery =
    activeGalleryCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeGalleryCategory);

  const featuredProject = projects.find((p) => p.featured);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Portfolio i Realizacje - Case Studies | Fotz Studio"
        description="Ponad 600 zrealizowanych projektów: strony internetowe, e-commerce, kampanie marketingowe, fotografia i produkcja video. Zobacz nasze case studies."
        canonical="https://fotz.pl/realizacje"
        keywords="portfolio, realizacje, case studies, strony internetowe przykłady, projekty marketingowe, fotografia eventowa, wizualizacje 3D"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Realizacje", url: "https://fotz.pl/realizacje" }
        ]}
      />
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
              przez e-commerce, po kompleksowe kampanie marketingowe i produkcje foto/video.
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

      {/* Projects Grid - FIRST */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Projekty <span className="text-gradient-premium">webowe i marketingowe</span>
            </h2>
          </motion.div>

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
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveProjectCategory(category)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeProjectCategory === category
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
                onClick={() => setShowProjectFilters(!showProjectFilters)}
                className="w-full justify-between"
              >
                <span className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  {activeProjectCategory}
                </span>
                {showProjectFilters ? <X className="w-4 h-4" /> : null}
              </Button>

              <AnimatePresence>
                {showProjectFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 flex flex-wrap gap-2"
                  >
                    {projectCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveProjectCategory(category);
                          setShowProjectFilters(false);
                        }}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all",
                          activeProjectCategory === category
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
            Wyświetlono {filteredProjects.length} z {projects.length} projektów
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    {project.hasCase ? (
                      <Link
                        to={`/realizacje/${project.id}`}
                        className="group block"
                      >
                        <ProjectCard project={project} />
                      </Link>
                    ) : (
                      <ProjectCard project={project} />
                    )}
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Galeria zdjęć
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Nasze <span className="text-gradient-premium">produkcje fotograficzne</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl">
              Przeglądaj nasze zdjęcia z koncertów, eventów, sesji portretowych, 
              ujęć z drona i wizualizacji 3D.
            </p>
          </motion.div>

          {/* Gallery Category Filters */}
          <div className="mb-8 overflow-x-auto pb-4">
            <div className="flex gap-2 min-w-max">
              {galleryCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveGalleryCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                    activeGalleryCategory === cat.id
                      ? "bg-gradient-brand text-white"
                      : "bg-card border border-border/50 text-foreground/70 hover:border-primary/30 hover:text-foreground"
                  )}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((image, index) => (
                <motion.div
                  key={`${image.category}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{image.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/50 text-sm mt-6 text-center"
          >
            Wyświetlono {filteredGallery.length} z {galleryImages.length} zdjęć
          </motion.p>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Produkcje Video
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Nasze <span className="text-gradient-premium">realizacje video</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/videos/autospa.mp4", title: "AutoSpa", category: "Reklama" },
              { src: "/videos/fps-poznan.mp4", title: "FPS Poznań", category: "Przemysł" },
              { src: "/videos/enea-stadion-header.mp4", title: "Enea Stadion", category: "Sport" },
              { src: "/videos/eko-kamionki.mp4", title: "Eko Kamionki", category: "Event" },
              { src: "/videos/fun-sport-stylish.mp4", title: "Fun Sport", category: "Sport" },
              { src: "/videos/fotz-reel.mp4", title: "Fotz Reel", category: "Showreel" },
            ].map((video, index) => (
              <motion.div
                key={video.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all group"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-gradient-brand text-white text-xs font-medium">
                    {video.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Chcesz dołączyć do grona{" "}
              <span className="text-gradient-premium">zadowolonych klientów?</span>
            </h2>
            <p className="text-foreground/60 text-lg mb-8">
              Porozmawiajmy o Twoim projekcie. Bezpłatna konsultacja i wycena.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt" className="group">
                Umów bezpłatną konsultację
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={filteredGallery.map(img => ({ src: img.src, alt: img.title }))}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </Layout>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    hasCase: boolean;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="relative rounded-2xl overflow-hidden bg-card border border-border/30 hover:border-primary/30 transition-all duration-500 group">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs text-primary font-medium uppercase tracking-wider">
          {project.category}
        </span>
        {project.hasCase && (
          <span className="text-xs text-foreground/40 px-2 py-0.5 rounded-full bg-muted">
            Case Study
          </span>
        )}
      </div>
      <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-gradient-premium transition-colors">
        {project.title}
      </h3>
      <p className="text-foreground/60 text-sm line-clamp-2">
        {project.description}
      </p>
      {project.hasCase && (
        <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
          <span>Zobacz szczegóły</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
        </div>
      )}
    </div>
  </div>
);

export default Realizacje;
