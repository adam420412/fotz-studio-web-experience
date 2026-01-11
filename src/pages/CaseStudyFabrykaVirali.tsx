import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Video, Shield, Smartphone, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";
import fabrykaViraliImg from "@/assets/portfolio/fabryka-virali.png";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Video, label: "Reklama video" },
];

const challenges = [
  "Brak jasnej hierarchii treści (cennik, portfolio, kontakt)",
  "Zbyt ogólnikowa prezentacja - brak szczegółów współpracy",
  "Niewystarczająca widoczność cennika",
  "Ograniczone interakcje i CTA",
  "Brak wyraźnego procesu współpracy",
];

const results = [
  { metric: "Orientacja", value: "100%", description: "Lepsza nawigacja użytkowników" },
  { metric: "Zapytania", value: "+80%", description: "Wzrost dzięki CTA 'Bezpłatna konsultacja'" },
  { metric: "Wizerunek", value: "Spójny", description: "Profesjonalny brand marki" },
];

const CaseStudyFabrykaVirali = () => {
  return (
    <Layout>
      <Helmet>
        <title>Fabryka Virali - Agencja Marketingowa | Case Study | Fotz Studio</title>
        <meta name="description" content="Realizacja strony internetowej dla Fabryki Virali - agencji social media. Przejrzysty cennik, portfolio i optymalizacja konwersji." />
        <link rel="canonical" href="https://fotz.pl/realizacje/fabryka-virali" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Realizacje", url: "https://fotz.pl/realizacje" },
        { name: "Fabryka Virali", url: "https://fotz.pl/realizacje/fabryka-virali" }
      ]} />
      <ArticleSchema
        title="Fabryka Virali - Agencja Marketingowa - Case Study"
        description="Realizacja strony internetowej dla Fabryki Virali - agencji social media."
        author="Fotz Studio"
        datePublished="2024-04-10"
        dateModified="2026-01-09"
        image="https://fotz.pl/og-image.jpg"
        url="https://fotz.pl/realizacje/fabryka-virali"
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
                Social Media • SEO • Video
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Fabryka <span className="text-gradient-premium">Virali</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Kompleksowa strona internetowa dla agencji marketingowej specjalizującej się w kampaniach viralowych. 
                Projekt skupiony na przejrzystej prezentacji usług, cennika i procesu współpracy.
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
                <img src={fabrykaViraliImg} alt="Fabryka Virali - strona internetowa" className="w-full" />
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
                <h3 className="font-heading font-bold text-xl mb-3">Analiza zapytań klientów</h3>
                <p className="text-foreground/70">
                  Badanie najczęstszych pytań klientów: proces współpracy, ceny, portfolio, rezultaty.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Nowoczesny design</h3>
                <p className="text-foreground/70">
                  Przejrzyste menu: Start, O nas, Portfolio, FAQ, Cennik, Kontakt. 
                  Logiczna struktura informacji.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Optymalizacja SEO</h3>
                <p className="text-foreground/70">
                  Dodanie GIFów, zdjęć i przykładów virali. Optymalizacja pod słowa kluczowe branży.
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
                <h3 className="font-heading font-bold text-xl mb-3">Widoczny cennik</h3>
                <p className="text-foreground/70">
                  Wyeksponowana sekcja cennikowa i wyraźny przycisk "Bezpłatna konsultacja".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Responsywność</h3>
                <p className="text-foreground/70">
                  Pełna responsywność na wszystkich urządzeniach.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">UX/UI</h3>
                <p className="text-foreground/70">
                  Czytelne CTA, spójna typografia, wysokiej jakości zdjęcia i ikony social media.
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

export default CaseStudyFabrykaVirali;
