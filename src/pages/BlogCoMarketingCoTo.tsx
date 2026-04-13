import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest co-marketing?",
    answer:
      "Co-marketing (marketing partnerski) to strategia, w której dwie lub więcej firm współpracuje przy wspólnych kampaniach marketingowych, dzieląc koszty, zasoby i odbiorców. Partnerzy mają komplementarne (nie konkurujące) grupy docelowe i wspólnie tworzą content, eventy lub oferty, korzystając wzajemnie z zasięgu i wiarygodności drugiej marki.",
  },
  {
    question: "Czym co-marketing różni się od co-brandingu?",
    answer:
      "Co-marketing to wspólne działania marketingowe (kampanie, content, eventy) bez zmiany samego produktu. Co-branding to wspólna marka na produkcie — np. Nike x Apple, Doritos x Taco Bell. Co-branding jest trwalszy i bardziej zintegrowany. Co-marketing jest łatwiejszy do realizacji i nie wymaga zmian produktowych.",
  },
  {
    question: "Jak znaleźć odpowiednich partnerów do co-marketingu?",
    answer:
      "Idealny partner to firma z komplementarną (nie konkurencyjną) bazą klientów o podobnej demografii, zbliżoną renomą i wartościami, podobnym budżetem i zaangażowaniem w partnerstwo. Szukaj wśród firm, których produkty uzupełniają twoje (np. oprogramowanie CRM + platforma email), wśród partnerów technologicznych, oraz wśród firm obsługujących te same nisze.",
  },
  {
    question: "Jakie formaty sprawdzają się w co-marketingu?",
    answer:
      "Najskuteczniejsze formaty co-marketingu to: wspólne webinary i eventy online, co-authored raporty i white papers, bundle oferty (2 produkty w jednej cenie), cross-promocja emailowa do wzajemnych list, wspólne case studies, joint social media kampanie, partnerskie podcasty oraz guest content na blogach partnerów.",
  },
  {
    question: "Jak mierzyć ROI co-marketingu?",
    answer:
      "Mierzenie ROI co-marketingu wymaga ustalenia KPI przed kampanią: wygenerowane leady (z podziałem na źródła), nowi subskrybenci, ruch krzyżowy (cross-traffic), przychody atrybucyjne (ze śledzenia UTM), koszt pozyskania leada w porównaniu z innymi kanałami, oraz wzrost rozpoznawalności marki w nowych segmentach.",
  },
];

const coMarketingTypes = [
  {
    typ: "Content Co-Marketing",
    opis: "Wspólne tworzenie i dystrybucja treści — raporty, e-booki, webinary, podcasty",
    przykład: "HubSpot + Salesforce — wspólny State of Marketing Report",
    korzyść: "Podwójny zasięg przy połowie kosztów produkcji",
  },
  {
    typ: "Event Co-Marketing",
    opis: "Wspólna organizacja konferencji, webinarów, warsztatów lub udziału w targach",
    przykład: "Dwie agencje SaaS organizujące webinar dla MŚP",
    korzyść: "Podział kosztów organizacyjnych, wzajemne bazy uczestników",
  },
  {
    typ: "Bundle/Pakiet Partnerski",
    opis: "Sprzedaż produktów partnerów jako pakietu z rabatem lub w ramach jednej oferty",
    przykład: "Platforma e-commerce + bramka płatności + narzędzie do email marketingu",
    korzyść: "Wyższa wartość oferty, cross-selling do istniejących klientów",
  },
  {
    typ: "Cross-Promocja Email",
    opis: "Wzajemna promocja partnera wśród własnych list subskrybentów",
    przykład: "Startup A rekomenduje Startup B swojej liście 10k+ subskrybentów i odwrotnie",
    korzyść: "Szybki, tani wzrost listy email bez reklam płatnych",
  },
  {
    typ: "Social Media Collabs",
    opis: "Wspólne posty, Instagram Lives, TikTok duety, wzajemne tagowania",
    przykład: "Dwie marki lifestylowe robiące wspólny giveaway na Instagramie",
    korzyść: "Organiczny zasięg do nowych audiencji, social proof przez asocjację",
  },
  {
    typ: "Affiliate/Referral Partnership",
    opis: "Formalna sieć poleceń — jeden partner płaci prowizję za konwersje z drugiego",
    przykład: "Booking.com z tysiącami partnerów travel, SaaS z sieciami reseller",
    korzyść: "Skalowalne, performance-based — koszt tylko przy efekcie",
  },
];

