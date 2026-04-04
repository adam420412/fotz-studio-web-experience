import { SEOHead } from "@/components/seo/SEOHead";

export default function SEOCluster() {
  return (
    <div>
      <SEOHead
        title="SEO i Pozycjonowanie | Fotz Studio"
        description="Kompleksowe usługi SEO dla Twojej strony. Pozycjonowanie w Google, SEO lokalne, optymalizacja on-page i techniczne. Zwiększ widoczność i organiczny ruch."
        canonical="/seo"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">SEO i Pozycjonowanie</h1>
          <p className="text-xl text-slate-300 mb-12">
            Zwiększ widoczność Twojej strony w wyszukiwarkach i przyciągnij więcej organicznych odwiedzających
          </p>

          {/* Placeholder for service cards - will be updated in Phase 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Audyt SEO</h3>
              <p>Kompleksowa analiza Twojej strony</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Pozycjonowanie</h3>
              <p>Ranking dla kluczowych słów kluczowych</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">SEO Lokalne</h3>
              <p>Dominuj w lokalnych wynikach wyszukiwania</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">SEO e-commerce</h3>
              <p>Zwiększ sprzedaż przez optymalizację SEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
