import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest FOMO marketing?",
    answer:
      "FOMO marketing (Fear Of Missing Out — strach przed przegapieniem) to strategia marketingowa wykorzystująca naturalny lęk konsumentów przed utratą okazji, ekskluzywnych ofert lub doświadczeń. Komunikaty FOMO tworzą poczucie pilności i niedoboru, motywując do szybszej decyzji zakupowej.",
  },
  {
    question: "Jak działa psychologia FOMO?",
    answer:
      "FOMO aktywuje amygdalę — ośrodek przetwarzania zagrożeń w mózgu. Percepcja potencjalnej straty wyzwala silniejszą motywację niż perspektywa zysku (loss aversion). Efekt jest wzmacniany przez dowód społeczny: jeśli widzimy, że inni korzystają z oferty, chęć przynależności do grupy zwiększa chęć zakupu.",
  },
  {
    question: "Jakie są rodzaje FOMO w marketingu?",
    answer:
      "Główne rodzaje to: ograniczenia czasowe (oferta ważna do..., odliczanie), ograniczenia ilościowe (zostały tylko 3 sztuki), ekskluzywność (oferta tylko dla subskrybentów, early access), dowód społeczny (X osób ogląda ten produkt) oraz event-driven FOMO (oferta podczas konkretnego wydarzenia).",
  },
  {
    question: "Czy FOMO marketing jest manipulacyjny?",
    answer:
      "Granica między skutecznym a nieetycznym FOMO marketingiem leży w autentyczności. Fałszywe odliczania, które resetują się po upływie czasu, fikcyjne komunikaty 'tylko 2 sztuki zostały' gdy faktycznie jest ich tysiące — to manipulacja. Prawdziwy niedobór, prawdziwy termin i transparentność to etyczne FOMO.",
  },
  {
    question: "Jak skuteczne jest FOMO w zwiększaniu konwersji?",
    answer:
      "Badania pokazują, że komunikaty pilności zwiększają konwersję o 30–50%. Timer countdown na landing page może podnieść konwersję o 9% (OptiMonk). 60% millenialsów przyznaje, że podejmuje spontaniczne zakupy z powodu FOMO. Najlepsze efekty daje połączenie timera z dowodem społecznym.",
  },
];

const fomoTechniques = [
  {
    technika: "Countdown timer",
    opis: "Odliczanie czasu do końca oferty lub eventów — wizualizacja upływającego czasu przyspiesza decyzje",
    przykład: "Booking.com: 'Ta oferta wygasa za 2:34:17', wyprzedaże Flash z licznikiem",
    wpływ: "+9% konwersji (OptiMonk)",
    etyczność: "Etyczne gdy timer jest autentyczny, nieetyczne gdy się resetuje",
  },
  {
    technika: "Scarcity (niedobór)",
    opis: "Informacje o ograniczonej dostępności: liczba sztuk, miejsc, licencji",
    przykład: "'Zostały tylko 3 pokoje', 'Ostatnie 5 biletów', 'Sprzedano 89% miejsc'",
    wpływ: "+26% wyższe tempo sprzedaży (Coglode)",
    etyczność: "Etyczne gdy odzwierciedla faktyczny stan",
  },
  {
    technika: "Social Proof Live",
    opis: "Pokazanie w czasie rzeczywistym aktywności innych użytkowników",
    przykład: "'12 osób przegląda ten produkt', '47 zakupów dzisiaj', 'X kupił przed 5 min'",
    wpływ: "+15–30% konwersji na stronach produktowych",
    etyczność: "Etyczne gdy dane są prawdziwe",
  },
  {
    technika: "Ekskluzywność i early access",
    opis: "Dostęp tylko dla wybranej grupy — VIP, early bird, newsletter subscribers",
    przykład: "'Dostępne tylko dla subskrybentów', 'Early Access dla stałych klientów'",
    wpływ: "Wysoka lojalność i engagement",
    etyczność: "Zawsze etyczne gdy ekskluzywność jest realna",
  },
  {
    technika: "Limited edition / Seasonal",
    opis: "Produkty lub oferty dostępne tylko przez określony czas lub w ograniczonej edycji",
    przykład: "McRib tylko sezonowo, limited edition drops Nike/Adidas",
    wpływ: "Viral, queue-forming demand",
    etyczność: "Etyczne gdy limitowanie jest prawdziwe",
  },
  {
    technika: "Event-driven urgency",
    opis: "Oferty przypisane do konkretnych wydarzeń: Black Friday, Cyber Monday, urodziny marki",
    przykład: "Amazon Prime Day, Ceneo Dzień Darmowej Dostawy",
    wpływ: "Masowe skoki sprzedaży (Amazon: miliardowe przychody w 1 dzień)",
    etyczność: "Zawsze etyczne gdy event jest prawdziwy",
  },
];

