import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Elasticsearch?",
    answer:
      "Elasticsearch to open-source'owy, rozproszony silnik wyszukiwania i analityki oparty na Apache Lucene. Stworzony przez Shay Banona w 2010 roku i open-sourcowany przez Elastic. Elasticsearch przechowuje dane jako dokumenty JSON w indeksach, oferuje pełnotekstowe wyszukiwanie (full-text search), analizy agregacyjne w czasie rzeczywistym, skalowanie horyzontalne przez sharding i wysoką dostępność przez replikację. Często używany jako część stosu ELK (Elasticsearch, Logstash, Kibana).",
  },
  {
    question: "Czym różni się Elasticsearch od tradycyjnej bazy danych?",
    answer:
      "Elasticsearch jest zoptymalizowany pod wyszukiwanie i analizę, nie jako primary data store. Różnice: Full-text search (inverted index, relevance scoring) vs proste LIKE w SQL; Skalowanie horyzontalne (sharding) vs verticale SQL; Niemal real-time (NRT) wyszukiwanie po indeksowaniu (1s delay); Schema-flexible (mapping) vs rigid SQL schema; Agregacje analityczne (facets, histogramy, percentyle) zamiast GROUP BY; Brak pełnych transakcji ACID. Najczęściej używany jako secondary store obok PostgreSQL/MySQL.",
  },
  {
    question: "Jak działa indeksowanie w Elasticsearch?",
    answer:
      "Elasticsearch używa inverted index (odwrócony indeks) — struktura mapuje terminy (słowa) na dokumenty które je zawierają. Podczas indeksowania: text jest tokenizowany (dzielony na słowa), normalizowany (lowercase, stemming, usuwanie stopwords), zapisywany w inverted index. Szukając 'szybka wyszukiwarka' — Elasticsearch szuka dokumentów zawierających oba terminy, oblicza TF-IDF lub BM25 score relevance i zwraca posortowane wyniki. Index = zbiór shardów, shard = instancja Lucene.",
  },
  {
    question: "Co to jest ELK Stack?",
    answer:
      "ELK Stack (teraz Elastic Stack) to zestaw narzędzi do zbierania, przetwarzania, przechowywania i wizualizacji logów: Elasticsearch — przechowywanie i wyszukiwanie dokumentów; Logstash — pipeline do zbierania i transformacji logów (input, filter, output); Kibana — web UI do wizualizacji danych, dashboardy, Discover, alerting; Beats (Filebeat, Metricbeat, Packetbeat) — lekkie agenty zbierające dane. ELK Stack to standard do centralnego zarządzania logami i monitoringu infrastruktury.",
  },
  {
    question: "Jak skaluje się Elasticsearch?",
    answer:
      "Elasticsearch skaluje przez Cluster → Node → Index → Shard. Cluster to zbiór węzłów (node). Index dzielony na Primary Shards (domyślnie 1, wcześniej 5 — niezmienialny po utworzeniu) i Replica Shards (kopie primary, zwiększa dostępność i odczyt). Autoskalowanie: Elastic Cloud oferuje autoscaling. Dla dużych deploymentów: data tiers (hot/warm/cold/frozen) — najczęstszy dostęp na szybkich dyskach (hot), starsze dane na tańszym storage (cold). Index Lifecycle Management (ILM) automatyzuje rollover i migrację.",
  },
];

const elasticConcepts = [
  { pojęcie: "Index", opis: "Kolekcja dokumentów o podobnej strukturze — odpowiednik bazy danych lub tabeli. Podzielony na shardy.", przykład: "logs-2024-01, products, users" },
  { pojęcie: "Document", opis: "Podstawowa jednostka informacji — JSON object przechowywany w indeksie. Ma unikalny _id.", przykład: '{ "_id": "1", "title": "TypeScript guide", "views": 1500 }' },
  { pojęcie: "Shard", opis: "Fragment indeksu — instancja Apache Lucene. Primary shard obsługuje zapisy, replica shard — kopie.", przykład: "index z 3 primary shards + 1 replica = 6 shardów" },
  { pojęcie: "Mapping", opis: "Definicja struktury dokumentów w indeksie — typy pól (text, keyword, integer, date). Jak schema w SQL.", przykład: 'title: text, price: float, tags: keyword, created_at: date' },
  { pojęcie: "Analyzer", opis: "Pipeline przetwarzania tekstu: Character Filter → Tokenizer → Token Filters. Definiuje jak tekst jest indeksowany.", przykład: "standard analyzer: tokenize + lowercase. polish analyzer: stemming PL" },
  { pojęcie: "Query DSL", opis: "JSON-based język zapytań. Match, term, range, bool (must/should/must_not/filter), aggregations.", przykład: '{ "query": { "match": { "title": "elasticsearch" } } }' },
];

