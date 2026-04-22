import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest word of mouth marketing?",
    answer:
      "Word of mouth marketing (WOM, marketing szeptany) to strategia polegająca na stymulowaniu naturalnych rekomendacji między ludźmi. Gdy klient jest tak zadowolony z produktu lub usługi, że spontanicznie poleca go znajomym, jest to organiczny WOM. Marketing szeptany stara się ten proces celowo wzmacniać i skalować.",
  },
  {
    question: "Jaka jest różnica między WOM a viral marketingiem?",
    answer:
      "Viral marketing skupia się na tworzeniu treści, które sami użytkownicy masowo rozprzestrzeniają w mediach społecznościowych. WOM jest szerszym pojęciem — obejmuje też rekomendacje jeden na jeden, recenzje, polecenia w rozmowie. Viral jest podzbiorem WOM, ale WOM nie musi być viralowy.",
  },
  {
    question: "Jak mierzyć skuteczność word of mouth?",
    answer:
      "Kluczowe metryki WOM to: Net Promoter Score (NPS — jak chętnie polecasz?), wskaźnik poleceń (Referral Rate), share of voice w dyskusjach online, liczba organicznych wzmianek marki (brand mentions), oraz wzrost liczby klientów z kanału 'znajomy polecił'.",
  },
  {
    question: "Czy marketing szeptany jest etyczny?",
    answer:
      "Etyczny marketing szeptany polega na autentycznych rekomendacjach — nie na płaceniu za pozytywne opinie bez ujawnienia współpracy. Nieetyczne praktyki (fake reviews, ukryte konta) są sprzeczne z wytycznymi FTC/UOKiK i mogą skutkować karami. Transparentność jest kluczowa.",
  },
  {
    question: "Jak uruchomić program referencyjny?",
    answer:
      "Program referencyjny (referral program) nagradza klientów za polecanie znajomych. Kluczowe elementy: dwustronna nagroda (polecający i polecany obaj dostają coś wartościowego), prosty mechanizm (unikatowy link lub kod), właściwy moment aktywacji (po pierwszym sukcesie klienta), oraz promocja programu w kluczowych punktach styku.",
  },
];

const womTypes = [
  {
    typ: "Organic WOM",
    opis: "Spontaniczne polecenia bez żadnych bodźców ze strony marki",
    jak_stymulować: "Wyjątkowe doświadczenie klienta (CX), surprize & delight, product excellence",
    przykład: "Tesla — klienci sami chętnie opowiadają o swoich samochodach",
  },
  {
    typ: "Amplified WOM",
    opis: "Firma celowo tworzy kampanie lub programy zachęcające do dzielenia się",
    jak_stymulować: "Programy referencyjne, kampanie UGC, wyzwania na social media",
    przykład: "Dropbox Referral — 15 GB extra za polecenie znajomego",
  },
  {
    typ: "Influencer WOM",
    opis: "Rekomendacje od osób z dużym zasięgiem lub autorytetem w danej niszy",
    jak_stymulować: "Seeding produktów, ambasadorstwa, afiliacja",
    przykład: "Marki kosmetyczne wysyłające PR package do twórców beauty",
  },
  {
    typ: "Employee WOM",
    opis: "Pracownicy jako ambasadorzy marki polecający produkty i firmę jako pracodawcę",
    jak_stymulować: "Employee advocacy programy, szkolenia, kultura marki",
    przykład: "HubSpot — pracownicy aktywnie piszą o kulturze firmy na LinkedIn",
  },
];

const womDrivers = [
  { czynnik: "Jakość produktu", wpływ: "Bardzo wysoki", opis: "Produkt musi przeskoczyć próg 'wart polecenia'" },
  { czynnik: "Customer Experience", wpływ: "Bardzo wysoki", opis: "Nieoczekiwane pozytywne doświadczenia generują opowieści" },
  { czynnik: "Łatwość polecenia", wpływ: "Wysoki", opis: "Prosty link, kod, mechanizm zaproszenia obniża barierę" },
  { czynnik: "Waluta społeczna", wpływ: "Wysoki", opis: "Polecenie musi sprawiać, że polecający wygląda dobrze" },
  { czynnik: "Nagroda materialna", wpływ: "Średni", opis: "Zachęty finansowe pomagają, ale nie zastąpią naturalnej satysfakcji" },
  { czynnik: "Timing", wpływ: "Wysoki", opis: "Prośba o polecenie zaraz po 'aha moment' jest najbardziej skuteczna" },
];

