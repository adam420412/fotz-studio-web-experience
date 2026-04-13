import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest user persona?",
    answer:
      "User persona (buyer persona, persona marketingowa) to semi-fikcyjna reprezentacja idealnego klienta lub użytkownika stworzona na podstawie badań i danych. Persona ma imię, zdjęcie, demografię, cele, frustrations, zachowania zakupowe i cytat który oddaje jej nastawienie. Persony humanizują dane — zamiast 'użytkownik 25-35 lat, miejski' mówisz 'Marta, 31 lat, marketing manager, mama, ceni czas'. Persona to wspólny język dla całego zespołu.",
  },
  {
    question: "Skąd brać dane do tworzenia person?",
    answer:
      "Dane ilościowe: Google Analytics (demografia, zachowania), CRM (historia zakupów, segmenty), ankiety (SurveyMonkey, Typeform), dane z social media. Dane jakościowe: wywiady z klientami (minimum 5-10 na segment), wywiady z zespołem sprzedaży i CS (mają bezpośredni kontakt), analiza nagrań sesji (Hotjar), recenzje i komentarze (G2, Capterra, App Store). Złota zasada: zacznij od rozmów z prawdziwymi klientami — dane analityczne potwierdzają, wywiady odkrywają.",
  },
  {
    question: "Ile person powinienem mieć?",
    answer:
      "Złoty przedział: 2-5 person na produkt. Mniej niż 2 = zbyt uproszczone, trudno trafić w różne segmenty. Więcej niż 5 = paraliż — nie możesz tworzyć treści dla 8 różnych person jednocześnie. Priorytetyzuj: primary persona (główny segment, największy potencjał), secondary persona (ważny ale mniejszy), negative persona (kogo NIE chcesz — pomaga uniknąć złych klientów). Zacznij od 1-2 person, dodawaj kolejne gdy masz więcej danych.",
  },
  {
    question: "Czym różni się persona od segmentu rynku?",
    answer:
      "Segment rynku to statystyczna, agregowana kategoria klientów o podobnych cechach — np. 'kobiety 25-35, dochód 5-10k'. Persona to fikcyjny, szczegółowy reprezentant segmentu — np. 'Marta, 31 lat, marketing manager w Warszawie, mama 2-latka'. Segment = kategoria demograficzna. Persona = człowiek z historią, motywacjami, frustracjami. Persony ułatwiają empatię i są lepsze do tworzenia komunikatów marketingowych.",
  },
  {
    question: "Jak używać person w marketingu i produkcie?",
    answer:
      "Zastosowania person: Treści i copywriting — pisz bezpośrednio do Marty, używaj jej języka. Product development — każdy feature oceniaj przez pryzmat: 'Czy Marta tego potrzebuje?' Kampanie reklamowe — targetowanie, kreacje i copy dopasowane do persony. Sales — przygotowanie pitch i handle objections dla konkretnego archetypsu. UX Design — projektuj dla Marty, nie dla abstrakcyjnego 'użytkownika'. Customer success — onboarding dostosowany do poziomu wiedzy persony.",
  },
];

const personaComponents = [
  { komponent: "Dane demograficzne", opis: "Imię, wiek, płeć, lokalizacja, wykształcenie, zawód, dochód, status rodzinny", przykład: "Marta Kowalska, 31 lat, Marketing Manager, Warszawa, Uczelnia wyższa, dochód 8k PLN" },
  { komponent: "Cele i motywacje", opis: "Co chce osiągnąć — zawodowo i prywatnie? Co ją napędza?", przykład: "Chce awansować na Head of Marketing, buduje personal brand, chce więcej czasu dla rodziny" },
  { komponent: "Frustrations i pain points", opis: "Co ją blokuje? Jakie problemy chce rozwiązać? Co ją frustruje?", przykład: "Za mało czasu na strategię (gasi pożary), trudno mierzyć ROI działań, brak wsparcia agencji" },
  { komponent: "Zachowania i nawyki", opis: "Jak kupuje? Gdzie szuka informacji? Jak spędza dzień?", przykład: "Researches on LinkedIn, reads industry newsletters, asks peers for recommendations" },
  { komponent: "Cytaty i narracja", opis: "Autentyczne słowa klienta które oddają jego nastawienie", przykład: "'Potrzebuję rozwiązania które po prostu działa — nie mam czasu na konfigurację.'" },
  { komponent: "Channels i media", opis: "Gdzie spędza czas online i offline? Jakie social media, media, eventy?", przykład: "LinkedIn (codziennie), podcasts o marketingu, newslettery Marketer+, konferencja I love marketing" },
  { komponent: "Trigger i Decision Process", opis: "Co wywołuje potrzebę zakupu? Jak wygląda jej proces decyzyjny?", przykład: "Trigger: nowy szef wymaga ROI, Decision: research → demo → approval od CEO → purchase" },
];

