# Information Architecture Optimization Implementation Plan

## Overview
Restructure Fotz Studio website from flat 140+ root-level pages into logical hierarchy with topical clusters for better UX, SEO, and conversion.

**Branch:** `claude/review-architecture-optimization-t81Oj`  
**Approach:** 9 implementation phases with separate commits  
**Total Changes:** ~600 lines in App.tsx + Nav updates + ~80 page canonical URLs  

---

## Phase 1: Core Routing Structure (App.tsx)
**Commit:** "Phase 1: Add new cluster routes to App.tsx"

### Changes:
1. Add lazy component imports for new cluster hub pages:
   - `SEOCluster` (NEW)
   - `SocialMediaCluster` (NEW)
   - `PerformanceMarketingCluster` (NEW)
   - `ContentMarketingCluster` (NEW)
   - `UslugiCluster` (NEW)

2. Add new route definitions BEFORE existing routes (maintain backward compatibility):
   ```
   /seo -> SEOCluster
   /social-media -> SocialMediaCluster
   /performance-marketing -> PerformanceMarketingCluster
   /content-marketing -> ContentMarketingCluster
   /uslugi -> UslugiCluster
   ```

3. Keep all existing root-level routes (will handle redirects later)

### Output: App.tsx with ~50 new lines of imports + route definitions

---

## Phase 2: City Pages Under /uslugi/strony-internetowe/
**Commit:** "Phase 2: Add city page routes under /uslugi/strony-internetowe/"

### Changes:
1. Add 30 city page routes under `/uslugi/strony-internetowe/`:
   ```
   /uslugi/strony-internetowe/poznan -> StronyInternetowePoznan
   /uslugi/strony-internetowe/warszawa -> StronyInternetoweWarszawa
   ... (28 more cities)
   ```

2. Update StronyInternetowe component route:
   ```
   /uslugi/strony-internetowe -> StronyInternetowe
   ```

3. Keep old routes `/strony-internetowe-[city]` for now (redirect later)

### Output: ~40 new route lines in App.tsx

---

## Phase 3: Create Cluster Hub Pages
**Commit:** "Phase 3: Create cluster hub page components"

### New Components:
- `src/pages/SEOCluster.tsx` - Hub for /seo/
- `src/pages/SocialMediaCluster.tsx` - Hub for /social-media/
- `src/pages/PerformanceMarketingCluster.tsx` - Hub for /performance-marketing/
- `src/pages/ContentMarketingCluster.tsx` - Hub for /content-marketing/
- `src/pages/UslugiCluster.tsx` - Hub for /uslugi/

Each will include:
- SEO metadata (title, description, canonical)
- Featured services grid
- Links to child pages
- CTA sections

### Output: 5 new page components

---

## Phase 4: Service Pages Under Clusters
**Commit:** "Phase 4: Add service page routes under clusters"

### SEO Cluster Routes:
```
/seo/audyt -> AudytSEO (moved)
/seo/pozycjonowanie -> Pozycjonowanie (moved)
/seo/lokalne-poznan -> BlogSEOLokalnePoznan (moved)
/seo/ecommerce -> BlogSEOEcommerce (moved)
/seo/google-maps -> PozycjonowanieGoogleMaps (moved)
/seo/pozycjonowanie-poznan -> PozycjonowanieStronPoznan (moved)
```

### Social Media Cluster Routes:
```
/social-media/obsluga -> SocialMedia (moved)
/social-media/poznan -> SocialMediaPoznan (moved)
/social-media/influencer -> BlogInfluencerMarketing (moved)
/social-media/reels-vs-tiktok -> BlogReelsVsTikTok (moved)
/social-media/tiktok-biznes -> BlogTikTokBiznes (moved)
```

### Performance Marketing Cluster Routes:
```
/performance-marketing/google-ads -> GoogleAds (moved)
/performance-marketing/facebook-ads -> FacebookAds (moved)
/performance-marketing/instagram-ads -> InstagramAds (moved)
/performance-marketing/tiktok-ads -> TikTokAds (moved)
/performance-marketing/linkedin-ads -> LinkedInAds (moved)
/performance-marketing/youtube-ads -> YouTubeAds (moved)
/performance-marketing/facebook-instagram-ads -> FacebookInstagramAds (moved)
/performance-marketing/remarketing -> BlogRemarketing (moved)
/performance-marketing/google-vs-facebook -> BlogGoogleVsFacebook (moved)
/performance-marketing/kampanie -> KampanieReklamowe (moved)
/performance-marketing/kampanie-poznan -> KampanieReklamowePoznan (moved)
```

### Content Marketing Cluster Routes:
```
/content-marketing/strategia -> ContentMarketing (moved)
/content-marketing/copywriting-landing -> BlogCopywritingLanding (moved)
/content-marketing/email-2025 -> BlogEmailMarketing (moved)
/content-marketing/kampanie -> BlogKampaniaReklamowa (moved)
```

### Uslugi Cluster Routes (Other Services):
```
/uslugi/branding -> IdentyfikacjaWizualna (moved)
/uslugi/grafika -> AgencjaGraficzna (moved)
/uslugi/produkcja-filmow -> ProdukcjaFilmowPoznan (moved)
/uslugi/produkcja-video -> ProdukcjaFilmowPoznan (moved)
/uslugi/fotografia -> FotografPoznan (moved)
/uslugi/fotografia-z-drona -> FotografiaZDrona (moved)
/uslugi/spoty-reklamowe -> SpotyReklamowe (moved)
/uslugi/wizualizacje-3d -> Wizualizacje3D (moved)
/uslugi/kompleksowa-obsluga -> KompleksowaObsluga (moved)
/uslugi/ecommerce -> EcommerceTworzenie (moved)
/uslugi/studio-podcastowe -> StudioPodcastowe (moved)
```

