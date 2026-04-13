import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe, Search, ShoppingCart, Palette, MessageSquare, TrendingUp, Phone, Headphones, ArrowRight, Sparkles, Target, Code2, Layers, Rocket, Star, Clock
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";
import { CityServicesGrid } from "@/components/sections/CityServicesGrid";
import { CityPricingCards } from "@/components/sections/CityPricingCards";
import { CityIntroSection } from "@/components/sections/CityIntroSection";
import { CityBenefitsSection } from "@/components/sections/CityBenefitsSection";
import { CityLinksSection } from "@/components/sections/CityLinksSection";

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetoweWalbrzych = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www dla firm z Wałbrzycha i Dolnego Śląska." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Nowoczesne strony z naciskiem na użytkownika." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z integracjami." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: TrendingUp, title: "Optymalizacja konwersji", desc: "Strony zamieniające odwiedzających w klientów." },
  ];

  const pricing = [
    { title: "Landing Page", desc: "Strona wizytówkowa prezentująca firmę", price: "od 2 000 zł", features: ["Do 5 podstron", "Responsywny design", "Podstawowe SEO", "Formularz kontaktowy", "Certyfikat SSL"] },
    { title: "Strona Firmowa", desc: "Rozbudowana strona z dodatkowymi funkcjami", price: "od 5 000 zł", popular: true, features: ["Do 15 podstron", "Zaawansowane SEO", "Blog firmowy", "Integracja social media", "System CMS", "Wsparcie techniczne"] },
    { title: "Sklep E-commerce", desc: "Platforma sprzedażowa z integracjami", price: "od 8 000 zł", features: ["Nieograniczona liczba produktów", "Panel administracyjny", "Integracje płatności", "Optymalizacja konwersji", "Narzędzia marketingowe"] },
  ];

  const processSteps = [
    { icon: Target, step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy w Wałbrzychu." },
    { icon: Palette, step: "02", title: "Projekt UX/UI", desc: "Zaprojektowanie strony z naciskiem na użyteczność i estetykę." },
    { icon: Code2, step: "03", title: "Programowanie", desc: "Profesjonalne tworzenie stron www z dbałością o kod." },
    { icon: Rocket, step: "04", title: "Testy i wdrożenie", desc: "Testujemy i uruchamiamy Twoją stronę internetową." },
  ];

  const caseStudies = [
    { title: "Apartamenty Chorwacja", category: "Strona rezerwacyjna", result: "+180% rezerwacji online", link: "/realizacje/apartamenty-chorwacja", image: apartamentyImg },
    { title: "Victory Cars", category: "Strona motoryzacyjna", result: "Nowoczesny design premium", link: "/realizacje/victory-cars", image: victoryCarsImg },
    { title: "Cute Dumpling", category: "Strona gastronomiczna", result: "+250% ruchu organicznego", link: "/realizacje/cute-dumpling", image: cuteDumplingImg },
  ];

  const faqItems = [
    { question: "Ile kosztuje strona internetowa w Wałbrzychu?", answer: "Ceny stron zaczynają się od 2000 zł za wizytówkę. Strony firmowe od 5000 zł, sklepy od 8000 zł. Dokładna wycena zależy od zakresu projektu i wymagań." },
    { question: "Jak długo trwa realizacja strony?", answer: "Prosta strona wizytówka to 1-2 tygodnie. Strona firmowa wymaga 3-4 tygodni, a sklep 4-8 tygodni w zależności od złożoności." },
    { question: "Czy oferujecie hosting i domenę?", answer: "Tak, pomagamy w wyborze i konfiguracji hostingu oraz domeny. Możemy przejąć pełną obsługę techniczną." },
    { question: "Czy strona będzie zoptymalizowana pod SEO?", answer: "Każda strona tworzona jest z myślą o pozycjonowaniu. Stosujemy najlepsze praktyki SEO dla widoczności w Google." },
    { question: "Czy mogę samodzielnie edytować treści?", answer: "Tak, wszystkie strony wyposażone są w intuicyjny panel CMS do łatwej edycji treści." },
    { question: "Jakie miasta z Dolnego Śląska obsługujecie?", answer: "Tworzymy strony dla firm z całego Dolnego Śląska — Wałbrzych, Wrocław, Jelenia Góra, Legnica, Bolesławiec i okolic." },
  ];

  const stats = [
    { value: "200+", label: "Zrealizowanych projektów", icon: Layers },
    { value: "98%", label: "Zadowolonych klientów", icon: Star },
    { value: "5 lat", label: "Doświadczenia", icon: Clock },
    { value: "24/7", label: "Wsparcie techniczne", icon: Headphones },
  ];

  const benefits = [
    "Znajomość rynku dolnośląskiego",
    "Kompleksowa obsługa od projektu po wdrożenie",
    "SEO w standardzie każdej strony",
    "Responsywny design mobile-first",
    "Wsparcie techniczne po uruchomieniu",
    "Konkurencyjne ceny bez ukrytych kosztów"
  ];

  const introContent = {
    title: "Tworzenie stron www dla firm z Wałbrzycha",
    paragraphs: [
      "Szukasz profesjonalnego partnera do stworzenia strony internetowej dla Twojej firmy w Wałbrzychu? Nasza agencja specjalizuje się w projektowaniu i wdrażaniu nowoczesnych stron www.",
      "Wałbrzych to istotny ośrodek gospodarczy Dolnego Śląska z bogatą historią przemysłową. Współczesne firmy z Wałbrzycha potrzebują nowoczesnych stron internetowych, aby konkurować na rynku.",
      "Każda strona www jest tworzona z myślą o użytkowniku końcowym i zoptymalizowana pod kątem wyszukiwarek.",
      "Wałbrzych przechodzi transformację — od miasta przemysłowego do ośrodka turystyki i usług. Rosnąca liczba małych i średnich firm wymaga efektywnych narzędzi do pozyskiwania klientów, a profesjonalna strona to podstawa."
    ],
    videoSrc: "/videos/fotz-reel.mp4"
  };

  return (
    <>
      <SEOHead
        title="Strony Internetowe Walbrzych | Fotz Studio"
        description="Strony internetowe Walbrzych — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Wałbrzycha. Fotz Studio."
        canonical="https://fotz.pl/strony-internetowe/walbrzych"
        keywords="strony internetowe wałbrzych, tworzenie stron internetowych wałbrzych, strony www wałbrzych, projektowanie stron wałbrzych"
      />

      <ServiceSchema name="Strony Internetowe Walbrzych" description="Profesjonalne tworzenie stron internetowych dla firm z Wałbrzycha." provider="FOTZ Studio" areaServed="Walbrzych" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://fotz.pl" }, { name: "Strony Internetowe", url: "https://fotz.pl/strony-internetowe" }, { name: "Walbrzych", url: "https://fotz.pl/strony-internetowe/walbrzych" }]} />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <OrganizationSchema />

      <Layout>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"><Sparkles className="w-4 h-4" />Strony WWW Walbrzych<Sparkles className="w-4 h-4" /></span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
                Strony Internetowe{" "}<span className="text-gradient relative">Walbrzych</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                <strong className="text-foreground">Profesjonalna strona internetowa to podstawa sukcesu każdej firmy.</strong>{" "}Tworzymy strony www, które wyglądają świetnie i skutecznie pozyskują klientów dla firm z Wałbrzycha i Dolnego Śląska.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="group text-base px-8 py-6 shadow-lg shadow-primary/20"><Link to="/kontakt">Bezpłatna wycena<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="group text-base px-8 py-6 border-2"><a href="tel:+48790814814"><Phone className="mr-2 h-5 w-5" />+48 790 814 814</a></Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="group p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 transition-transform group-hover:scale-110" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CityIntroSection content={introContent} cityName="Walbrzych" />
        <CityBenefitsSection benefits={benefits} title="Dlaczego warto nam zaufać?" subtitle="Poznaj korzyści współpracy" cityName="Walbrzych" />
        <CityServicesGrid services={services} title="Nasze usługi" subtitle="Kompleksowe usługi tworzenia stron www dla wałbrzyskich firm" cityName="Walbrzych" />

        {/* Process */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">Proces</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Jak tworzymy strony?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">{item.step}</div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><item.icon className="w-7 h-7 text-primary" /></div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">Realizacje</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Nasze projekty</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index}>
                  <Link to={study.link} className="group block rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/10">
                    <div className="aspect-video overflow-hidden"><img loading="lazy" src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                    <div className="p-6">
                      <span className="text-primary text-sm font-medium">{study.category}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                      <p className="text-muted-foreground">{study.result}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CityPricingCards pricing={pricing} title="Cennik stron internetowych" subtitle="Transparentne ceny bez ukrytych kosztów" cityName="Walbrzych" />
        <CityLinksSection currentCity="Walbrzych" />

        {/* FAQ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">FAQ</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Najczęstsze pytania</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <AccordionItem value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-card/50">
                      <AccordionTrigger className="text-left hover:no-underline py-6"><span className="font-medium">{item.question}</span></AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">{item.answer}</AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* SEO Article Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Strony internetowe Walbrzych — tworzenie stron www dla firm z Dolnego Śląska
              </h2>
              <p className="text-muted-foreground mb-4">
                Wałbrzych przechodzi dynamiczną transformację. Miasto znane z bogatej historii przemysłowej i górnictwa teraz rozwija się w kierunku turystyki, małych przedsiębiorstw i usług. Hotele, restauracje, firmy edukacyjne, agencje — każda z nich potrzebuje nowoczesnej strony internetowej, aby dotrzeć do klientów online.
              </p>
              <p className="text-muted-foreground mb-6">
                Wałbrzych leży w Dolnym Śląsku, jednym z najszybciej rozwijających się regionów Polski. Nasza agencja ma doświadczenie w tworzeniu stron dla całego regionu — Wrocławia, Jeleniej Góry, Legnicy, Bolesławca. Znamy lokalny rynek i wiemy, jak pozycjonować firmy z Wałbrzycha.
              </p>

              <h2 className="text-3xl font-heading font-bold mb-6">
                Turystyka, rzemiosło i usługi — strony dla gospodarki Wałbrzycha
              </h2>
              <p className="text-muted-foreground mb-4">
                Wałbrzych przyciąga turystów zainteresowanych historią przemysłu, pałacami, muzami i pieknymi krajobrazami Gór Wałbrzyskich. Tworzymy strony dla hoteli, pensjonatów, przewodników turystycznych — strony z booking engine, galerią zdjęć, informacjami o atrakcjach.
              </p>
              <p className="text-muted-foreground mb-6">
                Dla firm rzemiosła i usług (hydraulicy, elektrycy, cieśle, instalacje) tworzymy strony pozyskujące zlecenia lokalne. Optymalizujemy pod frazy takie jak hydraulik Walbrzych, elektryk Walbrzych — pracy nie brakuje, ważne tylko aby klienci Was znaleźli.
              </p>

              <h2 className="text-3xl font-heading font-bold mb-6">
                SEO dla firm z Wałbrzycha i regionu Dolnego Śląska
              </h2>
              <p className="text-muted-foreground mb-4">
                Optymalizujemy strony pod słowa kluczowe z Wałbrzycha, ale też pod szerszy rynek Dolnego Śląska. Dla firm o zasięgu ogólnopolskim budujemy strukturę treści rankujące zarówno lokalnie jak i globalnie.
              </p>
              <p className="text-muted-foreground">
                Skontaktuj się z nami — bezpłatna wycena w 24 godziny, projekt w 3–5 tygodni. Tworzymy strony dla firm z Wałbrzycha, które wyróżniają się na tle dolnośląskiej konkurencji.
              </p>

              <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">Strony internetowe oferta</Link>
                <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">Landing page</Link>
                <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">Kampanie reklamowe</Link>
                <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">Social media</Link>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
};

export default StronyInternetoweWalbrzych;
