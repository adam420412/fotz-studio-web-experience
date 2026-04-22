import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest LLM Tool Calling (Function Calling) i jak działa?",
    answer: "Tool Calling (Function Calling): LLM może wywoływać narzędzia (funkcje). Model nie wykonuje kodu — zwraca intent wywołania. Twój kod wykonuje funkcję. Wynik wraca do LLM. LLM formułuje odpowiedź na bazie wyniku. Flow: 1. Wyślij prompt + lista dostępnych tools. 2. LLM decyduje które tool wywołać (lub nie). 3. LLM zwraca: tool_calls z argumentami. 4. Twój kod wykonuje funkcję. 5. Wynik wraca do LLM jako tool message. 6. LLM finalnie odpowiada użytkownikowi. OpenAI Tool Calling: tools: [{type: 'function', function: {name: 'get_weather', description: 'Get weather for a city', parameters: {type: 'object', properties: {city: {type: 'string', description: 'City name'}}, required: ['city']}}}]. model: 'gpt-4o'. Odpowiedź: message.tool_calls[0].function.name === 'get_weather'. Anthropic Tool Use: tools: [{name: 'get_weather', description: '...', input_schema: {type: 'object', properties: {...}}}]. Gemini: functionDeclarations. Parallel tool calling: wiele tool calls na raz. Szybsze niż sekwencyjne. LLM wywołuje kilka tools równolegle. Wszystkie wyniki wracają razem. Tool choice: toolChoice: 'auto' — LLM decyduje. toolChoice: 'required' — musi wywołać tool. toolChoice: {type: 'tool', name: 'specific_tool'} — wymuszony tool.",
  },
  {
    question: "Vercel AI SDK — tool calling w Next.js i React?",
    answer: "Vercel AI SDK: npm install ai @ai-sdk/openai. generateText z tools: import {generateText, tool} from 'ai'. import {openai} from '@ai-sdk/openai'. import {z} from 'zod'. const {text, toolResults} = await generateText({model: openai('gpt-4o'), prompt: 'What is the weather in Warsaw?', tools: {getWeather: tool({description: 'Get current weather', parameters: z.object({city: z.string()}), execute: async ({city}) => {return await fetchWeather(city)}})}}). Zod dla parameter validation. execute — twój kod. Stream z tools: streamText. toTextStreamResponse() dla klienta. useChat hook: obsługuje tool calls automatycznie. onToolCall callback. ToolInvocation w messages. Generative UI (AI SDK 3): streamUI. React components zamiast tekstu. return jsx{WeatherComponent city={city} /}. LLM zwraca komponenty. maxSteps dla agentów: maxSteps: 10 — wielokrokowe wywołania. LLM -> tool -> LLM -> tool -> ... Agentic loops. stepFinishReason: 'tool-calls' vs 'stop'. Tools w Route Handler: api/chat/route.ts. POST handler. AI SDK server-side. Stream do klienta. Tools bez execute (client-side tools): brak execute w tool definition. LLM zwraca tool call. Klient obsługuje (np. nawigacja, UI update). LLM SDK types: CoreTool, ToolCallResult, StepResult. TypeScript dla wszystkich tool args i results.",
  },
  {
    question: "AI Agenci z Tool Calling — agentic loops i multi-agent?",
    answer: "Agentic Loop: LLM + tools w pętli. Autonomiczne wykonanie zadań. Plan -> Execute -> Observe -> Repeat. Przykład agenta: const result = await generateText({model, system: 'You are a research assistant...', prompt: userQuery, tools: {search: tool({...}), scrapeUrl: tool({...}), summarize: tool({...})}, maxSteps: 10}). LLM planuje. Wywołuje search(). Analizuje wyniki. Scrape URL po potrzeby. Summarize. Odpowiada. ReAct pattern (Reasoning + Acting): LLM: THOUGHT: I need to find... ACTION: search(query). OBSERVATION: results. THOUGHT: I found... FINAL: answer. Explicit chain of thought. Anthropic Claude z tools: claude-3-5-sonnet. anthropic.messages.create z tools. tool_use content block w odpowiedzi. tool_result message z twoim wynikiem. Wielokrotne tury. Multi-agent systems: Orchestrator agent + Sub-agents. Handoff między agentami. OpenAI Swarm (beta). LangGraph (Python, JS). Microsoft AutoGen. Tool categories: Data tools: search, DB query, calculator. Action tools: email send, calendar create, API call. Code tools: code execute (sandbox), file read. Perception tools: web scrape, image analyze. Memory tools: vector store, document retrieval. Safety w tool calling: sanitize inputs. Nie pozwól LLM na arbitrary code exec. Confirmation steps dla destructive actions. Human in the loop dla ważnych akcji. Rate limiting tool calls. Token limits: każdy tool call = tokeny. Parallel = oszczędność tokenów. Mądry dobór tools per task.",
  },
  {
    question: "Structured Output — JSON Schema i Zod z LLM?",
    answer: "Structured Output (OpenAI): response_format: {type: 'json_schema', json_schema: {name: 'product', schema: {...}, strict: true}}. LLM zwraca valid JSON. 100% zgodność ze schematem. Lepsze niż prompt engineering. Vercel AI SDK structured output: const {object} = await generateObject({model, schema: z.object({name: z.string(), price: z.number(), categories: z.array(z.string())}), prompt: 'Extract product info from: Nike Air Max 90...'}). Zod schema -> JSON Schema konwersja. Type-safe result. streamObject: strumieniowanie obiektów. Partial objects podczas streaming. useObject hook: client-side streaming object. Data extraction: scrape -> structured output. Form filling (auto). Classification: z.enum(['positive', 'negative', 'neutral']). document.sentiment. Batch processing: Promise.all na wiele dokumentów. Rate limit awareness. Content generation: schema dla blog post. {title, intro, sections: [{heading, content}], conclusion}. AI SDK Output format: generateText — tekst. generateObject — structured JSON. streamText — streaming tekst. streamObject — streaming JSON. streamUI — React components. Zod z OpenAI bez AI SDK: zodResponseFormat z openai package. const parser = zodResponseFormat(schema, 'name'). response_format: parser. const data = JSON.parse(completion.choices[0].message.content). TypeScript z LLM: pełne typowanie output. Nie any. Refine z Zod — walidacja po parse. Error handling: parse error retry. LLM hallucination rescue.",
  },
  {
    question: "Retrieval-Augmented Generation (RAG) z TypeScript?",
    answer: "RAG: wzbogacanie LLM o własne dane. Embed dokumenty -> vector DB. Query -> embedding -> similar docs -> LLM z kontekstem. Chunking: podziel dokumenty na chunks. Size: 512-1024 tokenów. Overlap: 10-20% między chunks. RecursiveCharacterTextSplitter. Embedding: OpenAI text-embedding-3-small. Cohere embed-multilingual. Voyage (Anthropic recommended). Batch embedding dla efficiency. Vector Databases: pgvector (Postgres extension). Pinecone (managed, serverless). Qdrant (open source). Weaviate. Chroma (local development). Upstash Vector. pgvector z Drizzle: CREATE EXTENSION vector. column: vector(1536) — OpenAI dim. drizzle-orm/pg-core. cosineDistance() function. SELECT ... ORDER BY embedding. Retrieval: const embedding = await embed(query). const similar = await db.select().where(cosineDistance(embedding, queryEmbedding).lt(0.3)).limit(5). LLM call z retrieved context: const context = similar.map(d => d.content).join('nn'). const prompt = 'Based on context: ' + context + 'nnAnswer: ' + query. Reranking: Cohere rerank API. Lepszy wybór z retrieved. Baza rankingowa po retrieval. Hybrid search: BM25 (keyword) + vector. Full-text search + semantic. Reciprocal Rank Fusion. LlamaIndex.TS: npm install llamaindex. VectorStoreIndex.fromDocuments(). queryEngine.query(). Wbudowane chunking, embedding, retrieval. Vercel AI SDK RAG: embed() function. cosineSimilarity() helper. createDataStreamResponse() dla streaming.",
  },
];

