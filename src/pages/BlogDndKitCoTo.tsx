import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest dnd-kit i dlaczego zastąpił react-beautiful-dnd?",
    answer: "dnd-kit (Claudéric Demers, 2021): nowoczesna biblioteka drag and drop dla React. Modular, lightweight, accessibility-first. TypeScript-first. Nie zależy od DOM order (virtual list support). Brak deprecated API (react-beautiful-dnd używa legacy React API). react-beautiful-dnd (Atlassian): popularna ale wycofywana. Używa wycofanych React API (legacy context). Brak wsparcia dla wirtualizowanych list. Ostatni commit 2022. Atlassian migruje do Pragmatic Drag and Drop. dnd-kit instalacja: npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities. Pakiety: @dnd-kit/core — rdzeń (DndContext, sensors). @dnd-kit/sortable — sortable listy (useSortable). @dnd-kit/modifiers — constrainty (restrictToVerticalAxis). @dnd-kit/utilities — CSS transforms. Podstawowa architektura: DndContext — provider. useDraggable — element który można ciągnąć. useDroppable — miejsce upuszczenia. useSortable — element sortowalny (łączy oba). Sensors: MouseSensor, TouchSensor, KeyboardSensor. PointerSensor — recommended (mouse + touch). useSensor, useSensors. Accessibility: keyboard drag and drop wbudowany. ARIA announcements. Screen reader support. Zero visual focus trap issues.",
  },
  {
    question: "useSortable i SortableContext — jak sortować listy?",
    answer: "SortableContext: wrapper dla sortowalnych elementów. items prop — tablica id (strings). strategy — algorytm sortowania. import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable'. Strategie: verticalListSortingStrategy — pionowa lista. horizontalListSortingStrategy — pozioma. rectSortingStrategy — siatka (grid). rectSwappingStrategy — zamiana miejscami. useSortable hook: const {attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({id: item.id}). setNodeRef — ref na element. attributes — ARIA attributes. listeners — event handlers (onPointerDown etc). transform — CSS transform dla animacji. style: {transform: CSS.Transform.toString(transform), transition}. isDragging — czy aktualnie ciągnięty. DndContext handlers: onDragStart — start przeciągania. onDragOver — nad dropzone. onDragEnd — koniec. arrayMove: import {arrayMove} from '@dnd-kit/sortable'. onDragEnd: ({active, over}) => {if (active.id !== over?.id) {setItems(items => {const oldIndex = items.indexOf(active.id). const newIndex = items.indexOf(over.id). return arrayMove(items, oldIndex, newIndex)})})}. DragOverlay: komponent pokazywany podczas drag. Renderuj kopię elementu. import {DragOverlay} from '@dnd-kit/core'. Ghosting: opacity na isDragging element. Alternatywa: przeniesienie do DragOverlay i ukrycie oryginału.",
  },
  {
    question: "Kanban Board z dnd-kit — drag między kolumnami?",
    answer: "Kanban drag między kolumnami: każda kolumna to container. Droppable dla kolumn. Elementy mogą być przenoszone między kolumnami. Multi-container pattern: useDroppable na kolumnie. items: {[columnId]: Card[]}. Over prop w onDragOver — nad jakiej kolumnie. onDragOver: move item to target column (optimistically). onDragEnd: finalize position. Implementacja: type Column = {id: string, items: Item[]}. DndContext z onDragOver i onDragEnd. Każda kolumna: DroppableColumn komponent. SortableContext wewnątrz kolumny. items = column.items.map(i => i.id). onDragOver handler: const overId = over?.id. Sprawdź czy over to kolumna czy element. Jeśli element: znajdź jego kolumnę. Przesuń item do nowej kolumny. Aktualizuj state. Sortable między kolumnami: @dnd-kit/sortable SortableContext dla każdej kolumny. Strategy: verticalListSortingStrategy. Multi-container SortableContext. Przykłady: Trello-like board. Project management. Task management (Asana). Wirtualizacja z dnd-kit: @tanstack/react-virtual + dnd-kit. useSortable z virtualizer. Skomplikowane ale możliwe. Drag handle: drag tylko przez handle. setActivatorNodeRef dla handle elementu. attributes + listeners na handle button. Constrained drag: modifiers: [restrictToVerticalAxis, restrictToParentElement]. Brak wyjścia poza kontener. Drag distance threshold: PointerSensor z activationConstraint: {distance: 8}. Unikaj przypadkowych drag.",
  },
  {
    question: "Pragmatic Drag and Drop (Atlassian) — nowa generacja DnD?",
    answer: "Pragmatic Drag and Drop (Atlassian, 2024): następca react-beautiful-dnd. Framework-agnostic. Nie używa React API bezpośrednio. Bardzo niskopoziomowy. Doskonała wydajność. Używany w Jira, Confluence, Trello. Instalacja: npm install @atlaskit/pragmatic-drag-and-drop. Adaptory: @atlaskit/pragmatic-drag-and-drop-react-drop-indicator (React). Podejście: native browser drag and drop events. Brak React coupling. Mniejszy bundle niż dnd-kit dla złożonych przypadków. Kiedy dnd-kit: solidna, sprawdzona. Dobra dokumentacja. Sortable listy, kanban. Kiedy Pragmatic DnD: zaawansowane przypadki. Framework-agnostic. Atlassian apps. HTML5 Drag and Drop API (natywne): draggable='true' na elementach. onDragStart, onDragOver, onDrop events. Brak animacji. Brak touch support. Brak wirtualizacji. Proste use-case. react-dnd: starsza biblioteka (v16). Backend pattern (HTML5Backend, TouchBackend). Tightly coupled z React legacy. Brak aktywnego maintenance. use-gesture (@use-gesture/react): gesture library — drag, pinch, scroll, wheel. Nie tylko DnD. Dla custom gesture interactions. Kompatybilna z react-spring, Framer Motion. Brak sortable built-in. Połącz z własną sortable logikę. Dostępność DnD: keyboard navigation. ARIA live regions. Komunikaty o akcjach. dnd-kit — najlepsza dostępność. react-beautiful-dnd — dobra. HTML5 DnD — żadna.",
  },
  {
    question: "Drag and Drop w Next.js — server components i hydration?",
    answer: "DnD w Next.js App Router: DnD wymaga przeglądarki. DndContext musi być w Client Component. Cały Kanban board: 'use client'. Server Components dla static/data parts. Strategia: Server Component ładuje dane (karty, kolumny). Passes data do Client Component (KanbanBoard). Client Component ma DndContext. Problemy hydration: DnD library zwykle bezpieczna dla hydration. Unikaj window/document w SSR. Sprawdź: typeof window !== 'undefined'. PointerSensor na SSR: brak PointerEvent na serwerze. Lazy initialize sensors. SSR safe pattern: const [mounted, setMounted] = useState(false). useEffect(() => setMounted(true), []). if (!mounted) return Skeleton. Persist state po drag: optimistic updates. Server Action po onDragEnd. useOptimistic z React 19. Bez optimistic: loading state między drag i server response. Zustand persist: drag state w Zustand. Persist do localStorage. Wróć do stanu po odświeżeniu. Uwaga: hydration mismatch jeśli localStorage różni się od SSR. useIsMounted pattern do bezpiecznego init. Framer Motion + DnD: LayoutGroup dla smooth layout transitions. animate={true} na sortable items. layout prop na komponentach. Reorder komponent Framer Motion: import {Reorder} from 'framer-motion'. Reorder.Group — kontener. Reorder.Item — element. Proste sortowanie z animacją. Brak multi-container support. Lepsza animacja niż dnd-kit default. Kombinacja: dnd-kit logic + Framer Motion animation. AnimatePresence dla mount/unmount. Animate item do nowej pozycji.",
  },
];

