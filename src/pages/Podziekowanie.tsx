import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Podziekowanie() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Google Analytics conversion tracking
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with your actual conversion ID
        'event_category': 'form_submission',
        'event_label': 'pricing_inquiry',
        'value': 1
      });
      
      // Also send as a standard GA4 event
      window.gtag('event', 'generate_lead', {
        'event_category': 'engagement',
        'event_label': 'pricing_form_submitted'
      });
    }
  }, []);

  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Dziękujemy za zapytanie | Fotz Studio"
        description="Otrzymaliśmy Twoje zapytanie. Skontaktujemy się z Tobą w ciągu 24 godzin."
        canonical="https://fotz.pl/podziekowanie"
        noIndex={true}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dziękujemy", url: "https://fotz.pl/podziekowanie" }
        ]}
      />

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
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-primary" />
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Dziękujemy za <span className="text-primary">zapytanie!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Otrzymaliśmy Twoje zgłoszenie i już nad nim pracujemy. 
              Skontaktujemy się z Tobą w ciągu 24 godzin roboczych.
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
                      <p className="text-xs text-muted-foreground">Przeanalizujemy Twoje potrzeby i wybrane usługi</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Kontakt</p>
                      <p className="text-xs text-muted-foreground">Adam skontaktuje się telefonicznie lub mailowo</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Indywidualna oferta</p>
                      <p className="text-xs text-muted-foreground">Przedstawimy spersonalizowaną propozycję</p>
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
              <a href="mailto:adam@fotz.pl" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>adam@fotz.pl</span>
              </a>
              <a href="tel:+48790814814" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+48 790 814 814</span>
              </a>
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
    </>
  );
}
