import { Link } from "react-router-dom";
import { ArrowRight, Camera, CalendarDays, ChartNoAxesCombined, MessageSquare, Target, Video } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { PortfolioVideo } from "@/components/PortfolioVideo";
import { useClusterArticles } from "@/hooks/useClusterArticles";
import { enquiryHref } from "@/lib/enquiry.mjs";
import stadiumPhoto from "@/assets/enea/stadion-race-fajerwerki-web.webp";

const services = [
  { icon: Target, title: "Strategia i plan tematów", text: "Odbiorcy, grupy docelowe, rola kanałów społecznościowych, język marki i tematy oparte na pytaniach klientów. Strategie marketingowe dopasowujemy do materiałów oraz czasu zespołu — do każdego klienta podchodzimy indywidualnie.", href: "/social-media/strategia" },
  { icon: CalendarDays, title: "Prowadzenie profili", text: "Prowadzenie profili w social media może obejmować: teksty, grafiki, tworzenie treści, harmonogram i publikację na uzgodnionych kanałach. Liczbę materiałów, poprawki, moderację — komentarze i wiadomości — zapisujemy w zakresie.", href: "/social-media/obsluga" },
  { icon: Camera, title: "Zdjęcia i treści", text: "Profesjonalne usługi fotograficzne: oferta, produkty, ludzie i kulisy pracy. Łączymy materiały firmy z zaplanowaną produkcją, żeby profil pokazywał jej charakter i budował pozytywny wizerunek wśród użytkowników.", href: "/social-media/content" },
  { icon: Video, title: "Rolki i filmy", text: "Pomysł, scenariusz, nagrania i montaż wideo. Przed produkcją ustalamy formaty, napisy, wersje oraz miejsca wykorzystania filmu i materiałów reklamowych.", href: "/uslugi/produkcja-video" },
  { icon: MessageSquare, title: "Kampanie Meta Ads", text: "Prowadzenie kampanii Facebook Ads na Facebooku i Instagramie: cel kampanii, kreacje, konfiguracja, zarządzanie kampaniami, optymalizacja i ocena wyników. Łączymy je przy potrzebie z Google Ads, żeby reklama pracowała na kilku etapach decyzji klienta. Obsługę reklam wyceniamy osobno, a budżet emisji płacony platformie uzgadniamy przed startem.", href: "/performance-marketing/meta-ads" },
  { icon: ChartNoAxesCombined, title: "Pomiar i raportowanie", text: "Analizę wyników prowadzimy co miesiąc: sprawdzamy zasięgi, reakcje na publikacje oraz dostępne dane o wejściach i zapytaniach. Przy dostępie do danych sprzedaży oceniamy też jakość pozyskanych kontaktów i realne efekty działań marketingowych.", href: "/social-media/analityka" },
];
const faqs = [
  { question: "Czy możecie prowadzić mojego Facebooka i Instagrama?", answer: "Tak. Ustalamy plan, przygotowujemy treści i publikujemy je po akceptacji. Abonament podstawowy obejmuje maksymalnie 2 profile i 4 materiały łącznie w miesiącu. Moderacja komentarzy i wiadomości wymaga dodatkowego zakresu; ustalamy też, kto odpowiada na zapytania klientów." },
  { question: "Co obejmuje prowadzenie social media dla firm?", answer: "Zakres może obejmować strategię, plan tematów, tworzenie treści, teksty, grafiki, publikację i moderację komentarzy oraz wiadomości. Zdjęcia, rolki, kampanie reklamowe i raportowanie rozpisujemy jako konkretne zadania. Przed startem ustalamy kanały społecznościowe, liczbę materiałów, poprawki i sposób akceptacji." },
  { question: "Ile kosztuje obsługa social media w Poznaniu?", answer: "Stała obsługa zaczyna się od 3 000 zł netto miesięcznie: 4 materiały z istniejących zdjęć i filmów, maksymalnie 2 profile, jedna zbiorcza runda poprawek, do godziny aktualizacji strony oraz podsumowanie i spotkanie do 30 minut. Ograniczona opieka za 2 000 zł netto obejmuje do 4 godzin pracy miesięcznie na wcześniej wybrane zadania. Nowa produkcja, montaż, moderacja, kampanie, budżet reklamowy i SEO nie są w cenie podstawowej." },
  { question: "Czy nagrywacie materiały w firmie w Poznaniu?", answer: "Możemy zaplanować produkcję w siedzibie firmy w Poznaniu i okolicach lub we wskazanej lokalizacji. Miejsce, termin, uczestników, listę ujęć i ewentualny dojazd uzgadniamy przed nagraniami. Obsługę prowadzimy zdalnie, a spotkania odbywają się po ustaleniu miejsca. Adres rejestrowy to Poznańska 117/11, 62-023 Kamionki; nie jest to publiczne biuro obsługi." },
  { question: "Czy reklamy są w cenie prowadzenia profilu?", answer: "Publikacje organiczne i płatne kampanie to różne zadania. Reklama w social media wymaga osobnej konfiguracji, testów i optymalizacji. W ofercie określamy, czy obejmuje ona prowadzenie kampanii, a budżet emisji płacony platformie wskazujemy oddzielnie od wynagrodzenia agencji." },
  { question: "Czy mogę zamówić same rolki albo zdjęcia?", answer: "Tak, możemy wycenić samą produkcję materiałów. Ustalamy liczbę filmów lub zdjęć, formaty, zakres montażu, poprawki i sposób wykorzystania. Publikacja oraz prowadzenie firmowych profili mogą pozostać po stronie Twojej firmy." },
  { question: "Po czym poznam, czy działania przynoszą efekty?", answer: "Najpierw ustalamy cel i punkt wyjścia. Zasięgi oraz interakcje pokazują odbiór treści, a wejścia, zapytania i rezerwacje pomagają ocenić zainteresowanie ofertą i to, czy udaje nam się dotrzeć do nowych klientów. Sprzedaż weryfikujemy w danych firmy. Termin uzyskania wyników zależy między innymi od oferty, budżetu, materiałów i obsługi kontaktów." },
];
const steps = [
  { title: "Rozmowa i zakres", text: "Przeglądamy profile, ofertę i dotychczasowe materiały. Ustalamy odbiorców, grupy docelowe, cel, kanały oraz to, co zostaje po stronie Twojego zespołu." },
  { title: "Plan i produkcja", text: "Przygotowujemy tematy, formaty i listę potrzebnych materiałów — to wdrożenie przygotowanej strategii krok po kroku. Jeśli zakres obejmuje nagrania, uzgadniamy dzień produkcji i uczestników." },
  { title: "Akceptacja i publikacja", text: "Materiały trafiają do wyznaczonej osoby w firmie. Zatwierdzone treści publikujemy według planu; dodatkowe zadania, np. kampanie czy sesje, ustalamy osobno." },
  { title: "Raport i kolejne decyzje", text: "Porównujemy wyniki z celem oraz punktem wyjścia. Wnioski przekładamy na kolejne tematy i formaty. Testy reklamowe planujemy, jeśli współpraca obejmuje płatne kampanie." },
];

