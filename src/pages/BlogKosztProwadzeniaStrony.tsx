import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Ile kosztuje utrzymanie strony internetowej rocznie?",
    answer: "Koszt utrzymania strony internetowej w Polsce wynosi zazwyczaj od 1500 do 15000 PLN rocznie, w zależności od typu i złożoności witryny. Dla prostej wizytówki: 1500-3000 PLN. Dla strony firmowej: 3000-8000 PLN. Dla sklepu WooCommerce: 5000-15000 PLN. W skład kosztów wchodzą: hosting (300-2000 PLN), domena (50-100 PLN), certyfikat SSL (0-200 PLN), wtyczki i licencje (500-3000 PLN), aktualizacje CMS (1000-5000 PLN), backup (300-1000 PLN), monitorowanie (500-2000 PLN) i wsparcie techniczne (500-5000 PLN). Ceny mogą być wyższe dla dużych portali lub dedykowanych aplikacji (20000+ PLN rocznie).",
  },
  {
    question: "Czy mogę zarządzać stroną internetową sam bez agencji?",
    answer: "Tak, możesz sam zarządzać stroną pod warunkiem, że posiadasz wymagane umiejętności techniczne. Jeśli masz wiedzę o CMS-ach (WordPress, Webflow), HTML/CSS i podstawową administrację serwerami, możesz przeprowadzić aktualizacje, zainstalować wtyczki i zarządzać backupami. Jednak własna administracja wymaga czasu, wiedzy i gotowości do rozwiązywania problemów. Dla początkujących rekomendujemy bardziej użyteczne platformy bezobsługowe (Webflow, Wix) niż WordPress. Jeśli pracujesz zawodowo, czas poświęcony na administrację stroną to strata potencjalnych przychodów. Agencja specjalizuje się w szybkim rozwiązywaniu problemów i posiada narzędzia do monitorowania oraz bezpieczeństwa.",
  },
  {
    question: "Co powinno być zawarte w umowie utrzymania strony?",
    answer: "Umowa utrzymania strony powinna zawierać: zakres usług (aktualizacje, backup, wsparcie), czas odpowiedzi na zgłoszenia (np. 24h na błędy krytyczne), dostępność serwisu (SLA 99%), dostęp do panelu administracyjnego, kopie zapasowe (częstotliwość), bezpieczeństwo (SSL, firewall, skanowanie malware), aktualizacje oprogramowania (CMS, wtyczki), monitoring serwera, raport z prac wykonanych, warunki wsparcia technicznego (email, telefon, czat), cenę i okres umowy. Ważne jest wyjaśnienie, co nie jest objęte usługą (np. dodawanie nowych funkcji, zmiana designu). Dobrze jest mieć zastrzeżenie o cenie za pracę poza umową.",
  },
  {
    question: "Jakie to ma wpływ na SEO i widoczność w Google?",
    answer: "Utrzymanie strony internetowej bezpośrednio wpływa na SEO. Regularne aktualizacje treści poprawiają ranking w Google (świeże artykuły, metadane, słowa kluczowe). Szybka witryna (optymalizacja wydajności, CDN, kompresja obrazów) to ranking faktor. Bezpieczeństwo (SSL, ochrona malware) wpływa na zaufanie Google. Regularny backup i monitoring 99,99% dostępności zmniejszają ryzyka outage'u, które karze Google'a. Zaniedbana, wolna lub niebezpieczna strona rankuje gorzej. Wkład w utrzymanie to inwestycja w organiczny ruch z wyszukiwarki.",
  },
  {
    question: "Czy hosting zarządzany jest lepszy niż tradycyjny hosting wspóldzielony?",
    answer: "Hosting zarządzany (managed hosting) jest lepszy niż tradycyjny hosting wspóldzielony dla większości firm. W hostingu zarządzanym: provider zarządza serwerem, aktualizacjami, bezpieczeństwem i backupami. Hosting wspóldzielony wymaga samodzielnej administracji. Hosting zarządzany kosztuje więcej (1500+ PLN rocznie), ale zapewnia lepszą wydajność, bezpieczeństwo i wsparcie. Dla sklepów e-commerce i stron biznesowych rekomendujemy hosting zarządzany. Dla hobbyistycznych blogów może wystarczyć hosting wspóldzielony. Webflow i Vercel to nowoczesne alternatywy, które eliminują potrzebę tradycyjnego hostingu.",
  },
  {
    question: "Jak često powinny być aktualizowane wtyczki i WordPress?",
    answer: "Wtyczki i WordPress powinny być aktualizowane natychmiast po pojaweniu się aktualizacji bezpieczeństwa, zazwyczaj w ciągu 24-48 godzin. Aktualizacje drobne (bugfix, mniejsze zmiany) powinny być instalowane co tydzień lub co miesiąc. Aktualizacje główne (nowe wersje) powinny być testowane przed instalacją w produkcji. Brak aktualizacji stanowi poważne zagrożenie bezpieczeństwa - zaniedbane witryny to cel ataków hakerów. Rekomendujemy automatyczne aktualizacje dla wtyczek i WordPressa. Wiele agencji oferuje automatyczne aktualizacje w ramach planu utrzymania.",
  },
  {
    question: "Czy powinnam robić backupy? Jak często?",
    answer: "Tak, backupy są absolutnie konieczne. Powinny być wykonywane co najmniej raz dziennie dla aktywnych stron, a co tydzień dla mniej aktywnych. Dla sklepów e-commerce rekomendujemy backupy wiele razy dziennie. Backupy powinny być przechowywane w co najmniej dwóch niezależnych lokalizacjach (np. lokalny serwer + chmura). Testuj przywracanie backupów co miesiąc, aby upewnić się, że działają. Brak backupów oznacza utratę danych i przychodu. Większość agencji oferuje automatyczne backupy w ramach planu utrzymania. Możesz również używać wtyczek WordPress (UpdraftPlus, BackWPup) do automatycznych backupów.",
  },
  {
    question: "Jakie są ukryte koszty utrzymania strony internetowej?",
    answer: "Ukrytymi kosztami mogą być: wsparcie w godzinach pozaroboczych (nocne, weekendowe), dodatkowe kopie zapasowe czy redundancja serwerowa, DDoS ochrona, premium wtyczki (SEO, bezpieczeństwo), szkolenie pracowników, migracja danych przy zmianie hostingu, udogodnienia (staging environment), raportowanie analityczne czy konsultacje. Niektóre agencje pobierają dodatkowe opłaty za: dodawanie nowych funkcji, zmianę designu, customowe życzenia. Każda umowa powinna wyraźnie określać, co jest wliczone i co wymaga dodatkowej opłaty.",
  },
];

