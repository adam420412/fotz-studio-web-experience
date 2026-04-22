import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, DollarSign, TrendingUp, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const faqItems = [
  {
    question: "Czy landing page drogi opłaca się?",
    answer: "Tak. Jeśli landing page zwiększa Twoją conversion rate nawet o 1%, to oznacza 100% więcej leadów. Koszt pagingu (1000 zł) vs wartość dodatkowych leadów — zwrot inwestycji w 2-4 tygodnie. A dobre landing page'e działają latami."
  },
  {
    question: "Czy mogę sam zrobić landing page na Wordpressie?",
    answer: "Możesz spróbować. Jednak dobry landing page wymaga wiedzy o UX/UI, copywriting'u, CRO (conversion rate optimization) i analytics. Niewiele firm potrafi to zrobić samo — wynik to zwykle słaby design i niska konwersja. Lepiej zlecić profesjonaliście i zaoszczędzić czas."
  },
  {
    question: "Ile czasu trwa stworzenie landing page?",
    answer: "Landing page za 499-1000 zł: 1-3 tygodnie (design, copywriting, setup, testy). Premium landing page: 3-6 tygodni (user research, multiple iterations, A/B testing setup). Builder (Unbounce, Leadpages): godziny do dni. Custom kod: 4-12 tygodni."
  },
  {
    question: "Czy landing page potrzebuje SEO?",
    answer: "Nie zawsze. Jeśli page'a dojazdża traffic z Google Ads, email czy social — SEO nie jest priorytetem. Ale jeśli chcesz organicznego traffic'u — tak, SEO jest ważne. Dobrze stworzony landing page rankinguje na long-tail keywords, co daje darmowy traffic."
  },
  {
    question: "Czy hosting wpływa na konwersję landing page'a?",
    answer: "Tak. Strona musi być szybka — powyżej 3 sekund load time, to konwersja spada drastycznie. Hosting powinien być szybki (Cloud, Vercel, Netlify), a page zoptymalizowana. Tanie shared hosting to słaby pomysł dla landing page'a — lepiej zainwestować w serwer i zysk zwrocie z wyższych konwersji."
  },
  {
    question: "Czy landing page obniża bounce rate?",
    answer: "To zależy. Dobrze stworzony landing page ma wysoką bounce rate (normalnie — użytkownik konwertuje lub wychodzi), ale HIGH CONVERSION rate. Bounce rate sam w sobie nie jest ważny — ważne jest, czy ludzie konwertują. Jeśli 80% goes bounces ale 20% konwertuje, to świetna page."
  }
];

