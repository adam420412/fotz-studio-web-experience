import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Target, Zap, Globe, Clock, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const useCases = [
  { icon: Target, title: "Freelancerzy i korepetytorzy", desc: "Portfolio + kontakt. Prosta prezentacja usług. Idealne do zdobywania klientów." },
  { icon: Zap, title: "Startupy i MVP", desc: "Szybko na rynek. Strona one page to MVP dla wielu startupów. Testowanie pomysłu bez 50k nakładów." },
  { icon: Globe, title: "Gabinety i kliniki", desc: "Lekarz, dentysta, psycholog. Wizytówka online + rezerwacja. Pacjenci szukają podstawowych info." },
  { icon: Clock, title: "Restauracje", desc: "Menu, zdjęcia, adres, godziny. One page działa świetnie dla lokali. Użytkownicy z mobilnych otwierają Google Maps." },
  { icon: Zap, title: "Fotografowie i artyści", desc: "Portfolio w pięknym formacie. Galeria, kilka słów o sobie, kontakt. To wystarczy do zdobywania zleceń." },
  { icon: DollarSign, title: "Eventy i konferencje", desc: "Event page z informacjami, speaker'ami, rezerwacją biletów. Jedna strona, wszystkie info." }
];

const features = [
  "Hero / baner z głównym przesłaniem",
  "Sekcja 'O firmie'",
  "Usługi / produkty",
  "Portfolio / realizacje",
  "Opinie klientów",
  "Kontakt i formularz",
  "Google Maps z lokalizacją"
];

const comparison = [
  {
    feature: "Czas implementacji",
    onePage: "2-4 tygodnie",
    multiPage: "4-12 tygodni"
  },
  {
    feature: "Koszt",
    onePage: "499-999 zł",
    multiPage: "1500-5000+ zł"
  },
  {
    feature: "Szybkość ładowania",
    onePage: "Świetnie (1 strona)",
    multiPage: "Zależy od optymalizacji"
  },
  {
    feature: "SEO",
    onePage: "Dobre (1 słowo kluczowe)",
    multiPage: "Lepsze (wiele haseł)"
  },
  {
    feature: "Mobile-friendly",
    onePage: "Zawsze responsywna",
    multiPage: "Zależy od projektu"
  },
  {
    feature: "Łatwy do edycji",
    onePage: "Bardzo łatwe",
    multiPage: "Wymaga wiedzy"
  }
];

const examples = [
  { industry: "Fotografia", type: "Portret, studyjne", desc: "Portfolio 10-15 projektów, opis, kontakt." },
  { industry: "Korepetycje", type: "Matematyka, język angielski", desc: "O nauczycielu, oferta, osiągnięcia uczniów, rezerwacja." },
  { industry: "Fryzjerstwo", type: "Salon czy home salon", desc: "Cennik, galerię zdjęć, godziny otwarcia, rezerwacja terminu." }
];

const faqItems = [
  {
    question: "Czy strona one page jest dobra dla SEO?",
    answer: "Tak, ale z limitacją: jedna strona = głównie jedno hasło główne. Jeśli chcesz pozycjonować się na 50 haseł, wielostronicowa będzie lepsza. Ale dla lokalnych firm (fryzjer w mieście) one page działa świetnie — Google lubi strony szybkie i mobilne, a strony one page to mają. Jeśli będziesz pisać dobre treści, jeden keyword, to sięgniesz top 10."
  },
  {
    question: "Ile czasu trwa realizacja strony one page?",
    answer: "Zazwyczaj 2-4 tygodnie. Pierwszy tydzień: zbieramy info, wireframy. Druga tygodniowie: design, feedback, poprawki. Trzecia/czwarta: implementacja, copywriting, SEO setup, testy. Możemy przyspieszyć do 1 tygodnia za dodatkową opłatę, ale to nie ma sensu — lepiej zrobić to dobrze."
  },
  {
    question: "Czy mogę edytować stronę samodzielnie?",
    answer: "Owszem! Dostarczamy Ci stronę w CMS (Webflow, WP albo nawet GitHub) — możesz edytować tekst, zdjęcia, cennik bez kodu. Jeśli wolisz niezależność, uczymy Cię obsługi. Jeśli preferujesz hands-off, proponujemy plane maintenance (30 zł/zmiana)."
  },
  {
    question: "Czy strona jest responsywna (mobile-friendly)?",
    answer: "Oczywiście. Każda strona, którą robimy, jest w 100% responsywna — na telefonie, tablecie, desktopie wygląda świetnie. To jest standard, nie opcja. Google też to wymaga, więc responsywność = wysoka pozycja."
  },
  {
    question: "Co jeśli moja firma się rozrośnie i będę potrzebować więcej stron?",
    answer: "Nie problem. Strona one page zawiera architekturę, którą łatwo rozszerzyć. Możemy dodać bloga, sekcję usług, case studies — wszystko bez przebudowy od zera. Koszty będą niższe niż budowanie nowej strony od razu. Dużo klientów zaczyna od one page, potem dodaje zawartość."
  },
  {
    question: "Czy strona one page obsługuje rezerwacje lub e-commerce?",
    answer: "Tak. Możemy zintegrować: Calendly (rezerwacja), Stripe/PayU (płatności), Formspree (formularz kontaktowy), Shopify embed (produkty). One page nie oznacza ograniczeń funkcjonalnych — to tylko struktura. Możemy dodać wszystko, czego potrzebujesz."
  }
];

