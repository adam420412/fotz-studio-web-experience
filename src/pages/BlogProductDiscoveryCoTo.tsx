import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Product Discovery?",
    answer: "Product Discovery to proces badania i walidacji problemów użytkowników, przed tym zanim zaczniesz budować rozwiązanie. Celem jest odpowiedź na pytania: Czy problem jest realny i powszechny? Czy użytkownicy naprawdę go doświadczają? Czy nasze proponowane rozwiązanie rozwiązuje problem? Czy użytkownicy za to zapłacą? Product Discovery jest przeciwieństwem 'build it and they will come' — firmy które pomijają discovery, budują produkty których nikt nie używa. Termin spopularyzowany przez Marty'ego Cagana (SVPG) i Teresa Torres. Dobry Discovery zmniejsza ryzyko budowania złego produktu.",
  },
  {
    question: "Jakie techniki stosuje się w Product Discovery?",
    answer: "Techniki Product Discovery: Customer Interviews — rozmowy z użytkownikami o ich problemach, nie o Twoim produkcie. Pytaj o przeszłe zachowania, nie hipotetyczne. Observation / Contextual Inquiry — obserwacja jak użytkownicy naprawdę wykonują zadanie (nie jak myślą że je wykonują). Survey — ilościowe badanie skali problemu. Lepsze do walidacji niż do discovery. Prototype Testing — low-fidelity prototype (Figma, papier) pokazywany użytkownikom przed budowaniem. Smoke Test / Fake Door Test — landing page proponowanego feature z możliwością 'zapisania się'. Mierzysz zainteresowanie bez budowania. Opportunity Solution Tree (Teresa Torres) — strukturalny sposób łączenia problemów użytkowników z potencjalnymi rozwiązaniami.",
  },
  {
    question: "Czym różni się Discovery od Delivery?",
    answer: "Discovery vs. Delivery: Discovery to faza eksploracji — rozumiesz problem, generujesz i testujesz rozwiązania zanim je zbudujesz. Delivery to faza produkcji — budujesz, testujesz technicznie i releasujesz. Marty Cagan (SVPG) wyróżnia dwa równoległe track'i: Discovery Track — PM i Designer ciągle pracują 2-4 tygodnie przed Delivery. Delivery Track — Engineering buduje i releasuje co zostało zwalidowane w Discovery. Najczęstszy błąd: firmy robią tylko Delivery — przeskakują od feature request do implementacji bez Discovery. Efekt: wysoka velocity, ale budują złe rzeczy. Good Discovery nie wymaga miesięcy — ciągłe małe eksperymenty są lepsze niż wielki upfront research.",
  },
  {
    question: "Jak przeprowadzić dobry wywiad z klientem w Discovery?",
    answer: "Discovery Interview — best practices: Cel: zrozumieć problem, nie walidować swoje rozwiązanie. Pytaj o przeszłość: 'Opowiedz mi o ostatnim razie gdy robiłeś X' zamiast 'Czy chciałbyś feature Y?'. Nie zadawaj leading questions: 'Czy zirytowałoby cię gdyby...' sugeruje odpowiedź. Szukaj behawiorów, nie opinii: co ludzie robią jest ważniejsze niż co mówią że chcą. 5 Whys — drąż w głąb: gdy klient powie 'chcę X', pytaj 'dlaczego X jest ważne?' aż dotrzesz do prawdziwego problemu. Nagrywaj za zgodą — jest ciężko notować i aktywnie słuchać jednocześnie. Minimum 5-10 wywiadów per segment — szukaj wzorców, nie anegdot. Unikaj: pytań o funkcjonalności, pytań o cenę, grupy fokusowej (social dynamics zniekształcają odpowiedzi).",
  },
  {
    question: "Co to jest Continuous Discovery?",
    answer: "Continuous Discovery (Teresa Torres) to podejście w którym Product Team przeprowadza regularne rozmowy z użytkownikami co tydzień — zamiast dużego jednorazowego badania co kwartał. Zasady Continuous Discovery: Co najmniej jeden wywiad tygodniowo z użytkownikami/klientami. PM, Designer i Engineer rozmawiają z klientami razem. Opportunity Solution Tree jako narzędzie do strukturyzowania insightów. Małe, szybkie eksperymenty zamiast dużych badań. Ciągłe testowanie assumption zamiast czekania na 'wystarczająco dużo danych'. Korzyści: szybszy feedback loop, lepszy product intuition całego teamu, mniejsze ryzyko dużych błędnych decyzji, kultura budowana na dowodach a nie opiniach.",
  },
];

