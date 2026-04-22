import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest marketing mix?",
    answer:
      "Marketing mix to zestaw kontrolowanych elementów marketingowych, które firma może kształtować w celu zaspokojenia potrzeb docelowego rynku i osiągnięcia celów biznesowych. Klasyczny model to 4P: Product (produkt), Price (cena), Place (dystrybucja), Promotion (promocja). Dla usług rozszerzony do 7P, dodając: People, Process, Physical Evidence.",
  },
  {
    question: "Kto stworzył koncepcję marketing mix?",
    answer:
      "Termin marketing mix pochodzi od Neila Bordena (1964), który zidentyfikował 12 elementów. Jerome McCarthy uprościł koncepcję do 4P w książce 'Basic Marketing' (1960). Philip Kotler spopularyzował model 4P i rozwinął go do 7P dla usług. Model 4P/7P pozostaje fundamentem strategii marketingowej przez ponad 60 lat.",
  },
  {
    question: "Czym różni się 4P od 7P?",
    answer:
      "Model 4P (Product, Price, Place, Promotion) jest klasycznym modelem dla produktów fizycznych. Model 7P dodaje 3 elementy kluczowe dla usług: People (ludzie — personel ma kluczowy wpływ na doświadczenie klienta), Process (proces świadczenia usługi) i Physical Evidence (fizyczne dowody — lokal, certyfikaty, materiały). 7P jest obowiązkowy dla firm usługowych.",
  },
  {
    question: "Jak zastosować marketing mix w praktyce?",
    answer:
      "Praktyczne zastosowanie marketing mix: zdefiniuj dla każdego P konkretne decyzje strategiczne (np. P jak Produkt: jaki asortyment, jakie cechy, jakie opakowanie, jaki brand). Upewnij się, że wszystkie P są ze sobą spójne i wzajemnie wzmacniające. Regularnie przeglądaj mix pod kątem zmian rynkowych i competitive landscape.",
  },
  {
    question: "Jakie są nowoczesne alternatywy dla 4P?",
    answer:
      "Nowoczesne modele: 4C (Customer Value, Cost, Convenience, Communication) — wersja klientocentryczna autorstwa Roberta Lauterborna. SAVE (Solution, Access, Value, Education) — model dla B2B. STP + MM (Segmentation, Targeting, Positioning + Marketing Mix). Mimo nowych modeli, 4P pozostaje najszerzej stosowanym frameworkiem w strategii marketingowej.",
  },
];

const marketingMix4P = [
  {
    p: "Product (Produkt)",
    emoji: "📦",
    opis: "Co sprzedajesz? Jakie funkcje, jakość, design, branding, opakowanie, asortyment oferujesz?",
    kluczowePytania: [
      "Jakie potrzeby klienta rozwiązuje produkt?",
      "Co odróżnia go od konkurencji (USP)?",
      "Jaki jest cykl życia produktu (PLC)?",
      "Jakie warianty/linie produktowe oferujesz?",
    ],
    przykład: "Apple: minimalistyczny design, ekosystem produktów, premium materiały, ikona statusu",
  },
  {
    p: "Price (Cena)",
    emoji: "💰",
    opis: "Ile kosztuje? Strategia cenowa determinuje postrzeganie wartości, pozycjonowanie i marżę.",
    kluczowePytania: [
      "Jaką strategię cenową stosujesz (premium, penetracja, skimming)?",
      "Jak cena odnosi się do konkurencji?",
      "Jakie rabaty, promocje, warunki płatności?",
      "Czy cena pasuje do pozycjonowania marki?",
    ],
    przykład: "Tesla: premium pricing wzmacnia pozycjonowanie jako luksusowy EV, nie tani samochód",
  },
  {
    p: "Place (Dystrybucja)",
    emoji: "🗺️",
    opis: "Gdzie i jak klient może kupić produkt? Kanały dystrybucji, zasięg geograficzny, logistyka.",
    kluczowePytania: [
      "Bezpośrednia czy pośrednia dystrybucja?",
      "Jakie kanały sprzedaży (retail, online, hurt)?",
      "Jak szeroka powinna być dystrybucja?",
      "Jak zarządzać zapasami i logistyką?",
    ],
    przykład: "Nike: sklepy własne + multibrand retail + nike.com + aplikacja Nike + authorized dealers",
  },
  {
    p: "Promotion (Promocja)",
    emoji: "📢",
    opis: "Jak dotrzesz do klienta i przekonasz go do zakupu? Mix komunikacji: reklama, PR, sprzedaż, digital.",
    kluczowePytania: [
      "Jakie kanały komunikacji (ATL/BTL/digital)?",
      "Jaki przekaz i tone of voice?",
      "Jaki budżet i alokacja między kanałami?",
      "Jak mierzyć efektywność promocji?",
    ],
    przykład: "Red Bull: sport sponsorships + own media (Red Bull Media House) + extreme events",
  },
];

