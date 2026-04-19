import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Check } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Jak zacząć audyt SEO strony internetowej?",
    answer: "Rozpocznij od postawienia jasnego celu — czy chcesz poprawić ranking, zwiększyć ruch organiczny czy znaleźć błędy techniczne? Następnie zbierz informacje: listę stron do sprawdzenia, słowa kluczowe, dane z Google Search Console i Analytics. Przygotuj sobie narzędzia: Google Search Console, Google PageSpeed Insights, Screaming Frog, Google Analytics 4. Na koniec utwórz szablon raportu z kolumnami na problemy, priorytet i status."
  },
  {
    question: "Ile czasu zajmuje przeprowadzenie audytu SEO?",
    answer: "Audyt podstawowy małej strony (poniżej 100 stron) zajmuje 2-4 godziny. Średniej strony (100-1000 stron) około 8-16 godzin. Dużego portalu (1000+ stron) może zająć tygodnie. Jeśli używasz zaawansowanego narzędzia wie SEMrush lub Ahrefs, proces znacznie przyspieszysz. Fotz Studio przeprowadza pełny audyt w 2-3 dni robocze."
  },
  {
    question: "Co to jest techniczny audyt SEO?",
    answer: "Techniczny audyt SEO to sprawdzenie struktury strony pod kątem wymogów wyszukiwarek: szybkość ładowania, mobilność, Core Web Vitals, sitemap XML, robots.txt, strukturalne błędy HTML, problemy z SSL/HTTPS, redirecty 301, canonical tagi, duplicate content, błędy 404 i indeksowaniem. To fundamenty, na których buduje się dobrą widoczność w Google."
  },
  {
    question: "Jakie narzędzia darmowe do audytu SEO polecacie?",
    answer: "Darmowe narzędzia to: Google Search Console (obowiązkowe), Google Analytics 4, Screaming Frog (do 500 stron za darmo), Google PageSpeed Insights, GTmetrix, Lighthouse. Wszystkie są wystarczające do podstawowego audytu. Jeśli potrzebujesz analiza backlinków czy konkurencji, spróbuj: Ubersuggest (limitowany plan darmowy), Semrush (7-dniowy trial), Ahrefs (trial 7 dni)."
  },
  {
    question: "Czy mogę przeprowadzić audyt SEO sam bez agencji?",
    answer: "Tak, możesz! Jeśli masz stronę do 100 stron i podstawową wiedzę o SEO, darmowe narzędzia wystarczą. Jeśli jednak chcesz pełną analizę z raportami, rekomendacjami priorytetu i strategią naprawczą, lepiej zlecić profesjonalistom. Agencja SEO oszczędzi Ci czasu i da gwarancję, że nic nie przegapisz."
  },
  {
    question: "Co zrobić po przeprowadzeniu audytu SEO?",
    answer: "Zrób listę wszystkich znalezionych problemów i podziel je na kategorie: błędy techniczne (naprawiaj najpierw), SEO on-page, backlinki, treści. Ustal priorytety na podstawie wpływu na ranking i czasu wdrożenia — zacznij od wysokiego wpływu + mały czas. Stwórz plan działań z harmonogramem, przydziel odpowiedzialne osoby, monitoruj postępy i powtórz audyt za 2-3 miesiące."
  },
  {
    question: "Czy audyt SEO trzeba robić co miesiąc?",
    answer: "Pełny audyt wystarczy raz na 2-3 miesiące. Jednak monitoring powinien być ciągły! Codziennie sprawdzaj Google Search Console (nowe błędy, zmiana clickthrough rate), tygodniowo Analytics (ruch, konwersje), a raz w miesiącu Core Web Vitals. Agencje SEO zazwyczaj robią pełny audyt co kwartał i monitoring cotygodniowo."
  },
  {
    question: "Ile kosztuje profesjonalny audyt SEO od agencji?",
    answer: "Audyt SEO od agencji kosztuje zazwyczaj: audyt podstawowy 500-1500 PLN, standardowy 1500-3500 PLN, zaawansowany z rekomendacjami 3500-7500 PLN. Cena zależy od rozmiaru strony, detalizacji raportu, zakresu konkurencji i czasu realizacji. Fotz Studio oferuje audyt SEO z bezpłatną konsultacją — skontaktuj się, aby poznać szczegółowy cennik."
  }
];