export default function BlogWordOfMouthCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Word of Mouth Marketing | Fotz Studio"
        description="Word of mouth marketing — definicja, rodzaje WOM, jak stymulować polecenia, NPS i programy referencyjne. Kompletny przewodnik po marketingu szeptanym."
        canonical="https://fotz.pl/blog/word-of-mouth-marketing-co-to"

        keywords="Word of Mouth Marketing co to jest, Word of Mouth Marketing definicja, czym jest Word of Mouth Marketing, Word of Mouth Marketing w marketingu, Word of Mouth Marketing przykłady, jak działa Word of Mouth Marketing, Word of Mouth Marketing strategia"
      />
      <ArticleSchema
        title="Word of Mouth Marketing — co to jest i jak działa?"
        description="Kompletny przewodnik po word of mouth marketingu: rodzaje WOM, kluczowe czynniki poleceń, NPS i programy referencyjne."
        url="https://fotz.pl/blog/word-of-mouth-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Word of Mouth Marketing", url: "https://fotz.pl/blog/word-of-mouth-marketing-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Word of Mouth Marketing", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Word of Mouth Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Marketing szeptany to jeden z najskuteczniejszych kanałów pozyskiwania klientów.
            Poznaj rodzaje WOM, kluczowe czynniki poleceń i jak zbudować skuteczny program referencyjny.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest word of mouth marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Word of mouth marketing</strong> (WOMM, marketing szeptany) to ogół działań mających na celu
              stymulowanie i amplifikowanie naturalnych rekomendacji między ludźmi. Badania konsekwentnie pokazują,
              że rekomendacje od znajomych są uznawane za najbardziej wiarygodne źródło informacji o produktach —
              skuteczniejsze niż jakakolwiek reklama.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Nielsen podaje, że 92% konsumentów ufa rekomendacjom znajomych bardziej niż jakiejkolwiek innej formie reklamy.
              McKinsey szacuje, że marketing szeptany odpowiada za 20–50% wszystkich decyzji zakupowych.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { metryka: "92%", opis: "konsumentów ufa rekomendacjom znajomych (Nielsen)" },
                { metryka: "20-50%", opis: "decyzji zakupowych jest pod wpływem WOM (McKinsey)" },
                { metryka: "5×", opis: "wyższy LTV klientów pozyskanych przez polecenie" },
              ].map((stat, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{stat.metryka}</p>
                  <p className="text-slate-600 text-sm">{stat.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Typy WOM */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 typy word of mouth marketingu</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {womTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{t.typ}</h3>
                  <p className="text-slate-600 text-sm mb-3">{t.opis}</p>
                  <div className="bg-slate-50 rounded-lg p-3 mb-3">
                    <p className="text-xs font-semibold text-slate-500 mb-1">Jak stymulować:</p>
                    <p className="text-slate-700 text-sm">{t.jak_stymulować}</p>
                  </div>
                  <p className="text-xs text-slate-500 italic">Przykład: {t.przykład}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Czynniki WOM */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe czynniki napędzające polecenia</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Czynnik</th>
                    <th className="p-3 text-left">Wpływ</th>
                    <th className="p-3 text-left">Opis</th>
                  </tr>
                </thead>
                <tbody>
                  {womDrivers.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.czynnik}</td>
                      <td className="p-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          row.wpływ === "Bardzo wysoki" ? "bg-green-100 text-green-700" :
                          row.wpływ === "Wysoki" ? "bg-blue-100 text-blue-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>
                          {row.wpływ}
                        </span>
                      </td>
                      <td className="p-3 text-slate-600">{row.opis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* NPS */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Net Promoter Score (NPS) — fundament WOM</h2>
            <p className="text-slate-700 mb-6">
              NPS to kluczowy wskaźnik gotowości klientów do polecenia marki. Pytanie brzmi:
              "Jak bardzo prawdopodobne jest, że polecisz nas znajomemu?" (skala 0–10).
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { grupa: "Promotorzy", skala: "9–10", kolor: "green", opis: "Aktywnie polecają, są lojalni, napędzają organiczny wzrost" },
                { grupa: "Pasywni", skala: "7–8", kolor: "yellow", opis: "Zadowoleni, ale nie entuzjastyczni. Podatni na oferty konkurencji" },
                { grupa: "Krytycy", skala: "0–6", kolor: "red", opis: "Niezadowoleni, mogą aktywnie zniechęcać innych do marki" },
              ].map((g, i) => (
                <div key={i} className={`rounded-xl p-5 border-2 ${
                  g.kolor === "green" ? "bg-green-50 border-green-300" :
                  g.kolor === "yellow" ? "bg-yellow-50 border-yellow-300" :
                  "bg-red-50 border-red-300"
                }`}>
                  <p className="font-bold text-slate-900 text-lg mb-1">{g.grupa}</p>
                  <p className="text-2xl font-bold mb-2">{g.skala}</p>
                  <p className="text-slate-600 text-sm">{g.opis}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">Wzór NPS:</p>
              <p className="text-lg font-mono bg-slate-50 p-3 rounded">
                NPS = % Promotorów − % Krytyków
              </p>
              <p className="text-slate-500 text-sm mt-2">
                NPS powyżej 50 jest uznawany za doskonały. Powyżej 70 — klasa światowa.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — word of mouth marketing</h2>
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

      <RelatedArticles currentArticleId="word-of-mouth-marketing-co-to" />
      <ContactSection />
    </Layout>
  );
}
