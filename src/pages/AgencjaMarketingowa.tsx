import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, CheckCircle2, Clapperboard, Compass, FileText, Globe2, Mail, MapPin, Megaphone, Palette, Phone, Search, Sparkles, Target, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema, LocalBusinessSchema, OrganizationSchema, ServiceSchema } from "@/components/seo/StructuredData";

const serviceLinks = [
  {
    title: "Branding i identyfikacja wizualna",
    href: "/uslugi/branding",
    icon: Palette,
    text: "Projektujemy system marki: strategię, logo, kolory, typografię, key visual, brand voice i materiały wdrożeniowe.",
  },
  {
    title: "Strony internetowe",
    href: "/uslugi/strony-internetowe",
    icon: Globe2,
    text: "Tworzymy szybkie strony firmowe, serwisy usługowe i architekturę treści przygotowaną pod SEO oraz konwersję.",
  },
  {
    title: "Produkcja video",
    href: "/uslugi/produkcja-video",
    icon: Clapperboard,
    text: "Realizujemy filmy reklamowe, reelsy, spoty, animacje, materiały rekrutacyjne, relacje eventowe i content do kampanii.",
  },
  {
    title: "Social media marketing",
    href: "/uslugi/social-media-marketing",
    icon: Users,
    text: "Prowadzimy komunikację marek na Instagramie, Facebooku, TikToku i LinkedIn: od strategii po kreacje i raporty.",
  },
  {
    title: "Landing page",
    href: "/uslugi/landing-page",
    icon: Target,
    text: "Budujemy strony kampanijne, które mają jedno zadanie: pozyskanie leada, zapisu, telefonu albo sprzedaży.",
  },
  {
    title: "Pozycjonowanie SEO",
    href: "/seo/pozycjonowanie",
    icon: Search,
    text: "Rozwijamy widoczność organiczną przez audyt, techniczne SEO, content, linkowanie i lokalne pozycjonowanie w Poznaniu.",
  },
  {
    title: "Google Ads",
    href: "/performance-marketing/google-ads",
    icon: Megaphone,
    text: "Konfigurujemy kampanie Search, Performance Max, YouTube i remarketing z kontrolą kosztu pozyskania klienta.",
  },
];

const caseStudies = [
  {
    name: "Enea Stadion",
    href: "/realizacje/enea-stadion",
    result: "komunikacja eventowa, produkcja contentu i wzmocnienie widoczności obiektu",
  },
  {
    name: "FPS Cegielski",
    href: "/realizacje/fps-cegielski",
    result: "wizerunek marki przemysłowej, materiały foto-video i komunikacja B2B",
  },
  {
    name: "RPPG",
    href: "/realizacje/rppg",
    result: "strategia komunikacji, strona internetowa i konsekwentny system treści",
  },
  {
    name: "Fabryka Virali",
    href: "/realizacje/fabryka-virali",
    result: "formaty social video, kreatywne kampanie i content dopasowany do platform",
  },
];

const processSteps = [
  "Diagnoza biznesu, konkurencji, odbiorców, dotychczasowej komunikacji i danych sprzedażowych.",
  "Strategia: pozycjonowanie marki, oferta, komunikaty, kanały, KPI i priorytety na pierwsze 90 dni.",
  "Kreacja: projekty graficzne, treści, landing page, scenariusze video, reklamy i materiały do social media.",
  "Wdrożenie: publikacje, kampanie, konfiguracja analityki, optymalizacja techniczna i kontrola jakości.",
  "Raportowanie: analiza wyników, rekomendacje, testy A/B i decyzje oparte na danych, a nie intuicji.",
];

