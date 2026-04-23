import { Helmet } from "react-helmet-async";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  email?: string;
  phone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

export function OrganizationSchema({
  name = "Fotz Studio",
  url = "https://fotz.pl",
  logo = "https://fotz.pl/logo-fotz.jpg",
  description = "Agencja marketingowa i reklamowa - Twój partner marketingowy. Kompleksowe strategie marketingowe, kampanie dla firm, content i skuteczny marketing.",
  email = "adam@fotz.pl",
  phone = "+48790814814",
  address = {
    streetAddress: "Plac Wolności 16",
    addressLocality: "Poznań",
    postalCode: "61-739",
    addressCountry: "PL",
  },
  sameAs = [
    "https://www.facebook.com/fotzpoznan/",
    "https://www.instagram.com/fotz_studio/",
    "https://www.linkedin.com/company/fotz-studio/",
  ],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo: {
      "@type": "ImageObject",
      url: logo,
      width: 200,
      height: 60,
    },
    description,
    email,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    sameAs,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// LocalBusiness Schema for better local SEO
interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  priceRange?: string;
  openingHours?: string[];
}

// Maps day abbreviations to Schema.org full day names
const DAY_NAMES: Record<string, string> = {
  Mo: "Monday", Tu: "Tuesday", We: "Wednesday",
  Th: "Thursday", Fr: "Friday", Sa: "Saturday", Su: "Sunday",
};
const DAY_ORDER = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

// Expands "Mo-Fr" into ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
function expandDayRange(dayStr: string): string[] {
  const parts = dayStr.split(",").flatMap((part) => {
    const trimmed = part.trim();
    if (trimmed.includes("-")) {
      const [start, end] = trimmed.split("-");
      const startIdx = DAY_ORDER.indexOf(start.trim());
      const endIdx = DAY_ORDER.indexOf(end.trim());
      if (startIdx !== -1 && endIdx !== -1) {
        return DAY_ORDER.slice(startIdx, endIdx + 1).map((d) => DAY_NAMES[d]);
      }
    }
    return DAY_NAMES[trimmed] ? [DAY_NAMES[trimmed]] : [];
  });
  return parts;
}

export function LocalBusinessSchema({
  name = "Fotz Studio - Agencja Marketingowa Poznań",
  description = "Agencja marketingowa w Poznaniu. Strony internetowe, kampanie reklamowe, social media, produkcja filmowa i branding. Pomagamy firmom zdobywać klientów.",
  url = "https://fotz.pl",
  telephone = "+48790814814",
  email = "adam@fotz.pl",
  priceRange = "$$",
  openingHours = ["Mo-Fr 09:00-17:00"],
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://fotz.pl/#business",
    name,
    description,
    url,
    telephone,
    email,
    priceRange,
    image: {
      "@type": "ImageObject",
      url: "https://fotz.pl/logo-fotz.jpg",
      width: 200,
      height: 60,
    },
    logo: {
      "@type": "ImageObject",
      url: "https://fotz.pl/logo-fotz.jpg",
      width: 200,
      height: 60,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plac Wolności 16",
      addressLocality: "Poznań",
      postalCode: "61-739",
      addressRegion: "Wielkopolskie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4084,
      longitude: 16.9342,
    },
    openingHoursSpecification: openingHours.map((hours) => {
      const spaceIdx = hours.lastIndexOf(" ");
      const days = hours.substring(0, spaceIdx);
      const time = hours.substring(spaceIdx + 1);
      const dashIdx = time.lastIndexOf("-");
      const open = time.substring(0, dashIdx);
      const close = time.substring(dashIdx + 1);
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: expandDayRange(days),
        opens: open,
        closes: close,
      };
    }),
    sameAs: [
      "https://www.facebook.com/fotzpoznan/",
      "https://www.instagram.com/fotz_studio/",
      "https://www.linkedin.com/company/fotz-studio/",
      "https://www.youtube.com/@Studio-Fotz",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5.0,
      reviewCount: 47,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = "Fotz Studio",
  areaServed = "Poznań",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{ name?: string; url?: string; label?: string; href?: string }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name ?? item.label ?? "",
      item: item.url ?? item.href ?? "",
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface FAQSchemaProps {
  items: { question: string; answer: string }[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
}

export function WebPageSchema({ title, description, url }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: "Fotz Studio",
      logo: {
        "@type": "ImageObject",
        url: "https://fotz.pl/logo-fotz.jpg",
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface ArticleSchemaProps {
  title?: string;
  headline?: string;
  description: string;
  url?: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  authorName?: string;
}

export function ArticleSchema({
  title,
  headline,
  description,
  url = "https://fotz.pl",
  image = "https://fotz.pl/og-image.jpg",
  datePublished,
  dateModified,
  author = "Fotz Studio",
  authorName,
}: ArticleSchemaProps) {
  const finalTitle = title ?? headline ?? "";
  const finalAuthor = authorName ?? author;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: finalTitle.length > 110 ? finalTitle.substring(0, 107) + "..." : finalTitle,
    description,
    url,
    image: {
      "@type": "ImageObject",
      url: image,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: finalAuthor,
      url: "https://fotz.pl",
    },
    publisher: {
      "@type": "Organization",
      name: "Fotz Studio",
      url: "https://fotz.pl",
      logo: {
        "@type": "ImageObject",
        url: "https://fotz.pl/logo-fotz.jpg",
        width: 200,
        height: 60,
      },
    },
    inLanguage: "pl-PL",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
