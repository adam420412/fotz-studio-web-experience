import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle, Globe, Smartphone, Palette, Camera, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const whyChooseUs = [
  {
    icon: TrendingUp,
    title: "Doświadczenie w SEO lokalnym",
    desc: "Specjalizujemy się w pozycjonowaniu firm z Kielc. Wiemy, jak zdobyć klientów z Twojego miasta online.",
  },
  {
    icon: Globe,
    title: "Nowoczesne strategie marketingowe",
    desc: "Łączymy SEO, Google Ads, social media i content marketing w spójna strategię przyciągającą klientów.",
  },
  {
    icon: Smartphone,
    title: "Strony zoptymalizowane mobilnie",
    desc: "Każda strona, którą tworzymy, jest responsywna, szybka i zachwycająca na wszystkich urządzeniach.",
  },
  {
    icon: Palette,
    title: "Kreatywny design i branding",
    desc: "Tworzymy wizualną tożsamość, którą będą pamiętali Twoi klienci. Brand, który sprzedaje.",
  },
];

const services = [
  {
    icon: "🌐",
    title: "Strony internetowe",
    desc: "Nowoczesne strony na miarę Twojej marki. Responsywne, szybkie i gotowe do konwersji klientów.",
  },
  {
    icon: "🔍",
    title: "SEO / Pozycjonowanie",
    desc: "Pojawiaj się wysoko w Google na frazy, na które szukają Twoi klienci w Kielcach i okolicach.",
  },
  {
    icon: "💰",
    title: "Google Ads",
    desc: "Reklamowe kampanie, które trafiają do ludzi szukających dokładnie tego, co oferujesz.",
  },
  {
    icon: "📱",
    title: "Social Media",
    desc: "Content, który angażuje. Budujemy społeczność wokół Twojej marki na Facebooku i Instagramie.",
  },
  {
    icon: "🎨",
    title: "Identyfikacja wizualna",
    desc: "Logo, kolory, typografia — tworzymy spójny wizerunek, który wyróżnia Cię od konkurencji.",
  },
  {
    icon: "📸",
    title: "Fotografia produktowa",
    desc: "Profesjonalne zdjęcia, które pokazują Twoje produkty w najlepszym świetle.",
  },
];

const pricingPackages = [
  {
    name: "START",
    price: "1500",
    description: "Dla małych firm, które dopiero zaczynają online",
    features: [
      "Strona internetowa (5-10 podstron)",
      "Optymalizacja SEO on-page",
      "Konfiguracja Google My Business",
      "Logo i podstawowy branding",
      "Konsultacja strategiczna",
    ],
  },
  {
    name: "ROZWÓJ",
    price: "3500",
    description: "Dla firm chcących rosnąć na rynku Kielc",
    features: [
      "Strona zaawansowana (15+ podstron)",
      "Audyt SEO i optymalizacja strony",
      "Kampania Google Ads (1000 zł budżetu)",
      "Social media management (4 posty/m)",
      "Pełny branding (logo, paleta barw, style guide)",
      "Raportowanie i monitoring",
    ],
  },
  {
    name: "PREMIUM",
    price: "7000+",
    description: "Pełne wsparcie marketingowe — plan indywidualny",
    features: [
      "Strona e-commerce lub zaawansowana aplikacja",
      "Strategia SEO i content marketing",
      "Kampanie Google Ads i Social Media Ads",
      "Profesjonalna fotografia produktowa",
      "Content marketing (artykuły, wideo)",
      "Social media management (codziennie)",
      "Dedykowany menedżer projektów",
      "Raportowanie tygodniowe",
    ],
  },
];

