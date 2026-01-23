import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  schemaJson?: object | object[];
  keywords?: string;
  children?: React.ReactNode;
}

/**
 * SEO Head component using react-helmet-async that automatically adds:
 * - Title and meta description (truncated to 155 chars)
 * - Canonical URL based on current route (WITHOUT trailing slash - policy decision)
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
  noIndex = false,
  schemaJson,
  keywords,
  children,
}: SEOHeadProps) {
  const location = useLocation();
  
  // URL Policy: NO trailing slash (except homepage)
  // Remove any trailing slashes from pathname
  const cleanPath = location.pathname === "/" 
    ? "" 
    : location.pathname.replace(/\/+$/, "");
  
  // Canonical URL: use provided or generate from path
  const canonicalUrl = canonical || `https://fotz.pl${cleanPath}`;
  
  // Truncate description to 155 chars for meta (Google shows ~155-160)
  const metaDescription = description.length > 155 
    ? description.substring(0, 152) + "..." 
    : description;

  // Truncate title to 60 chars (Google shows ~50-60)
  const metaTitle = title.length > 60 
    ? title.substring(0, 57) + "..." 
    : title;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content="Fotz Studio" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* JSON-LD Structured Data */}
      {schemaJson && (
        Array.isArray(schemaJson) 
          ? schemaJson.map((schema, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            ))
          : <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      )}
      
      {children}
    </Helmet>
  );
}
