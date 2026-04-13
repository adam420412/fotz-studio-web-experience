import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Prompt Engineering?",
    answer: "Prompt Engineering to sztuka i nauka projektowania instrukcji (promptów) dla modeli językowych (LLM) w celu uzyskania optymalnych odpowiedzi. Dobry prompt to różnica między odpowiedzią przeciętną a odpowiedzią klasy eksperckiej. Prompt składa się z: Instruction — co model ma zrobić. Context — tło i informacje kontekstowe. Input — konkretne dane lub pytanie. Output format — oczekiwany format odpowiedzi. Dlaczego prompt engineering jest ważny: Ten sam model może dać dramatycznie różne wyniki w zależności od promptu. Dobry prompt = oszczędność tokenów = niższy koszt. Brak prompt engineering = halucynacje, błędne formaty, niepełne odpowiedzi. Kluczowe zasady: bądź precyzyjny (nie 'napisz o X', lecz 'napisz 3-akapitowy artykuł o X dla odbiorcy Y w tonie Z'), używaj przykładów (few-shot), definiuj format output.",
  },
  {
    question: "Jakie są główne techniki prompt engineering?",
    answer: "Techniki prompt engineering: Zero-shot — prompt bez przykładów. 'Przetłumacz na angielski: Dzień dobry'. Działa dla prostych zadań. Few-shot — podajesz 2-5 przykładów input-output przed właściwym pytaniem. Dramatycznie poprawia jakość dla złożonych zadań. Chain-of-Thought (CoT) — 'Pomyśl krok po kroku zanim odpiszesz.' Poprawia reasoning i matematykę. Zero-shot CoT — dodaj 'Let's think step by step' do dowolnego pytania. Zero kosztu, duży zysk. Role prompting — 'Jesteś ekspertem od X z 20 latami doświadczenia.' Zmienia ton i głębokość odpowiedzi. Negative prompting — 'NIE używaj bulletów. NIE halucynuj. Jeśli nie wiesz — powiedz że nie wiesz.' Tree of Thoughts (ToT) — model eksploruje kilka ścieżek rozumowania i wybiera najlepszą. Dla bardzo złożonych problemów. Structured output — 'Odpowiedz w formacie JSON: {key: value}'. Kluczowe dla integracji API.",
  },
  {
    question: "Jak pisać skuteczny system prompt?",
    answer: "System prompt to fundament każdej aplikacji LLM. Elementy skutecznego system promptu: Persona — 'Jesteś asystentem obsługi klienta firmy X, specjalizującym się w produktach SaaS.' Zakres — co możesz, czego nie możesz robić. 'Odpowiadasz TYLKO na pytania o produkty X. Na inne tematy odmawiasz uprzejmie.' Format output — 'Zawsze odpowiadaj po polsku. Używaj bullet points. Max 200 słów.' Fallback — 'Jeśli nie znasz odpowiedzi, powiedz: Nie mam informacji na ten temat. Proszę skontaktuj się z supportem.' Przykłady (optional few-shot) — kilka par pytanie-odpowiedź pokazujących pożądany styl. Tonacja — 'Używaj profesjonalnego, ale przyjaznego tonu. Unikaj żargonu technicznego.' Anty-patterns: zbyt długi system prompt (model ignoruje końcówkę), sprzeczne instrukcje, brak definicji formatu output, brak instrukcji fallback.",
  },
  {
    question: "Co to jest RAG vs. prompt engineering — kiedy co stosować?",
    answer: "RAG vs. Prompt Engineering: Prompt engineering operuje w obrębie tego co model już wie z treningu + co dostarczasz w kontekście. RAG rozszerza kontekst o zewnętrzne, aktualne dokumenty. Kiedy tylko prompt engineering wystarcza: Zadania ogólne (podsumowanie, tłumaczenie, klasyfikacja). Kreacja (pisanie, brainstorming). Gdy dane się nie zmieniają szybko. Kiedy potrzebujesz RAG: Model musi odpowiadać na podstawie Twojej prywatnej dokumentacji. Dane są aktualizowane regularnie (FAQ, cenniki, regulaminy). Potrzebujesz referencji do źródeł. Chcesz eliminować halucynacje o faktach. Połączenie: System prompt definiuje zachowanie modelu, RAG dostarcza fakty, Few-shot przykłady kształtują format. To trio jest podstawą większości produkcyjnych aplikacji LLM. Prompt engineering jest zawsze potrzebny — nawet przy RAG musisz napisać dobry prompt który integruje pobrany kontekst.",
  },
  {
    question: "Jak ewaluować i iterować prompty?",
    answer: "Ewaluacja promptów: Tworzenie test suite — zestaw 20-50 par input-expected_output pokrywających edge cases, typowe pytania i trudne przypadki. Metryki automatyczne — dla klasyfikacji: accuracy, F1. Dla generacji: ROUGE (overlap z referencją), BERTScore (semantic similarity), LLM-as-judge (GPT-4 ocenia jakość). Human evaluation — złoty standard, ale kosztowny. Próbkuj 10-20% outputs do ręcznego przeglądu. A/B testing promptów — uruchamiaj 2 wersje promptu na tym samym zestawie testowym, porównaj metryki. Narzędzia: LangSmith — playground + tracing + ewaluacja. Promptfoo — open-source prompt testing framework. Helicone, Braintrust — prompt management i ewaluacja. PromptLayer — versioning i analytics. Iteracja: zmień jedną zmienną na raz. Dokumentuj zmiany i wyniki. Używaj prompt templates (zmienne zamiast hard-coded wartości). Zawsze testuj na production-like danych.",
  },
];

