// Constants for the /agencja-social-media pillar + 20 cluster hubs.
// Each cluster has its own URL hub; articles live under /blog/<slug>
// and link back via cluster_slug in blog_articles.

export const SM_PILLAR_SLUG = "agencja-social-media";
export const SM_PILLAR_PATH = "/agencja-social-media";

export type ClusterKind = "info" | "city" | "pricing";

export interface SocialMediaCluster {
  slug: string;
  path: string;
  title: string;
  shortLabel: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  kind: ClusterKind;
  intent: "informational" | "commercial" | "local";
}

export const SOCIAL_MEDIA_CLUSTERS: SocialMediaCluster[] = [
  {
    slug: "co-to-jest",
    path: "/agencja-social-media/co-to-jest",
    title: "Co to jest agencja social media",
    shortLabel: "Co to jest",
    description:
      "Definicja, zakres usług i sposób działania nowoczesnej agencji social media w 2026.",
    metaTitle: "Co to jest agencja social media? Przewodnik 2026",
    metaDescription:
      "Czym zajmuje się agencja social media, jakie usługi oferuje i kiedy warto ją wynająć. Praktyczny przewodnik od Fotz Studio.",
    kind: "info",
    intent: "informational",
  },
  {
    slug: "co-robi",
    path: "/agencja-social-media/co-robi",
    title: "Co robi agencja social media",
    shortLabel: "Co robi",
    description: "Zakres prac: strategia, treści, reklama, analityka, community.",
    metaTitle: "Co robi agencja social media? Pełna lista zadań",
    metaDescription:
      "Strategia, content, kampanie, analityka, community management. Co dokładnie robi agencja social media i za co odpowiada.",
    kind: "info",
    intent: "informational",
  },
  {
    slug: "vs-samodzielny",
    path: "/agencja-social-media/vs-samodzielny",
    title: "Agencja social media vs samodzielne prowadzenie",
    shortLabel: "Vs in-house",
    description: "Porównanie kosztów, czasu, wyników i ryzyka obu modeli.",
    metaTitle: "Agencja social media czy in-house? Porównanie",
    metaDescription:
      "Co opłaca się bardziej: zatrudnić agencję social media czy prowadzić profil samodzielnie. Analiza kosztów i efektów.",
    kind: "info",
    intent: "commercial",
  },
  {
    slug: "rodzaje-uslug",
    path: "/agencja-social-media/rodzaje-uslug",
    title: "Rodzaje usług agencji social media",
    shortLabel: "Usługi",
    description: "Pełna mapa usług: od audytu i strategii po produkcję reels i Ads.",
    metaTitle: "Rodzaje usług agencji social media 2026",
    metaDescription:
      "Audyt, strategia, content, reels, Meta/TikTok Ads, influencer, community. Mapa wszystkich usług agencji social media.",
    kind: "info",
    intent: "informational",
  },
  {
    slug: "platformy-2026",
    path: "/agencja-social-media/platformy-2026",
    title: "Najgorętsze platformy social media 2026",
    shortLabel: "Platformy 2026",
    description: "Instagram, TikTok, LinkedIn, YouTube Shorts, Threads — gdzie warto być.",
    metaTitle: "Platformy social media 2026 — ranking i trendy",
    metaDescription:
      "Gdzie inwestować budżet social media w 2026: Instagram, TikTok, LinkedIn, YouTube Shorts. Aktualny ranking platform.",
    kind: "info",
    intent: "informational",
  },
  {
    slug: "zasada-5-5-5",
    path: "/agencja-social-media/zasada-5-5-5",
    title: "Zasada 5-5-5 w social media",
    shortLabel: "Zasada 5-5-5",
    description: "Framework planowania treści: 5 edukacyjnych, 5 inspirujących, 5 sprzedażowych.",
    metaTitle: "Zasada 5-5-5 w social media — jak ją stosować",
    metaDescription:
      "Czym jest zasada 5-5-5 w social media i jak ją wdrożyć w plan publikacji. Praktyczne przykłady dla różnych branż.",
    kind: "info",
    intent: "informational",
  },
  {
    slug: "warszawa",
    path: "/agencja-social-media/warszawa",
    title: "Agencja social media Warszawa",
    shortLabel: "Warszawa",
    description: "Obsługa social media dla firm z Warszawy — strategia, content, Ads.",
    metaTitle: "Agencja social media Warszawa — Fotz Studio",
    metaDescription:
      "Profesjonalna obsługa social media dla firm z Warszawy. Strategia, content premium, reklamy. Bezpłatna konsultacja.",
    kind: "city",
    intent: "local",
  },
  {
    slug: "krakow",
    path: "/agencja-social-media/krakow",
    title: "Agencja social media Kraków",
    shortLabel: "Kraków",
    description: "Prowadzenie social media dla krakowskich firm — premium content i reklamy.",
    metaTitle: "Agencja social media Kraków — Fotz Studio",
    metaDescription:
      "Agencja social media Kraków. Strategia, reels, kampanie Meta Ads i TikTok Ads dla małych i średnich firm.",
    kind: "city",
    intent: "local",
  },
  {
    slug: "wroclaw",
    path: "/agencja-social-media/wroclaw",
    title: "Agencja social media Wrocław",
    shortLabel: "Wrocław",
    description: "Kompleksowa obsługa SM dla firm z Wrocławia.",
    metaTitle: "Agencja social media Wrocław — Fotz Studio",
    metaDescription:
      "Profesjonalna obsługa social media we Wrocławiu. Content, reklamy, analityka, raporty. Bezpłatna wycena.",
    kind: "city",
    intent: "local",
  },
  {
    slug: "poznan",
    path: "/agencja-social-media/poznan",
    title: "Agencja social media Poznań",
    shortLabel: "Poznań",
    description: "Naszych klientów obsługujemy z Poznania — to nasz dom i baza produkcyjna.",
    metaTitle: "Agencja social media Poznań — Fotz Studio",
    metaDescription:
      "Fotz Studio — premium agencja social media z Poznania. Strategia, content video, kampanie Meta i TikTok. Spotkajmy się.",
    kind: "city",
    intent: "local",
  },
  {
    slug: "katowice",
    path: "/agencja-social-media/katowice",
    title: "Agencja social media Katowice",
    shortLabel: "Katowice",
    description: "Obsługa firm ze Śląska — content, reklamy, raporty.",
    metaTitle: "Agencja social media Katowice — Fotz Studio",
    metaDescription:
      "Agencja social media Katowice. Prowadzenie profili Instagram, Facebook i TikTok dla firm ze Śląska.",
    kind: "city",
    intent: "local",
  },
  {
    slug: "lublin",
    path: "/agencja-social-media/lublin",
    title: "Agencja social media Lublin",
    shortLabel: "Lublin",
    description: "Profesjonalne prowadzenie social media dla lubelskich firm.",
    metaTitle: "Agencja social media Lublin — Fotz Studio",
    metaDescription:
      "Agencja social media Lublin. Strategia, content i kampanie reklamowe dla firm z województwa lubelskiego.",
    kind: "city",
    intent: "local",
  },
  {
    slug: "szczecin",
    path: "/agencja-social-media/szczecin",
    title: "Agencja social media Szczecin",
    shortLabel: "Szczecin",
    description: "Social media marketing dla firm ze Szczecina i Pomorza Zachodniego.",
    metaTitle: "Agencja social media Szczecin — Fotz Studio",
    metaDescription:
      "Agencja social media Szczecin. Profesjonalna obsługa Instagrama, Facebooka i TikToka.",
    kind: "city",
    intent: "local",
  },
  {
    slug: "najlepsza-w-polsce",
    path: "/agencja-social-media/najlepsza-w-polsce",
    title: "Najlepsza agencja social media w Polsce",
    shortLabel: "Najlepsza w PL",
    description: "Po czym poznać dobrą agencję social media — kryteria, rankingi, case studies.",
    metaTitle: "Najlepsza agencja social media w Polsce — ranking",
    metaDescription:
      "Jak wybrać najlepszą agencję social media w Polsce — kryteria oceny, case studies i ranking liderów rynku 2026.",
    kind: "info",
    intent: "commercial",
  },
  {
    slug: "cennik",
    path: "/agencja-social-media/cennik",
    title: "Cennik agencji social media",
    shortLabel: "Cennik",
    description: "Ile kosztuje agencja social media — widełki, modele rozliczeń, kalkulator.",
    metaTitle: "Cennik agencji social media — ile to kosztuje?",
    metaDescription:
      "Cennik agencji social media 2026: pakiety Start, Business, Premium. Kalkulator wyceny i bezpłatna konsultacja.",
    kind: "pricing",
    intent: "commercial",
  },
  {
    slug: "modele-rozliczen",
    path: "/agencja-social-media/modele-rozliczen",
    title: "Modele rozliczeń z agencją social media",
    shortLabel: "Rozliczenia",
    description: "Abonament, projekt, performance, hybrid — co wybrać dla swojej firmy.",
    metaTitle: "Modele rozliczeń z agencją social media 2026",
    metaDescription:
      "Abonament, projekt, performance, hybrid. Modele współpracy z agencją social media — wady, zalety, kiedy stosować.",
    kind: "info",
    intent: "commercial",
  },
  {
    slug: "pakiety",
    path: "/agencja-social-media/pakiety",
    title: "Pakiety usług agencji social media",
    shortLabel: "Pakiety",
    description: "Co zawierają pakiety Start, Business i Premium w Fotz Studio.",
    metaTitle: "Pakiety social media — Start, Business, Premium",
    metaDescription:
      "Co dostajesz w pakietach social media Fotz Studio: liczba postów, reels, raportów. Porównanie i wycena.",
    kind: "pricing",
    intent: "commercial",
  },
  {
    slug: "czy-warto",
    path: "/agencja-social-media/czy-warto",
    title: "Czy warto zatrudnić agencję social media",
    shortLabel: "Czy warto",
    description: "Argumenty za i przeciw — kiedy agencja się opłaca, a kiedy nie.",
    metaTitle: "Czy warto zatrudnić agencję social media?",
    metaDescription:
      "Kiedy agencja social media się opłaca, a kiedy lepiej zatrudnić wewnętrznego specjalistę. Analiza i kalkulacja ROI.",
    kind: "info",
    intent: "commercial",
  },
  {
    slug: "jak-negocjowac",
    path: "/agencja-social-media/jak-negocjowac",
    title: "Jak negocjować cennik z agencją social media",
    shortLabel: "Negocjacje",
    description: "Praktyczne wskazówki: o co pytać, jak weryfikować, czego unikać.",
    metaTitle: "Jak negocjować cennik z agencją social media",
    metaDescription:
      "Praktyczny poradnik negocjacji z agencją social media. O co pytać, jak weryfikować ofertę, jakie zapisy w umowie.",
    kind: "info",
    intent: "commercial",
  },
  {
    slug: "roi",
    path: "/agencja-social-media/roi",
    title: "Kiedy agencja social media się opłaca (ROI)",
    shortLabel: "ROI",
    description: "Jak liczyć zwrot z inwestycji w social media i kiedy efekty są realne.",
    metaTitle: "ROI z agencji social media — jak liczyć zwrot",
    metaDescription:
      "Jak mierzyć ROI z inwestycji w agencję social media. Wskaźniki, modele atrybucji, realne benchmarki.",
    kind: "info",
    intent: "commercial",
  },
];

export const SM_CLUSTERS_BY_SLUG: Record<string, SocialMediaCluster> =
  Object.fromEntries(SOCIAL_MEDIA_CLUSTERS.map((c) => [c.slug, c]));