import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const path = "/seo/pozycjonowanie-gdansk";
const pageTitle = "Pozycjonowanie stron internetowych Gdańsk — SEO";
const seoTitle = "Pozycjonowanie stron Gdańsk — SEO | FOTZ";
const seoDescription = "Pozycjonowanie stron Gdańsk: audyt SEO, technika, treści i lokalna widoczność w Google. Zarządzanie pozycjonowaniem i pomiar zapytań — sprawdź usługi FOTZ.";
const canonicalUrl = "https://www.fotz-studio.pl/seo/pozycjonowanie-gdansk";

const summary = [
  "Zaczynamy od oferty, strony i rzeczywistego obszaru obsługi klientów. Nie zakładamy z góry, że każda fraza z nazwą Gdańska ma niską konkurencję lub przyniesie wartościowe zapytania.",
  "Audyt SEO porządkuje priorytety: wskazujemy problem, rekomendowaną poprawkę, sposób odbioru oraz osobę odpowiedzialną za wdrożenie.",
  "Raport z zarządzania pozycjonowaniem oddziela widoczność i pozycje w Google od ruchu organicznego, zapytań i sprzedaży. Nie gwarantujemy pozycji, terminu efektu ani liczby klientów.",
];

const scope = [
  {
    title: "Audyt SEO i zarządzanie pozycjonowaniem",
    text: "Sprawdzamy indeksację, dostępność treści, kanoniczne adresy, przekierowania, strukturę nagłówków, dane strukturalne i odnośniki wewnętrzne. Analiza obejmuje też zapytania oraz strony docelowe w Search Console i konkurencję obecną w wynikach. Otrzymujesz uporządkowane rekomendacje, nie ogólną listę uwag. Zaznaczamy, co możesz poprawić samodzielnie, co wymaga programisty i które prace możemy wykonać w uzgodnionym zakresie.",
    href: "/seo/audyt",
    link: "Zobacz zakres audytu SEO",
  },
  {
    title: "Techniczna optymalizacja strony",
    text: "Weryfikujemy działanie witryny na urządzeniach mobilnych, szybkość kluczowych podstron, stabilność układu, odpowiedzi HTTP i poprawność formularzy. Kontrolujemy duplikację adresów, niedziałające linki oraz dostępność treści dla wyszukiwarki. Techniczne SEO obejmuje tylko potrzebne poprawki. Jeśli ograniczeniem jest CMS, szablon lub hosting, opisujemy konsekwencje i możliwe rozwiązania przed rozpoczęciem pracy; cała strona nie zawsze wymaga przebudowy.",
    href: "/seo/techniczne",
    link: "Poznaj techniczne SEO",
  },
  {
    title: "Treści i optymalizacja ofert",
    text: "Porządkujemy title, meta description, nagłówki i treść tak, aby strona internetowa jasno przedstawiała usługę, warunki realizacji oraz następny krok. Uzupełniamy odpowiedzi na pytania klientów i powiązania z innymi materiałami. Plan redakcyjny wynika z intencji wyszukiwania i luk w ofercie, a nie z narzuconej liczby artykułów albo powtarzania frazy. Teksty przygotowujemy na podstawie informacji potwierdzonych przez firmę.",
    href: "/content-marketing/strategia",
    link: "Zobacz strategię treści",
  },
  {
    title: "Lokalna widoczność i Google Maps",
    text: "Dla firmy lokalnej sprawdzamy zgodność danych adresowych albo obszaru działania na stronie i w Profilu Firmy w Google. W uzgodnionym zakresie porządkujemy kategorie, usługi, opis, zdjęcia i odnośnik do właściwej podstrony. Omawiamy zgodny z regulaminem sposób proszenia prawdziwych klientów o opinie. Nie tworzymy fikcyjnych lokalizacji, wpisów ani recenzji i nie obiecujemy widoczności w Mapach Google dla każdego miejsca w Trójmieście.",
    href: "/uslugi/pozycjonowanie-lokalne",
    link: "Sprawdź pozycjonowanie lokalne",
  },
  {
    title: "Linkowanie i tematy poradnikowe",
    text: "Poprawiamy linkowanie wewnętrzne, aby użytkownik mógł przejść od odpowiedzi do właściwej usługi, a wyszukiwarka — odnaleźć powiązane strony. Analizujemy również obecne odnośniki i tematyczne miejsca, w których firma może zaprezentować wiedzę. Link building planujemy na podstawie jakości źródła i związku z ofertą, bez pakietów przypadkowych linków. Liczbę publikacji, sposób akceptacji i koszty zewnętrzne ustalamy osobno.",
  },
  {
    title: "Pomiar zapytań w zarządzaniu pozycjonowaniem",
    text: "Łączymy wykonane prace z danymi o wyświetleniach, kliknięciach, stronach docelowych i uzgodnionych działaniach użytkowników. Formularz, rozmowa telefoniczna, rezerwacja i sprzedaż to różne etapy, dlatego definiujemy je oddzielnie. Raport wskazuje wnioski i kolejne priorytety, a nie tylko tabelę pozycji. Zakres pomiaru zależy od konfiguracji analityki, systemu kontaktu i dostępnych danych o jakości zapytań.",
  },
];

