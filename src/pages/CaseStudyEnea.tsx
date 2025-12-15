import { Link } from "react-router-dom";
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
  ExternalLink
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  { icon: TrendingUp, value: "+340%", label: "Wzrost zaangażowania", description: "na Instagramie rok do roku" },
  { icon: Users, value: "150K+", label: "Nowych obserwujących", description: "od początku współpracy" },
  { icon: Eye, value: "2M+", label: "Wyświetleń miesięcznie", description: "średnia z ostatnich 6 miesięcy" },
  { icon: Calendar, value: "12+", label: "Miesięcy współpracy", description: "i wciąż rozwijamy projekt" },
];

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
    src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005",
    alt: "Enea Stadion - widok główny",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070",
    alt: "Stadion podczas meczu",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070",
    alt: "Kibice na trybunach",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093",
    alt: "Event na stadionie",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070",
    alt: "Nocny widok stadionu",
    span: "col-span-1",
  },
];

// Symulacja postów z Instagrama
const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=735",
    likes: "2,340",
    comments: "87",
    type: "reel",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093",
    likes: "1,892",
    comments: "54",
    type: "post",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070",
    likes: "3,120",
    comments: "102",
    type: "reel",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070",
    likes: "1,567",
    comments: "43",
    type: "post",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005",
    likes: "4,521",
    comments: "156",
    type: "reel",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070",
    likes: "2,890",
    comments: "78",
    type: "post",
  },
];

export default function CaseStudyEnea() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={projectInfo.heroImage}
            alt={projectInfo.title}
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

      {/* Stats Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-secondary/50"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
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
                  <Play className="w-12 h-12 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
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
                Social Media
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">
                Prowadzimy <span className="text-gradient">@eneastadion</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl">
                Od ponad roku tworzymy content na Instagramie Enea Stadion. 
                Dynamiczne reels, relacje z eventów i spójna komunikacja wizualna.
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

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href="https://instagram.com/eneastadion"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {post.type === "reel" && (
                  <div className="absolute top-2 right-2">
                    <Play className="w-5 h-5 text-white drop-shadow-lg" />
                  </div>
                )}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
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
              <div className="aspect-video rounded-2xl overflow-hidden bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Video case study</p>
                </div>
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
    </Layout>
  );
}
