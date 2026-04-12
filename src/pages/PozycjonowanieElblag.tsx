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
import { ContactSection } from "@/components/sections/ContactSection";

const faqItems = [
  {
    question: "Ile kosztuje pozycjonowanie w Elblągu?",
    answer:
      "Pozycjonowanie SEO w Elblągu zaczyna się od 800 zł netto miesięcznie dla małych firm usługowych i lokalnych. Pakiet STANDARD (1500-3000 zł) rekomendujemy dla e-commerce i firm z wyższą konkurencją. Pakiet PRO (3000-6000 zł) dla ambitnych projektów z branż turystyki lub logistyki portu. Elbląg to miasto portowe z rosnącą turystyką - potencjał SEO jest duży.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Elblągu?",
    answer:
      "Pierwsze efekty widoczne są po 4-6 tygodni. Stabilne pozycje TOP 10 dla fraz lokalnych osiągamy w 2-4 miesiące. TOP 5 wymaga średnio 4-6 miesięcy pracy, ale zależy od konkurencji na frazy docelowe. Elbląg ma niższą konkurencję SEO niż duże metropolie - co przyspieszenia uzyskanie wyników.",
  },
  {
    question: "Czy pozycjonujecie firmy z sektora turystyki i portów w Elblągu?",
    answer:
      "Zdecydowanie tak. Elbląg to jedno z głównych miast turystycznych nad Morzem Bałtyckim - frazy takie jak 'noclegi Elbląg', 'atrakcje turystyczne Elbląg', 'kajaki Elbląg' mają rosnące wyszukiwania. Specjalizujemy się w SEO dla hoteli, restauracji, wypożyczalni kajaków i agencji turystycznych. Obsługujemy również usługi logistyki portowej.",
  },
  {
    question: "Jakie branże pozycjonujemy w Elblągu?",
    answer:
      "Mamy doświadczenie w turystyce (hotele, pensjonaty, restauracje), logistyce (porty, spedycja), handlu detalicznym (e-commerce), usługach lokalnych (hydraulika, fryzjerstwo, salony), edukacji, gastronomii i HoReCa. Elbląg to miasto portowe i turystyczne - sektorów jest wiele.",
  },
  {
    question: "Jak port Elbląski wpływa na SEO w mieście?",
    answer:
      "Port Elbląski to jedno z najważniejszych miejsc pracy w mieście - firmy logistyczne, spedycje i producenci szukają partnerów online. Frazy takie jak 'logistyka Elbląg', 'spedycja port Elbląg', 'usługi portowe' mają stały popyt. SEO dla firm B2B z sektora portowo-logistycznego to nasza specjalność.",
  },
  {
    question: "Czy SEO dla turystyki w Elblągu ma sens?",
    answer:
      "Absolutnie. Elbląg przyciąga turystów morskich, aktywnych (kajaki) i kulturalnych (katedra gotycka, muzea). Frazy takie jak 'rezerwacja hotelu Elbląg', 'kajaki Elbląg', 'co zobaczyć Elbląg' rosną każdego roku. Konkurencja SEO jest niska - idealna szansa do szybkiego zdobycia pozycji i dominacji na rynku turystycznym Elbląga.",
  },
];

