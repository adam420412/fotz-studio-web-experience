import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "46 536", label: "osób w zasięgu reklam" },
  { value: "1 216", label: "wyświetleń strony docelowej" },
  { value: "1,34 zł", label: "za kliknięcie linku" },
];

const steps = [
  {
    number: "01",
    title: "Komunikat dopasowany do oferty",
    text: "Rozdzieliliśmy kampanię na szkołę, przedszkole i edukację domową. Przygotowaliśmy grafiki i teksty, które odpowiadały na pytania rodziców o konkretną formę nauki.",
  },
  {
    number: "02",
    title: "Prostszy pierwszy kontakt",
    text: "Naprawiliśmy podstrony rekrutacyjne i niedziałające przyciski. Od 1 września reklamy kierowały do krótkiego formularza kontaktowego. Szczegóły rekrutacji rodzic mógł ustalić z sekretariatem.",
  },
  {
    number: "03",
    title: "Regularna praca na danych",
    text: "Sprawdzaliśmy koszty, ruch na stronie i wyniki poszczególnych reklam. Zmienialiśmy kreacje, wstrzymywaliśmy słabsze warianty i zestawialiśmy raporty Meta z formularzami placówki.",
  },
];

export default function CaseStudyDawidEdu() {
  return (
    <Layout>
      <SEOHead
        title="Dawid EDU — kampania rekrutacyjna | FOTZ Studio"
        description="Kampania Meta Ads dla Dawid EDU: kreacje reklamowe, usprawnienie ścieżki kontaktu i 1 216 wyświetleń strony. Zobacz zakres pracy i wyniki."
        canonical="https://www.fotz-studio.pl/realizacje/dawid-edu"
        ogImage="https://www.fotz-studio.pl/case-studies/dawid-edu/ed-a.webp"
        ogType="article"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl" },
        { name: "Realizacje", url: "https://www.fotz-studio.pl/realizacje" },
        { name: "Dawid EDU", url: "https://www.fotz-studio.pl/realizacje/dawid-edu" },
      ]} />

      <section className="pt-32 md:pt-40 pb-16 section-padding bg-background">
        <div className="container-wide">
          <Link to="/realizacje" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground mb-10">
            <ArrowLeft className="w-4 h-4" /> Wszystkie realizacje
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-5">Dawid EDU · Kampania rekrutacyjna</p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold leading-[1.08] mb-6">
                Od reklamy<br />do rozmowy<br /><span className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent">z rodzicem.</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl mb-7">
                Dla Chrześcijańskich Szkół im. Króla Dawida połączyliśmy kampanię
                na Facebooku i Instagramie z poprawkami na stronie rekrutacyjnej.
                Cel: ułatwić rodzicom poznanie oferty i pierwszy kontakt z placówką.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                {["Meta Ads", "Kreacje reklamowe", "Ścieżka kontaktu"].map(label => (
                  <span key={label} className="rounded-full px-4 py-2 bg-muted border border-border/30">{label}</span>
                ))}
              </div>
            </div>
            <figure className="max-w-xl w-full mx-auto">
              <img src="/case-studies/dawid-edu/ed-a.webp" width="1254" height="1254"
                alt="Reklama Dawid EDU: Nie musi nadążać za klasą. Może iść dalej."
                className="w-full rounded-2xl border border-border/30" fetchPriority="high" />
              <figcaption className="text-xs text-foreground/50 mt-3">Kreacja edukacji domowej — wariant z 28.09.2026.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30 border-y border-border/30">
        <div className="container-wide">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-9">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Kampania w liczbach</h2>
            <p className="text-sm text-foreground/60">18.08–28.09.2026 · Meta Ads</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map(metric => (
              <div key={metric.label} className="rounded-2xl border border-border/40 bg-background p-7 md:p-8">
                <p className="font-heading font-bold text-4xl lg:text-5xl mb-3">{metric.value}</p>
                <p className="text-foreground/65">{metric.label}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground/60 text-sm mt-6 leading-relaxed max-w-4xl">
            Łącznie: 149 814 wyświetleń reklam i 1 887 kliknięć linku. Dane z eksportu
            Meta Ads z 28 września, ok. godz. 20:00; ostatni dzień jest niepełny.
            Zasięg, kliknięcia i wyświetlenia strony nie oznaczają zgłoszeń ani przyjętych
            uczniów. Raport nie pozwala przypisać wszystkich formularzy placówki do reklam.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-4">Zakres współpracy</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold max-w-2xl mb-10">Reklama i strona muszą<br className="hidden md:block" /> prowadzić do tego samego celu.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(step => (
              <article key={step.number} className="border-t border-border/50 pt-6">
                <p className="text-foreground/40 text-sm mb-6">{step.number}</p>
                <h3 className="font-heading font-semibold text-xl mb-4">{step.title}</h3>
                <p className="text-foreground/65 leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 bg-background">
        <div className="container-wide grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <figure className="max-w-xl w-full mx-auto">
            <img src="/case-studies/dawid-edu/ed-c.webp" width="1254" height="1254" loading="lazy"
              alt="Reklama edukacji domowej Dawid EDU o legitymacji szkolnej i egzaminach państwowych."
              className="w-full rounded-2xl border border-border/30" />
            <figcaption className="text-xs text-foreground/50 mt-3">Kreacja odpowiadająca na pytania rodziców — wariant z 28.09.2026.</figcaption>
          </figure>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-4">Pomysł na komunikację</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Najpierw odpowiedź.<br />Potem zaproszenie do kontaktu.</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-7">
              W edukacji domowej rodzic pyta zarówno o tempo nauki, jak i o formalności.
              Dlatego przygotowaliśmy różne komunikaty: od programu dopasowanego do
              dziecka po status ucznia i egzaminy.
            </p>
            <ul className="space-y-4 text-foreground/75">
              {[
                "Jedno czytelne przesłanie w każdej kreacji.",
                "Osobne reklamy dla różnych ofert placówki.",
                "Prosty kolejny krok: kontakt z sekretariatem.",
              ].map(item => <li key={item} className="flex gap-3"><Check className="w-5 h-5 shrink-0 mt-0.5" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30 border-t border-border/30">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-foreground/60 mb-4">Szkoła · Przedszkole · Zajęcia dodatkowe</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">Pokażmy rodzicom,<br />co wyróżnia Twoją placówkę.</h2>
          <p className="text-lg text-foreground/65 mb-8">
            Dobierzemy materiały, reklamę i sposób kontaktu do Twojej oferty,
            lokalizacji oraz możliwości przyjęcia nowych uczniów.
          </p>
          <Button asChild size="lg" className="bg-gradient-brand text-white">
            <Link to="/kontakt">Porozmawiajmy o promocji <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
