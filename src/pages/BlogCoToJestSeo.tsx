import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Search, TrendingUp, Globe, BarChart2, CheckCircle, AlertCircle, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Co to jest SEO?",
    answer:
      "SEO (Search Engine Optimization) to optymalizacja stron internetowych pod kątem wyszukiwarek — przede wszystkim Google. Celem SEO jest poprawa pozycji strony w organicznych (bezpłatnych) wynikach wyszukiwania dla wybranych słów kluczowych. Skuteczne SEO łączy trzy filary: techniczną poprawność strony, wartościowy content i budowanie linków zewnętrznych.",
  },
  {
    question: "Ile czasu trwa SEO, zanim zobaczę efekty?",
    answer:
      "SEO to inwestycja długoterminowa. Pierwsze efekty są widoczne zazwyczaj po 3–6 miesiącach, ale stabilne pozycje TOP 10 osiąga się zwykle po 6–12 miesiącach regularnej pracy. Czas zależy od konkurencji w branży, wieku domeny, jakości strony i budżetu na link building.",
  },
  {
    question: "Jaka jest różnica między SEO a Google Ads?",
    answer:
      "Google Ads (płatne reklamy) dają natychmiastowe efekty, ale ruch ustaje, gdy skończy się budżet. SEO buduje organiczny ruch, który trwa bez ciągłych opłat — ale wymaga czasu. Optymalne podejście łączy obie strategie: Google Ads w krótkim terminie, SEO jako inwestycja długoterminowa.",
  },
  {
    question: "Czym są słowa kluczowe w SEO?",
    answer:
      "Słowa kluczowe (keywords) to frazy wpisywane przez użytkowników w wyszukiwarce. Dobra strategia SEO opiera się na badaniu słów kluczowych — identyfikacji fraz, które Twoi potencjalni klienci faktycznie wyszukują, i optymalizacji treści pod te frazy. Kluczowe jest łączenie fraz ogólnych (wysoki wolumen, wysoka konkurencja) z long-tail (niższy wolumen, łatwiejsze pozycjonowanie).",
  },
  {
    question: "Co to jest link building i dlaczego jest ważny?",
    answer:
      "Link building to zdobywanie linków zewnętrznych (backlinks) prowadzących do Twojej strony z innych witryn. Google traktuje linki jako głosy zaufania — im więcej wartościowych stron linkuje do Ciebie, tym wyższy autorytet Twojej domeny i lepsze pozycje. Skuteczny link building to jeden z najtrudniejszych aspektów SEO.",
  },
  {
    question: "Czym jest lokalne SEO?",
    answer:
      "Lokalne SEO (local SEO) to optymalizacja strony pod kątem zapytań z określonej lokalizacji — np. 'fryzjer Poznań' czy 'dentysta Warszawa Mokotów'. Kluczowe elementy to: wizytówka Google Business Profile, lokalne słowa kluczowe na stronie i w meta tagach, lokalne linki z katalogów i portali regionalnych oraz spójne dane NAP (Name, Address, Phone) w całym internecie.",
  },
];

