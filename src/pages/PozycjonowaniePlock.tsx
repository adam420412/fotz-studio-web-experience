import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    question: "Ile kosztuje pozycjonowanie w Płocku?",
    answer:
      "Pozycjonowanie lokalne w Płocku zaczyna się od 900 zł netto miesięcznie. Płock to rynek lokalny z niższą konkurencją niż duże miasta (Warszawa, Kraków). Dla branż przemysłu, handlu, gastronomii i usług koszt wynosi 900–2500 zł/mies. Miasto nad Wisłą ma potencjał dla firm chcących zdominować lokalny rynek SEO.",
  },
  {
    question: "Pozycjonowanie Płock — jakie branże działają w mieście?",
    answer:
      "Płock (125 tys. mieszkańców) to ważny hub w regionie Mazowsza. Dominują: przemysł (rafinacja, produkcja), handel detaliczny, gastronomia, usługi dla firm, turystyka (Wisła, tereny rekreacyjne), nieruchomości. Frazy lokalne jak 'usługi Płock', 'restauracja Płock', 'hurtownia Płock' mają bardzo dobry ROI - niska konkurencja, wysoka konwersja.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie stron w Płocku?",
    answer:
      "Pierwsze efekty to 2-3 miesiące. Dla branż lokalnych stabilne pozycje w TOP 10 osiągamy po 4-6 miesiącach. Płock ma bardzo niskie bariery wejścia SEO - mniej konkurencji niż regiony metropolitalne, więc szybciej zdobywa się pozycje. Nawet w konkurencyjnych branżach (gastronomia, handel) czasy są krótsze niż w Warszawie.",
  },
  {
    question: "Płock vs. duże miasta — jaka jest konkurencja SEO?",
    answer:
      "Płock to idealna baza dla biznesu lokalnego. Konkurencja SEO jest niska - większość firm nie inwestuje w pozycjonowanie. Możesz zdobyć frazy lokalne z niskim budżetem i stać się dominantem w mieście. To świetny rynek testowy - jeśli się powiedzie w Płocku, możesz skalować na inne miasta Mazowsza lub całą Polskę.",
  },
  {
    question: "Jak działamy - proces pozycjonowania firm z Płocku?",
    answer:
      "Najpierw robimy bezpłatny audyt SEO - analizujemy Twoją stronę, pozycje dla fraz Płock, konkurencję w Twojej branży. Następnie tworzymy strategię z fokusem na frazy lokalne + branża. Wdrażamy optymalizację on-page, budujemy treści lokalne i linki z mediów lokalnych. Co 2 tygodnie raportujemy pozycje i ruch - pełna transparentność.",
  },
];

