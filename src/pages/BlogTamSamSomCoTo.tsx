import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const seoTitle = "TAM, SAM, SOM 2026: co to i jak obliczyć? | FOTZ";
const seoDescription = "TAM, SAM i SOM: definicje, wzory i przykład obliczania wielkości rynku w 2026 roku. Sprawdź różnice, metody top-down i bottom-up oraz typowe błędy.";
const canonicalUrl = "https://www.fotz-studio.pl/blog/tam-sam-som-co-to";
const pageTitle = "TAM, SAM, SOM — co to jest i jak obliczyć wielkość rynku?";

const articleData = {
  headline: pageTitle,
  description: seoDescription,
  url: canonicalUrl,
  image: "https://www.fotz-studio.pl/og-image.jpg",
  datePublished: "2024-01-19",
  dateModified: "2026-11-12",
  author: "Fotz Studio",
};

const breadcrumbs = [
  { name: "Strona główna", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "TAM, SAM i SOM", url: "/blog/tam-sam-som-co-to" },
];

const definitionRows = [
  {
    abbreviation: "TAM",
    english: "Total Addressable Market",
    polish: "całkowity rynek adresowalny",
    question: "Jak duża jest cała kategoria, którą firma mogłaby adresować?",
    explanation: "TAM opisuje popyt na określony produkt lub usługę bez ograniczeń wynikających z obecnego zasięgu firmy. Ustal kategorię, obszar, okres i jednostkę: liczbę klientów, liczbę transakcji albo wartość przychodów. Nie jest to plan sprzedaży Twojej firmy ani kwota, którą automatycznie można zarobić.",
  },
  {
    abbreviation: "SAM",
    english: "Serviceable Available Market",
    variant: "Serviceable Addressable Market",
    polish: "rynek dostępny do obsłużenia",
    question: "Którą część rynku możesz obsłużyć swoją ofertą i modelem działania?",
    explanation: "SAM zawęża TAM do klientów, których firma może realnie obsłużyć pod względem geografii, języka, technologii, kanału sprzedaży, regulacji i zakresu oferty. Oba angielskie rozwinięcia skrótu występują w źródłach. Ważniejsza od wyboru wariantu nazwy jest lista zastosowanych kryteriów.",
  },
  {
    abbreviation: "SOM",
    english: "Serviceable Obtainable Market",
    polish: "rynek możliwy do zdobycia",
    question: "Jaką część dostępnego rynku firma może zdobyć w wybranym okresie?",
    explanation: "SOM uwzględnia konkurencję, rozpoznawalność marki, skuteczność kanałów dotarcia, zdolność sprzedaży i moce obsługowe. Powinien mieć horyzont czasowy oraz sposób weryfikacji. Nie jest dowolnym procentem SAM wpisanym do prezentacji, lecz estymacją opartą na założeniach i ograniczeniach.",
  },
];

const calculationMethods = [
  {
    title: "Top-down — od rynku do segmentu",
    text: "Metoda top-down zaczyna od opublikowanej wielkości kategorii i kolejno stosuje kryteria zawężające. Sprawdza się jako punkt odniesienia, ale tylko wtedy, gdy definicja rynku w źródle odpowiada Twojej ofercie.",
    steps: [
      "Zapisz, co dokładnie raport liczy: przychody dostawców, wydatki klientów, liczbę użytkowników czy transakcji.",
      "Dopasuj geografię, grupę klientów, rodzaj produktu, kanał i okres. Nie przepisuj samej wartości całego sektora.",
      "Udokumentuj każde założenie prowadzące od TAM do SAM, a następnie oszacuj SOM na podstawie możliwości zdobycia i obsługi klientów.",
    ],
  },
  {
    title: "Bottom-up — od klientów i transakcji",
    text: "Metoda bottom-up buduje wielkość rynku z liczby potencjalnych klientów oraz wartości zakupu. Ułatwia sprawdzenie arytmetyki i połączenie modelu z działaniami sprzedażowymi, lecz również wymaga wiarygodnych danych wejściowych.",
    steps: [
      "Zdefiniuj profil klienta i policz zgodne z nim podmioty lub gospodarstwa w wybranym obszarze, usuwając duplikaty.",
      "Ustal roczną liczbę zakupów i średnią wartość na klienta na podstawie własnych danych, rozmów lub dopasowanego źródła.",
      "Pomnóż zgodne wartości dla TAM i SAM. SOM wyprowadź z realnego lejka sprzedaży, dostępności zespołu lub zdolności dostaw.",
    ],
  },
];

