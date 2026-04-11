import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  Briefcase,
  TrendingUp,
  Zap,
  Globe,
  ShoppingCart,
  Anchor,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function TworzenieStronSzczecin() {
  const nearbyAreas = [
    "Szczecin",
    "Police",
    "Świnoujście",
    "Stargard",
    "Gryfino",
    "Goleniów",
    "Koszalin",
    "Kołobrzeg",
  ];

  const industries = [
    {
      icon: Anchor,
      title: "Transport i logistyka",
      desc: "Firmy spedycyjne, armatorzy, przewoźnicy, agenci celni.",
      examples: "Śledzenie przesyłek, formularze zleceń, cenniki",
    },
    {
      icon: Building2,
      title: "Deweloperzy i nieruchomości",
      desc: "Deweloperzy, agencje nieruchomości, zarządzanie najmem.",
      examples: "Katalogi inwestycji, wirtualne spacery, kalkulatory",
    },
    {
      icon: Briefcase,
      title: "Usługi B2B",
      desc: "Agencje doradcze, consulting, audyt, outsourcing IT.",
      examples: "Case studies, formularze kontaktowe, webinary",
    },
    {
      icon: Globe,
      title: "Turystyka nad morzem",
      desc: "Hotele, apartamenty, biura podróży, atrakcje turystyczne.",
      examples: "Systemy rezerwacji, galerie, mapy tras",
    },
    {
      icon: TrendingUp,
      title: "Produkcja i przemysł",
      desc: "Zakłady produkcyjne, stocznie, przetwórstwo rybne.",
      examples: "Katalogi produktów, certyfikaty, kontakt B2B",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce regionalny",
      desc: "Lokalne sklepy poszerzające zasięg na całą Polskę.",
      examples: "Sklepy online, integracje z Allegro, dropshipping",
    },
  ];

  const packages = [
    {
      title: "Wizytówka",
      price: "Od 499 zł",
      period: "jednorazowo",
      desc: "Idealna dla lokalnych firm i rzemieślników",
      features: [
        "3-5 podstron",
        "Responsywny design",
        "Formularz kontaktowy",
        "Mapa Google",
        "Podstawowe SEO",
      ],
      cta: "Sprawdź",
    },
    {
      title: "Strona firmowa",
      price: "1 499 – 3 999 zł",
      period: "jednorazowo",
      desc: "Pełna prezentacja Twojej firmy",
      features: [
        "Do 15 podstron",
        "Indywidualny projekt",
        "System CMS",
        "Blog firmowy",
        "Zaawansowane SEO",
        "Google Analytics",
      ],
      cta: "Sprawdź",
      highlight: true,
    },
    {
      title: "Sklep online",
      price: "2 999 – 9 999 zł",
      period: "jednorazowo",
      desc: "Pełna platforma e-commerce",
      features: [
        "Nieograniczone produkty",
        "Płatności online",
        "Integracja kurierska",
        "Panel zarządzania",
        "Wsparcie 3 miesiące",
      ],
      cta: "Sprawdź",
    },
  ];

  const processSteps = [
    {
      icon: "📞",
      title: "Bezpłatna konsultacja",
      desc: "Rozmawiamy o Twoim biznesie, celach i budżecie. Bez zobowiązań.",
      time: "30 minut",
    },
    {
      icon: "🎨",
      title: "Projekt graficzny",
      desc: "Tworzymy makietę strony. Każdy etap zatwierdzasz.",
      time: "Praca zdalna",
    },
    {
      icon: "💻",
      title: "Wdrożenie",
      desc: "Kodujemy i testujemy stronę. Preview na serwerze testowym.",
      time: "Online",
    },
    {
      icon: "🚀",
      title: "Uruchomienie i szkolenie",
      desc: "Wdrożenie produkcyjne, szkolenie z obsługi, wsparcie po starcie.",
      time: "30 dni wsparcia",
    },
  ];

  const szczecinStats = [
    { value: "400k+", label: "Mieszkańców" },
    { value: "Port", label: "Jeden z największych w Bałtyku" },
    { value: "Zachodniopom.", label: "Stolica województwa" },
    { value: "Granica DE", label: "Bliskość rynku niemieckiego" },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa w Szczecinie?",
      answer:
        "Prosta wizytówka cyfrowa: od 499 zł. Strona firmowa: 1 500–4 000 zł. Sklep internetowy: 3 000–10 000 zł. Wyceniamy indywidualnie — zapraszamy na bezpłatną konsultację.",
    },
    {
      question: "Jak długo trwa wykonanie strony?",
      answer:
        "Wizytówka: 2–3 tygodnie. Strona firmowa: 4–8 tygodni. Sklep: 8–12 tygodni. Zawsze dotrzymujemy terminów.",
    },
    {
      question: "Czy strona będzie widoczna w Google dla klientów ze Szczecina?",
      answer:
        "Tak — optymalizujemy każdą stronę pod lokalne SEO. Frazy jak 'usługa + Szczecin' przynoszą wartościowych klientów z regionu. Budujemy też strukturę pod pozycjonowanie ogólnopolskie.",
    },
    {
      question: "Czy robicie strony dla firm logistycznych i transportowych?",
      answer:
        "Tak, specjalizujemy się w branży transport/logistyka. Integrujemy systemy śledzenia, formularze zleceń, cenniki, certyfikaty. Znamy specyfikę branży portowej.",
    },
    {
      question: "Czy strony obsługują klientów z Niemiec (wersja DE)?",
      answer:
        "Tak — tworzymy wersje wielojęzyczne: PL + DE, PL + EN. Szczecin jest przy granicy, wiele firm obsługuje rynek DACH. Dopasowujemy stronę do Twoich rynków.",
    },
    {
      question: "Co po uruchomieniu strony?",
      answer:
        "30 dni wsparcia w cenie. Dalej: pakiet basic (100 zł/mies.), standard (300 zł/mies.), premium (500 zł/mies. — pełna opieka techniczna).",
    },
  ];

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Tworzenie stron", href: "/uslugi/tworzenie-stron-internetowych" },
    { label: "Szczecin" },
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych Szczecin | Profesjonalne strony WWW | fotz.pl"
        description="Tworzenie stron internetowych Szczecin — profesjonalne strony WWW dla firm. Od 499 zł netto. Wersje PL+DE. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/tworzenie-stron-internetowych/szczecin"
        ogImage="https://fotz.pl/og-szczecin.jpg"
      />
      <ServiceSchema
        name="Tworzenie stron internetowych Szczecin"
        description="Profesjonalne tworzenie stron internetowych dla firm ze Szczecina i województwa zachodniopomorskiego"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">SZCZECIN</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tworzenie stron internetowych Szczecin — agencja z wynikami
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Szczecin — stolica Zachodniopomorskiego, przy granicy z Niemcami, z jednym z największych portów
                na Bałtyku. Tworzymy profesjonalne strony dla firm ze Szczecina. Wersje PL, DE i EN.
                Szybko, skutecznie, na czas.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {szczecinStats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Bezpłatna wycena <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/uslugi/tworzenie-stron-internetowych">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                    Sprawdź ofertę
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coverage */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Obsługujemy Szczecin i region zachodniopomorski
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Pracujemy zdalnie z firmami z całego Zachodniopomorskiego i pogranicza polsko-niemieckiego
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {nearbyAreas.map((city, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-gradient-to-br from-blue-50 to-slate-50 p-4 rounded-lg border border-blue-200 text-center"
                  >
                    <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-slate-900">{city}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-4">Szczecin — brama na Zachód</h3>
                <p className="text-slate-700 mb-4">
                  Szczecin to unikalna pozycja geograficzna — przy granicy z Niemcami, z dostępem do Bałtyku.
                  Wiele szczecińskich firm obsługuje jednocześnie rynek polski i DACH. Tworzymy strony dwujęzyczne
                  (PL+DE), które otwierają nowe rynki.
                </p>
                <p className="text-slate-700">
                  <strong>Co to dla Ciebie oznacza?</strong> Strona internetowa to Twoja twarz zarówno dla polskich,
                  jak i niemieckich klientów. My wiemy, jak tę twarz zaprojektować.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Industries */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Branże, dla których tworzymy strony w Szczecinie
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Znamy specyfikę szczecińskiego rynku — portowego, przemysłowego i turystycznego.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, idx) => {
                  const Icon = industry.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.05}>
                      <div className="bg-white p-8 rounded-lg border border-slate-200">
                        <Icon className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{industry.title}</h3>
                        <p className="text-slate-700 text-sm mb-4">{industry.desc}</p>
                        <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded border border-blue-200">
                          <strong>Przykład:</strong> {industry.examples}
                        </div>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Packages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Pakiety dla firm ze Szczecina
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Przejrzyste ceny. Bez ukrytych kosztów. Każdy pakiet zawiera szkolenie i wsparcie.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-lg p-8 ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-2 border-blue-400 transform scale-105"
                        : "bg-white border border-slate-200 text-slate-900"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className="mb-6">
                      <div className={`text-3xl font-bold ${pkg.highlight ? "text-white" : "text-blue-600"}`}>
                        {pkg.price}
                      </div>
                      <div className={`text-sm ${pkg.highlight ? "text-blue-100" : "text-slate-500"}`}>
                        {pkg.period}
                      </div>
                    </div>
                    <p className={`mb-6 text-sm ${pkg.highlight ? "text-blue-100" : "text-slate-600"}`}>
                      {pkg.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              pkg.highlight ? "text-white" : "text-blue-600"
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        pkg.highlight
                          ? "bg-white text-blue-600 hover:bg-slate-100"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {pkg.cta} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Process */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Jak pracujemy?
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Prosty, przejrzysty proces — bez niespodzianek.
              </p>

              <div className="space-y-8">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-6 bg-white p-6 rounded-lg border border-slate-200"
                  >
                    <div className="text-4xl flex-shrink-0">{step.icon}</div>
                    <div className="flex-grow pt-2">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-slate-700">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Najczęstsze pytania — Szczecin
              </h2>

              <FAQSchema items={faqItems} />

              <Accordion type="single" collapsible className="w-full bg-slate-50 rounded-lg">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        {/* Internal links */}
        <FadeInView>
          <section className="py-12 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">Sprawdź też nasze usługi w okolicy</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  to="/uslugi/tworzenie-stron-internetowych/gdansk"
                  className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-slate-800 font-medium">Tworzenie stron Gdańsk</span>
                </Link>
                <Link
                  to="/uslugi/tworzenie-stron-internetowych/wroclaw"
                  className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-slate-800 font-medium">Tworzenie stron Wrocław</span>
                </Link>
                <Link
                  to="/uslugi/tworzenie-stron-internetowych"
                  className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors flex items-center gap-2"
                >
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span className="text-slate-800 font-medium">Tworzenie stron internetowych</span>
                </Link>
              </div>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Zamów stronę internetową w Szczecinie"
          subheading="Bezpłatna konsultacja. Wycena bez zobowiązań. Strona gotowa na czas."
        />
      </Layout>
    </>
  );
}
