import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Crown, ArrowRight, CheckCircle, Sparkles, Palette, Users, Megaphone, Star, Phone, Plus, Minus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

// Import case study images
import klageImage from "@/assets/portfolio/klagem.png";
import vertheImage from "@/assets/portfolio/verthe.png";
import sookarImage from "@/assets/portfolio/sookar.jpg";
import victoryCarsImage from "@/assets/portfolio/victory-cars.png";

const caseStudies = [
  {
    title: "Klagem",
    description: "Kompleksowy rebranding i nowa identyfikacja wizualna dla marki kosmetyków premium.",
    image: klageImage,
    results: ["Nowa tożsamość marki", "Premium pozycjonowanie", "+180% rozpoznawalności"],
    href: "/realizacje/klagem",
  },
  {
    title: "Verthé",
    description: "Strategia marketingowa i content premium dla ekskluzywnej marki modowej.",
    image: vertheImage,
    results: ["Ekskluzywny wizerunek", "Influencer marketing", "+45% AOV"],
    href: "/realizacje/verthe",
  },
  {
    title: "Sookar",
    description: "Strona internetowa i branding dla elitarnego komisu samochodów luksusowych.",
    image: sookarImage,
    results: ["Premium experience", "Ekskluzywny design", "Wysoka konwersja"],
    href: "/realizacje/sookar",
  },
  {
    title: "Victory Cars",
    description: "Identyfikacja wizualna i marketing dla salonu samochodów premium.",
    image: victoryCarsImage,
    results: ["Spójny branding", "Prestiżowy wizerunek", "+200% leadów"],
    href: "/realizacje/victory-cars",
  },
];

const services = [
  {
    icon: Sparkles,
    title: "Pozycjonowanie premium",
    description: "Strategiczne budowanie wizerunku marki luksusowej w umysłach wymagających klientów.",
  },
  {
    icon: Palette,
    title: "Ekskluzywny branding",
    description: "Identyfikacja wizualna i materiały, które emanują luksusem i jakością.",
  },
  {
    icon: Users,
    title: "Influencer marketing",
    description: "Współpraca z ambasadorami marki i influencerami z segmentu premium.",
  },
  {
    icon: Megaphone,
    title: "PR i komunikacja",
    description: "Strategiczne relacje z mediami i ekskluzywna komunikacja marki.",
  },
];

const principles = [
  {
    title: "Jakość ponad ilość",
    description: "Każdy element komunikacji musi być perfekcyjny. Nie idziemy na kompromisy.",
  },
  {
    title: "Ekskluzywność",
    description: "Tworzymy poczucie wyjątkowości i niedostępności, które przyciąga premium klientów.",
  },
  {
    title: "Spójność",
    description: "Od strony WWW po Instagram - każdy touchpoint buduje ten sam wizerunek.",
  },
  {
    title: "Storytelling",
    description: "Opowiadamy historię marki, która rezonuje z aspiracjami klientów premium.",
  },
];

const benefits = [
  "Doświadczenie z markami luksusowymi i premium",
  "Rozumiemy psychologię klienta premium",
  "Ekskluzywne podejście do każdego projektu",
  "Współpraca z fotografami i twórcami premium contentu",
  "Dyskrecja i profesjonalizm",
  "Strategiczne myślenie o pozycjonowaniu marki",
];

const faqItems = [
  {
    question: "Czym różni się marketing premium od standardowego?",
    answer: "Marketing premium skupia się na budowaniu ekskluzywności i pożądania, nie na promocjach cenowych. Komunikacja jest bardziej wyrafinowana, content wyższej jakości, a każdy element musi oddawać wartości marki luksusowej.",
  },
  {
    question: "Jak budować wizerunek marki premium?",
    answer: "Kluczowe elementy to: spójna, wysokiej jakości identyfikacja wizualna, ekskluzywny content (profesjonalne zdjęcia, video), strategiczny influencer marketing, selektywna dystrybucja i storytelling budujący aspiracyjny wizerunek.",
  },
  {
    question: "Jaki budżet potrzebny jest na marketing marki premium?",
    answer: "Marketing premium wymaga wyższych inwestycji niż standardowy - minimum 10000-15000 zł miesięcznie na pełną obsługę. Obejmuje to produkcję premium contentu, współpracę z influencerami i starannie targetowane kampanie.",
  },
  {
    question: "Czy influencer marketing działa dla marek premium?",
    answer: "Tak, ale wymaga starannego doboru ambasadorów. Dla marek premium ważniejsza jest autentyczność i dopasowanie wartości niż liczba followersów. Współpracujemy z mikroinfluencerami z segmentu lifestyle i luxury.",
  },
  {
    question: "Jak mierzyć sukces marketingu premium?",
    answer: "Oprócz standardowych KPI (sprzedaż, ROI), mierzymy: perception metrics (postrzeganie marki), share of voice w segmencie premium, jakość leadów, średnią wartość zamówienia (AOV) i wskaźniki lojalności klientów.",
  },
  {
    question: "Czy obsługujecie marki dopiero wchodzące w segment premium?",
    answer: "Tak, pomagamy markom w repozycjonowaniu do segmentu premium. To proces wymagający kompleksowej strategii - od rebrandingu przez nową komunikację po zmianę kanałów dystrybucji. Mamy doświadczenie w takich transformacjach.",
  },
];

export default function DlaKogoMarkiPremium() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  return (
    <Layout>
      <Helmet>
        <title>Marketing dla marek premium i luksusowych | Fotz Studio</title>
        <meta
          name="description"
          content="Tworzymy wyrafinowane strategie marketingowe dla marek premium. Branding, influencer marketing, ekskluzywny content. Dla tych, którzy stawiają na jakość."
        />
        <link rel="canonical" href="https://fotz.pl/dla-kogo/marki-premium" />
      </Helmet>
      
      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla marek premium"
        description="Ekskluzywne usługi marketingowe dla marek luksusowych - branding, influencer marketing, PR i komunikacja premium."
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "Marki premium", url: "https://fotz.pl/dla-kogo/marki-premium" },
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
              <Crown className="w-8 h-8 text-primary" />
            </div>
            
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Luksus i jakość
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Marketing dla{" "}
              <span className="text-gradient">marek premium</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Tworzymy wyrafinowane strategie marketingowe dla marek, które stawiają 
              na najwyższą jakość. Rozumiemy, że w segmencie premium liczy się każdy 
              detal, a klient oczekuje perfekcji.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Ekskluzywna konsultacja
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
              Jak budujemy <span className="text-gradient">marki premium?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ekskluzywne podejście do marketingu, które wyróżnia marki luksusowe 
              i przyciąga wymagających klientów.
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

      {/* Principles */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Zasady <span className="text-gradient">marketingu premium</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Marketing marek luksusowych rządzi się własnymi prawami. 
                Rozumiemy je i stosujemy w każdym projekcie.
              </p>
              
              <div className="space-y-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-primary pl-6"
                  >
                    <h3 className="text-xl font-heading font-bold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
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
                      <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
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
              Nasze <span className="text-gradient">realizacje premium</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Zobacz, jak tworzymy wizerunek marek, które aspirują do segmentu premium.
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
              Odpowiedzi na najczęstsze pytania o marketing marek premium.
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
              Buduj markę <span className="text-gradient">premium</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Umów się na ekskluzywną konsultację. Porozmawiamy o tym, jak wynieść 
              Twoją markę na wyższy poziom.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Ekskluzywna konsultacja
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