const dndLibraries = [
  { biblioteka: "dnd-kit", api: "useSortable, DndContext", dostepnosc: "Doskonała (keyboard)", virtual: "Tak", bundle: "~26KB", kiedy: "Domyślny wybór 2024, sortable listy, kanban" },
  { biblioteka: "Pragmatic DnD", api: "Low-level, native events", dostepnosc: "Tak", virtual: "Tak", bundle: "~15KB", kiedy: "Atlassian apps, framework-agnostic, zaawansowane" },
  { biblioteka: "react-beautiful-dnd", api: "Draggable, Droppable", dostepnosc: "Dobra", virtual: "Nie", bundle: "~30KB", kiedy: "Legacy, migruj do dnd-kit" },
  { biblioteka: "react-dnd", api: "useDrag, useDrop", dostepnosc: "Słaba", virtual: "Ograniczone", bundle: "~25KB", kiedy: "Legacy, brak nowych projektów" },
  { biblioteka: "Framer Motion Reorder", api: "Reorder.Group/Item", dostepnosc: "Słaba", virtual: "Nie", bundle: "~50KB", kiedy: "Proste sortowanie z animacją" },
  { biblioteka: "@use-gesture", api: "useDrag, useGesture", dostepnosc: "Manualna", virtual: "Manualna", bundle: "~10KB", kiedy: "Custom gestures, nie sortable listy" },
];