const negativePersona = {
  co_to: "Negative persona (exclusive persona) to opis klientów których NIE chcesz obsługiwać — bo mają zbyt wysoki CAC, zbyt niskie LTV, generują nieproporcjonalnie dużo supportu lub nie pasują do produktu.",
  przykłady: [
    "Studenci z zerowym budżetem — bardzo dużo wsparcia, zero konwersji do płatnych planów",
    "Freelancerzy szukający 'najtaniej' — wysoki churn, price-sensitive, słabi ambasadorzy marki",
    "Enterprise z 18-miesięcznym procurement cycle — CAC jest wyższy niż LTV przez 2 lata",
  ],
  korzyść: "Knowing who you don't want to serve helps fokusować zasoby i uniknąć kosztownych, nierentownych klientów",
};

const personaCreationSteps = [
  "1. Zbierz dane ilościowe: analytics, CRM, ankiety",
  "2. Przeprowadź 5-10 wywiadów z obecnymi klientami per segment",
  "3. Rozmawiaj z zespołem sales i CS — znają klientów lepiej niż marketing",
  "4. Zidentyfikuj wzorce i klastry (clustering podobnych odpowiedzi)",
  "5. Stwórz 2-5 draft person na bazie wzorców",
  "6. Waliduj z zespołem — czy to prawdziwy opis klientów?",
  "7. Udokumentuj i udostępnij — persona = żywy dokument, aktualizuj co roku",
];

export default function BlogUserPersonaCoTo() {
  return (
    <Layout>
      <SEOHead
        title="User Persona — co to jest? Buyer persona jak tworzyć"
        description="User persona (buyer persona) — definicja, 7 komponentów, jak zbierać dane, ile person mieć i jak używać w marketingu i produkcie. Przewodnik po persona marketingowej."
        canonicalUrl="https://fotz.pl/blog/user-persona-co-to"

        keywords="User Persona co to jest, User Persona definicja, czym jest User Persona, User Persona w sprzedaży, User Persona strategia, User Persona przykłady, jak używać User Persona"
      />
      <ArticleSchema
        title="User Persona — co to jest i jak tworzyć buyer personas?"
        description="Kompletny przewodnik po user persona: 7 komponentów, jak zbierać dane (wywiady, analytics), negative persona i zastosowania w marketingu i UX."
        url="https://fotz.pl/blog/user-persona-co-to"
        datePublished="2024-01-23"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "User Persona", url: "https://fotz.pl/blog/user-persona-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "User Persona" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            User Persona — co to jest i jak tworzyć buyer personas?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Persona to fikcyjny reprezentant idealnego klienta — wspólny język dla całego zespołu.
            Poznaj 7 komponentów, jak zbierać dane i jak persony wpływają na marketing i produkt.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest user persona?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>User persona</strong> (buyer persona, marketing persona) to semi-fikcyjna
              postać reprezentująca grupę Twoich klientów. Zamiast mówić o "użytkowniku
              25-35 lat z dużego miasta" mówisz o "Marcie" — i wszyscy w zespole wiedzą
              kto to jest, czego potrzebuje i jak do niej mówić.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Alan Cooper, pionier UX, spopularyzował concept person w latach 90.
              Dziś persony są standardowym narzędziem w marketingu, UX designie i product management.
              Dobra persona jest oparta na badaniach — nie zmyślona przy biurku.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "2-5", opis: "person na produkt to optimum — mniej niż 2 zbyt upraszcza, więcej niż 5 paraliżuje" },
                { stat: "5-10", opis: "wywiadów z klientami per segment — minimum do stworzenia wiarygodnej persony" },
                { stat: "Negative", opis: "persona — opis klientów których NIE chcesz obsługiwać — pomaga fokusować zasoby" },
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

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">7 komponentów user persona</h2>
            <div className="space-y-3">
              {personaComponents.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{c.komponent}</h3>
                      <p className="text-slate-600 text-sm mb-1">{c.opis}</p>
                      <p className="text-xs text-blue-600 italic">Przykład: {c.przykład}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Negative Persona — kogo NIE obsługiwać</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
              <p className="text-slate-700 mb-4">{negativePersona.co_to}</p>
              <h3 className="font-bold text-orange-900 mb-3">Przykłady negative person:</h3>
              <ul className="space-y-2">
                {negativePersona.przykłady.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-orange-800">
                    <span className="text-orange-400 mt-1 flex-shrink-0">✗</span>
                    {ex}
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-white rounded p-3 border border-orange-200">
                <p className="text-xs font-semibold text-orange-600 mb-1">Korzyść:</p>
                <p className="text-orange-800 text-sm">{negativePersona.korzyść}</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">7 kroków tworzenia persony</h2>
            <div className="space-y-2">
              {personaCreationSteps.map((step, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-slate-200 text-slate-700">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — user persona</h2>
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

      <ContactSection />
    </Layout>
  );
}
