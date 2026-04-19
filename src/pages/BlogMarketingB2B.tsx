import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, TrendingUp, Target, Megaphone, Users, CheckCircle } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "Jaka jest różnica między marketingiem B2B a strategią marketingową B2B?",
    answer: "Marketing B2B to szerokie pojęcie obejmujące wszystkie działania marketingowe skierowane do firm. Strategia marketingowa B2B to konkretny plan - wybór kanałów, budżetu, targetowania i KPI - dopasowany do modelu biznesu, etapu wzrostu i konkurencji w Twojej branży."
  },
  {
    question: "Ile czasu trwa lejek sprzedażowy w B2B?",
    answer: "Cykl sprzedażowy B2B wynosi zwykle 1-6 miesięcy dla małych kontraktów (5-50k zł), 3-12 miesięcy dla mid-market (50-200k zł) i 6-18+ miesięcy dla Enterprise (200k+ zł). Dlatego content marketing i lead nurturing są kluczowe - musisz budować relację przez długi okres."
  },
  {
    question: "Jakie kanały marketingowe dają najszybszy ROI w B2B?",
    answer: "Google Ads (branded) - kilka dni do konwersji; LinkedIn Ads - 2-4 tygodnie; Email marketing do bazy - 3-6 tygodni; Content + SEO - 3-6 miesięcy. Wybieraj kanały zależnie od urgencji i budżetu. Google Ads szybko, Content długoterminowo."
  },
  {
    question: "Czy targi branżowe są warte inwestycji w B2B?",
    answer: "Tak, ale zależy od branży. Targi są skuteczne dla: B2B hardware, SaaS enterprise, usług konsultingowych, produkcji. Mniej dla digital services czy małych e-commerce. Targi łączą outreach, demo, networking - trudne do replikowania online. Koszt: 5-30k zł za udział, ale 20-50 SQLs na targi."
  },
  {
    question: "Jak mierzyć sukces w marketingu B2B?",
    answer: "Główne metryki: MQL (Marketing Qualified Lead), SQL (Sales Qualified Lead), conversion rate z lead na klienta, pipeline value, deal velocity (ile czasu od leadów do zamknięcia), CAC (koszt pozyskania) vs LTV (lifetime value), win rate. Pamiętaj: nie wszystkie metryki mają równe znaczenie - fokus na pipeline i revenue."
  },
  {
    question: "Kiedy Account-Based Marketing (ABM) ma sens?",
    answer: "ABM jest najskuteczniejszy gdy: ACV powyżej 20-50k zł rocznie, cykl sprzedażowy powyżej 3 miesięcy, masz 100-500 idealnych firm docelowych, dobra integracja marketing-sales, budżet 50k+ zł miesięcznie. Dla małych firm - zastosuj micro-ABM na liście 50 firm bez dedykowanej platformy."
  },
  {
    question: "Jak budować autorytet i thought leadership w B2B?",
    answer: "Kanały: LinkedIn articles od CEO/team, blog ekspercki z danymi, webinary edukacyjne, gościnne artykuły w mediach branżowych, podcast, mówienie na konferencjach, publishing whitepapers. Kluczowe: regularność (co tydzień), wartość (nie przesadź ze sprzedażą), udział w dyskusjach branżowych, odpowiadanie na komentarze."
  },
  {
    question: "Jakie błędy najczęściej popełniają firmy w marketingu B2B?",
    answer: "Błędy: zbyt szybkie sprzedaż bez budowania relacji, niespójne messaging, brak alignment marketing-sales, mierzone vanity metrics (views zamiast leads), zbyt mało content edukacyjnego, ignorowanie email marketingu, brak A/B testowania. Sukces wymaga cierpliwości i long-game mindset."
  }
];

