import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Supabase i jak skonfigurować Auth z providerami?",
    answer: "Supabase: open-source Firebase alternatywa. PostgreSQL pod spodem. Auth, Storage, Realtime, Edge Functions wbudowane. Self-hosted lub hosted (supabase.com). Klient: npm install @supabase/supabase-js. import {createClient} from '@supabase/supabase-js'. const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY). Auth — Email/Password: await supabase.auth.signUp({email, password}). await supabase.auth.signInWithPassword({email, password}). await supabase.auth.signOut(). OAuth providers: await supabase.auth.signInWithOAuth({provider: 'google', options: {redirectTo: window.location.origin + '/auth/callback'}}). Providers: Google, GitHub, Discord, Twitter, Apple, Facebook. Email OTP (magic link): await supabase.auth.signInWithOtp({email: user@example.com}). Phone OTP: await supabase.auth.signInWithOtp({phone: '+48123456789'}). Session: await supabase.auth.getSession(). await supabase.auth.getUser(). supabase.auth.onAuthStateChange((event, session) => {...}). SSR (Next.js): @supabase/ssr package. createServerClient() dla Server Components. createBrowserClient() dla Client Components. cookies handler. Middleware dla refresh. Next.js cookies() API. Token refresh automatyczny. Row Level Security (RLS): SQL policies na tablicach. Tylko odpowiednie wiersze zwracane. auth.uid() — ID zalogowanego użytkownika. USING (user_id = auth.uid()). Bezpieczeństwo bez serwera aplikacji.",
  },
  {
    question: "Row Level Security (RLS) — bezpieczeństwo na poziomie bazy danych?",
    answer: "RLS: PostgreSQL feature. Filtrowanie wierszy per user. Działa z anonKey — bezpieczne. Włączenie RLS: ALTER TABLE posts ENABLE ROW LEVEL SECURITY. Bez policies — nikt nie ma dostępu. Policy — SELECT: CREATE POLICY 'Users can view own posts' ON posts FOR SELECT USING (auth.uid() = user_id). Policy — INSERT: CREATE POLICY 'Users can insert own posts' ON posts FOR INSERT WITH CHECK (auth.uid() = user_id). Policy — UPDATE: CREATE POLICY 'Users can update own posts' ON posts FOR UPDATE USING (auth.uid() = user_id). Policy — DELETE: similarly. Public read: CREATE POLICY 'Public posts are viewable' ON posts FOR SELECT USING (published = true). Admin bypass: service_role key — omija RLS. Używaj tylko po stronie serwera. Nigdy nie eksponuj service_role. RLS z joins: Policies na każdej tabeli osobno. Recursive policies dla nested data. Pomocnicy: auth.uid() — current user ID. auth.role() — 'anon', 'authenticated', 'service_role'. auth.jwt() -> jsonb — cały JWT. Custom claims: supabase.auth.updateUser({data: {role: 'admin'}}). auth.jwt()->>'role' w policy. Testowanie RLS: Supabase Studio — impersonuj użytkownika. SELECT SET LOCAL role = 'authenticated'. Sprawdź co widzi. TypeScript types: npx supabase gen types typescript. Types dla tabel i columns. database.types.ts. Supabase(() => database.types.ts).",
  },
  {
    question: "Storage — przechowywanie plików z Supabase?",
    answer: "Supabase Storage: S3-compatible (MinIO pod spodem). Buckety (publiczne/prywatne). Transformacje obrazów wbudowane (resize, format). Upload pliku: const {data, error} = await supabase.storage.from('avatars').upload(userId + '/avatar.jpg', file, {upsert: true, contentType: 'image/jpeg'}). data.path — ścieżka w bucket. Download URL: supabase.storage.from('avatars').getPublicUrl(path). URL publiczny (bucket musi być publiczny). Signed URL (prywatne): const {data} = await supabase.storage.from('private').createSignedUrl(path, 3600). 3600 sekund = 1 godzina. Transformacje obrazów: supabase.storage.from('avatars').getPublicUrl(path, {transform: {width: 200, height: 200, resize: 'cover', format: 'webp', quality: 80}}). Automatyczne WebP, resize. Oszczędność bandwidth. RLS na Storage: CREATE POLICY 'Avatar access' ON storage.objects FOR SELECT USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]). foldername() — folder w ścieżce. Delete: supabase.storage.from('bucket').remove([path1, path2]). List: supabase.storage.from('bucket').list(folder). Obsługa błędów: StorageError. Check error.message. Limity: 50MB per file (hosted). Zwiększ na self-hosted. Resumable uploads dla dużych plików. TUS protocol. Storage hooks (Edge Functions): on_upload, on_delete triggers. Auto-generate thumbnails. Virus scanning. Watermarking.",
  },
  {
    question: "Realtime — subskrypcje i broadcasting w Supabase?",
    answer: "Supabase Realtime: WebSocket-based. Postgres Changes — zmiany w DB. Broadcast — własne eventy. Presence — kto jest online. Postgres Changes: supabase.channel('posts-channel').on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'posts', filter: 'user_id=eq.' + userId}, (payload) => { console.log('New post:', payload.new) }).subscribe(). Events: INSERT, UPDATE, DELETE, * (all). Filter: eq, neq, lt, gt, lte, gte, in. RLS respektowane — użytkownik widzi tylko swoje. Broadcast (custom events): const channel = supabase.channel('room:123'). channel.on('broadcast', {event: 'cursor'}, (payload) => { updateCursor(payload.payload) }). channel.subscribe(). channel.send({type: 'broadcast', event: 'cursor', payload: {x: 100, y: 200}}). Presence (who is online): channel.on('presence', {event: 'sync'}, () => { const state = channel.presenceState(). console.log('Online:', state) }). channel.subscribe(async (status) => { await channel.track({user_id: userId, online_at: new Date().toISOString()}) }). channel.untrack(). Collaborative features: cursor sharing z Presence. Live updates z Postgres Changes. Chat z Broadcast. Typing indicators. Cleanup: channel.unsubscribe(). supabase.removeChannel(channel). Skalowanie: Supabase multiplexuje przez jeden WebSocket. Max connections per project plan. Fly.io dla self-hosted Realtime. Broadcast rate limits.",
  },
  {
    question: "Edge Functions, Vector i zaawansowane wzorce Supabase?",
    answer: "Edge Functions: Deno runtime. Globalny deployment. TypeScript natywny. supabase functions new my-function. serve(async (req) => { const {data} = await req.json(). return new Response(JSON.stringify({result: data}), {headers: {'Content-Type': 'application/json'}}) }). Wewnętrzny dostęp do DB: createClient z service_role w Edge Function. Nie eksponuj service_role na frontend. Trigger przez Webhooks: Database webhooks. POST do Edge Function przy INSERT/UPDATE. Automatyzacja na zdarzeniach DB. Supabase Vector (pgvector): CREATE EXTENSION vector. Kolumna embedding vector(1536). cosine_similarity, l2_distance. Semantic search: SELECT *, 1 - (embedding cosine_distance query_embedding) AS similarity FROM documents ORDER BY similarity DESC LIMIT 5. Embedding przy INSERT: Edge Function generuje embedding. OpenAI text-embedding-3-small. Wstawia do DB. Supabase AI (wbudowane): supabase.functions.invoke('generate-embedding', {body: {text}}) lub własna Edge Function. vecs Python client dla vector ops. SQL Querying: supabase.from('posts').select('*, author(name)').eq('published', true).order('created_at', {ascending: false}).limit(10). Full-text search: .textSearch('content', query, {type: 'websearch'}). PostgreSQL full text wbudowany. Cron Jobs (pg_cron): schedule funkcji SQL. Cleanup starych wierszy. Aggregate calculations. Supabase CLI: supabase start — lokalny serwer. supabase db push — apply migrations. supabase gen types typescript. supabase db diff — sprawdź zmiany. Migration workflow.",
  },
];

