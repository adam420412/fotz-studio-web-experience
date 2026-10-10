import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm } from '@/lib/web3forms';
import { enquiryServices, enquiryVariants, readEnquiryContext, validService } from '@/lib/enquiry.mjs';
import { trackConversion } from '@/lib/conversions';

const schema = z.object({
  name: z.string().trim().min(2, 'Podaj imię (minimum 2 znaki).').max(100, 'Imię może mieć do 100 znaków.'),
  email: z.string().trim().email('Podaj prawidłowy adres e-mail.').max(255),
  message: z.string().trim().min(10, 'Napisz krótko, czego potrzebujesz (minimum 10 znaków).').max(2000, 'Wiadomość może mieć do 2000 znaków.'),
  phone: z.string().trim().max(40), timing: z.string().trim().max(200),
});
const prompts: Record<string, string> = {
  web: 'Jaka firma, nowa strona czy przebudowa, jakie funkcje? Możesz wkleić adres obecnej strony.',
  video: 'Co nagrywamy, gdzie i kiedy? Napisz, czy potrzebujesz spotu, rolek czy zdjęć.',
  social: 'Wklej link do profilu. Potrzebujesz materiałów, publikacji czy także reklam?',
  seo: 'Wklej adres strony. Jakie usługi sprzedajesz i na jakim obszarze chcesz docierać do klientów?',
  marketing: 'Opisz firmę i najważniejszy cel. Jakie działania już prowadzicie?',
  reel: 'Opisz firmę, lokalizację i pomysł na rolkę. Zakres oraz dostępność ustalimy w odpowiedzi.',
  other: 'Opisz firmę i to, co chcesz zmienić. Wystarczą 2–3 zdania.',
};

