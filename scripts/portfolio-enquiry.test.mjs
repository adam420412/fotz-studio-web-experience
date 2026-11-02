import test from 'node:test';
import assert from 'node:assert/strict';
import { instagramProjects } from '../src/data/instagram-projects.mjs';
import { readEnquiryContext } from '../src/lib/enquiry.mjs';
import { appendPortfolioReference, portfolioEnquiryHref, readPortfolioReference } from '../src/lib/portfolio-enquiry.mjs';

test('each reel reaches the contact form with a paid video scope and its reference', () => {
  for (const project of instagramProjects) {
    const url = new URL(portfolioEnquiryHref(project.id), 'https://www.fotz-studio.pl');
    assert.equal(url.pathname, '/kontakt');
    assert.equal(url.hash, '#formularz');
    const context = readEnquiryContext(url.search);
    assert.equal(context.service, 'video');
    assert.ok(['film', 'spot', 'reels'].includes(context.variant));
    const reference = readPortfolioReference(url.search);
    assert.equal(reference.id, project.id);
    const message = appendPortfolioReference('Film dla mojej firmy.\nTermin: grudzień.', reference.id);
    assert.ok(message.startsWith('Film dla mojej firmy.\nTermin: grudzień.'));
    assert.ok(message.includes(project.name));
    assert.ok(message.includes(project.url));
  }
});

test('unknown or removed references cannot inject text or links into an enquiry', () => {
  for (const id of ['__proto__', 'constructor', 'https://example.com', '<script>alert(1)</script>', '', undefined]) {
    assert.equal(readPortfolioReference(`?realizacja=${encodeURIComponent(id ?? '')}`), null);
    assert.equal(appendPortfolioReference('Mój brief', id), 'Mój brief');
  }
  assert.equal(portfolioEnquiryHref('unknown'), '/kontakt?usluga=video#formularz');
});
