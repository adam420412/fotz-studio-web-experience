import { Link } from "react-router-dom";
import { Building2, ShoppingBag, Crown, CalendarDays, ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const audiences = [
  {
    id: "firmy-lokalne",
    icon: Building2,
    title: "Firmy lokalne",
    subtitle: "Poznań i okolice",
    description:
      "Pomagamy lokalnym firmom budować silną obecność w internecie i pozyskiwać klientów z regionu. Znamy specyfikę poznańskiego rynku.",
    features: [
      "SEO lokalne i Google My Business",
      "Kampanie geotargetowane",
      "Budowanie rozpoznawalności w regionie",
      "Współpraca z lokalnymi mediami",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    href: "/dla-kogo/firmy-lokalne",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce",
    subtitle: "Sklepy internetowe",
    description:
      "Optymalizujemy sprzedaż online, budujemy strategie performance i rozwijamy marki e-commerce. Od małych sklepów po duże platformy.",
    features: [
      "Optymalizacja konwersji (CRO)",
      "Performance marketing",
      "Automatyzacja marketingu",
      "Remarketing i cross-selling",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    href: "/dla-kogo/ecommerce",
  },
  {
    id: "marki-premium",
    icon: Crown,
    title: "Marki premium",
    subtitle: "Luksus i jakość",
    description:
      "Tworzymy wyrafinowane strategie marketingowe dla marek, które stawiają na najwyższą jakość i chcą dotrzeć do wymagających klientów.",
    features: [
      "Pozycjonowanie marki premium",
      "Ekskluzywny content",
      "Influencer marketing",
      "PR i komunikacja",
    ],
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
    href: "/dla-kogo/marki-premium",
  },
  {
    id: "instytucje",
    icon: CalendarDays,
    title: "Instytucje & eventy",
    subtitle: "Kultura i wydarzenia",
    description:
      "Wspieramy instytucje kultury i organizatorów wydarzeń w promocji i budowaniu zasięgów. Wiemy, jak przyciągnąć publiczność.",
    features: [
      "Marketing eventowy",
      "Promocja wydarzeń kulturalnych",
      "Kampanie sprzedaży biletów",
      "Social media dla eventów",
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
    href: "/dla-kogo/instytucje",
  },
];

export default function DlaKogo() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Dla kogo pracujemy
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Marketing dopasowany do{" "}
              <span className="text-gradient">Twojej branży</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Każda branża ma swoją specyfikę. Dostosowujemy strategie i narzędzia 
              do unikalnych wyzwań i możliwości Twojego biznesu.
            </p>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section ref={ref} className="section-padding bg-card">
        <div className="container-wide space-y-16">
          {audiences.map((audience, index) => (
            <div
              key={audience.id}
              className={cn(
                "grid lg:grid-cols-2 gap-12 items-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Content */}
              <div className={cn(index % 2 === 1 && "lg:order-2")}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <audience.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-primary text-sm font-medium">
                  {audience.subtitle}
                </span>
                <h2 className="text-2xl md:text-4xl font-heading font-bold mt-2 mb-4">
                  {audience.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  {audience.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {audience.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="hero" size="lg" asChild>
                  <Link to={audience.href} className="group">
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Image */}
              <div
                className={cn(
                  "relative aspect-[4/3] rounded-2xl overflow-hidden",
                  index % 2 === 1 && "lg:order-1"
                )}
              >
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Nie widzisz swojej <span className="text-gradient">branży?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Pracujemy z różnymi branżami i chętnie poznamy specyfikę Twojego 
            biznesu. Porozmawiajmy!
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/kontakt" className="group">
              Bezpłatna konsultacja
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
