import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Vercel AI SDK i jak integrować OpenAI w Next.js?",
    answer: "Vercel AI SDK: framework-agnostic TypeScript SDK dla AI aplikacji. Provider-agnostic (OpenAI, Anthropic, Google, Mistral). Streaming first. RSC i Edge ready. Core: generateText, streamText, generateObject, streamObject. UI: useChat, useCompletion, useAssistant. RSC: streamUI, createStreamableUI. generateText (server): const {text} = await generateText({model: openai('gpt-4o'), prompt: 'Wyjasnij REST API'}). system: 'Jestes ekspertem TypeScript'. messages: [{role: 'user', content: 'Pytanie'}]. maxTokens: 1000. temperature: 0.7. streamText: const result = streamTextWithModel({...}). return result.toTextStreamResponse(). LLM providers: openai() — npm install @ai-sdk/openai. anthropic() — Claude models. google() — Gemini models. mistral() — Mistral models. openai.embedding() — text embeddings. Route Handler (Next.js): export async function POST(req: Request) {const {messages} = await req.json(). const result = streamText({model: openai('gpt-4o'), messages}). return result.toDataStreamResponse()}. useChat hook (Client): const {messages, input, handleInputChange, handleSubmit} = useChat({api: '/api/chat'}). form onSubmit={handleSubmit}, input value={input} onChange={handleInputChange}. messages.map(m => div role={m.role}). Streaming tokens wizualnie po stronie klienta. Tool calls: tools: {getWeather: tool({description: '...', parameters: z.object({location: z.string()}), execute: async ({location}) => ({temp: 22})})}. maxToolRoundtrips: 5.",
  },
  {
    question: "OpenAI API — modele, embeddings i Assistants API?",
    answer: "OpenAI modele 2024: GPT-4o (multimodal, szybki, tani). GPT-4o mini (tani, szybki, daily tasks). o1, o1-mini (reasoning, chain-of-thought). GPT-4 Turbo (128k context). GPT-3.5 Turbo (legacy, tani). openai npm: new OpenAI({apiKey: process.env.OPENAI_API_KEY}). chat.completions.create({model: 'gpt-4o', messages: [{role: 'system', content: '...'}, {role: 'user', content: '...'}], stream: true}). Vision: content: [{type: 'text', text: 'Opisz ten obraz'}, {type: 'image_url', image_url: {url: 'data:image/jpeg;base64,...'}}]. Embeddings: embeddings.create({model: 'text-embedding-3-small', input: 'tekst do embeddingu'}). 1536 wymiarów. text-embedding-3-large = lepsza jakość. Assistants API (beta): Persistent threads. File search (vector store wbudowane). Code interpreter. openai.beta.assistants.create({model, instructions, tools: [{type: 'file_search'}]}). threads.create(). threads.messages.create(threadId, {role: 'user', content}). threads.runs.stream(threadId, {assistant_id}). Structured outputs: response_format: {type: 'json_schema', json_schema: {name: 'user', schema: zodToJsonSchema(UserSchema)}}. Zawsze valid JSON pasujący do schema. generateObject w AI SDK: const {object} = await generateObject({model: openai('gpt-4o'), schema: z.object({categories: z.array(z.string())}), prompt: 'Kategoryzuj artykuł'}. Rate limits: tier-based. exponential backoff. openai.RateLimitError. Cost management: tokenizer (tiktoken-js). count_tokens przed requestem. Cache (Redis) dla powtarzalnych promptów.",
  },
  {
    question: "LangChain.js i LlamaIndex — frameworki do budowania LLM aplikacji?",
    answer: "LangChain.js: framework do budowania LLM chains i agentów. Modułowy. ChatOpenAI, ChatAnthropic, ChatGoogleGenerativeAI. PromptTemplate: const prompt = ChatPromptTemplate.fromMessages([['system', 'Jestes...'], ['human', '{input}']]). Chain: const chain = prompt.pipe(llm).pipe(new StringOutputParser()). const result = await chain.invoke({input: 'Pytanie'}). LCEL (LangChain Expression Language): pipe() do łączenia komponentów. RunnableParallel — równolegle. RunnableLambda — custom logika. RAG chain: const retrievalChain = createRetrievalChain({combineDocsChain: createStuffDocumentsChain({llm, prompt}), retriever: vectorStore.asRetriever()}). Memory: ConversationBufferMemory, ConversationSummaryMemory. Agents: AgentExecutor z tools. createOpenAIFunctionsAgent. Tools: TavilySearch, DuckDuckGo, Calculator, PythonREPL. createReactAgent (ReAct pattern). LlamaIndex.TS: RAG framework. Document, SimpleNodeParser. OpenAIEmbedding. VectorStoreIndex.fromDocuments(documents). const queryEngine = index.asQueryEngine(). const {response} = await queryEngine.query('Pytanie'). ServiceContext: llm, embedModel, chunkSize. Document loaders: PDFReader, SimpleWebPageReader. Kiedy LangChain vs AI SDK: AI SDK — Next.js, streaming, simple chat. LangChain — complex chains, agents, RAG pipelines. LlamaIndex — RAG focus, document Q&A. Mastra: nowy TypeScript AI framework (2024). Agents, workflows, memory. Vercel AI SDK 4.0: generowanieObject, streamObject, experimental_continueSteps.",
  },
  {
    question: "Budowanie chatbotów — useChat, streaming i persystencja konwersacji?",
    answer: "Architektura chatbota: Client (useChat) <-> Route Handler (streamText) <-> LLM API. Messages format: {id, role: 'user'|'assistant'|'system'|'tool', content}. useChat options: api — endpoint URL. initialMessages — wczytaj z DB. onResponse — callback. onFinish — po zakończeniu. onError — error handling. body — dodatkowe pola do POST. headers — custom headers. Persystencja: onFinish callback -> zapisz do DB. const {id, role, content, createdAt} = message. prisma.message.createMany({data: messages}). Wczytaj: initialMessages z getServerSideProps lub client fetch. System prompts: personalizacja. useChat body: {systemPrompt: '...'}. Route Handler odczytuje. User context: przekazuj userId. Route Handler weryfikuje (auth). Konwersacje wielokrotne: conversationId w body. Ładuj historię z DB. Attach do messages. Streaming UI (React Server Components): import {createAI, streamUI} from 'ai/rsc'. Po stronie serwera: streamUI({model, messages, text: ({content}) => div{content}, tools: {getStock: {description, parameters, generate: async* ({symbol}) => {yield Loading. return StockComponent({symbol, price: await getPrice(symbol)}}}}}. Generative UI: zwracaj React components ze streamu. Skeleton -> Real component. Tool streaming: onToolCall (client). toolInvocations w messages. renderToolInvocation custom UI. Rate limiting chatbota: upstash/ratelimit per userId. Edge Runtime compatible. Moderacja: openai.moderations.create({input}) -> categories. Blokuj harmful content.",
  },
  {
    question: "AI w aplikacjach webowych — image generation, transcription i translation?",
    answer: "Image generation: OpenAI DALL-E 3: images.generate({model: 'dall-e-3', prompt: 'opis', size: '1024x1024', quality: 'hd'}). Replicate: run('stability-ai/sdxl', {input: {prompt}}). Fal.ai: szybszy, cheapszy. Stability AI API. Transcription (Speech-to-Text): OpenAI Whisper: audio.transcriptions.create({file: audioFile, model: 'whisper-1', language: 'pl'}). Whisper local (openai-whisper npm). AssemblyAI: diarization, timestamps. Deepgram: real-time streaming. Text-to-Speech: openai.audio.speech.create({model: 'tts-1', voice: 'nova', input: 'Tekst'}). ElevenLabs: cloning voices, emotional. Azure TTS: 300+ voices. Translation: OpenAI GPT-4o (kontekst, nuanse). Google Translate API (szybki, tani). DeepL API (European languages, quality). deepl-node npm. Document AI: PDF parsing: LlamaParse (LlamaIndex). Azure Document Intelligence. AWS Textract. Structured extraction z invoice/receipt. Vision: gpt-4o multimodal. Analyze products images. OCR + table extraction. Vercel AI SDK image support: {type: 'image', image: new URL('...') | Buffer | base64}. AI cost monitoring: LangSmith (LangChain), Helicone, Langfuse. Track tokens, latency, errors. Cache strategia: Redis cache dla repeated prompts. Semantic cache — podobne pytania = ten sam wynik. GPTCache library. Local models: Ollama (llama3, mistral). Cloudflare AI Workers. Llama.cpp w WASM. Bez kosztów API.",
  },
];

