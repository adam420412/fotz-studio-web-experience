import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string; // Required - must be full URL like https://fotz.pl/path
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
  children?: React.ReactNode;
}

/**
 * SEO Head component using react-helmet-async that automatically adds:
 * - Title and meta description (truncated to 155 chars)
 * - Canonical URL (must be provided as full URL)
 * - Open Graph tags
 * - Twitter Card tags
 * - Optional JSON-LD structured data
 * 
 * URL Policy: https://fotz.pl/path (NO trailing slash)
 * - Matches sitemap.xml format
 * - Matches vercel.json trailingSlash: false
 * - Matches _redirects normalization
 */
export function SEOHead({
  title,
  description,
  canonical,
  ogImage = "https://fotz.pl/og-image.jpg",
  ogType = "website",
  og,
  noIndex = false,
  schemaJson,
  structuredData,
  schema,
  keywords,
  children,
}: SEOHeadProps) {
  // Ensure canonical has no trailing slash (except for homepage)
  const canonicalUrl = canonical === "https://fotz.pl/" 
    ? "https://fotz.pl" 
    : canonical.replace(/\/+$/, "");
  
  // Truncate description to 155 chars for meta (Google shows ~155-160)
  const metaDescription = description.length > 155 
    ? description.substring(0, 152) + "..." 
    : description;

  // Truncate title to 60 chars (Google shows ~50-60)
  const metaTitle = title.length > 60 
    ? title.substring(0, 57) + "..." 
    : title;

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
      <link rel="canonical" href={canonicalUrl} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
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
