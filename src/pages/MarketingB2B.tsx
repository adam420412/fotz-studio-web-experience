import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Globe,
  Target,
  BarChart3,
  Users,
  FileText,
  Mail,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

export default function MarketingB2B() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Marketing B2B" },
  ];

  const services = [
    {
      icon: FileText,
      title: "Content marketing B2B",
      desc: "Case studies, white papers, e-booki, webinary. Treści które budują autorytet i generują leady.",
    },
    {
      icon: Target,
      title: "LinkedIn Ads",
      desc: "Reklamy kierowane do decydentów po stanowisku, branży, wielkości firmy. W wielu branżach B2B to kluczowy kanał.",
    },
    {
      icon: Mail,
      title: "Email nurturing",
      desc: "Sekwencje emailowe budujące relacje z prospektami. Od zimnego leadu do gotowego klienta.",
    },
    {
      icon: Globe,
      title: "Landing pages B2B",
      desc: "Strony dedykowane konkretnym segmentom ICP. Wyższy współczynnik konwersji leadów.",
    },
    {
      icon: BarChart3,
      title: "SEO dla B2B",
      desc: "Pozycjonowanie na frazy które wpisują decydenci w trakcie researchu przed zakupem.",
    },
    {
      icon: Users,
      title: "Account-Based Marketing",
      desc: "Spersonalizowane kampanie targetowane na konkretne firmy i decydentów.",
    },
    {
      icon: Zap,
      title: "Marketing automation",
      desc: "Automatyzacja lead nurturingu, scoring prospektów, integracja z CRM.",
    },
  ];

  const packages = [
    {
      title: "Lead Gen Basic",
      price: "Wycena po rozmowie o zakresie",
      desc: "Start z marketing B2B",
      features: [
        "LinkedIn Ads (budżet reklamowy osobno)",
        "2 posty na LinkedIn/tydzień",
        "Email kampania (1 sekwencja)",
        "Monthly raport",
        "Podstawowe landing pages",
      ],
    },
    {
      title: "Growth B2B",
      price: "Wycena po rozmowie o zakresie",
      desc: "Skalowanie generacji leadów",
      features: [
        "LinkedIn Ads (budżet reklamowy osobno)",
        "Content marketing (4 artykuły/mies.)",
        "Email automation (3+ sekwencje)",
        "ABM dla wybranych kont kluczowych",
        "CRM integration",
        "Tygodniowy raport",
        "Konsultacja strategiczna 2x/mies.",
      ],
      highlight: true,
    },
    {
      title: "Enterprise B2B",
      price: "Wycena po rozmowie o zakresie",
      desc: "Pełny marketing B2B",
      features: [
        "Multi-channel strategy",
        "Dedykowany team B2B",
        "Webinary i eventi",
        "Case studies produkcja",
        "Sales enablement",
        "Full CRM + marketing automation",
        "Cotygodniowy call strategiczny",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Czym różni się marketing B2B od B2C?",
      answer:
        "B2B: dłuższy cykl decyzyjny (często wiele miesięcy), wielu decydentów, wyższa wartość transakcji, content edukacyjny ważniejszy niż emocjonalny, LinkedIn i email kluczowe. B2C: krótki cykl, jedna decyzja, social media i Google Ads priorytet. Strategia B2B wymaga cierpliwości i budowania relacji.",
    },
    {
      question: "LinkedIn czy Google Ads dla B2B?",
      answer:
        "LinkedIn jest w B2B mocnym kanałem — targeting po stanowisku, branży i wielkości firmy jest unikatowy. Google Ads sprawdza się dla frazy z intencją zakupu (np. 'oprogramowanie ERP cena'). Dla większości firm B2B rekomendujemy LinkedIn + content marketing jako fundament, z Google Ads jako uzupełnienie.",
    },
    {
      question: "Jak mierzyć skuteczność marketingu B2B?",
      answer:
        "Kluczowe metryki B2B: MQL (Marketing Qualified Leads), SQL (Sales Qualified Leads), koszt per lead, conversion rate lead-to-customer, pipeline value, CAC (Customer Acquisition Cost), LTV (Lifetime Value). Konfigurujemy dashboard w Google Analytics + CRM.",
    },
    {
      question: "Jakie treści działają najlepiej w B2B?",
      answer:
        "Case studies, webinary, white papers, e-booki, porównania produktów, ROI calculators, referencje klientów. Content musi edukować i budować zaufanie, nie sprzedawać na siłę.",
    },
    {
      question: "Po jakim czasie zobaczymy leady?",
      answer:
        "Kampanie LinkedIn Ads mogą dać pierwsze zapytania szybciej niż content marketing i SEO, które zwykle potrzebują kilku miesięcy. Nie podajemy sztywnych terminów ani liczby leadów, bo zależą od oferty, grupy docelowej, konkurencji i budżetu. Marketing B2B to gra długoterminowa — systematyczna optymalizacja kampanii i treści pomaga z czasem obniżać koszt pozyskania leadu.",
    },
    {
      question: "Jaki jest minimalny budżet na marketing B2B?",
      answer:
        "Budżet składa się z dwóch części: budżetu reklamowego płaconego bezpośrednio platformie (np. LinkedIn) oraz wynagrodzenia za obsługę i ewentualny content marketing. Wysokość obu zależy od wielkości grupy docelowej, liczby kanałów i zakresu treści — konkretną propozycję przygotowujemy po rozmowie o celach. Zbyt mały budżet reklamowy utrudnia zebranie danych do rzetelnej oceny kampanii, dlatego omawiamy go na starcie.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Marketing B2B | Strategie lead generation dla firm | FOTZ Studio"
        description="Marketing B2B — strategie lead generation, LinkedIn Ads, content marketing, email nurturing dla firm sprzedających innym firmom. Sprawdź ofertę!"
        canonical="https://www.fotz-studio.pl/uslugi/marketing-b2b"
        keywords="marketing b2b, marketing dla firm b2b, strategie marketingowe b2b, lead generation b2b, digital marketing b2b"
      />
      <ServiceSchema
        name="Marketing B2B"
        description="Kompleksowe strategie marketingowe dla firm działających na rynku B2B — lead generation, LinkedIn Ads, content marketing"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-blue-900 bg-opacity-50 text-blue-300 px-3 py-1 rounded-full text-sm mb-4">
                <Users className="w-4 h-4" />
                Specjaliści B2B
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Marketing B2B — lead generation i sprzedaż dla firm na rynku biznesowym
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Marketing B2B to inne zasady gry — dłuższy cykl sprzedaży, wielu decydentów, wyższe wartości transakcji.
                Tworzymy strategie które generują kwalifikowane leady i wspierają sprzedaż B2B.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "LinkedIn", label: "Dotarcie do decydentów" },
                  { value: "Content", label: "Edukacja przed zakupem" },
                  { value: "Email", label: "Nurturing leadów" },
                  { value: "CRM", label: "Pomiar od leada do sprzedaży" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/kontakt">
                  Bezpłatna analiza B2B <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why B2B is different */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Dlaczego marketing B2B jest trudniejszy?</h2>
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {[
                  { icon: TrendingUp, title: "Długi cykl decyzyjny", desc: "Decyzja zakupowa w B2B często trwa wiele miesięcy. Potrzebujesz strategii nurturingu która utrzyma zainteresowanie przez cały czas." },
                  { icon: Users, title: "Wielu decydentów", desc: "W decyzji B2B zwykle bierze udział kilka osób. Marketing musi docierać do CEO, CFO, IT, i użytkowników końcowych jednocześnie." },
                  { icon: FileText, title: "Potrzeba edukacji", desc: "Kupujący B2B chcą być edukowani, nie sprzedawani. Dużą część researchu robią samodzielnie, zanim skontaktują się z handlowcem." },
                  { icon: Target, title: "Wąska grupa docelowa", desc: "W B2B targetujesz ograniczoną grupę firm, nie miliony konsumentów. Każdy kontakt ma ogromną wartość. Personalizacja jest niezbędna." },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                      <Icon className="w-10 h-10 text-blue-600 mb-4" />
                      <h3 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-700">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Services */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nasze usługi marketingu B2B</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Kompleksowe działania marketingowe dostosowane do specyfiki rynku B2B.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.05}>
                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-blue-600 mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                        <p className="text-slate-600 text-sm">{service.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Packages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Przykładowe zakresy współpracy B2B</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Wycenę przygotowujemy po rozmowie o zakresie, kanałach i celach. Budżet reklamowy płacony platformom jest zawsze osobno.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-lg p-8 ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-2 border-blue-400 transform scale-105"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className={`text-2xl font-bold mb-2 ${pkg.highlight ? "text-white" : "text-blue-600"}`}>
                      {pkg.price}
                    </div>
                    <p className={`mb-6 text-sm ${pkg.highlight ? "text-blue-100" : "text-slate-600"}`}>{pkg.desc}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-blue-600"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Marketing B2B</h2>

              <FAQSchema items={faqItems} />

              <Accordion type="single" collapsible className="w-full bg-white rounded-lg">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
        />
      </Layout>
    </>
  );
}