const aiTools = [
  { narzedzie: "Vercel AI SDK", typ: "Full-stack AI framework", toolCalling: "Tak (Zod schema)", kiedy: "Next.js AI apps, streaming, generative UI" },
  { narzedzie: "OpenAI SDK", typ: "Direct API client", toolCalling: "Tak (JSON Schema)", kiedy: "Direct OpenAI, custom setup" },
  { narzedzie: "Anthropic SDK", typ: "Direct API client", toolCalling: "Tak (tool_use)", kiedy: "Claude models, tool_use pattern" },
  { narzedzie: "LangChain.js", typ: "LLM framework", toolCalling: "Tak (Tools API)", kiedy: "Complex agents, chains, memory" },
  { narzedzie: "LlamaIndex.TS", typ: "RAG framework", toolCalling: "Tak (QueryEngine)", kiedy: "RAG, document indexing, data agents" },
  { narzedzie: "Mastra", typ: "AI agent framework", toolCalling: "Tak (native tools)", kiedy: "TypeScript-first AI agents, workflows" },
];

export default function BlogLlmToolCallingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="LLM Tool Calling, AI Agenci i RAG | Fotz Studio"
        description="Tool Calling (Function Calling) — OpenAI, Anthropic, Vercel AI SDK (tool, generateObject, streamUI), AI agenci (agentic loop, ReAct), Structured Output…"
        canonical="https://fotz.pl/blog/llm-tool-calling-ai-agenci-rag-vercel-ai-sdk-typescript-2024"

        keywords="LLM Tool Calling, AI Agenci i RAG co to jest, LLM Tool Calling, AI Agenci i RAG jak działa, LLM Tool Calling, AI Agenci i RAG tutorial, LLM Tool Calling, AI Agenci i RAG przykład, czym jest LLM Tool Calling, AI Agenci i RAG, LLM Tool Calling, AI Agenci i RAG dokumentacja, LLM Tool Calling, AI Agenci i RAG przewodnik"
      />
      <ArticleSchema
        title="LLM Tool Calling, AI Agenci i RAG — Vercel AI SDK, OpenAI Functions TypeScript 2024?"
        description="6 narzędzi AI (Vercel AI SDK/OpenAI/Anthropic/LangChain.js/LlamaIndex/Mastra) — tool calling, agentic loops, structured output (Zod), RAG z pgvector i generative UI."
        url="https://fotz.pl/blog/llm-tool-calling-ai-agenci-rag-vercel-ai-sdk-typescript-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "LLM Tool Calling i AI Agenci", url: "https://fotz.pl/blog/llm-tool-calling-ai-agenci-rag-vercel-ai-sdk-typescript-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "LLM Tool Calling i AI Agenci", url: "/blog/llm-tool-calling-ai-agenci-rag-vercel-ai-sdk-typescript-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              AI / LLM / TypeScript
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              LLM Tool Calling i AI Agenci
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Tool Calling (Function Calling), Vercel AI SDK (generateObject, streamUI),
              agentic loops, Structured Output (Zod) i RAG z pgvector.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "LLM tools", value: "Tool Calling" },
                { label: "Next.js AI", value: "AI SDK" },
                { label: "Typed output", value: "generateObject" },
                { label: "Own data", value: "RAG" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi AI dla TypeScript — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Vercel AI SDK, OpenAI SDK, Anthropic SDK, LangChain.js, LlamaIndex i Mastra —
              typ, tool calling i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Tool Calling</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {aiTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.toolCalling}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.kiedy}</td>
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

      <RelatedArticles currentArticleId="llm-tool-calling-ai-agenci-rag-vercel-ai-sdk-typescript-2024" />
      <ContactSection />
    </Layout>
  );
}