const auditAreas = [
  {
    step: "1",
    area: "Analiza słów kluczowych",
    description: "Zdefiniuj docelowe słowa kluczowe, sprawdź ich wyszukiwalność (volume) i konkurencyjność. Przeanalizuj słowa kluczowe konkurentów.",
    tools: "Google Keyword Planner, Ubersuggest, SEMrush",
    priority: "Krytyczn"
  },
  {
    step: "2",
    area: "Szybkość ładowania strony",
    description: "Sprawdź Page Speed Insights, Core Web Vitals (LCP, FID, CLS), czas TTFB. Optymalizuj obrazy, minimalizuj CSS/JS, włącz cache.",
    tools: "Google PageSpeed Insights, GTmetrix, WebPageTest",
    priority: "Krytical"
  },
  {
    step: "3",
    area: "Mobilność i responsywność",
    description: "Testuj wyświetlanie na urządzeniach mobilnych, sprawdzaj viewport meta tag, rozmiary fontów, clickable areas. Użyj Mobile-Friendly Test.",
    tools: "Google Mobile-Friendly Test, DevTools, Responsively App",
    priority: "Krytical"
  },
  {
    step: "4",
    area: "Indeksowanie i crawlowanie",
    description: "Sprawdzaj robots.txt, sitemap.xml, canonical tagi, meta robots. Monitoruj błędy crawlowania w Google Search Console.",
    tools: "Google Search Console, Screaming Frog, robots.txt tester",
    priority: "Krytical"
  },
  {
    step: "5",
    area: "On-page SEO (meta tagi i H1)",
    description: "Sprawdź title, meta description, H1 na każdej stronie — powinny zawierać słowa kluczowe, być unikalne i odpowiednich długości.",
    tools: "Yoast SEO, Screaming Frog, Page Analyzer",
    priority: "Wysoki"
  },
  {
    step: "6",
    area: "Jakość i unikalna treść",
    description: "Sprawdzaj duplicate content, zbyt krótkie artykuły (pod 300 słów), słabe CMS. Analizuj głębię i wartość treści vs konkurencja.",
    tools: "Copyscape, SEMrush, Screaming Frog (duplicates)",
    priority: "Wysoki"
  },
  {
    step: "7",
    area: "Linki wewnętrzne (internal links)",
    description: "Mapuj strukturę linking, sprawdzaj broken links, optymalizuj anchor text. Ważne strony powinny mieć więcej linków wewnętrznych.",
    tools: "Screaming Frog, Ahrefs, SEMrush Site Audit",
    priority: "Wysoki"
  },
  {
    step: "8",
    area: "Profil backlinków",
    description: "Przeanalizuj quality (Domain Rating, spam score) i quantity linków zewnętrznych. Szukaj toksycznych backlinków, konkurencji i link building opportunities.",
    tools: "Ahrefs, SEMrush, Moz, Majestic",
    priority: "Wysoki"
  },
  {
    step: "9",
    area: "Local SEO (jeśli relevantne)",
    description: "Sprawdź Google Business Profile, cytacje w katalogach, opinie, lokalne słowa kluczowe. Zoptymalizuj schema markup dla business.",
    tools: "Google Business Profile, Local SEO Checker, Schema Validator",
    priority: "Średni"
  },
  {
    step: "10",
    area: "UX i wskaźniki biznesowe",
    description: "Analizuj bounce rate, średni czas na stronie, conversion rate, heatmapy. Testuj CTA buttons, formularze, user journey.",
    tools: "Google Analytics 4, Hotjar, Microsoft Clarity",
    priority: "Średni"
  }
];

const toolsData = {
  free: [
    { name: "Google Search Console", category: "Podstawowe" },
    { name: "Google Analytics 4", category: "Podstawowe" },
    { name: "Google PageSpeed Insights", category: "Wydajność" },
    { name: "Screaming Frog (limit 500 URL)", category: "Crawling" },
    { name: "GTmetrix", category: "Wydajność" },
    { name: "Lighthouse", category: "Wydajność" },
    { name: "Mobile-Friendly Test", category: "Mobilność" },
    { name: "Schema Validator", category: "Techniczne" },
    { name: "Ubersuggest (plan limitowany)", category: "Słowa kluczowe" }
  ],
  paid: [
    { name: "SEMrush", category: "Kompleksowy audit" },
    { name: "Ahrefs", category: "Backlinki i konkurencja" },
    { name: "Moz Pro", category: "SEO monitoring" },
    { name: "Screaming Frog (paid license)", category: "Zaawansowany crawling" },
    { name: "Surfer SEO", category: "Content optimization" },
    { name: "Hotjar", category: "UX heatmaps" },
    { name: "Microsoft Clarity", category: "UX analytics" }
  ]
};

