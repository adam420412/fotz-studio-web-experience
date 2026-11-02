import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { enquiryHref } from "@/lib/enquiry.mjs";
import victoryCarsImg from "@/assets/portfolio/victory-cars-web.webp";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new-web.webp";

const breadcrumbs = [
  { label: "Strona główna", href: "/" }, { label: "Usługi", href: "/uslugi" },
  { label: "Tworzenie stron", href: "/uslugi/tworzenie-stron-internetowych" }, { label: "Kraków" },
];
const options = [
  { title: "Landing page", text: "Jedna oferta i jeden główny cel: zapytanie, zapis lub kontakt. Dobry punkt wyjścia dla konkretnej usługi albo kampanii.", items: ["Układ jednej strony", "Sekcje oferty i dowodów", "Kontakt dopasowany do celu"], variant: "website" },
  { title: "Strona firmowa", text: "Osobne podstrony usług, informacje o firmie i realizacje. Struktura, która pozwala klientowi znaleźć odpowiedź przed rozmową.", items: ["Mapa podstron uzgodniona w ofercie", "Projekt na telefon i komputer", "Sposób edycji treści ustalony przed startem"], variant: "website" },
  { title: "Przebudowa strony", text: "Masz już stronę, ale oferta jest nieaktualna lub trudno wysłać zapytanie? Najpierw sprawdzamy, co warto zachować.", items: ["Przegląd treści i ścieżki kontaktu", "Plan zmian układu i funkcji", "Lista adresów i potrzebnych przekierowań"], variant: "redesign" },
];
const steps = [
  { title: "Cel, materiały i wycena", text: "Ustalamy, komu sprzedajesz, jakie usługi pokazujemy i co użytkownik ma zrobić na stronie. Określamy liczbę podstron, funkcje, materiały, poprawki oraz harmonogram. Dostajesz zakres do akceptacji przed rozpoczęciem pracy." },
  { title: "Treści i projekt graficzny", text: "Porządkujemy ofertę, nagłówki, zdjęcia i przyciski. Projektowanie strony internetowej zaczynamy od najważniejszych informacji. Uzgadniamy wygląd oraz sposób przekazania jednej zebranej listy uwag." },
  { title: "Wdrożenie i system CMS", text: "Dobieramy technologię do funkcji i sposobu aktualizacji. WordPress lub inne rozwiązanie ma ułatwiać obsługę strony. Panel do samodzielnej edycji, integracje i wersje językowe wpisujemy do wyceny, jeśli są potrzebne." },
  { title: "Testy, publikacja i przekazanie", text: "Sprawdzamy wersję mobilną, menu, linki i formularz. Uzgadniamy konfigurację domeny i hostingu oraz dostęp do strony. Instrukcję obsługi, zakres wsparcia po uruchomieniu i ewentualną stałą opiekę określamy w ofercie." },
];
const faqs = [
  { question: "Ile kosztuje tworzenie strony internetowej dla firmy z Krakowa?", answer: "Wycenę przygotowujemy po ustaleniu liczby podstron, treści, projektu i funkcji. Landing page, rozbudowana strona firmowa i sklep internetowy wymagają innego nakładu pracy. W ofercie rozdzielamy wykonanie, dodatkowe integracje, materiały oraz późniejsze koszty utrzymania." },
  { question: "Ile trwa stworzenie strony www?", answer: "Termin ustalamy po przeglądzie zakresu i dostępności materiałów. W harmonogramie uwzględniamy projekt, wdrożenie, uwagi oraz testy. Dodatkowe języki, integracje i opóźnienia w dostarczeniu treści mogą zmienić datę publikacji; uzgadniamy to przed rozszerzeniem prac." },
  { question: "Czy macie biuro w Krakowie?", answer: "Nie mamy publicznego biura ani oddziału w Krakowie. Obsługujemy firmy zdalnie. Termin i miejsce ewentualnego spotkania ustalamy indywidualnie. Adres rejestrowy FOTZ Studio to Poznańska 117/11, 62-023 Kamionki." },
  { question: "Czy mogę samodzielnie edytować stronę?", answer: "Tak, jeżeli uzgodnimy wdrożenie odpowiedniego systemu zarządzania treścią. Przed startem wskazujesz, co chcesz aktualizować: ofertę, zdjęcia, wpisy blogowe lub produkty. Dobieramy CMS i ustalamy zakres przekazania dostępu oraz instrukcji." },
  { question: "Co obejmuje przygotowanie strony pod SEO?", answer: "Ustalamy strukturę podstron, nagłówków i adresów oraz tytuły i opisy. Przy przebudowie analizujemy potrzebne przekierowania. Zakres techniczny, mapa strony i konfiguracja Search Console trafiają do oferty. Stałe pozycjonowanie, publikowanie artykułów i pozyskiwanie linków to osobna usługa; samo wdrożenie nie gwarantuje pozycji w Google." },
  { question: "Czy przygotujecie teksty, zdjęcia i wideo?", answer: "Możemy przygotować treści i wycenić produkcję foto lub wideo. Na początku sprawdzamy, jakie materiały już masz i które możesz wykorzystać. Osobno ustalamy sesję, nagrania, liczbę materiałów oraz zakres ich użycia. Nie wliczamy produkcji automatycznie w wykonanie strony." },
  { question: "Czy wykonujecie sklepy i integracje rezerwacji?", answer: "Możemy omówić sklep internetowy lub integrację wybranego systemu. Potrzebujemy listy produktów, sposobów płatności i dostawy albo dokumentacji systemu rezerwacji. Dopiero po sprawdzeniu możliwości potwierdzamy zakres, koszty licencji i wykonania." },
  { question: "Jakie są koszty utrzymania po publikacji?", answer: "To m.in. odnowienie domeny i hostingu, ewentualne licencje oraz uzgodniona opieka. Aktualizacje, kopie zapasowe i zmiany treści wymagają określenia odpowiedzialności. Możesz zamówić osobną obsługę miesięczną; jej zakres i limit pracy potwierdzamy przed rozpoczęciem." },
];
const works = [
  {title:"Victory Cars",image:victoryCarsImg,url:"/realizacje/victory-cars",text:"Prezentacja oferty motoryzacyjnej."},
  {title:"Cute Dumpling",image:cuteDumplingImg,url:"/realizacje/cute-dumpling",text:"Strona marki gastronomicznej."},
];
const sectionClass = "container-wide px-6 md:px-12 py-12 md:py-20 scroll-mt-28";
const headingClass = "text-2xl md:text-4xl font-heading mb-5";
const textClass = "text-muted-foreground leading-relaxed";

