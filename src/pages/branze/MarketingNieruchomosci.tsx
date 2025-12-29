import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Building, ArrowRight, CheckCircle, Camera, Cuboid, Users, TrendingUp, Phone, MapPin, Video, Home, Plus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { useCountUp } from "@/hooks/useCountUp";
import { OtherIndustries } from "@/components/sections/OtherIndustries";
import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";

const services = [
  {
    icon: Cuboid,
    title: "Wizualizacje 3D",
    description: "Fotorealistyczne rendery mieszkań i osiedli jeszcze przed budową.",
  },
  {
    icon: Camera,
    title: "Fotografia nieruchomości",
    description: "Profesjonalne sesje wnętrz, drone i wirtualne spacery 360°.",
  },
  {
    icon: Video,
    title: "Spoty promocyjne",
    description: "Filmowe prezentacje inwestycji i ofert premium.",
  },
  {
    icon: TrendingUp,
    title: "Kampanie lead generation",
    description: "Facebook i Google Ads generujące zapytania od kupujących.",
  },
];

const customSolutions = [
  {
    icon: Home,
    title: "Strona inwestycji",
    description: "Dedykowana strona osiedla z wizualizacjami, cennikiem mieszkań i formularzem kontaktowym.",
  },
  {
    icon: MapPin,
    title: "Wirtualne spacery",
    description: "Interaktywne spacery 360° po mieszkaniach pokazowych i częściach wspólnych.",
  },
  {
    icon: Users,
    title: "CRM dla dewelopera",
    description: "System zarządzania leadami i procesem sprzedaży nieruchomości.",
  },
];

const benefits = [
  "Wizualizacje 3D przyspieszające sprzedaż",
  "Profesjonalne zdjęcia i wideo ofert",
  "Kampanie generujące leady kupujących",
  "Strony landing page dla inwestycji",
  "Wirtualne spacery oszczędzające czas",
  "Kompleksowa obsługa marketingowa",
];

const faqItems = [
  {
    question: "Ile kosztuje wizualizacja 3D mieszkania?",
    answer: "Pojedyncza wizualizacja wnętrza to koszt 800-2000 zł. Pełna wizualizacja osiedla (zewnętrzna + wybrane mieszkania) to 8000-25000 zł w zależności od skali projektu i poziomu detali.",
  },
  {
    question: "Jak długo trwa przygotowanie materiałów dla inwestycji?",
    answer: "Kompletny pakiet (strona WWW, wizualizacje, sesja, spoty) realizujemy w 4-8 tygodni. Same wizualizacje 3D to 2-4 tygodnie, sesja zdjęciowa gotowego obiektu - 1-2 dni + obróbka.",
  },
  {
    question: "Czy pomagacie z kampaniami na Facebooku dla deweloperów?",
    answer: "Tak, prowadzimy kampanie lead generation dla deweloperów i biur nieruchomości. Średni koszt pozyskania leada to 50-150 zł w zależności od lokalizacji i segmentu cenowego.",
  },
  {
    question: "Jak działają wirtualne spacery 360?",
    answer: "Tworzymy interaktywne spacery, które można osadzić na stronie WWW i w portalach ogłoszeniowych. Klient może 'chodzić' po mieszkaniu, obracać widok i zobaczyć każdy kąt bez wychodzenia z domu.",
  },
  {
    question: "Czy obsługujecie małe biura nieruchomości?",
    answer: "Tak, mamy pakiety dostosowane do różnych budżetów - od pojedynczych sesji zdjęciowych po pełną obsługę marketingową. Współpracujemy zarówno z dużymi deweloperami jak i lokalnymi agencjami.",
  },
];

const relatedServices = [
  { title: "Wizualizacje 3D", href: "/wizualizacje-3d", description: "Fotorealistyczne rendery" },
  { title: "Spoty reklamowe", href: "/spoty-reklamowe", description: "Filmowe prezentacje" },
  { title: "Fotograf Poznań", href: "/fotograf-poznan", description: "Sesje nieruchomości" },
  { title: "Facebook Ads", href: "/facebook-ads", description: "Kampanie lead generation" },
];

const MarketingNieruchomosci = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>Marketing dla Nieruchomości | Deweloperzy, Biura, Architekci | Fotz Studio</title>
        <meta name="description" content="Marketing dla branży nieruchomości - wizualizacje 3D, spoty promocyjne, sesje zdjęciowe, kampanie lead generation. Sprzedawaj szybciej." />
        <link rel="canonical" href="https://fotz.pl/dla-kogo/nieruchomosci" />
      </Helmet>

      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla nieruchomości"
        description="Kompleksowy marketing dla deweloperów, biur nieruchomości i architektów"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "Nieruchomości", url: "https://fotz.pl/dla-kogo/nieruchomosci" },
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
            style={{ background: "hsla(200, 71%, 27%, 0.1)" }}
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
              <Building className="w-4 h-4" />
              <span className="text-sm font-medium">Marketing nieruchomości</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Marketing dla <span className="text-gradient-premium">nieruchomości</span>
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-3xl">
              Pomagamy deweloperom i biurom nieruchomości sprzedawać szybciej. 
              Wizualizacje 3D, spoty promocyjne i kampanie generujące leady.
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
              { value: 200, suffix: "+", label: "wizualizacji 3D" },
              { value: 50, suffix: "%", label: "szybsza sprzedaż" },
              { value: 30, suffix: "+", label: "deweloperów" },
              { value: 85, suffix: "zł", label: "średni koszt leada" },
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
              Usługi dla <span className="text-gradient-premium">branży nieruchomości</span>
            </h2>
            <p className="text-foreground/70">
              Kompleksowe rozwiązania marketingowe dla deweloperów i agencji
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
              Systemy i narzędzia stworzone specjalnie dla branży nieruchomości
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
                Mamy doświadczenie z projektami deweloperskimi różnej skali - 
                od pojedynczych mieszkań po całe osiedla.
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
              <Link to="/case-study-apartamenty" className="block group">
                <div className="aspect-square rounded-3xl overflow-hidden relative">
                  <img 
                    src={apartamentyImg} 
                    alt="Apartamenty Chorwacja - case study nieruchomości"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm opacity-80 mb-1 block">Case Study</span>
                    <p className="text-xl font-heading font-bold mb-1">Apartamenty Chorwacja</p>
                    <p className="text-sm opacity-80">Strona i marketing dla apartamentów premium</p>
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
      <OtherIndustries currentSlug="nieruchomosci" />

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
              Sprzedawaj nieruchomości <span className="text-gradient-premium">szybciej</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojej inwestycji.
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

export default MarketingNieruchomosci;
