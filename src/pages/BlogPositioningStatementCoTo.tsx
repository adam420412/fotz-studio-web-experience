import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest positioning statement?",
    answer:
      "Positioning statement (deklaracja pozycjonowania) to wewnętrzny dokument firmy — jedno lub kilka zdań precyzyjnie definiujących: dla kogo jest produkt, w jakiej kategorii rywalizuje, jaką unikalną korzyść oferuje i dlaczego klienci powinni w to wierzyć. Positioning statement to wewnętrzny kompas dla całego zespołu — nie slogan reklamowy, lecz fundament pod którym tworzone są wszystkie komunikaty zewnętrzne.",
  },
  {
    question: "Jaka jest struktura positioning statement?",
    answer:
      "Klasyczna struktura: 'Dla [target customer], którzy [potrzeba lub problem], [nazwa marki] jest [kategoria produktu], która [kluczowa korzyść], w odróżnieniu od [główna alternatywa], nasza marka [kluczowy wyróżnik / reason to believe].' Alternatywna, prostsza: 'Pomagamy [komu] osiągnąć [cel] dzięki [jak], w odróżnieniu od [alternatywy] bo [dlaczego wierzymy].'",
  },
  {
    question: "Czym różni się positioning statement od tagline?",
    answer:
      "Positioning statement to dokument wewnętrzny — precyzyjny, techniczny, używany przez marketing, sprzedaż i product team jako punkt odniesienia. Tagline (hasło) to zewnętrzna manifestacja pozycjonowania — krótkie, chwytliwe, emocjonalne, widoczne w reklamach. Apple: positioning statement definiował 'kreatywną osobę wyzwoloną przez technologię' — tagline 'Think different' był publiczną ekspresją tej pozycji.",
  },
  {
    question: "Jak zdefiniować kategorię produktu w positioning statement?",
    answer:
      "Kategoria to ramy referencyjne — z kim porównuje cię klient. Wybór kategorii to strategiczna decyzja: Tesla weszła jako 'luxury car' nie 'electric vehicle' — rywalizowała z BMW/Mercedes, nie Priusem. Slack określił się jako 'team communication' nie 'chat app' — inny frame, inne porównania. Kategoria powinna być na tyle znana, że klient ją rozumie, ale na tyle specyficzna, że możesz wygrać.",
  },
  {
    question: "Jak często aktualizować positioning statement?",
    answer:
      "Positioning statement powinien być aktualizowany przy: znaczącej zmianie grupy docelowej lub ICP, wejściu w nową kategorię lub segment rynku, fuzji/przejęciu, zmianie propozycji wartości, lub gdy analiza konkurencji pokazuje, że pozycja się rozmyła. Dobry positioning jest stabilny przez 3–5 lat — zbyt częste zmiany dezorientują rynek i pracowników.",
  },
];

const psFormulas = [
  {
    nazwa: "Klasyczna formuła Geoffrey Moore'a",
    szablon: "Dla [target customer], którzy [potrzeba/problem], [marka] jest [kategoria], która [korzyść]. W odróżnieniu od [alternatywa], nasza [wyróżnik].",
    przykład: "Dla teamów startupów, które tracą czas na chaotyczną komunikację emailową, Slack jest platformą do komunikacji zespołowej, która centralizuje wszystkie rozmowy w jednym miejscu. W odróżnieniu od emaila, Slack organizuje rozmowy w kanały tematyczne z historią i integracjami.",
    zastosowanie: "B2B SaaS, produkty z jasnym problemem i alternatywą",
  },
  {
    nazwa: "Formuła Value Proposition Canvas",
    szablon: "[Marka] pomaga [komu] osiągnąć [gain] / uniknąć [pain] przez [produkt/rozwiązanie], co pozwala [outcome].",
    przykład: "Fotz pomaga małym i średnim firmom uniknąć marnowania budżetu na nieskuteczny marketing przez tworzenie stron i strategii opartych na danych, co pozwala im rosnąć szybciej niż konkurencja.",
    zastosowanie: "Agencje, usługi, firmy B2B i B2C",
  },
  {
    nazwa: "Formuła Jobs-to-be-Done",
    szablon: "Kiedy [sytuacja], chcę [motywacja], żeby [oczekiwany wynik]. [Marka] jest najlepszym rozwiązaniem bo [reason to believe].",
    przykład: "Kiedy uruchamiam nowy projekt z klientem, chcę szybko stworzyć profesjonalną stronę, żeby zacząć sprzedawać jak najszybciej. Fotz jest najlepszym rozwiązaniem bo łączymy design, SEO i copywriting w jednym 30-dniowym projekcie.",
    zastosowanie: "Innowacje produktowe, nowe kategorie, disruptors",
  },
];

