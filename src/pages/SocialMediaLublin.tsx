import { Link } from "react-router-dom";
import { ArrowRight, Camera, CalendarDays, ChartNoAxesCombined, MessageSquare, Target, Video } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { PortfolioVideo } from "@/components/PortfolioVideo";
import stadiumPhoto from "@/assets/enea/stadion-race-fajerwerki-web.webp";

const CANONICAL = "https://www.fotz-studio.pl/agencja-social-media/lublin";

const services = [
  { icon: Target, title: "Strategia komunikacji i plan treści", text: "Zaczynamy od tego, do kogo mówi Twoja firma w Lublinie i regionie: studenci, rodziny, pacjenci, klienci biznesowi. Ustalamy rolę każdego kanału, ton wypowiedzi i tematy, które odpowiadają na realne pytania odbiorców. Efektem jest kompleksowy plan komunikacji.", href: "/social-media/strategia" },
  { icon: CalendarDays, title: "Prowadzenie profili Facebook, Instagram i LinkedIn", text: "Przygotowujemy posty, grafiki i opisy, układamy harmonogram publikacji i pilnujemy komentarzy oraz wiadomości. Każdą treść przed publikacją akceptuje wskazana osoba po stronie firmy.", href: "/social-media/obsluga" },
  { icon: Camera, title: "Zdjęcia i materiały do postów", text: "Korzystamy z Twoich zdjęć produktów, wnętrz i zespołu, a jeśli ich brakuje, planujemy sesję. Wyjazd fotografa do Lublina ustalamy osobno, razem z terminem i kosztami.", href: "/social-media/content" },
  { icon: Video, title: "Rolki i profesjonalny montaż filmów", text: "Piszemy scenariusze rolek i relacji, montujemy nagrania przesłane przez firmę albo zrealizowane przez nasz zespół. Formaty dobieramy do kanałów, na których działa firma — od Instagrama po TikTok.", href: "/uslugi/produkcja-video" },
  { icon: MessageSquare, title: "Kampania reklamowa Meta Ads", text: "Facebook Ads i reklamy na Instagramie kierowane na Lublin, okoliczne gminy albo całe województwo. Ustawiamy cel, grupy odbiorców i kreacje, a w trakcie emisji optymalizujemy kampanię. Budżet płacony platformie jest osobną pozycją.", href: "/performance-marketing/meta-ads" },
  { icon: ChartNoAxesCombined, title: "Analiza wyników i raport", text: "Co miesiąc pokazujemy zasięg, zaangażowanie, kliknięcia i liczbę zapytań. Jeśli udostępnisz dane z CRM lub rezerwacji, łączymy je z działaniami w mediach społecznościowych.", href: "/social-media/analityka" },
];

const faqs = [
  { question: "Czy FOTZ Studio ma biuro w Lublinie?", answer: "Nie. Nasz zespół pracuje w Poznaniu, a firmy z Lublina obsługujemy zdalnie: spotkania prowadzimy online, materiały i raporty przesyłamy cyfrowo. Jeśli projekt wymaga nagrań lub sesji na miejscu, wyjazd ustalamy osobno — nie zakładamy go z góry." },
  { question: "Czy agencja spoza Lublina zrozumie lokalny rynek?", answer: "Przed startem pytamy, jak działa Twój biznes, i zbieramy informacje o klientach, konkurencji i sezonowości, przeglądamy profile podobnych firm w Lublinie i pytamy, skąd dziś przychodzą zapytania. Lokalną wiedzę zespołu firmy łączymy z naszym doświadczeniem w planowaniu treści i reklam." },
  { question: "Ile kosztuje obsługa social media dla firmy z Lublina?", answer: "Nie podajemy jednej stawki. Cena zależy od liczby kanałów i publikacji, rodzaju treści (grafiki, zdjęcia, rolki), moderacji, kampanii reklamowych i ewentualnych nagrań na miejscu. W ofercie rozdzielamy obsługę, produkcję i budżet reklamowy." },
  { question: "Skąd wziąć zdjęcia i filmy, jeśli nie przyjedziecie?", answer: "Wiele firm ma już materiały, które wystarczy dobrze wybrać i opracować. Przygotowujemy też krótką instrukcję nagrywania telefonem: co pokazać, jak ustawić kadr i światło. Z przesłanych plików montujemy rolki i przygotowujemy grafiki." },
  { question: "Czy mogę zamówić tylko reklamy albo tylko rolki?", answer: "Tak. Możesz zlecić samą kampanię Meta Ads, montaż rolek albo strategię, a prowadzenie profili zostawić swojemu zespołowi. Zakres opisujemy w ofercie, żeby było jasne, co robimy my, a co Ty." },
  { question: "Po jakim czasie social media przynoszą efekty?", answer: "Nie gwarantujemy wyników ani terminu. Pierwsze tygodnie pokazują, które treści i reklamy budzą zainteresowanie, a dalsze decyzje opieramy na danych. Na tempo wpływa oferta, budżet, konkurencja i to, jak szybko firma odpowiada na zapytania." },
];