const BlogCoToJestSeo = () => {
  return (
    <Layout>
      <SEOHead
        title="Co to jest SEO? Pozycjonowanie stron — przewodnik dla firm | Fotz Studio"
        description="Co to jest SEO i jak działa pozycjonowanie? Kompletny przewodnik po SEO dla właścicieli firm — on-page, off-page, SEO techniczne, link building i efekty. Czytaj!"
        canonical="https://fotz.pl/blog/co-to-jest-seo"
        ogTitle="Co to jest SEO? Przewodnik po pozycjonowaniu stron"
        ogDescription="Kompleksowy przewodnik po SEO dla firm. Dowiedz się, jak działa pozycjonowanie, ile kosztuje i kiedy przynosi efekty."

        keywords="co to jest, definicja, czym jest, w marketingu, przykłady, jak działa, strategia"
      />
      <ArticleSchema
        title="Co to jest SEO? Pozycjonowanie stron — przewodnik dla firm"
        description="Kompletny przewodnik po SEO dla właścicieli firm. On-page, off-page, SEO techniczne, link building i praktyczne wskazówki na start."
        author="Fotz Studio"
        datePublished="2026-03-15"
        url="https://fotz.pl/blog/co-to-jest-seo"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Co to jest SEO?", url: "https://fotz.pl/blog/co-to-jest-seo" },
        ]}
      />
      <FAQSchema items={faqItems} />

      <article className="max-w-4xl mx-auto px-4 py-12 pt-28">
        {/* Back */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground -ml-2">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wróć do bloga
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
              SEO
            </span>
            <span className="bg-muted text-muted-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
              Pozycjonowanie
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Co to jest SEO? Pozycjonowanie stron internetowych — kompletny przewodnik dla firm
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground border-b border-border/50 pb-6">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> Fotz Studio
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> 15 marca 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 12 min czytania
            </span>
          </div>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            SEO — trzy litery, które decydują o tym, czy Twoi klienci znajdą Cię w Google.
            W tym artykule wyjaśniamy, czym jest pozycjonowanie, jak działa, ile kosztuje
            i co zrobić, żeby Twoja strona pojawiała się wysoko w wynikach wyszukiwania.
          </p>
        </header>

        {/* TOC */}
        <div className="bg-muted/40 border border-border/50 rounded-xl p-6 mb-10">
          <h2 className="font-semibold text-foreground mb-3">Spis treści</h2>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li><a href="#co-to-jest-seo" className="hover:text-primary transition-colors">Co to jest SEO?</a></li>
            <li><a href="#jak-dziala-seo" className="hover:text-primary transition-colors">Jak działa SEO — 3 filary</a></li>
            <li><a href="#seo-on-page" className="hover:text-primary transition-colors">SEO on-page (optymalizacja strony)</a></li>
            <li><a href="#seo-off-page" className="hover:text-primary transition-colors">SEO off-page (link building)</a></li>
            <li><a href="#seo-techniczne" className="hover:text-primary transition-colors">SEO techniczne</a></li>
            <li><a href="#lokalne-seo" className="hover:text-primary transition-colors">Lokalne SEO</a></li>
            <li><a href="#efekty-seo" className="hover:text-primary transition-colors">Kiedy SEO daje efekty?</a></li>
            <li><a href="#seo-vs-ads" className="hover:text-primary transition-colors">SEO vs. Google Ads</a></li>
            <li><a href="#koszty-seo" className="hover:text-primary transition-colors">Ile kosztuje SEO?</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
          </ol>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">

          <section id="co-to-jest-seo">
            <h2 className="text-2xl font-bold text-foreground mb-4">Co to jest SEO?</h2>
            <p>
              <strong className="text-foreground">SEO</strong> (ang.{" "}
              <em>Search Engine Optimization</em>, po polsku <strong className="text-foreground">pozycjonowanie stron internetowych</strong>)
              to zbiór działań mających na celu poprawę widoczności strony internetowej
              w organicznych (bezpłatnych) wynikach wyszukiwania Google i innych wyszukiwarek.
            </p>
            <p>
              Gdy użytkownik wpisuje w Google frazę — np. <em>„fryzjer Kraków"</em> lub{" "}
              <em>„jak zrobić biznesplan"</em> — wyszukiwarka wyświetla listę stron, które
              uznaje za najbardziej trafne i wartościowe. SEO to proces, który sprawia, że
              Twoja strona trafia jak najwyżej na tę listę.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground block mb-1">Dlaczego to ważne?</strong>
                  <p className="text-sm">
                    Badania pokazują, że <strong className="text-foreground">ok. 75% użytkowników</strong>{" "}
                    nigdy nie przechodzi na drugą stronę wyników Google. Bycie w TOP 10
                    to nie luksus — to konieczność, jeśli chcesz być widoczny dla klientów,
                    którzy szukają Twojej usługi lub produktu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="jak-dziala-seo">
            <h2 className="text-2xl font-bold text-foreground mb-4">Jak działa SEO — 3 filary pozycjonowania</h2>
            <p>
              Google ocenia strony według kilkuset czynników rankingowych. Specjaliści SEO
              grupują je w trzy główne obszary (filary):
            </p>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              {[
                {
                  icon: Globe,
                  title: "SEO on-page",
                  desc: "Optymalizacja treści, struktury i kodu strony — meta tagi, nagłówki H1-H6, słowa kluczowe, linkowanie wewnętrzne.",
                },
                {
                  icon: TrendingUp,
                  title: "SEO off-page",
                  desc: "Budowanie linków zewnętrznych (backlinks) z innych stron, wzmianki o marce, sygnały social media.",
                },
                {
                  icon: Search,
                  title: "SEO techniczne",
                  desc: "Szybkość strony, Core Web Vitals, indeksacja, mapy witryn XML, HTTPS, przyjazność mobilna.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border/60 rounded-xl p-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              Skuteczna strategia SEO wymaga zadbania o wszystkie trzy filary jednocześnie.
              Najlepsza treść nie pomoże, jeśli strona ładuje się wolno. Szybka strona
              bez linków zewnętrznych przegrywa z wolniejszą konkurencją, która ma ich dużo.
            </p>
          </section>

          <section id="seo-on-page">
            <h2 className="text-2xl font-bold text-foreground mb-4">SEO on-page — optymalizacja strony</h2>
            <p>
              <strong className="text-foreground">SEO on-page</strong> to wszystko, co możesz
              zmienić bezpośrednio na swojej stronie:
            </p>
            <ul className="space-y-3 my-5">
              {[
                {
                  title: "Tytuł strony (title tag)",
                  desc: "Najważniejszy element SEO on-page. Powinien zawierać główne słowo kluczowe i mieć 50–60 znaków.",
                },
                {
                  title: "Meta description",
                  desc: "Opis wyświetlany w wynikach wyszukiwania. Nie wpływa bezpośrednio na pozycję, ale decyduje o CTR (kliknięciach). Optymalna długość: 140–160 znaków.",
                },
                {
                  title: "Nagłówki H1–H6",
                  desc: "Struktura treści — każda strona powinna mieć dokładnie jeden H1 z głównym słowem kluczowym i rozbudowaną hierarchię H2/H3.",
                },
                {
                  title: "Treść (content SEO)",
                  desc: "Wartościowe, eksperckie treści odpowiadające na pytania użytkowników. Google premiuje unikalny, szczegółowy content zgodny z intencją wyszukiwania.",
                },
                {
                  title: "Linkowanie wewnętrzne",
                  desc: "Sieć linków między podstronami — pomaga Google zrozumieć strukturę strony i dystrybuuje autorytet (link juice).",
                },
                {
                  title: "Optymalizacja obrazów",
                  desc: "Alt tagi, kompresja, format WebP — obrazy wpływają zarówno na SEO, jak i szybkość strony.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">{item.title}:</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section id="seo-off-page">
            <h2 className="text-2xl font-bold text-foreground mb-4">SEO off-page — link building</h2>
            <p>
              <strong className="text-foreground">SEO off-page</strong> to działania poza Twoją stroną,
              które budują jej autorytet w oczach Google. Najważniejszy element to{" "}
              <strong className="text-foreground">link building</strong> — zdobywanie linków
              zewnętrznych (backlinks) prowadzących do Twojej strony.
            </p>
            <p>
              Google traktuje każdy backlink jak głos zaufania: <em>„ta strona jest warta uwagi"</em>.
              Im więcej wartościowych stron linkuje do Ciebie (szczególnie stron o wysokim Domain
              Rating), tym wyższy autorytet Twojej domeny i lepsze pozycje.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 rounded-xl p-5 my-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground block mb-1">Uwaga na black-hat link building</strong>
                  <p className="text-sm">
                    Kupowanie masowych, niskiej jakości linków (tzw. link farming, PBN) może skutkować
                    karą ręczną od Google i dramatycznym spadkiem widoczności. Inwestuj wyłącznie
                    w white-hat link building — naturalne linki z wartościowych, tematycznych źródeł.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Skuteczne metody link buildingu to: guest posting (artykuły gościnne na tematycznych
              portalach), digital PR (artykuły prasowe i wzmianki w mediach), wpisy w katalogach
              branżowych, partnerstwa i linki z dostawców/klientów oraz content marketing (wartościowe
              treści, które naturalnie zdobywają linki).
            </p>
          </section>

          <section id="seo-techniczne">
            <h2 className="text-2xl font-bold text-foreground mb-4">SEO techniczne</h2>
            <p>
              <strong className="text-foreground">Techniczne SEO</strong> zapewnia, że Google może
              poprawnie indeksować i rozumieć Twoją stronę. Nawet najlepsza treść nie pomoże,
              jeśli robot Google nie może jej przeczytać.
            </p>
            <p>Kluczowe aspekty technicznego SEO to:</p>
            <ul className="space-y-2 my-5">
              {[
                "Core Web Vitals — LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), INP (Interaction to Next Paint)",
                "Szybkość ładowania strony — poniżej 3 sekund na mobile",
                "HTTPS — bezpieczne połączenie jako sygnał rankingowy",
                "Mobile-first — strona zoptymalizowana pod urządzenia mobilne",
                "Mapa witryny XML (sitemap.xml) — ułatwia indeksację",
                "Plik robots.txt — kontroluje dostęp robotów do treści",
                "Canonicale — zapobiegają problemom z duplikacją treści",
                "Dane strukturalne (schema.org) — pomagają Google zrozumieć typ treści",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="lokalne-seo">
            <h2 className="text-2xl font-bold text-foreground mb-4">Lokalne SEO — pozycjonowanie dla firm lokalnych</h2>
            <p>
              <strong className="text-foreground">Lokalne SEO</strong> (local SEO) to specjalizacja
              skierowana do firm obsługujących klientów z konkretnego obszaru geograficznego:
              restauracji, gabinetów lekarskich, salonów kosmetycznych, lokalnych usługodawców.
            </p>
            <p>
              Gdy użytkownik wyszukuje <em>„kawiarnia Wrocław"</em> lub{" "}
              <em>„hydraulik blisko mnie"</em>, Google wyświetla tzw.{" "}
              <strong className="text-foreground">Local Pack</strong> — mapę z trzema firmami.
              Znalezienie się w Local Pack wymaga:
            </p>
            <ul className="space-y-2 my-5">
              {[
                "Zoptymalizowanej wizytówki Google Business Profile (dawne Google Moja Firma)",
                "Spójnych danych NAP (Name, Address, Phone) we wszystkich katalogach",
                "Lokalnych słów kluczowych na stronie (np. 'dentysta Kraków Nowa Huta')",
                "Opinii i ocen na Google Maps — ilość i jakość mają znaczenie",
                "Linków z lokalnych portali, katalogów regionalnych i mediów",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Oferujemy{" "}
              <Link to="/uslugi/pozycjonowanie" className="text-primary hover:underline font-medium">
                pozycjonowanie lokalne
              </Link>{" "}
              dla firm z całej Polski — od{" "}
              <Link to="/uslugi/pozycjonowanie/warszawa" className="text-primary hover:underline">
                Warszawy
              </Link>{" "}
              po{" "}
              <Link to="/uslugi/pozycjonowanie/gdansk" className="text-primary hover:underline">
                Gdańsk
              </Link>.
            </p>
          </section>

          <section id="efekty-seo">
            <h2 className="text-2xl font-bold text-foreground mb-4">Kiedy SEO daje efekty?</h2>
            <p>
              SEO to inwestycja długoterminowa — nie sprint, ale maraton. Oczekiwanie
              dramatycznych wyników po 2 tygodniach to częsty błąd zleceniodawców. Realny
              harmonogram wygląda następująco:
            </p>
            <div className="space-y-4 my-6">
              {[
                {
                  period: "0–3 miesiące",
                  desc: "Audyt, optymalizacja techniczna, tworzenie treści. Google indeksuje zmiany, ale pozycje zmieniają się powoli.",
                  color: "bg-muted",
                },
                {
                  period: "3–6 miesięcy",
                  desc: "Pierwsze frazy zaczynają pojawiać się w TOP 20–30. Ruch organiczny rośnie stopniowo. Widoczne są efekty optymalizacji treści.",
                  color: "bg-primary/5 border border-primary/20",
                },
                {
                  period: "6–12 miesięcy",
                  desc: "Stabilne pozycje TOP 10 dla kluczowych fraz. Znaczący wzrost ruchu organicznego. ROI staje się wyraźnie pozytywny.",
                  color: "bg-primary/10 border border-primary/30",
                },
                {
                  period: "12+ miesięcy",
                  desc: "Autorytet domeny rośnie, coraz więcej fraz rankuje wysoko. SEO staje się najważniejszym źródłem ruchu i leadów.",
                  color: "bg-primary/15 border border-primary/40",
                },
              ].map((item, i) => (
                <div key={i} className={`${item.color} rounded-xl p-5`}>
                  <strong className="text-foreground block mb-1">{item.period}</strong>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              Czas do efektów zależy od konkurencji w branży, wieku i historii domeny,
              jakości dotychczasowej strony, budżetu na content i link building.
              Nowe domeny potrzebują więcej czasu niż strony z historią.
            </p>
          </section>

          <section id="seo-vs-ads">
            <h2 className="text-2xl font-bold text-foreground mb-4">SEO vs. Google Ads — co wybrać?</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" /> SEO
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "✅ Ruch bezpłatny — brak kosztu za kliknięcie",
                    "✅ Efekty trwają długoterminowo",
                    "✅ Buduje autorytet i zaufanie",
                    "✅ Wyższy CTR niż reklamy (dla wielu fraz)",
                    "❌ Efekty widoczne po 3–12 miesiącach",
                    "❌ Wymaga ciągłej pracy i inwestycji",
                  ].map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-primary" /> Google Ads
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "✅ Natychmiastowe efekty — ruch od razu",
                    "✅ Precyzyjna kontrola budżetu",
                    "✅ Dokładne targetowanie",
                    "✅ Idealne na promocje i eventy",
                    "❌ Koszt za każde kliknięcie (CPC)",
                    "❌ Ruch ustaje po wyłączeniu kampanii",
                  ].map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
            <p>
              Rekomendujemy <strong className="text-foreground">strategię hybrydową</strong>:
              Google Ads do szybkiego generowania leadów w krótkim terminie + SEO jako
              inwestycja w organiczną widoczność na lata. Sprawdź naszą ofertę{" "}
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium">
                kampanii reklamowych Google Ads
              </Link>{" "}
              i{" "}
              <Link to="/uslugi/pozycjonowanie" className="text-primary hover:underline font-medium">
                pozycjonowania SEO
              </Link>.
            </p>
          </section>

          <section id="koszty-seo">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ile kosztuje SEO?</h2>
            <p>
              Koszty pozycjonowania zależą od konkurencji branży, celu (lokalne vs. krajowe SEO),
              zakresu działań i wyboru agencji. Orientacyjne stawki w Polsce (2025–2026):
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 border border-border/40 font-semibold text-foreground">Rodzaj SEO</th>
                    <th className="text-left p-3 border border-border/40 font-semibold text-foreground">Koszt miesięczny</th>
                    <th className="text-left p-3 border border-border/40 font-semibold text-foreground">Dla kogo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["SEO lokalne", "800–2 000 zł", "Małe firmy lokalne"],
                    ["SEO dla średnich firm", "2 000–5 000 zł", "Firmy z ambicjami krajowymi"],
                    ["SEO korporacyjne", "5 000–20 000+ zł", "Duże serwisy, e-commerce"],
                    ["Audyt SEO (jednorazowo)", "500–3 000 zł", "Diagnoza stanu strony"],
                  ].map(([type, cost, for_, i]) => (
                    <tr key={type} className="even:bg-muted/30">
                      <td className="p-3 border border-border/40 text-foreground font-medium">{type}</td>
                      <td className="p-3 border border-border/40">{cost}</td>
                      <td className="p-3 border border-border/40">{for_}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Więcej o kosztach reklam cyfrowych przeczytasz w artykule{" "}
              <Link to="/blog/google-ads-cennik" className="text-primary hover:underline font-medium">
                Google Ads cennik 2025/2026
              </Link>. Natomiast nasze pakiety SEO znajdziesz na stronie{" "}
              <Link to="/uslugi/pozycjonowanie" className="text-primary hover:underline font-medium">
                pozycjonowanie stron internetowych
              </Link>.
            </p>
          </section>

          {/* FAQ section */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-foreground mb-6">FAQ — najczęstsze pytania o SEO</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-card border border-border/60 rounded-xl p-5">
                  <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                  <p className="text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center my-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Chcesz wypozycjonować swoją stronę?
            </h2>
            <p className="text-muted-foreground mb-6">
              Zamów bezpłatny audyt SEO — sprawdzimy Twoją stronę i pokażemy,
              co hamuje Twoje pozycje w Google.
            </p>
            <Button asChild size="lg">
              <Link to="/kontakt">
                Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Related */}
        <div className="mt-16 border-t border-border/50 pt-10">
          <RelatedServices services={servicesByCategory.seo} />
        </div>
        <div className="mt-10">
          <RelatedArticles currentArticleId="co-to-jest-seo" />
        </div>
      </article>
    </Layout>
  );
};

export default BlogCoToJestSeo;
