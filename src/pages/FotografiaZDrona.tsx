import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Navigation, 
  Camera, 
  Film, 
  Building2, 
  MapPin, 
  Factory, 
  Plane, 
  Eye, 
  Video, 
  Mountain,
  CheckCircle2,
  ArrowRight,
  Phone,
  Play,
  Expand
} from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ImageLightbox } from "@/components/ImageLightbox";
import { VideoLightbox } from "@/components/VideoLightbox";

// Import real drone photos
import dronePicnic1 from "@/assets/drone/event-picnic-1.jpg";
import droneBullRide from "@/assets/drone/event-bull-ride.jpg";
import dronePicnicTop from "@/assets/drone/event-picnic-top.jpg";
import droneAerialView from "@/assets/drone/event-aerial-view.jpg";
import droneConcert1 from "@/assets/drone/event-concert-1.jpg";
import stadionFajerwerki from "@/assets/enea/stadion-race-fajerwerki.jpg";

const galleryImages = [
  { src: dronePicnic1, alt: "Event firmowy - piknik z lotu ptaka", category: "Eventy" },
  { src: droneBullRide, alt: "Event plenerowy - atrakcje z drona", category: "Eventy" },
  { src: dronePicnicTop, alt: "Piknik firmowy - widok z góry", category: "Eventy" },
  { src: droneAerialView, alt: "Strefa relaksu - perspektywa lotnicza", category: "Eventy" },
  { src: droneConcert1, alt: "Koncert plenerowy - ujęcie z drona", category: "Eventy" },
  { src: stadionFajerwerki, alt: "Enea Stadion Poznań - nocne fajerwerki z drona", category: "Eventy" },
];

const stats = [
  { value: 500, suffix: "+", label: "Lotów zrealizowanych" },
  { value: 12, suffix: "", label: "Lat doświadczenia" },
  { value: 4, suffix: "K", label: "Jakość nagrań" },
  { value: 100, suffix: "%", label: "Zadowolonych klientów" },
];

const services = [
  {
    icon: Building2,
    title: "Nieruchomości",
    description: "Prezentacja domów, działek i inwestycji z lotu ptaka. Idealne dla deweloperów i biur nieruchomości.",
  },
  {
    icon: Factory,
    title: "Przemysł & Hale",
    description: "Dokumentacja hal magazynowych, fabryk i terenów przemysłowych. Monitoring postępów budowy.",
  },
  {
    icon: Plane,
    title: "Turystyka & Hotele",
    description: "Promocyjne materiały dla hoteli, ośrodków i atrakcji turystycznych z perspektywy lotu ptaka.",
  },
  {
    icon: Video,
    title: "Filmy reklamowe",
    description: "Dynamiczne ujęcia do spotów reklamowych i filmów promocyjnych w jakości 4K.",
  },
  {
    icon: Mountain,
    title: "Krajobrazy & Eventy",
    description: "Spektakularne ujęcia krajobrazów, eventów plenerowych i wydarzeń sportowych.",
  },
  {
    icon: Eye,
    title: "Inspekcje & Monitoring",
    description: "Kontrola trudno dostępnych miejsc, inspekcje dachów, linii energetycznych i konstrukcji.",
  },
];

