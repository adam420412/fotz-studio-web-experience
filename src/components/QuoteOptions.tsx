import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { business } from "@/data/business.mjs";

export interface QuoteOption { title: string; description: string; items: string[]; href?: string }
export function QuoteOptions({ options }: { options: QuoteOption[] }) {
  return <div>
    <div className="grid md:grid-cols-3 gap-5">{options.map(option => <article key={option.title} className="rounded-2xl border border-border p-6 md:p-8 bg-card flex flex-col">
      <h3 className="text-2xl font-heading mb-3">{option.title}</h3><p className="text-muted-foreground mb-5">{option.description}</p>
      <p className="text-lg font-semibold mb-5">Wycena indywidualna</p>
      <ul className="space-y-3 mb-6">{option.items.map(item => <li key={item} className="flex gap-2 text-sm"><Check className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden />{item}</li>)}</ul>
      <Link className="dv-btn dv-btn-primary mt-auto" to={option.href || '/kontakt'}>Omów zakres <ArrowUpRight className="w-4 h-4" /></Link>
    </article>)}</div><p className="text-sm text-muted-foreground mt-6">{business.quote}</p>
  </div>;
}
export const websiteOptions: QuoteOption[] = [
  {title:'Landing page',description:'Jedna oferta i jeden cel: zapytanie, zapis lub kontakt.',items:['Układ i treść jednej strony','Projekt na telefon i komputer','Formularz oraz uzgodniony pomiar']},
  {title:'Strona firmowa',description:'Usługi, realizacje i informacje pomagające wybrać Twoją firmę.',items:['Uzgodniona struktura podstron','Zarządzanie treścią dobrane do potrzeb','Podstawy techniczne SEO i testy']},
  {title:'Sklep internetowy',description:'Katalog produktów i ścieżka od wyboru do zamówienia.',items:['Produkty, warianty i kategorie','Uzgodnione płatności oraz dostawa','Testy koszyka i zamówienia']},
];
export const socialOptions: QuoteOption[] = [
  {title:'Strategia i plan',description:'Dla firmy, która chce uporządkować komunikację.',items:['Przegląd obecnych profili','Odbiorcy i tematy publikacji','Plan treści i sposób pomiaru']},
  {title:'Treści i publikacja',description:'Dla marki potrzebującej regularnych materiałów.',items:['Wybrane kanały i formaty','Uzgodniona liczba zdjęć, postów i rolek','Proces akceptacji i harmonogram']},
  {title:'Treści i reklama',description:'Dla firmy łączącej komunikację z płatnymi kampaniami.',items:['Materiały do testów reklamowych','Uzgodniona obsługa kampanii','Raport; budżet emisji rozpisany osobno']},
];
