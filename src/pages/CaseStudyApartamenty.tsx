import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Shield, Smartphone, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";
import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Calendar, label: "System rezerwacji" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Users, label: "UX/UI Design" },
];

const challenges = [
  "Konkurencja z dużymi portalami rezerwacyjnymi (Booking, Airbnb)",
  "Konieczność prezentacji lokalizacji i atrakcji okolicy",
  "Brak bezpośredniego systemu rezerwacji bez pośredników",
  "Sezonowość branży turystycznej",
  "Potrzeba budowania zaufania u zagranicznych turystów",
];

const results = [
  { metric: "Rezerwacje", value: "+180%", description: "Wzrost rezerwacji bezpośrednich" },
  { metric: "Oszczędności", value: "15%", description: "Mniejsze prowizje dzięki bezpośrednim rezerwacjom" },
  { metric: "SEO", value: "Top 5", description: "Pozycja dla 'apartamenty Chorwacja'" },
];

const recommendations = [
  "Dodanie wirtualnych spacerów 360° po apartamentach",
  "Implementacja systemu opinii i rekomendacji",
  "Rozbudowa sekcji z atrakcjami i przewodnikiem po okolicy",
  "Integracja z kalendarzem Google dla automatycznej synchronizacji",
];

const CaseStudyApartamenty = () => {
  return (
    <Layout>
      <Helmet>
        <title>Apartamenty Chorwacja - System Rezerwacji | Case Study | Fotz Studio</title>
        <meta name="description" content="Realizacja strony internetowej dla apartamentów w Chorwacji. System rezerwacji online, SEO turystyczne i responsywny design." />
        <link rel="canonical" href="https://fotz.pl/realizacje/apartamenty-chorwacja" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Realizacje", url: "https://fotz.pl/realizacje" },
        { name: "Apartamenty Chorwacja", url: "https://fotz.pl/realizacje/apartamenty-chorwacja" }
      ]} />
      <ArticleSchema
        title="Apartamenty Chorwacja - System Rezerwacji - Case Study"
        description="Realizacja strony internetowej dla apartamentów w Chorwacji z systemem rezerwacji."
        author="Fotz Studio"
        datePublished="2023-11-10"
        dateModified="2026-01-09"
        image="https://fotz.pl/og-image.jpg"
        url="https://fotz.pl/realizacje/apartamenty-chorwacja"
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
                Strona www • Rezerwacje • SEO turystyczne
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Apartamenty <span className="text-gradient-premium">Chorwacja</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Strona internetowa dla apartamentów na wynajem w Chorwacji z systemem rezerwacji. 
                Piękna prezentacja lokalizacji, intuicyjny kalendarz dostępności i bezpośrednie 
                rezerwacje bez prowizji pośredników.
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
                <img src={apartamentyImg} alt="Apartamenty Chorwacja - strona internetowa" className="w-full" />
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
              Właściciele luksusowych apartamentów na wynajem w malowniczej lokalizacji w Chorwacji. 
              Oferują komfortowe zakwaterowanie blisko plaży z pięknymi widokami na Adriatyk, 
              idealne dla rodzin i par szukających spokojnego wypoczynku.
            </p>
            <p className="text-foreground/70 text-lg">
              Klient potrzebował profesjonalnej strony, która pozwoli uniezależnić się od platform 
              rezerwacyjnych i ich wysokich prowizji, jednocześnie budując rozpoznawalność marki.
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
                <h3 className="font-heading font-bold text-xl mb-3">Inspirujący design</h3>
                <p className="text-foreground/70">
                  Jasny, wakacyjny design z dużymi zdjęciami prezentującymi piękno 
                  lokalizacji i komfort apartamentów.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Galeria apartamentów</h3>
                <p className="text-foreground/70">
                  Profesjonalne zdjęcia każdego apartamentu z opisami wyposażenia, 
                  widoków i udogodnień.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">System rezerwacji</h3>
                <p className="text-foreground/70">
                  Intuicyjny kalendarz dostępności z możliwością rezerwacji online 
                  i bezpieczną płatnością.
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
                <h3 className="font-heading font-bold text-xl mb-3">Prezentacja okolicy</h3>
                <p className="text-foreground/70">
                  Sekcja z atrakcjami turystycznymi, plażami, restauracjami 
                  i mapą z lokalizacją apartamentów.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">SEO turystyczne</h3>
                <p className="text-foreground/70">
                  Optymalizacja pod kątem fraz: "apartamenty Chorwacja", 
                  "wynajem wakacyjny Adriatyk", "noclegi Chorwacja nad morzem".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Wielojęzyczność</h3>
                <p className="text-foreground/70">
                  Strona w językach polskim, angielskim i niemieckim 
                  dla dotarcia do różnych rynków turystycznych.
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
              Stworzymy dla Ciebie stronę z systemem rezerwacji, która przyciągnie gości.
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

export default CaseStudyApartamenty;
