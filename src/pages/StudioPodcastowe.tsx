import { Link } from "react-router-dom";
import { Mic, Video, Headphones, Sliders, ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/StructuredData";

const features = [
  {
    icon: Mic,
    title: "Profesjonalne mikrofony",
    description: "Mikrofony studyjne Shure i Rode zapewniające krystalicznie czysty dźwięk.",
  },
  {
    icon: Video,
    title: "Nagrania video",
    description: "Możliwość nagrań video w 4K z profesjonalnym oświetleniem.",
  },
  {
    icon: Headphones,
    title: "Monitoring audio",
    description: "System monitoringu pozwalający na kontrolę jakości w czasie rzeczywistym.",
  },
  {
    icon: Sliders,
    title: "Postprodukcja",
    description: "Pełna obróbka audio i video w cenie pakietu lub dodatkowo.",
  },
];

const packages = [
  {
    name: "Basic",
    price: "350",
    unit: "/ godzina",
    description: "Idealne na krótkie nagrania i wywiady.",
    features: [
      "Wynajem studia",
      "2 mikrofony",
      "Podstawowe oświetlenie",
      "Wsparcie techniczne",
    ],
  },
  {
    name: "Pro",
    price: "600",
    unit: "/ godzina",
    description: "Pełne wyposażenie dla profesjonalnych produkcji.",
    features: [
      "Wynajem studia",
      "4 mikrofony",
      "Profesjonalne oświetlenie",
      "Nagranie video 4K",
      "Wsparcie techniczne",
      "Podstawowa edycja",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Wycena",
    unit: "indywidualna",
    description: "Dla regularnych produkcji i większych projektów.",
    features: [
      "Wszystko z Pro",
      "Dedykowany realizator",
      "Pełna postprodukcja",
      "Priorytety rezerwacji",
      "Materiały brandowane",
    ],
  },
];

export default function StudioPodcastowe() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <SEOHead
        title="Studio Podcastowe Poznań — Nagrania Podcastów Audio i Wideo | Fotz Studio"
        description="Studio podcastowe Poznań — profesjonalne nagrania podcastów audio i wideo, montaż, postprodukcja, dystrybucja. Wynajmij studio nagrań w Poznaniu. Fotz Studio."
        canonical="https://fotz.pl/uslugi/studio-podcastowe"
        keywords="studio podcastowe, nagrywanie podcastów, podcast Poznań, studio nagrań, produkcja podcastów"
      />
      <ServiceSchema 
        name="Studio Podcastowe"
        description="Profesjonalne studio do nagrywania podcastów z pełnym wyposażeniem audio i video"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Studio Podcastowe", url: "https://fotz.pl/uslugi/studio-podcastowe" }
        ]}
      />
      <Layout>
        {/* Hero */}
        <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10 px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <span className="inline-block text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4">
                Studio podcastowe
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
                Nagraj podcast w{" "}
                <span className="text-gradient">profesjonalnym studiu</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                Nasze studio w centrum Poznania oferuje wszystko, czego potrzebujesz 
                do nagrania profesjonalnego podcastu, wywiadu czy materiału video.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                  <Link to="/kontakt" className="group">
                    Zarezerwuj termin
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
                  <a href="#cennik">Zobacz cennik</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070"
                  alt="Studio podcastowe Fotz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={ref} className="section-padding bg-card px-4 sm:px-6 md:px-12">
        <div className="container-wide">
          <div className="text-center mb-10 sm:mb-16">
            <span
              className={cn(
                "inline-block text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Wyposażenie
            </span>
            <h2
              className={cn(
                "text-2xl sm:text-3xl md:text-5xl font-heading font-bold transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Profesjonalny <span className="text-gradient">sprzęt</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-secondary border border-border transition-all duration-700 hover-lift",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: isVisible ? `${(index + 2) * 100}ms` : "0ms",
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-heading font-bold mb-1.5 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background px-4 sm:px-6 md:px-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {[
              "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070",
              "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070",
              "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070",
              "https://images.unsplash.com/photo-1606836576983-8b458e75221d?q=80&w=2070",
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg sm:rounded-xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Studio ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="cennik" className="section-padding bg-card px-4 sm:px-6 md:px-12">
        <div className="container-wide">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4">
              Cennik
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold">
              Wybierz <span className="text-gradient">pakiet</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  "relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border transition-all",
                  pkg.popular
                    ? "bg-primary/5 border-primary md:scale-105"
                    : "bg-secondary border-border"
                )}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-medium whitespace-nowrap">
                    Popularny
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-1.5 sm:mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient">
                    {pkg.price}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground">{pkg.unit}</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{pkg.description}</p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  className="w-full text-sm sm:text-base"
                  asChild
                >
                  <Link to="/kontakt">Zarezerwuj</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background px-4 sm:px-6 md:px-12">
        <div className="container-wide text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Masz pytania?{" "}
            <span className="text-gradient">Porozmawiajmy</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Chętnie opowiemy więcej o naszym studiu i pomożemy zaplanować 
            Twoje nagranie.
          </p>
          <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
            <Link to="/kontakt" className="group">
              Skontaktuj się
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
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
              Studio podcastowe Poznań — profesjonalne nagrania podcastów dla firm
            </h2>
            <p className="text-muted-foreground mb-4">
              Studio podcastowe Fotz Studio w Poznaniu to profesjonalna przestrzeń
              do nagrywania podcastów audio i wideo dla firm i twórców. Podcast
              to jeden z najszybciej rosnących formatów content marketingu — buduje
              autorytet, tworzy lojalną społeczność i generuje ruch na stronie.
              W naszym studiu możesz nagrać podcast audio (Spotify, Apple Podcasts),
              podcast wideo (YouTube) lub oba formaty jednocześnie.
            </p>
            <p className="text-muted-foreground mb-6">
              Studio nagrań w Poznaniu wyposażone jest w profesjonalne mikrofony
              (Shure, Rode), akustykę, oświetlenie studyjne i systemy nagrywające.
              Zajmujemy się całym procesem: nagranie, montaż audio i wideo,
              mastering, okładkę odcinka i dystrybucję na platformy.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Podcast firmowy jako narzędzie content marketingu — nagrania w Fotz Studio
            </h2>
            <p className="text-muted-foreground mb-4">
              Podcast firmowy to skuteczne narzędzie budowania marki eksperckiej.
              Regularne odcinki z wartościową wiedzą branżową przyciągają lojalnych
              słuchaczy, którzy stają się klientami. Podcast wideo na YouTube dodatkowo
              buduje zasięg organiczny i pozycjonuje markę w wynikach wyszukiwania.
            </p>
            <p className="text-muted-foreground mb-6">
              Pomagamy firmom z Poznania i całej Polski uruchomić podcast od A do Z:
              koncepcja formatu, scenariusze odcinków, nagranie, postprodukcja,
              projekt graficzny (cover art, banery), dystrybucja i promocja.
              Obsługa abonamentowa — regularne odcinki bez stresu po Twojej stronie.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Wynajem studia nagrań Poznań — sesje własne i produkcja na zlecenie
            </h2>
            <p className="text-muted-foreground mb-4">
              Studio nagrań Fotz Studio w Poznaniu dostępne jest na wynajem na godziny
              lub pakiety dniowe. Oferujemy dwa tryby: wynajem studia (przychodzisz
              ze swoim materiałem, my zapewniamy sprzęt i reżysera) oraz produkcja
              kompleksowa (my zajmujemy się wszystkim od nagrania po gotowy odcinek).
            </p>
            <p className="text-muted-foreground">
              Skontaktuj się z nami, by zarezerwować studio nagrań w Poznaniu lub
              omówić produkcję regularnego podcastu dla Twojej firmy. Terminy dostępne
              6 dni w tygodniu, nagrania możliwe również w weekendy.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/uslugi/branding" className="text-primary hover:underline font-medium text-sm">→ Branding</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

      </Layout>
    </>
  );
}
