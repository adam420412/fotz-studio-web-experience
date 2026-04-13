import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest personalizacja w marketingu?",
    answer:
      "Personalizacja w marketingu to dostosowywanie komunikatów, ofert i doświadczeń do indywidualnych cech, zachowań i preferencji konkretnych użytkowników lub segmentów. Zamiast wysyłać jeden komunikat do wszystkich, personalizacja dostarcza właściwą wiadomość właściwej osobie we właściwym czasie.",
  },
  {
    question: "Jakie dane są potrzebne do personalizacji?",
    answer:
      "Dane do personalizacji dzielą się na: demograficzne (wiek, płeć, lokalizacja), behawioralne (historia przeglądania, zakupów, kliknięć), psychograficzne (zainteresowania, wartości), kontekstowe (urządzenie, godzina, lokalizacja w czasie rzeczywistym) oraz dane z CRM (historia relacji z firmą, etap w lejku).",
  },
  {
    question: "Czy personalizacja narusza prywatność użytkowników?",
    answer:
      "Personalizacja oparta na danych first-party (zebranych bezpośrednio od klienta z jego zgodą) jest w pełni zgodna z RODO. Kluczowe jest: transparentność o zbieraniu danych, jasne opcje opt-in/opt-out i ograniczenie do danych niezbędnych. Personalizacja na danych third-party (ciasteczka śledzące) zmaga się z rosnącymi ograniczeniami regulacyjnymi.",
  },
  {
    question: "Jakie narzędzia są używane do personalizacji?",
    answer:
      "Platformy do personalizacji to: CDP (Customer Data Platform) jak Segment, Amplitude, mParticle; narzędzia email personalizacji (HubSpot, Klaviyo, ActiveCampaign); narzędzia personalizacji strony (Optimizely, Dynamic Yield); oraz rekomendacje produktowe (Insider, Bloomreach).",
  },
  {
    question: "Jak zacząć z personalizacją przy ograniczonych zasobach?",
    answer:
      "Zacznij od najprostszych form: segmentacja email list (nowi vs. powracający klienci), personalizacja tematu emaila (imię), rekomendacje 'podobne produkty' na stronie, dynamiczny content w oparciu o źródło ruchu (np. osobna strona dla ruchu z reklam vs. organic) i retargeting na podstawie porzuconych koszyków.",
  },
];

const personalizationLevels = [
  {
    poziom: "Poziom 1: Segmentacja",
    opis: "Dzielenie bazy na grupy o podobnych cechach i wysyłanie różnych komunikatów do różnych segmentów",
    trudność: "Niska",
    przykład: "Różne emaile dla klientów z Warszawy i Krakowa; różny content dla B2B i B2C",
    wymagania: "Podstawowe dane CRM, platforma email",
  },
  {
    poziom: "Poziom 2: Personalizacja behawioralna",
    opis: "Dostosowanie komunikatów na podstawie zachowań użytkownika (co przeglądał, kupował, klikał)",
    trudność: "Średnia",
    przykład: "Rekomendacje produktów bazujące na historii zakupów; email po porzuceniu koszyka",
    wymagania: "Tracking behawioralny, marketing automation",
  },
  {
    poziom: "Poziom 3: Personalizacja predyktywna",
    opis: "Algorytmy ML przewidują następne działanie klienta i personalizują doświadczenie z wyprzedzeniem",
    trudność: "Wysoka",
    przykład: "Netflix — 'polecamy dla Ciebie'; Spotify Discover Weekly",
    wymagania: "CDP, ML modele, duże zbiory danych",
  },
  {
    poziom: "Poziom 4: Personalizacja 1:1 w czasie rzeczywistym",
    opis: "Natychmiastowe dostosowanie strony, oferty i komunikatu do każdego użytkownika",
    trudność: "Bardzo wysoka",
    przykład: "Amazon — strona główna unikalna dla każdego użytkownika",
    wymagania: "Real-time CDP, zaawansowana platforma personalizacji",
  },
];

const personalizationChannels = [
  { kanał: "Email", personalizacja: "Temat, imię, treść, oferty, timing", wpływ_na_CTR: "+50–100%", trudność: "Niska" },
  { kanał: "Strona www", personalizacja: "Banner, CTA, polecane produkty, treść", wpływ_na_CTR: "+30–50%", trudność: "Średnia" },
  { kanał: "Push notifications", personalizacja: "Timing, treść, deep link", wpływ_na_CTR: "+200–400%", trudność: "Średnia" },
  { kanał: "Reklamy display", personalizacja: "Dynamic creative optimization (DCO)", wpływ_na_CTR: "+20–40%", trudność: "Średnia" },
  { kanał: "App/Produkt", personalizacja: "Onboarding, dashboard, rekomendacje in-app", wpływ_na_CTR: "Wysoki LTV impact", trudność: "Wysoka" },
  { kanał: "SMS", personalizacja: "Imię, oferta, trigger timing", wpływ_na_CTR: "+45%", trudność: "Niska" },
];

