import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "Czym copywriting SEO różni się od zwykłego copywritingu?",
    answer: "Copywriting SEO to pisanie tekstów z myślą o algorytmach wyszukiwarek i użytkownikach jednocześnie. Zwykły copywriting skupia się tylko na konwersji, a SEO copywriting dodatkowo optymalizuje tekst pod wyszukiwarki poprzez słowa kluczowe, strukturę H1-H6 i czytelność. Dobry SEO copywriting to balans między rankingiem a konwersją."
  },
  {
    question: "Jak wysoko umieścić słowo kluczowe w tekście?",
    answer: "Słowo kluczowe powinno pojawić się: 1) W H1 (najwyżej na stronie), 2) W meta title (pierwsze 60 znaków), 3) W meta description, 4) W pierwszym akapicie artykułu, 5) W kilku H2 i H3, 6) W ostatnim akapicie. Im wcześniej, tym lepiej, ale nigdy nie zaburzaj czytelności na rzecz słowa kluczowego."
  },
  {
    question: "Ile słów powinien mieć artykuł do SEO?",
    answer: "Dla konkurencyjnych haseł: minimum 2000-3000 słów. Dla niszowych haseł: 1500-2000 słów wystarczy. Liczba słów zależy od intencji wyszukiwania — artykuły informatyczne (how-to) muszą być dłuższe niż produktowe. Raczej pisz naturalnie długo niż sztucznie napychaj tekst."
  },
  {
    question: "Czy powtarzanie słowa kluczowego pomaga w rankingu?",
    answer: "Tak, ale z umiarem. Gęstość słowa kluczowego powinna wynosić 1-2% (np. dla artykułu 2000-słownego 20-40 razy). Przesadna repetycja (keyword stuffing) karana jest przez Google. Lepiej używaj wariantów słowa kluczowego (synonimy, LSI keywords) niż powtarzaj dokładnie to samo słowo."
  },
  {
    question: "Jakie są best practices dla meta title i meta description?",
    answer: "Meta title: 50-60 znaków, zawiera słowo kluczowe, zaczyna się od słowa kluczowego jeśli to ma sens. Meta description: 150-160 znaków, zawiera wartość (benefit), zawiera CTA (np. 'Dowiedz się więcej'). Oba mają wpływ na CTR (procent kliknięć w wynikach Google)."
  },
  {
    question: "Czy linki wewnętrzne (internal links) wpływają na SEO copywriting?",
    answer: "Zdecydowanie. Internal linking to część SEO copywriting — powinnaś łączyć artykuły ze sobą używając anchor text zawierającego słowa kluczowe. Na przykład zamiast 'kliknij tutaj', użyj 'przeczytaj o copywriting na blogu'. Pomaga to w dystrybucji Page Rank i utrzymywaniu użytkownika na stronie."
  },
  {
    question: "Jak optymalizować alt text obrazów pod SEO?",
    answer: "Alt text powinien opisywać obraz i zawierać słowo kluczowe, jeśli to naturalne. Przykład: zamiast 'zdjęcie' napisz 'kobieta pisząca copywriting na laptopie'. Alt text nie powinien być dłuższy niż jedno zdanie. Pomaga to nie tylko w SEO, ale i w dostępności dla osób niewidomych."
  },
  {
    question: "Czy czytelność (readability) wpływa na ranking Google?",
    answer: "Tak. Google mierzy Core Web Vitals (szybkość, stabilność, responsywność), ale też długość zdań, paragrafów i używanie nagłówków. Tekst podzielony na krótkie zdania i paragrafy osiąga lepszy ranking niż monolityczny blok tekstu. Krótkie paragrafy = wyższa czytelność = lepszy ranking."
  }
];

