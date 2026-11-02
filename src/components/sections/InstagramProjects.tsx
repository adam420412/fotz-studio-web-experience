import { useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { instagramProjects, industryInstagramProjects } from '@/data/instagram-projects.mjs';
import images from '@/data/instagram-project-images.json';
import videos from '@/data/instagram-project-videos.json';

type Project = (typeof instagramProjects)[number];

function ProjectCard({ project, single, compact }: { project: Project; single: boolean; compact: boolean }) {
  const variants = images[project.id as keyof typeof images];
  const cover = variants.at(-1)!;
  const [failed, setFailed] = useState(false);
  const video = videos[project.id as keyof typeof videos];
  const landscape = video.width > video.height;

  return <article className={`min-w-0 snap-start overflow-hidden rounded-2xl border border-border bg-background ${single ? 'sm:flex' : ''}`}>
    <Dialog.Root onOpenChange={() => setFailed(false)}>
      <Dialog.Trigger asChild>
        <button type="button" aria-label={`Odtwórz rolkę: ${project.name}`} className={`group relative block w-full aspect-[4/5] bg-black overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white ${single ? 'sm:w-80 sm:shrink-0' : ''}`}>
          <img src={cover.src} srcSet={variants.map(image => `${image.src} ${image.width}w`).join(', ')} sizes={single ? '(min-width: 640px) 320px, 90vw' : '(min-width: 1280px) 400px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw'} width={cover.width} height={cover.height} alt={project.alt} loading="lazy" decoding="async" className={`h-full w-full ${project.contain ? 'object-contain' : 'object-cover'} motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]`} />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-black/40 text-white backdrop-blur-sm group-hover:bg-black/70"><Play className="ml-0.5 h-5 w-5" fill="currentColor" /></span></span>
          <span aria-hidden="true" className="absolute bottom-4 left-4 text-sm font-medium text-white">Odtwórz tutaj</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-sm" />
        <Dialog.Content className={`fixed left-1/2 top-1/2 z-[121] w-[calc(100%_-_1.5rem)] ${landscape ? 'max-w-4xl' : 'max-w-md'} max-h-[94dvh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-white/15 bg-[#101010] p-3 sm:p-4 text-white shadow-2xl focus:outline-none`}>
          <div className="mb-3 pr-12">
            <Dialog.Title className="text-base sm:text-lg font-medium">{project.name}</Dialog.Title>
            <Dialog.Description className="mt-1 text-xs text-white/65">{project.category}</Dialog.Description>
          </div>
          <Dialog.Close asChild><button type="button" aria-label="Zamknij rolkę" className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"><X aria-hidden="true" className="h-5 w-5" /></button></Dialog.Close>
          {failed ? <p role="alert" className="py-12 text-center text-sm">Nie udało się odtworzyć filmu. <a href={video.src} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Otwórz plik w nowej karcie</a>.</p> : <video src={video.src} width={video.width} height={video.height} poster={cover.src} controls autoPlay playsInline preload="none" aria-label={`Rolka: ${project.name}`} onError={() => setFailed(true)} className="max-h-[68dvh] w-full rounded-lg bg-black object-contain" />}
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-8 items-center gap-1 text-xs text-white/70 underline underline-offset-4 hover:text-white">Zobacz publikację na Instagramie <ArrowUpRight aria-hidden="true" className="h-3 w-3" /><span className="sr-only"> (nowa karta)</span></a>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    <div className={`p-5 ${single ? 'sm:p-8 sm:self-center' : ''}`}>
      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">{project.category}</p>
      <h3 className="font-heading text-xl mb-3">{project.name}</h3>
      {!compact && <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>}
    </div>
  </article>;
}

export function InstagramProjects({ industry, title = 'Zobacz nasze opublikowane realizacje', compact = false }: { industry?: string; title?: string; compact?: boolean }) {
  const railRef = useRef<HTMLDivElement>(null);
  const scrollReels = (direction: number) => {
    const rail = railRef.current;
    if (rail) rail.scrollBy({ left: direction * rail.clientWidth * 0.9, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  const selectedIds = industry ? industryInstagramProjects[industry as keyof typeof industryInstagramProjects] : undefined;
  if (industry && !selectedIds) return null;
  const projects = selectedIds ? instagramProjects.filter(project => selectedIds.includes(project.id)) : instagramProjects;
  const single = projects.length === 1;
  return <section id="realizacje-instagram" data-instagram-projects aria-labelledby="instagram-projects-heading" className="py-14 md:py-20 bg-muted/20 border-y border-border scroll-mt-24">
    <div className="container-wide px-6 md:px-12">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-3xl">
          <p className="dv-eyebrow mb-3">Z Instagrama FOTZ Studio i naszych klientów</p>
          <h2 id="instagram-projects-heading" className="font-heading text-3xl md:text-4xl mb-4">{title}</h2>
          <p className="text-muted-foreground leading-relaxed">Motoryzacja, wydarzenia i koncerty. Wybierz realizację i obejrzyj ją tutaj.</p>
        </div>
        {compact && <Link to="/realizacje" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">Wszystkie realizacje <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>}
      </div>
      <div ref={railRef} className={single ? 'max-w-4xl' : compact ? 'grid grid-flow-col auto-cols-[84%] sm:auto-cols-[44%] lg:auto-cols-[30%] gap-5 overflow-x-auto snap-x snap-mandatory pb-4' : 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'}>
        {projects.map(project => <ProjectCard key={project.id} project={project} single={single} compact={compact} />)}
      </div>
      {compact && <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">Przesuń, aby zobaczyć wszystkie {projects.length} realizacji</p>
        <div className="flex gap-2">
          <button type="button" aria-label="Poprzednie realizacje" onClick={() => scrollReels(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><ArrowLeft aria-hidden="true" className="h-4 w-4" /></button>
          <button type="button" aria-label="Następne realizacje" onClick={() => scrollReels(1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><ArrowRight aria-hidden="true" className="h-4 w-4" /></button>
        </div>
      </div>}
    </div>
  </section>;
}
