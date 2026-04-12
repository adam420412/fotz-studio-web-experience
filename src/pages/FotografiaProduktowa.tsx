import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Camera,
  Image,
  Layers,
  CheckCircle2,
  ArrowRight,
  Star,
  Award,
  Clock,
  Shield,
  Zap,
  Eye,
  Target,
  Package,
  Aperture,
  Film,
  Monitor,
  Palette,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

import viz17 from "@/assets/wizualizacje/viz-17.png";
import viz18 from "@/assets/wizualizacje/viz-18.png";
import viz19 from "@/assets/wizualizacje/viz-19.png";
import viz20 from "@/assets/wizualizacje/viz-20.png";

const faqItems = [
  {
    question: "Ile kosztuje sesja fotograficzna produktów?",
    answer:
      "Ceny zaczynają się od 600 zł za pakiet Packshot Basic (10 produktów, 15 ujęć). Sesja E-commerce Standard kosztuje 1500 zł za 25 produktów z retuszem. Pakiet Brand Premium to 3500 zł za nieograniczoną sesję z sesją lifestylową, zdjęciami 360° i retuszem premium. Wycena zależy od liczby produktów, stopnia komplikacji, wymaganych efektów i czasu sesji.",
  },
  {
    question: "Jak przygotować produkty do sesji fotograficznej?",
    answer:
      "Produkty powinny być czyste, bez śladów kurzu, linii pakowaniem i wad. Jeśli produkty są pakowane, możemy fotografować zarówno w opakowaniu, jak i bez. Dostarczasz nam produkty na dzień sesji — my zajmujemy się pozycjonowaniem, oświetleniem i retuszem. Zamiast wysyłki możemy przyjść do Ciebie — usługa realizacji na miejscu u klienta to dodatkowy koszt transportu i wynajmu sprzętu.",
  },
  {
    question: "Czy fotografia produktowa jest ważna dla Allegro i Amazon?",
    answer:
      "Tak, absolutnie. Allegro, Amazon i inne platformy e-commerce wymagają wysokiej jakości zdjęć produktów. Złe zdjęcia to stracone sprzedaż — aż 70% kupujących decyduje się na zakup na podstawie wyglądu produktu w galerii. Nasze zdjęcia spełniają wszystkie wymagania platform: rozdzielczość, formaty, wymiary, białe tło (jeśli wymagane) i konsystencję stylów.",
  },
  {
    question: "Jakie formaty plików otrzymam po sesji?",
    answer:
      "Dostarczamy pliki w formatach, które będą Ci przydatne: PNG z przezroczystością (do Allegro, Shopify), JPG (do Amazona, social mediów), pliki RAW (do dalszego retuszu). Wszystkie zdjęcia będą zretuszowane, wykadrowane i przygotowane gotowe do wstawienia na platformę. Otrzymasz też dostęp do zasobów w chmurze (Google Drive, WeTransfer).",
  },
  {
    question: "Czy robicie sesje u klienta czy w studiu?",
    answer:
      "Pracujemy w naszym profesjonalnym studiu w Poznaniu, które ma pełne oświetlenie LED, cykloramę (białe tło), różne powierzchnie (drewno, marmur, beton) i sprzęt do zdjęć 360°. Sesje u klienta (place, magazyn, biuro) są możliwe — jest to opcja dodatkowa z opłatą za transport sprzętu i wynajm. Sesje w studiu są szybsze i tańsze.",
  },
  {
    question: "Co to jest packshot?",
    answer:
      "Packshot (fotografia na białym tle) to profesjonalne zdjęcie produktu w neutralnym, izolowanym środowisku. To najbardziej rozpowszechniony format na platformach e-commerce. Zdjęcie packshot pokazuje produkt z góry, boku, czasami z detali. Tło jest całkowicie białe — fokus 100% na produkcie. To idealne zdjęcie do katalogów, stron www i platform sprzedażowych.",
  },
];

