import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest program lojalnościowy?",
    answer:
      "Program lojalnościowy to system nagradzania klientów za powtarzające się zakupy lub angażowanie się z marką. Celem jest zwiększenie częstotliwości zakupów, podwyższenie wartości klienta (LTV) i budowanie emocjonalnej więzi z marką. Popularne mechanizmy to zbieranie punktów, poziomy (tiery), nagrody i ekskluzywne benefity dla stałych klientów.",
  },
  {
    question: "Jakie są rodzaje programów lojalnościowych?",
    answer:
      "Główne typy to: programy punktowe (zbieranie punktów za każdy zakup), programy tierowe (poziomy VIP: Bronze/Silver/Gold/Platinum), programy cashback (zwrot części wydatków), programy płatne/membership (opłata za ekskluzywne benefity, jak Amazon Prime) oraz koalicyjne (kilka marek w jednym programie, jak kiedyś Payback).",
  },
  {
    question: "Czy programy lojalnościowe naprawdę działają?",
    answer:
      "Tak, ale tylko gdy są dobrze zaprojektowane. Badania Bond Brand Loyalty pokazują, że 79% konsumentów jest bardziej skłonnych do ponownego zakupu od marek z programem lojalnościowym. Jednak słabo zaprojektowane programy (zbyt trudne do zdobycia nagród, brak emocjonalnego zaangażowania) mogą nie przynieść ROI.",
  },
  {
    question: "Ile kosztuje wdrożenie programu lojalnościowego?",
    answer:
      "Koszty są zróżnicowane: prosty program email-based może kosztować kilka tysięcy PLN miesięcznie za platformę. Zaawansowany program z dedykowaną aplikacją, gamifikacją i integracją z CRM to inwestycja rzędu setek tysięcy do milionów PLN. Kluczowy jest ROI — koszt nagród + technologii vs. wzrost LTV i retencji.",
  },
  {
    question: "Jak zmierzyć skuteczność programu lojalnościowego?",
    answer:
      "Kluczowe metryki to: enrollment rate (procent klientów dołączających do programu), active member rate (aktywnie uczestniczący), redemption rate (procent odbieranych nagród), incremental revenue per member, retencja uczestników vs. nie-uczestników programu, LTV członków vs. non-members.",
  },
];

const loyaltyTypes = [
  {
    typ: "Program punktowy",
    opis: "Klienci zbierają punkty za zakupy, które wymieniają na nagrody",
    przykład: "Moje Lidl Plusy, Orlen Vitay",
    zalety: "Prosty mechanizm, szeroka adopcja",
    wady: "Niska emocjonalna więź, łatwy do skopiowania",
    ltvImpact: "Średni",
  },
  {
    typ: "Program tierowy (VIP)",
    opis: "Klienci awansują między poziomami (Bronze/Silver/Gold) odblokowując coraz lepsze benefity",
    przykład: "Sephora Beauty Insider, Marriott Bonvoy",
    zalety: "Wysokie zaangażowanie, gamifikacja",
    wady: "Złożony w implementacji",
    ltvImpact: "Wysoki",
  },
  {
    typ: "Cashback / Zwrot",
    opis: "Procent wydatków wraca do klienta jako gotówka lub kredyt w sklepie",
    przykład: "Karty cashback, Orange Flex",
    zalety: "Jasna i prosta wartość, motywuje do wyższych zakupów",
    wady: "Kosztowny dla firmy",
    ltvImpact: "Wysoki",
  },
  {
    typ: "Paid Membership",
    opis: "Klienci płacą za dostęp do ekskluzywnych benefitów",
    przykład: "Amazon Prime, Zalando Plus",
    zalety: "Bardzo wysoka lojalność i LTV",
    wady: "Bariera wejścia — musi być wyjątkowa wartość",
    ltvImpact: "Bardzo wysoki",
  },
  {
    typ: "Koalicyjny",
    opis: "Wiele marek w jednym ekosystemie punktowym",
    przykład: "Miles & More (lotnictwo), programy bankowe",
    zalety: "Szerokie zastosowanie punktów, większy zasięg",
    wady: "Złożoność, rozmyta tożsamość marki",
    ltvImpact: "Średni",
  },
];

