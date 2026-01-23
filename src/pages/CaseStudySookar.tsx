import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Shield, Smartphone, Car, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";
import sookarImg from "@/assets/portfolio/sookar.jpg";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Car, label: "Katalog samochodów" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Users, label: "UX/UI Design" },
];

const challenges = [
  "Prezentacja luksusowych samochodów wymagająca premium designu",
  "Konkurencja z dużymi dealerami i portalami ogłoszeniowymi",
  "Brak systemu prezentacji pojazdów z filtrowaniem",
  "Konieczność budowania zaufania w branży premium",
  "Strona nieodpowiadająca pozycji elite car market",
];

const results = [
  { metric: "Zapytania", value: "+190%", description: "Wzrost zapytań o pojazdy" },
  { metric: "Konwersja", value: "5.8%", description: "Współczynnik konwersji" },
  { metric: "Średnia wartość", value: "+45%", description: "Wzrost średniej wartości deala" },
];

const recommendations = [
  "Implementacja wirtualnych spacerów po pojazdach 360°",
  "Dodanie systemu finansowania i leasingu online",
  "Rozbudowa sekcji z historią i certyfikatami pojazdów",
  "Integracja z systemem rezerwacji jazd testowych",
];

const CaseStudySookar = () => {
  return (
    <Layout>
      <SEOHead
        title="Sookar - Elite Car Market | Case Study | Fotz Studio"
        description="Realizacja strony internetowej dla Sookar - elite car market. Katalog samochodów luksusowych, premium design i optymalizacja SEO."
        canonical="https://fotz.pl/realizacje/sookar"
        keywords="Sookar, samochody premium, luksusowe auta, case study, strona internetowa"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Realizacje", url: "https://fotz.pl/realizacje" },
        { name: "Sookar", url: "https://fotz.pl/realizacje/sookar" }
      ]} />
      <ArticleSchema
        title="Sookar - Elite Car Market - Case Study"
        description="Realizacja strony internetowej dla Sookar - elite car market."
        author="Fotz Studio"
        datePublished="2023-10-05"
        dateModified="2026-01-09"
        image="https://fotz.pl/og-image.jpg"
        url="https://fotz.pl/realizacje/sookar"
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
                Strona www • Katalog • Premium Design
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient-premium">Sookar</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Elite car market - strona internetowa dla dealera samochodów luksusowych. 
                Premium design odzwierciedlający charakter marki, zaawansowany katalog pojazdów 
                z filtrowaniem oraz optymalizacja SEO przyciągająca klientów premium.
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
                <img src={sookarImg} alt="Sookar - strona internetowa" className="w-full" />
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
              Sookar to elite car market specjalizujący się w sprzedaży luksusowych i prestiżowych samochodów. 
              Firma oferuje starannie wyselekcjonowane pojazdy premium od czołowych marek: Mercedes-Benz, BMW, 
              Audi, Porsche i innych. Każdy samochód przechodzi szczegółową weryfikację techniczną i historii.
            </p>
            <p className="text-foreground/70 text-lg">
              Klient potrzebował strony, która odzwierciedli ekskluzywny charakter marki i skutecznie 
              przyciągnie klientów zainteresowanych zakupem luksusowego samochodu.
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
                <h3 className="font-heading font-bold text-xl mb-3">Premium design</h3>
                <p className="text-foreground/70">
                  Elegancki, minimalistyczny design z ciemną kolorystyką podkreślającą 
                  ekskluzywny charakter marki i luksusowych pojazdów.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Katalog pojazdów</h3>
                <p className="text-foreground/70">
                  Zaawansowany system prezentacji pojazdów z filtrowaniem według marki, 
                  modelu, rocznika, ceny i parametrów technicznych.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Galeria wysokiej jakości</h3>
                <p className="text-foreground/70">
                  Profesjonalne zdjęcia każdego pojazdu z możliwością powiększenia 
                  i przeglądania szczegółów wnętrza i nadwozia.
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
                <h3 className="font-heading font-bold text-xl mb-3">Karty pojazdów</h3>
                <p className="text-foreground/70">
                  Dedykowane strony dla każdego pojazdu z pełną specyfikacją, historią serwisową 
                  i możliwością szybkiego kontaktu.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">SEO premium</h3>
                <p className="text-foreground/70">
                  Optymalizacja pod kątem fraz: "luksusowe samochody", "samochody premium", 
                  "dealer Mercedes BMW Audi".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Budowanie zaufania</h3>
                <p className="text-foreground/70">
                  Sekcje z gwarancjami, certyfikatami i opiniami klientów budujące 
                  wiarygodność w branży samochodów luksusowych.
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
              Stworzymy dla Ciebie stronę, która przyciągnie klientów premium.
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

export default CaseStudySookar;
