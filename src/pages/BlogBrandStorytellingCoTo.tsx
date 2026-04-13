import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest brand storytelling?",
    answer:
      "Brand storytelling (opowiadanie historii marki) to strategia komunikacji polegająca na budowaniu narracji wokół marki, jej wartości, misji i klientów — zamiast na promowaniu produktów i funkcji. Skuteczne brand stories tworzą emocjonalną więź z odbiorcą, czynią markę pamiętną i budują lojalność ponad prostą transakcją zakupową.",
  },
  {
    question: "Dlaczego storytelling jest skuteczny w marketingu?",
    answer:
      "Mózg przetwarza historię inaczej niż fakty: opowieść aktywuje więcej obszarów mózgu (emocje, zmysły, motoryka), a informacje przekazane w formie narracji są 22× łatwiej zapamiętywane niż suche fakty (Jennifer Aaker, Stanford). Storytelling wyzwala oksytocynę — hormon odpowiedzialny za zaufanie i więź społeczną.",
  },
  {
    question: "Jakie elementy powinna zawierać dobra historia marki?",
    answer:
      "Dobra brand story zawiera: bohatera (klienta, nie markę), problem do rozwiązania, transformację (stan przed i po), autentyczność i spójność z wartościami firmy, emocjonalny hook i konkretne szczegóły zamiast abstrakcyjnych twierdzeń. Najlepsze opowieści marketingowe dotyczą zmian w życiu człowieka, nie zalet produktu.",
  },
  {
    question: "Jak brand storytelling różni się od zwykłego copywritingu?",
    answer:
      "Zwykły copywriting koncentruje się na cechach i korzyściach produktu (funkcjonalny, szybki, tani). Brand storytelling tworzy narrację o tym kim jesteś jako marka, komu służysz i dlaczego. Copywriting sprzedaje transakcję, storytelling buduje relację i tożsamość marki w umyśle konsumenta.",
  },
  {
    question: "Jakie formaty najlepiej sprawdzają się w brand storytellingu?",
    answer:
      "Najskuteczniejsze formaty storytellingowe to: wideo (emocjonalne reklamy brand story), case studies klientów (historia transformacji), podcast (długa forma, buduje głęboką więź), email seriale (opowieść rozpisana na wiele odcinków), social media mikrostorie (Instagram Stories, TikTok), oraz kampanie dokumentalne i dokumenty marki.",
  },
];

const storytellingFrameworks = [
  {
    framework: "Hero's Journey (Podróż Bohatera)",
    opis: "Klient jest bohaterem, marka jest mentorem. Bohater napotyka problem, mentor (marka) dostarcza narzędzi i przekształca jego życie.",
    przykład: "Nike — historia każdego sportowca pokonującego własne granice z pomocą Nike",
    kiedy: "Brand purpose, kampanie inspiracyjne, marka lifestyle",
  },
  {
    framework: "Before/After/Bridge",
    opis: "Pokaż stan przed (problem), stan po (rozwiązanie) i jak marka była mostem między nimi",
    przykład: "Booking.com — podróż zanim i piękne doświadczenie po",
    kiedy: "Konwersyjny content, landing pages, testimonials",
  },
  {
    framework: "Sparklines (Nancy Duarte)",
    opis: "Naprzemienne zestawianie tego 'co jest' z tym 'co mogłoby być' — budowanie napięcia i aspiracji",
    przykład: "Tesla — świat spalinowych aut vs. świat elektrycznej przyszłości",
    kiedy: "Prezentacje inwestorskie, brand manifestos, keynotes",
  },
  {
    framework: "Story Spine",
    opis: "'Pewnego dnia... Codziennie... Aż do... Dlatego... W końcu...' — prosta 6-aktowa struktura każdej historii",
    przykład: "Airbnb — historii gospodarzy i gości, które zmieniły ich życie",
    kiedy: "Mikrostorie na social media, customer success stories",
  },
  {
    framework: "Origin Story",
    opis: "Historia założenia firmy, dlaczego powstała i jaką zmianę chciała wprowadzić na świecie",
    przykład: "Patagonia — Yvon Chouinard i misja ochrony środowiska",
    kiedy: "O stronie About Us, pitch decks, brand identity",
  },
];

