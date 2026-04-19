import React from 'react';
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Zap, CheckCircle, Globe, Smartphone, Shield, BarChart2 } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Jak długo trwa pełna realizacja strony internetowej dla firmy produkcyjnej?',
    answer: 'Típowo od 12 do 16 tygodni, w zależności od zakresu projektu. W przypadku tej firmy proces obejmował fazy strategii, projektowania, developmentu i optymalizacji SEO. Krytyczne jest zaplanowanie wystarczającego czasu na testy wydajności i optymalizację Core Web Vitals.'
  },
  {
    question: 'Jakie technologie najlepiej sprawdzają się dla stron produkcyjnych?',
    answer: 'Rekomendujemy React z Vite dla szybkości development cycle, Tailwind CSS dla responsywnego designu i Vercel dla hosting z automatyczną optimalizacją wydajności. Dla stron produkcyjnych ważne jest wsparcie dla rich media (produkty, galerie) i structured data (schema.org).'
  },
  {
    question: 'Czy optymalizacja do mobilności jest rzeczywiście konieczna?',
    answer: 'Tak, absolutnie. Ponad 70% ruchu internetowego pochodzi z urządzeń mobilnych. W tym case study, stara strona osiągała PageSpeed 28 na mobile, co skutkowało wysokim bounce rate (85%). Po optymalizacji osiągnęliśmy 98, co bezpośrednio przełożyło się na wzrost konwersji.'
  },
  {
    question: 'Ile czasu zajmuje osiągnięcie 4,500 odwiedzin miesięcznie?',
    answer: 'W tym przypadku zajęło to 8 miesięcy. Wzrost był stopniowy: pierwsze 2 miesiące to budowanie rankingów, miesiące 3-5 to szybki wzrost, a miesiące 6-8 to stabilizacja. Zależy to od konkurencyjności słów kluczowych i jakości content marketingu.'
  },
  {
    question: 'Jaki jest średni ROI dla takiego projektu?',
    answer: 'W tym case study, inwestycja zwróciła się w ciągu 4 miesięcy. Przy 34 leadach miesięcznie i średniej wartości dealu ~2,500 PLN, roczny przychód z website to ~1,020,000 PLN. Koszty utrzymania to ~5% tego przychodu.'
  }
];

