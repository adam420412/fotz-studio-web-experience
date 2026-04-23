-- Nowe artykuły z BabyLoveGrowth (sync oraz webhook) mają lądować jako DRAFT,
-- a nie od razu jako published. Zmieniamy domyślną wartość `is_published`
-- na false, żeby każdy świeżo zinsertowany wiersz w blog_articles szedł
-- jako draft — publikacja odbywa się ręcznie przez panel admina.
--
-- WAŻNE: ta zmiana tylko domyślnej wartości NIE modyfikuje istniejących
-- rekordów. Artykuły już oznaczone jako published pozostają widoczne.

ALTER TABLE public.blog_articles
  ALTER COLUMN is_published SET DEFAULT false;
