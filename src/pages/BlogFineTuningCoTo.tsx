import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Fine-Tuning LLM?",
    answer: "Fine-tuning (dostrajanie) to proces dalszego trenowania pre-trenowanego modelu językowego (LLM) na własnym, specjalistycznym zbiorze danych w celu dostosowania go do konkretnego zadania lub domeny. Analogia: GPT-4 to absolwent uczelni z szeroką wiedzą ogólną. Fine-tuning to staż w konkretnej firmie — model 'uczy się' specyfiki Twojej domeny, stylu komunikacji i formatów. Co zmienia fine-tuning: Styl i ton odpowiedzi. Specjalistyczny żargon i terminologię domeny. Format output (model zawsze odpowiada w JSON, zawsze po polsku, zawsze w 3 punktach). Zachowanie — model wie kiedy odmówić, jak eskalować. Czego NIE zmienia fine-tuning: Model nie 'pamięta' nowych faktów jak RAG. Fine-tuning zmienia wagi, nie dodaje zewnętrznej bazy wiedzy. Złe użycie: fine-tuning jako zastępstwo RAG dla aktualnych danych. Dobre użycie: fine-tuning dla stylu, tonu, formatu i specjalistycznej terminologii.",
  },
  {
    question: "Jakie są techniki fine-tuningu — LoRA, QLoRA, RLHF?",
    answer: "Techniki fine-tuningu: Full Fine-Tuning — modyfikacja wszystkich wag modelu. Najlepsza jakość, najdroższy (wymaga dużo GPU). Tylko dla małych modeli lub dużych budżetów. LoRA (Low-Rank Adaptation) — zamiast modyfikować wszystkie wagi, dodaje małe macierze adaptacyjne do warstw modelu. 10-100x mniejszy koszt GPU, porównywalna jakość. Standardowa metoda dla mid-size teams. QLoRA (Quantized LoRA) — LoRA + kwantyzacja modelu do 4-bit. Umożliwia fine-tuning dużych modeli (70B) na pojedynczej karcie GPU. Idealne dla zasobowo ograniczonych projektów. RLHF (Reinforcement Learning from Human Feedback) — używany przez OpenAI do trenowania ChatGPT. Bardzo kosztowny, wymaga dużego zespołu ludzkich ewaluatorów. Tylko dla największych firm. RLAIF (RL from AI Feedback) — zastępuje ludzkich ewaluatorów modelem AI. Tańszy wariant RLHF. DPO (Direct Preference Optimization) — nowsza alternatywa dla RLHF. Prostszy w implementacji, coraz popularniejszy.",
  },
  {
    question: "Jak przygotować dataset do fine-tuningu?",
    answer: "Przygotowanie datasetu fine-tuningu: Format: zazwyczaj JSONL (JSON Lines) z parami instruction-response lub conversation format (messages array). Minimalna ilość przykładów: dla GPT-3.5/4 API: 50-100 przykładów może wystarczyć dla prostych zadań. Dla Llama, Mistral lokalnie: 500-2000+ przykładów dla dobrych wyników. Jakość ponad ilość — 100 doskonałych przykładów bije 1000 słabych. Jak zbierać dane: Ręczna kuracja — tworzysz pary pytanie-odpowiedź manualnie. Najlepsza jakość, najwolniejsza. GPT-4 distillation — używasz GPT-4 do generowania odpowiedzi, fine-tuning mniejszego modelu na tych odpowiedziach. Tańsze. Production data — zbierasz prawdziwe interakcje użytkowników z Twoją aplikacją, filtrujesz i labellingujesz. Najlepsze dane długoterminowo. Przygotowanie: usuń duplikaty, sprawdź spójność formatu, zbalansuj klasy (jeśli klasyfikacja), podziel na train/validation split (90/10).",
  },
  {
    question: "Fine-tuning vs. RAG vs. Prompt Engineering — kiedy co stosować?",
    answer: "Porównanie podejść: Prompt Engineering — czas wdrożenia: godziny. Koszt: niski. Najlepiej dla: ogólnych zadań, szybkich prototypów, gdy model już 'wie' co trzeba. RAG — czas wdrożenia: dni/tygodnie. Koszt: średni. Najlepiej dla: aktualnych danych, prywatnej dokumentacji, eliminacji halucynacji o faktach, gdy dane się zmieniają. Fine-tuning — czas wdrożenia: tygodnie/miesiące. Koszt: wysoki. Najlepiej dla: specyficznego stylu i tonu, własnego żargonu, formatów output, szybkości inferencji (mniejszy model), prywatności (lokalny model). Decyzyjne pytania: Masz unikalny styl komunikacji lub terminologię? Fine-tuning. Dane się często zmieniają? RAG. Potrzebujesz szybko przetestować? Prompt engineering. Chcesz chronić dane przed zewnętrznymi API? Fine-tuning lokalnego modelu. Optymalnie: Stack składa się z fine-tuned małego modelu (Llama, Mistral) + RAG dla aktualnych danych + precyzyjny system prompt.",
  },
  {
    question: "Jakie platformy i narzędzia wspierają fine-tuning?",
    answer: "Platformy fine-tuningu: OpenAI Fine-Tuning API — fine-tuning GPT-3.5-Turbo i GPT-4o-mini. Najprościej, ale dane idą do OpenAI. Koszt: $8/1M tokens training. Produkcja: od kilku godzin. Hugging Face + PEFT — open-source ecosystem. LoRA, QLoRA, pełny fine-tuning lokalnie lub na cloud GPU. Wymaga wiedzy ML. Unsloth — optymalizowany framework dla QLoRA, 2x szybszy trening. Popularny dla lokalnych eksperymentów. Axolotl — konfigurowalne fine-tuning z YAML config. Dobry dla teams bez głębokiej wiedzy ML. Torchtune — oficjalny framework PyTorch dla fine-tuning. Modal, RunPod, Lambda Labs — tanie GPU w chmurze dla fine-tuning ($1-3/godz. A100). Vertex AI, SageMaker — managed fine-tuning na AWS/GCP. Droższe ale prostsze operacyjnie. Together AI, Replicate — fine-tuning jako usługa. Prosty API. Narzędzia ewaluacji: eleuther-ai/lm-evaluation-harness, OpenAI Evals, Promptfoo. Monitorowanie: W&B, MLflow dla śledzenia loss curves.",
  },
];

