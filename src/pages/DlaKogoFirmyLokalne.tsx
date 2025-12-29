import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Building2, ArrowRight, CheckCircle, MapPin, TrendingUp, Users, Target, Star, Phone, Plus, Minus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// Import case study images
import rppgImage from "@/assets/portfolio/rppg.png";
import grafImage from "@/assets/portfolio/graf-tapicerstwo.png";
import mechanicaImage from "@/assets/portfolio/mechanica.png";
import przedszkoleImage from "@/assets/portfolio/przedszkole.png";

const caseStudies = [
  {
    title: "RPPG",
    description: "Strona internetowa dla Rady Polskich Przedsiębiorców Globalnych z systemem zarządzania treścią.",
    image: rppgImage,
    results: ["Profesjonalny wizerunek online", "+200% więcej zapytań", "Nowoczesna strona WWW"],
    href: "/realizacje/rppg",
  },
  {
    title: "Graf Tapicerstwo",
    description: "Strona internetowa i pozycjonowanie lokalne dla firmy specjalizującej się w tapicerowaniu autobusów.",
    image: grafImage,
    results: ["TOP 3 w Google Maps", "+150% ruchu organicznego", "Stały napływ zleceń"],
    href: "/realizacje/graf",
  },
  {
    title: "Mechanica",
    description: "Kompleksowa strona WWW dla producenta suwnic i wciągników przemysłowych.",
    image: mechanicaImage,
    results: ["Profesjonalna wizytówka B2B", "+180% zapytań ofertowych", "Widoczność w branży"],
    href: "/realizacje/mechanica",
  },
  {
    title: "Przedszkole",
    description: "Strona internetowa i marketing lokalny dla przedszkola z pełną funkcjonalnością dla rodziców.",
    image: przedszkoleImage,
    results: ["100% zapełnienie miejsc", "Top 5 w lokalnych wynikach", "Zaufanie rodziców"],
    href: "/realizacje/przedszkole",
  },
];

const services = [
  {
    icon: MapPin,
    title: "SEO lokalne",
    description: "Pozycjonowanie w Google Maps i wynikach lokalnych. Dominuj w swoim mieście.",
  },
  {
    icon: Target,
    title: "Kampanie geotargetowane",
    description: "Reklamy docierające do klientów w Twoim regionie - precyzyjnie i efektywnie.",
  },
  {
    icon: Users,
    title: "Budowanie społeczności",
    description: "Angażujące social media, które łączą Cię z lokalną społecznością.",
  },
  {
    icon: TrendingUp,
    title: "Google My Business",
    description: "Optymalizacja wizytówki Google, opinie i widoczność w lokalnych wyszukiwaniach.",
  },
];

const benefits = [
  "Znamy specyfikę poznańskiego rynku",
  "Działamy lokalnie - spotykamy się osobiście",
  "Rozumiemy potrzeby małych i średnich firm",
  "Elastyczne budżety dopasowane do Twoich możliwości",
  "Szybka reakcja i stały kontakt",
  "Mierzalne rezultaty i transparentne raporty",
];

const faqItems = [
  {
    question: "Ile kosztuje marketing dla małej lokalnej firmy?",
    answer: "Budżety zaczynają się od około 2000 zł miesięcznie za podstawową obsługę SEO lokalnego i Google My Business. Pełna obsługa z kampaniami reklamowymi to zazwyczaj 4000-8000 zł miesięcznie, w zależności od zakresu działań i budżetu reklamowego.",
  },
  {
    question: "Jak szybko zobaczę efekty pozycjonowania lokalnego?",
    answer: "Pierwsze efekty SEO lokalnego widoczne są zazwyczaj po 2-3 miesiącach. Optymalizacja Google My Business może przynieść rezultaty szybciej - często już po kilku tygodniach. Pełne efekty pozycjonowania lokalnego osiągamy w ciągu 6-12 miesięcy.",
  },
  {
    question: "Czy potrzebuję strony internetowej do marketingu lokalnego?",
    answer: "Strona internetowa znacząco zwiększa skuteczność marketingu lokalnego, ale można zacząć od samego Google My Business i social media. Rekomendujemy jednak inwestycję w stronę WWW - to fundament długoterminowej strategii online.",
  },
  {
    question: "Jak działają kampanie geotargetowane?",
    answer: "Kampanie geotargetowane wyświetlają reklamy tylko osobom znajdującym się w określonej lokalizacji - np. w promieniu 10 km od Twojej firmy. Dzięki temu budżet reklamowy trafia wyłącznie do potencjalnych klientów z Twojego regionu.",
  },
  {
    question: "Czy obsługujecie firmy spoza Poznania?",
    answer: "Tak, obsługujemy firmy z całej Polski. Jednak naszą specjalizacją jest rynek poznański i wielkopolski - tutaj mamy największe doświadczenie i najlepsze rezultaty. Dla firm z innych regionów oferujemy pełną obsługę zdalną.",
  },
  {
    question: "Co to jest Google My Business i dlaczego jest ważne?",
    answer: "Google My Business to darmowa wizytówka Twojej firmy w Google. Pojawia się w wynikach wyszukiwania i na Mapach Google. Dla firm lokalnych to kluczowe narzędzie - większość klientów szuka usług lokalnych właśnie przez Google Maps.",
  },
];

