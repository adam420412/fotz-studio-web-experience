import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest mobile marketing?",
    answer:
      "Mobile marketing to ogół działań marketingowych skierowanych do użytkowników smartfonów i tabletów, realizowanych przez kanały mobilne: SMS, MMS, push notifications, reklamy w aplikacjach, mobile web, social media i komunikatory. Ponad 60% ruchu internetowego pochodzi z urządzeń mobilnych, co czyni mobile marketing kluczowym elementem strategii.",
  },
  {
    question: "Jakie są kanały mobile marketingu?",
    answer:
      "Główne kanały mobile marketingu to: SMS/MMS marketing, push notifications (in-app i web push), reklamy w aplikacjach mobilnych (In-App Advertising), mobile social media (TikTok, Instagram Stories, Reels), Mobile SEO i AMP, QR kody oraz geolokalizacja i geofencing.",
  },
  {
    question: "Jak mierzyć skuteczność mobile marketingu?",
    answer:
      "Kluczowe metryki mobile to: open rate i CTR push notifications, SMS delivery rate i conversion rate, install rate i CPI (cost per install) dla kampanii aplikacyjnych, DAU/MAU (daily/monthly active users), session length, mobile conversion rate (mCVR) oraz ROAS z mobile ads.",
  },
  {
    question: "Co to jest mobile-first w marketingu?",
    answer:
      "Mobile-first oznacza projektowanie doświadczeń i kampanii z myślą przede wszystkim o urządzeniach mobilnych, a dopiero potem adaptowanie na desktop. Obejmuje: responsywny design strony, szybkość ładowania na mobile (Core Web Vitals), formaty reklamowe natywne dla mobile (vertical video, stories) oraz uproszczone ścieżki zakupowe na małych ekranach.",
  },
  {
    question: "Czy SMS marketing jest nadal skuteczny?",
    answer:
      "Tak — SMS marketing ma najwyższy open rate ze wszystkich kanałów: 98% wiadomości SMS jest otwieranych, z czego 90% w ciągu pierwszych 3 minut. Współczynnik konwersji SMS jest 10× wyższy niż email. Jest szczególnie skuteczny dla: limitowanych ofert czasowych, przypomnień o wizytach, OTP i transakcyjnych powiadomień.",
  },
];

const mobileChannels = [
  {
    kanał: "SMS Marketing",
    open_rate: "98%",
    ctr: "19–36%",
    zastosowanie: "Oferty flash, przypomnienia, transakcje, OTP",
    zalety: "Najwyższy open rate, szybki zasięg",
    wady: "Ograniczona długość, koszt na wiadomość",
  },
  {
    kanał: "Push Notifications",
    open_rate: "7–13% (web), 20–30% (app)",
    ctr: "2–8%",
    zastosowanie: "Re-engagement, nowości, personalizowane oferty",
    zalety: "Bezpłatne, real-time, personalizowalne",
    wady: "Łatwy opt-out, ryzyko notification fatigue",
  },
  {
    kanał: "In-App Advertising",
    open_rate: "N/A",
    ctr: "0,5–2%",
    zastosowanie: "Awareness, pobrania aplikacji, promocje",
    zalety: "Precyzyjne targetowanie kontekstowe",
    wady: "Adblockers, inwazyjność interstitiali",
  },
  {
    kanał: "Mobile Social Media",
    open_rate: "N/A",
    ctr: "0,5–3% (reklamy)",
    zastosowanie: "Awareness, content marketing, sprzedaż",
    zalety: "Natywny format dla mobile, viral potencjał",
    wady: "Algorytmy, rosnące koszty",
  },
  {
    kanał: "QR Kody",
    open_rate: "N/A",
    ctr: "Zależy od kontekstu",
    zastosowanie: "Offline-to-online bridge, menu, AR",
    zalety: "Łatwa implementacja, mierzalność",
    wady: "Wymagają aktywnego działania użytkownika",
  },
  {
    kanał: "Geofencing",
    open_rate: "N/A",
    ctr: "3–5% wyższy vs. standardowe",
    zastosowanie: "Lokalne oferty, store visits, eventy",
    zalety: "Hiper-lokalny targeting",
    wady: "Prywatność, wymaga danych lokalizacyjnych",
  },
];

