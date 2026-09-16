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
4. Strona: migracja outbox 20260907121000, następnie 20260916070000_contact_notifications. Sprawdzić też wymagane przez book-consultation tabele rezerwacji i konfigurację dostępności.
5. Wdrożyć crm-webhook w Hub. Po stronie WWW wdrożyć komplet publicznych formularzy wraz z _shared; stare endpointy cen/rezerwacji są wycofywane razem z odpowiadającymi im zmianami klienta.
6. Ustawić serwerowe zadanie POST do crm-retry co 5 minut z autoryzacją service role. Samo verify_jwt nie wystarcza — funkcja dodatkowo wymaga service role. Nie umieszczać klucza w kodzie klienta, zwykłym SQL ani publicznym harmonogramie; wykorzystać chroniony magazyn sekretów środowiska.
7. Odbiór na podglądzie: formularz → kolejka → Hub → next_step → powiadomienie. Awaria e-maila ma pozostawić przyjęty lead, stan failed w kolejce oraz możliwość ponowienia. Awaria Hub ma pozostawić kontakt w kolejce. Sprawdzić wykonanie zaplanowanego retry, nie tylko jego definicję.
8. Odbiór pozostałych formularzy, kalendarza, logowania i zaproszeń. Nie traktować samego builda jako potwierdzenia tych integracji.
9. Test Events: PageView → FormView → FormStart → Lead. Lead po przyjęciu zapisu, wspólny event_id przeglądarki i serwera. Schedule osobno. Kwalifikacja, obecność i sprzedaż nie są automatycznie zastępowane zdarzeniem Lead.
10. Scalić zatwierdzony kod i opublikować w Lovable przez Publish → Update. Następnie sprawdzić publiczny URL i jeszcze jeden kontrolowany zapis. Aktualizacja GitHub i publikacja to odrębne czynności ([dokumentacja Lovable](https://docs.lovable.dev/features/publish)).

## Co już sprawdzono lokalnie

22 testy zapisu, ponowień, zgód, pomiaru i kolejki powiadomień. TypeScript i build obu aplikacji. Kontrola Deno funkcji send-contact, crm-retry, book-consultation i crm-webhook również przechodzi. Przeglądarka: walidacja pustego formularza, symulowana odpowiedź 503, zachowanie pól, ponowienie z tym samym submission_id, potwierdzenie sukcesu, przeniesienie UTM i rozpoznanie meta_ads. Szerokości 320 i 390 px bez poziomego przewijania.

Test przeglądarkowy używał izolowanego endpointu lokalnego; nie stanowi dowodu zapisu w produkcyjnym Hub. Fizyczna klawiatura telefonu, powiększony tekst i rzeczywiste dostarczenie e-maila wymagają jeszcze odbioru.

## Rollback

Przed wdrożeniem zapisać aktualną wersję opublikowaną w Lovable i kopię bazy. W razie błędu wrócić do poprzedniej opublikowanej wersji oraz kompatybilnych funkcji. Nowych kolumn i kontaktów nie usuwać w ramach automatycznego rollbacku. Nie przywracać publicznego webhooka jako obejścia braku sekretu.

Resend wykorzystuje klucz idempotencji kontaktu, a potwierdzone przyjęcie przez API dostawcy jest zapisywane w outbox (nie jest to dowód dostarczenia do skrzynki). Dostawca przechowuje klucze idempotencji przez 24 h ([Resend](https://resend.com/docs/dashboard/emails/idempotency-keys)); dlatego własny zapis potwierdzenia i blokada równoległych prób są również potrzebne.
