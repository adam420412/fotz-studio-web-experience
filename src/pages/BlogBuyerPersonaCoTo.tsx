import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest buyer persona?",
    answer:
      "Buyer persona (persona zakupowa) to fikcyjny, ale oparty na realnych danych profil idealnego klienta. Opisuje: demografię, role i obowiązki zawodowe, cele i motywacje, bariery i obawy, proces decyzyjny, preferowane kanały informacji i zachowania zakupowe. Buyer persona pomaga marketingowi i sprzedaży tworzyć trafne komunikaty, produktowi — rozwijać funkcje zgodne z potrzebami, a CS — segmentować klientów. To nie User Persona (UX) — skupia się na zakupie, nie na użytkowaniu.",
  },
  {
    question: "Ile buyer person powinna mieć firma?",
    answer:
      "Optymalna liczba to 2-5 person. Jedna główna persona (Primary Persona) odpowiadająca za większość przychodów + 1-3 persona pomocnicze dla różnych segmentów lub ról decyzyjnych. Unikaj pułapki 'persona dla każdego' — zbyt wiele person rozmywa fokus. W B2B warto mieć osobne persony dla różnych ról w procesie zakupu: Economic Buyer (decydent budżetowy), Champion (wewnętrzny promotor) i End User (codzienny użytkownik).",
  },
  {
    question: "Czym różni się buyer persona od ICP?",
    answer:
      "ICP (Ideal Customer Profile) opisuje idealną firmę/organizację — wielkość, branżę, model biznesowy, lokalizację, dojrzałość technologiczną. Buyer persona opisuje konkretną osobę w tej organizacji — jej rolę, motywacje, problemy i zachowania zakupowe. ICP to profil na poziomie firmy (company-level), persona to profil na poziomie człowieka (individual-level). W B2B używa się obu: ICP do targetowania firm, persony do personalizacji komunikacji z konkretnymi rozmówcami.",
  },
  {
    question: "Jak tworzyć buyer personę opartą na danych?",
    answer:
      "Metody zbierania danych: wywiady z aktualnymi klientami (najcenniejsze — min. 10-15 wywiadów z best-fit customers), analiza CRM (wspólne cechy wygranych deal), ankiety wśród użytkowników, dane z narzędzi analitycznych (Google Analytics, Clarity), analiza rozmów sprzedażowych (Gong/Chorus), social listening, desk research (raporty branżowe, fora, Reddit/LinkedIn). Unikaj tworzenia person 'z głowy' bez danych — to przynosi więcej szkody niż pożytku.",
  },
  {
    question: "Jak używać buyer person w praktyce?",
    answer:
      "Buyer persona powinna być żywym dokumentem wbudowanym w procesy: marketing — segmentacja kampanii i treści pod konkretne persony, sprzedaż — personalizacja pitcha i outreachu, product — priorytetyzacja roadmapy, CS — onboarding i komunikacja. Kluczowy test: 'Czy ten email byłby relevantny dla Anny, 40-letniej VP Marketing w SaaS, czy dla każdego?' Jeśli dla każdego — personalizacja jest niewystarczająca.",
  },
];

const personaElements = [
  {
    kategoria: "Profil zawodowy",
    opis: "Kim jest ta osoba w organizacji?",
    pytania: "Rola, tytuł, branża, wielkość firmy, staż, komu raportuje, czym zarządza",
    przykład: "Anna Kowalska, 38 lat, VP of Marketing w SaaS B2B, 50-200 pracowników, raportuje do CEO",
  },
  {
    kategoria: "Cele i priorytety",
    opis: "Co ta osoba chce osiągnąć?",
    pytania: "Cele kwartalne i roczne, KPIs, na czym jest oceniana, co jest jej sukcesem",
    przykład: "Zwiększenie MQL o 40%, obniżenie CAC, zbudowanie marketing attribution",
  },
  {
    kategoria: "Problemy i bóle",
    opis: "Co ją frustruje i blokuje?",
    pytania: "Największe wyzwania, co ją utrzymuje w nocy, jakie narzędzia jej nie działają, gdzie traci czas",
    przykład: "Brak wiarygodnych danych o ROI kampanii, chaotyczny stos narzędzi, brak zasobów do skalowania treści",
  },
  {
    kategoria: "Proces zakupowy",
    opis: "Jak podejmuje decyzje?",
    pytania: "Jak odkrywa nowe rozwiązania, kto wpływa na decyzję, jaki jest typowy cykl zakupu, co ją przekonuje",
    przykład: "Czyta G2/Capterra, pyta koleżanki z branży, wymaga free trial, potrzebuje ROI case study",
  },
  {
    kategoria: "Kanały informacyjne",
    opis: "Gdzie szuka wiedzy?",
    pytania: "LinkedIn, podcasty, newslettery, konferencje, blogi branżowe, grupy Slack, YouTube",
    przykład: "Marketing Brew, Lenny's Newsletter, Marketing Over Coffee podcast, MarTech Summit",
  },
  {
    kategoria: "Cytaty i sygnały językowe",
    opis: "Jak mówi o swoich problemach?",
    pytania: "Dosłowne cytaty z wywiadów, słowa których używa, frameworki które zna, metafory",
    przykład: "'Nie wiem skąd przychodziły nasze najlepsze leady w zeszłym kwartale — po prostu się pojawiły'",
  },
];