const packages = [
  {
    name: "Start",
    price: "od 800",
    description: "Podstawowy pakiet zdjęć z drona",
    features: [
      "Do 30 minut lotu",
      "10 zdjęć w wysokiej rozdzielczości",
      "Podstawowa obróbka",
      "Dostawa w 3 dni robocze",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "od 1 500",
    description: "Rozszerzony pakiet foto + video",
    features: [
      "Do 60 minut lotu",
      "20 zdjęć + film 1-2 min",
      "Profesjonalna obróbka",
      "Montaż z muzyką",
      "Dostawa w 5 dni",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "od 3 000",
    description: "Kompleksowa produkcja lotnicza",
    features: [
      "Nieograniczony czas lotu",
      "Pełna sesja foto + video",
      "Panoramy 360°",
      "Profesjonalny montaż",
      "Konsultacje i planowanie",
      "Dostawa w 7 dni",
    ],
    popular: false,
  },
];



const faqItems = [
  {
    question: "Co to jest fotografia z drona?",
    answer: "Fotografia z drona to nowoczesna technika pozyskiwania zdjęć i filmów z powietrza przy użyciu bezzałogowych statków powietrznych (dronów). Dzięki dronom możemy filmować i fotografować obiekty z perspektywy lotu ptaka, uzyskując unikalne ujęcia niemożliwe do osiągnięcia tradycyjnymi metodami. Usługa ta świetnie uzupełnia tradycyjną fotografię eventową i produktową.",
  },
  {
    question: "Jakie są korzyści z wykorzystania drona w fotografii?",
    answer: "Zdjęcia i filmy z drona pozwalają na uzyskanie unikalnych ujęć z powietrza, prezentując obiekty w atrakcyjny sposób. Drony umożliwiają filmowanie z niedostępnych wcześniej perspektyw - idealne do tworzenia filmów promocyjnych, dokumentacji prac budowlanych czy inspekcji terenów. Materiały z drona doskonale sprawdzają się w kampaniach social media i spotach reklamowych.",
  },
  {
    question: "Ile kosztuje usługa zdjęć z drona?",
    answer: "Cennik zależy od zakresu prac: czasu lotu, liczby ujęć, postprodukcji i dodatkowych opcji. Podstawowe zdjęcia z drona zaczynają się od 800 PLN, bardziej zaawansowane usługi jak filmowanie 4K czy panoramy 360° są droższe. Przygotowujemy indywidualną wycenę dopasowaną do projektu.",
  },
  {
    question: "Czy oferujecie panoramy 360° i transmisje live?",
    answer: "Tak, wykonujemy panoramy 360° z drona do wirtualnych prezentacji oraz transmisje live wideo dla wydarzeń i relacji natychmiastowych. Nasze rozwiązania obejmują również przekazy na platformy streamingowe. To idealne uzupełnienie wizualizacji 3D dla branży nieruchomości.",
  },
  {
    question: "Dla jakich branż wykonujecie zdjęcia z drona?",
    answer: "Usługi dronowe znajdują zastosowanie w wielu branżach: nieruchomości (prezentacja domów i działek), budownictwo (monitoring postępów), turystyka (promocja hoteli), rolnictwo, przemysł (inspekcje hal) oraz eventy i wydarzenia sportowe. Współpracujemy z deweloperami, agencjami marketingowymi i firmami produkcyjnymi.",
  },
  {
    question: "Jaką jakość materiałów dostarczacie?",
    answer: "Dostarczamy filmy i zdjęcia w wysokiej jakości 4K, w formatach gotowych do publikacji online i do druku. Posiadamy profesjonalne drony z kamerami stabilizowanymi gimbalem, co gwarantuje stabilny obraz nawet podczas dynamicznych ujęć. Materiały są gotowe do wykorzystania w produkcji filmowej i kampaniach reklamowych.",
  },
  {
    question: "Jak wygląda proces przygotowania do lotu?",
    answer: "Przygotowanie obejmuje wybór sprzętu, sprawdzenie warunków pogodowych, uzyskanie wymaganych pozwoleń oraz planowanie ujęć. Nasz zespół zajmuje się całą organizacją - od konfiguracji po profesjonalne filmowanie. Proces jest podobny do naszych standardowych sesji fotograficznych.",
  },
  {
    question: "Jak zamówić usługę fotografii z drona?",
    answer: "Aby skorzystać z naszych usług wystarczy kontakt: opisz projekt, lokalizację i wymagania. Przygotujemy ofertę, przedstawimy cennik i zaplanujemy termin lotu. Zapraszamy do kontaktu przez formularz lub telefon +48 790 814 814.",
  },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, displayValue } = useCountUp({ end: value, duration: 2000 });
  return (
    <div className="text-center" ref={ref}>
      <div className="text-4xl md:text-5xl font-bold text-primary">
        {displayValue}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

const droneVideos = [
  { src: "/videos/enea-stadion-header.mp4", title: "Enea Stadion Poznań", category: "Eventy sportowe" },
  { src: "/videos/skaland-osiedle.mp4", title: "Osiedle Skaland", category: "Nieruchomości" },
  { src: "/videos/eko-kamionki.mp4", title: "Eko Kamionki", category: "Nieruchomości" },
  { src: "/videos/sequence-01.mp4", title: "Realizacja eventowa", category: "Eventy" },
];

export default function FotografiaZDrona() {
  const [imageLightboxOpen, setImageLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");

  const openImageLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setImageLightboxOpen(true);
  };

  const openVideoLightbox = (src: string, title: string) => {
    setCurrentVideoSrc(src);
    setCurrentVideoTitle(title);
    setVideoLightboxOpen(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Zdjęcia z Drona | Fotografia Lotnicza 4K | Fotz"
        description="Zdjęcia i filmy z drona 4K. Ujęcia z lotu ptaka dla nieruchomości, eventów, przemysłu. Panoramy 360°. Fotz Poznań."
        canonical="https://fotz.pl/uslugi/fotografia-z-drona"
      />

      <ServiceSchema
        name="Fotografia z Drona"
        description="Profesjonalne zdjęcia i filmy z drona. Ujęcia z lotu ptaka dla nieruchomości, przemysłu, turystyki i eventów."
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Fotografia z drona", url: "https://fotz.pl/uslugi/fotografia-z-drona" }
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.15),transparent_50%)]" />
        
        <div className="container-wide relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6 text-primary border-primary/30">
              <Navigation className="w-4 h-4 mr-2" />
              Usługi dronowe
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Fotografia z Drona: <br className="hidden md:block" />
              <span className="text-primary">Zdjęcia i Filmy z Lotu Ptaka</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Odkryj świat z zupełnie nowej perspektywy. Oferujemy profesjonalne zdjęcia i filmy z drona, 
              które pozwolą Ci zaprezentować firmę, nieruchomość lub wydarzenie w sposób, który zapadnie w pamięć.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/kontakt">
                  Zamów wycenę
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="tel:+48790814814">
                  <Phone className="w-4 h-4" />
                  +48 790 814 814
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <StatCounter {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Rodzaje usług dronowych
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profesjonalne ujęcia z powietrza dla różnych branż i zastosowań
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Galeria realizacji
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Zobacz przykłady naszych ujęć z drona - od nieruchomości po krajobrazy
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-video rounded-xl overflow-hidden group relative cursor-pointer"
                onClick={() => openImageLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-xs text-white/80 font-medium">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Filmy z drona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dynamiczne ujęcia video z lotu ptaka - od nieruchomości po eventy sportowe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {droneVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openVideoLightbox(video.src, video.title)}
              >
                <div className="aspect-video rounded-xl overflow-hidden bg-secondary/50 relative">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    playsInline
                    muted
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="font-medium text-foreground">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Cennik usług dronowych
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wybierz pakiet dopasowany do Twoich potrzeb. Wszystkie ceny netto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${pkg.popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Najpopularniejszy</Badge>
                    </div>
                  )}
                  <CardContent className="p-6 pt-8">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground ml-1">PLN</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      <Link to="/kontakt">Wybierz pakiet</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Odpowiedzi na najważniejsze pytania o fotografię z drona
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Powiązane usługi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fotografia z drona świetnie łączy się z innymi usługami, tworząc kompleksową ofertę marketingową
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Produkcja filmów", desc: "Profesjonalne filmy promocyjne z ujęciami z drona", href: "/produkcja-filmow-poznan", icon: Film },
              { title: "Fotografia eventowa", desc: "Kompleksowa dokumentacja wydarzeń", href: "/fotograf-poznan", icon: Camera },
              { title: "Wizualizacje 3D", desc: "Połączenie zdjęć z drona z renderami 3D", href: "/wizualizacje-3d", icon: Building2 },
              { title: "Marketing nieruchomości", desc: "Pełna obsługa marketingowa deweloperów", href: "/dla-kogo/nieruchomosci", icon: MapPin },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={service.href} className="block group">
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <Navigation className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Gotowy na ujęcia z lotu ptaka?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Skontaktuj się z nami, aby omówić Twój projekt. Przygotujemy indywidualną ofertę 
              dopasowaną do Twoich potrzeb i budżetu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/kontakt">
                  Zamów bezpłatną wycenę
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">Zobacz realizacje</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Lightboxes */}
      <ImageLightbox
        isOpen={imageLightboxOpen}
        onClose={() => setImageLightboxOpen(false)}
        images={galleryImages}
        currentIndex={currentImageIndex}
        onNavigate={setCurrentImageIndex}
      />
      <VideoLightbox
        isOpen={videoLightboxOpen}
        onClose={() => setVideoLightboxOpen(false)}
        videoSrc={currentVideoSrc}
        title={currentVideoTitle}
      />
    </Layout>
  );
}
