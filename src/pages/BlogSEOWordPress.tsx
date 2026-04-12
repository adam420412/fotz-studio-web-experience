import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Search, Code, Zap, Settings, Globe, CheckCircle } from "lucide-react";

const faqItems = [
  {
    question: "Czy WordPress jest dobry dla SEO?",
    answer: "Tak, WordPress jest jedną z najlepszych platform dla SEO. Domyślnie ma przyjazną dla wyszukiwarek strukturę URL, obsługuje semantic HTML, a wtyczki takie jak Yoast SEO i Rank Math ułatwiają optymalizację. Główne zalety: łatwa optymalizacja meta tagów, natywna obsługa sitemaps XML, wsparcie dla schema markup, szybkie czasy ładowania (z dobrym hostingiem), elastyczność w strukturze treści."
  },
  {
    question: "Która wtyczka SEO dla WordPress jest najlepsza?",
    answer: "Nie ma jednej najlepszej - zależy od potrzeb. Yoast SEO to najpopularniejsza i najstabniejsza (świetna dla początkujących). Rank Math oferuje więcej funkcji zaawansowanych (AI, Schema markup, bezpłatna wersja). All-in-One SEO to lekka alternatywa. Dla profesjonalistów: Rank Math. Dla początkujących: Yoast SEO."
  },
  {
    question: "Jak podnieść szybkość WordPress dla SEO?",
    answer: "Kluczowe kroki: zainstaluj plugin cache (WP Super Cache, LiteSpeed Cache), zoptymalizuj obrazy (ShortPixel, Imagify), używaj CDN (Cloudflare - bezpłatnie), usuń nieużywane wtyczki i motywy, wybierz szybki hosting, włącz kompresję GZIP, zmniejsz pliki CSS/JS (Autoptimize). Mierz Core Web Vitals w Google PageSpeed Insights."
  },
  {
    question: "Czy muszę instalować wtyczkę SEO w WordPress?",
    answer: "Nie jest to obowiązkowe - WordPress bez wtyczek ma solidne podstawy SEO. Jednak wtyczki oszczędzają czas i pomagają uniknąć błędów. Warto zainstalować Yoast SEO lub Rank Math, jeśli chcesz: automatyzować meta opisy, generować sitemaps, zarządzać redirectami, optymalizować schema markup. Dla zaawansowanych - mogą być opcjonalne."
  },
  {
    question: "Co to są Core Web Vitals i dlaczego są ważne dla WordPress?",
    answer: "Core Web Vitals to trzy metryki wydajności strony: LCP (Largest Contentful Paint) - szybkość ładowania, FID (First Input Delay) - responsywność, CLS (Cumulative Layout Shift) - stabilność wizualna. Google używa ich jako ranking factor. Dla WordPress: optymalizuj hosting, wyłącz ciężkie wtyczki, zoptymalizuj obrazy, używaj caching. Sprawdzaj w Google PageSpeed Insights."
  }
];

