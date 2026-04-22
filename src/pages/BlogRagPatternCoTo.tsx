import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest RAG (Retrieval Augmented Generation)?",
    answer: "RAG (Retrieval Augmented Generation) to architektura AI która wzbogaca LLM (Large Language Model) o dynamiczny dostęp do zewnętrznych, aktualnych danych przed generowaniem odpowiedzi. Bez RAG: LLM ma wiedzę tylko do daty swojego treningu i nie wie nic o Twojej prywatnej dokumentacji, danych klientów czy aktualnych wydarzeniach. Z RAG: zanim LLM odpowie, wyszukuje relevantne dokumenty z Twojej bazy danych (vector database), dostarcza je jako kontekst i generuje odpowiedź na ich podstawie. Efekty: mniej halucynacji (LLM opiera się na prawdziwych dokumentach), aktualność danych (baza jest regularnie aktualizowana), prywatność (Twoje dane nie trafiają do treningu modelu), referencje (możesz wskazać skąd pochodzi odpowiedź).",
  },
  {
    question: "Jak działa pipeline RAG krok po kroku?",
    answer: "Pipeline RAG składa się z dwóch faz. Faza offline (indexing): Chunking — dokumenty są dzielone na fragmenty (chunks) po 200-500 tokenów. Zbyt duże chunks = za dużo irrelentant info. Za małe = brak kontekstu. Embedding — każdy chunk jest zamieniony na wektor przez embedding model (OpenAI text-embedding-3-small, Cohere, BGE). Storing — wektory + oryginalne teksty są zapisane do Vector Database (Pinecone, Qdrant, Weaviate). Faza online (retrieval + generation): Query Embedding — pytanie użytkownika jest zamieniane na wektor tym samym modelem. Retrieval — Vector DB zwraca Top-K (np. 5) najbliższych chunków. Re-ranking (opcjonalne) — cross-encoder re-rankuje pobrane chunks dla lepszej precyzji. Prompt Assembly — query + chunks = prompt dla LLM. Generation — LLM (GPT-4, Claude, Gemini) generuje odpowiedź na bazie dostarczonego kontekstu.",
  },
  {
    question: "Jakie są najczęstsze problemy z RAG i jak je rozwiązać?",
    answer: "Problemy z RAG: Poor retrieval — baza zwraca irrelentant chunks. Fix: lepszy chunking (semantic chunking, parent-child), hybrid search (keyword + semantic), re-ranking (Cohere Rerank, BGE Reranker). Context window overflow — zbyt wiele chunks przekracza context window LLM. Fix: reduce Top-K, kompresja kontekstu, hierarchical retrieval. Chunking errors — chunks są zbyt małe (brak kontekstu) lub zbyt duże (zbyt dużo szumu). Fix: overlap między chunkami, semantic chunking (tną na zdania, nie stałej długości). Lost in the middle — LLM ignoruje środek długiego kontekstu. Fix: ustaw ważne chunks na początku lub końcu promptu. Hallucination mimo kontekstu — LLM miesza wiedzę z treningu z kontekstem. Fix: instrukcja 'odpowiadaj TYLKO na podstawie poniższego kontekstu'.",
  },
  {
    question: "RAG vs. Fine-tuning — kiedy co stosować?",
    answer: "RAG vs. Fine-tuning: Fine-tuning zmienia wagi modelu — model 'uczy się' nowych danych na stałe. RAG dynamicznie wstrzykuje dane do kontekstu — model nie jest modyfikowany. Kiedy RAG: Dane się często zmieniają (dokumentacja, FAQ, baza klientów). Potrzebujesz referencji do źródeł. Dane są prywatne i nie chcesz ich w modelu. Szybszy time-to-market (brak treningu). Kiedy Fine-tuning: Uczysz model nowego stylu, formatu lub tonu odpowiedzi. Model musi znać specjalistyczny żargon. Dane zmieniają się rzadko i chcesz max performance. RAG + Fine-tuning razem: często najlepszy wynik. Fine-tuning uczy modelu domeny i stylu, RAG dostarcza aktualne fakty. Koszt: RAG jest tańszy w uruchomieniu (kilka godzin pracy). Fine-tuning kosztuje od 100 USD do 100,000+ USD dla dużych modeli.",
  },
  {
    question: "Jakie narzędzia i frameworki wspierają RAG?",
    answer: "RAG tooling: Frameworki: LangChain — najpopularniejszy framework do budowania LLM apps i RAG pipeline'ów. Python/JS. Bogaty ekosystem integracji. LlamaIndex — specjalizowany w data ingestion i RAG. Łatwiejszy dla data-heavy use cases. Haystack — enterprise-ready, dobry dla complex search use cases. Embedding Models: OpenAI text-embedding-3-small (1536 dim), Cohere Embed v3, BGE-large (open-source, lokalny), Nomic Embed Text. Vector Databases: Pinecone, Qdrant, Weaviate, Chroma (prototypy). Re-ranking: Cohere Rerank, BGE Reranker, Jina Reranker. LLMs dla generacji: OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini, Llama 3 (open-source). Evaluation: RAGAS (RAG Assessment) do automatycznej ewaluacji jakości RAG pipeline'u. Mierzy faithfulness, answer relevancy, context precision.",
  },
];

