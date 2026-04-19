import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FinalCTA() {
  const { t } = useLanguage();

  const ctaText = t(
    "Nie czekaj, aż konkurencja Cię wyprzedzi. Skontaktuj się z naszą agencją już dziś i umów się na bezpłatną konsultację. Porozmawiajmy o Twoich celach biznesowych i o tym, jak możemy Ci pomóc osiągnąć sukces.",
    "Don't wait for the competition to get ahead of you. Contact our agency today and schedule a free consultation."
  );

  const features = [
    t("Szybka odpowiedź", "Fast response"),
    t("Bezpłatna konsultacja", "Free consultation"),
    t("160+ opinii Google", "160+ Google reviews"),
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--dv-ink)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 100%, rgba(120,20,60,0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 0%, rgba(20,40,80,0.35) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20">
          <div>
            <span className="dv-eyebrow text-white/60 mb-6 inline-block">
              {t("Gotowi na start?", "Ready to start?")}
            </span>
            <h2
              className="font-geist text-white mb-8"
              style={{
                fontSize: "clamp(48px, 7vw, 120px)",
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
                fontWeight: 400,
              }}
            >
              {t("Skontaktuj się", "Contact")}{" "}
              <span className="dv-text-grad italic">{t("z nami.", "us.")}</span>
            </h2>
            <p
              className="text-white/70 max-w-xl mb-10"
              style={{
                fontSize: "clamp(16px, 1.3vw, 20px)",
                lineHeight: 1.5,
              }}
            >
              {ctaText}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/kontakt" className="dv-btn dv-btn-primary group">
                {t("Umów bezpłatną konsultację", "Book a free consultation")}
                <ArrowUpRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
              <a
                href="tel:+48790814814"
                className="dv-btn dv-btn-secondary text-white"
                style={{ borderColor: "rgba(255,255,255,0.18)" }}
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                {t("Zadzwoń teraz", "Call now")}
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className="border-t pt-8 pb-8"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              <div className="dv-mono uppercase tracking-[0.14em] text-[11px] text-white/50 mb-4">
                {t("Co zyskujesz", "What you get")}
              </div>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white/85"
                    style={{ fontSize: 16 }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--dv-accent-pink)" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="border-t pt-8"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              <div className="dv-mono uppercase tracking-[0.14em] text-[11px] text-white/50 mb-4">
                Studio
              </div>
              <div className="flex items-start gap-3 text-white/85 mb-3">
                <MapPin
                  className="w-4 h-4 shrink-0 mt-1"
                  style={{ color: "var(--dv-accent-pink)" }}
                  strokeWidth={1.5}
                />
                <span>Plac Wolności 16, Poznań</span>
              </div>
              <div className="text-white/50 text-sm">
                {t("Preferujesz online? Też możemy.", "Prefer online? We can do that too.")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
