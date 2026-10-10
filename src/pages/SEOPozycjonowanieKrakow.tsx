import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/seo/pozycjonowanie-krakow",
  city: "Kraków",
  cityGenitive: "Krakowa",
  title: "Pozycjonowanie Kraków — audyt i obsługa SEO | FOTZ Studio",
  description: "Pozycjonowanie stron dla firm z Krakowa: audyt, oferta, lokalne SEO i pomiar zapytań. Poznaj zakres, zasady wyceny oraz projekty FOTZ Studio.",
  lead: "Łączymy techniczne SEO z czytelną ofertą i drogą do kontaktu. Dla firmy z Krakowa planujemy działania wokół usług, o które pytają klienci — od poprawy istniejących podstron po ocenę zapytań i rezerwacji.",
  hero: { image: "bar", caption: "Gierky Activity Bar — fotografia wnętrza z portfolio FOTZ. Autentyczne zdjęcia pokazują charakter miejsca jeszcze przed wizytą." },
  scope: [
    { title: "Kontrola istniejącej witryny", text: "Analizujemy widoczność adresów w Search Console, przekierowania i możliwość odczytania treści. Sprawdzamy też, czy mobilny użytkownik może poznać ofertę i przejść do kontaktu.", href: "/seo/audyt", link: "Sprawdź, co obejmuje audyt" },
    { title: "Oferta zgodna z pytaniem", text: "Przypisujemy zapytania do usług, cennika, informacji o miejscu i poradników. Wybieramy stronę, która najlepiej odpowiada potrzebie odbiorcy, zamiast powielać podobne podstrony.", href: "/seo/pozycjonowanie", link: "Zobacz usługę pozycjonowania" },
    { title: "Opisy, zdjęcia i dowody pracy", text: "Pomagamy opisać przebieg usługi, warunki rezerwacji i pytania przed zakupem. Uzupełniamy treści rzeczywistymi zdjęciami oraz realizacjami, z podpisami i plikami dopasowanymi do urządzenia.", href: "/content-marketing/strategia", link: "Przejdź do strategii treści" },
    { title: "Widoczność lokalnego punktu", text: "Dla kwalifikującej się firmy sprawdzamy Profil Firmy w Google: kategorię, adres, kontakt i godziny. Uzgadniamy aktualizacje ze stroną, aby klient otrzymał spójne informacje.", href: "/uslugi/pozycjonowanie-lokalne", link: "Zobacz lokalne SEO" },
    { title: "Poprawki techniczne", text: "Porządkujemy strukturę strony, linkowanie, metadane i wskazane problemy z wydajnością. Przy zmianie witryny planujemy przekierowania oraz sprawdzenie ważnych adresów po publikacji.", href: "/seo/techniczne", link: "Poznaj prace techniczne" },
    { title: "Kontakt i rezerwacja", text: "Ustalamy, które działania można mierzyć na stronie i w zewnętrznym systemie rezerwacji. Odróżniamy kliknięcie przycisku od przyjętego zapytania, potwierdzonego terminu lub sprzedaży.", href: "/kontakt", link: "Omów ścieżkę klienta" },
  ],
  examplesTitle: "Od wyszukania usługi do zapytania.",
  examplesIntro: "Inaczej układamy stronę lokalnego punktu, inaczej ofertę na rezerwacje grupowe czy sprzedaż poza Krakowem. To przykładowe scenariusze do rozmowy o zakresie, a nie deklaracje wyników klientów.",
  examples: [
    { title: "Usługa na umówiony termin", text: "Pokazujemy, dla kogo jest usługa, co obejmuje, gdzie się odbywa i jak ustalić termin. Na telefonie sprawdzamy drogę od opisu do formularza lub systemu rezerwacji oraz dostępność informacji o cenie.", measure: "przyjęte zapytania lub potwierdzone rezerwacje, jeśli system udostępnia takie dane." },
    { title: "Miejsce dla grup i wydarzeń", text: "Porządkujemy ofertę dla organizatora: przeznaczenie przestrzeni, dostępne warianty, zdjęcia i informacje potrzebne do wyceny. Zapytania o zwykłą wizytę i wydarzenie mogą wymagać różnych stron oferty.", measure: "zapytania z terminem, liczbą uczestników i rodzajem wydarzenia." },
    { title: "Firma z ofertą poza Krakowem", text: "Jeśli miejsce siedziby nie ogranicza sprzedaży, rozwijamy opisy produktów, specjalizacji i zastosowań. Lokalne zapytania pozostają częścią planu, ale nie zastępują potrzeb odbiorców z innych regionów.", measure: "jakość zapytań dla wybranych usług oraz ich udział w rozmowach handlowych." },
  ],
  planning: [
    { title: "Ustalenie priorytetowej usługi", text: "Zaczynamy od oferty, którą chcesz rozwijać: odbiorcy, obszaru działania, dostępnych terminów i sposobu obsługi zapytań. Przeglądamy istniejące strony oraz dane, aby wybrać najważniejsze poprawki i uniknąć dublowania treści." },
    { title: "Zakres i cena przed startem", text: "Wycenę dzielimy na analizę, wdrożenia, treści i pomiar. Liczba ofert, potrzebne zdjęcia, wersje językowe czy połączenie z rezerwacjami mogą zmienić koszt. Przed rozpoczęciem wskazujemy elementy w cenie, koszty dodatkowe oraz sposób akceptacji materiałów." },
    { title: "Ocena efektów na danych", text: "Raport łączy listę zmian z widocznością i kliknięciami w Search Console oraz dostępnymi danymi o kontaktach. Przy ofercie sezonowej porównujemy odpowiednie okresy. Gdy rezerwacja kończy się poza witryną, ustalamy dostępny pomiar i jego ograniczenia." },
  ],
  faqs: [
    { question: "Ile kosztuje pozycjonowanie w Krakowie?", answer: "Wycenę przygotowujemy po poznaniu strony, oferty i celu. Zakres może obejmować jednorazowy audyt, naprawę techniczną lub bieżący rozwój treści i pomiaru. W propozycji rozpisujemy zadania, terminy odbioru, odpowiedzialność za wdrożenie oraz ewentualne koszty dodatkowe." },
    { question: "Czy macie lokalne biuro w Krakowie?", answer: "FOTZ Studio ma siedzibę w Poznaniu. Dla firm z Krakowa prowadzimy współpracę zdalną, z ustalonym kontaktem, obiegiem materiałów i akceptacją zmian. Nie przedstawiamy tej oferty jako biura w Krakowie." },
    { question: "Czym SEO strony różni się od widoczności w Mapach Google?", answer: "SEO strony dotyczy treści, struktury i technicznej dostępności witryny. Wyniki w Mapach wiążą się z Profilem Firmy w Google, trafnością, odległością i rozpoznawalnością. Te obszary mogą się uzupełniać, ale nie mierzymy ich jako jednego wyniku ani nie obiecujemy jednakowej pozycji w każdej części miasta." },
    { question: "Czy muszę tworzyć nową stronę, aby zacząć SEO?", answer: "Niekoniecznie. Najpierw sprawdzamy istniejącą stronę i możliwości jej edycji. Często zakres dotyczy poprawy oferty, nawigacji lub błędów technicznych. Przebudowę rozważamy wtedy, gdy obecne ograniczenia uniemożliwiają potrzebne zmiany; przedstawiamy wtedy konkretny powód i zakres." },
    { question: "Jak mierzycie rezerwacje z ruchu organicznego?", answer: "Zależy to od używanego systemu i dostępnych integracji. Wysłanie formularza, kliknięcie telefonu, przejście do rezerwacji i potwierdzenie terminu to różne działania. Przed wdrożeniem określamy, które możemy wiarygodnie rejestrować. Sama wizyta z Google nie potwierdza pozyskania klienta." },
    { question: "Ile czasu potrzeba na efekty pozycjonowania?", answer: "Termin zależy od stanu witryny, konkurencji, zakresu prac i przetworzenia zmian przez Google. Ustalamy harmonogram wdrożeń i termin przeglądu danych, ale nie gwarantujemy TOP 10 ani liczby rezerwacji. Pozycje, kliknięcia i zapytania obserwujemy osobno, z uwzględnieniem sezonowości." },
  ],
};

export default function SEOPozycjonowanieKrakow() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
