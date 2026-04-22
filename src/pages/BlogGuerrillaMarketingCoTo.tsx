import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest guerrilla marketing?",
    answer:
      "Guerrilla marketing (marketing partyzancki) to niekonwencjonalne, niskobudżetowe kampanie marketingowe, które zaskakują odbiorców w nieoczekiwanych miejscach i sytuacjach. Termin wprowadził Jay Conrad Levinson w 1984 roku w księdze 'Guerrilla Marketing'. Nazwa pochodzi od strategii partyzanckich — małe, zwinne oddziały pokonują większych przeciwników kreatywnością i zaskoczeniem.",
  },
  {
    question: "Ile kosztuje kampania guerrilla marketingowa?",
    answer:
      "Guerrilla marketing może być bardzo tani — od kilkuset złotych za street art po kilkadziesiąt tysięcy za bardziej zaawansowane instalacje. Kluczem jest kreatywny pomysł, nie budżet. Wiele słynnych kampanii partyzanckich powstało przy minimalnych nakładach finansowych.",
  },
  {
    question: "Czy guerrilla marketing jest legalny?",
    answer:
      "Legalność zależy od konkretnych działań. Street art na prywatnej własności bez zgody jest nielegalny. Ambient marketing w przestrzeni publicznej często wymaga zgód urzędowych. Zawsze warto skonsultować się z prawnikiem i uzyskać niezbędne pozwolenia, by uniknąć kar.",
  },
  {
    question: "Jakie branże korzystają z guerrilla marketingu?",
    answer:
      "Guerrilla marketing jest popularny wśród marek konsumenckich (odzież, żywność, napoje), filmów i seriali, organizacji non-profit, startupów z ograniczonym budżetem oraz marek, które chcą wzmocnić wizerunek 'unconventional'. Doskonale sprawdza się w miastach o dużym natężeniu ruchu pieszego.",
  },
  {
    question: "Jaka jest różnica między guerrilla marketingiem a ambient marketingiem?",
    answer:
      "Ambient marketing to jeden z rodzajów guerrilla marketingu — skupiony na umieszczaniu reklam w niestandardowych lokalizacjach środowiskowych (ławki, schody, windy, podłogi). Guerrilla marketing jest szerszym pojęciem obejmującym też flash moby, buzz marketing, experiences, i wszystkie niekonwencjonalne formy dotarcia do konsumenta.",
  },
];

const guerrillaTypes = [
  {
    typ: "Ambient Marketing",
    opis: "Wykorzystanie elementów otoczenia (mebli miejskich, ławek, schodów) jako nośników reklamy",
    zalety: "Wysoka zapamiętywalność, niski koszt produkcji",
    wady: "Wymaga zgód, ograniczony zasięg lokalny",
    przykład: "Reklama dentysty na ławce w kształcie uzębienia",
  },
  {
    typ: "Ambush Marketing",
    opis: "Skojarzenie marki z wydarzeniem bez bycia oficjalnym sponsorem",
    zalety: "Duży zasięg przy niskim koszcie vs oficjalne sponsorstwo",
    wady: "Ryzyko prawne, może zaszkodzić relacjom",
    przykład: "Bavaria Beer na Mistrzostwach Świata 2010",
  },
  {
    typ: "Buzz Marketing",
    opis: "Celowe tworzenie tematu do dyskusji — kontrowersja, tajemnica, ekskluzywność",
    zalety: "Organiczne rozprzestrzenianie, buduje zainteresowanie",
    wady: "Trudny do kontrolowania, ryzyko backfire",
    przykład: "Blair Witch Project — film pozornie nakręcony przez amatorów",
  },
  {
    typ: "Flash Mob",
    opis: "Zorganizowana, pozornie spontaniczna akcja grupy osób w przestrzeni publicznej",
    zalety: "Spektakularny efekt wizualny, wysoka share-ability",
    wady: "Wymaga koordynacji, czasochłonny",
    przykład: "T-Mobile Dance na stacji Liverpool Street w Londynie",
  },
  {
    typ: "Stealth Marketing",
    opis: "Dyskretna promocja bez wiedzy odbiorcy, że jest targetowany",
    zalety: "Naturalne, wiarygodne oddziaływanie",
    wady: "Kontrowersyjny etycznie, wymaga transparentności",
    przykład: "Aktorzy zachwalający produkt w barach jako 'zwykli klienci'",
  },
  {
    typ: "Guerrilla PR",
    opis: "Kontrowersyjne lub spektakularne działania PR generujące media coverage",
    zalety: "Earned media, duży zasięg przy niskim koszcie",
    wady: "Ryzyko negatywnego odbioru przez media",
    przykład: "Greenpeace akcje medialne przy fabrykach",
  },
];

