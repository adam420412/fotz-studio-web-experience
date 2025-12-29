import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Factory, ArrowRight, CheckCircle, Globe, Camera, Video, TrendingUp, Cog, Package, Users, Plus, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { useCountUp } from "@/hooks/useCountUp";
import { OtherIndustries } from "@/components/sections/OtherIndustries";
import fpsImg from "@/assets/portfolio/fps-cegielski.png";

const services = [
  {
    icon: Globe,
    title: "Strony dla producentów",
    description: "Profesjonalne strony B2B prezentujące produkty, możliwości produkcyjne i certyfikaty.",
  },
  {
    icon: Camera,
    title: "Fotografia przemysłowa",
    description: "Zdjęcia hal produkcyjnych, maszyn, produktów i procesów technologicznych.",
  },
  {
    icon: Video,
    title: "Filmy korporacyjne",
    description: "Produkcja filmów prezentujących zakład, procesy produkcyjne i kompetencje zespołu.",
  },
  {
    icon: TrendingUp,
    title: "Marketing B2B",
    description: "Kampanie leadowe targetowane na firmy szukające dostawców i partnerów produkcyjnych.",
  },
];

const customSolutions = [
  {
    icon: Cog,
    title: "Katalogi produktowe",
    description: "Profesjonalne katalogi online z filtrami, specyfikacjami technicznymi i systemem zapytań.",
  },
  {
    icon: Package,
    title: "Konfigurator produktów",
    description: "Interaktywny konfigurator pozwalający klientom dostosować produkty do swoich potrzeb.",
  },
  {
    icon: Users,
    title: "Portal dla dystrybutorów",
    description: "Dedykowany portal B2B z cennikami, materiałami marketingowymi i systemem zamówień.",
  },
];

const benefits = [
  "Pozyskiwanie klientów B2B i dystrybutorów",
  "Profesjonalna prezentacja możliwości produkcyjnych",
  "Filmy i zdjęcia przemysłowe najwyższej jakości",
  "Katalogi produktowe z integracją ERP",
  "Kampanie na targach i wydarzeniach branżowych",
  "Budowanie marki eksperta w branży",
];

const faqItems = [
  {
    question: "Jak pozyskiwać klientów B2B dla firmy produkcyjnej?",
    answer: "Kluczowe są: profesjonalna strona z katalogiem produktów, obecność na LinkedInie, kampanie Google Ads na frazy branżowe, uczestnictwo w targach, content marketing techniczny i referencje od kluczowych klientów.",
  },
  {
    question: "Ile kosztuje marketing dla firmy produkcyjnej?",
    answer: "Podstawowa obsługa (strona + SEO B2B) zaczyna się od 5000 zł/miesiąc. Pełna obsługa z produkcją video, katalogami i kampaniami to 10000-25000 zł/miesiąc.",
  },
  {
    question: "Czy robicie zdjęcia i filmy w halach produkcyjnych?",
    answer: "Tak, specjalizujemy się w fotografii i wideo przemysłowym. Dokumentujemy procesy produkcyjne, maszyny, produkty i zespoły. Pracujemy zgodnie z wymogami BHP zakładów.",
  },
  {
    question: "Jak stworzyć katalog produktowy online?",
    answer: "Tworzymy katalogi produktowe z zaawansowanymi filtrami, specyfikacjami technicznymi, certyfikatami i systemem zapytań ofertowych. Integrujemy z systemami ERP dla automatycznej aktualizacji.",
  },
  {
    question: "Czy pomagacie w przygotowaniu na targi?",
    answer: "Tak, oferujemy kompleksowe wsparcie targowe: materiały promocyjne, prezentacje, filmy na stanowisko, roll-upy, katalogi drukowane i kampanie lead generation przed i po targach.",
  },
];

const relatedServices = [
  { title: "Strony internetowe", href: "/strony-internetowe", description: "Strony B2B dla producentów" },
  { title: "Spoty reklamowe", href: "/spoty-reklamowe", description: "Filmy korporacyjne" },
  { title: "Wizualizacje 3D", href: "/wizualizacje-3d", description: "Renderingi produktów" },
  { title: "Identyfikacja wizualna", href: "/identyfikacja-wizualna", description: "Branding przemysłowy" },
];

