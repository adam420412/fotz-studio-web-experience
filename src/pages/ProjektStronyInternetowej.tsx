import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Globe, Palette, Code2, Monitor } from "lucide-react";
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
        title="Projekt strony internetowej | Profesjonalny design WWW | FOTZ Studio"
        description="Projekt strony internetowej od profesjonalnych designerów. Unikalne szablony, indywidualny design, mobile-first. Sprawdź portfolio i zapytaj o wycenę."
        canonical="https://www.fotz-studio.pl/uslugi/projekt-strony-internetowej"
        keywords="projekt strony internetowej, projektowanie strony www, projekt strony dla firmy, jak wygląda projekt strony, etapy tworzenia strony internetowej"
      />
      <ServiceSchema
        name="Projekt strony internetowej"
        description="Profesjonalny projekt strony internetowej z indywidualnym designem, responsywnym layoutem i optymalizacją konwersji. Mobile-first approach."
        areaServed={["PL"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

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
              Przemyślany projekt porządkuje treść i prowadzi użytkownika do kontaktu lub zakupu
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Tworzymy projektów stron internetowych, które nie tylko wyglądają pięknie, ale również generują sprzedaż.
            </p>

            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/kontakt">
                Zamów bezpłatną konsultację
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
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

        {/* Od czego zależy wycena */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Od czego zależy wycena?</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Wycenę przygotowujemy po rozmowie o zakresie projektu. Nie mamy sztywnego cennika, bo każdy projekt różni się liczbą podstron, stopniem złożoności i potrzebnymi materiałami.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Liczba podstron i unikalnych szablonów do zaprojektowania",
                "Wersje na desktop, tablet i mobile oraz prototyp interaktywny",
                "Zakres researchu: analiza konkurencji, user research",
                "Liczba rund poprawek i dokumentacja dla developerów",
              ].map((feature, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                </FadeInView>
              ))}
            </div>
            <Button asChild className="mt-8"><a href="/kontakt">
              Zapytaj o wycenę
            </a></Button>
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
                  a: "To zależy od liczby podstron, złożoności projektu i tempa przekazywania materiałów oraz uwag. Harmonogram ustalamy po rozmowie o zakresie.",
                },
                {
                  q: "W jakich formatach dostawacie pliki projektowe?",
                  a: "Pliki w Figmie (edytowalne), eksport do PNG/PDF, specyfikacja CSS, design tokens, guideline'y dla developerów.",
                },
                {
                  q: "Czy mogę prosić o zmiany po projekcie?",
                  a: "Tak. Liczbę rund poprawek ustalamy przed startem projektu, razem z zakresem prac.",
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
        />
      </Layout>
    </>
  );
}
