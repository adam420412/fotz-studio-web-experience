import { Link } from "react-router-dom";
import { ArrowRight, Camera, CalendarDays, ChartNoAxesCombined, MessageSquare, Target, Video } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { PortfolioVideo } from "@/components/PortfolioVideo";

const PAGE_URL = "https://www.fotz-studio.pl/agencja-social-media/krakow";

const services = [
  { icon: Target, title: "Strategie marketingowe dla social media", text: "Ustalamy, do kogo mówi Twoja marka w Krakowie: mieszkańców, studentów, turystów czy klientów biznesowych. Projektujemy strategię z tematami, formatami, rolą każdej platformy i założonymi celami.", href: "/social-media/strategia" },
  { icon: CalendarDays, title: "Prowadzenie profili na Facebooku, Instagramie i LinkedIn", text: "Publikowanie treści według harmonogramu: posty, grafiki, opisy i relacje, a do tego moderacja komentarzy oraz wiadomości w uzgodnionych godzinach.", href: "/social-media/obsluga" },
  { icon: Camera, title: "Content marketing i zdjęcia", text: "Tworzymy content z materiałów, które przesyła firma, a gdy ich brakuje, planujemy sesję. Wyjazd na zdjęcia do Krakowa ustalamy osobno, razem z terminem i kosztami.", href: "/social-media/content" },
  { icon: Video, title: "Rolki i wideo", text: "Scenariusze, montaż i napisy do rolek na Instagram, Facebook i TikTok. Pracujemy na Twoich nagraniach albo na materiale z dnia zdjęciowego, jeśli taki zaplanujemy.", href: "/uslugi/produkcja-video" },
  { icon: MessageSquare, title: "Kampanie reklamowe Facebook Ads", text: "Płatne kampanie w systemie reklamowym Meta, skierowane do grupy docelowej w Krakowie i okolicy albo w całej Polsce. Ustalamy cel, kreacje i odbiorców, a budżet emisji rozliczasz bezpośrednio z platformą.", href: "/performance-marketing/meta-ads" },
  { icon: ChartNoAxesCombined, title: "Analityka i raporty", text: "Analizujemy zasięgi, interakcje, kliknięcia i zapytania, a potem raportujemy je w prostej formie. Raport kończy się listą zmian na kolejny okres, a nie samą tabelą liczb.", href: "/social-media/analityka" },
];

const faqs = [
  { question: "Czy FOTZ Studio ma biuro w Krakowie?", answer: "Nie. Nasz zespół pracuje w Poznaniu, a firmy z Krakowa obsługujemy zdalnie: spotkania odbywają się online, a materiały, akceptacje i raporty przesyłamy cyfrowo. Ewentualny przyjazd na zdjęcia lub nagrania ustalamy osobno." },
  { question: "Czym zajmuje się agencja social media?", answer: "Planuje komunikację marki w mediach społecznościowych, tworzy treści, prowadzi profile, odpowiada odbiorcom i obsługuje kampanie reklamowe. Zakres współpracy ustalamy indywidualnie — od samego planu po kompleksową obsługę." },
  { question: "Ile kosztuje prowadzenie social mediów dla firmy z Krakowa?", answer: "Wycena zależy od liczby kanałów i publikacji, rodzaju treści, moderacji, rolek oraz kampanii. Osobno pokazujemy obsługę, produkcję i budżet reklamowy. Lokalizacja firmy nie zmienia zasad wyceny, a ewentualny wyjazd na nagrania wyceniamy oddzielnie." },
  { question: "Czy prowadzicie też Google Ads i SEO?", answer: "Tak, jeśli kampania ma objąć wyszukiwarkę. Google Ads, pozycjonowanie SEO i strony internetowe to osobne usługi FOTZ Studio, które możemy połączyć z obsługą social mediów w jednej ofercie." },
  { question: "Czy możecie publikować treści po angielsku?", answer: "Jeśli Twoi klienci w Krakowie to także turyści lub osoby spoza Polski, wersje językowe ustalamy w zakresie współpracy przy wycenie." },
  { question: "Czy gwarantujecie wzrost obserwujących lub sprzedaży?", answer: "Nie gwarantujemy konkretnych wyników. Ustalamy mierniki, regularnie je sprawdzamy i na tej podstawie zmieniamy treści oraz kampanie. Efekty zależą też od oferty, budżetu i obsługi zapytań po Twojej stronie." },
];

