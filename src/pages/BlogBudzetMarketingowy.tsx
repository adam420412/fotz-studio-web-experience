import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, DollarSign, PieChart, TrendingUp, Calculator, Target, BarChart3 } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Ile procent przychodów przeznaczyć na marketing?",
    answer: "Standardowa rekomendacja to 5-10% przychodów brutto dla firm utrzymujących pozycję rynkową, 10-20% dla firm w fazie wzrostu. Startupy i nowe firmy często przeznaczają nawet 20-50% na budowanie rozpoznawalności."
  },
  {
    question: "Jak podzielić budżet między kanały marketingowe?",
    answer: "Zasada 70-20-10: 70% na sprawdzone kanały generujące ROI, 20% na kanały rozwijane z potencjałem, 10% na eksperymenty i nowe platformy. Dokładny podział zależy od branży i celów."
  },
  {
    question: "Czy mała firma potrzebuje dużego budżetu marketingowego?",
    answer: "Nie, ale potrzebuje mądrego budżetu. Mała firma może zacząć od 2000-5000 zł/msc koncentrując się na 1-2 kanałach z najwyższym ROI (np. Google Ads + SEO lokalne). Kluczowa jest konsekwencja, nie wielkość."
  },
  {
    question: "Jak mierzyć efektywność wydatków marketingowych?",
    answer: "Kluczowe metryki: ROI (zwrot z inwestycji), ROAS (zwrot z wydatków reklamowych), CAC (koszt pozyskania klienta), LTV (wartość życiowa klienta). Porównuj CAC do LTV - zdrowy stosunek to 1:3 lub wyższy."
  },
  {
    question: "Kiedy zwiększać budżet marketingowy?",
    answer: "Zwiększaj budżet gdy: (1) ROI jest dodatni i stabilny, (2) masz capacity na obsługę większej liczby klientów, (3) testujesz nowe rynki/produkty, (4) konkurencja zwiększa aktywność. Zwiększaj stopniowo o 20-30%."
  }
];

