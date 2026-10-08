module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      // Explicit samples prevent an accidental Lighthouse run on 1,000+ pages.
      url: ['http://localhost/', 'http://localhost/social-media/obsluga', 'http://localhost/uslugi/strony-internetowe', 'http://localhost/seo/audyt'],
      numberOfRuns: 2,
      settings: { onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'] },
    },
    assert: {
      assertions: {
        'categories:seo': ['error', { minScore: 0.95 }],
        'image-alt': ['error', { minScore: 1 }],
        'document-title': ['error', { minScore: 1 }],
        'meta-description': ['error', { minScore: 1 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:performance': ['warn', { minScore: 0.7 }],
      },
    },
    upload: { target: 'filesystem', outputDir: './reports/lighthouse' },
  },
};
