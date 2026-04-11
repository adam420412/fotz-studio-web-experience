import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Zap, Mail, BarChart2, Settings, CheckCircle, ArrowRight, Lightbulb, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Co to jest marketing automation?",
    answer:
      "Marketing automation to wykorzystanie oprogramowania do automatycznego wykonywania powtarzalnych zadań marketingowych — wysyłki e-maili, segmentacji kontaktów, scoringu leadów, publikowania postów w social media czy powiadomień push. System działa na podstawie zdefiniowanych reguł (triggerów) i przepływów pracy (workflows), reagując na zachowanie użytkowników.",
  },
  {
    question: "Czy marketing automation jest dla małych firm?",
    answer:
      "Tak! Choć marketing automation kojarzył się kiedyś z dużymi korporacjami, dziś narzędzia takie jak Mailchimp, ActiveCampaign czy MailerLite są przystępne cenowo i łatwe w obsłudze nawet dla jednoosobowych firm. Już prosty autoresponder e-mail czy automatyczne powitanie nowego subskrybenta to marketing automation.",
  },
  {
    question: "Jakie narzędzia marketing automation są popularne w Polsce?",
    answer:
      "Najczęściej używane w Polsce narzędzia to: GetResponse (polska firma, kompleksowa platforma), ActiveCampaign (zaawansowane workflows), HubSpot (CRM + marketing, wersja free dostępna), Mailchimp (prosty e-mail marketing), SALESmanago (dla e-commerce) oraz Klaviyo (dedykowany e-commerce). Wybór zależy od skali działalności i budżetu.",
  },
  {
    question: "Ile kosztuje marketing automation?",
    answer:
      "Koszty zależą od narzędzia i liczby kontaktów w bazie. Mailchimp i GetResponse oferują darmowe plany do kilku tysięcy kontaktów. Płatne plany zaczynają się od ok. 50–150 zł/mies. dla małych baz, a enterprise'owe rozwiązania (HubSpot Marketing Hub, SALESmanago) kosztują kilka–kilkanaście tysięcy złotych miesięcznie.",
  },
  {
    question: "Czym jest lead nurturing?",
    answer:
      "Lead nurturing to automatyczny proces budowania relacji z potencjalnym klientem, który jeszcze nie jest gotowy do zakupu. Polega na wysyłaniu serii wartościowych e-maili, edukowaniu leada o problemie i rozwiązaniu, stopniowym budowaniu zaufania i gotowości zakupowej. Dobrze zaprojektowany nurturing znacząco zwiększa konwersję leadów na klientów.",
  },
  {
    question: "Jak marketing automation wpływa na ROI?",
    answer:
      "Firmy stosujące marketing automation generują średnio o 451% więcej kwalifikowanych leadów (wg Annuitas) i skracają cykl sprzedażowy o 25–30%. Automatyzacja redukuje też koszty pracy — to, co manualnie zajmowało kilka godzin tygodniowo, dzieje się automatycznie. ROI zależy od branży, ale zwykle firma odczuwa pozytywne efekty już po 3–6 miesiącach wdrożenia.",
  },
];

