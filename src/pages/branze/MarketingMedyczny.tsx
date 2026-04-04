import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Heart, ArrowRight, CheckCircle, Calendar, Shield, Users, TrendingUp, Star, Phone, Stethoscope, ClipboardList, Clock, Plus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useCountUp } from "@/hooks/useCountUp";
import { OtherIndustries } from "@/components/sections/OtherIndustries";
import gabinetImg from "@/assets/medyczny/gabinet-stomatologiczny.jpg";
import konsultacjaImg from "@/assets/medyczny/konsultacja-rtg.jpg";
import poczekalniaImg from "@/assets/medyczny/poczekalnia-klinika.jpg";

const services = [
  {
    icon: Calendar,
    title: "System rezerwacji online",
    description: "Zintegrowany kalendarz wizyt z automatycznymi przypomnieniami SMS/email dla pacjentów.",
  },
  {
    icon: Shield,
    title: "Marketing zgodny z prawem",
    description: "Kampanie reklamowe zgodne z regulacjami dotyczącymi reklamy usług medycznych.",
  },
  {
    icon: Users,
    title: "Budowanie zaufania",
    description: "Strategie content marketingu budujące autorytet lekarza i placówki medycznej.",
  },
  {
    icon: TrendingUp,
    title: "SEO medyczne",
    description: "Pozycjonowanie na frazy medyczne i lokalne - 'dentysta Poznań', 'fizjoterapeuta'.",
  },
];

const customSolutions = [
  {
    icon: ClipboardList,
    title: "Panel pacjenta",
    description: "Dedykowany panel dla pacjentów z historią wizyt, wynikami badań i możliwością umawiania wizyt online.",
  },
  {
    icon: Clock,
    title: "Automatyczne przypomnienia",
    description: "System SMS i email przypominający o wizytach, redukujący nieobecności o 40%.",
  },
  {
    icon: Stethoscope,
    title: "Prezentacja specjalistów",
    description: "Profesjonalne profile lekarzy z doświadczeniem, specjalizacjami i opiniami pacjentów.",
  },
];

const benefits = [
  "Zwiększenie liczby rezerwacji online o 60%",
  "Redukcja nieobecności pacjentów o 40%",
  "Budowanie zaufania przez profesjonalny wizerunek",
  "Zgodność z regulacjami prawymi reklamy medycznej",
  "Automatyzacja procesów administracyjnych",
  "Lepsza widoczność w Google na frazy medyczne",
];

const faqItems = [
  {
    question: "Czy reklama usług medycznych jest legalna?",
    answer: "Tak, ale podlega ścisłym regulacjom. Nie można reklamować konkretnych zabiegów, obiecywać gwarancji wyleczenia ani używać wizerunku lekarza bez kontekstu edukacyjnego. Nasze kampanie są w pełni zgodne z prawem.",
  },
  {
    question: "Jak działa system rezerwacji online dla gabinetu?",
    answer: "Integrujemy kalendarz online ze stroną WWW i profilami w social media. Pacjent wybiera specjalistę, termin i potwierdza wizytę. System automatycznie wysyła przypomnienia i synchronizuje się z kalendarzem gabinetu.",
  },
  {
    question: "Ile kosztuje marketing dla gabinetu medycznego?",
    answer: "Podstawowa obsługa (strona + SEO lokalne) zaczyna się od 3000 zł/miesiąc. Pełna obsługa z systemem rezerwacji, kampaniami i content marketingiem to 6000-12000 zł/miesiąc w zależności od wielkości placówki.",
  },
  {
    question: "Jak budować zaufanie pacjentów online?",
    answer: "Kluczowe są: profesjonalna strona WWW, aktywne opinie w Google, wartościowe treści edukacyjne, transparentna prezentacja specjalistów i certyfikatów oraz szybka odpowiedź na zapytania.",
  },
  {
    question: "Czy obsługujecie duże placówki medyczne?",
    answer: "Tak, mamy doświadczenie z gabinetami jednoosobowymi, klinikami wielospecjalistycznymi oraz sieciami placówek. Dostosowujemy zakres usług do wielkości i potrzeb placówki.",
  },
];

const relatedServices = [
  { title: "Strony internetowe", href: "/uslugi/strony-internetowe", description: "Profesjonalne strony dla placówek medycznych" },
  { title: "Pozycjonowanie Google Maps", href: "/seo/google-maps", description: "Lokalna widoczność gabinetu" },
  { title: "Social Media", href: "/social-media/obsluga", description: "Budowanie społeczności pacjentów" },
  { title: "Google Ads", href: "/performance-marketing/google-ads", description: "Kampanie na frazy medyczne" },
];

const MarketingMedyczny = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEOHead
        title="Marketing dla Branży Medycznej | Gabinety, Kliniki, Lekarze | Fotz Studio"
        description="Marketing dla branży medycznej - systemy rezerwacji online, strony WWW dla gabinetów, SEO medyczne. Kampanie zgodne z prawem. Zwiększ liczbę pacjentów."
        canonical="https://fotz.pl/dla-kogo/branza-medyczna"
      />

      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla branży medycznej"
        description="Kompleksowy marketing dla gabinetów lekarskich, klinik i placówek medycznych"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "Branża medyczna", url: "https://fotz.pl/dla-kogo/branza-medyczna" },
        ]}
      />
      <FAQSchema items={faqItems} />

      <PageBreadcrumbs items={[
        { label: "Dla kogo", href: "/dla-kogo" },
        { label: "Branża medyczna" },
      ]} />

      {/* Hero */}
      <section className="pt-40 pb-20 section-padding bg-background relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Marketing medyczny</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Marketing dla <span className="text-gradient-premium">branży medycznej</span>
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-3xl">
              Pomagamy gabinetom lekarskim, klinikom i placówkom medycznym pozyskiwać pacjentów online. 
              Systemy rezerwacji, SEO medyczne i kampanie zgodne z regulacjami prawnymi.
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
              { value: 60, suffix: "%", label: "więcej rezerwacji online" },
              { value: 40, suffix: "%", label: "mniej nieobecności" },
              { value: 50, suffix: "+", label: "obsłużonych gabinetów" },
              { value: 100, suffix: "%", label: "zgodność z prawem" },
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
              Usługi dla <span className="text-gradient-premium">placówek medycznych</span>
            </h2>
            <p className="text-foreground/70">
              Kompleksowe rozwiązania marketingowe dostosowane do specyfiki branży medycznej
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
              Systemy i narzędzia stworzone specjalnie dla branży medycznej
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
                Rozumiemy specyfikę branży medycznej - regulacje prawne, potrzeby pacjentów 
                i wyzwania związane z budowaniem zaufania online.
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
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={gabinetImg} 
                    alt="Nowoczesny gabinet stomatologiczny"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={konsultacjaImg} 
                    alt="Konsultacja z pacjentem"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src={poczekalniaImg} 
                    alt="Poczekalnia w klinice"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
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
      <OtherIndustries currentSlug="branza-medyczna" />

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
              Rozwijaj swoją <span className="text-gradient-premium">praktykę medyczną</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy pomóc Ci pozyskać więcej pacjentów.
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

export default MarketingMedyczny;
