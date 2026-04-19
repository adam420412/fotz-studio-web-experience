import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest analiza sentymentu?",
    answer:
      "Analiza sentymentu (sentiment analysis) to technika NLP (Natural Language Processing) klasyfikująca tekst jako pozytywny, negatywny lub neutralny — automatycznie, na dużą skalę. Pozwala firmom zrozumieć emocje i opinie wyrażone w recenzjach, social media, ankietach i wiadomościach supportu bez ręcznego czytania tysięcy tekstów. Sentyment to jeden z kluczowych sygnałów brand health i customer experience.",
  },
  {
    question: "Jak działa analiza sentymentu?",
    answer:
      "Trzy główne podejścia: 1) Lexicon-based — słowniki słów z przypisanym sentymentem (pozytywne: 'świetny', 'pomocny'; negatywne: 'okropny', 'bezużyteczny') — prosta, nie wymaga trenowania. 2) Machine Learning — model trenowany na oznaczonych danych (BoW, TF-IDF, klasyczne ML). 3) Deep Learning / Transformers — BERT, GPT-based modele rozumiejące kontekst i ironię. Nowoczesne narzędzia łączą podejścia, dając accuracy 85-95% dla standardowego tekstu.",
  },
  {
    question: "Co to jest aspect-based sentiment analysis?",
    answer:
      "Aspect-based sentiment analysis (ABSA) to zaawansowana forma analizy sentymentu rozkładająca tekst na konkretne aspekty i określająca sentyment dla każdego osobno. Przykład recenzji restauracji: 'Jedzenie było pyszne, ale obsługa okropna' → standardowy sentyment: mieszany. ABSA: aspekt 'jedzenie' = pozytywny, aspekt 'obsługa' = negatywny. Dla produktów: 'UI intuicyjne, ale API bardzo wolne' → UI pozytywny, performance negatywny. ABSA dostarcza actionable insights których standardowy sentyment nie daje.",
  },
  {
    question: "Jakie są zastosowania analizy sentymentu w marketingu?",
    answer:
      "Zastosowania: Brand monitoring (śledzenie sentymentu wobec marki w czasie), Product feedback analysis (automatyczne kategoryzowanie recenzji G2, App Store, Allegro), Customer support prioritization (negatywne tickety automatycznie eskalowane), Campaign performance (jak zmienia się sentyment podczas i po kampanii), Competitor analysis (sentyment wobec konkurencji), Social listening (trendy w mediach społecznościowych), Crisis detection (nagły wzrost negatywnego sentymentu = alert).",
  },
  {
    question: "Jakie są ograniczenia analizy sentymentu?",
    answer:
      "Główne ograniczenia: Ironia i sarkazm ('Świetny produkt, naprawdę!' — model może odczytać jako pozytywny), Kontekst kulturowy i językowy (sentyment w polskim tekście vs angielskim różni się), Emojis i slang (wymagają specjalnych modeli), Domain-specific language (sentyment w finansach vs social media różny), Wieloznaczność ('To nie jest złe' — negacja zdania negatywnego). Accuracy spada znacząco przy krótkich tekstach (tweety) i tekstach specjalistycznych.",
  },
];

const sentimentCategories = [
  { kategoria: "Pozytywny", przykłady: ["Produkt świetny", "Obsługa pomocna", "Polecam wszystkim", "Jestem zachwycony"], score: "+1 / High", kolor: "green" },
  { kategoria: "Neutralny", przykłady: ["Produkt dostarczony", "Zaktualizowaliśmy wersję", "Kontaktowałem się w tej sprawie", "Twój ticket jest w kolejce"], score: "0 / Medium", kolor: "slate" },
  { kategoria: "Negatywny", przykłady: ["Rozczarowany jakością", "Nieakceptowalna obsługa", "Nie spełnia oczekiwań", "Żądam zwrotu"], score: "-1 / Low", kolor: "red" },
];