const PozycjonowanieElblag = () => {
  const results = [
    {
      metric: "+245%",
      label: "Wzrost ruchu organicznego",
      context: "firma turystyczna Elbląg",
    },
    { metric: "TOP 3", label: "Pozycja w Google", context: "frazy lokalne Elbląg" },
    { metric: "3 mies.", label: "Czas do pierwszej strony", context: "turystyka i hotele" },
    { metric: "4,9/5", label: "Ocena klientów", context: "11 opinii" },
  ];

  const districts = [
    "Stare Miasto",
    "Śródmieście",
    "Nowe Miasto",
    "Grodzisko",
    "Piaski",
    "Robotnicze",
  ];

  const industries = [
    { name: "Turystyka i hotele", icon: Globe },
    { name: "Gastronomia i HoReCa", icon: Building2 },
    { name: "Logistyka i porty", icon: TrendingUp },
    { name: "Usługi lokalne", icon: Target },
    { name: "E-commerce", icon: BarChart2 },
    { name: "Edukacja i kultura", icon: Star },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Elbląg - lokalne SEO dla firm | fotz studio"
        description="Pozycjonowanie stron Elbląg. Agencja SEO fotz studio - audyt SEO, optymalizacja, link building. SEO dla turystyki, hoteli i portów. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/elblag"
        ogTitle="Pozycjonowanie Elbląg — fotz studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Elblągu. SEO dla firm turystycznych, hoteli, restauracji i logistyki portowej. Morskie miasto czeka na Twoją markę."
        keywords="pozycjonowanie elbląg, seo elbląg, agencja seo elbląg, pozycjonowanie lokalne elbląg, pozycjonowanie stron elbląg, seo dla firm elbląg, audyt seo elbląg"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Elbląg"
        description="Agencja SEO fotz studio oferuje profesjonalne pozycjonowanie stron dla firm z Elbląga. Audyt SEO, optymalizacja on-page, link building dla turystyki, hoteli, gastronomii i logistyki."
        url="https://fotz.pl/uslugi/pozycjonowanie/elblag"
        provider="fotz studio"
        areaServed="Elblag"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Elbląg", url: "https://fotz.pl/uslugi/pozycjonowanie/elblag" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gray-900 overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Pozycjonowanie · Elbląg nad Morzem Bałtyckim
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Pozycjonowanie{" "}
              <span className="text-yellow-400">Elbląg</span> —
              lokalne SEO dla firm portowych i turystycznych
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Pomagamy firmom z Elbląga zdobyć pierwszą stronę Google. Specjalizujemy się w SEO dla turystyki, gastronomii, hoteli i logistyki portowej. Audyt SEO, optymalizacja i link building dostosowany do morskiego rynku Elbląga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8 bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                <Link to="/kontakt">
                  Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 border-white text-white hover:bg-white/10">
                <Link to="/uslugi/pozycjonowanie">
                  Pakiety i ceny SEO
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
              {["White-hat SEO", "Turystyka i logistyka", "Google Analytics 4", "Raport co 2 tygodnie"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-800/50 border-y border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                  {r.metric}
                </div>
                <div className="text-sm font-medium text-white">{r.label}</div>
                <div className="text-xs text-gray-400 mt-1">{r.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elbląg specifics */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SEO w Elblągu — turystyka, port i rosnący rynek lokalny
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="space-y-6 text-gray-400">
                <p>
                  Elbląg to <strong className="text-white">ok. 118 tys. mieszkańców</strong> i jedno z
                  najważniejszych miast turystycznych nad{" "}
                  <strong className="text-white">Morzem Bałtyckim</strong>. Miasto przyciąga turystów
                  z całego świata - zarówno aktywnych (kajaki, wycieczki) jak i kulturalnych (gotycka
                  katedra, muzea, kanały).
                </p>
                <p>
                  <strong className="text-white">Port Elbląski</strong> to jedno z pierwszych miast w
                  Polsce pod względem przeładunków - firmy logistyczne, spedycje i producenci szukają
                  partnerów online. Konkurencja SEO jest<strong className="text-white"> niska, a potencjał duży</strong>.
                </p>
                <p>
                  Dla firm turystycznych (hotele, restauracje, kajaki) SEO to droga do nowych
                  rezerwacji i gości. Dla biznesu portowego i logistyki - to kanał B2B do znalezienia
                  partnerów handlowych. <strong className="text-white">Elbląg to niedoceniony rynek SEO</strong>.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Elbląga
                </h3>
                <div className="flex flex-wrap gap-2">
                  {districts.map((district) => (
                    <span
                      key={district}
                      className="bg-yellow-400/10 text-yellow-400 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {district}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  + Cały rejon Warmińsko-Mazurski i przymorze
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Branże, które pozycjonujemy w Elblągu
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Od turystyki po logistykę portową — mamy doświadczenie
              w sektorach typowych dla Elbląga.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industries.map((ind, i) => (
              <div key={i}>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex items-center gap-3 hover:border-yellow-400/40 transition-colors">
                  <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center shrink-0">
                    <ind.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="font-medium text-white text-sm">{ind.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Jak działamy — pozycjonowanie firm z Elbląga
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę pod kątem fraz lokalnych (Elbląg, turystyka morska) i branżowych. Sprawdzamy techniczne podstawy i profil konkurencji.",
              },
              {
                step: "02",
                title: "Strategia dla Elbląga",
                desc: "Dobieramy słowa kluczowe dla turystyki, hoteli, gastronomii i logistyki. Plany content uwzględniają lokalne trendy i sezonowość (letnie wakacje, weekendy morskie).",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści SEO na frazy elbląskie i budujemy linki z zasobów turystycznych i portowych.",
              },
              {
                step: "04",
                title: "Raportowanie i skalowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Gdy strona nabiera autorytetu, rozszerzamy na kolejne frazy i ekspandujemy geograficznie.",
              },
            ].map((step, i) => (
              <div key={i}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center shrink-0 text-gray-900 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-white text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pakiety SEO dla Elbląga
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Elastyczne plany dostosowane do budżetu i potrzeb Twojego biznesu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "LOCAL",
                price: "800-1500 zł",
                period: "/miesiąc",
                desc: "Idealne dla małych firm usługowych i lokalnych",
                features: [
                  "Audyt SEO",
                  "Optymalizacja na 10-15 fraz",
                  "Techniczne SEO",
                  "Basic link building",
                  "Raport co 2 tygodnie",
                  "Support email",
                ],
              },
              {
                name: "STANDARD",
                price: "1500-3000 zł",
                period: "/miesiąc",
                desc: "Dla firm z wyższą konkurencją i ambicją wzrostu",
                features: [
                  "Audyt SEO + strategia",
                  "Optymalizacja na 25-35 fraz",
                  "Content SEO (6-8 artykułów)",
                  "Advanced link building",
                  "Raport co 2 tygodnie",
                  "Monthly strategy call",
                ],
                highlighted: true,
              },
              {
                name: "PRO",
                price: "3000-6000 zł",
                period: "/miesiąc",
                desc: "Dla ambitnych projektów e-commerce i turystyki",
                features: [
                  "Full SEO audit + strategy",
                  "Optymalizacja 50+ fraz",
                  "Content SEO (12-16 artykułów)",
                  "Aggressive link building",
                  "Technical SEO deep dive",
                  "Bi-weekly strategy calls",
                ],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 border transition-colors ${
                  pkg.highlighted
                    ? "bg-yellow-400/10 border-yellow-400"
                    : "bg-gray-800 border-gray-700"
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-yellow-400">{pkg.price}</span>
                  <span className="text-sm text-gray-400">{pkg.period}</span>
                </div>
                <p className="text-sm text-gray-400 mb-6">{pkg.desc}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  asChild
                  className={`w-full ${
                    pkg.highlighted
                      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                      : "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
                  }`}
                  variant={pkg.highlighted ? "default" : "outline"}
                >
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-400 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gotowy na pierwszą stronę Google w Elblągu?
          </h2>
          <p className="text-gray-900/80 text-lg mb-8 max-w-xl mx-auto">
            Zamów bezpłatny audyt SEO. Przeanalizujemy Twoje frazy dla Elbląga
            i pokażemy, co powstrzymuje Cię przed TOP 10.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base px-8 bg-gray-900 text-white hover:bg-gray-800">
              <Link to="/kontakt">
                Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 border-gray-900 text-gray-900 hover:bg-gray-900/10"
            >
              <Link to="/uslugi/pozycjonowanie">Wszystkie pakiety SEO</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              FAQ — pozycjonowanie stron Elbląg
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i}>
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-gray-800 border border-gray-700 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5 text-white hover:text-yellow-400">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal nav */}
      <section className="py-12 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
            Pozycjonowanie w innych miastach
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { city: "Gdańsk", href: "/uslugi/pozycjonowanie/gdansk" },
              { city: "Szczecin", href: "/uslugi/pozycjonowanie/szczecin" },
              { city: "Toruń", href: "/uslugi/pozycjonowanie/torun" },
              { city: "Bydgoszcz", href: "/uslugi/pozycjonowanie/bydgoszcz" },
              { city: "Warszawa", href: "/uslugi/pozycjonowanie/warszawa" },
              { city: "Kraków", href: "/uslugi/pozycjonowanie/krakow" },
              { city: "Wrocław", href: "/uslugi/pozycjonowanie/wroclaw" },
            ].map((item) => (
              <Link
                key={item.city}
                to={item.href}
                className="bg-gray-800 hover:bg-yellow-400/10 text-gray-300 hover:text-yellow-400 transition-colors text-sm px-4 py-2 rounded-full font-medium border border-gray-700 hover:border-yellow-400"
              >
                {item.city}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              to="/uslugi/pozycjonowanie"
              className="text-yellow-400 hover:text-yellow-300 text-sm font-medium inline-flex items-center gap-1"
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

export default PozycjonowanieElblag;
