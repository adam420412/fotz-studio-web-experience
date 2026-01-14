import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

/**
 * SEO Head component that automatically adds:
 * - Title and meta description (truncated to 155 chars)
 * - Canonical URL based on current route (without trailing slash)
 * - Open Graph tags
 * - Twitter Card tags
 */
export function SEOHead({
  title,
  description,
  keywords,
  ogImage = "https://fotz.pl/og-image.jpg",
  noindex = false,
  children,
}: SEOHeadProps) {
  const location = useLocation();
  
  // Remove trailing slash from pathname - always use clean URLs without trailing slash
  const cleanPath = location.pathname === "/" 
    ? "" 
    : location.pathname.replace(/\/$/, "");
  // Root URL should be https://fotz.pl without trailing slash for consistency
  const canonicalUrl = `https://fotz.pl${cleanPath}`;
  
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
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
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
      
      {children}
    </Helmet>
  );
}
