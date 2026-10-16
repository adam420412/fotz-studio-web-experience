import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { findClaims, pageCopy, routeFiles } from './offer-claims.mjs';

// Golden set: real sentences removed from offers during the October review
// (PR #43–#65). Each must still be detected so the claim cannot return.
const rejected = [
  ['Wzrost rezerwacji online o 180% po wdrożeniu nowej strony z systemem rezerwacji.', 'percent'],
  ['+380% ruchu organicznego', 'percent'],
  ['-62% niższy CPA dzięki SEO vs Google Ads', 'percent'],
  ['Kampanie Meta Ads dla firm z Łodzi. Od 400 zł/mies.', 'price'],
  ['Nasze pakiety zaczynają się od 1200 zł/mies. dla lokalnych firm.', 'price'],
  ['Sklep internetowy (WooCommerce/Shopify): 5000-25 000 zł.', 'price'],
  ['Dlatego walczymy o TOP 3 dla każdej frazy.', 'ranking'],
  ['Gwarantujemy natomiast mierzalny wzrost ruchu organicznego.', 'guarantee'],
  ['Certyfikowani specjaliści Meta i Google.', 'certified'],
  ['Średnia ocena 4,9/5 od klientów.', 'rating'],
  ['Nasze biuro w Katowicach obsługuje firmy ze Śląska.', 'office'],
  ['FOTZ Studio ma siedzibę w Warszawie.', 'office'],
];

// Stated limits that reviewed offers use on purpose.
const accepted = [
  'Nie gwarantujemy TOP 3 po określonej liczbie tygodni.',
  'Nie można zagwarantować konkretnej pozycji ani tego, że każde wyświetlenie przyniesie klienta.',
  'Usunięto twierdzenia bez dowodów, nie podajemy stałych cen w zł.',
  'Czy gwarantujecie pierwsze miejsce w Google Maps?',
  'Nie przedstawiamy tej oferty jako biura w Krakowie.',
  'Sklep z siedzibą w Łodzi może sprzedawać w całej Polsce.',
  'FOTZ Studio ma siedzibę w Poznaniu.',
];

test('golden set of rejected claims is still detected', () => {
  for (const [sentence, rule] of rejected) {
    assert.ok(findClaims(sentence).some(item => item.rule === rule), `${rule} not detected: ${sentence}`);
  }
});

test('stated limits and questions are not reported as claims', () => {
  for (const sentence of accepted) assert.deepEqual(findClaims(sentence), [], sentence);
});

// Offers published after the October review. Their copy must stay free of
// unsupported claims; add each newly reviewed offer here when it ships.
const reviewed = [
  '/uslugi/strony-internetowe/legnica', '/agencja-marketingowa/poznan', '/seo/audyt', '/agencja-social-media',
  '/uslugi/video-marketing', '/uslugi/reklama-facebook', '/uslugi/strony-internetowe-dla-firm',
  '/seo/pozycjonowanie-katowice', '/seo/pozycjonowanie-krakow', '/seo/pozycjonowanie-poznan',
  '/content-marketing/strategia', '/agencja-marketingowa/wroclaw', '/social-media/obsluga', '/agencja-marketingowa/warszawa',
  '/performance-marketing/instagram-ads', '/uslugi/pozycjonowanie/opole', '/performance-marketing/facebook-ads/warszawa',
  '/performance-marketing/facebook-ads/lodz', '/uslugi/fotografia-produktowa', '/pozycjonowanie/legnica',
  '/agencja-marketingowa-opole', '/uslugi/pozycjonowanie-lokalne', '/kampanie-reklamowe-poznan', '/o-nas',
];
const files = routeFiles(new URL('../src/App.tsx', import.meta.url));

for (const path of reviewed) {
  test(`reviewed offer ${path} publishes no unsupported claims`, () => {
    const file = files.get(path);
    assert.ok(file && fs.existsSync(file), `no page source for ${path}`);
    const claims = findClaims(pageCopy(file));
    assert.deepEqual(claims.map(item => `${item.label}: „${item.match}” — ${item.sentence}`), []);
  });
}
