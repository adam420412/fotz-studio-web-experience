import { Link } from "react-router-dom";
import { Mic, Video, Scissors, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ServiceSchema, OrganizationSchema, FAQSchema } from "@/components/seo/StructuredData";
import { workImages } from "@/data/selected-work.mjs";
import imageVariants from "@/data/selected-work-images.json";
import officeSign from "@/assets/office/office-sign.webp";
import officeWorkspace from "@/assets/office/office-workspace.webp";

const backstage = imageVariants.backstage;

const scope = [
  {
    icon: MessageSquare,
    title: "Przygotowanie rozmowy",
    description:
      "Pomagamy ułożyć format, listę tematów i pytania. Gość dostaje wcześniej plan odcinka, żeby wiedział, czego się spodziewać.",
  },
  {
    icon: Mic,
    title: "Nagranie dźwięku",
    description:
      "Każdy uczestnik ma osobny mikrofon, a dźwięk kontrolujemy na bieżąco. Dbamy o to, by jakość dźwięku nie zależała od przypadku.",
  },
  {
    icon: Video,
    title: "Obraz i kamery",
    description:
      "Ustawiamy kadry i światło tak, by rozmowa dobrze wyglądała na YouTube i w krótkich fragmentach. Kamera może być jedna albo kilka — dobieramy to do formatu.",
  },
  {
    icon: Scissors,
    title: "Postprodukcja",
    description:
      "Montaż, czyszczenie i wyrównanie dźwięku, napisy, plansze oraz wersje do publikacji. Na końcu dostajesz finalny plik gotowy do wrzucenia.",
  },
];

const formats = [
  "podcast audio do Spotify i Apple Podcasts",
  "wersja na YouTube (format audio-wideo z jednej sesji)",
  "rolki i krótkie fragmenty do social media, wycięte z całego odcinka",
  "webinar lub wywiad ekspercki do strony i newslettera",
  "film instruktażowy albo prezentacja produktu",
  "nagranie na event firmowy lub konferencję",
];

const steps = [
  {
    title: "Rozmowa i brief",
    text: "Ustalamy cel podcastu, odbiorców, liczbę odcinków i to, gdzie będą publikowane. Na tej podstawie proponujemy format i zakres.",
  },
  {
    title: "Wycena i rezerwacja terminu",
    text: "Dostajesz wycenę z opisanym zakresem. Po akceptacji potwierdzamy rezerwację dnia nagraniowego i miejsce nagrania.",
  },
  {
    title: "Przygotowanie odcinka",
    text: "Przygotowujemy plan rozmowy, pytania i ewentualną scenografię. Uzgadniamy układ studia lub pomieszczenia, ubiór i kwestie wizerunkowe.",
  },
  {
    title: "Dzień nagrania",
    text: "Na miejscu jest realizator, który pilnuje dźwięku i obrazu. Ty skupiasz się na rozmowie — resztą zajmujemy się my.",
  },
  {
    title: "Edycja i oddanie plików",
    text: "Składamy odcinek, przygotowujemy wersje do publikacji oraz krótkie fragmenty. Poprawki omawiamy przed oddaniem gotowego materiału.",
  },
];

const pricingFactors = [
  "liczba odcinków i ich długość — jednorazowe nagranie czy seria",
  "format: samo audio czy obraz z kilku kamer",
  "miejsce nagrania i ewentualny dojazd",
  "zakres montażu, napisów i grafik do odcinka",
  "liczba krótkich fragmentów do publikacji",
  "dodatkowe elementy: scenografia, makijażystka, transmisja na żywo",
];

