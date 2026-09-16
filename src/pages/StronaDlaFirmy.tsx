import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ArrowRight, Loader2, Phone } from "lucide-react";
import { z } from "zod";
import { SEOHead } from "@/components/seo/SEOHead";
import { submitContactForm } from "@/lib/web3forms";
import { trackGrowthEvent } from "@/lib/growthTracking";
import { useFormTracking } from "@/hooks/useFormTracking";
import "./StronaDlaFirmy.css";

const websiteLeadSchema = z.object({
  name: z.string().trim().min(2, "Podaj imię (minimum 2 znaki).").max(100),
  email: z.string().trim().email("Wpisz poprawny adres e-mail.").max(254),
  phone: z.string().trim().refine(v => v.replace(/\D/g, "").length >= 9 && v.replace(/\D/g, "").length <= 15, "Podaj numer telefonu z kierunkowym, jeśli jest zagraniczny."),
  message: z.string().trim().min(5, "Napisz, czym zajmuje się Twoja firma.").max(2000),
  privacy: z.literal(true, { errorMap: () => ({ message: "Potwierdź prośbę o kontakt i zapoznanie się z informacją o danych." }) }),
});
const initial = { name: "", email: "", phone: "", message: "", privacy: false };
const faq = [
  ["Co oznacza cena od 999 zł netto?", "To cena wyjściowa strony firmowej. Ostateczna wycena zależy od liczby podstron, treści i funkcji. Przed rozpoczęciem otrzymasz zakres, cenę oraz informację o kosztach domeny i hostingu. Sklep, rezerwacje i nietypowe integracje wyceniamy osobno."],
  ["Ile trwa realizacja?", "Termin ustalamy po poznaniu zakresu i dostępnych materiałów. Najpierw potwierdzamy, co ma powstać i kiedy — dopiero potem zaczynamy pracę."],
  ["Czy muszę mieć gotowe teksty i zdjęcia?", "Nie musisz mieć wszystkiego na pierwszą rozmowę. Opowiedz o firmie i pokaż materiały, które masz. W ofercie ustalimy, co przygotujemy my, a co dostarczysz Ty."],
  ["Mam już stronę. Czy możecie ją poprawić?", "Tak. Podaj adres w formularzu. Sprawdzimy, czy rozsądniejsza będzie przebudowa obecnej strony, czy przygotowanie nowej."],
  ["Czy pracujecie tylko w Poznaniu?", "Pracujemy z firmami z całej Polski. Rozmowę i akceptację projektu możemy przeprowadzić online. Spotkanie na miejscu wymaga wcześniejszego uzgodnienia."],
];

