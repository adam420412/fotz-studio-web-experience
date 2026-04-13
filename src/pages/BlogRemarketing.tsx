import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Target, Users, TrendingUp, DollarSign, BarChart3, RefreshCw } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";

const faqItems = [
  {
    question: "Czym jest remarketing i jak działa?",
    answer: "Remarketing to strategia reklamowa, która pozwala docierać z reklamami do osób, które wcześniej odwiedziły Twoją stronę lub aplikację. Działa poprzez pliki cookie lub listy odbiorców, wyświetlając spersonalizowane reklamy użytkownikom podczas przeglądania innych stron."
  },
  {
    question: "Ile kosztuje remarketing?",
    answer: "Koszt remarketingu zależy od platformy i konkurencji w branży. W Google Ads CPC remarketingowy to zazwyczaj 0,50-3 zł, w Facebook Ads CPM wynosi 5-20 zł. Budżet miesięczny dla MŚP to zwykle 1000-5000 zł."
  },
  {
    question: "Jaka jest różnica między remarketingiem a retargetingiem?",
    answer: "Terminy są często używane zamiennie, ale remarketing tradycyjnie odnosi się do działań email (np. porzucone koszyki), a retargeting do reklam displayowych. W praktyce Google używa terminu 'remarketing', a Facebook 'retargeting'."
  },
  {
    question: "Jak długo powinna trwać kampania remarketingowa?",
    answer: "Optymalny czas to 30-90 dni od wizyty, w zależności od cyklu zakupowego produktu. Dla impulsywnych zakupów (odzież) 7-14 dni, dla B2B i drogich produktów nawet 90-180 dni."
  },
  {
    question: "Czy remarketing jest zgodny z RODO?",
    answer: "Tak, pod warunkiem uzyskania zgody użytkownika na cookies marketingowe. Konieczna jest aktualizacja polityki prywatności i wdrożenie bannera cookies z opcją opt-out dla remarketingu."
  }
];

