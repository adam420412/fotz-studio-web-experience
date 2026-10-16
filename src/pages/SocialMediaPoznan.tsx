import { Link } from "react-router-dom";
import { ArrowRight, Camera, CalendarDays, ChartNoAxesCombined, MessageSquare, Target, Video } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { PortfolioVideo } from "@/components/PortfolioVideo";
import { useClusterArticles } from "@/hooks/useClusterArticles";
import stadiumPhoto from "@/assets/enea/stadion-race-fajerwerki-web.webp";

const services = [
  { icon: Target, title: "Strategie marketingowe i plan tematów", text: "Opis grup docelowych, rola kanałów, język marki i tematy oparte na pytaniach Twoich klientów. Strategia social media uwzględnia materiały i czas zespołu.", href: "/social-media/strategia" },
  { icon: CalendarDays, title: "Prowadzenie profili na Facebooku i Instagramie", text: "Tworzenie treści, grafiki, harmonogram publikacji oraz odpowiedzi na komentarze i wiadomości. Działania w mediach społecznościowych prowadzimy według przygotowanej strategii.", href: "/social-media/obsluga" },
  { icon: Camera, title: "Zdjęcia i treści", text: "Oferta, produkty, ludzie i kulisy pracy. Profesjonalne usługi fotograficzne łączymy z materiałami firmy, żeby profil budował pozytywny wizerunek.", href: "/social-media/content" },
  { icon: Video, title: "Rolki i filmy", text: "Pomysł, scenariusz, nagrania i montaż w formatach na Instagram, Facebook i LinkedIn. Przed produkcją ustalamy napisy, wersje i miejsca publikacji.", href: "/uslugi/produkcja-video" },
  { icon: MessageSquare, title: "Reklama i kampanie Meta Ads", text: "Facebook Ads i reklama na Instagramie. Zarządzanie kampaniami obejmuje cel, kreacje, grupy odbiorców i analizę wyników, a optymalizacja trwa przez cały czas emisji. Budżet płacony platformie wyceniamy oddzielnie.", href: "/performance-marketing/meta-ads" },
  { icon: ChartNoAxesCombined, title: "Pomiar i raportowanie", text: "Sprawdzamy zasięgi i zaangażowanie, wejścia oraz zapytania. Przy dostępie do danych sprzedaży oceniamy też jakość kontaktów od nowych klientów.", href: "/social-media/analityka" },
];
const faqs = [
  { question: "Czym zajmuje się agencja social media?", answer: "Planuje komunikację na kanałach społecznościowych, prowadzi profile Facebooka i Instagrama na bieżąco z najnowszymi trendami, tworzy treści i obsługuje reklamy. W FOTZ zakres może obejmować też zdjęcia i wideo nagrywane u Ciebie w firmie." },
  { question: "Ile kosztuje obsługa social media w Poznaniu?", answer: "Cena zależy od liczby kanałów i publikacji, formatu treści, nagrań, moderacji oraz reklam. Obsługa, produkcja i budżet reklamowy to osobne pozycje." },
  { question: "Czy reklamy są w cenie prowadzenia profilu?", answer: "W ofercie zaznaczamy, czy obejmuje ona prowadzenie kampanii. Budżet emisji płacony platformie wskazujemy oddzielnie. Jeśli kampania ma objąć wyszukiwarkę, możemy dołączyć Google Ads." },
  { question: "Czy mogę zamówić same rolki albo zdjęcia?", answer: "Tak. Ustalamy liczbę materiałów, formaty, montaż i poprawki. Jeśli prowadzeniem profili zajmuje się Twój zespół, przekazujemy gotowe pliki." },
  { question: "Po jakim czasie widać efekty?", answer: "Nie gwarantujemy wyników w określonym terminie. Zasięg i interakcja pokazują odbiór treści, a zapytania i rezerwacje zainteresowanie ofertą. Tempo zależy od oferty, budżetu i obsługi kontaktów." },
];
const steps = [
  { title: "Rozmowa i zakres", text: "Przeglądamy profile, ofertę i materiały. Ustalamy cel, kanały oraz zadania, które zostają po Twojej stronie." },
  { title: "Strategia i harmonogram", text: "Przygotowujemy tematy, formaty, materiały reklamowe i plan nagrań. Dzień produkcji uzgadniamy z wyprzedzeniem." },
  { title: "Akceptacja i publikacja", text: "Materiały trafiają do wskazanej osoby. Zatwierdzone treści publikujemy według planu." },
  { title: "Raport i kolejne decyzje", text: "Sprawdzamy, które treści najlepiej angażują odbiorców i jak wypadają wśród użytkowników na tle celu. Wnioski przekładamy na kolejne testy." },
];

