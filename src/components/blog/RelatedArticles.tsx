import { getOwnPhoto } from "@/lib/own-photos.mjs";
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
    id: "seo-ecommerce",
    title: "SEO dla sklepów internetowych - jak pozycjonować e-commerce",
    excerpt: "Kompletny poradnik SEO dla e-commerce. Strategie pozycjonowania sklepów internetowych.",
    category: "Poradniki",
    date: "4 Jan 2025",
    readTime: "18 min",
    image: "/work/backstage-1200.webp",
  },
  {
    id: "ux-ui-ecommerce",
    title: "UX/UI w e-commerce - jak projektować sklepy internetowe które sprzedają",
    excerpt: "Kompletny poradnik UX/UI dla sklepów internetowych. Projektowanie sklepów zwiększających konwersję.",
    category: "Poradniki",
    date: "4 Jan 2025",
    readTime: "20 min",
    image: "/work/backstage-1200.webp",
  },
  {
    id: "branding-dla-startupow",
    title: "Branding dla startupów - jak zbudować silną markę od zera",
    excerpt: "Kompletny poradnik budowania marki dla startupów. Strategia i identyfikacja wizualna.",
    category: "Poradniki",
    date: "4 Jan 2025",
    readTime: "19 min",
    image: "/work/fotz-work-1200.webp",
  },
  {
    id: "influencer-marketing-polska",
    title: "Influencer marketing w Polsce - jak współpracować z influencerami",
    excerpt: "Kompletny poradnik influencer marketingu. Znajdowanie influencerów i mierzenie ROI.",
    category: "Poradniki",
    date: "4 Jan 2025",
    readTime: "17 min",
    image: "/work/bar-1200.webp",
  },
  {
    id: "instagram-reels-vs-tiktok",
    title: "Instagram Reels vs TikTok - gdzie publikować wideo w 2025?",
    excerpt: "Porównanie Reels i TikTok. Która platforma lepsza dla Twojej marki?",
    category: "Social Media",
    date: "4 Jan 2025",
    readTime: "14 min",
    image: "/work/stadium-1200.webp",
  },
  {
    id: "jak-stworzyc-landing-page",
    title: "Jak stworzyć skuteczny landing page - poradnik z przykładami",
    excerpt: "Kompletny poradnik tworzenia landing page z wysoką konwersją.",
    category: "Poradniki",
    date: "4 Jan 2025",
    readTime: "16 min",
    image: "/work/fotz-work-1200.webp",
  },
  {
    id: "email-marketing-2025",
    title: "Email marketing w 2025 - jak budować listę mailingową i zwiększać konwersję",
    excerpt: "Kompletny poradnik email marketingu. Lead magnety, automatyzacja i konwersja.",
    category: "Poradniki",
    date: "4 Jan 2025",
    readTime: "18 min",
    image: "/work/fotz-presentation-1200.webp",
  },
  {
    id: "tiktok-dla-biznesu",
    title: "TikTok dla biznesu - jak skutecznie promować firmę na TikToku",
    excerpt: "Kompletny poradnik TikTok dla firm. Strategie, formaty i TikTok Ads.",
    category: "Poradniki",
    date: "4 Jan 2025",
    readTime: "16 min",
    image: "/work/bar-1200.webp",
  },
  {
    id: "seo-lokalne-poznan-poradnik",
    title: "SEO lokalne dla firm w Poznaniu - kompletny poradnik 2025",
    excerpt: "Jak wypozycjonować firmę lokalnie w Poznaniu? Google Moja Firma, NAP i recenzje.",
    category: "Poradniki",
    date: "4 Jan 2025",
    readTime: "20 min",
    image: "/work/fotz-work-1200.webp",
  },
  {
    id: "ai-w-marketingu-msp-2025",
    title: "AI w marketingu - praktyczne zastosowania dla MŚP w 2025",
    excerpt: "Poznaj praktyczne zastosowania sztucznej inteligencji w marketingu dla małych i średnich firm.",
    category: "Reklamy",
    date: "4 Jan 2025",
    readTime: "15 min",
    image: "/work/fotz-presentation-1200.webp",
  },
  {
    id: "google-ads-vs-facebook-ads",
    title: "Google Ads vs Facebook Ads - która platforma lepsza dla Twojego biznesu?",
    excerpt: "Porównanie Google Ads i Facebook Ads. Dowiedz się, która platforma reklamowa przyniesie lepsze wyniki.",
    category: "Reklamy",
    date: "4 Jan 2025",
    readTime: "18 min",
    image: "/work/stadium-1200.webp",
  },
  {
    id: "kampania-reklamowa-marketingowa",
    title: "Kampania Reklamowa i Marketingowa: Przykłady i Definicja",
    excerpt: "Poznaj różnice między kampanią reklamową a marketingową. Przykłady najlepszych kampanii 2024, trendy na 2025 rok.",
    category: "Reklamy",
    date: "15 Jan 2025",
    readTime: "12 min",
    image: "/work/fotz-presentation-1200.webp",
  },
  {
    id: "ile-kosztuje-strona-internetowa",
    title: "Ile kosztuje strona internetowa w 2025? Cennik i aktualne koszty",
    excerpt: "Sprawdź aktualny cennik stron internetowych w 2025 roku. Dowiedz się, ile kosztuje strona wizytówka i sklep.",
    category: "Strony internetowe",
    date: "20 Dec 2024",
    readTime: "15 min",
    image: "/work/backstage-1200.webp",
  },
  {
    id: "google-ads-poradnik",
    title: "Google Ads dla początkujących - kompletny poradnik",
    excerpt: "Wszystko, co musisz wiedzieć, aby uruchomić skuteczną kampanię w Google Ads.",
    category: "Poradniki",
    date: "10 Dec 2024",
    readTime: "12 min",
    image: "/work/fotz-work-1200.webp",
  },
  {
    id: "video-marketing-roi",
    title: "Jak mierzyć ROI z video marketingu?",
    excerpt: "Praktyczne wskazówki dotyczące mierzenia efektywności działań video.",
    category: "Video",
    date: "8 Dec 2024",
    readTime: "7 min",
    image: "/work/stadium-1200.webp",
  },
  {
    id: "marketing-automation",
    title: "Marketing automation - jak zautomatyzować działania marketingowe?",
    excerpt: "Przewodnik po automatyzacji marketingu. Narzędzia, strategie i najlepsze praktyki wdrażania.",
    category: "Poradniki",
    date: "10 Jan 2024",
    readTime: "10 min",
    image: "/work/fotz-presentation-1200.webp",
  },
  {
    id: "personal-branding-linkedin",
    title: "Personal branding na LinkedIn - jak zbudować markę eksperta?",
    excerpt: "Praktyczny przewodnik budowania marki osobistej na LinkedIn dla profesjonalistów.",
    category: "LinkedIn",
    date: "5 Jan 2024",
    readTime: "8 min",
    image: "/work/fotz-presentation-1200.webp",
  },
  {
    id: "video-marketing-2025",
    title: "Video marketing w 2025 - trendy i prognozy",
    excerpt: "Najważniejsze trendy w marketingu wideo. AI, short-form content, live streaming i personalizacja.",
    category: "Video",
    date: "28 Dec 2024",
    readTime: "9 min",
    image: "/work/concert-1200.webp",
  },
];

interface RelatedArticlesProps {
  currentArticleId?: string;
  currentSlug?: string;
  currentId?: string;
  tags?: string[];
  category?: string;
  maxArticles?: number;
}

export function RelatedArticles({
  currentArticleId,
  currentSlug,
  currentId,
  maxArticles = 3,
}: RelatedArticlesProps) {
  const activeArticleId = currentArticleId ?? currentSlug ?? currentId ?? "";

  // Filter out current article and get related ones
  const relatedArticles = allArticles
    .filter(article => article.id !== activeArticleId)
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
                  <img loading="lazy"
                    {...getOwnPhoto(`${article.id} ${article.title}`)}
                    alt={getOwnPhoto(`${article.id} ${article.title}`).alt}
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
