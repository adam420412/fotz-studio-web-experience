import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label?: string;
  href?: string;
  path?: string;
  // Allow alternative shape used by some pages
  name?: string;
  url?: string;
}

interface PageBreadcrumbsProps {
  items?: BreadcrumbItem[];
  path?: string;
}

export function PageBreadcrumbs({ items = [], path }: PageBreadcrumbsProps) {
  const normalizedItems = items.length > 0
    ? items
    : path
      ? path
          .split("/")
          .filter(Boolean)
          .map((segment, index, segments) => ({
            label: segment.replace(/-/g, " "),
            href: `/${segments.slice(0, index + 1).join("/")}`,
          }))
      : [];

  return (
    <nav aria-label="Breadcrumb" className="container-wide px-6 md:px-12 pt-32 pb-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link 
            to="/" 
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only md:not-sr-only">Strona główna</span>
          </Link>
        </li>
        
        {normalizedItems.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5" />
            {(item.href ?? item.url ?? item.path) ? (
              <Link 
                to={(item.href ?? item.url ?? item.path) as string}
                className="hover:text-foreground transition-colors"
              >
                {item.label ?? item.name}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label ?? item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
