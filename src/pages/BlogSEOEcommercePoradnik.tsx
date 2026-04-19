import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, ShoppingBag, Search, TrendingUp, Star, FileText, Code, Zap, Globe } from "lucide-react";
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

export default function BlogSEOEcommercePoradnik() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "SEO dla e-commerce — kompletny poradnik" },
  ];

  const seoCategories = [
    {
      area: "Architektura URL",
      description: "Struktura adresów URL ma wpływ na SEO. Używaj czytelnych ścieżek: /kategoria/podkategoria/produkt. Unikaj parametrów dynamicznych (id=123). Krótkie, opisowe adresy rankują lepiej.",
      tools: "Google Search Console, Yoast SEO",
      importance: "Wysoka"
    },
    {
      area: "Strony kategorii",
      description: "Kategorie generują największy ruch. Dodaj unikalne opisy (200-500 słów), H1 z słowem kluczowym, filterowanie produktów (bez parametrów), breadcrumbs, linkowanie do podkategorii.",
      tools: "Yoast, SEMrush",
      importance: "Krytyczna"
    },
    {
      area: "Strony produktów",
      description: "Każdy produkt to osobna strona SEO. Wymaga: unikalny opis (nie kopiuj od producenta), H1 z modelem/SKU, zdjęcia z alt-tagami, Product schema, opinie klientów, canonical URL.",
      tools: "Schema.org, Google Rich Results",
      importance: "Krytyczna"
    },
    {
      area: "Schemat danych (Schema)",
      description: "Product, Review, Rating, Offer schema — Google wyświetla je w wynikach wyszukiwania. Recenzje w Rich Results zwiększają CTR. Sprawdzaj w Rich Results Tester.",
      tools: "Google Rich Results Tester",
      importance: "Wysoka"
    },
    {
      area: "Core Web Vitals",
      description: "LCP (2,5s), FID (100ms), CLS (0,1) — wskaźniki Core Web Vitals wpływają na ranking. Shopify i WooCommerce muszą być zoptymalizowane. Obraz, CSS, JS — wszystko ma znaczenie.",
      tools: "PageSpeed Insights, GTmetrix",
      importance: "Wysoka"
    },
    {
      area: "Link building",
      description: "Dla sklepu: katalogi branżowe, artykuły gościnne, współpraca z blogami. Trudniej niż dla serwisów informacyjnych. Ogniska linków: recenzje produktów, porównania, poradniki zakupowe.",
      tools: "Ahrefs, Moz Link Explorer",
      importance: "Średnia"
    },
    {
      area: "Recenzje i opinie",
      description: "UGC (treść od użytkowników) — Google ja uwielbia. Recenzje produktów rankują w wynikach. Zachęcaj klientów do opinii, odpowiadaj na nie, używaj schema Reviews.",
      tools: "Google Business, Schema Reviews",
      importance: "Wysoka"
    }
  ];

  const productOptimization = [
    "Unikalna nazwa H1: zawiera model/SKU + główne słowo kluczowe",
    "Opis produktu: min. 200-300 słów, korzyści dla klienta, nie tylko cechy",
    "Zdjęcia: minimalne rozdzielczości dla mniejszych rozmiarów, alt-text z opisem produktu",
    "Product schema: cena, dostępność, producent, kategoria, wymiary",
    "Review schema: recenzje i oceny (jeśli dostępne)",
    "Canonical URL: wskazuje na wersję główną (bez filtrów koloru/rozmiaru)",
    "Meta description: 155 znaków, zawiera główne słowo kluczowe i CTA",
    "Struktury wewnętrzne: linkowanie do powiązanych produktów i kategorii"
  ];

  const technicalTips = [
    {
      platform: "WooCommerce",
      tips: [
        "Zainstaluj Yoast SEO — najpóźniej optymalizuje produkty",
        "Używaj Google for WooCommerce — automatyczna integracja z Merchant Center",
        "Skonfiguruj Rank Math — alternatywa dla Yoast, bardziej zaawansowana",
        "Włącz GZIP compression w .htaccess",
        "Zminimalizuj CSS/JS, używaj LazyLoad dla obrazów",
        "Skonfiguruj canonical URL dla wariantów produktów (rozmiar, kolor)"
      ]
    },
    {
      platform: "Shopify",
      tips: [
        "Shopify zarządza większością SEO automatycznie — mniej kontroli niż WooCommerce",
        "Dodaj alt-text dla obrazów — Shopify nie robi tego automatycznie",
        "Używaj JSON-LD schemat (Shopify dodaje automatycznie, ale sprawdzaj)",
        "Instaluj aplikacje SEO: SEO Manager, Plug in SEO",
        "PageSpeed Insights może być poniżej 50 — Shopify ma ograniczenia",
        "Dodaj Google Merchant Center — Shopify integruje się przez aplikacje"
      ]
    }
  ];

  const shopVsCompanyComparison = [
    {
      aspect: "Słowa kluczowe",
      shop: "3 poziomy (ogólne, kategorie, produkty). Wysokie natężenie, niski KD na marki.",
      company: "Frazy informacyjne i usługowe. Niższe natężenie, wyższy KD."
    },
    {
      aspect: "Liczba stron",
      shop: "Setki/tysiące stron (produkty). Szybsza indeksacja, ale więcej pracy.",
      company: "Kilkadziesiąt stron. Większa kontrola, mniej automatyzacji."
    },
    {
      aspect: "Content marketing",
      shop: "Blog, poradniki zakupowe, porównania. Buduje autorytet, generuje long-tail.",
      company: "Case studies, white papers, artykuły thought leadership."
    },
    {
      aspect: "Schemat danych",
      shop: "Product, Review, Rating, Offer schema. Wyświetlane w wynikach wyszukiwania.",
      company: "Organization, Service, LocalBusiness schema. Mniej schematów."
    },
    {
      aspect: "Link building",
      shop: "Katalogi produktów, recenzje blogów, artykuły gościnne.",
      company: "Artykuły gościnne, PR, partnerstwa branżowe, asociacje."
    },
    {
      aspect: "Konkurencja",
      shop: "Giganci Amazon, Allegro, Ceneo. Konkurencja brutalna.",
      company: "Konkurencja zależy od branży. Czasem mniej graczy."
    }
  ];

  const faqItems = [
    {
      question: "Ile czasu trwa SEO dla sklepu internetowego?",
      answer: "Sklepy z dużymi katalogami mogą zobaczyć efekty szybciej — Google indeksuje wiele stron. Jednak stabilne pozycje na konkurencyjne frazy (np. 'buty damskie') wymagają 6-18 miesięcy. Long-tail frazy (konkretne modele) mogą rankować po 1-3 miesiącach. Nowe sklepy mają trudniej — starsze domeny rankują łatwiej. Średnio: 3-6 miesięcy na pierwsze wyniki, 12-18 na pełne efekty."
    },
    {
      question: "Czy Product schema rzeczywiście wpływa na ranking?",
      answer: "Product schema nie wpływa bezpośrednio na ranking, ale wpływa na wyświetlanie w wynikach wyszukiwania. Recenzje w Rich Results zwiększają CTR o 15-25%. Cena i dostępność pokazane w wynikach — klienci klikają chętniej. Google może również używać schema do lepszego zrozumienia produktu. W praktyce: bez schema tracisz visibility, z schema zyskujesz CTR."
    },
    {
      question: "Czy WooCommerce czy Shopify jest lepszy dla SEO?",
      answer: "WooCommerce jest lepszy dla SEO — masz pełną kontrolę nad treścią, URL, meta tagami. Shopify automatyzuje więcej, ale ogranicza możliwości. WooCommerce: Yoast SEO, Rank Math, pełna konfiguracja. Shopify: uproszczone SEO, mniej kontroli, ale szybciej do działania. Dla seryoznego SEO: WooCommerce. Dla szybkiego startu: Shopify."
    },
    {
      question: "Jak optymalizować opisy produktów pod SEO?",
      answer: "Zasady: pisz unikalne teksty (nie kopiuj od producenta — duplicate content), dodaj główne słowo kluczowe w H1 i pierwszym akapicie, opisz korzyści dla klienta (nie tylko cechy), używaj struktury FAQ w opisie, dodaj zdjęcia z opisowymi alt-tagami, dodaj Product schema. Opisy muszą mieć min. 200-300 słów — Google nie lubi krótkich kart. SEO friendly opis generuje 30-40% więcej CTR."
    },
    {
      question: "Czy Google Merchant Center wpływa na ranking w wyszukiwarce?",
      answer: "Google Merchant Center nie wpływa na ranking w wyszukiwarce organicznej. Wpływa na wyniki w zakładce 'Zakupy' (Google Shopping). Jednak: produkty z Merchant Center mogą pojawiać się w wynikach zwykłych jako Rich Results z ceną i zdjęciem. Dlatego Merchant Center jest ważny — zwiększa visibility w Google Shopping i Rich Results, nie w organic."
    },
    {
      question: "Ile kosztuje profesjonalne SEO dla sklepu?",
      answer: "Małe sklepy (do 100 produktów): 1500-3000 zł/mies. Sklepy średnie (100-1000 produktów): 3000-8000 zł/mies. Duże sklepy (1000+ produktów): 5000-20000 zł/mies. Do tego tworzenie treści (opisy, blog): 500-3000 zł/mies. Inwestycja powinna dawać 3-5x ROI po 12 miesiącach. Tansze agencje (500-1000 zł/mies) to ryzyko — mogą robić tylko podstawy."
    },
    {
      question: "Jak poprawić Core Web Vitals dla sklepu?",
      answer: "LCP (Largest Contentful Paint — 2,5s): optymalizuj obrazy (WebP, lazy load), zmniejsz CSS/JS. FID (First Input Delay — 100ms): zminimalizuj JavaScript, przenieś skrypty do end. CLS (Cumulative Layout Shift — 0,1): rezerwuj przestrzeń dla obrazów/bannery, unikaj dynamicznych wstawek. Narzędia: PageSpeed Insights (Google), GTmetrix. Dla WooCommerce: Autoptimize, Smush. Dla Shopify: obraz optymalizacja (wbudowana), app Instant."
    },
    {
      question: "Czy konkurencja Amazona/Allegro jest powodem do zrezygnowania z SEO?",
      answer: "Konkurencja jest ogromna, ale nie powodem do rezygnacji. Strategie: 1) Long-tail keywords (konkretne modele, niche produkty), 2) Niszy (specjalistyczne produkty, gdzie konkurencja mniejsza), 3) Content marketing (poradniki, porównania — Amazon tego nie robi), 4) Local SEO (jeśli dostawa regionalna), 5) Recenzje i opinie (UGC). Średnie sklepy mogą rankować obok Amazona na long-tail. Duże sklepy (10 000+ produktów) mają szansę nawet na popularne frazy."
    }
  ];

  return (
    <>
      <SEOHead
        title="SEO dla e-commerce — kompletny poradnik pozycjonowania sklepu"
        description="Jak robić SEO dla sklepu internetowego? Optymalizacja produktów, kategorii, technical SEO dla WooCommerce i Shopify. Poradnik 2025 z checklist dla e-commerce."
        canonical="https://fotz.pl/blog/seo-ecommerce-poradnik"

        keywords="SEO dla e-commerce, SEO dla e-commerce poradnik, SEO dla e-commerce strategia, SEO dla e-commerce jak zrobić, SEO dla e-commerce marketing, SEO dla e-commerce przykłady, SEO dla e-commerce w Polsce"
      />
      <ArticleSchema
        title="SEO dla e-commerce — kompletny poradnik pozycjonowania sklepu internetowego"
        description="Jak robić SEO dla sklepu e-commerce? Optymalizacja produktów, kategorii, schemat danych, technical SEO dla WooCommerce i Shopify."
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        url="https://fotz.pl/blog/seo-ecommerce-poradnik"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min czytania</span>
              <span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4" /> e-commerce</span>
              <span className="flex items-center gap-1"><Search className="w-4 h-4" /> SEO techniczne</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              SEO dla e-commerce
              <span className="block text-yellow-400">kompletny poradnik pozycjonowania sklepu</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Pozycjonowanie sklepu internetowego to nie to samo co SEO dla serwisu informacyjnego. W tym poradniku dowiesz się, jak optymalizować produkty, kategorie, schemat danych i technical SEO. Sprawdzony sposób na zwiększenie sprzedaży przez wyszukiwarkę.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Dlaczego SEO dla sklepu jest inne?</h2>
              <p className="text-gray-300 mb-4">
                SEO dla e-commerce różni się od SEO dla strony firmowej czy bloga. Sklep ma setki lub tysiące produktów, każdy wymaga indywidualnej optymalizacji. Konkurencja jest brutalna — Amazon, Allegro, Ceneo — wszystkie walczą o te same słowa kluczowe.
              </p>
              <p className="text-gray-300 mb-4">
                W tym poradniku pokażemy ci, jak:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Optymalizować strony produktów pod SEO i konwersje</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Tworzyć kategorie, które rankują i sprzedają</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Wdrażać schemat danych (Product schema, Reviews) — Google je wyświetla</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Zarządzać technical SEO dla WooCommerce i Shopify</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Budować strategię content marketing dla sklepu</span>
                </li>
              </ul>
            </FadeInView>
          </div>
        </section>

        {/* SEO Categories Table */}
        <section className="py-12 md:py-16 bg-gray-950">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Kategorie SEO dla sklepu internetowego</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-yellow-400">
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Obszar</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Opis</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Narzędzia</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Ważność</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seoCategories.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-700 hover:bg-gray-900 transition">
                        <td className="py-4 px-4 text-white font-semibold">{row.area}</td>
                        <td className="py-4 px-4 text-gray-300">{row.description}</td>
                        <td className="py-4 px-4 text-gray-300">{row.tools}</td>
                        <td className="py-4 px-4">
                          <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                            row.importance === 'Krytyczna' ? 'bg-red-900/30 text-red-300' :
                            row.importance === 'Wysoka' ? 'bg-yellow-900/30 text-yellow-300' :
                            'bg-gray-700/30 text-gray-300'
                          }`}>
                            {row.importance}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Product Optimization */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-400" />
                Optymalizacja strony produktu
              </h2>
              <p className="text-gray-300 mb-8">
                Strona produktu to serce e-commerce SEO. Każdy produkt to osobna okazja do rankowania. Oto checklist najważniejszych elementów:
              </p>
              <div className="space-y-3">
                {productOptimization.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gray-950 rounded-lg border border-gray-800">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Technical SEO */}
        <section className="py-12 md:py-16 bg-gray-950">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Code className="w-8 h-8 text-yellow-400" />
                Techniczne SEO dla WooCommerce i Shopify
              </h2>
              <div className="space-y-8">
                {technicalTips.map((section, idx) => (
                  <div key={idx} className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">{section.platform}</h3>
                    <ul className="space-y-3">
                      {section.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex gap-3 text-gray-300">
                          <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">SEO sklep vs SEO strona firmowa</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-yellow-400">
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Aspekt</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Sklep e-commerce</th>
                      <th className="text-left py-3 px-4 text-yellow-400 font-bold">Strona firmowa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shopVsCompanyComparison.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-700 hover:bg-gray-950 transition">
                        <td className="py-4 px-4 text-white font-semibold">{row.aspect}</td>
                        <td className="py-4 px-4 text-gray-300">{row.shop}</td>
                        <td className="py-4 px-4 text-gray-300">{row.company}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-950">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">FAQ — najczęstsze pytania o SEO dla e-commerce</h2>
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

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Potrzebujesz pomocy z SEO dla twojego sklepu?</h2>
              <p className="text-gray-300 mb-6">
                SEO dla e-commerce to skomplikowany proces. Wymaga wiedzy o pozycjonowaniu, architekturze sklepów, optymalizacji konwersji i content marketingu. Jeśli chcesz przyspieszyć wyniki, porozmawiaj z naszym zespołem.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition"
              >
                Zapytaj o SEO dla sklepu <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInView>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
}
