import { InstagramProjects } from './InstagramProjects';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { industryWork } from '@/data/industry-work.mjs';
import images from '@/data/industry-work-images.json';

type Project = { image: string; video?: string; name: string; scope: string; description: string; alt: string; href?: string; linkLabel?: string; fit?: string; position?: string };

export function IndustryWork({ slug }: { slug: string }) {
  const work = industryWork[slug as keyof typeof industryWork];
  if (!work) return null;
  return <><section id="realizacje-branzowe" data-industry-work={slug} aria-labelledby="industry-work-heading" className="py-14 md:py-20 bg-card border-y border-border scroll-mt-24">
    <div className="container-wide px-6 md:px-12">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
        <div className="max-w-2xl">
          <p className="dv-eyebrow mb-3">Z portfolio FOTZ Studio</p>
          <h2 id="industry-work-heading" className="text-3xl md:text-4xl font-heading leading-tight">{work.title}</h2>
        </div>
        <Link to="/realizacje" className="dv-btn dv-btn-secondary">Całe portfolio <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
      </div>
      <div className={work.projects.length > 1 ? 'grid md:grid-cols-2 gap-8' : 'max-w-4xl'}>
        {work.projects.map((project: Project) => {
          const variants = images[project.image as keyof typeof images];
          const source = variants.at(-1)!;
          return <figure key={project.image} className="min-w-0 rounded-2xl overflow-hidden border border-border bg-background">
            <div className="aspect-[4/3] bg-muted/30">
              {project.video ? (
                <video controls playsInline preload="none" poster={source.src} src={project.video} aria-label={`Obejrzyj: ${project.name}`} className="h-full w-full object-contain bg-black">
                  Twoja przeglądarka nie obsługuje wideo. <a href={project.video}>Otwórz film: {project.name}</a>.
                </video>
              ) : (
                <img src={source.src} srcSet={variants.map(image => `${image.src} ${image.width}w`).join(', ')} sizes={work.projects.length > 1 ? '(min-width: 1280px) 600px, (min-width: 768px) 45vw, 90vw' : '(min-width: 1024px) 896px, 90vw'} width={source.width} height={source.height} alt={project.alt} loading="lazy" decoding="async" className={`h-full w-full ${project.fit === 'contain' ? 'object-contain' : 'object-cover'}`} style={project.position ? { objectPosition: project.position } : undefined} />
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
    </div>
  </section><InstagramProjects industry={slug} /></>;
}