const b2bRoles = [
  { rola: "Economic Buyer", opis: "Decydent budżetowy — zatwierdza zakup i podpisuje kontrakt", fokus: "ROI, ryzyko dla firmy, strategic fit, TCO (Total Cost of Ownership)", przykład: "CEO, CFO, VP/Director" },
  { rola: "Champion", opis: "Wewnętrzny promotor — chce produktu, walczy o niego wewnętrznie", fokus: "Korzyści dla własnej pracy, jak wyglądać dobrze przed szefem, ease of implementation", przykład: "Manager/Lead danego działu, power user" },
  { rola: "End User", opis: "Codzienny użytkownik produktu — UX, adoption, usability decydują", fokus: "Łatwość użycia, niezawodność, integracje z ich obecnym stackiem, czas nauki", przykład: "Analyst, Specialist, Coordinator" },
  { rola: "Influencer / Gatekeeper", opis: "Opiniodawca lub blokujący — IT, Legal, Procurement", fokus: "Bezpieczeństwo, compliance, SLA, warunki kontraktu, vendor management", przykład: "IT Manager, Legal Counsel, Procurement" },
];

export default function BlogBuyerPersonaCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Buyer Persona — co to jest? Jak tworzyć persony zakupowe B2B"
        description="Buyer persona — definicja, 6 elementów profilu, 4 role B2B (Economic Buyer, Champion, User, Influencer), różnica vs ICP i jak tworzyć oparte na danych. Przewodnik."
        canonicalUrl="https://fotz.pl/blog/buyer-persona-co-to"
      />
      <ArticleSchema
        title="Buyer Persona — co to jest i jak ją tworzyć?"
        description="Kompletny przewodnik po buyer persona: 6 elementów profilu, 4 role w B2B, różnica vs ICP i metody badawcze."
        url="https://fotz.pl/blog/buyer-persona-co-to"
        datePublished="2024-01-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Buyer Persona", url: "https://fotz.pl/blog/buyer-persona-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Buyer Persona" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Buyer Persona — co to jest i jak ją tworzyć?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Buyer persona to fundament skutecznego marketingu i sprzedaży B2B.
            Poznaj 6 elementów profilu, 4 role zakupowe i jak budować persony oparte na danych.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest buyer persona?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Buyer persona</strong> to fikcyjny, ale oparty na realnych danych profil
              reprezentatywnego klienta — opisujący nie tylko kim jest demograficznie, ale
              co go motywuje, co go frustruje, jak szuka informacji i jak podejmuje decyzje zakupowe.
              Dobra persona sprawia, że marketing przestaje mówić "do wszystkich" i zaczyna mówić
              bezpośrednio do konkretnego człowieka.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Kluczowy test skuteczności persony: czy Twój team marketingu i sprzedaży może
              w 10 sekund opisać kim jest Wasza główna persona, jakie ma problemy i dlaczego
              wybiera Wasz produkt? Jeśli każda osoba odpowiada inaczej — persony wymagają pracy.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="font-semibold text-orange-900 mb-2">Buyer Persona vs. ICP:</p>
              <p className="text-orange-800 text-sm">
                <strong>ICP (firma):</strong> SaaS B2B, 50-500 pracowników, Polska, seria A-C, używa Salesforce.<br />
                <strong>Buyer Persona (osoba):</strong> Anna, VP Marketing, 35-45 lat, odpowiedzialna za demand gen, 
                sfrustrowana brakiem attribution, czyta Lenny's Newsletter, potrzebuje ROI case study przed zakupem.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 elementów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 elementów profilu buyer persona</h2>
            <div className="space-y-4">
              {personaElements.map((el, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{el.kategoria}</h3>
                      <p className="text-slate-500 text-sm mb-2 italic">{el.opis}</p>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div className="bg-purple-50 rounded p-2">
                          <p className="text-xs font-semibold text-purple-600 mb-1">Pytania do zbadania:</p>
                          <p className="text-purple-800">{el.pytania}</p>
                        </div>
                        <div className="bg-slate-50 rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                          <p className="text-slate-700 italic">{el.przykład}</p>
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

      {/* 4 role B2B */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">4 role buyer person w procesie zakupu B2B</h2>
            <p className="text-slate-600 mb-8">W B2B zakup rzadko angażuje jedną osobę. Każda rola ma inne priorytety i wymaga innego komunikatu.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {b2bRoles.map((r, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-purple-700 mb-1">{r.rola}</h3>
                  <p className="text-slate-600 text-sm mb-3">{r.opis}</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded p-2">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Na co zwraca uwagę:</p>
                      <p className="text-slate-700">{r.fokus}</p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="text-xs font-semibold text-purple-600 mb-1">Przykładowe tytuły:</p>
                      <p className="text-purple-800">{r.przykład}</p>
                    </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — buyer persona</h2>
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
