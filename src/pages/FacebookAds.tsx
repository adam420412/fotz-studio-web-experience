import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/StructuredData";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { InlineVideo } from "@/components/InlineVideo";
import { enquiryHref } from "@/lib/enquiry.mjs";

const path = "/performance-marketing/facebook-ads";
const lead = "Jakiego klienta chcesz pozyskać i co ma zrobić po zobaczeniu reklamy na Facebooku? Prowadzimy kampanie dla firm usługowych, producentów i sklepów. Dobieramy cel, kreację i sposób pomiaru do tego, czy potrzebujesz rezerwacji, zapytania ofertowego czy zakupu.";
const options = [
  {
    title: "Facebook Lead Ads dla firmy usługowej",
    text: "Jeżeli sprzedajesz po rozmowie, pomóż klientowi zadać dobre pytanie. Dla wykonawcy mebli ważne będą rodzaj zabudowy i miejsce montażu, dla sali weselnej termin i liczba gości. Dobieramy pytania, sprawdzamy drogę zgłoszenia i ustalamy, kto oddzwoni po wysłaniu formularza. Możemy zaplanować przekazywanie zapytań do CRM.",
    variant: "lead_ads",
    label: "Omów pozyskiwanie zapytań",
  },
  {
    title: "Meta Ads dla producenta i sprzedaży B2B",
    text: "Pokaż produkt w zastosowaniu. Reklama maszyny może prowadzić do karty technicznej, a stamtąd do prośby o dobór modelu. Przed startem ustalamy z handlowcem, które informacje pozwalają przygotować ofertę. Gdy decyzja trwa kilka miesięcy, porównujemy zapytania o właściwy produkt i przygotowane wyceny.",
    variant: "meta_ads",
    label: "Zaplanuj kampanię dla produktu",
  },
  {
    title: "Audyt działającej kampanii na Facebooku",
    text: "Masz dużo kliknięć i mało rozmów? Prześledzimy jedną ścieżkę od reklamy do odpowiedzi sprzedawcy. Sprawdzamy obietnicę w reklamie, stronę na telefonie, działanie formularza oraz jakość próbki zgłoszeń. Otrzymasz listę zmian w kolejności wdrażania i sposób sprawdzenia pierwszej poprawki.",
    variant: "campaign_audit",
    label: "Zapytaj o audyt kampanii",
  },
];

