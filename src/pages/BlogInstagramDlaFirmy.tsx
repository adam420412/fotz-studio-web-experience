import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CalendarDays, Check } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const seoTitle = "Instagram dla firmy: jak prowadzić firmowy profil | FOTZ";
const seoDescription = "Instagram dla firmy: jak prowadzić firmowy profil, planować treści, rolki i zdjęcia, mierzyć zapytania oraz rozdzielać obsługę i reklamy.";
const canonicalUrl = "https://www.fotz-studio.pl/blog/instagram-dla-firmy";

const contents = [
  ["cel", "Cel i odbiorcy"],
  ["profil", "Profil i ustawienia"],
  ["strategia", "Strategia treści"],
  ["formaty", "Formaty publikacji"],
  ["harmonogram", "Rytm pracy"],
  ["produkcja", "Rolki i zdjęcia"],
  ["moderacja", "Moderacja i kontakt"],
  ["pomiar", "Pomiar zapytań"],
  ["reklamy", "Reklamy jako osobny obszar"],
  ["start", "Plan na pierwszy miesiąc"],
  ["pytania", "Najczęściej zadawane pytania"],
];

const formats = [
  { name: "Zdjęcie lub grafika", use: "Pokaż produkt, realizację albo jedną konkretną informację.", example: "Zdjęcie wykonanej usługi z opisem zakresu, warunków i sposobu zamówienia." },
  { name: "Karuzela", use: "Wyjaśnij temat w kilku krokach lub porównaj warianty.", example: "Lista przygotowania do konsultacji z kolejnymi pytaniami i jednym CTA na końcu." },
  { name: "Rolka", use: "Pokaż ruch, proces, produkt w użyciu lub odpowiedź osoby z firmy.", example: "Krótka demonstracja z napisami, jednym wnioskiem i informacją, gdzie znaleźć szczegóły." },
  { name: "Instagram Stories", use: "Przekazuj bieżące informacje i zaproś do rozmowy.", example: "Kulisy przygotowań, odpowiedź na pytanie lub przypomnienie o dostępności terminu." },
];

const weeks = [
  { title: "Tydzień 1: podstawy i punkt odniesienia", text: "Wybierz cel, odbiorcę i jedną ofertę. Uzupełnij profil, sprawdź kontakt i stronę docelową. Zapisz bazowe wyniki, liczbę zapytań oraz czas dostępny na pracę." },
  { title: "Tydzień 2: odpowiedzi na pytania", text: "Zbierz pytania z rozmów i wiadomości. Przygotuj karuzelę wyjaśniającą jeden temat oraz post pokazujący rzeczywisty zakres produktu lub usługi." },
  { title: "Tydzień 3: proces i zespół", text: "Nagraj proces lub odpowiedź eksperta i dobierz zdjęcia uzupełniające temat. Dodaj napisy, sprawdź materiały na telefonie i uzupełnij opis o następny krok." },
  { title: "Tydzień 4: przegląd i kolejne decyzje", text: "Porównaj publikacje według wcześniej wybranego celu. Zapisz pytania odbiorców, zapytania o ofertę i nakład pracy. Ustal, co powtórzyć, poprawić lub pominąć." },
];

