import { Link } from "react-router-dom";
import { ArrowRight, Camera, CalendarDays, ChartNoAxesCombined, MessageSquare, Target, Video } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { PortfolioVideo } from "@/components/PortfolioVideo";

const PAGE_URL = "https://www.fotz-studio.pl/agencja-social-media/szczecin";

const services = [
  { icon: Target, title: "Strategia social media i plan tematów", text: "Zaczynamy od tego, do kogo mówi Twoja firma: mieszkańcy Szczecina, turyści, kontrahenci z regionu czy partnerzy zza zachodniej granicy. Na tej podstawie ustalamy strategię komunikacji: rolę kanałów, ton wypowiedzi i tematy na kolejne tygodnie, dopasowane do grupy docelowej.", href: "/social-media/strategia" },
  { icon: CalendarDays, title: "Prowadzenie profili Facebook i Instagram", text: "Przygotowujemy posty, grafiki i opisy, planujemy publikacje w kalendarzu i odpowiadamy na komentarze w uzgodnionych godzinach. Publikujemy według zaakceptowanego harmonogramu.", href: "/social-media/obsluga" },
  { icon: Camera, title: "Treści i zdjęcia dla marki", text: "Projektujemy treści z materiałów, które przesyłasz, i z własnej produkcji. Jeśli sesja na miejscu w Szczecinie będzie potrzebna, warunki wyjazdu ustalamy osobno.", href: "/social-media/content" },
  { icon: Video, title: "Rolki i krótkie filmy", text: "Filmy promocyjne i rolki: scenariusz, montaż, napisy i wersje pionowe na Instagram, Facebook, TikTok i LinkedIn. Nagrania możesz zrobić we własnym zespole według naszych wskazówek albo zlecić je nam.", href: "/uslugi/produkcja-video" },
  { icon: MessageSquare, title: "Kampanie reklamowe Meta Ads", text: "Reklama na Facebooku i Instagramie: cel kampanii, kreacje, grupy odbiorców, np. zawężone do Szczecina i województwa zachodniopomorskiego, oraz bieżąca optymalizacja. Wysokość budżetu reklamowego płaconego platformie ustalasz i rozliczasz oddzielnie.", href: "/performance-marketing/meta-ads" },
  { icon: ChartNoAxesCombined, title: "Analiza wyników i raport", text: "Raport pokazuje zasięgi, zaangażowanie, kliknięcia i wiadomości, a pełną transparentność zapewnia dostęp do menedżera reklam. Jeżeli udostępnisz dane z CRM lub sprzedaży, sprawdzamy też, ilu klientów przyszło z działań w social mediach.", href: "/social-media/analityka" },
];

