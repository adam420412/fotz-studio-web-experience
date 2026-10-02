import type { SocialMediaCluster } from "./socialMediaClusters";

type GuideSection = { title: string; text: string };

const guides: Record<string, GuideSection[]> = {
  "co-to-jest": [
    { title: "Partner do prowadzenia komunikacji", text: "Agencja social media pomaga firmie zaplanować obecność w mediach społecznościowych, przygotować treści i ocenić ich efekty. Zakres może obejmować strategię, zdjęcia, filmy, publikację, moderację oraz reklamy. Sama liczba postów nie określa jeszcze jakości ani kompletności usługi." },
    { title: "Co zostaje po stronie firmy?", text: "Agencja potrzebuje wiedzy o ofercie, dostępu do materiałów i osoby zatwierdzającej publikacje. Warto od razu ustalić, kto odpowiada na pytania o cenę i dostępność, obsługuje reklamacje oraz przekazuje informację o sprzedaży z pozyskanych kontaktów." },
  ],
  "co-robi": [
    { title: "Od briefu do publikacji", text: "Praca zaczyna się od celu, odbiorców i przeglądu dotychczasowych działań. Następnie powstaje plan tematów, scenariusze i materiały. Przed publikacją trzeba uzgodnić teksty, formaty, terminy oraz odpowiedzialność za akceptację." },
    { title: "Reklamy i ocena wyników", text: "Płatna promocja wymaga osobnego budżetu, pomiaru i planu testów. Raport powinien łączyć koszty oraz reakcje odbiorców z celem firmy. Przy pozyskiwaniu zapytań trzeba sprawdzić również ich jakość i dalszy kontakt handlowy." },
  ],
  "vs-samodzielny": [
    { title: "Kiedy prowadzić profile wewnętrznie?", text: "Własny zespół ma bezpośredni dostęp do codziennych wydarzeń i wiedzy o produkcie. Ten model ma sens, gdy ktoś ma czas na planowanie, tworzenie treści, publikację i analizę. Do kosztu warto doliczyć narzędzia, sprzęt, szkolenia oraz zastępstwa." },
    { title: "Kiedy dołączyć agencję?", text: "Wsparcie zewnętrzne może uzupełnić brakujące kompetencje, np. produkcję video albo kampanie reklamowe. Można też podzielić pracę: firma dostarcza wiedzę i bieżące materiały, a agencja przygotowuje plan, montaż i reklamy. Porównuj ten sam zakres, a nie samą miesięczną kwotę." },
  ],
  "rodzaje-uslug": [
    { title: "Strategia i bieżąca obsługa", text: "Audyt porządkuje punkt wyjścia, strategia określa odbiorców i rolę kanałów, a plan publikacji przekłada je na konkretne tematy. Obsługa profilu może obejmować teksty, grafiki, planowanie postów i moderację. Każdy z tych elementów powinien mieć określony zakres." },
    { title: "Produkcja i dystrybucja", text: "Sesja zdjęciowa, dzień nagraniowy, montaż rolek i przygotowanie reklam to osobne zadania. Przy wycenie ustal liczbę materiałów, wersje formatów, napisy, poprawki oraz prawa do wykorzystania. Emisja reklam i jej budżet powinny być wyszczególnione oddzielnie." },
  ],
  "platformy-2026": [
    { title: "Zacznij od odbiorcy i formatu", text: "Wybór platformy powinien wynikać z tego, gdzie Twoi klienci szukają inspiracji, wiedzy lub wykonawcy. Sprawdź dotychczasowe zapytania, ruch na stronie i treści konkurencji. Popularność kanału sama w sobie nie przesądza o jego przydatności dla konkretnej firmy." },
    { title: "Porównaj koszt regularnego tworzenia", text: "Przy Instagramie, TikToku i YouTube zaplanuj zasoby do tworzenia video. Przy komunikacji eksperckiej na LinkedIn uwzględnij udział osób z firmy. Zacznij od kanałów, które jesteś w stanie konsekwentnie obsługiwać, i oceniaj je według wspólnego celu biznesowego." },
  ],
  "zasada-5-5-5": [
    { title: "Przykładowy podział tematów", text: "W tym poradniku 5-5-5 oznacza roboczy plan piętnastu treści: pięć edukacyjnych, pięć inspirujących i pięć sprzedażowych. To sposób porządkowania pomysłów, a nie reguła algorytmu ani gwarancja zasięgów. Proporcje dopasuj do etapu rozwoju marki." },
    { title: "Jak zastosować go w firmie usługowej?", text: "Treści edukacyjne mogą odpowiadać na pytania klientów, inspirujące pokazywać proces i zastosowania usługi, a sprzedażowe wyjaśniać ofertę i kolejny krok. Po publikacji sprawdź, które tematy przynoszą wartościowe reakcje i zapytania, a następnie zmień proporcje." },
  ],
  "najlepsza-w-polsce": [
    { title: "Porównuj dowody i sposób pracy", text: "Dobra agencja dla Twojej firmy powinna rozumieć cel, odbiorców i ograniczenia produkcyjne. Poproś o realizacje z podobnym zakresem, wyjaśnienie udziału zespołu oraz sposób mierzenia efektów. Sam logotyp klienta nie mówi, jakie zadanie wykonała agencja." },
    { title: "Zadaj te same pytania każdemu wykonawcy", text: "Porównaj liczbę i rodzaje materiałów, proces akceptacji, poprawki, moderację, reklamy i raportowanie. Zapytaj o dostęp do kont, własność plików oraz zasady zakończenia współpracy. Wybór oparty na takim zestawieniu jest bardziej użyteczny niż ogólny ranking." },
  ],
  cennik: [
    { title: "Z czego składa się wycena?", text: "Na koszt wpływają liczba kanałów, rodzaje i liczba treści, dni nagraniowe, montaż, moderacja oraz obsługa reklam. Oddziel wynagrodzenie za pracę od budżetu płaconego platformom reklamowym. Warto również wskazać koszty jednorazowe, takie jak audyt i przygotowanie strategii." },
    { title: "Jak otrzymać porównywalne oferty?", text: "Przekaż linki do profili, cel działań, przykłady oczekiwanych materiałów i dostępny budżet. Poproś o wyszczególnienie publikacji, produkcji, poprawek i raportów. W FOTZ Studio zakres i wycenę omawiamy na podstawie potrzeb firmy; szczegóły powinny znaleźć się w ofercie." },
  ],
  "modele-rozliczen": [
    { title: "Abonament czy pojedynczy projekt?", text: "Abonament porządkuje regularną obsługę profili, a wycena projektowa pasuje do określonego zadania, np. sesji, serii filmów lub kampanii. W obu modelach zapisz rezultat pracy, harmonogram, liczbę poprawek oraz zadania wymagające osobnej wyceny." },
    { title: "Rozliczenie zależne od wyniku", text: "Premia za wynik wymaga wspólnej definicji konwersji, dostępu do danych i ustalenia, na co wykonawca ma wpływ. Zapytanie, sprzedaż i opłacone zamówienie to różne zdarzenia. Uzgodnij źródło danych, okno przypisania wyniku i sposób rozstrzygania rozbieżności." },
  ],
  pakiety: [
    { title: "Dopasuj zakres do celu", text: "Firma rozpoczynająca komunikację może potrzebować uporządkowania profilu i regularnych treści. Marka rozwijająca sprzedaż może dodatkowo potrzebować produkcji video, kampanii oraz analityki. Nazwa pakietu nie zastępuje listy konkretnych prac i materiałów." },
    { title: "Co powinno znaleźć się w porównaniu?", text: "Zestaw kanały, liczbę postów i filmów, udział zdjęć, nagrania, moderację, poprawki oraz raporty. Sprawdź też, czy cena obejmuje obsługę reklam, czy samą publikację. Zakres współpracy z FOTZ Studio dopasowujemy do briefu i potwierdzamy w ofercie." },
  ],
  "czy-warto": [
    { title: "Sprawdź, czego brakuje w obecnym procesie", text: "Najpierw nazwij problem: brak czasu, nieregularne publikacje, słabe materiały, brak pomiaru albo nieskuteczna obsługa zapytań. Zewnętrzny zespół jest przydatny wtedy, gdy jego zakres odpowiada na konkretną potrzebę i firma może dostarczyć wiedzę oraz akceptacje." },
    { title: "Ustal warunki oceny współpracy", text: "Przed startem zapisz punkt wyjścia, oczekiwane materiały i wskaźniki. Uwzględnij czas potrzebny klientowi na decyzję oraz możliwości obsługi nowych kontaktów. Jeśli nie da się powiązać działań ze sprzedażą, raportuj ograniczenia pomiaru zamiast przypisywać każdą zmianę agencji." },
  ],
  "jak-negocjowac": [
    { title: "Negocjuj zakres, priorytety i kolejność", text: "Przy ograniczonym budżecie ustal, które kanały i formaty są potrzebne na start. Można zmniejszyć liczbę publikacji, wykorzystać istniejące materiały lub połączyć nagrania w jednej sesji. Każda zmiana ceny powinna wskazywać, co zmienia się w zakresie pracy." },
    { title: "Doprecyzuj warunki przed decyzją", text: "Poproś o opis akceptacji, terminów, poprawek, praw do materiałów, dostępów i raportowania. Oddziel koszt emisji reklam od obsługi. Ustal także sposób wyceny dodatkowych zadań, żeby porównywać pełny koszt współpracy." },
  ],
  roi: [
    { title: "Przychód z reklam to jeszcze nie zysk", text: "ROAS porównuje przypisany przychód z wydatkami na emisję reklam. Ocena rentowności wymaga również uwzględnienia marży, kosztów produkcji, obsługi i innych wydatków. Określ, które koszty zaliczasz do inwestycji, zanim porównasz wyniki różnych działań." },
    { title: "Połącz zapytania ze sprzedażą", text: "W firmie usługowej oznacz źródło kontaktu i zapisz, czy zapytanie zmieniło się w klienta. Porównuj te same okresy oraz zasady atrybucji. Nie sumuj automatycznie sprzedaży przypisanej przez różne platformy: jedna transakcja może pojawić się w kilku raportach." },
  ],
};

