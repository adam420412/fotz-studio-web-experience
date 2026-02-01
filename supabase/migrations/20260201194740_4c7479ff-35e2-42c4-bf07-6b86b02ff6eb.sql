-- Create blog_articles table for BabyLove Growth webhook integration
CREATE TABLE public.blog_articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  external_id INTEGER UNIQUE NOT NULL,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  meta_description TEXT,
  content_html TEXT,
  content_markdown TEXT,
  hero_image_url TEXT,
  language_code TEXT DEFAULT 'pl',
  public_url TEXT,
  external_created_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  is_published BOOLEAN NOT NULL DEFAULT true
);

-- Enable RLS
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;

-- Public read access for everyone (blog is public)
CREATE POLICY "Anyone can read published articles"
ON public.blog_articles
FOR SELECT
USING (is_published = true);

-- Create index for faster slug lookups
CREATE INDEX idx_blog_articles_slug ON public.blog_articles(slug);

-- Create index for published articles ordering
CREATE INDEX idx_blog_articles_published ON public.blog_articles(is_published, published_at DESC);