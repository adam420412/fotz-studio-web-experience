import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest OpenAI Assistants API i jak działa?",
    answer: "Assistants API: budowanie AI asystentów z persystentnym stanem. Bez ręcznego zarządzania historią rozmów. Kluczowe koncepty: Assistant — skonfigurowany agent (model, instructions, tools). Thread — wątek konwersacji (persystentna historia). Message — wiadomość w wątku (user/assistant). Run — uruchomienie Asistanta na Threads. Run Step — poszczególne kroki w Run. Tworzenie Assistanta: const assistant = await openai.beta.assistants.create({name: 'Code Helper', instructions: 'You are expert TypeScript developer...', model: 'gpt-4o', tools: [{type: 'code_interpreter'}, {type: 'file_search'}]}). Tworzenie Threada: const thread = await openai.beta.threads.create(). Dodawanie wiadomości: await openai.beta.threads.messages.create(thread.id, {role: 'user', content: 'Fix this TypeScript error...'}). Uruchomienie: const run = await openai.beta.threads.runs.create(thread.id, {assistant_id: assistant.id}). Polling na wynik: await openai.beta.threads.runs.poll(thread.id, run.id). Odczyt odpowiedzi: const messages = await openai.beta.threads.messages.list(thread.id). Assistants v2 (2024): Vector Stores. File Search (RAG wbudowany). Streaming SSE. Parallel tool calls. Persystentny Thread — użytkownik wraca, historia zachowana.",
  },
  {
    question: "File Search i Vector Stores — RAG bez własnej infrastruktury?",
    answer: "File Search: wbudowane RAG w Assistants API. Nie trzeba własnej bazy wektorowej. Automatyczne chunking i embedding dokumentów. Semantic search nad plikami. Vector Store tworzenie: const vectorStore = await openai.beta.vectorStores.create({name: 'Product Docs', expires_after: {anchor: 'last_active_at', days: 7}}). Upload pliku: const file = await openai.files.create({file: fs.createReadStream('docs.pdf'), purpose: 'assistants'}). Dodanie do Vector Store: await openai.beta.vectorStores.files.create(vectorStore.id, {file_id: file.id}). Poczekaj na przetworzenie: await openai.beta.vectorStores.fileBatches.poll(vectorStore.id, batch.id). Podpięcie do Assistanta: await openai.beta.assistants.update(assistant.id, {tool_resources: {file_search: {vector_store_ids: [vectorStore.id]}}}). Chunking strategy: max_chunk_size_tokens: 800. chunk_overlap_tokens: 400. Obsługiwane formaty: PDF, docx, xlsx, txt, md, json, csv, html i inne. Max 512 MB per file. Przy query: LLM automatycznie decyduje kiedy szukać. Cytaty z pliku w odpowiedzi. annotations w message.content — linki do źródeł. Wiele Vector Stores per Assistant (max 1 per thread też). Thread-level Vector Store dla tymczasowych plików. Limity: 10 000 plików per Vector Store. 100 plików per upload batch. Expiration policy — zarządzanie kosztami.",
  },
  {
    question: "Code Interpreter — Python w sandboxie dla analizy danych?",
    answer: "Code Interpreter: uruchamia Python w sandboxie. Analiza danych, wykresy, obliczenia. Automatycznie pisze i poprawia kod. Narzędzia: matplotlib, numpy, pandas, scipy — preinstalowane. Tworzenie plików (CSV, PDF, XLSX). Upload pliku do analizy: const file = await openai.files.create({file: fs.createReadStream('data.csv'), purpose: 'assistants'}). Thread z plikiem: await openai.beta.threads.messages.create(thread.id, {role: 'user', content: 'Analyze this sales data and create a chart', attachments: [{file_id: file.id, tools: [{type: 'code_interpreter'}]}]}). Odpowiedź z wykresem: message.content zawiera image_file lub text. image_file.file_id — ID wygenerowanego obrazu. Pobranie obrazu: const imageData = await openai.files.content(file_id). Zastosowania: Analiza CSV/Excel uploadowanych przez użytkownika. Generowanie raportów PDF. Obliczenia statystyczne. Konwersja formatów plików. Debugging kodu — LLM poprawia własny kod przy błędach. Limity: timeout 120s per code execution. Max 50 plików per Thread. 512 MB per plik. Sandbox reset po każdym Run. Koszty: $0.03 per session (nieciągłe — per Run). Koszt plus tokeny. Streaming output: Run.step events. tool_calls events z kodem. Code Interpreter + File Search razem: kombinowanie RAG z analizą.",
  },
  {
    question: "Function Calling w Assistants API — własne narzędzia?",
    answer: "Function Calling: Asistant wywołuje twoje funkcje. Jak tool calling w Chat Completions ale z persystentnym stanem. Definicja funkcji przy tworzeniu Assistanta: tools: [{type: 'function', function: {name: 'get_weather', description: 'Get current weather for a city', parameters: {type: 'object', properties: {city: {type: 'string'}, unit: {type: 'string', enum: ['celsius', 'fahrenheit']}}, required: ['city']}}}]. Run Flow z function calling: Run status: 'requires_action'. run.required_action.type === 'submit_tool_outputs'. run.required_action.submit_tool_outputs.tool_calls[0]. Wykonanie funkcji: const toolCall = run.required_action.submit_tool_outputs.tool_calls[0]. const args = JSON.parse(toolCall.function.arguments). const result = await getWeather(args.city, args.unit). Submit wynik: await openai.beta.threads.runs.submitToolOutputs(thread.id, run.id, {tool_outputs: [{tool_call_id: toolCall.id, output: JSON.stringify(result)}]}). Parallel function calls: wiele tool_calls na raz. Promise.all dla równoległego wykonania. Submit wszystkich wyników razem. Polling helper: openai.beta.threads.runs.poll() — do 'completed' lub 'requires_action'. Streaming z function calling: openai.beta.threads.runs.stream(). event: 'thread.run.requires_action'. submitToolOutputsStream(). Bezpieczeństwo: waliduj argumenty. Nie pozwól na destructive operations bez potwierdzenia. Rate limits per Asistant i per Thread.",
  },
  {
    question: "Streaming i wzorce produkcyjne Assistants API?",
    answer: "Streaming SSE: const stream = await openai.beta.threads.runs.stream(thread.id, {assistant_id: assistant.id}). for await (const event of stream) { if (event.event === 'thread.message.delta') { const delta = event.data.delta. process.stdout.write(delta.content[0].text.value) } }. Events: thread.created, thread.run.created, thread.run.queued, thread.run.in_progress, thread.message.created, thread.message.delta, thread.run.completed, thread.run.failed. AssistantStream helper (v4 SDK): const run = openai.beta.threads.runs.stream(threadId, {...}). run.on('textDelta', (text) => {...}). run.on('toolCallDelta', (toolCall) => {...}). await run.finalMessages(). Next.js Server-Sent Events: Response z ReadableStream. TextEncoder per chunk. useChat lub własny hook. Thread management: thread per user session. Przechowuj thread_id w DB. Usuwaj stare thready. Koszty: thread i messages nie kosztują. Płacisz za tokeny w Run (input + output). Code Interpreter: $0.03/session. File Search: $0.10/GB dziennie dla Vector Store. Assistant management: lista asistantów. Aktualizacja instructions. Wersjonowanie (delete + create). Limity: rate limit per API key. max_prompt_tokens i max_completion_tokens per Run. truncation_strategy — zarządzanie długimi threadami. Monitorowanie: run.usage.total_tokens. Log per run dla billing. Timeout handling — run status: 'expired' po 10 minutach.",
  },
];

