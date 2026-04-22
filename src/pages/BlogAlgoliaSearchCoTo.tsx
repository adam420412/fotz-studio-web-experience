import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Algolia i dlaczego jest szybsza od tradycyjnego full-text search?",
    answer: "Algolia: hosted search-as-a-service (2012). API-first. Typo-tolerant. Instant (1-50ms). Dlaczego szybsza: inverted index w RAM (nie disk). Distributed infrastructure. Prefix matching (nie full-text scan). Faceting jako pierwsza klasa. Typo tolerance: edit distance algorytm. 1 typo dla krótkich słów, 2 dla długich. Phonetic similarity. Split words. Kluczowe koncepty: Index: kolekcja recordów (jak tabela). Record: obiekt JSON {id, title, description, price}. Attribute: pole w rekordzie. Hit: znaleziony rekord. Facet: atrybut do filtrowania (kategoria, cena, ocena). InstantSearch.js: gotowe UI komponenty. SearchBox, Hits, Pagination, RefinementList. React InstantSearch: liteClient(algolia, {appId, apiKey}). InstantSearch client={client} indexName='products'. SearchBox, Hits — wrapper React. useSearchBox, useHits — hooks. Configure: attributesToRetrieve, hitsPerPage. Relevance: searchableAttributes — które pola przeszukiwać. customRanking: desc('popularity'). ranking: typo, geo, words, filters, proximity, attribute, exact, custom. Faceting: attributesForFaceting. facetFilters: [['brand:Apple', 'brand:Samsung']]. numericFilters: 'price>=100'. Geo search: aroundLatLng, aroundRadius. Record upload: chunked (max 1000/req). algoliasearch.initIndex('products').saveObjects(records). Cennik: darmowy plan (10K records, 10K req/month). Potem drogie przy scale.",
  },
  {
    question: "Typesense — open-source alternatywa dla Algolia?",
    answer: "Typesense: open-source search engine (2019, Jason Bosco). Rust. Self-hostable lub Typesense Cloud. Podobne do Algolia API. Szybszy index — writes. Tańszy w dużej skali. Konfiguracja: new Typesense.Client({nodes: [{host, port, protocol}], apiKey}). Schema: client.collections().create({name: 'products', fields: [{name: 'title', type: 'string'}, {name: 'price', type: 'float'}, {name: 'category', type: 'string', facet: true}], default_sorting_field: 'price'}). Document ops: client.collections('products').documents().create(doc). documents().import(docs, {action: 'upsert'}). Search: client.collections('products').documents().search({q: 'laptop', query_by: 'title,description', filter_by: 'price:=[100..2000]', facet_by: 'category', sort_by: 'price:asc'}). InstantSearch adapter: typesense-instantsearch-adapter. Kompatybilny z Algolia InstantSearch UI. Typesense vs Algolia: Typesense — open-source, cheaper at scale, self-host. Algolia — battle-tested, więcej features, superior geo search, droższy. Typesense Cloud — managed, affordable, SLA. Typesense dla Next.js: server-side search w getServerSideProps lub Route Handler. Spellchecking: num_typos: 2. typo_tokens_threshold: 1. Multi-search: client.multiSearch.perform({searches: [...]}). Geosearch: geopoint field type. filter_by: 'location:(48.853,2.344,5km)'.",
  },
  {
    question: "Meilisearch — lokalny i open-source search engine?",
    answer: "Meilisearch: open-source search engine (2019, Rust). Developer-friendly. Instant search (typo-tolerant). Self-host lub Meilisearch Cloud. Prostszy setup niż Typesense. Konfiguracja: new MeiliSearch({host: 'http://localhost:7700', apiKey}). Index: client.index('movies'). Documents: index.addDocuments([{id: 1, title: 'Inception', genre: ['sci-fi', 'thriller']}]). Search: index.search('inception', {limit: 10, filter: 'genre = sci-fi', facets: ['genre'], attributesToHighlight: ['title', 'overview']}). Filtry: filter: 'price >= 100 AND category = Electronics'. Facets: index.updateFaceting({sortFacetValuesBy: {'*': 'count'}}). Settings: index.updateSettings({searchableAttributes: ['title', 'description'], displayedAttributes: ['title', 'price', 'id'], filterableAttributes: ['category', 'price'], sortableAttributes: ['price', 'createdAt'], rankingRules: ['words', 'typo', 'proximity', 'attribute', 'sort', 'exactness']}). Typo tolerance: words.length < 5 -> 0 typos. 5-8 -> 1 typo. 9+ -> 2 typos. Geosearch: _geo field {lat, lng}. geoPoint filter. Meilisearch vs Typesense vs Algolia: Meilisearch — easiest setup, great DX, Rust performance. Typesense — more features (multi-search, vector). Algolia — production battle-tested, managed SLA. Vector search: Meilisearch 1.3+ embeddings. AI-powered semantic search. embedders configuration (OpenAI, HuggingFace, REST).",
  },
  {
    question: "Elasticsearch vs hosted search — kiedy własny klaster?",
    answer: "Elasticsearch: Apache Lucene-based. Najpotężniejszy. Produkty Elastic: Kibana (visualization), Logstash (data pipeline), Beats (data shippers). Full-text search: inverted index. DSL queries: match, term, range, bool, nested. Aggregations: terms, date_histogram, avg, sum. BM25 scoring. Kiedy Elasticsearch: logi i monitoring (ELK Stack). Kompleksowe analytics. Duże wolumeny (biliony dokumentów). Custom scoring. Geospatial. Wady: complex operations. Expensive managed (Elastic Cloud). Resource-hungry. OpenSearch: fork od Elasticsearch 7.10 (AWS, 2021). Open-source (Apache 2.0). Kompatybilny z ES API. AWS OpenSearch Service. Elastic Cloud: managed Elasticsearch. 8.x z vector search, ELSER (semantic). Elastic Agent. Elasticsearch Serverless (2024). Porównanie filozofii: Algolia/Typesense/Meilisearch — search-focused. Prosty ops model. Gotowe typo-tolerance, faceting. Elasticsearch — analytics + search. Złożony ale potężny. Własne skalowanie. pg_search (PostgreSQL): pgvector + ParadeDB. Full-text search w PostgreSQL. Bez zewnętrznej usługi. ts_vector, ts_query natywne. SQLite FTS5: dla małych projektów. Kiedy co: Algolia — managed, fast time-to-value, płatne. Typesense — self-host lub Cloud, SQL-like filters. Meilisearch — easiest DX, self-host. Elasticsearch — enterprise analytics, kompleksowe. PostgreSQL FTS — już masz PG, małe projekty.",
  },
  {
    question: "AI-powered search — vector search, semantic search i RAG w 2024?",
    answer: "Tradycyjny search: keyword matching. 'laptop' != 'notebook'. Semantic search: zrozumienie znaczenia zapytania. Embeddings: dense vector reprezentacja tekstu. Podobieństwo = cosine similarity. Vector databases: Pinecone, Weaviate, Qdrant, Chroma. PostgreSQL pgvector: SELECT * FROM documents ORDER BY embedding vector cosine ops query_embedding LIMIT 5. Hybrid search: keyword (BM25) + vector similarity. Fuzzy + semantic. Reciprocal Rank Fusion (RRF) — merge rankingów. Typesense vector: embedding field. vector search + keyword. Meilisearch AI search: OpenAI, HuggingFace embedder. Semantic re-ranking. Algolia NeuralSearch: Algolia AI embeddings. Hybrid search built-in. RAG (Retrieval-Augmented Generation): 1. User query. 2. Semantic search w dokumentach (vector DB). 3. Retrieved context -> LLM prompt. 4. LLM generuje odpowiedź z kontekstem. LlamaIndex: framework do RAG. Document loaders (PDF, Markdown, web). Node parsers. Vector store integrations. Query engines. LangChain: pełny AI framework. Agents, tools, memory. Vercel AI SDK: useChat, useCompletion. streamText, generateText. ai/react, ai/rsc (RSC streaming). Tool calls. OpenAI Assistants API: file search (vector store built-in). code interpreter. GPT-4 z wyszukiwaniem. Implementacja RAG w Next.js: Route Handler + OpenAI embeddings + pgvector + streamText.",
  },
];

