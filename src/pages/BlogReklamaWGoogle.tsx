import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Target, DollarSign, BarChart3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const breadcrumbs = [
  { label: "Strona główna", url: "/" },
  { label: "Blog", url: "/blog" },
  { label: "Reklama w Google", url: "/blog/reklama-w-google" }
];

const faqItems = [
  {
    question: "Ile kosztuje reklama w Google Ads?",
    answer: "Nie ma stałej ceny — płacisz za kliknięcia (CPC — Cost Per Click). W Polsce CPC wahają się: 0.50–5 PLN (low-competitive), 5–20 PLN (medium), 20–100+ PLN (high-competitive). Search Ads to zwykle droższe niż Display. Budżet dziennie — od 10 PLN do kilkadziesiąt tysięcy. Minimalny budżet dla testów: 500 PLN/mies. Realistyczny dla wyników: 2000–5000 PLN/mies."
  },
  {
    question: "Czy mogę sam uruchomić kampanię Google Ads?",
    answer: "Tak, ale wymaga wiedzy. Musisz wiedzieć: set-up kampanii, keyword selection, bidding strategy, conversion tracking, quality score optimization. Błędy kosztują: źle wybrany keywords = wasted budget, brak conversion tracking = nie wiesz co działa, niska quality score = wysoki CPC. Pierwsza kampania: 2–3 godziny na setup + 1 godzinę dziennie na monitoring przez miesiąc. Agencja oszczędzi Ci czasu i błędów."
  },
  {
    question: "Jaki jest średni ROI z Google Ads?",
    answer: "Dla dobrze skonfigurowanych kampanii Search Ads — ROI 3–8x. Czyli jeśli inwestujesz 1000 PLN, zarabiasz 3000–8000 PLN przychodu. Display Ads zwykle mniej — 1–3x. Shopping Ads (e-commerce) — 2–5x. Performance Max — 2–4x. ROI zależy od: branży (e-commerce ma lepszy ROI niż lead gen), jakości landing page'a, kompetycji keywords, budżetu (więcszy budżet = lepsze optymalizacje)."
  },
  {
    question: "Czy gwarancja 'pierwsza strona Google' w Google Ads jest możliwa?",
    answer: "Nie dla organicznych wyników (SEO). Ale dla Google Ads — tak, zawsze będziesz wyświetlony na pierwszej stronie (top 4 pozycje) jeśli bid jest wystarczająco wysoki. Jednak 'pierwszy' keyword może kosztować 50–500 PLN za klik dla competitive keywords. Lepiej: targetuj long-tail keywords (5–10 PLN/klik), buduj quality score, optimizuj landing page. Gwarancje pozycji za tanio to scam — uważaj na takie oferenty."
  },
  {
    question: "Czy warto zlecić Google Ads agencji czy robić sam?",
    answer: "Zależy od Twojego czasu i wiedzy. Jeśli: (1) masz poniżej 500 PLN/mies budżetu, (2) masz czas 5–10 godzin/mies na learning, (3) produkty/usługi proste — możesz sam. Jeśli: (1) masz powyżej 2000 PLN/mies budżetu, (2) mało czasu, (3) produkty/usługi skomplikowane, (4) chcesz ROI 3–8x — agencja jest lepszym inwestycją. Agencja zwłaszcza opłaca się dla e-commerce — struktura kampanii, negative keywords, bidding — to wymaga doświadczenia."
  },
  {
    question: "Jakie są najczęstsze błędy w Google Ads?",
    answer: "(1) Brak conversion tracking — nie wiesz co się konwertuje. (2) Broad match — każde słowo klucz to wiele wyników, marnujesz budżet. (3) Brak negative keywords — pokazujesz się dla irrelevant queries. (4) Niska Quality Score — wyższy CPC, gorsza pozycja. (5) Źle skonfigurowana landing page — bounce rate wysoki, conversions brak. (6) Brak A/B testów — nie optymalizujesz. (7) Ignorowanie mobile — 60%+ traffic to mobile, ale landing page nie optimized. (8) Set-it-and-forget-it — algorytm Google się zmienia, musisz monitorować."
  },
  {
    question: "Search Ads vs Display vs Shopping — którą wybrać?",
    answer: "(1) Search Ads — ktoś już szuka (high-intent). Best ROI, najdroższy CPC. Dla produktów/usług z demand. (2) Display Ads — visual banners across web. Lower cost, ale lower intent. Best dla brand awareness. (3) Shopping Ads — dla e-commerce. Pokazuje ceny, zdjęcia produktu. Best CTR dla e-commerce. (4) YouTube Ads — video ads. Best dla brand awareness i reach. (5) Performance Max — automation across channels. Best dla large budgets. Mieszanka: Search (conversions) + Shopping (e-commerce) + Display (retargeting) = best results."
  }
];

