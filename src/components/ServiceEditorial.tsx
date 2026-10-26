import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { enquiryHref, serviceForPath } from "@/lib/enquiry.mjs";
import { workCollections, workImages } from "@/data/selected-work.mjs";
import imageVariants from "@/data/selected-work-images.json";
import { getWorkCollection } from "@/lib/selected-work.mjs";

interface EditorialSection {
  title: string;
  text: string;
  href?: string;
  link?: string;
  points?: string[];
}

interface ServiceEditorialProps {
  title: string;
  eyebrow: string;
  lead: string;
  path: string;
  area?: string;
  workAfterScope?: boolean;
  enquiryVariant?: string;
  summary: string[];
  scopeTitle: string;
  scope: EditorialSection[];
  sections: EditorialSection[];
  faqs: { question: string; answer: string }[];
  faqTitle?: string;
  contactDescription?: string;
  contactLabel?: string;
  priceNote?: string;
}

/** Shared presentation; each offer keeps its own scope, evidence and answers. */
export function ServiceEditorial({ title, eyebrow, lead, path, area = "Polska", workAfterScope = false, enquiryVariant, summary, scopeTitle, scope, sections, faqs, faqTitle = "Przed rozpoczęciem współpracy", contactDescription = "Prześlij adres strony, opisz cel i wskaż, co chcesz zmienić. Na tej podstawie ustalimy następny krok.", contactLabel = "Porozmawiajmy o projekcie", priceNote }: ServiceEditorialProps) {
  const contactHref = enquiryHref(serviceForPath(path), enquiryVariant);
  const collection = workCollections[getWorkCollection(path) ?? "studio"];
  const imageId = collection.images[0] as keyof typeof imageVariants;
  const work = workImages[imageId];
  const variants = imageVariants[imageId];
  const cover = variants[Math.min(1, variants.length - 1)];
  return <Layout workPlacement={workAfterScope ? "manual" : "end"}>
    <BreadcrumbSchema items={[{ name: "Strona główna", url: "/" }, { name: "Usługi", url: "/uslugi" }, { name: title, url: path }]} />
    <ServiceSchema name={title} description={lead} areaServed={area} />
    <FAQSchema items={faqs} />
    <PageBreadcrumbs items={[{ name: "Usługi", url: "/uslugi" }, { name: title }]} />

    <div className="service-editorial">
    <section className="container-wide px-6 md:px-12 pt-6 pb-12 md:py-16">
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <p className="dv-eyebrow mb-4">{eyebrow}</p>
          <h1 className="offer-heading mb-6">{title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{lead}</p>
          {priceNote && <p className="mt-6 text-lg font-medium text-primary">{priceNote}</p>}
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to={contactHref} className="dv-btn dv-btn-primary">{contactLabel} <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
            <a href="#zakres" className="dv-btn dv-btn-secondary">Zobacz zakres</a>
          </div>
        </div>
        <figure className="offer-visual min-w-0">
          <Link to={work.href} className="offer-visual-link block">
            <img src={cover.src} srcSet={variants.map(image => `${image.src} ${image.width}w`).join(", ")} sizes="(min-width: 1536px) 640px, (min-width: 1024px) 43vw, 90vw" width={cover.width} height={cover.height} alt={work.alt} fetchPriority="high" className="w-full aspect-[4/5] sm:aspect-[4/3] object-cover" />
            <span className="offer-visual-caption"><span><span className="block text-xs uppercase tracking-widest mb-2">Z portfolio FOTZ</span><span className="text-2xl font-heading">{work.title}</span></span><ArrowUpRight aria-hidden="true" className="w-6 h-6" /></span>
          </Link>
          <figcaption className="text-sm text-muted-foreground leading-relaxed mt-4">{work.label} · <Link to={work.href} className="underline underline-offset-4">Poznaj realizację</Link></figcaption>
        </figure>
      </div>
    </section>

    <div className="container-wide px-6 md:px-12 pb-10">
      <ol className="offer-summary grid md:grid-cols-3 gap-6 border-y border-border py-7">{summary.map((text, index) => <li key={text} className="flex gap-4"><span aria-hidden="true" className="font-mono text-primary shrink-0">0{index + 1}</span><p className="text-sm leading-relaxed">{text}</p></li>)}</ol>
      <nav aria-label="Na tej stronie" className="offer-navigation flex flex-wrap gap-x-7 gap-y-2 pt-6 text-sm"><a href="#zakres">Zakres współpracy</a><a href="#szczegoly">Jak pracujemy</a><a href="#faq">Pytania i odpowiedzi</a><a href="#kontakt-oferta">Porozmawiajmy <ArrowUpRight aria-hidden="true" className="inline w-4 h-4" /></a></nav>
    </div>

    <section id="zakres" className="bg-muted/30 border-y border-border py-12 md:py-16 scroll-mt-28" aria-labelledby="zakres-title">
      <div className="container-wide px-6 md:px-12">
        <p className="dv-eyebrow mb-3">Co obejmuje współpraca</p>
        <h2 id="zakres-title" className="text-3xl md:text-4xl font-heading mb-8">{scopeTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{scope.map((item, index) => <article key={item.title} className="offer-scope-item border-t border-border p-6 flex flex-col">
          <span aria-hidden="true" className="font-mono text-sm text-primary mb-7">{String(index + 1).padStart(2, "0")}</span><h3 className="text-xl font-heading mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{item.text}</p>
          {item.href && <Link to={item.href} className="underline underline-offset-4 mt-auto">{item.link}</Link>}
        </article>)}</div>
      </div>
    </section>

    {workAfterScope && <SelectedWork />}

    <div id="szczegoly" className="container-wide px-6 md:px-12 py-12 md:py-16 scroll-mt-28">
      {sections.map((item, index) => <section key={item.title} className="grid md:grid-cols-[1fr_1.4fr] gap-5 md:gap-12 py-8 border-b border-border first:pt-0">
        <div><p aria-hidden="true" className="text-sm text-primary mb-3">{String(index + 1).padStart(2, "0")}</p><h2 className="text-2xl md:text-3xl font-heading">{item.title}</h2></div>
        <div><p className="text-muted-foreground leading-relaxed">{item.text}</p>{item.points && <ul className="mt-5 space-y-3 text-muted-foreground list-disc pl-5">{item.points.map(point => <li key={point} className="leading-relaxed">{point}</li>)}</ul>}{item.href && <Link to={item.href} className="inline-flex items-center gap-2 underline underline-offset-4 mt-5">{item.link}<ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>}</div>
      </section>)}
    </div>

    <section id="faq" className="container-wide max-w-4xl px-6 md:px-12 pb-12 md:pb-16 scroll-mt-28" aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-3xl font-heading mb-7">{faqTitle}</h2>
      <div className="divide-y divide-border border-y border-border">{faqs.map(item => <details key={item.question} className="group py-5"><summary className="cursor-pointer font-medium text-lg pr-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{item.question}</summary><p className="text-muted-foreground leading-relaxed pt-4">{item.answer}</p></details>)}</div>
    </section>

    <section id="kontakt-oferta" className="container-wide px-6 md:px-12 pb-16 scroll-mt-28">
      <div className="offer-contact p-7 md:p-12 flex flex-wrap items-center justify-between gap-8"><div><p className="dv-eyebrow mb-4">Twój następny krok</p><h2 className="text-3xl md:text-4xl font-heading mb-4">Zacznijmy od Twojej sytuacji.</h2><p className="text-muted-foreground max-w-xl leading-relaxed">{contactDescription}</p></div><Link to={contactHref} className="dv-btn dv-btn-primary">Przejdź do kontaktu <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></div>
    </section>
    </div>
  </Layout>;
}
