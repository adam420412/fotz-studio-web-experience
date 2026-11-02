import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, User } from "lucide-react";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const seoTitle = "SEO dla małych firm: plan działania 30/60/90 dni | FOTZ";
const seoDescription = "SEO dla małych firm: priorytety, lokalne SEO i profil firmy w Google, frazy zakupowe, techniczne minimum, pomiar zapytań oraz plan 30/60/90 dni.";
const canonicalUrl = "https://www.fotz-studio.pl/blog/seo-dla-malych-firm";

const faqItems = [
  {
    question: "Od czego mała firma powinna zacząć SEO?",
    answer: "Od wybrania usług lub produktów, które mają przyciągać klientów, i sprawdzenia kontaktu na stronie. Następnie uporządkuj indeksowanie, podstrony ofertowe i pomiar. Firma lokalna powinna równolegle zadbać o profil firmy w Google.",
  },
  {
    question: "Czy każda mała firma potrzebuje profilu firmy w Google?",
    answer: "Nie każda. Profil jest przydatny firmom obsługującym klientów lokalnie, które spełniają zasady Google. Działalność wyłącznie internetowa może mieć inne priorytety. Profil uzupełnia stronę, ale jej nie zastępuje.",
  },
  {
    question: "Ile kosztuje SEO dla małej firmy?",
    answer: "Koszt zależy m.in. od stanu strony, konkurencji i zakresu prac. Porównuj listę zadań, odpowiedzialność za wdrożenia i sposób raportowania zapytań, nie tylko wysokość abonamentu.",
  },
  {
    question: "Jak długo trzeba czekać na efekty SEO?",
    answer: "Nie ma jednego terminu. Znaczenie mają m.in. historia domeny, konkurencja, stan techniczny i zakres zmian. Plan 30/60/90 dni porządkuje prace, ale nie jest obietnicą pozycji lub liczby klientów.",
  },
  {
    question: "Ile słów powinien mieć artykuł na blogu firmy?",
    answer: "Tyle, ile potrzeba do udzielenia konkretnej odpowiedzi. Nie ma uniwersalnej liczby słów gwarantującej widoczność. Nie wydłużaj tekstu samymi ogólnikami.",
  },
  {
    question: "Czy SEO wystarczy, czy potrzebne są Google Ads?",
    answer: "To zależy od celu, budżetu i pilności. SEO rozwija bezpłatne wyniki, a Google Ads umożliwia płatne kampanie. Kanały można łączyć, ale decyzję warto oprzeć na koszcie i jakości zapytań.",
  },
  {
    question: "Czy SEO ma jeszcze sens przy odpowiedziach AI w Google?",
    answer: "Tak, ale część wyszukiwań może kończyć się bez wejścia na stronę. Publikuj rzetelne informacje, dbaj o markę i mierz zapytania. Zmiany w wynikach oceniaj na własnych danych, nie na pojedynczych przykładach.",
  },
  {
    question: "Czy nauka SEO jest trudna i czy można prowadzić je samodzielnie?",
    answer: "Nauka SEO wymaga praktyki, ale podstawy można poznawać etapami. Firma może wykonywać prostsze prace, jeśli ma czas i dostęp do strony. Przy indeksowaniu lub migracji warto skorzystać ze specjalisty, ponieważ błąd może ograniczyć widoczność.",
  },
];

const priorities = [
  {
    title: "Najpierw oferta i intencja",
    text: "Wybierz usługi lub produkty, których dotyczyć ma pozyskiwanie zapytań. Nie zaczynaj od listy popularnych haseł bez związku z ofertą.",
  },
  {
    title: "Lokalność tam, gdzie ma znaczenie",
    text: "Jeśli firma obsługuje klientów na konkretnym obszarze, połącz prace nad stroną z profilem firmy w Google i opiniami klientów.",
  },
  {
    title: "Technika bez przesadnego rozpisywania prac",
    text: "Usuń przeszkody w indeksowaniu, obsłudze telefonu i korzystaniu z formularza. Najpierw naprawiaj problemy, które realnie blokują stronę lub zapytania.",
  },
  {
    title: "Decyzje na podstawie danych",
    text: "Porównuj zapytania, strony wejścia i jakość leadów. Sama pozycja nie mówi, czy firma zyskuje na działaniach SEO.",
  },
];