export default function DlaKogoFirmyLokalne() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  return (
    <Layout>
      <Helmet>
        <title>Marketing dla firm lokalnych Poznań | Fotz Studio</title>
        <meta
          name="description"
          content="Pomagamy lokalnym firmom z Poznania budować silną obecność online. SEO lokalne, Google Maps, kampanie geotargetowane. Znamy poznański rynek."
        />
        <link rel="canonical" href="https://fotz.pl/dla-kogo/firmy-lokalne" />
      </Helmet>
      
      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla firm lokalnych"
        description="Kompleksowe usługi marketingowe dla firm lokalnych w Poznaniu - SEO lokalne, Google Maps, kampanie geotargetowane."
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "Firmy lokalne", url: "https://fotz.pl/dla-kogo/firmy-lokalne" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="pt-40 pb-20 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link 
              to="/dla-kogo" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              ← Wróć do grup docelowych
            </Link>
            
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Poznań i okolice
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Marketing dla{" "}
              <span className="text-gradient">firm lokalnych</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Pomagamy lokalnym firmom z Poznania i okolic budować silną obecność w internecie, 
              pozyskiwać klientów z regionu i rozwijać biznes. Znamy specyfikę lokalnego rynku 
              i wiemy, jak skutecznie dotrzeć do Twojej społeczności.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+48790814814" className="group">
                  <Phone className="w-5 h-5" />
                  Zadzwoń teraz
                </a>
              </Button>
            </div>
            
            {/* Animated Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30"
            >
              <AnimatedCounter end={150} suffix="+" label="Firm lokalnych" index={0} />
              <AnimatedCounter end={95} suffix="%" label="Wzrost widoczności" index={1} />
              <AnimatedCounter end={3} prefix="TOP " label="W Google Maps" index={2} />
              <AnimatedCounter end={200} suffix="%" label="Więcej leadów" index={3} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Jak pomagamy <span className="text-gradient">lokalnym firmom?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specjalizujemy się w marketingu lokalnym, który przynosi realne wyniki 
              dla firm działających w Poznaniu i regionie.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Dlaczego <span className="text-gradient">lokalna agencja?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Jako agencja z Poznania rozumiemy specyfikę lokalnego rynku. 
                Znamy konkurencję, wiemy jak myślą lokalni klienci i jakie kanały 
                są najskuteczniejsze w Twoim regionie.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="text-6xl font-heading font-bold text-primary mb-2">160+</div>
                  <p className="text-muted-foreground">zadowolonych klientów</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold mb-1">8+</div>
                    <p className="text-sm text-muted-foreground">lat doświadczenia</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold mb-1">5.0</div>
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      w Google
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Nasze <span className="text-gradient">realizacje</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Zobacz, jak pomagamy lokalnym firmom osiągać sukces w internecie.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.results.map((result) => (
                      <span
                        key={result}
                        className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="ghost" asChild className="group/btn">
                    <Link to={study.href}>
                      Zobacz case study
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Często zadawane <span className="text-gradient">pytania</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Odpowiedzi na najczęstsze pytania o marketing dla firm lokalnych.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-heading font-bold pr-4">{item.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-muted-foreground">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Video */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Zobacz nasze realizacje w akcji
            </h2>
            <p className="text-muted-foreground">
              Produkcja wideo dla FPS Poznań - lokalnego partnera biznesowego
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
              <video
                src="/videos/fps-poznan.mp4"
                controls
                className="w-full h-full object-cover"
                poster="/videos/fps-poznan.mp4#t=0.5"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dla kogo - inne grupy */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">Sprawdź też rozwiązania dla innych branż:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/dla-kogo/ecommerce" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
                E-commerce
              </Link>
              <Link to="/dla-kogo/marki-premium" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
                Marki premium
              </Link>
              <Link to="/dla-kogo/instytucje" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
                Instytucje i eventy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-8 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Rozwijaj swoją <span className="text-gradient">lokalną firmę</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Umów się na bezpłatną konsultację. Przeanalizujemy Twoją sytuację 
              i zaproponujemy konkretne rozwiązania.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/realizacje">Zobacz wszystkie realizacje</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
