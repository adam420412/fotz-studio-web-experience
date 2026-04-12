import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Building2,
  MapPin,
  Factory,
  Zap,
  BarChart3,
  Target,
  CheckCircle2,
  ArrowRight,
  Phone,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
  OrganizationSchema,
} from "@/components/seo/StructuredData";

const stats = [
  { value: 150, suffix: "+", label: "Firm w Zabrzu" },
  { value: 8, suffix: "", label: "Lat na rynku" },
  { value: 95, suffix: "%", label: "Zadowolenia klientów" },
  { value: 500, suffix: "%", label: "Średni wzrost ruchu" },
];

const processSteps = [
  {
    number: "01",
    title: "Audyt SEO",
    description:
      "Analizujemy obecny stan Twojej strony, konkurencję i słowa kluczowe dla Zabrza",
  },
  {
    number: "02",
    title: "Strategia pozycjonowania",
    description:
      "Tworzymy plan działań dostosowany do Twoich celów biznesowych i rynku Zabrza",
  },
  {
    number: "03",
    title: "Implementacja",
    description:
      "Wdrażamy zmiany techniczne, tworzymy treść i budujemy autorytet domeny",
  },
  {
    number: "04",
    title: "Monitoring i optymalizacja",
    description:
      "Śledzmy wyniki, raportujemy postępy i ciągle doskonalimy strategie",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Nieruchomości",
    description:
      "Pozycjonowanie dla agencji nieruchomości, deweloperów i biur pośrednictwa w Zabrzu",
  },
  {
    icon: Factory,
    title: "Przemysł i produkcja",
    description:
      "SEO dla firm produkcyjnych, hurtowni i przedsiębiorstw przemysłowych",
  },
  {
    icon: Zap,
    title: "Usługi i rzemiosła",
    description:
      "Pozycjonowanie dla hydraulików, elektryków, stolarzy i innych usługodawców",
  },
  {
    icon: Users,
    title: "Medycyna i zdrowie",
    description:
      "SEO dla przychodni, gabinetów lekarskich, dentystów i salonów spa",
  },
  {
    icon: Target,
    title: "E-commerce",
    description:
      "Pozycjonowanie sklepów internetowych sprzedających produkty do Zabrza",
  },
  {
    icon: BarChart3,
    title: "Konsulting biznesowy",
    description:
      "SEO dla doradców, trenerów biznesu i firm konsultingowych w regionie",
  },
];

const pricingPlans = [
  {
    name: "LOCAL",
    price: "800-1500",
    description: "Dla małych firm i startupów",
    features: [
      "Do 15 słów kluczowych",
      "Optymalizacja techniczna",
      "Audyt konkurencji",
      "Raport miesięczny",
      "Wsparcie emailowe",
    ],
    popular: false,
  },
  {
    name: "STANDARD",
    price: "1500-3000",
    description: "Najpopularniejszy pakiet",
    features: [
      "Do 30 słów kluczowych",
      "Tworzenie treści (2 artykuły/mies)",
      "Link building",
      "Raport szczegółowy",
      "Wsparcie telefoniczne",
      "Spotkania strategiczne co miesiąc",
    ],
    popular: true,
  },
  {
    name: "PRO",
    price: "3000-6000",
    description: "Dla ambitnych firm",
    features: [
      "Do 50 słów kluczowych",
      "Tworzenie treści (4 artykuły/mies)",
      "Agresywny link building",
      "Monitoring brandingu",
      "Dedykowany account manager",
      "Wsparcie 24/7",
      "Strategia roczna",
    ],
    popular: false,
  },
];