const priceItems = [
  { name: "Konsultacja i audyt marketingu", price: "od 900 zł netto", note: "dla firm, które chcą uporządkować priorytety i budżet" },
  { name: "Strategia marketingowa", price: "od 4 500 zł netto", note: "pozycjonowanie, kanały, plan działań i KPI" },
  { name: "Stała obsługa marketingowa", price: "od 3 500 zł netto / mies.", note: "koordynacja działań, content, kampanie i raportowanie" },
  { name: "Strona internetowa lub landing page", price: "od 2 000 zł netto", note: "projekt, copy, wdrożenie i podstawowe SEO" },
  { name: "Kampanie reklamowe", price: "od 1 500 zł netto / mies.", note: "Google Ads, Meta Ads, LinkedIn lub TikTok" },
  { name: "Produkcja video", price: "od 3 000 zł netto", note: "scenariusz, plan, zdjęcia, montaż i formaty social" },
];

const faqs = [
  {
    q: "Czym Fotz Studio różni się od typowej agencji marketingowej?",
    a: "Łączymy strategię, kreację, produkcję video, strony internetowe, SEO i performance marketing w jednym zespole. Dzięki temu kampania nie jest zbiorem osobnych zadań, tylko spójnym systemem pozyskiwania klientów.",
  },
  {
    q: "Czy pracujecie tylko z firmami z Poznania?",
    a: "Nie. Jesteśmy agencją marketingową z Poznania, ale obsługujemy marki z całej Polski. Spotkania strategiczne możemy prowadzić w biurze przy Placu Wolności 16 albo zdalnie.",
  },
  {
    q: "Od czego zaczyna się współpraca?",
    a: "Najczęściej od konsultacji i krótkiego audytu: sprawdzamy ofertę, stronę, konkurencję, analitykę, kanały reklamowe i najważniejsze bariery sprzedaży. Dopiero potem rekomendujemy zakres prac.",
  },
  {
    q: "Czy możecie przejąć cały marketing firmy?",
    a: "Tak. Prowadzimy kompleksową obsługę marketingową: strategię, content, kampanie, SEO, social media, video, landing page, raportowanie i koordynację działań między kanałami.",
  },
  {
    q: "Czy realizujecie pojedyncze projekty, np. logo albo film reklamowy?",
    a: "Tak, ale zawsze patrzymy na projekt w szerszym kontekście. Logo powinno wynikać z pozycjonowania marki, a film reklamowy z celu kampanii, grupy odbiorców i miejsca publikacji.",
  },
  {
    q: "Ile kosztuje współpraca z agencją marketingową?",
    a: "Budżet zależy od zakresu. Proste konsultacje zaczynają się od 900 zł netto, landing page od 2 000 zł netto, strategia od 4 500 zł netto, a stała obsługa marketingowa od 3 500 zł netto miesięcznie.",
  },
  {
    q: "Czy prowadzicie kampanie Google Ads i SEO równolegle?",
    a: "Tak. Bardzo często łączymy Google Ads z SEO, ponieważ reklamy dają szybki ruch, a pozycjonowanie buduje trwałą widoczność. Wspólna analiza fraz poprawia oba kanały.",
  },
  {
    q: "Czy przygotowujecie teksty i materiały do strony?",
    a: "Tak. Tworzymy strukturę informacji, copywriting sprzedażowy, treści SEO, opisy usług, nagłówki, materiały do social media i scenariusze video.",
  },
  {
    q: "Jak raportujecie efekty?",
    a: "Raportujemy wyniki w odniesieniu do KPI: leady, koszt pozyskania, widoczność SEO, ruch, konwersje, zaangażowanie, jakość zapytań i rekomendacje na kolejny okres.",
  },
  {
    q: "Czy możecie pomóc firmie, która ma już stronę i kampanie?",
    a: "Tak. Często zaczynamy od audytu istniejącej strony, kont reklamowych i analityki. Potem poprawiamy to, co blokuje sprzedaż: komunikaty, UX, techniczne SEO, kreacje albo strukturę kampanii.",
  },
];

