import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są CRDTs i jak działają algorytmy collaborative editing?",
    answer: "CRDT (Conflict-free Replicated Data Type): struktura danych dla distributed systems. Automatyczne merge bez konfliktów. Bez centralnego serwera. Eventual consistency. Jak działają: każda zmiana ma unikalny ID (UUID + timestamp). Operacje commutative — kolejność nie ma znaczenia. Merge zawsze daje ten sam wynik. Typy CRDT: G-Counter — tylko increment. PN-Counter — increment + decrement. G-Set — tylko dodawanie elementów. OR-Set — add i remove z unique tags. LWW-Register — Last Write Wins. MV-Register — Multi-Value. Sequence CRDT (dla tekstu): Logoot, LSEQ, RGA, Fugue. Ważne dla edytorów tekstu. Operational Transformation (OT): starsza alternatywa. Transformuje operacje przed zastosowaniem. Google Docs używa OT. Trudniejszy w implementacji. Więcej serwerów (transform server). CRDT vs OT: CRDT — P2P możliwe, prostszy server. OT — Google standard, sprawdzony. Lokalna-first architektura: edycja offline. Sync gdy połączenie wraca. Brak 'lost work'. Użytkownik zawsze może pracować. Y.js: najpopularniejsza CRDT implementacja. Shared Types: Y.Map, Y.Array, Y.Text. Providers: WebSocket, WebRTC, IndexedDB. Rich text z ProseMirror/Quill/Tiptap.",
  },
  {
    question: "Y.js — CRDT biblioteka dla collaborative editing?",
    answer: "Y.js (Kevin Jahns): najpopularniejsza CRDT dla JavaScript. Instalacja: npm install yjs. Shared Types: Y.Doc — root dokument. Y.Map — jak JavaScript Map. Y.Array — jak JavaScript Array. Y.Text — rich text CRDT. Y.XmlFragment — XML/HTML CRDT. Podstawy: const ydoc = new Y.Doc(). const ymap = ydoc.getMap('config'). ymap.set('theme', 'dark'). ymap.observe(event => console.log(event.changes)). Y.Text z Tiptap: npm install @tiptap/extension-collaboration. TiptapExtension: Collaboration.configure({document: ydoc}). CollaborationCursor.configure({provider, user: {name, color}}). Providers: y-websocket: WebSocket sync. const provider = new WebsocketProvider('ws://localhost:1234', 'room', ydoc). y-webrtc: peer-to-peer sync. y-indexeddb: offline persistence. y-partykit: PartyKit integration. Awareness: kursory innych użytkowników. Presence informacje. provider.awareness.setLocalStateField('user', {name: 'Adam', color: '#ff0000'}). provider.awareness.on('change', changes => ...). Undo/Redo: Y.UndoManager([yText, yMap]). manager.undo(). manager.redo(). Wbudowane w Tiptap. Encoding: Y.encodeStateAsUpdate(ydoc). Y.applyUpdate(ydoc, update). Persist do DB — tylko delta. Garbage collection: ydoc.gc = false. Brak GC gdy offline. Uruchom po reconnect. Hocuspocus: backend Y.js server. WebSocket provider backend. Auth, persistence, extensions. Node.js lub Bun.",
  },
  {
    question: "Liveblocks — managed real-time collaboration platform?",
    answer: "Liveblocks: managed real-time collaboration. Bez własnego serwera. Rooms, Presence, Storage, Comments, Notifications. Instalacja: npm install @liveblocks/client @liveblocks/react. Konfiguracja: createClient({publicApiKey: 'pk_...'}). createRoomContext (z typami). Presence: useMyPresence() — mój stan. useOthers() — inni użytkownicy. updateMyPresence({cursor: {x, y}}). Automatyczne broadcast do pokoju. Storage (CRDT-based): LiveObject, LiveList, LiveMap. useMutation hook: aktualizacja storage. useStorage hook: odczyt. Liveblocks Storage = Y.js pod spodem. Comments: useThreads() — wątki komentarzy. useCreateThread(), useCreateComment(). Notifications: useInboxNotifications(). useMarkInboxNotificationAsRead(). Ready-made UI: @liveblocks/react-ui. Thread, InboxNotification, FloatingComposer. Cursors: Cursor component. Pokazuje kursory innych użytkowników. Avatar i kolor per user. Auth: authEndpoint (server endpoint). Liveblocks weryfikuje token. Supabase/Clerk/NextAuth integration. Liveblocks vs Y.js: Liveblocks — managed, auth, UI components. Y.js — self-hosted, więcej kontroli. Liveblocks — szybszy start, płatny plan. Pricing: darmowy tier (starter). Płatny od enterprise. Liveblocks + Lexical: @liveblocks/react-lexical. Wbudowana collaborative editing. Cursors, presence, storage.",
  },
  {
    question: "PartyKit — serverless real-time collaboration?",
    answer: "PartyKit (Sunil Pai, Cloudflare): serverless real-time platform. WebSockets na Cloudflare Workers. Durable Objects dla state. npm install partykit. Serwer PartyKit: src/server.ts. import {Party} from 'partykit/server'. export default class MyParty implements Party.Server { async onConnect(connection, room) { connection.send('hello') } async onMessage(message, sender, room) { room.broadcast(message) } }. Deploy: npx partykit deploy. Rooms: partysocket — klient WebSocket. import PartySocket from 'partysocket'. const socket = new PartySocket({host: 'myparty.youruser.partykit.dev', room: 'document-123'}). socket.addEventListener('message', handler). socket.send(JSON.stringify({type: 'update', data})). Persistence: Party.Storage — durable storage. await room.storage.put('state', data). await room.storage.get('state'). Durable Objects pod spodem. Y.js + PartyKit: y-partykit provider. npm install y-partykit. PartyKitServer (z y-partykit) jako serwer. new YPartyKitProvider('myhost.partykit.dev', 'room', ydoc). Presence w PartyKit: broadcast presence na każdy ruch. Filtruj własne connection. Skalowalność: Cloudflare global network. Niski latency. Autoscaling. Tańszy niż Liveblocks dla dużych użyć. PartyKit vs Liveblocks: PartyKit — code-first, Cloudflare. Liveblocks — managed, więcej features. PartyKit — tańszy przy scale. Liveblocks — gotowe UI components.",
  },
  {
    question: "Jak zbudować collaborative editor z React, Tiptap i Y.js?",
    answer: "Stack: Tiptap (editor) + Y.js (CRDT) + Hocuspocus (backend) + React. Instalacja: npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-collaboration @tiptap/extension-collaboration-cursor yjs @hocuspocus/provider. Konfiguracja: const ydoc = new Y.Doc(). const provider = new HocuspocusProvider({url: 'ws://localhost:1234', name: 'doc-1', document: ydoc}). Tiptap setup: useEditor({extensions: [StarterKit.configure({history: false}), Collaboration.configure({document: ydoc}), CollaborationCursor.configure({provider, user: {name: currentUser.name, color: randomColor()}})]}). Kursory innych: automatyczne z CollaborationCursor. CSS dla komentarzy. Hocuspocus server: npm install @hocuspocus/server. import {Server} from '@hocuspocus/server'. const server = Server.configure({port: 1234, extensions: [new Database({fetch: async({documentName}) => getFromDB(documentName), store: async({documentName, state}) => saveToDB(documentName, state)})]}). server.listen(). Offline support: y-indexeddb persist offline. const indexeddbProvider = new IndexeddbPersistence('doc-name', ydoc). indexeddbProvider.on('synced', () => console.log('loaded from db')). Gdy online: WebSocket sync z Hocuspocus. Merge automatyczny przez Y.js. Awareness kursory: type AwarenessState = {user: {name: string, color: string}, cursor: DecorationRange}. useEffect(() => { provider.setAwarenessField('user', currentUser) }). Undo/Redo: Tiptap History extension — wyłącz (conflict z Y.js). Y.UndoManager dla collaborative undo. Collaboration.configure — wbudowany undo. Persystencja: Hocuspocus Database extension. Postgres lub MongoDB. Binary Y.js state — małe delty. Snapshots: Y.encodeStateAsUpdate(ydoc). Wersjonowanie dokumentów.",
  },
];

