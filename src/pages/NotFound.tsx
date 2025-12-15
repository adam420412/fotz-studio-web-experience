import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Home } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center section-padding">
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-heading font-bold text-gradient mb-6">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Strona nie istnieje
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Przepraszamy, ale strona której szukasz nie została znaleziona. 
            Sprawdź adres URL lub wróć na stronę główną.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/" className="group">
                <Home className="w-4 h-4" />
                Strona główna
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/kontakt" className="group">
                Kontakt
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
