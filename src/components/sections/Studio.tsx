import { Link } from "react-router-dom";
import { ArrowUpRight, Video, Monitor, MessageSquare } from "lucide-react";
const steps = [
  { icon: MessageSquare, title: "Zaczynamy od rozmowy", text: "Ustalamy cel, zakres i terminy. Wiesz, co powstanie i kto odpowiada za kolejny krok." },
  { icon: Video, title: "Nagrywamy tam, gdzie działasz", text: "Pokazujemy Twoje produkty, usługi i ludzi. Lokalizację produkcji ustalamy przed zdjęciami." },
  { icon: Monitor, title: "Współpracujemy online", text: "Projekty, uwagi i akceptacje przekazujemy zdalnie. Spotkania umawiamy wcześniej." },
];
export function Studio() { return <section className="bg-background py-24 px-6 md:px-12">
  <div className="max-w-[1440px] mx-auto">
    <p className="dv-eyebrow mb-6">Jak pracujemy</p>
    <h2 className="font-geist text-4xl md:text-6xl max-w-3xl leading-tight">Produkcja u Ciebie.<br/><span className="dv-text-grad italic">Współpraca online.</span></h2>
    <div className="grid md:grid-cols-3 gap-5 my-12">{steps.map(({icon: Icon,title,text})=><article key={title} className="dv-panel p-7"><Icon className="mb-6 text-primary"/><h3 className="text-xl mb-3">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></article>)}</div>
    <Link to="/kontakt" className="dv-btn dv-btn-primary">Porozmawiajmy o projekcie <ArrowUpRight className="w-4 h-4"/></Link>
  </div>
</section>; }
