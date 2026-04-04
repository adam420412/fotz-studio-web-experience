import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, BarChart3, Target, TrendingUp, Settings, Database, Zap } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";

const faqItems = [
  {
    question: "Czym GA4 różni się od Universal Analytics?",
    answer: "GA4 opiera się na zdarzeniach (events), nie sesjach. Oferuje śledzenie cross-device, lepszą integrację z Google Ads, predykcyjne metryki AI i jest zgodny z wymogami prywatności (cookieless future)."
  },
  {
    question: "Czy muszę przejść na GA4?",
    answer: "Tak, Universal Analytics przestał zbierać dane 1 lipca 2023. GA4 jest teraz jedyną aktywną wersją Google Analytics. Jeśli jeszcze nie migrowałeś, tracisz dane o ruchu."
  },
  {
    question: "Jak długo GA4 przechowuje dane?",
    answer: "Domyślnie 2 miesiące, można rozszerzyć do 14 miesięcy w ustawieniach. Dla dłuższego przechowywania potrzebna jest integracja z BigQuery (bezpłatna dla umiarkowanego ruchu)."
  },
  {
    question: "Co to są zdarzenia w GA4?",
    answer: "Zdarzenia to podstawowa jednostka pomiaru - każda interakcja użytkownika (page_view, click, scroll, purchase). W przeciwieństwie do UA, wszystko w GA4 jest zdarzeniem, łącznie z odsłonami stron."
  },
  {
    question: "Jak skonfigurować cele w GA4?",
    answer: "W GA4 cele nazywają się 'konwersjami'. Oznaczasz dowolne zdarzenie jako konwersję jednym kliknięciem w Admin > Events > Mark as conversion. Nie ma limitu konwersji."
  }
];

