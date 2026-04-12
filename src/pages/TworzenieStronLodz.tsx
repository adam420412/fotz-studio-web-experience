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
  DollarSign,
  Palette,
  Code,
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

export default function TworzenieStronLodz() {
  const lodzCities = [
    "Łódź",
    "Pabianice",
    "Zgierz",
    "Konstantynów Łódzki",
    "Aleksandrów Łódzki",
    "Ozorków",
    "Dobroć",
  ];

  const industries = [
    {
      icon: Building2,
      title: "E-commerce i fashion",
      desc: "Ansaer.com, Answear.com — to Łódź. Sklepy online dla mody, tekstyliów, akcesoriów.",
      examples: "Integracje Shopify, AI produkty, galerie zdjęć"
    },
    {
      icon: DollarSign,
      title: "Nieruchomości i deweloperzy",
      desc: "Portale deweloperskie, biura nieruchomości, inwestycje w mieście.",
      examples: "Katalogi projektów, wirtualne spacery 3D"
    },
    {
      icon: Briefcase,
      title: "Startup'y tech",
      desc: "Łódź to rosnący hub tech dla startup'ów. Szukają profesjonalnych stron.",
      examples: "Landing pages produktów, dokumentacja API"
    },
    {
      icon: Palette,
      title: "Agencje kreatywne",
      desc: "Łódź ma bogatą scenę designu. Portfolio, case studies, showreele.",
      examples: "Strony portfolio, galerie projektów"
    },
    {
      icon: BookOpen,
      title: "Edukacja i kursy",
      desc: "Uniwersytety, szkoły biznesu, kursy online dla zawodowego rynku.",
      examples: "Portale studentów, platformy e-learning"
    },
    {
      icon: Globe,
      title: "Manufacturing i przemysł",
      desc: "Łódź ma tradycję przemysłową. B2B strony dla producentów.",
      examples: "Katalogi produktów, integracje CRM/ERP"
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

  const lodzStats = [
    { value: "680k", label: "Mieszkańców" },
    { value: "Film School", label: "Światnej sławy" },
    { value: "Niska", label: "Cena gruntu/biur" },
    { value: "Tech Hub", label: "Rosnący ekosystem" },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa w Łodzi?",
      answer: "Wizytówka cyfrowa: od 499 zł. Strona firmowa: 1 500-4 000 zł. Sklep online: 3 000-10 000 zł. Łódź to miasto z rosnącym biznesem, ale niższe ceny niż Warszawa/Kraków. My pracujemy od najmniejszych do największych projektów — wyceniamy indywidualnie."
    },
    {
      question: "Ile czasu zajmuje stworzenie strony w Łodzi?",
      answer: "Wizytówka: 2-3 tygodnie. Strona firmowa: 4-8 tygodni. Sklep: 8-12 tygodni. Łódź to miasto szybkiego rozwoju biznesu, więc pracujemy w sprinterach. Pokazujemy postęp co tydzień."
    },
    {
      question: "Czy możemy pracować online z Łodzią?",
      answer: "Tak. Obsługujemy klientów z całej Polski, w tym z Łodzi. Format online: Google Meet, Figma na bieżące feedback, GitHub dla kodu. Dla Łodzkiego biznesu to standard — wszyscy pracują zdalnie/hybrydowo."
    },
    {
      question: "Jakie są trendy dla stron w Łodzi?",
      answer: "Łódź to miasto fashion/design. Trendy: dark mode, animacje, minimalizm, performance (szybkie ładowanie). E-commerce firmy chcą integracji z Instagramem + TikTok Shop. Tech startup'y — landing pages z pitch deckami."
    },
    {
      question: "Jakie branże rozkwitają w Łodzi?",
      answer: "E-commerce (Answear, Zaful — siedziby w Łodzi), tech startup'y, film/animacja (szkoła filmowa znana globalnie), design, agencje kreatywne. Dla każdej branży mamy doświadczenie i case studies."
    },
    {
      question: "Czy wspieracie integracje z systemami B2B?",
      answer: "Tak. Pracowaliśmy z HubSpot, Pipedrive, SAP, JoinSoft. Dla Łódzkiego biznesu manufacturing — integracje ERP/CRM to standard. Wyceniamy każdą integrację osobno."
    },
    {
      question: "Czy mogę mieć stronę SEO-optimized od startu?",
      answer: "Każda strona tworzymy z SEO 'z góry': meta tagi, szybkość, responsywność, schema markup. Ale ranking w Google (TOP 3) to 6-12 miesięcy. Jeśli chcesz szybko → Google Ads. Jeśli chcesz organicznie → SEO + cierpliwość."
    },
    {
      question: "Czy będę mieć pełne dostępy do strony?",
      answer: "Tak. Otrzymasz: dostęp do domeny, FTP, panel hostingu, backup bazy danych, dostęp do CMS-a. Twoja strona, Twoje dane. W każdej chwili możesz zmienić agencję — strona będzie całkowicie Twoja."
    },
  ];

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Tworzenie stron", href: "/uslugi/tworzenie-stron-internetowych" },
    { label: "Łódź" },
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych Łódź | Profesjonalne strony WWW | fotz.pl"
        description="Tworzymy profesjonalne strony internetowe w Łodzi. Nowoczesne strony dla firm z łódzkiego. Od 499 zł netto. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/tworzenie-stron-internetowych/lodz"
        ogImage="https://fotz.pl/og-lodz.jpg"
        keywords="tworzenie stron internetowych łódź, strony internetowe łódź, projektowanie stron łódź, agencja webdesign łódź"
      />
      <ServiceSchema
        name="Tworzenie stron internetowych Łódź"
        description="Profesjonalne tworzenie stron internetowych dla firm z Łodzi"
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
                <span className="text-blue-400 font-semibold">ŁÓDŹ</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tworzenie stron internetowych Łódź — nowoczesne rozwiązania dla Twojej firmy
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                680 tys. mieszkańców, rosnący hub tech, epicentrum e-commerce i designu w Polsce.
                Łódź rośnie szybciej niż kiedykolwiek. My pomagamy łódzkim firmom, startup'om i agencjom
                budować silną obecność online. Szybko, nowoczesnie, z wynikami.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {lodzStats.map((stat, idx) => (
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

        {/* City Intro */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Obsługujemy całą Łódź i okolicę
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Pracujemy z firmami ze wszystkich dzielnic Łodzi i powiatu
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {lodzCities.map((city, idx) => (
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
                <h3 className="font-bold text-slate-900 mb-4">Łódź — miasto transformacji, kreatywności i okazji biznesowych</h3>
                <p className="text-slate-700 mb-4">
                  Łódź przechodzi metamorfozę. Z miasta tekstyliów (post-industrial revival) do hub'u tech, e-commerce i designu.
                  Answear.com (fashion e-commerce unicorn) sbase'a tu. Zaful (miliardowa kompania) to też Łódź.
                  Film School — światniej sławy. Netflix, generacja startup'ów, agencje kreatywne.
                </p>
                <p className="text-slate-700">
                  <strong>Co to dla Ciebie oznacza?</strong> Łódź to emerging market dla digital. Konkurencja mniejsza niż w Warszawie,
                  ale potencjał biznesu OGROMNY. Strona + SEO + marketing = szansa być widocznym TERAZ, zanim konkurenci.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why Lodz businesses need websites */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Dlaczego łódzkie firmy potrzebują profesjonalnej strony?
              </h2>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Konkurencja szuka online</h3>
                  <p className="text-slate-700 mb-4">
                    Łódź rośnie. Nowe firmy, startup'y, duże korporacje. Wszyscy szukają dostawców/partnerów online.
                    Jeśli Ty ich nie masz na Google — idą do konkurencji.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Profesjonalna strona to minimum, aby być konkurencyjnym w Łodzi 2025.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">SEO = leadsy + sprzedaż bez reklam</h3>
                  <p className="text-slate-700 mb-4">
                    Łódź = 680k potencjalnych klientów. Gdy ktoś szuka "twoja-kategoria łódź", chcesz być w Top 3.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Strona + SEO = leadsy każdego dnia.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Startup'y i venture capital</h3>
                  <p className="text-slate-700 mb-4">
                    Łódź = rosnący ekosystem startup'ów. VC, angels, acceleratory szukają na Google. Strona + demo = szansa na finansowanie.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Bez strony = niewidoczni dla inwestorów.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">💼</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">E-commerce = trend nr 1</h3>
                  <p className="text-slate-700 mb-4">
                    Answear, Zaful, mniejsze sklepy — wszyscy rosną. Jeśli sprzedajesz — strona internetowa = zdecydowany must-have.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Sklep online = szansa na 10x przychód.
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
                Branże, które obsługujemy w Łodzi
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Łódź to różne branże. My mamy doświadczenie z każdą z nich.
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
                Pakiety dla łódzkich firm
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
                Jak pracujemy z łódzkimi firmami?
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Szybko, transparentnie, online. Sprint-driven process.
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
                  Łódź to rosnące tempo biznesu. My się do tego dostosowaliśmy. Weekly standupy, Figma na feedback,
                  preview stron co tydzień. Widzisz postępy, dajesz feedback, robimy poprawki. Transparentna współpraca.
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
                Najczęstsze pytania od łódzkich firm
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
          heading="Gotów na profesjonalną stronę dla Twojej firmy w Łodzi?"
          subheading="Specjalista z doświadczeniem łódzkich projektów czeka na Twoją wiadomość. Konsultacja jest bezpłatna, bez zobowiązań."
        />
      </Layout>
    </>
  );
}