const faqItems = [
  { question: "Co daje konto profesjonalne i czy jest płatne?", answer: "Konto profesjonalne może udostępniać statystyki, kategorię działalności, dodatkowe opcje kontaktu i promowania. Samo przełączenie typu konta nie wymaga abonamentu. Budżet reklamowy, produkcja treści i obsługa są osobnymi kosztami. Dostępność funkcji sprawdź w swoim panelu." },
  { question: "Czy konto firmowe trzeba połączyć z Facebookiem?", answer: "Nie każda podstawowa czynność wymaga takiego połączenia, ale część funkcji współpracy, zarządzania i reklam korzysta z rozwiązań Meta. Przy konfiguracji sprawdź aktualne wskazówki platformy. Połączenie kont nie zastępuje uporządkowania uprawnień i strony docelowej." },
  { question: "Jak często publikować na firmowym Instagramie?", answer: "Ustal rytm, który możesz utrzymać z dostępnymi materiałami i czasem na odpowiedzi. Nie ma jednej liczby postów odpowiedniej dla każdej firmy. Zacznij od wykonalnego harmonogramu i zmieniaj go na podstawie jakości publikacji, pytań odbiorców oraz wyników." },
  { question: "Czy trzeba publikować rolki codziennie?", answer: "Nie. Rolka powinna mieć zadanie: pokazać produkt, proces lub odpowiedzieć na pytanie. Część tematów wygodniej przedstawić zdjęciem albo karuzelą. Materiały można produkować partiami, jeśli pozostają aktualne i nie powielają bez potrzeby tego samego przekazu." },
  { question: "Ilu obserwujących trzeba mieć, aby zarabiać?", answer: "Nie ma uniwersalnego progu, który gwarantuje przychód firmie ze sprzedaży własnych produktów lub usług. Oddzielne funkcje monetyzacji platformy mogą mieć własne warunki. Oceniaj zgodność odbiorców z ofertą, zapytania i wyniki sprzedaży, a nie samą liczbę obserwujących." },
  { question: "Ile kosztuje prowadzenie Instagrama dla firmy?", answer: "Koszt zależy od zakresu: strategii, produkcji zdjęć i filmów, publikacji, moderacji, raportowania oraz reklam. Nie ma jednego pakietu trafnego dla każdego biznesu. Przed wyceną ustal liczbę i rodzaj materiałów, odpowiedzialność za akceptacje, sposób kontaktu z klientami oraz budżet emisji." },
  { question: "Kiedy zlecić prowadzenie profilu agencji?", answer: "Gdy brakuje czasu, regularnych materiałów lub kompetencji potrzebnych do realizacji planu. Możesz zlecić samą produkcję albo także planowanie, publikacje i moderację. Przed współpracą określ zakres, poprawki, dostęp do konta, zasady odpowiedzi oraz raportowanie zapytań." },
];

