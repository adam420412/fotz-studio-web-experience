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
  { name: "Tworzenie stron WWW", url: "/uslugi/tworzenie-stron-www" },
];

export default function TworzenieStronWWW() {
  return (
    <>
      <SEOHead
        title="Tworzenie stron WWW | Profesjonalne strony internetowe | fotz.pl"
        description="Tworzymy profesjonalne strony WWW dla firm w całej Polsce. Szybkie, responsywne, zoptymalizowane pod SEO. Od 499 zł netto. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/tworzenie-stron-www"
        keywords="tworzenie stron www, tworzenie stron internetowych, strony www dla firm, tworzenie witryn internetowych, strona www cena"
      />
      <ServiceSchema
        name="Tworzenie stron WWW"
        description="Profesjonalne strony internetowe dla firm"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <Layout>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Tworzenie stron WWW — profesjonalne strony internetowe dla Twojej firmy
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Strona internetowa to nie luksus, to inwestycja. Zbudujemy dla Ciebie stronę, która przyciąga klientów, buduje zaufanie i generuje przychody.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
                Bezpłatna wycena
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { number: "500+", label: "Zrealizowanych projektów" },
                { number: "10+", label: "Lat doświadczenia" },
                { number: "97%", label: "Klientów nas poleca" },
                { number: "Od 499 zł", label: "Cena startowa" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Co tworzymy */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Co tworzymy?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Każdy projekt jest inny. Dostosowujemy rozwiązania do potrzeb Twojej firmy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Globe, title: "Strona wizytówka", desc: "Minimalistyczna, szybka, idealna dla freelancerów" },
                  { icon: Building2, title: "Strona firmowa", desc: "Profil Twojej firmy z informacjami, portfolio, kontaktem" },
                  { icon: ShoppingCart, title: "Sklep e-commerce", desc: "Pełnowartościowa platforma sprzedażowa online" },
                  { icon: Target, title: "Landing page", desc: "Skoncentrowana na konwersji strona promocyjna" },
                  { icon: Search, title: "Blog firmowy", desc: "Strona z artykułami do budowania autorytetu" },
                  { icon: BarChart3, title: "Portal branżowy", desc: "Kompleksowa platforma dla Twojej branży" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why it's an investment */}
        <FadeInView>
          <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Dlaczego strona WWW to inwestycja, nie koszt?
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Strona internetowa pracuje dla Ciebie 24/7, zwiększając prestiż i przychody.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Obecność 24/7", desc: "Twoja strona pracuje, nawet gdy Ty śpisz. Klienci mogą Cię znaleźć o każdej porze." },
                  { title: "Ranking w Google", desc: "Profesjonalna strona, dobrze zoptymalizowana, pojawia się w wynikach wyszukiwania." },
                  { title: "Wiarygodność", desc: "92% klientów ufa firmom z profesjonalną stroną internetową." },
                  { title: "Generowanie leadów", desc: "Formy kontaktowe, telefony, e-maile — automatycznie zbierasz pytania od potencjalnych klientów." },
                  { title: "Analityka", desc: "Wiesz dokładnie, skąd przychodzą klienci, co ich interesuje, ile czasu spędzają na stronie." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 p-6 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
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

        {/* Technologies */}
        <FadeInView>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Technologie, które stosujemy</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Wybieramy najlepsze narzędzia dla Twojego projektu.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: "React", pros: "Szybkie, nowoczesne, idealne dla aplikacji", cons: "Wyższa cena" },
                  { name: "WordPress", pros: "Łatwe do zarządzania, SEO-friendly, niedrogie", cons: "Mniej elastyczne dla złożonych projektów" },
                  { name: "Shopify", pros: "Perfekcyjne dla e-commerce, skalowalne", cons: "Koszty subskrypcji" },
                  { name: "Webflow", pros: "Wizualny edytor, responsywne, profesjonalne", cons: "Wyższa cena" },
                  { name: "Next.js", pros: "Najnowocześniejsza technologia, SEO+wydajność", cons: "Droższe utrzymanie" },
                  { name: "Custom", pros: "Idealna indywidualizacja", cons: "Najdłuższy rozwój" },
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-6 border border-gray-200 rounded-lg"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-green-700">✓ {tech.pros}</p>
                      <p className="text-amber-700">⚠ {tech.cons}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Process */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Nasz proces tworzenia strony</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Od pomysłu do uruchomienia — 5 sprawdzonych kroków.
              </p>

              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {[
                    { num: "1", title: "Konsultacja", desc: "Poznajemy Twoje cele, budżet i wizję" },
                    { num: "2", title: "Projekt", desc: "Tworzymy design i strukturę strony" },
                    { num: "3", title: "Kodowanie", desc: "Implementujemy stronę w technologii" },
                    { num: "4", title: "Testowanie", desc: "Sprawdzamy wszystko na każdym urządzeniu" },
                    { num: "5", title: "Launch", desc: "Publikujemy stronę i monitorujemy" },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        {step.num}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
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
                Każdy pakiet zawiera hosting, certyfikat SSL i support.
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
                        ? "border-blue-600 bg-blue-50 shadow-xl relative -mt-4"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    {pkg.featured && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Najpopularniejszy
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-6">{pkg.price}</div>
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
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
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

        {/* Why fotz.pl */}
        <FadeInView>
          <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Dlaczego fotz.pl?</h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Nie jesteśmy największą agencją, ale jesteśmy najlepszą dla Ciebie.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {[
                  { icon: Zap, title: "Szybko", desc: "Realizujemy projekty w 4-8 tygodni" },
                  { icon: TrendingUp, title: "Efektywnie", desc: "Każdy projekt optymalizujemy pod SEO" },
                  { icon: Star, title: "Zawsze dostępni", desc: "Pytania, zmiany, wsparcie — szybka reakcja" },
                  { icon: Globe, title: "Nowoczesnie", desc: "Najnowsze technologie, best practices" },
                  { icon: Target, title: "Po Twojej stronie", desc: "Twój sukces to nasz sukces" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Często zadawane pytania</h2>
              <p className="text-xl text-gray-600 text-center mb-16">Odpowiadamy na Twoje wątpliwości.</p>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Ile kosztuje strona internetowa?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Cena zależy od zakresu. Wizytówka zaczynamy od 499 zł, strona firmowa od 1499 zł, a sklep od 2999 zł. Zawsze robimy bezpłatną wycenę po poznaniu Twoich wymagań.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Ile czasu trwa budowa strony?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Wizytówkę robimy w 2 tygodnie, stronę firmową w 4-6 tygodni, a sklep w 6-8 tygodni. Wszystko zależy od zakresu i dostępności do materiałów od Ciebie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy strona będzie zoptymalizowana pod SEO?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Tak. Każda strona od nas zawiera optymalizację SEO. Czytelny kod, szybkość ładowania, responsywność, meta-tagi — wszystko, co Google lubi.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy będę mógł edytować stronę sam?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Tak. Dostarczamy CMS (panel administracyjny), w którym możesz łatwo edytować tekst, zdjęcia, artykuły bez wiedzy technicznej. Oczywiście jeśli chcesz.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Co się stanie po zakończeniu projektu?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Dostarczamy Ci pełny dostęp do strony, serwera i danych. Możesz pracować z nami dalej (wsparcie, aktualizacje) albo przejść do innej agencji. To Twoja strona.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy hosting i domena są w cenie?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Hosting przez pierwszy rok jest w cenie. Domenę możesz kupić od nas lub przenieść swoją. Po roku hosting kosztuje ok. 120 zł rocznie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy strona będzie działać na urządzeniach mobilnych?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Wszystkie nasze strony są responsywne — doskonale wyglądają na telefonach, tabletach i komputerach. To standard, nie opcja.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-gray-900">
                    Czy będę musiał opłacać aktualizacje?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Aktualizacje bezpieczeństwa i utrzymanie to dodatkowe koszty. Jednak są niewielkie (ok. 200-500 zł rocznie, w zależności od technologii i złożoności).
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Zamów stronę WWW"
          subheading="Bezpłatna wycena w 24 godziny. Realizujemy projekty w całej Polsce."
        />
      </Layout>
    </>
  );
}
