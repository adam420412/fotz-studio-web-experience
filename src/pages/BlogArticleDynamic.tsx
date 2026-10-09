import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredData";
import { useBlogArticle } from "@/hooks/useBlogArticles";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { formatBlogDate } from "@/lib/blog-bootstrap.mjs";
import { getBlogImage } from "@/lib/blog-images.mjs";
import blogImages from "@/data/blog-images.json";
import { getBlogMetadata, normalizeSchemaUrls, prepareBlogHtml } from "@/lib/blog-seo.mjs";

/**
 * BabyLove may store keywords as `["a","b"]`, `{ keywords: ["a","b"] }`,
 * or a comma-separated string. Normalise to a clean string[].
 */
function extractKeywords(raw: unknown): string[] {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.filter((v): v is string => typeof v === "string" && v.trim().length > 0);
  }
  if (typeof raw === "string") {
    return raw.split(",").map((s) => s.trim()).filter(Boolean);
  }
  if (typeof raw === "object") {
    const inner = (raw as Record<string, unknown>).keywords;
    if (inner) return extractKeywords(inner);
  }
  return [];
}

export default function BlogArticleDynamic() {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error, refetch } = useBlogArticle(slug || "");

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

  if (error && !article) {
    return (
      <Layout>
        <div className="pt-40 pb-20 section-padding bg-background">
          <div className="container-wide max-w-4xl" role="alert">
            <h1 className="text-3xl font-heading font-bold mb-6">Nie udało się wczytać artykułu</h1>
            <p className="text-muted-foreground mb-6">Sprawdź połączenie i spróbuj ponownie.</p>
            <Button onClick={() => refetch()}>Spróbuj ponownie</Button>
            <Link to="/blog" className="underline ml-6">Wróć do bloga</Link>
          </div>
        </div>
      </Layout>
    );
  }

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const publishedDate = formatBlogDate(article.published_at);

  const canonicalUrl = `https://www.fotz-studio.pl/blog/${article.slug}`;

  const keywordsList = extractKeywords(article.keywords);
  const seoKeywords = keywordsList.length ? keywordsList.join(", ") : undefined;

  const metadata = getBlogMetadata(article);
  const metaDescription = metadata.description;
  const lead = metadata.description;
  const isTestArticle = metadata.noIndex;

  const hasCmsArticleSchema = !!article.json_ld;
  const hasCmsFaqSchema = !!article.faq_json_ld;

  return (
    <Layout>
      <SEOHead
        title={metadata.title}
        description={metaDescription}
        canonical={canonicalUrl}
        ogImage={metadata.ogImage}
        ogType="article"
        noIndex={isTestArticle}
        keywords={seoKeywords}
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Blog", url: "https://www.fotz-studio.pl/blog" },
          { name: article.title, url: canonicalUrl },
        ]}/>
      {/* Prefer CMS-provided JSON-LD when available, otherwise emit our own. */}
      {!hasCmsArticleSchema && (
        <ArticleSchema
          title={article.title}
          description={metaDescription}
          url={canonicalUrl}
          image={metadata.ogImage}
          datePublished={article.published_at || article.created_at}
          dateModified={article.published_at || article.created_at}
          author="Zespół FOTZ"
        />
      )}
      {(hasCmsArticleSchema || hasCmsFaqSchema) && (
        <Helmet>
          {hasCmsArticleSchema && (
            <script type="application/ld+json">
              {JSON.stringify(normalizeSchemaUrls(article.json_ld))}
            </script>
          )}
          {hasCmsFaqSchema && (
            <script type="application/ld+json">
              {JSON.stringify(normalizeSchemaUrls(article.faq_json_ld))}
            </script>
          )}
        </Helmet>
      )}

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

            {lead && (
              <p className="text-xl text-muted-foreground mb-6">
                {lead}
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
                {...getBlogImage(article, blogImages)}
                alt={article.title}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
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
                __html: prepareBlogHtml(article.content_html, article.slug),
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
