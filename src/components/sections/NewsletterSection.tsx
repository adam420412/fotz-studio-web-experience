import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Download, FileText } from "lucide-react";

const checklistItems = [
  "Cel kampanii i wybór kanału reklamowego",
  "Odbiorca, oferta i spójny komunikat",
  "Budżet oraz granice testu",
  "Kreacje i strona docelowa",
  "Pomiar konwersji i zgody użytkownika",
  "Plan testów A/B",
  "Wskaźniki i jakość kontaktów",
  "Remarketing i dalsza obsługa",
  "Atrybucja oraz rentowność",
  "Decyzja o zwiększeniu budżetu",
];

export function NewsletterSection() {
  return (
    <section id="checklista-kampanii" className="relative overflow-hidden scroll-mt-24" style={{ background: "var(--dv-bg-raised)" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="dv-eyebrow mb-6 inline-block">Darmowy materiał</span>
            <h2 className="font-geist mb-6" style={{ fontSize: "clamp(36px, 4vw, 64px)", letterSpacing: "-0.035em", lineHeight: 1.05, fontWeight: 400 }}>
              Dobry plan.<br /><span className="dv-text-grad italic">Lepszy start kampanii.</span>
            </h2>
            <p className="mb-8 text-[17px] leading-relaxed max-w-[50ch]" style={{ color: "var(--dv-fg-muted)" }}>
              10 punktów do sprawdzenia przed uruchomieniem reklam i zwiększeniem budżetu.
              Pobierz checklistę i przejdź przez nią ze swoim zespołem.
            </p>
            <ul className="space-y-3">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--dv-fg-muted)" }}>
                  <CheckCircle aria-hidden="true" className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--dv-accent-pink)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="dv-panel p-6 md:p-10">
            <div className="rounded-2xl p-5 md:p-8 mb-8" style={{ background: "var(--dv-ink)", border: "1px solid var(--dv-hair)" }}>
              <div className="flex items-center justify-between mb-10">
                <span className="dv-mono text-xs tracking-widest">FOTZ STUDIO</span>
                <FileText aria-hidden="true" className="w-6 h-6" style={{ color: "var(--dv-accent-pink)" }} />
              </div>
              <p className="font-geist text-3xl md:text-4xl tracking-tight leading-tight mb-5">Zanim włączysz<br />kampanię.</p>
              <p className="text-sm" style={{ color: "var(--dv-fg-muted)" }}>Cel → kreacja → pomiar → decyzja</p>
              <span className="dv-pill mt-8">PDF · 2 strony · 10 punktów</span>
            </div>
            <a href="/downloads/checklista-kampanii-fotz-studio.pdf" download="Checklista-kampanii-FOTZ-Studio.pdf" className="dv-btn dv-btn-primary w-full justify-center">
              <Download aria-hidden="true" className="w-4 h-4 shrink-0" /> Pobierz bezpłatny PDF
            </a>
            <p className="text-center mt-4 text-sm" style={{ color: "var(--dv-fg-muted)" }}>Bez podawania adresu e-mail. Materiał do zapisania lub wydruku.</p>
            <Link to="/konsultacja" className="inline-flex items-center gap-2 mt-8 text-sm underline underline-offset-4">
              Omów plan kampanii <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
