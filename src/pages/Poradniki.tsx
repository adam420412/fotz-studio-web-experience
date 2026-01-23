import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, BookOpen } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

const poradniki = [
  {
    id: "jak-stworzyc-landing-page",
    title: "Jak stworzyć skuteczny landing page - poradnik z przykładami",
    excerpt: "Kompletny poradnik tworzenia landing page. Struktura, copywriting, CTA i optymalizacja konwersji.",
    author: "Zespół FOTZ",
    date: "4 Jan 2025",
    readTime: "16 min",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069",
  },
  {
    id: "email-marketing-2025",
    title: "Email marketing w 2025 - jak budować listę mailingową i zwiększać konwersję",
    excerpt: "Kompletny poradnik email marketingu. Jak budować listę mailingową, tworzyć skuteczne kampanie i zwiększać konwersję.",
    author: "Zespół FOTZ",
    date: "4 Jan 2025",
    readTime: "18 min",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2074",
  },
  {
    id: "tiktok-dla-biznesu",
    title: "TikTok dla biznesu - jak skutecznie promować firmę na TikToku",
    excerpt: "Kompletny poradnik TikTok dla firm. Dowiedz się jak tworzyć angażujące treści, budować społeczność i wykorzystać TikTok Ads.",
    author: "Zespół FOTZ",
    date: "4 Jan 2025",
    readTime: "16 min",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2074",
  },
  {
    id: "seo-lokalne-poznan-poradnik",
    title: "SEO lokalne dla firm w Poznaniu - kompletny poradnik 2025",
    excerpt: "Jak wypozycjonować firmę lokalnie w Poznaniu? Google Moja Firma, NAP, recenzje i strategie na 2025 rok.",
    author: "Zespół FOTZ",
    date: "4 Jan 2025",
    readTime: "20 min",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076",
  },
  {
    id: "google-ads-poradnik",
    title: "Google Ads dla początkujących - kompletny poradnik",
    excerpt: "Wszystko, co musisz wiedzieć, aby uruchomić skuteczną kampanię w Google Ads.",
    author: "Michał Wiśniewski",
    date: "10 Dec 2024",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
  },
  {
    id: "influencer-marketing-polska",
    title: "Influencer marketing w Polsce - jak współpracować z influencerami",
    excerpt: "Kompletny poradnik influencer marketingu. Jak znaleźć influencerów, negocjować współpracę i mierzyć efekty kampanii.",
    author: "Zespół FOTZ",
    date: "4 Jan 2025",
    readTime: "17 min",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
  },
  {
    id: "branding-dla-startupow",
    title: "Branding dla startupów - jak zbudować silną markę od zera",
    excerpt: "Kompletny poradnik budowania marki dla startupów. Strategia, identyfikacja wizualna, komunikacja i pozycjonowanie.",
    author: "Zespół FOTZ",
    date: "4 Jan 2025",
    readTime: "19 min",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070",
  },
];

export default function Poradniki() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <SEOHead
        title="Poradniki Marketingowe | Praktyczne Przewodniki | Fotz Studio"
        description="Kompletne poradniki i tutoriale marketingu cyfrowego. Od podstaw po zaawansowane strategie: SEO, Google Ads, social media, landing pages i więcej."
        canonical="https://fotz.pl/poradniki"
        keywords="poradniki marketingowe, tutoriale marketing, przewodnik SEO, poradnik Google Ads, marketing cyfrowy"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Poradniki", url: "https://fotz.pl/poradniki" }
        ]}
      />
      <Layout>
        {/* Hero */}
        <section className="pt-40 pb-20 section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Poradniki
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Praktyczne <span className="text-gradient">poradniki</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Kompletne przewodniki i tutoriale, które pomogą Ci opanować marketing cyfrowy. 
              Od podstaw po zaawansowane strategie.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-6 text-center">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{poradniki.length}</div>
              <div className="text-sm text-muted-foreground">Poradników</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">120+</div>
              <div className="text-sm text-muted-foreground">Minut lektury</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center">
              <User className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Ekspertów</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">2025</div>
              <div className="text-sm text-muted-foreground">Aktualizacja</div>
            </div>
          </div>
        </div>
      </section>

      {/* Poradniki Grid */}
      <section ref={ref} className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poradniki.map((post, index) => (
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
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Poradnik
                    </span>
                  </div>
                </div>
                <div className="p-6">
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

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
            >
              Zobacz wszystkie artykuły
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