export default function BlogInstagramDlaFirmy() {
  const articleData = {
    headline: "Instagram dla firmy: jak prowadzić firmowy profil",
    description: seoDescription,
    datePublished: "2025-04-12",
    dateModified: "2026-11-02",
    author: "Zespół FOTZ",
    url: canonicalUrl,
  };

  return (
    <Layout>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonicalUrl} ogType="article" />
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
        { name: "Blog", url: "https://www.fotz-studio.pl/blog" },
        { name: "Instagram dla firmy", url: canonicalUrl },
      ]} />
      <FAQSchema items={faqItems} />

      <article id="article-content">
        <header className="container-wide px-6 md:px-12 pt-28 md:pt-36 pb-12 md:pb-16">
          <nav aria-label="Ścieżka nawigacji" className="text-sm text-muted-foreground flex flex-wrap gap-2 mb-8">
            <Link to="/blog" className="underline underline-offset-4">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">Instagram dla firmy</span>
          </nav>
          <div className="grid lg:grid-cols-[1.45fr_1fr] gap-10 lg:gap-16 items-end">
            <div>
              <p className="dv-eyebrow mb-5">Praktyczny poradnik · social media</p>
              <h1 className="font-heading text-4xl md:text-6xl leading-[1.08] tracking-tight mb-6">Instagram dla firmy: jak prowadzić <span className="text-gradient">firmowy profil</span></h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">Od celu i ustawień konta przez strategię treści, produkcję oraz moderację aż po pomiar zapytań. Reklamy omawiamy oddzielnie, bo płatna kampania ma inne warunki niż publikacje organiczne.</p>
              <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mt-6"><Link to="/o-nas" className="underline underline-offset-4">Zespół FOTZ Studio</Link><span>Publikacja: <time dateTime="2025-04-12">12.04.2025</time></span><span>Aktualizacja: <time dateTime="2026-11-02">2.11.2026</time></span></p>
            </div>
            <aside className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="text-sm text-muted-foreground mb-5">Zanim opublikujesz kolejny post</p>
              <ol className="space-y-5">{["Do kogo mówisz?", "Co ma zrozumieć odbiorca?", "Jaki jest następny krok?"].map((question, i) => <li key={question} className="flex items-center gap-4"><span aria-hidden="true" className="shrink-0 whitespace-nowrap text-primary font-mono text-sm">0{i + 1}</span><span className="text-xl font-heading">{question}</span></li>)}</ol>
              <a href="#start" className="inline-flex items-center gap-2 underline underline-offset-4 mt-7 text-sm">Przejdź do planu na start <ArrowRight aria-hidden="true" className="w-4 h-4" /></a>
            </aside>
          </div>
        </header>

        <div className="container-wide px-6 md:px-12 pb-20 grid lg:grid-cols-[240px_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
          <nav aria-label="Spis treści" className="lg:sticky lg:top-28 border-y border-border py-6">
            <p className="font-medium mb-4">W tym poradniku</p>
            <ol className="space-y-3 text-sm text-muted-foreground">{contents.map(([id, title]) => <li key={id}><a className="hover:text-foreground underline underline-offset-4" href={`#${id}`}>{title}</a></li>)}</ol>
            <Link to="/social-media/obsluga" className="inline-flex items-center gap-2 text-sm font-medium mt-7">Zobacz obsługę profilu <ArrowUpRight aria-hidden="true" className="w-4 h-4" /></Link>
          </nav>

          <div className="min-w-0 max-w-3xl space-y-12 md:space-y-16 text-base md:text-lg leading-relaxed text-muted-foreground">
            <section id="cel" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground">1. Jak prowadzić firmowy Instagram: cel i odbiorcy</h2>
              <p>Firmowy Instagram może wspierać prezentację oferty, odpowiedzi na pytania, rezerwacje albo rozpoznawalność marki. Jeśli chcesz zwiększyć rozpoznawalność swojej marki, zapisz, jak rozpoznasz postęp. Wybierz jeden główny cel na najbliższy okres i połącz go z celem biznesowym. Dzięki temu nie ocenisz profilu wyłącznie przez liczbę polubień.</p>
              <p>Opisz grupę docelową przez sytuację, nie tylko wiek: co osoba chce kupić, czego nie rozumie i jakiej informacji potrzebuje przed kontaktem. Użytkownik powinien po wejściu na profil rozumieć, czy oferta jest dla niego. Sprawdź rozmowy sprzedażowe, wiadomości i pytania klientów. Dla firmy B2C ważny może być produkt w użyciu, a dla usług specjalistycznych — proces i kryteria wyboru.</p>
              <p>Nie każda platforma musi być priorytetem; spośród platform społecznościowych wybierz te, które odpowiadają odbiorcom Twojego biznesu. Jeśli potencjalny klient szuka oferty głównie w Google lub przez rekomendacje, porównaj nakład pracy z innymi kanałami. Pomocne będzie <Link to="/social-media/strategia" className="underline underline-offset-4">uporządkowanie strategii social media</Link>.</p>
            </section>

            <section id="profil" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground">2. Konto firmowe na Instagramie: profil i kontakt</h2>
              <p>Aby założyć konto firmowe na Instagramie, utwórz konto lub otwórz ustawienia istniejącego profilu, znajdź „Typ konta” i wybierz wariant firmowy. Aplikacja mobilna może pokazywać różne nazwy ekranów, dlatego traktuj aktualną aplikację Instagram jako źródło konfiguracji. Przełączenie nie powinno być utożsamiane z zakupem reklam.</p>
              <p>Po zmianie sprawdź na telefonie ustawienia profilu na Instagramie i oceń, czy profil firmowy jest czytelny dla osoby, która nie zna Twojej firmy. Najważniejsze informacje powinny prowadzić do działającego kontaktu:</p>
              <ul className="space-y-4">{[
                "Nazwa i zdjęcie: rozpoznawalna marka czytelna także w małym rozmiarze.",
                "Opis: produkty lub usługi, odbiorca i obszar działania, jeśli ma znaczenie.",
                "Kontakt: aktualny numer telefonu, e-mail, przycisk i działający link.",
                "Strona docelowa: zgodna z opisem profilu, czytelna na telefonie i z prostym formularzem.",
                "Przypięte materiały: oferta, sposób współpracy i odpowiedzi na częste pytania.",
              ].map(item => <li className="flex gap-3" key={item}><Check aria-hidden="true" className="w-5 h-5 text-primary shrink-0 mt-1" /><span>{item}</span></li>)}</ul>
              <p>W rejestrze dostępów oznacz „konto Instagram”, właściciela i osobę zastępczą. Uprawnienia przyznawaj przez narzędzia Meta zamiast przekazywać wspólne hasło. Jeśli łączysz konto na Instagramie ze stroną na Facebooku, sprawdź, kto może publikować, odpowiadać i uruchamiać promocje.</p>
            </section>

            <section id="strategia" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground">3. Strategia treści i plan marketingowy</h2>
              <p>Strategie treści powinny łączyć realizację celów biznesowych, odbiorców, tematy i sposób pomiaru. Wybierz trzy lub cztery powtarzalne obszary: wyjaśnianie produktów i usług, odpowiedzi na pytania, kulisy pracy oraz udokumentowane realizacje. Dzięki temu content plan nie będzie zależny od codziennego szukania pomysłu.</p>
              <p>Każdemu tematowi przypisz etap decyzji: poznanie marki, porównanie oferty albo kontakt. Zapisz też właściciela materiału i CTA. Publikacja edukacyjna może prowadzić do poradnika, a prezentacja usługi do formularza. Nie każdy post musi sprzedawać bezpośrednio, ale każdy powinien mieć zrozumiałe zadanie. Opowiadaj o marce przez konkretne przykłady i dopasuj ton komunikacji do swojej marki.</p>
              <p>Treści na Instagram planuj jako część komunikacji prowadzonej na swoich profilach i w innych kanałach. Komunikacja swojej marki na Instagramie nie musi być automatyczną kopią materiałów z innych serwisów. Dostosuj długość, obraz i opis do miejsca publikacji. Jeśli współpracujesz z influencerem, ustal prawa do materiałów, oznaczenie współpracy i sposób pomiaru przed nagraniem.</p>
            </section>

            <section id="formaty" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground">4. Co publikować: formaty do tematu i zadania</h2>
              <p>Nie zakładaj, że film zawsze zwiększa sprzedaż lepiej niż zdjęcie. Format ma ułatwiać zrozumienie tematu i docierać z informacją do odbiorcy. Porównuj publikacje na własnym koncie, według tego samego celu i bez mieszania wyników organicznych z reklamowymi.</p>
              <div className="grid sm:grid-cols-2 gap-4">{formats.map(format => <div className="border border-border rounded-xl p-5 bg-card" key={format.name}><h3 className="text-lg font-medium text-foreground mb-3">{format.name}</h3><p className="text-base mb-4">{format.use}</p><p className="text-sm border-t border-border pt-4"><span className="text-foreground">Propozycja: </span>{format.example}</p></div>)}</div>
              <p>Hashtag może opisywać temat lub kontekst, ale nie zastępuje trafnego materiału. Oznaczaj lokalizację i osoby tylko wtedy, gdy rzeczywiście dotyczą publikacji. Meta opisuje osobne systemy rekomendacji dla miejsc w aplikacji, wykorzystujące m.in. AI. Nie daje to podstaw do obiecywania zasięgu konkretnego formatu. <a href="https://about.fb.com/news/2023/06/how-ai-ranks-content-on-facebook-and-instagram/" className="underline underline-offset-4">Wyjaśnienie systemów rekomendacji Meta</a>.</p>
            </section>

            <section id="harmonogram" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground">5. Planowanie publikacji i wykonalny harmonogram</h2>
              <p>W kalendarzu zapisz temat, format, potrzebne materiały, autora, akceptację, termin publikacji i następny krok. Zaplanuj również czas na moderację. Wykonalny rytm jest lepszy niż codzienne posty, po których następuje długa przerwa.</p>
              <p>Oddziel planowanie od produkcji i publikowania. Jedna sesja może dostarczyć materiałów do kilku tematów, ale nie narzuca częstotliwości. Warto obserwować wyniki różnych pór publikacji na własnym profilu; godzina skuteczna u innej marki nie musi odpowiadać Twoim obserwującym.</p>
            </section>

            <section id="produkcja" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground">6. Przygotuj rolki oraz zdjęcia do udostępniania</h2>
              <p>Przed nagraniem rolki zapisz jedno pytanie, początek odpowiedzi i wniosek. Pokaż rzeczywisty proces lub produkt w użyciu. Dodaj czytelne napisy, sprawdź dźwięk i kadrowanie na telefonie. Długość dobieraj do treści, a nie do obietnicy dotarcia do większej liczby osób.</p>
              <p>Przy zdjęciach zadbaj o światło, czytelny szczegół i spójny sposób prezentacji. Jedna seria zdjęć oraz filmów może pokazać całość, detal i zastosowanie. Do udostępniania zdjęć klientów lub wizerunku osób uzyskaj odpowiednie zgody i ustal zakres wykorzystania.</p>
              <p>W opisie wyjaśnij, co widzi użytkownik, i podaj praktyczny kontekst. Materiały generowane przez AI oznaczaj i weryfikuj zgodnie z obowiązującymi zasadami, a przede wszystkim nie przedstawiaj ich jako dokumentacji realizacji. Własne, prawdziwe zdjęcia i filmy ułatwiają pokazanie rzeczywistej oferty.</p>
            </section>

            <section id="moderacja" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground">7. Moderacja i interakcja z użytkownikami</h2>
              <p>Wyznacz osobę odpowiedzialną za wiadomości i komentarze oraz zasady, jak reagować na nie. Odpowiadaj na komentarze rzeczowo, przenoś dane osobowe i szczegóły zamówień do właściwego kanału. Nie usuwaj krytyki tylko dlatego, że jest niewygodna; oddziel ją od spamu i naruszeń zasad.</p>
              <p>Przygotuj krótką instrukcję: jak odpowiadać na pytania o cenę, dostępność i reklamacje, kiedy przekazać sprawę specjaliście oraz kto akceptuje nietypową odpowiedź. Zapisuj powtarzalne pytania jako pomysły na kolejny post i usprawniaj interakcję z klientami. Możesz komentować i cytować wypowiedzi innych osób tylko z zachowaniem kontekstu i zasad platformy.</p>
              <p>Automatyzacja może porządkować przyjmowanie zgłoszeń, lecz nie powinna udawać rozmowy z człowiekiem ani blokować kontaktu z firmą. Regularnie testuj formularz, przycisk kontaktu i powiadomienia.</p>
            </section>

            <section id="pomiar" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground">8. Analityka Instagrama: mierz treści i zapytania</h2>
              <p>Analityka powinna odpowiadać na wcześniej postawione pytanie. Oceniaj działania na Instagramie według zapisanej bazy, okresu, celu i ograniczeń danych. Statystyki Instagrama pokażą odbiór materiałów, ale nie zastąpią rejestru kontaktów i informacji sprzedażowych.</p>
              <dl className="space-y-5">
                <div><dt className="font-medium text-foreground">Odbiór treści</dt><dd>Porównuj dotarcie, wyświetlenia, reakcje, zapisy i udostępnienia. Osoba może polubić materiał, ale reakcja nie przesądza o zapytaniu. Sprawdź definicję metryki: wyświetlenie nie musi oznaczać unikalnego użytkownika.</dd></div>
                <div><dt className="font-medium text-foreground">Zainteresowanie ofertą</dt><dd>Rejestruj wejścia na stronę, wiadomości o usłudze i wysłane formularze. Kliknięcie numeru telefonu nie potwierdza rozmowy ani zapytania.</dd></div>
                <div><dt className="font-medium text-foreground">Wynik firmy</dt><dd>Zestawiaj źródło kontaktu z rezerwacją, zamówieniem i jakością leada. Przychód potwierdzaj w danych firmy, a nie w liczbie polubień.</dd></div>
              </dl>
              <p>Oznaczaj linki parametrami UTM, jeśli pozwalają odróżnić ruch w analityce, i pytaj klientów o źródło kontaktu. Przy małej liczbie zapytań wnioski są wstępne. Nie przypisuj wyniku samym działaniom na Instagramie, jeśli równolegle działały reklamy, sezonowość lub inne kanały. Zobacz <Link to="/social-media/analityka" className="underline underline-offset-4">zakres analityki social media</Link>.</p>
            </section>

            <section id="reklamy" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground">9. Traktuj reklamy jako osobny obszar pracy</h2>
              <p>Publikowanie organiczne i kampanie reklamowe wymagają innych decyzji. Przed uruchomieniem reklamy przygotuj ofertę, materiał, stronę docelową lub kontakt oraz pomiar zgodny z ustawieniami zgód. Określ hipotezę testu i budżet. Koszt emisji oddziel od produkcji i obsługi.</p>
              <p>Promowanie posta nie gwarantuje dotarcia ani sprzedaży. Nie przyjmuj uniwersalnej stawki, zwrotu czy progu obserwujących. Warunki kampanii zależą m.in. od celu, grupy docelowej, kreacji, oferty i konkurencji. Reklam na Facebooku i Instagramie nie wliczaj do oceny publikacji organicznych.</p>
              <p>Jeśli celem jest płatna kampania, przejdź do <Link to="/performance-marketing/meta-ads" className="underline underline-offset-4">usługi Meta Ads</Link>. Jeśli potrzebujesz regularnych materiałów i publikacji, sprawdź <Link to="/social-media/obsluga" className="underline underline-offset-4">prowadzenie konta firmowego</Link>. Rozdzielenie zakresu ułatwia wycenę i ocenę wyników.</p>
            </section>

            <section id="start" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground">10. Plan na pierwszy miesiąc działań</h2>
              <p>Ten plan porządkuje start, ale nie jest obietnicą wzrostu zasięgu, liczby obserwujących lub sprzedaży. Dopasuj liczbę publikacji do zasobów swojej firmy. Przykłady w poradniku są propozycjami redakcyjnymi, a nie opisami realizacji klientów.</p>
              <ol className="space-y-4">{weeks.map(week => <li key={week.title} className="border-l-2 border-primary/50 pl-5"><h3 className="text-lg font-medium text-foreground mb-2">{week.title}</h3><p className="text-base">{week.text}</p></li>)}</ol>
              <p>Po miesiącu nie kupuj obserwatorów i nie próbuj automatycznie zwiększyć liczbę obserwujących każdą dostępną metodą. Najpierw sprawdź, czy treści odpowiadają potrzebom właściwych użytkowników Instagrama i czy profil jasno przedstawia ofertę. Dopiero później zdecyduj, czy warto zwiększać produkcję, promować markę wśród nowych odbiorców albo ograniczyć działania w social.</p>
            </section>

            <section id="pytania" className="scroll-mt-28">
              <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-5">Najczęściej zadawane pytania o Instagram dla firmy</h2>
              {faqItems.map(item => <details key={item.question} className="border-b border-border py-5 text-base"><summary className="font-medium text-foreground cursor-pointer">{item.question}</summary><p className="mt-4">{item.answer}</p></details>)}
            </section>

            <aside className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <CalendarDays aria-hidden="true" className="text-primary w-7 h-7 mb-5" />
              <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Potrzebujesz strategii albo materiałów?</h2>
              <p className="mb-6">Możesz zlecić FOTZ Studio prowadzenie profilu lub samą produkcję zdjęć i filmów. Zakres, terminy, moderację i sposób akceptacji ustalamy przed rozpoczęciem, bez sztywnego pakietu dla każdej firmy.</p>
              <div className="flex flex-wrap gap-4"><Link to="/social-media/obsluga" className="dv-btn dv-btn-primary">Zobacz zakres obsługi <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link><Link to="/kontakt" className="dv-btn dv-btn-secondary">Skontaktuj się</Link></div>
            </aside>

            <section id="zrodla" className="text-sm space-y-3 border-t border-border pt-6">
              <h2 className="font-medium text-foreground">Źródła i aktualizacja</h2>
              <p>Aktualizacja: 2 listopada 2026. Funkcje i nazwy ustawień mogą się zmieniać; sprawdzaj je na własnym koncie. Plan i przykłady są propozycjami redakcyjnymi FOTZ Studio.</p>
              <p>Meta opisuje <a href="https://about.fb.com/news/2023/06/how-ai-ranks-content-on-facebook-and-instagram/" className="underline underline-offset-4">systemy dobierania treści</a> oraz <a href="https://about.fb.com/news/2024/10/best-practices-education-hub-creators-instagram/" className="underline underline-offset-4">wskazówki dostępne w panelu profesjonalnym</a>. Nie są one gwarancją wyniku publikacji.</p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
}
