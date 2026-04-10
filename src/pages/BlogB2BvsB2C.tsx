import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Users, Building2, Target, TrendingUp, Megaphone, ShoppingCart } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Jaka jest główna różnica między marketingiem B2B a B2C?",
    answer: "B2B (Business-to-Business) sprzedaje firmom, decyzje są racjonalne i długie, wartość transakcji wysoka. B2C (Business-to-Consumer) sprzedaje konsumentom, decyzje często emocjonalne i szybkie, wartość transakcji niższa."
  },
  {
    question: "Które kanały marketingowe są najlepsze dla B2B?",
    answer: "Najskuteczniejsze kanały B2B to: LinkedIn (organiczny i Ads), content marketing (whitepapers, case studies), email marketing, SEO, webinary i targi branżowe. Google Ads działa dobrze dla usług o jasnej intencji wyszukiwania."
  },
  {
    question: "Czy social media działają w marketingu B2B?",
    answer: "Tak, ale inne platformy. LinkedIn to podstawa B2B (70% leadów B2B pochodzi z LinkedIn). Twitter/X sprawdza się w IT i startupach. Facebook i Instagram są mniej efektywne, ale mogą budować świadomość marki."
  },
  {
    question: "Jak długi jest cykl sprzedażowy w B2B vs B2C?",
    answer: "B2C: minuty do dni (zakupy impulsywne) lub tygodnie (większe zakupy). B2B: tygodnie do miesięcy, a dla enterprise nawet 6-18 miesięcy. Wymaga to innego podejścia do nurturingu i content marketingu."
  },
  {
    question: "Czy można łączyć strategie B2B i B2C?",
    answer: "Tak, szczególnie w modelu B2B2C (sprzedajesz firmom, które sprzedają konsumentom) lub gdy Twój produkt ma obie grupy docelowe. Wymaga to jednak oddzielnych lejków i komunikacji dla każdej grupy."
  }
];

