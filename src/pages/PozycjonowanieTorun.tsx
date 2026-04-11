import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  BarChart2,
  Star,
  Building2,
  Globe,
  Target,
  Clock,
  Award,
  Shield,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const faqItems = [
  {
    question: "Ile kosztuje pozycjonowanie w Toruniu?",
    answer:
      "Pozycjonowanie SEO w Toruniu zaczyna się od 1 200 zł netto miesięcznie dla małych firm i średnich przedsiębiorstw. Dla branż takich jak turystyka (Stare Miasto, atrakcje UNESCO), edukacja (NCU) czy e-commerce koszt wynosi 2 000–5 000 zł/mies., zależnie od konkurencji na frazy docelowe.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Toruniu?",
    answer:
      "Toruń to rynek o umiarkowanej konkurencji. Pierwsze efekty widoczne są już po 2–3 miesiącach. Stabilne pozycje TOP 5 dla większości fraz branżowych osiągamy w 3–6 miesięcy. Dla firm turystycznych sezonowość to ważny czynnik — rekomendujemy planowanie od север.",
  },
  {
    question: "Czy pozycjonujecie firmy z branży turystycznej w Toruniu?",
    answer:
      "Tak — obsługujemy hotele, restauracje, muzea, agencje turystyczne i operatorów wycieczek z Torunia. Znamy specyfikę sezonowości turystycznej (lato szczyt) i wiemy, jak docierać do turystów szukających atrakcji Starego Miasta i UNESCO online. Ponad 300 tys. turystów rocznie to duży potencjał.",
  },
  {
    question: "Jakie branże pozycjonujemy w Toruniu?",
    answer:
      "Doświadczenie mamy w: turystyce (hotele, restauracje, muzea), edukacji (uczelnie, szkoły językowe), produkcji (pierniki, cukiernie), farmacji (oprócz samej Polpharmy), e-commerce, nieruchomościach i usługach dla studentów. Toruń przyciąga zarówno turystów, jak i 25 tys. studentów NCU.",
  },
  {
    question: "Czy macie doświadczenie w SEO dla uczelni i szkół w Toruniu?",
    answer:
      "Tak — NCU (Uniwersytet Mikołaja Kopernika) to największa instytucja edukacyjna w Toruniu. Obsługujemy szkoły Language, szkoły policealne i kursy online. SEO dla edukacji wymaga strategii long-tail (np. \"kurs angielskiego Toruń\", \"studia zarządzanie Toruń\") — to nasz standard.",
  },
  {
    question: "Jak pozycjonowanie Toruń ma się do konkurencji w Polsce?",
    answer:
      "Toruń jest mniejszy niż Warszawa, Kraków czy Wrocław, ale ma jednoznaczną tożsamość (UNESCO, Kopernik, pierniki). To oznacza łatwiejsze do zdobycia frazy lokalne i bardziej zainteresowaną publiczność. Konkurencja SEO jest niższa niż na większych miastach — to duża szansa dla lokalnych biznesów.",
  },
  {
    question: "Czy oferujecie content marketing dla firm w Toruniu?",
    answer:
      "Tak — tworzymy artykuły blogowe, przewodniki, oraz case studies na frazy lokalne (np. \"gdzie zjeść pierniki w Toruniu\", \"atrakcje Stare Miasto Toruń\"). Content marketing wspiera SEO i buduje autorytet marki. Dla branży turystycznej i edukacyjnej to niezbędne.",
  },
  {
    question: "Jakie systemy CMS wspieracie dla firm w Toruniu?",
    answer:
      "Pracujemy z WordPress, Shopify, Wix, WooCommerce, custom React/Next.js oraz Statamic. Bez względu na platformę, nasze SEO opiera się na white-hat praktykach: optymalizacja on-page, content strategy, technical SEO i link building — to zawsze działa.",
  },
];