const promptTechniques = [
  {
    technika: "Zero-shot",
    opis: "Instrukcja bez przykładów. Model odpowiada na podstawie wiedzy z treningu.",
    kiedy: "Proste zadania: tłumaczenie, klasyfikacja sentymentu, streszczenie",
    przykład: "'Sklasyfikuj email jako SPAM lub HAM: [treść emaila]'",
    kolor: "blue",
  },
  {
    technika: "Few-shot",
    opis: "2-5 przykładów input-output przed właściwym pytaniem. Kalibruje model do pożądanego formatu.",
    kiedy: "Specyficzny format output, custom classification, niestandardowe zadania",
    przykład: "Przykład 1: wejście → wyjście\\nPrzykład 2: wejście → wyjście\\nTeraz: [prawdziwe wejście]",
    kolor: "green",
  },
  {
    technika: "Chain-of-Thought",
    opis: "Model wyjaśnia rozumowanie krok po kroku zanim poda odpowiedź. Poprawia accuracy.",
    kiedy: "Math reasoning, logic puzzles, complex decision making, kod",
    przykład: "'Rozwiąż zadanie. Myśl krok po kroku, pokaż obliczenia, potem podaj wynik.'",
    kolor: "purple",
  },
  {
    technika: "Role Prompting",
    opis: "Nadajesz modelowi persona eksperta. Zmienia ton, głębokość i styl odpowiedzi.",
    kiedy: "Ekspertyza domenowa, zmiana tonu, specjalistyczne zadania",
    przykład: "'Jesteś senior software architektem z 15 latami doświadczenia w systemach rozproszonych.'",
    kolor: "orange",
  },
  {
    technika: "Structured Output",
    opis: "Wymuszasz konkretny format odpowiedzi (JSON, XML, Markdown). Klucz dla integracji.",
    kiedy: "API integracje, pipeline'y danych, automatyczne przetwarzanie",
    przykład: "'Odpowiedz w JSON: {\"sentiment\": \"positive|negative\", \"score\": 0-1, \"reason\": \"...\"}'",
    kolor: "teal",
  },
];

const promptAntiPatterns = [
  { błąd: "Zbyt ogólna instrukcja", przykład: "'Napisz o marketingu'", fix: "'Napisz 400-słowowy artykuł o email marketingu dla B2B SaaS, skupiając się na onboardingu i aktywacji.'" },
  { błąd: "Brak formatu output", przykład: "'Podsumuj ten dokument'", fix: "'Podsumuj w 3 bullet points, każdy max 20 słów, skupiając się na decyzjach i action items.'" },
  { błąd: "Sprzeczne instrukcje", przykład: "'Bądź krótki i podaj wszystkie szczegóły'", fix: "Zdecyduj: krótkie = 3 bullet points, szczegółowe = pełny raport. Wybierz jedno." },
  { błąd: "Brak instrukcji fallback", przykład: "Brak obsługi gdy model nie zna odpowiedzi", fix: "'Jeśli nie masz pewności, odpowiedz: Nie mam wystarczających informacji. Nie spekuluj.'" },
];

