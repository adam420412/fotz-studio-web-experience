import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Challenger Sale?",
    answer: "Challenger Sale to metodologia sprzedaży opracowana przez Matthew Dixona i Brenta Adamsona (CEB, 2011), bazująca na badaniu ponad 6 000 handlowców. Badanie wykazało, że najlepsi sprzedawcy to nie te osoby, które budują relacje lub rozwiązują problemy klientów — to 'Challengers', którzy uczą klientów nowych sposobów myślenia o swoim biznesie, dostosowują komunikację do konkretnego odbiorcy i przejmują kontrolę nad rozmową sprzedażową. Challenger Sale szczególnie sprawdza się w złożonej, consultative sprzedaży enterprise.",
  },
  {
    question: "Jakie są 5 profili handlowca w Challenger Sale?",
    answer: "Badania CEB wykazały 5 profili: Hard Worker (22%) — pracuje ciężko, ale bez wyróżniającej strategii. Relationship Builder (21%) — skupia się na budowaniu relacji, rzadko popycha dealów. Lone Wolf (18%) — self-confident, własne metody, trudny do zarządzania. Reactive Problem Solver (14%) — świetny w obsłudze klienta, reaktywny. Challenger (27%) — najwyższy win rate w złożonej sprzedaży, uczy klientów, pushuje ich myślenie, kontroluje rozmowę. Kluczowy wniosek: Challengers dominują w top 20% sprzedawców przy złożonych dealach.",
  },
  {
    question: "Na czym polega 'Teaching' w Challenger Sale?",
    answer: "Teaching (nauczanie) to kluczowy element Challenger — handlowiec prowadzi rozmowę przez insight, który reframes sytuację klienta. Sekwencja Teach: Warmer — zbuduj wiarygodność przez pokazanie, że znasz branżę klienta. Reframe — zaproponuj inne spojrzenie na problem/okazję ('Co gdybym powiedział Wam, że wasza prawdziwa strata pochodzi z...?'). Rational Drowning — pokaż dane, które potwierdzają nowy frame. Emotional Impact — połącz reframe z emocjonalnym impact na klienta. New Way Forward — pokaż, jak możesz pomóc w tym nowym kontekście.",
  },
  {
    question: "Czym Challenger Sale różni się od SPIN Selling?",
    answer: "SPIN Selling: handlowiec odkrywa ból przez pytania — jest reaktywny, podąża za problemami klienta. Challenger Sale: handlowiec prowadzi klienta przez własną narrację — jest proaktywny, reframes problem zanim klient go zdefiniuje. SPIN sprawdza się lepiej gdy klient już wie, że ma problem. Challenger sprawdza się lepiej gdy klient nie widzi problemu lub myśli, że go rozwiązał. W praktyce wiele top-performing teamów łączy oba: SPIN do odkrywania i Challenger do tworzenia insight i reframowania.",
  },
  {
    question: "Dla jakiego rodzaju sprzedaży sprawdza się Challenger Sale?",
    answer: "Challenger Sale sprawdza się najlepiej przy: złożonej sprzedaży enterprise (wielomiesięczne cykle, wielu stakeholderów), gdy klient nie jest świadomy problemu lub nie widzi pilności, przy produktach/usługach wymagających zmiany sposobu pracy klienta, consultative selling gdzie handlowiec ma głęboką wiedzę branżową. Challenger Sale jest mniej odpowiedni dla: transakcyjnej SMB sprzedaży, gdy klient dokładnie wie czego szuka (RFP), produktów commodity gdzie cena dominuje.",
  },
];

const challengerProfiles = [
  { profil: "Hard Worker", procent: "22%", opis: "Ciężko pracuje, wykonuje więcej calls, nie poddaje się. Brak wyróżniającej strategii.", winRate: "Przeciętny", kolor: "gray" },
  { profil: "Relationship Builder", procent: "21%", opis: "Skupia się na budowaniu relacji i trust. Rzadko pushuje, dba o zadowolenie klienta.", winRate: "Poniżej średniej (przy złożonych dealach)", kolor: "gray" },
  { profil: "Lone Wolf", procent: "18%", opis: "Self-confident, własne metody, trudny do zarządzania przez lidera. Może być effective.", winRate: "Zmienny", kolor: "gray" },
  { profil: "Reactive Problem Solver", procent: "14%", opis: "Doskonały w obsłudze klienta i rozwiązywaniu problemów po zakupie. Reaktywny, nie proaktywny.", winRate: "Przeciętny", kolor: "gray" },
  { profil: "Challenger", procent: "27% top performers", opis: "Uczy klientów, pushuje ich myślenie, kontroluje rozmowę, komfortowy z napięciem.", winRate: "Najwyższy przy złożonych dealach", kolor: "green" },
];

