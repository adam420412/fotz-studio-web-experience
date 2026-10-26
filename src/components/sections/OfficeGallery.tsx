import { Link } from "react-router-dom";

// Kept under its existing export so the home-page section does not need a new route.
export function OfficeGallery({ compact = false }: { compact?: boolean }) {
  return <section className={compact ? "py-12 md:py-16 border-y border-border" : "section-padding border-y border-border"}>
    <div className="container-wide px-6 md:px-12 max-w-4xl">
      <p className="dv-eyebrow mb-4">Poznań i współpraca zdalna</p>
      <h2 className="text-3xl md:text-4xl font-heading mb-5">Ustalamy zakres. Pracujemy online.</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">Rozmowy, akceptacje i podsumowania prowadzimy zdalnie. Termin oraz miejsce spotkania lub nagrań ustalamy indywidualnie. Nie prowadzimy biura otwartego dla odwiedzających.</p>
      <p className="mt-5 text-sm text-muted-foreground">Adres rejestrowy: Poznańska 117/11, 62-023 Kamionki.</p>
      <Link to="/kontakt" className="inline-block mt-6 underline underline-offset-4">Ustalmy sposób współpracy</Link>
    </div>
  </section>;
}
