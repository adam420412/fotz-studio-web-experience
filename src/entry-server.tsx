import { Suspense, createElement, type PropsWithChildren } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'node:stream';
import { Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/contexts/LanguageContext';
import App from './App';
import { hydratedPages } from '@/lib/hydrated-pages';

const pages = import.meta.glob('./pages/**/*.tsx');
export async function renderPage(file: string, url: string, articles: Array<Record<string, unknown>> = []) {
  const load = pages[`./pages/${file}`];
  if (!load) throw new Error(`No renderer for ${file}`);
  const page = await load() as Record<string, React.ComponentType>;
  const Component = page.default || page[file.split('/').pop()!.replace(/\.tsx$/, '')];
  if (!Component) throw new Error(`No page component: ${file}`);
  const client = new QueryClient({defaultOptions:{queries:{retry:false}}});
  const route = file === 'BlogArticleDynamic.tsx' ? '/blog/:slug' : file === 'SocialMediaClusterHub.tsx' ? '/agencja-social-media/:clusterSlug' : url;
  client.setQueryData(['blog-articles'], articles);
  for (const article of articles) client.setQueryData(['blog-article', article.slug], article);
  if (file === 'SocialMediaClusterHub.tsx' || file === 'SocialMediaPoznan.tsx') {
    const slug = url.split('/').pop();
    client.setQueryData(['cluster-articles', slug], articles.filter(article => article.cluster_slug === slug));
  }
  const context: {helmet?: HelmetServerState} = {};
  const hydrate = Object.prototype.hasOwnProperty.call(hydratedPages, url);
  const ServerRouter = ({ children }: PropsWithChildren) => <StaticRouter location={url}>{children}</StaticRouter>;
  const tree = <HelmetProvider context={context}>{hydrate
    ? <App Router={ServerRouter} client={client} initialPage={{ path: url, Component }} />
    : <QueryClientProvider client={client}><ThemeProvider attribute="class" defaultTheme="dark"><LanguageProvider><TooltipProvider><StaticRouter location={url}><Suspense fallback={null}><Routes><Route path={route} element={createElement(Component)} /></Routes></Suspense></StaticRouter></TooltipProvider></LanguageProvider></ThemeProvider></QueryClientProvider>
  }</HelmetProvider>;
  return new Promise<{body: string; scripts: string; hydrate: boolean}>((resolve, reject) => {
    const output = new PassThrough();
    let html = '';
    const timeout = setTimeout(() => { stream.abort(); reject(new Error(`Render timeout: ${url}`)); }, 20000);
    output.on('data', chunk => { html += chunk.toString(); });
    output.on('end', () => { clearTimeout(timeout); client.clear(); resolve({body: html, scripts: context.helmet?.script.toString() || '', hydrate}); });
    output.on('error', reject);
    const stream = renderToPipeableStream(tree, {
      onAllReady() { stream.pipe(output); },
      onShellError(error) { clearTimeout(timeout); client.clear(); reject(error); },
      onError(error) { clearTimeout(timeout); client.clear(); reject(error); },
    });
  });
}