export default function BlogPromptEngineeringCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Prompt Engineering | Fotz Studio"
        description="Prompt Engineering: techniki (zero-shot, few-shot, Chain-of-Thought, Role Prompting), system prompt, ewaluacja promptów i anti-patterns dla aplikacji LLM."
        canonicalUrl="https://fotz.pl/blog/prompt-engineering-co-to-jest-jak-pisac-prompty"

        keywords="Prompt Engineering co to jest, Prompt Engineering definicja, czym jest Prompt Engineering, Prompt Engineering przykłady, jak działa Prompt Engineering, Prompt Engineering znaczenie, Prompt Engineering przewodnik"

        canonical="https://fotz.pl/blog/prompt-engineering-co-to-jest-jak-pisac-prompty"
      />
      <ArticleSchema
        title="Prompt Engineering — co to jest i jak pisać skuteczne prompty?"
        description="Prompt Engineering: techniki (zero-shot, few-shot, CoT, role prompting, structured output), system prompt best practices, ewaluacja i anty-patterns dla LLM apps."
        url="https://fotz.pl/blog/prompt-engineering-co-to-jest-jak-pisac-prompty"
        datePublished="2024-03-06"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Prompt Engineering", url: "https://fotz.pl/blog/prompt-engineering-co-to-jest-jak-pisac-prompty" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Prompt Engineering", href: "/blog/prompt-engineering-co-to-jest-jak-pisac-prompty" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              AI / LLM Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prompt Engineering
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Ten sam model, dwa prompty — odpowiedź przeciętna vs. ekspercka.
              Prompt engineering to kluczowa umiejętność każdego kto buduje
              produkty na LLM.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Kluczowa technika", value: "Chain-of-Thought" },
                { label: "Format produkcyjny", value: "Structured JSON" },
                { label: "Ewaluacja", value: "LLM-as-Judge" },
                { label: "Narzędzie", value: "LangSmith" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-violet-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 kluczowych technik prompt engineering</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od prostego zero-shot po zaawansowane structured output —
              każda technika ma swoje optymalne zastosowanie.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {promptTechniques.map((t) => (
              <FadeInView key={t.technika}>
                <div className={`rounded-xl border-2 p-5 ${
                  t.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  t.kolor === "green" ? "border-green-200 bg-green-50" :
                  t.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  t.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 font-mono ${
                    t.kolor === "blue" ? "text-blue-800" :
                    t.kolor === "green" ? "text-green-800" :
                    t.kolor === "purple" ? "text-purple-800" :
                    t.kolor === "orange" ? "text-orange-800" :
                    "text-teal-800"
                  }`}>{t.technika}</h3>
                  <p className="text-gray-700 text-sm mb-3">{t.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase">Kiedy używać: </span>
                      <span className="text-gray-600">{t.kiedy}</span>
                    </div>
                    <div className="bg-white rounded p-2 font-mono text-xs text-gray-700 border border-gray-200">
                      {t.przykład}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-patterns */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Najczęstsze błędy w promptach (Anti-Patterns)</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy z tych błędów sabotuje jakość odpowiedzi LLM —
              i każdy ma prostą poprawkę.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {promptAntiPatterns.map((p, i) => (
              <FadeInView key={p.błąd}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-red-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{p.błąd}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-xs font-bold text-red-500 uppercase mb-1">Problem:</div>
                          <p className="text-gray-600 font-mono bg-red-50 rounded p-2">{p.przykład}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-green-600 uppercase mb-1">Fix:</div>
                          <p className="text-gray-700 bg-green-50 rounded p-2">{p.fix}</p>
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

      <ContactSection />
    </Layout>
  );
}