const faqItems = [
  {
    question: "Ile kosztuje agencja marketingowa w Kielcach?",
    answer: "Ceny usług marketingowych w Kielcach zaczynają się od 1500 zł za pakiet START (strona + branding). Pakiet ROZWÓJ kosztuje 3500 zł i obejmuje stronę, SEO, Google Ads i social media. PREMIUM (powyżej 7000 zł) to pełne wsparcie marketingowe ze wszystkimi usługami. Każdy pakiet dostosowujemy do potrzeb i budżetu klienta.",
  },
  {
    question: "Jak długo trwa budowa strony internetowej?",
    answer: "Strona na pakiet START (5-10 podstron) zajmuje 2-3 tygodnie. Pakiet ROZWÓJ (15+ podstron) — 4-6 tygodni. Czas zależy od złożoności projektu, ilości treści i liczby poprawek. Pracujemy w iteracjach, aby upewnić się, że rezultat spełnia Twoje oczekiwania.",
  },
  {
    question: "Czy pracujecie tylko z firmami z Kielc?",
    answer: "Obsługujemy firmy z Kielc, Jędrzejowa, Pińczowa, Chęcin i całego regionu Świętokrzyskiego. Pracujemy również z firmami z całej Polski, ale specjalizujemy się w lokalnym rynku Kielc — znamy konkurencję, wiemy, jakie frazy szukają ludzie w mieście, i rozumiemy lokalny biznes.",
  },
  {
    question: "Czym wyróżnia się rynek Kielc w kontekście marketingu digital?",
    answer: "Kielce to dynamicznie rozwijające się miasto z silnym sektorem przemysłu, turystyki i usług. Targi Kielce, siedziba wielu firm logistycznych i produkcyjnych, to olbrzymi potencjał dla marketingu online. Konkurencja rośnie, ale również liczba ludzi szukających usług i produktów online — dla firm, które będą widoczne w Google, to ogromna szansa.",
  },
  {
    question: "Czy gwarantujecie pozycje w Google?",
    answer: "Nikt nie gwarantuje konkretnych pozycji w Google — każdy, kto to robi, kłamie. Gwarantujemy jednak solidną pracę, przejrzystość i wyniki mierzalne. Audytujemy konkurencję, budujemy strategię oparta na danych i regularnie raportujemy postępy. Pierwsze efekty (wzrost ruchu organicznego) widoczne są po 2-3 miesiącach.",
  },
  {
    question: "Czy mogę mieć dostęp do strony i analityki po umowie?",
    answer: "Oczywiście! Przekazujemy Ci dostęp do wszystkich kont — Google Analytics, Search Console, panel CMS strony. Zawsze będziesz właścicielem domeny i danych. Pracujemy na zasadzie partnerstwa, a ty masz pełną kontrolę nad swoimi zasobami.",
  },
];

