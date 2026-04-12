import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight, CheckCircle, Megaphone, Camera, Video, Share2, Star, Phone, Users, Plus, Minus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// Import case study images
import eneaImage from "@/assets/portfolio/enea-stadion.png";
import fpsImage from "@/assets/portfolio/fps-cegielski.png";
import fabrykaViraliImage from "@/assets/portfolio/fabryka-virali.png";
import gierkiImage from "@/assets/portfolio/gierki.png";

const caseStudies = [
  {
    title: "Enea Stadion Poznań",
    description: "Kompleksowa obsługa marketingowa stadionu - od wydarzeń sportowych po koncerty i eventy biznesowe.",
    image: eneaImage,
    results: ["500+ wydarzeń", "Miliony widzów", "Pełna obsługa foto/video"],
    href: "/realizacje/enea-stadion",
  },
  {
    title: "FPS Cegielski",
    description: "Dokumentacja i promocja wydarzeń dla historycznej instytucji przemysłowej.",
    image: fpsImage,
    results: ["Profesjonalna dokumentacja", "Promocja wydarzeń", "Archiwum cyfrowe"],
    href: "/realizacje/fps",
  },
  {
    title: "Fabryka Virali",
    description: "Viral marketing i kampanie social media dla organizatora wydarzeń rozrywkowych.",
    image: fabrykaViraliImage,
    results: ["10M+ wyświetleń", "Viralowe kampanie", "Sold-out wydarzeń"],
    href: "/realizacje/fabryka-virali",
  },
  {
    title: "Gierki",
    description: "Branding i marketing dla cyklicznych wydarzeń gamingowych i esportowych.",
    image: gierkiImage,
    results: ["Rozpoznawalna marka", "Społeczność graczy", "Pełne sale"],
    href: "/realizacje/gierki",
  },
];

const services = [
  {
    icon: Megaphone,
    title: "Marketing eventowy",
    description: "Kompleksowa promocja wydarzeń - od strategii po egzekucję kampanii.",
  },
  {
    icon: Camera,
    title: "Dokumentacja foto/video",
    description: "Profesjonalna relacja z wydarzeń do wykorzystania w komunikacji.",
  },
  {
    icon: Share2,
    title: "Social media dla eventów",
    description: "Budowanie zasięgów i angażowanie publiczności przed, w trakcie i po evencie.",
  },
  {
    icon: Video,
    title: "Transmisje i relacje live",
    description: "Streaming wydarzeń i relacje na żywo zwiększające zasięg.",
  },
];

const eventTypes = [
  "Koncerty i festiwale",
  "Wydarzenia sportowe",
  "Konferencje i szkolenia",
  "Wystawy i targi",
  "Eventy firmowe",
  "Premiery produktów",
  "Gale i ceremonie",
  "Wydarzenia kulturalne",
];

const benefits = [
  "Doświadczenie z wydarzeniami na Enea Stadion",
  "Pełna obsługa foto i video eventów",
  "Kampanie sprzedaży biletów z wysokim ROAS",
  "Rozumiemy specyfikę różnych typów wydarzeń",
  "Szybka reakcja i elastyczność",
  "Zespół gotowy do pracy w weekendy i wieczory",
];

const faqItems = [
  {
    question: "Kiedy zacząć promocję wydarzenia?",
    answer: "Dla dużych eventów rekomendujemy start 2-3 miesiące przed datą. Dla mniejszych wydarzeń wystarczy 4-6 tygodni. Kluczowe jest zaplanowanie faz kampanii: early birds, regularna sprzedaż i last minute.",
  },
  {
    question: "Jak skutecznie sprzedawać bilety online?",
    answer: "Kluczowe elementy to: dobra strona wydarzenia, remarketing do osób zainteresowanych, kampanie lookalike, współpraca z influencerami i media partnerzy. Ważne jest też tworzenie FOMO - limitowane pule biletów i odliczanie.",
  },
  {
    question: "Czy dokumentujecie wydarzenia foto i video?",
    answer: "Tak, oferujemy pełną obsługę foto i video eventów. Nasz zespół ma doświadczenie z koncertami, konferencjami i wydarzeniami sportowymi. Dostarczamy materiały do wykorzystania w przyszłych kampaniach promocyjnych.",
  },
  {
    question: "Jak promować wydarzenie cykliczne?",
    answer: "Dla wydarzeń cyklicznych budujemy rozpoznawalną markę i społeczność. Wykorzystujemy materiały z poprzednich edycji, tworzymy programy lojalnościowe dla stałych uczestników i prowadzimy ciągłą komunikację między edycjami.",
  },
  {
    question: "Jaki budżet reklamowy potrzebny na promocję eventu?",
    answer: "Budżet zależy od skali wydarzenia. Dla lokalnych eventów na 100-500 osób wystarczy 2000-5000 zł. Większe wydarzenia na 1000+ osób wymagają budżetów 10000-50000 zł. Ważny jest też budżet na produkcję contentu.",
  },
  {
    question: "Czy pomagacie w relacjach live z wydarzeń?",
    answer: "Tak, oferujemy transmisje live na social media i platformy streamingowe. Realizujemy również relacje stories i posty w czasie rzeczywistym. To świetny sposób na budowanie zasięgów i promocję przyszłych edycji.",
  },
];

