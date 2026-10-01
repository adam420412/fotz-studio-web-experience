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
  const normalizedItems: BreadcrumbItem[] = items.length > 0
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

  const trail = normalizedItems.filter(item => !["/", "https://fotz.pl", "https://fotz.pl/"].includes(item.href ?? item.url ?? item.path ?? ""));

  return (
    <nav aria-label="Ścieżka nawigacji" className="container-wide px-6 md:px-12 pt-28 pb-4">
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
        
        {trail.map((item, index) => (
          <li key={index} className="flex min-w-0 items-center gap-2">
            <ChevronRight aria-hidden="true" className="w-3.5 h-3.5 shrink-0" />
            {(item.href ?? item.url ?? item.path) ? (
              <Link 
                to={(item.href ?? item.url ?? item.path) as string}
                className="hover:text-foreground transition-colors"
              >
                {item.label ?? item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground font-medium break-words">{item.label ?? item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
