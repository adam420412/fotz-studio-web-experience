import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "OpenAI Whisper — transkrypcja mowy w TypeScript?",
    answer: "OpenAI Whisper: najlepszy open-source model STT. Whisper API (cloud) i whisper.cpp (local). Modele: tiny, base, small, medium, large-v3. Large-v3: najdokładniejszy. Obsługa 99 języków. API integracja TypeScript: import OpenAI from 'openai'. const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY}). async function transcribe(audioFile: File) { const formData = new FormData(). formData.append('file', audioFile). formData.append('model', 'whisper-1'). formData.append('language', 'pl'). const response = await openai.audio.transcriptions.create({file: audioFile, model: 'whisper-1', language: 'pl', response_format: 'verbose_json', timestamp_granularities: ['word']}). return response }. verbose_json: pełne dane z timestampami słów. Word-level timestamps. Next.js API route: app/api/transcribe/route.ts. formData() z request. Streaming transkrypcja: chunked audio. Real-time z mikrofonu. MediaRecorder API. Obsługiwane formaty: mp3, mp4, mpeg, mpga, m4a, wav, webm. Max 25MB. Dłuższe pliki: ffmpeg split. Diarization (kto mówi): Pyannote.audio. AssemblyAI (cloud). Kombinuj z Whisper. Tłumaczenie: task: 'translate' — przetłumacz na angielski. Z dowolnego języka. Jeden call API. Prompt context: initial_prompt — styl, słownictwo. Nazwy własne poprawność. Terminologia techniczna.",
  },
  {
    question: "ElevenLabs — text-to-speech i klonowanie głosu API?",
    answer: "ElevenLabs: najlepsza jakość TTS (2024). Naturalne emocje. Klonowanie głosu. Wielojęzyczny. SDK TypeScript: npm install elevenlabs. import {ElevenLabsClient} from 'elevenlabs'. const client = new ElevenLabsClient({apiKey: process.env.ELEVENLABS_API_KEY}). Generowanie audio: const audioStream = await client.generate({voice: 'Rachel', model_id: 'eleven_multilingual_v2', text: 'Cześć, jak się masz?'}). Streaming: for await (const chunk of audioStream) { process.stdout.write(chunk) }. Głosy: Rachel, Drew, Clyde, Paul, Domi. Prebuilt voices. Własne głosy z Voice Lab. Model: eleven_multilingual_v2 — obsługuje polski. eleven_monolingual_v1 — tylko angielski. eleven_turbo_v2_5 — szybszy, tańszy. Voice settings: stability: 0.5. similarity_boost: 0.75. style: 0.0 (expressiveness). use_speaker_boost: true. Voice cloning: Instant Voice Cloning — 1 minuta próbki. Professional Voice Cloning — pełny klon. API: client.voices.add. Voices library. Next.js streaming: ReadableStream. Response headers Content-Type: audio/mpeg. Browser odtwarza. Koszty: Starter 10k chars/mies. Creator 30k. Custom. Znaki = tekst. Średnio $0.30/1000 znaków. Alternatywy: OpenAI TTS (tts-1, tts-1-hd). 6 głosów (alloy, echo, fable, onyx, nova, shimmer). Tańszy. Gorsze emocje. Azure TTS: setki głosów. SSML. Enterprzise. Google TTS: WaveNet, Neural2. Tanie.",
  },
  {
    question: "Deepgram — real-time transkrypcja i WebSocket API?",
    answer: "Deepgram: real-time STT. WebSocket streaming. Najszybszy (300ms latency). Nova-2 model: najdokładniejszy dla angielskiego. Whisper model: wielojęzyczny przez Deepgram API. SDK: npm install @deepgram/sdk. import {createClient} from '@deepgram/sdk'. const deepgram = createClient(process.env.DEEPGRAM_API_KEY). Real-time z mikrofonu TypeScript: const connection = deepgram.listen.live({model: 'nova-2', language: 'pl', punctuate: true, diarize: true, smart_format: true}). connection.on('Results', (data) => { const transcript = data.channel.alternatives[0].transcript. if (data.is_final) console.log(transcript) }). MediaRecorder do WebSocket: navigator.mediaDevices.getUserMedia({audio: true}). MediaRecorder(stream). ondataavailable -> connection.send(event.data). Browser example: Deepgram JS SDK. Bezpośrednio z przeglądarki. API key — ostrożnie (backend proxy lepiej). Diarization: kto mówi. speaker: 0, speaker: 1. Timestamps per word. Smart formatting: liczby, daty, waluty. Redaction: PII removal. Automatycznie. Pre-recorded audio: deepgram.listen.prerecorded.transcribeFile(). lub transcribeUrl(). Async. Batch processing. Webhooks dla długich plików. Features: Summarize — AI podsumowanie. Topics — wykrywanie tematów. Sentiment — analiza sentymentu. Intents — wykrywanie intencji. Ceny: Pay-as-you-go $0.0043/minuta. Hosted $0.0036. On-premise dostępne.",
  },
  {
    question: "Web Speech API — natywna mowa w przeglądarce TypeScript?",
    answer: "Web Speech API: wbudowany w przeglądarkę. Zero cost. Działa offline (system TTS). SpeechRecognition: mowa na tekst. SpeechSynthesis: tekst na mowę. SpeechRecognition TypeScript: const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition. const recognition = new SpeechRecognition(). recognition.lang = 'pl-PL'. recognition.interimResults = true. recognition.continuous = true. recognition.onresult = (event) => { const transcript = Array.from(event.results).map(r => r[0].transcript).join('') }. recognition.start(). TypeScript types: npm install @types/dom-speech-recognition. Lub window deklaracja własna. Ograniczenia: Chrome tylko (Firefox partial). Online wymagany (Chrome wysyła do Google). Prywatność — dane do chmury. Brak 100% dokładności. React hook: const useSpeechRecognition = () => { const [transcript, setTranscript] = useState(''). useEffect(() => { const recognition = new window.SpeechRecognition(). recognition.onresult = (e) => setTranscript(...) }). return {transcript, start, stop} }. SpeechSynthesis (TTS): const utterance = new SpeechSynthesisUtterance('Cześć!'). utterance.lang = 'pl-PL'. utterance.rate = 1.0. utterance.pitch = 1.0. utterance.voice = speechSynthesis.getVoices().find(v => v.lang === 'pl-PL'). speechSynthesis.speak(utterance). Głosy: systemowe (Windows, macOS). Jakość zmienna. Dobry dla prostych zastosowań. Events: onstart, onend, onerror, onboundary (słowa). Porównanie z ElevenLabs: ElevenLabs — jakość premium. Web Speech — darmowy, offline, prosty.",
  },
  {
    question: "Architektura voice AI app — React hook, streaming i pipeline?",
    answer: "Kompletny pipeline voice AI: Mikrofon -> MediaRecorder -> WebSocket/API -> STT -> LLM -> TTS -> Audio player. React architecture: useVoiceRecorder hook. useTranscription hook. useTextToSpeech hook. useVoiceChat = kombinacja. useVoiceRecorder: const [isRecording, setIsRecording] = useState(false). const mediaRecorderRef = useRef. navigator.mediaDevices.getUserMedia({audio: true}). MediaRecorder z chunks. Blob po stop. Return {isRecording, start, stop, audioBlob}. Streaming STT + LLM + TTS: 1. Stream audio do Deepgram. 2. Interim results -> LLM (nie czekaj na koniec). 3. LLM stream output -> ElevenLabs. 4. ElevenLabs audio -> natychmiastowe odtwarzanie. Latency: STT ~300ms + LLM ~500ms + TTS ~500ms = ~1.3s. Next.js App Router: Server Actions dla STT (nie stream). Route handlers dla streaming TTS. WebSockets dla real-time chat. Audio format: Przeglądarka: webm/opus. Konwersja: ffmpeg lub Web Audio API. Whisper: wav/mp3 dla dokładności. AudioContext Web API: Visualizer. Waveform animacja. Volume detection. Noise detection. VAD (Voice Activity Detection): @ricky0123/vad-web. Silero VAD w przeglądarce. Start/stop automatycznie. Brak przycisku push-to-talk. Vercel AI SDK + speech: useChat z voice. streamText na serwerze. TTS wynik. End-to-end voice chat. Rate limiting: Upstash Redis. Per-user, per-minute. API costs kontrola. Deployment: Vercel (latency ok dla voice). Edge functions dla STT proxy. WebRTC dla P2P audio.",
  },
];

