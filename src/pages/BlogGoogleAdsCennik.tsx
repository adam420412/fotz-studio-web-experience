import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, TrendingUp, DollarSign, Target, BarChart2, CheckCircle, AlertCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Ile kosztuje kliknięcie w Google Ads?",
    answer: "Średni koszt kliknięcia (CPC) w Google Ads w Polsce waha się od 0,20 zł (e-commerce masowy) do nawet 80 zł (branża prawnicza). Dla większości firm usługowych CPC wynosi 2–15 zł. Koszt zależy od konkurencyjności słów kluczowych i jakości kampanii.",
  },
  {
    question: "Jaki budżet minimalny jest potrzebny na Google Ads?",
    answer: "Google Ads nie ma wymaganego budżetu minimalnego, ale aby kampania generowała realne dane i efekty, zalecamy minimum 1000–1500 zł/mies. dla firm lokalnych i 3000–5000 zł/mies. dla firm ogólnopolskich. Poniżej tych kwot trudno zebrać wystarczającą liczbę kliknięć do optymalizacji.",
  },
  {
    question: "Ile pobiera agencja za obsługę Google Ads?",
    answer: "Agencje marketingowe pobierają zazwyczaj 15–25% budżetu reklamowego lub stałą opłatę od 800 do 3000 zł/mies. Model mieszany (stała opłata + % od budżetu) jest coraz popularniejszy. Fotz Studio oferuje przejrzyste pakiety bez ukrytych prowizji.",
  },
  {
    question: "Czy Google Ads jest droższe od Facebook Ads?",
    answer: "Zależy od branży i celu. Google Ads (search) jest droższe per kliknięcie, ale trafia do osób aktywnie szukających produktu/usługi — konwersje są zazwyczaj lepsze. Facebook Ads jest tańszy per kliknięcie, ale wymaga więcej czasu na budowę zamiaru zakupowego. Dla większości firm B2C optymalny jest mix obu.",
  },
  {
    question: "Jak obniżyć koszty reklamy w Google Ads?",
    answer: "Kluczowe metody: (1) Optymalizacja Quality Score — dobre landing page i trafne słowa kluczowe obniżają CPC. (2) Wykluczające słowa kluczowe — blokuj nietrafiające zapytania. (3) Rozszerzenia reklam — zwiększają CTR bez wzrostu kosztów. (4) Targetowanie geolokalizacyjne — koncentruj budżet na rentownych obszarach. (5) Harmonogram reklam — wyłącz w porach bez konwersji.",
  },
];

