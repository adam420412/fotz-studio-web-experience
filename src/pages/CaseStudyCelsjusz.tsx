import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Shield, Smartphone, Sun, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import celsjuszImg from "@/assets/portfolio/celsjusz.png";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Sun, label: "Prezentacja OZE" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Users, label: "UX/UI Design" },
];

const challenges = [
  "Złożona oferta OZE wymagająca przystępnego wyjaśnienia technologii",
  "Wysoka konkurencja w branży odnawialnych źródeł energii",
  "Brak narzędzi do kwalifikacji leadów i kalkulacji oszczędności",
  "Potrzeba budowania zaufania w branży z dużą liczbą nierzetelnych firm",
  "Strona nieprzystosowana do urządzeń mobilnych",
];

const results = [
  { metric: "Zapytania", value: "+250%", description: "Wzrost zapytań o wycenę" },
  { metric: "Konwersja", value: "9.2%", description: "Współczynnik konwersji" },
  { metric: "SEO", value: "Top 5", description: "Pozycja dla 'pompy ciepła'" },
];

const recommendations = [
  "Implementacja kalkulatora oszczędności energii i zwrotu inwestycji",
  "Dodanie wirtualnych prezentacji instalacji u klientów",
  "Rozbudowa sekcji edukacyjnej o OZE i dotacjach",
  "Integracja z systemem CRM do automatyzacji follow-up",
];

const CaseStudyCelsjusz = () => {
  return (
    <Layout>
      <SEOHead
        title="Celsjusz OZE — Strona dla Firmy Fotowoltaika i Pompy Ciepła | Case Study Fotz Studio"
        description="Case study: strona internetowa dla Celsjusz OZE — fotowoltaika, pompy ciepła, lead generation i SEO branży OZE. Fotz Studio."
        canonical="https://fotz.pl/realizacje/celsjusz"
      />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://fotz.pl" }, { name: "Realizacje", url: "https://fotz.pl/realizacje" }, { name: "Celsjusz", url: "https://fotz.pl/realizacje/celsjusz" }]} />
      <ArticleSchema title="Celsjusz OZE - Strona dla firmy OZE" description="Case study: strona z lead generation dla firmy oferującej pompy ciepła i fotowoltaikę" url="https://fotz.pl/realizacje/celsjusz" datePublished="2024-06-15" dateModified="2026-01-09" />

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
                Strona www • OZE • Lead Generation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Celsjusz <span className="text-gradient-premium">OZE</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Kompleksowa realizacja strony internetowej dla firmy specjalizującej się w odnawialnych źródłach energii. 
                Pompy ciepła, fotowoltaika, klimatyzacja - wszystko zaprezentowane w sposób przystępny dla klientów 
                indywidualnych i biznesowych. Skuteczna strategia SEO i lead generation.
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
                <img src={celsjuszImg} alt="Celsjusz OZE - strona internetowa" className="w-full" />
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
              Celsjusz OZE to firma specjalizująca się w kompleksowych rozwiązaniach z zakresu odnawialnych źródeł energii. 
              Oferuje pompy ciepła, instalacje fotowoltaiczne, klimatyzację oraz rekuperację dla klientów 
              indywidualnych i biznesowych w całej Polsce.
            </p>
            <p className="text-foreground/70 text-lg">
              Klient potrzebował strony, która w przystępny sposób wyjaśni złożone technologie OZE, 
              zbuduje zaufanie i skutecznie pozyska wartościowe leady od klientów zainteresowanych 
              inwestycją w odnawialne źródła energii.
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
                <h3 className="font-heading font-bold text-xl mb-3">Analiza grupy docelowej</h3>
                <p className="text-foreground/70">
                  Zidentyfikowaliśmy główne segmenty: właściciele domów jednorodzinnych, deweloperzy 
                  i firmy szukające oszczędności na energii.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Edukacyjny content</h3>
                <p className="text-foreground/70">
                  Stworzyliśmy przystępne opisy technologii, wyjaśniając korzyści pomp ciepła, 
                  fotowoltaiki i innych rozwiązań OZE.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Budowanie zaufania</h3>
                <p className="text-foreground/70">
                  Sekcje z certyfikatami, realizacjami i opiniami klientów budujące wiarygodność 
                  w branży z dużą liczbą nierzetelnych firm.
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
                  Dedykowane strony dla każdej technologii z korzyściami, zastosowaniami 
                  i możliwością szybkiego kontaktu.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">SEO lokalne i ogólnopolskie</h3>
                <p className="text-foreground/70">
                  Optymalizacja pod kątem fraz: "pompy ciepła", "fotowoltaika cena", 
                  "OZE dla domu", "dotacje na pompy ciepła".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Lead generation</h3>
                <p className="text-foreground/70">
                  Wieloetapowy formularz kwalifikujący leady według typu nieruchomości, 
                  budżetu i pilności inwestycji.
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
              Stworzymy dla Ciebie stronę, która skutecznie pozyska klientów zainteresowanych OZE.
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
              Case study Celsjusz OZE — Strona internetowa z lead generation dla OZE — fotowoltaika i pompy ciepła
            </h2>
            <p className="text-muted-foreground mb-4">
              Projekt dla Celsjusz OZE to przykład, jak profesjonalne strona internetowa z lead generation przekłada się
              na realne wyniki biznesowe. Nowa strona zoptymalizowana pod pozyskiwanie leadów z organicznego SEO i kampanii Google Ads. Fotz Studio realizuje podobne projekty
              dla firm z branży oze — fotowoltaika i pompy ciepła i pokrewnych — każdorazowo z indywidualnym podejściem
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
              Potrzebujesz podobnego projektu? Sprawdź nasze usługi stron internetowych i SEO
            </h2>
            <p className="text-muted-foreground">
              Jeśli szukasz partnera do realizacji projektu podobnego do Celsjusz OZE, zapraszamy
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

export default CaseStudyCelsjusz;
