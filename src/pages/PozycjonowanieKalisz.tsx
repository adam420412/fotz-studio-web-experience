import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  BarChart2,
  Star,
  Building2,
  Globe,
  Target,
  Clock,
  Award,
  Shield,
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

const faqItems = [
  {
    question: "Ile kosztuje pozycjonowanie w Kaliszu?",
    answer:
      "Pozycjonowanie lokalne w Kaliszu zaczyna się od 900-1 300 zł netto miesięcznie dla małych firm i lokalnych usługodawców. Kalisz ma niższą konkurencję SEO niż Poznań czy Warszawa, co sprawia, że efekty są widoczne szybciej i przy mniejszych nakładach. Dla branż konkurencyjnych (medycyna, nieruchomości, turystyka) budżet wynosi 1 800-4 500 zł/mies.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Kaliszu?",
    answer:
      "Kalisz to jeden z rynków o niskiej konkurencji SEO w Wielkopolsce - pierwsze efekty można obserwować już po 4-8 tygodniach. Stabilne pozycje TOP 10 dla większości fraz branżowych osiągamy w 2-5 miesięcy. To znacznie szybciej niż w dużych miastach, co przekłada się na szybszy zwrot z inwestycji i widoczny wzrost ruchu organicznego.",
  },
  {
    question: "Jakie branże dominują w Kaliszu i czy warto pozycjonować strony w mieście?",
    answer:
      "Kalisz ma bogate dziedzictwo historyczne (Katedra, zabytkowe kamienice), turystykę kulturalną, przemysł włókienniczy (tradycja kaliskiego batiku), handel, usługi medyczne i turystyczne. Wiele firm jeszcze nie inwestuje w SEO - to ogromny potencjał do wyróżnienia się od konkurencji i przejęcia organicznego ruchu z Google.",
  },
  {
    question: "Czy pozycjonowanie w Kaliszu jest trudne ze względu na wielkość miasta?",
    answer:
      "Nie - wręcz przeciwnie. Kalisz (ok. 100-120 tys. mieszkańców) to perła Wielkopolski z unikatowymi frazazami lokalnymi i kulturalnymi. Mniejsza konkurencja oznacza, że łatwiej i taniej osiągnąć TOP 10 niż w Poznaniu czy Warszawie. Jednocześnie miasto przyciąga turystów i ma silny potencjał dla biznesu lokalnego.",
  },
  {
    question: "Czy pozycjonujecie firmy z Kalisza poza miastem?",
    answer:
      "Tak - obsługujemy firmy z całej Wielkopolski i regionu: Ostrów Wielkopolski, Konin, Jarocin, Pleszew, Golina. Dla firm z branży turystycznej i rzemiosła (batik, wyroby ludowe) wdrażamy pozycjonowanie pod ruch turystów krajowych i zagranicznych.",
  },
  {
    question: "Jak SEO może pomóc firmom z Kalisza w sprzedaży produktów tradycyjnych?",
    answer:
      "Kaliski batik to marka znana w Polsce i zagranicą. Firmy handlujące produktami tradycyjnymi, rzemiosłem, souvenirami mogą wykorzystać SEO do dotarcia do turystów szukających autentycznych pamiątek z Kalisza. Wdrażamy pozycjonowanie pod frazy 'batik Kalisz', 'pamiątki z Kalisza', 'tradycyjne wyroby Kalisz' - niszowe frazy z wysokim potencjałem sprzedażowym.",
  },
];

