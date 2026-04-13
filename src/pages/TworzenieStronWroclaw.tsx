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

export default function TworzenieStronWroclaw() {
  const wroclawCities = [
    "Wrocław",
    "Sobótka",
    "Siechnice",
    "Długołęka",
    "Żórawina",
    "Leśnica",
    "Ołbin",
    "Psie Pole",
  ];

  const industries = [
    {
      icon: Building2,
      title: "Technologia (Silicon Valley of Poland)",
      desc: "Siemens, Nokia, Volvo IT, Capgemini, IBM - Wrocław to tech hub. Strony dla software house'ów, scaleupów, firm IT.",
      examples: "Landing pages produktów, API docs, recruitment portals"
    },
    {
      icon: DollarSign,
      title: "BPO i outsourcing",
      desc: "Firmy back-office, call centers, usługi księgowe. Duże international operations.",
      examples: "Strony korporacyjne, job portals, case studies"
    },
    {
      icon: Briefcase,
      title: "E-commerce i handel",
      desc: "Sklepy online, platformy B2C, startupowe projekty retail.",
      examples: "Sklepy, marketplace integration, logistics"
    },
    {
      icon: BookOpen,
      title: "Edukacja i szkolenia",
      desc: "Uniwersytet Wrocławski, PWr, 130k+ studentów. Platformy edukacyjne, kursy online.",
      examples: "LMS, wirtualne klasy, sprzedaż kursów"
    },
    {
      icon: Globe,
      title: "Turystyka i gościnność",
      desc: "Hotele, restauracje, hostel, atrakcje turystyczne. Wrocław przyciąga turystów.",
      examples: "Rezerwacje online, galerie, integracja OTA"
    },
    {
      icon: Leaf,
      title: "Startup ekosystem",
      desc: "Fundusze venture, akceleratory, incubatory. Dynamiczny startup ecosystem.",
      examples: "Pitch decks websites, investor portals, job boards"
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
      icon: "🤝",
      title: "Discovery call",
      desc: "Rozmowa o Twojej firmie, rynku, konkurentach, budżecie. Definiujemy scope projektu.",
      time: "30-45 minut"
    },
    {
      icon: "📐",
      title: "Wireframing w Figma",
      desc: "Tworzymy wireframy, mockupy. Ty masz dostęp, dajesz feedback live, zatwierdzasz.",
      time: "1 tydzień"
    },
    {
      icon: "💻",
      title: "Development w React/TS",
      desc: "Implementujemy design. Pokazujemy staging weekly. Sprint-driven approach.",
      time: "4-8 tygodni"
    },
    {
      icon: "🎓",
      title: "Training & Launch",
      desc: "Szkolenie w CMS-ie. Dokumentacja. Wsparcie przez 30 dni. Potem opcjonalne pakiety.",
      time: "Video training"
    },
  ];

  const wroclawStats = [
    { value: "640k", label: "Mieszkańców" },
    { value: "130k+", label: "Studentów (UWr, PWr)" },
    { value: "Silicon Valley", label: "Polski tech hub" },
    { value: "2016", label: "Europejska Stolica Kultury" },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona dla tech startupu?",
      answer: "Landing page MVP: 499-999 zł. Strona produktu: 1 500-4 000 zł. Platform (z backend): 5 000-15 000 zł+. Dla startup'ów często robimy flexible payment plans - rozumiemy że budżet jest ograniczony."
    },
    {
      question: "Czy pracujecie ze startup'ami bez budżetu?",
      answer: "Czasem. Jeśli projekt ma potencjał, możemy negocjować equity, revenue share, delayed payment. Ale pierwsza opcja: pieniądze upfront - to gwarantuje zaangażowanie obu stron."
    },
    {
      question: "Ile czasu zajmuje MVP dla tech startupu?",
      answer: "Landing page: 1-2 tygodnie. MVP z backendem: 6-12 tygodni. Zależy od features, integracji (API, payments, auth). Wrocławskie startup'y znają tempo - szybko, ale dobrze."
    },
    {
      question: "Czy potrzmecie integrację z AWS/Firebase/Stripe?",
      answer: "Oczywiście. Firebase, AWS, Stripe, Twilio, SendGrid, Auth0 - pracowaliśmy z wszystkimi. Każdą integrację wyceniamy osobno, ale to standard dla tech projektów."
    },
    {
      question: "Czy jesteście open source friendly?",
      answer: "Tak. Jeśli Twój projekt jest open source, możemy negocjować ceny. Dodatkowo: robimy dokumentację, contribution guides, community support. Wrocław = open source community."
    },
    {
      question: "Czy mogę mieć CI/CD pipeline skonfigurowany?",
      answer: "Tak. GitHub Actions, GitLab CI, CircleCI - konfigurujemy automatyczne deploy na staging i production. To standard dla każdego poważnego projektu."
    },
    {
      question: "Czy to mobile app czy web app?",
      answer: "Robimy web apps (React/TypeScript). Dla mobile apps (iOS/Android) polecamy Flutter lub React Native. Ale to osobna konwersacja - mówimy o Twoich użytkownikach i platform priorities."
    },
    {
      question: "Czy będę mieć dostęp do kodu?",
      answer: "Tak. Pełny dostęp do GitHub repo. Możesz zatrudnić innego dewelopera, zmienić agencję, zmodyfikować kod. To jest Twój projekt, my tylko pomagamy."
    },
  ];

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Tworzenie stron", href: "/uslugi/tworzenie-stron-internetowych" },
    { label: "Wrocław" },
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych Wrocław | Profesjonalne strony WWW"
        description="Tworzymy profesjonalne strony internetowe we Wrocławiu. Szybkie, responsywne strony dla firm z Dolnego Śląska. Od 499 zł. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/tworzenie-stron-internetowych/wroclaw"
        keywords="tworzenie stron internetowych wrocław, strony internetowe wrocław, tworzenie stron www wrocław, projektowanie stron internetowych wrocław, strony www wrocław, sklepy internetowe wrocław, projektowanie stron www wrocław, agencja webdesign wrocław, tworzenie stron wrocław, strona internetowa wrocław"
      />
      <ServiceSchema
        name="Tworzenie stron internetowych Wrocław"
        description="Profesjonalne tworzenie stron internetowych dla firm z Wrocławia"
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
                <span className="text-blue-400 font-semibold">WROCŁAW</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tworzenie stron internetowych Wrocław
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tworzenie stron internetowych Wrocław — profesjonalne strony www i sklepy internetowe dla firm z Wrocławia i Dolnego Śląska. Projektowanie stron internetowych Wrocław z nowoczesnym designem, optymalizacją SEO i full-stack wsparciem technicznym.
                Strony www Wrocław — tworzenie stron www dla wrocławskich startup'ów, software house'ów, e-commerce i firm B2B. Od 499 zł netto, bezpłatna wycena.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {wroclawStats.map((stat, idx) => (
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
                Obsługujemy Wrocław i Dolny Śląsk
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Firmy z całego Dolnego Śląska pracują z nami zdalnie
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {wroclawCities.map((city, idx) => (
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
                <h3 className="font-bold text-slate-900 mb-4">Wrocław — tech capital Dolnego Śląska</h3>
                <p className="text-slate-700 mb-4">
                  640k mieszkańców, ale tech ecosystem warty miliardy złotych. Siemens, Nokia, Volvo IT, Capgemini to tylko początek.
                  Uniwersytet Wrocławski (UWr) - 550 lat historii. Politechnika Wrocławska (PWr) - inżynierowie. Razem: 130k+ studentów.
                </p>
                <p className="text-slate-700">
                  <strong>Co to oznacza?</strong> Wrocław to miasto które myśli szybko. Startup'y, scale-upy, korporacyjne IT oddziały - wszyscy
                  oczekują wysokiej jakości, nowoczesnych technologii, szybkiego deployment'u. My się do tego dostosowaliśmy.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why Wroclaw businesses need websites */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Dlaczego wrocławskie firmy potrzebują profesjonalnej strony?
              </h2>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">💼</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">B2B sprzedaż do korporacji</h3>
                  <p className="text-slate-700 mb-4">
                    Siemens, Nokia, Capgemini szukają dostawców services. Pierwsze co robią? Google "company name wrocław".
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Bez strony = kontakt z dużymi kontrahentami się nie stanie.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Funding dla startup'ów</h3>
                  <p className="text-slate-700 mb-4">
                    VC fundusze, aniołowie biznesu szukają startup'ów w Wrocławiu. Inwestor patrzy na stronę jako first signal quality.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Profesjonalna strona = szansa na funding.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">🎓</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Recruitment talentów</h3>
                  <p className="text-slate-700 mb-4">
                    130k+ studentów szuka pracy. Tech talenty czytają Twoją stronę, sprawdzają czy chcą pracować u Ciebie.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Dobra strona + careers page = best engineers.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Tempo biznesu</h3>
                  <p className="text-slate-700 mb-4">
                    Wrocław to tempo szybkie. Startup'y i scale-upy pracują szybko. Potrzebujesz strony w 2 tygodnie, nie 3 miesiące.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    My pracujemy w takim tempie. Agile, sprint-based, daily standups.
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
                Branże, które obsługujemy we Wrocławiu
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Tech, edu, e-commerce, startup - my je znamy.
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
                Pakiety dla wrocławskich firm
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Od MVP do enterprise. Każdy pakiet zawiera wsparcie i szkolenie.
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
                Jak pracujemy z wrocławskimi firmami?
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Szybko, transparentnie, w tempie którego oczekujesz. Agile workflow, daily updates.
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
                  Efekt: Strona, którą możesz dumnie pokazać VC-om i klientom
                </h3>
                <p className="text-green-900">
                  Wrocław to miasto tech. My znamy standard. Nowoczesne technologie (React, TypeScript, serverless), security
                  (SSL, HTTPS, OWASP), performance (Lighthouse score 90+), DevOps (CI/CD, automated testing). To nie opcja, to standard.
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
                Najczęstsze pytania od wrocławskich firm
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
          subheading="Specjalista z doświadczeniem wrocławskich tech projektów czeka na Twoją wiadomość. Zapraszamy na rozmowę - online lub w biurze."
        />
      </Layout>
    </>
  );
}
