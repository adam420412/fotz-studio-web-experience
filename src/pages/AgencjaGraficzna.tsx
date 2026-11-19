import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, ZoomIn } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, OrganizationSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { graphicFaq, graphicPackages, graphicServices } from "@/data/graphic-design-offer";
import workImages from "@/data/industry-work-images.json";
import { enquiryHref } from "@/lib/enquiry.mjs";

const projects = [
  {
    name: "FPS Poznań", href: "/realizacje/fps-cegielski", images: workImages.fps,
    alt: "Strona Fabryki Pojazdów Szynowych H. Cegielski z prezentacją pojazdów",
    text: "Dla Fabryki Pojazdów Szynowych H. Cegielski opracowaliśmy identyfikację wizualną i stronę internetową. Zobacz, jak zaprezentowaliśmy producenta oraz jego ofertę taboru osobom, które oceniają kompetencje przemysłowego partnera.",
  },
  {
    name: "Friendly Gas", href: "/realizacje/friendly-gas", images: workImages["friendly-gas"],
    alt: "Widok strony Friendly Gas z ofertą gazów i zamówieniami online",
    text: "Dla dystrybutora gazów połączyliśmy nową identyfikację z serwisem do zamówień online. To przykład dla firmy, która chce przy odświeżaniu marki uporządkować także prezentację produktów i drogę klienta do zamówienia.",
  },
];

const relatedServices = [
  { href: "/uslugi/branding", label: "Branding i strategia marki" },
  { href: "/uslugi/strony-internetowe", label: "Strony internetowe" },
  { href: "/social-media", label: "Obsługa social media" },
  { href: "/content-marketing", label: "Content marketing" },
  { href: "/wizualizacje-3d", label: "Wizualizacje 3D produktów i wnętrz" },
];

