import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  Briefcase,
  TrendingUp,
  Zap,
  Globe,
  Leaf,
  BookOpen,
  DollarSign
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
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function TworzenieStronWarszawa() {
  const warsawCities = [
    "Warszawa",
    "Piaseczno",
    "Констancin-Jeziorna",
    "Milanówek",
    "Piastów",
    "Pruszków",
    "Nadarzyn",
    "Piastów",
  ];

  const industries = [
    {
      icon: Building2,
      title: "Finanse i bankowość",
      desc: "Strony dla banków, kas SKOK, agencji ubezpieczeniowych, doradców finansowych.",
      examples: "Produkty, kalkulatory, wnioski online"
    },
    {
      icon: DollarSign,
      title: "Nieruchomości",
      desc: "Portale deweloperskie, agencje nieruchomości, biura inwestycyjne.",
      examples: "Katalogi nieruchomości, wirtualne spacery, chatboty"
    },
    {
      icon: Briefcase,
      title: "Consulting i doradztwo",
      desc: "Strony dla firm consulting, audytu, doradztwa biznesowego, kancelarii.",
      examples: "Case studies, kalkulatory, książki białe"
    },
    {
      icon: Globe,
      title: "E-commerce i handel",
      desc: "Sklepy online, repozytoria handlowe, platformy B2B.",
      examples: "Sklepy, integracje z logistyką, CRM dla sprzedaży"
    },
    {
      icon: BookOpen,
      title: "Edukacja i szkolenia",
      desc: "Strony dla kursów online, szkół biznesu, platform edukacyjnych.",
      examples: "Portale uczestników, wideo on demand, certyfikaty"
    },
    {
      icon: Leaf,
      title: "Startup Tech",
      desc: "Strony dla startup'ów, scale-up'ów, firm technologicznych.",
      examples: "Landing pages produktów, API documentation"
    },
  ];

  const packages = [
    {
      title: "Wizytówka cyfrowa",
      price: "Od 499 zł",
      period: "jednorazowo",
      desc: "Prosta strona dla freelancerów i małych biznesów",
      features: [
        "3-5 podstron",
        "Responsywny design",
        "Formularz kontaktowy",
        "Podstawowe SEO",
        "Darmowy hosting 1 rok"
      ],
      cta: "Sprawdź"
    },
    {
      title: "Strona firmowa",
      price: "1 499 - 3 999 zł",
      period: "jednorazowo",
      desc: "Profesjonalna strona dla firmy średniej",
      features: [
        "Do 15 podstron",
        "Indywidualny design",
        "System CMS",
        "Blog",
        "Zaawansowane SEO",
        "Google Analytics"
      ],
      cta: "Sprawdź",
      highlight: true
    },
    {
      title: "Sklep e-commerce",
      price: "2 999 - 9 999 zł",
      period: "jednorazowo",
      desc: "Pełna platforma sprzedażowa",
      features: [
        "Nieograniczone produkty",
        "Płatności online",
        "Integracja kurierska",
        "Panel zarządzania",
        "Marketing automation",
        "Wsparcie przez 3 miesiące"
      ],
      cta: "Sprawdź"
    },
  ];

  const processSteps = [
    {
      icon: "📞",
      title: "Konsultacja",
      desc: "Rozmowa o Twojej firmie, celach biznesowych i budżecie.",
      time: "30 minut"
    },
    {
      icon: "🎨",
      title: "Design w Figma",
      desc: "Tworzymy mockup strony. Ty komentarz, zatwierdzasz każdy etap.",
      time: "Online kolaboracja"
    },
    {
      icon: "💻",
      title: "Kodowanie",
      desc: "Wdrażamy projekt w React + TypeScript. Pokazujemy preview na staging.",
      time: "Wideorozmowy"
    },
    {
      icon: "🚀",
      title: "Uruchomienie",
      desc: "Szkolenie w CMS-ie. Wsparcie przez 30 dni. Pełna właściwość Twoja.",
      time: "Szkolenie + support"
    },
  ];

  const warsawStats = [
    { value: "1.8M", label: "Mieszkańców" },
    { value: "~50k", label: "Zarejestrowanych firm" },
    { value: "Najwyższe", label: "Wydatki na IT w PL" },
    { value: "GPW", label: "Giełda Papierów Wartościowych" },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa w Warszawie?",
      answer: "Wizytówka cyfrowa: od 499 zł. Strona firmowa: 1 500-4 000 zł. Sklep online: 3 000-10 000 zł. Warszawskie firmy mają wyższe budżety, ale my pracujemy od najmniejszych do największych projektów. Wyceniamy indywidualnie - zapraszamy do bezpłatnej konsultacji."
    },
    {
      question: "Ile czasu zajmuje stworzenie strony?",
      answer: "Wizytówka: 2-3 tygodnie. Strona firmowa: 4-8 tygodni. Sklep: 8-12 tygodni. Warszawa = sporo konkretów, więc czasem dodatkowy czas na integracje (CRM, ERP, payment gateways). Nic się nie pospieszy na siłę."
    },
    {
      question: "Czy mogę mieć stronę SEO-optimized na dzień startu?",
      answer: "Każda strona tworzymy z SEO 'z góry': meta tagi, szybkość ładowania, responsywność, schema markup. Ale pozycjonowanie organiczne (Google TOP 3) to proces 6-12 miesięcy. Jeśli chcesz szybko → Google Ads. Jeśli chcesz organicznie → SEO + cierpliwość."
    },
    {
      question: "Czy strona będzie dostępna dla niewidomych i słabowidzących?",
      answer: "Tak, projektujemy z WCAG 2.1 AA w umyśle. Kontrast, tagi alt dla zdjęć, nawigacja klawiaturą, screen reader friendly. To nie tylko 'OK' ethicznie - to też SEO ranking boost."
    },
    {
      question: "Jakie technologie używacie?",
      answer: "WordPress (70% warszaw. firm), React (dla startup'ów), Shopify (dla e-commerce). My najczęściej polecamy React dla firm chcących szybkość + Webflow dla wizualno-ciężkich projektów. Wszystkie opcje mają pros/cons, polecamy na podstawie Twoich potrzeb."
    },
    {
      question: "Czy będę mieć pełne dostępy do strony?",
      answer: "Tak. Otrzymasz: dostęp do domeny, FTP, panel hostingu, backup bazy danych, dostęp do CMS-a. Twoja strona, Twoje dane. W każdej chwili możesz zmienić agencję - strona będzie całkowicie Twoja. To podstawa."
    },
    {
      question: "Czy wspieracie integracje z moimi systemami (CRM, ERP)?",
      answer: "Tak. Pracowaliśmy z HubSpot, Pipedrive, SAP, JoinSoft. Najczęstsze: CRM dla sprzedaży, systemy logistyczne dla e-commerce, analizy biznesowe. Każdą integrację wyceniamy osobno - zależy od złożoności API."
    },
    {
      question: "Czy mogę mieć support po uruchomieniu?",
      answer: "30 dni wsparcia wliczone w cenę. Potem: pakiet basic (100 zł/miesiąc - konsultacje), standard (300 zł/miesiąc - zmiany + backupy), premium (500 zł/miesiąc - pełna opieka). Warszawskie firmy często biorą pakiet premium."
    },
  ];

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Tworzenie stron", href: "/uslugi/tworzenie-stron-internetowych" },
    { label: "Warszawa" },
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych Warszawa | Profesjonalne strony WWW | fotz.pl"
        description="Tworzymy profesjonalne strony internetowe w Warszawie. Agencja z doświadczeniem, realizacje na czas. Od 499 zł netto. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/tworzenie-stron-internetowych/warszawa"
        ogImage="https://fotz.pl/og-warszawa.jpg"
      />
      <ServiceSchema
        name="Tworzenie stron internetowych Warszawa"
        description="Profesjonalne tworzenie stron internetowych dla firm z Warszawy"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">WARSZAWA</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tworzenie stron internetowych Warszawa — agencja z wynikami
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                1.8 mln mieszkańców, 50k+ zarejestrowanych firm, najwyższe wydatki na IT w Polsce.
                Warszawa to biznesowe serce Polski. My obsługujemy warszawskie firmy, startup'y, korporacje.
                Szybko, profesjonalnie, z wynikami.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {warsawStats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Bezpłatna wycena <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Coverage */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Obsługujemy całą Warszawę i metropolię
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Pracujemy z firmami ze wszystkich dzielnic i okolic Warszawy
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {warsawCities.map((city, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-gradient-to-br from-blue-50 to-slate-50 p-4 rounded-lg border border-blue-200 text-center"
                  >
                    <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-slate-900">{city}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-4">Warszawa — biznesowe serce Polski</h3>
                <p className="text-slate-700 mb-4">
                  Warszawa to nie tylko najduższe miasto w Polsce, to centrum decyzyjne. PKN Orlen, KGHM, mBank, Bank Pekao, TVP, Allegro, OLX.
                  Giełda Papierów Wartościowych. Ministerstwa. Siedziby korporacji międzynarodowych.
                </p>
                <p className="text-slate-700">
                  <strong>Co to dla Ciebie oznacza?</strong> Firmy z Warszawy mają budżet, wiedzą czego chcą, oczekują szybkości i jakości.
                  My pracujemy w tamtym tempie. Szybkie sprinty, transparentna komunikacja, rezultaty w terminie.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why Warsaw businesses need websites */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Dlaczego warszawskie firmy potrzebują profesjonalnej strony?
              </h2>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Oczekiwania były wysokie</h3>
                  <p className="text-slate-700 mb-4">
                    W Warszawie każdy ma smartfon, każdy szuka przedsiębiorstwa online. Jeśli Twoja strona jest stara lub nie istnieje,
                    klient idzie do konkurencji.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Profesjonalna strona to minimum, aby być konkurencyjnym w Warszawie.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">SEO = leadsy + sprzedaż</h3>
                  <p className="text-slate-700 mb-4">
                    Warszawa to 1.8 mln potencjalnych klientów. Gdy ktoś szuka "twojej-usługi warszawa", chcesz być w Top 3.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Strona + SEO = leadsy każdego dnia, bez reklamy.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Startup'y zdobywają finansowanie</h3>
                  <p className="text-slate-700 mb-4">
                    Inwestorzy VC, aniołowie biznesu, venture capital funds - wszyscy szukają startup'ów w Warszawie.
                    Strona + demo = funduszu szansa.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Fałszywy czy prawdziwy startup to strona internetowa.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">💼</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">B2B sprzedaż dla korporacji</h3>
                  <p className="text-slate-700 mb-4">
                    Duże firmy szukają dostawców online, czytaj case studies, sprawdzaj portfolio. Strona to Twoja wizytówka.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Bez strony = bez kontaktu z korporacyjnymi decydentami.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Industries */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Branże, które obsługujemy w Warszawie
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Warszawa to różne branże. My mamy doświadczenie z każdą z nich.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, idx) => {
                  const Icon = industry.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.05}>
                      <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                        <Icon className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{industry.title}</h3>
                        <p className="text-slate-700 text-sm mb-4">{industry.desc}</p>
                        <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded border border-blue-200">
                          <strong>Przykład:</strong> {industry.examples}
                        </div>
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
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Pakiety dla warszawskich firm
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Od startupu do korporacji. Każdy pakiet zawiera wsparcie i szkolenie.
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
                        : "bg-white border border-slate-200 text-slate-900"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className="mb-6">
                      <div className={`text-3xl font-bold ${pkg.highlight ? "text-white" : "text-blue-600"}`}>
                        {pkg.price}
                      </div>
                      <div className={`text-sm ${pkg.highlight ? "text-blue-100" : "text-slate-500"}`}>
                        {pkg.period}
                      </div>
                    </div>
                    <p className={`mb-6 text-sm ${pkg.highlight ? "text-blue-100" : "text-slate-600"}`}>
                      {pkg.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            pkg.highlight ? "text-white" : "text-blue-600"
                          }`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        pkg.highlight
                          ? "bg-white text-blue-600 hover:bg-slate-100"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {pkg.cta} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Process */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Jak pracujemy z warszawskimi firmami?
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Szybko, transparentnie, online. Bez marnotrawienia czasu.
              </p>

              <div className="space-y-8">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="text-4xl flex-shrink-0">{step.icon}</div>
                    <div className="flex-grow pt-2">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-slate-700">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Efekt: Strona na czas + Twoja pełna kontrola + gotowość do biznesu
                </h3>
                <p className="text-green-900">
                  Warszawa to tempo biznesu. My się do tego dostosowaliśmy. Sprint-driven development, daily standupy,
                  weekly demo. Widzisz postępy, dajesz feedback, robimy poprawki. Pełna transparentność.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Odpowiadamy na Wasze pytania
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Najczęstsze pytania od warszawskich firm
              </p>

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

        {/* CTA */}
        <ContactSection
          heading="Gotów na profesjonalną stronę?"
          subheading="Specjalista z doświadczeniem warszawskich projektów czeka na Twoją wiadomość. Konsultacja jest bezpłatna, bez zobowiązań."
        />
      </Layout>
    </>
  );
}
