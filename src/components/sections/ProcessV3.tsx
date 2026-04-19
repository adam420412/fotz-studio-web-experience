const PHASES = [
  {
    num: "01",
    title: "Analiza i planowanie",
    len: "1–2 tyg.",
    desc:
      "Audyt strategii, analiza konkurencji, cele biznesowe. Audyt Twojej obecnej strategii marketingowej i analityki ruchu.",
  },
  {
    num: "02",
    title: "Wdrożenie kampanii",
    len: "2–4 tyg.",
    desc:
      "AI i automatyzacja, Google Ads, Social Media. Najnowsze narzędzia do optymalizacji kampanii i ROI.",
  },
  {
    num: "03",
    title: "Monitorowanie wyników",
    len: "Stale",
    desc:
      "Raportowanie, optymalizacja, wzrost ROI. Regularne raporty i optymalizacje dla maksymalnego przychodu.",
  },
];

export function ProcessV3() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--card))" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center gap-5 mb-16">
          <span className="dv-eyebrow">Jak pracujemy</span>
          <h2 className="dv-h-xl max-w-[900px]">Proces w trzech fazach.</h2>
          <p className="dv-lede text-[color:var(--dv-fg-muted)] max-w-[620px]">
            Transparentna współpraca oparta na analizie, wdrożeniu i ciągłej
            optymalizacji.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            borderTop: "1px solid var(--dv-hair)",
            borderBottom: "1px solid var(--dv-hair)",
          }}
        >
          {PHASES.map((p, i) => (
            <div
              key={p.num}
              className="p-10"
              style={{
                borderRight:
                  i < PHASES.length - 1 ? "1px solid var(--dv-hair)" : "none",
              }}
            >
              <div
                className="dv-mono uppercase mb-6"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  color: "var(--dv-accent-pink)",
                }}
              >
                {p.num} · {p.len}
              </div>
              <h3 className="dv-h-sm mb-4">{p.title}</h3>
              <p
                className="text-[color:var(--dv-fg-muted)]"
                style={{ fontSize: 15, lineHeight: 1.55 }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
