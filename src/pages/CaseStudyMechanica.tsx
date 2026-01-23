import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Shield, Smartphone, Factory, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import mechanicaImg from "@/assets/portfolio/mechanica.png";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Factory, label: "Katalog produktów" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Users, label: "UX/UI Design" },
];

const challenges = [
  "Skomplikowana oferta techniczna wymagająca przystępnej prezentacji",
  "Brak widoczności w wyszukiwarkach dla fraz przemysłowych",
  "Przestarzały wygląd strony nieodpowiadający pozycji lidera rynku",
  "Brak narzędzi do generowania leadów B2B",
  "Trudności w prezentacji szerokiej gamy produktów",
];

const results = [
  { metric: "Zapytania", value: "+220%", description: "Wzrost zapytań od firm" },
  { metric: "SEO", value: "Top 3", description: "Pozycja dla 'żurawie przemysłowe'" },
  { metric: "Czas na stronie", value: "+85%", description: "Dłuższy czas sesji" },
];

const recommendations = [
  "Dodanie wirtualnych spacerów po zakładzie produkcyjnym",
  "Implementacja kalkulatora udźwigu i parametrów technicznych",
  "Rozbudowa sekcji case studies z realizacjami przemysłowymi",
  "Stworzenie bazy wiedzy o normach i certyfikatach",
];

const CaseStudyMechanica = () => {
  return (
    <Layout>
      <Helmet>
        <title>Mechanica - Producent Żurawi i Suwnic | Case Study | Fotz Studio</title>
        <meta name="description" content="Realizacja strony internetowej dla Mechanica - producenta urządzeń do transportu bliskiego. Żurawie, suwnice, wciągniki. SEO i design B2B." />
        <link rel="canonical" href="https://fotz.pl/realizacje/mechanica" />
      </Helmet>
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Realizacje", url: "https://fotz.pl/realizacje" },
          { name: "Mechanica", url: "https://fotz.pl/realizacje/mechanica" }
        ]}
      />
      <ArticleSchema 
        title="Mechanica - Strona dla producenta żurawi"
        description="Case study: strona B2B z katalogiem produktów dla producenta żurawi i suwnic przemysłowych"
        url="https://fotz.pl/realizacje/mechanica"
        datePublished="2024-02-20"
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
                Strona www • Katalog • SEO B2B
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient-premium">Mechanica</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Kompleksowa realizacja strony internetowej dla producenta urządzeń do transportu bliskiego. 
                Żurawie, suwnice, wciągniki - pełna gama produktów przemysłowych zaprezentowana w sposób 
                przystępny i profesjonalny. Optymalizacja SEO pozwoliła dotrzeć do kluczowych klientów B2B.
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
                <img src={mechanicaImg} alt="Mechanica - strona internetowa" className="w-full" />
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
              Mechanica to renomowany polski producent urządzeń do transportu bliskiego z wieloletnim doświadczeniem 
              na rynku. Firma specjalizuje się w projektowaniu i produkcji żurawi, suwnic, wciągników oraz 
              kompletnych systemów przeładunkowych dla przemysłu ciężkiego.
            </p>
            <p className="text-foreground/70 text-lg">
              Klient potrzebował nowoczesnej strony, która odzwierciedli pozycję lidera na rynku i skutecznie 
              zaprezentuje szeroką gamę technicznych produktów dla wymagających klientów B2B.
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
                <h3 className="font-heading font-bold text-xl mb-3">Analiza branży przemysłowej</h3>
                <p className="text-foreground/70">
                  Dogłębne zrozumienie specyfiki branży urządzeń dźwigowych i oczekiwań klientów B2B 
                  w sektorze przemysłowym.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Profesjonalny design</h3>
                <p className="text-foreground/70">
                  Nowoczesny, przemysłowy design podkreślający solidność i profesjonalizm marki 
                  przy zachowaniu przystępności treści technicznych.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Katalog produktów</h3>
                <p className="text-foreground/70">
                  Rozbudowany katalog z parametrami technicznymi, certyfikatami i możliwością 
                  filtrowania według udźwigu, rozpiętości i zastosowania.
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
                <h3 className="font-heading font-bold text-xl mb-3">Prezentacja realizacji</h3>
                <p className="text-foreground/70">
                  Galeria zrealizowanych projektów z opisami technicznymi budująca wiarygodność 
                  i demonstrująca doświadczenie firmy.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">SEO przemysłowe</h3>
                <p className="text-foreground/70">
                  Optymalizacja pod kątem fraz: "żurawie przemysłowe producent", "suwnice bramowe", 
                  "wciągniki łańcuchowe".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Generowanie leadów</h3>
                <p className="text-foreground/70">
                  Formularze zapytań ofertowych z możliwością załączenia specyfikacji 
                  i wymagań technicznych projektu.
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
              Stworzymy dla Ciebie stronę, która profesjonalnie zaprezentuje Twoją ofertę przemysłową.
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

export default CaseStudyMechanica;
