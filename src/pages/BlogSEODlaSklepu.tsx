import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, ShoppingCart, Search, TrendingUp, Package, Star, BarChart3, AlertCircle, Zap, Globe } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogSEODlaSklepu() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "SEO dla sklepu internetowego" },
  ];

  const seoSteps = [
    {
      step: 1,
      title: "Struktura URL sklepu",
      description: "Czytelne adresy URL wpływają na ranking i doświadczenie użytkownika. Przykład dobrej struktury: /kategoria/podkategoria/produkt-nazwa. Unikaj parametrów dynamicznych (id=123, sort=price) w głównych URL produktów.",
      icon: Globe
    },
    {
      step: 2,
      title: "Optymalizacja stron kategorii",
      description: "Kategorie to jednostki generujące ruch. Każda strona kategorii powinna mieć unikalny opis (200-500 słów), H1 z głównym słowem kluczowym, linkowanie do podkategorii, filtry bez parametrów GET.",
      icon: Package
    },
    {
      step: 3,
      title: "Optymalizacja stron produktów",
      description: "Każdy produkt to osobna strona SEO. Wymagane: unikalny opis (nie kopiuj od producenta), H1 z modelem/SKU, zdjęcia z alt-tagami, Product schema, canonical URL, meta description 155 znaków.",
      icon: ShoppingCart
    },
    {
      step: 4,
      title: "Content marketing dla sklepu",
      description: "Blog to najlepszy sposób na zabudowanie autorytu i long-tail keywords. Pisz artykuły porównawcze, poradniki zakupowe, odpowiadające na pytania klientów. Linkuj do produktów naturalnie.",
      icon: Search
    },
    {
      step: 5,
      title: "Szybkość ładowania (Core Web Vitals)",
      description: "LCP (2,5s), FID (100ms), CLS (0,1) wpływają na ranking. Optymalizuj obrazy (WebP, lazy load), minimalizuj CSS/JS, rezerwuj przestrzeń dla elementów dynamicznych.",
      icon: TrendingUp
    },
    {
      step: 6,
      title: "Link building dla e-commerce",
      description: "Zdobywaj linki z katalogów branżowych, artykułów gościnnych, recenzji produktów. Trudniej niż dla serwisów informacyjnych, ale możliwe na long-tail keywords.",
      icon: BarChart3
    },
    {
      step: 7,
      title: "Schematy produktowe",
      description: "Wdróż Product Schema, Review Schema, Rating Schema. Google wyświetla je w wynikach wyszukiwania (rich results). Zwiększ widoczność i CTR o 15-25%.",
      icon: Star
    },
    {
      step: 8,
      title: "Błędy SEO w sklepach",
      description: "Unikaj: duplicate content (opisy od producenta), brakujących alt-tagów na zdjęciach, słabych meta descriptions, braku canonical URL, wolnego ładowania, brakujących schematów danych.",
      icon: AlertCircle
    }
  ];

  const seoTools = [
    {
      name: "Google Search Console",
      purpose: "Indeksacja, strukturalne błędy, raport Core Web Vitals, analiza klikanych słów kluczowych",
      cost: "Darmowe"
    },
    {
      name: "Google PageSpeed Insights",
      purpose: "Analiza szybkości ładowania, rekomendacje optymalizacji",
      cost: "Darmowe"
    },
    {
      name: "Yoast SEO (WooCommerce)",
      purpose: "Optymalizacja on-page, meta tags, sitemap, breadcrumbs",
      cost: "Darmowe / od 99$"
    },
    {
      name: "Schema.org/Google Rich Results Tester",
      purpose: "Walidacja schematów produktowych, recenzji, cen",
      cost: "Darmowe"
    },
    {
      name: "Screaming Frog SEO Spider",
      purpose: "Crawling strony, audit błędów SEO, analiza meta tags",
      cost: "od 159$"
    },
    {
      name: "Semrush / Ahrefs",
      purpose: "Analiza konkurencji, research słów kluczowych, link audit",
      cost: "od 120$ / od 99$"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Duplikaty treści",
      solution: "Unikaj kopiowania opisów od producentów. Google penalizuje duplicate content. Pisz unikalne opisy dla każdego produktu, minimum 200-300 słów."
    },
    {
      mistake: "Brak alt-tagów na zdjęciach",
      solution: "Każde zdjęcie produktu powinno mieć descriptive alt-text. Przykład: 'Koszulka polo niebieska rozmiar M' zamiast 'zdjęcie 1'."
    },
    {
      mistake: "Słaba meta description",
      solution: "Meta description to twój anons w wynikach. 155 znaków, zawiera główne słowo kluczowe i CTA. Zwiększa CTR o 5-10%."
    },
    {
      mistake: "Brak canonical URL",
      solution: "Wskaż główną wersję produktu (bez filtrów koloru/rozmiaru). Unikaj problemów z duplicate content."
    },
    {
      mistake: "Powolny sklep",
      solution: "Strony ładujące się powyżej 3s tracą 40% użytkowników. Optymalizuj obrazy, CSS, JS. Sprawdzaj PageSpeed Insights."
    },
    {
      mistake: "Brak Product Schema",
      solution: "Product schema wyświetla cenę i opinie w wynikach. Google może pokazać rich results zamiast zwykłego linku. Zwiększa CTR."
    },
    {
      mistake: "Ignorowanie mobile SEO",
      solution: "70% szukających na e-commerce to mobile. Testuj responsywność, szybkość na mobilnych, clickable buttons minimum 44x44px."
    },
    {
      mistake: "Kategorie bez unique content",
      solution: "Kategorie mają template bez zmian. Dodaj unique opisy kategorii (200-500 słów), H1, wewnętrzne linki do pokrewnych kategorii."
    }
  ];

  const faqItems = [
    {
      question: "Ile czasu zajmuje SEO dla sklepu internetowego?",
      answer: "Sklepy z katalogami (100-1000 produktów) mogą zobaczyć pierwsze efekty po 2-4 miesiącach na long-tail keywords. Konkurencyjne frazy (typ 'buty damskie') wymagają 12-18 miesięcy. Średnio: 3-6 miesięcy na widoczne wyniki, 12 miesięcy na pełne efekty. Nowe domeny mają trudniej niż starsze."
    },
    {
      question: "Czy mogę optymalizować sklep sam czy potrzebuję agencji?",
      answer: "Można sam — wystarczy Yoast SEO, Google Search Console i chwila czasu. Ale to czasochłonne: research słów kluczowych, optimizacja każdego produktu, content writing, link building. Agencja przyspieszuła wyniki 2-3x. Koszt: 1500-8000 zł/mies dla małych/średnich sklepów. ROI: średnio 3-5x po 12 miesiącach."
    },
    {
      question: "Czy WooCommerce czy Shopify jest lepszy dla SEO?",
      answer: "WooCommerce: pełna kontrola, Yoast/Rank Math, konfiguracja URL, meta tags, schemat. Shopify: mniej kontroli, ale prostsze, szybciej do działania. Dla seryoznego SEO: WooCommerce. Dla szybkiego startu: Shopify. Obie platformy mogą rankować dobrze — liczą się praktyki SEO, nie platforma."
    },
    {
      question: "Jak pisać opisy produktów pod SEO?",
      answer: "Zasady: 200-300 słów minimum, unikalny tekst (nie kopiuj), H1 z głównym słowem kluczowym, pierwsza akcja to korzyść dla klienta (nie cechy), struktura: co to jest, dlaczego warto, cechy, zastosowanie, alt-text na zdjęciach, Product schema. SEO-friendly opis zwiększa CTR o 30-40% i zmniejsza bounce rate."
    },
    {
      question: "Czy schemat danych (Product Schema) naprawdę wpływa na ranking?",
      answer: "Nie bezpośrednio — nie wpływa na algorytm rankingowy. Ale wpływa na wyświetlanie: recenzje, cena, dostępność w rich results. Rich results zwiększają CTR o 15-25%. Google również używa schema do lepszego zrozumienia produktu. Wniosek: bez schema tracisz visibility, z schema zyskujesz CTR i konwersje."
    }
  ];

  return (
    <>
      <SEOHead
        title="SEO dla sklepu internetowego - praktyczny poradnik 2025 | fotz.pl"
        description="Praktyczne kroki SEO dla sklepów e-commerce. Optymalizacja produktów, kategorii, Core Web Vitals, schematy produktowe i unikanie błędów SEO w sklepach."
        canonical="https://fotz.pl/blog/seo-dla-sklepu-internetowego"

        keywords="SEO dla sklepu internetowego - praktyczny poradnik 2025, SEO dla sklepu internetowego - praktyczny poradnik 2025 poradnik, SEO dla sklepu internetowego - praktyczny poradnik 2025 strategia, SEO dla sklepu internetowego - praktyczny poradnik 2025 jak zrobić, SEO dla sklepu internetowego - praktyczny poradnik 2025 marketing, SEO dla sklepu internetowego - praktyczny poradnik 2025 przykłady, SEO dla sklepu internetowego - praktyczny poradnik 2025 w Polsce"
      />
      <ArticleSchema
        title="SEO dla sklepu internetowego - praktyczne kroki pozycjonowania e-commerce"
        description="Praktyczne poradnik: optymalizacja produktów i kategorii, Core Web Vitals, schematy produktowe, narzędzia SEO dla e-commerce, częste błędy."
        author="Fotz Studio"
        datePublished="2025-03-05"
        dateModified="2025-07-22"
        url="https://fotz.pl/blog/seo-dla-sklepu-internetowego"
      />
      <BreadcrumbSchema breadcrumbs={[
        { name: "Strona główna", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "SEO dla sklepu internetowego", url: "/blog/seo-dla-sklepu-internetowego" }
      ]} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 flex-wrap">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 14 min czytania</span>
              <span className="flex items-center gap-1"><ShoppingCart className="w-4 h-4" /> e-commerce</span>
              <span className="flex items-center gap-1"><Search className="w-4 h-4" /> praktyczne poradnik</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              SEO dla sklepu internetowego
              <span className="block text-yellow-400">8 praktycznych kroków do pozycjonowania</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Jak optymalizować sklep e-commerce pod Google? W tym poradniku dowiesz się, jak strukturować sklep, pisać opisy produktów, wdrażać schematy danych i unikać błędów SEO. Sprawdzony schemat dla sklepów internetowych.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Dlaczego SEO dla sklepu wymaga innego podejścia?</h2>
              <p className="text-gray-300 mb-4">
                SEO dla sklepu internetowego to nie to samo co SEO dla bloga czy strony firmowej. Sklep ma setki lub tysiące produktów, każdy wymaga indywidualnej optymalizacji. Konkurencja jest brutalna — Amazon, Allegro, Ceneo walczą o te same słowa kluczowe.
              </p>
              <p className="text-gray-300 mb-6">
                Ale są też szanse. Duża liczba stron oznacza więcej okazji do rankowania. Long-tail keywords (konkretne modele produktów) mają mniejszą konkurencję. Content marketing (blog, poradniki) buduje autorytet. Recenzje i opinie to naturalne social proof.
              </p>
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-4">W tym poradniku pokażemy ci:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>8 praktycznych kroków do SEO dla sklepu</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Jak pisać opisy produktów optymalizowane pod Google</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Narzędzia SEO dla e-commerce (większość darmowych)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>8 błędów SEO, które robią sklepy i jak je naprawić</span>
                  </li>
                </ul>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* 8 Steps */}
        <section className="py-12 md:py-16 bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">8 kroków do SEO dla sklepu internetowego</h2>
              <div className="space-y-6">
                {seoSteps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.step} className="flex gap-6 p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-yellow-400/50 transition">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-400/10 border border-yellow-400/30">
                          <Icon className="w-6 h-6 text-yellow-400" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-bold">Krok {item.step}</span>
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Content Writing Tips */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Jak pisać opisy produktów dla SEO i konwersji?</h2>
              <div className="bg-gray-950 rounded-lg p-8 border border-gray-800 mb-8">
                <p className="text-gray-300 mb-6">
                  Opis produktu to najważniejszy element strony produktu. Musi spełniać dwa cele: rankować w Google (SEO) i nakłaniać do kupienia (konwersja). Oto przepis na dobry opis:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold text-white mb-2">1. Pierwsza akcja — korzyść dla klienta</h4>
                    <p className="text-gray-300 text-sm">Zamiast: "Koszulka sportowa z tkaniny poliestru". Napisz: "Koszulka sportowa, która wchłania pot i szybko schnie — idealna do biegania i siłowni".</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold text-white mb-2">2. H1 z głównym słowem kluczowym</h4>
                    <p className="text-gray-300 text-sm">Przykład: "Buty do biegania Nike Air Zoom - czarne rozmiar 42". Zawiera słowo kluczowe (buty do biegania) i specyfiki produktu (Nike Air Zoom, czarne, rozmiar 42).</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold text-white mb-2">3. Długość 200-300 słów minimum</h4>
                    <p className="text-gray-300 text-sm">Google preferuje zasubstancjonowane opisy. Krótkie karty mają niżej w rankingu. Rozbij opis: co to jest, dlaczego warto, cechy techniczne, zastosowanie, porównanie z konkurencją.</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold text-white mb-2">4. Alt-text na każde zdjęcie</h4>
                    <p className="text-gray-300 text-sm">Zamiast: "foto1.jpg". Napisz: "Buty do biegania Nike Air Zoom czarne widok z boku". Alt-text pomaga Google zrozumieć produkt i pojawia się w Google Images.</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold text-white mb-2">5. Unikalne teksty, nie kopie od producenta</h4>
                    <p className="text-gray-300 text-sm">Producent stosuje ten sam opis na 100 stron (konkurenci mają kopię). Google penalizuje duplicate content. Pisz własne opisy — zwiększ ranking i konwersje.</p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* SEO Tools */}
        <section className="py-12 md:py-16 bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Narzędzia SEO dla e-commerce</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-yellow-400">
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Narzędzie</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Zastosowanie</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Koszt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seoTools.map((tool, idx) => (
                      <tr key={idx} className="border-b border-gray-700 hover:bg-gray-900 transition">
                        <td className="py-4 px-4 text-white font-semibold">{tool.name}</td>
                        <td className="py-4 px-4 text-gray-300">{tool.purpose}</td>
                        <td className="py-4 px-4 text-yellow-300">{tool.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">8 błędów SEO w sklepach internetowych i jak je naprawić</h2>
              <div className="space-y-4">
                {commonMistakes.map((item, idx) => (
                  <div key={idx} className="p-6 bg-gray-950 rounded-lg border border-gray-800">
                    <div className="flex gap-4 items-start">
                      <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <h3 className="font-bold text-white mb-2">{item.mistake}</h3>
                        <p className="text-gray-300 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-950">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">FAQ — najczęstsze pytania o SEO dla sklepów</h2>
              <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-800 rounded-lg px-4 data-[state=open]:bg-gray-900">
                    <AccordionTrigger className="text-left text-white font-semibold hover:text-yellow-400 transition py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeInView>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Podsumowanie — co zapamiętać?</h2>
              <div className="bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Struktura URL:</strong> /kategoria/podkategoria/produkt — czytelne i logiczne</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Opisy produktów:</strong> 200-300 słów, unikalne, z H1 i alt-tagami</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Product Schema:</strong> wdróż — zwiększa CTR i widoczność w rich results</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Core Web Vitals:</strong> szybkość ładowania to ranking factor — optymalizuj obrazy i JS</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Content marketing:</strong> blog z poradnikami i porównaniami buduje autorytet</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Link building:</strong> katalogi branżowe, recenzje produktów, artykuły gościnne</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Czasu na wyniki:</strong> long-tail 1-3 miesiące, konkurencyjne frazy 12-18 miesięcy</span>
                  </li>
                </ul>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Potrzebujesz pomocy z SEO dla twojego sklepu?</h2>
              <p className="text-gray-300 mb-6">
                SEO dla e-commerce to skomplikowany proces wymagający wiedzy z zakresu pozycjonowania, architektury sklepów, optymalizacji konwersji i content marketingu. Jeśli chcesz przyspieszyć wyniki i zwiększyć ruch z wyszukiwarek, porozmawiaj z naszym zespołem.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition"
              >
                Zapytaj o SEO dla twojego sklepu <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInView>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
}
