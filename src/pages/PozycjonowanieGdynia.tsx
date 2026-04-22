import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, MapPin, CheckCircle2, ArrowRight, Search, BarChart3, Star, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export default function PozycjonowanieGdynia() {
  const packages = [
    {
      name: "Start",
      price: "1 200",
      duration: "miesiąc",
      description: "Idealny dla małych firm i startupów z Gdyni",
      features: [
        "Audit SEO",
        "Optymalizacja 5 stron",
        "Keyword research",
        "Raport co miesiąc",
        "Email support",
      ],
    },
    {
      name: "Biznes",
      price: "2 500",
      duration: "miesiąc",
      description: "Dla firm o średniej wielkości z Gdyni i Trójmiasta",
      features: [
        "Wszystko z pakietu Start",
        "Optymalizacja 15 stron",
        "Content strategy",
        "Link building (5 linków/mies.)",
        "Raport szczegółowy",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "4 500",
      duration: "miesiąc",
      description: "Dla dużych firm i e-commerce z Gdyni",
      features: [
        "Wszystko z pakietu Biznes",
        "Optymalizacja 30+ stron",
        "Link building (15+ linków/mies.)",
        "Zaawansowana SEO techniczna",
        "Strategia contentu",
        "24/7 support",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje pozycjonowanie w Gdyni?",
      answer:
        "Pozycjonowanie w Gdyni zaczyna się od 1 200 zł netto miesięcznie (pakiet Start). Pakiet Biznes to 2 500 zł/mies., a Premium to 4 500 zł/mies. Ceny zależą od konkurencji na słowa kluczowe, wielkości strony i celów biznesowych.",
    },
    {
      question: "Jak długo trwa pozycjonowanie w Gdyni?",
      answer:
        "Pierwsze efekty widać po 2-3 miesiącach. Stabilne pozycje w TOP 10 dla konkurencyjnych fraz osiągamy po 4-6 miesiącach. Dla fraz lokalnych (np. 'dentysta Gdynia') efekty przychodzą szybciej.",
    },
    {
      question: "Czy mogę pozycjonować firmę z Gdyni bez biura tam?",
      answer:
        "Oczywiście! Pracujemy zdalnie z klientami z całej Polski. Do pozycjonowania lokalnego w Gdyni nie potrzebujemy fizycznej obecności w mieście. Cały audyt, optymalizacja i raportowanie odbywają się online.",
    },
    {
      question: "Jakie branże są popularne do SEO w Gdyni?",
      answer:
        "W Gdyni pozycjonujemy: turystykę i hotele, restauracje i bary, usługi medyczne i dentystyczne, agencje web, e-commerce, nieruchomości, porty i logistykę, szkoły i kursy. Gdynia ma silny sektor turystyki i logistyki morskiej.",
    },
    {
      question: "Czy SEO w Gdyni jest skuteczne dla e-commerce?",
      answer:
        "Tak. Gdynia ma dużo potencjału dla e-commerce — możesz sprzedawać na całą Polskę. SEO + Google Ads to najlepszy mix. Wiele naszych klientów z Gdyni zarabia 10-30 tyś zł mesięcznie na SEO.",
    },
  ];

  const whyChoose = [
    {
      title: "Ponad 200 projektów SEO",
      description: "Zrealizowaliśmy ponad 200 projektów pozycjonowania dla firm z całej Polski.",
    },
    {
      title: "Znamy rynek Gdyni",
      description: "Specjalizujemy się w Gdyni, Trójmieście i sektorze turystyki, logistyki i e-commerce.",
    },
    {
      title: "Wyniki mierzalne",
      description: "Wszystkie nasze kampanie mają KPI i raportowanie co 2 tygodnie.",
    },
    {
      title: "White-hat SEO",
      description: "Pracujemy tylko metodami sprawdzonymi i bezpiecznymi dla Twojej witryny.",
    },
  ];

  const services = [
    {
      icon: Search,
      title: "Audyt SEO",
      description: "Kompleksowa analiza Twojej witryny — problemy techniczne, konkurencja, szanse.",
    },
    {
      icon: TrendingUp,
      title: "Keyword research",
      description: "Badamy słowa kluczowe popularne w Gdyni i określamy potencjał Twoich fraz.",
    },
    {
      icon: BarChart3,
      title: "Content SEO",
      description: "Piszemy artykuły, blogi i strony zoptymalizowane na słowa kluczowe.",
    },
    {
      icon: CheckCircle2,
      title: "Link building",
      description: "Budujemy wysokiej jakości backlinki do Twojej witryny z autorytatywnych stron.",
    },
    {
      icon: Star,
      title: "Local SEO",
      description: "Pozycjonowanie lokalne w Gdyni, Trójmieście i sąsiednich miastach.",
    },
    {
      icon: Users,
      title: "Raportowanie",
      description: "Przejrzyste raporty co 2 tygodnie ze zmianami rankingów i ruchem organicznym.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Gdynia | SEO dla Firm z Gdyni | FOTZ"
        description="Pozycjonowanie Gdynia — skuteczne SEO dla firm z Gdyni i Trójmiasta. Ponad 200 projektów. Bezpłatny audyt SEO!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/gdynia"
        keywords="pozycjonowanie gdynia, agencja seo gdynia, seo gdynia, pozycjonowanie stron gdynia, seo dla firm gdynia, seo trójmiasto, audyt seo gdynia"
      />

      <ServiceSchema
        name="Pozycjonowanie stron internetowych Gdynia"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Gdyni. Audyt SEO, optymalizacja, link building i pozycjonowanie lokalne."
        provider="Fotz Studio"
        areaServed="Gdynia"
      />

      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Gdynia", url: "https://fotz.pl/uslugi/pozycjonowanie/gdynia" },
        ]}/>

      <FAQSchema items={faqItems} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Pozycjonowanie Gdynia i Trójmiasto
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Pozycjonowanie <span className="text-primary">Gdynia</span>
            </h1>

            <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
              Skuteczne SEO dla firm z Gdyni. Audyt, optymalizacja, link building. Ponad 200 projektów SEO zrealizowanych.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Link to="/uslugi/pozycjonowanie">
                  Dowiedz się więcej
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-sky-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>White-hat SEO</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Raport co 2 tygodnie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>200+ projektów</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Gwarancja transparentności</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pozycjonowanie Gdynia — co to jest i dlaczego warto?</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Gdynia to dynamiczne miasto w Trójmieście (razem z Gdańskiem i Soptem). 250 tysięcy mieszkańców, jeden z największych portów Polski, silny sektor turystyki morskiej i logistyki. Firmy w Gdyni aktywnie szukają klientów w Google — zarówno lokalnie, jak i na całą Polskę.
              </p>
              <p>
                Pozycjonowanie SEO to proces optymalizacji Twojej strony internetowej, aby pojawiała się wyżej w wynikach Google dla słów kluczowych. Dla firm z Gdyni to oznacza: więcej ruchu organicznego, więcej klientów z Google, mniej zależności od Google Ads, wyższa konwersja (bo ruch organiczny konwertuje lepiej).
              </p>
              <p>
                Gdynia to konkurencyjny rynek, ale z mniejszą konkurencją niż Warszawa. To idealny punkt do testowania strategii SEO przed skalowaniem na resztę Polski. Jeśli prowadzisz turystykę, restaurację, agencję web lub e-commerce z Gdyni — pozycjonowanie SEO to najlepszy long-term investment dla Twojego biznesu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Dlaczego Fotz Studio do SEO w Gdyni?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChoose.map((item, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Usługi SEO dla Gdyni</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Card key={idx} className="border-border hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <IconComponent className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pakiety SEO dla Gdyni</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <Card
                key={idx}
                className={`border-2 relative overflow-hidden transition ${
                  pkg.highlighted ? "border-primary md:scale-105 shadow-xl" : "border-border"
                }`}
              >
                {pkg.highlighted && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white">POLECANY</Badge>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary mb-1">{pkg.price} zł</div>
                    <div className="text-sm text-muted-foreground">na {pkg.duration}</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/kontakt">Wybierz pakiet</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            Wszystkie pakiety obejmują audyt, keyword research, raportowanie i wsparcie. Możesz zmienić pakiet lub anulować umowę w każdej chwili bez kar.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Jak pracujemy nad SEO Gdyni?</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { num: "1", title: "Audit SEO", desc: "Analizujemy Twoją stronę — problemy techniczne, konkurencję, szanse." },
              { num: "2", title: "Strategia", desc: "Wybieramy słowa kluczowe, tworzymy plan działań, definiujemy KPI." },
              { num: "3", title: "Implementacja", desc: "Optymalizujemy on-page, tworzymy content, budujemy linki." },
              { num: "4", title: "Monitoring", desc: "Śledzimy zmiany rankingów, ruch organiczny, konwersje." },
              { num: "5", title: "Raportowanie", desc: "Raporty co 2 tygodnie z анализом wyników i rekomendacjami." },
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Rezultaty naszych klientów</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "+280%", label: "Wzrost ruchu organicznego", context: "e-commerce Gdynia" },
              { metric: "TOP 3", label: "Pozycja na Google", context: "branża turystyka" },
              { metric: "6 mies.", label: "Czas do TOP 10", context: "konkurencyjne frazy" },
              { metric: "4.8/5", label: "Ocena klientów", context: "34 opinie" },
            ].map((result, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                  <div className="font-semibold mb-1">{result.label}</div>
                  <div className="text-sm text-muted-foreground">{result.context}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Najczęstsze pytania</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-border bg-secondary/30 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Gotowy na wzrost organiczny?</h2>
            <p className="text-lg text-slate-300 mb-10">
              Zarezerwuj bezpłatny audyt SEO dla Twojej strony. Poznaj potencjał pozycjonowania w Gdyni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt">Bezpłatny audyt SEO</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Link to="/uslugi/pozycjonowanie">Dowiedz się więcej o SEO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground mb-6">Powiązane usługi:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <Link to="/uslugi/pozycjonowanie" className="text-primary hover:underline font-semibold">
                SEO — kompleksowo
              </Link>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <Link to="/performance-marketing/google-ads" className="text-primary hover:underline font-semibold">
                Google Ads
              </Link>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <Link to="/blog" className="text-primary hover:underline font-semibold">
                Blog SEO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
