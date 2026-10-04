import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Expand } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ImageLightbox } from "@/components/ImageLightbox";
import { PortfolioVideo } from "@/components/PortfolioVideo";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { projects, galleryCategories, galleryImages } from "@/data/portfolio";
import { business } from "@/data/business.mjs";
import { cn } from "@/lib/utils";

const projectCategories = ["Wszystkie", "Strony www", "Kampanie reklamowe", "E-commerce", "Wizualizacje 3D"];
const orderedProjects = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
const videos = [
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

  return (
    <Layout>
      <OrganizationSchema />
      <SEOHead title="Realizacje FOTZ Studio — strony, kampanie, zdjęcia i filmy" description="Zobacz wybrane realizacje FOTZ Studio: strony internetowe, sklepy, kampanie reklamowe, fotografie, filmy i wizualizacje 3D. Poznaj zakres projektów." canonical="https://www.fotz-studio.pl/realizacje" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl/" }, { name: "Realizacje", url: "https://www.fotz-studio.pl/realizacje" }]} />
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-border">
        <div className="container-wide px-6 md:px-12">
          <p className="dv-eyebrow mb-5">Portfolio FOTZ Studio</p>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-16 items-end">
            <h1 className="text-[clamp(42px,6vw,80px)] leading-[1.05] tracking-[-.045em]">Pomysły, które<br /><span className="dv-text-grad italic">przybrały formę.</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">Strony, kampanie i materiały wizualne. Zobacz wybrane realizacje, sprawdź zakres prac i wybierz przykłady bliskie Twojemu projektowi.</p>
          </div>
          <nav aria-label="Sekcje portfolio" className="mt-8 flex flex-wrap gap-3">
            <a href="#projekty" className="dv-btn dv-btn-secondary">Projekty <span className="text-muted-foreground">{projects.length}</span></a>
            <a href="#filmy" className="dv-btn dv-btn-secondary">Filmy <span className="text-muted-foreground">{videos.length}</span></a>
            <a href="#zdjecia" className="dv-btn dv-btn-secondary">Zdjęcia i 3D <span className="text-muted-foreground">{galleryImages.length}</span></a>
          </nav>
        </div>
      </section>

      <section id="projekty" aria-labelledby="projects-heading" className="py-12 md:py-16">
        <div className="container-wide px-6 md:px-12">
          <h2 id="projects-heading" className="text-3xl md:text-4xl mb-6">Strony i projekty marketingowe</h2>
          <div role="group" aria-label="Filtruj projekty" className="flex flex-wrap gap-2">
            {projectCategories.map(category => <button key={category} type="button" aria-pressed={activeProjectCategory === category} aria-controls="project-grid" onClick={() => setActiveProjectCategory(category)} className={filterClass(activeProjectCategory === category)}>{category}</button>)}
          </div>
          <p role="status" className="text-sm text-muted-foreground my-5">Wyświetlono {filteredProjects.length} z {projects.length} projektów</p>
          <div id="project-grid" className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map(project => {
              const card = <>
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img src={project.image} alt="" className="h-full w-full object-cover object-top" loading="lazy" width="720" height="450" />
                  {project.featured && <span className="absolute top-4 left-4 rounded-full bg-black/80 px-3 py-1.5 text-xs text-white">Wybrana realizacja</span>}
                </div>
                <div className="p-5 flex flex-1 flex-col items-start">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{project.category}</p>
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                  <span className="mt-auto flex items-center gap-2 text-sm font-medium">{project.hasCase ? "Zobacz projekt" : "Powiększ wizualizację"}{project.hasCase ? <ArrowUpRight aria-hidden="true" className="w-4 h-4" /> : <Expand aria-hidden="true" className="w-4 h-4" />}</span>
                </div>
              </>;
              const className = "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left hover:border-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
              return <article key={project.id}>{project.hasCase ? <Link to={`/realizacje/${project.id}`} className={className}>{card}</Link> : <button type="button" className={cn(className, "w-full")} onClick={() => setLightbox({ images: [{ src: project.image, alt: project.title }], index: 0 })}>{card}</button>}</article>;
            })}
          </div>
        </div>
      </section>

      <section id="filmy" aria-labelledby="videos-heading" className="py-12 md:py-16 bg-muted/30 border-y border-border">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-8">
            <div><p className="dv-eyebrow mb-3">Produkcja video</p><h2 id="videos-heading" className="text-3xl md:text-4xl">Zobacz nasze filmy</h2></div>
            <Link to="/uslugi/produkcja-video" className="underline underline-offset-4">Poznaj ofertę video</Link>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{videos.map(video => <PortfolioVideo key={video.src} {...video} />)}</div>
        </div>
      </section>

      <section id="zdjecia" aria-labelledby="photos-heading" className="py-12 md:py-16">
        <div className="container-wide px-6 md:px-12">
          <p className="dv-eyebrow mb-3">Galeria</p><h2 id="photos-heading" className="text-3xl md:text-4xl mb-4">Zdjęcia i wizualizacje 3D</h2>
          <p className="text-muted-foreground max-w-2xl mb-7">Koncerty, wydarzenia, portrety i przestrzenie. Wybierz kategorię i otwórz zdjęcie, żeby zobaczyć je w całości.</p>
          <div role="group" aria-label="Filtruj galerię" className="flex flex-wrap gap-2 mb-7">
            {galleryCategories.map(category => <button key={category.id} type="button" aria-pressed={activeGalleryCategory === category.id} aria-controls="photo-grid" onClick={() => { setActiveGalleryCategory(category.id); setVisiblePhotos(12); }} className={cn(filterClass(activeGalleryCategory === category.id), "flex items-center gap-2")}><category.icon aria-hidden="true" className="w-4 h-4" />{category.label}</button>)}
          </div>
          <div id="photo-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {displayedPhotos.map((photo, index) => <button key={photo.src} type="button" aria-label={`Powiększ: ${photo.title}`} className="relative aspect-square overflow-hidden rounded-xl group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" onClick={() => setLightbox({ images: filteredGallery.map(image => ({ src: image.src, alt: image.title })), index })}>
              <img src={photo.src} alt="" className="w-full h-full object-cover" loading="lazy" width="480" height="480" />
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
