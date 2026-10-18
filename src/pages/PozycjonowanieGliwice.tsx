import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  BarChart2,
  Star,
  Building2,
  Globe,
  Target,
  Award,
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
    question: "Ile kosztuje pozycjonowanie w Gliwicach?",
    answer:
      "Wycenę przygotowujemy po rozmowie o zakresie: liczbie i konkurencyjności fraz, obszarze (same Gliwice czy cały GOM), stanie technicznym strony oraz potrzebnych treściach i linkach. Lokalna usługa wymaga zwykle mniejszego zakresu niż firma B2B czy sklep internetowy działający w całym regionie.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie dla słów z Gliwic?",
    answer:
      "SEO to proces rozłożony na miesiące, a tempo zależy od konkurencji w branży, historii domeny i stanu strony. Nie gwarantujemy konkretnej pozycji ani terminu jej osiągnięcia — pozycje zależą od algorytmów Google i działań konkurencji. Postępy pokazujemy w regularnych raportach.",
  },
  {
    question: "Jakie branże mają największy potencjał SEO w Gliwicach?",
    answer:
      "IT i automatyka — firmy technologiczne szukają dostawców online. Logistyka i handel (położenie przy A1/A4) — transport, magazynowanie. Produkcja i energetyka. HoReCa i usługi lokalne. Budownictwo. E-commerce w całym GOM. Potencjał konkretnej branży oceniamy w audycie.",
  },
  {
    question: "Czy transformacja Gliwic od górnictwa do High-Tech wpływa na SEO?",
    answer:
      "Zdecydowanie. Gliwice przechodzą transformację od górnictwa do automatyki, IT i High-Tech. To tworzy nowy rynek — frazy takie jak 'rozwiązania automatyki Gliwice', 'integrator systemów GOM', 'IT consulting Śląsk' mają rosnący potencjał. Poziom konkurencji dla takich fraz sprawdzamy w audycie.",
  },
  {
    question: "Czy warto pozycjonować się na cały GOM czy tylko Gliwice?",
    answer:
      "Zależy od branży. Dla lokalnych usług (fryzjer, lekarz, auto-serwis) — skupiamy się na Gliwicach + okolicach. Dla B2B i e-commerce — optymalizujemy 'Gliwice', ale i całe GOM ('dostawca systemów GOM', 'produkcja metalowa Śląsk'). Rekomendujemy strategię hybrydową: lokalnie + regionalne reach.",
  },
  {
    question: "Czy Politechnika Śląska zmienia dynamikę SEO w Gliwicach?",
    answer:
      "Może — Politechnika Śląska przyciąga studentów, pracowników i gości konferencji. Potencjał SEO dla 'akademiki Gliwice', 'noclegi dla pracowników konferencji', 'usługi dla studentów'. B2B dla uczelni: rozwiązania IT, logistyka, catering. Poszerzamy grę poza typowe lokalne usługi na segment akademicki.",
  },
];

