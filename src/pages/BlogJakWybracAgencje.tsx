import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FAQSchema } from "@/components/seo/StructuredData";

export default function BlogJakWybracAgencje() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Jak Wybrać Agencję Marketingową? 10 Kryteriów Wyboru",
    "description": "Jak wybrać dobrą agencję marketingową? Poznaj 10 kluczowych kryteriów: portfolio, specjalizacja, transparentność, ROI. Praktyczny poradnik dla firm.",
    "image": "https://fotz.pl/og-image-agencja.jpg",
    "datePublished": "2026-04-10",
    "author": {
      "@type": "Organization",
      "name": "Fotz Studio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fotz Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fotz.pl/logo.png"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://fotz.pl"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://fotz.pl/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Jak Wybrać Agencję Marketingową",
        "item": "https://fotz.pl/blog/jak-wybrac-agencje-marketingowa"
      }
    ]
  };

  const faqItems = [
    {
      question: "Jak długo trwa współpraca z agencją marketingową?",
      answer: "Typowa współpraca z agencją trwa minimum 3-6 miesięcy, aby uwidocznić wyniki. Wiele firm wybiera umowy długoterminowe (12-24 miesiące) dla lepszych wyników i relacji. Najlepiej negocjować elastyczne warunki umowy."
    },
    {
      question: "Ile kosztuje zatrudnienie agencji marketingowej?",
      answer: "Koszty wahają się od 2-5 tys. PLN miesięcznie dla startupów, do 20+ tys. PLN dla pełnego zakresu usług. Dużą rolę odgrywają zakres prac, branża i doświadczenie agencji. Warto porównać oferty co najmniej 3-5 agencji."
    },
    {
      question: "Co rozumieć przez portfolio agencji?",
      answer: "Portfolio to zbiór zrealizowanych projektów, case studies i wyników dla poprzednich klientów. Powinno zawierać konkretne metryki (przyrost sprzedaży, wzrost reach, konwersje). Sprawdzaj portfolio z branży zbliżonej do Twojej."
    },
    {
      question: "Czy agencja powinna mieć specjalizację branżową?",
      answer: "Specjalizacja jest korzystna, ale nie obowiązkowa. Agencja ze zrozumieniem Twojej branży szybciej osiąga wyniki. Jednak dobre agencje full-service potrafią się szybko nauczyć i zaproponować efektywne strategie w każdej branży."
    },
    {
      question: "Jak śledzić wyniki pracy agencji?",
      answer: "Ustal jasne KPI (metryki) na początku współpracy. Agencja powinna dostarczać raportów co najmniej raz miesięcznie. Kluczowe metryki: ROI, CPA, wzrost traffic, konwersje, engagement. Omawiaj wyniki regularnie z zespołem agencji."
    },
    {
      question: "Czy mogę zmienić agencję w trakcie umowy?",
      answer: "Umowy zazwyczaj pozwalają na rozwiązanie za 30-60 dni wypowiedzenia. Sprawdź warunki w umowie. Przed zmianą agencji przygotuj dokumentację i dostęp do wszystkich narzędzi. Transfer kampanii powinien być bezbolesny."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <SEOHead
        title="Jak Wybrać Agencję Marketingową? 10 Kryteriów Wyboru | Fotz Studio"
        description="Jak wybrać dobrą agencję marketingową? Poznaj 10 kluczowych kryteriów: portfolio, specjalizacja, transparentność, ROI. Praktyczny poradnik dla firm."
        canonical="https://fotz.pl/blog/jak-wybrac-agencje-marketingowa"
        ogType="article"
        ogImage="https://fotz.pl/og-image-agencja.jpg"
      />
      <FAQSchema schema={schemaData} />
      <FAQSchema schema={breadcrumbSchema} />
      <Layout>
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-4 border-b border-gray-200"
        >
          <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">
              Strona główna
            </Link>
            <ChevronRight size={16} />
            <Link to="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-medium">Jak wybrać agencję marketingową</span>
          </div>
        </motion.div>

        {/* Article */}
        <article className="py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="mb-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition mb-6"
              >
                <ArrowLeft size={16} />
                Wróć do bloga
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Jak Wybrać Agencję Marketingową? 10 Kryteriów Wyboru
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>10 kwietnia 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>10 min czytania</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>Fotz Studio</span>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-gray-700 italic">
                  Wybór odpowiedniej agencji marketingowej to jedna z ważniejszych decyzji w rozwoju Twojej firmy. Poznaj 10 kluczowych kryteriów, które pomogą Ci znaleźć idealne dopasowanie i uniknąć kosztownych błędów.
                </p>
              </div>
            </div>

            {/* Main content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {/* Section 1 */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Dlaczego Warto Współpracować z Agencją Marketingową?
                </h2>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    W dzisiejszych czasach marketing cyfrowy stał się nieodzownym elementem strategii biznesowej każdej firmy. Jednak prawidłowe zarządzanie kampaniami wymaga wiedzy, doświadczenia i dostępu do specjalistycznych narzędzi. Tutaj wchodzą w grę agencje marketingowe.
                  </p>
                  <p>
                    Wybór między zatrudnieniem własnego zespołu a współpracą z agencją jest decyzją strategiczną. Agencja marketingowa oferuje szereg korzyści, które warto rozważyć:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Doświadczenie wielobranżowe:</strong> Agencje pracują z różnymi klientami i branżami, co pozwala im znaleźć sprawdzone rozwiązania szybciej.</li>
                    <li><strong>Dostęp do specjalistów:</strong> Masz dostęp do zespołu SEO specjalistów, copywriterów, designerów, analityków i media buyerów bez konieczności ich samodzielnego szukania.</li>
                    <li><strong>Redukcja kosztów:</strong> Zatrudnienie dedykowanego zespołu kosztuje więcej niż współpraca z agencją, zwłaszcza dla małych i średnich firm.</li>
                    <li><strong>Narzędzia i technologia:</strong> Agencje mają dostęp do drogich, profesjonalnych narzędzi (CRM, analytics, automation), którymi się dzielą z klientami.</li>
                    <li><strong>Obiektywny punkt widzenia:</strong> Zewnętrzny zespół ma dystans do Twojego biznesu i może zaproponować świeże pomysły.</li>
                    <li><strong>Skalowalność:</strong> Łatwo zwiększyć lub zmniejszyć zakres prac w zależności od potrzeb firmy.</li>
                  </ul>
                  <p>
                    Jednak znajduje się też wiele agencji, które obiecują wielkie rezultaty, a dostarczają jedynie puste obietnice. Dlatego właśnie warto znać kryteria, które pomogą Ci wybrać naprawdę dobrą agencję.
                  </p>
                </div>
              </motion.section>

              {/* Section 2 - Main criteria */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  10 Kluczowych Kryteriów Wyboru Agencji Marketingowej
                </h2>

                {/* Criterion 1 */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    1. Portfolio i Case Studies
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Portfolio agencji to najlepszy wskaźnik jej kompetencji. Spojrzej na konkretne zrealizowane projekty i ich wyniki.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Poszukuj case studies z Twoją branżą lub podobną</li>
                    <li>Weryfikuj konkretne metryki i wyniki (wzrost sprzedaży %, przyrost traffic, konwersje)</li>
                    <li>Zwróć uwagę na różnorodność projektów i technik marketingowych</li>
                    <li>Sprawdź, czy projekty mają realnych konkurentów i wyzwań</li>
                    <li>Skontaktuj się z byłymi klientami agencji, aby potwierdzić informacje z portfolio</li>
                  </ul>
                </motion.div>

                {/* Criterion 2 */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    2. Specjalizacja Branżowa
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Agencja ze specjalizacją w Twojej branży lepiej rozumie wyzwania i możliwości rynku.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Idealne jest, gdy agencja ma doświadczenie z firmami podobnymi do Twojej</li>
                    <li>Specjaliści znają konkurencję i trendy branżowe</li>
                    <li>Mogą szybciej opracować strategię bez wcześniejszej edukacji</li>
                    <li>Dysponują gotowymi case studies, które możesz adaptować do swoich celów</li>
                    <li>Uwaga: agencja bez specjalizacji branżowej może być OK, jeśli ma otwartość do nauki i świetne umiejętności ogólne</li>
                  </ul>
                </motion.div>

                {/* Criterion 3 */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    3. Transparentność i Raportowanie
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Dobra agencja powinna być całkowicie przejrzysta w kwestii wyników i sposobu pracy.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Powinni dostarczać regularne raporty (co najmniej raz miesięcznie)</li>
                    <li>Raporty powinny zawierać konkretne KPI, a nie ogólniki</li>
                    <li>Dostęp do paneli analitycznych (Google Analytics, Facebook Ads Manager, itp.)</li>
                    <li>Jasna komunikacja na temat przyczyn sukcesów i porażek kampanii</li>
                    <li>Gotowość do objaśnienia każdej strategii i każdego wydanego złotówki</li>
                    <li>Unikaj agencji, które mówią "zaufaj nam" bez dowodów - to czerwona flaga</li>
                  </ul>
                </motion.div>

                {/* Criterion 4 */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    4. Doświadczenie i Kwalifikacje Zespołu
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Za każdą dobrą agencją stoi zespół specjalistów z odpowiednią wiedzą i certyfikatami.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Sprawdzaj LinkedIn profilów członków zespołu - czy mają doświadczenie branżowe?</li>
                    <li>Szukaj certyfikacji: Google Analytics, Google Ads, Meta Blueprint, HubSpot, itp.</li>
                    <li>Dowiedz się, kto będzie Twoim account managerem i czy ma czas na Twój projekt</li>
                    <li>Pytaj o turnover w zespole - wysoki turnover to zły znak</li>
                    <li>Preferuj agencje, gdzie senior specjaliści aktywnie pracują z klientami, nie tylko zarządzają</li>
                  </ul>
                </motion.div>

                {/* Criterion 5 */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    5. Podejście Strategiczne vs Taktyczne
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Dobra agencja myśli długoterminowo, nie tylko o szybkich wynikach.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Pierwsza rozmowa powinna dotyczyć audytu i strategii, nie od razu oferty</li>
                    <li>Agencja powinna zadawać pytania o Twoje cele biznesowe na 6-12 miesięcy</li>
                    <li>Powinna zaproponować long-term roadmap, a nie chaotyczne działania</li>
                    <li>Unikaj agencji, które obiecują zaraz rezultaty - budowanie marki trwa czas</li>
                    <li>Dobre agencje będą chcieć zrozumieć Twój biznes przed zaproponowaniem kampanii</li>
                  </ul>
                </motion.div>

                {/* Criterion 6 */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    6. Model Rozliczeń i Cennik
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Przejrzysty model rozliczeń bez ukrytych kosztów to znak zaufania.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Główne modele: retainer (stała opłata), project-based (za projekt), performance-based (za wyniki)</li>
                    <li>Preferuj jasny cennik z wyszczególnieniem, co zawiera każdy pakiet</li>
                    <li>Pytaj o ukryte koszty - media buying, narzędzia, dodatkowe usługi</li>
                    <li>Sprawdzaj, czy budżet na media buying jest niezależny od opłaty za agencję</li>
                    <li>Unikaj agencji, które nie chcą wdać się w rozmowę o cenach - brak transparentności to sygnał ostrzegawczy</li>
                  </ul>
                </motion.div>

                {/* Criterion 7 */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    7. Komunikacja i Dostępność
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Dobra komunikacja to kluczowa składnika udanej współpracy.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Czy szybko odpowiadają na Twoje pytania (w ciągu 24h)?</li>
                    <li>Czy masz wyznaczoną osobę kontaktową (account manager)?</li>
                    <li>Jakie są kanały komunikacji: email, Slack, video calls, osobiste spotkania?</li>
                    <li>Czy agencja jest dostępna w Twoim strefie czasowej lub praca asynchronicznie?</li>
                    <li>Zaproś się na spotkanie zespołu - sprawdź, czy czujesz się komfortowo w ich towarzystwie</li>
                  </ul>
                </motion.div>

                {/* Criterion 8 */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    8. Referencje i Opinie Klientów
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Opinie byłych klientów mówią więcej niż samo portfolio.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Pytaj agencję o referencje - dobra agencja chętnie je udostępni</li>
                    <li>Skontaktuj się bezpośrednio z byłymi klientami (poproś agencję o dane kontaktowe)</li>
                    <li>Sprawdzaj Google Reviews, Trustpilot, czy inne platformy opinii</li>
                    <li>Zwróć uwagę na recencje negatywne - czy są to rozwiązane problemy czy systemowe?</li>
                    <li>Idealnie znajdź klienta z Twojej branży lub o podobnym budżecie</li>
                  </ul>
                </motion.div>

                {/* Criterion 9 */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    9. Narzędzia i Technologie
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Profesjonalne narzędzia to fundament efektywnego marketingu.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Sprawdzaj, jakie narzędzia agencja używa: HubSpot, Salesforce, SEMrush, Ahrefs, itp.</li>
                    <li>Czy są w stanie integrować Twoje istniejące systemy (CRM, e-commerce)?</li>
                    <li>Czy korzystają z automatyzacji marketingu?</li>
                    <li>Czy mają dostęp do premium wersji narzędzi branżowych?</li>
                    <li>Czy będą dzielić się raportami z tych narzędzi, czy tylko podsumowaniami?</li>
                  </ul>
                </motion.div>

                {/* Criterion 10 */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    10. Elastyczność i Skalowalność
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Twoje potrzeby będą się zmieniać - agencja powinna się dostosować.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Czy umowa pozwala na zmianę zakresu usług bez kar?</li>
                    <li>Czy agencja potrafi zwiększyć lub zmniejszyć zespół w zależności od potrzeb?</li>
                    <li>Czy są elastyczni w dodawaniu nowych kanałów marketingowych?</li>
                    <li>Czy mogą pracować z Twoim istniejącym zespołem lub partnersami?</li>
                    <li>Jakie są warunki rozwiązania umowy? (30, 60, 90 dni wypowiedzenia to norma)</li>
                  </ul>
                </motion.div>
              </motion.section>

              {/* Section 3 - Red flags */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Red Flags — Na Co Uważać przy Wyborze Agencji
                </h2>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mb-6">
                  <div className="text-lg text-gray-700 space-y-4">
                    <p>
                      Istnieje wiele agencji, które obiecują cuda, a dostarczają rozczarowanie. Oto znaki ostrzegawcze, które powinny Cię zaniepokoić:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Obietnice gwarantowanych wyników:</strong> Nikt nie gwarantuje #1 w Google lub 100% wzrostu sprzedaży. Unikaj takich obietnic.</li>
                      <li><strong>Brak interesse w Twoim biznesie:</strong> Jeśli agencja nie pyta o Twoją branżę, konkurencję, cele - to zły znak.</li>
                      <li><strong>Niedostępny account manager:</strong> Jeśli nie masz jasno wyznaczonej osoby do kontaktu lub jest zawsze zajęta.</li>
                      <li><strong>Brak portfolio branżowego:</strong> Jeśli portfolio jest bardzo ogólne i brak case studies - wątpliwe.</li>
                      <li><strong>Niedopasowana cena do zakresu prac:</strong> Jeśli oferta jest drastycznie tańsza niż konkurencja, pytaj dlaczego.</li>
                      <li><strong>Długie umowy bez możliwości wyjścia:</strong> Umowy na 3+ lata bez klauzuli wyjścia to zagrożenie.</li>
                      <li><strong>Brak przejrzystości w raportowaniu:</strong> Jeśli nie dostajesz regularnych raportów lub są bardzo ogólne.</li>
                      <li><strong>Negatywne recenzje o komunikacji:</strong> Powracające skargi o niedostępności lub złej komunikacji.</li>
                      <li><strong>Presja, aby podjąć decyzję szybko:</strong> "Ta oferta ważna tylko do jutro" - to manipulacja.</li>
                      <li><strong>Wysokie wymagania (minimalny budżet):</strong> Jeśli agencja wymaga &gt;10 tys. PLN miesięcznie dla startupu.</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Section 4 - Full-service vs specialized */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Agencja Full-Service vs Specjalistyczna — Kiedy Co Wybrać?
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Full-Service</h3>
                    <p className="text-gray-700 mb-4">
                      Agencja oferuje całą gamę usług: SEO, PPC, media społecznościowe, content marketing, design, web development.
                    </p>
                    <strong className="text-gray-900 block mb-2">Zalety:</strong>
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mb-4">
                      <li>Jedna osoba do kontaktu dla wszystkich kanałów</li>
                      <li>Spójna strategia across all channels</li>
                      <li>Niższe koszty niż zatrudnianie wielu specjalistów</li>
                      <li>Łatwiej kierować budżetem</li>
                    </ul>
                    <strong className="text-gray-900 block mb-2">Wady:</strong>
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                      <li>Mogą nie być ekspertami w każdej dziedzinie</li>
                      <li>Mniej głębokie zaawansowane strategie</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Specjalistyczna</h3>
                    <p className="text-gray-700 mb-4">
                      Agencja specjalizuje się w jednym kanale, np. SEO, Google Ads, social media marketing.
                    </p>
                    <strong className="text-gray-900 block mb-2">Zalety:</strong>
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mb-4">
                      <li>Głębokie expertise w swojej specjalizacji</li>
                      <li>Lepsze wyniki w danym kanale</li>
                      <li>Używają najnowszych narzędzi i taktyk</li>
                      <li>Agresywne pricing ze względu na specjalizację</li>
                    </ul>
                    <strong className="text-gray-900 block mb-2">Wady:</strong>
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                      <li>Trudniej skoordynować z innymi kanałami</li>
                      <li>Wyższa opłata za specjalizację</li>
                    </ul>
                  </div>
                </div>

                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    <strong>Kiedy wybrać agencję full-service?</strong> Jeśli prowadzisz małą/średnią firmę i masz budżet &lt;15 tys. PLN miesięcznie, agencja full-service będzie lepsza. Chcesz jedną osobę do kontaktu i spójną strategię marketingową.
                  </p>
                  <p>
                    <strong>Kiedy wybrać agencję specjalistyczną?</strong> Jeśli masz dużą firmę, duży budżet i konkretny kanał, który chcesz intensywnie rozwijać (np. SEO). Wtedy specjalista będzie lepszy. Możesz zatrudnić wiele agencji specjalistycznych na różne kanały.
                  </p>
                  <p>
                    <strong>Idealny hybryd:</strong> Agencja full-service z głęboką specjalizacją w jednym kanale (np. full-service, ale ze specjalizacją w SEO) to często złoty środek.
                  </p>
                </div>
              </motion.section>

              {/* Section 5 - Pricing */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ile Kosztuje Agencja Marketingowa? Widełki Cenowe
                </h2>
                <div className="text-lg text-gray-700 space-y-4 mb-6">
                  <p>
                    Koszt usług agencji marketingowej zależy od wielu czynników: wielkości agencji, doświadczenia, zakresu prac, branży i lokalizacji. Oto przeciętne ceny na polskim rynku:
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-gray-900 mb-2">Startups i Małe Firmy</h3>
                    <p className="text-gray-700 mb-2"><strong>Budżet: 1,500 - 5,000 PLN/miesiąc</strong></p>
                    <p className="text-gray-700">Podstawowe usługi: zarządzanie mediami społecznościowymi, podstawowe SEO, content marketing. Zazwyczaj agencje junior lub small boutique agencies.</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-gray-900 mb-2">Firmy Średnie</h3>
                    <p className="text-gray-700 mb-2"><strong>Budżet: 5,000 - 15,000 PLN/miesiąc</strong></p>
                    <p className="text-gray-700">Full-service agencje, integracja wielu kanałów, dedykowany account manager. Agencje mid-tier z dobrym portfolio.</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <h3 className="font-bold text-gray-900 mb-2">Duże Firmy i Korporacje</h3>
                    <p className="text-gray-700 mb-2"><strong>Budżet: 15,000 - 50,000+ PLN/miesiąc</strong></p>
                    <p className="text-gray-700">Premium agencje, kompleksowe strategie, dedykowany zespół. Agencje top-tier z międzynarodowym doświadczeniem.</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                    <h3 className="font-bold text-gray-900 mb-2">Agencje Specjalistyczne</h3>
                    <p className="text-gray-700 mb-2"><strong>Budżet: 2,000 - 30,000+ PLN/miesiąc</strong></p>
                    <p className="text-gray-700">Wysokospecjalistyczne usługi (SEO, Google Ads, media buying). Ceny zależą od kompleksowości i wynagrodzeń specjalistów.</p>
                  </div>
                </div>

                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    <strong>Budżet na media buying vs opłatę agencji:</strong> Ważne rozróżnienie. Opłata agencji (2-5 tys. PLN) to koszt za strategię i zarządzanie. Dodatkowo musisz mieć budżet na samo media buying (Facebook Ads, Google Ads, itp.), zwykle 2-10 tys. PLN minimum.
                  </p>
                  <p>
                    <strong>Jak negocjować cenę?</strong> Nie bierz pierwszej oferty. Porównaj co najmniej 3-5 agencji. Rób to umiejętnie - nie dyskutuj ceny jeśli masz ograniczone możliwości. Zamiast tego pytaj o elastyczne pakiety lub pilotażowe projekty.
                  </p>
                  <p>
                    <strong>Wskaźnik ROI:</strong> Dobra agencja powinna osiągać ROI wynoszący 3-5x. Oznacza to, że za każdy złoty wydany na marketing, wracają Ci 3-5 złotych przychodu. Jeśli agencja nie śledzi ROI, zmień ją.
                  </p>
                </div>
              </motion.section>

              {/* Section 6 - Process */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Proces Wyboru Agencji - Praktyczne Kroki
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Zdefiniuj Swoje Cele</h4>
                      <p>Zanim zaczniesz szukać, jasno określ czego potrzebujesz: wzrost sprzedaży, lead generation, brand awareness? Jaki jest Twój budżet?</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Szukaj i Porównuj</h4>
                      <p>Poszukaj agencji online, poproś rekomendacje od znanych Ci firm. Sporządź listę 5-10 kandydatów do dalszej analizy.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Analizuj Portfolio</h4>
                      <p>Przejrzyj portfolio każdej agencji. Zwróć uwagę na projekty z Twojej branży i konkretne wyniki.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Poproś o Referencje</h4>
                      <p>Skontaktuj się bezpośrednio z byłymi klientami. Zapytaj o doświadczenie, rezultaty i czy chcieliby współpracować ponownie.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Spotkania Konsultacyjne</h4>
                      <p>Umów się na spotkania z 3-5 najlepszymi kandydatami. Oceniaj nie tylko ich oferty, ale też chemię i komunikację.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Rozeznaj Ich Propozycję</h4>
                      <p>Czy agencja zaproponowała konkretną strategię czy ogólne usługi? Czy zadawała pytania o Twój biznes?</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">7</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Porównaj Oferty</h4>
                      <p>Przygotuj spreadsheet porównujący: cenę, zakres usług, doświadczenie, referencje, komunikację.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">8</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Negocjuj Umowę</h4>
                      <p>Upewnij się, że umowa zawiera jasne warunki, KPI, okres wypowiedzenia i zasady raportowania.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">9</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Zacznij Pilotażowy Projekt</h4>
                      <p>Jeśli możliwe, zaproponuj 3-miesięczny pilotaż zamiast długoterminowej umowy. To zmniejsza ryzyko.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">10</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Monitoring i Feedback</h4>
                      <p>Po podpisaniu umowy, regularnie śledź wyniki, omawiaj postępy, wyrażaj opinię. Dobra współpraca opiera się na komunikacji.</p>
                    </div>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </motion.div>
        </article>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Często Zadawane Pytania
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Gotowy na Zmianę?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Fotz Studio to nowoczesna <Link to="/o-nas" className="text-white underline hover:no-underline">agencja marketingowa</Link> z doświadczeniem w markingu cyfrowym. Poznaj nasze <Link to="/agencja-marketingowa/poznan" className="text-white underline hover:no-underline">case studies</Link> i <Link to="/uslugi" className="text-white underline hover:no-underline">usługi</Link>, lub umów się na bezpłatną konsultację.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <Link to="/kontakt">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-bold"
                >
                  Bezpłatna Konsultacja
                </Button>
              </Link>
              <Link to="/o-nas">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold"
                >
                  Poznaj Nasz Zespół
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Internal Links Footer */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 px-4 bg-gray-100"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Przydatne Linki
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/uslugi"
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition text-center"
              >
                <h4 className="font-bold text-gray-900 mb-1">Nasze Usługi</h4>
                <p className="text-gray-600 text-sm">
                  Poznaj pełną gamę usług marketingowych które oferujemy
                </p>
              </Link>
              <Link
                to="/agencja-marketingowa/poznan"
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition text-center"
              >
                <h4 className="font-bold text-gray-900 mb-1">Case Studies</h4>
                <p className="text-gray-600 text-sm">
                  Zobacz konkretne wyniki naszych kampanii dla klientów
                </p>
              </Link>
              <Link
                to="/o-nas"
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition text-center"
              >
                <h4 className="font-bold text-gray-900 mb-1">O Nas</h4>
                <p className="text-gray-600 text-sm">
                  Poznaj historię i zespół Fotz Studio
                </p>
              </Link>
              <Link
                to="/kontakt"
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition text-center"
              >
                <h4 className="font-bold text-gray-900 mb-1">Kontakt</h4>
                <p className="text-gray-600 text-sm">
                  Umów się na konsultację z naszym zespołem
                </p>
              </Link>
            </div>
          </div>
        </motion.section>
      </Layout>
    </>
  );
}