const BlogSEOWordPress = () => {
  return (
    <>
      <SEOHead
        title="SEO WordPress: Kompletny poradnik 2025 - Ranking w Google"
        description="Jak pozycjonować WordPress w Google? Wtyczki SEO (Yoast, Rank Math), optymalizacja techniczna, szybkość, Core Web Vitals. Praktyczny przewodnik dla blogerów i firm."
        ogType="article"
        canonical="https://fotz.pl/blog/seo-wordpress-poradnik"
        keywords="WordPress SEO, pozycjonowanie WordPress, Yoast SEO, Rank Math, WordPress szybkość, Core Web Vitals"
      />

      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "SEO WordPress poradnik", url: "/blog/seo-wordpress-poradnik" }
        ]}
      />

      <ArticleSchema
        title="SEO WordPress: Kompletny poradnik 2025 - Ranking w Google"
        description="Jak pozycjonować WordPress w Google? Wtyczki SEO, optymalizacja techniczna, szybkość, Core Web Vitals."
        url="https://fotz.pl/blog/seo-wordpress-poradnik"
        datePublished="2025-02-05"
        dateModified="2025-07-15"
        author="Fotz Studio"
      />

      <FAQSchema items={faqItems} />

      <Layout>
        {/* Breadcrumb */}
        <section className="pt-32 pb-4 bg-background">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">SEO WordPress poradnik</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <article className="pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                  <ArrowLeft className="h-4 w-4" />
                  Wróć do bloga
                </Link>

                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Pozycjonowanie SEO
                </span>

                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  SEO WordPress: Kompletny poradnik 2025
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Fotz Studio
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    5 lutego 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    22 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2070"
                    alt="SEO WordPress - optymalizacja strony"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="lead text-xl text-muted-foreground mb-8">
                  WordPress to najpopularniejsza platforma do budowania stron internetowych - na WordPress'ie zbudowanych jest ponad 43% wszystkich stron w internecie. Ale popularność sama w sobie nie gwarantuje dobrych wyników SEO. W tym kompletnym poradniku nauczysz się, jak optymalnie skonfigurować WordPress dla wyszukiwarek, wybrać odpowiednią wtyczkę SEO, zoptymalizować szybkość strony, a przede wszystkim - osiągnąć wysokie pozycje w Google.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Dlaczego WordPress jest dobry dla SEO?
                </h2>

                <p className="text-muted-foreground mb-6">
                  <strong>WordPress to platforma stworzona z myślą o SEO.</strong> Domyślnie spełnia większość wymagań Google'a dotyczących przyjaznej dla wyszukiwarek struktury. Oto główne zalety:
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Elastyczne permalinki:</strong> Można łatwo zmienić strukturę URL na przyjazną dla SEO (np. /rok/miesiąc/nazwa-artykułu/)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Semantic HTML:</strong> Domyślnie generuje semantycznie poprawny kod (nagłówki h1-h6, listy, artykuły)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Natywna obsługa sitemap XML:</strong> Automatycznie generuje mapy strony dla Google'a</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Schema markup:</strong> Wtyczki SEO ułatwiają dodawanie strukturyzowanych danych</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Mobilna responsywność:</strong> Większość darmowych motywów jest responsywna</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Wsparcie dla pluginów:</strong> Tysiące wtyczek do optymalizacji SEO, cache'owania, wydajności</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Wtyczki SEO dla WordPress: Porównanie Yoast vs Rank Math vs All-in-One
                </h2>

                <p className="text-muted-foreground mb-6">
                  Wybór odpowiedniej wtyczki SEO to jeden z najważniejszych kroków. Oto porównanie trzech najpopularniejszych:
                </p>

                <h3 className="text-xl font-heading font-bold mt-8 mb-4">Yoast SEO</h3>

                <p className="text-muted-foreground mb-4">
                  <strong>Najpopularniejsza wtyczka SEO na świecie</strong> - zaufaj ponad 5 milionom użytkowników. Yoast SEO jest doskonałym wyborem dla początkujących.
                </p>

                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">+</span>
                    <span>Intuicyjny interfejs, łatwy do nauki</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">+</span>
                    <span>Doskonały readability checker (analiza czytelności)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">+</span>
                    <span>Darmowa wersja ma wiele funkcji</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">−</span>
                    <span>Premium jest drogi (~150 USD/rok)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">−</span>
                    <span>Mniej zaawansowanych funkcji w darmowej wersji</span>
                  </li>
                </ul>

                <h3 className="text-xl font-heading font-bold mt-8 mb-4">Rank Math</h3>

                <p className="text-muted-foreground mb-4">
                  <strong>Nowoczesna alternatywa dla Yoast</strong> z więcej funkcjami zaawansowanymi i lepszym wsparciem dla schema markup.
                </p>

                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">+</span>
                    <span>Bardziej zaawansowany niż Yoast</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">+</span>
                    <span>Darmowa wersja ma prawie wszystkie funkcje</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">+</span>
                    <span>AI content assistant (generowanie treści)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">+</span>
                    <span>Lepsze wsparcie dla schema markup</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">−</span>
                    <span>Trudniejsza do nauki dla początkujących</span>
                  </li>
                </ul>

                <h3 className="text-xl font-heading font-bold mt-8 mb-4">All-in-One SEO</h3>

                <p className="text-muted-foreground mb-4">
                  <strong>Lekka i szybka alternatywa</strong> dla tych, którzy chcą prostej, nieobciążającej wtyczki.
                </p>

                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">+</span>
                    <span>Najmniejszy wpływ na szybkość strony</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">+</span>
                    <span>Prosty interfejs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">+</span>
                    <span>Dobra wersja darmowa</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">−</span>
                    <span>Mniej funkcji zaawansowanych</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">−</span>
                    <span>Mniej wsparcia wspólnoty</span>
                  </li>
                </ul>

                <p className="text-muted-foreground mb-8 p-4 bg-muted/30 rounded-lg border border-border/50">
                  <strong>Nasza rekomendacja:</strong> Dla początkujących - Yoast SEO. Dla profesjonalistów - Rank Math. Dla szybkich stron - All-in-One SEO.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Optymalizacja techniczna WordPress dla SEO
                </h2>

                <h3 className="text-xl font-heading font-bold mt-8 mb-4">1. Szybkość ładowania strony (Page Speed)</h3>

                <p className="text-muted-foreground mb-4">
                  <strong>Google potwierdził, że szybkość strony jest ranking factorem.</strong> Strony ładujące się poniżej 2.5 sekundy będą faworyzowane w wynikach.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Jak zoptymalizować szybkość WordPress:</strong>
                </p>

                <ol className="space-y-3 mb-6 text-muted-foreground list-decimal list-inside">
                  <li><strong>Zainstaluj plugin cache:</strong> WP Super Cache, LiteSpeed Cache, W3 Total Cache - zmniejszą ładowanie do 50%</li>
                  <li><strong>Zoptymalizuj obrazy:</strong> ShortPixel lub Imagify automatycznie kompresują obrazy bez straty jakości</li>
                  <li><strong>Użyj CDN:</strong> Cloudflare (darmowy) rozprowadza treść z serwerów bliżej użytkownika</li>
                  <li><strong>Usuń nieużywane wtyczki:</strong> Każda wtyczka to dodatkowe zapytania do bazy danych</li>
                  <li><strong>Zmniejsz CSS/JS:</strong> Autoptimize zmniejsza rozmiar plików</li>
                  <li><strong>Włącz kompresję GZIP:</strong> Zmniejsza rozmiar transferu do 70%</li>
                </ol>

                <h3 className="text-xl font-heading font-bold mt-8 mb-4">2. Core Web Vitals</h3>

                <p className="text-muted-foreground mb-4">
                  <strong>Core Web Vitals to trzy metryki wydajności, które Google oficjalnie używa do rankingu:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>LCP (Largest Contentful Paint):</strong> Ile czasu zajmuje załadowanie głównego elementu strony. Docelowo poniżej 2.5s.</span>
                  </li>
                  <li className="flex gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>FID (First Input Delay):</strong> Opóźnienie odpowiedzi strony na pierwsze działanie użytkownika. Docelowo poniżej 100ms.</span>
                  </li>
                  <li className="flex gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>CLS (Cumulative Layout Shift):</strong> Ile drży/przesuwa się zawartość strony podczas ładowania. Docelowo poniżej 0.1.</span>
                  </li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  Sprawdzaj Core Web Vitals w Google PageSpeed Insights (https://pagespeed.web.dev/).
                </p>

                <h3 className="text-xl font-heading font-bold mt-8 mb-4">3. SSL (HTTPS)</h3>

                <p className="text-muted-foreground mb-6">
                  Google wymagał HTTPS od wszystkich stron. Jeśli Twoja strona WordPress pokazuje "Niezabezpieczone", tracisz punkty SEO. Większość hostingów oferuje darmowy Let's Encrypt SSL.
                </p>

                <h3 className="text-xl font-heading font-bold mt-8 mb-4">4. Mapa strony XML (Sitemap)</h3>

                <p className="text-muted-foreground mb-4">
                  Każda wtyczka SEO (Yoast, Rank Math) automatycznie generuje sitemaps na `/sitemap.xml` i `/sitemap_index.xml`. Upewnij się, że:
                </p>

                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li>• Sitemap jest włączony (w ustawieniach wtyczki SEO)</li>
                  <li>• Wysłałeś sitemap w Google Search Console</li>
                  <li>• Dodałeś sitemap do pliku robots.txt</li>
                </ul>

                <h3 className="text-xl font-heading font-bold mt-8 mb-4">5. Robots.txt i Struktura URLi</h3>

                <p className="text-muted-foreground mb-6">
                  Upewnij się, że:
                </p>

                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li>• Permalinki ustawione na "Nazwa posta" lub "Nazwa posta" (nie domyślne /?p=123)</li>
                  <li>• Robots.txt nie blokuje ważnych stron (sprawdzaj w Search Console)</li>
                  <li>• Nie indexujesz archive'ów (archiwa kategorii, tagi - mogą być duplikaty)</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Optymalizacja treści w WordPress
                </h2>

                <p className="text-muted-foreground mb-4">
                  <strong>Najlepsze praktyki SEO dla treści:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <Search className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Słowa kluczowe w URL:</strong> Używaj słów kluczowych w permanentnym linku (np. /seo-wordpress-poradnik)</span>
                  </li>
                  <li className="flex gap-3">
                    <Search className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Meta description (160 znaków):</strong> Musi być unikalne dla każdego posta. To tekst w wynikach Google.</span>
                  </li>
                  <li className="flex gap-3">
                    <Search className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>H1 tag (jeden na stronę):</strong> Najważniejszy nagłówek - zawierający słowo kluczowe</span>
                  </li>
                  <li className="flex gap-3">
                    <Search className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>H2, H3 tagi:</strong> Strukturyzuj treść - ułatwia czytanie i SEO</span>
                  </li>
                  <li className="flex gap-3">
                    <Search className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Alt text dla obrazów:</strong> Opisz obrazy dla niewidomych użytkowników i Google</span>
                  </li>
                  <li className="flex gap-3">
                    <Search className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Długość artykułu:</strong> 1500+ słów dla konkurencyjnych słów kluczowych, 800+ dla niszy</span>
                  </li>
                  <li className="flex gap-3">
                    <Search className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Linkowanie wewnętrzne:</strong> Linkuj do innych postów z Twojego bloga (2-5 linków na post)</span>
                  </li>
                  <li className="flex gap-3">
                    <Search className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Tempo publikacji:</strong> Publikuj regularnie (co tydzień/dwa tygodnie) - lepiej dla algorytmu</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Link Building dla WordPress
                </h2>

                <p className="text-muted-foreground mb-4">
                  <strong>Linki to jeden z głównych ranking factorów Google.</strong> Artykuł mający wiele linków z autorytetowych stron pozycjonuje się znacznie lepiej.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Jak zdobywać linki do WordPress:</strong>
                </p>

                <ol className="space-y-3 mb-6 text-muted-foreground list-decimal list-inside">
                  <li><strong>Broken link building:</strong> Szukaj niedziałających linków u konkurentów, zaproponuj swoją stronę jako zamiennik</li>
                  <li><strong>Gościnne posty (Guest Posts):</strong> Napisz artykuł dla innego bloga - dostajesz link i trafik</li>
                  <li><strong>Resource pages:</strong> Szukaj stron "Best Resources" w Twojej branży - poproś o link</li>
                  <li><strong>Mencje w mediach:</strong> Monitoruj wzmianki o Twojej branży w mediach - poproś o link</li>
                  <li><strong>Linki z katalogów:</strong> Dodaj swoją stronę do katalogów branżowych (DMOZ, branchowe katalogi)</li>
                  <li><strong>Infografiki:</strong> Publikuj infografiki - są łatwo linkowane</li>
                </ol>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Schema Markup w WordPress
                </h2>

                <p className="text-muted-foreground mb-4">
                  <strong>Schema.org to standardowe oznaczenia, które pomagają Google lepiej rozumieć Twoją treść.</strong> Wyniki z rich snippets (oceny gwiazdek, ceny, artykuł) wyglądają lepiej w wynikach.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Typy schema markup dla WordPress:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <Code className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Article Schema:</strong> Dla artykułów blogowych - zawiera autora, datę, opis</span>
                  </li>
                  <li className="flex gap-3">
                    <Code className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>BreadcrumbList Schema:</strong> Migracja danych (Home &#x2192; Blog &#x2192; Artykuł) - lepsze wyniki</span>
                  </li>
                  <li className="flex gap-3">
                    <Code className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>FAQ Schema:</strong> Dla FAQ sekcji - wyświetla pytania w wynikach</span>
                  </li>
                  <li className="flex gap-3">
                    <Code className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Product Schema:</strong> Dla sklepów - zawiera cenę, ocenę, dostępność</span>
                  </li>
                  <li className="flex gap-3">
                    <Code className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Review Schema:</strong> Dla opinii - wyświetla oceny w wynikach</span>
                  </li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  Rank Math i Yoast SEO automatycznie generują schema markup. Sprawdzaj w Google Rich Results Test (https://search.google.com/test/rich-results).
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Najczęstsze błędy SEO w WordPress
                </h2>

                <p className="text-muted-foreground mb-4">
                  <strong>Błędy, których powinieneś unikać:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span><strong>Brak meta descriptions:</strong> Każdy post musi mieć unikalne meta. To tekst w wynikach Google.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span><strong>Wiele H1 tagów:</strong> Jeden post = jeden H1. Reszta powinna być H2, H3.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span><strong>Zapomnienie o ALT tekście:</strong> Każdy obraz musi mieć opisowy alt text.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span><strong>Permanent redirects nie działają:</strong> Czasami zmień URL - zawsze ustawiaj 301 redirect ze starego na nowy.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span><strong>Brak linkowania wewnętrznego:</strong> Linkuj do innych postów z Twojego bloga - pomaga SEO.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span><strong>Zbyt wiele wtyczek:</strong> Każda wtyczka spowalnia stronę. Zainstaluj tylko niezbędne.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span><strong>Indexowanie archiwów:</strong> Archiwum kategorii i tagów = duplikaty. Wyłącz ich indexowanie.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span><strong>Artykuły poniżej 300 słów:</strong> Google preferuje dłuższe artykuły (800+ słów dla lepszych pozycji).</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Narzędzia do monitorowania SEO WordPress
                </h2>

                <p className="text-muted-foreground mb-4">
                  <strong>Najlepsze narzędzia do śledzenia SEO:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Google Search Console:</strong> Bezpłatne - widać pozycje, kliknięcia, błędy, linki</span>
                  </li>
                  <li className="flex gap-3">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Google Analytics 4:</strong> Bezpłatne - trafik ze źródeł, zachowanie użytkowników</span>
                  </li>
                  <li className="flex gap-3">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Google PageSpeed Insights:</strong> Bezpłatne - szybkość strony i Core Web Vitals</span>
                  </li>
                  <li className="flex gap-3">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>SE Ranking / Semrush:</strong> Płatne - ranking dla słów kluczowych, kompetytory</span>
                  </li>
                  <li className="flex gap-3">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Ahrefs / Majestic:</strong> Płatne - analiza linków, backlinki konkurentów</span>
                  </li>
                </ul>

                {/* FAQ Section */}
                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Najczęściej zadawane pytania
                </h2>

                <div className="space-y-4 mb-12">
                  <Accordion type="single" collapsible>
                    {faqItems.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-muted/30 transition-colors">
                        <AccordionTrigger className="py-4 hover:no-underline">
                          <span className="text-left font-semibold">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#75143F]/20 to-[#0F3053]/20 border border-primary/20 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Chcesz osiągnąć pozycje 1-3 w Google?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  WordPress to świetna baza, ale bez właściwej strategii SEO - nigdy nie będziesz widoczny. Nasze doświadczenie w pozycjonowaniu WordPress pomogło już setkom firm. Skontaktuj się z nami aby uzyskać bezpłatną analizę SEO Twojej strony WordPress.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053]">
                    <Link to="/kontakt">Bezpłatna analiza SEO</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/uslugi/pozycjonowanie">Poznaj naszą usługę SEO</Link>
                  </Button>
                </div>
              </div>

              {/* Related Links */}
              <div className="mt-8 p-8 bg-muted/30 rounded-2xl">
                <h3 className="text-xl font-heading font-bold mb-4">Powiązane artykuły i usługi</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/blog/seo-poradnik" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">SEO Poradnik 2025</h4>
                    <p className="text-sm text-muted-foreground">Kompletny przewodnik pozycjonowania</p>
                  </Link>
                  <Link to="/uslugi/pozycjonowanie" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Usługa pozycjonowania</h4>
                    <p className="text-sm text-muted-foreground">Profesjonalne SEO dla firm</p>
                  </Link>
                  <Link to="/cennik-pozycjonowania" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Cennik SEO</h4>
                    <p className="text-sm text-muted-foreground">Przejrzyste ceny pozycjonowania</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
};

export default BlogSEOWordPress;
