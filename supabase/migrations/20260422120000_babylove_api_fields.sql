-- Extend blog_articles with fields returned by the BabyLoveGrowth REST API
-- (excerpt, seedKeyword, keywords, jsonLd, faqJsonLd) and sync bookkeeping.

ALTER TABLE public.blog_articles
  ADD COLUMN IF NOT EXISTS excerpt           TEXT,
  ADD COLUMN IF NOT EXISTS seed_keyword      TEXT,
  ADD COLUMN IF NOT EXISTS keywords          JSONB,
  ADD COLUMN IF NOT EXISTS json_ld           JSONB,
  ADD COLUMN IF NOT EXISTS faq_json_ld       JSONB,
  ADD COLUMN IF NOT EXISTS updated_at        TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ADD COLUMN IF NOT EXISTS last_synced_at    TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS sync_source       TEXT;

-- Keep updated_at in sync on every row update (public.update_updated_at_column already exists).
DROP TRIGGER IF EXISTS update_blog_articles_updated_at ON public.blog_articles;
CREATE TRIGGER update_blog_articles_updated_at
BEFORE UPDATE ON public.blog_articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- GIN index on keywords makes "articles tagged with X" queries cheap.
CREATE INDEX IF NOT EXISTS idx_blog_articles_keywords ON public.blog_articles USING GIN (keywords);