export default function StronaOnePage() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Strona one page | Jednostronicowa strona internetowa | fotz.pl"
          description="Strona one page — elegancka jednostronicowa strona internetowa dla firm i freelancerów. Od 499 zł netto. Szybko, profesjonalnie, mobilna. Bezpłatna wycena!"
          canonical="https://fotz.pl/uslugi/strona-one-page"
          keywords="strona one page, jednostronicowa strona, landing page, one page website, strona jednostronicowa"
        />

        <ServiceSchema
          name="Strona one page"
          description="Jednostronicowa strona internetowa dla freelancerów, startupów, firm usługowych. Szybka, profesjonalna, mobilna. Od 499 zł."
          provider="Fotz Studio"
          areaServed="Polska"
        />

        <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Strona one page", url: "https://fotz.pl/uslugi/strona-one-page" }
        ]} />

        <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                ONE PAGE WEBSITE
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Strona one page — <span className="text-gradient">jednostronicowa strona dla Twojej firmy lub marki osobistej</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Prosta, elegancka, skuteczna. Strona one page to idealne rozwiązanie dla freelancerów, startupów i firm usługowych. Wszystkie informacje na jednym ekranie. Szybka do ładowania, mobilna, łatwa do zarządzania.
              </p>

              <div className="flex items-center justify-center gap-2 mb-12">
                <div className="text-3xl md:text-4xl font-bold text-primary">od 499 zł</div>
                <div className="text-muted-foreground">za pełną stronę</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Zamów stronę one page
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/kontakt">Bezpłatna wycena</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dla kogo */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Dla kogo jest strona one page?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Strona jednostronicowa to świetne rozwiązanie dla firm, które chcą szybko i tanio wejść do internetu.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {useCases.map((use, i) => (
                <FadeInView key={i} delay={i * 0.1} className="bg-card border rounded-xl p-6 hover:border-primary/40 transition-colors">
                  <use.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{use.title}</h3>
                  <p className="text-muted-foreground text-sm">{use.desc}</p>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Co zawiera */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold mb-4 text-center">Co zawiera strona one page?</h2>
            <p className="text-muted-foreground text-center mb-12">Każda strona one page zawiera te sekcje, które możemy dopasować do Twoich potrzeb.</p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <FadeInView key={i} delay={i * 0.05} className="flex items-center gap-3 p-4 bg-card border rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Porównanie */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-4 text-center">Strona one page vs wielostronicowa — co wybrać?</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Porównanie szybkości, kosztów, SEO i zarządzania.</p>

            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left font-heading font-bold py-4 px-4">Aspekt</th>
                    <th className="text-center font-heading font-bold py-4 px-4 text-primary">Strona one page</th>
                    <th className="text-center font-heading font-bold py-4 px-4">Wielostronicowa</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-sm text-primary font-medium">{row.onePage}</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">{row.multiPage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Przykładowe realizacje */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-16 text-center">Przykładowe realizacje stron one page</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {examples.map((example, i) => (
                <FadeInView key={i} delay={i * 0.1} className="bg-card border rounded-xl p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-3">0{i + 1}</div>
                  <h3 className="font-heading font-bold text-lg mb-2">{example.industry}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{example.type}</p>
                  <p className="text-sm text-muted-foreground">{example.desc}</p>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Pakiet */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-center mb-4">Pakiet One Page Complete</h2>
            <p className="text-muted-foreground text-center mb-12">Wszystko, czego potrzebujesz do uruchomienia strony</p>

            <FadeInView className="bg-card border-2 border-primary rounded-xl p-8">
              <div className="mb-8">
                <div className="text-4xl font-bold text-primary mb-2">499 zł - 999 zł</div>
                <p className="text-muted-foreground">w zależności od złożoności i liczby sekcji</p>
              </div>

              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-semibold">Design i UX</div>
                    <p className="text-sm text-muted-foreground">Nowoczesny, responsywny projekt dostosowany do Twojej branży</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-semibold">Copywriting</div>
                    <p className="text-sm text-muted-foreground">Profesjonalny tekst skierowany do Twoich klientów</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-semibold">SEO</div>
                    <p className="text-sm text-muted-foreground">Struktura, meta tagi, schemat, słowa kluczowe gotowe do rankingu</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-semibold">Hosting i domenę</div>
                    <p className="text-sm text-muted-foreground">Konfiguracja serwera, SSL, Cloudflare, domeny na roczną rejestrację</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-semibold">CMS / edytowalność</div>
                    <p className="text-sm text-muted-foreground">Możliwość edycji treści bez kodu (WP, Webflow lub statyczne)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-semibold">Integracje</div>
                    <p className="text-sm text-muted-foreground">Formularz kontaktowy, mapa, social media, email, rezerwacja (Calendly)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-semibold">Support</div>
                    <p className="text-sm text-muted-foreground">Szkolenie użytkowania, wsparcie przez 30 dni po uruchomieniu</p>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full" size="lg">
                <Link to="/kontakt">Zamów teraz</Link>
              </Button>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Często zadawane pytania</h2>
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

        <ContactSection
          heading="Zamów stronę one page"
          subheading="Prosta strona gotowa w 2 tygodnie. Bezpłatna wycena w 24h."
        />
      </Layout>
    </>
  );
}