export default function StronaDlaFirmy() {
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const inFlight = useRef(false);
  const formRef = useFormTracking("www_999");
  const cta = (position: string) => trackGrowthEvent("cta_click", { cta_id: "www_999_quote", position });
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inFlight.current) return;
    const parsed = websiteLeadSchema.safeParse(data);
    setFailure(false);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach(issue => { next[String(issue.path[0])] = issue.message; });
      setErrors(next);
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>("[aria-invalid=true]")?.focus());
      return;
    }
    setErrors({}); setBusy(true); inFlight.current = true;
    try {
      await submitContactForm({ ...parsed.data, privacy: undefined, form_id: "www_999", offer_id: "www_from_999", subject: "Zapytanie o stronę firmową", from_name: "Fotz Studio — strona WWW", contact_request: true, privacy_version: "www-2026-09", source: "landing:www_999" });
      setSuccess(true);
      requestAnimationFrame(() => document.getElementById("www-success")?.focus());
    } catch { setFailure(true); }
    finally { setBusy(false); inFlight.current = false; }
  };
  const field = (key: "name"|"email"|"phone", label: string, type: string, autoComplete: string) => <div className="www-field">
    <label htmlFor={`www-${key}`}>{label} <span aria-hidden="true">*</span></label>
    <input id={`www-${key}`} name={key} type={type} autoComplete={autoComplete} value={data[key]} maxLength={key === "email" ? 254 : 100} aria-required="true" aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `www-${key}-error` : undefined} onChange={e => setData(v => ({ ...v, [key]: e.target.value }))}/>
    {errors[key] && <p id={`www-${key}-error`} className="www-error">{errors[key]}</p>}
  </div>;
  return <div className="www-landing">
    <SEOHead title="Strona firmowa od 999 zł netto | FOTZ Studio" description="Strony internetowe dla firm z Poznania i całej Polski. Opowiedz o swojej firmie — otrzymasz propozycję zakresu i wycenę." canonical="https://www.fotz-studio.pl/strona-dla-firmy" noIndex />
    <header className="www-header www-wrap"><Link to="/" aria-label="FOTZ Studio — strona główna" className="www-logo">FOTZ<span>STUDIO</span></Link><a href="tel:+48790814814" onClick={() => trackGrowthEvent("click_phone", { placement: "www_header" })}><Phone size={15}/>790 814 814</a></header>
    <main>
      <section className="www-hero www-wrap">
        <div><p className="www-eyebrow"><span/> Dla właścicieli firm · Poznań i okolice</p>
          <h1>Twoja firma.<br/>Dobrze pokazana<br/><em>w internecie.</em></h1>
          <p className="www-intro">Tworzymy strony, na których klient szybko rozumie, co robisz, widzi Twoje realizacje i wie, jak się z Tobą skontaktować.</p>
          <div className="www-price">Strona firmowa <strong>od 999 zł</strong> netto</div>
          <a className="www-button" href="#zapytanie" onClick={() => cta("hero")}>Zapytaj o swoją stronę <ArrowUpRight size={20}/></a>
          <p className="www-small">Najpierw rozmowa i wycena. Wysłanie formularza nie jest zamówieniem.</p>
        </div>
        <div className="www-demo" aria-label="Schemat strony firmowej, przykład układu">
          <div className="www-demo-bar"><i/><i/><i/><span>Twoja firma / online</span></div>
          <div className="www-demo-body"><p className="www-eyebrow">Miejsce dla Twojej marki</p><h2>Od pierwszego<br/>wrażenia<br/><em>do kontaktu.</em></h2><div className="www-demo-line"/><div className="www-demo-line short"/><span className="www-demo-cta">Porozmawiajmy <ArrowRight size={16}/></span><div className="www-demo-grid"><div>01<br/><b>Oferta</b></div><div>02<br/><b>Realizacje</b></div><div>03<br/><b>Kontakt</b></div></div></div>
          <div className="www-demo-caption">Przykładowy układ · projekt dopasujemy do Twojej firmy</div>
        </div>
      </section>
      <section className="www-band"><div className="www-wrap"><p>Klient trafił na Twoją firmę.<br/><strong>Co zobaczy dalej?</strong></p><div>Profil w social media nie zawsze odpowie na wszystkie pytania. Strona porządkuje ofertę, pokazuje sposób pracy i prowadzi do konkretnej rozmowy.</div></div></section>
      <section className="www-section www-wrap"><p className="www-eyebrow">Strona z konkretnym zadaniem</p><h2>Wszystko, czego klient<br/>potrzebuje na początek.</h2><div className="www-cards">{[["01", "Jasna oferta", "Co robisz, dla kogo i jak wygląda współpraca. Bez zgadywania i szukania informacji."],["02", "Dobry widok na telefonie", "Czytelna treść i wygodne przyciski — także gdy klient trafia do Ciebie z reklamy."],["03", "Prosta droga do rozmowy", "Formularz i dane kontaktowe w widocznym miejscu. Zapytanie o ofertę w kilku krokach."]].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
      <section className="www-section www-wrap www-process"><div><p className="www-eyebrow">Tak powstaje Twoja strona</p><h2>Od pomysłu<br/><em>do publikacji.</em></h2></div><ol>{[["Rozmowa o firmie", "Ustalamy cel strony, odbiorcę i potrzebne funkcje."],["Zakres i wycena", "Potwierdzamy cenę, materiały, terminy oraz warunki współpracy."],["Projekt i uwagi", "Pokazujemy propozycję i zbieramy Twoje uwagi."],["Sprawdzenie i publikacja", "Sprawdzamy widok mobilny, linki i formularz przed udostępnieniem strony."]].map(([t,d])=><li key={t}><h3>{t}</h3><p>{d}</p></li>)}</ol></section>
      <section className="www-proof www-wrap"><p className="www-eyebrow">Zobacz sposób naszej pracy</p><h2>Sprawdź realizacje FOTZ.</h2><p>W portfolio pokazujemy projekty o różnych zakresach i budżetach. To przykłady naszej pracy, a zakres Twojej strony ustalimy osobno.</p><Link to="/realizacje" target="_blank" rel="noopener noreferrer">Otwórz portfolio <ArrowUpRight size={18}/></Link></section>
      <section className="www-section www-wrap www-offer"><div><p className="www-eyebrow">Punkt wyjścia do Twojego projektu</p><h2>Strona firmowa<br/><em>od 999 zł netto.</em></h2><p>Opisz firmę i to, czego potrzebujesz. Wrócimy z propozycją zakresu i wyceną przed rozpoczęciem prac.</p></div><div><ul>{["Zakres dopasowany do Twojej firmy", "Cena i termin potwierdzone przed startem", "Kontakt online — bez konieczności wizyty w biurze"].map(t=><li key={t}><Check size={18}/>{t}</li>)}</ul><a className="www-button" href="#zapytanie" onClick={() => cta("offer")}>Porozmawiajmy o stronie <ArrowUpRight size={20}/></a><p className="www-small">Domena, hosting i funkcje dodatkowe: warunki w indywidualnej wycenie.</p></div></section>
      <section className="www-section www-wrap www-faq"><h2>Zanim zapytasz.</h2><div>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section id="zapytanie" className="www-form-section"><div className="www-wrap www-form-grid"><div><p className="www-eyebrow">Zróbmy pierwszy krok</p><h2>Opowiedz<br/>o swojej firmie.</h2><p>Krótko: czym się zajmujesz i jakiej strony potrzebujesz. Jeśli masz już stronę, dodaj jej adres.</p><a href="tel:+48790814814" onClick={() => trackGrowthEvent("click_phone", { placement: "www_form" })}>Wolisz zadzwonić? 790 814 814</a></div>
        {success ? <div id="www-success" className="www-success" role="status" tabIndex={-1}><Check size={36}/><h3>Mamy Twoje zgłoszenie.</h3><p>Skontaktujemy się z Tobą w sprawie strony. Nie musisz wysyłać formularza ponownie.</p><p className="www-small">W pilnej sprawie zadzwoń: 790 814 814.</p></div> : <form ref={formRef} noValidate onSubmit={submit} aria-label="Zapytanie o stronę firmową" aria-busy={busy}>
          {field("name", "Imię", "text", "given-name")}{field("email", "E-mail", "email", "email")}{field("phone", "Telefon", "tel", "tel")}
          <div className="www-field"><label htmlFor="www-message">Firma i czego potrzebujesz <span aria-hidden="true">*</span></label><textarea id="www-message" name="message" rows={4} maxLength={2000} aria-required="true" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "www-message-error" : undefined} value={data.message} onChange={e => setData(v => ({...v,message:e.target.value}))}/>{errors.message && <p className="www-error" id="www-message-error">{errors.message}</p>}</div>
          <label className="www-consent" htmlFor="www-privacy"><input id="www-privacy" type="checkbox" checked={data.privacy} aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "www-privacy-error" : undefined} onChange={e => setData(v => ({...v,privacy:e.target.checked}))}/><span>Proszę o kontakt w sprawie wyceny. Zapoznałem/am się z <Link to="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">informacją o przetwarzaniu danych</Link>. *</span></label>{errors.privacy && <p id="www-privacy-error" className="www-error">{errors.privacy}</p>}
          <button type="submit" disabled={busy} className="www-button">{busy ? <><Loader2 className="animate-spin" size={18}/>Zapisujemy zgłoszenie…</> : <>Zapytaj o wycenę <ArrowUpRight size={20}/></>}</button>
          {failure && <p className="www-error" role="alert">Nie otrzymaliśmy potwierdzenia zapisu. Dane pozostają w formularzu — spróbuj ponownie. Możesz też zadzwonić: <a href="tel:+48790814814">790 814 814</a>.</p>}
          <p className="www-small">Zgłoszenie dotyczy wyceny. Nie zapisuje Cię do newslettera.</p>
        </form>}
      </div></section>
    </main>
    <footer className="www-wrap www-footer"><span>FOTZ Studio · Poznań i cała Polska</span><button type="button" onClick={() => window.dispatchEvent(new Event("fotz:cookie-settings"))}>Ustawienia cookies</button><Link to="/polityka-prywatnosci">Prywatność</Link><a href="mailto:adam@fotz.pl">adam@fotz.pl</a></footer>
  </div>;
}