const speechTools = [
  { tool: "OpenAI Whisper", typ: "STT (cloud)", zastosowanie: "Transkrypcja, tłumaczenie, 99 języków, word timestamps" },
  { tool: "whisper.cpp", typ: "STT (local)", zastosowanie: "On-device, prywatność, offline, WASM w przeglądarce" },
  { tool: "ElevenLabs", typ: "TTS (premium)", zastosowanie: "Najlepsza jakość, emocje, klonowanie głosu, wielojęzyczny" },
  { tool: "OpenAI TTS", typ: "TTS (cloud)", zastosowanie: "6 głosów, tańszy, tts-1-hd wysoka jakość" },
  { tool: "Deepgram Nova-2", typ: "STT (real-time)", zastosowanie: "WebSocket streaming, diarization, 300ms latency" },
  { tool: "Web Speech API", typ: "STT+TTS (browser)", zastosowanie: "Darmowy, offline TTS, Chrome tylko, system głosy" },
];

export default function BlogSpeechAiCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Speech AI w TypeScript | Fotz Studio"
        description="Speech AI TypeScript: OpenAI Whisper (STT, word timestamps), ElevenLabs (TTS premium, klonowanie głosu), Deepgram real-time WebSocket, Web Speech API i…"
        canonical="https://fotz.pl/blog/speech-ai-whisper-elevenlabs-deepgram-text-to-speech-typescript-2024"

        keywords="Speech AI w TypeScript co to jest, Speech AI w TypeScript jak działa, Speech AI w TypeScript tutorial, Speech AI w TypeScript przykład, czym jest Speech AI w TypeScript, Speech AI w TypeScript dokumentacja, Speech AI w TypeScript przewodnik"

        canonical="https://fotz.pl/blog/speech-ai-whisper-elevenlabs-deepgram-text-to-speech-typescript-2024"
      />
      <ArticleSchema
        title="Speech AI w TypeScript — Whisper, ElevenLabs, Deepgram i Web Speech API 2024?"
        description="6 narzędzi Speech AI (Whisper/whisper.cpp/ElevenLabs/OpenAI TTS/Deepgram/Web Speech API) — STT/TTS TypeScript, real-time streaming, voice chat pipeline i React hooks."
        url="https://fotz.pl/blog/speech-ai-whisper-elevenlabs-deepgram-text-to-speech-typescript-2024"
        datePublished="2024-05-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Speech AI TypeScript", url: "https://fotz.pl/blog/speech-ai-whisper-elevenlabs-deepgram-text-to-speech-typescript-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Speech AI TypeScript", url: "/blog/speech-ai-whisper-elevenlabs-deepgram-text-to-speech-typescript-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              AI / Speech / TypeScript
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Speech AI w TypeScript
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Whisper (STT), ElevenLabs (TTS premium), Deepgram real-time WebSocket,
              Web Speech API i architektura voice chat w React.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "STT", value: "Whisper" },
                { label: "TTS", value: "ElevenLabs" },
                { label: "Real-time", value: "Deepgram" },
                { label: "Browser", value: "Web Speech" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-blue-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi Speech AI — STT i TTS</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Whisper, ElevenLabs, Deepgram, OpenAI TTS i Web Speech API —
              typ, zastosowanie i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zastosowanie</th>
                </tr>
              </thead>
              <tbody>
                {speechTools.map((t, i) => (
                  <tr key={t.tool} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.tool}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.zastosowanie}</td>
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

      <RelatedArticles currentArticleId="speech-ai-whisper-elevenlabs-deepgram-text-to-speech-typescript-2024" />
      <ContactSection />
    </Layout>
  );
}
