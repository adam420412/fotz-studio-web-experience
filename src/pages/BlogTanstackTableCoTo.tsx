import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest TanStack Table (react-table v8) i jak działa?",
    answer: "TanStack Table (react-table v8, Tanner Linsley): headless table library. Brak domyślnego UI — tylko logika. Kompatybilny z React, Vue, Solid, Svelte, Vanilla JS. Core: useReactTable hook (React adapter). columnDefs — definicje kolumn. data — dane wierszy. getCoreRowModel(). Podstawowe użycie: import {useReactTable, createColumnHelper, getCoreRowModel, flexRender} from '@tanstack/react-table'. const columnHelper = createColumnHelper(). const columns = [columnHelper.accessor('name', {header: 'Name', cell: info => info.getValue()}), columnHelper.accessor('age', {header: 'Age'})]. const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()}). Render: table.getHeaderGroups(). table.getRowModel().rows. flexRender(cell.column.columnDef.cell, cell.getContext()). Features (plug-in model): sorting: getSortedRowModel(). filtering: getFilteredRowModel(). pagination: getPaginationRowModel(). column visibility. column ordering. row selection. row expansion. column pinning. faceting. Global filter: import {getFilteredRowModel} from '@tanstack/react-table'. state: {globalFilter}. onGlobalFilterChange. Headless pattern: TanStack Table daje state i logikę. Ty budujesz HTML/JSX. Możesz użyć dowolny CSS. Tailwind, shadcn/ui, MUI — kompatybilne. TypeScript: createColumnHelper generyczny. Kolumny mają pełne typy. Cell values typed automatycznie.",
  },
  {
    question: "Sortowanie, filtrowanie i paginacja w TanStack Table?",
    answer: "Sortowanie: const [sorting, setSorting] = useState([]). getSortedRowModel(). state: {sorting}. onSortingChange: setSorting. column.getToggleSortingHandler() na header click. column.getIsSorted() — 'asc' | 'desc' | false. Multi-sort: shiftKey + click. enableMultiSort: true. Filtrowanie column-level: getFilteredRowModel(). column.getFilterValue(). column.setFilterValue(value). input onChange={e => column.setFilterValue(e.target.value)}. Filtry custom: filterFns — własna logika. includesString, fuzzy, rangeMin, rangeMax. facetedUniqueValues() — unikalne wartości kolumny dla select filter. Global filter: onGlobalFilterChange. globalFilter w state. Wszystkie kolumny przeszukane. Paginacja: getPaginationRowModel(). state: {pagination}. onPaginationChange. table.previousPage(), table.nextPage(). table.getCanPreviousPage(). table.getPageCount(). table.setPageSize(10). pageIndex + pageSize w state. Manual pagination (server-side): manualPagination: true. pageCount: totalPages. pageIndex -> fetch page from server. rowCount: total count. Wirtualizacja: @tanstack/react-virtual + TanStack Table. const rowVirtualizer = useVirtualizer({count: rows.length, getScrollElement: () => tableContainerRef.current, estimateSize: () => 35, overscan: 20}). Renderuj tylko visible rows. 10 000+ wierszy bez lagów. Sorting + Filtering server-side: manualSorting: true. manualFiltering: true. useEffect(() => fetchData(sorting, filters)). Debounce filter input.",
  },
  {
    question: "AG Grid vs TanStack Table vs MUI DataGrid — co wybrać?",
    answer: "TanStack Table (react-table v8): headless — zero UI. Maksymalna elastyczność. Darmowy, open source. Wymaga własnego UI. Doskonały z Tailwind/shadcn. Nie ma built-in wirtualizacji (potrzebuje react-virtual). Idealny: projekty z custom design. AG Grid Community: najbardziej zaawansowana open source. Wbudowane: sorting, filtering, paginacja, row grouping, pivoting, tree data, wirtualizacja. Własne UI (AG Theme). Rozmiar: cięższa biblioteka. AG Grid Enterprise: płatna. Range selection, Excel export, server-side row model, advanced pivoting. Kiedy: enterprise dashboards, heavy data. MUI DataGrid (darmowy): Material UI data table. Sorting, filtering, paginacja. Pro (płatny): row grouping, Excel export, tree data. Dobrze integruje się z MUI ecosystem. Kiedy: projekty MUI. Tanstack Virtual: react-window successor. Wirtualizacja list i tabeli. useVirtualizer hook. Kompatybilny z TanStack Table. react-window / react-virtualized: starsze, react-window prostszy. Mniej feature-rich. Row Virtualization threshold: powyżej 100 wierszy rozważ wirtualizację. Powyżej 1000 — konieczna. Data Table z shadcn/ui: shadcn/ui Data Table = TanStack Table + shadcn UI. Dokumentacja shadcn: gotowy przepis. Column visibility, sorting, filtering. Doskonały starting point. Tabele porównawcze: pnpm dlx shadcn-ui@latest add table. Następnie TanStack Table + custom columns.",
  },
  {
    question: "Zaawansowane feature'y tabel — row selection, expansion i column pinning?",
    answer: "Row Selection: enableRowSelection: true lub fn. state: {rowSelection}. onRowSelectionChange. row.getIsSelected(). row.getToggleSelectedHandler(). table.getSelectedRowModel(). Header checkbox: table.getIsAllPageRowsSelected(). table.toggleAllPageRowsSelected(). Indeterminate state dla partial selection. Expanded Rows: getExpandedRowModel(). row.getIsExpanded(). row.getToggleExpandedHandler(). row.subRows — nested rows. renderSubComponent({row}) — custom expansion. Custom Cell Rendering: columnHelper.accessor('status', {cell: ({getValue}) => {const status = getValue(); return span className={status === 'active' ? 'text-green-500' : 'text-red-500'}}}). Ikony, badges, akce w komórkach. Column Resizing: enableColumnResizing: true. columnResizeMode: 'onChange' | 'onEnd'. header: {column.getResizerElement()}. Column.getSize() do szerokości CSS. Column Pinning: column.pin('left' | 'right' | false). table.getLeftHeaderGroups(). table.getCenterHeaderGroups(). table.getRightHeaderGroups(). Sticky kolumny: CSS sticky + z-index. Left frozen columns dla ID/checkbox. Column Visibility: table.getAllColumns(). column.getIsVisible(). column.toggleVisibility(). Dropdown menu do zarządzania kolumnami. Column Ordering: setColumnOrder([...ids]). Drag and drop ordering. dnd-kit + TanStack Table. Row Grouping (AG Grid feature): TanStack Table — manual z row expansion. AG Grid Community — built-in. Eksport CSV: table.getFilteredRowModel().rows. reduce do CSV string. Download Blob. Lub xlsx + ExcelJS dla XLSX.",
  },
  {
    question: "Data tables w Next.js — server-side data fetching i URL state?",
    answer: "URL State dla tabeli (nuqs library): import {useQueryState, parseAsInteger, parseAsString} from 'nuqs'. const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(0)). const [search, setSearch] = useQueryState('q'). const [sort, setSort] = useQueryState('sort'). URL: /users?page=2&q=adam&sort=name. Shareable URL, browser history, refresh safe. nuqs: React, Next.js App Router, Remix, Vite. Server-side data fetching (Next.js App Router): async function UsersPage({searchParams}) {const {page = 0, q = '', sort = 'name'} = searchParams. const users = await db.user.findMany({skip: page * 10, take: 10, where: {name: {contains: q}}, orderBy: {[sort]: 'asc'}}). return DataTable({data: users})}. Client-side search z debounce: useDebounce(searchValue, 300). TanStack Query dla refetch: useQuery({queryKey: ['users', page, search, sort], queryFn: () => fetchUsers({page, search, sort})}). Infinite loading: useInfiniteQuery. fetchNextPage przy scroll do dołu. IntersectionObserver lub @tanstack/react-virtual. React Query DevTools: podgląd stanu queries. Sprawdź cache hits. Deduplication. Stale time konfiguracja. shadcn/ui + TanStack Table recipe: pnpm dlx shadcn-ui@latest add data-table. Gotowe: DataTable, DataTableColumnHeader, DataTableFacetedFilter, DataTablePagination, DataTableViewOptions. Najlepszy starting point dla enterprise table.",
  },
];