const seoCopywritingElements = [
  {
    element: "Słowo kluczowe (primary)",
    description: "Jedno główne słowo kluczowe, dla którego optymalizujesz artykuł. Musi pojawić się w H1, meta title i meta description.",
    tools: "Google Keyword Planner, SEMrush, Ahrefs",
    priority: "KRYTYCZNY"
  },
  {
    element: "Słowa kluczowe LSI",
    description: "Semantycznie powiązane słowa kluczowe (synonimy, warianty). Pomagają Google lepiej zrozumieć temat artykułu.",
    tools: "LSIGraph, Google Suggest, Related Searches",
    priority: "WYSOKI"
  },
  {
    element: "Meta title",
    description: "Tytuł wyświetlany w wynikach wyszukiwania (50-60 znaków). Zawiera słowo kluczowe i wartość.",
    tools: "Yoast SEO, RankMath, Google Search Console",
    priority: "KRYTYCZNY"
  },
  {
    element: "Meta description",
    description: "Opis wyświetlany pod tytułem (150-160 znaków). Wpływa na CTR, nie bezpośrednio na ranking.",
    tools: "Yoast SEO, RankMath, Google Search Console",
    priority: "WYSOKI"
  },
  {
    element: "H1-H6 (nagłówki)",
    description: "Struktura artykułu. H1 jeden na stronę, H2/H3 dla sekcji. Nagłówki zawierają słowa kluczowe i LSI.",
    tools: "Natywny edytor, Yoast SEO",
    priority: "KRYTYCZNY"
  },
  {
    element: "Alt texty",
    description: "Opisy obrazów zawierające słowa kluczowe (ale naturalnie). Ważne dla dostępności i obrazowego wyszukiwania Google.",
    tools: "Edytor CMS, WebAIM Alt Text Checker",
    priority: "ŚREDNI"
  },
  {
    element: "Internal links",
    description: "Linki do innych stron na Twojej witrynie. Anchor text zawiera słowa kluczowe dla artykułu docelowego.",
    tools: "Screaming Frog, Natywny edytor",
    priority: "WYSOKI"
  },
  {
    element: "Czytelność",
    description: "Krótkie zdania, paragrafy, listy, pogrubienia. Google preferuje łatwe do czytania teksty.",
    tools: "Hemingway Editor, Yoast Readability",
    priority: "WYSOKI"
  }
];

const searchIntents = [
  {
    intent: "Informacyjna (Informational)",
    description: "Użytkownik chce się czegoś nauczyć. Artykuły how-to, poradniki, wyjaśnienia.",
    example: "jak pisać copywriting, copywriting co to jest",
    approach: "Pisz dogłębnie, daj odpowiedzi na pytania, strukturuj za pomocą H2/H3"
  },
  {
    intent: "Handlowa (Commercial)",
    description: "Użytkownik rozważa zakup, ale jeszcze się nie zdecydował. Porównania, recenzje.",
    example: "najlepsze narzędzia do copywritingu, copywriting vs content writing",
    approach: "Porównuj opcje, pokaż prze-plusy i minusy, zawrzyj social proof (opinie)"
  },
  {
    intent: "Transakcyjna (Transactional)",
    description: "Użytkownik gotów do kupienia. Landing page, produkty, cennik.",
    example: "copywriting cennik, kupić kurs copywritingu, usługi copywritingu",
    approach: "Jasne CTA, destacuj korzyści, pokaż cenę, testamonialy, gwarancja"
  },
  {
    intent: "Nawigacyjna (Navigational)",
    description: "Użytkownik szuka konkretnej strony lub marki.",
    example: "copywriting Fotz, Fotz agencja, blog Fotz copywriting",
    approach: "Optymalizuj brand keywords, upewnij się że artykuł łatwo się znajduje"
  }
];

