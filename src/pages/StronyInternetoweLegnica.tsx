import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Search, ShoppingCart, Palette, MessageSquare, TrendingUp, Phone, Headphones, ArrowRight, Sparkles, Target, Code2, Layers, Rocket, Star, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";
import { CityServicesGrid } from "@/components/sections/CityServicesGrid";
import { CityPricingCards } from "@/components/sections/CityPricingCards";
import { CityIntroSection } from "@/components/sections/CityIntroSection";
import { CityBenefitsSection } from "@/components/sections/CityBenefitsSection";
import { CityLinksSection } from "@/components/sections/CityLinksSection";

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetoweLegnica = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www dla firm z Legnicy i okolic." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Nowoczesne strony z naciskiem na użytkownika." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z integracjami." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i rozwiązania dedykowane." },
    { icon: TrendingUp, title: "Optymalizacja konwersji", desc: "Strony zamieniające odwiedzających w klientów." },
  ];

  const pricing = [
    { title: "Landing Page", desc: "Strona wizytówkowa", price: "od 2 000 zł", features: ["Do 5 podstron", "Responsywny design", "Podstawowe SEO", "Formularz kontaktowy", "Certyfikat SSL"] },
    { title: "Strona Firmowa", desc: "Rozbudowana strona firmowa", price: "od 5 000 zł", popular: true, features: ["Do 15 podstron", "Zaawansowane SEO", "Blog firmowy", "Social media", "System CMS", "Wsparcie"] },
    { title: "Sklep E-commerce", desc: "Platforma sprzedażowa", price: "od 8 000 zł", features: ["Nieograniczona liczba produktów", "Panel administracyjny", "Płatności online", "Optymalizacja", "Marketing"] },
  ];

  const processSteps = [
    { icon: Target, step: "01", title: "Brief i analiza", desc: "Poznajemy cele Twojej firmy w Legnicy." },
    { icon: Palette, step: "02", title: "Projekt UX/UI", desc: "Projektowanie z naciskiem na estetykę." },
    { icon: Code2, step: "03", title: "Programowanie", desc: "Profesjonalne tworzenie stron www." },
    { icon: Rocket, step: "04", title: "Testy i wdrożenie", desc: "Testujemy i uruchamiamy stronę." },
  ];

  const caseStudies = [
    { title: "Apartamenty Chorwacja", category: "Strona rezerwacyjna", result: "+180% rezerwacji", link: "/realizacje/apartamenty-chorwacja", image: apartamentyImg },
    { title: "Victory Cars", category: "Strona motoryzacyjna", result: "Design premium", link: "/realizacje/victory-cars", image: victoryCarsImg },
    { title: "Cute Dumpling", category: "Strona gastronomiczna", result: "+250% ruchu", link: "/realizacje/cute-dumpling", image: cuteDumplingImg },
  ];

  const faqItems = [
    { question: "Ile kosztuje strona internetowa w Legnicy?", answer: "Koszt zależy od zakresu. Wizytówka od 2000 zł, strona firmowa od 5000 zł, sklep od 8000 zł." },
    { question: "Jak długo trwa tworzenie strony?", answer: "Wizytówka 2-3 tygodnie, strona firmowa 4-6 tygodni, sklep 6-10 tygodni." },
    { question: "Czy oferujecie wsparcie po uruchomieniu?", answer: "Tak, zapewniamy wsparcie techniczne i pakiety serwisowe." },
    { question: "Czy strona będzie responsywna?", answer: "Wszystkie strony są w pełni responsywne, projektujemy mobile-first." },
    { question: "Czy pomagacie w pozycjonowaniu?", answer: "Każda strona jest zoptymalizowana pod SEO. Oferujemy też kompleksowe pozycjonowanie." },
  ];

  const stats = [
    { value: "200+", label: "Zrealizowanych projektów", icon: Layers },
    { value: "98%", label: "Zadowolonych klientów", icon: Star },
    { value: "12 lat", label: "Doświadczenia", icon: Clock },
    { value: "24/7", label: "Wsparcie techniczne", icon: Headphones },
  ];

  const benefits = ["Znajomość rynku Dolnego Śląska", "Kompleksowa obsługa", "SEO w standardzie", "Design mobile-first", "Wsparcie po uruchomieniu", "Konkurencyjne ceny"];

  const introContent = {
    title: "Tworzenie stron www dla firm z Legnicy",
    paragraphs: [
      "Szukasz profesjonalnego partnera do stworzenia strony internetowej? Nasza agencja specjalizuje się w projektowaniu nowoczesnych stron www.",
      "Legnica to ważne centrum biznesowe Dolnego Śląska. Twoja strona będzie efektywna w pozyskiwaniu klientów.",
      "Każda strona jest tworzona z myślą o użytkowniku i zoptymalizowana pod SEO.",
      "Legnica leży w centrum Zagłębia Miedziowego – regionu zdominowanego przez KGHM. To silna baza przemysłowa generująca zapotrzebowanie na usługi, dostawy i specjalistyczne rozwiązania – które można skutecznie promować online."
    ],
    videoSrc: "/videos/fotz-reel.mp4"
  };

  return (
    <>
      <SEOHead
        title="Strony Internetowe Legnica | Tworzenie i Projektowanie Stron WWW | Fotz Studio"
        description="Strony internetowe Legnica — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Legnicy. Fotz Studio."
        canonical="https://fotz.pl/uslugi/strony-internetowe/legnica"
        keywords="strony internetowe legnica, tworzenie stron www legnica, projektowanie stron legnica, agencja webdesign legnica, budowa strony legnica, strona internetowa legnica"
      />
      
      <ServiceSchema name="Strony Internetowe Legnica" description="Tworzenie stron internetowych dla firm z Legnicy." provider="FOTZ Studio" areaServed="Legnica" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://fotz.pl" }, { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" }, { name: "Legnica", url: "https://fotz.pl/uslugi/strony-internetowe/legnica" }]} />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <OrganizationSchema />


      <Layout>
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0"><div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" /><motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" /></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-5xl mx-auto">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"><Sparkles className="w-4 h-4" />Strony WWW Legnica<Sparkles className="w-4 h-4" /></span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8">Strony Internetowe{" "}<span className="text-gradient">Legnica</span></h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"><strong className="text-foreground">Strony internetowe Legnica — tworzenie stron www i sklepy internetowe.</strong>{" "}Projektowanie i tworzenie stron internetowych Legnica dla firm z Dolnego Śląska. Strony www Legnica od 499 zł — nowoczesne, responsywne i zoptymalizowane SEO.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="px-8 py-6"><Link to="/kontakt">Bezpłatna wycena<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="px-8 py-6"><a href="tel:+48790814814"><Phone className="mr-2 h-5 w-5" />+48 790 814 814</a></Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">{stats.map((stat, i) => (<div key={i} className="p-4 rounded-2xl bg-card/50 border border-border/50"><stat.icon className="w-6 h-6 text-primary mx-auto mb-2" /><div className="text-2xl font-bold">{stat.value}</div><div className="text-xs text-muted-foreground">{stat.label}</div></div>))}</div>
            </motion.div>
          </div>
        </section>

        <CityIntroSection content={introContent} cityName="Legnica" />
        <CityBenefitsSection benefits={benefits} title="Dlaczego warto nam zaufać?" subtitle="Korzyści współpracy" cityName="Legnica" />
        <CityServicesGrid services={services} title="Nasze usługi" subtitle="Kompleksowe usługi tworzenia stron" cityName="Legnica" />

        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-heading font-bold">Jak tworzymy strony?</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">{processSteps.map((item, i) => (<div key={i} className="p-8 rounded-2xl bg-background border border-border/50 relative"><div className="absolute top-0 right-0 text-8xl font-bold text-primary/5">{item.step}</div><div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6"><item.icon className="w-7 h-7 text-primary" /></div><h3 className="text-xl font-semibold mb-3">{item.title}</h3><p className="text-muted-foreground">{item.desc}</p></div>))}</div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-heading font-bold">Nasze projekty</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{caseStudies.map((study, i) => (<Link key={i} to={study.link} className="group block rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30"><div className="aspect-video overflow-hidden"><img loading="lazy" src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div><div className="p-6"><span className="text-primary text-sm font-medium">{study.category}</span><h3 className="text-xl font-semibold mt-2 mb-2">{study.title}</h3><p className="text-muted-foreground">{study.result}</p></div></Link>))}</div>
          </div>
        </section>

        <CityPricingCards pricing={pricing} title="Cennik stron internetowych" subtitle="Transparentne ceny" cityName="Legnica" />
        <CityLinksSection currentCity="Legnica" />

        <section className="py-24">
          <div className="container mx-auto px-4"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-heading font-bold">Najczęstsze pytania</h2></div>
            <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqItems.map((item, i) => (<AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-xl px-6 bg-card/50"><AccordionTrigger className="text-left py-6">{item.question}</AccordionTrigger><AccordionContent className="text-muted-foreground pb-6">{item.answer}</AccordionContent></AccordionItem>))}</Accordion></div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Tworzenie stron www Legnica — strony internetowe dla firm z Legnicy
            </h2>
            <p className="text-muted-foreground mb-4">
              Tworzenie stron www Legnica to nasza specjalność. Budujemy strony internetowe dla firm z Legnicy,
              które chcą zaprezentować centrum Dolnego Śląska z najlepszej strony i pozyskiwać klientów online.
              Stron to nasza pasja — każdy projekt realizujemy z zaangażowaniem, łącząc estetykę
              z funkcjonalnością i skutecznością w wynikach wyszukiwania Google.
            </p>
            <p className="text-muted-foreground mb-6">
              Nasze doświadczenie w projektowaniu stron obejmuje setki realizacji dla różnych branż.
              Strony internetowe dla klientów z Legnicy tworzymy zgodnie z najlepszymi praktykami SEO,
              UX i dostępności. Miasto Legnica to dynamiczne centrum biznesowe — Twoja strona www
              powinna dotrzymywać kroku tej dynamice.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Projektowanie stron internetowych Legnica — www dla Twojej firmy
            </h2>
            <p className="text-muted-foreground mb-4">
              Projektowanie stron internetowych Legnica to kompleksowy proces, który obejmuje
              strategię, projekt graficzny, kodowanie i optymalizację SEO. Strona www dla Twojej firmy
              powinna nie tylko wyglądać profesjonalnie, ale przede wszystkim konwertować
              odwiedzających w klientów.
            </p>
            <p className="text-muted-foreground mb-6">
              Tworząc stronę internetową z wykorzystaniem nowoczesnych technologii (React, Next.js,
              WordPress), dbamy o to, by strony wyświetlały się poprawnie na wszystkich urządzeniach.
              Inwestycja w rozwój Twojej firmy poprzez profesjonalną stronę internetową to jeden
              z najlepszych kroków dla biznesu w Legnicy.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Strony www i sklepy internetowe — CMS, kompleksowy projekt graficzny i profesjonalna strona
            </h2>
            <p className="text-muted-foreground mb-4">
              Strony www i sklepy internetowe dla firm z Legnicy tworzymy w oparciu o sprawdzone systemy
              CMS — WordPress, WooCommerce, Shopify i własne rozwiązania dedykowane. Kompleksowy projekt
              graficzny obejmuje identyfikację wizualną, layouty podstron i dobór typografii
              zgodnej z marką.
            </p>
            <p className="text-muted-foreground mb-6">
              Profesjonalna strona internetowa to fundament obecności online każdej firmy.
              Strony internetowych dla klientów z Legnicy budujemy tak, by były skalowalne,
              bezpieczne i łatwe w zarządzaniu. Projektowania stron www nie traktujemy
              jako jednorazowej usługi — jesteśmy partnerem na lata.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Jak stworzyć stronę — profesjonalny projekt, budujemy strony na miarę Twojego biznesu
            </h2>
            <p className="text-muted-foreground mb-4">
              Jak stworzyć stronę internetową, która wyróżni Twoją firmę w Legnicy? Profesjonalny
              projekt graficzny, dobra architektura informacji i optymalizacja pod Google to podstawy.
              Budujemy strony internetowe z myślą o Twoim biznesie — od prostych stron wizytówkowych
              po rozbudowane portale korporacyjne i sklepy e-commerce.
            </p>
            <p className="text-muted-foreground mb-6">
              Stron www Legnica tworzymy według sprawdzonego procesu: analiza celów → projektowanie
              stron www → kodowanie → testowanie → wdrożenie → optymalizacja SEO. Internetowych
              z wykorzystaniem najlepszych narzędzi i frameworków, co gwarantuje wysoką jakość
              i trwałość efektu dla Twojego biznesu.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Własna strona www i swojej strony www — zadbaj o swoją stronę
            </h2>
            <p className="text-muted-foreground mb-4">
              Zadbaj o swoją stronę www, zanim zrobi to Twoja konkurencja w Legnicy. Swojej strony
              internetowej nie warto odkładać — każdy dzień bez profesjonalnej strony to utracone
              leady i klienci. Twojego biznesu wizerunku w sieci nie możesz zostawić przypadkowi.
            </p>
            <p className="text-muted-foreground">
              Www dla Twojej firmy i swojej strony www to nie koszt, lecz inwestycja w rozwój
              Twojej firmy. Strony internetowych dla klientów z Legnicy dostarczamy regularnie, a każda
              z nich jest zaprojektowana z myślą o celach biznesowych właściciela. Swojej strony
              nie oddajemy bez dokładnych testów — kompleksowy odbiór projektu to nasz standard.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe — oferta</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default StronyInternetoweLegnica;
