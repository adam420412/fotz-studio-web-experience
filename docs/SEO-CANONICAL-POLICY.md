# Fotz.pl URL & Canonical Policy

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

### Implementacja

#### 1. SEOHead.tsx (Canonical Tag)
```tsx
// Zawsze bez trailing slasha
const cleanPath = location.pathname.replace(/\/+$/, "");
const canonicalUrl = `https://fotz.pl${cleanPath}`;
```

#### 2. vercel.json
```json
{
  "trailingSlash": false
}
```

#### 3. _redirects (Netlify)
```
/*/  /:splat  301!
```

#### 4. sitemap.xml
Wszystkie URL-e BEZ trailing slasha:
```xml
<loc>https://fotz.pl/uslugi</loc>
```

### Przekierowania 301

Każdy URL z trailing slashem jest przekierowywany na wersję bez:
- `https://fotz.pl/uslugi/` → `https://fotz.pl/uslugi` (301)
- `https://fotz.pl/blog/` → `https://fotz.pl/blog` (301)

### Walidacja

Uruchom skrypt walidacyjny:
```bash
node scripts/validate-canonical-sitemap.mjs
```

### Checklista wdrożenia

- [x] SEOHead.tsx - canonical bez trailing slasha
- [x] vercel.json - trailingSlash: false
- [x] _redirects - redirect /path/ → /path
- [x] sitemap.xml - wszystkie URL bez trailing slasha
- [x] robots.txt - blokuje parametry i paginację
- [ ] Google Search Console - prześlij sitemapę
- [ ] Sprawdź Coverage report za 7 dni

### Google Search Console - kroki

1. Przejdź do **Sitemaps**
2. Usuń starą sitemapę (jeśli jest)
3. Dodaj: `https://fotz.pl/sitemap.xml`
4. Poczekaj na przetworzenie (24-48h)
5. Sprawdź **Coverage** → szukaj "Duplicate, Google chose different canonical"
6. Jeśli są błędy, użyj **URL Inspection** dla przykładowych stron

### Konfiguracje serwerów

#### Nginx
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

#### Apache (.htaccess)
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

#### Cloudflare Page Rules
1. **www → non-www**: `www.fotz.pl/*` → `https://fotz.pl/$1` (301)
2. **Trailing slash**: `fotz.pl/*/` → `https://fotz.pl/$1` (301)
