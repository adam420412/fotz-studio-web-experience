import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "AI Agents — co to jest i jak działają autonomiczne agenty AI?",
    answer: "AI Agent: system AI zdolny do podejmowania działań. Cel-oriented. Nie tylko generowanie tekstu. Plan + Execute + Observe loop. ReAct pattern: Reasoning + Acting. Agent widzi: Tools (funkcje do wywołania). Memory (historia). Context (zadanie). Cycle: Think (co zrobić) -> Act (wywołaj tool) -> Observe (wynik) -> Think. Typy agentów: Single Agent: jeden LLM + tools. Proste zadania. Multi-Agent: wiele agentów współpracuje. Złożone zadania. Supervisor agent: deleguje do specjalistów. Agentic RAG: retrieval + generation + actions. Narzędzia (Tools): funkcje które agent może wywołać. search_web(query). read_file(path). write_code(spec). send_email(to, body). API calls. Tool definition: name, description, parameters (JSON Schema). LLM decyduje kiedy wywołać. Tool calling (Function Calling): OpenAI, Anthropic, Gemini. Model zwraca tool_call. Aplikacja wywołuje funkcję. Wynik wraca do modelu. Kontynuuje. Przykład: zapytanie: 'Jaka jest pogoda w Warszawie?'. Agent: wywołuje get_weather('Warsaw'). Wynik: {temp: 15, condition: 'cloudy'}. Odpowiedź: 'W Warszawie jest 15 stopni i pochmurno'. Bez agenta: nie wiedziałby (brak internetu). Memory: Short-term: context window. Long-term: vector database, Redis. Episodic: historia interakcji. Semantic: wiedza domenowa.",
  },
  {
    question: "Model Context Protocol (MCP) — standard dla AI narzędzi?",
    answer: "MCP: Anthropic (2024-11). Standard protokół. LLM komunikuje się z zewnętrznymi systemami. Jak USB dla AI — plug-and-play narzędzia. Problem który rozwiązuje: każda AI aplikacja implementuje własne narzędzia. Brak standaryzacji. Trudna wymienność. MCP = universal interface. Architektura: MCP Host (Claude Desktop, Cursor). MCP Client (wbudowany w host). MCP Server (zewnętrzny serwis). Serwer oferuje: Tools (wywołania). Resources (pliki, dane). Prompts (szablony). MCP Server przykład (TypeScript): import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js'. const server = new McpServer({name: 'weather', version: '1.0'}). server.tool('get_weather', {city: z.string()}, async ({city}) => { const data = await fetchWeather(city). return {content: [{type: 'text', text: JSON.stringify(data)}]} }). Oficjalne MCP Servers: Filesystem, GitHub, Postgres, Slack, Google Drive, Brave Search, Fetch, Memory. Używanie w Claude Desktop: ~/Library/Application Support/Claude/claude_desktop_config.json. mcpServers: {filesystem: {command: 'npx', args: ['-y', '@modelcontextprotocol/server-filesystem', '/path']}}. Claude automatycznie używa. MCP vs Function Calling: Function Calling — aplikacja-specific. MCP — cross-application standard. Claude Desktop, Cursor, Windsurf — wszystkie używają MCP. Open standard: open-source spec. Społeczność buduje serwery. Marketplace: mcp.so.",
  },
  {
    question: "Vercel AI SDK — budowanie AI aplikacji w Next.js?",
    answer: "Vercel AI SDK: open-source. React hooks + streaming. Multi-provider. Instalacja: npm install ai @ai-sdk/openai. Podstawy: import {generateText, streamText} from 'ai'. import {openai} from '@ai-sdk/openai'. Generowanie: const {text} = await generateText({model: openai('gpt-4o'), prompt: 'Wyjaśnij TypeScript'}). Stream: const result = await streamText({model: openai('gpt-4o'), prompt: 'Napisz opowiadanie'}). for await (const chunk of result.textStream) { process.stdout.write(chunk) }. Chat w Next.js: import {useChat} from 'ai/react'. export default function Chat() { const {messages, input, handleInputChange, handleSubmit} = useChat(). return form onSubmit={handleSubmit} input value={input} onChange={handleInputChange}. }. API route: import {streamText} from 'ai'. export async function POST(req: Request) { const {messages} = await req.json(). const result = await streamText({model: openai('gpt-4o'), messages}). return result.toDataStreamResponse() }. Tool calling z AI SDK: const {text} = await generateText({model: openai('gpt-4o'), tools: {weather: {description: 'Get weather', parameters: z.object({city: z.string()}), execute: async ({city}) => getWeather(city)}}, prompt: 'Pogoda w Warszawie?'}). Providers: @ai-sdk/anthropic. @ai-sdk/google. @ai-sdk/mistral. @ai-sdk/openai. Unified API. Structured output: generateObject() — JSON Schema output. Zod schema. generateText({schema: z.object({name: z.string()})}). useObject hook.",
  },
  {
    question: "LangGraph i LangChain — orkiestracja agentów AI?",
    answer: "LangChain: framework dla aplikacji LLM. Python i JavaScript. Chains, Agents, RAG. Wiele abstrakcji. Krytyka: zbyt duży, nadmiernie abstrakcyjny. LangGraph: Harrison Chase. Graf-based agent orchestration. Nodes = kroki. Edges = przepływ. State machine dla agentów. Bardziej kontrolowalny. Instalacja: pip install langgraph (Python). npm install @langchain/langgraph (JS). Graf agenta: import {StateGraph, END} from '@langchain/langgraph'. const graph = new StateGraph({channels: {messages: {value: (x, y) => x.concat(y)}, next: null}}). graph.addNode('agent', agentNode). graph.addNode('tools', toolsNode). graph.addEdge('agent', 'tools'). graph.addConditionalEdges('tools', shouldContinue, {continue: 'agent', end: END}). Multi-agent pattern: Supervisor + Specialists. Supervisor router: do który agenta. Code Agent: pisze kod. Research Agent: szuka informacji. Writer Agent: tworzy treść. Human-in-the-loop: graph.addInterrupt() — pauza dla człowieka. Zatwierdzenie akcji. Bezpieczniejszy agent. Memory w LangGraph: MemorySaver — in-memory. PostgresSaver — trwała pamięć. Persist conversation state. Streaming: graph.stream() — każdy krok jako event. Wizualizacja kroków. LangSmith: observability dla LangChain. Traces. Evals. Datasets. Prod monitoring. Alternatywy: CrewAI, AutoGen, LlamaIndex, Haystack.",
  },
  {
    question: "RAG — Retrieval Augmented Generation i vector databases 2024?",
    answer: "RAG: uzupełnij LLM o własne dane. Nie fine-tuning. Nie hallucination. Przeszukuj dokumenty -> podaj kontekst do LLM. Architektura RAG: Document Ingestion: chunking, embedding, store w vector DB. Query Processing: embed query, search vector DB. Generation: LLM + retrieved context -> odpowiedź. Chunking: RecursiveCharacterTextSplitter — po paragrafach, zdaniach. Chunk size: 512-1024 tokens. Overlap: 50-100 tokens dla kontekstu. Embeddings: OpenAI text-embedding-3-small (szybki, tani). text-embedding-3-large (dokładniejszy). Lokalne: nomic-embed-text, mxbai-embed. Sentence Transformers (Python). Vector Databases: Pinecone — managed, serverless. Qdrant — open-source, Rust. Weaviate — graphQL API, multi-modal. Chroma — local dev, Python. pgvector — PostgreSQL extension. Supabase pgvector — easy. Turso + sqlite-vec — SQLite. Przykład z AI SDK i pgvector: embed document chunks. store z embedding kolumną. embed query. SELECT cosine_similarity. Retrieve top 5 chunks. LLM z kontekstem. Advanced RAG: HyDE: query -> hypothetical document -> embed. Reranking: cross-encoder po retrieval. Multi-query: kilka wariacji pytania. Parent-child chunks: mały chunk find, duży chunk context. Agentic RAG: agent decyduje kiedy szukać. Iterative retrieval. Self-correcting. Evaluation: RAGAS — faithfulness, relevancy, context recall. Trulens — trust metrics.",
  },
];