const collabTools = [
  { narzedzie: "Y.js", typ: "CRDT Library", hosting: "Self-hosted", kiedy: "Offline-first, własny backend, max kontrola" },
  { narzedzie: "Liveblocks", typ: "Managed Platform", hosting: "SaaS (Cloudflare)", kiedy: "Szybki start, gotowe UI, comments, notifications" },
  { narzedzie: "PartyKit", typ: "Serverless WebSockets", hosting: "Cloudflare Workers", kiedy: "Code-first, tanie skalowanie, Y.js backend" },
  { narzedzie: "Hocuspocus", typ: "Y.js WebSocket Server", hosting: "Self-hosted Node.js", kiedy: "Backend dla Y.js, auth, persistence" },
  { narzedzie: "Automerge", typ: "CRDT Library (Rust)", hosting: "Self-hosted", kiedy: "Automerge 2.0 (WASM), offline-first apps" },
  { narzedzie: "Electric SQL", typ: "Local-first SQLite sync", hosting: "Self-hosted/Cloud", kiedy: "SQL queries, offline, sync z Postgres" },
];

export default function BlogCrdtCollabCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CRDT, Y.js, Liveblocks i PartyKit | Fotz Studio"
        description="CRDTs (Conflict-free Replicated Data Types), Y.js (Shared Types, providers), Liveblocks (managed platform), PartyKit (serverless WebSockets), Hocuspocus i…"
        canonical="https://fotz.pl/blog/crdt-yjs-liveblocks-partykit-collaborative-editing-react-2024"

        keywords="CRDT, Y.js, Liveblocks i PartyKit co to jest, CRDT, Y.js, Liveblocks i PartyKit jak działa, CRDT, Y.js, Liveblocks i PartyKit tutorial, CRDT, Y.js, Liveblocks i PartyKit przykład, czym jest CRDT, Y.js, Liveblocks i PartyKit, CRDT, Y.js, Liveblocks i PartyKit dokumentacja, CRDT, Y.js, Liveblocks i PartyKit przewodnik"
      />
      <ArticleSchema
        title="CRDT, Y.js, Liveblocks i PartyKit — real-time collaborative editing React 2024?"
        description="6 narzędzi collaborative editing (Y.js/Liveblocks/PartyKit/Hocuspocus/Automerge/ElectricSQL) — CRDTs, offline-first, presence, shared cursors i Tiptap integration."
        url="https://fotz.pl/blog/crdt-yjs-liveblocks-partykit-collaborative-editing-react-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CRDT i Collaborative Editing", url: "https://fotz.pl/blog/crdt-yjs-liveblocks-partykit-collaborative-editing-react-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-violet-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "CRDT i Collaborative Editing", url: "/blog/crdt-yjs-liveblocks-partykit-collaborative-editing-react-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Real-time / Collaboration
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CRDT i Collaborative Editing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Y.js (CRDT Shared Types), Liveblocks (managed platform), PartyKit (serverless WebSockets),
              Hocuspocus i Tiptap — budowanie Notion-like collaborative editors.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "CRDT engine", value: "Y.js" },
                { label: "Managed", value: "Liveblocks" },
                { label: "Serverless WS", value: "PartyKit" },
                { label: "Editor", value: "Tiptap" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi collaborative editing — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Y.js, Liveblocks, PartyKit, Hocuspocus, Automerge i ElectricSQL —
              typ, hosting i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Hosting</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {collabTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.hosting}</td>
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

      <RelatedArticles currentArticleId="crdt-yjs-liveblocks-partykit-collaborative-editing-react-2024" />
      <ContactSection />
    </Layout>
  );
}
