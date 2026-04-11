import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest postmortem (analiza po incydencie)?",
    answer:
      "Postmortem (analiza post-incydentowa) to ustrukturyzowany dokument tworzony po każdym poważnym incydencie (awaria, breach, znacząca degradacja), który opisuje co się stało, jaki był wpływ, jakie były przyczyny źródłowe (root cause) i jakie działania naprawcze zostaną podjęte. Celem postmortem nie jest wskazanie winnych — to narzędzie do systemowego uczenia się. Kultura blameless postmortem (bez szukania kozłów ofiarnych) jest kluczem do budowania kultury bezpieczeństwa i ciągłego doskonalenia.",
  },
  {
    question: "Czym jest blameless postmortem?",
    answer:
      "Blameless postmortem (postmortem bez obwiniania) to podejście spopularyzowane przez Google SRE i Etsy, zakładające że incydenty są wynikiem systemowych słabości — nie indywidualnych błędów. Zamiast pytać 'Kto zawinił?' pytamy 'Dlaczego system na to pozwolił?' Blameless kultura buduje psychologiczne bezpieczeństwo — inżynierowie nie ukrywają błędów, otwarcie raportują o incydentach i dzielą się learningami. To jedyna droga do realnej poprawy niezawodności.",
  },
  {
    question: "Jak szybko przeprowadzić postmortem?",
    answer:
      "Best practice: postmortem powinien być gotowy w ciągu 24-48 godzin po rozwiązaniu incydentu. Optymalny timeline: natychmiast po incydencie — zapisz timeline events na bieżąco; w ciągu 24h — wstępny draft; w ciągu 48-72h — spotkanie review z kluczowymi osobami; w ciągu tygodnia — finalna wersja z action items i właścicielami. Im więcej czasu mija, tym więcej szczegółów się traci i tym trudniej zidentyfikować root cause.",
  },
  {
    question: "Co to jest Root Cause Analysis (RCA)?",
    answer:
      "Root Cause Analysis (analiza przyczyn źródłowych) to systematyczna metoda identyfikacji fundamentalnej przyczyny incydentu — nie symptomów, ale głębokiej przyczyny która pozwoliła na wystąpienie problemu. Popularne techniki: 5 Whys (5 Dlaczego) — pytaj 'dlaczego?' pięć razy by dotrzeć do przyczyny źródłowej; Fishbone Diagram (Ishikawa) — wizualna mapa kategorii przyczyn (human, process, technology, environment); Fault Tree Analysis — drzewo logiczne możliwych kombinacji przyczyn.",
  },
  {
    question: "Jak śledzić action items z postmortem?",
    answer:
      "Action items z postmortem muszą być traktowane jak priorytety — nie sugestie. Best practices: każdy action item ma właściciela (imię, nie 'team'), termin realizacji, status trackowany w JIRA/Linear lub osobnym rejestrze postmortemów, review na następnym spotkaniu team lub w kolejnym postmortem. Niektóre organizacje mają 'Reliability Review' miesięcznie, gdzie przegląda się status wszystkich otwartych action items z postmortemów.",
  },
];

const postmortemStructure = [
  { sekcja: "Metadata", zawartość: "Data incydentu, autor/autorzy postmortem, severity (P0/P1/P2), status (draft/review/final), data spotkania review" },
  { sekcja: "Executive Summary", zawartość: "2-3 zdania: co się stało, jak długo trwało, jaki był wpływ na klientów i biznes. Dla osób które nie czytają całości." },
  { sekcja: "Impact (Wpływ)", zawartość: "Czas trwania awarii, % dotkniętych klientów/requestów, szacowany wpływ finansowy, wpływ na SLA, komunikaty wysłane do klientów" },
  { sekcja: "Timeline", zawartość: "Chronologiczny zapis zdarzeń od pierwszego alarmu do rozwiązania — z timestampami. Kto co zrobił i kiedy. Czas wykrycia vs. czas rozwiązania." },
  { sekcja: "Root Cause (Przyczyna źródłowa)", zawartość: "Wynik 5 Whys lub innej RCA. Co NAPRAWDĘ spowodowało incydent — nie symptom, ale systemowa słabość która na to pozwoliła." },
  { sekcja: "Contributing Factors", zawartość: "Czynniki które przyczyniły się do incydentu lub pogorszyły jego skutki — nawet jeśli nie były bezpośrednią przyczyną." },
  { sekcja: "What Went Well", zawartość: "Co zadziałało dobrze — szybka detekcja, dobra komunikacja, skuteczny rollback. Wzmacniaj pozytywne zachowania." },
  { sekcja: "Action Items", zawartość: "Konkretne działania naprawcze: właściciel, termin, tracking ID. Podzielone na: immediate (do 48h), short-term (1-2 tygodnie), long-term (1+ miesiąc)." },
];

