import { enquiryHref } from "@/lib/enquiry.mjs";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { QuoteOptions, websiteOptions } from "@/components/QuoteOptions";
import cuteDumpling from "@/assets/portfolio/cute-dumpling-new-web.webp";
import victoryCars from "@/assets/portfolio/victory-cars-web.webp";
const sections = [
  {
    "title": "Projektowanie stron internetowych dla firm z Legnicy i okolic",
    "text": "Dobra strona zaczyna się od uporządkowania oferty. Firma w Legnicy może obsługiwać klientów na miejscu, dojeżdżać do nich albo sprzedawać w całej Polsce. Każdy model wymaga innych informacji: adresu i godzin, obszaru dojazdu, dostępności produktów lub zasad zamówienia. Ustalamy, kto odwiedza witrynę, co porównuje i czego potrzebuje przed kontaktem. Projektowanie stron nie polega wyłącznie na wyborze kolorów. Układ powinien prowadzić od potrzeby przez zakres i dowody wykonanej pracy do konkretnej decyzji. Współpraca z FOTZ Studio odbywa się zdalnie z Poznania; nie deklarujemy biura w Legnicy."
  },
  {
    "title": "Wizytówka, strona firmowa czy sklep internetowy?",
    "text": "Wizytówka może wystarczyć, gdy potrzebujesz krótkiej prezentacji działalności i danych kontaktowych. Strona firmowa daje miejsce na osobne usługi, realizacje i odpowiedzi na pytania. Landing page skupia się na jednej ofercie, na przykład kierowanej z kampanii reklamowej. Sklepy internetowe potrzebują dodatkowo katalogu, wariantów produktów, płatności, dostawy i obsługi zamówień. Dobieramy funkcjonalności strony do sposobu sprzedaży. Nie trzeba tworzyć rozbudowanego serwisu, jeśli na początek wystarczy czytelna prezentacja kilku usług."
  },
  {
    "title": "Tworzenie stron internetowych — treści, projekt i własne materiały",
    "text": "Zbieramy informacje o firmie, produktach i odbiorcach. Ustalamy, które teksty i zdjęcia dostarczasz, a co przygotujemy w ramach zlecenia. Nowoczesne strony internetowe powinny pokazywać realny zespół, produkt lub miejsce pracy. Zdjęcie realizacji i konkretny opis pomagają potencjalnym klientom zrozumieć ofertę. Możemy wycenić sesję albo nagrania; termin i koszt dojazdu ustalamy osobno. Chcemy projektować czytelny układ, który odpowiada na pytania potencjalnych klientów. Projekt graficzny dopasowujemy do marki i materiałów. Przed wdrożeniem akceptujesz układ oraz zakres poprawek, dzięki czemu wiadomo, na jakim etapie podejmujemy decyzje."
  },
  {
    "title": "Responsywna strona internetowa i szybkość ładowania",
    "text": "Projektujemy widoki na telefon i komputer, a kontrola obejmuje także urządzenia mobilne o różnych szerokościach. Widok mobilny musi ułatwiać dotarcie do oferty. Sprawdzamy czytelność tekstu, wielkość przycisków, menu i formularze. Optymalizacja obrazów oraz ograniczenie zbędnych elementów wpływają na szybkość ładowania strony. Efekt zależy również od hostingu, zewnętrznych narzędzi i materiałów dodanych później. Dlatego uzgadniamy, co będzie mierzone i kto odpowiada za dalszą obsługę. Sam atrakcyjny projekt nie wystarczy, jeśli użytkownik nie może odczytać oferty albo wysłać wiadomości."
  },
  {
    "title": "CMS, WordPress i samodzielna edycja strony",
    "text": "Technologię wybieramy według potrzeb, a nie jednej obowiązkowej platformy. System CMS jest przydatny, gdy chcesz regularnie zmieniać ofertę, publikować wpisy lub dodawać realizacje. W odpowiednich projektach można rozważyć WordPress, a przy sprzedaży także WooCommerce. Rozwiązania dedykowane mogą lepiej odpowiadać niestandardowym funkcjom. W wycenie określamy pola dostępne do edycji, role użytkowników, instrukcję lub szkolenie. Nie każda zmiana wyglądu będzie możliwa w panelu. Przed startem wyjaśniamy, co zrobisz samodzielnie, a co wymaga pracy wykonawcy."
  },
  {
    "title": "SEO stron internetowych w Legnicy — przygotowanie do wyszukiwarki",
    "text": "Podstawy techniczne SEO ustalamy już podczas planowania. Obejmują uzgodnioną strukturę adresów, tytuły, opisy, nagłówki i linkowanie wewnętrzne. Ważna jest możliwość pobrania treści przez wyszukiwarkę oraz poprawne wskazanie adresu kanonicznego. Słowa kluczowe dobieramy do rzeczywistej oferty. Fraza powinna odpowiadać potrzebie odbiorcy; powtarzanie nazwy miasta w każdym zdaniu nie zastępuje treści. Przygotowanie strony pod kątem indeksowania tworzy podstawę dalszych działań, ale nie gwarantuje pozycji w wynikach wyszukiwania.",
    "href": "/seo/audyt",
    "link": "Audyt SEO istniejącej witryny"
  },
  {
    "title": "Pozycjonowanie stron internetowych w Legnicy — osobny zakres obsługi",
    "text": "Wdrożenie nowej strony i regularne pozycjonowanie to różne zakresy. Pozycjonowanie strony wymaga oceny danych, konkurencji, treści i problemów technicznych. Jeśli potrzebujesz widoczności dla usług w Legnicy, strategia pozycjonowania strony powinna uwzględniać ofertę oraz rzeczywisty obszar działania. Pozycjonowanie lokalne może obejmować także spójność danych firmy i wizytówkę Google. Nie tworzymy fikcyjnych oddziałów ani obietnic TOP 10. Agencja SEO powinna pokazać, jakie prace wykonuje i jak ocenia widoczność. Zakres usług SEO oraz późniejszy koszt ustalamy osobno.",
    "href": "/pozycjonowanie/legnica",
    "link": "Poznaj zakres pozycjonowania dla firm z Legnicy"
  },
  {
    "title": "Przebudowa strony i zachowanie ważnych adresów",
    "text": "Jeżeli masz już witrynę, zaczynamy od przeglądu treści, zapytań i funkcji. Nie każda poprawa wymaga budowania wszystkiego od początku. Sprawdzamy, które podstrony mają ruch, linki lub historię w Google. Przy zmianie adresów przygotowujemy uzgodnione przekierowania, a po publikacji kontrolujemy odnośniki i indeksowanie. Ważne materiały przenosimy według zatwierdzonego planu. Zapisujemy również odpowiedzialność za kopię danych i moment przełączenia. To ogranicza ryzyko utraty informacji, choć nie stanowi gwarancji utrzymania każdej pozycji strony w wynikach wyszukiwania."
  },
  {
    "title": "Marketing i droga do zapytania",
    "text": "Strona jest miejscem, do którego mogą prowadzić działania marketingowe: wyszukiwarka, Google Ads, social media lub polecenie. Każdy kanał powinien kierować do oferty zgodnej z obietnicą komunikatu. Sprawdzamy formularze, przyciski telefonu i sposób przekazania zapytania. Analitykę oraz ewentualną integrację z CRM wdrażamy w uzgodnionym zakresie. Oddzielamy odwiedziny, kliknięcia, wysłane formularze i rozmowy zakończone zleceniem. Jeśli szukasz nowych klientów z Legnicy lub okolic, potrzebujesz również osoby, która sprawnie odpowie na zgłoszenie. Sama witryna nie zastępuje obsługi sprzedaży."
  },
  {
    "title": "Cennik i wycena strony internetowej dla Twojej firmy",
    "text": "Cena wynika z liczby podstron, treści, projektu i funkcji. Sklep, integracje, wersje językowe lub konfigurator wymagają osobnego określenia zakresu. Wycena rozdziela wykonanie od kosztów cyklicznych, takich jak domena, hosting, licencje i opieka. Porównując oferty stron internetowych w Legnicy, sprawdź również liczbę poprawek, prawa do materiałów, przekazanie dostępów i sposób zgłaszania zmian. Kompleksowy projekt oznacza jasno opisane zadania, a nie nieograniczoną listę dodatków. Przed rozpoczęciem potwierdzamy harmonogram, płatności oraz to, co dostarczysz po swojej stronie.",
    "href": "/cennik-stron-internetowych",
    "link": "Cennik i warianty stron"
  },
  {
    "title": "Obsługa stron internetowych po publikacji",
    "text": "Wsparcie techniczne, aktualizacje i rozbudowa wymagają ustalenia odpowiedzialności. Określamy zakres opieki, kopii zapasowych oraz reakcji na zgłoszenia. Aktualizacje oprogramowania i zmiany w integracjach mogą wpływać na działanie witryny, dlatego zasady utrzymania warto zapisać przed uruchomieniem. Jeśli samodzielnie dodajesz materiały, przekazujemy uzgodnione wskazówki dotyczące plików i edycji. Możesz rozpocząć od pojedynczego projektu, a dalsze prace zamawiać według potrzeb. Nie przedstawiamy utrzymania jako automatycznie zawartego w każdej cenie."
  },
  {
    "title": "Jak wybrać wykonawcę stron w Legnicy?",
    "text": "Sprawdź realizacje i zapytaj o konkretny udział wykonawcy. Czy przygotował projekt, treść, wdrożenie, zdjęcia, czy tylko jeden element? Profesjonalny proces powinien mieć punkty akceptacji i czytelną listę zadań. W naszym portfolio Cute as a Dumpling pokazuje prezentację produktów i kolekcji, a Victory Cars katalog oferty motoryzacyjnej. To przykłady naszego doświadczenia, nie lista klientów z Legnicy. Dobór zakresu opieramy na potrzebach Twojej firmy. Warto porównać jakość komunikacji, plan przekazania strony i zasady rozbudowy, zamiast kierować się samym rankingiem lub ceną."
  },
  {
    "title": "Brief strony internetowej dla firmy — co przygotować?",
    "text": "Cel marketingowy zapisujemy w briefie. Prześlij adres obecnej witryny, listę usług oraz przykłady pytań zadawanych przez klientów. Jeśli dopiero zaczynasz, opisz odbiorców i sposób realizacji zamówień. Potrzebujemy także informacji o osobie decyzyjnej, terminie i budżecie. Materiały od firmy mogą obejmować logo, zdjęcia, opisy produktów i zaakceptowane warunki oferty. Ustalamy, kto dostarcza treści wymagające specjalistycznej wiedzy. Wskazanie inspiracji jest pomocne, lecz projekt powinien odpowiadać własnej marce. Nie kopiujemy obcej witryny. Dostosowanie układu do Twoich treści jest ważniejsze niż odtworzenie wszystkich efektów znalezionych w internecie. Gdy zakres nie jest jeszcze jasny, zaczynamy od rozmowy i listy priorytetów.",
    "points": [
      "Cel: jaki następny krok ma wykonać użytkownik?",
      "Treści: które informacje i pliki są gotowe do użycia?",
      "Funkcje: co musi działać przy pierwszym uruchomieniu?",
      "Odbiór: kto sprawdzi projekt i zatwierdzi publikację?"
    ]
  },
  {
    "title": "Bezpieczne przekazanie i kontrola wdrożenia",
    "text": "Przed publikacją ustalamy, kto zarządza domeną, hostingiem i kontami powiązanymi ze stroną. Dostępy powinny trafić do wskazanych osób w firmie, w zakresie potrzebnym do ich pracy. Uzgadniamy kopie zapasowe, aktualizacje i sposób zgłaszania problemów. Kontrola wdrożenia obejmuje formularze, linki, wersję mobilną oraz ustalone integracje. Dla sklepu potrzebne są również testy koszyka, zamówienia i powiadomień. Obsługa płatności wymaga osobnego uzgodnienia z właścicielem konta. Lista odbiorowa pokazuje, co zostało sprawdzone oraz które zadania pozostają po stronie klienta. Profesjonalny proces przekazania ma umożliwić korzystanie z serwisu po zakończeniu projektu, a nie uzależniać każdą drobną zmianę od wykonawcy."
  },
  {
    "title": "Witryna internetowa, wizytówka Google i social media",
    "text": "Firmy z Legnicy i okolic często mają już profil społecznościowy lub wizytówkę Google. Strona może uporządkować informacje rozproszone między tymi miejscami. Sprawdzamy, czy nazwa, kontakt, zakres obsługi i odnośniki są spójne. Wizytówka Google, wcześniej znana jako Google Moja Firma, dotyczy odrębnej usługi; dostęp do profilu i jego aktualizację ustalamy osobno. Wybór kanałów zależy od modelu działalności. Dla lokalnego punktu istotne są adres i dostępność, dla producenta warianty oraz sposób zamówienia. Jeśli firma działa szerzej, nie ograniczamy komunikacji do samej Legnicy. Witryna internetowa ma wyjaśniać ofertę również osobie, która nie zna jeszcze marki."
  },
  {
    "title": "Widoczność strony w wynikach wyszukiwania — co sprawdzamy po starcie?",
    "text": "Po uruchomieniu sprawdzamy techniczną możliwość indeksowania i dane dostępne w Google Search Console. Widoczność Twojej strony, liczba wejść oraz zapytania klientów to różne informacje. Nie oceniamy skuteczności wyłącznie po obecności strony w Google. Jeśli potrzebujesz regularnej optymalizacji stron, plan określa kolejność poprawek treści i elementów technicznych. Dalsze pozycjonowanie stron WWW uwzględnia pytania odbiorców i wyniki pomiaru. Przy usługach lokalnych analizujemy frazy odpowiadające ofercie dla Legnicy lub okolic. Raport powinien pokazać wykonane zadania i uzasadnić następny krok. Skuteczne pozycjonowanie stron internetowych wymaga także aktualnej, wiarygodnej oferty i czasu na ocenę zmian; nie obiecujemy określonej pozycji."
  },
  {
    "title": "Strona i konfigurator — kiedy potrzebne jest rozwiązanie indywidualne?",
    "text": "Zwykły opis produktu nie zawsze wystarcza. Jeśli klient musi wybrać wymiary, warianty lub wyposażenie, warto rozważyć katalog z filtrami albo konfigurator. W realizacji KLAGEM pokazujemy stronę i konfigurator mebli 3D. To przykład funkcji, którą można omówić podczas briefu, nie obowiązkowy element każdej witryny. Indywidualne aplikacje webowe wymagają opisania reguł, danych i sposobu utrzymania. Wycena powinna uwzględniać testy oraz rozwój po publikacji. Najpierw ustalamy najprostszy zakres potrzebny do obsługi zamówienia; dodatkowe funkcje możemy zaplanować etapami. Takie podejście pozwala tworzyć rozwiązanie dopasowane do procesu firmy.",
    "href": "/realizacje/klagem",
    "link": "KLAGEM — strona i konfigurator mebli 3D"
  },
  {
    "title": "Jak rozwijać stronę na podstawie danych?",
    "text": "Po starcie warto zapisać punkt odniesienia: ruch, źródła wejść, najczęstsze pytania i zapytania z formularza. Strategie rozwoju powinny odpowiadać na te informacje. Jeśli użytkownicy nie rozumieją zakresu, poprawiamy ofertę. Jeśli rezygnują na telefonie, sprawdzamy działanie strony i czas ładowania się strony. Jeśli potrzebują porównania, dodajemy konkretne warianty i realizacje. Chcąc zwiększyć widoczność swojej strony, warto łączyć analizę techniczną z rzetelną treścią. Nie zmieniamy daty publikacji tylko po to, aby sprawiała wrażenie nowej. Utrzymanie i rozwój Twojej strony internetowej można rozplanować według priorytetów, możliwości zespołu i budżetu."
  },
  {
    "title": "Legnica i okolice — współpraca online i zakres SEO",
    "text": "Przy porównywaniu ofert stron internetowych dostępnych w Legnicy uwzględnij możliwość pracy zdalnej. Rozmowy, przekazanie materiałów i akceptacje możemy prowadzić online. Jeśli potrzebujesz także pozycjonowania stron w Legnicy, rozpisujemy tę pracę oddzielnie od projektu witryny. Zakres SEO w Legnicy zależy od stanu strony, oferty i rzeczywistego obszaru obsługi. Termin oraz zasady współpracy potwierdzamy przed rozpoczęciem."
  }
];
const legnicaOptions = websiteOptions.map((option, index) => ({ ...option, href: enquiryHref("web", index === 2 ? "shop" : "website") }));
const faqs = [
 {question:'Czy po wdrożeniu samodzielnie zmienię treść strony?',answer:'Jeśli potrzebujesz regularnie edytować ofertę, uzgadniamy system CMS i zakres dostępnych zmian. W ofercie zapisujemy, czy przekazanie obejmuje instrukcję lub szkolenie. Niestandardowe funkcje i przebudowa układu mogą wymagać osobnej pracy.'},
 {question:'Czy przygotujecie teksty i zdjęcia do strony?',answer:'Możemy uwzględnić treści, sesję zdjęciową lub film w zakresie projektu. Ustalamy, które informacje o firmie dostarczasz, jakie materiały już masz i czy potrzebna jest produkcja na miejscu. Koszt dojazdu oraz produkcji rozpisujemy oddzielnie, jeśli występuje.'},
 {question:'Ile kosztuje strona internetowa dla firmy z Legnicy?',answer:'Cenę ustalamy na podstawie liczby podstron, treści, funkcji i integracji. Prześlij krótki opis projektu, aby otrzymać ofertę z rozpisanym zakresem.'},
 {question:'Czy musimy spotkać się w Legnicy?',answer:'Projekt możemy prowadzić zdalnie. FOTZ Studio ma siedzibę w Poznaniu. Ustalamy sposób rozmów, przekazywania materiałów i akceptacji projektu.'},
 {question:'Ile trwa przygotowanie strony?',answer:'Termin zależy od zakresu oraz gotowości tekstów, zdjęć i decyzji. Harmonogram etapów potwierdzamy po briefie.'},
 {question:'Czy zajmujecie się SEO i opieką po wdrożeniu?',answer:'Zakres technicznego SEO, przygotowania treści, analityki i późniejszej opieki ustalamy w ofercie. Samo uruchomienie strony nie gwarantuje pozycji w Google.'},
];
export default function StronyInternetoweLegnica() {
 return <Layout><SEOHead title="Strony internetowe Legnica — projektowanie stron WWW" description="Legnica: projektowanie stron internetowych dla firm. Nowoczesne strony, sklep i przygotowanie SEO. Sprawdź realizacje, zakres pozycjonowania i wycenę FOTZ." canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/legnica" /><ServiceSchema name="Strony internetowe dla firm z Legnicy" description="Projektowanie i wdrożenie stron firmowych oraz sklepów internetowych." areaServed="Legnica" /><FAQSchema items={faqs} /><BreadcrumbSchema items={[{name:'Strona główna',url:'https://www.fotz-studio.pl'},{name:'Strony internetowe',url:'https://www.fotz-studio.pl/uslugi/strony-internetowe'},{name:'Legnica',url:'https://www.fotz-studio.pl/uslugi/strony-internetowe/legnica'}]} />
 <section className="max-w-6xl mx-auto px-6 pt-32 pb-14"><p className="dv-eyebrow mb-5">FOTZ Studio · współpraca zdalna</p><h1 className="text-4xl md:text-6xl font-heading mb-6">Strony internetowe Legnica — projektowanie stron WWW i SEO</h1><p className="text-lg text-muted-foreground max-w-3xl mb-7">Pomagamy przełożyć ofertę firmy na czytelną stronę, która działa na telefonie i prowadzi do kontaktu lub zakupu. Ustalamy strukturę, projektujemy widoki i wdrażamy uzgodnione funkcje.</p><Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Opisz stronę do wyceny</Link></section>
 <section className="max-w-6xl mx-auto px-6 py-12"><h2 className="text-3xl font-heading mb-7">Strony internetowe Legnica — zakres i wycena</h2><QuoteOptions options={legnicaOptions} /></section>
 <section className="max-w-6xl mx-auto px-6 py-12"><h2 className="text-3xl font-heading mb-7">Projektowanie stron oparte na doświadczeniu — realizacje</h2><div className="grid md:grid-cols-2 gap-6">{[{name:'Cute as a Dumpling',text:'Sklep z ręcznie robionymi dekoracjami',image:cuteDumpling,path:'/realizacje/cute-dumpling'},{name:'Victory Cars',text:'Prezentacja oferty motoryzacyjnej',image:victoryCars,path:'/realizacje/victory-cars'}].map(x=><Link key={x.path} to={x.path} className="rounded-xl border border-border overflow-hidden"><img src={x.image} alt={x.name} loading="lazy" className="w-full aspect-video object-cover" /><div className="p-5"><h3 className="text-xl mb-2">{x.name}</h3><p className="text-muted-foreground">{x.text}</p></div></Link>)}</div></section>
 <section className="max-w-6xl mx-auto px-6 py-12"><h2 className="text-3xl font-heading mb-7">Od oferty do działającej strony</h2><div className="grid md:grid-cols-3 gap-8">{[{title:'1. Cel i materiały',text:'Zbieramy informacje o usługach, odbiorcach i obszarze działania. Dla firmy obsługującej Legnicę ważne są jasne warunki dojazdu, kontakt i konkretny zakres oferty.'},{title:'2. Projekt i wdrożenie',text:'Najpierw układamy ścieżkę użytkownika. Następnie przygotowujemy projekt, treść i funkcje. Technologię dobieramy do sposobu aktualizacji strony oraz potrzebnych integracji.'},{title:'3. Kontrola przed publikacją',text:'Sprawdzamy widoki mobilne, linki, formularze i metadane. Przy zmianie starej strony ustalamy przekierowania. Instrukcję obsługi oraz opiekę rozpisujemy w zakresie.'}].map(x=><article key={x.title}><h3 className="text-xl mb-3">{x.title}</h3><p className="text-muted-foreground leading-relaxed">{x.text}</p></article>)}</div></section>
 <div className="max-w-6xl mx-auto px-6 py-12">{sections.map(item => <section key={item.title} className="grid md:grid-cols-[1fr_1.4fr] gap-5 md:gap-12 py-8 border-b border-border"><h2 className="text-2xl md:text-3xl font-heading">{item.title}</h2><div><p className="text-muted-foreground leading-relaxed">{item.text}</p>{item.points && <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">{item.points.map(point => <li key={point}>{point}</li>)}</ul>}{item.href && <Link to={item.href} className="inline-block underline underline-offset-4 mt-5">{item.link}</Link>}</div></section>)}</div>

 <section className="max-w-4xl mx-auto px-6 py-12"><h2 className="text-3xl font-heading mb-7">Projektowanie stron internetowych — najczęściej zadawane pytania</h2>{faqs.map(f=><details key={f.question} className="py-5 border-b border-border"><summary className="font-medium cursor-pointer">{f.question}</summary><p className="mt-4 text-muted-foreground">{f.answer}</p></details>)}<div className="mt-8 flex flex-wrap gap-4"><Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Zapytaj o swój projekt</Link><Link className="dv-btn dv-btn-secondary" to="/cennik-stron-internetowych">Jak wyceniamy strony</Link></div></section>
 </Layout>;
}
