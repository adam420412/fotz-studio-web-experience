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
