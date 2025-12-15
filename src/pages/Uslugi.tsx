import { Link } from "react-router-dom";
import { Globe, Video, Target, Crown, ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Globe,
    title: "Strony internetowe & widoczność",
    description:
      "Projektujemy nowoczesne strony www, które nie tylko wyglądają świetnie, ale przede wszystkim konwertują odwiedzających w klientów. Kompleksowe podejście do SEO i widoczności w sieci.",
    features: [
      "Strony firmowe i landing pages",
      "Sklepy e-commerce",
      "Pozycjonowanie SEO",
      "Audyty techniczne",
      "Optymalizacja konwersji",
      "Analityka i raportowanie",
    ],
    href: "/uslugi/strony-internetowe",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
  },
  {
    icon: Video,
    title: "Social media & video marketing",
    description:
      "Budujemy obecność marki w social mediach. Tworzymy treści wideo, które angażują i budują społeczność wokół Twojej marki. Od strategii po produkcję i publikację.",
    features: [
      "Strategia social media",
      "Content marketing",
      "Produkcja video",
      "Zarządzanie profilami",
      "Influencer marketing",
      "Community management",
    ],
    href: "/uslugi/social-media",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074",
  },
  {
    icon: Target,
    title: "Kampanie reklamowe & lead generation",
    description:
      "Projektujemy i zarządzamy kampaniami, które przynoszą mierzalne rezultaty. Google Ads, Meta Ads, LinkedIn Ads i więcej. Skupiamy się na ROI i generowaniu wartościowych leadów.",
    features: [
      "Google Ads & Search",
      "Meta Ads (Facebook & Instagram)",
      "LinkedIn Ads B2B",
      "Remarketing",
      "Automatyzacja marketingu",
      "Lead nurturing",
    ],
    href: "/uslugi/kampanie-reklamowe",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070",
  },
  {
    icon: Crown,
    title: "Marketing premium & instytucje",
    description:
      "Kompleksowe wsparcie marketingowe dla marek premium, instytucji kultury i organizatorów wydarzeń o wysokich wymaganiach. Strategia, kreacja i realizacja na najwyższym poziomie.",
    features: [
      "Strategia marki",
      "Branding & identyfikacja",
      "Marketing eventowy",
      "PR i komunikacja",
      "Consulting strategiczny",
      "Employer branding",
    ],
    href: "/uslugi/marketing-premium",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
  },
];

export default function Uslugi() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-20 section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Nasze usługi
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Kompleksowy marketing{" "}
              <span className="text-gradient">dla Twojego biznesu</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Cztery filary naszej działalności, które razem tworzą spójną 
              strategię marketingową dopasowaną do Twoich celów.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section ref={ref} className="section-padding bg-card">
        <div className="container-wide space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "grid lg:grid-cols-2 gap-12 items-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Content */}
              <div className={cn(index % 2 === 1 && "lg:order-2")}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="hero" size="lg" asChild>
                  <Link to={service.href} className="group">
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
                  src={service.image}
                  alt={service.title}
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
            Nie wiesz, <span className="text-gradient">od czego zacząć?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Umów się na bezpłatną konsultację. Przeanalizujemy Twoje potrzeby 
            i zaproponujemy najlepsze rozwiązania.
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
