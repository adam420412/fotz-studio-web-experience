import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { captureUTMs } from "./lib/utm";
import { hydratedPages, type InitialPage } from "./lib/hydrated-pages";

captureUTMs();

const root = document.getElementById("root")!;
const app = (initialPage?: InitialPage) => (
  <HelmetProvider>
    <App initialPage={initialPage} />
  </HelmetProvider>
);

// Only the documents rendered with the complete App tree can be hydrated.
// The remaining templates and the empty development shell still mount normally.
const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
if (root.dataset.hydratePath === pathname && Object.prototype.hasOwnProperty.call(hydratedPages, pathname)) {
  // Keep the static page visible until its code is ready. Starting hydration
  // sooner lets provider effects interrupt a still-loading Suspense boundary.
  hydratedPages[pathname]().then(({ default: Component }) => {
    hydrateRoot(root, app({ path: pathname, Component }));
  }).catch(() => {
    // Let the existing route ErrorBoundary handle a failed module download.
    createRoot(root).render(app());
  });
} else {
  createRoot(root).render(app());
}
