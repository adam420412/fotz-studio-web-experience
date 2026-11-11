import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Search } from "lucide-react";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const seoTitle = "Techniczne SEO: poradnik i audyt 2026 | FOTZ";
const seoDescription = "Techniczne SEO krok po kroku: crawling, indeksowanie, Core Web Vitals, canonical i robots.txt. Sprawdź, jak przeprowadzić audyt i zoptymalizować stronę.";
const canonicalUrl = "https://www.fotz-studio.pl/blog/seo-techniczne-poradnik";

const articleData = {
  headline: "Techniczne SEO: audyt i optymalizacja strony krok po kroku",
  description: seoDescription,
  datePublished: "2025-04-12",
  dateModified: "2026-11-11",
  url: canonicalUrl,
};

const breadcrumbs = [
  { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
  { name: "Blog", url: "https://www.fotz-studio.pl/blog" },
  { name: "Techniczne SEO", url: canonicalUrl },
];

const contents = [
  { href: "#czym-jest-techniczne-seo", label: "Czym jest techniczne SEO" },
  { href: "#elementy-technicznego-seo", label: "Najważniejsze elementy" },
  { href: "#crawling-i-indeksowanie", label: "Crawling i indeksowanie" },
  { href: "#core-web-vitals", label: "Core Web Vitals i mobile" },
  { href: "#adresy-i-renderowanie", label: "Adresy URL i renderowanie" },
  { href: "#audyt-techniczny-seo", label: "Audyt krok po kroku" },
  { href: "#priorytety-i-narzedzia", label: "Priorytety i narzędzia" },
  { href: "#bledy-i-monitorowanie", label: "Błędy i monitorowanie" },
  { href: "#faq-techniczne-seo", label: "Najczęstsze pytania" },
];

const technicalElements = [
  {
    element: "Dostęp do witryny",
    check: "Czy robot wyszukiwarki może pobrać ważne adresy URL i zasoby?",
    evidence: "Odpowiedź HTTP, robots.txt, nagłówki X-Robots-Tag, logi serwera",
  },
  {
    element: "Indeksowanie stron",
    check: "Czy właściwe podstrony są indeksowane, a warianty robocze wykluczone?",
    evidence: "Raporty i inspekcja adresu w Google Search Console, tagi noindex",
  },
  {
    element: "Kanonikalizacja",
    check: "Czy duplikaty wskazują spójną wersję główną, zgodną z linkowaniem?",
    evidence: "Canonical, przekierowania, mapa witryny, wewnętrzne linki",
  },
  {
    element: "Renderowanie",
    check: "Czy treść i nawigacja są dostępne także po wykonaniu JavaScriptu?",
    evidence: "Porównanie HTML, wyrenderowanego DOM i zrzutów z inspekcji URL",
  },
  {
    element: "Core Web Vitals",
    check: "Jak strona ładuje treść, reaguje na działania i zachowuje układ?",
    evidence: "Dane użytkowników, PageSpeed Insights, testy laboratoryjne Lighthouse",
  },
  {
    element: "Wersja mobilna",
    check: "Czy na telefonie dostępna jest ta sama treść, nawigacja i metadata?",
    evidence: "Test kilku szerokości ekranu, inspekcja mobilnego renderowania",
  },
  {
    element: "Architektura informacji",
    check: "Czy ważne zasoby mają logiczne połączenia ze strony głównej i kategorii?",
    evidence: "Crawler, głębokość stron, osierocone adresy, linki wewnętrzne",
  },
  {
    element: "HTTPS i dane strukturalne",
    check: "Czy połączenie jest bezpieczne, a Schema opisuje widoczną treść?",
    evidence: "Certyfikat SSL, mieszane zasoby, walidacja JSON-LD i odbiór strony",
  },
];

const auditSteps = [
  {
    title: "1. Ustal zakres i zapisz punkt wyjścia",
    body: [
      "Wybierz typ strony, środowisko i zakres prac. Inna próba wystarczy do kontroli małej witryny firmowej, a inna jest potrzebna w sklepie z filtrami, wieloma kategoriami i tysiącami wariantów adresów. Zapisz listę szablonów: stronę główną, kategorię, ofertę, artykuł, wyniki wyszukiwania oraz stronę błędu. Uwzględnij wersję mobilną i desktopową.",
      "Przed zmianami zanotuj stan indeksacji, przykładowe zapytania i strony w Google Search Console, wyniki Core Web Vitals oraz crawl. Nie zaczynaj od pojedynczego wyniku narzędzia SEO. Dokumentacja powinna pozwolić powtórzyć pomiar: data, adres URL, urządzenie, źródło danych i zrzut lub eksport. To baza do późniejszego odbioru, a nie obietnica wzrostu ruchu organicznego.",
    ],
    acceptance: "Kryterium odbioru: lista adresów i szablonów jest kompletna, a pierwotne raporty można odtworzyć.",
  },
  {
    title: "2. Sprawdź odpowiedzi serwera i dostęp robotów",
    body: [
      "Rozpocznij crawl od strony głównej i mapy witryny. Sprawdź, czy ważne zasoby zwracają status 200, czy przeniesione adresy mają jedno przekierowanie do docelowego URL i czy usunięte strony nie odpowiadają błędnie jako 200. Błąd 404 jest właściwy dla zasobu, którego nie ma; problemem są przede wszystkim linki prowadzące do niego z ważnych miejsc lub usunięcie strony, która powinna nadal działać.",
      "Przejrzyj robots.txt w katalogu głównym domeny. Reguła Disallow ogranicza skanowanie, ale nie jest mechanizmem usuwania strony z indeksu ani zabezpieczeniem danych. Nie blokuj CSS i JavaScriptu potrzebnych do renderowania. Jeżeli podstrona ma otrzymać noindex, robot musi móc pobrać jej kod i odczytać dyrektywę. Sprawdź także nagłówek X-Robots-Tag, zabezpieczenia środowiska testowego i nietypowe błędy 5xx.",
    ],
    acceptance: "Kryterium odbioru: ważne adresy i zasoby są dostępne, łańcuchy przekierowań usunięto, a reguły blokujące mają uzasadnienie.",
  },
  {
    title: "3. Zbadaj indeksację, kanonikale i duplikację",
    body: [
      "Zestaw crawl z raportem indeksowania stron. Dla każdej istotnej grupy wyjaśnij, dlaczego ma być widoczna w wynikach wyszukiwania. Nie każda podstrona wymaga indeksacji: wewnętrzne wyniki wyszukiwania, niektóre parametry i strony techniczne mogą pozostać wykluczone. Decyzję podejmuj na podstawie funkcji adresu, jakości treści strony i spójności sygnałów, nie samej liczby zaindeksowanych URL-i.",
      "Tag canonical jest wskazówką co do preferowanej wersji, a nie poleceniem gwarantującym wybór Google. Na stronie głównej i samodzielnych artykułach zwykle wskazuje on ich własny, kanoniczny adres. Wariant z parametrem może wskazywać wersję bez parametru, jeśli rzeczywiście powtarza treść. Canonical nie zastępuje przekierowania przy trwałej zmianie adresu. Upewnij się, że mapa witryny, linki i przekierowania nie promują odmiennych wersji.",
    ],
    acceptance: "Kryterium odbioru: dla próby adresów zapisano zamiar indeksacji, a Google i canonical wskazują zgodne wersje lub wyjaśniono różnicę.",
  },
  {
    title: "4. Oceń renderowanie i wersję mobilną",
    body: [
      "Porównaj odpowiedź serwera z wyrenderowanym dokumentem. Sprawdź, czy główna treść, linki, nagłówki i dane strukturalne nie znikają po wykonaniu JavaScriptu. W inspekcji adresu URL obejrzyj zrzut i HTML po renderowaniu, a następnie porównaj je z przeglądarką. Samo pojawienie się tekstu w kodzie źródłowym nie potwierdza poprawnej nawigacji, a działanie w jednej przeglądarce nie dowodzi dostępności dla robota Google.",
      "Na urządzeniach mobilnych zweryfikuj tę samą zawartość, linki, obrazy, robots meta i dane Schema. Przetestuj menu, tabele, formularze, rozmiar obszarów dotykowych i poziome przewijanie. Jeśli wersja mobilna pomija akapity albo linki dostępne na desktopie, uzupełnij je przed dalszą optymalizacją. W przypadku aplikacji JavaScript rozważ renderowanie po stronie serwera lub wstępne renderowanie tam, gdzie rozwiązuje to udowodniony problem.",
    ],
    acceptance: "Kryterium odbioru: kluczowe treści i elementy strony są obecne po renderowaniu oraz zgodne między mobile i desktop.",
  },
  {
    title: "5. Zmierz wydajność i wskaż przyczyny",
    body: [
      "Najpierw sprawdź dane z rzeczywistych wizyt, potem użyj testu laboratoryjnego do diagnozy. PageSpeed Insights może pokazać oba rodzaje pomiarów; Lighthouse pomaga znaleźć konkretne zasoby i zadania. Wynik punktowy nie zastępuje analizy LCP, INP i CLS. Oceń reprezentatywne szablony, a nie tylko stronę główną. Jeśli danych z użytkowników jest za mało, oznacz ograniczenie i opieraj wnioski na kontrolowanych testach.",
      "Dla LCP zidentyfikuj największy element i etapy jego ładowania: odpowiedź serwera, wykrycie zasobu, pobieranie i wyświetlenie. Dla INP szukaj długich zadań JavaScript oraz kosztownych obsług zdarzeń. Przy CLS ustal elementy przesuwające się po początkowym wyświetleniu. Poprawka powinna odpowiadać przyczynie: wymiary obrazów nie naprawią wolnej odpowiedzi serwera, a kompresja grafiki nie skróci długiego zadania w głównym wątku.",
    ],
    acceptance: "Kryterium odbioru: każda rekomendacja wskazuje metrykę, źródło problemu, zmieniany zasób i sposób ponownego pomiaru.",
  },
  {
    title: "6. Przejrzyj strukturę, linki i dane Schema",
    body: [
      "Sprawdź, czy użytkownik i crawler docierają do ważnych podstron przez zwykłe linki HTML. Znajdź strony osierocone, zbyt głębokie lub zależne wyłącznie od wewnętrznej wyszukiwarki. Oceniaj architekturę według intencji: kategorie łączą powiązane oferty, artykuły kierują do rozwinięcia tematu, a nawigacja nie powiela bez potrzeby setek kombinacji filtrów. Link ma prowadzić do istniejącej strony i opisywać jej zawartość.",
      "Dane strukturalne powinny odpowiadać temu, co widoczne na stronie. W artykule sprawdź m.in. headline, canonical, autora, datę publikacji i aktualną datę modyfikacji; w FAQ porównaj każde pytanie oraz odpowiedź z treścią strony. Walidator wykrywa błędy składni i wymaganych pól, lecz nie gwarantuje rozszerzonego wyglądu wyniku. Po wdrożeniu obejrzyj wyrenderowany JSON-LD, ponieważ kod źródłowy i DOM mogą się różnić.",
    ],
    acceptance: "Kryterium odbioru: wewnętrzne odnośniki działają, ważne strony mają wejścia, a Schema jest poprawne i zgodne z widoczną treścią.",
  },
  {
    title: "7. Wdróż kontrolowanie i odbierz rezultat",
    body: [
      "Uporządkuj zadania według wpływu na dostępność i zakres występowania. Najpierw odblokuj wartościowe strony, usuń pętle przekierowań i przywróć błędy serwera; dopiero później poprawiaj drobne ostrzeżenia. Zmiany wdrażaj małymi partiami, z zapisanym zakresem i możliwością wycofania. Środowisko testowe nie może przypadkowo zastąpić produkcji w mapie witryny lub przenieść na nią noindex.",
      "Po publikacji powtór crawl dla tych samych szablonów, sprawdź odpowiedzi HTTP, canonical, dane strukturalne i wydajność. W Google Search Console skontroluj wybrane adresy oraz późniejsze raporty indeksowania. Raport z audytu SEO powinien rozdzielać: zdiagnozowane problemy, wykonane poprawki, rzeczy do decyzji i pomiar po wdrożeniu. Same zielone wyniki narzędzi nie potwierdzają poprawy pozycji w wynikach wyszukiwania.",
    ],
    acceptance: "Kryterium odbioru: wynik po zmianie jest udokumentowany, a każde zgłoszenie ma status, właściciela i dowód kontroli.",
  },
];

const faqItems = [
  {
    question: "Co to jest techniczne SEO?",
    answer: "Techniczne SEO to prace nad dostępem do witryny, skanowaniem, indeksowaniem, renderowaniem, wydajnością i strukturą adresów. Obejmuje m.in. robots.txt, mapę witryny, canonical, przekierowania, statusy HTTP, Core Web Vitals, wersję mobilną, HTTPS i dane strukturalne. Celem jest usunięcie barier, które utrudniają wyszukiwarce oraz użytkownikowi korzystanie ze strony. Nie zastępuje to wartościowej treści, linków ani dopasowania do intencji wyszukiwania.",
  },
  {
    question: "Czym różni się techniczne SEO od on-page?",
    answer: "On-page dotyczy głównie treści, nagłówków, słów kluczowych i dopasowania strony do zapytania. Techniczne aspekty dotyczą sposobu dostarczania i interpretowania tej treści: odpowiedzi serwera, indeksowania stron, renderowania, mobilności i wydajności. Obszary się przenikają. Przykładowo linkowanie wewnętrzne wspiera nawigację użytkownika i odkrywanie adresów, a poprawny title jest elementem strony widocznym w wynikach wyszukiwania. W audycie warto opisać problem raz i przypisać mu wspólne działanie.",
  },
  {
    question: "Jak sprawdzić stan SEO technicznego swojej strony?",
    answer: "Zacznij od Google Search Console, crawlera i PageSpeed Insights. Wybierz reprezentatywne adresy URL, sprawdź ich odpowiedzi HTTP, canonical, dyrektywy robots, wyrenderowany HTML oraz wersję mobilną. Następnie porównaj listę stron w wynikach wyszukiwania z mapą witryny i strukturą linków. Wynik narzędzia traktuj jako wskazówkę do weryfikacji, nie gotową diagnozę. Pełny audyt techniczny SEO łączy dane z kilku źródeł i kończy się powtarzalnym testem poprawek.",
  },
  {
    question: "Jak często robić audyt techniczny?",
    answer: "Częstotliwość zależy od skali i tempa zmian. Większą kontrolę warto wykonać po migracji, zmianie systemu, przebudowie nawigacji lub wdrożeniu nowego sposobu renderowania. W stabilnej witrynie przydatny jest okresowy przeglądar raportów i ważnych szablonów, uzupełniony monitoringiem błędów serwera, indeksacji i Core Web Vitals. Nie ma jednej daty właściwej dla każdego serwisu; zakres ustal na podstawie ryzyka i liczby wdrożeń.",
  },
  {
    question: "Czy robots.txt blokuje indeksowanie strony?",
    answer: "Nie samodzielnie. Disallow informuje zgodne roboty, których zasobów nie powinny skanować, ale adres może nadal pojawić się w indeksie na podstawie innych sygnałów. Jeśli chcesz użyć noindex, nie blokuj dostępu do strony, bo robot musi odczytać tę dyrektywę. robots.txt nie chroni też poufnych danych. Do kontroli prywatności służą odpowiednie uprawnienia i uwierzytelnianie, a nie instrukcje dla crawlera.",
  },
  {
    question: "Czy mapa witryny XML jest obowiązkowa?",
    answer: "Nie, ale ułatwia przekazanie listy preferowanych adresów, szczególnie w większym lub słabiej połączonym serwisie. Mapa witryny powinna zawierać kanoniczne adresy zwracające 200 i przeznaczone do indeksacji. Nie umieszczaj w niej przekierowań, błędów 404, noindex ani środowisk testowych. Jej obecność nie gwarantuje zaindeksowania każdego URL-a. Po aktualizacji zweryfikuj format, dostępność i zgodność z rzeczywistą architekturą strony.",
  },
  {
    question: "Co daje canonical i kiedy go stosować?",
    answer: "Canonical wskazuje preferowany adres spośród stron o takiej samej lub bardzo podobnej zawartości. Stosuje się go przy parametrach i innych uzasadnionych wariantach, a także jako self-canonical na samodzielnych stronach. Nie jest to polecenie ani sposób na połączenie niezwiązanych treści. Jeżeli stary adres trwale zmienia się na nowy, właściwsze jest przekierowanie 301 lub 308. Linki, sitemap i canonical powinny wspierać tę samą wersję.",
  },
  {
    question: "Jakie są progi Core Web Vitals?",
    answer: "Dla dobrego doświadczenia użytkownika Google stosuje progi: LCP do 2,5 sekundy, INP do 200 milisekund i CLS do 0,1. LCP opisuje wyświetlenie największej treści, INP reakcję na interakcje, a CLS stabilność wizualną. FID został zastąpiony przez INP, więc nie należy traktować go jako bieżącej metryki Core Web Vitals. Oceniaj dane dla reprezentatywnych stron i urządzeń oraz oddziel pomiar laboratoryjny od danych rzeczywistych.",
  },
  {
    question: "Czy dane strukturalne podnoszą pozycje?",
    answer: "Dane strukturalne pomagają opisać znaczenie treści i mogą umożliwić określone formy prezentacji wyniku, jeśli strona spełnia wymagania. Nie są gwarancją wyższej pozycji ani rozszerzonego wyniku. Schema musi odpowiadać widocznej zawartości i aktualnemu canonical. W FAQ wszystkie pytania i odpowiedzi zapisane w JSON-LD powinny być dostępne także dla czytelnika. Po zmianie wykonaj walidację składni i kontrolę wyrenderowanego kodu.",
  },
  {
    question: "Czy techniczne SEO wystarczy do pozycjonowania?",
    answer: "Nie. Można powiedzieć, że techniczne SEO to fundament wykorzystania treści, ale nie zastępuje odpowiedzi na potrzeby użytkownika, jakości oferty, rozpoznawalności marki ani linków. Poprawna techniczna optymalizacja usuwa przeszkody i porządkuje sygnały, jednak nie gwarantuje pozycji, kliknięć lub klientów. Skuteczna strategia SEO łączy technikę, treści i pomiar. Gdy strona działa poprawnie, kolejny krok dobierz na podstawie intencji zapytań i jakości poszczególnych podstron.",
  },
];

export default function BlogSEOTechniczne() {
  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        ogType="article"
      />
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs.map((item) => ({
          label: item.name,
          href: item.url,
        }))} />

        <article id="article-content">
          <header className="py-12 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" aria-hidden="true" /> 18 min czytania</span>
                <span className="flex items-center gap-1"><Search className="w-4 h-4" aria-hidden="true" /> Poradnik techniczny</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Techniczne SEO: audyt i optymalizacja strony krok po kroku
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-5">
                Sprawdź, jak robot wyszukiwarki dociera do strony, które adresy trafiają do indeksu i co ogranicza wydajność. Ten poradnik prowadzi przez diagnozę, naprawę i kontrolę wdrożenia — bez mieszania wyników narzędzi z gwarancją pozycji.
              </p>
              <p className="text-sm text-gray-400">
                Publikacja: 12 kwietnia 2025 · Aktualizacja: 11 listopada 2026
              </p>
            </div>
          </header>

          <div className="py-12 md:py-16 bg-gray-900">
            <div className="max-w-3xl mx-auto px-4 md:px-6 text-gray-300 leading-relaxed">
              <section aria-labelledby="w-skrocie" className="mb-10 p-6 rounded-lg border border-yellow-400/30 bg-gray-800/60">
                <h2 id="w-skrocie" className="text-2xl font-bold text-yellow-400 mb-4">W skrócie</h2>
                <ul className="space-y-3">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-yellow-400" aria-hidden="true" /><span>Najpierw zapewnij dostęp do ważnych stron i zasobów, potem uporządkuj indeksowanie, a dopiero później optymalizuj szczegóły.</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-yellow-400" aria-hidden="true" /><span>Canonical, noindex, robots.txt i przekierowania pełnią różne funkcje. Nie zastępuj jednej dyrektywy drugą.</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-yellow-400" aria-hidden="true" /><span>Core Web Vitals mierz w danych rzeczywistych i testach laboratoryjnych, pamiętając o LCP, INP oraz CLS.</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-yellow-400" aria-hidden="true" /><span>Każdą poprawkę odbierz ponownym crawlem i kontrolą konkretnego adresu. Wynik narzędzia nie jest dowodem wzrostu widoczności.</span></li>
                </ul>
              </section>

              <nav aria-labelledby="spis-tresci" className="mb-12 p-6 rounded-lg border border-gray-700 bg-gray-800/40">
                <h2 id="spis-tresci" className="text-xl font-bold text-white mb-4">Spis treści</h2>
                <ol className="list-decimal list-inside space-y-2 text-sm md:text-base">
                  {contents.map((item) => (
                    <li key={item.href}><a className="text-yellow-300 hover:text-yellow-200 underline decoration-yellow-400/40 underline-offset-4" href={item.href}>{item.label}</a></li>
                  ))}
                </ol>
              </nav>

              <section aria-labelledby="czym-jest-techniczne-seo" className="mb-12">
                <h2 id="czym-jest-techniczne-seo" className="text-2xl md:text-3xl font-bold text-yellow-400 mb-5">Czym jest techniczne SEO i co obejmuje?</h2>
                <p className="mb-5">
                  Techniczne SEO to optymalizacja infrastruktury i sposobu udostępniania strony internetowej, tak aby roboty mogły ją pobrać, zrenderować i zinterpretować, a użytkownik mógł wygodnie z niej korzystać. W zakres wchodzą odpowiedzi serwera, reguły skanowania, indeksowanie stron, kanonikalizacja, architektura linków, wydajność, wersja mobilna i dane strukturalne. Nie jest to jednorazowa lista tagów, lecz kontrola całej drogi od żądania adresu URL do wyświetlenia treści.
                </p>
                <p className="mb-5">
                  W praktyce techniczne SEO jest fundamentem pozostałych prac, ponieważ wartościowy artykuł nie pomoże, jeśli adres zwraca błąd serwera, wersja mobilna ukrywa treść albo sprzeczne kanonikale kierują na inny wariant. Jednocześnie technika nie zastępuje słów kluczowych, jakości informacji i dopasowania do zapytania. Strona może przejść wszystkie automatyczne testy, a mimo to nie odpowiadać na intencję odbiorcy.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Crawling, indeksowanie, renderowanie i ranking</h3>
                <p className="mb-5">
                  <strong>Crawling</strong> to pobieranie adresów i zasobów przez robota. <strong>Renderowanie</strong> polega na zbudowaniu strony z HTML, CSS i JavaScriptu. <strong>Indeksowanie</strong> oznacza analizę i możliwość zapisania strony w indeksie, natomiast <strong>ranking</strong> to późniejsze uporządkowanie wyników dla konkretnego zapytania. Te etapy warto rozróżniać: dostęp do adresu nie oznacza automatycznie indeksacji, a indeksacja nie przesądza o pozycji w wynikach wyszukiwania.
                </p>
                <p className="mb-5">
                  Przykładowo, jeśli robot nie pobiera JavaScriptu zablokowanego w robots.txt, problem dotyczy zasobu potrzebnego do renderowania. Jeśli pobiera stronę, ale widzi noindex, analizuje dyrektywę wykluczenia. Gdy widzi dwa podobne adresy z różnymi kanonikalami, musi rozstrzygnąć sprzeczne sygnały. Poprawna diagnoza zaczyna się od wskazania etapu, na którym występuje bariera.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Dlaczego techniczne SEO jest ważne dla widoczności?</h3>
                <p>
                  Błędy techniczne mogą ograniczać odkrywanie podstron, utrudniać wybór właściwego adresu i pogarszać doświadczenie użytkownika. Ich wpływ zależy od zakresu: jeden nieistotny obraz z błędem 404 to inna sytuacja niż niedostępność całego katalogu produktów. Dlatego optymalizacja techniczna powinna zaczynać się od skali problemu i znaczenia strony, a nie od liczby ostrzeżeń w raporcie. Efektem prac ma być sprawdzalna poprawa działania serwisu, nie obietnica ruchu lub leadów.
                </p>
              </section>

              <section aria-labelledby="elementy-technicznego-seo" className="mb-12">
                <h2 id="elementy-technicznego-seo" className="text-2xl md:text-3xl font-bold text-yellow-400 mb-5">Najważniejsze elementy technicznego SEO</h2>
                <p className="mb-6">
                  Poniższa checklist łączy obszar kontroli z pytaniem diagnostycznym i dowodem. Dzięki temu audyt techniczny nie kończy się ogólnym stwierdzeniem „popraw stronę”, lecz wskazuje, co dokładnie sprawdzić przed i po zmianie.
                </p>
                <div className="overflow-x-auto border border-gray-700 rounded-lg">
                  <table className="w-full text-sm">
                    <caption className="text-left px-4 py-3 text-gray-400">Zakres kontroli technicznej i przykładowe źródła dowodów</caption>
                    <thead>
                      <tr className="bg-gray-800 border-b border-gray-700">
                        <th scope="col" className="px-4 py-3 text-left font-semibold text-yellow-400">Element</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold text-yellow-400">Pytanie kontrolne</th>
                        <th scope="col" className="px-4 py-3 text-left font-semibold text-yellow-400">Dowód</th>
                      </tr>
                    </thead>
                    <tbody>
                      {technicalElements.map((item) => (
                        <tr key={item.element} className="border-b border-gray-800 last:border-0 align-top">
                          <th scope="row" className="px-4 py-4 text-left font-medium text-white">{item.element}</th>
                          <td className="px-4 py-4">{item.check}</td>
                          <td className="px-4 py-4 text-gray-400">{item.evidence}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 text-sm text-gray-400">
                  Specjaliści SEO mogą użyć crawl i eksportów do diagnozy, ale ostateczną decyzję o wdrożeniu powinny wspierać ręczne testy. Każdy element technicznego SEO wymaga też dopasowania do systemu i skali witryny.
                </p>
              </section>

              <section aria-labelledby="crawling-i-indeksowanie" className="mb-12">
                <h2 id="crawling-i-indeksowanie" className="text-2xl md:text-3xl font-bold text-yellow-400 mb-5">Crawling i indeksowanie: jak zoptymalizować dostęp do strony?</h2>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Robots.txt: sterowanie skanowaniem, nie bezpieczeństwem</h3>
                <p className="mb-5">
                  Plik robots.txt w głównym katalogu hosta zawiera reguły dla wybranych robotów. Przed edycją sprawdź, jakie katalogi rzeczywiście istnieją i czy przypadkiem nie blokujesz plików CSS, JavaScript lub grafik koniecznych do wyświetlenia strony. Reguły dla jednej domeny nie kontrolują automatycznie innych subdomen. Zmianę przetestuj na bezpiecznej kopii i sprawdź dokładny adres pliku po publikacji.
                </p>
                <p className="mb-5">
                  Nie używaj Disallow jako zamiennika noindex. Jeżeli zasób jest zablokowany przed skanowaniem, robot nie zobaczy meta robots w dokumencie. Adres może zostać odkryty przez link mimo braku pobrania treści. W środowisku stagingowym samo robots.txt również nie wystarczy — dostęp ogranicz autoryzacją, a przed uruchomieniem produkcji sprawdź, czy blokady lub noindex nie przeniosły się na właściwą domenę.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Sitemap XML: lista wartościowych, kanonicznych adresów</h3>
                <p className="mb-5">
                  Mapa witryny powinna przedstawiać aktualny spis stron przeznaczonych do wyszukiwarki. Dodawaj do niej kanoniczne URL-e ze statusem 200, bez noindex i bez przekierowań. W dużym serwisie podział na mapy szablonów ułatwia diagnozę, ale nie zastępuje linkowania wewnętrznego. Po zmianie struktury porównaj sitemap.xml z crawlem: adresy obecne tylko w mapie mogą być osierocone, a brak w mapie ważnej strony może wskazywać błąd generowania.
                </p>
                <p className="mb-5">
                  Data modyfikacji powinna odzwierciedlać istotną zmianę strony, a nie każde automatyczne generowanie pliku. Samo przesłanie mapy w Google Search Console nie wymusi indeksacji. Raport o przesłanych i zaindeksowanych adresów wykorzystaj jako punkt wyjścia do sprawdzenia konkretnych przykładów.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Przekierowania i kody odpowiedzi HTTP</h3>
                <p className="mb-5">
                  Przy trwałej zmianie adresu stosuj przekierowanie bezpośrednio do nowej, odpowiadającej treścią strony. Usuń pośrednie etapy A → B → C i pętle, a wewnętrzne linki zaktualizuj tak, aby nie zależały od ciągłego przekierowywania. Odpowiedź 301 lub 308 służy do trwałych zmian, natomiast 302 i 307 opisują przeniesienie tymczasowe. Wybór zależy od zamiaru i zachowania metody żądania, nie od oczekiwania „mocniejszego” przekazania wartości SEO.
                </p>
                <p className="mb-5">
                  Status 200 należy zostawić dla działającej strony, 404 lub 410 dla zasobu usuniętego, a błędy 5xx diagnozować po stronie serwera. Soft 404 to sytuacja, w której strona wygląda na błąd lub pozbawioną treści, mimo że odpowiada 200. Nie przekierowuj wszystkich nieistniejących adresów do strony głównej. Jeśli istnieje rzeczywisty zamiennik, kieruj do niego; w przeciwnym razie zwróć właściwy błąd i popraw linki prowadzące do zasobu.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Crawl budget i analiza logów serwera</h3>
                <p>
                  Przy małej stronie firmowej budżet skanowania zwykle nie jest pierwszym miejscem optymalizacji. Przy rozbudowanych sklepach internetowych, wielu parametrach i częstych zmianach warto sprawdzić, które grupy adresów zużywają zasoby robota. Logi serwera pokazują rzeczywiste żądania, statusy i czas odpowiedzi, lecz wymagają poprawnej identyfikacji robota oraz ochrony danych. Łącz je z crawlem i indeksacją, zamiast wyciągać wnioski z samej liczby żądań.
                </p>
              </section>

              <section aria-labelledby="core-web-vitals" className="mb-12">
                <h2 id="core-web-vitals" className="text-2xl md:text-3xl font-bold text-yellow-400 mb-5">Core Web Vitals, szybkość strony i urządzenia mobilne</h2>
                <p className="mb-6">
                  Core Web Vitals obejmują LCP, INP i CLS. Są częścią oceny doświadczenia użytkownika, ale pojedynczy wynik Lighthouse nie jest tym samym co dane z rzeczywistych wizyt. W 2026 roku nadal analizuj te trzy bieżące metryki; FID może pojawić się w starych raportach historycznych, jednak zastąpiło go INP.
                </p>
                <div className="grid gap-4 md:grid-cols-3 mb-7">
                  <section className="bg-gray-800/60 p-5 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-white mb-2">LCP — ładowanie</h3>
                    <p className="text-sm mb-3">Largest Contentful Paint mierzy czas wyświetlenia największego elementu treści. Dobry próg to do 2,5 s.</p>
                    <p className="text-sm text-gray-400">Sprawdź odpowiedź serwera, obraz lub blok tekstu LCP, priorytet pobierania, rozmiar plików i blokujące zasoby.</p>
                  </section>
                  <section className="bg-gray-800/60 p-5 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-white mb-2">INP — interaktywność</h3>
                    <p className="text-sm mb-3">Interaction to Next Paint ocenia opóźnienie reakcji strony na interakcje użytkownika. Dobry próg to do 200 ms.</p>
                    <p className="text-sm text-gray-400">Szukaj długich zadań, nadmiernego JavaScriptu, kosztownych zdarzeń i opóźnień przed aktualizacją obrazu.</p>
                  </section>
                  <section className="bg-gray-800/60 p-5 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-white mb-2">CLS — stabilność</h3>
                    <p className="text-sm mb-3">Cumulative Layout Shift mierzy nieoczekiwane przesunięcia układu. Dobry próg to nie więcej niż 0,1.</p>
                    <p className="text-sm text-gray-400">Rezerwuj miejsce na obrazy, osadzone media i dynamiczne bloki. Sprawdzaj fonty oraz elementy dokładane nad treścią.</p>
                  </section>
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Jak zwiększyć szybkość ładowania strony?</h3>
                <p className="mb-5">
                  Zacznij od zidentyfikowania największego kosztu. Jeśli serwer długo odpowiada, sprawdź buforowanie, zapytania i infrastrukturę. Jeśli problemem jest duży obraz LCP, dobierz wymiary, format i priorytet ładowania. Przy nadmiernym JavaScript ogranicz nieużywany kod, dziel pakiety i skracaj pracę głównego wątku. Szybkość ładowania strony zależy od wielu etapów, więc porównuj ten sam adres, urządzenie i warunki testu przed oraz po zmianie.
                </p>
                <p className="mb-5">
                  Lazy loading może odroczyć obrazy poza pierwszym ekranem, ale nie stosuj go bezrefleksyjnie do grafiki LCP. Wymiary obrazów i osadzonych mediów pomagają ograniczyć CLS, natomiast preload stosuj tylko do udowodnionych zasobów krytycznych. Każde dodatkowe przyspieszenie może przenieść koszt w inne miejsce, dlatego odbiór obejmuje również funkcje strony i pomiar po wdrożeniu.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Mobile-first i HTTPS</h3>
                <p>
                  Na urządzeniach mobilnych sprawdzaj nie tylko wygląd, lecz także równoważność treści, linków, metadanych i danych strukturalnych. Tabela może przewijać się w oznaczonym kontenerze, ale nie powinna wypychać całej strony poza ekran. HTTPS z poprawnym certyfikatem SSL zabezpiecza połączenie. Po migracji z HTTP zaktualizuj zasoby, kanonikale i linki, usuń treści mieszane oraz przetestuj przekierowania wszystkich wariantów hosta do jednej wersji docelowej.
                </p>
              </section>

              <section aria-labelledby="adresy-i-renderowanie" className="mb-12">
                <h2 id="adresy-i-renderowanie" className="text-2xl md:text-3xl font-bold text-yellow-400 mb-5">Adres URL, architektura i renderowanie JavaScript</h2>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Czytelne adresy i spójna struktura strony</h3>
                <p className="mb-5">
                  Dobry adres URL jest stabilny, opisuje zasób i nie zawiera zbędnych parametrów. Zmiana samego adresu dla estetyki rzadko uzasadnia ryzyko migracji; jeśli już jest konieczna, przygotuj mapę starych i nowych lokalizacji. W architekturze istotniejsza od wyglądu adresu jest możliwość dotarcia do niego przez sensowną ścieżkę linków. Strona główna, kategorie i treści powiązane powinny prowadzić użytkownika do kolejnego poziomu bez ślepych zaułków.
                </p>
                <p className="mb-5">
                  W sklepie z filtrami ustal, które kombinacje mają własną wartość informacyjną, a które są jedynie stanem interfejsu. Nie generuj bez kontroli indeksowalnych stron dla każdej kombinacji parametrów. Sprawdź kanonikale, reguły generowania linków i mapy dla stronicowania oraz sortowania. Ograniczanie niepożądanych wariantów powinno zachować dostęp do wszystkich produktów przez zwykłą nawigację.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Renderowanie JavaScript: źródło, DOM i rzeczywista treść</h3>
                <p className="mb-5">
                  W kontroli JavaScript porównaj trzy obrazy tej samej strony: odpowiedź HTTP, DOM po wykonaniu kodu i widok użytkownika. Zwróć uwagę na główną treść, linki, title, meta robots, canonical i dane strukturalne. Jeśli ważne elementy powstają dopiero po działaniu użytkownika lub żądaniu, które kończy się błędem, robot może ich nie zobaczyć. Przydatne są zarówno DevTools, jak i inspekcja adresu w Google Search Console.
                </p>
                <p className="mb-5">
                  Renderowanie po stronie serwera i wstępne generowanie HTML mogą ograniczyć zależność od wykonania kodu po stronie klienta, ale same w sobie nie naprawiają złej architektury. Wybór rozwiązania powinien wynikać z odtworzonego problemu. Po wdrożeniu sprawdź również nagłówki, cache i zgodność wersji przed oraz po hydratacją, aby nie tworzyć dwóch odmiennych zestawów metadanych.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Wersje językowe i hreflang</h3>
                <p>
                  Przy stronach wielojęzycznych hreflang łączy rzeczywiste odpowiedniki językowe lub regionalne. Adresy muszą być dostępne, kanoniczne i wzajemnie powiązane. Nie łącz w klastrze stron o różnej treści ani kieruj wszystkich języków do jednego canonical. Kontrola obejmuje zwrotne oznaczenia, poprawne kody i zgodność z linkowaniem. Nie wdrażaj hreflang na stronie jednojęzycznej tylko dlatego, że pojawia się na ogólnej checkliście.
                </p>
              </section>

              <section aria-labelledby="audyt-techniczny-seo" className="mb-12">
                <h2 id="audyt-techniczny-seo" className="text-2xl md:text-3xl font-bold text-yellow-400 mb-5">Audyt techniczny SEO krok po kroku</h2>
                <p className="mb-7">
                  Poniższy proces pozwala przejść od zebrania dowodów do odbioru. To informacyjny plan pracy, a nie opis zakresu usługi. Możesz wykorzystać go do własnej kontroli lub rozmowy z zespołem odpowiedzialnym za wdrożenie.
                </p>
                <div className="space-y-6">
                  {auditSteps.map((step) => (
                    <section key={step.title} className="p-6 rounded-lg border border-gray-700 bg-gray-800/40">
                      <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                      {step.body.map((paragraph) => <p key={paragraph} className="mb-4">{paragraph}</p>)}
                      <p className="text-sm text-yellow-200 border-l-2 border-yellow-400 pl-4">{step.acceptance}</p>
                    </section>
                  ))}
                </div>
              </section>

              <section aria-labelledby="priorytety-i-narzedzia" className="mb-12">
                <h2 id="priorytety-i-narzedzia" className="text-2xl md:text-3xl font-bold text-yellow-400 mb-5">Jak ustalać priorytety i jakie narzędzia wybrać?</h2>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Najpierw blokady, potem optymalizacja szczegółów</h3>
                <p className="mb-5">
                  Priorytet wyznaczaj przez wpływ na dostępność ważnej treści, liczbę dotkniętych szablonów, koszt wdrożenia i ryzyko regresji. Błąd 5xx na stronie kategorii jest ważniejszy niż kosmetyczny problem na zapomnianej stronie testowej. Podobnie globalny noindex wymaga natychmiastowej kontroli, ale nie każdy brak danych w narzędziu oznacza awarię. Zapisz przy każdym zadaniu dowód, rekomendowany rezultat i osobę odpowiedzialną za decyzję.
                </p>
                <div className="overflow-x-auto border border-gray-700 rounded-lg mb-8">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-gray-800 text-yellow-400"><th scope="col" className="px-4 py-3 text-left">Kolejność</th><th scope="col" className="px-4 py-3 text-left">Typowy zakres</th><th scope="col" className="px-4 py-3 text-left">Odbiór</th></tr></thead>
                    <tbody>
                      <tr className="border-t border-gray-700 align-top"><th scope="row" className="px-4 py-4 text-left text-white">1. Dostępność</th><td className="px-4 py-4">Błędy 5xx, globalne noindex, blokada zasobów, pętle przekierowań</td><td className="px-4 py-4">Poprawny status i renderowanie ważnych stron</td></tr>
                      <tr className="border-t border-gray-700 align-top"><th scope="row" className="px-4 py-4 text-left text-white">2. Sygnały URL</th><td className="px-4 py-4">Canonical, sitemap, duplikaty, łańcuchy, błędne linki</td><td className="px-4 py-4">Spójna wersja docelowa w kilku niezależnych sygnałach</td></tr>
                      <tr className="border-t border-gray-700 align-top"><th scope="row" className="px-4 py-4 text-left text-white">3. Doświadczenie</th><td className="px-4 py-4">LCP, INP, CLS, wersja mobilna, zasoby blokujące</td><td className="px-4 py-4">Powtórzony pomiar dla tych samych warunków</td></tr>
                      <tr className="border-t border-gray-700 align-top"><th scope="row" className="px-4 py-4 text-left text-white">4. Rozwój</th><td className="px-4 py-4">Architektura, Schema, logi, jakość procesu wdrożeń</td><td className="px-4 py-4">Dokumentacja i monitoring bez nowych błędów</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Narzędzia do technicznego SEO i ich ograniczenia</h3>
                <p className="mb-5">
                  <strong>Google Search Console</strong> pokazuje m.in. informacje o indeksowaniu, wynikach wyszukiwania i wybranych adresach. <strong>PageSpeed Insights</strong> łączy dostępne dane o doświadczeniu użytkowników z diagnozą Lighthouse. <strong>Screaming Frog SEO Spider</strong> lub inny crawler zbiera adresy, statusy, dyrektywy i linki w powtarzalnym skanie. DevTools pomaga analizować sieć, JavaScript oraz układ strony.
                </p>
                <p className="mb-5">
                  Walidatory Schema i testy rozszerzonych wyników kontrolują składnię lub wymagania konkretnej funkcji, ale nie potwierdzają jej wyświetlenia w Google. Logi serwera pokazują żądania, nie intencję użytkownika. Żadne narzędzie SEO nie zastępuje ręcznego odbioru i kontekstu biznesowego. Przed zakupem sprawdź aktualny zakres oraz warunki licencji; ceny i funkcje mogą się zmieniać, więc nie warto zapisywać ich w stałej checkliście.
                </p>
                <p>
                  Dla małej strony podstawowy zestaw to Search Console, PageSpeed Insights, przeglądarka i crawl kontrolny. Przy większej witrynie dochodzą eksporty logów, automatyzacja testów i monitoring wielu szablonów. Narzędzie dobierz do pytania, nie odwrotnie. Taka optymalizacja techniczna strony ogranicza ryzyko poprawiania pozornych alertów zamiast rzeczywistych problemów.
                </p>
              </section>

              <section aria-labelledby="bledy-i-monitorowanie" className="mb-12">
                <h2 id="bledy-i-monitorowanie" className="text-2xl md:text-3xl font-bold text-yellow-400 mb-5">Najczęstsze błędy techniczne i monitorowanie po audycie</h2>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Błędy, których nie wolno poprawiać automatycznie</h3>
                <ul className="space-y-4 mb-7">
                  <li><strong className="text-white">Blokowanie wszystkich parametrów bez analizy.</strong> Może odciąć potrzebne zasoby albo usunąć dostęp do wartościowych wariantów. Najpierw poznaj funkcję parametru i sposób generowania linków.</li>
                  <li><strong className="text-white">Ustawianie canonical do strony głównej na różnych artykułach.</strong> To sprzeczność z treścią, a nie uniwersalna metoda konsolidacji. Samodzielny artykuł powinien mieć własny, spójny adres.</li>
                  <li><strong className="text-white">Masowe przekierowania 404 do strony głównej.</strong> Nie zastępują znikającej treści i mogą tworzyć mylące sygnały. Przekierowuj tylko do rzeczywistego odpowiednika.</li>
                  <li><strong className="text-white">Optymalizacja jednego wyniku Lighthouse.</strong> Bez danych o szablonach i użytkownikach łatwo poprawić liczbę, nie doświadczenie. Analizuj konkretne metryki i zasoby.</li>
                  <li><strong className="text-white">Schema niewidoczne dla czytelnika.</strong> Opis musi wynikać ze strony. W przypadku FAQ treść JSON-LD i widoczne pytania z odpowiedziami powinny być jednakowe.</li>
                  <li><strong className="text-white">Jednorazowy crawl bez odbioru.</strong> Raport przed zmianą nie potwierdza wdrożenia. Zawsze wykonaj kontrolę po publikacji i zapisz różnice.</li>
                </ul>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Co monitorować po wdrożeniu?</h3>
                <p className="mb-5">
                  Obserwuj dostępność serwera, błędy w crawlach, indeksowanie kluczowych szablonów, Core Web Vitals i zmiany w adresach kanonicznych. W raporcie zaznacz datę wdrożenia, aby oddzielić stan przed i po zmianie. W Search Console dane mogą pojawiać się z opóźnieniem, a różnice między crawl-em i inspekcją pojedynczego URL-a wymagają interpretacji. Nie przypisuj zmian widoczności jednej poprawce bez dodatkowych dowodów.
                </p>
                <p className="mb-5">
                  Przydatny monitoring obejmuje zarówno alert o awarii, jak i cykliczny przeglądar. Po większym wdrożeniu powtór testy krytycznych ścieżek, formularzy, nawigacji i stron błędów. Jeśli pojawia się problem z pozycją, sprawdź też zmiany treści, konkurencję i dopasowanie do zapytania — nie każdy spadek jest techniczny. Rozdzielenie hipotez pozwala uniknąć przypadkowych zmian w działającym serwisie.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-3">Jak analizować wpływ na SEO bez przedwczesnych wniosków?</h3>
                <p className="mb-5">
                  Analizy SEO po wdrożeniu powinny odpowiadać na pytanie o wpływ na SEO, a nie jedynie o liczbę alertów. Dla SEO strony zapisuj problemy techniczne, datę poprawki i stan przed nią. Optymalizacji SEO nie oceniaj wyłącznie po komunikacie crawlera. Skuteczne techniczne SEO jest elementem strategii SEO: porządkuje dostęp i odbiór, ale wnioski o skuteczności pozycjonowania wymagają szerszego zestawu danych.
                </p>
                <p className="mb-5">
                  W porównaniu okresów zapisuj pozycje w wynikach wyszukiwania dla wybranych zapytań, listę stron w wynikach wyszukiwania, kliknięcia i ruch organiczny, nie zakładając automatycznie związku przyczynowego. Widoczność strony w wynikach wyszukiwania może zmieniać się także pod wpływem treści, konkurencji i sezonowości. Same wyniki wyszukiwania lub słowa kluczowe nie wyjaśnią technicznej bariery. Dopiero połączenie danych z logami i crawlem pozwala ocenić, czy po usunięciu problemu poprawiła się widoczność strony oraz dostęp do niej.
                </p>
                <p>
                  Technical SEO to angielska nazwa tego samego obszaru. W polskiej dokumentacji można spotkać także określenia „optymalizacja techniczna SEO strony”, „SEO strony” i „optymalizacja pod kątem technicznym”. Wszystkie dotyczą aspektów technicznych, lecz nie zastępują całego procesu pozycjonowania. Określenie „przyjazne dla SEO” powinno iść w parze z użytecznością dla odbiorcy: robot Google i czytelnik potrzebują dostępu do tych samych plików, treści i działającej nawigacji. Strona internetowa firmy i sklepy internetowe mają różne szablony, ale wymagają takiej samej kontroli dostępu.
                </p>
              </section>

              <section aria-labelledby="powiazane-poradniki" className="mb-12 p-6 rounded-lg border border-gray-700 bg-gray-800/40">
                <h2 id="powiazane-poradniki" className="text-2xl font-bold text-white mb-4">Rozszerz temat</h2>
                <p className="mb-5">Jeśli chcesz połączyć kontrolę techniczną z treścią i pełniejszym procesem SEO, przeczytaj również:</p>
                <ul className="space-y-3">
                  <li><Link className="text-yellow-300 hover:text-yellow-200 underline underline-offset-4" to="/blog/audyt-seo-krok-po-kroku">Audyt SEO krok po kroku — od danych do rekomendacji</Link></li>
                  <li><Link className="text-yellow-300 hover:text-yellow-200 underline underline-offset-4" to="/blog/co-to-jest-seo">Co to jest SEO i jak współpracują jego obszary</Link></li>
                  <li><Link className="text-yellow-300 hover:text-yellow-200 underline underline-offset-4" to="/blog/pozycjonowanie-stron-internetowych-poradnik">Pozycjonowanie stron internetowych — poradnik</Link></li>
                </ul>
              </section>

              <section aria-labelledby="faq-techniczne-seo" className="mb-12">
                <h2 id="faq-techniczne-seo" className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">Techniczne SEO — najczęściej zadawane pytania</h2>
                <div className="space-y-5">
                  {faqItems.map((item) => (
                    <section key={item.question} className="border border-gray-700 rounded-lg p-5 bg-gray-800/40">
                      <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                      <p>{item.answer}</p>
                    </section>
                  ))}
                </div>
              </section>

              <aside aria-labelledby="wdrozenie-techniczne" className="mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-yellow-400/30">
                <h2 id="wdrozenie-techniczne" className="text-2xl font-bold text-white mb-4">Poradnik masz za sobą. A jeśli potrzebujesz wdrożenia?</h2>
                <p className="mb-6">
                  Ten artykuł ma charakter informacyjny i nie zastępuje diagnozy konkretnej witryny. Jeśli szukasz zakresu prac technicznych zamiast kolejnej lektury, sprawdź odrębną stronę usługi.
                </p>
                <Link
                  to="/seo/techniczne"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
                >
                  Zobacz zakres technicznego SEO <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </aside>
            </div>
          </div>
        </article>

        <ContactSection />
      </Layout>
      <FAQSchema items={faqItems} />
    </>
  );
}