const sections = [
  {
    title: "Pozycjonowanie Gdańsk: lokalne SEO dla firm i stron www",
    text: "Gdańsk to miasto, w którym firma może obsługiwać klientów w punkcie, z dojazdem albo w szerszym regionie — zakres zawsze musi odpowiadać rzeczywistości. Pozycjonowanie lokalne w Gdańsku odpowiada na zapytania związane z miejscem, przyjazdem lub dostępnością. Jedna osoba szuka usługi w pobliżu, inna porównuje wykonawców, a jeszcze inna sprawdza warunki przed kontaktem. Sama fraza z nazwą miasta nie mówi więc wszystkiego o intencji. Dlatego pozycjonowanie stron w Gdańsku zaczynamy od oferty i lokalizacji, których ona rzeczywiście dotyczy. Pozycjonowanie w Gdańsku i lokalne pozycjonowanie stron wymagają innych informacji dla punktu obsługi, a innych dla usługi mobilnej. Nie tworzymy kopii tej samej strony dla Wrzeszcza, Śródmieścia czy Oliwy tylko po to, by podmienić nazwę dzielnicy. Osobną podstronę rekomendujemy wtedy, gdy może przedstawić odrębną, potwierdzoną ofertę. Widoczność lokalna i SEO w Gdańsku powinny wspierać decyzję klienta zamiast sztucznie zwiększać liczbę adresów. Firma z Gdańska nie musi automatycznie kopiować strategii działalności ogólnopolskiej.",
    points: [
      "Usługa na miejscu: lokalizacja, dostępność, prawdziwe zdjęcia, godziny i jasny sposób kontaktu.",
      "Dojazd do klienta: faktyczny obszar obsługi oraz informacje potrzebne do ustalenia realizacji i wyceny.",
      "Gdańsk i okolice: zasięg opisany według sposobu pracy, bez automatycznego obejmowania całego Trójmiasta.",
    ],
  },
  {
    title: "Zarządzanie pozycjonowaniem: słowa kluczowe i strategia SEO",
    text: "Strategia SEO przypisuje słowa kluczowe do konkretnych stron i etapów decyzji. Analizujemy ofertę, wyniki wyszukiwania, język klientów oraz dotychczasowe zapytania z Search Console. Rozdzielamy frazy lokalne, ogólnopolskie, poradnikowe i transakcyjne; fraza informacyjna może wymagać innej treści niż zapytanie o wycenę. Branża i konkurencja wpływają na dobór tematów, ale nie zastępują analizy intencji. Konkurencyjny temat oceniamy na podstawie rzeczywistych wyników, a konkurencja dla jednej usługi nie przesądza o trudności innej. Konkurencja wymaga osobnej oceny dla każdej grupy fraz. Następnie sprawdzamy, czy istniejąca podstrona odpowiada intencji, wymaga rozbudowy, czy powinna zostać połączona z inną. Mapa fraz kluczowych ogranicza sytuację, w której kilka adresów tej samej witryny próbuje odpowiadać na identyczne zapytanie. Strategie obejmują priorytetowe usługi oraz pytania, które potencjalni klienci zadają przed zakupem. Kluczowa jest zgodność z ofertą, a cele biznesowe pomagają wybrać priorytety zamiast samego deklarowanego wolumenu. Branża, obszar działania i możliwość przedstawienia wiarygodnej odpowiedzi wskazują zadania o realnym znaczeniu.",
    points: [
      "Lista priorytetowych usług lub produktów oraz rzeczywisty zasięg ich sprzedaży.",
      "Analiza intencji, konkurencji i stron docelowych dla grup fraz, zamiast jednej długiej listy słów.",
      "Harmonogram prac z priorytetami, odpowiedzialnością za wdrożenie i sposobem sprawdzenia rezultatu.",
    ],
  },
  {
    title: "Techniczne SEO i optymalizacja strony krok po kroku",
    text: "Prace techniczne zaczynają się od usunięcia barier, które utrudniają odczytanie oferty użytkownikowi i wyszukiwarce. Wyszukiwarka Google powinna dotrzeć do ważnych treści bez sprzecznych dyrektyw, a użytkownik — bez technicznych przeszkód. Sprawdzamy, czy ważne adresy zwracają właściwy status, czy robots i canonical są spójne oraz czy nawigacja prowadzi do kluczowych podstron. Na telefonie weryfikujemy czytelność, menu, przyciski kontaktowe i formularz. Analiza szybkości wskazuje konkretne zasoby lub elementy do poprawy; nie sprowadza się do samego wyniku narzędzia. W danych strukturalnych opisujemy wyłącznie informacje zgodne z widoczną treścią. Po wdrożeniu kontrolujemy kod, zachowanie strony i dostępność zmienionych adresów. Wyszukiwarka i odbiorca są uwzględnieni w tych samych priorytetach. Skuteczne SEO i kompleksowe pozycjonowanie nie oznaczają poprawiania wszystkiego bez kolejności: najpierw rozwiązujemy problemy mające znaczenie dla indeksowania, korzystania z oferty i pomiaru, a mniej istotne zalecenia odkładamy lub pomijamy.",
  },
  {
    title: "Treści i linkowanie w skutecznym pozycjonowaniu stron",
    text: "Skuteczne pozycjonowanie stron internetowych łączy użyteczną odpowiedź z wiarygodną prezentacją firmy. Treść ofertowa powinna wyjaśniać zakres, warunki, proces i ograniczenia usługi, a materiał poradnikowy — rozwiązywać konkretny problem odbiorcy. Optymalizacja treści nie polega na osiągnięciu sztywnej gęstości słów. Redagujemy nagłówki i akapity tak, by dało się je czytać, porządkujemy powtórzenia i dodajemy informacje potrzebne przed kontaktem. Pozycjonowanie stron www obejmuje także linkowanie wewnętrzne między naturalnie powiązanymi tematami, z opisowym anchor tekstem i bez wymuszania odnośnika w każdym akapicie. Przy linkach zewnętrznych analizujemy tematyczne dopasowanie i jakość publikacji. Nie obiecujemy określonej liczby odnośników ani efektu samego pakietu linków. Efektywne pozycjonowanie nie kończy się na wejściu: nie wystarczy zwiększyć ruch na stronie, jeśli oferta nie odpowiada potrzebie odbiorcy. Content marketing dla stron firm ma uzupełniać usługi i pomagać użytkownikom, a nie produkować treści wyłącznie do wyszukiwarki.",
    href: "/content-marketing/strategia",
    link: "Poznaj podejście FOTZ do treści",
  },
  {
    title: "Pozycjonowanie lokalne i Profil Firmy w Google",
    text: "Profil Firmy w Google, nazywany też wizytówką Google lub dawniej Google Moja Firma, jest odrębnym obszarem pracy niż organiczne wyniki strony. Lokalne pozycjonowanie i pozycjonowanie wizytówki Google zaczynamy od sprawdzenia, czy profil odpowiada rzeczywistej działalności i zasadom Google. Porównujemy nazwę, kategorie, dane kontaktowe, adres albo obszar usług z informacjami na stronie. Wskazujemy braki w opisie, usługach i materiałach, a odnośnik kierujemy do strony, która rzeczywiście odpowiada ofercie. Opinie powinny pochodzić od prawdziwych klientów; nie kupujemy recenzji i nie tworzymy wirtualnych biur. Wyniki w Google Maps zależą m.in. od trafności, odległości i rozpoznawalności, dlatego dla firm w Gdańsku również nie gwarantujemy pozycji w mapach. Dane profilu analizujemy osobno od Search Console, a oba obszary łączymy dopiero na poziomie uzgodnionych celów i jakości kontaktu.",
  },
  {
    title: "Pozycjonowanie stron i sklepów internetowych w Gdańsku",
    text: "Inny zakres przygotowujemy dla strony usługowej, inny dla sklepu internetowego. Sklep internetowy wymaga analizy katalogu, a pozycjonowanie sklepu obejmuje kategorie, produkty, warianty, filtry, dostępność oraz indeksowanie adresów z parametrami. W serwisie firmowym priorytetem są zwykle strony usług, informacje o realizacji i droga do zapytania. Sprawdzamy opisy, linkowanie i dane strukturalne zgodne z widoczną ofertą. Nie każdy filtr powinien tworzyć osobną stronę w wynikach wyszukiwania, a niedostępny produkt nie zawsze wymaga usunięcia adresu. Decyzje zależą od popytu, zastępczej oferty i możliwości platformy. Pozycjonowanie sklepów internetowych w Gdańsku może dotyczyć klientów lokalnych lub sprzedaży w całej Polsce, więc samo miasto nie determinuje planu. Przed rekomendacją sprawdzamy platformę, katalog i sposób realizacji zamówień, bez automatycznej przebudowy całego sklepu.",
  },
  {
    title: "Jak mierzymy widoczność w Google i zapytania?",
    text: "W Google Search Console obserwujemy zapytania, wyświetlenia, kliknięcia, strony docelowe i średnią pozycję dla uzgodnionych grup. Analizujemy nie tylko to, czy pozycje w wynikach wyszukiwania rosną, ale przede wszystkim jakie frazy i adresy zyskują widoczność w wyszukiwarce Google. W analityce strony sprawdzamy ruch organiczny oraz zdarzenia związane z formularzem, telefonem lub rezerwacją, jeśli konfiguracja pozwala je wiarygodnie zmierzyć. Kliknięcie przycisku nie jest równoznaczne z wysłanym zapytaniem, a zapytanie — z potwierdzoną sprzedażą. Dlatego zachęcamy do oznaczania źródła i jakości kontaktu w procesie obsługi klienta. Raport pokazuje wykonane wdrożenia, dane i wnioski na kolejny okres. Zmiany sezonowe, kampanie reklamowe i inne prace zaznaczamy jako kontekst, zamiast przypisywać każdy wzrost lub spadek jednej optymalizacji.",
    points: [
      "Punkt wyjścia: zakres fraz i stron, jakość dostępnych danych oraz definicja wartościowego kontaktu.",
      "Pomiar: widoczność i ruch na stronie analizowane oddzielnie od zapytań, rezerwacji i sprzedaży.",
      "Interpretacja: porównywalne okresy, zakończone wdrożenia i znany kontekst marketingowy.",
    ],
  },
  {
    title: "Proces pozycjonowania: usługi SEO od audytu do kolejnych działań",
    text: "Pozycjonowanie stron internetowych w Gdańsku prowadzimy jako proces z jasno opisanymi etapami. Najpierw poznajemy ofertę, obszar działania i sposób obsługi zapytań. Następnie wykonujemy uzgodniony audyt i przygotowujemy kompleksowy plan, w którym każda rekomendacja ma priorytet oraz właściciela wdrożenia. Po akceptacji realizujemy wybrane poprawki techniczne, treści i prace lokalne albo przekazujemy zalecenia Twojemu zespołowi. Zarządzanie pozycjonowaniem obejmuje też kontrolę wdrożenia i analizę danych. Harmonogram dotyczy naszych zadań, nie obiecanej daty uzyskania pozycji. Tempo zależy m.in. od stanu witryny, dostępów, akceptacji, konkurencji i czasu ponownego przetworzenia zmian przez wyszukiwarkę. Działania SEO mogą mieć formę jednorazowego projektu lub stałej współpracy; cykl prac i raportów zapisujemy w ofercie. Kompleksowe pozycjonowanie stron i kompleksowa usługa obejmują wyłącznie uzgodnione zadania, a zarządzanie pozycjonowaniem nie polega na automatycznym przedłużaniu zakresu bez omówienia rezultatów i kolejnych potrzeb.",
    points: [
      "Brief i pomiar startowy: oferta, cele, lokalizacje, dane i sposób kwalifikacji zapytań.",
      "Audyt i plan: lista problemów, rekomendacje, priorytety, wycena oraz podział odpowiedzialności.",
      "Realizacja i odbiór: uzgodnione wdrożenia, sprawdzenie efektu technicznego i dokumentacja prac.",
      "Raport i decyzja: analiza widoczności oraz kontaktów, wnioski i wybór następnego zakresu.",
    ],
  },
  {
    title: "Ile kosztuje pozycjonowanie stron w Gdańsku?",
    text: "Koszt pozycjonowania stron zależy od pracy potrzebnej w konkretnej sytuacji, a nie od samej nazwy miasta. Cena pozycjonowania stron uwzględnia wielkość i technologię witryny, liczbę ofert lub kategorii, konkurencję, stan treści, wymagane wdrożenia oraz zakres materiałów przygotowywanych przez FOTZ. Inny budżet będzie odpowiadał jednorazowemu audytowi, inny regularnej pracy nad serwisem lub rozbudowanym sklepem. Nie podajemy sztywnego cennika przed analizą i nie rozliczamy obiecanej pozycji. Tanie pozycjonowanie bez opisania zadań i odpowiedzialności nie daje podstaw do porównania ofert. Propozycja wyszczególnia zadania, wyłączenia, terminy odbioru, odpowiedzialność każdej strony i koszty dodatkowe. Narzędzia, programowanie, publikacje zewnętrzne lub produkcja zdjęć wymagają osobnego uzgodnienia, jeśli są potrzebne. Możesz zacząć od samodzielnego audytu i wdrożyć rekomendacje we własnym zespole. Stałe zarządzanie pozycjonowaniem jest uzasadnione wtedy, gdy zakres wynika z celów i zasobów, a sposób pomiaru pozwala oceniać kolejne decyzje.",
    points: [
      "Do rozmowy wystarczy adres strony, opis oferty, priorytety i rzeczywisty obszar obsługi.",
      "Wycena zawiera zakres, wyłączenia, warunki akceptacji i zasady zmiany zadań.",
      "Nie przesyłaj haseł w pierwszej wiadomości; potrzebne dostępy ustalamy po poznaniu zakresu.",
    ],
  },
  {
    title: "SEO, Google Ads i media społecznościowe",
    text: "SEO dotyczy widoczności organicznej, natomiast Google Ads umożliwia płatną emisję reklam według wybranych ustawień i budżetu. To odrębne kanały oraz sposoby pomiaru. Kampania może pomóc sprawdzić komunikat lub stronę docelową, ale jej emisja kończy się po zatrzymaniu lub wyczerpaniu budżetu. Prace nad techniką, treścią i ofertą wspierają natomiast długofalową jakość witryny. Media społecznościowe odpowiadają na jeszcze inne potrzeby odbiorców i nie zastępują strony w wynikach wyszukiwania. Marketing internetowy może łączyć te działania, lecz nie dodajemy ich automatycznie do oferty. Najpierw ustalamy, czy potrzebna jest poprawa strony, kampania, prace SEO czy świadomie uzgodniona kombinacja. Tworzenie stron również wyceniamy osobno i tylko wtedy, gdy audyt potwierdza taką potrzebę. Koszty reklamy i publikacji zewnętrznych rozliczamy oddzielnie od prac nad pozycjonowaniem.",
  },
  {
    title: "Agencja SEO Gdańsk czy współpraca zdalna?",
    text: "Usługi SEO dla firm z Gdańska prowadzimy zdalnie: brief, analizę, akceptacje i omówienie wyników realizujemy online. FOTZ Studio ma siedzibę w Poznaniu i nie deklarujemy biura w Gdańsku. Agencja SEO powinna przedstawić sposób pracy, zakres odpowiedzialności, dostęp do danych i warunki zakończenia zadania, a nie tylko nazwę miasta w ofercie. W naszej propozycji wskazujemy, co przygotowuje FOTZ, co wdraża Twoja osoba techniczna i które elementy wymagają dodatkowej wyceny. Zarządzanie pozycjonowaniem opieramy na informacjach potwierdzonych przez firmę. Nie przypisujemy sobie realizacji innych marek, nie publikujemy zmyślonych wyników i nie obiecujemy pierwszej pozycji. Ewentualną produkcję zdjęć lub filmów na miejscu ustalamy oddzielnie, z wyprzedzeniem i po poznaniu potrzeb.",
  },
];

