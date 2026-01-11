import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Video, Shield, Smartphone, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";
import friendlyGasImg from "@/assets/portfolio/friendly-gas.png";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Video, label: "Reklama video" },
  { icon: Palette, label: "Identyfikacja wizualna" },
];

const challenges = [
  "Niewystarczająca prezentacja funkcjonalności",
  "Brak intuicyjnej nawigacji",
  "Ograniczona widoczność w wyszukiwarkach (słabe SEO)",
  "Długi proces zamawiania gazu",
  "Brak integracji płatności online",
];

const results = [
  { metric: "Zamówienia", value: "+120%", description: "Wzrost liczby zamówień online" },
  { metric: "Mobile", value: "100%", description: "Pełna responsywność mobilna" },
  { metric: "SEO", value: "Top 10", description: "Pozycje w Google dla fraz lokalnych" },
];

const CaseStudyFriendlyGas = () => {
  return (
    <Layout>
      <Helmet>
        <title>Friendly Gas - Sprzedaż Gazu Online | Case Study | Fotz Studio</title>
        <meta name="description" content="Realizacja strony internetowej dla Friendly Gas - firmy sprzedającej gaz online. Intuicyjny system zamówień, płatności online i optymalizacja SEO." />
        <link rel="canonical" href="https://fotz.pl/realizacje/friendly-gas" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Realizacje", url: "https://fotz.pl/realizacje" },
        { name: "Friendly Gas", url: "https://fotz.pl/realizacje/friendly-gas" }
      ]} />
      <ArticleSchema
        title="Friendly Gas - Sprzedaż Gazu Online - Case Study"
        description="Realizacja strony internetowej dla Friendly Gas z systemem zamówień online."
        author="Fotz Studio"
        datePublished="2024-03-25"
        dateModified="2026-01-09"
        image="https://fotz.pl/og-image.jpg"
        url="https://fotz.pl/realizacje/friendly-gas"
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
                Strona www • SEO • Branding
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Friendly <span className="text-gradient-premium">Gas</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Kompleksowa realizacja strony internetowej dla firmy sprzedającej gaz online. 
                Projekt obejmował intuicyjny system zamawiania, integrację płatności online, 
                optymalizację SEO oraz stworzenie identyfikacji wizualnej.
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
                <img src={friendlyGasImg} alt="Friendly Gas - strona internetowa" className="w-full" />
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
                <h3 className="font-heading font-bold text-xl mb-3">Analiza potrzeb</h3>
                <p className="text-foreground/70">
                  Analiza potrzeb użytkowników i badanie konkurencji w branży gazowej.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Nowoczesny design</h3>
                <p className="text-foreground/70">
                  Zaufana kolorystyka, intuicyjna nawigacja i profesjonalny wygląd budujący zaufanie.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">UX/UI</h3>
                <p className="text-foreground/70">
                  Skrócona ścieżka zamawiania, czytelne CTA i optymalizacja doświadczenia użytkownika.
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
                <h3 className="font-heading font-bold text-xl mb-3">Funkcjonalności</h3>
                <p className="text-foreground/70">
                  Szybki wybór ilości gazu, integracja płatności online, kalkulatory kosztów.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Responsywność</h3>
                <p className="text-foreground/70">
                  Pełna responsywność dla użytkowników mobilnych - kluczowych w tej branży.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Optymalizacja SEO</h3>
                <p className="text-foreground/70">
                  Ulepszona struktura strony, słowa kluczowe, meta tagi i nagłówki.
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

export default CaseStudyFriendlyGas;