const queryExamples = [
  {
    tytuł: "Full-text search z filtrami",
    kod: `POST /products/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "description": "laptop gaming" } }
      ],
      "filter": [
        { "term": { "in_stock": true } },
        { "range": { "price": { "gte": 1000, "lte": 5000 } } }
      ]
    }
  },
  "sort": [{ "_score": "desc" }, { "price": "asc" }],
  "size": 20
}`,
  },
  {
    tytuł: "Agregacje (Analytics)",
    kod: `POST /orders/_search
{
  "size": 0,
  "aggs": {
    "revenue_per_month": {
      "date_histogram": {
        "field": "created_at",
        "calendar_interval": "month"
      },
      "aggs": {
        "total_revenue": {
          "sum": { "field": "amount" }
        },
        "avg_order": {
          "avg": { "field": "amount" }
        }
      }
    }
  }
}`,
  },
  {
    tytuł: "Fuzzy Search i Autocomplete",
    kod: `POST /products/_search
{
  "query": {
    "multi_match": {
      "query": "laptpo gaming",
      "fields": ["title^3", "description"],
      "fuzziness": "AUTO",
      "type": "best_fields"
    }
  }
}

// Autocomplete z edge_ngram tokenizer
POST /products/_search
{
  "query": {
    "match": {
      "title.autocomplete": { "query": "lapt" }
    }
  }
}`,
  },
];

const elkUseCases = [
  { przypadek: "Wyszukiwanie produktów", przykład: "E-commerce: full-text search, faceted navigation (filtry po kategoriach/cenie), autocomplete, relevance tuning.", technologia: "Elasticsearch" },
  { przypadek: "Centralne logowanie", przykład: "Zbieranie logów z mikroserwisów → Filebeat → Logstash → Elasticsearch → Kibana dashboardy.", technologia: "ELK Stack" },
  { przypadek: "APM / Observability", przykład: "Monitorowanie wydajności aplikacji — traces, metrics, logs w jednym miejscu. Elastic APM agent.", technologia: "Elastic Observability" },
  { przypadek: "Security SIEM", przykład: "Wykrywanie zagrożeń, analiza zdarzeń bezpieczeństwa, compliance reporting. Elastic SIEM.", technologia: "Elastic Security" },
  { przypadek: "Geospatial Analytics", przykład: "Analiza danych geolokalizacyjnych — geo_point, geo_shape, Geo Tile Aggregation dla map.", technologia: "Elasticsearch" },
];

export default function BlogElasticsearchCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Elasticsearch | Fotz Studio"
        description="Elasticsearch — definicja, inverted index, pojęcia (index, shard, mapping, analyzer), Query DSL, agregacje i ELK Stack. Kompletny przewodnik po Elasticsearch."
        canonical="https://fotz.pl/blog/elasticsearch-co-to-jest"

        keywords="Elasticsearch co to jest, Elasticsearch definicja, czym jest Elasticsearch, Elasticsearch przykłady, jak działa Elasticsearch, Elasticsearch znaczenie, Elasticsearch przewodnik"

        canonical="https://fotz.pl/blog/elasticsearch-co-to-jest"
      />
      <ArticleSchema
        title="Elasticsearch — co to jest i jak działa? Kompletny przewodnik"
        description="Kompletny przewodnik po Elasticsearch: inverted index, Query DSL, agregacje i ELK Stack."
        url="https://fotz.pl/blog/elasticsearch-co-to-jest"
        datePublished="2024-01-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Elasticsearch", url: "https://fotz.pl/blog/elasticsearch-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Elasticsearch", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Elasticsearch — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Elasticsearch to rozproszony silnik wyszukiwania oparty na Apache Lucene.
            Poznaj inverted index, Query DSL, agregacje i jak budować ELK Stack do logowania.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Elasticsearch?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Elasticsearch</strong> to rozproszony silnik wyszukiwania i analityki oparty na
              Apache Lucene. Przechowuje dane jako dokumenty JSON, oferuje pełnotekstowe wyszukiwanie
              z relevance scoring, agregacje analityczne w czasie rzeczywistym i skalowanie horyzontalne.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Elasticsearch jest używany przez Wikipedia (wyszukiwanie), GitHub (code search),
              LinkedIn (wyszukiwanie profili), Stack Overflow i setki tysięcy firm do wyszukiwania,
              logowania i analityki. Część stosu ELK (Elasticsearch, Logstash, Kibana).
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "2010", opis: "Rok powstania. Stworzony przez Shay Banona jako open-source silnik wyszukiwania oparty na Lucene." },
                { stat: "NRT", opis: "Near Real-Time — dokumenty dostępne do wyszukiwania niemal natychmiast po indeksowaniu (1 sekunda)" },
                { stat: "REST API", opis: "Wszystkie operacje przez REST API z JSON — indeksowanie, wyszukiwanie, administracja klastra" },
              ].map((s, i) => (
                <div key={i} className="bg-yellow-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-yellow-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Pojęcia */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe pojęcia Elasticsearch</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {elasticConcepts.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-yellow-700 font-mono mb-2">{c.pojęcie}</h3>
                  <p className="text-slate-600 text-sm mb-2">{c.opis}</p>
                  <p className="text-xs text-slate-400 font-mono bg-slate-50 rounded p-2">{c.przykład}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Query Examples */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Query DSL — przykłady</h2>
            <div className="space-y-5">
              {queryExamples.map((q, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">{q.tytuł}</h3>
                  <pre className="bg-slate-900 text-green-400 rounded-lg p-4 text-xs font-mono overflow-x-auto">
                    {q.kod}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Use Cases */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Zastosowania Elasticsearch</h2>
            <div className="space-y-3">
              {elkUseCases.map((uc, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4 items-start">
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0">{uc.technologia}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{uc.przypadek}</h3>
                    <p className="text-slate-600 text-sm">{uc.przykład}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Elasticsearch</h2>
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

      <RelatedArticles currentArticleId="elasticsearch-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