const faqs = [
  {
    question: "Ile kosztuje pozycjonowanie strony w Gdańsku?",
    answer: "Wycenę ustalamy po poznaniu strony, oferty, konkurencji i oczekiwanego zakresu. Inne prace są potrzebne przy jednorazowym audycie, inne przy stałej optymalizacji kilku podstron lub rozbudowanym sklepie. Oferta wyszczególnia zadania, wyłączenia, terminy odbioru i odpowiedzialność za wdrożenia. Nie stosujemy uniwersalnej ceny zależnej wyłącznie od miasta ani opłaty za obiecaną pozycję.",
  },
  {
    question: "Po jakim czasie widać efekty SEO?",
    answer: "Nie ma jednego terminu zależnego od Gdańska. Tempo prac zależy m.in. od stanu technicznego, dostępów, akceptacji, konkurencji, historii domeny i czasu wdrożenia oraz ponownego przetworzenia zmian przez wyszukiwarkę. Harmonogram w ofercie dotyczy naszych zadań, a nie gwarantowanej daty uzyskania pozycji lub zapytań. Postęp oceniamy na podstawie zakończonych prac i zebranych danych.",
  },
  {
    question: "Czy agencja może zapewnić miejsce w TOP10?",
    answer: "Nie możemy zagwarantować TOP10, pierwszego miejsca ani określonej liczby klientów. Na wyniki wpływają m.in. konkurencja, intencja zapytania, jakość i historia witryny oraz zmiany wyszukiwarki. Możemy natomiast opisać zakres prac, dostarczyć rekomendacje, kontrolować wdrożenia i raportować dane. Decyzje o kolejnych działaniach podejmujemy na podstawie obserwacji, bez obietnic niezależnych od nas.",
  },
  {
    question: "Czy mogę samodzielnie pozycjonować stronę firmową?",
    answer: "Tak. Możesz zlecić sam audyt i wdrożyć rekomendacje we własnym zespole. Przed startem ustalamy typ analizowanych podstron, dostęp do danych i formę przekazania wniosków. Lista wskazuje priorytety oraz wymagane kompetencje, dzięki czemu łatwiej oddzielić zmiany redakcyjne od prac programistycznych. Jeśli później zechcesz zlecić nam część prac, przygotujemy odrębny zakres i wycenę.",
  },
  {
    question: "Czy firma musi mieć biuro w Gdańsku?",
    answer: "Nie jest to potrzebne do rozpoczęcia współpracy, którą prowadzimy zdalnie. Wizytówka Google musi jednak odpowiadać rzeczywistemu sposobowi działania i zasadom Google. Nie tworzymy fikcyjnych adresów ani lokalizacji. Obszar usług powinien pokrywać się z rzeczywistym zasięgiem firmy, a strona jasno wyjaśniać, gdzie i na jakich warunkach klienci mogą skorzystać z oferty.",
  },
  {
    question: "Czy pozycjonowanie na Gdańsk obejmuje Gdynię i Sopot?",
    answer: "Tylko wtedy, gdy firma rzeczywiście obsługuje te miejsca i taki zakres uzgodnimy. Jedna strona może opisywać cały obszar działania, jeśli oferta jest wspólna. Osobne podstrony rozważamy dla odrębnych placówek lub usług wymagających innych informacji. Nie powielamy tekstu z podmienioną nazwą miasta i nie obiecujemy jednakowej widoczności w całym Trójmieście.",
  },
];

export default function SEOPozycjonowanieGdansk() {
  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonicalUrl} />
      <ServiceEditorial
        path={path}
        title={pageTitle}
        eyebrow="SEO dla firm · Gdańsk i Trójmiasto · współpraca zdalna"
        area="Gdańsk"
        lead="Pozycjonowanie stron i sklepów dla firm z Gdańska: audyt SEO, technika, treści, lokalna widoczność i pomiar zapytań. Zakres dobieramy do celu, stanu witryny i obszaru działania — bez obietnic pozycji lub terminu efektów."
        enquiryVariant="audit"
        contactLabel="Zapytaj o audyt SEO dla swojej firmy"
        contactDescription="Prześlij adres strony, opisz ofertę i obszar obsługi klientów. Napisz, czy interesuje Cię samodzielny audyt czy stałe pozycjonowanie. Na tej podstawie ustalimy potrzebny zakres i warunki wyceny."
        summary={summary}
        scopeTitle="Pozycjonowanie stron Gdańsk: audyt SEO i optymalizacja"
        scope={scope}
        sections={sections}
        faqs={faqs}
        faqTitle="Pozycjonowanie Gdańsk — pytania i odpowiedzi"
      />
    </>
  );
}