const storytellingChannels = [
  { kanał: "Wideo reklamy (brand film)", dlugość: "1–3 minuty", emocje: "Bardzo wysokie", zasięg: "Masowy", przykład: "Dove Real Beauty, P&G Thank You Mom" },
  { kanał: "Customer Case Study", dlugość: "500–2000 słów", emocje: "Średnie", zasięg: "Niszowy (B2B)", przykład: "Salesforce Success Stories" },
  { kanał: "Podcast", dlugość: "20–60 minut", emocje: "Wysokie (intymność)", zasięg: "Niszowy, lojalny", przykład: "HubSpot's The Entrepreneur — Mailchimp Podcast" },
  { kanał: "Instagram/TikTok Stories", dlugość: "15–60 sekund", emocje: "Wysokie (wizualne)", zasięg: "Wysoki mobilny", przykład: "Nike, Patagonia, Ben & Jerry's" },
  { kanał: "Blog (long-form content)", dlugość: "1500–3000 słów", emocje: "Średnie", zasięg: "SEO-driven", przykład: "Buffer's Transparency Blog, Basecamp blog" },
  { kanał: "Email Newsletter", dlugość: "500–1500 słów", emocje: "Personalne, intymne", zasięg: "Bezpośredni, owned", przykład: "Morning Brew, Farnam Street" },
];

export default function BlogBrandStorytellingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Brand Storytelling | Fotz Studio"
        description="Brand storytelling — definicja, 5 frameworków narracyjnych (Hero's Journey, Before/After/Bridge), kanały i jak zbudować skuteczną historię marki."
        canonicalUrl="https://fotz.pl/blog/brand-storytelling-co-to"

        keywords="Brand Storytelling co to jest, Brand Storytelling definicja, czym jest Brand Storytelling, Brand Storytelling w marketingu, Brand Storytelling przykłady, jak działa Brand Storytelling, Brand Storytelling strategia"

        canonical="https://fotz.pl/blog/brand-storytelling-co-to"
      />
      <ArticleSchema
        title="Brand Storytelling — co to jest i jak stosować?"
        description="Kompletny przewodnik po brand storytellingu: frameworki narracyjne, kanały i jak tworzyć poruszające historie marki."
        url="https://fotz.pl/blog/brand-storytelling-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Brand Storytelling", url: "https://fotz.pl/blog/brand-storytelling-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Brand Storytelling" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Brand Storytelling — co to jest i jak stosować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Opowiadanie historii marki tworzy emocjonalne więzi trwalsze niż reklama produktowa.
            Poznaj 5 frameworków narracyjnych, kanały i jak zbudować historię, która zapada w pamięć.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest brand storytelling?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Brand storytelling</strong> to budowanie narracji wokół marki, która rezonuje emocjonalnie
              z odbiorcami — zamiast skupiania się na cechach i korzyściach produktu. To różnica między
              "sprzedajemy buty sportowe" a "pomagamy każdemu zostać atletą, którym może być".
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Neurolog Uri Hasson udowodnił, że kiedy słuchamy historii, nasz mózg synchronizuje się
              z narratorem — dosłownie "myślimy razem". Informacje przekazane w formie opowieści
              są 22× bardziej zapamiętywane niż suche fakty i wykresy.
            </p>
            <div className="bg-slate-50 border-l-4 border-slate-600 p-6 rounded-r-lg">
              <p className="font-semibold text-slate-900 mb-2">Złota zasada brand storytellingu:</p>
              <p className="text-slate-700">
                Klient jest bohaterem historii — nie marka. Marka jest Yodą, Dumbledorem, Gandalfem
                — mentorem który wyposaża bohatera w narzędzia do pokonania wyzwania.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Frameworki */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 frameworków narracyjnych dla marek</h2>
            <div className="space-y-5">
              {storytellingFrameworks.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{f.framework}</h3>
                  <p className="text-slate-600 mb-3">{f.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                      <p className="text-slate-700">{f.przykład}</p>
                    </div>
                    <div className="bg-indigo-50 rounded p-3">
                      <p className="text-xs font-semibold text-indigo-600 mb-1">Kiedy stosować:</p>
                      <p className="text-indigo-800">{f.kiedy}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kanały brand storytellingu</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kanał</th>
                    <th className="p-3 text-left">Długość</th>
                    <th className="p-3 text-left">Poziom emocji</th>
                    <th className="p-3 text-left">Zasięg</th>
                  </tr>
                </thead>
                <tbody>
                  {storytellingChannels.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.kanał}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.dlugość}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.emocje}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.zasięg}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — brand storytelling</h2>
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

      <RelatedArticles currentArticleId="brand-storytelling-co-to" />
      <ContactSection />
    </Layout>
  );
}
