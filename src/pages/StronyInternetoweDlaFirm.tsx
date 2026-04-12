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
  { name: "Strony internetowe dla firm", url: "/uslugi/strony-internetowe-dla-firm" },
];

export default function StronyInternetoweDlaFirm() {
  return (
    <>
      <SEOHead
        title="Strony internetowe dla firm | Profesjonalne strony WWW | fotz.pl"
        description="Profesjonalne strony internetowe dla firm każdej branży. Responsywne, szybkie, zoptymalizowane. Od 499 zł netto. Sprawdź ofertę fotz.pl!"
        canonical="https://fotz.pl/uslugi/strony-internetowe-dla-firm"
        keywords="strony internetowe dla firm, tworzenie stron dla firm, strona firmowa, profesjonalna strona internetowa, strona www dla firmy"
      />
      <ServiceSchema
        name="Strony internetowe dla firm"
        description="Profesjonalne strony internetowe dla firm każdej branży"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <Layout>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Strony internetowe dla firm — zbuduj swoją obecność w internecie
              </h1>
              <p className="text-2xl text-green-700 mb-8 font-semibold max-w-3xl mx-auto">
                Twoja firma bez strony internetowej to jak sklep bez szyldu. 93% decyzji zakupowych zaczyna się online.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg">
                Bezpłatna konsultacja
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Dla kogo */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Dla kogo tworzymy strony?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Każda firma zasługuje na profesjonalną obecność online.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Zap, title: "Małe firmy", desc: "Lokalni hydraulicy, elektrycy, handlowcy — budujemy Wam siłę Internetu" },
                  { icon: Building2, title: "Średnie firmy", desc: "Firmy z zespołami potrzebujące profesjonalnych narzędzi do sprzedaży" },
                  { icon: Target, title: "Usługi lokalne", desc: "Salony, kancelarie, warsztaty — dominujcie w lokalnych wynikach" },
                  { icon: ShoppingCart, title: "E-commerce", desc: "Sprzedajcie produkty online 24/7 bez limitu rynku" },
                  { icon: TrendingUp, title: "Startupy", desc: "Nowe pomysły wymagają silnego online presence — zbudujemy Wam to" },
                  { icon: Globe, title: "Korporacje", desc: "Duże firmy potrzebujące zaawansowanych systemów — jesteśmy gotowi" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <item.icon className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Co zawiera strona dla firmy */}
        <FadeInView>
          <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Co zawiera profesjonalna strona dla firmy?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Wszystko, co jest Ci potrzebne do sprzedaży i komunikacji.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  "Responsywny design (działa na wszystkich urządzeniach)",
                  "System zarządzania treścią (CMS) — edytujesz sam bez kodowania",
                  "Optymalizacja SEO — pozycjonowanie w Google",
                  "Analityka i tracking — wiesz, co się dzieje na Twojej stronie",
                  "Bezpieczeństwo — certyfikat SSL, zapora, backup",
                  "Formularz kontaktowy — zbierasz leady automatycznie",
                  "Mapa firmy — pokazujesz lokalizację",
                  "Social media links — łączymy wszystkie kanały",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Branże */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Tworzymy strony dla każdej branży</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Doświadczenie w wielu sektorach to nasza przewaga.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Zap, title: "Usługi", industries: "Hydraulika, elektryka, instalacje, konsultacje" },
                  { icon: Building2, title: "Budownictwo", industries: "Deweloperzy, wykonawcy, architekci" },
                  { icon: MapPin, title: "Medycyna", industries: "Przychodni, lekarze, kliniki" },
                  { icon: Target, title: "Prawo", industries: "Kancelarie, doradcy prawni, notariusze" },
                  { icon: Globe, title: "Gastronomia", industries: "Restauracje, kawiarnie, cukiernie" },
                  { icon: Search, title: "Edukacja", industries: "Szkoły, kursy, korepetycje online" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-6 border border-gray-200 rounded-lg"
                  >
                    <item.icon className="w-10 h-10 text-green-600 mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.industries}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Case Studies */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Przykładowe realizacje</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Sprawdź, jak pomogliśmy innym firmom.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Najlepsze Okna — firma budowlana",
                    result: "+320% leadów w 6 miesięcy",
                    challenge: "Konkurencja lokalna, słaba pozycja",
                  },
                  {
                    name: "Dr. Kowalski — klinika stomatologiczna",
                    result: "+150 pacjentów rocznie",
                    challenge: "Pacjenci szukają w Google, strona starej konkurencji była lepsza",
                  },
                  {
                    name: "Artisan Cafe — kawiarnia",
                    result: "+40% zamówień online",
                    challenge: "Konieczność zmiany pokolenia klientów",
                  },
                ].map((study, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{study.name}</h3>
                    <p className="text-green-700 font-bold text-lg mb-3">{study.result}</p>
                    <p className="text-gray-600 text-sm">Wyzwanie: {study.challenge}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Pakiety</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Każdy pakiet zawiera hosting, SSL i wsparcie.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Wizytówka",
                    price: "499 zł",
                    features: [
                      "Do 5 podstron",
                      "Responsywny design",
                      "Formularz kontaktowy",
                      "Google Analytics",
                      "Hosting przez rok",
                      "Email support",
                    ],
                  },
                  {
                    name: "Strona firmowa",
                    price: "1499-3999 zł",
                    featured: true,
                    features: [
                      "Do 20 podstron",
                      "Design dostosowany",
                      "Blog z SEO",
                      "CMS do edycji",
                      "Analytics i tracking",
                      "Optymalizacja SEO",
                      "Integracja social media",
                      "Wsparcie przez 3 miesiące",
                    ],
                  },
                  {
                    name: "Sklep e-commerce",
                    price: "2999-9999 zł",
                    features: [
                      "Pełny katalog produktów",
                      "Integracja płatności",
                      "Zarządzanie magazynem",
                      "Integracja kurierów",
                      "Maile transakcyjne",
                      "Panel administracyjny",
                      "Wsparcie przez 6 miesięcy",
                      "Szkolenie obsługi",
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
                        ? "border-green-600 bg-green-50 shadow-xl relative -mt-4"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    {pkg.featured && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Najpopularniejszy
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-green-600 mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        pkg.featured
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                      }`}
                    >
                      Wybierz pakiet
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Często zadawane pytania</h2>
              <p className="text-xl text-gray-600 text-center mb-16">Odpowiadamy na Twoje wątpliwości.</p>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy strona będzie zoptymalizowana pod SEO?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Tak, zawsze. Każda strona od nas zawiera optymalizację na poziomie technicznym (szybkość, responsywność, kodu) i zawartości (słowa kluczowe, meta-tagi, struktura).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy będę mógł sam edytować zawartość?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Tak. Dostarczamy intuicyjny CMS, w którym bez problemu zmieniasz teksty, zdjęcia, artykuły. Proste i bezpieczne.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Ile czasu trwa budowa strony dla firmy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Wizytówkę w 2 tygodnie, stronę firmową w 4-6 tygodni. Wszystko zależy od dostępności materiałów i szybkości decyzji z Twojej strony.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Co się stanie po zakończeniu projektu?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Dostarczamy pełny dostęp do strony, domeny, serwera. Możesz pracować z nami dalej lub przejść do innej agencji. To Twoja strona.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy strona będzie bezpieczna?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Tak. Certyfikat SSL, zapora, backup, monitorowanie — wszystko w pakiecie. Twoja strona i dane są chronione.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy strona będzie działać na telefonach?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Wszystkie nasze strony są w pełni responsywne. Doskonale wyglądają na każdym urządzeniu — telefon, tablet, komputer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Zamów stronę dla swojej firmy"
          subheading="Bezpłatna konsultacja. Wycena indywidualna dostosowana do Twoich potrzeb."
        />
      </Layout>
    </>
  );
}
