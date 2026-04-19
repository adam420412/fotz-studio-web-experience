import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Tiptap i jak działa rich text editing w React?",
    answer: "Tiptap: headless rich text editor dla React (i Vue, plain JS). Oparty na ProseMirror — potężny silnik edycji. Extensible — dodawaj własne nodes, marks, extensions. Bez domyślnego UI (headless). TypeScript. Instalacja: npm install @tiptap/react @tiptap/pm @tiptap/starter-kit. EditorProvider lub useEditor hook. const editor = useEditor({extensions: [StarterKit], content: 'Hello world'}). EditorContent editor={editor}. StarterKit: zestaw podstawowych extensions. Bold, Italic, Strike, Code, Heading, BulletList, OrderedList, Blockquote, HorizontalRule, Paragraph, Text, Document, History. Toolbar: editor.chain().focus().toggleBold().run(). editor.isActive('bold'). editor.can().chain().focus().toggleBold().run(). Marks: Bold, Italic, Underline, Strike, Code, Link, Highlight, TextStyle, Color. Nodes: Paragraph, Heading, BulletList, OrderedList, TaskList, CodeBlock, Blockquote, Image, Table, Mention, Emoji. Extensions: Collaboration (Hocuspocus/Y.js). Placeholder. CharacterCount. Focus. Autocomplete. Tiptap Pro: extensions płatne. Tables zaawansowane. Comments (threads). AI integration. Content: JSON format (storage). HTML (output). Markdown (z extension). Commands: editor.commands.setContent('...') — set content. editor.commands.clearContent(). editor.getHTML(). editor.getJSON(). editor.getText(). Schema (ProseMirror): Node schema definiuje strukturę. Mark schema definiuje formatowanie. Custom schema extension: Node.create({name: 'callout', group: 'block', content: 'inline*', parseHTML: [], renderHTML: []}).",
  },
  {
    question: "Lexical — React-native rich text editor od Facebooka?",
    answer: "Lexical (Meta/Facebook, 2022): nowoczesny editor framework. React-first. Extensible node system. Collaborative-ready. Używany na Facebook.com. Instalacja: npm install lexical @lexical/react. LexicalComposer: root component. editorState (JSON serialize). InitialConfig: namespace, theme, nodes, onError. Plugins: system wtyczek. HistoryPlugin, RichTextPlugin, OnChangePlugin, AutoFocusPlugin, LinkPlugin, ListPlugin, MarkdownShortcutPlugin. RichTextPlugin: contentEditable element. placeholder. ErrorBoundary. Custom nodes: class CustomNode extends ElementNode {static getType() {return 'custom'}. static clone(node) {return new CustomNode(node.__key)}. createDOM() {return document.createElement('div')}. updateDOM() {return false}. static importJSON(data) {return new CustomNode()}}. State management: editorState — immutable state tree. Mutations przez Editor API. editor.registerCommand(FORMAT_TEXT_COMMAND, ...). editor.dispatchCommand(FORMAT_TEXT_COMMAND, {formatType: 'bold'}). Serialization: editorState.toJSON(). editor.parseEditorState(jsonString). Lexical vs Tiptap: Lexical — React-native, Meta scale, nowy. Tiptap — dojrzały, Vue support, Pro features. Lexical — niższy poziom, więcej flexibility. Tiptap — łatwiejszy start, plugin ecosystem. Collaborative editing: Lexical — własne rozwiązanie lub Y.js adapter. Tiptap — Hocuspocus (Y.js server) + @tiptap/extension-collaboration. ContentEditable hooks: $getRoot(), $createParagraphNode(), $createTextNode(). Lexical playground: open source demo pełnych możliwości.",
  },
  {
    question: "Quill, Slate.js i inne editory — kiedy wybrać co?",
    answer: "Quill (2012, Slab): popularne, dojrzałe. react-quill wrapper. Blot system (custom formats). Problemy: React 18 incompatibility. Aktywny development spowolniony. Legacy choice. Slate.js (Ian Storm Taylor): React-based, flexible. Plugin pattern. Normalized data model. Trudny do opanowania API. render elements/leaves. Mniejszy ekosystem niż Tiptap. TinyMCE: klasyczny WYSIWYG. Plugin system. Self-hosted (opensource) lub Cloud (płatny). @tinymce/tinymce-react. Duży bundle (~500KB). Doskonały dla non-technical users. Ckeditor 5: enterprise WYSIWYG. Plugin architektura. React integation: @ckeditor/ckeditor5-react. Płatny dla zaawansowanych features. Draft.js (Facebook, wycofywany): stary, React-based. Zastąpiony przez Lexical. Nie używaj dla nowych projektów. Prosekit: nowoczesne, framework-agnostic. Kompatybilny z React, Vue, Svelte, Solid. Eksperymentalny. Porównanie dla use-cases: Blog/CMS dla non-dev: TinyMCE, CKEditor 5. App-integrated editor: Tiptap lub Lexical. Custom document editor: Tiptap z customizacją. Collaborative docs (Notion-like): Tiptap + Hocuspocus. Code editor w edytorze: CodeMirror extension. Markdown-first: Tiptap Markdown extension. Prosty rich text (email): Tiptap starter. Kiedy NIE używać rich text: forms z prostym text. Markdown input. JSON structured data. Rozważ: textarea + markdown preview zamiast WYSIWYG.",
  },
  {
    question: "Collaborative editing — Y.js, Hocuspocus i Liveblocks?",
    answer: "CRDT (Conflict-free Replicated Data Types): algorytm dla collaborative editing. Brak konfliktów przy concurrent edits. Merge bez serwera (eventually consistent). Y.js: najpopularniejsza CRDT library. Shared types: Y.Map, Y.Array, Y.Text. Providers: y-websocket, y-webrtc, y-indexeddb. Binding: y-prosemirror (ProseMirror/Tiptap), y-codemirror, y-ace. Hocuspocus (Tiptap team): WebSocket server dla Y.js. Self-hosted lub Tiptap Cloud. Authentication. Persistence (SQLite, MongoDB, Redis). Webhooks. @hocuspocus/server na backend. @tiptap/extension-collaboration + @tiptap/extension-collaboration-cursor. Liveblocks: managed collaborative infrastructure. Realtime presence, comments, notifications. Rooms, users, permissions. @liveblocks/react-tiptap extension. Płatny (generous free tier). Zero infrastruktura do zarządzania. Partykit: multiplayer backend jako serwis. Cloudflare Durable Objects. WebSocket connections. Kompatybilny z Y.js. Collaboration UX features: Cursor presence (colored cursors per user). User avatars na edytorze. Comments + threads (Tiptap Pro). Change tracking. Version history. Offline support: y-indexeddb dla offline changes. Sync przy reconnect. Liveblocks offline: storage layer. Operational transforms (OT): starsza technologia niż CRDT. Google Docs używa OT. ShareDB library — OT backend. Trudniejsze niż Y.js. Google Docs clone: Next.js + Tiptap + Liveblocks = 2 dni. Lub Tiptap + Hocuspocus + samodzielny hosting.",
  },
  {
    question: "Markdown editor — CodeMirror, Monaco i react-md-editor?",
    answer: "CodeMirror 6 (@codemirror): modularny editor framework. Syntax highlighting. Vim/Emacs keybindings. Autocomplete. Linting. Używany: VS Code web, GitHub, StackOverflow. Instalacja: npm install @codemirror/state @codemirror/view @codemirror/commands. Extensions: @codemirror/lang-markdown, @codemirror/lang-javascript. React wrapper: @uiw/react-codemirror. Monaco Editor: VS Code editor w przeglądarce. @monaco-editor/react. Pełny VS Code experience. TypeScript IntelliSense. 100+ languages. Duży bundle (~3MB). Kiedy: code playground, online IDE. react-simple-code-editor: lightweight. Prism.js syntax highlighting. Prosty do embedowania. react-md-editor: markdown z preview. @uiw/react-md-editor. Split pane (edit + preview). remark-based preview. DevUI. Milkdown: WYSIWYG Markdown editor. Plugin-based (Prosemirror-based). Collaborative. Obsidian-like. Bytemd: markdown editor z plugins. Vditor: rich markdown editor (Vue+React). react-markdown (wyświetlanie): remark ecosystem. Nie edytor — tylko renderer. remark + rehype. Plugins: remark-gfm (tables, task lists). rehype-highlight (code). rehype-sanitize. Mermaid.js w markdown: rehype-mermaid plugin. Diagram rendering. MDX: Markdown + JSX. Import komponenty w treści. next-mdx-remote. Contentlayer. Doskonały dla docs sites. Nx i Docusaurus używają MDX.",
  },
];

