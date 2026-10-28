# Publikacja artykułów i obsługa adresów

## Nowe artykuły — bez ponownego wdrożenia

Po publikacji wpisu w istniejącym CMS (`blog_articles.is_published = true`) jego nowy adres `/blog/<slug>` działa bez synchronizacji repozytorium. Dotyczy to także wpisów dostarczanych przez istniejącą integrację BabyLove.

Middleware zachowuje statyczne, przejrzane strony. Gdy adres bloga nie istnieje w manifeście, przekazuje go do `api/blog-article.js`. Funkcja używa wyłącznie publicznego klucza CMS i wybiera opublikowany rekord o dokładnie tym slugu. Renderuje pełny HTML tym samym komponentem i pakietem SSR co build: treść, canonical, meta, dane strukturalne, zdjęcie FOTZ i dane do hydratacji. HTML CMS jest oczyszczany ze skryptów, obsługi zdarzeń i niebezpiecznych odnośników.

`/sitemap-blog.xml` jest uzupełniany na żywo o nowe opublikowane adresy. Zachowuje dotychczasowe wpisy oraz daty przejrzanych stron, nie dubluje URL i pomija wpisy oznaczone przez regułę metadanych jako noindex. Lista CMS jest pobierana stronami, więc limit wierszy API nie obcina mapy.

Pamięć podręczna poprawnego artykułu i mapy trwa do 60 sekund, odpowiedzi 404 do 15 sekund. Szkic lub brak rekordu daje 404/noindex. Awaria CMS daje niebuforowane 503 z Retry-After, zamiast udawać usunięcie artykułu. Ten proces udostępnia wpisy już oznaczone w CMS jako opublikowane; nie generuje tekstów i nie zatwierdza ich jakości ani oceny NEURONwriter.

## Istniejące, przejrzane strony

Statyczne artykuły i zapisane snapshoty zachowują swoje poprawki redakcyjne. Aktualizacja lub wycofanie wpisu, który jest już w statycznym wdrożeniu, nadal wymaga odświeżenia snapshotów i wdrożenia. Nowe wpisy, których nie ma w snapshotach, odczytują status i treść na żywo.

1. Odśwież publiczne snapshoty przez `node scripts/sync-blog-seo.mjs`.
2. Przejrzyj różnice. Zachowaj świadome poprawki redakcyjne i zdjęcia FOTZ; synchronizacja pobiera wersję CMS.
3. Wykonaj build i audyt, zaktualizuj mapy przez `python3 scripts/sync-sitemaps.py` i `python3 scripts/sync-html-sitemap.py`, a następnie ponownie wykonaj build.
4. Uruchom `npm test`, `npm run typecheck`, `npm run seo:check` i `node scripts/check-live-blog-render.mjs`, przejrzyj, wdróż i sprawdź adresy publiczne.

## Kontrola i ograniczenia

- Nie przywracaj wildcardu, który przepuszcza każdy slug do SPA. Handler musi odróżniać brak rekordu od awarii CMS.
- Nie dodawaj `service_role` ani innych kluczy administracyjnych do konfiguracji publikacji. Build zapisuje w `.ssr/public-cms.json` tylko publiczny URL i klucz anon/publishable, już używany przez witrynę.
- Znane strony social media pozostają enumerowane. Nieznany hub zwraca 404; wycofana oferta studia podcastowego nadal 410.
- Test jednostkowy sprawdza brak wpisu → publikacja → wycofanie bez zmiany manifestu. Test po buildzie renderuje pełną stronę z fixture o nowym slugu bez połączenia z produkcyjną bazą i bez publikowania treści testowych.
- Publiczne wywołanie `/api/blog-article?slug=...` służy także kontroli renderera; dokument wskazuje canonical `/blog/...`.
