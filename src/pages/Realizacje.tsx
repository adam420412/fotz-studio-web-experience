import { InstagramProjects } from "@/components/sections/InstagramProjects";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Expand } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ImageLightbox } from "@/components/ImageLightbox";
import { PortfolioVideo } from "@/components/PortfolioVideo";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { projects, galleryCategories, galleryImages } from "@/data/portfolio";
import { portfolioPreviews } from "@/data/portfolio-previews";
import { business } from "@/data/business.mjs";
import { cn } from "@/lib/utils";
import { SplitText } from "@/components/motion/SplitText";
import { useFlip } from "@/components/motion/useFlip";
import { PointerFollower, usePointerTilt } from "@/components/motion/pointer";
import "./realizacje.css";

const projectCategories = ["Wszystkie", "Strony www", "Aplikacje i 3D", "Kampanie reklamowe", "E-commerce", "Wizualizacje 3D"];
const spotlightOrder = ["enea-stadion", "wsb-merito", "klagem", "dawid-edu"];
const projectOrder = (id: string) => spotlightOrder.includes(id) ? spotlightOrder.indexOf(id) : spotlightOrder.length;
const orderedProjects = [...projects].sort((a, b) => projectOrder(a.id) - projectOrder(b.id));
const videos = [
  { src: "/videos/cupra-enea.mp4", poster: "/videos/cupra-enea-poster.webp", title: "CUPRA × Enea Stadion", category: "Spot reklamowy · motoryzacja" },
  { src: "/videos/wsb-merito-enea.mp4", poster: "/videos/wsb-merito-poster.webp", title: "WSB Merito × Enea Stadion", category: "Spot rekrutacyjny · edukacja" },
  { src: "/videos/fotz-reel-web.mp4", poster: "/videos/enea-stadion-cover.webp", title: "Enea Stadion — emocje z bliska", category: "Film z wydarzenia" },
  { src: "/videos/autospa.mp4", poster: "/videos/autospa-frame.webp", title: "AutoSpa", category: "Prezentacja firmy" },
  { src: "/videos/fps-poznan.mp4", poster: "/videos/fps-poznan-frame.webp", title: "FPS Poznań — prezentacja strony", category: "Projekt WWW" },
  { src: "/videos/enea-stadion-header.mp4", poster: "/videos/enea-stadion-header-frame.webp", title: "Enea Stadion z lotu ptaka", category: "Ujęcia z drona" },
  { src: "/videos/eko-kamionki.mp4", poster: "/videos/eko-kamionki-frame.webp", title: "Eko Kamionki", category: "Film z wydarzenia" },
  { src: "/videos/fun-sport-stylish.mp4", poster: "/videos/fun-sport-stylish-frame.webp", title: "Prezentacja nieruchomości", category: "Architektura i ujęcia z drona" },
];
const filterClass = (selected: boolean) => cn(
  "min-h-11 rounded-full border px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  selected ? "border-transparent bg-gradient-brand text-white" : "border-border bg-background text-foreground hover:border-primary/60",
);
type GalleryImage = { src: string; alt: string };

