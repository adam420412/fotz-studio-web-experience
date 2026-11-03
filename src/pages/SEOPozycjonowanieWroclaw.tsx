import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const path = "/seo/pozycjonowanie-wroclaw";
const pageTitle = "Pozycjonowanie stron Wrocław — lokalne SEO";
const seoTitle = "Pozycjonowanie stron Wrocław — SEO | FOTZ";
const seoDescription = "Pozycjonowanie stron Wrocław: audyt SEO, technika, treści i lokalna widoczność w Google. Sprawdź zakres usług, pomiar zapytań i warunki wyceny FOTZ.";
const canonicalUrl = "https://www.fotz-studio.pl/seo/pozycjonowanie-wroclaw";

const summary = [
  "Plan powstaje po poznaniu oferty, strony i rzeczywistego obszaru obsługi. Nie zakładamy, że każda fraza z nazwą Wrocławia będzie wartościowa ani że lokalny rynek gwarantuje szybki efekt.",
  "Analiza SEO wskazuje problem, rekomendowaną poprawkę, priorytet i sposób odbioru. Przed pracą ustalamy też, kto odpowiada za wdrożenie oraz akceptację zmian.",
  "Widoczność i pozycje w Google analizujemy oddzielnie od ruchu, zapytań i sprzedaży. Nie obiecujemy określonej pozycji, terminu efektu ani liczby klientów.",
];

const scope = [
  {
    title: "Audyt SEO i priorytety prac",
    text: "Sprawdzamy indeksowanie, dostępność ważnych stron, kanoniczne adresy, przekierowania, nagłówki, dane strukturalne i linkowanie wewnętrzne. Analizujemy również zapytania oraz strony docelowe w dostępnych danych Search Console. Otrzymujesz uporządkowane zalecenia z uzasadnieniem i sposobem kontroli, a nie ogólną listę uwag. Wskazujemy, co może poprawić zespół redakcyjny, co wymaga programisty i które zadania może objąć FOTZ.",
    href: "/seo/audyt",
    link: "Zobacz zakres analizy",
  },
  {
    title: "Techniczna optymalizacja stron",
    text: "Weryfikujemy wersję mobilną, szybkość istotnych podstron, stabilność układu, odpowiedzi HTTP i działanie formularzy. Kontrolujemy niedziałające odnośniki, duplikację adresów oraz dostępność treści dla wyszukiwarki. Zakres technicznego SEO ograniczamy do uzasadnionych poprawek. Jeśli przeszkodą jest CMS, szablon lub hosting, przed decyzją opisujemy możliwe rozwiązania i ich konsekwencje; nie każda witryna wymaga przebudowy.",
    href: "/seo/techniczne",
    link: "Poznaj techniczne SEO",
  },
  {
    title: "Treści i optymalizacja oferty",
    text: "Porządkujemy title, meta description, nagłówki i treść tak, aby strona internetowa jasno przedstawiała usługę, warunki realizacji oraz następny krok. Uzupełniamy odpowiedzi na pytania klientów i powiązania z innymi materiałami. Plan treści wynika z intencji wyszukiwania i luk w ofercie, a nie z narzuconej liczby artykułów albo gęstości frazy. Teksty przygotowujemy na podstawie informacji potwierdzonych przez firmę.",
    href: "/content-marketing/strategia",
    link: "Zobacz strategię treści",
  },
  {
    title: "Lokalna widoczność i Mapy Google",
    text: "Dla firmy lokalnej sprawdzamy zgodność adresu albo obszaru działania na stronie i w Profilu Firmy w Google. W uzgodnionym zakresie porządkujemy kategorie, usługi, opis, zdjęcia i odnośnik do właściwej podstrony. Omawiamy zgodny z regulaminem sposób proszenia prawdziwych klientów o opinie. Nie tworzymy fikcyjnych lokalizacji ani recenzji i nie obiecujemy określonej pozycji wizytówki Google w Mapach.",
    href: "/uslugi/pozycjonowanie-lokalne",
    link: "Sprawdź pozycjonowanie lokalne",
  },
  {
    title: "Strategia fraz i linkowanie",
    text: "Przypisujemy słowa kluczowe do konkretnych stron oraz etapów decyzji. Oddzielamy zapytania lokalne, ogólnopolskie, poradnikowe i transakcyjne, aby jedna podstrona nie odpowiadała przypadkowo na wszystkie tematy. Poprawiamy linkowanie wewnętrzne między naturalnie powiązanymi treściami. Analizujemy też możliwości pozyskania wartościowych odnośników zewnętrznych; liczbę publikacji, akceptację i koszty ustalamy osobno, bez pakietów przypadkowych linków.",
  },
  {
    title: "Pomiar widoczności i zapytań",
    text: "Łączymy wykonane prace z danymi o wyświetleniach, kliknięciach, stronach docelowych i uzgodnionych działaniach użytkowników. Formularz, rozmowa telefoniczna, rezerwacja i sprzedaż to różne etapy, dlatego definiujemy je oddzielnie. Raport wskazuje wnioski i kolejne priorytety, a nie tylko tabelę pozycji. Zakres pomiaru zależy od konfiguracji analityki, systemu kontaktu i dostępnych informacji o jakości zapytań.",
  },
];

