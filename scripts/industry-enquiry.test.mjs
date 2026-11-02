import test from 'node:test';
import assert from 'node:assert/strict';
import { industryWork } from '../src/data/industry-work.mjs';
import { enquiryIndustries, industryEnquiryHref, readIndustryContext, appendIndustryContext } from '../src/lib/industry-enquiry.mjs';
import { portfolioEnquiryHref, readPortfolioReference, appendPortfolioReference } from '../src/lib/portfolio-enquiry.mjs';
import { readEnquiryContext } from '../src/lib/enquiry.mjs';

test('every curated industry survives both contact and consultation journeys', () => {
  assert.deepEqual(Object.keys(enquiryIndustries).sort(), Object.keys(industryWork).sort());
  for (const [id, name] of Object.entries(enquiryIndustries)) {
    for (const destination of ['/kontakt', '/konsultacja']) {
      const url = new URL(industryEnquiryHref(id, destination), 'https://www.fotz-studio.pl');
      assert.equal(url.pathname, destination);
      assert.equal(url.hash, '#formularz');
      assert.deepEqual(readIndustryContext(url.search), { id, name, path: `/dla-kogo/${id}` });
      const brief = 'Chcę pokazać swoją firmę.\nTermin: grudzień.';
      const message = appendIndustryContext(brief, id);
      assert.ok(message.startsWith(brief));
      assert.ok(message.includes(`Branża: ${name}`));
      assert.ok(message.includes(`https://www.fotz-studio.pl/dla-kogo/${id}`));
    }
  }
});

test('industry context preserves the chosen service and portfolio reference', () => {
  const url = new URL(portfolioEnquiryHref('cupra-raval', 'automotive'), 'https://www.fotz-studio.pl');
  assert.deepEqual(readEnquiryContext(url.search), { service: 'video', variant: 'spot' });
  assert.equal(readPortfolioReference(url.search).id, 'cupra-raval');
  assert.equal(readIndustryContext(url.search).id, 'automotive');
  const message = appendIndustryContext(appendPortfolioReference('Mój brief', 'cupra-raval'), 'automotive');
  assert.ok(message.includes('CUPRA Raval'));
  assert.ok(message.includes('Branża: Motoryzacja'));
  const lawUrl = new URL(industryEnquiryHref('prawo-finanse', '/kontakt?usluga=web#formularz'), url.origin);
  assert.equal(readEnquiryContext(lawUrl.search).service, 'web');
  assert.equal(readIndustryContext(lawUrl.search).id, 'prawo-finanse');
});

test('unknown or removed industry cannot add caller text, links or stale context', () => {
  for (const id of ['__proto__', 'constructor', 'https://example.com', '<script>alert(1)</script>', 'beauty-wellness\nBcc: injected@example.com', '', undefined]) {
    assert.equal(readIndustryContext(`?branza=${encodeURIComponent(id ?? '')}`), null);
    assert.equal(appendIndustryContext('Mój brief', id), 'Mój brief');
    assert.equal(industryEnquiryHref(id, '/kontakt?usluga=video&branza=beauty-wellness'), '/kontakt?usluga=video#formularz');
  }
  assert.equal(readIndustryContext(new URL(portfolioEnquiryHref('cupra-raval'), 'https://www.fotz-studio.pl').search), null);
});

test('industry enquiry links cannot change the contact destination to an external site', () => {
  for (const base of ['https://example.com/kontakt', '//example.com/konsultacja', 'javascript:alert(1)', '/realizacje', 'http://[']) {
    assert.equal(industryEnquiryHref('automotive', base), '/kontakt#formularz');
  }
});