const fineTuningMethods = [
  {
    metoda: "Full Fine-Tuning",
    opis: "Wszystkie wagi modelu są aktualizowane. Maksymalna elastyczność i jakość.",
    gpu: "Bardzo wysokie (80GB+ VRAM dla 7B modelu)",
    jakość: "Najwyższa",
    kiedy: "Duże budżety, małe modele, krytyczna aplikacja",
    kolor: "blue",
  },
  {
    metoda: "LoRA",
    opis: "Niska ranga adaptacja — dodaje małe macierze do istniejących wag. 10-100x oszczędność VRAM.",
    gpu: "Niskie (6-16GB dla 7B modelu)",
    jakość: "Wysoka (95% full FT)",
    kiedy: "Standardowy wybór dla produkcyjnych zastosowań",
    kolor: "green",
  },
  {
    metoda: "QLoRA",
    opis: "LoRA z kwantyzacją modelu do 4-bit. Fine-tuning 70B modeli na consumer GPU.",
    gpu: "Bardzo niskie (24GB dla 70B modelu!)",
    jakość: "Dobra (90% full FT)",
    kiedy: "Ograniczony budżet, duże modele, eksploracja",
    kolor: "purple",
  },
  {
    metoda: "OpenAI Fine-Tuning API",
    opis: "Managed service — uploadujesz JSONL, OpenAI trenuje, dostajesz endpoint.",
    gpu: "Brak (managed)",
    jakość: "Wysoka (GPT-3.5 base)",
    kiedy: "Szybkie wdrożenie, akceptowalny vendor lock-in",
    kolor: "orange",
  },
];

const datasetTips = [
  { tip: "Minimum 50-100 przykładów", opis: "Dla OpenAI API, simple tasks. 500+ dla lokalnych modeli." },
  { tip: "Jakość ponad ilość", opis: "100 doskonałych przykładów bije 1000 przeciętnych. Każdy przykład powinien być wzorową odpowiedzią." },
  { tip: "Reprezentatywność", opis: "Pokryj wszystkie typy zapytań jakie dostaniesz w produkcji — w tym edge cases." },
  { tip: "Spójność stylu", opis: "Wszystkie odpowiedzi w jednym tonie, formacie, długości. Niespójność = konfuzja modelu." },
  { tip: "Train/validation split", opis: "90% train, 10% validation. Monitoruj validation loss — wzrost = overfitting." },
  { tip: "Unikaj duplikatów", opis: "Zdeduplikuj na poziomie semantycznym — nie tylko exact match." },
];