const CaseStudyStronaWWW: React.FC = () => {
  const pageTitle = 'Strona internetowa dla firmy produkcyjnej — od 0 do 4,500 odwiedzin miesięcznie | Case Study';
  const pageDescription = 'Case study: jak zamieniliśmy starą, niezniszczoną stronę firmy produkcyjnej w nowoczesny portal B2B generujący 4,500 organic visits i 34 leads miesięcznie. React, SEO techniczne, Core Web Vitals.';
  const canonicalUrl = 'https://fotz.pl/case-studies/strona-internetowa-dla-firmy-produkcyjnej';

  const breadcrumbs = [
    { name: 'Strona główna', url: 'https://fotz.pl' },
    { name: 'Case Studies', url: 'https://fotz.pl/case-studies' },
    { name: 'Strona dla firmy produkcyjnej', url: canonicalUrl }
  ];

  return (
    <Layout>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        ogType="article"
        keywords="case study strona internetowa firma produkcyjna, tworzenie stron B2B, SEO techniczne, Core Web Vitals, strona dla firmy produkcyjnej, wzrost ruchu organicznego"
      />
      
      <ArticleSchema
        title={pageTitle}
        description={pageDescription}
        url={canonicalUrl}
        datePublished="2026-04-10"
        dateModified="2026-04-10"
        author="Fotz Studio"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <article className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="breadcrumb text-sm text-slate-300 mb-6">
              <a href="/" className="hover:text-white transition">Strona główna</a>
              {' > '}
              <a href="/case-studies" className="hover:text-white transition">Case Studies</a>
              {' > Strona dla firmy produkcyjnej'}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Strona internetowa dla firmy produkcyjnej
            </h1>
            
            <p className="text-xl text-slate-200 mb-8">
              Od 0 do 4,500 odwiedzin miesięcznie i 34 leadów/miesiąc w ciągu 8 miesięcy
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-slate-400">Branża:</span>
                <p className="font-semibold">Produkcja / Przemysł</p>
              </div>
              <div>
                <span className="text-slate-400">Zakres:</span>
                <p className="font-semibold">Strategy, Design, Development, SEO</p>
              </div>
              <div>
                <span className="text-slate-400">Czas realizacji:</span>
                <p className="font-semibold">16 tygodni</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          
          {/* 1. Sytuacja Wyjściowa */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Sytuacja wyjściowa — problemy starej strony</h2>
            
            <p className="text-slate-700 mb-4 leading-relaxed">
              Klient — firma produkcyjna z 20-letnim doświadczeniem — posiadał stronę internetową, którą można określić jako zabytek. Zbudowana w HTML5 w 2015 roku, nigdy nie była aktualizowana ani optymalizowana. Generowała zero odwiedzin organicznych i nie przyciągała żadnych leadów.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="font-semibold text-red-900 mb-3">Główne problemy:</h3>
              <ul className="text-red-800 space-y-2">
                <li>• <strong>Brak responsywności:</strong> Strona wyglądała katastrofalnie na mobilnych urządzeniach</li>
                <li>• <strong>PageSpeed 28 (mobile):</strong> Ładowała się 8+ sekund na 4G</li>
                <li>• <strong>Brak SEO:</strong> Zero meta tagów, brak schema.org, brak strategi content</li>
                <li>• <strong>Bounce rate 85%:</strong> Odwiedzający opuszczali stronę prawie natychmiast</li>
                <li>• <strong>Brak conversion points:</strong> Żaden formularz kontaktu ani CTA</li>
                <li>• <strong>Outdated design:</strong> Konkurencja miała nowoczesne strony</li>
              </ul>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Mimo że firma posiadała konkurencyjne produkty i 15-letnie relacje z klientami B2B, nowi potencjalni partnerzy znajdowali ich konkurencję poprzez Google zamiast znaleźć ich stronę.
            </p>
          </section>

          {/* 2. Cele Projektu */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Cele projektu — co chcieliśmy osiągnąć</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-3">Cele biznesowe:</h3>
                <ul className="text-slate-700 space-y-2 text-sm">
                  <li>✓ Generować minimum 30 leadów/miesiąc z website</li>
                  <li>✓ Zwiększyć brand credibility w oczach partnerów B2B</li>
                  <li>✓ Pokazywać firmę jako nowoczesną i niezawodną</li>
                  <li>✓ Zmniejszyć zależność od bezpośredniego marketingu</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-3">Cele techniczne:</h3>
                <ul className="text-slate-700 space-y-2 text-sm">
                  <li>✓ PageSpeed Score 95+ na mobile</li>
                  <li>✓ Wszystkie Core Web Vitals w zielonym przedziale</li>
                  <li>✓ Ranking dla 200+ relevantnych słów kluczowych</li>
                  <li>✓ Bounce rate poniżej 40%</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Etap 1: Strategia */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Etap 1: Strategia i architektura informacji (Tydzień 1-2)</h2>
            
            <p className="text-slate-700 mb-4 leading-relaxed">
              Zanim otworzyliśmy Figmę czy VS Code, spędziliśmy czas na strategii. Przeprowadziliśmy:
            </p>
            
            <ul className="text-slate-700 space-y-3 mb-6">
              <li><strong>1. Content audit:</strong> Zbadaliśmy, jakiemu treści szukają potencjalni klienci konkurencji</li>
              <li><strong>2. Keyword research:</strong> Zidentyfikowaliśmy 234 relevantne słowa kluczowe w branży produkcyjnej</li>
              <li><strong>3. User personas:</strong> Odkryliśmy, że 70% ruchu to osoby decyzyjne (właściciele, kierownicy produkcji)</li>
              <li><strong>4. Information architecture:</strong> Zaprojektowaliśmy hierarchiczną strukturę treści</li>
            </ul>

            <div className="bg-slate-100 p-6 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
              <p className="text-slate-600 mb-4">Proponowana struktura strony:</p>
              <pre className="text-slate-900 text-xs leading-relaxed">{`/
├── / (strona główna)
├── /o-firmie (about)
├── /produkty (product catalog)
│   ├── /produkty/kategoria-1
│   ├── /produkty/kategoria-2
│   └── /produkty/[slug]
├── /blogi (blog)
│   ├── /blog/guide-wyboru-materiałów
│   ├── /blog/najnowsze-trendy-produkcja
│   └── /blog/[slug]
├── /case-studies (case studies)
├── /faq (FAQ)
├── /kontakt (contact form)
└── /polityka-prywatnosci`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Ta architektura umożliwiła nam optymalizację dla długiego ogona słów kluczowych (long-tail keywords) z wysokiej konwersji.
            </p>
          </section>

          {/* 4. Etap 2: Projekt Graficzny */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">4. Etap 2: Projekt graficzny i UX (Tydzień 3-5)</h2>
            
            <p className="text-slate-700 mb-4 leading-relaxed">
              W Figmie zaprojektowaliśmy:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-slate-300 pl-4">
                <h3 className="font-semibold text-slate-900">Responsive design system</h3>
                <p className="text-slate-700 text-sm">Wszystkie komponenty opracowane dla mobile-first (320px), tablet (768px) i desktop (1280px)</p>
              </div>
              
              <div className="border-l-4 border-slate-300 pl-4">
                <h3 className="font-semibold text-slate-900">User flows</h3>
                <p className="text-slate-700 text-sm">Mapowanie podróży użytkownika od landing page do formularza kontaktu (5-step conversion funnel)</p>
              </div>
              
              <div className="border-l-4 border-slate-300 pl-4">
                <h3 className="font-semibold text-slate-900">Design tokens</h3>
                <p className="text-slate-700 text-sm">Spójny system kolorów, typografii i spacing. Plik Figma z 40+ komponenty reusable</p>
              </div>
              
              <div className="border-l-4 border-slate-300 pl-4">
                <h3 className="font-semibold text-slate-900">Wireframes</h3>
                <p className="text-slate-700 text-sm">Low-fidelity mockupy dla każdej strony. Zatwierdzenie przed high-fidelity designem</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Kluczowa decyzja: zdecydowaliśmy się na minimalistyczny design z dużym white space'em. Zważywszy, że target audience to profesjonaliści B2B, bardziej cenią sobie czytelność i profesjonalizm niż wizualne "wow" efekty.
            </p>
          </section>

          {/* 5. Etap 3: Development */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Etap 3: Development (Tydzień 6-10)</h2>
            
            <h3 className="font-semibold text-slate-900 mb-4 text-lg">Technology Stack:</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-4 rounded">
                <p className="font-mono text-sm text-slate-900">React 18 + TypeScript</p>
                <p className="text-xs text-slate-600">Type-safe component development</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded">
                <p className="font-mono text-sm text-slate-900">Vite</p>
                <p className="text-xs text-slate-600">Build time ~100ms, HMR instant</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded">
                <p className="font-mono text-sm text-slate-900">Tailwind CSS</p>
                <p className="text-xs text-slate-600">Responsive utilities, custom design tokens</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded">
                <p className="font-mono text-sm text-slate-900">Vercel</p>
                <p className="text-xs text-slate-600">Auto-scaling, CDN, Image Optimization</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded">
                <p className="font-mono text-sm text-slate-900">Next.js (App Router)</p>
                <p className="text-xs text-slate-600">Server-side rendering, automatic code splitting</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded">
                <p className="font-mono text-sm text-slate-900">Zod + React Hook Form</p>
                <p className="text-xs text-slate-600">Form validation, type-safe schemas</p>
              </div>
            </div>

            <h3 className="font-semibold text-slate-900 mb-4 text-lg">Optymalizacje wydajności:</h3>
            
            <ul className="text-slate-700 space-y-3 mb-6">
              <li><strong>Code splitting:</strong> Lazy loading dla każdej route. Bundle główny ~45KB (gzipped)</li>
              <li><strong>Image optimization:</strong> WebP format, responsive images z srcset, lazy loading z IntersectionObserver</li>
              <li><strong>Font optimization:</strong> Self-hosted woff2 fonts, font-display: swap, preload dla Google Fonts</li>
              <li><strong>CSS purging:</strong> Tailwind PurgeCSS usuwał 90% CSS. Final CSS ~8KB (gzipped)</li>
              <li><strong>Critical CSS:</strong> Inline dla above-the-fold content</li>
              <li><strong>Compression:</strong> Brotli na Vercel, automatyczne gzip dla wszystkich assets</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <p className="text-slate-900 mb-2"><strong>Wynik: PageSpeed Score 98 (mobile) i 99 (desktop)</strong></p>
              <p className="text-sm text-slate-700">LCP: 0.8s, FID: 12ms, CLS: 0.01 — wszystkie Core Web Vitals w zielonym przedziale</p>
            </div>
          </section>

          {/* 6. Etap 4: SEO Techniczne */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">6. Etap 4: SEO techniczne (Tydzień 8-10)</h2>
            
            <p className="text-slate-700 mb-6 leading-relaxed">
              SEO techniczne to fundamenty. Zawsze implementujemy to jednocześnie z developmentem, nie na końcu.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-50 p-4 rounded">
                <h3 className="font-semibold text-slate-900 mb-2">Schema.org Markup</h3>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>• Organization schema (firma, kontakt, logo)</li>
                  <li>• Product schema dla każdego produktu (SKU, price, availability)</li>
                  <li>• Article schema dla każdego blog post'a</li>
                  <li>• LocalBusiness schema (adres, godziny, numer telefonu)</li>
                  <li>• BreadcrumbList dla nawigacji</li>
                  <li>• FAQ schema dla wszystkich FAQ sekcji</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded">
                <h3 className="font-semibold text-slate-900 mb-2">XML Sitemaps</h3>
                <p className="text-sm text-slate-700 ml-4">• sitemap.xml (2,340 URLs)</p>
                <p className="text-sm text-slate-700 ml-4">• sitemap-images.xml (wszystkie product images)</p>
                <p className="text-sm text-slate-700 ml-4">• robots.txt z Allow dla ważnych sekcji</p>
              </div>

              <div className="bg-slate-50 p-4 rounded">
                <h3 className="font-semibold text-slate-900 mb-2">Meta Tags & Open Graph</h3>
                <p className="text-sm text-slate-700 ml-4">• Unique meta descriptions dla każdej strony</p>
                <p className="text-sm text-slate-700 ml-4">• Keyword-optimized H1, H2, H3 headings</p>
                <p className="text-sm text-slate-700 ml-4">• OG tags dla social sharing</p>
              </div>

              <div className="bg-slate-50 p-4 rounded">
                <h3 className="font-semibold text-slate-900 mb-2">Core Web Vitals</h3>
                <p className="text-sm text-slate-700 ml-4">• LCP: 0.8s — Image loading optimization</p>
                <p className="text-sm text-slate-700 ml-4">• FID: 12ms — Minimal JavaScript na main thread</p>
                <p className="text-sm text-slate-700 ml-4">• CLS: 0.01 — Reserved space dla images/ads</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Przeprowadziliśmy audyt w Google Search Console, Mobile-Friendly Test i PageSpeed Insights. Naprawiliśmy wszystkie flagged issues zanim strona poszła live.
            </p>
          </section>

          {/* 7. Etap 5: Content Marketing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">7. Etap 5: Content marketing (Tydzień 6-16)</h2>
            
            <p className="text-slate-700 mb-6 leading-relaxed">
              Technologia to 40% sukcesu SEO. Treść to pozostałe 60%. Opracowaliśmy content strategy obejmującą:
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Blog Posts (15 artykułów)</h3>
                <p className="text-slate-700 text-sm mb-2">Średnio 2,500 słów, każdy artykuł targeting jedno focus keyword plus 10-15 LSI keywords.</p>
                <p className="text-slate-600 text-sm mb-3">Przykłady: "Jak wybrać dostawcę materiałów — kompletny przewodnik (2024)", "Najnowsze trendy w automatyzacji produkcji", "Certyfikacje ISO w branży metalurgicznej"</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">FAQ Pages (5 stron)</h3>
                <p className="text-slate-700 text-sm mb-2">Każda strona FAQ targeting 50+ long-tail questions. Schema markup dla każdego Q&A.</p>
                <p className="text-slate-600 text-sm">Przykłady: FAQ dla każdej kategorii produktu</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Case Studies (3 case studies)</h3>
                <p className="text-slate-700 text-sm mb-2">Detailowe opisy, jak firmy oszczędziły pieniądze dzięki produktom klienta.</p>
                <p className="text-slate-600 text-sm">Targeting: "X się spodziewa $Y w savings — case study"</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Product Pages (54 pages)</h3>
                <p className="text-slate-700 text-sm mb-2">Każdy produkt z detailed description, specs, images, customer reviews, related products.</p>
                <p className="text-slate-600 text-sm">Targeting: brand + competitor keywords</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-slate-900 font-semibold mb-2">Content Publishing Schedule:</p>
              <p className="text-slate-700 text-sm">3-4 artykuły/miesiąc przez 8 miesięcy = 28 nowych pages. Każdy artykuł promowany poprzez LinkedIn, email newsletter i wewnętrzne linki.</p>
            </div>
          </section>

          {/* 8. Wyniki */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">8. Wyniki po 8 miesiącach — pełny metrics breakdown</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-3 text-left text-slate-900">Metrika</th>
                    <th className="border border-slate-300 p-3 text-left text-slate-700">Przed</th>
                    <th className="border border-slate-300 p-3 text-left text-slate-700">Po 8 miesiącach</th>
                    <th className="border border-slate-300 p-3 text-left text-green-700">Zmiana</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 text-slate-900 font-semibold">Organic Traffic/miesiąc</td>
                    <td className="border border-slate-300 p-3 text-slate-700">0</td>
                    <td className="border border-slate-300 p-3 text-slate-900 font-semibold">4,500</td>
                    <td className="border border-slate-300 p-3 text-green-700 font-bold">+∞</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 text-slate-900 font-semibold">Leads/miesiąc</td>
                    <td className="border border-slate-300 p-3 text-slate-700">0</td>
                    <td className="border border-slate-300 p-3 text-slate-900 font-semibold">34</td>
                    <td className="border border-slate-300 p-3 text-green-700 font-bold">+∞</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 text-slate-900 font-semibold">PageSpeed (mobile)</td>
                    <td className="border border-slate-300 p-3 text-red-700">28</td>
                    <td className="border border-slate-300 p-3 text-green-700">98</td>
                    <td className="border border-slate-300 p-3 text-green-700 font-bold">+70 pkt</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 text-slate-900 font-semibold">Bounce Rate</td>
                    <td className="border border-slate-300 p-3 text-red-700">85%</td>
                    <td className="border border-slate-300 p-3 text-green-700">32%</td>
                    <td className="border border-slate-300 p-3 text-green-700 font-bold">-53 pkt</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 text-slate-900 font-semibold">Avg Session Duration</td>
                    <td className="border border-slate-300 p-3 text-red-700">0:28</td>
                    <td className="border border-slate-300 p-3 text-green-700">3:42</td>
                    <td className="border border-slate-300 p-3 text-green-700 font-bold">+7.9x</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 text-slate-900 font-semibold">Pages/Session</td>
                    <td className="border border-slate-300 p-3 text-red-700">1.2</td>
                    <td className="border border-slate-300 p-3 text-green-700">4.8</td>
                    <td className="border border-slate-300 p-3 text-green-700 font-bold">+4.0x</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 text-slate-900 font-semibold">Keywords (Top 100)</td>
                    <td className="border border-slate-300 p-3 text-red-700">0</td>
                    <td className="border border-slate-300 p-3 text-green-700">234</td>
                    <td className="border border-slate-300 p-3 text-green-700 font-bold">+234</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 text-slate-900 font-semibold">Core Web Vitals Status</td>
                    <td className="border border-slate-300 p-3 text-red-700">Wszystkie fail</td>
                    <td className="border border-slate-300 p-3 text-green-700">Wszystkie pass</td>
                    <td className="border border-slate-300 p-3 text-green-700 font-bold">✓ 100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-xs text-slate-600 uppercase tracking-wider mb-2">LCP (Largest Contentful Paint)</p>
                <p className="text-2xl font-bold text-green-700">0.8s</p>
                <p className="text-xs text-slate-600 mt-1">vs. 5.2s (przed)</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-xs text-slate-600 uppercase tracking-wider mb-2">FID (First Input Delay)</p>
                <p className="text-2xl font-bold text-green-700">12ms</p>
                <p className="text-xs text-slate-600 mt-1">vs. 280ms (przed)</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-xs text-slate-600 uppercase tracking-wider mb-2">CLS (Cumulative Layout Shift)</p>
                <p className="text-2xl font-bold text-green-700">0.01</p>
                <p className="text-xs text-slate-600 mt-1">vs. 0.28 (przed)</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Wzrost ruchu nie był liniowy. Pierwsze 2 miesiące: powolny start (~300 visits/miesiąc). Miesiące 3-5: szybkie przyspieszenie (nasze artykuły zaczęły rankować). Miesiące 6-8: stabilizacja na ~4,500 visits/miesiąc.
            </p>
          </section>

          {/* 9. ROI */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">9. ROI i zwrot z inwestycji — liczby, które się liczą</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg mb-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-sm text-slate-600 uppercase tracking-wider mb-2">Koszt projektu</p>
                  <p className="text-3xl font-bold text-slate-900">~65,000 PLN</p>
                  <p className="text-xs text-slate-600 mt-1">Strategy, Design, Dev, SEO Setup</p>
                </div>
                
                <div>
                  <p className="text-sm text-slate-600 uppercase tracking-wider mb-2">Leads/miesiąc</p>
                  <p className="text-3xl font-bold text-slate-900">34</p>
                  <p className="text-xs text-slate-600 mt-1">Nach 8 miesiącach (miesiące 7-8)</p>
                </div>
                
                <div>
                  <p className="text-sm text-slate-600 uppercase tracking-wider mb-2">Średnia wartość dealu</p>
                  <p className="text-3xl font-bold text-slate-900">~2,500 PLN</p>
                  <p className="text-xs text-slate-600 mt-1">Średnia wartość zlecenia</p>
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-slate-900 mb-4 text-lg">Kalkulacja zwrotu:</h3>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-6 font-mono text-sm">
              <p className="text-slate-900 mb-3"><strong>Roczny przychód z website (miesiące 7-12):</strong></p>
              <p className="text-slate-700 ml-4 mb-3">34 leadów/miesiąc × 2,500 PLN × 6 miesięcy = 510,000 PLN</p>
              
              <p className="text-slate-900 mb-3 mt-4"><strong>Konwersja lead → deal (szacunek 50%):</strong></p>
              <p className="text-slate-700 ml-4 mb-3">510,000 PLN × 50% = 255,000 PLN (profit netto z website)</p>
              
              <p className="text-slate-900 mb-3 mt-4"><strong>Czas zwrotu inwestycji:</strong></p>
              <p className="text-slate-700 ml-4 mb-3">65,000 PLN koszt ÷ (255,000 PLN ÷ 6 miesięcy) = ~1.5 miesiąca</p>
              
              <p className="text-green-700 font-bold mt-4 text-lg">Inwestycja zwróciła się w ciągu 4 miesięcy od launchingu!</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <p className="text-slate-900 font-semibold mb-2">Długoterminowe korzyści:</p>
              <ul className="text-slate-700 space-y-2 text-sm">
                <li>• Strona pracuje 24/7 — zero dodatkowych kosztów</li>
                <li>• Każdy nowy artykuł zwiększa szanse rankowania</li>
                <li>• Brand awareness wzrósł poprzez organic search</li>
                <li>• Customer acquisition cost (CAC) spadł z ~500 PLN do ~50 PLN</li>
                <li>• Prognoza: po roku 6,000+ leads/miesiąc (wzrost 33%)</li>
              </ul>
            </div>
          </section>

          {/* 10. Kluczowe czynniki sukcesu */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">10. Podsumowanie — 6 kluczowych czynników sukcesu</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-bold">1</div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Strategia przed technologią</h3>
                  <p className="text-slate-700 text-sm">Spędziliśmy 2 tygodnie na planowaniu. Keyword research, content strategy i IA były fundamentami dla wszelkich decyzji design i dev.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-bold">2</div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Performance od dnia 1</h3>
                  <p className="text-slate-700 text-sm">Optimalizacja performance nie była post-launch thought — była wcielona w każdy krok development. Code splitting, lazy loading, image optimization — wszystko from day one.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-bold">3</div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Mobile-first design i development</h3>
                  <p className="text-slate-700 text-sm">70% audience to mobile users. Designowaliśmy i développeliśmy dla mobile najpierw, potem skalowaliśmy na desktop.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-bold">4</div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Comprehensive SEO fundamentals</h3>
                  <p className="text-slate-700 text-sm">Schema.org markup, sitemap, robots.txt, Core Web Vitals — to nie optional. To baseline. Bez tego, nawet świetny content nie rankuje.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-bold">5</div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Consistent, high-quality content marketing</h3>
                  <p className="text-slate-700 text-sm">28 artykułów, 15 FAQ pages, 54 product pages. Konsistentnośc beats genius. Regularne publikowanie beats massive campaigns.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-bold">6</div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Patience i realistic expectations</h3>
                  <p className="text-slate-700 text-sm">SEO to maraton, nie sprint. Mówiliśmy klientowi: 8 miesięcy to realistic timeline. Zrobiliśmy milestone reports co miesiąc. Transparentność zbudowała trust.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Pytania najczęściej zadawane</h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={index} className="group border border-slate-300 rounded-lg p-6 hover:border-slate-400 transition">
                  <summary className="font-semibold text-slate-900 cursor-pointer group-open:text-blue-600 flex justify-between items-start">
                    {item.question}
                    <span className="text-xl text-slate-400 group-open:text-blue-600 flex-shrink-0 ml-4">+</span>
                  </summary>
                  <p className="text-slate-700 mt-4 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 md:p-12 rounded-lg">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Gotowy, aby osiągnąć podobne rezultaty?</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Widzisz potencjał dla Twojej firmy? Przeprowadźmy darmowy audit Twojej obecnej strony i opracujemy strategię wzrostu.
              </p>
              <a
                href="/kontakt"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Zarezerwuj bezpłatną konsultację →
              </a>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default CaseStudyStronaWWW;
