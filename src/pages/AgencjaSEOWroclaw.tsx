import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, TrendingUp, Zap, Target, BarChart3, Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const seoElements = [
  { icon: Search, title: "Audyt techniczny", desc: "Analiza structure, mobilności, szybkości, crawlability. Diagnoza problemów SEO." },
  { icon: Target, title: "Optymalizacja on-page", desc: "Meta tagi, nagłówki, structure data, wewnętrzne linki, content optimization." },
  { icon: TrendingUp, title: "Link building", desc: "Backlinki z wiarygodnych serwisów branżowych. Budowanie autorytetu domeny." },
  { icon: BarChart3, title: "Content strategy", desc: "Plan treści, hasła kluczowe, outlineowanie artykułów, publikacja." },
  { icon: Zap, title: "Monitoring i raportowanie", desc: "Cotygodniowe raporty ranking, traffic, konwersji. Pełna transparentność." },
  { icon: MapPin, title: "Lokalne SEO (Local)", desc: "Google Business Profile, cytacje lokalne, recenzje, struktury dla map." },
  { icon: Search, title: "Technical SEO", desc: "Core Web Vitals, indexing, robots.txt, XML sitemaps, redirects." }
];

const industries = [
  { icon: Zap, title: "IT / Startupy", desc: "Tech-savvy rynek. Konkurencja wysoka na słowa kluczowe. Potrzeba zaawansowanej strategii." },
  { icon: MapPin, title: "Nieruchomości", desc: "Duży rynek we Wrocławiu. Local SEO + content na temat dzielnic i ofert." },
  { icon: Target, title: "Gastronomia", desc: "Restauracje, kawiarnie, lounges. Google My Business + listy, recenzje." },
  { icon: TrendingUp, title: "Logistyka", desc: "Wrocław to ważny hub logistyczny. B2B + Local SEO dla firm transportowych." },
  { icon: BarChart3, title: "Finanse", desc: "Banki, ubezpieczenia, fintech. Duża konkurencja na kluczowe frazy." },
  { icon: Search, title: "Edukacja", desc: "Uczelnie, kursy, korepetycje. Rynek akademicki (70k+ studentów) to duża szansa." }
];

const packages = [
  {
    name: "Local",
    price: "499 zł",
    period: "/miesiąc",
    highlight: false,
    features: [
      "Optymalizacja Google My Business",
      "Lokalne cytacje (5-10 katalogów)",
      "Monitoring rankingu (5-10 haseł)",
      "Basic On-page optymalizacja",
      "Raportowanie (co 2 tygodnie)",
      "Email support"
    ],
    desc: "Dla lokalnych firm szukających się na mapie i w wynikach lokalnych."
  },
  {
    name: "Standard",
    price: "999 zł",
    period: "/miesiąc",
    highlight: true,
    features: [
      "Audyt SEO + strategia",
      "On-page optymalizacja (10+ stron)",
      "Content strategy (2-3 artykuły/mies.)",
      "Link building (5-10 backlinków/mies.)",
      "Technical SEO (Core Web Vitals, indexing)",
      "Monitoring 20-30 haseł",
      "Raportowanie tygodniowe",
      "Phone + email support"
    ],
    desc: "Najpopularniejszy pakiet. Full-service SEO dla firm średnich. Gwarancja wyników w 6-12 mies."
  },
  {
    name: "Premium",
    price: "1999 zł",
    period: "/miesiąc",
    highlight: false,
    features: [
      "Dedykowany account manager",
      "Pełna content strategy (5-7 artykułów/mies.)",
      "Link building (15-20 backlinków/mies.)",
      "Advanced technical SEO",
      "Competitor analysis (cotygodniowe)",
      "Monitoring 50+ haseł",
      "A/B testing dla landing page'ów",
      "Raportowanie tygodniowe + sesje strategiczne",
      "VIP support (Slack, Zoom)"
    ],
    desc: "Dla ambitnych firm chcących dominować w Wrocławiu. Full-service + strateg."
  }
];