export default function BlogPersonalizationMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Personalizacja w marketingu — co to jest i jak ją wdrożyć?"
        description="Personalizacja marketingu — definicja, 4 poziomy personalizacji, kanały i narzędzia. Dowiedz się jak personalizować komunikację i zwiększyć CTR i konwersję."
        canonicalUrl="https://fotz.pl/blog/personalizacja-marketingu-co-to"

        keywords="Personalizacja w marketingu co to jest, Personalizacja w marketingu definicja, czym jest Personalizacja w marketingu, Personalizacja w marketingu w marketingu, Personalizacja w marketingu przykłady, jak działa Personalizacja w marketingu, Personalizacja w marketingu strategia"

        canonical="https://fotz.pl/blog/personalizacja-marketingu-co-to"
      />
      <ArticleSchema
        title="Personalizacja w marketingu — co to jest i jak ją wdrożyć?"
        description="Kompletny przewodnik po personalizacji w marketingu: 4 poziomy, kanały, narzędzia i jak zacząć przy ograniczonych zasobach."
        url="https://fotz.pl/blog/personalizacja-marketingu-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Personalizacja w marketingu", url: "https://fotz.pl/blog/personalizacja-marketingu-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Personalizacja w marketingu" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Personalizacja w marketingu — co to jest i jak wdrożyć?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Personalizacja dostarcza właściwy komunikat właściwej osobie we właściwym czasie.
            Poznaj 4 poziomy personalizacji, najlepsze kanały i jak zacząć nawet przy ograniczonych zasobach.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest personalizacja w marketingu?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Personalizacja w marketingu</strong> to proces dostosowywania komunikatów, ofert,
              treści i doświadczeń do indywidualnych cech i potrzeb konkretnych użytkowników lub precyzyjnych segmentów.
              To przeciwieństwo tradycyjnego "broadcast" marketingu, gdzie jeden komunikat trafia do wszystkich.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              McKinsey szacuje, że personalizacja może generować 5–8× wyższy ROI z wydatków marketingowych
              i podnieść sprzedaż o 10% lub więcej. Epsilon stwierdza, że 80% konsumentów
              jest bardziej skłonnych kupić od firmy, która oferuje spersonalizowane doświadczenia.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "80%", opis: "konsumentów chętniej kupuje od firm personalizujących doświadczenia (Epsilon)" },
                { stat: "5–8×", opis: "wyższy ROI z personalizacji vs. tradycyjnego marketingu (McKinsey)" },
                { stat: "+20%", opis: "wzrost sprzedaży dzięki spersonalizowanym rekomendacjom" },
              ].map((s, i) => (
                <div key={i} className="bg-violet-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-violet-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 poziomy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 poziomy personalizacji marketingowej</h2>
            <div className="space-y-5">
              {personalizationLevels.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{p.poziom}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        p.trudność === "Niska" ? "bg-green-100 text-green-700" :
                        p.trudność === "Średnia" ? "bg-yellow-100 text-yellow-700" :
                        p.trudność === "Wysoka" ? "bg-orange-100 text-orange-700" :
                        "bg-red-100 text-red-700"
                      }`}>Trudność: {p.trudność}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-3">{p.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-medium text-slate-500 mb-1">Przykład:</p>
                      <p className="text-slate-700">{p.przykład}</p>
                    </div>
                    <div className="bg-violet-50 rounded p-3">
                      <p className="text-xs font-medium text-violet-600 mb-1">Wymagania:</p>
                      <p className="text-violet-800">{p.wymagania}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Kanały */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Personalizacja w różnych kanałach marketingowych</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kanał</th>
                    <th className="p-3 text-left">Co personalizować?</th>
                    <th className="p-3 text-left">Wpływ na CTR/konwersję</th>
                    <th className="p-3 text-left">Trudność</th>
                  </tr>
                </thead>
                <tbody>
                  {personalizationChannels.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.kanał}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.personalizacja}</td>
                      <td className="p-3 text-green-700 font-medium text-sm">{row.wpływ_na_CTR}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.trudność}</td>
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
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — personalizacja w marketingu</h2>
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

      <RelatedArticles currentArticleId="personalizacja-marketingu-co-to" />
      <ContactSection />
    </Layout>
  );
}
