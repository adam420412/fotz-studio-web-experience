#!/usr/bin/env node
/**
 * SEO Internal Links Report Generator
 * Generates a report of all internal links between blog articles and service pages
 */

import fs from 'fs';
import path from 'path';

// All blog articles with their paths
const blogArticles = [
  { id: 'seo-ecommerce', path: '/blog/seo-ecommerce', file: 'BlogSEOEcommerce.tsx', title: 'SEO dla E-commerce' },
  { id: 'b2b-vs-b2c', path: '/blog/marketing-b2b-vs-b2c', file: 'BlogB2BvsB2C.tsx', title: 'Marketing B2B vs B2C' },
  { id: 'landing-page', path: '/blog/landing-page-co-to', file: 'BlogLandingPage.tsx', title: 'Landing Page - co to jest' },
  { id: 'budzet-marketingowy', path: '/blog/budzet-marketingowy-firmy', file: 'BlogBudzetMarketingowy.tsx', title: 'Budżet marketingowy' },
  { id: 'tiktok-biznes', path: '/blog/tiktok-dla-biznesu', file: 'BlogTikTokBiznes.tsx', title: 'TikTok dla biznesu' },
  { id: 'branding-startupy', path: '/blog/branding-dla-startupow', file: 'BlogBrandingStartupy.tsx', title: 'Branding dla startupów' },
  { id: 'email-marketing', path: '/blog/email-marketing-2025', file: 'BlogEmailMarketing.tsx', title: 'Email marketing 2025' },
  { id: 'google-vs-facebook', path: '/blog/google-ads-vs-facebook-ads', file: 'BlogGoogleVsFacebook.tsx', title: 'Google Ads vs Facebook Ads' },
  { id: 'influencer-marketing', path: '/blog/influencer-marketing-polska', file: 'BlogInfluencerMarketing.tsx', title: 'Influencer marketing' },
  { id: 'koszt-strony', path: '/blog/ile-kosztuje-strona-internetowa', file: 'BlogKosztStrony.tsx', title: 'Ile kosztuje strona internetowa' },
  { id: 'reels-vs-tiktok', path: '/blog/instagram-reels-vs-tiktok', file: 'BlogReelsVsTikTok.tsx', title: 'Reels vs TikTok' },
  { id: 'seo-lokalne', path: '/blog/seo-lokalne-poznan-poradnik', file: 'BlogSEOLokalnePoznan.tsx', title: 'SEO lokalne Poznań' },
  { id: 'ux-ecommerce', path: '/blog/ux-ui-ecommerce', file: 'BlogUXEcommerce.tsx', title: 'UX/UI w e-commerce' },
  { id: 'personal-branding', path: '/blog/personal-branding-linkedin', file: 'BlogPersonalBrandingLinkedIn.tsx', title: 'Personal branding LinkedIn' },
  { id: 'video-marketing', path: '/blog/video-marketing-trendy-2025', file: 'BlogVideoMarketing.tsx', title: 'Video marketing 2025' },
  { id: 'marketing-automation', path: '/blog/marketing-automation-poradnik', file: 'BlogMarketingAutomation.tsx', title: 'Marketing automation' },
  { id: 'psychologia-cen', path: '/blog/psychologia-cen', file: 'BlogPsychologiaCen.tsx', title: 'Psychologia cen' },
  { id: 'remarketing', path: '/blog/remarketing-poradnik', file: 'BlogRemarketing.tsx', title: 'Remarketing poradnik' },
  { id: 'google-analytics', path: '/blog/google-analytics-4-poradnik', file: 'BlogGoogleAnalytics4.tsx', title: 'Google Analytics 4' },
  { id: 'copywriting-landing', path: '/blog/copywriting-landing-page', file: 'BlogCopywritingLanding.tsx', title: 'Copywriting landing page' },
  { id: 'ai-marketing', path: '/blog/ai-marketing-msp', file: 'BlogAIMarketing.tsx', title: 'AI w marketingu' },
  { id: 'kampania-reklamowa', path: '/blog/kampania-reklamowa-przyszlosc', file: 'BlogKampaniaReklamowa.tsx', title: 'Przyszłość kampanii reklamowych' },
];