const faqItems = [
  {
    question: "Ile czasu trwa, zanim zobaczę rezultaty SEO we Wrocławiu?",
    answer: "Typowo: 3-4 miesiące, aby zobaczyć pierwsze ruchy w rankingach. Pełne rezultaty (top 10 dla głównych haseł): 6-12 miesięcy. Zależy od konkurencji hasła — 'agencja SEO Wrocław' to silnie konkurencyjne hasło (duża liczba agencji), 'fryzjer Tarchomin' to niszowe (szybsze efekty). Transparentnie mówię: SEO to długoterminowa inwestycja, nie quick fix."
  },
  {
    question: "Czy mogę rozwiązać umowę wcześniej?",
    answer: "Tak. Umowa jest elastyczna — bez kary za wcześniejsze wyjście. Jednak rzeczywiste rezultaty SEO pojawiają się po 3-6 miesiącach, więc wcześniejsze zakończenie oznacza utratę inwestycji. Rekomenduję: spróbuj co najmniej 6 miesięcy. Jeśli po tym czasie nie widać postępu — zwrócimy 100% kosztów ostatniego miesiąca."
  },
  {
    question: "Czy garantujesz pozycję #1 w Google?",
    answer: "Nie. Żadna reputable agencja nie może gwarantować #1. Ranking zależy od konkurencji, jakości Twojej strony, backlinków, treści i wielu innych czynników poza naszą kontrolą. Gwarantujemy: szczecilinę podejście, pełną przejrzystość, mierzalne wyniki (tracking ranking, traffic, konwersji). Jeśli hasło jest bardzo konkurencyjne, będziemy uczeźliwe o czasach i wymaganiach."
  },
  {
    question: "Co jeśli strona jest na WordPress? Czy SEO działa na WP?",
    answer: "Tak, SEO działa na WordPress — miliony stron rankuje na WP. Główna sprawy: optymalizacja pluginów (Yoast, Rank Math), struktura, szybkość. Czasami WP jest powolny (bez optymalizacji) — będziemy czasem sugerować hosting/setup. Ale WP + dobre SEO = solidne rezultaty, szczególnie dla lokalnego biznesu we Wrocławiu."
  },
  {
    question: "Czy SEO działa dla firm B2B (jak moja firma logistyki/transport)?",
    answer: "Tak, SEO jest nawet bardziej efektywne dla B2B niż B2C. B2B decydenci zazwyczaj szukają 'agencja logistyki Wrocław' w Google — jeśli tam się pojawisz, to lead jest wysoki-intent. SEO dla B2B może dać Ci klientów, którzy już szukają dokładnie tego, co sprzedajesz. Zaproponujemy content pod decydentów, nie konsumentów."
  },
  {
    question: "Ile backlinków potrzebuję, aby rankingować w top 10?",
    answer: "To zależy od konkurencji. Dla niszowych haseł: 5-10 backlinków może być wystarczające. Dla konkurencyjnych (jak 'SEO Wrocław'): trzeba 50-100+ backlinków + świetna treść. My się skupiamy na jakości, nie ilości — lepiej mieć 5 backlinków z autorytarownych serwisów niż 50 z spam'owych. Będziemy budować linki strategicznie."
  }
];