const steps = [
  { title: "Rozmowa online", text: "Na wideorozmowie poznajemy Twój biznes, klientów i obecne profile. Ustalamy cel i to, co zostaje po stronie Twojego zespołu." },
  { title: "Audyt i strategia", text: "Przeglądamy profile i komunikację konkurencji w Twojej branży. Tworzymy strategię, harmonogram i listę potrzebnych materiałów." },
  { title: "Treści i akceptacja", text: "Plan publikacji trafia do Ciebie z wyprzedzeniem. Poprawki zgłaszasz w jednym miejscu, a zatwierdzone posty publikujemy zgodnie z harmonogramem." },
  { title: "Raport i optymalizacja", text: "Po każdym okresie omawiamy wyniki na krótkim spotkaniu online i wdrażamy zmiany: co rozwijać, a z czego zrezygnować." },
];

export default function SocialMediaKrakow() {
  return (
    <Layout>
      <SEOHead title="Agencja social media Kraków — marketing i kampanie reklamowe" description="Agencja social media dla firm z Krakowa: strategie marketingowe, prowadzenie profili na Facebooku i Instagramie, kampanie reklamowe Meta i Google Ads." canonical={PAGE_URL} />
      <ServiceSchema name="Obsługa social media dla firm z Krakowa" description="Strategia, prowadzenie profili w mediach społecznościowych, content, wideo i kampanie reklamowe realizowane zdalnie." areaServed="Kraków" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl/" }, { name: "Agencja social media", url: "https://www.fotz-studio.pl/agencja-social-media" }, { name: "Kraków", url: PAGE_URL }]} />
      <FAQSchema items={faqs} />

      <section className="container-wide px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="dv-eyebrow mb-5">FOTZ Studio · obsługa zdalna · Kraków</p>
            <h1 className="text-4xl md:text-6xl font-heading leading-[1.08] tracking-tight mb-6">Agencja social media Kraków<br /><span className="text-gradient">kompleksowa obsługa, marketing online i reklama.</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-7">Pomagamy firmom z Krakowa prowadzić media społecznościowe tak, żeby profil odpowiadał na pytania klientów i prowadził do kontaktu. Tworzymy strategie, content i rolki, prowadzimy Facebooka, Instagram i LinkedIn oraz kampanie reklamowe — zdalnie, z zespołu w Poznaniu.</p>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <Link to="/konsultacja" className="dv-btn dv-btn-primary">Umów rozmowę online <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
              <a href="#zakres-social-media" className="dv-btn dv-btn-secondary">Sprawdź zakres usług</a>
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl mb-5">Dla jakich klientów z Krakowa prowadzimy marketing?</h2>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
              <li>Restauracje, kawiarnie, hotele i apartamenty, które docierają do mieszkańców i turystów.</li>
              <li>Szkoły, kursy i projekty edukacyjne kierowane do studentów.</li>
              <li>Firmy usługowe, gabinety i salony, którym zależy na zapytaniach z okolicy.</li>
              <li>Sklepy e-commerce oraz firmy B2B i technologiczne, które budują markę na LinkedIn.</li>
            </ul>
          </aside>
        </div>
        <nav aria-label="Na tej stronie" className="flex flex-wrap gap-x-6 gap-y-3 mt-10 pt-6 border-t border-border text-sm">
          <a href="#zakres-social-media" className="underline underline-offset-4">Zakres usług</a><a href="#kampanie-social-media" className="underline underline-offset-4">Kampanie</a><a href="#proces-social-media" className="underline underline-offset-4">Przebieg współpracy</a><a href="#wycena-social-media" className="underline underline-offset-4">Wycena</a><a href="#pytania-social-media" className="underline underline-offset-4">FAQ</a>
        </nav>
      </section>

      <section id="zakres-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="zakres-heading">
        <p className="dv-eyebrow mb-3">Usługi social media</p><h2 id="zakres-heading" className="text-3xl md:text-4xl font-heading mb-5">Zakres usług: strategie, profile na Facebooku i Instagramie, content i wideo</h2>
        <p className="text-muted-foreground max-w-3xl mb-6 leading-relaxed">Kraków to rynek, na którym obok siebie działają lokale nastawione na ruch turystyczny, marki kierujące ofertę do studentów i firmy obsługujące klientów biznesowych. Każda z tych grup korzysta z innych kanałów i reaguje na inne treści, dlatego zanim zaczniemy publikować, ustalamy odbiorców, język marki i cel profilu.</p>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">Możesz zlecić nam kompleksową obsługę mediów społecznościowych albo wybrane działania — np. samą strategię, produkcję rolek lub kampanie reklamowe, gdy profil prowadzi Twój zespół. Social media marketing traktujemy jako część sprzedaży Twojej firmy: liczy się to, czy odbiorca zrobi kolejny krok.</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{services.map(service => <article key={service.href} className="border border-border bg-card rounded-2xl p-6 flex flex-col items-start"><service.icon aria-hidden="true" className="w-6 h-6 text-primary mb-5" /><h3 className="text-xl mb-3">{service.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{service.text}</p><Link to={service.href} className="underline underline-offset-4 text-sm mt-auto" aria-label={`Szczegóły usługi: ${service.title}`}>Szczegóły usługi</Link></article>)}</div>
      </section>

      <section id="kampanie-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="kampanie-heading">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <p className="dv-eyebrow mb-3">Reklama płatna</p>
            <h2 id="kampanie-heading" className="text-3xl md:text-4xl font-heading mb-5">Kampanie Meta Ads i Google Ads dla Twojej firmy</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">Same publikacje rzadko wystarczą, gdy firma chce szybko dotrzeć do nowych odbiorców. Kampania reklamowa pozwala pokazać ofertę osobom w Krakowie, które jeszcze nie znają marki, i wrócić z przekazem do tych, które odwiedziły stronę lub profil.</p>
            <p className="text-muted-foreground leading-relaxed">Prowadzimy kampanie nastawione na rozpoznawalność, ruch, pozyskiwanie leadów albo sprzedaż w sklepie internetowym. Przy celach sprzedażowych sprawdzamy, czy strona i formularz są gotowe na konwersję, bo od tego zależy, czy kliknięcie zamieni się w zapytanie.</p>
          </div>
          <div>
            <h3 className="text-2xl mb-4">Skuteczny marketing zaczyna się od decyzji</h3>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
              <li>Facebook Ads i reklama na Instagramie — gdy oferta ma wzbudzić zainteresowanie.</li>
              <li>Google Ads — gdy klienci sami szukają usługi w wyszukiwarce.</li>
              <li>Remarketing — dla osób, które już znają markę i są blisko decyzji zakupowej.</li>
              <li>Transparentność rozliczeń: budżet emisji jest oddzielony od wynagrodzenia agencji.</li>
            </ul>
            <Link to="/performance-marketing/google-ads/krakow" className="underline underline-offset-4 inline-block mt-6">Google Ads dla firm z Krakowa</Link>
          </div>
        </div>
      </section>

      <section id="realizacje-social-media" className="py-12 md:py-16 bg-muted/30 border-y border-border scroll-mt-28" aria-labelledby="realizacje-heading">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8"><div><p className="dv-eyebrow mb-3">Przykłady naszej pracy</p><h2 id="realizacje-heading" className="text-3xl md:text-4xl font-heading">Realizacje: wideo, kampanie i marka klienta</h2></div><Link to="/realizacje" className="underline underline-offset-4">Wszystkie realizacje</Link></div>
          <div className="grid md:grid-cols-2 gap-6">
            <PortfolioVideo src="/videos/wsb-merito-enea.mp4" poster="/videos/wsb-merito-poster.webp" title="WSB Merito" category="Spot reklamowy" />
            <PortfolioVideo src="/videos/fps-poznan.mp4" poster="/videos/fps-poznan-poster.jpg" title="FPS Cegielski" category="Film o firmie" />
          </div>
          <p className="text-muted-foreground max-w-3xl mt-6 leading-relaxed">Pokazujemy projekty zrealizowane dla klientów FOTZ — m.in. spot dla WSB Merito, materiały dla Enea Stadionu i FPS Cegielski oraz kampanię Meta Ads dla Dawid EDU. To przykłady sposobu pracy; nie są to realizacje dla firm z Krakowa.</p>
        </div>
      </section>

      <section id="proces-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="proces-heading">
        <p className="dv-eyebrow mb-3">Współpraca zdalna</p><h2 id="proces-heading" className="text-3xl md:text-4xl font-heading mb-8">Prowadzenie social media krok po kroku: jak pracujemy z klientem</h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">{steps.map((step, index) => <li key={step.title} className="border-t border-border pt-5"><span aria-hidden="true" className="text-sm text-primary">0{index + 1}</span><h3 className="text-xl mt-3 mb-3">{step.title}</h3><p className="text-muted-foreground leading-relaxed">{step.text}</p></li>)}</ol>
        <p className="mt-8 text-muted-foreground max-w-3xl leading-relaxed">Nie mamy biura w Krakowie. Bieżący kontakt prowadzimy online, a zdjęcia i nagrania możesz przesyłać nam cyfrowo. Jeśli projekt wymaga dnia zdjęciowego na miejscu, termin i koszt przyjazdu ustalamy osobno.</p>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:py-16" aria-labelledby="agencja-heading">
        <div className="max-w-3xl">
          <p className="dv-eyebrow mb-3">O FOTZ Studio</p>
          <h2 id="agencja-heading" className="text-3xl md:text-4xl font-heading mb-5">Agencja marketingowa, w której specjalizujemy się w social media i produkcji</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">FOTZ Studio to agencja kreatywna z Poznania. Łączymy pracę agencji marketingowej z własną produkcją zdjęć i wideo, dlatego strategię, treści i kampanie przygotowuje jeden zespół. Dla firm, które potrzebują szerszego marketingu internetowego, realizujemy też tworzenie stron internetowych i SEO.</p>
          <p className="text-muted-foreground leading-relaxed">Krakowskiego rynku nie znamy od środka tak jak lokalna agencja — dlatego na starcie prosimy o informacje o Twoich klientach, sezonowości i konkurencji. Treści przygotowujemy pod Twoją branżę i odbiorców, a nie według jednego szablonu dla każdego biznesu.</p>
        </div>
      </section>

      <section id="wycena-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="wycena-heading">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div><p className="dv-eyebrow mb-3">Wycena</p><h2 id="wycena-heading" className="text-3xl md:text-4xl font-heading mb-5">Ile kosztuje marketing w mediach społecznościowych?</h2><p className="text-muted-foreground leading-relaxed mb-6">Nie mamy jednego pakietu dla wszystkich. Na koszt wpływają liczba kanałów i publikacji, rodzaj treści, moderacja, produkcja rolek i prowadzenie kampanii. W ofercie rozdzielamy obsługę profili, produkcję i budżet reklamowy, żeby było jasne, za co płacisz.</p><Link to="/agencja-social-media/cennik" className="underline underline-offset-4">Zobacz, jak liczymy cennik social media</Link></div>
          <aside className="rounded-2xl border border-border bg-card p-6 md:p-8"><h3 className="text-2xl mb-5">Co przygotować przed rozmową?</h3><ul className="list-disc pl-5 space-y-3 text-muted-foreground"><li>Linki do strony i profili firmy.</li><li>Krótki opis klientów: lokalni, turyści, studenci czy firmy.</li><li>Materiały, które już masz: zdjęcia, filmy, identyfikację wizualną.</li><li>Oczekiwany start, kanały i orientacyjny budżet.</li></ul><Link to="/kontakt" className="dv-btn dv-btn-primary mt-7">Napisz do nas <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></aside>
        </div>
      </section>

      <section id="pytania-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="faq-heading">
        <div className="max-w-3xl"><h2 id="faq-heading" className="text-3xl md:text-4xl font-heading mb-7">FAQ: agencja social media dla firm z Krakowa</h2>{faqs.map(faq => <details key={faq.question} className="border-b border-border py-5"><summary className="font-medium cursor-pointer pr-3">{faq.question}</summary><p className="text-muted-foreground leading-relaxed mt-4">{faq.answer}</p></details>)}</div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:pb-20" aria-labelledby="poradniki-heading">
        <h2 id="poradniki-heading" className="text-2xl md:text-3xl font-heading mb-6">Przydatne materiały o marketingu w social media</h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-5">
          <Link to="/blog/agencja-social-media-poznan" className="underline underline-offset-4">Jak wybrać agencję social media</Link>
          <Link to="/agencja-social-media/cennik" className="underline underline-offset-4">Cennik social media</Link>
          <Link to="/social-media/obsluga" className="underline underline-offset-4">Obsługa profili firmowych</Link>
          <Link to="/agencja-social-media" className="underline underline-offset-4">Agencja social media FOTZ Studio</Link>
        </div>
      </section>
    </Layout>
  );
}
