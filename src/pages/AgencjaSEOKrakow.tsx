import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, MapPin, Globe, Building2, Zap, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function AgencjaSEOKrakow() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Agencja SEO", href: "/uslugi/seo" },
    { label: "Kraków", href: "/agencja-seo-krakow" },
  ];

  return (
    <>
      <SEOHead
        title="Agencja SEO Kraków | Pozycjonowanie stron Kraków | fotz.pl"
        description="Agencja SEO Kraków — pozycjonujemy strony firm krakowskich. Wyniki Top 10 Google. Sprawdź pakiety SEO i zacznij dominować lokalnie!"
        canonical="https://fotz.pl/agencja-seo-krakow"
        keywords="agencja seo kraków, pozycjonowanie kraków, seo kraków, agencja seo kraków cena, pozycjonowanie stron kraków, seo dla firm kraków, audyt seo kraków, optymalizacja seo kraków, pozycjonowanie lokalne kraków, link building kraków, seo techniczne kraków"
      />
      <ServiceSchema
        name="Agencja SEO Kraków"
        description="Profesjonalna agencja SEO specjalizująca się w pozycjonowaniu stron dla firm z Krakowa i Małopolski. Gwarantujemy wyniki w Google."
        areaServed={["PL", "Kraków"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl mb-16"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Agencja SEO Kraków — pozycjonowanie stron dla firm z Krakowa
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Agencja SEO Kraków — pozycjonowanie stron w Google dla firm z Krakowa i Małopolski. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne w Krakowie.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Specjalizujemy się w SEO dla firm krakowskich — od audytu SEO, przez SEO techniczne (Core Web Vitals), po strategię fraz kluczowych. Wyniki w Top 10 Google, przejrzyste raporty miesięczne.
            </p>

            {/* Kraków Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <FadeInView delay={0.1}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-1">800k+</div>
                  <div className="text-sm text-gray-600">Mieszkańców</div>
                </div>
              </FadeInView>
              <FadeInView delay={0.2}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-1">2M+</div>
                  <div className="text-sm text-gray-600">Turystów rocznie</div>
                </div>
              </FadeInView>
              <FadeInView delay={0.3}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-1">Największe</div>
                  <div className="text-sm text-gray-600">Miasto Małopolski</div>
                </div>
              </FadeInView>
              <FadeInView delay={0.4}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-1">Silna</div>
                  <div className="text-sm text-gray-600">Scena startupów</div>
                </div>
              </FadeInView>
            </div>

            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Bezpłatny audyt SEO
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.section>

        {/* Dlaczego SEO w Krakowie */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dlaczego SEO w Krakowie jest wyjątkowe?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Turystyczne zapytania",
                  desc: "Wysokie szukanie: hotele, restauracje, atrakcje. Turystyka to spora część wyszukiwań.",
                },
                {
                  icon: Globe,
                  title: "Akademickie miasto",
                  desc: "Studenci = młodsi, bardziej aktywni online, wysokie zainteresowanie IT i startupami.",
                },
                {
                  icon: TrendingUp,
                  title: "Startup ecosystem",
                  desc: "Kraków to drugi hub IT w Polsce. Mocna konkurencja w branży tech = więcej potencjału.",
                },
                {
                  icon: Building2,
                  title: "Bliskość Śląska",
                  desc: "Pozycjonowanie dla Krakowa = przychody z Silesia (Katowice, Gliwice, Zabrze).",
                },
              ].map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <item.icon className="w-10 h-10 text-orange-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Co zawiera nasze SEO */}
        <FadeInView>
          <section className="mb-16 bg-orange-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Co zawiera nasze SEO dla Krakowa?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Audyt techniczny",
                  desc: "Analiza szybkości, Core Web Vitals, mobilność, crawlability, indeksacja",
                },
                {
                  icon: CheckCircle2,
                  title: "Optymalizacja on-page",
                  desc: "Meta tagi, headingi, struktura, internal linking, rich snippets",
                },
                {
                  icon: Building2,
                  title: "Google Business Profile",
                  desc: "Lokalne SEO, recenzje, zdjęcia, Posts, Q&A dla Krakowa",
                },
                {
                  icon: TrendingUp,
                  title: "Link building",
                  desc: "Strategiczne linki z krakowskich i polskich serwisów, prosper link strategy",
                },
                {
                  icon: Globe,
                  title: "Content marketing",
                  desc: "Artykuły na blog, FAQ, landing page'e zoptymalizowane dla SEO",
                },
                {
                  icon: Star,
                  title: "Monitoring i raportowanie",
                  desc: "Cotygodniowe pozycje, traffic, konwersje, ROI, sugestie optymalizacji",
                },
              ].map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-6 rounded-lg border border-orange-200">
                    <item.icon className="w-10 h-10 text-orange-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Pakiety SEO */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Pakiety SEO Kraków</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Local SEO",
                  price: "499 zł/mies",
                  features: ["Google Business Profile", "30 lokalnych linków/mies", "Monitoring 20 słów kluczy", "Raport miesięczny"],
                  highlight: false,
                },
                {
                  name: "Standard SEO",
                  price: "999 zł/mies",
                  features: ["Wszystko z Local", "Content marketing (2 artykuły/mies)", "Audyt & optymalizacja on-page", "Link building (60 linków/mies)", "Raport szczegółowy"],
                  highlight: true,
                },
                {
                  name: "Premium SEO",
                  price: "1999 zł/mies",
                  features: ["Kompleksowy SEO", "Content hub (4 artykuły/mies)", "Technical SEO", "Link building agresywny", "Strategia kryzysowa", "Konsultacje tygodniowe"],
                  highlight: false,
                },
              ].map((pkg, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div
                    className={`p-8 rounded-lg border-2 transition ${
                      pkg.highlight ? "border-orange-600 bg-orange-50 shadow-lg" : "border-gray-200 bg-white"
                    }`}
                  >
                    {pkg.highlight && (
                      <div className="mb-4 inline-block px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-semibold">
                        Najpopularniejszy
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-6">{pkg.price}</div>
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
                      Wybierz pakiet
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Branże w Krakowie */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Branże, w których specjalizujemy się w Krakowie</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Turystyka i hotele",
                "Gastronomia i restauracje",
                "Nieruchomości",
                "IT startupy",
                "Usługi prawnicze",
                "Edukacja",
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

        {/* FAQ */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pytania o SEO Kraków</h2>
            <Accordion type="single" collapsible className="max-w-3xl">
              {[
                {
                  q: "Ile kosztuje SEO w Krakowie?",
                  a: "Od 499 zł/mies za Local SEO, do 1999+ zł/mies za Premium. Cena zależy od konkurencyjności branży i ambicji (1-5 pozycji czy 100+).",
                },
                {
                  q: "Ile czasu trwa uzyskanie rezultatów?",
                  a: "SEO to długoterminowy proces. Pierwsze wyniki za 4-6 tygodni, znaczące wyniki za 3-6 miesięcy, dominacja za 6-12 miesięcy.",
                },
                {
                  q: "Czy dacie gwarancję pozycji w Google?",
                  a: "Nie. Żadna agencja nie może gwarantować pozycji (Google tego nie pozwala). Gwarantujemy wysiłek, transparentność i wymierne rezultaty.",
                },
                {
                  q: "Czy powinno mnie zajmować SEO lokalne czy krajowe?",
                  a: "Zależy od branży. Turystyka/gastronomia = lokalne (Kraków). IT/e-commerce = krajowe. Hydbrydowe dla obu.",
                },
                {
                  q: "Jakie słowa kluczowe są najważniejsze dla Krakowa?",
                  a: "Zależy od branży. Turystyka: hotel Kraków, restauracja Kraków. IT: agencja IT Kraków. Robimy audyt słów kluczy dla każdego klienta.",
                },
                {
                  q: "Co jeśli moja strona jest już w Google?",
                  a: "Robimy audyt tekucej strategii i optymalizujemy to co jest. 80% stron ma problemy on-page, które można naprawić.",
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
        />
      </Layout>
    </>
  );
}
