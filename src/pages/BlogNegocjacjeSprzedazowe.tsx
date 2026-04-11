import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Jakie są najskuteczniejsze techniki negocjacji sprzedażowych?",
    answer: "Kluczowe techniki negocjacji B2B: Anchoring — ustaw swój punkt startowy wysoko (first offer anchors the negotiation). BATNA (Best Alternative to Negotiated Agreement) — znaj swoją najlepszą alternatywę i nigdy nie idź poniżej niej. Bracketing — oferta klienta jest X, chcesz Y, proponujesz Z aby wylądować w Y. Concession Trading — nigdy nie dawaj ustępstw bez otrzymywania czegoś w zamian. Silence — po złożeniu oferty milcz i czekaj na odpowiedź klienta. Multi-variable negotiation — negocjuj wiele zmiennych jednocześnie (cena, warunki, termin, wdrożenie).",
  },
  {
    question: "Jak radzić sobie z żądaniem obniżki ceny?",
    answer: "Gdy klient prosi o obniżkę ceny: Pierwsza odpowiedź — zapytaj 'Co sprawia, że cena jest barierą?' (odkryj prawdziwy powód). Zrozum interes vs pozycję — klient może chcieć niższej ceny, ale prawdziwym problemem jest budget approval lub porównanie z konkurencją. Nie dawaj rabatu bez concession — 'Możemy to rozważyć, jeśli...' (roczna umowa, referencja, multi-seat). Bronij wartości — wróć do ROI calculation, zamiast obniżać cenę. Jeśli musisz dać rabat — rób to małymi krokami z uzasadnieniem.",
  },
  {
    question: "Co to jest ZOPA i BATNA w negocjacjach?",
    answer: "BATNA (Best Alternative to Negotiated Agreement) to Twoja najlepsza alternatywa jeśli negocjacje nie dojdą do skutku. Im lepsza BATNA, tym silniejsza Twoja pozycja negocjacyjna. Przed każdą negocjacją pytaj: 'Co zrobię jeśli klient nie podpisze?' ZOPA (Zone of Possible Agreement) to zakres, w którym możliwe jest porozumienie — przestrzeń między minimalną ofertą sprzedawcy a maksymalną ceną, którą kupujący jest gotów zapłacić. Jeśli ZOPA nie istnieje (Twoje minimum jest wyższe niż ich maksimum) — deal jest niemożliwy na obecnych warunkach.",
  },
  {
    question: "Jak nie dać się zdominować przez dużego klienta enterprise?",
    answer: "Taktyki przy asymetrycznej negocjacji (Ty mały, klient duży): Znaj swoją BATNA i bądź gotowy odejść — to Twoja jedyna realna siła. Buduj alternatywy — im więcej masz podobnych prospektów w pipeline, tym mniejsza zależność od jednego deala. Skup się na wartości unikalnej — jeśli mają tylko jednego dostawcę, masz inny problem niż negocjacje. Nie negocjuj z position of fear — duzi klienci wyczuwają desperację. Negocjuj wielowymiarowo — nawet jeśli ustąpisz w cenie, zyskaj w scope, warunkach płatności lub terminie.",
  },
  {
    question: "Kiedy warto odejść od negocjacji?",
    answer: "Sytuacje, gdy lepiej odejść niż zamknąć deal: klient żąda ceny poniżej Twojego kosztu obsługi (deal będzie generować straty). Warunki zagrażają Twojemu modelowi — np. klient chce SLA 99.99% bez extra cost. Klient jest poza ICP i żąda funkcji, których nigdy nie zbudujesz. Negocjacje pokazują, że klient będzie trudny i kosztowny w obsłudze (churn prediction). Dasz precedens, który zrujnuje pricing dla innych klientów. W każdej z tych sytuacji odejście od deal jest decyzją business, nie porażką.",
  },
];

const negotiationTactics = [
  {
    taktyka: "Anchoring (kotwiczenie)",
    opis: "Pierwsza złożona oferta zakotwicza negocjacje — strony wracają do niej jako punktu odniesienia",
    jak: "Zawsze składaj ofertę jako pierwszy. Anchor wysoko (lub nisko jeśli kupujesz). Uzasadnij anchor logicznie.",
    przykład: "Zamiast czekać na ofertę klienta, powiedz: 'Standardowo nasz pakiet Enterprise to 120 000 PLN rocznie, jednak dla Was przygotowałem propozycję bazując na Waszych potrzebach...'",
    kolor: "blue",
  },
  {
    taktyka: "Multi-variable negotiation",
    opis: "Negocjuj kilka zmiennych jednocześnie — cena to tylko jedna z wielu dźwigni",
    jak: "Zidentyfikuj wszystkie zmienne: cena, termin, scope, warunki płatności, wsparcie, implementacja. Ustępuj w mniej ważnych zmiennych, broń ważnych.",
    przykład: "'Mogę zaakceptować niższą cenę, jeśli przejdziecie na roczną płatność z góry i zgodzicie się na referencję case study.'",
    kolor: "green",
  },
  {
    taktyka: "Good Cop / Bad Cop",
    opis: "Jedna osoba w teamie sprzedażowym jest 'miękka', druga 'twarda' — klasyczna taktyka",
    jak: "AE jest Good Cop (pragnie zamknąć deal, empatyczny). Manager/VP jest Bad Cop (broni warunków, nie ustępuje łatwo). Klient negocjuje z AE, ale AE 'musi uzyskać zgodę managera'.",
    przykład: "'Chciałbym Wam pomóc, ale mój VP nie zaaprobuje takiej ceny bez rocznego kontraktu. Dajcie mi coś, co mogę mu pokazać.'",
    kolor: "purple",
  },
  {
    taktyka: "Strategic Silence",
    opis: "Po złożeniu oferty lub pytania — milcz. Kto mówi pierwszy, traci",
    jak: "Po podaniu ceny lub warunku, zatrzymaj się. Nie wypełniaj ciszy uzasadnieniami — to osłabia Twoją pozycję. Poczekaj na odpowiedź klienta.",
    przykład: "Po powiedzeniu 'Nasza propozycja to 85 000 PLN' — milcz. Klient czuje presję do odpowiedzi. Pierwsze słowa po Twojej ofercie są bardzo informacyjne.",
    kolor: "orange",
  },
];

