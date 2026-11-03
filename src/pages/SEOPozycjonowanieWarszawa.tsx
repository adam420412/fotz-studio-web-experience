import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const path = "/seo/pozycjonowanie-warszawa";
const pageTitle = "Pozycjonowanie stron internetowych Warszawa — SEO";
const seoTitle = "Pozycjonowanie stron Warszawa — SEO | FOTZ";
const seoDescription = "Pozycjonowanie stron Warszawa: audyt SEO, technika, treści i lokalna widoczność w Google. Pozyskiwanie nowych klientów, pomiar zapytań i wycena FOTZ.";
const canonicalUrl = "https://www.fotz-studio.pl/seo/pozycjonowanie-warszawa";

const summary = [
  "Zaczynamy od oferty, strony i rzeczywistego obszaru obsługi. Lokalna fraza, zapytanie ogólnopolskie i poszukiwanie poradnika wymagają różnych treści oraz odrębnych priorytetów.",
  "Audyt SEO porządkuje prace: wskazujemy problem, rekomendację, sposób odbioru i odpowiedzialność za wdrożenie. Nie zakładamy, że każda strona wymaga przebudowy.",
  "Raport oddziela widoczność i pozycje w Google od ruchu organicznego, zapytań oraz sprzedaży. Nie gwarantujemy pozycji, terminu efektu ani liczby klientów.",
];

const scope = [
  {
    title: "Audyt SEO i priorytety działań",
    text: "Sprawdzamy indeksację, dostępność treści, kanoniczne adresy, przekierowania, nagłówki, dane strukturalne i odnośniki wewnętrzne. Analizujemy też strony docelowe oraz zapytania w Google Search Console i konkurencję obecną w wynikach. Otrzymujesz uporządkowane zalecenia z priorytetami, a nie ogólną listę uwag. Zaznaczamy, co możesz poprawić samodzielnie, co wymaga programisty i które prace możemy wykonać.",
    href: "/seo/audyt",
    link: "Zobacz zakres audytu SEO",
  },
  {
    title: "Techniczna optymalizacja strony",
    text: "Weryfikujemy witrynę na telefonie, szybkość ważnych podstron, odpowiedzi HTTP, formularze i dostępność treści dla wyszukiwarki. Kontrolujemy duplikację adresów, niedziałające linki i spójność dyrektyw. Optymalizacja SEO obejmuje potrzebne poprawki, a nie automatyczną wymianę całej strony. Jeśli ograniczeniem jest CMS, szablon lub hosting, opisujemy możliwe rozwiązania przed rozpoczęciem pracy.",
    href: "/seo/techniczne",
    link: "Poznaj techniczne SEO",
  },
  {
    title: "Treści i optymalizacja ofert",
    text: "Porządkujemy title, opis, nagłówki i treść tak, aby strona internetowa jasno przedstawiała usługę, warunki realizacji i następny krok. Uzupełniamy odpowiedzi na pytania klientów oraz linkowanie związanych materiałów. Plan treści wynika z intencji wyszukiwania i luk w ofercie, a nie z narzuconej liczby artykułów albo gęstości fraz. Teksty powstają na podstawie informacji potwierdzonych przez firmę.",
    href: "/content-marketing/strategia",
    link: "Zobacz strategię treści",
  },
  {
    title: "Lokalna widoczność i Google Maps",
    text: "Dla firmy lokalnej sprawdzamy zgodność adresu albo obszaru działania na stronie i w Profilu Firmy w Google. W uzgodnionym zakresie porządkujemy kategorie, usługi, opis, zdjęcia i odnośnik do właściwej podstrony. Omawiamy zgodny z regulaminem sposób proszenia prawdziwych klientów o opinie. Nie tworzymy fikcyjnych lokalizacji, wpisów ani recenzji i nie obiecujemy pozycji w Mapach Google.",
    href: "/uslugi/pozycjonowanie-lokalne",
    link: "Sprawdź pozycjonowanie lokalne",
  },
  {
    title: "Linkowanie i tematy poradnikowe",
    text: "Poprawiamy linkowanie wewnętrzne, aby użytkownik mógł przejść od odpowiedzi do właściwej usługi, a wyszukiwarka — odnaleźć powiązane strony. Analizujemy również istniejące odnośniki, budowę profilu linkowego i tematyczne miejsca, w których firma może przedstawić wiedzę. Link building planujemy według jakości źródła i związku z ofertą, bez pakietów przypadkowych linków. Liczbę publikacji i koszty zewnętrzne ustalamy osobno.",
  },
  {
    title: "Pomiar zapytań i kontaktów",
    text: "Łączymy wykonane prace z danymi o wyświetleniach, kliknięciach, stronach docelowych i uzgodnionych działaniach użytkowników. Formularz, telefon, rezerwacja i sprzedaż to różne etapy, dlatego definiujemy je oddzielnie. Raport wskazuje wnioski i kolejne priorytety, a nie tylko tabelę pozycji. Zakres pomiaru zależy od konfiguracji analityki, systemu kontaktu i dostępnych informacji o jakości zapytań.",
  },
];