export default function AgencjaSEOWroclaw() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja SEO Wrocław | Pozycjonowanie stron Wrocław | fotz.pl"
          description="Agencja SEO Wrocław — pozycjonujemy strony firm z Wrocławia. Top 10 Google. Sprawdź pakiety SEO dla firm wrocławskich!"
          canonical="https://fotz.pl/agencja-seo-wroclaw"
          keywords="agencja SEO Wrocław, pozycjonowanie Wrocław, SEO Wrocław, marketing Wrocław, usługi SEO, pozycjonowanie stron Wrocław, seo dla firm wrocław, audyt seo wrocław, optymalizacja seo wrocław, pozycjonowanie lokalne Wrocław, link building wrocław, seo techniczne wrocław, agencja seo dolny śląsk"
        />

        <ServiceSchema
          name="Agencja SEO Wrocław"
          description="Pozycjonowanie stron dla firm z Wrocławia — lokalny i ogólnopolski. Top 10 Google. Pełny zakres usług SEO."
          provider="Fotz Studio"
          areaServed="Wrocław"
        />

        <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja SEO", url: "https://fotz.pl/agencja-seo" },
          { name: "Wrocław", url: "https://fotz.pl/agencja-seo-wroclaw" }
        ]} />

        <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                AGENCJA SEO
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Agencja SEO Wrocław — <span className="text-gradient">pozycjonowanie stron dla firm z Wrocławia</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Wrocław to dynamiczny rynek z silną sceną IT, startupów i biznesu. Agencja SEO Wrocław Fotz Studio — audyt SEO, pozycjonowanie stron Wrocław, SEO techniczne i link building. Firmy wrocławskie osiągają Top 10 Google dzięki naszym strategiom opartym na danych.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                <FadeInView delay={0} className="bg-card border rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">650k+</div>
                  <div className="text-sm text-muted-foreground">mieszkańców Wrocławia</div>
                </FadeInView>
                <FadeInView delay={0.1} className="bg-card border rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">4.</div>
                  <div className="text-sm text-muted-foreground">największe miasto PL</div>
                </FadeInView>
                <FadeInView delay={0.2} className="bg-card border rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">70k+</div>
                  <div className="text-sm text-muted-foreground">studentów</div>
                </FadeInView>
                <FadeInView delay={0.3} className="bg-card border rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">Tech hub</div>
                  <div className="text-sm text-muted-foreground">dolnośląski</div>
                </FadeInView>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Bezpłatny audyt SEO
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/kontakt">Wycena pakietu</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dlaczego SEO we Wrocławiu */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Dlaczego SEO we Wrocławiu jest ważne?</h2>

            <div className="space-y-6">
              <FadeInView delay={0} className="bg-card border rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Scena IT i startupów</h3>
                <p className="text-muted-foreground">Wrocław to drugie po Warszawie centrum technologiczne Polski. Duża liczba startupów, spółek scale-up, biur Google i innych tech firm. Firmy tutaj bardzo aktywnie szukają usług w internecie.</p>
              </FadeInView>

              <FadeInView delay={0.1} className="bg-card border rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Duża konkurencja online</h3>
                <p className="text-muted-foreground">Wrocław ma wielu agencji, freelancerów, firm usługowych. Konkurencja jest wysoka — jeśli Twoją firmę nie ma w Google, konkurenci Cię przegodzą. SEO to nie luksus, to konieczność.</p>
              </FadeInView>

              <FadeInView delay={0.2} className="bg-card border rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Akademicki rynek</h3>
                <p className="text-muted-foreground">70k+ studentów to duża grupa kupująca. Dla firm usługowych, korepetycji, gastronomii, e-commerce — rynek akademicki wrocławski to spora szansa.</p>
              </FadeInView>

              <FadeInView delay={0.3} className="bg-card border rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold mb-3">Rynek B2B</h3>
                <p className="text-muted-foreground">Wrocław to ważny hub dla logistyki, transportu, nieruchomości, finansów. B2B firmy szukają partnerów w Google — jeśli tam się pojawisz, to konwersja jest wysoka.</p>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Co zawiera SEO */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-4 text-center">Co zawiera nasze SEO dla firm z Wrocławia?</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Poniżej znajduje się pełny zakres usług SEO, które oferujemy.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {seoElements.map((element, i) => (
                <FadeInView key={i} delay={i * 0.1} className="bg-card border rounded-xl p-6 hover:border-primary/40 transition-colors">
                  <element.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{element.title}</h3>
                  <p className="text-muted-foreground text-sm">{element.desc}</p>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Pakiety */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-4 text-center">Pakiety SEO dla firm wrocławskich</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Każdy pakiet zawiera strategię dostosowaną do Twojej branży i konkurencji we Wrocławiu.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {packages.map((pkg, i) => (
                <FadeInView
                  key={i}
                  delay={i * 0.1}
                  className={`relative rounded-xl border transition-all ${pkg.highlight ? 'md:scale-105 border-primary shadow-lg shadow-primary/20' : 'border-border'} bg-card`}
                >
                  {pkg.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Najpopularniejszy</span>
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground ml-2">{pkg.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-8">{pkg.desc}</p>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full" variant={pkg.highlight ? "default" : "outline"}>
                      <Link to="/kontakt">Zamów teraz</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Branże we Wrocławiu */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-4 text-center">Branże, które wspieramy we Wrocławiu</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Doświadczenie z różnymi sektorami wrocławskiego rynku.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industries.map((ind, i) => (
                <FadeInView key={i} delay={i * 0.1} className="bg-card border rounded-xl p-6 hover:border-primary/40 transition-colors">
                  <ind.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{ind.title}</h3>
                  <p className="text-muted-foreground text-sm">{ind.desc}</p>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Często zadawane pytania</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left font-heading font-semibold py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <ContactSection
          heading="Zacznij pozycjonowanie we Wrocławiu"
          subheading="Bezpłatny audyt SEO dla wrocławskich firm. Wyślemy raport w 48h."
        />
      </Layout>
    </>
  );
}
