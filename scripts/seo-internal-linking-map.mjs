/**
 * SEO Internal Linking Map Generator
 * Generuje mapę połączeń wewnętrznych między stronami serwisu
 * 
 * Uruchomienie: node scripts/seo-internal-linking-map.mjs
 */

// Mapa wszystkich artykułów blogowych i ich powiązań
const blogArticles = {
  "seo-ecommerce": {
    title: "SEO dla sklepów e-commerce",
    path: "/blog/seo-ecommerce",
    linksTo: ["/pozycjonowanie", "/google-ads", "/ecommerce-tworzenie-sklepu", "/content-marketing", "/blog/ux-ui-ecommerce"],
    linkedFrom: ["/blog/ux-ui-ecommerce", "/blog/google-analytics-4-poradnik", "/blog/remarketing-poradnik"]
  },
  "ux-ui-ecommerce": {
    title: "UX/UI w e-commerce",
    path: "/blog/ux-ui-ecommerce",
    linksTo: ["/ecommerce-tworzenie-sklepu", "/strony-internetowe", "/blog/seo-ecommerce"],
    linkedFrom: ["/blog/seo-ecommerce", "/blog/ile-kosztuje-strona-internetowa"]
  },
  "google-analytics-4-poradnik": {
    title: "Google Analytics 4",
    path: "/blog/google-analytics-4-poradnik",
    linksTo: ["/pozycjonowanie", "/google-ads", "/kampanie-reklamowe"],
    linkedFrom: ["/blog/remarketing-poradnik", "/blog/google-ads-vs-facebook-ads", "/blog/seo-ecommerce"]
  },
  "remarketing-poradnik": {
    title: "Remarketing",
    path: "/blog/remarketing-poradnik",
    linksTo: ["/kampanie-reklamowe", "/google-ads", "/facebook-ads", "/blog/google-analytics-4-poradnik"],
    linkedFrom: ["/blog/google-ads-vs-facebook-ads", "/blog/b2b-vs-b2c-marketing"]
  },
  "copywriting-landing-page": {
    title: "Copywriting dla Landing Page",
    path: "/blog/copywriting-landing-page",
    linksTo: ["/content-marketing", "/kampanie-reklamowe", "/strony-internetowe", "/landing-page"],
    linkedFrom: ["/blog/jak-stworzyc-landing-page", "/blog/email-marketing-2025"]
  },
  "ile-kosztuje-strona-internetowa": {
    title: "Ile kosztuje strona internetowa",
    path: "/blog/ile-kosztuje-strona-internetowa",
    linksTo: ["/strony-internetowe", "/pozycjonowanie", "/ecommerce-tworzenie-sklepu"],
    linkedFrom: ["/blog/jak-stworzyc-strone", "/blog/ux-ui-ecommerce"]
  },
  "marketing-automation-2025": {
    title: "Marketing Automation",
    path: "/blog/marketing-automation-2025",
    linksTo: ["/kampanie-reklamowe", "/pozycjonowanie", "/content-marketing", "/google-ads", "/facebook-ads"],
    linkedFrom: ["/blog/email-marketing-2025", "/blog/b2b-vs-b2c-marketing", "/blog/ai-w-marketingu-msp-2025"]
  },
  "email-marketing-2025": {
    title: "Email Marketing",
    path: "/blog/email-marketing-2025",
    linksTo: ["/content-marketing", "/kampanie-reklamowe", "/blog/marketing-automation-2025", "/blog/copywriting-landing-page"],
    linkedFrom: ["/blog/marketing-automation-2025", "/blog/b2b-vs-b2c-marketing"]
  },
  "b2b-vs-b2c-marketing": {
    title: "B2B vs B2C Marketing",
    path: "/blog/b2b-vs-b2c-marketing",
    linksTo: ["/linkedin-ads", "/content-marketing", "/blog/marketing-automation-2025", "/google-ads", "/pozycjonowanie", "/facebook-ads", "/instagram-ads", "/tiktok-ads", "/ecommerce-tworzenie-sklepu", "/blog/remarketing-poradnik", "/blog/influencer-marketing-polska"],
    linkedFrom: []
  },
  "google-ads-vs-facebook-ads": {
    title: "Google Ads vs Facebook Ads",
    path: "/blog/google-ads-vs-facebook-ads",
    linksTo: ["/google-ads", "/facebook-ads", "/kampanie-reklamowe", "/blog/remarketing-poradnik", "/blog/google-analytics-4-poradnik"],
    linkedFrom: ["/blog/remarketing-poradnik", "/blog/kampania-reklamowa-marketingowa"]
  },
  "ai-w-marketingu-msp-2025": {
    title: "AI w marketingu dla MŚP",
    path: "/blog/ai-w-marketingu-msp-2025",
    linksTo: ["/kampanie-reklamowe", "/content-marketing", "/google-ads", "/blog/marketing-automation-2025", "/pozycjonowanie"],
    linkedFrom: ["/blog/marketing-automation-2025"]
  },
  "branding-dla-startupow": {
    title: "Branding dla startupów",
    path: "/blog/branding-dla-startupow",
    linksTo: ["/identyfikacja-wizualna", "/strony-internetowe", "/social-media", "/content-marketing"],
    linkedFrom: []
  },
  "influencer-marketing-polska": {
    title: "Influencer marketing w Polsce",
    path: "/blog/influencer-marketing-polska",
    linksTo: ["/social-media", "/instagram-ads", "/tiktok-ads", "/kampanie-reklamowe", "/blog/instagram-reels-vs-tiktok"],
    linkedFrom: ["/blog/b2b-vs-b2c-marketing", "/blog/instagram-reels-vs-tiktok"]
  },
  "instagram-reels-vs-tiktok": {
    title: "Instagram Reels vs TikTok",
    path: "/blog/instagram-reels-vs-tiktok",
    linksTo: ["/instagram-ads", "/tiktok-ads", "/social-media", "/blog/influencer-marketing-polska", "/spoty-reklamowe"],
    linkedFrom: ["/blog/influencer-marketing-polska", "/blog/tiktok-dla-biznesu"]
  },
  "tiktok-dla-biznesu": {
    title: "TikTok dla biznesu",
    path: "/blog/tiktok-dla-biznesu",
    linksTo: ["/tiktok-ads", "/social-media", "/identyfikacja-wizualna", "/strony-internetowe", "/blog/instagram-reels-vs-tiktok"],
    linkedFrom: ["/blog/instagram-reels-vs-tiktok"]
  },
  "seo-lokalne-poznan-poradnik": {
    title: "SEO lokalne Poznań",
    path: "/blog/seo-lokalne-poznan-poradnik",
    linksTo: ["/pozycjonowanie-google-maps", "/pozycjonowanie-stron-poznan", "/google-ads", "/strony-internetowe-poznan"],
    linkedFrom: []
  },
  "kampania-reklamowa-marketingowa": {
    title: "Kampania reklamowa i marketingowa",
    path: "/blog/kampania-reklamowa-marketingowa",
    linksTo: ["/kampanie-reklamowe", "/google-ads", "/facebook-ads", "/social-media", "/content-marketing", "/blog/google-ads-vs-facebook-ads"],
    linkedFrom: []
  },
  "personal-branding-linkedin": {
    title: "Personal branding na LinkedIn",
    path: "/blog/personal-branding-linkedin",
    linksTo: ["/linkedin-ads", "/social-media", "/content-marketing", "/identyfikacja-wizualna"],
    linkedFrom: []
  },
  "video-marketing-2025": {
    title: "Video marketing 2025",
    path: "/blog/video-marketing-2025",
    linksTo: ["/produkcja-filmow-poznan", "/spoty-reklamowe", "/youtube-ads", "/tiktok-ads", "/social-media"],
    linkedFrom: []
  },
  "psychologia-cen-marketing": {
    title: "Psychologia cen w marketingu",
    path: "/blog/psychologia-cen-marketing",
    linksTo: ["/ecommerce-tworzenie-sklepu", "/strony-internetowe", "/kampanie-reklamowe", "/content-marketing"],
    linkedFrom: []
  },
  "jak-stworzyc-landing-page": {
    title: "Jak stworzyć landing page",
    path: "/blog/jak-stworzyc-landing-page",
    linksTo: ["/landing-page", "/strony-internetowe", "/content-marketing", "/realizacje", "/blog/copywriting-landing-page"],
    linkedFrom: ["/blog/copywriting-landing-page"]
  }
};