export function EnquiryForm({ defaultService = 'other', consultation = false, id = 'formularz' }: { defaultService?: string; consultation?: boolean; id?: string }) {
  const { search, pathname } = useLocation();
  const [service, setService] = useState(validService(defaultService));
  const [variant, setVariant] = useState('');
  const [data, setData] = useState({ name: '', email: '', message: '', phone: '', timing: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [receipt, setReceipt] = useState('');
  const form = useRef<HTMLFormElement>(null);
  const success = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const context = readEnquiryContext(search);
    setService(context.service === 'other' ? validService(defaultService) : context.service);
    setVariant(context.variant);
  }, [search, defaultService]);
  useEffect(() => { if (status === 'success') success.current?.focus(); }, [status]);
  const start = () => { if (!started.current) { started.current = true; trackConversion('form_start', service); } };
  const send = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === 'sending') return;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const error of parsed.error.errors) next[String(error.path[0])] = error.message;
      setErrors(next);
      form.current?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }
    setErrors({}); setStatus('sending'); trackConversion('form_attempt', service);
    try {
      const result = await submitContactForm({
        ...parsed.data, topic: enquiryServices[service], service_tag: service,
        variant: variant ? enquiryVariants[variant] : '', form_id: `enquiry:${pathname}`,
        subject: `${consultation ? 'Konsultacja' : 'Zapytanie'}: ${enquiryServices[service]}`,
        from_name: 'FOTZ Studio — zapytanie ze strony',
        message: [parsed.data.message, parsed.data.timing && `Preferowany termin: ${parsed.data.timing}`, variant && `Zakres: ${enquiryVariants[variant]}`].filter(Boolean).join('\n\n'),
      });
      setReceipt(String(result.submission_id || result.id || ''));
      setStatus('success');
    } catch { setStatus('error'); trackConversion('form_error', service); }
  };
  const field = (key: string) => ({ id: `${id}-${key}`, name: key, 'aria-invalid': !!errors[key], 'aria-describedby': errors[key] ? `${id}-${key}-error` : undefined });
  const error = (key: string) => errors[key] && <p id={`${id}-${key}-error`} className="text-sm text-destructive mt-2">{errors[key]}</p>;
  return <section id={id} className="scroll-mt-28 rounded-3xl border border-border bg-card p-6 sm:p-8" aria-labelledby={`${id}-heading`}>
    <p className="dv-eyebrow mb-3">Pierwszy krok bez zobowiązań</p>
    <h2 id={`${id}-heading`} className="text-2xl sm:text-3xl font-heading mb-3">{consultation ? 'Zgłoś rozmowę o projekcie.' : 'Opisz, czego potrzebujesz.'}</h2>
    <p className="text-muted-foreground leading-relaxed mb-7">{consultation ? 'Pierwsza rozmowa trwa 15 minut. Termin i formę spotkania potwierdzimy z Tobą osobiście.' : 'Przeczytamy opis i wrócimy z pytaniami lub propozycją zakresu. Nie musisz mieć gotowego briefu.'}</p>
    {status === 'success' ? <div ref={success} tabIndex={-1} role="status" className="rounded-2xl bg-primary/10 border border-primary/30 p-6 focus:outline-none">
      <CheckCircle2 aria-hidden className="h-8 w-8 text-primary mb-4" /><h3 className="text-xl font-heading mb-3">Dziękujemy. Zgłoszenie zostało przyjęte.</h3>
      <p className="leading-relaxed">Odpowiemy na podany adres e-mail. {consultation && 'Termin rozmowy potwierdzimy w odpowiedzi.'} Jeśli sprawa jest pilna, zadzwoń: <a href="tel:+48790814814" className="underline">790 814 814</a>.</p>
      {receipt && <p className="mt-4 text-xs text-muted-foreground break-all">Numer zgłoszenia: {receipt}</p>}
    </div> : <form ref={form} noValidate onSubmit={send} onFocusCapture={start}>
      <fieldset disabled={status === 'sending'} className="space-y-5 min-w-0">
        <div><label htmlFor={`${id}-service`} className="block text-sm font-medium mb-2">Czego potrzebujesz?</label><select id={`${id}-service`} value={service} onChange={e => { setService(e.target.value); setVariant(''); }} className="w-full min-h-12 rounded-md border border-input bg-background px-3 text-base">{Object.entries(enquiryServices).map(([value, label]) => <option key={value} value={value}>{String(label)}</option>)}</select>{variant && <p className="text-sm text-muted-foreground mt-2">Wybrany zakres: {enquiryVariants[variant]}</p>}</div>
        <div className="grid sm:grid-cols-2 gap-5"><div><label htmlFor={`${id}-name`} className="block text-sm font-medium mb-2">Twoje imię *</label><Input {...field('name')} autoComplete="name" required maxLength={100} value={data.name} onChange={e => setData({ ...data, name: e.target.value })} className="min-h-12 text-base" />{error('name')}</div><div><label htmlFor={`${id}-email`} className="block text-sm font-medium mb-2">E-mail do odpowiedzi *</label><Input {...field('email')} type="email" autoComplete="email" required maxLength={255} value={data.email} onChange={e => setData({ ...data, email: e.target.value })} className="min-h-12 text-base" />{error('email')}</div></div>
        <div><label htmlFor={`${id}-message`} className="block text-sm font-medium mb-2">Kilka słów o projekcie *</label><Textarea {...field('message')} required minLength={10} maxLength={2000} rows={4} value={data.message} placeholder={prompts[service]} onChange={e => setData({ ...data, message: e.target.value })} className="text-base" />{error('message')}</div>
        <details><summary className="cursor-pointer text-sm underline underline-offset-4 min-h-10">Dodaj telefon lub preferowany termin (opcjonalnie)</summary><div className="grid sm:grid-cols-2 gap-5 mt-3"><div><label htmlFor={`${id}-phone`} className="block text-sm mb-2">Telefon</label><Input {...field('phone')} type="tel" autoComplete="tel" maxLength={40} value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} className="min-h-12 text-base" />{error('phone')}</div><div><label htmlFor={`${id}-timing`} className="block text-sm mb-2">Termin projektu lub rozmowy</label><Input {...field('timing')} maxLength={200} value={data.timing} onChange={e => setData({ ...data, timing: e.target.value })} className="min-h-12 text-base" />{error('timing')}</div></div></details>
        <p className="text-xs text-muted-foreground leading-relaxed">Dane wykorzystamy do obsługi Twojego zapytania. <Link to="/polityka-prywatnosci" className="underline underline-offset-4">Polityka prywatności</Link>. Pola oznaczone * są wymagane.</p>
        {status === 'error' && <div role="alert" className="rounded-xl border border-destructive p-4 text-sm leading-relaxed">Nie udało się potwierdzić przyjęcia wiadomości. Twoje dane zostały w formularzu — spróbuj ponownie lub <a href="mailto:adam@fotz.pl" className="underline">napisz na adam@fotz.pl</a>.</div>}
        <button type="submit" className="dv-btn dv-btn-primary w-full sm:w-auto disabled:opacity-60">{status === 'sending' ? <><Loader2 aria-hidden className="w-4 h-4 animate-spin" />Wysyłanie…</> : <>{consultation ? 'Poproś o rozmowę' : 'Wyślij zapytanie'}<ArrowRight aria-hidden className="w-4 h-4" /></>}</button>
      </fieldset>
    </form>}
  </section>;
}