export default function Realizacje() {
  const [activeProjectCategory, setActiveProjectCategory] = useState("Wszystkie");
  const [activeGalleryCategory, setActiveGalleryCategory] = useState("all");
  const [visiblePhotos, setVisiblePhotos] = useState(12);
  const [lightbox, setLightbox] = useState<{ images: GalleryImage[]; index: number } | null>(null);
  const filteredProjects = orderedProjects.filter(project => activeProjectCategory === "Wszystkie" || project.category === activeProjectCategory);
  const filteredGallery = galleryImages.filter(photo => activeGalleryCategory === "all" || photo.category === activeGalleryCategory);
  const displayedPhotos = filteredGallery.slice(0, visiblePhotos);
  const projectGridRef = useRef<HTMLDivElement>(null);
  const projectFlip = useFlip(projectGridRef);
  const photoGridRef = useRef<HTMLDivElement>(null);
  const photoFlip = useFlip(photoGridRef);

  return (
    <Layout>
      <OrganizationSchema />
      <SEOHead title="Realizacje FOTZ Studio — strony, kampanie, zdjęcia i filmy" description="Zobacz wybrane realizacje FOTZ Studio: strony internetowe, sklepy, kampanie reklamowe, fotografie, filmy i wizualizacje 3D. Poznaj zakres projektów." canonical="https://www.fotz-studio.pl/realizacje" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl/" }, { name: "Realizacje", url: "https://www.fotz-studio.pl/realizacje" }]} />
      <section className="portfolio-intro pt-28 pb-10 md:pt-36 md:pb-16 border-b border-border">
        <div className="container-wide px-6 md:px-12">
          <p className="dv-eyebrow mb-5">Portfolio FOTZ Studio</p>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-16 items-end">
            <SplitText as="h1" intro className="text-[clamp(42px,6.4vw,88px)] leading-[1.02] tracking-[-.055em]" lines={["Pomysły, które", { text: "przybrały formę.", className: "dv-text-grad italic" }]} />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">Strony, kampanie i materiały wizualne. Zobacz wybrane realizacje, sprawdź zakres prac i wybierz przykłady bliskie Twojemu projektowi.</p>
          </div>
          <nav aria-label="Sekcje portfolio" className="mt-8 flex flex-wrap gap-3">
            <a href="#projekty" className="dv-btn dv-btn-secondary">Projekty <span className="text-muted-foreground">{projects.length}</span></a>
            <a href="#filmy" className="dv-btn dv-btn-secondary">Filmy <span className="text-muted-foreground">{videos.length}</span></a>
            <a href="#zdjecia" className="dv-btn dv-btn-secondary">Zdjęcia i 3D <span className="text-muted-foreground">{galleryImages.length}</span></a>
          </nav>
          <Link to="/realizacje/enea-stadion" style={{ "--intro-delay": "420ms" } as React.CSSProperties} className="portfolio-feature intro-rise group relative mt-10 block overflow-hidden rounded-2xl bg-neutral-950 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <img src="/work/stadium-1200.webp" srcSet="/work/stadium-480.webp 480w, /work/stadium-800.webp 800w, /work/stadium-1200.webp 1200w" sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc(100vw - 96px), 1184px" width="1200" height="898" fetchPriority="high" alt="Enea Stadion w wieczornym świetle i czerwone race na pierwszym planie" className="portfolio-media absolute inset-0 h-full w-full object-cover object-center" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 md:p-10">
              <div><p className="mb-3 text-xs uppercase tracking-[.18em] text-white/80">W obiektywie FOTZ Studio</p><p className="text-3xl md:text-5xl tracking-tight">Enea Stadion</p><p className="mt-3 text-sm text-white/85">Miejsce, emocje i jego obecność w sieci.</p><span className="mt-5 inline-block text-sm underline underline-offset-4">Poznaj realizację</span></div>
              <span aria-hidden="true" className="portfolio-arrow flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full border border-white/50 bg-black/20"><ArrowUpRight className="h-6 w-6" /></span>
            </div>
          </Link>
        </div>
      </section>

      <section id="projekty" aria-labelledby="projects-heading" className="scroll-mt-28 py-14 md:py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5"><div><p className="dv-eyebrow mb-4">Wybrane współprace</p><h2 id="projects-heading" className="text-3xl md:text-5xl tracking-tight">Strony i projekty marketingowe</h2></div><Link to="/kontakt" className="inline-flex items-center gap-2 underline underline-offset-4">Porozmawiajmy o Twoim projekcie <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link></div>
          <div className="grid gap-8 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-10">
          <div className="lg:sticky lg:top-28 self-start">
            <div role="group" aria-label="Filtruj projekty" className="flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
              {projectCategories.map(category => <button key={category} type="button" aria-pressed={activeProjectCategory === category} aria-controls="project-grid" onClick={() => { if (category !== activeProjectCategory) { projectFlip.capture(); setActiveProjectCategory(category); } }} className={cn(filterClass(activeProjectCategory === category), "flex items-center justify-between gap-3 text-left lg:rounded-xl")}><span>{category}</span><span className="text-xs opacity-70">{category === "Wszystkie" ? projects.length : projects.filter(project => project.category === category).length}</span></button>)}
            </div>
            <p role="status" className="text-xs text-muted-foreground mt-5 leading-relaxed">Wyświetlono {filteredProjects.length} z {projects.length} projektów</p>
          </div>
          <PointerFollower scopeRef={projectGridRef}>
          <div id="project-grid" ref={projectGridRef} className="grid min-w-0 sm:grid-cols-2 gap-x-6 gap-y-10 md:gap-y-14">
            {filteredProjects.map((project, index) => {
              const card = <>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
                  <img src={portfolioPreviews[project.image]?.src ?? project.image} srcSet={portfolioPreviews[project.image]?.srcSet} sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 767px) calc((100vw - 72px) / 2), (max-width: 1023px) calc((100vw - 120px) / 2), (max-width: 1279px) calc((100vw - 330px) / 2), 475px" alt="" className="portfolio-media h-full w-full object-cover object-top" loading="lazy" decoding="async" width="720" height="540" />
                  {project.featured && <span className="absolute top-4 left-4 rounded-full bg-black/80 px-3 py-1.5 text-xs text-white">Wybrana realizacja</span>}
                  <span aria-hidden="true" className="portfolio-card-icon absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground shadow-sm">{project.hasCase || project.liveUrl ? <ArrowUpRight className="h-5 w-5" /> : <Expand className="h-5 w-5" />}</span>
                </div>
                <div className="pt-5 flex flex-1 flex-col items-start">
                  <p className="text-[11px] uppercase tracking-[.14em] text-muted-foreground mb-2">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl tracking-tight mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                  <span className="mt-auto text-sm underline underline-offset-4">{project.hasCase ? "Zobacz projekt" : project.liveUrl ? "Otwórz stronę" : project.category === "Wizualizacje 3D" ? "Powiększ wizualizację" : "Powiększ zrzut ekranu"}</span>
                </div>
              </>;
              const className = "portfolio-project group flex h-full flex-col rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
              const cursor = project.hasCase ? "Zobacz projekt" : project.liveUrl ? "Otwórz stronę" : "Powiększ";
              return <article id={project.id} key={project.id} data-flip-key={project.id} data-reveal="card" className="min-w-0 scroll-mt-28" style={{ "--stagger": index % 2 } as React.CSSProperties}><TiltTarget label={cursor}>{(tilt) => project.hasCase ? <Link to={`/realizacje/${project.id}`} className={className} {...tilt}>{card}</Link> : project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener" className={className} aria-label={`${project.title}, otwiera się w nowej karcie`} {...tilt}>{card}</a> : <button type="button" className={cn(className, "w-full")} onClick={() => setLightbox({ images: [{ src: project.image, alt: project.title }], index: 0 })} {...tilt}>{card}</button>}</TiltTarget></article>;
            })}
          </div>
          </PointerFollower>
          </div>
        </div>
      </section>

      <section id="filmy" aria-labelledby="videos-heading" className="scroll-mt-28 py-14 md:py-20 bg-muted/30 border-y border-border">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-8">
            <div><p className="dv-eyebrow mb-3">Produkcja video</p><h2 id="videos-heading" className="text-3xl md:text-4xl">Zobacz nasze filmy</h2></div>
            <Link to="/uslugi/produkcja-video" className="underline underline-offset-4">Poznaj ofertę video</Link>
          </div>
          <div className="portfolio-films grid md:grid-cols-2 gap-6 md:gap-8">{videos.map((video, i) => <div key={video.src} data-reveal style={{ "--stagger": i % 2 } as React.CSSProperties}><PortfolioVideo {...video} /></div>)}</div>
        </div>
      </section>

      <InstagramProjects />

      <section id="zdjecia" aria-labelledby="photos-heading" className="scroll-mt-28 py-14 md:py-20">
        <div className="container-wide px-6 md:px-12">
          <p className="dv-eyebrow mb-3">Galeria</p><h2 id="photos-heading" className="text-3xl md:text-4xl mb-4">Zdjęcia i wizualizacje 3D</h2>
          <p className="text-muted-foreground max-w-2xl mb-7">Koncerty, wydarzenia, portrety i przestrzenie. Wybierz kategorię i otwórz zdjęcie, żeby zobaczyć je w całości.</p>
          <div role="group" aria-label="Filtruj galerię" className="flex flex-wrap gap-2 mb-7">
            {galleryCategories.map(category => <button key={category.id} type="button" aria-pressed={activeGalleryCategory === category.id} aria-controls="photo-grid" onClick={() => { if (category.id !== activeGalleryCategory) { photoFlip.capture(); setActiveGalleryCategory(category.id); setVisiblePhotos(12); } }} className={cn(filterClass(activeGalleryCategory === category.id), "flex items-center gap-2")}><category.icon aria-hidden="true" className="w-4 h-4" />{category.label}</button>)}
          </div>
          <div id="photo-grid" ref={photoGridRef} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {displayedPhotos.map((photo, index) => <button key={photo.src} data-flip-key={photo.src} data-reveal style={{ "--stagger": index % 3 } as React.CSSProperties} type="button" aria-label={`Powiększ: ${photo.title}`} className="portfolio-photo relative aspect-[4/3] overflow-hidden rounded-xl group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" onClick={() => setLightbox({ images: filteredGallery.map(image => ({ src: image.src, alt: image.title })), index })}>
              <img src={portfolioPreviews[photo.src]?.src ?? photo.src} srcSet={portfolioPreviews[photo.src]?.srcSet} sizes="(max-width: 767px) calc((100vw - 60px) / 2), (max-width: 1279px) calc((100vw - 136px) / 3), 381px" alt="" className="portfolio-media w-full h-full object-cover" loading="lazy" decoding="async" width="640" height="480" />
              <span aria-hidden="true" className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/65 text-white"><Expand className="w-4 h-4" /></span>
            </button>)}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p role="status" className="text-sm text-muted-foreground">Wyświetlono {displayedPhotos.length} z {filteredGallery.length} zdjęć w tej kategorii</p>
            {visiblePhotos < filteredGallery.length && <button type="button" className="dv-btn dv-btn-secondary" aria-controls="photo-grid" onClick={() => setVisiblePhotos(count => count + 12)}>Pokaż kolejne zdjęcia</button>}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-border bg-card">
        <div className="container-wide px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-16">
          <div><p className="dv-eyebrow mb-4">Twój projekt</p><h2 className="text-3xl md:text-4xl mb-4">Który kierunek jest Ci bliski?</h2><p className="text-muted-foreground leading-relaxed">Prześlij wybrane przykłady, cel i planowany termin. Ustalimy potrzebny zakres: stronę, kampanię, zdjęcia albo film. Wycenę przygotujemy dla Twoich materiałów, funkcji i kanałów publikacji.</p></div>
          <div className="flex flex-col justify-center items-start gap-4"><Link to={business.consultationPath} className="dv-btn dv-btn-primary">Konsultacja 15 min <ArrowUpRight className="w-4 h-4" /></Link><Link to="/kontakt" className="underline underline-offset-4">Wolę opisać projekt w formularzu</Link><Link to="/uslugi" className="text-sm text-muted-foreground underline underline-offset-4">Sprawdź zakres usług</Link></div>
        </div>
      </section>
      <ImageLightbox images={lightbox?.images ?? []} currentIndex={lightbox?.index ?? 0} isOpen={lightbox !== null} onClose={() => setLightbox(null)} onNavigate={index => setLightbox(current => current ? { ...current, index } : null)} />
    </Layout>
  );
}

type TiltProps = {
  ref: React.Ref<HTMLAnchorElement & HTMLButtonElement>;
  "data-cursor-label": string;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerLeave: () => void;
};

/** Gives a project card the pointer tilt and the "Zobacz projekt" bubble label. */
function TiltTarget({ label, children }: { label: string; children: (props: TiltProps) => React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const tilt = usePointerTilt(ref, 4);
  return <>{children({ ref, "data-cursor-label": label, onPointerMove: tilt.onMove, onPointerLeave: tilt.reset })}</>;
}
