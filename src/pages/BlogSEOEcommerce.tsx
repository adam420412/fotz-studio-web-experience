import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Search, ShoppingCart, TrendingUp, FileText, Globe, Link2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Jak długo trwa pozycjonowanie sklepu internetowego?",
    answer: "Pierwsze efekty widoczne po 3-6 miesiącach, stabilne pozycje po 6-12 miesiącach. E-commerce wymaga więcej czasu ze względu na dużą liczbę podstron i konkurencję. Kluczowe jest ciągłe działanie i optymalizacja."
  },
  {
    question: "Czy warto inwestować w SEO dla sklepu online?",
    answer: "Zdecydowanie tak. SEO generuje 53% ruchu w e-commerce i ma najwyższy ROI spośród kanałów marketingowych. W przeciwieństwie do reklam, ruch organiczny nie znika po zakończeniu kampanii."
  },
  {
    question: "Jakie błędy SEO najczęściej popełniają sklepy internetowe?",
    answer: "Najczęstsze błędy: duplikaty treści (warianty produktów), słabe opisy kategorii, brak optymalizacji obrazów, ignorowanie filtrowanych URL-i, wolne ładowanie strony, brak wersji mobilnej i thin content na kartach produktów."
  },
  {
    question: "Jak zoptymalizować kartę produktu pod SEO?",
    answer: "Kluczowe elementy: unikatowy opis min. 300 słów, optymalizowane zdjęcia z alt-text, Product Schema (cena, dostępność, opinie), właściwy H1 z frazą kluczową, breadcrumbs, linkowanie do powiązanych produktów."
  },
  {
    question: "Ile kosztuje SEO dla sklepu e-commerce?",
    answer: "Koszt zależy od wielkości sklepu i konkurencji. Małe sklepy: 2000-5000 PLN/mies., średnie: 5000-15000 PLN/mies., duże marketplace: 15000-50000+ PLN/mies. Inwestycja zwraca się przez wzrost ruchu organicznego."
  }
];

