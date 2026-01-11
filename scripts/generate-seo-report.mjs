/**
 * SEO Report Generator for Fotz Studio
 * Generates JSON/CSV reports for all sitemap URLs
 * Run: node scripts/generate-seo-report.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All URLs from sitemap.xml
const sitemapUrls = [
  // Core Pages
  { url: "/", name: "Strona główna", type: "core" },
  { url: "/uslugi", name: "Usługi", type: "core" },
  { url: "/realizacje", name: "Realizacje", type: "core" },
  { url: "/kontakt", name: "Kontakt", type: "core" },
  { url: "/o-nas", name: "O nas", type: "core" },
  { url: "/dla-kogo", name: "Dla kogo", type: "core" },
  { url: "/cennik", name: "Cennik", type: "core" },
  { url: "/faq", name: "FAQ", type: "core" },
  { url: "/kariera", name: "Kariera", type: "core" },
  
  // Services
  { url: "/strony-internetowe", name: "Strony internetowe", type: "service" },
  { url: "/social-media", name: "Social Media", type: "service" },
  { url: "/kampanie-reklamowe", name: "Kampanie reklamowe", type: "service" },
  { url: "/pozycjonowanie", name: "Pozycjonowanie SEO", type: "service" },
  { url: "/pozycjonowanie-google-maps", name: "Google Maps", type: "service" },
  { url: "/identyfikacja-wizualna", name: "Identyfikacja wizualna", type: "service" },
  { url: "/agencja-graficzna", name: "Agencja graficzna", type: "service" },
  { url: "/spoty-reklamowe", name: "Spoty reklamowe", type: "service" },
  { url: "/wizualizacje-3d", name: "Wizualizacje 3D", type: "service" },
  { url: "/ecommerce-tworzenie-sklepu", name: "E-commerce", type: "service" },
  { url: "/content-marketing", name: "Content Marketing", type: "service" },
  { url: "/kompleksowa-obsluga-marketingowa", name: "Kompleksowa obsługa", type: "service" },
  { url: "/studio-podcastowe", name: "Studio podcastowe", type: "service" },
  { url: "/fotograf-poznan", name: "Fotograf Poznań", type: "service" },
  { url: "/fotografia-z-drona", name: "Fotografia z drona", type: "service" },
  { url: "/produkcja-filmow-poznan", name: "Produkcja filmów", type: "service" },
  { url: "/landing-page", name: "Landing Page", type: "service" },
  { url: "/audyt-seo", name: "Audyt SEO", type: "service" },
  
  // Ads Platforms
  { url: "/google-ads", name: "Google Ads", type: "ads" },
  { url: "/facebook-ads", name: "Facebook Ads", type: "ads" },
  { url: "/instagram-ads", name: "Instagram Ads", type: "ads" },
  { url: "/tiktok-ads", name: "TikTok Ads", type: "ads" },
  { url: "/linkedin-ads", name: "LinkedIn Ads", type: "ads" },
  { url: "/youtube-ads", name: "YouTube Ads", type: "ads" },
  { url: "/facebook-instagram-ads", name: "Meta Ads", type: "ads" },
  
  // Case Studies
  { url: "/realizacje/enea-stadion", name: "Case Study Enea", type: "casestudy" },
  { url: "/realizacje/klagem", name: "Case Study Klagem", type: "casestudy" },
  { url: "/realizacje/gierki", name: "Case Study Gierki", type: "casestudy" },
  { url: "/realizacje/mechanica", name: "Case Study Mechanica", type: "casestudy" },
  { url: "/realizacje/lauvjah", name: "Case Study Lauvjah", type: "casestudy" },
  { url: "/realizacje/przedszkole", name: "Case Study Przedszkole", type: "casestudy" },
  { url: "/realizacje/celsjusz", name: "Case Study Celsjusz", type: "casestudy" },
  { url: "/realizacje/fps", name: "Case Study FPS", type: "casestudy" },
  { url: "/realizacje/rppg", name: "Case Study RPPG", type: "casestudy" },
  { url: "/realizacje/fabryka-virali", name: "Case Study Fabryka Virali", type: "casestudy" },
  { url: "/realizacje/friendly-gas", name: "Case Study Friendly Gas", type: "casestudy" },
  { url: "/realizacje/victory-cars", name: "Case Study Victory Cars", type: "casestudy" },
  { url: "/realizacje/stageplan", name: "Case Study Stage Plan", type: "casestudy" },
  { url: "/realizacje/cute-dumpling", name: "Case Study Cute Dumpling", type: "casestudy" },
  { url: "/realizacje/verthe", name: "Case Study Verthe", type: "casestudy" },
  { url: "/realizacje/apartamenty-chorwacja", name: "Case Study Apartamenty", type: "casestudy" },
  { url: "/realizacje/sookar", name: "Case Study Sookar", type: "casestudy" },
  { url: "/realizacje/graf", name: "Case Study Graf", type: "casestudy" },
  
  // Local Poznań Pages
  { url: "/agencja-marketingowa-poznan", name: "Agencja Marketingowa Poznań", type: "local" },
  { url: "/agencja-reklamowa-poznan", name: "Agencja Reklamowa Poznań", type: "local" },
  { url: "/agencja-marketingu-internetowego", name: "Agencja Marketingu Internetowego", type: "local" },
  { url: "/strony-internetowe-poznan", name: "Strony Poznań", type: "local" },
  { url: "/social-media-poznan", name: "Social Media Poznań", type: "local" },
  { url: "/pozycjonowanie-stron-poznan", name: "Pozycjonowanie Poznań", type: "local" },
  
  // City Pages (37+)
  { url: "/strony-internetowe-warszawa", name: "Strony Warszawa", type: "city" },
  { url: "/strony-internetowe-krakow", name: "Strony Kraków", type: "city" },
  { url: "/strony-internetowe-wroclaw", name: "Strony Wrocław", type: "city" },
  { url: "/strony-internetowe-gdansk", name: "Strony Gdańsk", type: "city" },
  { url: "/strony-internetowe-lodz", name: "Strony Łódź", type: "city" },
  { url: "/strony-internetowe-katowice", name: "Strony Katowice", type: "city" },
  { url: "/strony-internetowe-lublin", name: "Strony Lublin", type: "city" },
  { url: "/strony-internetowe-szczecin", name: "Strony Szczecin", type: "city" },
  { url: "/strony-internetowe-bydgoszcz", name: "Strony Bydgoszcz", type: "city" },
  { url: "/strony-internetowe-bialystok", name: "Strony Białystok", type: "city" },
  { url: "/strony-internetowe-rzeszow", name: "Strony Rzeszów", type: "city" },
  { url: "/strony-internetowe-torun", name: "Strony Toruń", type: "city" },
  { url: "/strony-internetowe-kielce", name: "Strony Kielce", type: "city" },
  { url: "/strony-internetowe-olsztyn", name: "Strony Olsztyn", type: "city" },
  { url: "/strony-internetowe-opole", name: "Strony Opole", type: "city" },
  { url: "/strony-internetowe-gliwice", name: "Strony Gliwice", type: "city" },
  { url: "/strony-internetowe-czestochowa", name: "Strony Częstochowa", type: "city" },
  { url: "/strony-internetowe-radom", name: "Strony Radom", type: "city" },
  { url: "/strony-internetowe-sosnowiec", name: "Strony Sosnowiec", type: "city" },
  { url: "/strony-internetowe-rybnik", name: "Strony Rybnik", type: "city" },
  { url: "/strony-internetowe-tychy", name: "Strony Tychy", type: "city" },
  { url: "/strony-internetowe-plock", name: "Strony Płock", type: "city" },
  { url: "/strony-internetowe-tarnow", name: "Strony Tarnów", type: "city" },
  { url: "/strony-internetowe-koszalin", name: "Strony Koszalin", type: "city" },
  { url: "/strony-internetowe-konin", name: "Strony Konin", type: "city" },
  { url: "/strony-internetowe-kalisz", name: "Strony Kalisz", type: "city" },
  { url: "/strony-internetowe-elblag", name: "Strony Elbląg", type: "city" },
  { url: "/strony-internetowe-legnica", name: "Strony Legnica", type: "city" },
  { url: "/strony-internetowe-zielona-gora", name: "Strony Zielona Góra", type: "city" },
  { url: "/strony-internetowe-kamionki", name: "Strony Kamionki", type: "city" },
  
  // Industry Pages
  { url: "/dla-kogo/firmy-lokalne", name: "Firmy lokalne", type: "industry" },
  { url: "/dla-kogo/ecommerce", name: "E-commerce", type: "industry" },
  { url: "/dla-kogo/marki-premium", name: "Marki premium", type: "industry" },
  { url: "/dla-kogo/instytucje", name: "Instytucje", type: "industry" },
  { url: "/dla-kogo/medyczny", name: "Marketing medyczny", type: "industry" },
  { url: "/dla-kogo/gastronomia", name: "Marketing gastronomia", type: "industry" },
  { url: "/dla-kogo/beauty", name: "Marketing beauty", type: "industry" },
  { url: "/dla-kogo/nieruchomosci", name: "Marketing nieruchomości", type: "industry" },
  { url: "/dla-kogo/automotive", name: "Marketing automotive", type: "industry" },
  { url: "/dla-kogo/edukacja", name: "Marketing edukacja", type: "industry" },
  { url: "/dla-kogo/prawo-finanse", name: "Marketing prawo finanse", type: "industry" },
  { url: "/dla-kogo/it", name: "Marketing IT", type: "industry" },
  { url: "/dla-kogo/produkcja", name: "Marketing produkcja", type: "industry" },
  { url: "/dla-kogo/ngo", name: "Marketing NGO", type: "industry" },
  { url: "/dla-kogo/turystyka", name: "Marketing turystyka", type: "industry" },
  
  // Blog
  { url: "/blog", name: "Blog", type: "blog" },
  { url: "/blog/ai-marketing", name: "AI Marketing", type: "blog" },
  { url: "/blog/b2b-vs-b2c", name: "B2B vs B2C", type: "blog" },
  { url: "/blog/branding-startupy", name: "Branding startupy", type: "blog" },
  { url: "/blog/budzet-marketingowy", name: "Budżet marketingowy", type: "blog" },
  { url: "/blog/copywriting-landing", name: "Copywriting landing", type: "blog" },
  { url: "/blog/email-marketing", name: "Email marketing", type: "blog" },
  { url: "/blog/google-analytics-4", name: "Google Analytics 4", type: "blog" },
  { url: "/blog/google-vs-facebook", name: "Google vs Facebook", type: "blog" },
  { url: "/blog/influencer-marketing", name: "Influencer marketing", type: "blog" },
  { url: "/blog/kampania-reklamowa", name: "Kampania reklamowa", type: "blog" },
  { url: "/blog/koszt-strony", name: "Koszt strony", type: "blog" },
  { url: "/blog/landing-page", name: "Landing page", type: "blog" },
  { url: "/blog/marketing-automation", name: "Marketing automation", type: "blog" },
  { url: "/blog/personal-branding-linkedin", name: "Personal branding", type: "blog" },
  { url: "/blog/psychologia-cen", name: "Psychologia cen", type: "blog" },
  { url: "/blog/reels-vs-tiktok", name: "Reels vs TikTok", type: "blog" },
  { url: "/blog/remarketing", name: "Remarketing", type: "blog" },
  { url: "/blog/seo-ecommerce", name: "SEO e-commerce", type: "blog" },
  { url: "/blog/seo-lokalne-poznan", name: "SEO lokalne Poznań", type: "blog" },
  { url: "/blog/tiktok-biznes", name: "TikTok biznes", type: "blog" },
  { url: "/blog/ux-ecommerce", name: "UX e-commerce", type: "blog" },
  { url: "/blog/video-marketing", name: "Video marketing", type: "blog" },
  
  // Tools
  { url: "/quiz", name: "Quiz", type: "tool" },
  { url: "/kalkulator-cen", name: "Kalkulator cen", type: "tool" },
  { url: "/kalkulator-roi", name: "Kalkulator ROI", type: "tool" },
  { url: "/generator-briefu", name: "Generator briefu", type: "tool" },
  { url: "/slownik-marketingowy", name: "Słownik marketingowy", type: "tool" },
  { url: "/zasoby", name: "Zasoby", type: "tool" },
  { url: "/poradniki", name: "Poradniki", type: "tool" },
  
  // Legal & Other
  { url: "/polityka-prywatnosci", name: "Polityka prywatności", type: "legal" },
  { url: "/regulamin", name: "Regulamin", type: "legal" },
  { url: "/podziekowanie", name: "Podziękowanie", type: "other" },
  { url: "/zainstaluj", name: "Zainstaluj PWA", type: "other" },
  
  // Academy
  { url: "/akademia", name: "Akademia", type: "academy" },
  { url: "/akademia/auth", name: "Akademia Auth", type: "academy" },
];

// Schema components mapping by page type
const schemaRecommendations = {
  core: ["BreadcrumbSchema", "LocalBusinessSchema", "OrganizationSchema"],
  service: ["BreadcrumbSchema", "ServiceSchema", "FAQSchema"],
  ads: ["BreadcrumbSchema", "ServiceSchema"],
  casestudy: ["BreadcrumbSchema", "ArticleSchema"],
  local: ["BreadcrumbSchema", "LocalBusinessSchema", "ServiceSchema", "FAQSchema"],
  city: ["BreadcrumbSchema", "ServiceSchema", "FAQSchema"],
  industry: ["BreadcrumbSchema", "ServiceSchema", "FAQSchema"],
  blog: ["BreadcrumbSchema", "ArticleSchema", "FAQSchema"],
  tool: ["BreadcrumbSchema", "WebPageSchema"],
  legal: ["BreadcrumbSchema", "WebPageSchema"],
  other: ["BreadcrumbSchema"],
  academy: ["BreadcrumbSchema", "WebPageSchema"],
};

// Pages with confirmed Schema implementation
const pagesWithSchema = [
  // Core pages
  "/",
  "/uslugi",
  "/kontakt",
  "/cennik",
  "/faq",
  
  // Services with Schema
  "/strony-internetowe",
  "/social-media",
  "/kampanie-reklamowe",
  "/pozycjonowanie",
  "/pozycjonowanie-google-maps",
  "/identyfikacja-wizualna",
  "/agencja-graficzna",
  "/spoty-reklamowe",
  "/wizualizacje-3d",
  "/ecommerce-tworzenie-sklepu",
  "/content-marketing",
  "/kompleksowa-obsluga-marketingowa",
  "/fotograf-poznan",
  "/fotografia-z-drona",
  "/produkcja-filmow-poznan",
  "/landing-page",
  "/audyt-seo",
  
  // Ads platforms
  "/google-ads",
  "/facebook-ads",
  "/instagram-ads",
  "/tiktok-ads",
  "/linkedin-ads",
  "/youtube-ads",
  "/facebook-instagram-ads",
  
  // Local pages
  "/agencja-marketingowa-poznan",
  "/agencja-reklamowa-poznan",
  "/strony-internetowe-poznan",
  "/social-media-poznan",
  "/pozycjonowanie-stron-poznan",
  
  // City pages (all have Schema)
  "/strony-internetowe-warszawa",
  "/strony-internetowe-krakow",
  "/strony-internetowe-wroclaw",
  "/strony-internetowe-gdansk",
  "/strony-internetowe-lodz",
  "/strony-internetowe-katowice",
  "/strony-internetowe-lublin",
  "/strony-internetowe-szczecin",
  "/strony-internetowe-bydgoszcz",
  "/strony-internetowe-bialystok",
  "/strony-internetowe-rzeszow",
  "/strony-internetowe-torun",
  "/strony-internetowe-kielce",
  "/strony-internetowe-olsztyn",
  "/strony-internetowe-opole",
  "/strony-internetowe-gliwice",
  "/strony-internetowe-czestochowa",
  "/strony-internetowe-radom",
  "/strony-internetowe-sosnowiec",
  "/strony-internetowe-rybnik",
  "/strony-internetowe-tychy",
  "/strony-internetowe-plock",
  "/strony-internetowe-tarnow",
  "/strony-internetowe-koszalin",
  "/strony-internetowe-konin",
  "/strony-internetowe-kalisz",
  "/strony-internetowe-elblag",
  "/strony-internetowe-legnica",
  "/strony-internetowe-zielona-gora",
  "/strony-internetowe-kamionki",
  
  // Industry pages
  "/dla-kogo/firmy-lokalne",
  "/dla-kogo/ecommerce",
  "/dla-kogo/marki-premium",
  "/dla-kogo/instytucje",
  "/dla-kogo/medyczny",
  "/dla-kogo/gastronomia",
  "/dla-kogo/beauty",
  "/dla-kogo/nieruchomosci",
  "/dla-kogo/automotive",
  "/dla-kogo/edukacja",
  "/dla-kogo/prawo-finanse",
  "/dla-kogo/it",
  "/dla-kogo/produkcja",
  "/dla-kogo/ngo",
  "/dla-kogo/turystyka",
  
  // Case Studies (all have Schema now)
  "/realizacje/enea-stadion",
  "/realizacje/klagem",
  "/realizacje/gierki",
  "/realizacje/mechanica",
  "/realizacje/lauvjah",
  "/realizacje/przedszkole",
  "/realizacje/celsjusz",
  "/realizacje/fps",
  "/realizacje/rppg",
  "/realizacje/fabryka-virali",
  "/realizacje/friendly-gas",
  "/realizacje/victory-cars",
  "/realizacje/stageplan",
  "/realizacje/cute-dumpling",
  "/realizacje/verthe",
  "/realizacje/apartamenty-chorwacja",
  "/realizacje/sookar",
  "/realizacje/graf",
  
  // Core pages with Schema
  "/o-nas",
  "/dla-kogo",
  
  // Blog
  "/blog",
];

function generateReport() {
  const report = {
    generated: new Date().toISOString(),
    summary: {
      totalPages: sitemapUrls.length,
      withSchema: 0,
      withoutSchema: 0,
      byType: {}
    },
    pages: []
  };

  // Count pages by type
  sitemapUrls.forEach(page => {
    if (!report.summary.byType[page.type]) {
      report.summary.byType[page.type] = { total: 0, withSchema: 0 };
    }
    report.summary.byType[page.type].total++;
    
    const hasSchema = pagesWithSchema.includes(page.url);
    if (hasSchema) {
      report.summary.withSchema++;
      report.summary.byType[page.type].withSchema++;
    } else {
      report.summary.withoutSchema++;
    }

    report.pages.push({
      url: `https://fotz.pl${page.url}`,
      name: page.name,
      type: page.type,
      hasSchema,
      recommendedSchemas: schemaRecommendations[page.type] || ["BreadcrumbSchema"],
      status: hasSchema ? "✅ OK" : "⚠️ Missing Schema",
      priority: hasSchema ? "low" : (page.type === "casestudy" || page.type === "core" ? "high" : "medium")
    });
  });

  return report;
}

function toCSV(report) {
  const headers = ["URL", "Name", "Type", "Has Schema", "Recommended Schemas", "Status", "Priority"];
  const rows = report.pages.map(p => [
    p.url,
    p.name,
    p.type,
    p.hasSchema ? "Yes" : "No",
    p.recommendedSchemas.join("; "),
    p.status,
    p.priority
  ]);
  
  return [headers.join(","), ...rows.map(r => r.map(c => `"${c}"`).join(","))].join("\n");
}

// Generate reports
const report = generateReport();

// Write JSON report
const jsonPath = path.join(__dirname, '..', 'seo-report.json');
fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
console.log(`✅ JSON report saved to: ${jsonPath}`);

// Write CSV report
const csvPath = path.join(__dirname, '..', 'seo-report.csv');
fs.writeFileSync(csvPath, toCSV(report));
console.log(`✅ CSV report saved to: ${csvPath}`);

// Print summary
console.log("\n📊 SEO REPORT SUMMARY");
console.log("=".repeat(50));
console.log(`Total pages: ${report.summary.totalPages}`);
console.log(`With Schema: ${report.summary.withSchema} (${((report.summary.withSchema / report.summary.totalPages) * 100).toFixed(1)}%)`);
console.log(`Missing Schema: ${report.summary.withoutSchema}`);
console.log("\nBy Type:");
Object.entries(report.summary.byType).forEach(([type, data]) => {
  const percent = ((data.withSchema / data.total) * 100).toFixed(0);
  console.log(`  ${type}: ${data.withSchema}/${data.total} (${percent}%)`);
});

// List high priority pages
const highPriority = report.pages.filter(p => p.priority === "high");
if (highPriority.length > 0) {
  console.log("\n🔴 HIGH PRIORITY (Missing Schema):");
  highPriority.forEach(p => console.log(`  - ${p.name}: ${p.url}`));
}
