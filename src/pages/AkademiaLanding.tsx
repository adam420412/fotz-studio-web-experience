import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Video, 
  Layers, 
  ArrowRight, 
  CheckCircle,
  Star,
  Users,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const features = [
  {
    icon: BookOpen,
    title: 'E-booki i materiały PDF',
    description: 'Sprawdzone strategie i checklisty do natychmiastowego wdrożenia w Twoim biznesie.'
  },
  {
    icon: Video,
    title: 'Kursy wideo',
    description: 'Praktyczne tutoriale krok po kroku od doświadczonych specjalistów.'
  },
  {
    icon: Layers,
    title: 'Kompletne kursy',
    description: 'Obszerne programy szkoleniowe pokrywające całe zagadnienia marketingowe.'
  },
  {
    icon: TrendingUp,
    title: 'Nowe materiały',
    description: 'Regularnie dodawane nowe treści i aktualizacje istniejących materiałów.'
  }
];

const benefits = [
  'Dostęp do wszystkich e-booków i materiałów PDF',
  'Pełna biblioteka kursów wideo',
  'Nowe materiały dodawane co miesiąc',
  'Sprawdzone strategie marketingowe',
  'Wsparcie i społeczność',
  'Anuluj kiedy chcesz'
];

export default function AkademiaLanding() {
  return (
    <Layout>
      <Helmet>
        <title>Akademia FOTZ - Kursy Marketingowe Online | E-booki i Szkolenia</title>
        <meta 
          name="description" 
          content="Dołącz do Akademii FOTZ i zdobądź praktyczną wiedzę z marketingu. E-booki, kursy wideo i materiały szkoleniowe. Subskrypcja 99 PLN/miesiąc."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm">Praktyczna wiedza od specjalistów</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Akademia <span className="text-gradient">FOTZ</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Zdobądź praktyczną wiedzę z marketingu i rozwiń swój biznes. 
              E-booki, kursy wideo i materiały szkoleniowe w jednym miejscu.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-brand-premium hover:opacity-90 transition-opacity text-lg px-8 py-6"
                asChild
              >
                <Link to="/akademia/auth">
                  Dołącz do Akademii
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span>Dołącz do społeczności</span>
              </div>
            </div>

            {/* Price Tag */}
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass">
              <div>
                <div className="text-4xl font-heading font-bold">99 PLN</div>
                <div className="text-muted-foreground">miesięcznie</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-left">
                <div className="font-semibold">Pełny dostęp</div>
                <div className="text-sm text-muted-foreground">do wszystkich materiałów</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Co znajdziesz w Akademii?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kompleksowe materiały szkoleniowe, które pomogą Ci rozwinąć umiejętności marketingowe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-brand-premium flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm">Wszystko w jednej subskrypcji</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Co zyskujesz?
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-brand-premium mb-4">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2">Subskrypcja Akademii</h3>
                  <p className="text-muted-foreground">Pełny dostęp do wszystkiego</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-5xl font-heading font-bold mb-1">99 PLN</div>
                  <div className="text-muted-foreground">miesięcznie</div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-brand-premium hover:opacity-90 transition-opacity"
                  asChild
                >
                  <Link to="/akademia/auth">
                    Rozpocznij teraz
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Anuluj w dowolnym momencie
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-brand-premium mb-8">
              <Target className="w-10 h-10" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Gotowy, żeby rozwinąć swoje umiejętności?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Dołącz do Akademii FOTZ i zacznij zdobywać praktyczną wiedzę, 
              która pomoże Ci osiągnąć cele biznesowe.
            </p>

            <Button
              size="lg"
              className="bg-gradient-brand-premium hover:opacity-90 transition-opacity text-lg px-10 py-6"
              asChild
            >
              <Link to="/akademia/auth">
                Dołącz do Akademii
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