const searchSolutions = [
  { rozwiazanie: "Algolia", model: "SaaS managed", cena: "Darmowy + pay per search", latencja: "1-50ms global", kiedy: "Fast time-to-value, e-commerce" },
  { rozwiazanie: "Typesense", model: "Self-host / Cloud", cena: "Open-source / $0.0001/req", latencja: "1-10ms (lokalne)", kiedy: "Cost-conscious, self-host, SQL-like" },
  { rozwiazanie: "Meilisearch", model: "Self-host / Cloud", cena: "Open-source / Cloud plany", latencja: "5-20ms (lokalne)", kiedy: "Easiest DX, developer-friendly" },
  { rozwiazanie: "Elasticsearch", model: "Self-host / Elastic Cloud", cena: "Open-source (AGPL) / Cloud", latencja: "Zależy od klastra", kiedy: "Enterprise, analytics, ELK" },
  { rozwiazanie: "pgvector (PostgreSQL)", model: "Database extension", cena: "0 (masz Postgres)", latencja: "Zależy od DB", kiedy: "Semantic search, AI RAG, masz PG" },
  { rozwiazanie: "Pinecone", model: "SaaS vector DB", cena: "Darmowy starter + pro", latencja: "1-100ms", kiedy: "AI/ML, RAG, vector similarity" },
];

export default function BlogAlgoliaSearchCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Algolia, Typesense, Meilisearch | Fotz Studio"
        description="Algolia vs Typesense vs Meilisearch vs Elasticsearch — hosted i open-source search engines, InstantSearch, semantic search, vector search i RAG dla Next.js."
        canonical="https://fotz.pl/blog/algolia-typesense-meilisearch-elasticsearch-search-engine-2024"

        keywords="Algolia, Typesense, Meilisearch co to jest, Algolia, Typesense, Meilisearch definicja, czym jest Algolia, Typesense, Meilisearch, Algolia, Typesense, Meilisearch przykłady, jak działa Algolia, Typesense, Meilisearch, Algolia, Typesense, Meilisearch znaczenie, Algolia, Typesense, Meilisearch przewodnik"

        canonical="https://fotz.pl/blog/algolia-typesense-meilisearch-elasticsearch-search-engine-2024"
      />
      <ArticleSchema
        title="Algolia, Typesense, Meilisearch — search engine dla aplikacji web 2024?"
        description="6 rozwiązań search (Algolia/Typesense/Meilisearch/Elasticsearch/pgvector/Pinecone) — full-text search, faceting, typo-tolerance, semantic search i RAG."
        url="https://fotz.pl/blog/algolia-typesense-meilisearch-elasticsearch-search-engine-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Search Engines Web", url: "https://fotz.pl/blog/algolia-typesense-meilisearch-elasticsearch-search-engine-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Search Engines Web", url: "/blog/algolia-typesense-meilisearch-elasticsearch-search-engine-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Search / Backend
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Search Engines dla Aplikacji Web
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Algolia, Typesense, Meilisearch, Elasticsearch, pgvector i Pinecone
              — full-text search, faceting, semantic search i RAG w Next.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Managed SaaS", value: "Algolia" },
                { label: "Open-source", value: "Typesense" },
                { label: "Easy DX", value: "Meilisearch" },
                { label: "AI semantic", value: "pgvector" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 rozwiązań search — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Algolia, Typesense, Meilisearch, Elasticsearch, pgvector i Pinecone —
              model hostingu, cena, latencja i najlepszy case użycia.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozwiązanie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Model</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cena</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Latencja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {searchSolutions.map((s, i) => (
                  <tr key={s.rozwiazanie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{s.rozwiazanie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.model}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.cena}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.latencja}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{s.kiedy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      <RelatedArticles currentArticleId="algolia-typesense-meilisearch-elasticsearch-search-engine-2024" />
      <ContactSection />
    </Layout>
  );
}
