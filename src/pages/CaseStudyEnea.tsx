import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Eye, 
  Calendar,
  Instagram,
  Video,
  Globe,
  CheckCircle,
  Play,
  ExternalLink,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";

// Importy zdjęć Enea Stadion
import eneaTriatlon from "@/assets/enea/bydgoszcz-triatlon.png";
import eneaKoncert from "@/assets/enea/dawid-podsiadlo-koncert.jpg";
import eneaCatering from "@/assets/enea/catering-event.jpg";
import eneaKonferencja from "@/assets/enea/konferencja-event.jpg";
import eneaFajerwerki from "@/assets/enea/stadion-race-fajerwerki.jpg";
import eneaLechLounge from "@/assets/enea/lech-poznan-lounge.jpg";
import eneaGrill from "@/assets/enea/grill-event.jpg";
import eneaConferenceLeague from "@/assets/enea/conference-league.jpg";

const projectInfo = {
  title: "Enea Stadion Poznań",
  subtitle: "Kompleksowa obsługa marketingowa największego kompleksu sportowego w Polsce",
  category: "Marketing premium & Events",
  duration: "Od 2023 - obecnie",
  client: "Enea Stadion Poznań",
  location: "Poznań, Polska",
  heroImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005",
};

const stats = [
  { icon: TrendingUp, value: 340, prefix: "+", suffix: "%", label: "Wzrost zaangażowania", description: "na Instagramie rok do roku" },
  { icon: Eye, value: 2, prefix: "", suffix: "M+", label: "Wyświetleń miesięcznie", description: "średnia z ostatnich 6 miesięcy" },
  { icon: Sparkles, value: 120, prefix: "", suffix: "+", label: "Zrealizowanych eventów", description: "koncerty, mecze, konferencje" },
  { icon: Calendar, value: 12, prefix: "", suffix: "+", label: "Miesięcy współpracy", description: "i wciąż rozwijamy projekt" },
];

// Hook do animowanych liczników
function useCountUp(end: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = Date.now() + delay;
          const endTime = startTime + duration;

          const animate = () => {
            const now = Date.now();
            if (now < startTime) {
              requestAnimationFrame(animate);
              return;
            }
            if (now >= endTime) {
              setCount(end);
              return;
            }
            const progress = (now - startTime) / duration;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(end * easeOutQuart));
            requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, delay, hasAnimated]);

  return { ref, count };
}

// Komponent animowanego licznika
function AnimatedStat({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, count } = useCountUp(stat.value, 2000, index * 150);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-8 md:p-10 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <stat.icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient mb-3">
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="text-lg font-medium mb-2">{stat.label}</div>
      <div className="text-sm text-muted-foreground">{stat.description}</div>
    </motion.div>
  );
}

const challenges = [
  "Przestarzały design strony internetowej niepasujący do prestiżu obiektu",
  "Brak intuicyjnego systemu rezerwacji dla obiektów sportowych",
  "Nieuporządkowana struktura treści utrudniająca nawigację",
  "Słaba widoczność w Google na kluczowe frazy lokalne",
  "Brak spójnej komunikacji w social media",
];

const solutions = [
  {
    title: "Nowa strona internetowa",
    description: "Nowoczesny layout podkreślający prestiż kompleksu z intuicyjnym systemem rezerwacji online.",
    icon: Globe,
  },
  {
    title: "Strategia Social Media",
    description: "Prowadzenie profilu Instagram z dynamicznymi materiałami wideo, reels i relacjami z eventów.",
    icon: Instagram,
  },
  {
    title: "Produkcja Video",
    description: "Regularna produkcja spotów reklamowych, relacji z wydarzeń i materiałów promocyjnych.",
    icon: Video,
  },
];

const results = [
  "Wzrost liczby rezerwacji online o 180%",
  "Poprawa wizerunku marki wśród kibiców i firm",
  "Przejrzysta nawigacja ułatwiająca dostęp do informacji",
  "Pozycja #1 w Google na frazy lokalne",
  "Regularny content video z wysokim zaangażowaniem",
];

const galleryImages = [
  {
    src: eneaFajerwerki,
    alt: "Enea Stadion - fajerwerki i race",
    span: "col-span-2 row-span-2",
  },
  {
    src: eneaKoncert,
    alt: "Dawid Podsiadło koncert na Enea Stadion",
    span: "col-span-1",
  },
  {
    src: eneaTriatlon,
    alt: "Bydgoszcz Triathlon - Enea",
    span: "col-span-1",
  },
  {
    src: eneaConferenceLeague,
    alt: "UEFA Conference League - Lech Poznań",
    span: "col-span-2",
  },
  {
    src: eneaKonferencja,
    alt: "Konferencja i event na stadionie",
    span: "col-span-1",
  },
  {
    src: eneaCatering,
    alt: "Catering eventowy na Enea Stadion",
    span: "col-span-1",
  },
  {
    src: eneaLechLounge,
    alt: "Loża VIP Lech Poznań",
    span: "col-span-1",
  },
  {
    src: eneaGrill,
    alt: "Event grillowy na stadionie",
    span: "col-span-1",
  },
];