const AgencjaMarketingowaKielce = () => {
  return (
    <>
      <SEOHead
        title="Agencja marketingowa Kielce - fotz studio | Marketing internetowy"
        description="Agencja marketingowa w Kielcach. Tworzymy strony internetowe, pozycjonowanie SEO, kampanie Google Ads i branding dla firm z Kielc i Świętokrzyskiego."
        canonical="https://fotz.pl/agencja-marketingowa/kielce"
        keywords="agencja marketingowa kielce, marketing internetowy, strony internetowe kielce, seo kielce, google ads kielce"
      />
      <ServiceSchema
        name="Agencja marketingowa Kielce"
        description="Kompleksowe usługi marketingowe dla firm z Kielc. Strony internetowe, SEO, Google Ads, social media, branding i fotografia produktowa."
        provider="fotz studio"
        areaServed="Kielce"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja marketingowa", url: "https://fotz.pl/agencja" },
          { name: "Kielce", url: "https://fotz.pl/agencja-marketingowa/kielce" },
        ]}
      />
      <FAQSchema items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />
      <OrganizationSchema />

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
                <MapPin className="inline h-4 w-4 mr-1" /> Marketing internetowy w Kielcach
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                Agencja marketingowa <span className="text-yellow-400">Kielce</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pomagamy firmom z Kielc rosnąć w internecie. Tworzymy strony, pozycjonujemy w Google, prowadzimy kampanie reklamowe i budujemy marki, które pamiętają się klienci.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold group">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10"
                >
                  <Link to="#uslugi">Poznaj nasze usługi</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Dlaczego fotz studio w Kielcach?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/40 transition-colors">
                  <item.icon className="h-8 w-8 text-yellow-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="uslugi" className="py-20 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Nasze usługi w Kielcach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service) => (
                <div key={service.title} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/40 transition-colors">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kielce Market Section */}
        <section className="py-20 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Kielce — lokalny rynek cyfrowy</h2>
              <p className="text-gray-300 mb-4">
                Kielce to dynamicznie rozwijające się miasto w centralnej Polsce, siedziba Targów Kielce i wielu firm logistycznych oraz produkcyjnych. Rynek jest konkurencyjny, ale wciąż wiele firm z Kielc nie wykorzystuje w pełni potencjału internetu.
              </p>
              <p className="text-gray-300">
                Firmy, które inwestują w widoczność online — stronę, pozycjonowanie SEO i kampanie Google Ads — zdobywają nowych klientów szybciej i taniej niż konkurencja. Jeśli Twoja firma z Kielc chce rosnąć, marketing digital to nie luksus, a konieczność.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Pakiety i ceny</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-xl p-8 border ${
                    pkg.name === "ROZWÓJ"
                      ? "bg-yellow-400/10 border-yellow-400/50 ring-1 ring-yellow-400/30 scale-105"
                      : "bg-gray-800 border-gray-700"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                  <p className="text-gray-300 text-sm mb-6 h-10">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-yellow-400">{pkg.price}</span>
                    <span className="text-gray-400 ml-1">{pkg.price !== "7000+" ? "zł/mies." : "zł/mies."}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${
                      pkg.name === "ROZWÓJ"
                        ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
                        : "bg-gray-700 hover:bg-gray-600 text-white"
                    }`}
                  >
                    <Link to="/kontakt">Zapytaj o ofertę</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Pytania o agencję marketingową</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-gray-700 rounded-xl px-6 bg-gray-800 data-[state=open]:bg-gray-750"
                >
                  <AccordionTrigger className="text-left font-semibold py-4 text-white hover:text-yellow-400 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Article Section */}
        <section className="py-20 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-white">Marketing dla firm z Kielc — od startupu po przedsiębiorstwo</h2>
              <p className="text-gray-300 mb-4">
                Agencja marketingowa fotz studio obsługuje firmy z Kielc niezależnie od wielkości — startupów, małych firm usługowych, sklepów internetowych i dużych przedsiębiorstw. Każda firma ma inne potrzeby, dlatego każdy plan to indywidualna strategia dostosowana do Twoich celów i budżetu.
              </p>
              <p className="text-gray-300 mb-4">
                Czy szukasz strony internetowej, która będzie konwertować odwiedzających na klientów? Chcesz pojawić się wysoko w Google na frazy, na które szukają Twoi klienci w Kielcach? Potrzebujesz kampanii Google Ads, która będzie rentowna? Czy może chcesz budować markę na социальnych mediach?
              </p>
              <p className="text-gray-300 mb-4">
                Oferujemy wszystko — od strategii po wdrożenie, od bieżącego wsparcia po raportowanie wyników. Pracujemy w oparciu o dane, transparentność i partnerstwo z naszymi klientami.
              </p>
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Usługi marketingowe dla Kielc</h3>
              <p className="text-gray-300 mb-4">
                Specjalizujemy się w usługach dla firm, które chcą rosnąć w Kielcach i regionie Świętokrzyskiego. Znamy konkurencję, wiemy, jakie są najczęściej szukane frazy, i rozumiemy lokalny biznes.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-700 flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/agencja-marketingowa/poznan" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors">
                  → O agencji
                </Link>
                <Link to="/seo/pozycjonowanie" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors">
                  → Pozycjonowanie SEO
                </Link>
                <Link to="/uslugi/strony-internetowe" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors">
                  → Strony internetowe
                </Link>
                <Link to="/agencja-marketingowa/poznan" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors">
                  → Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
};

export default AgencjaMarketingowaKielce;
