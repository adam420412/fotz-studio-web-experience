import { Link } from "react-router-dom";
import { ArrowUpRight, Globe, Search, MessageCircle, Video, Target, Palette, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { business } from "@/data/business.mjs";
import fpsImage from "@/assets/portfolio/fps-cegielski.png";

const services = [
  {
    id: "strony", icon: Globe, title: "Strony internetowe i sklepy", audience: "Chcesz lepiej przedstawić ofertę lub sprzedawać online.",
    description: "Projektujemy strukturę, wygląd i funkcje strony. Dbamy o wersję mobilną, treść, formularze oraz podstawy technicznego SEO.",
    items: ["Strony firmowe i landing pages", "Sklepy internetowe", "Integracje i ścieżka kontaktu"],
    links: [{ label: "Strony internetowe", path: "/uslugi/strony-internetowe" }, { label: "Sklepy internetowe", path: "/uslugi/sklepy-internetowe" }],
  },
  {
    id: "seo", icon: Search, title: "SEO i treści", audience: "Chcesz ułatwić klientom znalezienie Twojej oferty.",
    description: "Zaczynamy od strony i danych Search Console. Porządkujemy błędy techniczne, treści i linkowanie, a priorytety dobieramy do oferty firmy.",
    items: ["Audyt techniczny i analiza treści", "Pozycjonowanie stron", "Plan i redakcja treści"],
    links: [{ label: "Audyt SEO", path: "/seo/audyt" }, { label: "Pozycjonowanie", path: "/seo/pozycjonowanie" }, { label: "Strategia treści", path: "/content-marketing/strategia" }],
  },
  {
    id: "social-media", icon: MessageCircle, title: "Social media", audience: "Potrzebujesz regularnej, spójnej komunikacji marki.",
    description: "Ustalamy tematy, formaty i rytm publikacji. Przygotowujemy zdjęcia, grafiki i krótkie filmy dopasowane do wybranych kanałów.",
    items: ["Strategia i plan publikacji", "Treści na profile marki", "Obsługa kanałów i raportowanie"],
    links: [{ label: "Obsługa social media", path: "/agencja-social-media" }],
  },
  {
    id: "video", icon: Video, title: "Video i fotografia", audience: "Chcesz pokazać produkt, ludzi, miejsce lub wydarzenie.",
    description: "Od pomysłu i planu nagrań po zdjęcia, montaż i wersje do publikacji. Dobieramy formaty do strony, social media i kampanii.",
    items: ["Filmy firmowe, spoty i rolki", "Zdjęcia biznesowe i wydarzenia", "Ujęcia z drona"],
    links: [{ label: "Produkcja video", path: "/uslugi/produkcja-video" }, { label: "Fotografia", path: "/uslugi/fotografia" }, { label: "Zdjęcia z drona", path: "/uslugi/fotografia-z-drona" }],
  },
  {
    id: "kampanie", icon: Target, title: "Kampanie reklamowe", audience: "Chcesz dotrzeć z konkretną ofertą do wybranych odbiorców.",
    description: "Łączymy kreację, stronę docelową i pomiar zapytań. Budżet emisji omawiamy oddzielnie od przygotowania i obsługi kampanii.",
    items: ["Google Ads i Meta Ads", "Materiały reklamowe", "Pomiar i optymalizacja kampanii"],
    links: [{ label: "Kampanie reklamowe", path: "/kampanie-reklamowe" }, { label: "Google Ads", path: "/performance-marketing/google-ads" }, { label: "Meta Ads", path: "/performance-marketing/meta-ads" }],
  },
  {
    id: "identyfikacja", icon: Palette, title: "Identyfikacja i materiały wizualne", audience: "Potrzebujesz spójnego wyglądu marki i jej materiałów.",
    description: "Projektujemy identyfikację, grafiki i materiały prezentujące ofertę. Zakres dopasowujemy do tego, gdzie marka będzie się pojawiać.",
    items: ["Logo i identyfikacja wizualna", "Materiały do druku i online", "Wizualizacje 3D"],
    links: [{ label: "Branding", path: "/uslugi/branding" }, { label: "Obsługa graficzna", path: "/agencja-graficzna" }, { label: "Wizualizacje 3D", path: "/wizualizacje-3d" }],
  },
];
const examples = [
  { title: "FPS Poznań", scope: "Strona internetowa", image: fpsImage, path: "/realizacje/fps-cegielski" },
  { title: "Enea Stadion", scope: "Komunikacja i materiały video", image: "/videos/enea-stadion-cover.webp", path: "/realizacje/enea-stadion" },
  { title: "Dawid EDU", scope: "Kampania rekrutacyjna Meta Ads", image: "/case-studies/dawid-edu/ed-a.webp", path: "/realizacje/dawid-edu" },
];

export default function Uslugi() {
  return (
    <Layout>
      <OrganizationSchema />
      <SEOHead title="Usługi FOTZ Studio — strony, SEO, social media i video" description="Wybierz zakres współpracy z FOTZ Studio: strony i sklepy, SEO, social media, filmy, zdjęcia, reklamy i branding. Zobacz realizacje i przygotuj brief." canonical="https://www.fotz-studio.pl/uslugi" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl/" }, { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" }]} />
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-border">
        <div className="container-wide px-6 md:px-12 grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-16 items-center">
          <div>
            <p className="dv-eyebrow mb-5">Usługi FOTZ Studio</p>
            <h1 className="text-[clamp(42px,5.6vw,76px)] leading-[1.05] tracking-[-.045em]">Czego potrzebuje<br /><span className="dv-text-grad italic">Twoja marka?</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">Strony, treści i reklamy powinny prowadzić do jednego celu. Możemy przygotować pojedynczy materiał albo połączyć kilka obszarów w spójny plan.</p>
            <div className="flex flex-wrap gap-3 mt-7"><a href="#zakres" className="dv-btn dv-btn-primary">Wybierz usługę <ArrowUpRight className="w-4 h-4" /></a><Link to={business.consultationPath} className="dv-btn dv-btn-secondary">Konsultacja 15 min</Link></div>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl mb-5">Zacznij od swojego celu</h2>
            <ul className="divide-y divide-border">
              {[
                { label: "Potrzebuję nowej strony lub sklepu", href: "#strony" },
                { label: "Chcę poprawić widoczność w Google", href: "#seo" },
                { label: "Potrzebuję treści, zdjęć lub filmu", href: "#video" },
                { label: "Chcę uruchomić kampanię reklamową", href: "#kampanie" },
              ].map(item => <li key={item.href}><a href={item.href} className="flex justify-between items-center gap-4 py-4 text-sm hover:underline underline-offset-4">{item.label}<ArrowUpRight aria-hidden="true" className="w-4 h-4 shrink-0" /></a></li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section id="zakres" aria-labelledby="services-heading" className="py-12 md:py-16">
        <div className="container-wide px-6 md:px-12">
          <p className="dv-eyebrow mb-3">Zakres współpracy</p><h2 id="services-heading" className="text-3xl md:text-4xl mb-8">Wybierz obszar, który chcesz rozwinąć</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map(service => <article key={service.id} id={service.id} className="flex flex-col rounded-2xl border border-border bg-card p-6 md:p-7">
              <service.icon aria-hidden="true" className="w-7 h-7 text-muted-foreground mb-5" />
              <h3 className="text-2xl mb-3">{service.title}</h3>
              <p className="font-medium text-sm leading-relaxed mb-3">{service.audience}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2 mb-7">{service.items.map(item => <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><Check aria-hidden="true" className="w-4 h-4 mt-0.5 shrink-0" />{item}</li>)}</ul>
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-3 border-t border-border pt-5">{service.links.map(link => <Link key={link.path} to={link.path} className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground">{link.label}</Link>)}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section aria-labelledby="work-heading" className="py-12 md:py-16 bg-muted/30 border-y border-border">
        <div className="container-wide px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-8"><div><p className="dv-eyebrow mb-3">Zobacz zakres w praktyce</p><h2 id="work-heading" className="text-3xl md:text-4xl">Wybrane realizacje</h2></div><Link to="/realizacje" className="underline underline-offset-4">Wszystkie realizacje</Link></div>
          <div className="grid md:grid-cols-3 gap-5">{examples.map(project => <Link key={project.path} to={project.path} className="overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><img src={project.image} alt="" className="aspect-video w-full object-cover object-top" width="720" height="405" loading="lazy" /><div className="p-5"><p className="text-sm text-muted-foreground mb-2">{project.scope}</p><h3 className="text-xl flex justify-between gap-3 items-center">{project.title}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></h3></div></Link>)}</div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-wide px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-16">
          <div><p className="dv-eyebrow mb-4">Ustalmy zakres</p><h2 className="text-3xl md:text-4xl mb-5">Co pomoże przygotować wycenę?</h2><p className="text-muted-foreground leading-relaxed mb-5">Opisz ofertę i odbiorców, podaj link do obecnej strony lub profili oraz planowany termin. Wskaż materiały, które już masz, i te, które trzeba przygotować.</p><p className="text-muted-foreground leading-relaxed">{business.quote} <Link to={business.pricingPath} className="text-foreground underline underline-offset-4">Zobacz cennik i zakres pakietów START.</Link></p></div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8"><h3 className="text-2xl mb-4">Omówmy Twój projekt</h3><p className="text-muted-foreground leading-relaxed mb-6">Pierwsza konsultacja trwa 15 minut. Możesz też przesłać opis projektu w formularzu — pomoże nam przygotować się do rozmowy.</p><div className="flex flex-wrap gap-3"><Link to={business.consultationPath} className="dv-btn dv-btn-primary">Umów konsultację</Link><Link to="/kontakt" className="dv-btn dv-btn-secondary">Opisz projekt</Link></div><Link to="/generator-briefu" className="inline-block mt-5 text-sm underline underline-offset-4">Pomóż sobie generatorem briefu</Link></div>
        </div>
      </section>
    </Layout>
  );
}