export default function AgencjaGraficzna() {
  const [selected, setSelected] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const active = selected === null ? null : projects[selected];
  return (
    <Layout workPlacement="after-main">
      <SEOHead
        title="Agencja graficzna w Poznaniu | Agencja reklamowa FOTZ Studio"
        description="Studio graficzne i agencja reklamowa – Poznań. Projektujemy logo i materiały do druku. Kompleksowa obsługa lub projekt od 500 zł netto. Zobacz realizacje FOTZ."
        canonical="https://www.fotz-studio.pl/agencja-graficzna"
      />
      <OrganizationSchema />
      <ServiceSchema name="Projektowanie graficzne dla firm" description="Identyfikacja wizualna, materiały do druku i kreacje reklamowe. Pojedyncze zlecenia i stała obsługa." provider="FOTZ Studio" areaServed="Polska" />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl" },
        { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
        { name: "Agencja graficzna", url: "https://www.fotz-studio.pl/agencja-graficzna" },
      ]} />
      <FAQSchema items={graphicFaq} />

      <section className="section-padding pt-32 pb-14 lg:pt-44 lg:pb-20 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end">
          <div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">Studio graficzne i agencja reklamowa, Poznań</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Potrzebujesz logo na start, katalogu dla handlowców albo grafika do stałej współpracy? W FOTZ Studio projektujemy materiały do druku i internetu. Możesz zlecić pojedynczy projekt od 500 zł netto lub wybrać miesięczną obsługę.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg"><Link to={enquiryHref("graphics")}>Poproś o wycenę projektu <ArrowRight /></Link></Button>
              <Button asChild variant="outline" size="lg"><a href="#cennik">Porównaj ceny i pakiety</a></Button>
            </div>
          </div>
          <div className="border-l-2 border-primary/50 pl-6 max-w-md lg:mb-2">
            <h2 className="text-xl font-heading font-semibold">Co podać do wyceny?</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">Napisz, co ma powstać, dla kogo i na kiedy. Na przykład tak. „Za cztery tygodnie otwieramy kawiarnię. Potrzebujemy menu do druku i na telefon”. Jeśli masz już materiały swojej firmy, dodaj link.</p>
            <a href="#realizacje" className="inline-flex items-center gap-2 mt-3 font-semibold text-primary underline underline-offset-4">Obejrzyj projekty FOTZ <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="realizacje" className="section-padding py-14 scroll-mt-20">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Studio graficzne w Poznaniu – portfolio</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">Dwa różne cele biznesowe i dwa sposoby pokazania oferty. Otwórz realizację, żeby obejrzeć, jak identyfikacja marki działa na stronie, którą rzeczywiście odwiedzają jej klienci.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => {
              const image = project.images[project.images.length - 1];
              return <article key={project.href}>
                <button type="button" aria-label={`Powiększ projekt ${project.name}`} className="group relative block w-full overflow-hidden rounded-xl border bg-muted focus-visible:ring-2 focus-visible:ring-primary" onClick={event => { opener.current = event.currentTarget; setSelected(index); }}>
                  <img loading="lazy" src={image.src} srcSet={project.images.map(item => `${item.src} ${item.width}w`).join(", ")} sizes="(min-width: 768px) 45vw, 94vw" width={image.width} height={image.height} className="aspect-video w-full object-contain" alt={project.alt} />
                  <ZoomIn aria-hidden="true" className="absolute right-3 bottom-3 h-9 w-9 rounded-full bg-background p-2 text-primary shadow" />
                </button>
                <h3 className="mt-4 text-2xl font-heading font-semibold">{project.name}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{project.text}</p>
                <Link className="mt-3 inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4" to={project.href}>Zobacz projekt {project.name} <ArrowUpRight size={16} /></Link>
              </article>;
            })}
          </div>
          <Link to="/realizacje" className="mt-6 inline-block underline underline-offset-4">Wszystkie realizacje FOTZ Studio</Link>
        </div>
      </section>
      <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
        {active && <DialogContent className="max-w-4xl" onCloseAutoFocus={event => { event.preventDefault(); opener.current?.focus(); }}>
          <DialogTitle>{active.name}</DialogTitle>
          <DialogDescription>{active.alt}</DialogDescription>
          <img src={active.images[active.images.length - 1].src} alt={active.alt} className="max-h-[58vh] mx-auto object-contain" />
          <div className="flex flex-wrap gap-3 justify-between">
            <Button variant="outline" onClick={() => setSelected(((selected ?? 0) + projects.length - 1) % projects.length)}>Poprzedni projekt</Button>
            <Button variant="outline" onClick={() => setSelected(((selected ?? 0) + 1) % projects.length)}>Następny projekt</Button>
          </div>
        </DialogContent>}
      </Dialog>

      <section className="section-padding py-16 bg-muted/35">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Co projektujemy jako agencja reklamowa w Poznaniu?</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">Możesz przyjść z gotową księgą marki, z pierwszym pomysłem albo z przykładem materiału, który wymaga poprawy. Zaczniemy od miejsca, w którym klient ma zobaczyć Twoją ofertę.</p>
          <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {graphicServices.map(service => <article key={service.title} className="border-t border-border pt-5">
              <h3 className="font-heading font-semibold text-xl">{service.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{service.text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section-padding py-14">
        <div className="container-wide grid gap-8 lg:grid-cols-3">
          <article>
            <h2 className="text-2xl font-heading font-semibold">Identyfikacja wizualna i rebranding – od czego zacząć?</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">Jeśli zmienia się oferta Twojej firmy, zbierz kilka rzeczy, które klient dostaje dziś do ręki. Czy wizytówka handlowca, katalog PDF i reklama pokazują tę samą markę? Wspólnie ustalimy, które elementy budują jej rozpoznawalność, a które utrudniają odbiór. Możemy odświeżyć jeden materiał albo zaplanować kompleksowy rebranding bez wymieniania wszystkiego naraz.</p>
          </article>
          <article>
            <h2 className="text-2xl font-heading font-semibold">Kreacje reklamowe i cele biznesowe kampanii</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">Profesjonalne materiały mają pomóc komuś w konkretnej decyzji. W gastronomii może to być wybór zestawu lunchowego, w firmie usługowej przesłanie zdjęcia do wyceny. W briefie zapytamy, jaki komunikat już działa w sprzedaży i co ma zrobić odbiorca reklamy. Dopiero wtedy proponujemy kierunek kreatywny, formaty i wersje do testu. Jeśli dział marketingu prowadzi już kampanię, wykorzystamy jej założenia.</p>
          </article>
          <article>
            <h2 className="text-2xl font-heading font-semibold">Kiedy potrzebna jest kompleksowa obsługa graficzna?</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">Przy jednym wydarzeniu wystarczy ustalić listę nośników i datę przekazania do druku. Gdy w każdym miesiącu zmieniają się promocje, a materiały zamawiają różne działy, spiszmy wspólny kalendarz. Obsługa graficzna może wtedy objąć jednocześnie kreacje do digital marketingu i druk. Uzgadniamy, kto zleca prace i kto akceptuje pliki, żeby każda kolejna wersja wspierała ten sam wizerunek firmy.</p>
          </article>
        </div>
      </section>

      <section id="cennik" className="section-padding py-16 scroll-mt-20">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Projektowanie graficzne – cennik i kompleksowa obsługa firm</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">Jednorazowe zlecenie sprawdza się przy konkretnym terminie, np. przed targami. Pakiet miesięczny ułatwia planowanie budżetu, jeśli zespół regularnie potrzebuje nowych materiałów. Wszystkie ceny są netto.</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {graphicPackages.map(pkg => <article key={pkg.variant} className="flex flex-col rounded-xl border p-6 bg-card">
              <h3 className="font-heading font-semibold text-xl">{pkg.name}</h3>
              <p className="mt-3"><strong className="text-3xl">{pkg.price}</strong> <span className="block text-sm text-muted-foreground">{pkg.period}</span></p>
              <p className="mt-4 text-muted-foreground">{pkg.text}</p>
              <ul className="my-5 space-y-2">{pkg.features.map(item => <li key={item} className="flex gap-2"><Check size={18} aria-hidden="true" className="text-primary shrink-0 mt-1" />{item}</li>)}</ul>
              <Button asChild variant="outline" className="mt-auto"><Link to={enquiryHref("graphics", pkg.variant)}>{pkg.cta}</Link></Button>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section-padding py-14 bg-muted/35">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Współpraca z grafikiem a działania marketingowe firmy</h2>
          <div className="mt-6 divide-y divide-border">{graphicFaq.map(item => <details key={item.question} className="py-4">
            <summary className="font-semibold cursor-pointer">{item.question}</summary>
            <p className="mt-3 text-muted-foreground leading-relaxed">{item.answer}</p>
          </details>)}</div>
        </div>
      </section>
      <section className="section-padding py-16">
        <div className="container-wide grid gap-10 md:grid-cols-2">
          <div><h2 className="text-3xl font-heading font-bold">Zleć nam projekt graficzny dla Twojej firmy</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">Potrzebujesz profesjonalnych materiałów dla handlowców? Przyślij ostatnią ofertę i pytanie, na które najczęściej odpowiadasz po jej wysłaniu. Nasza agencja graficzna zaproponuje, jak pokazać odpowiedź w katalogu. Ta sama zasada pomaga w budowaniu wizerunku pracodawcy lub przy premierze produktu.</p>
            <p className="mt-3 max-w-xl text-muted-foreground">Masz datę targów, otwarcia lokalu lub startu kampanii? Podaj ją w formularzu. Wrócimy z propozycją zakresu, wyceną i terminem do potwierdzenia.</p>
            <Button asChild variant="hero" size="lg" className="mt-5"><Link to={enquiryHref("graphics")}>Opisz swój projekt <ArrowRight /></Link></Button>
          </div>
          <div><h2 className="text-xl font-heading font-semibold">Jak połączyć branding, marketing i działania online?</h2>
            <ul className="mt-3 space-y-2">{relatedServices.map(service => <li key={service.href}><Link to={service.href} className="text-primary underline underline-offset-4">{service.label}</Link></li>)}</ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
