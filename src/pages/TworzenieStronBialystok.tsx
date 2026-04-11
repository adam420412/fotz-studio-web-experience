import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, MapPin, Globe, Code2, Monitor } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function TworzenieStronBialystok() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Tworzenie stron", href: "/uslugi/tworzenie-stron-internetowych" },
    { label: "Białystok", href: "/uslugi/tworzenie-stron-internetowych/bialystok" },
  ];

  const nearbyCity = [
    "Suwałki",
    "Łomża",
    "Augustów",
    "Grajewo",
    "Sokółka",
    "Bielsk Podlaski",
    "Hajnówka",
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych Białystok | Profesjonalne strony WWW | fotz.pl"
        description="Tworzenie stron internetowych Białystok — profesjonalne strony dla firm z Podlasia. Od 499 zł netto. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/tworzenie-stron-internetowych/bialystok"
      />
      <ServiceSchema
        name="Tworzenie stron internetowych Białystok"
        description="Profesjonalne tworzenie stron internetowych dla firm z Białystoku i Podlasia. Projekty, wdrażanie, SEO, wsparcie."
        areaServed={["PL", "Białystok", "Podlasie"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl mb-16"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tworzenie stron internetowych Białystok — agencja z wynikami
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Profesjonalne strony internetowe dla firm z Podlasia
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Od 499 zł netto za stronę. Kompleksowe wsparcie: design, SEO, hosting, wsparcie techniczne.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <FadeInView delay={0.1}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-1">290k+</div>
                  <div className="text-sm text-gray-600">Mieszkańców</div>
                </div>
              </FadeInView>
              <FadeInView delay={0.2}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-1">Centrum</div>
                  <div className="text-sm text-gray-600">Podlasia</div>
                </div>
              </FadeInView>
              <FadeInView delay={0.3}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-1">Wschodnia</div>
                  <div className="text-sm text-gray-600">Polska</div>
                </div>
              </FadeInView>
              <FadeInView delay={0.4}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-1">Blisk</div>
                  <div className="text-sm text-gray-600">LT/BY rynki</div>
                </div>
              </FadeInView>
            </div>

            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Bezpłatna wycena
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.section>

        {/* Co zawiera strona */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Co zawiera profesjonalna strona internetowa?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Monitor, title: "Responsywny design", desc: "Pięknie wygląda na desktop, tablet i mobile" },
                { icon: Code2, title: "Szybki kod", desc: "Optimizowany HTML/CSS/JS, szybkie ładowanie" },
                { icon: TrendingUp, title: "SEO optymalizacja", desc: "Budowana pod wyszukiwarki od początku" },
                { icon: Globe, title: "CMS integracja", desc: "Łatwa edycja treści bez kodowania" },
                { icon: MapPin, title: "Mapa i kontakt", desc: "Kontaktówka, lokalizacja, formularze" },
                { icon: CheckCircle2, title: "Wsparcie post-launch", desc: "Wdrożenie, testy, monitoring, optymalizacja" },
              ].map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                    <item.icon className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Proces */}
        <FadeInView>
          <section className="mb-16 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Nasz proces tworzenia stron</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Konsultacja", desc: "Poznajemy Twoją firmę, cele, konkurencję i budżet" },
                { step: 2, title: "Projekt", desc: "Designerskie makiety (Figma) do zatwierdzenia" },
                { step: 3, title: "Wdrożenie", desc: "Kodowanie, testowanie, integracja narzędzi" },
                { step: 4, title: "SEO", desc: "Optymalizacja treści, meta tagi, struktura" },
                { step: 5, title: "Launch", desc: "Wdrożenie na hosting, monitoring, wsparcie" },
              ].map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-600 text-white font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Pakiety */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Pakiety tworzenia stron</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Starter",
                  price: "499 zł",
                  features: ["Do 5 podstron", "Responsywny design", "CMS WordPress", "Basic SEO", "SSL certyfikat", "Hosting 1 rok"],
                  highlight: false,
                },
                {
                  name: "Professional",
                  price: "999 zł",
                  features: ["Do 10 podstron", "Custom design", "CMS + e-mail", "SEO optymalizacja", "Integracja narzędzi", "Blog", "2 lat hosting"],
                  highlight: true,
                },
                {
                  name: "Enterprise",
                  price: "1999+ zł",
                  features: ["Nieograniczone podstrony", "Custom CMS", "E-commerce", "Zaawansowane SEO", "Integracja API", "Wsparcie 12 mies", "Dedykowany account manager"],
                  highlight: false,
                },
              ].map((pkg, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div
                    className={`p-8 rounded-lg border-2 transition ${
                      pkg.highlight ? "border-green-600 bg-green-50 shadow-lg" : "border-gray-200 bg-white"
                    }`}
                  >
                    {pkg.highlight && (
                      <div className="mb-4 inline-block px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold">
                        Najpopularniejszy
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-green-600 mb-6">{pkg.price}</div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={pkg.highlight ? "default" : "outline"}
                      className="w-full mt-8"
                    >
                      Dowiedz się więcej
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Branże */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Branże, które obsługujemy w Białymstoku</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Handel artykułami spożywczymi i detaliczny",
                "Usługi lokalne (fryzjernie, salony, itp)",
                "Turystyka (Puszcza Białowieska, hotele)",
                "Produkcja drzewna",
                "IT i tech startupy",
                "Usługi medyczne (gabinety, kliniki)",
              ].map((industry, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{industry}</span>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Nearby Cities */}
        <FadeInView>
          <section className="mb-16 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Obsługujemy też miasteczka w okolicy</h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCity.map((city, idx) => (
                <FadeInView key={idx} delay={idx * 0.05}>
                  <Link
                    to={`/uslugi/tworzenie-stron-internetowych/${city.toLowerCase()}`}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition text-sm"
                  >
                    {city}
                  </Link>
                </FadeInView>
              ))}
            </div>
            <p className="mt-6 text-gray-600">
              Jeśli Twoje miasto nie ma własnej strony, skontaktuj się z nami — możemy stworzyć dedykowaną landing page dla Twojego regionu.
            </p>
          </section>
        </FadeInView>

        {/* Internal links to other cities */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Inne miasta, w których tworzymy strony</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { city: "Warszawa", href: "/uslugi/tworzenie-stron-internetowych/warszawa" },
                { city: "Lublin", href: "/uslugi/tworzenie-stron-internetowych/lublin" },
                { city: "Rzeszów", href: "/uslugi/tworzenie-stron-internetowych/rzeszow" },
              ].map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <Link
                    to={item.href}
                    className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-gray-900 font-medium hover:bg-blue-100 transition"
                  >
                    Tworzenie stron w {item.city}
                  </Link>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pytania o tworzenie stron w Białymstoku</h2>
            <Accordion type="single" collapsible className="max-w-3xl">
              {[
                {
                  q: "Ile kosztuje strona internetowa?",
                  a: "Od 499 zł za stronę wizytówkę, do 1999+ zł za stronę z e-commerce. Cena zależy od złożoności, liczbą podstron, funkcjonalności.",
                },
                {
                  q: "Ile czasu trwa wdrożenie?",
                  a: "Standardowa strona: 2-3 tygodnie. Strona z e-commerce: 4-6 tygodni. Czasami szybciej w zależności od pilności.",
                },
                {
                  q: "Czy dostanę hosting i domenę?",
                  a: "Tak! W każdym pakiecie wliczony jest hosting przez 1-2 lata i pomoc w rejestracji domeny. Po okresie możesz przedłużyć.",
                },
                {
                  q: "Czy mogę edytować zawartość strony sam?",
                  a: "Tak, jeśli korzystasz z WordPress'a. Pokażemy Ci jak dodawać artykuły, zdjęcia, zmieniać tekst bez znania kodowania.",
                },
                {
                  q: "Czy będzie pozycjonowanie (SEO)?",
                  a: "SEO jest wbudowane w każdą stronę. Podstawowa optymalizacja + artykuły na blogu helpa. SEO zaawansowane to osobna usługa.",
                },
                {
                  q: "Co jeśli chcę zmienić stronę po wdrożeniu?",
                  a: "Możesz edytować sam (CMS) lub porosić nas o zmiany. Oferujemy wsparcie techniczne (od 99 zł/mies).",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </FadeInView>

        {/* Contact Section */}
        <ContactSection
          heading="Zamów stronę internetową w Białymstoku"
          subheading="Bezpłatna konsultacja dla firm z Podlasia i wschodniej Polski."
        />
      </Layout>
    </>
  );
}