const sections = [
  {
    title: "Co ma osiągnąć kampania reklamowa? Cele kampanii na Facebooku",
    text: "Zanim włączymy płatną emisję, ustalamy, jak rozpoznasz wartościowy wynik. Właściciel szkoły językowej może szukać osób gotowych zapisać się na konkretny kurs. Producent może potrzebować rozmów z dystrybutorami. Obie firmy mogą publikować w tych samych mediach społecznościowych, ale potrzebują innych komunikatów, stron i pytań. Na etapie tworzenia kampanii zapisujemy kryterium dobrego kontaktu oraz koszt, który warto przetestować.",
  },
  {
    title: "Jak działa system Facebook Ads i kto ma dostęp do konta?",
    text: "Kampania na Facebooku ma trzy poziomy, które łączy Menedżer reklam firmy Meta. Na poziomie kampanii wybieramy cel reklamowy. Zestaw reklam porządkuje m.in. grupę odbiorców i umiejscowienia, a sama reklama zawiera tekst, materiał i miejsce docelowe. Pracujemy na koncie reklamowym firmy z uzgodnionymi uprawnieniami. Omawiamy, kto akceptuje budżet i kto płaci za emisję. Dzięki temu po zakończeniu współpracy właściciel ma dostęp do historii wydatków oraz wyników.",
  },
  {
    title: "Grupa docelowa. Komu i gdzie wyświetlać reklamy?",
    text: "Zaczynamy od rzeczywistego obszaru sprzedaży. Firma montująca zabudowy w jednym województwie ma inne możliwości niż sklep z wysyłką na terenie Polski. Przy planowaniu targetowania reklam uwzględniamy dostępność oferty, język i dane o dotychczasowych zamówieniach. Ustalamy hipotezę i porównujemy jakość zgłoszeń z wybranych obszarów. Dostępne ustawienia sprawdzamy na Twoim koncie. Sam system reklamowy nie potwierdzi, czy dana osoba ma budżet na Twój produkt.",
  },
  {
    title: "Reklama na Facebooku z formularzem Lead Ads czy na własnej stronie?",
    text: "Formularz błyskawiczny pozwala użytkownikowi wysłać zgłoszenie wewnątrz platformy. Dobrze sprawdza się do sprawdzenia zainteresowania jasno opisaną usługą. Gdy wycena wymaga rysunku, kilku parametrów lub poznania warunków współpracy, lepszym miejscem docelowym może być strona internetowa. W obu wariantach wspólnie przechodzimy proces na telefonie i sprawdzamy, gdzie pojawia się nowe zgłoszenie, jakie dane docierają i kto ma je obsłużyć.",
  },
  {
    title: "Format reklamy na Facebooku i Instagramie",
    text: "Jedno zdjęcie z krótkim nagłówkiem może wystarczyć, aby pokazać nową usługę. Reklama karuzelowa pozwala porównać warianty lub przejść przez etapy realizacji. Film przydaje się, gdy warto pokazać ruch, skalę albo sposób użycia produktu. Przygotowujemy wersje do ustalonych miejsc emisji, sprawdzamy czytelność napisów i podgląd na telefonie. Przed wyceną ustalamy, kto dostarcza zdjęcia, czy są potrzebne nagrania i w jakim zakresie materiały mogą trafić do płatnej reklamy.",
  },
  {
    title: "Kampanie reklamowe na Facebooku dla sklepu internetowego",
    text: "Kiedy sklep internetowy promuje różne warianty produktów, sprawdzamy, czy kliknięcie w reklamę otwiera właściwy model oraz czy cena i dostępność są aktualne. W kampanii sprzedażowej ustalamy sposób pomiaru zamówienia, jego wartości i waluty. Przed zwiększeniem wydatków porównujemy dane Meta z zamówieniami w sklepie i uwzględniamy zwroty. Przychód przypisany do reklamy pomaga ocenić kampanię, ale decyzja o budżecie zależy również od marży i kosztów obsługi.",
  },
  {
    title: "Co pokazujemy w kreacji reklamowej? Przykład z portfolio FOTZ",
    text: "W rolce CUPRA Raval przy Enea Stadionie w Poznaniu detal samochodu przeplata się z szerszym planem obiektu. To przykład materiału, który możesz obejrzeć i ocenić przed zamówieniem produkcji. Przy Twoim produkcie ustalimy, jaki detal odpowiada na pytanie kupującego. Może to być sposób składania stołu, zmiana konfiguracji lub zachowanie maszyny w pracy. Prawo do użycia filmu, montaż wariantów i zakup emisji omawiamy w wycenie.",
  },
  {
    title: "Pomiar konwersji. Jak połączyć wyniki z Meta Ads i dane z CRM?",
    text: "Piksel Meta, wcześniej Facebook Pixel, pozwala mierzyć wybrane działania na stronie. Zależnie od systemu możemy uzgodnić dodatkowe przekazywanie zdarzeń przez API konwersji. Ustalamy, jakie dane są potrzebne, uwzględniamy zgody i sprawdzamy, czy jedno działanie użytkownika nie jest liczone dwukrotnie. Dla usług przydaje się porównanie zgłoszeń z CRM. Jeśli w panelu widać dziesięć formularzy, handlowiec może wskazać, ile dotyczyło właściwej usługi i do ilu klientów udało się dotrzeć.",
  },
  {
    title: "Optymalizacja kampanii Facebook Ads po pierwszych zapytaniach",
    text: "Jeżeli zespół social media widzi reakcje, a handlowiec dostaje pytania wyłącznie o cenę, przeanalizujmy rozmowy przed zmianą grupy odbiorców. Może brakować orientacyjnego zakresu zamówienia, przykładu wykonania albo informacji o obszarze działania. Testujemy zmianę przy ustalonym budżecie kampanii i obserwujemy kolejne kontakty. Raport opisuje, co zmieniliśmy, jaki był koszt i co stało się ze zgłoszeniami po stronie firmy. W razie małej próby zapisujemy, czego nie da się jeszcze rozstrzygnąć.",
  },
  {
    title: "Budżet reklamowy i koszt kampanii. Jak czytać raport?",
    text: "Koszt kliknięcia pokazuje cenę przejścia, a koszt kontaktu można policzyć, dzieląc wydatki na emisję przez liczbę zgłoszeń. Dla przykładu 1 000 zł emisji i 20 zgłoszeń daje 50 zł za zgłoszenie. Jeżeli tylko pięć spełnia kryteria sprzedaży, koszt zgodnego z ofertą zapytania wynosi 200 zł. To przykład rachunku. Przy ocenie opłacalności doliczamy wynagrodzenie za prowadzenie kampanii i przygotowanie materiałów. Dla sklepu sprawdzamy też marżę i wartość zakończonych zakupów.",
  },
  {
    title: "Remarketing i rozpoznawalność marki",
    text: "Gdy klienci wracają do oferty po kilku dniach, możemy zaplanować osobny komunikat dla osób, które wcześniej odwiedziły stronę lub weszły w interakcję z marką. Warunkiem są odpowiednie dane i wystarczająca grupa odbiorców. Proponujemy materiał odpowiadający na kolejną wątpliwość, na przykład pokaz montażu zamiast powtórzenia tego samego zdjęcia. Kampanie zasięgowe mają inne cele reklamowe. Ich rolę uzgadniamy osobno, podobnie jak kryterium oceny rozpoznawalności.",
  },
  {
    title: "Facebook Ads czy Google Ads? Jak agencja dobiera kanał do oferty",
    text: "Reklama na Facebooku może pokazać zastosowanie produktu osobie, która jeszcze nie zna jego nazwy. Google Ads przydaje się, gdy potencjalni klienci szukają już wykonawcy albo konkretnego modelu. Zanim podzielimy środki, sprawdzamy, gdzie masz dziś najwięcej wartościowych zapytań i czy wystarczy materiałów do testu. Prowadzenie obu kanałów wymaga osobnych założeń. W raporcie ustalamy wspólne zasady liczenia konwersji, aby jednej sprzedaży nie przypisać dwukrotnie.",
  },
  {
    title: "Reklama Facebook Ads przed startem. Co zatwierdza firma?",
    text: "Wysyłamy podgląd zestawu reklam z tekstem, wersją grafiki lub filmu oraz docelowym linkiem. Ustalamy, na jakie pytanie użytkownika odpowiada dana kreacja reklamowa i czy oferta jest aktualna przez cały okres emisji. Właściciel marki może sprawdzić nazwy produktów, warunki promocji i zapas przed opublikowaniem reklamy. Jeżeli Facebook i Instagram pokazują materiał w różnych proporcjach, sprawdzamy obie wersje. W briefie zapisujemy również, kto może zatrzymać kampanię, gdy zabraknie produktu albo terminów.",
  },
  {
    title: "Po czym poznać skuteczną reklamę na Facebooku przy małym budżecie?",
    text: "Załóżmy, że dwa zestawy reklam przyniosły po dziesięć zgłoszeń. W pierwszym handlowiec rozmawiał z jedną zainteresowaną osobą, w drugim z pięcioma. Sam koszt formularza nie pokaże tej różnicy. Dlatego specjalista Facebook Ads potrzebuje od firmy informacji zwrotnej o kontaktach. Użytkownicy Facebooka mogą polubić film nawet wtedy, gdy Twoja usługa jest niedostępna w ich mieście. Przy małym budżecie zaczynamy od jednej oferty i jednej decyzji, którą chcemy podjąć na podstawie wyników. Ustalamy, co będzie podstawą do dalszych wydatków, zmiany treści lub zakończenia testu.",
  },
  {
    title: "Jaką rolę pełni agencja w obsłudze kampanii reklamowych Meta?",
    text: "Przed podpisaniem zlecenia dzielimy odpowiedzialność za działania reklamowe. Agencja przygotowuje ustalone elementy i pilnuje uzgodnionych limitów. Firma przekazuje informacje o dostępności, zatwierdza materiały i obsługuje nadesłane zapytania. Po starcie sprawdzamy, czy reklamy zaczęły się wyświetlać na wybranych umiejscowieniach. Jeśli system Meta wstrzyma emisję, ustalamy przyczynę widoczną na koncie i przedstawiamy możliwe rozwiązanie. Na zakończenie omawiamy wykonane prace i wnioski z okresu rozliczeniowego.",
  },
  {
    title: "Kiedy oceniać pierwsze efekty kampanii Meta Ads?",
    text: "Jeśli klient kupuje po prezentacji lub pomiarze, pierwszym wynikiem jest umówione spotkanie. Zanim uruchomimy reklamy, zapytamy, ile czasu zwykle dzieli zgłoszenie od zamówienia. Termin pierwszej oceny dobierzemy do tego cyklu. W międzyczasie można już sprawdzić, czy formularz dociera do handlowca i czy zgłaszają się osoby z obsługiwanego regionu. Gdy minie termin decyzji zakupowej, wrócimy do tych samych kontaktów i porównamy liczbę ofert oraz zawartych umów.",
  },
  {
    title: "Jak optymalizować kampanie, kiedy koszt reklamy rośnie?",
    text: "Tu przydaje się rozróżnienie trzech kosztów. CPM oznacza koszt tysiąca wyświetleń, CPC to średni koszt kliknięcia, a CPL to koszt pozyskania zgłoszenia. Porównujemy je dla tego samego okresu i celu. Jeśli CPM jest podobny, lecz po wejściu mniej osób wysyła formularz, sprawdzamy zachowania użytkowników na stronie i jej działanie na telefonie. Jeżeli zmienił się koszt samej emisji, porównujemy umiejscowienia i materiały. Tak wybieramy pierwszy test i ustalamy jego budżet.",
  },
];