const discoveryTechniques = [
  {
    technika: "Customer Interview",
    cel: "Głębokie zrozumienie problemów, potrzeb i zachowań użytkowników",
    kiedy: "Przed definiowaniem rozwiązania, przy wchodzeniu na nowy segment",
    jak: "45-60 min 1:1, pytania o przeszłe zachowania, minimum 5-10 per segment",
    kolor: "blue",
  },
  {
    technika: "Prototype Testing",
    cel: "Walidacja rozwiązania zanim zaangażuje Engineering",
    kiedy: "Gdy masz hipotezę rozwiązania i chcesz ją przetestować tanio",
    jak: "Low-fidelity Figma mockup lub papierowy prototyp, obserwuj jak użytkownik próbuje go używać",
    kolor: "green",
  },
  {
    technika: "Smoke Test / Fake Door",
    cel: "Ilościowa walidacja popytu bez budowania feature",
    kiedy: "Gdy chcesz zmierzyć zainteresowanie przed inwestycją w development",
    jak: "Button/link do nieistniejącej funkcji, mierzysz CTR i intent. Informujesz użytkownika po kliknięciu",
    kolor: "purple",
  },
  {
    technika: "Contextual Inquiry",
    cel: "Obserwacja jak użytkownicy naprawdę wykonują zadanie w ich środowisku",
    kiedy: "Gdy chcesz zobaczyć realne zachowania, nie deklarowane",
    jak: "Obserwujesz użytkownika podczas pracy. Pytasz 'dlaczego to robisz' w trakcie, nie po",
    kolor: "orange",
  },
  {
    technika: "Opportunity Solution Tree",
    cel: "Strukturalne mapowanie problemów, możliwości i potencjalnych rozwiązań",
    kiedy: "Do organizowania insightów z Discovery i priorytetyzacji eksperymentów",
    jak: "Drzewo: Outcome (cel) -> Opportunities (problemy) -> Solutions -> Experiments (Teresa Torres framework)",
    kolor: "red",
  },
];

const discoveryVsDelivery = [
  { aspekt: "Pytanie które odpowiadamy", discovery: "Czy budujemy właściwą rzecz?", delivery: "Czy budujemy rzecz właściwie?" },
  { aspekt: "Aktywności", discovery: "Wywiady, prototypy, eksperymenty, analiza", delivery: "Coding, testing, deployment, monitoring" },
  { aspekt: "Główni uczestnicy", discovery: "PM + Designer (z udziałem Engineering)", delivery: "Engineering (z udziałem PM i Design)" },
  { aspekt: "Wynik", discovery: "Zwalidowane problem i rozwiązanie", delivery: "Działający software w produkcji" },
  { aspekt: "Horyzont", discovery: "2-4 tygodnie ahead of Delivery", delivery: "Sprint / Current cycle" },
  { aspekt: "Miary sukcesu", discovery: "Insighty, zwalidowane hipotezy, odrzucone złe pomysły", delivery: "Velocity, Sprint goals, Release cadence" },
];