const BlogSEOEcommerce = () => {
  return (
    <>
      <Helmet>
        <title>SEO dla sklepów internetowych - jak pozycjonować e-commerce | Fotz Studio</title>
        <meta 
          name="description" 
          content="Kompletny poradnik SEO dla e-commerce. Poznaj strategie pozycjonowania sklepów internetowych, optymalizację kategorii i kart produktowych." 
        />
        <meta name="keywords" content="seo e-commerce, pozycjonowanie sklepu internetowego, seo dla sklepów, optymalizacja e-commerce, seo produktów" />
        <link rel="canonical" href="https://fotz.pl/blog/seo-ecommerce" />
      </Helmet>
      <ArticleSchema
        title="SEO dla sklepów internetowych - jak pozycjonować e-commerce"
        description="Kompletny poradnik SEO dla e-commerce. Strategie pozycjonowania sklepów internetowych."
        url="https://fotz.pl/blog/seo-ecommerce"
        datePublished="2025-01-04"
        dateModified="2025-01-04"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SEO e-commerce", url: "https://fotz.pl/blog/seo-ecommerce" },
        ]}
      />
      <FAQSchema items={faqItems} />
      
      <Layout>
        <article className="pt-32 pb-20">
          <div className="container-wide px-6 md:px-12">
            {/* Back button */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do bloga
            </Link>

            {/* Header */}
            <header className="max-w-4xl mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Poradnik
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                  SEO
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                SEO dla sklepów internetowych - jak pozycjonować e-commerce
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Kompletny przewodnik po pozycjonowaniu sklepów internetowych. Poznaj sprawdzone strategie SEO dla e-commerce, które zwiększą widoczność Twoich produktów w Google.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Zespół Fotz Studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Styczeń 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>18 min czytania</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-primary/20 via-secondary to-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <ShoppingCart className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                  <Search className="w-16 h-16 text-primary/60 mx-auto" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl prose prose-lg prose-invert">
              
              {/* Table of Contents */}
              <div className="bg-secondary/30 rounded-2xl p-8 mb-12 not-prose">
                <h2 className="text-xl font-bold mb-4">Spis treści</h2>
                <nav className="space-y-2">
                  <a href="#wprowadzenie" className="block text-muted-foreground hover:text-foreground transition-colors">1. Dlaczego SEO jest kluczowe dla e-commerce?</a>
                  <a href="#audyt" className="block text-muted-foreground hover:text-foreground transition-colors">2. Audyt SEO sklepu internetowego</a>
                  <a href="#architektura" className="block text-muted-foreground hover:text-foreground transition-colors">3. Architektura informacji w e-commerce</a>
                  <a href="#kategorie" className="block text-muted-foreground hover:text-foreground transition-colors">4. Optymalizacja stron kategorii</a>
                  <a href="#produkty" className="block text-muted-foreground hover:text-foreground transition-colors">5. SEO kart produktowych</a>
                  <a href="#techniczne" className="block text-muted-foreground hover:text-foreground transition-colors">6. Techniczne SEO dla sklepów</a>
                  <a href="#content" className="block text-muted-foreground hover:text-foreground transition-colors">7. Content marketing w e-commerce</a>
                  <a href="#linkbuilding" className="block text-muted-foreground hover:text-foreground transition-colors">8. Link building dla sklepów</a>
                  <a href="#monitoring" className="block text-muted-foreground hover:text-foreground transition-colors">9. Monitoring i analityka</a>
                </nav>
              </div>

              <section id="wprowadzenie">
                <h2>Dlaczego SEO jest kluczowe dla e-commerce?</h2>
                <p>
                  Pozycjonowanie sklepu internetowego to jeden z najważniejszych kanałów pozyskiwania klientów. W przeciwieństwie do płatnych reklam, ruch organiczny jest bezpłatny i buduje długoterminową wartość biznesu.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 my-8 not-prose">
                  <h3 className="text-xl font-bold mb-4">Kluczowe statystyki SEO w e-commerce</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background/50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-primary mb-2">44%</div>
                      <p className="text-sm text-muted-foreground">kupujących online rozpoczyna od wyszukiwarki</p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-primary mb-2">23%</div>
                      <p className="text-sm text-muted-foreground">średni współczynnik konwersji z ruchu organicznego</p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-primary mb-2">5.7x</div>
                      <p className="text-sm text-muted-foreground">wyższy ROI SEO vs płatne reklamy</p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-primary mb-2">75%</div>
                      <p className="text-sm text-muted-foreground">użytkowników nie scrolluje poza 1. stronę wyników</p>
                    </div>
                  </div>
                </div>

                <p>
                  Dobrze zoptymalizowany sklep może generować tysiące odwiedzin miesięcznie bez wydawania budżetu na reklamy. To szczególnie ważne dla małych i średnich e-commerce, które nie mogą konkurować budżetami reklamowymi z gigantami.
                </p>
              </section>

              <section id="audyt">
                <h2>Audyt SEO sklepu internetowego</h2>
                <p>
                  Przed rozpoczęciem optymalizacji musisz dokładnie przeanalizować obecny stan swojego sklepu. Profesjonalny audyt SEO pozwoli zidentyfikować problemy i ustalić priorytety działań.
                </p>

                <div className="not-prose my-8">
                  <div className="bg-secondary/30 rounded-2xl p-8">
                    <h3 className="text-xl font-bold mb-6">Kluczowe elementy audytu e-commerce</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                        <Search className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">Analiza widoczności</h4>
                          <p className="text-sm text-muted-foreground">Sprawdź na jakie słowa kluczowe rantujesz i jakie pozycje zajmujesz</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                        <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">Indeksacja</h4>
                          <p className="text-sm text-muted-foreground">Ile stron jest zaindeksowanych? Czy są duplikaty lub błędy crawlowania?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                        <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">Szybkość ładowania</h4>
                          <p className="text-sm text-muted-foreground">Core Web Vitals mają bezpośredni wpływ na pozycje w Google</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                        <Link2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">Profil linków</h4>
                          <p className="text-sm text-muted-foreground">Jakie domeny linkują do Twojego sklepu? Jakość vs ilość</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="architektura">
                <h2>Architektura informacji w e-commerce</h2>
                <p>
                  Struktura sklepu internetowego ma fundamentalne znaczenie dla SEO. Dobrze zaprojektowana architektura ułatwia robotom Google indeksowanie i pomaga użytkownikom znajdować produkty.
                </p>

                <h3>Zasada 3 kliknięć</h3>
                <p>
                  Każdy produkt w sklepie powinien być dostępny maksymalnie w 3 kliknięciach od strony głównej. Płaska struktura kategorii poprawia crawlowalność i przekazywanie mocy linków.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-6 not-prose">
                  <h4 className="font-bold mb-4">Przykładowa struktura URL</h4>
                  <div className="font-mono text-sm space-y-2">
                    <p className="text-green-400">✓ sklep.pl/kategoria/podkategoria/produkt</p>
                    <p className="text-green-400">✓ sklep.pl/buty-sportowe/buty-do-biegania/nike-air-max</p>
                    <p className="text-red-400">✗ sklep.pl/product.php?id=12345&cat=67</p>
                    <p className="text-red-400">✗ sklep.pl/p/123/abc-xyz-789</p>
                  </div>
                </div>

                <h3>Breadcrumbs i nawigacja</h3>
                <p>
                  Okruszki (breadcrumbs) to nie tylko element UX, ale także ważny sygnał dla Google. Pomagają zrozumieć strukturę sklepu i generują rich snippets w wynikach wyszukiwania.
                </p>
              </section>

              <section id="kategorie">
                <h2>Optymalizacja stron kategorii</h2>
                <p>
                  Strony kategorii to często niedoceniane źródło ruchu organicznego. Dobrze zoptymalizowana kategoria może rankować na setki słów kluczowych związanych z danym typem produktów.
                </p>

                <div className="not-prose my-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/30 rounded-xl p-6">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Elementy strony kategorii
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Unikalne H1 z głównym słowem kluczowym
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Tekst wprowadzający (300-500 słów)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Filtry z przyjaznym URL
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Paginacja z rel=next/prev
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Linkowanie do podkategorii
                        </li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 rounded-xl p-6">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        Błędy do unikania
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Duplikacja treści przez filtry
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Brak tekstu - same produkty
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Thin content na pustych kategoriach
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Indeksowanie parametrów sortowania
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Identyczne meta tagi
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="produkty">
                <h2>SEO kart produktowych</h2>
                <p>
                  Każda karta produktowa to potencjalna strona wejściowa dla ruchu organicznego. Optymalizacja produktów jest szczególnie ważna dla zapytań long-tail, które mają wysoką intencję zakupową.
                </p>

                <h3>Unikalne opisy produktów</h3>
                <p>
                  Najczęstszy błąd w e-commerce SEO to kopiowanie opisów od producenta. Google traktuje to jako duplikację treści i może obniżyć pozycje Twojego sklepu. Każdy produkt powinien mieć unikalny opis zawierający:
                </p>

                <ul>
                  <li>Główne słowo kluczowe (nazwa produktu + marka)</li>
                  <li>Szczegółowe specyfikacje i parametry</li>
                  <li>Korzyści dla użytkownika</li>
                  <li>Zastosowania i przypadki użycia</li>
                  <li>Odpowiedzi na najczęstsze pytania</li>
                </ul>

                <h3>Schema markup dla produktów</h3>
                <p>
                  Dane strukturalne Product Schema pozwalają wyświetlać w Google rich snippets z ceną, dostępnością, oceną i zdjęciem produktu. To znacząco zwiększa CTR w wynikach wyszukiwania.
                </p>

                <div className="bg-secondary/30 rounded-xl p-6 my-6 not-prose">
                  <h4 className="font-bold mb-4">Wymagane pola Product Schema</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-background/50 rounded-lg p-3">name</div>
                    <div className="bg-background/50 rounded-lg p-3">image</div>
                    <div className="bg-background/50 rounded-lg p-3">description</div>
                    <div className="bg-background/50 rounded-lg p-3">sku</div>
                    <div className="bg-background/50 rounded-lg p-3">offers.price</div>
                    <div className="bg-background/50 rounded-lg p-3">offers.availability</div>
                    <div className="bg-background/50 rounded-lg p-3">aggregateRating</div>
                    <div className="bg-background/50 rounded-lg p-3">review</div>
                    <div className="bg-background/50 rounded-lg p-3">brand</div>
                  </div>
                </div>
              </section>

              <section id="techniczne">
                <h2>Techniczne SEO dla sklepów</h2>
                <p>
                  Sklepy internetowe mają specyficzne wyzwania techniczne, które wymagają szczególnej uwagi. Duża liczba stron, dynamiczna treść i złożone filtry mogą powodować problemy z indeksacją.
                </p>

                <h3>Core Web Vitals</h3>
                <p>
                  Google oficjalnie uwzględnia szybkość ładowania jako czynnik rankingowy. Dla e-commerce jest to szczególnie ważne, bo sklepy często mają dużo obrazów i skryptów.
                </p>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 my-6 not-prose">
                  <h4 className="font-bold mb-4">Optymalizacja Core Web Vitals</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">LCP (Largest Contentful Paint)</span>
                        <span className="text-green-400">&lt; 2.5s</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Kompresja obrazów, lazy loading, CDN</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">FID (First Input Delay)</span>
                        <span className="text-green-400">&lt; 100ms</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Optymalizacja JavaScript, code splitting</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">CLS (Cumulative Layout Shift)</span>
                        <span className="text-green-400">&lt; 0.1</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Wymiary obrazów, stabilny layout</p>
                    </div>
                  </div>
                </div>

                <h3>Zarządzanie duplikatami</h3>
                <p>
                  Sklepy generują masę duplikatów przez filtry, sortowanie i warianty produktów. Kluczowe jest prawidłowe użycie tagów canonical i robots meta:
                </p>

                <ul>
                  <li>Canonical tag na stronach z filtrami wskazujący na główną kategorię</li>
                  <li>Noindex dla stron sortowania i mało wartościowych filtrów</li>
                  <li>Rel=prev/next dla paginacji</li>
                  <li>Jeden produkt = jeden URL (nie duplikuj w wielu kategoriach)</li>
                </ul>
              </section>

              <section id="content">
                <h2>Content marketing w e-commerce</h2>
                <p>
                  Blog i poradniki to świetny sposób na przyciąganie ruchu na frazy informacyjne i budowanie autorytetu. Użytkownicy szukający porad często stają się klientami.
                </p>

                <div className="not-prose my-8">
                  <div className="bg-secondary/30 rounded-2xl p-8">
                    <h3 className="text-xl font-bold mb-6">Typy contentu dla e-commerce</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-xl p-4">
                        <h4 className="font-semibold mb-2">📚 Poradniki zakupowe</h4>
                        <p className="text-sm text-muted-foreground">"Jak wybrać rower górski? Poradnik dla początkujących"</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-4">
                        <h4 className="font-semibold mb-2">⚖️ Porównania produktów</h4>
                        <p className="text-sm text-muted-foreground">"iPhone 15 vs Samsung S24 - który wybrać?"</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-4">
                        <h4 className="font-semibold mb-2">🏆 Rankingi i TOP listy</h4>
                        <p className="text-sm text-muted-foreground">"TOP 10 najlepszych laptopów do pracy 2025"</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-4">
                        <h4 className="font-semibold mb-2">🔧 Instrukcje użytkowania</h4>
                        <p className="text-sm text-muted-foreground">"Jak prawidłowo dbać o skórzane buty?"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="linkbuilding">
                <h2>Link building dla sklepów</h2>
                <p>
                  Budowanie linków w e-commerce wymaga kreatywności. Trudno zdobyć naturalne linki do stron kategorii czy produktów, ale są sprawdzone strategie:
                </p>

                <ul>
                  <li><strong>Digital PR</strong> - informacje prasowe o nowych produktach i promocjach</li>
                  <li><strong>Guest posting</strong> - eksperckie artykuły na branżowych blogach</li>
                  <li><strong>Linkable assets</strong> - infografiki, kalkulatory, narzędzia online</li>
                  <li><strong>Współpraca z influencerami</strong> - recenzje i unboxingi z linkami</li>
                  <li><strong>Broken link building</strong> - znajdowanie martwych linków u konkurencji</li>
                </ul>
              </section>

              <section id="monitoring">
                <h2>Monitoring i analityka</h2>
                <p>
                  SEO e-commerce wymaga ciągłego monitorowania. Kluczowe metryki, które powinieneś śledzić:
                </p>

                <div className="not-prose my-8">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-primary/10 rounded-xl p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-bold mb-2">Pozycje</h4>
                      <p className="text-sm text-muted-foreground">Tracking słów kluczowych dla kategorii i produktów</p>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-6 text-center">
                      <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-bold mb-2">Ruch organiczny</h4>
                      <p className="text-sm text-muted-foreground">Sesje, użytkownicy, strony wejściowe z Google</p>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-6 text-center">
                      <ShoppingCart className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-bold mb-2">Konwersje</h4>
                      <p className="text-sm text-muted-foreground">Sprzedaż i przychód z ruchu SEO</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="not-prose mt-16">
                <h2 className="text-2xl font-bold mb-8">Najczęściej zadawane pytania</h2>
                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-xl p-6">
                    <h3 className="font-bold mb-2">Ile trwa pozycjonowanie sklepu internetowego?</h3>
                    <p className="text-muted-foreground">Pierwsze efekty widać po 3-6 miesiącach, ale pełne rezultaty SEO dla e-commerce pojawiają się po 12-18 miesiącach systematycznej pracy.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-6">
                    <h3 className="font-bold mb-2">Czy warto pozycjonować produkty czy kategorie?</h3>
                    <p className="text-muted-foreground">Oba! Kategorie rankują na ogólne frazy (np. "buty sportowe"), a produkty na szczegółowe zapytania (np. "Nike Air Max 90 białe męskie").</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-6">
                    <h3 className="font-bold mb-2">Jak radzić sobie z produktami, które kończą się?</h3>
                    <p className="text-muted-foreground">Nie usuwaj stron! Przekieruj 301 na podobny produkt lub kategorię, aby zachować wartość SEO zbudowanych linków.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-6">
                    <h3 className="font-bold mb-2">Ile kosztuje pozycjonowanie sklepu?</h3>
                    <p className="text-muted-foreground">Profesjonalne SEO e-commerce to koszt od 3000 do 15000 zł miesięcznie, w zależności od wielkości sklepu i konkurencyjności branży.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="not-prose mt-16 bg-gradient-to-r from-primary/20 to-secondary rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Potrzebujesz pomocy z SEO Twojego sklepu?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Wykonujemy profesjonalne audyty SEO i kompleksowe pozycjonowanie sklepów internetowych. Zwiększ widoczność i sprzedaż organiczną.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/kontakt">Zamów audyt SEO</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/pozycjonowanie">Zobacz nasze usługi SEO</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <RelatedArticles 
              currentArticleId="seo-ecommerce"
              maxArticles={3}
            />
          </div>
        </article>
      </Layout>
    </>
  );
};

export default BlogSEOEcommerce;
