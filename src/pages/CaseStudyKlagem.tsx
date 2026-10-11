import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { ProjectCasePage } from '@/components/ProjectCasePage';
import { enquiryHref } from '@/lib/enquiry.mjs';

export default function CaseStudyKlagem() {
  return <>
    <SEOHead title="Konfigurator mebli 3D KLAGEM — realizacja | FOTZ Studio" description="Konfigurator 3D KLAGEM: meble modułowe, wybór wymiarów i kolorów, zapis projektu oraz orientacyjna wycena. Zobacz realizację FOTZ i działające narzędzie." canonical="https://www.fotz-studio.pl/realizacje/klagem" ogImage="https://www.fotz-studio.pl/work/klagem-configurator-1280.webp" />
    <ProjectCasePage name="KLAGEM — konfigurator mebli 3D" category="Konfigurator produktów · strona i prezentacja marki" intro="Od pomysłu na mebel do konkretnej konfiguracji. Dla KLAGEM stworzyliśmy narzędzie, w którym klient dobiera moduły, wymiary i kolory, ogląda projekt w 3D oraz sprawdza orientacyjną wycenę." image="/work/klagem-configurator-1280.webp" path="/realizacje/klagem" sections={[
      { title: 'Produkt z wieloma wariantami', text: 'KLAGEM to system mebli modułowych. Pojedyncze zdjęcie nie pokazuje wszystkich możliwych układów. Konfigurator pozwala zacząć od gotowej kompozycji lub dopasować mebel do własnych potrzeb.' },
      { title: 'Wybór widoczny w 3D', text: 'Użytkownik wybiera moduły, ich formę, wymiary i kolory. Podgląd można obracać, przybliżać i oglądać z różnych stron, a wymiary całej konfiguracji są widoczne przy projekcie.' },
      { title: 'Projekt do dalszej rozmowy', text: 'Zapis i wczytanie projektu pozwalają wrócić do wybranego układu. Podsumowanie oraz orientacyjna wycena ułatwiają sprecyzowanie zapytania. Końcowe warunki zamówienia potwierdza KLAGEM.' },
    ]} related={[{ label: 'Strony internetowe', path: '/uslugi/strony-internetowe' }, { label: 'Sklepy i konfiguratory', path: '/uslugi/strony-internetowe/ecommerce' }]}>
      <section className="rounded-2xl border border-border bg-muted/20 p-6 md:p-8">
        <h2 className="font-heading text-2xl md:text-3xl mb-4">Sprawdź konfigurator na żywo.</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Otwórz gotowy układ, zmień kolor lub wymiary i zobacz podsumowanie. Demonstracja działa na stronie KLAGEM — przedstawiony powyżej obraz jest rzeczywistym widokiem narzędzia.</p>
        <div className="flex flex-wrap gap-3"><a className="dv-btn dv-btn-primary" href="https://klagem.pl/konfigurator/" target="_blank" rel="noopener noreferrer">Otwórz konfigurator KLAGEM<span className="sr-only"> — nowa karta</span> ↗</a><Link className="dv-btn dv-btn-secondary" to={enquiryHref('web','configurator')}>Chcę podobny konfigurator</Link></div>
      </section>
      <section className="py-12">
        <h2 className="font-heading text-3xl mb-5">Co ustalamy przy podobnym wdrożeniu?</h2>
        <ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed"><li>Dostępne produkty, moduły i dozwolone połączenia.</li><li>Modele 3D, materiały, kolory i sposób prezentacji wymiarów.</li><li>Reguły wyceny oraz to, kto aktualizuje dane produktowe.</li><li>Zapis projektu i przekazanie konfiguracji do formularza, sklepu lub CRM — zależnie od uzgodnionego procesu.</li><li>Sprawdzenie działania na telefonach i komputerach oraz zasady dalszej opieki.</li></ul>
        <p className="mt-5 text-muted-foreground">Konfigurator wyceniamy indywidualnie po poznaniu produktu. <Link to="/blog/wizualizacje-3d-ecommerce" className="underline underline-offset-4">Przeczytaj, jak przygotować się do wdrożenia 3D w e-commerce.</Link></p>
      </section>
    </ProjectCasePage>
  </>;
}
