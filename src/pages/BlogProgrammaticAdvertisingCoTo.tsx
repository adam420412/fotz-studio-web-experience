import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest programmatic advertising?",
    answer:
      "Programmatic advertising (reklama programatyczna) to zautomatyzowany zakup i sprzedaż przestrzeni reklamowej online w czasie rzeczywistym przy użyciu algorytmów. Zamiast ręcznych negocjacji z wydawcami — oprogramowanie automatycznie licytuje i kupuje miejsca reklamowe w milisekundach, dobierając je do dokładnie zdefiniowanej grupy docelowej. Programmatic obejmuje dziś ponad 80% globalnych wydatków na display advertising.",
  },
  {
    question: "Jak działa Real-Time Bidding (RTB) w programmatic?",
    answer:
      "Real-Time Bidding (RTB) to mechanizm aukcji w czasie rzeczywistym: gdy użytkownik odwiedza stronę, wydawca wystawia miejsce reklamowe na aukcję (Supply-Side Platform). Platformy po stronie reklamodawców (Demand-Side Platform) w ciągu 100 milisekund oceniają użytkownika wg jego profilu danych i licytują. Najwyższa oferta wygrywa i jej reklama zostaje wyświetlona — wszystko przed załadowaniem strony.",
  },
  {
    question: "Czym różni się programmatic od Google Ads?",
    answer:
      "Google Ads (Search i Display) to zamknięty ekosystem reklam w sieci Google/YouTube. Programmatic to otwarty ekosystem działający przez DSP (DV360, The Trade Desk, Xandr) i SSP na setkach tysięcy stron. Programmatic daje dostęp do szerszego inventory, zaawansowane targetowanie na danych 3rd-party, oraz możliwość budowania custom audiences. Google Ads jest łatwiejszy, programmatic jest elastyczniejszy dla zaawansowanych kampanii brand i awareness.",
  },
  {
    question: "Co to jest DMP (Data Management Platform)?",
    answer:
      "DMP (Data Management Platform) to platforma zbierająca, organizująca i aktywująca dane o użytkownikach z wielu źródeł (1st, 2nd, 3rd-party) do celów targetowania reklamowego. DMP pozwala budować szczegółowe segmenty odbiorców na podstawie danych demograficznych, behawioralnych i kontekstualnych, a następnie aktywować je w DSP do kampanii programatycznych. Przykłady: Oracle BlueKai, Salesforce DMP, Adobe Audience Manager.",
  },
  {
    question: "Jakie są główne wyzwania programmatic advertising?",
    answer:
      "Główne wyzwania: brand safety (reklamy pojawiające się obok nieodpowiednich treści), ad fraud (boty generujące fałszywe wyświetlenia — szacowany koszt 80+ mld USD rocznie), viewability (procent reklam faktycznie widocznych dla ludzi), third-party cookie deprecation (koniec cookies ograniczy targeting), oraz brand suitability (nie tylko safety ale dopasowanie kontekstu treści do wartości marki).",
  },
];

const programmaticEcosystem = [
  {
    element: "DSP (Demand-Side Platform)",
    rola: "Platforma po stronie reklamodawcy — kupuje przestrzeń reklamową w imieniu advertiserów",
    przykłady: "Google DV360, The Trade Desk, Xandr (Microsoft), Amazon DSP, Adobe Advertising Cloud",
    kto: "Agencje mediowe, marketerzy, trading desks",
  },
  {
    element: "SSP (Supply-Side Platform)",
    rola: "Platforma po stronie wydawcy — sprzedaje przestrzeń reklamową, maksymalizuje yield",
    przykłady: "Google Ad Manager, Magnite, PubMatic, OpenX, Improve Digital",
    kto: "Wydawcy (portale, apki, serwisy streamingowe)",
  },
  {
    element: "Ad Exchange",
    rola: "Rynek cyfrowy łączący DSP i SSP — tu odbywa się aukcja RTB",
    przykłady: "Google AdX, OpenX, AppNexus (Xandr), Index Exchange",
    kto: "Infrastruktura łącząca kupujących i sprzedających",
  },
  {
    element: "DMP (Data Management Platform)",
    rola: "Platforma zarządzania danymi o użytkownikach do budowania segmentów targetowania",
    przykłady: "Oracle BlueKai, Salesforce DMP, Adobe Audience Manager",
    kto: "Zaawansowani advertiserzy budujący custom audiences",
  },
  {
    element: "Ad Server",
    rola: "Serwuje reklamy, śledzi wyświetlenia, mierzy performance, zarządza kampaniami",
    przykłady: "Campaign Manager 360 (Google), Sizmek (Amazon), Adform",
    kto: "Agencje i advertiserzy do unified measurement",
  },
];

const buyingTypes = [
  { typ: "Open RTB (Open Auction)", opis: "Otwarta aukcja — każdy advertiser może licytować. Największe inventory, najniższe ceny.", cpm: "Najniższe (0.50–5 USD)", kontrola: "Niska — brand safety risk" },
  { typ: "Private Marketplace (PMP)", opis: "Zamknięta aukcja RTB dla wybranych advertiserów. Wyżej wartościowe inventory premium wydawców.", cpm: "Średnie–wysokie (3–20 USD)", kontrola: "Średnia — wybrani partnerzy" },
  { typ: "Preferred Deals", opis: "Negocjowana, stała cena z konkretnym wydawcą. Advertiser ma pierwszeństwo przed aukcją.", cpm: "Negocjowane (5–30 USD)", kontrola: "Wysoka — fixed placement" },
  { typ: "Programmatic Guaranteed", opis: "Gwarantowana liczba impresji po negocjowanej cenie — cyfrowy odpowiednik traditional IO.", cpm: "Najwyższe (10–50+ USD)", kontrola: "Najwyższa — gwarantowane miejsce" },
];