const FotografiaProduktowa = () => {
  const problems = [
    {
      icon: Image,
      title: "Rozmyte lub słabej jakości zdjęcia produktów",
      desc: "Zdjęcia ze smartfona wyglądają amatorszo. Klienci nie chcą kupować produktów, które źle wyglądają w galerii.",
    },
    {
      icon: Package,
      title: "Generyczne stock photos zamiast prawdziwych produktów",
      desc: "Stock photos schodzą ze sprzedażą. Kupujący czują się oszukani, gdy produkt w rzeczywistości wygląda inaczej.",
    },
    {
      icon: Monitor,
      title: "Wymagania platform (Allegro, Amazon, Shopify)",
      desc: "Każda platforma ma inne wymagania — wymiary, formaty, białe tło. Przygotowanie zdjęć zajmuje dni.",
    },
    {
      icon: Eye,
      title: "Brak spójności w stylu zdjęć",
      desc: "Każde zdjęcie wygląda inaczej. Galeria produktów wygląda niesprofesjonalnie i niepewnie, co zniechęca kupujących.",
    },
  ];

  const services = [
    {
      icon: Aperture,
      title: "Packshot (białe tło)",
      description:
        "Profesjonalne zdjęcia produktów na białym tle — idealne dla Allegro, Amazon i Shopify. Ostre, detale w 4K, gotowe do wstawienia.",
    },
    {
      icon: Film,
      title: "Fotografia lifestylowa",
      description:
        "Produkty w rzeczywistym kontekście użycia. Zdjęcia pokazujące produkt w akcji, na tle wnętrz lub w otoczeniu — buduje emocjonalny związek z kupującymi.",
    },
    {
      icon: Layers,
      title: "Zdjęcia 360°",
      description:
        "Interaktywne obroty produktu — kupujący mogą zobaczyć każdy wymiar i detale. Zwiększa konwersję o 30%+ na platformach obsługujących 360°.",
    },
    {
      icon: Package,
      title: "Fotografia packagingu",
      description:
        "Profesjonalne zdjęcia opakowań i pudełek — dla katalogów, katalogów, ulotek, social mediów. Pokazuje markę w najlepszym świetle.",
    },
    {
      icon: Palette,
      title: "Retusz i postprodukcja",
      description:
        "Usuwanie defektów, wyrównanie koloru, kadrowanie, konwersja formatu. Każde zdjęcie jest wykadrowane i gotowe do publikacji.",
    },
    {
      icon: Target,
      title: "Sesje modowe z produktem",
      description:
        "Zdjęcia odzieży i akcesoriów z modelkami. Fotografia professionalna, stylizacja, makijaż — wszystko w pakiecie.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Brief produktowy",
      description:
        "Poznajemy Twoje produkty, rynek docelowy, konkurencję i cele sesji. Czy to Allegro, Amazon, czy Twoja strona — dostosowujemy style.",
    },
    {
      step: "02",
      title: "Przygotowanie produktów",
      description:
        "Dostarczasz produkty w dobrej kondycji. Moje czyszczą, pozycjonują i przygotowują do sesji. Jeśli wysyłasz pocztą — umów się na termin.",
    },
    {
      step: "03",
      title: "Sesja fotograficzna",
      description:
        "Sesja w profesjonalnym studiu z pełnym oświetleniem, cykloramą, różnymi tłami i sprzętem. Zdjęcia robocze naRAW-ie dla maksymalnej jakości.",
    },
    {
      step: "04",
      title: "Retusz i postprodukcja",
      description:
        "Edycja każdego zdjęcia: wyrównanie białego tła, usuwanie defektów, korekcja koloru, kalibracja ekspozycji, konwersja formatów.",
    },
    {
      step: "05",
      title: "Dostawa plików gotowych",
      description:
        "Wszystkie zdjęcia w formatach PNG, JPG, RAW — na dysku, w chmurze lub bezpośrednio na Allegro/Amazon. Gotowe do publikacji bez zmian.",
    },
  ];

  const packages = [
    {
      name: "Packshot Basic",
      price: "600",
      period: "za pakiet",
      description: "Szybka sesja produktów na białym tle",
      features: [
        "10 produktów",
        "15 ujęć (góra, bok, detale)",
        "Białe tło profesjonalne",
        "Retusz podstawowy",
        "Format PNG i JPG",
        "Wykadrowanie i kalibracja",
        "Dostawa w 48h",
        "Do 20 rund poprawek",
        "Bez praw do użytku komercyjnego",
      ],
      popular: false,
    },
    {
      name: "E-commerce Standard",
      price: "1 500",
      period: "za pakiet",
      description: "Pełna sesja z retuszem dla platform",
      features: [
        "25 produktów",
        "50 ujęć (packshot + detale)",
        "Białe tło + tło szare/teksturowane",
        "Retusz premium (defekty, kolorystyka)",
        "Konwersja do wszystkich formatów",
        "Wymiary dostosowane do Allegro/Amazon/Shopify",
        "Zarządzanie plikami w chmurze",
        "5 rund poprawek po finalizacji",
        "Dostawa w 3-4 dni",
      ],
      popular: true,
    },
    {
      name: "Brand Premium",
      price: "3 500",
      period: "za pakiet",
      description: "Kompleksowa sesja z lifestyle i 360°",
      features: [
        "Nieograniczona liczba produktów",
        "Sesja lifestylowa (produkty w akcji)",
        "Zdjęcia 360° (do 6 produktów)",
        "Białe tło + lifestyle + styled flat lay",
        "Retusz premium na wszystkich zdjęciach",
        "Wszystkie formaty i wymiary",
        "Profesjonalny styling i rekwizyty",
        "Wsparcie w układaniu galerii produktów",
        "Nielimitowane poprawki przez 30 dni",
        "Dostawa w 5-7 dni",
      ],
      popular: false,
    },
  ];

  const stats = [
    { value: "500+", label: "sesji fotograficznych" },
    { value: "10 000+", label: "profesjonalnych zdjęć" },
    { value: "98%", label: "klientów e-commerce poleca" },
    { value: "Allegro, Amazon, Shopify", label: "platformy ready" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Fotografia Produktowa — Profesjonalne Zdjęcia Produktów | Fotz Studio"
        description="Profesjonalna fotografia produktowa dla e-commerce i marek. Fotz Studio — zdjęcia produktów, sesje packshot, fotografia białe tło. Zamów wycenę!"
        canonical="https://fotz.pl/uslugi/fotografia-produktowa"
        ogTitle="Fotografia Produktowa — Profesjonalne Zdjęcia Produktów"
        ogDescription="Sesje fotograficzne produktów dla Allegro, Amazon, Shopify. Packshot, 360°, retusz — od 600 zł. Poznań i cała Polska."
      />
      <ServiceSchema
        name="Fotografia produktowa"
        description="Profesjonalne zdjęcia produktów dla e-commerce, katalogów i materiałów marketingowych. Fotz Studio oferuje sesje packshot, fotografię lifestylową, zdjęcia 360° i retusz."
        url="https://fotz.pl/uslugi/fotografia-produktowa"
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Fotografia produktowa", url: "https://fotz.pl/uslugi/fotografia-produktowa" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <Camera className="w-4 h-4" />
              Fotografia produktowa · Poznań i cała Polska
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Fotografia produktowa{" "}
              <span className="text-primary">— profesjonalne zdjęcia produktów</span>{" "}
              dla e-commerce
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Sesje fotograficzne produktów, które zwiększają sprzedaż na Allegro,
              Amazon i Shopify. Packshot na białym tle, fotografia lifestylowa, zdjęcia
              360° — wszystko z retuszem w cenie. Od 600 zł.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów sesję fotograficzną <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <Link to="#pakiety">Zobacz ceny pakietów</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
            >
              {[
                "Studio profesjonalne w Poznaniu",
                "Retusz w cenie",
                "Allegro/Amazon ready",
                "Wycena bezpłatna",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeInView key={i} delay={i * 0.1} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Czy Twoje zdjęcia produktów potrafią sprzedawać?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Słabe zdjęcia to stracona sprzedaż. Sprawdź, czy masz te problemy.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="bg-card border border-border/60 rounded-xl p-6 flex gap-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Fotz Studio rozwiązuje te problemy. Fotografujemy produkty, które się sprzedają.
            </p>
            <Button asChild>
              <Link to="/kontakt">
                Porozmawiajmy o Twojej sesji <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kompletne usługi fotografii produktowej
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Od packshot na białym tle po sesje lifestylowe — wybierz to, czego potrzebujesz.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeInView key={i} delay={i * 0.08}>
                <div className="bg-card border border-border/60 rounded-xl p-6 h-full hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Jak wygląda sesja fotograficzna?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              5-etapowy proces — od briefu do gotowych plików w formatach platformach.
            </p>
          </FadeInView>

          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((step, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0 text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nasze realizacje fotograficzne
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Przykłady sesji produktowych dla e-commerce, katalogów i materiałów marketingowych.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[viz17, viz18, viz19, viz20].map((img, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden border border-border/60 bg-card aspect-video">
                  <img
                    src={img}
                    alt={`Sesja fotograficzna produktów Fotz Studio ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/agencja-marketingowa/poznan">
                Zobacz całe portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Packages */}
      <section id="pakiety" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pakiety sesji fotograficznych — ceny
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparentne ceny bez ukrytych kosztów. Zamieniamy produkty w zdjęcia, które się sprzedają.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div
                  className={`rounded-2xl border p-6 flex flex-col h-full relative ${
                    pkg.popular
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                      : "border-border/60 bg-card"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Najpopularniejszy
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-foreground">{pkg.price} zł</span>
                      <span className="text-muted-foreground text-sm">{pkg.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-8 flex-1">
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={pkg.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    <Link to="/kontakt">
                      Zamów {pkg.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Potrzebujesz indywidualnej wyceny?{" "}
              <Link to="/kontakt" className="text-primary hover:underline font-medium">
                Napisz do nas
              </Link>{" "}
              — przygotujemy ofertę szytą na miarę.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dlaczego Fotz Studio do fotografii produktowej?
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "Studio profesjonalne",
                desc: "Profesjonalne oświetlenie LED, cyklorama, wiele tła i powierzchni — wszystko w jednym miejscu.",
              },
              {
                icon: Zap,
                title: "Szybka realizacja",
                desc: "Sesje od 1 do 5 dni. Gotowe pliki w formatach — od razu do wstawienia na platformę.",
              },
              {
                icon: Shield,
                title: "Allegro/Amazon/Shopify ready",
                desc: "Wszystkie wymiary, formaty i specyfikacje platform. Zdjęcia gotowe bez zmian.",
              },
              {
                icon: Palette,
                title: "Retusz w cenie",
                desc: "Każde zdjęcie jest retuszowane, wykadrowane i skalibrowane kolorystycznie.",
              },
            ].map((item, i) => (
              <FadeInView key={i} delay={i * 0.1} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Fotografia produktowa — poradnik dla e-commerce i marek
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Fotografia produktowa</strong> to jeden z kluczowych elementów sprzedaży online. Aż 70% kupujących decyduje się na zakup na podstawie wyglądu produktu w galerii. Złe zdjęcia = stracona sprzedaż. Dobre zdjęcia = więcej konwersji, wyższe oceny i lepszy wizerunek marki.
              </p>
              <p>
                W Fotz Studio fotografujemy produkty metodycznie — każde zdjęcie jest zaplanowane, wykonane w profesjonalnym studiu i retuszowane. Wynikiem są zdjęcia, które zwiększają zainteresowanie produktem i budują zaufanie do marki.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Zdjęcia packshot vs. fotografia lifestylowa — jaka różnica?
              </h3>
              <p>
                <strong className="text-foreground">Packshot (białe tło)</strong> to standardowa fotografia produktu na neutralnym tle. Pokazuje produkt sam, bez rozpraszaczy, z wyraźnymi detailami. To format wymagany przez Allegro, Amazon i Shopify. Zdjęcia packshot to fundament galerii produktowej.
              </p>
              <p>
                <strong className="text-foreground">Fotografia lifestylowa</strong> pokazuje produkt w rzeczywistym kontekście użycia. Produkt na tle wnętrz, używany przez człowieka, albo w scenach, gdzie naturalnie się pojawia. Fotografia lifestylowa buduje emocjonalny związek z kupującymi — pokazuje, jak produkt poprawia ich życie.
              </p>
              <p>
                Profesjonalne e-commerce powinno mieć <strong className="text-foreground">oba rodzaje zdjęć</strong>. Packshot na galerii produktu (wymóg platform), fotografia lifestylowa w opisie produktu i na social mediach.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Jak fotografia produktowa wpływa na sprzedaż?
              </h3>
              <p>
                Badania pokazują, że wysokiej jakości zdjęcia produktów zwiększają:
              </p>
              <p>
                <strong className="text-foreground">Konwersję</strong> — więcej osób, które zobaczą zdjęcie, chce kupić produkt. Złe zdjęcia odstraszają, dobre przyciągają.
              </p>
              <p>
                <strong className="text-foreground">Oceny i recenzje</strong> — kupujący czują się bardziej pewnie, gdy widzą czytelne zdjęcia. Zadowoleni klienci zostawiają lepsze oceny.
              </p>
              <p>
                <strong className="text-foreground">Zwroty i reklamacje</strong> — mniej zwrotów, bo produkt wygląda dokładnie tak, jak na zdjęciu. Mniej zaskoczenia i rozczarowania.
              </p>
              <p>
                <strong className="text-foreground">Rozpoznawalność marki</strong> — spójna estetyka zdjęć (ten sam styl, oświetlenie, retusz) buduje rozpoznawalność. Klienci poznają Twoje produkty bez czytania nazwy.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Wymagania platform — Allegro, Amazon, Shopify
              </h3>
              <p>
                Każda platforma e-commerce ma swoje wymagania dotyczące zdjęć:
              </p>
              <p>
                <strong className="text-foreground">Allegro</strong> wymaga minimum 1600×1600 px, białego tła (o ile nie jest częścią designu produktu), ostrości i koloru. Pierwsze zdjęcie to twoja szansa na zwrócenie uwagi — warto, żeby było najprofesjonalniejsze.
              </p>
              <p>
                <strong className="text-foreground">Amazon</strong> to dużo bardziej wymagający. Wymaga co najmniej 6 zdjęć na liście, białego tła dla packshota, nikelu lub widoku z góry. Zdjęcia muszą pokazywać produkt z różnych kątów, detale i porównanie rozmiaru (np. położony obok monety).
              </p>
              <p>
                <strong className="text-foreground">Shopify</strong> to Twoja własna strona — masz więcej swobody. Ale wciąż warto stosować się do standardów e-commerce: packshot, detale, skalę, lifestyle i zdjęcia 360° (jeśli technologia to wspiera).
              </p>
              <p>
                Fotz Studio przygotowuje zdjęcia zgodnie z wymogami każdej platformy. Nie musisz się martwić o wymiary czy formaty — to już w pakiecie.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Fotografia produktowa w domu vs. profesjonalne studio
              </h3>
              <p>
                Można fotografować produkty smartfonem w domu. Wynik? Słabe zdjęcia, które mają szansę sprzedać, ale nie imponują. Brak profesjonalnego oświetlenia, tła i retuszu to widać od razu.
              </p>
              <p>
                Profesjonalne studio ma:
              </p>
              <p>
                <strong className="text-foreground">Oświetlenie LED</strong> — precyzyjne, bez ciepła, pełny spektrum kolorów. Produkty wyglądają naturalnie i ostrze.
              </p>
              <p>
                <strong className="text-foreground">Cyklorama</strong> — białe, gładkie tło, które się zaokrągla w horyzont. Nie widać krawędzi ani przejść — wygląda profesjonalnie.
              </p>
              <p>
                <strong className="text-foreground">Sprzęt</strong> — lustrzanki, obiektywy makro, statywy, dyfuzory, filtry. Wszystko jest tam, żeby zrobić najlepsze zdjęcie.
              </p>
              <p>
                <strong className="text-foreground">Retusz profesjonalny</strong> — edycja w Lightroom i Photoshop, usuwa defekty, wyrównuje kolory, dodaje ostateczny blask.
              </p>
            </div>
          </FadeInView>

          {/* Internal links */}
          <div className="mt-10 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/uslugi/video-marketing"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Video marketing — sesje produktowe
            </Link>
            <Link
              to="/uslugi/logo-i-branding"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Logo i branding — identyfikacja wizualna
            </Link>
            <Link
              to="/uslugi/strony-internetowe"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Strony internetowe e-commerce
            </Link>
            <Link
              to="/agencja-graficzna"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Agencja graficzna — wszystkie usługi
            </Link>
            <Link
              to="/blog"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Blog — artykuły o fotografii i e-commerce
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Często zadawane pytania — fotografia produktowa
            </h2>
          </FadeInView>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <FadeInView key={i} delay={i * 0.05}>
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-card border border-border/60 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeInView>
            ))}
          </Accordion>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default FotografiaProduktowa;
