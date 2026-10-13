import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const path = "/agencja-marketingowa-opole";
const scope = [
  { title: "Strategia i plan działań", text: "Porządkujemy ofertę, odbiorców i priorytety. Wybieramy działania, które zespół może wykonać i ocenić: od materiałów sprzedażowych po kampanię prowadzącą do zapytania.", href: "/content-marketing/strategia", link: "Strategia treści dla firmy" },
  { title: "Kampanie reklamowe", text: "Przygotowujemy komunikaty, kreacje i emisję. Osobno określamy wynagrodzenie za obsługę, koszt materiałów oraz budżet reklamowy płacony platformie.", href: "/performance-marketing/meta-ads", link: "Kampanie Meta Ads" },
  { title: "Social media marketing", text: "Planujemy publikacje, zdjęcia, rolki i opisy. Zakres prowadzenia profili, moderacji oraz odpowiedzi na wiadomości ustalamy przed startem.", href: "/social-media/obsluga", link: "Obsługa social media" },
  { title: "Tworzenie stron", text: "Projektujemy drogę od oferty do kontaktu. Łączymy opis usług, fotografie, realizacje i formularz; zakres stron i sklepów internetowych wyceniamy według funkcji.", href: "/uslugi/strony-internetowe/opole", link: "Strony internetowe dla firm z Opola" },
  { title: "SEO i pozycjonowanie stron", text: "Sprawdzamy indeksowanie, treści i linkowanie. Plan poprawek opieramy na stanie witryny oraz danych, a efekty odnosimy do wejść i jakości zapytań.", href: "/uslugi/pozycjonowanie/opole", link: "Poznaj zakres SEO dla Opola" },
  { title: "Zdjęcia i filmy reklamowe", text: "Pokazujemy produkt, zespół lub proces w materiałach do strony i kampanii. Scenariusz, miejsce nagrań, dojazd, montaż i liczbę wersji potwierdzamy w wycenie.", href: "/uslugi/produkcja-video", link: "Obejrzyj produkcje FOTZ Studio" },
];
const sections = [
  {
    title: "Agencja marketingowa dla firm z Opola — jak pracujemy?",
    text: "FOTZ Studio ma siedzibę w Poznaniu. Obsługę firmy z Opola możemy prowadzić zdalnie: brief, akceptacje i omówienie raportów odbywają się online. Produkcję zdjęć lub filmu na terenie Opola uzgadniamy osobno, wraz z terminem i kosztem dojazdu. Nie potrzebujesz pełnego pakietu usług, aby zacząć. Najpierw wskazujemy problem: brak czytelnej oferty, słabe materiały, niespójna reklama lub trudny kontakt. Następnie wybieramy zakres prac i osobę odpowiedzialną za odbiór.",
    points: ["Brief: adres strony, oferta, odbiorcy i obszar sprzedaży — rynek opolski lub szerszy.", "Plan: priorytety, materiały, terminy oraz sposób akceptacji.", "Realizacja: uzgodnione wdrożenia i kontrola drogi do kontaktu.", "Ocena: raport wykonanej pracy, dane i decyzje o kolejnych krokach."],
  },
  {
    title: "Agencja reklamowa — obsługa lokalna i ogólnopolska",
    text: "Dobór komunikatu zależy od zasięgu obsługi. Lokalny klient potrzebuje jasnej informacji o dojeździe, terminie lub miejscu wykonania usługi. Firma sprzedająca w całej Polsce powinna wyjaśniać także dostawę, warianty produktu i obsługę po zakupie. Usługi reklamowe dopasowujemy do tego procesu. LinkedIn może wspierać komunikację B2B, Instagram prezentację realizacji, a strona szczegółowe porównanie oferty. Kanały wybieramy na podstawie potrzeb odbiorców i zasobów firmy, bez obowiązku prowadzenia każdego profilu.",
  },
  {
    title: "Portfolio: zobacz materiały i zakres pracy",
    text: "Wybierając spośród agencji reklamowych w Opolu lub zespołów pracujących zdalnie, sprawdź, co firma rzeczywiście przygotowała. W naszym portfolio możesz obejrzeć spot CUPRA × Enea Stadion, kampanię rekrutacyjną Dawid EDU oraz konfigurator produktów 3D KLAGEM. Każdy przykład pokazuje inny zakres: produkcję wizualną, połączenie reklamy ze stroną albo narzędzie pomagające poznać warianty produktu. Nie przedstawiamy tych projektów jako realizacji dla klientów z Opola ani jako gwarancji wyniku Twojej kampanii reklamowej.",
    href: "/realizacje", link: "Przejdź do realizacji FOTZ Studio",
  },
  {
    title: "Marketing i kampanie Ads: wycena oraz zakres prac",
    text: "Wycena wynika z listy zadań. Inny zakres ma poprawa jednej oferty, inny przygotowanie zdjęć, prowadzenie profilu i stałej kampanii. W propozycji zapisujemy liczbę materiałów, kanały, poprawki, terminy oraz podział pracy. Budżet emisji nie jest wynagrodzeniem agencji. Konta reklamowe pozostają po stronie klienta, a my uzgadniamy potrzebne dostępy. Jeśli projekt obejmuje druk lub kampanie reklamowe offline, najpierw potwierdzamy wykonawcę, specyfikację i koszty — nie są domyślną częścią obsługi internetowej.",
    points: ["Prześlij link do strony i opisz, jakie zapytania chcesz pozyskiwać.", "Dodaj posiadane zdjęcia, filmy i informacje o dotychczasowych działaniach.", "Wskaż orientacyjny budżet, termin oraz osobę akceptującą materiały."],
  },
  {
    title: "Od reklamy do zapytania: co sprawdzamy?",
    text: "Reklama powinna prowadzić do zgodnej z nią oferty. Sprawdzamy czytelność strony na telefonie, przycisk kontaktu oraz przekazywanie formularza w uzgodnionym zakresie. Raport oddziela wyświetlenia, kliknięcia i zgłoszenia od potwierdzonej sprzedaży. Z firmą ustalamy, kto odpowiada na zapytania i jak oznacza ich jakość. Taka informacja pomaga ocenić, czy poprawić komunikat, stronę, kierowanie kampanii czy obsługę kontaktów. Nie deklarujemy liczby klientów ani pozycji w Google przed wykonaniem pracy.",
  },
];
const faqs = [
  { question: "Jak porównać oferty agencji reklamowych dostępnych w Opolu?", answer: "Ranking najlepszych firm reklamowych może pomóc zebrać kandydatów do porównania. Przed wyborem sprawdź jednak portfolio i zakres oferty: na rynku usług reklamowych podobne nazwy pakietów mogą oznaczać różne zadania. Porównaj liczbę materiałów, odpowiedzialność za wdrożenie, dostęp do kont, budżet emisji i sposób raportowania. Poproś o pokazanie realizacji oraz wyjaśnienie roli agencji w projekcie. W naszej propozycji te ustalenia zapisujemy przed startem, aby można było świadomie wybrać potrzebne zadania." },
  { question: "Czy FOTZ Studio ma biuro w Opolu?", answer: "Nasza siedziba znajduje się w Poznaniu. Współpracę z firmami z Opola prowadzimy zdalnie, a spotkanie lub nagrania na miejscu wymagają uzgodnienia. Jeśli potrzebna jest firma z siedzibą w Opolu i stała obsługa w Twoim biurze, warto uwzględnić to już w briefie." },
  { question: "Agencja reklamowa czy marketingowa — jakiego zakresu potrzebuję?", answer: "Nazwa nie zastępuje zakresu. Firma reklamowa może przygotowywać kreacje i emisję, a agencja marketingowa łączyć je ze strategią, treścią, stroną i pomiarem. W FOTZ wybierasz konkretne zadania. Możemy rozpocząć od jednej kampanii lub materiału i dopiero po ocenie ustalić dalszą współpracę." },
  { question: "Czy można zlecić tylko social media albo SEO?", answer: "Tak. Poszczególne usługi mają osobne zakresy. Przed startem ustalamy, kto dostarcza materiały, wdraża zmiany, akceptuje publikacje i odbiera zgłoszenia. Dzięki temu współpraca może uzupełniać pracę Twojego zespołu." },
  { question: "Czy poprawicie istniejącą stronę zamiast budować nową?", answer: "Najpierw sprawdzamy obecne rozwiązanie i problem. Jeżeli wystarczy uporządkować ofertę, materiały, linki i formularz, proponujemy taki zakres. Przebudowę stron i sklepów rozważamy wtedy, gdy obecna technologia lub układ utrudniają osiągnięcie celu." },
];

