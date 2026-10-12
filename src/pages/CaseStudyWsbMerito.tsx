import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { enquiryHref } from "@/lib/enquiry.mjs";

const facts = [
  { value: "74 s", label: "spot rekrutacyjny w 4K" },
  { value: "2", label: "lokalizacje zdjęć: kampus i stadion" },
  { value: "3", label: "warianty koncepcji do wyboru" },
];

const steps = [
  {
    number: "01",
    title: "Koncepcja i scenariusz",
    text: "Przygotowaliśmy trzy warianty spotu pod hasłem „Teoria nie wystarczy. Wejdź na arenę.” Po uwagach klienta dopasowaliśmy scenariusz do odbiorców studiów podyplomowych: osób 25+, które mają już doświadczenie zawodowe.",
  },
  {
    number: "02",
    title: "Dzień zdjęciowy",
    text: "Nagraliśmy wypowiedzi przedstawicielek uczelni i stadionu, kampus WSB Merito oraz płytę i zaplecze Enea Stadionu. Uzupełniliśmy je ujęciami z meczów, koncertów i z drona z archiwum produkcji FOTZ dla stadionu.",
  },
  {
    number: "03",
    title: "Montaż i publikacja",
    text: "Zmontowaliśmy materiał w 4K z napisami pod social media. Spot opublikowano w czerwcu 2026 r. jako wspólny post Enea Stadionu i Uniwersytetu WSB Merito.",
  },
];

const gallery = [
  { src: "/case-studies/wsb-merito/kampus.webp", alt: "Neonowe logo Uniwersytetu WSB Merito na ceglanej ścianie kampusu w Poznaniu" },
  { src: "/case-studies/wsb-merito/studenci.webp", alt: "Studentki rozmawiające przy stoliku na kampusie WSB Merito" },
  { src: "/case-studies/wsb-merito/wydarzenie.webp", alt: "Tłum widzów wchodzących na Enea Stadion przed wydarzeniem" },
  { src: "/case-studies/wsb-merito/stadion-z-drona.webp", alt: "Enea Stadion z drona o zachodzie słońca" },
];

