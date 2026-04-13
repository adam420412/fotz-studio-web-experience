import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  CheckCircle,
  Star,
  FileText,
  Video,
  Download,
  Zap,
  Award,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import logoFotz from '@/assets/logo-fotz.png';

// Sample product covers for marquee - reduced for performance
const productCovers = [
  { title: 'Social Media Mastery', color: 'from-primary to-secondary' },
  { title: 'Content Marketing', color: 'from-blue-600 to-purple-600' },
  { title: 'Branding Guide', color: 'from-orange-500 to-red-500' },
  { title: 'Video Production', color: 'from-green-500 to-teal-500' },
  { title: 'SEO Fundamentals', color: 'from-pink-500 to-rose-500' },
  { title: 'Analytics Deep Dive', color: 'from-indigo-500 to-blue-500' },
];

const testimonials = [
  { name: 'Anna K.', avatar: 'A', company: 'StartupXYZ' },
  { name: 'Michał P.', avatar: 'M', company: 'AgencyPro' },
  { name: 'Kasia W.', avatar: 'K', company: 'BrandCo' },
  { name: 'Tomek R.', avatar: 'T', company: 'MediaHouse' },
  { name: 'Ola S.', avatar: 'O', company: 'CreativeStudio' },
];

const features = [
  { icon: FileText, label: 'E-booki i checklisty', count: '20+' },
  { icon: Video, label: 'Kursy wideo', count: '15+' },
  { icon: Download, label: 'Materiały do pobrania', count: '50+' },
];

const benefits = [
  'Gotowe strategie do wdrożenia',
  'Sprawdzone szablony i checklisty',
  'Praktyczna wiedza od praktyków',
  'Nowe materiały co miesiąc',
  'Dostęp z każdego urządzenia',
  'Anuluj kiedy chcesz'
];

