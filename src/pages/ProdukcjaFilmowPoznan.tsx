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
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
                <TextReveal>
                  Produkcja Filmów <span className="text-gradient">Reklamowych</span> w Poznaniu
                </TextReveal>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Tworzymy filmy, które <span className="text-foreground font-medium">sprzedają i budują markę</span>. Spoty reklamowe, filmy korporacyjne, video marketing. Od koncepcji do gotowego materiału.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Button asChild size="lg" className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <Link to="/kontakt">
                    <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {videos.map((video, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="group">
                    <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                      <video
                        src={video.src}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <span className="text-[10px] sm:text-xs font-medium text-primary uppercase tracking-wider">{video.category}</span>
                      <h3 className="text-base sm:text-lg font-semibold mt-1">{video.title}</h3>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {pricing.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl border transition-all h-full flex flex-col ${index === 1 ? 'bg-primary/5 border-primary/30 md:scale-105' : 'bg-background border-border/50 hover:border-primary/20'}`}>
                    {index === 1 && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary uppercase mb-4">
                        <Star className="w-3 h-3" /> Najpopularniejszy
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">{item.desc}</p>
                    <div className="text-2xl sm:text-3xl font-bold text-gradient mb-4 sm:mb-6">{item.price}</div>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
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

        {/* Section: Baza wiedzy */}
        <section className="py-16 sm:py-20 md:py-24 border-t border-border/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <FadeInView>
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                  <span className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                    📚 Baza wiedzy
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
                    Wszystko o <span className="text-gradient">produkcji filmowej</span>
                  </h2>
                </div>
              </FadeInView>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
                <FadeInView delay={0.1}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Video className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Pre-produkcja</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      Dobry film zaczyna się od solidnego planu. <strong className="text-foreground">Scenariusz, storyboard, brief</strong> – 
                      wszystko ustalamy przed wejściem na plan, by uniknąć niespodzianek.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Brief i konsultacje kreatywne</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Scenariusz i storyboard</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Planowanie logistyki zdjęć</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.2}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Camera className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Realizacja zdjęć</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      <strong className="text-foreground">Profesjonalny sprzęt</strong> – kamery 4K/6K, stabilizatory, 
                      drony, oświetlenie studyjne. Ekipa z doświadczeniem w produkcjach komercyjnych.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Kamery Sony, Blackmagic, RED</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Ujęcia z drona (licencja UAVO)</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Własne studio w Poznaniu</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.3}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Clapperboard className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Post-produkcja</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      To tutaj dzieje się magia. <strong className="text-foreground">Montaż, color grading, efekty VFX</strong>, 
                      sound design – dopracowujemy każdy detal do perfekcji.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Montaż w DaVinci Resolve / Premiere</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Profesjonalna korekcja kolorów</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Motion graphics i animacje</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.4}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Formaty i dystrybucja</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      Jeden film, wiele formatów. Przygotowujemy wersje na <strong className="text-foreground">YouTube, social media, 
                      ekrany LED</strong> i eventy – każdy format zoptymalizowany.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Wersje 16:9, 9:16, 1:1</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Formaty web-ready (H.264, ProRes)</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Napisy i wersje językowe</li>
                    </ul>
                  </div>
                </FadeInView>
              </div>

              <FadeInView delay={0.5}>
                <div className="relative p-5 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20">
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-8 text-4xl sm:text-5xl md:text-6xl text-primary/30 font-serif">"</div>
                  <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center max-w-3xl mx-auto pt-4 sm:pt-6 pb-2 sm:pb-4 px-4">
                    <span className="text-foreground">Film to najskuteczniejszy sposób na opowiedzenie historii marki. Jeden obraz jest wart tysiąca słów – a 24 klatki na sekundę?</span>
                  </blockquote>
                  <p className="text-center text-sm sm:text-base text-muted-foreground">
                    — Zespół Fotz Studio
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/30 rounded-full blur-[100px] sm:blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
                  Gotowy na <span className="text-gradient">profesjonalny film?</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna konsultacja, konkretna wycena, jasny plan realizacji.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                  <Button asChild size="lg" className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    <Link to="/kontakt">
                      <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Bezpłatna wycena
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    <a href="tel:+48790814814">
                      <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
