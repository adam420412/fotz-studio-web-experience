import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Sparkles, ArrowRight, CheckCircle, Calendar, Camera, Users, TrendingUp, Phone, Instagram, Scissors, Heart, Plus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { useCountUp } from "@/hooks/useCountUp";
import vertheImg from "@/assets/portfolio/verthe.png";

const services = [
  {
    icon: Calendar,
    title: "System rezerwacji online",
    description: "Booksy, własny kalendarz lub integracja - klientki umawiają się 24/7.",
  },
  {
    icon: Camera,
    title: "Sesje metamorfoz",
    description: "Profesjonalne zdjęcia przed/po, portfolio zabiegów i efektów.",
  },
  {
    icon: Instagram,
    title: "Instagram dla beauty",
    description: "Reelsy, Stories, posty - content, który przyciąga nowe klientki.",
  },
  {
    icon: TrendingUp,
    title: "SEO lokalne",
    description: "Pozycjonowanie na 'salon kosmetyczny Poznań', 'fryzjer w pobliżu'.",
  },
];

const customSolutions = [
  {
    icon: Scissors,
    title: "Portfolio zabiegów",
    description: "Galeria metamorfoz z opisami zabiegów, cenami i efektami. Przekonaj klientki do wizyty.",
  },
  {
    icon: Heart,
    title: "Program lojalnościowy",
    description: "System punktów, rabatów urodzinowych i poleceń. Buduj lojalność klientek.",
  },
  {
    icon: Users,
    title: "Szkolenia online",
    description: "Platforma kursów i szkoleń dla stylistek. Dodatkowy przychód z wiedzy.",
  },
];

const benefits = [
  "Więcej rezerwacji dzięki widoczności online",
  "Profesjonalne portfolio metamorfoz",
  "Aktywny Instagram przyciągający klientki",
  "System rezerwacji działający 24/7",
  "Budowanie społeczności wokół salonu",
  "Kampanie promocyjne na nowe zabiegi",
];

const faqItems = [
  {
    question: "Jak prowadzić Instagram salonu kosmetycznego?",
    answer: "Kluczowe są regularne posty (3-5 tygodniowo), Reelsy z metamorfozami, Stories pokazujące kulisy pracy i interakcja z obserwatorkami. Ważna jest spójna estetyka i autentyczność. Oferujemy pełną obsługę lub szkolenia dla zespołu.",
  },
  {
    question: "Ile kosztuje marketing dla salonu beauty?",
    answer: "Podstawowa obsługa (social media + Google My Business) zaczyna się od 2500 zł/miesiąc. Pełna obsługa z sesją zdjęciową, kampaniami i stroną WWW to 5000-10000 zł/miesiąc w zależności od zakresu.",
  },
  {
    question: "Czy warto inwestować w stronę WWW dla salonu?",
    answer: "Tak, strona WWW z galerią zabiegów, cennikiem i systemem rezerwacji zwiększa zaufanie i ułatwia klientkom decyzję. Sama wizytówka Google i Instagram to za mało dla profesjonalnego wizerunku.",
  },
  {
    question: "Jak zbierać opinie od klientek?",
    answer: "Automatyczne SMS po wizycie z linkiem do Google, karty z QR kodem w salonie, zachęty w social media. Ważne jest szybkie odpowiadanie na wszystkie opinie - pozytywne i negatywne.",
  },
  {
    question: "Czy robicie sesje zdjęciowe w salonie?",
    answer: "Tak, oferujemy profesjonalne sesje: portfolio zabiegów (przed/po), zdjęcia wnętrza, team building i content do social media. Sesja trwa zazwyczaj 3-5 godzin.",
  },
];

const relatedServices = [
  { title: "Fotograf Poznań", href: "/fotograf-poznan", description: "Sesje metamorfoz i portfolio" },
  { title: "Social Media", href: "/social-media", description: "Instagram i Facebook" },
  { title: "Google Maps", href: "/pozycjonowanie-google-maps", description: "Widoczność lokalna" },
  { title: "Strony internetowe", href: "/strony-internetowe", description: "Strony z rezerwacją online" },
];

const MarketingBeauty = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>Marketing dla Beauty & Wellness | Salony, SPA, Fryzjerzy | Fotz Studio</title>
        <meta name="description" content="Marketing dla salonów kosmetycznych, fryzjerskich i SPA - Instagram, systemy rezerwacji, sesje metamorfoz. Przyciągnij więcej klientek." />
        <link rel="canonical" href="https://fotz.pl/dla-kogo/beauty-wellness" />
      </Helmet>

      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla beauty & wellness"
        description="Kompleksowy marketing dla salonów kosmetycznych, fryzjerskich, SPA i fitness"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "Beauty & Wellness", url: "https://fotz.pl/dla-kogo/beauty-wellness" },
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
            style={{ background: "hsla(320, 71%, 27%, 0.1)" }}
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
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Marketing beauty</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Marketing dla <span className="text-gradient-premium">beauty & wellness</span>
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-3xl">
              Pomagamy salonom kosmetycznym, fryzjerskim i SPA przyciągać nowe klientki. 
              Instagram, systemy rezerwacji i profesjonalne sesje metamorfoz.
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
              { value: 150, suffix: "%", label: "więcej rezerwacji" },
              { value: 10, suffix: "k+", label: "obserwatorek" },
              { value: 80, suffix: "+", label: "salonów beauty" },
              { value: 4.9, suffix: "", label: "średnia ocen" },
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
              Usługi dla <span className="text-gradient-premium">salonów beauty</span>
            </h2>
            <p className="text-foreground/70">
              Kompleksowe rozwiązania marketingowe dla branży beauty
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
              Systemy i narzędzia stworzone specjalnie dla branży beauty
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
                Rozumiemy branżę beauty - Instagram, trendy, potrzeby klientek. 
                Tworzymy wizerunek, który przyciąga i buduje lojalność.
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
              <Link to="/case-study-verthe" className="block group">
                <div className="aspect-square rounded-3xl overflow-hidden relative">
                  <img 
                    src={vertheImg} 
                    alt="Verthé - case study beauty marketing"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm opacity-80 mb-1 block">Case Study</span>
                    <p className="text-xl font-heading font-bold mb-1">Verthé</p>
                    <p className="text-sm opacity-80">Branding i identyfikacja wizualna marki beauty</p>
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

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-background">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Rozwijaj swój <span className="text-gradient-premium">salon beauty</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Umów się na bezpłatną konsultację i dowiedz się, jak przyciągnąć więcej klientek.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/kontakt">
                  <Phone className="mr-2 w-4 h-4" />
                  Umów konsultację
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+48790814814">+48 790 814 814</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingBeauty;
