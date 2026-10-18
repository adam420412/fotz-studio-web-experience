import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Building2, Globe, Target, MapPin, TrendingUp, Users, Award, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const services = [
  {
    icon: Globe,
    title: "Strony i sklepy internetowe",
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Zabrza. Szybkie, zoptymalizowane pod SEO i konwersję. Shopify, WooCommerce, Next.js — rozwiązania dla firm produkcyjnych, handlowych i usługowych."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Zabrze — zwiększamy widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO dla firm industrialnych, e-commerce i lokalnych biznesów na Górnym Śląsku."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie. Raportowanie ROAS i CPL. Budżet reklamowy ustalamy indywidualnie i płacisz go bezpośrednio Google."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Efektywne dla B2B, e-commerce i firm handlowych. Targeting dla firmy decydentów z Zabrza i regionu śląskiego."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Zabrze — obsługa Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, kampanie, community management. LinkedIn strategy dla firm produkcji, Facebook dla local awareness."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Dla startupów, firm produkcji i firm usług dla biznesu. Mocna identyfikacja zwiększa wiarygodność i przyciąga klientów."
  }
];

const faqItems = [
  {
    question: "Jakie wyzwania marketingowe stoi przed firmami z Zabrza?",
    answer: "Zabrze to importante centrum przemysłowe Górnego Śląska z bogatą historią (górnictwo węgla, produkcja stali). Dziś miasto się transformuje — coraz więcej firm handlowych, produkcji specjalistycznej, usług dla biznesu. Konkurencja rośnie, ale rynek jest mniej nasycony niż Kraków czy Warszawa. Dlatego przed startem analizujemy branżę i konkurencję każdej firmy."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Zabrza?",
    answer: "Tak — pracujemy z Poznania, firmy z Zabrza obsługujemy zdalnie. Współpraca przebiega online (Google Meet, Teams), a materiały i raporty udostępniamy na bieżąco. Ważne jest zrozumienie specyfiki firm produkcji, handlu i transformacji cyfrowej, która zachodzi w mieście."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Zabrzu?",
    answer: "Wycenę przygotowujemy po rozmowie o zakresie — zależy od liczby kanałów, zakresu treści i kreacji, stanu strony oraz częstotliwości raportów. Budżet reklamowy płacisz platformom osobno. Każdą wycenę poprzedzamy bezpłatną konsultacją."
  },
  {
    question: "Jakie kampanie reklamowe są najskuteczniejsze dla Zabrza?",
    answer: "W Zabrzu skuteczne są: Google Ads dla produktów i usług, LinkedIn Ads dla firm B2B, Facebook dla awareness lokalnego, SEO dla firm handlowych, kampanie retargeting dla e-commerce. Zabrze wymaga B2B i e-commerce focused podejścia. Strategię dobieramy do branży i celów konkretnej firmy."
  },
  {
    question: "Czym wyróżnia się Zabrze na rynku marketingowym Śląska?",
    answer: "Zabrze to miasto transformacji — od centrum górnictwa do nowoczesnego ośrodka handlowego i produkcyjnego. Rynek wymaga agencji znającej zarówno tradycyjne sektory (produkcja, handel) jak i cyfrowe trendy. To okazja dla firm, które chcą modernizować swój marketing i wykorzystać potencjał Górnego Śląska."
  },
  {
    question: "Czy oferujecie marketing dla firm produkcyjnych z Zabrza?",
    answer: "Tak — specjalizacja w marketingu dla firm produkcji i handlu. Projektujemy SEO dla produktów i usług, LinkedIn campaigns dla decydentów, Google Ads dla high-intent B2B leads, content marketing (product showcase, case studies). Rozumiemy wyzwania firm transformujących się cyfrowo."
  }
];