const loyaltyDesignPrinciples = [
  { zasada: "Natychmiastowa wartość", opis: "Klient musi odczuć korzyść szybko — zbyt długie czekanie na pierwszą nagrodę zniechęca. Daj welcome bonus przy rejestracji." },
  { zasada: "Łatwy mechanizm", opis: "Klient musi rozumieć jak działasz bez czytania regulaminu. Jeden screen powinien wyjaśniać wszystko." },
  { zasada: "Emocjonalne zaangażowanie", opis: "Najlepsze programy tworzą poczucie przynależności do społeczności. Status i uznanie są często ważniejsze niż materialne nagrody." },
  { zasada: "Personalizacja nagród", opis: "Nagrody dopasowane do preferencji i historii zakupów konkretnego klienta są bardziej cenione niż katalogowe opcje." },
  { zasada: "Gamifikacja", opis: "Elementy grywalizacji: odznaki, streaki, wyzwania sezonowe, leaderboardy — zwiększają engagement bez podnoszenia kosztów." },
  { zasada: "Wielokanałowość", opis: "Program działa spójnie online i offline. Punkty i status są widoczne w aplikacji mobilnej w czasie rzeczywistym." },
];

export default function BlogLoyaltyProgramCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Program Lojalnościowy — co to jest? Rodzaje i zasady projektowania"
        description="Program lojalnościowy — definicja, 5 rodzajów (punktowy, tierowy, cashback, paid membership), jak projektować skuteczny program i jakie metryki mierzyć."
        canonicalUrl="https://fotz.pl/blog/loyalty-program-co-to"

        keywords="Program Lojalnościowy co to jest, Program Lojalnościowy definicja, czym jest Program Lojalnościowy, Program Lojalnościowy przykłady, jak działa Program Lojalnościowy, Program Lojalnościowy znaczenie, Program Lojalnościowy przewodnik"
      />
      <ArticleSchema
        title="Program Lojalnościowy — co to jest i jak działa?"
        description="Kompletny przewodnik po programach lojalnościowych: rodzaje, zasady projektowania i kluczowe metryki."
        url="https://fotz.pl/blog/loyalty-program-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Program Lojalnościowy", url: "https://fotz.pl/blog/loyalty-program-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Program Lojalnościowy" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Program Lojalnościowy — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Program lojalnościowy nagradza klientów za powtarzające się zakupy i buduje trwałe relacje.
            Poznaj 5 typów programów, zasady projektowania i jak mierzyć ich skuteczność.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest program lojalnościowy?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Program lojalnościowy</strong> to ustrukturyzowany system nagradzania klientów
              za powtarzalne zakupy, zaangażowanie lub inne pożądane zachowania. Jego celem jest
              zwiększenie częstotliwości zakupów, wartości koszyka i długości relacji z klientem.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Najlepsze programy lojalnościowe robią coś więcej niż dawanie zniżek — tworzą emocjonalne
              więzi, poczucie przynależności i status społeczny, który zachęca do lojalności niezależnie
              od ceny.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "79%", opis: "konsumentów chętniej kupuje od marek z programem lojalnościowym" },
                { stat: "5×", opis: "tańsze utrzymanie klienta niż pozyskanie nowego" },
                { stat: "2,5×", opis: "wyższy LTV członków programu vs. non-members" },
              ].map((s, i) => (
                <div key={i} className="bg-orange-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-orange-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 typów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 typów programów lojalnościowych</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {loyaltyTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-lg">{t.typ}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      t.ltvImpact === "Bardzo wysoki" ? "bg-green-100 text-green-700" :
                      t.ltvImpact === "Wysoki" ? "bg-blue-100 text-blue-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>LTV: {t.ltvImpact}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{t.opis}</p>
                  <p className="text-xs text-slate-500 italic mb-3">Przykład: {t.przykład}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 rounded p-2">
                      <p className="text-green-700">{t.zalety}</p>
                    </div>
                    <div className="bg-red-50 rounded p-2">
                      <p className="text-red-700">{t.wady}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Zasady projektowania */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 zasad projektowania skutecznego programu lojalnościowego</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {loyaltyDesignPrinciples.map((p, i) => (
                <div key={i} className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{p.zasada}</h3>
                    <p className="text-slate-600 text-sm">{p.opis}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — program lojalnościowy</h2>
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

      <ContactSection />
    </Layout>
  );
}
