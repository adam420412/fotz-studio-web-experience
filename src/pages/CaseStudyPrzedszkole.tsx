import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Globe, Search, Video, Shield, Smartphone, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import przedszkoleImg from "@/assets/portfolio/przedszkole.png";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";

const services = [
  { icon: Globe, label: "Strona internetowa" },
  { icon: Search, label: "Optymalizacja SEO" },
  { icon: Video, label: "Produkcja foto/video" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: Heart, label: "UX dla rodziców" },
];

const challenges = [
  "Przestarzały design nieodpowiadający nowoczesnym standardom",
  "Brak przejrzystej prezentacji oferty edukacyjnej",
  "Słaba widoczność w wyszukiwarkach lokalnych",
  "Niewystarczające informacje dla rodziców",
  "Brak galerii i materiałów wizualnych",
];

const results = [
  { metric: "Zapytania", value: "+200%", description: "Wzrost zapytań od rodziców" },
  { metric: "Czas na stronie", value: "4 min", description: "Średni czas wizyty" },
  { metric: "SEO", value: "Top 5", description: "Pozycja dla 'przedszkole Poznań'" },
];

const recommendations = [
  "Wdrożenie systemu elektronicznej rekrutacji online",
  "Dodanie sekcji z aktualnościami i wydarzeniami",
  "Integracja z aplikacją dla rodziców do komunikacji",
  "Rozbudowa galerii zdjęć z życia przedszkola",
];

const CaseStudyPrzedszkole = () => {
  return (
    <Layout>
      <SEOHead
        title="Przedszkole Mali Przyjaciele — Strona dla Placówki Edukacyjnej | Case Study Fotz Studio"
        description="Case study Przedszkole Mali Przyjaciele: strona internetowa dla placówki edukacyjnej. Responsywny design, SEO i zapisy online. Fotz Studio."
        canonical="https://fotz.pl/realizacje/przedszkole"
        keywords="case study edukacja, marketing dla przedszkola realizacja"
      />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://fotz.pl" }, { name: "Realizacje", url: "https://fotz.pl/realizacje" }, { name: "Przedszkole", url: "https://fotz.pl/realizacje/przedszkole" }]} />
      <ArticleSchema title="Przedszkole Mali Przyjaciele - Strona dla placówki edukacyjnej" description="Case study: strona internetowa dla przedszkola z SEO lokalnym" url="https://fotz.pl/realizacje/przedszkole" datePublished="2024-05-10" dateModified="2026-01-09" />

      {/* Hero */}
      <section className="pt-40 pb-16 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
            style={{ background: "hsla(45, 90%, 50%, 0.1)" }}
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
                Strona www • SEO • Foto/Video
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Przedszkole Mali <span className="text-gradient-premium">Przyjaciele</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Kompleksowa realizacja strony internetowej dla Publicznego Przedszkola Mali Przyjaciele. 
                Ciepły, przyjazny design, który buduje zaufanie rodziców i prezentuje bogatą ofertę edukacyjną placówki.
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
                <img loading="lazy" src={przedszkoleImg} alt="Przedszkole Mali Przyjaciele - strona internetowa" className="w-full" />
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
              O <span className="text-gradient-premium">placówce</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-6">
              Publiczne Przedszkole Mali Przyjaciele to placówka edukacyjna z wieloletnią tradycją, 
              która kładzie nacisk na wszechstronny rozwój dzieci. Przedszkole oferuje bogatą ofertę 
              zajęć dodatkowych, nowoczesne metody nauczania i przyjazną atmosferę.
            </p>
            <p className="text-foreground/70 text-lg">
              Celem projektu było stworzenie strony, która nie tylko informuje, ale przede wszystkim 
              budzi zaufanie rodziców i pokazuje przedszkole jako miejsce, gdzie ich dzieci będą się 
              rozwijać w bezpiecznym i kreatywnym środowisku.
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
                <h3 className="font-heading font-bold text-xl mb-3">Badanie potrzeb rodziców</h3>
                <p className="text-foreground/70">
                  Przeprowadziliśmy wywiady z rodzicami, aby zrozumieć, jakich informacji szukają 
                  i co jest dla nich najważniejsze przy wyborze przedszkola.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Ciepły, przyjazny design</h3>
                <p className="text-foreground/70">
                  Stworzyliśmy design w ciepłych kolorach (żółty, pomarańczowy) budujący poczucie 
                  bezpieczeństwa i radości charakterystyczne dla przedszkola.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Sesja foto/video</h3>
                <p className="text-foreground/70">
                  Zrealizowaliśmy profesjonalną sesję zdjęciową pokazującą życie przedszkola, 
                  zajęcia z dziećmi i nowoczesne sale.
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
                <h3 className="font-heading font-bold text-xl mb-3">Struktura informacji</h3>
                <p className="text-foreground/70">
                  Przejrzysta architektura informacji z sekcjami: O nas, Oferta, Kadra, 
                  Zajęcia dodatkowe, Galeria, Rekrutacja, Kontakt.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">SEO lokalne</h3>
                <p className="text-foreground/70">
                  Optymalizacja pod frazy: "przedszkole Poznań", "publiczne przedszkole", 
                  "przedszkole z zajęciami dodatkowymi".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Dostępność</h3>
                <p className="text-foreground/70">
                  Strona spełnia standardy dostępności WCAG, jest czytelna i łatwa w obsłudze 
                  dla wszystkich użytkowników.
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
              Prowadzisz placówkę <span className="text-gradient-premium">edukacyjną?</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Pomożemy Ci zbudować wizerunek online, który przyciągnie rodziców i wyróżni Twoją placówkę.
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
              Case study Przedszkole Mali Przyjaciele — Strona internetowa dla placówki edukacyjnej dla edukacji i opieki nad dziećmi
            </h2>
            <p className="text-muted-foreground mb-4">
              Projekt dla Przedszkole Mali Przyjaciele to przykład, jak profesjonalne strona internetowa dla placówki edukacyjnej przekłada się
              na realne wyniki biznesowe. Strona z systemem online zapisów dzieci uprościła administrację i zwiększyła liczbę zapytań rodziców. Fotz Studio realizuje podobne projekty
              dla firm z branży edukacji i opieki nad dziećmi i pokrewnych — każdorazowo z indywidualnym podejściem
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
              Potrzebujesz podobnego projektu? Sprawdź nasze usługi stron internetowych dla placówek edukacyjnych
            </h2>
            <p className="text-muted-foreground">
              Jeśli szukasz partnera do realizacji projektu podobnego do Przedszkole Mali Przyjaciele, zapraszamy
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

export default CaseStudyPrzedszkole;