const costComponents = [
  {
    element: "Hosting",
    basic: "300-600 PLN",
    advanced: "1500-5000 PLN",
    notes: "Hosting wspóldzielony vs zarządzany. Cena rośnie z ruchem.",
  },
  {
    element: "Domena",
    basic: "50-100 PLN",
    advanced: "50-100 PLN",
    notes: ".pl/.com/.eu. Rejestracja roczna u registratora.",
  },
  {
    element: "Certyfikat SSL",
    basic: "0 PLN",
    advanced: "200-500 PLN",
    notes: "Let's Encrypt darmowy. Premium SSL z guarantee.",
  },
  {
    element: "Wtyczki/Licencje",
    basic: "300-800 PLN",
    advanced: "2000-5000 PLN",
    notes: "WordPress plugins, SEO, backup, security tools.",
  },
  {
    element: "Aktualizacje CMS",
    basic: "1000-2000 PLN",
    advanced: "3000-5000 PLN",
    notes: "Bezpieczeństwo, kompatybilność, nowe funkcje.",
  },
  {
    element: "Backup",
    basic: "300-500 PLN",
    advanced: "1000-2000 PLN",
    notes: "Automatyczne daily backupy, redundancja.",
  },
  {
    element: "Monitorowanie",
    basic: "500-800 PLN",
    advanced: "1500-3000 PLN",
    notes: "Uptime monitoring, alert system, status page.",
  },
  {
    element: "Wsparcie techniczne",
    basic: "500-1500 PLN",
    advanced: "3000-8000 PLN",
    notes: "Email, telefon, czat. Godziny: 8-17 lub 24/7.",
  },
];

