import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest behavioral marketing?",
    answer:
      "Behavioral marketing (marketing behawioralny) to strategia polegająca na targetowaniu użytkowników na podstawie ich rzeczywistych zachowań online — odwiedzonych stron, historii zakupów, klikniętych produktów, czasu spędzonego na stronie, wyszukiwań — zamiast na podstawie danych demograficznych. Cel: dostarczyć właściwy komunikat właściwej osobie we właściwym momencie.",
  },
  {
    question: "Czym behavioral marketing różni się od remarketingu?",
    answer:
      "Remarketing to podzbiór behavioral marketingu — targetowanie osób, które już odwiedziły stronę. Behavioral marketing jest szerszy: obejmuje segmentację wg zachowań zakupowych (high-value vs. casual), personalizację contentu na stronie wg historii przeglądania, email triggers wg akcji użytkownika (abandoned cart, product viewed), oraz predykcyjne targetowanie wg wzorców zachowań.",
  },
  {
    question: "Jak zbierać dane behawioralne?",
    answer:
      "Dane behawioralne zbierasz przez: pixel tracking na stronie (GA4, Meta Pixel, LinkedIn Insight Tag), event tracking (kliknięcia, scrollowanie, formularz engagement), CRM dane z historii zakupów i interakcji, CDP (Customer Data Platform) agregująca dane z wielu źródeł, email analytics (open rate, kliknięcia, time of open), oraz dane z aplikacji mobilnej.",
  },
  {
    question: "Jakie są przykłady behavioral marketingu?",
    answer:
      "Klasyczne przykłady: Amazon 'Klienci którzy kupili X, kupili też Y' (collaborative filtering), Netflix rekomendacje wg historii oglądania, Spotify Discover Weekly (muzyczne preferencje), abandoned cart emails (porzucony koszyk), retargeting reklam z produktami oglądanymi, dynamic pricing (ceny wg zachowań i popytu), oraz push notyfikacje o ofertach wg czasu aktywności użytkownika.",
  },
  {
    question: "Jak behavioral marketing ma się do RODO?",
    answer:
      "RODO wymaga: wyraźnej zgody na zbieranie danych behawioralnych (szczególnie third-party cookies), transparentności o tym jak dane są używane, prawa do usunięcia danych, oraz prawa do sprzeciwu wobec profilowania. Behavioral marketing oparty na first-party data (własnej stronie) i zero-party data (zgody) jest bardziej bezpieczny niż ten oparty na third-party cookies.",
  },
];

const behavioralSegments = [
  {
    segment: "Purchase History (Historia Zakupów)",
    opis: "Segmentacja wg kategorii zakupionych produktów, wartości zamówień (AOV), częstotliwości zakupów (RFM)",
    zastosowanie: "Cross-sell powiązanych produktów, VIP segment dla high-value customers, reaktywacja nieaktywnych",
    przykład: "Klient kupił buty trekkingowe → retargetuj namiotami i plecakami",
  },
  {
    segment: "Browsing Behavior (Zachowanie na Stronie)",
    opis: "Strony odwiedzone, czas spędzony, głębokość scrollowania, kliknięte kategorie",
    zastosowanie: "Personalizacja strony głównej, spersonalizowane newslettery, retargeting odwiedzonych produktów",
    przykład: "Użytkownik przejrzał 5 laptopów → reklama z dokładnie tymi laptopami",
  },
  {
    segment: "Funnel Stage (Etap w Lejku)",
    opis: "Gdzie jest użytkownik w lejku: awareness, consideration, decision, post-purchase?",
    zastosowanie: "Różny content i CTA dla różnych etapów: edukacja vs. oferta vs. upsell",
    przykład: "Odwiedził pricing page → uruchom sekwencję follow-up email z demo ofertą",
  },
  {
    segment: "Engagement Level (Poziom Zaangażowania)",
    opis: "Aktywni użytkownicy vs. churning vs. nieaktywni — na podstawie last activity date",
    zastosowanie: "Win-back campaigns dla nieaktywnych, VIP offers dla super aktywnych, onboarding dla nowych",
    przykład: "Brak loginu 30+ dni → uruchom win-back email z rabatem",
  },
  {
    segment: "Device i Channel Behavior",
    opis: "Czy klient kupuje na mobile czy desktop? Jaki kanał ma najwyższe konwersje dla tego segmentu?",
    zastosowanie: "Optymalizacja UX pod dominujące urządzenie, channel-specific messaging",
    przykład: "70% zakupów na mobile → priorytet dla mobile-first UX i push notyfikacji",
  },
];