const sentimentUseCases = [
  { przypadek: "Brand Monitoring", opis: "Automatyczna analiza wzmianek w social media i mediach — trend sentymentu jako barometr zdrowia marki", narzędzia: "Brand24, Brandwatch, Talkwalker" },
  { przypadek: "Review Analysis", opis: "Analiza recenzji produktów na G2, App Store, Allegro — identyfikacja wzorców bez ręcznego czytania", narzędzia: "ReviewTrackers, Yotpo, Trustpilot Analytics" },
  { przypadek: "Support Ticket Prioritization", opis: "Automatyczne flagowanie negatywnych i pilnych ticketów do natychmiastowej reakcji", narzędzia: "Zendesk AI, Intercom, Freshdesk ML" },
  { przypadek: "Campaign Measurement", opis: "Porównanie sentymentu przed/w trakcie/po kampanii — efekt na brand perception", narzędzia: "Brandwatch, Semrush, Sprout Social" },
  { przypadek: "Voice of Customer", opis: "Synteza feedbacku z wielu źródeł (ankiety, chats, reviews) w jeden obraz", narzędzia: "Medallia, Qualtrics, HubSpot" },
];

const colorMapSentiment: Record<string, string> = {
  green: "bg-green-50 border-green-200",
  slate: "bg-slate-50 border-slate-200",
  red: "bg-red-50 border-red-200",
};

export default function BlogSentimentAnalysisCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Analiza Sentymentu — co to jest? Sentiment Analysis w marketingu"
        description="Analiza sentymentu (sentiment analysis) — definicja, jak działa NLP, aspect-based sentiment, zastosowania w marketingu i ograniczenia. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/analiza-sentymentu-co-to"

        keywords="Analiza Sentymentu co to jest, Analiza Sentymentu definicja, czym jest Analiza Sentymentu, Analiza Sentymentu w marketingu, Analiza Sentymentu przykłady, jak działa Analiza Sentymentu, Analiza Sentymentu strategia"

        canonical="https://fotz.pl/blog/analiza-sentymentu-co-to"
      />
      <ArticleSchema
        title="Analiza Sentymentu — co to jest i jak działa sentiment analysis?"
        description="Kompletny przewodnik po analizie sentymentu: jak działa NLP, aspect-based sentiment analysis, 5 zastosowań marketingowych i ograniczenia."
        url="https://fotz.pl/blog/analiza-sentymentu-co-to"
        datePublished="2024-02-02"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Analiza Sentymentu", url: "https://fotz.pl/blog/analiza-sentymentu-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Analiza Sentymentu" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Analiza Sentymentu — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Sentiment analysis pozwala automatycznie mierzyć emocje w tekście na dużą skalę.
            Poznaj jak działa NLP, aspect-based sentiment i 5 zastosowań w marketingu.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest analiza sentymentu?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Analiza sentymentu</strong> (sentiment analysis) to technika NLP (Natural Language Processing)
              która automatycznie klasyfikuje tekst jako pozytywny, negatywny lub neutralny.
              Pozwala firmom rozumieć opinie i emocje klientów w recenzjach, social media i wiadomościach
              — bez ręcznego czytania tysięcy tekstów.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              W erze masowych danych tekstowych analiza sentymentu stała się niezbędna dla brand monitoringu,
              customer experience i product intelligence. Nowoczesne modele AI osiągają accuracy 85-95%
              dla standardowego tekstu.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {sentimentCategories.map((c, i) => (
                <div key={i} className={`rounded-xl p-5 border-2 ${colorMapSentiment[c.kolor]}`}>
                  <h3 className="font-bold text-slate-900 mb-2">{c.kategoria} ({c.score})</h3>
                  <ul className="space-y-1">
                    {c.przykłady.map((p, j) => (
                      <li key={j} className="text-sm text-slate-600 italic">"{p}"</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 zastosowań analizy sentymentu w marketingu</h2>
            <div className="space-y-4">
              {sentimentUseCases.map((uc, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{uc.przypadek}</h3>
                      <p className="text-slate-600 text-sm mb-2">{uc.opis}</p>
                      <p className="text-xs text-slate-400">Narzędzia: {uc.narzędzia}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — analiza sentymentu</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="analiza-sentymentu-co-to" />
      <ContactSection />
    </Layout>
  );
}