const MarketingProdukcja = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>Marketing dla Produkcji i Przemysłu | B2B Industrial | Fotz Studio</title>
        <meta name="description" content="Marketing dla firm produkcyjnych - strony B2B, fotografia przemysłowa, filmy korporacyjne. Pozyskuj klientów i dystrybutorów dla swojego zakładu." />
        <link rel="canonical" href="https://fotz.pl/dla-kogo/produkcja" />
      </Helmet>

      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla produkcji i przemysłu"
        description="Kompleksowy marketing B2B dla firm produkcyjnych i przemysłowych"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "Produkcja", url: "https://fotz.pl/dla-kogo/produkcja" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="pt-40 pb-20 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
            style={{ background: "hsla(30, 71%, 27%, 0.1)" }}
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Factory className="w-4 h-4" />
              <span className="text-sm font-medium">Marketing przemysłowy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Marketing dla <span className="text-gradient-premium">produkcji i przemysłu</span>
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-3xl">
              Pomagamy firmom produkcyjnym pozyskiwać klientów B2B i dystrybutorów. 
              Profesjonalna prezentacja zakładu, katalogi produktowe i kampanie targowe.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">Zobacz realizacje</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { value: 200, suffix: "%", label: "wzrost zapytań B2B" },
              { value: 50, suffix: "+", label: "obsłużonych producentów" },
              { value: 100, suffix: "+", label: "filmów przemysłowych" },
              { value: 15, suffix: "+", label: "krajów eksportu klientów" },
            ].map((stat, index) => {
              const { ref, displayValue } = useCountUp({ end: stat.value, suffix: stat.suffix });
              return (
                <div key={index} ref={ref} className="text-center p-6 rounded-2xl bg-card border border-border/30">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-gradient-premium">
                    {displayValue}
                  </div>
                  <p className="text-foreground/60 text-sm mt-2">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Usługi dla <span className="text-gradient-premium">firm produkcyjnych</span>
            </h2>
            <p className="text-foreground/70">
              Kompleksowe rozwiązania marketingowe dla przemysłu i produkcji
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-2xl bg-background border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-foreground/60 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Dedykowane <span className="text-gradient-premium">rozwiązania</span>
            </h2>
            <p className="text-foreground/70">
              Systemy i narzędzia stworzone specjalnie dla branży przemysłowej
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {customSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{solution.title}</h3>
                  <p className="text-foreground/70">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Dlaczego warto <span className="text-gradient-premium">współpracować?</span>
              </h2>
              <p className="text-foreground/70 mb-8">
                Rozumiemy specyfikę przemysłu - długie procesy decyzyjne B2B, 
                znaczenie certyfikatów i potrzebę budowania zaufania u kontrahentów.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Link to="/case-study-fps" className="block group">
                <div className="aspect-square rounded-3xl overflow-hidden relative">
                  <img 
                    src={fpsImg} 
                    alt="FPS Cegielski - case study produkcja"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm opacity-80 mb-1 block">Case Study</span>
                    <p className="text-xl font-heading font-bold mb-1">FPS Cegielski</p>
                    <p className="text-sm opacity-80">Marketing i wideo dla przemysłu</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Powiązane <span className="text-gradient-premium">usługi</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={service.href}
                  className="block p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/50 transition-all duration-300 h-full group"
                >
                  <h3 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">{service.description}</p>
                  <ArrowRight className="w-4 h-4 text-primary mt-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Najczęściej zadawane <span className="text-gradient-premium">pytania</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-border/30 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-background hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium pr-4">{item.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="p-6 pt-0 text-foreground/70">{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <OtherIndustries currentSlug="produkcja" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-background">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Gotowy na <span className="text-gradient-premium">więcej kontraktów?</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy wspomóc rozwój Twojej firmy produkcyjnej.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/kontakt">
                Bezpłatna konsultacja
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingProdukcja;