const coMarketingProcess = [
  {
    krok: "Identyfikacja i kwalifikacja partnerów",
    opis: "Zdefiniuj idealne kryteria partnera (ICP partnera): komplementarny, nie konkurencyjny, podobna publiczność, podobna reputacja. Stwórz listę 10–20 potencjalnych partnerów i oceń ich według tych kryteriów.",
  },
  {
    krok: "Pitch i negocjacje",
    opis: "Przygotuj partnership proposal: co dajesz (zasięg, reputacja, zasoby), co dostajesz, jak obaj na tym zyskujemy. Propozycja musi być win-win — partnerzy rezygnują gdy czują asymetrię korzyści.",
  },
  {
    krok: "Ustalenie warunków i KPI",
    opis: "Uzgodnij: format współpracy, podział kosztów, harmonogram, własność wygenerowanych leadów, prawa do treści, sposób mierzenia wyników i warunki rozwiązania współpracy.",
  },
  {
    krok: "Realizacja kampanii",
    opis: "Wyznacz dedykowany punkt kontaktu po obu stronach. Używaj UTM do śledzenia wyników. Koordynuj daty publikacji i harmonogram dystrybucji. Monitoruj wyniki w czasie rzeczywistym.",
  },
  {
    krok: "Analiza i iteracja",
    opis: "Po kampanii: porównaj wyniki z KPI, zidentyfikuj co działało a co nie, oceń jakość leadów i konwersję. Najlepsze partnerstwa to długoterminowe relacje — wyciągaj wnioski i buduj głębszą współpracę.",
  },
];

export default function BlogCoMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Co-marketing | Fotz Studio"
        description="Co-marketing (marketing partnerski) — definicja, 6 rodzajów (content, event, bundle, cross-promo), 5-etapowy proces i jak znaleźć partnerów. Kompletny…"
        canonicalUrl="https://fotz.pl/blog/co-marketing-co-to"

        keywords="Co-marketing co to jest, Co-marketing definicja, czym jest Co-marketing, Co-marketing w marketingu, Co-marketing przykłady, jak działa Co-marketing, Co-marketing strategia"

        canonical="https://fotz.pl/blog/co-marketing-co-to"
      />
      <ArticleSchema
        title="Co-marketing — co to jest i jak działa?"
        description="Kompletny przewodnik po co-marketingu: 6 typów partnerstwa, 5-etapowy proces, jak znaleźć partnerów i mierzyć ROI."
        url="https://fotz.pl/blog/co-marketing-co-to"
        datePublished="2024-01-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Co-marketing", url: "https://fotz.pl/blog/co-marketing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Co-marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Co-marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Co-marketing pozwala osiągać dwa razy więcej za połowę kosztów — przez partnerstwo z markami
            o komplementarnej publiczności. Poznaj 6 typów, 5-etapowy proces i jak znaleźć idealnych partnerów.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest co-marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Co-marketing</strong> to strategia, w której dwie lub więcej firm łączy siły przy
              kampaniach marketingowych — dzieląc koszty, zasoby i dostęp do swoich grup odbiorców.
              Kluczowe założenie: partnerzy muszą być <em>komplementarni, nie konkurencyjni</em>.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Przykład: firma CRM i platforma email marketingowa mają zbliżoną bazę klientów (marketerzy),
              ale nie konkurują ze sobą. Wspólny raport, webinar lub bundle oferta przynosi obu stronom
              dostęp do nowej publiczności przy połowie indywidualnych kosztów.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "50%", opis: "redukcja kosztów marketingu przy dobrze dobranym partnerstwie" },
                { stat: "2×", opis: "zasięg kampanii dzięki połączonej dystrybucji obu partnerów" },
                { stat: "3–5×", opis: "wyższy ROI co-marketingu vs. kampanii solo w podobnym budżecie" },
              ].map((s, i) => (
                <div key={i} className="bg-teal-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-teal-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 typów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 typów co-marketingu</h2>
            <div className="space-y-5">
              {coMarketingTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{t.typ}</h3>
                  <p className="text-slate-600 mb-3">{t.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                      <p className="text-slate-700">{t.przykład}</p>
                    </div>
                    <div className="bg-teal-50 rounded p-3">
                      <p className="text-xs font-semibold text-teal-600 mb-1">Korzyść:</p>
                      <p className="text-teal-800">{t.korzyść}</p>
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
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 kroków do skutecznego co-marketingu</h2>
            <div className="space-y-5">
              {coMarketingProcess.map((item, i) => (
                <div key={i} className="flex gap-5 bg-teal-50 rounded-xl p-6 border border-teal-100">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
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
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — co-marketing</h2>
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

      <RelatedArticles currentArticleId="co-marketing-co-to" />
      <ContactSection />
    </Layout>
  );
}
