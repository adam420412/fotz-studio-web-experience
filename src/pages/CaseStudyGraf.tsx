import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Shield, Smartphone, Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";
import grafImg from "@/assets/portfolio/graf-tapicerstwo.png";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Truck, label: "Galeria realizacji" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Users, label: "UX/UI Design" },
];

const challenges = [
  "Prezentacja specjalistycznych usług tapicerskich dla busów",
  "Niska widoczność w wyszukiwarkach dla fraz niszowych",
  "Brak narzędzi do prezentacji portfolio realizacji",
  "Konieczność budowania zaufania w branży rzemieślniczej",
  "Strona nieodpowiadająca jakości wykonywanej pracy",
];

const results = [
  { metric: "Zapytania", value: "+160%", description: "Wzrost zapytań ofertowych" },
  { metric: "SEO", value: "Top 3", description: "Pozycja dla 'tapicerstwo busów'" },
  { metric: "Konwersja", value: "7.1%", description: "Współczynnik konwersji" },
];

const recommendations = [
  "Dodanie konfiguratora zabudowy z wizualizacją 3D",
  "Implementacja systemu rezerwacji terminów",
  "Rozbudowa galerii z filtrami według typu pojazdu",
  "Stworzenie sekcji FAQ o procesie zabudowy",
];

const CaseStudyGraf = () => {
  return (
    <Layout>
      <SEOHead
        title="Graf Tapicerstwo - Zabudowa Busów | Case Study | Fotz Studio"
        description="Realizacja strony internetowej dla Graf Tapicerstwo - firmy specjalizującej się w zabudowie i tapicerowaniu busów. SEO i galeria realizacji."
        canonical="https://fotz.pl/realizacje/graf-tapicerstwo"
        keywords="Graf Tapicerstwo, zabudowa busów, tapicerstwo, kampery, case study, strona internetowa"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Realizacje", url: "https://fotz.pl/realizacje" },
        { name: "Graf Tapicerstwo", url: "https://fotz.pl/realizacje/graf-tapicerstwo" }
      ]} />
      <ArticleSchema
        title="Graf Tapicerstwo - Zabudowa Busów - Case Study"
        description="Realizacja strony internetowej dla Graf Tapicerstwo - zabudowa busów."
        author="Fotz Studio"
        datePublished="2023-09-15"
        dateModified="2026-01-09"
        image="https://fotz.pl/og-image.jpg"
        url="https://fotz.pl/realizacje/graf-tapicerstwo"
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
                Strona www • Portfolio • SEO lokalne
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Graf <span className="text-gradient-premium">Tapicerstwo</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Strona internetowa dla firmy tapicerskiej specjalizującej się w zabudowie busów i kamperów. 
                Profesjonalna prezentacja realizacji, optymalizacja SEO pod frazy niszowe i responsywny 
                design zachęcający do kontaktu.
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
                <img src={grafImg} alt="Graf Tapicerstwo - strona internetowa" className="w-full" />
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
              Graf Tapicerstwo to firma specjalizująca się w profesjonalnej zabudowie busów, kamperów i pojazdów 
              specjalistycznych. Oferuje kompleksowe usługi: od tapicerowania foteli, przez zabudowę wnętrz, 
              po pełne wyposażenie kamperów.
            </p>
            <p className="text-foreground/70 text-lg">
              Klient potrzebował strony, która zaprezentuje wysoką jakość wykonywanych prac i przyciągnie 
              klientów poszukujących specjalistycznych usług tapicerskich dla pojazdów.
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
                <h3 className="font-heading font-bold text-xl mb-3">Analiza niszy</h3>
                <p className="text-foreground/70">
                  Zidentyfikowaliśmy główne grupy docelowe: właściciele busów, miłośnicy kamperów 
                  i firmy z flotą pojazdów dostawczych.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Galeria realizacji</h3>
                <p className="text-foreground/70">
                  Profesjonalna galeria zdjęć przed/po z opisami zastosowanych materiałów 
                  i technik wykonania.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Prezentacja usług</h3>
                <p className="text-foreground/70">
                  Dedykowane sekcje dla każdego typu usługi: tapicerowanie, zabudowa kamperów, 
                  renowacja wnętrz.
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
                <h3 className="font-heading font-bold text-xl mb-3">SEO niszowe</h3>
                <p className="text-foreground/70">
                  Optymalizacja pod kątem fraz: "tapicerstwo busów", "zabudowa kampera", 
                  "tapicerowanie foteli samochodowych".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Budowanie zaufania</h3>
                <p className="text-foreground/70">
                  Sekcje z opiniami klientów, certyfikatami i informacjami o doświadczeniu 
                  w branży rzemieślniczej.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Mobile-first</h3>
                <p className="text-foreground/70">
                  Responsywny design z łatwym kontaktem telefonicznym dla klientów 
                  przeglądających stronę w trasie.
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
              Potrzebujesz podobnej <span className="text-gradient-premium">realizacji?</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Stworzymy dla Ciebie stronę, która zaprezentuje Twoje rzemiosło.
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

export default CaseStudyGraf;