const faqs = [
  {
    question: "Co obejmuje prowadzenie kampanii Facebook Ads w agencji?",
    answer: "Ustalamy cel kampanii, przygotowujemy strukturę na koncie, opracowujemy uzgodnione kreacje i analizujemy wyniki. Przed startem otrzymujesz zakres prowadzenia reklam, zasady akceptacji materiałów oraz częstotliwość raportowania. Dodatkowe nagrania, zmiany strony i integracje wyceniamy według zakresu projektu.",
  },
  {
    question: "Ile kosztuje reklama na Facebooku dla firmy usługowej?",
    answer: "Koszt obsługi i limit wydatków na platformie to dwie pozycje. Porównaj ceny pakietów z liczbą reklam, kreacji i raportów, których potrzebujesz. W zapytaniu podaj obszar działania, usługę oraz planowany miesięczny budżet na emisję. W odpowiedzi potwierdzimy pełną kwotę i warunki.",
  },
  {
    question: "Czy można zlecić tylko audyt kampanii na Facebooku?",
    answer: "Tak. Podaj, który wynik budzi wątpliwości, czego próbujesz i jak dziś oceniasz zgłoszenia. Sprawdzimy ustawienia, spójność reklamy z ofertą i drogę od kliknięcia do kontaktu. Zakres przeglądu oraz ewentualne wdrożenia ustalamy przed rozpoczęciem pracy.",
  },
  {
    question: "Czy muszę mieć sklep, żeby uruchomić kampanię Facebook Ads?",
    answer: "Nie. Firma usługowa może przyjmować zapytania przez formularz Meta, własną stronę lub rozmowę. Najpierw ustalamy, gdzie Twoi klienci chętnie podejmują pierwszy krok i kto odpowiada za kontakt. W reklamie opisujemy konkretną usługę i informację, którą odbiorca otrzyma po zgłoszeniu.",
  },
  {
    question: "Co przesłać agencji do wyceny obsługi Meta Ads?",
    answer: "Wyślij link do oferty, opisz klienta i wskaż cel biznesowy. Przydatne są planowany termin, budżet na reklamę w Meta oraz informacja o dostępnych materiałach. Jeśli kampanie już działają, wystarczy na początek opisać problem i podać orientacyjną liczbę zamówień albo rozmów po reklamach.",
  },
  {
    question: "Czy promowanie posta i prowadzenie kampanii w Menedżerze reklam to to samo?",
    answer: "Promowanie posta jest uproszczonym sposobem płatnej promocji istniejącej publikacji. Menedżer reklam pozwala zaplanować kampanię Meta Ads z osobnymi zestawami reklam, kreacjami i pomiarem wybranego celu. Jeśli chcesz tylko nagłośnić termin wydarzenia, zakres przygotowania będzie inny niż przy stałym pozyskiwaniu kontaktów. Ustalamy to na początku, żeby porównać koszt kampanii z wartością oczekiwanego działania.",
  },
  {
    question: "Po czym poznać, że reklama na Facebooku wymaga zmiany?",
    answer: "Sprawdzamy, czy zmieniły się koszty emisji, reakcje użytkowników Facebooka, liczba zapytań lub ich jakość. Oglądamy reklamy na podstawie tych danych i rozmów z handlowcem. Gdy potencjalni klienci klikają, ale nie mogą znaleźć pokazanej usługi na stronie, najpierw poprawiamy miejsce docelowe. Jeśli zaś odbiorcy nie rozumieją produktu, pierwszym testem może być inna forma reklamy lub nagranie instruktażowe.",
  },
];