export default function SocialMediaPoznan() {
  const { data: articles = [], isLoading, isError, refetch } = useClusterArticles("poznan");
  return (
    <Layout>
      <SEOHead title="Agencja social media Poznań — Facebook, Instagram, marketing" description="Agencja social media Poznań: prowadzimy profil firmy na Facebooku i Instagramie, łączymy marketing z produkcją rolek. Sprawdź zakres i wycenę." canonical="https://www.fotz-studio.pl/agencja-social-media/poznan" />
      <ServiceSchema name="Obsługa social media w Poznaniu" description="Planowanie komunikacji, prowadzenie profili, produkcja zdjęć i video oraz kampanie reklamowe w uzgodnionym zakresie." areaServed="Poznań" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl/" }, { name: "Agencja social media", url: "https://www.fotz-studio.pl/agencja-social-media" }, { name: "Poznań", url: "https://www.fotz-studio.pl/agencja-social-media/poznan" }]} />
      <FAQSchema items={faqs} />

      <section className="container-wide px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="dv-eyebrow mb-5">FOTZ Studio · Poznań</p>
            <h1 className="text-4xl md:text-6xl font-heading leading-[1.08] tracking-tight mb-6">Agencja social media Poznań<br /><span className="text-gradient">dla firm i marek.</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-7">FOTZ Studio to agencja social media w Poznaniu, która łączy marketing z własną produkcją. Prowadzimy firmowe profile na Facebooku, Instagramie i LinkedIn, nagrywamy rolki i obsługujemy kampanie reklamowe.</p>
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
        <p className="dv-eyebrow mb-3">Zakres współpracy</p><h2 id="zakres-heading" className="text-3xl md:text-4xl font-heading mb-5">Prowadzenie social media dla firm: Facebook, Instagram, LinkedIn</h2>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">Możesz powierzyć nam kompleksowe wsparcie, czyli prowadzenie firmowych profili w mediach społecznościowych, albo wybraną część działań marketingowych. Zakres dobieramy do tego, co firma ma już gotowe, i do jej branży.</p>
        <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">Prowadzimy social media dla firm usługowych, lokalnych biznesów, instytucji i marek, którym obecność w mediach społecznościowych ma pomóc dotrzeć do nowych klientów, a nie tylko zasięg na każdej platformie. Social media marketing ma wspierać sprzedaż, promocję Twojej marki i rozwój Twojej firmy, dlatego zaczynamy od tego, kto ma zobaczyć treści i co powinien potem zrobić.</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{services.map(service => <article key={service.href} className="border border-border bg-card rounded-2xl p-6 flex flex-col items-start"><service.icon aria-hidden="true" className="w-6 h-6 text-primary mb-5" /><h3 className="text-xl mb-3">{service.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{service.text}</p><Link to={service.href} className="underline underline-offset-4 text-sm mt-auto" aria-label={`Poznaj zakres: ${service.title}`}>Poznaj zakres</Link></article>)}</div>
      </section>

      <section id="realizacje-social-media" className="py-12 md:py-16 bg-muted/30 border-y border-border scroll-mt-28" aria-labelledby="realizacje-heading">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8"><div><p className="dv-eyebrow mb-3">Z naszej produkcji</p><h2 id="realizacje-heading" className="text-3xl md:text-4xl font-heading">Realizacje: media społecznościowe i film</h2></div><Link to="/realizacje" className="underline underline-offset-4">Całe portfolio</Link></div>
          <div className="grid md:grid-cols-2 gap-6">
            <PortfolioVideo src="/videos/fotz-reel-web.mp4" poster="/videos/enea-stadion-cover.webp" title="Enea Stadion — emocje z bliska" category="Film z wydarzenia" />
            <PortfolioVideo src="/videos/autospa.mp4" poster="/videos/autospa-frame.webp" title="AutoSpa" category="Prezentacja firmy" />
          </div>
          <p className="text-muted-foreground max-w-3xl mt-6 leading-relaxed">Pracowaliśmy m.in. z Enea Stadionem i FPS Cegielski, a dla Dawid EDU prowadziliśmy kampanię Meta Ads. Przed nagraniami sprawdzamy, czego oczekują odbiorcy, i działanie, do którego materiał ma zachęcać.</p>
        </div>
      </section>

      <section id="proces-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="proces-heading">
        <p className="dv-eyebrow mb-3">Od briefu do publikacji</p><h2 id="proces-heading" className="text-3xl md:text-4xl font-heading mb-8">Współpraca: agencja social media w Poznaniu i zdalnie</h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">{steps.map((step, index) => <li key={step.title} className="border-t border-border pt-5"><span aria-hidden="true" className="text-sm text-primary">0{index + 1}</span><h3 className="text-xl mt-3 mb-3">{step.title}</h3><p className="text-muted-foreground leading-relaxed">{step.text}</p></li>)}</ol>
        <p className="mt-8 text-muted-foreground max-w-3xl leading-relaxed">Zespół naszej agencji pracuje w Poznaniu, więc klientów w Poznaniu i okolicach odwiedzamy na nagraniach i spotkaniach po uzgodnieniu terminu. Firmy z innych miast obsługujemy zdalnie.</p>
      </section>

      <section id="wycena-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="wycena-heading">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div><p className="dv-eyebrow mb-3">Wycena social media</p><h2 id="wycena-heading" className="text-3xl md:text-4xl font-heading mb-5">Ile kosztuje prowadzenie profili w social media?</h2><p className="text-muted-foreground leading-relaxed mb-6">Nie podajemy stałej ceny, bo koszt zależy od kanałów, liczby materiałów, nagrań, moderacji i reklam. W ofercie oddzielamy obsługę profili, produkcję i budżet emisji, więc wiesz, za co płacisz.</p><Link to="/agencja-social-media/cennik" className="underline underline-offset-4">Sprawdź modele i składniki wyceny</Link></div>
          <aside className="rounded-2xl border border-border bg-card p-6 md:p-8"><h3 className="text-2xl mb-5">Co przesłać do wyceny?</h3><ul className="list-disc pl-5 space-y-3 text-muted-foreground"><li>Linki do strony i obecnych profili.</li><li>Cel: np. zapytania o ofertę, rezerwacje lub komunikacja wydarzenia.</li><li>Dostępne zdjęcia, filmy i osoby, które mogą wystąpić w nagraniach.</li><li>Planowany termin, kanały i budżet na obsługę oraz reklamę.</li></ul><Link to="/kontakt" className="dv-btn dv-btn-primary mt-7">Opisz swoje potrzeby <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></aside>
        </div>
      </section>

      <section id="pytania-social-media" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28" aria-labelledby="faq-heading">
        <div className="max-w-3xl"><h2 id="faq-heading" className="text-3xl md:text-4xl font-heading mb-7">Pytania klientów: usługi agencji social media</h2>{faqs.map(faq => <details key={faq.question} className="border-b border-border py-5"><summary className="font-medium cursor-pointer pr-3">{faq.question}</summary><p className="text-muted-foreground leading-relaxed mt-4">{faq.answer}</p></details>)}</div>
      </section>

      <section className="container-wide px-6 md:px-12 py-12 md:pb-20" aria-labelledby="poradniki-heading">
        <h2 id="poradniki-heading" className="text-2xl md:text-3xl font-heading mb-6">Poradniki: marketing w social media</h2>
        <div className="flex flex-col sm:flex-row gap-5 mb-7"><Link to="/blog/agencja-social-media-poznan" className="underline underline-offset-4">Jak porównać agencje social media</Link><Link to="/generator-briefu" className="underline underline-offset-4">Przygotuj brief projektu</Link></div>
        {isLoading && <p role="status" className="text-muted-foreground">Ładuję dodatkowe poradniki…</p>}
        {isError && <div role="alert"><p className="text-muted-foreground mb-3">Nie udało się wczytać dodatkowych poradników.</p><button type="button" onClick={() => void refetch()} className="underline underline-offset-4">Spróbuj ponownie</button></div>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{articles.map(article => <Link key={article.id} to={`/blog/${article.slug}`} className="border border-border rounded-xl p-5"><h3 className="font-medium">{article.title}</h3>{article.excerpt && <p className="text-sm text-muted-foreground line-clamp-3 mt-3">{article.excerpt}</p>}</Link>)}</div>
      </section>
    </Layout>
  );
}
