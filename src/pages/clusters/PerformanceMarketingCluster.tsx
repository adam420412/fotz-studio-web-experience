import { SEOHead } from "@/components/seo/SEOHead";

export default function PerformanceMarketingCluster() {
  return (
    <div>
      <SEOHead
        title="Performance Marketing & Kampanie Reklamowe | Fotz Studio"
        description="Kampanie Google Ads, Facebook Ads, Instagram. Pozycjonowanie wydajne, retargeting, optymalizacja ROI. Zarabiaj na każdy klik."
        canonical="/performance-marketing"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Performance Marketing</h1>
          <p className="text-xl text-slate-300 mb-12">
            Kampanie reklamowe z mierzalnym zwrotem na inwestycję
          </p>

          {/* Placeholder for service cards - will be updated in Phase 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Google Ads</h3>
              <p>Kampanie w wyszukiwarce Google</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Facebook & Instagram Ads</h3>
              <p>Kampanie na mediach społecznościowych</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">TikTok Ads</h3>
              <p>Dotarcie do młodszej audiencji</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Retargeting</h3>
              <p>Powrót użytkowników do konwersji</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