const positioningElements = [
  {
    element: "Target Customer",
    opis: "Precyzyjnie zdefiniowany segment — nie wszyscy, lecz konkretna osoba z konkretnymi cechami",
    dobre: "CFO firmy B2B 50–200 pracowników w Polsce, szukający oszczędności operacyjnych",
    złe: "Firmy które chcą rosnąć",
    dlaczego: "Zbyt szeroki target = rozmyty komunikat. Narrow positioning paradoksalnie zwiększa skuteczność",
  },
  {
    element: "Kategoria (Frame of Reference)",
    opis: "Kontekst konkurencyjny — z czym klient porównuje Twój produkt",
    dobre: "Premium accounting software dla freelancerów (vs. FreshBooks, QuickBooks)",
    złe: "Software finansowy",
    dlaczego: "Kategoria determinuje z kim rywalizujesz — świadomy wybór to strategiczna przewaga",
  },
  {
    element: "Kluczowa korzyść (POD)",
    opis: "Point of Difference — jedna główna rzecz którą robisz lepiej niż alternatywy",
    dobre: "Automatyczna fakturacja VAT zgodna z polskim prawem bez żadnej konfiguracji",
    złe: "Kompleksowe rozwiązanie finansowe",
    dlaczego: "Jeden konkretny POD zapada w pamięć. Lista 10 cech — żadna nie zostaje",
  },
  {
    element: "Reason to Believe",
    opis: "Dowód na to, że obietnica jest prawdziwa — dane, walidacja, certyfikat, case study",
    dobre: "Jedyne oprogramowanie certyfikowane przez Ministerstwo Finansów + 10 000 użytkowników",
    złe: "Nasi klienci są zadowoleni",
    dlaczego: "Bez dowodu positioning to tylko claim. RTB zamienia claim w wiarygodną obietnicę",
  },
];

export default function BlogPositioningStatementCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Positioning Statement | Fotz Studio"
        description="Positioning statement — definicja, 3 formuły (Moore, Value Proposition Canvas, JTBD), 4 elementy i różnica vs. tagline. Jak pisać deklarację…"
        canonical="https://fotz.pl/blog/positioning-statement-co-to"

        keywords="Positioning Statement co to jest, Positioning Statement definicja, czym jest Positioning Statement, Positioning Statement przykłady, jak działa Positioning Statement, Positioning Statement znaczenie, Positioning Statement przewodnik"

        canonical="https://fotz.pl/blog/positioning-statement-co-to"
      />
      <ArticleSchema
        title="Positioning Statement — co to jest i jak go napisać?"
        description="Kompletny przewodnik po positioning statement: 3 formuły, 4 kluczowe elementy (target, kategoria, POD, RTB) i przykłady."
        url="https://fotz.pl/blog/positioning-statement-co-to"
        datePublished="2024-01-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Positioning Statement", url: "https://fotz.pl/blog/positioning-statement-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Positioning Statement", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Positioning Statement — co to jest i jak go napisać?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Deklaracja pozycjonowania to wewnętrzny kompas marki — fundament każdego komunikatu.
            Poznaj 3 formuły, 4 elementy i jak tworzyć positioning który wygrywa z konkurencją.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest positioning statement?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Positioning statement</strong> to wewnętrzny dokument precyzyjnie definiujący
              miejsce marki lub produktu w umyśle klienta względem konkurencji. Odpowiada na pytanie:
              "Kim jesteśmy dla kogo i dlaczego powinni wybrać właśnie nas?"
              To nie slogan reklamowy — to strategiczny fundament pod cały marketing.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Al Ries i Jack Trout w "Positioning: The Battle for Your Mind" pokazali,
              że marketing to walka o miejsce w głowie klienta, nie o jakość produktu.
              Wygrywają marki z najostrzejszym, najbardziej zapamiętywianym positioningiem.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="font-semibold text-orange-900 mb-2">Positioning statement vs. Tagline:</p>
              <p className="text-orange-800 text-sm">
                <strong>Positioning statement (wewnętrzny):</strong> "Dla kreatywnych profesjonalistów którzy chcą wyrażać siebie, Apple Mac jest premium komputerem który umożliwia twórczość bez barier technologicznych — potwierdzone przez wiodących designerów i artystów."<br /><br />
                <strong>Tagline (zewnętrzny):</strong> "Think different."
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 elementy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 kluczowe elementy positioning statement</h2>
            <div className="space-y-5">
              {positioningElements.map((el, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{el.element}</h3>
                  <p className="text-slate-600 mb-3">{el.opis}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Dobre (konkretne):</p>
                      <p className="text-green-800 italic">{el.dobre}</p>
                    </div>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Złe (zbyt ogólne):</p>
                      <p className="text-red-800 italic">{el.złe}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-3">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Dlaczego to ważne:</p>
                      <p className="text-orange-800">{el.dlaczego}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 3 formuły */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 formuły pisania positioning statement</h2>
            <div className="space-y-6">
              {psFormulas.map((f, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{f.nazwa}</h3>
                  <div className="bg-orange-50 rounded p-4 mb-3 font-mono text-sm text-orange-800">
                    {f.szablon}
                  </div>
                  <div className="bg-white rounded p-4 mb-3 border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 mb-1">Przykład zastosowania:</p>
                    <p className="text-slate-700 text-sm italic">{f.przykład}</p>
                  </div>
                  <p className="text-xs text-slate-500">Najlepiej dla: {f.zastosowanie}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — positioning statement</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="positioning-statement-co-to" />
      <ContactSection />
    </Layout>
  );
}
