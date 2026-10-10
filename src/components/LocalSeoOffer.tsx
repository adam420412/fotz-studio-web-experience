import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { workImages } from "@/data/selected-work.mjs";
import imageVariants from "@/data/selected-work-images.json";

interface OfferSection { title: string; text: string }
export interface LocalSeoOfferProps {
  path: string;
  city: string;
  cityGenitive: string;
  title: string;
  description: string;
  lead: string;
  hero: { image: keyof typeof imageVariants; caption: string };
  scope: (OfferSection & { href: string; link: string })[];
  examplesTitle: string;
  examplesIntro: string;
  examples: (OfferSection & { measure: string })[];
  planning: OfferSection[];
  faqs: { question: string; answer: string }[];
}

/** Presentation shared by reviewed offers; scope and examples belong to each page. */
export function LocalSeoOffer(props: LocalSeoOfferProps) {
  const { city, cityGenitive, path, hero, scope, examples, planning, faqs } = props;
  const variants = imageVariants[hero.image];
  const cover = variants[1];
  const work = workImages[hero.image];
  return <Layout workPlacement="manual">
    <ServiceSchema name={`Pozycjonowanie stron — ${city}`} description={props.lead} areaServed={city} />
    <FAQSchema items={faqs} />
    <BreadcrumbSchema items={[{ name: "Strona główna", url: "/" }, { name: "SEO", url: "/seo" }, { name: `Pozycjonowanie ${city}`, url: path }]} />
    <PageBreadcrumbs items={[{ name: "SEO", url: "/seo" }, { name: `Pozycjonowanie ${city}` }]} />

    <section className="container-wide px-6 md:px-12 pt-6 pb-14 md:py-16">
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <p className="dv-eyebrow mb-5">FOTZ Studio · SEO dla firm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading leading-tight mb-6">Pozycjonowanie stron{" "}<span className="block text-gradient">{city}.</span></h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{props.lead}</p>
          <p className="text-sm text-muted-foreground mt-5">Obsługa firm z {cityGenitive} · zespół w Poznaniu · współpraca zdalna</p>
          <div className="flex flex-wrap gap-3 mt-8"><Link to="/kontakt" className="dv-btn dv-btn-primary">Omów pozycjonowanie <ArrowUpRight aria-hidden="true" className="w-4 h-4" /></Link><a href="#zakres" className="dv-btn dv-btn-secondary">Zobacz zakres SEO</a></div>
        </div>
        <figure className="min-w-0">
          <Link to={work.href} className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <img src={cover.src} srcSet={variants.map(item => `${item.src} ${item.width}w`).join(", ")} sizes="(min-width: 1536px) 640px, (min-width: 1024px) 43vw, 90vw" width={cover.width} height={cover.height} alt={work.alt} fetchPriority="high" className="w-full aspect-[4/3] object-cover rounded-2xl border border-border" />
          </Link>
          <figcaption className="mt-4 text-sm text-muted-foreground leading-relaxed">{hero.caption} <Link to={work.href} className="underline underline-offset-4">Zobacz realizację</Link>.</figcaption>
        </figure>
      </div>
    </section>

    <nav aria-label="Na tej stronie" className="container-wide px-6 md:px-12 pb-12"><ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">{[{href:"#zakres", label:"Zakres prac"}, {href:"#plan", label:"Dobór działań"}, {href:"#wycena", label:"Wycena i raport"}, {href:"#faq", label:"Pytania o SEO"}].map(item => <li key={item.href}><a href={item.href} className="underline underline-offset-4">{item.label}</a></li>)}</ul></nav>

    <section id="zakres" className="border-y border-border bg-muted/20 py-14 md:py-20 scroll-mt-28" aria-labelledby="zakres-title">
      <div className="container-wide px-6 md:px-12"><p className="dv-eyebrow mb-4">Od diagnozy do wdrożenia</p><h2 id="zakres-title" className="text-3xl md:text-4xl font-heading mb-5">Co obejmuje pozycjonowanie?</h2><p className="text-muted-foreground max-w-3xl leading-relaxed mb-8">Wybieramy zadania po sprawdzeniu strony i celu firmy. W ofercie zapisujemy priorytety, odpowiedzialność za wdrożenie i sposób odbioru prac.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{scope.map(item => <article key={item.title} className="rounded-2xl border border-border bg-background p-6 flex flex-col"><Check aria-hidden="true" className="w-5 h-5 text-primary mb-5" /><h3 className="text-xl font-heading mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{item.text}</p><Link to={item.href} className="underline underline-offset-4 mt-auto">{item.link}</Link></article>)}</div>
      </div>
    </section>

    <section id="plan" className="container-wide px-6 md:px-12 py-14 md:py-20 scroll-mt-28" aria-labelledby="plan-title">
      <p className="dv-eyebrow mb-4">Plan dopasowany do oferty</p><h2 id="plan-title" className="text-3xl md:text-4xl font-heading mb-5">{props.examplesTitle}</h2><p className="text-muted-foreground max-w-3xl leading-relaxed mb-8">{props.examplesIntro}</p>
      <div className="grid lg:grid-cols-3 gap-5">{examples.map((item, index) => <article key={item.title} className="rounded-2xl border border-border bg-card p-6"><p className="text-sm text-primary mb-4">0{index + 1} · Przykładowa sytuacja</p><h3 className="text-xl font-heading mb-4">{item.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{item.text}</p><p className="border-t border-border pt-5 text-sm leading-relaxed"><span className="font-medium">Co mierzymy: </span>{item.measure}</p></article>)}</div>
    </section>

    <SelectedWork />

    <section id="wycena" className="container-wide px-6 md:px-12 py-14 md:py-20 scroll-mt-28" aria-labelledby="wycena-title">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16"><div><p className="dv-eyebrow mb-4">Zakres, koszt i odpowiedzialność</p><h2 id="wycena-title" className="text-3xl md:text-4xl font-heading mb-6">Jak zaczynamy współpracę?</h2><p className="text-muted-foreground leading-relaxed">Do pierwszej rozmowy wystarczy adres strony, opis oferty, obszar obsługi i cel. Ustalimy, jakie dane są potrzebne do diagnozy oraz kto może wprowadzać zmiany w witrynie.</p><Link to="/kontakt" className="inline-flex gap-2 underline underline-offset-4 mt-6">Prześlij stronę do wyceny <ArrowUpRight aria-hidden="true" className="w-4 h-4" /></Link></div><div className="space-y-7">{planning.map((item, index) => <article key={item.title} className="border-b border-border pb-7"><p className="text-sm text-primary mb-3">0{index + 1}</p><h3 className="text-xl font-heading mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.text}</p></article>)}</div></div>
    </section>

    <section id="faq" className="container-wide max-w-4xl px-6 md:px-12 pb-14 md:pb-20 scroll-mt-28" aria-labelledby="faq-title"><h2 id="faq-title" className="text-3xl font-heading mb-7">Pytania o SEO dla firm z {cityGenitive}</h2><div className="divide-y divide-border border-y border-border">{faqs.map(item => <details key={item.question} className="py-5"><summary className="font-medium cursor-pointer text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{item.question}</summary><p className="text-muted-foreground mt-4 leading-relaxed">{item.answer}</p></details>)}</div></section>

    <section className="container-wide px-6 md:px-12 pb-16"><div className="rounded-3xl bg-card border border-border p-6 md:p-10 flex flex-wrap items-center justify-between gap-6"><div><h2 className="text-2xl md:text-3xl font-heading mb-3">Ustalmy pierwszy krok dla Twojej strony.</h2><p className="text-muted-foreground max-w-xl">Opisz, jakie usługi sprzedajesz i skąd chcesz pozyskiwać zapytania. Przygotujemy propozycję zakresu prac.</p></div><Link to="/kontakt" className="dv-btn dv-btn-primary">Porozmawiajmy o SEO <ArrowUpRight aria-hidden="true" className="w-4 h-4" /></Link></div></section>
  </Layout>;
}