const calculationSteps = [
  {
    title: "1. Zdefiniuj produkt, klienta i jednostkę",
    text: "Zapisz, jaką potrzebę spełnia oferta, kto płaci i co jest jednostką sprzedaży. Rynek oprogramowania dla firm księgowych nie jest tym samym rynkiem co wszystkie usługi księgowe. Wybierz wartość albo wolumen i nie mieszaj ich w jednym wyniku.",
  },
  {
    title: "2. Ustal obszar i okres analizy",
    text: "Określ kraj lub region oraz rok, kwartał czy inny horyzont. Przychód miesięczny trzeba przeliczyć na roczny, jeżeli porównujesz go z rocznym raportem. Zaznacz też, czy kwoty są netto czy brutto i w jakiej walucie je prezentujesz.",
  },
  {
    title: "3. Oblicz TAM od całej zdefiniowanej kategorii",
    text: "W podejściu bottom-up zastosuj wzór: TAM = liczba wszystkich potencjalnych klientów w kategorii × roczna wartość zakupów na klienta. W top-down zacznij od dopasowanego raportu. Nie zawężaj jeszcze wyniku do obecnych możliwości firmy.",
  },
  {
    title: "4. Wyraźnie odfiltruj SAM",
    text: "Wypisz kryteria dostępności: lokalizację, wielkość klienta, wymagania techniczne, język, kanał i zgodność z ofertą. SAM możesz policzyć jako liczbę klientów po tych filtrach × roczna wartość na klienta. Procent stosuj tylko wtedy, gdy masz podstawę do jego przyjęcia.",
  },
  {
    title: "5. Oszacuj SOM dla konkretnego horyzontu",
    text: "Połącz plan pozyskania klientów z ograniczeniami obsługi. Możesz wykorzystać liczbę rozmów, konwersję między etapami, dostępnych sprzedawców, retencję i przepustowość realizacji. Wzór SOM = liczba klientów możliwych do zdobycia i obsłużenia × roczna wartość na klienta musi mieć uzasadnione dane wejściowe.",
  },
  {
    title: "6. Porównaj metody i zapisz niepewność",
    text: "Jeżeli top-down i bottom-up dają istotnie różne wyniki, sprawdź definicje, duplikaty i założenia zamiast wybierać wygodniejszą liczbę. Przygotuj warianty dla kluczowych zmiennych i zapisz datę źródeł. Zakres może być uczciwszy niż pozornie precyzyjna pojedyncza wartość.",
  },
];

const marketExample = {
  totalClients: 10000,
  serviceableRate: 0.25,
  serviceableClients: 2500,
  obtainableClients: 40,
  annualRevenuePerClient: 12000,
  tam: 120000000,
  sam: 30000000,
  som: 480000,
  somShareOfSam: 0.016,
};

const strategyUses = [
  {
    title: "Wybór segmentu i priorytetów",
    text: "Porównanie segmentów pomaga zdecydować, gdzie oferta ma dopasowanie i gdzie firma potrafi dotrzeć do klienta. Mniejszy rynek z jasno opisaną potrzebą może być lepszym punktem startu niż szeroka kategoria bez przewagi. Nie wybieraj segmentu wyłącznie według największego TAM.",
  },
  {
    title: "Plan marketingu i sprzedaży",
    text: "SAM porządkuje listę odbiorców, a SOM wymusza powiązanie celu z kanałami i zasobami. Plan marketingu powinien wskazywać, skąd wezmą się rozmowy lub zamówienia, a plan sprzedaży — ile klientów zespół może obsłużyć. Model nie zastępuje testu kanału ani danych o jakości leadów.",
  },
  {
    title: "Rozmowa z inwestorem",
    text: "Inwestor może analizować skalę możliwości, logikę wejścia na rynek i wiarygodność założeń. Prezentacja powinna pokazać źródła, definicje, obliczenia i drogę do SOM, nie tylko wykres trzech kręgów. Uczciwa estymacja wspiera rozmowę, ale nie gwarantuje finansowania ani decyzji inwestycyjnej.",
  },
  {
    title: "Kontrola ekonomii przedsięwzięcia",
    text: "Wielkość rynku nie mówi sama w sobie nic o marży, koszcie pozyskania klienta, churnie ani przepływach pieniężnych. Po obliczeniu TAM, SAM i SOM połącz wynik z modelem przychodów i kosztów. Duży rynek może być nieopłacalny dla konkretnego modelu, a mały SOM może wymagać zmiany założeń lub segmentu.",
  },
];

