ALTER TABLE public.blog_articles ALTER COLUMN is_published SET DEFAULT true;

UPDATE public.blog_articles
SET is_published = true,
    published_at = COALESCE(published_at, now())
WHERE is_published = false;