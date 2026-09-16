# Odbiór wdrożenia kampanii WWW — 16.09.2026

Kod na gałęzi audytu nie oznacza publikacji. PR 13 strony i PR 1 Connect Hub pozostają draftami, dopóki nie przejdzie odbiór integracji. Nie uruchamiać płatnego ruchu na podgląd ani endpoint testowy.

## Konfiguracja serwerowa

W projekcie strony (vhzmfebggxeovtkznlby):

| Nazwa | Wymaganie |
|---|---|
| FOTZ_CONNECT_HUB_WEBHOOK_URL | https://uqkmdfpiwquooauvkgwb.supabase.co/functions/v1/crm-webhook — zapisany w Lovable 16.09 |
| FOTZ_CONNECT_HUB_WEBHOOK_SECRET | Ten sam losowy sekret co CRM_WEBHOOK_SECRET w Hub. Nigdy VITE_ ani kod klienta. |
| FOTZ_RATE_LIMIT_SALT | Oddzielna losowa wartość do haszowania identyfikatora limitera. |
| RESEND_API_KEY | Jest wpis w panelu. Dostarczenie e-maila wymaga testu. |
| CONTACT_INBOX / CONTACT_FROM | Sprawdzić odbiorcę oraz nadawcę dozwolonego w Resend. Bez konfiguracji obowiązują istniejące domyślne wartości funkcji. |
| META_DATASET_ID | 1292173626418476 |
| META_CAPI_ACCESS_TOKEN | Wymagany dla wysyłki serwerowej. Nie umieszczać w repozytorium. |
| META_GRAPH_API_VERSION | Obsługiwana wersja wybrana w aktualnym panelu Meta. |
| META_TEST_EVENT_CODE | Tylko na czas odbioru w Test Events; usunąć przed ruchem produkcyjnym. |

W Hub (uqkmdfpiwquooauvkgwb): CRM_WEBHOOK_SECRET. CRM_ALLOW_LEGACY_PUBLIC powinno pozostać wyłączone. Zewnętrzne powiadomienia Slack/Discord są domyślnie wyłączone; nie włączać ich jako części testu.

## Kolejność wdrożenia