const commonMistakes = [
  {
    title: "Przyjęcie całej branży jako swojego TAM",
    fix: "Zawęź kategorię do problemu i produktu, który rzeczywiście sprzedajesz. Wskaż, które części branży wykluczasz i dlaczego.",
  },
  {
    title: "Zapisanie SOM jako przypadkowego 1% rynku",
    fix: "Zastąp sam procent liczbą klientów, możliwościami kanału, konwersją, retencją i przepustowością zespołu w określonym czasie.",
  },
  {
    title: "Mylenie TAM, SAM i SOM lub brak wspólnej jednostki",
    fix: "Przy każdej wartości podaj definicję, okres, geografię i jednostkę. Sprawdź, czy SOM odnosi się do tego samego przychodu i okresu co SAM.",
  },
  {
    title: "Kopiowanie liczby bez sprawdzenia metodologii raportu",
    fix: "Przeczytaj zakres źródła, datę, sposób szacowania i definicję kategorii. Nie łącz wartości z raportów, które liczą różne zjawiska.",
  },
  {
    title: "Założenie, że każdy profil klienta jest gotów kupić",
    fix: "Oddziel adresowalność od intencji zakupu. Zweryfikuj potrzebę, budżet, moment zakupu i dostępność decydenta zamiast traktować całą bazę jako aktywny popyt.",
  },
  {
    title: "Pominięcie konkurencji i ograniczeń obsługi",
    fix: "Uwzględnij alternatywy, przełączanie dostawcy, długość cyklu sprzedaży oraz liczbę klientów, których firma może przyjąć bez utraty jakości.",
  },
  {
    title: "Jedna liczba bez wariantów i właściciela aktualizacji",
    fix: "Dodaj warianty dla najbardziej niepewnych założeń, źródło i datę każdej zmiennej oraz osobę odpowiedzialną za kolejny przegląd.",
  },
];

const faqItems = [
  {
    id: "definicje",
    question: "Co to jest TAM, SAM i SOM?",
    answer: "To trzy powiązane miary wielkości rynku. TAM określa całkowity rynek adresowalny dla zdefiniowanej kategorii, SAM jego część dostępną dla oferty i modelu firmy, a SOM część możliwą do zdobycia oraz obsłużenia w konkretnym okresie. Każdą miarę należy opisać tą samą jednostką, geografią i horyzontem, aby porównanie było poprawne.",
  },
  {
    id: "excel",
    question: "Jak obliczyć TAM, SAM i SOM w Excelu?",
    answer: "W osobnych komórkach zapisz liczbę klientów i roczną wartość na klienta. Dla TAM użyj iloczynu tych pól, np. =B2*B3. Dla SAM pomnóż liczbę klientów po filtrach przez tę samą wartość, a dla SOM liczbę klientów możliwych do zdobycia i obsłużenia przez wartość roczną. Nazwij komórki, dodaj kolumnę ze źródłem i datą, a warianty założeń zapisuj w oddzielnych wierszach zamiast nadpisywać jedyną wersję.",
  },
  {
    id: "udzial",
    question: "Czy SOM to po prostu udział w rynku?",
    answer: "SOM można przedstawić jako wartość, liczbę klientów albo udział w SAM, ale samo market share nie wyjaśnia sposobu obliczenia. Udział procentowy powinien wynikać z szacunku sprzedaży i zdolności obsługi, a nie z arbitralnego założenia. Przy porównaniu z konkurentami upewnij się też, że ich udział i Twój SOM dotyczą identycznie zdefiniowanego rynku oraz okresu.",
  },
  {
    id: "sam-som",
    question: "Jaka jest różnica między SAM i SOM?",
    answer: "SAM obejmuje klientów, których firma może adresować i obsługiwać swoją ofertą po uwzględnieniu ograniczeń rynkowych. SOM jest węższy: określa część SAM możliwą do zdobycia w danym czasie przy konkretnych zasobach, konkurencji i skuteczności kanałów. SAM opisuje więc dostępne pole działania, a SOM oszacowanie wyniku lub zakresu działania, nie gwarantowaną sprzedaż.",
  },
  {
    id: "inwestor",
    question: "Czy analiza TAM, SAM i SOM pomaga pozyskać inwestora?",
    answer: "Może uporządkować rozmowę o skali kategorii, wyborze segmentu i realności planu wejścia na rynek. Inwestor nadal oceni produkt, zespół, ekonomię, trakcję i inne elementy decyzji. Najbardziej przydatna jest ścieżka od źródeł przez obliczenia do działań, a nie maksymalnie wysoka wartość TAM. Analiza nie daje gwarancji finansowania i nie zastępuje pełnego modelu biznesowego.",
  },
  {
    id: "maly-som",
    question: "Co zrobić, gdy obliczony SOM jest mały?",
    answer: "Najpierw sprawdź, czy wynik nie wynika z błędnych danych, zbyt szerokiego segmentu lub nierealnych kosztów dotarcia. Potem oceń zmianę oferty, kanału, obszaru albo kolejności segmentów i policz wpływ na ekonomię. Nie zawyżaj konwersji tylko po to, by uzyskać wygodny wynik. Mały SOM może być sygnałem do dalszej walidacji, a nie dowodem, że analiza się nie udała.",
  },
  {
    id: "aktualizacja",
    question: "Jak często aktualizować TAM, SAM i SOM?",
    answer: "Przeglądaj model po istotnej zmianie oferty, grupy klientów, ceny, kanału, geografii, konkurencji lub danych źródłowych. Warto też zaplanować okresową kontrolę dopasowaną do tempa branży i cyklu planowania firmy. Zapisuj datę oraz powód każdej zmiany. Nie ma jednego obowiązkowego interwału dla wszystkich; liczy się aktualność założeń używanych do konkretnej decyzji.",
  },
];

