import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { GraduationCap, ArrowRight, CheckCircle, Users, Globe, Video, TrendingUp, BookOpen, Calendar, Award, Plus, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { useCountUp } from "@/hooks/useCountUp";
import { OtherIndustries } from "@/components/sections/OtherIndustries";
import przedszkoleImg from "@/assets/portfolio/przedszkole.png";

const services = [
  {
    icon: Globe,
    title: "Strony dla szkół",
    description: "Nowoczesne strony dla placówek edukacyjnych z systemem rekrutacji online i panelem rodzica.",
  },
  {
    icon: Video,
    title: "Produkcja video",
    description: "Filmy promocyjne, wirtualne spacery po kampusie i materiały rekrutacyjne.",
  },
  {
    icon: Users,
    title: "Social Media",
    description: "Budowanie społeczności uczniów, studentów i absolwentów w mediach społecznościowych.",
  },
  {
    icon: TrendingUp,
    title: "Kampanie rekrutacyjne",
    description: "Targetowane kampanie na przyszłych uczniów i studentów w okresie rekrutacji.",
  },
];

const customSolutions = [
  {
    icon: BookOpen,
    title: "Platforma e-learning",
    description: "Dedykowane platformy do nauki online z systemem kursów, testów i certyfikatów.",
  },
  {
    icon: Calendar,
    title: "System rekrutacji",
    description: "Online formularz rekrutacyjny z harmonogramem dni otwartych i automatycznymi powiadomieniami.",
  },
  {
    icon: Award,
    title: "Panel rodzica/studenta",
    description: "Dedykowany portal z ocenami, planem zajęć, komunikacją i płatnościami online.",
  },
];

const benefits = [
  "Zwiększenie liczby zgłoszeń rekrutacyjnych o 120%",
  "Automatyzacja procesu rekrutacji online",
  "Budowanie prestiżu i rozpoznawalności placówki",
  "Komunikacja z rodzicami i uczniami 24/7",
  "Wirtualne spacery po kampusie",
  "Integracja z systemami dzienników elektronicznych",
];

const faqItems = [
  {
    question: "Jak przyciągnąć więcej uczniów do szkoły?",
    answer: "Kluczowe są: profesjonalna strona WWW z systemem rekrutacji, kampanie w social media targetowane na rodziców i uczniów, wirtualne dni otwarte, content marketing pokazujący życie szkoły i sukcesy absolwentów.",
  },
  {
    question: "Ile kosztuje marketing dla placówki edukacyjnej?",
    answer: "Podstawowa obsługa (strona + social media) zaczyna się od 3000 zł/miesiąc. Pełna obsługa z kampaniami rekrutacyjnymi, produkcją video i e-learningiem to 8000-20000 zł/miesiąc.",
  },
  {
    question: "Czy możecie stworzyć platformę e-learning?",
    answer: "Tak, tworzymy dedykowane platformy LMS z kursami video, testami, certyfikatami i systemem postępów. Integrujemy z istniejącymi systemami szkolnymi.",
  },
  {
    question: "Jak działa wirtualny dzień otwarty?",
    answer: "Organizujemy transmisje live z prezentacjami, Q&A z nauczycielami, wirtualne spacery 360° po budynku oraz interaktywne sesje dla przyszłych uczniów i rodziców.",
  },
  {
    question: "Czy obsługujecie uczelnie wyższe?",
    answer: "Tak, mamy doświadczenie z uczelniami publicznymi i prywatnymi. Prowadzimy kampanie rekrutacyjne na kierunki studiów, budujemy strony wydziałów i wspieramy komunikację naukową.",
  },
];

const relatedServices = [
  { title: "Strony internetowe", href: "/uslugi/strony-internetowe", description: "Strony dla placówek edukacyjnych" },
  { title: "Social Media", href: "/social-media/obsluga", description: "Budowanie społeczności" },
  { title: "Produkcja video", href: "/uslugi/produkcja-filmow", description: "Filmy promocyjne" },
  { title: "Facebook Ads", href: "/performance-marketing/facebook-ads", description: "Kampanie rekrutacyjne" },
];

const MarketingEdukacja = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEOHead
        title="Marketing dla Edukacji | Szkoły, Uczelnie, Kursy | Fotz Studio"
        description="Marketing dla placówek edukacyjnych - strony dla szkół, kampanie rekrutacyjne, e-learning. Zwiększ liczbę zgłoszeń i buduj prestiż placówki."
        canonical="https://fotz.pl/dla-kogo/edukacja"
      />

      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla edukacji"
        description="Kompleksowy marketing dla szkół, uczelni i firm szkoleniowych"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "Edukacja", url: "https://fotz.pl/dla-kogo/edukacja" },
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
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">Marketing edukacyjny</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Marketing dla <span className="text-gradient-premium">edukacji</span>
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-3xl">
              Pomagamy szkołom, uczelniom i firmom szkoleniowym pozyskiwać uczniów i studentów. 
              Kampanie rekrutacyjne, platformy e-learning i budowanie prestiżu placówki.
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
              { value: 120, suffix: "%", label: "więcej zgłoszeń rekrutacyjnych" },
              { value: 50, suffix: "+", label: "obsłużonych placówek" },
              { value: 10000, suffix: "+", label: "pozyskanych uczniów" },
              { value: 95, suffix: "%", label: "zadowolonych klientów" },
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
              Usługi dla <span className="text-gradient-premium">placówek edukacyjnych</span>
            </h2>
            <p className="text-foreground/70">
              Kompleksowe rozwiązania marketingowe dla szkół, uczelni i firm szkoleniowych
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
              Systemy i narzędzia stworzone specjalnie dla branży edukacyjnej
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
                Rozumiemy specyfikę edukacji - sezonowość rekrutacji, budowanie prestiżu 
                i potrzebę komunikacji z różnymi grupami: uczniami, rodzicami i pracodawcami.
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
              <Link to="/realizacje/przedszkole" className="block group">
                <div className="aspect-square rounded-3xl overflow-hidden relative">
                  <img 
                    src={przedszkoleImg} 
                    alt="Przedszkole - case study edukacja"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm opacity-80 mb-1 block">Case Study</span>
                    <p className="text-xl font-heading font-bold mb-1">Przedszkole</p>
                    <p className="text-sm opacity-80">Strona i marketing dla placówki edukacyjnej</p>
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
      <OtherIndustries currentSlug="edukacja" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-background">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Gotowy na <span className="text-gradient-premium">więcej uczniów?</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy wspomóc rekrutację Twojej placówki.
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

export default MarketingEdukacja;
