import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Map routes to Polish labels
const routeLabels: Record<string, string> = {
  "": "Strona główna",
  "o-nas": "O nas",
  "kontakt": "Kontakt",
  "cennik": "Cennik",
  "realizacje": "Realizacje",
  "blog": "Blog",
  "faq": "FAQ",
  "kariera": "Kariera",
  "uslugi": "Usługi",
  "strony-internetowe": "Strony internetowe",
  "social-media": "Social Media",
  "pozycjonowanie": "Pozycjonowanie SEO",
  "identyfikacja-wizualna": "Identyfikacja wizualna",
  "content-marketing": "Content Marketing",
  "wizualizacje-3d": "Wizualizacje 3D",
  "ecommerce-tworzenie-sklepu": "E-commerce",
  "google-ads": "Google Ads",
  "facebook-ads": "Facebook Ads",
  "instagram-ads": "Instagram Ads",
  "tiktok-ads": "TikTok Ads",
  "linkedin-ads": "LinkedIn Ads",
  "youtube-ads": "YouTube Ads",
  "facebook-instagram-ads": "Meta Ads",
  "dla-kogo": "Dla kogo",
  "firmy-lokalne": "Firmy lokalne",
  "ecommerce": "E-commerce",
  "marki-premium": "Marki premium",
  "instytucje": "Instytucje",
  "branza-medyczna": "Branża medyczna",
  "gastronomia": "Gastronomia",
  "beauty-wellness": "Beauty & Wellness",
  "nieruchomosci": "Nieruchomości",
  "automotive": "Automotive",
  "edukacja": "Edukacja",
  "prawo-finanse": "Prawo & Finanse",
  "ecommerce-retail": "E-commerce & Retail",
  "it-saas": "IT & SaaS",
  "produkcja": "Produkcja",
  "ngo": "NGO & Fundacje",
  "turystyka": "Turystyka",
  "agencja-marketingowa-poznan": "Agencja marketingowa Poznań",
  "agencja-reklamowa-poznan": "Agencja reklamowa Poznań",
  "strony-internetowe-poznan": "Strony WWW Poznań",
  "social-media-poznan": "Social Media Poznań",
  "pozycjonowanie-stron-poznan": "SEO Poznań",
  "fotograf-poznan": "Fotograf Poznań",
  "produkcja-filmow-poznan": "Produkcja filmów Poznań",
  "polityka-prywatnosci": "Polityka prywatności",
  "regulamin": "Regulamin",
};

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const location = useLocation();

  // Auto-generate breadcrumbs from URL if not provided
  const breadcrumbItems: BreadcrumbItem[] = items || (() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const crumbs: BreadcrumbItem[] = [{ label: "Strona główna", href: "/" }];

    let currentPath = "";
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const label = routeLabels[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      crumbs.push({ label, href: currentPath });
    });

    return crumbs;
  })();

  // Don't show breadcrumbs on homepage
  if (location.pathname === "/") return null;

  // Schema data for SEO
  const schemaItems = breadcrumbItems.map((item) => ({
    name: item.label,
    url: `https://fotz.pl${item.href}`,
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav
        aria-label="Nawigacja okruszkowa"
        className={`py-3 text-sm ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={item.href} className="flex items-center">
                {index === 0 ? (
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-foreground font-medium truncate max-w-[200px]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors truncate max-w-[150px]"
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="w-4 h-4 mx-1 text-muted-foreground flex-shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