export function getSocialMediaGuide(cluster: SocialMediaCluster): GuideSection[] {
  if (cluster.slug === "poznan") return [
    { title: "Social media i produkcja treści w Poznaniu", text: "FOTZ Studio łączy prowadzenie komunikacji z przygotowaniem zdjęć i video. Przy planowaniu działań dla poznańskiej firmy ustalamy, które materiały pokażą ofertę, ludzi i sposób pracy. Nagrania w siedzibie firmy lub w studiu wymagają osobnego uzgodnienia terminu i zakresu." },
    { title: "Od pierwszej rozmowy do planu publikacji", text: "Na początek przydadzą się linki do profili, opis odbiorców, cel działań i dostępne materiały. Na tej podstawie można ustalić kanały, tematy, formaty i proces akceptacji. Prowadzenie profili, produkcję oraz kampanie reklamowe rozpisujemy jako konkretne zadania." },
    { title: "Jak oceniać efekty lokalnych działań?", text: "W zależności od oferty warto obserwować zapytania, rezerwacje albo zakupy, a następnie ich jakość i źródło. Zasięg pomaga ocenić dystrybucję treści, ale sam nie potwierdza pozyskania klienta. Cel i sposób pomiaru powinny być ustalone przed publikacją." },
  ];
  if (cluster.kind === "city") return [
    { title: `Social media dla firm: ${cluster.shortLabel}`, text: "Punktem wyjścia jest obszar, na którym firma pozyskuje klientów. Lokalne usługi potrzebują innego planu treści i reklam niż sklep obsługujący całą Polskę. W briefie warto wskazać zasięg działania, sezonowość oferty oraz najczęstsze pytania klientów." },
    { title: "Współpraca z zespołem z Poznania", text: "Nasza baza znajduje się w Poznaniu. Przy współpracy z firmą z innego miasta ustalamy zdalny obieg materiałów i akceptacji. Jeśli projekt wymaga nagrań na miejscu, termin, dojazd i koszty produkcji trzeba określić przed rozpoczęciem prac." },
    { title: "Co przygotować do wyceny?", text: "Prześlij adres strony, linki do profili, cel działań i przykłady materiałów, które Ci się podobają. Wskaż, czy masz własne zdjęcia i filmy oraz kto może uczestniczyć w nagraniach. Pozwoli to rozdzielić koszt prowadzenia profili, produkcji i budżetu reklamowego." },
  ];
  return guides[cluster.slug] ?? [];
}
