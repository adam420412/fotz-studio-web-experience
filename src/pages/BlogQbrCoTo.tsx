import { Link } from "react-router-dom";
import { ArrowRight, Calendar, CheckCircle2, ChevronRight, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const seoTitle = "QBR — co to jest? Quarterly Business Review 2026 | FOTZ";
const seoDescription = "QBR (Quarterly Business Review): definicja, agenda, KPI i rola zespołu. Sprawdź, jak przygotować kwartalny przegląd z klientem lub partnerem — 2026.";
const canonicalUrl = "https://www.fotz-studio.pl/blog/qbr-co-to";
const pageTitle = "QBR — co to jest? Quarterly Business Review w praktyce";

const articleData = {
  headline: pageTitle,
  description: seoDescription,
  url: canonicalUrl,
  image: "https://www.fotz-studio.pl/og-image.jpg",
  datePublished: "2024-01-17",
  dateModified: "2026-11-12",
  author: "Fotz Studio",
};

const breadcrumbs = [
  { name: "Strona główna", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "QBR — Quarterly Business Review", url: canonicalUrl },
];

const comparison = [
  {
    type: "QBR",
    horizon: "Kwartalny i strategiczny",
    subject: "Cele biznesowe, rezultaty, ryzyka, decyzje i plan na kolejny okres",
    participants: "Osoby odpowiedzialne za współpracę oraz potrzebni decydenci",
  },
  {
    type: "Status call",
    horizon: "Bieżący i operacyjny",
    subject: "Zadania, blokery, zgłoszenia i najbliższe terminy",
    participants: "Zespół wykonawczy i osoby bezpośrednio prowadzące prace",
  },
  {
    type: "EBR",
    horizon: "Zwykle szerszy niż jeden kwartał",
    subject: "Priorytety kierownictwa, kierunek współpracy i decyzje sponsorskie",
    participants: "Sponsorzy i przedstawiciele kierownictwa obu stron",
  },
];

const preparationSteps = [
  {
    id: "cel",
    title: "1. Ustal cel i decyzje do podjęcia",
    text: "Zapisz, co ma być inne po spotkaniu: zaktualizowane cele, decyzja o zakresie, plan usunięcia bariery albo uzgodnienie priorytetów. Nie zaczynaj od układania slajdów. Najpierw określ pytania wymagające wspólnej odpowiedzi i wskaż osoby, które mogą zatwierdzić ustalenia.",
  },
  {
    id: "dane",
    title: "2. Zbierz porównywalne dane i kontekst",
    text: "Wybierz ten sam zakres czasu, definicje wskaźników i źródła danych dla obu stron. Zestaw ustalenia z poprzedniego przeglądu, wyniki, adopcję, jakość obsługi i otwarte działania. Oddziel fakty od interpretacji, oznacz braki i nie uzupełniaj ich przykładowymi liczbami przedstawianymi jako wynik klienta.",
  },
  {
    id: "wnioski",
    title: "3. Przełóż metryki na wnioski",
    text: "Przy każdej liczbie zapisz, co zmieniło się względem celu, co może wyjaśniać zmianę i czego jeszcze nie wiadomo. ROI omawiaj tylko wtedy, gdy znasz koszt oraz sposób oszacowania wartości. Jeśli zależność jest jedynie hipotezą, nazwij ją hipotezą i ustal sposób weryfikacji.",
  },
  {
    id: "pre-read",
    title: "4. Wyślij krótki pre-read i agendę",
    text: "Przed spotkaniem przekaż cel, agendę, najważniejsze dane, listę decyzji i nierozwiązane kwestie. Pre-read ma ograniczać czytanie prezentacji na żywo, a nie przenosić całej rozmowy do dokumentu. Ustal termin przekazania materiału z uczestnikami i wskaż fragmenty wymagające ich przygotowania.",
  },
  {
    id: "role",
    title: "5. Przydziel role i przygotuj notatkę",
    text: "Wybierz prowadzącego, właścicieli poszczególnych danych, osobę zapisującą decyzje oraz moderatora czasu. Przygotuj pustą tabelę działań z polami: decyzja, zadanie, właściciel, termin i kryterium ukończenia. Dzięki temu ustalenia powstają podczas rozmowy, a nie dopiero po niej.",
  },
];

const qbrAgenda = [
  {
    time: "5 min",
    title: "Otwarcie i potwierdzenie celu",
    description: "Przypomnij oczekiwany rezultat, sprawdź uczestników i uzgodnij, czy agenda nadal odpowiada priorytetom obu stron.",
    result: "Wspólny cel spotkania i potwierdzona kolejność tematów.",
  },
  {
    time: "10 min",
    title: "Zmiany w biznesie i celach klienta",
    description: "Omów nowe priorytety, ograniczenia i wydarzenia, które mogą zmienić sens dotychczasowych założeń.",
    result: "Aktualny kontekst zamiast analizy oderwanej od sytuacji firmy.",
  },
  {
    time: "15 min",
    title: "Wyniki względem uzgodnionych celów",
    description: "Przejdź przez KPI, zrealizowane działania i rezultaty. Pokaż dane oraz ich źródła, oddzielając wynik od jego interpretacji.",
    result: "Lista potwierdzonych rezultatów i obszarów wymagających wyjaśnienia.",
  },
  {
    time: "10 min",
    title: "Wyzwania, ryzyka i feedback",
    description: "Nazwij bariery po obu stronach, niedomknięte zgłoszenia i ryzyka. Zbierz także uwagi klienta o jakości współpracy.",
    result: "Priorytet problemów bez pomijania niewygodnych tematów.",
  },
  {
    time: "10 min",
    title: "Możliwości i potrzebne decyzje",
    description: "Przedyskutuj zmiany zakresu, usprawnienia, rozwój współpracy lub roadmapę wyłącznie w odniesieniu do potrzeb klienta.",
    result: "Opcje działania wraz z warunkami i ograniczeniami.",
  },
  {
    time: "15 min",
    title: "Plan na kolejny kwartał",
    description: "Ustal cele, działania, zasoby i zależności. Zapisz, co należy do dostawcy, co do klienta i co wymaga decyzji innych osób.",
    result: "Realistyczny plan z odpowiedzialnością po obu stronach.",
  },
  {
    time: "10 min",
    title: "Podsumowanie i następne kroki",
    description: "Odczytaj decyzje, właścicieli i terminy, wskaż nierozwiązane kwestie oraz ustal sposób kontroli postępu.",
    result: "Zamknięta lista ustaleń i jasny sposób follow-upu.",
  },
];

const metricGroups = [
  {
    title: "Rezultaty biznesowe",
    metrics: "Cele klienta, zrealizowane rezultaty, oszczędność czasu, wpływ na proces, koszt i ROI — jeśli metoda obliczenia jest udokumentowana.",
    question: "Czy współpraca przybliża uzgodniony cel i skąd wiadomo?",
  },
  {
    title: "Adopcja i użytkowanie",
    metrics: "Zakres wdrożenia, aktywni użytkownicy, wykorzystanie funkcji, ukończenie onboardingu i zmiana względem wcześniejszego okresu.",
    question: "Kto korzysta z rozwiązania, gdzie są bariery i dlaczego?",
  },
  {
    title: "Jakość i obsługa",
    metrics: "Czas reakcji, zgodność z ustalonym SLA, powtarzalność zgłoszeń, CSAT lub NPS oraz status działań naprawczych.",
    question: "Co utrudnia oczekiwaną wartość i które problemy się powtarzają?",
  },
  {
    title: "Relacja i organizacja",
    metrics: "Zaangażowanie sponsora, kompletność mapy interesariuszy, udział właściwych osób i jakość komunikacji między zespołami.",
    question: "Czy współpraca ma właścicieli i warunki do podejmowania decyzji?",
  },
  {
    title: "Aspekty komercyjne",
    metrics: "Data odnowienia, zakres umowy, uzasadnione możliwości rozszerzenia i ryzyka zależne od budżetu lub zmian organizacyjnych.",
    question: "Jakie warunki wpływają na kontynuację lub zmianę współpracy?",
  },
  {
    title: "Jakość samego przeglądu",
    metrics: "Zrealizowane decyzje, działania zamknięte przed kolejnym spotkaniem, czas przygotowania i ocena przydatności przez uczestników.",
    question: "Czy przegląd prowadzi do ustaleń, zamiast powtarzać poprzednią prezentację?",
  },
];

const mistakes = [
  {
    title: "Prezentacja produktu zamiast rozmowy o celach",
    correction: "Zacznij od priorytetów klienta. Funkcję lub działanie omawiaj dopiero po powiązaniu jej z konkretnym rezultatem albo barierą.",
  },
  {
    title: "Liczby bez źródła, okresu i definicji",
    correction: "Przy każdym KPI podaj zakres dat, źródło i sposób liczenia. Nie porównuj okresów ani kont o odmiennych definicjach bez wyjaśnienia.",
  },
  {
    title: "Brak osób potrzebnych do decyzji",
    correction: "Przed terminem ustal, kto zatwierdza planowany temat. Jeżeli decyzja nie jest celem spotkania, nie przedstawiaj obecności kierownictwa jako obowiązkowej reguły.",
  },
  {
    title: "Omawianie wyłącznie sukcesów albo problemów",
    correction: "Pokaż zarówno zrealizowane cele, jak i nierozwiązane trudności. Do każdego istotnego problemu dodaj właściciela dalszej diagnozy lub działania.",
  },
  {
    title: "Monolog i zbyt obszerna prezentacja",
    correction: "Wysyłaj dane wcześniej, zostaw przestrzeń na pytania i ogranicz slajdy do materiału potrzebnego do decyzji. Tempo dopasuj do liczby tematów.",
  },
  {
    title: "Ustalenia bez właściciela i kontroli",
    correction: "Zapisuj zadanie, osobę odpowiedzialną, termin i dowód ukończenia. Następny przegląd rozpocznij od sprawdzenia wcześniejszych zobowiązań.",
  },
];

const faqItems = [
  {
    id: "definicja",
    question: "Co oznacza skrót QBR?",
    answer: "QBR oznacza Quarterly Business Review, czyli kwartalny przegląd biznesowy. W tym poradniku jest to cykliczne spotkanie dostawcy z klientem lub partnerem, na którym strony analizują cele, wyniki, ryzyka i dalsze działania. W innych kontekstach skrót bywa rozwijany jako Quality Business Review, dlatego zawsze warto sprawdzić znaczenie użyte w konkretnej organizacji.",
  },
  {
    id: "cel",
    question: "Jaki jest cel QBR i jakie korzyści może dać?",
    answer: "Celem jest wspólna ocena współpracy i uzgodnienie kolejnych decyzji na podstawie danych oraz kontekstu biznesowego. Przegląd może porządkować odpowiedzialność, ujawniać bariery i pomagać w planowaniu, ale samo spotkanie nie gwarantuje odnowienia umowy, wzrostu przychodu ani poprawy retencji. Efekt zależy m.in. od przygotowania, jakości ustaleń i wykonania działań.",
  },
  {
    id: "uczestnicy",
    question: "Kto powinien uczestniczyć w QBR i kto go prowadzi?",
    answer: "Zwykle uczestniczą osoba prowadząca relację, np. Customer Success Manager lub Account Manager, oraz odpowiedzialny kontakt po stronie klienta. Skład uzupełniają właściciele danych, eksperci i decydenci potrzebni przy konkretnej agendzie. Sponsor lub osoba z kierownictwa jest istotna przy decyzjach strategicznych, lecz nie ma jednej obowiązkowej listy stanowisk dla każdej firmy.",
  },
  {
    id: "czestotliwosc",
    question: "Jak często organizować QBR i ile powinno trwać?",
    answer: "Nazwa wskazuje cykl kwartalny, ale częstotliwość warto dopasować do tempa współpracy, złożoności i potrzeb obu stron. W niektórych organizacjach przegląd strategiczny odbywa się rzadziej, a statusy uzupełniają go częściej. Przykładowa agenda w tym poradniku obejmuje 75 minut; nie jest to sztywna norma. Czas powinien wynikać z liczby decyzji, uczestników i zakresu danych.",
  },
  {
    id: "status-call",
    question: "Czym QBR różni się od status calla?",
    answer: "Status call koncentruje się na bieżących zadaniach, blokadach i terminach, a kwartalny przegląd biznesowy patrzy szerzej: na cele klienta, rezultaty, wartość współpracy, ryzyka i plan na następny okres. To różnica perspektywy, nie prestiżu spotkania. Obie formy mogą współistnieć, jeśli każda ma własny cel i nie powtarza bez potrzeby tych samych tematów.",
  },
  {
    id: "kpi",
    question: "Jakie metryki i KPI omawiać podczas QBR?",
    answer: "Dobierz KPI do celu klienta i modelu współpracy. Mogą to być rezultaty biznesowe, adopcja, jakość obsługi, zaangażowanie interesariuszy, terminy umowne i realizacja wcześniejszych działań. Zawsze podaj źródło, okres i definicję metryki. Wskaźniki aktywności, takie jak liczba spotkań, nie powinny zastępować oceny rezultatu ani jakości podjętych decyzji.",
  },
  {
    id: "przygotowanie",
    question: "Jak przygotować pierwszy QBR?",
    answer: "Zacznij od rozmowy o oczekiwaniach i wspólnej definicji sukcesu. Ustal, jakie dane są dostępne, kto może decydować i które pytania wymagają odpowiedzi. Następnie przygotuj prostą agendę, krótki pre-read oraz tabelę ustaleń. Pierwszy przegląd może dokumentować punkt odniesienia; nie musi zawierać pełnej historii ani wszystkich możliwych wskaźników.",
  },
  {
    id: "skutecznosc",
    question: "Jak oceniać jakość QBR bez przypisywania mu cudzych wyników?",
    answer: "Sprawdzaj, czy uczestnicy potwierdzili decyzje, czy działania mają właścicieli i terminy oraz ile zobowiązań zamknięto przed kolejnym przeglądem. Możesz też badać przydatność spotkania i czas przygotowania. Zmiany przychodu, retencji lub satysfakcji analizuj szerzej, z uwzględnieniem innych działań i warunków; nie przypisuj ich automatycznie jednemu spotkaniu.",
  },
];

export default function BlogQbrCoTo() {
  return (
    <Layout workPlacement="after-main">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        ogType="article"
      />
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqItems} />

      <article id="article-content" className="bg-white text-slate-800">
        <header className="bg-slate-950 text-white">
          <div className="mx-auto max-w-4xl px-4 pb-14 pt-28 md:px-6 md:pb-16 md:pt-32">
            <nav aria-label="Okruszki" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
              <Link to="/" className="hover:text-yellow-400">Strona główna</Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="text-slate-200">QBR</span>
            </nav>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow-400">Definicja, agenda i praktyka — aktualizacja 2026</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{pageTitle}</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Dowiedz się, czym jest kwartalny przegląd biznesowy, kogo zaprosić, jakie KPI wybrać i jak zakończyć spotkanie konkretnym planem zamiast samą prezentacją.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-2"><User className="h-4 w-4" aria-hidden="true" /> Zespół FOTZ</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" aria-hidden="true" /> Opublikowano: 17 stycznia 2024</span>
              <span>Aktualizacja: 12 listopada 2026</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
          <nav aria-labelledby="spis-tresci" className="mb-14 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 id="spis-tresci" className="mb-5 text-2xl font-bold text-slate-950">W tym poradniku</h2>
            <ol className="grid gap-3 text-slate-700 md:grid-cols-2">
              <li><a href="#definicja" className="hover:text-yellow-700 hover:underline">Definicja i cel przeglądu</a></li>
              <li><a href="#porownanie" className="hover:text-yellow-700 hover:underline">QBR, status call i EBR</a></li>
              <li><a href="#przygotowanie" className="hover:text-yellow-700 hover:underline">Przygotowanie krok po kroku</a></li>
              <li><a href="#agenda" className="hover:text-yellow-700 hover:underline">Przykładowa agenda 75 minut</a></li>
              <li><a href="#metryki" className="hover:text-yellow-700 hover:underline">Metryki i KPI</a></li>
              <li><a href="#po-spotkaniu" className="hover:text-yellow-700 hover:underline">Notatka i follow-up</a></li>
              <li><a href="#bledy" className="hover:text-yellow-700 hover:underline">Najczęstsze błędy</a></li>
              <li><a href="#faq" className="hover:text-yellow-700 hover:underline">Najczęstsze pytania</a></li>
            </ol>
          </nav>

          <section id="definicja" aria-labelledby="definicja-title" className="mb-16 scroll-mt-24">
            <h2 id="definicja-title" className="mb-6 text-3xl font-bold text-slate-950">QBR — co to jest? Definicja i cel</h2>
            <p className="mb-5 text-lg leading-relaxed">
              <strong>QBR (Quarterly Business Review)</strong> to kwartalny przegląd biznesowy: cykliczne spotkanie, podczas którego dostawca i klient albo partner oceniają postęp względem uzgodnionych celów, omawiają dane i planują następny okres. W praktyce B2B taki przegląd łączy perspektywę biznesową z informacją o realizacji współpracy.
            </p>
            <p className="mb-5 leading-relaxed">
              Najważniejszym rezultatem nie jest prezentacja, lecz wspólne rozumienie sytuacji i decyzje: co kontynuować, co zmienić, jakie ryzyko ograniczyć oraz kto odpowiada za kolejny krok. Przegląd może dotyczyć produktu, usługi, relacji z partnerem handlowym lub portfela klientów. Zakres powinien wynikać z celu, a nie z gotowego szablonu slajdów.
            </p>
            <p className="mb-5 leading-relaxed">
              W Customer Success spotkanie pomaga połączyć adopcję rozwiązania z rezultatem klienta. W sprzędzie partnerskim może dodatkowo obejmować wspólne planowanie rynku i gotowość zespołów. Regularny przegląd sprzyja uporządkowaniu komunikacji, ale nie zastępuje codziennego rozwiązywania problemów ani nie gwarantuje odnowienia lub rozwoju umowy.
            </p>
            <div className="rounded-r-lg border-l-4 border-yellow-500 bg-yellow-50 p-5">
              <p className="font-semibold leading-relaxed text-slate-950">W skrócie: dobry przegląd odpowiada na trzy pytania — co chcieliśmy osiągnąć, co pokazują zweryfikowane dane i jakie decyzje oraz działania są potrzebne teraz.</p>
            </div>
          </section>

          <section id="porownanie" aria-labelledby="porownanie-title" className="mb-16 scroll-mt-24">
            <h2 id="porownanie-title" className="mb-5 text-3xl font-bold text-slate-950">QBR a status call, EBR i przegląd OKR</h2>
            <p className="mb-7 leading-relaxed">
              QBR różni się od status calla horyzontem i przedmiotem rozmowy. EBR, czyli Executive Business Review, akcentuje udział sponsorów oraz decyzje kierownictwa; może być częścią kwartalnego cyklu lub odrębnym spotkaniem. Przegląd OKR ocenia natomiast postęp konkretnych celów i wyników kluczowych. Te formaty mogą się uzupełniać, jeśli organizacja nie mnoży spotkań z tą samą agendą.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="mb-3 text-left text-slate-600">Praktyczne rozróżnienie formatów; szczegóły zależą od przyjętego modelu pracy.</caption>
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th scope="col" className="border border-slate-700 p-3">Format</th>
                    <th scope="col" className="border border-slate-700 p-3">Perspektywa</th>
                    <th scope="col" className="border border-slate-700 p-3">Główny temat</th>
                    <th scope="col" className="border border-slate-700 p-3">Typowi uczestnicy</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item) => (
                    <tr key={item.type} className="align-top">
                      <th scope="row" className="border border-slate-200 p-3">{item.type}</th>
                      <td className="border border-slate-200 p-3">{item.horizon}</td>
                      <td className="border border-slate-200 p-3">{item.subject}</td>
                      <td className="border border-slate-200 p-3">{item.participants}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 leading-relaxed">
              Po stronie dostawcy przegląd często prowadzi Customer Success Manager lub Account Manager. Po stronie klienta warto mieć właściciela współpracy oraz osoby znające dane i podejmujące wymagane decyzje. Champion, użytkownik, ekonomistyczny nabywca, sponsor, ekspert produktowy czy przedstawiciel wsparcia dołączają wtedy, gdy ich wiedza jest potrzebna — nie dlatego, że lista uczestników musi mieć określoną długość.
            </p>
          </section>

          <section id="przygotowanie" aria-labelledby="przygotowanie-title" className="mb-16 scroll-mt-24">
            <h2 id="przygotowanie-title" className="mb-5 text-3xl font-bold text-slate-950">Jak przygotować QBR krok po kroku?</h2>
            <p className="mb-8 text-lg leading-relaxed">
              Przygotowanie zaczyna się przed otwarciem prezentacji. Poniższa checklista prowadzi od decyzji i wiarygodnych danych do ról oraz notatki, dzięki czemu spotkanie może skoncentrować się na rozmowie.
            </p>
            <div className="space-y-6">
              {preparationSteps.map((step) => (
                <section id={`qbr-przygotowanie-${step.id}`} key={step.id} aria-labelledby={`qbr-przygotowanie-${step.id}-title`} className="scroll-mt-24 rounded-xl border border-slate-200 p-6">
                  <h3 id={`qbr-przygotowanie-${step.id}-title`} className="mb-3 text-xl font-bold text-slate-950">{step.title}</h3>
                  <p className="leading-relaxed text-slate-700">{step.text}</p>
                </section>
              ))}
            </div>
            <div className="mt-7 rounded-xl bg-slate-50 p-6">
              <h3 className="mb-4 text-xl font-bold text-slate-950">Minimalny pakiet przed spotkaniem</h3>
              <ul className="space-y-3">
                {[
                  "Jedno zdanie opisujące cel oraz lista decyzji wymagających wspólnego ustalenia.",
                  "Źródła danych, zakres dat, definicje KPI i wyraźnie oznaczone braki lub ograniczenia.",
                  "Status poprzednich zobowiązań, najważniejsze ryzyka i pytania obu stron.",
                  "Agenda z właścicielami tematów oraz dokument do rejestrowania decyzji i działań.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="agenda" aria-labelledby="agenda-title" className="mb-16 scroll-mt-24">
            <h2 id="agenda-title" className="mb-5 text-3xl font-bold text-slate-950">Agenda QBR — przykład na 75 minut</h2>
            <p className="mb-8 text-lg leading-relaxed">
              To jedna spójna propozycja, a nie obowiązkowy czas każdego bloku. Skróć lub rozbuduj spotkanie zależnie od celu i liczby decyzji. Jeśli kluczowy temat wymaga warsztatu, zaplanuj osobną sesję zamiast usuwać czas na ustalenia.
            </p>
            <ol className="space-y-5">
              {qbrAgenda.map((item, index) => (
                <li key={item.title} className="rounded-xl border border-slate-200 p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-lg bg-slate-950 px-3 py-1 text-sm font-bold text-white">{index + 1}. {item.time}</span>
                    <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                  </div>
                  <p className="mb-3 leading-relaxed text-slate-700">{item.description}</p>
                  <p className="border-t border-slate-200 pt-3 text-sm font-semibold text-slate-700">Rezultat: {item.result}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="metryki" aria-labelledby="metryki-title" className="mb-16 scroll-mt-24">
            <h2 id="metryki-title" className="mb-5 text-3xl font-bold text-slate-950">Jakie metryki i KPI wybrać do QBR?</h2>
            <p className="mb-8 leading-relaxed">
              Nie istnieje uniwersalna tablica wskaźników. Łącz dane o rezultatach z informacją o adopcji, jakości i warunkach współpracy, ale ogranicz zestaw do metryk potrzebnych przy bieżących decyzjach. Wskaźnik bez właściciela, definicji i pytania, na które odpowiada, zwykle dodaje slajd zamiast wiedzy.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {metricGroups.map((group) => (
                <section key={group.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="mb-3 text-lg font-bold text-slate-950">{group.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-slate-700">{group.metrics}</p>
                  <p className="text-sm font-semibold leading-relaxed text-teal-800">{group.question}</p>
                </section>
              ))}
            </div>
            <div className="mt-7 rounded-r-lg border-l-4 border-teal-600 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-slate-950">Jak ostrożnie omawiać ROI?</h3>
              <p className="leading-relaxed">
                Najpierw ustal, które korzyści da się wiarygodnie wycenić, jaki koszt obejmuje porównanie i jaki jest okres analizy. Jeżeli oszczędność czasu lub wpływ na przychód jest szacunkiem, opisz założenia i wrażliwość wyniku. Nie przedstawiaj korelacji ani przykładowego wyliczenia jako zmierzonego efektu współpracy.
              </p>
            </div>
          </section>

          <section id="po-spotkaniu" aria-labelledby="po-spotkaniu-title" className="mb-16 scroll-mt-24">
            <h2 id="po-spotkaniu-title" className="mb-5 text-3xl font-bold text-slate-950">Po QBR: notatka, odpowiedzialność i follow-up</h2>
            <p className="mb-5 leading-relaxed">
              Po spotkaniu przekaż uczestnikom jedną wersję ustaleń. Oddziel decyzje od propozycji i pytań otwartych. Przy każdym działaniu zapisz właściciela, uzgodniony termin, zależności oraz kryterium ukończenia. Termin wysłania notatki ustal z drugą stroną zgodnie z przyjętym procesem, zamiast traktować jedną liczbę godzin jako uniwersalną zasadę.
            </p>
            <p className="mb-5 leading-relaxed">
              Postęp kontroluj w rytmie dopasowanym do zadań: część spraw może wymagać status calla, inne decyzji sponsora lub pracy produktowej. Nie czekaj z każdym problemem do kolejnego kwartału. Następny przegląd rozpocznij od poprzedniego rejestru zobowiązań i zmiany kontekstu, a nie od kopiowania starej prezentacji.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="mb-3 text-left text-slate-600">Struktura notatki do uzupełnienia rzeczywistymi ustaleniami.</caption>
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th scope="col" className="border border-slate-700 p-3">Decyzja lub działanie</th>
                    <th scope="col" className="border border-slate-700 p-3">Właściciel</th>
                    <th scope="col" className="border border-slate-700 p-3">Termin</th>
                    <th scope="col" className="border border-slate-700 p-3">Dowód ukończenia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3">Co dokładnie uzgodniono i jaki ma być rezultat?</td>
                    <td className="border border-slate-200 p-3">Jedna osoba odpowiedzialna za koordynację</td>
                    <td className="border border-slate-200 p-3">Data lub warunek wymagający eskalacji</td>
                    <td className="border border-slate-200 p-3">Dokument, wdrożenie, dane lub akceptacja</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="bledy" aria-labelledby="bledy-title" className="mb-16 scroll-mt-24">
            <h2 id="bledy-title" className="mb-5 text-3xl font-bold text-slate-950">Najczęstsze błędy w QBR i jak je ograniczyć</h2>
            <p className="mb-8 leading-relaxed">
              Największe problemy procesu rzadko wynikają z kolorystyki prezentacji. Częściej chodzi o niewłaściwy cel, nieporównywalne dane, brak właściwych osób albo brak wykonania ustaleń. Poniższe korekty można zastosować bez kupowania nowego narzędzia.
            </p>
            <div className="space-y-5">
              {mistakes.map((mistake) => (
                <section key={mistake.title} className="rounded-xl border border-slate-200 p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-950">{mistake.title}</h3>
                  <p className="leading-relaxed text-slate-700"><strong>Jak poprawić:</strong> {mistake.correction}</p>
                </section>
              ))}
            </div>
          </section>

          <section id="channel-qbr" aria-labelledby="channel-qbr-title" className="mb-16 scroll-mt-24">
            <h2 id="channel-qbr-title" className="mb-5 text-3xl font-bold text-slate-950">QBR z partnerem kanałowym: zakres i angielski szablon</h2>
            <p className="mb-5 leading-relaxed">
              W modelu partner lub sprzedaż pośrednia przegląd obejmuje nie tylko wynik jednego klienta. Strony mogą omawiać pokrycie rynku, gotowość partnerów, aktywację, wsparcie i wspólne działania marketingowe. Warunkiem użytecznego porównania jest podobny zakres danych i uwzględnienie różnic między regionami.
            </p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-7" lang="en">
              <h3 className="mb-4 text-xl font-bold text-slate-950">About QBR: what is different in a channel partnership? Definition and examples</h3>
              <p className="mb-4 leading-relaxed text-slate-700">
                In indirect sales, quarterly business reviews connect the vendor, partners and the account team. The goal is alignment and growing relationship between the vendor and the partner. Successful channels use this meeting to prepare decisions about marketing, activation, delivery, support and training — not only to inspect actual performance.
              </p>
              <p className="mb-4 leading-relaxed text-slate-700">
                Give your indirect channel team the data before the meeting. A compact scorecard data pack can combine sales by month, market coverage, partner engagement and the marketing ROI section. Use the scorecard as a measuring stick, not as a substitute for discussion. Compare CAMs and regions only when their scope is comparable.
              </p>
              <p className="mb-4 leading-relaxed text-slate-700">
                Review executive sponsorship, relationship building, product support readiness, marketing readiness, cloud readiness, pre-sales readiness and sales readiness. Add sales training where a shared gap blocks progress. If the process is too labor intensive, reduce duplicate slides and keep owners, due dates and evidence.
              </p>
              <p className="leading-relaxed text-slate-700">
                Quarterly business reviews are one of the most useful points for planning the next quarter because both sides can connect goals with action. QBRs are also anxiety-producing for the partner receiving the review and the channel account manager when the agenda contains only weaknesses. The most important – and easiest to omit – step is to close with decisions and a follow-up.
              </p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Powyższy angielski tekst jest redakcyjnym punktem wyjścia, nie cytatem ani raportem z realizacji. Przed użyciem dostosuj pojęcia do umowy, kanału sprzedaży i dostępnych danych.
            </p>
          </section>

          <section id="faq" aria-labelledby="faq-title" className="mb-16 scroll-mt-24">
            <h2 id="faq-title" className="mb-7 text-3xl font-bold text-slate-950">FAQ — najczęstsze pytania o QBR</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details id={`qbr-faq-${item.id}`} key={item.id} className="group rounded-lg border border-slate-200 p-5 open:bg-slate-50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                    {item.question}<span className="transition group-open:rotate-180" aria-hidden="true">▼</span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="powiazane-materialy" aria-labelledby="powiazane-title" className="mb-14 scroll-mt-24">
            <h2 id="powiazane-title" className="mb-6 text-3xl font-bold text-slate-950">Powiązane poradniki</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link to="/blog/customer-success-co-to" className="rounded-lg border border-slate-200 p-5 transition hover:border-yellow-500">
                <span className="flex items-center gap-2 font-bold text-slate-950">Customer Success <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                <span className="mt-2 block text-sm text-slate-600">Poznaj rolę CSM-a, onboarding i zarządzanie wartością dla klienta.</span>
              </Link>
              <Link to="/blog/account-management-co-to" className="rounded-lg border border-slate-200 p-5 transition hover:border-yellow-500">
                <span className="flex items-center gap-2 font-bold text-slate-950">Account management <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                <span className="mt-2 block text-sm text-slate-600">Sprawdź zakres pracy Account Managera i wskaźniki relacji B2B.</span>
              </Link>
              <Link to="/blog/customer-health-score-co-to" className="rounded-lg border border-slate-200 p-5 transition hover:border-yellow-500">
                <span className="flex items-center gap-2 font-bold text-slate-950">Customer Health Score <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                <span className="mt-2 block text-sm text-slate-600">Dowiedz się, jak zbierać sygnały o kondycji relacji z klientem.</span>
              </Link>
              <Link to="/blog/nrr-grr-net-revenue-retention-co-to-jest" className="rounded-lg border border-slate-200 p-5 transition hover:border-yellow-500">
                <span className="flex items-center gap-2 font-bold text-slate-950">NRR i GRR <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                <span className="mt-2 block text-sm text-slate-600">Zrozum wskaźniki retencji przychodu i ich znaczenie w modelu subskrypcyjnym.</span>
              </Link>
            </div>
          </section>

          <section aria-labelledby="podsumowanie-title" className="rounded-xl bg-slate-950 p-7 text-white md:p-9">
            <h2 id="podsumowanie-title" className="mb-4 text-2xl font-bold">Podsumowanie: przegląd ma prowadzić do wspólnych działań</h2>
            <p className="mb-5 leading-relaxed text-slate-300">
              Zacznij od celu klienta, wybierz wiarygodne dane i zostaw czas na decyzje. Po spotkaniu chroń jedną wersję ustaleń oraz sprawdzaj realizację zobowiązań. Najlepszy format jest dopasowany do kontekstu, nie do sztywnej liczby slajdów lub uczestników.
            </p>
            <p className="leading-relaxed text-slate-300">
              Jeśli chcesz uporządkować treści lub komunikację marketingową dla odbiorców B2B, <Link to="/kontakt" className="font-semibold text-yellow-400 hover:underline">przejdź do formularza kontaktowego</Link> i opisz swój kontekst oraz dostępne materiały.
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
}