const tableLibraries = [
  { biblioteka: "TanStack Table (v8)", typ: "Headless", bundle: "~14KB", wirtualizacja: "Z react-virtual", price: "Darmowy", kiedy: "Custom design, max elastyczność" },
  { biblioteka: "AG Grid Community", typ: "Full-featured", bundle: "~300KB", wirtualizacja: "Wbudowana", price: "Darmowy", kiedy: "Enterprise, heavy data, pivot" },
  { biblioteka: "AG Grid Enterprise", typ: "Full-featured+", bundle: "~400KB", wirtualizacja: "Wbudowana+", price: "Płatny", kiedy: "Enterprise + Excel export, tree data" },
  { biblioteka: "MUI DataGrid", typ: "Komponentowy", bundle: "~120KB", wirtualizacja: "Tak", price: "Free/Pro", kiedy: "MUI projekty, Material Design" },
  { biblioteka: "Glide Data Grid", typ: "Canvas-based", bundle: "~80KB", wirtualizacja: "Canvas native", price: "Darmowy", kiedy: "Spreadsheet-like, 1M+ wierszy" },
  { biblioteka: "React Virtuoso", typ: "Wirtualizacja list", bundle: "~20KB", wirtualizacja: "Rdzeń", price: "Darmowy", kiedy: "Nieskończone listy, chat, feed" },
];