const sections = [
  {
    title: "Pozycjonowanie lokalne Wrocław i okolice",
    text: "Pozycjonowanie lokalne we Wrocławiu dotyczy firm, dla których znaczenie ma miejsce realizacji usługi, dojazd albo rzeczywisty obszar obsługi. Klienci mogą wyszukiwać punkt w pobliżu, porównywać wykonawców albo sprawdzać warunki przed kontaktem. Każda usługa lokalna wymaga informacji dopasowanych do takiej intencji, a sama fraza z nazwą miasta jej nie wyjaśnia. Dlatego pozycjonowanie stron we Wrocławiu zaczynamy od oferty i sposobu jej realizacji. Lokalne pozycjonowanie stron może obejmować Wrocław i okolice tylko w zakresie, w jakim firma faktycznie działa. Pozycjonowanie stron internetowych wrocławskich firm uwzględnia lokalny kontekst, lecz biznes lokalny nie musi ograniczać się do jednego miasta. Nie tworzymy kopii tej samej strony dla Krzyków, Starego Miasta czy Psiego Pola wyłącznie po to, by podmienić nazwę dzielnicy. Osobny adres rekomendujemy wtedy, gdy może przedstawić odrębną, potwierdzoną ofertę. Pozycjonowanie ogólnopolskie planujemy na podstawie zasięgu sprzedaży, a nie automatycznego dodawania kolejnych miast.",
    points: [
      "Usługa w punkcie: prawdziwa lokalizacja, dostępność, godziny, zdjęcia i jasny sposób kontaktu.",
      "Dojazd do klienta: rzeczywisty obszar obsługi oraz informacje potrzebne do ustalenia realizacji.",
      "Sprzedaż poza Wrocławiem: odrębna ocena zapytań i stron docelowych dla szerszego rynku.",
    ],
  },
  {
    title: "Skuteczne pozycjonowanie stron Wrocław: słowa kluczowe i strategia",
    text: "Skuteczne pozycjonowanie wymaga decyzji popartych analizą, a nie samej listy fraz. Audyt pokazuje stan witryny, natomiast mapa słów kluczowych przypisuje grupy zapytań do właściwych adresów. Sprawdzamy język oferty, konkurencję, wyniki wyszukiwania i dostępne dane o dotychczasowej widoczności. Wyszukiwarka może prezentować różne strony w zależności od intencji i lokalizacji. Rozdzielamy zapytania informacyjne od komercyjnych, ponieważ poradnik i strona usługi pełnią inne zadania. Następnie oceniamy, czy istniejąca podstrona odpowiada intencji, wymaga rozbudowy, czy powinna zostać połączona z inną. Nie wszystkie strony powinny być pozycjonowane na ten sam temat. Mapa fraz ogranicza sytuacje, w których kilka adresów tej samej witryny konkuruje ze sobą. Strategia SEO wskazuje priorytetowe usługi, braki w treści, zależności techniczne i sposób pomiaru. Cele biznesowe pomagają wybrać prace o realnym znaczeniu zamiast pozyskiwania ruchu, który nie pasuje do oferty.",
    points: [
      "Wejście: oferta, obszar działania, ważne strony i dostępne dane o zapytaniach.",
      "Analiza: intencja, konkurencja, dopasowanie stron docelowych i potrzebne kompetencje.",
      "Rezultat: harmonogram z priorytetami, odpowiedzialnością za wdrożenie i kryteriami odbioru.",
    ],
  },
  {
    title: "Techniczne SEO i optymalizacja stron www krok po kroku",
    text: "Prace techniczne usuwają bariery, które utrudniają odczytanie oferty użytkownikowi i wyszukiwarce. Wyszukiwarka Google powinna docierać do ważnych treści bez sprzecznych dyrektyw, a odbiorca korzystać z nich bez technicznych przeszkód. Strony www sprawdzamy pod kątem statusów odpowiedzi, robots, canonical, nawigacji i odnośników do kluczowych podstron. Na telefonie weryfikujemy czytelność, menu, przyciski kontaktowe i formularz. Analiza szybkości wskazuje konkretne zasoby lub elementy do poprawy; nie sprowadza się do jednego wyniku narzędzia. Dane strukturalne opisują wyłącznie informacje zgodne z widoczną treścią. Po wdrożeniu kontrolujemy kod, zachowanie strony i dostępność zmienionych adresów. Skuteczne SEO nie oznacza poprawiania wszystkiego bez kolejności: najpierw rozwiązujemy problemy istotne dla indeksowania, korzystania z oferty i pomiaru, a mniej ważne zalecenia odkładamy albo pomijamy.",
  },
  {
    title: "Profesjonalne pozycjonowanie stron internetowych we Wrocławiu",
    text: "Skuteczne pozycjonowanie stron internetowych łączy użyteczną odpowiedź z wiarygodną prezentacją firmy. Treść ofertowa powinna wyjaśniać zakres, warunki, proces i ograniczenia usługi, a materiał poradnikowy — rozwiązywać konkretny problem i odpowiadać na potrzeby klienta. Optymalizacja treści nie polega na powtarzaniu frazy w każdym akapicie. Redagujemy nagłówki i teksty tak, by dało się je czytać, porządkujemy powtórzenia i dodajemy informacje potrzebne przed kontaktem. Podstawą skutecznego pozycjonowania stron jest również linkowanie wewnętrzne z opisowym anchor tekstem, bez wymuszania odnośnika przy każdej okazji. Przy linkach zewnętrznych analizujemy tematyczne dopasowanie i jakość publikacji. Nie obiecujemy efektu samego pakietu odnośników. Nie wystarczy zwiększyć ruch na stronie, jeśli oferta nie odpowiada potrzebie odbiorcy. Content marketing ma uzupełniać usługi i pomagać użytkownikom, a nie produkować teksty wyłącznie dla algorytmu Google.",
    href: "/content-marketing/strategia",
    link: "Poznaj podejście FOTZ do treści",
  },
  {
    title: "Lokalne pozycjonowanie stron www i wizytówka Google",
    text: "Profil Firmy w Google, nazywany wizytówką Google lub dawniej Google Moja Firma, jest odrębnym obszarem pracy niż organiczne wyniki strony. Pozycjonowanie wizytówki Google zaczynamy od sprawdzenia, czy profil odpowiada rzeczywistej działalności i zasadom Google. Porównujemy nazwę, kategorie, dane kontaktowe, adres albo obszar usług z informacjami na stronie. Wskazujemy braki w opisie, usługach i materiałach, a odnośnik kierujemy do podstrony zgodnej z ofertą. Lokalny klient powinien znaleźć tam spójne informacje, niezależnie od tego, czy trafia z wyszukiwarki, czy z mapy. Opinie powinny pochodzić od prawdziwych klientów; nie kupujemy recenzji i nie tworzymy wirtualnych biur. Wyniki w Mapach Google zależą m.in. od trafności, odległości i rozpoznawalności, dlatego również tutaj nie gwarantujemy pozycji. Dane profilu analizujemy osobno od Search Console, a oba obszary łączymy dopiero na poziomie uzgodnionych celów i jakości kontaktu.",
  },
  {
    title: "Pozycjonowanie stron www we Wrocławiu oraz sklepów internetowych",
    text: "Inny zakres przygotowujemy dla serwisu usługowego, inny dla sklepu internetowego. Pozycjonowanie sklepu internetowego obejmuje kategorie, produkty, warianty, filtry, dostępność i indeksowanie adresów z parametrami. W witrynie firmowej priorytetem są zwykle strony usług, warunki realizacji i droga do zapytania. Sprawdzamy opisy, linkowanie oraz dane strukturalne zgodne z widoczną ofertą. Nie każdy filtr powinien tworzyć osobną stronę w wynikach wyszukiwania, a niedostępny produkt nie zawsze wymaga usunięcia adresu. Decyzje zależą od popytu, zastępczej oferty i możliwości platformy. Dla sklepów internetowych z Wrocławia sprzedaż lokalna i ogólnopolska może wymagać różnych stron docelowych, więc miasto nie determinuje strategii. Przed rekomendacją analizujemy katalog, sposób realizacji zamówień i ograniczenia technologiczne, bez automatycznej przebudowy całego sklepu.",
  },
  {
    title: "Widoczność w wyszukiwarce Google i pomiar zapytań",
    text: "W Google Search Console obserwujemy zapytania, wyświetlenia, kliknięcia, strony docelowe i średnią pozycję dla uzgodnionych grup. Analizujemy nie tylko pozycje w wynikach wyszukiwania, ale przede wszystkim to, które strony w wynikach wyszukiwania Google i jakie frazy zyskują widoczność. Działania mogą zwiększyć widoczność strony w Google, lecz dopiero dane pokazują, czy dotyczy ona właściwych zapytań. W analityce strony sprawdzamy ruch organiczny oraz zdarzenia związane z formularzem, telefonem lub rezerwacją, jeśli konfiguracja pozwala je wiarygodnie zmierzyć. Kliknięcie przycisku nie jest równoznaczne z wysłanym zapytaniem, a zapytanie — ze sprzedażą. Zachęcamy więc do oznaczania źródła i jakości kontaktu w procesie obsługi klienta. Możesz porównywać dane swoich stron zamiast oceniać cały serwis jako jeden wynik. Raport pokazuje wykonane wdrożenia, dane i wnioski na kolejny okres. Zmiany sezonowe, kampanie reklamowe i inne prace zaznaczamy jako kontekst, zamiast przypisywać każdy wzrost lub spadek jednej optymalizacji. Nie przypisujemy stronie historycznych wyników, których nie potwierdzają aktualne dane.",
    points: [
      "Punkt wyjścia: zakres fraz i stron, jakość dostępnych danych oraz definicja wartościowego kontaktu.",
      "Pomiar: widoczność i ruch na stronie analizowane oddzielnie od zapytań, rezerwacji i sprzedaży.",
      "Interpretacja: porównywalne okresy, zakończone wdrożenia i znany kontekst marketingowy.",
    ],
  },
  {
    title: "Zarządzanie pozycjonowaniem stron internetowych krok po kroku",
    text: "Pozycjonowaniem stron internetowych zarządzamy jako procesem z jasno opisanymi etapami. Najpierw poznajemy ofertę, obszar działania i sposób obsługi zapytań. Następnie wykonujemy uzgodnioną analizę i przygotowujemy plan, w którym każda rekomendacja ma priorytet oraz właściciela wdrożenia. Po akceptacji realizujemy wybrane poprawki techniczne, treści i prace lokalne albo przekazujemy zalecenia Twojemu zespołowi. Kontrola wdrożenia i analiza danych pozwalają zdecydować o następnym zakresie. Harmonogram dotyczy naszych zadań, nie obiecanej daty uzyskania pozycji. Tempo zależy m.in. od stanu witryny, dostępów, akceptacji, konkurencji i czasu ponownego przetworzenia zmian przez wyszukiwarkę. Działania SEO mogą mieć formę jednorazowego projektu lub stałej współpracy; cykl prac i raportów zapisujemy w ofercie. Usługa nie jest automatycznie rozszerzana bez omówienia rezultatów i kolejnych potrzeb.",
    points: [
      "Brief i pomiar startowy: oferta, cele, lokalizacje, dane i sposób kwalifikacji zapytań.",
      "Analiza i plan: lista problemów, rekomendacje, priorytety, wycena oraz podział odpowiedzialności.",
      "Realizacja i odbiór: uzgodnione wdrożenia, kontrola techniczna i dokumentacja prac.",
      "Raport i decyzja: analiza widoczności oraz kontaktów, wnioski i wybór następnego zakresu.",
    ],
  },
  {
    title: "Pozycjonowanie we Wrocławiu — cennik i warunki wyceny",
    text: "Koszt pozycjonowania stron zależy od pracy potrzebnej w konkretnej sytuacji, a nie od samej nazwy miasta. Cena uwzględnia wielkość i technologię witryny, liczbę ofert lub kategorii, konkurencję, stan treści, wymagane wdrożenia oraz zakres materiałów przygotowywanych przez FOTZ. Inny budżet będzie odpowiadał jednorazowej analizie, inny regularnej pracy nad serwisem lub rozbudowanym sklepem. Nie podajemy sztywnego cennika przed analizą i nie rozliczamy obiecanej pozycji. Tanie pozycjonowanie bez opisania zadań i odpowiedzialności nie daje podstaw do porównania ofert. Propozycja wyszczególnia zadania, wyłączenia, terminy odbioru, odpowiedzialność każdej strony i koszty dodatkowe. Narzędzia, programowanie, publikacje zewnętrzne lub produkcja zdjęć wymagają osobnego uzgodnienia, jeśli są potrzebne. Możesz zacząć od samodzielnego audytu i wdrożyć rekomendacje we własnym zespole.",
    points: [
      "Do rozmowy wystarczy adres strony, opis oferty, priorytety i rzeczywisty obszar obsługi.",
      "Wycena zawiera zakres, wyłączenia, warunki akceptacji i zasady zmiany zadań.",
      "Nie przesyłaj haseł w pierwszej wiadomości; potrzebne dostępy ustalamy po poznaniu zakresu.",
    ],
  },
  {
    title: "Pozycjonowanie stron w Google, Google Ads i media społecznościowe",
    text: "SEO dotyczy widoczności organicznej, natomiast Google Ads umożliwia płatną emisję reklam według wybranych ustawień i budżetu. To odrębne kanały oraz sposoby pomiaru. Kampania może pomóc sprawdzić komunikat lub stronę docelową, ale jej emisja kończy się po zatrzymaniu lub wyczerpaniu budżetu. Prace nad techniką, treścią i ofertą wspierają natomiast długofalową jakość witryny. Media społecznościowe odpowiadają na jeszcze inne potrzeby odbiorców i nie zastępują strony w wynikach wyszukiwania. Marketing internetowy może łączyć te działania, lecz nie dodajemy ich automatycznie do oferty. Najpierw ustalamy, czy potrzebna jest poprawa strony, kampania, prace SEO czy świadomie uzgodniona kombinacja. Tworzenie stron wyceniamy osobno i tylko wtedy, gdy analiza potwierdza taką potrzebę. Koszty reklamy i publikacji zewnętrznych rozliczamy oddzielnie od prac nad pozycjonowaniem.",
  },
  {
    title: "Agencja SEO Wrocław czy zespół zdalny?",
    text: "Usługi SEO dla firm z Wrocławia prowadzimy zdalnie: brief, analizę, akceptacje i omówienie wyników realizujemy online. FOTZ Studio ma siedzibę w Poznaniu i nie deklarujemy biura we Wrocławiu. Agencja SEO powinna przedstawić sposób pracy, zakres odpowiedzialności, dostęp do danych i warunki zakończenia zadania, a nie tylko nazwę miasta w ofercie. Nie każda agencja oferuje ten sam zakres. Ofertę SEO z Wrocławia i usługę zdalną oceniaj według tych samych kryteriów: zadań, kompetencji i zasad odbioru. W naszej propozycji wskazujemy, co przygotowuje FOTZ, co wdraża Twoja osoba techniczna i które elementy wymagają dodatkowej wyceny. Pracujemy na informacjach potwierdzonych przez firmę. Nie przypisujemy sobie realizacji innych marek, nie publikujemy zmyślonych wyników i nie obiecujemy pierwszej pozycji. Ewentualną produkcję zdjęć lub filmów na miejscu ustalamy oddzielnie, z wyprzedzeniem i po poznaniu potrzeb.",
  },
];

