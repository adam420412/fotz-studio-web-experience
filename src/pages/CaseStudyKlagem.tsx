import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Shield, Smartphone, Package, Users, ExternalLink, Cuboid } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { lazy, Suspense } from "react";
import klagemImg from "@/assets/portfolio/klagem.png";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";

const ModelViewer3D = lazy(() => import("@/components/ModelViewer3D").then(module => ({ default: module.ModelViewer3D })));

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Package, label: "Konfigurator produktów" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Users, label: "UX/UI Design" },
];

const challenges = [
  "Złożona oferta modułowych systemów meblowych wymagająca przejrzystej prezentacji",
  "Brak narzędzia do wizualizacji konfiguracji produktów",
  "Niska widoczność w wyszukiwarkach dla fraz B2B",
  "Strona nieprzystosowana do urządzeń mobilnych",
  "Brak integracji z systemem zapytań ofertowych",
];

const results = [
  { metric: "Zapytania", value: "+180%", description: "Wzrost zapytań ofertowych" },
  { metric: "Konwersja", value: "6.2%", description: "Współczynnik konwersji" },
  { metric: "SEO", value: "Top 5", description: "Pozycja dla fraz branżowych" },
];

const recommendations = [
  "Rozbudowa konfiguratora o wizualizację 3D produktów",
  "Implementacja kalkulatora cen w czasie rzeczywistym",
  "Dodanie sekcji case studies z realizacjami dla klientów",
  "Integracja z systemem CRM do zarządzania leadami",
];

const CaseStudyKlagem = () => {
  return (
    <Layout>
      <SEOHead
        title="Klagem - Modułowe Systemy Meblowe | Case Study | Fotz Studio"
        description="Realizacja strony internetowej dla Klagem - producenta modułowych systemów meblowych. Konfigurator produktów 3D, SEO B2B i responsywny design."
        canonical="https://fotz.pl/realizacje/klagem"
        keywords="Klagem, meble modułowe, konfigurator 3D, case study, strona B2B, SEO"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Realizacje", url: "https://fotz.pl/realizacje" },
          { name: "Klagem", url: "https://fotz.pl/realizacje/klagem" }
        ]}
      />
      <ArticleSchema 
        title="Klagem - Konfigurator 3D i strona B2B"
        description="Case study: strona internetowa z konfiguratorem produktów 3D dla producenta mebli modułowych"
        url="https://fotz.pl/realizacje/klagem"
        image="https://fotz.pl/portfolio/klagem.png"
        datePublished="2024-03-15"
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
                Strona www • Konfigurator • SEO
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient-premium">Klagem</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Kompleksowa realizacja strony internetowej dla producenta modułowych systemów meblowych. 
                Projekt obejmował przejrzystą prezentację złożonej oferty produktowej, konfigurator 
                umożliwiający klientom dopasowanie rozwiązań do ich potrzeb oraz optymalizację SEO pod kątem rynku B2B.
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
                <img src={klagemImg} alt="Klagem - strona internetowa" className="w-full" />
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
              Klagem to producent nowoczesnych modułowych systemów meblowych, specjalizujący się w rozwiązaniach 
              dla przestrzeni biurowych, komercyjnych i przemysłowych. Firma oferuje kompleksowe podejście 
              do aranżacji wnętrz z naciskiem na funkcjonalność, estetykę i trwałość produktów.
            </p>
            <p className="text-foreground/70 text-lg">
              Klient potrzebował strony, która w przejrzysty sposób zaprezentuje rozbudowaną ofertę produktową 
              i ułatwi potencjalnym klientom B2B znalezienie odpowiednich rozwiązań dla ich potrzeb.
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
              Przed rozpoczęciem współpracy firma Klagem potrzebowała kompleksowej przebudowy 
              swojej obecności online.
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
                <h3 className="font-heading font-bold text-xl mb-3">Analiza oferty produktowej</h3>
                <p className="text-foreground/70">
                  Przeprowadziliśmy szczegółową analizę całej gamy produktów, kategoryzując je 
                  według zastosowań i grup docelowych.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Architektura informacji</h3>
                <p className="text-foreground/70">
                  Zaprojektowaliśmy intuicyjną strukturę strony umożliwiającą łatwe odnalezienie 
                  produktów według kategorii, zastosowania i parametrów technicznych.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Konfigurator produktów</h3>
                <p className="text-foreground/70">
                  Stworzyliśmy narzędzie pozwalające klientom samodzielnie konfigurować 
                  zestawy meblowe według ich potrzeb.
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
                <h3 className="font-heading font-bold text-xl mb-3">Katalog produktów</h3>
                <p className="text-foreground/70">
                  Każdy produkt otrzymał szczegółową kartę z opisami, parametrami technicznymi, 
                  zdjęciami i możliwością pobrania specyfikacji.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">SEO dla B2B</h3>
                <p className="text-foreground/70">
                  Optymalizacja pod kątem fraz branżowych: "systemy meblowe biurowe", 
                  "meble modułowe producent", "wyposażenie biur".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">System zapytań</h3>
                <p className="text-foreground/70">
                  Zaimplementowaliśmy prosty formularz zapytań ofertowych z możliwością 
                  dołączenia konfiguracji produktów.
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

      {/* 3D Configurator Section */}
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
              <Cuboid className="w-4 h-4" />
              <span className="text-sm font-medium">Konfigurator 3D</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Interaktywny <span className="text-gradient-premium">model 3D</span>
            </h2>
            <p className="text-foreground/70">
              Przykład konfiguratora produktów 3D - obracaj model myszką lub dotykiem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
              <Suspense fallback={<div className="aspect-video bg-muted animate-pulse flex items-center justify-center"><span className="text-muted-foreground">Ładowanie modelu 3D...</span></div>}>
                <ModelViewer3D modelUrl="/models/regulator-3d.glb" title="Konfigurator mebli Klagem" description="Interaktywny podgląd 3D produktu - obracaj myszką lub dotykiem" />
              </Suspense>
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="group">
                <a href="https://klagem.pl/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Zobacz konfigurator na klagem.pl
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
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
              Stworzymy dla Ciebie stronę, która skutecznie zaprezentuje Twoją ofertę B2B.
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

export default CaseStudyKlagem;
