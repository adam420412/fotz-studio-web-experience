import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest React Flow (xyflow) i do czego służy?",
    answer: "React Flow / @xyflow/react (2024 rebrand): biblioteka do node-based editors i diagramów. Interaktywne grafy z węzłami i krawędziami. Drag & drop węzłów. Zooming i panning. Edge routing. Custom nodes i edges. TypeScript. Zastosowania: workflow builders (n8n-like). Pipeline visualizers. Org charts. Mind maps. Decision trees. Entity Relationship Diagrams. State machine visualizers. AI agent flow builders. Instalacja: npm install @xyflow/react. ReactFlow component: import {ReactFlow, Background, Controls, MiniMap} from '@xyflow/react'. import '@xyflow/react/dist/style.css'. const nodes = [{id: '1', type: 'input', position: {x: 0, y: 0}, data: {label: 'Start'}}, {id: '2', position: {x: 200, y: 100}, data: {label: 'Process'}}]. const edges = [{id: 'e1-2', source: '1', target: '2', animated: true}]. ReactFlow nodes={nodes} edges={edges} fitView. Wbudowane node types: input — jeden handle (bottom). output — jeden handle (top). default — dwa handles. Handles: Handle type='source' position='right'. Handle type='target' position='left'. Wiele handles per node (custom). State: useState dla nodes i edges. onNodesChange — drag, select, remove. onEdgesChange — add, remove. applyNodeChanges, applyEdgeChanges. useReactFlow hook: getNodes(), getEdges(). setNodes(), setEdges(). fitView(), zoomIn(), zoomOut(). getViewport(). ReactFlow wbudowany w wiele narzędzi: n8n — open source automation. Retool — internal tools. Flowise — LLM workflows. Langflow — LangChain visual builder.",
  },
  {
    question: "Custom Nodes i Edges w React Flow — jak budować?",
    answer: "Custom Node: function CustomNode({data, selected}) {return div className={cn('border rounded p-4', selected && 'border-blue-500')} div {data.label} /div Handle type='target' position='top'. Handle type='source' position='bottom' /div}. Register: nodeTypes: {custom: CustomNode}. node: type: 'custom'. Data typing (TypeScript): type NodeData = {label: string, icon: string}. CustomNode props: NodeProps(NodeData). Custom Edge: function CustomEdge({sourceX, sourceY, targetX, targetY, markerEnd}) {const [edgePath] = getBezierPath({sourceX, sourceY, targetX, targetY}). return path d={edgePath} markerEnd={markerEnd}. (używaj EdgePath helpers)}. EdgeTypes: {custom: CustomEdge}. Edge label: EdgeLabelRenderer. EdgeLabel pozycjonowany absolutnie. foreignObject dla HTML w SVG edge. Dagre layout (automatyczne pozycjonowanie): npm install dagre. import dagre from '@dagrejs/dagre'. const dagreGraph = new dagre.graphlib.Graph(). dagreGraph.setDefaultEdgeLabel(() => {}). dagreGraph.setGraph({rankdir: 'TB'}). Dodaj nodes i edges do dagreGraph. dagreGraph.layout(). Pobierz pozycje: dagreGraph.node(node.id). Elk layout: @xyflow/elkjs. Zaawansowany layout (hierarchical, force-directed). getLayoutedElements helper. Controls: wbudowane (zoom in/out/reset). Kustomizowanie przez CSS. MiniMap: wbudowana miniatura. Kliknij aby nawigować. nodeColor, nodeStrokeColor props. Background: Background variant='dots' | 'lines' | 'cross'. Interaktywność: onConnect — connect nodes. isValidConnection — walidacja połączeń. deleteKeyCode — klawisz usuwania. multiSelectionKeyCode — multi select (shift). SelectionDragHandler.",
  },
  {
    question: "Mermaid.js — diagramy jako kod?",
    answer: "Mermaid.js: diagramy z tekstu/kodu. Markdown-friendly. Wiele typów diagramów. Używany w GitHub, GitLab, Notion, Confluence. Instalacja: npm install mermaid. import mermaid from 'mermaid'. mermaid.initialize({startOnLoad: true}). React + Mermaid: useRef + useEffect. mermaid.render('id', diagram).then(({svg}) => divRef.innerHTML = svg). react-mermaid2: component wrapper. Mermaid z rehype: rehype-mermaid plugin dla MDX/markdown. Typy diagramów: flowchart TD — flowchart top-down. graph LR — left-right graph. sequenceDiagram — sekwencje. classDiagram — klasy. erDiagram — entity relationship. stateDiagram-v2 — state machine. gantt — Gantt chart. pie — kołowy. gitGraph — git branching. quadrantChart — macierz. timeline — oś czasu. Flowchart syntax: flowchart TD. A[Start] --> B{Decision}. B -->|Yes| C[Do this]. B -->|No| D[Do that]. C --> E[End]. D --> E. Sequence: sequenceDiagram. Alice->>John: Hello. John-->>Alice: Great!. Mermaid Live Editor: mermaid.live — online editor. Real-time preview. Share diagrams. AI + Mermaid: GPT-4 generuje Mermaid diagrams. Opisz architekturę -> diagram. GitHub Copilot suggest. PlantUML: alternatywa. Java-based. UML-focused. Więcej typów (komponent, wdrożenie). Graphviz (DOT language): bardzo potężny. Automatyczny layout. Mniej user-friendly. Kiedy React Flow vs Mermaid: React Flow — interaktywne edytory. Mermaid — statyczne diagramy w dokumentacji. Mermaid — markdown-embeddable. React Flow — user-editable flows.",
  },
  {
    question: "React Flow w Next.js — server/client split i wydajność?",
    answer: "React Flow wymaga przeglądarki: DnD, touch events, DOM measurement. Musi być w Client Component. 'use client' na komponencie z ReactFlow. Wrapper pattern: ReactFlowProvider i ReactFlowWrapper jako client. Server Component ładuje dane (nodes, edges z DB). Passes do client FlowEditor. Large graphs wydajność: React Flow radzi sobie do ~1000 nodes. Powyżej: custom WebGL renderer. Sigma.js dla dużych grafów. Cytoscape.js dla zaawansowanych. Virtualizacja React Flow: brak wbudowanej. Nodes poza viewport nie są renderowane (CSS display:none). Ale nadal w DOM. Dagre vs ELK vs manual: Dagre — prosty, hierarchical. ELK — potężny, wiele algorytmów. Manual — maxymalna kontrola. Animacja krawędzi: animated: true — marching ants. CSS animation na edge path. Framer Motion dla custom edge animations. Persystencja stanu: JSON.stringify(nodes) + edges. LocalStorage lub DB. Wczytaj przy mount: reaktywuj pozycje. onSave callback -> POST /api/flow. Undo/Redo: useNodesStateSynced z historical state. lub zaimplementuj własny history stack. React Flow + Zustand: store nodes i edges w Zustand. Reakacja na store changes. Wiele komponentów może modyfikować flow. Export: toObject() — JSON serialization. toPng() / toSvg() — screenshot. html2canvas alternatywa. Real-world apps na React Flow: n8n — 2000+ stars workflow automation. Langflow — LangChain visual. Flowise — GPT flows. Retool — internal tools. BuildShip — API builder.",
  },
  {
    question: "Alternatywy dla React Flow — Cytoscape.js, Sigma.js i G6?",
    answer: "Cytoscape.js: potężna biblioteka grafów. Canvas + WebGL. Duże grafy (tysiące nodes). Wiele algorytmów layout: breadthfirst, circle, concentric, cose, dagre, elk. Styl przez CSS selector-like: cy.style('[type = \"output\"]').style({shape: 'round-rectangle'}). cytoscape-react: adapter. Dobry dla: network visualization, biology, social graphs. Sigma.js: WebGL renderer. Mega-scale grafy (miliony nodes). Gephi integration. graphology za grafikę matematyczną. Dla Data Science viz. G6 (Alibaba): comprehensive graph viz. Canvas + SVG. Wiele wbudowanych layouts. Rich interaction model. 3D support (G6 3D). Chińska dokumentacja ale angielska istnieje. Reagraph: React + WebGL graph viz. Nowoczesny API. 3D i 2D. Network analysis. vis.js Network: browser-based graph viz. Force-directed layout. Duży zestaw opcji. Interaktywny. Sprawdzone, dojrzałe. D3 Force simulation: d3.forceSimulation(). force-directed layout. Pełna kontrola ale manual. Najlepszy learning experience. Cola.js: constraint-based layout. Współdziała z D3 i Cytoscape. Kiedy React Flow: user-editable flows. Custom nodes z React UI. Workflow builders. Mała do średnia skala. Kiedy Cytoscape/Sigma: read-only visualization. Tysiące/miliony nodes. Performance critical. Data visualization. Kiedy Mermaid: statyczne diagramy. Dokumentacja. Markdown integration. Nie interaktywne.",
  },
];

