import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Vector Database?",
    answer: "Vector Database (baza wektorowa) to specjalizowana baza danych zoptymalizowana pod przechowywanie i wyszukiwanie wysokowymiarowych wektorów — numerycznych reprezentacji danych (tekstu, obrazów, dźwięku, kodu). W erze AI/LLM modele language models zamieniają tekst na wektory (embeddings): każde słowo, zdanie lub dokument jest reprezentowany jako wektor liczb (np. 1536-wymiarowy vector dla OpenAI ada-002). Vector database pozwala na semantyczne wyszukiwanie — zamiast dopasowywania słów kluczowych, szuka koncepcyjnie podobnych treści. Pytasz 'jak naprawić błąd z logowaniem?' i dostajesz dokumentację o autentykacji — nie dlatego że użyłeś tych samych słów, ale bo semantycznie pasuje. Popularne zastosowania: RAG (Retrieval Augmented Generation), semantic search, recommendation systems, duplicate detection.",
  },
  {
    question: "Jak działają embeddings i similarity search?",
    answer: "Embeddings to gęste reprezentacje wektorowe danych w przestrzeni wielowymiarowej gdzie semantycznie podobne elementy leżą blisko siebie (mierzonym przez odległość kosinusową lub euklidesową). Przykład: wektor słowa 'król' - wektor 'mężczyzna' + wektor 'kobieta' ≈ wektor 'królowa'. To geometry języka. Jak działa: Text/Image → Embedding Model (OpenAI, Cohere, BGE, Sentence Transformers) → Vector (np. [0.23, -0.51, 0.89, ...]). Similarity Search: baza wektorowa otrzymuje query vector i zwraca N najbliższych wektorów (nearest neighbors). Algorytmy: ANN (Approximate Nearest Neighbors) — HNSW (Hierarchical Navigable Small World), IVF (Inverted File Index). Dokładny NN jest za wolny dla milionów wektorów. ANN daje 95%+ precision przy 10-100x szybkości. Bazy wektorowe vs. tradycyjne: PostgreSQL z pgvector robi dokładny NN ale wolno. Pinecone, Weaviate, Qdrant robią ANN szybko w dużej skali.",
  },
  {
    question: "Jakie są najpopularniejsze Vector Databases?",
    answer: "Popularne vector databases: Pinecone — managed, serverless, najprostszy w użyciu. Idealne dla startupów. Koszt: od 0.096 USD/1M vectors/mies. Weaviate — open-source i cloud. Bogaty w funkcje (hybrid search, GraphQL API, multi-modal). Qdrant — open-source, Rust-based, bardzo szybki i wydajny. Świetny do self-hosting. Chroma — open-source, Python-native, popularny w prototypach i lokalnych testach. Milvus — enterprise open-source, skaluje się do miliardów wektorów. pgvector — extension do PostgreSQL. Jeśli masz już Postgres — warto zacząć tu. Faiss — Facebook AI library, nie jest bazą danych ale biblioteką do similarity search. Używany wewnętrznie. Vertex AI Vector Search — Google managed, integruje z Vertex AI ekosystemem. Redis Vector Store — Redis z vector capability. Dobry jeśli masz Redis w stacku. Rekomendacja dla startupu: zacznij od Chroma lokalnie, production: Pinecone lub Qdrant.",
  },
  {
    question: "Czym jest Hybrid Search?",
    answer: "Hybrid Search łączy tradycyjne wyszukiwanie pełnotekstowe (BM25/TF-IDF — keyword matching) z semantic search (vector similarity). Dlaczego hybridowe wyszukiwanie? Semantic search jest świetne dla ogólnych pytań koncepcyjnych ale słabe dla dokładnych dopasowań (nazwy własne, kody, numery produktów). Keyword search jest świetne dla exact match ale nie rozumie semantyki. Przykład: szukasz 'B2B SaaS pricing strategy Q4 2024'. Semantic search znajdzie artykuły o pricing strategy ale może przeoczyć konkretny raport z Q4 2024. Keyword search znajdzie wszystko z 'Q4 2024' ale może pominąć relevantne artykuły bez tych słów. Hybrid: najlepsze z obu. Implementacja: Reciprocal Rank Fusion (RRF) — łączy rankingi z obu podejść. Weighted hybrid — przypisuje wagi do obu scores. Weaviate, Qdrant i Elasticsearch natywnie wspierają hybrid search.",
  },
  {
    question: "Jakie są przypadki użycia Vector Database?",
    answer: "Zastosowania vector databases: RAG (Retrieval Augmented Generation) — najważniejsze zastosowanie. LLM wyszukuje relevantne dokumenty z bazy wektorowej zanim odpowie. Unika halucynacji, dostarcza aktualne dane. Semantic Search — wyszukiwarka dokumentacji, helpdesk, wewnętrzna wiedza firmy która 'rozumie' intencję. Recommendation Systems — 'podobne produkty', 'czytelnicy którzy to lubili, lubili też'. Duplicate Detection — wykrywanie podobnych dokumentów, obrazów, kodu. Useful dla moderacji i zarządzania contentem. Image/Video Search — wyszukiwanie po semantyce obrazu (szukasz 'zachód słońca nad morzem' i dostajesz semantycznie pasujące zdjęcia). Code Search — wyszukiwanie similar code snippets w dużej codebase. Anomaly Detection — wykrywanie outlierów w przestrzeni wektorowej.",
  },
];

