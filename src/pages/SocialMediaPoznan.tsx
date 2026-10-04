import { Link } from "react-router-dom";
import { ArrowRight, Camera, CalendarDays, ChartNoAxesCombined, MessageSquare, Target, Video } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { PortfolioVideo } from "@/components/PortfolioVideo";
import { useClusterArticles } from "@/hooks/useClusterArticles";
import stadiumPhoto from "@/assets/enea/stadion-race-fajerwerki-web.webp";

const services = [
  { icon: Target, title: "Strategia i plan tematów", text: "Odbiorcy, rola kanałów, język marki i tematy oparte na pytaniach klientów. Plan dopasowany do materiałów oraz czasu zespołu.", href: "/social-media/strategia" },
  { icon: CalendarDays, title: "Prowadzenie profili", text: "Teksty, grafiki, harmonogram i publikacja na uzgodnionych kanałach. Liczbę materiałów, poprawki i moderację zapisujemy w zakresie.", href: "/social-media/obsluga" },
  { icon: Camera, title: "Zdjęcia i treści", text: "Oferta, produkty, ludzie i kulisy pracy. Łączymy materiały firmy z zaplanowaną produkcją, żeby profil pokazywał jej charakter.", href: "/social-media/content" },
  { icon: Video, title: "Rolki i filmy", text: "Pomysł, scenariusz, nagrania i montaż. Przed produkcją ustalamy formaty, napisy, wersje oraz miejsca wykorzystania filmu.", href: "/uslugi/produkcja-video" },
  { icon: MessageSquare, title: "Kampanie Meta Ads", text: "Cel kampanii, kreacje, konfiguracja i ocena wyników. Obsługę reklam oraz budżet płacony platformie wyceniamy oddzielnie.", href: "/performance-marketing/meta-ads" },
  { icon: ChartNoAxesCombined, title: "Pomiar i raportowanie", text: "Sprawdzamy publikacje, reakcje, wejścia i zapytania. Przy dostępie do danych sprzedaży oceniamy też jakość pozyskanych kontaktów.", href: "/social-media/analityka" },
];
const faqs = [
  { question: "Co obejmuje prowadzenie social media?", answer: "Zakres może obejmować strategię, plan tematów, teksty, grafiki, publikację i moderację. Zdjęcia, rolki, kampanie reklamowe oraz raportowanie rozpisujemy jako konkretne zadania. Przed startem ustalamy kanały, liczbę materiałów, poprawki i sposób akceptacji." },
  { question: "Ile kosztuje obsługa social media w Poznaniu?", answer: "Cena zależy od liczby kanałów i publikacji, formatu treści, nagrań, moderacji oraz reklam. Do wyceny potrzebujemy linków do profili, celu, dostępnych materiałów i planowanego budżetu. Wynagrodzenie za obsługę, koszt produkcji i budżet reklamowy są osobnymi pozycjami." },
  { question: "Czy nagrywacie materiały w firmie w Poznaniu?", answer: "Możemy zaplanować produkcję w siedzibie firmy lub wskazanej lokalizacji. Miejsce, termin, uczestników, listę ujęć i ewentualny dojazd uzgadniamy przed nagraniami. Nasza baza znajduje się w Poznaniu; brief i akceptacje można prowadzić zdalnie." },
  { question: "Czy reklamy są w cenie prowadzenia profilu?", answer: "Publikacje organiczne i płatne kampanie to różne zadania. W ofercie określamy, czy obejmuje ona konfigurację i obsługę reklam. Budżet emisji płacony platformie wskazujemy oddzielnie od wynagrodzenia agencji." },
  { question: "Czy mogę zamówić same rolki albo zdjęcia?", answer: "Tak, możemy wycenić samą produkcję materiałów. Ustalamy liczbę filmów lub zdjęć, formaty, zakres montażu, poprawki i sposób wykorzystania. Publikacja oraz prowadzenie profilu mogą pozostać po stronie Twojej firmy." },
  { question: "Po czym poznam, czy działania przynoszą efekty?", answer: "Najpierw ustalamy cel i punkt wyjścia. Zasięg oraz reakcje pokazują odbiór treści, a wejścia, zapytania i rezerwacje pomagają ocenić zainteresowanie ofertą. Sprzedaż weryfikujemy w danych firmy. Termin uzyskania wyników zależy między innymi od oferty, budżetu, materiałów i obsługi kontaktów." },
];
const steps = [
  { title: "Rozmowa i zakres", text: "Przeglądamy profile, ofertę i dotychczasowe materiały. Ustalamy odbiorców, cel, kanały oraz to, co zostaje po stronie Twojego zespołu." },
  { title: "Plan i produkcja", text: "Przygotowujemy tematy, formaty i listę potrzebnych materiałów. Jeśli zakres obejmuje nagrania, uzgadniamy dzień produkcji i uczestników." },
  { title: "Akceptacja i publikacja", text: "Materiały trafiają do wyznaczonej osoby w firmie. Zatwierdzone treści publikujemy według planu; dodatkowe zadania ustalamy osobno." },
  { title: "Raport i kolejne decyzje", text: "Porównujemy wyniki z celem oraz punktem wyjścia. Wnioski przekładamy na następne tematy, formaty i testy reklamowe." },
];