const PozycjonowanieKalisz = () => {
  const results = [
    {
      metric: "+185%",
      label: "Wzrost ruchu organicznego",
      context: "sklep z pamiątkami Kalisz",
    },
    { metric: "TOP 5", label: "Pozycja w Google", context: "frazy branżowe Kalisz" },
    { metric: "6 tygodni", label: "Czas do widocznych efektów", context: "branża turystyczna" },
    { metric: "4,8/5", label: "Ocena klientów", context: "8 opinii" },
  ];

  const districts = [
    "Centrum",
    "Pomorskie",
    "Osiedle Lechickie",
    "Osiedle Okulickiego",
    "Piaski",
    "Osiedle Robotnicze",
    "Teodora",
    "Bogucin",
  ];

  const industries = [
    { name: "Turystyka i kultura", icon: Star },
    { name: "Handel batiku", icon: Target },
    { name: "Medycyna i kliniki", icon: Shield },
    { name: "Gastronomia", icon: Building2 },
    { name: "Rzemiosło tradycyjne", icon: Award },
    { name: "Nieruchomości", icon: Globe },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Kalisz - Agencja SEO Wielkopolska | Fotz Studio"
        description="Pozycjonowanie stron Kalisz i Wielkopolska. Agencja SEO Fotz Studio - szybkie efekty, niższa konkurencja, białohat SEO dla firm z Kalisza. Bezpłatny audyt!"
        canonical="https://fotz.pl/pozycjonowanie/kalisz"
        ogTitle="Pozycjonowanie Kalisz - Fotz Studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Kaliszu i Wielkopolsce. Szybkie efekty, niższa konkurencja SEO, profesjonalne strategie dla firm lokalnych."
        keywords="pozycjonowanie kalisz, seo kalisz, agencja seo kalisz, pozycjonowanie lokalne kalisz, pozycjonowanie stron kalisz, seo dla firm kalisz, audyt seo kalisz"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Kalisz"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Kalisza i Wielkopolski. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne dla biznesu w Kaliszu."
        url="https://fotz.pl/pozycjonowanie/kalisz"
        provider="Fotz Studio"
        areaServed="Kalisz"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Pozycjonowanie", url: "/pozycjonowanie" },
          { name: "Kalisz", url: "/pozycjonowanie/kalisz" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-background overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <MapPin className="w-4 h-4" />
              Pozycjonowanie - Kalisz i Wielkopolska
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie <span className="text-primary">Kalisz</span> - agencja SEO dla firm z Wielkopolski
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Kalisza i Wielkopolski zdobyć pierwszą stronę Google. Niższa konkurencja SEO oznacza szybsze efekty i lepszy zwrot z inwestycji. Audyt SEO, optymalizacja techniczna i strategia linkowania dla lokalnego biznesu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <Link to="/seo/pozycjonowanie">
                  Pakiety i ceny SEO
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
            >
              {["White-hat SEO", "Szybsze efekty niż w dużych miastach", "Google Analytics 4", "Raport co 2 tygodnie"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <FadeInView key={i} delay={i * 0.1} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {r.metric}
                </div>
                <div className="text-sm font-medium text-foreground">{r.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.context}</div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Kalisz specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pozycjonowanie lokalne w Kaliszu - niska konkurencja, szybki ROI
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Kalisz to perła Wielkopolski z bogatą historią i tradycją sięgającą średniowiecza. Miasto jest znane na całym świecie z kultowego kaliskiego batiku - tradycyjnego wyrobu textylnego, który stanowi symbol miasta. Liczba mieszkańców: ok. 100-120 tys. ludzi, z których każdego roku odwiedza setki turystów krajowych i zagranicznych.
                </p>
                <p>
                  Kluczowa przewaga Kalisza z perspektywy SEO: <strong className="text-foreground">znacznie niższa konkurencja</strong> niż w Poznaniu czy Warszawie oznacza, że możliwe jest osiągnięcie TOP 10 w Google zaledwie w ciągu 6-12 tygodni. Firmy, które inwestują w pozycjonowanie lokalne w Kaliszu, mogą zdobyć przewagę nad konkurencją, która jeszcze nie pozycjonuje się online.
                </p>
                <p>
                  Kalisz ma unikatowe nisze biznesowe: turystyka kulturalna (Katedra, zabytkowe kamienice, muzea), tradycyjne wyroby (batik, rzemiosło), gastronomia regionalna i handel pamiątkami. To są <strong className="text-foreground">frazy z niską lub zerową konkurencją</strong> i realnym ruchem wśród turystów szukających autentycznych produktów i doświadczeń z Kalisza.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Kalisza
                </h3>
                <div className="flex flex-wrap gap-2">
                  {districts.map((district) => (
                    <span
                      key={district}
                      className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {district}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  + Ostrów Wielkopolski, Konin, Jarocin, Pleszew i cała Wielkopolska
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Branże, które pozycjonujemy w Kaliszu
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od turystyki kulturalnej i tradycyjnego batiku po medycynę i gastronomię - znamy specyfikę rynku kaliskiego.
            </p>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industries.map((ind, i) => (
              <FadeInView key={i} delay={i * 0.08}>
                <div className="bg-card border border-border/60 rounded-xl p-5 flex items-center gap-3 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <ind.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{ind.name}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Jak działamy - pozycjonowanie firm z Kalisza
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę pod kątem fraz dla Kalisza i Wielkopolski. Oceniamy realne szanse na TOP 10 i czas potrzebny do wyników - zwykle krótszy niż w dużych miastach.",
              },
              {
                step: "02",
                title: "Strategia lokalna i regionalna",
                desc: "Dobieramy słowa kluczowe uwzględniające Kalisz, turystykę kulturalną, tradycyjne wyroby i branżę. Planujemy content calendar pod sezonowość turystyczną i ruchy poszukiwań.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści SEO pod frazy z Kalisza i Wielkopolski oraz budujemy profil linków z branżowych i lokalnych źródeł.",
              },
              {
                step: "04",
                title: "Raportowanie i skalowanie",
                desc: "Co 2 tygodnie raportujemy pozycje, ruch organiczny i konwersje. Gdy strona nabiera autorytetu, rozszerzamy zakres fraz i kampanii.",
              },
            ].map((step, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0 text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pakiety SEO dla firm z Kalisza
            </h2>
            <p className="text-muted-foreground">
              Elastyczne pakiety dostosowane do budżetu i potrzeb Twojej firmy
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "900",
                features: [
                  "Audyt SEO Kalisz",
                  "10-15 słów kluczowych",
                  "Optymalizacja on-page",
                  "Raport co 2 tygodnie",
                  "Chat wsparcia",
                ],
              },
              {
                name: "Professional",
                price: "1 500",
                features: [
                  "Wszystko z Starter",
                  "25-35 słów kluczowych",
                  "Link building lokalne",
                  "Tworzenie treści (4 art/m-c)",
                  "Monitoring pozycji codziennie",
                  "Wsparcie telefoniczne",
                ],
                highlighted: true,
              },
              {
                name: "Premium",
                price: "2 500",
                features: [
                  "Wszystko z Professional",
                  "50+ słów kluczowych",
                  "Kampania PR lokalnej",
                  "Tworzenie treści (8 art/m-c)",
                  "Optymalizacja UX",
                  "Dedykowany account manager",
                ],
              },
            ].map((pkg, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div
                  className={`border rounded-xl p-6 flex flex-col ${
                    pkg.highlighted
                      ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                      : "border-border/60 bg-card"
                  }`}
                >
                  <h3 className="font-bold text-lg text-foreground mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm"> zł/mies. netto</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {pkg.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={pkg.highlighted ? "default" : "outline"}
                    className="w-full"
                  >
                    <Link to="/kontakt">Bezpłatny audyt SEO</Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gotowy na pierwszą stronę Google w Kaliszu?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Pokażemy Ci, jak szybko możesz wygrać z lokalną konkurencją w Kaliszu i co konkretnie trzeba zrobić, aby uzyskać organiczny ruch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/seo/pozycjonowanie">Wszystkie pakiety SEO</Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              FAQ - pozycjonowanie stron Kalisz
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

      {/* Internal nav */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
            Pozycjonowanie w innych miastach
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { city: "Warszawa", href: "/pozycjonowanie/warszawa" },
              { city: "Kraków", href: "/pozycjonowanie/krakow" },
              { city: "Poznań", href: "/pozycjonowanie/poznan" },
              { city: "Wrocław", href: "/pozycjonowanie/wroclaw" },
              { city: "Gdańsk", href: "/pozycjonowanie/gdansk" },
              { city: "Łódź", href: "/pozycjonowanie/lodz" },
              { city: "Szczecin", href: "/pozycjonowanie/szczecin" },
            ].map((item) => (
              <Link
                key={item.city}
                to={item.href}
                className="bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors text-sm px-4 py-2 rounded-full font-medium"
              >
                {item.city}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              to="/seo/pozycjonowanie"
              className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
            >
              <ArrowRight className="w-3 h-3" /> Wszystkie pakiety pozycjonowania
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default PozycjonowanieKalisz;
