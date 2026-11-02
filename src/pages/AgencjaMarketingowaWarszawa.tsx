import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const path = "/agencja-marketingowa/warszawa";
const scope = [
  { title: "Strategia marketingowa", text: "Porządkujemy ofertę, odbiorców i argumenty sprzedażowe. Ustalamy jeden cel na początek, potrzebne materiały i sposób sprawdzenia, czy działania prowadzą do wartościowych zapytań.", href: "/content-marketing/strategia", link: "Strategia treści i plan publikacji" },
  { title: "Kampanie Google Ads i Meta Ads", text: "Przygotowujemy komunikaty, kreacje i strukturę kampanii reklamowych. Dobieramy kanał do sposobu, w jaki odbiorca wybiera usługę. Budżet emisji określamy osobno od wynagrodzenia za obsługę.", href: "/uslugi/reklama-facebook", link: "Kreacje i reklama na Facebooku" },
  { title: "Prowadzenie social media", text: "Łączymy plan treści z produkcją zdjęć, rolek i opisów. Uzgadniamy częstotliwość publikacji, akceptację materiałów oraz odpowiedzialność za komentarze i wiadomości.", href: "/social-media/obsluga", link: "Obsługa profili społecznościowych" },
  { title: "Strony internetowe i sklepy", text: "Projektujemy czytelną prezentację oferty i drogę do kontaktu lub zakupu. Sprawdzamy układ na telefonie, formularze oraz możliwość samodzielnej aktualizacji treści.", href: "/uslugi/strony-internetowe-dla-firm", link: "Strony dla firm — zakres i wycena" },
  { title: "SEO i content marketing", text: "Analizujemy indeksowanie, treści i linkowanie. Pozycjonowanie stron internetowych łączymy z odpowiedziami na pytania klientów, opisami usług i prawdziwymi przykładami pracy.", href: "/seo/audyt", link: "Audyt SEO i plan poprawek" },
  { title: "Fotografia i produkcja wideo", text: "Pokazujemy produkt, zespół, miejsce lub proces. Zdjęcia i filmy przygotowujemy do konkretnych zastosowań: oferty, reklamy, profilu społecznościowego albo prezentacji handlowej.", href: "/uslugi/video-marketing", link: "Video marketing i nasze filmy" },
];
const sections = [
  {
    title: "Stała obsługa marketingowa od 3 000 zł netto miesięcznie",
    text: "To punkt wyjścia dla firmy, która ma już zdjęcia lub filmy i potrzebuje regularnej publikacji oraz drobnych aktualizacji oferty. Zakres podstawowy potwierdzamy po poznaniu potrzeb. Nie obejmuje on automatycznie wszystkich usług wymienionych na tej stronie: nowa produkcja foto i wideo, montaż, moderacja, prowadzenie kampanii, budżet reklamowy i SEO wymagają osobnej wyceny.",
    points: ["4 materiały łącznie w miesiącu, na bazie istniejących zdjęć i filmów.", "Publikacja na maksymalnie 2 profilach i jedna zbiorcza runda poprawek.", "Do 1 godziny aktualizacji strony internetowej.", "Miesięczne podsumowanie i spotkanie do 30 minut."],
    href: "/agencja-marketingu-internetowego", link: "Porównaj pełny zakres stałej obsługi",
  },
  {
    title: "Mniejszy zakres: opieka do 4 godzin miesięcznie",
    text: "Jeśli większość marketingu prowadzi Twój zespół, możemy ustalić ograniczoną opiekę za 2 000 zł netto miesięcznie. Limit obejmuje do 4 godzin pracy łącznie. Przed miesiącem wybieramy zadania, które zmieszczą się w tym czasie; rozszerzenia wyceniamy przed wykonaniem. Ten wariant nie zawiera automatycznie elementów pakietu podstawowego ani pełnego prowadzenia profili i reklam.",
  },
  {
    title: "Agencja marketingowa Warszawa — współpraca z FOTZ Studio",
    text: "Szukasz zespołu, który połączy komunikację marki z wykonaniem materiałów i uruchomieniem kampanii? FOTZ Studio zajmuje się marketingiem internetowym dla firm z Warszawy. Ustalamy, jak pozyskiwać nowych klientów i jakich materiałów potrzebują, aby wybrać Twoją ofertę. Pracujemy zdalnie: brief, akceptacje i omówienie wyników prowadzimy online. Nie prowadzimy publicznego biura ani oddziału w Warszawie. Adres rejestrowy to Poznańska 117/11, 62-023 Kamionki. Sesję zdjęciową, nagrania lub spotkanie w Warszawie uzgadniamy oddzielnie, wraz z terminem, miejscem i kosztem dojazdu. Możesz zlecić jeden projekt albo uzgodnioną stałą obsługę. Firmy z Mazowsza obsługujemy zdalnie — od briefu po raport wyników. Przed rozpoczęciem współpracy otrzymujesz listę prac, harmonogram i wycenę.",
    points: ["Dla firmy usługowej: oferta, dowody wykonanej pracy i prosty kontakt.", "Dla producenta: prezentacja produktu, wariantów i sposobu zamówienia.", "Dla sklepu: materiały produktowe, kampania i kontrola drogi do zakupu.", "Dla działu marketingu: wsparcie w wybranym zakresie, z jasnym podziałem zadań."],
  },
  {
    title: "Strategie marketingowe dla firm z Warszawy",
    text: "Zanim wybierzemy reklamę, poznajemy model sprzedaży: kto kupuje, co porównuje i dlaczego odkłada decyzję. Sprawdzamy dotychczasowe działania marketingowe, pytania z rozmów handlowych i dostępne materiały. Na tej podstawie powstaje plan dopasowany do potrzeb Twojej firmy. Wskazujemy priorytet, odbiorców, obietnicę oferty możliwą do udowodnienia oraz następny krok klienta. Dobra strategia pomaga także zrezygnować z zadań, na które zespół nie ma zasobów. Nie trzeba uruchamiać wszystkich kanałów jednocześnie.",
    points: ["Cel: np. zapytania o konkretną usługę, rekrutacja lub sprzedaż produktu.", "Odbiorca: sytuacja, potrzeba, kryteria wyboru i obszar obsługi.", "Dowód: realizacja, demonstracja, zdjęcie produktu lub opis procesu.", "Pomiar: co uznamy za wartościowy kontakt i kto oznaczy jego wynik."],
  },
  {
    title: "Marketing internetowy w Warszawie: zasięg dobieramy do oferty",
    text: "Adres firmy nie wyznacza automatycznie zasięgu reklamy. Lokalna usługa wymaga informacji o obszarze dojazdu, dostępności i sposobie rezerwacji. Dla sklepu internetowego ważniejsze mogą być warunki dostawy i przewaga produktu. Firma B2B z Warszawy może pozyskiwać odbiorców w całej Polsce. Dlatego nie opieramy planu na samej nazwie miasta. Uzgadniamy, gdzie realnie obsługujesz klientów i jakich zleceń możesz się podjąć. Komunikacja ma odpowiadać na ich pytania, a nie tylko powtarzać hasła reklamowe.",
  },
  {
    title: "SEO i kampanie Google Ads — widoczność w wyszukiwarce",
    text: "Hasła takie jak „SEO Warszawa” czy „SEM Warszawa” opisują dwa różne kanały: widoczność organiczną i płatną emisję w wyszukiwarce. Gdy odbiorcy aktywnie szukają rozwiązania w Google, warto rozważyć kampanie w wyszukiwarce i pozycjonowanie. Gdy produkt potrzebuje pokazania w użyciu, pomocne są zdjęcia, film i reklama w mediach społecznościowych. Content marketing wspiera porównanie ofert i wyjaśnia trudniejsze kwestie. Wybór zależy od popytu, konkurencji, budżetu i czasu potrzebnego na decyzję. Skuteczne kampanie wymagają spójnej oferty, materiałów i obsługi kontaktu. Proponujemy kolejność działań oraz sposób ich oceny. Sam wzrost ruchu na stronie nie wystarcza, jeśli przychodzą zapytania poza zakresem usługi.",
  },
  {
    title: "Spójna marka i materiały — agencja kreatywna",
    text: "Branding porządkuje to, jak firma przedstawia swoją ofertę: od języka i identyfikacji wizualnej po wygląd strony. Agencja kreatywna może projektować materiały, lecz przed produkcją potrzebuje jasnego celu i zasad marki. Z markami pracujemy na zatwierdzonych materiałach oraz uzgodnionym kierunku wizualnym. Jeśli potrzebna jest nowa identyfikacja, określamy osobny zakres usług i sposób akceptacji. Kompleksowe usługi mają sens wtedy, gdy ich elementy rozwiązują wspólny problem. Szeroki zakres sam w sobie nie zastępuje dobrej oferty i czytelnej informacji dla odbiorcy.",
  },
  {
    title: "Dobór kanałów i tworzenie treści — agencja social media",
    text: "Social media marketing wymaga regularności i pomysłu na to, co odbiorca ma zyskać. Media społecznościowe wybieramy według sposobu komunikacji z klientem. Instagram może pokazywać produkt w użyciu, LinkedIn wspierać komunikację ekspercką B2B, a TikTok wymagać odrębnego sposobu opowiadania. Nie przenosimy automatycznie jednego materiału do każdego kanału. Prowadzenie social media zaczynamy od dostępnych zasobów i tematów. Strategie marketingowe łączą treści z celem firmy; efektywny plan uwzględnia czas na akceptację, publikację i rozmowę z odbiorcami.",
  },
  {
    title: "Agencja SEO czy kompleksowa obsługa marketingu?",
    text: "Agencja SEO koncentruje się na widoczności w wyszukiwarce, agencja interaktywna na stronie i rozwiązaniach online, a agencja marketingu internetowego łączy działania z celem biznesowym. Nazwy częściowo się pokrywają, dlatego profesjonalna agencja powinna jasno opisać odpowiedzialność. Cele biznesowe przekładamy na kompleksowy zakres prac: optymalizacja witryny, działania SEO, kampanie reklamowe albo produkcja materiałów. Facebook Ads i Meta Ads mogą wspierać test oferty, lecz nie zastąpią jej dopracowania. Chcesz zwiększyć sprzedaż? Ustalmy także marżę, możliwości obsługi i to, jak będziesz liczyć zwrot z inwestycji. To pozwala rozmawiać o marketingu w kontekście firmy.",
  },
  {
    title: "Agencja reklamowa i marketingowa: kreacje, wdrożenie, pomiar",
    text: "Nazwa agencji nie mówi jeszcze, kto napisze ofertę, zrobi zdjęcia, opublikuje stronę i odpowie na zgłoszenie. Kompleksowe rozwiązania obejmujące stronę, kreacje i kampanię rozpisujemy na konkretne zadania. Przy kampanii określamy liczbę wariantów kreacji, formaty, kanały, stronę docelową i kryteria akceptacji. W projekcie WWW ustalamy strukturę, funkcje oraz materiały od firmy. Przy stałej obsłudze ustalamy rytm planowania i raportowania. Taki podział pozwala dołączyć nasz zespół do Twojego działu marketingu lub powierzyć nam uzgodniony proces od pomysłu po publikację.",
  },
  {
    title: "Portfolio: zobacz, co rzeczywiście przygotowaliśmy",
    text: "Przy wyborze agencji sprawdź nie tylko logo klienta, ale także wykonany zakres. Dla Dawid EDU przygotowaliśmy stronę oraz kampanię rekrutacyjną Meta Ads z kreacjami i ścieżką kontaktu. KLAGEM pokazuje inny typ projektu: stronę i konfigurator mebli 3D, w którym można poznać warianty produktu. W portfolio znajdziesz też fotografie i produkcje związane z Enea Stadionem. To przykłady pracy FOTZ Studio z różnych branż, a nie lista klientów z Warszawy ani obietnica takich samych rezultatów dla Twojej marki.",
    href: "/realizacje/dawid-edu", link: "Zobacz stronę i kampanię Dawid EDU",
  },
  {
    title: "Strona internetowa jako część procesu sprzedaży",
    text: "Kampania może zainteresować odbiorcę, ale dalsza decyzja zależy od tego, co zobaczy po kliknięciu. Porządkujemy nagłówek, zakres usługi, realizacje i przyciski kontaktowe. Sprawdzamy, czy formularz działa na telefonie i przekazuje kontekst zapytania. W bardziej złożonej ofercie przydatne są porównanie wariantów, odpowiedzi na pytania albo konfigurator. Zaczynamy od funkcji, która rozwiązuje realny problem. Nie proponujemy przebudowy całej witryny, jeśli wystarczy poprawić ważną podstronę i drogę do kontaktu.",
    href: "/realizacje/klagem", link: "KLAGEM — zobacz konfigurator 3D",
  },
  {
    title: "Porównanie cen agencji marketingowych: projekt czy abonament?",
    text: "Jednorazowy projekt i abonament miesięczny obejmują różny sposób pracy. Porównując propozycje najlepszych agencji marketingowych z Twojej listy, sprawdź zadania, terminy i wyłączenia. Koszt wynika z zakresu prac, liczby materiałów, kanałów i częstotliwości obsługi. Osobno wyceniamy przygotowanie strategii, produkcję, wdrożenia oraz prowadzenie kampanii. Budżet reklamowy płacony Google lub Meta jest oddzielną pozycją. W propozycji wskazujemy także poprawki, dojazdy, licencje i narzędzia, jeśli są potrzebne. Dzięki temu porównujesz konkretne usługi marketingowe, a nie samą nazwę pakietu. Zakres przyjmujemy do realizacji po akceptacji wyceny; rozszerzenia omawiamy przed wykonaniem dodatkowej pracy. Jeśli rozważasz mailing do własnej bazy, jego przygotowanie, narzędzia i warunki wysyłki wymagają osobnego uzgodnienia.",
    points: ["Prześlij adres strony oraz linki do profili marki.", "Opisz produkt lub usługę, odbiorców i oczekiwany rodzaj zapytań.", "Wskaż termin, orientacyjny budżet i dostępne zdjęcia lub filmy.", "Dodaj informację, co wykona Twój zespół, a czego oczekujesz od nas."],
  },
  {
    title: "Jak oceniamy skuteczność działań marketingowych?",
    text: "Raport powinien pomagać podjąć decyzję. Oddzielamy wykonane zadania od danych o emisji, wizytach i zapytaniach. Wspólnie ustalamy, które kontakty mają szansę zakończyć się współpracą i kto zapisuje ich status. Jeżeli korzystasz z CRM, zakres integracji i pomiaru uzgadniamy przed wdrożeniem. Kliknięcie w przycisk, wysłanie formularza i podpisana umowa to różne zdarzenia. Na podstawie danych możemy zmienić komunikat, materiały, stronę docelową albo kierowanie kampanii. Nie gwarantujemy liczby klientów ani pozycji w wynikach wyszukiwania.",
  },
];
const faqs = [
  { question: "Co obejmuje abonament za 3 000 zł netto?", answer: "4 materiały miesięcznie z istniejących zdjęć i filmów, publikację na maksymalnie 2 profilach, jedną zbiorczą rundę poprawek, do godziny aktualizacji strony oraz miesięczne podsumowanie i spotkanie do 30 minut. Nowa produkcja, montaż, moderacja, obsługa kampanii, budżet emisji i SEO są wyceniane osobno. Po poznaniu potrzeb potwierdzamy, czy ten zakres pasuje do Twojej firmy." },
  { question: "Czy FOTZ Studio ma biuro w Warszawie?", answer: "Nie prowadzimy publicznego biura ani oddziałów. Obsługujemy firmy zdalnie; adres rejestrowy to Poznańska 117/11, 62-023 Kamionki. Spotkanie, sesję zdjęciową lub nagrania w Warszawie ustalamy indywidualnie, wraz z miejscem, terminem i kosztem dojazdu." },
  { question: "Jak wybrać agencję marketingową dla firmy z Warszawy?", answer: "Porównaj rzeczywiste realizacje, zakres odpowiedzialności i sposób rozliczenia. Zapytaj, kto przygotowuje materiały, kto wdraża zmiany oraz jak oceniana jest jakość zapytań. Sprawdź, czy budżet emisji jest oddzielony od obsługi i czy zachowujesz dostęp do swoich kont." },
  { question: "Czy mogę zlecić tylko reklamę, zdjęcia albo stronę WWW?", answer: "Tak. Wybór między pojedynczym projektem a kompleksową obsługą zależy od Twoich zasobów i celu. Nie wymagamy pełnej obsługi wszystkich kanałów. Możemy przygotować konkretny projekt lub uzupełnić pracę Twojego zespołu. Zakres i materiały potrzebne do startu zapisujemy w propozycji." },
  { question: "Czy obsługujecie firmy B2B i sklepy internetowe?", answer: "Zakres dobieramy do modelu sprzedaży. W B2B ważne są argumenty dla osoby podejmującej decyzję, realizacje i kontakt z handlowcem. W sklepie analizujemy prezentację produktów, zakup i pomiar. Możliwość wykonania wymaganych integracji potwierdzamy przed wyceną." },
  { question: "Kiedy można ocenić efekty współpracy?", answer: "Harmonogram zależy od stanu materiałów, dostępów i zakresu wdrożeń. Termin publikacji nie jest terminem uzyskania sprzedaży. Przed startem określamy, jakie dane zbieramy i kiedy podejmujemy decyzję o dalszych działaniach; SEO zwykle wymaga dłuższej obserwacji niż test kreacji reklamowych." },
  { question: "Kto pozostaje właścicielem kont reklamowych?", answer: "Pracujemy na kontach klienta z uzgodnionymi uprawnieniami. Sposób przekazania plików, zakres licencji i dostęp do narzędzi ustalamy przed projektem. W briefie warto wskazać dotychczasowego administratora kont i strony." },
];