const internalLinks = [
  ["Usługi", "/uslugi"],
  ["Portfolio", "/realizacje"],
  ["Kontakt", "/kontakt"],
  ["Konsultacja", "/konsultacja"],
  ["O nas", "/o-nas"],
  ["Cennik", "/cennik"],
  ["Blog", "/blog"],
  ["Dla kogo", "/dla-kogo"],
  ["Marketing B2B", "/blog/marketing-b2b-strategia"],
  ["Jak wybrać agencję", "/blog/jak-wybrac-agencje-marketingowa"],
  ["Budżet marketingowy", "/blog/budzet-marketingowy-planowanie"],
  ["Strategia social media", "/blog/strategia-social-media-marketing"],
  ["Audyt strony", "/blog/audyt-strony-internetowej"],
  ["Pozycjonowanie lokalne", "/blog/pozycjonowanie-lokalne-dla-firm"],
  ["Content marketing", "/blog/content-marketing-dla-firm"],
  ["Agencja marketingowa Poznań", "/agencja-marketingowa/poznan"],
];

export default function AgencjaMarketingowa() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Agencja marketingowa Poznań — Fotz Studio | Strony, SEO, Reklamy"
        description="Agencja marketingowa Poznań: strategia, strony WWW, SEO, Google Ads, social media, branding i video. Fotz Studio pomaga firmom rosnąć."
        canonical="https://fotz.pl/agencja-marketingowa"
        keywords="agencja marketingowa Poznań, Fotz Studio, strony internetowe, SEO, reklamy Google Ads, branding, social media marketing, produkcja video"
        og={{
          title: "Agencja marketingowa Poznań — Fotz Studio",
          description: "Kompleksowy marketing dla firm: strategia, strony, SEO, reklamy, branding, social media i produkcja video.",
          url: "https://fotz.pl/agencja-marketingowa",
          type: "website",
        }}
        disableTitleTruncation
        structuredData={faqSchema}
      >
        <meta name="robots" content="index, follow" />
      </SEOHead>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <ServiceSchema
        name="Agencja marketingowa Poznań — Fotz Studio"
        description="Kompleksowa obsługa marketingowa firm: strategia, strony internetowe, SEO, kampanie reklamowe, social media, branding i produkcja video."
        provider="Fotz Studio"
        areaServed={["Poznań", "Wielkopolska", "Polska"]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja marketingowa", url: "https://fotz.pl/agencja-marketingowa" },
        ]}
      />

      <Layout>
        <main>
          <section className="container-wide px-6 md:px-12 pt-40 pb-20">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-foreground">Strona główna</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Agencja marketingowa</span>
            </nav>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-primary" /> Strategia, kreacja i performance w jednym zespole
                </p>
                <h1 className="font-geist text-5xl font-semibold tracking-tight md:text-7xl">
                  Agencja marketingowa Poznań — Fotz Studio
                </h1>
                <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                  Budujemy marketing, który nie kończy się na ładnych kreacjach. Łączymy strategię marki, strony internetowe,
                  pozycjonowanie SEO, kampanie reklamowe, social media, branding i produkcję video w spójny system pozyskiwania klientów.
                  Jeśli szukasz partnera, który rozumie zarówno komunikację, jak i sprzedaż, Fotz Studio jest zespołem dla Ciebie.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/kontakt">Porozmawiajmy o marketingu <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+48790814814"><Phone className="mr-2 h-4 w-4" /> +48 790 814 814</a>
                  </Button>
                </div>
              </div>
              <aside className="rounded-lg border border-border bg-card p-6">
                <h2 className="font-geist text-2xl font-semibold">Dla firm, które chcą rosnąć mądrzej</h2>
                <p className="mt-4 text-muted-foreground">
                  Pracujemy z markami lokalnymi, firmami B2B, e-commerce, instytucjami, produkcją, gastronomią, automotive,
                  nieruchomościami i usługami premium. Zamiast proponować gotowy pakiet, analizujemy punkt wyjścia: ofertę,
                  marżowość, cykl sprzedaży, konkurencję, widoczność w Google, jakość strony i dotychczasowe kampanie.
                </p>
                <div className="mt-6 grid gap-3 text-sm">
                  <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> Plac Wolności 16, Poznań</div>
                  <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> adam@fotz.pl</div>
                  <div className="flex items-center gap-3"><BarChart3 className="h-4 w-4 text-primary" /> SEO, reklamy, content, video, www</div>
                </div>
              </aside>
            </div>
          </section>

          <section className="border-t border-border py-20">
            <div className="container-wide px-6 md:px-12">
              <div className="max-w-4xl">
                <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Co robi agencja marketingowa Fotz Studio?</h2>
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Skuteczny marketing zaczyna się od decyzji strategicznych: dla kogo marka jest najlepszym wyborem, dlaczego klient
                    ma zaufać właśnie jej, jakie problemy rozwiązuje i jak ma być postrzegana na tle konkurencji. Dopiero z takiego
                    fundamentu wynikają działania: kampanie reklamowe, treści, strona internetowa, SEO, social media, video, landing page
                    czy identyfikacja wizualna. Jako agencja marketingowa Poznań pracujemy blisko biznesu — nie rozdzielamy kreatywności
                    od wyniku, a estetyki od konwersji.
                  </p>
                  <p>
                    W praktyce oznacza to, że nie zaczynamy od pytania: „ile postów w miesiącu?”. Zaczynamy od pytań: kto ma kupić,
                    co blokuje decyzję, gdzie klient szuka rozwiązania, jakie argumenty są najważniejsze, ile może kosztować pozyskanie
                    zapytania i które kanały mają największy potencjał. Dopiero potem dobieramy narzędzia. Dla jednej firmy priorytetem
                    będzie przebudowa strony i pozycjonowanie lokalne, dla innej szybkie kampanie Google Ads, a dla kolejnej rebranding,
                    film reklamowy i content do LinkedIna.
                  </p>
                  <p>
                    Fotz Studio działa jak zewnętrzny dział marketingu: planujemy, projektujemy, produkujemy, publikujemy, mierzymy
                    i optymalizujemy. Dzięki temu właściciel lub zarząd nie musi koordynować osobno grafika, copywritera, specjalisty SEO,
                    developera, operatora kamery i performance marketera. Jeden zespół odpowiada za spójność komunikacji i za to, żeby
                    działania wspierały realne cele: więcej jakościowych leadów, lepszą rozpoznawalność, wyższą konwersję i stabilniejszy
                    wzrost sprzedaży.
                  </p>
                </div>
              </div>

              <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {serviceLinks.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link key={service.href} to={service.href} className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary">
                      <Icon className="mb-5 h-8 w-8 text-primary" />
                      <h3 className="font-geist text-xl font-semibold group-hover:text-primary">{service.title}</h3>
                      <p className="mt-3 text-muted-foreground">{service.text}</p>
                      <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">Zobacz usługę <ArrowRight className="ml-2 h-4 w-4" /></span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-t border-border py-20">
            <div className="container-wide px-6 md:px-12">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Realizacje i doświadczenie</h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Portfolio traktujemy jako dowód procesu, nie galerię obrazków. W projektach dla marek takich jak Enea Stadion,
                    FPS Cegielski, RPPG czy Fabryka Virali łączyliśmy strategię, kreację, stronę, content, video i dystrybucję.
                    Każdy case study pokazuje inny typ wyzwania: wizerunek instytucji, komunikację B2B, lokalną widoczność albo
                    content dopasowany do social mediów. Dzięki temu możemy dobrać metody do specyfiki branży, zamiast powtarzać
                    jeden szablon działań.
                  </p>
                  <Button asChild className="mt-8" variant="outline">
                    <Link to="/realizacje">Zobacz wszystkie realizacje <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
                <div className="grid gap-4">
                  {caseStudies.map((item) => (
                    <Link key={item.href} to={item.href} className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary">
                      <h3 className="font-geist text-2xl font-semibold">{item.name}</h3>
                      <p className="mt-3 text-muted-foreground">{item.result}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-border py-20">
            <div className="container-wide px-6 md:px-12">
              <div className="max-w-4xl">
                <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Proces współpracy</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Dobra agencja marketingowa powinna zmniejszać chaos, nie go zwiększać. Dlatego prowadzimy projekt etapami:
                  od diagnozy i strategii, przez produkcję materiałów, po kampanie i raportowanie. Taki proces pozwala szybko
                  zobaczyć, co działa, a jednocześnie utrzymać spójność marki we wszystkich punktach styku: Google, social media,
                  stronie internetowej, prezentacjach, materiałach sprzedażowych i rozmowach handlowych.
                </p>
              </div>
              <ol className="mt-12 grid gap-4 md:grid-cols-5">
                {processSteps.map((step, index) => (
                  <li key={step} className="rounded-lg border border-border bg-card p-5">
                    <span className="text-sm text-primary">0{index + 1}</span>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-t border-border py-20">
            <div className="container-wide px-6 md:px-12">
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Cennik — od czego zależy budżet?</h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Koszt współpracy zależy od celu, liczby kanałów, skali produkcji, konkurencyjności rynku i tego, czy startujemy
                    od zera, czy rozwijamy istniejący system marketingu. Zawsze proponujemy zakres, który ma biznesowe uzasadnienie:
                    czasem najlepszym pierwszym krokiem jest audyt i strategia, czasem landing page, a czasem kampania reklamowa
                    połączona z poprawą analityki.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {priceItems.map((item) => (
                    <div key={item.name} className="rounded-lg border border-border bg-card p-6">
                      <h3 className="font-geist text-xl font-semibold">{item.name}</h3>
                      <p className="mt-3 text-2xl font-semibold text-primary">{item.price}</p>
                      <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-border py-20">
            <div className="container-wide px-6 md:px-12">
              <div className="max-w-4xl">
                <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Najczęstsze pytania</h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Poniżej zebraliśmy pytania, które najczęściej pojawiają się przed rozpoczęciem współpracy z agencją marketingową.
                </p>
              </div>
              <div className="mt-10 grid gap-4 lg:grid-cols-2">
                {faqs.map((item) => (
                  <article key={item.q} className="rounded-lg border border-border bg-card p-6">
                    <h3 className="font-geist text-xl font-semibold">{item.q}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{item.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-border py-20">
            <div className="container-wide px-6 md:px-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div>
                  <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Powiązane zasoby i usługi</h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Jeśli porównujesz zakres działań albo przygotowujesz brief, te podstrony pomogą uporządkować decyzje.
                    Celowo linkujemy do usług, case studies i poradników, żeby łatwiej przejść od ogólnej potrzeby do konkretnego działania.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {internalLinks.map(([label, href]) => (
                    <Link key={href} to={href} className="rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-border py-20">
            <div className="container-wide px-6 md:px-12">
              <div className="rounded-lg border border-border bg-card p-8 md:p-12">
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <Compass className="mb-5 h-9 w-9 text-primary" />
                    <h2 className="font-geist text-4xl font-semibold tracking-tight">Chcesz sprawdzić, co blokuje wzrost?</h2>
                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                      Napisz do nas, jeśli potrzebujesz partnera, który połączy strategię marki, stronę internetową, SEO, reklamy,
                      social media i produkcję video w jeden plan. Podczas pierwszej rozmowy wskażemy najważniejsze szanse i ryzyka,
                      a potem przygotujemy zakres dopasowany do Twojego budżetu i etapu rozwoju.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Button asChild size="lg">
                      <Link to="/kontakt">Skontaktuj się <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/konsultacja"><FileText className="mr-2 h-4 w-4" /> Umów konsultację</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
