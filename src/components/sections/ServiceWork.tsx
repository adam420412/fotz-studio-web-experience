import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getServiceWork, serviceWork } from '@/data/service-work.mjs';
import industryImages from '@/data/industry-work-images.json';
import serviceImages from '@/data/service-work-images.json';
import { PortfolioProjectGrid } from './PortfolioProjectGrid';
import { enquiryHref } from '@/lib/enquiry.mjs';

const images = { ...industryImages, ...serviceImages };

export function ServiceWork({ path }: { path: string }) {
  const collection = getServiceWork(path);
  if (!collection) return null;
  const work = serviceWork[collection as keyof typeof serviceWork];
  const enquiry = path.replace(/\/+$/, '') === '/uslugi/produkcja-video'
    ? { service: 'video', variant: 'spot', label: 'Zapytaj o spot reklamowy' }
    : work.enquiry;
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
      <div className="mt-10 border-t border-border pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <p className="text-muted-foreground leading-relaxed max-w-xl">Masz podobny projekt? Opisz swój cel, a ustalimy zakres i wycenę.</p>
        <Link to={enquiryHref(enquiry.service, enquiry.variant)} className="dv-btn dv-btn-primary self-start sm:shrink-0">{enquiry.label}<ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
      </div>
    </div>
  </section>;
}
