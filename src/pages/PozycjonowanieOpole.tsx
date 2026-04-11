import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star, Target, MapPin, TrendingUp, Users, Award, Zap, Globe, BarChart3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const services = [
  {
    icon: Target,
    title: "Audyt techniczny SEO",
    description: "Pełna analiza infrastruktury Twojej strony — szybkość, crawlability, strukturę. Identyfikujemy błędy blokujące pozycjonowanie. Raport z konkretnymi rekomendacjami."
  },
  {
    icon: Globe,
    title: "Optymalizacja treści",
    description: "Tworzenie i optymalizacja treści pod słowa kluczowe. H1, meta opisy, internal linking dostrojone pod algorytm Google. Content dostosowany do wyszukiwań lokalnych Opola."
  },
  {
    icon: Zap,
    title: "Link building i backlinki",
    description: "Budowanie profilu backlinków z polskich stron branżowych. Gościnne artykuły, wymiana linków B2B. Naturalna, bezpieczna strategia link buildingu."
  },
  {
    icon: BarChart3,
    title: "SEO lokalne",
    description: "Optymalizacja Google My Business, mapy, cytacje lokalne dla Opola. Dominacja w wynikach lokalnych — dla użytkowników szukających 'SEO Opole' blisko siebie."
  }
];

const faqItems = [
  {
    question: "Ile czasu zajmuje pojawienie się w TOP 5 Google?",
    answer: "W przypadku Opola (niska konkurencja SEO) — 2-3 miesiące dla średnio zaawansowanych słów kluczowych. Opole ma znacznie mniej konkurencji niż warszawskie słowa kluczowe — to nasza przewaga. Dla słów o bardzo niskiej konkurencji — nawet 4-6 tygodni. Efekty widać już w pierwszym miesiącu (wzrost 30-50% ruchu)."
  },
  {
    question: "Dlaczego Opole ma tak niską konkurencję SEO?",
    answer: "Opole to 130k mieszkańców, małe voivodztwo, ale bogatą historię biznesową (Zakłady Chemiczne, kolej). Większość agencji SEO skupia się na dużych miastach (Warszawa, Kraków, Wrocław). Dla firm z Opola to gigantyczna szansa — mamy doświadczenie z oboma: małymi rynkami i dużymi. Niższa konkurencja = szybsze efekty."
  },
  {
    question: "Czy SEO dla branży chemicznej w Opolu się opłaca?",
    answer: "Zdecydowanie. Zakłady Chemiczne Opole to sektor B2B, wysoki CLV. Firma szukająca dostawcy chemikaliów wpisze 'producent chemikaliów Opole' — to wysoka intencja zakupu. SEO w niszy B2B działa bardziej efektywnie niż AdWords (niższy CPC, wyższa konwersja). Dla branży chemicznej: budowanie widoczności przez content i backlinki = długoterminowy asset."
  },
  {
    question: "Czy SEO dla turystyki Opola (KFPP) ma sens?",
    answer: "Tak, ale inny angle niż pozycjonowanie dla lokalnych firm. KFPP to największy festival piosenki polskiej w Europie — turystyka eventowa, media, sponsorzy. SEO do tego: artykuły o Opolu dla turystów, content 'co zobaczyć w Opolu', backlinki z turystycznych serwisów. Dla biznesów hotelowych/restoranowych — ogromna szansa sezonowa."
  },
  {
    question: "Jak konkurować z niemieckimi firmami (cross-border B2B)?",
    answer: "Opole ma znaczną mniejszość niemiecką i silne połączenia bisnesowe z Niemcami. Strona dostępna w 2+ językach, backlinki z niemieckich serwisów B2B, optimizacja dla frazy 'Opolskie firmy' w wyszukiwaniach niemieckich. SEO cross-border wymaga innego podejścia — my to robimy rutynowo."
  },
  {
    question: "Jakie są najtaniej pozycjonowalne słowa kluczowe w Opolu?",
    answer: "Long-taile i frazy lokalne: 'agencja marketingowa Opole', 'firma IT Opole', 'projektowanie stron Opole', 'konsulting biznesu Opole'. Słowa z niską konkurencją, wysokim CTR lokalnym. Unikamy słów z 10k+ konkurencji — tam nie gramy w Opolu. Nasze podejście: dominacja w lokalnych niszach > walka w ogólnopolskich keywordach."
  },
  {
    question: "Czy SEO jest opłacalne dla małej firmy z Opola?",
    answer: "Tak. Małe firmy lokalne (hydraulik, elektryk, usługi) mają NAJWIĘKSZĄ szansę na SEO. Wchodząc w 'hydraulik Opole' — konkurencja to 5-10 stron, vs 'hydraulik Warszawa' — 10 tys stron. Budżet 1500-2500 PLN/mies na SEO dla małej firmy z Opola = TOP 3 pozycje w ciągu 2-3 miesięcy. ROI astronomiczny."
  }
];