const challengerTeachModel = [
  {
    krok: "1. Warmer — wiarygodność przez insight",
    opis: "Zacznij od pokazania, że rozumiesz biznes klienta lepiej niż on się spodziewa.",
    przykład: "'Rozmawiamy z wieloma firmami z Waszej branży i widzimy trend, który niepokoi wielu VP Sales...'",
  },
  {
    krok: "2. Reframe — nowe spojrzenie na problem",
    opis: "Zaproponuj inny sposób patrzenia na sytuację — nie potwierdzaj tego, co klient już wie.",
    przykład: "'Większość firm skupia się na optymalizacji konwersji leadu do demo. Nasze badania pokazują, że prawdziwy problem leży wcześniej...'",
  },
  {
    krok: "3. Rational Drowning — dane potwierdzające",
    opis: "Popierz reframe konkretnymi danymi, statystykami, case studies.",
    przykład: "'Firmy które nie mierzą X tracą średnio 15% pipeline'u, co przy Waszej skali to około 2M PLN rocznie.'",
  },
  {
    krok: "4. Emotional Impact — personalny wymiar",
    opis: "Połącz problem z emocjonalnym impaktem na konkretne osoby lub karierę rozmówcy.",
    przykład: "'To oznacza, że Wasi AE tracą czas na deale, które nigdy się nie zamkną. Frustracja, która wpędza talenty w churn.'",
  },
  {
    krok: "5. New Way Forward — Twoje rozwiązanie",
    opis: "Dopiero teraz pokażesz, że masz rozwiązanie — w kontekście, który sam stworzyłeś.",
    przykład: "'Dlatego zbudowaliśmy X — które pozwala identyfikować te deale o 60 dni wcześniej...'",
  },
];

export default function BlogChallengerSaleCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Challenger Sale — co to jest i jak stosować? | Fotz.pl"
        description="Challenger Sale — metodologia sprzedaży CEB: 5 profili handlowca, sekwencja Teach-Tailor-Take Control, porównanie z SPIN Selling i zastosowanie w B2B…"
        canonical="https://fotz.pl/blog/challenger-sale-metodologia-sprzedazy"

        keywords="Challenger Sale co to jest, Challenger Sale definicja, czym jest Challenger Sale, Challenger Sale przykłady, jak działa Challenger Sale, Challenger Sale znaczenie, Challenger Sale przewodnik"
      />
      <ArticleSchema
        title="Challenger Sale — co to jest i jak stosować?"
        description="Kompletny przewodnik po Challenger Sale: 5 profili, teaching sekwencja i zastosowanie w sprzedaży B2B."
        url="https://fotz.pl/blog/challenger-sale-metodologia-sprzedazy"
        datePublished="2024-02-07"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Challenger Sale", url: "https://fotz.pl/blog/challenger-sale-metodologia-sprzedazy" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Challenger Sale", url: "/blog/challenger-sale-metodologia-sprzedazy" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Metodologie Sprzedaży
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Challenger Sale
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Badanie 6 000 handlowców wykazało coś kontrowersyjnego: najlepsi sprzedawcy nie budują relacji
              — oni prowokują klientów do nowego spojrzenia na ich biznes. Poznaj metodologię, która to udowodniła.
            </p>
            <div className="bg-red-900/50 rounded-xl p-6 border border-red-700">
              <div className="text-sm text-red-300 font-semibold mb-3">3 elementy Challenger</div>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Teach</div>
                  <div className="text-sm text-gray-300">Ucz klientów czegoś nowego o ich biznesie</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Tailor</div>
                  <div className="text-sm text-gray-300">Dostosuj komunikację do każdego stakeholdera</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Take Control</div>
                  <div className="text-sm text-gray-300">Przejmij kontrolę nad rozmową i procesem zakupu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile handlowców */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 profili handlowca</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Badanie CEB/Gartner wykazało 5 archetypów handlowca. Profil Challenger dominuje wśród
              najlepszych sprzedawców przy złożonych dealach enterprise.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {challengerProfiles.map((p) => (
              <FadeInView key={p.profil}>
                <div className={`rounded-xl p-5 border-2 ${
                  p.kolor === "green" ? "border-green-400 bg-green-50" : "border-gray-200 bg-gray-50"
                }`}>
                  <div className="flex gap-4 items-start">
                    <div className={`font-bold text-sm px-3 py-1 rounded-full flex-shrink-0 ${
                      p.kolor === "green" ? "bg-green-600 text-white" : "bg-gray-300 text-gray-700"
                    }`}>
                      {p.procent}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-1 ${p.kolor === "green" ? "text-green-800" : "text-gray-800"}`}>
                        {p.profil}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">{p.opis}</p>
                      <div className="text-xs text-gray-500">Win Rate: <span className="font-semibold">{p.winRate}</span></div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Sequence */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sekwencja Teach — 5 kroków</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Serce Challenger Sale to sekwencja Teaching — ustrukturyzowany sposób prowadzenia klienta
              od nowego insight do Twojego rozwiązania.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {challengerTeachModel.map((krok, i) => (
              <FadeInView key={krok.krok}>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex gap-4">
                    <div className="bg-red-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{krok.krok}</h3>
                      <p className="text-gray-600 text-sm mb-3">{krok.opis}</p>
                      <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                        <div className="text-xs font-bold text-red-700 uppercase mb-1">Przykład</div>
                        <p className="text-sm text-gray-700 italic">{krok.przykład}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <RelatedArticles currentArticleId="challenger-sale-metodologia-sprzedazy" />
      <ContactSection />
    </Layout>
  );
}
