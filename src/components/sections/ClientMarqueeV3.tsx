const CLIENTS = [
  "Enea Stadion",
  "Lech Poznań",
  "RPPG Group",
  "FPS Cegielski",
  "Puma",
  "Mix-Bud",
  "Klagem",
  "Parts Jewelry",
  "Żabka",
];

export function ClientMarqueeV3() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <div
      className="dv-marquee py-9"
      style={{
        borderTop: "1px solid var(--dv-hair)",
        borderBottom: "1px solid var(--dv-hair)",
      }}
    >
      <div className="dv-marquee-track">
        {items.map((name, i) => (
          <span
            key={i}
            className="font-geist flex items-center gap-10"
            style={{
              fontSize: 20,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "hsl(var(--foreground))",
            }}
          >
            {name}
            <span
              aria-hidden
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--dv-burgundy)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