export default function AgencjaMarketingowaWarszawa() {
  return <>
    <SEOHead title="Agencja marketingowa Warszawa — SEO i social media | FOTZ" description="Agencja marketingowa i reklamowa dla firm z Warszawy. Kampania reklamowa, SEO, social media, strategie marketingowe online i budżet reklamowy. Poznaj FOTZ." canonical={`https://www.fotz-studio.pl${path}`} />
    <ServiceEditorial path={path} title="Agencja marketingowa dla firm z Warszawy" eyebrow="FOTZ Studio · współpraca zdalna" area="Warszawa"
      lead="Uporządkujmy regularną pracę nad Twoim marketingiem: treści, publikacje i aktualizacje strony. Wybierzemy zakres dopasowany do potrzeb firmy oraz sposób oceny zapytań. Kampanie i nową produkcję wyceniamy osobno."
      priceNote="Stała obsługa od 3 000 zł netto miesięcznie w określonym zakresie."
      enquiryVariant="retainer" contactLabel="Zapytaj o stałą obsługę"
      contactDescription="Prześlij adres strony i profili, opisz cel oraz dostępne zdjęcia lub filmy. Napisz, co realizuje Twój zespół. Sprawdzimy dopasowanie pakietu i zaproponujemy zakres współpracy."
      summary={["Ustalamy, jakie zlecenia chcesz pozyskiwać i co utrudnia kontakt.", "Dobieramy działania, własne materiały i harmonogram do budżetu.", "Przed startem otrzymujesz zakres, wycenę i podział odpowiedzialności."]}
      scopeTitle="Usługi marketingowe dopasowane do Twojego celu" scope={scope} sections={sections} faqs={faqs} workAfterScope />
  </>;
}
