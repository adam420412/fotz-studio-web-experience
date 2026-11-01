/**
 * CMS articles that must never be publicly visible (withdrawn test content
 * that cannot be unpublished from the repo side). The SSR layer serves these
 * as 404 and every listing, cluster query and sitemap skips them.
 */
export const excludedBlogSlugs = new Set(['test-babylove-article']);
