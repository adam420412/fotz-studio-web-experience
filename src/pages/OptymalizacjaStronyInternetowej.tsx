import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Globe, Search, BarChart3, Target, Clock, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
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

const optimizationAreas = [
  { icon: Zap, title: "Szybkość ładowania", desc: "Redukcja czasu TTFB, minifikacja zasobów, kompresja obrazów." },
  { icon: BarChart3, title: "Core Web Vitals", desc: "LCP, FID/INP, CLS — metryki którymi Google rankinguje strony." },
  { icon: Globe, title: "Obrazy i media", desc: "Webp, lazy loading, responsywne rozmiary, WebP zamiast PNG/JPG." },
  { icon: Search, title: "Kod HTML/CSS/JS", desc: "Eliminacja nieużywanego kodu, tree-shaking, minifikacja, obfuskacja." },
  { icon: Target, title: "Cache i CDN", desc: "Buforowanie przeglądarki, cache serverowy, dystrybucja treści globalnie." },
  { icon: Clock, title: "Serwer i hosting", desc: "Szybki serwer, infrastruktura Cloud (Vercel, Cloudflare), HTTP/2, HTTP/3." },
  { icon: DollarSign, title: "Baza danych", desc: "Optymalizacja zapytań, indeksy, N+1 query fixes, caching wyników." },
  { icon: TrendingUp, title: "Mobile performance", desc: "Szybkość na sieci LTE, adaptacja obrazów, minimalne skrypty." }
];

const processSteps = [
  { num: 1, title: "Pomiar baseline", desc: "PageSpeed Insights, WebVitals, real user monitoring — określamy punkt wyjścia." },
  { num: 2, title: "Analiza", desc: "Identyfikujemy bottlenecks: obrazy, CSS, JS, serwer, baza. Tworzymy mapa problematycznych zasobów." },
  { num: 3, title: "Optymalizacja", desc: "Implementujemy zmiany: kompresja, lazy loading, kod splitting, cache. Działamy bez przerywania działania strony." },
  { num: 4, title: "Pomiar po", desc: "Powtarzamy testy, porównujemy wyniki z punktem wyjścia i dokumentujemy zmiany w Core Web Vitals." },
  { num: 5, title: "Raport", desc: "Dostarczamy szczegółowy raport: co zrobiliśmy, jakie ulepszenia, jakie czasy ładowania teraz" }
];

const packages = [
  {
    name: "Quick Fix",
    price: "Wycena indywidualna",
    type: "one-time",
    highlight: false,
    features: [
      "Analiza PageSpeed Insights",
      "Kompresja obrazów (lossy compression)",
      "Minifikacja CSS/JS",
      "Browser cache setup",
      "Raport z rekomendacjami"
    ],
    desc: "Szybka optymalizacja dla małych stron. Idealne na start, ale bez głębokich zmian."
  },
  {
    name: "Standard",
    price: "Wycena indywidualna",
    type: "one-time",
    highlight: false,
    features: [
      "Pełna analiza Core Web Vitals",
      "Konwersja do WebP + lazy loading",
      "Kod splitting i tree-shaking",
      "CDN implementacja",
      "Database query optimization",
      "Browser + Server cache",
      "Raport + konsultacja 1h",
      "Powtórne testy po 2 tyg."
    ],
    desc: "Kompletna optymalizacja dla stron średnich. Skalę poprawy pokazujemy w raporcie z pomiarów przed i po zmianach."
  },
  {
    name: "Enterprise",
    price: "Wycena indywidualna",
    type: "one-time",
    highlight: false,
    features: [
      "Analiza architekturalnych bottlenecks",
      "Re-architecture (jeśli konieczna)",
      "Custom performance solutions",
      "Monitoring i maintenance 3 mies.",
      "Obsługa skomplikowanych aplikacji",
      "Integracja z CI/CD pipeline",
      "Performance budget setup",
      "Miesięczny monitoring + raport"
    ],
    desc: "Zaawansowana optymalizacja dla app'ów i stron o wysokim ruchu. Dedykowana obsługa."
  }
];

const faqItems = [
  {
    question: "Ile czasu zajmuje optymalizacja strony?",
    answer: "Zależy od rozmiaru i stopnia skomplikowania strony — mała strona to zwykle krótsza praca niż rozbudowany sklep czy aplikacja. Termin ustalamy w ofercie po wstępnym pomiarze. Prace planujemy tak, aby strona pozostawała dostępna."
  },
  {
    question: "Czy optymalizacja może złamać moją stronę?",
    answer: "Ograniczamy to ryzyko: testujemy zmiany na środowisku testowym (staging), robimy kopię zapasową przed wdrożeniem i sprawdzamy stronę po publikacji. Jeśli coś działa inaczej niż przed zmianą, możemy przywrócić poprzednią wersję."
  },
  {
    question: "Co jeśli optymalizacja nie przyniesie efektów?",
    answer: "Nie obiecujemy konkretnego procentu poprawy, bo zależy on od punktu wyjścia, hostingu i technologii strony. Przed wyceną robimy pomiar i mówimy, gdzie widzimy realne pole do poprawy — a po pracach pokazujemy wyniki przed i po."
  },
  {
    question: "Czy lepiej optymalizować WordPress czy custom kod?",
    answer: "Custom kod zwykle optymalizuje się lepiej — więcej kontroli. WordPress wymaga pluginów (które mogą spowolnić). Optymalizacja WordPress to głównie: selected pluginy, cache pluginy, CDN, image optimization. Zwracamy się do rzeczy, które faktycznie działają."
  },
  {
    question: "Czy zmiana hostingu wpłynie na szybkość?",
    answer: "Może wpłynąć, ale zwykle to tylko część problemu — dużo zależy też od kodu, obrazów i skryptów. Jeśli hosting jest naprawdę słaby (shared hosting z 2000 stronami), zmiana na VPS lub Cloud rzeczywiście pomaga. Diagnozujemy, czy hosting jest problemem."
  },
  {
    question: "Jak często trzeba optymalizować stronę?",
    answer: "Po optymalizacji: raz w roku audyt. Jeśli dodajesz nowe funkcje czy treści, mogą pojawiać się nowe bottlenecks — warto monitorować. W pakiecie Enterprise: monitoring comiesięczny."
  }
];