const aiAgentTools = [
  { narzedzie: "Vercel AI SDK", typ: "Framework", opis: "Streaming, hooks React, multi-provider, tool calling" },
  { narzedzie: "Model Context Protocol", typ: "Standard", opis: "Universal interface LLM-narzędzia, plug-and-play" },
  { narzedzie: "LangGraph", typ: "Orkiestracja", opis: "Graf-based agents, multi-agent, human-in-the-loop" },
  { narzedzie: "OpenAI Assistants API", typ: "Managed", opis: "Thread, Run, Files, Code Interpreter wbudowany" },
  { narzedzie: "RAG + pgvector", typ: "Dane", opis: "Retrieval Augmented Generation z własną bazą wiedzy" },
  { narzedzie: "LangSmith / Helicone", typ: "Observability", opis: "Traces, evals, costs monitoring dla LLM apps" },
];

export default function BlogAiAgentsMcpCoTo() {
  return (
    <Layout>
      <SEOHead
        title="AI Agents, MCP, Vercel AI SDK i LangGraph | Fotz Studio"
        description="AI Agents 2024: Model Context Protocol (MCP) Anthropic, Vercel AI SDK (streaming, tool calling), LangGraph (multi-agent), RAG z pgvector i LangSmith…"
        canonicalUrl="https://fotz.pl/blog/ai-agents-mcp-vercel-ai-sdk-langgraph-rag-budowanie-2024"

        keywords="AI Agents, MCP, Vercel AI SDK i LangGraph co to jest, AI Agents, MCP, Vercel AI SDK i LangGraph jak działa, AI Agents, MCP, Vercel AI SDK i LangGraph tutorial, AI Agents, MCP, Vercel AI SDK i LangGraph przykład, czym jest AI Agents, MCP, Vercel AI SDK i LangGraph, AI Agents, MCP, Vercel AI SDK i LangGraph dokumentacja, AI Agents, MCP, Vercel AI SDK i LangGraph przewodnik"

        canonical="https://fotz.pl/blog/ai-agents-mcp-vercel-ai-sdk-langgraph-rag-budowanie-2024"
      />
      <ArticleSchema
        title="AI Agents, MCP, Vercel AI SDK i LangGraph — budowanie agentów AI 2024?"
        description="6 narzędzi do budowania agentów AI (MCP/AI SDK/LangGraph/RAG/Assistants API/observability) — ReAct pattern, tool calling, multi-agent i RAG z vector databases."
        url="https://fotz.pl/blog/ai-agents-mcp-vercel-ai-sdk-langgraph-rag-budowanie-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "AI Agents i MCP 2024", url: "https://fotz.pl/blog/ai-agents-mcp-vercel-ai-sdk-langgraph-rag-budowanie-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "AI Agents i MCP 2024", url: "/blog/ai-agents-mcp-vercel-ai-sdk-langgraph-rag-budowanie-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              AI / Agents / MCP / LLM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Agents i MCP 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Model Context Protocol, Vercel AI SDK (streaming),
              LangGraph (multi-agent) i RAG z pgvector.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Standard", value: "MCP" },
                { label: "Framework", value: "AI SDK" },
                { label: "Orchestration", value: "LangGraph" },
                { label: "Dane", value: "RAG" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-purple-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi do budowania agentów AI</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              MCP, Vercel AI SDK, LangGraph, Assistants API, RAG i observability —
              typ i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {aiAgentTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.opis}</td>
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

      <RelatedArticles currentArticleId="ai-agents-mcp-vercel-ai-sdk-langgraph-rag-budowanie-2024" />
      <ContactSection />
    </Layout>
  );
}
