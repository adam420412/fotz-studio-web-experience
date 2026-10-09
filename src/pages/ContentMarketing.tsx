import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { workImages } from "@/data/selected-work.mjs";
import imageVariants from "@/data/selected-work-images.json";

const path = "/content-marketing/strategia";
const guide = "/blog/strategia-content-marketingu-skuteczny-przewodnik-dla-firm";
const scope = [
  { title: "Diagnoza i cel", text: "Przegląd oferty, istniejących materiałów i dostępnych danych. Ustalamy, komu treści mają pomóc i jakie działanie odbiorcy będziemy mierzyć." },
  { title: "Mapa pytań klientów", text: "Tematy wynikające z rozmów, wyszukiwania i procesu zakupu. Przy każdym określamy odbiorcę, źródło informacji i związek z ofertą." },
  { title: "Formaty i kanały", text: "Rola strony, artykułów, zdjęć, filmów i social media. Wybieramy miejsca publikacji, które zespół może regularnie obsługiwać." },
  { title: "Plan publikacji", text: "Lista tematów z priorytetami, formatem, terminem, osobą odpowiedzialną i następnym krokiem odbiorcy. Horyzont planu ustalamy w briefie." },
  { title: "Zasady produkcji", text: "Wytyczne do tekstów i materiałów wizualnych, potrzebne źródła, etapy akceptacji oraz zakres poprawek. Wiadomo, kto dostarcza materiały i kto je zatwierdza." },
  { title: "Pomiar i przegląd", text: "Wskaźniki dopasowane do celu, punkt wyjścia i termin oceny. Oddzielamy publikacje, widoczność, wejścia i zapytania od potwierdzonej sprzedaży." },
];
const example = [
  { question: "Czy produkt pasuje do mojej przestrzeni?", material: "Zdjęcia zastosowań i opis wymiarów", channel: "Strona produktu", next: "Sprawdzenie wariantów lub zapytanie o dobór" },
  { question: "Jak wygląda montaż?", material: "Krótki film z demonstracją", channel: "Strona oraz wybrany kanał social media", next: "Przejście do instrukcji i oferty" },
  { question: "Jak zamówić i co wpływa na koszt?", material: "Opis procesu oraz odpowiedzi na pytania", channel: "Oferta i wiadomość od handlowca", next: "Przesłanie danych do wyceny" },
];
const faqs = [
  { question: "Co obejmuje strategia content marketingowa?", answer: "Cel, odbiorców, mapę tematów, formaty, kanały, plan publikacji, podział odpowiedzialności i sposób pomiaru. Przed rozpoczęciem ustalamy szczegółowy zakres dokumentu oraz to, które materiały przygotowujemy do wdrożenia." },
  { question: "Czym strategia różni się od kalendarza postów?", answer: "Strategia wyjaśnia, dla kogo, po co i gdzie tworzymy treści. Kalendarz przekłada te decyzje na konkretne publikacje, osoby i terminy. Lista dat i tematów sama nie rozstrzyga celu ani sposobu oceny efektów." },
  { question: "Czy w cenie strategii są zdjęcia, filmy i teksty?", answer: "Produkcję rozpisujemy osobno w ofercie: rodzaj i liczba materiałów, zakres zdjęć lub nagrań, teksty, poprawki i publikacja. Możemy przygotować sam plan albo połączyć go z realizacją wybranych materiałów." },
  { question: "Czy możecie wykorzystać nasze obecne materiały?", answer: "Tak. Zaczynamy od przeglądu strony, zdjęć, filmów i dotychczasowych publikacji. Ustalamy, co jest aktualne i nadaje się do ponownego użycia, co wymaga korekty, a czego brakuje. Sprawdzamy także dostępność plików i zakres praw do ich wykorzystania." },
  { question: "Ile kosztuje strategia i ile trwa jej przygotowanie?", answer: "Wycena i harmonogram zależą od liczby ofert, grup odbiorców i kanałów, stanu materiałów oraz potrzebnych rozmów i analiz. Prześlij adres strony, cel, dostępne materiały i oczekiwany termin. Po briefie potwierdzimy zakres, koszt i etapy odbioru." },
  { question: "Jak mierzycie efekty i czy gwarantujecie pozycje w Google?", answer: "Dobieramy wskaźniki do celu: wyświetlenia i kliknięcia w Search Console, działania na stronie, liczbę i jakość zapytań oraz dalszą sprzedaż, jeśli firma ma te dane. Nie gwarantujemy pozycji, obecności w odpowiedziach AI ani liczby klientów. Plan publikacji jest ustalonym zakresem prac; rezultat biznesowy wymaga osobnej oceny." },
];

