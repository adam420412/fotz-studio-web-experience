import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SEOAnalysisRequest {
  url: string;
}

interface SEOItem {
  label: string;
  status: "good" | "warning" | "error";
  value: string;
  recommendation?: string;
}

interface SEOCategory {
  name: string;
  score: number;
  maxScore: number;
  icon: string;
  items: SEOItem[];
}

interface SEOResult {
  url: string;
  score: number;
  categories: SEOCategory[];
  recommendations: string[];
}

function extractMetaContent(html: string, name: string): string | null {
  // Try name attribute
  const nameRegex = new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']*)["']`, "i");
  let match = html.match(nameRegex);
  if (match) return match[1];
  
  // Try content before name
  const reverseRegex = new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*name=["']${name}["']`, "i");
  match = html.match(reverseRegex);
  if (match) return match[1];
  
  return null;
}

function extractMetaProperty(html: string, property: string): string | null {
  const propRegex = new RegExp(`<meta[^>]*property=["']${property}["'][^>]*content=["']([^"']*)["']`, "i");
  let match = html.match(propRegex);
  if (match) return match[1];
  
  const reverseRegex = new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*property=["']${property}["']`, "i");
  match = html.match(reverseRegex);
  if (match) return match[1];
  
  return null;
}

function analyzeHTML(html: string, url: string): SEOResult {
  const categories: SEOCategory[] = [];
  const recommendations: string[] = [];
  let totalScore = 0;
  let maxTotalScore = 0;

  // 1. Title Analysis (max 15 points)
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  const titleItems: SEOItem[] = [];
  let titleScore = 0;

  if (title) {
    if (title.length >= 30 && title.length <= 60) {
      titleItems.push({ label: "Długość title", status: "good", value: `${title.length} znaków (idealna: 30-60)` });
      titleScore += 10;
    } else if (title.length > 0 && title.length < 30) {
      titleItems.push({ label: "Długość title", status: "warning", value: `${title.length} znaków (za krótki)`, recommendation: "Rozbuduj tytuł do 30-60 znaków" });
      titleScore += 5;
      recommendations.push("Rozbuduj tytuł strony do 30-60 znaków dla lepszej widoczności w wynikach wyszukiwania.");
    } else if (title.length > 60) {
      titleItems.push({ label: "Długość title", status: "warning", value: `${title.length} znaków (za długi)`, recommendation: "Skróć tytuł do max 60 znaków" });
      titleScore += 5;
      recommendations.push("Skróć tytuł strony do maksymalnie 60 znaków, aby nie był obcinany w wynikach Google.");
    }
    titleItems.push({ label: "Title tag", status: "good", value: title.substring(0, 50) + (title.length > 50 ? "..." : "") });
    titleScore += 5;
  } else {
    titleItems.push({ label: "Title tag", status: "error", value: "Brak", recommendation: "Dodaj unikalny tytuł strony" });
    recommendations.push("Dodaj unikalny tag <title> - to jeden z najważniejszych elementów SEO!");
  }

  categories.push({ name: "Title Tag", score: titleScore, maxScore: 15, icon: "FileText", items: titleItems });
  totalScore += titleScore;
  maxTotalScore += 15;

  // 2. Meta Description (max 15 points)
  const metaDesc = extractMetaContent(html, "description");
  const metaItems: SEOItem[] = [];
  let metaScore = 0;

  if (metaDesc) {
    if (metaDesc.length >= 120 && metaDesc.length <= 160) {
      metaItems.push({ label: "Długość opisu", status: "good", value: `${metaDesc.length} znaków (idealna: 120-160)` });
      metaScore += 10;
    } else if (metaDesc.length > 0 && metaDesc.length < 120) {
      metaItems.push({ label: "Długość opisu", status: "warning", value: `${metaDesc.length} znaków (za krótki)`, recommendation: "Rozbuduj do 120-160 znaków" });
      metaScore += 5;
      recommendations.push("Rozbuduj meta description do 120-160 znaków dla lepszego CTR.");
    } else if (metaDesc.length > 160) {
      metaItems.push({ label: "Długość opisu", status: "warning", value: `${metaDesc.length} znaków (za długi)`, recommendation: "Skróć do max 160 znaków" });
      metaScore += 5;
    }
    metaItems.push({ label: "Meta description", status: "good", value: metaDesc.substring(0, 60) + (metaDesc.length > 60 ? "..." : "") });
    metaScore += 5;
  } else {
    metaItems.push({ label: "Meta description", status: "error", value: "Brak", recommendation: "Dodaj meta description" });
    recommendations.push("Dodaj meta description - to tekst wyświetlany w wynikach wyszukiwania.");
  }

  categories.push({ name: "Meta Description", score: metaScore, maxScore: 15, icon: "FileText", items: metaItems });
  totalScore += metaScore;
  maxTotalScore += 15;

  // 3. Headings (max 20 points)
  const h1Matches = html.match(/<h1[^>]*>([^<]*)<\/h1>/gi) || [];
  const h2Matches = html.match(/<h2[^>]*>/gi) || [];
  const h3Matches = html.match(/<h3[^>]*>/gi) || [];
  const headingItems: SEOItem[] = [];
  let headingScore = 0;

  if (h1Matches.length === 1) {
    const h1Content = h1Matches[0].replace(/<[^>]*>/g, "").trim();
    headingItems.push({ label: "Nagłówek H1", status: "good", value: h1Content.substring(0, 40) + (h1Content.length > 40 ? "..." : "") });
    headingScore += 10;
  } else if (h1Matches.length === 0) {
    headingItems.push({ label: "Nagłówek H1", status: "error", value: "Brak", recommendation: "Dodaj jeden nagłówek H1" });
    recommendations.push("Dodaj jeden główny nagłówek H1 z kluczowym słowem.");
  } else {
    headingItems.push({ label: "Nagłówek H1", status: "warning", value: `${h1Matches.length} nagłówków H1`, recommendation: "Zostaw tylko jeden H1" });
    headingScore += 3;
    recommendations.push("Strona powinna mieć dokładnie jeden nagłówek H1.");
  }

  if (h2Matches.length > 0) {
    headingItems.push({ label: "Nagłówki H2", status: "good", value: `${h2Matches.length} nagłówków` });
    headingScore += 5;
  } else {
    headingItems.push({ label: "Nagłówki H2", status: "warning", value: "Brak", recommendation: "Dodaj nagłówki H2 dla struktury" });
  }

  if (h3Matches.length > 0) {
    headingItems.push({ label: "Nagłówki H3", status: "good", value: `${h3Matches.length} nagłówków` });
    headingScore += 5;
  } else {
    headingItems.push({ label: "Nagłówki H3", status: "warning", value: "Brak" });
    headingScore += 2;
  }

  categories.push({ name: "Struktura nagłówków", score: headingScore, maxScore: 20, icon: "Heading1", items: headingItems });
  totalScore += headingScore;
  maxTotalScore += 20;

  // 4. Open Graph (max 15 points)
  const ogTitle = extractMetaProperty(html, "og:title");
  const ogDesc = extractMetaProperty(html, "og:description");
  const ogImage = extractMetaProperty(html, "og:image");
  const ogItems: SEOItem[] = [];
  let ogScore = 0;

  if (ogTitle) {
    ogItems.push({ label: "og:title", status: "good", value: ogTitle.substring(0, 40) + (ogTitle.length > 40 ? "..." : "") });
    ogScore += 5;
  } else {
    ogItems.push({ label: "og:title", status: "error", value: "Brak", recommendation: "Dodaj og:title" });
  }

  if (ogDesc) {
    ogItems.push({ label: "og:description", status: "good", value: ogDesc.substring(0, 40) + (ogDesc.length > 40 ? "..." : "") });
    ogScore += 5;
  } else {
    ogItems.push({ label: "og:description", status: "error", value: "Brak", recommendation: "Dodaj og:description" });
  }

  if (ogImage) {
    ogItems.push({ label: "og:image", status: "good", value: "Ustawiony" });
    ogScore += 5;
  } else {
    ogItems.push({ label: "og:image", status: "error", value: "Brak", recommendation: "Dodaj og:image" });
    recommendations.push("Dodaj tagi Open Graph (og:title, og:description, og:image) dla lepszego udostępniania w social media.");
  }

  categories.push({ name: "Open Graph", score: ogScore, maxScore: 15, icon: "Share2", items: ogItems });
  totalScore += ogScore;
  maxTotalScore += 15;

  // 5. Technical SEO (max 20 points)
  const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const viewport = extractMetaContent(html, "viewport");
  const robotsMeta = extractMetaContent(html, "robots");
  const techItems: SEOItem[] = [];
  let techScore = 0;

  if (canonical) {
    techItems.push({ label: "Canonical URL", status: "good", value: "Ustawiony" });
    techScore += 7;
  } else {
    techItems.push({ label: "Canonical URL", status: "warning", value: "Brak", recommendation: "Dodaj canonical URL" });
    recommendations.push("Dodaj tag canonical, aby uniknąć problemów z duplikacją treści.");
  }

  if (viewport && viewport.includes("width=device-width")) {
    techItems.push({ label: "Mobile viewport", status: "good", value: "Poprawnie skonfigurowany" });
    techScore += 7;
  } else if (viewport) {
    techItems.push({ label: "Mobile viewport", status: "warning", value: "Niepełna konfiguracja" });
    techScore += 3;
  } else {
    techItems.push({ label: "Mobile viewport", status: "error", value: "Brak", recommendation: "Dodaj meta viewport" });
    recommendations.push("Dodaj meta viewport dla poprawnego wyświetlania na urządzeniach mobilnych.");
  }

  if (robotsMeta) {
    if (robotsMeta.includes("noindex")) {
      techItems.push({ label: "Robots meta", status: "error", value: "noindex - strona nie będzie indeksowana!", recommendation: "Usuń noindex" });
    } else {
      techItems.push({ label: "Robots meta", status: "good", value: robotsMeta });
      techScore += 6;
    }
  } else {
    techItems.push({ label: "Robots meta", status: "good", value: "Brak (domyślnie index, follow)" });
    techScore += 6;
  }

  categories.push({ name: "SEO Techniczne", score: techScore, maxScore: 20, icon: "Globe", items: techItems });
  totalScore += techScore;
  maxTotalScore += 20;

  // 6. Images (max 15 points)
  const imgMatches = html.match(/<img[^>]*>/gi) || [];
  const imgsWithAlt = imgMatches.filter(img => /alt=["'][^"']+["']/.test(img)).length;
  const imgsWithoutAlt = imgMatches.length - imgsWithAlt;
  const imgItems: SEOItem[] = [];
  let imgScore = 0;

  if (imgMatches.length === 0) {
    imgItems.push({ label: "Obrazy", status: "warning", value: "Brak obrazów na stronie" });
    imgScore += 7;
  } else {
    imgItems.push({ label: "Liczba obrazów", status: "good", value: `${imgMatches.length}` });
    
    if (imgsWithoutAlt === 0) {
      imgItems.push({ label: "Atrybuty alt", status: "good", value: "Wszystkie obrazy mają alt" });
      imgScore += 15;
    } else if (imgsWithoutAlt <= 3) {
      imgItems.push({ label: "Atrybuty alt", status: "warning", value: `${imgsWithoutAlt} obrazów bez alt`, recommendation: "Dodaj alt do wszystkich obrazów" });
      imgScore += 8;
    } else {
      imgItems.push({ label: "Atrybuty alt", status: "error", value: `${imgsWithoutAlt} obrazów bez alt`, recommendation: "Dodaj alt do obrazów" });
      imgScore += 3;
      recommendations.push(`Dodaj atrybuty alt do ${imgsWithoutAlt} obrazów - poprawia dostępność i SEO.`);
    }
  }

  categories.push({ name: "Obrazy", score: imgScore, maxScore: 15, icon: "Image", items: imgItems });
  totalScore += imgScore;
  maxTotalScore += 15;

  // Calculate final score (percentage)
  const finalScore = Math.round((totalScore / maxTotalScore) * 100);

  // Add general recommendations if score is low
  if (finalScore < 50 && recommendations.length < 5) {
    recommendations.push("Rozważ kompleksowy audyt SEO z naszymi specjalistami.");
  }

  return {
    url,
    score: finalScore,
    categories,
    recommendations: recommendations.slice(0, 5), // Max 5 recommendations
  };
}

async function handler(req: Request): Promise<Response> {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url }: SEOAnalysisRequest = await req.json();
    
    if (!url) {
      return new Response(
        JSON.stringify({ error: "URL is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Analyzing URL: ${url}`);

    // Fetch the page HTML
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; FotzSEOBot/1.0; +https://fotz.pl)",
          "Accept": "text/html,application/xhtml+xml",
        },
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        return new Response(
          JSON.stringify({ error: `Failed to fetch page: ${response.status}` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const html = await response.text();
      console.log(`Fetched ${html.length} bytes of HTML`);

      const result = analyzeHTML(html, url);
      console.log(`Analysis complete. Score: ${result.score}`);

      return new Response(
        JSON.stringify(result),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      if (fetchError.name === "AbortError") {
        return new Response(
          JSON.stringify({ error: "Request timeout - strona nie odpowiada" }),
          { status: 408, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw fetchError;
    }
  } catch (error: any) {
    console.error("Error in analyze-seo:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
}

serve(handler);