const faqs = [
  { question: "Czy FOTZ Studio ma biuro w Szczecinie?", answer: "Nie. Nasz zespół pracuje w Poznaniu, a firmy ze Szczecina obsługujemy zdalnie: spotkania prowadzimy online, materiały wymieniamy cyfrowo, a akceptacje odbywają się mailowo lub we wspólnym folderze. Ewentualny wyjazd na zdjęcia lub nagrania w Szczecinie ustalamy osobno przy wycenie." },
  { question: "Jak wygląda współpraca z agencją social media na odległość?", answer: "Po rozmowie wstępnej dostajesz plan tematów i harmonogram publikacji. Treści przesyłamy do akceptacji przed publikacją, a raport omawiamy na krótkim spotkaniu online. Twój zespół przekazuje nam zdjęcia, informacje o nowościach i odpowiedzi na pytania klientów." },
  { question: "Ile kosztuje prowadzenie social media dla firmy ze Szczecina?", answer: "Koszt zależy od liczby kanałów i postów, rodzaju treści, rolek, moderacji komentarzy oraz kampanii reklamowych. W ofercie rozdzielamy obsługę profili, produkcję materiałów i budżet reklamowy. Nie podajemy jednej stałej ceny, bo zakres u każdej firmy jest inny." },
  { question: "Czy możecie prowadzić komunikację także po niemiecku?", answer: "Jeśli Twoi klienci są także po drugiej stronie granicy, omówmy to przy wycenie. Zakres treści w języku obcym i sposób ich weryfikacji ustalamy indywidualnie." },
  { question: "Czy reklamy Facebook Ads są w cenie obsługi?", answer: "Prowadzenie kampanii reklamowych może być częścią oferty, a budżet emisji płacony Mecie zawsze wskazujemy oddzielnie. Dla firm, które chcą docierać też do osób szukających usług w wyszukiwarce, możemy dołączyć Google Ads." },
  { question: "Agencja czy freelancer — co wybrać?", answer: "Freelancer sprawdzi się przy prostym prowadzeniu jednego profilu. Agencja przydaje się, gdy oprócz postów potrzebujesz nagrań, montażu, projektów graficznych i kampanii reklamowych w jednym miejscu. U nas stałym kontaktem jest jeden social media manager, który koordynuje pracę grafików, operatorów i specjalistów od reklam." },
  { question: "Kiedy zobaczę efekty działań w social mediach?", answer: "Nie gwarantujemy konkretnych wyników ani terminów. Zasięg i zaangażowanie pokazują, jak odbiorcy reagują na treści, a wiadomości, telefony i rezerwacje mówią o zainteresowaniu ofertą. Tempo zależy od branży, budżetu i od tego, jak szybko firma odpowiada na zapytania." },
];

const steps = [
  { title: "Rozmowa online", text: "Robimy krótki audyt Twoich profili, strony internetowej i konkurencji w Szczecinie. Ustalamy cel, kanały oraz to, co zostaje po stronie Twojego zespołu." },
  { title: "Strategia i harmonogram", text: "Przygotowujemy strategię social media, plan tematów, formaty i listę materiałów do zebrania. Jeśli potrzebne są nagrania, planujemy je z wyprzedzeniem." },
  { title: "Akceptacja i publikacje", text: "Każdy post i kreacja reklamowa trafia do wskazanej osoby, a kreatywny pomysł omawiamy przed produkcją. Zatwierdzone treści publikujemy według kalendarza i moderujemy komentarze." },
  { title: "Raport i wnioski", text: "Co miesiąc pokazujemy, które treści i kampanie przyciągają uwagę odbiorców, a które warto zmienić. Wnioski przenosimy na kolejny plan." },
];

const audiences = [
  "Restauracje, kawiarnie i hotele, które chcą przyciągać mieszkańców i turystów odwiedzających miasto i wybrzeże.",
  "Firmy usługowe i gabinety: komunikacja lokalna, opinie, rezerwacje i pytania przez Messenger.",
  "Przedsiębiorstwa z branży morskiej, logistycznej i produkcyjnej, które budują wizerunek pracodawcy i biznesowy profil na LinkedIn.",
  "Sklepy i marki e-commerce ze Szczecina, które prowadzą sprzedaż na rynku ogólnopolskim lub także do Niemiec i potrzebują kampanii sprzedażowych.",
  "Organizatorzy wydarzeń, uczelnie i instytucje kultury, które potrzebują promocji wydarzeń i relacji na żywo.",
];

