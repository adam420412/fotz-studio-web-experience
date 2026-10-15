import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ImageLightbox } from "@/components/ImageLightbox";
import { enquiryHref } from "@/lib/enquiry.mjs";
import gierkiImg from "@/assets/portfolio/gierki-web.webp";

import gierkyGolf from "@/assets/gierky/gierky-golf.jpg";
import gierkyShuffleboard from "@/assets/gierky/gierky-shuffleboard.jpg";
import gierkyLounge from "@/assets/gierky/gierky-lounge.jpg";
import gierkyPinball from "@/assets/gierky/gierky-pinball.jpg";
import gierkyBar from "@/assets/gierky/gierky-bar.jpg";
import gierkyBowling from "@/assets/gierky/gierky-bowling.jpg";
import gierkyReception from "@/assets/gierky/gierky-reception.jpg";
import gierkyDarts from "@/assets/gierky/gierky-darts.jpg";
import gierkyTables from "@/assets/gierky/gierky-tables.jpg";
import gierkyHall from "@/assets/gierky/gierky-hall.jpg";

const galleryImages = [
  { src: gierkyHall, alt: "Gierky Activity Bar — główna sala z neonami" },
  { src: gierkyGolf, alt: "Gierky — tor crazy golfa" },
  { src: gierkyShuffleboard, alt: "Gierky — stoły do shuffleboarda" },
  { src: gierkyDarts, alt: "Gierky — strefa darta elektronicznego" },
  { src: gierkyLounge, alt: "Gierky — loże dla grup" },
  { src: gierkyBar, alt: "Gierky — bar z podświetlonymi półkami" },
  { src: gierkyPinball, alt: "Gierky — automaty pinball" },
  { src: gierkyBowling, alt: "Gierky — strefa gier zręcznościowych" },
  { src: gierkyTables, alt: "Gierky — stoły do gier towarzyskich" },
  { src: gierkyReception, alt: "Gierky — recepcja lokalu" },
];

const scope = [
  {
    number: "01",
    title: "Strona oparta na atrakcjach",
    text: "Każda gra ma własną podstronę: crazy golf, darts, shuffleboard, beer pong i loże. Gość szybko sprawdza, co może robić w lokalu, a potem przechodzi do rezerwacji.",
  },
  {
    number: "02",
    title: "Rezerwacja bez szukania",
    text: "Podstrona rezerwacji zbiera atrakcje w jednym miejscu. Telefon i e‑mail do rezerwacji, godziny otwarcia i adres przy ul. Gwarnej są widoczne w każdej części serwisu.",
  },
  {
    number: "03",
    title: "Zdjęcia wnętrz i bieżąca opieka",
    text: "Sfotografowaliśmy salę, bar i strefy gier. Dbamy też o aktualność strony: menu PL i EN, regulaminy, politykę prywatności i dokumenty dla gości.",
  },
];