const faqs = [
  {
    question: "Ile kosztuje pozycjonowanie strony we Wrocławiu?",
    answer: "Wycenę ustalamy po poznaniu strony, oferty, konkurencji i oczekiwanego zakresu. Inne prace są potrzebne przy jednorazowej analizie, inne przy stałej optymalizacji kilku podstron lub rozbudowanym sklepie. Oferta wyszczególnia zadania, wyłączenia, terminy odbioru i odpowiedzialność za wdrożenia. Nie stosujemy uniwersalnej ceny zależnej wyłącznie od miasta ani opłaty za obiecaną pozycję.",
  },
  {
    question: "Jak długo trwa pozycjonowanie strony we Wrocławiu?",
    answer: "Nie ma jednego terminu zależnego od Wrocławia. Tempo prac zależy m.in. od stanu technicznego, dostępów, akceptacji, konkurencji, historii domeny i czasu wdrożenia oraz ponownego przetworzenia zmian przez wyszukiwarkę. Harmonogram w ofercie dotyczy naszych zadań, a nie gwarantowanej daty uzyskania pozycji lub zapytań. Postęp oceniamy na podstawie zakończonych prac i zebranych danych.",
  },
  {
    question: "Czy pozycjonowanie gwarantuje miejsce w TOP10?",
    answer: "Nie możemy zagwarantować TOP10 ani określonej liczby klientów. Wysoka pozycja czy pierwsze miejsce w Google zależą m.in. od konkurencji, intencji zapytania, jakości i historii witryny oraz zmian w algorytmach Google. Możemy natomiast opisać zakres prac, dostarczyć rekomendacje, kontrolować wdrożenia i raportować dane. Decyzje o kolejnych działaniach podejmujemy na podstawie obserwacji, bez obietnic niezależnych od nas.",
  },
  {
    question: "Czy można zacząć od samego audytu SEO?",
    answer: "Tak. Samodzielne pozycjonowanie swojej strony możesz rozpocząć od audytu i wdrożyć rekomendacje we własnym zespole. Przed startem ustalamy typ analizowanych podstron, dostęp do danych i formę przekazania wniosków. Lista wskazuje priorytety oraz wymagane kompetencje, dzięki czemu łatwiej oddzielić zmiany redakcyjne od prac programistycznych. Jeśli później zechcesz zlecić nam część prac, przygotujemy odrębny zakres i wycenę.",
  },
  {
    question: "Czy firma musi mieć biuro we Wrocławiu?",
    answer: "Nie jest to potrzebne do rozpoczęcia współpracy, którą prowadzimy zdalnie. Wizytówka Google musi jednak odpowiadać rzeczywistemu sposobowi działania i zasadom Google. Nie tworzymy fikcyjnych adresów ani lokalizacji. Obszar usług powinien pokrywać się z rzeczywistym zasięgiem firmy, a strona jasno wyjaśniać, gdzie i na jakich warunkach klienci mogą skorzystać z oferty.",
  },
  {
    question: "Czym różni się SEO lokalne od ogólnopolskiego?",
    answer: "Lokalne SEO odpowiada na potrzeby związane z miejscem, dojazdem lub obszarem obsługi i może obejmować także Profil Firmy w Google. Strategia ogólnopolska koncentruje się na ofercie dostępnej niezależnie od lokalizacji odbiorcy. Wybór nie wynika z preferencji agencji, lecz ze sposobu sprzedaży i intencji zapytań. Obszary można łączyć, jeśli firma rzeczywiście działa lokalnie i na szerszym rynku.",
  },
  {
    question: "Jak wybrać agencję SEO we Wrocławiu?",
    answer: "Agencja powinna jasno opisać analizę, zakres usługi, odpowiedzialność za wdrożenia, sposób pomiaru i warunki rozliczenia. Porównuj konkretne zadania oraz kompetencje zespołu, nie samą nazwę miasta ani deklarowaną pozycję. Zapytaj także o wyłączenia z oferty, koszty dodatkowe, dostęp do danych i możliwość rozpoczęcia od jednorazowej analizy.",
  },
];

export default function SEOPozycjonowanieWroclaw() {
  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonicalUrl} />
      <ServiceEditorial
        path={path}
        title={pageTitle}
        eyebrow="SEO dla firm · Wrocław i okolice · współpraca zdalna"
        area="Wrocław"
        lead="Pozycjonowanie stron i sklepów dla firm z Wrocławia: audyt, technika, treści, lokalna widoczność i pomiar zapytań. Zakres dobieramy do celu, stanu witryny i obszaru działania — bez obietnic pozycji lub terminu efektów."
        enquiryVariant="audit"
        contactLabel="Zapytaj o audyt SEO dla swojej firmy"
        contactDescription="Prześlij adres strony, opisz ofertę i obszar obsługi klientów. Napisz, czy interesuje Cię samodzielny audyt czy stałe pozycjonowanie. Na tej podstawie ustalimy potrzebny zakres i warunki wyceny."
        summary={summary}
        scopeTitle="Audyt SEO i pozycjonowanie stron we Wrocławiu"
        scope={scope}
        sections={sections}
        faqs={faqs}
        faqTitle="Pozycjonowanie Wrocław — pytania i odpowiedzi"
      />
    </>
  );
}
