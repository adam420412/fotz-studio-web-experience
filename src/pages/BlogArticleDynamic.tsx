import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";
import { useBlogArticle } from "@/hooks/useBlogArticles";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

export default function BlogArticleDynamic() {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useBlogArticle(slug || "");

  if (isLoading) {
    return (
      <Layout>
        <div className="pt-40 pb-20 section-padding bg-background">
          <div className="container-wide max-w-4xl">
            <Skeleton className="h-8 w-32 mb-6" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="h-[400px] w-full mb-8 rounded-2xl" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !article) {
    return <Navigate to="/blog" replace />;
  }

  const publishedDate = article.published_at
    ? format(new Date(article.published_at), "d MMMM yyyy", { locale: pl })
    : "";

  const canonicalUrl = `https://fotz.pl/blog/${article.slug}`;

  // Build a description of at least 120 chars for SEO
  const rawDesc = article.meta_description || article.title;
  const metaDescription = rawDesc.length >= 120
    ? rawDesc
    : `${rawDesc} — przeczytaj artykuł na blogu Fotz Studio i dowiedz się więcej o marketingu, SEO i tworzeniu stron internetowych.`;

  // Noindex test/draft articles with very short descriptions (likely test content)
  const isTestArticle = rawDesc.length < 80 && article.title.toLowerCase().includes("test");

  return (
    <Layout>
      <SEOHead
        title={`${article.title} | Blog FOTZ`}
        description={metaDescription}
        canonical={canonicalUrl}
        ogImage={article.hero_image_url || undefined}
        noIndex={isTestArticle}
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: article.title, url: canonicalUrl },
        ]}
      />
      <ArticleSchema
        title={article.title}
        description={metaDescription}
        url={canonicalUrl}
        image={article.hero_image_url || "https://fotz.pl/og-image.jpg"}
        datePublished={article.published_at || article.created_at}
        dateModified={article.published_at || article.created_at}
        author="Zespół FOTZ"
      />

      <article className="pt-40 pb-20 section-padding bg-background">
        <div className="container-wide max-w-4xl">
          {/* Back link */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Wróć do bloga
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              {article.title}
            </h1>

            {article.meta_description && (
              <p className="text-xl text-muted-foreground mb-6">
                {article.meta_description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              {publishedDate && (
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {publishedDate}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                ~5 min czytania
              </span>
            </div>
          </header>

          {/* Hero image */}
          {article.hero_image_url && (
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
              <img
                src={article.hero_image_url}
                alt={article.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          )}

          {/* Content */}
          {article.content_html && (
            <div
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-heading prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:my-1
                prose-img:rounded-xl
                prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{
                // Replace any <h1> tags in CMS content with <h2> to avoid duplicate H1 on page
                __html: article.content_html
                  .replace(/<h1(\s[^>]*)?>/gi, '<h2$1>')
                  .replace(/<\/h1>/gi, '</h2>'),
              }}
            />
          )}

          {/* CTA */}
          <div className="mt-16 p-8 bg-card rounded-2xl text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Potrzebujesz pomocy z marketingiem?
            </h3>
            <p className="text-muted-foreground mb-6">
              Skontaktuj się z nami i porozmawiajmy o Twojej strategii.
            </p>
            <Button asChild size="lg">
              <Link to="/kontakt">Umów konsultację</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
}
