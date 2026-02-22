import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Sparkles, MessageCircle, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function FinalCTA() {
  const { t } = useLanguage();

  const ctaText = t(
    "Nie czekaj, aż konkurencja Cię wyprzedzi. Skontaktuj się z naszą agencją już dziś i umów się na bezpłatną konsultację. Porozmawiajmy o Twoich celach biznesowych i o tym, jak możemy Ci pomóc osiągnąć sukces.",
    "Don't wait for the competition to get ahead of you. Contact our agency today and schedule a free consultation."
  );

  const features = [
    { icon: Zap, text: t("Szybka odpowiedź", "Fast response") },
    { icon: MessageCircle, text: t("Bezpłatna konsultacja", "Free consultation") },
    { icon: Star, text: t("160+ opinii Google", "160+ Google reviews") },
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[180px] bg-primary/[0.12]" />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8">
            {t("Skontaktuj się", "Contact")}{" "}
            <span className="text-gradient-premium">{t("z nami", "us")}</span>
          </h2>

          {/* Description */}
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {ctaText}
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="premium" size="xl" asChild className="min-w-[250px] group">
              <Link to="/kontakt">
                <span>{t("Umów bezpłatną konsultację", "Book a free consultation")}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="min-w-[200px] group">
              <a href="tel:+48790814814">
                <Phone className="w-5 h-5" />
                {t("Zadzwoń teraz", "Call now")}
              </a>
            </Button>
          </div>

          {/* Location Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/60">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Plac Wolności 16, Poznań</span>
            </div>
            <span className="px-4 py-2 rounded-full bg-card border border-border/50">
              {t("Preferujesz online? Też możemy.", "Prefer online? We can do that too.")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