export default function BlogReklamaWGoogle() {
  const publicationDate = "2025-04-11";
  const modifiedDate = "2025-04-11";

  return (
    <>
      <SEOHead
        title="Reklama w Google 2025 — jak zacząć i ile kosztuje? Poradnik | Fotz"
        description="Reklama w Google 2025. Poradnik: Google Ads, Search, Display, Shopping, YouTube, ile kosztuje, CPC, budżet, samodzielnie czy agencja, błędy."
        canonical="https://fotz.pl/blog/reklama-w-google"
        keywords="reklama w Google, Google Ads, Search Ads, Display Ads, Shopping Ads, ile kosztuje, poradnik"
      />

      <ArticleSchema
        headline="Reklama w Google 2025 — jak zacząć i ile kosztuje? Poradnik"
        description="Komprehensywny poradnik o Google Ads w 2025. Wszystko co musisz wiedzieć: rodzaje reklam, jak działa, ile kosztuje, CPC, budżet, jak samodzielnie uruchomić, kiedy zlecić agencji."
        author="Fotz"
        datePublished={publicationDate}
        dateModified={modifiedDate}
        image="https://fotz.pl/images/google-ads.jpg"
      />

      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        {/* Hero Section */}
        <section className="min-h-[500px] bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center py-20">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Reklama w Google 2025 — jak zacząć i ile kosztuje? Poradnik
              </h1>
              <p className="text-xl sm:text-2xl mb-4 text-blue-100">
                700 osób miesięcznie szuka <strong>"reklama w google"</strong> w Polsce. Czy chcesz wiedzieć czym są Google Ads i czy mogą Ci zarobić?
              </p>
              <p className="text-lg text-blue-200 mb-8">
                Kompletny poradnik: od zera do pierwszej kampanii. Co to jest Google Ads, rodzaje reklam, ile kosztuje, budżety, CPC, conversions, kiedy robić sam, kiedy zlecić agencji. Realistyczne przykłady i błędy do unikania.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                  asChild
                >
                  <Link to="#contact">
                    Chcesz reklamować się w Google?
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700"
                >
                  Czytaj dalej
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <FadeInView>
          <section className="py-20 bg-white">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Co to jest reklama w Google? */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Co to jest reklama w Google?</h2>

                <div className="bg-blue-50 p-8 rounded-lg mb-8 border-l-4 border-blue-600">
                  <p className="text-gray-800 font-semibold">
                    Google Ads to platforma reklamowa Google. Płacisz tylko za kliknięcia (CPC). Twoja reklama pojawia się: (1) w wynikach wyszukiwania Google, (2) na stronach innych serwisów (Google Display Network), (3) na YouTube, (4) w Gmail, (5) w mapach Google. Jest to najszybszy sposób na traffic — w przeciwieństwie do SEO (3–6 mies), Google Ads działa w ciągu dni.
                  </p>
                </div>

                <p>
                  Zanim zobaczysz się w Google Ads musisz:
                </p>
                <ul className="space-y-2">
                  <li>Wybrać typ kampanii (Search, Display, Shopping, Video, Performance Max)</li>
                  <li>Wybrać keywords (Search Ads) lub audience (Display Ads)</li>
                  <li>Napisać copy reklamy (ad text)</li>
                  <li>Ustawić budget dziennie</li>
                  <li>Ustawić bid strategy (ile chcesz płacić za klik?)</li>
                  <li>Setup conversion tracking (aby wiedzieć co się konwertuje)</li>
                </ul>
              </article>

              {/* Jak działa Google Ads */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Jak działa Google Ads?</h2>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Aukcja słów kluczowych (Search Ads)</h3>
                <p>
                  Gdy ktoś wpisuje w Google "szkoła tańca Warszawa", Google uruchamia aukcję:
                </p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Wszyscy reklamodawcy z kampanią "szkoła tańca Warszawa" wchodzą do aukcji</li>
                  <li>Każdy reklamodawca ma bid (stawkę) — ile max chce zapłacić za klik</li>
                  <li>Google wybiera zwycięzców na podstawie: bid + Quality Score (jakość landing page, copy, CTR)</li>
                  <li>Zwycięzca zapłaca drugą najwyższą stawkę + 0.01 PLN (auction mechanics)</li>
                </ol>

                <div className="bg-gray-50 p-6 rounded-lg my-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Przykład aukcji:</h4>
                  <table className="w-full text-sm text-gray-700">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Reklamodawca</th>
                        <th className="text-right p-2">Bid</th>
                        <th className="text-right p-2">Quality Score</th>
                        <th className="text-right p-2">Ad Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-green-50">
                        <td className="p-2">Szkoła A (Ty)</td>
                        <td className="text-right p-2">10 PLN</td>
                        <td className="text-right p-2">9/10</td>
                        <td className="text-right p-2">90 (WINNER)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Szkoła B</td>
                        <td className="text-right p-2">15 PLN</td>
                        <td className="text-right p-2">5/10</td>
                        <td className="text-right p-2">75</td>
                      </tr>
                      <tr>
                        <td className="p-2">Szkoła C</td>
                        <td className="text-right p-2">8 PLN</td>
                        <td className="text-right p-2">8/10</td>
                        <td className="text-right p-2">64</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-gray-700 mt-4 text-sm">Ty wygrywasz! Płacisz jednak 7.51 PLN (druga stawka + 0.01). Nie płacisz pełny bid jeśli Quality Score jest wyższy niż konkurencja.</p>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Quality Score</h3>
                <p>
                  Quality Score (1–10) determinuje CPC i pozycję. Google ocenia:
                </p>
                <ul className="space-y-2">
                  <li><strong>CTR (Click-Through Rate):</strong> Ile osób klika Twoją reklamę vs tych co widzą</li>
                  <li><strong>Ad relevance:</strong> Czy reklama matches keyword i user intent</li>
                  <li><strong>Landing page quality:</strong> Czy landing page jest dobra, szybka, relevant</li>
                </ul>

                <p className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-600 mt-6">
                  <strong>Pro tip:</strong> Quality Score 7–10 to norma. Jeśli masz 3–4, Twój CPC jest 2–3x wyższy. Zamiast płacić 10 PLN, płacisz 20–30 PLN za taki sam klik. Inwestuj w dobry landing page i copywriting.
                </p>
              </article>

              {/* Ile kosztuje */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Ile kosztuje reklama w Google?</h2>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cost Per Click (CPC)</h3>
                <p>
                  W Polsce, średnie CPC:
                </p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  className="grid md:grid-cols-2 gap-6 my-6"
                >
                  {[
                    {
                      industry: "E-commerce (produkty tanio)",
                      price: "0.50–2 PLN",
                      note: "Duża konkurencja, ale marża wysoka"
                    },
                    {
                      industry: "E-commerce (produkty drogo)",
                      price: "5–20 PLN",
                      note: "Wysoka wartość zamówienia"
                    },
                    {
                      industry: "Usługi (fryzjer, nalepki)",
                      price: "2–8 PLN",
                      note: "Medium konkurencja"
                    },
                    {
                      industry: "B2B (software, konsultacje)",
                      price: "10–50 PLN",
                      note: "High-value leads"
                    },
                    {
                      industry: "YMYL (finanse, prawo, zdrowie)",
                      price: "20–200+ PLN",
                      note: "Bardzo drogo — high-stakes decisions"
                    },
                    {
                      industry: "Display Ads (brand awareness)",
                      price: "0.10–2 PLN",
                      note: "Najtańsze, ale conversions niższe"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h5 className="font-semibold text-gray-900 mb-1">{item.industry}</h5>
                      <p className="text-blue-700 font-bold text-lg mb-2">{item.price}</p>
                      <p className="text-gray-700 text-sm">{item.note}</p>
                    </div>
                  ))}
                </motion.div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Budżet dziennie i miesięcznie</h3>
                <p>
                  Nie ma minimumu — możesz wydać 10 PLN dziennie (300 PLN/mies). Jednak dla realnych rezultatów:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-6">
                  <ul className="space-y-2 text-gray-800">
                    <li><strong>Testing (first 2–4 weeks):</strong> 500–1500 PLN/mies. Testujesz keywords, copy, landing page.</li>
                    <li><strong>Optimization (month 2–3):</strong> 1500–3000 PLN/mies. Widzisz które kampanie działają, skalujesz.</li>
                    <li><strong>Scaling (month 4+):</strong> 3000–10000+ PLN/mies. Jeśli ROI jest dobry (3–8x), możesz skalować.</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Realny przykład kosztów</h3>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">E-commerce: sprzedaż produktów za 100 PLN</h4>
                  <ul className="space-y-2 text-gray-800">
                    <li>CPC: 2 PLN (e-commerce, low-cost products)</li>
                    <li>Conversion rate: 2% (dla e-commerce OK)</li>
                    <li>Budżet dziennie: 500 PLN = ~250 kliknięć dziennie</li>
                    <li>Konwersje dziennie: 250 × 2% = 5 zamówień</li>
                    <li>Przychód dziennie: 5 × 100 PLN = 500 PLN</li>
                    <li>Marża (40%): 200 PLN</li>
                    <li>Koszt Ads: 500 PLN</li>
                    <li><strong>Zysk/Strata: -300 PLN (STRATA)</strong></li>
                  </ul>
                  <p className="text-gray-700 mt-4 text-sm">Problem: marża (40%) nie pokrywa kosztów Ads (500 PLN). Rozwiązanie: (1) zwiększ marża (wyższa cena), (2) zmniejsz CPC (lepszy Quality Score, mniej competitive keywords), (3) zwiększ conversion rate (lepszy landing page).</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Ulepszona wersja (profitowa):</h4>
                  <ul className="space-y-2 text-gray-800">
                    <li>Cena produktu: 150 PLN (zamiast 100)</li>
                    <li>Marża: 60 PLN (zamiast 40)</li>
                    <li>Konwersje dziennie: 5 zamówień</li>
                    <li>Przychód dziennie: 750 PLN, Marża: 300 PLN</li>
                    <li>Koszt Ads: 500 PLN</li>
                    <li><strong>Zysk/Strata: -200 PLN (ainda straty, ale lepiej)</strong></li>
                  </ul>
                  <p className="text-gray-700 mt-4 text-sm">Wciąż stratnie? Pytanie: ile stron wykon musisz sprzedać by kampania była profitowa? Odpowiedź: zawsze musisz inwestować 30–90 dni zanim zobaczysz profit. To normalne w Google Ads.</p>
                </div>
              </article>

              {/* Rodzaje reklam */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Rodzaje reklam Google</h2>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  className="space-y-6"
                >
                  {[
                    {
                      name: "Search Ads",
                      description: "Tekst reklamy w wynikach wyszukiwania Google",
                      cpc: "2–50 PLN",
                      roi: "3–8x",
                      best: "Immediate intent — ktoś już szuka"
                    },
                    {
                      name: "Display Ads",
                      description: "Banery graficzne na 2M+ stronach partnerskich",
                      cpc: "0.10–2 PLN",
                      roi: "1–3x",
                      best: "Brand awareness, retargeting"
                    },
                    {
                      name: "Shopping Ads",
                      description: "Produkt cards w wynikach (cena, zdjęcie, ocena)",
                      cpc: "3–15 PLN",
                      roi: "2–5x",
                      best: "E-commerce, instant product showcase"
                    },
                    {
                      name: "YouTube Ads",
                      description: "Reklamy video przed/podczas/po filmach",
                      cpc: "0.25–5 PLN",
                      roi: "1–4x",
                      best: "Brand awareness, visual storytelling"
                    },
                    {
                      name: "Gmail Ads",
                      description: "Reklamy w Gmailowych inboxach (collapsed view)",
                      cpc: "0.50–3 PLN",
                      roi: "1–2x",
                      best: "Retargeting, email subscribers"
                    },
                    {
                      name: "Performance Max",
                      description: "Automation — Google wybiera beste placements siebie",
                      cpc: "Variable",
                      roi: "2–4x",
                      best: "Large budgets, trust algorithm"
                    }
                  ].map((adType, idx) => (
                    <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{adType.name}</h4>
                      <p className="text-gray-700 mb-4">{adType.description}</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Średni CPC</p>
                          <p className="font-semibold text-blue-700">{adType.cpc}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Średni ROI</p>
                          <p className="font-semibold text-green-700">{adType.roi}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Best for</p>
                          <p className="font-semibold text-gray-900">{adType.best}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </article>

              {/* Jak samodzielnie */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Jak samodzielnie uruchomić kampanię Google Ads?</h2>

                <ol className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Utwórz Google Ads account",
                      desc: "Wejdź na ads.google.com, zaloguj się Google account, utwórz nowe konto. Musisz mieć billing method (karta, rachunek bankowy)."
                    },
                    {
                      step: 2,
                      title: "Utwórz konwersję tracking",
                      desc: "Setup Google Tag Manager (GTM) lub Google Analytics (GA4). Musisz wiedzieć: ile kliknięć = ile konwersji (sprzedaż, form submission, phone call). Bez tego — nie wiesz co działa."
                    },
                    {
                      step: 3,
                      title: "Keyword research",
                      desc: "Google Keyword Planner (free) — sprawdzaj search volume i competition. Wybierz 20–50 keywords. Unikaj super competitive (np. 'ubezpieczenie') — będą drogo kosztować."
                    },
                    {
                      step: 4,
                      title: "Utwórz kampanię Search",
                      desc: "Wybierz typ: Search, Device (desktop/mobile), Budget (start z 500 PLN/mies), Bid strategy (start z 'Maximize conversions')."
                    },
                    {
                      step: 5,
                      title: "Napisz reklamy",
                      desc: "3 headlines (30 znaków), 2 descriptions (90 znaków), Final URL. Bądź specific — 'Kurs tańca dla poczyntujących w Warszawie' lepiej niż 'Kurs tańca'."
                    },
                    {
                      step: 6,
                      title: "Setup landing page",
                      desc: "Klik w reklamie → landing page. Landing page MUSI byćrelevant. Nie kieruj do homepage'a — kieruj do specific page (np. 'Kursy dla Poczyntujących')."
                    },
                    {
                      step: 7,
                      title: "Monitor i optimize",
                      desc: "Pierwszy miesiąc: codziennie sprawdzaj impressions, clicks, conversion rate. Pauzuj keywords z high cost/no conversions. A/B test headlines i descriptions."
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </ol>
              </article>

              {/* Kiedy zlecić agencji */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Kiedy warto zlecić Google Ads agencji?</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-gray-900 mb-4">✓ Rób sam jeśli:</h4>
                    <ul className="space-y-2 text-gray-800">
                      <li>Budget poniżej 500 PLN/mies</li>
                      <li>Masz czas 5–10 godzin/mies</li>
                      <li>Produkty/usługi proste</li>
                      <li>Branża low-CPC (e-commerce tanio)</li>
                      <li>Masz cierpliwość do learning curve</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-gray-900 mb-4">✗ Zlecaj agencji jeśli:</h4>
                    <ul className="space-y-2 text-gray-800">
                      <li>Budget powyżej 2000 PLN/mies</li>
                      <li>Mało czasu (poniżej 5 godzin/mies)</li>
                      <li>Produkty/usługi skomplikowane</li>
                      <li>Branża high-CPC (YMYL, B2B)</li>
                      <li>Chcesz ROI 3–8x (gwarantowany profesjonalny approach)</li>
                    </ul>
                  </div>
                </div>

                <p className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
                  <strong>Złota zasada:</strong> Agencja opłaca się gdy: (budżet × ROI agencji) minus (koszt agencji) jest większy niż (budżet × Twój ROI). Jeśli Ty osiągasz ROI 1x (strata), a agencja osiąga 3x (zysk 200%), to opłaca się zlecić.
                </p>
              </article>

              {/* FAQ */}
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Najczęstsze pytania o Google Ads</h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-200 rounded-lg px-6 data-[state=open]:bg-blue-50">
                      <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <FAQSchema
                  items={faqItems.map(item => ({
                    question: item.question,
                    answer: item.answer
                  }))}
                />
              </article>
            </div>
          </section>
        </FadeInView>

        {/* CTA */}
        <FadeInView>
          <section className="py-16 bg-blue-50 border-t border-b border-blue-200">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Czy jesteś gotów startować z Google Ads?</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Jeśli masz budżet powyżej 2000 PLN/mies i chcesz profesjonalnego podejścia — chętnie pomożemy. Setup kampanii, optimization, monitoring, raportowanie — wszystko razem.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  asChild
                >
                  <Link to="#contact">
                    Zaplanuj bezpłatną konsultację Google Ads
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </FadeInView>

        {/* Contact Section */}
        <ContactSection
          heading="Chcesz reklamować się w Google?"
          subheading="Bezpłatna analiza Twojego konta Google Ads lub stworzenie nowej kampanii."
        />
      </Layout>
    </>
  );
}
