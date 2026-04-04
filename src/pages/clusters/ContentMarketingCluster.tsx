import { SEOHead } from "@/components/seo/SEOHead";

export default function ContentMarketingCluster() {
  return (
    <div>
      <SEOHead
        title="Content Marketing | Fotz Studio"
        description="Tworzenie treści, copywriting, strategie content marketing. E-booki, artykuły, video content. Zarabiaj na swoich kompetencjach."
        canonical="/content-marketing"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Content Marketing</h1>
          <p className="text-xl text-slate-300 mb-12">
            Wartościowe treści, które przyciągają i konwertują
          </p>

          {/* Placeholder for service cards - will be updated in Phase 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Copywriting</h3>
              <p>Tekst, który sprzedaje</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Blog i Artykuły</h3>
              <p>Treści SEO-friendly dla Twojego branża</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Email Marketing</h3>
              <p>Kampanie emailowe z wysoką konwersją</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Video Content</h3>
              <p>Produkcja i strategie video marketingu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