export default function AkademiaLanding() {
  return (
    <Layout>
      <SEOHead
        title="Akademia FOTZ — Kursy Marketingowe Online dla Firm i Marketerów"
        description="Akademia FOTZ — kursy i e-booki marketingowe. Naucz się SEO, Google Ads, social media i content marketingu od praktyków. Dostęp online 24/7. Fotz Studio."
        canonical="https://fotz.pl/akademia"
        keywords="akademia marketingowa online, kursy marketingowe dla firm, szkolenia SEO online, kursy Google Ads, akademia fotz, marketing online kursy, e-booki marketingowe"
      />

      {/* Top Banner */}
      <div className="bg-gradient-brand-premium py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Nowa Akademia FOTZ
          </span>
          <span className="text-foreground/80">Pełny dostęp do wszystkich materiałów</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 overflow-hidden bg-background">
        {/* Background effects - simplified */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[60px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Social Proof Avatars - no animation */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="flex -space-x-3">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="w-10 h-10 rounded-full bg-gradient-brand-premium flex items-center justify-center text-sm font-semibold border-2 border-background"
                  style={{ zIndex: testimonials.length - i }}
                >
                  {t.avatar}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">100+ kursantów</span>
          </div>

          {/* Main Headline - CSS animation instead of framer */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[1.1] animate-fade-in">
            Gotowe Materiały Marketingowe
            <br />
            <span className="text-gradient">dla Twojego Biznesu</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-100">
            E-booki, kursy wideo i sprawdzone strategie gotowe do wdrożenia. 
            Bez miesięcy tworzenia własnych materiałów.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in animation-delay-200">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Gotowe materiały</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Praktyczna wiedza</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-6 animate-fade-in animation-delay-300">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 transition-all text-lg px-8 py-6 rounded-full font-semibold press-effect"
              asChild
            >
              <Link to="/akademia/auth">
                Przeglądaj materiały
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <p className="text-muted-foreground text-sm animate-fade-in animation-delay-400">
            Ponad 50+ gotowych materiałów
          </p>
        </div>

        {/* Product Marquee - CSS animation for better performance */}
        <div className="w-full mt-16 overflow-hidden">
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* First row - CSS marquee */}
            <div className="flex gap-6 mb-6 marquee-left">
              {[...productCovers, ...productCovers].map((product, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-40 h-56 rounded-xl bg-gradient-to-br ${product.color} p-4 flex flex-col justify-end shadow-lg`}
                >
                  <div className="text-xs font-medium text-white/80 mb-1">E-book</div>
                  <div className="text-sm font-bold text-white leading-tight">{product.title}</div>
                </div>
              ))}
            </div>

            {/* Second row - CSS marquee reverse */}
            <div className="flex gap-6 marquee-right">
              {[...productCovers].reverse().concat(productCovers).map((product, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-40 h-56 rounded-xl bg-gradient-to-br ${product.color} p-4 flex flex-col justify-end shadow-lg`}
                >
                  <div className="text-xs font-medium text-white/80 mb-1">Kurs</div>
                  <div className="text-sm font-bold text-white leading-tight">{product.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-card border border-border mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold mb-1">{feature.count}</div>
                <div className="text-sm text-muted-foreground">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm">Oszczędź czas i pieniądze</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Wszystko czego potrzebujesz
                <br />
                <span className="text-gradient">w jednym miejscu</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Gotowe materiały marketingowe stworzone przez praktyków. 
                Bez wydawania tysięcy na kursy i miesiące tworzenia własnych treści.
              </p>
              
              <div className="grid gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/30"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand-premium rounded-3xl blur-3xl opacity-20" />
              <div className="relative glass rounded-3xl p-8 md:p-10 border border-border/50">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-gradient-brand-premium text-sm font-medium">
                    Najpopularniejszy
                  </div>
                </div>

                <div className="text-center mb-8 pt-4">
                  <img loading="lazy" src={logoFotz} alt="FOTZ" className="h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold mb-2">Akademia FOTZ</h3>
                  <p className="text-muted-foreground">Pełny dostęp do wszystkich materiałów</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-heading font-bold">99</span>
                    <span className="text-2xl font-heading">PLN</span>
                  </div>
                  <div className="text-muted-foreground">miesięcznie</div>
                </div>

                <div className="space-y-3 mb-8">
                  {['Wszystkie e-booki i PDF-y', 'Pełne kursy wideo', 'Nowe materiały co miesiąc', 'Wsparcie społeczności'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all rounded-full font-semibold press-effect"
                  asChild
                >
                  <Link to="/akademia/auth">
                    Dołącz teraz
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Możesz anulować w dowolnym momencie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm">Opinie kursantów</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Co mówią nasi kursanci?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Anna K.', role: 'Marketing Manager', text: 'Materiały są niesamowicie praktyczne. Od razu mogłam wdrożyć strategie w mojej firmie.' },
              { name: 'Michał P.', role: 'Właściciel agencji', text: 'Oszczędziłem setki godzin dzięki gotowym szablonom i checklistom. Gorąco polecam!' },
              { name: 'Kasia W.', role: 'Freelancer', text: 'Najlepsza inwestycja w moją edukację marketingową. Wiedza jest aktualna i sprawdzona.' },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="glass rounded-2xl p-6 border border-border/30"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand-premium flex items-center justify-center font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Gotowy na rozwój?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Dołącz do Akademii FOTZ i zacznij korzystać z gotowych materiałów 
              marketingowych już dziś.
            </p>

            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 transition-all text-lg px-10 py-6 rounded-full font-semibold press-effect"
              asChild
            >
              <Link to="/akademia/auth">
                Dołącz za 99 PLN/miesiąc
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Natychmiastowy dostęp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Anuluj kiedy chcesz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Kursy marketingowe online — naucz się od praktyków z Fotz Studio
            </h2>
            <p className="text-muted-foreground mb-4">
              Akademia FOTZ oferuje kursy marketingowe online tworzone przez praktyków
              z wieloletnim doświadczeniem w prowadzeniu kampanii dla polskich firm.
              Uczysz się tego, co naprawdę działa na polskim rynku — bez angielskojęzycznych
              teorii oderwanych od rzeczywistości. Każdy kurs zawiera konkretne ćwiczenia,
              szablony i case studies z prawdziwych projektów.
            </p>
            <p className="text-muted-foreground mb-6">
              Kursy dostępne online 24/7 — uczysz się w swoim tempie, w dowolnym miejscu.
              Materiały wideo, PDF-y do pobrania i quizy sprawdzające wiedzę. Certyfikat
              ukończenia dla każdego kursu, który możesz dodać do profilu LinkedIn.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Dla kogo są kursy Akademii FOTZ? Właściciele firm, marketerzy, freelancerzy
            </h2>
            <p className="text-muted-foreground mb-4">
              Akademia FOTZ jest idealna dla: właścicieli firm chcących samodzielnie
              prowadzić podstawowe działania marketingowe lub lepiej nadzorować agencję,
              marketerów i specjalistów poszerzających kompetencje, freelancerów
              budujących portfolio usług marketingowych oraz studentów chcących wejść
              do branży marketingowej z praktyczną wiedzą.
            </p>
            <p className="text-muted-foreground">
              Inwestycja w wiedzę marketingową to jedna z najlepszych decyzji biznesowych.
              Nawet jeśli zlecasz marketing zewnętrznej agencji — wiedza pozwala Ci
              oceniać jakość pracy, zadawać właściwe pytania i osiągać lepsze wyniki
              ze współpracy. Zarejestruj się w Akademii FOTZ i zacznij się rozwijać już dziś.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
