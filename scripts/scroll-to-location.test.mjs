import test from 'node:test';
import assert from 'node:assert/strict';
import { scrollToLocation } from '../src/lib/scroll-to-location.mjs';

function browserFixture() {
  const ids = new Map(), scrolled = [], timers = new Map();
  let observe, disconnects = 0, tops = 0;
  const browser = {
    document: { body: {}, getElementById: id => ids.get(id) },
    scrollTo: () => tops++,
    MutationObserver: class {
      constructor(fn) { observe = fn; }
      observe() {}
      disconnect() { disconnects++; observe = undefined; }
    },
    setTimeout: fn => { timers.set(1, fn); return 1; },
    clearTimeout: id => timers.delete(id),
  };
  return { browser, timers, scrolled, add: id => ids.set(id, { scrollIntoView: () => scrolled.push(id) }), mutate: () => observe?.(), disconnected: () => disconnects, tops: () => tops };
}

test('a lazy route fragment scrolls when its target appears and then stops observing', () => {
  const f = browserFixture();
  const cleanup = scrollToLocation('#przyklad-planu', f.browser);
  assert.deepEqual(f.scrolled, []);
  f.mutate();
  f.add('przyklad-planu'); f.mutate();
  assert.deepEqual(f.scrolled, ['przyklad-planu']);
  assert.equal(f.disconnected(), 1);
  assert.equal(f.timers.size, 0);
  f.mutate();
  assert.deepEqual(f.scrolled, ['przyklad-planu']);
  cleanup();
});

test('navigation cleanup prevents a late previous route from stealing the scroll', () => {
  const f = browserFixture();
  const cleanup = scrollToLocation('#materialy', f.browser);
  cleanup();
  f.add('materialy'); f.mutate();
  assert.deepEqual(f.scrolled, []);
  assert.equal(f.timers.size, 0);
});

test('existing and encoded fragments resolve while empty, malformed and missing fragments are bounded', () => {
  const f = browserFixture();
  f.add('zażółć');
  scrollToLocation('#za%C5%BC%C3%B3%C5%82%C4%87', f.browser);
  assert.deepEqual(f.scrolled, ['zażółć']);
  assert.equal(f.timers.size, 0);
  for (const hash of ['', '#', '#%XY']) scrollToLocation(hash, f.browser);
  assert.equal(f.tops(), 4);
  assert.equal(f.timers.size, 0);
  scrollToLocation('#missing', f.browser);
  f.timers.get(1)();
  assert.equal(f.disconnected(), 1);
  assert.equal(f.timers.size, 0);
});
