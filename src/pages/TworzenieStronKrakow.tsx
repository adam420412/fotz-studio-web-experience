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

export default function TworzenieStronKrakow() {
  const krakowCities = [
    "Kraków",
    "Wieliczka",
    "Tarnów",
    "Nowy Sącz",
    "Oświęcim",
    "Limanowa",
    "Bochnia",
    "Marcinowice",
  ];

  const industries = [
    {
      icon: Globe,
      title: "Turystyka i gościnność",
      desc: "Strony dla hoteli, pensjonatów, restauracji, agencji turystycznych, atrakcji turystycznych.",
      examples: "Rezerwacje online, galerie zdjęć, integracja z OTA (Booking.com, Airbnb)"
    },
    {
      icon: BookOpen,
      title: "Edukacja i kultura",
      desc: "Strony dla szkół, uniwersytetów (UJ, AGH, Uniwersytet Jagielloński), galerii, muzeów.",
      examples: "Portale uczniów, wirtualne wystawy, sprzedaż biletów"
    },
    {
      icon: Building2,
      title: "Tech i startup'y",
      desc: "Strony dla firm technologicznych, scale-up'ów, software house'ów.",
      examples: "Landing pages, API docs, portfolio projektów, job board"
    },
    {
      icon: DollarSign,
      title: "Nieruchomości i deweloperka",
      desc: "Portale deweloperskie, agencje nieruchomości, inwestycje. Kraków dynamicznie się rozwija.",
      examples: "Katalogi nieruchomości, wirtualne spacery 3D, kalkulator kredytu"
    },
    {
      icon: Briefcase,
      title: "Handel i e-commerce",
      desc: "Sklepy online, platformy handlowe, rynki cyfrowe.",
      examples: "Sklepy, integracje logistyczne, systemy zarządzania zapasami"
    },
    {
      icon: Leaf,
      title: "Usługi i rzemiosło",
      desc: "Strony dla fryzjerów, kosmetyczek, stolarzów, hydraulików, elektryków.",
      examples: "Rezerwacja wizyt online, galeria prac, cennik"
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
      icon: "👋",
      title: "Poznajemy się",
      desc: "Video call o Twojej firmie, wizji, konkurencji, budżecie. Czasem zapraszamy na kawę do naszego biura, ale nie musi być.",
      time: "30 minut"
    },
    {
      icon: "🎨",
      title: "Projektujemy w Figma",
      desc: "Wireframy, kolorystyka, typografia. Masz dostęp do Figma, dajesz feedback live.",
      time: "Kolaboracja online"
    },
    {
      icon: "💻",
      title: "Kodujemy w React",
      desc: "Wdrażamy design w React + TypeScript. Pokazujemy Ci preview na staging każdy tydzień.",
      time: "Sprinty tygodniowe"
    },
    {
      icon: "🚀",
      title: "Szkolenie i launch",
      desc: "Nauczamy Cię CMS-a. Wsparcie przez 30 dni. Następnie opcjonalne pakiety support.",
      time: "Video training"
    },
  ];

  const krakowStats = [
    { value: "800k", label: "Mieszkańców" },
    { value: "12M", label: "Turystów rocznie" },
    { value: "70k+", label: "Studentów (UJ, AGH)" },
    { value: "Druga", label: "Liczba firm w PL" },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona w Krakowie?",
      answer: "Wizytówka: od 499 zł. Strona firmowa: 1 500-4 000 zł. Sklep: 3 000-10 000 zł. Kraków ma różne branże - turystyka, tech, handel, edukacja. Każdy projekt wyceniamy indywidualnie po rozmowie o Twoich potrzebach."
    },
    {
      question: "Ile czasu zajmuje projekt?",
      answer: "Wizytówka: 2-3 tygodnie. Strona firmowa: 4-8 tygodni. Sklep: 8-12 tygodni. Dla turystyki (hotele, restauracje) czasem dodajemy integracje rezerwacyjne, co wydłuża projekt."
    },
    {
      question: "Czy jesteście w Krakowie stacjonarnie?",
      answer: "Pracujemy głównie zdalnie (Zoom, Figma, Slack), ale mamy biuro w Krakowie na Kazimierzu. Jeśli chcesz spotkania na żywo - no problem, zapraszamy."
    },
    {
      question: "Czy do hoteli i restauracji robicie rezerwacje online?",
      answer: "Tak! Dla branży turystycznej integrujemy: booking engines (rezerwacje bezpośrednio ze strony), połączenie z Booking.com/Airbnb, systemy zarządzania rezerwacjami. To dodatkowy koszt, ale zwraca się szybko."
    },
    {
      question: "Czy mogę sprzedawać produkty turystyczne na stronie?",
      answer: "Oczywiście. Sklep e-commerce z integracjami logistyki (InPost, DPD, DHL), płatności online, system zarządzania zapasami. Dla turystyki: sprzedaż pamiątek, biletów, paczek doświadczeń."
    },
    {
      question: "Jakie technologie dla jakich branż?",
      answer: "WordPress dla hoteli/restauracji (najprostsza obsługa). React dla tech/startup'ów (prędkość + elastyczność). Shopify dla e-commerce (bezpieczeństwo płatności). Każdą rekomendujemy na bazie Twoich potrzeb."
    },
    {
      question: "Czy strona będzie na mobilach?",
      answer: "Zawsze. Każda strona jest responsywna - wygląda dobrze na telefonie, tablecie, laptopie. SEO Google też pyta o mobile - bez responsywności nie ma dobrych rankingów."
    },
    {
      question: "Czy dostanę SEO-optimized stronę?",
      answer: "Tak, każda strona zawiera: meta tagi, szybkość ładowania, schema markup, sitemap. Ale pozycjonowanie organiczne to proces 6-12 miesięcy. Jeśli chcesz szybko → Google Ads. Jeśli chcesz organicznie → SEO + cierpliwość + dobre artykuły."
    },
  ];

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Tworzenie stron", href: "/uslugi/tworzenie-stron-internetowych" },
    { label: "Kraków" },
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych Kraków | Profesjonalne strony WWW"
        description="Tworzymy profesjonalne strony internetowe w Krakowie. Nowoczesne, responsywne strony dla firm. Od 499 zł. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/tworzenie-stron-internetowych/krakow"
        keywords="tworzenie stron internetowych kraków, strony internetowe kraków, tworzenie stron www kraków, projektowanie stron internetowych kraków, strony www kraków, sklepy internetowe kraków, projektowanie stron www kraków, agencja webdesign kraków, tworzenie stron kraków, strona internetowa kraków"
      />
      <ServiceSchema
        name="Tworzenie stron internetowych Kraków"
        description="Profesjonalne tworzenie stron internetowych dla firm z Krakowa"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

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
                <span className="text-blue-400 font-semibold">KRAKÓW</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tworzenie stron internetowych Kraków
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tworzenie stron internetowych Kraków — profesjonalne strony www i sklepy internetowe dla firm z Krakowa i Małopolski. Projektowanie stron internetowych Kraków z nowoczesnym designem, SEO i responsywnym kodem.
                Strony www Kraków dla hoteli, restauracji, startupów i e-commerce. 800k mieszkańców, 12 mln turystów — tworzenie stron www Kraków od 499 zł.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {krakowStats.map((stat, idx) => (
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
                Obsługujemy całą Kraków i Małopolskę
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Firmy z całej Małopolski pracują z nami zdalnie
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {krakowCities.map((city, idx) => (
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
                <h3 className="font-bold text-slate-900 mb-4">Kraków — miasto turystów, studentów i tech</h3>
                <p className="text-slate-700 mb-4">
                  800k mieszkańców, ale 12 mln turystów rocznie. Kraków to Rynek, Wawel, Kazimierz - to magnes na turystów z całego świata.
                  Jednocześnie: Uniwersytet Jagielloński (550 lat historii), AGH (inżynierowie), 70k+ studentów na uniwersytetach.
                </p>
                <p className="text-slate-700">
                  <strong>Dodaj do tego:</strong> Google Poland, IBM, Motorola, Nokia - Kraków to również tech hub. Startup'y, software house'y, agencje digitalne.
                  Zatem: turyści, studenci, tech. Każdy segment ma inne potrzeby, my je znamy.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why Krakow businesses need websites */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Dlaczego krakowskie firmy potrzebują profesjonalnej strony?
              </h2>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">🏨</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Turyści szukają Cię online</h3>
                  <p className="text-slate-700 mb-4">
                    12 mln turystów rocznie szuka hotelu, restauracji, atrakcji na Google, Booking, TripAdvisor.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Bez strony internetowej lub slabej strony = zero rezerwacji.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">🎓</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Studenci szukają pracy</h3>
                  <p className="text-slate-700 mb-4">
                    70k+ studentów szuka staży i pracy. Pierwsza rzecz? Google, LinkedIn, Twoja strona.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Dobra strona + careers page = najlepsi kandydaci.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">💻</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Tech ecosystem = współpraca B2B</h3>
                  <p className="text-slate-700 mb-4">
                    Google, IBM, Motorola, Nokia - wielkie firmy szukają dostawców usług lokalnie.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Portfolio na stronie = kontakt z korporacjami.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Dane real-time o Twoich klientach</h3>
                  <p className="text-slate-700 mb-4">
                    Bez strony = bez Google Analytics, bez danych o klientach, bez informacji o tym co działa.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Strona + GA4 = data-driven decyzje biznesowe.
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
                Branże, które obsługujemy w Krakowie
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Kraków to różne światów. My pracujemy w każdym z nich.
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
                Pakiety dla krakowskich firm
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Od hotelika do tech startupu. Każdy pakiet zawiera wsparcie i szkolenie.
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
                Jak pracujemy z krakowskimi firmami?
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Głównie zdalnie. Ale jeśli chcesz spotkania w biurze na Kazimierzu - jesteśmy dostępni.
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
                  Efekt: Krakowska strona, której możesz być dumny
                </h3>
                <p className="text-green-900">
                  Kraków to miasto z historią, z charakterem. My tworzymy strony, które odbijają to - piękne, nowoczesne, ale z duszą.
                  Lokalnie zoptymalizowane pod SEO, integracje z lokalnymi systemami rezerwacji (jeśli potrzeba), wsparcie w jaki znamy Kraków.
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
                Najczęstsze pytania od krakowskich firm
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
        />
      </Layout>
    </>
  );
}
