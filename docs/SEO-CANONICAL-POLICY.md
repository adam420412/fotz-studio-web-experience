# Fotz.pl URL & Canonical Policy

> **⚠️ CRITICAL FIX (2026-01-14)**: Naprawiono problem "Non-canonical page in sitemap (135)" przez wymuszenie 301 redirect na poziomie **Vercel** (nie `_redirects`).

## Decyzja: BEZ Trailing Slasha

**Data decyzji:** 2026-01-14

### Polityka URL

| Element | Wartość |
|---------|---------|
| Protokół | HTTPS (wymagany) |
| Subdomena | Brak www |
| Trailing slash | **NIE** (oprócz strony głównej) |
| Parametry | Niedozwolone w canonical |

### Przykłady

| ✅ Poprawny (Canonical) | ❌ Niepoprawny |
|------------------------|----------------|
| `https://fotz.pl` | `http://fotz.pl` |
| `https://fotz.pl/uslugi` | `https://fotz.pl/uslugi/` |
| `https://fotz.pl/blog/seo-ecommerce` | `https://www.fotz.pl/blog/seo-ecommerce` |
| | `https://fotz.pl/uslugi?lang=pl` |

---

## Implementacja

### 1. SEOHead.tsx (Canonical Tag)
```tsx
// Zawsze bez trailing slasha
const cleanPath = location.pathname.replace(/\/+$/, "");
const canonicalUrl = `https://fotz.pl${cleanPath}`;
```

### 2. vercel.json (KRYTYCZNE!)

> ⚠️ **UWAGA**: Plik `_redirects` NIE działa na Vercel! Redirecty MUSZĄ być w `vercel.json`.

```json
{
  "trailingSlash": false,
  "redirects": [
    { 
      "source": "/:path((?!api|_next|favicon\\.ico|.*\\..*).*)/", 
      "destination": "/:path", 
      "permanent": true 
    }
  ]
}
```

**Wyjaśnienie regex**: `(?!api|_next|favicon\\.ico|.*\\..*)` - wyklucza:
- `/api/*` - API routes
- `/_next/*` - Next.js assets
- `favicon.ico` i pliki z rozszerzeniem (`.js`, `.css`, `.png` itp.)

### 3. sitemap.xml
Wszystkie URL-e BEZ trailing slasha, w jednej linii:
```xml
<url><loc>https://fotz.pl/uslugi</loc><lastmod>2026-01-14</lastmod></url>
```

❌ **NIE TAK** (whitespace = błąd):
```xml
<url>
  <loc>
    https://fotz.pl/uslugi
  </loc>
</url>
```

---

## Przekierowania 301

Każdy URL z trailing slashem jest przekierowywany na wersję bez:
- `https://fotz.pl/uslugi/` → `https://fotz.pl/uslugi` (301)
- `https://fotz.pl/blog/` → `https://fotz.pl/blog` (301)

---

## Testy CI/CD

### Test 1: Redirect trailing slash
```bash
node scripts/seo-smoke-test.mjs
```
Sprawdza: `/uslugi/` → 301 → `/uslugi`

### Test 2: Canonical consistency
```bash
node scripts/seo-canonical-check.mjs        # Statyczna analiza sitemap
node scripts/seo-canonical-check.mjs --live # Live check wszystkich URL
```

---

## Checklista wdrożenia

- [x] SEOHead.tsx - canonical bez trailing slasha
- [x] vercel.json - `trailingSlash: false` + redirect rule
- [x] sitemap.xml - wszystkie URL bez trailing slasha, bez whitespace
- [x] robots.txt - blokuje parametry i paginację
- [x] Testy CI - `seo-smoke-test.mjs` + `seo-canonical-check.mjs`
- [ ] Google Search Console - prześlij sitemapę
- [ ] Sprawdź Coverage report za 7 dni

---

## Google Search Console - Weryfikacja

### Po wdrożeniu:

1. **Sitemaps**:
   - Usuń starą sitemapę (jeśli jest)
   - Dodaj: `https://fotz.pl/sitemap.xml`
   - Poczekaj 24-48h

2. **Coverage** - szukaj:
   - ❌ "Duplicate, Google chose different canonical" → problem canonical
   - ❌ "Crawled - currently not indexed" → sprawdź redirect
   - ❌ "Alternate page with proper canonical tag" → OK, ale sprawdź

3. **URL Inspection** dla przykładowych stron:
   - Wpisz: `https://fotz.pl/uslugi`
   - Sprawdź: "User-declared canonical" = "Google-selected canonical"
   - Jeśli różne = problem!

### Typowe błędy i rozwiązania:

| Błąd GSC | Przyczyna | Rozwiązanie |
|----------|-----------|-------------|
| "Duplicate, Google chose different canonical" | Canonical ≠ URL w sitemap | Sprawdź SEOHead.tsx |
| "Soft 404" | Serwer zwraca 200 dla nieistniejących stron | Skonfiguruj 404 |
| "Redirect error" | Pętla redirectów | Sprawdź vercel.json |

---

## Konfiguracje serwerów (backup)

### Nginx
```nginx
server {
    # Force HTTPS
    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    }
    
    # Force non-www
    if ($host ~* ^www\.(.*)$) {
        return 301 https://$1$request_uri;
    }
    
    # Remove trailing slash (except root)
    rewrite ^(.+)/$ $1 permanent;
}
```

### Apache (.htaccess)
```apache
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Force non-www
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]

# Remove trailing slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [L,R=301]
```

### Cloudflare Page Rules
1. **www → non-www**: `www.fotz.pl/*` → `https://fotz.pl/$1` (301)
2. **Trailing slash**: `fotz.pl/*/` → `https://fotz.pl/$1` (301)

---

## Dlaczego `_redirects` NIE działa na Vercel?

Plik `_redirects` to mechanizm **Netlify/Cloudflare Pages**. 

Vercel używa wyłącznie `vercel.json`. Jeśli hostujesz na Vercel, reguły z `_redirects` są **ignorowane**, co powoduje:
- URL-e z trailing slashem zwracają 200 (zamiast 301)
- Ahrefs/GSC raportuje "Non-canonical page in sitemap"
- Google nie wie, która wersja URL jest kanonczna

**Rozwiązanie**: Zawsze używaj `vercel.json` dla projektów Vercel.