export default function BlogRemarketing() {
  return (
    <Layout>
      <SEOHead
        title="Remarketing | Fotz Studio"
        description="Remarketing i retargeting — jak konfigurować kampanie remarketingowe Google Ads i Meta Ads, by odzyskiwać odwiedzających i zwiększać konwersję. Fotz Studio."
        ogType="article"
        canonical="https://fotz.pl/performance-marketing/remarketing"
        keywords="remarketing co to jest, co to jest remarketing, remarketing google ads, remarketing facebook ads, retargeting reklamy, remarketing dla firm, jak działa remarketing, remarketing cennik"
      />
      <ArticleSchema
        title="Remarketing - kompletny poradnik dla firm 2025"
        description="Remarketing krok po kroku: Google Ads, Facebook, dynamiczny remarketing. Strategie, koszty i najlepsze praktyki."
        url="https://fotz.pl/performance-marketing/remarketing"
        datePublished="2025-01-04"
        dateModified="2026-01-09"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Remarketing", url: "https://fotz.pl/performance-marketing/remarketing" },
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
              Reklamy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Remarketing - kompletny poradnik dla firm w 2025 roku
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Remarketing — co to jest i jak działa? Poradnik o retargetingu w Google Ads i Facebook Ads. Jak skutecznie docierać do osób, które odwiedziły Twoją stronę i zwiększać konwersje.</p>
            
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
                18 min czytania
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
              alt="Remarketing - strategie odzyskiwania klientów"
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
                <RefreshCw className="w-6 h-6 text-primary" />
                Czym jest remarketing?
              </h2>
              <p>
                <strong>Remarketing</strong> (zwany też retargetingiem) to strategia marketingowa, która pozwala docierać 
                z reklamami do osób, które wcześniej weszły w interakcję z Twoją marką - odwiedziły stronę, 
                przeglądały produkty, dodały coś do koszyka, ale nie dokonały konwersji. Remarketing jest kluczowym elementem 
                skutecznych <Link to="/kampanie-reklamowe" className="text-primary hover:underline">kampanii reklamowych</Link>.
              </p>
              <p>
                Statystyki są bezlitosne: <strong>97% użytkowników opuszcza stronę bez zakupu</strong> podczas pierwszej wizyty. 
                Remarketing pozwala "podążać" za tymi użytkownikami i przypominać im o Twojej ofercie, znacząco 
                zwiększając szanse na konwersję. Najlepiej działa w połączeniu z <Link to="/performance-marketing/google-ads" className="text-primary hover:underline">Google Ads</Link> i <Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline">Facebook Ads</Link>.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold mb-3 mt-0">💡 Kluczowe statystyki remarketingu</h3>
                <ul className="mb-0">
                  <li>Remarketing zwiększa rozpoznawalność marki o 1046%</li>
                  <li>Użytkownicy remarketingowi konwertują 70% częściej</li>
                  <li>CTR reklam remarketingowych jest 10x wyższy niż standardowych</li>
                  <li>Koszt pozyskania klienta z remarketingu jest o 50% niższy</li>
                </ul>
              </div>

              <h2 className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Rodzaje remarketingu
              </h2>

              <h3>1. Remarketing standardowy (Site Retargeting)</h3>
              <p>
                Najprostszy typ - wyświetlasz reklamy wszystkim, którzy odwiedzili Twoją stronę. 
                Idealne na start, ale najmniej precyzyjne.
              </p>

              <h3>2. Remarketing dynamiczny</h3>
              <p>
                Wyświetla użytkownikom <strong>konkretne produkty, które przeglądali</strong>. 
                Konieczny dla e-commerce - reklamy generują się automatycznie na podstawie feedu produktowego.
              </p>

              <h3>3. Remarketing list mailingowych (Customer Match)</h3>
              <p>
                Przesyłasz listę emaili klientów do Google/Facebook, a platformy dopasowują je do 
                zalogowanych użytkowników. Świetne do upsellingu i reaktywacji.
              </p>

              <h3>4. Remarketing video</h3>
              <p>
                Docierasz do osób, które obejrzały Twoje filmy na YouTube. Możesz targetować 
                według czasu oglądania (25%, 50%, 75%, 100% filmu).
              </p>

              <h3>5. Remarketing RLSA (Search)</h3>
              <p>
                Modyfikujesz stawki w kampaniach search dla osób, które już odwiedziły Twoją stronę. 
                Np. +50% stawki dla powracających użytkowników szukających "buty sportowe".
              </p>

              <h2 className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-primary" />
                Remarketing w Google Ads - krok po kroku
              </h2>

              <h3>Krok 1: Instalacja tagu Google Ads</h3>
              <p>
                Dodaj globalny tag witryny (gtag.js) do wszystkich stron. Tag zbiera dane o odwiedzających 
                i buduje listy remarketingowe.
              </p>

              <h3>Krok 2: Tworzenie list odbiorców</h3>
              <p>Segmentuj użytkowników według zachowań:</p>
              <ul>
                <li><strong>Wszyscy odwiedzający</strong> - szeroka lista na budowanie świadomości</li>
                <li><strong>Przeglądający produkty</strong> - pokazali zainteresowanie</li>
                <li><strong>Dodali do koszyka</strong> - gorący lead, blisko konwersji</li>
                <li><strong>Kupujący</strong> - do wykluczenia lub cross-sellingu</li>
              </ul>

              <h3>Krok 3: Ustawienie kampanii</h3>
              <p>
                Wybierz typ kampanii (Display, Discovery, Performance Max) i przypisz listy odbiorców. 
                Ustaw cap wyświetleń (frequency cap) na 3-5 dziennie, żeby nie irytować użytkowników.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold mb-4 mt-0">Optymalne ustawienia remarketingu Google Ads</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Czas trwania listy:</p>
                    <ul className="text-sm mb-0">
                      <li>E-commerce: 30-60 dni</li>
                      <li>B2B: 90-180 dni</li>
                      <li>Usługi lokalne: 14-30 dni</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Frequency cap:</p>
                    <ul className="text-sm mb-0">
                      <li>Brand awareness: 5-7/dzień</li>
                      <li>Konwersje: 3-5/dzień</li>
                      <li>Porzucone koszyki: 2-3/dzień</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Remarketing na Facebooku i Instagramie
              </h2>

              <h3>Pixel Facebooka</h3>
              <p>
                Odpowiednik tagu Google - instalujesz na stronie i zbierasz dane o odwiedzających. 
                Pixel śledzi standardowe zdarzenia (PageView, ViewContent, AddToCart, Purchase).
              </p>

              <h3>Custom Audiences</h3>
              <p>Facebook oferuje więcej opcji targetowania:</p>
              <ul>
                <li><strong>Website visitors</strong> - wszyscy lub według URL</li>
                <li><strong>Engagement audiences</strong> - interakcje z postami, filmami, formularzami</li>
                <li><strong>Customer lists</strong> - upload emaili/telefonów</li>
                <li><strong>App activity</strong> - użytkownicy aplikacji</li>
              </ul>

              <h3>Dynamic Ads (DPA)</h3>
              <p>
                Automatycznie wyświetlają produkty z katalogu. Wymagają: pixela z wydarzeniami, 
                katalogu produktów i szablonu reklamy. Idealne dla sklepów z dużym asortymentem.
              </p>

              <h2 className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Strategie remarketingowe według etapu lejka
              </h2>

              <h3>TOFU - Świadomość (wszyscy odwiedzający)</h3>
              <ul>
                <li>Cel: przypomnienie o marce, budowanie zaufania</li>
                <li>Kreacje: wartościowy content, social proof, misja firmy</li>
                <li>Budżet: 20% całości</li>
              </ul>

              <h3>MOFU - Rozważanie (przeglądający produkty/usługi)</h3>
              <ul>
                <li>Cel: przekonanie do rozważenia zakupu</li>
                <li>Kreacje: porównania, case studies, demo</li>
                <li>Budżet: 30% całości</li>
              </ul>

              <h3>BOFU - Decyzja (dodali do koszyka, rozpoczęli formularz)</h3>
              <ul>
                <li>Cel: domknięcie konwersji</li>
                <li>Kreacje: rabaty, darmowa dostawa, gwarancja zwrotu</li>
                <li>Budżet: 50% całości (najwyższy ROI)</li>
              </ul>

              <h2 className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-primary" />
                Koszty i budżet remarketingu
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Platforma</th>
                      <th>Średni CPC</th>
                      <th>Średni CPM</th>
                      <th>Min. budżet/msc</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Google Display</td>
                      <td>0,50-2 zł</td>
                      <td>3-10 zł</td>
                      <td>500 zł</td>
                    </tr>
                    <tr>
                      <td>Google Search (RLSA)</td>
                      <td>1-5 zł</td>
                      <td>-</td>
                      <td>1000 zł</td>
                    </tr>
                    <tr>
                      <td>Facebook/Instagram</td>
                      <td>0,30-1,50 zł</td>
                      <td>5-20 zł</td>
                      <td>500 zł</td>
                    </tr>
                    <tr>
                      <td>LinkedIn</td>
                      <td>5-15 zł</td>
                      <td>30-80 zł</td>
                      <td>2000 zł</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Błędy w remarketingu, których musisz unikać</h2>
              <ol>
                <li><strong>Brak segmentacji</strong> - ta sama reklama dla wszystkich</li>
                <li><strong>Za wysoka częstotliwość</strong> - irytowanie użytkowników</li>
                <li><strong>Remarketing do kupujących</strong> - brak wykluczenia konwertujących</li>
                <li><strong>Zbyt krótkie listy</strong> - minimum 1000 użytkowników w Google</li>
                <li><strong>Nudne kreacje</strong> - brak testów A/B, stałe grafiki</li>
                <li><strong>Ignorowanie mobile</strong> - brak responsywnych reklam</li>
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
                Remarketing to jedna z najbardziej efektywnych kosztowo form reklamy online. 
                Pozwala docierać do osób już zainteresowanych Twoją ofertą, znacząco zwiększając 
                szanse na konwersję przy niższym koszcie niż pozyskiwanie nowych użytkowników.
              </p>
              <p>
                Kluczem do sukcesu jest <strong>segmentacja odbiorców</strong>, 
                <strong>personalizacja przekazu</strong> i <strong>optymalna częstotliwość</strong>. 
                Zacznij od prostego remarketingu standardowego, a z czasem rozbudowuj o dynamiczne 
                reklamy i zaawansowane listy odbiorców.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 my-8 text-center">
                <h3 className="text-xl font-bold mb-4 mt-0">Potrzebujesz pomocy z remarketingiem?</h3>
                <p className="mb-6">
                  Skonfigurujemy remarketing dla Twojej firmy - od instalacji tagów po optymalizację kampanii.
                </p>
                <Button asChild size="lg">
                  <Link to="/kontakt">Umów bezpłatną konsultację</Link>
                </Button>
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

      {/* Related Services */}
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <RelatedServices services={servicesByCategory.ads} />
          </div>
        </div>
      </section>

            {/* SEO Article Section */}
            <div className="mt-12 pt-12 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Remarketing i retargeting — dlaczego odwiedzający, którzy nie kupili, są najcenniejszą grupą?</h2>
              <p className="text-muted-foreground mb-6">Remarketing (retargeting) to kampanie skierowane do osób, które już odwiedziły Twoją stronę lub sklep, ale nie dokonały konwersji. Te osoby znają Twoją markę i są statystycznie 70% bardziej skłonne do zakupu niż nowi odwiedzający. Remarketing to jeden z najwyższych wskaźników ROI spośród wszystkich form reklamy online.</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Kampanie remarketingowe Google Ads i Meta Ads — konfiguracja i optymalizacja</h2>
              <p className="text-muted-foreground mb-6">Fotz Studio konfiguruje i optymalizuje kampanie remarketingowe w Google Ads (RLSA, Display Remarketing, YouTube Remarketing) i Meta Ads (Facebook i Instagram Custom Audiences, Lookalike Audiences). Tworzymy spersonalizowane reklamy dla różnych segmentów odwiedzających — inaczej do porzucających koszyk, inaczej do czytających bloga.</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Wdróż remarketing w swojej firmie — skontaktuj się z Fotz Studio</h2>
              <p className="text-muted-foreground">Czy Twoje kampanie reklamowe obejmują remarketing? Fotz Studio skonfiguruje remarketing od zera lub zoptymalizuje istniejące kampanie. Bezpłatny audyt kampanii i konsultacja dostępne online. Skontaktuj się z nami, by przestać tracić potencjalnych klientów.</p>
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/performance-marketing/google-ads" className="text-primary hover:underline font-medium text-sm">→ Google Ads</Link>
              <Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline font-medium text-sm">→ Facebook Ads</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
            </div>
            </div>


      {/* Related Articles */}
      <RelatedArticles currentArticleId="remarketing-poradnik" />
    </Layout>
  );
}