const BlogMarketingAutomation = () => {
  return (
    <Layout>
      <SEOHead
        title="Marketing Automation — co to jest i jak wdrożyć? | Fotz Studio Blog"
        description="Marketing automation — co to jest, jak działa i jak wdrożyć w małej i średniej firmie? Narzędzia, przykłady, koszty i gotowe scenariusze automatyzacji marketingu."
        canonical="https://fotz.pl/blog/marketing-automation"
        ogTitle="Marketing Automation — przewodnik po automatyzacji marketingu"
        ogDescription="Czym jest marketing automation i jak go wdrożyć? Narzędzia, koszty, przykłady workflows dla e-maila, CRM i social media."
      />
      <ArticleSchema
        title="Marketing Automation — co to jest i jak wdrożyć?"
        description="Kompletny przewodnik po marketing automation. Narzędzia, scenariusze, koszty i najlepsze praktyki dla firm z każdej branży."
        author="Fotz Studio"
        datePublished="2026-03-20"
        url="https://fotz.pl/blog/marketing-automation"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Marketing Automation", url: "https://fotz.pl/blog/marketing-automation" },
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
              Marketing
            </span>
            <span className="bg-muted text-muted-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
              Automatyzacja
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Marketing Automation — co to jest i jak wdrożyć automatyzację marketingu w firmie?
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground border-b border-border/50 pb-6">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> Fotz Studio
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> 20 marca 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 10 min czytania
            </span>
          </div>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Marketing automation to nie science-fiction — to konkretne narzędzie, które
            oszczędza czas, zwiększa konwersję i pozwala docierać do klientów z właściwym
            komunikatem we właściwym momencie. Dowiedz się, jak to działa i jak zacząć.
          </p>
        </header>

        {/* TOC */}
        <div className="bg-muted/40 border border-border/50 rounded-xl p-6 mb-10">
          <h2 className="font-semibold text-foreground mb-3">Spis treści</h2>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li><a href="#co-to-jest" className="hover:text-primary transition-colors">Co to jest marketing automation?</a></li>
            <li><a href="#jak-dziala" className="hover:text-primary transition-colors">Jak działa automatyzacja marketingu?</a></li>
            <li><a href="#scenariusze" className="hover:text-primary transition-colors">Najpopularniejsze scenariusze (workflows)</a></li>
            <li><a href="#narzedzia" className="hover:text-primary transition-colors">Narzędzia marketing automation</a></li>
            <li><a href="#email-automation" className="hover:text-primary transition-colors">Automatyzacja e-mail marketingu</a></li>
            <li><a href="#lead-nurturing" className="hover:text-primary transition-colors">Lead nurturing — jak budować relację?</a></li>
            <li><a href="#koszty" className="hover:text-primary transition-colors">Koszty wdrożenia</a></li>
            <li><a href="#jak-zaczac" className="hover:text-primary transition-colors">Jak zacząć — pierwsze kroki</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
          </ol>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">

          <section id="co-to-jest">
            <h2 className="text-2xl font-bold text-foreground mb-4">Co to jest marketing automation?</h2>
            <p>
              <strong className="text-foreground">Marketing automation</strong> (po polsku:
              automatyzacja marketingu) to wykorzystanie oprogramowania do automatycznego
              wykonywania powtarzalnych zadań marketingowych na podstawie zdefiniowanych
              reguł i zachowania użytkowników.
            </p>
            <p>
              Przykład: gdy potencjalny klient pobierze e-booka z Twojej strony, system
              automatycznie wyśle mu e-mail z podziękowaniem, następnie po 2 dniach — wskazówki
              dotyczące tematu e-booka, a po tygodniu — ofertę produktu powiązanego z jego
              zainteresowaniami. Wszystko bez Twojej ręcznej interwencji.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground block mb-1">Kluczowa zasada</strong>
                  <p className="text-sm">
                    Marketing automation nie zastępuje ludzkiego marketingu — on go wzmacnia.
                    Twoje pomysły i strategia zostają; automatyzacja przejmuje wykonanie
                    powtarzalnych czynności, które pochłaniają czas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="jak-dziala">
            <h2 className="text-2xl font-bold text-foreground mb-4">Jak działa automatyzacja marketingu?</h2>
            <p>
              System marketing automation działa w oparciu o trzy elementy:
            </p>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              {[
                {
                  icon: Zap,
                  title: "Trigger (wyzwalacz)",
                  desc: "Zdarzenie uruchamiające automatyzację — np. zapis na newsletter, kliknięcie w link, odwiedzenie podstrony, porzucenie koszyka.",
                },
                {
                  icon: Settings,
                  title: "Warunki",
                  desc: "Reguły definiujące, kiedy co się dzieje — np. 'jeśli klient otworzył e-mail, ale nie kliknął, wyślij follow-up po 3 dniach'.",
                },
                {
                  icon: Mail,
                  title: "Akcja",
                  desc: "To, co system robi automatycznie — wysyłka e-maila, SMS, powiadomienia push, aktualizacja tagu w CRM, przypisanie do segmentu.",
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
              Te trzy elementy łączone w{" "}
              <strong className="text-foreground">przepływy pracy (workflows)</strong> tworzą
              kompleksowe ścieżki komunikacji z klientem. Nowoczesne systemy potrafią zarządzać
              setkami takich ścieżek jednocześnie, personalizując przekaz dla każdego kontaktu.
            </p>
          </section>

          <section id="scenariusze">
            <h2 className="text-2xl font-bold text-foreground mb-4">Najpopularniejsze scenariusze marketing automation</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">1. Powitanie nowego subskrybenta (Welcome sequence)</h3>
            <p>
              Gdy ktoś zapisuje się na newsletter — automatycznie dostaje serię 3–5 e-maili:
              powitanie + wartościowy content → historia i misja firmy → najważniejsze zasoby/produkty
              → oferta specjalna dla nowych → zaproszenie do dalszej interakcji.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2. Porzucony koszyk (e-commerce)</h3>
            <p>
              Klient dodał produkt do koszyka, ale nie kupił. System automatycznie wysyła:
              po 1 godzinie — przypomnienie o koszyku, po 24 godzinach — social proof (opinie),
              po 48 godzinach — ograniczona czasowo zniżka. Skuteczność: 10–15% powrotu do zakupu.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3. Lead scoring i przekazanie do sprzedaży</h3>
            <p>
              System przyznaje punkty za aktywność (otwarcie e-maila = 1 pkt, kliknięcie = 3 pkt,
              odwiedzenie strony cennika = 10 pkt). Gdy lead osiągnie próg (np. 50 pkt), system
              automatycznie powiadamia handlowca i tworzy zadanie w CRM.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4. Re-engagement nieaktywnych kontaktów</h3>
            <p>
              Kontakty, które nie otwierały e-maili przez 6 miesięcy, dostają specjalną sekwencję
              re-engagement. Jeśli nie reagują — są automatycznie przenoszone do osobnej listy lub
              usuwane z aktywnej bazy (co chroni wskaźniki dostarczalności).
            </p>
          </section>

          <section id="narzedzia">
            <h2 className="text-2xl font-bold text-foreground mb-4">Narzędzia marketing automation — porównanie</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 border border-border/40 font-semibold text-foreground">Narzędzie</th>
                    <th className="text-left p-3 border border-border/40 font-semibold text-foreground">Cena (start)</th>
                    <th className="text-left p-3 border border-border/40 font-semibold text-foreground">Dla kogo</th>
                    <th className="text-left p-3 border border-border/40 font-semibold text-foreground">Mocna strona</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["GetResponse", "Darmowy / od 50 zł/mies.", "MŚP, e-commerce", "Polska firma, świetny e-mail"],
                    ["ActiveCampaign", "od ~120 zł/mies.", "Zaawansowani", "Złożone workflows, CRM"],
                    ["HubSpot", "Darmowy / od 500 zł/mies.", "B2B, startupy", "All-in-one CRM + marketing"],
                    ["Mailchimp", "Darmowy / od 60 zł/mies.", "Mikrofirmy", "Prostota, e-mail"],
                    ["SALESmanago", "od 2 000 zł/mies.", "Duży e-commerce", "AI, personalizacja"],
                    ["Klaviyo", "Darmowy / od 150 zł/mies.", "E-commerce", "SMS + e-mail, segmentacja"],
                  ].map(([tool, price, for_, strength]) => (
                    <tr key={tool} className="even:bg-muted/30">
                      <td className="p-3 border border-border/40 text-foreground font-medium">{tool}</td>
                      <td className="p-3 border border-border/40">{price}</td>
                      <td className="p-3 border border-border/40">{for_}</td>
                      <td className="p-3 border border-border/40">{strength}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="email-automation">
            <h2 className="text-2xl font-bold text-foreground mb-4">Automatyzacja e-mail marketingu</h2>
            <p>
              <strong className="text-foreground">E-mail automation</strong> to najpopularniejszy
              rodzaj marketing automation — i jeden z najskuteczniejszych. Wskaźnik ROI dla
              e-mail marketingu wynosi średnio 42:1 (Litmus, 2023), a automatyczne e-maile
              osiągają 70,5% wyższy open rate niż masowe wysyłki.
            </p>
            <p>Kluczowe typy automatycznych e-maili:</p>
            <ul className="space-y-2 my-5">
              {[
                "Welcome e-mail — natychmiast po zapisie na newsletter lub rejestracji",
                "Confirmation e-mail — potwierdzenie zakupu, rezerwacji, wypełnienia formularza",
                "Transakcyjne e-maile — paragon, faktura, status zamówienia",
                "Behavioral triggers — e-mail wysyłany po konkretnym zachowaniu (np. odwiedzenie strony cennika)",
                "Birthday/anniversary — automatyczne życzenia z ofertą specjalną",
                "Winback campaign — próba odzyskania nieaktywnych klientów",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="lead-nurturing">
            <h2 className="text-2xl font-bold text-foreground mb-4">Lead nurturing — jak budować relację z potencjalnym klientem?</h2>
            <p>
              <strong className="text-foreground">Lead nurturing</strong> to automatyczny
              proces „dojrzewania" leada — prowadzenia go przez lejek sprzedażowy od momentu,
              gdy jeszcze nie jest gotowy do zakupu, do momentu decyzji.
            </p>
            <p>
              Badania pokazują, że{" "}
              <strong className="text-foreground">79% leadów nigdy nie dokonuje zakupu</strong>{" "}
              z powodu braku odpowiedniego nurturingu. Firmy, które inwestują w lead nurturing,
              generują o 50% więcej gotowych do zakupu leadów przy 33% niższych kosztach.
            </p>
            <div className="bg-card border border-border/60 rounded-xl p-6 my-6">
              <h3 className="font-bold text-foreground mb-4">Przykładowa sekwencja nurturingowa (B2B)</h3>
              <div className="space-y-3">
                {[
                  { day: "Dzień 0", action: "Lead pobiera whitepaper → natychmiastowy e-mail z linkiem + potwierdzenie" },
                  { day: "Dzień 2", action: "E-mail: case study firmy z podobnej branży (budowanie zaufania)" },
                  { day: "Dzień 5", action: "E-mail: artykuł o typowych problemach w branży leada" },
                  { day: "Dzień 10", action: "E-mail: porównanie rozwiązań (Twoje vs. konkurencja)" },
                  { day: "Dzień 15", action: "E-mail: zaproszenie na webinar lub bezpłatną konsultację" },
                  { day: "Dzień 21", action: "Jeśli lead nie otwierał → inny temat/podejście; jeśli aktywny → przekazanie do handlowca" },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded shrink-0 mt-0.5">
                      {step.day}
                    </span>
                    <span className="text-sm">{step.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="koszty">
            <h2 className="text-2xl font-bold text-foreground mb-4">Koszty wdrożenia marketing automation</h2>
            <p>
              Całkowity koszt marketing automation składa się z kilku elementów:
            </p>
            <ul className="space-y-3 my-5">
              {[
                {
                  item: "Licencja na narzędzie",
                  cost: "50–5 000 zł/mies. (zależy od skali i funkcji)",
                },
                {
                  item: "Wdrożenie i konfiguracja",
                  cost: "1 000–10 000 zł jednorazowo (jeśli korzystasz z agencji)",
                },
                {
                  item: "Tworzenie treści (e-maile, landing pages)",
                  cost: "500–3 000 zł miesięcznie lub własne zasoby",
                },
                {
                  item: "Szkolenie zespołu",
                  cost: "Wliczone w wdrożenie lub bezpłatne webinary producenta",
                },
                {
                  item: "Utrzymanie i optymalizacja",
                  cost: "Kilka godzin miesięcznie lub zewnętrzna agencja",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BarChart2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">{item.item}:</strong>{" "}
                    {item.cost}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              Dla małych firm zaczynających przygodę z automatyzacją, realistyczny budżet startowy
              to <strong className="text-foreground">200–500 zł miesięcznie</strong> (narzędzie +
              podstawowe treści). Przy większej skali i zaawansowanych scenariuszach budżet rośnie,
              ale ROI rośnie proporcjonalnie szybciej.
            </p>
          </section>

          <section id="jak-zaczac">
            <h2 className="text-2xl font-bold text-foreground mb-4">Jak zacząć z marketing automation — pierwsze kroki</h2>
            <div className="space-y-5 my-6">
              {[
                {
                  step: "1",
                  title: "Zdefiniuj cel",
                  desc: "Co chcesz osiągnąć? Więcej leadów, wyższy open rate, krótszy cykl sprzedaży? Konkretny cel wyznacza zakres automatyzacji.",
                },
                {
                  step: "2",
                  title: "Wybierz jedno narzędzie",
                  desc: "Zacznij od jednego — najlepiej pasującego do Twojego budżetu i potrzeb. Mailchimp lub GetResponse to bezpieczny wybór na start.",
                },
                {
                  step: "3",
                  title: "Zbuduj pierwszy workflow",
                  desc: "Prosty welcome e-mail dla nowych subskrybentów to idealny punkt startowy. Jeden trigger, jedna akcja — nie przekombinuj.",
                },
                {
                  step: "4",
                  title: "Mierz i optymalizuj",
                  desc: "Analizuj open rate, CTR, konwersję. A/B testuj tematy e-maili, timing wysyłki i treść CTA. Optymalizuj co miesiąc.",
                },
                {
                  step: "5",
                  title: "Rozszerzaj stopniowo",
                  desc: "Gdy pierwszy workflow działa, dodaj kolejny (np. sekwencja porzuconego koszyka). Buduj kompleksowy system krok po kroku.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0 text-primary-foreground font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-foreground mb-6">FAQ — marketing automation</h2>
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
              Chcesz wdrożyć automatyzację marketingu w swojej firmie?
            </h2>
            <p className="text-muted-foreground mb-6">
              Pomożemy dobrać narzędzia, zaprojektować workflows i wdrożyć system
              marketing automation dopasowany do Twoich potrzeb.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <Link to="/kontakt">
                  Skonsultuj się bezpłatnie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/uslugi/social-media">
                  Nasze usługi marketingowe
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-16 border-t border-border/50 pt-10">
          <RelatedServices services={servicesByCategory.ads} />
        </div>
        <div className="mt-10">
          <RelatedArticles currentArticleId="marketing-automation" />
        </div>
      </article>
    </Layout>
  );
};

export default BlogMarketingAutomation;
