import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { FAQSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Ile kosztuje audyt strony internetowej?",
    answer: "Audyt strony internetowej za pomocą darmowych narzędzi może Ci nic nie kosztować. Natomiast profesjonalny audyt przeprowadzony przez agencję SEO kosztuje zazwyczaj od 500 do 5000 PLN w zależności od zakresu analizy, rozmiaru witryny i detalizacji raportu. Fotz Studio oferuje bezpłatny audyt podstawowy dla każdego klienta chcącego lepiej zrozumieć stan swojej strony."
  },
  {
    question: "Jak często przeprowadzać audyt SEO?",
    answer: "Minimalnie przeprowadź audyt SEO swojej strony co najmniej dwa razy w roku — idealne są cykl co trzy miesiące. Warto robić audyt zaraz po każdej znaczące zmianie na stronie, aktualizacji algorytmu Google, czy po wprowadzeniu nowych funkcjonalności. Aktywne monitorowanie SEO to gwarancja, że Twoja witryna będzie zawsze w najlepszej formie."
  },
  {
    question: "Co sprawdza audyt SEO strony?",
    answer: "Kompletny audyt SEO sprawdza: problemy techniczne (Core Web Vitals, szybkość ładowania, mobilność), on-page SEO (title tagi, meta opisy, strukturę nagłówków, słowa kluczowe), jakość contentu i wewnętrzne linki, profil backlinków (Domain Rating, linki toksyczne), problemy z indeksacją w Google Search Console, strukturalne dane i UX (szybkość, bounce rate, CTA)."
  },
  {
    question: "Jakie narzędzia do audytu strony internetowej?",
    answer: "Do audytu SEO możesz użyć: Google Search Console (indeksacja, raportowanie błędów), Google PageSpeed Insights (szybkość), Screaming Frog (crawling, problemy techniczne), Ahrefs lub SEMrush (backlinki, konkurencja), GTmetrix (wydajność), Lighthouse (Core Web Vitals). Dla pełnego audytu najlepiej połączyć kilka narzędzi lub korzystać z usług agencji SEO."
  },
  {
    question: "Czy audyt strony jest konieczny?",
    answer: "Tak — audyt strony internetowej jest bardzo ważny. Statystyki pokazują, że około 90% stron internetowych ma co najmniej jeden poważny problem SEO, o którym właściciele nie wiedzą. Bez audytu ryzykowałeś stracić potencjalne pozycje w Google, klientów i przychody. Audyt to inwestycja, która zwraca się wielokrotnie poprzez zoptymalizowaną widoczność w wyszukiwarce."
  },
  {
    question: "Co po audycie strony internetowej?",
    answer: "Po audycie SEO należy: spriorytetyzować wady wg wpływu na ranking (najpierw problemy techniczne, potem on-page, następnie link building), stworzyć plan działań naprawczych, wdrożyć zmiany (najlepiej z pomocą specjalisty SEO), monitorować postępy w Google Search Console i Analytics, powtórzyć audyt za 2-3 miesiące, aby zobaczyć efekty optymalizacji."
  },
];

