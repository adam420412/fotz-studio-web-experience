import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Lokalny",
    description: "Dla firm działających w jednym mieście lub regionie",
    features: [
      "Pozycjonowanie lokalne (wybrane miasto lub region)",
      "Uzgodniona lista fraz kluczowych",
      "Audyt techniczny SEO",
      "Optymalizacja on-page",
      "Profil firmy w Google",
      "Raport miesięczny"
    ],
    cta: "Omów zakres"
  },
  {
    name: "Ogólnopolski",
    description: "Dla firm sprzedających usługi w całej Polsce",
    features: [
      "Pozycjonowanie ogólnopolskie",
      "Uzgodniona lista fraz kluczowych",
      "Audyt techniczny + treści",
      "Link building w uzgodnionym zakresie",
      "Optymalizacja on-page + off-page",
      "Raport miesięczny"
    ],
    cta: "Omów zakres"
  },
  {
    name: "Treści + SEO",
    description: "Gdy strona potrzebuje nowych treści",
    features: [
      "Audyt + strategia contentowa",
      "Artykuły i podstrony w uzgodnionej liczbie",
      "Link building w uzgodnionym zakresie",
      "Optymalizacja istniejących treści",
      "Raport miesięczny"
    ],
    cta: "Omów zakres"
  },
  {
    name: "E-commerce",
    description: "Dla sklepów internetowych",
    features: [
      "Optymalizacja kategorii i kart produktów",
      "Zakres kategorii ustalany po audycie",
      "Link building w uzgodnionym zakresie",
      "Schema markup",
      "Raport miesięczny"
    ],
    cta: "Wycena sklepu"
  }
];

const factors = [
  { icon: "🏢", title: "Branża", description: "Konkurencyjność rynku wpływa na nakład pracy" },
  { icon: "🔍", title: "Stan strony", description: "Ile poprawek technicznych i treści wymaga obecna witryna" },
  { icon: "🎯", title: "Słowa kluczowe", description: "Liczba i konkurencyjność haseł" },
  { icon: "📍", title: "Region", description: "Pozycjonowanie lokalne lub ogólnopolskie" },
  { icon: "📊", title: "Historia domeny", description: "Wiek i poprzednia historia SEO" },
  { icon: "✍️", title: "Treści i linki", description: "Ile nowych tekstów i działań link buildingowych potrzeba co miesiąc" }
];

const addons = [
  { service: "Jednorazowy audyt SEO", price: "Zależy od wielkości i stanu strony" },
  { service: "Content (artykuł blogowy)", price: "Zależy od długości i tematu tekstu" },
  { service: "Link building (dodatkowe linki)", price: "Zależy od rodzaju i źródła publikacji" },
  { service: "Optymalizacja profilu firmy w Google", price: "Zależy od liczby lokalizacji" },
  { service: "Raport analityczny (GA4+GSC)", price: "Zależy od zakresu danych i częstotliwości" }
];

const faqItems = [
  {
    question: "Czy ceny zawierają VAT?",
    answer: "Wyceny podajemy w kwotach netto. VAT doliczamy zgodnie z obowiązującymi przepisami."
  },
  {
    question: "Ile kosztuje pozycjonowanie?",
    answer: "Wycenę przygotowujemy po rozmowie o zakresie i przeglądzie strony. Koszt zależy od branży i konkurencji, liczby fraz, stanu technicznego witryny, potrzebnych treści oraz link buildingu. Nie podajemy cennika pakietów z góry, bo te same nazwy pakietów kryją u różnych firm bardzo różny zakres pracy."
  },
  {
    question: "Czy mogę zmienić zakres w trakcie współpracy?",
    answer: "Tak, zakres można rozszerzyć lub zawęzić. Zasady zmian i okres rozliczeniowy ustalamy w umowie."
  },
  {
    question: "Jak długo trwa umowa?",
    answer: "Okres współpracy i warunki wypowiedzenia ustalamy indywidualnie i zapisujemy w umowie. SEO to działanie rozłożone w czasie, dlatego warto planować je na kilka miesięcy."
  },
  {
    question: "Kiedy zobaczę efekty pozycjonowania?",
    answer: "Nie da się podać jednego terminu. Tempo zmian zależy od konkurencyjności branży, stanu startowego witryny i zakresu prac. Postępy pokazujemy w miesięcznych raportach."
  },
  {
    question: "Czy gwarantujecie pozycję w Google?",
    answer: "Nie gwarantujemy konkretnej pozycji ani miejsca w wynikach wyszukiwania — o kolejności decyduje Google. Odpowiadamy za uzgodniony zakres prac i raportujemy, co zostało zrobione."
  },
  {
    question: "Czy pozycjonowanie lokalne jest tańsze?",
    answer: "Zwykle wymaga mniejszego zakresu niż ogólnopolskie, bo konkurencja jest mniejsza, ale ostateczny koszt zależy od branży i stanu strony."
  },
  {
    question: "Co to jest link building?",
    answer: "Link building to pozyskiwanie linków zewnętrznych do Twojej witryny z innych stron. Wartościowe linki pomagają budować autorytet domeny."
  },
  {
    question: "Czy oferujecie pozycjonowanie sklepów?",
    answer: "Tak. Przy sklepach internetowych zajmujemy się optymalizacją kategorii i kart produktów, schema markup dla e-commerce i linkami branżowymi."
  },
  {
    question: "Jakie wyniki mogę osiągnąć?",
    answer: "Wyniki zależą od branży, konkurencji i stanu startowego strony, dlatego nie obiecujemy z góry konkretnych liczb. Cele i sposób pomiaru ustalamy na początku współpracy."
  }
];

