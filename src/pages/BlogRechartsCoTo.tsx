import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Recharts i jakie wykresy można tworzyć?",
    answer: "Recharts: React chart library oparta na D3. Deklaratywna (JSX). Responsive i animowana. Kompozycyjna architektura. Instalacja: npm install recharts. Typy wykresów: LineChart — linia. BarChart — słupki. AreaChart — powierzchnia. PieChart — kołowy. RadarChart — pajęczyna. ScatterChart — punkty. ComposedChart — mieszany. RadialBarChart — radialny. Treemap — drzewo. Funnel — lejek. Sankey — diagram przepływu (recharts 2.8+). Podstawowy LineChart: ResponsiveContainer width='100%' height={300}. LineChart data={data}. CartesianGrid. XAxis dataKey='name'. YAxis. Tooltip. Legend. Line type='monotone' dataKey='value'. Responsive: ResponsiveContainer — automatyczna szerokość/wysokość. Używaj zawsze w kontenerze o fixed height. Customizacja: stroke, fill, strokeWidth. Animacja: isAnimationActive={true}. animationDuration={300}. Własny Tooltip: content={CustomTooltip} komponent. CustomTooltip props: active, payload, label. Własna Legend: content={CustomLegend}. Dots: activeDot na Line — aktywny punkt. dot={CustomDot} — własny kształt punktu. Reference Lines: ReferenceLine y={average} stroke='red'. ReferenceLine x='Jan'. Brush: Brush dataKey='name' — zoom/pan. startIndex, endIndex. Multi-line: wiele Line w jednym LineChart. dataKey różne. strokeDasharray='5 5' — przerywana linia. TypeScript: dane typowane. import {LineChart, Line, XAxis, YAxis} from 'recharts'. Dane: type DataPoint = {name: string, value: number}. const data: DataPoint[] = [...].",
  },
  {
    question: "Nivo, Tremor i inne biblioteki wykresów w React?",
    answer: "Nivo (Raphaël Benitte, Ledger): bogata biblioteka wizualizacji. Oparta na D3 + React. SVG, Canvas, HTML. Server-side rendering (SVG). Storybook-driven dokumentacja. Typy: @nivo/line, @nivo/bar, @nivo/pie, @nivo/heatmap, @nivo/network, @nivo/geo, @nivo/treemap, @nivo/calendar, @nivo/waffle. Tree-shaking: installuj osobno (@nivo/bar ~120KB). Każdy typ oddzielnie. Nivo mocna strona: Network graph, Geo mapy, Calendar heatmap, Waffle chart — rzadkie wykresy. Pełna customizacja przez props. Tremor: dashboard UI library. tailwind-based. Card, AreaChart, BarChart, LineChart, DonutChart. Piękne domyślne style. Szybkie do użycia. Tremor v3 — nowa architektura. Kiedy: dashboards, analytics panels. Ograniczone opcje customizacji. Chart.js + react-chartjs-2: najpopularniejsza chart library. Canvas-based (wydajność). react-chartjs-2 jako React wrapper. import {Line} from 'react-chartjs-2'. Duży ekosystem pluginów. Apache ECharts + echarts-for-react: potężna, feature-rich. Zoomowanie, brushing. Thematic rivers, sunburst, sankey. Enterprise-grade. D3.js bezpośrednio: maksymalna elastyczność. Stroma krzywa uczenia. @visx (Airbnb): niski poziom, wysoka elastyczność. Primitives na D3. Composable. Dla zaawansowanych. Observable Plot (Mike Bostock): nowoczesna, deklaratywna. Doskonała dla exploratory viz. Vega-Lite: grammar of graphics. JSON specification. Altair-like. Wybór 2024: Recharts — prosto + React. Nivo — edge case charts. Tremor — dashboards. Chart.js — performance + plugins. D3/@visx — custom complex viz.",
  },
  {
    question: "D3.js w React — jak integrować bez konfliktów z DOM?",
    answer: "Problem D3 + React: oba chcą kontrolować DOM. D3 mutuje DOM bezpośrednio. React zarządza wirtualnym DOM. Konflikty przy re-renderach. Podejście 1 — D3 tylko do matematyki: używaj D3 funkcje (scale, path, layout) ale nie DOM manipulation. const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]). Renderuj z React JSX. Polecane dla nowych projektów. Podejście 2 — D3 zarządza własnym DOM: useRef na kontener. useEffect(() => {d3.select(ref.current).append('svg')...}). Dostęp przez ref, nie przez React. D3 animation i transitions działają. Podejście 3 — @visx: Airbnb's React + D3 primitives. Komponenty zamiast D3 API. import {LinePath, AreaClosed} from '@visx/shape'. import {scaleLinear} from '@visx/scale'. import {LinearGradient} from '@visx/gradient'. Skalowanie: d3.scaleLinear, d3.scaleTime, d3.scaleOrdinal. domain — input range. range — output range. d3.extent(data, d => d.date) — min/max. Path generators: d3.line().x(d => xScale(d.x)).y(d => yScale(d.y)). SVG path d attribute. d3.area() — area below line. Axis: d3.axisBottom(xScale). Najlepiej: React ref + useEffect + d3.axisBottom(). Responsive D3: useResizeObserver hook. ResizeObserver API. width/height z container. Aktualizuj scale.range przy resize. Tooltips: pozycjonowanie względem SVG. d3.pointer(event, svgElement). Konwersja do screen coordinates. Porównanie performance: SVG — dobry do ~1000 elementów. Canvas — dobry dla 10 000+ elementów. WebGL (pixi.js, three.js) — 100 000+ elementów.",
  },
  {
    question: "Mapy i geowizualizacje w React — react-leaflet, mapbox i deck.gl?",
    answer: "react-leaflet: React wrapper dla Leaflet. Open source tiles (OpenStreetMap). Komponenty: MapContainer, TileLayer, Marker, Popup, Polyline, Polygon, Circle. Marker z custom ikoną: icon={customIcon}. Clustering: react-leaflet-cluster. Heatmap: leaflet.heat. Choropleth: react-leaflet + GeoJSON + D3 color scale. Mapbox GL JS + react-map-gl: wektorowe kafelki. Płatny (free tier: 50 000 views/miesiąc). Lepszy rendering niż Leaflet. 3D building extrusion. Własny styling map. Bardzo duży bundle (~330KB). deck.gl (Uber): WebGL-based geovizualizacja. Miliony punktów danych. ScatterplotLayer, HexagonLayer, GridLayer, GeoJsonLayer, ArcLayer, PathLayer, IconLayer. Integracja z Mapbox. TripsLayer — animacja ruchu. H3 hexagony (Uber's H3). Google Maps: @react-google-maps/api. Places Autocomplete. Street View. Maps JavaScript API. Płatny (po free tier). MapLibre GL (fork Mapbox): open source alternative. Bez limitu zapytań. Kompatybilny z Mapbox style spec. react-map-gl działa z MapLibre. Svelte MapLibre: dla Svelte. Kepler.gl (Uber): open source data viz na mapach. Drag & drop CSV/GeoJSON. Wbudowane wizualizacje. Integracja React. GeoJSON vs TopoJSON: GeoJSON — standard, prosty. TopoJSON — mniejszy (współdzielone granice). topojson-client do konwersji. Projection: d3-geo projections. Mercator (WebMercator). Albers, Robinson, Orthographic. Carto (cloud platform): self-hosted tiles + analytics. Enterprise mapping.",
  },
  {
    question: "Real-time wykresy i duże zbiory danych w React?",
    answer: "Real-time charts wyzwania: częste aktualizacje danych. DOM re-render przy każdej zmianie. Frame drop poniżej 60 FPS. Akumulacja danych (memory leak). Strategie aktualizacji: useRef zamiast useState dla danych. Zmutuj ref, trigger render tylko dla widocznych zmian. requestAnimationFrame — synchronizacja z wyświetlaniem. Batching aktualizacji: React 18 automatic batching. Kilka setStates w jednym event -> jeden render. flushSync() jeśli potrzebujesz natychmiastowego. Canvas-based wykresy (szybsze niż SVG): Chart.js — Canvas. Apache ECharts — Canvas/SVG. react-stockcharts/lightweight-charts (trading): lightweight-charts (TradingView): trading charts. Canvas-based. Finansowe dane. Bardzo szybki (~40KB). SciCharts: ultra-fast WebGL charts. Finansowe/naukowe. Komercyjny. ECharts z webworker: renderowanie poza main thread. Sliding window pattern: const MAX_POINTS = 500. Gdy nowy punkt: data.shift() + data.push(). Unikaj akumulacji. Wirtualizacja danych: nie renderuj wszystkich punktów. Sampling: LTTB (Largest Triangle Three Buckets). Downsample.js. Zredukuj liczbę punktów zachowując kształt. WebSocket + Recharts: const [data, setData] = useState([]). ws.onmessage = (event) => {setData(prev => [...prev.slice(-100), JSON.parse(event.data)])}. Ograniczenie do 100 ostatnich punktów. Canvas API bezpośrednio: useRef(canvasRef). ctx.clearRect(0, 0, width, height). ctx.beginPath(). Dla maximal performance. Memoizacja: React.memo na komponentach wykresów. useMemo dla przetworzonych danych. Unikaj nowych obiektów przy każdym renderze.",
  },
];

