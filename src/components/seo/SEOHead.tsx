import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string; // Required - must be full URL like https://www.fotz-studio.pl/path
  ogImage?: string;
  ogType?: "website" | "article";
  og?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: "website" | "article" | string;
  };
  noIndex?: boolean;
  schemaJson?: object | object[];
  structuredData?: object | object[];
  schema?: object | object[];
  keywords?: string | string[];
  disableTitleTruncation?: boolean;
  children?: React.ReactNode;
}

/**
 * SEO Head component using react-helmet-async that automatically adds:
 * - Complete page title and meta description
 * - Canonical URL (must be provided as full URL)
 * - Open Graph tags
 * - Twitter Card tags
 * - Optional JSON-LD structured data
 * 
 * URL Policy: https://www.fotz-studio.pl/path (NO trailing slash)
 * - Matches sitemap.xml format
 * - Matches vercel.json trailingSlash: false
 * - Matches _redirects normalization
 */
export function SEOHead({
  title,
  description,
  canonical,
  ogImage = "https://www.fotz-studio.pl/og-image.jpg",
  ogType = "website",
  og,
  noIndex = false,
  schemaJson,
  structuredData,
  schema,
  keywords,
  children,
}: SEOHeadProps) {
  const canonicalUrl = new URL(canonical, "https://www.fotz-studio.pl").href.replace(/\/+$/, "");
  
  // Preserve complete, authored metadata. Search engines decide how much
  // to display; cutting strings here can remove the city or service name.
  const metaDescription = description.trim();
  const metaTitle = title.trim();

  const finalOgTitle = og?.title ?? metaTitle;
  const finalOgDescription = og?.description ?? metaDescription;
  const finalOgImage = og?.image ?? ogImage;
  const finalOgUrl = og?.url ?? canonicalUrl;
  const finalOgType = (og?.type as "website" | "article" | undefined) ?? ogType;
  const finalSchemaJson = schemaJson ?? structuredData ?? schema;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && (
        <meta
          name="keywords"
          content={Array.isArray(keywords) ? keywords.join(", ") : keywords}
        />
      )}
      {/* Canonical omitted for noIndex pages to avoid polluting the
          canonical graph (e.g. /404 pointing to itself creates phantom
          broken-page references in crawlers). */}
      {!noIndex && <link rel="canonical" href={canonicalUrl} />}
      
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:type" content={finalOgType} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content="Fotz Studio" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      
      {/* JSON-LD Structured Data */}
      {finalSchemaJson && (
        Array.isArray(finalSchemaJson) 
          ? finalSchemaJson.map((schema, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            ))
          : <script type="application/ld+json">{JSON.stringify(finalSchemaJson)}</script>
      )}
      
      {children}
    </Helmet>
  );
}