export default function SocialMediaPoznan() {
  const { data: articles = [], isLoading, isError, refetch } = useClusterArticles("poznan");
  return (
    <Layout>
      <SEOHead title="Agencja social media Poznań — prowadzenie profili i rolki" description="FOTZ Studio w Poznaniu: prowadzenie Facebooka i Instagrama, zdjęcia, rolki oraz kampanie Meta Ads. Zobacz realizacje, zakres współpracy i sposób wyceny." canonical="https://www.fotz-studio.pl/agencja-social-media/poznan" />
      <ServiceSchema name="Obsługa social media w Poznaniu" description="Planowanie komunikacji, prowadzenie profili, produkcja zdjęć i video oraz kampanie reklamowe w uzgodnionym zakresie." areaServed="Poznań" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl/" }, { name: "Agencja social media", url: "https://www.fotz-studio.pl/agencja-social-media" }, { name: "Poznań", url: "https://www.fotz-studio.pl/agencja-social-media/poznan" }]} />
      <FAQSchema items={faqs} />

      <section className="container-wide px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="dv-eyebrow mb-5">FOTZ Studio · Poznań</p>
            <h1 className="text-4xl md:text-6xl font-heading leading-[1.08] tracking-tight mb-6">Agencja social media<br /><span className="text-gradient">w Poznaniu.</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-7">Prowadzimy profile, robimy zdjęcia i nagrywamy rolki. Łączymy komunikację na Facebooku, Instagramie i LinkedIn z ofertą Twojej firmy oraz jasno ustalonym celem.</p>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <Link to="/konsultacja" className="dv-btn dv-btn-primary">Umów rozmowę 15 min <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
              <a href="#realizacje-social-media" className="dv-btn dv-btn-secondary">Zobacz nasze materiały</a>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={stadiumPhoto} alt="Fajerwerki i race przy Enea Stadionie w Poznaniu" width="960" height="640" loading="eager" className="w-full aspect-[3/2] object-cover" />
            <figcaption className="p-5 flex flex-wrap items-center justify-between gap-3 text-sm"><span>Enea Stadion · fotografia z wydarzenia</span><Link to="/realizacje/enea-stadion" className="underline underline-offset-4">Poznaj projekt</Link></figcaption>
          </figure>
        </div>
        <nav aria-label="Na tej stronie" className="flex flex-wrap gap-x-6 gap-y-3 mt-10 pt-6 border-t border-border text-sm">
          <a href="#zakres-social-media" className="underline underline-offset-4">Zakres obsługi</a><a href="#proces-social-media" className="underline underline-offset-4">Jak pracujemy</a><a href="#wycena-social-media" className="underline underline-offset-4">Co wpływa na cenę</a><a href="#pytania-social-media" className="underline underline-offset-4">Pytania przed startem</a>
        </nav>
      </section>

      <section id="zakres-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="zakres-heading">
        <p className="dv-eyebrow mb-3">Zakres współpracy</p><h2 id="zakres-heading" className="text-3xl md:text-4xl font-heading mb-5">Czego potrzebują Twoje profile?</h2>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">Możesz powierzyć nam regularną komunikację albo konkretną część pracy: plan, produkcję materiałów lub kampanię. Zakres dobieramy do tego, co firma ma już gotowe i czego potrzebuje.</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{services.map(service => <article key={service.href} className="border border-border bg-card rounded-2xl p-6 flex flex-col items-start"><service.icon aria-hidden="true" className="w-6 h-6 text-primary mb-5" /><h3 className="text-xl mb-3">{service.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{service.text}</p><Link to={service.href} className="underline underline-offset-4 text-sm mt-auto" aria-label={`Poznaj zakres: ${service.title}`}>Poznaj zakres</Link></article>)}</div>
      </section>

      <section id="realizacje-social-media" className="py-12 md:py-16 bg-muted/30 border-y border-border scroll-mt-28" aria-labelledby="realizacje-heading">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8"><div><p className="dv-eyebrow mb-3">Z naszej produkcji</p><h2 id="realizacje-heading" className="text-3xl md:text-4xl font-heading">Zobacz, jak opowiadamy obrazem.</h2></div><Link to="/realizacje" className="underline underline-offset-4">Całe portfolio</Link></div>
          <div className="grid md:grid-cols-2 gap-6">
            <PortfolioVideo src="/videos/fotz-reel-web.mp4" poster="/videos/enea-stadion-cover.webp" title="Enea Stadion — emocje z bliska" category="Film z wydarzenia" />
            <PortfolioVideo src="/videos/autospa.mp4" poster="/videos/autospa-frame.webp" title="AutoSpa" category="Prezentacja firmy" />
          </div>
          <p className="text-muted-foreground max-w-3xl mt-6 leading-relaxed">Film z wydarzenia i prezentacja firmy odpowiadają na różne potrzeby. Przed nagraniami ustalamy odbiorców, miejsce publikacji i działanie, do którego materiał ma zachęcać.</p>
        </div>
      </section>

      <section id="proces-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="proces-heading">
        <p className="dv-eyebrow mb-3">Od briefu do publikacji</p><h2 id="proces-heading" className="text-3xl md:text-4xl font-heading mb-8">Jasny podział pracy.</h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">{steps.map((step, index) => <li key={step.title} className="border-t border-border pt-5"><span aria-hidden="true" className="text-sm text-primary">0{index + 1}</span><h3 className="text-xl mt-3 mb-3">{step.title}</h3><p className="text-muted-foreground leading-relaxed">{step.text}</p></li>)}</ol>
        <p className="mt-8 text-muted-foreground max-w-3xl leading-relaxed">Nasza baza jest w Poznaniu. Produkcję w Twojej firmie, dojazd i termin ustalamy w ofercie. Rozmowy, przekazywanie materiałów i akceptacje możemy prowadzić zdalnie.</p>
      </section>

      <section id="wycena-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="wycena-heading">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div><p className="dv-eyebrow mb-3">Wycena social media</p><h2 id="wycena-heading" className="text-3xl md:text-4xl font-heading mb-5">Porównuj zakres, nie samą liczbę postów.</h2><p className="text-muted-foreground leading-relaxed mb-6">Koszt zależy od kanałów, liczby materiałów, nagrań, montażu, moderacji i reklam. W ofercie oddzielamy obsługę profili, produkcję oraz budżet emisji. Dzięki temu wiesz, za co płacisz i które zadania wymagają dodatkowej wyceny.</p><Link to="/agencja-social-media/cennik" className="underline underline-offset-4">Sprawdź modele i składniki wyceny</Link></div>
          <aside className="rounded-2xl border border-border bg-card p-6 md:p-8"><h3 className="text-2xl mb-5">Co przesłać do wyceny?</h3><ul className="list-disc pl-5 space-y-3 text-muted-foreground"><li>Linki do strony i obecnych profili.</li><li>Cel: np. zapytania o ofertę, rezerwacje lub komunikacja wydarzenia.</li><li>Dostępne zdjęcia, filmy i osoby, które mogą wystąpić w nagraniach.</li><li>Planowany termin, kanały i budżet na obsługę oraz reklamę.</li></ul><Link to="/kontakt" className="dv-btn dv-btn-primary mt-7">Opisz swoje potrzeby <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></aside>
        </div>
      </section>

      <section id="pytania-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="faq-heading">
        <div className="max-w-3xl"><h2 id="faq-heading" className="text-3xl md:text-4xl font-heading mb-7">Pytania przed rozpoczęciem</h2>{faqs.map(faq => <details key={faq.question} className="border-b border-border py-5"><summary className="font-medium cursor-pointer pr-3">{faq.question}</summary><p className="text-muted-foreground leading-relaxed mt-4">{faq.answer}</p></details>)}</div>
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