export default function BlogGoogleAnalytics4() {
  return (
    <Layout>
      <SEOHead
        title="Google Analytics 4 - kompletny poradnik GA4 dla firm 2025 | FOTZ Studio"
        description="Google Analytics 4 krok po kroku: instalacja, konfiguracja, raporty i konwersje. Praktyczny przewodnik GA4 dla marketerów i właścicieli firm."
        canonical="https://fotz.pl/blog/google-analytics-4-poradnik"
        keywords="google analytics 4, ga4, analytics, śledzenie konwersji, google analytics poradnik, ga4 konfiguracja"
      />
      <ArticleSchema
        title="Google Analytics 4 - kompletny poradnik GA4 dla firm 2025"
        description="Google Analytics 4 krok po kroku: instalacja, konfiguracja, raporty i konwersje."
        url="https://fotz.pl/blog/google-analytics-4-poradnik"
        datePublished="2025-01-04"
        dateModified="2026-01-09"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Google Analytics 4", url: "https://fotz.pl/blog/google-analytics-4-poradnik" },
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
              Google Analytics 4 - kompletny poradnik dla firm w 2025
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Jak skonfigurować GA4, zrozumieć nowy interfejs i mierzyć to, co naprawdę ważne dla Twojego biznesu. Praktyczny przewodnik od podstaw po zaawansowane funkcje.
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
                22 min czytania
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
              alt="Google Analytics 4 - dashboard i raporty"
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
                <BarChart3 className="w-6 h-6 text-primary" />
                Czym jest Google Analytics 4?
              </h2>
              <p>
                <strong>Google Analytics 4 (GA4)</strong> to najnowsza generacja platformy analitycznej Google, 
                która całkowicie zmieniła podejście do mierzenia ruchu na stronach internetowych. 
                W przeciwieństwie do Universal Analytics (UA), GA4 opiera się na modelu <strong>event-based</strong> 
                (opartym na zdarzeniach), a nie sesyjnym. Właściwa konfiguracja GA4 jest kluczowa dla skutecznego <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowania SEO</Link> oraz optymalizacji <Link to="/performance-marketing/google-ads" className="text-primary hover:underline">kampanii Google Ads</Link>.
              </p>
              <p>
                Od 1 lipca 2023 roku Universal Analytics przestał zbierać nowe dane, co oznacza, 
                że GA4 jest teraz <strong>jedynym aktywnym narzędziem Google Analytics</strong>. 
                Jeśli jeszcze nie migrowałeś, tracisz cenne dane o ruchu i konwersjach.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold mb-3 mt-0">🔄 Kluczowe różnice GA4 vs Universal Analytics</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Universal Analytics (UA):</p>
                    <ul className="mb-0">
                      <li>Model sesyjny</li>
                      <li>Bounce rate</li>
                      <li>Cele (max 20)</li>
                      <li>Widoki i segmenty</li>
                      <li>Cookies tylko</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Google Analytics 4:</p>
                    <ul className="mb-0">
                      <li>Model eventowy</li>
                      <li>Engagement rate</li>
                      <li>Konwersje (bez limitu)</li>
                      <li>Eksploracje i raporty</li>
                      <li>Cross-device tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-primary" />
                Jak zainstalować GA4 - krok po kroku
              </h2>

              <h3>Krok 1: Utwórz usługę GA4</h3>
              <ol>
                <li>Wejdź na analytics.google.com</li>
                <li>Kliknij "Admin" (zębatka w lewym dolnym rogu)</li>
                <li>Wybierz "Create Property" (Utwórz usługę)</li>
                <li>Podaj nazwę, strefę czasową, walutę</li>
                <li>Wybierz typ strumienia: Web, iOS lub Android</li>
              </ol>

              <h3>Krok 2: Zainstaluj tag śledzenia</h3>
              <p>Masz trzy opcje instalacji:</p>
              <ul>
                <li><strong>Google Tag Manager (zalecane)</strong> - największa elastyczność</li>
                <li><strong>Bezpośrednio w kodzie</strong> - tag gtag.js</li>
                <li><strong>Integracje CMS</strong> - wtyczki dla WordPress, Shopify itp.</li>
              </ul>

              <div className="bg-card border border-border rounded-xl p-6 my-8">
                <h4 className="font-bold mb-3">Kod gtag.js do instalacji:</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>`}
                </pre>
                <p className="text-sm text-muted-foreground mt-2 mb-0">
                  Zamień G-XXXXXXXXXX na swój Measurement ID z GA4.
                </p>
              </div>

              <h3>Krok 3: Weryfikacja instalacji</h3>
              <p>
                Sprawdź, czy dane napływają w raporcie <strong>Realtime</strong> (Czas rzeczywisty). 
                Otwórz swoją stronę w osobnej karcie - powinieneś zobaczyć siebie jako aktywnego użytkownika.
              </p>

              <h2 className="flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                Zdarzenia w GA4 - podstawa wszystkiego
              </h2>
              <p>
                W GA4 <strong>wszystko jest zdarzeniem</strong>. Odsłona strony, kliknięcie, przewinięcie, 
                zakup - każda interakcja to event. Google automatycznie śledzi podstawowe zdarzenia:
              </p>

              <h3>Zdarzenia automatyczne (zbierane bez konfiguracji)</h3>
              <ul>
                <li><strong>page_view</strong> - odsłona strony</li>
                <li><strong>first_visit</strong> - pierwsza wizyta</li>
                <li><strong>session_start</strong> - początek sesji</li>
                <li><strong>user_engagement</strong> - zaangażowanie użytkownika</li>
              </ul>

              <h3>Zdarzenia ulepszone (Enhanced Measurement)</h3>
              <p>Włącz w ustawieniach strumienia:</p>
              <ul>
                <li><strong>scroll</strong> - przewinięcie 90% strony</li>
                <li><strong>click</strong> - kliknięcia w linki wychodzące</li>
                <li><strong>file_download</strong> - pobieranie plików</li>
                <li><strong>video_start, video_progress, video_complete</strong> - wideo YouTube</li>
                <li><strong>form_start, form_submit</strong> - interakcje z formularzami</li>
              </ul>

              <h3>Zdarzenia niestandardowe</h3>
              <p>
                Dla specyficznych interakcji (np. kliknięcie CTA, dodanie do koszyka) tworzysz 
                własne zdarzenia przez GTM lub kod JavaScript:
              </p>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`gtag('event', 'add_to_cart', {
  currency: 'PLN',
  value: 149.99,
  items: [{
    item_id: 'SKU123',
    item_name: 'Koszulka basic',
    price: 149.99
  }]
});`}
              </pre>

              <h2 className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Konfiguracja konwersji
              </h2>
              <p>
                W GA4 <strong>każde zdarzenie może być konwersją</strong>. Nie ma limitu konwersji 
                (w UA było max 20 celów). Aby oznaczyć zdarzenie jako konwersję:
              </p>
              <ol>
                <li>Wejdź w Admin → Events (Zdarzenia)</li>
                <li>Znajdź zdarzenie na liście</li>
                <li>Włącz przełącznik "Mark as conversion"</li>
              </ol>

              <div className="bg-card border border-border rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold mb-4 mt-0">Zalecane konwersje według typu biznesu</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">E-commerce:</p>
                    <ul className="text-sm mb-0">
                      <li>purchase (zakup)</li>
                      <li>add_to_cart</li>
                      <li>begin_checkout</li>
                      <li>sign_up (rejestracja)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Lead generation:</p>
                    <ul className="text-sm mb-0">
                      <li>form_submit (formularz)</li>
                      <li>phone_click (klik telefon)</li>
                      <li>email_click</li>
                      <li>download (pobranie oferty)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Najważniejsze raporty w GA4
              </h2>

              <h3>1. Acquisition (Pozyskiwanie)</h3>
              <p>
                Skąd przychodzą użytkownicy? Raporty Traffic acquisition (ruch) i User acquisition 
                (nowi użytkownicy) pokazują źródła, media i kampanie.
              </p>

              <h3>2. Engagement (Zaangażowanie)</h3>
              <p>
                Co robią na stronie? Events, Pages and screens, Landing pages - sprawdzisz 
                najpopularniejsze strony i interakcje.
              </p>

              <h3>3. Monetization (Monetyzacja)</h3>
              <p>
                Dla e-commerce: przychody, produkty, transakcje. Wymaga wdrożenia zdarzeń 
                e-commerce (purchase, add_to_cart itp.).
              </p>

              <h3>4. Retention (Retencja)</h3>
              <p>
                Czy użytkownicy wracają? Kohorty, engagement, lifetime value - kluczowe 
                dla SaaS i subskrypcji.
              </p>

              <h2 className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                Zaawansowane funkcje GA4
              </h2>

              <h3>Eksploracje (Explorations)</h3>
              <p>
                Twórz własne raporty metodą drag-and-drop. Typy eksploracji: Free-form, 
                Funnel exploration, Path exploration, Segment overlap, Cohort exploration.
              </p>

              <h3>Audiences (Odbiorcy)</h3>
              <p>
                Twórz segmenty użytkowników na podstawie zachowań, demografii, zdarzeń. 
                Eksportuj do Google Ads dla remarketingu.
              </p>

              <h3>Predictive Metrics (Metryki predykcyjne)</h3>
              <p>
                AI przewiduje: prawdopodobieństwo zakupu, prawdopodobieństwo churnu, 
                przewidywany przychód. Wymaga wystarczającej ilości danych.
              </p>

              <h3>BigQuery Export</h3>
              <p>
                Eksportuj surowe dane do BigQuery (bezpłatnie). Przechowuj dane dłużej 
                niż 14 miesięcy, twórz zaawansowane analizy SQL.
              </p>

              <h2>Integracja GA4 z Google Ads</h2>
              <p>Połącz konta, aby:</p>
              <ul>
                <li>Importować konwersje GA4 do Google Ads</li>
                <li>Tworzyć grupy odbiorców remarketingowych</li>
                <li>Widzieć dane Google Ads w raportach GA4</li>
                <li>Wykorzystać smart bidding z danymi GA4</li>
              </ul>

              <h2>FAQ - Najczęściej zadawane pytania</h2>
              
              {faqItems.map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}

              <h2>Podsumowanie</h2>
              <p>
                Google Analytics 4 to potężne narzędzie, które wymaga nowego podejścia do analityki. 
                Model event-based daje większą elastyczność, ale wymaga przemyślanej konfiguracji. 
                Dzięki GA4 możesz lepiej śledzić efekty <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowania SEO</Link>, 
                optymalizować <Link to="/kampanie-reklamowe" className="text-primary hover:underline">kampanie reklamowe</Link> oraz 
                mierzyć ROI z <Link to="/content-marketing/strategia" className="text-primary hover:underline">content marketingu</Link>.
              </p>
              <p>
                Kluczowe kroki na start:
              </p>
              <ol>
                <li>Zainstaluj tag GA4 (najlepiej przez GTM)</li>
                <li>Włącz Enhanced Measurement</li>
                <li>Skonfiguruj zdarzenia niestandardowe dla kluczowych interakcji</li>
                <li>Oznacz konwersje</li>
                <li>Połącz z Google Ads</li>
                <li>Rozważ eksport do BigQuery</li>
              </ol>

              <p>
                Aby w pełni wykorzystać potencjał GA4, warto również zapoznać się z <Link to="/performance-marketing/remarketing" className="text-primary hover:underline">remarketingiem</Link>, 
                który pozwala odzyskiwać użytkowników, oraz ze strategiami <Link to="/seo/ecommerce" className="text-primary hover:underline">SEO dla e-commerce</Link>.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 my-8 text-center">
                <h3 className="text-xl font-bold mb-4 mt-0">Potrzebujesz pomocy z konfiguracją GA4?</h3>
                <p className="mb-6">
                  Skonfigurujemy GA4 dla Twojej strony - od instalacji po zaawansowane śledzenie e-commerce.
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
            <RelatedServices services={servicesByCategory.analytics} />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles currentArticleId="google-analytics-4-poradnik" />
    </Layout>
  );
}
