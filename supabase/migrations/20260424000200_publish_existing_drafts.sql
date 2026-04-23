-- Jednorazowa publikacja wszystkiego, co aktualnie siedzi jako draft
-- w `blog_articles`. User chciał: "wrzucmy wszystkie, które są w drafcie
-- na teraz i czekają".
--
-- Kontekst: poprzednia migracja (20260424000100_babylove_drafts_default.sql)
-- zmienia DEFAULT `is_published` na false — tzn. OD TERAZ nowe artykuły z
-- BabyLoveGrowth wpadają jako draft. Ta migracja działa raz, na dzień
-- uruchomienia, i publikuje wszystko co czeka w drafcie w tym momencie.
-- Przyszłe drafty (już po zdeployowaniu nowego `babylove-sync`/
-- `babylove-webhook`) zostaną — admin odklika je sam.
--
-- `published_at` ustawiamy tylko jeżeli było NULL — żeby zachować
-- oryginalną datę publikacji artykułów, które kiedyś były publiczne,
-- zostały cofnięte do drafta, i teraz znowu publikujemy.

UPDATE public.blog_articles
SET
  is_published = true,
  published_at = COALESCE(published_at, now())
WHERE is_published = false;