const chartLibraries = [
  { biblioteka: "Recharts", engine: "SVG (D3)", bundle: "~140KB", ssr: "Tak", kiedy: "Prosta integracja React, dashboards, line/bar/area" },
  { biblioteka: "Nivo", engine: "SVG/Canvas/HTML", bundle: "Tree-shakeable", ssr: "Tak (SVG)", kiedy: "Network graph, heatmap, geo, calendar charts" },
  { biblioteka: "Tremor", engine: "SVG (Recharts)", bundle: "~50KB", ssr: "Tak", kiedy: "Szybkie dashboards, Tailwind projekty" },
  { biblioteka: "Chart.js (react-chartjs-2)", engine: "Canvas", bundle: "~200KB", ssr: "Ograniczone", kiedy: "Performance, duże datasets, plugins" },
  { biblioteka: "Apache ECharts", engine: "Canvas/SVG", bundle: "Tree-shakeable", ssr: "Tak", kiedy: "Enterprise, zaawansowane wykresy, Sankey" },
  { biblioteka: "@visx (Airbnb)", engine: "SVG (D3)", bundle: "Tree-shakeable", ssr: "Tak", kiedy: "Custom viz, niski poziom, max elastyczność" },
];

export default function BlogRechartsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Recharts, Nivo, Chart.js — wykresy i data visualization w React 2024 | Fotz.pl"
        description="Recharts, Nivo, Tremor, Chart.js (react-chartjs-2), Apache ECharts i @visx — line/bar/pie charts, mapy (react-leaflet, deck.gl) i real-time charts w React."
        canonicalUrl="https://fotz.pl/blog/recharts-nivo-chartjs-data-visualization-react-wykresy-mapy-2024"

        keywords="Recharts, Nivo, Chart.js co to jest, Recharts, Nivo, Chart.js jak działa, Recharts, Nivo, Chart.js tutorial, Recharts, Nivo, Chart.js przykład, czym jest Recharts, Nivo, Chart.js, Recharts, Nivo, Chart.js dokumentacja, Recharts, Nivo, Chart.js przewodnik"
      />
      <ArticleSchema
        title="Recharts, Nivo, Chart.js — wykresy i data visualization w React 2024?"
        description="6 bibliotek wykresów (Recharts/Nivo/Tremor/Chart.js/ECharts/@visx) — SVG vs Canvas, SSR, real-time charts, D3 integracja i mapy z react-leaflet i deck.gl."
        url="https://fotz.pl/blog/recharts-nivo-chartjs-data-visualization-react-wykresy-mapy-2024"
        datePublished="2024-04-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Recharts i Data Visualization", url: "https://fotz.pl/blog/recharts-nivo-chartjs-data-visualization-react-wykresy-mapy-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Recharts i Data Visualization", href: "/blog/recharts-nivo-chartjs-data-visualization-react-wykresy-mapy-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Data Visualization
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wykresy i Data Visualization w React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Recharts, Nivo, Tremor, Chart.js, Apache ECharts i D3/@visx —
              line/bar/area/pie charts, mapy i real-time visualization.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "JSX charts", value: "Recharts" },
                { label: "Edge charts", value: "Nivo" },
                { label: "Canvas speed", value: "Chart.js" },
                { label: "Custom viz", value: "@visx" },
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

      {/* Biblioteki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek wykresów w React — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Recharts, Nivo, Tremor, Chart.js, ECharts i @visx —
              engine renderowania, bundle, SSR i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Engine</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">SSR</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {chartLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.engine}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.bundle}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.ssr}</td>
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