export default function BlogDndKitCoTo() {
  return (
    <Layout>
      <SEOHead
        title="dnd-kit | Fotz Studio"
        description="dnd-kit (useSortable, DndContext, SortableContext), kanban drag między kolumnami, Pragmatic Drag and Drop (Atlassian) — porównanie bibliotek DnD dla React…"
        canonicalUrl="https://fotz.pl/blog/dnd-kit-drag-drop-react-sortable-kanban-pragmatic-dnd-2024"

        keywords="dnd-kit co to jest, dnd-kit jak działa, dnd-kit tutorial, dnd-kit przykład, czym jest dnd-kit, dnd-kit dokumentacja, dnd-kit przewodnik"

        canonical="https://fotz.pl/blog/dnd-kit-drag-drop-react-sortable-kanban-pragmatic-dnd-2024"
      />
      <ArticleSchema
        title="dnd-kit — Drag and Drop React, Kanban Board, SortableContext i Pragmatic DnD 2024?"
        description="6 bibliotek DnD (dnd-kit/Pragmatic DnD/react-beautiful-dnd/react-dnd/Framer Motion Reorder/@use-gesture) — sortable listy, kanban między kolumnami, Next.js hydration."
        url="https://fotz.pl/blog/dnd-kit-drag-drop-react-sortable-kanban-pragmatic-dnd-2024"
        datePublished="2024-04-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "dnd-kit Drag and Drop", url: "https://fotz.pl/blog/dnd-kit-drag-drop-react-sortable-kanban-pragmatic-dnd-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-fuchsia-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "dnd-kit Drag and Drop", href: "/blog/dnd-kit-drag-drop-react-sortable-kanban-pragmatic-dnd-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-fuchsia-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / UI Interactions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              dnd-kit i Drag and Drop w React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              dnd-kit (useSortable, DndContext), kanban drag między kolumnami,
              Pragmatic DnD (Atlassian) i DnD w Next.js App Router.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Modern DnD", value: "dnd-kit" },
                { label: "Sortable lists", value: "useSortable" },
                { label: "Atlassian", value: "Pragmatic DnD" },
                { label: "Accessible", value: "Keyboard nav" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-fuchsia-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek Drag and Drop dla React</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              dnd-kit, Pragmatic DnD, react-beautiful-dnd, react-dnd, Framer Motion Reorder i @use-gesture —
              API, dostępność, wirtualizacja i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">API</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Dostępność</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Virtual</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {dndLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs font-mono">{l.api}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.dostepnosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.virtual}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.bundle}</td>
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

      <RelatedArticles currentArticleId="dnd-kit-drag-drop-react-sortable-kanban-pragmatic-dnd-2024" />
      <ContactSection />
    </Layout>
  );
}
