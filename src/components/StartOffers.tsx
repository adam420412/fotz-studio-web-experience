import { ArrowUpRight } from "lucide-react";

// Approved 2026-10-02. These are limited START packages, not rates for bespoke work.
const offers = [
  {
    title: "WWW START", href: "/kampanie/strony.html",
    scope: "One Page do 5 sekcji na szablonie FOTZ, wersja mobilna i formularz. Teksty, zdjęcia oraz logo dostarcza klient. Jedna zbiorcza runda poprawek.",
    exclusions: "Domena i hosting osobno. Pakiet nie obejmuje pisania treści, sesji foto, sklepu, konfiguratora, rezerwacji ani dużej migracji.",
  },
  {
    title: "WIDEO START", href: "/kampanie/wideo.html",
    scope: "3 pionowe rolki po 15–30 sekund. Do 90 minut nagrań w jednej lokalizacji w Poznaniu. Ustalenie tematów, montaż, proste napisy, muzyka i jedna runda drobnych poprawek.",
    exclusions: "Bez abonamentu. Osobna sesja zdjęciowa, dron, aktor, studio, lektor, prowadzenie profilu, publikacja i reklamy poza pakietem. Dojazd poza Poznań do wyceny.",
  },
];

export function StartOffers({ websiteOnly = false }: { websiteOnly?: boolean }) {
  return (
    <section className="container mx-auto px-6 py-10 max-w-6xl">
      <p className="dv-eyebrow mb-3">Konkretny zakres na początek</p>
      <h2 className="text-3xl font-heading mb-7">Pakiety START</h2>
      <div className={`grid gap-6 ${websiteOnly ? "max-w-3xl" : "md:grid-cols-2"}`}>
        {offers.slice(0, websiteOnly ? 1 : 2).map(offer => (
          <article key={offer.title} className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col">
            <h3 className="text-xl font-heading mb-3">{offer.title}</h3>
            <p className="text-3xl mb-5">1490 zł <span className="text-base text-muted-foreground">netto / zlecenie</span></p>
            <p className="mb-5 leading-relaxed">{offer.scope}</p>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{offer.exclusions}</p>
            <a className="dv-btn dv-btn-primary mt-auto" href={offer.href}>Sprawdź pełny zakres <ArrowUpRight className="w-4 h-4" aria-hidden /></a>
          </article>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-5">Termin potwierdzamy po otrzymaniu materiałów i uzgodnieniu dostępności. Szerszy zakres wyceniamy przed zleceniem.</p>
    </section>
  );
}