// Mapa stron usługowych
const servicePages = {
  "/pozycjonowanie": { title: "Pozycjonowanie SEO", linkedFrom: 15 },
  "/google-ads": { title: "Google Ads", linkedFrom: 12 },
  "/facebook-ads": { title: "Facebook Ads", linkedFrom: 10 },
  "/kampanie-reklamowe": { title: "Kampanie reklamowe", linkedFrom: 11 },
  "/content-marketing": { title: "Content Marketing", linkedFrom: 13 },
  "/strony-internetowe": { title: "Strony internetowe", linkedFrom: 9 },
  "/ecommerce-tworzenie-sklepu": { title: "E-commerce", linkedFrom: 7 },
  "/social-media": { title: "Social Media", linkedFrom: 10 },
  "/identyfikacja-wizualna": { title: "Identyfikacja wizualna", linkedFrom: 5 },
  "/instagram-ads": { title: "Instagram Ads", linkedFrom: 6 },
  "/tiktok-ads": { title: "TikTok Ads", linkedFrom: 7 },
  "/linkedin-ads": { title: "LinkedIn Ads", linkedFrom: 4 },
  "/youtube-ads": { title: "YouTube Ads", linkedFrom: 3 },
  "/landing-page": { title: "Landing Page", linkedFrom: 4 },
  "/produkcja-filmow-poznan": { title: "Produkcja filmów", linkedFrom: 3 },
  "/spoty-reklamowe": { title: "Spoty reklamowe", linkedFrom: 4 },
  "/pozycjonowanie-google-maps": { title: "Pozycjonowanie Google Maps", linkedFrom: 2 },
  "/audyt-seo": { title: "Audyt SEO", linkedFrom: 2 }
};