export default function OptymalizacjaStronyInternetowej() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Optymalizacja strony internetowej | Fotz Studio"
          description="Optymalizacja strony internetowej — przyspieszamy Twoją stronę i poprawiamy Core Web Vitals. Sprawdź, co możemy zrobić!"
          canonical="https://www.fotz-studio.pl/uslugi/optymalizacja-strony-internetowej"
          keywords="optymalizacja strony internetowej, optymalizacja seo strony, przyspieszenie strony, core web vitals, optymalizacja wydajności strony, optymalizacja strony www"
        />

        <ServiceSchema
          name="Optymalizacja strony internetowej"
          description="Optymalizacja szybkości i Core Web Vitals — przyspieszamy Twoją stronę i porządkujemy kwestie techniczne istotne dla SEO i użytkowników."
          provider="Fotz Studio"
          areaServed="Polska"
        />

        <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Optymalizacja strony internetowej", url: "https://www.fotz-studio.pl/uslugi/optymalizacja-strony-internetowej" }
        ]}/>

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
                PERFORMANCE
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Optymalizacja strony internetowej — <span className="text-gradient">szybsza strona to lepsze doświadczenie użytkowników</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Wolna strona zniechęca użytkowników, a Core Web Vitals są jednym z sygnałów, które Google bierze pod uwagę. Mierzymy punkt wyjścia, usuwamy wąskie gardła i pokazujemy wyniki przed i po zmianach.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt?usluga=seo#formularz">
                    Bezpłatna konsultacja
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/seo/audyt">Audyt SEO i szybkości strony</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Co optymalizujemy */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Co optymalizujemy?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Poniżej znajdziesz 8 obszarów, na które patrzymy podczas optymalizacji Twojej strony.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {optimizationAreas.map((area, i) => (
                <FadeInView key={i} delay={i * 0.1} className="bg-card border rounded-xl p-6 hover:border-primary/40 transition-colors">
                  <area.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm">{area.desc}</p>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Core Web Vitals Explanation */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Core Web Vitals — co to i dlaczego Google się tym przejmuje?</h2>

            <div className="space-y-8">
              <FadeInView delay={0}>
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-xl font-heading font-bold mb-3">LCP — Largest Contentful Paint</h3>
                  <p className="text-muted-foreground mb-3">Czas, w jakim główny element strony (tekst, zdjęcie) pojawia się na ekranie. Google mierzy to z perspektywy użytkownika — czym szybciej, tym lepiej dla rankingu i konwersji.</p>
                  <p className="text-sm text-primary font-medium">Target: poniżej 2,5 sekundy (ideał: poniżej 1 sekundy)</p>
                </div>
              </FadeInView>

              <FadeInView delay={0.1}>
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-xl font-heading font-bold mb-3">FID/INP — First Input Delay / Interaction to Next Paint</h3>
                  <p className="text-muted-foreground mb-3">Responsywność: ile czasu upłynie między kliknięciem a pierwszą wizualną zmianą. Jeśli użytkownik kliknie przycisk i nic się nie dzieje przez 500ms, będzie sfrustrowany.</p>
                  <p className="text-sm text-primary font-medium">Target: poniżej 100ms (ideał: poniżej 50ms)</p>
                </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-xl font-heading font-bold mb-3">CLS — Cumulative Layout Shift</h3>
                  <p className="text-muted-foreground mb-3">Stabilność layoutu. Jeśli użytkownik czyta tekst, a nagle pojawia się ogłoszenie i tekst się przesunie, to zła UX. Google karze strony z niestabilnym layoutem.</p>
                  <p className="text-sm text-primary font-medium">Target: poniżej 0,1 (ideał: 0 zmian)</p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Proces optymalizacji */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-16 text-center">Jak wygląda proces optymalizacji?</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {processSteps.map((step, i) => (
                <FadeInView key={i} delay={i * 0.1} className="relative">
                  <div className="bg-card border rounded-xl p-6 h-full">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-3 mt-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-2 top-12 z-10">
                      <ArrowRight className="h-5 w-5 text-primary/40" />
                    </div>
                  )}
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Pakiety */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-4 text-center">Zakres optymalizacji</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">Wycenę przygotowujemy po wstępnym pomiarze. Zależy od rozmiaru strony, technologii (WordPress czy własny kod), hostingu i liczby problemów do rozwiązania.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {packages.map((pkg, i) => (
                <FadeInView
                  key={i}
                  delay={i * 0.1}
                  className={`relative rounded-xl border transition-all ${pkg.highlight ? 'md:scale-105 border-primary shadow-lg shadow-primary/20' : 'border-border'} bg-card`}
                >
                  {pkg.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Polecany zakres</span>
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-6">
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-8">{pkg.desc}</p>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full" variant={pkg.highlight ? "default" : "outline"}>
                      <Link to="/kontakt">Zapytaj o wycenę</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
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
        />
      </Layout>
    </>
  );
}
