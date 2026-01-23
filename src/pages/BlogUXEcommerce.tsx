import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, Calendar, Clock, User, Share2, ShoppingCart, Eye, MousePointer, Zap, CheckCircle2, ArrowRight, Lightbulb, Target, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Jak poprawić konwersję w sklepie internetowym?",
    answer: "Kluczowe elementy to: uproszczenie procesu zakupowego (max 3-4 kroki), wyraźne CTA, szybkie ładowanie strony (max 3 sekundy), zaufanie (opinie, certyfikaty), dobre zdjęcia produktów z zoomem i widokiem 360°."
  },
  {
    question: "Ile kroków powinien mieć checkout w e-commerce?",
    answer: "Optymalnie 2-3 kroki. Każdy dodatkowy krok to około 10% spadku konwersji. Oferuj opcję 'guest checkout' bez rejestracji - 35% użytkowników porzuca koszyk gdy wymaga się rejestracji."
  },
  {
    question: "Czy warto inwestować w UX dla sklepu internetowego?",
    answer: "Zdecydowanie tak. Dobrze zaprojektowany UX może zwiększyć konwersję nawet o 400%. 88% użytkowników nie wraca po złym doświadczeniu, a 70% koszyków jest porzucanych z powodu słabego UX."
  },
  {
    question: "Jakie zdjęcia produktów najlepiej konwertują?",
    answer: "Minimum 4-6 zdjęć z różnych kątów, funkcja zoom (min. 2x), zdjęcia lifestyle pokazujące produkt w użyciu, video prezentujące produkt (wzrost konwersji o 80%), widok 360° dla produktów premium."
  },
  {
    question: "Jak zaprojektować skuteczną stronę produktu?",
    answer: "Kluczowe elementy: wysokiej jakości galeria zdjęć, wyraźna cena i dostępność, kontrastowy przycisk 'Dodaj do koszyka', opinie klientów, specyfikacja produktu, produkty powiązane (cross-selling)."
  }
];