export default function SocialMediaPoznan() {
  const { data: articles = [], isLoading, isError, refetch } = useClusterArticles("poznan");
  return (
    <Layout>
      <SEOHead title="Agencja social media Poznań — Facebook i Instagram" description="Agencja social media dla firm z Poznania: Facebook, Instagram, plan i treści. Stała obsługa od 3 000 zł netto miesięcznie. Poznaj zakres i realizacje FOTZ." canonical="https://www.fotz-studio.pl/agencja-social-media/poznan" />
      <ServiceSchema name="Obsługa social media w Poznaniu" description="Planowanie komunikacji, prowadzenie firmowych profili w mediach społecznościowych, produkcja zdjęć i video oraz kampanie reklamowe w uzgodnionym zakresie." areaServed="Poznań" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl/" }, { name: "Agencja social media", url: "https://www.fotz-studio.pl/agencja-social-media" }, { name: "Poznań", url: "https://www.fotz-studio.pl/agencja-social-media/poznan" }]} />
      <FAQSchema items={faqs} />

      <section className="container-wide px-6 md:px-12 pt-24 md:pt-40 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="dv-eyebrow mb-4">FOTZ Studio · Obsługa firm z Poznania</p>
            <h1 className="text-[2rem] sm:text-4xl md:text-6xl font-heading leading-[1.08] tracking-tight mb-6">Agencja social media<br /><span className="text-gradient">w Poznaniu.</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-7">Prowadzimy social media Twojej firmy: plan, treści i regularne publikacje. Prowadzimy Facebooka i Instagrama na podstawie uzgodnionego zakresu oraz materiałów marki.</p>
            <p className="font-medium mb-5">Stała obsługa od 3 000 zł netto miesięcznie.</p>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <Link to={enquiryHref("social", "retainer")} className="dv-btn dv-btn-primary min-h-11">Zapytaj o obsługę <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
              <a href="#realizacje-social-media" className="dv-btn dv-btn-secondary">Zobacz nasze materiały</a>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={stadiumPhoto} alt="Fajerwerki i race przy Enea Stadionie w Poznaniu" width="960" height="640" loading="eager" className="w-full aspect-[3/2] object-cover" />
            <figcaption className="p-5 flex flex-wrap items-center justify-between gap-3 text-sm"><span>Enea Stadion · fotografia z wydarzenia</span><Link to="/realizacje/enea-stadion" className="underline underline-offset-4">Poznaj projekt</Link></figcaption>
          </figure>
        </div>
        <nav aria-label="Na tej stronie" className="flex flex-wrap gap-x-6 gap-y-3 mt-10 pt-6 border-t border-border text-sm">
          <a href="#zakres-social-media" className="underline underline-offset-4">Zakres obsługi</a><a href="#proces-social-media" className="underline underline-offset-4">Jak pracujemy</a><a href="#wycena-social-media" className="underline underline-offset-4">Ceny i zakres abonamentu</a><a href="#pytania-social-media" className="underline underline-offset-4">Pytania przed startem</a>
        </nav>
      </section>

      <section id="zakres-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="zakres-heading">
        <p className="dv-eyebrow mb-3">Zakres współpracy</p><h2 id="zakres-heading" className="text-3xl md:text-4xl font-heading mb-5">Prowadzenie social media dla firm — reklama i komunikacja</h2>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">Możesz zlecić regularną komunikację albo konkretną część pracy: strategię, produkcję materiałów lub kampanię reklamową. Poniżej pokazujemy dostępne usługi agencji social media. Kompleksowy zakres nie jest częścią każdego abonamentu — wybrany zakres i koszty potwierdzamy w ofercie.</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{services.map(service => <article key={service.href} className="border border-border bg-card rounded-2xl p-6 flex flex-col items-start"><service.icon aria-hidden="true" className="w-6 h-6 text-primary mb-5" /><h3 className="text-xl mb-3">{service.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{service.text}</p><Link to={service.href} className="underline underline-offset-4 text-sm mt-auto" aria-label={`Poznaj zakres: ${service.title}`}>Poznaj zakres</Link></article>)}</div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:py-16" aria-labelledby="agencja-heading">
        <p className="dv-eyebrow mb-3">Zespół i sposób pracy</p>
        <h2 id="agencja-heading" className="text-3xl md:text-4xl font-heading mb-5">Agencja social media w Poznaniu — strategia współpracy z markami</h2>
        <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
          <p>Strategia social media zaczyna się od pytań: kto kupuje, czego potrzebuje przed decyzją i co Twoja firma może pokazać? Dla jednego klienta będą to produkty i ich zastosowania, dla innego przebieg usługi, ludzie lub odpowiedzi na obiekcje. Na tej podstawie ustalamy grupy docelowe, język marki oraz rolę kanałów społecznościowych. Nie zakładamy, że każda firma potrzebuje wszystkich platform.</p>
          <p>Facebook, Instagram czy LinkedIn wybieramy w odniesieniu do odbiorców i dostępnych materiałów. Social media marketing łączymy z ofertą na stronie: publikacja powinna prowadzić do konkretnej informacji, kontaktu lub rezerwacji. Zasięg i interakcje pomagają ocenić odbiór treści, ale nie zastępują danych o zapytaniach oraz sprzedaży.</p>
          <p>Harmonogram obejmuje tematy, formaty, terminy i osobę odpowiedzialną za akceptację. Przed miesiącem ustalamy, jakie zdjęcia i informacje przekazuje Twoja firma, a co przygotowuje nasza agencja. Wątki wymagające wiedzy branżowej zatwierdzasz przed publikacją. Dzięki temu prowadzenie firmowych social media ma określony rytm i podział pracy.</p>
          <p>Masz firmę w Poznaniu i chcesz uporządkować obecność w mediach społecznościowych? W briefie naszej agencji określ, które zadania wykonuje Twój zespół, a które chcesz przekazać. Kompleksowe wsparcie może połączyć obsługę profili na Facebooku i Instagramie z produkcją oraz reklamą, lecz wymaga szerszej wyceny niż pakiet podstawowy. Branża, dostępne materiały i oczekiwania odbiorców pomagają ustalić priorytety.</p>
          <h3 className="text-xl text-foreground">Co warto sprawdzać w miesięcznym raporcie?</h3>
          <p>Zasięgi i zaangażowanie zestawiamy z dostępnymi danymi o przejściach do oferty oraz zapytaniach. Interakcja pod postem nie oznacza jeszcze pozyskanego klienta. Jeśli celem jest promocja wydarzenia, możemy oceniać rejestracje; dla usługi — zapytania i rozmowy. Ustalamy sposób przekazywania informacji o jakości kontaktów, aby działania w mediach społecznościowych wspierały decyzje o rozwoju Twojej firmy.</p>
          <h3 className="text-xl text-foreground">Kto zajmuje się prowadzeniem profili w social media?</h3>
          <p>Współpraca z FOTZ wymaga wskazania osoby zatwierdzającej materiały po stronie firmy. Uzgadniamy też zarządzanie dostępami do kont oraz odpowiedzialność za komentarze i wiadomości. Prowadzenie firmowych profili w mediach społecznościowych nie obejmuje automatycznie całodobowej obsługi klienta. Gdy klient pyta o dostępność lub cenę, pytanie powinno trafić do osoby, która zna aktualną ofertę.</p>
          <h3 className="text-xl text-foreground">Czy każda publikacja musi sprzedawać?</h3>
          <p>Nie. Media społecznościowe mogą przedstawiać ofertę, wyjaśniać usługę i angażować odbiorców pytaniami. Tematy dobieramy do grup docelowych oraz pytań Twoich klientów. Plan łączy promocję Twojej marki z informacjami potrzebnymi przed zakupem; pojedynczy post nie musi realizować wszystkich celów naraz.</p>

        </div>
      </section>

      <section id="realizacje-social-media" className="py-12 md:py-16 bg-muted/30 border-y border-border scroll-mt-28" aria-labelledby="realizacje-heading">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8"><div><p className="dv-eyebrow mb-3">Z naszej produkcji</p><h2 id="realizacje-heading" className="text-3xl md:text-4xl font-heading">Zobacz, jak opowiadamy obrazem.</h2></div><Link to="/realizacje" className="underline underline-offset-4">Całe portfolio</Link></div>
          <div className="grid md:grid-cols-2 gap-6">
            <PortfolioVideo src="/videos/fotz-reel-web.mp4" poster="/videos/enea-stadion-cover.webp" title="Enea Stadion — emocje z bliska" category="Film z wydarzenia" />
            <PortfolioVideo src="/videos/autospa.mp4" poster="/videos/autospa-frame.webp" title="AutoSpa" category="Prezentacja firmy" />
          </div>
          <p className="text-muted-foreground max-w-3xl mt-6 leading-relaxed">Film z wydarzenia i prezentacja firmy odpowiadają na różne potrzeby. Przed nagraniami ustalamy odbiorców, miejsce publikacji i działanie, do którego materiał ma zachęcać. To przykłady naszej produkcji foto i wideo, a nie obietnica wyników sprzedażowych lub efektów prowadzenia profili.</p>
        </div>
      </section>

      <section id="proces-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="proces-heading">
        <p className="dv-eyebrow mb-3">Od briefu do publikacji</p><h2 id="proces-heading" className="text-3xl md:text-4xl font-heading mb-8">Facebook i Instagram: harmonogram działań marketingowych</h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">{steps.map((step, index) => <li key={step.title} className="border-t border-border pt-5"><span aria-hidden="true" className="text-sm text-primary">0{index + 1}</span><h3 className="text-xl mt-3 mb-3">{step.title}</h3><p className="text-muted-foreground leading-relaxed">{step.text}</p></li>)}</ol>
        <p className="mt-8 text-muted-foreground max-w-3xl leading-relaxed">Obsługujemy firmy z Poznania i okolic oraz innych miast zdalnie. Produkcję w Twojej firmie, dojazd i termin ustalamy w ofercie. Nie prowadzimy publicznego biura: spotkania odbywają się po ustaleniu miejsca. Adres rejestrowy: Poznańska 117/11, 62-023 Kamionki.</p>
      </section>

      <section id="wycena-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="wycena-heading">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <p className="dv-eyebrow mb-3">Wycena social media</p>
            <h2 id="wycena-heading" className="text-3xl md:text-4xl font-heading mb-5">Ile kosztuje stała obsługa social media?</h2>
            <h3 className="text-2xl mb-4">Od 3 000 zł netto miesięcznie</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">Podstawowy abonament łączy regularne publikacje z niewielkimi aktualizacjami strony. Obejmuje:</p>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground mb-5">
              <li>4 materiały łącznie w miesiącu, na bazie istniejących zdjęć i filmów.</li>
              <li>Publikację na maksymalnie 2 profilach i jedną zbiorczą rundę poprawek.</li>
              <li>Do 1 godziny aktualizacji strony internetowej.</li>
              <li>Miesięczne podsumowanie i spotkanie do 30 minut.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">Nowa produkcja, montaż, moderacja komentarzy i wiadomości, obsługa kampanii reklamowych i SEO wymagają osobnych ustaleń oraz wyceny. Budżet emisji ustalamy oddzielnie. Większą liczbę materiałów lub kanałów uzgadniamy przed wykonaniem pracy.</p>
            <div className="border border-border rounded-xl p-5 mb-6">
              <h3 className="text-xl mb-3">Ograniczona opieka: 2 000 zł netto miesięcznie</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Do 4 godzin pracy łącznie na wcześniej wybrane zadania. Ten wariant sprawdzi się, jeśli większość komunikacji prowadzi Twój zespół. Nie zawiera automatycznie pakietu podstawowego ani pełnego prowadzenia profili i reklam. Rozszerzenia wyceniamy przed realizacją.</p>
              <Link to={enquiryHref("social", "limited_care")} className="inline-flex items-center min-h-11 underline underline-offset-4">Zapytaj o ograniczoną opiekę</Link>
            </div>
            <Link to="/agencja-social-media/cennik" className="underline underline-offset-4">Sprawdź modele i składniki wyceny</Link>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 md:p-8"><h3 className="text-2xl mb-5">Co przesłać do wyceny?</h3><ul className="list-disc pl-5 space-y-3 text-muted-foreground"><li>Linki do strony i obecnych profili na Facebooku, Instagramie czy LinkedIn.</li><li>Cel: np. zapytania o ofertę, rezerwacje, dotarcie do nowych klientów lub komunikacja wydarzenia.</li><li>Dostępne zdjęcia, filmy i osoby, które mogą wystąpić w nagraniach.</li><li>Planowany termin, kanały i budżet na obsługę oraz reklamę.</li></ul><Link to={enquiryHref("social", "retainer")} className="dv-btn dv-btn-primary mt-7 min-h-11">Opisz swoje potrzeby <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></aside>
        </div>
      </section>

      <section id="pytania-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="faq-heading">
        <div className="max-w-3xl"><h2 id="faq-heading" className="text-3xl md:text-4xl font-heading mb-7">Social media w Poznaniu — pytania klientów</h2>{faqs.map(faq => <details key={faq.question} className="border-b border-border py-5"><summary className="font-medium cursor-pointer pr-3 min-h-11 py-2">{faq.question}</summary><p className="text-muted-foreground leading-relaxed mt-4">{faq.answer}</p></details>)}</div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:pb-20" aria-labelledby="poradniki-heading">
        <h2 id="poradniki-heading" className="text-2xl md:text-3xl font-heading mb-6">Przygotuj się do współpracy</h2>
        <div className="flex flex-col sm:flex-row gap-5 mb-7"><Link to="/blog/agencja-social-media-poznan" className="underline underline-offset-4">Jak porównać agencje social media</Link><Link to="/generator-briefu" className="underline underline-offset-4">Przygotuj brief projektu</Link></div>
        {isLoading && <p role="status" className="text-muted-foreground">Ładuję dodatkowe poradniki…</p>}
        {isError && <div role="alert"><p className="text-muted-foreground mb-3">Nie udało się wczytać dodatkowych poradników.</p><button type="button" onClick={() => void refetch()} className="underline underline-offset-4">Spróbuj ponownie</button></div>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{articles.map(article => <Link key={article.id} to={`/blog/${article.slug}`} className="border border-border rounded-xl p-5"><h3 className="font-medium">{article.title}</h3>{article.excerpt && <p className="text-sm text-muted-foreground line-clamp-3 mt-3">{article.excerpt}</p>}</Link>)}</div>
      </section>
    </Layout>
  );
}