const sections = [
  {
    title: "Czym jest pozycjonowanie stron w Warszawie? Lokalne i szerokie SEO",
    text: "Czym jest pozycjonowanie stron? To proces dopasowania treści, techniki i autorytetu witryny do zapytań, które potencjalni klienci wpisują w wyszukiwarce. Celem jest użyteczna widoczność prowadząca do kontaktu, a nie sama pozycja. Warszawa może być miejscem świadczenia usługi, siedzibą firmy albo jednym z wielu obszarów sprzedaży. Dlatego pozycjonowanie stron internetowych w Warszawie zaczynamy od ustalenia, gdzie klient korzysta z oferty i jakiej informacji potrzebuje przed kontaktem. Pozycjonowanie lokalne w Warszawie odpowiada na zapytania związane z miejscem, dojazdem lub dostępnością. Pozycjonowanie szerokie dotyczy natomiast tematów niezależnych od lokalizacji. Innej treści potrzebuje punkt obsługi, innej wykonawca dojeżdżający do klienta, a jeszcze innej firma B2B sprzedająca w całej Polsce. Nie tworzymy kopii tej samej strony dla Mokotowa, Woli czy Pragi tylko po to, by podmienić nazwę dzielnicy. Osobna podstrona ma uzasadnienie wtedy, gdy przedstawia odrębną, potwierdzoną ofertę lub rzeczywistą placówkę. Pozycjonowanie w Warszawie łączymy z rzeczywistym zasięgiem oferty. SEO w Warszawie powinno pomagać wybrać właściwą usługę, a nie sztucznie zwiększać liczbę adresów.",
    points: [
      "Usługa na miejscu: prawdziwy adres, godziny, dostępność, zdjęcia i sprawny kontakt.",
      "Dojazd do klienta: faktyczny obszar obsługi oraz warunki realizacji i wyceny.",
      "Warszawa i okolice: zasięg opisany według sposobu pracy, bez przypisywania firmie nieobsługiwanych miejsc.",
    ],
  },
  {
    title: "Strategia pozycjonowania: słowa kluczowe i intencja",
    text: "Strategia SEO przypisuje słowa kluczowe do konkretnych stron i etapów decyzji. Analizujemy ofertę, wyniki wyszukiwania, język klientów oraz dostępne dane z Search Console. Rozdzielamy frazy lokalne, ogólnopolskie, poradnikowe i transakcyjne; fraza informacyjna może wymagać innej treści niż zapytanie o wycenę. Branża i konkurencja wpływają na dobór tematów, ale nie zastępują analizy intencji. Następnie sprawdzamy, czy istniejąca podstrona odpowiada potrzebie, wymaga rozbudowy, czy powinna zostać połączona z inną. Mapa fraz ogranicza sytuację, w której kilka adresów próbuje odpowiadać na identyczne pytanie. Długi ogon pozwala opisać konkretne zastosowanie, problem lub warunek realizacji zamiast koncentrować całą pracę na jednej frazie. Kluczowy jest związek treści z ofertą i możliwość przygotowania wiarygodnej odpowiedzi. Elementem strategii SEO jest harmonogram uwzględniający cele biznesowe, zasoby oraz priorytetowe usługi, nie tylko deklarowaną popularność słowa.",
    points: [
      "Lista priorytetowych usług lub produktów oraz rzeczywisty zasięg sprzedaży.",
      "Analiza intencji, konkurencji i stron docelowych dla grup fraz zamiast jednej długiej listy słów.",
      "Plan z priorytetami, odpowiedzialnością za wdrożenie i sposobem sprawdzenia rezultatu.",
    ],
  },
  {
    title: "Techniczne SEO i optymalizacja strony krok po kroku",
    text: "Prace techniczne zaczynają się od barier utrudniających odczytanie oferty użytkownikowi i wyszukiwarce. Wyszukiwarka Google powinna dotrzeć do ważnych treści bez sprzecznych dyrektyw, a odbiorca — bez technicznych przeszkód. Sprawdzamy statusy adresów, robots, canonical, nawigację, indeksowanie i zachowanie formularzy. Na telefonie weryfikujemy czytelność, menu i przyciski kontaktowe. Analiza szybkości wskazuje konkretne zasoby lub elementy do poprawy; nie sprowadza się do samego wyniku narzędzia. Dane strukturalne opisują wyłącznie informacje zgodne z widoczną treścią. Po wdrożeniu kontrolujemy kod, działanie strony i dostępność zmienionych adresów. Skuteczne pozycjonowanie nie oznacza poprawiania wszystkiego bez kolejności: najpierw usuwamy problemy istotne dla indeksowania, korzystania z oferty i pomiaru. Technikami SEO dobieranymi do sytuacji ograniczamy ryzyko zbędnej przebudowy.",
  },
  {
    title: "Treści, content marketing i link building",
    text: "Skuteczne pozycjonowanie stron łączy użyteczną odpowiedź z wiarygodną prezentacją firmy. Treść ofertowa powinna wyjaśniać zakres, warunki, proces i ograniczenia usługi, a materiał poradnikowy — rozwiązywać konkretny problem odbiorcy. Optymalizacja treści nie polega na osiągnięciu sztywnej gęstości słów. Redagujemy nagłówki i akapity, porządkujemy powtórzenia oraz dodajemy informacje potrzebne przed kontaktem. Pozycjonowanie stron www obejmuje także linkowanie wewnętrzne między naturalnie powiązanymi tematami, z opisowym anchor tekstem i bez wymuszania odnośnika w każdym akapicie. Przy linkach zewnętrznych analizujemy tematyczne dopasowanie i jakość publikacji. Nie obiecujemy efektu samego pakietu linków. Content marketing uzupełnia ofertę i pomaga użytkownikom, zamiast produkować teksty wyłącznie do algorytmu. Algorytm i algorytmy Google zmieniają sposób oceny stron, dlatego podstawą pozostaje rzetelna odpowiedź, a nie powtarzanie frazy. W ten sposób można zwiększyć widoczność bez rezygnacji z czytelności.",
    href: "/content-marketing/strategia",
    link: "Poznaj podejście FOTZ do treści",
  },
  {
    title: "Pozycjonowanie lokalne i Profil Firmy w Google",
    text: "Profil Firmy w Google, nazywany wizytówką Google lub dawniej Google Moja Firma, jest odrębnym obszarem pracy niż organiczne wyniki strony. Lokalne SEO i pozycjonowanie lokalne stron zaczynamy od sprawdzenia, czy profil odpowiada rzeczywistej działalności i zasadom Google. SEO lokalne obejmuje spójne dane firmy, właściwy profil oraz stronę odpowiadającą ofercie. Porównujemy nazwę, kategorie, dane kontaktowe, adres albo obszar usług z informacjami na stronie. Wskazujemy braki w opisie, usługach i materiałach, a odnośnik kierujemy do właściwej oferty. Opinie powinny pochodzić od prawdziwych klientów; nie kupujemy recenzji i nie tworzymy wirtualnych biur. Wyniki w Google Maps zależą m.in. od trafności, odległości i rozpoznawalności, dlatego nie gwarantujemy widoczności w każdej części Warszawy. Dane profilu analizujemy osobno od Search Console, a oba obszary łączymy dopiero na poziomie uzgodnionych celów i jakości kontaktu. Widoczność w Google obejmuje różne miejsca, których nie wolno traktować jako jednego wskaźnika.",
  },
  {
    title: "Sklep internetowy i strona usługowa: pozycjonowanie w Warszawie",
    text: "Inny zakres przygotowujemy dla strony usługowej, inny dla sklepu internetowego. Pozycjonowanie sklepu internetowego obejmuje kategorie, produkty, warianty, filtry, dostępność oraz indeksowanie adresów z parametrami. W serwisie firmowym priorytetem są zwykle strony usług, informacje o realizacji i droga do zapytania. Sprawdzamy opisy, linkowanie i dane strukturalne zgodne z widoczną ofertą. Nie każdy filtr powinien tworzyć osobną stronę w wynikach wyszukiwania, a niedostępny produkt nie zawsze wymaga usunięcia adresu. Decyzje zależą od popytu, zastępczej oferty i możliwości platformy. Pozycjonowanie sklepów dla firm z Warszawy może dotyczyć klientów lokalnych albo sprzedaży w całej Polsce, więc samo miasto nie determinuje planu. Przed rekomendacją sprawdzamy platformę, katalog i realizację zamówień. Pozycjonowanie stron dla firm i sklepów prowadzimy według odrębnych celów, bez automatycznej przebudowy serwisu.",
  },
  {
    title: "Jak mierzymy widoczność strony i zapytania?",
    text: "W Google Search Console obserwujemy zapytania, wyświetlenia, kliknięcia, strony docelowe i średnią pozycję dla uzgodnionych grup. Analizujemy nie tylko pozycje w Google, lecz przede wszystkim to, jakie frazy i adresy zyskują widoczność w wyszukiwarce Google. W analityce sprawdzamy ruch organiczny, ruch na stronie oraz zdarzenia związane z formularzem, telefonem lub rezerwacją, jeśli konfiguracja pozwala je wiarygodnie zmierzyć. Kliknięcie przycisku nie jest równoznaczne z wysłanym zapytaniem, a zapytanie — ze sprzedażą. Konwersja wymaga zdefiniowania zgodnie z celem firmy. Zachęcamy do oznaczania źródła i jakości kontaktu w procesie obsługi klienta. Raport pokazuje wykonane wdrożenia, dane i wnioski na kolejny okres. Zmiany sezonowe, kampanie reklamowe i inne prace zaznaczamy jako kontekst, zamiast przypisywać każdy wzrost lub spadek jednej optymalizacji. Nie uzupełniamy brakujących danych domysłami.",
    points: [
      "Punkt wyjścia: zakres fraz i stron, jakość dostępnych danych oraz definicja wartościowego kontaktu.",
      "Pomiar: widoczność i ruch analizowane oddzielnie od zapytań, rezerwacji i sprzedaży.",
      "Interpretacja: porównywalne okresy, zakończone wdrożenia i znany kontekst marketingowy.",
    ],
  },
  {
    title: "Proces pozycjonowania: od audytu do kolejnych działań",
    text: "Pozycjonowanie stron internetowych Warszawa prowadzimy jako proces z jasno opisanymi etapami. Najpierw poznajemy ofertę, obszar działania i sposób obsługi zapytań. Następnie wykonujemy uzgodniony audyt i przygotowujemy plan, w którym każda rekomendacja ma priorytet oraz właściciela wdrożenia. Po akceptacji realizujemy wybrane poprawki techniczne, treści i prace lokalne albo przekazujemy zalecenia Twojemu zespołowi. Kontrola wdrożenia i analiza danych pozwalają wybrać następny zakres. Harmonogram dotyczy naszych zadań, nie obiecanej daty uzyskania pozycji. Tempo zależy m.in. od stanu witryny, historii domeny, dostępów, akceptacji, konkurencji i czasu ponownego przetworzenia zmian przez wyszukiwarkę. Działania SEO mogą mieć formę jednorazowego projektu lub stałej współpracy; cykl prac i raportów zapisujemy w ofercie. Efekty SEO oceniamy po zakończeniu konkretnych prac, a strategia pozycjonowania reaguje na dane zamiast automatycznie rozszerzać zakres.",
    points: [
      "Brief i pomiar startowy: oferta, cele, lokalizacje, dane i sposób kwalifikacji zapytań.",
      "Audyt i plan: lista problemów, rekomendacje, priorytety, wycena oraz podział odpowiedzialności.",
      "Realizacja i odbiór: uzgodnione wdrożenia, sprawdzenie efektu technicznego i dokumentacja prac.",
      "Raport i decyzja: analiza widoczności oraz kontaktów, wnioski i wybór następnego zakresu.",
    ],
  },
  {
    title: "Ile kosztuje pozycjonowanie stron w Warszawie?",
    text: "Koszt pozycjonowania stron zależy od pracy potrzebnej w konkretnej sytuacji, a nie od samej nazwy miasta. Cena uwzględnia wielkość i technologię witryny, liczbę ofert lub kategorii, konkurencję, stan treści, wymagane wdrożenia oraz zakres materiałów przygotowywanych przez FOTZ. Inny budżet będzie odpowiadał jednorazowemu audytowi, inny regularnej pracy nad serwisem lub rozbudowanym sklepem. Nie podajemy sztywnego cennika przed analizą i nie rozliczamy obiecanej pozycji. Odpowiedź na pytanie, ile kosztuje pozycjonowanie stron, wymaga poznania zadań i odpowiedzialności. Propozycja wyszczególnia prace, wyłączenia, terminy odbioru, rolę każdej strony i koszty dodatkowe. Narzędzia, programowanie, publikacje zewnętrzne lub produkcja zdjęć wymagają osobnego uzgodnienia, jeśli są potrzebne. Możesz zacząć od samego audytu i wdrożyć rekomendacje we własnym zespole. Inwestycja w pozycjonowanie powinna wynikać z celów i zasobów, a sposób pomiaru musi pozwalać oceniać kolejne decyzje.",
    points: [
      "Do rozmowy wystarczy adres strony, opis oferty, priorytety i rzeczywisty obszar obsługi.",
      "Wycena zawiera zakres, wyłączenia, warunki akceptacji i zasady zmiany zadań.",
      "Nie przesyłaj haseł w pierwszej wiadomości; potrzebne dostępy ustalamy po poznaniu zakresu.",
    ],
  },
  {
    title: "SEO, Google Ads i odpowiedzi AI",
    text: "SEO dotyczy widoczności organicznej, natomiast Google Ads umożliwia płatną emisję reklam według wybranych ustawień i budżetu. To odrębne kanały oraz sposoby pomiaru. Kampania może pomóc sprawdzić komunikat lub stronę docelową, ale reklama nie kupuje wyższej pozycji organicznej. W raporcie rozdzielamy kanały, aby ocenić, skąd pochodzą wartościowe kontakty. Plan marketingowy może łączyć wyszukiwarkę, media społecznościowe i inne działania, lecz nie dodajemy ich automatycznie do oferty. Klasyczne SEO i przygotowanie treści do odpowiedzi AI również zaczynają się od rzetelnej informacji, jasnej struktury i potwierdzonych faktów. Nie obiecujemy cytowania przez systemy AI ani pozycji w wynikach Google. Najpierw ustalamy, czy potrzebna jest poprawa strony, kampania, prace SEO czy świadomie uzgodniona kombinacja. Koszty reklamy i publikacji zewnętrznych rozliczamy oddzielnie.",
  },
  {
    title: "Agencja SEO Warszawa czy współpraca zdalna?",
    text: "Usługi SEO dla firm z Warszawy prowadzimy zdalnie: brief, analizę, akceptacje i omówienie wyników realizujemy online. FOTZ Studio ma siedzibę w Poznaniu i nie deklarujemy biura w Warszawie. Agencja SEO powinna przedstawić sposób pracy, zakres odpowiedzialności, dostęp do danych i warunki zakończenia zadania, a nie tylko nazwę miasta w ofercie. W naszej propozycji wskazujemy, co przygotowuje FOTZ, co wdraża Twoja osoba techniczna i które elementy wymagają dodatkowej wyceny. Możemy oferować audyt, realizację uzgodnionych poprawek i stały rozwój serwisu, ale zakres zawsze poprzedza diagnoza. Nie przypisujemy sobie realizacji innych marek, nie publikujemy zmyślonych wyników i nie obiecujemy pierwszej pozycji. Pozycjonowanie i optymalizacja mają pomagać pozyskiwać nowych klientów i wartościowe kontakty, nie zastępować wiedzy firmy o odbiorcach. Ewentualną produkcję zdjęć lub filmów na miejscu ustalamy oddzielnie.",
  },
];