const concessionRules = [
  { zasada: "Nigdy nie dawaj concession bez otrzymywania czegoś w zamian", opis: "Jednostronne ustępstwa dewaluują Twoją ofertę i zachęcają do dalszych żądań. Zawsze używaj 'Jeśli Wy... to my...'" },
  { zasada: "Zmniejszaj rozmiar kolejnych ustępstw", opis: "Pierwsza concession może być 10%, następna 5%, potem 2% — sygnalizuje, że zbliżasz się do limitu" },
  { zasada: "Ustępuj powoli i z trudnością", opis: "Łatwe ustępstwa sugerują, że masz duże pole do manewru. Każda concession powinna być 'wywalczona'" },
  { zasada: "Nie ustępuj w ostatniej chwili", opis: "Klienci mogą celowo zostawić negocjacje na koniec, licząc na 'last minute deal'. Trzymaj się warunków." },
];

export default function BlogNegocjacjeSprzedazowe() {
  return (
    <Layout>
      <SEOHead
        title="Negocjacje sprzedażowe — techniki i taktyki w B2B | Fotz.pl"
        description="Negocjacje sprzedażowe B2B — techniki (anchoring, BATNA, multi-variable), jak reagować na żądanie obniżki ceny i kiedy odejść od negocjacji. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/negocjacje-sprzedazowe-techniki-b2b"
      />
      <ArticleSchema
        title="Negocjacje sprzedażowe — techniki i taktyki w B2B"
        description="Kompletny przewodnik po negocjacjach sprzedażowych B2B: techniki, BATNA, obniżki ceny i zasady ustępstw."
        url="https://fotz.pl/blog/negocjacje-sprzedazowe-techniki-b2b"
        datePublished="2024-02-08"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Negocjacje sprzedażowe", url: "https://fotz.pl/blog/negocjacje-sprzedazowe-techniki-b2b" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Negocjacje sprzedażowe", href: "/blog/negocjacje-sprzedazowe-techniki-b2b" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-slate-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sprzedaż B2B
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Negocjacje sprzedażowe B2B
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Każdy deal to negocjacja — nieważne czy to cena, scope czy warunki płatności.
              Poznaj techniki, które pomagają zamykać deale na korzystnych warunkach bez niepotrzebnych ustępstw.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Kluczowych technik", value: "4" },
                { label: "Zasad ustępstw", value: "4" },
                { label: "Zmiennych do negocjacji", value: "6+" },
                { label: "Kluczowy koncept", value: "BATNA" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-slate-300">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Techniki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 kluczowe techniki negocjacji sprzedażowych</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Techniki negocjacji to nie manipulacja — to umiejętność prowadzenia rozmowy w taki sposób,
              aby osiągnąć warunki, które są korzystne dla obu stron i umożliwiają długą współpracę.
            </p>
          </FadeInView>
          <div className="space-y-6">
            {negotiationTactics.map((t, i) => (
              <FadeInView key={t.taktyka}>
                <div className={`rounded-xl border-2 p-6 ${
                  t.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  t.kolor === "green" ? "border-green-200 bg-green-50" :
                  t.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      t.kolor === "blue" ? "bg-blue-600" :
                      t.kolor === "green" ? "bg-green-600" :
                      t.kolor === "purple" ? "bg-purple-600" :
                      "bg-orange-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{t.taktyka}</h3>
                      <p className="text-gray-600 text-sm mb-3">{t.opis}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Jak stosować</div>
                          <p className="text-sm text-gray-700">{t.jak}</p>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Przykład</div>
                          <p className="text-sm text-gray-700 italic">{t.przykład}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Zasady ustępstw */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 złote zasady ustępstw</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Jak i kiedy ustępujesz ma ogromne znaczenie. Złe zarządzanie concessions może kosztować
              Cię marżę i osłabić Twoją pozycję negocjacyjną.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {concessionRules.map((r, i) => (
              <FadeInView key={r.zasada}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-slate-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{r.zasada}</h3>
                      <p className="text-gray-600 text-sm">{r.opis}</p>
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

      <ContactSection />
    </Layout>
  );
}