// Generuj raport
function generateReport() {
  console.log("═══════════════════════════════════════════════════════════════");
  console.log("  MAPA LINKOWANIA WEWNĘTRZNEGO - FOTZ STUDIO");
  console.log("  Data generacji:", new Date().toISOString());
  console.log("═══════════════════════════════════════════════════════════════\n");

  console.log("📊 STATYSTYKI OGÓLNE:");
  console.log("─────────────────────────────────────────────────────────────────");
  console.log(`  Artykuły blogowe: ${Object.keys(blogArticles).length}`);
  console.log(`  Strony usługowe: ${Object.keys(servicePages).length}`);
  
  let totalLinks = 0;
  Object.values(blogArticles).forEach(article => {
    totalLinks += article.linksTo.length;
  });
  console.log(`  Łączna liczba linków wewnętrznych z bloga: ${totalLinks}`);
  console.log(`  Średnia linków na artykuł: ${(totalLinks / Object.keys(blogArticles).length).toFixed(1)}\n`);

  console.log("📝 ARTYKUŁY BLOGOWE I ICH POWIĄZANIA:");
  console.log("─────────────────────────────────────────────────────────────────");
  
  Object.entries(blogArticles).forEach(([id, article]) => {
    console.log(`\n  📄 ${article.title}`);
    console.log(`     Path: ${article.path}`);
    console.log(`     Linkuje do (${article.linksTo.length}):`);
    article.linksTo.forEach(link => {
      const isService = !link.startsWith("/blog/");
      console.log(`       ${isService ? "🔗" : "📄"} ${link}`);
    });
    if (article.linkedFrom.length > 0) {
      console.log(`     Linkowane z (${article.linkedFrom.length}):`);
      article.linkedFrom.forEach(link => {
        console.log(`       ← ${link}`);
      });
    }
  });

  console.log("\n\n🎯 STRONY USŁUGOWE - LICZBA LINKÓW PRZYCHODZĄCYCH:");
  console.log("─────────────────────────────────────────────────────────────────");
  
  const sortedServices = Object.entries(servicePages)
    .sort((a, b) => b[1].linkedFrom - a[1].linkedFrom);
  
  sortedServices.forEach(([path, data]) => {
    const bar = "█".repeat(data.linkedFrom);
    console.log(`  ${data.title.padEnd(30)} ${bar} (${data.linkedFrom})`);
  });

  console.log("\n\n⚠️  STRONY WYMAGAJĄCE WIĘCEJ LINKÓW (< 5):");
  console.log("─────────────────────────────────────────────────────────────────");
  
  sortedServices
    .filter(([_, data]) => data.linkedFrom < 5)
    .forEach(([path, data]) => {
      console.log(`  ⚠️  ${data.title} (${path}) - tylko ${data.linkedFrom} linków`);
    });

  console.log("\n\n🔄 POWIĄZANIA MIĘDZY ARTYKUŁAMI (Blog ↔ Blog):");
  console.log("─────────────────────────────────────────────────────────────────");
  
  Object.entries(blogArticles).forEach(([id, article]) => {
    const blogLinks = article.linksTo.filter(link => link.startsWith("/blog/"));
    if (blogLinks.length > 0) {
      console.log(`  ${article.title}`);
      blogLinks.forEach(link => {
        const targetId = link.replace("/blog/", "");
        const targetArticle = Object.values(blogArticles).find(a => a.path === link);
        console.log(`    → ${targetArticle?.title || link}`);
      });
    }
  });

  console.log("\n═══════════════════════════════════════════════════════════════");
  console.log("  KONIEC RAPORTU");
  console.log("═══════════════════════════════════════════════════════════════\n");
}

generateReport();
