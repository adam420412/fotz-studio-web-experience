import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest multichannel marketing?",
    answer:
      "Multichannel marketing (marketing wielokanałowy) to strategia dotarcia do klientów przez wiele kanałów komunikacji i sprzedaży jednocześnie — np. sklep stacjonarny, strona internetowa, aplikacja mobilna, social media, email i telewizja. Klient może wybrać kanał, przez który chce wchodzić w interakcję z marką, ale kanały działają niezależnie od siebie.",
  },
  {
    question: "Czym multichannel różni się od omnichannel?",
    answer:
      "Multichannel: wiele kanałów, ale każdy działa niezależnie — klient obsługiwany jest oddzielnie w każdym kanale, bez integracji historii i kontekstu. Omnichannel: wiele kanałów w pełni zintegrowanych — klient może przejść z jednego kanału do drugiego bez utraty historii interakcji, koszyka, statusu zamówienia. Omnichannel stawia klienta w centrum, multichannel stawia kanał w centrum.",
  },
  {
    question: "Jakie kanały wchodzą w skład multichannel marketingu?",
    answer:
      "Typowe kanały multichannel to: sklep fizyczny (offline), strona internetowa (owned), aplikacja mobilna, email marketing, social media (Facebook, Instagram, TikTok, LinkedIn), paid advertising (Google Ads, Meta Ads), marketplace (Amazon, Allegro, Ceneo), telewizja i radio (ATL), call center i chatbot, oraz direct mail.",
  },
  {
    question: "Jakie są korzyści z multichannel marketingu?",
    answer:
      "Korzyści: dotarcie do klientów tam, gdzie już są (zamiast wymagania zmiany zachowań), wyższy zasięg i częstotliwość kontaktów z marką, możliwość testowania efektywności różnych kanałów, dywersyfikacja ryzyka (awaria jednego kanału nie zatrzymuje sprzedaży), różne kanały dla różnych etapów lejka zakupowego.",
  },
  {
    question: "Jak mierzyć skuteczność multichannel marketingu?",
    answer:
      "Mierzenie multichannel wymaga: UTM tracking dla każdego kanału cyfrowego, atrybucji wielodotykowej (multi-touch attribution) zamiast last-click, dedykowanych kodów promocyjnych per kanał, badań 'skąd nas znasz?', analizy customer journey przez Google Analytics 4, oraz Marketing Mix Modeling (MMM) dla dużych budżetów z kanałami offline.",
  },
];

const multichannelVsOmni = [
  { kryterium: "Integracja kanałów", multichannel: "Kanały niezależne od siebie", omnichannel: "Wszystkie kanały zintegrowane w jeden ekosystem" },
  { kryterium: "Dane klienta", multichannel: "Dane silosowane per kanał", omnichannel: "Zunifikowany profil klienta (CDP)" },
  { kryterium: "Spójność CX", multichannel: "Różne doświadczenia per kanał", omnichannel: "Ciągłe doświadczenie bez przerw" },
  { kryterium: "Trudność implementacji", multichannel: "Niska-Średnia", omnichannel: "Wysoka (integracja systemów, CDP)" },
  { kryterium: "Technologia", multichannel: "Niezależne systemy per kanał", omnichannel: "CDP, API integracje, unified data lake" },
  { kryterium: "Przykład", multichannel: "Sklep, strona, email działają oddzielnie", omnichannel: "Zaczął zakup online, dokończył w sklepie bez utraty koszyka" },
];

const channelMatrix = [
  { kanał: "Sklep fizyczny", typ: "Offline", etap: "Consideration + Purchase", mocne: "Doświadczenie sensoryczne, trust, impulsowe zakupy", słabe: "Ograniczony zasięg geograficzny, wysokie koszty stałe" },
  { kanał: "Strona www", typ: "Digital Owned", etap: "Wszystkie etapy", mocne: "24/7, pełna kontrola, dane, SEO", słabe: "Wymaga ruchu zewnętrznego, konkurencja" },
  { kanał: "Email Marketing", typ: "Digital Owned", etap: "Nurturing + Retention", mocne: "Owned channel, wysoki ROI, personalizacja", słabe: "Wymaga listy, spam filtery" },
  { kanał: "Social Media", typ: "Digital Earned/Paid", etap: "Awareness + Consideration", mocne: "Zasięg, engagement, community", słabe: "Algorytmy, organic reach maleje" },
  { kanał: "Google/Meta Ads", typ: "Digital Paid", etap: "Awareness + Conversion", mocne: "Precyzyjne targetowanie, skalowalne", słabe: "Kosztowne, zależność od platformy" },
  { kanał: "Marketplace (Allegro)", typ: "Digital Third-Party", etap: "Purchase", mocne: "Istniejąca baza klientów, trust platformy", słabe: "Marża, brak relacji z klientem" },
];