export default function BlogBudzetMarketingowy() {
  return (
    <Layout>
      <SEOHead
        title="Budżet Marketingowy — Jak Zaplanować Wydatki na Marketing Firmy? | Fotz Studio"
        description="Budżet marketingowy firmy — ile wydawać na marketing, jak podzielić budżet między kanały i mierzyć ROI. Praktyczny przewodnik planowania wydatków…"
        ogType="article"
        canonical="https://fotz.pl/blog/budzet-marketingowy-planowanie"
        keywords="budżet marketingowy, planowanie budżetu, wydatki na marketing, ROI marketing, koszty reklamy"
      />
      <ArticleSchema
        title="Budżet marketingowy - jak zaplanować wydatki na marketing 2025"
        description="Jak zaplanować budżet marketingowy? Podział na kanały, ROI, benchmarki branżowe. Praktyczny poradnik dla MŚP."
        url="https://fotz.pl/blog/budzet-marketingowy-planowanie"
        datePublished="2025-01-04"
        dateModified="2026-01-09"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Budżet marketingowy", url: "https://fotz.pl/blog/budzet-marketingowy-planowanie" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="pt-40 pb-12 section-padding bg-background">
        <div className="container-wide">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Wróć do bloga
          </Link>
          
          <div className="max-w-4xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Poradniki
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Budżet marketingowy - jak zaplanować wydatki na marketing w 2025
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ile wydać na marketing? Jak podzielić budżet między kanały? Poznaj sprawdzone metody planowania budżetu marketingowego i maksymalizuj ROI swoich działań.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Zespół FOTZ
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                4 Sty 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                16 min czytania
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <img loading="lazy" 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072"
              alt="Planowanie budżetu marketingowego"
              className="w-full rounded-2xl aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              
              <h2 className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-primary" />
                Dlaczego planowanie budżetu marketingowego jest kluczowe?
              </h2>
              <p>
                <strong>Budżet marketingowy</strong> to nie tylko liczba w arkuszu kalkulacyjnym - to strategiczne 
                narzędzie, które determinuje, jak szybko i efektywnie Twoja firma będzie rosnąć. Właściwe planowanie budżetu pozwala zoptymalizować wydatki na <Link to="/performance-marketing/google-ads" className="text-primary hover:underline">kampanie Google Ads</Link> oraz <Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline">reklamy Facebook Ads</Link>.
                Bez jasnego planu wydatków marketingowych ryzykujesz:
              </p>
              <ul>
                <li>Przepalanie pieniędzy na nieskuteczne kanały</li>
                <li>Niedoinwestowanie działań, które generują ROI</li>
                <li>Brak możliwości mierzenia efektywności</li>
                <li>Chaotyczne decyzje "ad hoc" zamiast strategii</li>
              </ul>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold mb-3 mt-0">📊 Statystyki: Budżety marketingowe w 2025</h3>
                <ul className="mb-0">
                  <li>Średni budżet marketingowy B2B: 8.7% przychodów</li>
                  <li>Średni budżet marketingowy B2C: 9.8% przychodów</li>
                  <li>Firmy SaaS: 15-25% przychodów na marketing</li>
                  <li>E-commerce: 10-15% przychodów</li>
                  <li>70% firm zwiększa budżety digital w 2025</li>
                </ul>
              </div>

              <h2 className="flex items-center gap-3">
                <Calculator className="w-6 h-6 text-primary" />
                Metody ustalania budżetu marketingowego
              </h2>

              <h3>1. Metoda procentowa od przychodów</h3>
              <p>
                Najpopularniejsza metoda - przeznaczasz stały procent przychodów na marketing:
              </p>
              <ul>
                <li><strong>5-7%</strong> - firmy stabilne, utrzymanie pozycji</li>
                <li><strong>8-12%</strong> - firmy w fazie umiarkowanego wzrostu</li>
                <li><strong>15-20%</strong> - firmy w fazie agresywnego wzrostu</li>
                <li><strong>20-50%</strong> - startupy budujące rozpoznawalność</li>
              </ul>

              <h3>2. Metoda celowa (Goal-Based)</h3>
              <p>
                Określasz cele biznesowe (np. 100 nowych klientów/msc) i obliczasz budżet wstecz:
              </p>
              <div className="bg-card border border-border rounded-xl p-6 my-6">
                <p className="font-semibold mb-2">Przykład kalkulacji:</p>
                <ul className="text-sm mb-0">
                  <li>Cel: 100 nowych klientów/msc</li>
                  <li>Średni koszt pozyskania klienta (CAC): 150 zł</li>
                  <li>Wymagany budżet: 100 × 150 zł = <strong>15 000 zł/msc</strong></li>
                </ul>
              </div>

              <h3>3. Metoda konkurencyjna</h3>
              <p>
                Analizujesz wydatki konkurencji (szacunkowo z narzędzi typu SEMrush, SimilarWeb) 
                i ustalasz budżet na podobnym lub wyższym poziomie, jeśli chcesz ich wyprzedzić.
              </p>

              <h3>4. Metoda "zero-based budgeting"</h3>
              <p>
                Każdy rok zaczynasz od zera - każdy wydatek musi być uzasadniony na nowo. 
                Czasochłonne, ale eliminuje "zombie wydatki" z przyzwyczajenia.
              </p>

              <h2 className="flex items-center gap-3">
                <PieChart className="w-6 h-6 text-primary" />
                Jak podzielić budżet między kanały?
              </h2>

              <h3>Zasada 70-20-10</h3>
              <ul>
                <li><strong>70%</strong> - Sprawdzone kanały z udowodnionym ROI</li>
                <li><strong>20%</strong> - Kanały rozwijane z potencjałem</li>
                <li><strong>10%</strong> - Eksperymenty i nowe platformy</li>
              </ul>

              <h3>Przykładowy podział dla MŚP (budżet 10 000 zł/msc)</h3>
              <div className="overflow-x-auto my-8">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Kanał</th>
                      <th>Procent</th>
                      <th>Kwota</th>
                      <th>Cel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Link to="/performance-marketing/google-ads" className="text-primary hover:underline">Google Ads</Link> (Search)</td>
                      <td>35%</td>
                      <td>3 500 zł</td>
                      <td>Lead generation</td>
                    </tr>
                    <tr>
                      <td><Link to="/seo/pozycjonowanie" className="text-primary hover:underline">SEO</Link> + <Link to="/content-marketing/strategia" className="text-primary hover:underline">Content</Link></td>
                      <td>25%</td>
                      <td>2 500 zł</td>
                      <td>Ruch organiczny</td>
                    </tr>
                    <tr>
                      <td><Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline">Social Media Ads</Link></td>
                      <td>20%</td>
                      <td>2 000 zł</td>
                      <td>Świadomość + <Link to="/performance-marketing/remarketing" className="text-primary hover:underline">remarketing</Link></td>
                    </tr>
                    <tr>
                      <td><Link to="/social-media/obsluga" className="text-primary hover:underline">Social Media</Link> (organiczny)</td>
                      <td>10%</td>
                      <td>1 000 zł</td>
                      <td>Budowanie społeczności</td>
                    </tr>
                    <tr>
                      <td>Eksperymenty</td>
                      <td>10%</td>
                      <td>1 000 zł</td>
                      <td>Testy nowych kanałów</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-primary" />
                Benchmarki budżetowe według branży
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Branża</th>
                      <th>% przychodów na marketing</th>
                      <th>Główne kanały</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>E-commerce</td>
                      <td>10-15%</td>
                      <td>Google Shopping, Facebook, remarketing</td>
                    </tr>
                    <tr>
                      <td>SaaS / IT</td>
                      <td>15-25%</td>
                      <td>Content marketing, LinkedIn, Google Ads</td>
                    </tr>
                    <tr>
                      <td>Usługi lokalne</td>
                      <td>5-10%</td>
                      <td>Google Maps, SEO lokalne, Facebook</td>
                    </tr>
                    <tr>
                      <td>Gastronomia</td>
                      <td>3-6%</td>
                      <td>Instagram, Facebook, Google Maps</td>
                    </tr>
                    <tr>
                      <td>B2B / Produkcja</td>
                      <td>5-8%</td>
                      <td>LinkedIn, content, targi</td>
                    </tr>
                    <tr>
                      <td>Nieruchomości</td>
                      <td>8-12%</td>
                      <td>Google Ads, portale, remarketing</td>
                    </tr>
                    <tr>
                      <td>Medycyna</td>
                      <td>5-10%</td>
                      <td>SEO lokalne, Google Ads, opinie</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Kluczowe metryki efektywności budżetu
              </h2>

              <h3>ROI (Return on Investment)</h3>
              <p>
                Podstawowa metryka - ile zarabiasz na każdą wydaną złotówkę:
              </p>
              <div className="bg-muted p-4 rounded-lg my-4">
                <code>ROI = (Przychód - Koszt marketingu) / Koszt marketingu × 100%</code>
              </div>
              <p>
                Przykład: Wydajesz 10 000 zł, generujesz 50 000 zł przychodu. 
                ROI = (50 000 - 10 000) / 10 000 × 100% = <strong>400%</strong>
              </p>

              <h3>ROAS (Return on Ad Spend)</h3>
              <p>
                Zwrot z wydatków reklamowych - popularny w e-commerce:
              </p>
              <div className="bg-muted p-4 rounded-lg my-4">
                <code>ROAS = Przychód z reklam / Koszt reklam</code>
              </div>
              <p>Dobry ROAS dla e-commerce: 4:1 lub wyższy (400%)</p>

              <h3>CAC (Customer Acquisition Cost)</h3>
              <p>
                Koszt pozyskania jednego klienta:
              </p>
              <div className="bg-muted p-4 rounded-lg my-4">
                <code>CAC = Całkowity koszt marketingu / Liczba nowych klientów</code>
              </div>

              <h3>LTV:CAC Ratio</h3>
              <p>
                Najważniejszy wskaźnik zdrowia biznesu - stosunek wartości życiowej klienta do kosztu pozyskania:
              </p>
              <ul>
                <li><strong>&lt; 1:1</strong> - tracisz pieniądze na każdym kliencie</li>
                <li><strong>1:1 - 3:1</strong> - break-even lub niski zysk</li>
                <li><strong>3:1 - 5:1</strong> - zdrowy biznes</li>
                <li><strong>&gt; 5:1</strong> - możesz zwiększać inwestycje w marketing</li>
              </ul>

              <h2 className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Optymalizacja budżetu - praktyczne wskazówki
              </h2>

              <h3>1. Regularnie analizuj i realokuj</h3>
              <p>
                Co miesiąc przeglądaj wyniki każdego kanału. Przenoś budżet z kanałów o niskim 
                ROI do tych, które działają. Nie bój się wyciąć nieefektywnych działań.
              </p>

              <h3>2. Testuj przed skalowaniem</h3>
              <p>
                Zanim zainwestujesz duży budżet w nowy kanał, przetestuj go z małą kwotą 
                (1000-2000 zł przez 2-4 tygodnie). Skaluj tylko to, co działa.
              </p>

              <h3>3. Uwzględnij sezonowość</h3>
              <p>
                Zwiększ budżet w okresach szczytowych (Black Friday, święta, sezon turystyczny), 
                zmniejsz w martwych okresach. Elastyczny budżet &gt; sztywny podział.
              </p>

              <h3>4. Inwestuj w brand długoterminowo</h3>
              <p>
                Nie wszystko musi mieć natychmiastowy ROI. Przeznacz 10-20% budżetu na 
                brand building (content, PR, social) - to inwestycja w przyszłość.
              </p>

              <h3>5. Automatyzuj gdzie możesz</h3>
              <p>
                Używaj smart bidding w Google Ads, automatycznych reguł w Facebook Ads. 
                Algorytmy często optymalizują lepiej niż ręczne zarządzanie stawkami.
              </p>

              <h2>Typowe błędy w planowaniu budżetu</h2>
              <ol>
                <li><strong>Brak rezerwy</strong> - trzymaj 10-15% jako bufor na nieprzewidziane okazje</li>
                <li><strong>Zbyt wiele kanałów naraz</strong> - lepiej 2-3 dobrze niż 10 słabo</li>
                <li><strong>Ignorowanie kosztów ukrytych</strong> - czas zespołu, narzędzia, freelancerzy</li>
                <li><strong>Brak atrybucji</strong> - nie wiesz, co naprawdę generuje konwersje</li>
                <li><strong>Cięcia w kryzysie</strong> - często marketing powinien rosnąć, gdy konkurencja tnie</li>
              </ol>

              <h2>FAQ - Najczęściej zadawane pytania</h2>
              
              {faqItems.map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}

              <h2>Podsumowanie</h2>
              <p>
                Planowanie budżetu marketingowego to proces, nie jednorazowe ćwiczenie. 
                Zacznij od jasnych celów biznesowych, wybierz metodę ustalania budżetu 
                odpowiednią dla Twojej sytuacji i regularnie optymalizuj na podstawie danych.
              </p>
              <p>
                Pamiętaj o zasadzie 70-20-10, mierz kluczowe metryki (ROI, CAC, LTV) 
                i nie bój się eksperymentować z nowymi kanałami - ale zawsze z kontrolowanym ryzykiem.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 my-8 text-center">
                <h3 className="text-xl font-bold mb-4 mt-0">Potrzebujesz pomocy z planowaniem budżetu?</h3>
                <p className="mb-6">
                  Przygotujemy strategię marketingową z optymalnym podziałem budżetu dla Twojej branży.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="/kontakt">Umów bezpłatną konsultację</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/kalkulator-roi">Sprawdź kalkulator ROI</Link>
                  </Button>
                </div>
              </div>
            </article>

            {/* Share */}
            <div className="flex items-center justify-between py-8 border-t border-border mt-12">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Udostępnij:</span>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* SEO Article Section */}
            <div className="mt-12 pt-12 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Planowanie budżetu marketingowego — ile powinna wydawać na marketing Twoja firma?</h2>
              <p className="text-muted-foreground mb-6">Optymalny budżet marketingowy to 5-15% przychodów firmy, w zależności od branży, etapu rozwoju i celów. Startupy i firmy w fazie wzrostu powinny alokować więcej (10-20%), dojrzałe firmy z ugruntowaną pozycją — mniej (5-10%). Kluczowe jest nie tylko ile wydajesz, ale jak mierzysz ROI z każdego kanału.</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Podział budżetu marketingowego — SEO vs. reklamy płatne vs. content marketing</h2>
              <p className="text-muted-foreground mb-6">Typowy podział budżetu marketingowego dla małej firmy: SEO/content (30-40%), kampanie PPC Google/Meta (30-40%), social media i produkcja treści (15-20%), narzędzia i analityka (5-10%). Fotz Studio pomaga optymalizować alokację budżetu w oparciu o dane i realne ROI z każdego kanału.</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Kalkulator ROI marketingowego — sprawdź, ile możesz zarobić na marketingu online</h2>
              <p className="text-muted-foreground">Użyj kalkulatora ROI Fotz Studio, by obliczyć potencjalny zwrot z inwestycji w kampanie Google Ads, SEO i social media. Bezpłatne narzędzie online — bez rejestracji. Skontaktuj się z nami po indywidualną wycenę działań marketingowych dla Twojej firmy.</p>
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/konsultacja" className="text-primary hover:underline font-medium text-sm">→ Bezpłatna konsultacja</Link>
            </div>
            </div>


      {/* Related Articles */}
      <RelatedArticles currentArticleId="budzet-marketingowy-planowanie" />
    </Layout>
  );
}
