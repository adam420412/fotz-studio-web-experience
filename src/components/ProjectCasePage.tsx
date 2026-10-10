import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
interface ProjectCasePageProps { name:string; category:string; intro:string; image:string; path:string; sections:{title:string;text:string}[]; children?:ReactNode; gallery?:{src:string;alt:string}[]; related:{label:string;path:string}[] }
export function ProjectCasePage({name,category,intro,image,path,sections,gallery=[],related,children}:ProjectCasePageProps) {
 return <Layout><BreadcrumbSchema items={[{name:'Strona główna',url:'https://www.fotz-studio.pl'},{name:'Realizacje',url:'https://www.fotz-studio.pl/realizacje'},{name,url:`https://www.fotz-studio.pl${path}`}]} />
 <article className="container mx-auto max-w-6xl px-6 pt-32 pb-20"><Link to="/realizacje" className="text-sm underline underline-offset-4">← Wszystkie realizacje</Link><p className="dv-eyebrow mt-8 mb-5">{category}</p><h1 className="text-4xl md:text-6xl font-heading mb-6">{name}</h1><p className="text-xl text-muted-foreground max-w-3xl mb-10">{intro}</p><img src={image} alt={`${name} — materiał z portfolio FOTZ Studio`} className="w-full rounded-2xl border border-border" width="1200" height="675" />
 <div className="grid md:grid-cols-3 gap-8 py-14">{sections.map(x=><section key={x.title}><h2 className="text-2xl font-heading mb-4">{x.title}</h2><p className="text-muted-foreground leading-relaxed">{x.text}</p></section>)}</div>
 {children}
 {gallery.length>0&&<section><h2 className="text-3xl font-heading mb-7">Materiały z projektu</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{gallery.map(x=><figure key={x.src}><img className="aspect-[4/3] object-cover w-full rounded-xl" src={x.src} alt={x.alt} loading="lazy" width="600" height="450" /><figcaption className="text-sm text-muted-foreground mt-3">{x.alt}</figcaption></figure>)}</div></section>}
 <section className="mt-12 py-8 border-y border-border"><h2 className="text-2xl font-heading mb-5">Potrzebujesz podobnego zakresu?</h2><p className="text-muted-foreground mb-6">Opisz cel projektu i materiały, których potrzebujesz. Dobierzemy zakres prac i sposób prezentacji Twojej oferty.</p><div className="flex flex-wrap gap-3">{related.map(x=><Link className="dv-btn dv-btn-secondary" key={x.path} to={x.path}>{x.label}</Link>)}<Link className="dv-btn dv-btn-primary" to="/kontakt">Porozmawiajmy o projekcie</Link></div></section>
 </article></Layout>;
}
