import { Link } from "react-router-dom";
import { ArrowRight, Camera, CalendarDays, ChartNoAxesCombined, MessageSquare, Target, Video } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { PortfolioVideo } from "@/components/PortfolioVideo";
import stadiumPhoto from "@/assets/enea/stadion-race-fajerwerki-web.webp";

const services = [
  { icon: Target, title: "Strategia social media i grupy docelowe", text: "Zaczynamy od tego, do kogo mówi marka: zarząd firmy B2B, klient sklepu internetowego czy gość restauracji. Zdefiniowana strategia social media opisuje kanały, tematy, ton komunikacji i to, jak treści mają prowadzić do zapytania.", href: "/social-media/strategia" },
  { icon: CalendarDays, title: "Prowadzenie profili: Facebook, Instagram, LinkedIn", text: "Plan publikacji, teksty, grafika, harmonogram i moderacja komentarzy. Prowadzenie mediów społecznościowych ustalamy tak, żeby po stronie firmy zostały tylko akceptacje i odpowiedzi wymagające wiedzy eksperta.", href: "/social-media/obsluga" },
  { icon: Camera, title: "Content i zdjęcia", text: "Materiały o ofercie, produktach, zespole i kulisach pracy. Łączymy własne zdjęcia i grafiki z plikami, które firma już ma, żeby profil wyglądał spójnie na każdej platformie.", href: "/social-media/content" },
  { icon: Video, title: "Filmy, rolki i TikTok", text: "Scenariusz, nagranie i montaż krótkich filmów na Instagram, Facebook, LinkedIn i TikTok. Format, napisy i wersje do reklam ustalamy przed produkcją, a nie po niej.", href: "/uslugi/produkcja-video" },
  { icon: MessageSquare, title: "Kampanie reklamowe Meta Ads i nie tylko", text: "Facebook i Instagram Ads, a przy kampaniach B2B także LinkedIn Ads; TikTok Ads, gdy grupa docelowa naprawdę tam jest. Ustawiamy cel, materiały reklamowe i odbiorców, a optymalizacja trwa przez cały czas emisji. Budżet reklamowy płacony platformie jest osobną pozycją.", href: "/performance-marketing/meta-ads" },
  { icon: ChartNoAxesCombined, title: "Analityka i wyniki", text: "Sprawdzamy zasięg, zaangażowanie, ruch na stronie, leady i konwersje. Podsumowanie zawiera wnioski: co zostawiamy, co zmieniamy i czego potrzebujemy od Ciebie w kolejnym miesiącu.", href: "/social-media/analityka" },
];

const faqs = [
  { question: "Czy FOTZ Studio ma biuro w Warszawie?", answer: "Nie. Nasz zespół pracuje w Poznaniu i nie mamy biura w Warszawie. Firmy z Warszawy obsługujemy zdalnie: spotkania prowadzimy online, a materiały do akceptacji i gotowe pliki przesyłamy cyfrowo. Jeśli projekt wymaga zdjęć lub nagrań na miejscu, wyjazd i jego koszt ustalamy osobno przy wycenie." },
  { question: "Czym zajmuje się agencja social media?", answer: "Planuje komunikację marki w mediach społecznościowych, prowadzi profile, tworzy content, obsługuje kampanie reklamowe i raportuje wyniki. Zakres zależy od firmy: jedni potrzebują pełnej obsługi, inni samej strategii, produkcji filmów albo prowadzenia reklam." },
  { question: "Ile się bierze za prowadzenie social mediów?", answer: "Nie podajemy jednej stawki, bo koszt zależy od liczby kanałów i publikacji, produkcji zdjęć i filmów, moderacji oraz tego, czy prowadzimy kampanie. W ofercie rozdzielamy obsługę, produkcję i budżet reklamowy, więc widać, za co płacisz." },
  { question: "Czy pracujecie z firmami biznesowymi i konsumenckimi?", answer: "Tak. Dla firm z sektora biznesowego częściej proponujemy LinkedIn i treści eksperckie, dla marek konsumenckich Instagram, Facebook i krótkie rolki. O wyborze kanałów decyduje grupa docelowa, a nie moda na daną platformę." },
  { question: "Jak sprawdzić opinie o agencji social media?", answer: "Poproś o konkretne realizacje, porozmawiaj o procesie i zapytaj, kto będzie prowadził Twój profil. U nas możesz obejrzeć portfolio i porozmawiać o projektach, przy których pracowaliśmy. Nie publikujemy wymyślonych liczb ani wyników, których nie możemy pokazać." },
  { question: "Po jakim czasie widać efekty?", answer: "Nie gwarantujemy wyników w określonym terminie. Pierwsze sygnały daje odbiór treści i reakcje na reklamy, a o skuteczności świadczą zapytania, leady i sprzedaż. Tempo zależy od oferty, budżetu, konkurencji w branży i tego, jak szybko firma odpowiada na kontakty." },
];

