import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { useAcademyMaterials } from '@/hooks/useAcademyMaterials';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { 
  GraduationCap, 
  BookOpen, 
  Video, 
  Layers, 
  ArrowRight, 
  Lock, 
  LogOut,
  Loader2,
  Download,
  Play
} from 'lucide-react';

export default function Akademia() {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { hasActiveSubscription, loading: subLoading } = useSubscription();
  const { ebooks, videos, courses, loading: materialsLoading } = useAcademyMaterials();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/akademia/auth');
    }
  }, [user, authLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/akademia/auth');
  };

  if (authLoading || subLoading) {
    return (
      <>
        <SEOHead
          title="Akademia FOTZ — Kursy i Materiały Edukacyjne z Marketingu Online"
          description="Akademia FOTZ — kursy marketingowe, materiały edukacyjne, e-booki i webinary o SEO, Google Ads, social media i content marketingu. Nauka marketingu online…"
          canonical="https://fotz.pl/akademia/panel"
          noIndex={true}
        />
        <Layout>
          <div className="min-h-screen flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>

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
              Akademia FOTZ — edukacja marketingowa dla firm i marketerów
            </h2>
            <p className="text-muted-foreground mb-4">
              Akademia FOTZ to platforma edukacyjna Fotz Studio, na której znajdziesz
              kursy, materiały wideo, e-booki i checklisty z marketingu online.
              Edukujemy właścicieli firm, marketerów i freelancerów, którzy chcą
              lepiej rozumieć SEO, Google Ads, social media marketing i content marketing.
              Wiedza praktyczna oparta na realnych projektach — bez zbędnej teorii.
            </p>
            <p className="text-muted-foreground mb-6">
              Akademia marketingowa online to inwestycja w kompetencje, które zwracają
              się wielokrotnie. Firmy, które rozumieją mechanizmy marketingu internetowego,
              podejmują lepsze decyzje, efektywniej współpracują z agencjami i osiągają
              wyższy ROI ze swoich działań marketingowych.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Kursy SEO, Google Ads i social media — materiały edukacyjne z Akademii FOTZ
            </h2>
            <p className="text-muted-foreground mb-4">
              W Akademii FOTZ znajdziesz materiały edukacyjne z zakresu: SEO
              i pozycjonowania stron (od podstaw po zaawansowane techniki link buildingu),
              kampanii Google Ads i Meta Ads (struktura, optymalizacja, remarketing),
              content marketingu i copywritingu, social media marketingu i analityki webowej
              (Google Analytics 4, Search Console). Wszystkie kursy prowadzone przez
              praktyków z Fotz Studio.
            </p>
            <p className="text-muted-foreground mb-6">
              E-booki, checklisty i szablony z Akademii FOTZ to gotowe narzędzia
              do wdrożenia w swojej firmie od razu po pobraniu. Praktyczne, konkretne,
              oparte na najnowszych danych i trendach rynkowych.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Nauka marketingu online — samodzielnie czy z agencją?
            </h2>
            <p className="text-muted-foreground">
              Akademia FOTZ wyposaza Cię w wiedzę, by lepiej rozumieć marketing — i podejmować
              świadome decyzje: co robić samodzielnie, a co zlecać agencji. Jeśli chcesz
              wdrożyć nowo zdobytą wiedzę z pomocą ekspertów, Fotz Studio oferuje
              bezpłatną konsultację marketingową. Edukacja i usługi to dwie ścieżki
              do tego samego celu — sukcesu online Twojej firmy.
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
      </>
    );
  }

  // User is not subscribed - show upgrade prompt
  if (!hasActiveSubscription) {
    return (
      <>
        <SEOHead
          title="Akademia FOTZ | Uzyskaj Dostęp | Fotz Studio"
          description="Odblokuj pełny dostęp do Akademii FOTZ. E-booki, kursy wideo i materiały edukacyjne z marketingu cyfrowego."
          canonical="https://fotz.pl/akademia/panel"
          noIndex={true}
        />
        <Layout>
        <section className="min-h-screen flex items-center justify-center py-24 px-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center relative z-10"
          >
            <div className="glass rounded-2xl p-10 md:p-14">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-brand-premium mb-8">
                <Lock className="w-10 h-10 text-foreground" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Odblokuj dostęp do Akademii
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Zalogowano jako: <span className="text-foreground">{user?.email}</span>
              </p>

              <div className="bg-card/50 rounded-xl p-6 mb-8">
                <div className="text-5xl font-heading font-bold mb-2">
                  99 <span className="text-2xl text-muted-foreground">PLN/mies.</span>
                </div>
                <p className="text-muted-foreground">Pełny dostęp do wszystkich materiałów</p>
              </div>

              <ul className="text-left space-y-3 mb-8">
                {[
                  'Wszystkie e-booki i materiały PDF',
                  'Kursy wideo krok po kroku',
                  'Dostęp do nowych materiałów',
                  'Anuluj kiedy chcesz'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full bg-gradient-brand-premium hover:opacity-90 transition-opacity mb-4"
                disabled
              >
                Wykup subskrypcję
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground mb-6">
                Płatności zostaną uruchomione wkrótce
              </p>

              <button
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mx-auto"
              >
                <LogOut className="w-4 h-4" />
                Wyloguj się
              </button>
            </div>
          </motion.div>
        </section>
      </Layout>
      </>
    );
  }

  // User has active subscription - show materials
  return (
    <>
      <SEOHead
        title="Akademia FOTZ | Materiały Edukacyjne | Fotz Studio"
        description="Akademia FOTZ - e-booki, kursy wideo i materiały edukacyjne z marketingu cyfrowego. Ucz się od ekspertów i rozwijaj swoje umiejętności."
        canonical="https://fotz.pl/akademia/panel"
        noIndex={true}
      />
      <Layout>
        <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-brand-premium flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold">
                  Akademia FOTZ
                </h1>
              </div>
              <p className="text-muted-foreground">
                Witaj, {user?.user_metadata?.full_name || user?.email}!
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Wyloguj się
            </button>
          </motion.div>

          {/* Materials Grid */}
          {materialsLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="space-y-16">
              {/* E-books */}
              {ebooks.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-heading font-bold">E-booki</h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ebooks.map((ebook, i) => (
                      <motion.div
                        key={ebook.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass rounded-xl overflow-hidden group hover-lift"
                      >
                        {ebook.thumbnail_url && (
                          <div className="aspect-[4/3] overflow-hidden">
                            <img loading="lazy" 
                              src={ebook.thumbnail_url} 
                              alt={ebook.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="font-heading font-semibold text-lg mb-2">{ebook.title}</h3>
                          {ebook.description && (
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {ebook.description}
                            </p>
                          )}
                          {ebook.file_url && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full"
                              asChild
                            >
                              <a href={ebook.file_url} target="_blank" rel="noopener noreferrer">
                                <Download className="w-4 h-4 mr-2" />
                                Pobierz
                              </a>
                            </Button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Videos */}
              {videos.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <Video className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-heading font-bold">Materiały wideo</h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video, i) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass rounded-xl overflow-hidden group hover-lift"
                      >
                        <div className="aspect-video overflow-hidden relative">
                          {video.thumbnail_url ? (
                            <img loading="lazy" 
                              src={video.thumbnail_url} 
                              alt={video.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                              <Video className="w-12 h-12 text-muted-foreground" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                              <Play className="w-8 h-8" />
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-heading font-semibold text-lg mb-2">{video.title}</h3>
                          {video.description && (
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {video.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Courses */}
              {courses.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <Layers className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-heading font-bold">Kursy</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {courses.map((course, i) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass rounded-xl overflow-hidden group hover-lift"
                      >
                        {course.thumbnail_url && (
                          <div className="aspect-[21/9] overflow-hidden">
                            <img loading="lazy" 
                              src={course.thumbnail_url} 
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="font-heading font-semibold text-xl mb-2">{course.title}</h3>
                          {course.description && (
                            <p className="text-muted-foreground line-clamp-3">
                              {course.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Empty state */}
              {ebooks.length === 0 && videos.length === 0 && courses.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    Materiały już wkrótce
                  </h3>
                  <p className="text-muted-foreground">
                    Pracujemy nad nowymi materiałami. Sprawdź ponownie wkrótce!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      </Layout>
    </>
  );
}
