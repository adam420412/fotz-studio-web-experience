# Formularze i CRM — 10 października 2026

## Potwierdzone na produkcji przed publikacją poprawki

- Dostęp do baz strony i FOTZ Studio Hub działa przez Lovable Cloud. Bieżące połączenie Supabase MCP nie ma uprawnień do tych projektów.
- W zachowanej kolejce były dwa zgłoszenia techniczne. Jedno oczekiwało na dostarczenie po błędach DNS przy łączeniu z webhookiem CRM.
- Przestawiono termin kolejnej próby wyłącznie tego zgłoszenia. Istniejący cron ponowił wysyłkę o 10:00 UTC; kolejka otrzymała `delivered`, a CRM `processed` z istniejącym rekordem leada i źródłem `website:/kontakt`. Nie wysłano ponownie powiadomienia e-mail.
- Odzyskanie zgłoszenia potwierdza działanie dostarczenia w tej próbie. Nie ustalono przyczyny wcześniejszej niedostępności DNS.
- Bezpośredni preflight z publicznej strony do webhooka CRM zwracał 403. Publiczne funkcje strony `booking-availability` i `book-consultation` odpowiadały prawidłowo na sprawdzenie CORS i walidację pustego żądania.

## Poprawka kalendarza

- Dostępność pobierana jest z `booking-availability`, bez anonimowego odczytu tabeli rezerwacji.
- `book-consultation` odpowiada za zapis, kolejkę CRM i powiadomienia. Usunięto oddzielne zapisy z przeglądarki i bezpośredni webhook CRM.
- Ponowienie po błędzie sieci używa tego samego identyfikatora. Podwójne kliknięcie i powrót do tego samego formularza nie tworzą kolejnej rezerwacji. Pamięć przeglądarki nie przechowuje danych formularza.
- Sukces wymaga potwierdzenia identyfikatora, zapisu rezerwacji i przyjęcia do kolejki CRM. Zajęty termin wraca do wyboru daty z czytelnym komunikatem.
- Przycisk w kalkulatorze otwiera wybór terminu bez konieczności wcześniejszego wysłania drugiego formularza.

## Weryfikacja

Typecheck i 75 testów zakończyły się powodzeniem. Build wygenerował 1074 strony bez błędów treści. Testy obejmują niejednoznaczny błąd sieci, duplikaty, brak potwierdzenia kolejki, zajęty termin i niedostępność powiadomień.

Użytkownik zatwierdził jedną rezerwację techniczną na produkcji, standardowe powiadomienia oraz późniejsze anulowanie. Test ma zostać wykonany po wdrożeniu; powyższe testy kodu nie stanowią dowodu jego wykonania. Wynik końcowy należy sprawdzić osobno w bazie strony, kolejce, CRM i skrzynce odbiorczej.

## Wynik produkcyjny — 11 października 2026

PR #40 został scalony jako `4745a6377bc986cd171de37e695e0097d82bf929`. Publikację potwierdzono nowym plikiem aplikacji na publicznej domenie i testem rzeczywistego kalkulatora cen.

- Wykonano jedno zatwierdzone zgłoszenie `TEST TECHNICZNY FOTZ` na 12 października 2026, godz. 09:00, przez publiczny kalkulator. `book-consultation` zwróciło HTTP 201, `success: true`, `crm_queued: true`, `crm_delivered: true`.
- Odczyt tabel strony potwierdził rezerwację i kolejkę `delivered`; odczyt CRM potwierdził zdarzenie `processed`, przypisanego leada i rezerwację. To dowód zapisu w CRM, nie pozyskania rzeczywistego klienta.
- Resend odrzucił oba powiadomienia kodem 403: nadawca `onboarding@resend.dev` może wysyłać tylko do właściciela konta testowego. Potwierdzono przyczynę w logu dostawcy; wyszukiwanie w skrzynce nie znalazło wiadomości testowych. Dostarczenia e-maili nie potwierdzono.
- Anulowano dokładnie tę rezerwację w bazie strony i w CRM. Odczyt obu baz zwrócił `cancelled`; publiczny kalendarz ponownie udostępnił godzinę 09:00. Zachowano leada i ślad integracji.
- Przygotowano domenę nadawcy `powiadomienia.fotz-studio.pl` i trzy rekordy Resend. Ich dodanie jest zablokowane: DirectAdmin konta hostingowego przekierowuje edytor DNS na listę domen, pokazując przekroczony limit dysku (335216 / 307200 MB). Panel rejestratora udostępnia delegację, nie alternatywny edytor tej strefy. Nie zmieniono DNS, nie zwiększono pakietu ani nie usunięto danych.

Do zamknięcia etapu mailowego pozostaje dodanie rekordów, weryfikacja domeny w Resend, ustawienie `CONTACT_FROM` i ponowienie powiadomień w ramach tego samego zatwierdzonego testu. Ponowne żądanie nie może utworzyć kolejnego terminu ani wysłać mylącego potwierdzenia anulowanej rezerwacji. Końcowy status trzeba sprawdzić w Resend i w skrzynce, a termin pozostawić anulowany.

Aktualny kod `book-consultation` odczytany w Lovable Cloud przyjmuje do 4000 znaków wiadomości. Repozytorium zawiera historyczne wersje części funkcji serwerowych; nie należy ich masowo wdrażać nad bieżącą konfiguracją produkcyjną.
