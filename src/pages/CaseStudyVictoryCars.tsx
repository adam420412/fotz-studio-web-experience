import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { enquiryHref } from "@/lib/enquiry.mjs";
import victoryCarsImg from "@/assets/portfolio/victory-cars-web.webp";

export default function CaseStudyVictoryCars() {
  return <Layout>
    <SEOHead title="Victory Cars — strona i katalog pojazdów | FOTZ Studio" description="Projekt strony internetowej Victory Cars. Zobacz prezentację marki motoryzacyjnej i katalogu pojazdów w portfolio FOTZ Studio." canonical="https://www.fotz-studio.pl/realizacje/victory-cars" ogImage="https://www.fotz-studio.pl/work/portfolio/portfolio-victory-cars-web-960.webp" />
    <BreadcrumbSchema items={[{name:"Strona główna",url:"/"},{name:"Realizacje",url:"/realizacje"},{name:"Victory Cars",url:"/realizacje/victory-cars"}]} />
    <section className="container-wide px-6 md:px-12 pt-32 pb-16">
      <Link to="/realizacje" className="inline-flex items-center gap-2 text-muted-foreground mb-8"><ArrowLeft aria-hidden className="w-4 h-4" />Wróć do realizacji</Link>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <div><p className="dv-eyebrow mb-5">FOTZ Studio · projekt strony internetowej</p><h1 className="text-4xl md:text-6xl font-heading mb-6">Victory Cars</h1><p className="text-lg text-muted-foreground leading-relaxed mb-7">Strona internetowa i katalog pojazdów dla marki motoryzacyjnej. Projekt łączy prezentację samochodów z wyrazistą identyfikacją Victory Cars.</p><Link to={enquiryHref("web","website")} className="dv-btn dv-btn-primary">Omów projekt swojej strony <ArrowUpRight aria-hidden className="w-4 h-4" /></Link></div>
        <figure><img src={victoryCarsImg} alt="Projekt strony Victory Cars na ekranie komputera: ciemna oprawa, samochód i złoty logotyp marki" width={1200} height={900} fetchPriority="high" className="w-full rounded-2xl border border-border" /><figcaption className="text-sm text-muted-foreground mt-3">Prezentacja projektu strony Victory Cars z portfolio FOTZ Studio.</figcaption></figure>
      </div>
    </section>
    <section className="container-wide px-6 md:px-12 pb-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-14 border-t border-border pt-10">
        <div><h2 className="text-2xl md:text-3xl font-heading mb-5">Samochód w centrum prezentacji</h2><p className="text-muted-foreground leading-relaxed">Duży kadr pojazdu, ciemna oprawa i złoty znak marki tworzą charakter pierwszego widoku. Projekt pokazuje, jak połączyć rozpoznawalny styl firmy z prezentacją jej oferty.</p></div>
        <div><h2 className="text-2xl md:text-3xl font-heading mb-5">Strona i katalog pojazdów</h2><p className="text-muted-foreground leading-relaxed">Zakres prezentowany w portfolio obejmuje stronę internetową oraz katalog samochodów. Przy podobnym zleceniu zaczynamy od ustalenia informacji o pojazdach, dostępnych materiałów i sposobu aktualizacji oferty. Osobno rozpisujemy potrzebne funkcje oraz integracje.</p></div>
      </div>
    </section>
    <section className="container-wide px-6 md:px-12 pb-16">
      <div className="rounded-3xl bg-card border border-border p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-heading mb-5">Planujesz stronę dla swojej firmy?</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-7">Prześlij obecną stronę lub opisz ofertę, materiały i sposób obsługi klientów. Ustalimy strukturę, zakres katalogu oraz funkcje potrzebne do kontaktu. Wycena rozdzieli projekt, wdrożenie i późniejszą opiekę.</p>
        <div className="flex flex-wrap gap-4"><Link to={enquiryHref("web","website")} className="dv-btn dv-btn-primary">Opisz projekt do wyceny</Link><Link to="/uslugi/strony-internetowe" className="dv-btn dv-btn-secondary">Zakres projektowania stron</Link><Link to="/realizacje" className="dv-btn dv-btn-secondary">Pozostałe realizacje</Link></div>
      </div>
    </section>
  </Layout>;
}
