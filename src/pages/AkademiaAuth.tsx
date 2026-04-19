import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { GraduationCap, Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { z } from 'zod';

const emailSchema = z.string().email('Nieprawidłowy adres email');
const passwordSchema = z.string().min(6, 'Hasło musi mieć minimum 6 znaków');

export default function AkademiaAuth() {
  const navigate = useNavigate();
  const { user, loading: authLoading, signIn, signUp } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (user && !authLoading) {
      navigate('/akademia/panel');
    }
  }, [user, authLoading, navigate]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    try {
      emailSchema.parse(formData.email);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.email = e.errors[0].message;
      }
    }

    try {
      passwordSchema.parse(formData.password);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.password = e.errors[0].message;
      }
    }

    if (!isLogin && !formData.fullName.trim()) {
      newErrors.fullName = 'Imię i nazwisko jest wymagane';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(formData.email, formData.password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast.error('Nieprawidłowy email lub hasło');
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success('Zalogowano pomyślnie!');
          navigate('/akademia/panel');
        }
      } else {
        const { error } = await signUp(formData.email, formData.password, formData.fullName);
        if (error) {
          if (error.message.includes('User already registered')) {
            toast.error('Użytkownik z tym adresem email już istnieje');
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success('Konto utworzone! Możesz się teraz zalogować.');
          navigate('/akademia/panel');
        }
      }
    } catch (error) {
      toast.error('Wystąpił błąd. Spróbuj ponownie.');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <>
        <SEOHead
          title="Logowanie - Akademia FOTZ | Fotz Studio"
          description="Zaloguj się lub zarejestruj do Akademii FOTZ. Dostęp do e-booków, kursów wideo i materiałów edukacyjnych z marketingu cyfrowego."
          canonical="https://fotz.pl/zasoby"
          noIndex={true}
        />
        <Layout>
          <div className="min-h-screen flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Logowanie - Akademia FOTZ | Fotz Studio"
        description="Zaloguj się lub zarejestruj do Akademii FOTZ. Dostęp do e-booków, kursów wideo i materiałów edukacyjnych z marketingu cyfrowego."
        canonical="https://fotz.pl/zasoby"
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
          transition={{ duration: 0.6 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="glass rounded-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-brand-premium mb-6">
                <GraduationCap className="w-8 h-8 text-foreground" />
              </div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                {isLogin ? 'Zaloguj się' : 'Załóż konto'}
              </h1>
              <p className="text-muted-foreground">
                {isLogin 
                  ? 'Zaloguj się do Akademii FOTZ' 
                  : 'Dołącz do Akademii FOTZ'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Imię i nazwisko</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Jan Kowalski"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="pl-10 bg-background/50 border-border/50"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="twoj@email.pl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 bg-background/50 border-border/50"
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Hasło</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 bg-background/50 border-border/50"
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-brand-premium hover:opacity-90 transition-opacity"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    {isLogin ? 'Zaloguj się' : 'Załóż konto'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrors({});
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {isLogin 
                  ? 'Nie masz konta? Zarejestruj się' 
                  : 'Masz już konto? Zaloguj się'}
              </button>
            </div>
          </div>
        </motion.div>
      </section>
      </Layout>
    </>
  );
}
