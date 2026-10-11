import type { SalesOfferProps } from '@/components/SalesOffer';
export const ecommerceOffer: SalesOfferProps = {
  path: '/uslugi/strony-internetowe/ecommerce', service: 'web',
  title: 'Tworzenie sklepów i konfiguratorów 3D — oferta | FOTZ Studio',
  description: 'Sklep internetowy, katalog produktów lub konfigurator 3D. Zobacz realizację KLAGEM, zakres wdrożenia, integracje i sposób wyceny projektu w FOTZ Studio.',
  heading: 'Od wyboru produktu do konkretnego zamówienia.', eyebrow: 'Sklepy internetowe i konfiguratory 3D',
  lead: 'Projektujemy prezentację produktów i ścieżkę zakupu dopasowaną do Twojej firmy. Ustalamy, czy potrzebujesz sklepu z koszykiem, katalogu zbierającego zapytania czy konfiguratora wariantów produktu.',
  cta: 'Omów mój sklep lub konfigurator', hero: 'klagem', caption: 'KLAGEM — strona marki mebli modułowych z naszego portfolio.', configurator: true,
  evidence: [{title: 'KLAGEM — meble modułowe', text: 'Rzeczywisty przykład konfiguratora 3D: dobór modułów, wymiarów i kolorów, zapis projektu oraz orientacyjna wycena.', href: '/realizacje/klagem'}],
  options: [
    {title:'Sklep z koszykiem',text:'Sprzedajesz produkty o określonych wariantach i cenach.',detail:'Katalog, karta produktu, koszyk, płatności i dostawy. Integracje dobieramy do sposobu obsługi zamówień.',variant:'shop'},
    {title:'Konfigurator produktów 3D',text:'Klient sam wybiera układ, wymiary lub wykończenie.',detail:'Reguły produktu, modele, podgląd i wycena. Ustalamy, czy finałem jest zapytanie ofertowe, czy zakup.',variant:'configurator'},
    {title:'Przebudowa istniejącego sklepu',text:'Masz sklep i chcesz poprawić prezentację lub proces zakupu.',detail:'Sprawdzamy dane, karty produktów, wersję mobilną oraz ograniczenia obecnego systemu. Planujemy migrację i przekierowania.',variant:'redesign'},
  ],
  scope: [
    {title:'Katalog i warianty',text:'Porządkujemy kategorie, atrybuty, dostępność i materiały produktowe. Przy konfiguratorze spisujemy dozwolone połączenia elementów.'},
    {title:'Prezentacja produktu',text:'Projektujemy karty, zdjęcia, opisy i wybór wariantów. Modele 3D, fotografia i filmy są odrębnymi pozycjami, jeśli wymagają przygotowania.'},
    {title:'Płatności i dostawy',text:'Uzgadniamy operatorów, sposoby dostawy i scenariusze zamówień. Warunki oraz opłaty usług zewnętrznych wskazujemy osobno.'},
    {title:'Integracje z obsługą',text:'Ustalamy przepływ do magazynu, księgowości lub CRM. Potwierdzamy możliwości interfejsów oraz zakres danych przed wyceną.'},
    {title:'SEO i migracja',text:'Dbamy o adresy kategorii i produktów, treści, linkowanie oraz indeksowanie. Przy zmianie systemu zachowujemy ważne adresy lub planujemy przekierowania.'},
    {title:'Pomiar i odbiór',text:'Testujemy uzgodnioną ścieżkę od produktu do zamówienia lub zgłoszenia. Ustalamy pomiar zgodny z wyborem zgód użytkownika i potwierdzamy odbiór danych.'},
  ],
  pricing:'Wycenę przygotowujemy po poznaniu katalogu, wariantów, platformy i integracji. Konfigurator 3D wymaga dodatkowo oceny modeli i reguł produktu. Oddzielamy wdrożenie od hostingu, licencji, operatorów płatności oraz utrzymania. Pakiet One Page nie obejmuje sklepu ani konfiguratora.',
  pricingHref:'/cennik-stron-internetowych',pricingLabel:'Sprawdź zasady wyceny stron i funkcji dodatkowych',
  steps:[
    {title:'Mapa procesu',text:'Przesyłasz adres sklepu lub przykładowe produkty. Ustalamy warianty, sposób sprzedaży, materiały i osoby obsługujące zamówienia.'},
    {title:'Projekt i wdrożenie',text:'Akceptujemy kluczowe ekrany oraz funkcje. Budujemy uzgodniony zakres i sprawdzamy integracje na rzeczywistych scenariuszach.'},
    {title:'Testy i przekazanie',text:'Sprawdzamy telefon i komputer, zapisy zgłoszeń, powiadomienia oraz obsługę błędów. Przekazujemy instrukcję i ustalamy utrzymanie.'},
  ],
  faqs:[
    {question:'Czy każdy sklep potrzebuje konfiguratora 3D?',answer:'Nie. Przy prostym katalogu wystarczą czytelne zdjęcia i wybór wariantów. Konfigurator ma sens, gdy klient musi zrozumieć wiele układów lub połączeń, jak w systemie mebli modułowych KLAGEM.'},
    {question:'Czy konfigurator można połączyć z obecną stroną?',answer:'Sprawdzamy technologię strony, dostępne integracje i sposób wyceny. Możliwe rozwiązanie dobieramy po analizie; nie każda platforma pozwala na ten sam zakres zmian.'},
    {question:'Co przygotować do wyceny?',answer:'Przykłady produktów, warianty, reguły łączenia, cennik i opis obsługi zamówienia. Pomocne są modele 3D lub dokumentacja wymiarowa. Wskaż też systemy, z którymi strona ma się łączyć.'},
    {question:'Czy projekt musi kończyć się płatnością online?',answer:'Nie. Dla produktów wymagających potwierdzenia warunków konfigurator może przekazywać projekt do wyceny przez sprzedawcę. Uzgadniamy, kiedy cena jest orientacyjna, a kiedy ostateczna.'},
    {question:'Jak sprawdzimy, czy wdrożenie pomaga sprzedaży?',answer:'Mierzymy użycie kluczowych funkcji, przejścia do zapytania lub koszyka i faktycznie odebrane zgłoszenia. W CRM można dalej oceniać jakość zapytań i sprzedaż. Nie obiecujemy określonego wzrostu przed zebraniem danych.'},
  ],
};
