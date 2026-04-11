import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowRight, Check, ChevronRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Lokalny",
    price: 999,
    popular: false,
    description: "Idealna dla firm lokalnych",
    features: [
      "Pozycjonowanie lokalne (1 miasto)",
      "Do 10 słów kluczowych",
      "Audyt techniczny SEO",
      "Optymalizacja on-page",
      "Raport miesięczny",
      "Wsparcie email"
    ],
    cta: "Rozpocznij"
  },
  {
    name: "Standard",
    price: 1999,
    popular: true,
    description: "Najpopularniejszy pakiet",
    features: [
      "Pozycjonowanie ogólnopolskie",
      "Do 30 słów kluczowych",
      "Audyt techniczny + content",
      "Link building (5 linków/mies.)",
      "Optymalizacja on-page + off-page",
      "Raport + opieka dedykowanego specjalisty"
    ],
    cta: "Zacznij teraz"
  },
  {
    name: "Pro",
    price: 3499,
    popular: false,
    description: "Dla ambitnych firm",
    features: [
      "Pozycjonowanie ogólnopolskie",
      "Do 60 słów kluczowych",
      "Audyt + strategia contentowa",
      "Link building (15 linków/mies.)",
      "Content marketing (2 artykuły/mies.)",
      "Dedykowany account manager"
    ],
    cta: "Skontaktuj się"
  },
  {
    name: "E-commerce",
    price: 2499,
    popular: false,
    description: "Dla sklepów internetowych",
    features: [
      "Sklepy internetowe",
      "Do 100 kategorii/produktów",
      "Optymalizacja kart produktów",
      "Link building (10 linków/mies.)",
      "Schema markup",
      "Raport + priorytetowe wsparcie"
    ],
    cta: "Wycena sklepu"
  }
];

const factors = [
  { icon: "🏢", title: "Branża", description: "Konkurencyjność rynku wpływa na koszt" },
  { icon: "🔍", title: "Stan strony", description: "SEO-friendliness obecnej witryny" },
  { icon: "🎯", title: "Słowa kluczowe", description: "Liczba i konkurencyjność haseł" },
  { icon: "📍", title: "Region", description: "Pozycjonowanie lokalne lub ogólnopolskie" },
  { icon: "📊", title: "Historia domeny", description: "Wiek i poprzednia historia SEO"  }
];

const addons = [
  { service: "Jednorazowy audyt SEO", price: "400–800 zł" },
  { service: "Content (artykuł blogowy)", price: "200–400 zł" },
  { service: "Link building (dodatkowe linki)", price: "80–150 zł/link" },
  { service: "Optymalizacja Google Maps", price: "299 zł/mies." },
  { service: "Raport analityczny (GA4+GSC)", price: "199 zł/mies." }
];

const faqItems = [
  {
    question: "Czy ceny zawierają VAT?",
    answer: "Wszystkie ceny podane w cennikach to ceny netto. VAT doliczany jest zgodnie z obowiązującymi przepisami (23% dla usług SEO)."
  },
  {
    question: "Czy mogę zmienić pakiet w trakcie umowy?",
    answer: "Tak, możesz zmienić pakiet w dowolnym momencie. Zmiana obowiązuje od następnego okresu rozliczeniowego. Możliwe jest również rozszerzenie pakietu o dodatkowe usługi."
  },
  {
    question: "Jak długo trwa umowa?",
    answer: "Standardowo umowy zawieramy na okres 12 miesięcy. Oferujemy również umowy na krótsze okresy (3-6 miesięcy) z wyższym monthly rate'em. Możliwość rozwiązania umowy za 30 dni przed końcem okresu."
  },
  {
    question: "Kiedy zobaczę efekty pozycjonowania?",
    answer: "Pierwsze efekty widać po 4-6 tygodniach, ale pełne rezultaty osiągamy po 3-6 miesiącach, zależnie od konkurencyjności branży i stanu startowego witryny."
  },
  {
    question: "Czy pozycjonowanie lokalne jest tańsze?",
    answer: "Tak, pozycjonowanie lokalne jest tańsze niż ogólnopolskie, ponieważ konkurencja jest mniejsza. Pakiet Lokalny to najmniejszy wydatek w naszym cennikku."
  },
  {
    question: "Co to jest link building?",
    answer: "Link building to pozyskiwanie linków zewnętrznych do Twojej witryny z innych stron. Wysokiej jakości linki znacznie poprawiają autorytet domeny i pozycje w Google."
  },
  {
    question: "Czy oferujecie pozycjonowanie sklepów?",
    answer: "Tak! Pakiet E-commerce jest dedykowany dla sklepów internetowych. Obejmuje optymalizację kart produktów, schema markup dla e-commerce i linki branżowe."
  },
  {
    question: "Jakie wyniki mogę osiągnąć?",
    answer: "Wyniki zależą od branży, konkurencji i stanu startowego. Średnio osiągamy wzrost organicznego ruchu o 50-200% w ciągu 6 miesięcy dla konkurencyjnych branż."
  }
];

const CennikPozycjonowania = () => {
  return (
    <>
      <SEOHead
        title="Cennik pozycjonowania stron 2025 | Ile kosztuje SEO? | fotz.pl"
        description="Sprawdź aktualne ceny pozycjonowania stron w 2025. Pakiety SEO od 999 zł/mies. Transparentny cennik bez ukrytych kosztów. Bezpłatna wycena!"
        ogType="website"
        canonical="https://fotz.pl/cennik-pozycjonowania"
        keywords="cennik pozycjonowania, cena SEO, pozycjonowanie stron, ile kosztuje pozycjonowanie, pakiety SEO"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://fotz.pl" },
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
                  Transparentny cennik bez ukrytych kosztów. Pakiety SEO dostosowane do budżetu i potrzeb Twojej firmy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053]">
                    <Link to="/kontakt">
                      Bezpłatna wycena
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#packages">Przeglądaj pakiety</a>
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
                    Pakiety pozycjonowania
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Wybierz pakiet odpowiadający potrzebom Twojej firmy
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {packages.map((pkg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`relative p-6 rounded-2xl border transition-all ${
                        pkg.popular
                          ? "bg-gradient-to-b from-primary/20 to-primary/5 border-primary/50 ring-1 ring-primary/30"
                          : "bg-card border-border/50 hover:border-primary/30"
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                            POPULARNE
                          </span>
                        </div>
                      )}

                      <div className="mb-6">
                        <h3 className="text-xl font-heading font-bold mb-2">{pkg.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-heading font-bold">{pkg.price}</span>
                          <span className="text-muted-foreground">zł netto/mies.</span>
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

                      <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
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
                        <th className="text-right py-4 px-6 font-semibold">Cena</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addons.map((addon, idx) => (
                        <tr key={idx} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                          <td className="py-4 px-6 text-muted-foreground">{addon.service}</td>
                          <td className="py-4 px-6 text-right font-semibold">{addon.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  Wszystkie ceny to ceny netto. VAT doliczany jest zgodnie z obowiązującymi przepisami (23%).
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
                <a href="tel:+48123456789">Zadzwoń do nas</a>
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