export default function CaseStudyEnea() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  return (
    <Layout>
      <SEOHead
        title="Enea Stadion Poznań — Kompleksowa Obsługa Marketingowa | Case Study Fotz Studio"
        description="Case study Enea Stadion Poznań: +340% zaangażowania, 2M+ wyświetleń/mc. Strona www, social media, produkcja wideo. Fotz Studio."
        canonical="https://fotz.pl/realizacje/enea-stadion"
        keywords="case study enea, realizacja marketing b2b, digital marketing energetyka"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Realizacje", url: "https://fotz.pl/realizacje" },
          { name: "Enea Stadion", url: "https://fotz.pl/realizacje/enea-stadion" }
        ]}
      />
      <ArticleSchema 
        title="Enea Stadion Poznań - Kompleksowa obsługa marketingowa"
        description="Case study: jak zwiększyliśmy zaangażowanie o 340% dla największego kompleksu sportowego w Polsce"
        url="https://fotz.pl/realizacje/enea-stadion"
        image="https://fotz.pl/videos/enea-stadion-poster.jpg"
        datePublished="2023-06-01"
        dateModified="2026-01-09"
      />
      {/* Hero Section with Video */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="/videos/enea-stadion-header.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide px-6 md:px-12 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Back Link */}
            <Link
              to="/realizacje"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Wszystkie realizacje
            </Link>

            {/* Category */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                {projectInfo.category}
              </span>
              <span className="text-muted-foreground text-sm">
                {projectInfo.duration}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 max-w-4xl">
              {projectInfo.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              {projectInfo.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Full Width */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background border-y border-border relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] bg-primary/10" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] bg-primary/5" />
        </div>
        
        <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <AnimatedStat key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Wyzwanie
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Problem, z którym przyszedł <span className="text-gradient">klient</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Enea Stadion Poznań to największy kompleks sportowy w Polsce, 
                jednak jego obecność online nie odzwierciedlała prestiżu obiektu. 
                Klient potrzebował kompleksowej transformacji cyfrowej.
              </p>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-destructive" />
                    </span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070"
                  alt="Stadion przed transformacją"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Rozwiązanie
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Nasza <span className="text-gradient">strategia</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-secondary/50 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Galeria
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Materiały <span className="text-gradient">z projektu</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImageIndex(index)}
                className={cn(
                  "relative rounded-xl overflow-hidden group cursor-pointer",
                  image.span
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Nasze Reels
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">
                Prowadzimy <span className="text-gradient">@eneastadion</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl">
                Od ponad roku tworzymy content na Instagramie Enea Stadion. 
                Dynamiczne reels z koncertów, meczów i eventów.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://instagram.com/eneastadion"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Instagram className="w-5 h-5" />
                Zobacz profil
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Instagram Reels Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="flex flex-col">
              <InstagramEmbed 
                url="https://www.instagram.com/reel/DQCNKAajM-q/" 
                className="flex-1"
              />
            </div>
            
            <div className="flex flex-col">
              <InstagramEmbed 
                url="https://www.instagram.com/reel/DPWohvwjJZl/" 
                className="flex-1"
              />
            </div>
            
            <div className="flex flex-col">
              <InstagramEmbed 
                url="https://www.instagram.com/reel/DO3BSVKDNcf/" 
                className="flex-1"
              />
            </div>

            <div className="flex flex-col">
              <InstagramEmbed 
                url="https://www.instagram.com/reel/DOjM5AKCe6O/" 
                className="flex-1"
              />
            </div>

            <div className="flex flex-col">
              <InstagramEmbed 
                url="https://www.instagram.com/reel/DK4-AjTi_P-/" 
                className="flex-1"
              />
            </div>

            <div className="flex flex-col">
              <InstagramEmbed 
                url="https://www.instagram.com/reel/DPtonLMDC8o/" 
                className="flex-1"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
                <video
                  src="/videos/enea-stadion-casestudy.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Efekty
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Rezultaty <span className="text-gradient">współpracy</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Po roku intensywnej współpracy Enea Stadion zyskał nie tylko 
                nowoczesną stronę, ale także silną obecność w social media 
                i rozpoznawalny wizerunek online.
              </p>
              <ul className="space-y-4">
                {results.map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services & Case Studies - Internal Links */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Powiązane usługi
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Jak możemy <span className="text-gradient">pomóc Twojej marce?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/social-media/obsluga" className="block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                <Instagram className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Social Media</h3>
                <p className="text-sm text-muted-foreground">Prowadzenie profili, tworzenie contentu i budowanie zaangażowanej społeczności.</p>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/uslugi/produkcja-filmow" className="block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                <Video className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Produkcja Video</h3>
                <p className="text-sm text-muted-foreground">Spoty reklamowe, relacje z eventów i materiały promocyjne dla social media.</p>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/uslugi/strony-internetowe" className="block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Strony Internetowe</h3>
                <p className="text-sm text-muted-foreground">Nowoczesne strony www z systemami rezerwacji i integracjami.</p>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-heading font-bold mb-6">
              Zobacz inne <span className="text-gradient">realizacje</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/realizacje/fps-cegielski" className="block p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">FPS Cegielski</h4>
              <p className="text-xs text-muted-foreground">Strona www dla producenta</p>
            </Link>
            <Link to="/realizacje/gierki" className="block p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">Gierki</h4>
              <p className="text-xs text-muted-foreground">Centrum rozrywki premium</p>
            </Link>
            <Link to="/realizacje/klagem" className="block p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">Klagem</h4>
              <p className="text-xs text-muted-foreground">E-commerce dla branży beauty</p>
            </Link>
            <Link to="/realizacje/rppg" className="block p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
              <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">RPPG</h4>
              <p className="text-xs text-muted-foreground">Strona dla organizacji</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Chcesz podobnych <span className="text-gradient">rezultatów?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Porozmawiajmy o Twoim projekcie. Pokażemy, jak możemy pomóc 
              Twojej marce osiągnąć podobne wyniki.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/realizacje">Zobacz inne realizacje</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox with Navigation */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer outline-none"
          >
            {/* Previous Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <p className="text-muted-foreground">{galleryImages[selectedImageIndex].alt}</p>
                <p className="text-sm text-muted-foreground/60 mt-2">
                  {selectedImageIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Case study Enea Stadion Poznań — Kompleksowa obsługa marketingowa dla sportowej i rozrywkowej
            </h2>
            <p className="text-muted-foreground mb-4">
              Projekt dla Enea Stadion Poznań to przykład, jak profesjonalne kompleksowa obsługa marketingowa przekłada się
              na realne wyniki biznesowe. Wzrost zaangażowania o 340% i ponad 2 miliony wyświetleń miesięcznie dzięki spójnej strategii content marketingu. Fotz Studio realizuje podobne projekty
              dla firm z branży sportowej i rozrywkowej i pokrewnych — każdorazowo z indywidualnym podejściem
              do celów i specyfiki klienta.
            </p>
            <p className="text-muted-foreground mb-6">
              Każde case study w naszym portfolio pokazuje nie tylko efekt wizualny, ale przede wszystkim
              mierzalne wyniki: wzrost ruchu organicznego, więcej zapytań ofertowych, wyższy współczynnik
              konwersji lub zwiększona sprzedaż online. Wierzymy, że marketing musi przynosić zwrot
              z inwestycji — i to udowadniamy konkretnymi liczbami.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Jak pracujemy — proces realizacji projektu od briefu do efektów
            </h2>
            <p className="text-muted-foreground mb-4">
              Każdy projekt w Fotz Studio przebiega według sprawdzonego procesu: konsultacja i brief,
              analiza rynku i konkurencji, strategia i koncepcja, projektowanie i realizacja,
              testy i wdrożenie, optymalizacja i wsparcie po-wdrożeniowe. Klient jest informowany
              o postępach na każdym etapie — żadnych niespodzianek w trakcie i po realizacji.
            </p>
            <p className="text-muted-foreground mb-6">
              Transparentność to nasz standard. Regularnie raportujemy wyniki, proaktywnie
              informujemy o problemach i rekomendujemy kolejne kroki. Długoterminowe relacje
              z klientami to nasz największy sukces — wiele firm współpracuje z nami od lat.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Potrzebujesz podobnego projektu? Sprawdź nasze usługi kompleksowej obsługi marketingowej
            </h2>
            <p className="text-muted-foreground">
              Jeśli szukasz partnera do realizacji projektu podobnego do Enea Stadion Poznań, zapraszamy
              do kontaktu. Oferujemy bezpłatną konsultację i wycenę. Fotz Studio realizuje
              projekty dla firm z całej Polski — pracujemy zdalnie z pełną efektywnością.
              Skontaktuj się z nami, by omówić Twój projekt i sprawdzić, czy możemy osiągnąć
              podobne wyniki dla Twojej firmy.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/realizacje" className="text-primary hover:underline font-medium text-sm">→ Realizacje</Link>
              <Link to="/konsultacja" className="text-primary hover:underline font-medium text-sm">→ Bezpłatna konsultacja</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
