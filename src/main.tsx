import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { captureUTMs } from "./lib/utm";
import { hydratedPages, type InitialPage } from "./lib/hydrated-pages";
import { QueryClient } from "@tanstack/react-query";
import { readBlogBootstrap } from "./lib/blog-bootstrap.mjs";

captureUTMs();

const root = document.getElementById("root")!;
const client = new QueryClient();
const app = (initialPage?: InitialPage) => (
  <HelmetProvider>
    <App initialPage={initialPage} client={client} />
  </HelmetProvider>
);

// Only the documents rendered with the complete App tree can be hydrated.
// The remaining templates and the empty development shell still mount normally.
const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const article = root.dataset.hydratePath === pathname
  ? readBlogBootstrap(document.getElementById("fotz-blog-data")?.textContent, pathname) : null;
const loadPage = article ? () => import("./pages/BlogArticleDynamic")
  : Object.prototype.hasOwnProperty.call(hydratedPages, pathname) ? hydratedPages[pathname] : null;
if (root.dataset.hydratePath === pathname && loadPage) {
  if (article) {
    // Render the same snapshot immediately; refresh stale CMS content in the
    // background after mounting, without replacing it with a loading skeleton.
    client.setQueryData(["blog-article", article.slug], article, { updatedAt: 1 });
  }
  // Keep the static page visible until its code is ready. Starting hydration
  // sooner lets provider effects interrupt a still-loading Suspense boundary.
  loadPage().then(({ default: Component }) => {
    hydrateRoot(root, app({ path: article ? "/blog/:slug" : pathname, Component }));
  }).catch(() => {
    // Let the existing route ErrorBoundary handle a failed module download.
    createRoot(root).render(app());
  });
} else {
  createRoot(root).render(app());
}