const flowLibraries = [
  { biblioteka: "@xyflow/react (React Flow)", typ: "Node editor", scale: "do ~1000 nodes", interaktywnosc: "Pełna (DnD, connect)", kiedy: "Workflow builders, visual editors, AI flows" },
  { biblioteka: "Mermaid.js", typ: "Diagramy z kodu", scale: "Brak limitu (statyczne)", interaktywnosc: "Brak (tylko view)", kiedy: "Dokumentacja, markdown, statyczne diagramy" },
  { biblioteka: "Cytoscape.js", typ: "Graph viz (Canvas)", scale: "Tysiące nodes", interaktywnosc: "Tak (klik, zoom)", kiedy: "Sieci, biologia, social graphs" },
  { biblioteka: "Sigma.js", typ: "Graph viz (WebGL)", scale: "Miliony nodes", interaktywnosc: "Ograniczona", kiedy: "Data science, mega-scale grafów" },
  { biblioteka: "G6 (Alibaba)", typ: "Graph viz (Canvas+SVG)", scale: "Duże grafiki", interaktywnosc: "Rich interactions", kiedy: "Enterprise, 3D graphs, analytics" },
  { biblioteka: "D3 Force", typ: "Force-directed (SVG)", scale: "Kilkaset nodes", interaktywnosc: "Pełna (custom)", kiedy: "Custom network viz, learning, max control" },
];

