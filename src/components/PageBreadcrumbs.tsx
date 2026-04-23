import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label?: string;
  href?: string;
  // Allow alternative shape used by some pages
  name?: string;
  url?: string;
}

interface PageBreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export function PageBreadcrumbs({ items = [] }: PageBreadcrumbsProps) {
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
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5" />
            {(item.href ?? item.url) ? (
              <Link 
                to={(item.href ?? item.url) as string}
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
