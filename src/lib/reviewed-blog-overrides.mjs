import {
  reviewedContentStrategyArticleSchema,
  reviewedContentStrategyDescription,
  reviewedContentStrategyFaqSchema,
  reviewedContentStrategyHeadline,
} from "./reviewed-content-strategy-2026.mjs";

/** Reviewed CMS presentation fields shared by prerender, SSR and hydration. */
export const reviewedBlogOverrides = {
  "strategia-content-marketingu-skuteczny-przewodnik-dla-firm": {
    description: reviewedContentStrategyDescription,
    headline: reviewedContentStrategyHeadline,
    articleSchema: reviewedContentStrategyArticleSchema,
    faqSchema: reviewedContentStrategyFaqSchema,
  },
};