export default function BlogReactFlowCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Flow (xyflow), Mermaid.js i Graph Visualization w React…"
        description="@xyflow/react (React Flow) — custom nodes/edges, dagre layout, workflow builders. Mermaid.js — diagramy z kodu. Cytoscape.js, Sigma.js i D3 Force — graph…"
        canonicalUrl="https://fotz.pl/blog/react-flow-xyflow-mermaid-graph-visualization-diagramy-react-2024"

        keywords="React Flow (xyflow), Mermaid.js i Graph Visualization w React 2024 co to jest, React Flow (xyflow), Mermaid.js i Graph Visualization w React 2024 jak działa, React Flow (xyflow), Mermaid.js i Graph Visualization w React 2024 tutorial, React Flow (xyflow), Mermaid.js i Graph Visualization w React 2024 przykład, czym jest React Flow (xyflow), Mermaid.js i Graph Visualization w React 2024, React Flow (xyflow), Mermaid.js i Graph Visualization w React 2024 dokumentacja, React Flow (xyflow), Mermaid.js i Graph Visualization w React 2024 przewodnik"

        canonical="https://fotz.pl/blog/react-flow-xyflow-mermaid-graph-visualization-diagramy-react-2024"
      />
      <ArticleSchema
        title="React Flow (xyflow), Mermaid.js i Graph Visualization w React 2024?"
        description="6 bibliotek graph viz (React Flow/Mermaid/Cytoscape/Sigma/G6/D3 Force) — node editors, custom nodes, dagre layout, workflow builders i Next.js integration."
        url="https://fotz.pl/blog/react-flow-xyflow-mermaid-graph-visualization-diagramy-react-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Flow i Graph Viz", url: "https://fotz.pl/blog/react-flow-xyflow-mermaid-graph-visualization-diagramy-react-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "React Flow i Graph Viz", href: "/blog/react-flow-xyflow-mermaid-graph-visualization-diagramy-react-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Visualization
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Flow i Graph Visualization
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              @xyflow/react (node editors, custom nodes, dagre layout), Mermaid.js (diagramy z kodu)
              i Cytoscape.js/Sigma.js dla dużych grafów.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Node editors", value: "React Flow" },
                { label: "Docs diagrams", value: "Mermaid.js" },
                { label: "Large graphs", value: "Cytoscape.js" },
                { label: "Mega-scale", value: "Sigma.js" },
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

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek graph visualization — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              React Flow, Mermaid.js, Cytoscape.js, Sigma.js, G6 i D3 Force —
              typ, skala, interaktywność i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Skala</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Interaktywność</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {flowLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.scale}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.interaktywnosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{l.kiedy}</td>
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

      <ContactSection />
    </Layout>
  );
}