export default function ContentMarketing() {
  const variants = imageVariants.backstage;
  const hero = variants[1];
  return <Layout workPlacement="manual">
    <SEOHead title="Strategia content marketingowa — plan treści | FOTZ Studio" description="Strategia content marketingu dla firm: cele, tematy, kanały, plan publikacji i pomiar. Zobacz zakres, przykład planu i nasze realizacje. Ustal wycenę z FOTZ." canonical={`https://www.fotz-studio.pl${path}`} />
    <ServiceSchema name="Strategia content marketingowa" description="Planowanie treści dla stron, social media i kampanii: odbiorcy, tematy, formaty, harmonogram oraz pomiar." />
    <FAQSchema items={faqs} />
    <BreadcrumbSchema items={[{ name: "Strona główna", url: "/" }, { name: "Usługi", url: "/uslugi" }, { name: "Strategia content marketingowa", url: path }]} />
    <PageBreadcrumbs items={[{ name: "Usługi", url: "/uslugi" }, { name: "Strategia content marketingowa" }]} />

    <section className="container-wide px-6 md:px-12 pt-6 pb-14 md:py-16">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <p className="dv-eyebrow mb-5">FOTZ Studio · od planu do materiałów</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading leading-tight mb-6">Strategia content marketingowa<span className="block text-gradient">dla Twojej firmy.</span></h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">Ustalamy, do kogo mówisz, jakie pytania mają klienci i które treści pomogą im poznać ofertę. Przekładamy to na plan tematów, formatów, publikacji i pomiaru — z zakresem, który można wykonać.</p>
          <div className="flex flex-wrap gap-3 mt-8"><Link className="dv-btn dv-btn-primary" to="/kontakt">Omów strategię treści <ArrowUpRight aria-hidden="true" className="w-4 h-4" /></Link><a className="dv-btn dv-btn-secondary" href="#zakres">Co otrzymasz</a></div>
        </div>
        <figure className="min-w-0">
          <img src={hero.src} srcSet={variants.map(v => `${v.src} ${v.width}w`).join(", ")} sizes="(min-width: 1536px) 560px, (min-width: 1024px) 40vw, (min-width: 768px) calc(100vw - 96px), calc(100vw - 48px)" width={hero.width} height={hero.height} alt={workImages.backstage.alt} loading="eager" fetchPriority="high" className="w-full aspect-[4/3] object-cover rounded-2xl border border-border" />
          <figcaption className="mt-4 text-sm text-muted-foreground leading-relaxed">Za kulisami sesji FOTZ Studio. Produkcję zdjęć i filmów możemy zaplanować jako osobny etap współpracy.</figcaption>
        </figure>
      </div>
    </section>

    <section className="border-y border-border bg-muted/30 py-12">
      <div className="container-wide px-6 md:px-12 grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-12">
        <h2 className="text-3xl font-heading">Co to jest strategia content marketingu?</h2>
        <div className="text-muted-foreground leading-relaxed space-y-4"><p>To plan tworzenia i wykorzystania treści, który łączy potrzeby odbiorców z celem firmy. Określa tematy, kanały, formaty, odpowiedzialność, zasoby oraz sposób sprawdzania efektów.</p><p>Kalendarz publikacji jest częścią tego planu. Strategia wyjaśnia również, dlaczego dany materiał powstaje i dokąd ma prowadzić odbiorcę.</p><Link className="inline-block underline underline-offset-4 text-foreground" to={guide}>Przeczytaj poradnik: jak przygotować strategię krok po kroku</Link></div>
      </div>
    </section>

    <section id="zakres" className="container-wide px-6 md:px-12 py-14 md:py-20 scroll-mt-28" aria-labelledby="zakres-title">
      <p className="dv-eyebrow mb-4">Co otrzymasz w uzgodnionym zakresie</p><h2 id="zakres-title" className="text-3xl md:text-4xl font-heading mb-8">Decyzje, materiały i plan działania.</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{scope.map(item => <article key={item.title} className="rounded-2xl border border-border bg-card p-6"><Check aria-hidden="true" className="w-5 h-5 text-primary mb-5" /><h3 className="text-xl font-heading mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.text}</p></article>)}</div>
      <p className="mt-6 text-muted-foreground leading-relaxed">Samą strategię oraz wykonanie tekstów, zdjęć, filmów i publikację wyceniamy jako określone zadania. W ofercie podajemy rodzaj i liczbę materiałów oraz terminy etapów.</p>
    </section>

    <section id="przyklad-planu" className="border-y border-border bg-muted/20 py-14 md:py-20 scroll-mt-28" aria-labelledby="przyklad-title">
      <div className="container-wide px-6 md:px-12"><p className="dv-eyebrow mb-4">Od pytania do materiału</p><h2 id="przyklad-title" className="text-3xl md:text-4xl font-heading mb-5">Jak może wyglądać plan treści?</h2><p className="text-muted-foreground max-w-3xl leading-relaxed mb-8">Przykład dla producenta wyposażenia wnętrz. Pokazuje sposób planowania; nie jest raportem wyników konkretnego klienta ani gotowym harmonogramem dla każdej firmy.</p>
        <div className="grid lg:grid-cols-3 gap-5">{example.map((item, index) => <article key={item.question} className="bg-background border border-border rounded-2xl p-6"><p className="text-sm text-primary mb-4">0{index + 1} · Pytanie odbiorcy</p><h3 className="text-xl font-heading mb-6">{item.question}</h3><dl className="space-y-5"><div><dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Materiał</dt><dd>{item.material}</dd></div><div><dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Miejsce publikacji</dt><dd>{item.channel}</dd></div><div><dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Następny krok</dt><dd>{item.next}</dd></div></dl></article>)}</div>
        <p className="text-muted-foreground leading-relaxed mt-6">Do każdego tematu dopisujemy źródło informacji, właściciela zadania, termin akceptacji i wskaźnik. Odpowiedzi na pytania klientów mogą dostarczyć materiału na stronę, do filmu i do rozmowy handlowej.</p>
      </div>
    </section>

    <SelectedWork />

    <section className="container-wide px-6 md:px-12 py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16"><div><p className="dv-eyebrow mb-4">Przed pierwszą rozmową</p><h2 className="text-3xl font-heading mb-6">Co przygotować do briefu?</h2><ul className="list-disc pl-5 space-y-3 text-muted-foreground"><li>Adres strony, profile i opis najważniejszej oferty.</li><li>Pytania, które klienci zadają przed zakupem.</li><li>Dostępne zdjęcia, filmy, teksty i opisy realizacji.</li><li>Cel, budżet, termin oraz osobę akceptującą materiały.</li><li>Dostępne raporty i informację, kto obsługuje zapytania.</li></ul><p className="text-muted-foreground mt-5">Brak części materiałów nie zamyka rozmowy. Ustalimy, co trzeba zebrać lub przygotować.</p></div>
        <div className="rounded-2xl bg-card border border-border p-6 md:p-8"><h2 className="text-2xl font-heading mb-5">Plan i realizacja mogą iść razem.</h2><p className="text-muted-foreground leading-relaxed mb-6">Po ustaleniu strategii możemy przejść do konkretnych materiałów. Wybierz zakres, którego potrzebujesz:</p><ul className="space-y-4">{[{to:"/social-media/content",label:"Produkcja zdjęć, rolek i treści"},{to:"/social-media/obsluga",label:"Prowadzenie profili social media"},{to:"/social-media/obsluga#materialy",label:"Nasze spoty i rolki — CUPRA i Enea Stadion"},{to:"/seo/audyt",label:"Audyt istniejących treści i technicznego SEO"}].map(item=><li key={item.to}><Link className="inline-flex gap-2 underline underline-offset-4" to={item.to}>{item.label}<ArrowUpRight aria-hidden="true" className="w-4 h-4 shrink-0 mt-1" /></Link></li>)}</ul></div></div>
    </section>

    <section className="container-wide max-w-4xl px-6 md:px-12 pb-14 md:pb-20" aria-labelledby="faq-title"><h2 id="faq-title" className="text-3xl font-heading mb-7">Pytania o współpracę</h2><div className="divide-y divide-border border-y border-border">{faqs.map(f => <details key={f.question} className="py-5"><summary className="font-medium cursor-pointer text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{f.question}</summary><p className="text-muted-foreground mt-4 leading-relaxed">{f.answer}</p></details>)}</div></section>
    <section className="container-wide px-6 md:px-12 pb-16"><div className="rounded-3xl border border-border bg-card p-6 md:p-10 flex flex-wrap items-center justify-between gap-6"><div><h2 className="text-2xl md:text-3xl font-heading mb-3">Zaplanujmy treści dla Twojej firmy.</h2><p className="text-muted-foreground max-w-xl">Prześlij stronę i cel projektu. Ustalimy zakres, potrzebne materiały oraz wycenę.</p></div><Link className="dv-btn dv-btn-primary" to="/kontakt">Opisz swój projekt <ArrowUpRight aria-hidden="true" className="w-4 h-4" /></Link></div></section>
  </Layout>;
}