const aiSdkComparison = [
  { sdk: "Vercel AI SDK", providery: "OpenAI, Anthropic, Google, Mistral", streaming: "Tak (native)", rsc: "Tak (streamUI)", kiedy: "Next.js, streaming chat, generative UI" },
  { sdk: "OpenAI SDK", providery: "Tylko OpenAI", streaming: "Tak", rsc: "Ręcznie", kiedy: "OpenAI-specific, Assistants API" },
  { sdk: "LangChain.js", providery: "Wszyscy + lokalne", streaming: "Tak (LCEL)", rsc: "Trudniejsze", kiedy: "Complex chains, agents, RAG" },
  { sdk: "LlamaIndex.TS", providery: "Wszyscy", streaming: "Ograniczone", rsc: "Nie natywnie", kiedy: "RAG, document Q&A, retrieval" },
  { sdk: "Mastra", providery: "OpenAI, Anthropic", streaming: "Tak", rsc: "Tak", kiedy: "TypeScript-first agents, workflows" },
  { sdk: "Anthropic SDK", providery: "Tylko Anthropic/Claude", streaming: "Tak", rsc: "Ręcznie", kiedy: "Claude models, long context, vision" },
];

export default function BlogAiSdkCoTo() {
  return (
    <Layout>
      <SEOHead
        title="AI SDK, OpenAI, LangChain | Fotz Studio"
        description="Vercel AI SDK, OpenAI API, LangChain.js, LlamaIndex — chatboty, streaming, RAG, image generation, Whisper transcription i generative UI w Next.js 2024."
        canonical="https://fotz.pl/blog/ai-sdk-openai-langchain-integracja-nextjs-typescript-2024"

        keywords="AI SDK, OpenAI, LangChain co to jest, AI SDK, OpenAI, LangChain jak działa, AI SDK, OpenAI, LangChain tutorial, AI SDK, OpenAI, LangChain przykład, czym jest AI SDK, OpenAI, LangChain, AI SDK, OpenAI, LangChain dokumentacja, AI SDK, OpenAI, LangChain przewodnik"
      />
      <ArticleSchema
        title="AI SDK, OpenAI, LangChain — integracja AI z Next.js i TypeScript 2024?"
        description="6 SDK AI (Vercel AI SDK/OpenAI/LangChain/LlamaIndex/Mastra/Anthropic) — streaming chat, useChat, streamText, RAG, embeddings, DALL-E i Whisper transcription."
        url="https://fotz.pl/blog/ai-sdk-openai-langchain-integracja-nextjs-typescript-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "AI SDK i OpenAI", url: "https://fotz.pl/blog/ai-sdk-openai-langchain-integracja-nextjs-typescript-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-violet-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "AI SDK i OpenAI", url: "/blog/ai-sdk-openai-langchain-integracja-nextjs-typescript-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              AI / Next.js
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI SDK i OpenAI w Next.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Vercel AI SDK, OpenAI API, LangChain.js, streaming chat,
              RAG, embeddings i generative UI w TypeScript i Next.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Streaming chat", value: "useChat" },
                { label: "AI orchestration", value: "LangChain" },
                { label: "Doc Q&A", value: "RAG" },
                { label: "Embeddings", value: "pgvector" },
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

      {/* Porównanie SDK */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 AI SDK dla TypeScript</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Vercel AI SDK, OpenAI SDK, LangChain, LlamaIndex, Mastra i Anthropic SDK —
              providery, streaming, RSC support i najlepszy use case.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">SDK</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Providery</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Streaming</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">RSC</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {aiSdkComparison.map((s, i) => (
                  <tr key={s.sdk} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{s.sdk}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.providery}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{s.streaming}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{s.rsc}</td>
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

      <RelatedArticles currentArticleId="ai-sdk-openai-langchain-integracja-nextjs-typescript-2024" />
      <ContactSection />
    </Layout>
  );
}