const BlogCopywritingDlaSEO = () => {
  return (
    <>
      <SEOHead
        title="Copywriting SEO - jak pisać teksty zoptymalizowane pod Google?…"
        description="Jak pisać SEO copywriting? Słowa kluczowe, struktura artykułu, meta title, H1-H6, internal linking. Kompletny poradnik tworzenia treści optymalizowanych…"
        ogType="article"
        canonical="https://fotz.pl/blog/copywriting-seo-poradnik"
        keywords="copywriting SEO, SEO copywriting, jak pisać artykuły do SEO, optymalizacja tekstów, słowa kluczowe"
      />

      <ArticleSchema
        title="Copywriting SEO - jak pisać teksty zoptymalizowane pod Google? 2025"
        description="Kompletny poradnik do SEO copywriting - wszystko co musisz wiedzieć o pisaniu tekstów optymalizowanych pod wyszukiwarki"
        url="https://fotz.pl/blog/copywriting-seo-poradnik"
        image="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2015"
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        author="Fotz Studio"
      />

      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Copywriting SEO - jak pisać teksty zoptymalizowane pod Google?", url: "https://fotz.pl" }
        ]}/>

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
              <span className="text-foreground">Copywriting SEO - jak pisać teksty zoptymalizowane pod Google?</span>
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

                <span className="inline-block text-sm font-medium text-yellow-400 uppercase tracking-wider mb-4">
                  Copywriting i SEO
                </span>

                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Copywriting SEO - jak pisać teksty zoptymalizowane pod Google? 2025
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
                    20 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2015"
                    alt="Copywriting SEO - jak pisać teksty zoptymalizowane pod Google"
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
                  Copywriting SEO to sztuka pisania tekstów, które są jednocześnie optymalizowane dla algorytmów Google i angażujące dla użytkowników. To nie jest tylko wmówienie słów kluczowych w artykuł — to zaplanowana strategia, która łączy copywriting (przekonywanie) z SEO (wyszukiwarkami). W tym poradniku dowiesz się, czym SEO copywriting różni się od zwykłego pisania, jakie elementy są krytyczne dla rankingu, i jak budować artykuły, które zarówno zajmują miejsca 1-3 w Google, jak i konwertują czytelników na klientów.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Czym jest copywriting SEO?
                </h2>

                <p className="text-muted-foreground mb-6">
                  <strong>SEO copywriting to pisanie treści, które są optymalizowane zarówno dla algorytmów wyszukiwarek, jak i dla użytkowników.</strong> Różni się od zwykłego copywritingu tym, że bierze pod uwagę:
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Słowa kluczowe:</strong> Tekst zawiera słowa, które ludzie szukają w Google</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Strukturę HTML:</strong> H1, H2, H3 organizują zawartość dla Google i użytkowników</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Meta tagi:</strong> Title i description wpływają na CTR w wynikach wyszukiwania</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Wewnętrzne linki:</strong> Łączenie artykułów pomaga Google w zrozumieniu struktury witryny</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Czytelność:</strong> Tekst podzielony na krótkie paragrafy, z listami i pogrubieniam rankkinguje lepiej</span>
                  </li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  Główna różnica między copywritingiem a SEO copywritingiem:
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Copywriting:</strong> Fokus na konwersji i perswazji. Pytanie: Jak zmotywować klienta do kupienia?</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>SEO copywriting:</strong> Fokus na rankingu + konwersji. Pytanie: Jak uzyskać rank w Google I zmotywować klienta do kupienia?</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Elementy SEO copywritingu
                </h2>

                <p className="text-muted-foreground mb-6">
                  Poniższa tabela pokazuje wszystkie krytyczne elementy, które musisz zoptymalizować w każdym artykule:
                </p>

                <div className="overflow-x-auto mb-8 rounded-lg border border-border/50">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-800 border-b border-border/50">
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Element</th>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Opis</th>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Narzędzia</th>
                        <th className="px-4 py-3 text-left font-semibold text-yellow-400">Priorytet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seoCopywritingElements.map((row, idx) => (
                        <tr key={idx} className={`border-b border-border/50 ${idx % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'}`}>
                          <td className="px-4 py-3 font-semibold text-foreground">{row.element}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.description}</td>
                          <td className="px-4 py-3 text-muted-foreground text-xs">{row.tools}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              row.priority === 'KRYTYCZNY' ? 'bg-red-900/30 text-red-400' :
                              row.priority === 'WYSOKI' ? 'bg-yellow-900/30 text-yellow-400' :
                              'bg-blue-900/30 text-blue-400'
                            }`}>
                              {row.priority}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Jak pisać pod intencję wyszukiwania?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Każde zapytanie w Google ma określoną intencję. Jeśli napiszesz artykuł dla złej intencji, nawet dobrze zoptymalizowany nie będzie rankingował. Oto cztery główne typy intencji:
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {searchIntents.map((item, idx) => (
                    <div key={idx} className="p-6 rounded-lg border border-border/50 bg-muted/20">
                      <h3 className="font-semibold text-yellow-400 mb-2">{item.intent}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="mb-3">
                        <p className="text-xs uppercase font-semibold text-gray-400 mb-1">Przykład:</p>
                        <p className="text-sm italic text-muted-foreground">"{item.example}"</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase font-semibold text-gray-400 mb-1">Podejście:</p>
                        <p className="text-sm text-muted-foreground">{item.approach}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Struktura artykułu SEO — template do natychmiastowego użytku
                </h2>

                <p className="text-muted-foreground mb-6">
                  Poniżej znajduje się sprawdzony template struktury artykułu SEO, który działa dla większości branż:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="p-6 rounded-lg bg-gray-900 border border-border/50">
                    <h3 className="font-semibold text-yellow-400 mb-3">1. Meta Title i Meta Description</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• <strong>Title:</strong> Słowo kluczowe + brand + benefit (50-60 znaków)</li>
                      <li>• <strong>Example:</strong> Copywriting SEO - jak pisać pod Google? Poradnik 2025</li>
                      <li>• <strong>Description:</strong> Zarys artykułu + CTA (150-160 znaków)</li>
                      <li>• <strong>Example:</strong> Jak pisać SEO copywriting? Słowa kluczowe, struktura H1-H6, internal linking. Kompletny poradnik tworzenia treści optymalizowanych.</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-gray-900 border border-border/50">
                    <h3 className="font-semibold text-yellow-400 mb-3">2. Intro (Lead)</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• 150-200 słów, zawiera główne słowo kluczowe</li>
                      <li>• Odpowiada na pytanie: Dla kogo to artykuł? Jaki problem rozwiązuje?</li>
                      <li>• Zawiera hook (zakaczka) — powód do czytania dalej</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-gray-900 border border-border/50">
                    <h3 className="font-semibold text-yellow-400 mb-3">3. Sekcje H2 z tematami pierwotnymi</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• 3-7 sekcji H2, każda zawiera wariant słowa kluczowego</li>
                      <li>• Każda sekcja 300-500 słów</li>
                      <li>• H3 do podziału H2 na podtematy</li>
                      <li>• Listy punktowane i pogrubienia na klucze insights</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-gray-900 border border-border/50">
                    <h3 className="font-semibold text-yellow-400 mb-3">4. Sekcja FAQ</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• 6-10 pytań które ludzie faktycznie zadają (znaleź na Google Suggest, Quora)</li>
                      <li>• Każda odpowiedź 100-200 słów</li>
                      <li>• Struktura: Pytanie zawiera long-tail słowo kluczowe</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-gray-900 border border-border/50">
                    <h3 className="font-semibold text-yellow-400 mb-3">5. CTA (Call To Action)</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Zawsze obecny — konwersja jest celem</li>
                      <li>• Jasny i specyficzny: "Zamów copywriting SEO" zamiast "Skontaktuj się"</li>
                      <li>• Link do strony produktu lub formularz kontaktowy</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-gray-900 border border-border/50">
                    <h3 className="font-semibold text-yellow-400 mb-3">6. Internal Links</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• 5-10 linków wewnętrznych do powiązanych artykułów/stron</li>
                      <li>• Anchor text zawiera słowa kluczowe linku docelowego</li>
                      <li>• Rozmieszcz naturalnie w tekście, nie na końcu</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Praktyczne porady do pisania SEO copywritingu
                </h2>

                <ul className="space-y-3 mb-8 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Zacznij od intencji:</strong> Zanim napiszesz, zrozum, czego szuka użytkownik wpisując to słowo kluczowe</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Słowo kluczowe w H1:</strong> H1 musi zawierać dokładnie słowo kluczowe (lub jego naturalny wariant)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Gęstość 1-2%:</strong> Słowo kluczowe powinno pojawić się 1-2 razy na 100 słów (dla artykułu 2000-słownego = 20-40 razy)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Warianty LSI:</strong> Używaj synonimów i semantycznie powiązanych słów zamiast powtarzania dokładnie tego samego słowa</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Krótkie paragrafy:</strong> Maks 3-4 zdania na paragraf. Google preferuje łatwe do czytania teksty</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Liście zamiast bloku tekstu:</strong> Lista punktowana z 5 elementami rankinguje lepiej niż 5 zdań w paragrafie</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Pogrubienia na keywords:</strong> Pogrubij słowa kluczowe i klucze koncepty — Google bardziej je waży</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span><strong>Obrazy z alt text:</strong> Każdy obraz powinien mieć alt text zawierający słowo kluczowe</span>
                  </li>
                </ul>

                {/* FAQ Section */}
                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Najczęściej zadawane pytania
                </h2>

                <div className="space-y-4 mb-12">
                  <Accordion type="single" collapsible>
                    {faqItems.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-muted/30 transition-colors">
                        <AccordionTrigger className="py-4 hover:no-underline">
                          <span className="text-left font-semibold">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-gray-700/10 border border-yellow-400/20 text-center"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Potrzebujesz SEO copywritingu dla Twojej strony?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Professionalne teksty zoptymalizowane pod Google nie tylko zajmują topowe pozycje, ale także konwertują. Nasze copywriterki piszą SEO-friendly artykuły, które rankkingują i sprzedają.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                    <Link to="/kontakt">Zapytaj o copywriting SEO</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/cennik">Sprawdź cennik</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Related Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-8 bg-muted/30 rounded-2xl"
              >
                <h3 className="text-xl font-heading font-bold mb-4">Powiązane artykuły i usługi</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/blog" className="p-4 bg-card rounded-xl border border-border/50 hover:border-yellow-400/50 transition-all">
                    <h4 className="font-semibold mb-2">Content marketing strategie</h4>
                    <p className="text-sm text-muted-foreground">Jak budować strategię treści</p>
                  </Link>
                  <Link to="/content-marketing/copywriting-landing" className="p-4 bg-card rounded-xl border border-border/50 hover:border-yellow-400/50 transition-all">
                    <h4 className="font-semibold mb-2">Usługa copywritingu</h4>
                    <p className="text-sm text-muted-foreground">Profesjonalne teksty do Twojej witryny</p>
                  </Link>
                  <Link to="/blog/pozycjonowanie-co-to" className="p-4 bg-card rounded-xl border border-border/50 hover:border-yellow-400/50 transition-all">
                    <h4 className="font-semibold mb-2">SEO pozycjonowanie</h4>
                    <p className="text-sm text-muted-foreground">Kompleksowa strategie SEO</p>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </article>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
};

export default BlogCopywritingDlaSEO;