export default function BlogB2BvsB2C() {
  return (
    <Layout>
      <SEOHead
        title="Marketing B2B vs B2C — Różnice, Strategie i Kanały Marketingowe | Fotz Studio"
        description="Marketing B2B vs B2C — kluczowe różnice w strategii, kanałach i treściach. Jak prowadzić skuteczny marketing B2B i B2C? Poradnik Fotz Studio."
        ogType="article"
        canonical="https://fotz.pl/blog/marketing-b2b-vs-b2c"
        keywords="marketing b2b, marketing b2c, b2b vs b2c, strategia b2b, sprzedaż b2b, lead generation b2b"
      />
      <ArticleSchema
        title="Marketing B2B vs B2C - kluczowe różnice i strategie"
        description="Marketing B2B vs B2C: kluczowe różnice w strategii, kanałach i komunikacji. Jak dostosować marketing do modelu biznesowego."
        url="https://fotz.pl/blog/marketing-b2b-vs-b2c"
        datePublished="2025-01-04"
        dateModified="2026-01-09"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Marketing B2B vs B2C", url: "https://fotz.pl/blog/marketing-b2b-vs-b2c" },
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
              Marketing B2B vs B2C - kluczowe różnice i strategie
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Sprzedajesz firmom czy konsumentom? Poznaj fundamentalne różnice w podejściu, kanałach i komunikacji między marketingiem B2B a B2C.
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
                15 min czytania
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
              alt="Marketing B2B vs B2C - różnice strategii"
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
                <Building2 className="w-6 h-6 text-primary" />
                Czym różni się B2B od B2C?
              </h2>
              <p>
                <strong>B2B (Business-to-Business)</strong> to model, w którym sprzedajesz produkty lub usługi 
                innym firmom. <strong>B2C (Business-to-Consumer)</strong> to sprzedaż bezpośrednio do konsumentów końcowych. Niezależnie od modelu, skuteczny <Link to="/content-marketing/strategia" className="text-primary hover:underline">content marketing</Link> oraz odpowiednia <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">strona internetowa</Link> są fundamentem sukcesu.
              </p>
              <p>
                Ta pozornie prosta różnica przekłada się na fundamentalnie inne podejście do marketingu, 
                sprzedaży i komunikacji. Zrozumienie tych różnic jest kluczowe dla skuteczności działań.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold mb-3 mt-0">📊 B2B vs B2C w liczbach</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold mb-2">B2B:</p>
                    <ul className="mb-0">
                      <li>Średnia wartość transakcji: 10 000+ zł</li>
                      <li>Cykl sprzedaży: 1-18 miesięcy</li>
                      <li>Decydentów: 6-10 osób</li>
                      <li>Retencja klienta: 80-90%</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">B2C:</p>
                    <ul className="mb-0">
                      <li>Średnia wartość transakcji: 50-500 zł</li>
                      <li>Cykl sprzedaży: minuty - dni</li>
                      <li>Decydentów: 1-2 osoby</li>
                      <li>Retencja klienta: 20-40%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Kluczowe różnice w marketingu
              </h2>

              <h3>1. Proces decyzyjny</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Aspekt</th>
                      <th>B2B</th>
                      <th>B2C</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Motywacja</td>
                      <td>ROI, efektywność, rozwiązanie problemu</td>
                      <td>Emocje, status, przyjemność</td>
                    </tr>
                    <tr>
                      <td>Decyzja</td>
                      <td>Racjonalna, analityczna</td>
                      <td>Często impulsywna, emocjonalna</td>
                    </tr>
                    <tr>
                      <td>Ryzyko</td>
                      <td>Wysokie (kariera, budżet firmy)</td>
                      <td>Niskie (własne pieniądze)</td>
                    </tr>
                    <tr>
                      <td>Czas</td>
                      <td>Tygodnie - miesiące</td>
                      <td>Sekundy - dni</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2. Komunikacja i ton</h3>
              <p><strong>B2B:</strong></p>
              <ul>
                <li>Profesjonalny, ekspercki ton</li>
                <li>Dane, case studies, ROI</li>
                <li>Długie treści edukacyjne</li>
                <li>Terminologia branżowa OK</li>
              </ul>
              <p><strong>B2C:</strong></p>
              <ul>
                <li>Emocjonalny, przystępny ton</li>
                <li>Korzyści, lifestyle, aspiracje</li>
                <li>Krótkie, angażujące treści</li>
                <li>Prosty język, bez żargonu</li>
              </ul>

              <h2 className="flex items-center gap-3">
                <Megaphone className="w-6 h-6 text-primary" />
                Kanały marketingowe: B2B vs B2C
              </h2>

              <h3>Najskuteczniejsze kanały B2B</h3>
              <ol>
                <li><strong><Link to="/performance-marketing/linkedin-ads" className="text-primary hover:underline">LinkedIn</Link></strong> - #1 dla B2B, 80% leadów B2B z social media</li>
                <li><strong><Link to="/content-marketing/strategia" className="text-primary hover:underline">Content marketing</Link></strong> - whitepapers, ebooki, webinary</li>
                <li><strong>Email marketing</strong> - nurturing, <Link to="/blog/marketing-automation" className="text-primary hover:underline">automatyzacja</Link></li>
                <li><strong><Link to="/seo/pozycjonowanie" className="text-primary hover:underline">SEO</Link> + <Link to="/performance-marketing/google-ads" className="text-primary hover:underline">Google Ads</Link></strong> - intencyjne wyszukiwania</li>
                <li><strong>Targi i wydarzenia</strong> - networking, demo</li>
              </ol>

              <h3>Najskuteczniejsze kanały B2C</h3>
              <ol>
                <li><strong><Link to="/performance-marketing/instagram-ads" className="text-primary hover:underline">Instagram</Link> + <Link to="/performance-marketing/tiktok-ads" className="text-primary hover:underline">TikTok</Link></strong> - visual, lifestyle, influencerzy</li>
                <li><strong><Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline">Facebook Ads</Link></strong> - precyzyjne targetowanie</li>
                <li><strong>Google Shopping</strong> - dla <Link to="/uslugi/strony-internetowe/ecommerce" className="text-primary hover:underline">e-commerce</Link></li>
                <li><strong>Email marketing</strong> - promocje, <Link to="/performance-marketing/remarketing" className="text-primary hover:underline">porzucone koszyki</Link></li>
                <li><strong><Link to="/social-media/influencer" className="text-primary hover:underline">Influencer marketing</Link></strong> - social proof</li>
              </ol>

              <div className="bg-card border border-border rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold mb-4 mt-0">Podział budżetu: przykład</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">B2B (budżet 20 000 zł/msc):</p>
                    <ul className="text-sm mb-0">
                      <li>LinkedIn Ads: 8 000 zł (40%)</li>
                      <li>Content + SEO: 5 000 zł (25%)</li>
                      <li>Google Ads: 4 000 zł (20%)</li>
                      <li>Email/Automation: 2 000 zł (10%)</li>
                      <li>Testy: 1 000 zł (5%)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">B2C (budżet 20 000 zł/msc):</p>
                    <ul className="text-sm mb-0">
                      <li>Facebook/Instagram Ads: 10 000 zł (50%)</li>
                      <li>Google Ads: 4 000 zł (20%)</li>
                      <li>Influencerzy: 3 000 zł (15%)</li>
                      <li>Email: 2 000 zł (10%)</li>
                      <li>TikTok/Testy: 1 000 zł (5%)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Strategie content marketingu
              </h2>

              <h3>Content B2B</h3>
              <ul>
                <li><strong>Whitepapers i raporty</strong> - budują autorytet</li>
                <li><strong>Case studies</strong> - social proof z liczbami</li>
                <li><strong>Webinary</strong> - edukacja + lead generation</li>
                <li><strong>Blog ekspercki</strong> - SEO + thought leadership</li>
                <li><strong>LinkedIn articles</strong> - personal branding CEO</li>
              </ul>

              <h3>Content B2C</h3>
              <ul>
                <li><strong>Reels i TikToki</strong> - viralowy potencjał</li>
                <li><strong>User-generated content</strong> - autentyczność</li>
                <li><strong>Poradniki how-to</strong> - wartość + SEO</li>
                <li><strong>Behind the scenes</strong> - budowanie relacji</li>
                <li><strong>Konkursy i giveaway</strong> - engagement</li>
              </ul>

              <h2 className="flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Lead generation i sprzedaż
              </h2>

              <h3>Lejek B2B</h3>
              <p>Długi, wieloetapowy proces:</p>
              <ol>
                <li><strong>Awareness</strong> - content, SEO, LinkedIn</li>
                <li><strong>Interest</strong> - whitepaper, webinar (gated)</li>
                <li><strong>Consideration</strong> - case studies, demo</li>
                <li><strong>Intent</strong> - oferta, negocjacje</li>
                <li><strong>Decision</strong> - zakup, onboarding</li>
              </ol>
              <p>Kluczowe: lead scoring, nurturing, sales-marketing alignment.</p>

              <h3>Lejek B2C</h3>
              <p>Krótszy, często impulsywny:</p>
              <ol>
                <li><strong>Awareness</strong> - reklamy, influencerzy</li>
                <li><strong>Interest</strong> - landing page, produkty</li>
                <li><strong>Desire</strong> - social proof, promocje</li>
                <li><strong>Action</strong> - zakup, upsell</li>
              </ol>
              <p>Kluczowe: remarketing, porzucone koszyki, flash sales.</p>

              <h2 className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-primary" />
                Metryki sukcesu
              </h2>

              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Metryka</th>
                      <th>B2B</th>
                      <th>B2C</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Główna metryka</td>
                      <td>MQLs, SQLs, Pipeline</td>
                      <td>Sprzedaż, ROAS</td>
                    </tr>
                    <tr>
                      <td>CAC (koszt pozyskania)</td>
                      <td>500-5000+ zł</td>
                      <td>20-200 zł</td>
                    </tr>
                    <tr>
                      <td>LTV:CAC</td>
                      <td>3:1 - 5:1</td>
                      <td>3:1 - 4:1</td>
                    </tr>
                    <tr>
                      <td>Conversion rate</td>
                      <td>1-5% (landing)</td>
                      <td>2-5% (e-commerce)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>FAQ - Najczęściej zadawane pytania</h2>
              
              {faqItems.map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}

              <h2>Podsumowanie</h2>
              <p>
                Marketing B2B i B2C wymagają fundamentalnie różnego podejścia. B2B to maraton - długie 
                cykle, racjonalne decyzje, content edukacyjny i LinkedIn jako główny kanał. B2C to sprint - 
                szybkie decyzje, emocje, visual content i social media.
              </p>
              <p>
                Kluczem jest zrozumienie swojego klienta: co go motywuje, jak podejmuje decyzje, 
                gdzie spędza czas online. Dopiero wtedy możesz dobrać właściwe kanały i komunikację.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 my-8 text-center">
                <h3 className="text-xl font-bold mb-4 mt-0">Potrzebujesz strategii B2B lub B2C?</h3>
                <p className="mb-6">
                  Pomożemy Ci dobrać właściwe kanały i stworzyć strategię dopasowaną do Twojego modelu biznesowego.
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
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Marketing B2B i B2C — różne podejście do klienta, różne strategie</h2>
              <p className="text-muted-foreground mb-6">Marketing B2B (business-to-business) i B2C (business-to-consumer) różnią się fundamentalnie: inna długość cyklu decyzyjnego, inne kanały komunikacji, inny ton przekazu. B2B opiera się na edukacji, budowaniu autorytetu i długoterminowych relacjach. B2C stawia na emocje, impulsowość i szybkie konwersje. Skuteczna strategia marketingowa musi uwzględniać te różnice.</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Kanały marketingowe B2B — LinkedIn Ads, content marketing i email marketing</h2>
              <p className="text-muted-foreground mb-6">W marketingu B2B kluczowe kanały to: LinkedIn (targetowanie decydentów), content marketing (e-booki, whitepapery, webinary), email marketing z automatyzacją i SEO na frazy z intencją informacyjną i zakupową. Fotz Studio prowadzi kampanie B2B dla firm technologicznych, usługowych i produkcyjnych — z mierzalnymi wynikami.</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Strategia marketingowa B2B lub B2C dla Twojej firmy — Fotz Studio</h2>
              <p className="text-muted-foreground">Niezależnie czy działasz B2B, B2C czy w modelu hybrydowym — Fotz Studio opracuje strategię marketingową dopasowaną do Twojego modelu biznesowego. Bezpłatna konsultacja i audyt marketingowy dostępny dla firm z całej Polski.</p>
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
            </div>
            </div>


      {/* Related Articles */}
      <RelatedArticles currentArticleId="marketing-b2b-vs-b2c" />
    </Layout>
  );
}
