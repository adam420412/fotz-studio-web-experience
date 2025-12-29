import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight,
  Sparkles,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Podziekowanie() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Dziękujemy za zapytanie | Fotz Studio</title>
        <meta name="description" content="Otrzymaliśmy Twoje zapytanie. Skontaktujemy się z Tobą w ciągu 24 godzin." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Dziękujemy za <span className="text-primary">zapytanie!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Otrzymaliśmy Twoje zgłoszenie i już nad nim pracujemy. 
              Skontaktujemy się z Tobą w ciągu 24 godzin.
            </p>

            {/* What happens next */}
            <Card className="mb-8 border-primary/20 bg-gradient-to-b from-background to-secondary/30">
              <CardContent className="pt-6">
                <h2 className="text-lg font-heading font-bold mb-4 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Co dalej?
                </h2>
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Analiza zapytania</p>
                      <p className="text-xs text-muted-foreground">Przeanalizujemy Twoje potrzeby</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Kontakt</p>
                      <p className="text-xs text-muted-foreground">Zadzwonimy lub napiszemy</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Propozycja</p>
                      <p className="text-xs text-muted-foreground">Przedstawimy ofertę</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Odpowiedź w 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@fotz.pl</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+48 123 456 789</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/realizacje">
                  Zobacz nasze realizacje
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/">
                  Wróć na stronę główną
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
