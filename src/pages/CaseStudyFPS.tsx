import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Shield, Smartphone, Palette, Users, ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { useState, useCallback, useEffect } from "react";
import fpsImg from "@/assets/portfolio/fps-cegielski.png";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Palette, label: "Identyfikacja wizualna" },
];

const challenges = [
  "Nieatrakcyjny i przestarzały design",
  "Brak funkcjonalności - słaba nawigacja",
  "Strona nieprzystosowana do urządzeń mobilnych",
  "Nieczytelna prezentacja oferty technologicznej",
  "Brak nowoczesnej identyfikacji wizualnej",
];

const results = [
  { metric: "Design", value: "Nowy", description: "Nowoczesna i intuicyjna strona" },
  { metric: "Wizerunek", value: "Premium", description: "Profesjonalizm i innowacyjność" },
  { metric: "UX", value: "100%", description: "Pełna optymalizacja użytkownika" },
];

// Gallery images for the case study
const galleryImages = [
  { src: fpsImg, title: "Strona główna FPS", category: "Web Design" },
];

const CaseStudyFPS = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    setSelectedImage(prev => 
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImage(prev => 
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handlePrevious, handleNext]);
  return (
    <Layout>
      <Helmet>
        <title>FPS Fabryka Pojazdów Szynowych Poznań | Case Study | Fotz Studio</title>
        <meta name="description" content="Realizacja strony internetowej dla FPS Poznań (Cegielski) - producenta pojazdów szynowych. Nowoczesny design, identyfikacja wizualna i UX." />
      </Helmet>

      {/* Hero */}
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
          <Link to="/realizacje" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Powrót do realizacji
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Strona www • Branding • UX/UI
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                FPS Fabryka Pojazdów <span className="text-gradient-premium">Szynowych</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Kompleksowa realizacja strony internetowej dla historycznej Fabryki Pojazdów Szynowych 
                w Poznaniu (dawniej H. Cegielski). Projekt obejmował nową identyfikację wizualną, 
                nowoczesny design i pełną optymalizację UX.
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <div key={service.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
                    <service.icon className="w-4 h-4 text-primary" />
                    {service.label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-border/30">
                <img src={fpsImg} alt="FPS Poznań - strona internetowa" className="w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Wyzwania <span className="text-gradient-premium">przed projektem</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-muted border border-border/30"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <p className="text-foreground/80">{challenge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nasz <span className="text-gradient-premium">proces</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Konsultacje z klientem</h3>
                <p className="text-foreground/70">
                  Zrozumienie potrzeb biznesowych, kluczowej oferty i celów komunikacyjnych firmy.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Badania użytkowników</h3>
                <p className="text-foreground/70">
                  Analiza konkurencji, zbieranie feedbacku o starej stronie, identyfikacja problemów.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Identyfikacja wizualna</h3>
                <p className="text-foreground/70">
                  Nowa paleta kolorów, nowoczesne ikony, spójna typografia podkreślająca innowacyjność.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Wizualizacja "przed i po"</h3>
                <p className="text-foreground/70">
                  Prezentacja transformacji designu dla zatwierdzenia przez klienta.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Wireframy</h3>
                <p className="text-foreground/70">
                  Fokus na technologii i przejrzystej prezentacji oferty produktowej.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Prototypy interaktywne</h3>
                <p className="text-foreground/70">
                  Testy z użytkownikami, optymalizacja nawigacji i ścieżek konwersji.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Osiągnięte <span className="text-gradient-premium">rezultaty</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-muted border border-border/30"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-gradient-premium mb-2">
                  {result.value}
                </div>
                <div className="text-lg font-medium mb-1">{result.metric}</div>
                <p className="text-foreground/60 text-sm">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Website Presentation */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Prezentacja strony</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Zobacz <span className="text-gradient-premium">stronę w akcji</span>
            </h2>
            <p className="text-foreground/70">
              Prezentacja wideo nowej strony internetowej FPS Poznań - pokaz funkcjonalności i designu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 group">
              <video
                src="/videos/fps-poznan.mp4"
                controls
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                poster="/videos/fps-poznan.mp4#t=0.5"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Galeria <span className="text-gradient-premium">projektu</span>
            </h2>
            <p className="text-foreground/70">
              Kliknij na zdjęcie, aby zobaczyć szczegóły realizacji
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedImage(index)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-border/30"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-foreground font-semibold">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted/80 hover:bg-muted transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[90vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur-sm rounded-xl">
                <h3 className="font-semibold text-foreground">{galleryImages[selectedImage].title}</h3>
                <p className="text-sm text-muted-foreground">{galleryImages[selectedImage].category}</p>
              </div>
            </motion.div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted/80 hover:bg-muted transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-muted/80 hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Chcesz podobny <span className="text-gradient-premium">projekt?</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Porozmawiajmy o Twoich celach biznesowych i stwórzmy razem coś wyjątkowego.
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

export default CaseStudyFPS;
