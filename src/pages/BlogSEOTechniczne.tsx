import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Search, TrendingUp, Zap, Code, Shield, Gauge, AlertCircle } from "lucide-react";
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

export default function BlogSEOTechniczne() {
  const breadcrumbs = [
    { name: "Strona główna", url: "https://fotz.pl/" },
    { name: "Blog", url: "https://fotz.pl/blog" },
    { name: "Techniczne SEO", url: "https://fotz.pl/blog/seo-techniczne-poradnik" },
  ];

  const technicalElements = [
    {
      element: "Core Web Vitals",
      description: "LCP, FID/INP, CLS — metryki mierzące doświadczenie użytkownika i szybkość strony",
      priority: "Krytyczny",
      tool: "Google PageSpeed Insights, Lighthouse",
    },
    {
      element: "Sitemap XML",
      description: "Plik informujący Google o wszystkich podstronach witryny, ich ważności i częstotliwości zmian",
      priority: "Wysoki",
      tool: "Yoast SEO, Google Search Console",
    },
    {
      element: "Robots.txt",
      description: "Plik kontrolujący które części witryny mogą być skanowane przez roboty Google",
      priority: "Wysoki",
      tool: "Google Search Console, edytor tekstu",
    },
    {
      element: "Canonical tags",
      description: "Tagi <link rel=canonical> wskazujące wersję główną strony w przypadku duplikatów",
      priority: "Wysoki",
      tool: "Yoast SEO, Screaming Frog",
    },
    {
      element: "Structured data (Schema)",
      description: "Dane strukturalne markupem JSON-LD lub microdata poprawiające rozumienie treści",
      priority: "Wysoki",
      tool: "Google Structured Data Testing Tool, Schema.org",
    },
    {
      element: "HTTPS/SSL",
      description: "Szyfrowanie połączenia — bezpieczeństwo i wymóg do poprawnych pozycji w Google",
      priority: "Krytyczny",
      tool: "Let's Encrypt, cpanel, certyfikaty SSL",
    },
    {
      element: "Mobile-first indexing",
      description: "Google najpierw indeksuje wersję mobilną strony — musi być przystosowana do telefonów",
      priority: "Krytyczny",
      tool: "Google Mobile-Friendly Test, DevTools",
    },
    {
      element: "Szybkość ładowania",
      description: "Czas do pełnego załadowania strony — wpływ na ranking i UX",
      priority: "Krytyczny",
      tool: "GTmetrix, Lighthouse, WebPageTest",
    },
    {
      element: "Crawl budget",
      description: "Ilość zasobów Google dedykowana do skanowania Twojej witryny — ograniczone dla dużych stron",
      priority: "Średni",
      tool: "Google Search Console, log pliki serwera",
    },
    {
      element: "Broken links",
      description: "Niedziałające linki (404 błędy) negatywnie wpływają na doświadczenie i ranking",
      priority: "Średni",
      tool: "Screaming Frog SEO Spider, Google Search Console",
    },
  ];

  const checklist = [
    { task: "Sprawdzić Core Web Vitals w PageSpeed Insights", status: "LCP <2.5s, FID <100ms, CLS <0.1", tool: "Google PageSpeed" },
    { task: "Wyświetlić i zoptymalizować Sitemap XML", status: "Sitemap.xml istniejący i prawidłowy", tool: "GSC" },
    { task: "Przeanalizować robots.txt", status: "Blokady niepotrzebnych zasobów usunięte", tool: "Search Console" },
    { task: "Dodać canonical tags na wszystkie strony", status: "Canonical wskazuje wersję główną", tool: "Yoast/Manual" },
    { task: "Dodać structured data (Schema.org)", status: "JSON-LD dla Article, Product, FAQPage", tool: "Schema Testing Tool" },
    { task: "Wymusić HTTPS na całej witrynie", status: "Wszystkie linki https://, redirect 301", tool: "SSL cert + .htaccess" },
    { task: "Przetestować responsywność na urządzeniach mobilnych", status: "Brak błędów na viewport 375px", tool: "Chrome DevTools" },
    { task: "Zmniejszyć rozmiar obrazów i CSS/JS", status: "Kompresja, lazy loading, minifikacja", tool: "TinyPNG, Gzip" },
    { task: "Przeanalizować crawl budget i logs serwera", status: "Brak skanowania stron 404/redirect", tool: "GSC logs" },
    { task: "Znaleźć i naprawić broken linki", status: "0 linków 404 wewnętrznych", tool: "Screaming Frog" },
  ];

  const tools = [
    {
      name: "Google PageSpeed Insights",
      type: "Darmowe",
      description: "Core Web Vitals, rekomendacje optymalizacji, wyniki dla mobile i desktop",
    },
    {
      name: "Google Search Console",
      type: "Darmowe",
      description: "Raportowanie błędów crawla, Sitemap, mobile usability, Core Web Vitals",
    },
    {
      name: "Lighthouse (Chrome DevTools)",
      type: "Darmowe",
      description: "Audyt wydajności, dostępności, best practices, SEO. Wbudowany w Chrome",
    },
    {
      name: "Schema.org Testing Tool",
      type: "Darmowe",
      description: "Walidacja structured data i micromarkupu",
    },
    {
      name: "Screaming Frog SEO Spider",
      type: "Płatne (od $199/rok)",
      description: "Zaawansowany crawler - broken links, duplicate content, canonical, XML sitemaps",
    },
    {
      name: "Yoast SEO (wtyczka WordPress)",
      type: "Freemium",
      description: "Canonical tags, meta descriptions, XML sitemap, readability, internal linking",
    },
    {
      name: "Semrush",
      type: "Płatne (od 129$/mies.)",
      description: "Techniczny audit SEO, analiza backlinków, research słów kluczowych, competitive intelligence",
    },
    {
      name: "Ahrefs",
      type: "Płatne (od 99$/mies.)",
      description: "Site Audit dla technical SEO, backlink analysis, keyword research, SERP tracking",
    },
  ];

  const faqItems = [
    {
      question: "Co to jest techniczne SEO?",
      answer: "Techniczne SEO to optymalizacja strony pod względem czynników technicznych wpływających na ranking w Google. Obejmuje: szybkość strony, Core Web Vitals, mobile-first indexing, strukturę URL, canonical tags, structured data, robots.txt, sitemap, HTTPS, crawl budget. To fundamenty na których stoi cała strategia SEO — jeśli technika jest źle, trudno osiągnąć dobre wyniki mimo dobrego on-page.",
    },
    {
      question: "Dlaczego Core Web Vitals są ważne?",
      answer: "Core Web Vitals to metryki wprowadzone przez Google mierzące doświadczenie użytkownika: LCP (czas załadowania największego elementu), INP/FID (responsywność interfejsu), CLS (stabilność wizualna). Od 2021 roku są oficjalnymi czynnikami rankingowymi. Strony z złymi Core Web Vitals tracą miejsca w Google. Wirtualnie każdy powinien dążyć do: LCP <2.5s, INP <200ms, CLS <0.1.",
    },
    {
      question: "Kiedy mówimy o mobile-first indexing?",
      answer: "Mobile-first indexing oznacza że Google najpierw indeksuje i rankuje wersję mobilną Twojej witryny, a potem desktopową. To odwrót od starych czasów. Jeśli Twoja witryna nie jest mobilna (responsive), to masz problem — Google będzie skanować wersję mobilną która może być znacznie gorsza. Dziś praktycznie wszystkie witryny muszą być mobilne, inaczej stracą znacznie na pozycjach.",
    },
    {
      question: "Co robi plik robots.txt w SEO?",
      answer: "Robots.txt to plik w głównym katalogu witryny (robots.txt) zawierający instrukcje dla crawlerów Google i innych botów. Pozwala ci blockować określone strony, katalogi lub zasoby (np. admin, pliki .css) żeby Google nie marnował crawl budget na nieważne zasoby. Przykład: User-agent: * | Disallow: /admin/ — Google nie będzie skanował folderu /admin/. WAŻNE: robots.txt nie chroni bezpieczeństwa, to tylko sugestia dla crawlerów.",
    },
    {
      question: "Czy siitmapa XML jest obowiązkowa?",
      answer: "Nie jest obowiązkowa, ale jest zdecydowanie rekomendowana. Sitemap XML (zwykle sitemap.xml) to plik informujący Google o wszystkich podstronach Twojej witryny, ich priorytecie, częstotliwości zmian i ostatniej modyfikacji. Dla małych stron (poniżej 500 stron) nie jest krytyczna, ale dla większych to oszczędza czas dla Google i upewnia że nic nie zostanie pominięte. W WordPress można generować automatycznie via Yoast SEO.",
    },
    {
      question: "Co to są canonical tags i kiedy ich używać?",
      answer: "Canonical tags (<link rel='canonical' href='URL'>) mówią Google która wersja strony jest główna w przypadku duplikatów. Używa się gdy: ta sama treść dostępna pod wieloma URLami (www i bez www, http i https, parametry śledzące, strony drukarskie). Bez canonical Google może podzielić siłę rankingową między duplikaty. Zawsze ustaw canonical na wersję główną. W WordPress robią to automatycznie wtyczki typu Yoast SEO.",
    },
    {
      question: "Ile czasu audyt techniczny SEO zajmuje?",
      answer: "Audyt techniczny SEO trvva zazwyczaj 1-3 dni dla średniej witryny (100-500 stron). Dla większych stron (1000+ stron) może trwać tydzień. Proces: 1) Crawl całej witryny (Screaming Frog, Semrush), 2) Analiza Core Web Vitals, 3) Sprawdzenie mobile-first, 4) Struktura URL i duplication, 5) Structured data, 6) Raport z rekomendacjami. Wdrożenie napraw: 2-4 tygodnie w zależności od zakresu.",
    },
    {
      question: "HTTPS vs HTTP — jakie znaczenie dla SEO?",
      answer: "HTTPS (z SSL/TLS) jest obowiązkowe. Google oficjalnie uważa HTTPS za czynnik rankingowy. Strony bez HTTPS są oznaczane w przeglądarce jako Niebezpieczne. Boty mogą odmawiać indeksowania http. Praktycznie każda strona musi mieć SSL. Let's Encrypt oferuje bezpłatne certyfikaty. Migracja: wszystkie linki wewnętrzne https://, ustawić redirect 301 z http na https, aktualizować Sitemap, powiadomić Google w Search Console.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Techniczne SEO - poradnik 2025. Core Web Vitals, Sitemap, Robots.txt"
        description="Kompletny poradnik technicznego SEO. Co to jest, dlaczego jest ważne, checklist działań, narzędzia. Dowiedź się jak zoptymalizować technical SEO swojej strony."
        canonical="https://fotz.pl/blog/seo-techniczne-poradnik"

        keywords="Techniczne SEO - poradnik 2025. Core Web Vitals, Sitemap, Robots.txt, Techniczne SEO - poradnik 2025. Core Web Vitals, Sitemap, Robots.txt poradnik, Techniczne SEO - poradnik 2025. Core Web Vitals, Sitemap, Robots.txt strategia, Techniczne SEO - poradnik 2025. Core Web Vitals, Sitemap, Robots.txt jak zrobić, Techniczne SEO - poradnik 2025. Core Web Vitals, Sitemap, Robots.txt marketing, Techniczne SEO - poradnik 2025. Core Web Vitals, Sitemap, Robots.txt przykłady, Techniczne SEO - poradnik 2025. Core Web Vitals, Sitemap, Robots.txt w Polsce"
      />
      <ArticleSchema
        title="Techniczne SEO - co to jest i jak wdrożyć? Poradnik 2025"
        description="Wszystko co musisz wiedzieć o technicznym SEO: Core Web Vitals, XML sitemap, robots.txt, canonical tags, structured data, HTTPS, mobile-first. Praktyczne checklist i narzędzia."
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        url="https://fotz.pl/blog/seo-techniczne-poradnik"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs.map(b => ({
          label: b.name,
          href: b.url
        }))} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min czytania</span>
              <span className="flex items-center gap-1"><Search className="w-4 h-4" /> Techniczne SEO</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Techniczne SEO — co to jest i jak wdrożyć? Poradnik 2025
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Techniczne SEO to fundament każdej strategii pozycjonowania. Dowiedz się co to jest, dlaczego tak ważne, oraz jak zoptymalizować swoją stronę. Praktyczne checklist, narzędzia, przykłady.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            {/* Intro */}
            <FadeInView>
              <h2 className="text-2xl font-bold text-yellow-400 mt-4 mb-4">Co to jest techniczne SEO?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Techniczne SEO to zestaw działań mających na celu optymalizację strony internetowej w aspektach technicznych, które wpływają na ranking w Google. Nie dotyczy to treści ani linków, ale raczej aspektów infrastrukturalnych, szybkości, mobilności, struktury danych i czynników technicznych wpływających na doświadczenie użytkownika.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Techniczne SEO to fundament. Możesz mieć genialną treść i setki backlinków, ale jeśli Twoja witryna ładuje się 10 sekund, nie indeksuje prawidłowo, lub ma złe Core Web Vitals — nie będziesz dominować w Google. Dlatego zawsze zaczynamy od techniki.
              </p>
            </FadeInView>

            {/* Key Elements Table */}
            <FadeInView>
              <h2 className="text-2xl font-bold text-yellow-400 mt-12 mb-6">Kluczowe elementy technicznego SEO</h2>
              <div className="overflow-x-auto border border-gray-700 rounded-lg">
                <table className="w-full text-sm text-gray-300">
                  <thead>
                    <tr className="bg-gray-800 border-b border-gray-700">
                      <th className="px-4 py-3 text-left font-semibold text-yellow-400">Element</th>
                      <th className="px-4 py-3 text-left font-semibold text-yellow-400">Opis</th>
                      <th className="px-4 py-3 text-left font-semibold text-yellow-400">Priorytet</th>
                      <th className="px-4 py-3 text-left font-semibold text-yellow-400">Narzędzie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalElements.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/30"} >
                        <td className="px-4 py-3 font-medium text-white">{item.element}</td>
                        <td className="px-4 py-3">{item.description}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            item.priority === "Krytyczny" ? "bg-red-900/40 text-red-300" :
                            item.priority === "Wysoki" ? "bg-yellow-900/40 text-yellow-300" :
                            "bg-blue-900/40 text-blue-300"
                          }`}>
                            {item.priority}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-400">{item.tool}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            {/* Core Web Vitals */}
            <FadeInView>
              <h2 className="text-2xl font-bold text-yellow-400 mt-12 mb-6">Core Web Vitals 2025</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Core Web Vitals to trzy metryki wprowadzone przez Google w 2021 roku jako oficjalne czynniki rankingowe. Mierzą doświadczenie użytkownika na Twojej stronie. Zły wynik w Core Web Vitals może kosztować Cię pozycje w Google.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800/60 p-5 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-bold text-white">LCP (Largest Contentful Paint)</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    Czas załadowania się największego elementu na stronie (np. hero image, hero text).
                  </p>
                  <div className="bg-gray-900/60 p-3 rounded text-xs text-gray-300">
                    <p className="font-semibold text-green-400 mb-1">Cel: poniżej 2.5 sekundy</p>
                    <p>Co optymalizować: obrazy (WebP, responsive), CSS, preload zasobów krytycznych, CDN</p>
                  </div>
                </div>

                <div className="bg-gray-800/60 p-5 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Gauge className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-bold text-white">INP/FID (Interaction to Next Paint)</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    Czas odpowiedzi strony na interakcję użytkownika (klik, scroll, naciśnięcie klawisza).
                  </p>
                  <div className="bg-gray-900/60 p-3 rounded text-xs text-gray-300">
                    <p className="font-semibold text-green-400 mb-1">Cel: poniżej 200 ms</p>
                    <p>Co optymalizować: minifikacja JavaScript, lazy loading, zmniejszenie main thread work</p>
                  </div>
                </div>

                <div className="bg-gray-800/60 p-5 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-bold text-white">CLS (Cumulative Layout Shift)</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    Nieoczekiwane przesunięcia elementów podczas ładowania strony (brak stabilności).
                  </p>
                  <div className="bg-gray-900/60 p-3 rounded text-xs text-gray-300">
                    <p className="font-semibold text-green-400 mb-1">Cel: poniżej 0.1</p>
                    <p>Co optymalizować: ustalone wymiary obrazów/iframe, font-display, animacje CSS</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4 mb-8">
                <p className="text-gray-300 text-sm">
                  <strong>Wskazówka:</strong> Sprawdź swoje Core Web Vitals w Google PageSpeed Insights (https://pagespeed.web.dev). To jest punkt wyjścia dla każdego audytu technicznego SEO.
                </p>
              </div>
            </FadeInView>

            {/* Checklist */}
            <FadeInView>
              <h2 className="text-2xl font-bold text-yellow-400 mt-12 mb-6">Techniczne SEO — checklist działań</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Praktyczna lista rzeczy do sprawdzenia i zoptymalizowania. Zastosuj je do swojej witryny.
              </p>

              <div className="overflow-x-auto border border-gray-700 rounded-lg">
                <table className="w-full text-sm text-gray-300">
                  <thead>
                    <tr className="bg-gray-800 border-b border-gray-700">
                      <th className="px-4 py-3 text-left font-semibold text-yellow-400">Zadanie</th>
                      <th className="px-4 py-3 text-left font-semibold text-yellow-400">Status / Cel</th>
                      <th className="px-4 py-3 text-left font-semibold text-yellow-400">Narzędzie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checklist.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/30"}>
                        <td className="px-4 py-3 font-medium text-white">{item.task}</td>
                        <td className="px-4 py-3">{item.status}</td>
                        <td className="px-4 py-3 text-gray-400">{item.tool}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            {/* Tools Section */}
            <FadeInView>
              <h2 className="text-2xl font-bold text-yellow-400 mt-12 mb-6">Narzędzia do technicznego SEO</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Darmowe i płatne narzędzia do audytu i monitorowania technicznego SEO Twojej witryny.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {tools.map((tool, idx) => (
                  <div key={idx} className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-white">{tool.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2 ${
                        tool.type === "Darmowe" ? "bg-green-900/40 text-green-300" : "bg-orange-900/40 text-orange-300"
                      }`}>
                        {tool.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{tool.description}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            {/* FAQ */}
            <FadeInView>
              <h2 className="text-2xl font-bold text-yellow-400 mt-12 mb-6">Najczęściej zadawane pytania</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border border-gray-700 rounded-lg px-4 data-[state=open]:bg-gray-800/40">
                    <AccordionTrigger className="text-left text-white hover:text-yellow-400 py-4">
                      <span className="text-base font-medium">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeInView>

            <FAQSchema items={faqItems} />

            {/* CTA Section */}
            <FadeInView>
              <div className="mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-yellow-400/30">
                <h2 className="text-2xl font-bold text-white mb-4">Potrzebujesz profesjonalnego audytu SEO?</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Nasza agencja fotz.pl specjalizuje się w audytach technicznych SEO. Przeanalizujemy Twoją stronę, zidentyfikujemy problemy i podamy konkretne rekomendacje. Zwiększ ruch organiczny już dzisiaj.
                </p>
                <Link
                  to="/uslugi/audyt-seo"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
                >
                  Zamów audyt SEO <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeInView>

          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
}
