import test from 'node:test';
import assert from 'node:assert/strict';
import { decodeRenderedHtml } from '../src/lib/decode-rendered-html.mjs';

test('SSR preserves Polish, emoji, links and JSON across every byte boundary', () => {
  const html = '<h1>Zażółć gęślą jaźń — Poznań 💬</h1><a href="/kontakt?usluga=seo&amp;wariant=audit">499 zł</a><script type="application/json">{"nul":"\\u0000"}</script>';
  const bytes = Buffer.from(html);
  for (let i = 1; i < bytes.length; i++) {
    assert.equal(decodeRenderedHtml([bytes.subarray(0, i), bytes.subarray(i)]), html, `split at byte ${i}`);
  }
});

test('SSR removes invalid NUL padding without replacing Polish characters', () => {
  const expected = '<p>499 zł/mies. — bezpłatna konsultacja</p>';
  const bytes = Buffer.from(expected);
  const offset = bytes.indexOf(Buffer.from('ł'));
  for (const index of [offset, offset + 1]) {
    assert.equal(decodeRenderedHtml([bytes.subarray(0, index), Buffer.from([0]), bytes.subarray(index)]), expected);
  }
});

test('SSR rejects malformed UTF-8 rather than publishing replacement characters', () => {
  assert.throws(() => decodeRenderedHtml([Buffer.from([0xc5])]), /encoded data/);
});
