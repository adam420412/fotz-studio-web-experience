// Audits distinct templates, not thousands of near-identical city pages.
// Override the origin with FOTZ_AUDIT_SITE to compare a preview before release.
export default {
  site: process.env.FOTZ_AUDIT_SITE || 'https://www.fotz-studio.pl',
  outputPath: process.env.FOTZ_AUDIT_OUTPUT || './reports/unlighthouse',
  urls: process.env.FOTZ_AUDIT_PATHS?.split(',').filter(Boolean) || [
    '/', '/uslugi', '/social-media/obsluga', '/agencja-social-media',
    '/social-media/content', '/uslugi/strony-internetowe',
    '/uslugi/strony-internetowe/wielkopolska', '/uslugi/video-marketing',
    '/uslugi/fotografia-produktowa', '/seo/audyt', '/realizacje',
    '/realizacje/enea-stadion', '/realizacje/gierki', '/realizacje/klagem',
    '/o-nas', '/kontakt', '/cennik', '/dla-kogo/instytucje',
    '/blog/ile-kosztuje-strona-internetowa', '/blog/strona-internetowa-dla-malej-firmy',
  ],
  scanner: { device: 'mobile', samples: 1, throttle: true, dynamicSampling: false },
  // One Lighthouse worker avoids CPU contention distorting measurements.
  puppeteerClusterOptions: { maxConcurrency: 1 },
  ci: { reporter: 'jsonExpanded', buildStatic: true, budget: { seo: 95, accessibility: 90, performance: 70 } },
};
