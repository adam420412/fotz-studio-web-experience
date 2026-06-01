
-- Add cluster taxonomy to blog_articles
ALTER TABLE public.blog_articles
  ADD COLUMN IF NOT EXISTS cluster_slug TEXT,
  ADD COLUMN IF NOT EXISTS parent_pillar_slug TEXT,
  ADD COLUMN IF NOT EXISTS target_keyword TEXT;

CREATE INDEX IF NOT EXISTS idx_blog_articles_cluster_slug ON public.blog_articles(cluster_slug);
CREATE INDEX IF NOT EXISTS idx_blog_articles_parent_pillar_slug ON public.blog_articles(parent_pillar_slug);

-- Auto-assign sequential external_id for new rows so manual inserts don't collide
CREATE SEQUENCE IF NOT EXISTS public.blog_articles_external_id_seq;
SELECT setval('public.blog_articles_external_id_seq',
  GREATEST(COALESCE((SELECT MAX(external_id) FROM public.blog_articles), 0), 1000000));
ALTER TABLE public.blog_articles
  ALTER COLUMN external_id SET DEFAULT nextval('public.blog_articles_external_id_seq');

-- Job queue for topical map brief generation
CREATE TABLE IF NOT EXISTS public.topical_brief_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pillar_slug TEXT NOT NULL,
  cluster_slug TEXT NOT NULL,
  brief_filename TEXT NOT NULL,
  target_keyword TEXT NOT NULL,
  target_slug TEXT NOT NULL UNIQUE,
  brief_markdown TEXT NOT NULL,
  search_intent TEXT,
  word_count_target INTEGER DEFAULT 1500,
  status TEXT NOT NULL DEFAULT 'pending',
  attempts INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  generated_article_id UUID REFERENCES public.blog_articles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_topical_brief_jobs_status ON public.topical_brief_jobs(status);
CREATE INDEX IF NOT EXISTS idx_topical_brief_jobs_cluster ON public.topical_brief_jobs(cluster_slug);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.topical_brief_jobs TO authenticated;
GRANT ALL ON public.topical_brief_jobs TO service_role;

ALTER TABLE public.topical_brief_jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage topical brief jobs"
  ON public.topical_brief_jobs
  FOR ALL
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Trigger to keep updated_at fresh
DROP TRIGGER IF EXISTS trg_topical_brief_jobs_updated ON public.topical_brief_jobs;
CREATE TRIGGER trg_topical_brief_jobs_updated
  BEFORE UPDATE ON public.topical_brief_jobs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
