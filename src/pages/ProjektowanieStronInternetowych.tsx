import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Palette,
  Smartphone,
  Zap,
  CheckCircle2,
  ArrowRight,
  Eye,
  Layers,
  Code,
  RefreshCw,
  Users,
  BarChart,
  Accessibility,
  Sparkles
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

export default function ProjektowanieStronInternetowych() {
  const designProcess = [
    {
      number: "1",
      title: "Discovery",
      desc: "Analizujemy Twoją branżę, konkurencję i potrzeby biznesowe. Definiujemy cele użytkownika i scenariusze użytkowania."
    },
    {
      number: "2",
      title: "Wireframes",
      desc: "Tworzymy szkice struktury strony i przepływu użytkownika. Zatwierdzasz układ przed przejściem do grafiki."
    },
    {
      number: "3",
      title: "Visual Design",
      desc: "Projektujemy interfejs w Figma z uwzględnieniem Twojej marki, palety kolorów i typografii."
    },
    {
      number: "4",
      title: "Prototyping",
      desc: "Tworzymy interaktywny prototyp. Testujesz workflow i zatwierdzasz każdy element."
    },
    {
      number: "5",
      title: "Handoff",
      desc: "Przeprowadzamy kodowanie na podstawie zatwierdzonego projektu. Pixel-perfect implementacja."
    },
  ];

  const designPrinciples = [
    {
      icon: Users,
      title: "User-centric Design",
      desc: "Każdy element projektu jest zaprojektowany na podstawie zachowań i potrzeb użytkownika, a nie estetyki."
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      desc: "Zaczynamy od wersji mobilnej, ponieważ większość ruchu pochodzi z telefonów i tabletów."
    },
    {
      icon: Accessibility,
      title: "Dostępność (A11y)",
      desc: "Strona jest zoptymalizowana dla osób niepełnosprawnych. WCAG 2.1 AA standard na minimum."
    },
    {
      icon: Zap,
      title: "Performance First",
      desc: "Design bierze pod uwagę wydajność. Optymalizujemy obrazy, animacje i kod CSS od samego początku."
    },
    {
      icon: BarChart,
      title: "Conversion-focused",
      desc: "CTA, hierarchia informacji i call-to-action są umieszczane strategicznie, aby zwiększyć konwersje."
    },
    {
      icon: Sparkles,
      title: "Brand Consistency",
      desc: "Projekt stanowi logiczną przedłużenie Twojej marki. Kolory, typografia i ton komunikacji są spójne."
    },
  ];

  const beforeAfter = [
    {
      title: "Niezoptymalizowana strona",
      issues: [
        "Brak hierarchii wizualnej",
        "Trudna nawigacja",
        "Nieresponsywna na mobile",
        "Wolne ładowanie",
        "Niska konwersja"
      ],
      icon: "⚠️"
    },
    {
      title: "Po redesigne fotz.pl",
      benefits: [
        "Jasna struktura informacji",
        "Intuicyjna nawigacja",
        "Idealna na mobilu",
        "Ładowanie < 2s",
        "Wzrost konwersji o 150%+"
      ],
      icon: "✨"
    },
  ];

  const technologies = [
    { name: "Figma", category: "UI/UX Design" },
    { name: "Adobe XD", category: "Prototyping" },
    { name: "Custom CSS", category: "Styling" },
    { name: "Tailwind CSS", category: "Utility Framework" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Type Safety" },
  ];

  const faqItems = [
    {
      question: "Jaka jest różnica między UI, UX a web designem?",
      answer: "UX (User Experience) to jak strona się zachowuje - przepływ, struktura, użyteczność. UI (User Interface) to wygląd - kolory, typografia, ikony. Web design to połączenie obu, plus techniczne aspekty front-endu. My robimy pełny proces: projektowanie UX → UI w Figma → kodowanie w HTML/CSS."
    },
    {
      question: "Ile czasu zajmuje projektowanie strony?",
      answer: "Discovery: 1-2 tygodnie. Wireframes i User Testing: 1-2 tygodnie. Visual Design: 2-3 tygodnie. Prototyping i iteracje: 1-2 tygodnie. Razem: 5-9 tygodni dla średniej strony firmowej. Strony prostsze (wizytówki) to 2-3 tygodnie."
    },
    {
      question: "Czy mogę mieć wiele wersji designu do wyboru?",
      answer: "Zwykle prezentujemy 1-2 kierunki designu na etapie visual design. Po wyborze preferowanego kierunku robimy iteracje i refinement. Na każdym etapie możesz zasugerować zmiany - wliczone w koszt są do 2 rundy poprawek."
    },
    {
      question: "Czy projekt będzie responsywny?",
      answer: "Tak, absolutnie. Każdy projekt jest tworzony mobile-first, czyli zaczynamy od wersji mobilnej i skalujemy do dużych ekranów. Testujemy na iPhone, Androidzie, tabletach i desktopach."
    },
    {
      question: "Czy mogę mieć dostęp do plików Figma?",
      answer: "Tak, opcjonalnie możemy przekazać Ci dostęp read-only do Figma lub pliki XD. To ułatwia komunikację z kodowaniem i późniejszymi zmianami. Często warto - oszczędza czasu podczas wdrażania."
    },
    {
      question: "Jak długo jest wsparcie po projekcie?",
      answer: "Po uruchomieniu strony oferujemy wsparcie przez 30 dni w cenie. W tym czasie naprawiamy błędy i robimy drobne zmiany. Po tym okresie możesz zamówić pakiet wsparcia na miesiąc lub roczek."
    },
    {
      question: "Czy design będzie zoptymalizowany pod SEO?",
      answer: "Tak. Projektujemy z myślą o SEO: semantyczna struktura HTML, szybkość ładowania (obrazy optymalizowane), mobile-friendly design, czytelne nagłówki. To podstawa - SEO zaczyna się w designie."
    },
    {
      question: "Jakie są najczęstsze błędy w designie stron?",
      answer: "1) Zbyt wiele elementów na stronie - robi się chaotycznie. 2) Brak hierarchii wizualnej - użytkownik nie wie, co jest ważne. 3) CTA/przyciski gdzieś ukryte - nikt nie wie co robić. 4) Duże obrazy bez optymalizacji - strona wolno się ładuje. 5) Kolory z niskim kontrastem - trudna do czytania. My unikamy tych błędów, bo mamy checklist."
    },
  ];

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Projektowanie stron internetowych" },
  ];

  return (
    <>
      <SEOHead
        title="Projektowanie stron internetowych | Design i UX | fotz.pl"
        description="Projektujemy profesjonalne strony internetowe. Unikalny design, intuicyjny UX i pełna responsywność. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/projektowanie-stron-internetowych"
        keywords="projektowanie stron internetowych, web design, ui/ux design, projektowanie stron www, projekt strony internetowej, webdesign agencja"
      />
      <ServiceSchema
        name="Projektowanie stron internetowych"
        description="Profesjonalne projektowanie stron internetowych z uwzględnieniem UX, UI i SEO"
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Projektowanie stron internetowych — Design, który konwertuje
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tworzymy strony, które nie tylko wyglądają spektakularnie, ale przede wszystkim <strong>sprzedają</strong>.
                Każdy projekt to połączenie analizy użytkownika, strategii UX i najnowszych trendów designu.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">78+</div>
                  <div className="text-sm text-slate-400">Projektów</div>
                </div>
                <div className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">150%</div>
                  <div className="text-sm text-slate-400">Wzrost konwersji</div>
                </div>
                <div className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">&lt;2s</div>
                  <div className="text-sm text-slate-400">Czas ładowania</div>
                </div>
                <div className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">5 lat</div>
                  <div className="text-sm text-slate-400">Doświadczenia</div>
                </div>
              </div>
              <Link to="/realizacje">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Obejrzyj nasze realizacje <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* UI vs UX vs Web Design */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Czym jest projektowanie stron internetowych?
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                To więcej niż estetyka. To nauka o tym, jak ludzie interact ze stronami i co ich do konwersji prowadzi.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                  <Eye className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">UX Design</h3>
                  <p className="text-slate-700 mb-4">
                    User Experience — jak użytkownik podróżuje przez stronę. Mapa drogowa od entrada do konwersji.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Badanie użytkowników (UX research)</li>
                    <li>• Wireframing i user flows</li>
                    <li>• Testowanie użyteczności</li>
                    <li>• Hierarchia informacji</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                  <Palette className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">UI Design</h3>
                  <p className="text-slate-700 mb-4">
                    User Interface — jak wygląda interfejs. Kolory, przyciski, ikony, typografia, animacje.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Paleta kolorów i typografia</li>
                    <li>• Design systemy i komponenty</li>
                    <li>• Ikony i ilustracje</li>
                    <li>• Mikro-interakcje</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                  <Code className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Web Design</h3>
                  <p className="text-slate-700 mb-4">
                    Połączenie UX + UI + Front-end. Pixel-perfect implementacja w HTML, CSS, JavaScript.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Responsive design</li>
                    <li>• CSS Animations</li>
                    <li>• SEO optymalizacja</li>
                    <li>• Performance tuning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Design Process */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Nasz proces projektowania
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Od pomysłu do uruchomiania: struktura, która gwarantuje sukces
              </p>

              <div className="space-y-8">
                {designProcess.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                        {step.number}
                      </div>
                      {idx < designProcess.length - 1 && (
                        <div className="h-16 w-1 bg-blue-200 mx-auto mt-4"></div>
                      )}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-700">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Design Principles */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Zasady, którymi się kierujemy
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Każdy projekt jest oparty na tych fundamentach
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {designPrinciples.map((principle, idx) => {
                  const Icon = principle.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.05}>
                      <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:border-blue-400 transition">
                        <Icon className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{principle.title}</h3>
                        <p className="text-slate-700 text-sm">{principle.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Portfolio Link */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Szukasz inspiracji?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Obejrzyj nasze najnowsze projekty. Każdy to historia sukcesu i konkretne wyniki dla klientów.
              </p>
              <Link to="/realizacje">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                  Obejrzyj portfolio <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </section>
        </FadeInView>

        {/* Before/After */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Transformacja przez design
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Co się zmienia, kiedy strona jest profesjonalnie zaprojektowana
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {beforeAfter.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-8 rounded-lg ${
                      idx === 0
                        ? "bg-red-50 border border-red-200"
                        : "bg-green-50 border border-green-200"
                    }`}
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-6">{item.title}</h3>
                    <ul className="space-y-3">
                      {item[idx === 0 ? "issues" : "benefits"].map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {idx === 0 ? (
                            <span className="text-red-600 font-bold mt-1">✕</span>
                          ) : (
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={idx === 0 ? "text-red-900" : "text-green-900"}>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Technologies */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Narzędzia, którymi pracujemy
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Nowoczesne narzędzia dla nowoczesnego designu
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                    <div className="text-sm text-slate-500 font-semibold mb-2">
                      {tech.category}
                    </div>
                    <div className="text-lg font-bold text-slate-900">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Odpowiadamy na pytania
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Najczęstsze pytania o proces projektowania
              </p>

              <FAQSchema items={faqItems} />

              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold text-slate-900">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        {/* Internal Links */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-8">Powiązane usługi</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/uslugi/strony-internetowe"
                  className="block p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-slate-900 mb-2">Tworzenie stron internetowych</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Od projektowania do wdrożenia - pełny cykl tworzenia profesjonalnych stron
                  </p>
                  <span className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                    Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/realizacje"
                  className="block p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-slate-900 mb-2">Nasze realizacje</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Przeglądaj projekty, które stworzyliśmy dla firm z całej Polski
                  </p>
                  <span className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                    Obejrzyj portfolio <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/uslugi/tworzenie-stron-internetowych"
                  className="block p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-slate-900 mb-2">Usługa pełna - tworzenie</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Kompleksowe podejście: analiza, design, kodowanie, SEO
                  </p>
                  <span className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                    Poznaj usługę <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/cennik-stron-internetowych"
                  className="block p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-slate-900 mb-2">Cennik usług</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Transparentne ceny za poszczególne pakiety usług
                  </p>
                  <span className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                    Sprawdź cennik <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
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
