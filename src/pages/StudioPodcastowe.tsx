import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArrowUpRight } from "lucide-react";
export default function StudioPodcastowe() { return <>
  <SEOHead title="Produkcja podcastów i wywiadów | FOTZ Studio" description="Nagrania podcastów i wywiadów w uzgodnionej lokalizacji. Koncepcja, realizacja i montaż. Zapytaj FOTZ Studio o zakres i wycenę." canonical="https://fotz.pl/uslugi/studio-podcastowe" />
  <Layout><section className="pt-36 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
    <p className="dv-eyebrow mb-8">Podcasty i wywiady</p><h1 className="text-5xl md:text-7xl font-geist leading-tight mb-8">Twoja wiedza.<br/><span className="dv-text-grad italic">Dobry materiał.</span></h1>
    <p className="text-xl text-muted-foreground max-w-2xl mb-10">Pomagamy przygotować i zrealizować podcast, wywiad lub serię materiałów eksperckich. Nagrania organizujemy u Ciebie albo w uzgodnionej lokalizacji.</p>
    <Link className="dv-btn dv-btn-primary" to="/kontakt">Zapytaj o produkcję <ArrowUpRight size={18}/></Link>
    <div className="grid md:grid-cols-3 gap-5 my-16">{[["Przygotowanie", "Ustalamy temat, format, plan rozmowy i warunki nagrania."],["Nagranie", "Dobieramy miejsce oraz zakres realizacji audio i wideo do projektu."],["Montaż", "Składamy odcinek. Krótkie wersje do social media możemy uwzględnić w wycenie."]].map(([title,text])=><article className="dv-panel p-7" key={title}><h2 className="text-2xl mb-4">{title}</h2><p className="text-muted-foreground">{text}</p></article>)}</div>
    <h2 className="text-3xl mb-5">Zakres i lokalizacja przed nagraniem</h2><p className="text-muted-foreground max-w-3xl mb-6">Nie prowadzimy obecnie wynajmu własnego studia. Jeśli projekt wymaga osobnego pomieszczenia nagraniowego, jego dostępność i koszt ustalimy przed przyjęciem zlecenia. Termin, liczbę odcinków i zakres montażu potwierdzamy w indywidualnej ofercie.</p>
    <Link to="/kontakt" className="dv-btn dv-btn-secondary">Opowiedz o swoim pomyśle</Link>
  </section></Layout></>; }
