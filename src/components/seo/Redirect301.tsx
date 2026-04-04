import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface Redirect301Props {
  to: string;
}

/**
 * Component that performs a 301-like redirect in SPA context.
 * Adds noindex to prevent search engines from indexing redirect pages.
 * For true 301 redirects, server-side configuration (vercel.json) is used.
 */
export function Redirect301({ to }: Redirect301Props) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <title>Przekierowanie...</title>
    </Helmet>
  );
}