const behavioralTriggers = [
  { trigger: "Abandoned Cart Email", wyzwalacz: "Koszyk porzucony bez zakupu", timing: "1h + 24h + 72h", konwersja: "10–15% email sequence" },
  { trigger: "Browse Abandonment Email", wyzwalacz: "Obejrzany produkt bez dodania do koszyka", timing: "2–4h po wizycie", konwersja: "5–8%" },
  { trigger: "Post-Purchase Upsell", wyzwalacz: "Zakup zrealizowany", timing: "3–7 dni po zakupie", konwersja: "Wysoka (aktywny klient)" },
  { trigger: "Re-engagement Email", wyzwalacz: "Brak aktywności 30/60/90 dni", timing: "Auto po threshold", konwersja: "3–7% (win-back)" },
  { trigger: "Price Drop Alert", wyzwalacz: "Produkt z listy życzeń obniżył cenę", timing: "Natychmiast", konwersja: "15–25%" },
  { trigger: "Back in Stock Alert", wyzwalacz: "Produkt niedostępny wrócił do sprzedaży", timing: "Natychmiast", konwersja: "20–30%" },
];

export default function BlogBehavioralMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Behavioral Marketing — co to jest? Marketing behawioralny i targetowanie"
        description="Behavioral marketing (marketing behawioralny) — definicja, 5 segmentów behawioralnych, 6 triggerów (abandoned cart, browse abandonment) i RODO. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/behavioral-marketing-co-to"

        keywords="Behavioral Marketing co to jest, Behavioral Marketing definicja, czym jest Behavioral Marketing, Behavioral Marketing w marketingu, Behavioral Marketing przykłady, jak działa Behavioral Marketing, Behavioral Marketing strategia"
      />
      <ArticleSchema
        title="Behavioral Marketing — co to jest i jak stosować?"
        description="Kompletny przewodnik po behavioral marketingu: segmenty behawioralne, triggery email automation i compliance z RODO."
        url="https://fotz.pl/blog/behavioral-marketing-co-to"
        datePublished="2024-01-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Behavioral Marketing", url: "https://fotz.pl/blog/behavioral-marketing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Behavioral Marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Behavioral Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Marketing behawioralny targetuje na podstawie tego, co klient <em>zrobił</em> — nie kim jest demograficznie.
            Poznaj 5 segmentów behawioralnych, 6 triggerów i jak budować automację na zachowaniach.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest behavioral marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Behavioral marketing</strong> polega na używaniu danych o zachowaniach użytkownika —
              co przeglądał, co kupił, jak długo pozostawał na stronie, jakie emaile otworzył —
              do tworzenia spersonalizowanych, trafnych doświadczeń marketingowych.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Amazon przypisuje 35% przychodów do systemu rekomendacji opartego na zachowaniach.
              Netflix twierdzi, że algorytmy behawioralne odpowiadają za 80% treści oglądanych przez użytkowników.
              To najskuteczniejszy typ personalizacji — bo zamiast zgadywać, co chce klient, reagujesz
              na to, co faktycznie robi.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "35%", opis: "przychodów Amazona pochodzi z rekomendacji behawioralnych" },
                { stat: "6×", opis: "wyższy CTR personalizowanych treści behawioralnych vs. masowej komunikacji" },
                { stat: "10–15%", opis: "konwersja sekwencji abandoned cart email (vs. 1–2% cold email)" },
              ].map((s, i) => (
                <div key={i} className="bg-purple-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-purple-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 segmentów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 kluczowych segmentów behawioralnych</h2>
            <div className="space-y-5">
              {behavioralSegments.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{s.segment}</h3>
                  <p className="text-slate-600 mb-3">{s.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-purple-50 rounded p-3">
                      <p className="text-xs font-semibold text-purple-600 mb-1">Zastosowanie:</p>
                      <p className="text-purple-800">{s.zastosowanie}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                      <p className="text-slate-700">{s.przykład}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Triggery */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kluczowych triggerów behavioral automation</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Trigger</th>
                    <th className="p-3 text-left">Wyzwalacz</th>
                    <th className="p-3 text-left">Timing</th>
                    <th className="p-3 text-left">Konwersja</th>
                  </tr>
                </thead>
                <tbody>
                  {behavioralTriggers.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.trigger}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.wyzwalacz}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.timing}</td>
                      <td className="p-3 text-purple-700 font-medium text-sm">{row.konwersja}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — behavioral marketing</h2>
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
