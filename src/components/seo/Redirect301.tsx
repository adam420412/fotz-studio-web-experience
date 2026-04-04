import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface Redirect301Props {
  to: string;
}

/**
 * Component that performs a 301-like redirect in SPA context.
 * Renders a minimal but complete HTML page to satisfy crawler checks
 * (H1, viewport, internal links) while immediately redirecting.
 */
export function Redirect301({ to }: Redirect301Props) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Przekierowanie | Fotz Studio</title>
        <meta name="description" content="Ta strona została przeniesiona. Przekierowanie nastąpi automatycznie." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-background p-8">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Przekierowanie...</h1>
          <p className="text-muted-foreground mb-6">
            Ta strona została przeniesiona. Jeśli nie nastąpiło automatyczne przekierowanie,{" "}
            <Link to={to} className="text-primary hover:underline">kliknij tutaj</Link>.
          </p>
          <nav className="flex gap-4 justify-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Strona główna</Link>
            <Link to="/kontakt" className="hover:text-foreground transition-colors">Kontakt</Link>
            <Link to="/uslugi" className="hover:text-foreground transition-colors">Usługi</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
