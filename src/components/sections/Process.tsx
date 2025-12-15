import { MessageSquare, Lightbulb, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Konsultacja",
    description:
      "Spotykamy się, poznajemy Twój biznes, cele i wyzwania. Analizujemy obecną sytuację i określamy możliwości.",
    details: ["Bezpłatna rozmowa", "Analiza potrzeb", "Wstępna strategia"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategia",
    description:
      "Projektujemy kompleksową strategię dopasowaną do Twoich celów. Definiujemy KPI i harmonogram działań.",
    details: ["Plan działania", "Budżetowanie", "Timeline"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Realizacja",
    description:
      "Wdrażamy strategię, monitorujemy wyniki i optymalizujemy działania. Regularnie raportujemy postępy.",
    details: ["Wdrożenie", "Optymalizacja", "Raportowanie"],
  },
];

export function Process() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Jak działamy
          </span>
          <h2
            className={cn(
              "text-3xl md:text-5xl font-heading font-bold mb-6 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Prosty <span className="text-gradient">proces współpracy</span>
          </h2>
          <p
            className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Trzy proste kroki, które dzielą Cię od skutecznego marketingu. 
            Stawiamy na transparentność i jasną komunikację.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "relative text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: isVisible ? `${(index + 3) * 100}ms` : "0ms",
              }}
            >
              {/* Number & Icon */}
              <div className="relative inline-flex flex-col items-center mb-8">
                <span className="text-6xl md:text-7xl font-heading font-bold text-secondary mb-4">
                  {step.number}
                </span>
                <div className="absolute bottom-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-6">{step.description}</p>

              {/* Details */}
              <div className="flex flex-wrap justify-center gap-2">
                {step.details.map((detail) => (
                  <span
                    key={detail}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