const PozycjonowanieTorun = () => {
  const results = [
    {
      metric: "+240%",
      label: "Wzrost ruchu organicznego",
      context: "hotel Stare Miasto Toruń",
    },
    { metric: "TOP 3", label: "Pozycja w Google", context: "frazy lokalne Toruń" },
    { metric: "3 mies.", label: "Czas do pierwszej strony", context: "branża turystyczna" },
    { metric: "4,8/5", label: "Ocena klientów", context: "10 opinii" },
  ];

  const districts = [
    "Stare Miasto",
    "Mokre",
    "Rubinkowo",
    "Na Skarpie",
    "Bielawy",
    "Chełmińskie Przedmieście",
    "Koniuchy",
    "Wrzosy",
  ];

  const industries = [
    { name: "Turystyka i hotele", icon: Star },
    { name: "Restauracje i gastronomia", icon: Building2 },
    { name: "Edukacja (NCU, szkoły)", icon: Globe },
    { name: "Pierniki i cukiernie", icon: Target },
    { name: "Farmacja", icon: Shield },
    { name: "E-commerce", icon: TrendingUp },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Toruń — Agencja SEO | Fotz Studio"
        description="Pozycjonowanie stron Toruń. Agencja SEO Fotz Studio — audyt SEO, optymalizacja, link building. SEO dla turystyki, edukacji i e-commerce. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/torun"
        ogTitle="Pozycjonowanie Toruń — Fotz Studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Toruniu. SEO dla hoteli, restauracji, uczelni i firm e-commerce. Ponad 300k turystów rocznie czeka na Twoją stronę."
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Toruń"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm ze Szczecina i Zachodniopomorskiego. Audyt SEO, optymalizacja on-page, link building i SEO cross-border PL/DE."
        url="https://fotz.pl/uslugi/pozycjonowanie/torun"
        provider="Fotz Studio"
        areaServed="Toruń, Kujawsko-Pomorskie"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Toruń", url: "https://fotz.pl/uslugi/pozycjonowanie/torun" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-background overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <MapPin className="w-4 h-4" />
              Pozycjonowanie · Toruń i Kujawsko-Pomorskie
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Toruń</span> —
              SEO dla miasta UNESCO i Kopernika
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom ze Torunia zdobyć pierwszą stronę Google. Od hoteli i restauracji obsługujących 300k+ turystów rocznie, przez uczelnie, aż po e-commerce. Audyt SEO, optymalizacja i link building dostosowany do Twojej branży.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <Link to="/uslugi/pozycjonowanie">
                  Pakiety i ceny SEO
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
            >
              {["White-hat SEO", "Content Marketing", "Google Analytics 4", "Raport co 2 tygodnie"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <FadeInView key={i} delay={i * 0.1} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {r.metric}
                </div>
                <div className="text-sm font-medium text-foreground">{r.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.context}</div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Torun specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Toruniu — UNESCO, turystyka i 25 tys. studentów
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Toruń to <strong className="text-foreground">ok. 200 tys. mieszkańców</strong> i miasto
                  UNESCO — wpisane na listę światowego dziedzictwa kulturalnego. Stare Miasto przyciąga
                  <strong className="text-foreground"> ponad 300 tys. turystów rocznie</strong>, a urodziny
                  Kopernika to ikona miasta.
                </p>
                <p>
                  Uniwersytet Mikołaja Kopernika to <strong className="text-foreground">25 tys. studentów</strong> —
                  dla firm usługowych, restauracji i akademików to ogromny potencjał. Dodatkowo Toruń
                  ma <strong className="text-foreground">tradycję pierników</strong> (Cukiernia Kopernika, Paczki)
                  i silną branżę e-commerce.
                </p>
                <p>
                  Rynek SEO w Toruniu ma <strong className="text-foreground">nižšą konkurencję</strong> niż większe miasta.
                  To oznacza szybsze efekty i niższe budżety dla firm chcących zdobyć TOP 10 dla fraz lokalnych.
                  Whether Ty jesteś hotelem, szkołą, piernikami czy sklepem online — mamy strategię dostosowaną do Torunia.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Torunia
                </h3>
                <div className="flex flex-wrap gap-2">
                  {districts.map((district) => (
                    <span
                      key={district}
                      className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {district}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  + Cały rejon Kujawsko-Pomorski
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Branże, które pozycjonujemy w Toruniu
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od turystyki UNESCO po edukację — mamy doświadczenie
              w sektorach typowych dla Torunia.
            </p>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industries.map((ind, i) => (
              <FadeInView key={i} delay={i * 0.08}>
                <div className="bg-card border border-border/60 rounded-xl p-5 flex items-center gap-3 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <ind.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{ind.name}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Jak działamy — pozycjonowanie firm z Torunia
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę pod kątem fraz lokalnych (Toruń, Kujawsko-Pomorskie). Sprawdzamy techniczne podstawy, konkurencję i potencjał dla Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia dla Twojej branży",
                desc: "Dobieramy słowa kluczowe dla turystów, studentów, czy klientów e-commerce — wszystko dostosowane do Torunia. Analizujemy sezonowość i trendy w Twojej branży.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści SEO na frazy toruńskie i budujemy linki z lokalnych źródeł. Content marketing to nasza specjalność.",
              },
              {
                step: "04",
                title: "Raportowanie i skalowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Gdy strona nabiera autorytetu, rozszerzamy na kolejne frazy i rynki docelowe. Twój SEO rośnie wraz z biznesem.",
              },
            ].map((step, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0 text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gotowy na pierwszą stronę Google w Toruniu?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Przeanalizujemy Twoje frazy dla Torunia
              i pokażemy, co powstrzymuje Cię przed TOP 10.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/uslugi/pozycjonowanie">Wszystkie pakiety SEO</Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              FAQ — pozycjonowanie stron Toruń
            </h2>
          </FadeInView>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <FadeInView key={i} delay={i * 0.05}>
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-card border border-border/60 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeInView>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal nav */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
            Pozycjonowanie w innych miastach
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { city: "Szczecin", href: "/uslugi/pozycjonowanie/szczecin" },
              { city: "Bydgoszcz", href: "/uslugi/pozycjonowanie/bydgoszcz" },
              { city: "Radom", href: "/uslugi/pozycjonowanie/radom" },
              { city: "Kielce", href: "/uslugi/pozycjonowanie/kielce" },
              { city: "Warszawa", href: "/uslugi/pozycjonowanie/warszawa" },
              { city: "Kraków", href: "/uslugi/pozycjonowanie/krakow" },
              { city: "Wrocław", href: "/uslugi/pozycjonowanie/wroclaw" },
            ].map((item) => (
              <Link
                key={item.city}
                to={item.href}
                className="bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors text-sm px-4 py-2 rounded-full font-medium"
              >
                {item.city}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              to="/uslugi/pozycjonowanie"
              className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
            >
              <ArrowRight className="w-3 h-3" /> Wszystkie pakiety pozycjonowania
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default PozycjonowanieTorun;