const assistantsTools = [
  { narzedzie: "File Search", typ: "Wbudowane RAG", koszty: "$0.10/GB/dzień Vector Store", kiedy: "Dokumenty, FAQ, knowledge base" },
  { narzedzie: "Code Interpreter", typ: "Python sandbox", koszty: "$0.03/session", kiedy: "Analiza danych, wykresy, konwersja plików" },
  { narzedzie: "Function Calling", typ: "Custom tools", koszty: "Tylko tokeny", kiedy: "Własne API, DB, akcje zewnętrzne" },
  { narzedzie: "Streaming SSE", typ: "Real-time output", koszty: "Brak dodatkowych", kiedy: "UX — natychmiastowa odpowiedź" },
  { narzedzie: "Vector Store", typ: "Embedding storage", koszty: "$0.10/GB/dzień", kiedy: "Persistentna baza wiedzy dla Asistanta" },
  { narzedzie: "Thread", typ: "Persystentna historia", koszty: "Brak (tokeny w Run)", kiedy: "Multi-turn rozmowy, user sessions" },
];

export default function BlogOpenAiAssistantsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="OpenAI Assistants API | Fotz Studio"
        description="OpenAI Assistants API v2 (Threads, Messages, Runs), File Search (Vector Store, RAG), Code Interpreter (Python sandbox), Function Calling i streaming SSE w…"
        canonicalUrl="https://fotz.pl/blog/openai-assistants-api-threads-file-search-code-interpreter-2024"

        keywords="OpenAI Assistants API co to jest, OpenAI Assistants API jak działa, OpenAI Assistants API tutorial, OpenAI Assistants API przykład, czym jest OpenAI Assistants API, OpenAI Assistants API dokumentacja, OpenAI Assistants API przewodnik"

        canonical="https://fotz.pl/blog/openai-assistants-api-threads-file-search-code-interpreter-2024"
      />
      <ArticleSchema
        title="OpenAI Assistants API — Threads, File Search, Code Interpreter, Function Calling 2024?"
        description="6 narzędzi Assistants API (File Search/Code Interpreter/Function Calling/Streaming/Vector Store/Thread) — RAG bez infrastruktury, Python sandbox, streaming i produkcyjne wzorce."
        url="https://fotz.pl/blog/openai-assistants-api-threads-file-search-code-interpreter-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "OpenAI Assistants API", url: "https://fotz.pl/blog/openai-assistants-api-threads-file-search-code-interpreter-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "OpenAI Assistants API", href: "/blog/openai-assistants-api-threads-file-search-code-interpreter-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              OpenAI / AI / Assistants
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OpenAI Assistants API
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Threads, File Search (RAG bez infrastruktury), Code Interpreter (Python sandbox),
              Function Calling i streaming SSE w TypeScript.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "RAG wbudowany", value: "File Search" },
                { label: "Python sandbox", value: "Code Interp." },
                { label: "Własne tools", value: "Functions" },
                { label: "Stateful chat", value: "Threads" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-teal-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi Assistants API — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              File Search, Code Interpreter, Function Calling, Streaming, Vector Store i Thread —
              typ, koszty i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Koszty</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {assistantsTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.koszty}</td>
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

      <RelatedArticles currentArticleId="openai-assistants-api-threads-file-search-code-interpreter-2024" />
      <ContactSection />
    </Layout>
  );
}
