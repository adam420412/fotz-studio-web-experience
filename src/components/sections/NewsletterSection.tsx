import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, FileText } from "lucide-react";

const steps = ["Co oferujesz i do kogo chcesz dotrzeć?", "Jaki cel ma strona, film lub kampania?", "Jakie materiały i kanały już masz?", "Jakiego zakresu i terminu potrzebujesz?"];

export function NewsletterSection() {
  return (
    <section id="przygotuj-brief" style={{ background: "var(--dv-bg-raised)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="dv-eyebrow mb-5">Zacznij od celu</p>
          <h2 className="text-4xl md:text-5xl font-geist leading-tight tracking-tight mb-6">Twój pomysł.<br /><span className="dv-text-grad italic">Konkretny brief.</span></h2>
          <p className="text-muted-foreground leading-relaxed">Zbierz informacje, które pomogą nam zrozumieć projekt i przygotować zakres prac. Możesz zacząć od krótkiego opisu — szczegóły ustalimy w rozmowie.</p>
        </div>
        <div className="dv-panel p-6 md:p-8">
          <FileText className="w-7 h-7 mb-5" aria-hidden />
          <ul className="space-y-4 mb-7">{steps.map(step => <li key={step} className="flex gap-3 text-sm leading-relaxed"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden />{step}</li>)}</ul>
          <Link to="/generator-briefu" className="dv-btn dv-btn-primary">Przygotuj brief <ArrowRight className="w-4 h-4" aria-hidden /></Link>
          <Link to="/zasoby" className="block mt-5 text-sm underline underline-offset-4">Zobacz poradniki</Link>
        </div>
      </div>
    </section>
  );
}
