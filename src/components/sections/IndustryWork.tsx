import { PortfolioProjectGrid } from './PortfolioProjectGrid';
import { InstagramProjects } from './InstagramProjects';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { industryWork } from '@/data/industry-work.mjs';
import images from '@/data/industry-work-images.json';

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
      <PortfolioProjectGrid projects={work.projects} images={images} />
    </div>
  </section><InstagramProjects industry={slug} /></>;
}
