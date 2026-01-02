import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Download, 
  Share, 
  PlusSquare, 
  MoreVertical,
  CheckCircle2,
  Wifi,
  Zap,
  Bell
} from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const Zainstaluj = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    setIsAndroid(/android/.test(userAgent));

    // Listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);
    
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const benefits = [
    {
      icon: Zap,
      title: "Błyskawiczne ładowanie",
      description: "Aplikacja ładuje się natychmiast, nawet przy wolnym połączeniu"
    },
    {
      icon: Wifi,
      title: "Działa offline",
      description: "Przeglądaj nasze usługi i portfolio bez internetu"
    },
    {
      icon: Bell,
      title: "Szybki dostęp",
      description: "Uruchom aplikację jednym kliknięciem z ekranu głównego"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zainstaluj aplikację Fotz Studio | PWA</title>
        <meta 
          name="description" 
          content="Zainstaluj aplikację Fotz Studio na swoim telefonie. Szybki dostęp do usług marketingowych, offline i bez konieczności pobierania ze sklepu." 
        />
      </Helmet>
      
      <Layout>
        <section className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px]"
              style={{ background: "hsla(336, 71%, 27%, 0.15)" }}
            />
          </div>

          <div className="container-wide relative z-10 max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-brand mb-6">
                <Smartphone className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Zainstaluj <span className="text-gradient-premium">Fotz Studio</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dodaj naszą aplikację do ekranu głównego telefonu. Szybki dostęp do wszystkich usług bez pobierania ze sklepu.
              </p>
            </motion.div>

            {/* Already installed */}
            {isInstalled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center mb-12"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-heading font-bold text-green-400 mb-2">
                  Aplikacja zainstalowana!
                </h2>
                <p className="text-muted-foreground">
                  Fotz Studio jest już na Twoim ekranie głównym. Dziękujemy!
                </p>
              </motion.div>
            )}

            {/* Install button for supported browsers */}
            {deferredPrompt && !isInstalled && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-12"
              >
                <Button 
                  onClick={handleInstall}
                  size="xl"
                  variant="hero"
                  className="gap-3"
                >
                  <Download className="w-5 h-5" />
                  Zainstaluj aplikację
                </Button>
              </motion.div>
            )}

            {/* iOS Instructions */}
            {isIOS && !isInstalled && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8 mb-12"
              >
                <h2 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  Instrukcja dla iPhone/iPad
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium mb-1">Otwórz w Safari</p>
                      <p className="text-muted-foreground text-sm">
                        Upewnij się, że przeglądasz tę stronę w przeglądarce Safari
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium mb-1 flex items-center gap-2">
                        Kliknij ikonę Udostępnij
                        <Share className="w-5 h-5 text-primary" />
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Znajdziesz ją na dolnym pasku przeglądarki
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium mb-1 flex items-center gap-2">
                        Wybierz "Dodaj do ekranu początkowego"
                        <PlusSquare className="w-5 h-5 text-primary" />
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Przewiń w dół menu, aby znaleźć tę opcję
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-medium mb-1">Potwierdź "Dodaj"</p>
                      <p className="text-muted-foreground text-sm">
                        Aplikacja pojawi się na Twoim ekranie głównym
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Android Instructions */}
            {isAndroid && !isInstalled && !deferredPrompt && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8 mb-12"
              >
                <h2 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  Instrukcja dla Android
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium mb-1 flex items-center gap-2">
                        Kliknij menu przeglądarki
                        <MoreVertical className="w-5 h-5 text-primary" />
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Trzy kropki w prawym górnym rogu Chrome
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium mb-1">Wybierz "Zainstaluj aplikację" lub "Dodaj do ekranu głównego"</p>
                      <p className="text-muted-foreground text-sm">
                        Opcja może mieć różne nazwy w zależności od przeglądarki
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium mb-1">Potwierdź instalację</p>
                      <p className="text-muted-foreground text-sm">
                        Aplikacja zostanie dodana do ekranu głównego
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-heading font-bold text-center mb-8">
                Dlaczego warto zainstalować?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Zainstaluj;
