import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest cause marketing?",
    answer:
      "Cause marketing (marketing zaangażowany społecznie) to współpraca firmy komercyjnej z organizacją non-profit lub akcją społeczną w celu osiągnięcia wspólnych korzyści — marka buduje pozytywny wizerunek i lojalność klientów, a cel społeczny pozyskuje wsparcie finansowe i rozgłos. Przykład klasyczny: 'Kup produkt X, a część ceny przekażemy na Y'.",
  },
  {
    question: "Jaka jest różnica między cause marketingiem a CSR?",
    answer:
      "CSR (Corporate Social Responsibility) to szersza strategia odpowiedzialności społecznej obejmująca praktyki biznesowe, środowisko, pracowników i społeczności — często niekomunikowana jako marketing. Cause marketing to wyraźna, zintegrowana kampania marketingowa budowana wokół konkretnej sprawy społecznej, z jasnym przekazem i CTA dla konsumenta.",
  },
  {
    question: "Czy cause marketing jest autentyczny?",
    answer:
      "Autentyczność cause marketingu zależy od spójności wartości marki z wybraną sprawą. Jeśli firma wybrała sprawę tylko dla PR, konsumenci to wyczuwają — ryzyko oskarżeń o 'causewashing'. Autentyczny cause marketing wynika z misji firmy, angażuje pracowników i ma mierzalny, długofalowy wpływ na wspierany cel.",
  },
  {
    question: "Jak wybrać sprawę do cause marketingu?",
    answer:
      "Skuteczna sprawa powinna: być spójna z wartościami i misją marki, rezonować z grupą docelową, być konkretna i mierzalna (nie ogólnikowa), umożliwiać partnerstwo z wiarygodną organizacją oraz dawać konsumentom możliwość łatwego zaangażowania się.",
  },
  {
    question: "Jakie błędy popełnia się w cause marketingu?",
    answer:
      "Najczęstsze błędy to: 'causewashing' (wybór sprawy sprzecznej z praktykami firmy), brak autentyczności i zaangażowania pracowników, nieczytelny mechanizm przekazywania środków, wybór sprawy ważnej tylko dla zarządu a nie dla klientów, oraz jednorazowe akcje zamiast długofalowych zobowiązań.",
  },
];

const causeModels = [
  {
    model: "Purchase-triggered donation",
    opis: "Firma przekazuje procent lub stałą kwotę od każdego zakupu na wybrany cel",
    przykład: "TOMS Shoes: kup parę butów — para trafi do potrzebujących",
    zaangażowanie: "Pasywne (klient nie musi nic robić poza zakupem)",
    skuteczność: "Wysoka — niska bariera dla konsumenta",
  },
  {
    model: "Point-of-sale campaigns",
    opis: "Konsumenci mogą dodać datek do zakupu przy kasie/checkout",
    przykład: "Biedronka 'Zbieramy na Szlachetną Paczkę' — okrąglanie rachunku",
    zaangażowanie: "Aktywne — decyzja klienta",
    skuteczność: "Wysoka — szeroki zasięg",
  },
  {
    model: "Licensing",
    opis: "Firma płaci organizacji za prawo do używania jej logo/nazwy w materiałach marketingowych",
    przykład: "Produkty ze znakiem WWF — procent sprzedaży dla WWF",
    zaangażowanie: "Pasywne",
    skuteczność: "Średnia — silny brand halo",
  },
  {
    model: "Employee matching",
    opis: "Firma dopasowuje darowizny pracowników do organizacji non-profit",
    przykład: "Google Matching Gifts — double the impact",
    zaangażowanie: "Pracownicy aktywni",
    skuteczność: "Wysoka dla employer branding",
  },
  {
    model: "Joint promotions",
    opis: "Kampania marketingowa realizowana wspólnie z organizacją non-profit",
    przykład: "Ben & Jerry's i Amnesty International — wiele wspólnych kampanii",
    zaangażowanie: "Aktywne — wspólna narracja",
    skuteczność: "Wysoka przy spójności wartości",
  },
];