const costByType = [
  {
    type: "Prosta wizytówka",
    cost: "1500-3000 PLN",
    includes:
      "Hosting, domena, SSL, backup, monitor, email support",
  },
  {
    type: "Strona firmowa",
    cost: "3000-8000 PLN",
    includes:
      "Hosting, domena, SSL, backup, monitor, wsparcie, aktualizacje wtyczek, SEO monitoring",
  },
  {
    type: "Sklep WooCommerce",
    cost: "5000-15000 PLN",
    includes:
      "Hosting zarządzany, domena, SSL, backup 2x dziennie, monitor, wsparcie 24/7, aktualizacje, security, payment gateway integracja",
  },
  {
    type: "Portal/Serwis",
    cost: "8000-20000 PLN",
    includes:
      "Hosting dedykowany/cloud, domena, SSL, backup 4x dziennie, monitor z alertami, wsparcie 24/7, aktualizacje, CDN, analytics, staging env",
  },
  {
    type: "Dedykowana aplikacja",
    cost: "20000+ PLN",
    includes:
      "Cloud infrastructure, monitoring zaawansowany, backup redundancja, wsparcie 24/7, SLA gwarancje, custom security, scalability plan",
  },
];

const comparisonItems = [
  {
    aspect: "Koszt miesięczny",
    own: "150-500 PLN (zmienne)",
    agency: "250-1500 PLN (stała cena)",
  },
  {
    aspect: "Czas administracji",
    own: "5-20h/miesiąc",
    agency: "Profesjonaliści, 24/7",
  },
  {
    aspect: "Bezpieczeństwo",
    own: "Zależy od Ciebie",
    agency: "Skanowanie malware, firewall, backup",
  },
  {
    aspect: "Backup",
    own: "Często zapominane",
    agency: "Automatyczne codzienne",
  },
  {
    aspect: "Aktualizacje",
    own: "Ryzyko błędów",
    agency: "Profesjonalne testowanie",
  },
  {
    aspect: "Wsparcie",
    own: "Brak (sam się radzisz)",
    agency: "Email, telefon, czat dostępny",
  },
  {
    aspect: "Uptime gwarancja",
    own: "Brak (SLA 0%)",
    agency: "99-99.99% (SLA gwarancja)",
  },
  {
    aspect: "Raportowanie",
    own: "Nic",
    agency: "Miesięczny raport z prac",
  },
];