const mobileFirstPrinciples = [
  { zasada: "Szybkość ładowania", opis: "Strona mobilna musi ładować się poniżej 3 sekund. Każda sekunda opóźnienia obniża konwersję o 7%. Używaj lazy loading, kompresji obrazów i CDN." },
  { zasada: "Responsywny design", opis: "Strona powinna automatycznie dostosowywać się do rozmiaru ekranu. Przyciski minimum 44x44 px, duże fonty (16px+), wyraźne CTA widoczne bez scrollowania." },
  { zasada: "Uproszczone formularze", opis: "Na mobile formularze muszą być minimalne — każde pole to bariera. Użyj Google One-Tap, social login i autofill. Limit: maksymalnie 3–5 pól." },
  { zasada: "Vertical video first", opis: "Treści wideo na mobile powinny być w formacie 9:16 (pionowy). Stories, Reels, TikTok dominują — projektuj content natywnie dla ekranów telefonu." },
  { zasada: "Thumb-friendly navigation", opis: "Najważniejsze elementy navigacji i CTA w dolnej części ekranu — łatwo dostępne kciukiem. Unikaj menu hamburger na mobile (ukrywa ważne opcje)." },
];

export default function BlogMobileMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Mobile Marketing | Fotz Studio"
        description="Mobile marketing — definicja, 6 kanałów (SMS, push, in-app), metryki i zasady mobile-first. Kompletny przewodnik po marketingu mobilnym w 2024 roku."
        canonical="https://fotz.pl/blog/mobile-marketing-co-to"

        keywords="Mobile Marketing co to jest, Mobile Marketing definicja, czym jest Mobile Marketing, Mobile Marketing w marketingu, Mobile Marketing przykłady, jak działa Mobile Marketing, Mobile Marketing strategia"

        canonical="https://fotz.pl/blog/mobile-marketing-co-to"
      />
      <ArticleSchema
        title="Mobile Marketing — co to jest i jak działa?"
        description="Kompletny przewodnik po mobile marketingu: 6 kanałów, metryki i zasady projektowania mobile-first."
        url="https://fotz.pl/blog/mobile-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Mobile Marketing", url: "https://fotz.pl/blog/mobile-marketing-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Mobile Marketing", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Mobile Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ponad 60% ruchu internetowego pochodzi z urządzeń mobilnych. Poznaj 6 kanałów mobile marketingu,
            kluczowe metryki i zasady strategii mobile-first.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest mobile marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Mobile marketing</strong> to wszystkie działania marketingowe projektowane
              z myślą o użytkownikach smartfonów i tabletów. Obejmuje zarówno dedykowane kanały mobilne
              (SMS, push notifications, in-app ads), jak i optymalizację istniejących kanałów pod kątem mobile
              (mobile web, mobile-first email, vertical video).
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Przeciętny Polak spędza z telefonem 4+ godziny dziennie. Telefon to pierwsze urządzenie
              po które sięga rano i ostatnie przed snem. Mobile marketing pozwala dotrzeć do klienta
              dokładnie wtedy i tam, gdzie przebywa.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "60%+", opis: "całego ruchu internetowego pochodzi z urządzeń mobilnych" },
                { stat: "98%", opis: "open rate SMS — najwyższy ze wszystkich kanałów marketingowych" },
                { stat: "4h+", opis: "średni czas Polaka spędzony ze smartfonem dziennie" },
              ].map((s, i) => (
                <div key={i} className="bg-cyan-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-cyan-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Kanały */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kanałów mobile marketingu</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {mobileChannels.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{c.kanał}</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div className="bg-slate-50 rounded p-2">
                      <p className="font-medium text-slate-500">Open Rate</p>
                      <p className="text-slate-800 font-bold">{c.open_rate}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-2">
                      <p className="font-medium text-slate-500">CTR</p>
                      <p className="text-slate-800 font-bold">{c.ctr}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">Zastosowanie: {c.zastosowanie}</p>
                  <div className="flex gap-2 flex-wrap text-xs">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">{c.zalety}</span>
                    <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded">{c.wady}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Mobile-first */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 zasad strategii mobile-first</h2>
            <div className="space-y-5">
              {mobileFirstPrinciples.map((p, i) => (
                <div key={i} className="flex gap-5 bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{p.zasada}</h3>
                    <p className="text-slate-600">{p.opis}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — mobile marketing</h2>
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

      <RelatedArticles currentArticleId="mobile-marketing-co-to" />
      <ContactSection />
    </Layout>
  );
}