const programmaticMetrics = [
  { metryka: "CPM (Cost Per Mille)", definicja: "Koszt za 1000 wyświetleń", cel: "Świadomość marki, reach" },
  { metryka: "CTR (Click-Through Rate)", definicja: "% wyświetleń które skutkowały kliknięciem", cel: "Ruch na stronie, zaangażowanie" },
  { metryka: "VCR (View Completion Rate)", definicja: "% filmów obejrzanych do końca (wideo)", cel: "Skuteczność kreacji wideo" },
  { metryka: "Viewability Rate", definicja: "% reklam spełniających standard widoczności (50% pixeli przez 1 sek.)", cel: "Jakość inventory" },
  { metryka: "Win Rate", definicja: "% wygranych aukcji z całości licytacji", cel: "Efektywność bidowania" },
  { metryka: "ROAS / CPA", definicja: "Zwrot z wydatków reklamowych / Koszt per akwizycja", cel: "Efektywność biznesowa" },
];

export default function BlogProgrammaticAdvertisingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Programmatic Advertising | Fotz Studio"
        description="Programmatic advertising — definicja, jak działa RTB, ekosystem (DSP, SSP, DMP, Ad Exchange), 4 typy zakupu i metryki. Kompletny przewodnik po reklamie…"
        canonicalUrl="https://fotz.pl/blog/programmatic-advertising-co-to"

        keywords="Programmatic Advertising co to jest, Programmatic Advertising definicja, czym jest Programmatic Advertising, Programmatic Advertising w marketingu, Programmatic Advertising przykłady, jak działa Programmatic Advertising, Programmatic Advertising strategia"

        canonical="https://fotz.pl/blog/reklama-programatyczna-co-to"
      />
      <ArticleSchema
        title="Programmatic Advertising — co to jest i jak działa reklama programatyczna?"
        description="Kompletny przewodnik po programmatic advertising: jak działa RTB, ekosystem DSP/SSP/DMP, 4 typy zakupu i kluczowe metryki."
        url="https://fotz.pl/blog/programmatic-advertising-co-to"
        datePublished="2024-01-16"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Programmatic Advertising", url: "https://fotz.pl/blog/programmatic-advertising-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Programmatic Advertising", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Programmatic Advertising — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Reklama programatyczna automatyzuje zakup przestrzeni reklamowej w czasie rzeczywistym.
            Poznaj ekosystem DSP/SSP/RTB, 4 typy zakupu i jak targetować precyzyjnie swoją grupę.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest programmatic advertising?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Programmatic advertising</strong> to ekosystem technologiczny umożliwiający
              automatyczny zakup i sprzedaż powierzchni reklamowej online. Algorytmy w ułamku
              sekundy decydują: czy wyświetlić reklamę konkretnemu użytkownikowi, ile zapłacić
              za to wyświetlenie i na której stronie. Zastępuje ręczne negocjacje
              i bezpośrednie zakupy powierzchni reklamowej.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Programmatic to już ponad 80% globalnych wydatków na display advertising.
              Rynek reklamy programatycznej przekroczy 700 miliardów dolarów do 2026 roku.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "80%+", opis: "globalnych wydatków na display advertising realizowanych programatycznie" },
                { stat: "100ms", opis: "czas aukcji RTB — reklama kupowana i wyświetlana szybciej niż strona się ładuje" },
                { stat: "700 mld USD", opis: "prognozowany globalny rynek programmatic do 2026 roku" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Ekosystem */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Ekosystem programmatic — kluczowe elementy</h2>
            <div className="space-y-4">
              {programmaticEcosystem.map((el, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 text-center leading-tight px-1">
                      {el.element.split(" ")[0]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{el.element}</h3>
                      <p className="text-slate-600 mb-2">{el.rola}</p>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div className="bg-blue-50 rounded p-2">
                          <p className="text-xs font-semibold text-blue-600 mb-1">Przykłady:</p>
                          <p className="text-blue-800">{el.przykłady}</p>
                        </div>
                        <div className="bg-slate-50 rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Kto używa:</p>
                          <p className="text-slate-700">{el.kto}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 typy zakupu */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 typy zakupu programatycznego</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Typ zakupu</th>
                    <th className="p-3 text-left">Opis</th>
                    <th className="p-3 text-left">Typowy CPM</th>
                    <th className="p-3 text-left">Kontrola</th>
                  </tr>
                </thead>
                <tbody>
                  {buyingTypes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-blue-700">{row.typ}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.opis}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.cpm}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.kontrola}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metryki */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe metryki programmatic</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {programmaticMetrics.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-1">{m.metryka}</h3>
                  <p className="text-slate-600 text-sm mb-2">{m.definicja}</p>
                  <p className="text-xs text-slate-400">Cel: {m.cel}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — programmatic advertising</h2>
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

      <RelatedArticles currentArticleId="reklama-programatyczna-co-to" />
      <ContactSection />
    </Layout>
  );
}
