import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Globe, Palette, Layers, Code2, Monitor, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function ProjektStronyInternetowej() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Projekt strony internetowej", href: "/uslugi/projekt-strony-internetowej" },
  ];

  return (
    <>
      <SEOHead
        title="Projekt strony internetowej | Profesjonalny design WWW | fotz.pl"
        description="Projekt strony internetowej od profesjonalnych designerów. Unikalne szablony, indywidualny design, mobile-first. Sprawdź portfolio i cennik fotz.pl!"
        canonical="https://fotz.pl/uslugi/projekt-strony-internetowej"
        keywords="projekt strony internetowej, projektowanie stron, webdesign, ux design, ui design, projekt graficzny strony"
      />
      <ServiceSchema
        name="Projekt strony internetowej"
        description="Profesjonalny projekt strony internetowej z indywidualnym designem, responsywnym layoutem i optymalizacją konwersji. Mobile-first approach."
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-16"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Projekt strony internetowej — indywidualny design dopasowany do Twojej firmy
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Dobry projekt strony = 40% wyższy współczynnik konwersji
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Tworzymy projektów stron internetowych, które nie tylko wyglądają pięknie, ale również generują sprzedaż.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <FadeInView delay={0.1}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-1">400+</div>
                  <div className="text-sm text-gray-600">Zrealizowanych projektów</div>
                </div>
              </FadeInView>
              <FadeInView delay={0.2}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-1">4.9/5</div>
                  <div className="text-sm text-gray-600">Średnia ocena klientów</div>
                </div>
              </FadeInView>
              <FadeInView delay={0.3}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-1">14 dni</div>
                  <div className="text-sm text-gray-600">Średni czas projektu</div>
                </div>
              </FadeInView>
              <FadeInView delay={0.4}>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Mobile-first każdy projekt</div>
                </div>
              </FadeInView>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Zamów bezpłatną konsultację
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.section>

        {/* Co zawiera projekt strony? */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Co zawiera projekt strony?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Palette, title: "Makiety UX/UI w Figma", desc: "Interaktywne projekty we Figmie, gotowe do feedback'u" },
                { icon: Globe, title: "Identyfikacja wizualna", desc: "Logo, kolory, typografia dostosowane do brand'u" },
                { icon: Monitor, title: "Responsywny design", desc: "Pięknie wygląda na desktop, tablet i mobile" },
                { icon: Zap, title: "Optymalizacja pod SEO", desc: "Struktura HTML gotowa do pozycjonowania" },
                { icon: TrendingUp, title: "Testy A/B", desc: "Warianty layout'u, CTA i konwersji" },
                { icon: Code2, title: "Prototyp interaktywny", desc: "Klikalne prototype dla testów UX" },
              ].map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                    <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Proces projektowania */}
        <FadeInView>
          <section className="mb-16 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Proces projektowania</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Brief", desc: "Poznajemy Twoją firmę, konkurencję i cele biznesowe" },
                { step: 2, title: "Research", desc: "Analizujemy użytkowników i benchmarkujemy konkurencję" },
                { step: 3, title: "Wireframes", desc: "Tworzymy szkice struktury i user flow'u" },
                { step: 4, title: "Design", desc: "Projektujemy interfejs w Figmie z wszystkimi komponentami" },
                { step: 5, title: "Handoff", desc: "Przekazujemy pliki designu i specyfikację dla developerów" },
              ].map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold">
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

        {/* Co wyróżnia dobry projekt? */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Co wyróżnia dobry projekt?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "UX/Użyteczność",
                  desc: "Intuicyjny interfejs, prosty user flow, wszystko jest tam gdzie powinno być",
                },
                {
                  title: "Estetyka",
                  desc: "Nowoczesny design, spójny visual identity, przyciąga wzrok i buduje zaufanie",
                },
                {
                  title: "Performance",
                  desc: "Szybkie ładowanie, optimizacja obrazów, poprawna hierarchia ważności",
                },
                {
                  title: "Optymalizacja konwersji",
                  desc: "Strategiczne CTA, redukcja tarcia, A/B testing, wzrost sprzedaży",
                },
              ].map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Rodzaje projektów */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Rodzaje projektów, które robimy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Landing page projekt",
                  desc: "Jednostronicowa strona ze skupionym celem konwersji. Idealna do kampanii",
                },
                {
                  title: "Strona firmowa projekt",
                  desc: "Wielostronicowa strona z portfolio, o nas, usługami, blog'iem",
                },
                {
                  title: "Sklep online projekt",
                  desc: "Kompleksowy design dla e-commerce z katalogiem, koszykiem, checkout'em",
                },
                {
                  title: "Redesign istniejącej strony",
                  desc: "Modernizacja starej strony z zachowaniem struktury i SEO",
                },
              ].map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Pakiety projektowe */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Pakiety projektowe</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Design Basic",
                  price: "999 zł",
                  features: ["Makiety UX/UI", "Do 5 stron", "Mobile design", "Konsultacja 2h"],
                  highlight: false,
                },
                {
                  name: "Design Pro",
                  price: "1999 zł",
                  features: ["Makiety UX/UI", "Nieograniczone strony", "Mobile + tablet", "Prototyp interaktywny", "Konsultacja 4h", "Poprawki 2 rundy"],
                  highlight: true,
                },
                {
                  name: "Design Enterprise",
                  price: "3999+ zł",
                  features: ["Kompleksowy design", "Analiza konkurencji", "User research", "A/B testy", "Dokumentacja", "Wsparcie post-launch"],
                  highlight: false,
                },
              ].map((pkg, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div
                    className={`p-8 rounded-lg border-2 transition ${
                      pkg.highlight ? "border-blue-600 bg-blue-50 shadow-lg" : "border-gray-200 bg-white"
                    }`}
                  >
                    {pkg.highlight && (
                      <div className="mb-4 inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                        Najpopularniejszy
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-6">{pkg.price}</div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
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

        {/* FAQ */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Często zadawane pytania</h2>
            <Accordion type="single" collapsible className="max-w-3xl">
              {[
                {
                  q: "Co dokładnie zawiera projekt strony internetowej?",
                  a: "Projekt zawiera makiety w Figmie, specyfikację designu, responsywny layout na desktop/tablet/mobile, testy A/B wariantów, oraz dokumentację dla developerów.",
                },
                {
                  q: "Ile czasu trwa tworzenie projektu?",
                  a: "Średnio 2-3 tygodnie w zależności od złożoności. Design Basic (~10 dni), Design Pro (~14 dni), Design Enterprise (~21 dni).",
                },
                {
                  q: "W jakich formatach dostawacie pliki projektowe?",
                  a: "Pliki w Figmie (edytowalne), eksport do PNG/PDF, specyfikacja CSS, design tokens, guideline'y dla developerów.",
                },
                {
                  q: "Czy mogę prosić o zmiany po projekcie?",
                  a: "Tak, w pakiecie Design Pro i Enterprise są wliczone rundy poprawek. Design Basic ma limitowaną ilość zmian.",
                },
                {
                  q: "Czy mogę sam wdrożyć projekt czy potrzebuję wdrożenia?",
                  a: "Możesz wdrożyć sam (masz kompletne pliki) lub zamówić wdrożenie u nas. Najlepiej połączyć projekt z wdrożeniem.",
                },
                {
                  q: "Jaka jest różnica między projektem a wdrożeniem?",
                  a: "Projekt to designerskie makiety i specyfikacja. Wdrożenie to kodowanie HTML/CSS/JS na podstawie projektu. Jedno bez drugiego to niekompletne rozwiązanie.",
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
          heading="Zamów projekt strony"
          subheading="Bezpłatna konsultacja z designerem. Pokażemy Ci możliwości i cennik."
        />
      </Layout>
    </>
  );
}