const currency = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
  maximumFractionDigits: 0,
});

const sectionClass = "mb-14 scroll-mt-24";
const headingClass = "text-3xl font-bold mb-6 text-slate-900";
const paragraphClass = "text-slate-700 mb-5 leading-relaxed";

export default function BlogTamSamSomCoTo() {
  return (
    <Layout workPlacement="after-main">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        ogType="article"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema data={articleData} />
      <FAQSchema items={faqItems} />

      <article id="article-content" className="min-h-screen bg-white">
        <header className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-4">Analiza wielkości rynku • poradnik 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">{pageTitle}</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              Definicje, wzory, dane wejściowe i przykład pokazujący, jak przejść od całego rynku do segmentu dostępnego i możliwego do zdobycia — bez przypadkowych procentów.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
              <span>Opublikowano: 19 stycznia 2024</span>
              <span aria-hidden="true">|</span>
              <span>Aktualizacja: 12 listopada 2026</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <nav aria-label="Spis treści" className="mb-12 rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">W tym poradniku o TAM, SAM i SOM</h2>
            <ol className="grid md:grid-cols-2 gap-3 text-slate-700 list-decimal list-inside">
              <li><a className="hover:text-blue-700 hover:underline" href="#definicja">Krótka definicja</a></li>
              <li><a className="hover:text-blue-700 hover:underline" href="#roznice">TAM vs SAM vs SOM</a></li>
              <li><a className="hover:text-blue-700 hover:underline" href="#metody">Metody i źródła danych</a></li>
              <li><a className="hover:text-blue-700 hover:underline" href="#obliczanie-krok-po-kroku">Obliczanie krok po kroku</a></li>
              <li><a className="hover:text-blue-700 hover:underline" href="#przyklad">Przykład liczbowy</a></li>
              <li><a className="hover:text-blue-700 hover:underline" href="#konkurencja">Konkurencja i SOM</a></li>
              <li><a className="hover:text-blue-700 hover:underline" href="#strategia">Zastosowanie w strategii</a></li>
              <li><a className="hover:text-blue-700 hover:underline" href="#bledy">Najczęstsze błędy</a></li>
              <li><a className="hover:text-blue-700 hover:underline" href="#faq">FAQ</a></li>
            </ol>
          </nav>

          <section id="definicja" className={sectionClass}>
            <h2 className={headingClass}>Co to jest TAM, SAM i SOM? Krótka definicja</h2>
            <p className="text-lg text-slate-700 mb-5 leading-relaxed">
              <strong>TAM, SAM i SOM to sposób opisania wielkości rynku na trzech poziomach.</strong> TAM pokazuje całkowity rynek adresowalny dla określonej kategorii. SAM obejmuje część, którą konkretna firma może obsłużyć swoim produktem, zasięgiem i modelem. SOM szacuje część możliwą do zdobycia i obsłużenia w wybranym czasie.
            </p>
            <p className={paragraphClass}>
              Te wskaźniki odpowiadają na różne pytania: „jak duża jest kategoria?”, „którą jej część możemy adresować?” oraz „jaki obszar możemy realnie objąć sprzedażą?”. Najczęściej SOM ≤ SAM ≤ TAM, ale tylko przy zachowaniu tej samej jednostki, okresu i definicji. Same nazwy nie wystarczą — każda liczba potrzebuje źródła lub jasno opisanego założenia.
            </p>
            <div className="rounded-lg border-l-4 border-blue-600 bg-slate-50 p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Wielkość rynku to nie prognoza przychodów</h3>
              <p className="text-slate-700">
                Analiza market size porządkuje potencjalną skalę i ograniczenia. Nie mówi automatycznie, ile firma sprzeda ani czy przedsięwzięcie będzie opłacalne. Do prognozy potrzebne są również ceny, koszty, marża, retencja, sezonowość i sprawdzony proces pozyskiwania klientów.
              </p>
            </div>
          </section>

          <section id="roznice" className={sectionClass}>
            <h2 className={headingClass}>TAM vs SAM vs SOM: definicje i różnice</h2>
            <p className={paragraphClass}>
              W polskich materiałach spotkasz tłumaczenia „rynek całkowity”, „rynek dostępny” i „rynek osiągalny”. Angielskie nazwy pomagają sprawdzić literaturę, ale to definicja operacyjna decyduje o poprawności. Zapisz też, czy analizujesz product or service, kto jest nabywcą i jakie zdarzenie uznajesz za sprzedaż.
            </p>
            <div className="space-y-5">
              {definitionRows.map((row) => (
                <section key={row.abbreviation} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                    <h3 className="text-2xl font-bold text-blue-800">{row.abbreviation}</h3>
                    <p className="font-semibold text-slate-900">{row.english}</p>
                    {row.variant && <p className="text-sm text-slate-500">wariant: {row.variant}</p>}
                  </div>
                  <p className="font-medium text-slate-700 mb-2">{row.polish} — {row.question}</p>
                  <p className="text-slate-700 leading-relaxed">{row.explanation}</p>
                </section>
              ))}
            </div>
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm text-left">
                <caption className="p-4 text-slate-600 text-left">Porównanie miar dla jednej, wcześniej zdefiniowanej kategorii.</caption>
                <thead className="bg-slate-100 text-slate-900">
                  <tr><th scope="col" className="p-4">Miara</th><th scope="col" className="p-4">Zakres</th><th scope="col" className="p-4">Główne ograniczenie</th></tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-t"><th scope="row" className="p-4">TAM</th><td className="p-4">Cała kategoria</td><td className="p-4">Poprawna definicja popytu i produktu</td></tr>
                  <tr className="border-t"><th scope="row" className="p-4">SAM</th><td className="p-4">Segment dostępny dla oferty</td><td className="p-4">Geografia, technologia, regulacje, kanał</td></tr>
                  <tr className="border-t"><th scope="row" className="p-4">SOM</th><td className="p-4">Segment możliwy do zdobycia w czasie</td><td className="p-4">Konkurencja, sprzedaż, retencja i zasoby</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="znaczenie" className={sectionClass}>
            <h2 className={headingClass}>Dlaczego analiza TAM, SAM i SOM jest ważna dla firmy i startupu?</h2>
            <p className={paragraphClass}>
              Trzy miary pozwalają oddzielić skalę kategorii od rzeczywistego pola działania. Firma może dzięki nim wybrać segment, dopasować ofertę, zaplanować zespół i sprawdzić, czy ambicja odpowiada zasobom. Startup może natomiast pokazać logikę wejścia na rynek oraz założenia, które zamierza zweryfikować.
            </p>
            <p className={paragraphClass}>
              Analiza jest przydatna przed uruchomieniem produktu, wejściem do nowego regionu, zmianą modelu subskrypcji i przygotowaniem planu finansowania. Pomaga również wykryć zbyt szeroki target. Jeżeli SAM obejmuje klientów, których produkt nie obsługuje, problem leży w definicji segmentu, a nie dopiero w skuteczności kampanii.
            </p>
            <p className={paragraphClass}>
              Nie istnieje jeden uniwersalny próg „dobrego” TAM ani SOM dla każdej firmy. Znaczenie ma zgodność ze strategią, ekonomią i modelem finansowania. Oceniaj jakość założeń oraz możliwość ich sprawdzenia zamiast porównywać sam wynik z przypadkowym benchmarkiem dla inwestorów.
            </p>
          </section>

          <section id="metody" className={sectionClass}>
            <h2 className={headingClass}>Jak obliczyć TAM, SAM i SOM? Metody i źródła danych</h2>
            <p className={paragraphClass}>
              Dwie podstawowe metody obliczania wielkości rynku warto traktować jako wzajemną kontrolę. Top-down pokazuje kategorię z perspektywy raportu, a bottom-up rozbija ją na klientów i transakcje. Zbieżne wyniki nie eliminują błędu, ale różnica jest cennym sygnałem do sprawdzenia definicji i założeń.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {calculationMethods.map((method) => (
                <section key={method.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">{method.text}</p>
                  <ol className="list-decimal list-inside space-y-3 text-slate-700">
                    {method.steps.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                </section>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Skąd brać dane do analizy rynku?</h3>
            <p className={paragraphClass}>
              Zacznij od własnych transakcji, ofert, rozmów sprzedażowych, retencji i podstawowych danych CRM. Uzupełnij je o rejestry, statystykę publiczną i dopasowane raporty. Dla Polski punktem wyjścia mogą być <a href="https://stat.gov.pl/" target="_blank" rel="noreferrer" className="text-blue-700 font-semibold hover:underline">Główny Urząd Statystyczny</a> oraz <a href="https://bdl.stat.gov.pl/" target="_blank" rel="noreferrer" className="text-blue-700 font-semibold hover:underline">Bank Danych Lokalnych</a>. Ich tabele trzeba dopasować do definicji klienta, a nie traktować jako gotowego TAM dla każdej oferty.
            </p>
            <p className={paragraphClass}>
              Raport komercyjny powinien mieć znaną datę, zakres i metodologię. Liczbę podmiotów z rejestru przefiltruj pod kątem aktywności, lokalizacji i duplikatów. Informacje o cenie lub częstotliwości zakupu weryfikuj w rozmowach i danych sprzedażowych. Zapisz źródło przy zmiennej, a nie dopiero pod całą tabelą, aby późniejsza aktualizacja była możliwa.
            </p>
            <details className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer font-bold text-slate-900">Jak czytać francuskie, angielskie i hiszpańskie określenia rynku?</summary>
              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  W zagranicznych źródłach sprawdzaj całe zdania, ponieważ podobne słowa mogą opisywać wielkość rynku, jego segment albo udział sprzedażowy. Poniższy przykład francuskiej terminologi porządkuje pojęcia spotykane w opisach badań i nie przenosi żadnych danych liczbowych do Twojej analizy.
                </p>
                <blockquote lang="fr" className="border-l-4 border-blue-300 pl-4 italic">
                  Une étude de marché permet de comprendre les besoins et d’identifier les opportunités. En marketing, le responsable de marketing compare les segments de marché, les segments accessibles et les plus rentables. Pour votre produit ou service, le marché total adressable est distinct du marché accessible et de sa part réellement obtenable; les conditions du marché et les particularités de votre marché doivent rester cohérentes. Les rapports de marché distinguent la part de marché des concurrents de votre part de marché. Les parts de marché et l’analyse de part de marché ne remplacent pas le calcul du SOM.
                </blockquote>
                <p>
                  W polskim omówieniu chodzi tu o badanie potrzeb, porównanie segmentów, warunki rynku oraz odróżnienie udziału własnego od udziału konkurentów. Nie wystarczy przetłumaczyć nagłówek: trzeba sprawdzić, jak autor definiuje każdą kategorię i czy jej zakres odpowiada Twoim założeniom.
                </p>
                <p>
                  W źródłach angielskich <span lang="en">Total Addressable Market</span> oraz <span lang="en">share of market</span> odnoszą się odpowiednio do całkowitego rynku i udziału w nim. Hiszpańskie <span lang="es">el tamaño de mercado</span> oznacza wielkość rynku. Te nazwy nie zastępują kontroli jednostki, okresu ani metodologii źródła.
                </p>
              </div>
            </details>
          </section>

          <section id="obliczanie-krok-po-kroku" className={sectionClass}>
            <h2 className={headingClass}>TAM, SAM i SOM krok po kroku: wzory i kontrola założeń</h2>
            <div className="space-y-6">
              {calculationSteps.map((step) => (
                <section key={step.title}>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{step.text}</p>
                </section>
              ))}
            </div>
          </section>

          <section id="przyklad" className={sectionClass}>
            <h2 className={headingClass}>Przykład obliczania TAM, SAM i SOM — ilustracja metody</h2>
            <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 mb-6">
              <p className="text-amber-950 leading-relaxed">
                <strong>To całkowicie fikcyjny przykład arytmetyczny, a nie badanie rynku, cennik ani prognoza wyników.</strong> Załóżmy hipotetyczną usługę B2B rozliczaną rocznie. Wszystkie wartości wejściowe wybrano wyłącznie po to, aby pokazać kolejność działań i zależność między miarami.
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
              <li>10 000 hipotetycznych potencjalnych klientów w całej zdefiniowanej kategorii;</li>
              <li>12 000 zł przyjętej do obliczenia rocznej wartości jednego klienta;</li>
              <li>25% klientów spełniających fikcyjne kryteria dostępności, czyli 2 500 podmiotów;</li>
              <li>40 klientów, których firma zakłada w modelu możliwym do zdobycia i obsłużenia w wybranym roku.</li>
            </ul>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
              <table className="w-full text-sm text-left">
                <caption className="p-4 text-slate-600 text-left">Wszystkie liczby są założeniami ilustracji; nie opisują żadnej rzeczywistej branży.</caption>
                <thead className="bg-slate-100 text-slate-900">
                  <tr><th scope="col" className="p-4">Miara</th><th scope="col" className="p-4">Działanie</th><th scope="col" className="p-4">Wynik ilustracji</th></tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-t"><th scope="row" className="p-4">TAM</th><td className="p-4">10 000 × 12 000 zł</td><td className="p-4 font-semibold">{currency.format(marketExample.tam)}</td></tr>
                  <tr className="border-t"><th scope="row" className="p-4">SAM</th><td className="p-4">10 000 × 25% = 2 500; następnie 2 500 × 12 000 zł</td><td className="p-4 font-semibold">{currency.format(marketExample.sam)}</td></tr>
                  <tr className="border-t"><th scope="row" className="p-4">SOM</th><td className="p-4">40 × 12 000 zł</td><td className="p-4 font-semibold">{currency.format(marketExample.som)} rocznie</td></tr>
                </tbody>
              </table>
            </div>
            <p className={paragraphClass}>
              W tej ilustracji udział SOM w SAM wynosi 40 ÷ 2 500 × 100% = <strong>1,6%</strong>. Nie jest to rekomendowany ani typowy poziom dla innej firmy. Pokazuje jedynie, że procent powinien wynikać z wcześniejszych założeń. Zmiana liczby klientów, wartości zakupu lub kryteriów dostępności wymaga ponownego przeliczenia wszystkich zależnych pól.
            </p>
            <p className={paragraphClass}>
              W arkuszu dodaj kolumny „założenie”, „jednostka”, „źródło”, „data” i „komentarz”. Następnie sprawdź wrażliwość wyniku na zmiany zmiennych. Nie przedstawiaj jednego wariantu jako pewnego rezultatu. Wartość przykładu leży w czytelnej metodzie, którą można podmienić na zweryfikowane dane własne.
            </p>
          </section>

          <section id="konkurencja" className={sectionClass}>
            <h2 className={headingClass}>Jak uwzględnić konkurencję przy szacowaniu SAM i SOM?</h2>
            <p className={paragraphClass}>
              Konkurencja to nie tylko firmy o identycznej ofercie. Klient może wybrać produkt zastępczy, rozwiązanie wewnętrzne, innego dostawcę albo odłożyć decyzję. Zmapuj te alternatywy i ustal, dlaczego klient miałby zmienić obecny sposób działania. Bez tego nawet poprawnie policzony SAM może prowadzić do zbyt optymistycznego SOM.
            </p>
            <p className={paragraphClass}>
              Market share konkurenta może pomóc jako kontekst, jeżeli pochodzi ze zgodnej definicji rynku i wiarygodnego źródła. Nie wolno jednak przyjąć, że pozostała część jest automatycznie dostępna do przejęcia. SOM powinien uwzględniać siłę marki, koszt zmiany dostawcy, długość cyklu, dystrybucję, dostęp do decydentów i zdolność realizacji nowych umów.
            </p>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Praktyczna kontrola SOM</h3>
              <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li>sprawdź, ile nowych klientów może jednocześnie obsłużyć sprzedaż i realizacja;</li>
                <li>oszacuj lejek od dotarcia do rozmowy, oferty, zamówienia i utrzymania klienta;</li>
                <li>uwzględnij czas potrzebny na decyzję oraz odejścia w badanym okresie;</li>
                <li>porównaj wynik z dotychczasowymi danymi i wyjaśnij każdą istotną różnicę;</li>
                <li>zapisz warunki, które mogą obniżyć albo podnieść wynik, bez obiecywania zmiany.</li>
              </ul>
            </div>
          </section>

          <section id="strategia" className={sectionClass}>
            <h2 className={headingClass}>Jak wykorzystać TAM, SAM i SOM w strategii i rozwoju firmy?</h2>
            <p className={paragraphClass}>
              Analiza ma sens, gdy prowadzi do decyzji i późniejszej weryfikacji. Nie kończy się na slajdzie dla inwestora. Powinna łączyć wybór segmentu z działaniami marketingu, planem sprzedaży, ekonomią i odpowiedzialnością za aktualizację założeń.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {strategyUses.map((item) => (
                <section key={item.title} className="rounded-xl border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.text}</p>
                </section>
              ))}
            </div>
          </section>

          <section id="bledy" className={sectionClass}>
            <h2 className={headingClass}>Najczęstsze błędy w analizie TAM, SAM i SOM</h2>
            <p className={paragraphClass}>
              Największy problem nie polega na wybraniu niewłaściwego wzoru, lecz na ukryciu założeń. Poniższa lista pomaga przeprowadzić przegląd przed użyciem wyniku w strategii, budżecie lub prezentacji.
            </p>
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <section key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">{index + 1}. {item.title}</h3>
                  <p className="text-slate-700"><strong>Jak poprawić:</strong> {item.fix}</p>
                </section>
              ))}
            </div>
          </section>

          <section id="aktualizacja" className={sectionClass}>
            <h2 className={headingClass}>Jak aktualizować analizę TAM, SAM i SOM w 2026 roku?</h2>
            <p className={paragraphClass}>
              Aktualizacja nie polega na zmianie samego roku w tytule raportu. Sprawdź źródła, definicje, liczbę potencjalnych klientów, wartość zakupu i ograniczenia operacyjne. Zmiana produktu lub cennika może wpłynąć jednocześnie na TAM, SAM i SOM, dlatego nie wolno podmieniać tylko jednej komórki bez kontroli zależności.
            </p>
            <p className={paragraphClass}>
              Dodatkowy przegląd jest uzasadniony przy wejściu na nowy rynek, pojawieniu się istotnej alternatywy, zmianie regulacji albo rozjazdu między planem a danymi sprzedażowymi. Zachowaj poprzednią wersję i uzasadnienie korekty. Dzięki temu zespół widzi, czy zmienił się rynek, metoda, czy tylko jakość dostępnych danych.
            </p>
          </section>

          <section id="faq" className={sectionClass}>
            <h2 className={headingClass}>FAQ — TAM, SAM i SOM</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.id} id={`tam-sam-som-faq-${item.id}`} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <summary className="cursor-pointer font-bold text-slate-900">{item.question}</summary>
                  <p className="mt-3 text-slate-700 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <aside id="powiazane-materialy" className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Powiązane analizy i planowanie</h2>
            <p className="text-slate-700 mb-5 leading-relaxed">
              Po oszacowaniu rynku doprecyzuj profil odbiorcy i połącz założenia z ekonomią przedsięwzięcia. Przydatne mogą być poradniki o <Link to="/blog/target-audience-co-to" className="text-blue-700 font-semibold hover:underline">target audience</Link>, <Link to="/blog/wacc-sredni-wazony-koszt-kapitalu" className="text-blue-700 font-semibold hover:underline">koszcie kapitału WACC</Link> i <Link to="/blog/strategia-content-marketingu" className="text-blue-700 font-semibold hover:underline">strategii content marketingu</Link>.
            </p>
            <p className="text-slate-700">
              Jeśli wynik analizy ma wesprzeć plan dotarcia do klientów, przejdź do zakresu <Link to="/seo/pozycjonowanie" className="text-blue-700 font-semibold hover:underline">pozycjonowania i działań SEO</Link> lub <Link to="/kontakt" className="text-blue-700 font-semibold hover:underline">skontaktuj się z FOTZ Studio</Link> w sprawie uporządkowania danych wejściowych do strategii.
            </p>
          </aside>
        </div>
      </article>
    </Layout>
  );
}
