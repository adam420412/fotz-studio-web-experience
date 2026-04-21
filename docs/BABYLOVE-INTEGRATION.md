# BabyLoveGrowth Integration

Projekt synchronizuje artykuły blogowe z [BabyLoveGrowth](https://www.babylovegrowth.ai/)
na dwa uzupełniające się sposoby:

| Źródło          | Edge Function       | Kiedy działa                                      |
|-----------------|---------------------|---------------------------------------------------|
| **Webhook**     | `babylove-webhook`  | Push z BabyLove po publikacji/edycji artykułu     |
| **REST API**    | `babylove-sync`     | Backfill ręczny + codzienny cron (pg_cron 03:17 UTC) |

Obie zapisują do tej samej tabeli `public.blog_articles` (upsert po `external_id`),
więc nie duplikują wpisów i idealnie się uzupełniają.

## Wymagane sekrety Supabase

```bash
# Klucz do REST API BabyLoveGrowth (Settings → Integrations → API)
supabase secrets set BABYLOVE_API_KEY=<api-key>

# Sekret weryfikujący webhook (jak do tej pory)
supabase secrets set BABYLOVE_WEBHOOK_SECRET=<webhook-secret>

# (opcjonalnie) shared-secret dla funkcji babylove-sync — jeśli ustawisz,
# wywołania muszą dostarczać Authorization: Bearer <token>
supabase secrets set BABYLOVE_SYNC_TOKEN=<random-token>
```

> **Nie commituj** tych kluczy do repo. Obecnie wpisuje się je raz, bez wycieku do gita.

## Deploy

```bash
# Migracje
supabase db push

# Funkcje
supabase functions deploy babylove-webhook
supabase functions deploy babylove-sync
```

## Ręczny backfill / re-sync

### Z panelu admina
`/admin/dashboard` → zakładka **Blog** → *Synchronizuj teraz*.
Checkbox "Wymuś pełną synchronizację" nadpisuje też artykuły już pobrane.

### Z CLI

```bash
curl -X POST "https://<projekt>.supabase.co/functions/v1/babylove-sync" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $BABYLOVE_SYNC_TOKEN" \
  -d '{"limit":100,"force":false}'
```

Parametry body (wszystkie opcjonalne):

| pole          | typ     | domyślnie | opis                                             |
|---------------|---------|-----------|--------------------------------------------------|
| `limit`       | number  | 100       | Rozmiar strony z `GET /v1/articles` (max 500)    |
| `offset`      | number  | 0         | Pominięcie pierwszych N — przydatne do wznowień  |
| `maxArticles` | number  | ∞         | Limit upsertów (dla testów)                      |
| `force`       | boolean | false     | Gdy `true`, pobiera i nadpisuje także istniejące |

Odpowiedź: `{ success, durationMs, pages, listed, upserted, skipped, failed }`.

## Harmonogram (pg_cron)

Migracja `20260422120100_babylove_sync_cron.sql` dodaje job `babylove-sync-daily`
uruchamiany codziennie o 03:17 UTC. Żeby zmienić częstotliwość:

```sql
SELECT cron.unschedule('babylove-sync-daily');
SELECT cron.schedule(
  'babylove-sync-daily',
  '*/30 * * * *',  -- co 30 min
  $cron$ SELECT net.http_post( ... ) $cron$
);
```

## Nowe kolumny w `blog_articles`

Migracja `20260422120000_babylove_api_fields.sql` dodaje:

- `excerpt` — krótkie streszczenie z API
- `seed_keyword` — główne słowo kluczowe
- `keywords` (jsonb) — lista keywords
- `json_ld` (jsonb) — schema.org Article
- `faq_json_ld` (jsonb) — schema.org FAQ
- `updated_at`, `last_synced_at`, `sync_source` — metadane

Wszystkie zapełnia zarówno `babylove-webhook`, jak i `babylove-sync`.

## Troubleshooting

- **401 z API BabyLove** — sprawdź `BABYLOVE_API_KEY`; klucz ustawia się
  w BabyLoveGrowth → Settings → Integrations → API.
- **`BABYLOVE_API_KEY is not configured`** — sekret nie trafił do funkcji;
  po `supabase secrets set` zrób redeploy funkcji.
- **Cron nie odpala** — `SELECT * FROM cron.job;` i `SELECT * FROM cron.job_run_details ORDER BY start_time DESC LIMIT 20;`.
- **`pg_net` wymaga `app.settings.supabase_url`** — ustaw na hostowanym Supabase:
  `ALTER DATABASE postgres SET app.settings.supabase_url = 'https://<ref>.supabase.co';`.
