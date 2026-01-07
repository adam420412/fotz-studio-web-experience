import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Redirect301Props {
  to: string;
}

/**
 * Component that performs a 301-like redirect in SPA context.
 * For true 301 redirects, server-side configuration would be needed,
 * but this ensures consistent UX and prevents 404s.
 */
export function Redirect301({ to }: Redirect301Props) {
  const navigate = useNavigate();

  useEffect(() => {
    // Replace current entry in history (like a 301 redirect)
    navigate(to, { replace: true });
  }, [navigate, to]);

  return null;
}
