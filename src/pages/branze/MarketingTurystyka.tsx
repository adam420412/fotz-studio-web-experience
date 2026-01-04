import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Plane, ArrowRight, CheckCircle, Camera, Video, Globe, TrendingUp, MapPin, Calendar, Star, Plus, Phone } from "lucide-react";
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
    icon: Globe,
    title: "Strony dla turystyki",
    description: "Strony dla hoteli, biur podróży i atrakcji z systemem rezerwacji online.",
  },
  {
    icon: Camera,
    title: "Fotografia turystyczna",
    description: "Profesjonalne zdjęcia obiektów, destynacji i doświadczeń podróżniczych.",
  },
  {
    icon: Video,
    title: "Filmy promocyjne",
    description: "Inspirujące filmy pokazujące hotele, regiony i atrakcje turystyczne.",
  },
  {
    icon: TrendingUp,
    title: "Kampanie sezonowe",
    description: "Kampanie Google i social media dopasowane do sezonów turystycznych.",
  },
];

const customSolutions = [
  {
    icon: Calendar,
    title: "System rezerwacji",
    description: "Zintegrowany kalendarz rezerwacji z płatnościami online i automatycznymi potwierdzeniami.",
  },
  {
    icon: MapPin,
    title: "Wirtualne spacery 360°",
    description: "Interaktywne spacery po hotelach, pokojach i atrakcjach turystycznych.",
  },
  {
    icon: Star,
    title: "Zarządzanie opiniami",
    description: "System zbierania i odpowiadania na opinie z Google, Booking i TripAdvisor.",
  },
];

const benefits = [
  "Zwiększenie rezerwacji bezpośrednich o 150%",
  "Wirtualne spacery 360° po obiektach",
  "Kampanie sezonowe z wysokim ROI",
  "Integracja z systemami rezerwacyjnymi",
  "Profesjonalne zdjęcia i filmy promocyjne",
  "Zarządzanie reputacją online",
];

const faqItems = [
  {
    question: "Jak zwiększyć rezerwacje bezpośrednie w hotelu?",
    answer: "Kluczowe są: profesjonalna strona z systemem rezerwacji, kampanie Google Hotel Ads, remarketing do osób szukających noclegów, program lojalnościowy i zachęty do rezerwacji bezpośrednich (lepsze ceny, dodatkowe benefity).",
  },
  {
    question: "Ile kosztuje marketing dla hotelu?",
    answer: "Podstawowa obsługa (strona + SEO + kampanie) zaczyna się od 4000 zł/miesiąc. Pełna obsługa z produkcją foto/video, wirtualnymi spacerami i kampaniami sezonowymi to 8000-20000 zł/miesiąc.",
  },
  {
    question: "Czy robicie wirtualne spacery po hotelach?",
    answer: "Tak, tworzymy interaktywne spacery 360° po obiektach hotelowych. Goście mogą obejrzeć pokoje, restauracje, spa i otoczenie przed rezerwacją, co zwiększa konwersję.",
  },
  {
    question: "Jak zarządzać opiniami w turystyce?",
    answer: "Wdrażamy system monitoringu opinii z Google, Booking, TripAdvisor. Pomagamy w odpowiadaniu na recenzje, zachęcaniu zadowolonych gości do wystawiania opinii i rozwiązywaniu problemów.",
  },
  {
    question: "Czy pomagacie biurom podróży?",
    answer: "Tak, obsługujemy biura podróży, touroperatorów i organizatorów wycieczek. Tworzymy strony z katalogami ofert, kampanie na destynacje i content marketing podróżniczy.",
  },
];

const relatedServices = [
  { title: "Strony internetowe", href: "/strony-internetowe", description: "Strony dla hoteli" },
  { title: "Fotograf", href: "/fotograf-poznan", description: "Fotografia turystyczna" },
  { title: "Spoty reklamowe", href: "/spoty-reklamowe", description: "Filmy promocyjne" },
  { title: "Google Ads", href: "/google-ads", description: "Kampanie Hotel Ads" },
];

const MarketingTurystyka = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>Marketing dla Turystyki | Hotele, Biura Podróży | Fotz Studio</title>
        <meta name="description" content="Marketing dla turystyki - strony dla hoteli, systemy rezerwacji, wirtualne spacery 360°. Zwiększ rezerwacje bezpośrednie i buduj markę destynacji." />
        <link rel="canonical" href="https://fotz.pl/dla-kogo/turystyka" />
      </Helmet>

      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla turystyki"
        description="Kompleksowy marketing dla hoteli, biur podróży i atrakcji turystycznych"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "Turystyka", url: "https://fotz.pl/dla-kogo/turystyka" },
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
            style={{ background: "hsla(190, 71%, 27%, 0.1)" }}
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
              <Plane className="w-4 h-4" />
              <span className="text-sm font-medium">Marketing turystyczny</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Marketing dla <span className="text-gradient-premium">turystyki</span>
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-3xl">
              Pomagamy hotelom, biurom podróży i atrakcjom turystycznym zwiększać rezerwacje. 
              Wirtualne spacery 360°, kampanie sezonowe i profesjonalne zdjęcia destynacji.
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
              { value: 150, suffix: "%", label: "wzrost rezerwacji bezpośrednich" },
              { value: 40, suffix: "+", label: "obsłużonych obiektów" },
              { value: 100, suffix: "+", label: "wirtualnych spacerów" },
              { value: 5, suffix: "x", label: "ROI kampanii sezonowych" },
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
              Usługi dla <span className="text-gradient-premium">branży turystycznej</span>
            </h2>
            <p className="text-foreground/70">
              Kompleksowe rozwiązania marketingowe dla hoteli i biur podróży
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
              Systemy i narzędzia stworzone specjalnie dla branży turystycznej
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
                Rozumiemy specyfikę turystyki - sezonowość, znaczenie wizualnej prezentacji 
                i potrzebę budowania marzeń o podróżach.
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
                    alt="Apartamenty Chorwacja - case study turystyka"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm opacity-80 mb-1 block">Case Study</span>
                    <p className="text-xl font-heading font-bold mb-1">Apartamenty Chorwacja</p>
                    <p className="text-sm opacity-80">Strona i marketing dla obiektu wypoczynkowego</p>
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
      <OtherIndustries currentSlug="turystyka" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-background">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Gotowy na <span className="text-gradient-premium">więcej rezerwacji?</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy wspomóc Twój biznes turystyczny.
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

export default MarketingTurystyka;
