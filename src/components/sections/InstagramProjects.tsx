import { ArrowUpRight, Instagram } from 'lucide-react';
import { instagramProjects, industryInstagramProjects } from '@/data/instagram-projects.mjs';
import images from '@/data/instagram-project-images.json';

export function InstagramProjects({ industry, title = 'Zobacz nasze opublikowane realizacje' }: { industry?: string; title?: string }) {
  const selectedIds = industry ? industryInstagramProjects[industry as keyof typeof industryInstagramProjects] : undefined;
  if (industry && !selectedIds) return null;
  const projects = selectedIds ? instagramProjects.filter(project => selectedIds.includes(project.id)) : instagramProjects;
  const single = projects.length === 1;
  return <section id="realizacje-instagram" data-instagram-projects aria-labelledby="instagram-projects-heading" className="py-14 md:py-20 bg-muted/20 border-y border-border scroll-mt-24">
    <div className="container-wide px-6 md:px-12">
      <div className="mb-9 max-w-3xl">
        <p className="dv-eyebrow mb-3">Z Instagrama FOTZ Studio i naszych klientów</p>
        <h2 id="instagram-projects-heading" className="font-heading text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="text-muted-foreground leading-relaxed">Wybierz realizację, aby obejrzeć pełną rolkę na Instagramie.</p>
      </div>
      <div className={single ? 'max-w-4xl' : 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'}>
        {projects.map(project => {
          const variants = images[project.id as keyof typeof images];
          const cover = variants.at(-1)!;
          return <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — obejrzyj rolkę na Instagramie (nowa karta)`} className={`group flex min-w-0 flex-col ${single ? 'sm:flex-row' : ''} overflow-hidden rounded-2xl border border-border bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`}>
            <div className={`relative aspect-[4/5] bg-black overflow-hidden ${single ? 'sm:w-80 sm:shrink-0' : ''}`}>
              <img src={cover.src} srcSet={variants.map(image => `${image.src} ${image.width}w`).join(', ')} sizes={single ? '(min-width: 640px) 320px, 90vw' : '(min-width: 1280px) 400px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw'} width={cover.width} height={cover.height} alt={project.alt} loading="lazy" decoding="async" className={`h-full w-full ${project.contain ? 'object-contain' : 'object-cover'} motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]`} />
              <span aria-hidden="true" className="absolute bottom-4 left-4 rounded-full bg-black/80 text-white px-4 py-2 flex items-center gap-2 text-sm"><Instagram className="h-4 w-4" />Obejrzyj rolkę <ArrowUpRight className="h-4 w-4" /></span>
            </div>
            <div className={`p-6 ${single ? 'sm:p-8 sm:self-center' : ''}`}>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">{project.category}</p>
              <h3 className="font-heading text-xl mb-3">{project.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          </a>;
        })}
      </div>
    </div>
  </section>;
}