const CaseStudyGierki = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <Layout>
      <SEOHead
        title="Gierky Activity Bar — strona, rezerwacje i zdjęcia wnętrz | FOTZ Studio"
        description="Realizacja FOTZ dla Gierky Activity Bar w Poznaniu: strona WordPress z podstronami atrakcji i rezerwacją, sesja zdjęciowa wnętrz oraz bieżąca opieka nad treściami."
        canonical="https://www.fotz-studio.pl/realizacje/gierki"
        ogType="article"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl" },
        { name: "Realizacje", url: "https://www.fotz-studio.pl/realizacje" },
        { name: "Gierky Activity Bar", url: "https://www.fotz-studio.pl/realizacje/gierki" },
      ]} />

      <section className="pt-32 md:pt-40 pb-14 section-padding bg-background">
        <div className="container-wide">
          <Link to="/realizacje" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground mb-10">
            <ArrowLeft className="w-4 h-4" /> Wszystkie realizacje
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-5">Gierky Activity Bar · Strona WWW · Fotografia</p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold leading-[1.08] mb-6">
                Najpierw zobacz grę.<br /><span className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent">Potem zarezerwuj.</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl mb-7">
                Gierky to activity bar w centrum Poznania: crazy golf, darts, shuffleboard,
                beer pong i loże dla grup. Przygotowaliśmy stronę, która pokazuje atrakcje
                i prowadzi do rezerwacji, oraz zdjęcia wnętrz do strony i social mediów.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                {["Strona WordPress", "Podstrony atrakcji", "Rezerwacja", "Fotografia wnętrz", "Opieka nad stroną"].map(label => (
                  <span key={label} className="rounded-full px-4 py-2 bg-muted border border-border/30">{label}</span>
                ))}
              </div>
            </div>
            <figure className="w-full">
              <img src={gierkiImg} alt="Strona internetowa Gierky Activity Bar zaprojektowana przez FOTZ Studio" width="1200" height="809" loading="eager" className="w-full rounded-2xl border border-border/30" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30 border-y border-border/30">
        <div className="container-wide">
          <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-4">Zakres współpracy</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold max-w-2xl mb-10">Strona, która odpowiada<br className="hidden md:block" /> na pytanie „co tam robimy?”</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {scope.map(step => (
              <article key={step.number} className="border-t border-border/50 pt-6">
                <p className="text-foreground/40 text-sm mb-6">{step.number}</p>
                <h3 className="font-heading font-semibold text-xl mb-4">{step.title}</h3>
                <p className="text-foreground/65 leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <figure className="w-full">
            <img src={gierkyGolf} alt="Tor crazy golfa w Gierky Activity Bar" width="1200" height="800" loading="lazy" className="w-full rounded-2xl border border-border/30 aspect-[4/3] object-cover" />
          </figure>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-4">Pomysł na komunikację</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Gość decyduje,<br />zanim przyjdzie.</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-7">
              Do activity baru przychodzą znajomi, grupy firmowe i wieczory kawalerskie.
              Każda z tych osób chce szybko sprawdzić atrakcje, godziny i sposób rezerwacji.
              Dlatego strona stawia na zdjęcia prawdziwego wnętrza i krótkie opisy gier.
            </p>
            <ul className="space-y-4 text-foreground/75">
              {[
                "Własne zdjęcia lokalu zamiast grafik z banku zdjęć.",
                "Kontakt do rezerwacji w nagłówku, stopce i na podstronach.",
                "Menu i dokumenty po polsku i angielsku dla gości z zagranicy.",
              ].map(item => <li key={item} className="flex gap-3"><Check className="w-5 h-5 shrink-0 mt-0.5" />{item}</li>)}
            </ul>
            <a href="https://gierky.pl/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 underline underline-offset-4">
              Zobacz stronę gierky.pl<span className="sr-only"> — nowa karta</span> <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30 border-y border-border/30">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold mb-3">Fotografia wnętrz</h2>
          <p className="text-foreground/65 mb-8 max-w-2xl">Sesja obejmowała salę, strefy gier, loże, bar i recepcję. Zdjęcia służą na stronie i w social mediach lokalu.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <button
                type="button"
                key={image.src}
                aria-label={`Powiększ: ${image.alt}`}
                onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}
                className="relative aspect-square rounded-xl overflow-hidden group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <img src={image.src} alt={image.alt} loading="lazy" width="400" height="400" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-4">Gastronomia · Rozrywka · Obiekty</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">Pokażmy, co czeka<br />na gości w Twoim lokalu.</h2>
          <p className="text-lg text-foreground/65 mb-8">
            Przygotujemy stronę, zdjęcia i drogę do rezerwacji dopasowaną do Twojej oferty
            oraz sposobu przyjmowania gości.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-brand text-white">
              <Link to={enquiryHref("web", "website")}>Porozmawiajmy o stronie <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/dla-kogo/gastronomia">Marketing dla gastronomii</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyGierki;
