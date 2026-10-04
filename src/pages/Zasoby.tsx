import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ArrowUpRight, FileText } from "lucide-react";

const guides = [
  {title: "Jak porównać agencje social media", text: "Zakres współpracy, pytania do zespołu i informacje potrzebne przed rozmową.", href: "/blog/agencja-social-media-poznan"},
  {title: "Co wpływa na koszt obsługi profili", text: "Liczba kanałów, formaty treści, produkcja i budżet reklamowy rozpisane osobno.", href: "/blog/agencja-social-media-cennik"},
  {title: "Jak zaplanować stronę internetową", text: "Porównaj zakres strony firmowej, landing page i sklepu przed przygotowaniem wyceny.", href: "/cennik-stron-internetowych"},
];

export default function Zasoby() {
  return <><SEOHead title="Poradniki i generator briefu — FOTZ Studio" description="Przygotuj projekt z FOTZ Studio. Poradniki o stronach i social media oraz generator briefu pomogą określić cel, zakres i materiały do wyceny." canonical="https://www.fotz-studio.pl/zasoby" />
    <BreadcrumbSchema items={[{name:'Strona główna',url:'https://www.fotz-studio.pl'},{name:'Zasoby',url:'https://www.fotz-studio.pl/zasoby'}]} />
    <Layout><div className="container mx-auto px-6 pt-32 pb-20 max-w-5xl">
      <p className="dv-eyebrow mb-4">Materiały FOTZ Studio</p>
      <h1 className="text-4xl md:text-6xl font-heading mb-6">Przygotuj projekt<br /><span className="text-gradient">krok po kroku.</span></h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-10">Zacznij od celu, odbiorców i zakresu. Te narzędzia oraz poradniki pomogą zebrać informacje przed rozmową o stronie, treściach lub kampanii.</p>
      <article className="rounded-2xl border border-border bg-card p-7 md:p-10">
        <FileText className="w-8 h-8 mb-5" aria-hidden /><h2 className="text-2xl font-heading mb-4">Generator briefu</h2>
        <p className="text-muted-foreground max-w-2xl mb-6">Opisz swoją firmę, odbiorców, cel i potrzebne materiały. Zebrane odpowiedzi pomogą przygotować ofertę odpowiadającą Twojemu projektowi.</p>
        <Link className="dv-btn dv-btn-primary" to="/generator-briefu">Przygotuj brief <ArrowUpRight className="w-4 h-4" aria-hidden /></Link>
      </article>
      <h2 className="text-3xl font-heading mt-12 mb-6">Przeczytaj przed rozmową</h2>
      <div className="grid md:grid-cols-3 gap-6">{guides.map(guide => <Link key={guide.href} to={guide.href} className="p-6 rounded-xl border border-border hover:bg-card"><h3 className="text-xl mb-3">{guide.title}</h3><p className="text-muted-foreground leading-relaxed">{guide.text}</p><ArrowUpRight className="mt-4" aria-hidden /></Link>)}</div>
      <p className="mt-10"><Link className="underline underline-offset-4" to="/konsultacja">Omów projekt podczas konsultacji 15 minut</Link></p>
    </div></Layout></>;
}
