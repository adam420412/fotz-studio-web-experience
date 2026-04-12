import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, AlertCircle, Check } from "lucide-react";
import { motion } from "framer-motion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Ile dokładnie kosztuje marketing online dla małej firmy?",
    answer: "Mała firma powinna przeznaczyć 2000-5000 zł miesięcznie na marketing internetowy. W ten budżet mogą wejść: SEO (1000-2000 zł), Google Ads (500-1500 zł), social media marketing (500-1000 zł) i email marketing (100-300 zł). Kwota zależy od branży, konkurencji i celów biznesowych."
  },
  {
    question: "Czy mogę robić marketing online za darmo?",
    answer: "Tak - organic social media, własny blog i email marketing mogą być darmowe, jeśli robisz to samodzielnie. Jednak wymaga to czasu (20-40 godzin/miesiąc) i wiedzy. Płatne kanały (Google Ads, Social Media Ads) wymuszają budżet. Rekomendujemy hybrydowe podejście: 50% organiczne + 50% płatne."
  },
  {
    question: "Jaki ROI mogę oczekiwać od marketingu internetowego?",
    answer: "Średni ROI marketingu online wynosi 200-400% w pierwszym roku (tj. 1 zł wydanych = 2-4 zł przychodu). Niektóre kanały jak Google Ads mogą dać 500%+ ROI. SEO i content marketing działają wolniej ale dają lepszy ROI na długiej mecie (6-12 miesięcy). Mierz wyniki i optymalizuj stale."
  },
  {
    question: "Czy agencja marketingowa jest droga czy opłacalna?",
    answer: "Agencja kosztuje 3000-15000+ zł/miesiąc, ale oferuje eksperymentów, strategię i skalę. Sam marketing może być tańszy ale mniej efektywny. Agencja zwraca się gdy: osiąga wyższy ROI, daje czas na biznes, wspiera wzrost. Sprawdź referendy i kalkuluje ROI przed podpisaniem umowy."
  },
  {
    question: "Ile czasu potrzebuje marketing online aby zadziałać?",
    answer: "Google Ads działają natychmiast (dni), Social Ads w 1-2 tygodnie. SEO i content marketing potrzebują 3-6 miesięcy na pierwsze efekty, 6-12 miesięcy na rezultaty. Email marketing zaczyna działać po 2-3 miesiącach budowania listy. Wszystkie kanały wymagają testowania i optymalizacji."
  },
  {
    question: "Czy powinno budżet marketingowy rosnąć wraz z przychodem?",
    answer: "Tak - typowe benchmarki to 5-10% przychodu rocznie na marketing (dla startupów 15-20%, dla dużych firm 2-5%). Jeśli zarabiasz 50 000 zł/miesiąc, budżet marketingowy powinien wynosić 2500-5000 zł. Skaluj wydatki gdy widzisz pozytywny ROI."
  },
  {
    question: "Które kanały marketingu online mają najniższy koszt?",
    answer: "Najdochodniejsze kanały z niskim kosztem: email marketing (50-300 zł/miesiąc), organic social media (koszt czasu), SEO (1500-5000 zł/miesiąc ale długoterminowy). Kanały wymagające budżetu: Google Ads (1000+), Social Ads (500+), Video marketing (1000+). Start z kanałami low-cost i skaluj co działa."
  },
  {
    question: "Co robić jeśli nie mam budżetu na agencję marketingową?",
    answer: "Zacznij z kanałami darmowymi: blog własny, content na LinkedIn/Facebook, email lista, YouTube. Naucz się SEO (Ahrefs, SEMrush darmowe wersje). Skup się na jednym kanale - zrób go doskonale. Kiedy zobaczysz wyniki, reinwestuj przychód w płatne kanały. Konsultacja z agencją (200-500 zł/h) może być dobrym start."
  }
];

