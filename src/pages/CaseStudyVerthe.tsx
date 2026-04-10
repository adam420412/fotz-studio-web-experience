import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShoppingCart, Search, Video, Shield, Smartphone, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";
import vertheImg from "@/assets/portfolio/verthe.png";

const services = [
  { icon: ShoppingCart, label: "Sklep e-commerce" },
  { icon: Search, label: "SEM & SEO" },
  { icon: Video, label: "Produkcja foto/video" },
  { icon: Shield, label: "Bezpieczeństwo" },
  { icon: Smartphone, label: "Responsywność" },
  { icon: TrendingUp, label: "Optymalizacja konwersji" },
];

const challenges = [
  "Brak rozpoznawalności marki na polskim rynku",
  "Konieczność budowy zaufania do kosmetyków wegańskich",
  "Konkurencja z dużymi sieciami kosmetycznymi",
  "Prezentacja greckich składników i filozofii marki",
  "Optymalizacja procesu zakupowego dla wyższej konwersji",
];

const results = [
  { metric: "Sprzedaż", value: "+180%", description: "Wzrost sprzedaży online" },
  { metric: "ROAS", value: "4.2x", description: "Zwrot z reklam Google/Meta" },
  { metric: "AOV", value: "+35%", description: "Wzrost średniej wartości koszyka" },
];

const recommendations = [
  "Program lojalnościowy dla stałych klientów",
  "Rozbudowa contentu edukacyjnego o składnikach",
  "Kampanie influencer marketing z eko-blogerami",
  "Subskrypcyjny model zakupów kosmetyków",
];

const CaseStudyVerthe = () => {
  return (
    <Layout>
      <SEOHead
        title="Verthé — Sklep E-commerce z Kosmetykami Wegańskimi | Case Study Fotz Studio"
        description="Case study Verthé: sklep e-commerce greckich kosmetyków wegańskich. SEM, SEO, produkcja foto/video i optymalizacja konwersji. Fotz Studio."
        canonical="https://fotz.pl/realizacje/verthe"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Realizacje", url: "https://fotz.pl/realizacje" },
        { name: "Verthé", url: "https://fotz.pl/realizacje/verthe" }
      ]} />
      <ArticleSchema
        title="Verthé - Sklep E-commerce z Kosmetykami Wegańskimi - Case Study"
        description="Realizacja sklepu e-commerce dla Verthé - greckich kosmetyków wegańskich."
        author="Fotz Studio"
        datePublished="2023-12-20"
        dateModified="2026-01-09"
        image="https://fotz.pl/og-image.jpg"
        url="https://fotz.pl/realizacje/verthe"
      />

      {/* Hero */}
      <section className="pt-40 pb-16 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
            style={{ background: "hsla(120, 30%, 50%, 0.1)" }}
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
                E-commerce • SEM/SEO • Foto/Video
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient-premium">Verthé</span>
              </h1>
              <p className="text-foreground/70 text-lg mb-8">
                Kompleksowa realizacja sklepu e-commerce dla marki Verthé - greckich kosmetyków wegańskich. 
                Projekt obejmował budowę sklepu, kampanie SEM/SEO oraz profesjonalną produkcję foto/video 
                oddającą naturalny charakter produktów.
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
                <img src={vertheImg} alt="Verthé - sklep e-commerce" className="w-full" />
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
              O <span className="text-gradient-premium">marce</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-6">
              Verthé to marka kosmetyków wegańskich inspirowanych grecką tradycją i naturalnymi składnikami. 
              Produkty łączą starożytną wiedzę o pielęgnacji z nowoczesnymi, ekologicznymi formułami. 
              Marka kieruje się filozofią "Greckie kosmetyki. Wegańskie formuły."
            </p>
            <p className="text-foreground/70 text-lg">
              Celem projektu było stworzenie sklepu online, który nie tylko sprzedaje, ale przede wszystkim 
              edukuje o wartościach marki i buduje społeczność świadomych konsumentów.
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
                <h3 className="font-heading font-bold text-xl mb-3">Budowa sklepu WooCommerce</h3>
                <p className="text-foreground/70">
                  Stworzenie sklepu na platformie WooCommerce z pełną integracją płatności, 
                  wysyłki i zarządzania magazynem.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Naturalny design</h3>
                <p className="text-foreground/70">
                  Design w stonowanych, naturalnych kolorach (zieleń, beż) oddający 
                  wegański charakter marki i greckie inspiracje.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Sesja produktowa</h3>
                <p className="text-foreground/70">
                  Profesjonalna sesja foto/video produktów na tle morza i greckich krajobrazów 
                  podkreślająca pochodzenie składników.
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
                <h3 className="font-heading font-bold text-xl mb-3">Kampanie SEM</h3>
                <p className="text-foreground/70">
                  Google Ads i Meta Ads targetowane na świadomych konsumentów szukających 
                  kosmetyków wegańskich i naturalnych.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">SEO organiczne</h3>
                <p className="text-foreground/70">
                  Optymalizacja pod frazy: "kosmetyki wegańskie", "greckie kosmetyki naturalne", 
                  "ekologiczna pielęgnacja".
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted border border-border/30">
                <h3 className="font-heading font-bold text-xl mb-3">Optymalizacja konwersji</h3>
                <p className="text-foreground/70">
                  Testy A/B, uproszczony checkout, cross-selling i upselling 
                  dla maksymalizacji wartości koszyka.
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
              Planujesz sklep <span className="text-gradient-premium">e-commerce?</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Stworzymy dla Ciebie sklep, który nie tylko sprzedaje, ale buduje markę i lojalność klientów.
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
              Case study Verthé — Sklep e-commerce i marketing online dla kosmetyków naturalnych i vegan beauty
            </h2>
            <p className="text-muted-foreground mb-4">
              Projekt dla Verthé to przykład, jak profesjonalne sklep e-commerce i marketing online przekłada się
              na realne wyniki biznesowe. Kompleksowy projekt e-commerce z produkcją foto/video i kampaniami SEM/SEO przyniósł dynamiczny wzrost sprzedaży. Fotz Studio realizuje podobne projekty
              dla firm z branży kosmetyków naturalnych i vegan beauty i pokrewnych — każdorazowo z indywidualnym podejściem
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
              Potrzebujesz podobnego projektu? Sprawdź nasze usługi sklepów e-commerce i marketingu online
            </h2>
            <p className="text-muted-foreground">
              Jeśli szukasz partnera do realizacji projektu podobnego do Verthé, zapraszamy
              do kontaktu. Oferujemy bezpłatną konsultację i wycenę. Fotz Studio realizuje
              projekty dla firm z całej Polski — pracujemy zdalnie z pełną efektywnością.
              Skontaktuj się z nami, by omówić Twój projekt i sprawdzić, czy możemy osiągnąć
              podobne wyniki dla Twojej firmy.
            </p>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default CaseStudyVerthe;