export default function BlogMarketingB2B() {
  return (
    <Layout>
      <SEOHead
        title="Marketing B2B - skuteczna strategia dla firm 2025 | Poradnik"
        description="Pełny poradnik strategii marketingowej B2B dla firm. Kanały, lejek sprzedażowy, ABM, KPI i case studies. Jak generować leady i sprzedawać firmom w 2025."
        ogType="article"
        canonical="https://fotz.pl/blog/marketing-b2b-strategia"
        keywords="marketing B2B, strategia marketingowa B2B, lead generation B2B, kanały B2B, ABM, lejek sprzedażowy, B2B KPI"
      />
      <ArticleSchema
        title="Marketing B2B - skuteczna strategia dla firm 2025"
        description="Kompletny poradnik strategii marketingowej B2B: kanały, lejek sprzedażowy, Account-Based Marketing, KPI i taktyki lead generation dla firm."
        url="https://fotz.pl/blog/marketing-b2b-strategia"
        datePublished="2025-04-12"
        dateModified="2026-04-12"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Marketing B2B - strategia marketingowa", url: "https://fotz.pl/blog/marketing-b2b-strategia" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="pt-40 pb-12 section-padding bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <div className="container-wide">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Wróć do bloga
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block text-sm font-medium text-yellow-400 uppercase tracking-wider mb-4">
              Poradnik strategii
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">
              Marketing B2B — skuteczna strategia dla firm 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Jak generować leady, budować lejek sprzedażowy i sprzedawać firmom. Pełny poradnik kanałów, taktyk i KPI dla marketingu B2B.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Zespół Fotz
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                12 kwi 2025
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
      <section className="section-padding pt-0 bg-gray-900">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <img loading="lazy"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Strategia marketingowa B2B dla firm"
              className="w-full rounded-2xl aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pt-0 bg-gray-900">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <article className="text-gray-200 space-y-8">

              {/* Intro */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
                  <Target className="w-7 h-7 text-yellow-400" />
                  B2B vs B2C — na czym polega różnica?
                </h2>
                <p className="text-lg leading-relaxed text-gray-300 mb-4">
                  Marketing B2B (Business-to-Business) to sprzedaż produktów i usług innym firmom. To fundamentalnie inne od B2C — nie sprzedajemy konsumentów, ale decydentów biznesowych. Lejek sprzedażowy jest dłuższy, decyzje bardziej racjonalne, a wartość transakcji wyższa.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  W marketingu B2B sukces zależy od: zrozumienia buying committee (zespołu decydentów), edukacyjnego contentu, relationship buildingu na LinkedIn, email nurturingu i zaangażowania sales teamu. Nie ma tu miejsca na impulsywne decyzje — wszystko jest zaplanowane, sprawdzane, porównywane.
                </p>
              </div>

              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-yellow-400">Kluczowe różnice B2B vs B2C</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-white mb-2">B2B:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Cykl: 1-18 miesięcy</li>
                      <li>• Decydentów: 4-10 osób</li>
                      <li>• Wartość: 10k-500k+ zł</li>
                      <li>• Motywacja: ROI, efektywność</li>
                      <li>• Kanały: LinkedIn, Email, SEO</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">B2C:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Cykl: minuty - dni</li>
                      <li>• Decydentów: 1-2 osoby</li>
                      <li>• Wartość: 50-500 zł</li>
                      <li>• Motywacja: emocje, status</li>
                      <li>• Kanały: Instagram, TikTok</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Kanały B2B */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
                  <Megaphone className="w-7 h-7 text-yellow-400" />
                  Kanały marketingowe B2B — tabela porównawcza
                </h2>
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                  Nie wszystkie kanały są równie skuteczne w B2B. Wybór zależy od: budżetu, cyklu sprzedażowego, typu produktu i profilu decydenta. Oto kompleksowe porównanie:
                </p>

                <div className="overflow-x-auto mb-6 rounded-lg border border-gray-700">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-800 border-b border-gray-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Kanał</th>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Skuteczność</th>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Koszt CPL</th>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Czas do efektów</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">LinkedIn Ads</td>
                        <td className="px-4 py-3 text-green-400">★★★★★ Najwyższa</td>
                        <td className="px-4 py-3">50-200 zł</td>
                        <td className="px-4 py-3">2-4 tygodnie</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">Google Ads (branded)</td>
                        <td className="px-4 py-3 text-green-400">★★★★☆ Wysoka</td>
                        <td className="px-4 py-3">30-100 zł</td>
                        <td className="px-4 py-3">3-7 dni</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">SEO + Content</td>
                        <td className="px-4 py-3 text-green-400">★★★★★ Najwyższa</td>
                        <td className="px-4 py-3">100-500 zł</td>
                        <td className="px-4 py-3">3-6 miesięcy</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">Email marketing</td>
                        <td className="px-4 py-3 text-blue-400">★★★★☆ Wysoka</td>
                        <td className="px-4 py-3">5-20 zł</td>
                        <td className="px-4 py-3">1-2 tygodnie</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">Webinaria</td>
                        <td className="px-4 py-3 text-blue-400">★★★★☆ Wysoka</td>
                        <td className="px-4 py-3">200-500 zł</td>
                        <td className="px-4 py-3">2-4 tygodnie</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">Targi branżowe</td>
                        <td className="px-4 py-3 text-blue-400">★★★★☆ Wysoka</td>
                        <td className="px-4 py-3">300-1000 zł</td>
                        <td className="px-4 py-3">1-2 tygodnie</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">Cold outreach</td>
                        <td className="px-4 py-3 text-yellow-400">★★★☆☆ Średnia</td>
                        <td className="px-4 py-3">100-300 zł</td>
                        <td className="px-4 py-3">2-6 tygodni</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">Polecenia (referrals)</td>
                        <td className="px-4 py-3 text-green-400">★★★★★ Najwyższa</td>
                        <td className="px-4 py-3">0-50 zł</td>
                        <td className="px-4 py-3">1-3 tygodnie</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-300">
                  <strong>Porady:</strong> LinkedIn Ads to fundament — 40-50% budżetu. SEO/Content to inwestycja długoterminowa — zarabiaj przez lata. Email — najtańszy kanał — nie pomijaj. Kombinacja kanałów daje najlepsze wyniki.
                </p>
              </div>

              {/* Lejek */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
                  <TrendingUp className="w-7 h-7 text-yellow-400" />
                  Lejek sprzedażowy B2B — od Awareness do Decision
                </h2>
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                  B2B ma zazwyczaj 5-stadialny lejek. Każdy etap wymaga innego typu contentu i komunikacji:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-400 pl-6 py-3">
                    <h3 className="text-xl font-bold text-white mb-2">1. Awareness — Świadomość problemu</h3>
                    <p className="text-gray-300 mb-3">Decydent nie wie jeszcze, że ma problem lub zna problem, ale nie szuka rozwiązania.</p>
                    <p className="text-sm text-gray-400">Taktyki: Content marketing (blog, whitepapery), SEO, LinkedIn organic, webinary edukacyjne, podcast, thought leadership</p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6 py-3">
                    <h3 className="text-xl font-bold text-white mb-2">2. Consideration — Rozważanie opcji</h3>
                    <p className="text-gray-300 mb-3">Decydent wie o problemie i zaczyna szukać rozwiązań. Porównuje opcje.</p>
                    <p className="text-sm text-gray-400">Taktyki: Case studies, comparison guides, Google Ads (intent), email nurturing, demo, product tours, webinary produktowe</p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6 py-3">
                    <h3 className="text-xl font-bold text-white mb-2">3. Decision — Proces decyzyjny</h3>
                    <p className="text-gray-300 mb-3">Decydent wybrał już 2-3 dostawców. Rozmawia z nimi, negocjuje, robi due diligence.</p>
                    <p className="text-sm text-gray-400">Taktyki: Sales call, demo customizado, pricing, integracje, security review, ROI calculator, customer references, contract review</p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6 py-3">
                    <h3 className="text-xl font-bold text-white mb-2">4. Purchase — Zakup</h3>
                    <p className="text-gray-300 mb-3">Decyzja podjęta. Wymagana jest: paperwork, onboarding, integracje, training.</p>
                    <p className="text-sm text-gray-400">Taktyki: Customer success team, implementation plan, dokumentacja, training sessions, slack channel dla wsparcia</p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6 py-3">
                    <h3 className="text-xl font-bold text-white mb-2">5. Advocacy — Rekomendacja</h3>
                    <p className="text-gray-300 mb-3">Klient jest zadowolony i staje się ambasadorem - poleca Cię innym.</p>
                    <p className="text-sm text-gray-400">Taktyki: Case study, referral program, customer testimonials, NPS, LinkedIn recommendations, user community</p>
                  </div>
                </div>
              </div>

              {/* ABM */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
                  <Users className="w-7 h-7 text-yellow-400" />
                  Account-Based Marketing (ABM) — Когда to ma sens
                </h2>
                <p className="text-lg leading-relaxed text-gray-300 mb-4">
                  ABM to strategia skupiona na konkretnych firmach (named accounts) zamiast na ogólnych grupach docelowych. Zamiast generować 1000 leadów i filtrować, wybierasz z góry 50-500 firm i personalizujesz komunikację dla każdego konta.
                </p>

                <div className="bg-gray-800/50 rounded-xl p-6 mb-6 border border-gray-700">
                  <h3 className="font-bold text-white mb-4">Kiedy ABM jest skuteczny:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span><strong>ACV powyżej 20-50k zł rocznie</strong> — dla niższych kwot ROI ABM nie wychodzi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Cykl sprzedażowy powyżej 3 miesięcy</strong> — krótkie cykle lepiej obsługuje inbound</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Zdefiniowany ICP i małe TAM</strong> — musisz mieć listę 100-500 idealnych firm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Dobry alignment marketing-sales</strong> — ABM wymaga ścisłej współpracy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Budżet min. 50k zł/msc</strong> — na spersonalizowany content, targeting, automation</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-300 mb-4">
                  <strong>Trzy poziomy ABM:</strong>
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li><strong>Strategic ABM (One-to-One):</strong> Pełna personalizacja dla każdego konta. 5-50 firm. Enterprise deals 100k+ USD. Dedykowany content, strony, kampanie.</li>
                  <li><strong>ABM Lite (One-to-Few):</strong> Personalizacja dla grup branżowych. 50-500 firm. Semi-custom content.</li>
                  <li><strong>Programmatic ABM (One-to-Many):</strong> Technologia zamiast manuału. Reklamy po IP firmy, dynamic content. 500+ firm. Skalowalne.</li>
                </ul>
              </div>

              {/* KPI */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
                  <Target className="w-7 h-7 text-yellow-400" />
                  Kluczowe KPI dla marketingu B2B
                </h2>
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                  Które metryki naprawdę się liczą? Nie vanity metrics jak Views czy Impressions, ale metryki biznesowe:
                </p>

                <div className="overflow-x-auto mb-6 rounded-lg border border-gray-700">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-800 border-b border-gray-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Metryka</th>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Opis</th>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Benchmark</th>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Narzędzie</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">MQL</td>
                        <td className="px-4 py-3 text-gray-300">Marketing Qualified Lead — lead o profilu docelowym</td>
                        <td className="px-4 py-3 text-gray-400">20-50 MQL/msc na $1k budżetu</td>
                        <td className="px-4 py-3 text-gray-400">HubSpot, Marketo</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">SQL</td>
                        <td className="px-4 py-3 text-gray-300">Sales Qualified Lead — lead zatwierdzony przez sales jako real prospect</td>
                        <td className="px-4 py-3 text-gray-400">10-30% konwersji z MQL</td>
                        <td className="px-4 py-3 text-gray-400">CRM (Salesforce, HubSpot)</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">CAC</td>
                        <td className="px-4 py-3 text-gray-300">Koszt pozyskania klienta (cały budżet / klienci)</td>
                        <td className="px-4 py-3 text-gray-400">500-2000 zł na klienta</td>
                        <td className="px-4 py-3 text-gray-400">Własne arkusze, CRM</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">LTV:CAC Ratio</td>
                        <td className="px-4 py-3 text-gray-300">Lifetime value / CAC — rentowność klienta</td>
                        <td className="px-4 py-3 text-gray-400">3:1 - 5:1</td>
                        <td className="px-4 py-3 text-gray-400">Finance team</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">Win Rate</td>
                        <td className="px-4 py-3 text-gray-300">Procent szans wygranych / wszystkie szanse</td>
                        <td className="px-4 py-3 text-gray-400">20-40% w B2B</td>
                        <td className="px-4 py-3 text-gray-400">CRM analytics</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">Sales Cycle</td>
                        <td className="px-4 py-3 text-gray-300">Czas od MQL do zamknięcia (dni)</td>
                        <td className="px-4 py-3 text-gray-400">30-180 dni w B2B</td>
                        <td className="px-4 py-3 text-gray-400">CRM stage history</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">Pipeline Value</td>
                        <td className="px-4 py-3 text-gray-300">Całkowita wartość otwartych szans</td>
                        <td className="px-4 py-3 text-gray-400">5-10x przychodu rocznego</td>
                        <td className="px-4 py-3 text-gray-400">CRM, Tableau</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition">
                        <td className="px-4 py-3 font-semibold text-white">Churn Rate</td>
                        <td className="px-4 py-3 text-gray-300">Procent klientów, którzy odeszli</td>
                        <td className="px-4 py-3 text-gray-400">0-5% rocznie w SaaS B2B</td>
                        <td className="px-4 py-3 text-gray-400">Finance, CS analytics</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-300">
                  <strong>Najważniejsza metryka?</strong> Pipeline value i revenue. Wszystko inne to poprzednicy — MQL, SQL, win rate — zmierzają do tego, aby pipeline rosła i przychód rosła.
                </p>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Najczęściej zadawane pytania</h2>

                <div className="space-y-6">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 pb-6 last:border-b-0">
                      <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-8 mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Podsumowanie — Jak zbudować skuteczny marketing B2B</h2>
                <p className="text-gray-300 mb-4">
                  Marketing B2B to maraton, nie sprint. Sukces wymaga:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Strategii.</strong> Jasne ICP, buying committee, cykl sprzedażowy — dopiero potem kanały.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Contentu edukacyjnego.</strong> Whitepapers, case studies, blog — buduj autorytet przez miesiące.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>LinkedIn Ads + Email.</strong> To fundament. Inne kanały to dopełnienie.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Alignment marketing-sales.</strong> Bez tego lejek przecieka — MQL nie trafią do sales, sales nie zatem się nimi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Pomiaru i optymalizacji.</strong> Śledź pipeline, CAC, win rate — nie vanity metrics.</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center py-8 border-t border-gray-700 mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">Chcesz strategii B2B dla Twojej firmy?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Fotz Studio opracuje strategię marketingową dostosowaną do Twojego ICP, budżetu i celów. Audyt marketingowy i konsultacja są bezpłatne.
                </p>
                <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                  <Link to="/kontakt">Umów bezpłatną konsultację</Link>
                </Button>
              </div>

              {/* Share */}
              <div className="flex items-center justify-between py-8 border-t border-gray-700 mt-8">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">Udostępnij artykuł:</span>
                  <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-800">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-800">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-gray-800 border-t border-gray-700">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Powiązane usługi</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/performance-marketing/linkedin-ads" className="group p-6 rounded-lg border border-gray-700 hover:border-yellow-400 bg-gray-900 transition-all">
                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 mb-2">LinkedIn Ads</h3>
                <p className="text-gray-400 text-sm">Kampanie B2B na LinkedIn — targetowanie decydentów, lead generation, brand awareness</p>
              </Link>
              <Link to="/content-marketing/strategia" className="group p-6 rounded-lg border border-gray-700 hover:border-yellow-400 bg-gray-900 transition-all">
                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 mb-2">Content Marketing</h3>
                <p className="text-gray-400 text-sm">Blog, whitepapers, case studies — budowanie autorytetu i lead generation poprzez edukację</p>
              </Link>
              <Link to="/seo/pozycjonowanie" className="group p-6 rounded-lg border border-gray-700 hover:border-yellow-400 bg-gray-900 transition-all">
                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 mb-2">SEO</h3>
                <p className="text-gray-400 text-sm">Pozycjonowanie na frazy z intencją biznesową — dlougoterminowe generowanie leadów</p>
              </Link>
              <Link to="/performance-marketing/google-ads" className="group p-6 rounded-lg border border-gray-700 hover:border-yellow-400 bg-gray-900 transition-all">
                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 mb-2">Google Ads</h3>
                <p className="text-gray-400 text-sm">Kampanie na intent — szybkie leady z wysokim potencjałem konwersji</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-gray-900">
        <RelatedArticles currentArticleId="marketing-b2b-strategia" />
      </section>
    </Layout>
  );
}
