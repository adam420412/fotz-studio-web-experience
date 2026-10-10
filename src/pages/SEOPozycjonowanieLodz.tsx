import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/seo/pozycjonowanie-lodz",
  city: "Łódź",
  cityGenitive: "Łodzi",
  title: "Pozycjonowanie Łódź — SEO strony i oferty | FOTZ Studio",
  description: "Pozycjonowanie dla firm z Łodzi: audyt, struktura oferty, opisy usług i produktów oraz pomiar zapytań. Poznaj zakres SEO i sposób wyceny w FOTZ Studio.",
  lead: "Porządkujemy stronę tak, aby odbiorca znalazł właściwą usługę lub produkt i wiedział, jak zapytać o ofertę. Dla firmy z Łodzi planujemy SEO na podstawie istniejącej witryny, sposobu sprzedaży i danych o wyszukiwaniu.",
  hero: { image: "product", caption: "Fotografia produktowa z portfolio FOTZ — modułowe regały na tle studyjnym. Wyraźny kadr pomaga pokazać konstrukcję i warianty produktu." },
  scope: [
    { title: "Audyt ważnych adresów", text: "Sprawdzamy, które oferty są dostępne dla wyszukiwarki, jak działają przekierowania i czy podobne adresy nie powielają treści. Uwzględniamy strukturę usług, kategorii i produktów, jeśli są częścią strony.", href: "/seo/audyt", link: "Poznaj audyt strony" },
    { title: "Struktura oferty", text: "Układamy usługi lub asortyment według potrzeb klienta. Dobieramy nazwy kategorii, połączenia między stronami i miejsce dla pytań o zastosowanie, warianty oraz warunki zamówienia.", href: "/seo/pozycjonowanie", link: "Sprawdź zakres pozycjonowania" },
    { title: "Opisy i własne materiały", text: "Rozwijamy treści na podstawie informacji firmy: parametrów, przebiegu usługi, zdjęć i realizacji. Przy produktach wyjaśniamy różnice, które rzeczywiście pomagają w wyborze, zamiast powielać ten sam opis.", href: "/content-marketing/strategia", link: "Zaplanuj treści i materiały" },
    { title: "Technika serwisu lub sklepu", text: "Porządkujemy nagłówki, linkowanie i wskazane problemy z ładowaniem. Przy katalogu lub sklepie sprawdzamy również warianty adresów, filtrowanie i sposób dotarcia do najważniejszych kategorii.", href: "/seo/techniczne", link: "Zobacz techniczne SEO" },
    { title: "Lokalna obsługa klienta", text: "Jeśli firma ma punkt w Łodzi lub działa z dojazdem, opisujemy dostępność usługi i kontakt. Zakres Profilu Firmy w Google ustalamy po sprawdzeniu kwalifikowalności oraz faktycznych danych działalności.", href: "/uslugi/pozycjonowanie-lokalne", link: "Poznaj lokalne pozycjonowanie" },
    { title: "Pomiar odpowiedni do sprzedaży", text: "Dla usług oceniamy zapytania, dla katalogu — kontakty o produkt, a dla sklepu dostępne dane o zamówieniach. Wyświetlenia i kliknięcia w Search Console pozostają osobnymi wskaźnikami.", href: "/kontakt", link: "Omów sposób sprzedaży" },
  ],
  examplesTitle: "Usługa, katalog czy sklep?",
  examplesIntro: "Poniższe przykłady pokazują różne potrzeby firm z Łodzi. Zakres wybieramy według modelu działalności; scenariusze nie są raportem wyników klientów.",
  examples: [
    { title: "Firma usługowa", text: "Rozwijamy opis problemu klienta, zakres prac, przebieg realizacji i dane do wyceny. Łączymy ofertę z odpowiednimi realizacjami i pytaniami, które pojawiają się przed kontaktem.", measure: "zapytania o właściwe usługi oraz ich przydatność w dalszej rozmowie." },
    { title: "Producent z katalogiem", text: "Porządkujemy grupy produktów, parametry, zastosowania i materiały do pobrania. Formularz powinien pozwalać wskazać produkt lub wariant, aby zespół mógł przygotować konkretną odpowiedź.", measure: "zapytania o produkty i kompletność informacji potrzebnych do oferty." },
    { title: "Sklep z wieloma wariantami", text: "Sprawdzamy kategorie, podobne produkty, filtry i strony wariantów. Ustalamy priorytety według asortymentu, dostępności i możliwości przygotowania treści, a nie samej liczby adresów.", measure: "wejścia na ważne kategorie i zamówienia, jeśli analityka poprawnie je rejestruje." },
  ],
  planning: [
    { title: "Wybór części oferty", text: "Zbieramy adres strony, listę usług lub grup produktów, obszar sprzedaży i dostępne materiały. Wspólnie wybieramy zakres, który można opracować i utrzymywać. Przy rozbudowanym katalogu ustalamy kolejność kategorii oraz źródło danych produktowych." },
    { title: "Wycena analizy i wdrożenia", text: "Cena zależy od wielkości serwisu, stanu technicznego, liczby opracowywanych ofert i jakości materiałów. Audyt, poprawki, teksty oraz zdjęcia opisujemy jako konkretne zadania. Uzgadniamy koszty dodatkowe i osobę odpowiedzialną za zmiany w systemie." },
    { title: "Odbiór i aktualność danych", text: "Po wdrożeniu sprawdzamy treści, linki oraz ścieżkę do kontaktu lub zakupu. Raportujemy wykonane prace i dostępne wyniki. Firma wskazuje zmiany asortymentu, parametrów oraz oferty, aby informacje na stronie pozostawały aktualne." },
  ],
  faqs: [
    { question: "Ile kosztuje pozycjonowanie strony w Łodzi?", answer: "Koszt ustalamy po poznaniu witryny i zakresu oferty. Znaczenie mają potrzebne poprawki, liczba usług lub kategorii, materiały oraz sposób pomiaru. Wycenę rozpisujemy na zadania, terminy i odpowiedzialność za wdrożenie, z informacją o kosztach dodatkowych." },
    { question: "Czy FOTZ ma siedzibę w Łodzi?", answer: "FOTZ Studio działa z Poznania. Firmy z Łodzi obsługujemy zdalnie, ustalając osobę kontaktową, sposób przekazania materiałów i akceptację zmian. Dostęp do systemu oraz harmonogram prac uzgadniamy po określeniu zakresu." },
    { question: "Czy SEO dla sklepu różni się od pozycjonowania usług?", answer: "Tak, zakres analizy zależy od budowy strony. W sklepie trzeba uwzględnić m.in. kategorie, produkty, warianty, filtrowanie i sposób mierzenia zamówień. Dla usług kluczowe są opisy zakresu, realizacje, pytania klientów oraz droga do zapytania. Plan dopasowujemy do rzeczywistego serwisu." },
    { question: "Czy można wykorzystać istniejące opisy i zdjęcia?", answer: "Tak. Najpierw sprawdzamy ich aktualność, kompletność i przydatność dla odbiorcy. Ustalamy, które materiały zachować, które uzupełnić, a które przygotować ponownie. Przy produktach szczególnie ważne są prawdziwe parametry, różnice między wariantami i czytelne zdjęcia." },
    { question: "Czy każda odmiana produktu potrzebuje osobnej strony?", answer: "To zależy od różnic między produktami, pytań klientów i możliwości systemu. Nie każdy filtr lub wariant musi być osobnym adresem przeznaczonym do indeksowania. Decyzję poprzedzamy analizą treści, struktury oraz zachowania użytkownika, aby nie powielać stron bez potrzebnych informacji." },
    { question: "Jak oceniacie efekty i czy gwarantujecie wzrost sprzedaży?", answer: "Porównujemy widoczność i kliknięcia z dostępnymi danymi o kontaktach lub zamówieniach. Sposób pomiaru i termin przeglądu ustalamy na początku. Nie gwarantujemy pozycji ani wzrostu sprzedaży; na wynik wpływają także oferta, dostępność, obsługa klienta i konkurencja." },
  ],
};

export default function SEOPozycjonowanieLodz() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