export default function DlaKogoInstytucje() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  return (
    <Layout>
      <SEOHead
        title="Marketing dla Instytucji i Wydarzeń — Promocja Eventów i Kultury | Fotz Studio"
        description="Marketing dla instytucji kultury, organizacji i wydarzeń — promocja eventów, reklama imprez, social media i produkcja wideo. Fotz Studio obsługuje…"
        canonical="https://fotz.pl/dla-kogo/instytucje"
        keywords="marketing dla instytucji, strona internetowa instytucji, digital marketing organizacje, marketing nonprofit"
      />
      
      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla instytucji i wydarzeń"
        description="Kompleksowe usługi marketingowe dla instytucji kultury i organizatorów wydarzeń - promocja eventów, dokumentacja, social media."
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "Instytucje i eventy", url: "https://fotz.pl/dla-kogo/instytucje" },
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
              <CalendarDays className="w-8 h-8 text-primary" />
            </div>
            
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Kultura i wydarzenia
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Marketing dla{" "}
              <span className="text-gradient">instytucji i eventów</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Wspieramy instytucje kultury, organizatorów wydarzeń i branżę eventową 
              w promocji i budowaniu zasięgów. Wiemy, jak przyciągnąć publiczność 
              i wyprzedać bilety.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Porozmawiajmy o evencie
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
          </motion.div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={500} suffix="+" label="Wydarzeń" index={0} />
            <AnimatedCounter end={5} prefix="" suffix=" mln" label="Widzów" index={1} />
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-3xl md:text-4xl font-heading font-bold text-gradient-premium mb-2"
              >
                Enea
              </motion.div>
              <div className="text-sm text-foreground/60">Stadion Poznań</div>
            </div>
            <AnimatedCounter end={8} suffix="+" label="Lat doświadczenia" index={3} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Jak wspieramy <span className="text-gradient">wydarzenia?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kompleksowa obsługa marketingowa eventów - od strategii promocji 
              po dokumentację i content po wydarzeniu.
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
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
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

      {/* Event Types & Why Us */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Typy <span className="text-gradient">wydarzeń</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Mamy doświadczenie w promocji różnorodnych wydarzeń - od kameralnych 
                spotkań po masowe eventy stadionowe.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {eventTypes.map((type, index) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 bg-background rounded-lg p-4"
                  >
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{type}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 lg:p-12">
                <h3 className="text-2xl font-heading font-bold mb-8">Dlaczego my?</h3>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Nasze <span className="text-gradient">realizacje eventowe</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Zobacz, jak wspieramy organizatorów wydarzeń i instytucje kultury.
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
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
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
      <section className="section-padding bg-background">
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
              Odpowiedzi na najczęstsze pytania o marketing wydarzeń.
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
                className="bg-card rounded-xl border border-border overflow-hidden"
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
              <Link to="/dla-kogo/firmy-lokalne" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
                Firmy lokalne
              </Link>
              <Link to="/dla-kogo/ecommerce" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
                E-commerce
              </Link>
              <Link to="/dla-kogo/marki-premium" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
                Marki premium
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-8 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Planujesz <span className="text-gradient">wydarzenie?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Porozmawiajmy o tym, jak możemy pomóc w promocji i dokumentacji 
              Twojego eventu. Bezpłatna konsultacja.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Porozmawiajmy o evencie
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
              Marketing dla instytucji i wydarzeń — promocja eventów, kultury i NGO
            </h2>
            <p className="text-muted-foreground mb-4">
              Marketing dla instytucji kultury, organizacji pozarządowych i organizatorów
              wydarzeń to nasza specjalność. Fotz Studio pomaga teatrom, muzeom, galeriom,
              fundacjom i organizatorom eventów dotrzeć do szerokiej publiczności.
              Kampanie promocyjne wydarzeń, social media marketing i produkcja wideo
              dla instytucji — z rozumieniem specyfiki sektora publicznego i NGO.
            </p>
            <p className="text-muted-foreground mb-6">
              Instytucje mają inne potrzeby niż komercyjne firmy — często działają
              na ograniczonych budżetach, z procedurami przetargowymi i koniecznością
              raportowania do organów nadzorczych. Rozumiemy tę specyfikę i dostosowujemy
              nasze usługi do realiów sektora publicznego i pozarządowego.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Promocja wydarzeń i eventów — marketing online i offline dla imprez masowych
            </h2>
            <p className="text-muted-foreground mb-4">
              Promocja wydarzenia wymaga spójnej strategii obejmującej wiele kanałów:
              social media (Facebook Events, Instagram, TikTok), płatne kampanie
              Google i Meta z targetowaniem na lokalną publiczność, relacje z mediami,
              email marketing do bazy uczestników i content marketing budujący anticipation.
            </p>
            <p className="text-muted-foreground mb-6">
              Produkcja wideo dla eventów — zapowiedzi, relacje live, aftermovie —
              buduje trwałe archiwum i pomaga w promocji kolejnych edycji. Dokumentacja
              fotograficzna i wideo z wydarzeń to materiał marketingowy, który pracuje latami.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Social media dla instytucji — budowanie społeczności i angażowanie odbiorców
            </h2>
            <p className="text-muted-foreground mb-4">
              Instytucje kultury i organizacje pozarządowe mają wyjątkową misję —
              social media to dla nich narzędzie budowania społeczności wokół wartości.
              Zarządzamy profilami instytucji na Facebooku, Instagramie i LinkedInie,
              tworząc treści edukacyjne, relacje z wydarzeń i angażujące kampanie,
              które przyciągają nowych odbiorców.
            </p>
            <p className="text-muted-foreground">
              Skontaktuj się z Fotz Studio, by omówić współpracę marketingową dla
              Twojej instytucji lub następnego wydarzenia. Ofertę dostosowujemy
              do specyfiki budżetów publicznych i pozarządowych.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
