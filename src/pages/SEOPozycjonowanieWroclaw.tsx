import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/seo/pozycjonowanie-wroclaw",
  city: "Wrocław",
  cityGenitive: "Wrocławia",
  title: "Pozycjonowanie Wrocław — zakres i wycena SEO | FOTZ Studio",
  description: "SEO dla firm z Wrocławia: audyt, poprawki witryny, treści i pomiar zapytań. Sprawdź, od czego zależy cena pozycjonowania i jak wygląda współpraca z FOTZ.",
  lead: "Zaczynamy od sprawdzenia obecnej strony i usług, które chcesz rozwijać. Dla firmy z Wrocławia układamy plan pozycjonowania z konkretnymi zadaniami, wyceną i odpowiedzialnością za wdrożenie — od audytu po ocenę zapytań z Google.",
  hero: { image: "klagem", caption: "Klagem — projekt strony z portfolio FOTZ. Czytelny układ oferty i wizualna prezentacja marki." },
  scope: [
    { title: "Audyt jako punkt wyjścia", text: "Sprawdzamy indeksowanie ważnych ofert, przekierowania, wersję mobilną i dane Search Console. Wyniki przekładamy na listę problemów z priorytetem, proponowanym rozwiązaniem i sposobem sprawdzenia poprawki.", href: "/seo/audyt", link: "Poznaj zakres audytu" },
    { title: "Wybór usług do rozwoju", text: "Ustalamy, które zapytania pasują do oferty i obszaru obsługi. Porównujemy istniejące podstrony, aby rozwijać właściwą treść i nie tworzyć kilku adresów odpowiadających na to samo pytanie.", href: "/seo/pozycjonowanie", link: "Zobacz ofertę pozycjonowania" },
    { title: "Poprawki i odbiór wdrożeń", text: "Porządkujemy tytuły, nagłówki, linkowanie i wskazane problemy techniczne. Przed rozpoczęciem ustalamy dostęp do CMS, udział programisty oraz to, kto sprawdza działanie strony po publikacji.", href: "/seo/techniczne", link: "Sprawdź techniczne SEO" },
    { title: "Treść potrzebna do wyceny", text: "Opisujemy zakres usługi, etapy, dane wejściowe i czynniki wpływające na koszt. Wykorzystujemy rzeczywiste realizacje firmy oraz odpowiedzi zespołu na pytania zadawane przed zakupem.", href: "/content-marketing/strategia", link: "Zaplanuj treści oferty" },
    { title: "Lokalny obszar działania", text: "Dla firmy obsługującej Wrocław ustalamy, czy klienci przychodzą do punktu, czy usługa odbywa się z dojazdem. Profil Firmy w Google uwzględniamy po sprawdzeniu kwalifikowalności i prawdziwych danych działalności.", href: "/uslugi/pozycjonowanie-lokalne", link: "Poznaj lokalne SEO" },
    { title: "Pomiar kontaktów", text: "Dobieramy pomiar do formularza, telefonu i procesu sprzedaży. Ustalamy, które dane są dostępne i jak odróżnić kliknięcie kontaktu od przyjętego zapytania oraz dalszej rozmowy handlowej.", href: "/kontakt", link: "Omów cele pozycjonowania" },
  ],
  examplesTitle: "Naprawa strony czy regularny rozwój?",
  examplesIntro: "Firmy z Wrocławia mogą zaczynać z różnego miejsca. Te przykładowe sytuacje pomagają ustalić zakres; nie opisują wyników konkretnych klientów.",
  examples: [
    { title: "Strona działa, ale ofertę trudno znaleźć", text: "Sprawdzamy, czy Google widzi właściwe adresy i czy opisy odpowiadają na pytania o usługę. Najpierw planujemy poprawki konkretnych podstron oraz ich połączenie z pozostałą częścią witryny.", measure: "widoczność wybranych ofert, kliknięcia i zapytania dotyczące tych usług." },
    { title: "Planowana przebudowa witryny", text: "Przed zmianą zapisujemy ważne adresy i dostępne wyniki. Ustalamy, które treści zachować, jak przypisać przekierowania i co skontrolować po uruchomieniu nowej wersji.", measure: "dostępność docelowych stron, poprawność przekierowań oraz zmiany ruchu po migracji." },
    { title: "Nowa specjalizacja w ofercie", text: "Rozwijamy stronę usługi wokół odbiorcy, problemu, przebiegu współpracy i materiałów potwierdzających kompetencje. Lokalny zasięg opisujemy zgodnie z rzeczywistą dostępnością firmy.", measure: "zapytania o nową usługę i ich zgodność z zakresem, który firma może obsłużyć." },
  ],
  planning: [
    { title: "Cena wynika z potrzebnych prac", text: "Przed wyceną sprawdzamy wielkość witryny, stan techniczny, liczbę ofert i materiały. Jednorazowy audyt, wdrożenie poprawek oraz stały rozwój treści mogą być osobnymi etapami. Kosztów nie ustalamy wyłącznie na podstawie liczby fraz." },
    { title: "Porównywalny zakres w ofercie", text: "Rozpisujemy zadania, materiały do przygotowania, udział programisty, pomiar i częstotliwość omówień. Wskazujemy również prace poza zakresem oraz koszty zewnętrzne wymagające uzgodnienia. Dzięki temu wiadomo, co obejmuje wycena." },
    { title: "Odbiór prac i przegląd danych", text: "Po publikacji sprawdzamy działanie zmienionych stron. W ustalonym terminie zestawiamy wykonane zadania z danymi Search Console i dostępnymi informacjami o zapytaniach. Czas wykonania prac oraz czas reakcji wyszukiwarki traktujemy osobno." },
  ],
  faqs: [
    { question: "Ile kosztuje pozycjonowanie strony we Wrocławiu?", answer: "Cena zależy od stanu witryny, liczby rozwijanych usług, potrzebnych wdrożeń i treści. Prześlij adres strony, cel i obszar obsługi. Przygotujemy zakres z podziałem na analizę, poprawki, materiały i pomiar, wraz z informacją o kosztach dodatkowych." },
    { question: "Co powinien zawierać cennik lub oferta SEO?", answer: "Przede wszystkim opis zadań: co jest analizowane, kto wdraża zmiany, jakie treści powstaną i jak będą odbierane. Warto porównać także harmonogram, raportowanie, koszty dodatkowe oraz zasady współpracy. Sama miesięczna kwota lub liczba fraz nie pokazuje, czy oferty obejmują tę samą pracę." },
    { question: "Czy FOTZ ma biuro we Wrocławiu?", answer: "Nasz zespół pracuje w Poznaniu. Firmy z Wrocławia obsługujemy zdalnie: ustalamy brief, dostęp do potrzebnych danych, obieg materiałów i sposób akceptacji zmian. Zakres oraz harmonogram prac potwierdzamy przed rozpoczęciem." },
    { question: "Czy można zacząć od samego audytu?", answer: "Tak. Audyt może być osobnym etapem z listą priorytetów i zaleceń. Ustalamy, czy kolejnym krokiem będzie wdrożenie przez FOTZ, czy przekazanie zadań Twojemu programiście. Sprawdzenie poprawek po publikacji określamy w zakresie współpracy." },
    { question: "Czy przebudowa strony może wpłynąć na SEO?", answer: "Zmiana adresów, treści lub sposobu działania witryny może zmienić jej widoczność. Dlatego przed przebudową zapisujemy ważne strony, planujemy przekierowania i zachowanie potrzebnych treści. Po wdrożeniu sprawdzamy nowe adresy oraz dane Search Console." },
    { question: "Kiedy można ocenić efekty i czy gwarantujecie pozycje?", answer: "Termin przeglądu ustalamy po diagnozie strony i zaplanowaniu prac. Wpływ zmian zależy także od konkurencji i ponownego przetworzenia witryny przez Google. Nie gwarantujemy TOP 10 ani liczby klientów; osobno raportujemy wykonane zadania, widoczność, kliknięcia i dostępne dane o zapytaniach." },
  ],
};

export default function SEOPozycjonowanieWroclaw() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
