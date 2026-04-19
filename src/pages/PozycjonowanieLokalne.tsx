import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Globe, ShoppingCart, BarChart3, Target, MapPin, Building2, Search, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const breadcrumbs = [
  { name: "Strona główna", url: "/" },
  { name: "Usługi", url: "/uslugi" },
  { name: "Pozycjonowanie", url: "/uslugi/pozycjonowanie" },
  { name: "Pozycjonowanie lokalne", url: "/uslugi/pozycjonowanie-lokalne" },
];

export default function PozycjonowanieLokalne() {
  return (
    <>
      <SEOHead
        title="Pozycjonowanie lokalne | SEO dla firm lokalnych | fotz.pl"
        description="Pozycjonowanie lokalne dla firm — dominuj w Google Maps i lokalnych wynikach. Więcej klientów z Twojej okolicy. Sprawdź ofertę!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie-lokalne"
        keywords="pozycjonowanie lokalne, seo lokalne, pozycjonowanie lokalne firmy, seo dla lokalnych firm, pozycjonowanie lokalne google maps, lokalne wyniki google, seo lokalne cennik, pozycjonowanie lokalne poradnik"
      />
      <ServiceSchema
        name="Pozycjonowanie lokalne"
        description="SEO dla firm lokalnych — pozycjonowanie w Google Maps i lokalnych wynikach"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <Layout>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Pozycjonowanie lokalne — bądź #1 w Google dla klientów z Twojej okolicy
              </h1>
              <p className="text-2xl text-purple-700 mb-8 font-semibold max-w-3xl mx-auto">
                46% zapytań Google ma lokalny charakter. Ktoś w Twoim mieście szuka Twojej usługi. Jesteś w Top 3?
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg">
                Bezpłatny audyt SEO
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* What is local SEO */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Co to jest pozycjonowanie lokalne?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                To strategia, która sprawia, że Twoja firma pojawia się dla osób szukających Twojej usługi w Twojej okolicy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Google Business Profile",
                    desc: "Twoja wizytówka w Google — informacje, zdjęcia, opinie, godziny otwarcia",
                  },
                  {
                    title: "Local Pack",
                    desc: "Top 3 wyniki na mapie dla konkretnego miasta/okolicy",
                  },
                  {
                    title: "Lokalne frazy",
                    desc: 'Pozycjonowanie dla zapytań typu "najlepszy fryzjer w Krakowie"',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why Google Maps is gold */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Dlaczego Google Maps to złoto?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Liczby nie kłamią. Local Pack otrzymuje połowę wszystkich kliknięć.
              </p>

              <div className="space-y-6 max-w-4xl mx-auto">
                {[
                  {
                    stat: "44%",
                    title: "Kliknięć w Local Pack",
                    desc: "Ponad połowa wszystkich lokalnych wyszukiwań kliknie na mapę",
                  },
                  {
                    stat: "76%",
                    title: "Szuka na telefonie",
                    desc: "Szukają na komórce gdy są w drodze lub w sklepie konkurencji",
                  },
                  {
                    stat: "72%",
                    title: "Zamierza wiedzieć więcej",
                    desc: "Szukają głównie Twojej lokalizacji, godzin otwarcia, opinii",
                  },
                  {
                    stat: "35%",
                    title: "Przychodzą do Ciebie",
                    desc: "Osoby z Local Pack mają wysoką konwersję — gotowe kupować",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6 items-start p-6 bg-white rounded-lg border border-gray-200"
                  >
                    <div className="text-5xl font-bold text-purple-600 flex-shrink-0">{item.stat}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Co zawiera usługa */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Co zawiera nasza usługa?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Kompleksowe podejście do pozycjonowania lokalnego.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    icon: MapPin,
                    title: "Google Business Profile",
                    desc: "Optymalizujemy Twój profil, dodajemy zdjęcia, odpowiadamy na opinie",
                  },
                  {
                    icon: CheckCircle2,
                    title: "NAP Consistency",
                    desc: "Nazwa, adres, telefon — spójnie na całej sieci",
                  },
                  {
                    icon: Globe,
                    title: "Lokalne cytacje",
                    desc: "Umieszczamy Twoją firmę w katalogach lokalnych i branżowych",
                  },
                  {
                    icon: Star,
                    title: "Zarządzanie opiniami",
                    desc: "Zbieramy pozytywne recenzje, mądrze odpowiadamy na krytykę",
                  },
                  {
                    icon: Search,
                    title: "Lokalna zawartość",
                    desc: "Artykuły, strony z frazy lokalne, blogi dla Twojego regionu",
                  },
                  {
                    icon: TrendingUp,
                    title: "Link building",
                    desc: "Uzyskujemy linki ze stron lokalnych i branżowych",
                  },
                  {
                    icon: BarChart3,
                    title: "Schema markup",
                    desc: "Strukturalizujemy dane, aby Google lepiej Cię rozumiał",
                  },
                  {
                    icon: Building2,
                    title: "Monitoring",
                    desc: "Śledzisz pozycje, kliknięcia, rozmowy, wiadomości",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <item.icon className="w-10 h-10 text-purple-600 mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Dla kogo */}
        <FadeInView>
          <section className="py-20 bg-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Dla kogo jest pozycjonowanie lokalne?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Każda firma z fizyczną lokalizacją potrzebuje tego.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Zap, title: "Restauracje", desc: "Klienci szukają: najlepsza restauracja w mojej okolicy" },
                  { icon: Target, title: "Salony urody", desc: "Fryzjerki, kosmetyczki, manicure — szukają lokalnie" },
                  { icon: Building2, title: "Warsztaty", desc: "Warsztaty samochodowe, szewskie, usługi" },
                  { icon: Search, title: "Kancelarie", desc: "Adwokaci, notariusze, doradcy szukani lokalnie" },
                  { icon: MapPin, title: "Lekarze", desc: "Przychodni, dentysci, specjaliści — pacjenci szukają blisko" },
                  { icon: ShoppingCart, title: "Sklepy", desc: "Delikatesów, ubrań, elektroniki — konkurencja o widoczność" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-6 bg-white rounded-lg border border-gray-200"
                  >
                    <item.icon className="w-10 h-10 text-purple-600 mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Packages */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Pakiety pozycjonowania lokalnego</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Dostosowujemy zakres do potrzeb Twojej firmy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Local Basic",
                    price: "499 zł/mies",
                    features: [
                      "Optymalizacja Google Business",
                      "Zarządzanie opiniami",
                      "NAP consistency check",
                      "10 cytacji lokalnych",
                      "Monitoring pozycji",
                      "Raport miesięczny",
                    ],
                  },
                  {
                    name: "Local Standard",
                    price: "999 zł/mies",
                    featured: true,
                    features: [
                      "Wszystko z Basic",
                      "20 cytacji lokalnych",
                      "Artykuły z frazy lokalne",
                      "Zbieranie recenzji (kampania)",
                      "Schema markup",
                      "Link building (3 linki/mies)",
                      "Wsparcie telefoniczne",
                      "Raport szczegółowy",
                    ],
                  },
                  {
                    name: "Local Premium",
                    price: "1999 zł/mies",
                    features: [
                      "Wszystko ze Standard",
                      "50 cytacji lokalnych",
                      "Blog lokalny (4 artykuły/mies)",
                      "Video content",
                      "Link building (8 linków/mies)",
                      "PPC kampania lokalna",
                      "Analityka zaawansowana",
                      "Wsparcie priorytetowe",
                    ],
                  },
                ].map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`rounded-lg p-8 border-2 transition-all ${
                      pkg.featured
                        ? "border-purple-600 bg-purple-50 shadow-xl relative -mt-4"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    {pkg.featured && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Najpopularniejszy
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        pkg.featured
                          ? "bg-purple-600 hover:bg-purple-700 text-white"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                      }`}
                    >
                      Zamów audyt
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Results */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Średnie wyniki naszych klientów</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Po 3 miesiącach pozycjonowania lokalnego.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    metric: "+180%",
                    title: "Wyświetlenia w Google Maps",
                    desc: "Znacznie więcej ludzi widzi Twoją firmę na mapie",
                  },
                  {
                    metric: "+65%",
                    title: "Kliknięć ze strony do Ciebie",
                    desc: "Więcej wizyt na stronie z pozycji w Google Maps",
                  },
                  {
                    metric: "+40%",
                    title: "Rozmów telefonicznych",
                    desc: "Ludzie dzwonią do Ciebie ze zwykłego wyszukiwania",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 bg-white rounded-lg shadow-sm border border-gray-200 text-center"
                  >
                    <div className="text-5xl font-bold text-purple-600 mb-3">{item.metric}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Pytania o pozycjonowanie lokalne</h2>
              <p className="text-xl text-gray-600 text-center mb-16">Czemu warto inwestować w SEO lokalne.</p>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Jak długo trwa pozycjonowanie lokalne?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Pierwsze rezultaty w 4-6 tygodni (optymalizacja profilu). Top 3 pozycje zwykle w 3-6 miesięcy, zależnie od konkurencji w Twojej okolicy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy muszę być na Google Maps?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Tak. Google Business Profile to fundament pozycjonowania lokalnego. Bez tego jesteś niewidoczny dla lokalnych szukających.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy opinie wpływają na ranking?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Zdecydowanie. Więcej recenzji i wyższa ocena to wyższy ranking w Google Maps i lokalnych wynikach. To drugi najważniejszy czynnik po optymalizacji profilu.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Co to są cytacje lokalne?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    To wzmianki Twojej firmy w katalogach branżowych, portalach, Mapach Google itp. Sygnalizują, że jesteś rzeczywistą firmą. Ważne dla wiarygodności.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy SEO lokalne to ta sama rzecz co zwykłe SEO?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Zbliżone, ale inne. Lokalne SEO to przede wszystkim Google Business, opinie, cytacje. Zwykłe SEO to zawartość, linki, technika. Oba się uzupełniają.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy mogę zrobić to sam?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Możesz, ale to czasochłonne i łatwo zrobić błędy. Agencja wie, co robić, gdzie szukać cytacji, jak budować link. Zaoszczędzisz czas i unikniesz pułapek.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Zacznij dominować lokalnie"
          subheading="Bezpłatny audyt lokalnego SEO Twojej firmy. Wyślemy raport w 48h."
        />
      </Layout>
    </>
  );
}