export default function BlogLandingPageCena() {
  const publicationDate = "2025-04-11T00:00:00Z";

  return (
    <>
      <Layout>
        <SEOHead
          title="Ile kosztuje landing page? Ceny 2025 | fotz.pl"
          description="Ile kosztuje landing page? Ceny od agencji, freelancera i builderów. Porównanie kosztów. Sprawdź co wpływa na cenę landing page!"
          canonical="https://fotz.pl/blog/landing-page-cena"
          keywords="landing page cena, ile kosztuje landing page, cennik landing page, ceny landing page 2025"
        />

        <ArticleSchema
          headline="Ile kosztuje landing page w 2025 roku? Ceny i porównanie"
          description="Kompletny przegląd cen landing page: budujemy, freelancerami agencjami. Jakie czynniki wpływają na cenę? Kiedy co wybrać?"
          author="Fotz Studio"
          datePublished={publicationDate}
          image="https://fotz.pl/blog/landing-page-og.jpg"
        />

        <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Landing page cena", url: "https://fotz.pl/blog/landing-page-cena" }
        ]}/>

        <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                BLOG ARTYKUŁ
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Ile kosztuje landing page w 2025 roku? <span className="text-gradient">Ceny i porównanie</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Przegląd cen landing page'ów u builderów, freelancerów i agencji. Co wpływa na cenę? Kiedy co wybrać? Czy drogi landing page się opłaca?
              </p>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>11 kwietnia 2025</span>
                <span>•</span>
                <span>~1200 słów</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-foreground"
            >
              {/* Sekcja 1: Co to jest landing page */}
              <FadeInView delay={0}>
                <h2 className="text-3xl font-heading font-bold mb-4 mt-12">Co to jest landing page?</h2>
                <p className="text-muted-foreground mb-4">
                  Landing page to jednystronicowa strona internetowa zaprojektowana z jednym konkretnym celem: konwersja (sprzedaż, lead, rejestracja, pobieranie). Różni się od zwykłej strony tym, że ma jedno przesłanie, jasny CTA (Call To Action), brak nawigacji (aby zatrzymać użytkownika na stronie) i optymalizację pod conversion rate.
                </p>
                <p className="text-muted-foreground mb-4">
                  Landing page'e są zazwyczaj dojazdane z kampanii reklamowych (Google Ads, Meta Ads) albo mailingu. Użytkownik klika w ogłoszenie i trafia prosto na landing page, który go przekonuje do działania. Nie trafia na home page, nie szuka siebie w menu — idzie prosto do celu.
                </p>
                <p className="text-muted-foreground">
                  Przykłady: "Kup teraz mój kurs za 99 zł", "Zarejestruj się do webinaru", "Pobierz darmowy e-book", "Umów bezpłatną konsultację". Każdy to landing page — jedna strona, jedno przesłanie, jeden przycisk.
                </p>
              </FadeInView>

              {/* Sekcja 2: Przegląd cen */}
              <FadeInView delay={0.1}>
                <h2 className="text-3xl font-heading font-bold mb-4 mt-12">Ile kosztuje landing page — przegląd cen</h2>
                <p className="text-muted-foreground mb-6">
                  Ceny zależą od tego, gdzie i jak budujesz landing page. Poniżej dokładne porównanie.
                </p>

                <div className="bg-card border rounded-xl overflow-hidden mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted/50">
                          <th className="text-left font-heading font-bold py-3 px-4">Opcja</th>
                          <th className="text-left font-heading font-bold py-3 px-4">Koszt inicjalny</th>
                          <th className="text-left font-heading font-bold py-3 px-4">Opisy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">Builder (Webflow, Unbounce, Leadpages)</td>
                          <td className="py-3 px-4 text-primary font-semibold">100-300 zł/miesiąc</td>
                          <td className="py-3 px-4 text-muted-foreground text-xs">No-code, szablony, łatwy setup. Najszybciej, najłatwiej.</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">Freelancer</td>
                          <td className="py-3 px-4 text-primary font-semibold">500-2000 zł (jednorazowo)</td>
                          <td className="py-3 px-4 text-muted-foreground text-xs">HTML/CSS/JS custom code, ale mniej badań UX/konwersji.</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">Agencja (mała)</td>
                          <td className="py-3 px-4 text-primary font-semibold">1500-4000 zł (jednorazowo)</td>
                          <td className="py-3 px-4 text-muted-foreground text-xs">Design, copywriting, optymalizacja konwersji. Badania.</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Agencja (premium)</td>
                          <td className="py-3 px-4 text-primary font-semibold">4000-15000+ zł (jednorazowo)</td>
                          <td className="py-3 px-4 text-muted-foreground text-xs">Full-service: research, design, copy, A/B testing, analytics. Premium.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeInView>

              {/* Sekcja 3: Co wpływa na cenę */}
              <FadeInView delay={0.2}>
                <h2 className="text-3xl font-heading font-bold mb-4 mt-12">Co wpływa na cenę landing page?</h2>

                <div className="space-y-6 mb-6">
                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-heading font-bold mb-2">1. Złożoność designu</h3>
                    <p className="text-muted-foreground text-sm">Landing page minimalistyczna (hero + CTA): tania. Landing page z animacjami, multi-section, custom ilustracjami: droga. Złożony design = więcej godzin pracy = wyższa cena.</p>
                  </div>

                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-heading font-bold mb-2">2. Custom kod vs szablon</h3>
                    <p className="text-muted-foreground text-sm">Builder (Webflow, Leadpages) z szablonów: tanie i szybkie. Custom HTML/CSS/JS od zera: droga i czaso-chłonna. Custom kod jest zmienialny i skaluje się lepiej.</p>
                  </div>

                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-heading font-bold mb-2">3. Copywriting (treść)</h3>
                    <p className="text-muted-foreground text-sm">Jeśli agencja pisze tekst dla Ciebie (zamiast że sama podasz tekst), cena rośnie. Dobry copywriting to 20-30% kosztów — ale zwiększa konwersję o 50%+.</p>
                  </div>

                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-heading font-bold mb-2">4. Integracje (tools)</h3>
                    <p className="text-muted-foreground text-sm">Formularz + email automation (Mailchimp, Brevo): +0 zł. Integracja z CRM, Zapier, custom API: +500-1500 zł. Więcej integracji = bardziej zaawansowana setup.</p>
                  </div>

                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-heading font-bold mb-2">5. A/B testowanie</h3>
                    <p className="text-muted-foreground text-sm">Jeśli agencja planuje i wdraża A/B testy (różne wersje page'a): dodatkowe 1000-3000 zł. Ale ROI A/B testing'u jest bardzo wysoki (najczęściej 2-3x zwrot).</p>
                  </div>

                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-heading font-bold mb-2">6. Liczba zmian i iteracji</h3>
                    <p className="text-muted-foreground text-sm">Jeśli zlecasz agencję bez konkretnych wymagań ("zrób mi fajnie"), będzie dużo zmian i iteracji — cena rośnie. Wyraźne wymagania = mniej zmian = niższa cena.</p>
                  </div>

                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <h3 className="text-lg font-heading font-bold mb-2">7. SEO optymalizacja</h3>
                    <p className="text-muted-foreground text-sm">Jeśli landing page ma rankingować w Google (SEO), cena rośnie — trzeba keyword research, content structure, backlinks. Jeśli to pure paid traffic page (Google Ads), SEO mniej ważne.</p>
                  </div>
                </div>
              </FadeInView>

              {/* Sekcja 4: Builder vs Freelancer vs Agencja */}
              <FadeInView delay={0.3}>
                <h2 className="text-3xl font-heading font-bold mb-4 mt-12">Builder vs Freelancer vs Agencja — kiedy co wybrać?</h2>

                <div className="space-y-4 mb-6">
                  <div className="border rounded-lg p-6 bg-card">
                    <h3 className="text-lg font-heading font-bold mb-2 text-primary">Builder (Webflow, Unbounce)</h3>
                    <p className="text-muted-foreground text-sm mb-3">Najlepiej: szybkie testy, MVP, budżet poniżej 500 zł, chcesz sami edytować potem.</p>
                    <p className="text-muted-foreground text-sm">Ograniczenia: mniej customizacji, ograniczone integracje, design z szablonów (każda strona wygląda podobnie).</p>
                  </div>

                  <div className="border rounded-lg p-6 bg-card">
                    <h3 className="text-lg font-heading font-bold mb-2 text-primary">Freelancer</h3>
                    <p className="text-muted-foreground text-sm mb-3">Najlepiej: mały budżet (500-2000 zł), potrzebujesz custom kodu, jesteś zawiedziony builder'ami.</p>
                    <p className="text-muted-foreground text-sm">Ograniczenia: może brakować copywriting'u, CRO, A/B testing'u — to może być kod bez strategii. Support post-launch może być słaby.</p>
                  </div>

                  <div className="border rounded-lg p-6 bg-card">
                    <h3 className="text-lg font-heading font-bold mb-2 text-primary">Agencja (mała lub premium)</h3>
                    <p className="text-muted-foreground text-sm mb-3">Najlepiej: chcesz maksymalnej konwersji, dochód z kampanii będzie duży, potrzebujesz strategii i testowania.</p>
                    <p className="text-muted-foreground text-sm">Korzyści: full-service (design, copy, UX/CRO, support post-launch). Zwrot inwestycji = szybki.</p>
                  </div>
                </div>
              </FadeInView>

              {/* Sekcja 5: Landing page od fotz.pl */}
              <FadeInView delay={0.4}>
                <h2 className="text-3xl font-heading font-bold mb-4 mt-12">Landing page od fotz.pl — co dostajesz?</h2>
                <p className="text-muted-foreground mb-4">
                  Oferujemy landing page'e w pakietach dostosowanych do budżetu i celów. Każdy landing page zawiera:
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Design i UX (responsywny, mobilny, ładuje się w poniżej 2 sekund)",
                    "Copywriting (tekst skierowany do Twoich klientów, z CTA)",
                    "Integracje (email, CRM, Zapier, custom API jeśli trzeba)",
                    "SEO basics (meta tags, schema, openmograph, mobile friendly)",
                    "Analytics setup (Google Analytics, conversion tracking, pixel)",
                    "Support post-launch (30-60 dni obsługi)"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground mb-4">
                  Cena: 1500-3000 zł (standard), 3000-5000+ zł (premium z A/B testing'iem). Czas realizacji: 2-4 tygodnie.
                </p>

                <Button asChild className="gap-2">
                  <Link to="/uslugi/tworzenie-stron-internetowych">
                    Zamów landing page
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </FadeInView>

              {/* Sekcja 6: Czy drogi landing page się opłaca */}
              <FadeInView delay={0.5}>
                <h2 className="text-3xl font-heading font-bold mb-4 mt-12">Czy drogi landing page się opłaca? ROI kalkulacja</h2>
                <p className="text-muted-foreground mb-4">
                  Najczęstsze pytanie: czy wydać 3000 zł na landing page to sens? Odpowiedź: zależy od Twojej marży i konwersji.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6">
                  <h3 className="font-heading font-bold mb-3">Przykład:</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm mb-4">
                    <li>• Koszt landing page'a: 2000 zł</li>
                    <li>• Kampania Google Ads (1 miesiąc): 2000 zł budżetu, 100 kliknięć na page</li>
                    <li>• Konwersja: 5% (5 leadów)</li>
                    <li>• Wartość 1 leadu: 500 zł</li>
                    <li>• ROI: 5 leadów × 500 zł = 2500 zł przychodu</li>
                    <li>• Zwrot inwestycji w landing page: (2500 - 2000) / 2000 = 25% w 1 miesiąc</li>
                  </ul>
                  <p className="text-sm font-heading font-bold text-primary">Wniosek: drogi landing page zwrócił się w 1 miesiąc.</p>
                </div>

                <p className="text-muted-foreground mb-4">
                  Zatem: jeśli Twoja kampania Google Ads/Meta Ads ma budżet 2000+ zł/miesiąc, landing page premium jest ROI-pozytywnym. Jeśli wydajesz 500 zł/miesiąc, builder za 200 zł/miesiąc to lepszy escolhe.
                </p>

                <p className="text-muted-foreground">
                  Najczęstszy błąd: oszczędzić na landing page, ale tracić 50% konwersji z powodu słabego designu i copywriting'u. To jak kupić tanie pamiątki — nic się nie zarabia.
                </p>
              </FadeInView>

              {/* Sekcja 7: FAQ */}
              <FadeInView delay={0.6}>
                <h2 className="text-3xl font-heading font-bold mb-6 mt-12">Często zadawane pytania o ceny landing page'ów</h2>
              </FadeInView>

              {/* CTA przed FAQ */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <h3 className="font-heading font-bold mb-2">Chcesz wiedzieć, ile będzie kosztować Twój landing page?</h3>
                <p className="text-muted-foreground text-sm mb-4">Wyślij nam szczegóły Twojego projektu — wycena w 24h.</p>
                <Button asChild>
                  <Link to="/kontakt">Bezpłatna wycena landing page</Link>
                </Button>
              </div>
            </motion.article>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left font-heading font-semibold py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-heading font-bold mb-8">Powiązane artykuły i usługi</h2>
            <div className="space-y-4">
              <Link to="/uslugi/tworzenie-stron-internetowych" className="flex items-center gap-2 text-primary hover:underline font-medium">
                → Tworzenie stron internetowych
              </Link>
              <Link to="/ai-marketing" className="flex items-center gap-2 text-primary hover:underline font-medium">
                → AI Marketing i copywriting
              </Link>
              <Link to="/seo/pozycjonowanie" className="flex items-center gap-2 text-primary hover:underline font-medium">
                → Pozycjonowanie stron
              </Link>
              <Link to="/uslugi/optymalizacja-strony-internetowej" className="flex items-center gap-2 text-primary hover:underline font-medium">
                → Optymalizacja strony
              </Link>
            </div>
          </div>
        </section>

        <ContactSection
        />
      </Layout>
    </>
  );
}