const steps = [
  { title: "Rozmowa online", text: "Spotykamy się na wideorozmowie, przeglądamy Twoje profile, stronę i ofertę. Ustalamy cel, kanały i to, co zostaje po stronie firmy." },
  { title: "Strategia i harmonogram", text: "Przygotowujemy plan tematów, formaty, propozycje reklam i listę materiałów do zebrania. Jeśli potrzebna jest produkcja, wspólnie decydujemy o formie." },
  { title: "Akceptacja i publikacja", text: "Treści trafiają do akceptacji w ustalonym kanale. Zatwierdzone posty i rolki publikujemy zgodnie z harmonogramem." },
  { title: "Raport i kolejne kroki", text: "Analizujemy, które publikacje i reklamy działają, i ustalamy zmiany na kolejny miesiąc." },
];

const audiences = [
  { title: "Gastronomia i miejsca na Starym Mieście", text: "Kawiarnie, restauracje i lokale, które chcą pokazać menu, wnętrze i wydarzenia mieszkańcom oraz turystom odwiedzającym Lublin. Tu klient często najpierw ogląda zdjęcia na Instagramie, a dopiero potem rezerwuje stolik." },
  { title: "Usługi medyczne, beauty i edukacja", text: "Gabinety, kliniki, szkoły językowe i kursy. Lublin to miasto uczelni, więc treści często trafiają do studentów i młodych dorosłych." },
  { title: "Firmy B2B i technologiczne", text: "Software house'y, producenci i firmy usługowe z Lubelszczyzny, dla których profesjonalny profil firmowy i reklamy pomagają w rekrutacji oraz budowaniu marki." },
];

