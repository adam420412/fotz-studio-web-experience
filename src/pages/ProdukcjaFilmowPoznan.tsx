import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Film, Play, Video, Camera, Clapperboard, Sparkles, Phone, ArrowRight, CheckCircle2, Rocket, Star, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeInView } from "@/components/FadeInView";
import { TextReveal } from "@/components/TextReveal";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const videos = [
  { src: "/videos/fotz-reel.mp4", title: "Fotz Studio Reel", category: "Showreel" },
  { src: "/videos/autospa.mp4", title: "AutoSpa", category: "Reklama" },
  { src: "/videos/skaland-osiedle.mp4", title: "Skaland Osiedle", category: "Nieruchomości" },
  { src: "/videos/eko-kamionki.mp4", title: "Eko Kamionki", category: "Promocja" },
  { src: "/videos/fun-sport-stylish.mp4", title: "Fun Sport Stylish", category: "Lifestyle" },
  { src: "/videos/sequence-01.mp4", title: "Sequence 01", category: "Produkcja" },
];

const services = [
  { icon: Clapperboard, title: "Spoty reklamowe", desc: "Krótkie, dynamiczne materiały idealne do kampanii w social mediach i TV." },
  { icon: Film, title: "Filmy korporacyjne", desc: "Prezentują firmę, jej wartości, misję oraz kulturę organizacyjną." },
  { icon: Video, title: "Filmy produktowe", desc: "Skupiają się na prezentacji produktów lub usług, podkreślając ich zalety." },
  { icon: Camera, title: "Filmy wizerunkowe", desc: "Budują i promują markę, tworzą pozytywny obraz w oczach klientów." },
];

const whyUs = [
  { icon: Award, title: "Pełen zakres usług", desc: "Od koncepcji, przez nagrania, po montaż i postprodukcję." },
  { icon: Users, title: "Doświadczony zespół", desc: "Operatorzy, reżyserzy, montażyści z wieloletnim doświadczeniem." },
  { icon: Clock, title: "Terminowość", desc: "Dotrzymujemy ustalonych terminów realizacji." },
  { icon: Star, title: "Nowoczesny sprzęt", desc: "Kamery 4K, drony, gimbal, profesjonalne oświetlenie." },
];

const pricing = [
  { 
    title: "Film krótki", 
    desc: "Spot reklamowy lub krótki film promocyjny.", 
    price: "3 000 - 8 000 zł", 
    features: ["Do 60 sekund", "1 dzień zdjęciowy", "Montaż i korekcja barw", "Muzyka licencjonowana"] 
  },
  { 
    title: "Film firmowy", 
    desc: "Rozbudowany film wizerunkowy lub produktowy.", 
    price: "8 000 - 20 000 zł", 
    features: ["2-5 minut", "2-3 dni zdjęciowe", "Wywiady i ujęcia z drona", "Animacje i grafiki"] 
  },
  { 
    title: "Produkcja premium", 
    desc: "Kompleksowa produkcja z pełnym zespołem.", 
    price: "od 20 000 zł", 
    features: ["Bez limitu długości", "Scenariusz i storyboard", "Aktorzy i statystyka", "Efekty specjalne i VFX"] 
  },
];

const faqItems = [
  {
    q: "Jakie są korzyści z produkcji spotów reklamowych w Poznaniu?",
    a: "Produkcja spotów reklamowych w Poznaniu to skuteczne narzędzie marketingowe, które pozwala na efektywną promocję swojej marki. Dzięki profesjonalnym filmom możesz dotrzeć do szerszej grupy odbiorców i budować pozytywne skojarzenia z Twoją firmą."
  },
  {
    q: "Jakie są etapy produkcji filmów reklamowych?",
    a: "Proces produkcji filmów reklamowych obejmuje: koncepcję i scenariusz, pre-produkcję (planowanie, casting, lokacje), nagrania, postprodukcję (montaż, korekcja barw, dźwięk) oraz finalizację i dostawę materiałów."
  },
  {
    q: "Jak długo trwa produkcja filmów reklamowych?",
    a: "Czas produkcji zależy od skomplikowania projektu. Proste spoty reklamowe realizujemy w 2-3 tygodnie. Rozbudowane produkcje mogą trwać od 4 do 8 tygodni."
  },
  {
    q: "Jakie rodzaje filmów reklamowych można zrealizować?",
    a: "Realizujemy spoty reklamowe, filmy promocyjne, korporacyjne, produktowe, wizerunkowe, relacje z eventów, materiały do social media, oraz animacje 2D i 3D."
  },
  {
    q: "Jakie są koszty produkcji filmów reklamowych?",
    a: "Koszty zależą od długości filmu, skomplikowania produkcji, liczby dni zdjęciowych i wymaganych efektów. Proste spoty od 3000 zł, rozbudowane produkcje od 8000 zł."
  },
  {
    q: "Czym różni się film wizerunkowy od produktowego?",
    a: "Film wizerunkowy koncentruje się na budowaniu i promowaniu marki. Film produktowy skupia się na prezentacji konkretnych produktów lub usług, podkreślając ich zalety i unikalne cechy."
  },
];