export default function TworzenieStronKrakow() {
  return <>
    <SEOHead title="Tworzenie stron internetowych Kraków | FOTZ Studio" description="Projektujemy strony www dla firm z Krakowa. Jasny zakres, wersja mobilna, kontakt i wycena przed startem. Zdalna współpraca z FOTZ Studio." canonical="https://www.fotz-studio.pl/uslugi/tworzenie-stron-internetowych/krakow" />
    <ServiceSchema name="Tworzenie stron internetowych dla firm z Krakowa" description="Projektowanie, wdrażanie i przebudowa stron www. Współpraca zdalna, zakres i wycena ustalane przed startem." areaServed="Kraków" />
    <BreadcrumbSchema items={breadcrumbs} /><FAQSchema items={faqs} />
    <Layout>
      <PageBreadcrumbs items={breadcrumbs} />
      <section className="bg-slate-950 text-white py-10 md:py-20">
        <div className="container-wide px-6 md:px-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm text-blue-300 font-medium mb-4">FOTZ Studio · współpraca zdalna</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading leading-tight mb-5">Tworzenie stron internetowych dla firm z Krakowa</h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mb-6">Pokaż ofertę tak, żeby klient wiedział, co zamówić i jak się z Tobą skontaktować. Projektujemy strony www, ustalamy zakres i wycenę przed startem, a przed publikacją sprawdzamy działanie na telefonie.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to={enquiryHref("web", "website")} className="dv-btn bg-blue-600 hover:bg-blue-700 text-white min-h-12 w-full sm:w-auto justify-center">Zapytaj o stronę <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
              <a href="#zakres" className="dv-btn border border-slate-600 text-white min-h-12 w-full sm:w-auto justify-center">Zobacz zakres</a>
            </div>
            <p className="text-sm text-slate-300 mt-4">Masz już stronę? Prześlij jej adres i opisz, co wymaga zmiany.</p>
          </div>
          <figure className="hidden lg:block">
            <img src="/work/fotz-work-800.webp" width="800" height="533" alt="Praca nad stroną internetową w FOTZ Studio" className="rounded-2xl w-full aspect-[3/2] object-cover" loading="lazy" decoding="async" />
            <figcaption className="text-sm text-slate-400 mt-3">Własne materiały FOTZ Studio.</figcaption>
          </figure>
        </div>
      </section>
      <nav aria-label="Na tej stronie" className="border-b border-border"><div className="container-wide px-6 md:px-12 flex flex-wrap gap-x-6 gap-y-1 py-3 text-sm">
        {[["#zakres","Zakres"],["#wycena","Koszty"],["#proces","Proces"],["#realizacje","Realizacje"],["#pytania","Pytania"]].map(([href,label])=><a key={href} href={href} className="inline-flex items-center min-h-11 underline-offset-4 hover:underline">{label}</a>)}
      </div></nav>
      <section id="zakres" className={sectionClass}>
        <h2 className={headingClass}>Projektowanie stron www: jaki zakres ma sens?</h2><p className={`${textClass} max-w-3xl mb-8`}>Nie każda firma potrzebuje rozbudowanego serwisu. Zaczynamy od oferty i pytań klientów. Liczbę podstron, sposób edycji i dodatkowe funkcje dobieramy do tego, co strona ma ułatwić.</p>
        <div className="grid md:grid-cols-3 gap-5">{options.map(option=><article key={option.title} className="rounded-2xl border border-border p-6 flex flex-col">
          <h3 className="text-xl font-heading mb-3">{option.title}</h3><p className={`${textClass} mb-5`}>{option.text}</p>
          <ul className="space-y-3 mb-6">{option.items.map(item=><li key={item} className="flex gap-3 text-sm leading-relaxed"><CheckCircle2 aria-hidden="true" className="w-5 h-5 shrink-0 text-primary" />{item}</li>)}</ul>
          <Link to={enquiryHref("web",option.variant)} className="mt-auto inline-flex items-center gap-2 min-h-11 font-medium">Omów zakres <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
        </article>)}</div>
        <p className={`${textClass} mt-6`}>Planujesz sprzedaż online? <Link to="/uslugi/sklepy-internetowe/krakow" className="underline underline-offset-4">Sprawdź tworzenie sklepów internetowych</Link>. Płatności, dostawy i integracje wyceniamy po poznaniu wymagań.</p>
      </section>
      <section id="wycena" className="bg-muted/40 scroll-mt-28"><div className={`${sectionClass} grid lg:grid-cols-2 gap-8 lg:gap-16`}>
        <div><h2 className={headingClass}>Ile kosztuje strona internetowa?</h2><p className={`${textClass} mb-4`}>Cena zależy od liczby podstron, projektu, materiałów, systemu CMS i integracji. Przed wyceną ustalamy, co już masz, a co trzeba przygotować. Dzięki temu porównujesz konkretny zakres pracy.</p><p className={textClass}>W ofercie określamy etapy, termin, poprawki i płatności. Hosting, domena, płatne narzędzia, produkcja zdjęć i stałe działania marketingowe są wyszczególnione osobno, jeśli są potrzebne.</p></div>
        <div className="rounded-2xl bg-background border border-border p-6 md:p-8"><h3 className="text-xl font-heading mb-4">Do wyceny wystarczy na początek:</h3><ul className="list-disc pl-5 space-y-3 leading-relaxed"><li>krótki opis firmy i najważniejszej usługi,</li><li>adres obecnej strony lub przykłady oczekiwanego układu,</li><li>lista potrzebnych podstron i funkcji,</li><li>informacja o tekstach, zdjęciach i terminie.</li></ul><Link to={enquiryHref("web","website")} className="dv-btn dv-btn-primary mt-6 w-full sm:w-auto min-h-12 justify-center">Opisz projekt <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></div>
      </div></section>
      <section id="proces" className={sectionClass}>
        <h2 className={headingClass}>Jak przebiega tworzenie strony internetowej?</h2><p className={`${textClass} max-w-3xl mb-8`}>Współpracujemy z firmami z Krakowa i Małopolski zdalnie. Nie mamy lokalnego biura. Materiały i uwagi przekazujemy online; ewentualne spotkanie wymaga wcześniejszego ustalenia miejsca.</p>
        <ol className="grid md:grid-cols-2 gap-6">{steps.map((step,i)=><li key={step.title} className="border border-border rounded-2xl p-6"><span className="text-sm text-primary font-semibold">0{i+1}</span><h3 className="text-xl font-heading mt-3 mb-3">{step.title}</h3><p className={textClass}>{step.text}</p></li>)}</ol>
      </section>
      <section className="bg-muted/40"><div className={`${sectionClass} grid md:grid-cols-2 gap-8`}>
        <div><h2 className="text-2xl md:text-3xl font-heading mb-4">Responsywna strona i wygodny kontakt</h2><p className={textClass}>Na telefonie liczą się czytelne teksty, krótka droga do oferty i przyciski, które łatwo nacisnąć. Przed odbiorem sprawdzamy menu, formularz i wybrane szerokości ekranu. Zdjęcia dobieramy do treści i rozmiaru wyświetlania; unikamy dekoracji utrudniających korzystanie ze strony.</p></div>
        <div><h2 className="text-2xl md:text-3xl font-heading mb-4">SEO i rozwój po publikacji</h2><p className={`${textClass} mb-4`}>Przygotowanie techniczne strony pomaga ją odczytać wyszukiwarce. Dalsze pozycjonowanie wymaga osobnego planu: treści, analiz i wdrożeń. Wyniki oceniamy przez zapytania klientów oraz dane Search Console, z uwzględnieniem zmian ruchu i sezonowości.</p><Link to="/uslugi/pozycjonowanie/krakow" className="inline-flex min-h-11 items-center underline underline-offset-4">Poznaj zakres pozycjonowania</Link></div>
      </div></section>
      <section id="realizacje" className={sectionClass}>
        <h2 className={headingClass}>Zobacz realizacje FOTZ Studio</h2><p className={`${textClass} mb-8 max-w-3xl`}>Przykłady naszych prac pomagają ocenić układ, sposób prezentacji oferty i styl. To wybrane realizacje z portfolio, nie lista klientów z Krakowa.</p>
        <div className="grid sm:grid-cols-2 gap-6">{works.map(work=><Link key={work.url} to={work.url} className="group rounded-2xl overflow-hidden border border-border"><img src={work.image} alt={`Projekt strony ${work.title} z portfolio FOTZ Studio`} width="800" height="600" loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover" /><div className="p-6"><h3 className="text-xl font-heading group-hover:underline">{work.title}</h3><p className={`${textClass} mt-2`}>{work.text}</p></div></Link>)}</div>
      </section>
      <section id="pytania" className="container-wide px-6 md:px-12 pb-12 md:pb-20 scroll-mt-28"><h2 className={headingClass}>Pytania przed zamówieniem strony www</h2><div className="max-w-4xl">{faqs.map(faq=><details key={faq.question} className="border-b border-border py-3"><summary className="font-medium cursor-pointer min-h-12 py-3 pr-2">{faq.question}</summary><p className={`${textClass} mt-3 mb-4`}>{faq.answer}</p></details>)}</div></section>
      <section className="container-wide px-6 md:px-12 pb-16"><div className="rounded-2xl bg-slate-950 text-white p-6 md:p-10"><h2 className="text-2xl md:text-3xl font-heading mb-4">Ustalmy zakres Twojej strony.</h2><p className="text-slate-200 leading-relaxed max-w-2xl mb-6">Napisz, co sprzedajesz, komu i co ma ułatwić nowa strona. Możemy połączyć wdrożenie z przygotowaniem materiałów lub późniejszą opieką — każdy zakres uzgadniamy osobno.</p><Link to={enquiryHref("web","website")} className="dv-btn bg-blue-600 hover:bg-blue-700 text-white min-h-12 w-full sm:w-auto justify-center">Przejdź do formularza <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></div></section>
    </Layout>
  </>;
}
