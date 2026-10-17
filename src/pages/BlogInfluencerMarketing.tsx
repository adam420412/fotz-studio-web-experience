import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Users, Target, TrendingUp, CheckCircle, AlertCircle, DollarSign, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Ile kosztuje współpraca z influencerem w Polsce?",
    answer: "Stawki zależą od wielkości i zaangażowania społeczności twórcy, platformy i formatu (post, Story, TikTok), zakresu praw do treści oraz wyłączności. Nano i mikro influencerzy są zwykle znacznie tańsi niż makro i mega. Konkretną kwotę ustala się w rozmowie z twórcą lub jego managementem."
  },
  {
    question: "Jak znaleźć odpowiedniego influencera dla mojej marki?",
    answer: "Użyj platform jak InfluTool, Reach a Blogger lub HypeAuditor. Sprawdź engagement rate na tle podobnych kont, dopasowanie do wartości marki, historię współprac i autentyczność followersów."
  },
  {
    question: "Czym różnią się nano, mikro i makro influencerzy?",
    answer: "Nano (1-10K) mają najwyższy engagement i niski koszt. Mikro (10-100K) oferują dobry stosunek ceny do zasięgu. Makro (100K-1M) dają duży zasięg, ale niższy engagement. Mega (1M+) budują świadomość marki."
  },
  {
    question: "Jak mierzyć ROI kampanii influencerskiej?",
    answer: "Monitoruj: zasięg i wyświetlenia, engagement (reakcje, komentarze), kliknięcia w linki/kody rabatowe, konwersje i sprzedaż, wzrost followersów marki oraz wzmianki o marce."
  },
  {
    question: "Co powinien zawierać brief dla influencera?",
    answer: "Brief powinien zawierać: opis marki i wartości, cel kampanii, grupę docelową, kluczowe przekazy, deliverables, timeline, budżet i KPI do zmierzenia efektów."
  }
];

