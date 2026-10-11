import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { enquiryHref } from '@/lib/enquiry.mjs';

export function KlagemConfigurator() {
  return <section id="konfigurator-klagem" aria-labelledby="klagem-heading" className="scroll-mt-28 border-y border-border bg-muted/20">
    <div className="container-wide px-6 md:px-12 py-12 md:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div>
        <p className="dv-eyebrow mb-4">Nasza realizacja · KLAGEM</p>
        <h2 id="klagem-heading" className="font-heading text-3xl md:text-4xl leading-tight mb-5">Produkt, który klient może skonfigurować w 3D.</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">Dla KLAGEM przygotowaliśmy konfigurator mebli modułowych. Klient dobiera układ, wymiary i kolory, ogląda mebel z różnych stron i przechodzi do podsumowania projektu z orientacyjną wyceną.</p>
        <ul className="space-y-2 text-sm leading-relaxed mb-6">
          <li>Moduły i warianty produktu w interaktywnym podglądzie.</li>
          <li>Zapis projektu i powrót do wybranego układu.</li>
          <li>Konfiguracja jako punkt wyjścia do rozmowy o zamówieniu.</li>
        </ul>
        <div className="flex flex-wrap gap-3 mb-4">
          <Link to="/realizacje/klagem" className="dv-btn dv-btn-primary">Poznaj realizację<ArrowUpRight aria-hidden className="w-4 h-4" /></Link>
          <a href="https://klagem.pl/konfigurator/" target="_blank" rel="noopener noreferrer" className="dv-btn dv-btn-secondary">Wypróbuj na klagem.pl<span className="sr-only"> — otwiera nową kartę</span><ArrowUpRight aria-hidden className="w-4 h-4" /></a>
        </div>
        <Link to={enquiryHref('web', 'configurator')} className="inline-block py-2 underline underline-offset-4 text-sm">Porozmawiajmy o konfiguratorze Twoich produktów →</Link>
      </div>
      <figure>
        <Link to="/realizacje/klagem" aria-label="Poznaj konfigurator 3D KLAGEM">
          <img src="/work/klagem-configurator-800.webp" srcSet="/work/klagem-configurator-480.webp 480w, /work/klagem-configurator-800.webp 800w, /work/klagem-configurator-1280.webp 1280w" sizes="(min-width: 1024px) 46vw, 90vw" width="1280" height="720" loading="lazy" decoding="async" alt="Konfigurator KLAGEM: regał z trzech modułów, panel wymiarów i orientacyjna wycena" className="w-full h-auto rounded-2xl border border-border" />
        </Link>
        <figcaption className="text-xs text-muted-foreground mt-3 leading-relaxed">Rzeczywisty widok konfiguratora KLAGEM. Cena dotyczy pokazanego mebla; aktualną wycenę sprawdzisz w konfiguratorze.</figcaption>
      </figure>
    </div>
  </section>;
}