1. Potwierdzić adres administratora danych i zakres usługi od 999 zł. Nie obiecywać 24 h ani płatności dopiero po wykonaniu bez odrębnego ustalenia.
2. Przygotować kopię bazy i punkt przywrócenia przed migracjami. Zidentyfikować migracje już wykonane; nie uruchamiać ich drugi raz w ciemno.
3. Hub: migracja Growth OS 20260907120000 oraz migracja zaproszeń/storage 20260907123000. Ta druga pochodzi z wcześniejszych prac i wymaga sprawdzenia dostępu istniejącego administratora, zaproszeń i plików.
4. Strona — etap przygotowania: migracja outbox `20260907121000`, następnie `20260916070000_contact_notifications`. Tworzą prywatną kolejkę, limiter i obsługę powiadomień; nie wyłączają istniejącego formularza rezerwacji. Przed ręcznym uruchomieniem sprawdzić stan schematu i historię migracji. Nie uruchamiać automatycznie całego katalogu na tym etapie.
5. Etap przełączenia: wdrożyć `crm-webhook` w Hub. Migrację `20260907121500_website_booking_cutover.sql` zastosować razem z nowym frontendem rezerwacji i kompletem funkcji WWW wraz z `_shared`. Ta migracja usuwa dotychczasową publiczną politykę zapisu rezerwacji — samodzielne wcześniejsze zastosowanie przerwałoby stary formularz. Sprawdzić dostępność terminów; stare endpointy cen/rezerwacji wycofać dopiero z odpowiadającymi im zmianami klienta.
6. Ustawić serwerowe zadanie POST do crm-retry co 5 minut z autoryzacją service role. Samo verify_jwt nie wystarcza — funkcja dodatkowo wymaga service role. Nie umieszczać klucza w kodzie klienta, zwykłym SQL ani publicznym harmonogramie; wykorzystać chroniony magazyn sekretów środowiska.
7. Odbiór na podglądzie: formularz → kolejka → Hub → next_step → powiadomienie. Awaria e-maila ma pozostawić przyjęty lead, stan failed w kolejce oraz możliwość ponowienia. Awaria Hub ma pozostawić kontakt w kolejce. Sprawdzić wykonanie zaplanowanego retry, nie tylko jego definicję.
8. Odbiór pozostałych formularzy, kalendarza, logowania i zaproszeń. Nie traktować samego builda jako potwierdzenia tych integracji.
9. Test Events: PageView → FormView → FormStart → Lead. Lead po przyjęciu zapisu, wspólny event_id przeglądarki i serwera. Schedule osobno. Kwalifikacja, obecność i sprzedaż nie są automatycznie zastępowane zdarzeniem Lead.
10. Scalić zatwierdzony kod i opublikować w Lovable przez Publish → Update. Następnie sprawdzić publiczny URL i jeszcze jeden kontrolowany zapis. Aktualizacja GitHub i publikacja to odrębne czynności ([dokumentacja Lovable](https://docs.lovable.dev/features/publish)).

## Co już sprawdzono lokalnie

22 testy zapisu, ponowień, zgód, pomiaru i kolejki powiadomień. TypeScript i build obu aplikacji. Kontrola Deno funkcji send-contact, crm-retry, book-consultation i crm-webhook również przechodzi. Przeglądarka: walidacja pustego formularza, symulowana odpowiedź 503, zachowanie pól, ponowienie z tym samym submission_id, potwierdzenie sukcesu, przeniesienie UTM i rozpoznanie meta_ads. Szerokości 320 i 390 px bez poziomego przewijania.

Po poprawkach dostępności ponownie przeszły 22 testy, TypeScript i pełny build strony (1004 strony prerenderu). Sprawdzono tekst powiększony do 200%: pola mają obliczony rozmiar 32 px zamiast 16 px; widoki 390×844 oraz 320×400 nie przewijają się poziomo. Walidacja ustawia fokus na pierwszym polu, checkbox i przyciski banera zgody pozostają osiągalne klawiaturą/przewijaniem. Zmniejszona wysokość okna nie zastępuje testu fizycznej klawiatury telefonu.

Dziewięć kontroli migracji przeszło na jednorazowym, lokalnym PostgreSQL 16: zachowanie starej polityki w etapie przygotowania, RLS kolejki i limitera, brak odczytu przez anon, ograniczenie RPC do service role, limit i reset okna, domyślne stany powiadomień, odcięcie anonimowego zapisu po przełączeniu, ponowienie rezerwacji bez duplikatu i konflikt zajętego terminu. Odtworzenie: `python3 scripts/verify-intake-migrations.py` (wymagane `initdb`, `pg_ctl`, `psql` w PATH). Skrypt używa syntetycznego schematu, prywatnego gniazda Unix, bez nasłuchu TCP; usuwa własną bazę po teście. Nie zastępuje odbioru na faktycznym schemacie Supabase.

Test przeglądarkowy zapisu używał izolowanego endpointu lokalnego; nie stanowi dowodu zapisu w produkcyjnym Hub. Fizyczna klawiatura telefonu i rzeczywiste dostarczenie e-maila wymagają jeszcze odbioru.

## Stan odczytany w usługach — 16.09.2026

W stronie nie ma jeszcze tabel `crm_delivery_outbox` i `public_intake_rate_limits`; istnieje tabela rezerwacji z RLS. W Hub brakuje tabel Growth OS (`growth_campaigns`, `integration_sources`, `integration_events`, `lead_touchpoints`); pola `next_step` i `next_step_date` w `leads` już istnieją. To odczyt schematu, bez pobierania danych klientów. Migracje i funkcje nie zostały wdrożone. Lovable wyświetlił potwierdzenie operacji SQL; anulowano je, a zgoda użytkownika na konkretny etap przygotowania pozostaje otwarta.

Meta: konto `648264803478773`, dataset `1292173626418476`, zakres 19.08–15.09.2026. Widoczne są 1329 PageView, 9 Lead (etykieta „Kontakt”, ostatni 13 dni wcześniej) i 1 FormView. Są to zdarzenia przeglądarkowe; CAPI ma stan „Oczekiwanie na połączenie”. Poprzednią tezę o zerowej liczbie Lead należy uznać za nieaktualną. Historyczne zdarzenia nie potwierdzają poprawności nowego formularza, zapisu w CRM ani wyników konkretnej kampanii.

## Rollback

Przed wdrożeniem zapisać aktualną wersję opublikowaną w Lovable i kopię bazy. W razie błędu wrócić do poprzedniej opublikowanej wersji oraz kompatybilnych funkcji. Nowych kolumn i kontaktów nie usuwać w ramach automatycznego rollbacku. Nie przywracać publicznego webhooka jako obejścia braku sekretu.

Resend wykorzystuje klucz idempotencji kontaktu, a potwierdzone przyjęcie przez API dostawcy jest zapisywane w outbox (nie jest to dowód dostarczenia do skrzynki). Dostawca przechowuje klucze idempotencji przez 24 h ([Resend](https://resend.com/docs/dashboard/emails/idempotency-keys)); dlatego własny zapis potwierdzenia i blokada równoległych prób są również potrzebne.
