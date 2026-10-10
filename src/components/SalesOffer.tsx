import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import { EnquiryForm } from '@/components/EnquiryForm';
import { FeaturedFilms } from '@/components/sections/FeaturedFilms';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { FAQSchema, BreadcrumbSchema, ServiceSchema } from '@/components/seo/StructuredData';
import { enquiryHref } from '@/lib/enquiry.mjs';
import { workImages } from '@/data/selected-work.mjs';
import imageVariants from '@/data/selected-work-images.json';

type Item = { title: string; text: string };
export interface SalesOfferProps {
  path: string; service: string; title: string; description: string;
  heading: string; eyebrow: string; lead: string; cta: string;
  hero: keyof typeof imageVariants; caption: string; films?: boolean;
  scope: Item[]; options: (Item & { variant: string; detail: string })[];
  pricing: string; pricingHref: string; pricingLabel: string;
  steps: Item[]; faqs: { question: string; answer: string }[];
  evidence: { title: string; text: string; href: string }[];
}
export function SalesOffer(p: SalesOfferProps) {
  const variants = imageVariants[p.hero]; const cover = variants[1]; const work = workImages[p.hero];
  return <Layout workPlacement="manual">
    <ServiceSchema name={p.heading} description={p.lead} areaServed="Polska" /><FAQSchema items={p.faqs} />
    <BreadcrumbSchema items={[{ name: 'Strona główna', url: '/' }, { name: 'Usługi', url: '/uslugi' }, { name: p.heading, url: p.path }]} />
    <PageBreadcrumbs items={[{ name: 'Usługi', url: '/uslugi' }, { name: p.heading }]} />
    <section className="container-wide px-6 md:px-12 pt-6 pb-12 md:py-14"><div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
      <div><p className="dv-eyebrow mb-5">{p.eyebrow}</p><h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">{p.heading}</h1><p className="text-lg text-muted-foreground leading-relaxed">{p.lead}</p><div className="flex flex-wrap gap-3 mt-8"><a href="#zapytanie" className="dv-btn dv-btn-primary">{p.cta}<ArrowRight aria-hidden className="w-4 h-4" /></a><a href="#realizacje" className="dv-btn dv-btn-secondary">Zobacz realizacje</a></div><p className="text-sm text-muted-foreground mt-5">Zespół w Poznaniu · zakres i wycena przed startem</p></div>
      <figure><Link to={work.href}><img src={cover.src} srcSet={variants.map(v => `${v.src} ${v.width}w`).join(', ')} sizes="(min-width: 1536px) 640px, (min-width: 1024px) 43vw, 90vw" width={cover.width} height={cover.height} alt={work.alt} fetchPriority="high" className="w-full aspect-[4/3] object-cover rounded-2xl border border-border" /></Link><figcaption className="text-sm text-muted-foreground leading-relaxed mt-3">{p.caption}</figcaption></figure>
    </div></section>
    <nav aria-label="Na tej stronie" className="container-wide px-6 md:px-12 pb-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">{[['#realizacje','Realizacje'],['#zakres','Zakres'],['#wycena','Wycena'],['#proces','Proces'],['#faq','Pytania'],['#zapytanie','Zapytaj o projekt']].map(([href,label]) => <a key={href} href={href} className="underline underline-offset-4">{label}</a>)}</nav>
    <section id="realizacje" className="scroll-mt-28">
      {p.films ? <FeaturedFilms id="filmy" /> : <SelectedWork />}
      <div className="container-wide px-6 md:px-12 py-10"><div className="grid md:grid-cols-3 gap-6">{p.evidence.map(item => <article key={item.title} className="border-t border-border pt-5"><h2 className="text-xl font-heading mb-3">{item.title}</h2><p className="text-muted-foreground leading-relaxed mb-4">{item.text}</p><Link to={item.href} className="underline underline-offset-4">Zobacz projekt</Link></article>)}</div></div>
    </section>
    <section id="zakres" className="scroll-mt-28 border-y border-border bg-muted/20 py-14"><div className="container-wide px-6 md:px-12"><p className="dv-eyebrow mb-4">Co możesz zlecić</p><h2 className="font-heading text-3xl md:text-4xl mb-8">Wybierz punkt wyjścia.</h2><div className="grid lg:grid-cols-3 gap-5">{p.options.map(item => <article key={item.title} className="bg-background border border-border rounded-2xl p-6 flex flex-col"><h3 className="text-2xl font-heading mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed mb-4">{item.text}</p><p className="text-sm leading-relaxed mb-6">{item.detail}</p><Link to={enquiryHref(p.service,item.variant)} className="underline underline-offset-4 mt-auto">Zapytaj o ten zakres →</Link></article>)}</div><h2 className="font-heading text-3xl mt-14 mb-8">Co rozpisujemy w ofercie?</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{p.scope.map(item => <article key={item.title}><Check aria-hidden className="w-5 h-5 text-primary mb-3" /><h3 className="text-xl font-heading mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.text}</p></article>)}</div></div></section>
    <section id="wycena" className="scroll-mt-28 container-wide px-6 md:px-12 py-14 grid md:grid-cols-[1fr_1.4fr] gap-7 md:gap-12"><h2 className="font-heading text-3xl md:text-4xl">Ile kosztuje współpraca?</h2><div><p className="text-muted-foreground leading-relaxed mb-5">{p.pricing}</p><a href={p.pricingHref} className="underline underline-offset-4">{p.pricingLabel}</a><p className="text-sm text-muted-foreground mt-5">Przed rozpoczęciem ustalamy prace, wyłączenia, poprawki, terminy i płatności. Koszty zewnętrzne rozpisujemy osobno.</p></div></section>
    <section id="proces" className="scroll-mt-28 container-wide px-6 md:px-12 pb-14"><h2 className="font-heading text-3xl md:text-4xl mb-8">Od rozmowy do przekazania pracy.</h2><ol className="grid md:grid-cols-3 gap-7">{p.steps.map((item,i) => <li key={item.title} className="border-t border-border pt-5"><span className="font-mono text-primary" aria-hidden>0{i+1}</span><h3 className="text-xl font-heading my-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.text}</p></li>)}</ol></section>
    {p.films && <SelectedWork />}
    <section id="faq" className="scroll-mt-28 container-wide max-w-4xl px-6 md:px-12 py-14"><h2 className="font-heading text-3xl mb-7">Przed podjęciem decyzji</h2>{p.faqs.map(item => <details key={item.question} className="border-b border-border py-5"><summary className="font-medium cursor-pointer text-lg">{item.question}</summary><p className="text-muted-foreground leading-relaxed mt-4">{item.answer}</p></details>)}</section>
    <div className="container-wide max-w-4xl px-6 md:px-12 pb-16"><EnquiryForm id="zapytanie" defaultService={p.service} /></div>
  </Layout>;
}
