import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

// All blog articles data for cross-referencing
const allArticles: Article[] = [
  {
    id: "tiktok-dla-biznesu",
    title: "TikTok dla biznesu - jak skutecznie promować firmę na TikToku",
    excerpt: "Kompletny poradnik TikTok dla firm. Strategie, formaty i TikTok Ads.",
    category: "Social Media",
    date: "4 Jan 2025",
    readTime: "16 min",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2074",
  },
  {
    id: "seo-lokalne-poznan-poradnik",
    title: "SEO lokalne dla firm w Poznaniu - kompletny poradnik 2025",
    excerpt: "Jak wypozycjonować firmę lokalnie w Poznaniu? Google Moja Firma, NAP i recenzje.",
    category: "Strony internetowe",
    date: "4 Jan 2025",
    readTime: "20 min",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076",
  },
  {
    id: "ai-w-marketingu-msp-2025",
    title: "AI w marketingu - praktyczne zastosowania dla MŚP w 2025",
    excerpt: "Poznaj praktyczne zastosowania sztucznej inteligencji w marketingu dla małych i średnich firm.",
    category: "Reklamy",
    date: "4 Jan 2025",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
  },
  {
    id: "google-ads-vs-facebook-ads",
    title: "Google Ads vs Facebook Ads - która platforma lepsza dla Twojego biznesu?",
    excerpt: "Porównanie Google Ads i Facebook Ads. Dowiedz się, która platforma reklamowa przyniesie lepsze wyniki.",
    category: "Reklamy",
    date: "4 Jan 2025",
    readTime: "18 min",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2f1d9?q=80&w=2074",
  },
  {
    id: "kampania-reklamowa-marketingowa",
    title: "Kampania Reklamowa i Marketingowa: Przykłady i Definicja",
    excerpt: "Poznaj różnice między kampanią reklamową a marketingową. Przykłady najlepszych kampanii 2024, trendy na 2025 rok.",
    category: "Reklamy",
    date: "15 Jan 2025",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
  },
  {
    id: "ile-kosztuje-strona-internetowa",
    title: "Ile kosztuje strona internetowa w 2025? Cennik i aktualne koszty",
    excerpt: "Sprawdź aktualny cennik stron internetowych w 2025 roku. Dowiedz się, ile kosztuje strona wizytówka i sklep.",
    category: "Strony internetowe",
    date: "20 Dec 2024",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
  },
  {
    id: "jak-stworzyc-strone",
    title: "Jak stworzyć stronę internetową, która sprzedaje?",
    excerpt: "Poznaj kluczowe elementy skutecznej strony www, które konwertują odwiedzających w klientów.",
    category: "Strony internetowe",
    date: "15 Dec 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  },
  {
    id: "trendy-social-media-2025",
    title: "Trendy Social Media na 2025 rok",
    excerpt: "Co przyniesie nowy rok w social mediach? Przegląd najważniejszych trendów.",
    category: "Social Media",
    date: "12 Dec 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074",
  },
  {
    id: "google-ads-poradnik",
    title: "Google Ads dla początkujących - kompletny poradnik",
    excerpt: "Wszystko, co musisz wiedzieć, aby uruchomić skuteczną kampanię w Google Ads.",
    category: "Reklamy",
    date: "10 Dec 2024",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
  },
  {
    id: "video-marketing-roi",
    title: "Jak mierzyć ROI z video marketingu?",
    excerpt: "Praktyczne wskazówki dotyczące mierzenia efektywności działań video.",
    category: "Video",
    date: "8 Dec 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000",
  },
];

interface RelatedArticlesProps {
  currentArticleId: string;
  maxArticles?: number;
}

export function RelatedArticles({ currentArticleId, maxArticles = 3 }: RelatedArticlesProps) {
  // Filter out current article and get related ones
  const relatedArticles = allArticles
    .filter(article => article.id !== currentArticleId)
    .slice(0, maxArticles);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Czytaj dalej
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Powiązane artykuły
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {relatedArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/blog/${article.id}`}
                className="group block rounded-2xl overflow-hidden bg-card hover:bg-card/80 transition-all duration-300 h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Zobacz wszystkie artykuły
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