const fiveWhysExample = [
  { dlaczego: "Dlaczego 1", pytanie: "Dlaczego API zwracało błędy 500?", odpowiedź: "Bo baza danych była niedostępna." },
  { dlaczego: "Dlaczego 2", pytanie: "Dlaczego baza danych była niedostępna?", odpowiedź: "Bo wyczerpały się połączenia w connection pool." },
  { dlaczego: "Dlaczego 3", pytanie: "Dlaczego wyczerpały się połączenia?", odpowiedź: "Bo nowy release zawierał memory leak w handling requestów." },
  { dlaczego: "Dlaczego 4", pytanie: "Dlaczego memory leak nie był wykryty przed releasem?", odpowiedź: "Bo testy obciążeniowe nie obejmowały scenariusza z długotrwałym ruchem." },
  { dlaczego: "Dlaczego 5 (Root Cause)", pytanie: "Dlaczego testy obciążeniowe nie obejmowały tego scenariusza?", odpowiedź: "Bo nie mamy zdefiniowanych standardów testów obciążeniowych ani procesu ich przeglądu przed releasem." },
];

export default function BlogPostmortemCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Postmortem — co to jest? Analiza po incydencie i Root Cause Analysis"
        description="Postmortem (analiza po incydencie) — definicja, blameless culture, struktura 8 sekcji, przykład 5 Whys i jak śledzić action items. Przewodnik po RCA i SRE."
        canonicalUrl="https://fotz.pl/blog/postmortem-analiza-incydentu"
      />
      <ArticleSchema
        title="Postmortem — co to jest i jak przeprowadzać analizę po incydencie?"
        description="Kompletny przewodnik po postmortem: blameless culture, struktura 8 sekcji, Root Cause Analysis metodą 5 Whys i śledzenie action items."
        url="https://fotz.pl/blog/postmortem-analiza-incydentu"
        datePublished="2024-01-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Postmortem — Analiza Incydentu", url: "https://fotz.pl/blog/postmortem-analiza-incydentu" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Postmortem — Analiza Incydentu" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Postmortem — co to jest i jak analizować incydenty?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Postmortem to narzędzie uczenia się z awarii — bez obwiniania, z fokusem na systemy.
            Poznaj strukturę 8 sekcji, metodę 5 Whys i blameless culture Google SRE.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest postmortem?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Postmortem</strong> to ustrukturyzowany dokument tworzony po każdym poważnym
              incydencie — opisuje co się stało, jaki był wpływ, jakie były przyczyny źródłowe
              i jakie działania naprawcze zostaną podjęte. Filozofia blameless postmortem:
              incydenty są wynikiem systemowych słabości, nie indywidualnych błędów.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Google SRE Book definiuje cel postmortem: "Zapewnić, że incydent jest
              zdokumentowany, że wszystkie przyczyny są zrozumiane i że działania
              zapobiegające powtórzeniu incydentu są podjęte."
            </p>
            <div className="bg-slate-900 text-white rounded-xl p-6">
              <p className="font-semibold text-amber-400 mb-2">Blameless Culture — zasada kluczowa:</p>
              <p className="text-slate-200">
                "Nie pytamy KTO zawinił — pytamy DLACZEGO system pozwolił na to, żeby to się stało."
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Struktura */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Struktura postmortem — 8 sekcji</h2>
            <div className="space-y-3">
              {postmortemStructure.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-rose-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{s.sekcja}</h3>
                      <p className="text-slate-600 text-sm">{s.zawartość}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 Whys */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Metoda 5 Whys — przykład root cause analysis</h2>
            <p className="text-slate-600 mb-6">Pytaj 'Dlaczego?' pięć razy — każda odpowiedź prowadzi głębiej, aż do prawdziwej przyczyny systemowej.</p>
            <div className="space-y-2">
              {fiveWhysExample.map((w, i) => (
                <div key={i} className={`rounded-xl p-4 border ${i === fiveWhysExample.length - 1 ? "bg-red-50 border-red-300" : "bg-slate-50 border-slate-200"}`}>
                  <p className={`font-semibold mb-1 text-sm ${i === fiveWhysExample.length - 1 ? "text-red-700" : "text-slate-700"}`}>
                    {w.dlaczego}: {w.pytanie}
                  </p>
                  <p className={`text-sm ${i === fiveWhysExample.length - 1 ? "text-red-800 font-medium" : "text-slate-600"}`}>
                    → {w.odpowiedź}
                  </p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — postmortem i RCA</h2>
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
