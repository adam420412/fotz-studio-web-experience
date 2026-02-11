

## Przekierowanie /sitemap na /sitemap-index.xml

### Problem
Wejście na `/sitemap` pokazuje stronę 404, ponieważ React Router nie ma takiej trasy. Pliki XML sitemap istnieją, ale tylko pod pełnymi nazwami (np. `/sitemap-index.xml`).

### Rozwiazanie
Dodanie przekierowania 301 z `/sitemap` na `/sitemap-index.xml` w dwoch miejscach:

### Zmiany

1. **vercel.json** - dodanie w sekcji `redirects`:
   ```json
   { "source": "/sitemap", "destination": "/sitemap-index.xml", "permanent": true }
   ```

2. **public/_redirects** - dodanie przed regula SPA fallback:
   ```
   /sitemap /sitemap-index.xml 301
   ```

To zapewni, ze uzytkownik lub bot wchodzacy na `/sitemap` zostanie automatycznie przekierowany do glownego indeksu sitemap.