const faqItems = [
  {
    question: "Ile czasu zajmuje pozycjonowanie strony w Zabrzu?",
    answer:
      "Pierwsze rezultaty widać zwykle po 2-3 miesiącach, jednak pełne efekty SEO wymagają 6-12 miesięcy intensywnych prac. Zabrze to konkurencyjny rynek, ale dzięki naszemu doświadczeniu i sprawdzonym strategiom osiągamy rezultaty szybciej niż średnia.",
  },
  {
    question: "Czy SEO gwarantuje pozycję nr 1 w Google?",
    answer:
      "Nikt nie może gwarantować pierwszej pozycji, jeśli twierdzi inaczej - unika. Gwarantujemy natomiast profesjonalne podejście, ciągłe doskonalenie i transportujemy wiedzę sektora. Nasze strategie zwiększają widoczność i przychody, nawet bez pozycji nr 1.",
  },
  {
    question: "Jakie są różnice między SEO a SEM (Google Ads)?",
    answer:
      "SEO to pozycjonowanie organiczne - darmowe kliknięcia z Google, ale wymaga czasu. SEM to reklama Google Ads - natychmiast widoczne, ale trzeba płacić za klik. Idealne jest połączenie obu strategii. Polecamy SEO jako długoterminową inwestycję, a Google Ads jako szybkie wsparcie.",
  },
  {
    question: "Czy pozycjonowanie działa dla firm lokalnych w Zabrzu?",
    answer:
      "Tak, absolut! SEO lokalne jest szczególnie skuteczne dla firm działających w jednym mieście. Wyszukiwania typu 'hydraulik Zabrze' czy 'kancelaria prawna Zabrze' mają wysoką intencję zakupu. To nasz specjalizm dla biznesu lokalnego.",
  },
  {
    question: "Jaki jest koszt pozycjonowania dla e-commerce?",
    answer:
      "E-commerce wymaga bardziej zaawansowanego SEO - optymalizacji kategorii, produktów i budowania autorytu. Cena zaczyna się od 2000 PLN/mies. Zwrotu z inwestycji zwykle widać w 3-4 miesiące poprzez wzrost sprzedaży online.",
  },
  {
    question: "Czy mogę zmienić agencję SEO bez utraty pozycji?",
    answer:
      "Tak, pozycje są powiązane ze stroną internetową, a nie z agencją. Zmiana partnera SEO nie spowoduje spadku rankingów, ale nowy zespół potrzebuje czasu (2-4 tygodnie) na analizę i przejęcie pracy. Dbamy o płynne przejścia dla nowych klientów.",
  },
];

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, displayValue } = useCountUp({ end: value, duration: 2000 });
  return (
    <div className="text-center" ref={ref}>
      <div className="text-4xl md:text-5xl font-bold text-yellow-400">
        {displayValue}
        {suffix}
      </div>
      <div className="text-sm text-gray-400 mt-2">{label}</div>
    </div>
  );
}