export default function CaseStudyWsbMerito() {
  return (
    <Layout>
      <SEOHead
        title="WSB Merito × Enea Stadion — spot rekrutacyjny | FOTZ Studio"
        description="Spot rekrutacyjny dla studiów podyplomowych Event Manager Uniwersytetu WSB Merito w Poznaniu i Enea Stadionu: koncepcja, scenariusz, zdjęcia na kampusie i stadionie, montaż 4K."
        canonical="https://www.fotz-studio.pl/realizacje/wsb-merito"
        ogImage="https://www.fotz-studio.pl/case-studies/wsb-merito/spot-stadion-1280.webp"
        ogType="article"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl" },
        { name: "Realizacje", url: "https://www.fotz-studio.pl/realizacje" },
        { name: "WSB Merito × Enea Stadion", url: "https://www.fotz-studio.pl/realizacje/wsb-merito" },
      ]} />

      <section className="pt-32 md:pt-40 pb-14 section-padding bg-background">
        <div className="container-wide">
          <Link to="/realizacje" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground mb-10">
            <ArrowLeft className="w-4 h-4" /> Wszystkie realizacje
          </Link>
          <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-5">Uniwersytet WSB Merito Poznań × Enea Stadion · Spot rekrutacyjny</p>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-end mb-10">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold leading-[1.08]">
              Teoria nie wystarczy.<br /><span className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent">Wejdź na arenę.</span>
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Spot promujący studia podyplomowe Event Manager, które Uniwersytet WSB Merito
              prowadzi razem z Enea Stadionem. Pokazaliśmy, że zajęcia odbywają się tam,
              gdzie naprawdę powstają duże wydarzenia.
            </p>
          </div>
          <figure>
            <video
              src="/videos/wsb-merito-enea.mp4"
              poster="/case-studies/wsb-merito/spot-stadion-1280.webp"
              controls
              playsInline
              preload="none"
              width={1280}
              height={720}
              aria-label="Spot WSB Merito × Enea Stadion — studia podyplomowe Event Manager"
              className="w-full aspect-video rounded-2xl border border-border/30 bg-black object-cover"
            />
            <figcaption className="text-xs text-foreground/50 mt-3">Produkcja FOTZ Studio · zdjęcia 21.05.2026, publikacja czerwiec 2026.</figcaption>
          </figure>
          <div className="flex flex-wrap gap-2 text-sm mt-8">
            {["Koncepcja kreatywna", "Scenariusz", "Zdjęcia 4K", "Dron", "Montaż"].map(label => (
              <span key={label} className="rounded-full px-4 py-2 bg-muted border border-border/30">{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30 border-y border-border/30">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-9">Projekt w liczbach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {facts.map(fact => (
              <div key={fact.label} className="rounded-2xl border border-border/40 bg-background p-7 md:p-8">
                <p className="font-heading font-bold text-4xl lg:text-5xl mb-3">{fact.value}</p>
                <p className="text-foreground/65">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-4">Zakres współpracy</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold max-w-2xl mb-10">Od trzech pomysłów<br className="hidden md:block" /> do gotowego spotu.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(step => (
              <article key={step.number} className="border-t border-border/50 pt-6">
                <p className="text-foreground/40 text-sm mb-6">{step.number}</p>
                <h3 className="font-heading font-semibold text-xl mb-4">{step.title}</h3>
                <p className="text-foreground/65 leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 bg-background">
        <div className="container-wide grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <figure className="w-full">
            <img src="/case-studies/wsb-merito/rekrutacja.webp" width="1200" height="675" loading="lazy"
              alt="Tablica Działu Rekrutacji z kodem QR na kampusie WSB Merito w Poznaniu"
              className="w-full rounded-2xl border border-border/30" />
          </figure>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-4">Pomysł na komunikację</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Praktyka, którą widać<br />w każdym kadrze.</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-7">
              Wiele kierunków obiecuje praktykę. Ten program ma ją na miejscu: stadion
              na ponad 40 tysięcy osób, mecze i koncerty. Dlatego obraz prowadzi widza
              z sali na kampusie prosto na murawę i trybuny.
            </p>
            <ul className="space-y-4 text-foreground/75">
              {[
                "Komunikat do dorosłych, którzy chcą rozwinąć karierę w eventach.",
                "Wypowiedzi uczelni i stadionu: dwóch partnerów, jeden program.",
                "Prawdziwe wydarzenia zamiast ilustracji z banku zdjęć.",
              ].map(item => <li key={item} className="flex gap-3"><Check className="w-5 h-5 shrink-0 mt-0.5" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30 border-y border-border/30">
        <div className="container-wide max-w-4xl">
          <blockquote>
            <p className="text-2xl md:text-3xl font-heading leading-snug">„Moim zdaniem wyszło bardzo dobrze i przekonująco.”</p>
            <footer className="mt-5 text-foreground/60">Uniwersytet WSB Merito Poznań — opinia po obejrzeniu pierwszej wersji spotu</footer>
          </blockquote>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold mb-8">Kadry z produkcji</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {gallery.map(photo => (
              <figure key={photo.src}>
                <img src={photo.src} alt={photo.alt} width="1200" height="675" loading="lazy" className="aspect-video w-full rounded-xl object-cover" />
                <figcaption className="text-sm text-foreground/55 mt-3">{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30 border-t border-border/30">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-4">Uczelnie · Szkoły · Kursy</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">Pokażmy, czego<br />naprawdę się u Was uczy.</h2>
          <p className="text-lg text-foreground/65 mb-8">
            Przygotujemy koncepcję, scenariusz i nagrania dopasowane do kierunku,
            odbiorców i miejsca publikacji.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-brand text-white">
              <Link to={enquiryHref("video", "spot")}>Porozmawiajmy o spocie <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/uslugi/produkcja-video">Produkcja video</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