export default function BlogUXEcommerce() {
  return (
    <Layout>
      <SEOHead
        title="UX/UI w e-commerce - jak projektować sklepy które sprzedają | FOTZ"
        description="Kompletny poradnik UX/UI dla sklepów internetowych. Dowiedz się jak projektować sklepy e-commerce, które zwiększają konwersję i sprzedaż."
        canonical="https://fotz.pl/blog/ux-ui-ecommerce"
        keywords="UX e-commerce, UI sklep internetowy, projektowanie sklepów, konwersja e-commerce, user experience"
      />
      <ArticleSchema
        title="UX/UI w e-commerce - jak projektować sklepy które sprzedają"
        description="Kompletny poradnik UX/UI dla sklepów internetowych. Jak projektować sklepy e-commerce zwiększające konwersję."
        url="https://fotz.pl/blog/ux-ui-ecommerce"
        datePublished="2025-01-04"
        dateModified="2026-01-09"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "UX/UI e-commerce", url: "https://fotz.pl/blog/ux-ui-ecommerce" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero Section */}
      <section className="pt-32 pb-12 section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do bloga
            </Link>

            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Poradniki
            </span>

            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              UX/UI w e-commerce - jak projektować sklepy internetowe które sprzedają
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Zespół FOTZ
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                4 Jan 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                20 min czytania
              </span>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070"
                alt="UX/UI w e-commerce"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding pt-0 bg-background">
        <div className="container-wide max-w-4xl">
          <div className="prose prose-lg prose-invert max-w-none">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                W świecie e-commerce, gdzie konkurencja jest ogromna, a klienci mają tysiące alternatyw, 
                <strong className="text-foreground"> dobry UX/UI może być różnicą między sukcesem a porażką</strong>. 
                Sklep internetowy to nie tylko katalog produktów - to doświadczenie zakupowe, które musi być 
                intuicyjne, przyjemne i efektywne. W tym poradniku pokażemy, jak projektować sklepy, które 
                nie tylko dobrze wyglądają, ale przede wszystkim sprzedają. Sprawdź również nasze usługi <Link to="/ecommerce-tworzenie-sklepu" className="text-primary hover:underline">tworzenia sklepów e-commerce</Link> oraz <Link to="/strony-internetowe" className="text-primary hover:underline">projektowania stron internetowych</Link>.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-4 my-12"
            >
              {[
                { value: "88%", label: "użytkowników nie wraca po złym UX" },
                { value: "70%", label: "porzuconych koszyków" },
                { value: "3 sek.", label: "max czas ładowania strony" },
                { value: "400%", label: "wzrost konwersji dzięki UX" },
              ].map((stat, index) => (
                <div key={index} className="bg-card rounded-xl p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-primary" />
                1. Podstawy UX w e-commerce
              </h2>
              
              <p>
                User Experience (UX) w e-commerce to całościowe doświadczenie użytkownika podczas 
                interakcji ze sklepem - od pierwszego wejścia na stronę, przez przeglądanie produktów, 
                aż po finalizację zakupu i obsługę posprzedażową.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Kluczowe elementy UX w sklepie online:</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong>Użyteczność (Usability)</strong> - jak łatwo użytkownik może osiągnąć swój cel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong>Dostępność (Accessibility)</strong> - czy sklep jest dostępny dla wszystkich użytkowników</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong>Wartość (Value)</strong> - czy produkt spełnia potrzeby użytkownika</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong>Wiarygodność (Credibility)</strong> - czy użytkownik ufa sklepowi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong>Pożądalność (Desirability)</strong> - czy design wywołuje pozytywne emocje</span>
                </li>
              </ul>
            </motion.div>

            {/* Section 2 - Homepage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Layers className="w-8 h-8 text-primary" />
                2. Strona główna - pierwsze wrażenie
              </h2>

              <p>
                Strona główna to wizytówka Twojego sklepu. Ma kilka sekund, żeby przekonać użytkownika 
                do pozostania. Oto kluczowe elementy skutecznej strony głównej:
              </p>

              <div className="bg-card rounded-xl p-6 my-8">
                <h4 className="font-bold text-lg mb-4">Elementy skutecznej strony głównej:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Hero Section", desc: "Jasna propozycja wartości i CTA" },
                    { title: "Kategorie produktów", desc: "Szybki dostęp do głównych kategorii" },
                    { title: "Bestsellery", desc: "Produkty, które się najlepiej sprzedają" },
                    { title: "Social Proof", desc: "Opinie, certyfikaty, liczba klientów" },
                    { title: "Promocje", desc: "Aktualne oferty i rabaty" },
                    { title: "Newsletter", desc: "Zbieranie leadów na przyszłość" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">{item.title}</span>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Pro Tip: Above the Fold</h4>
                    <p className="text-muted-foreground">
                      Wszystko, co najważniejsze, powinno być widoczne bez scrollowania. 
                      Logo, nawigacja, wyszukiwarka, koszyk i główny CTA muszą być widoczne od razu.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3 - Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <MousePointer className="w-8 h-8 text-primary" />
                3. Nawigacja i wyszukiwanie
              </h2>

              <p>
                Dobra nawigacja to fundament każdego sklepu. Użytkownik musi wiedzieć, gdzie jest 
                i jak dotrzeć do produktu, którego szuka.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Zasady skutecznej nawigacji:</h3>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Mega Menu dla dużych katalogów",
                    desc: "Przy wielu kategoriach użyj rozbudowanego menu z podglądami produktów"
                  },
                  {
                    title: "Breadcrumbs (okruszki)",
                    desc: "Pokaż użytkownikowi jego ścieżkę nawigacji"
                  },
                  {
                    title: "Sticky header",
                    desc: "Nawigacja powinna być zawsze dostępna podczas scrollowania"
                  },
                  {
                    title: "Inteligentne wyszukiwanie",
                    desc: "Autocomplete, sugestie, tolerancja błędów pisowni"
                  },
                  {
                    title: "Filtry i sortowanie",
                    desc: "Pozwól użytkownikom zawęzić wyniki do ich potrzeb"
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Optymalizacja wyszukiwarki:</h3>
              
              <p>
                <strong>30% użytkowników korzysta z wyszukiwarki</strong>, a ich współczynnik konwersji 
                jest nawet 2-3x wyższy niż użytkowników przeglądających kategorie. Zainwestuj w:
              </p>

              <ul className="space-y-2 my-4">
                <li>• Autocomplete z podglądem produktów</li>
                <li>• Wyszukiwanie po SKU, nazwie, opisie</li>
                <li>• Sugestie podobnych produktów przy braku wyników</li>
                <li>• Historia wyszukiwań użytkownika</li>
                <li>• Filtry w wynikach wyszukiwania</li>
              </ul>
            </motion.div>

            {/* Section 4 - Product Page */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                4. Strona produktu - serce konwersji
              </h2>

              <p>
                Strona produktu to miejsce, gdzie użytkownik podejmuje decyzję o zakupie. 
                Każdy element musi pracować na konwersję.
              </p>

              <div className="bg-card rounded-xl p-6 my-8">
                <h4 className="font-bold text-lg mb-4">Anatomia idealnej strony produktu:</h4>
                <div className="space-y-4">
                  {[
                    { section: "Galeria zdjęć", elements: "Wysokiej jakości zdjęcia, zoom, 360°, video" },
                    { section: "Informacje główne", elements: "Nazwa, cena, dostępność, warianty" },
                    { section: "CTA", elements: "Dodaj do koszyka - wyraźny, kontrastowy" },
                    { section: "Opis produktu", elements: "Korzyści, specyfikacja, materiały" },
                    { section: "Social Proof", elements: "Opinie, oceny, pytania i odpowiedzi" },
                    { section: "Cross-selling", elements: "Produkty powiązane, kupowane razem" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <span className="font-medium">{item.section}</span>
                        <p className="text-sm text-muted-foreground">{item.elements}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Zdjęcia produktów - best practices:</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Minimum 4-6 zdjęć z różnych kątów</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Funkcja zoom (minimum 2x powiększenie)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Zdjęcia lifestyle - produkt w użyciu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Video prezentujące produkt (wzrost konwersji o 80%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Widok 360° dla produktów premium</span>
                </li>
              </ul>
            </motion.div>

            {/* Section 5 - Cart & Checkout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <ShoppingCart className="w-8 h-8 text-primary" />
                5. Koszyk i checkout
              </h2>

              <p>
                <strong>70% koszyków jest porzucanych</strong>. Główne powody to ukryte koszty, 
                skomplikowany checkout i konieczność rejestracji. Oto jak temu zapobiec:
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Optymalizacja koszyka:</h3>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-card rounded-xl p-5">
                  <h4 className="font-bold text-primary mb-3">✓ TAK</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Podgląd koszyka bez przeładowania</li>
                    <li>• Jasna informacja o kosztach dostawy</li>
                    <li>• Łatwa edycja ilości produktów</li>
                    <li>• Zapisywanie koszyka dla zalogowanych</li>
                    <li>• Podpowiedzi do darmowej dostawy</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-5">
                  <h4 className="font-bold text-destructive mb-3">✗ NIE</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ukryte koszty do końca</li>
                    <li>• Wymuszanie logowania</li>
                    <li>• Skomplikowane usuwanie produktów</li>
                    <li>• Brak informacji o dostępności</li>
                    <li>• Nagłe zmiany cen</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Checkout - zasady:</h3>

              <div className="space-y-4 my-6">
                {[
                  {
                    rule: "Guest checkout",
                    desc: "Pozwól kupować bez rejestracji - zwiększa konwersję o 45%"
                  },
                  {
                    rule: "Progress indicator",
                    desc: "Pokaż użytkownikowi, na którym etapie jest"
                  },
                  {
                    rule: "Minimalna liczba pól",
                    desc: "Zbieraj tylko niezbędne dane"
                  },
                  {
                    rule: "Autouzupełnianie",
                    desc: "Wykorzystaj dane z poprzednich zamówień i adres z Google"
                  },
                  {
                    rule: "Wielość metod płatności",
                    desc: "BLIK, karty, PayU, Przelewy24, płatność przy odbiorze"
                  },
                  {
                    rule: "Trust badges",
                    desc: "Certyfikaty bezpieczeństwa, gwarancje, polityka zwrotów"
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold">{item.rule}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Section 6 - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                6. Mobile-first - obowiązek w 2025
              </h2>

              <p>
                <strong>Ponad 70% ruchu w e-commerce pochodzi z urządzeń mobilnych</strong>. 
                Projektowanie mobile-first to nie opcja, a konieczność.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <h4 className="font-bold mb-4">Kluczowe zasady mobile UX:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Przyciski min. 44x44px",
                    "Sticky Add to Cart button",
                    "Swipe gallery",
                    "Filtry w modal/drawer",
                    "Uproszczona nawigacja",
                    "One-tap checkout",
                    "Autofocus na wyszukiwarce",
                    "Lazy loading obrazów",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Performance = Konwersja</h3>
              
              <p>
                Każda sekunda opóźnienia ładowania strony zmniejsza konwersję o 7%. 
                Optymalizuj:
              </p>

              <ul className="space-y-2 my-4">
                <li>• Kompresja obrazów (WebP, AVIF)</li>
                <li>• Lazy loading</li>
                <li>• CDN dla statycznych zasobów</li>
                <li>• Minifikacja CSS/JS</li>
                <li>• Core Web Vitals (LCP, FID, CLS)</li>
              </ul>
            </motion.div>

            {/* Section 7 - Trust & Credibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
                7. Budowanie zaufania
              </h2>

              <p>
                W e-commerce nie ma fizycznego kontaktu z produktem ani sprzedawcą. 
                Musisz zbudować zaufanie przez design i content.
              </p>

              <div className="bg-card rounded-xl p-6 my-8">
                <h4 className="font-bold text-lg mb-4">Elementy budujące zaufanie:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-primary mb-2">Social Proof</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Opinie klientów ze zdjęciami</li>
                      <li>• Oceny produktów (gwiazdki)</li>
                      <li>• Liczba sprzedanych sztuk</li>
                      <li>• Referencje i case studies</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary mb-2">Bezpieczeństwo</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Certyfikat SSL (HTTPS)</li>
                      <li>• Loga metod płatności</li>
                      <li>• Gwarancja zwrotu pieniędzy</li>
                      <li>• Polityka prywatności</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary mb-2">Transparentność</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Jasna polityka zwrotów</li>
                      <li>• Wszystkie koszty z góry</li>
                      <li>• Czas i koszt dostawy</li>
                      <li>• Dane kontaktowe firmy</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary mb-2">Wsparcie</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Live chat</li>
                      <li>• FAQ</li>
                      <li>• Numer telefonu</li>
                      <li>• Szybkie odpowiedzi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Checklist Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 my-12"
            >
              <h3 className="text-2xl font-bold mb-6">
                Checklist UX/UI dla e-commerce
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Czas ładowania < 3 sekundy",
                  "Responsywny design mobile-first",
                  "Intuicyjna nawigacja i wyszukiwanie",
                  "Wysokiej jakości zdjęcia produktów",
                  "Jasne CTA na stronie produktu",
                  "Guest checkout dostępny",
                  "Wszystkie koszty widoczne od początku",
                  "Wielość metod płatności",
                  "Opinie i oceny produktów",
                  "Trust badges i certyfikaty",
                  "Live chat lub łatwy kontakt",
                  "Jasna polityka zwrotów",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                    <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
                Najczęściej zadawane pytania
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "Ile kosztuje redesign UX sklepu internetowego?",
                    a: "Koszt zależy od skali projektu. Audyt UX to zazwyczaj 3-8 tys. zł, a pełny redesign od 15 do 100+ tys. zł w zależności od wielkości sklepu i zakresu zmian."
                  },
                  {
                    q: "Jak szybko zobaczę efekty poprawy UX?",
                    a: "Pierwsze efekty (wzrost konwersji, spadek porzuceń) widać zazwyczaj w ciągu 2-4 tygodni od wdrożenia. Pełne dane do analizy to minimum 1-2 miesiące."
                  },
                  {
                    q: "Czy warto robić testy A/B?",
                    a: "Absolutnie tak! Testy A/B pozwalają podejmować decyzje na podstawie danych, nie intuicji. Nawet małe zmiany (kolor przycisku, tekst CTA) mogą znacząco wpłynąć na konwersję."
                  },
                  {
                    q: "Jaka platforma e-commerce ma najlepszy UX?",
                    a: "Shopify jest znane z dobrego UX out-of-the-box. WooCommerce daje więcej kontroli, ale wymaga więcej pracy. Najważniejsze to jak dostosujesz platformę do swoich klientów."
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-card rounded-xl p-6">
                    <h4 className="font-bold mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
                Podsumowanie
              </h2>

              <p>
                Dobry UX/UI w e-commerce to nie koszt, a inwestycja. Sklepy z przemyślanym 
                doświadczeniem użytkownika osiągają wyższe konwersje, większą wartość koszyka 
                i lepszą retencję klientów. Pamiętaj:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Projektuj dla użytkownika, nie dla siebie</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Testuj, mierz, optymalizuj - UX to proces ciągły</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Mobile-first to standard, nie opcja</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>Każda sekunda i kliknięcie się liczą</span>
                </li>
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 my-12 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Potrzebujesz audytu UX swojego sklepu?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Przeanalizujemy Twój sklep, zidentyfikujemy problemy i zaproponujemy 
                rozwiązania, które zwiększą konwersję.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/kontakt">
                    Zamów bezpłatną konsultację
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ecommerce-tworzenie-sklepu">
                    Zobacz ofertę e-commerce
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-between py-8 border-t border-border"
            >
              <span className="text-muted-foreground">Udostępnij artykuł:</span>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Related Services */}
      <div className="container-wide max-w-4xl">
        <RelatedServices services={servicesByCategory.ecommerce} />
      </div>

      {/* Related Articles */}
      <RelatedArticles currentArticleId="ux-ui-ecommerce" />
    </Layout>
  );
}