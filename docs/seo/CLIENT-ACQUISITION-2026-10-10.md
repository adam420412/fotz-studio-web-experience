# Oferty, kontakt i pomiar zapytań — 10 października 2026

## Problem i zmiana

Kontakt i konsultacja wymagały zbyt wielu decyzji, a główne oferty nie prowadziły spójnie od realizacji do zapytania. Nowe widoki pokazują zakres, prawdziwe projekty, zasady wyceny i krótki formularz. Trzy pola są obowiązkowe: imię, e-mail i opis. Telefon i termin pozostają opcjonalne. Konsultacja jest zgłoszeniem do osobistego potwierdzenia terminu.

Zmiana obejmuje kontakt, konsultację, główne oferty WWW, SEO, filmów i spotów; dopracowuje także przejścia z social media, cennik, realizację Enea Stadion oraz trzy ścieżki usług na stronie głównej. Wybrana usługa i wariant przechodzą do formularza. Oryginalny hero strony głównej pozostaje zachowany.

## Pomiar

- Nowa usługa GA4: `fotz-studio.pl`, pomiar `G-2CKB11HFK1`.
- Skrypt GA4 uruchamia się wyłącznie na domenie produkcyjnej, po zgodzie w wersji 2. Starsza zgoda wymaga ponownego wyboru.
- Ręczne odsłony SPA z deduplikacją; rozszerzony pomiar strumienia wyłączony.
- Zdarzenia: `offer_view`, `contact_click`, `phone_click`, `email_click`, `form_start`, `form_attempt`, `form_error` i `generate_lead`.
- `generate_lead` powstaje dopiero po zaakceptowaniu zgłoszenia przez istniejący mechanizm potwierdzeń. Nie dowodzi dostarczenia do CRM ani sprzedaży.
- Parametr `service` ma zamknięty zestaw wartości. Do zdarzeń nie trafiają pola formularza; adresy odsłon i referrer nie zawierają parametrów ani fragmentu.
- GA4 ma zdarzenie kluczowe `generate_lead` bez domyślnej wartości pieniężnej oraz wymiar zdarzenia „Usługa” (`service`).
- Ustawienia analityki można ponownie otworzyć w stopce; cofnięcie zgody usuwa cookies GA i przeładowuje dokument.
- Istniejące statyczne strony kampanii poza aplikacją React wymagają osobnego podłączenia pomiaru. Zdarzenia Ahrefs wymagają konfiguracji odpowiednich nazw w panelu tego narzędzia.

## Weryfikacja przed publikacją

- TypeScript, ukierunkowany ESLint i 68 testów: poprawnie.
- Build: 1074 dokumenty, 1071 z pełną treścią; 0 pominiętych metadanych i 0 błędów renderowania treści.
- Audyt: 1072 unikalne URL-e sitemap; 0 problemów metadanych, map witryny i wewnętrznych linków w 134825 wystąpieniach.
- Audyt odnośników źródłowych: 3932 sprawdzone, 0 błędów. Galerie: 486 podstron, 0 błędów.
- Widoki mobilne: brak poziomego przewijania i błędów załadowanych zdjęć w sprawdzonych ofertach, kontakcie, konsultacji, cenniku, social media, realizacji i stronie głównej.
- Przejście główna → social media → wybrany zakres → kontakt zachowuje usługę i wariant. Walidacja pustego formularza pokazuje trzy błędy i ustawia fokus na imieniu. Nie wysyłano testowego zgłoszenia produkcyjnego.
- CUPRA: wideo odtwarza się bez błędu, działa zamykanie dialogu. FAQ i opcjonalne pola formularza działają z klawiatury.

Mobilny Unlighthouse na lokalnym buildzie (jedna seria, wynik laboratoryjny):

| Podstrona | Wydajność | Dostępność | Best Practices | SEO | LCP |
|---|---:|---:|---:|---:|---:|
| Kontakt | 91 | 100 | 100 | 100 | 2,8 s |
| Pozycjonowanie | 86 | 100 | 100 | 100 | 3,5 s |
| Spoty reklamowe | 87 | 100 | 100 | 100 | 3,3 s |
| Strony internetowe | 88 | 100 | 100 | 100 | 3,2 s |

## Otwarte granice weryfikacji

- W chwili przygotowania tej zmiany połączone konto Supabase nie udostępnia projektu `vhzmfebggxeovtkznlby`. Końcowe dostarczanie zgłoszeń do CRM pozostaje niezweryfikowane. Nie wdrażać starego lokalnego kodu `send-contact` na aktualną funkcję produkcyjną.
- Odbiór zdarzeń GA4 oraz publiczną wersję aplikacji trzeba potwierdzić po wdrożeniu.
- Na fotz.pl wykonano wyłącznie uwierzytelniony odczyt WPVibe. Nie opublikowano linków ani zmian treści.
- Wyniki laboratoryjne i poprawność techniczna nie dowodzą wzrostu liczby zapytań. Efekt handlowy należy ocenić po zebraniu rzeczywistych danych.

## Kontrola pierwszej publikacji i korekta GA4

PR #38 opublikowano jako `dd94d2f`. Na 12 publicznych trasach potwierdzono HTTP 200, jeden H1, właściwy canonical i nowy pakiet aplikacji. Przed zgodą: 0 skryptów GA4 i 0 żądań Google Analytics. Po akceptacji: `page_view` oraz `offer_view` docierały do Google z odpowiedzią 204. Cofnięcie zgody przeładowuje stronę bez skryptu GA.

Kontrola sieci wykazała jednak, że po przejściu kontakt → WWW `offer_view` zachowywał poprzedni `page_location`, mimo poprawnej nowej odsłony. Korekta przekazuje oczyszczony kontekst ostatniej odsłony bezpośrednio z każdym zdarzeniem. Wspólny kontekst `set` aktualizuje się przy odsłonie; jednorazowy `config` nie przypina już adresu początkowego. Test regresji sprawdza URL, referrer, tytuł i brak parametrów zapytania dla kolejnych zdarzeń. Łącznie 69 testów.

Źródło semantyki pierwszeństwa parametrów: [Google tag API — parameter scope and precedence](https://developers.google.com/tag-platform/gtagjs/reference#parameter_precedence). Odbiór poprawionego kontekstu wymaga ponownego sprawdzenia po wdrożeniu korekty.
