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
 * - Title and meta description
 * - Canonical URL based on current route
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
  const canonicalUrl = `https://fotz.pl${location.pathname}`;
  
  // Truncate description to 155 chars for meta
  const metaDescription = description.length > 155 
    ? description.substring(0, 152) + "..." 
    : description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pl_PL" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {children}
    </Helmet>
  );
}