const BlogSEODlaMalychFirm = () => {
  const articleData = {
    headline: "SEO dla małych firm: priorytety i plan 30/60/90 dni",
    description: seoDescription,
    image: "https://www.fotz-studio.pl/og-image.jpg",
    datePublished: "2026-03-15",
    dateModified: "2026-11-02",
    author: "Zespół FOTZ",
    url: canonicalUrl,
  };

  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "SEO dla małych firm", url: "/blog/seo-dla-malych-firm" },
  ];

  return (
    <Layout>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords="SEO dla małych firm, lokalne SEO, profil firmy w Google, pozycjonowanie strony"
        canonical={canonicalUrl}
        ogType="article"
      />

      <ArticleSchema data={articleData} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqItems} />

      <article id="main-content" className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-blue-200 text-blue-900">SEO</Badge>
              <Badge variant="secondary" className="bg-blue-200 text-blue-900">Małe firmy</Badge>
              <Badge variant="secondary" className="bg-blue-200 text-blue-900">Poradnik 2026</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SEO dla małych firm: priorytety i plan 30/60/90 dni
            </h1>

            <p className="text-lg md:text-xl mb-6 text-blue-100">
              Jak uporządkować stronę, lokalną widoczność i treści, a następnie sprawdzać, czy przekładają się na zapytania klientów.
            </p>

            <div className="flex flex-wrap gap-4 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Aktualizacja: 2 listopada 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Zespół FOTZ</span>
              </div>
              <span>Publikacja: 15 marca 2026</span>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 md:px-8 py-16">
          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-4">
              Prowadzisz małą firmę? Nie musisz kopiować strategii dużego serwisu. SEO dla małej firmy powinno pomagać osobom, które szukają produktów i usług, znaleźć właściwą ofertę i wygodnie nawiązać kontakt.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              SEO, czyli search engine optimization, obejmuje optymalizację widoczności w bezpłatnych wynikach wyszukiwarek takich jak Google. Pozycjonowanie strony łączy treść, technikę, linkowanie i prezentację firmy. Nie gwarantuje pozycji ani leadów. Celem jest dotarcie z ofertą do właściwych osób, a nie za wszelką cenę zwiększyć swoją widoczność w Google. Strategia SEO powinna zaczynać się od priorytetów biznesowych, a nie od obietnicy wyższych pozycji w wynikach.
            </p>
            <p className="text-lg text-gray-700">
              Poradnik pokazuje, co wdrożyć najpierw i jak mierzyć efekty. Plan 30/60/90 dni organizuje pracę, lecz nie zastępuje diagnozy Twojej stronie ani analizy rynku.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Priorytety SEO dla małych firm</h2>
            <p className="text-gray-700 mb-6">
              Przy ograniczonym budżecie i czasie szczególnie ważne dla małych firm jest unikanie prac bez priorytetu. Lepsza jest krótka lista działań powiązanych z celem: telefonem, rezerwacją, wyceną lub sprzedażą. Kluczowa jest kolejność, dlatego warto trzymać się czterech zasad.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {priorities.map((priority) => (
                <Card key={priority.title}>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2 text-gray-900">{priority.title}</h3>
                        <p className="text-gray-700 text-sm">{priority.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-gray-700 mt-6">
              Konkurowanie z większymi firmami nie musi polegać na walce o każde ogólne hasło. Mała firma może dokładniej opisać specjalistyczną usługę, konkretny obszar działania i warunki współpracy. To bardziej przydatne dla użytkownika niż kolejna strona z ogólnymi hasłami o profesjonalizmie.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Jak działają bezpłatne wyniki wyszukiwania Google?</h2>
            <p className="text-gray-700 mb-4">
              Wyszukiwarka odkrywa strony, pobiera ich zawartość i może zapisać je w indeksie. Gdy użytkownik wpisuje zapytanie, Google dobiera odpowiedzi na podstawie wielu sygnałów związanych m.in. z tematem, jakością i użytecznością strony. Sam fakt publikacji nie oznacza, że adres znajdzie się w indeksie lub osiągnie widoczność.
            </p>
            <p className="text-gray-700">
              Kliknięcia w organiczny wynik nie są rozliczane jak kliknięcia w reklamę. Nie oznacza to jednak, że ruch organiczny jest darmowy: diagnoza, wdrożenia i treści wymagają czasu lub budżetu. Zamiast porównywać SEO wyłącznie z kosztem reklamy, sprawdzaj, czy w dłuższej perspektywie przynosi wartościowe zapytania.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Lokalne SEO i profil firmy w Google</h2>
            <p className="text-gray-700 mb-4">
              SEO lokalne dotyczy sytuacji, w których na wybór wpływa lokalizacja lub świadczenie usługi na określonym obszarze. Użytkownik może wpisać „hydraulik Poznań”, skorzystać z Map Google albo zobaczyć pakiet lokalny w wynikach wyszukiwania. Lokalna firma powinna łączyć stronę z aktualnymi informacjami w mapach.
            </p>
            <p className="text-gray-700 mb-6">
              Profil firmy w Google (ang. Google Business Profile), nazywany też wizytówką, jest bezpłatny. Przedstawia działalność w Google Maps i lokalnych wynikach wyszukiwania. Nie zastępuje strony, ale ułatwia kontakt. Wizytówka powinna prowadzić do aktualnego adresu URL.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Co uporządkować w profilu</h3>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li>• Wybierz właściwe kategorie i uzupełnij usługi zgodnie z ofertą.</li>
              <li>• Sprawdź nazwę, adres, numer telefonu, stronę i godziny otwarcia, także okresowe.</li>
              <li>• Dodaj aktualne zdjęcia lokalu, zespołu lub realizacji.</li>
              <li>• Proś o szczere opinie. Nie kupuj recenzji ani nie nagradzaj za ich treść.</li>
              <li>• Odpowiadaj rzeczowo, bez ujawniania danych klientów.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Liczba opinii nie przesądza o wyniku. Wiarygodność profilu i zgodność z rzeczywistą działalnością pozostają istotne.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Spójne dane NAP i rozsądne katalogi</h3>
            <p className="text-gray-700 mb-4">
              NAP to skrót od nazwy, adresu i telefonu. Firma powinna utrzymać te dane w spójnej formie na stronie, w profilu i serwisach, w których występuje, szczególnie po zmianie siedziby lub nazwy.
            </p>
            <p className="text-gray-700">
              Wybieraj aktywne serwisy branżowe, lokalne organizacje i platformy mapowe, z których korzystają potencjalni klienci. Unikaj przypadkowych katalogów. Wpis ma dostarczać poprawnych informacji i użytecznego linku, nie tylko zwiększać licznik odnośników.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Frazy z intencją zakupową, nie tylko ruch</h2>
            <p className="text-gray-700 mb-4">
              Dobór słów kluczowych zacznij od rozmów z klientami i oferty. Fraza informacyjna „jak wybrać hydraulika” wymaga innej treści niż zakupowa „hydraulik Poznań awaria” lub „wycena instalacji wodnej”. Łącz usługę z lokalizacją, problemem, ceną lub dostępnością.
            </p>
            <p className="text-gray-700 mb-4">
              Nie zakładaj, że dłuższa fraza ma mniejszą konkurencję. Sprawdź wyniki wyszukiwania i rodzaj stron, które odpowiadają na zapytanie. Klienci mogą wyszukiwać tę samą usługę pod różnymi nazwami. Podobne pytania możesz wyszukiwać przez autouzupełnianie Google, ale traktuj je jako hipotezy do sprawdzenia.
            </p>
            <p className="text-gray-700 mb-6">
              Zapisuj słowa kluczowe w tabeli: usługa, problem, lokalizacja, intencja i docelowy URL. Przypisuj je do stron produktów lub usług przed planowaniem nowego artykułu. Dane sprzedażowe pomagają odróżnić temat związany z firmą od hasła popularnego online.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Przykładowa mapa treści</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Strona usługi: „przegląd klimatyzacji samochodowej w Poznaniu”.</li>
                <li>• Strona lokalna: tylko z rzeczywistymi informacjami o obszarze pracy.</li>
                <li>• Poradnik: „jak przygotować auto do przeglądu klimatyzacji”.</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              Jedna podstrona powinna mieć jasne zadanie. Nie twórz kopii strony ze zmienioną nazwą miasta. Opisz zakres, warunki, etapy i czynniki cenowe. Linkowania wewnętrznego użyj do przejścia z poradnika do oferty.
            </p>
            <p className="text-gray-700">
              Upychanie słów kluczowych nie zastępuje konkretu. Pisz naturalnie, a trafność sprawdzaj przez pytania klientów i dane z Google Search Console.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">On-page: treść i struktura strony usługi</h2>
            <p className="text-gray-700 mb-6">
              Optymalizacja strony ma ułatwić zrozumienie tematu zarówno użytkownikom, jak i wyszukiwarce. Nie sprowadza się do jednego triku. Najważniejsze elementy SEO na stronie oferty można sprawdzić w prostej liście kontrolnej.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li>• <strong>Title:</strong> unikalny tytuł powinien opisywać usługę lub temat strony. Nie musi zawierać całej listy wariantów frazy.</li>
              <li>• <strong>Meta description:</strong> opis ma zwięźle przedstawiać zawartość i zachęcać do wyboru właściwego wyniku. Google może wyświetlić inny fragment strony.</li>
              <li>• <strong>Nagłówek H1:</strong> jeden główny nagłówek przedstawia temat, a kolejne H2 i H3 porządkują szczegóły.</li>
              <li>• <strong>Treść oferty:</strong> zakres, dla kogo jest usługa, sposób realizacji, warunki i ograniczenia powinny być czytelne bez marketingowych ogólników.</li>
              <li>• <strong>Adres i telefon:</strong> jeśli klient może dzwonić lub odwiedzić firmę, dane kontaktowe nie mogą wymagać szukania w stopce każdej podstrony.</li>
              <li>• <strong>Linki wewnętrzne:</strong> prowadź do powiązanych usług, realizacji i poradników tam, gdzie to pomaga w podjęciu decyzji.</li>
            </ul>
            <p className="text-gray-700">
              Tekst nie musi mieć z góry narzuconej długości. Ma odpowiadać na intencję i pokazywać konkretne informacje. Jeśli publikujesz poradnik, dodaj autora lub osobę weryfikującą, źródła przy danych liczbowych oraz datę istotnej aktualizacji. To buduje autorytet lepiej niż ozdobne stwierdzenia o byciu liderem.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Techniczne minimum SEO</h2>
            <p className="text-gray-700 mb-4">
              Techniczne SEO ma usuwać bariery w dostępie do strony i korzystaniu z niej. Sam WordPress ani inna platforma nie gwarantuje poprawnej konfiguracji. Zacznij od diagnostyki, a nie od instalowania kolejnych wtyczek.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li>• <strong>Indeksowanie:</strong> sprawdź, czy ważne adresy URL zwracają właściwe strony, nie są przypadkowo zablokowane i mają poprawne kanoniczne adresy. Mapa XML powinna zawierać aktualne, przeznaczone do indeksacji strony.</li>
              <li>• <strong>Obsługa mobilna:</strong> zweryfikuj czytelność, przyciski i formularze na urządzeniach mobilnych. Test obejmuj także realne wysłanie zapytania, nie tylko wygląd strony głównej.</li>
              <li>• <strong>Wydajność:</strong> kompresuj obrazy, ogranicz zbędne skrypty i sprawdzaj Core Web Vitals w PageSpeed Insights. Oddziel wyniki laboratoryjne od danych o rzeczywistych użytkownikach.</li>
              <li>• <strong>HTTPS i błędy:</strong> zadbaj o prawidłowy certyfikat, przekierowania oraz naprawę niedziałających adresów, które otrzymują ruch lub linki.</li>
              <li>• <strong>Dane strukturalne:</strong> używaj typów zgodnych z widoczną zawartością, np. Article dla artykułu. Oznaczenie nie gwarantuje rozszerzonego wyglądu wyniku.</li>
            </ul>
            <p className="text-gray-700">
              Priorytetem są problemy potwierdzone w diagnostyce: brak indeksacji ważnej podstrony, zduplikowana treść, niedziałający formularz czy zablokowane zasoby potrzebne do renderowania. Nie przedkładaj optymalizacji pod kątem hipotetycznych problemów nad naprawę widocznych usterek.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Tworzenie wartościowych treści dla klientów</h2>
            <p className="text-gray-700 mb-4">
              Nie każda firma potrzebuje bloga. Blog nie zastępuje dobrych stron ofertowych, dlatego najpierw uzupełnij informacje potrzebne przed zakupem. Dopiero potem rozwijaj content marketing o poradniki, które odpowiadają na rzeczywiste pytania lub pomagają wybrać rozwiązanie.
            </p>
            <p className="text-gray-700 mb-4">
              Dobrym źródłem tematów są rozmowy sprzedażowe, wiadomości od klientów, uwagi serwisantów i zapytania widoczne w Search Console. Możesz opisać etapy usługi, porównać warianty, wyjaśnić koszt, pokazać przygotowanie do realizacji albo omówić ograniczenia rozwiązania.
            </p>
            <p className="text-gray-700 mb-4">
              W case studies publikuj wyłącznie liczby, które możesz udokumentować. Zaznacz zakres prac, punkt wyjścia i okres pomiaru. Nie przypisuj wyniku wyłącznie SEO, jeśli w tym samym czasie działały płatne reklamy, zmieniła się oferta lub sezonowość.
            </p>
            <p className="text-gray-700">
              Treści lokalne mają sens, gdy mówią o realnej działalności: realizacji w danej miejscowości, lokalnych warunkach lub specyfice obsługiwanego obszaru. Sama nazwa miasta dodana do ogólnego tekstu nie czyni go lokalnym. Nie musisz publikować według sztywnego harmonogramu. Ważniejsze są przydatność i aktualność materiałów.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Linki przychodzące i lokalne relacje</h2>
            <p className="text-gray-700 mb-4">
              Linki z innych stron internetowych mogą pomagać w odkrywaniu treści i budowaniu rozpoznawalności. Zamiast zwiększać liczbę linków, wybieraj miejsca, z którymi firma ma rzeczywisty związek: partnerów, dostawców, organizacji branżowych, lokalnych wydarzeń i mediów.
            </p>
            <p className="text-gray-700">
              Przydatny link może towarzyszyć opisowi wspólnego projektu, eksperckiemu komentarzowi lub wiarygodnemu katalogowi branżowemu. Masowa wymiana linków i kupowanie ich bez kontroli źródła nie są strategią.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Pomiar zapytań i widoczności w Google</h2>
            <p className="text-gray-700 mb-4">
              Raport SEO powinien łączyć widoczność strony z wartościowymi zapytaniami. Potrzebujesz danych z wyszukiwarki, zachowań użytkowników i informacji sprzedażowych.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Google Search Console</h3>
            <p className="text-gray-700 mb-4">
              Porównuj pary zapytanie–strona dla wybranego URL: wyświetlenia, kliknięcia, CTR i pozycje w wynikach wyszukiwania. Średnia pozycja jest wartością zagregowaną, a nie stałym miejscem dla każdego użytkownika.
            </p>
            <p className="text-gray-700 mb-6">
              Porównuj okresy i zanotuj daty wdrożeń. Uwzględnij sezonowość. Wyświetlenia bez kliknięć mogą wskazywać temat do dopracowania, ale nie dowodzą problemu z tytułem lub treścią.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Zapytania, leady i jakość sprzedaży</h3>
            <p className="text-gray-700 mb-4">
              W Google Analytics 4 mierz wysłanie formularza i kliknięcie numeru telefonu jako zdarzenia, a najważniejsze oznacz jako kluczowe. Kliknięcie numeru nie oznacza rozmowy, dlatego uzupełnij dane o rzeczywiste zapytania i ich jakość.
            </p>
            <p className="text-gray-700">
              Co miesiąc zestaw źródło wejścia z usługą i wynikiem sprzedażowym. Rejestr pomaga odróżnić ruch od leadów i ustalać kolejność działań SEO. Konfiguracja analityki musi respektować zasady prywatności i zgody użytkowników.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Realistyczny plan SEO na 30, 60 i 90 dni</h2>
            <p className="text-gray-700 mb-6">
              Plan porządkuje prace, nie gwarantuje efektu w określonym czasie. Poważny problem techniczny wykryty w audycie może wymagać zmiany kolejności.
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Dni 1–30: fundament i punkt odniesienia</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Określ usługi, obszar i wartościowe zapytania. Zapisz bazowe dane z Search Console, analityki i rejestru leadów.</li>
                    <li>• Sprawdź indeksowanie, formularze, wersję mobilną, HTTPS i błędy techniczne.</li>
                    <li>• Uporządkuj podstrony usług oraz profil firmy w Google, jeśli dotyczy działalności.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Dni 31–60: oferta, treści i powiązania</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Uzupełnij strony usług o zakres, warunki, etapy, czynniki cenowe i odpowiedzi na pytania zakupowe.</li>
                    <li>• Przygotuj konkretne treści na podstawie pytań klientów. Dodaj linkowanie wewnętrzne do usług i kontaktu.</li>
                    <li>• Uaktualnij wiarygodne wpisy branżowe i uporządkuj sposób proszenia o prawdziwe opinie.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Dni 61–90: przegląd danych i kolejne decyzje</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Porównaj te same zapytania i adresy z bazą, uwzględniając wdrożenia i sezonowość.</li>
                    <li>• Popraw strony bez kontaktu, rozwijaj tematy potwierdzone danymi i połącz powtarzające się treści.</li>
                    <li>• Oceń, które prace prowadzisz samodzielnie, a do których potrzebujesz specjalisty lub dewelopera.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Czy SEO dla małej firmy się opłaca i ile kosztuje?</h2>
            <p className="text-gray-700 mb-4">
              Inwestowanie w SEO może oznaczać własny czas, freelancera lub agencję. Każda firma ma inny punkt wyjścia. Cena zależy m.in. od liczby stron, techniki, treści, konkurencji i odpowiedzialności za wdrożenia.
            </p>
            <p className="text-gray-700 mb-4">
              SEO może pomóc zdobyć klientów, ale mierz zgodność zapytań z ofertą, sprzedaż i koszt realizacji. W dłuższej perspektywie porównuj wynik z kosztem prac, nie z samym wzrostem ruchu.
            </p>
            <p className="text-gray-700">
              Samodzielna praca wymaga czasu, a agencja przydaje się przy koordynacji kilku kompetencji. Przed umową ustal zakres, dostęp do danych, raportowanie i odpowiedzialność za wdrożenia. Unikaj ofert gwarantujących wyższe pozycje w wynikach wyszukiwania lub określoną sprzedaż.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Najczęściej zadawane pytania</h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.question} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Potrzebujesz uporządkować SEO swojej firmy?</h2>
            <p className="text-lg mb-6 text-blue-100">
              Możemy sprawdzić stronę, wskazać priorytety i zaplanować zakres prac dopasowany do Twoich usług oraz sposobu pozyskiwania klientów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/seo/pozycjonowanie"
                className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Zobacz usługę pozycjonowania
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/seo/audyt"
                className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-400 transition"
              >
                Sprawdź audyt SEO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-400 transition"
              >
                Skontaktuj się
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogSEODlaMalychFirm;
