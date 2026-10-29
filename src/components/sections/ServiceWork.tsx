import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getServiceWork, serviceWork } from '@/data/service-work.mjs';
import industryImages from '@/data/industry-work-images.json';
import serviceImages from '@/data/service-work-images.json';
import { PortfolioProjectGrid } from './PortfolioProjectGrid';

const images = { ...industryImages, ...serviceImages };

export function ServiceWork({ path }: { path: string }) {
  const collection = getServiceWork(path);
  if (!collection) return null;
  const work = serviceWork[collection as keyof typeof serviceWork];
  return <section id="realizacje-uslugi" data-service-work={collection} aria-labelledby="service-work-heading" className="py-14 md:py-20 bg-card border-y border-border scroll-mt-24">
    <div className="container-wide px-6 md:px-12">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
        <div className="max-w-3xl">
          <p className="dv-eyebrow mb-3">Z portfolio FOTZ Studio</p>
          <h2 id="service-work-heading" className="text-3xl md:text-4xl font-heading leading-tight mb-4">{work.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{work.description}</p>
        </div>
        <Link to="/realizacje" className="dv-btn dv-btn-secondary">Całe portfolio <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
      </div>
      <PortfolioProjectGrid projects={work.projects} images={images} threeColumns={work.projects.length > 4} />
    </div>
  </section>;
}