const PozycjonowanieGliwice = () => {
  const districts = [
    "Śródmieście",
    "Zatorze",
    "Szobiszowice",
    "Sośnica",
    "Stare Gliwice",
    "Łabędy",
    "Ostropa",
    "Trynek",
  ];

  const industries = [
    { name: "IT i Automatyka", icon: Target },
    { name: "Logistyka", icon: BarChart2 },
    { name: "Produkcja", icon: Building2 },
    { name: "Handel e-commerce", icon: Award },
    { name: "HoReCa", icon: Star },
    { name: "Usługi", icon: Globe },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Gliwice — SEO lokalne | fotz studio"
        description="Pozycjonowanie stron Gliwice i GOM. Agencja SEO fotz studio — audyt SEO, link building dla IT, produkcji i logistyki. Bezpłatna konsultacja SEO!"
        canonical="https://www.fotz-studio.pl/pozycjonowanie/gliwice"
        keywords="pozycjonowanie gliwice, agencja seo gliwice, seo gliwice, pozycjonowanie stron gliwice, seo dla firm gliwice, seo śląsk, pozycjonowanie lokalne gliwice"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Gliwice"
        description="Agencja SEO fotz studio oferuje pozycjonowanie stron dla firm z Gliwic. Specjalizacja w IT, automatyce, logistyce i produkcji. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne dla całego GOM."
        provider="Fotz Studio"
        areaServed="Gliwice"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://www.fotz-studio.pl/uslugi/pozycjonowanie" },
          { name: "Gliwice", url: "https://www.fotz-studio.pl/pozycjonowanie/gliwice" },
        ]}/>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gray-900 overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Pozycjonowanie · Gliwice i GOM
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Pozycjonowanie{" "}
                <span className="text-yellow-400">Gliwice</span> — High-Tech hub Górnego Śląska
              </h1>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Pomagamy firmom z Gliwic poprawić widoczność w Google. Pracujemy z Poznania, a firmy
                z Gliwic obsługujemy zdalnie. Audyt SEO, optymalizacja techniczna, content i link building
                dostosowane do Twojej branży i rynku GOM.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-base px-8 bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                  <Link to="/kontakt?usluga=seo&wariant=audit#formularz">
                    Zapytaj o audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8 border-gray-700 text-white hover:bg-gray-800">
                  <Link to="/uslugi/pozycjonowanie">
                    Oferta SEO
                  </Link>
                </Button>
              </div>
            </FadeInView>

            <FadeInView delay={0.4}>
              <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
                {["White-hat SEO", "Regularne raporty", "Współpraca zdalna", "Jasne zasady współpracy"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Gliwice SEO specifics */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gliwice — transformacja od górnictwa do High-Tech i automatyki
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-gray-300">
                <p>
                  Gliwice to <strong className="text-white">jedno z miast metropolii GOM</strong> — miasto
                  przechodzące transformację od górnictwa do automatyki, IT i nowych technologii.
                </p>
                <p>
                  <strong className="text-white">IT i automatyka</strong> — firmy technologiczne i dostawcy
                  rozwiązań automatyki. Politechnika Śląska — zaplecze dla startupów i firm tech. Dla firm
                  high-tech i B2B to rynek, w którym warto zadbać o widoczność w Google.
                </p>
                <p>
                  <strong className="text-white">Logistyka A1/A4</strong> — crossroads autostrad.
                  <strong className="text-white"> Kultura i nauka (Muzeum Górnictwa, Politechnika)</strong>.
                  Handel e-commerce, HoReCa i usługi lokalne. Poziom konkurencji SEO w Twojej branży
                  sprawdzamy w audycie.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">
                  Zdalnie obsługujemy firmy z całych Gliwic
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
                  + całe GOM (Katowice, Zabrze, Bytom, Chorzów, Mysłowice...)
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Branże, z którymi pracujemy przy SEO dla Gliwic
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Od IT i automatyki po logistykę — strategię dobieramy do specyfiki branży i rynku Górnego Śląska.
            </p>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industries.map((ind, i) => (
              <FadeInView key={i} delay={i * 0.08}>
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 flex items-center gap-3 hover:border-yellow-400/40 transition-colors">
                  <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center shrink-0">
                    <ind.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="font-medium text-white text-sm">{ind.name}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Jak działamy — pozycjonowanie firm z Gliwic
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Konsultacja i zakres audytu SEO",
                desc: "Analizujemy Twoją stronę i frazy z Gliwic i całego GOM. Sprawdzamy potencjał w IT, automatyce, logistyce czy Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia dla Gliwic i regionu",
                desc: "Dobieramy słowa kluczowe dla High-Tech, E-commerce i B2B. Planujemy SEO dla sektorów transformującego się Śląska.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści na lokalne i branżowe frazy, budujemy linki z branżowych źródeł.",
              },
              {
                step: "04",
                title: "Raportowanie i dostosowanie",
                desc: "Regularnie raportujemy pozycje i ruch. Strategię dostosowujemy do zmian konkurencji i wyników.",
              },
            ].map((step, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center shrink-0 text-gray-900 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-white text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Od czego zależy wycena pozycjonowania
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Nie mamy sztywnych pakietów. Wycenę przygotowujemy po rozmowie o zakresie i po wstępnej analizie strony.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Frazy i obszar",
                desc: "Liczba i konkurencyjność słów kluczowych oraz to, czy celujesz w same Gliwice, cały GOM czy Śląsk.",
              },
              {
                name: "Stan strony",
                desc: "Kondycja techniczna, szybkość, struktura i historia domeny — od tego zależy zakres optymalizacji.",
              },
              {
                name: "Treści i linki",
                desc: "Ile nowych treści trzeba przygotować i jaki zakres link buildingu ma sens w Twojej branży.",
              },
            ].map((factor, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="rounded-xl p-8 border bg-gray-900 border-gray-700 h-full">
                  <h3 className="text-lg font-bold mb-3 text-white">{factor.name}</h3>
                  <p className="text-gray-300">{factor.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
              <Link to="/kontakt">Zapytaj o wycenę</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-400 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Chcesz poprawić widoczność w Google w Gliwicach?
            </h2>
            <p className="text-gray-800 text-lg mb-8 max-w-xl mx-auto">
              Zapytaj o audyt SEO. Zakres i wycenę ustalimy na bezpłatnej konsultacji, a raport przygotujemy z konkretnymi
              rekomendacjami dla rynku Gliwic i całego GOM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8 bg-gray-900 text-yellow-400 hover:bg-gray-800">
                <Link to="/kontakt?usluga=seo&wariant=audit#formularz">
                  Zapytaj o audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 border-gray-900 text-gray-900 hover:bg-yellow-300"
              >
                <Link to="/uslugi/pozycjonowanie">Wszystkie pakiety SEO</Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              FAQ — pozycjonowanie stron Gliwice
            </h2>
          </FadeInView>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <FadeInView key={i} delay={i * 0.05}>
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-gray-900 border border-gray-700 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5 text-white hover:text-yellow-400">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeInView>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal nav */}
      <section className="py-12 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
            Pozycjonowanie w innych miastach:
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Pozycjonowanie Warszawa", url: "/seo/pozycjonowanie-warszawa" },
              { label: "Pozycjonowanie Kraków", url: "/seo/pozycjonowanie-krakow" },
              { label: "Pozycjonowanie Katowice", url: "/seo/pozycjonowanie-katowice" },
              { label: "Pozycjonowanie Wrocław", url: "/seo/pozycjonowanie-wroclaw" },
              { label: "Pozycjonowanie Poznań", url: "/seo/pozycjonowanie-poznan" },
              { label: "Pozycjonowanie Gdańsk", url: "/seo/pozycjonowanie-gdansk" },
              { label: "Pozycjonowanie Łódź", url: "/seo/pozycjonowanie-lodz" },
              { label: "Pozycjonowanie Szczecin", url: "/uslugi/pozycjonowanie/szczecin" },
              { label: "Wszystkie usługi SEO", url: "/uslugi/pozycjonowanie" },
            ].map((link) => (
              <Link
                key={link.url}
                to={link.url}
                className="text-yellow-400 hover:underline font-medium text-sm"
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

export default PozycjonowanieGliwice;