const additionalPs = [
  {
    p: "People (Ludzie)",
    opis: "Pracownicy i klienci jako część doświadczenia usługowego. W usługach człowiek jest produktem.",
    przykład: "Zappos: obsługa klienta jako core USP, szkolenia z empatii, kultura organizacyjna",
  },
  {
    p: "Process (Proces)",
    emoji: "⚙️",
    opis: "Jak usługa jest świadczona? Procedury, workflow, standardy obsługi, CX journey.",
    przykład: "McDonald's: zstandaryzowany proces produkcji = identyczna jakość w każdym lokalu na świecie",
  },
  {
    p: "Physical Evidence (Fizyczne dowody)",
    emoji: "🏢",
    opis: "Materialne elementy niematerialnej usługi: wystrój lokalu, certyfikaty, packaging, strona internetowa.",
    przykład: "Starbucks: ambiance kawiarni, kubki, muzyka, zapach — fizyczne dowody jakości doświadczenia",
  },
];

export default function BlogMarketingMixCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Marketing Mix — co to jest? 4P i 7P w strategii marketingowej"
        description="Marketing mix — definicja, 4P (Product, Price, Place, Promotion) i 7P dla usług, praktyczne zastosowanie i nowoczesne alternatywy. Kompletny przewodnik po…"
        canonicalUrl="https://fotz.pl/blog/marketing-mix-co-to"

        keywords="Marketing Mix co to jest, Marketing Mix definicja, czym jest Marketing Mix, Marketing Mix w marketingu, Marketing Mix przykłady, jak działa Marketing Mix, Marketing Mix strategia"

        canonical="https://fotz.pl/blog/marketing-mix-co-to"
      />
      <ArticleSchema
        title="Marketing Mix — co to jest? 4P i 7P w strategii marketingowej"
        description="Kompletny przewodnik po marketing mix: model 4P i 7P, kluczowe pytania dla każdego P, przykłady i nowoczesne alternatywy."
        url="https://fotz.pl/blog/marketing-mix-co-to"
        datePublished="2024-01-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Marketing Mix", url: "https://fotz.pl/blog/marketing-mix-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Marketing Mix", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Marketing Mix — co to jest? 4P i 7P w strategii marketingowej
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Marketing mix (4P/7P) to fundament strategii marketingowej od 60 lat.
            Poznaj model Product, Price, Place, Promotion i rozszerzenie o People, Process, Physical Evidence.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest marketing mix?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Marketing mix</strong> to zestaw wzajemnie powiązanych decyzji marketingowych,
              które firma konfiguruje, by osiągnąć swoje cele na docelowym rynku. Model 4P powstał
              w latach 60. XX wieku i do dziś jest najbardziej powszechnym frameworkiem w planowaniu
              strategii marketingowej.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Siła modelu leży w jego prostocie i kompleksowości jednocześnie: 4 elementy pokrywają
              wszystkie kluczowe decyzje marketingowe. Kluczowe jest ich wzajemne <em>dopasowanie</em>
              — premium pricing bez premium jakości produktu i premium dystrybucji tworzy dysonans.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Product", "Price", "Place", "Promotion"].map((p, i) => (
                <div key={i} className="bg-blue-600 text-white rounded-xl p-5 text-center">
                  <p className="text-4xl font-bold mb-2">P</p>
                  <p className="font-semibold text-blue-100">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4P szczegółowo */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Model 4P — szczegółowe omówienie</h2>
            <div className="space-y-6">
              {marketingMix4P.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-blue-800 text-xl mb-3">{item.emoji} {item.p}</h3>
                  <p className="text-slate-600 mb-4">{item.opis}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-2">Kluczowe pytania strategiczne:</p>
                      <ul className="space-y-1">
                        {item.kluczowePytania.map((q, j) => (
                          <li key={j} className="text-slate-700 text-sm flex gap-2">
                            <span className="text-blue-500 flex-shrink-0">→</span>
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-blue-600 mb-2">Przykład:</p>
                      <p className="text-blue-800 text-sm">{item.przykład}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 7P rozszerzenie */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Model 7P — rozszerzenie dla usług</h2>
            <p className="text-lg text-slate-700 mb-8">
              Model 7P dodaje trzy elementy kluczowe dla firm usługowych, gdzie "produkt" jest niematerialny
              i nieodłączny od procesu jego dostarczania.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {additionalPs.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{item.p}</h3>
                  <p className="text-slate-600 text-sm mb-3">{item.opis}</p>
                  <div className="bg-white rounded p-3">
                    <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                    <p className="text-slate-700 text-xs">{item.przykład}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — marketing mix 4P i 7P</h2>
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

      <RelatedArticles currentArticleId="marketing-mix-co-to" />
      <ContactSection />
    </Layout>
  );
}