const faqs = [
  {
    question: "Ile kosztuje pozycjonowanie strony w Warszawie?",
    answer: "Wycenę ustalamy po poznaniu strony, oferty, konkurencji i oczekiwanego zakresu. Inne prace są potrzebne przy jednorazowym audycie, inne przy stałej optymalizacji kilku podstron lub rozbudowanym sklepie. Oferta wyszczególnia zadania, wyłączenia, terminy odbioru i odpowiedzialność za wdrożenia. Nie stosujemy uniwersalnej ceny zależnej wyłącznie od miasta ani opłaty za obiecaną pozycję.",
  },
  {
    question: "Po jakim czasie widać efekty SEO?",
    answer: "Nie ma jednego terminu zależnego od Warszawy. Tempo prac zależy m.in. od stanu technicznego, dostępów, akceptacji, konkurencji, historii domeny i czasu wdrożenia oraz ponownego przetworzenia zmian przez wyszukiwarkę. Harmonogram w ofercie dotyczy naszych zadań, a nie gwarantowanej daty uzyskania pozycji lub zapytań. Postęp oceniamy na podstawie zakończonych prac i zebranych danych.",
  },
  {
    question: "Czy agencja może zapewnić miejsce w TOP10?",
    answer: "Nie możemy zagwarantować TOP10, pierwszego miejsca ani określonej liczby klientów. Na wyniki wpływają m.in. konkurencja, intencja zapytania, jakość i historia witryny oraz zmiany wyszukiwarki. Możemy natomiast opisać zakres prac, dostarczyć rekomendacje, kontrolować wdrożenia i raportować dane. Decyzje o kolejnych działaniach podejmujemy na podstawie obserwacji, bez obietnic niezależnych od nas.",
  },
  {
    question: "Czy warto tworzyć strony dla dzielnic Warszawy?",
    answer: "Tylko wtedy, gdy odrębna placówka, usługa lub sposób obsługi uzasadnia osobną, wartościową treść. Jedna strona może opisywać wspólny obszar działania, jeśli oferta jest taka sama. Nie powielamy tekstu z podmienioną nazwą dzielnicy. Przed rozbudową sprawdzamy istniejące adresy, intencję zapytań i informacje, które firma może potwierdzić oraz aktualizować.",
  },
  {
    question: "Jak sprawdzić pozycjonowanie strony?",
    answer: "Sprawdzamy w Google Search Console, dla których zapytań i stron występują wyświetlenia, kliknięcia oraz średnia pozycja. Oceniamy grupy fraz i strony docelowe, zamiast polegać na jednym ręcznym wyszukaniu. Lokalne wyniki mogą różnić się zależnie od miejsca. Widoczność zestawiamy z ruchem i zapytaniami, ale nie przypisujemy im wartości bez danych.",
  },
  {
    question: "Czy można zamówić sam audyt SEO?",
    answer: "Tak. Możesz zlecić sam audyt i wdrożyć rekomendacje we własnym zespole. Przed startem ustalamy typ analizowanych podstron, dostęp do danych i formę przekazania wniosków. Lista wskazuje priorytety oraz wymagane kompetencje, dzięki czemu łatwiej oddzielić zmiany redakcyjne od prac programistycznych. Jeśli później zechcesz zlecić nam część prac, przygotujemy odrębny zakres i wycenę.",
  },
];

export default function SEOPozycjonowanieWarszawa() {
  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonicalUrl} />
      <ServiceEditorial
        path={path}
        title={pageTitle}
        eyebrow="SEO dla firm · Warszawa i okolice · współpraca zdalna"
        area="Warszawa"
        lead="Pozycjonowanie stron i sklepów dla firm z Warszawy: audyt SEO, technika, treści, lokalna widoczność i pomiar zapytań. Zakres dobieramy do celu, stanu witryny i obszaru działania — bez obietnic pozycji lub terminu efektów."
        enquiryVariant="audit"
        contactLabel="Zapytaj o audyt SEO dla swojej firmy"
        contactDescription="Prześlij adres strony, opisz ofertę i obszar obsługi klientów. Napisz, czy interesuje Cię samodzielny audyt czy stałe pozycjonowanie. Na tej podstawie ustalimy potrzebny zakres i warunki wyceny."
        summary={summary}
        scopeTitle="Pozycjonowanie stron Warszawa: audyt SEO i optymalizacja"
        scope={scope}
        sections={sections}
        faqs={faqs}
        faqTitle="Pozycjonowanie Warszawa — pytania i odpowiedzi"
      />
    </>
  );
}