export default function BlogProductDiscoveryCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Product Discovery — co to jest i jak przeprowadzić? | Fotz.pl"
        description="Product Discovery — techniki (Customer Interview, Prototype Testing, Smoke Test), Continuous Discovery i różnica vs Delivery. Kompletny przewodnik dla…"
        canonicalUrl="https://fotz.pl/blog/product-discovery-co-to-jest-jak-przeprowadzic"

        keywords="Product Discovery co to jest, Product Discovery definicja, czym jest Product Discovery, Product Discovery przykłady, jak działa Product Discovery, Product Discovery znaczenie, Product Discovery przewodnik"

        canonical="https://fotz.pl/blog/product-discovery-co-to-jest-jak-przeprowadzic"
      />
      <ArticleSchema
        title="Product Discovery — co to jest i jak przeprowadzić?"
        description="Kompletny przewodnik po Product Discovery: techniki, Customer Interview, Continuous Discovery i Discovery vs Delivery."
        url="https://fotz.pl/blog/product-discovery-co-to-jest-jak-przeprowadzic"
        datePublished="2024-02-10"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Product Discovery", url: "https://fotz.pl/blog/product-discovery-co-to-jest-jak-przeprowadzic" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Product Discovery", href: "/blog/product-discovery-co-to-jest-jak-przeprowadzic" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-pink-600 text-white text-sm font-semibond px-3 py-1 rounded-full mb-4">
              Product Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Product Discovery
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Większość produktowych porażek nie wynika z błędów w implementacji —
              wynika z budowania złej rzeczy. Product Discovery to systematyczny proces
              walidacji problemów i rozwiązań zanim angażujesz Engineering.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Technik Discovery", value: "5+" },
                { label: "Min. wywiadów per segment", value: "5-10" },
                { label: "Continuous Discovery", value: "1/tydzień" },
                { label: "Kluczowe pytanie", value: "Czy to realny problem?" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-pink-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Techniki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 kluczowych technik Product Discovery</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda technika odpowiada na inne pytanie i ma inne koszty.
              Customer Interview to fundament — reszta weryfikuje to co słyszysz w rozmowach.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {discoveryTechniques.map((t, i) => (
              <FadeInView key={t.technika}>
                <div className={`rounded-xl border-2 p-6 ${
                  t.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  t.kolor === "green" ? "border-green-200 bg-green-50" :
                  t.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  t.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-red-200 bg-red-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      t.kolor === "blue" ? "bg-blue-600" :
                      t.kolor === "green" ? "bg-green-600" :
                      t.kolor === "purple" ? "bg-purple-600" :
                      t.kolor === "orange" ? "bg-orange-600" :
                      "bg-red-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-xl mb-3 ${
                        t.kolor === "blue" ? "text-blue-800" :
                        t.kolor === "green" ? "text-green-800" :
                        t.kolor === "purple" ? "text-purple-800" :
                        t.kolor === "orange" ? "text-orange-800" :
                        "text-red-800"
                      }`}>{t.technika}</h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Cel</div>
                          <p className="text-sm text-gray-700">{t.cel}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Kiedy stosować</div>
                          <p className="text-sm text-gray-700">{t.kiedy}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Jak</div>
                          <p className="text-sm text-gray-700">{t.jak}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery vs Delivery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discovery vs. Delivery</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Discovery i Delivery to dwa równoległe tory, nie sekwencyjne fazy.
              PM i Designer prowadzą Discovery 2-4 tygodnie przed Engineering —
              tak że Engineering zawsze buduje rzeczy już zwalidowane.
            </p>
          </FadeInView>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 text-white">
              <div className="p-4 text-sm font-bold">Aspekt</div>
              <div className="p-4 text-sm font-bold text-pink-400">Product Discovery</div>
              <div className="p-4 text-sm font-bold text-blue-400">Product Delivery</div>
            </div>
            {discoveryVsDelivery.map((r, i) => (
              <div key={r.aspekt} className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="p-4 text-sm font-bold text-gray-700">{r.aspekt}</div>
                <div className="p-4 text-sm text-gray-700">{r.discovery}</div>
                <div className="p-4 text-sm text-gray-700">{r.delivery}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <RelatedArticles currentArticleId="product-discovery-co-to-jest-jak-przeprowadzic" />
      <ContactSection />
    </Layout>
  );
}