// Service pages that should be linked from blog articles
const servicePages = [
  { path: '/strony-internetowe', title: 'Strony internetowe' },
  { path: '/social-media', title: 'Social Media' },
  { path: '/pozycjonowanie', title: 'Pozycjonowanie SEO' },
  { path: '/kampanie-reklamowe', title: 'Kampanie reklamowe' },
  { path: '/google-ads', title: 'Google Ads' },
  { path: '/facebook-ads', title: 'Facebook Ads' },
  { path: '/instagram-ads', title: 'Instagram Ads' },
  { path: '/tiktok-ads', title: 'TikTok Ads' },
  { path: '/linkedin-ads', title: 'LinkedIn Ads' },
  { path: '/youtube-ads', title: 'YouTube Ads' },
  { path: '/ecommerce-tworzenie-sklepu', title: 'E-commerce' },
  { path: '/content-marketing', title: 'Content marketing' },
  { path: '/identyfikacja-wizualna', title: 'Identyfikacja wizualna' },
  { path: '/pozycjonowanie-google-maps', title: 'Google Maps SEO' },
  { path: '/fotografia-z-drona', title: 'Fotografia z drona' },
  { path: '/wizualizacje-3d', title: 'Wizualizacje 3D' },
  { path: '/produkcja-filmow-poznan', title: 'Produkcja filmów' },
];

// Recommended internal links matrix (which articles should link to which)
const recommendedLinks = {
  'seo-ecommerce': ['/pozycjonowanie', '/ecommerce-tworzenie-sklepu', '/google-ads', '/content-marketing'],
  'b2b-vs-b2c': ['/linkedin-ads', '/content-marketing', '/facebook-ads', '/google-ads', '/social-media'],
  'landing-page': ['/strony-internetowe', '/content-marketing', '/kampanie-reklamowe'],
  'budzet-marketingowy': ['/google-ads', '/facebook-ads', '/social-media', '/pozycjonowanie', '/content-marketing'],
  'tiktok-biznes': ['/tiktok-ads', '/social-media', '/identyfikacja-wizualna', '/strony-internetowe'],
  'branding-startupy': ['/identyfikacja-wizualna', '/strony-internetowe', '/social-media'],
  'email-marketing': ['/social-media', '/strony-internetowe', '/content-marketing', '/kampanie-reklamowe'],
  'google-vs-facebook': ['/google-ads', '/facebook-ads', '/instagram-ads', '/ecommerce-tworzenie-sklepu', '/kampanie-reklamowe'],
  'influencer-marketing': ['/social-media', '/kampanie-reklamowe', '/instagram-ads', '/tiktok-ads'],
  'koszt-strony': ['/strony-internetowe', '/pozycjonowanie', '/ecommerce-tworzenie-sklepu'],
  'reels-vs-tiktok': ['/social-media', '/instagram-ads', '/tiktok-ads', '/produkcja-filmow-poznan'],
  'seo-lokalne': ['/pozycjonowanie', '/pozycjonowanie-google-maps', '/strony-internetowe'],
  'ux-ecommerce': ['/ecommerce-tworzenie-sklepu', '/strony-internetowe', '/identyfikacja-wizualna'],
  'personal-branding': ['/linkedin-ads', '/social-media', '/content-marketing'],
  'video-marketing': ['/produkcja-filmow-poznan', '/social-media', '/youtube-ads', '/tiktok-ads'],
  'marketing-automation': ['/kampanie-reklamowe', '/pozycjonowanie', '/content-marketing', '/google-ads', '/facebook-ads'],
  'psychologia-cen': ['/ecommerce-tworzenie-sklepu', '/strony-internetowe', '/content-marketing'],
  'remarketing': ['/google-ads', '/facebook-ads', '/kampanie-reklamowe', '/ecommerce-tworzenie-sklepu'],
  'google-analytics': ['/pozycjonowanie', '/google-ads', '/kampanie-reklamowe', '/ecommerce-tworzenie-sklepu'],
  'copywriting-landing': ['/strony-internetowe', '/content-marketing', '/kampanie-reklamowe'],
  'ai-marketing': ['/content-marketing', '/social-media', '/kampanie-reklamowe', '/google-ads'],
  'kampania-reklamowa': ['/kampanie-reklamowe', '/google-ads', '/facebook-ads', '/social-media'],
};

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const links = [];
    
    // Find all internal links
    const linkRegex = /Link\s+to=["']([^"']+)["']/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    
    return links;
  } catch (error) {
    return [];
  }
}