export default function SocialMediaLublin() {
  return (
    <Layout>
      <SEOHead title="Agencja social media Lublin – prowadzenie social media" description="Agencja social media Lublin: prowadzenie social media (Facebook, Instagram), marketing, Google Ads i SEO. Oferta dla firm z Lublina, obsługa zdalna." canonical={CANONICAL} />
      <ServiceSchema name="Obsługa social media dla firm z Lublina" description="Strategia, prowadzenie profili, treści, rolki i kampanie reklamowe dla firm z Lublina, realizowane zdalnie przez zespół FOTZ Studio." areaServed="Lublin" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl/" }, { name: "Agencja social media", url: "https://www.fotz-studio.pl/agencja-social-media" }, { name: "Lublin", url: CANONICAL }]} />
      <FAQSchema items={faqs} />

      <section className="container-wide px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="dv-eyebrow mb-5">FOTZ Studio · obsługa zdalna · Lublin</p>
            <h1 className="text-4xl md:text-6xl font-heading leading-[1.08] tracking-tight mb-6">Agencja social media Lublin<br /><span className="text-gradient">prowadzenie social media, Instagram i Facebook.</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-7">FOTZ Studio to agencja, która łączy marketing z własną produkcją wideo. Prowadzimy profil firmy na Facebooku, Instagramie, LinkedIn i TikToku, przygotowujemy rolki i kampanie reklamowe. Zespół pracuje w Poznaniu, a współpracę z biznesem z Lublina prowadzimy zdalnie.</p>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <Link to="/konsultacja" className="dv-btn dv-btn-primary">Umów rozmowę online <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
              <a href="#realizacje-social-media" className="dv-btn dv-btn-secondary">Zobacz nasze materiały</a>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={stadiumPhoto} alt="Fajerwerki i race przy Enea Stadionie — realizacja FOTZ Studio" width="960" height="640" loading="eager" className="w-full aspect-[3/2] object-cover" />
            <figcaption className="p-5 flex flex-wrap items-center justify-between gap-3 text-sm"><span>Enea Stadion · fotografia z wydarzenia</span><Link to="/realizacje/enea-stadion" className="underline underline-offset-4">Poznaj projekt</Link></figcaption>
          </figure>
        </div>
        <nav aria-label="Na tej stronie" className="flex flex-wrap gap-x-6 gap-y-3 mt-10 pt-6 border-t border-border text-sm">
          <a href="#zakres-social-media" className="underline underline-offset-4">Zakres obsługi</a><a href="#proces-social-media" className="underline underline-offset-4">Jak pracujemy</a><a href="#wycena-social-media" className="underline underline-offset-4">Co wpływa na cenę</a><a href="#pytania-social-media" className="underline underline-offset-4">Pytania przed startem</a>
        </nav>
      </section>

      <section id="zakres-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="zakres-heading">
        <p className="dv-eyebrow mb-3">Zakres współpracy</p><h2 id="zakres-heading" className="text-3xl md:text-4xl font-heading mb-5">Prowadzenie social media w Lublinie: oferta dla firm</h2>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">Kompleksowa obsługa obejmuje strategię, treści, moderację i reklamy w mediach społecznościowych, ale możesz zlecić też jeden element, na przykład reklamy lub rolki. Zakres ustalamy na podstawie tego, co już masz: kanałów, zdjęć, czasu zespołu i budżetu. Dobrze prowadzony profil to dla wielu lokalnych firm pierwszy kontakt potencjalnych klientów z marką, dlatego dbamy, by wizerunek Twojej firmy był spójny w każdym kanale.</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{services.map(service => <article key={service.href} className="border border-border bg-card rounded-2xl p-6 flex flex-col items-start"><service.icon aria-hidden="true" className="w-6 h-6 text-primary mb-5" /><h3 className="text-xl mb-3">{service.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{service.text}</p><Link to={service.href} className="underline underline-offset-4 text-sm mt-auto" aria-label={`Poznaj zakres: ${service.title}`}>Poznaj zakres</Link></article>)}</div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:py-16" aria-labelledby="lublin-heading">
        <p className="dv-eyebrow mb-3">Dla kogo</p><h2 id="lublin-heading" className="text-3xl md:text-4xl font-heading mb-5">Dla kogo jest nasza oferta w Lublinie</h2>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">Lublin łączy rynek akademicki, usługi dla mieszkańców, ruch turystyczny i firmy obsługujące wschodnią Polskę. Każda z tych grup korzysta z mediów społecznościowych inaczej, dlatego plan treści układamy pod konkretnego odbiorcę, a nie pod ogólny szablon. Mały lokalny biznes potrzebuje innej komunikacji niż firma B2B, a strategie dla obu różnią się kanałami, częstotliwością publikacji i rolą reklam. Ważne jest, czego szuka klient i gdzie spędza czas w serwisach społecznościowych.</p>
        <div className="grid md:grid-cols-3 gap-5">{audiences.map(item => <article key={item.title} className="border border-border rounded-2xl p-6"><h3 className="text-xl mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.text}</p></article>)}</div>
      </section>

      <section id="realizacje-social-media" className="py-12 md:py-16 bg-muted/30 border-y border-border scroll-mt-28" aria-labelledby="realizacje-heading">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8"><div><p className="dv-eyebrow mb-3">Z naszej produkcji</p><h2 id="realizacje-heading" className="text-3xl md:text-4xl font-heading">Marketing w praktyce: nasze realizacje</h2></div><Link to="/realizacje" className="underline underline-offset-4">Całe portfolio</Link></div>
          <div className="grid md:grid-cols-2 gap-6">
            <PortfolioVideo src="/videos/fotz-reel-web.mp4" poster="/videos/enea-stadion-cover.webp" title="Enea Stadion — emocje z bliska" category="Film z wydarzenia" />
            <PortfolioVideo src="/videos/autospa.mp4" poster="/videos/autospa-frame.webp" title="AutoSpa" category="Prezentacja firmy" />
          </div>
          <p className="text-muted-foreground max-w-3xl mt-6 leading-relaxed">To realizacje dla klientów z Wielkopolski: Enea Stadionu, FPS Cegielski i Dawid EDU, dla którego prowadziliśmy kampanię Meta Ads. Pokazują, jak pracujemy nad treścią i reklamą — tak samo podchodzimy do projektów dla firm z Lublina.</p>
        </div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:py-16" aria-labelledby="wiecej-heading">
        <p className="dv-eyebrow mb-3">Poza social media</p><h2 id="wiecej-heading" className="text-3xl md:text-4xl font-heading mb-5">Szerszy zakres marketingowy — agencja interaktywna: SEO, strony i sklepy internetowe</h2>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">Jeśli szukasz frazą „agencja marketingowa Lublin”, bo potrzebujesz czegoś więcej niż posty, możemy połączyć social media z innymi usługami. Działamy jak agencja interaktywna: marketing internetowy planujemy tak, żeby reklama, strona internetowa i wyniki w wyszukiwarce wspierały ten sam cel — obecność firmy w internecie i zapytania od nowych klientów.</p>
        <div className="grid md:grid-cols-3 gap-5">
          <article className="border border-border rounded-2xl p-6 flex flex-col items-start"><h3 className="text-xl mb-3">Tworzenie stron internetowych i sklepy internetowe</h3><p className="text-muted-foreground leading-relaxed mb-5">Tworzenie stron i sklepów internetowych, na które kierujemy ruch z social mediów. Projektowania stron WWW nie traktujemy jako osobnego zadania: zakres tworzenia stron ustalamy razem z planem kampanii. Strony budujemy na WordPress lub w technologii dobranej do projektu, a nowoczesny sklep internetowy przygotowujemy z myślą o sprzedaży z reklam.</p><Link to="/uslugi/strony-internetowe/lublin" className="underline underline-offset-4 text-sm mt-auto">Strony internetowe dla Lublina</Link></article>
          <article className="border border-border rounded-2xl p-6 flex flex-col items-start"><h3 className="text-xl mb-3">SEO i usługi pozycjonowania</h3><p className="text-muted-foreground leading-relaxed mb-5">Pozycjonowanie w Google pomaga, gdy klienci szukają Twojej usługi w wyszukiwarce. Zaczynamy od audytu SEO, a potem planujemy treści i zmiany na stronie. Nie obiecujemy konkretnych pozycji w wynikach.</p><Link to="/seo/pozycjonowanie-lublin" className="underline underline-offset-4 text-sm mt-auto">Pozycjonowanie dla Lublina</Link></article>
          <article className="border border-border rounded-2xl p-6 flex flex-col items-start"><h3 className="text-xl mb-3">Kampania Google Ads</h3><p className="text-muted-foreground leading-relaxed mb-5">Reklama w wyszukiwarce uzupełnia działania na Facebooku i Instagramie. Przy prowadzeniu kampanii Google Ads ustalamy słowa kluczowe, obszar Lublina i regionu oraz sposób mierzenia zapytań.</p><Link to="/performance-marketing/google-ads/lublin" className="underline underline-offset-4 text-sm mt-auto">Google Ads w Lublinie</Link></article>
        </div>
        <p className="text-muted-foreground max-w-3xl mt-8 leading-relaxed">Pełny zakres usług marketingowych dla firm z regionu opisujemy na stronie <Link to="/agencja-marketingowa/lublin" className="underline underline-offset-4">agencja marketingowa Lublin</Link>.</p>
      </section>

      <section id="proces-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="proces-heading">
        <p className="dv-eyebrow mb-3">Od briefu do publikacji</p><h2 id="proces-heading" className="text-3xl md:text-4xl font-heading mb-8">Współpraca krok po kroku: klient z Lublina i nasz zespół</h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">{steps.map((step, index) => <li key={step.title} className="border-t border-border pt-5"><span aria-hidden="true" className="text-sm text-primary">0{index + 1}</span><h3 className="text-xl mt-3 mb-3">{step.title}</h3><p className="text-muted-foreground leading-relaxed">{step.text}</p></li>)}</ol>
        <p className="mt-8 text-muted-foreground max-w-3xl leading-relaxed">Spotkania, akceptacje i raporty odbywają się online, więc odległość nie wydłuża pracy. Sesję zdjęciową lub nagrania w Lublinie omawiamy osobno, gdy projekt naprawdę ich wymaga.</p>
      </section>

      <section id="wycena-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="wycena-heading">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div><p className="dv-eyebrow mb-3">Wycena</p><h2 id="wycena-heading" className="text-3xl md:text-4xl font-heading mb-5">Wycena: obsługa profili, produkcja i budżet reklamowy</h2><p className="text-muted-foreground leading-relaxed mb-6">Koszt zależy od liczby kanałów i publikacji, rodzaju treści, moderacji, reklam i produkcji. Ofertę dzielimy na obsługę profili, produkcję materiałów i budżet emisji, żeby każda pozycja była czytelna.</p><Link to="/agencja-social-media/cennik" className="underline underline-offset-4">Zobacz, jak liczymy wycenę</Link></div>
          <aside className="rounded-2xl border border-border bg-card p-6 md:p-8"><h3 className="text-2xl mb-5">Co przesłać do wyceny?</h3><ul className="list-disc pl-5 space-y-3 text-muted-foreground"><li>Linki do strony i obecnych profili firmy.</li><li>Cel: zapytania, rezerwacje, rekrutacja albo promocja wydarzenia.</li><li>Posiadane zdjęcia i filmy oraz informację, kto może wystąpić w nagraniach.</li><li>Kanały, termin startu i budżet na obsługę oraz reklamę.</li></ul><Link to="/kontakt" className="dv-btn dv-btn-primary mt-7">Opisz swoje potrzeby <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></aside>
        </div>
      </section>

      <section id="pytania-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="faq-heading">
        <div className="max-w-3xl"><h2 id="faq-heading" className="text-3xl md:text-4xl font-heading mb-7">Pytania firm: agencja social media Lublin</h2>{faqs.map(faq => <details key={faq.question} className="border-b border-border py-5"><summary className="font-medium cursor-pointer pr-3">{faq.question}</summary><p className="text-muted-foreground leading-relaxed mt-4">{faq.answer}</p></details>)}</div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:pb-20" aria-labelledby="poradniki-heading">
        <h2 id="poradniki-heading" className="text-2xl md:text-3xl font-heading mb-6">Poradniki i dalsze informacje</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link to="/blog/agencja-social-media-poznan" className="border border-border rounded-xl p-5 underline-offset-4 hover:underline">Jak porównać agencje social media</Link>
          <Link to="/agencja-social-media/cennik" className="border border-border rounded-xl p-5 underline-offset-4 hover:underline">Cennik i składniki wyceny</Link>
          <Link to="/social-media/obsluga" className="border border-border rounded-xl p-5 underline-offset-4 hover:underline">Na czym polega obsługa profili</Link>
          <Link to="/agencja-social-media" className="border border-border rounded-xl p-5 underline-offset-4 hover:underline">Agencja social media FOTZ</Link>
        </div>
      </section>
    </Layout>
  );
}
