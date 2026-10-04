import { QuoteOptions } from "@/components/QuoteOptions";
interface PricingItem { title: string; desc: string; price: string; features?: string[]; popular?: boolean }
interface CityPricingCardsProps { pricing: PricingItem[]; title?: string; subtitle?: string; cityName?: string }
export function CityPricingCards({ pricing, title = "Zakres i wycena", cityName = "" }: CityPricingCardsProps) {
  return <section className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-6xl">
    <p className="text-sm text-muted-foreground mb-3">Projekt dla firmy · {cityName}</p><h2 className="text-3xl md:text-4xl font-heading mb-5">{title}</h2>
    <p className="text-muted-foreground mb-8">Poniżej przykładowe zakresy do omówienia. Liczbę podstron, integracje, wsparcie i termin zapisujemy w indywidualnej ofercie.</p>
    <QuoteOptions options={pricing.map(item => ({title:item.title,description:item.desc,items:(item.features || ['Zakres dopasowany do celu','Testy na telefonie i komputerze','Harmonogram i warunki w ofercie']).map(feature => feature.replace(/Nieograniczona liczba produktów/i,'Katalog produktów według ustalonego zakresu').replace(/24\/7/g,'według uzgodnionego zakresu'))}))}/>
  </div></section>;
}