const PozycjonowaniePlock = () => {
  const results = [
    {
      metric: "+180%",
      label: "Wzrost ruchu organicznego",
      context: "branża handlowa",
    },
    { metric: "TOP 5", label: "Pozycja w Google", context: "frazy Płock" },
    { metric: "4 mies.", label: "Czas do pierwszej strony", context: "konkurencyjne frazy" },
    { metric: "4,9/5", label: "Ocena klientów", context: "18 opinii" },
  ];

  const districts = [
    "Centrum Płocku",
    "Stare Miasto",
    "Osiedle Pułaskiego",
    "Osiedle Bohaterów",
    "Zachodnie Słupsk",
  ];

  const industries = [
    { name: "Handel i e-commerce", icon: Globe },
    { name: "Gastronomia i hotel.", icon: Star },
    { name: "Usługi dla firm", icon: Building2 },
    { name: "Przemysł i produkcja", icon: BarChart2 },
    { name: "Nieruchomości", icon: Target },
    { name: "Turystyka i rekreacja", icon: Award },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Płock - Agencja SEO | Fotz Studio"
        description="Pozycjonowanie stron Płock. Agencja SEO Fotz Studio - audyt SEO, optymalizacja i link building dla firm z Płocku. Bezpłatny audyt SEO!"
        canonical="https://fotz.pl/pozycjonowanie/plock"
        ogTitle="Pozycjonowanie Płock - Fotz Studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Płocku. Audyt SEO, optymalizacja i link building dla firm płockich - handel, gastronomia, usługi, przemysł."
        keywords="pozycjonowanie płock, agencja seo płock, seo płock, pozycjonowanie stron płock, seo dla firm płock, seo mazowsze, pozycjonowanie lokalne płock"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Płock"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Płocku. Audyt SEO, optymalizacja on-page, link building, pozycjonowanie lokalne dla handlu, gastronomii, usług i przemysłu."
        url="https://fotz.pl/pozycjonowanie/plock"
        provider="Fotz Studio"
        areaServed="Płock"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Pozycjonowanie", url: "/pozycjonowanie" },
          { name: "Płock", url: "/pozycjonowanie/plock" },
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
            <div
             
             
             
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <MapPin className="w-4 h-4" />
              Pozycjonowanie · Płock
            </div>

            <h1
             
             
             
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Płocka</span> —
              agencja SEO dla firm z Płocku
            </h1>

            <p
             
             
             
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy płockim firmom zdobyć pierwszą stronę Google. Audyt SEO,
              optymalizacja techniczna, content SEO i link building dla handlu,
              gastronomii, usług i przemysłu w Płocku.
            </p>

            <div
             
             
             
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
            </div>

            <div
             
             
             
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
            >
              {["White-hat SEO", "Raport co 2 tygodnie", "Google Analytics 4", "Gwarancja transparentności"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
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

      {/* Płock SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Płocku — miasto nad Wisłą, centrum regionalne Mazowsza
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Płock to <strong className="text-foreground">125 tys. mieszkańców</strong>
                  i ważne centrum regionalne Mazowsza, położone nad Wisłą. Miasto ma bogatą
                  historię przemysłową (rafinacja, produkcja) i dynamicznie rozwijające się
                  sektory: handel detaliczny i e-commerce, gastronomia, usługi dla biznesu,
                  turystyka i rekreacja nad Wisłą.
                </p>
                <p>
                  Konkurencja SEO w Płocku jest <strong className="text-foreground">bardzo niska</strong> — większość
                  firm lokalno nie inwestuje w pozycjonowanie. To oznacza szybkie efekty i
                  niskie koszty. Pozycjonowanie w Płocku to <strong className="text-foreground">idealna baza
                  dla biznesu lokalnego</strong> — możesz zdominować rynek przy małym budżecie.
                </p>
                <p>
                  Specyfika rynku: średnia gęstość konkurencji, silne sektory handlu i usług,
                  potencjał turystyki. Frazy lokalne z 'Płock' + branża (np. 'restauracja Płock',
                  'hurtownia Płock', 'usługi Płock') przynoszą bardzo wartościowy, skonkretyzowany ruch
                  z wysoką konwersją.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Płocku
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
                  + aglomeracja płocka i powiat płocki
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
              Branże, które pozycjonujemy w Płocku
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od handlu po usługi biznesowe — specjalizujemy się w branżach kluczowych
              dla gospodarki Płocka.
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

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pakiety cenowe SEO dla firm z Płocku
            </h2>
            <p className="text-muted-foreground">
              Transparentne ceny dostosowane do rozmiaru firmy i branży
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "900 zł",
                desc: "Dla firm začynających SEO",
                features: [
                  "Audyt SEO",
                  "Optymalizacja on-page",
                  "5 fraz kluczowych",
                  "Raport co 2 tygodnie",
                ],
              },
              {
                name: "Professional",
                price: "1500 zł",
                desc: "Dla firm chcących wzrostu",
                features: [
                  "Wszystko z Starter",
                  "Link building (5 linków/mies)",
                  "Content SEO (2 artykuły)",
                  "Monitoring konkurencji",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "2500 zł+",
                desc: "Dla firm szukających dominacji",
                features: [
                  "Wszystko z Professional",
                  "Link building (15+ linków/mies)",
                  "Content SEO (5+ artykułów)",
                  "Dedykowany account manager",
                ],
              },
            ].map((pkg, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className={`border rounded-xl p-6 flex flex-col ${pkg.highlighted ? 'border-primary bg-primary/5' : 'border-border/60'}`}>
                  <h3 className="font-bold text-lg text-foreground mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
                  <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.highlighted ? "default" : "outline"} className="w-full" asChild>
                    <Link to="/kontakt">Wybierz pakiet</Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Jak działamy — pozycjonowanie firm z Płocku
            </h2>
            <p className="text-muted-foreground">Cztery etapy do sukcesu w Google</p>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę, pozycje w Google dla fraz Płock, konkurencję w Twojej branży (handel, gastronomia, usługi, przemysł czy inne).",
              },
              {
                step: "02",
                title: "Strategia rynku płockiego",
                desc: "Dobieramy frazy z Płockiem i Twoją branżą. Planujemy SEO z uwzględnieniem specyfiki rynku płockiego — niskiej konkurencji i wysokiej konwersji.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści lokalne i budujemy linki z mediów branżowych i lokalnych źródeł z Płocku.",
              },
              {
                step: "04",
                title: "Monitoring i raportowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Strategia dostosowywana do zmian konkurencji w Płocku i Twojej branży.",
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

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ile czasu na efekty? Harmonogram SEO w Płocku
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                month: "0-2 mies.",
                title: "Audyt i wdrożenie",
                desc: "Analizujemy konkurencję, optymalizujemy stronę technicznie i on-page, zaczynamy tworzenie treści.",
              },
              {
                month: "2-4 mies.",
                title: "Pierwsze efekty",
                desc: "Pierwsze pozycje w Google, zwykle na 3-5 stronie dla głównych fraz. Ruch organiczny zaczyna rosnąć.",
              },
              {
                month: "4-6 mies.",
                title: "Wejście na pierwszą stronę",
                desc: "Większość fraz w TOP 10. Zwłaszcza frazy lokalne z Płockiem osiągają pozycje 3-7.",
              },
              {
                month: "6+ mies.",
                title: "Dominacja i skalowanie",
                desc: "Pozycje TOP 3 dla głównych fraz. Gotów do skalowania na inne miasta Mazowsza lub całą Polskę.",
              },
            ].map((timeline, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 border border-primary/40">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-primary text-sm">{timeline.month}</div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {timeline.title}
                    </h3>
                    <p className="text-muted-foreground">{timeline.desc}</p>
                  </div>
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
              Gotowy na pierwszą stronę Google w Płocku?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Otrzymasz raport z konkretnymi
              rekomendacjami dla rynku płockiego i Twojej branży.
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
              FAQ — pozycjonowanie stron Płock
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
            Pozycjonowanie w innych miastach:
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Pozycjonowanie Warszawa", url: "/pozycjonowanie/warszawa" },
              { label: "Pozycjonowanie Kraków", url: "/pozycjonowanie/krakow" },
              { label: "Pozycjonowanie Wrocław", url: "/pozycjonowanie/wroclaw" },
              { label: "Pozycjonowanie Łódź", url: "/pozycjonowanie/lodz" },
              { label: "Wszystkie usługi SEO", url: "/pozycjonowanie" },
            ].map((link) => (
              <Link
                key={link.url}
                to={link.url}
                className="text-primary hover:underline font-medium text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default PozycjonowaniePlock;
