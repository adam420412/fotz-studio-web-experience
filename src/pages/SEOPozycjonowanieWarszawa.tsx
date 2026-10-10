import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/seo/pozycjonowanie-warszawa",
  city: "Warszawa",
  cityGenitive: "Warszawy",
  title: "Pozycjonowanie Warszawa — audyt i plan SEO | FOTZ Studio",
  description: "SEO dla firm z Warszawy: audyt, rozwój ofert, wdrożenia i raportowanie zapytań. Poznaj sposób współpracy, wycenę i realizacje FOTZ Studio.",
  lead: "Pomagamy przełożyć ofertę firmy na strony, które odpowiadają na konkretne pytania klientów. Dla biznesu z Warszawy ustalamy priorytety SEO, zakres wdrożeń i sposób oceny kontaktów — z uwzględnieniem lokalnego lub ogólnopolskiego zasięgu.",
  hero: { image: "rppg", caption: "RPPG Group — projekt strony z portfolio FOTZ. Prezentacja organizacji i jej oferty na ekranie laptopa." },
  scope: [
    { title: "Audyt przed planem działań", text: "Sprawdzamy ważne adresy, indeksowanie, błędy techniczne i zapytania w Search Console. Oceniamy, które istniejące oferty wymagają poprawy oraz jakie dane pozwolą mierzyć punkt wyjścia.", href: "/seo/audyt", link: "Zobacz zakres audytu SEO" },
    { title: "Priorytety usług i odbiorców", text: "Ustalamy, kto podejmuje decyzję o zakupie, jak opisuje potrzebę i jakie informacje porównuje. Rozdzielamy zapytania o lokalną obsługę w Warszawie od tych dotyczących specjalizacji dostępnej w całej Polsce.", href: "/seo/pozycjonowanie", link: "Poznaj pozycjonowanie stron" },
    { title: "Treści potwierdzone przez firmę", text: "Rozwijamy opisy usług, proces współpracy, pytania i materiały z realizacji. Przy treściach wymagających wiedzy specjalistycznej ustalamy osobę odpowiedzialną za ich sprawdzenie przed publikacją.", href: "/content-marketing/strategia", link: "Sprawdź strategię treści" },
    { title: "Wdrożenie i kontrola jakości", text: "Porządkujemy metadane, strukturę, linki oraz wskazane problemy techniczne. Uzgadniamy współpracę z programistą, termin publikacji i sprawdzenie zmienionych adresów na komputerze oraz telefonie.", href: "/seo/techniczne", link: "Zobacz techniczne SEO" },
    { title: "Rzeczywiste punkty obsługi", text: "Jeśli klient odwiedza placówkę, sprawdzamy informacje o adresie, godzinach i zakresie usług. Profil Firmy w Google uwzględniamy po sprawdzeniu kwalifikowalności, a poszczególne punkty opisujemy zgodnie z ich działalnością.", href: "/uslugi/pozycjonowanie-lokalne", link: "Poznaj zakres lokalnego SEO" },
    { title: "Raport przydatny w sprzedaży", text: "Oddzielamy wyświetlenia, kliknięcia, kontakty i dalsze etapy rozmowy. Jeżeli firma rejestruje źródło oraz jakość zapytań, wykorzystujemy te dane do oceny wybranych ofert i ustalenia kolejnych prac.", href: "/kontakt", link: "Omów cele i raportowanie" },
  ],
  examplesTitle: "Jaki rodzaj zapytań jest ważny dla firmy?",
  examplesIntro: "Przykładowe scenariusze pokazują, jak zmienia się zakres SEO zależnie od sposobu obsługi klienta. Nie przypisujemy im wyników ani relacji z konkretnymi firmami.",
  examples: [
    { title: "Usługa specjalistyczna", text: "Opisujemy problem, zakres pomocy, etapy i informacje potrzebne do pierwszej rozmowy. Treść sprawdza wskazana osoba z firmy, a przykłady i realizacje pochodzą z materiałów dopuszczonych do publikacji.", measure: "kontakty pasujące do specjalizacji i możliwość przejścia do konkretnej rozmowy." },
    { title: "Kilka rzeczywistych placówek", text: "Porządkujemy informacje o punktach, ich godzinach, dostępnych usługach i osobach kontaktowych. Każda podstrona pomaga wybrać miejsce obsługi, zamiast powtarzać opis całej firmy.", measure: "zapytania przypisane do właściwej placówki oraz poprawność kontaktów i rezerwacji." },
    { title: "Oferta B2B na całą Polskę", text: "Rozwijamy opisy rozwiązań, zastosowań i warunków współpracy. Warszawa może być siedzibą firmy, ale zakres tematów wynika z potrzeb odbiorców, niezależnie od ich lokalizacji.", measure: "zapytania od odpowiednich odbiorców i ich dalszy przebieg w procesie sprzedaży." },
  ],
  planning: [
    { title: "Cel i dane do briefu", text: "Prześlij stronę, kluczowe usługi, obszar działania i oczekiwany cel. Wspólnie określimy dostępne dane, ograniczenia witryny i zespół potrzebny do wdrożenia. Wybieramy priorytety, które można opisać, wykonać i później ocenić." },
    { title: "Oferta z podziałem odpowiedzialności", text: "Wycenę opieramy na audycie, liczbie rozwijanych ofert, pracach technicznych i materiałach. Wskazujemy, co przygotowuje FOTZ, co dostarcza firma i kto zatwierdza treści. Koszty dodatkowe oraz harmonogram uzgadniamy przed rozpoczęciem." },
    { title: "Stały punkt kontroli", text: "Raport zawiera wykonane zmiany, wyniki najważniejszych stron i kolejne priorytety. Widoczność i kliknięcia zestawiamy z dostępnymi danymi o zapytaniach. Ocena jakości kontaktów wymaga współpracy z osobą odpowiedzialną za sprzedaż." },
  ],
  faqs: [
    { question: "Ile kosztuje pozycjonowanie strony w Warszawie?", answer: "Wycenę przygotowujemy po poznaniu strony, usług, obszaru działania i potrzebnych wdrożeń. Określamy analizę, treści, pracę techniczną, pomiar oraz koszty dodatkowe. Sama lokalizacja firmy nie wystarcza do wyznaczenia ceny; ważny jest konkretny zakres prac." },
    { question: "Czy FOTZ ma oddział w Warszawie?", answer: "Nasz zespół pracuje z Poznania. Firmy z Warszawy obsługujemy zdalnie, z ustalonym kontaktem, obiegiem materiałów i akceptacją wdrożeń. Przed rozpoczęciem ustalamy osoby odpowiedzialne za projekt po obu stronach." },
    { question: "Czy można zamówić sam audyt albo wdrożenie zaleceń?", answer: "Tak. Możemy uzgodnić audyt z priorytetami, wdrożenie wskazanych poprawek albo regularną pracę nad ofertą. Jeśli masz wcześniejszy audyt, najpierw sprawdzamy jego aktualność i zakres. Wycena określa również udział Twojego zespołu oraz sposób odbioru zmian." },
    { question: "Czy potrzebuję osobnej podstrony dla każdej dzielnicy Warszawy?", answer: "Nie ma takiego ogólnego wymogu. Treść powinna wynikać z rzeczywistych placówek, usług lub różnic w obsłudze. Strony z podmienioną nazwą dzielnicy nie wnoszą tych informacji. Najpierw sprawdzamy potrzeby odbiorców i obecną strukturę witryny." },
    { question: "Kto zatwierdza specjalistyczne treści?", answer: "Przed przygotowaniem materiałów wskazujemy osobę z firmy, która potwierdza fakty, zakres usługi oraz informacje możliwe do publikacji. FOTZ opracowuje strukturę i formę treści, a uzgodnione etapy akceptacji pozwalają połączyć czytelność z wiedzą zespołu." },
    { question: "Jak raportujecie efekty i czy obiecujecie TOP 10?", answer: "Pokazujemy wykonane prace, wyświetlenia i kliknięcia w Search Console oraz dostępne dane o kontaktach. Pozycje, zapytania i sprzedaż to osobne wskaźniki. Nie gwarantujemy TOP 10 ani liczby klientów; termin oceny danych ustalamy po diagnozie i zaplanowaniu wdrożeń." },
  ],
};

export default function SEOPozycjonowanieWarszawa() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