const supabaseFeatures = [
  { feature: "Auth", opis: "Email, OAuth, OTP, magic link", bezpieczenstwo: "RLS + JWT" },
  { feature: "Database", opis: "PostgreSQL z wszystkimi features", bezpieczenstwo: "RLS policies, service_role" },
  { feature: "Storage", opis: "Pliki + transformacje obrazów", bezpieczenstwo: "Storage RLS policies" },
  { feature: "Realtime", opis: "Postgres Changes, Broadcast, Presence", bezpieczenstwo: "RLS na Postgres Changes" },
  { feature: "Edge Functions", opis: "Deno runtime, globalne", bezpieczenstwo: "service_role tylko server-side" },
  { feature: "Vector", opis: "pgvector — semantic search, RAG", bezpieczenstwo: "RLS jak normalna tabela" },
];

export default function BlogSupabaseDeepDiveCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Supabase | Fotz Studio"
        description="Supabase deep dive: Auth (OAuth, OTP, magic link), Row Level Security (RLS), Storage (transformacje obrazów), Realtime (subscriptions, Presence), Edge…"
        canonical="https://fotz.pl/blog/supabase-auth-rls-storage-realtime-edge-functions-vector-2024"

        keywords="Supabase co to jest, Supabase definicja, czym jest Supabase, Supabase przykłady, jak działa Supabase, Supabase znaczenie, Supabase przewodnik"
      />
      <ArticleSchema
        title="Supabase — Auth, RLS, Storage, Realtime, Edge Functions i Vector 2024?"
        description="6 funkcji Supabase (Auth/Database/Storage/Realtime/Edge Functions/Vector) — RLS policies, OAuth providers, signed URLs, Presence, pgvector semantic search i Next.js SSR."
        url="https://fotz.pl/blog/supabase-auth-rls-storage-realtime-edge-functions-vector-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Supabase", url: "https://fotz.pl/blog/supabase-auth-rls-storage-realtime-edge-functions-vector-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Supabase", url: "/blog/supabase-auth-rls-storage-realtime-edge-functions-vector-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Supabase / PostgreSQL / BaaS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Supabase — open-source BaaS
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Auth (OAuth, OTP, magic link), Row Level Security (RLS), Storage
              (transformacje obrazów), Realtime (Presence), Edge Functions i pgvector.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Auth providers", value: "OAuth/OTP" },
                { label: "DB security", value: "RLS" },
                { label: "Live updates", value: "Realtime" },
                { label: "AI search", value: "pgvector" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 modułów Supabase — opis i bezpieczeństwo</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Auth, Database, Storage, Realtime, Edge Functions i Vector —
              co oferuje i jak zapewnić bezpieczeństwo.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Moduł</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bezpieczeństwo</th>
                </tr>
              </thead>
              <tbody>
                {supabaseFeatures.map((f, i) => (
                  <tr key={f.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.feature}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.opis}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.bezpieczenstwo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <RelatedArticles currentArticleId="supabase-auth-rls-storage-realtime-edge-functions-vector-2024" />
      <ContactSection />
    </Layout>
  );
}
