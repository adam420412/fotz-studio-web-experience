import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { EnquiryForm } from '@/components/EnquiryForm';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export function ContactPage({ consultation = false }: { consultation?: boolean }) {
  const path = consultation ? '/konsultacja' : '/kontakt';
  return <Layout workPlacement="manual">
    <BreadcrumbSchema items={[{ name: 'Strona główna', url: '/' }, { name: consultation ? 'Konsultacja' : 'Kontakt', url: path }]} />
    <section className="container-wide px-6 md:px-12 pt-28 md:pt-36 pb-16">
      <div className="mb-10 max-w-3xl"><p className="dv-eyebrow mb-4">FOTZ Studio · Poznań i współpraca zdalna</p><h1 className="font-heading text-4xl md:text-6xl leading-tight mb-6">{consultation ? '15 minut o Twoim projekcie.' : 'Porozmawiajmy o Twoim projekcie.'}</h1><p className="text-lg text-muted-foreground leading-relaxed">{consultation ? 'Ustalmy, czego potrzebujesz i od czego warto zacząć. Wybierz temat, zostaw kontakt i napisz kilka zdań. W odpowiedzi uzgodnimy dogodny termin.' : 'Strona, film, social media czy SEO? Opisz punkt wyjścia. Dobierzemy zakres prac i informacje potrzebne do wyceny.'}</p></div>
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 items-start">
        <div><span id="formularz-konsultacji" className="block scroll-mt-28" /><EnquiryForm consultation={consultation} /></div>
        <aside className="space-y-8 lg:pt-4">
          <div><h2 className="font-heading text-2xl mb-4">Wolisz bezpośredni kontakt?</h2><a href="tel:+48790814814" className="block text-2xl underline underline-offset-4 mb-3">+48 790 814 814</a><a href="mailto:adam@fotz.pl" className="inline-block text-lg underline underline-offset-4">adam@fotz.pl</a><p className="mt-5 text-muted-foreground">Plac Wolności 16, 61-739 Poznań<br />Spotkanie w biurze po ustaleniu terminu.</p></div>
          <div className="border-t border-border pt-7"><h2 className="font-heading text-2xl mb-5">Co dzieje się dalej?</h2><ol className="space-y-5">{['Czytamy opis i ustalamy, czy mamy komplet informacji.', 'Dopytujemy lub umawiamy krótką rozmowę o zakresie.', 'Przed zleceniem potwierdzamy cenę, termin i to, co otrzymasz.'].map((step, i) => <li key={step} className="flex gap-4"><span aria-hidden className="font-mono text-primary shrink-0 whitespace-nowrap">0{i + 1}</span><span className="text-muted-foreground leading-relaxed">{step}</span></li>)}</ol></div>
          <p className="text-sm text-muted-foreground leading-relaxed">Pierwsza rozmowa jest bezpłatna. Szczegółowy audyt, strategię i realizację wyceniamy osobno. <Link to="/cennik" className="underline underline-offset-4">Zobacz zakresy i wycenę</Link>.</p>
        </aside>
      </div>
    </section>
  </Layout>;
}
