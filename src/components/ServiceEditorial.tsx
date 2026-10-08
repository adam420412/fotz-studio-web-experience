import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";

interface EditorialSection {
  title: string;
  text: string;
  href?: string;
  link?: string;
}

interface ServiceEditorialProps {
  title: string;
  eyebrow: string;
  lead: string;
  path: string;
  area?: string;
  summary: string[];
  scopeTitle: string;
  scope: EditorialSection[];
  sections: EditorialSection[];
  faqs: { question: string; answer: string }[];
}

/** Shared presentation; each offer keeps its own scope, evidence and answers. */
export function ServiceEditorial({ title, eyebrow, lead, path, area = "Polska", summary, scopeTitle, scope, sections, faqs }: ServiceEditorialProps) {
  return <Layout>
    <BreadcrumbSchema items={[{ name: "Strona główna", url: "/" }, { name: "Usługi", url: "/uslugi" }, { name: title, url: path }]} />
    <ServiceSchema name={title} description={lead} areaServed={area} />
    <FAQSchema items={faqs} />
    <PageBreadcrumbs items={[{ name: "Usługi", url: "/uslugi" }, { name: title }]} />

    <section className="container-wide px-6 md:px-12 pt-6 pb-12 md:py-16">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-center">
        <div>
          <p className="dv-eyebrow mb-4">{eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading leading-tight mb-6">{title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{lead}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/kontakt" className="dv-btn dv-btn-primary">Porozmawiajmy o projekcie <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
            <a href="#zakres" className="dv-btn dv-btn-secondary">Zobacz zakres</a>
          </div>
        </div>
        <aside className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <p className="text-sm text-primary uppercase tracking-wider mb-6">Punkt wyjścia do współpracy</p>
          <ol className="space-y-6">{summary.map((text, index) => <li key={text} className="flex gap-4"><span aria-hidden="true" className="text-2xl font-heading text-primary tabular-nums shrink-0 whitespace-nowrap">0{index + 1}</span><p className="leading-relaxed">{text}</p></li>)}</ol>
          <p className="text-sm text-muted-foreground border-t border-border pt-5 mt-6">Zakres, koszt i termin ustalamy przed rozpoczęciem prac.</p>
        </aside>
      </div>
    </section>

    <section id="zakres" className="bg-muted/30 border-y border-border py-12 md:py-16 scroll-mt-28" aria-labelledby="zakres-title">
      <div className="container-wide px-6 md:px-12">
        <p className="dv-eyebrow mb-3">Co obejmuje współpraca</p>
        <h2 id="zakres-title" className="text-3xl md:text-4xl font-heading mb-8">{scopeTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{scope.map(item => <article key={item.title} className="rounded-2xl border border-border bg-background p-6 flex flex-col">
          <Check aria-hidden="true" className="w-5 h-5 text-primary mb-5" /><h3 className="text-xl font-heading mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{item.text}</p>
          {item.href && <Link to={item.href} className="underline underline-offset-4 mt-auto">{item.link}</Link>}
        </article>)}</div>
      </div>
    </section>

    <div className="container-wide px-6 md:px-12 py-12 md:py-16">
      {sections.map((item, index) => <section key={item.title} className="grid md:grid-cols-[1fr_1.4fr] gap-5 md:gap-12 py-8 border-b border-border first:pt-0">
        <div><p aria-hidden="true" className="text-sm text-primary mb-3">0{index + 1}</p><h2 className="text-2xl md:text-3xl font-heading">{item.title}</h2></div>
        <div><p className="text-muted-foreground leading-relaxed">{item.text}</p>{item.href && <Link to={item.href} className="inline-flex items-center gap-2 underline underline-offset-4 mt-5">{item.link}<ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>}</div>
      </section>)}
    </div>

    <section className="container-wide max-w-4xl px-6 md:px-12 pb-12 md:pb-16" aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-3xl font-heading mb-7">Przed rozpoczęciem współpracy</h2>
      <div className="divide-y divide-border border-y border-border">{faqs.map(item => <details key={item.question} className="group py-5"><summary className="cursor-pointer font-medium text-lg pr-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{item.question}</summary><p className="text-muted-foreground leading-relaxed pt-4">{item.answer}</p></details>)}</div>
    </section>

    <section className="container-wide px-6 md:px-12 pb-16">
      <div className="rounded-3xl border border-border bg-card p-6 md:p-10 flex flex-wrap items-center justify-between gap-6"><div><h2 className="text-2xl md:text-3xl font-heading mb-3">Zacznijmy od Twojej sytuacji.</h2><p className="text-muted-foreground max-w-xl">Prześlij adres strony, opisz cel i wskaż, co chcesz zmienić. Na tej podstawie ustalimy następny krok.</p></div><Link to="/kontakt" className="dv-btn dv-btn-primary">Przejdź do kontaktu <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></div>
    </section>
  </Layout>;
}
