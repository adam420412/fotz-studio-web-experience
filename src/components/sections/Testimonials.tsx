import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Martyna Kasprzak",
    role: "Właścicielka firmy",
    content: "Polecam Fotz Studio i współpracę z Panem Adamem. Strona internetowa zrobiona w takim terminie jak było ustalone, strona wygląda estetycznie i każdy detal jest dopracowany.",
    rating: 5,
  },
  {
    name: "Robert Zyśk",
    role: "Przedsiębiorca",
    content: "Chciałbym polecić FOTZ jako profesjonalnego i rzetelnego partnera w zakresie projektowania stron internetowych. Od samego początku współpraca przebiegała sprawnie.",
    rating: 5,
  },
  {
    name: "Edyta",
    role: "Klientka",
    content: "Polecam Fotz Studio, a szczególnie współpracę z Panem Adamem. Bardzo doceniam świetny kontakt i szybkie działanie - konkretna robota!",
    rating: 5,
  },
  {
    name: "Olivier G",
    role: "Stały klient",
    content: "Polecam z całego serca... współpracowałem z panem Adamem kilkukrotnie i za każdym razem wszystko szło szybko, sprawnie i bardzo dobrze.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="dv-eyebrow mb-6 inline-block">Referencje</span>
          <h2
            className="font-geist mb-6"
            style={{
              fontSize: "clamp(40px, 5vw, 88px)",
              letterSpacing: "-0.045em",
              lineHeight: 0.98,
              fontWeight: 400,
            }}
          >
            Referencje i opinie
            <br />
            <span className="dv-text-grad italic">zadowolonych klientów</span>
          </h2>
          <p
            className="mx-auto mb-8"
            style={{
              color: "var(--dv-fg-muted)",
              fontSize: "17px",
              lineHeight: 1.55,
              maxWidth: "52ch",
            }}
          >
            Zadowolenie naszych klientów jest dla nas priorytetem. Ich referencje
            i opinie stanowią najlepszy dowód na skuteczność naszych działań.
          </p>

          {/* Google Rating Badge */}
          <div className="dv-pill inline-flex">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-foreground font-semibold text-[13px]">5.0</span>
            <span style={{ color: "var(--dv-fg-muted)" }}>•</span>
            <span style={{ color: "var(--dv-fg-muted)" }}>160+ opinii Google</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="dv-panel p-8 relative group hover:border-[color:var(--dv-accent-pink)]/20 transition-colors duration-300"
            >
              <Quote
                className="absolute top-6 right-6 w-10 h-10 opacity-10"
                style={{ color: "var(--dv-accent-pink)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p
                className="text-[15px] leading-relaxed mb-6"
                style={{ color: "var(--dv-fg-muted)" }}
              >
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-[15px]"
                  style={{ background: "var(--dv-brand-grad)" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-geist text-foreground text-[15px] font-medium">
                    {t.name}
                  </div>
                  <div className="text-[13px]" style={{ color: "var(--dv-fg-muted)" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
