import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export type Project = { image: string; video?: string; name: string; scope: string; description: string; alt: string; href?: string; linkLabel?: string; fit?: string; position?: string };
type ImageVariant = { src: string; width: number; height: number };

export function PortfolioProjectGrid({ projects, images, threeColumns = false }: { projects: Project[]; images: Record<string, ImageVariant[]>; threeColumns?: boolean }) {
  return (
      <div className={projects.length > 1 ? `grid md:grid-cols-2 ${threeColumns ? 'xl:grid-cols-3' : ''} gap-8` : 'max-w-4xl'}>
        {projects.map((project: Project) => {
          const variants = images[project.image];
          const source = variants.at(-1)!;
          return <figure data-project={project.image} key={project.image} className="min-w-0 rounded-2xl overflow-hidden border border-border bg-background">
            <div className="aspect-[4/3] bg-muted/30">
              {project.video ? (
                <video controls playsInline preload="none" poster={source.src} src={project.video} aria-label={`Obejrzyj: ${project.name}`} className="h-full w-full object-contain bg-black">
                  Twoja przeglądarka nie obsługuje wideo. <a href={project.video}>Otwórz film: {project.name}</a>.
                </video>
              ) : (
                <img src={source.src} srcSet={variants.map(image => `${image.src} ${image.width}w`).join(', ')} sizes={projects.length > 1 ? threeColumns ? '(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw' : '(min-width: 1280px) 600px, (min-width: 768px) 45vw, 90vw' : '(min-width: 1024px) 896px, 90vw'} width={source.width} height={source.height} alt={project.alt} loading="lazy" decoding="async" className={`h-full w-full ${project.fit === 'contain' ? 'object-contain' : 'object-cover'}`} style={project.position ? { objectPosition: project.position } : undefined} />
              )}
            </div>
            <figcaption className="p-6 md:p-8">
              <p className="text-xs tracking-wide uppercase text-muted-foreground mb-3">{project.scope}</p>
              <h3 className="font-heading text-2xl mb-3">{project.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              {project.href && (project.href.startsWith('/')
                ? <Link to={project.href} className="inline-flex items-center gap-2 mt-5 font-medium underline underline-offset-4 hover:text-primary">{project.linkLabel}<ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
                : <a href={project.href} className="inline-flex items-center gap-2 mt-5 font-medium underline underline-offset-4 hover:text-primary">{project.linkLabel}<ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>)}
            </figcaption>
          </figure>;
        })}
      </div>
  );
}