const kampaniaSteps = [
  { etap: "Diagnoza", opis: "Zdefiniuj cel kampanii, grupę docelową i miejsce. Guerrilla marketing działa najlepiej tam, gdzie Twoi klienci fizycznie przebywają." },
  { etap: "Pomysł", opis: "Szukaj efektu WOW! lub WTF? — zaskoczenia, humoru, prowokacji. Zadaj pytanie: 'Czy ktoś zrobi temu zdjęcie i wstawi na Instagram?'" },
  { etap: "Legalność", opis: "Sprawdź wymagane zgody i pozwolenia. Czy lokalizacja jest prywatna czy publiczna? Czy działanie nie narusza praw innych osób?" },
  { etap: "Produkcja", opis: "Przygotuj instalację, materiały, zaangażuj uczestników. Zadbaj o dokumentację fotograficzną i wideo — to materiał do dystrybucji online." },
  { etap: "Amplifikacja", opis: "Udostępnij dokumentację w mediach społecznościowych, wyślij press release do mediów lokalnych i branżowych. Kampania offline jest pretekstem do contentu online." },
  { etap: "Pomiar", opis: "Zbierz dane: liczba mediów, które podchwyciły temat, zasięg w social mediach, wzrost ruchu na stronie i wzmianek marki w trakcie i po kampanii." },
];

export default function BlogGuerrillaMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Guerrilla Marketing | Fotz Studio"
        description="Guerrilla marketing — definicja, 6 rodzajów, przykłady kampanii partyzanckich i jak zaplanować skuteczną akcję. Kompletny przewodnik po marketingu…"
        canonical="https://fotz.pl/blog/guerrilla-marketing-co-to"

        keywords="Guerrilla Marketing co to jest, Guerrilla Marketing definicja, czym jest Guerrilla Marketing, Guerrilla Marketing w marketingu, Guerrilla Marketing przykłady, jak działa Guerrilla Marketing, Guerrilla Marketing strategia"
      />
      <ArticleSchema
        title="Guerrilla Marketing — co to jest i jak działa?"
        description="Kompletny przewodnik po guerrilla marketingu: rodzaje, przykłady kampanii partyzanckich i jak zaplanować skuteczną niekonwencjonalną akcję marketingową."
        url="https://fotz.pl/blog/guerrilla-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Guerrilla Marketing", url: "https://fotz.pl/blog/guerrilla-marketing-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Guerrilla Marketing", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Guerrilla Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Marketing partyzancki to sztuka osiągania maksymalnego efektu przy minimalnym budżecie.
            Poznaj 6 rodzajów guerrilla marketingu, słynne przykłady i jak zaplanować własną kampanię.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest guerrilla marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Guerrilla marketing</strong> (marketing partyzancki) to termin ukuty przez Jaya Conrada Levinsona w 1984 roku.
              Opisuje niekonwencjonalne, niespodziewane kampanie reklamowe prowadzone w przestrzeni publicznej lub online,
              które zaskakują odbiorców i generują zainteresowanie dzięki kreatywności zamiast dużych budżetów.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Nazwa nawiązuje do taktyki partyzanckiej — mała, zwinna jednostka może pokonać dużego, zasobnego przeciwnika
              dzięki elemencie zaskoczenia, mobilności i niekonwencjonalnym metodom działania.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="text-amber-900 font-medium">Zasada guerrilla marketingu:</p>
              <p className="text-amber-800 mt-2">
                Zainwestuj czas, energię i kreatywność zamiast pieniędzy. Lepszy jeden genialne prosty pomysł
                bez budżetu niż przeciętna kampania za miliony.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 rodzajów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 rodzajów guerrilla marketingu</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guerrillaTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{t.typ}</h3>
                  <p className="text-slate-600 text-sm mb-4">{t.opis}</p>
                  <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                    <div className="bg-green-50 rounded-lg p-2">
                      <p className="text-xs font-semibold text-green-700 mb-1">Zalety</p>
                      <p className="text-green-800">{t.zalety}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-2">
                      <p className="text-xs font-semibold text-red-700 mb-1">Wady</p>
                      <p className="text-red-800">{t.wady}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic">Przykład: {t.przykład}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Jak zaplanować */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak zaplanować kampanię guerrilla marketingową? 6 etapów</h2>
            <div className="space-y-5">
              {kampaniaSteps.map((step, i) => (
                <div key={i} className="flex gap-5 bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{step.etap}</h3>
                    <p className="text-slate-600">{step.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Guerrilla vs. traditional */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Guerrilla Marketing vs. tradycyjna reklama
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kryterium</th>
                    <th className="p-3 text-left">Guerrilla Marketing</th>
                    <th className="p-3 text-left">Tradycyjna Reklama</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Budżet", "Niski — kluczowa kreatywność", "Wysoki — kluczowe zasięgi"],
                    ["Zasięg", "Lokalny + viralowy online", "Masowy, targetowany"],
                    ["Przewidywalność", "Niska — efekt zaskoczenia", "Wysoka — planowane kampanie"],
                    ["Zapamiętywalność", "Bardzo wysoka (efekt WOW)", "Średnia"],
                    ["Ryzyko", "Wyższe — może być negatywnie odebrane", "Niższe przy dobrej produkcji"],
                    ["Skalowalność", "Trudna do skalowania", "Łatwo skalowalna budżetem"],
                    ["Targetowanie", "Oparte na lokalizacji", "Precyzyjne demograficzne"],
                  ].map(([kryterium, guerrilla, tradycyjna], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{kryterium}</td>
                      <td className="p-3 text-slate-700">{guerrilla}</td>
                      <td className="p-3 text-slate-600">{tradycyjna}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — guerrilla marketing</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="guerrilla-marketing-co-to" />
      <ContactSection />
    </Layout>
  );
}