export default function BlogKosztProwadzeniaStrony() {
  return (
    <Layout>
      <SEOHead
        title="Ile kosztuje utrzymanie strony internetowej? Cennik 2025"
        description="Koszt prowadzenia strony www w Polsce: 1500-15000 PLN rocznie. Tabela kosztów, porównanie własnej administracji vs agencji, FAQ. Fotz.pl"
        canonicalUrl="https://fotz.pl/blog/koszt-prowadzenia-strony-internetowej"
      />
      <ArticleSchema
        title="Ile kosztuje utrzymanie strony internetowej? Cennik 2025"
        description="Szczegółowy przewodnik po kosztach utrzymania strony: hosting, domena, backup, wsparcie. Porównanie własnej administracji z usługami agencji."
        url="https://fotz.pl/blog/koszt-prowadzenia-strony-internetowej"
        datePublished="2025-04-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          {
            name: "Koszt prowadzenia strony internetowej",
            url: "https://fotz.pl/blog/koszt-prowadzenia-strony-internetowej",
          },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              {
                label: "Koszt prowadzenia strony",
                href: "/blog/koszt-prowadzenia-strony-internetowej",
              },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Marketing / Strategia
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ile kosztuje utrzymanie strony internetowej?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Kompleksowy cennik 2025: hosting, domena, SSL, backup, wsparcie techniczne. Porównanie własnej administracji z usługami agencji internetowej.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Zakres kosztów", value: "1500-20000 PLN" },
                { label: "Najczęstsza cena", value: "3000-8000 PLN" },
                { label: "Komponenty", value: "8 głównych" },
                { label: "ROI", value: "Wzrost ruchu" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 rounded-lg p-4 text-center"
                >
                  <div className="text-lg font-bold text-yellow-400">
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dlaczego utrzymanie strony jest ważne?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Utrzymanie strony internetowej to nie jednorazowa inwestycja. Po
              uruchomieniu witryny, znaczna część wydatków to bieżące koszty
              utrzymania, bezpieczeństwa i optimizacji. Zaniedbana strona powoli
              traci ruch w Google, staje się celem hakerów i zagrożeniem dla
              bezpieczeństwa danych klientów.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Koszt utrzymania zależy od: typu strony (wizytówka vs sklep),
              wolumenu ruchu, skomplikowania technicznego, wymagań
              bezpieczeństwa i poziomu wsparcia (email, telefon, 24/7).
            </p>
            <p className="text-lg text-gray-700">
              Strona, którą właściwie się utrzymuje, to stały źródło potencjalnych
              klientów i zwiększonej widoczności w wyszukiwarkach. Inwestycja w
              utrzymanie zwraca się poprzez wyższy ruch organiczny, mniej
              problemów technicznych i lepsze bezpieczeństwo.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Table 1: Cost Components */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Składniki kosztu utrzymania strony
            </h2>
            <p className="text-gray-600 mb-8">
              Przegląd głównych elementów wpływających na roczny koszt
              administracji stroną internetową w Polsce.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-4 font-semibold border border-gray-300">
                    Element
                  </th>
                  <th className="text-left p-4 font-semibold border border-gray-300">
                    Koszt roczny (podstawowy)
                  </th>
                  <th className="text-left p-4 font-semibold border border-gray-300">
                    Koszt roczny (zaawansowany)
                  </th>
                  <th className="text-left p-4 font-semibold border border-gray-300">
                    Uwagi
                  </th>
                </tr>
              </thead>
              <tbody>
                {costComponents.map((item, i) => (
                  <tr
                    key={item.element}
                    className={
                      i % 2 === 0
                        ? "bg-white hover:bg-gray-50"
                        : "bg-gray-100 hover:bg-gray-150"
                    }
                  >
                    <td className="p-4 border border-gray-300 font-semibold text-gray-900">
                      {item.element}
                    </td>
                    <td className="p-4 border border-gray-300 text-gray-700 font-medium">
                      {item.basic}
                    </td>
                    <td className="p-4 border border-gray-300 text-gray-700 font-medium">
                      {item.advanced}
                    </td>
                    <td className="p-4 border border-gray-300 text-gray-600 text-xs">
                      {item.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-gray-700">
            <strong>Razem roczny koszt:</strong> 1500-3000 PLN (podstawowy) lub
            5000-15000 PLN (zaawansowany). Dla wielkich portali lub aplikacji
            ponad 20000 PLN rocznie.
          </div>
        </div>
      </section>

      {/* Table 2: Cost by Type */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-white mb-2">
              Koszt utrzymania wg typu strony
            </h2>
            <p className="text-gray-400 mb-8">
              Rzeczywiste ceny utrzymania dla różnych rodzajów witryn.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-yellow-400 text-gray-900">
                  <th className="text-left p-4 font-semibold border border-gray-700">
                    Typ strony
                  </th>
                  <th className="text-left p-4 font-semibold border border-gray-700">
                    Roczny koszt
                  </th>
                  <th className="text-left p-4 font-semibold border border-gray-700">
                    Co obejmuje
                  </th>
                </tr>
              </thead>
              <tbody>
                {costByType.map((item, i) => (
                  <tr
                    key={item.type}
                    className={
                      i % 2 === 0
                        ? "bg-gray-800 text-gray-100"
                        : "bg-gray-750 text-gray-200"
                    }
                  >
                    <td className="p-4 border border-gray-700 font-semibold">
                      {item.type}
                    </td>
                    <td className="p-4 border border-gray-700 text-yellow-400 font-bold">
                      {item.cost}
                    </td>
                    <td className="p-4 border border-gray-700 text-xs">
                      {item.includes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Własna administracja vs usługi agencji
            </h2>
            <p className="text-gray-600 mb-8">
              Porównanie zarządzania stroną na własną rękę wobec outsourcowania
              do profesjonalnej agencji internetowej.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold text-gray-900 border border-gray-300">
                    Aspekt
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900 border border-gray-300">
                    Własna administracja
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900 border border-gray-300">
                    Usługa agencji
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr
                    key={item.aspect}
                    className={
                      i % 2 === 0
                        ? "bg-white hover:bg-gray-50"
                        : "bg-gray-100 hover:bg-gray-150"
                    }
                  >
                    <td className="p-4 border border-gray-300 font-semibold text-gray-900">
                      {item.aspect}
                    </td>
                    <td className="p-4 border border-gray-300 text-gray-700">
                      {item.own}
                    </td>
                    <td className="p-4 border border-gray-300 text-gray-700 bg-blue-50">
                      {item.agency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
            <p className="text-gray-800 font-semibold mb-2">
              Wnioski: kiedy wybrać agencję?
            </p>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>
                • Jeśli zarządzanie stroną zajmuje Ci więcej niż 5 godzin
                tygodniowo, lepiej zlecić to agencji.
              </li>
              <li>
                • Dla sklepów e-commerce zawsze rekomendujemy profesjonalne
                wsparcie.
              </li>
              <li>
                • Agencja zapewnia bezpieczeństwo, backup i monitoring 24/7.
              </li>
              <li>
                • Koszt agencji zwraca się poprzez wzrost ruchu i zmniejszenie
                ryzyka.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Kluczowe ustalenia o kosztach
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Hosting to najważniejszy koszt",
                  desc: "Zazwyczaj 20-40% budżetu. Nigdy nie oszczędzaj na hostingu - wpływa na szybkość i bezpieczeństwo.",
                },
                {
                  title: "Backup to ubezpieczenie",
                  desc: "Brak backupu może kosztować Cię utratę całej strony. Zainwestuj w codzienne automatyczne backupy.",
                },
                {
                  title: "Bezpieczeństwo jest droższe niż atak",
                  desc: "Zainfekowana strona to zatrata 5000+ PLN i czasu na odbudowę. Profilaktyka jest tańsza.",
                },
                {
                  title: "Czas to pieniądz",
                  desc: "Jeśli sam administrujesz, traciasz czas na naukę. Agencja to profesjonaliści z latami doświadczenia.",
                },
                {
                  title: "Skalowanie kosztów",
                  desc: "Rośnący ruch = wyższe koszty hostingu. Plan na przyszłość, nie zajmuj się tym gdy strona pada.",
                },
                {
                  title: "Wsparcie techniczne to inwestycja",
                  desc: "Błąd na produkcji to chaos. Wsparcie 24/7 rośnie przychody poprzez stabilność.",
                },
              ].map((item) => (
                <FadeInView key={item.title}>
                  <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-400 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Często zadawane pytania
            </h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator Preview */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold mb-6">
              Ile będzie kosztowała Twoja strona?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  type: "Wizytówka",
                  price: "150-250 PLN/m",
                  features:
                    "Hosting + domena + wsparcie email",
                },
                {
                  type: "Strona firmowa",
                  price: "250-700 PLN/m",
                  features:
                    "Hosting + domena + backup + aktualizacje + SEO",
                },
                {
                  type: "Sklep/Portal",
                  price: "500-1500+ PLN/m",
                  features:
                    "Hosting zarządzany + monitoring 24/7 + wsparcie premium",
                },
              ].map((pkg) => (
                <FadeInView key={pkg.type}>
                  <div className="bg-gray-800 rounded-lg p-6 border border-yellow-400">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">
                      {pkg.type}
                    </h3>
                    <div className="text-2xl font-bold mb-3">{pkg.price}</div>
                    <p className="text-gray-300 text-sm">{pkg.features}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
            <p className="text-gray-400 text-center text-sm">
              Ceny orientacyjne dla Polski. Rzeczywisty koszt zależy od
              wymagań.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-3xl font-bold mb-4">
              Szukasz taniego i niezawodnego utrzymania strony?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Fotz.pl oferuje kompleksowe usługi utrzymania stron dla firm w
              Polsce. Od hostingu po bezpieczeństwo i wsparcie 24/7.
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-gray-900 text-yellow-400 font-bold px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg"
            >
              Zapytaj o ofertę utrzymania
            </a>
          </FadeInView>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