const fomoFrameworks = [
  { element: "Pilność (Urgency)", opis: "Ograniczenie czasowe — za ile godzin/dni kończy się oferta?", przykład: "Oferta ważna do północy" },
  { element: "Niedobór (Scarcity)", opis: "Ograniczenie ilościowe — ile zostało?", przykład: "Zostały 3 sztuki" },
  { element: "Ekskluzywność", opis: "Dostęp dla wybranej grupy — kto może skorzystać?", przykład: "Tylko dla subskrybentów" },
  { element: "Dowód społeczny", opis: "Ile osób już skorzystało — co robią inni?", przykład: "847 osób kupiło w tym tygodniu" },
  { element: "Konsekwencja braku działania", opis: "Co tracisz jeśli nie działasz teraz?", przykład: "Jutro cena wzrośnie o 20%" },
];

export default function BlogFOMOMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="FOMO Marketing | Fotz Studio"
        description="FOMO marketing — definicja, 6 technik (countdown, scarcity, social proof live), psychologia niedoboru i jak stosować FOMO etycznie. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/fomo-marketing-co-to"

        keywords="FOMO Marketing co to jest, FOMO Marketing definicja, czym jest FOMO Marketing, FOMO Marketing w marketingu, FOMO Marketing przykłady, jak działa FOMO Marketing, FOMO Marketing strategia"

        canonical="https://fotz.pl/blog/fomo-marketing-co-to"
      />
      <ArticleSchema
        title="FOMO Marketing — co to jest i jak działa?"
        description="Kompletny przewodnik po FOMO marketingu: techniki, psychologia niedoboru i pilności, jak stosować etycznie."
        url="https://fotz.pl/blog/fomo-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "FOMO Marketing", url: "https://fotz.pl/blog/fomo-marketing-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "FOMO Marketing", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            FOMO Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            FOMO (Fear of Missing Out) to jeden z najpotężniejszych psychologicznych wyzwalaczy zakupów.
            Poznaj 6 technik FOMO, psychologię niedoboru i jak stosować te zasady etycznie i skutecznie.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest FOMO marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>FOMO marketing</strong> to wykorzystywanie naturalnego ludzkiego lęku przed
              przegapieniem wartościowej okazji — oferty, doświadczenia, ekskluzywnego produktu.
              Strach przed stratą (loss aversion) jest silniejszym motywatorem niż chęć zysku:
              utrata boli mózg 2× mocniej niż radość z równoważnego zysku.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badanie EventBrite pokazuje, że 69% millenialsów odczuwa FOMO. Harvard Business Review
              stwierdza, że oferty z elementem pilności mają o 30–50% wyższy wskaźnik konwersji.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "69%", opis: "millenialsów regularnie odczuwa FOMO (EventBrite)" },
                { stat: "+30–50%", opis: "wyższe konwersje przy komunikatach z pilnością" },
                { stat: "2×", opis: "strata boli silniej niż równoważny zysk sprawia radość (Kahneman)" },
              ].map((s, i) => (
                <div key={i} className="bg-red-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-red-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 technik */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 technik FOMO marketingu</h2>
            <div className="space-y-5">
              {fomoTechniques.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{t.technika}</h3>
                  <p className="text-slate-600 mb-3">{t.opis}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                      <p className="text-slate-700">{t.przykład}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Wpływ:</p>
                      <p className="text-green-700">{t.wpływ}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Etyczność:</p>
                      <p className="text-blue-700">{t.etyczność}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Framework */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 elementów skutecznego komunikatu FOMO</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {fomoFrameworks.map((item, i) => (
                <div key={i} className="flex gap-4 bg-red-50 rounded-xl p-5 border border-red-100">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.element}</h3>
                    <p className="text-slate-600 text-sm mb-2">{item.opis}</p>
                    <p className="text-red-700 text-sm italic">{item.przykład}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — FOMO marketing</h2>
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

      <RelatedArticles currentArticleId="fomo-marketing-co-to" />
      <ContactSection />
    </Layout>
  );
}
