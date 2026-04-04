import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, PenTool, Target, Zap, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";

const faqItems = [
  {
    question: "Jak długi powinien być headline na landing page?",
    answer: "Optymalnie 6-12 słów. Headline musi natychmiast komunikować wartość i odpowiadać na pytanie 'Co z tego będę miał?'. Testuj krótsze (5-7 słów) vs dłuższe (10-15 słów) - wyniki zależą od branży."
  },
  {
    question: "Ile CTA powinno być na landing page?",
    answer: "Jeden główny CTA powtórzony kilka razy (w hero, po sekcji korzyści, na końcu). Unikaj wielu różnych CTA - to rozprasza. Wyjątek: secondary CTA dla niezdecydowanych (np. 'Dowiedz się więcej')."
  },
  {
    question: "Czy powinienem pisać 'Ty' czy 'Wy' do klientów?",
    answer: "W B2C zazwyczaj 'Ty' (bardziej osobiste). W B2B często 'Wy' lub bezosobowo. Najważniejsza jest konsekwencja i dopasowanie do persony. Zawsze pisz z perspektywy klienta, nie firmy."
  },
  {
    question: "Jak pisać o cenach na landing page?",
    answer: "Zawsze pokazuj wartość przed ceną. Używaj kotwiczenia (przekreślona wyższa cena), framing ('tylko 3 zł dziennie'), social proof ('wybrane przez 5000 firm'). Cena bez kontekstu wartości to błąd."
  },
  {
    question: "Co to jest power words i jak ich używać?",
    answer: "Power words to słowa wywołujące emocje: 'natychmiast', 'bezpłatny', 'ekskluzywny', 'gwarancja', 'sprawdzony'. Używaj w headlines, CTA i bullet points. Nie przesadzaj - 2-3 na sekcję wystarczy."
  }
];