### Keep existing root paths for now (old URLs):
- `/facebook-ads`
- `/google-ads`
- `/pozycjonowanie`
- etc.

### Output: ~75 new route lines in App.tsx

---

## Phase 5: Add 301 Redirect Routes
**Commit:** "Phase 5: Add 301 redirects for old URLs"

### Redirect Groups:

**A) City Pages Redirects (30 routes):**
```
/strony-internetowe-poznan -> /uslugi/strony-internetowe/poznan 301
/strony-internetowe-warszawa -> /uslugi/strony-internetowe/warszawa 301
... (28 more)
```

**B) Service Pages to Clusters (60+ routes):**
```
/facebook-ads -> /performance-marketing/facebook-ads 301
/google-ads -> /performance-marketing/google-ads 301
/pozycjonowanie -> /seo/pozycjonowanie 301
/social-media -> /social-media/obsluga 301
/branding -> /uslugi/branding 301
... (55+ more)
```

**C) Blog Posts to Clusters:**
```
/blog/seo-lokalne-poznan -> /seo/lokalne-poznan 301
/blog/remarketing-poradnik -> /performance-marketing/remarketing 301
/blog/email-marketing-2025 -> /content-marketing/email-2025 301
... (15+ more)
```

### Output: ~100 Redirect301 route definitions in App.tsx

---

## Phase 6: Update Navigation Components
**Commit:** "Phase 6: Update MegaMenu and Footer navigation"

### Changes:

**MegaMenu.tsx:**
- Add cluster sections to mega menu
- Update service links to point to cluster hubs
- Update city pages to `/uslugi/strony-internetowe/`
- Add cluster hub links

**Footer.tsx:**
- Update service links in footer
- Update city pages links
- Add cluster navigation sections

### Output: ~100 lines of changes in nav components

---

## Phase 7: Update Canonical URLs
**Commit:** "Phase 7: Update canonical URLs in page components"

### Process:
For each page that moved, update `SEOHead` component canonical URL:

**Examples:**
- `AudytSEO.tsx`: `/audyt-seo` → `/seo/audyt`
- `FacebookAds.tsx`: `/facebook-ads` → `/performance-marketing/facebook-ads`
- `SocialMedia.tsx`: `/social-media` → `/social-media/obsluga`
- `StronyInternetowePoznan.tsx`: `/strony-internetowe-poznan` → `/uslugi/strony-internetowe/poznan`

### Affected Pages:
- ~60 service pages
- ~30 city pages
- ~15 blog posts that moved

### Output: ~200 lines of canonical URL updates across files

---

## Phase 8: Update Internal Links
**Commit:** "Phase 8: Update internal href links across pages"

### Files to Update:
- Blog components: Update related service links
- Case study components: Update service links
- Industry (branze) pages: Update cluster links
- FAQ: Update service page links
- Components: RelatedServices, ServiceGrid, etc.

### Example Changes:
```
href="/facebook-ads" -> href="/performance-marketing/facebook-ads"
href="/social-media" -> href="/social-media/obsluga"
href="/pozycjonowanie" -> href="/seo/pozycjonowanie"
href="/strony-internetowe-poznan" -> href="/uslugi/strony-internetowe/poznan"
```

### Output: ~150 href updates across ~40 files

---

## Phase 9: Final Testing & Verification
**Commit:** "Phase 9: Final verification and cleanup"

### Checklist:
- [ ] `npm run build` - zero TypeScript errors
- [ ] Test all new routes work
- [ ] Test all redirects work
- [ ] Test navigation clicks through menus
- [ ] Verify canonical URLs are correct
- [ ] Check for broken internal links
- [ ] Verify sitemap.xml has new URLs

### Testing Commands:
```bash
npm run build
npm run preview  # Test locally
```

---

## Summary of Changes

| Phase | Type | Files Changed | Lines | Commits |
|-------|------|---------------|-------|---------|
| 1 | Routing | App.tsx | +50 | 1 |
| 2 | Routing | App.tsx | +40 | 1 |
| 3 | Components | 5 new .tsx | +500 | 1 |
| 4 | Routing | App.tsx | +75 | 1 |
| 5 | Routing | App.tsx | +100 | 1 |
| 6 | Navigation | MegaMenu, Footer | +100 | 1 |
| 7 | SEO | ~60 pages | +180 | 1 |
| 8 | Internal Links | ~40 pages | +150 | 1 |
| 9 | Verification | Tests | - | 1 |
| **Total** | **All** | **~120 files** | **~1,195 lines** | **9 commits** |

---

## Success Criteria

✅ **After Implementation:**
- All new routes respond correctly
- All old routes redirect with 301
- Navigation reflects new structure
- Canonical URLs point to new paths
- No broken internal links
- Build succeeds with zero errors
- All pages load without console errors

✅ **Expected Outcome:**
- Improved user navigation (fewer clicks to reach services)
- Better SEO topical authority
- Clearer information hierarchy
- Proper 301 redirect chain
- Maintained backward compatibility

---

## Rollback Plan

If something breaks:
1. `git reset --soft HEAD~1` to undo last commit
2. `git status` to see what changed
3. Fix and re-commit
4. Continue from next phase

---

**Status:** Ready to start Phase 1
**Next Step:** Awaiting go-ahead to begin implementation