export default function AgencjaMarketingowaOpole() {
  return <>
    <SEOHead title="Agencja marketingowa Opole | FOTZ — agencja reklamowa" description="Agencja FOTZ: reklama, social media, SEO i strony dla firm z Opola. Zobacz portfolio, ustal zakres i wycenę. Współpraca zdalna z zespołem w Poznaniu." canonical={`https://www.fotz-studio.pl${path}`} />
    <ServiceEditorial path={path} title="Agencja marketingowa Opole — reklama dla Twojej firmy" eyebrow="FOTZ Studio · współpraca zdalna dla firm z Opola" area="Opole"
      lead="Łączymy strategię, materiały wizualne, kampanie i stronę w drogę do kontaktu. Pomagamy wybrać działania do celu i budżetu Twojej firmy. Zespół FOTZ Studio pracuje z Poznania; zakres współpracy i ewentualnych nagrań w Opolu ustalamy przed startem."
      summary={["Pokaż nam ofertę, stronę i dotychczasowe działania.", "Wybierzemy priorytety, materiały i sposób oceny zapytań.", "Otrzymasz zakres prac, wycenę i harmonogram do akceptacji."]}
      scopeTitle="Opole: reklama, social media i SEO dla Twojej firmy" scope={scope} sections={sections} faqs={faqs} workAfterScope />
  </>;
}