function generateReport() {
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('              SEO INTERNAL LINKS REPORT - FOTZ STUDIO');
  console.log('═══════════════════════════════════════════════════════════════\n');
  
  const report = {
    generated: new Date().toISOString(),
    summary: { totalArticles: 0, totalLinks: 0, missingLinks: 0, wellLinked: 0, needsWork: 0 },
    articles: [],
  };
  
  for (const article of blogArticles) {
    const filePath = path.join('src/pages', article.file);
    const existingLinks = analyzeFile(filePath);
    const recommended = recommendedLinks[article.id] || [];
    
    // Filter to only service page links
    const serviceLinks = existingLinks.filter(link => 
      servicePages.some(sp => sp.path === link) || link.startsWith('/blog/')
    );
    
    const missingServiceLinks = recommended.filter(rec => !existingLinks.includes(rec));
    const blogLinks = existingLinks.filter(link => link.startsWith('/blog/'));
    
    const articleReport = {
      id: article.id,
      title: article.title,
      path: article.path,
      existingServiceLinks: serviceLinks.filter(l => !l.startsWith('/blog/')),
      existingBlogLinks: blogLinks,
      missingRecommendedLinks: missingServiceLinks,
      score: missingServiceLinks.length === 0 ? '✅ OK' : (missingServiceLinks.length <= 2 ? '⚠️ Fair' : '❌ Needs work'),
    };
    
    report.articles.push(articleReport);
    report.summary.totalArticles++;
    report.summary.totalLinks += serviceLinks.length;
    report.summary.missingLinks += missingServiceLinks.length;
    
    if (missingServiceLinks.length === 0) {
      report.summary.wellLinked++;
    } else {
      report.summary.needsWork++;
    }
    
    // Console output
    console.log(`📄 ${article.title}`);
    console.log(`   Path: ${article.path}`);
    console.log(`   Service links: ${articleReport.existingServiceLinks.length}`);
    console.log(`   Blog links: ${blogLinks.length}`);
    if (missingServiceLinks.length > 0) {
      console.log(`   ⚠️  Missing: ${missingServiceLinks.join(', ')}`);
    } else {
      console.log(`   ✅ All recommended links present`);
    }
    console.log('');
  }
  
  // Summary
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('                           SUMMARY');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`📊 Total articles analyzed: ${report.summary.totalArticles}`);
  console.log(`🔗 Total internal links found: ${report.summary.totalLinks}`);
  console.log(`✅ Well-linked articles: ${report.summary.wellLinked}`);
  console.log(`⚠️  Articles needing work: ${report.summary.needsWork}`);
  console.log(`❌ Missing recommended links: ${report.summary.missingLinks}`);
  console.log(`📈 Coverage: ${Math.round((report.summary.wellLinked / report.summary.totalArticles) * 100)}%`);
  
  // Write JSON report
  fs.writeFileSync('seo-internal-links-report.json', JSON.stringify(report, null, 2));
  console.log('\n📁 Report saved to: seo-internal-links-report.json');
  
  return report;
}

generateReport();
