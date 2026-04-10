import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Video, Shield, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";
import rppgImg from "@/assets/portfolio/rppg.png";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Zap, label: "Interaktywny globus 3D" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Video, label: "Reklama video" },
];

const challenges = [
  "Niewystarczająca treść dotycząca szczegółów organizacyjnych",
  "Niejasne grupowanie sekcji 'O nas', 'Członkowie', 'Postulaty'",
  "Płaska nawigacja utrudniająca poruszanie się",
  "Brak wyróżnionych aktualności i wydarzeń",
  "Brak jasnej propozycji wartości dla potencjalnych członków",
  "Strona nieprzystosowana do promocji kampanii",
];

const results = [
  { metric: "Architektura", value: "Nowa", description: "Przejrzysta struktura strony" },
  { metric: "Zaangażowanie", value: "+45%", description: "Wzrost uczestnictwa w wydarzeniach" },
  { metric: "Zapytania", value: "+60%", description: "Więcej wniosków o członkostwo" },
];

const CaseStudyRPPG = () => {
  return (
    <Layout>
      <SEOHead
        title="RPPG — Strona dla Organizacji Przedsiębiorców Globalnych | Case Study Fotz Studio"
        description="Case study RPPG Rada Polskich Przedsiębiorców Globalnych: strona internetowa dla organizacji biznesowej. Design i UX. Fotz Studio."
        canonical="https://fotz.pl/realizacje/rppg"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Realizacje", url: "https://fotz.pl/realizacje" },
        { name: "RPPG", url: "https://fotz.pl/realizacje/rppg" }
      ]} />
      <ArticleSchema
        title="RPPG - Rada Polskich Przedsiębiorców Globalnych - Case Study"
        description="Realizacja strony internetowej dla RPPG z interaktywnym globusem 3D."
        author="Fotz Studio"
        datePublished="2024-05-20"
        dateModified="2026-01-09"
        image="https://fotz.pl/og-image.jpg"
        url="https://fotz.pl/realizacje/rppg"
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
                Strony www • SEO • Video
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                RPPG - Rada Polskich Przedsiębiorców <span className="text-gradient-premium">Globalnych</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Kompleksowa realizacja strony internetowej dla organizacji zrzeszającej polskich przedsiębiorców 
                działających na rynkach globalnych. Projekt obejmował interaktywny globus 3D, optymalizację SEO 
                i nowoczesny design wspierający cele organizacji.
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
                <img loading="lazy" src={rppgImg} alt="RPPG - strona internetowa" className="w-full" />
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
            <p className="text-foreground/70">
              Przed rozpoczęciem współpracy strona RPPG borykała się z wieloma problemami 
              utrudniającymi osiągnięcie celów organizacji.
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
                  Dogłębna analiza potrzeb przedsiębiorców i celów organizacji. Badanie konkurencji 
                  i najlepszych praktyk w branży.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Nowoczesny design</h3>
                <p className="text-foreground/70">
                  Przejrzyste menu, uporządkowane sekcje i intuicyjna nawigacja. 
                  Spójna typografia i hierarchia wizualna.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Optymalizacja SEO</h3>
                <p className="text-foreground/70">
                  Optymalizacja nagłówków, słowa kluczowe związane z ekspansją globalną 
                  i polityką biznesową.
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
                  Sekcje wydarzeń, formularz zapisu do newslettera, interaktywny globus 3D 
                  pokazujący zasięg działalności członków.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Responsywność</h3>
                <p className="text-foreground/70">
                  Pełna responsywność na wszystkich urządzeniach - desktop, tablet i mobile.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">UX/UI</h3>
                <p className="text-foreground/70">
                  Czytelne CTA, spójna typografia i optymalizacja doświadczenia użytkownika.
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

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Case study RPPG Rada Polskich Przedsiębiorców Globalnych — Strona internetowa dla organizacji biznesowej dla organizacji pozarządowych i stowarzyszeń
            </h2>
            <p className="text-muted-foreground mb-4">
              Projekt dla RPPG Rada Polskich Przedsiębiorców Globalnych to przykład, jak profesjonalne strona internetowa dla organizacji biznesowej przekłada się
              na realne wyniki biznesowe. Reprezentacyjna strona oddająca prestiż organizacji przedsiębiorców działających na rynkach globalnych. Fotz Studio realizuje podobne projekty
              dla firm z branży organizacji pozarządowych i stowarzyszeń i pokrewnych — każdorazowo z indywidualnym podejściem
              do celów i specyfiki klienta.
            </p>
            <p className="text-muted-foreground mb-6">
              Każde case study w naszym portfolio pokazuje nie tylko efekt wizualny, ale przede wszystkim
              mierzalne wyniki: wzrost ruchu organicznego, więcej zapytań ofertowych, wyższy współczynnik
              konwersji lub zwiększona sprzedaż online. Wierzymy, że marketing musi przynosić zwrot
              z inwestycji — i to udowadniamy konkretnymi liczbami.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Jak pracujemy — proces realizacji projektu od briefu do efektów
            </h2>
            <p className="text-muted-foreground mb-4">
              Każdy projekt w Fotz Studio przebiega według sprawdzonego procesu: konsultacja i brief,
              analiza rynku i konkurencji, strategia i koncepcja, projektowanie i realizacja,
              testy i wdrożenie, optymalizacja i wsparcie po-wdrożeniowe. Klient jest informowany
              o postępach na każdym etapie — żadnych niespodzianek w trakcie i po realizacji.
            </p>
            <p className="text-muted-foreground mb-6">
              Transparentność to nasz standard. Regularnie raportujemy wyniki, proaktywnie
              informujemy o problemach i rekomendujemy kolejne kroki. Długoterminowe relacje
              z klientami to nasz największy sukces — wiele firm współpracuje z nami od lat.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Potrzebujesz podobnego projektu? Sprawdź nasze usługi stron dla organizacji i stowarzyszeń
            </h2>
            <p className="text-muted-foreground">
              Jeśli szukasz partnera do realizacji projektu podobnego do RPPG Rada Polskich Przedsiębiorców Globalnych, zapraszamy
              do kontaktu. Oferujemy bezpłatną konsultację i wycenę. Fotz Studio realizuje
              projekty dla firm z całej Polski — pracujemy zdalnie z pełną efektywnością.
              Skontaktuj się z nami, by omówić Twój projekt i sprawdzić, czy możemy osiągnąć
              podobne wyniki dla Twojej firmy.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/realizacje" className="text-primary hover:underline font-medium text-sm">→ Realizacje</Link>
              <Link to="/konsultacja" className="text-primary hover:underline font-medium text-sm">→ Bezpłatna konsultacja</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default CaseStudyRPPG;
