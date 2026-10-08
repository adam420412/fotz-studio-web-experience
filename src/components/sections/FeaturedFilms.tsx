import { useState } from "react";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, ArrowUpRight, Instagram, Play, X } from "lucide-react";

type Film = {
  title: string;
  category: string;
  poster: string;
  src?: string;
  publication?: string;
  portrait?: boolean;
};

const cupra: Film = {
  title: "CUPRA × Enea Stadion",
  category: "Spot reklamowy · motoryzacja",
  poster: "/videos/cupra-enea-poster.webp",
  src: "/videos/cupra-enea.mp4",
  publication: "https://www.instagram.com/eneastadion/reel/DYhrJFioyac/",
};

const reels: Film[] = [
  {
    title: "Dzień meczowy",
    category: "Enea Stadion · Lech–Legia",
    poster: "/videos/enea-legia-poster.webp",
    src: "/videos/enea-legia-reel.mp4",
    portrait: true,
  },
  {
    title: "Julia Wieniawa",
    category: "B17 · koncert",
    poster: "/videos/b17-wieniawa-poster.webp",
    publication: "https://www.instagram.com/klubmuzycznyb17/reel/DXeQo67lRtx/",
    portrait: true,
  },
  {
    title: "sanah na stadionie",
    category: "Enea Stadion · koncert",
    poster: "/videos/enea-sanah-poster.webp",
    publication: "https://www.instagram.com/eneastadion/reel/Db8u10wjEP0/",
    portrait: true,
  },
];

function FilmCard({ film }: { film: Film }) {
  const [failed, setFailed] = useState(false);
  const coverClass = `group relative block w-full overflow-hidden rounded-2xl border border-border bg-black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${film.portrait ? "aspect-[9/16]" : "aspect-video"}`;
  const cover = (
    <>
      <img src={film.poster} alt="" width={film.portrait ? 540 : 960} height={film.portrait ? 960 : 540} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03]" />
      <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/65 bg-black/35 backdrop-blur-sm transition-colors group-hover:bg-black/65">
          {film.src ? <Play className="ml-0.5 h-5 w-5" fill="currentColor" /> : <ArrowUpRight className="h-5 w-5" />}
        </span>
      </span>
      <span className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs font-medium">
        {film.src ? "Odtwórz film" : <><Instagram aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />Na Instagramie ↗</>}
      </span>
    </>
  );

  return (
    <figure className="min-w-0 snap-start">
      {film.src ? (
        <Dialog.Root onOpenChange={() => setFailed(false)}>
          <Dialog.Trigger asChild><button type="button" className={coverClass} aria-label={`Odtwórz film: ${film.title}`}>{cover}</button></Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-sm" />
            <Dialog.Content className={`fixed left-1/2 top-1/2 z-[121] w-[calc(100%_-_2rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-[#101010] p-4 text-white shadow-2xl focus:outline-none ${film.portrait ? "max-w-md" : "max-w-5xl"}`}>
              <div className="mb-4 pr-12">
                <Dialog.Title className="text-lg font-medium">{film.title}</Dialog.Title>
                <Dialog.Description className="mt-1 text-sm text-white/65">{film.category}</Dialog.Description>
              </div>
              <Dialog.Close asChild><button type="button" aria-label="Zamknij film" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"><X aria-hidden="true" className="h-5 w-5" /></button></Dialog.Close>
              {failed ? <p role="alert" className="py-12 text-center">Nie udało się odtworzyć filmu. Skorzystaj z odnośnika poniżej.</p> : <video src={film.src} poster={film.poster} controls autoPlay playsInline preload="none" aria-label={film.title} onError={() => setFailed(true)} className="max-h-[70dvh] w-full rounded-lg bg-black object-contain" />}
              <a href={film.src} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-8 items-center gap-1 text-xs text-white/70 underline underline-offset-4 hover:text-white">Otwórz film osobno <ArrowUpRight aria-hidden="true" className="h-3 w-3" /></a>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ) : <a href={film.publication} target="_blank" rel="noopener noreferrer" className={coverClass} aria-label={`Obejrzyj na Instagramie: ${film.title} (nowa karta)`}>{cover}</a>}
      <figcaption className="pt-4">
        <p className="text-xs text-muted-foreground leading-relaxed">{film.category}</p>
        <h3 className={`mt-1 font-geist tracking-tight ${film.portrait ? "text-base" : "text-2xl md:text-3xl"}`}>{film.title}</h3>
        {film.src && film.publication && <a href={film.publication} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground">Zobacz publikację <ArrowUpRight aria-hidden="true" className="h-3 w-3" /></a>}
      </figcaption>
    </figure>
  );
}

export function FeaturedFilms({ id = "filmy-i-rolki", reelsOnly = false }: { id?: string; reelsOnly?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 border-y border-border/60 bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-20">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="dv-eyebrow mb-4">Wybrane filmy i rolki</p>
            <h2 id={`${id}-heading`} className="font-geist text-4xl md:text-5xl tracking-[-0.04em] leading-[1.08]">{reelsOnly ? <>Rolki z <span className="dv-text-grad italic">energią.</span></> : <>Spoty z charakterem.<br /><span className="dv-text-grad italic">Rolki z energią.</span></>}</h2>
            <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">Motoryzacja, muzyka i emocje na stadionie. Zobacz wybrane materiały FOTZ Studio.</p>
          </div>
          <Link to="/uslugi/produkcja-video" className="dv-btn dv-btn-secondary">Produkcja filmowa <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
        <div className={reelsOnly ? "max-w-4xl" : "grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-7"}>
          {!reelsOnly && <FilmCard film={cupra} />}
          <div className="min-w-0">
            <div className="grid auto-cols-[74%] grid-flow-col gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid-flow-row sm:grid-cols-3 sm:auto-cols-auto">
              {reels.map(film => <FilmCard key={film.title} film={film} />)}
            </div>
            <p className="mt-2 text-xs text-muted-foreground sm:hidden">Przesuń, aby zobaczyć kolejne rolki →</p>
          </div>
        </div>
        <div className="mt-9 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-border pt-6 text-sm">
          <Link to="/social-media/obsluga" className="inline-flex items-center gap-2 underline underline-offset-4">Prowadzenie social media <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="text-muted-foreground">Więcej naszych materiałów:</span>
            <a href="https://www.instagram.com/fotz_studio/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">Instagram <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /></a>
            <a href="https://www.facebook.com/fotzpoznan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">Facebook <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /></a>
            <a href="https://www.youtube.com/@Studio-Fotz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">YouTube <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