const faqs = [
  {
    question: "Gdzie w Poznaniu nagrywacie podcasty?",
    answer:
      "Zespół FOTZ Studio pracuje w Poznaniu. Miejsce nagrania dobieramy do projektu: może to być Twoja siedziba, sala konferencyjna albo wynajęte studio nagraniowe. Szczegóły ustalamy przy wycenie, zanim potwierdzimy termin.",
  },
  {
    question: "Ile kosztuje nagranie podcastu?",
    answer:
      "Nie publikujemy stałego cennika, bo koszt zależy od liczby odcinków, formatu, montażu i miejsca nagrania. Po krótkiej rozmowie przygotowujemy wycenę z opisanym zakresem prac.",
  },
  {
    question: "Czy można wynająć samo studio na godziny?",
    answer:
      "Nasza oferta to przede wszystkim realizacja podcastu z ekipą: przygotowanie, nagranie i montaż. Jeśli interesuje Cię sam wynajem przestrzeni, z obsługą lub bez wsparcia technicznego ekipy, napisz — powiemy, czy w danym terminie da się to zorganizować.",
  },
  {
    question: "Jaki sprzęt wykorzystujecie?",
    answer:
      "Sprzęt dobieramy do formatu: osobne mikrofony dla każdego rozmówcy, kamery i oświetlenie przy nagraniu obrazu. Konkretną konfigurację opisujemy w wycenie, bo zależy od liczby osób i miejsca nagrania.",
  },
  {
    question: "Gdzie publikować podcasty?",
    answer:
      "Plik dźwiękowy najczęściej publikuje się na Spotify i Apple Podcasts przez serwis hostingowy, a nagranie z obrazem na YouTube. Krótkie fragmenty trafiają na Instagram, TikTok czy LinkedIn. Przygotujemy pliki w formatach, których potrzebujesz.",
  },
  {
    question: "Jak przygotować się do pierwszego nagrania?",
    answer:
      "Wystarczy, że znasz temat. Przed nagraniem wysyłamy plan rozmowy i pytania, podpowiadamy, w co się ubrać, i robimy krótką próbę na miejscu. Nie trzeba mieć doświadczenia przed mikrofonem.",
  },
  {
    question: "Czy obsługujecie firmy spoza Poznania?",
    answer:
      "Tak. Spotkania i ustalenia prowadzimy online, a pliki przesyłamy cyfrowo. Wyjazd na nagranie poza Poznań jest możliwy, ale ustalamy go osobno przy wycenie.",
  },
];