export default function BlogGoogleAdsCennik() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Google Ads cennik 2025 — ile kosztuje reklama w Google?",
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
        title="Google Ads Cennik 2025 — Ile Kosztuje Reklama w Google? | Fotz Studio"
        description="Google Ads cennik 2025 — ile kosztuje reklama w Google? Koszty CPC w różnych branżach, budżety minimalne, prowizje agencji. Konkretne liczby i porady."
        ogType="article"
        canonical="https://fotz.pl/blog/google-ads-cennik"
        keywords="google ads cennik, ile kosztuje google ads, reklama w google cena, koszt kliknięcia google, cpc google ads polska"
      />
      <ArticleSchema
        title="Google Ads Cennik 2025 — Ile Kosztuje Reklama w Google?"
        description="Kompleksowy przewodnik po kosztach Google Ads w Polsce. Cennik CPC w różnych branżach, minimalne budżety i opłaty agencji."
        url="https://fotz.pl/blog/google-ads-cennik"
        datePublished="2025-04-01"
        dateModified="2025-04-01"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Google Ads Cennik 2025", url: "https://fotz.pl/blog/google-ads-cennik" },
        ]}
      />
      <FAQSchema items={faqItems} />

      <article className="pt-32 pb-20 bg-background">
        <div className="container-wide">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do bloga
          </Link>

          <header className="max-w-4xl mb-12">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Google Ads
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Google Ads Cennik 2025 — Ile Kosztuje Reklama w Google?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Konkretne liczby: koszt kliknięcia w różnych branżach, minimalne
              budżety, opłaty agencji. Wszystko, co musisz wiedzieć przed startem
              kampanii Google Ads.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Zespół Fotz Studio
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                1 kwietnia 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                7 min czytania
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 hover:text-primary transition-colors ml-auto"
              >
                <Share2 className="w-4 h-4" />
                Udostępnij
              </button>
            </div>
          </header>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12 max-w-7xl">
            <div className="max-w-4xl">
              {/* Intro */}
              <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                <p>
                  <strong className="text-foreground">Google Ads</strong> działa w
                  modelu Pay Per Click (PPC) — płacisz tylko wtedy, gdy ktoś
                  kliknie w Twoją reklamę. Brzmi prosto, ale{" "}
                  <strong className="text-foreground">
                    ile faktycznie kosztuje reklama w Google?
                  </strong>{" "}
                  Odpowiedź zależy od dziesiątek zmiennych: branży, słów
                  kluczowych, jakości reklamy i ustawień kampanii.
                </p>
                <p>
                  W tym artykule podajemy konkretne liczby i przedziały kosztów —
                  bez owijania w bawełnę.
                </p>
              </div>

              {/* How pricing works */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Jak działa wycena Google Ads?
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Google Ads korzysta z systemu aukcji w czasie rzeczywistym
                    (Real-Time Bidding). Gdy użytkownik wpisuje zapytanie, Google
                    przeprowadza błyskawiczną aukcję wśród reklamodawców
                    targetujących to słowo kluczowe. Decyduje Ad Rank:
                  </p>
                </div>
                <div className="bg-card border border-border/60 rounded-xl p-6 my-6">
                  <div className="font-mono text-center text-lg font-bold text-primary mb-2">
                    Ad Rank = Max CPC bid × Quality Score
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Quality Score (1–10) zależy od: trafności reklamy, jakości
                    strony docelowej i oczekiwanego CTR
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Oznacza to, że{" "}
                  <strong className="text-foreground">
                    dobrze zoptymalizowana kampania zapłaci mniej za kliknięcie
                  </strong>{" "}
                  niż konkurent z wyższą stawką, ale słabą reklamą.
                </p>
              </section>

              {/* CPC by industry */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Średni koszt kliknięcia w Google Ads — branże w Polsce
                </h2>
                <p className="text-muted-foreground mb-6">
                  Poniżej przybliżone wartości CPC (Cost Per Click) dla
                  popularnych branż w Polsce. To dane szacunkowe — rzeczywiste
                  koszty zależą od konkretnych słów kluczowych i ustawień.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border/60">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/40 border-b border-border/60">
                        <th className="text-left p-4 font-semibold text-foreground">Branża</th>
                        <th className="text-left p-4 font-semibold text-foreground">CPC (szac.)</th>
                        <th className="text-left p-4 font-semibold text-foreground">Konkurencyjność</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {[
                        ["Prawo i kancelarie", "20–80 zł", "🔴 Bardzo wysoka"],
                        ["Finanse i ubezpieczenia", "15–60 zł", "🔴 Bardzo wysoka"],
                        ["Nieruchomości", "8–30 zł", "🟠 Wysoka"],
                        ["Stomatologia i medycyna", "5–20 zł", "🟠 Wysoka"],
                        ["Usługi remontowo-budowlane", "3–15 zł", "🟡 Średnia"],
                        ["Restauracje i gastronomia", "1–8 zł", "🟡 Średnia"],
                        ["E-commerce (odzież, elektronika)", "0,50–5 zł", "🟢 Niska-średnia"],
                        ["Oprogramowanie i IT (B2B)", "5–25 zł", "🟠 Wysoka"],
                        ["Turystyka i hotele", "2–12 zł", "🟡 Średnia"],
                      ].map(([industry, cpc, competition], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/10"}>
                          <td className="p-4 text-foreground font-medium">{industry}</td>
                          <td className="p-4 text-primary font-bold">{cpc}</td>
                          <td className="p-4 text-muted-foreground">{competition}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  *Dane szacunkowe na podstawie Google Keyword Planner dla polskiego rynku, Q1 2025.
                </p>
              </section>

              {/* Budgets */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Jaki budżet na Google Ads wybrać?
                </h2>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      type: "Mała firma lokalna",
                      budget: "1 000–2 000 zł/mies.",
                      desc: "Usługi lokalne, gastronomia, małe sklepy. Kampania lokalna w 1–2 miastach.",
                      cls: "border-green-500/30 bg-green-500/5",
                    },
                    {
                      type: "Firma ogólnopolska / B2B",
                      budget: "3 000–10 000 zł/mies.",
                      desc: "Usługi na skalę ogólnopolską lub droższe produkty. Mix kampanii search + display.",
                      cls: "border-primary/30 bg-primary/5",
                    },
                    {
                      type: "E-commerce / Duże firmy",
                      budget: "10 000–100 000+ zł/mies.",
                      desc: "Sklepy internetowe, Google Shopping + remarketing, agresywne targetowanie.",
                      cls: "border-purple-500/30 bg-purple-500/5",
                    },
                  ].map((tier, i) => (
                    <div key={i} className={`rounded-xl border p-5 ${tier.cls}`}>
                      <div className="font-semibold text-foreground mb-2">{tier.type}</div>
                      <div className="text-xl font-bold text-primary mb-3">{tier.budget}</div>
                      <p className="text-sm text-muted-foreground">{tier.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Agency fees */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Koszty obsługi agencji Google Ads
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      model: "Procent od budżetu",
                      fee: "15–25% budżetu reklamowego",
                      desc: "Popularny model, ale agencja może być zainteresowana wzrostem budżetu a nie efektywności.",
                      icon: BarChart2,
                    },
                    {
                      model: "Stała miesięczna opłata",
                      fee: "800–3 000 zł/mies.",
                      desc: "Przewidywalny koszt — agencja skupia się na efektach, nie na wzroście wydatków.",
                      icon: DollarSign,
                    },
                    {
                      model: "Model hybrydowy",
                      fee: "Stała + % od budżetu",
                      desc: "Popularny kompromis — minimalna opłata niezależnie od budżetu + procent od wydatków.",
                      icon: Target,
                    },
                  ].map((m, i) => (
                    <div key={i} className="bg-card border border-border/60 rounded-xl p-5 flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <m.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-1">{m.model}</div>
                        <div className="text-primary font-bold text-sm mb-1">{m.fee}</div>
                        <p className="text-sm text-muted-foreground">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cost reduction tips */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  5 sposobów na obniżenie kosztów Google Ads
                </h2>
                <div className="space-y-4">
                  {[
                    { tip: "Popraw Quality Score", desc: "Wyższy Quality Score = niższy CPC. Twórz trafne reklamy i landing page'e dopasowane do słów kluczowych.", icon: TrendingUp },
                    { tip: "Dodaj wykluczające słowa kluczowe", desc: "Regularnie sprawdzaj raport wyszukiwanych haseł i wykluczaj nietrafiające zapytania marnujące budżet.", icon: AlertCircle },
                    { tip: "Używaj rozszerzeń reklam", desc: "Rozszerzenia zwiększają CTR bez wzrostu kosztów za kliknięcie — linki do podstron, objaśnienia, fragmenty.", icon: Zap },
                    { tip: "Ogranicz geografię", desc: "Nie targetuj całego kraju, jeśli obsługujesz 1–2 regiony. Precyzyjne targetowanie obniża CPC.", icon: Target },
                    { tip: "Ustaw harmonogram reklam", desc: "Wyłącz reklamy w godzinach i dniach z niską konwersją (np. weekend dla B2B). Analityka pokaże optymalne okna.", icon: CheckCircle },
                  ].map((tip, i) => (
                    <div key={i} className="bg-card border border-border/60 rounded-xl p-5 flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <tip.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-1">{i + 1}. {tip.tip}</div>
                        <p className="text-sm text-muted-foreground">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Small business section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Google Ads dla małych firm — czy to się opłaca?
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Tak — pod warunkiem, że kampania jest dobrze zarządzana. Nawet
                    przy budżecie 1000–2000 zł/mies. można osiągnąć dobry ROI w mniej
                    konkurencyjnych branżach i lokalizacjach.
                  </p>
                  <p>
                    Kluczem jest precyzja: zamiast targetować ogólne frazy z ogromną
                    konkurencją, warto skupić się na{" "}
                    <strong className="text-foreground">frazach long-tail z lokalną intencją</strong>{" "}
                    (np. &quot;hydraulik 24h Poznań Grunwald&quot; zamiast
                    &quot;hydraulik&quot;). Mniejsza liczba wyszukań, ale znacznie wyższy
                    współczynnik konwersji.
                  </p>
                  <p>
                    Fotz Studio prowadzi kampanie Google Ads od budżetu 1000 zł netto
                    miesięcznie. Zapraszamy na{" "}
                    <Link to="/kontakt" className="text-primary hover:underline">
                      bezpłatną wycenę
                    </Link>.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Często zadawane pytania — Google Ads cennik
                </h2>
                <div className="space-y-4">
                  {faqItems.map((item, i) => (
                    <div key={i} className="bg-card border border-border/60 rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                      <p className="text-muted-foreground text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <RelatedArticles currentArticleId="google-ads-cennik" />
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                <div className="bg-card border border-border/60 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Potrzebujesz kampanii Google Ads?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fotz Studio prowadzi kampanie od 1000 zł/mies. budżetu
                    reklamowego. Bezpłatna analiza i wycena.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/kontakt">Zamów bezpłatną wycenę</Link>
                  </Button>
                </div>

                <RelatedServices
                  services={servicesByCategory["ads"] || []}
                />
              </div>
            </aside>
          </div>
        </div>
      </article>
    </Layout>
  );
}