const vectorDatabases = [
  { db: "Pinecone", typ: "Managed Cloud", mocne: "Serverless, najprostszy start, dobre SLAs", słabe: "Droższe, vendor lock-in", kiedy: "Produkcja gdy chcesz zero ops overhead", kolor: "blue" },
  { db: "Qdrant", typ: "Open-source / Cloud", mocne: "Rust speed, payload filtering, on-premise", słabe: "Wymaga ops wiedzy przy self-host", kiedy: "Self-host lub cloud przy cost sensitivity", kolor: "green" },
  { db: "Weaviate", typ: "Open-source / Cloud", mocne: "Hybrid search, multi-modal, GraphQL API", słabe: "Bardziej skomplikowany", kiedy: "Potrzebujesz hybrid search lub multi-modal", kolor: "purple" },
  { db: "Chroma", typ: "Open-source (local)", mocne: "Python-native, zero config, prototyping", słabe: "Brak managed cloud, limited scale", kiedy: "Lokalny development, proof of concept", kolor: "orange" },
  { db: "pgvector", typ: "PostgreSQL extension", mocne: "Reuse istniejącego Postgres, SQL familiarność", słabe: "Wolniejszy od dedykowanych VDB przy skali", kiedy: "Masz Postgres, mała/średnia skala, <10M vectors", kolor: "teal" },
];

const ragArchitecture = [
  { krok: "1. Indexing (offline)", opis: "Dokumenty są chunked, embedowane (Embedding Model → vector) i zapisywane do Vector DB z metadanymi.", ikona: "📚" },
  { krok: "2. Query Embedding (online)", opis: "Zapytanie użytkownika jest embedowane tym samym modelem co dokumenty.", ikona: "❓" },
  { krok: "3. Semantic Search", opis: "Vector DB zwraca Top-K najbardziej podobnych dokumentów (nearest neighbors) do query vector.", ikona: "🔍" },
  { krok: "4. Context Assembly", opis: "Pobrane dokumenty są złączane z query w prompt dla LLM: 'Używając poniższego kontekstu odpowiedz na...'", ikona: "🔗" },
  { krok: "5. LLM Generation", opis: "LLM (GPT-4, Claude, Llama) generuje odpowiedź używając dostarczonego kontekstu — bez halucynacji.", ikona: "🤖" },
];