const multichannelSteps = [
  {
    krok: "Mapuj Customer Journey",
    opis: "Zrozum jak Twoi klienci faktycznie poruszają się przed zakupem. Jakich kanałów używają na etapie discovery, consideration, purchase? Dane z GSC, GA4, CRM i badań jakościowych.",
  },
  {
    krok: "Zidentyfikuj Kluczowe Kanały",
    opis: "Nie powinieneś być na wszystkich kanałach — powinieneś być na kanałach, gdzie jest Twój ICP. Priorytetyzuj wg potencjalnego ROI i obecnego zasobu (budżet, czas, kompetencje).",
  },
  {
    krok: "Zbuduj Spójny Przekaz",
    opis: "Każdy kanał ma inny format i normy komunikacyjne, ale przekaz marki musi być spójny. Brand voice, key messages i wartości nie zmieniają się — zmienia się tylko forma adaptacji.",
  },
  {
    krok: "Wdróż Tracking",
    opis: "Każdy kanał musi mieć własne trackowanie: UTM parametry, dedykowane kody rabatowe, pixel tracking, konwersje w platformach reklamowych. Bez danych jesteś ślepy na efektywność.",
  },
  {
    krok: "Analizuj i Optymalizuj",
    opis: "Regularnie analizuj performance per kanał i synergię między kanałami. Który kanał najlepiej generuje awareness? Który najlepiej konwertuje? Alokuj budżet wg danych, nie przyzwyczajenia.",
  },
];

export default function BlogMultichannelMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Multichannel Marketing | Fotz Studio"
        description="Multichannel marketing — definicja, różnice vs. omnichannel, 6 kanałów (sklep, www, email, social, ads, marketplace), 5-krokowy proces. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/multichannel-marketing-co-to"

        keywords="Multichannel Marketing co to jest, Multichannel Marketing definicja, czym jest Multichannel Marketing, Multichannel Marketing w marketingu, Multichannel Marketing przykłady, jak działa Multichannel Marketing, Multichannel Marketing strategia"

        canonical="https://fotz.pl/blog/multichannel-marketing-co-to"
      />
      <ArticleSchema
        title="Multichannel Marketing — co to jest i jak wdrożyć?"
        description="Kompletny przewodnik po multichannel marketingu: porównanie z omnichannel, matryca kanałów i 5-krokowy proces wdrożenia."
        url="https://fotz.pl/blog/multichannel-marketing-co-to"
        datePublished="2024-01-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Multichannel Marketing", url: "https://fotz.pl/blog/multichannel-marketing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Multichannel Marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Multichannel Marketing — co to jest i jak wdrożyć?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Multichannel marketing dociera do klientów przez wiele kanałów jednocześnie.
            Poznaj różnicę między multichannel a omnichannel, matrycę 6 kanałów i 5-krokowy proces wdrożenia.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest multichannel marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Multichannel marketing</strong> to obecność marki w wielu kanałach komunikacji
              i sprzedaży — od sklepów fizycznych, przez strony internetowe, po email, social media
              i marketplace. Klient sam wybiera kanał, przez który chce wchodzić w interakcję z marką.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania Harvard Business Review pokazują, że klienci wielokanałowi wydają o 10% więcej
              online i 4% więcej w sklepie niż klienci single-channel. To argument finansowy
              za inwestycją w wielokanałową strategię.
            </p>
          </div>
        </section>
      </FadeInView>

      {/* Multichannel vs. Omnichannel */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Multichannel vs. Omnichannel — różnice</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kryterium</th>
                    <th className="p-3 text-left">Multichannel</th>
                    <th className="p-3 text-left">Omnichannel</th>
                  </tr>
                </thead>
                <tbody>
                  {multichannelVsOmni.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.kryterium}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.multichannel}</td>
                      <td className="p-3 text-blue-700 text-sm font-medium">{row.omnichannel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Matryca kanałów */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Matryca 6 kanałów multichannel</h2>
            <div className="space-y-4">
              {channelMatrix.map((c, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{c.typ}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{c.kanał}</h3>
                      <p className="text-xs text-blue-600 mb-2">Etap lejka: {c.etap}</p>
                      <div className="grid md:grid-cols-2 gap-2 text-xs">
                        <div className="text-green-700">+ {c.mocne}</div>
                        <div className="text-red-600">- {c.słabe}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 kroków */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 kroków wdrożenia multichannel marketingu</h2>
            <div className="space-y-5">
              {multichannelSteps.map((item, i) => (
                <div key={i} className="flex gap-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.krok}</h3>
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
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — multichannel marketing</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="multichannel-marketing-co-to" />
      <ContactSection />
    </Layout>
  );
}
