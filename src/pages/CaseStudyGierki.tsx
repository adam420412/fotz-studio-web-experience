import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Shield, Smartphone, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { ImageLightbox } from "@/components/ImageLightbox";
import { useState } from "react";
import gierkiImg from "@/assets/portfolio/gierki.png";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";

// Gallery images
import gierkyGolf from "@/assets/gierky/gierky-golf.jpg";
import gierkyShuffleboard from "@/assets/gierky/gierky-shuffleboard.jpg";
import gierkyLounge from "@/assets/gierky/gierky-lounge.jpg";
import gierkyPinball from "@/assets/gierky/gierky-pinball.jpg";
import gierkyBar from "@/assets/gierky/gierky-bar.jpg";
import gierkyBowling from "@/assets/gierky/gierky-bowling.jpg";
import gierkyReception from "@/assets/gierky/gierky-reception.jpg";
import gierkyDarts from "@/assets/gierky/gierky-darts.jpg";
import gierkyTables from "@/assets/gierky/gierky-tables.jpg";
import gierkyHall from "@/assets/gierky/gierky-hall.jpg";

const galleryImages = [
  { src: gierkyGolf, alt: "Gierki - crazy golf i mini golf" },
  { src: gierkyShuffleboard, alt: "Gierki - shuffleboard" },
  { src: gierkyLounge, alt: "Gierki - strefa lounge" },
  { src: gierkyPinball, alt: "Gierki - automaty pinball" },
  { src: gierkyBar, alt: "Gierki - bar z drinkami" },
  { src: gierkyBowling, alt: "Gierki - kręgle i bowling" },
  { src: gierkyReception, alt: "Gierki - recepcja" },
  { src: gierkyDarts, alt: "Gierki - dart elektroniczny" },
  { src: gierkyTables, alt: "Gierki - stoły do gier" },
  { src: gierkyHall, alt: "Gierki - główna hala" },
];

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Calendar, label: "System rezerwacji" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Users, label: "UX/UI Design" },
];

const challenges = [
  "Brak intuicyjnego systemu rezerwacji stolików i atrakcji",
  "Niewystarczająca prezentacja oferty rozrywkowej",
  "Słaba widoczność w wyszukiwarkach lokalnych",
  "Strona nieprzystosowana do urządzeń mobilnych",
  "Brak integracji z systemami płatności online",
];

const results = [
  { metric: "Rezerwacje", value: "+150%", description: "Wzrost rezerwacji online" },
  { metric: "Konwersja", value: "8.5%", description: "Współczynnik konwersji strony" },
  { metric: "SEO", value: "Top 3", description: "Pozycja dla 'activity bar Poznań'" },
];

const recommendations = [
  "Integracja z systemem loyalty program dla stałych klientów",
  "Dodanie galerii zdjęć i filmów z imprez",
  "Implementacja chatbota do szybkich rezerwacji",
  "Rozbudowa sekcji eventów firmowych",
];

const CaseStudyGierki = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <Layout>
      <SEOHead
        title="Gierki Activity Bar - Case Study | Fotz Studio"
        description="Strona z systemem rezerwacji dla Gierki Poznań. SEO, responsywny design, +180% rezerwacji online."
        canonical="https://fotz.pl/realizacje/gierki"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Realizacje", url: "https://fotz.pl/realizacje" },
          { name: "Gierki", url: "https://fotz.pl/realizacje/gierki" }
        ]}
      />
      <ArticleSchema 
        title="Gierki Activity Bar - Strona z systemem rezerwacji"
        description="Case study: strona internetowa z systemem rezerwacji online dla centrum rozrywki w Poznaniu"
        url="https://fotz.pl/realizacje/gierki"
        datePublished="2024-01-10"
        dateModified="2026-01-09"
      />

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
                Strona www • Rezerwacje • SEO
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Gierki <span className="text-gradient-premium">Activity Bar</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Kompleksowa realizacja strony internetowej dla najlepszego activity baru w centrum Poznania. 
                Crazy golf, beer pong, social darts, shuffleboard i najnowsze drinki - wszystko w jednym miejscu! 
                Projekt obejmował intuicyjny system rezerwacji, optymalizację SEO i responsywny design.
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
                <img src={gierkiImg} alt="Gierki Activity Bar - strona internetowa" className="w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Client */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              O <span className="text-gradient-premium">kliencie</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-6">
              Gierki Activity Bar to miejsce, gdzie rozrywka łączy się z wyjątkowymi drinkami. Położony w sercu Poznania, 
              oferuje szeroki wachlarz atrakcji: od crazy golfa, przez beer pong, social darts, aż po shuffleboard. 
              To idealne miejsce na spotkania ze znajomymi, imprezy firmowe czy wieczory kawalerskie/panieńskie.
            </p>
            <p className="text-foreground/70 text-lg">
              Klient potrzebował strony, która nie tylko prezentuje ofertę, ale przede wszystkim umożliwia łatwe 
              rezerwacje online i zachęca do odwiedzin swoim dynamicznym, młodzieżowym charakterem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
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
              Wyzwania <span className="text-gradient-premium">przed projektem</span>
            </h2>
            <p className="text-foreground/70">
              Przed rozpoczęciem współpracy strona Gierki wymagała kompleksowej przebudowy, 
              aby sprostać oczekiwaniom nowoczesnych użytkowników.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border/30"
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
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Analiza grupy docelowej</h3>
                <p className="text-foreground/70">
                  Zbadaliśmy preferencje młodych dorosłych szukających rozrywki w Poznaniu. 
                  Zidentyfikowaliśmy kluczowe momenty decyzyjne i ścieżki rezerwacji.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Dynamiczny design</h3>
                <p className="text-foreground/70">
                  Stworzyliśmy energetyczny design z żywymi kolorami (różowy, fioletowy) oddający 
                  atmosferę zabawy i rozrywki charakterystyczną dla marki.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">System rezerwacji</h3>
                <p className="text-foreground/70">
                  Zaimplementowaliśmy intuicyjny system rezerwacji stolików i atrakcji 
                  z integracją kalendarza i płatności online.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Prezentacja oferty</h3>
                <p className="text-foreground/70">
                  Każda atrakcja otrzymała dedykowaną sekcję ze zdjęciami, opisem i możliwością 
                  bezpośredniej rezerwacji.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">SEO lokalne</h3>
                <p className="text-foreground/70">
                  Optymalizacja pod frazy lokalne: "activity bar Poznań", "beer pong Poznań", 
                  "rozrywka centrum Poznań".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Mobile-first</h3>
                <p className="text-foreground/70">
                  Responsywny design zoptymalizowany pod urządzenia mobilne - główne źródło 
                  ruchu młodych użytkowników.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-background">
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
                className="text-center p-8 rounded-2xl bg-card border border-border/30"
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

      {/* Photo Gallery */}
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
              Fotografia <span className="text-gradient-premium">wnętrz</span>
            </h2>
            <p className="text-foreground/70">
              Profesjonalna sesja fotograficzna lokalu - od recepcji przez strefę gier po bar z drinkami.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={navigateLightbox}
      />

      {/* Recommendations */}
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
              Rekomendacje na <span className="text-gradient-premium">przyszłość</span>
            </h2>
            <p className="text-foreground/70">
              Na podstawie analizy wyników i trendów rynkowych, rekomendujemy dalszy rozwój projektu.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-muted border border-border/30"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground/80">{rec}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Potrzebujesz podobnej <span className="text-gradient-premium">realizacji?</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Stworzymy dla Ciebie stronę, która przyciągnie klientów i zwiększy rezerwacje.
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

export default CaseStudyGierki;