const CennikPozycjonowania = () => {
  return (
    <>
      <SEOHead
        title="Cennik pozycjonowania stron 2025 | Ile kosztuje SEO? | FOTZ Studio"
        description="Sprawdź, od czego zależy koszt pozycjonowania stron. Wycenę SEO przygotowujemy po rozmowie o zakresie i przeglądzie strony. Bezpłatna wycena."
        ogType="website"
        canonical="https://www.fotz-studio.pl/cennik-pozycjonowania"
        keywords="cennik pozycjonowania, cena SEO, pozycjonowanie stron, ile kosztuje pozycjonowanie, pakiety SEO"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://www.fotz-studio.pl" },
              { "@type": "ListItem", "position": 2, "name": "Cennik pozycjonowania" }
            ]
          }
        ]}
      />

      <ServiceSchema name="Pozycjonowanie SEO" description="Kompleksowe usługi pozycjonowania stron internetowych" />

      <Layout>
        {/* Breadcrumb */}
        <section className="pt-32 pb-4 bg-background">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Cennik pozycjonowania</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Cennik pozycjonowania stron 2025
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Nie publikujemy stałych cen pakietów. Wycenę przygotowujemy po rozmowie o zakresie — poniżej znajdziesz, od czego zależy koszt pozycjonowania.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053]">
                    <Link to="/kontakt">
                      Bezpłatna wycena
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#packages">Zobacz zakresy współpracy</a>
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Pricing Packages */}
        <section id="packages" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Zakresy współpracy
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Przykładowe zakresy — każdy wyceniamy indywidualnie po przeglądzie strony
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {packages.map((pkg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative p-6 rounded-2xl border transition-all bg-card border-border/50 hover:border-primary/30"
                    >

                      <div className="mb-6">
                        <h3 className="text-xl font-heading font-bold mb-2">{pkg.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-lg font-heading font-semibold">Wycena indywidualna</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-3 text-sm">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button asChild className="w-full" variant="outline">
                        <Link to="/kontakt">{pkg.cta}</Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* What Affects Price */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                  Co wpływa na cenę pozycjonowania?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {factors.map((factor, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 bg-card rounded-xl border border-border/50"
                    >
                      <div className="text-3xl mb-3">{factor.icon}</div>
                      <h3 className="font-heading font-semibold mb-2">{factor.title}</h3>
                      <p className="text-sm text-muted-foreground">{factor.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Addons Table */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Usługi dodatkowe
                </h2>

                <div className="overflow-x-auto rounded-xl border border-border/50">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50 border-b border-border/50">
                        <th className="text-left py-4 px-6 font-semibold">Usługa dodatkowa</th>
                        <th className="text-right py-4 px-6 font-semibold">Od czego zależy koszt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addons.map((addon, idx) => (
                        <tr key={idx} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                          <td className="py-4 px-6 text-muted-foreground">{addon.service}</td>
                          <td className="py-4 px-6 text-right">{addon.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  Usługi dodatkowe wyceniamy razem z głównym zakresem, w kwotach netto (plus VAT zgodnie z przepisami).
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
                  Najczęściej zadawane pytania
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-muted/30 transition-colors">
                      <AccordionTrigger className="py-4 hover:no-underline">
                        <span className="text-left font-semibold">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-background border-t border-border/50">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-heading font-bold mb-6">Powiązane usługi i artykuły</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link to="/uslugi/pozycjonowanie" className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Usługa pozycjonowania</h4>
                    <p className="text-sm text-muted-foreground">Pełna oferta SEO dla Twojej witryny</p>
                  </Link>
                  <Link to="/blog/ile-kosztuje-pozycjonowanie" className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Ile kosztuje pozycjonowanie?</h4>
                    <p className="text-sm text-muted-foreground">Kompleksowy poradnik cen SEO</p>
                  </Link>
                  <Link to="/seo/audyt" className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Audyt SEO</h4>
                    <p className="text-sm text-muted-foreground">Diagnostyka Twojej witryny</p>
                  </Link>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="py-12 md:py-16 px-4 rounded-2xl bg-gradient-to-r from-[#75143F]/20 to-[#0F3053]/20 border border-primary/20 text-center my-12"
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Gotów na wzrost organicznego ruchu?
            </h2>
            <p className="text-muted-foreground mb-6">
              Skontaktuj się z nami i otrzymaj bezpłatną wycenę dostosowaną do potrzeb Twojej witryny.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90">
                <Link to="/kontakt">
                  Bezpłatna wycena
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+48790814814">Zadzwoń do nas</a>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
};

export default CennikPozycjonowania;