const richTextEditors = [
  { editor: "Tiptap", silnik: "ProseMirror", headless: "Tak", collaborative: "Hocuspocus (Y.js)", kiedy: "Aplikacje, flexible, Pro features" },
  { editor: "Lexical", silnik: "Custom (Meta)", headless: "Tak", collaborative: "Y.js adapter", kiedy: "React-native, Meta scale, new projects" },
  { editor: "Slate.js", silnik: "Custom (React)", headless: "Tak", collaborative: "Y.js plugin", kiedy: "Custom document model, flexible" },
  { editor: "TinyMCE", silnik: "Własny", headless: "Nie", collaborative: "TinyMCE Cloud", kiedy: "Non-technical users, enterprise CMS" },
  { editor: "CKEditor 5", silnik: "Własny", headless: "Nie", collaborative: "CKEditor Cloud", kiedy: "Enterprise WYSIWYG, Microsoft 365-like" },
  { editor: "CodeMirror 6", silnik: "Własny", headless: "Tak", collaborative: "Y-codemirror", kiedy: "Code editor, IDE-like, syntax highlighting" },
];

export default function BlogTiptapLexicalCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Tiptap, Lexical, Slate.js | Fotz Studio"
        description="Tiptap (ProseMirror, headless), Lexical (Meta/Facebook), Quill, Slate.js, TinyMCE — WYSIWYG editory React, Y.js collaborative editing, Hocuspocus i Liveblocks."
        canonicalUrl="https://fotz.pl/blog/tiptap-lexical-slate-rich-text-editor-react-collaborative-2024"

        keywords="Tiptap, Lexical, Slate.js co to jest, Tiptap, Lexical, Slate.js jak działa, Tiptap, Lexical, Slate.js tutorial, Tiptap, Lexical, Slate.js przykład, czym jest Tiptap, Lexical, Slate.js, Tiptap, Lexical, Slate.js dokumentacja, Tiptap, Lexical, Slate.js przewodnik"

        canonical="https://fotz.pl/blog/tiptap-lexical-slate-rich-text-editor-react-collaborative-2024"
      />
      <ArticleSchema
        title="Tiptap, Lexical, Slate.js — Rich Text Editors React i collaborative editing 2024?"
        description="6 edytorów rich text (Tiptap/Lexical/Slate.js/TinyMCE/CKEditor 5/CodeMirror) — headless, Y.js collaborative editing, Hocuspocus, Liveblocks i Markdown editory."
        url="https://fotz.pl/blog/tiptap-lexical-slate-rich-text-editor-react-collaborative-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Tiptap i Rich Text Editors", url: "https://fotz.pl/blog/tiptap-lexical-slate-rich-text-editor-react-collaborative-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Tiptap i Rich Text Editors", href: "/blog/tiptap-lexical-slate-rich-text-editor-react-collaborative-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Editors
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rich Text Editors w React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Tiptap (ProseMirror, headless), Lexical (Meta), Slate.js, Y.js collaborative editing
              z Hocuspocus i Liveblocks.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Headless", value: "Tiptap" },
                { label: "Meta/Facebook", value: "Lexical" },
                { label: "Collaborative", value: "Y.js + Hocus" },
                { label: "Code editor", value: "CodeMirror" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-orange-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 edytorów rich text dla React — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Tiptap, Lexical, Slate.js, TinyMCE, CKEditor 5 i CodeMirror —
              silnik, headless, collaborative i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Editor</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Silnik</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Headless</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Collaborative</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {richTextEditors.map((e, i) => (
                  <tr key={e.editor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{e.editor}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{e.silnik}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{e.headless}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{e.collaborative}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{e.kiedy}</td>
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

      <RelatedArticles currentArticleId="tiptap-lexical-slate-rich-text-editor-react-collaborative-2024" />
      <ContactSection />
    </Layout>
  );
}
