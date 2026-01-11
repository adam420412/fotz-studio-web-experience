import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, AlertTriangle, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface SEOCheck {
  name: string;
  status: 'pass' | 'warn' | 'fail';
  value?: string;
  details?: string;
}

/**
 * Development-only SEO Panel
 * Shows real-time SEO validation in the corner of the screen
 */
export function SEODevPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [checks, setChecks] = useState<SEOCheck[]>([]);
  const location = useLocation();

  useEffect(() => {
    // Only show in development
    if (import.meta.env.PROD) return;

    const timer = setTimeout(() => {
      setChecks(runSEOChecks());
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Don't render in production
  if (import.meta.env.PROD) return null;

  const errors = checks.filter(c => c.status === 'fail').length;
  const warnings = checks.filter(c => c.status === 'warn').length;
  const passed = checks.filter(c => c.status === 'pass').length;

  const statusColor = errors > 0 ? 'bg-red-500' : warnings > 0 ? 'bg-yellow-500' : 'bg-green-500';

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 left-4 z-[9999] ${statusColor} text-white px-3 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform`}
      >
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        SEO {errors > 0 ? `❌${errors}` : warnings > 0 ? `⚠️${warnings}` : '✅'}
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-[9999] bg-slate-900 text-white rounded-lg shadow-2xl border border-slate-700 w-80 max-h-[70vh] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-slate-700 bg-slate-800">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${statusColor}`} />
          <span className="font-semibold text-sm">SEO Validator</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-slate-700 rounded">
            {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-slate-700 rounded">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="p-3 bg-slate-800/50 border-b border-slate-700">
        <div className="text-xs text-slate-400 mb-1 truncate">{location.pathname}</div>
        <div className="flex gap-4 text-xs">
          <span className="text-green-400">✓ {passed}</span>
          <span className="text-yellow-400">⚠ {warnings}</span>
          <span className="text-red-400">✗ {errors}</span>
        </div>
      </div>

      {/* Checks List */}
      {!isMinimized && (
        <div className="overflow-y-auto flex-1 p-2 space-y-1">
          {checks.map((check, i) => (
            <div
              key={i}
              className={`p-2 rounded text-xs ${
                check.status === 'fail' ? 'bg-red-900/30' :
                check.status === 'warn' ? 'bg-yellow-900/30' :
                'bg-green-900/30'
              }`}
            >
              <div className="flex items-center gap-2">
                {check.status === 'fail' ? <XCircle size={14} className="text-red-400 shrink-0" /> :
                 check.status === 'warn' ? <AlertTriangle size={14} className="text-yellow-400 shrink-0" /> :
                 <CheckCircle size={14} className="text-green-400 shrink-0" />}
                <span className="font-medium">{check.name}</span>
              </div>
              {check.value && (
                <div className="mt-1 text-slate-400 truncate pl-6" title={check.value}>
                  {check.value.substring(0, 50)}{check.value.length > 50 ? '...' : ''}
                </div>
              )}
              {check.details && (
                <div className="mt-1 text-slate-500 pl-6 text-[10px]">
                  {check.details}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function runSEOChecks(): SEOCheck[] {
  const checks: SEOCheck[] = [];

  // Title
  const title = document.title;
  checks.push({
    name: 'Title',
    status: !title ? 'fail' : title.length > 60 ? 'warn' : 'pass',
    value: title || 'Missing',
    details: title ? `${title.length}/60 chars` : undefined
  });

  // Meta Description
  const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  checks.push({
    name: 'Meta Description',
    status: !metaDesc?.content ? 'fail' : metaDesc.content.length > 160 ? 'warn' : 'pass',
    value: metaDesc?.content?.substring(0, 60) || 'Missing',
    details: metaDesc?.content ? `${metaDesc.content.length}/160 chars` : undefined
  });

  // H1
  const h1Tags = document.querySelectorAll('h1');
  checks.push({
    name: 'H1 Tag',
    status: h1Tags.length === 0 ? 'fail' : h1Tags.length > 1 ? 'warn' : 'pass',
    value: h1Tags[0]?.textContent?.substring(0, 40) || 'Missing',
    details: `${h1Tags.length} found`
  });

  // Canonical
  const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  const hasTrailingSlash = canonical?.href?.endsWith('/') && canonical?.href !== 'https://fotz.pl/';
  checks.push({
    name: 'Canonical URL',
    status: !canonical?.href ? 'fail' : hasTrailingSlash ? 'warn' : 'pass',
    value: canonical?.href || 'Missing',
    details: hasTrailingSlash ? 'Has trailing slash' : undefined
  });

  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  checks.push({
    name: 'Open Graph',
    status: !ogTitle || !ogImage ? 'warn' : 'pass',
    value: ogTitle ? 'Configured' : 'Missing og:title',
    details: ogImage ? 'Has og:image' : 'Missing og:image'
  });

  // Schema.org
  const schemas = document.querySelectorAll('script[type="application/ld+json"]');
  const schemaTypes: string[] = [];
  let schemaErrors = 0;
  
  schemas.forEach(script => {
    try {
      const data = JSON.parse(script.textContent || '');
      if (data['@type']) schemaTypes.push(data['@type']);
    } catch {
      schemaErrors++;
    }
  });

  checks.push({
    name: 'Schema.org',
    status: schemas.length === 0 ? 'warn' : schemaErrors > 0 ? 'fail' : 'pass',
    value: schemaTypes.join(', ') || 'None',
    details: `${schemas.length} schemas found`
  });

  // Images Alt
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt]), img[alt=""]');
  checks.push({
    name: 'Image Alt Tags',
    status: imagesWithoutAlt.length > 5 ? 'fail' : imagesWithoutAlt.length > 0 ? 'warn' : 'pass',
    value: imagesWithoutAlt.length === 0 ? 'All images have alt' : `${imagesWithoutAlt.length} missing`,
  });

  return checks;
}