const ragComponents = [
  {
    komponent: "Chunking Strategy",
    opis: "Jak dzielić dokumenty na fragmenty do embeddowania",
    opcje: ["Fixed size (200-500 tokenów) — prosty", "Semantic chunking — tnie na granicach semantycznych", "Parent-child — duże chunks dla kontekstu, małe dla retrieval", "Sentence window — chunk = zdanie + N sąsiednich zdań"],
    kolor: "blue",
  },
  {
    komponent: "Embedding Model",
    opis: "Model zamieniający tekst na wektor numeryczny",
    opcje: ["OpenAI text-embedding-3-small — szybki, niedrogi, dobra jakość", "Cohere Embed v3 — lepszy dla multilingual", "BGE-large — open-source, lokalny, competitive quality", "Nomic Embed Text — open-source, bardzo długi context"],
    kolor: "green",
  },
  {
    komponent: "Retrieval Strategy",
    opis: "Jak wyszukiwać relevantne chunks z bazy",
    opcje: ["Dense Retrieval — semantic search (vector similarity)", "Sparse Retrieval — BM25/TF-IDF keyword search", "Hybrid — weighted combination obu", "Multi-query — LLM generuje wiele queries, merge wyników"],
    kolor: "purple",
  },
  {
    komponent: "Re-ranking",
    opis: "Opcjonalne doprecyzowanie kolejności pobranych chunks",
    opcje: ["Cross-encoder re-ranker (Cohere Rerank, BGE)", "LLM-based re-ranking (droższe, wolniejsze)", "Reciprocal Rank Fusion dla multi-source", "Custom scoring z metadanymi (data, autor, kategoria)"],
    kolor: "orange",
  },
  {
    komponent: "Prompt Engineering",
    opis: "Jak konstruować prompt dla LLM z retrieved context",
    opcje: ["System prompt z instrukciami dot. zachowania", "Context placement (ważne chunks na początku/końcu)", "Citation instructions ('cytuj źródło dla każdego faktu')", "Fallback instruction ('jeśli nie wiesz, powiedz że nie wiesz')"],
    kolor: "teal",
  },
];