export default function BlogInfluencerMarketing() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Influencer marketing w Polsce - jak współpracować z influencerami",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Influencer Marketing w Polsce - Jak Współpracować z Influencerami"
        description="Kompletny poradnik influencer marketingu. Jak znaleźć influencerów, negocjować współpracę, tworzyć briefy i mierzyć efekty kampanii."
        ogType="article"
        canonical="https://www.fotz-studio.pl/social-media/influencer"
        keywords="influencer marketing, współpraca z influencerami, marketing influencerów, reklama u influencera, influencer co to"
      />
      <ArticleSchema
        title="Influencer Marketing w Polsce - Jak Współpracować z Influencerami"
        description="Kompletny poradnik influencer marketingu. Jak znaleźć influencerów, negocjować współpracę, tworzyć briefy i mierzyć efekty kampanii."
        url="https://www.fotz-studio.pl/social-media/influencer"
        datePublished="2025-01-04"
        dateModified="2026-01-09"
        author="Fotz Studio"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Blog", url: "https://www.fotz-studio.pl/blog" },
          { name: "Influencer Marketing", url: "https://www.fotz-studio.pl/social-media/influencer" },
        ]}/>
      <FAQSchema items={faqItems} />

      <article className="pt-32 pb-20 bg-background">
        <div className="container-wide">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do bloga
          </Link>

          {/* Header */}
          <header className="max-w-4xl mb-12">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Poradniki
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Influencer Marketing w Polsce - Jak Współpracować z Influencerami
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Kompletny przewodnik po influencer marketingu. Od wyboru influencerów, przez negocjacje i briefy, po mierzenie ROI kampanii.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Zespół FOTZ
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                4 Stycznia 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                17 min czytania
              </span>
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Udostępnij
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-12">
            <img loading="lazy"
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074"
              alt="Influencer marketing - współpraca z twórcami"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <p className="lead">
                Influencer marketing w Polsce to już dojrzały rynek. Współpraca z twórcami internetowymi może być niezwykle skuteczna, ale wymaga strategicznego podejścia i znajomości specyfiki polskiego rynku. Kluczowe jest odpowiednie <Link to="/social-media/obsluga" className="text-primary hover:underline">zarządzanie social media</Link> oraz integracja z <Link to="/kampanie-reklamowe" className="text-primary hover:underline">kampaniami reklamowymi</Link>. Szczególnie skuteczne są kampanie na <Link to="/performance-marketing/instagram-ads" className="text-primary hover:underline">Instagramie</Link> i <Link to="/performance-marketing/tiktok-ads" className="text-primary hover:underline">TikToku</Link>.
              </p>

              <h2>Rodzaje influencerów - kogo wybrać?</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-bold">Nano influencerzy</h4>
                      <span className="text-sm text-muted-foreground">1-10K obserwujących</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Zwykle najwyższy engagement
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Niski koszt współpracy
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Autentyczność rekomendacji
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-bold">Mikro influencerzy</h4>
                      <span className="text-sm text-muted-foreground">10-100K obserwujących</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Dobry stosunek ceny do zasięgu
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Specjalizacja w niszy
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Dobry engagement w niszy
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-bold">Makro influencerzy</h4>
                      <span className="text-sm text-muted-foreground">100K-1M obserwujących</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Duży zasięg kampanii
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Profesjonalna produkcja
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                      Wyższe koszty
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-bold">Mega influencerzy</h4>
                      <span className="text-sm text-muted-foreground">1M+ obserwujących</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Masowy zasięg
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Budowanie świadomości marki
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                      Zwykle niższy engagement
                    </li>
                  </ul>
                </div>
              </div>

              <h2>Jak znaleźć odpowiednich influencerów?</h2>

              <h3>1. Platformy i narzędzia</h3>
              <ul>
                <li><strong>InfluTool</strong> - polska platforma z bazą influencerów</li>
                <li><strong>Reach a Blogger</strong> - marketplace blogerów i twórców</li>
                <li><strong>WhitePress</strong> - publikacje sponsorowane i influencerzy</li>
                <li><strong>Modash</strong> - analityka i wyszukiwarka influencerów</li>
                <li><strong>HypeAuditor</strong> - weryfikacja autentyczności</li>
              </ul>

              <h3>2. Kryteria wyboru influencera</h3>
              <div className="bg-primary/10 rounded-xl p-6 my-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Checklist przed współpracą
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">Analiza jakościowa:</p>
                    <ul className="space-y-1 text-sm">
                      <li>☑️ Dopasowanie do wartości marki</li>
                      <li>☑️ Styl komunikacji</li>
                      <li>☑️ Historia współprac (bez konkurencji)</li>
                      <li>☑️ Jakość treści i estetyka</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Analiza ilościowa:</p>
                    <ul className="space-y-1 text-sm">
                      <li>☑️ Engagement rate na tle podobnych kont</li>
                      <li>☑️ Wzrost obserwujących</li>
                      <li>☑️ Autentyczność followersów</li>
                      <li>☑️ Demografia odbiorców</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Jak negocjować współpracę?</h2>

              <h3>Od czego zależą stawki influencerów?</h3>
              <p>Stawki twórców bardzo się różnią i zmieniają się z roku na rok, dlatego nie podajemy cennika. Na wycenę współpracy wpływają przede wszystkim:</p>
              <ul>
                <li><strong>Wielkość i zaangażowanie społeczności</strong> - nano i mikro twórcy są zwykle tańsi niż makro i mega</li>
                <li><strong>Format i platforma</strong> - post, Story, Reels czy TikTok wymagają innego nakładu pracy</li>
                <li><strong>Prawa do treści</strong> - wykorzystanie materiału w reklamach płatnych podnosi stawkę</li>
                <li><strong>Wyłączność branżowa</strong> - zakaz współpracy z konkurencją kosztuje dodatkowo</li>
                <li><strong>Liczba publikacji i czas trwania</strong> - długoterminowe partnerstwa często dają lepsze warunki</li>
              </ul>

              <h3>Modele rozliczeń</h3>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-card rounded-xl p-5">
                  <DollarSign className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Flat fee</h4>
                  <p className="text-sm text-muted-foreground">Stała kwota za określone deliverables. Najprostszy model.</p>
                </div>
                <div className="bg-card rounded-xl p-5">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Performance</h4>
                  <p className="text-sm text-muted-foreground">Opłata za wyniki (sprzedaż, kliknięcia). Niższe ryzyko.</p>
                </div>
                <div className="bg-card rounded-xl p-5">
                  <MessageSquare className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Barter</h4>
                  <p className="text-sm text-muted-foreground">Wymiana produktów/usług. Idealne dla nano/mikro.</p>
                </div>
              </div>

              <h2>Jak stworzyć skuteczny brief?</h2>

              <p>Brief to fundament udanej współpracy. Powinien zawierać:</p>

              <div className="bg-card rounded-2xl p-8 my-8">
                <h3 className="text-xl font-bold mb-6">Struktura briefu dla influencera</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-bold">O marce</h4>
                      <p className="text-sm text-muted-foreground">Kim jesteśmy, czym się wyróżniamy, jakie mamy wartości</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-bold">Cel kampanii</h4>
                      <p className="text-sm text-muted-foreground">Świadomość, sprzedaż, generowanie leadów, budowanie społeczności</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-bold">Grupa docelowa</h4>
                      <p className="text-sm text-muted-foreground">Do kogo ma trafić przekaz - demografia, zainteresowania</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                    <div>
                      <h4 className="font-bold">Key messages</h4>
                      <p className="text-sm text-muted-foreground">Kluczowe komunikaty do przekazania (max 3)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">5</div>
                    <div>
                      <h4 className="font-bold">Deliverables</h4>
                      <p className="text-sm text-muted-foreground">Co dokładnie ma powstać - format, ilość, terminy</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">6</div>
                    <div>
                      <h4 className="font-bold">Do's & Don'ts</h4>
                      <p className="text-sm text-muted-foreground">Czego unikać, co jest zakazane, tone of voice</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2>Jak mierzyć efekty kampanii?</h2>

              <h3>KPIs w influencer marketingu</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div>
                  <h4 className="font-bold mb-3">Metryki zasięgowe:</h4>
                  <ul className="space-y-2">
                    <li>📊 Impressions - wyświetlenia</li>
                    <li>👥 Reach - zasięg unikalny</li>
                    <li>📈 Engagement rate</li>
                    <li>💬 Komentarze i udostępnienia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Metryki konwersji:</h4>
                  <ul className="space-y-2">
                    <li>🔗 Kliknięcia w link</li>
                    <li>🛒 Sprzedaż (kody rabatowe)</li>
                    <li>📧 Generowane leady</li>
                    <li>💰 ROAS / ROI</li>
                  </ul>
                </div>
              </div>

              <h3>Obliczanie ROI</h3>
              <div className="bg-primary/10 rounded-xl p-6 my-6">
                <p className="font-mono text-center text-lg">
                  ROI = (Przychód z kampanii - Koszt kampanii) / Koszt kampanii
                </p>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Wynik pomnożony przez 100 daje ROI w procentach. Do przychodu wliczaj tylko sprzedaż, którą da się przypisać kampanii (np. kody rabatowe, linki z UTM).
                </p>
              </div>

              <h2>Najczęstsze błędy w influencer marketingu</h2>

              <div className="space-y-4 my-8">
                <div className="flex gap-4 items-start bg-destructive/10 rounded-xl p-5">
                  <AlertCircle className="w-6 h-6 text-destructive shrink-0" />
                  <div>
                    <h4 className="font-bold">Wybór tylko po liczbie followersów</h4>
                    <p className="text-sm text-muted-foreground">Engagement i dopasowanie są ważniejsze niż zasięg</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-destructive/10 rounded-xl p-5">
                  <AlertCircle className="w-6 h-6 text-destructive shrink-0" />
                  <div>
                    <h4 className="font-bold">Brak weryfikacji autentyczności</h4>
                    <p className="text-sm text-muted-foreground">Fake followers to zmarnowany budżet</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-destructive/10 rounded-xl p-5">
                  <AlertCircle className="w-6 h-6 text-destructive shrink-0" />
                  <div>
                    <h4 className="font-bold">Zbyt restrykcyjny brief</h4>
                    <p className="text-sm text-muted-foreground">Influencer zna swoją społeczność - daj mu wolność kreatywną</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-destructive/10 rounded-xl p-5">
                  <AlertCircle className="w-6 h-6 text-destructive shrink-0" />
                  <div>
                    <h4 className="font-bold">Jednorazowe akcje</h4>
                    <p className="text-sm text-muted-foreground">Długoterminowe partnerstwa dają lepsze efekty</p>
                  </div>
                </div>
              </div>

              <h2>Aspekty prawne współpracy</h2>

              <p>W Polsce obowiązują regulacje dotyczące oznaczania treści sponsorowanych:</p>

              <ul>
                <li><strong>#reklama</strong> lub <strong>#współpracapłatna</strong> - obowiązkowe oznaczenie</li>
                <li><strong>UOKiK</strong> - może nakładać kary za brak oznaczenia</li>
                <li><strong>Umowa pisemna</strong> - zawsze podpisuj umowę z influencerem</li>
                <li><strong>Prawa autorskie</strong> - ustal kto ma prawa do treści</li>
                <li><strong>Ekskluzywność</strong> - określ czy influencer może współpracować z konkurencją</li>
              </ul>

              <h2>Podsumowanie</h2>

              <p>
                Influencer marketing to skuteczne narzędzie, ale wymaga strategicznego podejścia. Kluczem do sukcesu jest wybór odpowiednich twórców, jasny brief i systematyczne mierzenie efektów. Pamiętaj, że autentyczność i długoterminowe partnerstwa przynoszą najlepsze rezultaty.
              </p>

              <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-8 my-8">
                <h3 className="text-xl font-bold mb-4">Potrzebujesz wsparcia w influencer marketingu?</h3>
                <p className="text-muted-foreground mb-6">
                  Pomożemy Ci znaleźć odpowiednich influencerów, przygotować strategię i zarządzać kampanią od A do Z.
                </p>
                <Link to="/kontakt">
                  <Button size="lg">
                    Umów bezpłatną konsultację
                  </Button>
                </Link>
              </div>

            </div>
          </div>

          {/* Related Services */}
          <RelatedServices services={servicesByCategory.socialMedia} />

            {/* SEO Article Section */}
            <div className="mt-12 pt-12 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Influencer marketing — skuteczny kanał dotarcia do zaangażowanych odbiorców</h2>
              <p className="text-muted-foreground mb-6">Influencer marketing w Polsce to dynamicznie rosnący kanał reklamowy. Współpraca z odpowiednio dobranymi twórcami treści pozwala dotrzeć do zaangażowanych społeczności z autentycznym przekazem. Kluczem jest dobór influencera o wartościach zgodnych z marką i rzeczywistym zaangażowaniu odbiorców, a nie samej liczbie followersów.</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Mikro i makro influencerzy — dobór ambasadorów i realizacja kampanii w Fotz Studio</h2>
              <p className="text-muted-foreground mb-6">Fotz Studio pomaga w doborze influencerów (mikro: 10-100k, makro: 100k+), negocjacji warunków współpracy, briefowaniu twórców i pomiarze wyników (zasięg, wyświetlenia, kliknięcia, sprzedaż). Każdego twórcę weryfikujemy przed współpracą (autentyczność obserwujących, dotychczasowe współprace).</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Kampania z influencerami dla Twojej marki — skontaktuj się z Fotz Studio</h2>
              <p className="text-muted-foreground">Chcesz uruchomić kampanię influencer marketingową? Fotz Studio przeprowadzi Cię przez cały proces — od strategii i doboru twórców po realizację i raportowanie. Bezpłatna konsultacja dostępna dla firm planujących pierwsze kampanie z influencerami.</p>
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/uslugi/reklama-facebook" className="text-primary hover:underline font-medium text-sm">→ Facebook Ads</Link>
              <Link to="/uslugi/branding" className="text-primary hover:underline font-medium text-sm">→ Branding</Link>
            </div>
            </div>


          {/* Related Articles */}
          <RelatedArticles currentArticleId="influencer-marketing-polska" />
        </div>
      </article>
    </Layout>
  );
}