export function BlogKosztMarketinguInternetowego() {
  const breadcrumbItems = [
    { name: "Strona główna", url: "https://fotz.pl" },
    { name: "Blog", url: "https://fotz.pl/blog" },
    { name: "Koszt marketingu internetowego", url: "https://fotz.pl/blog/koszt-marketingu-internetowego" }
  ];

  return (
    <>
      <SEOHead
        title="Ile kosztuje marketing internetowy? Kompleksowy cennik 2025"
        description="Odkryj realny koszt marketingu online w Polsce. Ceny poszczególnych kanałów, budżety dla firm, modele rozliczenia i jak oszczędzać na marketingu internetowym."
        canonical="https://fotz.pl/blog/koszt-marketingu-internetowego"
        ogType="article"
        keywords="koszt marketingu internetowego, ile kosztuje marketing online, cena marketing digital, budżet na marketing"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ile kosztuje marketing internetowy? Kompleksowy cennik 2025",
            "description": "Pełny poradnik do kosztów marketingu internetowego - ceny kanałów, budżety dla firm, modele rozliczania, czynniki wpływające na koszt.",
            "author": {
              "@type": "Organization",
              "name": "Fotz Studio"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Fotz Studio",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fotz.pl/logo-fotz.jpg"
              }
            },
            "datePublished": "2025-04-12",
            "dateModified": "2025-04-12"
          }
        ]}
      />

      <ArticleSchema
        title="Ile kosztuje marketing internetowy? Kompleksowy cennik 2025"
        description="Pełny poradnik do kosztów marketingu online - ceny kanałów, budżety wg wielkości firmy, strategie oszczędzania i ROI różnych narzędzi."
        url="https://fotz.pl/blog/koszt-marketingu-internetowego"
        datePublished="2025-04-12"
        dateModified="2025-04-12"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Layout>
        {/* Breadcrumb */}
        <section className="pt-32 pb-4 bg-background">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Koszt marketingu internetowego</span>
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
                  Marketing internetowy
                </span>

                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Ile kosztuje marketing internetowy? Kompleksowy cennik 2025
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Zespół Fotz
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    12 kwietnia 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    25 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1460925895917-adf4e565e6c1?q=80&w=2015"
                    alt="Koszt marketingu internetowego i cennik usług digital marketing"
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
                  Jaki jest realny koszt marketingu internetowego w Polsce? Ile powinna wydawać mikrofirma, a ile duża korporacja? W tym kompletnym poradniku poznasz ceny wszystkich kanałów digital marketingu, budżety dla różnych typów biznesów, modele rozliczania i jak maksymalizować ROI inwestycji marketingowej.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Koszty poszczególnych kanałów marketingu online
                </h2>

                <p className="text-muted-foreground mb-6">
                  Każdy kanał marketingu online wymaga innego budżetu i generuje inny zwrot z inwestycji. Poniżej znajduje się szczegółowy przegląd cen dla najpopularniejszych kanałów marketingu cyfrowego.
                </p>

                <div className="overflow-x-auto mb-8 rounded-lg border border-gray-700">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800 border-b border-gray-700">
                        <th className="px-6 py-4 text-left font-semibold">Kanał</th>
                        <th className="px-6 py-4 text-left font-semibold">Koszt miesięczny (min)</th>
                        <th className="px-6 py-4 text-left font-semibold">Koszt miesięczny (opt)</th>
                        <th className="px-6 py-4 text-left font-semibold">Co obejmuje</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">SEO / Pozycjonowanie</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">1 500 zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">5 000 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Audyt, optymalizacja on-page, technical SEO, content, link building, raporty</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Google Ads (zarządzanie)</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">1 000 zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">3 000 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Budżet na kliknięcia + prowadzenie kampanii, optymalizacja, raporty</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Social Media Ads</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">800 zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">2 500 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Budżet na reklamy (Facebook, Instagram, TikTok) + zarządzanie kampaniami</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Content marketing</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">1 000 zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">3 500 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">2-4 artykuły blog / miesiąc + copywriting + edycja + publikacja</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Email marketing</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">100 zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">500 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Platforma + copywriting + segmentacja + automatyzacja</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Social media organiczne</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">0 zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">1 500 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Tworzenie contentu, planowanie, publikacja (może być własna praca)</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Video marketing</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">1 000 zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">4 000 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Produkcja filmów + edycja + publikacja (YouTube, TikTok)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="my-8 p-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                  <div className="flex gap-4">
                    <AlertCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <strong>Ważne:</strong> Powyższe koszty to tylko prowadzenie kanału (strategie, optymalizacja, raporty). W Google Ads i Social Media Ads należy doliczyć budżet na same kliknięcia/wyświetlenia (może być 2000-10 000 zł/miesiąc zależnie od branży).
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Jak ustalić budżet marketingowy?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Nie ma uniwersalnej recepty, ale istnieje kilka sprawdzonych metod ustalenia budżetu marketingowego dla Twojej firmy.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Zasada procentu przychodu</h3>
                <p className="text-muted-foreground mb-6">
                  To najpopularniejsza metoda. Przeznacz na marketing ustaloną część przychodu:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li><strong>Startupy / nowe firmy:</strong> 15-20% przychodu</li>
                  <li><strong>Małe firmy (do 500k zł/rok):</strong> 10-15% przychodu</li>
                  <li><strong>Średnie firmy (500k-5M zł/rok):</strong> 7-10% przychodu</li>
                  <li><strong>Duże firmy (5M+):</strong> 3-7% przychodu</li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  <strong>Przykład:</strong> Jeśli zarabiasz 100 000 zł rocznie (8 333 zł/miesiąc), budżet marketingowy powinien wynosić 10 000-15 000 zł rocznie (833-1 250 zł/miesiąc).
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Benchmarki branżowe</h3>
                <p className="text-muted-foreground mb-6">
                  Każda branża ma inne oczekiwania dotyczące wydatków marketingowych:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li><strong>E-commerce:</strong> 10-15% przychodu (wysoka konkurencja)</li>
                  <li><strong>SaaS / Oprogramowanie:</strong> 12-20% przychodu</li>
                  <li><strong>Usługi profesjonalne:</strong> 5-10% przychodu</li>
                  <li><strong>Wytwórnia / produkcja:</strong> 2-5% przychodu</li>
                  <li><strong>Agencje kreatywne:</strong> 8-15% przychodu</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Budżet marketingowy wg wielkości firmy
                </h2>

                <p className="text-muted-foreground mb-6">
                  Poniżej praktyczne przewodniki budżetu dla różnych kategorii firm w Polsce.
                </p>

                <div className="overflow-x-auto mb-8 rounded-lg border border-gray-700">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800 border-b border-gray-700">
                        <th className="px-6 py-4 text-left font-semibold">Typ firmy</th>
                        <th className="px-6 py-4 text-left font-semibold">Koszt miesięczny</th>
                        <th className="px-6 py-4 text-left font-semibold">Roczny budżet</th>
                        <th className="px-6 py-4 text-left font-semibold">Kanały priorytetowe</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Mikrofirma (1-5 pracowników)</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">1 500 - 3 000 zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">18 000 - 36 000 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Social media organiczne, Google Ads, email</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Mała firma (5-20 pracowników)</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">3 000 - 8 000 zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">36 000 - 96 000 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">SEO, Google Ads, Social Media Ads, content</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Średnia firma (20-100 pracowników)</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">8 000 - 25 000 zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">96 000 - 300 000 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Pełny marketing mix - wszystkie kanały</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Duża firma (100+ pracowników)</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">25 000 - 100 000+ zł</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">300 000 - 1 000 000+ zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Dedykowany zespół, all channels, PR, research</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Agencja marketingowa vs własny dział
                </h2>

                <p className="text-muted-foreground mb-6">
                  Jednym z największych wydatków marketingowych jest decyzja: czy pracować z agencją czy zatrudnić własny zespół. Porównanie kosztów:
                </p>

                <div className="overflow-x-auto mb-8 rounded-lg border border-gray-700">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800 border-b border-gray-700">
                        <th className="px-6 py-4 text-left font-semibold">Aspekt</th>
                        <th className="px-6 py-4 text-left font-semibold">Agencja</th>
                        <th className="px-6 py-4 text-left font-semibold">Własny dział</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Koszt miesięczny</td>
                        <td className="px-6 py-4 text-muted-foreground">3 000 - 15 000 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">8 000 - 30 000 zł (wynagrodzenia + narzędzia)</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Jesteś opuszczony kiedy</td>
                        <td className="px-6 py-4 text-muted-foreground">Nigdy - jest cały zespół</td>
                        <td className="px-6 py-4 text-muted-foreground">Pracownik bierze urlop/zwolni się</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Doświadczenie</td>
                        <td className="px-6 py-4 text-muted-foreground">Wysoki poziom, wiele specjalizacji</td>
                        <td className="px-6 py-4 text-muted-foreground">Zależny od pracownika</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Szybkość działania</td>
                        <td className="px-6 py-4 text-muted-foreground">Szybka (już mają procesy)</td>
                        <td className="px-6 py-4 text-muted-foreground">Powolna (budowanie od zera)</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Narzędzia i oprogramowanie</td>
                        <td className="px-6 py-4 text-muted-foreground">Zalogowani w najlepszych narzędziach</td>
                        <td className="px-6 py-4 text-muted-foreground">Musisz same kupować licencje</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Kontrola</td>
                        <td className="px-6 py-4 text-muted-foreground">Mniejsza (agencja decyduje)</td>
                        <td className="px-6 py-4 text-muted-foreground">Pełna kontrola</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Idealny dla</td>
                        <td className="px-6 py-4 text-muted-foreground">Firmy szukające szybkich wyników</td>
                        <td className="px-6 py-4 text-muted-foreground">Firmy z dużym budżetem</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Przychód agencji vs koszt dla Ciebie</h3>
                <p className="text-muted-foreground mb-6">
                  Agencja jest opłacalna gdy jej koszt (3 000 - 15 000 zł) generuje wyższy przychód niż sama inwestycja. Przykład: Google Ads za 5 000 zł budżetu z 3 000 zł opłaty za agencję = 8 000 zł kosztów. Jeśli generuje 40 000 zł przychodu, ROI wynosi 400% - bardzo dochodowe.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Najczęściej zadawane pytania o koszt marketingu
                </h2>

                <div className="space-y-4 mt-8">
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg px-6 data-[state=open]:bg-gray-800/30">
                        <AccordionTrigger className="hover:no-underline py-4">
                          <span className="text-left font-semibold text-foreground">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <FAQSchema items={faqItems} />

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Kluczowe wnioski o kosztach marketingu
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <Check className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-semibold mb-1">Zacznij małym budżetem</p>
                      <p className="text-muted-foreground">Nie musisz wydawać 15 000 zł od razu. Start z 2 000-3 000 zł/miesiąc, testuj kanały i skaluj co działa.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-semibold mb-1">Mierz ROI każdego kanału</p>
                      <p className="text-muted-foreground">Nie wszystkie kanały działają dla każdego biznesu. Śledź co generuje przychód i inwestuj tam gdzie jest najwyższy zwrot.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-semibold mb-1">Combine organic plus paid</p>
                      <p className="text-muted-foreground">Nie wybieraj między SEO a Google Ads. Hybrydowe podejście (50% organic + 50% paid) daje najlepsze rezultaty.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-semibold mb-1">Daj czas kanałom działać</p>
                      <p className="text-muted-foreground">Paid ads działają szybko (dni), SEO powoli (miesiące). Zanim ocenisz sukces, daj każdemu kanałowi przynajmniej 3 miesiące.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-semibold mb-1">Agencja vs DIY - wybierz mądrze</p>
                      <p className="text-muted-foreground">Agencja jest droga ale doświadczona. DIY jest tańsze ale wymaga Twojego czasu. Hybrydowe podejście (częściowe zlecanie) może być kompromisem.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Gotów to inwestować w marketing?
                </h2>

                <p className="text-muted-foreground mb-8">
                  Koszt marketingu internetowego to nie wydatek - to inwestycja. Profesjonalny marketing online powinien generować 200-400% zwrotu w pierwszym roku. Jeśli wydajesz 5 000 zł/miesiąc, powinnaś zarabiać 10 000-20 000 zł dodatkowego przychodu co miesiąc.
                </p>

                <p className="text-muted-foreground mb-8">
                  Zespół Fotz Studio pomaga firmom z całej Polski budować skuteczne kampanie marketingowe. Od SEO, przez Google Ads, po content marketing - doradzamy jak zoptymalizować każdy budżet. Umów się na bezpłatną konsultację i dowiedz się, ile powinna kosztować kampania dla Twojego biznesu.
                </p>
              </motion.div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded-2xl">
                <h3 className="text-2xl font-heading font-bold mb-4">Potrzebujesz pomocy w budżetowaniu marketingu?</h3>
                <p className="text-muted-foreground mb-6">
                  Nasz zespół przeanalizuje Twoją sytuację i zaproponuje efektywny budżet dla Twojego biznesu. Bezpłatna konsultacja - bez zobowiązań.
                </p>
                <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                  Zarezerwuj konsultację
                </Button>
              </div>
            </div>
          </div>
        </article>

        <ContactSection />
      </Layout>
    </>
  );
}