export default function BlogVectorDatabaseCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Vector Database — co to jest i jak wybrać? | Fotz.pl"
        description="Vector Database: embeddings, similarity search, hybrid search, Pinecone, Qdrant, Weaviate, pgvector, architektura RAG i zastosowania w aplikacjach AI."
        canonical="https://fotz.pl/blog/vector-database-co-to-jest-jak-wybrac"

        keywords="Vector Database co to jest, Vector Database jak działa, Vector Database tutorial, Vector Database przykład, czym jest Vector Database, Vector Database dokumentacja, Vector Database przewodnik"

        canonical="https://fotz.pl/blog/vector-database-co-to-jest-jak-wybrac"
      />
      <ArticleSchema
        title="Vector Database — co to jest i jak wybrać?"
        description="Vector Database: embeddings, ANN search, hybrid search, porównanie platform (Pinecone, Qdrant, Weaviate, Chroma, pgvector) i architektura RAG dla aplikacji AI/LLM."
        url="https://fotz.pl/blog/vector-database-co-to-jest-jak-wybrac"
        datePublished="2024-03-02"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Vector Database", url: "https://fotz.pl/blog/vector-database-co-to-jest-jak-wybrac" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Vector Database", url: "/blog/vector-database-co-to-jest-jak-wybrac" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-violet-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              AI / Data Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vector Database
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Każda aplikacja AI potrzebuje miejsca na embeddingi.
              Vector database to fundament semantycznego wyszukiwania,
              RAG i systemów rekomendacji w erze LLM.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Główne zastosowanie", value: "RAG / Search" },
                { label: "Algorytm", value: "HNSW / ANN" },
                { label: "Lider (managed)", value: "Pinecone" },
                { label: "Lider (OSS)", value: "Qdrant / Weaviate" },
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

      {/* RAG */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Architektura RAG z Vector Database</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              RAG (Retrieval Augmented Generation) to najpopularniejszy pattern
              używający Vector DB — pozwala LLM odpowiadać na pytania
              o aktualnych, prywatnych danych bez fine-tuningu.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {ragArchitecture.map((r) => (
              <FadeInView key={r.krok}>
                <div className="bg-violet-50 border border-violet-200 rounded-xl p-5 flex gap-4">
                  <div className="text-3xl flex-shrink-0">{r.ikona}</div>
                  <div>
                    <h3 className="font-bold text-violet-900 mb-1">{r.krok}</h3>
                    <p className="text-gray-700 text-sm">{r.opis}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Porównanie baz */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Porównanie Vector Databases</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wybór bazy wektorowej zależy od skali, wymagań operacyjnych i budżetu.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {vectorDatabases.map((db) => (
              <FadeInView key={db.db}>
                <div className={`rounded-xl border-2 p-5 ${
                  db.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  db.kolor === "green" ? "border-green-200 bg-green-50" :
                  db.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  db.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <div className="flex gap-4">
                    <div>
                      <h3 className={`font-bold text-xl mb-1 ${
                        db.kolor === "blue" ? "text-blue-800" :
                        db.kolor === "green" ? "text-green-800" :
                        db.kolor === "purple" ? "text-purple-800" :
                        db.kolor === "orange" ? "text-orange-800" :
                        "text-teal-800"
                      }`}>{db.db}</h3>
                      <div className="text-xs text-gray-500 mb-3">{db.typ}</div>
                      <div className="grid md:grid-cols-3 gap-2 text-sm">
                        <div><span className="font-semibold text-green-700">Mocne: </span><span className="text-gray-600">{db.mocne}</span></div>
                        <div><span className="font-semibold text-red-600">Słabe: </span><span className="text-gray-600">{db.słabe}</span></div>
                        <div><span className="font-semibold text-gray-700">Kiedy: </span><span className="text-gray-600">{db.kiedy}</span></div>
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

      <RelatedArticles currentArticleId="vector-database-co-to-jest-jak-wybrac" />
      <ContactSection />
    </Layout>
  );
}