export default function BlogCopywritingLanding() {
  return (
    <Layout>
      <SEOHead
        title="Copywriting dla landing pages - jak pisać teksty, które konwertują | FOTZ Studio"
        description="Copywriting dla landing pages: headlines, CTA, bullet points, social proof. Praktyczny poradnik pisania tekstów, które zwiększają konwersję."
        canonical="https://fotz.pl/content-marketing/copywriting-landing"
        keywords="copywriting landing page, jak pisać landing page, teksty na stronę, headline, CTA, konwersja"
      />
      <ArticleSchema
        title="Copywriting dla landing pages - jak pisać teksty, które konwertują"
        description="Copywriting dla landing pages: headlines, CTA, bullet points, social proof. Praktyczny poradnik pisania tekstów."
        url="https://fotz.pl/blog/copywriting-landing-page"
        datePublished="2025-01-04"
        dateModified="2026-01-09"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Copywriting Landing Page", url: "https://fotz.pl/blog/copywriting-landing-page" },
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
              Copywriting dla landing pages - jak pisać teksty, które konwertują
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Headlines, CTA, bullet points, social proof. Poznaj sprawdzone formuły copywritingu, które zamieniają odwiedzających w klientów.
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
                16 min czytania
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
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073"
              alt="Copywriting dla landing pages"
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
                <PenTool className="w-6 h-6 text-primary" />
                Zasady copywritingu konwersyjnego
              </h2>
              <p>
                <strong>Copywriting dla landing pages</strong> to sztuka pisania tekstów, które prowadzą 
                do działania. Nie chodzi o piękne słowa - chodzi o konwersję. Dobry copy odpowiada na 
                pytania odwiedzającego: <em>Co to jest? Dla kogo? Dlaczego powinienem to chcieć?</em> Skuteczny copy wspiera <Link to="/content-marketing" className="text-primary hover:underline">content marketing</Link> i zwiększa efektywność <Link to="/kampanie-reklamowe" className="text-primary hover:underline">kampanii reklamowych</Link>.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold mb-3 mt-0">🎯 Złota zasada copywritingu</h3>
                <p className="text-lg mb-0">
                  <strong>Pisz o korzyściach, nie o cechach.</strong><br />
                  Zamiast: "Nasz CRM ma 50 integracji"<br />
                  Pisz: "Oszczędź 10 godzin tygodniowo dzięki automatyzacji"
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Headline - masz 3 sekundy
              </h2>
              <p>
                Headline to najważniejszy element strony. 80% odwiedzających czyta tylko nagłówek. 
                Musi natychmiast komunikować wartość i zatrzymać uwagę.
              </p>

              <h3>Formuły skutecznych headlines</h3>
              
              <div className="space-y-4 my-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-bold mb-1">1. Formuła korzyści</p>
                  <p className="text-sm text-muted-foreground mb-2">[Osiągnij rezultat] bez [problemu/wysiłku]</p>
                  <p className="text-primary">"Zwiększ sprzedaż o 30% bez zwiększania budżetu reklamowego"</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-bold mb-1">2. Formuła "How to"</p>
                  <p className="text-sm text-muted-foreground mb-2">Jak [osiągnąć cel] w [czas/kroki]</p>
                  <p className="text-primary">"Jak zbudować listę mailingową 10 000 subskrybentów w 90 dni"</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-bold mb-1">3. Formuła pytania</p>
                  <p className="text-sm text-muted-foreground mb-2">Pytanie dotykające problemu odbiorcy</p>
                  <p className="text-primary">"Masz dość tracenia leadów przez wolną stronę?"</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-bold mb-1">4. Formuła dowodu</p>
                  <p className="text-sm text-muted-foreground mb-2">Liczba/rezultat + co osiągnęli</p>
                  <p className="text-primary">"5000 firm zwiększyło konwersję średnio o 47%"</p>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                CTA - wezwanie do działania
              </h2>
              <p>
                CTA (Call-to-Action) to przycisk lub link, który prowadzi do konwersji. 
                Słabe CTA = słaba konwersja, niezależnie od reszty strony.
              </p>

              <h3>Zasady skutecznego CTA</h3>
              <ul>
                <li><strong>Konkretność</strong> - "Pobierz darmowy ebook" zamiast "Wyślij"</li>
                <li><strong>Korzyść</strong> - "Zacznij oszczędzać" zamiast "Zarejestruj się"</li>
                <li><strong>Pilność</strong> - "Odbierz 20% rabatu dziś" zamiast "Kup teraz"</li>
                <li><strong>Pierwsza osoba</strong> - "Chcę zwiększyć sprzedaż" zamiast "Zwiększ sprzedaż"</li>
              </ul>

              <div className="bg-card border border-border rounded-xl p-6 my-8">
                <h4 className="font-bold mb-4">Przykłady CTA - słabe vs mocne:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="line-through text-muted-foreground">Wyślij</span>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-primary">Wyślij i odbierz wycenę w 24h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="line-through text-muted-foreground">Zarejestruj się</span>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-primary">Zacznij 14-dniowy trial za darmo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="line-through text-muted-foreground">Dowiedz się więcej</span>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-primary">Zobacz, jak to działa (2 min video)</span>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                Bullet points - skanowalne korzyści
              </h2>
              <p>
                Większość ludzi skanuje strony, nie czyta. Bullet points pozwalają szybko 
                komunikować kluczowe korzyści. Używaj ich w sekcjach "Co zyskujesz" i opisach produktów.
              </p>

              <h3>Formuła skutecznych bullet points</h3>
              <p>Każdy punkt = <strong>Cecha → Korzyść → Rezultat</strong></p>

              <div className="bg-card border border-border rounded-lg p-6 my-6">
                <h4 className="font-bold mb-3">Przykład dla CRM:</h4>
                <ul className="space-y-2 mb-0">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Automatyczne follow-upy</strong> - nigdy nie zapomnisz o leadzie, zamkniesz o 40% więcej deali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Integracja z mailem</strong> - cała historia rozmów w jednym miejscu, oszczędzasz 2h dziennie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Raporty w czasie rzeczywistym</strong> - widzisz co działa, podejmujesz lepsze decyzje</span>
                  </li>
                </ul>
              </div>

              <h2 className="flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-primary" />
                Social proof - buduj zaufanie
              </h2>
              <p>
                92% konsumentów czyta opinie przed zakupem. Social proof zmniejsza ryzyko 
                i buduje zaufanie. Używaj konkretnych liczb i nazwisk.
              </p>

              <h3>Rodzaje social proof:</h3>
              <ol>
                <li><strong>Testimoniale</strong> - cytaty klientów z imieniem, zdjęciem, firmą</li>
                <li><strong>Case studies</strong> - szczegółowe historie sukcesu z liczbami</li>
                <li><strong>Logotypy klientów</strong> - "Zaufali nam: [logo] [logo] [logo]"</li>
                <li><strong>Liczby</strong> - "10 000+ klientów", "4.9/5 z 500 opinii"</li>
                <li><strong>Media/Nagrody</strong> - "Featured in Forbes", "Winner of..."</li>
                <li><strong>Certyfikaty</strong> - Google Partner, ISO, branżowe</li>
              </ol>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <h4 className="font-bold mb-3">Formuła silnego testimonialu:</h4>
                <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
                  "Przed współpracą z FOTZ nasza strona generowała 10 zapytań miesięcznie. 
                  Po redesignie i kampanii SEO mamy <strong>85 zapytań miesięcznie</strong>. 
                  Zwrot z inwestycji w pierwszym roku: 340%."
                </blockquote>
                <p className="text-sm mb-0">
                  — <strong>Jan Kowalski</strong>, CEO, Firma XYZ
                </p>
              </div>

              <h2>Struktura copy na landing page</h2>
              <ol>
                <li><strong>Hero</strong> - Headline + Subheadline + CTA + Social proof</li>
                <li><strong>Problem</strong> - Opisz ból odbiorcy (empathy map)</li>
                <li><strong>Rozwiązanie</strong> - Twój produkt jako odpowiedź</li>
                <li><strong>Korzyści</strong> - Bullet points z konkretnymi rezultatami</li>
                <li><strong>Jak to działa</strong> - 3-5 prostych kroków</li>
                <li><strong>Social proof</strong> - Testimoniale, case studies</li>
                <li><strong>Cennik</strong> - Opcje z kotwiczeniem</li>
                <li><strong>FAQ</strong> - Odpowiedzi na obiekcje</li>
                <li><strong>Final CTA</strong> - Ostatnie wezwanie do działania</li>
              </ol>

              <h2>Błędy copywritingu, których unikaj</h2>
              <ol>
                <li><strong>Pisanie o sobie</strong> - "Jesteśmy liderem..." zamiast "Zyskujesz..."</li>
                <li><strong>Żargon branżowy</strong> - Pisz tak, jak mówi Twój klient</li>
                <li><strong>Brak konkretów</strong> - "Wysoka jakość" → "Gwarancja 5 lat"</li>
                <li><strong>Za dużo tekstu</strong> - Każde słowo musi pracować</li>
                <li><strong>Słabe CTA</strong> - "Wyślij" to nie CTA, to instrukcja</li>
                <li><strong>Brak pilności</strong> - Dlaczego mam działać teraz?</li>
              </ol>

              <h2>FAQ - Najczęściej zadawane pytania</h2>
              
              {faqItems.map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}

              <h2>Podsumowanie</h2>
              <p>
                Copywriting dla landing pages to nauka, nie sztuka. Skuteczny copy opiera się na 
                sprawdzonych formułach: headlines komunikujące wartość, CTA z korzyścią, 
                bullet points z rezultatami i social proof budujący zaufanie.
              </p>
              <p>
                Pamiętaj: zawsze pisz z perspektywy klienta. Nie "co my robimy", ale "co Ty zyskujesz". 
                Testuj różne wersje, analizuj dane i optymalizuj. Małe zmiany w copy mogą przynieść 
                duże wzrosty konwersji.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 my-8 text-center">
                <h3 className="text-xl font-bold mb-4 mt-0">Potrzebujesz landing page, który konwertuje?</h3>
                <p className="mb-6">
                  Zaprojektujemy i napiszemy landing page zoptymalizowany pod konwersję dla Twojego biznesu.
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
            <RelatedServices services={servicesByCategory.contentMarketing} />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles currentArticleId="copywriting-landing-page" />
    </Layout>
  );
}