const pricingPackages = [
  {
    name: "Start",
    price: "1 500",
    features: [
      "Budżet reklamowy do 3 000 zł",
      "1–2 kampanie reklamowe",
      "Podstawowe targetowanie",
      "Raport miesięczny",
      "Kreacje graficzne (2 szt.)",
    ],
  },
  {
    name: "Business",
    price: "2 500",
    features: [
      "Budżet reklamowy do 10 000 zł",
      "3–5 kampanii reklamowych",
      "Zaawansowane targetowanie",
      "Retargeting i Lookalike",
      "Testy A/B",
      "Raporty tygodniowe",
      "Kreacje graficzne (5 szt.)",
    ],
  },
  {
    name: "Premium",
    price: "4 500",
    features: [
      "Dowolny uzgodniony budżet emisji",
      "Nieograniczona liczba kampanii",
      "Kompleksowa strategia",
      "Piksel Meta i API konwersji",
      "Dedykowany opiekun",
      "Raporty na żądanie",
      "Kreacje graficzne i wideo",
      "Integracja z Google Ads",
    ],
  },
];

export default function FacebookAds() {
  const contact = enquiryHref("marketing", "meta_ads");
  return <>
    <SEOHead title="Kampanie reklamowe na Facebooku – agencja Meta Ads i cennik"
      description="Prowadzenie kampanii Facebook Ads dla firm. Ile kosztuje reklama na Facebooku? Poznaj cennik obsługi Meta Ads i zapytaj o kampanię dla swojej firmy."
      canonical="https://www.fotz-studio.pl/performance-marketing/facebook-ads" />
    <Layout>
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "/" }, { name: "Usługi", url: "/uslugi" }, { name: "Facebook Ads", url: path }]} />
      <ServiceSchema name="Prowadzenie kampanii Facebook Ads" description={lead} areaServed="Polska" />
      <FAQSchema items={faqs} />
      <PageBreadcrumbs items={[{ name: "Usługi", url: "/uslugi" }, { name: "Facebook Ads" }]} />
      <section className="container-wide grid items-center gap-8 px-6 py-10 md:px-12 lg:grid-cols-2">
        <div>
          <h1 className="offer-heading mb-6">Kampanie reklamowe Facebook Ads – prowadzenie kampanii i cennik</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">{lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="dv-btn dv-btn-primary" to={contact}>Zapytaj o prowadzenie kampanii</Link>
            <a className="dv-btn dv-btn-secondary" href="#cennik">Porównaj ceny i zakres</a>
          </div>
        </div>
        <figure className="min-w-0">
          <InlineVideo className="aspect-video w-full rounded-xl bg-black" width={1280} height={720}
            src="/videos/instagram/cupra-raval.mp4" poster="/work/instagram/cupra-raval-640.webp"
            aria-label="Film FOTZ Studio prezentujący CUPRA Raval przy Enea Stadionie w Poznaniu" />
          <figcaption className="mt-2 text-sm text-muted-foreground">Z portfolio FOTZ Studio · CUPRA Raval przy Enea Stadionie w Poznaniu.</figcaption>
        </figure>
      </section>
      <section className="container-wide px-6 py-12 md:px-12">
        <h2 className="mb-8 text-3xl font-heading">Prowadzenie kampanii Facebook Ads. W czym możemy pomóc?</h2>
        <div className="grid gap-6 lg:grid-cols-3">{options.map(option => <article key={option.variant} className="dv-panel flex flex-col p-6">
          <h3 className="mb-4 text-xl font-heading">{option.title}</h3>
          <p className="mb-5 leading-relaxed text-muted-foreground">{option.text}</p>
          <Link className="mt-auto underline underline-offset-4" to={enquiryHref("marketing", option.variant)}>{option.label}</Link>
        </article>)}</div>
      </section>
      <section id="cennik" className="container-wide scroll-mt-24 px-6 py-12 md:px-12">
        <h2 className="mb-4 text-3xl font-heading">Cennik Facebook Ads – pakiety obsługi kampanii</h2>
        <p className="mb-8 max-w-3xl leading-relaxed">Cena miesięczna dotyczy obsługi. Budżet na wyświetlanie reklam opłacasz osobno w Meta. Przed zleceniem potwierdzamy kwotę brutto, limit emisji, zakres prac i koszt dodatkowej produkcji.</p>
        <div className="grid gap-6 md:grid-cols-3">{pricingPackages.map(pkg => <article key={pkg.name} className="border-t border-border py-5">
          <h3 className="text-xl font-heading">{pkg.name}</h3>
          <p className="my-3 text-2xl font-medium">{pkg.price} zł netto miesięcznie</p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">{pkg.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
        </article>)}</div>
        <Link className="dv-btn dv-btn-primary mt-6" to={contact}>Poproś o wycenę swojej kampanii</Link>
      </section>
      <div className="container-wide px-6 md:px-12">{sections.map(item => <section key={item.title} className="grid gap-4 border-t border-border py-7 md:grid-cols-[1fr_1.7fr] md:gap-10">
        <h2 className="text-2xl font-heading">{item.title}</h2>
        <p className="leading-relaxed text-muted-foreground">{item.text}</p>
      </section>)}</div>
      <section className="container-wide max-w-4xl px-6 py-12 md:px-12">
        <h2 className="mb-6 text-3xl font-heading">Pytania o prowadzenie kampanii Facebook Ads</h2>
        {faqs.map(item => <details key={item.question} className="border-t border-border py-3">
          <summary className="min-h-11 cursor-pointer py-2 font-medium">{item.question}</summary>
          <p className="py-3 leading-relaxed text-muted-foreground">{item.answer}</p>
        </details>)}
      </section>
      <section className="container-wide px-6 pb-12 md:px-12">
        <h2 className="mb-4 text-3xl font-heading">Co chcesz sprzedać dzięki reklamie na Facebooku?</h2>
        <p className="mb-6 max-w-2xl">Podeślij ofertę i napisz, ile zapytań możesz obsłużyć lub jaki produkt chcesz promować. Jeśli masz kampanię, dodaj, co dotąd działo się z pozyskanymi kontaktami.</p>
        <Link className="dv-btn dv-btn-primary" to={contact}>Opisz projekt w formularzu</Link>
      </section>
      <RelatedServices currentService="facebook-ads" subtitle="Poznaj inne kanały reklamowe" />
    </Layout>
  </>;
}
