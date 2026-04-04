import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Search, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { useBlogArticles } from "@/hooks/useBlogArticles";

const categories = [
  "Wszystkie",
  "Strony internetowe",
  "Social Media",
  "Reklamy",
  "Video",
  "Branding",
  "Poradniki",
];

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  isDynamic?: boolean;
}

const posts: BlogPost[] = [
  {
    id: "remarketing-poradnik",
    title: "Remarketing - kompletny poradnik dla firm 2025",
    excerpt:
      "Remarketing krok po kroku: Google Ads, Facebook, dynamiczny remarketing. Poznaj strategie, koszty i najlepsze praktyki.",
    category: "Reklamy",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "18 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    featured: true,
  },
  {
    id: "google-analytics-4-poradnik",
    title: "Google Analytics 4 - kompletny poradnik GA4 dla firm",
    excerpt:
      "Jak skonfigurować GA4, zrozumieć nowy interfejs i mierzyć to, co ważne dla biznesu. Praktyczny przewodnik od podstaw.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "22 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    featured: false,
  },
  {
    id: "budzet-marketingowy-planowanie",
    title: "Budżet marketingowy - jak zaplanować wydatki na marketing",
    excerpt:
      "Ile wydać na marketing? Jak podzielić budżet między kanały? Benchmarki branżowe i praktyczne wskazówki.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "16 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072",
    featured: false,
  },
  {
    id: "marketing-b2b-vs-b2c",
    title: "Marketing B2B vs B2C - kluczowe różnice i strategie",
    excerpt:
      "Sprzedajesz firmom czy konsumentom? Poznaj fundamentalne różnice w podejściu, kanałach i komunikacji między B2B a B2C.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    featured: false,
  },
  {
    id: "psychologia-cen",
    title: "Psychologia cen - jak ustalać ceny, które sprzedają",
    excerpt:
      "Kotwiczenie, charm pricing, decoy effect. Poznaj techniki psychologii cen zwiększające konwersję i wartość koszyka.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "14 min",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071",
    featured: false,
  },
  {
    id: "copywriting-landing-page",
    title: "Copywriting dla landing pages - teksty, które konwertują",
    excerpt:
      "Headlines, CTA, bullet points, social proof. Praktyczny poradnik pisania tekstów zwiększających konwersję.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "16 min",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073",
    featured: false,
  },
  {
    id: "seo-ecommerce",
    title: "SEO dla sklepów internetowych - jak pozycjonować e-commerce",
    excerpt:
      "Kompletny poradnik SEO dla e-commerce. Poznaj strategie pozycjonowania sklepów internetowych, optymalizację kategorii i kart produktowych.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "18 min",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    featured: false,
  },
  {
    id: "ux-ui-ecommerce",
    title: "UX/UI w e-commerce - jak projektować sklepy internetowe które sprzedają",
    excerpt:
      "Kompletny poradnik UX/UI dla sklepów internetowych. Dowiedz się jak projektować sklepy, które zwiększają konwersję.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "20 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    featured: false,
  },
  {
    id: "branding-dla-startupow",
    title: "Branding dla startupów - jak zbudować silną markę od zera",
    excerpt:
      "Kompletny poradnik budowania marki dla startupów. Strategia, identyfikacja wizualna, komunikacja i pozycjonowanie.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "19 min",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070",
    featured: false,
  },
  {
    id: "influencer-marketing-polska",
    title: "Influencer marketing w Polsce - jak współpracować z influencerami",
    excerpt:
      "Kompletny poradnik influencer marketingu. Jak znaleźć influencerów, negocjować współpracę i mierzyć efekty kampanii.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "17 min",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    featured: false,
  },
  {
    id: "instagram-reels-vs-tiktok",
    title: "Instagram Reels vs TikTok - gdzie publikować wideo w 2025?",
    excerpt:
      "Porównanie Instagram Reels i TikTok. Która platforma lepsza dla Twojej marki? Analiza algorytmów, zasięgów i strategii.",
    category: "Social Media",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "14 min",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2074",
    featured: false,
  },
  {
    id: "jak-stworzyc-landing-page",
    title: "Jak stworzyć skuteczny landing page - poradnik z przykładami",
    excerpt:
      "Kompletny poradnik tworzenia landing page. Struktura, copywriting, CTA i optymalizacja konwersji.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "16 min",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069",
    featured: false,
  },
  {
    id: "email-marketing-2025",
    title: "Email marketing w 2025 - jak budować listę mailingową i zwiększać konwersję",
    excerpt:
      "Kompletny poradnik email marketingu. Jak budować listę mailingową, tworzyć skuteczne kampanie i zwiększać konwersję.",
    category: "Reklamy",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "18 min",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2074",
    featured: false,
  },
  {
    id: "tiktok-dla-biznesu",
    title: "TikTok dla biznesu - jak skutecznie promować firmę na TikToku",
    excerpt:
      "Kompletny poradnik TikTok dla firm. Dowiedz się jak tworzyć angażujące treści, budować społeczność i wykorzystać TikTok Ads.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "16 min",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2074",
    featured: false,
  },
  {
    id: "seo-lokalne-poznan-poradnik",
    title: "SEO lokalne dla firm w Poznaniu - kompletny poradnik 2025",
    excerpt:
      "Jak wypozycjonować firmę lokalnie w Poznaniu? Google Moja Firma, NAP, recenzje i strategie na 2025 rok.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "20 min",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076",
    featured: false,
  },
  {
    id: "ai-w-marketingu-msp-2025",
    title: "AI w marketingu - praktyczne zastosowania dla MŚP w 2025",
    excerpt:
      "Poznaj praktyczne zastosowania sztucznej inteligencji w marketingu dla małych i średnich firm. Narzędzia AI, automatyzacja i strategie na 2025 rok.",
    category: "Reklamy",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    featured: false,
  },
  {
    id: "google-ads-vs-facebook-ads",
    title: "Google Ads vs Facebook Ads - która platforma lepsza dla Twojego biznesu?",
    excerpt:
      "Porównanie Google Ads i Facebook Ads. Dowiedz się, która platforma reklamowa przyniesie lepsze wyniki dla Twojej firmy.",
    category: "Reklamy",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "18 min",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
    featured: false,
  },
  {
    id: "kampania-reklamowa-marketingowa",
    title: "Kampania Reklamowa i Marketingowa: Przykłady i Definicja",
    excerpt:
      "Poznaj różnice między kampanią reklamową a marketingową. Przykłady najlepszych kampanii 2024, trendy na 2025 rok oraz strategie Google Ads i TikTok.",
    category: "Reklamy",
    author: "Zespół FOTZ",
    date: "15 sty 2025",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    featured: false,
  },
  {
    id: "ile-kosztuje-strona-internetowa",
    title: "Ile kosztuje strona internetowa w 2025? Cennik i aktualne koszty",
    excerpt:
      "Sprawdź aktualny cennik stron internetowych w 2025 roku. Dowiedz się, ile kosztuje strona wizytówka, sklep internetowy i profesjonalna strona firmowa.",
    category: "Strony internetowe",
    author: "Zespół FOTZ",
    date: "20 gru 2024",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    featured: false,
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation - jak automatyzować działania marketingowe",
    excerpt:
      "Kompletny poradnik automatyzacji marketingu. Narzędzia, strategie i wdrożenie marketing automation w Twojej firmie.",
    category: "Poradniki",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "16 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    featured: false,
  },
  {
    id: "personal-branding-linkedin",
    title: "Personal branding na LinkedIn - jak budować markę osobistą",
    excerpt:
      "Jak wyróżnić się na LinkedIn? Strategia personal brandingu, optymalizacja profilu i tworzenie angażujących treści.",
    category: "Social Media",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "14 min",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2074",
    featured: false,
  },
  {
    id: "video-marketing-trendy-2025",
    title: "Video marketing - trendy i strategie na 2025 rok",
    excerpt:
      "Najważniejsze trendy w video marketingu. Short-form video, live streaming, video SEO i produkcja treści wideo dla firm.",
    category: "Video",
    author: "Zespół FOTZ",
    date: "4 sty 2025",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070",
    featured: false,
  },
  {
    id: "jak-stworzyc-strone",
    title: "Jak stworzyć stronę internetową, która sprzedaje?",
    excerpt:
      "Poznaj kluczowe elementy skutecznej strony www, które konwertują odwiedzających w klientów.",
    category: "Strony internetowe",
    author: "Tomasz Kowalski",
    date: "15 gru 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    featured: false,
  },
  {
    id: "trendy-social-media-2025",
    title: "Trendy Social Media na 2025 rok",
    excerpt:
      "Co przyniesie nowy rok w social mediach? Przegląd najważniejszych trendów.",
    category: "Social Media",
    author: "Anna Nowak",
    date: "12 gru 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074",
    featured: false,
  },
  {
    id: "google-ads-poradnik",
    title: "Google Ads dla początkujących - kompletny poradnik",
    excerpt:
      "Wszystko, co musisz wiedzieć, aby uruchomić skuteczną kampanię w Google Ads.",
    category: "Reklamy",
    author: "Michał Wiśniewski",
    date: "10 gru 2024",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
    featured: false,
  },
  {
    id: "video-marketing-roi",
    title: "Jak mierzyć ROI z video marketingu?",
    excerpt:
      "Praktyczne wskazówki dotyczące mierzenia efektywności działań video.",
    category: "Video",
    author: "Karolina Lewandowska",
    date: "8 gru 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070",
    featured: false,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { data: dbArticles = [] } = useBlogArticles();

  // Transform database articles to match static posts format
  const dynamicPosts = useMemo(() => {
    return dbArticles.map((article) => ({
      id: article.slug,
      title: article.title,
      excerpt: article.meta_description || "",
      category: "Poradniki",
      author: "Zespół FOTZ",
      date: article.published_at 
        ? new Date(article.published_at).toLocaleDateString("pl-PL", { day: "numeric", month: "short", year: "numeric" })
        : "Nowy",
      readTime: "10 min",
      image: article.hero_image_url || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
      featured: false,
      isDynamic: true,
    }));
  }, [dbArticles]);

  // Combine static posts with dynamic posts from database
  const allPosts = useMemo(() => {
    const staticIds = new Set(posts.map(p => p.id));
    const uniqueDynamic = dynamicPosts.filter(dp => !staticIds.has(dp.id));
    return [...uniqueDynamic, ...posts];
  }, [dynamicPosts]);

  // Filter posts by category and search query
  const filteredPosts = useMemo(() => {
    let result = allPosts;
    
    // Filter by category
    if (activeCategory !== "Wszystkie") {
      result = result.filter((p) => p.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((p) => 
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.author.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [allPosts, activeCategory, searchQuery]);

  const featuredPost = allPosts.find((p) => p.featured);
  const showFeatured = activeCategory === "Wszystkie" && !searchQuery.trim();
  const regularPosts = showFeatured 
    ? filteredPosts.filter((p) => !p.featured)
    : filteredPosts;

  return (
    <Layout>
      <SEOHead
        title="Blog Marketingowy | Fotz Studio"
        description="Poradniki marketingu, SEO i social media. Praktyczna wiedza dla firm od agencji Fotz Studio."
        canonical="https://fotz.pl/blog"
        keywords="blog marketingowy, poradniki marketing, SEO, social media, Google Ads"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" }
        ]}
      />
      {/* Hero */}
      <section className="pt-40 pb-20 section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Wiedza i <span className="text-gradient">inspiracje</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Artykuły, poradniki i case studies. Dzielimy się wiedzą, 
              która pomoże Ci rozwijać marketing Twojej firmy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && showFeatured && (
        <section className="section-padding pt-0 bg-background">
          <div className="container-wide">
            <Link
              to={`/blog/${featuredPost.id}`}
              className="group block rounded-3xl overflow-hidden bg-card"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-primary text-sm font-medium mb-3">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Czytaj artykuł</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section ref={ref} className="section-padding bg-card">
        <div className="container-wide">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Szukaj artykułów..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-10 py-5 bg-secondary border-border/50 rounded-full focus:ring-2 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Wyczyść wyszukiwanie"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Results Info */}
          {searchQuery.trim() && (
            <div className="mb-8 text-muted-foreground">
              {filteredPosts.length === 0 ? (
                <p>Brak wyników dla "<span className="text-foreground font-medium">{searchQuery}</span>"</p>
              ) : (
                <p>
                  Znaleziono <span className="text-foreground font-medium">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'artykuł' : filteredPosts.length < 5 ? 'artykuły' : 'artykułów'} dla "<span className="text-foreground font-medium">{searchQuery}</span>"
                </p>
              )}
            </div>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={cn(
                  "group rounded-2xl overflow-hidden bg-secondary transition-all duration-700 hover-lift",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Załaduj więcej artykułów
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