export default function AgencjaMarketingowaZabrze() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja marketingowa Zabrze - fotz studio | Marketing dla firm"
          description="Agencja marketingowa Zabrze. Fotz Studio — strony WWW, SEO, kampanie Google/Meta, social media dla firm z Zabrza. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/agencja-marketingowa/zabrze"
          keywords="agencja marketingowa zabrze, marketing internetowy zabrze, agencja reklamowa zabrze, seo zabrze"
        />

        <ServiceSchema
          name="Agencja Marketingowa Zabrze"
          description="Kompleksowe usługi marketingu internetowego dla firm z Zabrza — SEO, Google Ads, Meta Ads, social media, strony internetowe dla firm produkcji i handlu."
          provider="Fotz Studio"
          areaServed="Zabrze"
        />
        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Agencja Marketingowa Zabrze", url: "https://www.fotz-studio.pl/agencja-marketingowa/zabrze" }
          ]}/>
        <FAQSchema items={faqItems} />

        {/* Hero */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-gray-800/20 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-yellow-400" /> Pracujemy z Poznania — firmy z Zabrza obsługujemy zdalnie
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-yellow-400">Zabrze</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Zabrza. SEO, Google Ads, Meta Ads, social media, strony internetowe — wszystko w jednej agencji. Specjaliści w marketingu dla firm produkcji, handlu i usług.
              </p>

              <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Zabrze to centrum przemysłowe Górnego Śląska transformujące się w nowoczesny ośrodek handlowy. Miasta wymaga profesjonalnego podejścia do marketingu, mierzalnych wyników i ciągłej optymalizacji dostosowanej do branży.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-400/90 text-gray-900 font-semibold">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/realizacje">Zobacz nasze realizacje</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Usługi marketingowe dla firm z{" "}
                  <span className="text-yellow-400">Zabrza</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do rynku Zabrza — od startupów po firmy produkcji i handlu.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-yellow-400/30 transition-colors"
                  >
                    <service.icon className="w-10 h-10 text-yellow-400 mb-4" />
                    <h3 className="font-heading font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego Fotz Studio dla firm z{" "}
                  <span className="text-yellow-400">Zabrza?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w marketingu dla firm produkcji, handlu i usług.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Współpraca zdalna z Poznania",
                    desc: "Pracujemy z Poznania, firmy z Zabrza obsługujemy zdalnie. Przed startem analizujemy Twoją branżę i konkurencję, żeby dobrać działania do rynku."
                  },
                  {
                    icon: TrendingUp,
                    title: "Data-driven marketing",
                    desc: "Każda decyzja oparta na danych z GA4, Google Ads, Meta. Raportujemy ROAS, CPL, konwersje. Mierzymy to, co się liczy dla Twojego biznesu."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Masz stały kontakt z osobą prowadzącą Twój projekt. Nie rotujemy juniorów czy stażystów."
                  },
                  {
                    icon: Globe,
                    title: "Strategia dla miasta transformacji",
                    desc: "Zabrze rozwija się jako centrum handlowe i produkcji specjalistycznej. Działania dopasowujemy zarówno do firm z tradycyjnych sektorów, jak i do e-commerce."
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-background"
                  >
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Od czego zależy wycena
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nie mamy sztywnych pakietów — zakres i koszt ustalamy indywidualnie.
                </p>
              </div>

              <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-border/40 bg-card/20">
                <p className="text-muted-foreground mb-6">
                  Wycenę przygotowujemy po rozmowie o zakresie. Najczęściej zależy ona od:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "liczby kanałów (strona, SEO, Google Ads, Meta Ads, social media),",
                    "zakresu treści i kreacji, które przygotowujemy,",
                    "stanu obecnej strony i analityki,",
                    "częstotliwości raportów i konsultacji.",
                  ].map((factor, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      {factor}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-6">
                  Budżet reklamowy płacisz bezpośrednio platformom (Google, Meta), zawsze osobno od naszego wynagrodzenia.
                </p>
                <Button asChild className="w-full">
                  <Link to="/kontakt">Poproś o wycenę</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-yellow-400/20 to-gray-900/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Wyróżnij się na rynku Zabrza
              </h2>
              <p className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy konkurencję, Twoją sytuację i zaproponujemy efektywne działania marketingowe dla Twojego biznesu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-400/90 font-semibold">
                  <Link to="/kontakt">
                    Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <p className="text-white/50 text-xs mt-6">
                Bez sprzedaży pod presją
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Najczęstsze pytania — agencja marketingowa Zabrze
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-border/40 rounded-xl px-6 data-[state=open]:bg-yellow-400/5"
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
            </div>
          </div>
        </section>

        {/* Internal Linking */}
        <section className="py-12 border-t border-border/30 bg-card/20">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">
              Pozostałe miasta
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Agencja marketingowa Warszawa", to: "/agencja-marketingowa/warszawa" },
                { label: "Agencja marketingowa Kraków", to: "/agencja-marketingowa/krakow" },
                { label: "Agencja marketingowa Gdańsk", to: "/agencja-marketingowa/gdansk" },
                { label: "Agencja marketingowa Łódź", to: "/agencja-marketingowa/lodz" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-yellow-400/40 hover:text-yellow-400 transition-colors"
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