export default function PozycjonowanieZabrze() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <OrganizationSchema />
      <Layout>
        <SEOHead
          title="Pozycjonowanie Zabrze - lokalne SEO dla firm | fotz studio"
          description="Pozycjonowanie stron w Zabrzu. SEO lokalne dla firm, e-commerce i usługodawców. Zwiększymy Twoją widoczność w Google. Darmowa wycena."
          canonical="https://fotz.pl/pozycjonowanie/zabrze"
        />

        <ServiceSchema
          name="Pozycjonowanie Zabrze"
          description="Profesjonalne SEO lokalne i pozycjonowanie stron internetowych dla firm w Zabrzu. Zwiększamy widoczność w Google i przychody."
          areaServed="Zabrze"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            {
              name: "Usługi",
              url: "https://fotz.pl/uslugi",
            },
            {
              name: "Pozycjonowanie Zabrze",
              url: "https://fotz.pl/pozycjonowanie/zabrze",
            },
          ]}
        />
        <FAQSchema items={faqItems} />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(234,179,8,0.05),transparent_50%)]" />

          <div className="container-wide relative z-10 py-20 md:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <Badge
                variant="outline"
                className="mb-6 text-yellow-400 border-yellow-400/30 bg-yellow-400/5"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Pozycjonowanie lokalne
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Pozycjonowanie Zabrze
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Zwiększymy widoczność Twojej firmy w Google dla klientów z
                Zabrza. Professionalne SEO, które przynosi realne rezultaty i
                nowych klientów.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                >
                  <Link to="/kontakt">
                    Wycena SEO
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 border-gray-700 text-white hover:bg-gray-800"
                >
                  <a href="tel:+48790814814">
                    <Phone className="w-4 h-4" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-950 border-t border-yellow-400/10">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <StatCounter {...stat} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Local SEO Matters Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Dlaczego SEO lokalne dla Zabrza?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Zabrze to dynamicznie rozwijające się miasto z bogatą historią
                górniczą. Dzisiaj to centrum usług, handlu i małych przedsiębiorstw
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Kierunkuj do lokalnych klientów",
                  description:
                    "Ludzie w Zabrzu szukają w Google 'hydraulik Zabrze' czy 'fryzjer blisko mnie'. Dochodź do nich w tym momencie decyzji.",
                },
                {
                  title: "Niższa konkurencja niż online",
                  description:
                    "Pozycjonowanie lokalne jest mniej konkurencyjne niż SEO ogólne. Szybciej osiągniesz pierwszą stronę Google.",
                },
                {
                  title: "Wyższa konwersja",
                  description:
                    "Klienci szukający lokalnie mają wyraźną intencję - są gotowi do pracy z firmą w ich mieście. To gorące leady.",
                },
                {
                  title: "Mapki Google",
                  description:
                    "Dobra pozycja w Mapach Google to widoczność w wynikach lokalnych - oddzielny kanał na dodatkowych klientów.",
                },
                {
                  title: "Budowanie reputacji",
                  description:
                    "SEO lokalne to również opinie, recenzje i budowanie wizerunku lidera branży w Zabrzu.",
                },
                {
                  title: "Powrót z inwestycji",
                  description:
                    "Dla firm lokalnych SEO ma jeden z najwyższych ROI - koszty są niskie, a efekty duże.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-950 border-yellow-400/10 hover:border-yellow-400/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-white text-lg mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="section-padding bg-gray-950">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Nasz proces SEO
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Sprawdzona metodologia, która działa dla firm w Zabrzu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900 border-yellow-400/10 cursor-pointer transition-all hover:border-yellow-400/30 ${
                    activeStep === index ? "border-yellow-400/50" : ""
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold text-yellow-400 mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-heading font-semibold text-white text-xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Gałęzie biznesu dla których pracujemy w Zabrzu
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Niezależnie od branży - e-commerce, usługi, przemysł czy medycyna
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="bg-gray-950 border-yellow-400/10 hover:border-yellow-400/30 transition-colors group"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
                      <industry.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-gray-400">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-gray-950">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Ceny SEO dla Zabrza
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Przejrzyste cenniki, bez ukrytych kosztów. Wszystkie ceny netto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular
                      ? "border-yellow-400 shadow-lg shadow-yellow-400/10 bg-gray-900"
                      : "border-yellow-400/10 bg-gray-950"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-yellow-400 text-gray-900">
                        Najpopularniejszy
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6 pt-8">
                    <h3 className="font-heading font-bold text-lg text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-yellow-400">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">PLN/mies</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${
                        plan.popular
                          ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                          : "border-gray-700 text-white hover:bg-gray-900"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link to="/kontakt">Zamów wycenę</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Najczęściej zadawane pytania o SEO
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Odpowiedzi na najważniejsze pytania o pozycjonowanie
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-gray-950 border border-yellow-400/10 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-medium text-white hover:text-yellow-400 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-950">
          <div className="container-wide">
            <div className="bg-gradient-to-br from-yellow-400/10 via-yellow-400/5 to-gray-900 border border-yellow-400/20 rounded-2xl p-8 md:p-12 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Gotowy do wzrostu biznesu w Zabrzu?
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-8">
                Darmowa wycena SEO, bez żadnych zobowiązań. Poznaj, ile możemy
                na Tobie zarobić poprzez SEO w Zabrzu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                >
                  <Link to="/kontakt">
                    Darmowa wycena
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 border-yellow-400/30 text-white hover:bg-gray-900"
                >
                  <a href="tel:+48790814814">
                    <Phone className="w-4 h-4" />
                    Zadzwoń teraz
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-wide max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Pozycjonowanie Zabrze - SEO lokalne dla firm
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Zabrze to piąte co do wielkości miasto w Śląsku, leżące w
                centralnej części województwa. Przez wiele lat kojarzone jest z
                górnictwem węgla - historią, która ukształtowała tożsamość
                miasta. Dzisiaj Zabrze to nowoczesne centrum biznesu, handlu i
                usług, gdzie małe i średnie firmy konkurują o uwagę lokalnych
                klientów.
              </p>

              <p>
                Aby znaleźć klientów w Zabrzu, musisz być widoczny w Google.
                Pozycjonowanie lokalne (SEO) to najskuteczniejszy sposób na
                dotarcie do ludzi, którzy właśnie cię szukają. Wiele firm w
                Zabrzu wciąż szuka nowych kanałów pozyskiwania klientów - SEO
                to kanał, który przynosi rezultaty.
              </p>

              <h3 className="text-2xl font-heading font-bold text-white mt-8">
                Dlaczego SEO dla firm w Zabrzu?
              </h3>

              <p>
                Zabrze jest miastem o bogatej infrastrukturze biznesowej.
                Znajdziesz tu hurtownie, przedsiębiorstwa produkcyjne,
                nieruchomości, usługodawców i wiele innych branż. Każda z nich
                może skorzystać na widoczności w wyszukiwaniu Google dla miasta.
              </p>

              <p>
                Wyobraź sobie, ile potencjalnych klientów szuka codziennie w
                Google: hydraulika, dentystę, agencję marketingową, biuro
                nieruchomości lub producenta. To Twoi przyszli klienci - trzeba
                ich tylko znaleźć w odpowiedni momencie.
              </p>

              <h3 className="text-2xl font-heading font-bold text-white mt-8">
                Nasza specjalizacja w SEO Zabrze
              </h3>

              <p>
                Pracujemy z firmami w Zabrzu od ponad 8 lat. Znamy lokalny
                rynek, konkurencję i potrzeby biznesu. Specjalizujemy się w
                pozycjonowaniu dla firm lokalnych, które chcą dominować w
                wynikach Google dla swojej branży i miasta.
              </p>

              <p>
                Nasze strategie to połączenie SEO technicznego, tworzenia
                treści, budowania autorytu i optymalizacji dla wyszukiwań
                lokalnych. Pracujemy nad długoterminowymi rezultatami,
                a nie szybkimi trickkami - bo chcemy, aby Twoja strona rosła
                solidnie przez lata.
              </p>

              <h3 className="text-2xl font-heading font-bold text-white mt-8">
                Rezultaty: ile można zarobić dzięki SEO w Zabrzu?
              </h3>

              <p>
                Dla przeciętnej firmy usługowej w Zabrzu wzrost o 50%
                organicznego ruchu to minimum - wielu naszych klientów osiąga
                wzrost 200-500%. Wśród naszych klientów firmy średnie osiągają
                średnio 10-30 nowych lead czy sprzedaży miesięcznie poprzez SEO.
              </p>

              <p>
                Zwrot z inwestycji zwykle widzimy po 3-4 miesiącach. Jeśli
                Twoja marka średnia sprzedaży wynosi 5000 PLN, a miesięcznie
                pozyskujesz 10 klientów dzięki SEO - to 50000 PLN obrotu
                tylko z tego kanału. Porównaj to z kosztem - 2000-3000 PLN
                SEO to inwestycja, która zwraca się wielokrotnie.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
