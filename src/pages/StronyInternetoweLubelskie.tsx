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

export default function StronyInternetoweLubelskie() {
  const regionalCities = [
    "Lublin",
    "Zamość",
    "Chełm",
    "Biała Podlaska",
    "Puławy",
    "Świdnik",
    "Łęczna",
    "Kraśnik",
    "Lubartów",
    "Hrubieszów",
  ];

  const industries = [
    {
      icon: Leaf,
      title: "Branża rolnicza",
      desc: "Strony dla producentów, sprzedawców nasion, maszyn rolniczych i usług rolnych.",
      examples: "Sprzedaż online, katalogi produktów, rezerwacja maszyn"
    },
    {
      icon: DollarSign,
      title: "Farmaceutyka",
      desc: "Serwisy dla producentów leków, aptek i hurtowni farmaceutycznych.",
      examples: "Katalogi produktów, integracja z systemami magazynowymi"
    },
    {
      icon: Briefcase,
      title: "Spożywcze",
      desc: "Strony dla producentów żywności, przetwórni i dystrybutorów.",
      examples: "E-commerce, certyfikaty, przepisy"
    },
    {
      icon: Globe,
      title: "Turystyka",
      desc: "Portale rezerwacyjne, strony hotelów, pensjonatów i atrakcji turystycznych.",
      examples: "Rezerwacje online, galerie zdjęć, integracja z OTA"
    },
    {
      icon: BookOpen,
      title: "Edukacja",
      desc: "Strony dla szkół, uniwersytetów (UMCS, KUL, UP, UM) i ośrodków szkoleniowych.",
      examples: "Portale uczniów, systemy rezerwacji klas, blogi edukacyjne"
    },
    {
      icon: Building2,
      title: "Usługi B2B",
      desc: "Serwisy dla firm usługowych: remontowe, consulting, IT, logistyka.",
      examples: "Katalogi usług, kalkulatory kosztów,case studies"
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
      price: "2 500 - 5 000 zł",
      period: "jednorazowo",
      desc: "Profesjonalna strona dla firmy średniej",
      features: [
        "Do 10 podstron",
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
      price: "5 000 - 15 000 zł",
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

  const remoteWorkHow = [
    {
      icon: "📞",
      title: "Wstępna konsultacja",
      desc: "Rozmowa przez Zoom/Meet o Twoim biznesie, celach i budżecie. Poznajemy się, wyjaśniamy szczegóły.",
      time: "30 minut"
    },
    {
      icon: "📋",
      title: "Zbieranie wymagań",
      desc: "Pracujemy w naszej dedykowanej platformie - wysyłamy briefs, zbieramy feedback na bieżąco.",
      time: "Asynchronicznie"
    },
    {
      icon: "🎨",
      title: "Design w Figma",
      desc: "Projekt tworzony w Figma (online). Masz dostęp, możesz komentować, zatwierdzać każdy etap.",
      time: "Czat + recenzje"
    },
    {
      icon: "🚀",
      title: "Wdrożenie online",
      desc: "Kodowanie i testowanie. Pokazujemy Ci preview na wersji testowej. Możesz zobaczyć, zanim uruchomimy na produkcji.",
      time: "Wideokanal"
    },
    {
      icon: "🎓",
      title: "Szkolenie",
      desc: "Teach you jak edytować treści w CMS przez wideorozmowę. Pokazujemy każdy krok.",
      time: "1-2 godziny"
    },
  ];

  const regionalStats = [
    { value: "2.1M", label: "Mieszkańców w Lubelskiem" },
    { value: "340k", label: "Ludzi w Lublinie" },
    { value: "100k+", label: "Studentów na uczelniach" },
    { value: "LSEZ", label: "Specjalna Strefa Ekonomiczna" },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa?",
      answer: "Koszt zależy od skomplikowania. Wizytówka cyfrowa (3-5 stron): od 499 zł. Strona firmowa (10+ stron): 2 500-5 000 zł. Sklep online: 5 000-15 000 zł. Każdy projekt wyceniamy indywidualnie. Zapraszamy do bezpłatnej konsultacji."
    },
    {
      question: "Jak długo trwa stworzenie strony?",
      answer: "Wizytówka: 2-3 tygodnie. Strona firmowa: 4-8 tygodni. Sklep: 8-12 tygodni. Czas zależy od złożoności i szybkości dostarczenia materiałów przez Ciebie. Pracujemy sprawnie, ale nie na szybkość - na jakość."
    },
    {
      question: "Czy pracujecie zdalnie z regionem lubelskim?",
      answer: "Tak, całkowicie. Pracujemy przez Zoom, Figma, Slack. Nie potrzebujemy spotkań na żywo - wszystko się odbywa online. Czasem zapraszamy klientów z Lublina na kawe, żeby się poznać, ale to opcjonalne."
    },
    {
      question: "Czy strona będzie zoptymalizowana pod SEO?",
      answer: "Tak! Każda strona zawiera: optymalizację meta tagów, szybkość ładowania, responsywność, strukturę nagłówków, schema markup. To podstawa. Jeśli chcesz pozycjonowania (Google Ads, organiczne SEO), mamy na to oddzielne pakiety."
    },
    {
      question: "Jakie technologie używacie?",
      answer: "WordPress (85% projektów), Webflow, React, Shopify. Dla firmy z Lublina najczęściej polecamy WordPress - łatwo się obsługuje, ekosystem wtyczek jest ogromny, cena hostingu od 50 zł/miesiąc."
    },
    {
      question: "Czy mogę mieć support po uruchomieniu?",
      answer: "30 dni wsparcia wliczone w cenę. Po tym czasie oferujemy pakiety: podstawowy (50 zł/miesiąc - konsultacje), rozszerzony (200 zł/miesiąc - zmiany + backupy), premium (500 zł/miesiąc - pełna opieka)."
    },
    {
      question: "Czy otrzymam dostępy do strony?",
      answer: "Tak, otrzymujesz wszystkie dostępy: FTP, panel hostingu, dostęp do domeny, CMS. Twoja strona, Twoje dane. Możesz zmienić agencję w każdej chwili - strona jest całkowicie Twoja."
    },
    {
      question: "Czy potrzebowałam mieć materiały przed uruchomieniem?",
      answer: "Pomagamy zbierać materiały: tekst, zdjęcia, loga. Jeśli masz - świetnie. Jeśli nie - możemy pomóc w napisaniu tekstów (dodatkowo 500-1500 zł), zrobieniu zdjęć produktów lub znalezieniu gotowych illustracji."
    },
  ];

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Strony internetowe", href: "/uslugi/strony-internetowe" },
    { label: "Województwo lubelskie" },
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych Lubelskie | Strony WWW Lublin | fotz.pl"
        description="Tworzenie stron internetowych w województwie lubelskim. Profesjonalne strony WWW dla firm z Lublina i regionu. Od 499 zł. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/strony-internetowe/lubelskie"
        ogImage="https://fotz.pl/og-lubelskie.jpg"
        keywords="strony internetowe lubelskie, tworzenie stron lubelskie, strony www lubelskie, projektowanie stron lublin"
      />
      <ServiceSchema
        name="Tworzenie stron internetowych Lubelskie"
        description="Profesjonalne tworzenie stron internetowych dla firm z województwa lubelskiego"
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
                <span className="text-blue-400 font-semibold">WOJEWÓDZTWO LUBELSKIE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tworzenie stron internetowych w Lubelskiem
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Obsługujemy całe województwo lubelskie. 2.1 mln mieszkańców, 10 dużych miast, bogata ekosystem biznesowy.
                Jesteśmy <strong>zdalnie</strong>, co oznacza szybkość i elastyczność. Pracujemy z firmami z Lublina, Zamościa, Chełma i całego regionu.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {regionalStats.map((stat, idx) => (
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

        {/* Regional Coverage */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Obsługujemy całe województwo lubelskie
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Pracujemy z firmami ze wszystkich dużych miast regionu, bez względu na to gdzie się znajdują
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {regionalCities.map((city, idx) => (
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
                <h3 className="font-bold text-slate-900 mb-4">Lublin - serce regionu</h3>
                <p className="text-slate-700 mb-4">
                  Lublin to metropolia wschodnia (340k mieszkańców) z bogatym potencjałem biznesowym. UMCS, KUL, UP i UM Lublin to
                  100k+ studentów, którzy tworzą dynamiczny rynek. Specjalna Strefa Ekonomiczna przyciąga inwestycje.
                </p>
                <p className="text-slate-700">
                  <strong>Ale co ważne:</strong> obsługujemy równie chętnie firmy z Zamościa (40k), Chełma (38k), Białej Podlaskiej (57k),
                  Puław (44k) i mniejszych miast. Dla nas jako agencji sieciowej lokalizacja fizyczna nie ma znaczenia - liczy się jakość pracy.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why do regional companies need websites */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Dlaczego firmy z Lubelszczyzny potrzebują profesjonalnej strony?
              </h2>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Niski poziom digitalizacji = ogromna okazja</h3>
                  <p className="text-slate-700 mb-4">
                    Wiele firm z regionu lubelskiego nadal nie ma profesjonalnej strony lub ma starą, nieoptymalizowaną.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    To oznacza: jeśli weźmiesz temat SEO/marketing digitalny poważnie, zostaniesz liderem w swojej branży w regionie.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">🌍</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Potencjał geograficzny</h3>
                  <p className="text-slate-700 mb-4">
                    Lubelszczyzna to brama do Europy Wschodniej. Bliskość Ukrainy, Białorusi, Litwy otwiera możliwości dla eksportu i B2B.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Strona internetowa to Twoja szafka wystawowa dla ponad 2 mln potencjalnych klientów w regionie.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">🎓</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Talenty i bezrobocie</h3>
                  <p className="text-slate-700 mb-4">
                    100k+ studentów na uniwersytetach w Lublinie. Dużo talentów szuka pracy lub staży. Strona to pierwszy krok do budowania zespołu.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Job board na stronie przyciąga najlepszych kandydatów w Twoją branżę.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="text-3xl mb-4">💪</div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Konkurencja jest słaba</h3>
                  <p className="text-slate-700 mb-4">
                    W dużych miastach (Warszawa, Wrocław) pozycjonowanie kosztuje. W Lubelskiem - można dominować całą branżę za ułamek ceny.
                  </p>
                  <p className="text-slate-700 font-semibold text-blue-600">
                    Strona + SEO to szansa na TOP 3 w Google dla Twojej usługi w regionie.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Industries we serve */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Branże, które obsługujemy w regionie
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Doświadczenie z każdą z tych branż. Znamy ich problemy, potrzeby, konkurencję.
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
                Pakiety dla firm z Lubelszczyzny
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Od skromnych budżetów do zaawansowanych projektów. Każdy pakiet zawiera wsparcie i szkolenie.
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

        {/* Remote Work */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Jak pracujemy zdalnie z firmami z regionu?
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Wszystko online. Bez trzeba do biura. Szybka komunikacja, transparentnie, bez marnotrawienia czasu.
              </p>

              <div className="space-y-8">
                {remoteWorkHow.map((step, idx) => (
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
                  Efekt: Pełna kontrola + szybkość + oszczędność czasu
                </h3>
                <p className="text-green-900">
                  Pracujemy asynchronicznie, co oznacza: nie musisz czekać na nas, możesz pracować nad innymi rzeczami,
                  a my robimy naszą część. Szybkie przeglądy i feedback przez Figma/Slack. Wszyscy są na jednej stronie.
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
                Najczęstsze pytania od firm z Lubelszczyzny
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
          subheading="Specjalista z Lubelszczyzny czeka na Twoją wiadomość. Konsultacja je bezpłatna, bez zobowiązań."
        />
      </Layout>
    </>
  );
}
