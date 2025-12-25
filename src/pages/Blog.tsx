import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const categories = [
  "Wszystkie",
  "Strony internetowe",
  "Social Media",
  "Reklamy",
  "Video",
  "Branding",
];

const posts = [
  {
    id: "ile-kosztuje-strona-internetowa",
    title: "Ile kosztuje strona internetowa w 2025? Cennik i aktualne koszty",
    excerpt:
      "Sprawdź aktualny cennik stron internetowych w 2025 roku. Dowiedz się, ile kosztuje strona wizytówka, sklep internetowy i profesjonalna strona firmowa.",
    category: "Strony internetowe",
    author: "Zespół FOTZ",
    date: "20 Dec 2024",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    featured: true,
  },
  {
    id: "jak-stworzyc-strone",
    title: "Jak stworzyć stronę internetową, która sprzedaje?",
    excerpt:
      "Poznaj kluczowe elementy skutecznej strony www, które konwertują odwiedzających w klientów.",
    category: "Strony internetowe",
    author: "Tomasz Kowalski",
    date: "15 Dec 2024",
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
    date: "12 Dec 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074",
    featured: false,
  },
  {
    id: "google-ads-poradnik",
    title: "Google Ads dla początkujących - kompletny poradnik",
    excerpt:
      "Wszystko, co musisz wiedzieć, aby uruchomić skuteczną kampanię w Google Ads.",
    category: "Reklamy",
    author: "Michał Wiśniewski",
    date: "10 Dec 2024",
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
    date: "8 Dec 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000",
    featured: false,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const filteredPosts =
    activeCategory === "Wszystkie"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <Layout>
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
      {featuredPost && activeCategory === "Wszystkie" && (
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