const steps = [
  { title: "Rozmowa i brief", text: "Na wideorozmowie przeglądamy profile, ofertę i dotychczasowe kampanie. Ustalamy cel, kanały oraz zadania, które zostają po stronie Twojego zespołu." },
  { title: "Strategia i plan treści", text: "Przygotowujemy tematy, formaty, materiały reklamowe i plan publikacji. Jeśli potrzebne są nowe nagrania, ustalamy, czy powstaną z Twoich plików, czy podczas osobno zaplanowanej sesji." },
  { title: "Akceptacja i publikacja", text: "Materiały trafiają do wskazanej osoby we wspólnym folderze lub narzędziu do akceptacji. Zatwierdzone treści publikujemy według planu i moderujemy komentarze." },
  { title: "Raport i decyzje", text: "Co miesiąc omawiamy dane: zasięg, interakcje, ruch, leady. Wnioski zamieniamy na konkretne zmiany w treściach i kampaniach na kolejny okres." },
];

export default function SocialMediaWarszawa() {
  return (
    <Layout>
      <SEOHead title="Agencja social media Warszawa — obsługa zdalna | FOTZ" description="Szukasz agencji social media w Warszawie? Kompleksowa obsługa: strategie, profil marki, content i kampania reklamowa dla klientów z Warszawy — zdalnie." canonical="https://www.fotz-studio.pl/agencja-social-media/warszawa" />
      <ServiceSchema name="Obsługa social media dla firm z Warszawy" description="Strategia, prowadzenie profili, produkcja zdjęć i wideo oraz kampanie reklamowe w social media, realizowane zdalnie z Poznania." areaServed="Warszawa" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl/" }, { name: "Agencja social media", url: "https://www.fotz-studio.pl/agencja-social-media" }, { name: "Warszawa", url: "https://www.fotz-studio.pl/agencja-social-media/warszawa" }]} />
      <FAQSchema items={faqs} />

      <section className="container-wide px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="dv-eyebrow mb-5">FOTZ Studio · dla firm z Warszawy</p>
            <h1 className="text-4xl md:text-6xl font-heading leading-[1.08] tracking-tight mb-6">Agencja social media Warszawa<br /><span className="text-gradient">obsługa social media i marketing.</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-7">Szukasz agencji social media, która sama nagra materiały, poprowadzi profile i ustawi kampanie reklamowe? FOTZ Studio to agencja z Poznania z własną produkcją zdjęć i filmów. Firmy z Warszawy obsługujemy zdalnie: od strategii, przez content, po analizę wyników.</p>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <Link to="/konsultacja" className="dv-btn dv-btn-primary">Umów rozmowę <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
              <a href="#realizacje-social-media" className="dv-btn dv-btn-secondary">Zobacz realizacje</a>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={stadiumPhoto} alt="Fajerwerki i race podczas wydarzenia na Enea Stadionie" width="960" height="640" loading="eager" className="w-full aspect-[3/2] object-cover" />
            <figcaption className="p-5 flex flex-wrap items-center justify-between gap-3 text-sm"><span>Enea Stadion · materiał z wydarzenia</span><Link to="/realizacje/enea-stadion" className="underline underline-offset-4">Poznaj projekt</Link></figcaption>
          </figure>
        </div>
        <nav aria-label="Na tej stronie" className="flex flex-wrap gap-x-6 gap-y-3 mt-10 pt-6 border-t border-border text-sm">
          <a href="#dla-kogo-social-media" className="underline underline-offset-4">Dla kogo</a><a href="#zakres-social-media" className="underline underline-offset-4">Zakres obsługi</a><a href="#proces-social-media" className="underline underline-offset-4">Współpraca zdalna</a><a href="#wycena-social-media" className="underline underline-offset-4">Wycena</a><a href="#pytania-social-media" className="underline underline-offset-4">Pytania</a>
        </nav>
      </section>

      <section id="dla-kogo-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="dla-kogo-heading">
        <p className="dv-eyebrow mb-3">Rynek stołeczny</p><h2 id="dla-kogo-heading" className="text-3xl md:text-4xl font-heading mb-5">Dla jakiej firmy z Warszawy jest ta oferta i jak wygląda konkurencja</h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl">
          <p className="text-muted-foreground leading-relaxed">Warszawa to rynek, na którym niemal każda branża ma kilku mocnych graczy, a odbiorca w ciągu jednego dnia widzi reklamy dziesiątek marek. Konkurencja o uwagę jest duża, dlatego obecność w mediach społecznościowych musi mieć jasny cel. Profil, który tylko „jest”, rzadko przynosi zapytania. Pomagamy firmom ustalić, czym ich komunikacja ma się wyróżniać i jaki materiał najlepiej to pokaże.</p>
          <p className="text-muted-foreground leading-relaxed">Pracujemy z firmami B2B i B2C: firmami usługowymi i doradczymi, które budują markę eksperta na LinkedIn, gastronomią i lokalami szukającymi gości na Instagramie, markami konsumenckimi i sklepami internetowymi, a także organizatorami wydarzeń. Jeśli w Twojej firmie social media prowadzi jedna osoba „przy okazji”, możemy przejąć całość albo tylko produkcję i kampanie.</p>
        </div>
      </section>

      <section id="zakres-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="zakres-heading">
        <p className="dv-eyebrow mb-3">Zakres współpracy</p><h2 id="zakres-heading" className="text-3xl md:text-4xl font-heading mb-5">Usługi agencji social media: kampanie, content marketing i kreacje</h2>
        <p className="text-muted-foreground max-w-3xl mb-5 leading-relaxed">Możesz powierzyć nam kompleksową obsługę social media albo wybrany element: strategię, produkcję contentu, kampanie w social media lub analitykę. Zakres dopasowujemy do tego, co firma ma już gotowe, i do zasobów jej zespołu marketingowego.</p>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">Nasza przewaga to połączenie agencji marketingowej z produkcją. Ten sam zespół, który planuje kampanię, pisze scenariusz rolki i montuje film, więc kreacje reklamowe powstają z myślą o konkretnym celu, a nie są dopasowywane po fakcie. Social media marketing traktujemy jako część większej całości: content marketing, strona internetowa i SEO powinny ze sobą współpracować.</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{services.map(service => <article key={service.href} className="border border-border bg-card rounded-2xl p-6 flex flex-col items-start"><service.icon aria-hidden="true" className="w-6 h-6 text-primary mb-5" /><h3 className="text-xl mb-3">{service.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{service.text}</p><Link to={service.href} className="underline underline-offset-4 text-sm mt-auto" aria-label={`Poznaj zakres: ${service.title}`}>Poznaj zakres</Link></article>)}</div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:py-16" aria-labelledby="kanaly-heading">
        <h2 id="kanaly-heading" className="text-3xl md:text-4xl font-heading mb-5">Facebook, Instagram, LinkedIn czy TikTok? Kanały dobieramy do klienta</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Facebook i Instagram</strong> sprawdzają się, gdy marka sprzedaje osobom prywatnym albo działa lokalnie. Tu najlepiej działają krótkie filmy, zdjęcia produktów i kampanie Meta Ads kierowane do określonych grup docelowych, np. mieszkańców wybranych dzielnic albo osób, które odwiedziły stronę.</p>
          <p><strong className="text-foreground">LinkedIn</strong> wybieramy dla firm biznesowych: usług profesjonalnych, technologii, HR, branży nieruchomości. Komunikacja opiera się na wiedzy specjalistów firmy i profilach osób z zarządu, a płatne kampanie pomagają dotrzeć do decydentów według stanowiska i branży.</p>
          <p><strong className="text-foreground">TikTok</strong> polecamy markom, których odbiorcy są tam aktywni i które są gotowe na swobodny, szybki format. Płatna promocja na tej platformie ma sens, gdy mamy materiał nagrany natywnie dla tej platformy, a nie przeniesiony z innego kanału.</p>
          <p><strong className="text-foreground">Strona i lead.</strong> Każda kampania prowadzi tam, gdzie klient może zostawić kontakt: na stronę, formularz lub do wiadomości. Mierzymy wejścia i konwersję, żeby ocenić, czy kampania przynosi zapytania, a nie tylko polubienia.</p>
        </div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:py-16" aria-labelledby="wybor-heading">
        <h2 id="wybor-heading" className="text-3xl md:text-4xl font-heading mb-5">Agencja social media z Warszawy czy agencja marketingowa z produkcją?</h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl text-muted-foreground leading-relaxed">
          <p>Lokalna agencja będzie bliżej fizycznie i łatwiej zorganizuje spotkanie w biurze klienta. To realna zaleta, której nie udajemy, że mamy. Wybierając nas, dostajesz za to zespół, w którym marketing w mediach społecznościowych, zdjęcia, montaż i reklama płatna są w jednych rękach. Nie musisz koordynować osobno agencji reklamowej, fotografa i operatora wideo.</p>
          <p>Profesjonalny partner w działaniach social media powinien przede wszystkim rozumieć Twój biznes i umieć przełożyć strategie marketingowe na konkretne publikacje. Dlatego przed startem pytamy o marżę na usługach, sezonowość, proces sprzedaży i to, kto w firmie odbiera zapytania. Profile social media to dopiero początek; liczy się to, co dzieje się po kliknięciu.</p>
          <p>Media społecznościowe zmieniają się szybko, więc w trakcie kampanii social media testujemy różne formaty i komunikaty. Dobra strategia marketingowa zostawia miejsce na testy, a decyzje opiera na danych, nie na przeczuciu. Optymalizacja budżetu reklamowego to stały element pracy, a nie jednorazowe ustawienie.</p>
          <p>Jeśli masz już własny zespół marketingowy, możemy go wesprzeć: przygotować strategię, wyprodukować pakiet materiałów albo przejąć kampanie płatne, a publikacje zostawić po Twojej stronie. Kompleksowa obsługa nie jest warunkiem współpracy.</p>
          <p>Przed podpisaniem umowy o współpracy z agencją social media sprawdź, kto konkretnie będzie pracował nad Twoją marką, jak wygląda akceptacja treści i jak szybko agencja reaguje na komentarze klientów. Firma z Warszawy często ma bardziej rozbudowany proces decyzyjny niż mała firma lokalna, dlatego już na starcie ustalamy, kto zatwierdza publikacje, a kto kampanię reklamową.</p>
        </div>
      </section>

      <section id="realizacje-social-media" className="py-12 md:py-16 bg-muted/30 border-y border-border scroll-mt-28" aria-labelledby="realizacje-heading">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8"><div><p className="dv-eyebrow mb-3">Z naszej produkcji</p><h2 id="realizacje-heading" className="text-3xl md:text-4xl font-heading">Realizacje: kampanie w social media i filmy</h2></div><Link to="/realizacje" className="underline underline-offset-4">Całe portfolio</Link></div>
          <div className="grid md:grid-cols-2 gap-6">
            <PortfolioVideo src="/videos/fotz-reel-web.mp4" poster="/videos/enea-stadion-cover.webp" title="Enea Stadion — emocje z bliska" category="Film z wydarzenia" />
            <PortfolioVideo src="/videos/autospa.mp4" poster="/videos/autospa-frame.webp" title="AutoSpa" category="Prezentacja firmy" />
          </div>
          <p className="text-muted-foreground max-w-3xl mt-6 leading-relaxed">Pracowaliśmy m.in. przy materiałach dla Enea Stadionu i FPS Cegielski, przygotowaliśmy spot dla WSB Merito, a dla Dawid EDU prowadziliśmy kampanię Meta Ads. To projekty z Wielkopolski; przy współpracy z firmą z Warszawy pokażemy na rozmowie realizacje najbliższe Twojej branży.</p>
        </div>
      </section>

      <section id="proces-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="proces-heading">
        <p className="dv-eyebrow mb-3">Od briefu do raportu</p><h2 id="proces-heading" className="text-3xl md:text-4xl font-heading mb-8">Jak wygląda współpraca z klientem z Warszawy</h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">{steps.map((step, index) => <li key={step.title} className="border-t border-border pt-5"><span aria-hidden="true" className="text-sm text-primary">0{index + 1}</span><h3 className="text-xl mt-3 mb-3">{step.title}</h3><p className="text-muted-foreground leading-relaxed">{step.text}</p></li>)}</ol>
        <p className="mt-8 text-muted-foreground max-w-3xl leading-relaxed">Zespół FOTZ pracuje w Poznaniu i nie mamy biura w Warszawie. Dla klientów z Warszawy to zwykle nie problem: strategia, akceptacje, prowadzenie profili i kampanie prowadzimy zdalnie, a stały kontakt zapewnia jeden specjalista po naszej stronie. Gdy potrzebne są zdjęcia lub nagrania u Ciebie w firmie, możliwość i koszt wyjazdu ustalamy osobno. Alternatywą jest praca na materiałach od Twojego zespołu albo nagranie zdalnie wyreżyserowane.</p>
      </section>

      <section id="wycena-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="wycena-heading">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div><p className="dv-eyebrow mb-3">Wycena</p><h2 id="wycena-heading" className="text-3xl md:text-4xl font-heading mb-5">Ile kosztuje kampania i prowadzenie social media dla firmy z Warszawy?</h2><p className="text-muted-foreground leading-relaxed mb-4">Nie podajemy stałej ceny, bo na koszt wpływa liczba kanałów i publikacji, ilość grafiki i filmów, moderacja, liczba kampanii reklamowych oraz ewentualny wyjazd na nagrania. W ofercie osobno pokazujemy obsługę profili, produkcję i budżet reklamowy, który płacisz bezpośrednio platformie.</p><p className="text-muted-foreground leading-relaxed mb-6">Możesz zacząć od mniejszego zakresu, np. strategii i pakietu rolek, a pełną obsługę dodać później, gdy zobaczysz, jak pracujemy.</p><Link to="/agencja-social-media/cennik" className="underline underline-offset-4">Sprawdź modele rozliczeń i składniki wyceny</Link></div>
          <aside className="rounded-2xl border border-border bg-card p-6 md:p-8"><h3 className="text-2xl mb-5">Co przesłać do wyceny?</h3><ul className="list-disc pl-5 space-y-3 text-muted-foreground"><li>Linki do strony i obecnych profili w social media.</li><li>Cel: zapytania od klientów, sprzedaż, rekrutacja albo promocja wydarzenia.</li><li>Opis grup docelowych i głównych konkurentów.</li><li>Dostępne zdjęcia i filmy oraz informację, czy potrzebujesz nowych nagrań.</li><li>Kanały, termin startu i planowany budżet na obsługę oraz reklamę.</li></ul><Link to="/kontakt" className="dv-btn dv-btn-primary mt-7">Wyślij zapytanie <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></aside>
        </div>
      </section>

      <section id="pytania-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="faq-heading">
        <div className="max-w-3xl"><h2 id="faq-heading" className="text-3xl md:text-4xl font-heading mb-7">Pytania klientów: agencja social media w Warszawie czy zdalnie?</h2>{faqs.map(faq => <details key={faq.question} className="border-b border-border py-5"><summary className="font-medium cursor-pointer pr-3">{faq.question}</summary><p className="text-muted-foreground leading-relaxed mt-4">{faq.answer}</p></details>)}</div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:pb-20" aria-labelledby="poradniki-heading">
        <h2 id="poradniki-heading" className="text-2xl md:text-3xl font-heading mb-6">Poradniki przed współpracą z agencją social media</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link to="/blog/agencja-social-media-poznan" className="border border-border rounded-xl p-5"><h3 className="font-medium">Jak porównać agencje social media</h3><p className="text-sm text-muted-foreground mt-3">Pytania, które warto zadać przed podpisaniem umowy.</p></Link>
          <Link to="/agencja-social-media/cennik" className="border border-border rounded-xl p-5"><h3 className="font-medium">Cennik i modele rozliczeń</h3><p className="text-sm text-muted-foreground mt-3">Z czego składa się wycena obsługi i kampanii.</p></Link>
          <Link to="/social-media/obsluga" className="border border-border rounded-xl p-5"><h3 className="font-medium">Obsługa social media</h3><p className="text-sm text-muted-foreground mt-3">Co obejmuje bieżące prowadzenie profili.</p></Link>
          <Link to="/agencja-social-media" className="border border-border rounded-xl p-5"><h3 className="font-medium">Agencja social media FOTZ</h3><p className="text-sm text-muted-foreground mt-3">Pełna oferta i sposób pracy zespołu.</p></Link>
        </div>
      </section>
    </Layout>
  );
}