export default function PozycjonowanieOpole() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Pozycjonowanie stron Opole | Agencja SEO fotz.pl"
          description="Pozycjonowanie stron internetowych w Opolu. Skuteczne SEO dla firm z Opolszczyzny. Wyższe pozycje w Google. Bezpłatna wycena!"
          canonical="https://fotz.pl/uslugi/pozycjonowanie/opole"
          keywords="pozycjonowanie Opole, SEO Opole, agencja SEO Opole, pozycjonowanie stron Opole, marketing internetowy Opole"
        />

        <ServiceSchema
          name="Pozycjonowanie SEO Opole"
          description="Pozycjonowanie stron internetowych w Opolu — zwiększamy widoczność firm w Google. Niska konkurencja SEO, szybkie efekty, specjalizacja w B2B chemii i turystyce KFPP."
          provider="fotz.pl"
          areaServed="Opole"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Usługi", url: "https://fotz.pl/uslugi" },
            { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
            { name: "Pozycjonowanie Opole", url: "https://fotz.pl/uslugi/pozycjonowanie/opole" }
          ]}
        />
        <FAQSchema items={faqItems} />

        {/* Hero */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#0F3053]/8 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeIn} className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-primary" /> Opole — niska konkurencja SEO
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Pozycjonowanie{" "}
                <span className="text-gradient">Opole</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Skuteczne SEO dla firm z Opolszczyzny. Wyższe pozycje w Google, organiczny ruch, B2B chemii i turystyka. Niska konkurencja = szybkie efekty.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Opole to 130k mieszkańców, małe voivodztwo z bogatą tradycją biznesową — Zakłady Chemiczne, kolej, KFPP. Dla firm z Opola pozycjonowanie to game changer — konkurencja SEO jest ZNACZNIE niższa niż w dużych miastach.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/kontakt">
                    Bezpłatna wycena <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/uslugi/pozycjonowanie">Poznaj SEO</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card/30 border-y border-border/30">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
            >
              {[
                { value: "+180%", label: "wzrost ruchu (2 mies.)" },
                { value: "TOP 5", label: "pozycje w Google" },
                { value: "4.7/5", label: "ocena (6 opinii)" },
                { value: "2 mies.", label: "czas do TOP 5" }
              ].map((s, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Opole */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego Opole to idealna nisza SEO?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Niska konkurencja SEO",
                    desc: "Większość agencji SEO skupia się na Warszawie i Krakowie. Opole ma 10x mniej konkurencji — to Twoja szansa na dominację lokalną."
                  },
                  {
                    icon: TrendingUp,
                    title: "Szybkie efekty",
                    desc: "TOP 5 pozycje w ciągu 2-3 miesięcy. Dla porównania: Warszawa to 4-6 miesięcy. Niższa konkurencja = szybsza budowa rankingu."
                  },
                  {
                    icon: Zap,
                    title: "Sektor chemii B2B",
                    desc: "Zakłady Chemiczne, firmy producenckie — wysokie CLV, małe budżety na marketing. SEO to idealne narzędzie dla nich."
                  },
                  {
                    icon: Globe,
                    title: "Cross-border B2B",
                    desc: "Opole ma mniejszość niemiecką i silne połączenia z Niemcami. SEO w 2 językach, backlinki z DE — nasza specjalność."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-background"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Usługi SEO dla <span className="text-gradient">Opola</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe podejście — audyt, optimizacja, link building, SEO lokalne.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-primary/30 transition-colors"
                  >
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-heading font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Jak pozycjonujemy Twoją stronę?
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Audyt i diagnoza",
                    desc: "Analizujemy Twoją stronę, konkurencję w Opolu, słowa kluczowe. Identyfikujemy błędy i szanse."
                  },
                  {
                    step: "02",
                    title: "Strategia SEO",
                    desc: "Plan działań dostosowany do specyfiki branży i rynku Opola. Realistyczne osie czasu, konkretne cele."
                  },
                  {
                    step: "03",
                    title: "Wdrażanie",
                    desc: "Optymalizacja treści, technical SEO, link building. Regularne raportowanie postępów."
                  },
                  {
                    step: "04",
                    title: "Monitorowanie i optymalizacja",
                    desc: "Ciągłe tracking rankingów, ruchu, konwersji. Miesięczne raporty, dostosowanie strategii."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="flex gap-6 p-6 rounded-2xl border border-border/40 bg-background"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-primary text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2 text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Efekty SEO w Opolu
                </h2>
              </motion.div>

              <div className="space-y-4">
                {[
                  { metric: "Wzrost ruchu organicznego", result: "+180% w 2 miesiące", icon: TrendingUp },
                  { metric: "Pozycje TOP 5", result: "2-3 miesiące dla średnich keywordów", icon: Star },
                  { metric: "Dominacja lokalna", result: "Pierwsze miejsce w 'SEO Opole'", icon: Award },
                  { metric: "Ruch z wysoką intencją", result: "Wyższa konwersja niż z reklam", icon: Target }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="flex items-center gap-4 p-6 rounded-2xl border border-border/40 bg-card/20"
                  >
                    <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-heading font-semibold">{item.metric}</p>
                      <p className="text-sm text-muted-foreground">{item.result}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-primary/90 to-[#0F3053]/90">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Gotowy na wzrost ruchu z Google?
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna wycena SEO dla Opola — omówimy potencjał Twojej branży i pokażemy konkretne liczby.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Link to="/kontakt">
                    Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Najczęstsze pytania — SEO Opole
                </h2>
              </motion.div>

              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-border/40 rounded-xl px-6 data-[state=open]:bg-primary/5"
                  >
                    <AccordionTrigger className="py-4 hover:no-underline text-left font-heading font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Internal Linking */}
        <section className="py-12 border-t border-border/30 bg-card/20">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">
              Inne miasta
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Agencja marketingowa Opole", to: "/agencja-marketingowa-opole" },
                { label: "Pozycjonowanie Olsztyn", to: "/uslugi/pozycjonowanie/olsztyn" },
                { label: "Agencja marketingowa Olsztyn", to: "/agencja-marketingowa-olsztyn" },
                { label: "Wszystkie usługi SEO", to: "/uslugi/pozycjonowanie" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
}