export default function SocialMediaSzczecin() {
  return (
    <Layout>
      <SEOHead title="Agencja social media Szczecin | agencja marketingowa FOTZ" description="Agencja social media Szczecin: kompleksowa obsługa – Facebook, Instagram, content, strategie, kampania i Google Ads wspierające sprzedaż i zasięgi." canonical={PAGE_URL} />
      <ServiceSchema name="Obsługa social media dla firm ze Szczecina" description="Strategia, prowadzenie profili w mediach społecznościowych, produkcja treści i kampanie reklamowe Meta Ads w uzgodnionym zakresie, realizowane zdalnie." areaServed="Szczecin" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl/" }, { name: "Agencja social media", url: "https://www.fotz-studio.pl/agencja-social-media" }, { name: "Szczecin", url: PAGE_URL }]} />
      <FAQSchema items={faqs} />

      <section className="container-wide px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="max-w-4xl">
          <p className="dv-eyebrow mb-5">FOTZ Studio · obsługa zdalna</p>
          <h1 className="text-4xl md:text-6xl font-heading leading-[1.08] tracking-tight mb-6">Agencja social media Szczecin<br /><span className="text-gradient">prowadzenie social mediów i marketing firmowy w 2026.</span></h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-7">FOTZ Studio to agencja marketingu internetowego z własną produkcją zdjęć i wideo. Firmom ze Szczecina prowadzimy profile na Facebooku, Instagramie i LinkedIn, nagrywamy wideo, tworzymy content i kampanie reklamowe. Pracujemy z Poznania, a współpraca ma charakter zdalny.</p>
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <Link to="/konsultacja" className="dv-btn dv-btn-primary">Umów rozmowę online <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
            <a href="#zakres-social-media" className="dv-btn dv-btn-secondary">Sprawdź zakres usług</a>
          </div>
        </div>
        <nav aria-label="Na tej stronie" className="flex flex-wrap gap-x-6 gap-y-3 mt-10 pt-6 border-t border-border text-sm">
          <a href="#zakres-social-media" className="underline underline-offset-4">Zakres obsługi</a><a href="#dla-kogo-social-media" className="underline underline-offset-4">Dla kogo</a><a href="#proces-social-media" className="underline underline-offset-4">Jak pracujemy</a><a href="#wycena-social-media" className="underline underline-offset-4">Wycena</a><a href="#pytania-social-media" className="underline underline-offset-4">FAQ</a>
        </nav>
      </section>

      <section id="zakres-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="zakres-heading">
        <p className="dv-eyebrow mb-3">Usługi agencji</p><h2 id="zakres-heading" className="text-3xl md:text-4xl font-heading mb-5">Prowadzenie social media Szczecin: strategie, content, kampania i sprzedaż</h2>
        <p className="text-muted-foreground max-w-3xl mb-6 leading-relaxed">Możesz zlecić nam kompleksową obsługę mediów społecznościowych albo tylko wybrany element: strategię, posty, filmy lub kampanie. Zakres dobieramy do branży, materiałów, które już masz, i czasu, jaki Twój zespół może poświęcić na akceptacje.</p>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">Social media marketing ma wspierać sprzedaż i rozpoznawalność marki, a nie tylko zbierać polubienia i zasięgi. Ustalamy mierzalny cel, np. liczbę zapytań ofertowych lub formularzy wysłanych z reklamy. Treści, które budują rozpoznawalność, łączymy z działaniami sprzedażowymi. Dlatego przed pierwszym postem ustalamy, kogo chcesz zainteresować ofertą i co odbiorca ma zrobić dalej: napisać wiadomość, zarezerwować termin czy odwiedzić sklep.</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{services.map(service => <article key={service.href} className="border border-border bg-card rounded-2xl p-6 flex flex-col items-start"><service.icon aria-hidden="true" className="w-6 h-6 text-primary mb-5" /><h3 className="text-xl mb-3">{service.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{service.text}</p><Link to={service.href} className="underline underline-offset-4 text-sm mt-auto" aria-label={`Poznaj zakres: ${service.title}`}>Poznaj zakres</Link></article>)}</div>
      </section>

      <section id="dla-kogo-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="dla-kogo-heading">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <p className="dv-eyebrow mb-3">Rynek szczeciński</p>
            <h2 id="dla-kogo-heading" className="text-3xl md:text-4xl font-heading mb-5">Dla kogo pracujemy: klienci biznesowi i lokalne marki</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">Stolica Pomorza Zachodniego to miasto portowe, akademickie i przygraniczne. Firmy mówią tu do kilku grup naraz: mieszkańców, studentów, turystów i klientów z Niemiec. Komunikacja w mediach społecznościowych powinna to uwzględniać, np. osobnymi kampaniami lub treściami dla poszczególnych odbiorców.</p>
            <p className="text-muted-foreground leading-relaxed">Lokalny biznes często opiera się na poleceniach i opiniach, dlatego relacje z klientami budujemy przez szybkie odpowiedzi w wiadomościach i komentarzach. Firmom B2B pomagamy pokazać kompetencje i ludzi, a markom konsumenckim przygotować krótkie filmy, które wyróżnią się w feedzie.</p>
          </div>
          <ul className="space-y-4">{audiences.map(item => <li key={item} className="border border-border bg-card rounded-xl p-5 text-muted-foreground leading-relaxed">{item}</li>)}</ul>
        </div>
      </section>

      <section id="realizacje-social-media" className="py-12 md:py-16 bg-muted/30 border-y border-border scroll-mt-28" aria-labelledby="realizacje-heading">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8"><div><p className="dv-eyebrow mb-3">Przykłady naszej pracy</p><h2 id="realizacje-heading" className="text-3xl md:text-4xl font-heading">Realizacje i case study: kreatywne wideo, montaż, reklama</h2></div><Link to="/realizacje" className="underline underline-offset-4">Zobacz portfolio</Link></div>
          <div className="grid md:grid-cols-2 gap-6">
            <PortfolioVideo src="/videos/fotz-reel-web.mp4" poster="/videos/enea-stadion-cover.webp" title="Enea Stadion — emocje z bliska" category="Film z wydarzenia" />
            <PortfolioVideo src="/videos/autospa.mp4" poster="/videos/autospa-frame.webp" title="AutoSpa" category="Prezentacja firmy" />
          </div>
          <p className="text-muted-foreground max-w-3xl mt-6 leading-relaxed">Pokazujemy projekty zrealizowane w Poznaniu: współpracowaliśmy m.in. z Enea Stadionem i FPS Cegielski, a dla Dawid EDU prowadziliśmy kampanię Meta Ads. Nie mamy jeszcze w portfolio realizacji ze Szczecina, dlatego chętnie pokażemy nasz sposób pracy na krótkiej rozmowie. <Link to="/realizacje/enea-stadion" className="underline underline-offset-4">Poznaj projekt Enea Stadion</Link>.</p>
        </div>
      </section>

      <section id="proces-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="proces-heading">
        <p className="dv-eyebrow mb-3">Jak pracujemy</p><h2 id="proces-heading" className="text-3xl md:text-4xl font-heading mb-8">Prowadzenie social mediów zdalnie: audyt, social media manager, raport</h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">{steps.map((step, index) => <li key={step.title} className="border-t border-border pt-5"><span aria-hidden="true" className="text-sm text-primary">0{index + 1}</span><h3 className="text-xl mt-3 mb-3">{step.title}</h3><p className="text-muted-foreground leading-relaxed">{step.text}</p></li>)}</ol>
        <p className="mt-8 text-muted-foreground max-w-3xl leading-relaxed">Spotkania prowadzimy online, a materiały wymieniamy przez wspólny folder. Nie mamy biura w Szczecinie. Jeśli projekt wymaga sesji zdjęciowej lub nagrań na miejscu, termin i koszt wyjazdu ustalamy osobno albo przygotowujemy instrukcję nagrań dla Twojego zespołu.</p>
      </section>

      <section id="wycena-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="wycena-heading">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div><p className="dv-eyebrow mb-3">Wycena</p><h2 id="wycena-heading" className="text-3xl md:text-4xl font-heading mb-5">Ile kosztuje agencja social media w Szczecinie?</h2><p className="text-muted-foreground leading-relaxed mb-6">Cena zależy od liczby kanałów i publikacji, produkcji rolek, moderacji i kampanii reklamowych. Wycena rozdziela obsługę profili, produkcję treści i budżet reklamowy, więc od początku wiesz, za co płacisz. Ewentualny wyjazd na zdjęcia do Szczecina jest osobną pozycją.</p><Link to="/agencja-social-media/cennik" className="underline underline-offset-4">Zobacz, od czego zależy cennik</Link></div>
          <aside className="rounded-2xl border border-border bg-card p-6 md:p-8"><h3 className="text-2xl mb-5">Co przygotować przed rozmową?</h3><ul className="list-disc pl-5 space-y-3 text-muted-foreground"><li>Linki do strony internetowej i obecnych profili.</li><li>Cel: np. więcej zapytań, rezerwacji, rekrutacja albo promocja wydarzenia.</li><li>Zdjęcia i filmy, które już masz, oraz osoby gotowe wystąpić w nagraniach.</li><li>Kanały, termin startu i orientacyjny budżet na obsługę oraz reklamę.</li></ul><Link to="/kontakt" className="dv-btn dv-btn-primary mt-7">Wyślij zapytanie <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></aside>
        </div>
      </section>

      <section id="pytania-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="faq-heading">
        <div className="max-w-3xl"><h2 id="faq-heading" className="text-3xl md:text-4xl font-heading mb-7">FAQ: agencja marketingowa Szczecin i social media</h2>{faqs.map(faq => <details key={faq.question} className="border-b border-border py-5"><summary className="font-medium cursor-pointer pr-3">{faq.question}</summary><p className="text-muted-foreground leading-relaxed mt-4">{faq.answer}</p></details>)}</div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:py-16" aria-labelledby="marketing-heading">
        <div className="max-w-3xl">
          <p className="dv-eyebrow mb-3">Kompleksowe podejście</p>
          <h2 id="marketing-heading" className="text-3xl md:text-4xl font-heading mb-5">Kompleksowy i spójny marketing na 2026: social media, branding, strony</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">Profil firmowy działa lepiej, gdy prowadzi do dobrze przygotowanej strony, a reklama na Facebooku i Instagramie wspiera kampanie Google Ads i pozycjonowanie. Zajmujemy się też tworzeniem stron, SEO i identyfikacją wizualną. Strony internetowe i profile powinny mówić tym samym językiem, a komunikacja marki w internecie budować spójny wizerunek we wszystkich kanałach. Kompleksowa obsługa nie jest obowiązkowa: możesz zacząć od samych social mediów. Branding i identyfikacja marki, projekty graficzne oraz tworzenie stron (web) mogą dojść później.</p>
          <p className="text-muted-foreground leading-relaxed mb-6">Jeśli planujesz budżet marketingowy na 2026 rok, pomożemy rozdzielić go między obsługę profili, produkcję treści i kampanie marketingowe. Będziemy raportować ruch na stronie z social mediów, każdy lead i zapytanie, żeby decyzje o kolejnych wydatkach opierały się na danych, a nie na przeczuciu.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            <li><Link to="/uslugi/strony-internetowe/szczecin" className="underline underline-offset-4">Projektowanie stron internetowych dla firm ze Szczecina</Link></li>
            <li><Link to="/uslugi/pozycjonowanie/szczecin" className="underline underline-offset-4">Pozycjonowanie stron WWW w Szczecinie</Link></li>
            <li><Link to="/performance-marketing/google-ads/szczecin" className="underline underline-offset-4">Kampanie Google Ads Szczecin</Link></li>
            <li><Link to="/agencja-marketingowa/szczecin" className="underline underline-offset-4">Agencja marketingowa Szczecin</Link></li>
          </ul>
        </div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:pb-20" aria-labelledby="poradniki-heading">
        <h2 id="poradniki-heading" className="text-2xl md:text-3xl font-heading mb-6">Poradniki marketingowe i powiązane usługi</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link to="/blog/agencja-social-media-poznan" className="border border-border rounded-xl p-5 underline-offset-4 hover:underline">Jak wybrać agencję social media</Link>
          <Link to="/agencja-social-media/cennik" className="border border-border rounded-xl p-5 underline-offset-4 hover:underline">Cennik social media: składniki wyceny</Link>
          <Link to="/social-media/obsluga" className="border border-border rounded-xl p-5 underline-offset-4 hover:underline">Obsługa profili krok po kroku</Link>
          <Link to="/agencja-social-media" className="border border-border rounded-xl p-5 underline-offset-4 hover:underline">Agencja social media FOTZ Studio</Link>
        </div>
      </section>
    </Layout>
  );
}
