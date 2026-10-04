import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { QuoteOptions, type QuoteOption } from "@/components/QuoteOptions";
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { StartOffers } from "@/components/StartOffers";
export interface QuotePageProps { heading:string; intro:string; path:string; options:QuoteOption[]; factors:{title:string;text:string}[]; faqs:{question:string;answer:string}[] }
export function QuotePage({heading,intro,path,options,factors,faqs}:QuotePageProps) {
 return <Layout><BreadcrumbSchema items={[{name:'Strona główna',url:'https://www.fotz-studio.pl'},{name:heading,url:`https://www.fotz-studio.pl${path}`}]} /><FAQSchema items={faqs} />
 <section className="container mx-auto px-6 pt-32 pb-14 max-w-6xl"><p className="dv-eyebrow mb-4">Zakres i wycena</p><h1 className="text-4xl md:text-6xl font-heading max-w-4xl mb-6">{heading}</h1><p className="text-lg text-muted-foreground max-w-3xl mb-7">{intro}</p><div className="flex flex-wrap gap-3"><Link className="dv-btn dv-btn-primary" to="/kontakt">Wyślij brief do wyceny</Link><Link className="dv-btn dv-btn-secondary" to="/konsultacja">Omów projekt w 15 minut</Link></div></section>
 {['/cennik','/cennik-stron-internetowych','/cennik-tworzenia-stron'].includes(path) && <StartOffers websiteOnly={path !== '/cennik'} />}
 <section className="container mx-auto px-6 py-10 max-w-6xl"><h2 className="text-3xl font-heading mb-7">Zakres dopasowany do projektu</h2><QuoteOptions options={options} /></section>
 <section className="container mx-auto px-6 py-12 max-w-6xl"><h2 className="text-3xl font-heading mb-7">Co wpływa na wycenę?</h2><div className="grid md:grid-cols-3 gap-6">{factors.map(f=><article key={f.title}><h3 className="text-xl mb-3">{f.title}</h3><p className="text-muted-foreground">{f.text}</p></article>)}</div></section>
 <section className="container mx-auto px-6 py-12 max-w-4xl"><h2 className="text-3xl font-heading mb-7">Przed wysłaniem zapytania</h2><ol className="list-decimal pl-5 space-y-3 text-muted-foreground"><li>Opisz ofertę, odbiorców i cel projektu.</li><li>Dołącz adres obecnej strony lub profili oraz materiały, które już masz.</li><li>Podaj potrzebne formaty, integracje i preferowany termin.</li><li>Jeśli masz budżet, zaznacz osobno produkcję, obsługę i emisję reklam.</li></ol><p className="mt-6">Na tej podstawie ustalamy zakres i warunki. Sama rozmowa nie zobowiązuje do zakupu.</p></section>
 <section className="container mx-auto px-6 py-12 max-w-4xl"><h2 className="text-3xl font-heading mb-7">Pytania o koszty</h2>{faqs.map(f=><details key={f.question} className="border-b border-border py-5"><summary className="cursor-pointer font-medium">{f.question}</summary><p className="text-muted-foreground mt-4 leading-relaxed">{f.answer}</p></details>)}<p className="mt-8"><Link className="underline underline-offset-4" to="/realizacje">Zobacz realizacje</Link> · <Link className="underline underline-offset-4" to="/kontakt">Zapytaj o swój projekt</Link></p></section>
 </Layout>;
}