export default function BlogFineTuningCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Fine-Tuning LLM — co to jest i jak dostroić model AI? | Fotz.pl"
        description="Fine-Tuning LLM: techniki (LoRA, QLoRA, RLHF), przygotowanie datasetu, porównanie z RAG, platformy (OpenAI, Hugging Face) i kiedy fine-tuning się opłaca."
        canonicalUrl="https://fotz.pl/blog/fine-tuning-llm-co-to-jest-jak-dostroic-model-ai"

        keywords="Fine-Tuning LLM co to jest, Fine-Tuning LLM definicja, czym jest Fine-Tuning LLM, Fine-Tuning LLM przykłady, jak działa Fine-Tuning LLM, Fine-Tuning LLM znaczenie, Fine-Tuning LLM przewodnik"

        canonical="https://fotz.pl/blog/fine-tuning-llm-co-to-jest-jak-dostroic-model-ai"
      />
      <ArticleSchema
        title="Fine-Tuning LLM — co to jest i jak dostroić model AI?"
        description="Fine-tuning LLM: Full FT, LoRA, QLoRA, DPO, przygotowanie datasetu, porównanie z RAG i prompt engineering, platformy i narzędzia dla startupów i enterprise."
        url="https://fotz.pl/blog/fine-tuning-llm-co-to-jest-jak-dostroic-model-ai"
        datePublished="2024-03-07"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Fine-Tuning LLM", url: "https://fotz.pl/blog/fine-tuning-llm-co-to-jest-jak-dostroic-model-ai" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Fine-Tuning LLM", href: "/blog/fine-tuning-llm-co-to-jest-jak-dostroic-model-ai" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              AI / ML Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fine-Tuning LLM
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              GPT-4 jest genialny ogólnie. Fine-tuning robi z niego eksperta
              w Twojej domenie — w Twoim tonie, w Twoim formacie,
              z Twoim żargonem.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Popularna technika", value: "LoRA / QLoRA" },
                { label: "Min. przykładów", value: "50-100" },
                { label: "Platforma API", value: "OpenAI FT" },
                { label: "OSS framework", value: "Unsloth" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-rose-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metody */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Metody fine-tuningu LLM</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od full fine-tuning po managed API — wybierz metodę
              dopasowaną do Twojego budżetu i wymagań.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {fineTuningMethods.map((m) => (
              <FadeInView key={m.metoda}>
                <div className={`rounded-xl border-2 p-5 ${
                  m.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  m.kolor === "green" ? "border-green-200 bg-green-50" :
                  m.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-2 font-mono ${
                    m.kolor === "blue" ? "text-blue-800" :
                    m.kolor === "green" ? "text-green-800" :
                    m.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>{m.metoda}</h3>
                  <p className="text-gray-700 text-sm mb-3">{m.opis}</p>
                  <div className="grid md:grid-cols-3 gap-2 text-sm">
                    <div><span className="font-semibold text-gray-600">GPU: </span><span className="text-gray-600">{m.gpu}</span></div>
                    <div><span className="font-semibold text-gray-600">Jakość: </span><span className="text-gray-600">{m.jakość}</span></div>
                    <div><span className="font-semibold text-gray-600">Kiedy: </span><span className="text-gray-600">{m.kiedy}</span></div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Dataset tips */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 zasad dobrego datasetu fine-tuningu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Jakość danych treningowych determinuje jakość fine-tuned modelu.
              Garbage in, garbage out.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {datasetTips.map((t, i) => (
              <FadeInView key={t.tip}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-3">
                    <div className="bg-rose-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">{t.tip}</h3>
                      <p className="text-gray-600 text-sm">{t.opis}</p>
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

      <RelatedArticles currentArticleId="fine-tuning-llm-co-to-jest-jak-dostroic-model-ai" />
      <ContactSection />
    </Layout>
  );
}
