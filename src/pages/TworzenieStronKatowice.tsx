import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, CheckCircle2, Building2, Briefcase, TrendingUp, Zap, Globe, ShoppingCart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function TworzenieStronKatowice() {
  const breadcrumbs = [
    { name: "Strona główna", url: "https://fotz.pl" },
    { name: "Usługi", url: "https://fotz.pl/uslugi" },
    { name: "Tworzenie stron internetowych", url: "https://fotz.pl/uslugi/tworzenie-stron-internetowych" },
    { name: "Katowice", url: "https://fotz.pl/uslugi/tworzenie-stron-internetowych/katowice" }
  ];

  const stats = [
    { label: "300k+ mieszkańców", icon: MapPin },
    { label: "Metropolia GZM", icon: Building2 },
    { label: "Centrum Śląska", icon: Globe },
    { label: "Hub biznesowy", icon: TrendingUp }
  ];

  const packages = [
    {
      title: "Wizytówka",
      price: "od 499 zł",
      desc: "Strona wizytówkowa dla małych firm",
      features: [
        "Do 3 podstron",
        "Responsywny design",
        "Formularz kontaktowy",
        "Podstawowe SEO",
        "Certyfikat SSL"
      ]
    },
    {
      title: "Strona Firmowa",
      price: "1499-3999 zł",
      desc: "Rozbudowana strona z dodatkowymi funkcjami",
      popular: true,
      features: [
        "Do 15 podstron",
        "Zaawansowane SEO",
        "Blog firmowy",
        "Integracja social media",
        "System CMS",
        "Wsparcie techniczne"
      ]
    },
    {
      title: "Sklep e-commerce",
      price: "2999-9999 zł",
      desc: "Platforma sprzedażowa z integracjami",
      features: [
        "Nieograniczona liczba produktów",
        "Panel administracyjny",
        "Integracje płatności",
        "Optymalizacja konwersji",
        "Narzędzia marketingowe"
      ]
    }
  ];

  const industries = [
    { title: "Górnictwo i energetyka", icon: Zap },
    { title: "Automotive i przemysł", icon: Building2 },
    { title: "IT i nowe technologie", icon: Globe },
    { title: "Usługi B2B", icon: Briefcase },
    { title: "Handel", icon: ShoppingCart },
    { title: "Gastronomia i rozrywka", icon: TrendingUp }
  ];

  const nearbyAreas = [
    "Katowice", "Gliwice", "Bytom", "Zabrze",
    "Sosnowiec", "Chorzów", "Tychy", "Rybnik"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analiza biznesu",
      desc: "Poznajemy Twoją firmę, cele i konkurencję na Śląsku"
    },
    {
      step: "02",
      title: "Projekt UX/UI",
      desc: "Projektujemy stronę z naciskiem na użyteczność"
    },
    {
      step: "03",
      title: "Programowanie",
      desc: "Tworzymy nowoczesną stronę w technologiach React/Next.js"
    },
    {
      step: "04",
      title: "Wdrożenie i SEO",
      desc: "Optymalizujemy pod wyszukiwarki i uruchamiamy"
    }
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa w Katowicach?",
      answer: "Ceny zaczynają się od 499 zł za wizytówkę, strony firmowe od 1499 zł, sklepy od 2999 zł. Dokładna wycena zależy od zakresu i funkcjonalności projektu. Oferujemy bezpłatną konsultację dla firm z całej metropolii GZM."
    },
    {
      question: "Jak długo trwa realizacja strony na Śląsku?",
      answer: "Wizytówka to 1-2 tygodnie, strona firmowa 3-4 tygodnie, sklep 4-8 tygodni. Czas zależy od złożoności i liczby podstron."
    },
    {
      question: "Czy strona będzie zoptymalizowana pod SEO?",
      answer: "Tak, każda strona zawiera pełną optymalizację SEO - słowa kluczowe, meta tagi, strukturę headingów i responsywny design. Wspomagamy widoczność w Google dla fraz takich jak 'strony internetowe Katowice'."
    },
    {
      question: "Czy oferujecie wsparcie po uruchomieniu?",
      answer: "Tak, oferujemy wsparcie techniczne po wdrożeniu oraz opiekę SEO. Możemy przejąć pełną obsługę hostingu i domeny."
    },
    {
      question: "Czy mogę samodzielnie edytować treści na stronie?",
      answer: "Wszystkie strony wyposażone są w intuicyjny panel CMS. Możesz edytować treści bez wiedzy technicznej."
    },
    {
      question: "Czy pracujecie z firmami z branży automotive?",
      answer: "Tak, mamy doświadczenie w tworzeniu stron dla firm z branży automotive, maszyn i produkcji. Rozumiemy specyficzność branży i potrzeby B2B sektora na Śląsku."
    }
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych Katowice | Profesjonalne strony WWW | fotz.pl"
        description="Tworzenie stron internetowych Katowice i Śląsk — profesjonalne strony dla firm. Od 499 zł netto. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/tworzenie-stron-internetowych/katowice"
        keywords="tworzenie stron internetowych katowice, strony internetowe katowice, tworzenie stron www katowice, projektowanie stron internetowych katowice, strony www katowice, strony internetowe śląsk, tworzenie stron katowice, strona internetowa katowice, projektowanie stron katowice, sklep internetowy katowice"
      />
      <ServiceSchema name="Tworzenie stron internetowych Katowice" description="Profesjonalne tworzenie stron internetowych dla firm z Katowic, Śląska i metropolii GZM." areaServed={["PL"]} />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"><MapPin className="w-4 h-4" />Tworzenie stron Katowice<MapPin className="w-4 h-4" /></span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
                Tworzenie stron internetowych{" "}<span className="text-gradient">Katowice</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                <strong className="text-foreground">Tworzenie stron internetowych Katowice — strony www dla firm z Katowic i całego Śląska.</strong> Tworzymy profesjonalne strony internetowe Katowice i sklepy online dla metropolii GZM, które przyciągają klientów i generują biznes. Projektowanie stron www Katowice od 499 zł.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="group text-base px-8 py-6 shadow-lg shadow-primary/20"><Link to="/kontakt">Bezpłatna wycena<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="group text-base px-8 py-6 border-2"><a href="tel:+48790814814"><Globe className="mr-2 h-5 w-5" />+48 790 814 814</a></Button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }} className="group p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 transition-transform group-hover:scale-110" />
                    <div className="text-sm md:text-base font-semibold text-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <FadeInView>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 text-center">Tworzenie stron www dla firm z Katowic i Śląska</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>Katowice i metropolia GZM to serce gospodarczego Śląska. Firmy z branży automotive, górnictwa, energetyki, IT i handlu potrzebują nowoczesnych stron internetowych, aby konkurować na krajowym i międzynarodowym rynku.</p>
                  <p>Nasza agencja specjalizuje się w tworzeniu profesjonalnych stron www dla firm z Katowic, które budują markę i generują rzeczywiste wyniki biznesowe — leady, sprzedaż i wzrost zainteresowania.</p>
                  <p>Każda strona jest tworzona z myślą o użytkowniku końcowym i zoptymalizowana pod wyszukiwarki. Pracujemy z firmami w Katowicach, Gliwicach, Zabrzu, Chorzowie i całej metropolii GZM.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Industries */}
        <FadeInView>
          <section className="py-24 bg-card/30">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Branże, w których pracujemy</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Obsługujemy firmy z różnych sektorów gospodarki na Śląsku i w metropolii GZM</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {industries.map((industry, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all">
                    <industry.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold">{industry.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Packages */}
        <FadeInView>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">Cennik</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Pakiety stron internetowych</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Od 499 zł netto. Transparentne ceny bez ukrytych kosztów</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {packages.map((pkg, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`rounded-2xl border transition-all p-8 ${pkg.popular ? "border-primary/50 bg-gradient-to-br from-primary/5 to-primary/2 relative ring-2 ring-primary/20" : "border-border/50 bg-card/30"}`}>
                    {pkg.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">Najpopularniejszy</div>}
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-muted-foreground mb-4">{pkg.desc}</p>
                    <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      <Link to="/kontakt">Zamów teraz</Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Process */}
        <FadeInView>
          <section className="py-24 bg-card/30">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">Proces</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Jak tworzymy strony?</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {processSteps.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative">
                    <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full">
                      <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-4">{item.step}</div>
                      <h3 className="text-xl font-semibold mb-3 relative -mt-12">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Nearby */}
        <FadeInView>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Obsługujemy również okoliczne miasta</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Projekty realizujemy dla firm z całej metropolii GZM i całego Śląska</p>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {nearbyAreas.map((area, index) => (
                  <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="p-4 rounded-xl bg-card border border-border/50 text-center font-medium hover:border-primary/30 transition-all">
                    {area}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-24 bg-card/30">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">FAQ</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Najczęstsze pytania</h2>
              </motion.div>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                      <AccordionItem value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-background/50">
                        <AccordionTrigger className="text-left hover:no-underline py-6"><span className="font-medium">{item.question}</span></AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6">{item.answer}</AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Related Cities */}
        <FadeInView>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Inne miasta, którym pomagamy</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                  <h3 className="text-xl font-semibold mb-4">Kraków</h3>
                  <p className="text-muted-foreground mb-6">Tworzenie stron internetowych dla firm w Krakowie i Małopolsce</p>
                  <Link to="/uslugi/tworzenie-stron-internetowych/krakow" className="text-primary hover:underline font-medium">Dowiedz się więcej →</Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                  <h3 className="text-xl font-semibold mb-4">Wrocław</h3>
                  <p className="text-muted-foreground mb-6">Profesjonalne strony internetowe dla firm we Wrocławiu</p>
                  <Link to="/uslugi/tworzenie-stron-internetowych/wroclaw" className="text-primary hover:underline font-medium">Dowiedz się więcej →</Link>
                </motion.div>
              </div>
            </div>
          </section>
        </FadeInView>

        <ContactSection heading="Zamów stronę internetową na Śląsku" subheading="Obsługujemy firmy z całej metropolii GZM. Bezpłatna wycena." />
      </Layout>
    </>
  );
}