const ragMetrics = [
  { metryka: "Context Precision", opis: "Jaki % pobranych chunks jest relevantny do pytania", benchmark: "Powyżej 0.8 to dobry wynik. Poniżej 0.5 = bad retrieval" },
  { metryka: "Context Recall", opis: "Czy wszystkie relevantne dokumenty zostały pobrane", benchmark: "Powyżej 0.9 to dobry wynik dla kompletnych odpowiedzi" },
  { metryka: "Faithfulness", opis: "Czy odpowiedź LLM jest oparta wyłącznie na dostarczonym kontekście", benchmark: "Powyżej 0.9. Niższe = LLM 'wymyśla' poza kontekstem" },
  { metryka: "Answer Relevancy", opis: "Czy odpowiedź jest relevantna do pytania użytkownika", benchmark: "Powyżej 0.8. Mierzone przez LLM judge lub human eval" },
];

export default function BlogRagPatternCoTo() {
  return (
    <Layout>
      <SEOHead
        title="RAG — co to jest Retrieval Augmented Generation? | Fotz.pl"
        description="RAG (Retrieval Augmented Generation): jak działa, pipeline, chunking, embedding, retrieval, re-ranking, RAG vs fine-tuning i narzędzia (LangChain, LlamaIndex)."
        canonicalUrl="https://fotz.pl/blog/rag-retrieval-augmented-generation-co-to-jest"

        keywords="RAG co to jest, RAG definicja, czym jest RAG, RAG przykłady, jak działa RAG, RAG znaczenie, RAG przewodnik"

        canonical="https://fotz.pl/blog/rag-retrieval-augmented-generation-co-to-jest"
      />
      <ArticleSchema
        title="RAG — co to jest Retrieval Augmented Generation?"
        description="RAG: architektura, chunking strategies, embedding models, retrieval (dense/sparse/hybrid), re-ranking, prompt engineering, metryki ewaluacji i porównanie z fine-tuningiem."
        url="https://fotz.pl/blog/rag-retrieval-augmented-generation-co-to-jest"
        datePublished="2024-03-03"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "RAG Pattern", url: "https://fotz.pl/blog/rag-retrieval-augmented-generation-co-to-jest" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "RAG Pattern", url: "/blog/rag-retrieval-augmented-generation-co-to-jest" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              AI / LLM Architecture
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              RAG — Retrieval Augmented Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              ChatGPT nie zna Twojej dokumentacji ani danych sprzed tygodnia.
              RAG to architektura która daje LLM dostęp do Twoich danych
              w czasie rzeczywistym — bez fine-tuningu i bez halucynacji.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Główna korzyść", value: "Zero halucynacji" },
                { label: "Alternatywa", value: "Fine-tuning" },
                { label: "Framework", value: "LangChain" },
                { label: "Ewaluacja", value: "RAGAS" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Komponenty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 kluczowych komponentów RAG</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Jakość RAG zależy od każdego z tych kroków.
              Słabe chunking lub zły embedding model sabotuje cały system.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {ragComponents.map((c) => (
              <FadeInView key={c.komponent}>
                <div className={`rounded-xl border-2 p-5 ${
                  c.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  c.kolor === "green" ? "border-green-200 bg-green-50" :
                  c.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  c.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    c.kolor === "blue" ? "text-blue-800" :
                    c.kolor === "green" ? "text-green-800" :
                    c.kolor === "purple" ? "text-purple-800" :
                    c.kolor === "orange" ? "text-orange-800" :
                    "text-teal-800"
                  }`}>{c.komponent}</h3>
                  <p className="text-gray-600 text-sm mb-3">{c.opis}</p>
                  <ul className="space-y-1">
                    {c.opcje.map((o) => (
                      <li key={o} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-emerald-500 flex-shrink-0">→</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Metryki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jak ewaluować jakość RAG (RAGAS)</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              RAGAS to framework do automatycznej ewaluacji pipeline'ów RAG —
              mierzy retrieval i generation osobno.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {ragMetrics.map((m, i) => (
              <FadeInView key={m.metryka}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-emerald-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{m.metryka}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <p className="text-gray-700">{m.opis}</p>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Benchmark</div>
                          <p className="text-gray-700 font-medium">{m.benchmark}</p>
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

      <RelatedArticles currentArticleId="rag-retrieval-augmented-generation-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
