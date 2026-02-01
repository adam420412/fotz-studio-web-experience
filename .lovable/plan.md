

# Plan: Integracja BabyLove Growth Webhook

## Problem
BabyLoveGrowth próbuje wysłać artykuły na URL `https://vhzmfebggxeovtkznlby.supabase.co/functions/v1/babylove-webhook`, ale ta funkcja nie istnieje. Dlatego system zewnętrzny nie otrzymuje odpowiedzi HTTP 200.

## Co muszę zrobić

### 1. Dodać Secret
Dodać `BABYLOVE_WEBHOOK_SECRET` z wartością:
```
fotz-blg-wh-9K4mX2pL7vQ8nR3tY6wZ1aB5cD0eF4gH8jM2kN6sP9qU3xV7yW0zA
```

### 2. Utworzyć tabelę `blog_articles`
Migracja SQL tworząca tabelę z polami pasującymi do payloadu z BabyLove:

```text
+---------------------+
|   blog_articles     |
+---------------------+
| id (uuid, PK)       |
| external_id (int)   |
| title (text)        |
| slug (text, unique) |
| meta_description    |
| content_html        |
| content_markdown    |
| hero_image_url      |
| language_code       |
| public_url          |
| created_at          |
| published_at        |
| is_published (bool) |
+---------------------+
```

RLS: Publiczny odczyt dla wszystkich, zapis tylko przez service role (webhook).

### 3. Utworzyć Edge Function `babylove-webhook`

Nowa funkcja w `supabase/functions/babylove-webhook/index.ts`:

- Obsługa CORS (OPTIONS)
- Weryfikacja tokena Bearer z nagłówka `Authorization`
- Parsowanie JSON z payloadem artykułu
- Zapis do tabeli `blog_articles`
- Zwrot HTTP 200 przy sukcesie

Payload z BabyLove:
```json
{
  "id": 10,
  "title": "Test Article",
  "slug": "test-article",
  "metaDescription": "...",
  "content_html": "<h1>...</h1>",
  "heroImageUrl": "https://...",
  "content_markdown": "# ...",
  "languageCode": "en",
  "publicUrl": "https://...",
  "createdAt": "2025-03-20T..."
}
```

### 4. Zaktualizować config.toml

Dodać konfigurację nowej funkcji:
```toml
[functions.babylove-webhook]
verify_jwt = false
```

### 5. Zaktualizować Blog.tsx

- Dodać hook pobierający artykuły z `blog_articles`
- Połączyć artykuły z bazy ze statycznymi artykułami
- Wyświetlać wszystkie razem posortowane po dacie

### 6. Utworzyć dynamiczną stronę artykułu

- Nowy komponent do wyświetlania artykułów z bazy
- Routing dla `/blog/:slug` który sprawdza zarówno statyczne jak i dynamiczne artykuły

---

## Szczegóły techniczne

### Edge Function - kluczowe elementy

```typescript
// Weryfikacja tokena
const authHeader = req.headers.get('Authorization');
const token = authHeader?.replace('Bearer ', '');
if (token !== Deno.env.get('BABYLOVE_WEBHOOK_SECRET')) {
  return new Response('Unauthorized', { status: 401 });
}

// Zapis do bazy
const supabaseAdmin = createClient(url, serviceRoleKey);
await supabaseAdmin.from('blog_articles').upsert({
  external_id: payload.id,
  title: payload.title,
  slug: payload.slug,
  // ...
});
```

### Blog.tsx - pobieranie danych

```typescript
const { data: dbArticles } = useQuery({
  queryKey: ['blog-articles'],
  queryFn: async () => {
    const { data } = await supabase
      .from('blog_articles')
      .select('*')
      .eq('is_published', true)
      .order('published_at', { ascending: false });
    return data;
  }
});

// Połączenie ze statycznymi
const allPosts = [...staticPosts, ...transformedDbArticles];
```

---

## Rezultat

Po implementacji:
1. BabyLove Growth wyśle POST na webhook
2. Funkcja zweryfikuje token i zapisze artykuł
3. Artykuł pojawi się automatycznie na stronie `/blog`
4. Będzie można go otworzyć pod `/blog/[slug]`

