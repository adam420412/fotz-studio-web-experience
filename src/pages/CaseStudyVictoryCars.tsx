import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Video, Shield, Smartphone, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Car, label: "Katalog pojazdów" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Video, label: "Produkcja foto/video" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
];

const challenges = [
  "Prezentacja szerokiej gamy pojazdów premium",
  "Budowanie zaufania do dealera z gwarancją producenta",
  "Konkurencja z dużymi salonami samochodowymi",
  "Optymalizacja dla wyszukiwań lokalnych w Poznaniu",
  "Potrzeba eleganciego designu odpowiadającego klasie pojazdów",
];

const results = [
  { metric: "Zapytania", value: "+220%", description: "Wzrost zapytań o pojazdy" },
  { metric: "Czas na stronie", value: "5 min", description: "Średni czas przeglądania oferty" },
  { metric: "SEO", value: "Top 3", description: "Dla 'samochody premium Poznań'" },
];

const recommendations = [
  "Wdrożenie wirtualnych spacerów 360° po pojazdach",
  "Integracja z systemem finansowania i leasingu",
  "Chatbot do szybkich odpowiedzi na pytania klientów",
  "Rozbudowa sekcji porównywania pojazdów",
];

const CaseStudyVictoryCars = () => {
  return (
    <Layout>
      <Helmet>
        <title>Victory Cars - Dealer Samochodów Premium Poznań | Case Study | Fotz Studio</title>
        <meta name="description" content="Realizacja strony internetowej dla Victory Cars - dealera samochodów premium w Poznaniu. Katalog pojazdów, SEO i produkcja foto/video." />
        <link rel="canonical" href="https://fotz.pl/realizacje/victory-cars" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Realizacje", url: "https://fotz.pl/realizacje" },
        { name: "Victory Cars", url: "https://fotz.pl/realizacje/victory-cars" }
      ]} />
      <ArticleSchema
        title="Victory Cars - Dealer Samochodów Premium Poznań - Case Study"
        description="Realizacja strony internetowej dla Victory Cars - dealera samochodów premium."
        author="Fotz Studio"
        datePublished="2024-02-18"
        dateModified="2026-01-09"
        image="https://fotz.pl/og-image.jpg"
        url="https://fotz.pl/realizacje/victory-cars"
      />

      {/* Hero */}
      <section className="pt-40 pb-16 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
            style={{ background: "hsla(45, 80%, 50%, 0.1)" }}
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
                Strona www • Katalog • SEO
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Victory <span className="text-gradient-premium">Cars</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Elegancka strona internetowa dla Victory Cars - dealera samochodów premium z gwarancją producenta. 
                Projekt obejmował katalog pojazdów, profesjonalną sesję foto/video oraz kompleksową optymalizację SEO.
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
                <img src={victoryCarsImg} alt="Victory Cars - strona internetowa" className="w-full" />
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
              Victory Cars to niezależny dealer samochodów premium w Poznaniu, specjalizujący się w pojazdach 
              z segmentu luksusowego. Firma wyróżnia się oferowaniem samochodów z pełną gwarancją producenta, 
              co buduje zaufanie wśród wymagających klientów.
            </p>
            <p className="text-foreground/70 text-lg">
              Celem projektu było stworzenie strony, która oddaje prestiż oferowanych marek i jednocześnie 
              ułatwia klientom znalezienie wymarzonego pojazdu.
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
                <h3 className="font-heading font-bold text-xl mb-3">Elegancki design</h3>
                <p className="text-foreground/70">
                  Ciemna kolorystyka ze złotymi akcentami podkreślająca prestiż marki 
                  i klasy oferowanych pojazdów.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Katalog pojazdów</h3>
                <p className="text-foreground/70">
                  Zaawansowany system filtrowania po marce, modelu, roczniku, cenie 
                  i wyposażeniu z wysokiej jakości zdjęciami.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Sesja foto/video</h3>
                <p className="text-foreground/70">
                  Profesjonalna sesja w studiu i na zewnątrz pokazująca detale 
                  i charakter każdego pojazdu.
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
                <h3 className="font-heading font-bold text-xl mb-3">SEO lokalne</h3>
                <p className="text-foreground/70">
                  Optymalizacja pod frazy: "samochody premium Poznań", "dealer BMW Poznań", 
                  "auta luksusowe z gwarancją".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Szybki kontakt</h3>
                <p className="text-foreground/70">
                  Widoczne CTA do kontaktu, formularz zapytania przy każdym pojeździe 
                  i możliwość umówienia jazdy testowej.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Gwarancja i zaufanie</h3>
                <p className="text-foreground/70">
                  Wyeksponowanie informacji o gwarancji producenta, historii pojazdu 
                  i certyfikatach jakości.
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
              Prowadzisz salon <span className="text-gradient-premium">samochodowy?</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Stworzymy dla Ciebie stronę, która przyciągnie klientów i pomoże sprzedawać więcej pojazdów.
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

export default CaseStudyVictoryCars;