export default function BlogTanstackTableCoTo() {
  return (
    <Layout>
      <SEOHead
        title="TanStack Table, AG Grid i React Data Tables | Fotz Studio"
        description="TanStack Table (react-table v8), AG Grid, MUI DataGrid — sorting, filtering, pagination, row selection, column pinning, wirtualizacja i server-side data w…"
        canonicalUrl="https://fotz.pl/blog/tanstack-table-ag-grid-react-data-tables-sortowanie-filtrowanie-wirtualizacja-2024"

        keywords="TanStack Table, AG Grid i React Data Tables co to jest, TanStack Table, AG Grid i React Data Tables jak działa, TanStack Table, AG Grid i React Data Tables tutorial, TanStack Table, AG Grid i React Data Tables przykład, czym jest TanStack Table, AG Grid i React Data Tables, TanStack Table, AG Grid i React Data Tables dokumentacja, TanStack Table, AG Grid i React Data Tables przewodnik"

        canonical="https://fotz.pl/blog/tanstack-table-ag-grid-react-data-tables-sortowanie-filtrowanie-wirtualizacja-2024"
      />
      <ArticleSchema
        title="TanStack Table, AG Grid i React Data Tables — sortowanie, filtrowanie, wirtualizacja 2024?"
        description="6 bibliotek tabel (TanStack Table/AG Grid Community/AG Grid Enterprise/MUI DataGrid/Glide/React Virtuoso) — headless vs full-featured, wirtualizacja i Next.js integration."
        url="https://fotz.pl/blog/tanstack-table-ag-grid-react-data-tables-sortowanie-filtrowanie-wirtualizacja-2024"
        datePublished="2024-04-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TanStack Table i Data Grids", url: "https://fotz.pl/blog/tanstack-table-ag-grid-react-data-tables-sortowanie-filtrowanie-wirtualizacja-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "TanStack Table i Data Grids", url: "/blog/tanstack-table-ag-grid-react-data-tables-sortowanie-filtrowanie-wirtualizacja-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-amber-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Data
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TanStack Table i React Data Grids
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              TanStack Table (headless), AG Grid, MUI DataGrid — sorting, filtering,
              paginacja, row selection, wirtualizacja i server-side Next.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Headless UI", value: "TanStack Table" },
                { label: "Enterprise grid", value: "AG Grid" },
                { label: "Virtual rows", value: "react-virtual" },
                { label: "URL state", value: "nuqs" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-amber-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek tabel React — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              TanStack Table, AG Grid, MUI DataGrid, Glide i React Virtuoso —
              typ, bundle, wirtualizacja i cena.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wirtualizacja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cena</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {tableLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.bundle}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.wirtualizacja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.price}</td>
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

      <RelatedArticles currentArticleId="tanstack-table-ag-grid-react-data-tables-sortowanie-filtrowanie-wirtualizacja-2024" />
      <ContactSection />
    </Layout>
  );
}
