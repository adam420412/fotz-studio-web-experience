import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { UtensilsCrossed, ArrowRight, CheckCircle, Camera, Star, Users, TrendingUp, Phone, ClipboardList, Smartphone, MapPin, Plus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { useCountUp } from "@/hooks/useCountUp";
import { OtherIndustries } from "@/components/sections/OtherIndustries";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const services = [
  {
    icon: Camera,
    title: "Fotografia kulinarna",
    description: "Profesjonalne zdjęcia dań, które sprzedają. Food styling i sesje menu.",
  },
  {
    icon: Star,
    title: "Zarządzanie opiniami",
    description: "Strategia zbierania opinii w Google, TripAdvisor i social media.",
  },
  {
    icon: Users,
    title: "Social Media dla gastronomii",
    description: "Instagram, Facebook, TikTok - content, który przyciąga głodnych klientów.",
  },
  {
    icon: MapPin,
    title: "SEO lokalne",
    description: "Pozycjonowanie na 'restauracja Poznań', 'pizza w pobliżu' i inne frazy.",
  },
];

const customSolutions = [
  {
    icon: ClipboardList,
    title: "System rezerwacji stolików",
    description: "Online booking zintegrowany ze stroną i social media. Automatyczne potwierdzenia i przypomnienia.",
  },
  {
    icon: Smartphone,
    title: "Menu cyfrowe z QR",
    description: "Interaktywne menu dostępne przez QR kod - ze zdjęciami, alergenami i cenami.",
  },
  {
    icon: TrendingUp,
    title: "Kampanie sezonowe",
    description: "Promocje świąteczne, walentynkowe, letnie tarasy - pełna obsługa kampanii.",
  },
];

const benefits = [
  "Profesjonalne zdjęcia dań zwiększające apetyt",
  "Więcej rezerwacji online i telefonicznych",
  "Lepsza widoczność w Google Maps",
  "Aktywna społeczność w social media",
  "Zarządzanie reputacją i opiniami",
  "Kampanie promocyjne na eventy i święta",
];

const faqItems = [
  {
    question: "Ile kosztuje sesja zdjęciowa menu restauracji?",
    answer: "Podstawowa sesja 20-30 dań to koszt 2500-4000 zł. Pełna sesja z food stylingiem, zdjęciami wnętrza i zespołu to 5000-8000 zł. Oferujemy też pakiety abonamentowe na regularne aktualizacje menu.",
  },
  {
    question: "Jak zwiększyć liczbę opinii w Google?",
    answer: "Wdrażamy strategię zachęcania do opinii: QR kody na stolikach, follow-up SMS po wizycie, szkolenie personelu i odpowiedzi na wszystkie recenzje. Kluczowa jest systematyczność i autentyczność.",
  },
  {
    question: "Czy prowadzicie social media dla restauracji?",
    answer: "Tak, oferujemy pełną obsługę: strategia, tworzenie treści, publikacja, odpowiadanie na komentarze i reklamy. Średni budżet na obsługę social media to 3000-6000 zł miesięcznie.",
  },
  {
    question: "Jak działa system rezerwacji online?",
    answer: "Integrujemy widget rezerwacji ze stroną WWW i profilami social media. Goście wybierają datę, godzinę i liczbę osób. System automatycznie potwierdza i przypomina o rezerwacji.",
  },
  {
    question: "Czy pomagacie z dostawami i food delivery?",
    answer: "Tak, wspieramy obecność w Pyszne.pl, Uber Eats, Glovo - optymalizacja profili, zdjęcia, opisy i kampanie promocyjne na platformach delivery.",
  },
];

const relatedServices = [
  { title: "Fotograf Poznań", href: "/uslugi/fotografia", description: "Profesjonalna fotografia kulinarna" },
  { title: "Social Media", href: "/social-media/obsluga", description: "Obsługa social media restauracji" },
  { title: "Google Maps", href: "/seo/google-maps", description: "Widoczność lokalna" },
  { title: "Strony internetowe", href: "/uslugi/strony-internetowe", description: "Strony z menu i rezerwacją" },
];

const MarketingGastronomia = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEOHead
        title="Marketing dla Gastronomii | Restauracje, Kawiarnie, Catering | Fotz Studio"
        description="Marketing dla restauracji i gastronomii - fotografia kulinarna, social media, systemy rezerwacji online. Zwiększ liczbę gości w lokalu."
        canonical="https://fotz.pl/dla-kogo/gastronomia"
        keywords="marketing restauracji, marketing gastronomia, agencja marketingowa restauracja, reklama restauracji, social media restauracja, fotografia kulinarna, marketing cateringu, kampanie facebook restauracja"
      />

      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla gastronomii"
        description="Kompleksowy marketing dla restauracji, kawiarni, barów i cateringu"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "Gastronomia", url: "https://fotz.pl/dla-kogo/gastronomia" },
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
              <UtensilsCrossed className="w-4 h-4" />
              <span className="text-sm font-medium">Marketing gastronomiczny</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Marketing dla <span className="text-gradient-premium">gastronomii</span>
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-3xl">
              Pomagamy restauracjom, kawiarniom i firmom cateringowym przyciągać więcej gości. 
              Fotografia kulinarna, social media i systemy rezerwacji online.
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
              { value: 80, suffix: "%", label: "więcej rezerwacji" },
              { value: 45, suffix: "%", label: "wzrost ruchu" },
              { value: 100, suffix: "+", label: "sesji kulinarnych" },
              { value: 4.9, suffix: "", label: "średnia ocen klientów" },
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
              Usługi dla <span className="text-gradient-premium">restauracji</span>
            </h2>
            <p className="text-foreground/70">
              Kompleksowe rozwiązania marketingowe dla branży gastronomicznej
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
              Systemy i narzędzia stworzone specjalnie dla gastronomii
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
                Znamy branżę gastronomiczną od kuchni. Wiemy, jak przyciągnąć głodnych klientów 
                i zamienić ich w stałych bywalców.
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
              <Link to="/realizacje/cute-dumpling" className="block group">
                <div className="aspect-square rounded-3xl overflow-hidden relative">
                  <img loading="lazy" 
                    src={cuteDumplingImg} 
                    alt="Cute Dumpling - case study gastronomia"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm opacity-80 mb-1 block">Case Study</span>
                    <p className="text-xl font-heading font-bold mb-1">Cute Dumpling</p>
                    <p className="text-sm opacity-80">Branding i marketing dla restauracji</p>
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
      <OtherIndustries currentSlug="gastronomia" />

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
              Zapełnij stoliki <span className="text-gradient-premium">nowymi gośćmi</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojej restauracji.
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

export default MarketingGastronomia;