export default function StudioPodcastowe() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <SEOHead
        title="Studio podcastowe Poznań – podcast i studio nagraniowe"
        description="Studio podcastowe Poznań: podcast audio i wideo, montaż oraz kompleksowy, profesjonalny proces nagraniowy dla firm. Wycena po krótkiej rozmowie."
        canonical="https://www.fotz-studio.pl/uslugi/studio-podcastowe"
        keywords="studio podcastowe poznań, nagranie podcastu, podcast wideo, montaż podcastu, studio nagraniowe poznań"
      />
      <ServiceSchema
        name="Studio podcastowe — nagranie i montaż podcastów"
        description="Przygotowanie, nagranie audio i wideo oraz montaż podcastów dla firm z Poznania i całej Polski."
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Studio Podcastowe", url: "https://www.fotz-studio.pl/uslugi/studio-podcastowe" },
        ]}
      />
      <OrganizationSchema />
      <FAQSchema items={faqs} />

      <Layout>
        {/* Hero */}
        <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 section-padding bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="container-wide relative z-10 px-4 sm:px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <span className="inline-block text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4">
                  Podcasty dla firm
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
                  Studio podcastowe Poznań{" "}
                  <span className="text-gradient">— podcast i realizacja nagrań wideo</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                  Chcesz nagrać swój podcast, ale nie masz ekipy ani czasu na technikę? Przygotujemy
                  rozmowę, nagramy ją z dźwiękiem i obrazem, a potem przygotujemy odcinek i krótkie fragmenty
                  do publikacji. Ty mówisz — my dbamy o dźwięk, obraz i gotowy materiał.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Link to="/kontakt" className="dv-btn dv-btn-primary group whitespace-nowrap">
                    Zapytaj o nagranie
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </Link>
                  <a href="#wycena" className="dv-btn dv-btn-secondary whitespace-nowrap">Od czego zależy wycena</a>
                </div>
              </div>
              <figure className="relative">
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                  <img loading="eager" fetchPriority="high" decoding="async"
                    src={backstage[1].src}
                    srcSet={backstage.map(image => `${image.src} ${image.width}w`).join(', ')}
                    sizes="(min-width: 1280px) 580px, (min-width: 1024px) 45vw, 90vw"
                    width={backstage[1].width}
                    height={backstage[1].height}
                    alt={workImages.backstage.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted-foreground">Za kulisami FOTZ Studio — praca nad kadrem i oświetleniem podczas sesji.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section ref={ref} className="section-padding bg-card px-4 sm:px-6 md:px-12">
          <div className="container-wide">
            <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
              <span
                className={cn(
                  "inline-block text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4 transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                Zakres usługi
              </span>
              <h2
                className={cn(
                  "text-2xl sm:text-3xl md:text-5xl font-heading font-bold transition-all duration-700 delay-100",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                Kompleksowy podcast: od pomysłu po <span className="text-gradient">gotowy odcinek</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                To kompleksowe usługi dla firm, które chcą regularnie publikować rozmowy z ekspertami,
                klientami lub własnym zespołem. Możesz zamówić całość albo tylko wybrane etapy —
                na przykład samo nagranie, jeśli edycję robisz u siebie. Cały proces nagraniowy prowadzi jedna ekipa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {scope.map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    "p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-secondary border border-border transition-all duration-700 hover-lift",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: isVisible ? `${(index + 2) * 100}ms` : "0ms" }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold mb-1.5 sm:mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who & formats */}
        <section className="section-padding bg-background px-4 sm:px-6 md:px-12">
          <div className="container-wide grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
                Dla kogo nagrywamy podcast w Poznaniu
              </h2>
              <p className="text-muted-foreground mb-4">
                Podcast firmowy sprawdza się tam, gdzie klient chce poznać ludzi i wiedzę stojącą za
                marką: w usługach eksperckich, firmach technologicznych, edukacji, branży medycznej
                czy produkcyjnej. Rozmowa trwająca kilkadziesiąt minut pokazuje kompetencje lepiej
                niż kolejny post, a z jednego nagrania powstaje dużo contentu na kolejne tygodnie.
              </p>
              <p className="text-muted-foreground">
                Pracujemy z firmami, które startują z pierwszym odcinkiem, i z takimi, które mają już
                swój cykl, ale potrzebują lepszego obrazu albo sprawniejszej edycji. Podcast może
                też wspierać marketing rekrutacyjny lub sprzedażowy — wtedy planujemy odcinki pod
                konkretne pytania klientów albo kandydatów.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
                Co możemy nagrywać: podcast, rolki, webinar
              </h2>
              <ul className="space-y-3">
                {formats.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-4 text-sm">
                Transmisja na żywo jest możliwa po wcześniejszym sprawdzeniu łącza i miejsca —
                omawiamy ją przy wycenie.
              </p>
            </div>
          </div>
        </section>

        {/* Place */}
        <section className="section-padding bg-card px-4 sm:px-6 md:px-12">
          <div className="container-wide">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Profesjonalne studio, biuro czy nagranie w terenie?
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <p className="text-muted-foreground">
                Nie każdy podcast wymaga wynajmu studia. Często dobra przestrzeń do nagrywania
                to sala w Twojej firmie — rozmówca czuje się swobodniej, a w tle widać markę.
                Przy nagraniach w siedzibie klienta przyjeżdżamy z naszym sprzętem — to zestaw mobilny: mikrofony, kamery i światło. Innym razem
                lepiej sprawdzi się wynajęte studio filmowe lub studio fotograficzne z wygłuszeniem i stałą scenografią, na
                przykład gdy seria ma mieć spójny, rozpoznawalny wizualny styl.
              </p>
              <p className="text-muted-foreground">
                Nie musisz sam szukać studia nagrań. Robimy nagrania wideo w Poznaniu — w centrum Poznania, na obrzeżach albo pod miastem — i doradzamy,
                które miejsce da najlepszy efekt przy Twoim budżecie. Profesjonalny sprzęt i
                obsługę zapewnia nasza ekipa, a miejsce oraz termin rezerwacji potwierdzamy
                razem z wyceną. Podcast łączymy też z innymi usługami: nagraniem spotów reklamowych
                czy sesją zdjęciową, jeśli potrzebujesz materiałów do kampanii.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { src: officeWorkspace, alt: "Przestrzeń robocza w biurze FOTZ Studio", caption: "Biuro FOTZ Studio w Poznaniu — tu planujemy projekty i omawiamy formaty" },
                { src: officeSign, alt: "Tabliczka FOTZ Studio przy biurze", caption: "FOTZ Studio w Poznaniu" },
              ].map(image => (
                <figure key={image.src}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img loading="lazy" decoding="async" src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted-foreground">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-background px-4 sm:px-6 md:px-12">
          <div className="container-wide">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-8">
              Jak wygląda realizacja podcastu krok po kroku
            </h2>
            <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <li key={step.title} className="p-5 rounded-xl bg-secondary border border-border">
                  <span className="text-primary font-heading font-bold text-lg">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-heading font-bold mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding bg-card px-4 sm:px-6 md:px-12">
          <div className="container-wide max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Realizacja nagrań wideo — zespół produkcyjny, Poznań i okolice
            </h2>
            <p className="text-muted-foreground mb-4">
              FOTZ to kreatywny zespół, który na co dzień realizuje filmy reklamowe, materiały
              eventowe i treści na profile marek. W naszym studio pracują osoby, które znają
              kamerę, światło i montaż — to samo doświadczenie wykorzystujemy przy podcastach.
              Zobacz przykłady naszej pracy: spot dla{" "}
              <Link to="/realizacje/wsb-merito" className="text-primary hover:underline">WSB Merito</Link>{" "}
              oraz materiały dla{" "}
              <Link to="/realizacje/enea-stadion" className="text-primary hover:underline">Enea Stadionu</Link>.
            </p>
            <p className="text-muted-foreground">
              Szukasz szerszej produkcji? Sprawdź też{" "}
              <Link to="/uslugi/produkcja-video" className="text-primary hover:underline">produkcję video</Link>{" "}
              oraz{" "}
              <Link to="/uslugi/video-marketing" className="text-primary hover:underline">kampanie z filmami</Link>.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="wycena" className="section-padding bg-background px-4 sm:px-6 md:px-12">
          <div className="container-wide max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Od czego zależy cena nagrania podcastu
            </h2>
            <p className="text-muted-foreground mb-6">
              Nie podajemy cen w ciemno, bo dwa podcasty o tej samej długości mogą wymagać zupełnie
              innej pracy. Wycenę przygotowujemy po rozmowie, a w niej opisujemy zakres, termin
              i to, co dostaniesz na końcu. Najważniejsze czynniki:
            </p>
            <ul className="space-y-3 mb-8">
              {pricingFactors.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt" className="group">
                Poproś o wycenę
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-card px-4 sm:px-6 md:px-12">
          <div className="container-wide max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-8">
              Najczęstsze pytania o nagranie podcastu
            </h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <details key={faq.question} className="group p-5 rounded-xl bg-secondary border border-border">
                  <summary className="cursor-pointer font-heading font-bold list-none flex justify-between gap-4">
                    {faq.question}
                    <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + guides */}
        <section className="section-padding bg-background px-4 sm:px-6 md:px-12">
          <div className="container-wide text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
              Porozmawiajmy o <span className="text-gradient">Twoim podcaście</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Opisz krótko temat i planowaną liczbę odcinków. Odpowiemy z propozycją formatu
              i terminem rozmowy — w Poznaniu albo online.
            </p>
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/kontakt" className="group">
                Skontaktuj się
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <div className="mt-10 pt-6 border-t border-border/40 flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/blog/podcast-dla-firmy" className="text-primary hover:underline font-medium text-sm">→ Podcast dla firmy — poradnik</Link>
              <Link to="/blog/podcast-marketing-co-to" className="text-primary hover:underline font-medium text-sm">→ Podcast w komunikacji firmy</Link>
              <Link to="/content-marketing/video-content" className="text-primary hover:underline font-medium text-sm">→ Treści wideo dla marki</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Treści dla firm</Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
