import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const paths = [
  { title: 'Strona, która pokazuje ofertę', text: 'Nowa witryna, przebudowa lub sklep. Zobacz zakres i projekty FPS, RPPG oraz Klagem.', links: [['Strony i sklepy', '/uslugi/strony-internetowe'], ['Koszt strony', '/cennik-stron-internetowych']] },
  { title: 'Materiały, które pokazują firmę', text: 'Filmy, zdjęcia i rolki. Sama produkcja albo regularne prowadzenie profili.', links: [['Filmy i spoty', '/uslugi/produkcja-filmow'], ['Obsługa social media', '/social-media/obsluga']] },
  { title: 'Widoczność i zapytania', text: 'SEO i plan marketingowy oparty na ofercie firmy. Od diagnozy do wdrożeń i pomiaru kontaktów.', links: [['Pozycjonowanie', '/seo/pozycjonowanie'], ['Obsługa marketingowa', '/agencja-marketingu-internetowego']] },
];
export function ServicePaths() {
  return <section aria-labelledby="service-paths-heading" className="border-y border-border bg-background">
    <div className="container-wide px-6 md:px-12 py-10 md:py-14">
      <h2 id="service-paths-heading" className="font-heading text-2xl md:text-3xl mb-7">Czego potrzebuje Twoja firma?</h2>
      <div className="grid md:grid-cols-3 gap-8">{paths.map((path, i) => <article key={path.title} className="border-t border-border pt-5">
        <span aria-hidden className="font-mono text-sm text-primary">0{i+1}</span>
        <h3 className="font-heading text-xl my-3">{path.title}</h3><p className="text-muted-foreground text-sm leading-relaxed mb-4">{path.text}</p>
        <div className="flex flex-col items-start gap-2">{path.links.map(([label, href]) => <Link key={href} to={href} className="inline-flex gap-2 items-center min-h-10 underline underline-offset-4 text-sm">{label}<ArrowUpRight aria-hidden className="w-4 h-4" /></Link>)}</div>
      </article>)}</div>
    </div>
  </section>;
}