export default function ProdukcjaFilmowPoznan() {
  return (
    <Layout>
      <Helmet>
        <title>Produkcja Filmów Reklamowych Poznań | Studio Filmowe Fotz</title>
        <meta name="description" content="Profesjonalna produkcja filmów reklamowych i promocyjnych w Poznaniu. Spoty reklamowe, filmy korporacyjne, video marketing. Studio filmowe Fotz." />
      </Helmet>

      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-40 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"
              >
                <Film className="w-4 h-4" />
                Studio Filmowe Poznań
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
                <TextReveal>
                  Produkcja Filmów <span className="text-gradient">Reklamowych</span> w Poznaniu
                </TextReveal>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Tworzymy filmy, które <span className="text-foreground font-medium">sprzedają i budują markę</span>. Spoty reklamowe, filmy korporacyjne, video marketing. Od koncepcji do gotowego materiału.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group text-lg px-8 py-6">
                  <Link to="/kontakt">
                    <Rocket className="mr-2 h-5 w-5" />
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Sparkles className="w-4 h-4" />
                  Usługi
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Jakie filmy <span className="text-gradient">realizujemy?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowa produkcja filmowa dla firm. Od krótkich spotów po rozbudowane produkcje korporacyjne.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Play className="w-4 h-4" />
                  Portfolio
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Zobacz nasze <span className="text-gradient">produkcje filmowe</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Przykłady naszych realizacji. Każdy projekt to unikalna historia.
                </p>
              </div>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="group">
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                      <video
                        src={video.src}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">{video.category}</span>
                      <h3 className="text-lg font-semibold mt-1">{video.title}</h3>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">
                  Zobacz wszystkie realizacje
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Award className="w-4 h-4" />
                  Wyróżniki
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Dlaczego warto <span className="text-gradient">wybrać Fotz Studio?</span>
                </h2>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full text-center group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  💰 Cennik
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Ile kosztuje <span className="text-gradient">produkcja filmowa?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny. Finalna wycena po poznaniu zakresu projektu.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-8 rounded-2xl border transition-all h-full flex flex-col ${index === 1 ? 'bg-primary/5 border-primary/30 scale-105' : 'bg-background border-border/50 hover:border-primary/20'}`}>
                    {index === 1 && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary uppercase mb-4">
                        <Star className="w-3 h-3" /> Najpopularniejszy
                      </span>
                    )}
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.desc}</p>
                    <div className="text-3xl font-bold text-gradient mb-6">{item.price}</div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={index === 1 ? "default" : "outline"} className="w-full">
                      <Link to="/kontakt">Zapytaj o wycenę</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  ❓ FAQ
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Często zadawane <span className="text-gradient">pytania</span>
                </h2>
              </div>
            </FadeInView>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-medium">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Gotowy na <span className="text-gradient">profesjonalny film?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna konsultacja, konkretna wycena, jasny plan realizacji.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group text-lg px-8 py-6">
                    <Link to="/kontakt">
                      <Rocket className="mr-2 h-5 w-5" />
                      Bezpłatna wycena
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                    <a href="tel:+48790814814">
                      <Phone className="mr-2 h-5 w-5" />
                      +48 790 814 814
                    </a>
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        <ContactSection />
      </main>
    </Layout>
  );
}