export default function BlogAudytSEOKrok() {
  return (
    <>
      <SEOHead
        title="Jak Przeprowadzić Audyt SEO - Krok po Kroku | Fotz Studio"
        description="Kompletny przewodnik jak przeprowadzić audyt SEO: 10 kroków, narzędzia darmowe i płatne, praktyczne porady. Audyt strony krok po kroku."
        ogType="article"
        canonical="https://fotz.pl/blog/audyt-seo-krok-po-kroku"
        keywords="jak przeprowadzić audyt SEO, audyt SEO krok po kroku, audyt strony, narzędzia audytu SEO, techniczny audyt"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Jak Przeprowadzić Audyt SEO - Kompletny Przewodnik Krok po Kroku (2026)",
            "description": "Praktyczny przewodnik: jak wykonać audyt SEO strony internetowej. 10 kroków, narzędzia, checklist i plan działań.",
            "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2015",
            "author": {
              "@type": "Organization",
              "name": "FOTZ"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FOTZ",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fotz.pl/logo-fotz.jpg"
              }
            },
            "datePublished": "2026-04-12",
            "dateModified": "2026-04-12"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://fotz.pl" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fotz.pl/blog" },
              { "@type": "ListItem", "position": 3, "name": "Audyt SEO krok po kroku" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          }
        ]}
      />

      <FAQSchema items={faqItems} />
      <ArticleSchema
        headline="Jak Przeprowadzić Audyt SEO - Kompletny Przewodnik Krok po Kroku (2026)"
        description="Praktyczny przewodnik: jak wykonać audyt SEO strony internetowej. 10 kroków, narzędzia, checklist i plan działań."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2015"
        datePublished="2026-04-12"
        dateModified="2026-04-12"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Blog", url: "https://fotz.pl/blog" },
        { name: "Audyt SEO krok po kroku", url: "https://fotz.pl/blog/audyt-seo-krok-po-kroku" }
      ]} />

      <Layout>
        {/* Breadcrumb */}
        <section className="pt-32 pb-4 bg-gray-900">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-200">Audyt SEO krok po kroku</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <article className="pb-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-6">
                  <ArrowLeft className="h-4 w-4" />
                  Wróć do bloga
                </Link>

                <span className="inline-block text-sm font-medium text-yellow-400 uppercase tracking-wider mb-4">
                  SEO i Marketing
                </span>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Jak Przeprowadzić Audyt SEO - Kompletny Przewodnik Krok po Kroku
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Zespół FOTZ
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    12 kwietnia 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    18 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2015"
                    alt="Jak przeprowadzić audyt SEO - krok po kroku"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Intro Section */}
              <section className="prose prose-invert max-w-none mb-12 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Audyt SEO to systematyczne przeanalizowanie strony internetowej pod kątem optymalizacji dla wyszukiwarek. Jeśli chcesz wiedzieć, jak przeprowadzić audyt SEO krok po kroku, jesteś we właściwym miejscu. W tym przewodniku pokażemy Ci dokładnie, co sprawdzić, jakimi narzędziami się posłużyć i jak zaplanować strategię naprawczą.
                </p>
                <p className="text-lg leading-relaxed">
                  Audyt SEO to nie jednorazowa czynność. To proces, który powinieneś powtarzać co 2-3 miesiące, aby być pewnym, że Twoja witryna pozostaje konkurencyjna i dobrze zoptymalizowana dla Google. Poniżej znajdziesz pełny checklist wszystkich obszarów, które trzeba przeanalizować.
                </p>
              </section>

              {/* 10 Areas Table */}
              <section className="mb-14">
                <h2 className="text-3xl font-bold mb-8 text-white">10 Kroków do Pełnego Audytu SEO</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-yellow-400">
                        <th className="text-left py-4 px-4 text-yellow-400 font-bold">Krok</th>
                        <th className="text-left py-4 px-4 text-yellow-400 font-bold">Obszar Audytu</th>
                        <th className="text-left py-4 px-4 text-yellow-400 font-bold">Co Sprawdzamy</th>
                        <th className="text-left py-4 px-4 text-yellow-400 font-bold">Narzędzia</th>
                        <th className="text-left py-4 px-4 text-yellow-400 font-bold">Priorytet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {auditAreas.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                          <td className="py-4 px-4 text-yellow-400 font-bold">{row.step}</td>
                          <td className="py-4 px-4 text-white font-semibold">{row.area}</td>
                          <td className="py-4 px-4 text-gray-300">{row.description}</td>
                          <td className="py-4 px-4 text-gray-400 text-sm">{row.tools}</td>
                          <td className="py-4 px-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              row.priority === "Krytical"
                                ? "bg-red-900 text-red-200"
                                : row.priority === "Wysoki"
                                ? "bg-orange-900 text-orange-200"
                                : "bg-blue-900 text-blue-200"
                            }`}>
                              {row.priority}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Tools Section */}
              <section className="mb-14 bg-gray-800 rounded-xl p-8 border border-yellow-400 border-opacity-20">
                <h2 className="text-3xl font-bold mb-8 text-white">Narzędzia do Audytu SEO</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Free Tools */}
                  <div>
                    <h3 className="text-xl font-bold mb-6 text-yellow-400">Narzędzia Darmowe</h3>
                    <ul className="space-y-3">
                      {toolsData.free.map((tool, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <Check className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-white">{tool.name}</span>
                            <p className="text-sm text-gray-400">{tool.category}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Paid Tools */}
                  <div>
                    <h3 className="text-xl font-bold mb-6 text-yellow-400">Narzędzia Premium</h3>
                    <ul className="space-y-3">
                      {toolsData.paid.map((tool, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <Check className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-white">{tool.name}</span>
                            <p className="text-sm text-gray-400">{tool.category}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Prioritization Section */}
              <section className="mb-14">
                <h2 className="text-3xl font-bold mb-8 text-white">Co Zrobić z Wynikami Audytu? - Macierz Priorytetu</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Po wykonaniu audytu masz listę problemów. Nie wszystkie są jednakowo ważne. Użyj macierzy priorytetu, aby zdecydować, co naprawiać w pierwszej kolejności.
                </p>

                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-900 bg-opacity-30 border-l-4 border-red-500 p-6 rounded">
                      <h4 className="text-red-400 font-bold text-lg mb-2">Wysoki Wpływ + Mały Czas</h4>
                      <p className="text-gray-300 text-sm">Rób to NAJPIERW! Przykład: naprawy błędów technicznych, meta tagi na homepage.</p>
                    </div>
                    <div className="bg-yellow-900 bg-opacity-30 border-l-4 border-yellow-500 p-6 rounded">
                      <h4 className="text-yellow-400 font-bold text-lg mb-2">Wysoki Wpływ + Duży Czas</h4>
                      <p className="text-gray-300 text-sm">Zaplanuj na później. Przykład: refaktor dużej liczby stron, kompletna restrukturyzacja.</p>
                    </div>
                    <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-500 p-6 rounded">
                      <h4 className="text-blue-400 font-bold text-lg mb-2">Niski Wpływ + Mały Czas</h4>
                      <p className="text-gray-300 text-sm">Rób w tle. Przykład: drobne poprawki UX, drobne błędy ALT tekstu.</p>
                    </div>
                    <div className="bg-gray-700 bg-opacity-50 border-l-4 border-gray-600 p-6 rounded">
                      <h4 className="text-gray-300 font-bold text-lg mb-2">Niski Wpływ + Duży Czas</h4>
                      <p className="text-gray-300 text-sm">Pomiń! Nie warte czasu. Przykład: eksperymenty na marginesie biznesu.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step by Step Section */}
              <section className="mb-14">
                <h2 className="text-3xl font-bold mb-8 text-white">Jak Przeprowadzić Audyt - Praktyczne Kroki</h2>

                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400 text-gray-900 font-bold">1</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Krok Przygotowczy: Zbierz Dane Baseline</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Zdobądź dostęp do Google Search Console (pokaże błędy crawlowania, problemy z indeksowaniem), Google Analytics 4 (ruch, konwersje, behavior flow), narzędzia SEO (SEMrush, Ahrefs czy nawet darmowy Ubersuggest). Wypisz wszystkie strony, które chcesz sprawdzić. Zanotuj obecne pozycje dla głównych słów kluczowych.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400 text-gray-900 font-bold">2</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Sprawdź Techniczne Podstawy</h3>
                        <p className="text-gray-300 leading-relaxed">
                          W Google Search Console kliknij "Coverage" i sprawdź, czy są błędy (excluded, error pages). Przejrzyj "Enhancement" sekcję pod kątem błędów. Sprawdź robots.txt i sitemap.xml. Użyj Screaming Frog, aby crawować stronę i znaleźć problemy: missing H1 tags, duplicate meta descriptions, broken links, redirect loops.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400 text-gray-900 font-bold">3</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Analiza Wydajności (Core Web Vitals)</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Przejdź do Google PageSpeed Insights i wklej URL. Zwróć uwagę na: LCP (Largest Contentful Paint - pod 2.5s to dobrze), FID (First Input Delay), CLS (Cumulative Layout Shift - pod 0.1). Jeśli wyniki są poniżej 75 punktów, jest dużo do zrobienia. Sprawdź GTmetrix, aby zobaczyć waterfalls i konkretne rekomendacje.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400 text-gray-900 font-bold">4</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">On-Page SEO: Meta Tagi i Nagłówki</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Dla każdej ważnej strony sprawdź: czy H1 zawiera słowo kluczowe, czy title (do 60 znaków) jest unikalny i zawiera keyword, czy meta description (do 160 znaków) jest przekonywujący. W Screaming Frog możesz zobaczyć wszystko na raz. Szukaj duplikatów metych.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400 text-gray-900 font-bold">5</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Analiza Treści i Duplicate Content</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Sprawdzaj każdą stronę: czy ma co najmniej 300 słów (jeśli powinna)? Czy zawiera dostateczną głębię? Czy tekst odpowiada na pytania użytkownika (People Also Ask w Google)? W Screaming Frog użyj filtrów do znalezienia: page duplicates, bardzo krótkiego contentu, brakujących tytułów. Zanotuj, które strony potrzebują refreshu.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400 text-gray-900 font-bold">6</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Linki Wewnętrzne i Struktura</h3>
                        <p className="text-gray-300 leading-relaxed">
                          W Screaming Frog przejdź do "Visualization" lub użyj SEMrush Site Audit. Sprawdź: czy orphan pages (strony bez linków wewnętrznych)? Czy struktura jest logiczna? Czy ważne strony mają dużo linków wewnętrznych? Anchor text powinien być deskryptywny, a nie "kliknij tutaj". Szukaj broken internal links.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400 text-gray-900 font-bold">7</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Profil Backlinków i External Links</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Użyj Ahrefs, SEMrush lub Moz do analizy: ile linków pochodzi z domach Quality? Jaki jest średni Domain Rating? Czy są linki toksyczne (spam)? Przeanalizuj backlinki konkurencji — gdzie oni dostają linki? Czy możesz tam też się pojawić? Szukaj linków ze stratami (broken backlinks z autorytatywnych źródeł).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400 text-gray-900 font-bold">8</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Testowanie Mobilności</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Użyj Google Mobile-Friendly Test. Sprawdzaj: czy layout jest responsywny? Czy czcionka jest czytalna (minimum 16px)? Czy interactive elements (buttony, linki) są odpowiedniej wielkości (minimum 48x48px)? Czy jest viewport meta tag? Testuj na rzeczywistych urządzeniach — iOS i Android.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400 text-gray-900 font-bold">9</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">UX i Metryki Biznesowe</h3>
                        <p className="text-gray-300 leading-relaxed">
                          W Google Analytics 4 przeanalizuj: bounce rate (czy użytkownicy natychmiast opuszczają stronę?), average session duration, conversion rate (ile osób wykonało desired action?). Użyj Hotjar lub Clarity, aby zobaczyć heatmapy — gdzie klikają użytkownicy? Gdzie się zatrzymują? Co powoduje, że opuszczają formularze?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400 text-gray-900 font-bold">10</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Stwórz Raport i Plan Działań</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Zbierz wszystkie znaleziska w jednym dokumencie. Podziel je na kategorie (techniczne, on-page, content, backlinki, UX). Każdemu problemowi przypisz: opis, narzędzie, wpływ (wysoki/średni/niski), czas wdrożenia. Ustal priorytety — najpierw problemy z wysokim wpływem i małym czasem. Stwórz timeline wdrożenia i przydziel osoby odpowiedzialne.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-14 bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold mb-8 text-white">Częste Pytania o Audycie SEO</h2>
                <div className="space-y-6">
                  {faqItems.map((item, idx) => (
                    <div key={idx} className="border-l-4 border-yellow-400 pl-6">
                      <h4 className="text-lg font-bold text-yellow-400 mb-2">{item.question}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-12 text-gray-900 text-center mb-14">
                <h2 className="text-4xl font-bold mb-4">Potrzebujesz Profesjonalnego Audytu SEO?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Zespół FOTZ przeprowadzi kompletny audyt Twojej strony i stworzy strategię wzrostu w wyszukiwaniu. Zarabiaj więcej klientów z SEO.
                </p>
                <Link to="/kontakt">
                  <Button className="bg-gray-900 text-yellow-400 hover:bg-gray-800 px-8 py-3 text-lg font-bold">
                    Zamów Audyt SEO
                  </Button>
                </Link>
              </section>

              {/* Related Articles */}
              <RelatedArticles />
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