const causeProcess = [
  { etap: "Wybór sprawy", opis: "Zidentyfikuj sprawę autentycznie zbieżną z wartościami marki i ważną dla Twojej grupy docelowej. Skonsultuj wewnętrznie z pracownikami." },
  { etap: "Wybór partnera", opis: "Wybierz wiarygodną, rozpoznawalną organizację non-profit. Sprawdź jej sprawozdania finansowe i skuteczność działania. Zdefiniuj zasady partnerstwa." },
  { etap: "Mechanizm zaangażowania", opis: "Zaprojektuj prosty, transparentny mechanizm — jak konkretnie przekazywane są środki? Jak konsument może to zweryfikować? Przejrzystość buduje zaufanie." },
  { etap: "Komunikacja", opis: "Opowiedz autentyczną historię. Pokaż realne efekty — nie suche liczby, ale ludzkie historię. Angażuj pracowników jako ambasadorów." },
  { etap: "Pomiar i raportowanie", opis: "Regularnie raportuj wyniki kampanii — ile zebrałeś, co dzięki temu osiągnięto. Transparentność wyróżnia autentyczny cause marketing od PR-owego teatru." },
];

export default function BlogCauseMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Cause Marketing — co to jest? Marketing zaangażowany społecznie"
        description="Cause marketing — definicja, 5 modeli kampanii społecznych, jak wybrać sprawę i unikać causewashingu. Kompletny przewodnik po marketingu zaangażowanym…"
        canonical="https://fotz.pl/blog/cause-marketing-co-to"

        keywords="Cause Marketing co to jest, Cause Marketing definicja, czym jest Cause Marketing, Cause Marketing w marketingu, Cause Marketing przykłady, jak działa Cause Marketing, Cause Marketing strategia"

        canonical="https://fotz.pl/blog/cause-marketing-co-to"
      />
      <ArticleSchema
        title="Cause Marketing — co to jest i jak działa?"
        description="Kompletny przewodnik po cause marketingu: modele, jak wybrać sprawę i jak prowadzić autentyczne kampanie społeczne."
        url="https://fotz.pl/blog/cause-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Cause Marketing", url: "https://fotz.pl/blog/cause-marketing-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Cause Marketing", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Cause Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Cause marketing łączy biznes ze społeczną odpowiedzialnością.
            Poznaj 5 modeli kampanii społecznych, jak wybrać autentyczną sprawę i unikać pułapki causewashingu.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest cause marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Cause marketing</strong> (marketing zaangażowany społecznie, cause-related marketing)
              to strategia marketingowa oparta na współpracy firmy z organizacją non-profit lub
              w imię sprawy społecznej — z korzyścią dla obu stron.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badanie Cone Communications pokazuje, że 87% konsumentów woli kupować produkty firm zaangażowanych
              w sprawy społeczne, a 76% odmówi zakupu od firmy, która postępuje sprzecznie z deklarowanymi wartościami.
              Autentyczność jest kluczowa.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { korzyść: "Dla marki", punkty: ["Pozytywny wizerunek i reputacja", "Lojalność konsumentów", "Wyróżnienie od konkurencji", "Zaangażowanie pracowników"] },
                { korzyść: "Dla sprawy / NGO", punkty: ["Środki finansowe", "Masowy zasięg i rozpoznawalność", "Nowi darczyńcy i wolontariusze", "Wiarygodność przez kooperację z firmą"] },
              ].map((blok, i) => (
                <div key={i} className="bg-green-50 rounded-xl p-5 border border-green-200">
                  <p className="font-bold text-green-800 mb-3">{blok.korzyść}</p>
                  <ul className="space-y-1">
                    {blok.punkty.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-green-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Modele */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 modeli cause marketingu</h2>
            <div className="space-y-5">
              {causeModels.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{m.model}</h3>
                  <p className="text-slate-600 mb-3">{m.opis}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Przykład</p>
                      <p className="text-slate-700">{m.przykład}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Zaangażowanie</p>
                      <p className="text-slate-700">{m.zaangażowanie}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Skuteczność</p>
                      <p className="text-slate-700">{m.skuteczność}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Proces */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak zaplanować kampanię cause marketingową? 5 etapów</h2>
            <div className="space-y-5">
              {causeProcess.map((item, i) => (
                <div key={i} className="flex gap-5 bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.etap}</h3>
                    <p className="text-slate-600">{item.opis}</p>
                  </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — cause marketing</h2>
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

      <RelatedArticles currentArticleId="cause-marketing-co-to" />
      <ContactSection />
    </Layout>
  );
}