export default function BlogAudytStrony() {
  return (
    <>
      <SEOHead
        title="Audyt Strony Internetowej — Co Sprawdzić i Jak Poprawić SEO? | Fotz Studio"
        description="Audyt strony internetowej: co sprawdzić? Przewodnik po audycie SEO, technicznych problemach, Core Web Vitals i koszcie. Sprawdź swoją stronę już dziś."
        ogType="article"
        canonical="https://fotz.pl/blog/audyt-strony-internetowej"
        keywords="audyt strony internetowej, co to audyt strony, audyt ux strony, audyt seo strony, audyt techniczny strony, jak zbadać stronę internetową"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Audyt strony internetowej — kompleksowy przewodnik krok po kroku (2026)",
            "description": "Pełny przewodnik po audycie strony internetowej: jak sprawdzić techniczne problemy, SEO on-page, backlinki i UX",
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
            "datePublished": "2026-04-11",
            "dateModified": "2026-04-11"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://fotz.pl" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fotz.pl/blog" },
              { "@type": "ListItem", "position": 3, "name": "Audyt strony internetowej" }
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
      <Layout>
        {/* Breadcrumb */}
        <section className="pt-32 pb-4 bg-background">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Audyt strony internetowej</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <article className="pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                  <ArrowLeft className="h-4 w-4" />
                  Wróć do bloga
                </Link>
                
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  SEO i Marketing
                </span>
                
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Audyt strony internetowej — kompleksowy przewodnik krok po kroku (2026)
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Zespół FOTZ
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    11 kwietnia 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    14 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy" 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2015" 
                    alt="Audyt strony internetowej — SEO, techniczne problemy i UX" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg prose-invert max-w-none"
              >
                <p className="lead text-xl text-muted-foreground mb-8">
                  Audyt strony internetowej to fundament każdej udanej strategii SEO. Niezależnie od tego, czy prowadzisz e-commerce, blog czy stronę korporacyjną, przeprowadzenie szczegółowego audytu pokaże Ci dokładnie, co działa, a co wymaga poprawy. W tym przewodniku dowiesz się, co sprawdzać, jakie narzędzia używać i jak wdrożyć wyniki audytu, aby poprawiać pozycje w Google i przychody ze strony.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Co to jest audyt strony internetowej?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Audyt strony internetowej to systematyczna analiza całej witryny mająca na celu identyfikację problemów technicznych, SEO, treściowych i związanych z doświadczeniem użytkownika. Audyt bada wszystkie aspekty działania strony — od szybkości ładowania i mobilności, przez strukturę linków wewnętrznych i jakość contentu, aż po profil backlinków i wskaźniki konwersji.
                </p>

                <p className="text-muted-foreground mb-6">
                  Rozróżniamy kilka typów audytów, które najczęściej przeprowadzane są razem:
                </p>

                <ul className="text-muted-foreground mb-6 space-y-2">
                  <li><strong>Audyt SEO techniczny</strong> — sprawdzenie problemów technicznych wpływających na ranking (szybkość, mobilność, Core Web Vitals, crawlability, HTTPS)</li>
                  <li><strong>Audyt SEO on-page</strong> — analiza zawartości, słów kluczowych, title tagów, meta opisów, hierarchii nagłówków i wewnętrznych linków</li>
                  <li><strong>Audyt backlinków</strong> — ocena profilu linków zewnętrznych, Domain Rating, toksycznych linków i jakości źródeł</li>
                  <li><strong>Audyt UX i konwersji</strong> — badanie doświadczenia użytkownika, bounce rate, heatmap, efektywności CTA i optymalizacji formularzy</li>
                  <li><strong>Audyt treści</strong> — ocena jakości, unikalności, świeżości i pokrycia słów kluczowych w artykułach i podstronach</li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  Audyt może być wykonany za pomocą bezpłatnych narzędzi (Google Search Console, PageSpeed Insights, Screaming Frog free) lub profesjonalnie przez agencję SEO. Obie opcje mają swoje plusy — darmowe narzędzia są proste, ale audyt agencji jest bardziej kompleksowy i podpowiadający konkretne działania.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Audyt techniczny strony — co sprawdzić?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Audyt techniczny to fundament SEO, ponieważ problemy techniczne mogą całkowicie sabotować Twoje pozycje w Google. Oto główne elementy, które zawsze trzeba sprawdzić w audycie technicznym.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Core Web Vitals i szybkość ładowania</strong> — Google wyraźnie uwzględnia prędkość ładowania strony w rankingu. Sprawdź: Largest Contentful Paint (LCP, powinno być poniżej 2,5s), First Input Delay (FID, ideał &lt; 100ms), Cumulative Layout Shift (CLS, powinno być &lt; 0,1). Użyj PageSpeed Insights, GTmetrix lub narzędzia Lighthouse w DevTools przeglądarki.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Responsywność i mobilność</strong> — ponad 70% ruchu przychodzi z urządzeń mobilnych. Twoja strona musi być w pełni responsywna i szybka na smartfonach. Sprawdź: czy tekst jest czytelny bez zoomowania, czy przyciski są odpowiednio duże, czy menu jest wygodne na telefonie, czy obrazki skalują się prawidłowo.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>HTTPS i bezpieczeństwo</strong> — każda strona musi być na HTTPS (z zielonym kłódką). Google karze strony bez SSL/TLS. Sprawdź certyfikat, jego ważność i czy wszystkie zasoby (obrazki, skrypty) ładują się przez HTTPS, a nie HTTP.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Crawlability i indeksacja</strong> — sprawdź w Google Search Console, czy Twoja strona jest poprawnie indeksowana. Szukaj błędów crawlingu, zablokowanych zasobów, stron z błędami 404. Upewnij się, że plik robots.txt nie blokuje ważnych stron, a sitemap.xml jest aktualna i zawiera wszystkie kluczowe podstrony.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Canonical tags i duplikaty</strong> — każda strona powinna mieć tag canonical wskazujący na preferowaną wersję. Duplikaty treści mogą zmarnować moc SEO między wersjami (http vs https, www vs non-www). Sprawdź, czy canonical jest ustawiony na każdej stronie.
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Strukturalne dane (schema.org)</strong> — dodaj strukturalne dane (JSON-LD) do swoich stron: ArticleSchema dla blogów, ProductSchema dla e-commerce, LocalBusinessSchema dla firm lokalnych. Strukturalne dane pomagają Google lepiej rozumieć Twoją stronę i mogą zwiększyć click-through rate z SERP.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Audyt SEO on-page — analiza treści i słów kluczowych
                </h2>

                <p className="text-muted-foreground mb-6">
                  On-page SEO to zoptymalizowanie zawartości i elementów strony pod konkretne słowa kluczowe. Dobry audyt on-page sprawdza:
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Title tagi i meta opisy</strong> — każda strona powinna mieć unikalny title (50-60 znaków z słowem kluczowym) i meta opis (140-160 znaków, zwracający uwagę). Title i opis pojawiają się w wynikach Google, więc muszą być intrygujące i zawierać słowo kluczowe. Stare generyczne title tagi ("Strona główna", "Artykuł") rujnują CTR z SERP.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Hierarchia nagłówków H1-H6</strong> — każda strona powinna mieć dokładnie jeden H1 zawierający główne słowo kluczowe. H2 powinny organizować sekcje artykułu, a H3 mogą dzielić dalej. Prawidłowa hierarchia nagłówków pomaga Google zrozumieć strukturę treści i poprawia SEO. Nigdy nie pomijaj H2 w skok do H4.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Gęstość słów kluczowych i naturalność</strong> — słowo kluczowe powinno pojawić się 1-2 razy w pierwszym akapicie, w H1, H2, w alt tekstach obrazów i naturalnie rozproszone w tekście. Jednak overstuffy SEO (powtarzanie słowa 20 razy) karze Google. Tekst zawsze powinien być naturalny dla czytelnika.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Wewnętrzne linki (internal linking)</strong> — dobry profil wewnętrznych linków rozdziela moc SEO między ważne strony i pomaga crawlować całą witrynę. Sprawdź: czy ważne strony mają wystarczająco link juice, czy orphaned pages (bez wewnętrznych linków) nie zniknęły, czy tekst linków (anchor text) jest opisowy i zawiera słowa kluczowe.
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Jakość i długość contentu</strong> — zawartość powinna być originalna, unikalna i wartościowa dla czytelnika. Artykuły poniżej 300 słów rzadko rankują dobrze. Naszym doświadczeniu, artykuły 2000-3000 słów rankują lepiej niż krótkie listy. Sprawdź: czy treść odpowiada na Intent danego słowa kluczowego, czy jest świeża i aktualna, czy zawiera przykłady i dane wspierające claims.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Audyt linków zewnętrznych — profil backlinków
                </h2>

                <p className="text-muted-foreground mb-6">
                  Backlinki są dalej jednym z trzech głównych czynników rankingowych Google (obok contentu i techniki). Audyt backlinków sprawdza:
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Domain Rating i moc strony</strong> — Domain Rating (DR) pokazuje ogólną moc Twojej domeny w skali 0-100. Im wyższy DR, tym więcej masy SEO posiadasz. Zwykle DR &gt; 30 to dobry rezultat dla lokalne biznesu, DR &gt; 50 to konkurencyjnie, DR &gt; 70 to elita. Sprawdzisz w Ahrefs, SEMrush, Moz.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Toksyczne linki i spam</strong> — nie wszystkie backlinki są dobre. Linki z farm linków, spamowych katalogów czy seksualnych stron mogą karać Twoją stronę. Sprawdź: czy Twoje linki pochodzą ze stron mających sensu (branża zbliżona do Twojej), czy mają rozsądny Domain Rating (&gt; 10), czy anchor text linków jest naturalny, a nie pełny słów kluczowych.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Dofollow/nofollow ratio</strong> — idealne to około 80% dofollow i 20% nofollow. Zbyt wiele nofollow linków wygląda nienaturalnie. Zdywersyfikuj źródła linków między różne domeny, a nie polegaj na linkach z jednego miejsca.
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Różnorodność anchor text</strong> — anchor text (tekst linku) powinien być zdywersyfikowany: częściowo exact-match (słowo kluczowe), częściowo partial-match, częściowo branded (nazwa firmy), a część generic ("kliknij tutaj"). Zbyt dużo exact-match anchor text wygląda na nienaturalne linki i może spowodować filter Google.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Audyt UX i konwersji — doświadczenie użytkownika
                </h2>

                <p className="text-muted-foreground mb-6">
                  Coraz bardziej Google bierze pod uwagę doświadczenie użytkownika. Audyt UX sprawdza:
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Bounce rate i średni czas na stronie</strong> — wysokie bounce rate (powyżej 70%) oznacza, że użytkownicy szybko opuszczają Twoją stronę. To może być spowodowane słabym matchem do intencji, powolnym ładowaniem, złą nawigacją lub brzydkim designem. Analiza heatmap (gdzie klikają użytkownicy) może pomóc zidentyfikować problemy.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Efektywność CTA (call-to-action)</strong> — każda strona powinna mieć wyraźne CTA: "Zadzwoń teraz", "Zamów konsultację", "Dodaj do koszyka". CTA powinien być kontrastowy, umieszczony "above the fold" (przed scrollowaniem) i powtarzany wielokrotnie. Testuj różne kolory, tekst i pozycje CTA.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Optymalizacja formularzy</strong> — zbyt długie formularze redukują konwersje. Idealne formularze mają 3-5 pól. Sprawdź, czy pola są intuicyjne, czy jest progressive profiling (pytaj o dodatkowe dane później), czy zostały usunięte zbędne pola.
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Struktura strony i nawigacja</strong> — użytkownik powinien znaleźć to, czego szuka w 2-3 klikami. Menu powinno być logiczne, nie przeładowane. Kategorie powinny być jasne. Wewnętrzne linki powinny łatwo kierować użytkownika do pokrewnych treści.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Ile kosztuje audyt strony internetowej?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Koszt audytu strony internetowej waha się od bezpłatnego do kilku tysięcy złotych, w zależności od zakresu i specjalisty.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Darmowe narzędzia do audytu</strong> — możesz rozpocząć z: Google Search Console (raportuje błędy indeksacji i bezpieczeństwa), Google PageSpeed Insights (szybkość), Screaming Frog Free (crawling do 500 URL), Google Analytics (bounce rate, czas na stronie), Lighthouse w DevTools przeglądarki (Core Web Vitals). Te narzędzia dają solidne podstawy i mogą być wystarczające dla małych firm.
                </p>

                <p className="text-muted-foreground mb-4">
                  <strong>Audyt strony przez agencję SEO</strong> — profesjonalny audyt od agencji kosztuje zwykle 500-5000 PLN zależnie od rozmiaru witryny i detalizacji. Mała strona 20-50 stron: 500-1500 PLN. Średnia witryna 100-500 stron: 1500-3500 PLN. Duży portal lub e-commerce 1000+ stron: 3500-5000+ PLN. Agencja dostarcza raport PDF z opisem każdego problemu i rekomendacjami naprawy.
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Bezpłatny audyt w Fotz Studio</strong> — Fotz Studio oferuje każdemu klientowi bezpłatny audyt podstawowy obejmujący: analizę Core Web Vitals, najważniejszych problemów technicznych, top słów kluczowych dla branży, konkurencyjną analizę SERP, raport wstępny w 48 godzin. Skontaktuj się z nami, aby zarezerwować swoją darmową konsultację SEO.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Jak przeprowadzić audyt strony krok po kroku
                </h2>

                <p className="text-muted-foreground mb-6">
                  Jeśli chcesz przeprowadzić audyt sam, wykonaj te kroki:
                </p>

                <ol className="text-muted-foreground mb-6 space-y-2" style={{ listStyleType: 'decimal', paddingLeft: '1.5rem' }}>
                  <li><strong>Krok 1: Audyt techniczny</strong> — uruchom PageSpeed Insights dla najpopularniejszych 5-10 stron, sprawdź Core Web Vitals, zbadaj błędy w Google Search Console</li>
                  <li><strong>Krok 2: Crawluj stronę</strong> — użyj Screaming Frog, aby znaleźć stany 4xx/5xx, duplicate title tagi, missing meta descriptions, broken linki</li>
                  <li><strong>Krok 3: Analiza SEO on-page</strong> — przeanalizuj title tagi, meta opisy, hierarchię H1-H6 dla każdej podstrony. Sprawdź, czy contentu odpowiada intencji wyszukiwania</li>
                  <li><strong>Krok 4: Badanie backlinków</strong> — użyj Ahrefs lub SEMrush free trial, aby zobaczyć Twój Domain Rating, backlinki, якość linków</li>
                  <li><strong>Krok 5: UX i konwersje</strong> — sprawdź Google Analytics dla bounce rate, średnią sesję, top exit pages. Przeanalizuj flow użytkownika i CTA</li>
                  <li><strong>Krok 6: Raport i plan działań</strong> — stwórz dokumenty z rankingiem problemów (krytyczne, wysokie, średnie, niskie), zaproponuj rozwiązania, priorytyzuj wg wpływu na ranking</li>
                </ol>

                <p className="text-muted-foreground mb-6">
                  Po audycie skupisz się najpierw na naprawie problemów technicznych (szybkość, mobilność, HTTPS), następnie on-page SEO (title, opisy, contentu), a ostatecznie link building. Cierpliwość — pozycje SEO rosną przez miesiące, a nie dni.
                </p>

                <div className="mt-8 p-8 bg-muted/30 rounded-2xl border border-border/30">
                  <h3 className="text-xl font-heading font-bold mb-4">Checklista audytu strony internetowej</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>✓ Sprawdzenie Core Web Vitals i szybkości ładowania</li>
                    <li>✓ Test responsywności i mobilności</li>
                    <li>✓ Weryfikacja HTTPS i certyfikatu SSL</li>
                    <li>✓ Analiza indeksacji w Google Search Console</li>
                    <li>✓ Przegląd canonical tags i duplikatów</li>
                    <li>✓ Audit title tagów i meta opisów</li>
                    <li>✓ Sprawdzenie hierarchii nagłówków H1-H6</li>
                    <li>✓ Analiza wewnętrznych linków (internal linking)</li>
                    <li>✓ Ocena jakości contentu i słów kluczowych</li>
                    <li>✓ Badanie profilu backlinków i Domain Rating</li>
                    <li>✓ Analiza bounce rate i UX w Google Analytics</li>
                    <li>✓ Testowanie CTA i formularz konwersji</li>
                  </ul>
                </div>
              </motion.div>

              {/* Related Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-8 bg-muted/30 rounded-2xl"
              >
                <h3 className="text-xl font-heading font-bold mb-4">Powiązane usługi</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/seo/audyt" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Audyt SEO</h4>
                    <p className="text-sm text-muted-foreground">Pełna analiza Twojej strony</p>
                  </Link>
                  <Link to="/seo/pozycjonowanie" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Pozycjonowanie SEO</h4>
                    <p className="text-sm text-muted-foreground">Wzrost pozycji w Google</p>
                  </Link>
                  <Link to="/uslugi/strony-internetowe" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Strony internetowe</h4>
                    <p className="text-sm text-muted-foreground">Profesjonalne witryny</p>
                  </Link>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#75143F]/20 to-[#0F3053]/20 border border-primary/20 text-center"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Bezpłatny audyt Twojej strony?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Fotz Studio oferuje każdemu klientowi darmową, profesjonalną analizę strony. Poznaj dokładnie, co hamuje Twoją widoczność w Google.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90">
                    <Link to="/kontakt">
                      Zamów bezpłatny audyt
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/seo/pozycjonowanie">
                      Dowiedz się o SEO
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </article>

        {/* Related Services */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RelatedServices services={servicesByCategory.seo} />
          </div>
        </div>

        {/* SEO Article Section */}
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mt-12 pt-12 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Audyt SEO strony — jakie problemy można znaleźć?</h2>
            <p className="text-muted-foreground mb-6">Naszym doświadczeniu, około 90% stron internetowych ma co najmniej jeden poważny problem SEO. Najczęstsze to: wolne ładowanie (LCP &gt; 4s), brak responsywności, słabe Core Web Vitals, brakujące meta opisy, brak wewnętrznych linków, contentu poniżej 300 słów, zablokowana indeksacja w robots.txt, brak strukturalnych danych, toksyczne backlinki. Audyt zawsze odsłania te problemy.</p>

            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 mt-8">Wdrożenie wyników audytu — co dalej?</h2>
            <p className="text-muted-foreground mb-6">Po audycie przychodzi najtrudniejsza część — wdrożenie poprawek. Spriorytetyzuj wady: najpierw krytyczne (Core Web Vitals, HTTPS, indeksacja), potem wysokie (title, meta description, H1), następnie średnie (internal linking, contentu) i ostatecznie niskie (semantyka, micro-conversions). Każda naprawka powinna być testowana i monitorowana w Google Search Console. Pozycje SEO rosną średnio 4-12 tygodni po naprawie problemu.</p>

            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/audyt" className="text-primary hover:underline font-medium text-sm">→ Audyt SEO</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/kontakt" className="text-primary hover:underline font-medium text-sm">→ Bezpłatna konsultacja</Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <RelatedArticles currentArticleId="audyt-strony-internetowej" />
      </Layout>
    </>
  );
}
